import {
  CoolerArticleResource,
  ArticleResourceWithOtherListUrl,
  FutureArticleResource,
  VisSettings,
} from '__tests__/new';
import nock from 'nock';
import { AbortOptimistic } from '@rest-hooks/endpoint';
import { act } from '@testing-library/react-hooks';
import { useContext } from 'react';

import {
  makeRenderRestHook,
  makeCacheProvider,
  makeExternalCacheProvider,
} from '../../../../test';
import { useResource, useCache, useController } from '../hooks';
import {
  payload,
  createPayload,
  users,
  nested,
  valuesFixture,
} from '../test-fixtures';
import { Endpoint, Entity } from '../..';
import { StateContext } from '../context';

function onError(e: any) {
  e.preventDefault();
}
beforeEach(() => {
  if (typeof addEventListener === 'function')
    addEventListener('error', onError);
});
afterEach(() => {
  if (typeof removeEventListener === 'function')
    removeEventListener('error', onError);
});

/*
  These tests cover 'optimisticUpdater' property
*/
describe.each([
  ['CacheProvider', makeCacheProvider],
  ['ExternalCacheProvider', makeExternalCacheProvider],
] as const)(`%s`, (_, makeProvider) => {
  describe('Optimistic Updates', () => {
    let renderRestHook: ReturnType<typeof makeRenderRestHook>;
    let mynock: nock.Scope;
    const fetchSpy = jest.spyOn(VisSettings, 'fetch');

    beforeEach(() => {
      nock(/.*/)
        .persist()
        .defaultReplyHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        })
        .options(/.*/)
        .reply(200)
        .get(`/article-cooler/${payload.id}`)
        .reply(200, payload)
        .delete(`/article-cooler/${payload.id}`)
        .reply(204, '')
        .delete(`/article/${payload.id}`)
        .reply(200, {})
        .delete(`/user/23`)
        .reply(204, '')
        .get(`/article-cooler/0`)
        .reply(403, {})
        .get(`/article-cooler/666`)
        .reply(200, '')
        .get(`/article-cooler/`)
        .reply(200, nested)
        .get(`/article-cooler/values`)
        .reply(200, valuesFixture)
        .post(`/article-cooler/`)
        .reply(200, createPayload)
        .get(`/user/`)
        .reply(200, users);

      mynock = nock(/.*/).defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      });
    });

    afterEach(() => {
      nock.cleanAll();
      jest.useRealTimers().clearAllMocks();
    });
    afterAll(() => {
      jest.restoreAllMocks();
    });

    beforeEach(() => {
      renderRestHook = makeRenderRestHook(makeProvider);
    });

    it('works with partial update', async () => {
      const params = { id: payload.id };
      mynock.patch('/article-cooler/5').reply(200, {
        ...payload,
        title: 'some other title',
        content: 'real response',
      });

      const { result, waitForNextUpdate } = renderRestHook(
        () => {
          const { fetch } = useController();
          const article = useCache(CoolerArticleResource.detail(), params);
          // @ts-expect-error
          article.doesnotexist;
          return { fetch, article };
        },
        {
          results: [
            {
              endpoint: CoolerArticleResource.detail(),
              args: [params],
              response: payload,
            },
          ],
        },
      );
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS(payload),
      );
      const promise = act(async () => {
        await result.current.fetch(
          CoolerArticleResource.partialUpdate(),
          params,
          {
            content: 'changed',
          },
        );
      });
      expect(result.current.article).toBeInstanceOf(CoolerArticleResource);
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS({
          ...payload,
          content: 'changed',
        }),
      );
      await promise;
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'some other title',
          content: 'real response',
        }),
      );
    });

    it('works with deletes', async () => {
      const params = { id: payload.id };
      mynock.delete('/article-cooler/5').reply(200, '');

      const { result, waitForNextUpdate } = renderRestHook(
        () => {
          const { fetch } = useController();
          const articles = useCache(CoolerArticleResource.list(), {});
          return { fetch, articles };
        },
        {
          results: [
            {
              endpoint: CoolerArticleResource.list(),
              args: [{}],
              response: [payload],
            },
          ],
        },
      );
      expect(result.current.articles).toEqual([
        CoolerArticleResource.fromJS(payload),
      ]);
      const promise = act(async () => {
        await result.current.fetch(CoolerArticleResource.delete(), params);
      });
      expect(result.current.articles).toEqual([]);
      await promise;
      expect(result.current.articles).toEqual([]);
    });

    it('works with eager creates', async () => {
      const body = { id: -1111111111, content: 'hi' };
      const existingItem = ArticleResourceWithOtherListUrl.fromJS({
        id: 100,
        content: 'something',
      });

      mynock.post(`/article/`).reply(201, {
        ...payload,
        title: 'some other title',
        content: 'real response',
      });

      const { result, waitForNextUpdate } = renderRestHook(
        () => {
          const { fetch } = useController();
          const listA = useCache(ArticleResourceWithOtherListUrl.list(), {});
          const listB = useCache(
            ArticleResourceWithOtherListUrl.otherList(),
            {},
          );
          return { fetch, listA, listB };
        },
        {
          results: [
            {
              endpoint: ArticleResourceWithOtherListUrl.otherList(),
              args: [{}],
              response: [{ id: 100, content: 'something' }],
            },
          ],
        },
      );

      expect(result.current.listA).toEqual(undefined);
      expect(result.current.listB).toEqual([existingItem]);

      const promise = act(async () => {
        await result.current.fetch(
          ArticleResourceWithOtherListUrl.create(),
          {},
          body,
        );
      });

      expect(result.current.listA).toEqual([
        CoolerArticleResource.fromJS(body),
      ]);
      expect(result.current.listB).toEqual([
        existingItem,
        CoolerArticleResource.fromJS(body),
      ]);
      await promise;
      expect(result.current.listA).toEqual([
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'some other title',
          content: 'real response',
        }),
      ]);
      expect(result.current.listB).toEqual([
        existingItem,
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'some other title',
          content: 'real response',
        }),
      ]);
    });

    it('should update on create', async () => {
      const { result, waitForNextUpdate } = renderRestHook(() => {
        const articles = useResource(FutureArticleResource.list(), {});
        const { fetch } = useController();
        return { articles, fetch };
      });

      await waitForNextUpdate();
      expect(result.current.articles.map(({ id }) => id)).toEqual([5, 3]);

      const createOptimistic = FutureArticleResource.create().extend({
        optimisticUpdater: (snap, body) => ({ id: Math.random(), ...body }),
      });
      act(() => {
        result.current.fetch(createOptimistic, {
          id: 1,
          title: 'whatever',
        });
      });
      expect(result.current.articles.map(({ id }) => id)).toEqual([1, 5, 3]);
    });

    it('should clear only earlier optimistic updates when a promise resolves', async () => {
      jest.useFakeTimers('legacy');

      const params = { id: payload.id };
      const { result, waitForNextUpdate } = renderRestHook(
        () => {
          const { fetch } = useController();
          const article = useCache(CoolerArticleResource.detail(), params);
          return { fetch, article };
        },
        {
          results: [
            {
              endpoint: CoolerArticleResource.detail(),
              args: [params],
              response: payload,
            },
          ],
        },
      );

      // first optimistic
      mynock
        .patch('/article-cooler/5')
        .delay(200)
        .reply(200, {
          ...payload,
          title: 'first',
          content: 'first',
        });
      result.current.fetch(CoolerArticleResource.partialUpdate(), params, {
        title: 'firstoptimistic',
        content: 'firstoptimistic',
      });
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'firstoptimistic',
          content: 'firstoptimistic',
        }),
      );

      // second optimistic
      mynock
        .patch('/article-cooler/5')
        .delay(50)
        .reply(200, {
          ...payload,
          title: 'second',
        });
      result.current.fetch(CoolerArticleResource.partialUpdate(), params, {
        title: 'secondoptimistic',
      });
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'secondoptimistic',
          content: 'firstoptimistic',
        }),
      );

      // third optimistic
      mynock
        .patch('/article-cooler/5')
        .delay(500)
        .reply(200, {
          ...payload,
          tags: ['third'],
        });
      result.current.fetch(CoolerArticleResource.partialUpdate(), params, {
        tags: ['thirdoptimistic'],
      });
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'secondoptimistic',
          content: 'firstoptimistic',
          tags: ['thirdoptimistic'],
        }),
      );

      // resolve second request while first is in flight
      jest.advanceTimersByTime(51);
      await waitForNextUpdate();

      // second optimistic should be cleared with the first and third optimistic left to be layerd
      // on top of second's network response
      expect(result.current.article).toEqual(
        CoolerArticleResource.fromJS({
          ...payload,
          title: 'firstoptimistic',
          content: 'firstoptimistic',
          tags: ['thirdoptimistic'],
        }),
      );
    });

    describe('race conditions', () => {
      class Toggle extends Entity {
        readonly id: number = 0;
        readonly visible: boolean = true;

        pk() {
          return `${this.id}`;
        }
      }
      const getbool = new Endpoint(
        (id: number): Promise<{ id: number; visible: boolean }> =>
          fetch(`/toggle/${id}`).then(res => res.json()),
        {
          name: 'gettoggle',
          schema: Toggle,
        },
      );
      const toggle = new Endpoint(
        (id: number): Promise<{ id: number; visible: boolean }> =>
          fetch(`/toggle/${id}`, { method: 'POST' }).then(res => res.json()),
        {
          name: 'toggle',
          schema: Toggle,
          sideEffect: true,
          optimisticUpdater(snap, id) {
            const { data } = snap.getResponse(getbool, id);
            if (!data) throw new AbortOptimistic();
            return {
              id,
              visible: data.visible ? false : true,
            };
          },
        },
      );

      it('toggle should alternate with multiple optimistic updates', async () => {
        jest.useFakeTimers('modern');

        // keeping state here allows the requests to flip flop each time
        let visible = false;
        mynock.get('/toggle/5').reply(200, () => {
          return { id: 5, visible };
        });
        mynock
          .persist()
          .post('/toggle/5')
          .delay(2000)
          .reply(200, () => {
            visible = visible ? false : true;
            return { id: 5, visible };
          });

        const { result, waitForNextUpdate } = renderRestHook(
          () => {
            const { fetch } = useController();
            const tog = useCache(getbool, 5);
            // @ts-expect-error
            tog.doesnotexist;
            return { fetch, tog };
          },
          {
            results: [
              {
                endpoint: getbool,
                args: [5],
                response: { id: 5, visible },
              },
            ],
          },
        );

        expect(result.current.tog).toEqual({ id: 5, visible: false });

        const promises: Promise<any>[] = [];
        const promises2: Promise<any>[] = [];

        act(() => {
          promises.push(result.current.fetch(toggle, 5));
        });
        expect(result.current.tog).toEqual({ id: 5, visible: true });

        act(() => {
          promises.push(result.current.fetch(toggle, 5));
        });
        expect(result.current.tog).toEqual({ id: 5, visible: false });

        act(() => {
          promises.push(result.current.fetch(toggle, 5));
        });
        expect(result.current.tog).toEqual({ id: 5, visible: true });

        jest.advanceTimersByTime(300);

        act(() => {
          promises2.push(result.current.fetch(toggle, 5));
        });
        expect(result.current.tog).toEqual({ id: 5, visible: false });

        jest.advanceTimersByTime(2001);
        await act(async () => {
          await Promise.all(promises);
        });
        // now 3 of these should have resolved
        // we validate

        // after resolution this should not change the result
        expect(result.current.tog).toEqual({ id: 5, visible: false });

        await act(async () => {
          await Promise.all(promises2);
        });

        expect(result.current.tog).toEqual({ id: 5, visible: false });
      });

      it('toggle should handle when response is missing', async () => {
        jest.useFakeTimers('modern');

        // keeping state here allows the requests to flip flop each time
        let visible = false;
        mynock.get('/toggle/5').reply(200, () => {
          return { id: 5, visible };
        });
        mynock
          .persist()
          .post('/toggle/5')
          .reply(200, () => {
            visible = visible ? false : true;
            return { id: 5, visible };
          });

        const { result, waitForNextUpdate } = renderRestHook(() => {
          const { fetch, getError } = useController();
          const tog = useCache(getbool, 5);
          const state = useContext(StateContext);
          const toggleError = getError(toggle, 5, state);
          return { fetch, tog, toggleError };
        });

        expect(result.current.tog).toBeUndefined();
        expect(result.current.toggleError).toBeUndefined();

        act(() => {
          result.current.fetch(toggle, 5);
        });
        expect(result.current.tog).toBeUndefined();
        expect(result.current.toggleError).toBeUndefined();
      });

      it('should error when user error happens', async () => {
        jest.useFakeTimers('modern');

        const toggleError = new Endpoint(
          (id: number): Promise<{ id: number; visible: boolean }> =>
            fetch(`/toggle/${id}`, { method: 'POST' }).then(res => res.json()),
          {
            name: 'toggle',
            schema: Toggle,
            sideEffect: true,
            optimisticUpdater(snap, id) {
              const getterError = snap.getError(getbool, id);
              if (getterError) throw getterError;
              throw new Error('this should fail');
            },
          },
        );

        // keeping state here allows the requests to flip flop each time
        let visible = false;
        mynock
          .persist()
          .post('/toggle/5')
          .delay(2000)
          .reply(200, () => {
            visible = visible ? false : true;
            return { id: 5, visible };
          });

        const { result } = renderRestHook(
          () => {
            const { fetch, getError } = useController();
            const tog = useCache(getbool, 5);
            const state = useContext(StateContext);
            const fetchError = getError(toggleError, 5, state);
            return { fetch, tog, fetchError };
          },
          {
            results: [
              {
                endpoint: getbool,
                args: [5],
                response: { id: 5, visible },
              },
            ],
          },
        );

        expect(result.current.tog).toBeDefined();
        expect(result.current.fetchError).toBeUndefined();

        act(() => {
          result.current.fetch(toggleError, 5);
        });
        expect(result.current.tog).toBeDefined();
        expect(result.current.fetchError).toBeDefined();
        expect(result.current.fetchError).toMatchSnapshot();
      });

      describe('with timestamps', () => {
        it('should handle out of order server responses', async () => {
          jest.useFakeTimers('modern');

          const initVis = {
            id: 5,
            visType: 'graph',
            numCols: 0,
            updatedAt: Date.now(),
          };

          const { result } = renderRestHook(
            () => {
              const { fetch } = useController();
              const vis = useCache(VisSettings.detail(), { id: 5 });
              // @ts-expect-error
              vis.doesnotexist;
              return { fetch, vis };
            },
            {
              results: [
                {
                  endpoint: VisSettings.detail(),
                  args: [{ id: 5 }],
                  response: initVis,
                },
              ],
            },
          );
          expect(result.current.vis).toEqual(initVis);

          let resolvePartial = (resolution: any) => {};
          let partialPromise: Promise<any>;
          fetchSpy.mockImplementationOnce(
            () =>
              (partialPromise = new Promise(resolve => {
                resolvePartial = (resolution: any) => {
                  resolve(resolution);
                };
              })),
          );
          jest.advanceTimersByTime(100);
          act(() => {
            result.current.fetch(
              VisSettings.partialUpdate(),
              { id: 5 },
              { visType: 'line' },
            );
          });
          expect(result.current.vis?.visType).toEqual('line');

          let resolveIncrement = (resolution: any) => {};
          let incrementPromise: Promise<any>;
          fetchSpy.mockImplementationOnce(
            () =>
              (incrementPromise = new Promise(resolve => {
                resolveIncrement = (resolution: any) => {
                  resolve(resolution);
                };
              })),
          );
          jest.advanceTimersByTime(100);
          act(() => {
            result.current.fetch(VisSettings.incrementCols(), 5);
          });
          expect(result.current.vis?.visType).toEqual('line');
          expect(result.current.vis?.numCols).toEqual(1);

          const betweenDate = Date.now();

          let resolveIncrement2 = (resolution: any) => {};
          let incrementPromise2: Promise<any>;
          fetchSpy.mockImplementationOnce(
            () =>
              (incrementPromise2 = new Promise(resolve => {
                resolveIncrement2 = (resolution: any) => {
                  resolve(resolution);
                };
              })),
          );
          jest.advanceTimersByTime(100);
          act(() => {
            result.current.fetch(VisSettings.incrementCols(), 5);
          });
          expect(result.current.vis?.visType).toEqual('line');
          expect(result.current.vis?.numCols).toEqual(2);

          const afterDate = Date.now();

          jest.advanceTimersByTime(100);
          await act(() => {
            resolvePartial({
              id: 5,
              visType: 'line',
              numCols: 5,
              updatedAt: betweenDate,
            });
            return partialPromise;
          });

          expect(result.current.vis?.visType).toEqual('line');
          // the server is not aware of our client's last increment, so we +1 to response
          expect(result.current.vis?.numCols).toEqual(6);

          jest.advanceTimersByTime(100);
          const finalObject = {
            id: 5,
            visType: 'graph',
            numCols: 100,
            updatedAt: afterDate,
          };
          await act(() => {
            resolveIncrement2(finalObject);
            return incrementPromise2;
          });

          expect(result.current.vis).toEqual(finalObject);

          await act(() => {
            resolveIncrement({
              id: 5,
              visType: 'line',
              numCols: 0,
              updatedAt: 0,
            });
            return incrementPromise;
          });
          expect(result.current.vis).toEqual(finalObject);

          fetchSpy.mockClear();
        });
      });
    });
  });
});

import { TypedArticleResource } from '__tests__/new';
import nock from 'nock';

import {
  makeRenderRestHook,
  makeCacheProvider,
  makeExternalCacheProvider,
} from '../../../../test';
import { useResource, useFetcher } from '../hooks';
import { payload, createPayload, users, nested } from '../test-fixtures';

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

describe('endpoint types', () => {
  describe.each([
    ['CacheProvider', makeCacheProvider],
    ['ExternalCacheProvider', makeExternalCacheProvider],
  ] as const)(`%s should enforce defined types`, (_, makeProvider) => {
    let renderRestHook: ReturnType<typeof makeRenderRestHook>;
    let mynock: nock.Scope;

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
        .get(`/article-cooler/0`)
        .reply(403, {})
        .get(`/article-cooler/666`)
        .reply(200, '')
        .get(`/article-cooler/`)
        .reply(200, nested)
        .post(`/article-cooler/`)
        .reply(200, createPayload)
        .get(`/user/`)
        .reply(200, users)
        .get(/article-cooler\/.*/)
        .reply(404, 'not found')
        .put(`/article-cooler/${payload.id}`)
        .reply(200, (uri, body) => body)
        .put(/article-cooler\/[^5].*/)
        .reply(404, 'not found');

      mynock = nock(/.*/).defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      });
    });

    beforeEach(() => {
      renderRestHook = makeRenderRestHook(makeProvider);
    });
    afterEach(() => {
      nock.cleanAll();
    });

    it('should pass with exact params', async () => {
      const { result, waitForNextUpdate } = renderRestHook(() => {
        return useResource(TypedArticleResource.detail(), {
          id: payload.id,
        });
      });
      expect(result.current).toBeUndefined();
      await waitForNextUpdate();
      expect(result.current.title).toBe(payload.title);
    });

    it('should fail with improperly typed param', async () => {
      const { result, waitForNextUpdate } = renderRestHook(() => {
        // @ts-expect-error
        return useResource(TypedArticleResource.detail(), {
          id: { a: 'five' },
        });
      });
      expect(result.current).toBeUndefined();
      await waitForNextUpdate();
      expect(result.error).toBeDefined();
      expect((result.error as any).status).toBe(404);
    });

    it('should work with everything correct', async () => {
      const { result } = renderRestHook(() => {
        return useFetcher(TypedArticleResource.update());
      });
      const a = await result.current({ id: payload.id }, { title: 'hi' });
    });

    it('types should strictly enforce with parameters that are any', async () => {
      const { result } = renderRestHook(() => {
        return useFetcher(TypedArticleResource.anyparam());
      });
      // @ts-expect-error
      () => result.current({ id: payload.id }, { title: 'hi' });
      () => result.current({ id: payload.id });
    });

    it('types should strictly enforce with body that are any', async () => {
      const { result } = renderRestHook(() => {
        return useFetcher(TypedArticleResource.anybody());
      });
      () => result.current({ id: payload.id }, { title: 'hi' });
      /* TODO: Re-enable for new fetch dispatcher
        // @ts-expect-error
        () => result.current({ id: payload.id });
        */
    });

    it('should error on invalid payload', async () => {
      const { result } = renderRestHook(() => {
        return useFetcher(TypedArticleResource.update());
      });
      // @ts-expect-error
      await result.current({ id: payload.id }, { title2: 'hi' });
      // @ts-expect-error
      await result.current({ id: payload.id }, { title: 5 });
    });

    it('should error on invalid params', async () => {
      const { result, waitForNextUpdate } = renderRestHook(() => {
        return useFetcher(TypedArticleResource.update());
      });

      await expect(
        // @ts-expect-error
        result.current({ id: 'hi' }, { title: 'hi' }),
      ).rejects.toEqual(expect.any(Error));
    });
  });
});

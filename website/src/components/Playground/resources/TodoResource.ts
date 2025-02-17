import {
  Resource,
  SnapshotInterface,
  schema,
  RestEndpoint,
  Schema,
} from '@rest-hooks/rest';

import PlaceholderBaseResource from './PlaceholderBaseResource';

export default class TodoResource extends PlaceholderBaseResource {
  readonly userId: number = 0;
  readonly title: string = '';
  readonly completed: boolean = false;
  readonly updatedAt: number = 0;

  static urlRoot = '/api/todos';

  static merge(existing, incoming) {
    if (existing.updatedAt < incoming.updatedAt) {
      return {
        ...existing,
        ...incoming,
      };
    }
    return existing;
  }

  protected static endpointMutate(): RestEndpoint<
    (this: RestEndpoint, params: any, body?: any) => Promise<any>,
    Schema | undefined,
    true
  > {
    const sup = super.endpointMutate();
    return sup.extend({
      getFetchInit(this: RestEndpoint, body?: any) {
        if (body) {
          body = { ...body, updatedAt: Date.now() };
        }
        return sup.getFetchInit.call(this, body);
      },
    });
  }

  static partialUpdate<T extends typeof Resource>(this: T) {
    return super.partialUpdate().extend({
      schema: this,
      optimisticUpdater: optimisticPartial,
    });
  }

  static create<T extends typeof Resource>(this: T) {
    const listkey = this.list().key({});
    return super.create().extend({
      schema: this,
      optimisticUpdater: optimisticCreate,
      update: (newResourceId: string) => ({
        [listkey]: (resourceIds: string[] = []) => [
          ...resourceIds,
          newResourceId,
        ],
      }),
    });
  }

  static delete<T extends typeof Resource>(this: T) {
    return super.delete().extend({
      schema: new schema.Delete(this),
      optimisticUpdater: optimisticDelete,
    });
  }
}

const optimisticPartial = (
  snap: SnapshotInterface,
  params: any,
  body: any,
) => ({
  id: params.id,
  ...snap.getResponse(TodoResource.detail(), { id: params.id }).data,
  ...body,
  updatedAt: snap.fetchedAt,
});

const optimisticCreate = (snap: SnapshotInterface, _: any, body: any) => ({
  ...body,
  updatedAt: snap.fetchedAt,
});
const optimisticDelete = (snap: SnapshotInterface, params: any) => ({
  ...params,
  updatedAt: snap.fetchedAt,
});

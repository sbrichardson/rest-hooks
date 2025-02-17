---
title: Entity
id: Entity
original_id: Entity
---

<!--DOCUSAURUS_CODE_TABS-->
<!--TypeScript-->

```typescript
import { Entity } from 'rest-hooks';

export default class Article extends Entity {
  readonly id: number | undefined = undefined;
  readonly title: string = '';
  readonly content: string = '';
  readonly author: number | null = null;
  readonly tags: string[] = [];

  pk() {
    return this.id?.toString();
  }
}
```

<!--Javascript-->

```js
import { Entity } from 'rest-hooks';

export default class Article extends Entity {
  id = undefined;
  title = '';
  content = '';
  author = null;
  tags = [];

  pk() {
    return this.id?.toString();
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

`Entity` extends [SimpleRecord](./SimpleRecord)

`Entity` is an abstract base class used to define data with some form of primary key (or `pk` for short).
When representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where
each row represents an instance of the Entity.

By defining a `pk()` member, Rest Hooks will normalize entities, ensuring consistency and improve performance
by increasing cache hit rates.

> For common REST patterns, inheriting from [Resource](./resource) is recommended. However, for other cases
> `Entity` is a great place to start.

## Methods

### static fromJS\<T extends typeof SimpleRecord\>(this: T, props: Partial\<AbstractInstanceType\<T\>\>): AbstractInstanceType\<T\>

> Inherited from [SimpleRecord](./SimpleRecord)

This is used to create new entities when normalizing data. These are stored in the entities cache.

### abstract pk: (parent?: any, key?: string): string | number | undefined

PK stands for _primary key_ and is intended to provide a standard means of retrieving
a key identifier for any `Entity`. In many cases there will simply be an 'id' field
member to return. In case of multicolumn you can simply join them together.

#### undefined value

A `undefined` can be used as a default to indicate the entity has not been created yet.
This is useful when initializing a creation form using [Entity.fromJS()](#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet)
directly. If `pk()` resolves to null it is considered not persisted to the server,
and thus will not be kept in the cache.

#### Other uses

While the `pk()` definition is key (pun intended) for making the normalized cache work;
it also becomes quite convenient for sending to a react element when iterating on
list results:

```tsx
//....
return (
  <div>
    {results.map(result => (
      <TheThing key={result.pk()} thing={result} />
    ))}
  </div>
);
```

#### Singleton Entities

What if there is only ever once instance of a Entity for your entire application? You
don't really need to distinguish between each instance, so likely there was no `id` or
similar field defined in the API. In these cases you can just return a literal like
'the_only_one'.

```typescript
pk() {
  return 'the_only_one';
}
```

### static get key(): string

This defines the key for the Entity itself, rather than an instance. This needs to be a globally
unique value.

### static merge(first, second): mergedValue

```typescript
static merge<T extends typeof SimpleRecord>(first: InstanceType<T>, second: InstanceType<T>) => InstanceType<T>
```

> Inherited from [SimpleRecord](./SimpleRecord)

Merge is used to resolve the same entity. This can be because it was previously put in the cache,
or it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which
prefers values from the newer item but only if they are actually set.

Override this to change the algorithm - for instance if having the absolutely correct latest value is important,
adding a timestamp to the entity and then using it to select the return value will solve any race conditions.

#### Example

```typescript
class LatestPriceEntity extends Entity {
  readonly id: string = '';
  readonly timestamp: string = '';
  readonly price: string = '0.0';
  readonly symbol: string = '';

  static merge<T extends typeof SimpleRecord>(
    first: InstanceType<T>,
    second: InstanceType<T>,
  ) {
    if (first.timestamp > second.timestamp) return first;
    return second;
  }
}
```

### static indexes?: (keyof this)[]

Indexes enable increased performance when doing lookups based on those parameters. Add
fieldnames (like `slug`, `username`) to the list that you want to send as params to lookup
later.

> #### Note:
>
> Don't add your primary key like `id` to the indexes list, as that will already be optimized.

#### useResource()

With [useResource()](./useResource) this will eagerly infer the results from entities table if possible,
rendering without needing to complete the fetch. This is typically helpful when the entities
cache has already been populated by another request like a list request.

```typescript
export class UserResource extends Resource {
  readonly id: number | undefined = undefined;
  readonly username: string = '';
  readonly email: string = '';
  readonly isAdmin: boolean = false;

  pk() {
    return this.id?.toString();
  }

  static urlRoot = 'http://test.com/user/';

  // right here
  static indexes = ['username' as const];
}
```

```tsx
const user = useResource(UserResource.detailShape(), { username: 'bob' });
```

#### useCache()

With [useCache()](./useCache), this enables accessing results retrieved inside other requests - even
if there is no endpoint it can be fetched from.

```typescript
class LatestPrice extends Entity {
  readonly id: string = '';
  readonly symbol: string = '';
  readonly price: string = '0.0';
}
```

```typescript
class AssetResource extends Resource {
  readonly id: string = '';
  readonly price: string = '';

  static schema = {
    price: LatestPrice.asSchema(),
  };
}
```

Some top level component:

```tsx
const assets = useResource(AssetResource.listShape(), {});
```

Nested below:

```tsx
const price = useCache(LatestPrice.asSchema(), { symbol: 'BTC' });
```

### static schema: { [k: keyof this]: Schema }

Set this to [define entities nested](../guides/nested-response) inside this one.

### static asSchema() => [Entity](./Entity)

Returns this `Entity` with the TypeScript type set properly. Using `asSchema()` instead of
`this` directly is key to getting correct typing from the hooks.

This can be used as a [Schema](./FetchShape#schema-schema) or to build other [Schema](./FetchShape#schema-schema)s.

```typescript
import { universalFetchFunction } from 'utils';
import ArticleEntity from './ArticleEntity';

export const articleListShape = {
  type: 'read',
  schema: { results: [ArticleEntity.asSchema()], nextPage: '', prevPage: '' },
  getFetchKey(params: Readonly<object>): {return `article/${JSON.stringify(params)}`;},
  fetch: universalFetchFunction,
}
```

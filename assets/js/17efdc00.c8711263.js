"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3396:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>l,toc:()=>i,default:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"useFetcher()",id:"useFetcher",original_id:"useFetcher"},o=void 0,l={unversionedId:"api/useFetcher",id:"version-4.3/api/useFetcher",title:"useFetcher()",description:"Mostly useful for imperatively triggering mutation effects.",source:"@site/versioned_docs/version-4.3/api/useFetcher.md",sourceDirName:"api",slug:"/api/useFetcher",permalink:"/docs/4.3/api/useFetcher",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useFetcher.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"useFetcher()",id:"useFetcher",original_id:"useFetcher"},sidebar:"version-4.3/docs",previous:{title:"useResource()",permalink:"/docs/4.3/api/useresource"},next:{title:"useCache()",permalink:"/docs/4.3/api/useCache"}},i=[{value:"throttle?: boolean = false",id:"throttle-boolean--false",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"updateParams: destShape, destParams, updateFunction",id:"updateparams-destshape-destparams-updatefunction",children:[{value:"updateFunction: (sourceResults, destResults) =&gt; destResults",id:"updatefunction-sourceresults-destresults--destresults",children:[],level:3},{value:"Example",id:"example-1",children:[],level:3}],level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[],level:2}],c={toc:i};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher(\n  fetchShape: FetchShape,\n  throttle?: boolean = false,\n): FetchFunction;\n\ntype FetchFunction = (\n  params: object,\n  body: object | void,\n  updateParams?: OptimisticUpdateParams[]\n) => Promise<any>;\n\ntype OptimisticUpdateParams = [\n  destShape: FetchShape,\n  destParams: object,\n  updateFunction: (sourceResults: object, destResults: object) => object,\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(\n  fetchShape: FetchShape<S, Params, Body>,\n  throttle?: boolean = false,\n): Shape extends DeleteShape<any, any, any>\n  ? (params: ParamsFromShape<Shape>, body: BodyFromShape<Shape>) => Promise<any>\n  : <\n      UpdateParams extends OptimisticUpdateParams<\n        SchemaFromShape<Shape>,\n        FetchShape<any, any, any>\n      >[]\n    >(\n      params: ParamsFromShape<Shape>,\n      body: BodyFromShape<Shape>,\n      updateParams?: UpdateParams | undefined,\n    ) => Promise<any>;\n\ntype OptimisticUpdateParams<\n  SourceSchema extends Schema,\n  DestShape extends FetchShape<any, any, any>\n> = [\n  DestShape,\n  ParamsFromShape<DestShape>,\n  UpdateFunction<SourceSchema, SchemaFromShape<DestShape>>,\n];\n\ntype UpdateFunction<SourceSchema extends Schema, DestSchema extends Schema> = (\n  sourceResults: Normalize<SourceSchema>,\n  destResults: Normalize<DestSchema> | undefined,\n) => Normalize<DestSchema>;\n")),(0,r.kt)("p",null,"Mostly useful for imperatively triggering mutation effects."),(0,r.kt)("p",null,"However, this hook is actually used by the retrieval hooks (useRetrieve(), useCache(), useResource()). Using\nit with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadShape")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"detailShape()")," can be done to force a refresh imperatively."),(0,r.kt)("h2",{id:"throttle-boolean--false"},"throttle?: boolean = false"),(0,r.kt)("p",null,"By default all calls force the fetch, however by calling with throttle=true identical\nin-flight requests will be deduped."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const create = useFetcher(PostResource.createShape());\n  // create as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => create({}, new FormData(e.target))}>{/* ... */}</form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const update = useFetcher(PostResource.updateShape());\n  // update as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => update({ id }, new FormData(e.target))}>\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const del = useFetcher(PostResource.deleteShape());\n  // del as (body: any, params: Readonly<object>) => Promise<any>\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={() => del({ id: post.id })}>X</button>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"updateparams-destshape-destparams-updatefunction"},"updateParams: ","[destShape, destParams, updateFunction][]"),(0,r.kt)("p",null,"The optional third argument to the fetch function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher()")," is a\nlist of tuples that tell Rest Hooks additional updates that should take place."),(0,r.kt)("p",null,"The result cache will be updated based on the destShape with destParams applied.\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"destShape.getFetchKey(destParams)")," would find the location in the cache.)"),(0,r.kt)("p",null,"The third argument is a function to run on that result cache."),(0,r.kt)("h3",{id:"updatefunction-sourceresults-destresults--destresults"},"updateFunction: (sourceResults, destResults) => destResults"),(0,r.kt)("p",null,"This function takes two arguments\nand returns the new result state to be placed in the destination. (Result state resembles\nthe shape of the actual response, except all entities are replaced with their primary keys.)\nThe first argument to the update function is the result of the resolved value of the given fetch call.\nThe second argument is the existing result state of the destination."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This will insert the newly created article id onto the end of the listshape with ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.createShape());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticleResource.listShape(),\n    {},\n    (newArticleID: string, articleIDs: string[] | undefined) => [\n      ...(articleIDs || []),\n      newArticleID,\n    ],\n  ],\n]);\n")),(0,r.kt)("p",null,"This shows the same concept, but for a custom listShape."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ArticlePaginatedResource extends Resource {\n  static listShape<T extends Resource>() {\n    return {\n      ...super.listShape(),\n      shape: { results: this.asSchema()[], nextPage: '' },\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.createShape());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticlePaginatedResource.listShape(),\n    {},\n    (newArticleID: string, articleIDs: { results: string[] } | undefined) => ({\n      ...articleIDs,\n      results: [...(articleIDs?.results), newArticleID],\n    }),\n  ],\n]);\n")),(0,r.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"createShape()"),(0,r.kt)("li",{parentName:"ul"},"updateShape()"),(0,r.kt)("li",{parentName:"ul"},"partialUpdateShape()"),(0,r.kt)("li",{parentName:"ul"},"deleteShape()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/FetchShape"},"FetchShape")," as well."),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"notes"},"Notes"),(0,r.kt)("p",{parentName:"blockquote"},"As this is the most basic hook to dispatch network requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," it will run through all normal fetch processing like updating\nthe normalized cache, etc.")))}p.isMDXComponent=!0}}]);
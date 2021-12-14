"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34630:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"usage",title:"Usage",original_id:"usage"},i=void 0,s={unversionedId:"getting-started/usage",id:"version-4.5/getting-started/usage",title:"Usage",description:"Define a Resource",source:"@site/versioned_docs/version-4.5/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/4.5/getting-started/usage",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/usage.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"usage",title:"Usage",original_id:"usage"},sidebar:"version-4.5/docs",previous:{title:"Installation",permalink:"/docs/4.5/"},next:{title:"Handling loading state",permalink:"/docs/4.5/guides/loading-state"}},l=[{value:"Define a Resource",id:"define-a-resource",children:[{value:"<code>resources/article.ts</code>",id:"resourcesarticlets",children:[],level:4}],level:2},{value:"Use the Resource",id:"use-the-resource",children:[],level:2},{value:"Dispatch mutation",id:"dispatch-mutation",children:[{value:"<code>article.tsx</code>",id:"articletsx",children:[],level:4}],level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"define-a-resource"},"Define a Resource"),(0,a.kt)("h4",{id:"resourcesarticlets"},(0,a.kt)("inlineCode",{parentName:"h4"},"resources/article.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  +id: ?number = undefined;\n  +title: string = '';\n  +content: string = '';\n  +author: ?number = null;\n  +tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("p",null,"Default values ensure simpler types, which means less conditionals in your components."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," is essential to tell Rest Hooks how to normalize the data. This ensures consistency\nand the best performance characteristics possible."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"static urlRoot")," is used as the basis of common ",(0,a.kt)("a",{parentName:"p",href:"../guides/url"},"url patterns")),(0,a.kt)("p",null,"APIs quickly get much more complicated! ",(0,a.kt)("a",{parentName:"p",href:"../guides/resource-types"},"Customizing Resources to fit your API")),(0,a.kt)("h2",{id:"use-the-resource"},"Use the Resource"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detailShape(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useResource(ArticleResource.listShape(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/4.5/api/useresource"},"useResource()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/FetchShape#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"../guides/loading-state"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/FetchShape"},"shapes"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("h2",{id:"dispatch-mutation"},(0,a.kt)("a",{parentName:"h2",href:"/docs/4.5/api/useFetcher"},"Dispatch mutation")),(0,a.kt)("h4",{id:"articletsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"article.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const create = useFetcher(ArticleResource.createShape());\n  // create as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form onSubmit={e => create({}, new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detailShape(), { id });\n  const update = useFetcher(ArticleResource.updateShape());\n  // update as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"update()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const del = useFetcher(ArticleResource.deleteShape());\n  // del as (body: any, params?: Readonly<object>) => Promise<any>\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => del({ id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,a.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}u.isMDXComponent=!0}}]);
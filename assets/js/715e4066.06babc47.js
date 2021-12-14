/*! For license information please see 715e4066.06babc47.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66548],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,s){for(var o,l,i=a(e),u=1;u<arguments.length;u++){for(var c in o=Object(arguments[u]))r.call(o,c)&&(i[c]=o[c]);if(t){l=t(o);for(var p=0;p<l.length;p++)n.call(o,l[p])&&(i[l[p]]=o[l[p]])}}return i}},41535:(e,t,r)=>{var n=r(62525),a=60103,s=60106;var o=60109,l=60110,i=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),s=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||m}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var g=k.prototype=new y;g.constructor=k,n(g,h.prototype),g.isPureReactComponent=!0;var b=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,s={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!R.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:a,type:e,key:o,ref:l,props:s,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case s:i=!0}}if(i)return o=o(i=e),e=""===n?"."+j(i,0):n,b(o)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),A(o,t,r,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=""===n?".":n+":",b(e))for(var u=0;u<e.length;u++){var c=n+j(l=e[u],u);i+=A(l,t,r,c,o)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(l=e.next()).done;)i+=A(l=l.value,t,r,c=n+j(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,r){if(null==e)return e;var n=[],a=0;return A(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},_={transition:0}},27378:(e,t,r)=>{r(41535)},70523:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9877),a=r(58215),s=r(67294);function o(e){let{children:t}=e;return s.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(a.Z,{value:"ts"},t[0]),s.createElement(a.Z,{value:"js"},t[1]))}},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9877),a=r(58215),s=r(67294),o=r(87799);function l(e){let{pkgs:t,dev:r=!1}=e;return s.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(o.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(o.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(15814);const s={React:n,...n,...a}},79231:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>p,toc:()=>d,default:()=>f});var n=r(87462),a=(r(27378),r(3905)),s=r(70523),o=r(9877),l=r(58215),i=r(96497);const u={id:"usage",title:"REST / CRUD",sidebar_label:"Usage"},c=void 0,p={unversionedId:"rest/usage",id:"rest/usage",title:"REST / CRUD",description:"Using REST or CRUD APIs with Rest Hooks",source:"@site/../docs/rest/usage.md",sourceDirName:"rest",slug:"/rest/usage",permalink:"/docs/next/rest/usage",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/usage.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{id:"usage",title:"REST / CRUD",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Validation",permalink:"/docs/next/getting-started/validation"},next:{title:"URL Patterns",permalink:"/docs/next/guides/url"}},d=[{value:"Define a Resource",id:"define-a-resource",children:[],level:2},{value:"Use the Resource",id:"use-the-resource",children:[],level:2},{value:"Dispatch mutation",id:"dispatch-mutation",children:[],level:2}],m={toc:d};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Using REST or CRUD APIs with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-a-resource"},"Define a Resource"),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/article.ts"',title:'"resources/article.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="resources/article.js"',title:'"resources/article.js"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("p",null,"Default values ensure simpler types, which means less conditionals in your components."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," is essential to tell Rest Hooks how to normalize the data. This ensures consistency\nand the best performance characteristics possible."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"static urlRoot")," is used as the basis of common ",(0,a.kt)("a",{parentName:"p",href:"../guides/url"},"url patterns")),(0,a.kt)("p",null,"APIs quickly get much more complicated! ",(0,a.kt)("a",{parentName:"p",href:"../guides/resource-types"},"Customizing Resources to fit your API")),(0,a.kt)("h2",{id:"use-the-resource"},"Use the Resource"),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useSuspense(ArticleResource.list(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"../guides/loading-state"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("h2",{id:"dispatch-mutation"},"Dispatch mutation"),(0,a.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(ArticleResource.create(), {}, new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,a.kt)(l.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const { fetch } = useController();\n  return (\n    <Form\n      onSubmit={e => fetch(ArticleResource.update(), { id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"update()")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,a.kt)(l.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const { fetch } = useController();\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => fetch(ArticleResource.delete(), { id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")))),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,a.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}f.isMDXComponent=!0}}]);
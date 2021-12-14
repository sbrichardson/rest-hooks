(self.webpackChunk=self.webpackChunk||[]).push([[72989],{84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ge});var a=n(67294),r=n(24861),o=n(88300),s=n(71481),i=n(42910),l=n(99876),d=n(63312),c=n(52803),u=n(44431),p=n.n(u),m=n(53775);class h extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class g extends h{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:f})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:k,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({optimisticUpdate:y})}}g.urlRoot="https://jsonplaceholder.typicode.com/todos";const f=(e,t)=>({id:e.id,...t}),k=(e,t)=>t,y=e=>e;var v=n(87462),b=n(50776),w=n(86010),N=n(95999),E=n(52263),x=n(72389),S=n(83229),T=n(55423),D=n(84195),C=n(58699),Z=n(28808),R=n(96714),I=n(28224),P=n(80944),B=n(53810),A=n(91262);const F="playgroundContainer_1vxj",U="row_3g4V",L="hidden_2rz-",M="playgroundHeader_2X75",O="playgroundEditor_1tQZ",_="playgroundPreview_3d_E",z="playgroundResult_5IAE",j="debugToggle_2KFu",V="tabControls_vH2K",q="tabs_1lMe",H="tab_3qyO",$="selected_3AAM";var K=n(60522),X=n(80126),G=n(85350);function J(e){let{value:t}=e;const{isDarkTheme:n}=(0,G.Z)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(X.ZP,{shouldExpandNode:Q,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,"font-family":"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function W(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:j,onClick:t},"Store"),"y"===n?a.createElement(te,null):null)}const Y=(0,a.memo)(W);function ee(){const e=(0,a.useContext)(K.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(J,{value:t})}const te=(0,a.memo)(ee);function ne(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,P.Z)(),[i,l]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,B.o5)();if(null!=t){const e=o[t];null!=e&&e!==i&&l(e)}const c=(0,a.useCallback)((e=>{d(e.currentTarget),l((e=>"y"===e?"n":"y")),s(t,"y"===i?"n":"y")}),[d,t,i,s]),u=(0,a.useMemo)((()=>[new I.Z,new C.Z(Z.Z)]),[]),p=!("n"===i||!r);return a.createElement(R.nq,{managers:u},a.createElement("div",{className:(0,w.Z)(_,{[L]:p})},a.createElement(A.Z,{fallback:a.createElement(re,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(re,null)},a.createElement(b.i5,null),a.createElement(b.IF,null))))),a.createElement(Y,{selectedValue:i,toggle:c}))}const ae=(0,a.memo)(ne);function re(){return a.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,w.Z)(M,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",null,a.createElement(oe,null,a.createElement(N.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:z},a.createElement(ae,{groupId:t,defaultOpen:n,row:r})))}function ie(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(D.Z);return a.createElement("div",{className:q,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:o}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,w.Z)(H,{[$]:e===r}),onFocus:t,onClick:t,value:r},o)})))}function le(e){let{children:t}=e;return a.createElement(oe,{className:V},a.createElement("div",null,t),a.createElement(ie,null))}function de(e){let{title:t}=e;const{values:n}=(0,a.useContext)(D.Z),r=n.length>0,o=(0,x.Z)();return a.createElement("div",null,r?a.createElement(le,null,t):a.createElement(oe,null,t),a.createElement(b.uz,{key:o,className:O}))}function ce(e){let{children:t,transformCode:n,groupId:r,defaultOpen:o,row:s,hidden:i=!1,...l}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:d}}}}=(0,E.Z)(),c=(0,S.Z)();l.scope;return a.createElement("div",{className:(0,w.Z)(F,{[U]:s,[L]:i})},a.createElement(b.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},l),"top"===d?a.createElement(a.Fragment,null,a.createElement(se,{groupId:r,defaultOpen:o,row:s}),a.createElement(de,null)):a.createElement(a.Fragment,null,a.createElement(de,null),a.createElement(se,{groupId:r,defaultOpen:o,row:s}))))}de.defaultProps={title:a.createElement(N.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ce.defaultProps={row:!1};class ue extends d.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ue.schema={updatedAt:Date};const pe=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ue});const me={...r,...l,...c,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:p(),lastUpdated:pe,TimedEntity:ue,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:o}=s.Z();return a.createElement(i.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",null,t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{o(),r((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends g{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},he=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:o="n",row:s=!1}=e;return a.createElement(ce,{scope:me,noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:r},"string"==typeof t?t:t.props.children.props.children)},ge=(0,a.memo)(he)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(9877),r=n(58215),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},t[0]),o.createElement(r.Z,{value:"js"},t[1]))}},53381:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>h});var a=n(87462),r=(n(27378),n(3905)),o=n(9877),s=n(58215),i=n(70523),l=n(70720);const d={title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},c=void 0,u={unversionedId:"getting-started/data-dependency",id:"getting-started/data-dependency",title:"Co-locate Data Dependencies",description:"Co-locating data dependencies means we only use data-binding hooks like useSuspense()",source:"@site/../docs/getting-started/data-dependency.md",sourceDirName:"getting-started",slug:"/getting-started/data-dependency",permalink:"/docs/next/getting-started/data-dependency",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/data-dependency.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/docs/next/getting-started/endpoint"},next:{title:"Entity",permalink:"/docs/next/getting-started/entity"}},p=[{value:"Async Fallbacks (loading/error)",id:"async-fallbacks",children:[{value:"Boundaries (Suspense/NetworkErrorBoundary)",id:"boundaries",children:[],level:3},{value:"Stateful",id:"stateful",children:[],level:3}],level:2},{value:"Subscriptions",id:"subscriptions",children:[{value:"Live Crypto Price Example",id:"live-crypto-price-example",children:[],level:3}],level:2}],m={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Co-locating data dependencies means we only use data-binding hooks like ",(0,r.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nin components where we display/use their data directly."),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  // highlight-next-line\n  const todo = useSuspense(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  // highlight-next-line\n  const todos = useSuspense(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"#boundaries"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Conditional Dependencies")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// todo could be undefined if id is undefined\nconst todo = useSuspense(todoDetail, id ? { id } : null);\n")))),(0,r.kt)("h2",{id:"async-fallbacks"},"Async Fallbacks (loading/error)"),(0,r.kt)("p",null,"This works great if the client already has the data. But while it's waiting on a response from the server,\nwe need some kind of loading indication. Similarly if there is an error in the fetch, we should indicate such.\nThese are called 'fallbacks'."),(0,r.kt)("h3",{id:"boundaries"},"Boundaries (Suspense/NetworkErrorBoundary)"),(0,r.kt)("p",null,"In React 18, the best way to achieve this is with boundaries. (",(0,r.kt)("a",{parentName:"p",href:"#stateful"},"React 16.3+ supported"),", but less powerful.)\n",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />"),"\nare wrapper components which show fallback ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/rendering-elements.html"},"elements"),"\nwhen any component rendered as a descendent is loading or errored while loading their data dependency."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,23-25}","{6,12,23-25}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\ninterface Props {\n  fallback: React.ReactElement;\n  children: React.ReactNode;\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,12,18-20}","{6,12,18-20}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This greatly simplifies complex orchestrations of data dependencies by decoupling where to show fallbacks\nfrom the components using the data."))),(0,r.kt)("p",null,"For instance, here we have three different components requesting different todo data. These will all loading in\nparallel and only show one loading indicator instead of filling the screen with them. Although this case\nis obviously contrived; in practice this comes up quite often, especially when data dependencies end up deeply nesting."),(0,r.kt)("h3",{id:"stateful"},"Stateful"),(0,r.kt)("p",null,"You may find cases where it's still useful to use a stateful approach to fallbacks when using React 16 and 17.\nFor these cases, or compatibility with some component libraries, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy")," package includes\na hook that uses stateful loading and errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const {\n    loading,\n    error,\n    data: todo,\n  } = useStatefulResource(todoDetail, { id });\n  if (loading) return 'loading';\n  if (error) return error.status;\n  return <div>{todo.title}</div>;\n}\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"../guides/no-suspense"},"useStatefulResource")),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"When data is likely to change due to external factor; ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/useSubscription"},"useSubscription()"),"\nensures continual updates while a component is mounted."),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  // highlight-next-line\n  useSubscription(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  const todos = useSuspense(todoList, {});\n  // highlight-next-line\n  useSubscription(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,"Subscriptions are orchestrated by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/Manager"},"Managers"),". Out of the box,\npolling based subscriptions can be used by adding ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint#pollfrequency-number"},"pollFrequency")," to an endpoint.\nFor pushed based networking protocols like websockets, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/Manager#middleware-data-stream"},"example websocket stream manager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\nconst todoDetail = new Endpoint(\n  fetchTodoDetail,\n  // highlight-next-line\n  { pollFrequency: 1000 },\n);\n")),(0,r.kt)("h3",{id:"live-crypto-price-example"},"Live Crypto Price Example"),(0,r.kt)(l.Z,{defaultOpen:"n",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"class ExchangeRatesResource extends Resource {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n\n  static urlRoot = 'https://www.coinbase.com/api/v2/exchange-rates';\n\n  static getEndpointExtra() {\n    return { pollFrequency: 5000 };\n  }\n\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<{ currency: string }>, { data: T }, undefined> {\n    return super.list().extend({\n      schema: { data: this },\n    });\n  }\n}\n\nfunction AssetPrice({ symbol }: { symbol: string }) {\n  const { data: price } = useSuspense(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  useSubscription(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\n\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}h.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);
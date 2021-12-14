/*! For license information please see 7a6b225b.14f3e773.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[44570],{62525:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,l,i=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))n.call(s,u)&&(i[u]=s[u]);if(t){l=t(s);for(var p=0;p<l.length;p++)r.call(s,l[p])&&(i[l[p]]=s[l[p]])}}return i}},41535:(e,t,n)=>{"use strict";var r=n(62525),a=60103,o=60106;var s=60109,l=60110,i=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=g.prototype=new y;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var v=Array.isArray,E=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},s=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return s=s(i=e),e=""===r?"."+S(i,0):r,v(s)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),C(s,t,n,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=""===r?".":r+":",v(e))for(var c=0;c<e.length;c++){var u=r+S(l=e[c],c);i+=C(l,t,n,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(l=e.next()).done;)i+=C(l=l.value,t,n,u=r+S(l,c++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function D(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},P={transition:0}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>he});var r=n(67294),a=n(24861),o=n(88300),s=n(71481),l=n(42910),i=n(99876),c=n(63312),u=n(52803),p=n(44431),d=n.n(p),m=n(53775);class f extends m.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdate:y})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdate:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({optimisticUpdate:b})}}h.urlRoot="https://jsonplaceholder.typicode.com/todos";const y=(e,t)=>({id:e.id,...t}),g=(e,t)=>t,b=e=>e;var v=n(87462),E=n(50776),k=n(86010),w=n(95999),O=n(52263),j=n(72389),x=n(83229),S=n(55423),C=n(84195),D=n(58699),_=n(28808),T=n(96714),P=n(28224),N=n(80944),Z=n(53810),I=n(91262);const U="playgroundContainer_1vxj",R="row_3g4V",F="hidden_2rz-",M="playgroundHeader_2X75",$="playgroundEditor_1tQZ",A="playgroundPreview_3d_E",L="playgroundResult_5IAE",q="debugToggle_2KFu",B="tabControls_vH2K",V="tabs_1lMe",H="tab_3qyO",z="selected_3AAM";var X=n(60522),K=n(80126),G=n(85350);function J(e){let{value:t}=e;const{isDarkTheme:n}=(0,G.Z)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(K.ZP,{shouldExpandNode:Q,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem","background-color":n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,"font-family":"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function Q(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function W(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:q,onClick:t},"Store"),"y"===n?r.createElement(te,null):null)}const Y=(0,r.memo)(W);function ee(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(J,{value:t})}const te=(0,r.memo)(ee);function ne(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,N.Z)(),[l,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,Z.o5)();if(null!=t){const e=o[t];null!=e&&e!==l&&i(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),s(t,"y"===l?"n":"y")}),[c,t,l,s]),p=(0,r.useMemo)((()=>[new P.Z,new D.Z(_.Z)]),[]),d=!("n"===l||!a);return r.createElement(T.nq,{managers:p},r.createElement("div",{className:(0,k.Z)(A,{[F]:d})},r.createElement(I.Z,{fallback:r.createElement(ae,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ae,null)},r.createElement(E.i5,null),r.createElement(E.IF,null))))),r.createElement(Y,{selectedValue:l,toggle:u}))}const re=(0,r.memo)(ne);function ae(){return r.createElement("div",null,"Loading...")}function oe(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,k.Z)(M,n)},t)}function se(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",null,r.createElement(oe,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:L},r.createElement(re,{groupId:t,defaultOpen:n,row:a})))}function le(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(C.Z);return r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(H,{[z]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function ie(e){let{children:t}=e;return r.createElement(oe,{className:B},r.createElement("div",null,t),r.createElement(le,null))}function ce(e){let{title:t}=e;const{values:n}=(0,r.useContext)(C.Z),a=n.length>0,o=(0,j.Z)();return r.createElement("div",null,a?r.createElement(ie,null,t):r.createElement(oe,null,t),r.createElement(E.uz,{key:o,className:$}))}function ue(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:s,hidden:l=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,O.Z)(),u=(0,x.Z)();i.scope;return r.createElement("div",{className:(0,k.Z)(U,{[R]:s,[F]:l})},r.createElement(E.nu,(0,v.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>S.transpileModule(e,{compilerOptions:{module:S.ModuleKind.ESNext,target:S.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:u},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(se,{groupId:a,defaultOpen:o,row:s}),r.createElement(ce,null)):r.createElement(r.Fragment,null,r.createElement(ce,null),r.createElement(se,{groupId:a,defaultOpen:o,row:s}))))}ce.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class pe extends c.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}pe.schema={updatedAt:Date};const de=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:pe});const me={...a,...i,...u,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d(),lastUpdated:de,TimedEntity:pe,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=s.Z();return r.createElement(l.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},fe=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o="n",row:s=!1}=e;return r.createElement(ue,{scope:me,noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:a},"string"==typeof t?t:t.props.children.props.children)},he=(0,r.memo)(fe)},31587:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=n(70720);const s={title:"schema.Delete"},l=void 0,i={unversionedId:"api/Delete",id:"api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/../docs/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/docs/next/api/Delete",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Delete.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Delete"},sidebar:"docs",previous:{title:"schema.Values",permalink:"/docs/next/api/Values"},next:{title:"SimpleRecord",permalink:"/docs/next/api/SimpleRecord"}},c=[{value:"Usage",id:"usage",children:[{value:"Batch Deletes",id:"batch-deletes",children:[],level:3},{value:"Impact on useSuspense()",id:"impact-on-usesuspense",children:[],level:3}],level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,a.kt)("p",null,"Describes entities to be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: '123', name: 'Jim' },\n    { id: '456', name: 'Jane' },\n    { id: '555', name: 'Phone' },\n  ]);\nconst sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\nfunction UsersPage() {\n  const users = useSuspense(userList, {});\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <a\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </a>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,a.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,a.kt)("p",null,"Constructing an article response using the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useSuspense(MyResource.list(), {});\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"impact-on-usesuspense"},"Impact on useSuspense()"),(0,a.kt)("p",null,"When entities are deleted in a result currently being presented in React, useSuspense()\nwill consider them invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,a.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);
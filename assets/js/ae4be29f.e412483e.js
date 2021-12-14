"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88288],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2537:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"makeExternalCacheProvider()",id:"makeExternalCacheProvider",original_id:"makeExternalCacheProvider"},i=void 0,l={unversionedId:"api/makeExternalCacheProvider",id:"version-3.0/api/makeExternalCacheProvider",title:"makeExternalCacheProvider()",description:"Used to build a \\ for makeRenderRestHook()",source:"@site/versioned_docs/version-3.0/api/makeExternalCacheProvider.md",sourceDirName:"api",slug:"/api/makeExternalCacheProvider",permalink:"/docs/3.0/api/makeExternalCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/makeExternalCacheProvider.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"makeExternalCacheProvider()",id:"makeExternalCacheProvider",original_id:"makeExternalCacheProvider"},sidebar:"version-3.0/docs",previous:{title:"makeCacheProvider()",permalink:"/docs/3.0/api/makeCacheProvider"}},c=[{value:"Arguments",id:"arguments",children:[{value:"managers",id:"managers",children:[],level:3},{value:"initialState",id:"initialstate",children:[],level:3}],level:2},{value:"Returns",id:"returns",children:[],level:2}],d=(s="ExternalCacheProvider",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare const makeExternalCacheProvider: (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => ({ children }: { children: React.ReactNode }) => JSX.Element;\n")),(0,a.kt)("p",null,"Used to build a ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/ExternalCacheProvider"},"\\",(0,a.kt)(d,{mdxType:"ExternalCacheProvider"}))," for ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,a.kt)("p",null,"Internally constructs a redux store attaching the middlwares."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"managers"},"managers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.0/api/Manager"},"Manager")),(0,a.kt)("h3",{id:"initialstate"},"initialState"),(0,a.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Simple wrapper component that only has child as prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const manager = new MockNetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst Provider = makeExternalCacheProvider([manager, subscriptionManager]);\n\nfunction renderRestHook<T>(callback: () => T) {\n  return renderHook(callback, {\n    wrapper: ({ children }) => <Provider>{children}</Provider>,\n  });\n}\n")))}u.isMDXComponent=!0}}]);
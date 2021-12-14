"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13316:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>p,default:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"API Reference"},o=void 0,l={unversionedId:"api/README",id:"version-5.0/api/README",title:"API Reference",description:"Interface Definitions",source:"@site/versioned_docs/version-5.0/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/5.0/api/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/README.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"API Reference"},sidebar:"version-5.0/docs",previous:{title:"Legacy browser support",permalink:"/docs/5.0/guides/legacy-browser"},next:{title:"Types",permalink:"/docs/5.0/api/types"}},p=[{value:"Interface Definitions",id:"interface-definitions",children:[{value:"Hierarchy",id:"hierarchy",children:[],level:3}],level:2},{value:"Hooks",id:"hooks",children:[],level:2},{value:"Components",id:"components",children:[],level:2},{value:"Managers",id:"managers",children:[],level:2},{value:"Testing",id:"testing",children:[],level:2}],s=(c="MockProvider",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"interface-definitions"},"Interface Definitions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/resource"},"Resource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/Entity"},"Entity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/SimpleRecord"},"SimpleRecord")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/Endpoint"},"Endpoint"))),(0,n.kt)("h3",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," SimpleRecord\n      |\n   Entity\n      |\nSimpleResource\n      |\n   Resource\n")),(0,n.kt)("h2",{id:"hooks"},"Hooks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useresource"},"useResource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useFetcher"},"useFetcher")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useCache"},"useCache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useSubscription"},"useSubscription")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useRetrieve"},"useRetrieve")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useInvalidator"},"useInvalidator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/useResetter"},"useResetter"))),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/CacheProvider"},"CacheProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/ExternalCacheProvider"},"ExternalCacheProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/NetworkErrorBoundary"},"NetworkErrorBoundary"))),(0,n.kt)("h2",{id:"managers"},(0,n.kt)("a",{parentName:"h2",href:"/docs/5.0/api/Manager"},"Managers")),(0,n.kt)("p",null,"Extended the networking/state layer works through ",(0,n.kt)("a",{parentName:"p",href:"/docs/5.0/api/Manager"},"managers"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/NetworkManager"},"NetworkManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/SubscriptionManager"},"SubscriptionManager"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/5.0/api/PollingSubscription"},"PollingSubscription"))))),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"Testing utilities are imported from ",(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test"),". These are useful\nhelpers to ensure your code works as intended and are not meant to be shipped\nto production themselves."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"MockProvider"},"\\",(0,n.kt)(s,{mdxType:"MockProvider"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"makeRenderRestHook"},"makeRenderRestHook()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"makeCacheProvider"},"makeCacheProvider()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"makeExternalCacheProvider"},"makeExternalCacheProvider()"))))}d.isMDXComponent=!0}}]);
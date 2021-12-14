"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38169:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Handling loading state",id:"loading-state",original_id:"loading-state"},i=void 0,s={unversionedId:"guides/loading-state",id:"version-2.2/guides/loading-state",title:"Handling loading state",description:"Network resources take an unknown amount of time so it's important to be able",source:"@site/versioned_docs/version-2.2/guides/loading-state.md",sourceDirName:"guides",slug:"/guides/loading-state",permalink:"/docs/2.2/guides/loading-state",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/loading-state.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Handling loading state",id:"loading-state",original_id:"loading-state"},sidebar:"version-2.2/docs",previous:{title:"Usage",permalink:"/docs/2.2/getting-started/usage"},next:{title:"Dealing with network errors",permalink:"/docs/2.2/guides/network-errors"}},l=[{value:"Using Suspense",id:"using-suspense",children:[{value:"<code>App.tsx</code>",id:"apptsx",children:[],level:4}],level:2},{value:"Without Suspense",id:"without-suspense",children:[],level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Network resources take an unknown amount of time so it's important to be able\nto handle rendering while they load. After sometime you might want to display\na loading indicator, but at the very least you'll need to be able to deal with\nnot having the resource available yet!"),(0,o.kt)("p",null,"Normally you might do a check to see if the resource is loaded yet and manually\nspecify each fallback condition in every component. However, since ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"\nuses React's ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ByBPyMBTzM0"},"Suspense")," API, it is much simpler to do here."),(0,o.kt)("h2",{id:"using-suspense"},"Using Suspense"),(0,o.kt)("p",null,"Simply place the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Suspense />")," component where you want to show a loading\nindicator. Often this will be just above your routes; but feel free to place\nit in multiple locations!"),(0,o.kt)("h4",{id:"apptsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"App.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\nimport { RouteChildrenProps } from 'react-router';\n\nconst App = () => (\n  <div>\n    <h1>Main Title</h1>\n    <Nav />\n    <Suspense fallback={<Spinner />}>\n      <NetworkErrorBoundary>\n        <Routes />\n      </NetworkErrorBoundary>\n    </Suspense>\n  </div>\n);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," boundary must be placed in another component that is above the one\nwhere ",(0,o.kt)("inlineCode",{parentName:"p"},"useResource()")," and other hooks are used.")),(0,o.kt)("h2",{id:"without-suspense"},"Without Suspense"),(0,o.kt)("p",null,"Suspense is the recommended way of handling loading state as it reduces complexity\nwhile integrating with ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"React.lazy()"),"\nand the soon-to-be-released concurrent mode. However, if you find yourself wanting to handle\nloading state manually you can adapt the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.2/guides/no-suspense"},"useStatefulResource()")," hook."))}p.isMDXComponent=!0}}]);
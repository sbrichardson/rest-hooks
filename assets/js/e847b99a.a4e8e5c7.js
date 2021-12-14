"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42098:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Handling loading state"},i=void 0,s={unversionedId:"concepts/loading-state",id:"version-6.0/concepts/loading-state",title:"Handling loading state",description:"Network resources take an unknown amount of time so it's important to be able",source:"@site/versioned_docs/version-6.0/concepts/loading-state.md",sourceDirName:"concepts",slug:"/concepts/loading-state",permalink:"/docs/6.0/concepts/loading-state",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/concepts/loading-state.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Handling loading state"},sidebar:"version-6.0/docs",previous:{title:"Authentication",permalink:"/docs/6.0/graphql/auth"},next:{title:"Dealing with network errors",permalink:"/docs/6.0/concepts/network-errors"}},l=[{value:"Using Suspense",id:"using-suspense",children:[{value:"<code>App.tsx</code>",id:"apptsx",children:[],level:4}],level:2},{value:"Without Suspense",id:"without-suspense",children:[],level:2},{value:"Loading Buttons",id:"loading-buttons",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Network resources take an unknown amount of time so it's important to be able\nto handle rendering while they load. After sometime you might want to display\na loading indicator, but at the very least you'll need to be able to deal with\nnot having the resource available yet!"),(0,r.kt)("p",null,"Normally you might do a check to see if the resource is loaded yet and manually\nspecify each fallback condition in every component. However, since ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"\nuses React's ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ByBPyMBTzM0"},"Suspense")," API, it is much simpler to do here."),(0,r.kt)("h2",{id:"using-suspense"},"Using Suspense"),(0,r.kt)("p",null,"Simply place the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense />")," component where you want to show a loading\nindicator. Often this will be just above your routes; but feel free to place\nit in multiple locations!"),(0,r.kt)("h4",{id:"apptsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"App.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\nimport { RouteChildrenProps } from 'react-router';\n\nconst App = () => (\n  <div>\n    <h1>Main Title</h1>\n    <Nav />\n    <Suspense fallback={<Spinner />}>\n      <NetworkErrorBoundary>\n        <Routes />\n      </NetworkErrorBoundary>\n    </Suspense>\n  </div>\n);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," boundary must be placed in another component that is above the one\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"useResource()")," and other hooks are used.")),(0,r.kt)("h2",{id:"without-suspense"},"Without Suspense"),(0,r.kt)("p",null,"Suspense is the recommended way of handling loading state as it reduces complexity\nwhile integrating with ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"React.lazy()"),"\nand the soon-to-be-released concurrent mode. However, if you find yourself wanting to handle\nloading state manually you can adapt the ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/guides/no-suspense"},"useStatefulResource()")," hook."),(0,r.kt)("h2",{id:"loading-buttons"},"Loading Buttons"),(0,r.kt)("p",null,"When performing mutations you'll often want an indicator that the request is still in flight.\nSometimes form libraries will handling the loading state themselves. However, in the case you're\nmaking a standalone button or simply using a form library that doesn't track loading state of\nsubmitters, you can use ",(0,r.kt)("a",{parentName:"p",href:"../api/useLoading"},"useLoading()")," from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks"),"."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nfunction Button({ onClick, children, ...props }) {\n  const [clickHandler, loading] = useLoading(onClick);\n  return (\n    <button onClick={clickHandler} {...props}>\n      {loading ? 'Loading...' : children}\n    </button>\n  );\n}\n")))}p.isMDXComponent=!0}}]);
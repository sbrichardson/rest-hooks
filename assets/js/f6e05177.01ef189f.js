"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50580:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Fetching Media",id:"binary-fetches",original_id:"binary-fetches"},s=void 0,i={unversionedId:"guides/binary-fetches",id:"version-4.5/guides/binary-fetches",title:"Fetching Media",description:"After setting up Rest Hooks for structured data fetching, you might want to incorporate",source:"@site/versioned_docs/version-4.5/guides/binary-fetches.md",sourceDirName:"guides",slug:"/guides/binary-fetches",permalink:"/docs/4.5/guides/binary-fetches",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/binary-fetches.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Fetching Media",id:"binary-fetches",original_id:"binary-fetches"},sidebar:"version-4.5/docs",previous:{title:"Custom cache lifetime",permalink:"/docs/4.5/guides/resource-lifetime"},next:{title:"Infinite Scrolling",permalink:"/docs/4.5/guides/infinite-scrolling-pagination"}},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and concurrent mode support."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,a.kt)("a",{parentName:"p",href:"../api/FetchShape"},"FetchShape"),"\nwith a schema set to null, but with a type including what we expect in the response."),(0,a.kt)("p",null,"Schemas with literal types like null simply pass through the response, but their value is\nused to construct responses when the data does not exist yet (like in ",(0,a.kt)("a",{parentName:"p",href:"../api/useCache"},"useCache"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const photoShape = {\n  type: 'read' as const,\n  schema: null as ArrayBuffer | null,\n  getFetchKey({ userId }: { userId: string }) {\n    return `/users/${userId}/photo`;\n  },\n  fetch: async ({ userId }: { userId: string }) => {\n    const response = await fetch(`/users/${userId}/photo`);\n    const photoArrayBuffer = await response.arrayBuffer();\n\n    return photoArrayBuffer;\n  },\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as null | ArrayBuffer, but should be an ArrayBuffer\nconst photo = useResource(photoShape, { userId });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be null if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(photoShape, { userId });\n")))}p.isMDXComponent=!0}}]);
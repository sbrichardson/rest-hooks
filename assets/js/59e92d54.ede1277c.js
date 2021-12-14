"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38492:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>i,assets:()=>c,toc:()=>l,default:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={authors:["ntucker"],tags:["releases","rest-hooks"],title:"Announcing Rest Hooks 2.0"},s=void 0,i={permalink:"/blog/2019/07/13/Announcing-Rest-Hooks-2.0",source:"@site/blog/2019-07-13-Announcing-Rest-Hooks-2.0.md",title:"Announcing Rest Hooks 2.0",description:"We use SemVer for Rest Hooks - so 2.0 represents some breaking changes. To minimize disruption",date:"2019-07-13T00:00:00.000Z",formattedDate:"July 13, 2019",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:5.485,truncated:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],prevItem:{title:"Rest Hooks 2.1 Released",permalink:"/blog/2019/08/07/Rest-Hooks-2.1-Released"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"SemVer")," for Rest Hooks - so 2.0 represents some breaking changes. To minimize disruption\nwe have been carefully considering these changes and awaiting community feedback to be confident\nthese are the right changes to make."),(0,o.kt)("p",null,"While some of these changes are simple renames to make the library more intuitive - some represent\nimportant progress to empowering the next chapter of Rest Hooks."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/2.0.0"},"https://github.com/coinbase/rest-hooks/releases/tag/2.0.0")," for a complete list of changes"))}u.isMDXComponent=!0}}]);
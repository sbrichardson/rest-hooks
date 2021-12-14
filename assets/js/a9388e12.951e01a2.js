"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40982:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>a,toc:()=>p,default:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"Cross-orgin requests with JSONP",id:"jsonp",original_id:"jsonp"},i=void 0,a={unversionedId:"guides/jsonp",id:"version-2.2/guides/jsonp",title:"Cross-orgin requests with JSONP",description:"JSONP is a method for sending JSON data without worrying about cross-domain issues. This",source:"@site/versioned_docs/version-2.2/guides/jsonp.md",sourceDirName:"guides",slug:"/guides/jsonp",permalink:"/docs/2.2/guides/jsonp",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/jsonp.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Cross-orgin requests with JSONP",id:"jsonp",original_id:"jsonp"},sidebar:"version-2.2/docs",previous:{title:"Custom cache lifetime",permalink:"/docs/2.2/guides/resource-lifetime"},next:{title:"Mocking data for Storybook",permalink:"/docs/2.2/guides/storybook"}},p=[],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JSONP is a method for sending JSON data without worrying about cross-domain issues. This\nis sometimes needed when calling third-party APIs that don't come with appropriate\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import jsonp from 'superagent-jsonp';\nimport { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | null = null;\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  // OPERATIVE LINE HERE\n  static fetchPlugin = jsonp;\n}\n")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/superagent-jsonp"},"jsonp plugin")," for superagent makes this quite easy."))}l.isMDXComponent=!0}}]);
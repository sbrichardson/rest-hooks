/*! For license information please see 6c01dbcc.812a82b2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34668],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(c[l]=i[l]);if(t){s=t(i);for(var p=0;p<s.length;p++)r.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},41535:(e,t,n)=>{var r=n(62525),o=60103,a=60106;var i=60109,s=60110,c=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function m(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var b=g.prototype=new m;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+_(c,0):r,v(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",v(e))for(var u=0;u<e.length;u++){var l=r+_(s=e[u],u);c+=E(s,t,n,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),u=0;!(s=e.next()).done;)c+=E(s=s.value,t,n,l=r+_(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function S(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},C={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43979:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>l});var r=n(87462),o=(n(27378),n(3905));const a={title:"Mocking unfinished endpoints"},i=void 0,s={unversionedId:"guides/mocking-unfinished",id:"guides/mocking-unfinished",title:"Mocking unfinished endpoints",description:"You have agreed to an API schema with a backend engineer who will implement it;",source:"@site/../docs/guides/mocking-unfinished.md",sourceDirName:"guides",slug:"/guides/mocking-unfinished",permalink:"/docs/next/guides/mocking-unfinished",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/mocking-unfinished.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1596168852,formattedLastUpdatedAt:"7/30/2020",frontMatter:{title:"Mocking unfinished endpoints"},sidebar:"docs",previous:{title:"Transforming data on fetch",permalink:"/docs/next/guides/network-transform"},next:{title:"Custom cache lifetime",permalink:"/docs/next/guides/resource-lifetime"}},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You have agreed to an API schema with a backend engineer who will implement it;\nbut they are starting to code the same time as you. It would be nice to easily\nmock the endpoint and use it in a way such that when the endpoint is done\nyou won't need to make major changes to your code."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource/RatingResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class RatingResource extends Resource {\n  readonly id: string = '';\n  readonly rating: number = 4.6;\n  readonly author: string = '';\n  readonly date: string = '1990-01-01T00:00:00Z';\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/ratings';\n\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      dataExpiryLength: 10 * 60 * 1000, // 10 minutes\n    };\n  }\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      fetch(params: Readonly<object>, body?: Readonly<object | string>) {\n        return Promise.resolve(\n          ['Morningstar', 'Seekingalpha', 'Morningstar', 'CNBC'].map(\n            author => ({\n              id: `${Math.random()}`,\n              rating: randomFloatInRange(2, 5).toFixed(1),\n              author,\n              date: '1990-01-01T00:00:00Z',\n            }),\n          ),\n        );\n      },\n    });\n  }\n}\n")),(0,o.kt)("p",null,"By mocking the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint")," we can easily fake the data the server will return. Doing\nthis allows free use of the strongly typed RatingResource as normal throughout the codebase."),(0,o.kt)("p",null,"Once the API is implemented you can simply remove the custom fetch (and the entire list()\noverride if that's all it's doing)."),(0,o.kt)("p",null,"In this example we also set the dataExpiryLength to a longer time so the random values generated\npersist longer. This makes for a more realistic demo."))}l.isMDXComponent=!0}}]);
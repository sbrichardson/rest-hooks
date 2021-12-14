/*! For license information please see 27beb51b.c195f07e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6213],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,c,i=o(e),s=1;s<arguments.length;s++){for(var u in l=Object(arguments[s]))r.call(l,u)&&(i[u]=l[u]);if(t){c=t(l);for(var p=0;p<c.length;p++)n.call(l,c[p])&&(i[c[p]]=l[c[p]])}}return i}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var l=60109,c=60110,i=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),l=p("react.provider"),c=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}function m(){}function h(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=h.prototype=new m;v.constructor=h,n(v,b.prototype),v.isPureReactComponent=!0;var O=Array.isArray,g=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)g.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return l=l(i=e),e=""===n?"."+_(i,0):n,O(l)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),P(l,t,r,"",(function(e){return e}))):null!=l&&(C(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(S,"$&/")+"/")+e)),t.push(l)),1;if(i=0,n=""===n?".":n+":",O(e))for(var s=0;s<e.length;s++){var u=n+_(c=e[s],s);i+=P(c,t,r,u,l)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),s=0;!(c=e.next()).done;)i+=P(c=c.value,t,r,u=n+_(c,s++),l);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function x(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,d=f["".concat(i,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78694:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>c,toc:()=>i,default:()=>u});var n=r(87462),o=(r(27378),r(3905));const a={title:"useController()"},l=void 0,c={unversionedId:"api/useController",id:"api/useController",title:"useController()",description:"useController() - Imperative Controls for Rest Hooks",source:"@site/../docs/api/useController.md",sourceDirName:"api",slug:"/api/useController",permalink:"/docs/next/api/useController",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useController.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1633535713,formattedLastUpdatedAt:"10/6/2021",frontMatter:{title:"useController()"},sidebar:"docs",previous:{title:"useSuspense()",permalink:"/docs/next/api/useSuspense"},next:{title:"useCache()",permalink:"/docs/next/api/useCache"}},i=[],s={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"useController() - Imperative Controls for Rest Hooks")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useController(): Controller;\n")),(0,o.kt)("p",null,"Provides access to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/Controller"},"Controller")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nfunction MyComponent({ id }) {\n  const { fetch, invalidate, resetEntireStore } = useController();\n\n  const handleRefresh = useCallback(\n    async e => {\n      await fetch(MyResource.detail(), { id });\n    },\n    [fetch, id],\n  );\n\n  const handleSuspend = useCallback(\n    async e => {\n      await invalidate(MyResource.detail(), { id });\n    },\n    [invalidate, id],\n  );\n\n  const handleLogout = useCallback(\n    async e => {\n      resetEntireStore();\n    },\n    [resetEntireStore],\n  );\n}\n")))}u.isMDXComponent=!0}}]);
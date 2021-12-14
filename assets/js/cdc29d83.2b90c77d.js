/*! For license information please see cdc29d83.2b90c77d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92046],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))r.call(i,c)&&(l[c]=i[c]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,s=60110,l=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var m=b.prototype=new g;m.constructor=b,n(m,h.prototype),m.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+P(l,0):n,k(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",k(e))for(var u=0;u<e.length;u++){var c=n+P(s=e[u],u);l+=S(s,t,r,c,i)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(s=e.next()).done;)l+=S(s=s.value,t,r,c=n+P(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function x(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},T={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48045:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>c});var n=r(87462),o=(r(27378),r(3905));const a={title:"Upgrading @rest-hooks/test to 3"},i=void 0,s={unversionedId:"upgrade/upgrading-test-to-three",id:"upgrade/upgrading-test-to-three",title:"Upgrading @rest-hooks/test to 3",description:"@rest-hooks/test uses react-hooks-testing-library internally. Version 3",source:"@site/../docs/upgrade/upgrading-test-to-three.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-three",permalink:"/docs/next/upgrade/upgrading-test-to-three",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-three.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Upgrading @rest-hooks/test to 3"},sidebar:"docs",previous:{title:"Upgrading @rest-hooks/test to 4",permalink:"/docs/next/upgrade/upgrading-test-to-four"}},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hooks-testing-library")," internally. Version 3\nhas a major version upgrade for this library, so the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"},"breaking changes"),"\nalso apply to ",(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result.current, result.error is now ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," after suspense, rather than ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"interval will now default to 50ms in async utils"),(0,o.kt)("li",{parentName:"ul"},"timeout will now default to 1000ms in async utils"),(0,o.kt)("li",{parentName:"ul"},"suppressErrors has been removed from async utils"),(0,o.kt)("li",{parentName:"ul"},"Adjust types so that react renderer exports don't required extra generic parameter"),(0,o.kt)("li",{parentName:"ul"},"Importing from renderHook and act from @testing-library/react-hooks will now auto-detect which renderer to used based on the project's dependencies",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- peerDependencies are now optional to support different dependencies being required\n- This means there will be no warning if the dependency is not installed at all, but it will still warn if an incompatible version is installed\n- Auto-detection won't work with bundlers (e.g. Webpack). Please use as specific renderer import instead\n")),"(see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"},"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v5.0.0"),")")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@3")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/%40rest-hooks%2Ftest%403.0.0"},"Release notes")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76069:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>s,toc:()=>i,default:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"installation",title:"Installation",original_id:"installation",slug:"/"},l=void 0,s={unversionedId:"getting-started/installation",id:"version-4.1/getting-started/installation",title:"Installation",description:"Rest Hooks is a library for fetching structured data in a performant way with no boilerplate.",source:"@site/versioned_docs/version-4.1/getting-started/installation.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/4.1/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"installation",title:"Installation",original_id:"installation",slug:"/"},sidebar:"version-4.1/docs",next:{title:"Usage",permalink:"/docs/4.1/getting-started/usage"}},i=[{value:"Install rest-hooks",id:"install-rest-hooks",children:[],level:2},{value:"Legacy browser (IE) support",id:"legacy-browser-ie-support",children:[{value:"Transpile Rest Hooks package",id:"transpile-rest-hooks-package",children:[],level:3},{value:"Polyfills",id:"polyfills",children:[{value:"<code>index.tsx</code>",id:"indextsx",children:[],level:4}],level:3}],level:2},{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",children:[{value:"<code>index.tsx</code>",id:"indextsx-1",children:[],level:4}],level:2},{value:"Add Suspense and ErrorBoundary",id:"add-suspense-and-errorboundary",children:[{value:"<code>App.tsx</code>",id:"apptsx",children:[],level:4}],level:2}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rest Hooks is a library for fetching structured data in a performant way with no boilerplate."),(0,a.kt)("p",null,"Its interface is declarative and minimal. A small structure declaration is all that is needed\nfor Rest Hooks to perform numerous fetching and caching optimizations while providing predictable,\nprecisely-typed data to consume."),(0,a.kt)("p",null,"Structured data means data composed of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Objects"),"\n(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Associative_array"},"maps"),")\nand ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"Arrays"),"\n(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_(abstract_data_type)"},"lists"),"), as opposed media\nlike images and videos. This makes it great for API calls regardless of form (",(0,a.kt)("a",{parentName:"p",href:"https://restfulapi.net/"},"REST-like"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),", ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),"), serialization (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"},"JSON"),", ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML"),"),\nor transport (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"HTTP"),", ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", ",(0,a.kt)("a",{parentName:"p",href:"../guides/mocking-unfinished"},"local"),")."),(0,a.kt)("h2",{id:"install-rest-hooks"},"Install rest-hooks"),(0,a.kt)("p",null,"Install the rest-hooks package into your project using ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"yarn")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add rest-hooks\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install rest-hooks\n")),(0,a.kt)("h2",{id:"legacy-browser-ie-support"},"Legacy browser (IE) support"),(0,a.kt)("p",null,"Rest Hooks includes multiple bundles including a commonjs bundle that is compiled with maximum compatibility as well as an ES6 module bundle that is compiled to target modern browsers or react native.\nTools like webpack or rollup will use the ES6 modules to enable optimizations like tree-shaking. However,\nthe Javascript included will not support legacy browsers like Internet Explorer. If your browser target\nincludes such browsers (you'll likely see something like ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),") you will need to follow the steps below."),(0,a.kt)("h3",{id:"transpile-rest-hooks-package"},"Transpile Rest Hooks package"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Many out-of-the-box solutions like create react app will already perform this step and no\nadditional work is needed.")),(0,a.kt)("p",null,"Add preset to run only legacy transformations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev babel-preset-react-app\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install babel-preset-react-app\n")),(0,a.kt)("p",null,"Add this section to your ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," under the 'rules' section."),(0,a.kt)("p",null,"This will only run legacy transpilation, and skip all other steps as they are unneeded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"rules: [\n  // put other js rules here\n  {\n    test: /\\.(js|mjs)$/,\n    use: ['babel-loader'],\n    include: [/node_modules/],\n    exclude: /@babel(?:\\/|\\\\{1,2})runtime/,\n    options: {\n      babelrc: false,\n      configFile: false,\n      compact: false,\n      presets: [\n        [\n          require.resolve('babel-preset-react-app/dependencies'),\n          { helpers: true },\n        ],\n      ],\n      cacheDirectory: true,\n    },\n  },\n]\n")),(0,a.kt)("h3",{id:"polyfills"},"Polyfills"),(0,a.kt)("p",null,"Rest-hooks is built to be compatible with old browsers, but assumes polyfills will\nalready be loaded. If you want to support old browsers like Internet Explorer, you'll\nneed to install core-js and import it at the entry point of your bundle."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"},"CRA polyfill"),"\nor follow instructions below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add core-js whatwg-fetch\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install core-js whatwg-fetch\n")),(0,a.kt)("h4",{id:"indextsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'core-js/stable';\nimport 'whatwg-fetch';\n// place the above line at top\n")),(0,a.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,a.kt)("h4",{id:"indextsx-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body\n);\n")),(0,a.kt)("p",null,"Alternatively ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/guides/redux"},"integrate state with redux")),(0,a.kt)("h2",{id:"add-suspense-and-errorboundary"},"Add Suspense and ErrorBoundary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2018/11/13/react-conf-recap.html"},"Suspense")," will show a fallback while content is loading."),(0,a.kt)("p",null,"Put the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," component around the point where you want the fallback to be shown.\nAny usage of the hooks will need to be below this point in the tree."),(0,a.kt)("p",null,"Feel free to hook up multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," points if you want to show loaders at different\npoints in your application."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/api/NetworkErrorBoundary"},(0,a.kt)("inlineCode",{parentName:"a"},"<NetworkErrorBoundary/>"))," will handle fallbacks upon any network errors."),(0,a.kt)("h4",{id:"apptsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"App.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nconst App = () => (\n  <div>\n    <h1>Main Title</h1>\n    <Nav />\n    <Suspense fallback={<Spinner />}>\n      <NetworkErrorBoundary>\n        <Routes />\n      </NetworkErrorBoundary>\n    </Suspense>\n  </div>\n);\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../guides/loading-state"},"More about loading state")))}d.isMDXComponent=!0}}]);
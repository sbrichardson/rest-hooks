"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94124],{96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9877),r=a(58215),o=a(67294),s=a(87799);function l(e){let{pkgs:t,dev:a=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(r.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),o.createElement(r.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(15814);const o={React:n,...n,...r}},34246:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>p,toc:()=>c,default:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(9877),s=a(58215),l=a(96497);const i={id:"installation",title:"Installation"},d=void 0,p={unversionedId:"getting-started/installation",id:"version-6.0/getting-started/installation",title:"Installation",description:"TypeScript is optional, but requires at least version 3.7 for full type enforcement.",source:"@site/versioned_docs/version-6.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/6.0/getting-started/installation",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-6.0/docs",previous:{title:"Introduction",permalink:"/docs/6.0/"},next:{title:"Endpoint",permalink:"/docs/6.0/getting-started/endpoint"}},c=[{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",children:[],level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{pkgs:"rest-hooks @rest-hooks/test @rest-hooks/hooks @rest-hooks/rest",mdxType:"PkgTabs"}),(0,r.kt)("p",null,"TypeScript is optional, but requires at least version ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases"},"3.7")," for full type enforcement."),(0,r.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,r.kt)(o.Z,{defaultValue:"web",groupId:"platform",values:[{label:"React Web 16+",value:"web"},{label:"React Web 18+",value:"18-web"},{label:"React Native",value:"native"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,r.kt)(s.Z,{value:"18-web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,r.kt)(s.Z,{value:"native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport { AppRegistry } from 'react-native';\n\nconst Root = () => (\n  <CacheProvider>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n")))),(0,r.kt)("p",null,"Alternatively ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/guides/redux"},"integrate state with redux")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Legacy (IE) browser support")),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),",\nfollow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"../guides/legacy-browser"},"add legacy browser support to packages"))))}u.isMDXComponent=!0}}]);
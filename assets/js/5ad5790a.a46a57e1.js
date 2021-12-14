"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25123],{96497:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(9877),n=s(58215),r=s(67294),o=s(87799);function i(e){let{pkgs:t,dev:s=!1}=e;return r.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(n.Z,{value:"yarn"},r.createElement(o.Z,{className:"language-bash"},"yarn add ",s?"--dev ":"",t)),r.createElement(n.Z,{value:"npm"},r.createElement(o.Z,{className:"language-bash"},"npm install --save",s?"Dev ":""," ",t)))}},56922:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(67294),n=s(15814);const r={React:a,...a,...n}},48475:(e,t,s)=>{s.r(t),s.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>m});var a=s(87462),n=(s(67294),s(3905)),r=s(96497),o=s(9877),i=s(58215);const u={title:"Fetching Media"},l=void 0,p={unversionedId:"guides/binary-fetches",id:"version-6.0/guides/binary-fetches",title:"Fetching Media",description:"After setting up Rest Hooks for structured data fetching, you might want to incorporate",source:"@site/versioned_docs/version-6.0/guides/binary-fetches.md",sourceDirName:"guides",slug:"/guides/binary-fetches",permalink:"/docs/6.0/guides/binary-fetches",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/binary-fetches.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Fetching Media"},sidebar:"version-6.0/docs",previous:{title:"Dealing with network errors",permalink:"/docs/6.0/concepts/network-errors"},next:{title:"Infinite Scrolling",permalink:"/docs/6.0/guides/infinite-scrolling-pagination"}},c=[{value:"Storing buffers",id:"storing-buffers",children:[],level:2},{value:"Just Images",id:"just-images",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Prefetching",id:"prefetching",children:[],level:4}],level:2}],d={toc:c};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,n.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,n.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,n.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,n.kt)(o.Z,{defaultValue:"useResource",values:[{label:"useResource",value:"useResource"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"useResource",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useResource(getPhoto, { userId });\n"))),(0,n.kt)(i.Z,{value:"useCache",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,n.kt)(i.Z,{value:"JS/Node",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,n.kt)("h2",{id:"just-images"},"Just Images"),(0,n.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,n.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,(0,n.kt)("b",null,"Profile.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,n.kt)("h4",{id:"prefetching"},"Prefetching"),(0,n.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,(0,n.kt)("b",null,"Profile.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useResource, useRetrieve } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useRetrieve(getImage, { src: imageSrc });\n  const user = useResource(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,n.kt)("p",null,"When using the ",(0,n.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,n.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,n.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64013],{78665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(67294),n=a(86010),r=a(92582),s=a(39960);const c="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",o="sidebarItem_2UVv",g="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";var d=a(95999);function b(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},40497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(67294),n=a(78665),r=a(7774),s=a(53810);const c="tag_21yA";function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}const m=function(e){let{tags:t}=e;const a=(0,s.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,r=(0,s.MA)();return l.createElement(n.Z,{title:r,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,r),l.createElement(m,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(39960);const s="tag_1Okp",c="tagRegular_3MiF",i="tagWithCount_1HU1";const m=function(e){const{permalink:t,name:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[c]:!m,[i]:m})},a,m&&l.createElement("span",null,m))}}}]);
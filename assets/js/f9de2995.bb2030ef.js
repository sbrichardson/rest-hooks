"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=l(n),m=r,f=y["".concat(c,".").concat(m)]||y[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35465:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"SimpleRecord",id:"SimpleRecord",original_id:"SimpleRecord"},o=void 0,s={unversionedId:"api/SimpleRecord",id:"version-4.5/api/SimpleRecord",title:"SimpleRecord",description:"SimpleRecord provides a simple immutable interface to store values that have",source:"@site/versioned_docs/version-4.5/api/SimpleRecord.md",sourceDirName:"api",slug:"/api/SimpleRecord",permalink:"/docs/4.5/api/SimpleRecord",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/SimpleRecord.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"SimpleRecord",id:"SimpleRecord",original_id:"SimpleRecord"},sidebar:"version-4.5/docs",previous:{title:"Entity",permalink:"/docs/4.5/api/Entity"},next:{title:"FetchShape",permalink:"/docs/4.5/api/FetchShape"}},c=[{value:"Factory method",id:"factory-method",children:[{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet",children:[],level:3}],level:2},{value:"Data methods",id:"data-methods",children:[{value:"static merge&lt;T extends typeof SimpleRecord&gt;(first: InstanceType&lt;T&gt;, second: InstanceType&lt;T&gt;) =&gt; InstanceType&lt;T&gt;",id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet",children:[],level:3},{value:"static hasDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;, key: keyof InstanceType&lt;T&gt;) =&gt; boolean",id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean",children:[],level:3},{value:"static toObjectDefined&lt;T extends typeof SimpleRecord&gt;(instance: AbstractInstanceType&lt;T&gt;) =&gt; Partial&lt;InstanceType&lt;T&gt;&gt;",id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet",children:[],level:3},{value:"static keysDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;) =&gt; (keyof InstanceType&lt;T&gt;)[]",id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet",children:[],level:3}],level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRecord")," provides a simple immutable interface to store values that have\ndefaults. When constructed it distinguishes between actually set values and ones\nonly provided by defaults. This is useful to produce accurate merging algorithms\nwhen dealing with partial data definitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleRecord } from 'rest-hooks';\n\nexport default class Article extends SimpleRecord {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { SimpleRecord } from 'rest-hooks';\n\nexport default class Article extends SimpleRecord {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n}\n")),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof SimpleRecord",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,r.kt)("p",null,"This is used to create instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," you defined. Will copy over props provided to\nthe instance in construction, among other things. ",(0,r.kt)("em",{parentName:"p"},"Be sure to always call ",(0,r.kt)("inlineCode",{parentName:"em"},"super.fromJS()")," when\noverriding.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const articleA = Article.fromJS({\n  title: 'The best library',\n  tags: ['Immutable'],\n});\nconst articleB = Article.fromJS({\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n});\n")),(0,r.kt)("h2",{id:"data-methods"},"Data methods"),(0,r.kt)("h3",{id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet"},"static merge\\<T extends typeof SimpleRecord",">","(first: InstanceType\\<T",">",", second: InstanceType\\<T",">",") => InstanceType\\<T",">"),(0,r.kt)("p",null,"Takes only the defined (non-default) values of first and second and creates a new instance copying them over.\nSecond will override values of first. Merge is shallow, so you'll need to override this to do any deep merges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const mergedArticle = Article.merge(articleA, articleB);\nconsole.log(mergedArticle);\n/*\n{\n  id: undefined,\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  author: null,\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,r.kt)("h3",{id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean"},"static hasDefined\\<T extends typeof SimpleRecord",">","(instance: InstanceType\\<T",">",", key: keyof InstanceType\\<T",">",") => boolean"),(0,r.kt)("p",null,"Returns whether provided ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is defined (non-default) in ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(articleA.hasDefined('title'));\n/* true */\nconsole.log(articleA.hasDefined('content'));\n/* false */\n")),(0,r.kt)("h3",{id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet"},"static toObjectDefined\\<T extends typeof SimpleRecord",">","(instance: AbstractInstanceType\\<T",">",") => Partial\\<InstanceType\\<T",">",">"),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," with only the defined (non-default) members of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.toObjectDefined());\n/*\n{\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,r.kt)("h3",{id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet"},"static keysDefined\\<T extends typeof SimpleRecord",">","(instance: InstanceType\\<T",">",") => (keyof InstanceType\\<T",">",")[]"),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of all defined (non-default) keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.keysDefined());\n/* ['title', 'content', 'tags'] */\n")))}p.isMDXComponent=!0}}]);
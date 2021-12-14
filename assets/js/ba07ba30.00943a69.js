"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),s=n(72389),l=n(80944),o=n(53810),i=n(86010);const u="tabItem_1uMI";function c(e){var t,n;const{lazy:r,block:s,defaultValue:c,values:d,groupId:p,className:m}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??y.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),v=(0,o.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=y[0])?void 0:n.props.value);if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:h}=(0,l.Z)(),[k,w]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=p){const e=b[p];null!=e&&e!==k&&f.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==k&&(x(t),w(r),null!=p&&h(p,r))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]||O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},m)},f.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":k===t}),key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:E,onClick:E},n??t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,s.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},80944:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(79443);const s=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9877),a=n(58215),s=n(67294);function l(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(a.Z,{value:"ts"},t[0]),s.createElement(a.Z,{value:"js"},t[1]))}},89119:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>i,toc:()=>u,default:()=>d});var r=n(87462),a=(n(67294),n(3905)),s=n(70523);const l={title:"Defining your Resource types",sidebar_label:"Resource types"},o=void 0,i={unversionedId:"guides/resource-types",id:"version-5.0/guides/resource-types",title:"Defining your Resource types",description:"Typing your data can be very useful and is highly recommended when using this library.",source:"@site/versioned_docs/version-5.0/guides/resource-types.md",sourceDirName:"guides",slug:"/guides/resource-types",permalink:"/docs/5.0/guides/resource-types",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/resource-types.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Defining your Resource types",sidebar_label:"Resource types"},sidebar:"version-5.0/docs",previous:{title:"Usage",permalink:"/docs/5.0/rest/usage"},next:{title:"URL Patterns",permalink:"/docs/5.0/guides/url"}},u=[{value:"Guidelines:",id:"guidelines",children:[],level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Typing your data can be very useful and is highly recommended when using this library.\nOne of the main benefits is to enforce immutability, as this brings certain assurances\nto the correctness of your application as well as enables certain performance enhancements\nwith React."),(0,a.kt)("p",null,"Here we have an example ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource"},"Resource")," for a User typed in typescript."),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport interface Address {\n  readonly street: string;\n  readonly suite: string;\n  readonly city: string;\n  readonly zipcode: string;\n  readonly geo: {\n    readonly lat: string;\n    readonly lng: string;\n  };\n}\n\nexport type Status = 'pending' | 'rejected' | 'accepted';\n\nexport class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly phone: string = '';\n  readonly website: string = '';\n  readonly address: Address | null = null;\n  readonly status: Status = 'pending';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport class UserResource extends Resource {\n  id = undefined;\n  name = '';\n  username = '';\n  email = '';\n  phone = '';\n  website = '';\n  address = null;\n  status = 'pending';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n"))),(0,a.kt)("h3",{id:"guidelines"},"Guidelines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define all properties you expect to see"),(0,a.kt)("li",{parentName:"ul"},"Mark them as readonly to enforce immutability"),(0,a.kt)("li",{parentName:"ul"},"Give each property as specific and descriptive a type as possible"),(0,a.kt)("li",{parentName:"ul"},"Initialize the property with a sensible default",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will simplify handling so we don't have to deal with ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),"s")))))}d.isMDXComponent=!0}}]);
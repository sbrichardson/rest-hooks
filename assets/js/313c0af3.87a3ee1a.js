"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46731],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);const r=function(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),r=t(67294),i=t(72389),s=t(80944),l=t(53810),o=t(86010);const u="tabItem_1uMI";function c(e){var n,t;const{lazy:a,block:i,defaultValue:c,values:d,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??h.map((e=>{let{props:{value:n,label:t}}=e;return{value:n,label:t}})),f=(0,l.lx)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=h[0])?void 0:t.props.value);if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,s.Z)(),[g,N]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:A}=(0,l.o5)();if(null!=p){const e=b[p];null!=e&&e!==g&&y.some((n=>n.value===e))&&N(e)}const O=e=>{const n=e.currentTarget,t=w.indexOf(n),a=y[t].value;a!==g&&(A(n),N(a),null!=p&&k(p,a))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},y.map((e=>{let{value:n,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,o.Z)("tabs__item",u,{"tabs__item--active":g===n}),key:n,ref:e=>w.push(e),onKeyDown:E,onFocus:O,onClick:O},t??n)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function d(e){const n=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},80944:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(79443);const i=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(9877),r=t(58215),i=t(67294);function s(e){let{children:n}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},n[0]),i.createElement(r.Z,{value:"js"},n[1]))}},84197:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>o,toc:()=>u,default:()=>d});var a=t(87462),r=(t(67294),t(3905)),i=(t(9877),t(58215),t(70523));const s={title:"Array"},l=void 0,o={unversionedId:"api/Array",id:"version-6.0/api/Array",title:"Array",description:"Creates a schema to normalize an array of schemas. If the input value is an Object instead of an Array,",source:"@site/versioned_docs/version-6.0/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/docs/6.0/api/Array",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Array.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Array"},sidebar:"version-6.0/docs",previous:{title:"Object",permalink:"/docs/6.0/api/Object"},next:{title:"Union",permalink:"/docs/6.0/api/Union"}},u=[{value:"Instance Methods",id:"instance-methods",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Output",id:"output",children:[],level:4},{value:"Dynamic entity types",id:"dynamic-entity-types",children:[{value:"string schemaAttribute",id:"string-schemaattribute",children:[],level:4},{value:"function schemaAttribute",id:"function-schemaattribute",children:[],level:4},{value:"Output",id:"output-1",children:[],level:4}],level:3}],level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," instead of an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"'s values."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,r.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,r.kt)("em",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n];\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\n\nconst userListSchema = new schema.Array(User);\n// or use shorthand syntax:\nconst userListSchema = [User];\n\nconst normalizedData = normalize(data, userListSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n];\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\n\nconst userListSchema = new schema.Array(User);\n// or use shorthand syntax:\nconst userListSchema = [User];\n\nconst normalizedData = normalize(data, userListSchema);\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    User: {\n      '123': { id: '123', name: 'Jim' },\n      '456': { id: '456', name: 'Jane' }\n    }\n  },\n  result: [ '123', '456' ]\n}\n")),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: 1, type: 'admin' },\n  { id: 2, type: 'user' },\n];\n\nclass User extends Entity {\n  readonly type = 'user' as const;\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  readonly type = 'admin' as const;\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admin: Admin,\n    user: User,\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { id: 1, type: 'admin' },\n  { id: 2, type: 'user' },\n];\n\nclass User extends Entity {\n  readonly type = 'user' as const;\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  readonly type = 'admin' as const;\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admins: Admin,\n    users: User,\n  },\n  (input, parent, key) => `${input.type}s`,\n);\n\nconst normalizedData = normalize(data, myArray);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [{ id: 1, type: 'admin' }, { id: 2, type: 'user' }];\n\nclass User extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nclass Admin extends Entity {\n  pk() {\n    return this.id;\n  }\n}\nconst myArray = new schema.Array(\n  {\n    admins: Admin,\n    users: User,\n  },\n  (input, parent, key) => `${input.type}s`,\n);\n\nconst normalizedData = normalize(data, myArray);\n"))),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: [\n    { id: 1, schema: 'Admin' },\n    { id: 2, schema: 'User' }\n  ]\n}\n")))}d.isMDXComponent=!0}}]);
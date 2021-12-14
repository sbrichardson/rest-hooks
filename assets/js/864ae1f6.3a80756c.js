"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98611],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);const r=function(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),r=t(67294),i=t(72389),l=t(80944),s=t(53810),o=t(86010);const u="tabItem_1uMI";function c(e){var n,t;const{lazy:a,block:i,defaultValue:c,values:d,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??h.map((e=>{let{props:{value:n,label:t}}=e;return{value:n,label:t}})),f=(0,s.lx)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=h[0])?void 0:t.props.value);if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,l.Z)(),[g,N]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=p){const e=b[p];null!=e&&e!==g&&y.some((n=>n.value===e))&&N(e)}const E=e=>{const n=e.currentTarget,t=w.indexOf(n),a=y[t].value;a!==g&&(T(n),N(a),null!=p&&k(p,a))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},y.map((e=>{let{value:n,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,o.Z)("tabs__item",u,{"tabs__item--active":g===n}),key:n,ref:e=>w.push(e),onKeyDown:O,onFocus:E,onClick:E},t??n)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function d(e){const n=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},80944:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(79443);const i=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(9877),r=t(58215),i=t(67294);function l(e){let{children:n}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},n[0]),i.createElement(r.Z,{value:"js"},n[1]))}},25709:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>o,toc:()=>u,default:()=>d});var a=t(87462),r=(t(67294),t(3905)),i=t(70523);const l={title:"Values"},s=void 0,o={unversionedId:"api/Values",id:"version-5.0/api/Values",title:"Values",description:"Like Array, Values are unbounded in size. The definition here describes the types of values to expect,",source:"@site/versioned_docs/version-5.0/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/docs/5.0/api/Values",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Values.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Values"},sidebar:"version-5.0/docs",previous:{title:"Union",permalink:"/docs/5.0/api/Union"},next:{title:"Delete",permalink:"/docs/5.0/api/Delete"}},u=[{value:"Instance Methods",id:"instance-methods",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Output",id:"output",children:[],level:4},{value:"Dynamic entity types",id:"dynamic-entity-types",children:[{value:"string schemaAttribute",id:"string-schemaattribute",children:[],level:4},{value:"function schemaAttribute",id:"function-schemaattribute",children:[],level:4},{value:"Output",id:"output-1",children:[],level:4}],level:3}],level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,r.kt)("p",null,"Describes a map whose values follow the given schema."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() { return `${this.id}` };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  pk() { return this.id };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n"))),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Item: { '1': { id: 1 }, '2': { id: 2 } }\n  },\n  result: { firstThing: 1, secondThing: 2 }\n}\n")),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admin: Admin,\n    user: User\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input: any, parent: unknown, key: string) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  pk() { return this.id; }\n}\nclass Admin extends Entity {\n  pk() { return this.id; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input, parent, key) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n"))),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: {\n    '1': { id: 1, schema: 'Admin' },\n    '2': { id: 2, schema: 'User' }\n  }\n}\n")))}d.isMDXComponent=!0}}]);
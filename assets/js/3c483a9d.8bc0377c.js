"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||p;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"Keyboard.press"},i="Keyboard.press() method",l={unversionedId:"api/puppeteer.keyboard.press",id:"version-18.2.0/api/puppeteer.keyboard.press",title:"Keyboard.press() method",description:"Shortcut for Keyboard.down() and Keyboard.up().",source:"@site/versioned_docs/version-18.2.0/api/puppeteer.keyboard.press.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.press",permalink:"/api/puppeteer.keyboard.press",draft:!1,tags:[],version:"18.2.0",frontMatter:{sidebar_label:"Keyboard.press"},sidebar:"sidebar",previous:{title:"Keyboard.down",permalink:"/api/puppeteer.keyboard.down"},next:{title:"Keyboard.sendCharacter",permalink:"/api/puppeteer.keyboard.sendcharacter"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u};function c(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"keyboardpress-method"}),"Keyboard.press() method"),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.keyboard.down"}),"Keyboard.down()")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.keyboard.up"}),"Keyboard.up()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Keyboard {\n  press(\n    key: KeyInput,\n    options?: {\n      delay?: number;\n      text?: string;\n    }\n  ): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"key"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.keyinput"}),"KeyInput")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name of key to press, such as ",(0,n.kt)("code",null,"ArrowLeft"),". See ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.keyinput"}),"KeyInput")," for a list of all key names.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"{ delay?: number; text?: string; }"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)")," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts delay which, if specified, is the time to wait between ",(0,n.kt)("code",null,"keydown")," and ",(0,n.kt)("code",null,"keyup")," in milliseconds. Defaults to 0.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event will also generated. The ",(0,n.kt)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),(0,n.kt)("p",null,"Modifier keys DO effect ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.keyboard.press"}),"Keyboard.press()"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}c.isMDXComponent=!0}}]);
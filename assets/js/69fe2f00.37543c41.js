"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),k=n,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||o;return r?a.createElement(d,p(p({ref:t},s),{},{components:r})):a.createElement(d,p({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Page.setCookie"},p="Page.setCookie() method",i={unversionedId:"api/puppeteer.page.setcookie",id:"version-15.3.0/api/puppeteer.page.setcookie",title:"Page.setCookie() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.page.setcookie.md",sourceDirName:"api",slug:"/api/puppeteer.page.setcookie",permalink:"/15.3.0/api/puppeteer.page.setcookie",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Page.setCookie"},sidebar:"sidebar",previous:{title:"Page.setContent",permalink:"/15.3.0/api/puppeteer.page.setcontent"},next:{title:"Page.setDefaultNavigationTimeout",permalink:"/15.3.0/api/puppeteer.page.setdefaultnavigationtimeout"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagesetcookie-method"},"Page.setCookie() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  setCookie(...cookies: Protocol.Network.CookieParam[]): Promise<void>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cookies"),(0,n.kt)("td",{parentName:"tr",align:null},"Protocol.Network.CookieParam","[","]"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await page.setCookie(cookieObject1, cookieObject2);\n")))}u.isMDXComponent=!0}}]);
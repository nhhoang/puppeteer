"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53095],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=c(r),f=o,m=y["".concat(s,".").concat(f)]||y[f]||u[f]||p;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},16246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_label:"ScreenshotOptions.quality"},i="ScreenshotOptions.quality property",a={unversionedId:"api/puppeteer.screenshotoptions.quality",id:"version-15.3.1/api/puppeteer.screenshotoptions.quality",title:"ScreenshotOptions.quality property",description:"Quality of the image, between 0-100. Not applicable to png images.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.screenshotoptions.quality.md",sourceDirName:"api",slug:"/api/puppeteer.screenshotoptions.quality",permalink:"/api/puppeteer.screenshotoptions.quality",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"ScreenshotOptions.quality"},sidebar:"sidebar",previous:{title:"ScreenshotOptions.path",permalink:"/api/puppeteer.screenshotoptions.path"},next:{title:"ScreenshotOptions.type",permalink:"/api/puppeteer.screenshotoptions.type"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screenshotoptionsquality-property"},"ScreenshotOptions.quality property"),(0,o.kt)("p",null,"Quality of the image, between 0-100. Not applicable to ",(0,o.kt)("inlineCode",{parentName:"p"},"png")," images."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ScreenshotOptions {\n  quality?: number;\n}\n")))}u.isMDXComponent=!0}}]);
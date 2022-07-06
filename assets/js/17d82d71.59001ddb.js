"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"FrameWaitForFunctionOptions.polling"},a="FrameWaitForFunctionOptions.polling property",p={unversionedId:"api/puppeteer.framewaitforfunctionoptions.polling",id:"version-15.3.1/api/puppeteer.framewaitforfunctionoptions.polling",title:"FrameWaitForFunctionOptions.polling property",description:"An interval at which the pageFunction is executed, defaults to raf. If polling is a number, then it is treated as an interval in milliseconds at which the function would be executed. If polling is a string, then it can be one of the following values:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.framewaitforfunctionoptions.polling.md",sourceDirName:"api",slug:"/api/puppeteer.framewaitforfunctionoptions.polling",permalink:"/api/puppeteer.framewaitforfunctionoptions.polling",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"FrameWaitForFunctionOptions.polling"},sidebar:"sidebar",previous:{title:"FrameWaitForFunctionOptions",permalink:"/api/puppeteer.framewaitforfunctionoptions"},next:{title:"FrameWaitForFunctionOptions.timeout",permalink:"/api/puppeteer.framewaitforfunctionoptions.timeout"}},l={},c=[],u={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"framewaitforfunctionoptionspolling-property"},"FrameWaitForFunctionOptions.polling property"),(0,i.kt)("p",null,"An interval at which the ",(0,i.kt)("inlineCode",{parentName:"p"},"pageFunction")," is executed, defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"raf"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",(0,i.kt)("inlineCode",{parentName:"p"},"polling")," is a string, then it can be one of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"raf")," - to constantly execute ",(0,i.kt)("inlineCode",{parentName:"p"},"pageFunction")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mutation")," - to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"pageFunction")," on every DOM mutation."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FrameWaitForFunctionOptions {\n  polling?: string | number;\n}\n")))}s.isMDXComponent=!0}}]);
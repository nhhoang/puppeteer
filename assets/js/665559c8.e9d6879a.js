"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10455],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,k=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(k,p(p({ref:r},u),{},{components:t})):n.createElement(k,p({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11699:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_label:"Target.worker"},p="Target.worker() method",i={unversionedId:"api/puppeteer.target.worker",id:"version-15.3.0/api/puppeteer.target.worker",title:"Target.worker() method",description:'If the target is not of type "serviceworker" or "sharedworker", returns null.',source:"@site/versioned_docs/version-15.3.0/api/puppeteer.target.worker.md",sourceDirName:"api",slug:"/api/puppeteer.target.worker",permalink:"/15.3.0/api/puppeteer.target.worker",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"Target.worker"},sidebar:"sidebar",previous:{title:"Target.url",permalink:"/15.3.0/api/puppeteer.target.url"},next:{title:"TargetFilterCallback",permalink:"/15.3.0/api/puppeteer.targetfiltercallback"}},l={},c=[],u={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"targetworker-method"},"Target.worker() method"),(0,a.kt)("p",null,"If the target is not of type ",(0,a.kt)("inlineCode",{parentName:"p"},'"service_worker"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"shared_worker"'),", returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Target {\n  worker(): Promise<WebWorker | null>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.webworker"},"WebWorker")," ","|"," null",">"))}s.isMDXComponent=!0}}]);
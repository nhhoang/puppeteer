"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81725],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,v=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22091:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_label:"Viewport.deviceScaleFactor"},i="Viewport.deviceScaleFactor property",p={unversionedId:"api/puppeteer.viewport.devicescalefactor",id:"version-15.3.1/api/puppeteer.viewport.devicescalefactor",title:"Viewport.deviceScaleFactor property",description:"Specify device scale factor. See devicePixelRatio for more info.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.viewport.devicescalefactor.md",sourceDirName:"api",slug:"/api/puppeteer.viewport.devicescalefactor",permalink:"/api/puppeteer.viewport.devicescalefactor",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Viewport.deviceScaleFactor"},sidebar:"sidebar",previous:{title:"Viewport",permalink:"/api/puppeteer.viewport"},next:{title:"Viewport.hasTouch",permalink:"/api/puppeteer.viewport.hastouch"}},c={},l=[],s={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"viewportdevicescalefactor-property"},"Viewport.deviceScaleFactor property"),(0,o.kt)("p",null,"Specify device scale factor. See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio"},"devicePixelRatio")," for more info."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Viewport {\n  deviceScaleFactor?: number;\n}\n")))}u.isMDXComponent=!0}}]);
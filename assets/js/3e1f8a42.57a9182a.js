"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29070],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(y,p(p({ref:r},s),{},{components:t})):n.createElement(y,p({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84015:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_label:"ChromeReleaseChannel"},p="ChromeReleaseChannel type",c={unversionedId:"api/puppeteer.chromereleasechannel",id:"version-15.3.1/api/puppeteer.chromereleasechannel",title:"ChromeReleaseChannel type",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.chromereleasechannel.md",sourceDirName:"api",slug:"/api/puppeteer.chromereleasechannel",permalink:"/api/puppeteer.chromereleasechannel",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"ChromeReleaseChannel"},sidebar:"sidebar",previous:{title:"CSSCoverageOptions.resetOnNavigation",permalink:"/api/puppeteer.csscoverageoptions.resetonnavigation"},next:{title:"ClickOptions",permalink:"/api/puppeteer.clickoptions"}},i={},l=[],s={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chromereleasechannel-type"},"ChromeReleaseChannel type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ChromeReleaseChannel =\n  | 'chrome'\n  | 'chrome-beta'\n  | 'chrome-canary'\n  | 'chrome-dev';\n")))}u.isMDXComponent=!0}}]);
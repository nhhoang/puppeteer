"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"PDFOptions.headerTemplate"},o="PDFOptions.headerTemplate property",i={unversionedId:"api/puppeteer.pdfoptions.headertemplate",id:"version-15.3.1/api/puppeteer.pdfoptions.headertemplate",title:"PDFOptions.headerTemplate property",description:"HTML template for the print header. Should be valid HTML with the following classes used to inject values into them: - date formatted print date",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.pdfoptions.headertemplate.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions.headertemplate",permalink:"/api/puppeteer.pdfoptions.headertemplate",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"PDFOptions.headerTemplate"},sidebar:"sidebar",previous:{title:"PDFOptions.format",permalink:"/api/puppeteer.pdfoptions.format"},next:{title:"PDFOptions.height",permalink:"/api/puppeteer.pdfoptions.height"}},l={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pdfoptionsheadertemplate-property"},"PDFOptions.headerTemplate property"),(0,a.kt)("p",null,"HTML template for the print header. Should be valid HTML with the following classes used to inject values into them: - ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," formatted print date"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"title")," document title")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"url")," document location")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"pageNumber")," current page number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"totalPages")," total pages in the document"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PDFOptions {\n  headerTemplate?: string;\n}\n")))}c.isMDXComponent=!0}}]);
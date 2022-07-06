"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"WebWorker.evaluate"},l="WebWorker.evaluate() method",i={unversionedId:"api/puppeteer.webworker.evaluate",id:"version-15.3.1/api/puppeteer.webworker.evaluate",title:"WebWorker.evaluate() method",description:"If the function passed to the worker.evaluate returns a Promise, then worker.evaluate would wait for the promise to resolve and return its value. If the function passed to the worker.evaluate returns a non-serializable value, then worker.evaluate resolves to undefined. DevTools Protocol also supports transferring some additional values that are not serializable by JSON: -0, NaN, Infinity, -Infinity, and bigint literals. Shortcut for await worker.executionContext()).evaluate(pageFunction, ...args).",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.webworker.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.evaluate",permalink:"/api/puppeteer.webworker.evaluate",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"WebWorker.evaluate"},sidebar:"sidebar",previous:{title:"WebWorker",permalink:"/api/puppeteer.webworker"},next:{title:"WebWorker.evaluateHandle",permalink:"/api/puppeteer.webworker.evaluatehandle"}},p={},u=[{value:"Parameters",id:"parameters",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webworkerevaluate-method"},"WebWorker.evaluate() method"),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a Promise, then ",(0,a.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a non-serializable value, then ",(0,a.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals. Shortcut for ",(0,a.kt)("inlineCode",{parentName:"p"},"await worker.executionContext()).evaluate(pageFunction, ...args)"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class WebWorker {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,a.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in the worker context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"args"),(0,a.kt)("td",{parentName:"tr",align:null},"Params"),(0,a.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,a.kt)("code",null,"pageFunction"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,a.kt)("p",null,"Promise which resolves to the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."))}c.isMDXComponent=!0}}]);
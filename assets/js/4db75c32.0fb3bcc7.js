"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(o,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_label:"EventEmitter.emit"},p="EventEmitter.emit() method",o={unversionedId:"api/puppeteer.eventemitter.emit",id:"version-18.2.0/api/puppeteer.eventemitter.emit",title:"EventEmitter.emit() method",description:"Emit an event and call any associated listeners.",source:"@site/versioned_docs/version-18.2.0/api/puppeteer.eventemitter.emit.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.emit",permalink:"/api/puppeteer.eventemitter.emit",draft:!1,tags:[],version:"18.2.0",frontMatter:{sidebar_label:"EventEmitter.emit"},sidebar:"sidebar",previous:{title:"EventEmitter.addListener",permalink:"/api/puppeteer.eventemitter.addlistener"},next:{title:"EventEmitter.listenerCount",permalink:"/api/puppeteer.eventemitter.listenercount"}},u={},m=[{value:"Parameters",id:"parameters",level:2}],c={toc:m};function s(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"eventemitteremit-method"}),"EventEmitter.emit() method"),(0,r.kt)("p",null,"Emit an event and call any associated listeners."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class EventEmitter {\n  emit(event: EventType, eventData?: unknown): boolean;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"event"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.eventtype"}),"EventType")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"the event you'd like to emit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"eventData"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"unknown"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)")," any data you'd like to emit with the event")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"boolean"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if there are any listeners, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if there are not."))}s.isMDXComponent=!0}}]);
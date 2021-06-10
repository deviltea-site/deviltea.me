var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o;import{o as a,c as i,a as m,i as p,g as c,u,b as d,r as g,d as h,e as f,f as w,w as v,h as x,j as y,F as _,k as b,l as O,m as k,n as A,t as C,p as E,q as P,s as M,T,K as j,v as S,V as D}from"./vendor.eea8be67.js";const z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},L=m("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);var I={render:function(e,t){return a(),i("svg",z,[L])}};const U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},R=m("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),V=m("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),$=m("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),H=m("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),B=m("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),N=m("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),W=m("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),q=m("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),Y=m("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1);var F={render:function(e,t){return a(),i("svg",U,[R,V,$,H,B,N,W,q,Y])}};function K(){return{app:c().appContext.app,router:u(),isClient:d}}function G(e,t,l){return(...o)=>{let n;const{app:r,isClient:s}=K();return n=!s&&l?l:t(...o),r.provide(e,n),n}}function J(e,t,l){return(...o)=>{let n=p(e);if(n)return n;const{app:r,isClient:s}=K();return n=!s&&l?l:t(...o),r.provide(e,n),n}}const Q=Symbol("theme"),X={isDark:g(!1),colorSchema:g("auto"),toggleColorSchema:()=>{}},Z=()=>{const{isClient:e}=K(),t=h(),l=f("color-schema","auto"),o=w((()=>"auto"===l.value?t.value:"dark"===l.value));return e&&v(o,(e=>{document.documentElement.classList.toggle("dark",e),document.documentElement.classList.toggle("light",!e)}),{immediate:!0}),{colorSchema:l,isDark:o,toggleColorSchema:()=>{l.value=o.value?"light":"dark"}}},ee=G(Q,Z,X),te=J(Q,Z,X);var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",setup:ee,useTheme:te});const oe={"w:pos":"fixed top-0 left-0","w:z":"20","w:w":"screen","w:h":"16 xsOnly:12","w:flex":"~","w:align":"items-center","w:bg":"default-bg-light/95 dark:default-bg-dark/95","w:shadow":"~"};var ne=x({expose:[],setup(e){const{isDark:t,toggleColorSchema:l}=te();y();const o=[{text:"Home",to:{name:"Home"}},{text:"Posts",to:{name:"Posts"}}];return(e,n)=>{const r=k("router-link"),s=I,p=F;return a(),i("nav",oe,[(a(),i(_,null,b(o,(e=>m(r,{key:`nav-item-${e.text}`,custom:"",to:e.to},{default:A((({href:t,navigate:l,isActive:o})=>[m("a",{"w:flex":"~","w:align":"items-center","w:p":"x-3","w:font":"extralight","w:text":"3xl xsOnly:2xl","w:opacity":o?90:50,"w:hover:opacity":"100","w:transform":o?"~ scale-95":"~ scale-90","w:hover:transform":"scale-100","w:transition":"~",href:t,onClick:l},C(e.text),9,["w:opacity","w:transform","href","onClick"])])),_:2},1032,["to"]))),64)),m("button",{"w:m":"l-auto r-0","w:p":"2","w:flex":"~","w:align":"items-center","w:hover:bg":"","w:focus":"outline-none","w:text":"3xl xsOnly:2xl",onClick:n[1]||(n[1]=(...e)=>O(l)&&O(l)(...e))},[O(t)?(a(),i(s,{key:0})):(a(),i(p,{key:1}))])])}}});const re=Symbol("breakpoints"),se={breakpoint:g("xl"),xlOnly:g(!0),lgAndUp:g(!0),lgOnly:g(!1),lgAndDown:g(!1),mdAndUp:g(!0),mdOnly:g(!1),mdAndDown:g(!1),smAndUp:g(!0),smOnly:g(!1),smAndDown:g(!1),xsOnly:g(!1)},ae=()=>{const e=E({sm:600,md:960,lg:1264,xl:1904});return{breakpoint:w((()=>{var t;return(null==(t=[["xl",e.greater("xl").value],["lg",e.between("lg","xl").value],["md",e.between("md","lg").value],["sm",e.between("sm","md").value],["xs",e.smaller("sm").value]].find((e=>e[1])))?void 0:t[0])||"xl"})),xlOnly:e.greater("xl"),lgAndUp:e.greater("lg"),lgOnly:e.between("lg","xl"),lgAndDown:e.smaller("xl"),mdAndUp:e.greater("md"),mdOnly:e.between("md","lg"),mdAndDown:e.smaller("lg"),smAndUp:e.greater("sm"),smOnly:e.between("sm","lg"),smAndDown:e.smaller("md"),xsOnly:e.smaller("sm")}},ie=G(re,ae,se),me=J(re,ae,se);var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",setup:ie,useBreakpoints:me});const ce=Symbol("meta"),ue=()=>{P();const e={lang:"zh-TW",title:"DevilTea.me",description:"Write something to record my life",ogUrl:"https://deviltea.me",ogImage:"/assets/og.be90cc57.png",ogType:"website",ogSiteName:"Maple Pod"},a=g(e.title),i={lang:g("zh-TW"),title:w({get:()=>a.value,set(t){a.value=0===t.length||t===e.title?e.title:`${t} | ${e.title}`}}),description:g(e.description),ogUrl:g(e.ogUrl),ogImage:g(e.ogImage),ogType:g(e.ogType),ogSiteName:g(e.ogSiteName)},m=e=>{Object.entries(i).forEach((([t,l])=>{const o=e[t];o&&(l.value=o)}))},{lang:p,title:c,description:u,ogImage:d,ogSiteName:h,ogType:f,ogUrl:v}=i;return M({htmlAttrs:{lang:p},title:c,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:url",content:v},{property:"og:image",content:d},{property:"og:type",content:f},{property:"og:site_name",content:h}]}),x=((e,t)=>{for(var l in t||(t={}))n.call(t,l)&&s(e,l,t[l]);if(o)for(var l of o(t))r.call(t,l)&&s(e,l,t[l]);return e})({},i),t(x,l({setMetas:m,resetMetas:()=>{m(e)}}));var x},de=G(ce,ue),ge=J(ce,ue);var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",setup:de,useMetas:ge});function fe(e,t,...l){const o=Object.entries({"./breakpoints/index.ts":pe,"./metas/index.ts":he,"./theme/index.ts":le}).filter((([e,l])=>l[t])),n=o.length;o.map((([e,t])=>[e.slice(2,-9),t])).sort((([t],[l])=>(e.includes(t)?e.indexOf(t):n)-(e.includes(l)?e.indexOf(l):n))).forEach((([e,o])=>{o[t](...l)}))}var we=x({expose:[],setup:e=>(fe(["theme","breakpoints","metas"],"setup",K()),(e,t)=>{const l=k("router-view");return a(),i(_,null,[m(ne),m(l,null,{default:A((({Component:e,route:t})=>[m("main",{id:t.name},[m(T,{name:"fade",mode:"out-in"},{default:A((()=>[(a(),i(j,null,[(a(),i(S(e)))],1024))])),_:2},1024)],8,["id"])])),_:1})],64)})});let ve;const xe={},ye=function(e,t){if(!t)return e();if(void 0===ve){const e=document.createElement("link").relList;ve=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in xe)return;xe[e]=!0;const t=e.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":ve,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};D(we,{base:"",routes:[{name:"Home",path:"/",component:()=>ye((()=>import("./Home.893010ea.js")),["/assets/Home.893010ea.js","/assets/bx-anchor.518d7288.js","/assets/vendor.eea8be67.js"])},{name:"Posts",path:"/posts",component:()=>ye((()=>import("./PostList.fc8e6b22.js")),["/assets/PostList.fc8e6b22.js","/assets/vendor.eea8be67.js","/assets/tag.e73493a9.js","/assets/tag.7d29aa04.css"])},...Object.entries({"../../posts/git-basic-knowledge.md":()=>ye((()=>import("./git-basic-knowledge.f2ac9c54.js")),["/assets/git-basic-knowledge.f2ac9c54.js","/assets/bx-anchor.518d7288.js","/assets/vendor.eea8be67.js"]),"../../posts/markdown-syntax.md":()=>ye((()=>import("./markdown-syntax.f7f29d7a.js")),["/assets/markdown-syntax.f7f29d7a.js","/assets/bx-anchor.518d7288.js","/assets/vendor.eea8be67.js"]),"../../posts/type-challenges-2.md":()=>ye((()=>import("./type-challenges-2.b4345d88.js")),["/assets/type-challenges-2.b4345d88.js","/assets/bx-anchor.518d7288.js","/assets/vendor.eea8be67.js"]),"../../posts/type-challenges.md":()=>ye((()=>import("./type-challenges.a5e914bd.js")),["/assets/type-challenges.a5e914bd.js","/assets/bx-anchor.518d7288.js","/assets/vendor.eea8be67.js"])}).map((([e,t])=>[e.replace(/(\.\.\/\.\.\/posts\/)|(\.md)/g,""),t])).map((([e])=>({name:`Post:${e}`,path:`/posts/${e}`,component:()=>ye((()=>import("./Post.d568c707.js")),["/assets/Post.d568c707.js","/assets/tag.e73493a9.js","/assets/tag.7d29aa04.css","/assets/vendor.eea8be67.js"]),meta:{postId:e}})))],scrollBehavior(e,t,l){if(e.fullPath!==t.fullPath)return setTimeout((()=>{var t;const l=e.hash.slice(1),o=l&&null!=(t=document.querySelector(`#${l}`))?t:null;null!==o&&scrollTo({top:o.offsetTop,left:0,behavior:"smooth"})}),700),{top:0,left:0,behavior:"smooth"}}},(e=>{(e=>{fe([],"install",e)})(e)}));export{ye as _,ge as u};

import{u as t,_ as e}from"./app.a25b7f31.js";import{b as a,_ as s,a as n}from"./tag.ce5db040.js";import{h as l,f as r,r as i,w as o,A as u,c as w,n as m,T as c,q as d,m as p,o as v,a as y,t as _,l as g,F as f,k as x,x as h,v as b}from"./vendor.aed3ef79.js";const k={key:0,"w:p":"x-6 y-16 xsOnly:x-4","w:m":"x-auto y-4","w:w":"max-50rem","w:overflow":"hidden"},j={"w:transition":"~"},E={"w:font":"extralight leading-normal","w:text":"4xl"},D={"w:flex":"~ wrap","w:align":"items-end","w:opacity":"50 hover:100","w:transition":"~"},O={"w:m":"r-4","w:flex":"~","w:align":"items-center"},P={"w:p":"x-1 y-0.5","w:m":"1","w:border":"b-1 current","w:opacity":"70 hover:100","w:transition":"~"},A={"w:flex":"~ wrap","w:align":"items-center"},I=y("hr",{"w:m":"y-4","w:opacity":"80"},null,-1),T={class:"markdown"},V={key:1,"w:flex":"~","w:justify":"center","w:align":"items-center","w:h":"50vh"};var $=l({expose:[],setup(l){const{title:$,description:L}=t(),R=d(),q=r((()=>String(R.meta.postId))),F=i(null),S=i(!1);const C=r((()=>{var t,e;const a=null!=(e=null==(t=F.value)?void 0:t.attributes.publishedDate)?e:null;return null===a?"未發佈":function(t){const e=new Date(t);return`${e.getFullYear()} / ${e.getMonth()+1} / ${e.getDate()}`}(a)})),M=async()=>{var t,a;S.value=!0;const s=null!=(a=null==(t=Object.entries({"../../posts/git-basic-knowledge.md":()=>e((()=>import("./git-basic-knowledge.7002f13d.js")),["/assets/git-basic-knowledge.7002f13d.js","/assets/bx-anchor.d69a0b95.js","/assets/vendor.aed3ef79.js"]),"../../posts/markdown-syntax.md":()=>e((()=>import("./markdown-syntax.5af43968.js")),["/assets/markdown-syntax.5af43968.js","/assets/bx-anchor.d69a0b95.js","/assets/vendor.aed3ef79.js"]),"../../posts/type-challenges-2.md":()=>e((()=>import("./type-challenges-2.293a5387.js")),["/assets/type-challenges-2.293a5387.js","/assets/bx-anchor.d69a0b95.js","/assets/vendor.aed3ef79.js"]),"../../posts/type-challenges.md":()=>e((()=>import("./type-challenges.edf151a3.js")),["/assets/type-challenges.edf151a3.js","/assets/bx-anchor.d69a0b95.js","/assets/vendor.aed3ef79.js"])}).find((([t])=>t.replace("../../posts/","").replace(".md","")===q.value)))?void 0:t[1])?a:async()=>null;F.value=await s(),S.value=!1};return o(F,(()=>{null!==F.value&&($.value=F.value.attributes.title,L.value=F.value.attributes.description)})),o((()=>q.value),(async()=>{String(R.name).startsWith("Post:")&&await M()}),{immediate:!0}),u((async()=>{await M()})),(t,e)=>{const l=s,r=n,i=p("router-link");return v(),w(c,{name:"fade-vertical",mode:"out-in"},{default:m((()=>[!S.value&&F.value?(v(),w("article",k,[y("section",j,[y("h1",E,_(F.value.attributes.title),1),y("div",D,[y("div",O,[y(l,{"w:m":"2"}),y("span",P,_(g(C)),1)]),y("div",A,[y(r,{"w:m":"2"}),(v(!0),w(f,null,x(F.value.attributes.tags,(t=>(v(),w(i,{key:`${g(q)}-tag-${t}`,to:{name:"Posts",query:{tag:t}},"w:p":"x-1 y-0.5","w:m":"1","w:border":"b-1 current","w:opacity":"70 hover:100","w:transition":"~"},{default:m((()=>[h(_(t),1)])),_:2},1032,["to"])))),128))])])]),I,y("section",T,[(v(),w(b(F.value.VueComponent)))])])):(v(),w("div",V,[y(a)]))])),_:1})}}});export default $;

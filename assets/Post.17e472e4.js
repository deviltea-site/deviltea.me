import{u as a,_ as t}from"./app.ba926a13.js";import{_ as e,a as s}from"./tag.78163482.js";import{d as n,h as l,f as r,p as o,v as i,z as u,c as w,F as c,b as p,t as m,x as d,r as v,q as y,y as _,k as g,a as b,o as f,w as x,s as h}from"./vendor.6d59d952.js";const k={"w:p":"x-6 y-16","w:m":"x-auto y-4","w:w":"max-50rem","w:overflow":"hidden"},j={"w:font":"extralight leading-normal","w:text":"5xl"},E={"w:flex":"~ wrap","w:align":"items-end","w:opacity":"50 hover:100","w:transition":"~"},D={"w:m":"r-4","w:flex":"~","w:align":"items-center"},I={"w:p":"x-1 y-0.5","w:m":"1","w:border":"b-1 current","w:opacity":"70 hover:100","w:transition":"~"},O={"w:flex":"~ wrap","w:align":"items-center"},P=p("hr",{"w:m":"y-2","w:opacity":"80"},null,-1),V={class:"markdown"};var $=n({expose:[],setup(n){const{title:$,description:A}=a(),L=g(),R=l((()=>String(L.meta.postId))),T=r(null);const q=l((()=>{var a,t;const e=null!=(t=null==(a=T.value)?void 0:a.attributes.publishedDate)?t:null;return null===e?"未發佈":function(a){const t=new Date(a);return`${t.getFullYear()} / ${t.getMonth()+1} / ${t.getDate()}`}(e)})),F=async()=>{var a,e;const s=null!=(e=null==(a=Object.entries({"../../posts/git-basic-knowledge.md":()=>t((()=>import("./git-basic-knowledge.a12de22b.js")),["/assets/git-basic-knowledge.a12de22b.js","/assets/vendor.6d59d952.js"]),"../../posts/markdown-syntax.md":()=>t((()=>import("./markdown-syntax.39af8af8.js")),["/assets/markdown-syntax.39af8af8.js","/assets/vendor.6d59d952.js"]),"../../posts/type-challenges-2.md":()=>t((()=>import("./type-challenges-2.8c546a55.js")),["/assets/type-challenges-2.8c546a55.js","/assets/vendor.6d59d952.js"]),"../../posts/type-challenges.md":()=>t((()=>import("./type-challenges.904c6e8c.js")),["/assets/type-challenges.904c6e8c.js","/assets/vendor.6d59d952.js"])}).find((([a])=>a.replace("../../posts/","").replace(".md","")===R.value)))?void 0:a[1])?e:async()=>null;T.value=await s()};return o(T,(()=>{null!==T.value&&($.value=T.value.attributes.title,A.value=T.value.attributes.description)})),o((()=>R.value),(async()=>{await F()})),i((async()=>{await F()})),u((async()=>{await F()})),(a,t)=>{const n=e,l=s,r=b("router-link");return f(),w("article",k,[T.value?(f(),w(c,{key:0},[p("section",null,[p("h1",j,m(T.value.attributes.title),1),p("div",E,[p("div",D,[p(n,{"w:m":"2"}),p("span",I,m(d(q)),1)]),p("div",O,[p(l,{"w:m":"2"}),(f(!0),w(c,null,v(T.value.attributes.tags,(a=>(f(),w(r,{key:`${d(R)}-tag-${a}`,to:{name:"Posts",query:{tag:a}},"w:p":"x-1 y-0.5","w:m":"1","w:border":"b-1 current","w:opacity":"70 hover:100","w:transition":"~"},{default:x((()=>[h(m(a),1)])),_:2},1032,["to"])))),128))])])]),P,p("section",V,[(f(),w(y(T.value.VueComponent)))])],64)):_("v-if",!0)])}}});export default $;

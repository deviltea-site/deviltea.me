import{u as e,_ as t}from"./app.93edaba7.js";import{b as a,_ as s,a as n}from"./tag.5dea8a78.js";import{h as l,f as i,r,w as o,B as u,c as w,n as m,T as c,q as d,u as p,m as v,o as _,a as g,t as y,k as f,F as b,l as h,y as x,v as k}from"./vendor.cf293871.js";const j={key:0,"w:p":"6 xsOnly:x-4 y-16","w:m":"x-auto","w:w":"max-50rem","w:overflow":"hidden","w:bg":"white dark:nord0"},E={"w:transition":"~"},D={"w:font":"extralight leading-normal","w:text":"4xl"},O={"w:flex":"~ wrap","w:align":"items-end","w:opacity":"50 hover:100","w:transition":"~"},P={"w:m":"r-4","w:flex":"~","w:align":"items-center"},V={"w:p":"x-1 y-0.5","w:m":"1","w:border":"b-1 current","w:opacity":"70 hover:100","w:transition":"~"},I={"w:flex":"~ wrap","w:align":"items-center"},T=g("hr",{"w:m":"y-4","w:opacity":"80"},null,-1),A={class:"markdown"},L={key:1,"w:flex":"~","w:justify":"center","w:align":"items-center","w:h":"50vh"};var R=l({expose:[],setup(l){const{title:R,description:$}=e(),q=d(),C=p(),F=i((()=>String(q.meta.postId))),S=r(null),B=r(!1);const M=i((()=>{var e,t;const a=null!=(t=null==(e=S.value)?void 0:e.attributes.publishedDate)?t:null;return null===a?"未發佈":function(e){const t=new Date(e);return`${t.getFullYear()} / ${t.getMonth()+1} / ${t.getDate()}`}(a)})),W=async()=>{var e,a;B.value=!0;const s=null!=(a=null==(e=Object.entries({"../../posts/git-basic-knowledge.md":()=>t((()=>import("./git-basic-knowledge.87bfd4ab.js")),["/assets/git-basic-knowledge.87bfd4ab.js","/assets/bx-anchor.00bc73a3.js","/assets/vendor.cf293871.js"]),"../../posts/github-pages-cname-note.md":()=>t((()=>import("./github-pages-cname-note.2c0ffdeb.js")),["/assets/github-pages-cname-note.2c0ffdeb.js","/assets/bx-anchor.00bc73a3.js","/assets/vendor.cf293871.js"]),"../../posts/markdown-syntax.md":()=>t((()=>import("./markdown-syntax.962cdfbe.js")),["/assets/markdown-syntax.962cdfbe.js","/assets/bx-anchor.00bc73a3.js","/assets/vendor.cf293871.js"]),"../../posts/type-challenges-2.md":()=>t((()=>import("./type-challenges-2.3f760ddb.js")),["/assets/type-challenges-2.3f760ddb.js","/assets/bx-anchor.00bc73a3.js","/assets/vendor.cf293871.js"]),"../../posts/type-challenges.md":()=>t((()=>import("./type-challenges.d5179cf6.js")),["/assets/type-challenges.d5179cf6.js","/assets/bx-anchor.00bc73a3.js","/assets/vendor.cf293871.js"])}).find((([e])=>e.replace("../../posts/","").replace(".md","")===F.value)))?void 0:e[1])?a:async()=>null;S.value=await s(),B.value=!1};return o(S,(async()=>{null!==S.value&&(S.value.VueComponent.mounted=async()=>{await C.replace(q)},R.value=S.value.attributes.title,$.value=S.value.attributes.description)}),{immediate:!0}),o((()=>F.value),(async()=>{String(q.name).startsWith("Post:")&&await W()}),{immediate:!0}),u((async()=>{await W()})),(e,t)=>{const l=s,i=n,r=v("router-link");return _(),w(c,{name:"fade-vertical",mode:"out-in"},{default:m((()=>[!B.value&&S.value?(_(),w("article",j,[g("section",E,[g("h1",D,y(S.value.attributes.title),1),g("div",O,[g("div",P,[g(l,{"w:m":"2"}),g("span",V,y(f(M)),1)]),g("div",I,[g(i,{"w:m":"2"}),(_(!0),w(b,null,h(S.value.attributes.tags,(e=>(_(),w(r,{key:`${f(F)}-tag-${e}`,to:{name:"Posts",query:{tag:e}},"w:p":"x-1 y-0.5","w:m":"1","w:border":"b-1 current","w:opacity":"70 hover:100","w:transition":"~"},{default:m((()=>[x(y(e),1)])),_:2},1032,["to"])))),128))])])]),T,g("section",A,[(_(),w(k(S.value.VueComponent)))])])):(_(),w("div",L,[g(a)]))])),_:1})}}});export default R;
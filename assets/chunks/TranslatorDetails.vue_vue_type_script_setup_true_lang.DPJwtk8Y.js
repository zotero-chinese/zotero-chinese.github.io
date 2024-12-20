import{E as M,b as A,a as H,c as S,d as j,e as G}from"./theme.B7B2fq_j.js";/* empty css                             *//* empty css               */import{_ as J}from"./attachment-pdf.Po2993qH.js";import{a as O,_ as R}from"./attachment-snapshot.BTFN8BBg.js";import{t as U,B as $,aj as q,v as e,x as l,A as s,O as a,L as m,J as r,G as o,a8 as c,a2 as i,I as f,u as v,F as K}from"./framework.DNV5qdj1.js";import{u as P,a as Q,b as W,c as X}from"./localize.vYtg6Ra3.js";const Y={style:{"word-break":"break-all"}},Z={key:0},C={class:"language-plain vp-adaptive-theme"},ee=["href"],te={key:0},le={key:1,style:{"white-space":"pre-wrap","word-break":"break-all"}},ae={key:2,style:{"word-break":"break-all"}},re=["href"],se={key:3},oe={key:4},ne={key:5},ie={key:6},ue=["innerHTML"],_e={key:1},de={class:"no-list"},pe=["href"],Te=U({__name:"TranslatorDetails",setup(me){var T,E;const u=$((T=q().params.value)==null?void 0:T.translator),x=P(((E=u.value)==null?void 0:E.header.translatorType)??0);return(ye,n)=>{var I,L;const y=H,h=S,w=M,D=j,B=G,z=A;return e(),l(o,null,[s("h1",null,a((I=u.value)==null?void 0:I.zhLabel)+"的转换器",1),n[4]||(n[4]=s("h2",null,"元数据",-1)),m(w,{column:2,border:""},{default:r(()=>[m(y,{label:"ID",span:2},{default:r(()=>{var t;return[i(a((t=u.value)==null?void 0:t.header.translatorID),1)]}),_:1}),m(y,{label:"标题",span:2},{default:r(()=>{var t,_;return[i(a((t=u.value)==null?void 0:t.header.label)+"，"+a((_=u.value)==null?void 0:_.zhLabel),1)]}),_:1}),m(y,{label:"作者"},{default:r(()=>{var t;return[i(a((t=u.value)==null?void 0:t.header.creator),1)]}),_:1}),m(y,{label:"更新时间"},{default:r(()=>{var t;return[i(a((t=u.value)==null?void 0:t.header.lastUpdated),1)]}),_:1}),m(y,{label:"类型"},{default:r(()=>[(e(!0),l(o,null,c(v(x),(t,_)=>(e(),f(h,{key:_,type:"info",round:""},{default:r(()=>[i(a(t),1)]),_:2},1024))),128))]),_:1}),m(y,{label:"优先级"},{default:r(()=>{var t;return[i(a((t=u.value)==null?void 0:t.header.priority),1)]}),_:1}),m(y,{label:"目标网址"},{default:r(()=>{var t;return[i(a((t=u.value)==null?void 0:t.header.target),1)]}),_:1})]),_:1}),n[5]||(n[5]=s("h2",null,"示例",-1)),(e(!0),l(o,null,c((L=u.value)==null?void 0:L.testCases,(t,_)=>{var g;return e(),l("details",{key:_,class:"details custom-block"},[s("summary",Y,[t.type==="web"?(e(),l(o,{key:0},[i(a(t.url),1)],64)):(e(),l(o,{key:1},[i(a(t.type)+" -> "+a(t.items==="multiple"?"multiple":((g=t.items[0])==null?void 0:g.itemType)??"空"),1)],64))]),t.type==="import"?(e(),l("div",Z,[n[0]||(n[0]=s("strong",null,"输入：",-1)),s("div",C,[s("code",null,a(t.input),1)])])):K("",!0),t.items!=="multiple"?(e(!0),l(o,{key:1},c(t.items,(V,N)=>(e(),l(o,{key:N},[s("a",{href:t.url},[s("strong",null,"条目 "+a(N+1),1)],8,ee),m(w,{column:1,border:""},{default:r(()=>[(e(!0),l(o,null,c(V,(d,k,F)=>(e(),l(o,{key:F},[k==="creators"?(e(!0),l(o,{key:0},c(d,(p,b)=>(e(),f(y,{key:b,label:v(Q)(p.creatorType),"label-align":"right"},{default:r(()=>[s("div",null,a(p.lastName)+" "+a(p.fieldMode!==1?", ":"")+" "+a(p.firstName),1)]),_:2},1032,["label"]))),128)):(e(),f(y,{key:1,label:v(X)(String(k)),"label-align":"right"},{default:r(()=>[k==="itemType"?(e(),l("div",te,a(v(W)(d)),1)):k==="extra"?(e(),l("div",le,a(d),1)):k==="url"?(e(),l("div",ae,[s("a",{href:d},a(d),9,re)])):k==="attachments"?(e(),l("div",se,[(e(!0),l(o,null,c(d,(p,b)=>(e(),f(h,{key:b,type:"info",effect:"plain",size:"large"},{default:r(()=>[p.mimeType==="application/pdf"?(e(),f(D,{key:0},{default:r(()=>n[1]||(n[1]=[s("img",{src:J},null,-1)])),_:1})):(e(),f(D,{key:1},{default:r(()=>n[2]||(n[2]=[s("img",{src:O},null,-1)])),_:1})),i(" "+a(p.title),1)]),_:2},1024))),128))])):k==="tags"?(e(),l("div",oe,[(e(!0),l(o,null,c(d,(p,b)=>(e(),f(h,{key:b,type:"info",round:""},{default:r(()=>[i(a(p.tag),1)]),_:2},1024))),128))])):k==="notes"?(e(),l("div",ne,[(e(!0),l(o,null,c(d,(p,b)=>(e(),f(h,{key:b,type:"info",effect:"plain",size:"large"},{default:r(()=>[n[3]||(n[3]=s("img",{src:R},null,-1)),i(" "+a(p),1)]),_:2},1024))),128))])):(e(),l("div",ie,[typeof d=="string"?(e(),l("div",{key:0,innerHTML:d.replaceAll(`
`,"<br/ >")},null,8,ue)):(e(),l("div",_e,a(d),1))]))]),_:2},1032,["label"]))],64))),128))]),_:2},1024)],64))),128)):(e(),l(o,{key:2},[i(" 多个条目 ")],64))])}),128)),n[6]||(n[6]=s("h2",null,"变更历史",-1)),s("div",de,[m(z,null,{default:r(()=>{var t;return[(e(!0),l(o,null,c((t=u.value)==null?void 0:t.trends,(_,g)=>(e(),f(B,{key:g,timestamp:_.date},{default:r(()=>[i(a(_.message)+", by ",1),s("a",{href:`https://github.com/${_.author}`},a(_.author),9,pe)]),_:2},1032,["timestamp"]))),128))]}),_:1})])],64)}}});export{Te as _};

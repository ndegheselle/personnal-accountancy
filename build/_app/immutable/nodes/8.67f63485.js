import{S as $e,i as qe,s as Fe,k as a,a as D,q as w,l,m as r,h as s,c as S,r as N,n as t,U as Ke,I as Re,b as De,E as e,X as Te,V as ze,F as ve,u as Ee,Y as je,C as Be,G as Ge,W as Qe,w as We,Q as Xe,y as Ye,z as He,A as Je,R as Ze,g as xe,d as es,K as ss,B as ts,D as as}from"../chunks/index.14546b91.js";import{c as ls}from"../chunks/dialogs.1c3bad3e.js";import{d as rs}from"../chunks/index.9e8dd097.js";import{g as ns,s as Oe}from"../chunks/subscriptions.67db3f66.js";import{g as os,S as is}from"../chunks/helpers.de17de56.js";const cs=rs(os(()=>ns()),o=>o||[]);function ds(o){let i,c,p,f,u,h,_,A=o[0]?"Edit subscription":"Add subscription",K,Y,d,m,P,H,q,J,O,F,b,U,ae,j,Q,k,Z,oe,L,R,z,E,G,x,B,ee,T,re,se,ce,C,V,M,ne,W,X,le=o[0]?"Edit":"Add",te,g,fe;return{c(){i=a("div"),c=a("div"),p=D(),f=a("div"),u=a("div"),h=a("div"),_=a("span"),K=w(A),Y=D(),d=a("div"),m=a("div"),P=a("label"),H=w(`Name\r
                            `),q=a("input"),J=D(),O=a("div"),F=a("div"),b=a("div"),U=a("label"),ae=w(`Price\r
                                `),j=a("input"),Q=D(),k=a("div"),Z=a("label"),oe=w("Due every"),L=D(),R=a("div"),z=a("div"),E=a("select"),G=a("option"),x=w("Every month"),B=a("option"),ee=w("Every quarter"),T=a("option"),re=w("Every semester"),se=a("option"),ce=w("Every year"),C=D(),V=a("footer"),M=a("button"),ne=w("Cancel"),W=D(),X=a("button"),te=w(le),this.h()},l($){i=l($,"DIV",{class:!0});var n=r(i);c=l(n,"DIV",{class:!0}),r(c).forEach(s),p=S(n),f=l(n,"DIV",{class:!0});var y=r(f);u=l(y,"DIV",{class:!0});var I=r(u);h=l(I,"DIV",{class:!0});var v=r(h);_=l(v,"SPAN",{class:!0});var ie=r(_);K=N(ie,A),ie.forEach(s),Y=S(v),d=l(v,"DIV",{class:!0});var ue=r(d);m=l(ue,"DIV",{class:!0});var he=r(m);P=l(he,"LABEL",{class:!0});var be=r(P);H=N(be,`Name\r
                            `),q=l(be,"INPUT",{class:!0,type:!0}),be.forEach(s),he.forEach(s),ue.forEach(s),J=S(v),O=l(v,"DIV",{class:!0});var _e=r(O);F=l(_e,"DIV",{class:!0});var me=r(F);b=l(me,"DIV",{class:!0});var Se=r(b);U=l(Se,"LABEL",{class:!0});var ge=r(U);ae=N(ge,`Price\r
                                `),j=l(ge,"INPUT",{class:!0,type:!0}),ge.forEach(s),Se.forEach(s),me.forEach(s),Q=S(_e),k=l(_e,"DIV",{class:!0});var de=r(k);Z=l(de,"LABEL",{class:!0});var Ae=r(Z);oe=N(Ae,"Due every"),Ae.forEach(s),L=S(de),R=l(de,"DIV",{class:!0});var Ve=r(R);z=l(Ve,"DIV",{class:!0});var we=r(z);E=l(we,"SELECT",{class:!0});var pe=r(E);G=l(pe,"OPTION",{});var Ne=r(G);x=N(Ne,"Every month"),Ne.forEach(s),B=l(pe,"OPTION",{});var ye=r(B);ee=N(ye,"Every quarter"),ye.forEach(s),T=l(pe,"OPTION",{});var Pe=r(T);re=N(Pe,"Every semester"),Pe.forEach(s),se=l(pe,"OPTION",{});var Ie=r(se);ce=N(Ie,"Every year"),Ie.forEach(s),pe.forEach(s),we.forEach(s),Ve.forEach(s),de.forEach(s),_e.forEach(s),v.forEach(s),C=S(I),V=l(I,"FOOTER",{class:!0});var ke=r(V);M=l(ke,"BUTTON",{class:!0,"aria-label":!0});var Ue=r(M);ne=N(Ue,"Cancel"),Ue.forEach(s),W=S(ke),X=l(ke,"BUTTON",{class:!0});var Le=r(X);te=N(Le,le),Le.forEach(s),ke.forEach(s),I.forEach(s),y.forEach(s),n.forEach(s),this.h()},h(){t(c,"class","modal-background"),t(_,"class","has-text-grey-lighter"),t(q,"class","input"),t(q,"type","text"),t(P,"class","label"),t(m,"class","control"),t(d,"class","field"),t(j,"class","input"),t(j,"type","number"),t(U,"class","label"),t(b,"class","control"),t(F,"class","field column"),t(Z,"class","label mb-0"),G.__value=1,G.value=G.__value,B.__value=3,B.value=B.__value,T.__value=6,T.value=T.__value,se.__value=12,se.value=se.__value,t(E,"class","is-fullwidth"),o[2].dueEvery===void 0&&Ke(()=>o[8].call(E)),t(z,"class","select is-fullwidth"),t(R,"class","control"),t(k,"class","field column"),t(O,"class","columns"),t(h,"class","p-4"),t(M,"class","button"),t(M,"aria-label","close"),t(X,"class","ml-1 button is-success"),t(V,"class","is-flex is-justify-content-flex-end p-2"),t(u,"class","box p-0"),t(f,"class","modal-content"),t(i,"class","modal"),Re(i,"is-active",o[1])},m($,n){De($,i,n),e(i,c),e(i,p),e(i,f),e(f,u),e(u,h),e(h,_),e(_,K),e(h,Y),e(h,d),e(d,m),e(m,P),e(P,H),e(P,q),Te(q,o[2].name),e(h,J),e(h,O),e(O,F),e(F,b),e(b,U),e(U,ae),e(U,j),Te(j,o[2].price),e(O,Q),e(O,k),e(k,Z),e(Z,oe),e(k,L),e(k,R),e(R,z),e(z,E),e(E,G),e(G,x),e(E,B),e(B,ee),e(E,T),e(T,re),e(E,se),e(se,ce),ze(E,o[2].dueEvery,!0),e(u,C),e(u,V),e(V,M),e(M,ne),e(V,W),e(V,X),e(X,te),g||(fe=[ve(q,"input",o[6]),ve(j,"input",o[7]),ve(E,"change",o[8]),ve(X,"click",o[4]),ve(i,"closing",o[3])],g=!0)},p($,[n]){n&1&&A!==(A=$[0]?"Edit subscription":"Add subscription")&&Ee(K,A),n&4&&q.value!==$[2].name&&Te(q,$[2].name),n&4&&je(j.value)!==$[2].price&&Te(j,$[2].price),n&4&&ze(E,$[2].dueEvery),n&1&&le!==(le=$[0]?"Edit":"Add")&&Ee(te,le),n&2&&Re(i,"is-active",$[1])},i:Be,o:Be,d($){$&&s(i),g=!1,Ge(fe)}}}function us(o,i,c){function p(){c(1,h=!1)}function f(){_.id?Oe.update(_):Oe.create(_),p()}let u=!1,h=!1,_={};const A={show(m){c(0,u=!!m),c(2,_=m||new is),c(1,h=!0)}};function K(){_.name=this.value,c(2,_)}function Y(){_.price=je(this.value),c(2,_)}function d(){_.dueEvery=Qe(this),c(2,_)}return[u,h,_,p,f,A,K,Y,d]}class ps extends $e{constructor(i){super(),qe(this,i,us,ds,Fe,{modal:5})}get modal(){return this.$$.ctx[5]}}function Ce(o,i,c){const p=o.slice();return p[8]=i[c],p}function Me(o){let i,c,p,f,u,h,_,A=o[8].name+"",K,Y,d,m,P,H,q,J,O,F,b,U,ae,j,Q,k,Z,oe,L,R,z=(o[8].price/o[8].dueEvery).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",E,G,x,B,ee,T,re;function se(){return o[5](o[8])}function ce(){return o[6](o[8])}return{c(){i=a("div"),c=a("div"),p=a("div"),f=a("div"),u=a("span"),h=a("i"),_=D(),K=w(A),Y=D(),d=a("div"),m=a("div"),P=a("button"),H=a("span"),q=a("i"),J=D(),O=a("div"),F=a("div"),b=a("a"),U=a("i"),ae=w(" Edit subscription"),j=D(),Q=a("a"),k=a("i"),Z=w(` Delete\r
                                        subscription`),oe=D(),L=a("div"),R=a("span"),E=w(z),G=D(),x=a("span"),B=w("per month"),ee=D(),this.h()},l(C){i=l(C,"DIV",{class:!0});var V=r(i);c=l(V,"DIV",{class:!0});var M=r(c);p=l(M,"DIV",{class:!0});var ne=r(p);f=l(ne,"DIV",{class:!0});var W=r(f);u=l(W,"SPAN",{class:!0});var X=r(u);h=l(X,"I",{class:!0}),r(h).forEach(s),_=S(X),K=N(X,A),X.forEach(s),Y=S(W),d=l(W,"DIV",{class:!0});var le=r(d);m=l(le,"DIV",{class:!0});var te=r(m);P=l(te,"BUTTON",{class:!0,"aria-haspopup":!0});var g=r(P);H=l(g,"SPAN",{class:!0});var fe=r(H);q=l(fe,"I",{class:!0}),r(q).forEach(s),fe.forEach(s),g.forEach(s),te.forEach(s),J=S(le),O=l(le,"DIV",{class:!0,role:!0});var $=r(O);F=l($,"DIV",{class:!0});var n=r(F);b=l(n,"A",{class:!0});var y=r(b);U=l(y,"I",{class:!0}),r(U).forEach(s),ae=N(y," Edit subscription"),y.forEach(s),j=S(n),Q=l(n,"A",{class:!0});var I=r(Q);k=l(I,"I",{class:!0}),r(k).forEach(s),Z=N(I,` Delete\r
                                        subscription`),I.forEach(s),n.forEach(s),$.forEach(s),le.forEach(s),W.forEach(s),oe=S(ne),L=l(ne,"DIV",{});var v=r(L);R=l(v,"SPAN",{class:!0});var ie=r(R);E=N(ie,z),ie.forEach(s),G=S(v),x=l(v,"SPAN",{class:!0});var ue=r(x);B=N(ue,"per month"),ue.forEach(s),v.forEach(s),ne.forEach(s),M.forEach(s),ee=S(V),V.forEach(s),this.h()},h(){t(h,"class","fa-solid fa-dollar-sign has-text-grey-lighter"),t(u,"class","title is-size-4 subscription-title mb-0  svelte-1wsrubs"),t(q,"class","fa-solid fa-ellipsis-vertical"),t(H,"class","icon is-small"),t(P,"class","button is-small is-light"),t(P,"aria-haspopup","true"),t(m,"class","dropdown-trigger"),t(U,"class","fa-solid fa-file-pen mr-1"),t(b,"class","dropdown-item"),t(k,"class","fa-solid fa-trash mr-1"),t(Q,"class","dropdown-item has-text-danger"),t(F,"class","dropdown-content"),t(O,"class","dropdown-menu"),t(O,"role","menu"),t(d,"class","dropdown is-right"),t(f,"class","flex-container"),t(R,"class","is-size-4 title mb-0 has-text-danger"),t(x,"class","is-size-6 has-text-grey-lighter"),t(p,"class","is-fullwidth"),t(c,"class","box is-fullheight flex-container"),t(i,"class","column is-one-third")},m(C,V){De(C,i,V),e(i,c),e(c,p),e(p,f),e(f,u),e(u,h),e(u,_),e(u,K),e(f,Y),e(f,d),e(d,m),e(m,P),e(P,H),e(H,q),e(d,J),e(d,O),e(O,F),e(F,b),e(b,U),e(b,ae),e(F,j),e(F,Q),e(Q,k),e(Q,Z),e(p,oe),e(p,L),e(L,R),e(R,E),e(L,G),e(L,x),e(x,B),e(i,ee),T||(re=[ve(b,"click",se),ve(Q,"click",ce)],T=!0)},p(C,V){o=C,V&1&&A!==(A=o[8].name+"")&&Ee(K,A),V&1&&z!==(z=(o[8].price/o[8].dueEvery).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&Ee(E,z)},d(C){C&&s(i),T=!1,Ge(re)}}}function vs(o){let i,c,p,f,u=o[2].number+"",h,_,A,K,Y,d,m,P=o[2].perMonth.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",H,q,J,O,F,b,U,ae=(o[2].perMonth*12).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",j,Q,k,Z,oe,L,R,z,E,G,x,B,ee,T,re,se,ce,C,V,M,ne,W,X,le,te=o[0],g=[];for(let n=0;n<te.length;n+=1)g[n]=Me(Ce(o,te,n));function fe(n){o[7](n)}let $={};return o[1]!==void 0&&($.modal=o[1]),M=new ps({props:$}),We.push(()=>Xe(M,"modal",fe)),{c(){i=a("div"),c=a("div"),p=a("span"),f=a("span"),h=w(u),_=D(),A=a("span"),K=w("Subscriptions"),Y=D(),d=a("span"),m=a("span"),H=w(P),q=D(),J=a("span"),O=w("per month"),F=D(),b=a("span"),U=a("span"),j=w(ae),Q=D(),k=a("span"),Z=w("per year"),oe=D(),L=a("div"),R=a("div"),z=a("button"),E=a("span"),G=a("i"),x=D(),B=a("div"),ee=a("div"),T=a("a"),re=a("i"),se=w(" Add subscription"),ce=D(),C=a("div");for(let n=0;n<g.length;n+=1)g[n].c();V=D(),Ye(M.$$.fragment),this.h()},l(n){i=l(n,"DIV",{class:!0});var y=r(i);c=l(y,"DIV",{class:!0});var I=r(c);p=l(I,"SPAN",{class:!0});var v=r(p);f=l(v,"SPAN",{class:!0});var ie=r(f);h=N(ie,u),ie.forEach(s),_=S(v),A=l(v,"SPAN",{class:!0});var ue=r(A);K=N(ue,"Subscriptions"),ue.forEach(s),v.forEach(s),Y=S(I),d=l(I,"SPAN",{class:!0});var he=r(d);m=l(he,"SPAN",{class:!0});var be=r(m);H=N(be,P),be.forEach(s),q=S(he),J=l(he,"SPAN",{class:!0});var _e=r(J);O=N(_e,"per month"),_e.forEach(s),he.forEach(s),F=S(I),b=l(I,"SPAN",{class:!0});var me=r(b);U=l(me,"SPAN",{class:!0});var Se=r(U);j=N(Se,ae),Se.forEach(s),Q=S(me),k=l(me,"SPAN",{class:!0});var ge=r(k);Z=N(ge,"per year"),ge.forEach(s),me.forEach(s),I.forEach(s),oe=S(y),L=l(y,"DIV",{class:!0});var de=r(L);R=l(de,"DIV",{class:!0});var Ae=r(R);z=l(Ae,"BUTTON",{class:!0,"aria-haspopup":!0});var Ve=r(z);E=l(Ve,"SPAN",{class:!0});var we=r(E);G=l(we,"I",{class:!0}),r(G).forEach(s),we.forEach(s),Ve.forEach(s),Ae.forEach(s),x=S(de),B=l(de,"DIV",{class:!0,role:!0});var pe=r(B);ee=l(pe,"DIV",{class:!0});var Ne=r(ee);T=l(Ne,"A",{class:!0});var ye=r(T);re=l(ye,"I",{class:!0}),r(re).forEach(s),se=N(ye," Add subscription"),ye.forEach(s),Ne.forEach(s),pe.forEach(s),de.forEach(s),y.forEach(s),ce=S(n),C=l(n,"DIV",{class:!0});var Pe=r(C);for(let Ie=0;Ie<g.length;Ie+=1)g[Ie].l(Pe);Pe.forEach(s),V=S(n),He(M.$$.fragment,n),this.h()},h(){t(f,"class","is-size-1 title mb-0"),t(A,"class","is-size-6 has-text-grey-lighter ml-2"),t(p,"class","text-header svelte-1wsrubs"),t(m,"class","title mb-0 has-text-danger"),t(J,"class","is-size-6 has-text-grey-lighter ml-2"),t(d,"class","text-header svelte-1wsrubs"),t(U,"class","title mb-0 has-text-danger"),t(k,"class","is-size-6 has-text-grey-lighter ml-2"),t(b,"class","text-header svelte-1wsrubs"),t(c,"class","flex-container"),t(G,"class","fa-solid fa-ellipsis-vertical"),t(E,"class","icon is-small"),t(z,"class","button is-small is-light"),t(z,"aria-haspopup","true"),t(R,"class","dropdown-trigger"),t(re,"class","fa-solid fa-plus"),t(T,"class","dropdown-item"),t(ee,"class","dropdown-content"),t(B,"class","dropdown-menu"),t(B,"role","menu"),t(L,"class","dropdown is-right my-auto ml-4"),t(i,"class","box is-flex"),t(C,"class","columns")},m(n,y){De(n,i,y),e(i,c),e(c,p),e(p,f),e(f,h),e(p,_),e(p,A),e(A,K),e(c,Y),e(c,d),e(d,m),e(m,H),e(d,q),e(d,J),e(J,O),e(c,F),e(c,b),e(b,U),e(U,j),e(b,Q),e(b,k),e(k,Z),e(i,oe),e(i,L),e(L,R),e(R,z),e(z,E),e(E,G),e(L,x),e(L,B),e(B,ee),e(ee,T),e(T,re),e(T,se),De(n,ce,y),De(n,C,y);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(C,null);De(n,V,y),Je(M,n,y),W=!0,X||(le=ve(T,"click",o[4]),X=!0)},p(n,[y]){if((!W||y&4)&&u!==(u=n[2].number+"")&&Ee(h,u),(!W||y&4)&&P!==(P=n[2].perMonth.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&Ee(H,P),(!W||y&4)&&ae!==(ae=(n[2].perMonth*12).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&Ee(j,ae),y&11){te=n[0];let v;for(v=0;v<te.length;v+=1){const ie=Ce(n,te,v);g[v]?g[v].p(ie,y):(g[v]=Me(ie),g[v].c(),g[v].m(C,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=te.length}const I={};!ne&&y&2&&(ne=!0,I.modal=n[1],Ze(()=>ne=!1)),M.$set(I)},i(n){W||(xe(M.$$.fragment,n),W=!0)},o(n){es(M.$$.fragment,n),W=!1},d(n){n&&s(i),n&&s(ce),n&&s(C),ss(g,n),n&&s(V),ts(M,n),X=!1,le()}}}function fs(o,i,c){let p,f;as(o,cs,d=>c(0,f=d));let u=null;function h(d){ls.show(`Are you sure you want to delete the subscription '${d.name}' ?`,"Delete subscription","is-danger").then(m=>{m&&Oe.remove(d.id)})}const _=()=>u.show(),A=d=>u.show(d),K=d=>h(d);function Y(d){u=d,c(1,u)}return o.$$.update=()=>{o.$$.dirty&1&&c(2,p=Oe.getSubscriptionsRecap(f))},[f,u,p,h,_,A,K,Y]}class gs extends $e{constructor(i){super(),qe(this,i,fs,vs,Fe,{})}}export{gs as component};

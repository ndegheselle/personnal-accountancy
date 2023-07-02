import{S as te,i as se,s as ae,k as p,q as L,a as T,l as h,m as _,r as M,h as o,c as U,n as f,b as B,E as l,u as J,C as Q,K as ve,D as Z,p as W,w as ye,Q as Ae,y as X,z as Y,A as x,F as _e,g as q,v as me,f as ge,R as Ie,d as O,B as G,T as Se,H as ke}from"../chunks/index.14546b91.js";import{g as we,t as De,a as Ve,A as Ne,M as Pe,c as Re,C as Te,b as Ue}from"../chunks/contextMenu.48a8a67d.js";import{d as be,w as $e}from"../chunks/index.9e8dd097.js";import{g as ze,f as Ce}from"../chunks/helpers.de17de56.js";import{p as ce}from"../chunks/store.eb676330.js";import{i as Le}from"../chunks/investments.cc9c4ab9.js";import{s as Me}from"../chunks/subscriptions.67db3f66.js";const Ee=be(ze(Ve),a=>a||[]),Be=be(ce,(a,e)=>{if(!(a!=null&&a.favoriteAccountId))return null;(async()=>{let t=await we(a.favoriteAccountId,Ce()),s=De.getTransactionsRecap(t);e(s)})()}),je=$e([]),He=$e([]);function fe(a,e,t){const s=a.slice();return s[2]=e[t],s}function de(a){let e;return{c(){e=p("div"),this.h()},l(t){e=h(t,"DIV",{class:!0,style:!0}),_(e).forEach(o),this.h()},h(){f(e,"class","progress-bar svelte-194ehsc"),W(e,"background-color",a[2].color),W(e,"width",a[2].balance*100/a[1]+"%")},m(t,s){B(t,e,s)},p(t,s){s&1&&W(e,"background-color",t[2].color),s&3&&W(e,"width",t[2].balance*100/t[1]+"%")},d(t){t&&o(e)}}}function qe(a){let e,t,s,n,r,v=a[1].toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",V,m,w,y=a[0],c=[];for(let d=0;d<y.length;d+=1)c[d]=de(fe(a,y,d));return{c(){e=p("div"),t=p("span"),s=L("Total"),n=T(),r=p("h1"),V=L(v),m=T(),w=p("div");for(let d=0;d<c.length;d+=1)c[d].c();this.h()},l(d){e=h(d,"DIV",{class:!0});var A=_(e);t=h(A,"SPAN",{class:!0});var g=_(t);s=M(g,"Total"),g.forEach(o),n=U(A),r=h(A,"H1",{class:!0});var S=_(r);V=M(S,v),S.forEach(o),m=U(A),w=h(A,"DIV",{class:!0});var b=_(w);for(let u=0;u<c.length;u+=1)c[u].l(b);b.forEach(o),A.forEach(o),this.h()},h(){f(t,"class","has-text-grey-lighter box-title"),f(r,"class","title"),f(w,"class","progress"),f(e,"class","box mb-2")},m(d,A){B(d,e,A),l(e,t),l(t,s),l(e,n),l(e,r),l(r,V),l(e,m),l(e,w);for(let g=0;g<c.length;g+=1)c[g]&&c[g].m(w,null)},p(d,[A]){if(A&2&&v!==(v=d[1].toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&J(V,v),A&3){y=d[0];let g;for(g=0;g<y.length;g+=1){const S=fe(d,y,g);c[g]?c[g].p(S,A):(c[g]=de(S),c[g].c(),c[g].m(w,null))}for(;g<c.length;g+=1)c[g].d(1);c.length=y.length}},i:Q,o:Q,d(d){d&&o(e),ve(c,d)}}}function Oe(a,e,t){let s,n;return Z(a,Ee,r=>t(0,n=r)),a.$$.update=()=>{a.$$.dirty&1&&t(1,s=n.reduce((r,v)=>r+v.balance,0))},[n,s]}class Fe extends te{constructor(e){super(),se(this,e,Oe,qe,ae,{})}}function pe(a,e,t){const s=a.slice();return s[7]=e[t],s}function Ke(a){let e,t=a[7].name+"",s;return{c(){e=p("span"),s=L(t)},l(n){e=h(n,"SPAN",{});var r=_(e);s=M(r,t),r.forEach(o)},m(n,r){B(n,e,r),l(e,s)},p(n,r){r&4&&t!==(t=n[7].name+"")&&J(s,t)},d(n){n&&o(e)}}}function Qe(a){let e,t=a[7].name+"",s;return{c(){e=p("b"),s=L(t)},l(n){e=h(n,"B",{});var r=_(e);s=M(r,t),r.forEach(o)},m(n,r){B(n,e,r),l(e,s)},p(n,r){r&4&&t!==(t=n[7].name+"")&&J(s,t)},d(n){n&&o(e)}}}function he(a){let e,t,s,n,r,v,V,m,w,y,c,d,A;function g(D,k){return D[1].favoriteAccountId==D[7].id?Qe:Ke}let S=g(a),b=S(a);m=new Pe({props:{value:a[7].balance}});function u(...D){return a[5](a[7],...D)}return{c(){e=p("a"),t=p("span"),s=p("i"),r=T(),v=p("div"),b.c(),V=T(),X(m.$$.fragment),w=T(),this.h()},l(D){e=h(D,"A",{class:!0,href:!0});var k=_(e);t=h(k,"SPAN",{class:!0});var N=_(t);s=h(N,"I",{class:!0,style:!0}),_(s).forEach(o),N.forEach(o),r=U(k),v=h(k,"DIV",{class:!0});var i=_(v);b.l(i),V=U(i),Y(m.$$.fragment,i),i.forEach(o),w=U(k),k.forEach(o),this.h()},h(){f(s,"class",n="fa-"+(a[1].favoriteAccountId==a[7].id?"solid":"regular")+" fa-folder"),W(s,"color",a[7].color),f(t,"class","panel-icon"),f(v,"class","flex-container"),f(e,"class","panel-block"),f(e,"href",y="/accounts/"+a[7].id)},m(D,k){B(D,e,k),l(e,t),l(t,s),l(e,r),l(e,v),b.m(v,null),l(v,V),x(m,v,null),l(e,w),c=!0,d||(A=_e(e,"contextmenu",Se(u)),d=!0)},p(D,k){a=D,(!c||k&6&&n!==(n="fa-"+(a[1].favoriteAccountId==a[7].id?"solid":"regular")+" fa-folder"))&&f(s,"class",n),(!c||k&4)&&W(s,"color",a[7].color),S===(S=g(a))&&b?b.p(a,k):(b.d(1),b=S(a),b&&(b.c(),b.m(v,V)));const N={};k&4&&(N.value=a[7].balance),m.$set(N),(!c||k&4&&y!==(y="/accounts/"+a[7].id))&&f(e,"href",y)},i(D){c||(q(m.$$.fragment,D),c=!0)},o(D){O(m.$$.fragment,D),c=!1},d(D){D&&o(e),b.d(),G(m),d=!1,A()}}}function Xe(a){let e,t,s,n,r,v,V,m,w,y,c,d,A,g,S,b=a[2],u=[];for(let i=0;i<b.length;i+=1)u[i]=he(pe(a,b,i));const D=i=>O(u[i],1,1,()=>{u[i]=null});function k(i){a[6](i)}let N={};return a[0]!==void 0&&(N.modal=a[0]),c=new Ne({props:N}),ye.push(()=>Ae(c,"modal",k)),{c(){e=p("div"),t=p("div"),s=p("span"),n=L("Accounts"),r=T(),v=p("button"),V=p("span"),m=p("i"),w=T();for(let i=0;i<u.length;i+=1)u[i].c();y=T(),X(c.$$.fragment),this.h()},l(i){e=h(i,"DIV",{class:!0});var I=_(e);t=h(I,"DIV",{class:!0});var R=_(t);s=h(R,"SPAN",{class:!0});var $=_(s);n=M($,"Accounts"),$.forEach(o),r=U(R),v=h(R,"BUTTON",{class:!0});var P=_(v);V=h(P,"SPAN",{class:!0});var C=_(V);m=h(C,"I",{class:!0}),_(m).forEach(o),C.forEach(o),P.forEach(o),R.forEach(o),w=U(I);for(let j=0;j<u.length;j+=1)u[j].l(I);I.forEach(o),y=U(i),Y(c.$$.fragment,i),this.h()},h(){f(s,"class","has-text-grey-lighter"),f(m,"class","fa-solid fa-plus"),f(V,"class","icon is-small"),f(v,"class","button is-small is-light"),f(t,"class","panel-block flex-container p-0"),f(e,"class","panel p-4 mb-0 accounts-container svelte-ija8ie")},m(i,I){B(i,e,I),l(e,t),l(t,s),l(s,n),l(t,r),l(t,v),l(v,V),l(V,m),l(e,w);for(let R=0;R<u.length;R+=1)u[R]&&u[R].m(e,null);B(i,y,I),x(c,i,I),A=!0,g||(S=_e(v,"click",a[4]),g=!0)},p(i,[I]){if(I&14){b=i[2];let $;for($=0;$<b.length;$+=1){const P=pe(i,b,$);u[$]?(u[$].p(P,I),q(u[$],1)):(u[$]=he(P),u[$].c(),q(u[$],1),u[$].m(e,null))}for(me(),$=b.length;$<u.length;$+=1)D($);ge()}const R={};!d&&I&1&&(d=!0,R.modal=i[0],Ie(()=>d=!1)),c.$set(R)},i(i){if(!A){for(let I=0;I<b.length;I+=1)q(u[I]);q(c.$$.fragment,i),A=!0}},o(i){u=u.filter(Boolean);for(let I=0;I<u.length;I+=1)O(u[I]);O(c.$$.fragment,i),A=!1},d(i){i&&o(e),ve(u,i),i&&o(y),G(c,i),g=!1,S()}}}function Ye(a,e,t){let s,n;Z(a,ce,y=>t(1,s=y)),Z(a,Ee,y=>t(2,n=y));function r(y,c){Re.show({x:y.pageX,y:y.pageY},[{title:"Set as favorite",icon:"fa-regular fa-star",action:()=>{ke(ce,s.favoriteAccountId=c.id,s)}}])}let v=null;const V=()=>v.show(),m=(y,c)=>{r(c,y)};function w(y){v=y,t(0,v)}return[v,s,n,r,V,m,w]}class xe extends te{constructor(e){super(),se(this,e,Ye,Xe,ae,{})}}function Ge(a){let e,t,s,n,r=a[0].number+"",v,V,m,w,y,c,d,A,g=a[0].total.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",S,b,u,D=a[0].percentage+"",k,N,i,I,R;return{c(){e=p("a"),t=p("div"),s=p("div"),n=p("span"),v=L(r),V=T(),m=p("span"),w=L("Investments"),y=T(),c=p("div"),d=p("span"),A=p("span"),S=L(g),b=T(),u=p("span"),k=L(D),N=L(" %"),i=p("i"),this.h()},l($){e=h($,"A",{class:!0,href:!0});var P=_(e);t=h(P,"DIV",{class:!0});var C=_(t);s=h(C,"DIV",{class:!0});var j=_(s);n=h(j,"SPAN",{class:!0});var H=_(n);v=M(H,r),H.forEach(o),V=U(j),m=h(j,"SPAN",{class:!0});var ee=_(m);w=M(ee,"Investments"),ee.forEach(o),j.forEach(o),y=U(C),c=h(C,"DIV",{class:!0});var E=_(c);d=h(E,"SPAN",{});var z=_(d);A=h(z,"SPAN",{class:!0});var K=_(A);S=M(K,g),K.forEach(o),b=U(z),u=h(z,"SPAN",{class:!0});var F=_(u);k=M(F,D),N=M(F," %"),i=h(F,"I",{class:!0}),_(i).forEach(o),F.forEach(o),z.forEach(o),E.forEach(o),C.forEach(o),P.forEach(o),this.h()},h(){f(n,"class","is-size-1 number-of-investments title mb-0 svelte-14en6wt"),f(m,"class","is-size-6 has-text-grey-lighter number-of-investments svelte-14en6wt"),f(s,"class","column"),f(A,"class","title is-spaced"),f(i,"class",I="fa-solid fa-arrow-trend-"+(a[0].percentage<0?"down":"up")),f(u,"class",R="percent subtitle is-4 "+(a[0].percentage<0?"has-text-danger":"has-text-success")+" svelte-14en6wt"),f(c,"class","column flex-container"),f(t,"class","columns is-mobile"),f(e,"class","box"),f(e,"href","/investments")},m($,P){B($,e,P),l(e,t),l(t,s),l(s,n),l(n,v),l(s,V),l(s,m),l(m,w),l(t,y),l(t,c),l(c,d),l(d,A),l(A,S),l(d,b),l(d,u),l(u,k),l(u,N),l(u,i)},p($,[P]){P&1&&r!==(r=$[0].number+"")&&J(v,r),P&1&&g!==(g=$[0].total.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&J(S,g),P&1&&D!==(D=$[0].percentage+"")&&J(k,D),P&1&&I!==(I="fa-solid fa-arrow-trend-"+($[0].percentage<0?"down":"up"))&&f(i,"class",I),P&1&&R!==(R="percent subtitle is-4 "+($[0].percentage<0?"has-text-danger":"has-text-success")+" svelte-14en6wt")&&f(u,"class",R)},i:Q,o:Q,d($){$&&o(e)}}}function Je(a,e,t){let s,n;return Z(a,je,r=>t(1,n=r)),a.$$.update=()=>{a.$$.dirty&2&&t(0,s=Le.getInvestmentsRecap(n))},[s,n]}class We extends te{constructor(e){super(),se(this,e,Je,Ge,ae,{})}}function Ze(a){let e,t,s,n,r=a[0].number+"",v,V,m,w,y,c,d,A,g=a[0].perMonth.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",S,b,u,D;return{c(){e=p("a"),t=p("div"),s=p("div"),n=p("span"),v=L(r),V=T(),m=p("span"),w=L("Subscriptions"),y=T(),c=p("div"),d=p("span"),A=p("span"),S=L(g),b=T(),u=p("span"),D=L("per month"),this.h()},l(k){e=h(k,"A",{class:!0,href:!0});var N=_(e);t=h(N,"DIV",{class:!0});var i=_(t);s=h(i,"DIV",{class:!0});var I=_(s);n=h(I,"SPAN",{class:!0});var R=_(n);v=M(R,r),R.forEach(o),V=U(I),m=h(I,"SPAN",{class:!0});var $=_(m);w=M($,"Subscriptions"),$.forEach(o),I.forEach(o),y=U(i),c=h(i,"DIV",{class:!0});var P=_(c);d=h(P,"SPAN",{});var C=_(d);A=h(C,"SPAN",{class:!0});var j=_(A);S=M(j,g),j.forEach(o),b=U(C),u=h(C,"SPAN",{class:!0});var H=_(u);D=M(H,"per month"),H.forEach(o),C.forEach(o),P.forEach(o),i.forEach(o),N.forEach(o),this.h()},h(){f(n,"class","is-size-1 title-placement title mb-0 svelte-klj0o"),f(m,"class","is-size-6 has-text-grey-lighter title-placement svelte-klj0o"),f(s,"class","column has-text-right"),f(A,"class","title mb-0 has-text-danger"),f(u,"class","title-placement is-size-6 has-text-grey-lighter svelte-klj0o"),f(c,"class","column flex-container"),f(t,"class","columns is-mobile"),f(e,"class","box"),f(e,"href","/subscriptions")},m(k,N){B(k,e,N),l(e,t),l(t,s),l(s,n),l(n,v),l(s,V),l(s,m),l(m,w),l(t,y),l(t,c),l(c,d),l(d,A),l(A,S),l(d,b),l(d,u),l(u,D)},p(k,[N]){N&1&&r!==(r=k[0].number+"")&&J(v,r),N&1&&g!==(g=k[0].perMonth.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&J(S,g)},i:Q,o:Q,d(k){k&&o(e)}}}function et(a,e,t){let s,n;return Z(a,He,r=>t(1,n=r)),a.$$.update=()=>{a.$$.dirty&2&&t(0,s=Me.getSubscriptionsRecap(n))},[s,n]}class tt extends te{constructor(e){super(),se(this,e,et,Ze,ae,{})}}function st(a){let e,t,s;return{c(){e=p("div"),t=p("span"),s=L("No favorite account"),this.h()},l(n){e=h(n,"DIV",{class:!0});var r=_(e);t=h(r,"SPAN",{class:!0});var v=_(t);s=M(v,"No favorite account"),v.forEach(o),r.forEach(o),this.h()},h(){f(t,"class","has-text-grey"),f(e,"class","flex-centered p-5")},m(n,r){B(n,e,r),l(e,t),l(t,s)},p:Q,i:Q,o:Q,d(n){n&&o(e)}}}function at(a){let e,t;return e=new Ue({props:{transactionsTotals:a[0].totals}}),{c(){X(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,n){x(e,s,n),t=!0},p(s,n){const r={};n&1&&(r.transactionsTotals=s[0].totals),e.$set(r)},i(s){t||(q(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){G(e,s)}}}function nt(a){let e,t,s,n,r,v,V,m,w,y,c,d,A,g,S,b,u,D,k,N,i,I,R,$,P,C;s=new Fe({}),r=new xe({}),w=new Te({props:{transactionsRecap:a[0],class:"mb-2"}});const j=[at,st],H=[];function ee(E,z){return E[0]?0:1}return S=ee(a),b=H[S]=j[S](a),I=new We({}),P=new tt({}),{c(){e=p("div"),t=p("div"),X(s.$$.fragment),n=T(),X(r.$$.fragment),v=T(),V=p("div"),m=p("div"),X(w.$$.fragment),y=T(),c=p("div"),d=p("span"),A=L("Account recap"),g=T(),b.c(),u=T(),D=p("hr"),k=T(),N=p("div"),i=p("div"),X(I.$$.fragment),R=T(),$=p("div"),X(P.$$.fragment),this.h()},l(E){e=h(E,"DIV",{class:!0});var z=_(e);t=h(z,"DIV",{class:!0});var K=_(t);Y(s.$$.fragment,K),n=U(K),Y(r.$$.fragment,K),K.forEach(o),v=U(z),V=h(z,"DIV",{class:!0});var F=_(V);m=h(F,"DIV",{class:!0});var ne=_(m);Y(w.$$.fragment,ne),y=U(ne),c=h(ne,"DIV",{class:!0});var le=_(c);d=h(le,"SPAN",{class:!0});var oe=_(d);A=M(oe,"Account recap"),oe.forEach(o),g=U(le),b.l(le),le.forEach(o),ne.forEach(o),F.forEach(o),z.forEach(o),u=U(E),D=h(E,"HR",{class:!0}),k=U(E),N=h(E,"DIV",{class:!0});var re=_(N);i=h(re,"DIV",{class:!0});var ie=_(i);Y(I.$$.fragment,ie),ie.forEach(o),R=U(re),$=h(re,"DIV",{class:!0});var ue=_($);Y(P.$$.fragment,ue),ue.forEach(o),re.forEach(o),this.h()},h(){f(t,"class","column pb-0"),f(d,"class","has-text-grey-lighter box-title"),f(c,"class","box"),f(m,"class","flex-list"),f(V,"class","column pb-0"),f(e,"class","columns is-variable is-1"),f(D,"class","mx-5 my-4"),f(i,"class","column pb-0"),f($,"class","column"),f(N,"class","columns is-variable is-1")},m(E,z){B(E,e,z),l(e,t),x(s,t,null),l(t,n),x(r,t,null),l(e,v),l(e,V),l(V,m),x(w,m,null),l(m,y),l(m,c),l(c,d),l(d,A),l(c,g),H[S].m(c,null),B(E,u,z),B(E,D,z),B(E,k,z),B(E,N,z),l(N,i),x(I,i,null),l(N,R),l(N,$),x(P,$,null),C=!0},p(E,[z]){const K={};z&1&&(K.transactionsRecap=E[0]),w.$set(K);let F=S;S=ee(E),S===F?H[S].p(E,z):(me(),O(H[F],1,1,()=>{H[F]=null}),ge(),b=H[S],b?b.p(E,z):(b=H[S]=j[S](E),b.c()),q(b,1),b.m(c,null))},i(E){C||(q(s.$$.fragment,E),q(r.$$.fragment,E),q(w.$$.fragment,E),q(b),q(I.$$.fragment,E),q(P.$$.fragment,E),C=!0)},o(E){O(s.$$.fragment,E),O(r.$$.fragment,E),O(w.$$.fragment,E),O(b),O(I.$$.fragment,E),O(P.$$.fragment,E),C=!1},d(E){E&&o(e),G(s),G(r),G(w),H[S].d(),E&&o(u),E&&o(D),E&&o(k),E&&o(N),G(I),G(P)}}}function lt(a,e,t){let s;return Z(a,Be,n=>t(0,s=n)),[s]}class pt extends te{constructor(e){super(),se(this,e,lt,nt,ae,{})}}export{pt as component};

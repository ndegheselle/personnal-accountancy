import{S as Re,i as Ce,s as Ue,w as qe,R as Ge,a as I,k as n,q as Y,y as be,N as Oe,h as a,c as w,l as r,m as o,r as Z,z as $e,n as t,b as _e,E as e,A as Ie,F as Se,u as we,g as pe,f as je,T as Fe,d as ge,B as Ve,K as Ke,D as He,G as Je,v as Le}from"../chunks/index.ecd3f872.js";import{a as Qe}from"../chunks/Confirm.eda23a4f.js";import{d as We}from"../chunks/index.b5ec8d3d.js";import{I as Me,a as Xe}from"../chunks/investments.1f416521.js";import{g as Ye}from"../chunks/BaseRepo.b0f9c191.js";import{i as ze}from"../chunks/investments.7e17c491.js";import{M as Ne}from"../chunks/Money.8cb7f686.js";import{C as Ze}from"../chunks/CreateUpdateModal.431ead9f.js";const xe=We(Ye(()=>Me.getAll()),l=>l||[]);function Te(l,_,p){const f=l.slice();return f[9]=_[p],f}function Be(l){let _,p,f,v,m,k,H,j=l[9].name+"",y,x,S,d,h,R,J,oe,N,z,T,ee,C,ie,b,U,F,L,P,q,K,g,V,Q,ce,W=re(l[9])*100/l[9].investedValue+"",B,te,E,le,G,O,me,X;function c(){return l[5](l[9])}function De(){return l[6](l[9])}return q=new Ne({props:{class:"is-size-4 title mb-0",value:l[9].actualValue}}),E=new Ne({props:{value:re(l[9])}}),{c(){_=n("div"),p=n("div"),f=n("div"),v=n("div"),m=n("span"),k=n("i"),H=I(),y=Y(j),x=I(),S=n("div"),d=n("div"),h=n("button"),R=n("span"),J=n("i"),oe=I(),N=n("div"),z=n("div"),T=n("a"),ee=n("i"),C=Y(` Edit\r
                                        investment`),ie=I(),b=n("a"),U=n("i"),F=Y(` Delete\r
                                        investment`),L=I(),P=n("div"),be(q.$$.fragment),K=I(),g=n("span"),V=n("i"),ce=I(),B=Y(W),te=Y(`%\r
                            `),be(E.$$.fragment),G=I(),this.h()},l(D){_=r(D,"DIV",{class:!0});var A=o(_);p=r(A,"DIV",{class:!0});var s=o(p);f=r(s,"DIV",{class:!0});var i=o(f);v=r(i,"DIV",{class:!0});var $=o(v);m=r($,"SPAN",{class:!0});var M=o(m);k=r(M,"I",{class:!0}),o(k).forEach(a),H=w(M),y=Z(M,j),M.forEach(a),x=w($),S=r($,"DIV",{class:!0});var u=o(S);d=r(u,"DIV",{class:!0});var ne=o(d);h=r(ne,"BUTTON",{class:!0,"aria-haspopup":!0});var Ee=o(h);R=r(Ee,"SPAN",{class:!0});var de=o(R);J=r(de,"I",{class:!0}),o(J).forEach(a),de.forEach(a),Ee.forEach(a),ne.forEach(a),oe=w(u),N=r(u,"DIV",{class:!0,role:!0});var ue=o(N);z=r(ue,"DIV",{class:!0});var se=o(z);T=r(se,"A",{class:!0});var ve=o(T);ee=r(ve,"I",{class:!0}),o(ee).forEach(a),C=Z(ve,` Edit\r
                                        investment`),ve.forEach(a),ie=w(se),b=r(se,"A",{class:!0});var he=o(b);U=r(he,"I",{class:!0}),o(U).forEach(a),F=Z(he,` Delete\r
                                        investment`),he.forEach(a),se.forEach(a),ue.forEach(a),u.forEach(a),$.forEach(a),L=w(i),P=r(i,"DIV",{class:!0});var fe=o(P);$e(q.$$.fragment,fe),K=w(fe),g=r(fe,"SPAN",{class:!0});var ae=o(g);V=r(ae,"I",{class:!0}),o(V).forEach(a),ce=w(ae),B=Z(ae,W),te=Z(ae,`%\r
                            `),$e(E.$$.fragment,ae),ae.forEach(a),fe.forEach(a),i.forEach(a),s.forEach(a),G=w(A),A.forEach(a),this.h()},h(){t(k,"class","fa-solid fa-chart-line has-text-grey-lighter"),t(m,"class","title is-size-4 subscription-title mb-0 svelte-1wsrubs"),t(J,"class","fa-solid fa-ellipsis-vertical"),t(R,"class","icon is-small"),t(h,"class","button is-small is-light"),t(h,"aria-haspopup","true"),t(d,"class","dropdown-trigger"),t(ee,"class","fa-solid fa-file-pen mr-1"),t(T,"class","dropdown-item"),t(U,"class","fa-solid fa-trash mr-1"),t(b,"class","dropdown-item has-text-danger"),t(z,"class","dropdown-content"),t(N,"class","dropdown-menu"),t(N,"role","menu"),t(S,"class","dropdown is-right"),t(v,"class","flex-container"),t(V,"class",Q="fa-solid fa-arrow-trend-"+(re(l[9])<0?"down":"up")),t(g,"class",le=re(l[9])<0?"has-text-danger":"has-text-success"),t(P,"class","flex-container"),t(f,"class","is-fullwidth"),t(p,"class","box is-fullheight flex-container"),t(_,"class","column is-half p-1")},m(D,A){_e(D,_,A),e(_,p),e(p,f),e(f,v),e(v,m),e(m,k),e(m,H),e(m,y),e(v,x),e(v,S),e(S,d),e(d,h),e(h,R),e(R,J),e(S,oe),e(S,N),e(N,z),e(z,T),e(T,ee),e(T,C),e(z,ie),e(z,b),e(b,U),e(b,F),e(f,L),e(f,P),Ie(q,P,null),e(P,K),e(P,g),e(g,V),e(g,ce),e(g,B),e(g,te),Ie(E,g,null),e(_,G),O=!0,me||(X=[Se(T,"click",c),Se(b,"click",De)],me=!0)},p(D,A){l=D,(!O||A&1)&&j!==(j=l[9].name+"")&&we(y,j);const s={};A&1&&(s.value=l[9].actualValue),q.$set(s),(!O||A&1&&Q!==(Q="fa-solid fa-arrow-trend-"+(re(l[9])<0?"down":"up")))&&t(V,"class",Q),(!O||A&1)&&W!==(W=re(l[9])*100/l[9].investedValue+"")&&we(B,W);const i={};A&1&&(i.value=re(l[9])),E.$set(i),(!O||A&1&&le!==(le=re(l[9])<0?"has-text-danger":"has-text-success"))&&t(g,"class",le)},i(D){O||(pe(q.$$.fragment,D),pe(E.$$.fragment,D),O=!0)},o(D){ge(q.$$.fragment,D),ge(E.$$.fragment,D),O=!1},d(D){D&&a(_),Ve(q),Ve(E),me=!1,Je(X)}}}function es(l){let _,p,f,v,m,k=l[2].number+"",H,j,y,x,S,d,h,R=l[2].percentage+"",J,oe,N,z,T,ee,C,ie,b,U,F,L,P,q,K,g,V,Q,ce,W,B,te,E,le,G,O,me;C=new Ne({props:{class:"title is-spaced",value:l[2].total}});let X=l[0],c=[];for(let s=0;s<X.length;s+=1)c[s]=Be(Te(l,X,s));const De=s=>ge(c[s],1,1,()=>{c[s]=null});function D(s){l[8](s)}let A={name:"Investment",repo:Me,form:[[{prop:"name"}],[{prop:"investedValue",label:"Initial investment"},{prop:"startDate",label:"Start date"}],[{prop:"actualValue",isVisible:l[7]}]]};return l[1]!==void 0&&(A.modal=l[1]),E=new Ze({props:A}),qe.push(()=>Ge(E,"modal",D)),{c(){_=I(),p=n("div"),f=n("div"),v=n("span"),m=n("span"),H=Y(k),j=I(),y=n("span"),x=Y("Investments"),S=I(),d=n("span"),h=n("span"),J=Y(R),oe=Y(" %"),N=n("i"),ee=I(),be(C.$$.fragment),ie=I(),b=n("div"),U=n("div"),F=n("button"),L=n("span"),P=n("i"),q=I(),K=n("div"),g=n("div"),V=n("a"),Q=n("i"),ce=Y(" Add investment"),W=I(),B=n("div");for(let s=0;s<c.length;s+=1)c[s].c();te=I(),be(E.$$.fragment),this.h()},l(s){Oe("svelte-187jwm2",document.head).forEach(a),_=w(s),p=r(s,"DIV",{class:!0});var $=o(p);f=r($,"DIV",{class:!0});var M=o(f);v=r(M,"SPAN",{class:!0});var u=o(v);m=r(u,"SPAN",{class:!0});var ne=o(m);H=Z(ne,k),ne.forEach(a),j=w(u),y=r(u,"SPAN",{class:!0});var Ee=o(y);x=Z(Ee,"Investments"),Ee.forEach(a),u.forEach(a),S=w(M),d=r(M,"SPAN",{});var de=o(d);h=r(de,"SPAN",{class:!0});var ue=o(h);J=Z(ue,R),oe=Z(ue," %"),N=r(ue,"I",{class:!0}),o(N).forEach(a),ue.forEach(a),ee=w(de),$e(C.$$.fragment,de),de.forEach(a),M.forEach(a),ie=w($),b=r($,"DIV",{class:!0});var se=o(b);U=r(se,"DIV",{class:!0});var ve=o(U);F=r(ve,"BUTTON",{class:!0,"aria-haspopup":!0});var he=o(F);L=r(he,"SPAN",{class:!0});var fe=o(L);P=r(fe,"I",{class:!0}),o(P).forEach(a),fe.forEach(a),he.forEach(a),ve.forEach(a),q=w(se),K=r(se,"DIV",{class:!0,role:!0});var ae=o(K);g=r(ae,"DIV",{class:!0});var Pe=o(g);V=r(Pe,"A",{class:!0});var Ae=o(V);Q=r(Ae,"I",{class:!0}),o(Q).forEach(a),ce=Z(Ae," Add investment"),Ae.forEach(a),Pe.forEach(a),ae.forEach(a),se.forEach(a),$.forEach(a),W=w(s),B=r(s,"DIV",{class:!0});var ye=o(B);for(let ke=0;ke<c.length;ke+=1)c[ke].l(ye);ye.forEach(a),te=w(s),$e(E.$$.fragment,s),this.h()},h(){document.title="MePloutos - Investments",t(m,"class","is-size-1 title mb-0"),t(y,"class","is-size-6 has-text-grey-lighter ml-2"),t(v,"class","text-header svelte-1wsrubs"),t(N,"class",z="fa-solid fa-arrow-trend-"+(l[2].percentage<0?"down":"up")),t(h,"class",T="mr-4 subtitle is-4 "+(l[2].percentage<0?"has-text-danger":"has-text-success")),t(f,"class","flex-container"),t(P,"class","fa-solid fa-ellipsis-vertical"),t(L,"class","icon is-small"),t(F,"class","button is-small is-light"),t(F,"aria-haspopup","true"),t(U,"class","dropdown-trigger"),t(Q,"class","fa-solid fa-plus"),t(V,"class","dropdown-item"),t(g,"class","dropdown-content"),t(K,"class","dropdown-menu"),t(K,"role","menu"),t(b,"class","dropdown is-right my-auto ml-4"),t(p,"class","box is-flex"),t(B,"class","columns is-multiline px-2")},m(s,i){_e(s,_,i),_e(s,p,i),e(p,f),e(f,v),e(v,m),e(m,H),e(v,j),e(v,y),e(y,x),e(f,S),e(f,d),e(d,h),e(h,J),e(h,oe),e(h,N),e(d,ee),Ie(C,d,null),e(p,ie),e(p,b),e(b,U),e(U,F),e(F,L),e(L,P),e(b,q),e(b,K),e(K,g),e(g,V),e(V,Q),e(V,ce),_e(s,W,i),_e(s,B,i);for(let $=0;$<c.length;$+=1)c[$]&&c[$].m(B,null);_e(s,te,i),Ie(E,s,i),G=!0,O||(me=Se(V,"click",l[4]),O=!0)},p(s,[i]){(!G||i&4)&&k!==(k=s[2].number+"")&&we(H,k),(!G||i&4)&&R!==(R=s[2].percentage+"")&&we(J,R),(!G||i&4&&z!==(z="fa-solid fa-arrow-trend-"+(s[2].percentage<0?"down":"up")))&&t(N,"class",z),(!G||i&4&&T!==(T="mr-4 subtitle is-4 "+(s[2].percentage<0?"has-text-danger":"has-text-success")))&&t(h,"class",T);const $={};if(i&4&&($.value=s[2].total),C.$set($),i&11){X=s[0];let u;for(u=0;u<X.length;u+=1){const ne=Te(s,X,u);c[u]?(c[u].p(ne,i),pe(c[u],1)):(c[u]=Be(ne),c[u].c(),pe(c[u],1),c[u].m(B,null))}for(Le(),u=X.length;u<c.length;u+=1)De(u);je()}const M={};i&2&&(M.form=[[{prop:"name"}],[{prop:"investedValue",label:"Initial investment"},{prop:"startDate",label:"Start date"}],[{prop:"actualValue",isVisible:s[7]}]]),!le&&i&2&&(le=!0,M.modal=s[1],Fe(()=>le=!1)),E.$set(M)},i(s){if(!G){pe(C.$$.fragment,s);for(let i=0;i<X.length;i+=1)pe(c[i]);pe(E.$$.fragment,s),G=!0}},o(s){ge(C.$$.fragment,s),c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)ge(c[i]);ge(E.$$.fragment,s),G=!1},d(s){s&&a(_),s&&a(p),Ve(C),s&&a(W),s&&a(B),Ke(c,s),s&&a(te),Ve(E,s),O=!1,me()}}}function re(l){return l.actualValue-l.investedValue}function ss(l,_,p){let f,v;He(l,xe,d=>p(0,v=d));let m=null;function k(d){Qe.show(`Are you sure you want to delete the investment '${d.name}' ?`,"Delete investment","is-danger").then(h=>{h&&ze.remove(d.id)})}const H=()=>m.show(new Xe),j=d=>m.show(d),y=d=>k(d),x=()=>m.isEdit();function S(d){m=d,p(1,m)}return l.$$.update=()=>{l.$$.dirty&1&&p(2,f=ze.getInvestmentsRecap(v))},[v,m,f,k,H,j,y,x,S]}class ds extends Re{constructor(_){super(),Ce(this,_,ss,es,Ue,{})}}export{ds as component};

import{S as Re,i as Oe,s as Ce,k as a,a as P,q as L,l,m as n,h as t,c as k,r as B,n as s,I as ke,b as ge,E as e,Z as Ne,F as _e,u as me,_ as ye,C as Te,G as ze,w as $e,T as je,y as qe,N as Fe,z as Ge,A as Me,U as Ke,g as Ze,d as He,K as Je,B as Qe,D as We}from"../chunks/index.05a8d8df.js";import{c as Xe}from"../chunks/dialogs.850fb91d.js";import{d as Ye}from"../chunks/index.69270f44.js";import{g as xe,i as Pe}from"../chunks/investments.cc9c4ab9.js";import{g as es,I as ss,p as ts}from"../chunks/helpers.de17de56.js";const as=Ye(es(()=>xe()),r=>r||[]);function Ue(r){let u,o,d,p,c,v,h;return{c(){u=a("div"),o=a("div"),d=a("label"),p=L(`Actual value\r
                            `),c=a("input"),this.h()},l(b){u=l(b,"DIV",{class:!0});var V=n(u);o=l(V,"DIV",{class:!0});var G=n(o);d=l(G,"LABEL",{class:!0});var f=n(d);p=B(f,`Actual value\r
                            `),c=l(f,"INPUT",{class:!0,type:!0}),f.forEach(t),G.forEach(t),V.forEach(t),this.h()},h(){s(c,"class","input"),s(c,"type","number"),s(d,"class","label"),s(o,"class","control"),s(u,"class","field")},m(b,V){ge(b,u,V),e(u,o),e(o,d),e(d,p),e(d,c),Ne(c,r[2].actualValue),v||(h=_e(c,"input",r[9]),v=!0)},p(b,V){V&4&&ye(c.value)!==b[2].actualValue&&Ne(c,b[2].actualValue)},d(b){b&&t(u),v=!1,h()}}}function ls(r){let u,o,d,p,c,v,h,b=r[0]?"Edit subscription":"Add subscription",V,G,f,A,m,J,R,oe,N,O,C,Z,ee,$,H,Q,j,M,z,T,W,le,Y,g,y,se,ce,K,q=r[0]?"Edit":"Add",te,F,ne,_=r[0]&&Ue(r);return{c(){u=a("div"),o=a("div"),d=P(),p=a("div"),c=a("div"),v=a("div"),h=a("span"),V=L(b),G=P(),f=a("div"),A=a("div"),m=a("label"),J=L(`Name\r
                            `),R=a("input"),oe=P(),N=a("div"),O=a("div"),C=a("div"),Z=a("label"),ee=L(`Initial investment\r
                                `),$=a("input"),H=P(),Q=a("div"),j=a("div"),M=a("label"),z=L(`Start date\r
                            `),T=a("input"),le=P(),_&&_.c(),Y=P(),g=a("footer"),y=a("button"),se=L("Cancel"),ce=P(),K=a("button"),te=L(q),this.h()},l(I){u=l(I,"DIV",{class:!0});var U=n(u);o=l(U,"DIV",{class:!0}),n(o).forEach(t),d=k(U),p=l(U,"DIV",{class:!0});var X=n(p);c=l(X,"DIV",{class:!0});var w=n(c);v=l(w,"DIV",{class:!0});var ae=n(v);h=l(ae,"SPAN",{class:!0});var Ie=n(h);V=B(Ie,b),Ie.forEach(t),G=k(ae),f=l(ae,"DIV",{class:!0});var i=n(f);A=l(i,"DIV",{class:!0});var D=n(A);m=l(D,"LABEL",{class:!0});var E=n(m);J=B(E,`Name\r
                            `),R=l(E,"INPUT",{class:!0,type:!0}),E.forEach(t),D.forEach(t),i.forEach(t),oe=k(ae),N=l(ae,"DIV",{class:!0});var S=n(N);O=l(S,"DIV",{class:!0});var x=n(O);C=l(x,"DIV",{class:!0});var de=n(C);Z=l(de,"LABEL",{class:!0});var ue=n(Z);ee=B(ue,`Initial investment\r
                                `),$=l(ue,"INPUT",{class:!0,type:!0}),ue.forEach(t),de.forEach(t),x.forEach(t),H=k(S),Q=l(S,"DIV",{class:!0});var re=n(Q);j=l(re,"DIV",{class:!0});var ve=n(j);M=l(ve,"LABEL",{class:!0});var he=n(M);z=B(he,`Start date\r
                            `),T=l(he,"INPUT",{class:!0,type:!0}),he.forEach(t),ve.forEach(t),re.forEach(t),S.forEach(t),le=k(ae),_&&_.l(ae),ae.forEach(t),Y=k(w),g=l(w,"FOOTER",{class:!0});var ie=n(g);y=l(ie,"BUTTON",{class:!0,"aria-label":!0});var Ee=n(y);se=B(Ee,"Cancel"),Ee.forEach(t),ce=k(ie),K=l(ie,"BUTTON",{class:!0});var fe=n(K);te=B(fe,q),fe.forEach(t),ie.forEach(t),w.forEach(t),X.forEach(t),U.forEach(t),this.h()},h(){var I;s(o,"class","modal-background"),s(h,"class","has-text-grey-lighter"),s(R,"class","input"),s(R,"type","text"),s(m,"class","label"),s(A,"class","control"),s(f,"class","field"),s($,"class","input"),s($,"type","number"),s(Z,"class","label"),s(C,"class","control"),s(O,"class","field column mb-0"),s(T,"class","input"),s(T,"type","date"),T.value=W=(I=r[2].startDate)==null?void 0:I.toISOString().split("T")[0],s(M,"class","label"),s(j,"class","control"),s(Q,"class","field column"),s(N,"class","columns mb-0"),s(v,"class","p-4"),s(y,"class","button"),s(y,"aria-label","close"),s(K,"class","ml-1 button is-success"),s(g,"class","is-flex is-justify-content-flex-end p-2"),s(c,"class","box p-0"),s(p,"class","modal-content"),s(u,"class","modal"),ke(u,"is-active",r[1])},m(I,U){ge(I,u,U),e(u,o),e(u,d),e(u,p),e(p,c),e(c,v),e(v,h),e(h,V),e(v,G),e(v,f),e(f,A),e(A,m),e(m,J),e(m,R),Ne(R,r[2].name),e(v,oe),e(v,N),e(N,O),e(O,C),e(C,Z),e(Z,ee),e(Z,$),Ne($,r[2].investedValue),e(N,H),e(N,Q),e(Q,j),e(j,M),e(M,z),e(M,T),e(v,le),_&&_.m(v,null),e(c,Y),e(c,g),e(g,y),e(y,se),e(g,ce),e(g,K),e(K,te),F||(ne=[_e(R,"input",r[6]),_e($,"input",r[7]),_e(T,"change",r[8]),_e(K,"click",r[4]),_e(u,"closing",r[3])],F=!0)},p(I,[U]){var X;U&1&&b!==(b=I[0]?"Edit subscription":"Add subscription")&&me(V,b),U&4&&R.value!==I[2].name&&Ne(R,I[2].name),U&4&&ye($.value)!==I[2].investedValue&&Ne($,I[2].investedValue),U&4&&W!==(W=(X=I[2].startDate)==null?void 0:X.toISOString().split("T")[0])&&(T.value=W),I[0]?_?_.p(I,U):(_=Ue(I),_.c(),_.m(v,null)):_&&(_.d(1),_=null),U&1&&q!==(q=I[0]?"Edit":"Add")&&me(te,q),U&2&&ke(u,"is-active",I[1])},i:Te,o:Te,d(I){I&&t(u),_&&_.d(),F=!1,ze(ne)}}}function ns(r,u,o){function d(){o(1,v=!1)}function p(){h.id?Pe.update(h):Pe.create(h),d()}let c=!1,v=!1,h={};const b={show(m){o(0,c=!!m),o(2,h=m||new ss),o(1,v=!0)}};function V(){h.name=this.value,o(2,h)}function G(){h.investedValue=ye(this.value),o(2,h)}const f=m=>o(2,h.startDate=ts(m.target.value),h);function A(){h.actualValue=ye(this.value),o(2,h)}return[c,v,h,d,p,b,V,G,f,A]}class rs extends Re{constructor(u){super(),Oe(this,u,ns,ls,Ce,{modal:5})}get modal(){return this.$$.ctx[5]}}function Le(r,u,o){const d=r.slice();return d[8]=u[o],d}function Be(r){let u,o,d,p,c,v,h,b=r[8].name+"",V,G,f,A,m,J,R,oe,N,O,C,Z,ee,$,H,Q,j,M,z,T,W=r[8].actualValue.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",le,Y,g,y,se,ce,K=be(r[8])*100/r[8].investedValue+"",q,te,F,ne=be(r[8]).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",_,I,U,X,w,ae;function Ie(){return r[5](r[8])}function i(){return r[6](r[8])}return{c(){u=a("div"),o=a("div"),d=a("div"),p=a("div"),c=a("span"),v=a("i"),h=P(),V=L(b),G=P(),f=a("div"),A=a("div"),m=a("button"),J=a("span"),R=a("i"),oe=P(),N=a("div"),O=a("div"),C=a("a"),Z=a("i"),ee=L(` Edit\r
                                        investment`),$=P(),H=a("a"),Q=a("i"),j=L(` Delete\r
                                        investment`),M=P(),z=a("div"),T=a("span"),le=L(W),Y=P(),g=a("span"),y=a("i"),ce=P(),q=L(K),te=L("% ("),F=a("span"),_=L(ne),I=L(")"),X=P(),this.h()},l(D){u=l(D,"DIV",{class:!0});var E=n(u);o=l(E,"DIV",{class:!0});var S=n(o);d=l(S,"DIV",{class:!0});var x=n(d);p=l(x,"DIV",{class:!0});var de=n(p);c=l(de,"SPAN",{class:!0});var ue=n(c);v=l(ue,"I",{class:!0}),n(v).forEach(t),h=k(ue),V=B(ue,b),ue.forEach(t),G=k(de),f=l(de,"DIV",{class:!0});var re=n(f);A=l(re,"DIV",{class:!0});var ve=n(A);m=l(ve,"BUTTON",{class:!0,"aria-haspopup":!0});var he=n(m);J=l(he,"SPAN",{class:!0});var ie=n(J);R=l(ie,"I",{class:!0}),n(R).forEach(t),ie.forEach(t),he.forEach(t),ve.forEach(t),oe=k(re),N=l(re,"DIV",{class:!0,role:!0});var Ee=n(N);O=l(Ee,"DIV",{class:!0});var fe=n(O);C=l(fe,"A",{class:!0});var De=n(C);Z=l(De,"I",{class:!0}),n(Z).forEach(t),ee=B(De,` Edit\r
                                        investment`),De.forEach(t),$=k(fe),H=l(fe,"A",{class:!0});var we=n(H);Q=l(we,"I",{class:!0}),n(Q).forEach(t),j=B(we,` Delete\r
                                        investment`),we.forEach(t),fe.forEach(t),Ee.forEach(t),re.forEach(t),de.forEach(t),M=k(x),z=l(x,"DIV",{class:!0});var Ve=n(z);T=l(Ve,"SPAN",{class:!0});var Ae=n(T);le=B(Ae,W),Ae.forEach(t),Y=k(Ve),g=l(Ve,"SPAN",{class:!0});var pe=n(g);y=l(pe,"I",{class:!0}),n(y).forEach(t),ce=k(pe),q=B(pe,K),te=B(pe,"% ("),F=l(pe,"SPAN",{});var Se=n(F);_=B(Se,ne),Se.forEach(t),I=B(pe,")"),pe.forEach(t),Ve.forEach(t),x.forEach(t),S.forEach(t),X=k(E),E.forEach(t),this.h()},h(){s(v,"class","fa-solid fa-chart-line has-text-grey-lighter"),s(c,"class","title is-size-4 subscription-title mb-0 svelte-1wsrubs"),s(R,"class","fa-solid fa-ellipsis-vertical"),s(J,"class","icon is-small"),s(m,"class","button is-small is-light"),s(m,"aria-haspopup","true"),s(A,"class","dropdown-trigger"),s(Z,"class","fa-solid fa-file-pen mr-1"),s(C,"class","dropdown-item"),s(Q,"class","fa-solid fa-trash mr-1"),s(H,"class","dropdown-item has-text-danger"),s(O,"class","dropdown-content"),s(N,"class","dropdown-menu"),s(N,"role","menu"),s(f,"class","dropdown is-right"),s(p,"class","flex-container"),s(T,"class","is-size-4 title mb-0"),s(y,"class",se="fa-solid fa-arrow-trend-"+(be(r[8])<0?"down":"up")),s(g,"class",U=be(r[8])<0?"has-text-danger":"has-text-success"),s(z,"class","flex-container"),s(d,"class","is-fullwidth"),s(o,"class","box is-fullheight flex-container"),s(u,"class","column is-half")},m(D,E){ge(D,u,E),e(u,o),e(o,d),e(d,p),e(p,c),e(c,v),e(c,h),e(c,V),e(p,G),e(p,f),e(f,A),e(A,m),e(m,J),e(J,R),e(f,oe),e(f,N),e(N,O),e(O,C),e(C,Z),e(C,ee),e(O,$),e(O,H),e(H,Q),e(H,j),e(d,M),e(d,z),e(z,T),e(T,le),e(z,Y),e(z,g),e(g,y),e(g,ce),e(g,q),e(g,te),e(g,F),e(F,_),e(g,I),e(u,X),w||(ae=[_e(C,"click",Ie),_e(H,"click",i)],w=!0)},p(D,E){r=D,E&1&&b!==(b=r[8].name+"")&&me(V,b),E&1&&W!==(W=r[8].actualValue.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&me(le,W),E&1&&se!==(se="fa-solid fa-arrow-trend-"+(be(r[8])<0?"down":"up"))&&s(y,"class",se),E&1&&K!==(K=be(r[8])*100/r[8].investedValue+"")&&me(q,K),E&1&&ne!==(ne=be(r[8]).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&me(_,ne),E&1&&U!==(U=be(r[8])<0?"has-text-danger":"has-text-success")&&s(g,"class",U)},d(D){D&&t(u),w=!1,ze(ae)}}}function is(r){let u,o,d,p,c,v=r[2].number+"",h,b,V,G,f,A,m,J=r[2].percentage+"",R,oe,N,O,C,Z,ee,$=r[2].total.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",H,Q,j,M,z,T,W,le,Y,g,y,se,ce,K,q,te,F,ne,_,I,U,X=r[0],w=[];for(let i=0;i<X.length;i+=1)w[i]=Be(Le(r,X,i));function ae(i){r[7](i)}let Ie={};return r[1]!==void 0&&(Ie.modal=r[1]),F=new rs({props:Ie}),$e.push(()=>je(F,"modal",ae)),{c(){u=P(),o=a("div"),d=a("div"),p=a("span"),c=a("span"),h=L(v),b=P(),V=a("span"),G=L("Investments"),f=P(),A=a("span"),m=a("span"),R=L(J),oe=L(" %"),N=a("i"),Z=P(),ee=a("span"),H=L($),Q=P(),j=a("div"),M=a("div"),z=a("button"),T=a("span"),W=a("i"),le=P(),Y=a("div"),g=a("div"),y=a("a"),se=a("i"),ce=L(" Add investment"),K=P(),q=a("div");for(let i=0;i<w.length;i+=1)w[i].c();te=P(),qe(F.$$.fragment),this.h()},l(i){Fe("svelte-187jwm2",document.head).forEach(t),u=k(i),o=l(i,"DIV",{class:!0});var E=n(o);d=l(E,"DIV",{class:!0});var S=n(d);p=l(S,"SPAN",{class:!0});var x=n(p);c=l(x,"SPAN",{class:!0});var de=n(c);h=B(de,v),de.forEach(t),b=k(x),V=l(x,"SPAN",{class:!0});var ue=n(V);G=B(ue,"Investments"),ue.forEach(t),x.forEach(t),f=k(S),A=l(S,"SPAN",{});var re=n(A);m=l(re,"SPAN",{class:!0});var ve=n(m);R=B(ve,J),oe=B(ve," %"),N=l(ve,"I",{class:!0}),n(N).forEach(t),ve.forEach(t),Z=k(re),ee=l(re,"SPAN",{class:!0});var he=n(ee);H=B(he,$),he.forEach(t),re.forEach(t),S.forEach(t),Q=k(E),j=l(E,"DIV",{class:!0});var ie=n(j);M=l(ie,"DIV",{class:!0});var Ee=n(M);z=l(Ee,"BUTTON",{class:!0,"aria-haspopup":!0});var fe=n(z);T=l(fe,"SPAN",{class:!0});var De=n(T);W=l(De,"I",{class:!0}),n(W).forEach(t),De.forEach(t),fe.forEach(t),Ee.forEach(t),le=k(ie),Y=l(ie,"DIV",{class:!0,role:!0});var we=n(Y);g=l(we,"DIV",{class:!0});var Ve=n(g);y=l(Ve,"A",{class:!0});var Ae=n(y);se=l(Ae,"I",{class:!0}),n(se).forEach(t),ce=B(Ae," Add investment"),Ae.forEach(t),Ve.forEach(t),we.forEach(t),ie.forEach(t),E.forEach(t),K=k(i),q=l(i,"DIV",{class:!0});var pe=n(q);for(let Se=0;Se<w.length;Se+=1)w[Se].l(pe);pe.forEach(t),te=k(i),Ge(F.$$.fragment,i),this.h()},h(){document.title="MePloutos - Investments",s(c,"class","is-size-1 title mb-0"),s(V,"class","is-size-6 has-text-grey-lighter ml-2"),s(p,"class","text-header svelte-1wsrubs"),s(N,"class",O="fa-solid fa-arrow-trend-"+(r[2].percentage<0?"down":"up")),s(m,"class",C="mr-4 subtitle is-4 "+(r[2].percentage<0?"has-text-danger":"has-text-success")),s(ee,"class","title is-spaced"),s(d,"class","flex-container"),s(W,"class","fa-solid fa-ellipsis-vertical"),s(T,"class","icon is-small"),s(z,"class","button is-small is-light"),s(z,"aria-haspopup","true"),s(M,"class","dropdown-trigger"),s(se,"class","fa-solid fa-plus"),s(y,"class","dropdown-item"),s(g,"class","dropdown-content"),s(Y,"class","dropdown-menu"),s(Y,"role","menu"),s(j,"class","dropdown is-right my-auto ml-4"),s(o,"class","box is-flex"),s(q,"class","columns")},m(i,D){ge(i,u,D),ge(i,o,D),e(o,d),e(d,p),e(p,c),e(c,h),e(p,b),e(p,V),e(V,G),e(d,f),e(d,A),e(A,m),e(m,R),e(m,oe),e(m,N),e(A,Z),e(A,ee),e(ee,H),e(o,Q),e(o,j),e(j,M),e(M,z),e(z,T),e(T,W),e(j,le),e(j,Y),e(Y,g),e(g,y),e(y,se),e(y,ce),ge(i,K,D),ge(i,q,D);for(let E=0;E<w.length;E+=1)w[E]&&w[E].m(q,null);ge(i,te,D),Me(F,i,D),_=!0,I||(U=_e(y,"click",r[4]),I=!0)},p(i,[D]){if((!_||D&4)&&v!==(v=i[2].number+"")&&me(h,v),(!_||D&4)&&J!==(J=i[2].percentage+"")&&me(R,J),(!_||D&4&&O!==(O="fa-solid fa-arrow-trend-"+(i[2].percentage<0?"down":"up")))&&s(N,"class",O),(!_||D&4&&C!==(C="mr-4 subtitle is-4 "+(i[2].percentage<0?"has-text-danger":"has-text-success")))&&s(m,"class",C),(!_||D&4)&&$!==($=i[2].total.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&me(H,$),D&11){X=i[0];let S;for(S=0;S<X.length;S+=1){const x=Le(i,X,S);w[S]?w[S].p(x,D):(w[S]=Be(x),w[S].c(),w[S].m(q,null))}for(;S<w.length;S+=1)w[S].d(1);w.length=X.length}const E={};!ne&&D&2&&(ne=!0,E.modal=i[1],Ke(()=>ne=!1)),F.$set(E)},i(i){_||(Ze(F.$$.fragment,i),_=!0)},o(i){He(F.$$.fragment,i),_=!1},d(i){i&&t(u),i&&t(o),i&&t(K),i&&t(q),Je(w,i),i&&t(te),Qe(F,i),I=!1,U()}}}function be(r){return r.actualValue-r.investedValue}function os(r,u,o){let d,p;We(r,as,f=>o(0,p=f));let c=null;function v(f){Xe.show(`Are you sure you want to delete the investment '${f.name}' ?`,"Delete investment","is-danger").then(A=>{A&&Pe.remove(f.id)})}const h=()=>c.show(),b=f=>c.show(f),V=f=>v(f);function G(f){c=f,o(1,c)}return r.$$.update=()=>{r.$$.dirty&1&&o(2,d=Pe.getInvestmentsRecap(p))},[p,c,d,v,h,b,V,G]}class ps extends Re{constructor(u){super(),Oe(this,u,os,is,Ce,{})}}export{ps as component};

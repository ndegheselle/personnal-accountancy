import{S as m,i as y,s as b,k as u,l as h,m as d,h as n,n as _,p as i,b as g,C as r,D as k}from"./index.05a8d8df.js";import{a as p}from"./store.49b29ba0.js";function f(l){let t;return{c(){t=u("i"),this.h()},l(e){t=h(e,"I",{class:!0}),d(t).forEach(n),this.h()},h(){_(t,"class","fa-solid fa-check has-text-link")},m(e,s){g(e,t,s)},d(e){e&&n(t)}}}function I(l){let t,e=l[1]&&f();return{c(){t=u("span"),e&&e.c(),this.h()},l(s){t=h(s,"SPAN",{class:!0,style:!0});var a=d(t);e&&e.l(a),a.forEach(n),this.h()},h(){var s;_(t,"class","category-icon svelte-u1wyw6"),i(t,"background-color",(s=l[2].get(l[0]))==null?void 0:s.color)},m(s,a){g(s,t,a),e&&e.m(t,null)},p(s,[a]){var o;s[1]?e||(e=f(),e.c(),e.m(t,null)):e&&(e.d(1),e=null),a&5&&i(t,"background-color",(o=s[2].get(s[0]))==null?void 0:o.color)},i:r,o:r,d(s){s&&n(t),e&&e.d()}}}function C(l,t,e){let s;k(l,p,c=>e(2,s=c));let{categoryId:a=null}=t,{selected:o=!1}=t;return l.$$set=c=>{"categoryId"in c&&e(0,a=c.categoryId),"selected"in c&&e(1,o=c.selected)},[a,o,s]}class w extends m{constructor(t){super(),y(this,t,C,I,b,{categoryId:0,selected:1})}}export{w as C};

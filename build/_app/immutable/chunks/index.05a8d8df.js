function $(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(D)}function M(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ct(t,n,e){t.$$.on_destroy.push(I(n,e))}function lt(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],u=Math.max(n.dirty.length,r.length);for(let l=0;l<u;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,o){if(r){const u=L(n,e,i,o);t.p(u,r)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t??""}function _t(t,n,e){return t.set(e),n}const ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let w=!1;function R(){w=!0}function W(){w=!1}function G(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<n.length;c++){const a=n[c];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const c=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=c?r+1:G(1,r,x=>n[e[x]].claim_order,c))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const o=[],u=[];let l=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);l>=s;l--)u.push(n[l]);l--}for(;l>=0;l--)u.push(n[l]);o.reverse(),u.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<u.length;s++){for(;c<o.length&&u[s].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(u[s],a)}}function K(t,n){if(w){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function yt(){return S(" ")}function gt(){return S("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t){return t===""?null:+t}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){X(t);const o=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const l=t[u];if(n(l)){const s=e(l);return s===void 0?t.splice(u,1):t[u]=s,r||(t.claim_info.last_index=u),l}}for(let u=t.claim_info.last_index-1;u>=0;u--){const l=t[u];if(n(l)){const s=e(l);return s===void 0?t.splice(u,1):t[u]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const o=[];for(let u=0;u<r.attributes.length;u++){const l=r.attributes[u];e[l.name]||o.push(l.name)}o.forEach(u=>r.removeAttribute(u))},()=>i(n))}function vt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Et(t){return Z(t," ")}function Nt(t,n){n=""+n,t.data!==n&&(t.data=n)}function At(t,n){t.value=n??""}function St(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Tt(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function jt(t){const n=t.querySelector(":checked");return n&&n.__value}function Ct(t,n,e){t.classList[e?"add":"remove"](n)}function kt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Dt(t,n){return new t(n)}let y;function p(t){y=t}function B(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){B().$$.on_mount.push(t)}function Lt(t){B().$$.after_update.push(t)}const h=[],k=[];let m=[];const E=[],H=Promise.resolve();let N=!1;function P(){N||(N=!0,H.then(q))}function Ot(){return P(),H}function A(t){m.push(t)}function Bt(t){E.push(t)}const v=new Set;let _=0;function q(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),tt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;k.length;)k.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;E.length;)E.pop()();N=!1,v.clear(),p(t)}function tt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function nt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const b=new Set;let d;function Ht(){d={r:0,c:[],p:d}}function Pt(){d.r||g(d.c),d=d.p}function et(t,n){t&&t.i&&(b.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Ft(t){t&&t.c()}function It(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const u=t.$$.on_mount.map(D).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),o.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(nt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,r,o,u,l=[-1]){const s=y;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||s.$$.root};u&&u(c.root);let a=!1;if(c.ctx=e?e(t,n.props||{},(f,x,...T)=>{const j=T.length?T[0]:x;return c.ctx&&r(c.ctx[f],c.ctx[f]=j)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](j),a&&ut(t,f)),x}):[],c.update(),a=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){R();const f=V(n.target);c.fragment&&c.fragment.l(f),f.forEach(Q)}else c.fragment&&c.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),W(),q()}p(s)}class Wt{$destroy(){rt(this,1),this.$destroy=$}$on(n,e){if(!M(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{I as $,it as A,rt as B,$ as C,ct as D,K as E,xt as F,g as G,_t as H,Ct as I,M as J,pt as K,dt as L,lt as M,kt as N,ft as O,at as P,ot as Q,ht as R,Wt as S,zt as T,Bt as U,bt as V,A as W,Tt as X,jt as Y,At as Z,wt as _,yt as a,mt as b,Et as c,qt as d,gt as e,Pt as f,et as g,Q as h,Rt as i,Lt as j,U as k,vt as l,V as m,$t as n,Mt as o,St as p,S as q,Z as r,st as s,Ot as t,Nt as u,Ht as v,k as w,Dt as x,Ft as y,It as z};

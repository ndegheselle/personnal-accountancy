import{d as t}from"./index.9e8dd097.js";import{d as r,P as s,g as n,i as o,C as u}from"./helpers.de17de56.js";function i(){return r.categories.toArray()}function g(e){return r.categories.add(e)}function C(e){return r.categories.update(e.id,e)}function y(e){return r.categories.delete(e)}function d(){return r.params.get(s.userId)}function p(e){return r.params.update(s.userId,e)}const l=t(n(d),e=>{let a=e||new s;return o()||(a.saveDataLocallyOnClose=!1,a.saveImportedFiles=!1),a});l.set=p;const m=t(n(i),e=>{var a;return e=e||[],(e.length===0||((a=e[0])==null?void 0:a.id)!==null)&&e.unshift(new u(null,"None","#DDD")),e}),D=t(m,e=>new Map(e.map(a=>[a.id,a])));export{D as a,g as b,m as c,l as p,y as r,C as u};

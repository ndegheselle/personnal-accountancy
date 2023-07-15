import{S as Se,i as ze,s as Le,k as A,q as V,a as F,l as x,m as C,r as B,h as w,c as R,n as p,b as te,E as d,F as se,C as ve,G as je,D as Ve,o as Be,y as pe,z as ye,A as we,u as be,g as Ee,d as Ae,B as xe}from"./index.ecd3f872.js";import{b as Qe}from"./store.ced03d2a.js";import{M as Ce}from"./Money.8cb7f686.js";const X={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},Ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};function Me(r,e){return typeof r=="number"?r+e:r}function ee(r){if(typeof r=="string"){const e=/^(\d+)\s*(.*)$/g.exec(r);return{value:e?+e[1]:0,unit:(e==null?void 0:e[2])||void 0}}return{value:Number(r)}}function qe(r){return String.fromCharCode(97+r%26)}function re(r,e,t,s){const n=(s-90)*Math.PI/180;return{x:r+t*Math.cos(n),y:e+t*Math.sin(n)}}function Y(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];for(let n=0;n<t.length;n++){const a=t[n];for(const i in a){const o=a[i];typeof o=="object"&&o!==null&&!(o instanceof Array)?r[i]=Y(r[i],o):r[i]=o}}return r}const Fe=r=>r;function Ie(r,e){return Array.from({length:r},e?(t,s)=>e(s):()=>{})}const Re=(r,e)=>r+(e||0);function Q(r,e){return r!==null&&typeof r=="object"&&Reflect.has(r,e)}function Ue(r){return r!==null&&isFinite(r)}function Ze(r){return!r&&r!==0}function k(r){return Ue(r)?Number(r):void 0}function Ge(r){return Array.isArray(r)?r.every(Array.isArray):!1}function We(r){return r==null||typeof r=="number"&&isNaN(r)}function He(r){return Array.isArray(r)&&r.every(e=>Array.isArray(e)||Q(e,"data"))}function Xe(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,n;const a={labels:(r.labels||[]).slice(),series:Ke(r.series,t,s)},i=a.labels.length;return Ge(a.series)?(n=Math.max(i,...a.series.map(o=>o.length)),a.series.forEach(o=>{o.push(...Ie(Math.max(0,n-o.length)))})):n=a.series.length,a.labels.push(...Ie(Math.max(0,n-i),()=>"")),e&&Ye(a),a}function Ye(r){var e;(e=r.labels)===null||e===void 0||e.reverse(),r.series.reverse();for(const t of r.series)Q(t,"data")?t.data.reverse():Array.isArray(t)&&t.reverse()}function Je(r,e){let t,s;if(typeof r!="object"){const n=k(r);e==="x"?t=n:s=n}else Q(r,"x")&&(t=k(r.x)),Q(r,"y")&&(s=k(r.y));if(!(t===void 0&&s===void 0))return{x:t,y:s}}function Oe(r,e){if(!We(r))return e?Je(r,e):k(r)}function ie(r,e){return Array.isArray(r)?r.map(t=>Q(t,"value")?Oe(t.value,e):Oe(t,e)):ie(r.data,e)}function Ke(r,e,t){if(He(r))return r.map(n=>ie(n,e));const s=ie(r,e);return t?s.map(n=>[n]):s}function $e(r){let e="";return r==null?r:(typeof r=="number"?e=""+r:typeof r=="object"?e=JSON.stringify({data:r}):e=String(r),Object.keys(Ne).reduce((t,s)=>t.replaceAll(s,Ne[s]),e))}class ke{call(e,t){return this.svgElements.forEach(s=>Reflect.apply(s[e],s,t)),this}attr(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("attr",t)}elem(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("elem",t)}root(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("root",t)}getNode(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("getNode",t)}foreignObject(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("foreignObject",t)}text(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("text",t)}empty(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("empty",t)}remove(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("remove",t)}addClass(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("addClass",t)}removeClass(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("removeClass",t)}removeAllClasses(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("removeAllClasses",t)}animate(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.call("animate",t)}constructor(e){this.svgElements=[];for(let t=0;t<e.length;t++)this.svgElements.push(new U(e[t]))}}const De={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function Te(r,e,t){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,n=arguments.length>4?arguments[4]:void 0;const{easing:a,...i}=t,o={};let l,h;a&&(l=Array.isArray(a)?a:De[a]),i.begin=Me(i.begin,"ms"),i.dur=Me(i.dur,"ms"),l&&(i.calcMode="spline",i.keySplines=l.join(" "),i.keyTimes="0;1"),s&&(i.fill="freeze",o[e]=i.from,r.attr(o),h=ee(i.begin||0).value,i.begin="indefinite");const m=r.elem("animate",{attributeName:e,...i});s&&setTimeout(()=>{try{m._node.beginElement()}catch{o[e]=i.to,r.attr(o),m.remove()}},h);const v=m.getNode();n&&v.addEventListener("beginEvent",()=>n.emit("animationBegin",{element:r,animate:v,params:t})),v.addEventListener("endEvent",()=>{n&&n.emit("animationEnd",{element:r,animate:v,params:t}),s&&(o[e]=i.to,r.attr(o),m.remove())})}class U{attr(e,t){return typeof e=="string"?t?this._node.getAttributeNS(t,e):this._node.getAttribute(e):(Object.keys(e).forEach(s=>{if(e[s]!==void 0)if(s.indexOf(":")!==-1){const n=s.split(":");this._node.setAttributeNS(X[n[0]],s,String(e[s]))}else this._node.setAttribute(s,String(e[s]))}),this)}elem(e,t,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return new U(e,t,s,this,n)}parent(){return this._node.parentNode instanceof SVGElement?new U(this._node.parentNode):null}root(){let e=this._node;for(;e.nodeName!=="svg"&&e.parentElement;)e=e.parentElement;return new U(e)}querySelector(e){const t=this._node.querySelector(e);return t?new U(t):null}querySelectorAll(e){const t=this._node.querySelectorAll(e);return new ke(t)}getNode(){return this._node}foreignObject(e,t,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,a;if(typeof e=="string"){const o=document.createElement("div");o.innerHTML=e,a=o.firstChild}else a=e;a instanceof Element&&a.setAttribute("xmlns",X.xmlns);const i=this.elem("foreignObject",t,s,n);return i._node.appendChild(a),i}text(e){return this._node.appendChild(document.createTextNode(e)),this}empty(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}remove(){var e;return(e=this._node.parentNode)===null||e===void 0||e.removeChild(this._node),this.parent()}replace(e){var t;return(t=this._node.parentNode)===null||t===void 0||t.replaceChild(e._node,this._node),e}append(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&this._node.firstChild?this._node.insertBefore(e._node,this._node.firstChild):this._node.appendChild(e._node),this}classes(){const e=this._node.getAttribute("class");return e?e.trim().split(/\s+/):[]}addClass(e){return this._node.setAttribute("class",this.classes().concat(e.trim().split(/\s+/)).filter(function(t,s,n){return n.indexOf(t)===s}).join(" ")),this}removeClass(e){const t=e.trim().split(/\s+/);return this._node.setAttribute("class",this.classes().filter(s=>t.indexOf(s)===-1).join(" ")),this}removeAllClasses(){return this._node.setAttribute("class",""),this}height(){return this._node.getBoundingClientRect().height}width(){return this._node.getBoundingClientRect().width}animate(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,s=arguments.length>2?arguments[2]:void 0;return Object.keys(e).forEach(n=>{const a=e[n];Array.isArray(a)?a.forEach(i=>Te(this,n,i,!1,s)):Te(this,n,a,t,s)}),this}constructor(e,t,s,n,a=!1){e instanceof Element?this._node=e:(this._node=document.createElementNS(X.svg,e),e==="svg"&&this.attr({"xmlns:ct":X.ct})),t&&this.attr(t),s&&this.addClass(s),n&&(a&&n._node.firstChild?n._node.insertBefore(this._node,n._node.firstChild):n._node.appendChild(this._node))}}U.Easing=De;function et(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"100%",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"100%",s=arguments.length>3?arguments[3]:void 0;Array.from(r.querySelectorAll("svg")).filter(a=>a.getAttributeNS(X.xmlns,"ct")).forEach(a=>r.removeChild(a));const n=new U("svg").attr({width:e,height:t}).attr({style:"width: ".concat(e,"; height: ").concat(t,";")});return s&&n.addClass(s),r.appendChild(n.getNode()),n}function tt(r){return typeof r=="number"?{top:r,right:r,bottom:r,left:r}:r===void 0?{top:0,right:0,bottom:0,left:0}:{top:typeof r.top=="number"?r.top:0,right:typeof r.right=="number"?r.right:0,bottom:typeof r.bottom=="number"?r.bottom:0,left:typeof r.left=="number"?r.left:0}}function st(r,e){var t,s,n,a;const i=!!(e.axisX||e.axisY),o=((t=e.axisY)===null||t===void 0?void 0:t.offset)||0,l=((s=e.axisX)===null||s===void 0?void 0:s.offset)||0,h=(n=e.axisY)===null||n===void 0?void 0:n.position,m=(a=e.axisX)===null||a===void 0?void 0:a.position;let v=r.width()||ee(e.width).value||0,g=r.height()||ee(e.height).value||0;const c=tt(e.chartPadding);v=Math.max(v,o+c.left+c.right),g=Math.max(g,l+c.top+c.bottom);const u={x1:0,x2:0,y1:0,y2:0,padding:c,width(){return this.x2-this.x1},height(){return this.y1-this.y2}};return i?(m==="start"?(u.y2=c.top+l,u.y1=Math.max(g-c.bottom,u.y2+1)):(u.y2=c.top,u.y1=Math.max(g-c.bottom-l,u.y2+1)),h==="start"?(u.x1=c.left+o,u.x2=Math.max(v-c.right,u.x1+1)):(u.x1=c.left,u.x2=Math.max(v-c.right-o,u.x1+1))):(u.x1=c.left,u.x2=Math.max(v-c.right,u.x1+1),u.y2=c.top,u.y1=Math.max(g-c.bottom,u.y2+1)),u}function _e(r,e,t){let s;const n=[];function a(o){const l=s;s=Y({},r),e&&e.forEach(h=>{window.matchMedia(h[0]).matches&&(s=Y(s,h[1]))}),t&&o&&t.emit("optionsChanged",{previousOptions:l,currentOptions:s})}function i(){n.forEach(o=>o.removeEventListener("change",a))}if(window.matchMedia)e&&e.forEach(o=>{const l=window.matchMedia(o[0]);l.addEventListener("change",a),n.push(l)});else throw new Error("window.matchMedia not found! Make sure you're using a polyfill.");return a(),{removeMediaQueryListeners:i,getCurrentOptions(){return s}}}const oe={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},rt={accuracy:3};function $(r,e,t,s,n,a){const i={command:n?r.toLowerCase():r.toUpperCase(),...e,...a?{data:a}:{}};t.splice(s,0,i)}function ne(r,e){r.forEach((t,s)=>{oe[t.command.toLowerCase()].forEach((n,a)=>{e(t,n,s,a,r)})})}class H{static join(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const n=new H(t,s);for(let a=0;a<e.length;a++){const i=e[a];for(let o=0;o<i.pathElements.length;o++)n.pathElements.push(i.pathElements[o])}return n}position(e){return e!==void 0?(this.pos=Math.max(0,Math.min(this.pathElements.length,e)),this):this.pos}remove(e){return this.pathElements.splice(this.pos,e),this}move(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=arguments.length>3?arguments[3]:void 0;return $("M",{x:+e,y:+t},this.pathElements,this.pos++,s,n),this}line(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=arguments.length>3?arguments[3]:void 0;return $("L",{x:+e,y:+t},this.pathElements,this.pos++,s,n),this}curve(e,t,s,n,a,i){let o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:!1,l=arguments.length>7?arguments[7]:void 0;return $("C",{x1:+e,y1:+t,x2:+s,y2:+n,x:+a,y:+i},this.pathElements,this.pos++,o,l),this}arc(e,t,s,n,a,i,o){let l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:!1,h=arguments.length>8?arguments[8]:void 0;return $("A",{rx:e,ry:t,xAr:s,lAf:n,sf:a,x:i,y:o},this.pathElements,this.pos++,l,h),this}parse(e){const t=e.replace(/([A-Za-z])(-?[0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce((n,a)=>(a.match(/[A-Za-z]/)&&n.push([]),n[n.length-1].push(a),n),[]);t[t.length-1][0].toUpperCase()==="Z"&&t.pop();const s=t.map(n=>{const a=n.shift(),i=oe[a.toLowerCase()];return{command:a,...i.reduce((o,l,h)=>(o[l]=+n[h],o),{})}});return this.pathElements.splice(this.pos,0,...s),this.pos+=s.length,this}stringify(){const e=Math.pow(10,this.options.accuracy);return this.pathElements.reduce((t,s)=>{const n=oe[s.command.toLowerCase()].map(a=>{const i=s[a];return this.options.accuracy?Math.round(i*e)/e:i});return t+s.command+n.join(",")},"")+(this.close?"Z":"")}scale(e,t){return ne(this.pathElements,(s,n)=>{s[n]*=n[0]==="x"?e:t}),this}translate(e,t){return ne(this.pathElements,(s,n)=>{s[n]+=n[0]==="x"?e:t}),this}transform(e){return ne(this.pathElements,(t,s,n,a,i)=>{const o=e(t,s,n,a,i);(o||o===0)&&(t[s]=o)}),this}clone(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const t=new H(e||this.close);return t.pos=this.pos,t.pathElements=this.pathElements.slice().map(s=>({...s})),t.options={...this.options},t}splitByCommand(e){const t=[new H];return this.pathElements.forEach(s=>{s.command===e.toUpperCase()&&t[t.length-1].pathElements.length!==0&&t.push(new H),t[t.length-1].pathElements.push(s)}),t}constructor(e=!1,t){this.close=e,this.pathElements=[],this.pos=0,this.options={...rt,...t}}}class nt{on(e,t){const{allListeners:s,listeners:n}=this;e==="*"?s.add(t):(n.has(e)||n.set(e,new Set),n.get(e).add(t))}off(e,t){const{allListeners:s,listeners:n}=this;if(e==="*")t?s.delete(t):s.clear();else if(n.has(e)){const a=n.get(e);t?a.delete(t):a.clear(),a.size||n.delete(e)}}emit(e,t){const{allListeners:s,listeners:n}=this;n.has(e)&&n.get(e).forEach(a=>a(t)),s.forEach(a=>a(e,t))}constructor(){this.listeners=new Map,this.allListeners=new Set}}const ae=new WeakMap;class at{update(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(e&&(this.data=e||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),t&&(this.options=Y({},s?this.options:this.defaultOptions,t),!this.initializeTimeoutId)){var n;(n=this.optionsProvider)===null||n===void 0||n.removeMediaQueryListeners(),this.optionsProvider=_e(this.options,this.responsiveOptions,this.eventEmitter)}return!this.initializeTimeoutId&&this.optionsProvider&&this.createChart(this.optionsProvider.getCurrentOptions()),this}detach(){if(this.initializeTimeoutId)window.clearTimeout(this.initializeTimeoutId);else{var e;window.removeEventListener("resize",this.resizeListener),(e=this.optionsProvider)===null||e===void 0||e.removeMediaQueryListeners()}return ae.delete(this.container),this}on(e,t){return this.eventEmitter.on(e,t),this}off(e,t){return this.eventEmitter.off(e,t),this}initialize(){window.addEventListener("resize",this.resizeListener),this.optionsProvider=_e(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.on("optionsChanged",()=>this.update()),this.options.plugins&&this.options.plugins.forEach(e=>{Array.isArray(e)?e[0](this,e[1]):e(this)}),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=null}constructor(e,t,s,n,a){this.data=t,this.defaultOptions=s,this.options=n,this.responsiveOptions=a,this.eventEmitter=new nt,this.resizeListener=()=>this.update(),this.initializeTimeoutId=setTimeout(()=>this.initialize(),0);const i=typeof e=="string"?document.querySelector(e):e;if(!i)throw new Error("Target element is not found");this.container=i;const o=ae.get(i);o&&o.detach(),ae.set(i,this)}}const Pe={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:Fe,labelDirection:"neutral",ignoreEmptyValues:!1};function it(r,e,t){const s=e.x>r.x;return s&&t==="explode"||!s&&t==="implode"?"start":s&&t==="implode"||!s&&t==="explode"?"end":"middle"}class ot extends at{createChart(e){const{data:t}=this,s=Xe(t),n=[];let a,i,o=e.startAngle;const l=et(this.container,e.width,e.height,e.donut?e.classNames.chartDonut:e.classNames.chartPie);this.svg=l;const h=st(l,e);let m=Math.min(h.width()/2,h.height()/2);const v=e.total||s.series.reduce(Re,0),g=ee(e.donutWidth);g.unit==="%"&&(g.value*=m/100),m-=e.donut?g.value/2:0,e.labelPosition==="outside"||e.donut?i=m:e.labelPosition==="center"?i=0:i=m/2,e.labelOffset&&(i+=e.labelOffset);const c={x:h.x1+h.width()/2,y:h.y2+h.height()/2},u=t.series.filter(f=>Q(f,"value")?f.value!==0:f!==0).length===1;t.series.forEach((f,y)=>n[y]=l.elem("g")),e.showLabel&&(a=l.elem("g")),t.series.forEach((f,y)=>{var S,M;if(s.series[y]===0&&e.ignoreEmptyValues)return;const T=Q(f,"name")&&f.name,b=Q(f,"className")&&f.className,N=Q(f,"meta")?f.meta:void 0;T&&n[y].attr({"ct:series-name":T}),n[y].addClass([(S=e.classNames)===null||S===void 0?void 0:S.series,b||"".concat((M=e.classNames)===null||M===void 0?void 0:M.series,"-").concat(qe(y))].join(" "));let E=v>0?o+s.series[y]/v*360:0;const I=Math.max(0,o-(y===0||u?0:.2));E-I>=359.99&&(E=I+359.99);const _=re(c.x,c.y,m,I),z=re(c.x,c.y,m,E),q=new H(!e.donut).move(z.x,z.y).arc(m,m,0,+(E-o>180),0,_.x,_.y);e.donut||q.line(c.x,c.y);const Z=n[y].elem("path",{d:q.stringify()},e.donut?e.classNames.sliceDonut:e.classNames.slicePie);if(Z.attr({"ct:value":s.series[y],"ct:meta":$e(N)}),e.donut&&Z.attr({style:"stroke-width: "+g.value+"px"}),this.eventEmitter.emit("draw",{type:"slice",value:s.series[y],totalDataSum:v,index:y,meta:N,series:f,group:n[y],element:Z,path:q.clone(),center:c,radius:m,startAngle:o,endAngle:E,chartRect:h}),e.showLabel){let D;t.series.length===1?D={x:c.x,y:c.y}:D=re(c.x,c.y,i,o+(E-o)/2);let G;s.labels&&!Ze(s.labels[y])?G=s.labels[y]:G=s.series[y];const j=e.labelInterpolationFnc(G,y);if(j||j===0){const L=a.elem("text",{dx:D.x,dy:D.y,"text-anchor":it(c,D,e.labelDirection)},e.classNames.label).text(String(j));this.eventEmitter.emit("draw",{type:"label",index:y,group:a,element:L,text:""+j,chartRect:h,series:f,meta:N,...D})}}o=E}),this.eventEmitter.emit("created",{chartRect:h,svg:l,options:e})}constructor(e,t,s,n){super(e,t,Pe,Y({},Pe,s),n),this.data=t}}function lt(r){let e,t,s;return{c(){e=A("div"),t=A("span"),s=V("No values"),this.h()},l(n){e=x(n,"DIV",{class:!0});var a=C(e);t=x(a,"SPAN",{class:!0});var i=C(t);s=B(i,"No values"),i.forEach(w),a.forEach(w),this.h()},h(){p(t,"class","has-text-grey"),p(e,"class","flex-centered p-5")},m(n,a){te(n,e,a),d(e,t),d(t,s)},d(n){n&&w(e)}}}function ut(r){let e;return{c(){e=A("div"),this.h()},l(t){e=x(t,"DIV",{class:!0}),C(e).forEach(w),this.h()},h(){p(e,"class","ct-chart svelte-xvasi4")},m(t,s){te(t,e,s)},d(t){t&&w(e)}}}function ct(r){let e,t,s,n,a,i,o,l,h,m,v,g,c,u,f,y,S,M,T,b,N,E,I,_,z,q,Z,D;function G(O,P){return O[1]?ut:lt}let j=G(r),L=j(r);return{c(){e=A("div"),t=A("div"),s=A("span"),n=V("Categories"),a=F(),i=A("div"),o=A("div"),l=A("button"),h=A("span"),m=A("i"),v=F(),g=A("div"),c=A("div"),u=A("a"),f=V("All"),S=F(),M=A("a"),T=V("Only negatives"),N=F(),E=A("a"),I=V("Only positives"),z=F(),L.c(),this.h()},l(O){e=x(O,"DIV",{class:!0});var P=C(e);t=x(P,"DIV",{class:!0});var J=C(t);s=x(J,"SPAN",{class:!0});var le=C(s);n=B(le,"Categories"),le.forEach(w),a=R(J),i=x(J,"DIV",{class:!0});var K=C(i);o=x(K,"DIV",{class:!0});var ue=C(o);l=x(ue,"BUTTON",{class:!0,"aria-haspopup":!0});var ce=C(l);h=x(ce,"SPAN",{class:!0});var he=C(h);m=x(he,"I",{class:!0}),C(m).forEach(w),he.forEach(w),ce.forEach(w),ue.forEach(w),v=R(K),g=x(K,"DIV",{class:!0,role:!0});var de=C(g);c=x(de,"DIV",{class:!0});var W=C(c);u=x(W,"A",{class:!0});var me=C(u);f=B(me,"All"),me.forEach(w),S=R(W),M=x(W,"A",{class:!0});var fe=C(M);T=B(fe,"Only negatives"),fe.forEach(w),N=R(W),E=x(W,"A",{class:!0});var ge=C(E);I=B(ge,"Only positives"),ge.forEach(w),W.forEach(w),de.forEach(w),K.forEach(w),J.forEach(w),z=R(P),L.l(P),P.forEach(w),this.h()},h(){p(s,"class","has-text-grey-lighter box-title"),p(m,"class","fa-solid fa-filter"),p(h,"class","icon is-small"),p(l,"class","button is-small is-light"),p(l,"aria-haspopup","true"),p(o,"class","dropdown-trigger"),p(u,"class",y="dropdown-item "+(r[2]=="all"?"is-active":"")),p(M,"class",b="dropdown-item "+(r[2]=="onlyNegatives"?"is-active":"")),p(E,"class",_="dropdown-item "+(r[2]=="onlyPositives"?"is-active":"")),p(c,"class","dropdown-content"),p(g,"class","dropdown-menu"),p(g,"role","menu"),p(i,"class","dropdown is-right"),p(t,"class","flex-container"),p(e,"class",q="box flex-auto-height "+r[0]+" svelte-xvasi4")},m(O,P){te(O,e,P),d(e,t),d(t,s),d(s,n),d(t,a),d(t,i),d(i,o),d(o,l),d(l,h),d(h,m),d(i,v),d(i,g),d(g,c),d(c,u),d(u,f),d(c,S),d(c,M),d(M,T),d(c,N),d(c,E),d(E,I),d(e,z),L.m(e,null),Z||(D=[se(u,"click",r[7]),se(M,"click",r[8]),se(E,"click",r[9])],Z=!0)},p(O,[P]){P&4&&y!==(y="dropdown-item "+(O[2]=="all"?"is-active":""))&&p(u,"class",y),P&4&&b!==(b="dropdown-item "+(O[2]=="onlyNegatives"?"is-active":""))&&p(M,"class",b),P&4&&_!==(_="dropdown-item "+(O[2]=="onlyPositives"?"is-active":""))&&p(E,"class",_),j!==(j=G(O))&&(L.d(1),L=j(O),L&&(L.c(),L.m(e,null))),P&1&&q!==(q="box flex-auto-height "+O[0]+" svelte-xvasi4")&&p(e,"class",q)},i:ve,o:ve,d(O){O&&w(e),L.d(),Z=!1,je(D)}}}function ht(r,e,t){return{series:e.map(s=>({value:Math.abs(s.value)*100/t||1,className:`category-${s.id}`})),labels:e.map(s=>r.get(s.id).name)}}function dt(r,e,t){let s;Ve(r,Qe,u=>t(6,s=u));function n(u,f){if(f.categoriesTotal)switch(u){case"all":t(4,o=f.totals.total),t(3,i=f.categoriesTotal);break;case"onlyNegatives":t(4,o=f.totals.totalNegative),t(3,i=f.categoriesNegative);break;case"onlyPositives":t(4,o=f.totals.totalPositive),t(3,i=f.categoriesPositive);break}}Be(async()=>{t(5,l=new ot(".ct-chart",{series:[],labels:[]},{donut:!0,donutWidth:40,donutSolid:!0,startAngle:270,showLabel:!0}))});let a="onlyNegatives",i=[],o=0,l=null,{class:h=""}=e,{transactionsRecap:m={}}=e;const v=()=>t(2,a="all"),g=()=>t(2,a="onlyNegatives"),c=()=>t(2,a="onlyPositives");return r.$$set=u=>{"class"in u&&t(0,h=u.class),"transactionsRecap"in u&&t(1,m=u.transactionsRecap)},r.$$.update=()=>{r.$$.dirty&6&&n(a,m),r.$$.dirty&120&&l&&i.length&&l.update(ht(s,i,o))},[h,m,a,i,o,l,s,v,g,c]}class bt extends Se{constructor(e){super(),ze(this,e,dt,ct,Le,{class:0,transactionsRecap:1})}}function mt(r){let e,t,s,n,a,i=(Math.round(r[0].positiveTotal*100/r[0].total)||0)+"",o,l,h,m,v,g,c,u,f=(Math.round(r[0].negativeTotal*100/r[0].total)||0)+"",y,S,M,T;return s=new Ce({props:{class:"title is-spaced",value:r[0].positiveTotal}}),g=new Ce({props:{class:"title is-spaced",value:r[0].negativeTotal}}),{c(){e=A("div"),t=A("div"),pe(s.$$.fragment),n=F(),a=A("span"),o=V(i),l=V(" %"),h=A("i"),m=F(),v=A("div"),pe(g.$$.fragment),c=F(),u=A("span"),y=V(f),S=V(" %"),M=A("i"),this.h()},l(b){e=x(b,"DIV",{class:!0});var N=C(e);t=x(N,"DIV",{class:!0});var E=C(t);ye(s.$$.fragment,E),n=R(E),a=x(E,"SPAN",{class:!0});var I=C(a);o=B(I,i),l=B(I," %"),h=x(I,"I",{class:!0}),C(h).forEach(w),I.forEach(w),E.forEach(w),m=R(N),v=x(N,"DIV",{class:!0});var _=C(v);ye(g.$$.fragment,_),c=R(_),u=x(_,"SPAN",{class:!0});var z=C(u);y=B(z,f),S=B(z," %"),M=x(z,"I",{class:!0}),C(M).forEach(w),z.forEach(w),_.forEach(w),N.forEach(w),this.h()},h(){p(h,"class","fa-solid fa-arrow-trend-up"),p(a,"class","percent has-text-success subtitle is-4 svelte-8wyi98"),p(t,"class","column"),p(M,"class","fa-solid fa-arrow-trend-down"),p(u,"class","percent has-text-danger subtitle is-4 svelte-8wyi98"),p(v,"class","column summary"),p(e,"class","columns is-mobile has-text-centered")},m(b,N){te(b,e,N),d(e,t),we(s,t,null),d(t,n),d(t,a),d(a,o),d(a,l),d(a,h),d(e,m),d(e,v),we(g,v,null),d(v,c),d(v,u),d(u,y),d(u,S),d(u,M),T=!0},p(b,[N]){const E={};N&1&&(E.value=b[0].positiveTotal),s.$set(E),(!T||N&1)&&i!==(i=(Math.round(b[0].positiveTotal*100/b[0].total)||0)+"")&&be(o,i);const I={};N&1&&(I.value=b[0].negativeTotal),g.$set(I),(!T||N&1)&&f!==(f=(Math.round(b[0].negativeTotal*100/b[0].total)||0)+"")&&be(y,f)},i(b){T||(Ee(s.$$.fragment,b),Ee(g.$$.fragment,b),T=!0)},o(b){Ae(s.$$.fragment,b),Ae(g.$$.fragment,b),T=!1},d(b){b&&w(e),xe(s),xe(g)}}}function ft(r,e,t){let{transactionsTotals:s=null}=e;return r.$$set=n=>{"transactionsTotals"in n&&t(0,s=n.transactionsTotals)},[s]}class Et extends Se{constructor(e){super(),ze(this,e,ft,mt,Le,{transactionsTotals:0})}}function gt(r){let e=[];if(!r)return e;r=r.sort((s,n)=>n.date-s.date||n.orderNumber-s.orderNumber);let t=new Date(0);for(let s of r)s.date.getTime()!=t.getTime()&&(e.push({date:s.date,transactions:[]}),t=s.date),e[e.length-1].transactions.push(s);return e}function vt(r){let e=new Map,t=new Map,s=new Map;e.set(null,0),t.set(null,0),s.set(null,0);let n={positiveTotal:0,negativeTotal:0,total:0};for(let l of r||[])e.has(l.categoryId)||e.set(l.categoryId,0),e.set(l.categoryId,e.get(l.categoryId)+Math.abs(l.value)),l.value>0?(t.has(l.categoryId)||t.set(l.categoryId,0),t.set(l.categoryId,t.get(l.categoryId)+l.value),n.positiveTotal+=l.value):(s.has(l.categoryId)||s.set(l.categoryId,0),s.set(l.categoryId,s.get(l.categoryId)+l.value),n.negativeTotal+=l.value);let a=Array.from(e,function(l){return{id:l[0],value:l[1]}}).reverse(),i=Array.from(t,function(l){return{id:l[0],value:l[1]}}).reverse(),o=Array.from(s,function(l){return{id:l[0],value:l[1]}}).reverse();return n.total=Math.abs(n.positiveTotal)+Math.abs(n.negativeTotal),{categoriesTotal:a,categoriesPositive:i,categoriesNegative:o,totals:n}}const At={groupTransactionsByDate:gt,getTransactionsRecap:vt};export{Et as A,bt as C,At as T};

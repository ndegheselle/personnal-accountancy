import{c as a,a as i}from"./store.e30c45fe.js";function r(s,t){i.set({message:s,type:t})}const f={show:r,error:s=>r(s,"is-danger"),warning:s=>r(s,"is-warning"),info:s=>r(s,"is-info"),success:s=>r(s,"is-success")},w={show(s,t,o){let n;return a.update(e=>(e.show=!0,e.message=s,e.title=t,e.type=o||"is-success",n=new Promise(function(c,u){e.callback=c}),e)),n}};export{f as a,w as c};

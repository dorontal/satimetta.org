const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BwS0bnds.js","../chunks/disclose-version.CMz5mLVU.js","../chunks/runtime.BdMO3jBp.js","../chunks/render.DIfwmAWx.js","../chunks/Icon.D8qEacpk.js","../chunks/attributes.rlSvf4lD.js","../chunks/props.BYoJSqSn.js","../chunks/index-client.CP7FJAOt.js","../chunks/legacy.DpHPQpah.js","../chunks/lifecycle.Cykqjre6.js","../assets/Icon.BIaSm-mh.css","../chunks/index.BA9rYr9s.js","../chunks/entry.6ky9_21O.js","../assets/0.DZDLcek8.css","../nodes/1.B0GfeQAh.js","../nodes/2.Ce8qkXZf.js","../chunks/index.DDRbF9Ut.js","../assets/2.BDCF7Lku.css","../nodes/3.BGfDUVPh.js","../chunks/diamond.C7PW4RlU.js","../nodes/4.D8TQtjk8.js","../nodes/5.DnHvotlw.js"])))=>i.map(i=>d[i]);
var G=e=>{throw TypeError(e)};var W=(e,t,s)=>t.has(e)||G("Cannot "+s);var u=(e,t,s)=>(W(e,t,"read from private field"),s?s.call(e):t.get(e)),T=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),C=(e,t,s,o)=>(W(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{an as Q,ao as X,e as Z,O as N,T as $,i as v,ad as tt,Y as A,ap as et,aq as rt,am as st,p as at,u as nt,b as ot,ar as it,f as x,a as ct,as as D,s as ut,c as lt,r as ft,k as I,t as dt}from"../chunks/runtime.BdMO3jBp.js";import{h as mt,m as ht,u as _t,s as vt}from"../chunks/render.DIfwmAWx.js";import{a as R,t as H,c as V,g as gt}from"../chunks/disclose-version.CMz5mLVU.js";import{a as j,p as yt,i as q,c as B}from"../chunks/props.BYoJSqSn.js";import{o as Et}from"../chunks/index-client.CP7FJAOt.js";function z(e,t){return e===t||(e==null?void 0:e[$])===t}function Y(e={},t,s,o){return Q(()=>{var n,i;return X(()=>{n=i,i=[],Z(()=>{e!==s(...i)&&(t(e,...i),n&&z(s(...n),e)&&t(null,...n))})}),()=>{N(()=>{i&&z(s(...i),e)&&t(null,...i)})}}),e}function Pt(e){return class extends bt{constructor(t){super({component:e,...t})}}}var g,f;class bt{constructor(t){T(this,g);T(this,f);var i;var s=new Map,o=(a,r)=>{var d=st(r);return s.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,r){return v(s.get(r)??o(r,Reflect.get(a,r)))},has(a,r){return r===tt?!0:(v(s.get(r)??o(r,Reflect.get(a,r))),Reflect.has(a,r))},set(a,r,d){return A(s.get(r)??o(r,d),d),Reflect.set(a,r,d)}});C(this,f,(t.hydrate?mt:ht)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((i=t==null?void 0:t.props)!=null&&i.$$host)||t.sync===!1)&&et(),C(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||rt(this,a,{get(){return u(this,f)[a]},set(r){u(this,f)[a]=r},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{_t(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,s){u(this,g)[t]=u(this,g)[t]||[];const o=(...n)=>s.call(this,...n);return u(this,g)[t].push(o),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==o)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const Rt="modulepreload",kt=function(e,t){return new URL(e,t).href},F={},k=function(t,s,o){let n=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(s.map(l=>{if(l=kt(l,o),l in F)return;F[l]=!0;const y=l.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(!!o)for(let E=a.length-1;E>=0;E--){const c=a[E];if(c.href===l&&(!y||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${S}`))return;const h=document.createElement("link");if(h.rel=y?"stylesheet":Rt,y||(h.as="script"),h.crossOrigin="",h.href=l,d&&h.setAttribute("nonce",d),document.head.appendChild(h),y)return new Promise((E,c)=>{h.addEventListener("load",E),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return n.then(a=>{for(const r of a||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},qt={};var wt=H('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ot=H("<!> <!>",1);function Lt(e,t){at(t,!0);let s=j(t,"components",23,()=>[]),o=j(t,"data_0",3,null),n=j(t,"data_1",3,null);nt(()=>t.stores.page.set(t.page)),ot(()=>{t.stores,t.page,t.constructors,s(),t.form,o(),n(),t.stores.page.notify()});let i=D(!1),a=D(!1),r=D(null);Et(()=>{const c=t.stores.page.subscribe(()=>{v(i)&&(A(a,!0),it().then(()=>{A(r,yt(document.title||"untitled page"))}))});return A(i,!0),c});const d=I(()=>t.constructors[1]);var l=Ot(),y=x(l);{var S=c=>{var _=V();const w=I(()=>t.constructors[0]);var O=x(_);B(O,()=>v(w),(P,b)=>{Y(b(P,{get data(){return o()},get form(){return t.form},children:(m,St)=>{var p=V(),J=x(p);B(J,()=>v(d),(K,M)=>{Y(M(K,{get data(){return n()},get form(){return t.form}}),L=>s()[1]=L,()=>{var L;return(L=s())==null?void 0:L[1]})}),R(m,p)},$$slots:{default:!0}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),R(c,_)},U=c=>{var _=V();const w=I(()=>t.constructors[0]);var O=x(_);B(O,()=>v(w),(P,b)=>{Y(b(P,{get data(){return o()},get form(){return t.form}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),R(c,_)};q(y,c=>{t.constructors[1]?c(S):c(U,!1)})}var h=ut(y,2);{var E=c=>{var _=wt(),w=lt(_);{var O=P=>{var b=gt();dt(()=>vt(b,v(r))),R(P,b)};q(w,P=>{v(a)&&P(O)})}ft(_),R(c,_)};q(h,c=>{v(i)&&c(E)})}R(e,l),ct()}const Bt=Pt(Lt),Yt=[()=>k(()=>import("../nodes/0.BwS0bnds.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),()=>k(()=>import("../nodes/1.B0GfeQAh.js"),__vite__mapDeps([14,1,2,8,3,9,11,12,7]),import.meta.url),()=>k(()=>import("../nodes/2.Ce8qkXZf.js"),__vite__mapDeps([15,16,2,1,8,5,17]),import.meta.url),()=>k(()=>import("../nodes/3.BGfDUVPh.js"),__vite__mapDeps([18,16,2,1,6,4,5,3,7,8,9,10,19]),import.meta.url),()=>k(()=>import("../nodes/4.D8TQtjk8.js"),__vite__mapDeps([20,16,2,1,6,4,5,3,7,8,9,10,19]),import.meta.url),()=>k(()=>import("../nodes/5.DnHvotlw.js"),__vite__mapDeps([21,16,2,1,6,4,5,3,7,8,9,10,19]),import.meta.url)],Ut=[],pt={"/":[2],"/about-doron-tal":[3],"/mindfulness-questions-and-answers":[4],"/mindfulness-resources":[5]},xt={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},At=Object.fromEntries(Object.entries(xt.transport).map(([e,t])=>[e,t.decode])),Gt=!1,Wt=(e,t)=>At[e](t);export{Wt as decode,At as decoders,pt as dictionary,Gt as hash,xt as hooks,qt as matchers,Yt as nodes,Bt as root,Ut as server_loads};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DYpTu2c7.js","../chunks/disclose-version.6I_yqkBR.js","../chunks/runtime.obDE47df.js","../chunks/render.CbDBPchh.js","../chunks/Icon.hMnfSdri.js","../chunks/attributes.Bt8hjzIK.js","../chunks/props.BCmvTt3i.js","../chunks/index-client.CrnbigLJ.js","../chunks/legacy.CFZaghGV.js","../chunks/lifecycle.DfKlwDfP.js","../assets/Icon.BIaSm-mh.css","../chunks/index.Bk4ojT7l.js","../chunks/entry.1PicmOK8.js","../assets/0.DZDLcek8.css","../nodes/1.CMzTIGqo.js","../nodes/2.C3G0MJIM.js","../assets/2.BHSXQYbC.css","../nodes/3.DY0cj8vI.js","../chunks/diamond.DXTLBabM.js","../nodes/4.D9yIHRuS.js","../nodes/5.BrAg13RB.js"])))=>i.map(i=>d[i]);
var G=e=>{throw TypeError(e)};var W=(e,t,s)=>t.has(e)||G("Cannot "+s);var l=(e,t,s)=>(W(e,t,"read from private field"),s?s.call(e):t.get(e)),T=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),C=(e,t,s,o)=>(W(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{am as M,an as N,e as Q,N as Z,S as $,i as v,ac as tt,X as S,ao as et,ap as rt,al as st,p as at,u as nt,b as ot,aq as it,f as x,a as ct,ar as D,s as lt,c as ut,r as ft,k as I,t as dt}from"../chunks/runtime.obDE47df.js";import{h as mt,m as ht,u as _t,s as vt}from"../chunks/render.CbDBPchh.js";import{a as R,t as F,c as V,g as gt}from"../chunks/disclose-version.6I_yqkBR.js";import{a as j,p as yt,i as q,c as B}from"../chunks/props.BCmvTt3i.js";import{o as Et}from"../chunks/index-client.CrnbigLJ.js";function X(e,t){return e===t||(e==null?void 0:e[$])===t}function U(e={},t,s,o){return M(()=>{var n,i;return N(()=>{n=i,i=[],Q(()=>{e!==s(...i)&&(t(e,...i),n&&X(s(...n),e)&&t(null,...n))})}),()=>{Z(()=>{i&&X(s(...i),e)&&t(null,...i)})}}),e}function Pt(e){return class extends bt{constructor(t){super({component:e,...t})}}}var g,f;class bt{constructor(t){T(this,g);T(this,f);var i;var s=new Map,o=(a,r)=>{var d=st(r);return s.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,r){return v(s.get(r)??o(r,Reflect.get(a,r)))},has(a,r){return r===tt?!0:(v(s.get(r)??o(r,Reflect.get(a,r))),Reflect.has(a,r))},set(a,r,d){return S(s.get(r)??o(r,d),d),Reflect.set(a,r,d)}});C(this,f,(t.hydrate?mt:ht)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((i=t==null?void 0:t.props)!=null&&i.$$host)||t.sync===!1)&&et(),C(this,g,n.$$events);for(const a of Object.keys(l(this,f)))a==="$set"||a==="$destroy"||a==="$on"||rt(this,a,{get(){return l(this,f)[a]},set(r){l(this,f)[a]=r},enumerable:!0});l(this,f).$set=a=>{Object.assign(n,a)},l(this,f).$destroy=()=>{_t(l(this,f))}}$set(t){l(this,f).$set(t)}$on(t,s){l(this,g)[t]=l(this,g)[t]||[];const o=(...n)=>s.call(this,...n);return l(this,g)[t].push(o),()=>{l(this,g)[t]=l(this,g)[t].filter(n=>n!==o)}}$destroy(){l(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const Rt="modulepreload",kt=function(e,t){return new URL(e,t).href},z={},k=function(t,s,o){let n=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(s.map(u=>{if(u=kt(u,o),u in z)return;z[u]=!0;const y=u.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!o)for(let E=a.length-1;E>=0;E--){const c=a[E];if(c.href===u&&(!y||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${A}`))return;const h=document.createElement("link");if(h.rel=y?"stylesheet":Rt,y||(h.as="script"),h.crossOrigin="",h.href=u,d&&h.setAttribute("nonce",d),document.head.appendChild(h),y)return new Promise((E,c)=>{h.addEventListener("load",E),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return n.then(a=>{for(const r of a||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},qt={};var wt=F('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ot=F("<!> <!>",1);function Lt(e,t){at(t,!0);let s=j(t,"components",23,()=>[]),o=j(t,"data_0",3,null),n=j(t,"data_1",3,null);nt(()=>t.stores.page.set(t.page)),ot(()=>{t.stores,t.page,t.constructors,s(),t.form,o(),n(),t.stores.page.notify()});let i=D(!1),a=D(!1),r=D(null);Et(()=>{const c=t.stores.page.subscribe(()=>{v(i)&&(S(a,!0),it().then(()=>{S(r,yt(document.title||"untitled page"))}))});return S(i,!0),c});const d=I(()=>t.constructors[1]);var u=Ot(),y=x(u);{var A=c=>{var _=V();const w=I(()=>t.constructors[0]);var O=x(_);B(O,()=>v(w),(P,b)=>{U(b(P,{get data(){return o()},get form(){return t.form},children:(m,At)=>{var p=V(),H=x(p);B(H,()=>v(d),(J,K)=>{U(K(J,{get data(){return n()},get form(){return t.form}}),L=>s()[1]=L,()=>{var L;return(L=s())==null?void 0:L[1]})}),R(m,p)},$$slots:{default:!0}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),R(c,_)},Y=c=>{var _=V();const w=I(()=>t.constructors[0]);var O=x(_);B(O,()=>v(w),(P,b)=>{U(b(P,{get data(){return o()},get form(){return t.form}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),R(c,_)};q(y,c=>{t.constructors[1]?c(A):c(Y,!1)})}var h=lt(y,2);{var E=c=>{var _=wt(),w=ut(_);{var O=P=>{var b=gt();dt(()=>vt(b,v(r))),R(P,b)};q(w,P=>{v(a)&&P(O)})}ft(_),R(c,_)};q(h,c=>{v(i)&&c(E)})}R(e,u),ct()}const Bt=Pt(Lt),Ut=[()=>k(()=>import("../nodes/0.DYpTu2c7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url),()=>k(()=>import("../nodes/1.CMzTIGqo.js"),__vite__mapDeps([14,1,2,8,3,9,11,12,7]),import.meta.url),()=>k(()=>import("../nodes/2.C3G0MJIM.js"),__vite__mapDeps([15,1,2,8,5,16]),import.meta.url),()=>k(()=>import("../nodes/3.DY0cj8vI.js"),__vite__mapDeps([17,1,2,6,4,5,3,7,8,9,10,18]),import.meta.url),()=>k(()=>import("../nodes/4.D9yIHRuS.js"),__vite__mapDeps([19,1,2,6,4,5,3,7,8,9,10,18]),import.meta.url),()=>k(()=>import("../nodes/5.BrAg13RB.js"),__vite__mapDeps([20,1,2,6,4,5,3,7,8,9,10,18]),import.meta.url)],Yt=[],pt={"/":[2],"/about-doron-tal":[3],"/mindfulness-links":[4],"/mindfulness-questions-and-answers":[5]},xt={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},St=Object.fromEntries(Object.entries(xt.transport).map(([e,t])=>[e,t.decode])),Gt=!1,Wt=(e,t)=>St[e](t);export{Wt as decode,St as decoders,pt as dictionary,Gt as hash,xt as hooks,qt as matchers,Ut as nodes,Bt as root,Yt as server_loads};
import"../chunks/NZTpNUN0.js";import{a as se,s as Ie,o as Ke}from"../chunks/CQM_4Yuo.js";import{Q as We,M as S,A as xe,m as g,as as $e,ad as ea,ae as aa,af as Pe,z as be,y as _e,B as $,C as ta,D as na,L as ye,ai as la,ag as ra,aR as sa,K as Je,aE as ia,al as Re,I as qe,Z as da,aS as oa,aj as De,ak as Oe,aT as ua,aU as fa,aV as Ne,V as Se,w as ca,aW as va,G as ha,aX as _a,P as Le,aY as ma,T as ga,aZ as xa,O as ba,v as ya,a5 as ka,a3 as wa,p as me,f as W,d as C,r as M,t as X,b as I,c as ge,s as V,aH as G,a_ as Ea,aG as ae,a as U,a$ as Ca,j as Ge,n as fe,b0 as Ma,aF as Fe,aq as ie}from"../chunks/bTjt4kqQ.js";import{p as t,i as le,l as ee,s as de,c as ce}from"../chunks/BzHwYvkN.js";import{f as Na,d as pe}from"../chunks/u1fOtzWI.js";import{a as Y,b as Ae}from"../chunks/BHwFA_y9.js";import{i as Ta,p as ve}from"../chunks/CrHhXwB5.js";import{o as Ia}from"../chunks/BA6J67hQ.js";import"../chunks/Vcyrdod_.js";function Aa(i,e){return e}function Ba(i,e,a){for(var l=i.items,n=[],f=e.length,r=0;r<f;r++)va(e[r].e,n,!0);var u=f>0&&n.length===0&&a!==null;if(u){var h=a.parentNode;ha(h),h.append(a),l.clear(),Q(i,e[0].prev,e[f-1].next)}_a(n,()=>{for(var v=0;v<f;v++){var y=e[v];u||(l.delete(y.k),Q(i,y.prev,y.next)),Se(y.e,!u)}})}function Da(i,e,a,l,n,f=null){var r=i,u={flags:e,items:new Map,first:null};S&&xe();var h=null,v=!1,y=new Map,x=$e(()=>{var o=a();return da(o)?o:o==null?[]:qe(o)}),s,k;function d(){Sa(k,s,u,y,r,n,e,l,a),f!==null&&(s.length===0?h?De(h):h=ye(()=>f(r)):h!==null&&Oe(h,()=>{h=null}))}We(()=>{k??=Le,s=g(x);var o=s.length;if(v&&o===0)return;v=o===0;let b=!1;if(S){var E=ea(r)===aa;E!==(o===0)&&(r=Pe(),be(r),_e(!1),b=!0)}if(S){for(var w=null,c,_=0;_<o;_++){if($.nodeType===ta&&$.data===na){r=$,b=!0,_e(!1);break}var N=s[_],T=l(N,_);c=Be($,u,w,null,N,T,_,n,e,a),u.items.set(T,c),w=c}o>0&&be(Pe())}if(S)o===0&&f&&(h=ye(()=>f(r)));else if(la()){var B=new Set,z=ra;for(_=0;_<o;_+=1){N=s[_],T=l(N,_);var m=u.items.get(T)??y.get(T);m?je(m,N,_):(c=Be(null,u,null,null,N,T,_,n,e,a,!0),y.set(T,c)),B.add(T)}for(const[D,P]of u.items)B.has(D)||z.skipped_effects.add(P.e);z.add_callback(d)}else d();b&&_e(!0),g(x)}),S&&(r=$)}function Sa(i,e,a,l,n,f,r,u,h){var v=e.length,y=a.items,x=a.first,s=x,k,d=null,o=[],b=[],E,w,c,_;for(_=0;_<v;_+=1){if(E=e[_],w=u(E,_),c=y.get(w),c===void 0){var N=l.get(w);if(N!==void 0){l.delete(w),y.set(w,N);var T=d?d.next:s;Q(a,d,N),Q(a,N,T),Te(N,T,n),d=N}else{var B=s?s.e.nodes_start:n;d=Be(B,a,d,d===null?a.first:d.next,E,w,_,f,r,h)}y.set(w,d),o=[],b=[],s=d.next;continue}if(je(c,E,_),(c.e.f&Ne)!==0&&De(c.e),c!==s){if(k!==void 0&&k.has(c)){if(o.length<b.length){var z=b[0],m;d=z.prev;var D=o[0],P=o[o.length-1];for(m=0;m<o.length;m+=1)Te(o[m],z,n);for(m=0;m<b.length;m+=1)k.delete(b[m]);Q(a,D.prev,P.next),Q(a,d,D),Q(a,P,z),s=z,d=P,_-=1,o=[],b=[]}else k.delete(c),Te(c,s,n),Q(a,c.prev,c.next),Q(a,c,d===null?a.first:d.next),Q(a,d,c),d=c;continue}for(o=[],b=[];s!==null&&s.k!==w;)(s.e.f&Ne)===0&&(k??=new Set).add(s),b.push(s),s=s.next;if(s===null)continue;c=s}o.push(c),d=c,s=c.next}if(s!==null||k!==void 0){for(var j=k===void 0?[]:qe(k);s!==null;)(s.e.f&Ne)===0&&j.push(s),s=s.next;var Z=j.length;if(Z>0){var J=null;Ba(a,j,J)}}i.first=a.first&&a.first.e,i.last=d&&d.e;for(var K of l.values())Se(K.e);l.clear()}function je(i,e,a,l){sa(i.v,e),i.i=a}function Be(i,e,a,l,n,f,r,u,h,v,y){var x=(h&ua)!==0,s=(h&fa)===0,k=x?s?ia(n,!1,!1):Re(n):n,d=(h&oa)===0?r:Re(r),o={i:d,v:k,k:f,a:null,e:null,prev:a,next:l};try{if(i===null){var b=document.createDocumentFragment();b.append(i=Je())}return o.e=ye(()=>u(i,k,d,v),S),o.e.prev=a&&a.e,o.e.next=l&&l.e,a===null?y||(e.first=o):(a.next=o,a.e.next=o.e),l!==null&&(l.prev=o,l.e.prev=o.e),o}finally{}}function Te(i,e,a){for(var l=i.next?i.next.e.nodes_start:a,n=e?e.e.nodes_start:a,f=i.e.nodes_start;f!==null&&f!==l;){var r=ca(f);n.before(f),f=r}}function Q(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function re(i,e,a,l,n){S&&xe();var f=e.$$slots?.[a],r=!1;f===!0&&(f=e.children,r=!0),f===void 0||f(i,r?()=>l:l)}function Qe(i,e,a,l,n,f){let r=S;S&&xe();var u,h,v=null;S&&$.nodeType===ma&&(v=$,xe());var y=S?$:i,x;We(()=>{const s=e()||null;var k=a||s==="svg"?xa:null;s!==u&&(x&&(s===null?Oe(x,()=>{x=null,h=null}):s===h?De(x):Se(x)),s&&s!==h&&(x=ye(()=>{if(v=S?v:k?document.createElementNS(k,s):document.createElement(s),ba(v,v),l){S&&Na(s)&&v.append(document.createComment(""));var d=S?ya(v):v.appendChild(Je());S&&(d===null?_e(!1):be(d)),l(v,d)}Le.nodes_end=v,y.before(v)})),u=s,u&&(h=u))},ga),r&&(_e(!0),be(y))}function Me(i){var e=Symbol(),a=function(n){return ka(e,n)},l=function(){var n;return(n=wa(e))!==null&&n!==void 0?n:i};return[a,l,e]}var ke;ke=Me(),ke[0];ke[1];ke[2];pe(["click"]);var we,Ye=(we=Me({parent:"none",value:"",expanded:!1}),we[0]),za=we[1];we[2];var Pa=W('<nav data-testid="nav-bar-tileset"><!></nav>'),Ra=W('<aside data-testid="nav-bar"><!></aside>');function Ga(i,e){me(e,!0);const a=t(e,"base",3,"flex flex-col"),l=t(e,"background",3,"preset-filled-surface-100-900"),n=t(e,"width",3,"min-w-[320px] w-full"),f=t(e,"height",3,"h-20"),r=t(e,"padding",3,"p-1"),u=t(e,"classes",3,""),h=t(e,"tilesBase",3,"flex-1 flex"),v=t(e,"tilesFlexDirection",3,""),y=t(e,"tilesJustify",3,"justify-center"),x=t(e,"tilesItems",3,"items-center"),s=t(e,"tilesGap",3,"gap-1"),k=t(e,"tilesClasses",3,"");Ye({parent:"bar",get value(){return e.value},expanded:!1,get onValueChange(){return e.onValueChange}});var d=Ra(),o=C(d);{var b=E=>{var w=Pa(),c=C(w);se(c,()=>e.children),M(w),X(()=>Y(w,1,`${h()??""} ${v()??""} ${y()??""} ${x()??""} ${s()??""} ${k()??""}`)),I(E,w)};le(o,E=>{e.children&&E(b)})}M(d),X(()=>Y(d,1,`${a()??""} ${l()??""} ${n()??""} ${f()??""} ${r()??""} ${u()??""}`)),I(i,d),ge()}var Fa=W('<header data-testid="nav-rail-header"><!></header>'),Ha=W('<nav data-testid="nav-rail-tiles"><!></nav>'),Va=W('<footer data-testid="nav-rail-footer"><!></footer>'),Wa=W('<aside data-testid="nav-rail"><!> <!> <!></aside>');function He(i,e){me(e,!0);const a=t(e,"value",3,""),l=t(e,"expanded",3,!1),n=t(e,"base",3,"h-full flex flex-col"),f=t(e,"background",3,"preset-filled-surface-100-900"),r=t(e,"padding",3,"p-1"),u=t(e,"width",3,"w-24"),h=t(e,"widthExpanded",3,"w-64"),v=t(e,"height",3,"h-full"),y=t(e,"classes",3,""),x=t(e,"headerBase",3,"flex"),s=t(e,"headerFlexDirection",3,"flex-col"),k=t(e,"headerJustify",3,"justify-center"),d=t(e,"headerItems",3,"items-center"),o=t(e,"headerGap",3,"gap-1"),b=t(e,"headerClasses",3,""),E=t(e,"tilesBase",3,"flex-1 flex"),w=t(e,"tilesFlexDirection",3,"flex-col"),c=t(e,"tilesJustify",3,"justify-center"),_=t(e,"tilesItems",3,"items-center"),N=t(e,"tilesGap",3,"gap-1"),T=t(e,"tilesClasses",3,""),B=t(e,"footerBase",3,"flex"),z=t(e,"footerFlexDirection",3,"flex-col"),m=t(e,"footerJustify",3,"justify-center"),D=t(e,"footerItems",3,"items-center"),P=t(e,"footerGap",3,"gap-1"),j=t(e,"footerClasses",3,"");Ye({parent:"rail",get value(){return a()},get expanded(){return l()},get onValueChange(){return e.onValueChange}});let Z=G(()=>l()?h():u());var J=Wa(),K=C(J);{var q=R=>{var A=Fa(),ne=C(A);se(ne,()=>e.header),M(A),X(()=>Y(A,1,`${x()??""} ${s()??""} ${k()??""} ${d()??""} ${o()??""} ${b()??""}`)),I(R,A)};le(K,R=>{e.header&&R(q)})}var F=V(K,2);{var O=R=>{var A=Ha(),ne=C(A);se(ne,()=>e.tiles),M(A),X(()=>Y(A,1,`${E()??""} ${w()??""} ${c()??""} ${_()??""} ${N()??""} ${T()??""}`)),I(R,A)};le(F,R=>{e.tiles&&R(O)})}var L=V(F,2);{var te=R=>{var A=Va(),ne=C(A);se(ne,()=>e.footer),M(A),X(()=>Y(A,1,`${B()??""} ${z()??""} ${m()??""} ${D()??""} ${P()??""} ${j()??""}`)),I(R,A)};le(L,R=>{e.footer&&R(te)})}M(J),X(()=>Y(J,1,`${n()??""} ${f()??""} ${v()??""} ${r()??""} ${g(Z)??""} ${y()??""}`)),I(i,J),ge()}var Ja=W("<div><!></div>"),qa=W('<div data-testid="nav-tile-label"> </div>'),Oa=W('<div data-testid="nav-tile-label-expanded"> </div>'),La=W("<!> <!> <!>",1);function pa(i,e){const a=Ea();me(e,!0);const l=t(e,"id",3,a),n=t(e,"selected",3,void 0),f=t(e,"type",3,"button"),r=t(e,"base",3,"flex items-center"),u=t(e,"width",3,"w-full"),h=t(e,"aspect",3,"aspect-square"),v=t(e,"background",3,""),y=t(e,"hover",3,"hover:preset-filled-surface-50-950"),x=t(e,"active",3,"preset-filled-primary-500"),s=t(e,"padding",3,"p-2"),k=t(e,"gap",3,"gap-1"),d=t(e,"rounded",3,"rounded-container"),o=t(e,"classes",3,"flex-col justify-center"),b=t(e,"expandedPadding",3,"py-3 px-4"),E=t(e,"expandedGap",3,"gap-4"),w=t(e,"expandedClasses",3,""),c=t(e,"labelBase",3,"text-xs"),_=t(e,"labelClasses",3,""),N=t(e,"labelExpandedBase",3,""),T=t(e,"labelExpandedClasses",3,""),B=za(),z=G(()=>e.href?"a":"button"),m=G(()=>e.href?void 0:"button"),D=G(()=>B.parent==="bar"?"h-full":`${h()}`),P=G(()=>`${g(D)} ${s()} ${k()} ${o()}`),j=G(()=>`${b()} ${E()} ${w()}`),Z=G(()=>B.expanded?g(j):g(P)),J=G(()=>n()!==void 0?n():B.value===l()),K=G(()=>g(J)?x():`${v()} ${y()}`);function q(){if(e.onclick&&!l())throw new Error("No ID was provided");e.onclick&&l()&&e.onclick(l()),B.onValueChange?.(l())}var F=ae(),O=U(F);Qe(O,()=>g(z),!1,(L,te)=>{Ae(L,()=>({class:`${r()??""} ${u()??""} ${d()??""} ${g(K)??""} ${g(Z)??""}`,href:e.href,target:e.target,type:g(z)==="button"?f():void 0,title:e.title,role:g(m),onclick:q,tabindex:"0","data-testid":"nav-tile"}));var R=La(),A=U(R);{var ne=p=>{var H=Ja(),ue=C(H);se(ue,()=>e.children),M(H),I(p,H)};le(A,p=>{e.children&&p(ne)})}var ze=V(A,2);{var Ue=p=>{var H=qa(),ue=C(H,!0);M(H),X(()=>{Y(H,1,`${c()??""} ${_()??""}`),Ie(ue,e.label)}),I(p,H)};le(ze,p=>{e.label&&!B.expanded&&p(Ue)})}var Xe=V(ze,2);{var Ze=p=>{var H=Oa(),ue=C(H,!0);M(H),X(()=>{Y(H,1,`${N()??""} ${T()??""}`),Ie(ue,e.labelExpanded)}),I(p,H)};le(Xe,p=>{e.labelExpanded&&B.expanded&&p(Ze)})}I(te,R)}),I(i,F),ge()}const he=Object.assign(He,{Rail:He,Bar:Ga,Tile:pa});var Ee;Ee=Me({api:{},indicatorText:""}),Ee[0];Ee[1];Ee[2];var Ce;Ce=Me({fluid:!1,api:{}}),Ce[0];Ce[1];Ce[2];/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const ja={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Qa=Ca("<svg><!><!></svg>");function oe(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]),l=ee(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);me(e,!1);let n=t(e,"name",8,void 0),f=t(e,"color",8,"currentColor"),r=t(e,"size",8,24),u=t(e,"strokeWidth",8,2),h=t(e,"absoluteStrokeWidth",8,!1),v=t(e,"iconNode",24,()=>[]);const y=(...d)=>d.filter((o,b,E)=>!!o&&E.indexOf(o)===b).join(" ");Ta();var x=Qa();Ae(x,(d,o)=>({...ja,...l,width:r(),height:r(),stroke:f(),"stroke-width":d,class:o}),[()=>(fe(h()),fe(u()),fe(r()),Ge(()=>h()?Number(u())*24/Number(r()):u())),()=>(fe(n()),fe(a),Ge(()=>y("lucide-icon","lucide",n()?`lucide-${n()}`:"",a.class)))]);var s=C(x);Da(s,1,v,Aa,(d,o)=>{var b=G(()=>Ma(g(o),2));let E=()=>g(b)[0],w=()=>g(b)[1];var c=ae(),_=U(c);Qe(_,E,!0,(N,T)=>{Ae(N,()=>({...w()}))}),I(d,c)});var k=V(s);re(k,e,"default",{}),M(x),I(i,x),ge()}function Ya(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const l=[["path",{d:"M4 12h16"}],["path",{d:"M4 18h16"}],["path",{d:"M4 6h16"}]];oe(i,de({name:"menu"},()=>a,{get iconNode(){return l},children:(n,f)=>{var r=ae(),u=U(r);re(u,e,"default",{}),I(n,r)},$$slots:{default:!0}}))}function Ua(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const l=[["path",{d:"M12 2v2"}],["path",{d:"M13 8.129A4 4 0 0 1 15.873 11"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}],["path",{d:"M9 8a5 5 0 1 0 7 7 7 7 0 1 1-7-7"}]];oe(i,de({name:"sun-moon"},()=>a,{get iconNode(){return l},children:(n,f)=>{var r=ae(),u=U(r);re(u,e,"default",{}),I(n,r)},$$slots:{default:!0}}))}function Xa(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const l=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];oe(i,de({name:"house"},()=>a,{get iconNode(){return l},children:(n,f)=>{var r=ae(),u=U(r);re(u,e,"default",{}),I(n,r)},$$slots:{default:!0}}))}function Za(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const l=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];oe(i,de({name:"info"},()=>a,{get iconNode(){return l},children:(n,f)=>{var r=ae(),u=U(r);re(u,e,"default",{}),I(n,r)},$$slots:{default:!0}}))}function Ka(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const l=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];oe(i,de({name:"link"},()=>a,{get iconNode(){return l},children:(n,f)=>{var r=ae(),u=U(r);re(u,e,"default",{}),I(n,r)},$$slots:{default:!0}}))}function $a(i,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const l=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];oe(i,de({name:"circle-question-mark"},()=>a,{get iconNode(){return l},children:(n,f)=>{var r=ae(),u=U(r);re(u,e,"default",{}),I(n,r)},$$slots:{default:!0}}))}function et(i,e,a){ie(e,!g(e)),localStorage.setItem("darkMode",JSON.stringify(g(e),null,2)),a(g(e))}const at=(i,e)=>{ie(e,!g(e))},Ve=(i,e)=>{g(e)&&window.innerWidth<768&&(i.stopPropagation(),ie(e,!1))};var tt=()=>null,nt=W("<!> <!> <!> <!>",1),lt=()=>null,rt=W('<div class="flex h-screen flex-col"><header class="sticky top-0 z-10 backdrop-blur-md bg-surface-200-800" role="heading" aria-level="1"><div class="flex h-14 items-center p-2"><button type="button" class="btn-icon ml-1 md:hidden"><!></button> <div class="flex flex-auto justify-center"><span class="h6"> </span></div> <button type="button" class="btn-icon ml-auto mr-3"><!></button></div></header> <div class="relative flex flex-1 overflow-hidden"><div role="button" tabindex="-1"></div> <aside><div><!></div></aside> <div role="button" tabindex="-1" class="flex flex-1 flex-col overflow-hidden px-0"><main class="flex-1 overflow-y-auto p-4"><!></main></div></div></div>');function _t(i,e){me(e,!0);let a=Fe(!1);const l=m=>{m?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};Ke(()=>{const m=localStorage.getItem("darkMode");m?ie(a,m==="true"):ie(a,window.matchMedia("(prefers-color-scheme: dark)").matches,!0),l(g(a))});let n=Fe(!1);Ia(({from:m,to:D})=>{ie(n,!1)});function f(){const m=ve.url.pathname;return m==="/"?"Mindfulness Cultivation":m==="/about-doron-tal"?"Doron Tal - Background":m==="/mindfulness-questions-and-answers"?"Mindfulness Q&A":m==="/mindfulness-resources"?"Mindfulness Resources":"Mindfulness Cultivation"}var r=rt(),u=C(r),h=C(u),v=C(h);v.__click=[at,n];var y=C(v);Ya(y,{size:"24"}),M(v);var x=V(v,2),s=C(x),k=C(s,!0);M(s),M(x);var d=V(x,2);d.__click=[et,a,l];var o=C(d);Ua(o,{size:"24"}),M(d),M(h),M(u);var b=V(u,2),E=C(b);E.__click=[Ve,n],E.__keyup=[tt];let w;var c=V(E,2),_=C(c),N=C(_);{const m=D=>{var P=nt(),j=U(P);{let q=G(()=>ve.url.pathname==="/");ce(j,()=>he.Tile,(F,O)=>{O(F,{id:"0",labelExpanded:"Home",href:"/",get selected(){return g(q)},children:(L,te)=>{Xa(L,{})},$$slots:{default:!0}})})}var Z=V(j,2);{let q=G(()=>ve.url.pathname==="/mindfulness-questions-and-answers");ce(Z,()=>he.Tile,(F,O)=>{O(F,{id:"3",labelExpanded:"Mindfulness Q&A",href:"/mindfulness-questions-and-answers",get selected(){return g(q)},children:(L,te)=>{$a(L,{})},$$slots:{default:!0}})})}var J=V(Z,2);{let q=G(()=>ve.url.pathname==="/mindfulness-resources");ce(J,()=>he.Tile,(F,O)=>{O(F,{id:"2",labelExpanded:"Mindfulness Resources",href:"/mindfulness-resources",get selected(){return g(q)},children:(L,te)=>{Ka(L,{})},$$slots:{default:!0}})})}var K=V(J,2);{let q=G(()=>ve.url.pathname==="/about-doron-tal");ce(K,()=>he.Tile,(F,O)=>{O(F,{id:"1",labelExpanded:"About",href:"/about-doron-tal",get selected(){return g(q)},children:(L,te)=>{Za(L,{})},$$slots:{default:!0}})})}I(D,P)};ce(N,()=>he.Rail,(D,P)=>{P(D,{expanded:!0,tiles:m,$$slots:{tiles:!0}})})}M(_),M(c);var T=V(c,2);T.__click=[Ve,n],T.__keyup=[lt];var B=C(T),z=C(B);se(z,()=>e.children),M(B),M(T),M(b),M(r),X((m,D)=>{Ie(k,m),w=Y(E,1,"fixed inset-0 bg-gray-800 bg-opacity-50 md:hidden",null,w,D),Y(c,1,`p-0 bg-surface-100-900 md:block ${g(n)?"fixed left-0 top-14 z-20 w-64":"hidden"} md:relative`)},[f,()=>({"opacity-0":g(n)===!1,hidden:g(n)===!1,"opacity-50":g(n)&&window.innerWidth<768})]),I(i,r),ge()}pe(["click","keyup"]);export{_t as component};

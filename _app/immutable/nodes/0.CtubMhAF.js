import"../chunks/DsnmJJEf.js";import{a as se,s as Ee,o as Qe}from"../chunks/vZxs20mo.js";import{X as Fe,U as S,K as xe,z as g,at as Ue,ae as Xe,af as Ye,ag as De,J as be,I as _e,L as $,E as Ke,M as Ze,T as ye,aj as $e,ah as ea,aS as aa,S as Re,aF as ta,am as Ae,Q as Ge,j as na,aT as la,ak as Ne,al as He,aU as ra,aV as sa,aW as ke,a1 as Te,F as ia,aX as da,P as oa,aY as fa,l as We,aZ as ca,_ as ua,a_ as va,W as ha,D as _a,aa as ma,a8 as ga,p as me,f as J,d as C,r as M,t as Y,b as I,c as ge,s as W,aI as R,a$ as xa,aH as ae,a as X,b0 as ba,v as Be,A as ce,b1 as ya,aG as Se,ar as ie}from"../chunks/CmePI71Y.js";import{p as t,i as le,l as ee,s as de,c as ue}from"../chunks/CYymxRLb.js";import{f as ka,d as Je}from"../chunks/jToXL8qZ.js";import{a as U,b as Ce}from"../chunks/7kAWZY9J.js";import{i as wa,p as ve}from"../chunks/DDl9jyEM.js";import{o as Ea}from"../chunks/BrUovT5g.js";import"../chunks/BFaSRa1i.js";function Ca(s,e){return e}function Ma(s,e,a){for(var l=s.items,i=[],c=e.length,n=0;n<c;n++)da(e[n].e,i,!0);var f=c>0&&i.length===0&&a!==null;if(f){var h=a.parentNode;oa(h),h.append(a),l.clear(),Q(s,e[0].prev,e[c-1].next)}fa(i,()=>{for(var v=0;v<c;v++){var y=e[v];f||(l.delete(y.k),Q(s,y.prev,y.next)),Te(y.e,!f)}})}function Na(s,e,a,l,i,c=null){var n=s,f={flags:e,items:new Map,first:null};S&&xe();var h=null,v=!1,y=new Map,x=Ue(()=>{var o=a();return na(o)?o:o==null?[]:Ge(o)}),r,k;function d(){Ta(k,r,f,y,n,i,e,l,a),c!==null&&(r.length===0?h?Ne(h):h=ye(()=>c(n)):h!==null&&He(h,()=>{h=null}))}Fe(()=>{k??=We,r=g(x);var o=r.length;if(v&&o===0)return;v=o===0;let b=!1;if(S){var E=Xe(n)===Ye;E!==(o===0)&&(n=De(),be(n),_e(!1),b=!0)}if(S){for(var w=null,u,_=0;_<o;_++){if($.nodeType===Ke&&$.data===Ze){n=$,b=!0,_e(!1);break}var N=r[_],T=l(N,_);u=Me($,f,w,null,N,T,_,i,e,a),f.items.set(T,u),w=u}o>0&&be(De())}if(S)o===0&&c&&(h=ye(()=>c(n)));else if($e()){var A=new Set,z=ea;for(_=0;_<o;_+=1){N=r[_],T=l(N,_);var m=f.items.get(T)??y.get(T);m?Ve(m,N,_):(u=Me(null,f,null,null,N,T,_,i,e,a,!0),y.set(T,u)),A.add(T)}for(const[B,P]of f.items)A.has(B)||z.skipped_effects.add(P.e);z.add_callback(d)}else d();b&&_e(!0),g(x)}),S&&(n=$)}function Ta(s,e,a,l,i,c,n,f,h){var v=e.length,y=a.items,x=a.first,r=x,k,d=null,o=[],b=[],E,w,u,_;for(_=0;_<v;_+=1){if(E=e[_],w=f(E,_),u=y.get(w),u===void 0){var N=l.get(w);if(N!==void 0){l.delete(w),y.set(w,N);var T=d?d.next:r;Q(a,d,N),Q(a,N,T),we(N,T,i),d=N}else{var A=r?r.e.nodes_start:i;d=Me(A,a,d,d===null?a.first:d.next,E,w,_,c,n,h)}y.set(w,d),o=[],b=[],r=d.next;continue}if(Ve(u,E,_),(u.e.f&ke)!==0&&Ne(u.e),u!==r){if(k!==void 0&&k.has(u)){if(o.length<b.length){var z=b[0],m;d=z.prev;var B=o[0],P=o[o.length-1];for(m=0;m<o.length;m+=1)we(o[m],z,i);for(m=0;m<b.length;m+=1)k.delete(b[m]);Q(a,B.prev,P.next),Q(a,d,B),Q(a,P,z),r=z,d=P,_-=1,o=[],b=[]}else k.delete(u),we(u,r,i),Q(a,u.prev,u.next),Q(a,u,d===null?a.first:d.next),Q(a,d,u),d=u;continue}for(o=[],b=[];r!==null&&r.k!==w;)(r.e.f&ke)===0&&(k??=new Set).add(r),b.push(r),r=r.next;if(r===null)continue;u=r}o.push(u),d=u,r=u.next}if(r!==null||k!==void 0){for(var p=k===void 0?[]:Ge(k);r!==null;)(r.e.f&ke)===0&&p.push(r),r=r.next;var K=p.length;if(K>0){var V=null;Ma(a,p,V)}}s.first=a.first&&a.first.e,s.last=d&&d.e;for(var Z of l.values())Te(Z.e);l.clear()}function Ve(s,e,a,l){aa(s.v,e),s.i=a}function Me(s,e,a,l,i,c,n,f,h,v,y){var x=(h&ra)!==0,r=(h&sa)===0,k=x?r?ta(i,!1,!1):Ae(i):i,d=(h&la)===0?n:Ae(n),o={i:d,v:k,k:c,a:null,e:null,prev:a,next:l};try{if(s===null){var b=document.createDocumentFragment();b.append(s=Re())}return o.e=ye(()=>f(s,k,d,v),S),o.e.prev=a&&a.e,o.e.next=l&&l.e,a===null?y||(e.first=o):(a.next=o,a.e.next=o.e),l!==null&&(l.prev=o,l.e.prev=o.e),o}finally{}}function we(s,e,a){for(var l=s.next?s.next.e.nodes_start:a,i=e?e.e.nodes_start:a,c=s.e.nodes_start;c!==null&&c!==l;){var n=ia(c);i.before(c),c=n}}function Q(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function re(s,e,a,l,i){S&&xe();var c=e.$$slots?.[a],n=!1;c===!0&&(c=e.children,n=!0),c===void 0||c(s,n?()=>l:l)}function qe(s,e,a,l,i,c){let n=S;S&&xe();var f,h,v=null;S&&$.nodeType===ca&&(v=$,xe());var y=S?$:s,x;Fe(()=>{const r=e()||null;var k=a||r==="svg"?va:null;r!==f&&(x&&(r===null?He(x,()=>{x=null,h=null}):r===h?Ne(x):Te(x)),r&&r!==h&&(x=ye(()=>{if(v=S?v:k?document.createElementNS(k,r):document.createElement(r),ha(v,v),l){S&&ka(r)&&v.append(document.createComment(""));var d=S?_a(v):v.appendChild(Re());S&&(d===null?_e(!1):be(d)),l(v,d)}We.nodes_end=v,y.before(v)})),f=r,f&&(h=f))},ua),n&&(_e(!0),be(y))}function Ia(s){const e=Symbol();return[i=>ma(e,i),()=>ga(e)??s,e]}Je(["click"]);const[Le,Da,ct]=Ia({parent:"none",value:"",expanded:!1});var Aa=J('<nav data-testid="nav-bar-tileset"><!></nav>'),Ba=J('<aside data-testid="nav-bar"><!></aside>');function Sa(s,e){me(e,!0);const a=t(e,"base",3,"flex flex-col"),l=t(e,"background",3,"preset-filled-surface-100-900"),i=t(e,"width",3,"min-w-[320px] w-full"),c=t(e,"height",3,"h-20"),n=t(e,"padding",3,"p-1"),f=t(e,"classes",3,""),h=t(e,"tilesBase",3,"flex-1 flex"),v=t(e,"tilesFlexDirection",3,""),y=t(e,"tilesJustify",3,"justify-center"),x=t(e,"tilesItems",3,"items-center"),r=t(e,"tilesGap",3,"gap-1"),k=t(e,"tilesClasses",3,"");Le({parent:"bar",get value(){return e.value},expanded:!1,get onValueChange(){return e.onValueChange}});var d=Ba(),o=C(d);{var b=E=>{var w=Aa(),u=C(w);se(u,()=>e.children),M(w),Y(()=>U(w,1,`${h()??""} ${v()??""} ${y()??""} ${x()??""} ${r()??""} ${k()??""}`)),I(E,w)};le(o,E=>{e.children&&E(b)})}M(d),Y(()=>U(d,1,`${a()??""} ${l()??""} ${i()??""} ${c()??""} ${n()??""} ${f()??""}`)),I(s,d),ge()}var za=J('<header data-testid="nav-rail-header"><!></header>'),Pa=J('<nav data-testid="nav-rail-tiles"><!></nav>'),Fa=J('<footer data-testid="nav-rail-footer"><!></footer>'),Ra=J('<aside data-testid="nav-rail"><!> <!> <!></aside>');function ze(s,e){me(e,!0);const a=t(e,"value",3,""),l=t(e,"expanded",3,!1),i=t(e,"base",3,"h-full flex flex-col"),c=t(e,"background",3,"preset-filled-surface-100-900"),n=t(e,"padding",3,"p-1"),f=t(e,"width",3,"w-24"),h=t(e,"widthExpanded",3,"w-64"),v=t(e,"height",3,"h-full"),y=t(e,"classes",3,""),x=t(e,"headerBase",3,"flex"),r=t(e,"headerFlexDirection",3,"flex-col"),k=t(e,"headerJustify",3,"justify-center"),d=t(e,"headerItems",3,"items-center"),o=t(e,"headerGap",3,"gap-1"),b=t(e,"headerClasses",3,""),E=t(e,"tilesBase",3,"flex-1 flex"),w=t(e,"tilesFlexDirection",3,"flex-col"),u=t(e,"tilesJustify",3,"justify-center"),_=t(e,"tilesItems",3,"items-center"),N=t(e,"tilesGap",3,"gap-1"),T=t(e,"tilesClasses",3,""),A=t(e,"footerBase",3,"flex"),z=t(e,"footerFlexDirection",3,"flex-col"),m=t(e,"footerJustify",3,"justify-center"),B=t(e,"footerItems",3,"items-center"),P=t(e,"footerGap",3,"gap-1"),p=t(e,"footerClasses",3,"");Le({parent:"rail",get value(){return a()},get expanded(){return l()},get onValueChange(){return e.onValueChange}});let K=R(()=>l()?h():f());var V=Ra(),Z=C(V);{var q=F=>{var D=za(),ne=C(D);se(ne,()=>e.header),M(D),Y(()=>U(D,1,`${x()??""} ${r()??""} ${k()??""} ${d()??""} ${o()??""} ${b()??""}`)),I(F,D)};le(Z,F=>{e.header&&F(q)})}var G=W(Z,2);{var L=F=>{var D=Pa(),ne=C(D);se(ne,()=>e.tiles),M(D),Y(()=>U(D,1,`${E()??""} ${w()??""} ${u()??""} ${_()??""} ${N()??""} ${T()??""}`)),I(F,D)};le(G,F=>{e.tiles&&F(L)})}var O=W(G,2);{var te=F=>{var D=Fa(),ne=C(D);se(ne,()=>e.footer),M(D),Y(()=>U(D,1,`${A()??""} ${z()??""} ${m()??""} ${B()??""} ${P()??""} ${p()??""}`)),I(F,D)};le(O,F=>{e.footer&&F(te)})}M(V),Y(()=>U(V,1,`${i()??""} ${c()??""} ${v()??""} ${n()??""} ${g(K)??""} ${y()??""}`)),I(s,V),ge()}var Ga=J("<div><!></div>"),Ha=J('<div data-testid="nav-tile-label"> </div>'),Wa=J('<div data-testid="nav-tile-label-expanded"> </div>'),Ja=J("<!> <!> <!>",1);function Va(s,e){const a=xa();me(e,!0);const l=t(e,"id",3,a),i=t(e,"selected",3,void 0),c=t(e,"type",3,"button"),n=t(e,"base",3,"flex items-center"),f=t(e,"width",3,"w-full"),h=t(e,"aspect",3,"aspect-square"),v=t(e,"background",3,""),y=t(e,"hover",3,"hover:preset-filled-surface-50-950"),x=t(e,"active",3,"preset-filled-primary-500"),r=t(e,"padding",3,"p-2"),k=t(e,"gap",3,"gap-1"),d=t(e,"rounded",3,"rounded-container"),o=t(e,"classes",3,"flex-col justify-center"),b=t(e,"expandedPadding",3,"py-3 px-4"),E=t(e,"expandedGap",3,"gap-4"),w=t(e,"expandedClasses",3,""),u=t(e,"labelBase",3,"text-xs"),_=t(e,"labelClasses",3,""),N=t(e,"labelExpandedBase",3,""),T=t(e,"labelExpandedClasses",3,""),A=Da(),z=R(()=>e.href?"a":"button"),m=R(()=>e.href?void 0:"button"),B=R(()=>A.parent==="bar"?"h-full":`${h()}`),P=R(()=>`${g(B)} ${r()} ${k()} ${o()}`),p=R(()=>`${b()} ${E()} ${w()}`),K=R(()=>A.expanded?g(p):g(P)),V=R(()=>i()!==void 0?i():A.value===l()),Z=R(()=>g(V)?x():`${v()} ${y()}`);function q(){if(e.onclick&&!l())throw new Error("No ID was provided");e.onclick&&l()&&e.onclick(l()),A.onValueChange?.(l())}var G=ae(),L=X(G);qe(L,()=>g(z),!1,(O,te)=>{Ce(O,()=>({class:`${n()??""} ${f()??""} ${d()??""} ${g(Z)??""} ${g(K)??""}`,href:e.href,target:e.target,type:g(z)==="button"?c():void 0,title:e.title,role:g(m),onclick:q,tabindex:"0","data-testid":"nav-tile"}));var F=Ja(),D=X(F);{var ne=j=>{var H=Ga(),fe=C(H);se(fe,()=>e.children),M(H),I(j,H)};le(D,j=>{e.children&&j(ne)})}var Ie=W(D,2);{var Oe=j=>{var H=Ha(),fe=C(H,!0);M(H),Y(()=>{U(H,1,`${u()??""} ${_()??""}`),Ee(fe,e.label)}),I(j,H)};le(Ie,j=>{e.label&&!A.expanded&&j(Oe)})}var je=W(Ie,2);{var pe=j=>{var H=Wa(),fe=C(H,!0);M(H),Y(()=>{U(H,1,`${N()??""} ${T()??""}`),Ee(fe,e.labelExpanded)}),I(j,H)};le(je,j=>{e.labelExpanded&&A.expanded&&j(pe)})}I(te,F)}),I(s,G),ge()}const he=Object.assign(ze,{Rail:ze,Bar:Sa,Tile:Va});/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var La=ba("<svg><!><!></svg>");function oe(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]),l=ee(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);me(e,!1);let i=t(e,"name",8,void 0),c=t(e,"color",8,"currentColor"),n=t(e,"size",8,24),f=t(e,"strokeWidth",8,2),h=t(e,"absoluteStrokeWidth",8,!1),v=t(e,"iconNode",24,()=>[]);const y=(...d)=>d.filter((o,b,E)=>!!o&&E.indexOf(o)===b).join(" ");wa();var x=La();Ce(x,(d,o)=>({...qa,...l,width:n(),height:n(),stroke:c(),"stroke-width":d,class:o}),[()=>(ce(h()),ce(f()),ce(n()),Be(()=>h()?Number(f())*24/Number(n()):f())),()=>(ce(i()),ce(a),Be(()=>y("lucide-icon","lucide",i()?`lucide-${i()}`:"",a.class)))]);var r=C(x);Na(r,1,v,Ca,(d,o)=>{var b=R(()=>ya(g(o),2));let E=()=>g(b)[0],w=()=>g(b)[1];var u=ae(),_=X(u);qe(_,E,!0,(N,T)=>{Ce(N,()=>({...w()}))}),I(d,u)});var k=W(r);re(k,e,"default",{}),M(x),I(s,x),ge()}function Oa(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];oe(s,de({name:"menu"},()=>a,{get iconNode(){return l},children:(i,c)=>{var n=ae(),f=X(n);re(f,e,"default",{}),I(i,n)},$$slots:{default:!0}}))}function ja(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M12 2v2"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}],["path",{d:"M16 12a4 4 0 0 0-4-4"}],["path",{d:"m19 5-1.256 1.256"}],["path",{d:"M20 12h2"}]];oe(s,de({name:"sun-moon"},()=>a,{get iconNode(){return l},children:(i,c)=>{var n=ae(),f=X(n);re(f,e,"default",{}),I(i,n)},$$slots:{default:!0}}))}function pa(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];oe(s,de({name:"house"},()=>a,{get iconNode(){return l},children:(i,c)=>{var n=ae(),f=X(n);re(f,e,"default",{}),I(i,n)},$$slots:{default:!0}}))}function Qa(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];oe(s,de({name:"info"},()=>a,{get iconNode(){return l},children:(i,c)=>{var n=ae(),f=X(n);re(f,e,"default",{}),I(i,n)},$$slots:{default:!0}}))}function Ua(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];oe(s,de({name:"link"},()=>a,{get iconNode(){return l},children:(i,c)=>{var n=ae(),f=X(n);re(f,e,"default",{}),I(i,n)},$$slots:{default:!0}}))}function Xa(s,e){const a=ee(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.543.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const l=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];oe(s,de({name:"circle-question-mark"},()=>a,{get iconNode(){return l},children:(i,c)=>{var n=ae(),f=X(n);re(f,e,"default",{}),I(i,n)},$$slots:{default:!0}}))}function Ya(s,e,a){ie(e,!g(e)),localStorage.setItem("darkMode",JSON.stringify(g(e),null,2)),a(g(e))}const Ka=(s,e)=>{ie(e,!g(e))},Pe=(s,e)=>{g(e)&&window.innerWidth<768&&(s.stopPropagation(),ie(e,!1))};var Za=()=>null,$a=J("<!> <!> <!> <!>",1),et=()=>null,at=J('<div class="flex h-screen flex-col"><header class="sticky top-0 z-10 backdrop-blur-md bg-surface-200-800" role="heading" aria-level="1"><div class="flex h-14 items-center p-2"><button type="button" class="btn-icon ml-1 md:hidden"><!></button> <div class="flex flex-auto justify-center"><span class="h6"> </span></div> <button type="button" class="btn-icon ml-auto mr-3"><!></button></div></header> <div class="relative flex flex-1 overflow-hidden"><div role="button" tabindex="-1"></div> <aside><div><!></div></aside> <div role="button" tabindex="-1" class="flex flex-1 flex-col overflow-hidden px-0"><main class="flex-1 overflow-y-auto p-4"><!></main></div></div></div>');function ut(s,e){me(e,!0);let a=Se(!1);const l=m=>{m?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};Qe(()=>{const m=localStorage.getItem("darkMode");m?ie(a,m==="true"):ie(a,window.matchMedia("(prefers-color-scheme: dark)").matches,!0),l(g(a))});let i=Se(!1);Ea(({from:m,to:B})=>{ie(i,!1)});function c(){const m=ve.url.pathname;return m==="/"?"Mindfulness Cultivation":m==="/about-doron-tal"?"Doron Tal - Background":m==="/mindfulness-questions-and-answers"?"Mindfulness Q&A":m==="/mindfulness-resources"?"Mindfulness Resources":"Mindfulness Cultivation"}var n=at(),f=C(n),h=C(f),v=C(h);v.__click=[Ka,i];var y=C(v);Oa(y,{size:"24"}),M(v);var x=W(v,2),r=C(x),k=C(r,!0);M(r),M(x);var d=W(x,2);d.__click=[Ya,a,l];var o=C(d);ja(o,{size:"24"}),M(d),M(h),M(f);var b=W(f,2),E=C(b);E.__click=[Pe,i],E.__keyup=[Za];let w;var u=W(E,2),_=C(u),N=C(_);{const m=B=>{var P=$a(),p=X(P);{let q=R(()=>ve.url.pathname==="/");ue(p,()=>he.Tile,(G,L)=>{L(G,{id:"0",labelExpanded:"Home",href:"/",get selected(){return g(q)},children:(O,te)=>{pa(O,{})},$$slots:{default:!0}})})}var K=W(p,2);{let q=R(()=>ve.url.pathname==="/mindfulness-questions-and-answers");ue(K,()=>he.Tile,(G,L)=>{L(G,{id:"3",labelExpanded:"Mindfulness Q&A",href:"/mindfulness-questions-and-answers",get selected(){return g(q)},children:(O,te)=>{Xa(O,{})},$$slots:{default:!0}})})}var V=W(K,2);{let q=R(()=>ve.url.pathname==="/mindfulness-resources");ue(V,()=>he.Tile,(G,L)=>{L(G,{id:"2",labelExpanded:"Mindfulness Resources",href:"/mindfulness-resources",get selected(){return g(q)},children:(O,te)=>{Ua(O,{})},$$slots:{default:!0}})})}var Z=W(V,2);{let q=R(()=>ve.url.pathname==="/about-doron-tal");ue(Z,()=>he.Tile,(G,L)=>{L(G,{id:"1",labelExpanded:"About",href:"/about-doron-tal",get selected(){return g(q)},children:(O,te)=>{Qa(O,{})},$$slots:{default:!0}})})}I(B,P)};ue(N,()=>he.Rail,(B,P)=>{P(B,{expanded:!0,tiles:m,$$slots:{tiles:!0}})})}M(_),M(u);var T=W(u,2);T.__click=[Pe,i],T.__keyup=[et];var A=C(T),z=C(A);se(z,()=>e.children),M(A),M(T),M(b),M(n),Y((m,B)=>{Ee(k,m),w=U(E,1,"fixed inset-0 bg-gray-800 bg-opacity-50 md:hidden",null,w,B),U(u,1,`p-0 bg-surface-100-900 md:block ${g(i)?"fixed left-0 top-14 z-20 w-64":"hidden"} md:relative`)},[c,()=>({"opacity-0":g(i)===!1,hidden:g(i)===!1,"opacity-50":g(i)&&window.innerWidth<768})]),I(s,n),ge()}Je(["click","keyup"]);export{ut as component};

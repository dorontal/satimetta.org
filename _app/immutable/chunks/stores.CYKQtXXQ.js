import{x as g,y as d,g as l,z as _,A as f,B as u,u as m,C as v,E as h}from"./runtime.BKwOscGd.js";import{s as k}from"./entry.C50Ljwrq.js";function A(s=!1){const e=g,t=e.l.u;if(!t)return;let a=()=>_(e.s);if(s){let n=0,r={};const b=h(()=>{let c=!1;const i=e.s;for(const o in i)i[o]!==r[o]&&(r[o]=i[o],c=!0);return c&&n++,n});a=()=>l(b)}t.b.length&&d(()=>{p(e,a),f(t.b)}),u(()=>{const n=m(()=>t.m.map(v));return()=>{for(const r of n)typeof r=="function"&&r()}}),t.a.length&&u(()=>{p(e,a),f(t.a)})}function p(s,e){if(s.l.s)for(const t of s.l.s)l(t);e()}const x=()=>{const s=k;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},B={subscribe(s){return x().page.subscribe(s)}};export{A as i,B as p};
import{S as W,i as Z,s as $,M as q,k as y,a as L,l as N,m as v,h as E,c as H,n as T,b as M,E as p,N as F,O as j,P as z,f as D,g as x,d as tt,t as P,$ as et,o as st,a0 as at,q as k,w as ot,r as B,x as lt,y as nt,z as rt,B as it,L as ft,u as R}from"../../../chunks/index-2790eb25.js";import{c as O}from"../../../chunks/singletons-80be6678.js";function ct(a,t){return a>t?1:a<t?-1:0}function ht(a,t){return a-t}function _t(a){return(t,l)=>{for(let n of a(t,l))if(n)return n;return 0}}const dt=a=>({}),K=a=>({});function X(a,t,l){const n=a.slice();return n[11]=t[l],n}const ut=a=>({item:a&4}),Y=a=>({item:a[11]}),mt=a=>({}),G=a=>({});function J(a){let t;const l=a[6].tbody,n=q(l,a,a[5],Y);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,_){n&&n.m(r,_),t=!0},p(r,_){n&&n.p&&(!t||_&36)&&F(n,l,r,r[5],t?z(l,r[5],_,ut):j(r[5]),Y)},i(r){t||(D(n,r),t=!0)},o(r){P(n,r),t=!1},d(r){n&&n.d(r)}}}function gt(a){let t,l,n,r,_,g,b,d;const e=a[6].thead,f=q(e,a,a[5],G);let u=a[2],h=[];for(let s=0;s<u.length;s+=1)h[s]=J(X(a,u,s));const S=s=>P(h[s],1,1,()=>{h[s]=null}),o=a[6].tfoot,i=q(o,a,a[5],K);return{c(){t=y("table"),l=y("thead"),f&&f.c(),n=L(),r=y("tbody");for(let s=0;s<h.length;s+=1)h[s].c();_=L(),g=y("tfoot"),i&&i.c(),this.h()},l(s){t=N(s,"TABLE",{class:!0});var c=v(t);l=N(c,"THEAD",{class:!0});var m=v(l);f&&f.l(m),m.forEach(E),n=H(c),r=N(c,"TBODY",{});var A=v(r);for(let I=0;I<h.length;I+=1)h[I].l(A);A.forEach(E),_=H(c),g=N(c,"TFOOT",{});var C=v(g);i&&i.l(C),C.forEach(E),c.forEach(E),this.h()},h(){T(l,"class","svelte-73vfkj"),T(t,"class",b=Q+" "+a[0])},m(s,c){M(s,t,c),p(t,l),f&&f.m(l,null),a[7](l),p(t,n),p(t,r);for(let m=0;m<h.length;m+=1)h[m].m(r,null);p(t,_),p(t,g),i&&i.m(g,null),d=!0},p(s,[c]){if(f&&f.p&&(!d||c&32)&&F(f,e,s,s[5],d?z(e,s[5],c,mt):j(s[5]),G),c&36){u=s[2];let m;for(m=0;m<u.length;m+=1){const A=X(s,u,m);h[m]?(h[m].p(A,c),D(h[m],1)):(h[m]=J(A),h[m].c(),D(h[m],1),h[m].m(r,null))}for(x(),m=u.length;m<h.length;m+=1)S(m);tt()}i&&i.p&&(!d||c&32)&&F(i,o,s,s[5],d?z(o,s[5],c,dt):j(s[5]),K),(!d||c&1&&b!==(b=Q+" "+s[0]))&&T(t,"class",b)},i(s){if(!d){D(f,s);for(let c=0;c<u.length;c+=1)D(h[c]);D(i,s),d=!0}},o(s){P(f,s),h=h.filter(Boolean);for(let c=0;c<h.length;c+=1)P(h[c]);P(i,s),d=!1},d(s){s&&E(t),f&&f.d(s),a[7](null),et(h,s),i&&i.d(s)}}}const Q="tablesort",w="sortable",U="ascending",V="descending";function pt(a,t,l){let n,{$$slots:r={},$$scope:_}=t,{items:g}=t,{class:b=""}=t,d,e=[[]];const f=function(o,i){return o.sort(_t(function*(s,c){for(let[m,A]of i){const C=A===0?1:-1;typeof s[m]=="number"?yield C*ht(s[m],c[m]):yield C*ct(s[m],c[m])}})),o};function u(o,i){const s=o.dataset.sort;i?e[e.length-1][0]===s?l(4,e[e.length-1]=[s,(e[e.length-1][1]+1)%2],e):l(4,e=[...e,[s,0]]):e.length===1&&e[0][0]===s?l(4,e[0]=[s,(e[0][1]+1)%2],e):(h(),l(4,e=[[s,0]])),o.className=o.dataset.orgClass+" "+w+" "+(e[e.length-1][1]?V:U)}function h(){const o=d.getElementsByTagName("th");for(let i=0;i<o.length;i++)o[i].dataset.sort&&(o[i].className=o[i].dataset.orgClass+" "+w)}st(()=>{const o=d.getElementsByTagName("th");for(let i=0;i<o.length;i++)o[i].dataset.sort&&(o[i].dataset.orgClass=o[i].className,o[i].className=o[i].dataset.orgClass+" "+w,o[i].onclick=s=>u(o[i],s.shiftKey)),o[i].dataset.sortInitial==="descending"?(o[i].className=o[i].dataset.orgClass+" "+w+" "+V,l(4,e=[...e,[o[i].dataset.sort,1]])):o[i].dataset.sortInitial!=null&&(o[i].className=o[i].dataset.orgClass+" "+w+" "+U,l(4,e=[...e,[o[i].dataset.sort,0]]))});function S(o){at[o?"unshift":"push"](()=>{d=o,l(1,d)})}return a.$$set=o=>{"items"in o&&l(3,g=o.items),"class"in o&&l(0,b=o.class),"$$scope"in o&&l(5,_=o.$$scope)},a.$$.update=()=>{a.$$.dirty&24&&l(2,n=f([...g],e))},[b,d,n,g,e,_,r,S]}class bt extends W{constructor(t){super(),Z(this,t,pt,gt,$,{items:3,class:0})}}O.disable_scroll_handling;const Et=O.goto;O.invalidate;O.invalidateAll;O.prefetch;O.prefetch_routes;O.before_navigate;O.after_navigate;function yt(a){let t,l,n,r,_,g,b,d,e;return{c(){t=y("tr"),l=y("th"),n=k("Name"),r=L(),_=y("th"),g=k("Height"),b=L(),d=y("th"),e=k("Birth year"),this.h()},l(f){t=N(f,"TR",{class:!0,slot:!0});var u=v(t);l=N(u,"TH",{"data-sort":!0,"data-sort-initial":!0});var h=v(l);n=B(h,"Name"),h.forEach(E),r=H(u),_=N(u,"TH",{"data-sort":!0});var S=v(_);g=B(S,"Height"),S.forEach(E),b=H(u),d=N(u,"TH",{"data-sort":!0});var o=v(d);e=B(o,"Birth year"),o.forEach(E),u.forEach(E),this.h()},h(){T(l,"data-sort","name"),T(l,"data-sort-initial",""),T(_,"data-sort","height"),T(d,"data-sort","birth_year"),T(t,"class","text-left"),T(t,"slot","thead")},m(f,u){M(f,t,u),p(t,l),p(l,n),p(t,r),p(t,_),p(_,g),p(t,b),p(t,d),p(d,e)},p:it,d(f){f&&E(t)}}}function Nt(a){let t,l,n=a[2].name+"",r,_,g,b=a[2].height+"",d,e,f,u=a[2].birth_year+"",h,S,o;function i(){return a[1](a[2])}return{c(){t=y("tr"),l=y("td"),r=k(n),_=L(),g=y("td"),d=k(b),e=L(),f=y("td"),h=k(u),this.h()},l(s){t=N(s,"TR",{class:!0,slot:!0});var c=v(t);l=N(c,"TD",{});var m=v(l);r=B(m,n),m.forEach(E),_=H(c),g=N(c,"TD",{});var A=v(g);d=B(A,b),A.forEach(E),e=H(c),f=N(c,"TD",{});var C=v(f);h=B(C,u),C.forEach(E),c.forEach(E),this.h()},h(){T(t,"class","hover:bg-primary-light cursor-pointer"),T(t,"slot","tbody")},m(s,c){M(s,t,c),p(t,l),p(l,r),p(t,_),p(t,g),p(g,d),p(t,e),p(t,f),p(f,h),S||(o=ft(t,"click",i),S=!0)},p(s,c){a=s,c&4&&n!==(n=a[2].name+"")&&R(r,n),c&4&&b!==(b=a[2].height+"")&&R(d,b),c&4&&u!==(u=a[2].birth_year+"")&&R(h,u)},d(s){s&&E(t),S=!1,o()}}}function vt(a){let t,l,n,r,_,g,b,d;return r=new bt({props:{class:"min-w-full",items:a[0].items,$$slots:{tbody:[Nt,({item:e})=>({2:e}),({item:e})=>e?4:0],thead:[yt]},$$scope:{ctx:a}}}),{c(){t=y("h1"),l=k("People"),n=L(),ot(r.$$.fragment),_=L(),g=y("a"),b=k("No such id"),this.h()},l(e){t=N(e,"H1",{});var f=v(t);l=B(f,"People"),f.forEach(E),n=H(e),lt(r.$$.fragment,e),_=H(e),g=N(e,"A",{href:!0});var u=v(g);b=B(u,"No such id"),u.forEach(E),this.h()},h(){T(g,"href","/people/X")},m(e,f){M(e,t,f),p(t,l),M(e,n,f),nt(r,e,f),M(e,_,f),M(e,g,f),p(g,b),d=!0},p(e,[f]){const u={};f&1&&(u.items=e[0].items),f&12&&(u.$$scope={dirty:f,ctx:e}),r.$set(u)},i(e){d||(D(r.$$.fragment,e),d=!0)},o(e){P(r.$$.fragment,e),d=!1},d(e){e&&E(t),e&&E(n),rt(r,e),e&&E(_),e&&E(g)}}}function Tt(a,t,l){let{data:n}=t;const r=_=>Et(`/people/${_.id}`);return a.$$set=_=>{"data"in _&&l(0,n=_.data)},[n,r]}class Ct extends W{constructor(t){super(),Z(this,t,Tt,vt,$,{data:0})}}export{Ct as default};

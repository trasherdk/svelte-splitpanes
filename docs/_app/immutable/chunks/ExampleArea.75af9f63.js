import{S as M,i as j,s as k,e as _,M as D,b as p,d as $,N as L,g as h,h as g,j as y,k as C,K as w,O as x,P as c,a as O,Q as T,f as P,R as f,T as R,o as m,U as u,V as S,n as d}from"./external.90c63fce.js";function V(l){let t,e,i;return{c(){t=_("pre"),e=_("code"),i=new D(!1),this.h()},l(a){t=p(a,"PRE",{"data-language":!0});var n=$(t);e=p(n,"CODE",{class:!0});var r=$(e);i=L(r,!1),r.forEach(h),n.forEach(h),this.h()},h(){i.a=null,g(e,"class","hljs"),g(t,"data-language",l[0])},m(a,n){y(a,t,n),C(t,e),i.m(l[1],e)},p(a,[n]){n&2&&i.p(a[1]),n&1&&g(t,"data-language",a[0])},i:w,o:w,d(a){a&&h(t)}}}function b(l,t,e){let{lang:i}=t,{highlighted:a}=t;return l.$$set=n=>{"lang"in n&&e(0,i=n.lang),"highlighted"in n&&e(1,a=n.highlighted)},[i,a]}class q extends M{constructor(t){super(),j(this,t,b,V,k,{lang:0,highlighted:1})}}function A(l){let t,e,i,a,n;var r=l[0].component;function v(s){return{}}return r&&(e=x(r,v())),a=new q({props:{lang:"svelte",highlighted:l[0].highlightedHTML}}),{c(){t=_("div"),e&&c(e.$$.fragment),i=O(),c(a.$$.fragment)},l(s){t=p(s,"DIV",{});var o=$(t);e&&T(e.$$.fragment,o),i=P(o),T(a.$$.fragment,o),o.forEach(h)},m(s,o){y(s,t,o),e&&f(e,t,null),C(t,i),f(a,t,null),n=!0},p(s,[o]){if(o&1&&r!==(r=s[0].component)){if(e){R();const H=e;m(H.$$.fragment,1,0,()=>{u(H,1)}),S()}r?(e=x(r,v()),c(e.$$.fragment),d(e.$$.fragment,1),f(e,t,i)):e=null}const E={};o&1&&(E.highlighted=s[0].highlightedHTML),a.$set(E)},i(s){n||(e&&d(e.$$.fragment,s),d(a.$$.fragment,s),n=!0)},o(s){e&&m(e.$$.fragment,s),m(a.$$.fragment,s),n=!1},d(s){s&&h(t),e&&u(e),u(a)}}}function I(l,t,e){let{example:i}=t;return l.$$set=a=>{"example"in a&&e(0,i=a.example)},[i]}class N extends M{constructor(t){super(),j(this,t,I,A,k,{example:0})}}export{N as E,q as H};

parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"ENeC":[function(require,module,exports) {
!function(r){"use strict";function n(r,n,e){return e.a=r,e.f=n,e}function e(r){return n(2,r,function(n){return function(e){return r(n,e)}})}function t(r){return n(3,r,function(n){return function(e){return function(t){return r(n,e,t)}}})}function a(r){return n(4,r,function(n){return function(e){return function(t){return function(a){return r(n,e,t,a)}}}})}function u(r){return n(5,r,function(n){return function(e){return function(t){return function(a){return function(u){return r(n,e,t,a,u)}}}}})}function i(r){return n(6,r,function(n){return function(e){return function(t){return function(a){return function(u){return function(i){return r(n,e,t,a,u,i)}}}}}})}function o(r,n,e){return 2===r.a?r.f(n,e):r(n)(e)}function f(r,n,e,t){return 3===r.a?r.f(n,e,t):r(n)(e)(t)}function c(r,n,e,t,a){return 4===r.a?r.f(n,e,t,a):r(n)(e)(t)(a)}function s(r,n,e,t,a,u){return 5===r.a?r.f(n,e,t,a,u):r(n)(e)(t)(a)(u)}function v(r,n,e,t,a,u,i){return 6===r.a?r.f(n,e,t,a,u,i):r(n)(e)(t)(a)(u)(i)}var b=t(function(r,n,e){for(var t=Array(r),a=0;r>a;a++)t[a]=e(n+a);return t}),l=e(function(r,n){for(var e=Array(r),t=0;r>t&&n.b;t++)e[t]=n.a,n=n.b;return e.length=t,E(e,n)}),d={$:0};function h(r,n){return{$:1,a:r,b:n}}var g=e(h);function A(r){for(var n=d,e=r.length;e--;)n=h(r[e],n);return n}function m(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}function p(r,n,e){if("object"!=typeof r)return r===n?0:n>r?-1:1;if(!r.$)return(e=p(r.a,n.a))?e:(e=p(r.b,n.b))?e:p(r.c,n.c);for(;r.b&&n.b&&!(e=p(r.a,n.a));r=r.b,n=n.b);return e||(r.b?1:n.b?-1:0)}var T=e(function(r,n){var e=p(r,n);return 0>e?xn:e?kn:Bn});function E(r,n){return{a:r,b:n}}function _(r,n,e){return{a:r,b:n,c:e}}var y=Math.ceil,F=Math.floor,$=Math.log,w=e(function(r,n){return new Float64Array([r,n])}),R=new Float64Array(3),S=new Float64Array(3),L=new Float64Array(3),C=t(function(r,n,e){return new Float64Array([r,n,e])});function O(r,n,e){return void 0===e&&(e=new Float64Array(3)),N(function(r,n,e){return void 0===e&&(e=new Float64Array(3)),e[0]=r[0]-n[0],e[1]=r[1]-n[1],e[2]=r[2]-n[2],e}(r,n,e),e)}function N(r,n){void 0===n&&(n=new Float64Array(3));var e=1/function(r){return Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2])}(r);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n}var I=N,P=e(function(r,n){return new Float64Array([n[0]*r,n[1]*r,n[2]*r])});function B(r,n,e){return void 0===e&&(e=new Float64Array(3)),e[0]=r[1]*n[2]-r[2]*n[1],e[1]=r[2]*n[0]-r[0]*n[2],e[2]=r[0]*n[1]-r[1]*n[0],e}var x=new Float64Array(16),U=new Float64Array(16);new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);var k=a(function(r,n,e,t){var a=e*Math.tan(r*Math.PI/360),u=-a;return function(r,n,e,t,a,u){var i=new Float64Array(16);return i[0]=2*a/(n-r),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*a/(t-e),i[6]=0,i[7]=0,i[8]=(n+r)/(n-r),i[9]=(t+e)/(t-e),i[10]=-(u+a)/(u-a),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*u*a/(u-a),i[15]=0,i}(u*n,a*n,u,a,e,t)});function j(r,n){var e=new Float64Array(16),t=r[0],a=r[1],u=r[2],i=r[3],o=r[4],f=r[5],c=r[6],s=r[7],v=r[8],b=r[9],l=r[10],d=r[11],h=r[12],g=r[13],A=r[14],m=r[15],p=n[0],T=n[1],E=n[2],_=n[3],y=n[4],F=n[5],$=n[6],w=n[7],R=n[8],S=n[9],L=n[10],C=n[11],O=n[12],N=n[13],I=n[14],P=n[15];return e[0]=t*p+o*T+v*E+h*_,e[1]=a*p+f*T+b*E+g*_,e[2]=u*p+c*T+l*E+A*_,e[3]=i*p+s*T+d*E+m*_,e[4]=t*y+o*F+v*$+h*w,e[5]=a*y+f*F+b*$+g*w,e[6]=u*y+c*F+l*$+A*w,e[7]=i*y+s*F+d*$+m*w,e[8]=t*R+o*S+v*L+h*C,e[9]=a*R+f*S+b*L+g*C,e[10]=u*R+c*S+l*L+A*C,e[11]=i*R+s*S+d*L+m*C,e[12]=t*O+o*N+v*I+h*P,e[13]=a*O+f*N+b*I+g*P,e[14]=u*O+c*N+l*I+A*P,e[15]=i*O+s*N+d*I+m*P,e}var D=e(j),M=t(function(r,n,e){var t=O(r,n,R),a=N(B(e,t,S),S),u=N(B(t,a,L),L),i=x,o=U;return i[0]=a[0],i[1]=u[0],i[2]=t[0],i[3]=0,i[4]=a[1],i[5]=u[1],i[6]=t[1],i[7]=0,i[8]=a[2],i[9]=u[2],i[10]=t[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=-r[0],o[13]=-r[1],o[14]=-r[2],o[15]=1,j(i,o)}),q=e(function(r,n){return V(r,K(n))});function V(r,n){switch(r.$){case 3:return"boolean"==typeof n?Fe(n):X("a BOOL",n);case 2:return"number"!=typeof n?X("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Fe(n):!isFinite(n)||n%1?X("an INT",n):Fe(n);case 4:return"number"==typeof n?Fe(n):X("a FLOAT",n);case 6:return"string"==typeof n?Fe(n):n instanceof String?Fe(n+""):X("a STRING",n);case 9:return null===n?Fe(r.c):X("null",n);case 5:return Fe(W(n));case 7:return Array.isArray(n)?z(r.b,n,A):X("a LIST",n);case 8:return Array.isArray(n)?z(r.b,n,G):X("an ARRAY",n);case 10:var e=r.d;if("object"!=typeof n||null===n||!(e in n))return X("an OBJECT with a field named `"+e+"`",n);var t=V(r.b,n[e]);return ae(t)?t:ye(o(we,e,t.a));case 11:var a=r.e;return Array.isArray(n)?n.length>a?(t=V(r.b,n[a]),ae(t)?t:ye(o(Re,a,t.a))):X("a LONGER array. Need index "+a+" but only see "+n.length+" entries",n):X("an ARRAY",n);case 12:if("object"!=typeof n||null===n||Array.isArray(n))return X("an OBJECT",n);var u=d;for(var i in n)if(n.hasOwnProperty(i)){if(t=V(r.b,n[i]),!ae(t))return ye(o(we,i,t.a));u=h(E(i,t.a),u)}return Fe(le(u));case 13:for(var f=r.f,c=r.g,s=0;c.length>s;s++){if(t=V(c[s],n),!ae(t))return t;f=f(t.a)}return Fe(f);case 14:return t=V(r.b,n),ae(t)?V(r.h(t.a),n):t;case 15:for(var v=d,b=r.g;b.b;b=b.b){if(t=V(b.a,n),ae(t))return t;v=h(t.a,v)}return ye(Se(le(v)));case 1:return ye(o($e,r.a,W(n)));case 0:return Fe(r.a)}}function z(r,n,e){for(var t=n.length,a=Array(t),u=0;t>u;u++){var i=V(r,n[u]);if(!ae(i))return ye(o(Re,u,i.a));a[u]=i.a}return Fe(e(a))}function G(r){return o(_e,r.length,function(n){return r[n]})}function X(r,n){return ye(o($e,"Expecting "+r,W(n)))}function H(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return H(r.b,n.b);case 10:return r.d===n.d&&H(r.b,n.b);case 11:return r.e===n.e&&H(r.b,n.b);case 13:return r.f===n.f&&Y(r.g,n.g);case 14:return r.h===n.h&&H(r.b,n.b);case 15:return Y(r.g,n.g)}}function Y(r,n){var e=r.length;if(e!==n.length)return!1;for(var t=0;e>t;t++)if(!H(r[t],n[t]))return!1;return!0}function W(r){return r}function K(r){return r}function J(r){return{$:0,a:r}}function Q(r){return{$:1,a:r}}function Z(r){return{$:2,b:r,c:null}}W(null);var rr=e(function(r,n){return{$:3,b:r,d:n}}),nr=e(function(r,n){return{$:4,b:r,d:n}}),er=0;function tr(r){var n={$:0,e:er++,f:r,g:null,h:[]};return cr(n),n}function ar(r){return Z(function(n){n(J(tr(r)))})}function ur(r,n){r.h.push(n),cr(r)}var ir=e(function(r,n){return Z(function(e){ur(r,n),e(J(0))})}),or=!1,fr=[];function cr(r){if(fr.push(r),!or){for(or=!0;r=fr.shift();)sr(r);or=!1}}function sr(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,cr(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}var vr={};function br(r,n,e,t,a){return{b:r,c:n,d:e,e:t,f:a}}function lr(r,n){var e={g:n,h:void 0},t=r.c,a=r.d,u=r.e,i=r.f;function s(r){return o(rr,s,{$:5,b:function(n){var o=n.a;return 0===n.$?f(a,e,o,r):u&&i?c(t,e,o.i,o.j,r):f(t,e,u?o.i:o.j,r)}})}return e.h=tr(o(rr,s,r.b))}var dr,hr=e(function(r,n){return Z(function(e){r.g(n),e(J(0))})}),gr=e(function(r,n){return o(ir,r.h,{$:0,a:n})});function Ar(r){return function(n){return{$:1,k:r,l:n}}}function mr(r,n,e){var t={};for(var a in pr(!0,n,t,null),pr(!1,e,t,null),r)ur(r[a],{$:"fx",a:t[a]||{i:d,j:d}})}function pr(r,n,e,t){switch(n.$){case 1:var a=n.k,u=function(r,e,t){function a(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return o(r?vr[e].e:vr[e].f,a,n.l)}(r,a,t);return void(e[a]=function(r,n,e){return e=e||{i:d,j:d},r?e.i=h(n,e.i):e.j=h(n,e.j),e}(r,u,e[a]));case 2:for(var i=n.m;i.b;i=i.b)pr(r,i.a,e,t);return;case 3:return void pr(r,n.o,e,{p:n.n,q:t})}}var Tr="undefined"!=typeof document?document:{};function Er(r,n){r.appendChild(n)}function _r(r){return{$:0,a:r}}var yr=e(function(r,n){return e(function(e,t){for(var a=[],u=0;t.b;t=t.b){var i=t.a;u+=i.b||0,a.push(i)}return u+=a.length,{$:1,c:n,d:wr(e),e:a,f:r,b:u}})})(void 0);e(function(r,n){return e(function(e,t){for(var a=[],u=0;t.b;t=t.b){var i=t.a;u+=i.b.b||0,a.push(i)}return u+=a.length,{$:2,c:n,d:wr(e),e:a,f:r,b:u}})})(void 0);var Fr,$r=e(function(r,n){return{$:"a3",n:r,o:n}});function wr(r){for(var n={};r.b;r=r.b){var e=r.a,t=e.$,a=e.n,u=e.o;if("a2"!==t){var i=n[t]||(n[t]={});"a3"===t&&"class"===a?Rr(i,a,u):i[a]=u}else"className"===a?Rr(n,a,K(u)):n[a]=K(u)}return n}function Rr(r,n,e){var t=r[n];r[n]=t?t+" "+e:e}function Sr(r,n){var e=r.$;if(5===e)return Sr(r.k||(r.k=r.m()),n);if(0===e)return Tr.createTextNode(r.a);if(4===e){for(var t=r.k,a=r.j;4===t.$;)"object"!=typeof a?a=[a,t.j]:a.push(t.j),t=t.k;var u={j:a,p:n};return(i=Sr(t,u)).elm_event_node_ref=u,i}if(3===e)return Lr(i=r.h(r.g),n,r.d),i;var i=r.f?Tr.createElementNS(r.f,r.c):Tr.createElement(r.c);dr&&"a"==r.c&&i.addEventListener("click",dr(i)),Lr(i,n,r.d);for(var o=r.e,f=0;o.length>f;f++)Er(i,Sr(1===e?o[f]:o[f].b,n));return i}function Lr(r,n,e){for(var t in e){var a=e[t];"a1"===t?Cr(r,a):"a0"===t?Ir(r,n,a):"a3"===t?Or(r,a):"a4"===t?Nr(r,a):("value"!==t||"checked"!==t||r[t]!==a)&&(r[t]=a)}}function Cr(r,n){var e=r.style;for(var t in n)e[t]=n[t]}function Or(r,n){for(var e in n){var t=n[e];t?r.setAttribute(e,t):r.removeAttribute(e)}}function Nr(r,n){for(var e in n){var t=n[e],a=t.f,u=t.o;u?r.setAttributeNS(a,e,u):r.removeAttributeNS(a,e)}}function Ir(r,n,e){var t=r.elmFs||(r.elmFs={});for(var a in e){var u=e[a],i=t[a];if(u){if(i){if(i.q.$===u.$){i.q=u;continue}r.removeEventListener(a,i)}i=Pr(n,u),r.addEventListener(a,i,Fr&&{passive:2>Ce(u)}),t[a]=i}else r.removeEventListener(a,i),t[a]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Fr=!0}}))}catch(r){}function Pr(r,n){function e(n){var t=e.q,a=V(t.a,n);if(ae(a)){for(var u,i=Ce(t),o=a.a,f=i?3>i?o.a:o.w:o,c=1==i?o.b:3==i&&o.aA,s=(c&&n.stopPropagation(),(2==i?o.b:3==i&&o.aw)&&n.preventDefault(),r);u=s.j;){if("function"==typeof u)f=u(f);else for(var v=u.length;v--;)f=u[v](f);s=s.p}s(f,c)}}return e.q=n,e}function Br(r,n){return r.$==n.$&&H(r.a,n.a)}function xr(r,n,e,t){var a={$:n,r:e,s:t,t:void 0,u:void 0};return r.push(a),a}function Ur(r,n,e,t){if(r!==n){var a=r.$,u=n.$;if(a!==u){if(1!==a||2!==u)return void xr(e,0,t,n);n=function(r){for(var n=r.e,e=n.length,t=Array(e),a=0;e>a;a++)t[a]=n[a].b;return{$:1,c:r.c,d:r.d,e:t,f:r.f,b:r.b}}(n),u=1}switch(u){case 5:for(var i=r.l,o=n.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(n.k=r.k);n.k=n.m();var s=[];return Ur(r.k,n.k,s,0),void(s.length>0&&xr(e,1,t,s));case 4:for(var v=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof v?v=[v,d.j]:v.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&v.length!==b.length?void xr(e,0,t,n):((l?function(r,n){for(var e=0;r.length>e;e++)if(r[e]!==n[e])return!1;return!0}(v,b):v===b)||xr(e,2,t,b),void Ur(d,h,e,t+1));case 0:return void(r.a!==n.a&&xr(e,3,t,n.a));case 1:return void kr(r,n,e,t,Dr);case 2:return void kr(r,n,e,t,Mr);case 3:if(r.h!==n.h)return void xr(e,0,t,n);var g=jr(r.d,n.d);g&&xr(e,4,t,g);var A=n.i(r.g,n.g);return void(A&&xr(e,5,t,A))}}}function kr(r,n,e,t,a){if(r.c===n.c&&r.f===n.f){var u=jr(r.d,n.d);u&&xr(e,4,t,u),a(r,n,e,t)}else xr(e,0,t,n)}function jr(r,n,e){var t;for(var a in r)if("a1"!==a&&"a0"!==a&&"a3"!==a&&"a4"!==a)if(a in n){var u=r[a],i=n[a];u===i&&"value"!==a&&"checked"!==a||"a0"===e&&Br(u,i)||((t=t||{})[a]=i)}else(t=t||{})[a]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:r[a].f,o:void 0}:"string"==typeof r[a]?"":null;else{var o=jr(r[a],n[a]||{},a);o&&((t=t||{})[a]=o)}for(var f in n)f in r||((t=t||{})[f]=n[f]);return t}function Dr(r,n,e,t){var a=r.e,u=n.e,i=a.length,o=u.length;i>o?xr(e,6,t,{v:o,i:i-o}):o>i&&xr(e,7,t,{v:i,e:u});for(var f=o>i?i:o,c=0;f>c;c++){var s=a[c];Ur(s,u[c],e,++t),t+=s.b||0}}function Mr(r,n,e,t){for(var a=[],u={},i=[],o=r.e,f=n.e,c=o.length,s=f.length,v=0,b=0,l=t;c>v&&s>b;){var d=(w=o[v]).a,h=(R=f[b]).a,g=w.b,A=R.b;if(d!==h){var m=o[v+1],p=f[b+1];if(m)var T=m.a,E=m.b,_=h===T;if(p)var y=p.a,F=p.b,$=d===y;if($&&_)Ur(g,F,a,++l),Vr(u,a,d,A,b,i),l+=g.b||0,zr(u,a,d,E,++l),l+=E.b||0,v+=2,b+=2;else if($)l++,Vr(u,a,h,A,b,i),Ur(g,F,a,l),l+=g.b||0,v+=1,b+=2;else if(_)zr(u,a,d,g,++l),l+=g.b||0,Ur(E,A,a,++l),l+=E.b||0,v+=2,b+=1;else{if(!m||T!==y)break;zr(u,a,d,g,++l),Vr(u,a,h,A,b,i),l+=g.b||0,Ur(E,F,a,++l),l+=E.b||0,v+=2,b+=2}}else Ur(g,A,a,++l),l+=g.b||0,v++,b++}for(;c>v;){var w;zr(u,a,(w=o[v]).a,g=w.b,++l),l+=g.b||0,v++}for(;s>b;){var R,S=S||[];Vr(u,a,(R=f[b]).a,R.b,void 0,S),b++}(a.length>0||i.length>0||S)&&xr(e,8,t,{w:a,x:i,y:S})}var qr="_elmW6BL";function Vr(r,n,e,t,a,u){var i=r[e];if(!i)return u.push({r:a,A:i={c:0,z:t,r:a,s:void 0}}),void(r[e]=i);if(1===i.c){u.push({r:a,A:i}),i.c=2;var o=[];return Ur(i.z,t,o,i.r),i.r=a,void(i.s.s={w:o,A:i})}Vr(r,n,e+qr,t,a,u)}function zr(r,n,e,t,a){var u=r[e];if(u){if(0===u.c){u.c=2;var i=[];return Ur(t,u.z,i,a),void xr(n,9,a,{w:i,A:u})}zr(r,n,e+qr,t,a)}else{var o=xr(n,9,a,void 0);r[e]={c:1,z:t,r:a,s:o}}}function Gr(r,n,e,t){return 0===e.length?r:(function r(n,e,t,a){!function n(e,t,a,u,i,o,f){for(var c=a[u],s=c.r;s===i;){var v=c.$;if(1===v)r(e,t.k,c.s,f);else if(8===v)c.t=e,c.u=f,(b=c.s.w).length>0&&n(e,t,b,0,i,o,f);else if(9===v){c.t=e,c.u=f;var b,l=c.s;l&&(l.A.s=e,(b=l.w).length>0&&n(e,t,b,0,i,o,f))}else c.t=e,c.u=f;if(!(c=a[++u])||(s=c.r)>o)return u}var d=t.$;if(4===d){for(var h=t.k;4===h.$;)h=h.k;return n(e,h,a,u,i+1,o,e.elm_event_node_ref)}for(var g=t.e,A=e.childNodes,m=0;g.length>m;m++){var p=1===d?g[m]:g[m].b,T=++i+(p.b||0);if(!(i>s||s>T||(c=a[u=n(A[m],p,a,u,i,T,f)])&&(s=c.r)<=o))return u;i=T}return u}(n,e,t,0,0,e.b,a)}(r,n,e,t),Xr(r,e))}function Xr(r,n){for(var e=0;n.length>e;e++){var t=n[e],a=t.t,u=Hr(a,t);a===r&&(r=u)}return r}function Hr(r,n){switch(n.$){case 0:return function(r){var e=r.parentNode,t=Sr(n.s,n.u);return t.elm_event_node_ref||(t.elm_event_node_ref=r.elm_event_node_ref),e&&t!==r&&e.replaceChild(t,r),t}(r);case 4:return Lr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Xr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var e=n.s,t=0;e.i>t;t++)r.removeChild(r.childNodes[e.v]);return r;case 7:for(var a=(e=n.s).e,u=r.childNodes[t=e.v];a.length>t;t++)r.insertBefore(Sr(a[t],n.u),u);return r;case 9:if(!(e=n.s))return r.parentNode.removeChild(r),r;var i=e.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Xr(r,e.w),r;case 8:return function(r,n){var e=n.s,t=function(r,n){if(r){for(var e=Tr.createDocumentFragment(),t=0;r.length>t;t++){var a=r[t].A;Er(e,2===a.c?a.s:Sr(a.z,n.u))}return e}}(e.y,n);r=Xr(r,e.w);for(var a=e.x,u=0;a.length>u;u++){var i=a[u],o=i.A,f=2===o.c?o.s:Sr(o.z,n.u);r.insertBefore(f,r.childNodes[i.r])}return t&&Er(r,t),r}(r,n);case 5:return n.s(r);default:m(10)}}var Yr=0;function Wr(r,n){for(;n.b;n=n.b)r(n.a)}function Kr(r){for(var n=0;r.b;r=r.b)n++;return n}var Jr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)},Qr=u(function(r,n,e,t,a){return t.id||(t.id=Yr++),{$:0,a:r,b:n,c:e,d:t,e:a}}),Zr=e(function(r,n){r.enable(r.BLEND),r.blendEquationSeparate(n.a,n.d),r.blendFuncSeparate(n.b,n.c,n.e,n.f),r.blendColor(n.g,n.h,n.i,n.j)}),rn=e(function(r,n){r.enable(r.DEPTH_TEST),r.depthFunc(n.a),r.depthMask(n.b),r.depthRange(n.c,n.d)}),nn=e(function(r,n){r.enable(r.STENCIL_TEST),r.stencilFuncSeparate(r.FRONT,n.d,n.a,n.b),r.stencilOpSeparate(r.FRONT,n.e,n.f,n.g),r.stencilMaskSeparate(r.FRONT,n.c),r.stencilFuncSeparate(r.BACK,n.h,n.a,n.b),r.stencilOpSeparate(r.BACK,n.i,n.j,n.k),r.stencilMaskSeparate(r.BACK,n.c)}),en=e(function(r,n){r.enable(r.SCISSOR_TEST),r.scissor(n.a,n.b,n.c,n.d)}),tn=e(function(r,n){r.colorMask(n.a,n.b,n.c,n.d)}),an=e(function(r,n){r.enable(r.CULL_FACE),r.cullFace(n.a)}),un=e(function(r,n){r.enable(r.POLYGON_OFFSET_FILL),r.polygonOffset(n.a,n.b)}),on=e(function(r,n){r.enable(r.SAMPLE_COVERAGE),r.sampleCoverage(n.a,n.b)}),fn=e(function(r){r.enable(r.SAMPLE_ALPHA_TO_COVERAGE)});function cn(r,n,e){var t=r.createShader(e);if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS))throw r.getShaderInfoLog(t);return t}function sn(r,n){switch(n){case r.FLOAT:return{size:1,type:Float32Array,baseType:r.FLOAT};case r.FLOAT_VEC2:return{size:2,type:Float32Array,baseType:r.FLOAT};case r.FLOAT_VEC3:return{size:3,type:Float32Array,baseType:r.FLOAT};case r.FLOAT_VEC4:return{size:4,type:Float32Array,baseType:r.FLOAT};case r.INT:return{size:1,type:Int32Array,baseType:r.INT};case r.INT_VEC2:return{size:2,type:Int32Array,baseType:r.INT};case r.INT_VEC3:return{size:3,type:Int32Array,baseType:r.INT};case r.INT_VEC4:return{size:4,type:Int32Array,baseType:r.INT}}}function vn(r,n,e,t){for(var a=e.a.q,u=[],i=0;a>i;i++)u.push(String.fromCharCode(97+i));var o=sn(r,n.type);if(void 0===o)throw Error("No info available for: "+n.type);var f=0,c=new o.type(Kr(e.b)*o.size*a);Wr(function(r){!function(r,n,e,t,i){var o;if(1===a)for(o=0;n>o;o++)r[e++]=1===n?t[i]:t[i][o];else u.forEach(function(a){for(o=0;n>o;o++)r[e++]=1===n?t[a][i]:t[a][i][o]})}(c,o.size,f,r,t[n.name]||n.name),f+=o.size*a},e.b);var s=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,c,r.STATIC_DRAW),s}function bn(r,n){return r+"#"+n}var ln=e(function(r,n){var e=r.f.gl;return e?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT),Wr(function(n){if(n.d.b.b){var t,a,u,i;if(n.b.id&&n.c.id&&(t=bn(n.b.id,n.c.id),a=r.f.programs[t]),!a){var f,c;n.b.id?f=r.f.shaders[n.b.id]:n.b.id=Yr++,f||(f=cn(e,n.b.src,e.VERTEX_SHADER),r.f.shaders[n.b.id]=f),n.c.id?c=r.f.shaders[n.c.id]:n.c.id=Yr++,c||(c=cn(e,n.c.src,e.FRAGMENT_SHADER),r.f.shaders[n.c.id]=c);var s=function(r,n,e){var t=r.createProgram();if(r.attachShader(t,n),r.attachShader(t,e),r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS))throw r.getProgramInfoLog(t);return t}(e,f,c);a={glProgram:s,attributes:Object.assign({},n.b.attributes,n.c.attributes),uniformSetters:function(r,n,e,t){var a=0;function u(e,t){var u=r.getUniformLocation(e,t.name);switch(t.type){case r.INT:return function(n){r.uniform1i(u,n)};case r.FLOAT:return function(n){r.uniform1f(u,n)};case r.FLOAT_VEC2:return function(n){r.uniform2fv(u,new Float32Array(n))};case r.FLOAT_VEC3:return function(n){r.uniform3fv(u,new Float32Array(n))};case r.FLOAT_VEC4:return function(n){r.uniform4fv(u,new Float32Array(n))};case r.FLOAT_MAT4:return function(n){r.uniformMatrix4fv(u,!1,new Float32Array(n))};case r.SAMPLER_2D:var i=a++;return function(e){r.activeTexture(r.TEXTURE0+i);var t=n.f.textures[e.id];t||(t=e.aH(r),n.f.textures[e.id]=t),r.bindTexture(r.TEXTURE_2D,t),r.uniform1i(u,i)};case r.BOOL:return function(n){r.uniform1i(u,n)};default:return function(){}}}for(var i={},o=r.getProgramParameter(e,r.ACTIVE_UNIFORMS),f=0;o>f;f++){var c=r.getActiveUniform(e,f);i[t[c.name]||c.name]=u(e,c)}return i}(e,r,s,Object.assign({},n.b.uniforms,n.c.uniforms))},t=bn(n.b.id,n.c.id),r.f.programs[t]=a}e.useProgram(a.glProgram),u=a.uniformSetters,Object.keys(i=n.e).forEach(function(r){var n=u[r];n&&n(i[r])});var v=r.f.buffers[n.d.id];v||(v=function(r,n){var e=r.createBuffer(),t=0===n.a.r?function(r){for(var n=new Uint16Array(r),e=0;r>e;e++)n[e]=e;return n}(n.a.q*Kr(n.b)):function(r,n){var e,t=new Uint16Array(Kr(r)*n),a=0;return Wr(function(r){if(1===n)t[a++]=r;else for(e=0;n>e;e++)t[a++]=r[String.fromCharCode(97+e)]},r),t}(n.c,n.a.r);return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW),{numIndices:t.length,indexBuffer:e,buffers:{}}}(e,n.d),r.f.buffers[n.d.id]=v),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,v.indexBuffer);for(var b=e.getProgramParameter(a.glProgram,e.ACTIVE_ATTRIBUTES),l=0;b>l;l++){var d=e.getActiveAttrib(a.glProgram,l),h=e.getAttribLocation(a.glProgram,d.name);e.enableVertexAttribArray(h),void 0===v.buffers[d.name]&&(v.buffers[d.name]=vn(e,d,n.d,a.attributes));var g=v.buffers[d.name],A=sn(e,d.type);e.bindBuffer(e.ARRAY_BUFFER,g),e.vertexAttribPointer(h,A.size,A.baseType,!1,0,0)}Wr(function(r){return o(Ie,e,r)},n.a),e.drawElements(n.d.a.t,v.numIndices,e.UNSIGNED_SHORT,0),Wr(function(r){return o(Oe,e,r)},n.a)}},r.g),n):n}),dn=t(function(r,n,e){return function(r,n,e,t){return{$:3,d:wr(r),g:n,h:e,i:t}}(n,{g:e,f:{},h:r},Tn,En)}),hn=e(function(r,n){r.contextAttributes.alpha=!0,r.contextAttributes.premultipliedAlpha=n.a}),gn=e(function(r,n){r.contextAttributes.depth=!0,r.sceneSettings.push(function(r){r.clearDepth(n.a)})}),An=e(function(r,n){r.contextAttributes.stencil=!0,r.sceneSettings.push(function(r){r.clearStencil(n.a)})}),mn=e(function(r){r.contextAttributes.antialias=!0}),pn=e(function(r,n){r.sceneSettings.push(function(r){r.clearColor(n.a,n.b,n.c,n.d)})});function Tn(r){var n={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1},sceneSettings:[]};Wr(function(r){return o(Ne,n,r)},r.h);var e=Tr.createElement("canvas"),t=e.getContext&&(e.getContext("webgl",n.contextAttributes)||e.getContext("experimental-webgl",n.contextAttributes));return t?n.sceneSettings.forEach(function(r){r(t)}):(e=Tr.createElement("div")).innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!',r.f.gl=t,r.f.shaders=[],r.f.programs={},r.f.buffers=[],r.f.textures=[],Jr(function(){return o(ln,r,e)}),e}function En(r,n){return n.f=r.f,ln(n)}var _n=0,yn=i(function(r,n,e,t,a,u){var i=9728!==n&&9729!==n;return Z(function(f){var c=new Image;function s(u){var o=u.createTexture();return u.bindTexture(u.TEXTURE_2D,o),u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,a),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,c),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,r),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,n),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,e),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,t),i&&u.generateMipmap(u.TEXTURE_2D),u.bindTexture(u.TEXTURE_2D,null),o}c.onload=function(){var r=c.width,n=c.height;f(0==(r&r-1)&&0==(n&n-1)||!i&&33071===e&&33071===t?J({$:0,id:_n++,aH:s,a:r,b:n}):Q(o(Qe,r,n)))},c.onerror=function(){f(Q(Je))},"data:"!==u.slice(0,5)&&(c.crossOrigin="Anonymous"),c.src=u})}),Fn=a(function(r,n,e,t){return function(r,n,e,t,a,u){var i=o(q,r,W(n?n.flags:void 0));ae(i)||m(2);var f={},c=(i=e(i.a)).a,s=u(b,c),v=function(r,n){var e;for(var t in vr){var a=vr[t];a.a&&((e=e||{})[t]=a.a(t,n)),r[t]=lr(a,n)}return e}(f,b);function b(r,n){s(c=(i=o(t,r,c)).a,n),mr(f,i.b,a(c))}return mr(f,i.b,a(c)),v?{ports:v}:{}}(n,t,r.bV,r.b4,r.b2,function(n,e){var t=r.W&&r.W(n),a=r.b6,u=Tr.title,i=Tr.body,c=function r(n){if(3===n.nodeType)return _r(n.textContent);if(1!==n.nodeType)return _r("");for(var e=d,t=n.attributes,a=t.length;a--;){var u=t[a];e=h(o($r,u.name,u.value),e)}var i=n.tagName.toLowerCase(),c=d,s=n.childNodes;for(a=s.length;a--;)c=h(r(s[a]),c);return f(yr,i,e,c)}(i);return function(r,n){n(r);var e=0;function t(){e=1===e?0:($n(t),n(r),1)}return function(a,u){r=a,u?(n(r),2===e&&(e=1)):(0===e&&$n(t),e=2)}}(e,function(r){dr=t;var e=a(r),o=yr("body")(d)(e.bF),f=function(r,n){var e=[];return Ur(r,n,e,0),e}(c,o);i=Gr(i,c,f,n),c=o,dr=0,u!==e.b3&&(Tr.title=u=e.b3)})})}),$n="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var wn,Rn,Sn,Ln,Cn,On,Nn,In,Pn=e(function(r,n){return{bK:n,b$:r}}),Bn=1,xn=0,Un=g,kn=2,jn=T,Dn=function(r){return{$:0,a:r}},Mn={$:1},qn=w,Vn=C,zn=e(function(r,n){return{$:2,a:r,b:n}})({q:3,r:0,t:4}),Gn=e(function(r,n){var e=r.a,t=r.b,a=n.a,u=n.b,i=o(Pn,f(Vn,-e,-t,0),o(qn,0,0)),c=function(){switch(o(jn,a,u)){case 1:return E(1,1);case 2:return E(1,u/a);default:return E(a/u,1)}}(),s=c.a,v=c.b,b=o(Pn,f(Vn,e,-t,0),o(qn,s,0)),l=o(Pn,f(Vn,-e,t,0),o(qn,0,v)),d=o(Pn,f(Vn,e,t,0),o(qn,s,v));return zn(A([_(l,d,i),_(i,d,b)]))}),Xn=function(r){return E(r.aq,r.ai)},Hn=e(function(r){return o(Gn,E(1,1),Xn(r))}),Yn=t(function(r,n,e){return{$:0,a:r,b:n,c:e}}),Wn=e(function(r,n){return f(Yn,32774,r,n)}),Kn=function(r){return r},Jn=(Rn=(wn={bA:0,bC:o(Wn,1,771),bE:0,bJ:o(Wn,770,771),bR:0,b0:0}).b0,Sn=wn.bR,Ln=wn.bE,Cn=wn.bA,On=wn.bJ,Nn=wn.bC,o(e(function(r,n){var e=r.b,t=r.c,a=n.a,u=n.b,i=n.c;return function(r){return function(n){return function(e){return function(t){return function(a){return function(u){return function(i){return function(o){return function(f){return function(c){return{$:0,a:r,b:n,c:e,d:t,e:a,f:u,g:i,h:o,i:f,j:c}}}}}}}}}}}(r.a)(e)(t)(a)(u)(i)(Rn)(Sn)(Ln)(Cn)}),On,Nn)),Qn=M,Zn=k,re=D,ne=(In=o(P,1,I(f(Vn,0,0,1))),o(re,c(Zn,90,1,.01,100),f(Qn,In,f(Vn,0,0,0),f(Vn,0,1,0)))),ee={src:"\n      precision mediump float;\n      uniform sampler2D img;\n      varying vec2 vcoord;\n      uniform vec2 offset;\n\n      void main() {\n        gl_FragColor = texture2D(img, vcoord + offset);\n      }\n    ",attributes:{},uniforms:{img:"aS",offset:"bb"}},te={src:"\n      attribute vec3 position;\n      attribute vec2 coord;\n      uniform mat4 perspective;\n      varying vec2 vcoord;\n\n      void main() {\n        gl_Position = perspective * vec4(position, 1.0);\n        vcoord = coord.xy;\n      }\n    ",attributes:{coord:"bK",position:"b$"},uniforms:{perspective:"bd"}},ae=function(r){return!r.$},ue=a(function(r,n,e,t){return{$:0,a:r,b:n,c:e,d:t}}),ie=y,oe=e(function(r,n){return $(n)/$(r)}),fe=ie(o(oe,2,32)),ce=[],se=c(ue,0,fe,ce,ce),ve=l,be=t(function(r,n,e){for(;;){if(!e.b)return n;var t=e.b,a=r,u=o(r,e.a,n);r=a,n=u,e=t}}),le=function(r){return f(be,Un,d,r)},de=e(function(r,n){for(;;){var e=o(ve,32,r),t=e.b,a=o(Un,{$:0,a:e.a},n);if(!t.b)return le(a);r=t,n=a}}),he=e(function(r,n){for(;;){var e=ie(n/32);if(1===e)return o(ve,32,r).a;r=o(de,r,d),n=e}}),ge=F,Ae=e(function(r,n){return p(r,n)>0?r:n}),me=function(r){return r.length},pe=e(function(r,n){if(n.a){var e=32*n.a,t=ge(o(oe,32,e-1)),a=r?le(n.d):n.d,u=o(he,a,n.a);return c(ue,me(n.c)+e,o(Ae,5,t*fe),u,n.c)}return c(ue,me(n.c),fe,ce,n.c)}),Te=b,Ee=u(function(r,n,e,t,a){for(;;){if(0>n)return o(pe,!1,{d:t,a:e/32|0,c:a});var u={$:1,a:f(Te,32,n,r)};r=r,n-=32,e=e,t=o(Un,u,t),a=a}}),_e=e(function(r,n){if(r>0){var e=r%32;return s(Ee,n,r-e-32,r,d,f(Te,e,r-e,n))}return se}),ye=function(r){return{$:1,a:r}},Fe=function(r){return{$:0,a:r}},$e=e(function(r,n){return{$:3,a:r,b:n}}),we=e(function(r,n){return{$:0,a:r,b:n}}),Re=e(function(r,n){return{$:1,a:r,b:n}}),Se=function(r){return{$:2,a:r}},Le=function(r){return r+""},Ce=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Oe=e(function(r,n){switch(n.$){case 0:return function(r){r.disable(r.BLEND)}(r);case 1:return function(r){r.disable(r.DEPTH_TEST)}(r);case 2:return function(r){r.disable(r.STENCIL_TEST)}(r);case 3:return function(r){r.disable(r.SCISSOR_TEST)}(r);case 4:return function(r){r.colorMask(!0,!0,!0,!0)}(r);case 5:return function(r){r.disable(r.CULL_FACE)}(r);case 6:return function(r){r.disable(r.POLYGON_OFFSET_FILL)}(r);case 7:return function(r){r.disable(r.SAMPLE_COVERAGE)}(r);default:return function(r){r.disable(r.SAMPLE_ALPHA_TO_COVERAGE)}(r)}}),Ne=e(function(r,n){switch(n.$){case 0:return o(hn,r,n);case 1:return o(gn,r,n);case 2:return o(An,r,n);case 3:return o(mn,r,n);default:return o(pn,r,n)}}),Ie=e(function(r,n){switch(n.$){case 0:return o(Zr,r,n);case 1:return o(rn,r,n);case 2:return o(nn,r,n);case 3:return o(en,r,n);case 4:return o(tn,r,n);case 5:return o(an,r,n);case 6:return o(un,r,n);case 7:return o(on,r,n);default:return o(fn,r,n)}}),Pe=Qr,Be=t(function(r,n,e){var t=e.a,a=e.b;return s(Pe,A([Jn]),te,ee,r,{aS:n,bb:o(qn,t,a),bd:ne})}),xe=t(function(r,n,e){return f(Be,o(Hn,r,e.aB),e.aB,E(n*e.bq,0))}),Ue=a(function(r,n,e,t){if(t.b){var a=t.a,u=t.b;if(u.b){var i=u.a,s=u.b;if(s.b){var v=s.a,b=s.b;if(b.b){var l=b.b;return o(r,a,o(r,i,o(r,v,o(r,b.a,e>500?f(be,r,n,le(l)):c(Ue,r,n,e+1,l)))))}return o(r,a,o(r,i,o(r,v,n)))}return o(r,a,o(r,i,n))}return o(r,a,n)}return n}),ke=t(function(r,n,e){return c(Ue,r,n,0,e)}),je=e(function(r,n){return f(ke,e(function(n,e){return o(Un,r(n),e)}),d,n)}),De=t(function(r,n,e){var t=n;return o(je,o(xe,r,e),t)}),Me=o(e(function(r,n){return{ai:n,aq:r}}),1024,768),qe=t(function(r,n,e){return f(dn,r,n,e)}),Ve=e(function(r,n){var e,t,a=r;return f(qe,A([(t=!0,{$:0,a:t})]),A([(e=a.aq,o($r,"width",Le(e))),o($r,"height",Le(a.ai))]),n)}),ze=_r,Ge=function(r){switch(r.$){case 0:return ze("Loading...");case 1:return ze("Failed to load texture");default:var n=r.a;return o(Ve,Me,function(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var e=h(r.a,n);r=r.b;for(var t=e;r.b;r=r.b)t=t.b=h(r.a,n);return e}(f(De,Me,n.ar,n.P),A([(e=n.ay,f(Be,e.at,e.aB,E(0,0)))])))}var e},Xe={$:0},He=e(function(r,n){return{bq:n,aB:r}}),Ye=rr,We=J,Ke=e(function(r,n){return o(Ye,function(n){return We(r(n))},n)}),Je={$:0},Qe=e(function(r,n){return{$:1,a:r,b:n}}),Ze=e(function(r,n){var e=r.ak,t=r.al,u=r.aj,i=r.ap,o=r.ah;return c(a(function(r,e,t,a){return v(yn,r,e,t,a,o,n)}),e,t,u,i)})({ah:!0,aj:10497,ak:9729,al:9986,ap:10497}),rt=function(r){var n=r.b;return o(Ke,function(r){return o(He,r,n)},Ze(r.a))},nt=t(function(r,n,e){return o(Ye,function(n){return o(Ye,function(e){return We(o(r,n,e))},e)},n)}),et=function(r){return f(ke,nt(Un),We(d),r)},tt=function(r){return{$:1,a:r}},at=o(je,function(r){return E("background/Layer_"+r.a+".png",r.b)},A([E("0010_1",.55),E("0009_2",.6),E("0008_3",.65),E("0007_Lights",.7),E("0006_4",.75),E("0005_5",.8),E("0004_Lights",.85),E("0003_6",.9),E("0002_7",.95),E("0001_8",1),E("0000_9",1.05)])),ut=e(function(r,n){return{ar:r,P:0,ay:n}}),it=e(function(r,n){var e=r.a,t=r.b,a=Xn(n);return E(e/a.a,t/a.b)}),ot=function(r){return E(r.a,r.b)},ft=e(function(r,n){var e=o(it,ot(n),r);return o(Gn,E(e.a,e.b),ot(n))}),ct=e(function(r,n){return{at:o(ft,r,n),aB:n}}),st=e(function(r,n){return o(Ke,ct(r),Ze(n))}),vt=t(function(r,n,e){return r(n(e))}),bt=We(0),lt=hr,dt=e(function(r,n){var e=n;return ar(o(Ye,lt(r),e))});vr.Task=br(bt,t(function(r,n){return o(Ke,function(){return 0},et(o(je,dt(r),n)))}),t(function(){return We(0)}),e(function(r,n){return o(Ke,r,n)}));var ht=Ar("Task"),gt=nr,At=o(e(function(r,n){return ht(o(gt,o(vt,o(vt,We,r),ye),o(Ye,o(vt,o(vt,We,r),Fe),n)))}),tt,f(nt,ut,o(Ke,Kn,et(o(je,rt,at))),o(st,Me,"eldritch_liver.png"))),mt=function(r){return{$:0,a:r}},pt=function(r){return{$:1,a:r}},Tt=t(function(r,n,e){return{av:e,bm:n,bs:r}}),Et=We(f(Tt,d,Mn,0)),_t=Z(function(r){r(J(Date.now()))}),yt=Z(function(r){var n=requestAnimationFrame(function(){r(J(Date.now()))});return function(){cancelAnimationFrame(n)}}),Ft=gr,$t=ar,wt=Kn;vr["Browser.AnimationManager"]=br(Et,t(function(r,n,e){var t,a=e.bm,u=e.av,i=E(a,n);return 1===i.a.$?i.b.b?o(Ye,function(r){return o(Ye,function(e){return We(f(Tt,n,Dn(r),e))},_t)},$t(o(Ye,Ft(r),yt))):Et:i.b.b?We(f(Tt,n,a,u)):o(Ye,function(){return Et},(t=i.a.a,Z(function(r){var n=t.f;2===n.$&&n.c&&n.c(),t.f=null,r(J(0))})))}),t(function(r,n,e){var t=e.bs,a=e.av,u=function(e){return o(lt,r,(0,e.a)(e.$?n-a:wt(n)))};return o(Ye,function(r){return o(Ye,function(){return We(f(Tt,t,Dn(r),n))},et(o(je,u,t)))},$t(o(Ye,Ft(r),yt)))}),0,e(function(r,n){return n.$?pt(o(vt,r,n.a)):{$:0,a:o(vt,r,n.a)}}));var Rt,St,Lt=Ar("Browser.AnimationManager"),Ct=function(r){return{$:2,a:r}},Ot={$:2,m:d};Rt={Main:{init:Fn({bV:function(){return E(Xe,At)},b2:function(){return Lt(pt(mt))},b4:e(function(r,n){if(1===r.$){var e=r.a;return E(e.$?{$:1,a:e.a}:Ct(t=e.a),Ot)}var t;return E(2===n.$?Ct(function(r,n){var e={};for(var t in r)e[t]=r[t];for(var t in n)e[t]=n[t];return e}(t=n.a,{P:t.P+r.a/1e4})):n,Ot)}),b6:function(r){return{bF:A([Ge(r)]),b3:"Game Exploration"}}})((St=0,{$:0,a:St}))(0)}},r.Elm?function r(n,e){for(var t in e)t in n?"init"==t?m(6):r(n[t],e[t]):n[t]=e[t]}(r.Elm,Rt):r.Elm=Rt}(this);
},{}],"QdeU":[function(require,module,exports) {
"use strict";var i=require("../elm/Main.elm");i.Elm.Main.init();
},{"../elm/Main.elm":"ENeC"}]},{},["QdeU"], null)
//# sourceMappingURL=app.e2aa2fac.map
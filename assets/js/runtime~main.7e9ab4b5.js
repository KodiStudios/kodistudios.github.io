(()=>{"use strict";var e,t,r,o,a,n={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=i,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,d=0;d<r.length;d++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[d])))?r.splice(d--,1):(i=!1,a<n&&(n=a));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({43:"f6e811dd",53:"935f2afb",85:"1f391b9e",120:"05152a5e",195:"c4f5d8e4",264:"4b20ec12",336:"e9d234d8",414:"393be207",514:"1be78505",592:"4a317c19",671:"0e384e19",817:"14eb3368",866:"d9af4fb2",918:"17896441"}[e]||e)+"."+{43:"9b4ad691",53:"79206bbb",85:"ad057b08",120:"58bab983",195:"73951343",264:"378f676a",336:"f4f159ea",414:"58e1eccf",514:"5683369d",592:"e2d79f86",666:"19572bc4",671:"806517ae",817:"f4b331cb",866:"ed239200",918:"b54ab9cb",972:"110de36e"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="kodi-website:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,d;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var b=(t,r)=>{i.onerror=i.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=b.bind(null,i.onerror),i.onload=b.bind(null,i.onload),d&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",f.gca=function(e){return e={17896441:"918",f6e811dd:"43","935f2afb":"53","1f391b9e":"85","05152a5e":"120",c4f5d8e4:"195","4b20ec12":"264",e9d234d8:"336","393be207":"414","1be78505":"514","4a317c19":"592","0e384e19":"671","14eb3368":"817",d9af4fb2:"866"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),i=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],i=r[1],d=r[2],u=0;if(n.some((t=>0!==e[t]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(d)var c=d(f)}for(t&&t(r);u<n.length;u++)a=n[u],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(c)},r=self.webpackChunkkodi_website=self.webpackChunkkodi_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
(function(t){function e(e){for(var n,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c8024020"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"28bf":function(t,e,r){"use strict";var n=r("9d15"),o=r.n(n);o.a},"4a03":function(t,e,r){},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(t,e,r){},"9d15":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Prashanth Sagari")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},a=[],u=(r("5c0b"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=(r("d3b7"),r("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Hi"}})],1)},p=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),r("p",[t._v(" Thank you for visiting this site. ")]),r("h3",[t._v("To Connect me in Facebook")]),t._m(0),r("h3",[t._v("Other Social Media Links")]),t._m(1)])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/prashanthsagari",target:"_blank",rel:"noopener"}},[t._v("Facebook")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.instagram.com/prashanthsagari/",target:"_blank",rel:"noopener"}},[t._v("Instagram")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/itsurprashanth",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://api.whatsapp.com/send?phone=919676255233",target:"_blank",rel:"noopener"}},[t._v("Whatsapp")])])])}],v={name:"HelloWorld",props:{msg:String}},m=v,b=(r("e103"),Object(u["a"])(m,d,h,!1,null,"3938fb27",null)),g=b.exports,_={name:"Home",components:{HelloWorld:g}},w=_,y=(r("28bf"),Object(u["a"])(w,f,p,!1,null,"45dc899d",null)),k=y.exports;n["default"].use(l["a"]);var O=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],j=new l["a"]({mode:"hash",base:"/",routes:O}),x=j,P=r("2f62");n["default"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=r("5f5b"),T=r("b1e0");r("f9e3"),r("2dd8");n["default"].config.productionTip=!1,n["default"].use(E["a"]),n["default"].use(T["a"]),new n["default"]({router:x,store:S,render:function(t){return t(c)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.b9746be9.png"},e103:function(t,e,r){"use strict";var n=r("4a03"),o=r.n(n);o.a}});
//# sourceMappingURL=app.37b36533.js.map
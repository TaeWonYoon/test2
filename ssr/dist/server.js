!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("fs")},function(e,n){e.exports={}},function(e,n){e.exports={}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(4),i=t.n(c),a=t(2),l=t.n(a),u=t(1),s=function(){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(u.NavLink,{to:"/red",activeStyle:{color:"red"}},"Red")),o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/blue"},"Blue"))))},f=(t(6),function(){return o.a.createElement("div",{className:"Red"},"Red")}),d=function(){return o.a.createElement("div",null,o.a.createElement(f,null))},p=(t(7),function(){return o.a.createElement("div",{className:"Blue"},"Blues")}),m=function(){return o.a.createElement("div",null,o.a.createElement(p,null))},v=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement("hr",null),o.a.createElement(u.Route,{path:"/red",component:d}),o.a.createElement(u.Route,{path:"/blue",component:m}))},h=t(3),b=t.n(h),E=t(5),y=t.n(E),x=JSON.parse(y.a.readFileSync(b.a.resolve("./build/asset-manifest.json"),"utf8")),j=Object.keys(x.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(x[e],'"><\/script>')})).join("");var g=l()(),O=l.a.static(b.a.resolve("./build"),{index:!1});g.use(O),g.use((function(e,n,t){var r=o.a.createElement(u.StaticRouter,{location:e.url,context:{}},o.a.createElement(v,null)),c=i.a.renderToString(r);n.send(function(e){return'<!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="/favicon.ico" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1,shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n    <link href="'.concat(x.files["main.css"],'" rel="stylesheet"/>\n    </head>\n    <body>\n      <noscript>You need to enable javascript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,'\n\n      </div>\n      <script src="').concat(x.files["runtime-main.js"],'"><\/script>\n\n      ').concat(j,'\n      <script src="').concat(x.files["main.js"],'"><\/script>\n\n    </body>\n  </html>\n  ')}(c))})),g.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);
(function(){var e={9049:function(){(function(e,n){var t=n.documentElement,o=e.devicePixelRatio||1;function r(){n.body?n.body.style.fontSize=12*o+"px":n.addEventListener("DOMContentLoaded",r)}function i(){var e=t.clientWidth/10;t.style.fontSize=e+"px"}if(r(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",(function(e){e.persisted&&i()})),o>=2){var a=n.createElement("body"),u=n.createElement("div");u.style.border=".5px solid transparent",a.appendChild(u),t.appendChild(a),1===u.offsetHeight&&t.classList.add("hairlines"),t.removeChild(a)}})(window,document)},6702:function(e,n,t){"use strict";var o=t(6369),r=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view"),e.isShowNav?n("tabbar"):e._e()],1)},i=[],a=function(){var e=this,n=e._self._c;return n("van-tabbar",{attrs:{route:"","active-color":"#1baeae"}},[n("van-tabbar-item",{attrs:{replace:"",to:"/home"},scopedSlots:e._u([{key:"icon",fn:function(){return[n("span",{staticClass:"icon iconfont icon-shouye"})]},proxy:!0}])},[n("span",[e._v("首页")])]),n("van-tabbar-item",{attrs:{replace:"",to:"/category",icon:"search"},scopedSlots:e._u([{key:"icon",fn:function(){return[n("span",{staticClass:"icon iconfont icon-grouping"})]},proxy:!0}])},[n("span",[e._v("分类")])]),n("van-tabbar-item",{attrs:{replace:"",to:"/cart",icon:"home-o"},scopedSlots:e._u([{key:"icon",fn:function(){return[n("span",{staticClass:"icon iconfont icon-gouwuche"})]},proxy:!0}])},[n("span",[e._v("购物车")])]),n("van-tabbar-item",{attrs:{replace:"",to:"/user",icon:"search"},scopedSlots:e._u([{key:"icon",fn:function(){return[n("span",{staticClass:"icon iconfont icon-31wode"})]},proxy:!0}])},[n("span",[e._v("我的")])])],1)},u=[],c={},s=c,f=t(1001),l=(0,f.Z)(s,a,u,!1,null,"f77e047a",null),d=l.exports,p={data(){return{isShowNav:!0}},components:{tabbar:d},watch:{$route:{handler:function(e){this.isShowNav=e.meta.isShowNav},immediate:!0}}},v=p,h=(0,f.Z)(v,r,i,!1,null,null,null),m=h.exports,b=t(2631),y=function(){var e=this,n=e._self._c;return n("div",[e._v(" 首页 ")])},g=[],w={},S=(0,f.Z)(w,y,g,!1,null,null,null),_=S.exports;o.ZP.use(b.ZP);const C=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:_,meta:{isShowNav:!0}},{path:"/cart",name:"cart",component:()=>t.e(799).then(t.bind(t,4799)),meta:{isShowNav:!0}},{path:"/category",name:"category",component:()=>t.e(432).then(t.bind(t,4432)),meta:{isShowNav:!0}},{path:"/user",name:"user",component:()=>t.e(619).then(t.bind(t,2619)),meta:{isShowNav:!0}},{path:"/login",name:"login",component:()=>t.e(954).then(t.bind(t,9954)),meta:{isShowNav:!1}}],x=new b.ZP({routes:C});var k=x,E=t(3822);o.ZP.use(E.ZP);var N=new E.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});t(9049),t(5110);o.ZP.config.productionTip=!1,o.ZP.use(vant),new o.ZP({router:k,store:N,render:e=>e(m)}).$mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{432:"4021cd55",619:"a0fbe49a",799:"ab50e2a7",954:"20974753"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".e4c29467.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="maluyanxuanvue2:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={954:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var f=c(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},o=self["webpackChunkmaluyanxuanvue2"]=self["webpackChunkmaluyanxuanvue2"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6702)}));o=t.O(o)})();
//# sourceMappingURL=app.ad8d66c1.js.map
(function(t){function e(e){for(var r,u,a=e[0],s=e[1],c=e[2],p=0,f=[];p<a.length;p++)u=a[p],i[u]&&f.push(i[u][0]),i[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/pinyin-filter-demo/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16be":function(t,e,n){"use strict";var r=n("1d67"),i=n.n(r);i.a},"1d67":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("筛选耗时 "),n("span",{staticStyle:{color:"red"}},[t._v(t._s(t.timeDuration.toFixed(2)))]),t._v("ms")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],attrs:{type:"text",placeholder:"输入以过滤：pufa银行"},domProps:{value:t.word},on:{input:function(e){e.target.composing||(t.word=e.target.value)}}})]),t.isInited?n("ol",t._l(t.filteredList,function(e,r){return n("li",{key:r},t._l(e.text.split(""),function(r,i){return n("span",{key:i,style:{color:e.arr&&e.arr.includes(i)?"red":"black"}},[t._v(t._s(r))])}),0)}),0):n("div",[t._v("loading")])])},a=[],s=(n("96cf"),n("3b8d")),c=n("08f0"),l=n.n(c),p={created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.initPinyin(),this.getStockList();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{word:"",list:[],p:void 0,timeDuration:0}},methods:{initPinyin:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./word.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.p=new l.a(n);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getStockList:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./stock-list.json");case 2:return e=t.sent,t.next=5,e.json();case 5:this.list=t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getFilteredList:function(){var t=this,e=window.performance.now();if(!this.word||!this.word.trim())return this.timeDuration=0,this.list.map(function(t){return{text:t}});if(this.p){var n=this.list.map(function(e){return{text:e,arr:t.p.test(e,t.word)}}).filter(function(t){return t&&t.arr&&t.arr.length});return this.timeDuration=window.performance.now()-e,n}return this.timeDuration=window.performance.now()-e,[]}},computed:{isInited:function(){return this.p&&this.list.length},filteredList:function(){return this.getFilteredList()}}},f=p,d=(n("16be"),n("2877")),h=Object(d["a"])(f,u,a,!1,null,"ec19bd18",null),v=h.exports,m={name:"app",components:{HelloWorld:v}},w=m,b=Object(d["a"])(w,i,o,!1,null,null,null),g=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.7ae26bcf.js.map
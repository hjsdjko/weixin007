(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/list"],{"0fdc":function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("63df"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])},"13f2":function(t,e,r){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),s=new P(n||[]);return a(o,"_invoke",{value:E(t,r,s)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",y="suspendedYield",g="executing",m="completed",v={};function w(){}function x(){}function b(){}var S={};l(S,u,(function(){return this}));var O=Object.getPrototypeOf,k=O&&O(O($([])));k&&k!==i&&o.call(k,u)&&(S=k);var L=b.prototype=w.prototype=Object.create(S);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function n(i,a,s,u){var c=d(t[i],t,a);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==r(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(l).then((function(t){h.value=t,s(h)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var i=p;return function(o,a){if(i===g)throw new Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var u=F(s,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=g;var c=d(e,r,n);if("normal"===c.type){if(i=n.done?m:y,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=m,n.method="throw",n.arg=c.arg)}}}function F(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,F(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=d(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function $(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return x.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=l(b,h,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,h,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(N.prototype),l(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new N(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),l(L,h,"Generator"),l(L,u,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function i(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,u,"next",t)}function u(t){i(a,n,o,s,u,"throw",t)}s(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"用户账号"},{queryName:"用户姓名"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",listSort:"id",listOrder:"desc"}},watch:{},mounted:function(){},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=o(n().mark((function t(){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(t){t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},components:{},methods:{uGetRect:function(e,r){var n=this;return new Promise((function(i){t.createSelectorQuery().in(n)[r?"selectAll":"select"](e).boundingClientRect((function(t){r&&Array.isArray(t)&&t.length&&i(t),!r&&t&&i(t)})).exec()}))},cloneData:function(t){return JSON.parse(JSON.stringify(t))},sortClick:function(t){this.listSort==t?"desc"==this.listOrder?this.listOrder="asc":this.listOrder="desc":(this.listSort=t,this.listOrder="desc"),this.search()},priceChange:function(t){return Number(t).toFixed(2)},preHttp:function(t){return t&&"http"==t.substr(0,4)},queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.yonghuzhanghao="",this.searchForm.yonghuxingming=""},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var e=o(n().mark((function e(r){var i,o,a,s,u;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={page:r.num,limit:r.size},i["sort"]=this.listSort,i["order"]=this.listOrder,this.searchForm.yonghuzhanghao&&(i["yonghuzhanghao"]="%"+this.searchForm.yonghuzhanghao+"%"),this.searchForm.yonghuxingming&&(i["yonghuxingming"]="%"+this.searchForm.yonghuxingming+"%"),t.getStorageSync("appUserid")?JSON.parse(t.getStorageSync("userSession")):{},o={},!this.userid){e.next=13;break}return e.next=10,this.$api.page("yonghu",i);case 10:o=e.sent,e.next=16;break;case 13:return e.next=15,this.$api.list("yonghu",i);case 15:o=e.sent;case 16:for(1==r.num&&(this.list=[]),this.list=this.list.concat(o.data.list),this.$forceUpdate(),a=Math.ceil(this.list.length/6),s=[],u=0;u<a;u++)s[u]=this.list.slice(6*u,6*(u+1));this.lists=s,0==o.data.list.length&&(this.hasNext=!1),r.endSuccess(r.size,this.hasNext);case 25:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdate:function(t){this.onUpdateTap(t.currentTarget.dataset.row)},onUpdateTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e.id))},onAddTap:function(){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDelete:function(t){this.onDeleteTap(t.currentTarget.dataset.row.id)},onDeleteTap:function(e){var r=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(n().mark((function t(i){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=6;break}return t.next=3,r.$api.del("yonghu",JSON.stringify([e]));case 3:r.$utils.msg("删除成功"),r.hasNext=!0,r.search();case 6:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()})},search:function(){var t=o(n().mark((function t(){var e,r,i,o,a;return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},e["sort"]=this.listSort,e["order"]=this.listOrder,this.searchForm.yonghuzhanghao&&(e["yonghuzhanghao"]="%"+this.searchForm.yonghuzhanghao+"%"),this.searchForm.yonghuxingming&&(e["yonghuxingming"]="%"+this.searchForm.yonghuxingming+"%"),r={},!this.userid){t.next=13;break}return t.next=10,this.$api.page("yonghu",e);case 10:r=t.sent,t.next=16;break;case 13:return t.next=15,this.$api.list("yonghu",e);case 15:r=t.sent;case 16:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(r.data.list),i=Math.ceil(this.list.length/6),o=[],a=0;a<i;a++)o[a]=this.list.slice(6*a,6*(a+1));this.lists=o,0==r.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}}).call(this,r("255a")["default"])},"41cc":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={mescrollUni:function(){return Promise.all([r.e("common/vendor"),r.e("components/mescroll-uni/mescroll-uni")]).then(r.bind(null,"f05e"))}},i=function(){var t=this,e=t.$createElement,r=(t._self._c,t.userid&&t.isAuth("yonghu","修改")),n=!t.userid&&t.isAuthFront("yonghu","修改"),i=t.userid&&t.isAuth("yonghu","删除"),o=!t.userid&&t.isAuthFront("yonghu","删除"),a=t.__map(t.list,(function(e,r){var n=t.__get_orig(e),i=t.preHttp(e.touxiang),o=i?e.touxiang.split(","):null,a=!i&&e.touxiang?e.touxiang.split(","):null;return{$orig:n,m0:i,g0:o,g1:a}})),s=t.userid&&t.isAuth("yonghu","新增"),u=!t.userid&&t.isAuthFront("yonghu","新增");t._isMounted||(t.e0=function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"proevent",void 0,e.key,void 0)?null:(e.stopPropagation(),t.onUpdate(e))},t.e1=function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"proevent",void 0,e.key,void 0)?null:(e.stopPropagation(),t.onDelete(e))}),t.$mp.data=Object.assign({},{$root:{m1:r,m2:n,m3:i,m4:o,l0:a,m5:s,m6:u}})},o=[]},"63df":function(t,e,r){"use strict";r.r(e);var n=r("41cc"),i=r("e38a");for(var o in i)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("8e7d");var a,s=r("7702"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7002cc06",null,!1,n["a"],a);e["default"]=u.exports},"68e1":function(t,e,r){},"8e7d":function(t,e,r){"use strict";var n=r("68e1"),i=r.n(n);i.a},e38a:function(t,e,r){"use strict";r.r(e);var n=r("13f2"),i=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}},[["0fdc","common/runtime","common/vendor"]]]);
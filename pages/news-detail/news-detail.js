(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"2fe9":function(t,e,r){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),c=new F(n||[]);return a(o,"_invoke",{value:O(t,r,c)}),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function w(){}function x(){}function b(){}var k={};h(k,s,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(N([])));S&&S!==i&&o.call(S,s)&&(k=S);var E=b.prototype=w.prototype=Object.create(k);function $(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,a,c,s){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var i=d;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var s=I(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?v:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function I(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=p(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return x.prototype=b,a(E,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},$(_.prototype),h(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new _(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},$(E),h(E,l,"Generator"),h(E,s,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{detail:{},id:"",likeType:!1,likeForm:{},collectType:!1,collectForm:{},allList:[],currentIndex:0,hotList:[],recommendList:[]}},onLoad:function(){var t=o(n().mark((function t(e){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,this.getInfo(),this.getHotList(),this.getRecommendList();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),computed:{baseUrl:function(){return this.$base.url},userid:function(){return t.getStorageSync("appUserid")}},methods:{getInfo:function(){var e=o(n().mark((function e(){var r,i;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.info("news",this.id);case 2:return r=e.sent,r.data.content=r.data.content.replace(/<img/g,'<img style="width: 100%;"'),this.detail=r.data,t.pageScrollTo({scrollTop:0,duration:100}),this.getLike(),this.getCollect(),e.next=10,this.$api.list("news",{page:1,limit:100,sort:"addtime",order:"desc"});case 10:r=e.sent,e.t0=n().keys(r.data.list);case 12:if((e.t1=e.t0()).done){e.next=19;break}if(i=e.t1.value,r.data.list[i].id!=this.id){e.next=17;break}return this.currentIndex=Number(i),e.abrupt("break",19);case 17:e.next=12;break;case 19:this.allList=r.data.list;case 20:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),getLike:function(){var e=o(n().mark((function e(){var r;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.list("storeup",{page:1,limit:1,type:21,userid:t.getStorageSync("appUserid"),refid:this.id,tablename:"news"});case 2:r=e.sent,r.data.list.length?(this.likeType=!0,this.likeForm=r.data.list[0]):(this.likeType=!1,this.likeForm={});case 4:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),getHotList:function(){var t=o(n().mark((function t(){var e;return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.recommend("news",{page:1,limit:4,sort:"addtime",order:"desc"});case 2:e=t.sent,this.hotList=e.data.list;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getRecommendList:function(){var e=o(n().mark((function e(){var r;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getStorageSync("appUserid")){e.next=6;break}return e.next=3,this.$api.recommend2("news",{page:1,limit:4,sort:"addtime",order:"desc"});case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,this.$api.recommend("news",{page:1,limit:4,sort:"addtime",order:"desc"});case 8:r=e.sent;case 9:this.recommendList=r.data.list;case 10:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),prepDetailClick:function(){if(0==this.currentIndex)return this.$message.error("已经是第一篇了"),!1;this.currentIndex--,this.id=this.allList[this.currentIndex].id,this.getInfo()},nextDetailClick:function(){if(this.currentIndex==this.allList.length-1)return this.$message.error("已经是最后一篇了"),!1;this.currentIndex++,this.id=this.allList[this.currentIndex].id,this.getInfo()},toDetail:function(t){this.id=t,this.getInfo()},getCollect:function(){var e=o(n().mark((function e(){var r;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.list("storeup",{page:1,limit:1,type:1,userid:t.getStorageSync("appUserid"),refid:this.id,tablename:"news"});case 2:r=e.sent,r.data.list.length?(this.collectType=!0,this.collectForm=r.data.list[0]):(this.collectType=!1,this.collectForm={});case 4:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),likeClick:function(){var e=o(n().mark((function e(){var r;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this,!this.likeType){e.next=5;break}t.showModal({title:"提示",content:"是否取消点赞？",success:function(){var t=o(n().mark((function t(e){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=8;break}return t.next=3,r.$api.del("storeup",JSON.stringify([r.likeForm.id]));case 3:return r.$utils.msg("取消成功"),r.detail.thumbsupnum--,t.next=7,r.$api.update("news",r.detail);case 7:r.getLike();case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.next=12;break;case 5:return e.next=7,r.$api.add("storeup",{userid:t.getStorageSync("appUserid"),refid:this.id,type:21,name:this.detail.title,picture:this.detail.picture,tablename:"news"});case 7:return this.$utils.msg("点赞成功"),r.detail.thumbsupnum++,e.next=11,r.$api.update("news",r.detail);case 11:this.getLike();case 12:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),collectClick:function(){var e=o(n().mark((function e(){var r;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this,!this.collectType){e.next=5;break}t.showModal({title:"提示",content:"是否取消收藏？",success:function(){var t=o(n().mark((function t(e){return n().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=8;break}return t.next=3,r.$api.del("storeup",JSON.stringify([r.collectForm.id]));case 3:return r.$utils.msg("取消成功"),r.detail.storeupnum--,t.next=7,r.$api.update("news",r.detail);case 7:r.getCollect();case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.next=12;break;case 5:return e.next=7,r.$api.add("storeup",{userid:t.getStorageSync("appUserid"),refid:this.id,type:1,name:this.detail.title,picture:this.detail.picture,tablename:"news"});case 7:return this.$utils.msg("收藏成功"),r.detail.storeupnum++,e.next=11,r.$api.update("news",r.detail);case 11:this.getCollect();case 12:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()}}}).call(this,r("255a")["default"])},"7fc3":function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("c366"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])},"9c24":function(t,e,r){},c147:function(t,e,r){"use strict";r.r(e);var n=r("2fe9"),i=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c2a6:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},c366:function(t,e,r){"use strict";r.r(e);var n=r("c2a6"),i=r("c147");for(var o in i)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("d035");var a,c=r("7702"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"94dc3e42",null,!1,n["a"],a);e["default"]=s.exports},d035:function(t,e,r){"use strict";var n=r("9c24"),i=r.n(n);i.a}},[["7fc3","common/runtime","common/vendor"]]]);
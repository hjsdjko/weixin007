(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiangmudingdan/add-or-update"],{4473:function(t,e,n){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),u=new z(r||[]);return a(o,"_invoke",{value:$(t,n,u)}),o}function g(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var m="suspendedStart",p="suspendedYield",d="executing",y="completed",x={};function v(){}function b(){}function w(){}var k={};l(k,c,(function(){return this}));var S=Object.getPrototypeOf,F=S&&S(S(P([])));F&&F!==n&&o.call(F,c)&&(k=F);var j=w.prototype=v.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,a,u,c){var s=g(t[i],t,a);if("throw"!==s.type){var h=s.arg,l=h.value;return l&&"object"==r(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(l).then((function(t){h.value=t,u(h)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function $(e,n,r){var i=m;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var c=T(u,r);if(c){if(c===x)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===m)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=d;var s=g(e,n,r);if("normal"===s.type){if(i=r.done?y:p,s.arg===x)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=y,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var o=g(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,x;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=w,a(j,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,h,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,h,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),l(j,h,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;_(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},e}function o(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(t){o(a,r,i,u,c,"next",t)}function c(t){o(a,r,i,u,c,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("e2b1"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/xia-editor/xia-editor").then(function(){return resolve(n("064f"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/momo-multipleSelect/momo-multipleSelect").then(function(){return resolve(n("bd56"))}.bind(null,n)).catch(n.oe)};e.default={data:function(){return{cross:"",ruleForm:{xiangmumingcheng:"",xiangmuleixing:"",xiangmutupian:"",xiangmudizhi:"",xiangmujiage:"",yudingshijian:"",yudingbeizhu:"",yonghuzhanghao:"",yonghuxingming:"",ispay:""},user:{},ro:{xiangmumingcheng:!1,xiangmuleixing:!1,xiangmutupian:!1,xiangmudizhi:!1,xiangmujiage:!1,yudingshijian:!1,yudingbeizhu:!1,yonghuzhanghao:!1,yonghuxingming:!1,ispay:!1}}},components:{wPicker:u,xiaEditor:c,multipleSelect:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(i().mark((function e(n){var r,o,a,u,c=this;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.yudingshijian=this.$utils.getCurDateTime(),r=t.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:if(o=e.sent,this.user=o.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.userid=t.getStorageSync("appUserid"),n.refid&&(this.ruleForm.refid=Number(n.refid),this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=18;break}return this.ruleForm.id=n.id,e.next=16,this.$api.info("xiangmudingdan",this.ruleForm.id);case 16:o=e.sent,this.ruleForm=o.data;case 18:if(this.cross=n.cross,!n.cross){e.next=62;break}a=t.getStorageSync("crossObj"),e.t0=i().keys(a);case 22:if((e.t1=e.t0()).done){e.next=62;break}if(u=e.t1.value,"xiangmumingcheng"!=u){e.next=28;break}return this.ruleForm.xiangmumingcheng=a[u],this.ro.xiangmumingcheng=!0,e.abrupt("continue",22);case 28:if("xiangmuleixing"!=u){e.next=32;break}return this.ruleForm.xiangmuleixing=a[u],this.ro.xiangmuleixing=!0,e.abrupt("continue",22);case 32:if("xiangmutupian"!=u){e.next=36;break}return this.ruleForm.xiangmutupian=a[u].split(",")[0],this.ro.xiangmutupian=!0,e.abrupt("continue",22);case 36:if("xiangmudizhi"!=u){e.next=40;break}return this.ruleForm.xiangmudizhi=a[u],this.ro.xiangmudizhi=!0,e.abrupt("continue",22);case 40:if("xiangmujiage"!=u){e.next=44;break}return this.ruleForm.xiangmujiage=a[u],this.ro.xiangmujiage=!0,e.abrupt("continue",22);case 44:if("yudingshijian"!=u){e.next=48;break}return this.ruleForm.yudingshijian=a[u],this.ro.yudingshijian=!0,e.abrupt("continue",22);case 48:if("yudingbeizhu"!=u){e.next=52;break}return this.ruleForm.yudingbeizhu=a[u],this.ro.yudingbeizhu=!0,e.abrupt("continue",22);case 52:if("yonghuzhanghao"!=u){e.next=56;break}return this.ruleForm.yonghuzhanghao=a[u],this.ro.yonghuzhanghao=!0,e.abrupt("continue",22);case 56:if("yonghuxingming"!=u){e.next=60;break}return this.ruleForm.yonghuxingming=a[u],this.ro.yonghuxingming=!0,e.abrupt("continue",22);case 60:e.next=22;break;case 62:this.styleChange(),this.$forceUpdate(),t.getStorageSync("raffleType")&&null!=t.getStorageSync("raffleType")&&(t.removeStorageSync("raffleType"),setTimeout((function(){c.onSubmitTap()}),300));case 65:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yudingshijianConfirm:function(t){console.log(t),this.ruleForm.yudingshijian=t.result,this.$forceUpdate()},xiangmutupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.xiangmutupian="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i().mark((function e(){var n,r,o,a,u,c,s,h,l,f;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.ispay="未支付",!this.ruleForm.xiangmujiage||this.$validate.isIntNumer(this.ruleForm.xiangmujiage)){e.next=4;break}return this.$utils.msg("项目价格应输入整数"),e.abrupt("return");case 4:if(!this.cross){e.next=21;break}if(t.setStorageSync("crossCleanType",!0),u=t.getStorageSync("statusColumnName"),c=t.getStorageSync("statusColumnValue"),""==u){e.next=21;break}if(n||(n=t.getStorageSync("crossObj")),u.startsWith("[")){e.next=17;break}for(s in n)s==u&&(n[s]=c);return h=t.getStorageSync("crossTable"),e.next=15,this.$api.update("".concat(h),n);case 15:e.next=21;break;case 17:r=Number(t.getStorageSync("appUserid")),o=n["id"],a=t.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 21:if(!o||!r){e.next=44;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=o,l={page:1,limit:10,crossuserid:r,crossrefid:o},e.next=27,this.$api.list("xiangmudingdan",l);case 27:if(f=e.sent,!(f.data.total>=a)){e.next=34;break}return this.$utils.msg(t.getStorageSync("tips")),t.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 34:if(!this.ruleForm.id){e.next=39;break}return e.next=37,this.$api.update("xiangmudingdan",this.ruleForm);case 37:e.next=41;break;case 39:return e.next=41,this.$api.add("xiangmudingdan",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:e.next=52;break;case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("xiangmudingdan",this.ruleForm);case 47:e.next=51;break;case 49:return e.next=51,this.$api.add("xiangmudingdan",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){if(this.ro[t])return!1;this.$refs[t].show()}}}}).call(this,n("255a")["default"])},5885:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.ruleForm.xiangmutupian?t.ruleForm.xiangmutupian.split(","):null);t.$mp.data=Object.assign({},{$root:{g0:n}})},o=[]},6396:function(t,e,n){"use strict";n.r(e);var r=n("5885"),i=n("6a37");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("abac");var a,u=n("7702"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"a3b9dc52",null,!1,r["a"],a);e["default"]=c.exports},"6a37":function(t,e,n){"use strict";n.r(e);var r=n("4473"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"76fc":function(t,e,n){"use strict";(function(t){n("6cdc");r(n("dda7"));var e=r(n("6396"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("255a")["createPage"])},abac:function(t,e,n){"use strict";var r=n("f824"),i=n.n(r);i.a},f824:function(t,e,n){}},[["76fc","common/runtime","common/vendor"]]]);
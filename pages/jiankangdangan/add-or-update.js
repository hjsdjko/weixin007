(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiankangdangan/add-or-update"],{1056:function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("6d16"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])},"43f9":function(t,e,r){"use strict";r.r(e);var n=r("482d"),i=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"482d":function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),u=new N(n||[]);return a(o,"_invoke",{value:E(t,r,u)}),o}function g(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="suspendedYield",m="executing",y="completed",v={};function x(){}function b(){}function w(){}var k={};l(k,s,(function(){return this}));var F=Object.getPrototypeOf,S=F&&F(F(z([])));S&&S!==r&&o.call(S,s)&&(k=S);var $=w.prototype=x.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(i,a,u,s){var c=g(t[i],t,a);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==n(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,u,s)}),(function(t){r("throw",t,u,s)})):e.resolve(l).then((function(t){h.value=t,u(h)}),(function(t){return r("throw",t,u,s)}))}s(c.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var i=p;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var u=n.delegate;if(u){var s=O(u,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var c=g(e,r,n);if("normal"===c.type){if(i=n.done?y:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=y,n.method="throw",n.arg=c.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=g(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function z(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=w,a($,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,h,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,h,"GeneratorFunction")),t.prototype=Object.create($),t},e.awrap=function(t){return{__await:t}},L(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new j(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L($),l($,h,"Generator"),l($,s,(function(){return this})),l($,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=z,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return u.type="throw",u.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:z(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function o(t,e,r,n,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void r(c)}u.done?e(s):Promise.resolve(s).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,s,"next",t)}function s(t){o(a,n,i,u,s,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("e2b1"))}.bind(null,r)).catch(r.oe)},s=function(){r.e("components/xia-editor/xia-editor").then(function(){return resolve(r("064f"))}.bind(null,r)).catch(r.oe)},c=function(){r.e("components/momo-multipleSelect/momo-multipleSelect").then(function(){return resolve(r("bd56"))}.bind(null,r)).catch(r.oe)};e.default={data:function(){return{cross:"",ruleForm:{riqi:"",tiwen:"",xueya:"",xuezhi:"",xuetang:"",xinlv:"",yonghuzhanghao:"",yonghuxingming:"",touxiang:""},user:{},ro:{riqi:!1,tiwen:!1,xueya:!1,xuezhi:!1,xuetang:!1,xinlv:!1,yonghuzhanghao:!1,yonghuxingming:!1,touxiang:!1}}},components:{wPicker:u,xiaEditor:s,multipleSelect:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(i().mark((function e(r){var n,o,a,u,s=this;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.riqi=this.$utils.getCurDate(),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:if(o=e.sent,this.user=o.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.touxiang=this.user.touxiang,this.ro.touxiang=!0,this.ruleForm.userid=t.getStorageSync("appUserid"),r.refid&&(this.ruleForm.refid=Number(r.refid),this.ruleForm.nickname=t.getStorageSync("nickname")),!r.id){e.next=20;break}return this.ruleForm.id=r.id,e.next=18,this.$api.info("jiankangdangan",this.ruleForm.id);case 18:o=e.sent,this.ruleForm=o.data;case 20:if(this.cross=r.cross,!r.cross){e.next=64;break}a=t.getStorageSync("crossObj"),e.t0=i().keys(a);case 24:if((e.t1=e.t0()).done){e.next=64;break}if(u=e.t1.value,"riqi"!=u){e.next=30;break}return this.ruleForm.riqi=a[u],this.ro.riqi=!0,e.abrupt("continue",24);case 30:if("tiwen"!=u){e.next=34;break}return this.ruleForm.tiwen=a[u],this.ro.tiwen=!0,e.abrupt("continue",24);case 34:if("xueya"!=u){e.next=38;break}return this.ruleForm.xueya=a[u],this.ro.xueya=!0,e.abrupt("continue",24);case 38:if("xuezhi"!=u){e.next=42;break}return this.ruleForm.xuezhi=a[u],this.ro.xuezhi=!0,e.abrupt("continue",24);case 42:if("xuetang"!=u){e.next=46;break}return this.ruleForm.xuetang=a[u],this.ro.xuetang=!0,e.abrupt("continue",24);case 46:if("xinlv"!=u){e.next=50;break}return this.ruleForm.xinlv=a[u],this.ro.xinlv=!0,e.abrupt("continue",24);case 50:if("yonghuzhanghao"!=u){e.next=54;break}return this.ruleForm.yonghuzhanghao=a[u],this.ro.yonghuzhanghao=!0,e.abrupt("continue",24);case 54:if("yonghuxingming"!=u){e.next=58;break}return this.ruleForm.yonghuxingming=a[u],this.ro.yonghuxingming=!0,e.abrupt("continue",24);case 58:if("touxiang"!=u){e.next=62;break}return this.ruleForm.touxiang=a[u].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",24);case 62:e.next=24;break;case 64:this.styleChange(),this.$forceUpdate(),t.getStorageSync("raffleType")&&null!=t.getStorageSync("raffleType")&&(t.removeStorageSync("raffleType"),setTimeout((function(){s.onSubmitTap()}),300));case 67:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},riqiChange:function(t){this.ruleForm.riqi=t.target.value,this.$forceUpdate()},touxiangTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.touxiang="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i().mark((function e(){var r,n,o,a,u,s,c,h,l,f;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.tiwen||this.$validate.isNumber(this.ruleForm.tiwen)){e.next=3;break}return this.$utils.msg("体温应输入数字"),e.abrupt("return");case 3:if(!this.ruleForm.xueya||this.$validate.isNumber(this.ruleForm.xueya)){e.next=6;break}return this.$utils.msg("血压应输入数字"),e.abrupt("return");case 6:if(!this.ruleForm.xuezhi||this.$validate.isNumber(this.ruleForm.xuezhi)){e.next=9;break}return this.$utils.msg("血脂应输入数字"),e.abrupt("return");case 9:if(!this.ruleForm.xuetang||this.$validate.isNumber(this.ruleForm.xuetang)){e.next=12;break}return this.$utils.msg("血糖应输入数字"),e.abrupt("return");case 12:if(!this.ruleForm.xinlv||this.$validate.isNumber(this.ruleForm.xinlv)){e.next=15;break}return this.$utils.msg("心率应输入数字"),e.abrupt("return");case 15:if(!this.cross){e.next=32;break}if(t.setStorageSync("crossCleanType",!0),u=t.getStorageSync("statusColumnName"),s=t.getStorageSync("statusColumnValue"),""==u){e.next=32;break}if(r||(r=t.getStorageSync("crossObj")),u.startsWith("[")){e.next=28;break}for(c in r)c==u&&(r[c]=s);return h=t.getStorageSync("crossTable"),e.next=26,this.$api.update("".concat(h),r);case 26:e.next=32;break;case 28:n=Number(t.getStorageSync("appUserid")),o=r["id"],a=t.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 32:if(!o||!n){e.next=55;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=o,l={page:1,limit:10,crossuserid:n,crossrefid:o},e.next=38,this.$api.list("jiankangdangan",l);case 38:if(f=e.sent,!(f.data.total>=a)){e.next=45;break}return this.$utils.msg(t.getStorageSync("tips")),t.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 45:if(!this.ruleForm.id){e.next=50;break}return e.next=48,this.$api.update("jiankangdangan",this.ruleForm);case 48:e.next=52;break;case 50:return e.next=52,this.$api.add("jiankangdangan",this.ruleForm);case 52:this.$utils.msgBack("提交成功");case 53:e.next=63;break;case 55:if(!this.ruleForm.id){e.next=60;break}return e.next=58,this.$api.update("jiankangdangan",this.ruleForm);case 58:e.next=62;break;case 60:return e.next=62,this.$api.add("jiankangdangan",this.ruleForm);case 62:this.$utils.msgBack("提交成功");case 63:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),n=e.getMonth()+1,i=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(t){if(this.ro[t])return!1;this.$refs[t].show()}}}}).call(this,r("255a")["default"])},"6d16":function(t,e,r){"use strict";r.r(e);var n=r("872c"),i=r("43f9");for(var o in i)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("94c7");var a,u=r("7702"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"4d40e0a4",null,!1,n["a"],a);e["default"]=s.exports},"872c":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=(t._self._c,t.ruleForm.touxiang?t.ruleForm.touxiang.split(","):null);t.$mp.data=Object.assign({},{$root:{g0:r}})},o=[]},"94c7":function(t,e,r){"use strict";var n=r("d617"),i=r.n(n);i.a},d617:function(t,e,r){}},[["1056","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0943":function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("3735"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])},3735:function(t,e,r){"use strict";r.r(e);var n=r("6276"),o=r("48c7");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("c243");var a,u=r("7702"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"f5182e10",null,!1,n["a"],a);e["default"]=c.exports},"48c7":function(t,e,r){"use strict";r.r(e);var n=r("a03a"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},6276:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"90f1":function(t,e,r){},a03a:function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new P(n||[]);return a(i,"_invoke",{value:N(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var g="suspendedStart",y="suspendedYield",m="executing",d="completed",v={};function b(){}function w(){}function x(){}var L={};h(L,c,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(T([])));O&&O!==r&&i.call(O,c)&&(L=O);var _=x.prototype=b.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function r(o,a,u,c){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function N(e,r,n){var o=g;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=S(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===g)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?d:y,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=x,a(_,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=h(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},k(F.prototype),h(F.prototype,s,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new F(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),h(_,l,"Generator"),h(_,c,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){r.e("components/momo-multipleSelect/momo-multipleSelect").then(function(){return resolve(r("bd56"))}.bind(null,r)).catch(r.oe)};e.default={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{yonghuzhanghao:"",mima:"",yonghuxingming:"",xingbie:"",nianling:"",dianhua:"",touxiang:""},tableName:""}},components:{multipleSelect:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(o().mark((function e(){var r;return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],r=t.getStorageSync("loginTable"),this.tableName=r,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},yonghutouxiangTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.touxiang="upload/"+e.file,t.$forceUpdate()}))},toggleTab:function(t){this.$refs[t].show()},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(o().mark((function t(){return o().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuzhanghao||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){t.next=9;break}return this.$utils.msg("两次密码输入不一致"),t.abrupt("return");case 9:if(this.ruleForm.yonghuxingming||"yonghu"!=this.tableName){t.next=12;break}return this.$utils.msg("用户姓名不能为空"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=15;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){t.next=18;break}return this.$utils.msg("电话应输入手机格式"),t.abrupt("return");case 18:return t.next=20,this.$api.register("".concat(this.tableName),this.ruleForm);case 20:this.$utils.msgBack("注册成功");case 22:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}}).call(this,r("255a")["default"])},c243:function(t,e,r){"use strict";var n=r("90f1"),o=r.n(n);o.a}},[["0943","common/runtime","common/vendor"]]]);
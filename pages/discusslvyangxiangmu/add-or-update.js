(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discusslvyangxiangmu/add-or-update"],{"1c63":function(t,e,r){"use strict";r.r(e);var n=r("682c"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"1e57":function(t,e,r){"use strict";r.r(e);var n=r("66ee"),o=r("1c63");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("71be");var a,u=r("7702"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"591b61ac",null,!1,n["a"],a);e["default"]=c.exports},"66ee":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={xiaEditor:function(){return r.e("components/xia-editor/xia-editor").then(r.bind(null,"064f"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"682c":function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new C(n||[]);return a(i,"_invoke",{value:$(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",m="suspendedYield",y="executing",g="completed",v={};function b(){}function x(){}function w(){}var S={};f(S,c,(function(){return this}));var k=Object.getPrototypeOf,F=k&&k(k(P([])));F&&F!==r&&i.call(F,c)&&(S=F);var L=w.prototype=b.prototype=Object.create(S);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,a,u,c){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function $(e,r,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:m,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return x.prototype=w,a(L,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(T.prototype),f(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new T(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),f(L,l,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("e2b1"))}.bind(null,r)).catch(r.oe)},c=function(){r.e("components/xia-editor/xia-editor").then(function(){return resolve(r("064f"))}.bind(null,r)).catch(r.oe)},s=function(){r.e("components/momo-multipleSelect/momo-multipleSelect").then(function(){return resolve(r("bd56"))}.bind(null,r)).catch(r.oe)};e.default={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",avatarurl:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,avatarurl:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:u,xiaEditor:c,multipleSelect:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(o().mark((function e(r){var n,i,a,u,c=this;return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=t.getStorageSync("appUserid"),r.refid&&(this.ruleForm.refid=Number(r.refid),this.ruleForm.nickname=t.getStorageSync("nickname")),!r.id){e.next=13;break}return this.ruleForm.id=r.id,e.next=11,this.$api.info("discusslvyangxiangmu",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(this.cross=r.cross,!r.cross){e.next=45;break}a=t.getStorageSync("crossObj"),e.t0=o().keys(a);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(u=e.t1.value,"refid"!=u){e.next=23;break}return this.ruleForm.refid=a[u],this.ro.refid=!0,e.abrupt("continue",17);case 23:if("userid"!=u){e.next=27;break}return this.ruleForm.userid=a[u],this.ro.userid=!0,e.abrupt("continue",17);case 27:if("avatarurl"!=u){e.next=31;break}return this.ruleForm.avatarurl=a[u].split(",")[0],this.ro.avatarurl=!0,e.abrupt("continue",17);case 31:if("nickname"!=u){e.next=35;break}return this.ruleForm.nickname=a[u],this.ro.nickname=!0,e.abrupt("continue",17);case 35:if("content"!=u){e.next=39;break}return this.ruleForm.content=a[u],this.ro.content=!0,e.abrupt("continue",17);case 39:if("reply"!=u){e.next=43;break}return this.ruleForm.reply=a[u],this.ro.reply=!0,e.abrupt("continue",17);case 43:e.next=17;break;case 45:this.styleChange(),this.$forceUpdate(),t.getStorageSync("raffleType")&&null!=t.getStorageSync("raffleType")&&(t.removeStorageSync("raffleType"),setTimeout((function(){c.onSubmitTap()}),300));case 48:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),methods:{contentChange:function(t){this.ruleForm.content=t},styleChange:function(){this.$nextTick((function(){}))},avatarurlTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.avatarurl="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(o().mark((function e(){var r,n,i,a,u,c,s,l,f,h,p,d,m,y;return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.ruleForm.avatarurl=t.getStorageSync("headportrait")?t.getStorageSync("headportrait"):"",r="",n=[],r&&(n=r.split(",")),i=0;i<n.length;i++)a=new RegExp(n[i],"g"),this.ruleForm.content.indexOf(n[i])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(a,"**"));if(this.ruleForm.refid){e.next=8;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 8:if(this.ruleForm.userid){e.next=11;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 11:if(this.ruleForm.content){e.next=14;break}return this.$utils.msg("评论内容不能为空"),e.abrupt("return");case 14:if(!this.cross){e.next=31;break}if(t.setStorageSync("crossCleanType",!0),f=t.getStorageSync("statusColumnName"),h=t.getStorageSync("statusColumnValue"),""==f){e.next=31;break}if(u||(u=t.getStorageSync("crossObj")),f.startsWith("[")){e.next=27;break}for(p in u)p==f&&(u[p]=h);return d=t.getStorageSync("crossTable"),e.next=25,this.$api.update("".concat(d),u);case 25:e.next=31;break;case 27:c=Number(t.getStorageSync("appUserid")),s=u["id"],l=t.getStorageSync("statusColumnName"),l=l.replace(/\[/,"").replace(/\]/,"");case 31:if(!s||!c){e.next=55;break}return this.ruleForm.crossuserid=c,this.ruleForm.crossrefid=s,m={page:1,limit:10,crossuserid:c,crossrefid:s},e.next=37,this.$api.list("discusslvyangxiangmu",m);case 37:if(y=e.sent,!(y.data.total>=l)){e.next=44;break}return this.$utils.msg(t.getStorageSync("tips")),t.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("discusslvyangxiangmu",this.ruleForm);case 47:e.next=51;break;case 49:return e.next=51,this.$api.add("discusslvyangxiangmu",this.ruleForm);case 51:t.setStorageSync("discusslvyangxiangmuCleanType",!0),this.$utils.msgBack("提交成功");case 53:e.next=64;break;case 55:if(!this.ruleForm.id){e.next=60;break}return e.next=58,this.$api.update("discusslvyangxiangmu",this.ruleForm);case 58:e.next=62;break;case 60:return e.next=62,this.$api.add("discusslvyangxiangmu",this.ruleForm);case 62:t.setStorageSync("discusslvyangxiangmuCleanType",!0),this.$utils.msgBack("提交成功");case 64:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),n=n>9?n:"0"+n,o=o>9?o:"0"+o,"".concat(r,"-").concat(n,"-").concat(o)},toggleTab:function(t){if(this.ro[t])return!1;this.$refs[t].show()}}}}).call(this,r("255a")["default"])},"71be":function(t,e,r){"use strict";var n=r("720a"),o=r.n(n);o.a},"720a":function(t,e,r){},db24:function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("1e57"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])}},[["db24","common/runtime","common/vendor"]]]);
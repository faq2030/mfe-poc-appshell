/*! For license information please see 65.js.LICENSE.txt */
(self.webpackChunkapp_1=self.webpackChunkapp_1||[]).push([[65,418],{418:function(r){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,c){for(var i,a,f=o(r),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(f[u]=i[u]);if(e){a=e(i);for(var p=0;p<a.length;p++)n.call(i,a[p])&&(f[a[p]]=i[a[p]])}}return f}},251:function(r,e,t){"use strict";t(418);var n=t(950),o=60103;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};e.jsx=function(r,e,t){var n,c={},s=null,u=null;for(n in void 0!==t&&(s=""+t),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,n)&&!f.hasOwnProperty(n)&&(c[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps)void 0===c[n]&&(c[n]=e[n]);return{$$typeof:o,type:r,key:s,ref:u,props:c,_owner:i.current}}},893:function(r,e,t){"use strict";r.exports=t(251)},65:function(r,e,t){"use strict";t.r(e);var n=t(893),o=function(){return(o=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)};e.default=function(){return(0,n.jsx)("div",o({style:{border:"2px dashed green",height:"200px",width:"400px"}},{children:"CONTENT APP 1"}),void 0)}}}]);
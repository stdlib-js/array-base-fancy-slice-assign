"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=f(function(S,y){
var h=require('@stdlib/array-base-assert-is-mostly-safe-data-type-cast/dist'),q=require('@stdlib/array-base-assert-is-real-data-type/dist'),m=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),c=require('@stdlib/slice-base-normalize-slice/dist'),w=require('@stdlib/slice-base-length/dist'),p=require('@stdlib/array-dtype/dist'),b=require('@stdlib/array-convert/dist'),D=require('@stdlib/blas-base-gcopy/dist').ndarray,o=require('@stdlib/error-tools-fmtprodmsg/dist');function x(e,r,v,g){var i,n,s,t,a,l,u;if(s=p(e)||"generic",t=p(r)||"generic",i=e.length,n=r.length,!h(s,t))throw new TypeError(o('1rHF0',s,t));if(m(t)&&q(s)&&(e=b(e,t)),a=c(v,n,!0),a.code){if(g)throw new RangeError(o('1rHFS',n));a=c(v,n,!1)}if(u=w(a),i===1)l=0;else if(i===u)l=1;else throw new Error(o('1rHFT',i,u));return D(u,e,l,0,r,a.step,a.start),r}y.exports=x
});var A=d();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
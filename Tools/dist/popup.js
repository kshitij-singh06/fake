(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Ex(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l3(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var i=function s(){return this instanceof s?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};i.prototype=r.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var c=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(i,s,c.get?c:{enumerable:!0,get:function(){return e[s]}})}),i}var Lv={exports:{}},fo={},jv={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),Tx=Symbol.for("react.portal"),zx=Symbol.for("react.fragment"),Cx=Symbol.for("react.strict_mode"),Ix=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Rx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),Ax=Symbol.for("react.suspense"),Mx=Symbol.for("react.memo"),Px=Symbol.for("react.lazy"),Ey=Symbol.iterator;function Bx(e){return e===null||typeof e!="object"?null:(e=Ey&&e[Ey]||e["@@iterator"],typeof e=="function"?e:null)}var Uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vv=Object.assign,Wv={};function Ti(e,r,i){this.props=e,this.context=r,this.refs=Wv,this.updater=i||Uv}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fv(){}Fv.prototype=Ti.prototype;function Ad(e,r,i){this.props=e,this.context=r,this.refs=Wv,this.updater=i||Uv}var Md=Ad.prototype=new Fv;Md.constructor=Ad;Vv(Md,Ti.prototype);Md.isPureReactComponent=!0;var Ty=Array.isArray,qv=Object.prototype.hasOwnProperty,Pd={current:null},Gv={key:!0,ref:!0,__self:!0,__source:!0};function Hv(e,r,i){var s,c={},f=null,g=null;if(r!=null)for(s in r.ref!==void 0&&(g=r.ref),r.key!==void 0&&(f=""+r.key),r)qv.call(r,s)&&!Gv.hasOwnProperty(s)&&(c[s]=r[s]);var b=arguments.length-2;if(b===1)c.children=i;else if(1<b){for(var _=Array(b),N=0;N<b;N++)_[N]=arguments[N+2];c.children=_}if(e&&e.defaultProps)for(s in b=e.defaultProps,b)c[s]===void 0&&(c[s]=b[s]);return{$$typeof:Pa,type:e,key:f,ref:g,props:c,_owner:Pd.current}}function Dx(e,r){return{$$typeof:Pa,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pa}function Lx(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return r[i]})}var zy=/\/+/g;function cu(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Lx(""+e.key):r.toString(36)}function zs(e,r,i,s,c){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var g=!1;if(e===null)g=!0;else switch(f){case"string":case"number":g=!0;break;case"object":switch(e.$$typeof){case Pa:case Tx:g=!0}}if(g)return g=e,c=c(g),e=s===""?"."+cu(g,0):s,Ty(c)?(i="",e!=null&&(i=e.replace(zy,"$&/")+"/"),zs(c,r,i,"",function(N){return N})):c!=null&&(Bd(c)&&(c=Dx(c,i+(!c.key||g&&g.key===c.key?"":(""+c.key).replace(zy,"$&/")+"/")+e)),r.push(c)),1;if(g=0,s=s===""?".":s+":",Ty(e))for(var b=0;b<e.length;b++){f=e[b];var _=s+cu(f,b);g+=zs(f,r,i,_,c)}else if(_=Bx(e),typeof _=="function")for(e=_.call(e),b=0;!(f=e.next()).done;)f=f.value,_=s+cu(f,b++),g+=zs(f,r,i,_,c);else if(f==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return g}function ls(e,r,i){if(e==null)return e;var s=[],c=0;return zs(e,s,"","",function(f){return r.call(i,f,c++)}),s}function jx(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var It={current:null},Cs={transition:null},Ux={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:Pd};function Kv(){throw Error("act(...) is not supported in production builds of React.")}Te.Children={map:ls,forEach:function(e,r,i){ls(e,function(){r.apply(this,arguments)},i)},count:function(e){var r=0;return ls(e,function(){r++}),r},toArray:function(e){return ls(e,function(r){return r})||[]},only:function(e){if(!Bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Te.Component=Ti;Te.Fragment=zx;Te.Profiler=Ix;Te.PureComponent=Ad;Te.StrictMode=Cx;Te.Suspense=Ax;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ux;Te.act=Kv;Te.cloneElement=function(e,r,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Vv({},e.props),c=e.key,f=e.ref,g=e._owner;if(r!=null){if(r.ref!==void 0&&(f=r.ref,g=Pd.current),r.key!==void 0&&(c=""+r.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(_ in r)qv.call(r,_)&&!Gv.hasOwnProperty(_)&&(s[_]=r[_]===void 0&&b!==void 0?b[_]:r[_])}var _=arguments.length-2;if(_===1)s.children=i;else if(1<_){b=Array(_);for(var N=0;N<_;N++)b[N]=arguments[N+2];s.children=b}return{$$typeof:Pa,type:e.type,key:c,ref:f,props:s,_owner:g}};Te.createContext=function(e){return e={$$typeof:Rx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nx,_context:e},e.Consumer=e};Te.createElement=Hv;Te.createFactory=function(e){var r=Hv.bind(null,e);return r.type=e,r};Te.createRef=function(){return{current:null}};Te.forwardRef=function(e){return{$$typeof:Ox,render:e}};Te.isValidElement=Bd;Te.lazy=function(e){return{$$typeof:Px,_payload:{_status:-1,_result:e},_init:jx}};Te.memo=function(e,r){return{$$typeof:Mx,type:e,compare:r===void 0?null:r}};Te.startTransition=function(e){var r=Cs.transition;Cs.transition={};try{e()}finally{Cs.transition=r}};Te.unstable_act=Kv;Te.useCallback=function(e,r){return It.current.useCallback(e,r)};Te.useContext=function(e){return It.current.useContext(e)};Te.useDebugValue=function(){};Te.useDeferredValue=function(e){return It.current.useDeferredValue(e)};Te.useEffect=function(e,r){return It.current.useEffect(e,r)};Te.useId=function(){return It.current.useId()};Te.useImperativeHandle=function(e,r,i){return It.current.useImperativeHandle(e,r,i)};Te.useInsertionEffect=function(e,r){return It.current.useInsertionEffect(e,r)};Te.useLayoutEffect=function(e,r){return It.current.useLayoutEffect(e,r)};Te.useMemo=function(e,r){return It.current.useMemo(e,r)};Te.useReducer=function(e,r,i){return It.current.useReducer(e,r,i)};Te.useRef=function(e){return It.current.useRef(e)};Te.useState=function(e){return It.current.useState(e)};Te.useSyncExternalStore=function(e,r,i){return It.current.useSyncExternalStore(e,r,i)};Te.useTransition=function(){return It.current.useTransition()};Te.version="18.3.1";jv.exports=Te;var Ye=jv.exports;const Vx=Ex(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx=Ye,Fx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Gx=Object.prototype.hasOwnProperty,Hx=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kx={key:!0,ref:!0,__self:!0,__source:!0};function Qv(e,r,i){var s,c={},f=null,g=null;i!==void 0&&(f=""+i),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(g=r.ref);for(s in r)Gx.call(r,s)&&!Kx.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)c[s]===void 0&&(c[s]=r[s]);return{$$typeof:Fx,type:e,key:f,ref:g,props:c,_owner:Hx.current}}fo.Fragment=qx;fo.jsx=Qv;fo.jsxs=Qv;Lv.exports=fo;var T=Lv.exports,Du={},Xv={exports:{}},Ft={},Zv={exports:{}},Yv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(ae,ee){var X=ae.length;ae.push(ee);e:for(;0<X;){var ye=X-1>>>1,ke=ae[ye];if(0<c(ke,ee))ae[ye]=ee,ae[X]=ke,X=ye;else break e}}function i(ae){return ae.length===0?null:ae[0]}function s(ae){if(ae.length===0)return null;var ee=ae[0],X=ae.pop();if(X!==ee){ae[0]=X;e:for(var ye=0,ke=ae.length,Ue=ke>>>1;ye<Ue;){var Et=2*(ye+1)-1,xr=ae[Et],Kt=Et+1,$r=ae[Kt];if(0>c(xr,X))Kt<ke&&0>c($r,xr)?(ae[ye]=$r,ae[Kt]=X,ye=Kt):(ae[ye]=xr,ae[Et]=X,ye=Et);else if(Kt<ke&&0>c($r,X))ae[ye]=$r,ae[Kt]=X,ye=Kt;else break e}}return ee}function c(ae,ee){var X=ae.sortIndex-ee.sortIndex;return X!==0?X:ae.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var g=Date,b=g.now();e.unstable_now=function(){return g.now()-b}}var _=[],N=[],A=1,D=null,B=3,q=!1,G=!1,Y=!1,$e=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(ae){for(var ee=i(N);ee!==null;){if(ee.callback===null)s(N);else if(ee.startTime<=ae)s(N),ee.sortIndex=ee.expirationTime,r(_,ee);else break;ee=i(N)}}function K(ae){if(Y=!1,P(ae),!G)if(i(_)!==null)G=!0,St(ie);else{var ee=i(N);ee!==null&&Ht(K,ee.startTime-ae)}}function ie(ae,ee){G=!1,Y&&(Y=!1,M(H),H=-1),q=!0;var X=B;try{for(P(ee),D=i(_);D!==null&&(!(D.expirationTime>ee)||ae&&!ze());){var ye=D.callback;if(typeof ye=="function"){D.callback=null,B=D.priorityLevel;var ke=ye(D.expirationTime<=ee);ee=e.unstable_now(),typeof ke=="function"?D.callback=ke:D===i(_)&&s(_),P(ee)}else s(_);D=i(_)}if(D!==null)var Ue=!0;else{var Et=i(N);Et!==null&&Ht(K,Et.startTime-ee),Ue=!1}return Ue}finally{D=null,B=X,q=!1}}var te=!1,ue=null,H=-1,Be=5,be=-1;function ze(){return!(e.unstable_now()-be<Be)}function Re(){if(ue!==null){var ae=e.unstable_now();be=ae;var ee=!0;try{ee=ue(!0,ae)}finally{ee?kt():(te=!1,ue=null)}}else te=!1}var kt;if(typeof R=="function")kt=function(){R(Re)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,Cr=Gt.port2;Gt.port1.onmessage=Re,kt=function(){Cr.postMessage(null)}}else kt=function(){$e(Re,0)};function St(ae){ue=ae,te||(te=!0,kt())}function Ht(ae,ee){H=$e(function(){ae(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ae){ae.callback=null},e.unstable_continueExecution=function(){G||q||(G=!0,St(ie))},e.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<ae?Math.floor(1e3/ae):5},e.unstable_getCurrentPriorityLevel=function(){return B},e.unstable_getFirstCallbackNode=function(){return i(_)},e.unstable_next=function(ae){switch(B){case 1:case 2:case 3:var ee=3;break;default:ee=B}var X=B;B=ee;try{return ae()}finally{B=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ae,ee){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var X=B;B=ae;try{return ee()}finally{B=X}},e.unstable_scheduleCallback=function(ae,ee,X){var ye=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ye+X:ye):X=ye,ae){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=X+ke,ae={id:A++,callback:ee,priorityLevel:ae,startTime:X,expirationTime:ke,sortIndex:-1},X>ye?(ae.sortIndex=X,r(N,ae),i(_)===null&&ae===i(N)&&(Y?(M(H),H=-1):Y=!0,Ht(K,X-ye))):(ae.sortIndex=ke,r(_,ae),G||q||(G=!0,St(ie))),ae},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(ae){var ee=B;return function(){var X=B;B=ee;try{return ae.apply(this,arguments)}finally{B=X}}}})(Yv);Zv.exports=Yv;var Qx=Zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=Ye,Wt=Qx;function Q(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jv=new Set,ya={};function Gn(e,r){_i(e,r),_i(e+"Capture",r)}function _i(e,r){for(ya[e]=r,e=0;e<r.length;e++)Jv.add(r[e])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,Zx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cy={},Iy={};function Yx(e){return Lu.call(Iy,e)?!0:Lu.call(Cy,e)?!1:Zx.test(e)?Iy[e]=!0:(Cy[e]=!0,!1)}function Jx(e,r,i,s){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function e2(e,r,i,s){if(r===null||typeof r>"u"||Jx(e,r,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Nt(e,r,i,s,c,f,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=r,this.sanitizeURL=f,this.removeEmptyString=g}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){yt[e]=new Nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];yt[r]=new Nt(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){yt[e]=new Nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){yt[e]=new Nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){yt[e]=new Nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){yt[e]=new Nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){yt[e]=new Nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){yt[e]=new Nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){yt[e]=new Nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Ld(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Dd,Ld);yt[r]=new Nt(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Dd,Ld);yt[r]=new Nt(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Dd,Ld);yt[r]=new Nt(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){yt[e]=new Nt(e,1,!1,e.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){yt[e]=new Nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function jd(e,r,i,s){var c=yt.hasOwnProperty(r)?yt[r]:null;(c!==null?c.type!==0:s||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(e2(r,i,c,s)&&(i=null),s||c===null?Yx(r)&&(i===null?e.removeAttribute(r):e.setAttribute(r,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(r=c.attributeName,s=c.attributeNamespace,i===null?e.removeAttribute(r):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,s?e.setAttributeNS(s,r,i):e.setAttribute(r,i))))}var Fr=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),ew=Symbol.for("react.provider"),tw=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),rw=Symbol.for("react.offscreen"),Ny=Symbol.iterator;function qi(e){return e===null||typeof e!="object"?null:(e=Ny&&e[Ny]||e["@@iterator"],typeof e=="function"?e:null)}var Ze=Object.assign,pu;function ta(e){if(pu===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);pu=r&&r[1]||""}return`
`+pu+e}var fu=!1;function hu(e,r){if(!e||fu)return"";fu=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(N){var s=N}Reflect.construct(e,[],r)}else{try{r.call()}catch(N){s=N}e.call(r.prototype)}else{try{throw Error()}catch(N){s=N}e()}}catch(N){if(N&&s&&typeof N.stack=="string"){for(var c=N.stack.split(`
`),f=s.stack.split(`
`),g=c.length-1,b=f.length-1;1<=g&&0<=b&&c[g]!==f[b];)b--;for(;1<=g&&0<=b;g--,b--)if(c[g]!==f[b]){if(g!==1||b!==1)do if(g--,b--,0>b||c[g]!==f[b]){var _=`
`+c[g].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=g&&0<=b);break}}}finally{fu=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?ta(e):""}function t2(e){switch(e.tag){case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return e=hu(e.type,!1),e;case 11:return e=hu(e.type.render,!1),e;case 1:return e=hu(e.type,!0),e;default:return""}}function Wu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ri:return"Fragment";case ti:return"Portal";case ju:return"Profiler";case Ud:return"StrictMode";case Uu:return"Suspense";case Vu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tw:return(e.displayName||"Context")+".Consumer";case ew:return(e._context.displayName||"Context")+".Provider";case Vd:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wd:return r=e.displayName||null,r!==null?r:Wu(e.type)||"Memo";case tn:r=e._payload,e=e._init;try{return Wu(e(r))}catch{}}return null}function r2(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(r);case 8:return r===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nw(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function n2(e){var r=nw(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),s=""+e[r];if(!e.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return c.call(this)},set:function(g){s=""+g,f.call(this,g)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ds(e){e._valueTracker||(e._valueTracker=n2(e))}function iw(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),s="";return e&&(s=nw(e)?e.checked?"true":"false":e.value),e=s,e!==i?(r.setValue(e),!0):!1}function Us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fu(e,r){var i=r.checked;return Ze({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ry(e,r){var i=r.defaultValue==null?"":r.defaultValue,s=r.checked!=null?r.checked:r.defaultChecked;i=gn(r.value!=null?r.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function aw(e,r){r=r.checked,r!=null&&jd(e,"checked",r,!1)}function qu(e,r){aw(e,r);var i=gn(r.value),s=r.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Gu(e,r.type,i):r.hasOwnProperty("defaultValue")&&Gu(e,r.type,gn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Oy(e,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var s=r.type;if(!(s!=="submit"&&s!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,i||r===e.value||(e.value=r),e.defaultValue=r}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Gu(e,r,i){(r!=="number"||Us(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var ra=Array.isArray;function fi(e,r,i,s){if(e=e.options,r){r={};for(var c=0;c<i.length;c++)r["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=r.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&s&&(e[i].defaultSelected=!0)}else{for(i=""+gn(i),r=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}r!==null||e[c].disabled||(r=e[c])}r!==null&&(r.selected=!0)}}function Hu(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Ze({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ay(e,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(Q(92));if(ra(i)){if(1<i.length)throw Error(Q(93));i=i[0]}r=i}r==null&&(r=""),i=r}e._wrapperState={initialValue:gn(i)}}function sw(e,r){var i=gn(r.value),s=gn(r.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),r.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function My(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ow(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ow(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,lw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,s,c){MSApp.execUnsafeLocalFunction(function(){return e(r,i,s,c)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function va(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i2=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){i2.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),oa[r]=oa[e]})});function uw(e,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||oa.hasOwnProperty(e)&&oa[e]?(""+r).trim():r+"px"}function dw(e,r){e=e.style;for(var i in r)if(r.hasOwnProperty(i)){var s=i.indexOf("--")===0,c=uw(i,r[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,c):e[i]=c}}var a2=Ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(e,r){if(r){if(a2[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(Q(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(Q(61))}if(r.style!=null&&typeof r.style!="object")throw Error(Q(62))}}function Xu(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Fd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yu=null,hi=null,mi=null;function Py(e){if(e=La(e)){if(typeof Yu!="function")throw Error(Q(280));var r=e.stateNode;r&&(r=vo(r),Yu(e.stateNode,e.type,r))}}function cw(e){hi?mi?mi.push(e):mi=[e]:hi=e}function pw(){if(hi){var e=hi,r=mi;if(mi=hi=null,Py(e),r)for(e=0;e<r.length;e++)Py(r[e])}}function fw(e,r){return e(r)}function hw(){}var mu=!1;function mw(e,r,i){if(mu)return e(r,i);mu=!0;try{return fw(e,r,i)}finally{mu=!1,(hi!==null||mi!==null)&&(hw(),pw())}}function wa(e,r){var i=e.stateNode;if(i===null)return null;var s=vo(i);if(s===null)return null;i=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(Q(231,r,typeof i));return i}var Ju=!1;if(jr)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Ju=!1}function s2(e,r,i,s,c,f,g,b,_){var N=Array.prototype.slice.call(arguments,3);try{r.apply(i,N)}catch(A){this.onError(A)}}var la=!1,Vs=null,Ws=!1,ed=null,o2={onError:function(e){la=!0,Vs=e}};function l2(e,r,i,s,c,f,g,b,_){la=!1,Vs=null,s2.apply(o2,arguments)}function u2(e,r,i,s,c,f,g,b,_){if(l2.apply(this,arguments),la){if(la){var N=Vs;la=!1,Vs=null}else throw Error(Q(198));Ws||(Ws=!0,ed=N)}}function Hn(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function gw(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function By(e){if(Hn(e)!==e)throw Error(Q(188))}function d2(e){var r=e.alternate;if(!r){if(r=Hn(e),r===null)throw Error(Q(188));return r!==e?null:e}for(var i=e,s=r;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return By(c),e;if(f===s)return By(c),r;f=f.sibling}throw Error(Q(188))}if(i.return!==s.return)i=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===i){g=!0,i=c,s=f;break}if(b===s){g=!0,s=c,i=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===i){g=!0,i=f,s=c;break}if(b===s){g=!0,s=f,i=c;break}b=b.sibling}if(!g)throw Error(Q(189))}}if(i.alternate!==s)throw Error(Q(190))}if(i.tag!==3)throw Error(Q(188));return i.stateNode.current===i?e:r}function yw(e){return e=d2(e),e!==null?vw(e):null}function vw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=vw(e);if(r!==null)return r;e=e.sibling}return null}var ww=Wt.unstable_scheduleCallback,Dy=Wt.unstable_cancelCallback,c2=Wt.unstable_shouldYield,p2=Wt.unstable_requestPaint,rt=Wt.unstable_now,f2=Wt.unstable_getCurrentPriorityLevel,qd=Wt.unstable_ImmediatePriority,_w=Wt.unstable_UserBlockingPriority,Fs=Wt.unstable_NormalPriority,h2=Wt.unstable_LowPriority,xw=Wt.unstable_IdlePriority,ho=null,Tr=null;function m2(e){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var vr=Math.clz32?Math.clz32:v2,g2=Math.log,y2=Math.LN2;function v2(e){return e>>>=0,e===0?32:31-(g2(e)/y2|0)|0}var ps=64,fs=4194304;function na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qs(e,r){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,f=e.pingedLanes,g=i&268435455;if(g!==0){var b=g&~c;b!==0?s=na(b):(f&=g,f!==0&&(s=na(f)))}else g=i&~c,g!==0?s=na(g):f!==0&&(s=na(f));if(s===0)return 0;if(r!==0&&r!==s&&!(r&c)&&(c=s&-s,f=r&-r,c>=f||c===16&&(f&4194240)!==0))return r;if(s&4&&(s|=i&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=s;0<r;)i=31-vr(r),c=1<<i,s|=e[i],r&=~c;return s}function w2(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _2(e,r){for(var i=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var g=31-vr(f),b=1<<g,_=c[g];_===-1?(!(b&i)||b&s)&&(c[g]=w2(b,r)):_<=r&&(e.expiredLanes|=b),f&=~b}}function td(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $w(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function gu(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function Ba(e,r,i){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-vr(r),e[r]=i}function x2(e,r){var i=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-vr(i),f=1<<c;r[c]=0,s[c]=-1,e[c]=-1,i&=~f}}function Gd(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var s=31-vr(i),c=1<<s;c&r|e[s]&r&&(e[s]|=r),i&=~c}}var Le=0;function bw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kw,Hd,Sw,Ew,Tw,rd=!1,hs=[],ln=null,un=null,dn=null,_a=new Map,xa=new Map,nn=[],$2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ly(e,r){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":_a.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(r.pointerId)}}function Hi(e,r,i,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:i,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},r!==null&&(r=La(r),r!==null&&Hd(r)),e):(e.eventSystemFlags|=s,r=e.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),e)}function b2(e,r,i,s,c){switch(r){case"focusin":return ln=Hi(ln,e,r,i,s,c),!0;case"dragenter":return un=Hi(un,e,r,i,s,c),!0;case"mouseover":return dn=Hi(dn,e,r,i,s,c),!0;case"pointerover":var f=c.pointerId;return _a.set(f,Hi(_a.get(f)||null,e,r,i,s,c)),!0;case"gotpointercapture":return f=c.pointerId,xa.set(f,Hi(xa.get(f)||null,e,r,i,s,c)),!0}return!1}function zw(e){var r=Mn(e.target);if(r!==null){var i=Hn(r);if(i!==null){if(r=i.tag,r===13){if(r=gw(i),r!==null){e.blockedOn=r,Tw(e.priority,function(){Sw(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=nd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Zu=s,i.target.dispatchEvent(s),Zu=null}else return r=La(i),r!==null&&Hd(r),e.blockedOn=i,!1;r.shift()}return!0}function jy(e,r,i){Is(e)&&i.delete(r)}function k2(){rd=!1,ln!==null&&Is(ln)&&(ln=null),un!==null&&Is(un)&&(un=null),dn!==null&&Is(dn)&&(dn=null),_a.forEach(jy),xa.forEach(jy)}function Ki(e,r){e.blockedOn===r&&(e.blockedOn=null,rd||(rd=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,k2)))}function $a(e){function r(c){return Ki(c,e)}if(0<hs.length){Ki(hs[0],e);for(var i=1;i<hs.length;i++){var s=hs[i];s.blockedOn===e&&(s.blockedOn=null)}}for(ln!==null&&Ki(ln,e),un!==null&&Ki(un,e),dn!==null&&Ki(dn,e),_a.forEach(r),xa.forEach(r),i=0;i<nn.length;i++)s=nn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<nn.length&&(i=nn[0],i.blockedOn===null);)zw(i),i.blockedOn===null&&nn.shift()}var gi=Fr.ReactCurrentBatchConfig,Gs=!0;function S2(e,r,i,s){var c=Le,f=gi.transition;gi.transition=null;try{Le=1,Kd(e,r,i,s)}finally{Le=c,gi.transition=f}}function E2(e,r,i,s){var c=Le,f=gi.transition;gi.transition=null;try{Le=4,Kd(e,r,i,s)}finally{Le=c,gi.transition=f}}function Kd(e,r,i,s){if(Gs){var c=nd(e,r,i,s);if(c===null)Eu(e,r,s,Hs,i),Ly(e,s);else if(b2(c,e,r,i,s))s.stopPropagation();else if(Ly(e,s),r&4&&-1<$2.indexOf(e)){for(;c!==null;){var f=La(c);if(f!==null&&kw(f),f=nd(e,r,i,s),f===null&&Eu(e,r,s,Hs,i),f===c)break;c=f}c!==null&&s.stopPropagation()}else Eu(e,r,s,null,i)}}var Hs=null;function nd(e,r,i,s){if(Hs=null,e=Fd(s),e=Mn(e),e!==null)if(r=Hn(e),r===null)e=null;else if(i=r.tag,i===13){if(e=gw(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Hs=e,null}function Cw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f2()){case qd:return 1;case _w:return 4;case Fs:case h2:return 16;case xw:return 536870912;default:return 16}default:return 16}}var sn=null,Qd=null,Ns=null;function Iw(){if(Ns)return Ns;var e,r=Qd,i=r.length,s,c="value"in sn?sn.value:sn.textContent,f=c.length;for(e=0;e<i&&r[e]===c[e];e++);var g=i-e;for(s=1;s<=g&&r[i-s]===c[f-s];s++);return Ns=c.slice(e,1<s?1-s:void 0)}function Rs(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ms(){return!0}function Uy(){return!1}function qt(e){function r(i,s,c,f,g){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ms:Uy,this.isPropagationStopped=Uy,this}return Ze(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),r}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=qt(zi),Da=Ze({},zi,{view:0,detail:0}),T2=qt(Da),yu,vu,Qi,mo=Ze({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(yu=e.screenX-Qi.screenX,vu=e.screenY-Qi.screenY):vu=yu=0,Qi=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Vy=qt(mo),z2=Ze({},mo,{dataTransfer:0}),C2=qt(z2),I2=Ze({},Da,{relatedTarget:0}),wu=qt(I2),N2=Ze({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),R2=qt(N2),O2=Ze({},zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A2=qt(O2),M2=Ze({},zi,{data:0}),Wy=qt(M2),P2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L2(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=D2[e])?!!r[e]:!1}function Zd(){return L2}var j2=Ze({},Da,{key:function(e){if(e.key){var r=P2[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U2=qt(j2),V2=Ze({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fy=qt(V2),W2=Ze({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),F2=qt(W2),q2=Ze({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),G2=qt(q2),H2=Ze({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K2=qt(H2),Q2=[9,13,27,32],Yd=jr&&"CompositionEvent"in window,ua=null;jr&&"documentMode"in document&&(ua=document.documentMode);var X2=jr&&"TextEvent"in window&&!ua,Nw=jr&&(!Yd||ua&&8<ua&&11>=ua),qy=String.fromCharCode(32),Gy=!1;function Rw(e,r){switch(e){case"keyup":return Q2.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ow(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function Z2(e,r){switch(e){case"compositionend":return Ow(r);case"keypress":return r.which!==32?null:(Gy=!0,qy);case"textInput":return e=r.data,e===qy&&Gy?null:e;default:return null}}function Y2(e,r){if(ni)return e==="compositionend"||!Yd&&Rw(e,r)?(e=Iw(),Ns=Qd=sn=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nw&&r.locale!=="ko"?null:r.data;default:return null}}var J2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hy(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!J2[e.type]:r==="textarea"}function Aw(e,r,i,s){cw(s),r=Ks(r,"onChange"),0<r.length&&(i=new Xd("onChange","change",null,i,s),e.push({event:i,listeners:r}))}var da=null,ba=null;function e$(e){qw(e,0)}function go(e){var r=si(e);if(iw(r))return e}function t$(e,r){if(e==="change")return r}var Mw=!1;if(jr){var _u;if(jr){var xu="oninput"in document;if(!xu){var Ky=document.createElement("div");Ky.setAttribute("oninput","return;"),xu=typeof Ky.oninput=="function"}_u=xu}else _u=!1;Mw=_u&&(!document.documentMode||9<document.documentMode)}function Qy(){da&&(da.detachEvent("onpropertychange",Pw),ba=da=null)}function Pw(e){if(e.propertyName==="value"&&go(ba)){var r=[];Aw(r,ba,e,Fd(e)),mw(e$,r)}}function r$(e,r,i){e==="focusin"?(Qy(),da=r,ba=i,da.attachEvent("onpropertychange",Pw)):e==="focusout"&&Qy()}function n$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(ba)}function i$(e,r){if(e==="click")return go(r)}function a$(e,r){if(e==="input"||e==="change")return go(r)}function s$(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var _r=typeof Object.is=="function"?Object.is:s$;function ka(e,r){if(_r(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),s=Object.keys(r);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!Lu.call(r,c)||!_r(e[c],r[c]))return!1}return!0}function Xy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zy(e,r){var i=Xy(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=r&&s>=r)return{node:i,offset:r-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Xy(i)}}function Bw(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Bw(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Dw(){for(var e=window,r=Us();r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)e=r.contentWindow;else break;r=Us(e.document)}return r}function Jd(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function o$(e){var r=Dw(),i=e.focusedElem,s=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&Bw(i.ownerDocument.documentElement,i)){if(s!==null&&Jd(i)){if(r=s.start,e=s.end,e===void 0&&(e=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(e,i.value.length);else if(e=(r=i.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!e.extend&&f>s&&(c=s,s=f,f=c),c=Zy(i,f);var g=Zy(i,s);c&&g&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),e.removeAllRanges(),f>s?(e.addRange(r),e.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),e.addRange(r)))}}for(r=[],e=i;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)e=r[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l$=jr&&"documentMode"in document&&11>=document.documentMode,ii=null,id=null,ca=null,ad=!1;function Yy(e,r,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ad||ii==null||ii!==Us(s)||(s=ii,"selectionStart"in s&&Jd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ca&&ka(ca,s)||(ca=s,s=Ks(id,"onSelect"),0<s.length&&(r=new Xd("onSelect","select",null,r,i),e.push({event:r,listeners:s}),r.target=ii)))}function gs(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var ai={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionend:gs("Transition","TransitionEnd")},$u={},Lw={};jr&&(Lw=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function yo(e){if($u[e])return $u[e];if(!ai[e])return e;var r=ai[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in Lw)return $u[e]=r[i];return e}var jw=yo("animationend"),Uw=yo("animationiteration"),Vw=yo("animationstart"),Ww=yo("transitionend"),Fw=new Map,Jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,r){Fw.set(e,r),Gn(r,[e])}for(var bu=0;bu<Jy.length;bu++){var ku=Jy[bu],u$=ku.toLowerCase(),d$=ku[0].toUpperCase()+ku.slice(1);vn(u$,"on"+d$)}vn(jw,"onAnimationEnd");vn(Uw,"onAnimationIteration");vn(Vw,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Ww,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c$=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function ev(e,r,i){var s=e.type||"unknown-event";e.currentTarget=i,u2(s,r,void 0,e),e.currentTarget=null}function qw(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],c=s.event;s=s.listeners;e:{var f=void 0;if(r)for(var g=s.length-1;0<=g;g--){var b=s[g],_=b.instance,N=b.currentTarget;if(b=b.listener,_!==f&&c.isPropagationStopped())break e;ev(c,b,N),f=_}else for(g=0;g<s.length;g++){if(b=s[g],_=b.instance,N=b.currentTarget,b=b.listener,_!==f&&c.isPropagationStopped())break e;ev(c,b,N),f=_}}}if(Ws)throw e=ed,Ws=!1,ed=null,e}function Fe(e,r){var i=r[dd];i===void 0&&(i=r[dd]=new Set);var s=e+"__bubble";i.has(s)||(Gw(r,e,2,!1),i.add(s))}function Su(e,r,i){var s=0;r&&(s|=4),Gw(i,e,s,r)}var ys="_reactListening"+Math.random().toString(36).slice(2);function Sa(e){if(!e[ys]){e[ys]=!0,Jv.forEach(function(i){i!=="selectionchange"&&(c$.has(i)||Su(i,!1,e),Su(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ys]||(r[ys]=!0,Su("selectionchange",!1,r))}}function Gw(e,r,i,s){switch(Cw(r)){case 1:var c=S2;break;case 4:c=E2;break;default:c=Kd}i=c.bind(null,r,i,e),c=void 0,!Ju||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(r,i,{capture:!0,passive:c}):e.addEventListener(r,i,!0):c!==void 0?e.addEventListener(r,i,{passive:c}):e.addEventListener(r,i,!1)}function Eu(e,r,i,s,c){var f=s;if(!(r&1)&&!(r&2)&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(g===4)for(g=s.return;g!==null;){var _=g.tag;if((_===3||_===4)&&(_=g.stateNode.containerInfo,_===c||_.nodeType===8&&_.parentNode===c))return;g=g.return}for(;b!==null;){if(g=Mn(b),g===null)return;if(_=g.tag,_===5||_===6){s=f=g;continue e}b=b.parentNode}}s=s.return}mw(function(){var N=f,A=Fd(i),D=[];e:{var B=Fw.get(e);if(B!==void 0){var q=Xd,G=e;switch(e){case"keypress":if(Rs(i)===0)break e;case"keydown":case"keyup":q=U2;break;case"focusin":G="focus",q=wu;break;case"focusout":G="blur",q=wu;break;case"beforeblur":case"afterblur":q=wu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=C2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=F2;break;case jw:case Uw:case Vw:q=R2;break;case Ww:q=G2;break;case"scroll":q=T2;break;case"wheel":q=K2;break;case"copy":case"cut":case"paste":q=A2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Fy}var Y=(r&4)!==0,$e=!Y&&e==="scroll",M=Y?B!==null?B+"Capture":null:B;Y=[];for(var R=N,P;R!==null;){P=R;var K=P.stateNode;if(P.tag===5&&K!==null&&(P=K,M!==null&&(K=wa(R,M),K!=null&&Y.push(Ea(R,K,P)))),$e)break;R=R.return}0<Y.length&&(B=new q(B,G,null,i,A),D.push({event:B,listeners:Y}))}}if(!(r&7)){e:{if(B=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",B&&i!==Zu&&(G=i.relatedTarget||i.fromElement)&&(Mn(G)||G[Ur]))break e;if((q||B)&&(B=A.window===A?A:(B=A.ownerDocument)?B.defaultView||B.parentWindow:window,q?(G=i.relatedTarget||i.toElement,q=N,G=G?Mn(G):null,G!==null&&($e=Hn(G),G!==$e||G.tag!==5&&G.tag!==6)&&(G=null)):(q=null,G=N),q!==G)){if(Y=Vy,K="onMouseLeave",M="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Fy,K="onPointerLeave",M="onPointerEnter",R="pointer"),$e=q==null?B:si(q),P=G==null?B:si(G),B=new Y(K,R+"leave",q,i,A),B.target=$e,B.relatedTarget=P,K=null,Mn(A)===N&&(Y=new Y(M,R+"enter",G,i,A),Y.target=P,Y.relatedTarget=$e,K=Y),$e=K,q&&G)t:{for(Y=q,M=G,R=0,P=Y;P;P=Jn(P))R++;for(P=0,K=M;K;K=Jn(K))P++;for(;0<R-P;)Y=Jn(Y),R--;for(;0<P-R;)M=Jn(M),P--;for(;R--;){if(Y===M||M!==null&&Y===M.alternate)break t;Y=Jn(Y),M=Jn(M)}Y=null}else Y=null;q!==null&&tv(D,B,q,Y,!1),G!==null&&$e!==null&&tv(D,$e,G,Y,!0)}}e:{if(B=N?si(N):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var ie=t$;else if(Hy(B))if(Mw)ie=a$;else{ie=n$;var te=r$}else(q=B.nodeName)&&q.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ie=i$);if(ie&&(ie=ie(e,N))){Aw(D,ie,i,A);break e}te&&te(e,B,N),e==="focusout"&&(te=B._wrapperState)&&te.controlled&&B.type==="number"&&Gu(B,"number",B.value)}switch(te=N?si(N):window,e){case"focusin":(Hy(te)||te.contentEditable==="true")&&(ii=te,id=N,ca=null);break;case"focusout":ca=id=ii=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Yy(D,i,A);break;case"selectionchange":if(l$)break;case"keydown":case"keyup":Yy(D,i,A)}var ue;if(Yd)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else ni?Rw(e,i)&&(H="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(H="onCompositionStart");H&&(Nw&&i.locale!=="ko"&&(ni||H!=="onCompositionStart"?H==="onCompositionEnd"&&ni&&(ue=Iw()):(sn=A,Qd="value"in sn?sn.value:sn.textContent,ni=!0)),te=Ks(N,H),0<te.length&&(H=new Wy(H,e,null,i,A),D.push({event:H,listeners:te}),ue?H.data=ue:(ue=Ow(i),ue!==null&&(H.data=ue)))),(ue=X2?Z2(e,i):Y2(e,i))&&(N=Ks(N,"onBeforeInput"),0<N.length&&(A=new Wy("onBeforeInput","beforeinput",null,i,A),D.push({event:A,listeners:N}),A.data=ue))}qw(D,r)})}function Ea(e,r,i){return{instance:e,listener:r,currentTarget:i}}function Ks(e,r){for(var i=r+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=wa(e,i),f!=null&&s.unshift(Ea(e,f,c)),f=wa(e,r),f!=null&&s.push(Ea(e,f,c))),e=e.return}return s}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tv(e,r,i,s,c){for(var f=r._reactName,g=[];i!==null&&i!==s;){var b=i,_=b.alternate,N=b.stateNode;if(_!==null&&_===s)break;b.tag===5&&N!==null&&(b=N,c?(_=wa(i,f),_!=null&&g.unshift(Ea(i,_,b))):c||(_=wa(i,f),_!=null&&g.push(Ea(i,_,b)))),i=i.return}g.length!==0&&e.push({event:r,listeners:g})}var p$=/\r\n?/g,f$=/\u0000|\uFFFD/g;function rv(e){return(typeof e=="string"?e:""+e).replace(p$,`
`).replace(f$,"")}function vs(e,r,i){if(r=rv(r),rv(e)!==r&&i)throw Error(Q(425))}function Qs(){}var sd=null,od=null;function ld(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,h$=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,m$=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(e){return nv.resolve(null).then(e).catch(g$)}:ud;function g$(e){setTimeout(function(){throw e})}function Tu(e,r){var i=r,s=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(s===0){e.removeChild(c),$a(r);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=c}while(i);$a(r)}function cn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function iv(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Er="__reactFiber$"+Ci,Ta="__reactProps$"+Ci,Ur="__reactContainer$"+Ci,dd="__reactEvents$"+Ci,y$="__reactListeners$"+Ci,v$="__reactHandles$"+Ci;function Mn(e){var r=e[Er];if(r)return r;for(var i=e.parentNode;i;){if(r=i[Ur]||i[Er]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=iv(e);e!==null;){if(i=e[Er])return i;e=iv(e)}return r}e=i,i=e.parentNode}return null}function La(e){return e=e[Er]||e[Ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function vo(e){return e[Ta]||null}var cd=[],oi=-1;function wn(e){return{current:e}}function qe(e){0>oi||(e.current=cd[oi],cd[oi]=null,oi--)}function Ve(e,r){oi++,cd[oi]=e.current,e.current=r}var yn={},bt=wn(yn),Mt=wn(!1),Un=yn;function xi(e,r){var i=e.type.contextTypes;if(!i)return yn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===r)return s.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=r[f];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=c),c}function Pt(e){return e=e.childContextTypes,e!=null}function Xs(){qe(Mt),qe(bt)}function av(e,r,i){if(bt.current!==yn)throw Error(Q(168));Ve(bt,r),Ve(Mt,i)}function Hw(e,r,i){var s=e.stateNode;if(r=r.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var c in s)if(!(c in r))throw Error(Q(108,r2(e)||"Unknown",c));return Ze({},i,s)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Un=bt.current,Ve(bt,e),Ve(Mt,Mt.current),!0}function sv(e,r,i){var s=e.stateNode;if(!s)throw Error(Q(169));i?(e=Hw(e,r,Un),s.__reactInternalMemoizedMergedChildContext=e,qe(Mt),qe(bt),Ve(bt,e)):qe(Mt),Ve(Mt,i)}var Pr=null,wo=!1,zu=!1;function Kw(e){Pr===null?Pr=[e]:Pr.push(e)}function w$(e){wo=!0,Kw(e)}function _n(){if(!zu&&Pr!==null){zu=!0;var e=0,r=Le;try{var i=Pr;for(Le=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}Pr=null,wo=!1}catch(c){throw Pr!==null&&(Pr=Pr.slice(e+1)),ww(qd,_n),c}finally{Le=r,zu=!1}}return null}var li=[],ui=0,Ys=null,Js=0,Zt=[],Yt=0,Vn=null,Br=1,Dr="";function On(e,r){li[ui++]=Js,li[ui++]=Ys,Ys=e,Js=r}function Qw(e,r,i){Zt[Yt++]=Br,Zt[Yt++]=Dr,Zt[Yt++]=Vn,Vn=e;var s=Br;e=Dr;var c=32-vr(s)-1;s&=~(1<<c),i+=1;var f=32-vr(r)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Br=1<<32-vr(r)+c|i<<c|s,Dr=f+e}else Br=1<<f|i<<c|s,Dr=e}function ec(e){e.return!==null&&(On(e,1),Qw(e,1,0))}function tc(e){for(;e===Ys;)Ys=li[--ui],li[ui]=null,Js=li[--ui],li[ui]=null;for(;e===Vn;)Vn=Zt[--Yt],Zt[Yt]=null,Dr=Zt[--Yt],Zt[Yt]=null,Br=Zt[--Yt],Zt[Yt]=null}var Vt=null,Ut=null,He=!1,yr=null;function Xw(e,r){var i=Jt(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=e,r=e.deletions,r===null?(e.deletions=[i],e.flags|=16):r.push(i)}function ov(e,r){switch(e.tag){case 5:var i=e.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Vt=e,Ut=cn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Vt=e,Ut=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=Vn!==null?{id:Br,overflow:Dr}:null,e.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=Jt(18,null,null,0),i.stateNode=r,i.return=e,e.child=i,Vt=e,Ut=null,!0):!1;default:return!1}}function pd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fd(e){if(He){var r=Ut;if(r){var i=r;if(!ov(e,r)){if(pd(e))throw Error(Q(418));r=cn(i.nextSibling);var s=Vt;r&&ov(e,r)?Xw(s,i):(e.flags=e.flags&-4097|2,He=!1,Vt=e)}}else{if(pd(e))throw Error(Q(418));e.flags=e.flags&-4097|2,He=!1,Vt=e}}}function lv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function ws(e){if(e!==Vt)return!1;if(!He)return lv(e),He=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ld(e.type,e.memoizedProps)),r&&(r=Ut)){if(pd(e))throw Zw(),Error(Q(418));for(;r;)Xw(e,r),r=cn(r.nextSibling)}if(lv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(r===0){Ut=cn(e.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}e=e.nextSibling}Ut=null}}else Ut=Vt?cn(e.stateNode.nextSibling):null;return!0}function Zw(){for(var e=Ut;e;)e=cn(e.nextSibling)}function $i(){Ut=Vt=null,He=!1}function rc(e){yr===null?yr=[e]:yr.push(e)}var _$=Fr.ReactCurrentBatchConfig;function Xi(e,r,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(Q(309));var s=i.stateNode}if(!s)throw Error(Q(147,e));var c=s,f=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(g){var b=c.refs;g===null?delete b[f]:b[f]=g},r._stringRef=f,r)}if(typeof e!="string")throw Error(Q(284));if(!i._owner)throw Error(Q(290,e))}return e}function _s(e,r){throw e=Object.prototype.toString.call(r),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function uv(e){var r=e._init;return r(e._payload)}function Yw(e){function r(M,R){if(e){var P=M.deletions;P===null?(M.deletions=[R],M.flags|=16):P.push(R)}}function i(M,R){if(!e)return null;for(;R!==null;)r(M,R),R=R.sibling;return null}function s(M,R){for(M=new Map;R!==null;)R.key!==null?M.set(R.key,R):M.set(R.index,R),R=R.sibling;return M}function c(M,R){return M=mn(M,R),M.index=0,M.sibling=null,M}function f(M,R,P){return M.index=P,e?(P=M.alternate,P!==null?(P=P.index,P<R?(M.flags|=2,R):P):(M.flags|=2,R)):(M.flags|=1048576,R)}function g(M){return e&&M.alternate===null&&(M.flags|=2),M}function b(M,R,P,K){return R===null||R.tag!==6?(R=Mu(P,M.mode,K),R.return=M,R):(R=c(R,P),R.return=M,R)}function _(M,R,P,K){var ie=P.type;return ie===ri?A(M,R,P.props.children,K,P.key):R!==null&&(R.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===tn&&uv(ie)===R.type)?(K=c(R,P.props),K.ref=Xi(M,R,P),K.return=M,K):(K=Ls(P.type,P.key,P.props,null,M.mode,K),K.ref=Xi(M,R,P),K.return=M,K)}function N(M,R,P,K){return R===null||R.tag!==4||R.stateNode.containerInfo!==P.containerInfo||R.stateNode.implementation!==P.implementation?(R=Pu(P,M.mode,K),R.return=M,R):(R=c(R,P.children||[]),R.return=M,R)}function A(M,R,P,K,ie){return R===null||R.tag!==7?(R=jn(P,M.mode,K,ie),R.return=M,R):(R=c(R,P),R.return=M,R)}function D(M,R,P){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Mu(""+R,M.mode,P),R.return=M,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case us:return P=Ls(R.type,R.key,R.props,null,M.mode,P),P.ref=Xi(M,null,R),P.return=M,P;case ti:return R=Pu(R,M.mode,P),R.return=M,R;case tn:var K=R._init;return D(M,K(R._payload),P)}if(ra(R)||qi(R))return R=jn(R,M.mode,P,null),R.return=M,R;_s(M,R)}return null}function B(M,R,P,K){var ie=R!==null?R.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ie!==null?null:b(M,R,""+P,K);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case us:return P.key===ie?_(M,R,P,K):null;case ti:return P.key===ie?N(M,R,P,K):null;case tn:return ie=P._init,B(M,R,ie(P._payload),K)}if(ra(P)||qi(P))return ie!==null?null:A(M,R,P,K,null);_s(M,P)}return null}function q(M,R,P,K,ie){if(typeof K=="string"&&K!==""||typeof K=="number")return M=M.get(P)||null,b(R,M,""+K,ie);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case us:return M=M.get(K.key===null?P:K.key)||null,_(R,M,K,ie);case ti:return M=M.get(K.key===null?P:K.key)||null,N(R,M,K,ie);case tn:var te=K._init;return q(M,R,P,te(K._payload),ie)}if(ra(K)||qi(K))return M=M.get(P)||null,A(R,M,K,ie,null);_s(R,K)}return null}function G(M,R,P,K){for(var ie=null,te=null,ue=R,H=R=0,Be=null;ue!==null&&H<P.length;H++){ue.index>H?(Be=ue,ue=null):Be=ue.sibling;var be=B(M,ue,P[H],K);if(be===null){ue===null&&(ue=Be);break}e&&ue&&be.alternate===null&&r(M,ue),R=f(be,R,H),te===null?ie=be:te.sibling=be,te=be,ue=Be}if(H===P.length)return i(M,ue),He&&On(M,H),ie;if(ue===null){for(;H<P.length;H++)ue=D(M,P[H],K),ue!==null&&(R=f(ue,R,H),te===null?ie=ue:te.sibling=ue,te=ue);return He&&On(M,H),ie}for(ue=s(M,ue);H<P.length;H++)Be=q(ue,M,H,P[H],K),Be!==null&&(e&&Be.alternate!==null&&ue.delete(Be.key===null?H:Be.key),R=f(Be,R,H),te===null?ie=Be:te.sibling=Be,te=Be);return e&&ue.forEach(function(ze){return r(M,ze)}),He&&On(M,H),ie}function Y(M,R,P,K){var ie=qi(P);if(typeof ie!="function")throw Error(Q(150));if(P=ie.call(P),P==null)throw Error(Q(151));for(var te=ie=null,ue=R,H=R=0,Be=null,be=P.next();ue!==null&&!be.done;H++,be=P.next()){ue.index>H?(Be=ue,ue=null):Be=ue.sibling;var ze=B(M,ue,be.value,K);if(ze===null){ue===null&&(ue=Be);break}e&&ue&&ze.alternate===null&&r(M,ue),R=f(ze,R,H),te===null?ie=ze:te.sibling=ze,te=ze,ue=Be}if(be.done)return i(M,ue),He&&On(M,H),ie;if(ue===null){for(;!be.done;H++,be=P.next())be=D(M,be.value,K),be!==null&&(R=f(be,R,H),te===null?ie=be:te.sibling=be,te=be);return He&&On(M,H),ie}for(ue=s(M,ue);!be.done;H++,be=P.next())be=q(ue,M,H,be.value,K),be!==null&&(e&&be.alternate!==null&&ue.delete(be.key===null?H:be.key),R=f(be,R,H),te===null?ie=be:te.sibling=be,te=be);return e&&ue.forEach(function(Re){return r(M,Re)}),He&&On(M,H),ie}function $e(M,R,P,K){if(typeof P=="object"&&P!==null&&P.type===ri&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case us:e:{for(var ie=P.key,te=R;te!==null;){if(te.key===ie){if(ie=P.type,ie===ri){if(te.tag===7){i(M,te.sibling),R=c(te,P.props.children),R.return=M,M=R;break e}}else if(te.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===tn&&uv(ie)===te.type){i(M,te.sibling),R=c(te,P.props),R.ref=Xi(M,te,P),R.return=M,M=R;break e}i(M,te);break}else r(M,te);te=te.sibling}P.type===ri?(R=jn(P.props.children,M.mode,K,P.key),R.return=M,M=R):(K=Ls(P.type,P.key,P.props,null,M.mode,K),K.ref=Xi(M,R,P),K.return=M,M=K)}return g(M);case ti:e:{for(te=P.key;R!==null;){if(R.key===te)if(R.tag===4&&R.stateNode.containerInfo===P.containerInfo&&R.stateNode.implementation===P.implementation){i(M,R.sibling),R=c(R,P.children||[]),R.return=M,M=R;break e}else{i(M,R);break}else r(M,R);R=R.sibling}R=Pu(P,M.mode,K),R.return=M,M=R}return g(M);case tn:return te=P._init,$e(M,R,te(P._payload),K)}if(ra(P))return G(M,R,P,K);if(qi(P))return Y(M,R,P,K);_s(M,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,R!==null&&R.tag===6?(i(M,R.sibling),R=c(R,P),R.return=M,M=R):(i(M,R),R=Mu(P,M.mode,K),R.return=M,M=R),g(M)):i(M,R)}return $e}var bi=Yw(!0),Jw=Yw(!1),eo=wn(null),to=null,di=null,nc=null;function ic(){nc=di=to=null}function ac(e){var r=eo.current;qe(eo),e._currentValue=r}function hd(e,r,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),e===i)break;e=e.return}}function yi(e,r){to=e,nc=di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(At=!0),e.firstContext=null)}function tr(e){var r=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:r,next:null},di===null){if(to===null)throw Error(Q(308));di=e,to.dependencies={lanes:0,firstContext:e}}else di=di.next=e;return r}var Pn=null;function sc(e){Pn===null?Pn=[e]:Pn.push(e)}function e1(e,r,i,s){var c=r.interleaved;return c===null?(i.next=i,sc(r)):(i.next=c.next,c.next=i),r.interleaved=i,Vr(e,s)}function Vr(e,r){e.lanes|=r;var i=e.alternate;for(i!==null&&(i.lanes|=r),i=e,e=e.return;e!==null;)e.childLanes|=r,i=e.alternate,i!==null&&(i.childLanes|=r),i=e,e=e.return;return i.tag===3?i.stateNode:null}var rn=!1;function oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t1(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function pn(e,r,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Me&2){var c=s.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),s.pending=r,Vr(e,i)}return c=s.interleaved,c===null?(r.next=r,sc(s)):(r.next=c.next,c.next=r),s.interleaved=r,Vr(e,i)}function Os(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var s=r.lanes;s&=e.pendingLanes,i|=s,r.lanes=i,Gd(e,i)}}function dv(e,r){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var g={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=g:f=f.next=g,i=i.next}while(i!==null);f===null?c=f=r:f=f.next=r}else c=f=r;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}function ro(e,r,i,s){var c=e.updateQueue;rn=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var _=b,N=_.next;_.next=null,g===null?f=N:g.next=N,g=_;var A=e.alternate;A!==null&&(A=A.updateQueue,b=A.lastBaseUpdate,b!==g&&(b===null?A.firstBaseUpdate=N:b.next=N,A.lastBaseUpdate=_))}if(f!==null){var D=c.baseState;g=0,A=N=_=null,b=f;do{var B=b.lane,q=b.eventTime;if((s&B)===B){A!==null&&(A=A.next={eventTime:q,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var G=e,Y=b;switch(B=r,q=i,Y.tag){case 1:if(G=Y.payload,typeof G=="function"){D=G.call(q,D,B);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Y.payload,B=typeof G=="function"?G.call(q,D,B):G,B==null)break e;D=Ze({},D,B);break e;case 2:rn=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,B=c.effects,B===null?c.effects=[b]:B.push(b))}else q={eventTime:q,lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},A===null?(N=A=q,_=D):A=A.next=q,g|=B;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;B=b,b=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(1);if(A===null&&(_=D),c.baseState=_,c.firstBaseUpdate=N,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do g|=c.lane,c=c.next;while(c!==r)}else f===null&&(c.shared.lanes=0);Fn|=g,e.lanes=g,e.memoizedState=D}}function cv(e,r,i){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var s=e[r],c=s.callback;if(c!==null){if(s.callback=null,s=i,typeof c!="function")throw Error(Q(191,c));c.call(s)}}}var ja={},zr=wn(ja),za=wn(ja),Ca=wn(ja);function Bn(e){if(e===ja)throw Error(Q(174));return e}function lc(e,r){switch(Ve(Ca,r),Ve(za,e),Ve(zr,ja),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ku(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ku(r,e)}qe(zr),Ve(zr,r)}function ki(){qe(zr),qe(za),qe(Ca)}function r1(e){Bn(Ca.current);var r=Bn(zr.current),i=Ku(r,e.type);r!==i&&(Ve(za,e),Ve(zr,i))}function uc(e){za.current===e&&(qe(zr),qe(za))}var Qe=wn(0);function no(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cu=[];function dc(){for(var e=0;e<Cu.length;e++)Cu[e]._workInProgressVersionPrimary=null;Cu.length=0}var As=Fr.ReactCurrentDispatcher,Iu=Fr.ReactCurrentBatchConfig,Wn=0,Xe=null,ot=null,ct=null,io=!1,pa=!1,Ia=0,x$=0;function _t(){throw Error(Q(321))}function cc(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!_r(e[i],r[i]))return!1;return!0}function pc(e,r,i,s,c,f){if(Wn=f,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,As.current=e===null||e.memoizedState===null?S$:E$,e=i(s,c),pa){f=0;do{if(pa=!1,Ia=0,25<=f)throw Error(Q(301));f+=1,ct=ot=null,r.updateQueue=null,As.current=T$,e=i(s,c)}while(pa)}if(As.current=ao,r=ot!==null&&ot.next!==null,Wn=0,ct=ot=Xe=null,io=!1,r)throw Error(Q(300));return e}function fc(){var e=Ia!==0;return Ia=0,e}function Sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Xe.memoizedState=ct=e:ct=ct.next=e,ct}function rr(){if(ot===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var r=ct===null?Xe.memoizedState:ct.next;if(r!==null)ct=r,ot=e;else{if(e===null)throw Error(Q(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ct===null?Xe.memoizedState=ct=e:ct=ct.next=e}return ct}function Na(e,r){return typeof r=="function"?r(e):r}function Nu(e){var r=rr(),i=r.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=e;var s=ot,c=s.baseQueue,f=i.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}s.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,s=s.baseState;var b=g=null,_=null,N=f;do{var A=N.lane;if((Wn&A)===A)_!==null&&(_=_.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),s=N.hasEagerState?N.eagerState:e(s,N.action);else{var D={lane:A,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};_===null?(b=_=D,g=s):_=_.next=D,Xe.lanes|=A,Fn|=A}N=N.next}while(N!==null&&N!==f);_===null?g=s:_.next=b,_r(s,r.memoizedState)||(At=!0),r.memoizedState=s,r.baseState=g,r.baseQueue=_,i.lastRenderedState=s}if(e=i.interleaved,e!==null){c=e;do f=c.lane,Xe.lanes|=f,Fn|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function Ru(e){var r=rr(),i=r.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=e;var s=i.dispatch,c=i.pending,f=r.memoizedState;if(c!==null){i.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);_r(f,r.memoizedState)||(At=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),i.lastRenderedState=f}return[f,s]}function n1(){}function i1(e,r){var i=Xe,s=rr(),c=r(),f=!_r(s.memoizedState,c);if(f&&(s.memoizedState=c,At=!0),s=s.queue,hc(o1.bind(null,i,s,e),[e]),s.getSnapshot!==r||f||ct!==null&&ct.memoizedState.tag&1){if(i.flags|=2048,Ra(9,s1.bind(null,i,s,c,r),void 0,null),pt===null)throw Error(Q(349));Wn&30||a1(i,r,c)}return c}function a1(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function s1(e,r,i,s){r.value=i,r.getSnapshot=s,l1(r)&&u1(e)}function o1(e,r,i){return i(function(){l1(r)&&u1(e)})}function l1(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!_r(e,i)}catch{return!0}}function u1(e){var r=Vr(e,1);r!==null&&wr(r,e,1,-1)}function pv(e){var r=Sr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},r.queue=e,e=e.dispatch=k$.bind(null,Xe,e),[r.memoizedState,e]}function Ra(e,r,i,s){return e={tag:e,create:r,destroy:i,deps:s,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=e.next=e):(i=r.lastEffect,i===null?r.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,r.lastEffect=e)),e}function d1(){return rr().memoizedState}function Ms(e,r,i,s){var c=Sr();Xe.flags|=e,c.memoizedState=Ra(1|r,i,void 0,s===void 0?null:s)}function _o(e,r,i,s){var c=rr();s=s===void 0?null:s;var f=void 0;if(ot!==null){var g=ot.memoizedState;if(f=g.destroy,s!==null&&cc(s,g.deps)){c.memoizedState=Ra(r,i,f,s);return}}Xe.flags|=e,c.memoizedState=Ra(1|r,i,f,s)}function fv(e,r){return Ms(8390656,8,e,r)}function hc(e,r){return _o(2048,8,e,r)}function c1(e,r){return _o(4,2,e,r)}function p1(e,r){return _o(4,4,e,r)}function f1(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function h1(e,r,i){return i=i!=null?i.concat([e]):null,_o(4,4,f1.bind(null,r,e),i)}function mc(){}function m1(e,r){var i=rr();r=r===void 0?null:r;var s=i.memoizedState;return s!==null&&r!==null&&cc(r,s[1])?s[0]:(i.memoizedState=[e,r],e)}function g1(e,r){var i=rr();r=r===void 0?null:r;var s=i.memoizedState;return s!==null&&r!==null&&cc(r,s[1])?s[0]:(e=e(),i.memoizedState=[e,r],e)}function y1(e,r,i){return Wn&21?(_r(i,r)||(i=$w(),Xe.lanes|=i,Fn|=i,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=i)}function $$(e,r){var i=Le;Le=i!==0&&4>i?i:4,e(!0);var s=Iu.transition;Iu.transition={};try{e(!1),r()}finally{Le=i,Iu.transition=s}}function v1(){return rr().memoizedState}function b$(e,r,i){var s=hn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},w1(e))_1(r,i);else if(i=e1(e,r,i,s),i!==null){var c=Ct();wr(i,e,s,c),x1(i,r,s)}}function k$(e,r,i){var s=hn(e),c={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(w1(e))_1(r,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var g=r.lastRenderedState,b=f(g,i);if(c.hasEagerState=!0,c.eagerState=b,_r(b,g)){var _=r.interleaved;_===null?(c.next=c,sc(r)):(c.next=_.next,_.next=c),r.interleaved=c;return}}catch{}finally{}i=e1(e,r,c,s),i!==null&&(c=Ct(),wr(i,e,s,c),x1(i,r,s))}}function w1(e){var r=e.alternate;return e===Xe||r!==null&&r===Xe}function _1(e,r){pa=io=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function x1(e,r,i){if(i&4194240){var s=r.lanes;s&=e.pendingLanes,i|=s,r.lanes=i,Gd(e,i)}}var ao={readContext:tr,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},S$={readContext:tr,useCallback:function(e,r){return Sr().memoizedState=[e,r===void 0?null:r],e},useContext:tr,useEffect:fv,useImperativeHandle:function(e,r,i){return i=i!=null?i.concat([e]):null,Ms(4194308,4,f1.bind(null,r,e),i)},useLayoutEffect:function(e,r){return Ms(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ms(4,2,e,r)},useMemo:function(e,r){var i=Sr();return r=r===void 0?null:r,e=e(),i.memoizedState=[e,r],e},useReducer:function(e,r,i){var s=Sr();return r=i!==void 0?i(r):r,s.memoizedState=s.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=b$.bind(null,Xe,e),[s.memoizedState,e]},useRef:function(e){var r=Sr();return e={current:e},r.memoizedState=e},useState:pv,useDebugValue:mc,useDeferredValue:function(e){return Sr().memoizedState=e},useTransition:function(){var e=pv(!1),r=e[0];return e=$$.bind(null,e[1]),Sr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,i){var s=Xe,c=Sr();if(He){if(i===void 0)throw Error(Q(407));i=i()}else{if(i=r(),pt===null)throw Error(Q(349));Wn&30||a1(s,r,i)}c.memoizedState=i;var f={value:i,getSnapshot:r};return c.queue=f,fv(o1.bind(null,s,f,e),[e]),s.flags|=2048,Ra(9,s1.bind(null,s,f,i,r),void 0,null),i},useId:function(){var e=Sr(),r=pt.identifierPrefix;if(He){var i=Dr,s=Br;i=(s&~(1<<32-vr(s)-1)).toString(32)+i,r=":"+r+"R"+i,i=Ia++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=x$++,r=":"+r+"r"+i.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},E$={readContext:tr,useCallback:m1,useContext:tr,useEffect:hc,useImperativeHandle:h1,useInsertionEffect:c1,useLayoutEffect:p1,useMemo:g1,useReducer:Nu,useRef:d1,useState:function(){return Nu(Na)},useDebugValue:mc,useDeferredValue:function(e){var r=rr();return y1(r,ot.memoizedState,e)},useTransition:function(){var e=Nu(Na)[0],r=rr().memoizedState;return[e,r]},useMutableSource:n1,useSyncExternalStore:i1,useId:v1,unstable_isNewReconciler:!1},T$={readContext:tr,useCallback:m1,useContext:tr,useEffect:hc,useImperativeHandle:h1,useInsertionEffect:c1,useLayoutEffect:p1,useMemo:g1,useReducer:Ru,useRef:d1,useState:function(){return Ru(Na)},useDebugValue:mc,useDeferredValue:function(e){var r=rr();return ot===null?r.memoizedState=e:y1(r,ot.memoizedState,e)},useTransition:function(){var e=Ru(Na)[0],r=rr().memoizedState;return[e,r]},useMutableSource:n1,useSyncExternalStore:i1,useId:v1,unstable_isNewReconciler:!1};function mr(e,r){if(e&&e.defaultProps){r=Ze({},r),e=e.defaultProps;for(var i in e)r[i]===void 0&&(r[i]=e[i]);return r}return r}function md(e,r,i,s){r=e.memoizedState,i=i(s,r),i=i==null?r:Ze({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var xo={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,r,i){e=e._reactInternals;var s=Ct(),c=hn(e),f=Lr(s,c);f.payload=r,i!=null&&(f.callback=i),r=pn(e,f,c),r!==null&&(wr(r,e,c,s),Os(r,e,c))},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var s=Ct(),c=hn(e),f=Lr(s,c);f.tag=1,f.payload=r,i!=null&&(f.callback=i),r=pn(e,f,c),r!==null&&(wr(r,e,c,s),Os(r,e,c))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=Ct(),s=hn(e),c=Lr(i,s);c.tag=2,r!=null&&(c.callback=r),r=pn(e,c,s),r!==null&&(wr(r,e,s,i),Os(r,e,s))}};function hv(e,r,i,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):r.prototype&&r.prototype.isPureReactComponent?!ka(i,s)||!ka(c,f):!0}function $1(e,r,i){var s=!1,c=yn,f=r.contextType;return typeof f=="object"&&f!==null?f=tr(f):(c=Pt(r)?Un:bt.current,s=r.contextTypes,f=(s=s!=null)?xi(e,c):yn),r=new r(i,f),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xo,e.stateNode=r,r._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),r}function mv(e,r,i,s){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,s),r.state!==e&&xo.enqueueReplaceState(r,r.state,null)}function gd(e,r,i,s){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},oc(e);var f=r.contextType;typeof f=="object"&&f!==null?c.context=tr(f):(f=Pt(r)?Un:bt.current,c.context=xi(e,f)),c.state=e.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(md(e,r,f,i),c.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&xo.enqueueReplaceState(c,c.state,null),ro(e,i,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Si(e,r){try{var i="",s=r;do i+=t2(s),s=s.return;while(s);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:r,stack:c,digest:null}}function Ou(e,r,i){return{value:e,source:null,stack:i??null,digest:r??null}}function yd(e,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var z$=typeof WeakMap=="function"?WeakMap:Map;function b1(e,r,i){i=Lr(-1,i),i.tag=3,i.payload={element:null};var s=r.value;return i.callback=function(){oo||(oo=!0,Td=s),yd(e,r)},i}function k1(e,r,i){i=Lr(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=r.value;i.payload=function(){return s(c)},i.callback=function(){yd(e,r)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){yd(e,r),typeof s!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),i}function gv(e,r,i){var s=e.pingCache;if(s===null){s=e.pingCache=new z$;var c=new Set;s.set(r,c)}else c=s.get(r),c===void 0&&(c=new Set,s.set(r,c));c.has(i)||(c.add(i),e=V$.bind(null,e,r,i),r.then(e,e))}function yv(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function vv(e,r,i,s,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===r?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=Lr(-1,1),r.tag=2,pn(i,r,1))),i.lanes|=1),e)}var C$=Fr.ReactCurrentOwner,At=!1;function zt(e,r,i,s){r.child=e===null?Jw(r,null,i,s):bi(r,e.child,i,s)}function wv(e,r,i,s,c){i=i.render;var f=r.ref;return yi(r,c),s=pc(e,r,i,s,f,c),i=fc(),e!==null&&!At?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~c,Wr(e,r,c)):(He&&i&&ec(r),r.flags|=1,zt(e,r,s,c),r.child)}function _v(e,r,i,s,c){if(e===null){var f=i.type;return typeof f=="function"&&!bc(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=f,S1(e,r,f,s,c)):(e=Ls(i.type,null,s,r,r.mode,c),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!(e.lanes&c)){var g=f.memoizedProps;if(i=i.compare,i=i!==null?i:ka,i(g,s)&&e.ref===r.ref)return Wr(e,r,c)}return r.flags|=1,e=mn(f,s),e.ref=r.ref,e.return=r,r.child=e}function S1(e,r,i,s,c){if(e!==null){var f=e.memoizedProps;if(ka(f,s)&&e.ref===r.ref)if(At=!1,r.pendingProps=s=f,(e.lanes&c)!==0)e.flags&131072&&(At=!0);else return r.lanes=e.lanes,Wr(e,r,c)}return vd(e,r,i,s,c)}function E1(e,r,i){var s=r.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(pi,jt),jt|=i;else{if(!(i&1073741824))return e=f!==null?f.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ve(pi,jt),jt|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=f!==null?f.baseLanes:i,Ve(pi,jt),jt|=s}else f!==null?(s=f.baseLanes|i,r.memoizedState=null):s=i,Ve(pi,jt),jt|=s;return zt(e,r,c,i),r.child}function T1(e,r){var i=r.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function vd(e,r,i,s,c){var f=Pt(i)?Un:bt.current;return f=xi(r,f),yi(r,c),i=pc(e,r,i,s,f,c),s=fc(),e!==null&&!At?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~c,Wr(e,r,c)):(He&&s&&ec(r),r.flags|=1,zt(e,r,i,c),r.child)}function xv(e,r,i,s,c){if(Pt(i)){var f=!0;Zs(r)}else f=!1;if(yi(r,c),r.stateNode===null)Ps(e,r),$1(r,i,s),gd(r,i,s,c),s=!0;else if(e===null){var g=r.stateNode,b=r.memoizedProps;g.props=b;var _=g.context,N=i.contextType;typeof N=="object"&&N!==null?N=tr(N):(N=Pt(i)?Un:bt.current,N=xi(r,N));var A=i.getDerivedStateFromProps,D=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function";D||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==s||_!==N)&&mv(r,g,s,N),rn=!1;var B=r.memoizedState;g.state=B,ro(r,s,g,c),_=r.memoizedState,b!==s||B!==_||Mt.current||rn?(typeof A=="function"&&(md(r,i,A,s),_=r.memoizedState),(b=rn||hv(r,i,b,s,B,_,N))?(D||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=_),g.props=s,g.state=_,g.context=N,s=b):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{g=r.stateNode,t1(e,r),b=r.memoizedProps,N=r.type===r.elementType?b:mr(r.type,b),g.props=N,D=r.pendingProps,B=g.context,_=i.contextType,typeof _=="object"&&_!==null?_=tr(_):(_=Pt(i)?Un:bt.current,_=xi(r,_));var q=i.getDerivedStateFromProps;(A=typeof q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==D||B!==_)&&mv(r,g,s,_),rn=!1,B=r.memoizedState,g.state=B,ro(r,s,g,c);var G=r.memoizedState;b!==D||B!==G||Mt.current||rn?(typeof q=="function"&&(md(r,i,q,s),G=r.memoizedState),(N=rn||hv(r,i,N,s,B,G,_)||!1)?(A||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(s,G,_),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(s,G,_)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=G),g.props=s,g.state=G,g.context=_,s=N):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(r.flags|=1024),s=!1)}return wd(e,r,i,s,f,c)}function wd(e,r,i,s,c,f){T1(e,r);var g=(r.flags&128)!==0;if(!s&&!g)return c&&sv(r,i,!1),Wr(e,r,f);s=r.stateNode,C$.current=r;var b=g&&typeof i.getDerivedStateFromError!="function"?null:s.render();return r.flags|=1,e!==null&&g?(r.child=bi(r,e.child,null,f),r.child=bi(r,null,b,f)):zt(e,r,b,f),r.memoizedState=s.state,c&&sv(r,i,!0),r.child}function z1(e){var r=e.stateNode;r.pendingContext?av(e,r.pendingContext,r.pendingContext!==r.context):r.context&&av(e,r.context,!1),lc(e,r.containerInfo)}function $v(e,r,i,s,c){return $i(),rc(c),r.flags|=256,zt(e,r,i,s),r.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function xd(e){return{baseLanes:e,cachePool:null,transitions:null}}function C1(e,r,i){var s=r.pendingProps,c=Qe.current,f=!1,g=(r.flags&128)!==0,b;if((b=g)||(b=e!==null&&e.memoizedState===null?!1:(c&2)!==0),b?(f=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ve(Qe,c&1),e===null)return fd(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(g=s.children,e=s.fallback,f?(s=r.mode,f=r.child,g={mode:"hidden",children:g},!(s&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=ko(g,s,0,null),e=jn(e,s,i,null),f.return=r,e.return=r,f.sibling=e,r.child=f,r.child.memoizedState=xd(i),r.memoizedState=_d,e):gc(r,g));if(c=e.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return I$(e,r,g,s,b,c,i);if(f){f=s.fallback,g=r.mode,c=e.child,b=c.sibling;var _={mode:"hidden",children:s.children};return!(g&1)&&r.child!==c?(s=r.child,s.childLanes=0,s.pendingProps=_,r.deletions=null):(s=mn(c,_),s.subtreeFlags=c.subtreeFlags&14680064),b!==null?f=mn(b,f):(f=jn(f,g,i,null),f.flags|=2),f.return=r,s.return=r,s.sibling=f,r.child=s,s=f,f=r.child,g=e.child.memoizedState,g=g===null?xd(i):{baseLanes:g.baseLanes|i,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=e.childLanes&~i,r.memoizedState=_d,s}return f=e.child,e=f.sibling,s=mn(f,{mode:"visible",children:s.children}),!(r.mode&1)&&(s.lanes=i),s.return=r,s.sibling=null,e!==null&&(i=r.deletions,i===null?(r.deletions=[e],r.flags|=16):i.push(e)),r.child=s,r.memoizedState=null,s}function gc(e,r){return r=ko({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function xs(e,r,i,s){return s!==null&&rc(s),bi(r,e.child,null,i),e=gc(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function I$(e,r,i,s,c,f,g){if(i)return r.flags&256?(r.flags&=-257,s=Ou(Error(Q(422))),xs(e,r,g,s)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(f=s.fallback,c=r.mode,s=ko({mode:"visible",children:s.children},c,0,null),f=jn(f,c,g,null),f.flags|=2,s.return=r,f.return=r,s.sibling=f,r.child=s,r.mode&1&&bi(r,e.child,null,g),r.child.memoizedState=xd(g),r.memoizedState=_d,f);if(!(r.mode&1))return xs(e,r,g,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var b=s.dgst;return s=b,f=Error(Q(419)),s=Ou(f,s,void 0),xs(e,r,g,s)}if(b=(g&e.childLanes)!==0,At||b){if(s=pt,s!==null){switch(g&-g){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(s.suspendedLanes|g)?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,Vr(e,c),wr(s,e,c,-1))}return $c(),s=Ou(Error(Q(421))),xs(e,r,g,s)}return c.data==="$?"?(r.flags|=128,r.child=e.child,r=W$.bind(null,e),c._reactRetry=r,null):(e=f.treeContext,Ut=cn(c.nextSibling),Vt=r,He=!0,yr=null,e!==null&&(Zt[Yt++]=Br,Zt[Yt++]=Dr,Zt[Yt++]=Vn,Br=e.id,Dr=e.overflow,Vn=r),r=gc(r,s.children),r.flags|=4096,r)}function bv(e,r,i){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r),hd(e.return,r,i)}function Au(e,r,i,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=i,f.tailMode=c)}function I1(e,r,i){var s=r.pendingProps,c=s.revealOrder,f=s.tail;if(zt(e,r,s.children,i),s=Qe.current,s&2)s=s&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bv(e,i,r);else if(e.tag===19)bv(e,i,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ve(Qe,s),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(i=r.child,c=null;i!==null;)e=i.alternate,e!==null&&no(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=r.child,r.child=null):(c=i.sibling,i.sibling=null),Au(r,!1,c,i,f);break;case"backwards":for(i=null,c=r.child,r.child=null;c!==null;){if(e=c.alternate,e!==null&&no(e)===null){r.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Au(r,!0,i,null,f);break;case"together":Au(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ps(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Wr(e,r,i){if(e!==null&&(r.dependencies=e.dependencies),Fn|=r.lanes,!(i&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(Q(153));if(r.child!==null){for(e=r.child,i=mn(e,e.pendingProps),r.child=i,i.return=r;e.sibling!==null;)e=e.sibling,i=i.sibling=mn(e,e.pendingProps),i.return=r;i.sibling=null}return r.child}function N$(e,r,i){switch(r.tag){case 3:z1(r),$i();break;case 5:r1(r);break;case 1:Pt(r.type)&&Zs(r);break;case 4:lc(r,r.stateNode.containerInfo);break;case 10:var s=r.type._context,c=r.memoizedProps.value;Ve(eo,s._currentValue),s._currentValue=c;break;case 13:if(s=r.memoizedState,s!==null)return s.dehydrated!==null?(Ve(Qe,Qe.current&1),r.flags|=128,null):i&r.child.childLanes?C1(e,r,i):(Ve(Qe,Qe.current&1),e=Wr(e,r,i),e!==null?e.sibling:null);Ve(Qe,Qe.current&1);break;case 19:if(s=(i&r.childLanes)!==0,e.flags&128){if(s)return I1(e,r,i);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ve(Qe,Qe.current),s)break;return null;case 22:case 23:return r.lanes=0,E1(e,r,i)}return Wr(e,r,i)}var N1,$d,R1,O1;N1=function(e,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};$d=function(){};R1=function(e,r,i,s){var c=e.memoizedProps;if(c!==s){e=r.stateNode,Bn(zr.current);var f=null;switch(i){case"input":c=Fu(e,c),s=Fu(e,s),f=[];break;case"select":c=Ze({},c,{value:void 0}),s=Ze({},s,{value:void 0}),f=[];break;case"textarea":c=Hu(e,c),s=Hu(e,s),f=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qs)}Qu(i,s);var g;i=null;for(N in c)if(!s.hasOwnProperty(N)&&c.hasOwnProperty(N)&&c[N]!=null)if(N==="style"){var b=c[N];for(g in b)b.hasOwnProperty(g)&&(i||(i={}),i[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(ya.hasOwnProperty(N)?f||(f=[]):(f=f||[]).push(N,null));for(N in s){var _=s[N];if(b=c!=null?c[N]:void 0,s.hasOwnProperty(N)&&_!==b&&(_!=null||b!=null))if(N==="style")if(b){for(g in b)!b.hasOwnProperty(g)||_&&_.hasOwnProperty(g)||(i||(i={}),i[g]="");for(g in _)_.hasOwnProperty(g)&&b[g]!==_[g]&&(i||(i={}),i[g]=_[g])}else i||(f||(f=[]),f.push(N,i)),i=_;else N==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,b=b?b.__html:void 0,_!=null&&b!==_&&(f=f||[]).push(N,_)):N==="children"?typeof _!="string"&&typeof _!="number"||(f=f||[]).push(N,""+_):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(ya.hasOwnProperty(N)?(_!=null&&N==="onScroll"&&Fe("scroll",e),f||b===_||(f=[])):(f=f||[]).push(N,_))}i&&(f=f||[]).push("style",i);var N=f;(r.updateQueue=N)&&(r.flags|=4)}};O1=function(e,r,i,s){i!==s&&(r.flags|=4)};function Zi(e,r){if(!He)switch(e.tailMode){case"hidden":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function xt(e){var r=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(r)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=i,r}function R$(e,r,i){var s=r.pendingProps;switch(tc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(r),null;case 1:return Pt(r.type)&&Xs(),xt(r),null;case 3:return s=r.stateNode,ki(),qe(Mt),qe(bt),dc(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ws(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,yr!==null&&(Id(yr),yr=null))),$d(e,r),xt(r),null;case 5:uc(r);var c=Bn(Ca.current);if(i=r.type,e!==null&&r.stateNode!=null)R1(e,r,i,s,c),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!s){if(r.stateNode===null)throw Error(Q(166));return xt(r),null}if(e=Bn(zr.current),ws(r)){s=r.stateNode,i=r.type;var f=r.memoizedProps;switch(s[Er]=r,s[Ta]=f,e=(r.mode&1)!==0,i){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(c=0;c<ia.length;c++)Fe(ia[c],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":Ry(s,f),Fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!f.multiple},Fe("invalid",s);break;case"textarea":Ay(s,f),Fe("invalid",s)}Qu(i,f),c=null;for(var g in f)if(f.hasOwnProperty(g)){var b=f[g];g==="children"?typeof b=="string"?s.textContent!==b&&(f.suppressHydrationWarning!==!0&&vs(s.textContent,b,e),c=["children",b]):typeof b=="number"&&s.textContent!==""+b&&(f.suppressHydrationWarning!==!0&&vs(s.textContent,b,e),c=["children",""+b]):ya.hasOwnProperty(g)&&b!=null&&g==="onScroll"&&Fe("scroll",s)}switch(i){case"input":ds(s),Oy(s,f,!0);break;case"textarea":ds(s),My(s);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(s.onclick=Qs)}s=c,r.updateQueue=s,s!==null&&(r.flags|=4)}else{g=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ow(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=g.createElement(i,{is:s.is}):(e=g.createElement(i),i==="select"&&(g=e,s.multiple?g.multiple=!0:s.size&&(g.size=s.size))):e=g.createElementNS(e,i),e[Er]=r,e[Ta]=s,N1(e,r,!1,!1),r.stateNode=e;e:{switch(g=Xu(i,s),i){case"dialog":Fe("cancel",e),Fe("close",e),c=s;break;case"iframe":case"object":case"embed":Fe("load",e),c=s;break;case"video":case"audio":for(c=0;c<ia.length;c++)Fe(ia[c],e);c=s;break;case"source":Fe("error",e),c=s;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),c=s;break;case"details":Fe("toggle",e),c=s;break;case"input":Ry(e,s),c=Fu(e,s),Fe("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=Ze({},s,{value:void 0}),Fe("invalid",e);break;case"textarea":Ay(e,s),c=Hu(e,s),Fe("invalid",e);break;default:c=s}Qu(i,c),b=c;for(f in b)if(b.hasOwnProperty(f)){var _=b[f];f==="style"?dw(e,_):f==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,_!=null&&lw(e,_)):f==="children"?typeof _=="string"?(i!=="textarea"||_!=="")&&va(e,_):typeof _=="number"&&va(e,""+_):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ya.hasOwnProperty(f)?_!=null&&f==="onScroll"&&Fe("scroll",e):_!=null&&jd(e,f,_,g))}switch(i){case"input":ds(e),Oy(e,s,!1);break;case"textarea":ds(e),My(e);break;case"option":s.value!=null&&e.setAttribute("value",""+gn(s.value));break;case"select":e.multiple=!!s.multiple,f=s.value,f!=null?fi(e,!!s.multiple,f,!1):s.defaultValue!=null&&fi(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Qs)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xt(r),null;case 6:if(e&&r.stateNode!=null)O1(e,r,e.memoizedProps,s);else{if(typeof s!="string"&&r.stateNode===null)throw Error(Q(166));if(i=Bn(Ca.current),Bn(zr.current),ws(r)){if(s=r.stateNode,i=r.memoizedProps,s[Er]=r,(f=s.nodeValue!==i)&&(e=Vt,e!==null))switch(e.tag){case 3:vs(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(s.nodeValue,i,(e.mode&1)!==0)}f&&(r.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Er]=r,r.stateNode=s}return xt(r),null;case 13:if(qe(Qe),s=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(He&&Ut!==null&&r.mode&1&&!(r.flags&128))Zw(),$i(),r.flags|=98560,f=!1;else if(f=ws(r),s!==null&&s.dehydrated!==null){if(e===null){if(!f)throw Error(Q(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(Q(317));f[Er]=r}else $i(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;xt(r),f=!1}else yr!==null&&(Id(yr),yr=null),f=!0;if(!f)return r.flags&65536?r:null}return r.flags&128?(r.lanes=i,r):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(r.child.flags|=8192,r.mode&1&&(e===null||Qe.current&1?lt===0&&(lt=3):$c())),r.updateQueue!==null&&(r.flags|=4),xt(r),null);case 4:return ki(),$d(e,r),e===null&&Sa(r.stateNode.containerInfo),xt(r),null;case 10:return ac(r.type._context),xt(r),null;case 17:return Pt(r.type)&&Xs(),xt(r),null;case 19:if(qe(Qe),f=r.memoizedState,f===null)return xt(r),null;if(s=(r.flags&128)!==0,g=f.rendering,g===null)if(s)Zi(f,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(g=no(e),g!==null){for(r.flags|=128,Zi(f,!1),s=g.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),r.subtreeFlags=0,s=i,i=r.child;i!==null;)f=i,e=s,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,e=g.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ve(Qe,Qe.current&1|2),r.child}e=e.sibling}f.tail!==null&&rt()>Ei&&(r.flags|=128,s=!0,Zi(f,!1),r.lanes=4194304)}else{if(!s)if(e=no(g),e!==null){if(r.flags|=128,s=!0,i=e.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),Zi(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!He)return xt(r),null}else 2*rt()-f.renderingStartTime>Ei&&i!==1073741824&&(r.flags|=128,s=!0,Zi(f,!1),r.lanes=4194304);f.isBackwards?(g.sibling=r.child,r.child=g):(i=f.last,i!==null?i.sibling=g:r.child=g,f.last=g)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=rt(),r.sibling=null,i=Qe.current,Ve(Qe,s?i&1|2:i&1),r):(xt(r),null);case 22:case 23:return xc(),s=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(r.flags|=8192),s&&r.mode&1?jt&1073741824&&(xt(r),r.subtreeFlags&6&&(r.flags|=8192)):xt(r),null;case 24:return null;case 25:return null}throw Error(Q(156,r.tag))}function O$(e,r){switch(tc(r),r.tag){case 1:return Pt(r.type)&&Xs(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ki(),qe(Mt),qe(bt),dc(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return uc(r),null;case 13:if(qe(Qe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(Q(340));$i()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return qe(Qe),null;case 4:return ki(),null;case 10:return ac(r.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var $s=!1,$t=!1,A$=typeof WeakSet=="function"?WeakSet:Set,le=null;function ci(e,r){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){Je(e,r,s)}else i.current=null}function bd(e,r,i){try{i()}catch(s){Je(e,r,s)}}var kv=!1;function M$(e,r){if(sd=Gs,e=Dw(),Jd(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var g=0,b=-1,_=-1,N=0,A=0,D=e,B=null;t:for(;;){for(var q;D!==i||c!==0&&D.nodeType!==3||(b=g+c),D!==f||s!==0&&D.nodeType!==3||(_=g+s),D.nodeType===3&&(g+=D.nodeValue.length),(q=D.firstChild)!==null;)B=D,D=q;for(;;){if(D===e)break t;if(B===i&&++N===c&&(b=g),B===f&&++A===s&&(_=g),(q=D.nextSibling)!==null)break;D=B,B=D.parentNode}D=q}i=b===-1||_===-1?null:{start:b,end:_}}else i=null}i=i||{start:0,end:0}}else i=null;for(od={focusedElem:e,selectionRange:i},Gs=!1,le=r;le!==null;)if(r=le,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,le=e;else for(;le!==null;){r=le;try{var G=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Y=G.memoizedProps,$e=G.memoizedState,M=r.stateNode,R=M.getSnapshotBeforeUpdate(r.elementType===r.type?Y:mr(r.type,Y),$e);M.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var P=r.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(K){Je(r,r.return,K)}if(e=r.sibling,e!==null){e.return=r.return,le=e;break}le=r.return}return G=kv,kv=!1,G}function fa(e,r,i){var s=r.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&bd(r,i,f)}c=c.next}while(c!==s)}}function $o(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==r)}}function kd(e){var r=e.ref;if(r!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof r=="function"?r(e):r.current=e}}function A1(e){var r=e.alternate;r!==null&&(e.alternate=null,A1(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Er],delete r[Ta],delete r[dd],delete r[y$],delete r[v$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M1(e){return e.tag===5||e.tag===3||e.tag===4}function Sv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sd(e,r,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(e,r):i.insertBefore(e,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(e,i)):(r=i,r.appendChild(e)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=Qs));else if(s!==4&&(e=e.child,e!==null))for(Sd(e,r,i),e=e.sibling;e!==null;)Sd(e,r,i),e=e.sibling}function Ed(e,r,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?i.insertBefore(e,r):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ed(e,r,i),e=e.sibling;e!==null;)Ed(e,r,i),e=e.sibling}var mt=null,gr=!1;function Jr(e,r,i){for(i=i.child;i!==null;)P1(e,r,i),i=i.sibling}function P1(e,r,i){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(ho,i)}catch{}switch(i.tag){case 5:$t||ci(i,r);case 6:var s=mt,c=gr;mt=null,Jr(e,r,i),mt=s,gr=c,mt!==null&&(gr?(e=mt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):mt.removeChild(i.stateNode));break;case 18:mt!==null&&(gr?(e=mt,i=i.stateNode,e.nodeType===8?Tu(e.parentNode,i):e.nodeType===1&&Tu(e,i),$a(e)):Tu(mt,i.stateNode));break;case 4:s=mt,c=gr,mt=i.stateNode.containerInfo,gr=!0,Jr(e,r,i),mt=s,gr=c;break;case 0:case 11:case 14:case 15:if(!$t&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var f=c,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&bd(i,r,g),c=c.next}while(c!==s)}Jr(e,r,i);break;case 1:if(!$t&&(ci(i,r),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(b){Je(i,r,b)}Jr(e,r,i);break;case 21:Jr(e,r,i);break;case 22:i.mode&1?($t=(s=$t)||i.memoizedState!==null,Jr(e,r,i),$t=s):Jr(e,r,i);break;default:Jr(e,r,i)}}function Ev(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new A$),r.forEach(function(s){var c=F$.bind(null,e,s);i.has(s)||(i.add(s),s.then(c,c))})}}function fr(e,r){var i=r.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];try{var f=e,g=r,b=g;e:for(;b!==null;){switch(b.tag){case 5:mt=b.stateNode,gr=!1;break e;case 3:mt=b.stateNode.containerInfo,gr=!0;break e;case 4:mt=b.stateNode.containerInfo,gr=!0;break e}b=b.return}if(mt===null)throw Error(Q(160));P1(f,g,c),mt=null,gr=!1;var _=c.alternate;_!==null&&(_.return=null),c.return=null}catch(N){Je(c,r,N)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)B1(r,e),r=r.sibling}function B1(e,r){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fr(r,e),kr(e),s&4){try{fa(3,e,e.return),$o(3,e)}catch(Y){Je(e,e.return,Y)}try{fa(5,e,e.return)}catch(Y){Je(e,e.return,Y)}}break;case 1:fr(r,e),kr(e),s&512&&i!==null&&ci(i,i.return);break;case 5:if(fr(r,e),kr(e),s&512&&i!==null&&ci(i,i.return),e.flags&32){var c=e.stateNode;try{va(c,"")}catch(Y){Je(e,e.return,Y)}}if(s&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,g=i!==null?i.memoizedProps:f,b=e.type,_=e.updateQueue;if(e.updateQueue=null,_!==null)try{b==="input"&&f.type==="radio"&&f.name!=null&&aw(c,f),Xu(b,g);var N=Xu(b,f);for(g=0;g<_.length;g+=2){var A=_[g],D=_[g+1];A==="style"?dw(c,D):A==="dangerouslySetInnerHTML"?lw(c,D):A==="children"?va(c,D):jd(c,A,D,N)}switch(b){case"input":qu(c,f);break;case"textarea":sw(c,f);break;case"select":var B=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var q=f.value;q!=null?fi(c,!!f.multiple,q,!1):B!==!!f.multiple&&(f.defaultValue!=null?fi(c,!!f.multiple,f.defaultValue,!0):fi(c,!!f.multiple,f.multiple?[]:"",!1))}c[Ta]=f}catch(Y){Je(e,e.return,Y)}}break;case 6:if(fr(r,e),kr(e),s&4){if(e.stateNode===null)throw Error(Q(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(Y){Je(e,e.return,Y)}}break;case 3:if(fr(r,e),kr(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{$a(r.containerInfo)}catch(Y){Je(e,e.return,Y)}break;case 4:fr(r,e),kr(e);break;case 13:fr(r,e),kr(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(wc=rt())),s&4&&Ev(e);break;case 22:if(A=i!==null&&i.memoizedState!==null,e.mode&1?($t=(N=$t)||A,fr(r,e),$t=N):fr(r,e),kr(e),s&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!A&&e.mode&1)for(le=e,A=e.child;A!==null;){for(D=le=A;le!==null;){switch(B=le,q=B.child,B.tag){case 0:case 11:case 14:case 15:fa(4,B,B.return);break;case 1:ci(B,B.return);var G=B.stateNode;if(typeof G.componentWillUnmount=="function"){s=B,i=B.return;try{r=s,G.props=r.memoizedProps,G.state=r.memoizedState,G.componentWillUnmount()}catch(Y){Je(s,i,Y)}}break;case 5:ci(B,B.return);break;case 22:if(B.memoizedState!==null){zv(D);continue}}q!==null?(q.return=B,le=q):zv(D)}A=A.sibling}e:for(A=null,D=e;;){if(D.tag===5){if(A===null){A=D;try{c=D.stateNode,N?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(b=D.stateNode,_=D.memoizedProps.style,g=_!=null&&_.hasOwnProperty("display")?_.display:null,b.style.display=uw("display",g))}catch(Y){Je(e,e.return,Y)}}}else if(D.tag===6){if(A===null)try{D.stateNode.nodeValue=N?"":D.memoizedProps}catch(Y){Je(e,e.return,Y)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;A===D&&(A=null),D=D.return}A===D&&(A=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:fr(r,e),kr(e),s&4&&Ev(e);break;case 21:break;default:fr(r,e),kr(e)}}function kr(e){var r=e.flags;if(r&2){try{e:{for(var i=e.return;i!==null;){if(M1(i)){var s=i;break e}i=i.return}throw Error(Q(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(va(c,""),s.flags&=-33);var f=Sv(e);Ed(e,f,c);break;case 3:case 4:var g=s.stateNode.containerInfo,b=Sv(e);Sd(e,b,g);break;default:throw Error(Q(161))}}catch(_){Je(e,e.return,_)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function P$(e,r,i){le=e,D1(e)}function D1(e,r,i){for(var s=(e.mode&1)!==0;le!==null;){var c=le,f=c.child;if(c.tag===22&&s){var g=c.memoizedState!==null||$s;if(!g){var b=c.alternate,_=b!==null&&b.memoizedState!==null||$t;b=$s;var N=$t;if($s=g,($t=_)&&!N)for(le=c;le!==null;)g=le,_=g.child,g.tag===22&&g.memoizedState!==null?Cv(c):_!==null?(_.return=g,le=_):Cv(c);for(;f!==null;)le=f,D1(f),f=f.sibling;le=c,$s=b,$t=N}Tv(e)}else c.subtreeFlags&8772&&f!==null?(f.return=c,le=f):Tv(e)}}function Tv(e){for(;le!==null;){var r=le;if(r.flags&8772){var i=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:$t||$o(5,r);break;case 1:var s=r.stateNode;if(r.flags&4&&!$t)if(i===null)s.componentDidMount();else{var c=r.elementType===r.type?i.memoizedProps:mr(r.type,i.memoizedProps);s.componentDidUpdate(c,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&cv(r,f,s);break;case 3:var g=r.updateQueue;if(g!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}cv(r,g,i)}break;case 5:var b=r.stateNode;if(i===null&&r.flags&4){i=b;var _=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":_.autoFocus&&i.focus();break;case"img":_.src&&(i.src=_.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var N=r.alternate;if(N!==null){var A=N.memoizedState;if(A!==null){var D=A.dehydrated;D!==null&&$a(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}$t||r.flags&512&&kd(r)}catch(B){Je(r,r.return,B)}}if(r===e){le=null;break}if(i=r.sibling,i!==null){i.return=r.return,le=i;break}le=r.return}}function zv(e){for(;le!==null;){var r=le;if(r===e){le=null;break}var i=r.sibling;if(i!==null){i.return=r.return,le=i;break}le=r.return}}function Cv(e){for(;le!==null;){var r=le;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{$o(4,r)}catch(_){Je(r,i,_)}break;case 1:var s=r.stateNode;if(typeof s.componentDidMount=="function"){var c=r.return;try{s.componentDidMount()}catch(_){Je(r,c,_)}}var f=r.return;try{kd(r)}catch(_){Je(r,f,_)}break;case 5:var g=r.return;try{kd(r)}catch(_){Je(r,g,_)}}}catch(_){Je(r,r.return,_)}if(r===e){le=null;break}var b=r.sibling;if(b!==null){b.return=r.return,le=b;break}le=r.return}}var B$=Math.ceil,so=Fr.ReactCurrentDispatcher,yc=Fr.ReactCurrentOwner,er=Fr.ReactCurrentBatchConfig,Me=0,pt=null,at=null,gt=0,jt=0,pi=wn(0),lt=0,Oa=null,Fn=0,bo=0,vc=0,ha=null,Ot=null,wc=0,Ei=1/0,Mr=null,oo=!1,Td=null,fn=null,bs=!1,on=null,lo=0,ma=0,zd=null,Bs=-1,Ds=0;function Ct(){return Me&6?rt():Bs!==-1?Bs:Bs=rt()}function hn(e){return e.mode&1?Me&2&&gt!==0?gt&-gt:_$.transition!==null?(Ds===0&&(Ds=$w()),Ds):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Cw(e.type)),e):1}function wr(e,r,i,s){if(50<ma)throw ma=0,zd=null,Error(Q(185));Ba(e,i,s),(!(Me&2)||e!==pt)&&(e===pt&&(!(Me&2)&&(bo|=i),lt===4&&an(e,gt)),Bt(e,s),i===1&&Me===0&&!(r.mode&1)&&(Ei=rt()+500,wo&&_n()))}function Bt(e,r){var i=e.callbackNode;_2(e,r);var s=qs(e,e===pt?gt:0);if(s===0)i!==null&&Dy(i),e.callbackNode=null,e.callbackPriority=0;else if(r=s&-s,e.callbackPriority!==r){if(i!=null&&Dy(i),r===1)e.tag===0?w$(Iv.bind(null,e)):Kw(Iv.bind(null,e)),m$(function(){!(Me&6)&&_n()}),i=null;else{switch(bw(s)){case 1:i=qd;break;case 4:i=_w;break;case 16:i=Fs;break;case 536870912:i=xw;break;default:i=Fs}i=G1(i,L1.bind(null,e))}e.callbackPriority=r,e.callbackNode=i}}function L1(e,r){if(Bs=-1,Ds=0,Me&6)throw Error(Q(327));var i=e.callbackNode;if(vi()&&e.callbackNode!==i)return null;var s=qs(e,e===pt?gt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||r)r=uo(e,s);else{r=s;var c=Me;Me|=2;var f=U1();(pt!==e||gt!==r)&&(Mr=null,Ei=rt()+500,Ln(e,r));do try{j$();break}catch(b){j1(e,b)}while(1);ic(),so.current=f,Me=c,at!==null?r=0:(pt=null,gt=0,r=lt)}if(r!==0){if(r===2&&(c=td(e),c!==0&&(s=c,r=Cd(e,c))),r===1)throw i=Oa,Ln(e,0),an(e,s),Bt(e,rt()),i;if(r===6)an(e,s);else{if(c=e.current.alternate,!(s&30)&&!D$(c)&&(r=uo(e,s),r===2&&(f=td(e),f!==0&&(s=f,r=Cd(e,f))),r===1))throw i=Oa,Ln(e,0),an(e,s),Bt(e,rt()),i;switch(e.finishedWork=c,e.finishedLanes=s,r){case 0:case 1:throw Error(Q(345));case 2:An(e,Ot,Mr);break;case 3:if(an(e,s),(s&130023424)===s&&(r=wc+500-rt(),10<r)){if(qs(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){Ct(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=ud(An.bind(null,e,Ot,Mr),r);break}An(e,Ot,Mr);break;case 4:if(an(e,s),(s&4194240)===s)break;for(r=e.eventTimes,c=-1;0<s;){var g=31-vr(s);f=1<<g,g=r[g],g>c&&(c=g),s&=~f}if(s=c,s=rt()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*B$(s/1960))-s,10<s){e.timeoutHandle=ud(An.bind(null,e,Ot,Mr),s);break}An(e,Ot,Mr);break;case 5:An(e,Ot,Mr);break;default:throw Error(Q(329))}}}return Bt(e,rt()),e.callbackNode===i?L1.bind(null,e):null}function Cd(e,r){var i=ha;return e.current.memoizedState.isDehydrated&&(Ln(e,r).flags|=256),e=uo(e,r),e!==2&&(r=Ot,Ot=i,r!==null&&Id(r)),e}function Id(e){Ot===null?Ot=e:Ot.push.apply(Ot,e)}function D$(e){for(var r=e;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var c=i[s],f=c.getSnapshot;c=c.value;try{if(!_r(f(),c))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function an(e,r){for(r&=~vc,r&=~bo,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var i=31-vr(r),s=1<<i;e[i]=-1,r&=~s}}function Iv(e){if(Me&6)throw Error(Q(327));vi();var r=qs(e,0);if(!(r&1))return Bt(e,rt()),null;var i=uo(e,r);if(e.tag!==0&&i===2){var s=td(e);s!==0&&(r=s,i=Cd(e,s))}if(i===1)throw i=Oa,Ln(e,0),an(e,r),Bt(e,rt()),i;if(i===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,An(e,Ot,Mr),Bt(e,rt()),null}function _c(e,r){var i=Me;Me|=1;try{return e(r)}finally{Me=i,Me===0&&(Ei=rt()+500,wo&&_n())}}function qn(e){on!==null&&on.tag===0&&!(Me&6)&&vi();var r=Me;Me|=1;var i=er.transition,s=Le;try{if(er.transition=null,Le=1,e)return e()}finally{Le=s,er.transition=i,Me=r,!(Me&6)&&_n()}}function xc(){jt=pi.current,qe(pi)}function Ln(e,r){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,h$(i)),at!==null)for(i=at.return;i!==null;){var s=i;switch(tc(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Xs();break;case 3:ki(),qe(Mt),qe(bt),dc();break;case 5:uc(s);break;case 4:ki();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:ac(s.type._context);break;case 22:case 23:xc()}i=i.return}if(pt=e,at=e=mn(e.current,null),gt=jt=r,lt=0,Oa=null,vc=bo=Fn=0,Ot=ha=null,Pn!==null){for(r=0;r<Pn.length;r++)if(i=Pn[r],s=i.interleaved,s!==null){i.interleaved=null;var c=s.next,f=i.pending;if(f!==null){var g=f.next;f.next=c,s.next=g}i.pending=s}Pn=null}return e}function j1(e,r){do{var i=at;try{if(ic(),As.current=ao,io){for(var s=Xe.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}io=!1}if(Wn=0,ct=ot=Xe=null,pa=!1,Ia=0,yc.current=null,i===null||i.return===null){lt=1,Oa=r,at=null;break}e:{var f=e,g=i.return,b=i,_=r;if(r=gt,b.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){var N=_,A=b,D=A.tag;if(!(A.mode&1)&&(D===0||D===11||D===15)){var B=A.alternate;B?(A.updateQueue=B.updateQueue,A.memoizedState=B.memoizedState,A.lanes=B.lanes):(A.updateQueue=null,A.memoizedState=null)}var q=yv(g);if(q!==null){q.flags&=-257,vv(q,g,b,f,r),q.mode&1&&gv(f,N,r),r=q,_=N;var G=r.updateQueue;if(G===null){var Y=new Set;Y.add(_),r.updateQueue=Y}else G.add(_);break e}else{if(!(r&1)){gv(f,N,r),$c();break e}_=Error(Q(426))}}else if(He&&b.mode&1){var $e=yv(g);if($e!==null){!($e.flags&65536)&&($e.flags|=256),vv($e,g,b,f,r),rc(Si(_,b));break e}}f=_=Si(_,b),lt!==4&&(lt=2),ha===null?ha=[f]:ha.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var M=b1(f,_,r);dv(f,M);break e;case 1:b=_;var R=f.type,P=f.stateNode;if(!(f.flags&128)&&(typeof R.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(fn===null||!fn.has(P)))){f.flags|=65536,r&=-r,f.lanes|=r;var K=k1(f,b,r);dv(f,K);break e}}f=f.return}while(f!==null)}W1(i)}catch(ie){r=ie,at===i&&i!==null&&(at=i=i.return);continue}break}while(1)}function U1(){var e=so.current;return so.current=ao,e===null?ao:e}function $c(){(lt===0||lt===3||lt===2)&&(lt=4),pt===null||!(Fn&268435455)&&!(bo&268435455)||an(pt,gt)}function uo(e,r){var i=Me;Me|=2;var s=U1();(pt!==e||gt!==r)&&(Mr=null,Ln(e,r));do try{L$();break}catch(c){j1(e,c)}while(1);if(ic(),Me=i,so.current=s,at!==null)throw Error(Q(261));return pt=null,gt=0,lt}function L$(){for(;at!==null;)V1(at)}function j$(){for(;at!==null&&!c2();)V1(at)}function V1(e){var r=q1(e.alternate,e,jt);e.memoizedProps=e.pendingProps,r===null?W1(e):at=r,yc.current=null}function W1(e){var r=e;do{var i=r.alternate;if(e=r.return,r.flags&32768){if(i=O$(i,r),i!==null){i.flags&=32767,at=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,at=null;return}}else if(i=R$(i,r,jt),i!==null){at=i;return}if(r=r.sibling,r!==null){at=r;return}at=r=e}while(r!==null);lt===0&&(lt=5)}function An(e,r,i){var s=Le,c=er.transition;try{er.transition=null,Le=1,U$(e,r,i,s)}finally{er.transition=c,Le=s}return null}function U$(e,r,i,s){do vi();while(on!==null);if(Me&6)throw Error(Q(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(x2(e,f),e===pt&&(at=pt=null,gt=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||bs||(bs=!0,G1(Fs,function(){return vi(),null})),f=(i.flags&15990)!==0,i.subtreeFlags&15990||f){f=er.transition,er.transition=null;var g=Le;Le=1;var b=Me;Me|=4,yc.current=null,M$(e,i),B1(i,e),o$(od),Gs=!!sd,od=sd=null,e.current=i,P$(i),p2(),Me=b,Le=g,er.transition=f}else e.current=i;if(bs&&(bs=!1,on=e,lo=c),f=e.pendingLanes,f===0&&(fn=null),m2(i.stateNode),Bt(e,rt()),r!==null)for(s=e.onRecoverableError,i=0;i<r.length;i++)c=r[i],s(c.value,{componentStack:c.stack,digest:c.digest});if(oo)throw oo=!1,e=Td,Td=null,e;return lo&1&&e.tag!==0&&vi(),f=e.pendingLanes,f&1?e===zd?ma++:(ma=0,zd=e):ma=0,_n(),null}function vi(){if(on!==null){var e=bw(lo),r=er.transition,i=Le;try{if(er.transition=null,Le=16>e?16:e,on===null)var s=!1;else{if(e=on,on=null,lo=0,Me&6)throw Error(Q(331));var c=Me;for(Me|=4,le=e.current;le!==null;){var f=le,g=f.child;if(le.flags&16){var b=f.deletions;if(b!==null){for(var _=0;_<b.length;_++){var N=b[_];for(le=N;le!==null;){var A=le;switch(A.tag){case 0:case 11:case 15:fa(8,A,f)}var D=A.child;if(D!==null)D.return=A,le=D;else for(;le!==null;){A=le;var B=A.sibling,q=A.return;if(A1(A),A===N){le=null;break}if(B!==null){B.return=q,le=B;break}le=q}}}var G=f.alternate;if(G!==null){var Y=G.child;if(Y!==null){G.child=null;do{var $e=Y.sibling;Y.sibling=null,Y=$e}while(Y!==null)}}le=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,le=g;else e:for(;le!==null;){if(f=le,f.flags&2048)switch(f.tag){case 0:case 11:case 15:fa(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,le=M;break e}le=f.return}}var R=e.current;for(le=R;le!==null;){g=le;var P=g.child;if(g.subtreeFlags&2064&&P!==null)P.return=g,le=P;else e:for(g=R;le!==null;){if(b=le,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:$o(9,b)}}catch(ie){Je(b,b.return,ie)}if(b===g){le=null;break e}var K=b.sibling;if(K!==null){K.return=b.return,le=K;break e}le=b.return}}if(Me=c,_n(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(ho,e)}catch{}s=!0}return s}finally{Le=i,er.transition=r}}return!1}function Nv(e,r,i){r=Si(i,r),r=b1(e,r,1),e=pn(e,r,1),r=Ct(),e!==null&&(Ba(e,1,r),Bt(e,r))}function Je(e,r,i){if(e.tag===3)Nv(e,e,i);else for(;r!==null;){if(r.tag===3){Nv(r,e,i);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(fn===null||!fn.has(s))){e=Si(i,e),e=k1(r,e,1),r=pn(r,e,1),e=Ct(),r!==null&&(Ba(r,1,e),Bt(r,e));break}}r=r.return}}function V$(e,r,i){var s=e.pingCache;s!==null&&s.delete(r),r=Ct(),e.pingedLanes|=e.suspendedLanes&i,pt===e&&(gt&i)===i&&(lt===4||lt===3&&(gt&130023424)===gt&&500>rt()-wc?Ln(e,0):vc|=i),Bt(e,r)}function F1(e,r){r===0&&(e.mode&1?(r=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):r=1);var i=Ct();e=Vr(e,r),e!==null&&(Ba(e,r,i),Bt(e,i))}function W$(e){var r=e.memoizedState,i=0;r!==null&&(i=r.retryLane),F1(e,i)}function F$(e,r){var i=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(Q(314))}s!==null&&s.delete(r),F1(e,i)}var q1;q1=function(e,r,i){if(e!==null)if(e.memoizedProps!==r.pendingProps||Mt.current)At=!0;else{if(!(e.lanes&i)&&!(r.flags&128))return At=!1,N$(e,r,i);At=!!(e.flags&131072)}else At=!1,He&&r.flags&1048576&&Qw(r,Js,r.index);switch(r.lanes=0,r.tag){case 2:var s=r.type;Ps(e,r),e=r.pendingProps;var c=xi(r,bt.current);yi(r,i),c=pc(null,r,s,e,c,i);var f=fc();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pt(s)?(f=!0,Zs(r)):f=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,oc(r),c.updater=xo,r.stateNode=c,c._reactInternals=r,gd(r,s,e,i),r=wd(null,r,s,!0,f,i)):(r.tag=0,He&&f&&ec(r),zt(null,r,c,i),r=r.child),r;case 16:s=r.elementType;e:{switch(Ps(e,r),e=r.pendingProps,c=s._init,s=c(s._payload),r.type=s,c=r.tag=G$(s),e=mr(s,e),c){case 0:r=vd(null,r,s,e,i);break e;case 1:r=xv(null,r,s,e,i);break e;case 11:r=wv(null,r,s,e,i);break e;case 14:r=_v(null,r,s,mr(s.type,e),i);break e}throw Error(Q(306,s,""))}return r;case 0:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:mr(s,c),vd(e,r,s,c,i);case 1:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:mr(s,c),xv(e,r,s,c,i);case 3:e:{if(z1(r),e===null)throw Error(Q(387));s=r.pendingProps,f=r.memoizedState,c=f.element,t1(e,r),ro(r,s,null,i);var g=r.memoizedState;if(s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){c=Si(Error(Q(423)),r),r=$v(e,r,s,i,c);break e}else if(s!==c){c=Si(Error(Q(424)),r),r=$v(e,r,s,i,c);break e}else for(Ut=cn(r.stateNode.containerInfo.firstChild),Vt=r,He=!0,yr=null,i=Jw(r,null,s,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if($i(),s===c){r=Wr(e,r,i);break e}zt(e,r,s,i)}r=r.child}return r;case 5:return r1(r),e===null&&fd(r),s=r.type,c=r.pendingProps,f=e!==null?e.memoizedProps:null,g=c.children,ld(s,c)?g=null:f!==null&&ld(s,f)&&(r.flags|=32),T1(e,r),zt(e,r,g,i),r.child;case 6:return e===null&&fd(r),null;case 13:return C1(e,r,i);case 4:return lc(r,r.stateNode.containerInfo),s=r.pendingProps,e===null?r.child=bi(r,null,s,i):zt(e,r,s,i),r.child;case 11:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:mr(s,c),wv(e,r,s,c,i);case 7:return zt(e,r,r.pendingProps,i),r.child;case 8:return zt(e,r,r.pendingProps.children,i),r.child;case 12:return zt(e,r,r.pendingProps.children,i),r.child;case 10:e:{if(s=r.type._context,c=r.pendingProps,f=r.memoizedProps,g=c.value,Ve(eo,s._currentValue),s._currentValue=g,f!==null)if(_r(f.value,g)){if(f.children===c.children&&!Mt.current){r=Wr(e,r,i);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var b=f.dependencies;if(b!==null){g=f.child;for(var _=b.firstContext;_!==null;){if(_.context===s){if(f.tag===1){_=Lr(-1,i&-i),_.tag=2;var N=f.updateQueue;if(N!==null){N=N.shared;var A=N.pending;A===null?_.next=_:(_.next=A.next,A.next=_),N.pending=_}}f.lanes|=i,_=f.alternate,_!==null&&(_.lanes|=i),hd(f.return,i,r),b.lanes|=i;break}_=_.next}}else if(f.tag===10)g=f.type===r.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(Q(341));g.lanes|=i,b=g.alternate,b!==null&&(b.lanes|=i),hd(g,i,r),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===r){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}zt(e,r,c.children,i),r=r.child}return r;case 9:return c=r.type,s=r.pendingProps.children,yi(r,i),c=tr(c),s=s(c),r.flags|=1,zt(e,r,s,i),r.child;case 14:return s=r.type,c=mr(s,r.pendingProps),c=mr(s.type,c),_v(e,r,s,c,i);case 15:return S1(e,r,r.type,r.pendingProps,i);case 17:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:mr(s,c),Ps(e,r),r.tag=1,Pt(s)?(e=!0,Zs(r)):e=!1,yi(r,i),$1(r,s,c),gd(r,s,c,i),wd(null,r,s,!0,e,i);case 19:return I1(e,r,i);case 22:return E1(e,r,i)}throw Error(Q(156,r.tag))};function G1(e,r){return ww(e,r)}function q$(e,r,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,r,i,s){return new q$(e,r,i,s)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G$(e){if(typeof e=="function")return bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vd)return 11;if(e===Wd)return 14}return 2}function mn(e,r){var i=e.alternate;return i===null?(i=Jt(e.tag,r,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=r,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,r=e.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ls(e,r,i,s,c,f){var g=2;if(s=e,typeof e=="function")bc(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case ri:return jn(i.children,c,f,r);case Ud:g=8,c|=8;break;case ju:return e=Jt(12,i,r,c|2),e.elementType=ju,e.lanes=f,e;case Uu:return e=Jt(13,i,r,c),e.elementType=Uu,e.lanes=f,e;case Vu:return e=Jt(19,i,r,c),e.elementType=Vu,e.lanes=f,e;case rw:return ko(i,c,f,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ew:g=10;break e;case tw:g=9;break e;case Vd:g=11;break e;case Wd:g=14;break e;case tn:g=16,s=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return r=Jt(g,i,r,c),r.elementType=e,r.type=s,r.lanes=f,r}function jn(e,r,i,s){return e=Jt(7,e,s,r),e.lanes=i,e}function ko(e,r,i,s){return e=Jt(22,e,s,r),e.elementType=rw,e.lanes=i,e.stateNode={isHidden:!1},e}function Mu(e,r,i){return e=Jt(6,e,null,r),e.lanes=i,e}function Pu(e,r,i){return r=Jt(4,e.children!==null?e.children:[],e.key,r),r.lanes=i,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function H$(e,r,i,s,c){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function kc(e,r,i,s,c,f,g,b,_){return e=new H$(e,r,i,b,_),r===1?(r=1,f===!0&&(r|=8)):r=0,f=Jt(3,null,null,r),e.current=f,f.stateNode=e,f.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},oc(f),e}function K$(e,r,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:s==null?null:""+s,children:e,containerInfo:r,implementation:i}}function H1(e){if(!e)return yn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(Q(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(Q(171))}if(e.tag===1){var i=e.type;if(Pt(i))return Hw(e,i,r)}return r}function K1(e,r,i,s,c,f,g,b,_){return e=kc(i,s,!0,e,c,f,g,b,_),e.context=H1(null),i=e.current,s=Ct(),c=hn(i),f=Lr(s,c),f.callback=r??null,pn(i,f,c),e.current.lanes=c,Ba(e,c,s),Bt(e,s),e}function So(e,r,i,s){var c=r.current,f=Ct(),g=hn(c);return i=H1(i),r.context===null?r.context=i:r.pendingContext=i,r=Lr(f,g),r.payload={element:e},s=s===void 0?null:s,s!==null&&(r.callback=s),e=pn(c,r,g),e!==null&&(wr(e,c,g,f),Os(e,c,g)),g}function co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rv(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<r?i:r}}function Sc(e,r){Rv(e,r),(e=e.alternate)&&Rv(e,r)}function Q$(){return null}var Q1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ec(e){this._internalRoot=e}Eo.prototype.render=Ec.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(Q(409));So(e,r,null,null)};Eo.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;qn(function(){So(null,e,null,null)}),r[Ur]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ew();e={blockedOn:null,target:e,priority:r};for(var i=0;i<nn.length&&r!==0&&r<nn[i].priority;i++);nn.splice(i,0,e),i===0&&zw(e)}};function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ov(){}function X$(e,r,i,s,c){if(c){if(typeof s=="function"){var f=s;s=function(){var N=co(g);f.call(N)}}var g=K1(r,s,e,0,null,!1,!1,"",Ov);return e._reactRootContainer=g,e[Ur]=g.current,Sa(e.nodeType===8?e.parentNode:e),qn(),g}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var b=s;s=function(){var N=co(_);b.call(N)}}var _=kc(e,0,!1,null,null,!1,!1,"",Ov);return e._reactRootContainer=_,e[Ur]=_.current,Sa(e.nodeType===8?e.parentNode:e),qn(function(){So(r,_,i,s)}),_}function zo(e,r,i,s,c){var f=i._reactRootContainer;if(f){var g=f;if(typeof c=="function"){var b=c;c=function(){var _=co(g);b.call(_)}}So(r,g,e,c)}else g=X$(i,r,e,c,s);return co(g)}kw=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var i=na(r.pendingLanes);i!==0&&(Gd(r,i|1),Bt(r,rt()),!(Me&6)&&(Ei=rt()+500,_n()))}break;case 13:qn(function(){var s=Vr(e,1);if(s!==null){var c=Ct();wr(s,e,1,c)}}),Sc(e,1)}};Hd=function(e){if(e.tag===13){var r=Vr(e,134217728);if(r!==null){var i=Ct();wr(r,e,134217728,i)}Sc(e,134217728)}};Sw=function(e){if(e.tag===13){var r=hn(e),i=Vr(e,r);if(i!==null){var s=Ct();wr(i,e,r,s)}Sc(e,r)}};Ew=function(){return Le};Tw=function(e,r){var i=Le;try{return Le=e,r()}finally{Le=i}};Yu=function(e,r,i){switch(r){case"input":if(qu(e,i),r=i.name,i.type==="radio"&&r!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var s=i[r];if(s!==e&&s.form===e.form){var c=vo(s);if(!c)throw Error(Q(90));iw(s),qu(s,c)}}}break;case"textarea":sw(e,i);break;case"select":r=i.value,r!=null&&fi(e,!!i.multiple,r,!1)}};fw=_c;hw=qn;var Z$={usingClientEntryPoint:!1,Events:[La,si,vo,cw,pw,_c]},Yi={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y$={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yw(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||Q$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{ho=ks.inject(Y$),Tr=ks}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z$;Ft.createPortal=function(e,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(r))throw Error(Q(200));return K$(e,r,null,i)};Ft.createRoot=function(e,r){if(!Tc(e))throw Error(Q(299));var i=!1,s="",c=Q1;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=kc(e,1,!1,null,null,i,!1,s,c),e[Ur]=r.current,Sa(e.nodeType===8?e.parentNode:e),new Ec(r)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=yw(r),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return qn(e)};Ft.hydrate=function(e,r,i){if(!To(r))throw Error(Q(200));return zo(null,e,r,!0,i)};Ft.hydrateRoot=function(e,r,i){if(!Tc(e))throw Error(Q(405));var s=i!=null&&i.hydratedSources||null,c=!1,f="",g=Q1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),r=K1(r,null,e,1,i??null,c,!1,f,g),e[Ur]=r.current,Sa(e),s)for(e=0;e<s.length;e++)i=s[e],c=i._getVersion,c=c(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,c]:r.mutableSourceEagerHydrationData.push(i,c);return new Eo(r)};Ft.render=function(e,r,i){if(!To(r))throw Error(Q(200));return zo(null,e,r,!1,i)};Ft.unmountComponentAtNode=function(e){if(!To(e))throw Error(Q(40));return e._reactRootContainer?(qn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ur]=null})}),!0):!1};Ft.unstable_batchedUpdates=_c;Ft.unstable_renderSubtreeIntoContainer=function(e,r,i,s){if(!To(i))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return zo(e,r,i,!1,s)};Ft.version="18.3.1-next-f1338f8080-20240426";function X1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X1)}catch(e){console.error(e)}}X1(),Xv.exports=Ft;var J$=Xv.exports,Av=J$;Du.createRoot=Av.createRoot,Du.hydrateRoot=Av.hydrateRoot;var eb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rb=(e,r)=>{const i=Ye.forwardRef(({color:s="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:g,children:b,..._},N)=>Ye.createElement("svg",{ref:N,...eb,width:c,height:c,stroke:s,strokeWidth:g?Number(f)*24/Number(c):f,className:`lucide lucide-${tb(e)}`,..._},[...r.map(([A,D])=>Ye.createElement(A,D)),...(Array.isArray(b)?b:[b])||[]]));return i.displayName=`${e}`,i};var ft=rb;const Z1=ft("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),wi=ft("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Y1=ft("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),nb=ft("Bug",[["rect",{width:"8",height:"14",x:"8",y:"6",rx:"4",key:"hq8nra"}],["path",{d:"m19 7-3 2",key:"fmg8ec"}],["path",{d:"m5 7 3 2",key:"dkxqes"}],["path",{d:"m19 19-3-2",key:"1hbhi4"}],["path",{d:"m5 19 3-2",key:"dvt2ee"}],["path",{d:"M20 13h-4",key:"1agfp2"}],["path",{d:"M4 13h4",key:"1bwh8b"}],["path",{d:"m10 4 1 2",key:"1pot59"}],["path",{d:"m14 4-1 2",key:"m8sn0o"}]]),Aa=ft("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),ib=ft("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),ab=ft("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),J1=ft("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),po=ft("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),aa=ft("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),e_=ft("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Ma=ft("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),sb=ft("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),ob=ft("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),lb=ft("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),t_=ft("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),ub=ft("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),r_=ft("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function n_(e){var r,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var c=e.length;for(r=0;r<c;r++)e[r]&&(i=n_(e[r]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function db(){for(var e,r,i=0,s="",c=arguments.length;i<c;i++)(e=arguments[i])&&(r=n_(e))&&(s&&(s+=" "),s+=r);return s}function cb(){for(var e=0,r,i,s="";e<arguments.length;)(r=arguments[e++])&&(i=i_(r))&&(s&&(s+=" "),s+=i);return s}function i_(e){if(typeof e=="string")return e;for(var r,i="",s=0;s<e.length;s++)e[s]&&(r=i_(e[s]))&&(i&&(i+=" "),i+=r);return i}var zc="-";function pb(e){var r=hb(e),i=e.conflictingClassGroups,s=e.conflictingClassGroupModifiers,c=s===void 0?{}:s;function f(b){var _=b.split(zc);return _[0]===""&&_.length!==1&&_.shift(),a_(_,r)||fb(b)}function g(b,_){var N=i[b]||[];return _&&c[b]?[].concat(N,c[b]):N}return{getClassGroupId:f,getConflictingClassGroupIds:g}}function a_(e,r){var g;if(e.length===0)return r.classGroupId;var i=e[0],s=r.nextPart.get(i),c=s?a_(e.slice(1),s):void 0;if(c)return c;if(r.validators.length!==0){var f=e.join(zc);return(g=r.validators.find(function(b){var _=b.validator;return _(f)}))==null?void 0:g.classGroupId}}var Mv=/^\[(.+)\]$/;function fb(e){if(Mv.test(e)){var r=Mv.exec(e)[1],i=r==null?void 0:r.substring(0,r.indexOf(":"));if(i)return"arbitrary.."+i}}function hb(e){var r=e.theme,i=e.prefix,s={nextPart:new Map,validators:[]},c=gb(Object.entries(e.classGroups),i);return c.forEach(function(f){var g=f[0],b=f[1];Nd(b,s,g,r)}),s}function Nd(e,r,i,s){e.forEach(function(c){if(typeof c=="string"){var f=c===""?r:Pv(r,c);f.classGroupId=i;return}if(typeof c=="function"){if(mb(c)){Nd(c(s),r,i,s);return}r.validators.push({validator:c,classGroupId:i});return}Object.entries(c).forEach(function(g){var b=g[0],_=g[1];Nd(_,Pv(r,b),i,s)})})}function Pv(e,r){var i=e;return r.split(zc).forEach(function(s){i.nextPart.has(s)||i.nextPart.set(s,{nextPart:new Map,validators:[]}),i=i.nextPart.get(s)}),i}function mb(e){return e.isThemeGetter}function gb(e,r){return r?e.map(function(i){var s=i[0],c=i[1],f=c.map(function(g){return typeof g=="string"?r+g:typeof g=="object"?Object.fromEntries(Object.entries(g).map(function(b){var _=b[0],N=b[1];return[r+_,N]})):g});return[s,f]}):e}function yb(e){if(e<1)return{get:function(){},set:function(){}};var r=0,i=new Map,s=new Map;function c(f,g){i.set(f,g),r++,r>e&&(r=0,s=i,i=new Map)}return{get:function(g){var b=i.get(g);if(b!==void 0)return b;if((b=s.get(g))!==void 0)return c(g,b),b},set:function(g,b){i.has(g)?i.set(g,b):c(g,b)}}}var s_="!";function vb(e){var r=e.separator||":",i=r.length===1,s=r[0],c=r.length;return function(g){for(var b=[],_=0,N=0,A,D=0;D<g.length;D++){var B=g[D];if(_===0){if(B===s&&(i||g.slice(D,D+c)===r)){b.push(g.slice(N,D)),N=D+c;continue}if(B==="/"){A=D;continue}}B==="["?_++:B==="]"&&_--}var q=b.length===0?g:g.substring(N),G=q.startsWith(s_),Y=G?q.substring(1):q,$e=A&&A>N?A-N:void 0;return{modifiers:b,hasImportantModifier:G,baseClassName:Y,maybePostfixModifierPosition:$e}}}function wb(e){if(e.length<=1)return e;var r=[],i=[];return e.forEach(function(s){var c=s[0]==="[";c?(r.push.apply(r,i.sort().concat([s])),i=[]):i.push(s)}),r.push.apply(r,i.sort()),r}function _b(e){return{cache:yb(e.cacheSize),splitModifiers:vb(e),...pb(e)}}var xb=/\s+/;function $b(e,r){var i=r.splitModifiers,s=r.getClassGroupId,c=r.getConflictingClassGroupIds,f=new Set;return e.trim().split(xb).map(function(g){var b=i(g),_=b.modifiers,N=b.hasImportantModifier,A=b.baseClassName,D=b.maybePostfixModifierPosition,B=s(D?A.substring(0,D):A),q=!!D;if(!B){if(!D)return{isTailwindClass:!1,originalClassName:g};if(B=s(A),!B)return{isTailwindClass:!1,originalClassName:g};q=!1}var G=wb(_).join(":"),Y=N?G+s_:G;return{isTailwindClass:!0,modifierId:Y,classGroupId:B,originalClassName:g,hasPostfixModifier:q}}).reverse().filter(function(g){if(!g.isTailwindClass)return!0;var b=g.modifierId,_=g.classGroupId,N=g.hasPostfixModifier,A=b+_;return f.has(A)?!1:(f.add(A),c(_,N).forEach(function(D){return f.add(b+D)}),!0)}).reverse().map(function(g){return g.originalClassName}).join(" ")}function bb(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s,c,f,g=b;function b(N){var A=r[0],D=r.slice(1),B=D.reduce(function(q,G){return G(q)},A());return s=_b(B),c=s.cache.get,f=s.cache.set,g=_,_(N)}function _(N){var A=c(N);if(A)return A;var D=$b(N,s);return f(N,D),D}return function(){return g(cb.apply(null,arguments))}}function We(e){var r=function(s){return s[e]||[]};return r.isThemeGetter=!0,r}var o_=/^\[(?:([a-z-]+):)?(.+)\]$/i,kb=/^\d+\/\d+$/,Sb=new Set(["px","full","screen"]),Eb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Tb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zb=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function hr(e){return Dn(e)||Sb.has(e)||kb.test(e)||Rd(e)}function Rd(e){return Kn(e,"length",Ab)}function Cb(e){return Kn(e,"size",l_)}function Ib(e){return Kn(e,"position",l_)}function Nb(e){return Kn(e,"url",Mb)}function Ss(e){return Kn(e,"number",Dn)}function Dn(e){return!Number.isNaN(Number(e))}function Rb(e){return e.endsWith("%")&&Dn(e.slice(0,-1))}function Ji(e){return Bv(e)||Kn(e,"number",Bv)}function Ie(e){return o_.test(e)}function ea(){return!0}function en(e){return Eb.test(e)}function Ob(e){return Kn(e,"",Pb)}function Kn(e,r,i){var s=o_.exec(e);return s?s[1]?s[1]===r:i(s[2]):!1}function Ab(e){return Tb.test(e)}function l_(){return!1}function Mb(e){return e.startsWith("url(")}function Bv(e){return Number.isInteger(Number(e))}function Pb(e){return zb.test(e)}function Bb(){var e=We("colors"),r=We("spacing"),i=We("blur"),s=We("brightness"),c=We("borderColor"),f=We("borderRadius"),g=We("borderSpacing"),b=We("borderWidth"),_=We("contrast"),N=We("grayscale"),A=We("hueRotate"),D=We("invert"),B=We("gap"),q=We("gradientColorStops"),G=We("gradientColorStopPositions"),Y=We("inset"),$e=We("margin"),M=We("opacity"),R=We("padding"),P=We("saturate"),K=We("scale"),ie=We("sepia"),te=We("skew"),ue=We("space"),H=We("translate"),Be=function(){return["auto","contain","none"]},be=function(){return["auto","hidden","clip","visible","scroll"]},ze=function(){return["auto",Ie,r]},Re=function(){return[Ie,r]},kt=function(){return["",hr]},Gt=function(){return["auto",Dn,Ie]},Cr=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},St=function(){return["solid","dashed","dotted","double","none"]},Ht=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},ae=function(){return["start","end","center","between","around","evenly","stretch"]},ee=function(){return["","0",Ie]},X=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},ye=function(){return[Dn,Ss]},ke=function(){return[Dn,Ie]};return{cacheSize:500,theme:{colors:[ea],spacing:[hr],blur:["none","",en,Ie],brightness:ye(),borderColor:[e],borderRadius:["none","","full",en,Ie],borderSpacing:Re(),borderWidth:kt(),contrast:ye(),grayscale:ee(),hueRotate:ke(),invert:ee(),gap:Re(),gradientColorStops:[e],gradientColorStopPositions:[Rb,Rd],inset:ze(),margin:ze(),opacity:ye(),padding:Re(),saturate:ye(),scale:ye(),sepia:ee(),skew:ke(),space:Re(),translate:Re()},classGroups:{aspect:[{aspect:["auto","square","video",Ie]}],container:["container"],columns:[{columns:[en]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Cr(),[Ie])}],overflow:[{overflow:be()}],"overflow-x":[{"overflow-x":be()}],"overflow-y":[{"overflow-y":be()}],overscroll:[{overscroll:Be()}],"overscroll-x":[{"overscroll-x":Be()}],"overscroll-y":[{"overscroll-y":Be()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[Y]}],"inset-x":[{"inset-x":[Y]}],"inset-y":[{"inset-y":[Y]}],start:[{start:[Y]}],end:[{end:[Y]}],top:[{top:[Y]}],right:[{right:[Y]}],bottom:[{bottom:[Y]}],left:[{left:[Y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ji]}],basis:[{basis:ze()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ie]}],grow:[{grow:ee()}],shrink:[{shrink:ee()}],order:[{order:["first","last","none",Ji]}],"grid-cols":[{"grid-cols":[ea]}],"col-start-end":[{col:["auto",{span:["full",Ji]},Ie]}],"col-start":[{"col-start":Gt()}],"col-end":[{"col-end":Gt()}],"grid-rows":[{"grid-rows":[ea]}],"row-start-end":[{row:["auto",{span:[Ji]},Ie]}],"row-start":[{"row-start":Gt()}],"row-end":[{"row-end":Gt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ie]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ie]}],gap:[{gap:[B]}],"gap-x":[{"gap-x":[B]}],"gap-y":[{"gap-y":[B]}],"justify-content":[{justify:["normal"].concat(ae())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(ae(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(ae(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[$e]}],mx:[{mx:[$e]}],my:[{my:[$e]}],ms:[{ms:[$e]}],me:[{me:[$e]}],mt:[{mt:[$e]}],mr:[{mr:[$e]}],mb:[{mb:[$e]}],ml:[{ml:[$e]}],"space-x":[{"space-x":[ue]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ue]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",Ie,r]}],"min-w":[{"min-w":["min","max","fit",Ie,hr]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[en]},en,Ie]}],h:[{h:[Ie,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Ie,hr]}],"max-h":[{"max-h":[Ie,r,"min","max","fit"]}],"font-size":[{text:["base",en,Rd]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ss]}],"font-family":[{font:[ea]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ie]}],"line-clamp":[{"line-clamp":["none",Dn,Ss]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ie,hr]}],"list-image":[{"list-image":["none",Ie]}],"list-style-type":[{list:["none","disc","decimal",Ie]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(St(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",hr]}],"underline-offset":[{"underline-offset":["auto",Ie,hr]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:Re()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ie]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ie]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Cr(),[Ib])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Cb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nb]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[G]}],"gradient-via-pos":[{via:[G]}],"gradient-to-pos":[{to:[G]}],"gradient-from":[{from:[q]}],"gradient-via":[{via:[q]}],"gradient-to":[{to:[q]}],rounded:[{rounded:[f]}],"rounded-s":[{"rounded-s":[f]}],"rounded-e":[{"rounded-e":[f]}],"rounded-t":[{"rounded-t":[f]}],"rounded-r":[{"rounded-r":[f]}],"rounded-b":[{"rounded-b":[f]}],"rounded-l":[{"rounded-l":[f]}],"rounded-ss":[{"rounded-ss":[f]}],"rounded-se":[{"rounded-se":[f]}],"rounded-ee":[{"rounded-ee":[f]}],"rounded-es":[{"rounded-es":[f]}],"rounded-tl":[{"rounded-tl":[f]}],"rounded-tr":[{"rounded-tr":[f]}],"rounded-br":[{"rounded-br":[f]}],"rounded-bl":[{"rounded-bl":[f]}],"border-w":[{border:[b]}],"border-w-x":[{"border-x":[b]}],"border-w-y":[{"border-y":[b]}],"border-w-s":[{"border-s":[b]}],"border-w-e":[{"border-e":[b]}],"border-w-t":[{"border-t":[b]}],"border-w-r":[{"border-r":[b]}],"border-w-b":[{"border-b":[b]}],"border-w-l":[{"border-l":[b]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[].concat(St(),["hidden"])}],"divide-x":[{"divide-x":[b]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[b]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:St()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:[""].concat(St())}],"outline-offset":[{"outline-offset":[Ie,hr]}],"outline-w":[{outline:[hr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:kt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[hr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",en,Ob]}],"shadow-color":[{shadow:[ea]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":Ht()}],"bg-blend":[{"bg-blend":Ht()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[s]}],contrast:[{contrast:[_]}],"drop-shadow":[{"drop-shadow":["","none",en,Ie]}],grayscale:[{grayscale:[N]}],"hue-rotate":[{"hue-rotate":[A]}],invert:[{invert:[D]}],saturate:[{saturate:[P]}],sepia:[{sepia:[ie]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[_]}],"backdrop-grayscale":[{"backdrop-grayscale":[N]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[A]}],"backdrop-invert":[{"backdrop-invert":[D]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[ie]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[g]}],"border-spacing-x":[{"border-spacing-x":[g]}],"border-spacing-y":[{"border-spacing-y":[g]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ie]}],duration:[{duration:ke()}],ease:[{ease:["linear","in","out","in-out",Ie]}],delay:[{delay:ke()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ie]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[K]}],"scale-x":[{"scale-x":[K]}],"scale-y":[{"scale-y":[K]}],rotate:[{rotate:[Ji,Ie]}],"translate-x":[{"translate-x":[H]}],"translate-y":[{"translate-y":[H]}],"skew-x":[{"skew-x":[te]}],"skew-y":[{"skew-y":[te]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ie]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ie]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Re()}],"scroll-mx":[{"scroll-mx":Re()}],"scroll-my":[{"scroll-my":Re()}],"scroll-ms":[{"scroll-ms":Re()}],"scroll-me":[{"scroll-me":Re()}],"scroll-mt":[{"scroll-mt":Re()}],"scroll-mr":[{"scroll-mr":Re()}],"scroll-mb":[{"scroll-mb":Re()}],"scroll-ml":[{"scroll-ml":Re()}],"scroll-p":[{"scroll-p":Re()}],"scroll-px":[{"scroll-px":Re()}],"scroll-py":[{"scroll-py":Re()}],"scroll-ps":[{"scroll-ps":Re()}],"scroll-pe":[{"scroll-pe":Re()}],"scroll-pt":[{"scroll-pt":Re()}],"scroll-pr":[{"scroll-pr":Re()}],"scroll-pb":[{"scroll-pb":Re()}],"scroll-pl":[{"scroll-pl":Re()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ie]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[hr,Ss]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Db=bb(Bb);function it(...e){return Db(db(e))}const Lb="modulepreload",jb=function(e){return"/"+e},Dv={},u_=function(r,i,s){if(!i||i.length===0)return r();const c=document.getElementsByTagName("link");return Promise.all(i.map(f=>{if(f=jb(f),f in Dv)return;Dv[f]=!0;const g=f.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(!!s)for(let A=c.length-1;A>=0;A--){const D=c[A];if(D.href===f&&(!g||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${b}`))return;const N=document.createElement("link");if(N.rel=g?"stylesheet":Lb,g||(N.as="script",N.crossOrigin=""),N.href=f,document.head.appendChild(N),g)return new Promise((A,D)=>{N.addEventListener("load",A),N.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>r()).catch(f=>{const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f})};function ei(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var d_={exports:{}};(function(e,r){var i=(()=>{var s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,b=(t=>typeof ei<"u"?ei:typeof Proxy<"u"?new Proxy(t,{get:(n,a)=>(typeof ei<"u"?ei:n)[a]}):t)(function(t){if(typeof ei<"u")return ei.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),_=(t,n)=>()=>(t&&(n=t(t=0)),n),N=(t,n)=>{for(var a in n)s(t,a,{get:n[a],enumerable:!0})},A=(t,n,a,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of f(n))!g.call(t,l)&&l!==a&&s(t,l,{get:()=>n[l],enumerable:!(o=c(n,l))||o.enumerable});return t},D=t=>A(s({},"__esModule",{value:!0}),t),B,q,G,Y,$e,M=_(()=>{B=new Map,q=[],G=(t,n,a)=>{if(n&&typeof n.init=="function"&&typeof n.createInferenceSessionHandler=="function"){let o=B.get(t);if(o===void 0)B.set(t,{backend:n,priority:a});else{if(o.priority>a)return;if(o.priority===a&&o.backend!==n)throw new Error(`cannot register backend "${t}" using priority ${a}`)}if(a>=0){let l=q.indexOf(t);l!==-1&&q.splice(l,1);for(let u=0;u<q.length;u++)if(B.get(q[u]).priority<=a){q.splice(u,0,t);return}q.push(t)}return}throw new TypeError("not a valid backend")},Y=async t=>{let n=B.get(t);if(!n)return"backend not found.";if(n.initialized)return n.backend;if(n.aborted)return n.error;{let a=!!n.initPromise;try{return a||(n.initPromise=n.backend.init(t)),await n.initPromise,n.initialized=!0,n.backend}catch(o){return a||(n.error=`${o}`,n.aborted=!0),n.error}finally{delete n.initPromise}}},$e=async t=>{let n=t.executionProviders||[],a=n.map(h=>typeof h=="string"?h:h.name),o=a.length===0?q:a,l,u=[],d=new Set;for(let h of o){let m=await Y(h);typeof m=="string"?u.push({name:h,err:m}):(l||(l=m),l===m&&d.add(h))}if(!l)throw new Error(`no available backend found. ERR: ${u.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:m}of u)a.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${m}`);let p=n.filter(h=>d.has(typeof h=="string"?h:h.name));return[l,new Proxy(t,{get:(h,m)=>m==="executionProviders"?p:Reflect.get(h,m)})]}}),R=_(()=>{M()}),P,K=_(()=>{P="1.26.0"}),ie,te,ue=_(()=>{K(),ie="warning",te={wasm:{},webgl:{},webgpu:{},versions:{common:P},set logLevel(t){if(t!==void 0){if(typeof t!="string"||["verbose","info","warning","error","fatal"].indexOf(t)===-1)throw new Error(`Unsupported logging level: ${t}`);ie=t}},get logLevel(){return ie}},Object.defineProperty(te,"logLevel",{enumerable:!0})}),H,Be=_(()=>{ue(),H=te}),be,ze,Re=_(()=>{be=(t,n)=>{let a=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);a.width=t.dims[3],a.height=t.dims[2];let o=a.getContext("2d");if(o!=null){let l,u;(n==null?void 0:n.tensorLayout)!==void 0&&n.tensorLayout==="NHWC"?(l=t.dims[2],u=t.dims[3]):(l=t.dims[3],u=t.dims[2]);let d=(n==null?void 0:n.format)!==void 0?n.format:"RGB",p=n==null?void 0:n.norm,h,m;p===void 0||p.mean===void 0?h=[255,255,255,255]:typeof p.mean=="number"?h=[p.mean,p.mean,p.mean,p.mean]:(h=[p.mean[0],p.mean[1],p.mean[2],0],p.mean[3]!==void 0&&(h[3]=p.mean[3])),p===void 0||p.bias===void 0?m=[0,0,0,0]:typeof p.bias=="number"?m=[p.bias,p.bias,p.bias,p.bias]:(m=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(m[3]=p.bias[3]));let y=u*l,v=0,w=y,x=y*2,$=-1;d==="RGBA"?(v=0,w=y,x=y*2,$=y*3):d==="RGB"?(v=0,w=y,x=y*2):d==="RBG"&&(v=0,x=y,w=y*2);for(let S=0;S<u;S++)for(let z=0;z<l;z++){let E=(t.data[v++]-m[0])*h[0],k=(t.data[w++]-m[1])*h[1],I=(t.data[x++]-m[2])*h[2],C=$===-1?255:(t.data[$++]-m[3])*h[3];o.fillStyle="rgba("+E+","+k+","+I+","+C+")",o.fillRect(z,S,1,1)}if("toDataURL"in a)return a.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ze=(t,n)=>{let a=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(a!=null){let l,u,d;(n==null?void 0:n.tensorLayout)!==void 0&&n.tensorLayout==="NHWC"?(l=t.dims[2],u=t.dims[1],d=t.dims[3]):(l=t.dims[3],u=t.dims[2],d=t.dims[1]);let p=n!==void 0&&n.format!==void 0?n.format:"RGB",h=n==null?void 0:n.norm,m,y;h===void 0||h.mean===void 0?m=[255,255,255,255]:typeof h.mean=="number"?m=[h.mean,h.mean,h.mean,h.mean]:(m=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(m[3]=h.mean[3])),h===void 0||h.bias===void 0?y=[0,0,0,0]:typeof h.bias=="number"?y=[h.bias,h.bias,h.bias,h.bias]:(y=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(y[3]=h.bias[3]));let v=u*l;if(n!==void 0&&(n.format!==void 0&&d===4&&n.format!=="RGBA"||d===3&&n.format!=="RGB"&&n.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let w=4,x=0,$=1,S=2,z=3,E=0,k=v,I=v*2,C=-1;p==="RGBA"?(E=0,k=v,I=v*2,C=v*3):p==="RGB"?(E=0,k=v,I=v*2):p==="RBG"&&(E=0,I=v,k=v*2),o=a.createImageData(l,u);for(let O=0;O<u*l;x+=w,$+=w,S+=w,z+=w,O++)o.data[x]=(t.data[E++]-y[0])*m[0],o.data[$]=(t.data[k++]-y[1])*m[1],o.data[S]=(t.data[I++]-y[2])*m[2],o.data[z]=C===-1?255:(t.data[C++]-y[3])*m[3]}else throw new Error("Can not access image data");return o}}),kt,Gt,Cr,St,Ht,ae,ee=_(()=>{nt(),kt=(t,n)=>{if(t===void 0)throw new Error("Image buffer must be defined");if(n.height===void 0||n.width===void 0)throw new Error("Image height and width must be defined");if(n.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:a,width:o}=n,l=n.norm??{mean:255,bias:0},u,d;typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:u=[l.mean[0],l.mean[1],l.mean[2],l.mean[3]??255],typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:d=[l.bias[0],l.bias[1],l.bias[2],l.bias[3]??0];let p=n.format!==void 0?n.format:"RGBA",h=n.tensorFormat!==void 0&&n.tensorFormat!==void 0?n.tensorFormat:"RGB",m=a*o,y=h==="RGBA"?new Float32Array(m*4):new Float32Array(m*3),v=4,w=0,x=1,$=2,S=3,z=0,E=m,k=m*2,I=-1;p==="RGB"&&(v=3,w=0,x=1,$=2,S=-1),h==="RGBA"?I=m*3:h==="RBG"?(z=0,k=m,E=m*2):h==="BGR"&&(k=0,E=m,z=m*2);for(let C=0;C<m;C++,w+=v,$+=v,x+=v,S+=v)y[z++]=(t[w]+d[0])/u[0],y[E++]=(t[x]+d[1])/u[1],y[k++]=(t[$]+d[2])/u[2],I!==-1&&S!==-1&&(y[I++]=(t[S]+d[3])/u[3]);return h==="RGBA"?new vt("float32",y,[1,4,a,o]):new vt("float32",y,[1,3,a,o])},Gt=async(t,n)=>{let a=typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement,o=typeof ImageData<"u"&&t instanceof ImageData,l=typeof ImageBitmap<"u"&&t instanceof ImageBitmap,u=typeof t=="string",d,p=n??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},m=y=>typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||y instanceof OffscreenCanvas?y.getContext("2d"):null;if(a){let y=h();y.width=t.width,y.height=t.height;let v=m(y);if(v!=null){let w=t.height,x=t.width;if(n!==void 0&&n.resizedHeight!==void 0&&n.resizedWidth!==void 0&&(w=n.resizedHeight,x=n.resizedWidth),n!==void 0){if(p=n,n.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");p.tensorFormat="RGBA",p.height=w,p.width=x}else p.tensorFormat="RGBA",p.height=w,p.width=x;v.drawImage(t,0,0),d=v.getImageData(0,0,x,w).data}else throw new Error("Can not access image data")}else if(o){let y,v;if(n!==void 0&&n.resizedWidth!==void 0&&n.resizedHeight!==void 0?(y=n.resizedHeight,v=n.resizedWidth):(y=t.height,v=t.width),n!==void 0&&(p=n),p.format="RGBA",p.height=y,p.width=v,n!==void 0){let w=h();w.width=v,w.height=y;let x=m(w);if(x!=null)x.putImageData(t,0,0),d=x.getImageData(0,0,v,y).data;else throw new Error("Can not access image data")}else d=t.data}else if(l){if(n===void 0)throw new Error("Please provide image config with format for Imagebitmap");let y=h();y.width=t.width,y.height=t.height;let v=m(y);if(v!=null){let w=t.height,x=t.width;return v.drawImage(t,0,0,x,w),d=v.getImageData(0,0,x,w).data,p.height=w,p.width=x,kt(d,p)}else throw new Error("Can not access image data")}else{if(u)return new Promise((y,v)=>{let w=h(),x=m(w);if(!t||!x)return v();let $=new Image;$.crossOrigin="Anonymous",$.src=t,$.onload=()=>{w.width=$.width,w.height=$.height,x.drawImage($,0,0,w.width,w.height);let S=x.getImageData(0,0,w.width,w.height);p.height=w.height,p.width=w.width,y(kt(S.data,p))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(d!==void 0)return kt(d,p);throw new Error("Input data provided is not supported - aborted tensor creation")},Cr=(t,n)=>{let{width:a,height:o,download:l,dispose:u}=n,d=[1,o,a,4];return new vt({location:"texture",type:"float32",texture:t,dims:d,download:l,dispose:u})},St=(t,n)=>{let{dataType:a,dims:o,download:l,dispose:u}=n;return new vt({location:"gpu-buffer",type:a??"float32",gpuBuffer:t,dims:o,download:l,dispose:u})},Ht=(t,n)=>{let{dataType:a,dims:o,download:l,dispose:u}=n;return new vt({location:"ml-tensor",type:a??"float32",mlTensor:t,dims:o,download:l,dispose:u})},ae=(t,n,a)=>new vt({location:"cpu-pinned",type:t,data:n,dims:a??[n.length]})}),X,ye,ke,Ue,Et=_(()=>{X=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ye=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ke=!1,Ue=()=>{if(!ke){ke=!0;let t=typeof BigInt64Array<"u"&&BigInt64Array.from,n=typeof BigUint64Array<"u"&&BigUint64Array.from,a=globalThis.Float16Array,o=typeof a<"u"&&a.from;t&&(X.set("int64",BigInt64Array),ye.set(BigInt64Array,"int64")),n&&(X.set("uint64",BigUint64Array),ye.set(BigUint64Array,"uint64")),o?(X.set("float16",a),ye.set(a,"float16")):X.set("float16",Uint16Array)}}}),xr,Kt,$r=_(()=>{nt(),xr=t=>{let n=1;for(let a=0;a<t.length;a++){let o=t[a];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${a}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${a}] must be a non-negative integer, got: ${o}`);n*=o}return n},Kt=(t,n)=>{switch(t.location){case"cpu":return new vt(t.type,t.data,n);case"cpu-pinned":return new vt({location:"cpu-pinned",data:t.data,type:t.type,dims:n});case"texture":return new vt({location:"texture",texture:t.texture,type:t.type,dims:n});case"gpu-buffer":return new vt({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:n});case"ml-tensor":return new vt({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:n});default:throw new Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),vt,nt=_(()=>{Re(),ee(),Et(),$r(),vt=class{constructor(t,n,a){Ue();let o,l;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,o=t.type,l=t.dims,t.location){case"cpu-pinned":{let d=X.get(o);if(!d)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(t.data instanceof d))throw new TypeError(`buffer should be of type ${d.name}`);this.cpuData=t.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let d,p;if(typeof t=="string")if(o=t,p=a,t==="string"){if(!Array.isArray(n))throw new TypeError("A string tensor's data must be a string array.");d=n}else{let h=X.get(t);if(h===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(n)){if(t==="float16"&&h===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${h.name} as data.`);t==="uint64"||t==="int64"?d=h.from(n,BigInt):d=h.from(n)}else if(n instanceof h)d=n;else if(n instanceof Uint8ClampedArray)if(t==="uint8")d=Uint8Array.from(n);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&n instanceof Uint16Array&&h!==Uint16Array)d=new globalThis.Float16Array(n.buffer,n.byteOffset,n.length);else throw new TypeError(`A ${o} tensor's data must be type of ${h}`)}else if(p=n,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof t[0];if(h==="string")o="string",d=t;else if(h==="boolean")o="bool",d=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${h}.`)}else if(t instanceof Uint8ClampedArray)o="uint8",d=Uint8Array.from(t);else{let h=ye.get(t.constructor);if(h===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);o=h,d=t}if(p===void 0)p=[d.length];else if(!Array.isArray(p))throw new TypeError("A tensor's dims must be a number array");l=p,this.cpuData=d,this.dataLocation="cpu"}let u=xr(l);if(this.cpuData&&u!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=l,this.size=u}static async fromImage(t,n){return Gt(t,n)}static fromTexture(t,n){return Cr(t,n)}static fromGpuBuffer(t,n){return St(t,n)}static fromMLTensor(t,n){return Ht(t,n)}static fromPinnedBuffer(t,n,a){return ae(t,n,a)}toDataURL(t){return be(this,t)}toImageData(t){return ze(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let n=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=n,t&&this.disposer&&(this.disposer(),this.disposer=void 0),n}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Kt(this,t)}}}),nr,Cc=_(()=>{nt(),nr=vt}),Ii,Co,ir,Qt,qr,Gr,Ic=_(()=>{ue(),Ii=(t,n)=>{(typeof te.trace>"u"?!te.wasm.trace:!te.trace)||console.timeStamp(`${t}::ORT::${n}`)},Co=(t,n)=>{var l;let a=((l=new Error().stack)==null?void 0:l.split(/\r\n|\r|\n/g))||[],o=!1;for(let u=0;u<a.length;u++){if(o&&!a[u].includes("TRACE_FUNC")){let d=`FUNC_${t}::${a[u].trim().split(" ")[1]}`;n&&(d+=`::${n}`),Ii("CPU",d);return}a[u].includes("TRACE_FUNC")&&(o=!0)}},ir=t=>{(typeof te.trace>"u"?!te.wasm.trace:!te.trace)||Co("BEGIN",t)},Qt=t=>{(typeof te.trace>"u"?!te.wasm.trace:!te.trace)||Co("END",t)},qr=t=>{(typeof te.trace>"u"?!te.wasm.trace:!te.trace)||console.time(`ORT::${t}`)},Gr=t=>{(typeof te.trace>"u"?!te.wasm.trace:!te.trace)||console.timeEnd(`ORT::${t}`)}}),Nc,y_=_(()=>{M(),Cc(),Ic(),Nc=class c_{constructor(n){this.handler=n}async run(n,a,o){ir(),qr("InferenceSession.run");let l={},u={};if(typeof n!="object"||n===null||n instanceof nr||Array.isArray(n))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof nr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let m of a){if(typeof m!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(m)===-1)throw new RangeError(`'fetches' contains invalid output name: ${m}.`);l[m]=null}if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let m=!1,y=Object.getOwnPropertyNames(a);for(let v of this.outputNames)if(y.indexOf(v)!==-1){let w=a[v];(w===null||w instanceof nr)&&(m=!0,d=!1,l[v]=w)}if(m){if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else u=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let m of this.inputNames)if(typeof n[m]>"u")throw new Error(`input '${m}' is missing in 'feeds'.`);if(d)for(let m of this.outputNames)l[m]=null;let p=await this.handler.run(n,l,u),h={};for(let m in p)if(Object.hasOwnProperty.call(p,m)){let y=p[m];y instanceof nr?h[m]=y:h[m]=new nr(y.type,y.data,y.dims)}return Gr("InferenceSession.run"),Qt(),h}async release(){return this.handler.dispose()}static async create(n,a,o,l){ir(),qr("InferenceSession.create");let u,d={};if(typeof n=="string"){if(u=n,typeof a=="object"&&a!==null)d=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(n instanceof Uint8Array){if(u=n,typeof a=="object"&&a!==null)d=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(n instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer){let y=n,v=0,w=n.byteLength;if(typeof a=="object"&&a!==null)d=a;else if(typeof a=="number"){if(v=a,!Number.isSafeInteger(v))throw new RangeError("'byteOffset' must be an integer.");if(v<0||v>=y.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${y.byteLength}).`);if(w=n.byteLength-v,typeof o=="number"){if(w=o,!Number.isSafeInteger(w))throw new RangeError("'byteLength' must be an integer.");if(w<=0||v+w>y.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${y.byteLength-v}].`);if(typeof l=="object"&&l!==null)d=l;else if(typeof l<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof a<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(y,v,w)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[p,h]=await $e(d),m=await p.createInferenceSessionHandler(u,h);return Gr("InferenceSession.create"),Qt(),new c_(m)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Io,v_=_(()=>{y_(),Io=Nc}),w_=_(()=>{}),__=_(()=>{}),x_=_(()=>{}),$_=_(()=>{}),Rc={};N(Rc,{InferenceSession:()=>Io,TRACE:()=>Ii,TRACE_EVENT_BEGIN:()=>qr,TRACE_EVENT_END:()=>Gr,TRACE_FUNC_BEGIN:()=>ir,TRACE_FUNC_END:()=>Qt,Tensor:()=>nr,env:()=>H,registerBackend:()=>G});var Xt=_(()=>{R(),Be(),v_(),Cc(),w_(),__(),Ic(),x_(),$_()}),No=_(()=>{}),Oc={};N(Oc,{default:()=>Ac});var Ro,Oo,Ac,b_=_(()=>{var t;cy(),xn(),Do(),Ro="ort-wasm-proxy-worker",Oo=((t=globalThis.self)==null?void 0:t.name)===Ro,Oo&&(self.onmessage=n=>{let{type:a,in:o}=n.data;try{switch(a){case"init-wasm":Uo(o.wasm).then(()=>{Yl(o).then(()=>{postMessage({type:a})},l=>{postMessage({type:a,err:l})})},l=>{postMessage({type:a,err:l})});break;case"init-ep":{let{epName:l,env:u}=o;Jl(u,l).then(()=>{postMessage({type:a})},d=>{postMessage({type:a,err:d})});break}case"copy-from":{let{buffer:l}=o,u=as(l);postMessage({type:a,out:u});break}case"create":{let{model:l,options:u}=o;tu(l,u).then(d=>{postMessage({type:a,out:d})},d=>{postMessage({type:a,err:d})});break}case"release":ru(o),postMessage({type:a});break;case"run":{let{sessionId:l,inputIndices:u,inputs:d,outputIndices:p,options:h}=o;iu(l,u,d,p,new Array(p.length).fill(null),h).then(m=>{m.some(y=>y[3]!=="cpu")?postMessage({type:a,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:a,out:m},su([...d,...m]))},m=>{postMessage({type:a,err:m})});break}case"end-profiling":au(o),postMessage({type:a});break;default:}}catch(l){postMessage({type:a,err:l})}}),Ac=Oo?null:n=>new Worker(n??Dt,{type:"classic",name:Ro})}),Mc,Pc,Dt,Ao,Ua,Bc,Dc,Mo,Lc,Po,jc,Bo,Uc,Do=_(()=>{No(),Mc=typeof location>"u"?void 0:location.origin,Pc=()=>{var t,n;return typeof document<"u"?(t=document.currentScript)==null?void 0:t.src:typeof self<"u"?(n=self.location)==null?void 0:n.href:void 0},Dt=Pc(),Ao=()=>{if(Dt&&!Dt.startsWith("blob:"))return Dt.substring(0,Dt.lastIndexOf("/")+1)},Ua=(t,n)=>{try{let a=n??Dt;return(a?new URL(t,a):new URL(t)).origin===Mc}catch{return!1}},Bc=(t,n)=>{let a=n??Dt;try{return(a?new URL(t,a):new URL(t)).href}catch{return}},Dc=(t,n)=>`${n??"./"}${t}`,Mo=async t=>{let n=await(await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(n)},Lc=async t=>(await u_(()=>import(t),[])).default,Po=(b_(),D(Oc)).default,jc=async()=>{if(!Dt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ua(Dt))return[void 0,Po()];let t=await Mo(Dt);return[t,Po(t)]},Bo=void 0,Uc=async(t,n,a,o)=>{let l=Bo&&!(t||n);if(l)if(Dt)l=Ua(Dt)||o&&!a;else if(o&&!a)l=!0;else throw new Error("cannot determine the script source URL.");if(l)return[void 0,Bo];{let u="ort-wasm-simd-threaded.jsep.mjs",d=t??Bc(u,n),p=a&&d&&!Ua(d,n),h=p?await Mo(d):d??Dc(u,n);return[p?h:void 0,await Lc(h)]}}}),Lo,Va,Ni,jo,Vc,Wc,Fc,Uo,je,xn=_(()=>{Do(),Va=!1,Ni=!1,jo=!1,Vc=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Wc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Fc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Uo=async t=>{if(Va)return Promise.resolve();if(Ni)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(jo)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ni=!0;let n=t.initTimeout,a=t.numThreads;if(t.simd!==!1){if(t.simd==="relaxed"){if(!Fc())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Wc())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let o=Vc();a>1&&!o&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+a+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=a=1);let l=t.wasmPaths,u=typeof l=="string"?l:void 0,d=l==null?void 0:l.mjs,p=(d==null?void 0:d.href)??d,h=l==null?void 0:l.wasm,m=(h==null?void 0:h.href)??h,y=t.wasmBinary,[v,w]=await Uc(p,u,a>1,!!y||!!m),x=!1,$=[];if(n>0&&$.push(new Promise(S=>{setTimeout(()=>{x=!0,S()},n)})),$.push(new Promise((S,z)=>{let E={numThreads:a};if(y)E.wasmBinary=y,E.locateFile=k=>k;else if(m||u)E.locateFile=k=>m??u+k;else if(p&&p.indexOf("blob:")!==0)E.locateFile=k=>new URL(k,p).href;else if(v){let k=Ao();k&&(E.locateFile=I=>k+I)}w(E).then(k=>{Ni=!1,Va=!0,Lo=k,S(),v&&URL.revokeObjectURL(v)},k=>{Ni=!1,jo=!0,z(k)})})),await Promise.race($),x)throw new Error(`WebAssembly backend initializing failed due to timeout: ${n}ms`)},je=()=>{if(Va&&Lo)return Lo;throw new Error("WebAssembly is not initialized yet.")}}),ar,Wa,Pe,Vo=_(()=>{xn(),ar=(t,n)=>{let a=je(),o=a.lengthBytesUTF8(t)+1,l=a._malloc(o);return a.stringToUTF8(t,l,o),n.push(l),l},Wa=(t,n,a,o)=>{if(typeof t=="object"&&t!==null){if(a.has(t))throw new Error("Circular reference in options");a.add(t)}Object.entries(t).forEach(([l,u])=>{let d=n?n+l:l;if(typeof u=="object")Wa(u,d+".",a,o);else if(typeof u=="string"||typeof u=="number")o(d,u.toString());else if(typeof u=="boolean")o(d,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},Pe=t=>{let n=je(),a=n.stackSave();try{let o=n.PTR_SIZE,l=n.stackAlloc(2*o);n._OrtGetLastError(l,l+o);let u=Number(n.getValue(l,o===4?"i32":"i64")),d=n.getValue(l+o,"*"),p=d?n.UTF8ToString(d):"";throw new Error(`${t} ERROR_CODE: ${u}, ERROR_MESSAGE: ${p}`)}finally{n.stackRestore(a)}}}),qc,k_=_(()=>{xn(),Vo(),qc=t=>{let n=je(),a=0,o=[],l=t||{};try{if((t==null?void 0:t.logSeverityLevel)===void 0)l.logSeverityLevel=2;else if(typeof t.logSeverityLevel!="number"||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${t.logSeverityLevel}`);if((t==null?void 0:t.logVerbosityLevel)===void 0)l.logVerbosityLevel=0;else if(typeof t.logVerbosityLevel!="number"||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);(t==null?void 0:t.terminate)===void 0&&(l.terminate=!1);let u=0;return(t==null?void 0:t.tag)!==void 0&&(u=ar(t.tag,o)),a=n._OrtCreateRunOptions(l.logSeverityLevel,l.logVerbosityLevel,!!l.terminate,u),a===0&&Pe("Can't create run options."),(t==null?void 0:t.extra)!==void 0&&Wa(t.extra,"",new WeakSet,(d,p)=>{let h=ar(d,o),m=ar(p,o);n._OrtAddRunConfigEntry(a,h,m)!==0&&Pe(`Can't set a run config entry: ${d} - ${p}.`)}),[a,o]}catch(u){throw a!==0&&n._OrtReleaseRunOptions(a),o.forEach(d=>n._free(d)),u}}}),Gc,Hc,Kc,$n,Qc,Xc,S_=_(()=>{xn(),Vo(),Gc=t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${t}`)}},Hc=t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${t}`)}},Kc=t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let n=t.extra.session;n.use_ort_model_bytes_directly||(n.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(a=>(typeof a=="string"?a:a.name)==="webgpu")&&(t.enableMemPattern=!1)},$n=(t,n,a,o)=>{let l=ar(n,o),u=ar(a,o);je()._OrtAddSessionConfigEntry(t,l,u)!==0&&Pe(`Can't set a session config entry: ${n} - ${a}.`)},Qc=async(t,n,a)=>{let o=n.executionProviders;for(let l of o){let u=typeof l=="string"?l:l.name,d=[];switch(u){case"webnn":if(u="WEBNN",$n(t,"session.disable_quant_qdq","1",a),$n(t,"session.disable_qdq_constant_folding","1",a),typeof l!="string"){let v=l==null?void 0:l.deviceType;v&&$n(t,"deviceType",v,a)}break;case"webgpu":if(u="JS",typeof l!="string"){let v=l;if(v!=null&&v.preferredLayout){if(v.preferredLayout!=="NCHW"&&v.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${v.preferredLayout}`);$n(t,"preferredLayout",v.preferredLayout,a)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let p=ar(u,a),h=d.length,m=0,y=0;if(h>0){m=je()._malloc(h*je().PTR_SIZE),a.push(m),y=je()._malloc(h*je().PTR_SIZE),a.push(y);for(let v=0;v<h;v++)je().setValue(m+v*je().PTR_SIZE,d[v][0],"*"),je().setValue(y+v*je().PTR_SIZE,d[v][1],"*")}await je()._OrtAppendExecutionProvider(t,p,m,y,h)!==0&&Pe(`Can't append execution provider: ${u}.`)}},Xc=async t=>{let n=je(),a=0,o=[],l=t||{};Kc(l);try{let u=Gc(l.graphOptimizationLevel??"all"),d=Hc(l.executionMode??"sequential"),p=typeof l.logId=="string"?ar(l.logId,o):0,h=l.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log severity level is not valid: ${h}`);let m=l.logVerbosityLevel??0;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log verbosity level is not valid: ${m}`);let y=typeof l.optimizedModelFilePath=="string"?ar(l.optimizedModelFilePath,o):0;if(a=n._OrtCreateSessionOptions(u,!!l.enableCpuMemArena,!!l.enableMemPattern,d,!!l.enableProfiling,0,p,h,m,y),a===0&&Pe("Can't create session options."),l.executionProviders&&await Qc(a,l,o),l.enableGraphCapture!==void 0){if(typeof l.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${l.enableGraphCapture}`);$n(a,"enableGraphCapture",l.enableGraphCapture.toString(),o)}if(l.freeDimensionOverrides)for(let[v,w]of Object.entries(l.freeDimensionOverrides)){if(typeof v!="string")throw new Error(`free dimension override name must be a string: ${v}`);if(typeof w!="number"||!Number.isInteger(w)||w<0)throw new Error(`free dimension override value must be a non-negative integer: ${w}`);let x=ar(v,o);n._OrtAddFreeDimensionOverride(a,x,w)!==0&&Pe(`Can't set a free dimension override: ${v} - ${w}.`)}return l.extra!==void 0&&Wa(l.extra,"",new WeakSet,(v,w)=>{$n(a,v,w,o)}),[a,o]}catch(u){throw a!==0&&n._OrtReleaseSessionOptions(a)!==0&&Pe("Can't release session options."),o.forEach(d=>n._free(d)),u}}}),bn,Ir,kn,Fa,qa,Wo,Fo,qo,ve=_(()=>{bn=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${t}`)}},Ir=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${t}`)}},kn=(t,n)=>{let a=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],o=typeof n=="number"?n:n.reduce((l,u)=>l*u,1);return a>0?Math.ceil(o*a):void 0},Fa=t=>{switch(t){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${t}`)}},qa=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${t}`)}},Wo=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Fo=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint64"||t==="int8"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",qo=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${t}`)}}}),Go,Zc=_(()=>{No(),Go=async t=>{if(typeof t=="string"){let n=await fetch(t);if(!n.ok)throw new Error(`failed to load external data file: ${t}`);let a=n.headers.get("Content-Length"),o=a?parseInt(a,10):0;if(o<1073741824)return new Uint8Array(await n.arrayBuffer());{if(!n.body)throw new Error(`failed to load external data file: ${t}, no response body.`);let l=n.body.getReader(),u;try{u=new ArrayBuffer(o)}catch(p){if(p instanceof RangeError){let h=Math.ceil(o/65536);u=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw p}let d=0;for(;;){let{done:p,value:h}=await l.read();if(p)break;let m=h.byteLength;new Uint8Array(u,d,m).set(h),d+=m}return new Uint8Array(u,0,o)}}else return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t)}}),Yc,Jc,ep,tp,Ho,rp,Ee,Nr=_(()=>{ve(),Yc=["V","I","W","E","F"],Jc=(t,n)=>{console.log(`[${Yc[t]},${new Date().toISOString()}]${n}`)},Ho=(t,n)=>{ep=t,tp=n},rp=(t,n)=>{let a=qa(t),o=qa(ep);a>=o&&Jc(a,typeof n=="function"?n():n)},Ee=(...t)=>{tp&&rp(...t)}}),np,Qn,U,Ga,ip,ap,sp,_e=_(()=>{np=class{static calcMatMulShape(t,n){return t[1]!==n[0]?void 0:[t[0],n[1]]}},Qn=class{static calcShape(t,n,a=!1){let o=t.length,l=n.length;if(o===0)return n;if(l===0)return t;let u=Math.max(t.length,n.length),d=new Array(u);if(a){if(o<2||l<2)return;let p=np.calcMatMulShape([t[o-2],t[o-1]],[n[l-2],n[l-1]]);if(p===void 0)return;[d[u-2],d[u-1]]=p}for(let p=a?3:1;p<=u;p++){let h=o-p<0?1:t[o-p],m=l-p<0?1:n[l-p];if(h!==m&&h>1&&m>1)return;let y=Math.max(h,m);if(h&&m)d[u-p]=Math.max(h,m);else{if(y>1)return;d[u-p]=0}}return d}static isValidBroadcast(t,n){let a=t.length,o=n.length;if(a>o)return!1;for(let l=1;l<=a;l++)if(t[a-l]!==1&&t[a-l]!==n[o-l])return!1;return!0}},U=class js{static size(n){return js.getSizeFromDimensionRange(n,0,n.length)}static convertShape(n,a=4){let o=n.length;if(o===0)return[];let l=new Array(o),u=o-1;for(;u>=0;){if(n[u]%a===0){l[u]=n[u]/a;break}if(a%n[u]!==0)throw new Error("cannot convert shape");l[u]=1,a/=n[u],u--}for(u--;u>=0;u--)l[u]=n[u];return l}static sizeFromDimension(n,a){if(a<0||a>n.length)throw new Error(`invalid dimension of ${a} for sizeFromDimension as Tensor has ${n.length} dimensions.`);return js.getSizeFromDimensionRange(n,a,n.length)}static sizeToDimension(n,a){if(a<0||a>n.length)throw new Error(`invalid dimension of ${a} for sizeToDimension as Tensor has ${n.length} dimensions.`);return js.getSizeFromDimensionRange(n,0,a)}static getSizeFromDimensionRange(n,a,o){let l=1;for(let u=a;u<o;u++){if(n[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");l*=Number(n[u])}return l}static computeStrides(n){let a=n.length;if(a===0)return[];if(a===1)return[1];let o=new Array(a);o[a-1]=1,o[a-2]=n[a-1];for(let l=a-3;l>=0;--l)o[l]=o[l+1]*n[l+1];return o}static normalizeAxis(n,a){if(n<-a&&n>=a)throw new Error("unsupported axis for this operation.");return n<0?n+a:n}static normalizeAxes(n,a){return n.map(o=>this.normalizeAxis(o,a??n.length))}static sortBasedOnPerm(n,a){return a?a.map(o=>n[o]):n.slice().reverse()}static padShape(n,a){let o=n.length;return n.map((l,u)=>l+a[u]+a[u+o])}static areEqual(n,a){return n.length!==a.length?!1:n.every((o,l)=>o===a[l])}},Ga=class sa{static adjustPoolAttributes(n,a,o,l,u,d){if(!n&&o.length!==a.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(n)for(let p=0;p<a.length-2;p++)p>=o.length?o.push(a[p+2]):o[p]=a[p+2];for(let p=0;p<o.length;p++)if(p<l.length){if(l[p]<0)throw new Error("strides should be greater than or equal to 1")}else l.push(1);for(let p=0;p<o.length;p++)if(p<u.length){if(u[p]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let p=0;p<o.length*2;p++)if(p<d.length){if(d[p]<0)throw new Error("pad should be greater than or equal to 1")}else d.push(0);for(let p=0;p<o.length;p++){if(o[p]<=0)throw new Error("kernel shapes need to be greater than 0");if(d[p]>=o[p]||d[p+o.length]>=o[p])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(n,a,o,l,u,d,p){if(p){if(u.length!==2*(n.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(a.length!==n.length-2)throw new Error("length of strides should be the length of data dimensions");if(l.length!==n.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let h=0;h<n.length-2;h++)sa.adjustPadAndReturnShape(n[h+(d?1:2)],a[h],o[h],l[h],u,h,h+n.length-2,p)}}static computePoolOutputShape(n,a,o,l,u,d,p){if(a.length<=0)throw new Error("input shape must be of size greater than 0");let h=[a[0],a[1]];return sa.computeShapeHelper(n,a,h,o,l,u,d,p),h}static computeConvOutputShape(n,a,o,l,u,d,p){if(n.length<=0||a.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let h=[n[0],a[0]];return sa.computeShapeHelper(!1,n,h,o,l,u,d,p),h}static computeShapeHelper(n,a,o,l,u,d,p,h){if(n)for(let m=0;m<a.length-2;m++)o.push(1);else for(let m=0;m<a.length-2;m++)o.push(sa.adjustPadAndReturnShape(a[m+2],l[m],u[m],d[m],p,m,m+a.length-2,h))}static adjustPadAndReturnShape(n,a,o,l,u,d,p,h){let m=o*(l-1)+1;if(h&&h!=="NOTSET")switch(h){case"VALID":return u[d]=0,u[p]=0,Math.floor((n-m)/a+1);case"SAME_LOWER":case"SAME_UPPER":if(o!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let y=((n+a-1)/a-1)*a+l-n;return u[d]=Math.floor(h==="SAME_LOWER"?(y+1)/2:y/2),u[p]=y-u[d],Math.floor((n+y-l)/a+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((n+u[d]+u[p]-m)/a+1)}},ip=class{static getShapeOfGemmResult(t,n,a,o,l){if(t.length!==2||a.length!==2)throw new Error("shape need to be of size 2");let u,d,p;n?(u=t[1],d=t[0]):(u=t[0],d=t[1]);let h=-1;if(o?(p=a[0],h=1):(p=a[1],h=0),a[h]!==d)throw new Error("dimension mismatch");if(u<=0||p<=0||d<=0)throw new Error("invalid shape specified");if(l&&!Qn.isValidBroadcast(l,[u,p]))throw new Error("gemm: invalid bias shape for broadcast");return[u,p,d]}},ap=-34028234663852886e22,sp=34028234663852886e22}),Ko,op=_(()=>{ve(),Ko=(t,n)=>new(Fa(n))(t)}),Qo,Xo,Zo,lp,Yo,up,Jo,el,tl,dp,cp,E_=_(()=>{ve(),Nr(),Qo=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Xo=(t,n)=>{if(n==="int32")return t;let a=Qo.get(n);if(!a)throw new Error(`WebNN backend does not support data type: ${n}`);let o=a/8;if(t.byteLength%o!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${o}.`);let l=t.byteLength/o,u=new(Fa(n))(t.buffer,t.byteOffset,l);switch(n){case"int64":case"uint64":{let d=new Int32Array(l);for(let p=0;p<l;p++){let h=u[p];if(h>2147483647n||h<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");d[p]=Number(h)}return new Uint8Array(d.buffer)}case"int8":case"uint8":case"uint32":{if(n==="uint32"&&u.some(p=>p>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let d=Int32Array.from(u,Number);return new Uint8Array(d.buffer)}default:throw new Error(`Unsupported data conversion from ${n} to 'int32'`)}},Zo=(t,n)=>{if(n==="int32")return t;if(t.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let a=t.byteLength/4,o=new Int32Array(t.buffer,t.byteOffset,a);switch(n){case"int64":{let l=BigInt64Array.from(o,BigInt);return new Uint8Array(l.buffer)}case"uint64":{if(o.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let l=BigUint64Array.from(o,BigInt);return new Uint8Array(l.buffer)}case"int8":{if(o.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let l=Int8Array.from(o,Number);return new Uint8Array(l.buffer)}case"uint8":{if(o.some(l=>l<0||l>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(o,Number)}case"uint32":{if(o.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let l=Uint32Array.from(o,Number);return new Uint8Array(l.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${n}`)}},lp=1,Yo=()=>lp++,up=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Jo=(t,n)=>{let a=Qo.get(t);if(!a)throw new Error(`WebNN backend does not support data type: ${t}`);return n.length>0?Math.ceil(n.reduce((o,l)=>o*l)*a/8):0},el=class{constructor(t){this.isDataConverted=!1;let{sessionId:n,context:a,tensor:o,dataType:l,shape:u,fallbackDataType:d}=t;this.sessionId=n,this.mlContext=a,this.mlTensor=o,this.dataType=l,this.tensorShape=u,this.fallbackDataType=d}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Jo(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(this.fallbackDataType){let n=await this.mlContext.readTensor(this.mlTensor),a=Zo(new Uint8Array(n),this.dataType);if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(a);return}else return a.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,n,a){return this.mlContext===t&&this.dataType===n&&this.tensorShape.length===a.length&&this.tensorShape.every((o,l)=>o===a[l])}setIsDataConverted(t){this.isDataConverted=t}},tl=class{constructor(t,n){this.tensorManager=t,this.wrapper=n}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,n,a,o){let l=this.tensorManager.getMLContext(t),u=this.tensorManager.getMLOpSupportLimits(t),d;if(!(u!=null&&u.input.dataTypes.includes(n))){if(d=up.get(n),!d||(u==null?void 0:u.input.dataTypes.includes(d)))throw new Error(`WebNN backend does not support data type: ${n}`);Ee("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${n} to ${d}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(l,n,a))return this.wrapper.tensor;if(o){if(this.wrapper.byteLength!==Jo(n,a))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let p=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,n,a,p,!0,!0,d),o&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let n=t;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")n=Xo(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(n);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(n):this.activeUpload=new Uint8Array(n)}async download(t){var n,a;if(this.activeUpload){let o=(n=this.wrapper)!=null&&n.isDataConverted?Zo(this.activeUpload,(a=this.wrapper)==null?void 0:a.type):this.activeUpload;if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(o):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(o);return}else return o.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},dp=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let n=this.backend.getMLContext(t);if(!n)throw new Error("MLContext not found for session.");return n}getMLOpSupportLimits(t){return this.backend.getMLOpSupportLimits(t)}reserveTensorId(){let t=Yo();return this.tensorTrackersById.set(t,new tl(this)),t}releaseTensorId(t){let n=this.tensorTrackersById.get(t);n&&(this.tensorTrackersById.delete(t),n.tensorWrapper&&this.releaseTensor(n.tensorWrapper))}async ensureTensor(t,n,a,o,l){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${n}, dataType: ${a}, shape: ${o}, copyOld: ${l}}`);let u=this.tensorTrackersById.get(n);if(!u)throw new Error("Tensor not found.");return u.ensureTensor(t,a,o,l)}upload(t,n){let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");a.upload(n)}async download(t,n){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${n==null?void 0:n.byteLength}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.download(n)}releaseTensorsForSession(t){for(let n of this.freeTensors)n.sessionId===t&&n.destroy();this.freeTensors=this.freeTensors.filter(n=>n.sessionId!==t)}registerTensor(t,n,a,o){let l=this.getMLContext(t),u=Yo(),d=new el({sessionId:t,context:l,tensor:n,dataType:a,shape:o});return this.tensorTrackersById.set(u,new tl(this,d)),this.externalTensors.add(d),u}async getCachedTensor(t,n,a,o,l,u,d){let p=this.getMLContext(t);for(let[m,y]of this.freeTensors.entries())if(y.canReuseTensor(p,n,a)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${n}, ${d?`fallbackDataType: ${d},`:""} shape: ${a}`);let v=this.freeTensors.splice(m,1)[0];return v.sessionId=t,v}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${n}, ${d?`fallbackDataType: ${d},`:""} shape: ${a}}`);let h=await p.createTensor({dataType:d??n,shape:a,dimensions:a,usage:o,writable:l,readable:u});return new el({sessionId:t,context:p,tensor:h,dataType:n,shape:a,fallbackDataType:d})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},cp=(...t)=>new dp(...t)}),Ri,pp,fp,T_=_(()=>{ve(),xn(),op(),E_(),Nr(),Ri=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),pp=(t,n)=>{if(t===n)return!0;if(t===void 0||n===void 0)return!1;let a=Object.keys(t).sort(),o=Object.keys(n).sort();return a.length===o.length&&a.every((l,u)=>l===o[u]&&t[l]===n[l])},fp=class{constructor(t){this.tensorManager=cp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ho(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let n=this.temporarySessionTensorIds.get(t);if(n){for(let a of n)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${a}}`),this.tensorManager.releaseTensorId(a);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let a=this.mlContextCache.findIndex(o=>o.gpuDevice===t);if(a!==-1)return this.mlContextCache[a].mlContext;{let o=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:o}),o}}else if(t===void 0){let a=this.mlContextCache.findIndex(o=>o.options===void 0&&o.gpuDevice===void 0);if(a!==-1)return this.mlContextCache[a].mlContext;{let o=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:o}),o}}let n=this.mlContextCache.findIndex(a=>pp(a.options,t));if(n!==-1)return this.mlContextCache[n].mlContext;{let a=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:a}),a}}registerMLContext(t,n){this.mlContextBySessionId.set(t,n);let a=this.sessionIdsByMLContext.get(n);a||(a=new Set,this.sessionIdsByMLContext.set(n,a)),a.add(t),this.mlOpSupportLimitsBySessionId.has(t)||this.mlOpSupportLimitsBySessionId.set(t,n.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let n=this.mlContextBySessionId.get(t);if(!n)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t),this.mlOpSupportLimitsBySessionId.delete(t);let a=this.sessionIdsByMLContext.get(n);if(a.delete(t),a.size===0){this.sessionIdsByMLContext.delete(n);let o=this.mlContextCache.findIndex(l=>l.mlContext===n);o!==-1&&this.mlContextCache.splice(o,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}getMLOpSupportLimits(t){return this.mlOpSupportLimitsBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,n,a,o,l){let u=Ri.get(a);if(!u)throw new Error(`Unsupported ONNX data type: ${a}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,n,u,o,l)}async createTemporaryTensor(t,n,a){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${n}, shape: ${a}}`);let o=Ri.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);let l=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,l,o,a,!1);let u=this.temporarySessionTensorIds.get(t);return u?u.push(l):this.temporarySessionTensorIds.set(t,[l]),l}uploadTensor(t,n){if(!je().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${n.byteLength}}`),this.tensorManager.upload(t,n)}async downloadTensor(t,n){return this.tensorManager.download(t,n)}createMLTensorDownloader(t,n){return async()=>{let a=await this.tensorManager.download(t);return Ko(a,n)}}registerMLTensor(t,n,a,o){let l=Ri.get(a);if(!l)throw new Error(`Unsupported ONNX data type: ${a}`);let u=this.tensorManager.registerTensor(t,n,l,o);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${n}, dataType: ${l}, dimensions: ${o}} -> {tensorId: ${u}}`),u}registerMLConstant(t,n,a,o,l,u,d=!1){if(!u)throw new Error("External mounted files are not available.");let p=t;t.startsWith("./")&&(p=t.substring(2));let h=u.get(p);if(!h)throw new Error(`File with name ${p} not found in preloaded files.`);if(n+a>h.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let m=h.slice(n,n+a).buffer,y;switch(l.dataType){case"float32":y=new Float32Array(m);break;case"float16":y=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(m):new Uint16Array(m);break;case"int32":y=new Int32Array(m);break;case"uint32":y=new Uint32Array(m);break;case"int64":if(d){let v=Xo(new Uint8Array(m),"int64");y=new Int32Array(v.buffer),l.dataType="int32"}else y=new BigInt64Array(m);break;case"uint64":y=new BigUint64Array(m);break;case"int8":y=new Int8Array(m);break;case"int4":case"uint4":case"uint8":y=new Uint8Array(m);break;default:throw new Error(`Unsupported data type: ${l.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${l.dataType}, shape: ${l.shape}}} ${d?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),o.constant(l,y)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,n){let a=this.sessionGraphInputs.get(t);return a?a.includes(n):!1}isGraphOutput(t,n){let a=this.sessionGraphOutputs.get(t);return a?a.includes(n):!1}isGraphInputOutputTypeSupported(t,n,a=!0){let o=Ri.get(bn(n)),l=this.mlOpSupportLimitsBySessionId.get(t);return typeof o>"u"?!1:a?!!(l!=null&&l.input.dataTypes.includes(o)):!!(l!=null&&l.output.dataTypes.includes(o))}flush(){}}}),rl=_(()=>{}),nl,Ha,Ka,hp,mp,il,al,gp,yp,z_=_(()=>{Nr(),rl(),nl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ha=[],Ka=t=>Math.ceil(Number(t)/16)*16,hp=t=>{for(let n=0;n<Ha.length;n++){let a=Ha[n];if(t<=a)return a}return Math.ceil(t/16)*16},mp=1,il=()=>mp++,al=async(t,n,a,o)=>{let l=Ka(a),u=t.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let d=t.getCommandEncoder();t.endComputePass(),d.copyBufferToBuffer(n,0,u,0,l),t.flush(),await u.mapAsync(GPUMapMode.READ);let p=u.getMappedRange();if(o){let h=o();return h.set(new Uint8Array(p,0,a)),h}else return new Uint8Array(p.slice(0,a))}finally{u.destroy()}},gp=class{constructor(t){this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[n]of nl)Ha.push(n),this.freeBuffers.set(n,[]),this.freeUniformBuffers.set(n,[]);this.sessionCount=0}upload(t,n){let a=n.buffer,o=n.byteOffset,l=n.byteLength,u=Ka(l),d=this.storageCache.get(t);if(!d)throw new Error("gpu data for uploading does not exist");if(Number(d.originalSize)!==l)throw new Error(`inconsistent data size. gpu data size=${d.originalSize}, data size=${l}`);let p=this.backend.device.createBuffer({mappedAtCreation:!0,size:u,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),h=p.getMappedRange();new Uint8Array(h).set(new Uint8Array(a,o,l)),p.unmap();let m=this.backend.device.createCommandEncoder();m.copyBufferToBuffer(p,0,d.gpuData.buffer,0,u),this.backend.device.queue.submit([m.finish()]),p.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,n){let a=this.storageCache.get(t);if(!a)throw new Error("source gpu data for memcpy does not exist");let o=this.storageCache.get(n);if(!o)throw new Error("destination gpu data for memcpy does not exist");if(a.originalSize!==o.originalSize)throw new Error("inconsistent source and destination gpu data size");let l=Ka(a.originalSize),u=this.backend.getCommandEncoder();this.backend.endComputePass(),u.copyBufferToBuffer(a.gpuData.buffer,0,o.gpuData.buffer,0,l)}registerExternalBuffer(t,n,a){let o;if(a){if(o=a[0],t===a[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${n}) => id=${o}, buffer is the same, skip.`),o;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else o=il();return this.storageCache.set(o,{gpuData:{id:o,type:0,buffer:t},originalSize:n}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${n}) => id=${o}, registered.`),o}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let a=hp(t),o,l=(n&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,u=(n&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(l||u){let p=(l?this.freeBuffers:this.freeUniformBuffers).get(a);p?p.length>0?o=p.pop():o=this.backend.device.createBuffer({size:a,usage:n}):o=this.backend.device.createBuffer({size:a,usage:n})}else o=this.backend.device.createBuffer({size:a,usage:n});let d={id:il(),type:0,buffer:o};return this.storageCache.set(d.id,{gpuData:d,originalSize:Number(t)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${d.id}`),d}get(t){var n;return(n=this.storageCache.get(t))==null?void 0:n.gpuData}release(t){let n=typeof t=="bigint"?Number(t):t,a=this.storageCache.get(n);if(!a){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${n}), gpuDataId=${a.gpuData.id}`),this.storageCache.delete(n),this.buffersPending.push(a.gpuData.buffer),a.originalSize}async download(t,n){let a=this.storageCache.get(Number(t));if(!a)throw new Error("data does not exist");await al(this.backend,a.gpuData.buffer,a.originalSize,n)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let n=nl.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let a=this.freeBuffers.get(t.size)||[];n===void 0||a.length>=n?t.destroy():a.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let a=this.freeUniformBuffers.get(t.size)||[];n===void 0||a.length>=n?t.destroy():a.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let n of this.buffersPending)t.push(n);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(n=>{n.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(n=>{n.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(n=>{n.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let n=this.capturedPendingBuffers.get(t);n&&(n.forEach(a=>{a.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(a=>{a.gpuData.buffer.destroy()}),this.storageCache=new Map)}},yp=(...t)=>new gp(...t)}),vp,Ae,Ke=_(()=>{vp=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},Ae=t=>new vp(t)}),Xn,Qa,st,wt,pe,Ge,sl,Zn,Hr,de,Oi,W,oe,wp,ol,_p,xp,xe=_(()=>{ve(),_e(),Xn=64,Qa=(t,n)=>{if(n===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return n>1?`vec${n}<f16>`:"f16";case 1:return n>1?`vec${n}<f32>`:"f32";case 6:return n>1?`vec${n}<i32>`:"i32";case 12:return n>1?`vec${n}<u32>`:"u32";case 7:if(n>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(n>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(n!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${t}`)}},st=(t,n=1)=>{let a=Qa(t,n);return typeof a=="string"?a:a[0]},wt=(t,n=1)=>{let a=Qa(t,n);return typeof a=="string"?a:a[1]},pe=(...t)=>{let n=[];return t.forEach(a=>{a.length!==0&&n.push({type:12,data:a},{type:12,data:U.computeStrides(a)})}),n},Ge=t=>t%4===0?4:t%2===0?2:1,sl=(t="f32",n,a="0")=>!n||n===1?`${t}(${a})`:`vec${n}<${t}>(${a})`,Zn=(t,n,a)=>t==="f32"?a:n===1?`f32(${a})`:`vec${n}<f32>(${a})`,Hr=(t,n)=>n===4?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:n===2?`(${t}.x + ${t}.y)`:n===3?`(${t}.x + ${t}.y + ${t}.z)`:t,de=(t,n,a,o)=>t.startsWith("uniforms.")&&a>4?typeof n=="string"?o==="f16"?`${t}[(${n}) / 8][(${n}) % 8 / 4][(${n}) % 8 % 4]`:`${t}[(${n}) / 4][(${n}) % 4]`:o==="f16"?`${t}[${Math.floor(n/8)}][${Math.floor(n%8/4)}][${n%8%4}]`:`${t}[${Math.floor(n/4)}][${n%4}]`:a>1?`${t}[${n}]`:t,Oi=(t,n,a,o,l)=>{let u=typeof a=="number",d=u?a:a.length,p=[...new Array(d).keys()],h=d<2?"u32":d<=4?`vec${d}<u32>`:`array<u32, ${d}>`,m=Qa(n,l),y=typeof m=="string"?m:m[1],v=typeof m=="string"?m:m[0],w={indices:h,value:y,storage:v,tensor:n},x=Z=>typeof Z=="string"?Z:`${Z}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=u?"uniforms.":"",z=`${S}${t}_shape`,E=`${S}${t}_strides`,k="";for(let Z=0;Z<d-1;Z++)k+=`
    let dim${Z} = current / ${de(E,Z,d)};
    let rest${Z} = current % ${de(E,Z,d)};
    indices[${Z}] = dim${Z};
    current = rest${Z};
    `;k+=`indices[${d-1}] = current;`;let I=d<2?"":`
  fn o2i_${t}(offset: u32) -> ${w.indices} {
    var indices: ${w.indices};
    var current = offset;
    ${k}
    return indices;
  }`,C=Z=>($.offsetToIndices=!0,d<2?Z:`o2i_${t}(${Z})`),O=[];if(d>=2)for(let Z=d-1;Z>=0;Z--)O.push(`${de(E,Z,d)} * (indices[${Z}])`);let j=d<2?"":`
  fn i2o_${t}(indices: ${w.indices}) -> u32 {
    return ${O.join("+")};
  }`,L=Z=>($.indicesToOffset=!0,d<2?Z:`i2o_${t}(${Z})`),V=(...Z)=>d===0?"0u":`${w.indices}(${Z.map(x).join(",")})`,F=(Z,se)=>d<2?`${Z}`:`${de(Z,se,d)}`,J=(Z,se,ce)=>d<2?`${Z}=${ce};`:`${de(Z,se,d)}=${ce};`,ge={},fe=(Z,se)=>{$.broadcastedIndicesToOffset=!0;let ce=`${se.name}broadcastedIndicesTo${t}Offset`;if(ce in ge)return`${ce}(${Z})`;let ne=[];for(let De=d-1;De>=0;De--){let Or=se.indicesGet("outputIndices",De+se.rank-d);ne.push(`${F(E,De)} * (${Or} % ${F(z,De)})`)}return ge[ce]=`fn ${ce}(outputIndices: ${se.type.indices}) -> u32 {
             return ${ne.length>0?ne.join("+"):"0u"};
           }`,`${ce}(${Z})`},he=(Z,se)=>(()=>{if(w.storage===w.value)return`${t}[${Z}]=${se};`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`${t}[${Z}]=vec2<u32>(u32(${se}), select(0u, 0xFFFFFFFFu, ${se} < 0));`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`${t}[${Z}]=vec2<u32>(u32(${se}), 0u);`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`${t}[${Z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${se}));`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),Se=Z=>(()=>{if(w.storage===w.value)return`${t}[${Z}]`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`i32(${t}[${Z}].x)`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`u32(${t}[${Z}].x)`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`vec4<bool>(bool(${t}[${Z}] & 0xFFu), bool(${t}[${Z}] & 0xFF00u), bool(${t}[${Z}] & 0xFF0000u), bool(${t}[${Z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),Ce=d<2?"":`
  fn get_${t}ByIndices(indices: ${w.indices}) -> ${y} {
    return ${Se(`i2o_${t}(indices)`)};
  }`,me=d<2?"":(()=>{let Z=p.map(ce=>`d${ce}: u32`).join(", "),se=p.map(ce=>`d${ce}`).join(", ");return`
  fn get_${t}(${Z}) -> ${y} {
    return get_${t}ByIndices(${V(se)});
  }`})(),we=(...Z)=>{if(Z.length!==d)throw new Error(`indices length must be ${d}`);let se=Z.map(x).join(",");return d===0?Se("0u"):d===1?Se(se[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${t}(${se})`)},et=Z=>d<2?Se(Z):($.getByIndices=!0,$.indicesToOffset=!0,`get_${t}ByIndices(${Z})`),re=d<2?"":`
  fn set_${t}ByIndices(indices: ${w.indices}, value: ${y}) {
    ${he(`i2o_${t}(indices)`,"value")}
  }`,Ne=d<2?"":(()=>{let Z=p.map(ce=>`d${ce}: u32`).join(", "),se=p.map(ce=>`d${ce}`).join(", ");return`
  fn set_${t}(${Z}, value: ${y}) {
    set_${t}ByIndices(${V(se)}, value);
  }`})();return{impl:()=>{let Z=[],se=!1;return $.offsetToIndices&&(Z.push(I),se=!0),$.indicesToOffset&&(Z.push(j),se=!0),$.broadcastedIndicesToOffset&&(Object.values(ge).forEach(ce=>Z.push(ce)),se=!0),$.set&&(Z.push(Ne),se=!0),$.setByIndices&&(Z.push(re),se=!0),$.get&&(Z.push(me),se=!0),$.getByIndices&&(Z.push(Ce),se=!0),!u&&se&&Z.unshift(`const ${z} = ${w.indices}(${a.join(",")});`,`const ${E} = ${w.indices}(${U.computeStrides(a).join(",")});`),Z.join(`
`)},type:w,offsetToIndices:C,indicesToOffset:L,broadcastedIndicesToOffset:fe,indices:V,indicesGet:F,indicesSet:J,set:(...Z)=>{if(Z.length!==d+1)throw new Error(`indices length must be ${d}`);let se=Z[d];if(typeof se!="string")throw new Error("value must be string");let ce=Z.slice(0,d).map(x).join(",");return d===0?he("0u",se):d===1?he(ce[0],se):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${t}(${ce}, ${se})`)},setByOffset:he,setByIndices:(Z,se)=>d<2?he(Z,se):($.setByIndices=!0,$.indicesToOffset=!0,`set_${t}ByIndices(${Z}, ${se});`),get:we,getByOffset:Se,getByIndices:et,usage:o,name:t,strides:E,shape:z,rank:d}},W=(t,n,a,o=1)=>Oi(t,n,a,"input",o),oe=(t,n,a,o=1)=>Oi(t,n,a,"output",o),wp=(t,n,a)=>Oi(t,n,a,"atomicOutput",1),ol=(t,n,a,o=1)=>Oi(t,n,a,"internal",o),_p=class{constructor(t,n){this.normalizedDispatchGroup=t,this.limits=n,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=Xn){let n=typeof t=="number"?t:t[0],a=typeof t=="number"?1:t[1],o=typeof t=="number"?1:t[2];if(n>this.limits.maxComputeWorkgroupSizeX||a>this.limits.maxComputeWorkgroupSizeY||o>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${n}, ${a}, ${o}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(n*a*o>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${n}, ${a}, ${o}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let l=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,u=l?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,d=l?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${n*a*o}u + local_idx;`;return`@compute @workgroup_size(${n}, ${a}, ${o})
  fn main(${u}) {
    ${d}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,n){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let a=t.usage==="input"?"read":"read_write",o=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${n}) var<storage, ${a}> ${t.name}: array<${o}>;`}declareVariables(...t){return t.map(n=>this.declareVariable(n,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(n=>this.registerInternalVariable(n)),this}registerUniform(t,n,a=1){return this.uniforms.push({name:t,type:n,length:a}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:n,type:a,length:o}of this.uniforms)if(o&&o>4)a==="f16"?t.push(`@align(16) ${n}:array<mat2x4<${a}>, ${Math.ceil(o/8)}>`):t.push(`${n}:array<vec4<${a}>, ${Math.ceil(o/4)}>`);else{let l=o==null||o===1?a:`vec${o}<${a}>`;t.push(`${n}:${l}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=n=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(n)];return this.uniforms.map(n=>[t(n.type),n.length??1])}},xp=(t,n)=>new _p(t,n)}),$p,ll,bp,kp,Sp,Ep,Lt,Tp,zp,Kr=_(()=>{ve(),_e(),Ke(),xe(),$p=(t,n)=>{if(!t||t.length!==1)throw new Error("Transpose requires 1 input.");if(n.length!==0&&n.length!==t[0].dims.length)throw new Error(`perm size ${n.length} does not match input rank ${t[0].dims.length}`)},ll=(t,n)=>n.length!==0?n:[...new Array(t).keys()].reverse(),bp=(t,n)=>U.sortBasedOnPerm(t,ll(t.length,n)),kp=(t,n,a,o)=>{let l=`fn perm(i: ${o.type.indices}) -> ${a.type.indices} {
    var a: ${a.type.indices};`;for(let u=0;u<n;++u)l+=`a[${t[u]}]=i[${u}];`;return l+="return a;}"},Sp=(t,n)=>{let a=[],o=[];for(let l=0;l<t.length;++l)t[l]!==1&&a.push(t[l]),t[n[l]]!==1&&o.push(n[l]);return{newShape:a,newPerm:o}},Ep=(t,n)=>{let a=0;for(let o=0;o<t.length;++o)if(n[t[o]]!==1){if(t[o]<a)return!1;a=t[o]}return!0},Lt=(t,n)=>{let a=t.dataType,o=t.dims.length,l=ll(o,n),u=bp(t.dims,l),d=t.dims,p=u,h=o<2||Ep(l,t.dims),m;if(h)return m=$=>{let S=W("input",a,d,4),z=oe("output",a,p,4);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,z)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=U.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil($/64/4)},programUniforms:[{type:12,data:Math.ceil($/4)}]}},getShaderSource:m};let{newShape:y,newPerm:v}=Sp(t.dims,l),w=U.areEqual(v,[2,3,1]),x=U.areEqual(v,[3,1,2]);if(y.length===2||w||x){d=w?[y[0],y[1]*y[2]]:x?[y[0]*y[1],y[2]]:y,p=[d[1],d[0]];let $=16;return m=S=>{let z=W("a",a,d.length),E=oe("output",a,p.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(z,E)}
  var<workgroup> tile : array<array<${E.type.value}, ${$+1}>, ${$}>;
  ${S.mainStart([$,$,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${$} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${$}u + local_id.x;
    let input_row = workgroup_id_x * ${$}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${z.getByIndices(`${z.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${$}u + local_id.x;
    let output_row = workgroup_id_y * ${$}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${E.setByIndices(`${E.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=U.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(p[1]/$),y:Math.ceil(p[0]/$)},programUniforms:[{type:12,data:S},...pe(d,p)]}},getShaderSource:m}}return m=$=>{let S=W("a",a,d.length),z=oe("output",a,p.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,z)}

  ${kp(l,o,S,z)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${z.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${z.setByOffset("global_idx",S.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>{let $=U.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...pe(d,p)]}},getShaderSource:m}},Tp=(t,n)=>{$p(t.inputs,n.perm),t.compute(Lt(t.inputs[0],n.perm))},zp=t=>Ae({perm:t.perm})}),Cp,Ip,Np,Rp,Op,Ap,Mp,Pp,Bp,Dp,sr,Lp,jp,Up,Vp,Wp,Fp,qp,Gp,Hp,Kp,C_=_(()=>{ve(),_e(),xe(),dl(),Kr(),Cp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ip={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Np={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Rp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Op=(t,n)=>{let a=[];for(let o=n-t;o<n;++o)a.push(o);return a},Ap=(t,n)=>{let a=[],o=t.length;for(let u=0;u<o;u++)n.indexOf(u)===-1&&a.push(t[u]);let l=n.map(u=>t[u]);return[a,l]},Mp=(t,n)=>{let a=t.length+n.length,o=[],l=0;for(let u=0;u<a;u++)n.indexOf(u)===-1?o.push(t[l++]):o.push(1);return o},Pp=(t,n)=>{for(let a=0;a<t.length;++a)if(t[t.length-a-1]!==n-1-a)return!1;return!0},Bp=(t,n)=>{let a=[];if(!Pp(t,n)){for(let o=0;o<n;++o)t.indexOf(o)===-1&&a.push(o);t.forEach(o=>a.push(o))}return a},Dp=(t,n,a,o,l,u,d)=>{let p=a[0].dims,h=U.size(u),m=U.size(d),y=W("_A",a[0].dataType,p),v=oe("output",l,u),w=64;h===1&&(w=256);let x=`
          var<workgroup> aBestValues : array<f32, ${w}>;
       `,$=S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(y,v)}
        ${x}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(w)}

          let outputIndex = global_idx / ${w};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Np[o]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${w}) {
           let candidate = f32(${y.getByOffset("offset + k")});
           bestValue = ${Cp[o]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${w}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ip[o]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${v.setByOffset("outputIndex",`${o==="mean"?`${v.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${v.type.storage}(${Rp[o]})`}`)};
         }
        }`;return{name:t,shaderCache:{hint:`${n};${w}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:l}],dispatchGroup:{x:h},programUniforms:[{type:12,data:m}]})}},sr=(t,n,a,o)=>{let l=t.inputs.length===1?a:ul(t.inputs,a),u=l.axes;u.length===0&&!l.noopWithEmptyAxes&&(u=t.inputs[0].dims.map((x,$)=>$));let d=U.normalizeAxes(u,t.inputs[0].dims.length),p=d,h=t.inputs[0],m=Bp(p,t.inputs[0].dims.length);m.length>0&&(h=t.compute(Lt(t.inputs[0],m),{inputs:[0],outputs:[-1]})[0],p=Op(p.length,h.dims.length));let[y,v]=Ap(h.dims,p),w=y;l.keepDims&&(w=Mp(y,d)),t.compute(Dp(n,l.cacheKey,[h],o,t.inputs[0].dataType,w,v),{inputs:[h]})},Lp=(t,n)=>{sr(t,"ReduceMeanShared",n,"mean")},jp=(t,n)=>{sr(t,"ReduceL1Shared",n,"l1")},Up=(t,n)=>{sr(t,"ReduceL2Shared",n,"l2")},Vp=(t,n)=>{sr(t,"ReduceLogSumExpShared",n,"logSumExp")},Wp=(t,n)=>{sr(t,"ReduceMaxShared",n,"max")},Fp=(t,n)=>{sr(t,"ReduceMinShared",n,"min")},qp=(t,n)=>{sr(t,"ReduceProdShared",n,"prod")},Gp=(t,n)=>{sr(t,"ReduceSumShared",n,"sum")},Hp=(t,n)=>{sr(t,"ReduceSumSquareShared",n,"sumSquare")},Kp=(t,n)=>{sr(t,"ReduceLogSumShared",n,"logSum")}}),or,Qp,Xa,ul,lr,Xp,Zp,Yp,Jp,ef,tf,rf,nf,af,sf,ur,of,lf,uf,df,cf,pf,ff,hf,mf,gf,dl=_(()=>{ve(),_e(),Ke(),xe(),C_(),or=t=>{if(!t||t.length===0||t.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(t.length===2&&t[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Qp=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],Xa=(t,n,a,o,l,u,d=!1,p=!1)=>{let h=[],m=a[0].dims,y=m.length,v=U.normalizeAxes(l,y),w=!p&&v.length===0;m.forEach((S,z)=>{w||v.indexOf(z)>=0?d&&h.push(1):h.push(S)});let x=h.length,$=U.size(h);return{name:t,shaderCache:n,getShaderSource:S=>{let z=[],E=W("_A",a[0].dataType,y),k=oe("output",u,x),I=o(E,k,v),C=I[2];for(let O=0,j=0;O<y;O++)w||v.indexOf(O)>=0?(d&&j++,C=`for(var j${O}: u32 = 0; j${O} < ${m[O]}; j${O}++) {
                  ${I[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${E.indicesSet("input_indices",O,`j${O}`)}
                  ${C}
                }`):(z.push(`${E.indicesSet("input_indices",O,k.indicesGet("output_indices",j))};`),j++);return`

        ${S.registerUniform("output_size","u32").declareVariables(E,k)}

        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${E.type.indices};
          let output_indices = ${k.offsetToIndices("global_idx")};

          ${z.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${C}
          ${I[3]}
          ${I.length===4?k.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:h,dataType:u}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...pe(m,h)]})}},ul=(t,n)=>{let a=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(o=>a.push(Number(o))),Ae({axes:a,keepDims:n.keepDims,noopWithEmptyAxes:n.noopWithEmptyAxes})},lr=(t,n,a,o)=>{let l=t.inputs,u=l.length===1?a:ul(l,a);t.compute(Xa(n,{hint:u.cacheKey,inputDependencies:["rank"]},[l[0]],u.noopWithEmptyAxes&&u.axes.length===0?Qp:o,u.axes,l[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},Xp=(t,n)=>{or(t.inputs),lr(t,"ReduceLogSum",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${a.getByIndices("input_indices")};`,"value = log(value);"])},Zp=(t,n)=>{or(t.inputs),lr(t,"ReduceL1",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += abs(${a.getByIndices("input_indices")});`,""])},Yp=(t,n)=>{or(t.inputs),lr(t,"ReduceL2",n,(a,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${a.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Jp=(t,n)=>{or(t.inputs),lr(t,"ReduceLogSumExp",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += exp(${a.getByIndices("input_indices")});`,"value = log(value);"])},ef=(t,n)=>{or(t.inputs),lr(t,"ReduceMax",n,(a,o,l)=>{let u=[];for(let d=0;d<a.rank;d++)(l.indexOf(d)>=0||l.length===0)&&u.push(a.indicesSet("input_indices",d,0));return[`${u.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};`,`value = max(value, ${a.getByIndices("input_indices")});`,""]})},tf=(t,n)=>{or(t.inputs),lr(t,"ReduceMean",n,(a,o,l)=>{let u=1;for(let d=0;d<a.rank;d++)(l.indexOf(d)>=0||l.length===0)&&(u*=t.inputs[0].dims[d]);return["var sum = f32(0);","",`sum += f32(${a.getByIndices("input_indices")});`,`let value = ${o.type.value}(sum / ${u});`]})},rf=(t,n)=>{or(t.inputs),lr(t,"ReduceMin",n,(a,o,l)=>{let u=[];for(let d=0;d<a.rank;d++)(l.indexOf(d)>=0||l.length===0)&&u.push(`input_indices[${d}] = 0;`);return[`${u.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};`,`value = min(value, ${a.getByIndices("input_indices")});`,""]})},nf=(t,n)=>{or(t.inputs),lr(t,"ReduceProd",n,(a,o)=>[`var value = ${o.type.storage}(1);`,"",`value *= ${a.getByIndices("input_indices")};`,""])},af=(t,n)=>{or(t.inputs),lr(t,"ReduceSum",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${a.getByIndices("input_indices")};`,""])},sf=(t,n)=>{or(t.inputs),lr(t,"ReduceSumSquare",n,(a,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${a.getByIndices("input_indices")}; value += t * t;`,""])},ur=(t,n,a)=>{if(n.length===0)return a;let o=1,l=1;for(let u=0;u<n.length;u++)n.indexOf(u)===-1?o*=t[u]:l*=t[u];return l<32&&o>1024},of=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?tf(t,n):Lp(t,n)},lf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Zp(t,n):jp(t,n)},uf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Yp(t,n):Up(t,n)},df=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Jp(t,n):Vp(t,n)},cf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?ef(t,n):Wp(t,n)},pf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?rf(t,n):Fp(t,n)},ff=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?nf(t,n):qp(t,n)},hf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?af(t,n):Gp(t,n)},mf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?sf(t,n):Hp(t,n)},gf=(t,n)=>{ur(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Xp(t,n):Kp(t,n)}}),cl,yf,vf,pl,I_=_(()=>{ve(),Ke(),dl(),cl=t=>{if(!t||t.length===0||t.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(t[0].dataType!==1)throw new Error("Invalid input type.")},yf=(t,n)=>{cl(t.inputs);let a=(o,l,u)=>{let d=[];for(let p=0;p<o.rank;p++)(u.indexOf(p)>=0||u.length===0)&&d.push(`input_indices[${p}] = 0;`);return[`${d.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${n.selectLastIndex>0?"<=":"<"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",l.setByOffset("global_idx","best_index")]};t.compute(Xa("ArgMin",{hint:n.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],a,[n.axis],7,n.keepDims),{inputs:[0]})},vf=(t,n)=>{cl(t.inputs);let a=(o,l,u)=>{let d=[];for(let p=0;p<o.rank;p++)(u.indexOf(p)>=0||u.length===0)&&d.push(`input_indices[${p}] = 0;`);return[`${d.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${n.selectLastIndex>0?">=":">"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",l.setByOffset("global_idx","best_index")]};t.compute(Xa("argMax",{hint:n.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],a,[n.axis],7,n.keepDims),{inputs:[0]})},pl=t=>Ae(t)}),wf,Za,_f,xf,$f,Ai,bf,kf,fl=_(()=>{ve(),_e(),rl(),xe(),wf=(t,n)=>{let a=t[0],o=t[1],l=t[2],u=t[3],d=t[4],p=t[5];if(d&&p)throw new Error("Attention cannot have both past and attention_bias");if(a.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let h=a.dims[0],m=a.dims[1],y=a.dims[2];if(l.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(o.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(o.dims[0]!==y)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(l.dims[0]!==o.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let v=l.dims[0]/3,w=v,x=w;if(n.qkvHiddenSizes.length>0){if(n.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of n.qkvHiddenSizes)if(I%n.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");v=n.qkvHiddenSizes[0],w=n.qkvHiddenSizes[1],x=n.qkvHiddenSizes[2]}let $=m;if(v!==w)throw new Error("qkv_hidden_sizes first element should be same as the second");if(l.dims[0]!==v+w+x)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(d){if(w!==x)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(d.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(d.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(d.dims[1]!==h)throw new Error('Input "past" second dimension must be batch_size');if(d.dims[2]!==n.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(d.dims[4]!==w/n.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');n.pastPresentShareBuffer||(S=d.dims[3])}let z=$+S,E=-1,k=0;if(u)throw new Error("Mask not supported");if(d)throw new Error("past is not supported");if(p){if(p.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(p.dims[0]!==h||p.dims[1]!==n.numHeads||p.dims[2]!==m||p.dims[3]!==z)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:m,pastSequenceLength:S,kvSequenceLength:$,totalSequenceLength:z,maxSequenceLength:E,inputHiddenSize:y,hiddenSize:v,vHiddenSize:x,headSize:Math.floor(v/n.numHeads),vHeadSize:Math.floor(x/n.numHeads),numHeads:n.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:n.maskFilterValue,maskType:k,scale:n.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Za=(t,n,a)=>n&&t?`
      let total_sequence_length_input = u32(${n.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t==null?void 0:t.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${a?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,_f=(t,n,a,o,l,u,d,p)=>{let h=Ge(d?1:u),m=64,y=u/h;y<m&&(m=32);let v=Math.ceil(u/h/m),w=[{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:l},{type:12,data:y},{type:12,data:v}],x=st(t.dataType,h),$=wt(1,h),S=["type"];d&&S.push("type"),p&&S.push("type");let z=E=>{let k=oe("x",t.dataType,t.dims,h),I=[k],C=d?W("seq_lens",d.dataType,d.dims):void 0;C&&I.push(C);let O=p?W("total_sequence_length_input",p.dataType,p.dims):void 0;O&&I.push(O);let j=wt(t.dataType),L=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${m}>;
  var<workgroup> thread_sum: array<f32, ${m}>;
  ${E.registerUniforms(L).declareVariables(...I)}
  ${E.mainStart([m,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Za(C,O,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${m}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${d?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${$}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${$}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(h){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${h}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${m}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${$}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${$}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(h){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${h}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${m}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${k.type.value}(${j}(1.0) / ${j}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${$}(x[offset + i]);
        x[offset + i] = ${k.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${d?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${k.type.value}(${j}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${m};${x};${h}`,inputDependencies:S},getShaderSource:z,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:l,z:n*a},programUniforms:w})}},xf=(t,n,a,o,l,u,d,p,h)=>{let m=d+u.kvSequenceLength,y=[u.batchSize,u.numHeads,u.sequenceLength,m],v=t>1&&o,w=u.kvNumHeads?u.kvNumHeads:u.numHeads,x=v?[u.batchSize,w,m,u.headSize]:void 0,$=u.nReps?u.nReps:1,S=u.scale===0?1/Math.sqrt(u.headSize):u.scale,z=Ge(u.headSize),E=u.headSize/z,k=12,I={x:Math.ceil(m/k),y:Math.ceil(u.sequenceLength/k),z:u.batchSize*u.numHeads},C=[{type:12,data:u.sequenceLength},{type:12,data:E},{type:12,data:m},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:S},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:$}],O=v&&o&&U.size(o.dims)>0,j=["type","type"];O&&j.push("type"),l&&j.push("type"),p&&j.push("type"),h&&j.push("type");let L=[{dims:y,dataType:n.dataType,gpuDataType:0}];v&&L.push({dims:x,dataType:n.dataType,gpuDataType:0});let V=F=>{let J=W("q",n.dataType,n.dims,z),ge=W("key",a.dataType,a.dims,z),fe=[J,ge];if(O){let re=W("past_key",o.dataType,o.dims,z);fe.push(re)}l&&fe.push(W("attention_bias",l.dataType,l.dims));let he=p?W("seq_lens",p.dataType,p.dims):void 0;he&&fe.push(he);let Se=h?W("total_sequence_length_input",h.dataType,h.dims):void 0;Se&&fe.push(Se);let Ce=oe("output",n.dataType,y),me=[Ce];v&&me.push(oe("present_key",n.dataType,x,z));let we=wt(1,z),et=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${k}u;

  var<workgroup> tileQ: array<${J.type.storage}, ${k*k}>;
  var<workgroup> tileK: array<${J.type.storage}, ${k*k}>;
  ${F.registerUniforms(et).declareVariables(...fe,...me)}
  ${F.mainStart([k,k,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Za(he,Se,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&v?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${v?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${we}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&v?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${v?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${we}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(z){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${z}`)}})()};
        output[outputIdx] = ${Ce.type.value} (sum * uniforms.alpha) + ${l?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${z};${l!==void 0};${o!==void 0};${t}`,inputDependencies:j},getRunData:()=>({outputs:L,dispatchGroup:I,programUniforms:C}),getShaderSource:V}},$f=(t,n,a,o,l,u,d=void 0,p=void 0)=>{let h=u+l.kvSequenceLength,m=l.nReps?l.nReps:1,y=l.vHiddenSize*m,v=t>1&&o,w=l.kvNumHeads?l.kvNumHeads:l.numHeads,x=v?[l.batchSize,w,h,l.headSize]:void 0,$=[l.batchSize,l.sequenceLength,y],S=12,z={x:Math.ceil(l.vHeadSize/S),y:Math.ceil(l.sequenceLength/S),z:l.batchSize*l.numHeads},E=[{type:12,data:l.sequenceLength},{type:12,data:h},{type:12,data:l.vHeadSize},{type:12,data:l.numHeads},{type:12,data:l.headSize},{type:12,data:y},{type:12,data:u},{type:12,data:l.kvSequenceLength},{type:12,data:m}],k=v&&o&&U.size(o.dims)>0,I=["type","type"];k&&I.push("type"),d&&I.push("type"),p&&I.push("type");let C=[{dims:$,dataType:n.dataType,gpuDataType:0}];v&&C.push({dims:x,dataType:n.dataType,gpuDataType:0});let O=j=>{let L=W("probs",n.dataType,n.dims),V=W("v",a.dataType,a.dims),F=[L,V];k&&F.push(W("past_value",o.dataType,o.dims));let J=d?W("seq_lens",d.dataType,d.dims):void 0;d&&F.push(J);let ge=p?W("total_sequence_length_input",p.dataType,p.dims):void 0;p&&F.push(ge);let fe=[oe("output",n.dataType,$)];v&&fe.push(oe("present_value",n.dataType,x));let he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${L.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${L.type.value}, ${S*S}>;
  ${j.registerUniforms(he).declareVariables(...F,...fe)}
  ${j.mainStart([S,S,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Za(J,ge,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${k&&v?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${v?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${L.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${k&&v?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${v?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${o!==void 0};${t}`,inputDependencies:I},getRunData:()=>({outputs:C,dispatchGroup:z,programUniforms:E}),getShaderSource:O}},Ai=(t,n,a,o,l,u,d,p,h,m,y=void 0,v=void 0)=>{let w=Math.min(t.outputCount,1+(d?1:0)+(p?1:0)),x=w>1?d:void 0,$=w>1?p:void 0,S=w>1?m.pastSequenceLength:0,z=S+m.kvSequenceLength,E=h&&U.size(h.dims)>0?h:void 0,k=[n,a];x&&U.size(x.dims)>0&&k.push(x),E&&k.push(E),y&&k.push(y),v&&k.push(v);let I=t.compute(xf(w,n,a,x,E,m,S,y,v),{inputs:k,outputs:w>1?[-1,1]:[-1]})[0];t.compute(_f(I,m.batchSize,m.numHeads,S,m.sequenceLength,z,y,v),{inputs:y&&v?[I,y,v]:[I],outputs:[]});let C=[I,o];$&&U.size($.dims)>0&&C.push($),y&&C.push(y),v&&C.push(v),t.compute($f(w,I,o,$,m,S,y,v),{inputs:C,outputs:w>1?[0,2]:[0]})},bf=(t,n)=>{let a=[n.batchSize,n.numHeads,n.sequenceLength,n.headSize],o=n.sequenceLength,l=n.inputHiddenSize,u=n.headSize,d=12,p={x:Math.ceil(n.headSize/d),y:Math.ceil(n.sequenceLength/d),z:n.batchSize*n.numHeads},h=[t.inputs[0],t.inputs[1],t.inputs[2]],m=[{type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:n.hiddenSize},{type:12,data:n.hiddenSize+n.hiddenSize+n.vHiddenSize}],y=v=>{let w=oe("output_q",h[0].dataType,a),x=oe("output_k",h[0].dataType,a),$=oe("output_v",h[0].dataType,a),S=W("input",h[0].dataType,h[0].dims),z=W("weight",h[1].dataType,h[1].dims),E=W("bias",h[2].dataType,h[2].dims),k=S.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileInput: array<${k}, ${d*d}>;
  var<workgroup> tileWeightQ: array<${k}, ${d*d}>;
  var<workgroup> tileWeightK: array<${k}, ${d*d}>;
  var<workgroup> tileWeightV: array<${k}, ${d*d}>;
  ${v.registerUniforms(I).declareVariables(S,z,E,w,x,$)}
  ${v.mainStart([d,d,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${k}(0);
    var valueK = ${k}(0);
    var valueV = ${k}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:a,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:a,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:p,programUniforms:m}),getShaderSource:y},{inputs:h,outputs:[-1,-1,-1]})},kf=(t,n)=>{let a=wf(t.inputs,n),[o,l,u]=bf(t,a);return Ai(t,o,l,u,t.inputs[4],void 0,void 0,void 0,t.inputs[5],a)}}),Sf,Ef,Tf,zf,N_=_(()=>{Xt(),ve(),_e(),Ke(),xe(),Sf=(t,n)=>{if(!t||t.length!==5)throw new Error("BatchNormalization requires 5 inputs");let a=(o,l,u)=>{let d=l.length;if(d!==o.length)throw new Error(`${u}: num dimensions != ${d}`);l.forEach((p,h)=>{if(p!==o[h])throw new Error(`${u}: dim[${h}] do not match`)})};if(t[0].dims.length>1){let o=n.format==="NHWC"?n.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,n.spatial?2:void 0);a(t[1].dims,o,"Invalid input scale"),a(t[2].dims,o,"Invalid input B"),a(t[3].dims,o,"Invalid input mean"),a(t[4].dims,o,"Invalid input var")}else a(t[1].dims,[1],"Invalid input scale"),a(t[2].dims,[1],"Invalid input B"),a(t[3].dims,[1],"Invalid input mean"),a(t[4].dims,[1],"Invalid input var")},Ef=(t,n)=>{let{epsilon:a,spatial:o,format:l}=n,u=t[0].dims,d=o?Ge(u[u.length-1]):1,p=l==="NHWC"&&u.length>1?d:1,h=U.size(u)/d,m=o,y=m?u.length:u,v=W("x",t[0].dataType,t[0].dims,d),w=W("scale",t[1].dataType,t[1].dims,p),x=W("bias",t[2].dataType,t[2].dims,p),$=W("inputMean",t[3].dataType,t[3].dims,p),S=W("inputVar",t[4].dataType,t[4].dims,p),z=oe("y",t[0].dataType,y,d),E=()=>{let I="";if(o)I=`let cOffset = ${u.length===1?"0u":l==="NHWC"?`outputIndices[${u.length-1}] / ${d}`:"outputIndices[1]"};`;else if(l==="NCHW")I=`
            ${z.indicesSet("outputIndices","0","0")}
            let cOffset = ${z.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${w.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let C=1;C<w.rank;C++)I+=`cIndices[${C}] = outputIndices[${C}];`;I+=`let cOffset = ${w.indicesToOffset("cIndices")};`}return I},k=I=>`
  const epsilon = ${a};
  ${I.registerUniform("outputSize","u32").declareVariables(v,w,x,$,S,z)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${z.offsetToIndices(`global_idx * ${d}`)};
    ${E()}
    let scale = ${w.getByOffset("cOffset")};
    let bias = ${x.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${S.getByOffset("cOffset")};
    let x = ${v.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${z.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${n.epsilon}_${n.format}_${o}_${d}`,inputDependencies:m?["rank","type","type","type","type"]:void 0},getShaderSource:k,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m?[{type:12,data:h},...pe(u)]:[{type:12,data:h}]})}},Tf=t=>Ae(t),zf=(t,n)=>{let{inputs:a,outputCount:o}=t,l=Tf({...n,outputCount:o});if(H.webgpu.validateInputContent&&Sf(a,l),n.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");t.compute(Ef(a,l))}}),Cf,If,Nf,R_=_(()=>{_e(),xe(),Cf=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},If=t=>{let n=t[0].dims,a=t[0].dims[2],o=U.size(n)/4,l=t[0].dataType,u=W("input",l,n,4),d=W("bias",l,[a],4),p=W("residual",l,n,4),h=oe("output",l,n,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:m=>`
  const channels = ${a}u / 4;
  ${m.declareVariables(u,d,p,h)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let value = ${u.getByOffset("global_idx")}
      + ${d.getByOffset("global_idx % channels")} + ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx","value")}
  }`}},Nf=t=>{Cf(t.inputs),t.compute(If(t.inputs))}}),Rf,Oe,Of,Af,Mf,Pf,Bf,Df,Lf,jf,Uf,Vf,Wf,Ff,qf,Gf,Mi,Hf,Ya,Kf,Qf,Xf,Zf,Yf,Jf,eh,th,rh,nh,ih,ah,sh,oh,lh,uh,hl,dh,ml,gl,ch,ph,fh,hh,mh,gh,yl=_(()=>{ve(),_e(),Ke(),xe(),Rf=(t,n,a,o,l,u,d)=>{let p=Math.ceil(n/4),h="";typeof l=="string"?h=`${l}(a)`:h=l("a");let m=W("inputData",a,[p],4),y=oe("outputData",o,[p],4),v=[{name:"vec_size",type:"u32"}];return d&&v.push(...d),`
      ${t.registerUniforms(v).declareVariables(m,y)}

  ${u??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${m.getByOffset("global_idx")};
    ${y.setByOffset("global_idx",h)}
  }`},Oe=(t,n,a,o,l,u=t.dataType,d,p)=>{let h=[{type:12,data:Math.ceil(U.size(t.dims)/4)}];return d&&h.push(...d),{name:n,shaderCache:{hint:l,inputDependencies:["type"]},getShaderSource:m=>Rf(m,U.size(t.dims),t.dataType,u,a,o,p),getRunData:m=>({outputs:[{dims:t.dims,dataType:u}],dispatchGroup:{x:Math.ceil(U.size(m[0].dims)/64/4)},programUniforms:h})}},Of=t=>{t.compute(Oe(t.inputs[0],"Abs","abs"))},Af=t=>{t.compute(Oe(t.inputs[0],"Acos","acos"))},Mf=t=>{t.compute(Oe(t.inputs[0],"Acosh","acosh"))},Pf=t=>{t.compute(Oe(t.inputs[0],"Asin","asin"))},Bf=t=>{t.compute(Oe(t.inputs[0],"Asinh","asinh"))},Df=t=>{t.compute(Oe(t.inputs[0],"Atan","atan"))},Lf=t=>{t.compute(Oe(t.inputs[0],"Atanh","atanh"))},jf=t=>Ae(t),Uf=(t,n)=>{let a;switch(n.to){case 10:a="vec4<f16>";break;case 1:a="vec4<f32>";break;case 12:a="vec4<u32>";break;case 6:a="vec4<i32>";break;case 9:a="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${n.to}`)}t.compute(Oe(t.inputs[0],"Cast",a,void 0,n.cacheKey,n.to))},Vf=t=>{let n,a,o=t.length>=2&&t[1].data!==0,l=t.length>=3&&t[2].data!==0;switch(t[0].dataType){case 1:n=o?t[1].getFloat32Array()[0]:-34028234663852886e22,a=l?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:n=o?t[1].getUint16Array()[0]:64511,a=l?t[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ae({min:n,max:a})},Wf=(t,n)=>{let a=n||Vf(t.inputs),o=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"Clip",l=>`clamp(${l}, vec4<${o}>(uniforms.min), vec4<${o}>(uniforms.max))`,void 0,a.cacheKey,void 0,[{type:t.inputs[0].dataType,data:a.min},{type:t.inputs[0].dataType,data:a.max}],[{name:"min",type:o},{name:"max",type:o}]),{inputs:[0]})},Ff=t=>{t.compute(Oe(t.inputs[0],"Ceil","ceil"))},qf=t=>{t.compute(Oe(t.inputs[0],"Cos","cos"))},Gf=t=>{t.compute(Oe(t.inputs[0],"Cosh","cosh"))},Mi=t=>Ae(t),Hf=(t,n)=>{let a=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"Elu",o=>`elu_vf32(${o})`,`
  const elu_alpha_ = ${a}(${n.alpha});

  fn elu_f32(a: ${a}) -> ${a} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${a}>) -> vec4<${a}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,n.cacheKey))},Ya=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Kf=t=>{let n=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"Erf",a=>`erf_vf32(${a})`,Ya(n)))},Qf=t=>{t.compute(Oe(t.inputs[0],"Exp","exp"))},Xf=t=>{t.compute(Oe(t.inputs[0],"Floor","floor"))},Zf=t=>{let n=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"Gelu",a=>`0.5 * ${a} * (1.0 + erf_vf32(${a} * 0.7071067811865475))`,Ya(n)))},Yf=(t,n)=>{let a=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"LeakyRelu",o=>`select(leaky_relu_alpha_ * ${o}, ${o}, ${o} >= vec4<${a}>(0.0))`,`const leaky_relu_alpha_ = ${a}(${n.alpha});`,n.cacheKey))},Jf=t=>{t.compute(Oe(t.inputs[0],"Not",n=>`!${n}`))},eh=t=>{t.compute(Oe(t.inputs[0],"Neg",n=>`-${n}`))},th=t=>{t.compute(Oe(t.inputs[0],"Reciprocal",n=>`1.0/${n}`))},rh=t=>{let n=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"Relu",a=>`select(vec4<${n}>(0.0), ${a}, ${a} > vec4<${n}>(0.0))`))},nh=t=>{t.compute(Oe(t.inputs[0],"Sigmoid",n=>`(1.0 / (1.0 + exp(-${n})))`))},ih=t=>Ae(t),ah=(t,n)=>{let a=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"HardSigmoid",o=>`max(vec4<${a}>(0.0), min(vec4<${a}>(1.0), ${n.alpha} * ${o} + vec4<${a}>(${n.beta})))`,void 0,n.cacheKey))},sh=t=>{t.compute(Oe(t.inputs[0],"Sin","sin"))},oh=t=>{t.compute(Oe(t.inputs[0],"Sinh","sinh"))},lh=t=>{t.compute(Oe(t.inputs[0],"Sqrt","sqrt"))},uh=t=>{t.compute(Oe(t.inputs[0],"Tan","tan"))},hl=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,dh=t=>{t.compute(Oe(t.inputs[0],"Tanh",hl))},ml=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${hl("v")};
}
`,gl=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,ch=t=>{let n=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"FastGelu",gl,ml(n),void 0,t.inputs[0].dataType))},ph=(t,n)=>{let a=wt(t.inputs[0].dataType);return t.compute(Oe(t.inputs[0],"ThresholdedRelu",o=>`select(vec4<${a}>(0.0), ${o}, ${o} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${a}>(${n.alpha});`,n.cacheKey)),0},fh=t=>{t.compute(Oe(t.inputs[0],"Log","log"))},hh=(t,n)=>`
const alpha = vec4<${t}>(${n});
const one = ${t}(1.0);
const zero = ${t}(0.0);

fn quick_gelu_impl(x: vec4<${t}>) -> vec4<${t}> {
  let v = x *alpha;
  var x1 : vec4<${t}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,mh=t=>`quick_gelu_impl(${t})`,gh=(t,n)=>{let a=wt(t.inputs[0].dataType);t.compute(Oe(t.inputs[0],"QuickGelu",mh,hh(a,n.alpha),n.cacheKey,t.inputs[0].dataType))}}),yh,vh,wh,O_=_(()=>{_e(),xe(),yl(),yh=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vh=t=>{let n=t[0].dims.slice();n[2]=n[2]/2;let a=W("input",t[0].dataType,t[0].dims,4),o=W("bias",t[0].dataType,[t[0].dims[2]],4),l=oe("output",t[0].dataType,n,4),u=U.size(n)/4,d=st(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:p=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${p.declareVariables(a,o,l)}

  ${Ya(d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(u)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${l.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},wh=t=>{yh(t.inputs),t.compute(vh(t.inputs))}}),_h,xh,dr,$h,bh,kh,Sh,Eh,Th,zh,Ch,Ih,Nh,A_=_(()=>{ve(),_e(),xe(),_h=(t,n,a,o,l,u,d,p,h,m,y,v)=>{let w,x;typeof p=="string"?w=x=(k,I)=>`${p}((${k}),(${I}))`:typeof p=="function"?w=x=p:(w=p.scalar,x=p.vector);let $=oe("outputData",y,o.length,4),S=W("aData",h,n.length,4),z=W("bData",m,a.length,4),E;if(l)if(u){let k=U.size(n)===1,I=U.size(a)===1,C=n.length>0&&n[n.length-1]%4===0,O=a.length>0&&a[a.length-1]%4===0;k||I?E=$.setByOffset("global_idx",x(k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),I?`${z.type.value}(${z.getByOffset("0")}.x)`:z.getByOffset("global_idx"))):E=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${z.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",x(d||C?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,d||O?z.getByOffset("offsetB / 4u"):`${z.type.value}(${z.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else E=$.setByOffset("global_idx",x(S.getByOffset("global_idx"),z.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let k=(I,C,O="")=>{let j=`aData[indexA${C}][componentA${C}]`,L=`bData[indexB${C}][componentB${C}]`;return`
            let outputIndices${C} = ${$.offsetToIndices(`global_idx * 4u + ${C}u`)};
            let offsetA${C} = ${S.broadcastedIndicesToOffset(`outputIndices${C}`,$)};
            let offsetB${C} = ${z.broadcastedIndicesToOffset(`outputIndices${C}`,$)};
            let indexA${C} = offsetA${C} / 4u;
            let indexB${C} = offsetB${C} / 4u;
            let componentA${C} = offsetA${C} % 4u;
            let componentB${C} = offsetB${C} % 4u;
            ${I}[${C}] = ${O}(${w(j,L)});
          `};y===9?E=`
            var data = vec4<u32>(0);
            ${k("data",0,"u32")}
            ${k("data",1,"u32")}
            ${k("data",2,"u32")}
            ${k("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:E=`
            ${k("outputData[global_idx]",0)}
            ${k("outputData[global_idx]",1)}
            ${k("outputData[global_idx]",2)}
            ${k("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(S,z,$)}

        ${v??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${E}
      }`},xh=(t,n,a,o,l,u,d=a.dataType)=>{let p=a.dims.map(Number),h=o.dims.map(Number),m=!U.areEqual(p,h),y=p,v=U.size(p),w=!1,x=!1,$=[m];if(m){let S=Qn.calcShape(p,h,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");y=S.slice(),v=U.size(y);let z=U.size(p)===1,E=U.size(h)===1,k=p.length>0&&p[p.length-1]%4===0,I=h.length>0&&h[h.length-1]%4===0;$.push(z),$.push(E),$.push(k),$.push(I);let C=1;for(let O=1;O<y.length;O++){let j=p[p.length-O],L=h[h.length-O];if(j===L)C*=j;else break}C%4===0?(x=!0,w=!0):(z||E||k||I)&&(w=!0)}else w=!0;return $.push(w),{name:t,shaderCache:{hint:n+$.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>_h(S,p,h,y,w,m,x,l,a.dataType,o.dataType,d,u),getRunData:()=>({outputs:[{dims:y,dataType:d}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(y)/4)},...pe(p,h,y)]})}},dr=(t,n,a,o,l,u)=>{t.compute(xh(n,l??"",t.inputs[0],t.inputs[1],a,o,u))},$h=t=>{dr(t,"Add",(n,a)=>`${n}+${a}`)},bh=t=>{dr(t,"Div",(n,a)=>`${n}/${a}`)},kh=t=>{dr(t,"Equal",{scalar:(n,a)=>`u32(${n}==${a})`,vector:(n,a)=>`vec4<u32>(${n}==${a})`},void 0,void 0,9)},Sh=t=>{dr(t,"Mul",(n,a)=>`${n}*${a}`)},Eh=t=>{let n=W("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;dr(t,"Pow",{scalar:(a,o)=>`pow_custom(${a},${o})`,vector:(a,o)=>`pow_vector_custom(${a},${o})`},`
    fn pow_custom(a : ${n}, b : ${n}) -> ${n} {
      if (b == ${n}(0.0)) {
        return ${n}(1.0);
      } else if (a < ${n}(0.0) && f32(b) != floor(f32(b))) {
        return ${n}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${n}(1.0), round(f32(abs(b) % ${n}(2.0))) != 1.0) * ${n}(${n==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${n}>, b : vec4<${n}>) -> vec4<${n}> {
      // TODO: implement vectorized pow
      return vec4<${n}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Th=t=>{dr(t,"Sub",(n,a)=>`${n}-${a}`)},zh=t=>{dr(t,"Greater",{scalar:(n,a)=>`u32(${n}>${a})`,vector:(n,a)=>`vec4<u32>(${n}>${a})`},void 0,void 0,9)},Ch=t=>{dr(t,"Less",{scalar:(n,a)=>`u32(${n}<${a})`,vector:(n,a)=>`vec4<u32>(${n}<${a})`},void 0,void 0,9)},Ih=t=>{dr(t,"GreaterOrEqual",{scalar:(n,a)=>`u32(${n}>=${a})`,vector:(n,a)=>`vec4<u32>(${n}>=${a})`},void 0,void 0,9)},Nh=t=>{dr(t,"LessOrEqual",{scalar:(n,a)=>`u32(${n}<=${a})`,vector:(n,a)=>`vec4<u32>(${n}<=${a})`},void 0,void 0,9)}}),Rh,Oh,Ah,Mh,Ph,Bh,M_=_(()=>{ve(),_e(),Ke(),xe(),Rh=(t,n)=>{if(!t||t.length<1)throw new Error("too few inputs");let a=0,o=t[a],l=o.dataType,u=o.dims.length;t.forEach((d,p)=>{if(p!==a){if(d.dataType!==l)throw new Error("input tensors should be one type");if(d.dims.length!==u)throw new Error("input tensors should have the same shape");d.dims.forEach((h,m)=>{if(m!==n&&h!==o.dims[m])throw new Error("non concat dimensions must match")})}})},Oh=(t,n)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${t}u>(${n});
    for (var i: u32 = 0u; i < ${t}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${t}u;
  }`,Ah=(t,n)=>{let a=t.length,o=[];for(let l=0;l<a;++l){let u=n.setByOffset("global_idx",t[l].getByIndices("indices"));a===1?o.push(u):l===0?o.push(`if (inputIndex == ${l}u) { ${u} }`):l===a-1?o.push(`else { ${u} }`):o.push(`else if (inputIndex == ${l}) { ${u} }`)}return o.join(`
`)},Mh=(t,n,a,o)=>{let l=U.size(a),u=new Array(t.length),d=new Array(t.length),p=0,h=[],m=[],y=[{type:12,data:l}];for(let S=0;S<t.length;++S)p+=t[S].dims[n],u[S]=p,m.push(t[S].dims.length),d[S]=W(`input${S}`,o,m[S]),h.push("rank"),y.push({type:12,data:u[S]});for(let S=0;S<t.length;++S)y.push(...pe(t[S].dims));y.push(...pe(a));let v=oe("output",o,a.length),w=v.indicesGet("indices",n),x=Array.from(Array(u.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),$=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let z=0;z<t.length;z++)S.registerUniform(`sizeInConcatAxis${z}`,"u32");return S.declareVariables(...d,v)})()}

  ${Oh(u.length,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${v.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${w});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${u.length}u>(${x});
      ${w} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ah(d,v)}
  }`;return{name:"Concat",shaderCache:{hint:`${n}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:y}),getShaderSource:$}},Ph=(t,n)=>{let a=t.inputs,o=a[0].dims,l=U.normalizeAxis(n.axis,o.length);Rh(a,l);let u=o.slice();u[l]=a.reduce((p,h)=>p+(h.dims.length>l?h.dims[l]:0),0);let d=a.filter(p=>U.size(p.dims)>0);t.compute(Mh(d,l,u,a[0].dataType),{inputs:d})},Bh=t=>Ae({axis:t.axis})}),Sn,En,Tn,vl,zn=_(()=>{ve(),_e(),Sn=(t,n,a="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${n}(0.0));`;case"Sigmoid":return`value = (${n}(1.0) / (${n}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${n}(${a}(uniforms.clip_min)), ${n}(${a}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${n}(0.0), min(${n}(1.0), ${a}(uniforms.alpha) * value + ${a}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${a}(uniforms.alpha) * value, value, value >= ${n}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${t.activation}`)}},En=(t,n)=>{t.activation==="Clip"?n.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):t.activation==="HardSigmoid"?n.push({type:1,data:t.alpha},{type:1,data:t.beta}):t.activation==="LeakyRelu"&&n.push({type:1,data:t.alpha})},Tn=(t,n)=>{t.activation==="Clip"?n.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):t.activation==="HardSigmoid"?n.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):t.activation==="LeakyRelu"&&n.push({name:"alpha",type:"f32"})},vl=t=>{let n=(t==null?void 0:t.activation)||"";if(n==="HardSigmoid"){let[a,o]=(t==null?void 0:t.activation_params)||[.2,.5];return{activation:n,alpha:a,beta:o}}else if(n==="Clip"){let[a,o]=(t==null?void 0:t.activation_params)||[ap,sp];return{activation:n,clipMax:o,clipMin:a}}else if(n==="LeakyRelu"){let[a]=(t==null?void 0:t.activation_params)||[.01];return{activation:n,alpha:a}}return{activation:n}}}),ut,Dh,wl=_(()=>{ut=(t,n)=>{switch(t){case 1:return n;case 2:return`vec2<${n}>`;case 3:return`vec3<${n}>`;case 4:return`vec4<${n}>`;default:throw new Error(`${t}-component is not supported.`)}},Dh=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Lh,P_=_(()=>{Lh=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),Pi,_l,xl=_(()=>{ve(),_e(),xe(),zn(),Pi=(t,n,a,o,l)=>{let u=o-a;return`
      ${Array.from({length:a}).map((d,p)=>`
      if (${de(n.shape,p,n.rank)} != 1) {
        ${n.indicesSet(t,p,de(l,p+u,o))}
      } else {
        ${n.indicesSet(t,p,0)}
      }`).join("")}
`},_l=(t,n,a,o,l=!1,u)=>{let d=t[0].dims,p=t[1].dims,h=d[d.length-2],m=p[p.length-1],y=d[d.length-1],v=Ge(m),w=Ge(y),x=Ge(h),$=U.size(a)/v/x,S=t.length>2,z=o?o.slice(0,-2):a.slice(0,-2),E=[U.size(z),h,m],k=[{type:12,data:$},{type:12,data:h},{type:12,data:m},{type:12,data:y}];En(n,k),k.push(...pe(z,d,p)),S&&k.push(...pe(t[2].dims)),k.push(...pe(E));let I=C=>{let O=ol("batch_dims",t[0].dataType,z.length),j=W("a",t[0].dataType,d.length,w),L=W("b",t[1].dataType,p.length,v),V=oe("output",t[0].dataType,E.length,v),F=st(V.type.tensor),J=Sn(n,V.type.value,F),ge=[j,L],fe="";if(S){let Ce=l?v:1;ge.push(W("bias",t[2].dataType,t[2].dims.length,Ce)),fe=`${l?`value += bias[col / ${Ce}];`:`value += ${V.type.value}(bias[row + i]);`}`}let he=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Tn(n,he);let Se=()=>{let Ce=`var a_data: ${j.type.value};`;for(let me=0;me<w;me++)Ce+=`
              let b_data${me} = b[(b_offset + (k + ${me}) * uniforms.N + col) / ${v}];`;for(let me=0;me<x;me++){Ce+=`a_data = a[(a_offset + (row + ${me}) * uniforms.K + k) / ${w}];`;for(let we=0;we<w;we++)Ce+=`
            values[${me}] = fma(${L.type.value}(a_data${w===1?"":`[${we}]`}), b_data${we}, values[${me}]);
`}return Ce};return`
  ${C.registerUniforms(he).registerInternalVariables(O).declareVariables(...ge,V)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${v})) * ${v};
    var index1 = global_idx / (uniforms.N / ${v});
    let stride1 = uniforms.M / ${x};
    let row = (index1 % stride1) * ${x};
    let batch = index1 / stride1;

    ${a.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${j.type.indices};
    ${Pi("a_indices",j,j.rank-2,O.rank,"batch_indices")}
    ${j.indicesSet("a_indices",j.rank-2,0)}
    ${j.indicesSet("a_indices",j.rank-1,0)}
    let a_offset = ${j.indicesToOffset("a_indices")};

    var b_indices: ${L.type.indices};
    ${Pi("b_indices",L,L.rank-2,O.rank,"batch_indices")}
    ${L.indicesSet("b_indices",L.rank-2,0)}
    ${L.indicesSet("b_indices",L.rank-1,0)}
    let b_offset = ${L.indicesToOffset("b_indices")};
    var values: array<${V.type.value}, ${x}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${w}) {
      ${Se()}
    }
    for (var i = 0u; i < ${x}u; i++) {
      var value = values[i];
      ${fe}
      ${J}
      let cur_indices = ${V.type.indices}(batch, row + i, col);
      let offset = ${V.indicesToOffset("cur_indices")};
      ${V.setByOffset(`offset / ${v}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${n.activation};${v};${w};${x};${l}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(a):a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:k}),getShaderSource:I}}}),jh,Uh,$l,bl,Vh,kl,Wh,Ja,Sl=_(()=>{ve(),_e(),xe(),zn(),xl(),wl(),jh=(t,n)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${n?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${n?", batchIndices":""});
        `,Uh=(t,n)=>t?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${n===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${n===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${n===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,$l=(t,n,a="f32",o,l=!1,u=32,d=!1,p=32)=>{let h=n[1]*t[1],m=n[0]*t[0],y=l?h:u,v=l?u:h,w=y/n[0],x=u/n[1];if(!((l&&w===4&&t[1]===4||!l&&(w===3||w===4))&&y%n[0]===0&&u%n[1]===0&&t[0]===4))throw new Error(`If transposeA ${l} is true, innerElementSize ${w} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${w} must be 3 or 4.
  tileAWidth ${y} must be divisible by workgroupSize[0]${n[0]}. tileInner ${u} must be divisible by workgroupSize[1] ${n[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${w}<${a}>, ${y/w}>, ${v}>;
var<workgroup> mm_Bsub: array<array<vec4<${a}>, ${m/t[0]}>, ${u}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${w};
const tileInner = ${u};

@compute @workgroup_size(${n[0]}, ${n[1]}, ${n[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${d?"0":"i32(globalId.z)"};
  ${o?`let batchIndices = ${o.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${h};

  let num_tiles = ${d?`${Math.ceil(p/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${d?`i32(globalId.z) * ${p}`:"0"};

  var acc: array<vec4<${a}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${x};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${jh(l,o)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${o?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${w===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Uh(l,w)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},bl=(t,n)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${n?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${n?", batchIndices":""});
            `,Vh=t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",kl=(t,n,a="f32",o,l=!1,u=32,d=!1,p=32,h=!1)=>{let m=t[1]*n[1],y=t[0]*n[0],v=l?m:u,w=l?u:m;if(!(w%n[1]===0&&v%n[0]===0&&u%n[1]===0))throw new Error(`tileAHight ${w} must be divisible by workgroupSize[1]${n[1]}, tileAWidth ${v} must be divisible by workgroupSize[0]${n[0]}, tileInner ${u} must be divisible by workgroupSize[1]${n[1]}`);let x=w/n[1],$=v/n[0],S=u/n[1],z=h?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${m};
    let globalColStart = i32(workgroupId.x) * ${y};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${w}; inputRow = inputRow + ${n[1]}) {
        for (var inputCol = localCol; inputCol < ${v}; inputCol = inputCol + ${n[0]}) {
          ${bl(l,o)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${n[1]}) {
            for (var inputCol = localCol; inputCol < ${y}; inputCol = inputCol + ${n[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${o?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${a}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${n[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${l?`mm_Asub[k][localRow + innerRow * ${n[1]}];`:`mm_Asub[localRow + innerRow * ${n[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${n[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${n[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${m};

let tileRowA = i32(localId.y) * ${x};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${S};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${bl(l,o)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${o?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${a}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Vh(l)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${a}, ${v}>, ${w}>;
  var<workgroup> mm_Bsub : array<array<${a}, ${y}>, ${u}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${u};

@compute @workgroup_size(${n[0]}, ${n[1]}, ${n[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${d?"0":"i32(globalId.z)"};
    ${o?`let batchIndices = ${o.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${d?`${Math.ceil(p/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${d?`i32(globalId.z) * ${p}`:"0"};

    var acc : array<array<${a}, colPerThread>, rowPerThread>;
    ${z}
  }
`},Wh=(t,n,a,o,l=!1)=>{let[u,d,p,h]=o,m=st(o[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${ut(t,m)} {
      var value = ${ut(t,m)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${d.type.indices};
        ${Pi("aIndices",d,d.rank-2,u.rank,"batchIndices")}
        ${d.indicesSet("aIndices",d.rank-2,"u32(row)")}
        ${d.indicesSet("aIndices",d.rank-1,"u32(colIn)")}
        value = ${d.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${ut(t,m)} {
      var value = ${ut(t,m)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${p.type.indices};
        ${Pi("bIndices",p,p.rank-2,u.rank,"batchIndices")}
        ${p.indicesSet("bIndices",p.rank-2,"u32(row)")}
        ${p.indicesSet("bIndices",p.rank-1,"u32(colIn)")}
        value = ${p.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ut(t,m)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${n?`value = value + ${l?"bias[colIn]":`${ut(t,m)}(bias[row])`};`:""}
        ${a}
        ${h.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ja=(t,n,a,o,l=!1,u)=>{let d=t[0].dims,p=t[1].dims,h=d.slice(0,-2),m=p.slice(0,-2),y=o?o.slice(0,-2):a.slice(0,-2),v=U.size(y),w=d[d.length-2],x=d[d.length-1],$=p[p.length-1],S=x%4===0&&$%4===0,z=w<=8?[4,1,1]:[4,4,1],E=[8,8,1],k=[Math.ceil($/E[0]/z[0]),Math.ceil(w/E[1]/z[1]),Math.ceil(v/E[2]/z[2])],I=S?4:1,C=[...h,w,x/I],O=C.length,j=[...m,x,$/I],L=j.length,V=[v,w,$/I],F=[{type:6,data:w},{type:6,data:$},{type:6,data:x}];En(n,F),F.push(...pe(y,C,j));let J=["rank","rank"],ge=t.length>2;ge&&(F.push(...pe(t[2].dims)),J.push("rank")),F.push(...pe(V));let fe=he=>{let Se=y.length,Ce=ol("batchDims",t[0].dataType,Se,1),me=st(t[0].dataType),we=W("a",t[0].dataType,O,I),et=W("b",t[1].dataType,L,I),re=oe("result",t[0].dataType,V.length,I),Ne=[we,et];if(ge){let De=l?I:1;Ne.push(W("bias",t[2].dataType,t[2].dims.length,De))}let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Tn(n,Z);let se=st(re.type.tensor),ce=Sn(n,re.type.value,se),ne=Wh(I,ge,ce,[Ce,we,et,re],l);return`
  ${he.registerUniforms(Z).registerInternalVariables(Ce).declareVariables(...Ne,re)}
  ${ne}
  ${S?$l(z,E,me,Ce):kl(z,E,me,Ce)}
                   `};return{name:"MatMul",shaderCache:{hint:`${z};${n.activation};${S};${l}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:u?u(a):a,dataType:t[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:F}),getShaderSource:fe}}}),Fh,qh,B_=_(()=>{ve(),Nr(),xe(),zn(),wl(),P_(),Sl(),Fh=(t,n,a,o,l=!1,u,d=4,p=4,h=4,m="f32")=>{let y=F=>{switch(F){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${m}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${F} is not supported.`)}},v=F=>{switch(F){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${F} is not supported.`)}},w=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,x=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",S=t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",z=t?"row":"col",E=t?"col":"row",k=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${z} / outWidth;
    let outCol = ${z} % outWidth;

    let WRow = ${E} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${E} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${E} % inChannels;
    var resData = ${ut(d,m)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${S}) {
      ${w}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${y(d)}
    }
    return resData;`,I=t?n&&o?`
    let col = colIn * ${d};
    ${k}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${k}
    }
    return ${ut(d,m)}(0.0);`:o&&a?`
    let col = colIn * ${d};
    ${k}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${k}
    }
    return ${ut(d,m)}(0.0);`,C=t?o&&a?v(p):`
    let col = colIn * ${p};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v(p)}
    }
    return ${ut(p,m)}(0.0);`:`
    let col = colIn * ${p};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${v(p)}
    }
    return ${ut(p,m)}(0.0);`,O=ut(h,m),j=ut(t?d:p,m),L=ut(t?p:d,m),V=Sn(u,O,m);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${j} {
      ${t?I:C}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${L} {
      ${t?C:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${h};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${x}
      ${Dh(l)}
      ${V}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},qh=(t,n,a,o,l,u,d,p,h)=>{let m=n.format==="NHWC",y=m?t[0].dims[3]:t[0].dims[1],v=a[0],w=m?a[2]:a[3],x=m?a[1]:a[2],$=m?a[3]:a[1],S=m&&(y%4===0||y%3===0)&&$%4===0,z=m?$:w*x,E=m?w*x:$,k=[8,8,1],I=o<=8?[4,1,1]:[4,4,1],C=[Math.ceil(z/k[0]/I[0]),Math.ceil(E/k[1]/I[1]),Math.ceil(v/k[2]/I[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${C}`);let O=S?m&&y%4!==0?3:4:1,j=k[1]*I[1],L=k[0]*I[0],V=Math.max(k[0]*O,k[1]),F=o%j===0,J=l%L===0,ge=u%V===0,fe=S?[O,4,4]:[1,1,1],he=[{type:6,data:o},{type:6,data:l},{type:6,data:u},{type:6,data:[n.pads[0],n.pads[1]]},{type:6,data:n.strides},{type:6,data:n.dilations}];En(n,he),he.push(...pe(t[0].dims,t[1].dims));let Se=["rank","rank"];d&&(he.push(...pe(t[2].dims)),Se.push("rank")),he.push(...pe(a));let Ce=me=>{let we=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Tn(n,we);let et=S?4:1,re=st(t[0].dataType),Ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${S?`vec4<${re}>`:re}) {
        result[flatIndex] = ${S?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${S?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${S?"/ 4":""}, value);
      }`,Z=W("x",t[0].dataType,t[0].dims.length,O===3?1:O),se=W("w",t[1].dataType,t[1].dims.length,et),ce=[Z,se],ne=oe("result",t[0].dataType,a.length,et);if(d){let De=W("bias",t[2].dataType,t[2].dims.length,et);ce.push(De),Ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${S?`vec4<${re}>`:re} {
          return bias[coords.${m?"w":"y"}${S?"/ 4":""}];
        }`}return`
        ${Lh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${me.registerUniforms(we).declareVariables(...ce,ne)}
        ${Ne}
        ${Fh(m,F,J,ge,d,n,fe[0],fe[1],fe[2],re)}
        ${S?$l(I,k,re,void 0,!m,V):kl(I,k,re,void 0,!m,V,!1,void 0,p)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${n.cacheKey};${O};${S};${F};${J};${ge};${j};${L};${V}`,inputDependencies:Se},getRunData:()=>({outputs:[{dims:h?h(a):a,dataType:t[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:he}),getShaderSource:Ce}}}),Gh,El,Bi,Hh,Tl,Kh,Qh,Xh,D_=_(()=>{ve(),Nr(),_e(),xe(),zn(),wl(),Gh=t=>{let n=1;for(let a=0;a<t.length;a++)n*=t[a];return n},El=t=>typeof t=="number"?[t,t,t]:t,Bi=(t,n)=>n<=1?t:t+(t-1)*(n-1),Hh=(t,n,a,o=1)=>{let l=Bi(n,o);return Math.floor((t[0]*(a-1)-a+l)/2)},Tl=(t,n,a,o,l)=>{l==null&&(l=Hh(t,n[0],o[0]));let u=[0,0,0,a];for(let d=0;d<3;d++)t[d]+2*l>=n[d]&&(u[d]=Math.trunc((t[d]-n[d]+2*l)/o[d]+1));return u},Kh=(t,n,a,o,l,u,d,p,h,m)=>{let y,v,w,x;if(t==="VALID"&&(t=0),typeof t=="number"){y={top:t,bottom:t,left:t,right:t,front:t,back:t};let $=Tl([n,a,o,1],[p,h,m],1,[l,u,d],t);v=$[0],w=$[1],x=$[2]}else if(Array.isArray(t)){if(!t.every((S,z,E)=>S===E[0]))throw Error(`Unsupported padding parameter: ${t}`);y={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let $=Tl([n,a,o,1],[p,h,m],1,[l,u,d],t[0]);v=$[0],w=$[1],x=$[2]}else if(t==="SAME_UPPER"){v=Math.ceil(n/l),w=Math.ceil(a/u),x=Math.ceil(o/d);let $=(v-1)*l+p-n,S=(w-1)*u+h-a,z=(x-1)*d+m-o,E=Math.floor($/2),k=$-E,I=Math.floor(S/2),C=S-I,O=Math.floor(z/2),j=z-O;y={top:I,bottom:C,left:O,right:j,front:E,back:k}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:y,outDepth:v,outHeight:w,outWidth:x}},Qh=(t,n,a,o,l,u=!1,d="channelsLast")=>{let p,h,m,y,v;if(d==="channelsLast")[p,h,m,y,v]=t;else if(d==="channelsFirst")[p,v,h,m,y]=t;else throw new Error(`Unknown dataFormat ${d}`);let[w,,x,$,S]=n,[z,E,k]=El(a),[I,C,O]=El(o),j=Bi(x,I),L=Bi($,C),V=Bi(S,O),{padInfo:F,outDepth:J,outHeight:ge,outWidth:fe}=Kh(l,h,m,y,z,E,k,j,L,V),he=u?w*v:w,Se=[0,0,0,0,0];return d==="channelsFirst"?Se=[p,he,J,ge,fe]:d==="channelsLast"&&(Se=[p,J,ge,fe,he]),{batchSize:p,dataFormat:d,inDepth:h,inHeight:m,inWidth:y,inChannels:v,outDepth:J,outHeight:ge,outWidth:fe,outChannels:he,padInfo:F,strideDepth:z,strideHeight:E,strideWidth:k,filterDepth:x,filterHeight:$,filterWidth:S,effectiveFilterDepth:j,effectiveFilterHeight:L,effectiveFilterWidth:V,dilationDepth:I,dilationHeight:C,dilationWidth:O,inShape:t,outShape:Se,filterShape:n}},Xh=(t,n,a,o,l,u)=>{let d=u==="channelsLast";d?t[0].dims[3]:t[0].dims[1];let p=[64,1,1],h={x:a.map((z,E)=>E)},m=[Math.ceil(Gh(h.x.map(z=>a[z]))/p[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${m}`);let y=1,v=U.size(a),w=[{type:12,data:v},{type:12,data:o},{type:12,data:l},{type:12,data:n.strides},{type:12,data:n.dilations}];En(n,w),w.push(...pe(t[0].dims,t[1].dims));let x=["rank","rank"],$=t.length===3;$&&(w.push(...pe(t[2].dims)),x.push("rank")),w.push(...pe(a));let S=z=>{let E=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:o.length},{name:"pads",type:"u32",length:l.length},{name:"strides",type:"u32",length:n.strides.length},{name:"dilations",type:"u32",length:n.dilations.length}];Tn(n,E);let k=1,I=st(t[0].dataType),C=W("x",t[0].dataType,t[0].dims.length,y),O=W("W",t[1].dataType,t[1].dims.length,k),j=[C,O],L=oe("result",t[0].dataType,a.length,k),V="";if($){let ge=W("bias",t[2].dataType,t[2].dims.length,k);j.push(ge),V+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${d?de("coords",4,5):de("coords",1,5)}];
        }`}let F=ut(y,I),J=Sn(n,F,I);return`
            ${V}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
          ${z.registerUniforms(E).declareVariables(...j,L)}
          ${z.mainStart()}
          ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${L.offsetToIndices("global_idx")};
              let batch = ${de("coords",0,C.rank)};
              let d2 = ${d?de("coords",C.rank-1,C.rank):de("coords",1,C.rank)};
              let xFRCCorner = vec3<u32>(${d?de("coords",1,C.rank):de("coords",2,C.rank)},
              ${d?de("coords",2,C.rank):de("coords",3,C.rank)},
              ${d?de("coords",3,C.rank):de("coords",4,C.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${d?de("uniforms.x_shape",1,C.rank):de("uniforms.x_shape",2,C.rank)};
              let xShapeZ = ${d?de("uniforms.x_shape",2,C.rank):de("uniforms.x_shape",3,C.rank)};
              let xShapeW = ${d?de("uniforms.x_shape",3,C.rank):de("uniforms.x_shape",4,C.rank)};
              let xShapeU = ${d?de("uniforms.x_shape",4,C.rank):de("uniforms.x_shape",1,C.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${d?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${d?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${d?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${d?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${J}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${n.cacheKey};${d};${y};${$}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:w}),getShaderSource:S}}}),Zh,Yh,L_=_(()=>{ve(),_e(),xe(),zn(),Zh=(t,n,a,o)=>{let l=t.length>2,u=l?"value += b[output_channel];":"",d=t[0].dims,p=t[1].dims,h=n.format==="NHWC",m=h?a[3]:a[1],y=m/n.group,v=h&&y>=4?Ge(m):1,w=U.size(a)/v,x=[{type:12,data:w},{type:12,data:n.dilations},{type:12,data:[n.strides[0],n.strides[1]]},{type:12,data:[n.pads[0],n.pads[1]]},{type:12,data:y}];En(n,x),x.push(...pe(d,[p[0],p[1],p[2],p[3]/v]));let $=l?["rank","rank","rank"]:["rank","rank"];x.push(...pe([a[0],a[1],a[2],a[3]/v]));let S=z=>{let E=oe("output",t[0].dataType,a.length,v),k=st(E.type.tensor),I=Sn(n,E.type.value,k),C=W("x",t[0].dataType,d.length),O=W("w",t[1].dataType,p.length,v),j=[C,O];l&&j.push(W("b",t[2].dataType,t[2].dims,v));let L=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:n.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Tn(n,L);let V=h?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${C.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${O.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${C.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${z.registerUniforms(L).declareVariables(...j,E)}

  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${E.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${h?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${h?1:2}], outputIndices[${h?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${v} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${h?2:1}];

    var value: ${E.type.value} = ${E.type.value}(0);
    ${V}
    ${u}
    ${I}
    ${E.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${n.cacheKey}_${v}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o?o(a):a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:x}),getShaderSource:S}},Yh=(t,n,a,o)=>{let l=t.length>2,u=Ge(a[3]),d=Ge(a[2]),p=U.size(a)/u/d,h=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/u],m=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/u],y=[a[0],a[1],a[2],a[3]/u],v=[{type:12,data:p},{type:6,data:[n.strides[0],n.strides[1]]},{type:6,data:[n.pads[0],n.pads[1]]}];En(n,v),v.push(...pe(h,m,y));let w=(d-1)*n.strides[1]+m[1],x=$=>{let S=oe("output",t[0].dataType,y.length,u),z=st(S.type.tensor),E=Sn(n,S.type.value,z),k=W("x",t[0].dataType,h.length,u),I=W("w",t[1].dataType,m.length,u),C=[k,I];l&&C.push(W("b",t[2].dataType,t[2].dims,u));let O=l?"value += b[output_channel];":"",j=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Tn(n,j),`
  ${$.registerUniforms(j).declareVariables(...C,S)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${d}u;
    let col = (index1 % width1) * ${d}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${k.type.value}, ${w}>;
    var values: array<${S.type.value}, ${d}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${m[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${w}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${k.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${k.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${m[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${d}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${d}u; i++) {
      var value = values[i];
      ${O}
      ${E}
      ${S.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${n.cacheKey};${u};${d};${w};${m[0]};${m[1]}`,inputDependencies:l?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(a):a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:v}),getShaderSource:x}}}),Jh,es,em,ts,zl,Cl,tm,rm,Il,j_=_(()=>{_e(),B_(),D_(),Sl(),L_(),zn(),xl(),Kr(),Jh=(t,n,a,o,l,u)=>{let d=t[0],p=t.slice(u?1:2,u?3:4),h=p.length,m=n[0],y=n.slice(2).map((w,x)=>w+(w-1)*(a[x]-1)),v=p.map((w,x)=>w+o[x]+o[x+h]).map((w,x)=>Math.floor((w-y[x]+l[x])/l[x]));return v.splice(0,0,d),v.splice(u?3:1,0,m),v},es=[2,3,1,0],em=(t,n)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw new Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let a=t[0].dims[n.format==="NHWC"?t[0].dims.length-1:1],o=t[1].dims[1]*n.group;if(a!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(t.length===3&&(t[2].dims.length!==1||t[1].dims[0]!==t[2].dims[0]))throw new Error("invalid bias");let l=t[0].dims.length-2;if(n.dilations.length!==l)throw new Error(`dilations should be ${l}D`);if(n.strides.length!==l)throw new Error(`strides should be ${l}D`);if(n.pads.length!==l*2)throw new Error(`pads should be ${l*2}D`);if(n.kernelShape.length!==0&&n.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape")},ts=(t,n)=>{let a=t.kernelShape.slice();a.length<n[1].dims.length-2&&a.push(...Array(n[1].dims.length-2-a.length).fill(0));for(let u=2;u<n[1].dims.length;++u)a[u-2]===0&&(a[u-2]=n[1].dims[u]);let o=t.pads.slice();Ga.adjustPadsBasedOnAutoPad(n[0].dims,t.strides,t.dilations,a,o,t.format==="NHWC",t.autoPad);let l=Object.assign({},t);return Object.assign(l,{kernelShape:a,pads:o}),l},zl=t=>{let n=vl(t),a=t.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],l=t.dilations,u=t.group,d=t.kernel_shape,p=t.pads,h=t.strides,m=t.w_is_const();return{autoPad:o,format:a,dilations:l,group:u,kernelShape:d,pads:p,strides:h,wIsConst:m,...n,cacheKey:`${t.format};${n.activation};`}},Cl=(t,n,a,o)=>{let l=a.format==="NHWC",u=Jh(n[0].dims,n[1].dims,a.dilations,a.pads,a.strides,l);if(a.group!==1){let j=[n[0]];if(l){let L=t.kernelCustomData.wT??t.compute(Lt(n[1],es),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=L),j.push(L)}else j.push(n[1]);n.length===3&&j.push(n[2]),!t.adapterInfo.isArchitecture("ampere")&&l&&n[1].dims[0]===a.group&&n[1].dims[1]===1&&a.dilations[0]===1&&a.dilations[1]===1?t.compute(Yh(j,a,u,o),{inputs:j}):t.compute(Zh(j,a,u,o),{inputs:j});return}let d=n.length===3,p=n[0].dims[l?1:2],h=n[0].dims[l?2:3],m=n[0].dims[l?3:1],y=n[1].dims[2],v=n[1].dims[3],w=u[l?1:2],x=u[l?2:3],$=u[l?3:1],S=l&&y===p&&v===h&&a.pads[0]===0&&a.pads[1]===0;if(S||y===1&&v===1&&a.dilations[0]===1&&a.dilations[1]===1&&a.strides[0]===1&&a.strides[1]===1&&a.pads[0]===0&&a.pads[1]===0){let j=u[0],L,V,F,J=[];if(l){let he=t.kernelCustomData.wT??t.compute(Lt(n[1],es),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];if(a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=he),S){let Se=p*h*m;L=n[0].reshape([1,j,Se]),V=he.reshape([1,Se,$]),F=[1,j,$]}else L=n[0].reshape([j,p*h,m]),V=he.reshape([1,m,$]),F=[j,w*x,$];J.push(L),J.push(V)}else L=n[0].reshape([j,m,p*h]),V=n[1].reshape([1,$,m]),F=[j,$,w*x],J.push(V),J.push(L);d&&J.push(n[2]);let ge=F[2],fe=J[0].dims[J[0].dims.length-1];ge<8&&fe<8?t.compute(_l(J,a,u,F,l,o),{inputs:J}):t.compute(Ja(J,a,u,F,l,o),{inputs:J});return}let z=!0,E=t.kernelCustomData.wT??t.compute(Lt(n[1],es),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=E);let k=[n[0],E];d&&k.push(n[2]);let I=l?w*x:$,C=l?$:w*x,O=y*v*m;t.compute(qh(k,a,u,I,C,O,d,z,o),{inputs:k})},tm=(t,n)=>{let a=n.format==="NHWC",o=[t.inputs[0].reshape(a?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&o.push(t.inputs[2]);let l=[0,n.pads[0],0,n.pads[1]],u=[1].concat(n.strides),d=[1].concat(n.dilations),p=[1].concat(n.kernelShape),h=ts({...n,pads:l,strides:u,dilations:d,kernelShape:p},o);Cl(t,o,h,m=>a?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},rm=(t,n,a)=>{let o=a.format==="NHWC"?"channelsLast":"channelsFirst",l=ts(a,n),u=a.autoPad==="NOTSET"?a.pads:a.autoPad,d=Qh(n[0].dims,n[1].dims,a.strides,a.dilations,u,!1,o);t.compute(Xh(n,l,d.outShape,[d.filterDepth,d.filterHeight,d.filterWidth],[d.padInfo.front,d.padInfo.top,d.padInfo.left],o))},Il=(t,n)=>{if(em(t.inputs,n),t.inputs[0].dims.length===3)tm(t,n);else if(t.inputs[0].dims.length===5)rm(t,t.inputs,n);else{let a=ts(n,t.inputs);Cl(t,t.inputs,a)}}}),nm,U_=_(()=>{ve(),Nr(),_e(),xe(),nm=(t,n,a)=>{let o=t.length>2,l=n.outputShape,u=n.format==="NHWC",d=n.group,p=t[1].dims,h=p[2]/d,m=p[3],y=u?Ge(h):1,v=u&&m===1&&h>=4,w=v?Math.floor(h/4)*4:Math.floor(h/y)*y,x=h-w,$=u?Ge(m):1,S=u?m===1?y:$:1,z=U.size(l)/$,E=[Math.ceil(z/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${E}`);let k=["rank","rank"],I=[n.strides[0],n.strides[1]],C=[n.kernelShape[u?1:2],n.kernelShape[u?2:3]],O=[n.dilations[0],n.dilations[1]],j=[C[0]+(n.dilations[0]<=1?0:(n.kernelShape[u?1:2]-1)*(n.dilations[0]-1)),C[1]+(n.dilations[1]<=1?0:(n.kernelShape[u?2:3]-1)*(n.dilations[1]-1))],L=[j[0]-1-Math.floor((n.pads[0]+n.pads[2])/2),j[1]-1-Math.floor((n.pads[1]+n.pads[3])/2)],V=[{type:12,data:z},{type:12,data:I},{type:12,data:C},{type:12,data:O},{type:12,data:j},{type:6,data:L},{type:12,data:w},{type:12,data:h},{type:12,data:m},...pe(t[0].dims,t[1].dims)];o&&(V.push(...pe(t[2].dims)),k.push("rank")),V.push(...pe(l));let F=J=>{let ge=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:C.length},{name:"dilations",type:"u32",length:C.length},{name:"effective_filter_dims",type:"u32",length:j.length},{name:"pads",type:"i32",length:L.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],fe=st(t[0].dataType),he=u?1:2,Se=u?2:3,Ce=u?3:1,me=W("W",t[1].dataType,t[1].dims.length,S),we=W("Dy",t[0].dataType,t[0].dims.length,y),et=[we,me];o&&et.push(W("bias",t[2].dataType,[l[Ce]].length,$));let re=oe("result",t[0].dataType,l.length,$),Ne=()=>{let ce="";if(v)y===4?ce+=`
        let xValue = ${we.getByOffset("x_offset")};
        let wValue = ${me.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:y===2?ce+=`
          dotProd = dotProd + dot(vec4<${fe}>(${we.getByOffset("x_offset")}, ${we.getByOffset("x_offset + 1u")}), vec4<${fe}>(${me.getByOffset("w_offset")}, ${me.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:y===1&&(ce+=`
          dotProd = dotProd + dot(vec4<${fe}>(${we.getByOffset("x_offset")}, ${we.getByOffset("x_offset + 1u")}, ${we.getByOffset("x_offset + 2u")}, ${we.getByOffset("x_offset + 3u")}), vec4<${fe}>(${me.getByOffset("w_offset")}, ${me.getByOffset("w_offset + 1u")}, ${me.getByOffset("w_offset + 2u")}, ${me.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ce+=`
                  let xValue = ${u?we.getByOffset(`${we.indicesToOffset(`${we.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y}`):we.get("batch","inputChannel","idyR","idyC")};
        `,y===1)ce+=`
          let w_offset = ${me.indicesToOffset(`${me.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${me.getByOffset(`w_offset / ${S}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ne=0;ne<y;ne++)ce+=`
            let wValue${ne} = ${me.getByOffset(`${me.indicesToOffset(`${me.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ne}, wOutChannel)`)} / ${S}`)};
            dotProd = dotProd + xValue[${ne}] * wValue${ne};`;return ce},Z=()=>{if(x===0)return"";if(!v)throw new Error(`packInputAs4 ${v} is not true.`);let ce="";if(y===1){ce+="dotProd = dotProd";for(let ne=0;ne<x;ne++)ce+=`
            + ${we.getByOffset(`x_offset + ${ne}`)} * ${me.getByOffset(`w_offset + ${ne}`)}`;ce+=";"}else if(y===2){if(x!==2)throw new Error(`Invalid inputChannelsRemainder ${x}.`);ce+=`
          let xValue = ${we.getByOffset("x_offset")};
          let wValue = ${me.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ce},se=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${$}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",Ce)};
            let r = ${re.indicesGet("outputIndices",he)};
            let c = ${re.indicesGet("outputIndices",Se)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${re.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${fe}(dyRCorner) + ${fe}(wR)) / ${fe}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${fe}(uniforms.Dy_shape[${he}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${fe}(dyCCorner) + ${fe}(wC)) / ${fe}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${fe}(uniforms.Dy_shape[${Se}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${v?`
                var x_offset = ${we.indicesToOffset(`${we.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y};
                var w_offset = ${me.indicesToOffset(`${me.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${S};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${v?4:y}) {
                  ${Ne()}
                  inputChannel = inputChannel + ${v?4:y};
                }
                ${Z()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${o?` + bias[d1 / ${$}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${J.registerUniforms(ge).declareVariables(...et,re)}
      ${J.mainStart()}
      ${J.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${se}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${n.cacheKey};${y}${S}${$}${v}${x}`,inputDependencies:k},getRunData:()=>({dispatchGroup:{x:E[0],y:E[1],z:E[2]},outputs:[{dims:a?a(l):l,dataType:t[0].dataType}],programUniforms:V}),getShaderSource:F}}}),im,am,sm,Nl,om,lm,Rl,um,dm,V_=_(()=>{U_(),zn(),Kr(),im=(t,n,a,o,l,u)=>(t-1)*n+a+(o-1)*l+1-u,am=(t,n,a,o,l)=>{let u=Math.floor(t/2);n==="SAME_UPPER"?(a[o]=u,a[l]=t-u):n==="SAME_LOWER"&&(a[o]=t-u,a[l]=u)},sm=(t,n,a,o,l,u,d,p,h,m)=>{let y=t.length-2,v=m.length===0;h.length<y&&h.push(...Array(y-h.length).fill(0));let w=t[0],x=n[p?3:1]*l;for(let $=0,S=t.length-y-(p?1:0);$<y;++$,++S){let z=t[S],E=v?z*d[$]:m[$],k=im(z,d[$],u[$],n[S],a[$],E);am(k,o,u,$,$+y),v&&m.push(d[$]*(z-1)+h[$]+(n[S]-1)*a[$]+1-u[$]-u[$+y])}m.splice(0,0,w),m.splice(p?3:1,0,x)},Nl=(t,n)=>{let a=t.kernelShape.slice();if(t.kernelShape.length===0||t.kernelShape.reduce((v,w)=>v*w,1)===0){a.length=0;for(let v=2;v<n[1].dims.length;++v)a.push(n[1].dims[v])}let o=t.format==="NHWC";a.splice(0,0,n[1].dims[0]),a.splice(o?3:1,0,n[1].dims[1]);let l=t.pads.slice(),u=t.outputShape.slice(),d=t.outputPadding.slice(),p=n[0].dims,h=t.dilations.slice();if(h.reduce((v,w)=>v+w,0)===0){let v=n[0].dims.length-2;h=new Array(v).fill(1)}let m=t.strides.slice();if(m.reduce((v,w)=>v+w,0)===0){let v=n[0].dims.length-2;m=new Array(v).fill(1)}sm(p,a,h,t.autoPad,t.group,l,m,o,d,u);let y=Object.assign({},t);return Object.assign(y,{kernelShape:a,pads:l,outputPadding:d,outputShape:u,dilations:h,strides:m}),y},om=t=>{let n=vl(t),a=t.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],l=t.dilations,u=t.group??1,d=t.kernelShape,p=t.pads,h=t.strides,m=t.wIsConst(),y=t.outputPadding,v=t.outputShape;return{autoPad:o,format:a,dilations:l,group:u,kernelShape:d,outputPadding:y,outputShape:v,pads:p,strides:h,wIsConst:m,...n,cacheKey:`${t.format};${n.activation};`}},lm=(t,n)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length!==4&&t[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let a=t[0].dims[n.format==="NHWC"?t[0].dims.length-1:1],o=t[1].dims[0];if(a!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let l=t[1].dims[1]*n.group;if(t.length===3&&(t[2].dims.length!==1||t[2].dims[0]!==l))throw new Error("invalid bias");let u=t[0].dims.length-2;if(n.dilations.reduce((d,p)=>d+p,0)>0&&n.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(n.strides.reduce((d,p)=>d+p,0)>0&&n.strides.length!==u)throw new Error(`strides should be ${u}D`);if(n.pads.reduce((d,p)=>d+p,0)>0&&n.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(n.outputPadding.length!==u&&n.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(n.kernelShape.reduce((d,p)=>d+p,0)>0&&n.kernelShape.length!==0&&n.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape");if(n.outputShape.length!==0&&n.outputShape.length!==t[0].dims.length-2)throw new Error("invalid output shape")},Rl=(t,n,a,o)=>{let l=t.kernelCustomData.wT??t.compute(Lt(n[1],[2,3,0,1]),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=l);let u=[n[0],l];n.length===3&&u.push(n[2]),t.compute(nm(u,a,o),{inputs:u})},um=(t,n)=>{let a=n.format==="NHWC",o=[t.inputs[0].reshape(a?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&o.push(t.inputs[2]);let l=n.kernelShape;(l.length===0||l[0]===0)&&(l=[t.inputs[1].dims[2]]);let u=n.dilations;(u.length===0||u[0]===0)&&(u=[1]);let d=n.strides;(d.length===0||d[0]===0)&&(d=[1]);let p=n.pads;p.length===0&&(p=[0,0]),p=[0,p[0],0,p[1]],d=[1].concat(d),u=[1].concat(u),l=[1].concat(l);let h=n.outputPadding;h=[0].concat(h);let m=Nl({...n,pads:p,strides:d,dilations:u,kernelShape:l,outputPadding:h},o);Rl(t,o,m,y=>a?[y[0],y[2],y[3]]:[y[0],y[1],y[3]])},dm=(t,n)=>{if(lm(t.inputs,n),t.inputs[0].dims.length===3)um(t,n);else{let a=Nl(n,t.inputs);Rl(t,t.inputs,a)}}}),cm,pm,fm,W_=_(()=>{ve(),_e(),Ke(),xe(),cm=(t,n,a,o)=>{let l=U.size(n),u=n.length,d=W("input",t,u),p=oe("output",t,u),h=a.dataType===6?a.getInt32Array()[0]:Number(a.getBigInt64Array()[0]),m=U.normalizeAxis(h,u),y=v=>{let w=` i32(${d.indicesGet("inputIndices","uniforms.axis")}) `,x=de("uniforms.input_shape","uniforms.axis",u),$=o.reverse?w+(o.exclusive?" + 1":""):"0",S=o.reverse?x:w+(o.exclusive?"":" + 1");return`
                ${v.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(d,p)}
                ${v.mainStart()}
                  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${p.offsetToIndices("global_idx")};
                  var sum = ${p.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${S};
                  for (var i : i32 = first; i < last; i++) {
                    ${d.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${d.getByIndices("inputIndices")};
                  }
                  ${p.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:o.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},{type:12,data:m},...pe(n,n)]}),getShaderSource:y}},pm=(t,n)=>{let a=t.inputs[0].dims,o=t.inputs[0].dataType,l=t.inputs[1];t.compute(cm(o,a,l,n),{inputs:[0]})},fm=t=>{let n=t.exclusive===1,a=t.reverse===1;return Ae({exclusive:n,reverse:a})}}),hm,mm,gm,ym,vm,F_=_(()=>{ve(),_e(),Ke(),xe(),hm=t=>{if(!t||t.length!==1)throw new Error("DepthToSpace requires 1 input.");if(t[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},mm=(t,n,a,o)=>{let l=[];l.push(`fn perm(i: ${o.type.indices}) -> ${a.type.indices} {
    var a: ${a.type.indices};`);for(let u=0;u<n;++u)l.push(a.indicesSet("a",t[u],`i[${u}]`));return l.push("return a;}"),l.join(`
`)},gm=(t,n)=>{let a,o,l,u,d,p,h=n.format==="NHWC",m=n.blocksize,y=n.mode==="DCR";h?([a,o,l,u]=t.dims,d=y?[a,o,l,m,m,u/m**2]:[a,o,l,u/m**2,m,m],p=y?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([a,o,l,u]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],d=y?[a,m,m,u/m**2,o,l]:[a,u/m**2,m,m,o,l],p=y?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let v=t.reshape(d),w=v.dims.length,x=t.dataType,$=W("a",x,w),S=oe("output",x,w),z=E=>`
  ${E.registerUniform("output_size","u32").declareVariables($,S)}

  ${mm(p,w,$,S)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${n.blocksize};${n.mode}`,inputDependencies:["rank"]},getRunData:E=>{let k=h?[a,o*m,l*m,u/m**2]:[a,u/m**2,o*m,l*m],I=U.size(k),C=v.dims,O=U.sortBasedOnPerm(C,p);return{outputs:[{dims:k,dataType:E[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...pe(C,O)]}},getShaderSource:z}},ym=(t,n)=>{hm(t.inputs),t.compute(gm(t.inputs[0],n))},vm=t=>Ae({blocksize:t.blocksize,mode:t.mode,format:t.format})}),rs,Di,Ol,wm,_m,xm,$m,Al,bm,km,Sm,q_=_(()=>{ve(),_e(),Ke(),xe(),rs="[a-zA-Z]|\\.\\.\\.",Di="("+rs+")+",Ol="^"+Di+"$",wm="("+Di+",)*"+Di,_m="^"+wm+"$",xm=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,n){let a=this.symbolToIndices.get(t);a===void 0?a=[n]:a.push(n),this.symbolToIndices.set(t,a)}},$m=class{constructor(t,n){var l;this.equation=n,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[a,o]=n.includes("->")?n.split("->",2):[n,""];if(!a.match(RegExp(_m)))throw new Error("Invalid LHS term");if(a.split(",").forEach((u,d)=>{let p=t[d].dims.slice();if(!u.match(RegExp(Ol)))throw new Error("Invalid LHS term");let h=this.processTerm(u,!0,p,d);this.lhs.push(h)}),o==="")o+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!o.match(RegExp(Di)))throw new Error("Invalid RHS");(l=o.match(RegExp(rs,"g")))==null||l.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(o,!1,this.outputDims)}addSymbol(t,n,a){let o=this.symbolToInfo.get(t);if(o!==void 0){if(o.dimValue!==n&&o.count!==1)throw new Error("Dimension mismatch");o.count++,o.inputIndices.push(a)}else o={count:1,dimValue:n,inputIndices:[a]};this.symbolToInfo.set(t,o)}processTerm(t,n,a,o=-1){let l=a.length,u=!1,d=[],p=0;if(!t.match(RegExp(Ol))&&!n&&t!=="")throw new Error("Invalid LHS term");let h=t.match(RegExp(rs,"g")),m=new xm(o);return h==null||h.forEach((y,v)=>{if(y==="..."){if(u)throw new Error("Only one ellipsis is allowed per input term");u=!0;let w=l-h.length+1;if(w<0)throw new Error("Ellipsis out of bounds");if(d=a.slice(p,p+w),this.hasEllipsis){if(this.ellipsisDims.length!==d.length||this.ellipsisDims.toString()!==d.toString())throw new Error("Ellipsis dimensions mismatch")}else if(n)this.hasEllipsis=!0,this.ellipsisDims=d;else throw new Error("Ellipsis must be specified in the LHS");for(let x=0;x<d.length;x++){let $=String.fromCharCode(48+x);m.addSymbol($,v+x),this.addSymbol($,a[p++],o)}}else m.addSymbol(y,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(y,a[p++],o)}),m}},Al=t=>t+"_max",bm=(t,n,a,o)=>{let l=t.map(m=>m.length).map((m,y)=>W(`input${y}`,n,m)),u=U.size(o),d=oe("output",n,o.length),p=[...a.symbolToInfo.keys()].filter(m=>!a.rhs.symbolToIndices.has(m)),h=m=>{let y=[],v="var prod = 1.0;",w="var sum = 0.0;",x="sum += prod;",$=[],S=[],z=[],E=[],k=a.symbolToInfo.size===a.rhs.symbolToIndices.size;a.symbolToInfo.forEach((C,O)=>{var j;if(a.rhs.symbolToIndices.has(O)){let L=(j=a.rhs.symbolToIndices.get(O))==null?void 0:j[0];L!==void 0&&a.lhs.forEach((V,F)=>{if(C.inputIndices.includes(F)){let J=V.symbolToIndices.get(O);if(J===void 0)throw new Error("Invalid symbol error");J.forEach(ge=>{y.push(`${l[F].indicesSet(`input${F}Indices`,ge,d.indicesGet("outputIndices",L))}`)})}})}else a.lhs.forEach((L,V)=>{if(C.inputIndices.includes(V)){let F=L.symbolToIndices.get(O);if(F===void 0)throw new Error("Invalid symbol error");F.forEach(J=>{$.push(`${l[V].indicesSet(`input${V}Indices`,J,`${O}`)}`)}),E.push(`prod *= ${l[V].getByIndices(`input${V}Indices`)};`)}}),S.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Al(O)}; ${O}++) {`),z.push("}")});let I=k?[...y,`let sum = ${l.map((C,O)=>C.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...y,w,...S,...$,v,...E,x,...z];return`
            ${m.registerUniforms(p.map(C=>({name:`${Al(C)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...l,d)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${d.offsetToIndices("global_idx")};
            ${l.map((C,O)=>`var input${O}Indices: ${l[O].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${d.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:a.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let m=p.filter(v=>a.symbolToInfo.has(v)).map(v=>{var w;return{type:12,data:((w=a.symbolToInfo.get(v))==null?void 0:w.dimValue)||0}});m.push({type:12,data:u});let y=t.map((v,w)=>[...pe(v)]).reduce((v,w)=>v.concat(w),m);return y.push(...pe(o)),{outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:y}},getShaderSource:h}},km=(t,n)=>{let a=new $m(t.inputs,n.equation),o=a.outputDims,l=t.inputs.map((u,d)=>u.dims);t.compute(bm(l,t.inputs[0].dataType,a,o))},Sm=t=>{let n=t.equation.replace(/\s+/g,"");return Ae({equation:n})}}),Em,Ml,Tm,zm,Cm,G_=_(()=>{ve(),_e(),xe(),Em=t=>{if(!t||t.length!==2)throw new Error("Expand requires 2 input.");let n=t[0].dims,a=Array.from(t[1].getBigInt64Array(),Number),o=a.length<n.length?0:a.length-n.length,l=n.length<a.length?0:n.length-a.length;for(;o<a.length&&l<n.length;++o,++l)if(a[o]!==n[l]&&a[o]!==1&&n[l]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ml=(t,n)=>{let a=t.length-n.length,o=[];for(let l=0;l<a;++l)o.push(t[l]);for(let l=0;l<n.length;++l)o.push(n[l]===1?t[l+a]:n[l]);return o},Tm=(t,n)=>t.length>n.length?Ml(t,n):Ml(n,t),zm=t=>{let n=t[0].dims,a=Array.from(t[1].getBigInt64Array(),Number),o=Tm(n,a),l=t[0].dataType,u=l===9||U.size(n)===1,d=l===9||n.length>0&&n[n.length-1]%4===0?4:1,p=u||o.length>0&&o[o.length-1]%4===0?4:1,h=Math.ceil(U.size(o)/p),m=v=>{let w=W("input",l,n.length,d),x=oe("output",l,o.length,p),$;if(l===9){let S=(z,E,k="")=>`
          let outputIndices${E} = ${x.offsetToIndices(`outputOffset + ${E}u`)};
          let offset${E} = ${w.broadcastedIndicesToOffset(`outputIndices${E}`,x)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${z}[${E}] = ${k}(${w.getByOffset(`index${E}`)}[component${E}]);
        `;$=`
        let outputOffset = global_idx * ${p};
        var data = vec4<u32>(0);
        ${S("data",0,"u32")}
        ${S("data",1,"u32")}
        ${S("data",2,"u32")}
        ${S("data",3,"u32")}
        ${x.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${x.offsetToIndices(`global_idx * ${p}`)};
        let inputOffset = ${w.broadcastedIndicesToOffset("outputIndices",x)};
        let data = ${x.type.value}(${w.getByOffset(`inputOffset / ${d}`)});
        ${x.setByOffset("global_idx","data")}
      }`;return`
    ${v.registerUniform("vec_size","u32").declareVariables(w,x)}
    ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},y=[{type:12,data:h},...pe(n,o)];return{name:"Expand",shaderCache:{hint:`${o.length};${d}${p}`,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y})}},Cm=t=>{Em(t.inputs),t.compute(zm(t.inputs),{inputs:[0]})}}),Im,Nm,H_=_(()=>{ve(),_e(),xe(),yl(),Im=t=>{let n=t[0].dataType,a=U.size(t[0].dims),o=U.size(t[1].dims),l=o%4===0,u=d=>{let p=W("x",n,[1],4),h=W("bias",n,[1],4),m=oe("y",n,[1],4),y=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],v=x=>`
      let bias${x}_offset: u32 = (global_idx * 4 + ${x}) % uniforms.bias_size;
      let bias${x} = ${h.getByOffset(`bias${x}_offset / 4`)}[bias${x}_offset % 4];`,w=l?`
      let bias = ${h.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${v(0)}${v(1)}${v(2)}${v(3)}
      let bias = ${p.type.value}(bias0, bias1, bias2, bias3);`;return`${d.registerUniforms(y).declareVariables(p,h,m)}

    ${ml(wt(n))}

    ${d.mainStart(Xn)}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${p.getByOffset("global_idx")};
      ${w}
      let x_in = x + bias;
      ${m.setByOffset("global_idx",gl("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${l}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:d=>({outputs:[{dims:d[0].dims,dataType:d[0].dataType}],programUniforms:[{type:12,data:Math.ceil(a/4)},{type:12,data:o}],dispatchGroup:{x:Math.ceil(a/Xn/4)}})}},Nm=t=>{t.inputs.length<2||U.size(t.inputs[1].dims)===0?ch(t):t.compute(Im(t.inputs))}}),Rm,Om,Am,Mm,K_=_(()=>{ve(),_e(),Ke(),xe(),Rm=t=>{if(!t||t.length!==2)throw new Error("Gather requires 2 inputs.")},Om=(t,n)=>{let a=t[0].dims,o=t[1].dims,l=a.length,u=U.normalizeAxis(n.axis,l),d=a.slice(0);d.splice(u,1,...o);let p=a[u],h=t[0].dataType===9?4:1,m=Math.ceil(U.size(d)/h),y=[{type:12,data:m},{type:6,data:p},{type:12,data:u},...pe(t[0].dims,t[1].dims,d)],v=w=>{let x=W("data",t[0].dataType,t[0].dims.length,h),$=W("inputIndices",t[1].dataType,t[1].dims.length),S=oe("output",t[0].dataType,d.length,h),z=k=>{let I=o.length,C=`var indicesIndices${k}  = ${$.type.indices}(0);`;for(let O=0;O<I;O++)C+=`${I>1?`indicesIndices${k}[${O}]`:`indicesIndices${k}`} = ${d.length>1?`outputIndices${k}[uniforms.axis + ${O}]`:`outputIndices${k}`};`;C+=`
          var idx${k} = ${$.getByIndices(`indicesIndices${k}`)};
          if (idx${k} < 0) {
            idx${k} = idx${k} + uniforms.axisDimLimit;
          }
          var dataIndices${k} : ${x.type.indices};
        `;for(let O=0,j=0;O<l;O++)O===u?(C+=`${l>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = u32(idx${k});`,j+=I):(C+=`${l>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = ${d.length>1?`outputIndices${k}[${j}]`:`outputIndices${k}`};`,j++);return C},E;if(t[0].dataType===9){let k=(I,C,O="")=>`
          let outputIndices${C} = ${S.offsetToIndices(`outputOffset + ${C}u`)};
          ${z(C)};
          let offset${C} = ${x.indicesToOffset(`dataIndices${C}`)};
          let index${C} = offset${C} / 4u;
          let component${C} = offset${C} % 4u;
          ${I}[${C}] = ${O}(${x.getByOffset(`index${C}`)}[component${C}]);
        `;E=`
        let outputOffset = global_idx * ${h};
        var value = vec4<u32>(0);
        ${k("value",0,"u32")}
        ${k("value",1,"u32")}
        ${k("value",2,"u32")}
        ${k("value",3,"u32")}
        ${S.setByOffset("global_idx","value")}
      `}else E=`
      let outputIndices = ${S.offsetToIndices("global_idx")};
      ${z("")};
      let value = ${x.getByIndices("dataIndices")};
      ${S.setByOffset("global_idx","value")};
      `;return`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(x,$,S)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${E}
      }`};return{name:"Gather",shaderCache:{hint:n.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:v}},Am=t=>Ae({axis:t.axis}),Mm=(t,n)=>{let a=t.inputs;Rm(a),t.compute(Om(t.inputs,n))}}),Pm,Bm,Dm,Q_=_(()=>{ve(),_e(),xe(),Pm=(t,n,a,o,l,u,d,p,h)=>{let m=[{type:12,data:u},{type:12,data:o},{type:12,data:l},{type:12,data:a},{type:12,data:d},{type:12,data:p},{type:12,data:h}],y=[u];m.push(...pe(n.dims,y));let v=w=>{let x=W("indices_data",n.dataType,n.dims.length),$=oe("input_slice_offsets_data",12,1,1),S=[x,$],z=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:l.length},{name:"sizes_from_slice_dims_data",type:"u32",length:a.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${w.registerUniforms(z).declareVariables(...S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${l.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${a.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${l.length}_${a.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:y,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:v},{inputs:[n],outputs:[-1]})[0]},Bm=(t,n)=>{let a=t.inputs,o=a[0].dims,l=a[0].dataType,u=a[1].dims,d=u[u.length-1],p=U.sizeToDimension(u,u.length-1),h=U.sizeFromDimension(o,n.batchDims+d),m=U.sizeToDimension(o,n.batchDims),y=U.sizeFromDimension(o,n.batchDims),v=p/m,w=new Array(d),x=h;for(let C=0;C<d;++C)w[d-1-C]=x,x*=o[n.batchDims+d-1-C];let $=Pm(t,a[1],w,n.batchDims,o,p,v,y,d),S=n.batchDims+d;if(S>o.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let z=u.slice(0,-1).concat(o.slice(S)),E=U.size(z),k=[{type:12,data:E},{type:12,data:h},...pe(a[0].dims,$.dims,z)],I=C=>{let O=W("data",a[0].dataType,a[0].dims.length),j=W("slice_offsets",12,$.dims.length),L=oe("output",a[0].dataType,z.length);return`
          ${C.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,j,L)}
            ${C.mainStart()}
            ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};t.compute({name:"GatherND",shaderCache:{hint:n.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:z,dataType:l}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:k}),getShaderSource:I},{inputs:[a[0],$]})},Dm=t=>({batchDims:t.batch_dims,cacheKey:""})}),Lm,jm,Um,Vm,X_=_(()=>{ve(),_e(),Ke(),xe(),Lm=(t,n)=>{if(t.length<3||t.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let a=U.normalizeAxis(n.quantizeAxis,t[0].dims.length),o=n.blockSize,l=t[0],u=t[2],d=t.length===4?t[3]:void 0;if(u.dims.length!==l.dims.length||!l.dims.map((p,h)=>h===a?Math.ceil(p/o)===u.dims[h]:p===u.dims[h]).reduce((p,h)=>p&&h,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(d){if(d.dataType!==l.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(d.dims.length!==u.dims.length||!d.dims.map((p,h)=>p===u.dims[h]).reduce((p,h)=>p&&h,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},jm=(t,n)=>{let a=t[0].dims,o=t[1].dims,l=a.length,u=U.normalizeAxis(n.gatherAxis,l),d=U.normalizeAxis(n.quantizeAxis,l),p=a.slice(0);p.splice(u,1,...o);let h=U.size(p),m=t[2].dataType,y=t[0].dataType===22,v=[{type:12,data:h},{type:12,data:d},{type:12,data:u},{type:12,data:n.blockSize},...pe(...t.map((x,$)=>x.dims),p)],w=x=>{let $=W("data",t[0].dataType,t[0].dims.length),S=W("inputIndices",t[1].dataType,t[1].dims.length),z=W("scales",t[2].dataType,t[2].dims.length),E=t.length>3?W("zeroPoint",t[3].dataType,t[3].dims.length):void 0,k=oe("output",m,p.length),I=[$,S,z];E&&I.push(E);let C=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${x.registerUniforms(C).declareVariables(...I,k)}
        ${x.mainStart()}
        let output_indices = ${k.offsetToIndices("global_idx")};
        var indices_indices = ${S.type.indices}(0);
        ${o.length>1?`
          for (var i: u32 = 0; i < ${o.length}; i++) {
            let index = ${k.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${S.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${k.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${k.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${S.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${a[u]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${p.length}; i++) {
          let index = ${k.indicesGet("output_indices",`i + ${o.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${z.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${z.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${z.getByIndices("scale_indices")};
        ${E?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${E.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${E.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${wt(m)}(quantized_data - zero_point) * scale;
        ${k.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${n.cacheKey};${t.filter((x,$)=>$!==1).map(x=>x.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(x,$)=>"rank")},getRunData:()=>({outputs:[{dims:p,dataType:m}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:w}},Um=(t,n)=>{let a=t.inputs;Lm(a,n),t.compute(jm(t.inputs,n))},Vm=t=>Ae({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),Wm,Fm,qm,Gm,Z_=_(()=>{ve(),_e(),Ke(),xe(),Wm=t=>{if(!t||t.length!==2)throw new Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Fm=(t,n)=>{let a=t[0].dims,o=t[0].dataType,l=a.length,u=t[1].dims,d=t[1].dataType,p=U.normalizeAxis(n.axis,l),h=a[p],m=u.slice(0),y=U.size(m),v=W("input",o,l),w=W("indicesInput",d,u.length),x=oe("output",o,m.length),$=[{type:12,data:y},{type:6,data:h},{type:12,data:p}];return $.push(...pe(a,u,m)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:m,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:$}),getShaderSource:S=>`
      ${S.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(v,w,x)}
      ${S.mainStart()}
      ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${x.offsetToIndices("global_idx")};

      var idx = ${w.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${v.type.indices}(outputIndices);
      ${v.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${v.getByIndices("inputIndices")};

      ${x.setByOffset("global_idx","value")};
  }`}},qm=t=>Ae({axis:t.axis}),Gm=(t,n)=>{let a=t.inputs;Wm(a),t.compute(Fm(t.inputs,n))}}),Hm,Km,Qm,Xm,Y_=_(()=>{ve(),_e(),xe(),Hm=t=>{if(!t)throw new Error("Input is missing");if(t.length<2||t.length>3)throw new Error("Invaid input number.");if(t.length===3&&t[2].dims.length>2)throw new Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("Input types are mismatched")},Km=(t,n)=>{let a=t[0].dims.slice(),o=t[1].dims.slice(),[l,u,d]=ip.getShapeOfGemmResult(a,n.transA,o,n.transB,t.length===3?t[2].dims:void 0),p=[l,u];if(!p)throw new Error("Can't use gemm on the given tensors");let h=16,m=Math.ceil(u/h),y=Math.ceil(l/h),v=!0,w=U.size(p),x=[{type:12,data:v?m:w},{type:12,data:l},{type:12,data:u},{type:12,data:d},{type:1,data:n.alpha},{type:1,data:n.beta}],$=["type","type"];t.length===3&&(x.push(...pe(t[2].dims)),$.push("rank")),x.push(...pe(p));let S=E=>{let k="";n.transA&&n.transB?k="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":n.transA&&!n.transB?k="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!n.transA&&n.transB?k="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!n.transA&&!n.transB&&(k="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=n.alpha===1?"":"value *= uniforms.alpha;",C=W("a",t[0].dataType,t[0].dims),O=W("b",t[1].dataType,t[1].dims),j=C.type.value,L=null,V=[C,O];t.length===3&&(L=W("c",t[2].dataType,t[2].dims.length),V.push(L));let F=oe("output",t[0].dataType,p.length);V.push(F);let J=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${E.registerUniforms(J).declareVariables(...V)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${j}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${k}
    }

    ${I}
    ${L!=null?`let cOffset = ${L.broadcastedIndicesToOffset("vec2(m, n)",F)}; value += ${j}(uniforms.beta) * ${L.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},z=E=>{let k=W("a",t[0].dataType,t[0].dims),I=W("b",t[1].dataType,t[1].dims),C=null,O=[k,I];t.length===3&&(C=W("c",t[2].dataType,t[2].dims.length),O.push(C));let j=oe("output",t[0].dataType,p.length);O.push(j);let L=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],V="",F="";n.transA&&n.transB?(F=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):n.transA&&!n.transB?(F=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!n.transA&&n.transB?(F=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!n.transA&&!n.transB&&(F=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let J=n.alpha===1?"":"value *= uniforms.alpha;";return`
  ${E.registerUniforms(L).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${k.type.storage}, ${h}>, ${h}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${h}>, ${h}>;
  ${E.mainStart([h,h,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${h};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${h};
    let num_tiles = (uniforms.K - 1) / ${h} + 1;
    var k_start = 0u;
    var value = ${j.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${F}
      k_start = k_start + ${h};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${h}; k++) {
        ${V}
      }
      workgroupBarrier();
    }

    ${J}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",j)}; value += ${j.type.value}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return v?{name:"GemmShared",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:p,dataType:t[0].dataType}],dispatchGroup:{x:m*y},programUniforms:x}),getShaderSource:z}:{name:"Gemm",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:p,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:x}),getShaderSource:S}},Qm=t=>{let n=t.transA,a=t.transB,o=t.alpha,l=t.beta;return{transA:n,transB:a,alpha:o,beta:l,cacheKey:`${t.transA};${t.transB};${t.alpha===1}`}},Xm=(t,n)=>{Hm(t.inputs),t.compute(Km(t.inputs,n))}}),br,Rr,Cn,In,Zm,Ym,Jm,eg,tg,rg,ng,ig,ag,sg,J_=_(()=>{ve(),_e(),Ke(),xe(),[br,Rr,Cn,In]=[0,1,2,3],Zm=t=>{if(t[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw new Error("grid batch size must match input batch size")},Ym=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Jm=t=>`
  fn gs_bicubic_interpolate(p: mat4x4<${t}>, x: f32, y: f32) -> ${t} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${t}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,eg=t=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${t.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,tg=t=>`
  ${t.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,rg=(t,n,a)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${n} {
     var pixel = ${n}(0);
     var indices = vec4<u32>(0);
     indices[${br}] = batch;
     indices[${Rr}] = channel;`+(()=>{switch(a.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Cn}] = u32(r);
            indices[${In}] = u32(c);
          } else {
            return ${n}(0);
          }
        `;case"border":return`
          indices[${Cn}] = u32(clamp(r, 0, H - 1));
          indices[${In}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Cn}] = gs_reflect(r, border[1], border[3]);
          indices[${In}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${a.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`,ng=(t,n,a)=>(()=>{switch(a.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${br}], indices[${Rr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${br}], indices[${Rr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${br}], indices[${Rr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${br}], indices[${Rr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${br}], indices[${Rr}], border);

          let dx2 = ${n}(f32(x2) - x);
          let dx1 = ${n}(x - f32(x1));
          let dy2 = ${n}(f32(y2) - y);
          let dy1 = ${n}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${n}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${br}], indices[${Rr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${a.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`,ig=(t,n)=>{let a=W("x",t[0].dataType,t[0].dims.length),o=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],l=W("grid",t[1].dataType,o.length,2),u=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];n.format==="NHWC"&&(u=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[br,Rr,Cn,In]=[0,3,1,2]);let d=oe("output",t[0].dataType,u.length),p=a.type.value,h=U.size(u),m=[{type:12,data:h},...pe(t[0].dims,o,u)],y=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(a,l,d)}
  ${Ym}
  ${Jm(p)}
  ${eg(n)}
  ${tg(n)}
  ${rg(a,p,n)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Cn}]);
      let W_in = i32(uniforms.x_shape[${In}]);

      ${n.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${d.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${br}], indices[${Cn}], indices[${In}]);
      let nxy = ${l.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ng(d,p,n)}
  }`;return{name:"GridSample",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:["type","type"]},getRunData:v=>{let w=U.size(u);return{outputs:[{dims:u,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:m}},getShaderSource:y}},ag=(t,n)=>{Zm(t.inputs),t.compute(ig(t.inputs,n))},sg=t=>Ae({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),Tt,og,lg,Pl,ug,Li,dg,cg=_(()=>{ve(),_e(),Ke(),rl(),fl(),xe(),Kr(),Tt=(t,n)=>t.length>n&&t[n].dims.length>0?t[n]:void 0,og=(t,n)=>{let a=t[0],o=Tt(t,1),l=Tt(t,2),u=Tt(t,3),d=Tt(t,4),p=Tt(t,5),h=Tt(t,6),m=Tt(t,7);if(a.dims.length!==3&&a.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let y=a.dims[0],v=a.dims[1],w=a.dims.length===3?a.dims[2]:n.numHeads*a.dims[4],x=v,$=0,S=0,z=Math.floor(w/n.numHeads);if(h&&m&&U.size(h.dims)&&U.size(m.dims)){if(h.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(h.dims[0]!==y||h.dims[1]!==n.numHeads||h.dims[3]!==z)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[0]!==y||m.dims[1]!==n.numHeads||m.dims[3]!==z)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[2]!==m.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(m.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=h.dims[2],S=h.dims[2]}else if(h&&U.size(h.dims)||m&&U.size(m.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E;if(o&&U.size(o.dims)>0){if(a.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(o.dims[2]!==a.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');E=2,x=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==n.numHeads||o.dims[3]!==2||o.dims[4]!==z)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(l)throw new Error('Expect "value" be none when "key" has packed kv format.');E=5,x=o.dims[1]}else{if(o.dims[1]!==n.numHeads||o.dims[3]!==z)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');E=0,x=o.dims[2]}}else{if(a.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(a.dims[2]!==n.numHeads||a.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}if(u&&U.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(o&&o.dims.length===5&&o.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let k=$+x,I=0;if(d&&U.size(d.dims)>0){I=8;let L=d.dims;throw L.length===1?L[0]===y?I=1:L[0]===3*y+2&&(I=3):L.length===2&&L[0]===y&&L[1]===k&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let C=!1,O=w;if(l&&U.size(l.dims)>0){if(l.dims.length!==3&&l.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==l.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(l.dims.length===3){if(x!==l.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=l.dims[2]}else{if(x!==l.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=l.dims[1]*l.dims[3],C=!0}}let j=!1;if(d&&U.size(d.dims)>0)throw new Error("Key padding mask is not supported");if(p&&U.size(p.dims)>0){if(p.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(p.dims[0]!==y||p.dims[1]!==n.numHeads||p.dims[2]!==v||p.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:y,sequenceLength:v,pastSequenceLength:$,kvSequenceLength:x,totalSequenceLength:k,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:w,vHiddenSize:O,headSize:z,vHeadSize:Math.floor(O/n.numHeads),numHeads:n.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:n.maskFilterValue,maskType:I,scale:n.scale,broadcastResPosBias:j,passPastInKv:C,qkvFormat:E}},lg=t=>Ae({...t}),Pl=Ae({perm:[0,2,1,3]}),ug=(t,n,a,o,l,u,d)=>{let p=[o,l,u],h=U.size(p),m=[{type:12,data:h},{type:12,data:d},{type:12,data:u}],y=v=>{let w=oe("qkv_with_bias",n.dataType,p),x=W("qkv",n.dataType,p),$=W("bias",a.dataType,p),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${v.registerUniforms(S).declareVariables(x,$,w)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:p,dataType:n.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y},{inputs:[n,a],outputs:[-1]})[0]},Li=(t,n,a,o,l,u,d,p)=>{let h=u;if(d&&U.size(d.dims)>0){if(o===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return h=ug(t,u,d,n,o,a*l,p),h=h.reshape([n,o,a,l]),a===1||o===1?h:t.compute(Lt(h,Pl.perm),{inputs:[h],outputs:[-1]})[0]}else return u.dims.length===3&&(h=u.reshape([n,o,a,l])),a===1||o===1?h:t.compute(Lt(h,Pl.perm),{inputs:[h],outputs:[-1]})[0]},dg=(t,n)=>{let a=og(t.inputs,n),o=t.inputs[0],l=Tt(t.inputs,1),u=Tt(t.inputs,2),d=Tt(t.inputs,3),p=Tt(t.inputs,4),h=Tt(t.inputs,5),m=Tt(t.inputs,6),y=Tt(t.inputs,7);if(o.dims.length===5)throw new Error("Packed QKV is not implemented");if((l==null?void 0:l.dims.length)===5)throw new Error("Packed KV is not implemented");let v=l&&u&&l.dims.length===4&&u.dims.length===4,w=Li(t,a.batchSize,a.numHeads,a.sequenceLength,a.headSize,o,d,0);if(v)return Ai(t,w,l,u,p,void 0,m,y,h,a);if(!l||!u)throw new Error("key and value must be provided");let x=Li(t,a.batchSize,a.numHeads,a.kvSequenceLength,a.headSize,l,d,a.hiddenSize),$=Li(t,a.batchSize,a.numHeads,a.kvSequenceLength,a.vHeadSize,u,d,2*a.hiddenSize);Ai(t,w,x,$,p,void 0,m,y,h,a)}}),pg,fg,hg,mg,Bl,gg,yg,vg=_(()=>{ve(),_e(),Ke(),xe(),pg=t=>{if(!t||t.length<1)throw new Error("too few inputs")},fg=(t,n)=>{let a=[],o=n.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(l=>a.push(Number(l))),o=a.length),Ae({numOutputs:o,axis:n.axis,splitSizes:a})},hg=t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${de("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`,mg=t=>{let n=t.length,a=[];for(let o=0;o<n;++o){let l=t[o].setByIndices("indices","input[global_idx]");n===1?a.push(l):o===0?a.push(`if (output_number == ${o}u) { ${l} }`):o===n-1?a.push(`else { ${l} }`):a.push(`else if (output_number == ${o}) { ${l} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${a.join(`
`)}
      }`},Bl=(t,n)=>{let a=t[0].dims,o=U.size(a),l=t[0].dataType,u=U.normalizeAxis(n.axis,a.length),d=new Array(n.numOutputs),p=W("input",l,a.length),h=new Array(n.numOutputs),m=[],y=[],v=0,w=[{type:12,data:o}];for(let $=0;$<n.numOutputs;$++){v+=n.splitSizes[$],h[$]=v;let S=a.slice();S[u]=n.splitSizes[$],y.push(S),d[$]=oe(`output${$}`,l,S.length),m.push({dims:y[$],dataType:t[0].dataType})}w.push({type:12,data:h},...pe(a,...y));let x=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",h.length).declareVariables(p,...d)}
  ${hg(h.length)}
  ${mg(d)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${p.offsetToIndices("global_idx")};
    var index = ${p.indicesGet("indices",u)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${de("uniforms.size_in_split_axis","output_number - 1u",h.length)};
      ${p.indicesSet("indices",u,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:m,dispatchGroup:{x:Math.ceil(o/64)},programUniforms:w})}},gg=(t,n)=>{pg(t.inputs);let a=t.inputs.length===1?n:fg(t.inputs,n);t.compute(Bl(t.inputs,a),{inputs:[0]})},yg=t=>{let n=t.axis,a=t.splitSizes,o=t.numOutputs<0?a.length:t.numOutputs;if(o!==a.length)throw new Error("numOutputs and splitSizes length must be equal");return Ae({axis:n,numOutputs:o,splitSizes:a})}}),wg,ns,_g,xg=_(()=>{ve(),_e(),Ke(),xe(),wg=(t,n)=>{let[a,o,l,u]=t,{numHeads:d,rotaryEmbeddingDim:p}=n;if(a.dims.length!==3&&a.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${a.dims.length}`);if(!U.areEqual(o.dims,[])&&!U.areEqual(o.dims,[1])&&o.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${o.dims.length}`);if(l.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${l.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!U.areEqual(l.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(p>0&&d===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let h=a.dims[0],m=a.dims[a.dims.length-2],y=l.dims[0],v=U.sizeFromDimension(a.dims,1)/m,w=p===0?l.dims[1]*2:v/d;if(p>w)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(o.dims.length===2){if(h!==o.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${o.dims[0]}`);if(m!==o.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${o.dims[1]}`)}if(m>y)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(w/2!==l.dims[1]&&p/2!==l.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${l.dims[1]}`)},ns=(t,n)=>{let{interleaved:a,numHeads:o,rotaryEmbeddingDim:l,scale:u}=n,d=t[0].dims[0],p=U.sizeFromDimension(t[0].dims,1),h=t[0].dims[t[0].dims.length-2],m=p/h,y=t[2].dims[1],v=l===0?y*2:m/o,w=new Array(d,h,m/v,v-y),x=U.computeStrides(w),$=[{type:1,data:u},{type:12,data:w},{type:12,data:x},...t[0].dims.length===3?new Array({type:12,data:[p,m,v,1]}):[],...t[0].dims.length===4?new Array({type:12,data:[p,v,h*v,1]}):[],...pe(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)],S=z=>{let E=W("input",t[0].dataType,t[0].dims.length),k=W("position_ids",t[1].dataType,t[1].dims.length),I=W("cos_cache",t[2].dataType,t[2].dims.length),C=W("sin_cache",t[3].dataType,t[3].dims.length),O=oe("output",t[0].dataType,t[0].dims.length);return z.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:w.length},{name:"global_strides",type:"u32",length:x.length},{name:"input_output_strides",type:"u32",length:x.length}]),`
        ${z.declareVariables(E,k,I,C,O)}

        ${z.mainStart(Xn)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${z.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${k.broadcastedIndicesToOffset("bsnh.xy",oe("",k.type.tensor,2))};
            let position_id =
                u32(${k.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${a});
            let j = i + select(half_rotary_emb_dim, 1, ${a});
            let re = ${E.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${E.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${E.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} +
                ${E.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",E.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ae({interleaved:a}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(w)/Xn)},programUniforms:$})}},_g=(t,n)=>{wg(t.inputs,n),t.compute(ns(t.inputs,n))}}),$g,bg,Dl,kg,Sg,ex=_(()=>{Ke(),ve(),fl(),cg(),vg(),Kr(),xg(),xe(),$g=(t,n)=>{if(n.doRotary&&t.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let a=t[0],o=t[1],l=t[2],u=t[3],d=t[4];if(n.doRotary!==0&&t.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(n.localWindowSize!==-1)throw new Error("Local attention is not supported");if(n.softcap!==0)throw new Error("Softcap is not supported");if(n.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(n.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(a.dims.length!==3&&a.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=!1,h=a.dims[0],m=a.dims[1],y=a.dims.length===3?p?a.dims[2]/3:a.dims[2]:n.numHeads*a.dims[4],v=m,w=0,x=!o||o.dims.length===0,$=Math.floor(x?y/(n.numHeads+2*n.kvNumHeads):y/n.numHeads);x&&(y=$*n.numHeads);let S=u&&u.dims.length!==0,z=d&&d.dims.length!==0;if(S&&u.dims.length===4&&u.dims[0]===h&&u.dims[1]!==n.kvNumHeads&&u.dims[2]===n.kvNumHeads&&u.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&z){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2]}else if(S||z)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E=1;if(o&&o.dims.length>0){if(a.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(a.dims[2]%o.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');v=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==n.numHeads||o.dims[3]!==2||o.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(l)throw new Error('Expect "value" be none when "key" has packed kv format.');v=o.dims[1]}else{if(o.dims[1]!==n.numHeads||o.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=o.dims[2]}}else{if(a.dims.length!==3&&a.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(a.dims.length===5&&(a.dims[2]!==n.numHeads||a.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}let k=0,I=!1,C=n.kvNumHeads?$*n.kvNumHeads:y;if(l&&l.dims.length>0){if(l.dims.length!==3&&l.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==l.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(l.dims.length===3){if(v!==l.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=l.dims[2]}else{if(v!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=l.dims[1]*l.dims[3],I=!0}}let O=t.length>4?t[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let j=O.dims.reduce((L,V)=>L*V,1);if(j!==h)throw new Error(`seqlens_k must have batch_size (${h}) elements, got ${j}.`);for(let L=0;L<O.dims.length;L++)if(O.dims[L]!==1&&O.dims[L]!==h)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${h}), got dims[${L}] = ${O.dims[L]}.`)}return{batchSize:h,sequenceLength:m,pastSequenceLength:w,kvSequenceLength:v,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:y,vHiddenSize:C,headSize:$,vHeadSize:Math.floor(C/n.kvNumHeads),numHeads:n.numHeads,kvNumHeads:n.kvNumHeads,nReps:n.numHeads/n.kvNumHeads,pastPresentShareBuffer:!1,maskType:k,scale:n.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:E}},bg=Ae({perm:[0,2,1,3]}),Dl=(t,n,a)=>{let o=n,l=a.kvNumHeads;return n.dims.length===3&&a.kvSequenceLength!==0&&(o=n.reshape([a.batchSize,a.kvSequenceLength,l,a.headSize]),o=t.compute(Lt(o,bg.perm),{inputs:[o],outputs:[-1]})[0]),o},kg=(t,n,a,o)=>{let l=7,u=["type","type"],d=[t*n],p=t*n,h=[{type:12,data:p},{type:12,data:n},{type:12,data:t}],m=y=>{let v=W("seq_lens",a.dataType,a.dims),w=W("total_seq_lens",o.dataType,o.dims),x=oe("pos_ids",l,d),$=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${y.registerUniforms($).declareVariables(v,w,x)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${w.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${v.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${x.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${x.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${x.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${t};${n}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:d,dataType:l}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:m}},Sg=(t,n)=>{var C;let a=$g(t.inputs,n);if(t.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((C=t.inputs[1])==null?void 0:C.dims.length)===5)throw new Error("Packed KV is not implemented");let o=t.inputs[0],l=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,u=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,d=t.inputs[3]&&t.inputs[3].dims.length!==0?t.inputs[3]:void 0,p=t.inputs[4]&&t.inputs[4].dims.length!==0?t.inputs[4]:void 0,h=t.inputs.length>4?t.inputs[5]:void 0,m=t.inputs.length>5?t.inputs[6]:void 0,y=a.kvNumHeads?a.kvNumHeads:a.numHeads,v=Ae({axis:2,numOutputs:3,splitSizes:[a.numHeads*a.headSize,y*a.headSize,y*a.headSize]}),[w,x,$]=!l&&!u?t.compute(Bl([o],v),{inputs:[o],outputs:[-1,-1,-1]}):[o,l,u],S,z;if(n.doRotary){let O=t.compute(kg(a.batchSize,a.sequenceLength,h,m),{inputs:[h,m],outputs:[-1]})[0],j=t.inputs[7],L=t.inputs[8],V=Ae({interleaved:n.rotaryInterleaved!==0,numHeads:a.numHeads,rotaryEmbeddingDim:0,scale:n.scale}),F=[w,O,j,L],J=[-1];S=t.compute(ns(F,V),{inputs:F,outputs:J})[0],F.splice(0,1,x);let ge=Ae({interleaved:n.rotaryInterleaved!==0,numHeads:a.kvNumHeads,rotaryEmbeddingDim:0,scale:n.scale});z=t.compute(ns(F,ge),{inputs:F,outputs:J})[0]}let E=Li(t,a.batchSize,a.numHeads,a.sequenceLength,a.headSize,n.doRotary?S:w,void 0,0),k=Dl(t,n.doRotary?z:x,a),I=Dl(t,$,a);Ai(t,E,k,I,void 0,void 0,d,p,void 0,a,h,m)}}),Ll,Eg,Tg,zg,tx=_(()=>{ve(),_e(),Kr(),xe(),Ll=(t,n,a,o,l,u,d,p)=>{let h=Ge(u),m=h===1?"f32":`vec${h}f`,y=h===1?"vec2f":`mat2x${h}f`,v=l*d,w=64;v===1&&(w=256);let x=[l,d,u/h],$=[l,d,2],S=["rank","type","type"],z=[];z.push(...pe(x,$));let E=k=>{let I=W("x",n.dataType,3,h),C=W("scale",a.dataType,a.dims),O=W("bias",o.dataType,o.dims),j=oe("output",1,3,2),L=[I,C,O,j];return`
  var<workgroup> workgroup_shared : array<${y}, ${w}>;
  const workgroup_size = ${w}u;
  ${k.declareVariables(...L)}
  ${k.mainStart(w)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${m}(0);
    var squared_sum = ${m}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${m}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${y}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Hr("workgroup_shared[0][0]",h)} / f32(hight * ${h});
      let squared_sum_final = ${Hr("workgroup_shared[0][1]",h)} / f32(hight * ${h});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${p}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${h};${p};${w}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:v},programUniforms:z}),getShaderSource:E},{inputs:[n,a,o],outputs:[-1]})[0]},Eg=(t,n,a)=>{let o=n[0].dims,l=o,u=2,d=o[0],p=o[1],h=U.sizeFromDimension(o,u),m=Ge(h),y=U.size(l)/m,v=Ll(t,n[0],n[1],n[2],d,h,p,a.epsilon),w=[d,p,h/m],x=[d,p],$=["type","none"],S=z=>{let E=W("x",n[0].dataType,w.length,m),k=W("scale_shift",1,x.length,2),I=oe("output",n[0].dataType,w.length,m),C=[E,k,I];return`
  ${z.registerUniform("output_size","u32").declareVariables(...C)}
  ${z.mainStart()}
  ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${k.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${E.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};t.compute({name:"InstanceNormalization",shaderCache:{hint:`${m}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:l,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...pe(w,x,w)]}),getShaderSource:S},{inputs:[n[0],v]})},Tg=(t,n,a)=>{let o=n[0].dims,l=o,u=o[0],d=o[o.length-1],p=U.sizeFromDimension(o,1)/d,h=Ge(d),m=U.size(l)/h,y=[{type:12,data:p},{type:12,data:Math.floor(d/h)}],v=["type","type"],w=!1,x=[0,o.length-1];for(let E=0;E<o.length-2;E++)w=w||o[E+1]!==1,x.push(E+1);w=w&&o[o.length-1]!==1;let $=w?t.compute(Lt(t.inputs[0],x),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:o.length},(E,k)=>o[x[k]])),S=Ll(t,$,n[1],n[2],u,p,d,a.epsilon),z=E=>{let k=st(n[0].dataType),I=h===1?"vec2f":`mat${h}x2f`,C=L=>{let V=L===0?"x":"y",F=h===1?"f32":`vec${h}f`;switch(h){case 1:return`${k}(${F}(scale.${V}))`;case 2:return`vec2<${k}>(${F}(scale[0].${V}, scale[1].${V}))`;case 4:return`vec4<${k}>(${F}(scale[0].${V}, scale[1].${V}, scale[2].${V}, scale[3].${V}))`;default:throw new Error(`Not supported compoents ${h}`)}},O=W("input",n[0].dataType,n[0].dims,h),j=oe("output",n[0].dataType,l,h);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${j.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${E.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${C(0)}, ${C(1)});
  }`};t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${h}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:l,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:z},{inputs:[n[0],S]})},zg=(t,n)=>{n.format==="NHWC"?Tg(t,t.inputs,n):Eg(t,t.inputs,n)}}),Cg,Ig,Ng,rx=_(()=>{ve(),_e(),xe(),Cg=t=>{if(!t||t.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ig=(t,n,a)=>{let o=n.simplified,l=t[0].dims,u=t[1],d=!o&&t[2],p=l,h=U.normalizeAxis(n.axis,l.length),m=U.sizeToDimension(l,h),y=U.sizeFromDimension(l,h),v=U.size(u.dims),w=d?U.size(d.dims):0;if(v!==y||d&&w!==y)throw new Error(`Size of X.shape()[axis:] == ${y}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${v} and bias size of ${w}`);let x=[];for(let O=0;O<l.length;++O)O<h?x.push(l[O]):x.push(1);let $=Ge(y),S=["type","type"],z=[{type:12,data:m},{type:1,data:y},{type:12,data:Math.floor(y/$)},{type:1,data:n.epsilon}];d&&S.push("type");let E=a>1,k=a>2,I=O=>{let j=st(t[0].dataType),L=[W("x",t[0].dataType,t[0].dims,$),W("scale",u.dataType,u.dims,$)];d&&L.push(W("bias",d.dataType,d.dims,$)),L.push(oe("output",t[0].dataType,p,$)),E&&L.push(oe("mean_data_output",1,x)),k&&L.push(oe("inv_std_output",1,x));let V=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(V).declareVariables(...L)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${sl("f32",$)};
    var mean_square_vector = ${sl("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Zn(j,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Hr("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Hr("mean_square_vector",$)} / uniforms.norm_size ${o?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Zn(j,$,"x[j + offset]")};
      let f32scale = ${Zn(j,$,"scale[j]")};
      output[j + offset] = ${L[0].type.value}((f32input ${o?"":"- mean"}) * inv_std_dev * f32scale
        ${d?`+ ${Zn(j,$,"bias[j]")}`:""}
      );
    }

    ${E?"mean_data_output[global_idx] = mean":""};
    ${k?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},C=[{dims:p,dataType:t[0].dataType}];return E&&C.push({dims:x,dataType:1}),k&&C.push({dims:x,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${a};${o}`,inputDependencies:S},getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(m/64)},programUniforms:z}),getShaderSource:I}},Ng=(t,n)=>{Cg(t.inputs),t.compute(Ig(t.inputs,n,t.outputCount))}}),Rg,Og,nx=_(()=>{_e(),xl(),Sl(),Rg=t=>{if(!t||t.length!==2)throw new Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw new Error("shared dimension does not match.")},Og=t=>{Rg(t.inputs);let n=Qn.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!n)throw new Error("Can't use matmul on the given tensors");let a=n[n.length-1],o=t.inputs[0].dims[t.inputs[0].dims.length-1];if(a<8&&o<8)t.compute(_l(t.inputs,{activation:""},n));else{let l=n[n.length-2],u=U.size(t.inputs[0].dims.slice(0,-2)),d=U.size(t.inputs[1].dims.slice(0,-2));if(u!==1&&l===1&&d===1){let p=t.inputs[0].reshape([1,u,o]),h=t.inputs[1].reshape([1,o,a]),m=[1,u,a],y=[p,h];t.compute(Ja(y,{activation:""},n,m),{inputs:y})}else t.compute(Ja(t.inputs,{activation:""},n))}}}),Ag,Mg,Pg,Bg,Dg,ix=_(()=>{ve(),_e(),Ke(),xe(),Ag=(t,n)=>{if(t.length<3||t.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let a=t[0],o=a.dims.length;if(a.dims[o-1]!==n.k)throw new Error("The last dim of input shape does not match the k value");let l=Math.floor((n.k+n.blockSize-1)/n.blockSize),u=n.blockSize/8*n.bits,d=t[1];if(!U.areEqual(d.dims,[n.n,l,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let p=t[2].dims;if(U.size(p)!==n.n*l)throw new Error("scales input size error.");if(t.length===4){let h=t[3].dims,m=n.n*(n.bits===8?l:Math.floor((l*n.bits+7)/8));if(U.size(h)!==m)throw new Error("zeroPoints input size error.")}},Mg=(t,n)=>{let a=t[0].dims,o=a.length,l=a[o-2],u=n.k,d=n.n,p=a.slice(0,o-2),h=U.size(p),m=t[1].dims[2]/4,y=t[0].dataType,v=Ge(n.k),w=Ge(m),x=Ge(d),$=p.concat([l,d]),S=l>1&&d/x%2===0?2:1,z=U.size($)/x/S,E=64,k=[],I=[h,l,u/v],C=U.convertShape(t[1].dims).slice();C.splice(-1,1,m/w),k.push(...pe(I)),k.push(...pe(C)),k.push(...pe(t[2].dims)),t.length===4&&k.push(...pe(U.convertShape(t[3].dims)));let O=[h,l,d/x];k.push(...pe(O));let j=L=>{let V=I.length,F=W("a",t[0].dataType,V,v),J=W("b",12,C.length,w),ge=W("scales",t[2].dataType,t[2].dims.length),fe=[F,J,ge],he=t.length===4?W("zero_points",12,t[3].dims.length):void 0;he&&fe.push(he);let Se=O.length,Ce=oe("output",t[0].dataType,Se,x),me=st(t[0].dataType),we=(()=>{switch(v){case 1:return`array<${me}, 8>`;case 2:return`mat4x2<${me}>`;case 4:return`mat2x4<${me}>`;default:throw new Error(`${v}-component is not supported.`)}})(),et=Math.floor(32/n.bits),re=Math.floor(et/8),Ne=()=>{let ce="";for(let ne=0;ne<re;ne++){let De=ne*n.bits*4,Or=De+n.bits;ce+=`
          // reuse a data (pass ${ne})
            var input_offset${ne>0?ne:""} = ${ne===0?F.indicesToOffset(`${F.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${ne>0?ne:""}: ${we};
            for (var j${ne>0?ne:""}: u32 = 0; j${ne>0?ne:""} < ${8/v}; j${ne>0?ne:""}++) {
              a_data${ne>0?ne:""}[j${ne>0?ne:""}] = ${F.getByOffset(`input_offset${ne>0?ne:""}`)};
              input_offset${ne>0?ne:""}++;
            }
          `;for(let ht=0;ht<x*S;ht++)ce+=`
            b_value = ${w===1?`b${ht}_data`:`b${ht}_data[i]`};
            ${n.bits===2?`{
              let half_word = b_value >> ${ne*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${De}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Or}u) & b_mask);`}
            b_quantized_values = ${we}(${Array.from({length:4},(cr,pr)=>`${me}(b_value_lower[${pr}]), ${me}(b_value_upper[${pr}])`).join(", ")});
            b_dequantized_values = ${v===1?`${we}(${Array.from({length:8},(cr,pr)=>`(b_quantized_values[${pr}] - ${he?`zero_point${ht}`:"zero_point"}) * scale${ht}`).join(", ")});`:`(b_quantized_values - ${we}(${Array(8).fill(`${he?`zero_point${ht}`:"zero_point"}`).join(",")})) * scale${ht};`};
            workgroup_shared[local_id.x * ${S} + ${Math.floor(ht/x)}]${x>1?`[${ht%x}]`:""} += ${Array.from({length:8/v},(cr,pr)=>`${v===1?`a_data${ne>0?ne:""}[${pr}] * b_dequantized_values[${pr}]`:`dot(a_data${ne>0?ne:""}[${pr}], b_dequantized_values[${pr}])`}`).join(" + ")};
          `}return ce},Z=()=>{let ce=`
            var col_index = col * ${x};
            ${he?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/n.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,n.bits-1)} for unsigned ${n.bits}-bit quantization.
            let zero_point = ${me}(${Math.pow(2,n.bits-1).toFixed(1)});`}
            `;for(let ne=0;ne<x*S;ne++)ce+=`
            let scale${ne} = ${ge.getByOffset("col_index * nBlocksPerCol + block")};
            ${he?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${n.bits}u);
            zero_point_word = ${he.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ne} = ${me}((zero_point_word) & ${n.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return ce},se=()=>{let ce=`col_index = col * ${x};`;for(let ne=0;ne<x*S;ne++)ce+=`
            let b${ne}_data = ${J.getByIndices(`${J.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return ce+=`
            var b_value: u32;
            let b_mask: u32 = ${n.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${we};
            var b_dequantized_values: ${we};`,ce};return`
        var<workgroup> workgroup_shared: array<${Ce.type.value}, ${S*E}>;
        ${L.declareVariables(...fe,Ce)}
        ${L.mainStart([E,1,1])}
          let output_indices = ${Ce.offsetToIndices(`(global_idx / ${E}) * ${S}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${E}) {
            //process one block
            var word_offset: u32 = block * ${n.blockSize/v};
            ${Z()}
            for (var word: u32 = 0; word < ${m}; word += ${w}) {
              ${se()}
              for (var i: u32 = 0; i < ${w}; i++) {
                ${Ne()}
                word_offset += ${et/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${S}) {
            var output_value: ${Ce.type.value} = ${Ce.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${E}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${S};
            }
            ${Ce.setByIndices(`${Ce.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${n.blockSize};${n.bits};${v};${w};${x};${S};${E}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:y}],dispatchGroup:{x:z},programUniforms:k}),getShaderSource:j}},Pg=(t,n)=>{let a=t[0].dims,o=a.length,l=a[o-2],u=n.k,d=n.n,p=a.slice(0,o-2),h=U.size(p),m=t[1].dims[2]/4,y=t[0].dataType,v=Ge(n.k),w=Ge(m),x=p.concat([l,d]),$=128,S=d%8===0?8:d%4===0?4:1,z=$/S,E=Math.floor(32/n.bits),k=z*w*E,I=k/v,C=k/n.blockSize,O=U.size(x)/S,j=[],L=[h,l,u/v],V=U.convertShape(t[1].dims).slice();V.splice(-1,1,m/w),j.push(...pe(L)),j.push(...pe(V)),j.push(...pe(t[2].dims)),t.length===4&&j.push(...pe(U.convertShape(t[3].dims)));let F=[h,l,d];j.push(...pe(F));let J=ge=>{let fe=L.length,he=W("a",t[0].dataType,fe,v),Se=W("b",12,V.length,w),Ce=W("scales",t[2].dataType,t[2].dims.length),me=[he,Se,Ce],we=t.length===4?W("zero_points",12,t[3].dims.length):void 0;we&&me.push(we);let et=F.length,re=oe("output",t[0].dataType,et),Ne=st(t[0].dataType),Z=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${Ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${he.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${z}>, ${S}>;
        ${ge.declareVariables(...me,re)}
        ${ge.mainStart([z,S,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${S}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${$})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${he.getByIndices(`${he.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${he.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${we?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/n.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${n.bits}u);
            let zero_point_word = ${we.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Ne}((zero_point_word) & ${n.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,n.bits-1)} for unsigned ${n.bits}-bit quantization.
            let zero_point = ${Ne}(${Math.pow(2,n.bits-1).toFixed(1)});`}
            let scale = ${Ce.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Se.getByIndices(`${Se.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${n.blockSize/v};
            for (var i: u32 = 0; i < ${w}; i++) {
              let b_value = ${w===1?"b_data":"b_data[i]"};
              ${(()=>{let se=Math.floor(E/8),ce="";for(let ne=0;ne<se;ne++){let De=ne*n.bits*4,Or=De+n.bits;ce+=`
              ${Z()}
              {${n.bits===2?`
                let half_word = b_value >> ${ne*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${De}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Or}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Ne}>(${Array.from({length:4},(ht,cr)=>`${Ne}(b_value_lower[${cr}]), ${Ne}(b_value_upper[${cr}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ht,cr)=>`${`dot(a_data${cr}, b_dequantized_values[${cr}])`}`).join(" + ")};
              }
              word_offset += ${8/v};`}return ce})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${S}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${z}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${n.blockSize};${v};${w};${z};${S}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:y}],dispatchGroup:{x:O},programUniforms:j}),getShaderSource:J}},Bg=(t,n)=>{Ag(t.inputs,n),n.blockSize===32&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(Pg(t.inputs,n)):t.compute(Mg(t.inputs,n))},Dg=t=>Ae(t)}),Lg,jg,Ug,Vg,Wg,Fg,qg,Gg,Hg,ax=_(()=>{ve(),_e(),xe(),Lg=t=>{if(!t||t.length<1)throw new Error("Too few inputs");if(t[0].dataType!==1&&t[0].dataType!==10)throw new Error("Input type must be float or float16.");if(t.length>=2){let n=t[0].dims.length*2===t[1].dims[0];if(t.length===4&&(n=t[3].dims[0]*2===t[1].dims[0]),!n)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},jg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
            k = i32(${t.indicesGet("indices",l)}) - ${de("uniforms.pads",l,a)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${de("uniforms.x_shape",l,n)})) {
              break;
            }
            offset += k * i32(${de("uniforms.x_strides",l,n)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${o}
            value = x[offset];
          }
      `},Ug=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
                k = i32(${t.indicesGet("indices",l)}) - ${de("uniforms.pads",l,a)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${de("uniforms.x_shape",l,n)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${de("uniforms.x_shape",l,n)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${de("uniforms.x_strides",l,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Vg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
                k = i32(${t.indicesGet("indices",l)}) - ${de("uniforms.pads",l,a)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${de("uniforms.x_shape",l,n)})) {
                  k = i32(${de("uniforms.x_shape",l,n)}) - 1;
                }
                offset += k * i32(${de("uniforms.x_strides",l,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Wg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
                k = i32(${t.indicesGet("indices",l)}) - ${de("uniforms.pads",l,a)};
                if (k < 0)  {
                  k += i32(${de("uniforms.x_shape",l,n)}]);
                }
                if (k >= i32(${de("uniforms.x_shape",l,n)})) {
                  k -= i32(${de("uniforms.x_shape",l,n)});
                }
                offset += k * i32(${de("uniforms.x_strides",l,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Fg=(t,n,a)=>{switch(a.mode){case 0:return jg(t,n,a.pads.length);case 1:return Ug(t,n,a.pads.length);case 2:return Vg(t,n,a.pads.length);case 3:return Wg(t,n,a.pads.length);default:throw new Error("Invalid mode")}},qg=(t,n)=>{let a=U.padShape(t[0].dims.slice(),n.pads),o=t[0].dims,l=U.size(a),u=[{type:12,data:l},{type:6,data:n.pads}],d=t.length>=3&&t[2].data;n.mode===0&&u.push({type:d?t[2].dataType:1,data:n.value}),u.push(...pe(t[0].dims,a));let p=["rank"],h=m=>{let y=oe("output",t[0].dataType,a.length),v=W("x",t[0].dataType,o.length),w=v.type.value,x=Fg(y,o.length,n),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:n.pads.length}];return n.mode===0&&$.push({name:"constant_value",type:d?w:"f32"}),`
            ${m.registerUniforms($).declareVariables(v,y)}
            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${y.offsetToIndices("global_idx")};

            var value = ${w}(0);
            ${x}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${n.mode}${d}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(a)/64)},programUniforms:u}),getShaderSource:h}},Gg=(t,n)=>{if(t.length>1){let a=t[1].getBigInt64Array(),o=t.length>=3&&t[2].data?t[2].dataType===10?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,l=t[0].dims.length,u=new Int32Array(2*l).fill(0);if(t.length>=4){let p=t[3].getBigInt64Array();for(let h=0;h<p.length;h++)u[Number(p[h])]=Number(a[h]),u[Number(p[h])+l]=Number(a[h+p.length])}else a.forEach((p,h)=>u[Number(h)]=Number(p));let d=[];return u.forEach(p=>d.push(p)),{mode:n.mode,value:o,pads:d}}else return n},Hg=(t,n)=>{Lg(t.inputs);let a=Gg(t.inputs,n);t.compute(qg(t.inputs,a),{inputs:[0]})}}),ji,jl,Ul,Vl,Wl,Kg,Qg,Fl,ql,Xg,Zg,Gl,Yg,Jg,Hl,e0,t0,r0,n0,sx=_(()=>{Xt(),ve(),_e(),xe(),ji=t=>{if(H.webgpu.validateInputContent&&(!t||t.length!==1))throw new Error("Pool ops requires 1 input.")},jl=(t,n,a)=>{let o=n.format==="NHWC",l=t.dims.slice();o&&l.splice(1,0,l.pop());let u=Object.hasOwnProperty.call(n,"dilations"),d=n.kernelShape.slice(),p=n.strides.slice(),h=u?n.dilations.slice():[],m=n.pads.slice();Ga.adjustPoolAttributes(a,l,d,p,h,m);let y=Ga.computePoolOutputShape(a,l,p,h,d,m,n.autoPad),v=Object.assign({},n);u?Object.assign(v,{kernelShape:d,strides:p,pads:m,dilations:h,cacheKey:n.cacheKey}):Object.assign(v,{kernelShape:d,strides:p,pads:m,cacheKey:n.cacheKey});let w=y.slice();return w.push(w.splice(1,1)[0]),[v,o?w:y]},Ul=(t,n)=>{let a=n.format==="NHWC",o=U.size(t),l=U.size(n.kernelShape),u=[{type:12,data:o},{type:12,data:l}],d=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(n.kernelShape.length<=2){let p=n.kernelShape[n.kernelShape.length-1],h=n.strides[n.strides.length-1],m=n.pads[n.pads.length/2-1],y=n.pads[n.pads.length-1],v=!!(m+y);u.push({type:12,data:p},{type:12,data:h},{type:12,data:m},{type:12,data:y}),d.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let w=!1;if(n.kernelShape.length===2){let x=n.kernelShape[n.kernelShape.length-2],$=n.strides[n.strides.length-2],S=n.pads[n.pads.length/2-2],z=n.pads[n.pads.length-2];w=!!(S+z),u.push({type:12,data:x},{type:12,data:$},{type:12,data:S},{type:12,data:z}),d.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,d,!0,v,w]}else{if(a)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let p=U.computeStrides(n.kernelShape);u.push({type:12,data:p},{type:12,data:n.pads},{type:12,data:n.strides}),d.push({name:"kernelStrides",type:"u32",length:p.length},{name:"pads",type:"u32",length:n.pads.length},{name:"strides",type:"u32",length:n.strides.length});let h=n.pads.reduce((m,y)=>m+y);return[u,d,!!h,!1,!1]}},Vl=(t,n,a,o,l,u,d,p,h,m,y,v)=>{let w=l.format==="NHWC",x=n.type.value,$=oe("output",n.type.tensor,o);if(l.kernelShape.length<=2){let S="",z="",E="",k=a-(w?2:1);if(y?S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${k}] < 0 || xIndices[${k}]
                      >= uniforms.x_shape[${k}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${n.indicesToOffset("xIndices")}];
                  ${u}
                }`:S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${n.indicesToOffset("xIndices")}];
                  ${u}
                }`,l.kernelShape.length===2){let I=a-(w?3:2);v?z=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:z=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,E=`
              }
            `}return`
            ${t.registerUniforms(h).declareVariables(n,$)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${x}(${p});
              var pad = 0;
              ${z}
              ${S}
              ${E}
              ${d}

              output[global_idx] = value;
            }`}else{if(w)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=l.kernelShape.length,z=l.pads.length,E="";return m?E=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${n.indicesToOffset("xIndices")}];
                ${u}
              }`:E=`
              }
              let x_val = x[${n.indicesToOffset("xIndices")}];
              ${u}
            `,`
            ${t.registerUniforms(h).declareVariables(n,$)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${S}>;

              var value = ${x}(${p});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${S-1}u; j++) {
                  offsets[j] = offset / ${de("uniforms.kernelStrides","j",S)};
                  offset -= offsets[j] * ${de("uniforms.kernelStrides","j",S)};
                }
                offsets[${S-1}] = offset;

                isPad = false;
                for (var j = ${a-S}u; j < ${a}u; j++) {
                  xIndices[j] = indices[j] * ${de("uniforms.strides",`j - ${a-S}u`,S)}
                    + offsets[j - ${a-S}u] - ${de("uniforms.pads","j - 2u",z)};
                  ${E}
              }
              ${d}

              output[global_idx] = value;
            }`}},Wl=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,Kg=t=>`${Wl(t)};${t.countIncludePad}`,Qg=t=>`${Wl(t)};${t.storageOrder};${t.dilations}`,Fl=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),ql=(t,n,a,o)=>{let[l,u]=jl(n,o,a),d=W("x",n.dataType,n.dims.length),p=d.type.value,h="value += x_val;",m="";l.countIncludePad?m+=`value /= ${p}(uniforms.kernelSize);`:m+=`value /= ${p}(i32(uniforms.kernelSize) - pad);`;let[y,v,w,x,$]=Ul(u,l);y.push(...pe(n.dims,u));let S=["rank"];return{name:t,shaderCache:{hint:`${o.cacheKey};${w};${x};${$}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:u,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(U.size(u)/64)},programUniforms:y}),getShaderSource:z=>Vl(z,d,n.dims.length,u.length,l,h,m,0,v,w,x,$)}},Xg=t=>{let n=t.count_include_pad!==0,a=Fl(t);if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let o={countIncludePad:n,...a,cacheKey:""};return{...o,cacheKey:Kg(o)}},Zg=(t,n)=>{ji(t.inputs),t.compute(ql("AveragePool",t.inputs[0],!1,n))},Gl={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Yg=t=>{let n=t.format;return{format:n,...Gl,cacheKey:n}},Jg=(t,n)=>{ji(t.inputs),t.compute(ql("GlobalAveragePool",t.inputs[0],!0,n))},Hl=(t,n,a,o)=>{let[l,u]=jl(n,o,a),d=`
      value = max(x_val, value);
    `,p="",h=W("x",n.dataType,n.dims.length),m=["rank"],[y,v,w,x,$]=Ul(u,l);return y.push(...pe(n.dims,u)),{name:t,shaderCache:{hint:`${o.cacheKey};${w};${x};${$}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(U.size(u)/64)},programUniforms:y}),getShaderSource:S=>Vl(S,h,n.dims.length,u.length,l,d,p,n.dataType===10?-65504:-1e5,v,w,x,$)}},e0=(t,n)=>{ji(t.inputs),t.compute(Hl("MaxPool",t.inputs[0],!1,n))},t0=t=>{let n=t.storage_order,a=t.dilations,o=Fl(t);if(n!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(o.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let l={storageOrder:n,dilations:a,...o,cacheKey:""};return{...l,cacheKey:Qg(l)}},r0=t=>{let n=t.format;return{format:n,...Gl,cacheKey:n}},n0=(t,n)=>{ji(t.inputs),t.compute(Hl("GlobalMaxPool",t.inputs[0],!0,n))}}),i0,a0,s0,o0,ox=_(()=>{ve(),_e(),Ke(),xe(),i0=(t,n)=>{if(t.length<2||t.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(t.length===3&&t[1].dims===t[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==0&&t[1].dims.length!==1&&t[1].dims.length!==t[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((a,o)=>a===t[2].dims[o]).reduce((a,o)=>a&&o,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(n.blockSize>0){if(t[1].dims.length===0||t[1].dims.length===1&&t[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((l,u)=>u===n.axis||l===t[0].dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let a=t[0].dims[n.axis],o=t[1].dims[n.axis];if(n.blockSize<Math.ceil(a/o)||n.blockSize>Math.ceil(a/(o-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},a0=(t,n)=>{let a=U.normalizeAxis(n.axis,t[0].dims.length),o=t[0].dataType,l=o===3,u=t[0].dims,d=t[1].dataType,p=U.size(u),h=o===3||o===2,m=h?[Math.ceil(U.size(t[0].dims)/4)]:t[0].dims,y=t[1].dims,v=t.length>2?t[2]:void 0,w=v?h?[Math.ceil(U.size(v.dims)/4)]:v.dims:void 0,x=y.length===0||y.length===1&&y[0]===1,$=x===!1&&y.length===1,S=Ge(p),z=x&&(!h||S===4),E=z?S:1,k=z&&!h?S:1,I=W("input",h?12:o,m.length,k),C=W("scale",d,y.length),O=v?W("zero_point",h?12:o,w.length):void 0,j=oe("output",d,u.length,E),L=[I,C];O&&L.push(O);let V=[m,y];v&&V.push(w);let F=[{type:12,data:p/E},{type:12,data:a},{type:12,data:n.blockSize},...pe(...V,u)],J=ge=>{let fe=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ge.registerUniforms(fe).declareVariables(...L,j)}
      ${ge.mainStart()}
          ${ge.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${j.offsetToIndices("global_idx")};

          // Set input x
          ${h?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${l?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${E===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${x?`let scale_value= ${C.getByOffset("0")}`:$?`
            let scale_index = ${j.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${C.getByOffset("scale_index")};`:`
            var scale_indices: ${C.type.indices} = output_indices;
            let index = ${C.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${C.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${C.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?x?h?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${l?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:$?h?`
                let zero_point_index = ${j.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${l?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${j.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:h?`
                let zero_point_offset = ${C.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${l?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${h?l?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${j.setByOffset("global_idx",`${j.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:n.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:J,getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(p/E/64),y:1,z:1},programUniforms:F})}},s0=(t,n)=>{i0(t.inputs,n),t.compute(a0(t.inputs,n))},o0=t=>Ae({axis:t.axis,blockSize:t.blockSize})}),l0,u0,d0,lx=_(()=>{Xt(),ve(),xe(),l0=(t,n,a)=>{let o=t===n,l=t<n&&a<0,u=t>n&&a>0;if(o||l||u)throw new Error("Range these inputs' contents are invalid.")},u0=(t,n,a,o)=>{let l=Math.abs(Math.ceil((n-t)/a)),u=[l],d=l,p=[{type:12,data:d},{type:o,data:t},{type:o,data:a},...pe(u)],h=m=>{let y=oe("output",o,u.length),v=y.type.value,w=[{name:"outputSize",type:"u32"},{name:"start",type:v},{name:"delta",type:v}];return`
        ${m.registerUniforms(w).declareVariables(y)}
        ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${v}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${o}`},getShaderSource:h,getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p})}},d0=t=>{let n=0,a=0,o=0;t.inputs[0].dataType===6?(n=t.inputs[0].getInt32Array()[0],a=t.inputs[1].getInt32Array()[0],o=t.inputs[2].getInt32Array()[0]):t.inputs[0].dataType===1&&(n=t.inputs[0].getFloat32Array()[0],a=t.inputs[1].getFloat32Array()[0],o=t.inputs[2].getFloat32Array()[0]),H.webgpu.validateInputContent&&l0(n,a,o),t.compute(u0(n,a,o,t.inputs[0].dataType),{inputs:[]})}}),c0,p0,f0,h0,ux=_(()=>{ve(),_e(),Ke(),xe(),c0=(t,n,a,o)=>{if(t!=="none"&&o!=="i32"&&o!=="u32"&&o!=="f32")throw new Error(`Input ${o} is not supported with reduction ${t}.`);let l=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,u=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${n}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${n}=${a};`;case"add":return o==="i32"||o==="u32"?`atomicAdd(&${n}, bitcast<${o}>(${a}));`:`
              ${l}bitcast<${o}>(oldValue) + (${a})${u}`;case"max":return o==="i32"||o==="u32"?`atomicMax(&${n}, bitcast<${o}>(${a}));`:`
                ${l}max(bitcast<f32>(oldValue), (${a}))${u}`;case"min":return o==="i32"||o==="u32"?`atomicMin(&${n}, bitcast<${o}>(${a}));`:`${l}min(bitcast<${o}>(oldValue), (${a}))${u}`;case"mul":return`${l}(bitcast<${o}>(oldValue) * (${a}))${u}`;default:throw new Error(`Reduction ${t} is not supported.`)}},p0=(t,n)=>{let a=t[0].dims,o=t[1].dims,l=a,u=1,d=Math.ceil(U.sizeToDimension(o,o.length-1)/u),p=o[o.length-1],h=U.sizeFromDimension(a,p),m=[{type:12,data:d},{type:12,data:p},{type:12,data:h},...pe(t[1].dims,t[2].dims,l)],y=v=>{let w=W("indices",t[1].dataType,t[1].dims.length),x=W("updates",t[2].dataType,t[2].dims.length,u),$=n.reduction!=="none"&&n.reduction!==""?wp("output",t[0].dataType,l.length):oe("output",t[0].dataType,l.length,u);return`
      ${v.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(w,x,$)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${t[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${c0(n.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${n.cacheKey}_${n.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y}},f0=t=>Ae({reduction:t.reduction}),h0=(t,n)=>{t.compute(p0(t.inputs,n),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),m0,g0,y0,Kl,v0,w0,_0,x0,$0,b0,k0,S0,Ql,E0,T0,z0,C0,I0,N0,R0,dx=_(()=>{ve(),_e(),Ke(),xe(),m0=(t,n)=>{if(t.every(a=>a>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),t.length>0){if(n.mode==="linear"){if(!(t.length===2||t.length===3||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1||t.length===5&&t[0]===1&&t[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(n.mode==="cubic"&&!(t.length===2||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},g0=(t,n,a)=>{n.every(l=>l>=0&&l<a||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let o=new Array(a).fill(1);return n.forEach((l,u)=>o[l]=t[u]),o},y0=(t,n,a,o,l,u)=>{let[d,p,h]=a>10?[1,2,3]:[-1,t.length>1?1:-1,-1],m=t[0].dims.length;if(d>0&&t.length>d&&t[d].dims.length>0)t[d].getFloat32Array().forEach(y=>u.push(y));else if(n.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(p>0&&t.length>p&&t[p].dims.length===1&&t[p].dims[0]>0){if(t[p].getFloat32Array().forEach(y=>o.push(y)),o.length!==0&&o.length!==m&&a>=18&&o.length!==n.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");m0(o,n),n.axes.length>0&&g0(o,n.axes,m).forEach((y,v)=>o[v]=y)}if(h>0&&t.length>h&&t[h].dims.length===1&&t[h].dims[0]>0&&(t[h].getBigInt64Array().forEach(y=>l.push(Number(y))),l.length!==0&&l.length!==m&&a>=18&&l.length!==n.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(n.axes.length>0){if(o.length!==0&&o.length!==n.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(l.length!==0&&l.length!==n.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof o<"u"&&typeof l<"u"&&o.length>0&&l.length>m)throw new Error("Resize requires only of scales or sizes to be specified")},Kl=(t,n,a,o)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${n});
  let whole = ${o}(big / (${a}));
  let fract = ${o}(big % (${a})) / ${o}(${a});
  return whole + fract;
`,v0=(t,n)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${n} { `+(()=>{switch(t){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${n}(xResized) / ${n}(xScale);
          } else {
            ${Kl("xResized","lengthOriginal","lengthResized",n)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${n}(xResized) + 0.5) / ${n}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${n}(xResized) + 0.5) / ${n}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Kl("xResized","lengthOriginal - 1","lengthResized - 1",n)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${n}(roiStart) * ${n}(lengthOriginal - 1) +
                        (${n}(xResized) * ${n}(roiEnd - roiStart) * ${n}(lengthOriginal - 1)) /
                        ${n}(lengthResized - 1);
                  } else {
                    return 0.5 * ${n}(roiStart + roiEnd) * ${n}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${n}xScale * ${n}(lengthResized);
                  const adjustment = ${n}(lengthResized) / outputWidth;
                  const center = ${n}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${n}(xResized) + 0.5) / ${n}(xScale)) - 0.5;`;case"half_pixel":return`return ((${n}(xResized) + 0.5) / ${n}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${t} is not supported`)}})()+"}",w0=(t,n,a)=>`fn getNearestPixelFromOriginal(xOriginal: ${a}, isDownSample: bool) -> ${a} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(n<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${t} is not supported`)}})()+"}",_0=(t,n,a)=>{let o=new Array(a).fill(0).concat(new Array(a).fill(1)),l=t.length===0?o:t.slice();return n.length>0?(n.forEach((u,d)=>{o[u]=l[d],o[d+a]=l[n.length+d]}),o):l},x0=(t,n,a,o)=>{let l=[];if(a.length>0)if(o.length>0){if(t.forEach(u=>l.push(u)),Math.max(...o)>t.length)throw new Error("axes is out of bound");o.forEach((u,d)=>l[u]=a[d])}else a.forEach(u=>l.push(u));else{if(n.length===0)throw new Error("Resize requires either scales or sizes.");l=t.map((u,d)=>Math.round(u*n[d]))}return l},$0=(t,n,a)=>{let o=(()=>{switch(a.keepAspectRatioPolicy){case"not_larger":return a.axes.length>0?Math.min(...a.axes.map(u=>n[u]),Number.MAX_VALUE):Math.min(...n,Number.MAX_VALUE);case"not_smaller":return a.axes.length>0?Math.max(...a.axes.map(u=>n[u]),Number.MIN_VALUE):Math.max(...n,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${a.keepAspectRatioPolicy} is not supported`)}})();n.fill(1,0,n.length);let l=t.slice();return a.axes.length>0?(a.axes.forEach(u=>n[u]=o),a.axes.forEach(u=>l[u]=Math.round(t[u]*n[u]))):(n.fill(o,0,n.length),l.forEach((u,d)=>l[d]=Math.round(u*n[d]))),l},b0=(t,n,a,o,l)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${a.length}> {
      var original_indices: array<${t.type.value}, ${a.length}>;
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${de("uniforms.scales","i",o)};
        var roi_low = ${de("uniforms.roi","i",l)};
        var roi_hi = ${de("uniforms.roi",`i + ${n.length}`,l)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${de("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${de("uniforms.output_shape","i",a.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,k0=(t,n,a,o,l,u,d)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${n.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${o.length}; i++) {
        var output_index = ${n.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${de("uniforms.scales","i",l)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${de("uniforms.roi","i",u)};
          var roi_hi = ${de("uniforms.roi",`i + ${a.length}`,u)};
          var input_shape_i = ${de("uniforms.input_shape","i",a.length)};
          var output_shape_i = ${de("uniforms.output_shape","i",o.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${d} || (original_idx >= 0 && original_idx < ${n.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${n.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${t.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,S0=(t,n)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${de("uniforms.input_shape","i",n.length)}) {
          return false;
        }
      }
      return true;
    }`,Ql=(t,n,a,o)=>t.rank>o?`
    ${t.indicesSet("input_indices",n,"channel")};
    ${t.indicesSet("input_indices",a,"batch")};
`:"",E0=(t,n,a,o,l)=>{let[u,d,p,h]=a.length===2?[-1,0,1,-1]:[0,2,3,1],m=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",d,`max(0, min(row, ${a[d]} - 1))`)};
      ${t.indicesSet("input_indices",p,`max(0, min(col, ${a[p]} - 1))`)};
      ${Ql(t,h,u,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${n.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${m} = originalIndices[${d}];
      var col:${m} = originalIndices[${p}];
      ${o?`if (row < 0 || row > (${a[d]} - 1) || col < 0 || col > (${a[p]} - 1)) {
        return ${l};
      }`:""};
      row = max(0, min(row, ${a[d]} - 1));
      col = max(0, min(col, ${a[p]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${a.length>2?`u32(originalIndices[${h}])`:"0"};
      var batch: u32 =  ${a.length>2?`u32(originalIndices[${u}])`:"0"};
      var x11: ${m} = getInputValue(batch, channel, row1, col1);
      var x12: ${m} = getInputValue(batch, channel, row1, col2);
      var x21: ${m} = getInputValue(batch, channel, row2, col1);
      var x22: ${m} = getInputValue(batch, channel, row2, col2);
      var dx1: ${m} = abs(row - ${m}(row1));
      var dx2: ${m} = abs(${m}(row2) - row);
      var dy1: ${m} = abs(col - ${m}(col1));
      var dy2: ${m} = abs(${m}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},T0=(t,n,a,o,l,u,d,p,h,m)=>{let y=a.length===2,[v,w]=y?[0,1]:[2,3],x=t.type.value,$=S=>{let z=S===v?"row":"col";return`
      fn ${z}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${n.type.indices}) -> ${x} {
        var output_index = ${n.indicesGet("output_indices",S)};
        var originalIdx: ${x} = getOriginalCoordinateFromResizedCoordinate(output_index, ${l[S]},
        ${o[S]}, ${a[S]}, ${u[S]}, ${u[S]} + ${a.length});
        var fractOriginalIdx: ${x} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${p} && (originalIdx < 0 || originalIdx > (${a[S]} - 1))) {
          return ${h};
        }
        var data: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${z}: ${x} = originalIdx + ${x}(i);
          if (${z} < 0 || ${z} >= ${a[S]}) {
            ${m?`coefs[i + 1] = 0.0;
                        continue;`:p?`return ${h};`:`${z} = max(0, min(${z}, ${a[S]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",S,`u32(${z})`)};
          data[i + 1] = ${S===v?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(v)};
    ${$(w)};
  fn getCubicInterpolationCoefs(s: ${x}) -> array<${x}, 4> {
    var absS = abs(s);
    var coeffs: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${x} = 1.0 - absS;
    var twoMinusAbsS: ${x} = 2.0 - absS;
    var onePlusAbsS: ${x} = 1.0 + absS;
    coeffs[0] = ((${d} * onePlusAbsS - 5 * ${d}) * onePlusAbsS + 8 * ${d}) * onePlusAbsS - 4 * ${d};
    coeffs[1] = ((${d} + 2) * absS - (${d} + 3)) * absS * absS + 1;
    coeffs[2] = ((${d} + 2) * oneMinusAbsS - (${d} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${d} * twoMinusAbsS - 5 * ${d}) * twoMinusAbsS + 8 * ${d}) * twoMinusAbsS - 4 * ${d};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${x}, 4>, coefs: array<${x}, 4>) -> ${x} {
    var coefsSum: ${x} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${n.type.indices}) -> ${x} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},z0=(t,n,a,o,l)=>{let[u,d,p,h,m]=a.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],y=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${y} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",d,`max(0, min(depth, ${a[d]} - 1))`)};
      ${t.indicesSet("input_indices",p,`max(0, min(height, ${a[p]} - 1))`)};
      ${t.indicesSet("input_indices",h,`max(0, min(width, ${a[h]} - 1))`)};
      ${Ql(t,m,u,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${n.type.indices}) -> ${y} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${y} = originalIndices[${d}];
      var height:${y} = originalIndices[${p}];
      var width:${y} = originalIndices[${h}];
      ${o?`if (depth < 0 || depth > (${a[d]} - 1) || height < 0 || height > (${a[p]} - 1) || width < 0 || (width > ${a[h]} - 1)) {
      return ${l};
        }`:""};

    depth = max(0, min(depth, ${a[d]} - 1));
      height = max(0, min(height, ${a[p]} - 1));
      width = max(0, min(width, ${a[h]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${a.length>3?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${a.length>3?`u32(originalIndices[${u}])`:"0"};

      var x111: ${y} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${y} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${y} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${y} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${y} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${y} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${y} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${y} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${y} = abs(depth - ${y}(depth1));
      var dx2: ${y} = abs(${y}(depth2) - depth);
      var dy1: ${y} = abs(height - ${y}(height1));
      var dy2: ${y} = abs(${y}(height2) - height);
      var dz1: ${y} = abs(width - ${y}(width1));
      var dz2: ${y} = abs(${y}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},C0=(t,n,a,o,l,u)=>{let d=t.dims,p=_0(u,n.axes,d.length),h=x0(d,o,l,n.axes),m=o.slice();o.length===0&&(m=d.map((k,I)=>k===0?1:h[I]/k),n.keepAspectRatioPolicy!=="stretch"&&(h=$0(d,m,n)));let y=oe("output",t.dataType,h.length),v=W("input",t.dataType,d.length),w=U.size(h),x=d.length===h.length&&d.every((k,I)=>k===h[I]),$=n.coordinateTransformMode==="tf_crop_and_resize",S=n.extrapolationValue,z=v.type.value,E=k=>`
      ${x?"":`
      ${v0(n.coordinateTransformMode,z)};
      ${(()=>{switch(n.mode){case"nearest":return`
              ${S0(v,d)};
              ${w0(n.nearestMode,a,z)};
              ${k0(v,y,d,h,m.length,p.length,$)};
              `;case"linear":return`
              ${b0(y,d,h,m.length,p.length)};
              ${(()=>{if(d.length===2||d.length===4)return`${E0(v,y,d,$,S)}`;if(d.length===3||d.length===5)return`${z0(v,y,d,$,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(d.length===2||d.length===4)return`${T0(v,y,d,h,m,p,n.cubicCoeffA,$,n.extrapolationValue,n.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${k.registerUniform("output_size","u32").registerUniform("scales","f32",m.length).registerUniform("roi","f32",p.length).declareVariables(v,y)}
      ${k.mainStart()}
        ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${x?"output[global_idx] = input[global_idx];":`
        let output_indices = ${y.offsetToIndices("global_idx")};
        var input_indices: ${v.type.indices};
        ${(()=>{switch(n.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${v.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${n.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${d.length===2||d.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${n.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${n.cacheKey}|${a}|${m.length>0?n.mode==="cubic"?m:m.length:""}|${l.length>0?l:""}|${p.length>0?p:""}|${x}|${n.mode==="nearest"?d.length:d}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:h,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},{type:1,data:m},{type:1,data:p},...pe(d,h)]})}},I0=t=>{let n=t.customDataBuffer;return new Uint32Array(n,n.byteOffset,1)[0]},N0=(t,n)=>{let a=[],o=[],l=[],u=I0(t);if(n.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");y0(t.inputs,n,u,a,o,l),t.compute(C0(t.inputs[0],n,u,a,o,l),{inputs:[0]})},R0=t=>{let n=t.antialias,a=t.axes,o=t.coordinateTransformMode,l=t.cubicCoeffA,u=t.excludeOutside!==0,d=t.extrapolationValue,p=t.keepAspectRatioPolicy,h=t.mode,m=t.nearestMode===""?"simple":t.nearestMode;return Ae({antialias:n,axes:a,coordinateTransformMode:o,cubicCoeffA:l,excludeOutside:u,extrapolationValue:d,keepAspectRatioPolicy:p,mode:h,nearestMode:m})}}),O0,A0,M0,cx=_(()=>{ve(),_e(),xe(),O0=t=>{if(!t||t.length<3)throw new Error("layerNorm requires at least 3 inputs.");let n=t[0],a=t[1],o=t[2];if(n.dataType!==a.dataType||n.dataType!==o.dataType)throw new Error("All inputs must have the same data type");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Input must be 2D or 3D");if(a.dims.length!==3&&a.dims.length!==2)throw new Error("Skip must be 2D or 3D");let l=n.dims[n.dims.length-1],u=n.dims[n.dims.length-2];if(a.dims[a.dims.length-1]!==l)throw new Error("Skip must have the same hidden size as input");if(a.dims[a.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(o.dims.length!==1)throw new Error("Gamma must be 1D");if(o.dims[o.dims.length-1]!==l)throw new Error("Gamma must have the same hidden size as input");if(t.length>3){let d=t[3];if(d.dims.length!==1)throw new Error("Beta must be 1D");if(d.dims[d.dims.length-1]!==l)throw new Error("Beta must have the same hidden size as input")}if(t.length>4){let d=t[4];if(d.dims.length!==1)throw new Error("Bias must be 1D");if(d.dims[d.dims.length-1]!==l)throw new Error("Bias must have the same hidden size as input")}},A0=(t,n,a,o)=>{let l=n.simplified,u=t[0].dims,d=U.size(u),p=u,h=d,m=u.slice(-1)[0],y=o?u.slice(0,-1).concat(1):[],v=!l&&t.length>3,w=t.length>4,x=o&&a>1,$=o&&a>2,S=a>3,z=64,E=Ge(m),k=[{type:12,data:h},{type:12,data:E},{type:12,data:m},{type:1,data:n.epsilon}],I=O=>{let j=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],L=[W("x",t[0].dataType,t[0].dims,E),W("skip",t[1].dataType,t[1].dims,E),W("gamma",t[2].dataType,t[2].dims,E)];v&&L.push(W("beta",t[3].dataType,t[3].dims,E)),w&&L.push(W("bias",t[4].dataType,t[4].dims,E)),L.push(oe("output",t[0].dataType,p,E)),x&&L.push(oe("mean_output",1,y)),$&&L.push(oe("inv_std_output",1,y)),S&&L.push(oe("input_skip_bias_sum",t[0].dataType,p,E));let V=st(t[0].dataType),F=st(1,E);return`

      ${O.registerUniforms(j).declareVariables(...L)}
      var<workgroup> sum_shared : array<${F}, ${z}>;
      var<workgroup> sum_squared_shared : array<${F}, ${z}>;

      ${O.mainStart([z,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${z};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${z};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${z-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${w?"bias[offset1d + i]":V+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${S?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Zn(V,E,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${z};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Hr("sum",E)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Hr("square_sum",E)} / f32(uniforms.hidden_size) ${l?"":"- mean * mean"} + uniforms.epsilon);
        ${x?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${l?"":`- ${V}(mean)`}) *
            ${V}(inv_std_dev) * gamma[offset1d + i]
            ${v?"+ beta[offset1d + i]":""};
        }
      }`},C=[{dims:p,dataType:t[0].dataType}];return a>1&&C.push({dims:y,dataType:1}),a>2&&C.push({dims:y,dataType:1}),a>3&&C.push({dims:u,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${E};${x};${$};${S}`,inputDependencies:t.map((O,j)=>"type")},getShaderSource:I,getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(h/m)},programUniforms:k})}},M0=(t,n)=>{O0(t.inputs);let a=[0];t.outputCount>1&&a.push(-3),t.outputCount>2&&a.push(-3),t.outputCount>3&&a.push(3),t.compute(A0(t.inputs,n,t.outputCount,!1),{outputs:a})}}),P0,Ui,B0,Xl,D0,L0,j0,U0,px=_(()=>{ve(),_e(),Ke(),xe(),P0=(t,n)=>{if(!t||t.length<1)throw new Error("too few inputs");if(n.axes.length!==0){if(n.axes.length!==n.starts.length||n.axes.length!==n.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(n.starts.length!==n.ends.length)throw new Error("starts and ends must have the same length");t.slice(1).forEach((a,o)=>{if(t[o+1].dataType!==6&&t[o+1].dataType!==7)throw new Error(`Input ${o} must be an array of int32 or int64`)})},Ui=(t,n)=>{let a=[];if(t.length>n)if(t[n].dataType===7)t[n].getBigInt64Array().forEach(o=>a.push(Number(o)));else if(t[n].dataType===6)t[n].getInt32Array().forEach(o=>a.push(Number(o)));else throw new Error(`Input ${n} must be an array of int32 or int64`);return a},B0=(t,n)=>{if(t.length>1){let a=Ui(t,1),o=Ui(t,2),l=Ui(t,3);return l.length===0&&(l=[...Array(t[0].dims.length).keys()]),Ae({starts:a,ends:o,axes:l})}else return n},Xl=(t,n,a,o,l)=>{let u=t;return t<0&&(u+=a[o[n]]),l[n]<0?Math.max(0,Math.min(u,a[o[n]]-1)):Math.max(0,Math.min(u,a[o[n]]))},D0=(t,n,a)=>`fn calculateInputIndices(output_indices: ${n.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${a.length-1}; i >= 0; i--) {
            let input_shape_i = ${de("uniforms.input_shape","i",a.length)};
            let steps_i = ${de("uniforms.steps","i",a.length)};
            let signs_i = ${de("uniforms.signs","i",a.length)};
            let starts_i = ${de("uniforms.starts","i",a.length)};
            var output_index = ${n.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${t.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,L0=(t,n)=>{let a=t[0].dims,o=U.size(a),l=n.axes.length>0?U.normalizeAxes(n.axes,a.length):[...Array(a.length).keys()],u=Ui(t,4);u.forEach(E=>E!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(l.length).fill(1));let d=n.starts.map((E,k)=>Xl(E,k,a,l,u)),p=n.ends.map((E,k)=>Xl(E,k,a,l,u));if(l.length!==d.length||l.length!==p.length)throw new Error("start, ends and axes should have the same number of elements");if(l.length!==a.length)for(let E=0;E<a.length;++E)l.includes(E)||(d.splice(E,0,0),p.splice(E,0,a[E]),u.splice(E,0,1));let h=u.map(E=>Math.sign(E));u.forEach((E,k,I)=>{if(E<0){let C=(p[k]-d[k])/E,O=d[k],j=O+C*u[k];d[k]=j,p[k]=O,I[k]=-E}});let m=a.slice(0);l.forEach((E,k)=>{m[E]=Math.ceil((p[E]-d[E])/u[E])});let y={dims:m,dataType:t[0].dataType},v=oe("output",t[0].dataType,m.length),w=W("input",t[0].dataType,t[0].dims.length),x=U.size(m),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:d.length},{name:"signs",type:"i32",length:h.length},{name:"steps",type:"u32",length:u.length}],S=[{type:12,data:x},{type:12,data:d},{type:6,data:h},{type:12,data:u},...pe(t[0].dims,m)],z=E=>`
      ${E.registerUniforms($).declareVariables(w,v)}
        ${D0(w,v,a)}
        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${v.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${v.setByOffset("global_idx",w.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${h.length}_${d.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:z,getRunData:()=>({outputs:[y],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:S})}},j0=(t,n)=>{P0(t.inputs,n);let a=B0(t.inputs,n);t.compute(L0(t.inputs,a),{inputs:[0]})},U0=t=>{let n=t.starts,a=t.ends,o=t.axes;return Ae({starts:n,ends:a,axes:o})}}),V0,W0,F0,q0,fx=_(()=>{ve(),_e(),Ke(),Kr(),xe(),V0=t=>{if(!t||t.length!==1)throw new Error("Softmax op requires 1 input.")},W0=(t,n)=>{let a=t.inputs[0],o=a.dims,l=U.size(o),u=o.length,d=U.normalizeAxis(n.axis,u),p=d<o.length-1,h,m=[];p?(m=Array.from({length:u},(L,V)=>V),m[d]=u-1,m[u-1]=d,h=t.compute(Lt(a,m),{inputs:[a],outputs:[-1]})[0]):h=a;let y=h.dims,v=y[u-1],w=l/v,x=Ge(v),$=v/x,S=64;w===1&&(S=256);let z=(L,V)=>V===4?`max(max(${L}.x, ${L}.y), max(${L}.z, ${L}.w))`:V===2?`max(${L}.x, ${L}.y)`:V===3?`max(max(${L}.x, ${L}.y), ${L}.z)`:L,E=W("x",h.dataType,h.dims,x),k=oe("result",h.dataType,h.dims,x),I=E.type.value,C=st(h.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,O=L=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${S}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${L.registerUniform("packedCols","i32").declareVariables(E,k)}
      ${L.mainStart(S)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${S};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${C}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${z("threadShared[0]",x)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${Hr("threadShared[0]",x)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,j=t.compute({name:"Softmax",shaderCache:{hint:`${x};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:y,dataType:h.dataType}],dispatchGroup:{x:w},programUniforms:[{type:6,data:$}]}),getShaderSource:O},{inputs:[h],outputs:[p?-1:0]})[0];p&&t.compute(Lt(j,m),{inputs:[j]})},F0=(t,n)=>{V0(t.inputs),W0(t,n)},q0=t=>Ae({axis:t.axis})}),Zl,G0,H0,K0,Q0,hx=_(()=>{ve(),_e(),xe(),Zl=t=>Array.from(t.getBigInt64Array(),Number),G0=t=>{if(!t||t.length!==2)throw new Error("Tile requires 2 inputs.");if(t[0].dataType!==1&&t[0].dataType!==10&&t[0].dataType!==6&&t[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(t[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(t[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Zl(t[1]).length!==t[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},H0=(t,n)=>{let a=[];for(let o=0;o<t.length;++o)a.push(t[o]*n[o]);return a},K0=(t,n)=>{let a=t[0].dims,o=n??Zl(t[1]),l=H0(a,o),u=U.size(l),d=t[0].dataType,p=W("input",d,a.length),h=oe("output",d,l.length),m=y=>`
      const inputShape = ${p.indices(...a)};
      ${y.registerUniform("output_size","u32").declareVariables(p,h)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${h.offsetToIndices("global_idx")};
      var input_indices: ${p.type.indices};
      for (var i = 0; i < ${a.length}; i++) {
        let input_dim_i = ${p.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${h.indicesGet("output_indices","i")}  % input_dim_i;

        ${p.indicesSet("input_indices","i","input_dim_value")}
      }
      ${h.setByOffset("global_idx",p.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${o}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:l,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...pe(t[0].dims,l)]}),getShaderSource:m}},Q0=t=>{G0(t.inputs),t.compute(K0(t.inputs),{inputs:[0]})}}),X0,Z0,Y0,mx=_(()=>{ve(),_e(),xe(),X0=(t,n,a,o,l)=>{let u=oe("output_data",l,a.length,4),d=W("a_data",n[1].dataType,n[1].dims.length,4),p=W("b_data",n[2].dataType,n[2].dims.length,4),h=W("c_data",n[0].dataType,n[0].dims.length,4),m,y=(v,w,x)=>`select(${w}, ${v}, ${x})`;if(!o)m=u.setByOffset("global_idx",y(d.getByOffset("global_idx"),p.getByOffset("global_idx"),h.getByOffset("global_idx")));else{let v=(w,x,$="")=>{let S=`a_data[index_a${x}][component_a${x}]`,z=`b_data[index_b${x}][component_b${x}]`,E=`bool(c_data[index_c${x}] & (0xffu << (component_c${x} * 8)))`;return`
            let output_indices${x} = ${u.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offset_a${x} = ${d.broadcastedIndicesToOffset(`output_indices${x}`,u)};
            let offset_b${x} = ${p.broadcastedIndicesToOffset(`output_indices${x}`,u)};
            let offset_c${x} = ${h.broadcastedIndicesToOffset(`output_indices${x}`,u)};
            let index_a${x} = offset_a${x} / 4u;
            let index_b${x} = offset_b${x} / 4u;
            let index_c${x} = offset_c${x} / 4u;
            let component_a${x} = offset_a${x} % 4u;
            let component_b${x} = offset_b${x} % 4u;
            let component_c${x} = offset_c${x} % 4u;
            ${w}[${x}] = ${$}(${y(S,z,E)});
          `};l===9?m=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:m=`
            ${v("output_data[global_idx]",0)}
            ${v("output_data[global_idx]",1)}
            ${v("output_data[global_idx]",2)}
            ${v("output_data[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(h,d,p,u)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${m}
      }`},Z0=t=>{let n=t[1].dims,a=t[2].dims,o=t[0].dims,l=t[1].dataType,u=!(U.areEqual(n,a)&&U.areEqual(a,o)),d=n,p=U.size(n);if(u){let m=Qn.calcShape(Qn.calcShape(n,a,!1),o,!1);if(!m)throw new Error("Can't perform where op on the given tensors");d=m,p=U.size(d)}let h=Math.ceil(p/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:m=>X0(m,t,d,u,l),getRunData:()=>({outputs:[{dims:d,dataType:l}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:h},...pe(o,n,a,d)]})}},Y0=t=>{t.compute(Z0(t.inputs))}}),J0,gx=_(()=>{I_(),fl(),N_(),R_(),O_(),A_(),M_(),j_(),V_(),W_(),F_(),q_(),G_(),H_(),K_(),Q_(),X_(),Z_(),Y_(),J_(),ex(),tx(),rx(),nx(),ix(),cg(),ax(),sx(),ox(),lx(),ux(),dl(),dx(),xg(),cx(),px(),fx(),vg(),hx(),Kr(),yl(),mx(),J0=new Map([["Abs",[Of]],["Acos",[Af]],["Acosh",[Mf]],["Add",[$h]],["ArgMax",[vf,pl]],["ArgMin",[yf,pl]],["Asin",[Pf]],["Asinh",[Bf]],["Atan",[Df]],["Atanh",[Lf]],["Attention",[kf]],["AveragePool",[Zg,Xg]],["BatchNormalization",[zf]],["BiasAdd",[Nf]],["BiasSplitGelu",[wh]],["Cast",[Uf,jf]],["Ceil",[Ff]],["Clip",[Wf]],["Concat",[Ph,Bh]],["Conv",[Il,zl]],["ConvTranspose",[dm,om]],["Cos",[qf]],["Cosh",[Gf]],["CumSum",[pm,fm]],["DepthToSpace",[ym,vm]],["DequantizeLinear",[s0,o0]],["Div",[bh]],["Einsum",[km,Sm]],["Elu",[Hf,Mi]],["Equal",[kh]],["Erf",[Kf]],["Exp",[Qf]],["Expand",[Cm]],["FastGelu",[Nm]],["Floor",[Xf]],["FusedConv",[Il,zl]],["Gather",[Mm,Am]],["GatherElements",[Gm,qm]],["GatherBlockQuantized",[Um,Vm]],["GatherND",[Bm,Dm]],["Gelu",[Zf]],["Gemm",[Xm,Qm]],["GlobalAveragePool",[Jg,Yg]],["GlobalMaxPool",[n0,r0]],["Greater",[zh]],["GreaterOrEqual",[Ih]],["GridSample",[ag,sg]],["GroupQueryAttention",[Sg]],["HardSigmoid",[ah,ih]],["InstanceNormalization",[zg]],["LayerNormalization",[Ng]],["LeakyRelu",[Yf,Mi]],["Less",[Ch]],["LessOrEqual",[Nh]],["Log",[fh]],["MatMul",[Og]],["MatMulNBits",[Bg,Dg]],["MaxPool",[e0,t0]],["Mul",[Sh]],["MultiHeadAttention",[dg,lg]],["Neg",[eh]],["Not",[Jf]],["Pad",[Hg]],["Pow",[Eh]],["QuickGelu",[gh,Mi]],["Range",[d0]],["Reciprocal",[th]],["ReduceMin",[pf]],["ReduceMean",[of]],["ReduceMax",[cf]],["ReduceSum",[hf]],["ReduceProd",[ff]],["ReduceL1",[lf]],["ReduceL2",[uf]],["ReduceLogSum",[gf]],["ReduceLogSumExp",[df]],["ReduceSumSquare",[mf]],["Relu",[rh]],["Resize",[N0,R0]],["RotaryEmbedding",[_g]],["ScatterND",[h0,f0]],["Sigmoid",[nh]],["Sin",[sh]],["Sinh",[oh]],["Slice",[j0,U0]],["SkipLayerNormalization",[M0]],["Split",[gg,yg]],["Sqrt",[lh]],["Softmax",[F0,q0]],["Sub",[Th]],["Tan",[uh]],["Tanh",[dh]],["ThresholdedRelu",[ph,Mi]],["Tile",[Q0]],["Transpose",[Tp,zp]],["Where",[Y0]]])}),ey,yx=_(()=>{Xt(),Nr(),xe(),ey=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,n){this.repo.set(t,n)}run(t,n,a,o,l){ir(t.programInfo.name);let u=this.backend.device,d=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let p=[];for(let m of n)p.push({binding:p.length,resource:{buffer:m.buffer}});for(let m of a)p.push({binding:p.length,resource:{buffer:m.buffer}});l&&p.push({binding:p.length,resource:l});let h=u.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:p,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:h,dispatchGroup:o};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}d.setPipeline(t.computePipeline),d.setBindGroup(0,h),d.dispatchWorkgroups(...o),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qt(t.programInfo.name)}dispose(){}build(t,n){ir(t.name);let a=this.backend.device,o=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(m=>{a.features.has(m.feature)&&o.push(`enable ${m.extension};`)});let l=xp(n,this.backend.device.limits),u=t.getShaderSource(l),d=`${o.join(`
`)}
${l.additionalImplementations}
${u}`,p=a.createShaderModule({code:d,label:t.name});Ee("verbose",()=>`[WebGPU] ${t.name} shader code: ${d}`);let h=a.createComputePipeline({compute:{module:p,entryPoint:"main"},layout:"auto",label:t.name});return Qt(t.name),{programInfo:t,computePipeline:h,uniformVariablesInfo:l.variablesInfo}}normalizeDispatchGroupSize(t){let n=typeof t=="number"?t:t.x,a=typeof t=="number"?1:t.y||1,o=typeof t=="number"?1:t.z||1,l=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(n<=l&&a<=l&&o<=l)return[n,a,o];let u=n*a*o,d=Math.ceil(Math.sqrt(u));if(d>l){if(d=Math.ceil(Math.cbrt(u)),d>l)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[d,d,d]}else return[d,d,1]}}}),ty={};N(ty,{WebGpuBackend:()=>ay});var ry,ny,iy,ay,vx=_(()=>{Xt(),ve(),Nr(),op(),z_(),gx(),yx(),ry=(t,n)=>{if(n.length!==t.length)throw new Error(`inputDependencies length ${n.length} is not equal to inputTensors length ${t.length}.`);let a=[];for(let o=0;o<t.length;++o){let l=t[o].dataType;switch(n[o]){case"none":{a.push("");break}case"type":{a.push(`${l}`);break}case"rank":{let u=t[o].dims.length;a.push(`${l};${u}`);break}case"dims":{let u=t[o].dims.join(",");a.push(`${l};${u}`);break}default:throw new Error(`unsupported input dependency: ${n[o]}`)}}return a.join("|")},ny=(t,n,a)=>{var l,u;let o=t.name;return(l=t.shaderCache)!=null&&l.hint&&(o+="["+t.shaderCache.hint+"]"),o+=":"+a+`:${ry(n,((u=t.shaderCache)==null?void 0:u.inputDependencies)??new Array(n.length).fill("dims"))}`,o},iy=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},ay=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,n){this.env=t;let a=[],o={requiredLimits:{maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxBufferSize:n.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ},requiredFeatures:a},l=u=>n.features.has(u)&&a.push(u)&&!0;l("chromium-experimental-timestamp-query-inside-passes")||l("timestamp-query"),l("shader-f16"),l("subgroups"),this.device=await n.requestDevice(o),this.adapterInfo=new iy(n.info||await n.requestAdapterInfo()),this.gpuDataManager=yp(this),this.programManager=new ey(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ho(t.logLevel,!!t.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:n,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var t;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((t=this.env)!=null&&t.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),n={};this.queryType==="at-passes"&&(n.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(n)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ir(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{var o;let n=new BigUint64Array(t.getMappedRange()),a=this.pendingQueries.get(t);for(let l=0;l<n.length/2;l++){let u=a[l],d=u.kernelId,p=this.kernels.get(d),h=p.kernelType,m=p.kernelName,y=u.programName,v=u.inputTensorViews,w=u.outputTensorViews,x=n[l*2],$=n[l*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=x);let S=Number(x-this.queryTimeBase),z=Number($-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(z))throw new RangeError("incorrect timestamp range");if((o=this.env.webgpu.profiling)!=null&&o.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:v.map(E=>({dims:E.dims,dataType:Ir(E.dataType)})),outputsMetadata:w.map(E=>({dims:E.dims,dataType:Ir(E.dataType)})),kernelId:d,kernelType:h,kernelName:m,programName:y,startTime:S,endTime:z});else{let E="";v.forEach((I,C)=>{E+=`input[${C}]: [${I.dims}] | ${Ir(I.dataType)}, `});let k="";w.forEach((I,C)=>{k+=`output[${C}]: [${I.dims}] | ${Ir(I.dataType)}, `}),console.log(`[profiling] kernel "${d}|${h}|${m}|${y}" ${E}${k}start time: ${S} ns, execution time: ${z-S} ns`)}Ii("GPU",`${y}::${x}::${$}`)}t.unmap(),this.pendingQueries.delete(t)}),Qt()}run(t,n,a,o,l,u){ir(t.name);let d=[];for(let k=0;k<n.length;++k){let I=n[k].data;if(I===0)continue;let C=this.gpuDataManager.get(I);if(!C)throw new Error(`no GPU data for input: ${I}`);d.push(C)}let{outputs:p,dispatchGroup:h,programUniforms:m}=t.getRunData(n),y=a.length===0?p.map((k,I)=>I):a;if(y.length!==p.length)throw new Error(`Output size ${y.length} must be equal to ${p.length}.`);let v=[],w=[];for(let k=0;k<p.length;++k){if(!Number.isInteger(y[k])||y[k]<-3||y[k]>=u)throw new Error(`Invalid output index: ${y[k]}`);if(y[k]===-3)continue;let I=y[k]===-1,C=y[k]===-2,O=I||C?l(p[k].dataType,p[k].dims):o(y[k],p[k].dataType,p[k].dims);if(v.push(O),O.data===0)continue;let j=this.gpuDataManager.get(O.data);if(!j)throw new Error(`no GPU data for output: ${O.data}`);if(I&&this.temporaryData.push(j),C){let L=this.kernelPersistentData.get(this.currentKernelId);L||(L=[],this.kernelPersistentData.set(this.currentKernelId,L)),L.push(j)}w.push(j)}if(d.length!==n.length||w.length!==v.length){if(w.length===0)return Qt(t.name),v;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let x;if(m){let k=0,I=[];m.forEach(L=>{let V=typeof L.data=="number"?[L.data]:L.data;if(V.length===0)return;let F=L.type===10?2:4,J,ge;L.type===10?(ge=V.length>4?16:V.length>2?8:V.length*F,J=V.length>4?16:F*V.length):(ge=V.length<=2?V.length*F:16,J=16),k=Math.ceil(k/ge)*ge,I.push(k);let fe=L.type===10?8:4;k+=V.length>4?Math.ceil(V.length/fe)*J:V.length*F});let C=16;k=Math.ceil(k/C)*C;let O=new ArrayBuffer(k);m.forEach((L,V)=>{let F=I[V],J=typeof L.data=="number"?[L.data]:L.data;if(L.type===6)new Int32Array(O,F,J.length).set(J);else if(L.type===12)new Uint32Array(O,F,J.length).set(J);else if(L.type===10)new Uint16Array(O,F,J.length).set(J);else if(L.type===1)new Float32Array(O,F,J.length).set(J);else throw new Error(`Unsupported uniform type: ${Ir(L.type)}`)});let j=this.gpuDataManager.create(k,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(j.buffer,0,O,0,k),this.gpuDataManager.release(j.id),x={offset:0,size:k,buffer:j.buffer}}let $=this.programManager.normalizeDispatchGroupSize(h),S=$[1]===1&&$[2]===1,z=ny(t,n,S),E=this.programManager.getArtifact(z);if(E||(E=this.programManager.build(t,$),this.programManager.setArtifact(z,E),Ee("info",()=>`[artifact] key: ${z}, programName: ${t.name}`)),m&&E.uniformVariablesInfo){if(m.length!==E.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${E.uniformVariablesInfo.length}, got ${m.length} in program "${E.programInfo.name}".`);for(let k=0;k<m.length;k++){let I=m[k],C=I.type,O=typeof I.data=="number"?1:I.data.length,[j,L]=E.uniformVariablesInfo[k];if(C!==j||O!==L)throw new Error(`Uniform variable ${k} mismatch: expect type ${j} with size ${L}, got type ${C} with size ${O} in program "${E.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${t.name}" (key=${z}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let k={kernelId:this.currentKernelId,programName:E.programInfo.name,inputTensorViews:n,outputTensorViews:v};this.pendingKernels.push(k),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(k)}return this.programManager.run(E,d,w,$,x),Qt(t.name),v}upload(t,n){this.gpuDataManager.upload(t,n)}memcpy(t,n){this.gpuDataManager.memcpy(t,n)}async download(t,n){await this.gpuDataManager.download(t,n)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,n,a,o){let l=J0.get(t);if(!l)throw new Error(`kernel not implemented: ${t}`);let u={kernelType:t,kernelName:o,kernelEntry:l[0],attributes:[l[1],a]};this.kernels.set(n,u)}releaseKernel(t){let n=this.kernelPersistentData.get(t);if(n){for(let a of n)this.gpuDataManager.release(a.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,n,a){let o=this.kernels.get(t);if(!o)throw new Error(`kernel not created: ${t}`);let l=o.kernelType,u=o.kernelName,d=o.kernelEntry,p=o.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${l}] ${u}" is not allowed to be called recursively`);this.currentKernelId=t,p[0]&&(p[1]=p[0](p[1]),p[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${l}] ${u}"...`);let h=this.env.debug;this.temporaryData=[];try{return h&&this.device.pushErrorScope("validation"),d(n,p[1]),0}catch(m){return a.push(Promise.resolve(`[WebGPU] Kernel "[${l}] ${u}" failed. ${m}`)),1}finally{h&&a.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${l}] ${u}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,n,a,o){let l=this.sessionExternalDataMapping.get(t);l||(l=new Map,this.sessionExternalDataMapping.set(t,l));let u=l.get(n),d=this.gpuDataManager.registerExternalBuffer(a,o,u);return l.set(n,[d,a]),d}unregisterBuffers(t){let n=this.sessionExternalDataMapping.get(t);n&&(n.forEach(a=>this.gpuDataManager.unregisterExternalBuffer(a[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let n=this.gpuDataManager.get(t);if(!n)throw new Error(`no GPU data for buffer: ${t}`);return n.buffer}createDownloader(t,n,a){return async()=>{let o=await al(this,t,n);return Ko(o.buffer,a)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){var t;this.queryType="none",(((t=this.env.webgpu.profiling)==null?void 0:t.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),n=this.capturedPendingKernels.get(this.currentSessionId),a=t.length;this.pendingKernels=[];for(let o=0;o<a;o++){let l=this.getComputePassEncoder(),u=t[o];this.writeTimestamp(this.pendingDispatchNumber*2),l.setPipeline(u.computePipeline),l.setBindGroup(0,u.bindGroup),l.dispatchWorkgroups(...u.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(n[o]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),sy={};N(sy,{init:()=>ly});var is,oy,ly,wx=_(()=>{ve(),Nr(),_e(),T_(),is=class p_{constructor(n,a,o,l){this.module=n,this.dataType=a,this.data=o,this.dims=l}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,n)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,n)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,n)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,n)}reshape(n){if(U.size(n)!==U.size(this.dims))throw new Error("Invalid new shape");return new p_(this.module,this.dataType,this.data,n)}},oy=class{constructor(t,n,a){this.module=t,this.backend=n,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=n.adapterInfo;let o=t.PTR_SIZE,l=a/t.PTR_SIZE,u=o===4?"i32":"i64";this.opKernelContext=Number(t.getValue(o*l++,u));let d=Number(t.getValue(o*l++,u));this.outputCount=Number(t.getValue(o*l++,u)),this.customDataOffset=Number(t.getValue(o*l++,"*")),this.customDataSize=Number(t.getValue(o*l++,u));let p=[];for(let h=0;h<d;h++){let m=Number(t.getValue(o*l++,u)),y=Number(t.getValue(o*l++,"*")),v=Number(t.getValue(o*l++,u)),w=[];for(let x=0;x<v;x++)w.push(Number(t.getValue(o*l++,u)));p.push(new is(t,m,y,w))}this.inputs=p}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,n){var d;let a=((d=n==null?void 0:n.inputs)==null?void 0:d.map(p=>typeof p=="number"?this.inputs[p]:p))??this.inputs,o=(n==null?void 0:n.outputs)??[],l=(p,h,m)=>new is(this.module,h,this.output(p,m),m),u=(p,h)=>{let m=kn(p,h);if(!m)throw new Error(`Unsupported data type: ${p}`);let y=m>0?this.backend.gpuDataManager.create(m).id:0;return new is(this.module,p,y,h)};return this.backend.run(t,a,o,l,u,this.outputCount)}output(t,n){let a=this.module.stackSave();try{let o=this.module.PTR_SIZE,l=o===4?"i32":"i64",u=this.module.stackAlloc((1+n.length)*o);this.module.setValue(u,n.length,l);for(let d=0;d<n.length;d++)this.module.setValue(u+o*(d+1),n[d],l);return this.module._JsepOutput(this.opKernelContext,t,u)}catch(o){throw new Error(`Failed to generate kernel's output[${t}] with dims [${n}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${o}`)}finally{this.module.stackRestore(a)}}},ly=async(t,n,a,o)=>{let l=n.jsepInit;if(!l)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(t==="webgpu"){let u=(vx(),D(ty)).WebGpuBackend,d=new u;await d.initialize(a,o),l("webgpu",[d,p=>d.alloc(Number(p)),p=>d.free(p),(p,h,m,y=!1)=>{if(y)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(p)}, dst=${Number(h)}, size=${Number(m)}`),d.memcpy(Number(p),Number(h));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(p)}, gpuDataId=${Number(h)}, size=${Number(m)}`);let v=n.HEAPU8.subarray(Number(p>>>0),Number(p>>>0)+Number(m));d.upload(Number(h),v)}},async(p,h,m)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${p}, dataOffset=${h}, size=${m}`),await d.download(Number(p),()=>n.HEAPU8.subarray(Number(h)>>>0,Number(h+m)>>>0))},(p,h,m)=>d.createKernel(p,Number(h),m,n.UTF8ToString(n._JsepGetNodeName(Number(h)))),p=>d.releaseKernel(p),(p,h,m,y)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${p}, contextDataOffset=${h}`);let v=new oy(n,d,Number(h));return d.computeKernel(Number(p),v,y)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let u=new fp(a);l("webnn",[u,()=>u.reserveTensorId(),d=>u.releaseTensorId(d),async(d,p,h,m,y)=>u.ensureTensor(d,p,h,m,y),(d,p)=>{u.uploadTensor(d,p)},async(d,p)=>u.downloadTensor(d,p),(d,p)=>u.registerMLContext(d,p),!!a.trace])}}}),uy,Yl,Jl,Qr,dy,eu,as,tu,ru,nu,iu,au,su,cy=_(()=>{Xt(),k_(),S_(),ve(),xn(),Vo(),Zc(),uy=(t,n)=>{je()._OrtInit(t,n)!==0&&Pe("Can't initialize onnxruntime.")},Yl=async t=>{uy(t.wasm.numThreads,qa(t.logLevel))},Jl=async(t,n)=>{var o,l;(l=(o=je()).asyncInit)==null||l.call(o);let a=t.webgpu.adapter;if(n==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=t.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=t.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(n==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let u=(wx(),D(sy)).init;n==="webgpu"&&await u("webgpu",je(),t,a),n==="webnn"&&await u("webnn",je(),t)}},Qr=new Map,dy=t=>{let n=je(),a=n.stackSave();try{let o=n.PTR_SIZE,l=n.stackAlloc(2*o);n._OrtGetInputOutputCount(t,l,l+o)!==0&&Pe("Can't get session input/output count.");let u=o===4?"i32":"i64";return[Number(n.getValue(l,u)),Number(n.getValue(l+o,u))]}finally{n.stackRestore(a)}},eu=(t,n)=>{let a=je(),o=a.stackSave(),l=0;try{let u=a.PTR_SIZE,d=a.stackAlloc(2*u);a._OrtGetInputOutputMetadata(t,n,d,d+u)!==0&&Pe("Can't get session input/output metadata.");let p=Number(a.getValue(d,"*"));l=Number(a.getValue(d+u,"*"));let h=a.HEAP32[l/4];if(h===0)return[p,0];let m=a.HEAPU32[l/4+1],y=[];for(let v=0;v<m;v++){let w=Number(a.getValue(l+8+v*u,"*"));y.push(w!==0?a.UTF8ToString(w):Number(a.getValue(l+8+(v+m)*u,"*")))}return[p,h,y]}finally{a.stackRestore(o),l!==0&&a._OrtFree(l)}},as=t=>{let n=je(),a=n._malloc(t.byteLength);if(a===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return n.HEAPU8.set(t,a),[a,t.byteLength]},tu=async(t,n)=>{var v,w,x,$;let a,o,l=je();Array.isArray(t)?[a,o]=t:t.buffer===l.HEAPU8.buffer?[a,o]=[t.byteOffset,t.byteLength]:[a,o]=as(t);let u=0,d=0,p=0,h=[],m=[],y=[];try{if([d,h]=await Xc(n),(n==null?void 0:n.externalData)&&l.mountExternalData){let V=[];for(let F of n.externalData){let J=typeof F=="string"?F:F.path;V.push(Go(typeof F=="string"?F:F.data).then(ge=>{l.mountExternalData(J,ge)}))}await Promise.all(V)}for(let V of(n==null?void 0:n.executionProviders)??[])if((typeof V=="string"?V:V.name)==="webnn"){if(l.shouldTransferToMLTensor=!1,typeof V!="string"){let F=V,J=F==null?void 0:F.context,ge=F==null?void 0:F.gpuDevice,fe=F==null?void 0:F.deviceType,he=F==null?void 0:F.powerPreference;J?l.currentContext=J:ge?l.currentContext=await l.webnnCreateMLContext(ge):l.currentContext=await l.webnnCreateMLContext({deviceType:fe,powerPreference:he})}else l.currentContext=await l.webnnCreateMLContext();break}u=await l._OrtCreateSession(a,o,d),(v=l.webgpuOnCreateSession)==null||v.call(l,u),u===0&&Pe("Can't create a session."),(w=l.jsepOnCreateSession)==null||w.call(l),l.currentContext&&(l.webnnRegisterMLContext(u,l.currentContext),l.currentContext=void 0,l.shouldTransferToMLTensor=!0);let[S,z]=dy(u),E=!!(n!=null&&n.enableGraphCapture),k=[],I=[],C=[],O=[],j=[];for(let V=0;V<S;V++){let[F,J,ge]=eu(u,V);F===0&&Pe("Can't get an input name."),m.push(F);let fe=l.UTF8ToString(F);k.push(fe),C.push(J===0?{name:fe,isTensor:!1}:{name:fe,isTensor:!0,type:Ir(J),shape:ge})}for(let V=0;V<z;V++){let[F,J,ge]=eu(u,V+S);F===0&&Pe("Can't get an output name."),y.push(F);let fe=l.UTF8ToString(F);I.push(fe),O.push(J===0?{name:fe,isTensor:!1}:{name:fe,isTensor:!0,type:Ir(J),shape:ge});{if(E&&(n==null?void 0:n.preferredOutputLocation)===void 0){j.push("gpu-buffer");continue}let he=typeof(n==null?void 0:n.preferredOutputLocation)=="string"?n.preferredOutputLocation:((x=n==null?void 0:n.preferredOutputLocation)==null?void 0:x[fe])??"cpu",Se=l.webnnIsGraphOutput;if(he==="cpu"&&Se&&Se(u,fe)){j.push("ml-tensor-cpu-output");continue}if(he!=="cpu"&&he!=="cpu-pinned"&&he!=="gpu-buffer"&&he!=="ml-tensor")throw new Error(`Not supported preferred output location: ${he}.`);if(E&&he!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${he}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);j.push(he)}}let L=null;return j.some(V=>V==="gpu-buffer"||V==="ml-tensor"||V==="ml-tensor-cpu-output")&&(p=l._OrtCreateBinding(u),p===0&&Pe("Can't create IO binding."),L={handle:p,outputPreferredLocations:j,outputPreferredLocationsEncoded:j.map(V=>V==="ml-tensor-cpu-output"?"ml-tensor":V).map(V=>qo(V))}),Qr.set(u,[u,m,y,L,E,!1]),[u,k,I,C,O]}catch(S){throw m.forEach(z=>l._OrtFree(z)),y.forEach(z=>l._OrtFree(z)),p!==0&&l._OrtReleaseBinding(p)!==0&&Pe("Can't release IO binding."),u!==0&&l._OrtReleaseSession(u)!==0&&Pe("Can't release session."),S}finally{l._free(a),d!==0&&l._OrtReleaseSessionOptions(d)!==0&&Pe("Can't release session options."),h.forEach(S=>l._free(S)),($=l.unmountExternalData)==null||$.call(l)}},ru=t=>{var h,m,y;let n=je(),a=Qr.get(t);if(!a)throw new Error(`cannot release session. invalid session id: ${t}`);let[o,l,u,d,p]=a;d&&(p&&n._OrtClearBoundOutputs(d.handle)!==0&&Pe("Can't clear bound outputs."),n._OrtReleaseBinding(d.handle)!==0&&Pe("Can't release IO binding.")),(h=n.jsepOnReleaseSession)==null||h.call(n,t),(m=n.webnnOnReleaseSession)==null||m.call(n,t),(y=n.webgpuOnReleaseSession)==null||y.call(n,t),l.forEach(v=>n._OrtFree(v)),u.forEach(v=>n._OrtFree(v)),n._OrtReleaseSession(o)!==0&&Pe("Can't release session."),Qr.delete(t)},nu=async(t,n,a,o,l,u,d=!1)=>{if(!t){n.push(0);return}let p=je(),h=p.PTR_SIZE,m=t[0],y=t[1],v=t[3],w=v,x,$;if(m==="string"&&(v==="gpu-buffer"||v==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&v!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(v==="gpu-buffer"){let E=t[2].gpuBuffer;$=kn(bn(m),y);{let k=p.jsepRegisterBuffer;if(!k)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');x=k(o,u,E,$)}}else if(v==="ml-tensor"){let E=t[2].mlTensor;$=kn(bn(m),y);let k=p.webnnRegisterMLTensor;if(!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');x=k(o,E,bn(m),y)}else{let E=t[2];if(Array.isArray(E)){$=h*E.length,x=p._malloc($),a.push(x);for(let k=0;k<E.length;k++){if(typeof E[k]!="string")throw new TypeError(`tensor data at index ${k} is not a string`);p.setValue(x+k*h,ar(E[k],a),"*")}}else{let k=p.webnnIsGraphInput,I=p.webnnIsGraphOutput;if(m!=="string"&&k&&I){let C=p.UTF8ToString(l);if(k(o,C)||I(o,C)){let O=bn(m);$=kn(O,y),w="ml-tensor";let j=p.webnnCreateTemporaryTensor,L=p.webnnUploadTensor;if(!j||!L)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let V=await j(o,O,y);L(V,new Uint8Array(E.buffer,E.byteOffset,E.byteLength)),x=V}else $=E.byteLength,x=p._malloc($),a.push(x),p.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,$),x)}else $=E.byteLength,x=p._malloc($),a.push(x),p.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,$),x)}}let S=p.stackSave(),z=p.stackAlloc(4*y.length);try{y.forEach((k,I)=>p.setValue(z+I*h,k,h===4?"i32":"i64"));let E=p._OrtCreateTensor(bn(m),x,$,z,y.length,qo(w));E===0&&Pe(`Can't create tensor for input/output. session=${o}, index=${u}.`),n.push(E)}finally{p.stackRestore(S)}},iu=async(t,n,a,o,l,u)=>{var fe,he,Se,Ce;let d=je(),p=d.PTR_SIZE,h=Qr.get(t);if(!h)throw new Error(`cannot run inference. invalid session id: ${t}`);let m=h[0],y=h[1],v=h[2],w=h[3],x=h[4],$=h[5],S=n.length,z=o.length,E=0,k=[],I=[],C=[],O=[],j=[],L=d.stackSave(),V=d.stackAlloc(S*p),F=d.stackAlloc(S*p),J=d.stackAlloc(z*p),ge=d.stackAlloc(z*p);try{[E,k]=qc(u),qr("wasm prepareInputOutputTensor");for(let re=0;re<S;re++)await nu(a[re],I,O,t,y[n[re]],n[re],x);for(let re=0;re<z;re++)await nu(l[re],C,O,t,v[o[re]],S+o[re],x);Gr("wasm prepareInputOutputTensor");for(let re=0;re<S;re++)d.setValue(V+re*p,I[re],"*"),d.setValue(F+re*p,y[n[re]],"*");for(let re=0;re<z;re++)d.setValue(J+re*p,C[re],"*"),d.setValue(ge+re*p,v[o[re]],"*");if(w&&!$){let{handle:re,outputPreferredLocations:Ne,outputPreferredLocationsEncoded:Z}=w;if(y.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${y.length}).`);qr("wasm bindInputsOutputs");for(let se=0;se<S;se++){let ce=n[se];await d._OrtBindInput(re,y[ce],I[se])!==0&&Pe(`Can't bind input[${se}] for session=${t}.`)}for(let se=0;se<z;se++){let ce=o[se];(fe=l[se])!=null&&fe[3]?(j.push(C[se]),d._OrtBindOutput(re,v[ce],C[se],0)!==0&&Pe(`Can't bind pre-allocated output[${se}] for session=${t}.`)):d._OrtBindOutput(re,v[ce],0,Z[ce])!==0&&Pe(`Can't bind output[${se}] to ${Ne[se]} for session=${t}.`)}Gr("wasm bindInputsOutputs"),Qr.set(t,[m,y,v,w,x,!0])}(he=d.jsepOnRunStart)==null||he.call(d,m),(Se=d.webnnOnRunStart)==null||Se.call(d,m);let me;w?me=await d._OrtRunWithBinding(m,w.handle,z,J,E):me=await d._OrtRun(m,F,V,S,ge,z,J,E),me!==0&&Pe("failed to call OrtRun().");let we=[],et=[];qr("wasm ProcessOutputTensor");for(let re=0;re<z;re++){let Ne=Number(d.getValue(J+re*p,"*"));if(Ne===C[re]||j.includes(C[re])){we.push(l[re]),Ne!==C[re]&&d._OrtReleaseTensor(Ne)!==0&&Pe("Can't release tensor.");continue}let Z=d.stackSave(),se=d.stackAlloc(4*p),ce=!1,ne,De=0;try{d._OrtGetTensorData(Ne,se,se+p,se+2*p,se+3*p)!==0&&Pe(`Can't access output tensor data on index ${re}.`);let Or=p===4?"i32":"i64",ht=Number(d.getValue(se,Or));De=d.getValue(se+p,"*");let cr=d.getValue(se+p*2,"*"),pr=Number(d.getValue(se+p*3,Or)),Zr=[];for(let dt=0;dt<pr;dt++)Zr.push(Number(d.getValue(cr+dt*p,Or)));d._OrtFree(cr)!==0&&Pe("Can't free memory for tensor dims.");let Yr=Zr.reduce((dt,tt)=>dt*tt,1);ne=Ir(ht);let Fi=w==null?void 0:w.outputPreferredLocations[o[re]];if(ne==="string"){if(Fi==="gpu-buffer"||Fi==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let dt=[];for(let tt=0;tt<Yr;tt++){let Ar=d.getValue(De+tt*p,"*"),kx=d.getValue(De+(tt+1)*p,"*"),Sx=tt===Yr-1?void 0:kx-Ar;dt.push(d.UTF8ToString(Ar,Sx))}we.push([ne,Zr,dt,"cpu"])}else if(Fi==="gpu-buffer"&&Yr>0){let dt=d.jsepGetBuffer;if(!dt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let tt=dt(De),Ar=kn(ht,Yr);if(Ar===void 0||!Wo(ne))throw new Error(`Unsupported data type: ${ne}`);ce=!0,we.push([ne,Zr,{gpuBuffer:tt,download:d.jsepCreateDownloader(tt,Ar,ne),dispose:()=>{d._OrtReleaseTensor(Ne)!==0&&Pe("Can't release tensor.")}},"gpu-buffer"])}else if(Fi==="ml-tensor"&&Yr>0){let dt=d.webnnEnsureTensor,tt=d.webnnIsGraphInputOutputTypeSupported;if(!dt||!tt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(kn(ht,Yr)===void 0||!Fo(ne))throw new Error(`Unsupported data type: ${ne}`);if(!tt(t,ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${ne} output is not supported by current WebNN Context.`);let Ar=await dt(t,De,ht,Zr,!1);ce=!0,we.push([ne,Zr,{mlTensor:Ar,download:d.webnnCreateMLTensorDownloader(De,ne),dispose:()=>{d.webnnReleaseTensorId(De),d._OrtReleaseTensor(Ne)}},"ml-tensor"])}else if(Fi==="ml-tensor-cpu-output"&&Yr>0){let dt=d.webnnCreateMLTensorDownloader(De,ne)(),tt=we.length;ce=!0,et.push((async()=>{let Ar=[tt,await dt];return d.webnnReleaseTensorId(De),d._OrtReleaseTensor(Ne),Ar})()),we.push([ne,Zr,[],"cpu"])}else{let dt=Fa(ne),tt=new dt(Yr);new Uint8Array(tt.buffer,tt.byteOffset,tt.byteLength).set(d.HEAPU8.subarray(De,De+tt.byteLength)),we.push([ne,Zr,tt,"cpu"])}}finally{d.stackRestore(Z),ne==="string"&&De&&d._free(De),ce||d._OrtReleaseTensor(Ne)}}w&&!x&&(d._OrtClearBoundOutputs(w.handle)!==0&&Pe("Can't clear bound outputs."),Qr.set(t,[m,y,v,w,x,!1]));for(let[re,Ne]of await Promise.all(et))we[re][2]=Ne;return Gr("wasm ProcessOutputTensor"),we}finally{(Ce=d.webnnOnRunEnd)==null||Ce.call(d,m),d.stackRestore(L),I.forEach(me=>d._OrtReleaseTensor(me)),C.forEach(me=>d._OrtReleaseTensor(me)),O.forEach(me=>d._free(me)),E!==0&&d._OrtReleaseRunOptions(E),k.forEach(me=>d._free(me))}},au=t=>{let n=je(),a=Qr.get(t);if(!a)throw new Error("invalid session id");let o=a[0],l=n._OrtEndProfiling(o);l===0&&Pe("Can't get an profile file name."),n._OrtFree(l)},su=t=>{let n=[];for(let a of t){let o=a[2];!Array.isArray(o)&&"buffer"in o&&n.push(o.buffer)}return n}}),Xr,Rt,Yn,Vi,Wi,ss,ou,os,Nn,Rn,py,fy,hy,my,gy,yy,vy,wy,_y=_(()=>{Xt(),cy(),xn(),Do(),Xr=()=>!!H.wasm.proxy&&typeof document<"u",Yn=!1,Vi=!1,Wi=!1,os=new Map,Nn=(t,n)=>{let a=os.get(t);a?a.push(n):os.set(t,[n])},Rn=()=>{if(Yn||!Vi||Wi||!Rt)throw new Error("worker not ready")},py=t=>{switch(t.data.type){case"init-wasm":Yn=!1,t.data.err?(Wi=!0,ou[1](t.data.err)):(Vi=!0,ou[0]()),ss&&(URL.revokeObjectURL(ss),ss=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let n=os.get(t.data.type);t.data.err?n.shift()[1](t.data.err):n.shift()[0](t.data.out);break}}},fy=async()=>{if(!Vi){if(Yn)throw new Error("multiple calls to 'initWasm()' detected.");if(Wi)throw new Error("previous call to 'initWasm()' failed.");if(Yn=!0,Xr())return new Promise((t,n)=>{Rt==null||Rt.terminate(),jc().then(([a,o])=>{try{Rt=o,Rt.onerror=u=>n(u),Rt.onmessage=py,ou=[t,n];let l={type:"init-wasm",in:H};if(!l.in.wasm.wasmPaths&&a){let u=Ao();u&&(l.in.wasm.wasmPaths=u)}Rt.postMessage(l),ss=a}catch(l){n(l)}},n)});try{await Uo(H.wasm),await Yl(H),Vi=!0}catch(t){throw Wi=!0,t}finally{Yn=!1}}},hy=async t=>{if(Xr())return Rn(),new Promise((n,a)=>{Nn("init-ep",[n,a]);let o={type:"init-ep",in:{epName:t,env:H}};Rt.postMessage(o)});await Jl(H,t)},my=async t=>Xr()?(Rn(),new Promise((n,a)=>{Nn("copy-from",[n,a]);let o={type:"copy-from",in:{buffer:t}};Rt.postMessage(o,[t.buffer])})):as(t),gy=async(t,n)=>{if(Xr()){if(n!=null&&n.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Rn(),new Promise((a,o)=>{Nn("create",[a,o]);let l={type:"create",in:{model:t,options:{...n}}},u=[];t instanceof Uint8Array&&u.push(t.buffer),Rt.postMessage(l,u)})}else return tu(t,n)},yy=async t=>{if(Xr())return Rn(),new Promise((n,a)=>{Nn("release",[n,a]);let o={type:"release",in:t};Rt.postMessage(o)});ru(t)},vy=async(t,n,a,o,l,u)=>{if(Xr()){if(a.some(d=>d[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(l.some(d=>d))throw new Error("pre-allocated output tensor is not supported for proxy.");return Rn(),new Promise((d,p)=>{Nn("run",[d,p]);let h=a,m={type:"run",in:{sessionId:t,inputIndices:n,inputs:h,outputIndices:o,options:u}};Rt.postMessage(m,su(h))})}else return iu(t,n,a,o,l,u)},wy=async t=>{if(Xr())return Rn(),new Promise((n,a)=>{Nn("end-profiling",[n,a]);let o={type:"end-profiling",in:t};Rt.postMessage(o)});au(t)}}),lu,xy,$y,_x=_(()=>{Xt(),_y(),ve(),No(),Zc(),lu=(t,n)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${t.location} for ${n()}`)}},xy=t=>{switch(t[3]){case"cpu":return new nr(t[0],t[2],t[1]);case"gpu-buffer":{let n=t[0];if(!Wo(n))throw new Error(`not supported data type: ${n} for deserializing GPU tensor`);let{gpuBuffer:a,download:o,dispose:l}=t[2];return nr.fromGpuBuffer(a,{dataType:n,dims:t[1],download:o,dispose:l})}case"ml-tensor":{let n=t[0];if(!Fo(n))throw new Error(`not supported data type: ${n} for deserializing MLTensor tensor`);let{mlTensor:a,download:o,dispose:l}=t[2];return nr.fromMLTensor(a,{dataType:n,dims:t[1],download:o,dispose:l})}default:throw new Error(`invalid data location: ${t[3]}`)}},$y=class{async fetchModelAndCopyToWasmMemory(t){return my(await Go(t))}async loadModel(t,n){ir();let a;typeof t=="string"?a=await this.fetchModelAndCopyToWasmMemory(t):a=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await gy(a,n),Qt()}async dispose(){return yy(this.sessionId)}async run(t,n,a){ir();let o=[],l=[];Object.entries(t).forEach(v=>{let w=v[0],x=v[1],$=this.inputNames.indexOf(w);if($===-1)throw new Error(`invalid input '${w}'`);o.push(x),l.push($)});let u=[],d=[];Object.entries(n).forEach(v=>{let w=v[0],x=v[1],$=this.outputNames.indexOf(w);if($===-1)throw new Error(`invalid output '${w}'`);u.push(x),d.push($)});let p=o.map((v,w)=>lu(v,()=>`input "${this.inputNames[l[w]]}"`)),h=u.map((v,w)=>v?lu(v,()=>`output "${this.outputNames[d[w]]}"`):null),m=await vy(this.sessionId,l,p,d,h,a),y={};for(let v=0;v<m.length;v++)y[this.outputNames[d[v]]]=u[v]??xy(m[v]);return Qt(),y}startProfiling(){}endProfiling(){wy(this.sessionId)}}}),by={};N(by,{OnnxruntimeWebAssemblyBackend:()=>du,initializeFlags:()=>uu,wasmBackend:()=>ky});var uu,du,ky,xx=_(()=>{Xt(),_y(),_x(),uu=()=>{(typeof H.wasm.initTimeout!="number"||H.wasm.initTimeout<0)&&(H.wasm.initTimeout=0);let t=H.wasm.simd;if(typeof t!="boolean"&&t!==void 0&&t!=="fixed"&&t!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${t}". Reset it to \`false\` and ignore SIMD feature checking.`),H.wasm.simd=!1),typeof H.wasm.proxy!="boolean"&&(H.wasm.proxy=!1),typeof H.wasm.trace!="boolean"&&(H.wasm.trace=!1),typeof H.wasm.numThreads!="number"||!Number.isInteger(H.wasm.numThreads)||H.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)H.wasm.numThreads=1;else{let n=typeof navigator>"u"?b("node:os").cpus().length:navigator.hardwareConcurrency;H.wasm.numThreads=Math.min(4,Math.ceil((n||1)/2))}},du=class{async init(t){uu(),await fy(),await hy(t)}async createInferenceSessionHandler(t,n){let a=new $y;return await a.loadModel(t,n),a}},ky=new du}),Sy={};N(Sy,{InferenceSession:()=>Io,TRACE:()=>Ii,TRACE_EVENT_BEGIN:()=>qr,TRACE_EVENT_END:()=>Gr,TRACE_FUNC_BEGIN:()=>ir,TRACE_FUNC_END:()=>Qt,Tensor:()=>nr,default:()=>bx,env:()=>H,registerBackend:()=>G}),Xt(),Xt(),Xt();var $x="1.26.0",bx=Rc;{let t=(xx(),D(by)).wasmBackend;G("webgpu",t,5),G("webnn",t,5),G("cpu",t,10),G("wasm",t,10)}return Object.defineProperty(H.versions,"web",{value:$x,enumerable:!0}),D(Sy)})();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */e.exports=i})(d_);var ga=d_.exports;ga.env.wasm.wasmPaths=chrome.runtime.getURL("");const Od=chrome.runtime.getURL("models/ai_detector/model_quantized.onnx"),Ub=512,Vb=2e3,Wb=1;let Bu=null,Es=null;async function f_(){return Bu||Es||(console.log("[TruthScan ONNX] Loading model from:",Od),Es=ga.InferenceSession.create(Od,{executionProviders:["wasm"],graphOptimizationLevel:"all"}).then(e=>(Bu=e,console.log("[TruthScan ONNX] Model loaded. Inputs:",e.inputNames,"Outputs:",e.outputNames),e)),Es)}let Ts=null;async function h_(){return Ts||(console.log("[TruthScan ONNX] Loading tokenizer (bert-base-uncased via @xenova/transformers)..."),Ts=(async()=>{const{AutoTokenizer:e,env:r}=await u_(()=>import("./transformers-71ee96b8.js"),[]);r.allowRemoteModels=!0,r.allowLocalModels=!1;const i=await e.from_pretrained("Xenova/bert-base-uncased");return console.log("[TruthScan ONNX] Tokenizer ready."),{async encode(s){const c=await i(s,{truncation:!0,max_length:Ub,padding:!1,return_tensors:!1});return{input_ids:Array.from(c.input_ids.data).map(Number),attention_mask:Array.from(c.attention_mask.data).map(Number)}}}})(),Ts)}function Fb(e){const r=Math.max(...Array.from(e)),i=e.map(c=>Math.exp(c-r)),s=i.reduce((c,f)=>c+f,0);return i.map(c=>c/s)}async function qb(e){const r=e.slice(0,Vb).trim(),i=r.slice(0,200);if(!r)return{aiLikelihoodPercent:0,textPreview:"",modelLoaded:!1};try{const[s,c]=await Promise.all([h_(),f_()]),{input_ids:f,attention_mask:g}=await s.encode(r),b=f.length;console.log(`[TruthScan ONNX] Token sequence length: ${b}`);const _=new BigInt64Array(b),N=new BigInt64Array(b);for(let R=0;R<b;R++)_[R]=BigInt(f[R]),N[R]=BigInt(g[R]);const A=[1,b],D={input_ids:new ga.Tensor("int64",_,A),attention_mask:new ga.Tensor("int64",N,A)};if(c.inputNames.includes("token_type_ids")){const R=new BigInt64Array(b).fill(0n);D.token_type_ids=new ga.Tensor("int64",R,A)}const B=await c.run(D),q=c.outputNames.find(R=>R.toLowerCase().includes("logit"))??c.outputNames[0],G=B[q].data,$e=Fb(G)[Wb],M=Math.round($e*100);return console.log(`[TruthScan ONNX] AI prob: ${M}% (logits: [${Array.from(G).join(", ")}])`),{aiLikelihoodPercent:M,textPreview:i,modelLoaded:!0}}catch(s){throw console.error("[TruthScan ONNX] Inference error:",s),new Error(`Local inference failed: ${s instanceof Error?s.message:String(s)}`)}}async function Gb(){try{await Promise.all([h_(),f_()]),console.log("[TruthScan ONNX] Warm-up complete.")}catch(e){console.warn("[TruthScan ONNX] Warm-up failed (non-fatal):",e)}}async function m_(){try{return(await fetch(Od,{method:"HEAD"})).ok}catch{return!1}}const Hb={completed:T.jsx(Aa,{className:"w-4 h-4 text-emerald-400"}),loading:T.jsx(Ma,{className:"w-4 h-4 text-purple-400 animate-spin"}),error:T.jsx(Z1,{className:"w-4 h-4 text-red-400"}),pending:T.jsx(ib,{className:"w-4 h-4 text-slate-600"})},Kb={completed:"text-emerald-300",loading:"text-purple-300",error:"text-red-300",pending:"text-slate-500"},Qb={completed:"bg-emerald-500/10 border border-emerald-500/20",loading:"bg-purple-500/10 border border-purple-500/20",error:"bg-red-500/10 border border-red-500/20",pending:"bg-white/3 border border-white/5"},Xb=({stages:e,className:r})=>{const i=e.filter(c=>c.status==="completed").length,s=e.length>0?Math.round(i/e.length*100):0;return T.jsxs("div",{className:it("space-y-2",r),children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsx("h3",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wide",children:"Analysis Pipeline"}),T.jsxs("span",{className:"text-xs text-slate-500",children:[i," / ",e.length]})]}),T.jsx("div",{className:"space-y-1.5",children:e.map(c=>T.jsxs("div",{className:it("flex items-start gap-2.5 p-2 rounded-lg transition-all duration-200",Qb[c.status]),children:[T.jsx("div",{className:"flex-shrink-0 mt-0.5",children:Hb[c.status]}),T.jsxs("div",{className:"flex-1 min-w-0",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:it("text-xs font-medium",Kb[c.status]),children:c.title}),c.status==="loading"&&T.jsx("span",{className:"text-[10px] text-purple-400 animate-pulse",children:"Running..."})]}),T.jsx("p",{className:it("text-[10px] mt-0.5 leading-relaxed",c.status==="error"?"text-red-400":"text-slate-600"),children:c.status==="error"&&c.error?c.error:c.description})]})]},c.id))}),T.jsxs("div",{className:"mt-3",children:[T.jsxs("div",{className:"flex justify-between text-[10px] text-slate-600 mb-1",children:[T.jsx("span",{children:"Progress"}),T.jsxs("span",{children:[s,"%"]})]}),T.jsx("div",{className:"w-full bg-white/5 rounded-full h-1.5",children:T.jsx("div",{className:"h-1.5 rounded-full transition-all duration-500",style:{width:`${s}%`,background:"linear-gradient(90deg, #7c3aed, #4f46e5)",boxShadow:s>0?"0 0 8px rgba(124, 58, 237, 0.5)":"none"}})})]})]})},Zb=({className:e})=>{const[r,i]=Ye.useState(!1),[s,c]=Ye.useState([]),[f,g]=Ye.useState("unknown"),b=B=>{const q=new Date().toLocaleTimeString();c(G=>[...G.slice(-19),`[${q}] ${B}`])},_=async()=>{var B;i(!0),c([]),b("Starting diagnostics...");try{b("Test 1: Checking local ONNX model file...");const q=await m_();g(q?"ready":"missing"),b(`Local model: ${q?"FOUND ✓":"NOT FOUND ✗"}`),b("Test 2: Checking Chrome extension APIs...");try{const G=await chrome.tabs.query({active:!0,currentWindow:!0});b(`Chrome tabs API: SUCCESS (${G.length} active tab)`),(B=G[0])!=null&&B.url&&b(`Current URL: ${G[0].url}`)}catch(G){b(`Chrome API check failed: ${G}`)}b("Test 3: Checking Chrome storage API...");try{await new Promise(G=>chrome.storage.local.set({_diag_test:1},()=>{chrome.storage.local.remove("_diag_test",G)})),b("Chrome storage API: SUCCESS ✓")}catch(G){b(`Chrome storage failed: ${G}`)}b("Diagnostics complete.")}catch(q){b(`Fatal test error: ${q}`)}finally{i(!1)}},N=()=>{switch(f){case"ready":return T.jsx(Aa,{className:"w-4 h-4 text-emerald-400"});case"missing":return T.jsx(Z1,{className:"w-4 h-4 text-red-400"});default:return T.jsx("div",{className:"w-4 h-4 bg-slate-600 rounded-full animate-pulse"})}},A=()=>({ready:"Ready",missing:"Not Found",unknown:"Unknown"})[f],D={ready:"text-emerald-400",missing:"text-red-400",unknown:"text-slate-500"}[f];return T.jsxs("div",{className:it("glass-panel p-4",e),children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsxs("h3",{className:"text-sm font-semibold text-white flex items-center gap-2",children:[T.jsx(nb,{className:"w-4 h-4 text-purple-400"}),"Diagnostics"]}),T.jsxs("button",{onClick:_,disabled:r,className:"ts-btn-ghost flex items-center gap-1.5 text-xs",children:[T.jsx(ob,{className:it("w-3.5 h-3.5",r&&"animate-spin")}),r?"Running...":"Run Tests"]})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"flex items-center justify-between p-2 bg-white/5 rounded-lg",children:[T.jsx("span",{className:"text-xs text-slate-400",children:"Local ONNX Model"}),T.jsxs("div",{className:"flex items-center gap-1.5",children:[N(),T.jsx("span",{className:it("text-xs font-medium",D),children:A()})]})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[T.jsx("span",{className:"text-xs font-medium text-slate-400",children:"Test Log"}),T.jsxs("span",{className:"text-[10px] text-slate-600",children:[s.length," entries"]})]}),T.jsx("div",{className:"max-h-40 overflow-y-auto bg-black/30 rounded-lg p-2 text-[10px] font-mono",children:s.length===0?T.jsx("div",{className:"text-slate-600 text-center py-4",children:'No logs yet. Click "Run Tests" to start.'}):s.map((B,q)=>T.jsx("div",{className:"text-slate-500 mb-0.5 leading-relaxed",children:B},q))})]}),T.jsxs("div",{className:"text-[10px] text-slate-600 space-y-0.5",children:[T.jsx("p",{className:"font-medium text-slate-500",children:"Debug tips:"}),T.jsxs("ul",{className:"list-disc list-inside space-y-0.5 pl-1",children:[T.jsx("li",{children:"All inference runs locally — no server needed"}),T.jsx("li",{children:"Check browser console for detailed logs"}),T.jsx("li",{children:"If model is missing, reload the extension"})]})]})]})]})};function g_(e){return e>=80?"Very High":e>=60?"High":e>=40?"Moderate":e>=20?"Low":"Very Low"}function Yb(e){return e>=80?"text-red-400":e>=60?"text-orange-400":e>=40?"text-amber-400":"text-emerald-400"}function Jb(e){return e==="low"?T.jsx(Aa,{className:"w-4 h-4 text-emerald-400"}):e==="high"?T.jsx(wi,{className:"w-4 h-4 text-red-400"}):T.jsx(wi,{className:"w-4 h-4 text-amber-400"})}function e3({darkMode:e,serverOnline:r,onToggleTheme:i}){return T.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-purple-500/20 bg-purple-900/10 flex-shrink-0",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0",children:T.jsx(t_,{className:"w-4 h-4 text-white"})}),T.jsxs("div",{children:[T.jsx("h1",{className:"text-sm font-bold text-white tracking-wide leading-tight",children:"TruthScan"}),T.jsx("p",{className:"text-[10px] text-purple-300 leading-tight",children:"AI & Misinformation Detector"})]})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsxs("div",{className:"flex items-center gap-1.5",children:[r===null&&T.jsx("div",{className:"w-2 h-2 bg-slate-500 rounded-full animate-pulse",title:"Loading local model..."}),r===!0&&T.jsxs("div",{className:"flex items-center gap-1",title:"Local AI model ready",children:[T.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full",style:{boxShadow:"0 0 6px rgba(52,211,153,0.6)"}}),T.jsx("span",{className:"text-[10px] text-emerald-400 font-medium",children:"Local"})]}),r===!1&&T.jsxs("div",{className:"flex items-center gap-1",title:"Local model not found",children:[T.jsx("div",{className:"w-2 h-2 bg-red-400 rounded-full"}),T.jsx("span",{className:"text-[10px] text-red-400 font-medium",children:"No Model"})]})]}),T.jsx("button",{onClick:i,className:"p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white",title:"Toggle theme",children:e?T.jsx(ub,{className:"w-4 h-4"}):T.jsx(sb,{className:"w-4 h-4"})})]})]})}const t3=[{id:"overview",label:"Overview",icon:T.jsx(J1,{className:"w-3.5 h-3.5"})},{id:"analysis",label:"Analysis",icon:T.jsx(Y1,{className:"w-3.5 h-3.5"})},{id:"qa",label:"Q&A",icon:T.jsx(aa,{className:"w-3.5 h-3.5"})},{id:"settings",label:"Settings",icon:T.jsx(lb,{className:"w-3.5 h-3.5"})}];function r3({activeTab:e,onTabChange:r}){return T.jsx("div",{className:"flex gap-1 px-3 py-2 border-b border-purple-500/10 bg-black/20 flex-shrink-0",children:t3.map(i=>T.jsxs("button",{onClick:()=>r(i.id),className:it("flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",e===i.id?"bg-purple-600 text-white shadow-sm":"text-slate-500 hover:text-slate-200 hover:bg-white/5"),style:e===i.id?{boxShadow:"0 0 12px rgba(124,58,237,0.35)"}:{},children:[i.icon,T.jsx("span",{className:"hidden sm:inline",children:i.label}),T.jsx("span",{className:"sm:hidden",children:i.label.split("")[0]})]},i.id))})}function n3({report:e,scanInProgress:r,summarizeInProgress:i,summaryData:s,pipelineStages:c,serverOnline:f,onScan:g,onSummarize:b}){var N,A,D;const _=s??((N=e==null?void 0:e.apiData)==null?void 0:N.summarizationResult);return T.jsx("div",{className:"space-y-3",children:T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsx("h2",{className:"text-sm font-semibold text-white",children:"Page Scanner"}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:g,disabled:r,className:"ts-btn-primary flex items-center gap-1.5 text-xs",children:r?T.jsxs(T.Fragment,{children:[T.jsx(Ma,{className:"w-3.5 h-3.5 animate-spin"}),"Scanning..."]}):T.jsxs(T.Fragment,{children:[T.jsx(r_,{className:"w-3.5 h-3.5"}),"Scan Page"]})}),T.jsx("button",{onClick:b,disabled:i||!((D=(A=e==null?void 0:e.apiData)==null?void 0:A.scrapedData)!=null&&D.text),className:"ts-btn-ghost flex items-center gap-1.5 text-xs",children:i?T.jsxs(T.Fragment,{children:[T.jsx(Ma,{className:"w-3.5 h-3.5 animate-spin"}),"Summarizing..."]}):T.jsxs(T.Fragment,{children:[T.jsx(po,{className:"w-3.5 h-3.5"}),"Summarize"]})})]})]}),r&&c.length>0&&T.jsx("div",{className:"mb-3",children:T.jsx(Xb,{stages:c})}),e?T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"text-xs text-slate-500",children:"Overall Risk"}),T.jsxs("div",{className:it("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",e.overallRisk==="high"?"bg-red-500/20 text-red-400 border border-red-500/30":e.overallRisk==="medium"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"),children:[Jb(e.overallRisk),e.overallRisk.toUpperCase()]})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-3 text-center",children:[T.jsx("div",{className:it("text-lg font-bold",Yb(e.aiScore)),children:g_(e.aiScore)}),T.jsx("div",{className:"text-[10px] text-slate-600 mt-0.5",children:"AI Risk Level"})]}),T.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-3 text-center",children:[T.jsxs("div",{className:"text-lg font-bold text-amber-400",children:[e.fakeNewsScore,"%"]}),T.jsx("div",{className:"text-[10px] text-slate-600 mt-0.5",children:"False Claims"})]})]}),e.apiData&&T.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg",children:[T.jsx(e_,{className:"w-3.5 h-3.5 text-indigo-400 flex-shrink-0"}),T.jsxs("span",{className:"text-xs text-indigo-300",children:[e.apiData.scrapedData.text.length.toLocaleString()," characters analyzed"]})]}),_&&T.jsxs("div",{className:"p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[T.jsx(po,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),T.jsx("span",{className:"text-xs font-semibold text-emerald-300",children:"Summary"})]}),T.jsxs("p",{className:"text-[10px] text-emerald-700 mb-2",children:[_.model," · ",_.input_length," → ",_.summary_length," chars"]}),T.jsx("div",{className:"text-xs text-slate-300 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed",children:_.summary})]})]}):T.jsxs("div",{className:"py-10 text-center",children:[T.jsx("div",{className:"w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center",children:T.jsx(t_,{className:"w-7 h-7 text-purple-400/40"})}),T.jsx("p",{className:"text-sm text-slate-500 mb-1",children:'Click "Scan Page" to analyze this webpage'}),T.jsx("p",{className:"text-xs text-slate-700",children:"AI detection · Fact-checking · Summarization"}),f===!1&&T.jsxs("p",{className:"text-xs text-red-400 mt-3 flex items-center justify-center gap-1.5",children:[T.jsx(wi,{className:"w-3.5 h-3.5"}),"Local model not found — reinstall extension"]})]})]})})}function i3({report:e,summaryData:r,summarizeInProgress:i,imageExpanded:s,onSummarize:c,onToggleImages:f}){var b,_,N;const g=r??((b=e.apiData)==null?void 0:b.summarizationResult);return T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsx("h3",{className:"text-sm font-semibold text-white",children:"Detection Results"}),!g&&T.jsxs("button",{onClick:c,disabled:i,className:"ts-btn-ghost text-xs flex items-center gap-1",children:[T.jsx(po,{className:"w-3 h-3"}),i?"Processing...":"Summarize"]})]}),T.jsx("div",{className:"space-y-2",children:e.results.map(A=>T.jsxs("div",{className:"bg-white/5 border border-white/8 rounded-xl p-3",children:[T.jsxs("div",{className:"flex items-center justify-between mb-1",children:[T.jsx("span",{className:"text-xs font-medium text-slate-200 capitalize",children:A.type.replace("-"," ")}),T.jsxs("span",{className:it("text-xs font-bold",A.confidence>=70?"text-red-400":A.confidence>=40?"text-amber-400":"text-emerald-400"),children:[A.confidence,"%"]})]}),T.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:A.description})]},A.id))})]}),e.factCheckClaims&&e.factCheckClaims.length>0&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Fact Check"}),T.jsx("div",{className:"space-y-2",children:e.factCheckClaims.map((A,D)=>T.jsxs("div",{className:it("p-3 rounded-xl border-l-2",A.isLikelyTrue?"bg-emerald-500/10 border-emerald-500":"bg-red-500/10 border-red-500"),children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[A.isLikelyTrue?T.jsx(Aa,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}):T.jsx(wi,{className:"w-4 h-4 text-red-400 flex-shrink-0"}),T.jsx("span",{className:it("text-xs font-semibold",A.isLikelyTrue?"text-emerald-300":"text-red-300"),children:A.isLikelyTrue?"Likely True":"Likely False"})]}),T.jsxs("p",{className:"text-xs text-slate-300 mb-2 leading-relaxed",children:['"',A.claim,'"']}),A.supportingSources&&A.supportingSources.length>0&&T.jsxs("div",{className:"space-y-1",children:[T.jsx("p",{className:"text-[10px] font-semibold text-slate-600 uppercase tracking-wide",children:"Sources"}),A.supportingSources.map((B,q)=>T.jsxs("a",{href:B.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 group",children:[T.jsx(ab,{className:"w-3 h-3 text-slate-600 group-hover:text-indigo-400 flex-shrink-0"}),T.jsx("span",{className:"text-[10px] text-indigo-400 hover:underline truncate",title:B.title,children:B.title})]},q))]})]},D))})]}),((_=e.apiData)==null?void 0:_.sentimentResult)&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Sentiment Analysis"}),T.jsxs("div",{className:"p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[T.jsx(e_,{className:"w-4 h-4 text-indigo-400"}),T.jsx("span",{className:"text-xs font-medium text-indigo-300",children:"Content Tone"})]}),T.jsx("p",{className:"text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:e.apiData.sentimentResult.summary})]})]}),g&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Content Summary"}),T.jsxs("div",{className:"p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[T.jsx(po,{className:"w-4 h-4 text-emerald-400"}),T.jsx("span",{className:"text-xs font-medium text-emerald-300",children:"AI-Generated Summary"})]}),T.jsxs("p",{className:"text-[10px] text-emerald-700 mb-2",children:[g.model," · ",g.input_length," → ",g.summary_length," chars"]}),T.jsx("div",{className:"text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:g.summary})]})]}),((N=e.apiData)==null?void 0:N.imageDetectionResults)&&e.apiData.imageDetectionResults.length>0&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("button",{onClick:f,className:"w-full flex items-center justify-between hover:opacity-80 transition-opacity",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(J1,{className:"w-4 h-4 text-indigo-400"}),T.jsxs("div",{className:"text-left",children:[T.jsx("h3",{className:"text-sm font-semibold text-white",children:"Image Analysis"}),T.jsxs("p",{className:"text-[10px] text-slate-500",children:[e.apiData.imageDetectionResults.length," image",e.apiData.imageDetectionResults.length!==1?"s":""," analyzed"]})]})]}),T.jsx("div",{className:it("transition-transform duration-200",s?"rotate-180":""),children:T.jsx("svg",{className:"w-4 h-4 text-slate-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),s&&T.jsx("div",{className:"mt-3 space-y-2",children:e.apiData.imageDetectionResults.map((A,D)=>T.jsxs("div",{className:it("p-3 rounded-xl border-l-2",A.aiLikelihoodPercent>70?"bg-red-500/10 border-red-500":A.aiLikelihoodPercent>40?"bg-amber-500/10 border-amber-500":"bg-emerald-500/10 border-emerald-500"),children:[T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[A.aiLikelihoodPercent>70?T.jsx(wi,{className:"w-4 h-4 text-red-400 flex-shrink-0"}):A.aiLikelihoodPercent>40?T.jsx(wi,{className:"w-4 h-4 text-amber-400 flex-shrink-0"}):T.jsx(Aa,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),T.jsxs("span",{className:it("text-xs font-medium",A.aiLikelihoodPercent>70?"text-red-300":A.aiLikelihoodPercent>40?"text-amber-300":"text-emerald-300"),children:["AI Likelihood: ",A.aiLikelihoodPercent,"%"]})]}),T.jsx("img",{src:A.url,alt:"Analyzed",className:"max-w-full h-24 object-cover rounded-lg border border-white/10 mb-2",onError:B=>{B.target.style.display="none"}}),T.jsx("p",{className:"text-[10px] text-slate-600 break-all",children:A.url}),A.rawModelReply&&T.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:[T.jsx("span",{className:"font-medium text-slate-300",children:"Analysis: "}),A.rawModelReply]}),A.topSources&&A.topSources.length>0&&A.aiLikelihoodPercent>40&&T.jsxs("div",{className:"mt-2 p-2 bg-white/5 rounded-lg",children:[T.jsx("p",{className:"text-[10px] font-medium text-slate-500 mb-1",children:"Possible AI Sources"}),A.topSources.map((B,q)=>T.jsxs("div",{className:"flex justify-between text-[10px]",children:[T.jsx("span",{className:"capitalize text-slate-500",children:B.source}),T.jsxs("span",{className:it("font-medium",B.confidence>1?"text-red-400":B.confidence>.1?"text-amber-400":"text-slate-500"),children:[B.confidence.toFixed(2),"%"]})]},q))]})]},D))})]})]})}function a3({report:e,question:r,qaResponse:i,answerInProgress:s,scanInProgress:c,onQuestionChange:f,onSubmit:g,onScan:b}){var N,A;const _=!!((A=(N=e==null?void 0:e.apiData)==null?void 0:N.scrapedData)!=null&&A.text);return T.jsx("div",{className:"space-y-3",children:T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("h3",{className:"text-sm font-semibold text-white mb-3 flex items-center gap-2",children:[T.jsx(aa,{className:"w-4 h-4 text-indigo-400"}),"Ask About This Page"]}),_?T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-medium text-slate-400 mb-1.5",children:"Your Question"}),T.jsx("textarea",{value:r,onChange:D=>f(D.target.value),placeholder:"Ask anything about the page content...",className:"ts-input h-20 resize-none text-sm",disabled:s})]}),T.jsx("button",{onClick:g,disabled:!r.trim()||s,className:"ts-btn-primary w-full flex items-center justify-center gap-2 text-sm",children:s?T.jsxs(T.Fragment,{children:[T.jsx(Ma,{className:"w-4 h-4 animate-spin"}),"Getting Answer..."]}):T.jsxs(T.Fragment,{children:[T.jsx(aa,{className:"w-4 h-4"}),"Ask Question"]})}),i&&T.jsxs("div",{className:"p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[T.jsx(aa,{className:"w-4 h-4 text-indigo-400"}),T.jsx("span",{className:"text-xs font-semibold text-indigo-300",children:"Answer"})]}),T.jsxs("p",{className:"text-[10px] text-indigo-600 mb-2",children:[i.model," · ",i.content_length," chars context · ",i.answer_length," char answer"]}),T.jsx("div",{className:"text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:i.answer})]}),T.jsxs("p",{className:"text-[10px] text-slate-700 text-center",children:[e.apiData.scrapedData.text.length.toLocaleString()," characters available as context"]})]}):T.jsxs("div",{className:"py-10 text-center",children:[T.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center",children:T.jsx(aa,{className:"w-6 h-6 text-indigo-400/40"})}),T.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"Scan the page first to enable Q&A"}),T.jsx("button",{onClick:b,disabled:c,className:"ts-btn-primary text-xs flex items-center gap-1.5 mx-auto",children:c?T.jsxs(T.Fragment,{children:[T.jsx(Ma,{className:"w-3.5 h-3.5 animate-spin"}),"Scanning..."]}):T.jsxs(T.Fragment,{children:[T.jsx(r_,{className:"w-3.5 h-3.5"}),"Scan Page"]})})]})]})})}function s3({darkMode:e,onToggleTheme:r}){return T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Appearance"}),T.jsxs("div",{className:"flex items-center justify-between py-2",children:[T.jsxs("div",{children:[T.jsx("p",{className:"text-sm text-slate-200",children:"Dark Theme"}),T.jsx("p",{className:"text-xs text-slate-600",children:"Use dark color scheme"})]}),T.jsx("button",{onClick:r,className:it("relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200",e?"bg-purple-600":"bg-slate-700"),children:T.jsx("span",{className:it("inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200",e?"translate-x-6":"translate-x-1")})})]})]}),T.jsx(Zb,{}),T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-2",children:"About TruthScan"}),T.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"TruthScan helps you identify AI-generated content and potential misinformation on any webpage. Stay informed online with advanced multi-model detection across text, facts, and images."}),T.jsxs("div",{className:"mt-3 flex items-center justify-between text-[10px] text-slate-600",children:[T.jsx("span",{children:"Version 2.0.0"}),T.jsx("span",{children:"Inference: Local ONNX"})]})]})]})}const o3=()=>{const[e,r]=Ye.useState(!0),[i,s]=Ye.useState("overview"),[c,f]=Ye.useState(!1),[g,b]=Ye.useState(!1),[_,N]=Ye.useState(!1),[A,D]=Ye.useState(null),[B,q]=Ye.useState(null),[G,Y]=Ye.useState(null),[$e,M]=Ye.useState(""),[R,P]=Ye.useState(null),[K,ie]=Ye.useState([]),[te,ue]=Ye.useState(!1);Ye.useEffect(()=>{chrome.storage.local.get(["theme"],ee=>{const X=ee.theme!=="light";r(X),document.documentElement.classList.toggle("dark",X)}),Be(),kt(),Gb().catch(()=>{})},[]);const H=ee=>console.log(`[TruthScan] ${ee}`),Be=async()=>{H("Checking local model availability...");try{const ee=await m_();P(ee),H(`Local model: ${ee?"ready":"not found"}`)}catch{P(!1)}},be=()=>{const ee=!e;r(ee),document.documentElement.classList.toggle("dark",ee),chrome.storage.local.set({theme:ee?"dark":"light"})},ze=(ee,X,ye)=>{ie(ke=>ke.map(Ue=>Ue.id===ee?{...Ue,status:X,error:ye}:Ue))},Re=()=>[{id:"get-url",title:"Getting Page URL",description:"Retrieving current tab URL",status:"pending"},{id:"scrape-content",title:"Extracting Content",description:"Reading page text via content script",status:"pending"},{id:"detect-ai",title:"AI Detection",description:"Running local ONNX model inference",status:"pending"},{id:"fact-check",title:"Fact Checking",description:"No local model — skipped",status:"pending"},{id:"sentiment",title:"Sentiment Analysis",description:"No local model — skipped",status:"pending"},{id:"image-scan",title:"Image Scanning",description:"No local model — skipped",status:"pending"},{id:"summarize",title:"Summarizing",description:"No local model — skipped",status:"pending"},{id:"report",title:"Building Report",description:"Compiling risk assessment",status:"pending"}],kt=async()=>{try{const[ee]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!ee.url)return;chrome.storage.local.get([`analysis_${ee.url}`],X=>{const ye=X[`analysis_${ee.url}`];ye&&(H(`Restored saved report for: ${ee.url}`),D(ye))})}catch(ee){H(`Failed to restore report: ${ee}`)}},Gt=async ee=>{try{const[X]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!X.url)return;chrome.storage.local.set({[`analysis_${X.url}`]:ee},()=>{H(`Report saved for: ${X.url}`)})}catch(X){H(`Failed to save report: ${X}`)}},Cr=async ee=>{var ke;const X=await chrome.tabs.sendMessage(ee,{type:"ANALYZE_PAGE"});if(!(X!=null&&X.success)||!((ke=X==null?void 0:X.content)!=null&&ke.text))throw new Error((X==null?void 0:X.error)||"Content script returned no page text");const ye=String(X.content.text||"").trim();if(!ye)throw new Error("Content script extracted empty text");return{url:X.content.url||"",text:ye,images:[]}},St=async()=>{f(!0);const ee=Re();ie(ee),H("Starting full page scan...");let X,ye=null,ke=null,Ue=[];const Et=[];try{if(ze("get-url","loading"),X=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],!(X!=null&&X.url))throw new Error("No active tab URL found");ze("get-url","completed"),H(`Scanning: ${X.url}`)}catch(nt){ze("get-url","error",nt instanceof Error?nt.message:"Unknown error"),f(!1);return}if(ze("scrape-content","loading"),X.id)try{ye=await Cr(X.id),ze("scrape-content","completed"),H(`Content extracted: ${ye.text.length} chars`)}catch(nt){ze("scrape-content","error",nt instanceof Error?nt.message:"Content extraction failed"),H(`Content extraction failed: ${nt}`)}else ze("scrape-content","error","No tab ID — cannot extract content");if(ye){ze("detect-ai","loading");try{const nt=await qb(ye.text);ke={textPreview:nt.textPreview,aiLikelihoodPercent:nt.aiLikelihoodPercent},ze("detect-ai","completed"),H(`Local AI score: ${nt.aiLikelihoodPercent}%`),Et.push({id:"1",type:"ai-generated",confidence:nt.aiLikelihoodPercent,description:`Local model: ${g_(nt.aiLikelihoodPercent).toLowerCase()} likelihood of AI generation (DistilBERT)`,timestamp:new Date})}catch(nt){ze("detect-ai","error",nt instanceof Error?nt.message:"Local AI detection failed"),Et.push({id:"1",type:"ai-generated",confidence:0,description:"Local AI detection failed — see console for details",timestamp:new Date})}}else ze("detect-ai","error","No content — cannot run AI detection"),Et.push({id:"1",type:"ai-generated",confidence:0,description:"AI detection skipped — no content extracted",timestamp:new Date});ze("fact-check","completed"),Et.push({id:"2",type:"fake-news",confidence:0,description:"Fact-check model not available offline — result not computed",timestamp:new Date}),H("Fact check skipped — no local model"),ze("sentiment","completed"),H("Sentiment skipped — no local model"),ze("image-scan","completed"),H("Image scan skipped — no local model"),ze("summarize","completed"),H("Summarization skipped — no local model"),ze("report","loading");const xr=(ke==null?void 0:ke.aiLikelihoodPercent)??0,Kt=0;let $r="low";xr>70?$r="high":xr>40&&($r="medium");const vt={url:(ye==null?void 0:ye.url)??X.url,title:X.title??"Unknown",aiScore:xr,fakeNewsScore:Kt,overallRisk:$r,results:Et,factCheckClaims:[],apiData:{scrapedData:ye??{url:X.url,text:"",images:[]},detectionResult:ke??{textPreview:"",aiLikelihoodPercent:0},factCheckResult:void 0,sentimentResult:void 0,summarizationResult:void 0,imageDetectionResults:Ue,timestamp:new Date}};D(vt),await Gt(vt),ze("report","completed"),H("Scan complete"),f(!1)},Ht=async()=>{var ee,X;if(!((X=(ee=A==null?void 0:A.apiData)==null?void 0:ee.scrapedData)!=null&&X.text)){await St();return}H("Summarization skipped — no local model available")},ae=async()=>{var ee,X;if(!(!$e.trim()||!((X=(ee=A==null?void 0:A.apiData)==null?void 0:ee.scrapedData)!=null&&X.text))){N(!0);try{await new Promise(ye=>setTimeout(ye,400)),Y({question:$e.trim(),answer:"Q&A requires a local language model, which is not bundled in this version. The AI detection result above was computed fully offline.",model:"none",content_length:A.apiData.scrapedData.text.length,answer_length:0})}catch(ye){H(`Q&A failed: ${ye}`)}finally{N(!1)}}};return T.jsxs("div",{className:it("w-96 h-[600px] flex flex-col overflow-hidden",e?"bg-[#0a0a1a] text-slate-100":"bg-slate-100 text-slate-900 [&_.glass-panel]:bg-white [&_.glass-panel]:border-slate-200 [&_.ts-input]:bg-white [&_.ts-input]:border-slate-300 [&_.ts-input]:text-slate-900"),children:[T.jsx(e3,{darkMode:e,serverOnline:R,onToggleTheme:be}),T.jsx(r3,{activeTab:i,onTabChange:s}),T.jsxs("div",{className:"flex-1 overflow-y-auto p-3",children:[i==="overview"&&T.jsx(n3,{report:A,scanInProgress:c,summarizeInProgress:g,summaryData:B,pipelineStages:K,serverOnline:R,onScan:St,onSummarize:Ht}),i==="analysis"&&A?T.jsx(i3,{report:A,summaryData:B,summarizeInProgress:g,imageExpanded:te,onSummarize:Ht,onToggleImages:()=>ue(ee=>!ee)}):i==="analysis"&&T.jsxs("div",{className:"py-20 text-center",children:[T.jsx(Y1,{className:"w-12 h-12 mx-auto mb-4 text-slate-800"}),T.jsx("p",{className:"text-sm text-slate-500",children:"No scan results yet."}),T.jsx("p",{className:"text-xs text-slate-700 mt-1",children:"Run a scan from the Overview tab first."})]}),i==="qa"&&T.jsx(a3,{report:A,question:$e,qaResponse:G,answerInProgress:_,scanInProgress:c,onQuestionChange:M,onSubmit:ae,onScan:St}),i==="settings"&&T.jsx(s3,{darkMode:e,onToggleTheme:be})]})]})};Du.createRoot(document.getElementById("root")).render(T.jsx(Vx.StrictMode,{children:T.jsx(o3,{})}));export{Ex as a,l3 as g};

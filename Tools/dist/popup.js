var jx=Object.defineProperty;var Ux=(e,r,i)=>r in e?jx(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var Oy=(e,r,i)=>(Ux(e,typeof r!="symbol"?r+"":r,i),i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Vx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qv={exports:{}},xo={},Xv={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Fx=Symbol.for("react.portal"),qx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Gx=Symbol.for("react.profiler"),Hx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Qx=Symbol.for("react.forward_ref"),Xx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Yx=Symbol.for("react.lazy"),Ay=Symbol.iterator;function Jx(e){return e===null||typeof e!="object"?null:(e=Ay&&e[Ay]||e["@@iterator"],typeof e=="function"?e:null)}var Zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yv=Object.assign,Jv={};function Oi(e,r,i){this.props=e,this.context=r,this.refs=Jv,this.updater=i||Zv}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ew(){}ew.prototype=Oi.prototype;function qd(e,r,i){this.props=e,this.context=r,this.refs=Jv,this.updater=i||Zv}var Wd=qd.prototype=new ew;Wd.constructor=qd;Yv(Wd,Oi.prototype);Wd.isPureReactComponent=!0;var My=Array.isArray,tw=Object.prototype.hasOwnProperty,Gd={current:null},rw={key:!0,ref:!0,__self:!0,__source:!0};function nw(e,r,i){var s,c={},f=null,g=null;if(r!=null)for(s in r.ref!==void 0&&(g=r.ref),r.key!==void 0&&(f=""+r.key),r)tw.call(r,s)&&!rw.hasOwnProperty(s)&&(c[s]=r[s]);var b=arguments.length-2;if(b===1)c.children=i;else if(1<b){for(var x=Array(b),N=0;N<b;N++)x[N]=arguments[N+2];c.children=x}if(e&&e.defaultProps)for(s in b=e.defaultProps,b)c[s]===void 0&&(c[s]=b[s]);return{$$typeof:Ua,type:e,key:f,ref:g,props:c,_owner:Gd.current}}function e2(e,r){return{$$typeof:Ua,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function t2(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return r[i]})}var Py=/\/+/g;function vu(e,r){return typeof e=="object"&&e!==null&&e.key!=null?t2(""+e.key):r.toString(36)}function Ps(e,r,i,s,c){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var g=!1;if(e===null)g=!0;else switch(f){case"string":case"number":g=!0;break;case"object":switch(e.$$typeof){case Ua:case Fx:g=!0}}if(g)return g=e,c=c(g),e=s===""?"."+vu(g,0):s,My(c)?(i="",e!=null&&(i=e.replace(Py,"$&/")+"/"),Ps(c,r,i,"",function(N){return N})):c!=null&&(Hd(c)&&(c=e2(c,i+(!c.key||g&&g.key===c.key?"":(""+c.key).replace(Py,"$&/")+"/")+e)),r.push(c)),1;if(g=0,s=s===""?".":s+":",My(e))for(var b=0;b<e.length;b++){f=e[b];var x=s+vu(f,b);g+=Ps(f,r,i,x,c)}else if(x=Jx(e),typeof x=="function")for(e=x.call(e),b=0;!(f=e.next()).done;)f=f.value,x=s+vu(f,b++),g+=Ps(f,r,i,x,c);else if(f==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return g}function fs(e,r,i){if(e==null)return e;var s=[],c=0;return Ps(e,s,"","",function(f){return r.call(i,f,c++)}),s}function r2(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Dt={current:null},Ds={transition:null},n2={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:Gd};function iw(){throw Error("act(...) is not supported in production builds of React.")}Ne.Children={map:fs,forEach:function(e,r,i){fs(e,function(){r.apply(this,arguments)},i)},count:function(e){var r=0;return fs(e,function(){r++}),r},toArray:function(e){return fs(e,function(r){return r})||[]},only:function(e){if(!Hd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ne.Component=Oi;Ne.Fragment=qx;Ne.Profiler=Gx;Ne.PureComponent=qd;Ne.StrictMode=Wx;Ne.Suspense=Xx;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n2;Ne.act=iw;Ne.cloneElement=function(e,r,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Yv({},e.props),c=e.key,f=e.ref,g=e._owner;if(r!=null){if(r.ref!==void 0&&(f=r.ref,g=Gd.current),r.key!==void 0&&(c=""+r.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(x in r)tw.call(r,x)&&!rw.hasOwnProperty(x)&&(s[x]=r[x]===void 0&&b!==void 0?b[x]:r[x])}var x=arguments.length-2;if(x===1)s.children=i;else if(1<x){b=Array(x);for(var N=0;N<x;N++)b[N]=arguments[N+2];s.children=b}return{$$typeof:Ua,type:e.type,key:c,ref:f,props:s,_owner:g}};Ne.createContext=function(e){return e={$$typeof:Kx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hx,_context:e},e.Consumer=e};Ne.createElement=nw;Ne.createFactory=function(e){var r=nw.bind(null,e);return r.type=e,r};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(e){return{$$typeof:Qx,render:e}};Ne.isValidElement=Hd;Ne.lazy=function(e){return{$$typeof:Yx,_payload:{_status:-1,_result:e},_init:r2}};Ne.memo=function(e,r){return{$$typeof:Zx,type:e,compare:r===void 0?null:r}};Ne.startTransition=function(e){var r=Ds.transition;Ds.transition={};try{e()}finally{Ds.transition=r}};Ne.unstable_act=iw;Ne.useCallback=function(e,r){return Dt.current.useCallback(e,r)};Ne.useContext=function(e){return Dt.current.useContext(e)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(e){return Dt.current.useDeferredValue(e)};Ne.useEffect=function(e,r){return Dt.current.useEffect(e,r)};Ne.useId=function(){return Dt.current.useId()};Ne.useImperativeHandle=function(e,r,i){return Dt.current.useImperativeHandle(e,r,i)};Ne.useInsertionEffect=function(e,r){return Dt.current.useInsertionEffect(e,r)};Ne.useLayoutEffect=function(e,r){return Dt.current.useLayoutEffect(e,r)};Ne.useMemo=function(e,r){return Dt.current.useMemo(e,r)};Ne.useReducer=function(e,r,i){return Dt.current.useReducer(e,r,i)};Ne.useRef=function(e){return Dt.current.useRef(e)};Ne.useState=function(e){return Dt.current.useState(e)};Ne.useSyncExternalStore=function(e,r,i){return Dt.current.useSyncExternalStore(e,r,i)};Ne.useTransition=function(){return Dt.current.useTransition()};Ne.version="18.3.1";Xv.exports=Ne;var Ye=Xv.exports;const i2=Vx(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2=Ye,s2=Symbol.for("react.element"),o2=Symbol.for("react.fragment"),l2=Object.prototype.hasOwnProperty,u2=a2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d2={key:!0,ref:!0,__self:!0,__source:!0};function aw(e,r,i){var s,c={},f=null,g=null;i!==void 0&&(f=""+i),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(g=r.ref);for(s in r)l2.call(r,s)&&!d2.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)c[s]===void 0&&(c[s]=r[s]);return{$$typeof:s2,type:e,key:f,ref:g,props:c,_owner:u2.current}}xo.Fragment=o2;xo.jsx=aw;xo.jsxs=aw;Qv.exports=xo;var T=Qv.exports,Ku={},sw={exports:{}},Jt={},ow={exports:{}},lw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(ne,_e){var xe=ne.length;ne.push(_e);e:for(;0<xe;){var ze=xe-1>>>1,Ve=ne[ze];if(0<c(Ve,_e))ne[ze]=_e,ne[xe]=Ve,xe=ze;else break e}}function i(ne){return ne.length===0?null:ne[0]}function s(ne){if(ne.length===0)return null;var _e=ne[0],xe=ne.pop();if(xe!==_e){ne[0]=xe;e:for(var ze=0,Ve=ne.length,et=Ve>>>1;ze<et;){var ge=2*(ze+1)-1,Ee=ne[ge],ye=ge+1,mt=ne[ye];if(0>c(Ee,xe))ye<Ve&&0>c(mt,Ee)?(ne[ze]=mt,ne[ye]=xe,ze=ye):(ne[ze]=Ee,ne[ge]=xe,ze=ge);else if(ye<Ve&&0>c(mt,xe))ne[ze]=mt,ne[ye]=xe,ze=ye;else break e}}return _e}function c(ne,_e){var xe=ne.sortIndex-_e.sortIndex;return xe!==0?xe:ne.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var g=Date,b=g.now();e.unstable_now=function(){return g.now()-b}}var x=[],N=[],P=1,B=null,A=3,W=!1,G=!1,Q=!1,$e=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(ne){for(var _e=i(N);_e!==null;){if(_e.callback===null)s(N);else if(_e.startTime<=ne)s(N),_e.sortIndex=_e.expirationTime,r(x,_e);else break;_e=i(N)}}function H(ne){if(Q=!1,D(ne),!G)if(i(x)!==null)G=!0,Pe(re);else{var _e=i(N);_e!==null&&ur(H,_e.startTime-ne)}}function re(ne,_e){G=!1,Q&&(Q=!1,M(Y),Y=-1),W=!0;var xe=A;try{for(D(_e),B=i(x);B!==null&&(!(B.expirationTime>_e)||ne&&!ut());){var ze=B.callback;if(typeof ze=="function"){B.callback=null,A=B.priorityLevel;var Ve=ze(B.expirationTime<=_e);_e=e.unstable_now(),typeof Ve=="function"?B.callback=Ve:B===i(x)&&s(x),D(_e)}else s(x);B=i(x)}if(B!==null)var et=!0;else{var ge=i(N);ge!==null&&ur(H,ge.startTime-_e),et=!1}return et}finally{B=null,A=xe,W=!1}}var J=!1,se=null,Y=-1,Ue=5,Se=-1;function ut(){return!(e.unstable_now()-Se<Ue)}function he(){if(se!==null){var ne=e.unstable_now();Se=ne;var _e=!0;try{_e=se(!0,ne)}finally{_e?Rt():(J=!1,se=null)}}else J=!1}var Rt;if(typeof R=="function")Rt=function(){R(he)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,Or=Wt.port2;Wt.port1.onmessage=he,Rt=function(){Or.postMessage(null)}}else Rt=function(){$e(he,0)};function Pe(ne){se=ne,J||(J=!0,Rt())}function ur(ne,_e){Y=$e(function(){ne(e.unstable_now())},_e)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ne){ne.callback=null},e.unstable_continueExecution=function(){G||W||(G=!0,Pe(re))},e.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<ne?Math.floor(1e3/ne):5},e.unstable_getCurrentPriorityLevel=function(){return A},e.unstable_getFirstCallbackNode=function(){return i(x)},e.unstable_next=function(ne){switch(A){case 1:case 2:case 3:var _e=3;break;default:_e=A}var xe=A;A=_e;try{return ne()}finally{A=xe}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ne,_e){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var xe=A;A=ne;try{return _e()}finally{A=xe}},e.unstable_scheduleCallback=function(ne,_e,xe){var ze=e.unstable_now();switch(typeof xe=="object"&&xe!==null?(xe=xe.delay,xe=typeof xe=="number"&&0<xe?ze+xe:ze):xe=ze,ne){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=xe+Ve,ne={id:P++,callback:_e,priorityLevel:ne,startTime:xe,expirationTime:Ve,sortIndex:-1},xe>ze?(ne.sortIndex=xe,r(N,ne),i(x)===null&&ne===i(N)&&(Q?(M(Y),Y=-1):Q=!0,ur(H,xe-ze))):(ne.sortIndex=Ve,r(x,ne),G||W||(G=!0,Pe(re))),ne},e.unstable_shouldYield=ut,e.unstable_wrapCallback=function(ne){var _e=A;return function(){var xe=A;A=_e;try{return ne.apply(this,arguments)}finally{A=xe}}}})(lw);ow.exports=lw;var c2=ow.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p2=Ye,Yt=c2;function K(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uw=new Set,$a={};function Zn(e,r){Ei(e,r),Ei(e+"Capture",r)}function Ei(e,r){for($a[e]=r,e=0;e<r.length;e++)uw.add(r[e])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,f2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dy={},By={};function h2(e){return Qu.call(By,e)?!0:Qu.call(Dy,e)?!1:f2.test(e)?By[e]=!0:(Dy[e]=!0,!1)}function m2(e,r,i,s){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g2(e,r,i,s){if(r===null||typeof r>"u"||m2(e,r,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Bt(e,r,i,s,c,f,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=r,this.sanitizeURL=f,this.removeEmptyString=g}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){St[e]=new Bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];St[r]=new Bt(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){St[e]=new Bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){St[e]=new Bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){St[e]=new Bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){St[e]=new Bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){St[e]=new Bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){St[e]=new Bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){St[e]=new Bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Qd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Kd,Qd);St[r]=new Bt(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Kd,Qd);St[r]=new Bt(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Kd,Qd);St[r]=new Bt(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){St[e]=new Bt(e,1,!1,e.toLowerCase(),null,!1,!1)});St.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){St[e]=new Bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xd(e,r,i,s){var c=St.hasOwnProperty(r)?St[r]:null;(c!==null?c.type!==0:s||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(g2(r,i,c,s)&&(i=null),s||c===null?h2(r)&&(i===null?e.removeAttribute(r):e.setAttribute(r,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(r=c.attributeName,s=c.attributeNamespace,i===null?e.removeAttribute(r):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,s?e.setAttributeNS(s,r,i):e.setAttribute(r,i))))}var Kr=p2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hs=Symbol.for("react.element"),oi=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),dw=Symbol.for("react.provider"),cw=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),pw=Symbol.for("react.offscreen"),Ly=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=Ly&&e[Ly]||e["@@iterator"],typeof e=="function"?e:null)}var it=Object.assign,wu;function oa(e){if(wu===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);wu=r&&r[1]||""}return`
`+wu+e}var _u=!1;function xu(e,r){if(!e||_u)return"";_u=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(N){var s=N}Reflect.construct(e,[],r)}else{try{r.call()}catch(N){s=N}e.call(r.prototype)}else{try{throw Error()}catch(N){s=N}e()}}catch(N){if(N&&s&&typeof N.stack=="string"){for(var c=N.stack.split(`
`),f=s.stack.split(`
`),g=c.length-1,b=f.length-1;1<=g&&0<=b&&c[g]!==f[b];)b--;for(;1<=g&&0<=b;g--,b--)if(c[g]!==f[b]){if(g!==1||b!==1)do if(g--,b--,0>b||c[g]!==f[b]){var x=`
`+c[g].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=g&&0<=b);break}}}finally{_u=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?oa(e):""}function y2(e){switch(e.tag){case 5:return oa(e.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return e=xu(e.type,!1),e;case 11:return e=xu(e.type.render,!1),e;case 1:return e=xu(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case li:return"Fragment";case oi:return"Portal";case Xu:return"Profiler";case Zd:return"StrictMode";case Zu:return"Suspense";case Yu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cw:return(e.displayName||"Context")+".Consumer";case dw:return(e._context.displayName||"Context")+".Provider";case Yd:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jd:return r=e.displayName||null,r!==null?r:Ju(e.type)||"Memo";case an:r=e._payload,e=e._init;try{return Ju(e(r))}catch{}}return null}function v2(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(r);case 8:return r===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fw(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function w2(e){var r=fw(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),s=""+e[r];if(!e.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return c.call(this)},set:function(g){s=""+g,f.call(this,g)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ms(e){e._valueTracker||(e._valueTracker=w2(e))}function hw(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),s="";return e&&(s=fw(e)?e.checked?"true":"false":e.value),e=s,e!==i?(r.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ed(e,r){var i=r.checked;return it({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function jy(e,r){var i=r.defaultValue==null?"":r.defaultValue,s=r.checked!=null?r.checked:r.defaultChecked;i=_n(r.value!=null?r.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mw(e,r){r=r.checked,r!=null&&Xd(e,"checked",r,!1)}function td(e,r){mw(e,r);var i=_n(r.value),s=r.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?rd(e,r.type,i):r.hasOwnProperty("defaultValue")&&rd(e,r.type,_n(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Uy(e,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var s=r.type;if(!(s!=="submit"&&s!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,i||r===e.value||(e.value=r),e.defaultValue=r}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function rd(e,r,i){(r!=="number"||Qs(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var la=Array.isArray;function wi(e,r,i,s){if(e=e.options,r){r={};for(var c=0;c<i.length;c++)r["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=r.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&s&&(e[i].defaultSelected=!0)}else{for(i=""+_n(i),r=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}r!==null||e[c].disabled||(r=e[c])}r!==null&&(r.selected=!0)}}function nd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(K(91));return it({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vy(e,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(K(92));if(la(i)){if(1<i.length)throw Error(K(93));i=i[0]}r=i}r==null&&(r=""),i=r}e._wrapperState={initialValue:_n(i)}}function gw(e,r){var i=_n(r.value),s=_n(r.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),r.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function Fy(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function yw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?yw(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gs,vw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,s,c){MSApp.execUnsafeLocalFunction(function(){return e(r,i,s,c)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ba(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_2=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(e){_2.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),fa[r]=fa[e]})});function ww(e,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||fa.hasOwnProperty(e)&&fa[e]?(""+r).trim():r+"px"}function _w(e,r){e=e.style;for(var i in r)if(r.hasOwnProperty(i)){var s=i.indexOf("--")===0,c=ww(i,r[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,c):e[i]=c}}var x2=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(e,r){if(r){if(x2[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(K(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(K(61))}if(r.style!=null&&typeof r.style!="object")throw Error(K(62))}}function sd(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ld=null,_i=null,xi=null;function qy(e){if(e=qa(e)){if(typeof ld!="function")throw Error(K(280));var r=e.stateNode;r&&(r=Eo(r),ld(e.stateNode,e.type,r))}}function xw(e){_i?xi?xi.push(e):xi=[e]:_i=e}function $w(){if(_i){var e=_i,r=xi;if(xi=_i=null,qy(e),r)for(e=0;e<r.length;e++)qy(r[e])}}function bw(e,r){return e(r)}function kw(){}var $u=!1;function Sw(e,r,i){if($u)return e(r,i);$u=!0;try{return bw(e,r,i)}finally{$u=!1,(_i!==null||xi!==null)&&(kw(),$w())}}function ka(e,r){var i=e.stateNode;if(i===null)return null;var s=Eo(i);if(s===null)return null;i=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(K(231,r,typeof i));return i}var ud=!1;if(qr)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{ud=!1}function $2(e,r,i,s,c,f,g,b,x){var N=Array.prototype.slice.call(arguments,3);try{r.apply(i,N)}catch(P){this.onError(P)}}var ha=!1,Xs=null,Zs=!1,dd=null,b2={onError:function(e){ha=!0,Xs=e}};function k2(e,r,i,s,c,f,g,b,x){ha=!1,Xs=null,$2.apply(b2,arguments)}function S2(e,r,i,s,c,f,g,b,x){if(k2.apply(this,arguments),ha){if(ha){var N=Xs;ha=!1,Xs=null}else throw Error(K(198));Zs||(Zs=!0,dd=N)}}function Yn(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function Ew(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Wy(e){if(Yn(e)!==e)throw Error(K(188))}function E2(e){var r=e.alternate;if(!r){if(r=Yn(e),r===null)throw Error(K(188));return r!==e?null:e}for(var i=e,s=r;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return Wy(c),e;if(f===s)return Wy(c),r;f=f.sibling}throw Error(K(188))}if(i.return!==s.return)i=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===i){g=!0,i=c,s=f;break}if(b===s){g=!0,s=c,i=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===i){g=!0,i=f,s=c;break}if(b===s){g=!0,s=f,i=c;break}b=b.sibling}if(!g)throw Error(K(189))}}if(i.alternate!==s)throw Error(K(190))}if(i.tag!==3)throw Error(K(188));return i.stateNode.current===i?e:r}function Tw(e){return e=E2(e),e!==null?Iw(e):null}function Iw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Iw(e);if(r!==null)return r;e=e.sibling}return null}var zw=Yt.unstable_scheduleCallback,Gy=Yt.unstable_cancelCallback,T2=Yt.unstable_shouldYield,I2=Yt.unstable_requestPaint,lt=Yt.unstable_now,z2=Yt.unstable_getCurrentPriorityLevel,tc=Yt.unstable_ImmediatePriority,Cw=Yt.unstable_UserBlockingPriority,Ys=Yt.unstable_NormalPriority,C2=Yt.unstable_LowPriority,Nw=Yt.unstable_IdlePriority,$o=null,Nr=null;function N2(e){if(Nr&&typeof Nr.onCommitFiberRoot=="function")try{Nr.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:A2,R2=Math.log,O2=Math.LN2;function A2(e){return e>>>=0,e===0?32:31-(R2(e)/O2|0)|0}var ys=64,vs=4194304;function ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Js(e,r){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,f=e.pingedLanes,g=i&268435455;if(g!==0){var b=g&~c;b!==0?s=ua(b):(f&=g,f!==0&&(s=ua(f)))}else g=i&~c,g!==0?s=ua(g):f!==0&&(s=ua(f));if(s===0)return 0;if(r!==0&&r!==s&&!(r&c)&&(c=s&-s,f=r&-r,c>=f||c===16&&(f&4194240)!==0))return r;if(s&4&&(s|=i&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=s;0<r;)i=31-kr(r),c=1<<i,s|=e[i],r&=~c;return s}function M2(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P2(e,r){for(var i=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var g=31-kr(f),b=1<<g,x=c[g];x===-1?(!(b&i)||b&s)&&(c[g]=M2(b,r)):x<=r&&(e.expiredLanes|=b),f&=~b}}function cd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rw(){var e=ys;return ys<<=1,!(ys&4194240)&&(ys=64),e}function bu(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function Va(e,r,i){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-kr(r),e[r]=i}function D2(e,r){var i=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-kr(i),f=1<<c;r[c]=0,s[c]=-1,e[c]=-1,i&=~f}}function rc(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var s=31-kr(i),c=1<<s;c&r|e[s]&r&&(e[s]|=r),i&=~c}}var We=0;function Ow(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Aw,nc,Mw,Pw,Dw,pd=!1,ws=[],cn=null,pn=null,fn=null,Sa=new Map,Ea=new Map,on=[],B2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hy(e,r){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(r.pointerId)}}function Yi(e,r,i,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:i,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},r!==null&&(r=qa(r),r!==null&&nc(r)),e):(e.eventSystemFlags|=s,r=e.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),e)}function L2(e,r,i,s,c){switch(r){case"focusin":return cn=Yi(cn,e,r,i,s,c),!0;case"dragenter":return pn=Yi(pn,e,r,i,s,c),!0;case"mouseover":return fn=Yi(fn,e,r,i,s,c),!0;case"pointerover":var f=c.pointerId;return Sa.set(f,Yi(Sa.get(f)||null,e,r,i,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ea.set(f,Yi(Ea.get(f)||null,e,r,i,s,c)),!0}return!1}function Bw(e){var r=jn(e.target);if(r!==null){var i=Yn(r);if(i!==null){if(r=i.tag,r===13){if(r=Ew(i),r!==null){e.blockedOn=r,Dw(e.priority,function(){Mw(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bs(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=fd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);od=s,i.target.dispatchEvent(s),od=null}else return r=qa(i),r!==null&&nc(r),e.blockedOn=i,!1;r.shift()}return!0}function Ky(e,r,i){Bs(e)&&i.delete(r)}function j2(){pd=!1,cn!==null&&Bs(cn)&&(cn=null),pn!==null&&Bs(pn)&&(pn=null),fn!==null&&Bs(fn)&&(fn=null),Sa.forEach(Ky),Ea.forEach(Ky)}function Ji(e,r){e.blockedOn===r&&(e.blockedOn=null,pd||(pd=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,j2)))}function Ta(e){function r(c){return Ji(c,e)}if(0<ws.length){Ji(ws[0],e);for(var i=1;i<ws.length;i++){var s=ws[i];s.blockedOn===e&&(s.blockedOn=null)}}for(cn!==null&&Ji(cn,e),pn!==null&&Ji(pn,e),fn!==null&&Ji(fn,e),Sa.forEach(r),Ea.forEach(r),i=0;i<on.length;i++)s=on[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<on.length&&(i=on[0],i.blockedOn===null);)Bw(i),i.blockedOn===null&&on.shift()}var $i=Kr.ReactCurrentBatchConfig,eo=!0;function U2(e,r,i,s){var c=We,f=$i.transition;$i.transition=null;try{We=1,ic(e,r,i,s)}finally{We=c,$i.transition=f}}function V2(e,r,i,s){var c=We,f=$i.transition;$i.transition=null;try{We=4,ic(e,r,i,s)}finally{We=c,$i.transition=f}}function ic(e,r,i,s){if(eo){var c=fd(e,r,i,s);if(c===null)Ou(e,r,s,to,i),Hy(e,s);else if(L2(c,e,r,i,s))s.stopPropagation();else if(Hy(e,s),r&4&&-1<B2.indexOf(e)){for(;c!==null;){var f=qa(c);if(f!==null&&Aw(f),f=fd(e,r,i,s),f===null&&Ou(e,r,s,to,i),f===c)break;c=f}c!==null&&s.stopPropagation()}else Ou(e,r,s,null,i)}}var to=null;function fd(e,r,i,s){if(to=null,e=ec(s),e=jn(e),e!==null)if(r=Yn(e),r===null)e=null;else if(i=r.tag,i===13){if(e=Ew(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return to=e,null}function Lw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z2()){case tc:return 1;case Cw:return 4;case Ys:case C2:return 16;case Nw:return 536870912;default:return 16}default:return 16}}var un=null,ac=null,Ls=null;function jw(){if(Ls)return Ls;var e,r=ac,i=r.length,s,c="value"in un?un.value:un.textContent,f=c.length;for(e=0;e<i&&r[e]===c[e];e++);var g=i-e;for(s=1;s<=g&&r[i-s]===c[f-s];s++);return Ls=c.slice(e,1<s?1-s:void 0)}function js(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function Qy(){return!1}function er(e){function r(i,s,c,f,g){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_s:Qy,this.isPropagationStopped=Qy,this}return it(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),r}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=er(Ai),Fa=it({},Ai,{view:0,detail:0}),F2=er(Fa),ku,Su,ea,bo=it({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ea&&(ea&&e.type==="mousemove"?(ku=e.screenX-ea.screenX,Su=e.screenY-ea.screenY):Su=ku=0,ea=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Xy=er(bo),q2=it({},bo,{dataTransfer:0}),W2=er(q2),G2=it({},Fa,{relatedTarget:0}),Eu=er(G2),H2=it({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),K2=er(H2),Q2=it({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),X2=er(Q2),Z2=it({},Ai,{data:0}),Zy=er(Z2),Y2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t$(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=e$[e])?!!r[e]:!1}function oc(){return t$}var r$=it({},Fa,{key:function(e){if(e.key){var r=Y2[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n$=er(r$),i$=it({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yy=er(i$),a$=it({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),s$=er(a$),o$=it({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),l$=er(o$),u$=it({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d$=er(u$),c$=[9,13,27,32],lc=qr&&"CompositionEvent"in window,ma=null;qr&&"documentMode"in document&&(ma=document.documentMode);var p$=qr&&"TextEvent"in window&&!ma,Uw=qr&&(!lc||ma&&8<ma&&11>=ma),Jy=String.fromCharCode(32),ev=!1;function Vw(e,r){switch(e){case"keyup":return c$.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ui=!1;function f$(e,r){switch(e){case"compositionend":return Fw(r);case"keypress":return r.which!==32?null:(ev=!0,Jy);case"textInput":return e=r.data,e===Jy&&ev?null:e;default:return null}}function h$(e,r){if(ui)return e==="compositionend"||!lc&&Vw(e,r)?(e=jw(),Ls=ac=un=null,ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Uw&&r.locale!=="ko"?null:r.data;default:return null}}var m$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!m$[e.type]:r==="textarea"}function qw(e,r,i,s){xw(s),r=ro(r,"onChange"),0<r.length&&(i=new sc("onChange","change",null,i,s),e.push({event:i,listeners:r}))}var ga=null,Ia=null;function g$(e){t1(e,0)}function ko(e){var r=pi(e);if(hw(r))return e}function y$(e,r){if(e==="change")return r}var Ww=!1;if(qr){var Tu;if(qr){var Iu="oninput"in document;if(!Iu){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),Iu=typeof rv.oninput=="function"}Tu=Iu}else Tu=!1;Ww=Tu&&(!document.documentMode||9<document.documentMode)}function nv(){ga&&(ga.detachEvent("onpropertychange",Gw),Ia=ga=null)}function Gw(e){if(e.propertyName==="value"&&ko(Ia)){var r=[];qw(r,Ia,e,ec(e)),Sw(g$,r)}}function v$(e,r,i){e==="focusin"?(nv(),ga=r,Ia=i,ga.attachEvent("onpropertychange",Gw)):e==="focusout"&&nv()}function w$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Ia)}function _$(e,r){if(e==="click")return ko(r)}function x$(e,r){if(e==="input"||e==="change")return ko(r)}function $$(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Er=typeof Object.is=="function"?Object.is:$$;function za(e,r){if(Er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),s=Object.keys(r);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!Qu.call(r,c)||!Er(e[c],r[c]))return!1}return!0}function iv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function av(e,r){var i=iv(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=r&&s>=r)return{node:i,offset:r-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=iv(i)}}function Hw(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Hw(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Kw(){for(var e=window,r=Qs();r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)e=r.contentWindow;else break;r=Qs(e.document)}return r}function uc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function b$(e){var r=Kw(),i=e.focusedElem,s=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&Hw(i.ownerDocument.documentElement,i)){if(s!==null&&uc(i)){if(r=s.start,e=s.end,e===void 0&&(e=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(e,i.value.length);else if(e=(r=i.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!e.extend&&f>s&&(c=s,s=f,f=c),c=av(i,f);var g=av(i,s);c&&g&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),e.removeAllRanges(),f>s?(e.addRange(r),e.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),e.addRange(r)))}}for(r=[],e=i;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)e=r[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var k$=qr&&"documentMode"in document&&11>=document.documentMode,di=null,hd=null,ya=null,md=!1;function sv(e,r,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;md||di==null||di!==Qs(s)||(s=di,"selectionStart"in s&&uc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ya&&za(ya,s)||(ya=s,s=ro(hd,"onSelect"),0<s.length&&(r=new sc("onSelect","select",null,r,i),e.push({event:r,listeners:s}),r.target=di)))}function xs(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var ci={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},zu={},Qw={};qr&&(Qw=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function So(e){if(zu[e])return zu[e];if(!ci[e])return e;var r=ci[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in Qw)return zu[e]=r[i];return e}var Xw=So("animationend"),Zw=So("animationiteration"),Yw=So("animationstart"),Jw=So("transitionend"),e1=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,r){e1.set(e,r),Zn(r,[e])}for(var Cu=0;Cu<ov.length;Cu++){var Nu=ov[Cu],S$=Nu.toLowerCase(),E$=Nu[0].toUpperCase()+Nu.slice(1);$n(S$,"on"+E$)}$n(Xw,"onAnimationEnd");$n(Zw,"onAnimationIteration");$n(Yw,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Jw,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T$=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function lv(e,r,i){var s=e.type||"unknown-event";e.currentTarget=i,S2(s,r,void 0,e),e.currentTarget=null}function t1(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],c=s.event;s=s.listeners;e:{var f=void 0;if(r)for(var g=s.length-1;0<=g;g--){var b=s[g],x=b.instance,N=b.currentTarget;if(b=b.listener,x!==f&&c.isPropagationStopped())break e;lv(c,b,N),f=x}else for(g=0;g<s.length;g++){if(b=s[g],x=b.instance,N=b.currentTarget,b=b.listener,x!==f&&c.isPropagationStopped())break e;lv(c,b,N),f=x}}}if(Zs)throw e=dd,Zs=!1,dd=null,e}function Qe(e,r){var i=r[_d];i===void 0&&(i=r[_d]=new Set);var s=e+"__bubble";i.has(s)||(r1(r,e,2,!1),i.add(s))}function Ru(e,r,i){var s=0;r&&(s|=4),r1(i,e,s,r)}var $s="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[$s]){e[$s]=!0,uw.forEach(function(i){i!=="selectionchange"&&(T$.has(i)||Ru(i,!1,e),Ru(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[$s]||(r[$s]=!0,Ru("selectionchange",!1,r))}}function r1(e,r,i,s){switch(Lw(r)){case 1:var c=U2;break;case 4:c=V2;break;default:c=ic}i=c.bind(null,r,i,e),c=void 0,!ud||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(r,i,{capture:!0,passive:c}):e.addEventListener(r,i,!0):c!==void 0?e.addEventListener(r,i,{passive:c}):e.addEventListener(r,i,!1)}function Ou(e,r,i,s,c){var f=s;if(!(r&1)&&!(r&2)&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(g===4)for(g=s.return;g!==null;){var x=g.tag;if((x===3||x===4)&&(x=g.stateNode.containerInfo,x===c||x.nodeType===8&&x.parentNode===c))return;g=g.return}for(;b!==null;){if(g=jn(b),g===null)return;if(x=g.tag,x===5||x===6){s=f=g;continue e}b=b.parentNode}}s=s.return}Sw(function(){var N=f,P=ec(i),B=[];e:{var A=e1.get(e);if(A!==void 0){var W=sc,G=e;switch(e){case"keypress":if(js(i)===0)break e;case"keydown":case"keyup":W=n$;break;case"focusin":G="focus",W=Eu;break;case"focusout":G="blur",W=Eu;break;case"beforeblur":case"afterblur":W=Eu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=s$;break;case Xw:case Zw:case Yw:W=K2;break;case Jw:W=l$;break;case"scroll":W=F2;break;case"wheel":W=d$;break;case"copy":case"cut":case"paste":W=X2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Yy}var Q=(r&4)!==0,$e=!Q&&e==="scroll",M=Q?A!==null?A+"Capture":null:A;Q=[];for(var R=N,D;R!==null;){D=R;var H=D.stateNode;if(D.tag===5&&H!==null&&(D=H,M!==null&&(H=ka(R,M),H!=null&&Q.push(Na(R,H,D)))),$e)break;R=R.return}0<Q.length&&(A=new W(A,G,null,i,P),B.push({event:A,listeners:Q}))}}if(!(r&7)){e:{if(A=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",A&&i!==od&&(G=i.relatedTarget||i.fromElement)&&(jn(G)||G[Wr]))break e;if((W||A)&&(A=P.window===P?P:(A=P.ownerDocument)?A.defaultView||A.parentWindow:window,W?(G=i.relatedTarget||i.toElement,W=N,G=G?jn(G):null,G!==null&&($e=Yn(G),G!==$e||G.tag!==5&&G.tag!==6)&&(G=null)):(W=null,G=N),W!==G)){if(Q=Xy,H="onMouseLeave",M="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Yy,H="onPointerLeave",M="onPointerEnter",R="pointer"),$e=W==null?A:pi(W),D=G==null?A:pi(G),A=new Q(H,R+"leave",W,i,P),A.target=$e,A.relatedTarget=D,H=null,jn(P)===N&&(Q=new Q(M,R+"enter",G,i,P),Q.target=D,Q.relatedTarget=$e,H=Q),$e=H,W&&G)t:{for(Q=W,M=G,R=0,D=Q;D;D=ai(D))R++;for(D=0,H=M;H;H=ai(H))D++;for(;0<R-D;)Q=ai(Q),R--;for(;0<D-R;)M=ai(M),D--;for(;R--;){if(Q===M||M!==null&&Q===M.alternate)break t;Q=ai(Q),M=ai(M)}Q=null}else Q=null;W!==null&&uv(B,A,W,Q,!1),G!==null&&$e!==null&&uv(B,$e,G,Q,!0)}}e:{if(A=N?pi(N):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var re=y$;else if(tv(A))if(Ww)re=x$;else{re=w$;var J=v$}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(re=_$);if(re&&(re=re(e,N))){qw(B,re,i,P);break e}J&&J(e,A,N),e==="focusout"&&(J=A._wrapperState)&&J.controlled&&A.type==="number"&&rd(A,"number",A.value)}switch(J=N?pi(N):window,e){case"focusin":(tv(J)||J.contentEditable==="true")&&(di=J,hd=N,ya=null);break;case"focusout":ya=hd=di=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,sv(B,i,P);break;case"selectionchange":if(k$)break;case"keydown":case"keyup":sv(B,i,P)}var se;if(lc)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else ui?Vw(e,i)&&(Y="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Y="onCompositionStart");Y&&(Uw&&i.locale!=="ko"&&(ui||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&ui&&(se=jw()):(un=P,ac="value"in un?un.value:un.textContent,ui=!0)),J=ro(N,Y),0<J.length&&(Y=new Zy(Y,e,null,i,P),B.push({event:Y,listeners:J}),se?Y.data=se:(se=Fw(i),se!==null&&(Y.data=se)))),(se=p$?f$(e,i):h$(e,i))&&(N=ro(N,"onBeforeInput"),0<N.length&&(P=new Zy("onBeforeInput","beforeinput",null,i,P),B.push({event:P,listeners:N}),P.data=se))}t1(B,r)})}function Na(e,r,i){return{instance:e,listener:r,currentTarget:i}}function ro(e,r){for(var i=r+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=ka(e,i),f!=null&&s.unshift(Na(e,f,c)),f=ka(e,r),f!=null&&s.push(Na(e,f,c))),e=e.return}return s}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uv(e,r,i,s,c){for(var f=r._reactName,g=[];i!==null&&i!==s;){var b=i,x=b.alternate,N=b.stateNode;if(x!==null&&x===s)break;b.tag===5&&N!==null&&(b=N,c?(x=ka(i,f),x!=null&&g.unshift(Na(i,x,b))):c||(x=ka(i,f),x!=null&&g.push(Na(i,x,b)))),i=i.return}g.length!==0&&e.push({event:r,listeners:g})}var I$=/\r\n?/g,z$=/\u0000|\uFFFD/g;function dv(e){return(typeof e=="string"?e:""+e).replace(I$,`
`).replace(z$,"")}function bs(e,r,i){if(r=dv(r),dv(e)!==r&&i)throw Error(K(425))}function no(){}var gd=null,yd=null;function vd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,C$=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,N$=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(e){return cv.resolve(null).then(e).catch(R$)}:wd;function R$(e){setTimeout(function(){throw e})}function Au(e,r){var i=r,s=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(s===0){e.removeChild(c),Ta(r);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=c}while(i);Ta(r)}function hn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function pv(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Cr="__reactFiber$"+Mi,Ra="__reactProps$"+Mi,Wr="__reactContainer$"+Mi,_d="__reactEvents$"+Mi,O$="__reactListeners$"+Mi,A$="__reactHandles$"+Mi;function jn(e){var r=e[Cr];if(r)return r;for(var i=e.parentNode;i;){if(r=i[Wr]||i[Cr]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=pv(e);e!==null;){if(i=e[Cr])return i;e=pv(e)}return r}e=i,i=e.parentNode}return null}function qa(e){return e=e[Cr]||e[Wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function Eo(e){return e[Ra]||null}var xd=[],fi=-1;function bn(e){return{current:e}}function Xe(e){0>fi||(e.current=xd[fi],xd[fi]=null,fi--)}function He(e,r){fi++,xd[fi]=e.current,e.current=r}var xn={},Nt=bn(xn),Vt=bn(!1),Gn=xn;function Ti(e,r){var i=e.type.contextTypes;if(!i)return xn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===r)return s.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=r[f];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=c),c}function Ft(e){return e=e.childContextTypes,e!=null}function io(){Xe(Vt),Xe(Nt)}function fv(e,r,i){if(Nt.current!==xn)throw Error(K(168));He(Nt,r),He(Vt,i)}function n1(e,r,i){var s=e.stateNode;if(r=r.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var c in s)if(!(c in r))throw Error(K(108,v2(e)||"Unknown",c));return it({},i,s)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Gn=Nt.current,He(Nt,e),He(Vt,Vt.current),!0}function hv(e,r,i){var s=e.stateNode;if(!s)throw Error(K(169));i?(e=n1(e,r,Gn),s.__reactInternalMemoizedMergedChildContext=e,Xe(Vt),Xe(Nt),He(Nt,e)):Xe(Vt),He(Vt,i)}var jr=null,To=!1,Mu=!1;function i1(e){jr===null?jr=[e]:jr.push(e)}function M$(e){To=!0,i1(e)}function kn(){if(!Mu&&jr!==null){Mu=!0;var e=0,r=We;try{var i=jr;for(We=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}jr=null,To=!1}catch(c){throw jr!==null&&(jr=jr.slice(e+1)),zw(tc,kn),c}finally{We=r,Mu=!1}}return null}var hi=[],mi=0,so=null,oo=0,nr=[],ir=0,Hn=null,Ur=1,Vr="";function Bn(e,r){hi[mi++]=oo,hi[mi++]=so,so=e,oo=r}function a1(e,r,i){nr[ir++]=Ur,nr[ir++]=Vr,nr[ir++]=Hn,Hn=e;var s=Ur;e=Vr;var c=32-kr(s)-1;s&=~(1<<c),i+=1;var f=32-kr(r)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ur=1<<32-kr(r)+c|i<<c|s,Vr=f+e}else Ur=1<<f|i<<c|s,Vr=e}function dc(e){e.return!==null&&(Bn(e,1),a1(e,1,0))}function cc(e){for(;e===so;)so=hi[--mi],hi[mi]=null,oo=hi[--mi],hi[mi]=null;for(;e===Hn;)Hn=nr[--ir],nr[ir]=null,Vr=nr[--ir],nr[ir]=null,Ur=nr[--ir],nr[ir]=null}var Zt=null,Xt=null,Je=!1,br=null;function s1(e,r){var i=ar(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=e,r=e.deletions,r===null?(e.deletions=[i],e.flags|=16):r.push(i)}function mv(e,r){switch(e.tag){case 5:var i=e.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Zt=e,Xt=hn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Zt=e,Xt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=Hn!==null?{id:Ur,overflow:Vr}:null,e.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=ar(18,null,null,0),i.stateNode=r,i.return=e,e.child=i,Zt=e,Xt=null,!0):!1;default:return!1}}function $d(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bd(e){if(Je){var r=Xt;if(r){var i=r;if(!mv(e,r)){if($d(e))throw Error(K(418));r=hn(i.nextSibling);var s=Zt;r&&mv(e,r)?s1(s,i):(e.flags=e.flags&-4097|2,Je=!1,Zt=e)}}else{if($d(e))throw Error(K(418));e.flags=e.flags&-4097|2,Je=!1,Zt=e}}}function gv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function ks(e){if(e!==Zt)return!1;if(!Je)return gv(e),Je=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!vd(e.type,e.memoizedProps)),r&&(r=Xt)){if($d(e))throw o1(),Error(K(418));for(;r;)s1(e,r),r=hn(r.nextSibling)}if(gv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(r===0){Xt=hn(e.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}e=e.nextSibling}Xt=null}}else Xt=Zt?hn(e.stateNode.nextSibling):null;return!0}function o1(){for(var e=Xt;e;)e=hn(e.nextSibling)}function Ii(){Xt=Zt=null,Je=!1}function pc(e){br===null?br=[e]:br.push(e)}var P$=Kr.ReactCurrentBatchConfig;function ta(e,r,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(K(309));var s=i.stateNode}if(!s)throw Error(K(147,e));var c=s,f=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(g){var b=c.refs;g===null?delete b[f]:b[f]=g},r._stringRef=f,r)}if(typeof e!="string")throw Error(K(284));if(!i._owner)throw Error(K(290,e))}return e}function Ss(e,r){throw e=Object.prototype.toString.call(r),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function yv(e){var r=e._init;return r(e._payload)}function l1(e){function r(M,R){if(e){var D=M.deletions;D===null?(M.deletions=[R],M.flags|=16):D.push(R)}}function i(M,R){if(!e)return null;for(;R!==null;)r(M,R),R=R.sibling;return null}function s(M,R){for(M=new Map;R!==null;)R.key!==null?M.set(R.key,R):M.set(R.index,R),R=R.sibling;return M}function c(M,R){return M=vn(M,R),M.index=0,M.sibling=null,M}function f(M,R,D){return M.index=D,e?(D=M.alternate,D!==null?(D=D.index,D<R?(M.flags|=2,R):D):(M.flags|=2,R)):(M.flags|=1048576,R)}function g(M){return e&&M.alternate===null&&(M.flags|=2),M}function b(M,R,D,H){return R===null||R.tag!==6?(R=Vu(D,M.mode,H),R.return=M,R):(R=c(R,D),R.return=M,R)}function x(M,R,D,H){var re=D.type;return re===li?P(M,R,D.props.children,H,D.key):R!==null&&(R.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===an&&yv(re)===R.type)?(H=c(R,D.props),H.ref=ta(M,R,D),H.return=M,H):(H=Hs(D.type,D.key,D.props,null,M.mode,H),H.ref=ta(M,R,D),H.return=M,H)}function N(M,R,D,H){return R===null||R.tag!==4||R.stateNode.containerInfo!==D.containerInfo||R.stateNode.implementation!==D.implementation?(R=Fu(D,M.mode,H),R.return=M,R):(R=c(R,D.children||[]),R.return=M,R)}function P(M,R,D,H,re){return R===null||R.tag!==7?(R=Wn(D,M.mode,H,re),R.return=M,R):(R=c(R,D),R.return=M,R)}function B(M,R,D){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Vu(""+R,M.mode,D),R.return=M,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case hs:return D=Hs(R.type,R.key,R.props,null,M.mode,D),D.ref=ta(M,null,R),D.return=M,D;case oi:return R=Fu(R,M.mode,D),R.return=M,R;case an:var H=R._init;return B(M,H(R._payload),D)}if(la(R)||Xi(R))return R=Wn(R,M.mode,D,null),R.return=M,R;Ss(M,R)}return null}function A(M,R,D,H){var re=R!==null?R.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return re!==null?null:b(M,R,""+D,H);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case hs:return D.key===re?x(M,R,D,H):null;case oi:return D.key===re?N(M,R,D,H):null;case an:return re=D._init,A(M,R,re(D._payload),H)}if(la(D)||Xi(D))return re!==null?null:P(M,R,D,H,null);Ss(M,D)}return null}function W(M,R,D,H,re){if(typeof H=="string"&&H!==""||typeof H=="number")return M=M.get(D)||null,b(R,M,""+H,re);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case hs:return M=M.get(H.key===null?D:H.key)||null,x(R,M,H,re);case oi:return M=M.get(H.key===null?D:H.key)||null,N(R,M,H,re);case an:var J=H._init;return W(M,R,D,J(H._payload),re)}if(la(H)||Xi(H))return M=M.get(D)||null,P(R,M,H,re,null);Ss(R,H)}return null}function G(M,R,D,H){for(var re=null,J=null,se=R,Y=R=0,Ue=null;se!==null&&Y<D.length;Y++){se.index>Y?(Ue=se,se=null):Ue=se.sibling;var Se=A(M,se,D[Y],H);if(Se===null){se===null&&(se=Ue);break}e&&se&&Se.alternate===null&&r(M,se),R=f(Se,R,Y),J===null?re=Se:J.sibling=Se,J=Se,se=Ue}if(Y===D.length)return i(M,se),Je&&Bn(M,Y),re;if(se===null){for(;Y<D.length;Y++)se=B(M,D[Y],H),se!==null&&(R=f(se,R,Y),J===null?re=se:J.sibling=se,J=se);return Je&&Bn(M,Y),re}for(se=s(M,se);Y<D.length;Y++)Ue=W(se,M,Y,D[Y],H),Ue!==null&&(e&&Ue.alternate!==null&&se.delete(Ue.key===null?Y:Ue.key),R=f(Ue,R,Y),J===null?re=Ue:J.sibling=Ue,J=Ue);return e&&se.forEach(function(ut){return r(M,ut)}),Je&&Bn(M,Y),re}function Q(M,R,D,H){var re=Xi(D);if(typeof re!="function")throw Error(K(150));if(D=re.call(D),D==null)throw Error(K(151));for(var J=re=null,se=R,Y=R=0,Ue=null,Se=D.next();se!==null&&!Se.done;Y++,Se=D.next()){se.index>Y?(Ue=se,se=null):Ue=se.sibling;var ut=A(M,se,Se.value,H);if(ut===null){se===null&&(se=Ue);break}e&&se&&ut.alternate===null&&r(M,se),R=f(ut,R,Y),J===null?re=ut:J.sibling=ut,J=ut,se=Ue}if(Se.done)return i(M,se),Je&&Bn(M,Y),re;if(se===null){for(;!Se.done;Y++,Se=D.next())Se=B(M,Se.value,H),Se!==null&&(R=f(Se,R,Y),J===null?re=Se:J.sibling=Se,J=Se);return Je&&Bn(M,Y),re}for(se=s(M,se);!Se.done;Y++,Se=D.next())Se=W(se,M,Y,Se.value,H),Se!==null&&(e&&Se.alternate!==null&&se.delete(Se.key===null?Y:Se.key),R=f(Se,R,Y),J===null?re=Se:J.sibling=Se,J=Se);return e&&se.forEach(function(he){return r(M,he)}),Je&&Bn(M,Y),re}function $e(M,R,D,H){if(typeof D=="object"&&D!==null&&D.type===li&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case hs:e:{for(var re=D.key,J=R;J!==null;){if(J.key===re){if(re=D.type,re===li){if(J.tag===7){i(M,J.sibling),R=c(J,D.props.children),R.return=M,M=R;break e}}else if(J.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===an&&yv(re)===J.type){i(M,J.sibling),R=c(J,D.props),R.ref=ta(M,J,D),R.return=M,M=R;break e}i(M,J);break}else r(M,J);J=J.sibling}D.type===li?(R=Wn(D.props.children,M.mode,H,D.key),R.return=M,M=R):(H=Hs(D.type,D.key,D.props,null,M.mode,H),H.ref=ta(M,R,D),H.return=M,M=H)}return g(M);case oi:e:{for(J=D.key;R!==null;){if(R.key===J)if(R.tag===4&&R.stateNode.containerInfo===D.containerInfo&&R.stateNode.implementation===D.implementation){i(M,R.sibling),R=c(R,D.children||[]),R.return=M,M=R;break e}else{i(M,R);break}else r(M,R);R=R.sibling}R=Fu(D,M.mode,H),R.return=M,M=R}return g(M);case an:return J=D._init,$e(M,R,J(D._payload),H)}if(la(D))return G(M,R,D,H);if(Xi(D))return Q(M,R,D,H);Ss(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,R!==null&&R.tag===6?(i(M,R.sibling),R=c(R,D),R.return=M,M=R):(i(M,R),R=Vu(D,M.mode,H),R.return=M,M=R),g(M)):i(M,R)}return $e}var zi=l1(!0),u1=l1(!1),lo=bn(null),uo=null,gi=null,fc=null;function hc(){fc=gi=uo=null}function mc(e){var r=lo.current;Xe(lo),e._currentValue=r}function kd(e,r,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),e===i)break;e=e.return}}function bi(e,r){uo=e,fc=gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Ut=!0),e.firstContext=null)}function or(e){var r=e._currentValue;if(fc!==e)if(e={context:e,memoizedValue:r,next:null},gi===null){if(uo===null)throw Error(K(308));gi=e,uo.dependencies={lanes:0,firstContext:e}}else gi=gi.next=e;return r}var Un=null;function gc(e){Un===null?Un=[e]:Un.push(e)}function d1(e,r,i,s){var c=r.interleaved;return c===null?(i.next=i,gc(r)):(i.next=c.next,c.next=i),r.interleaved=i,Gr(e,s)}function Gr(e,r){e.lanes|=r;var i=e.alternate;for(i!==null&&(i.lanes|=r),i=e,e=e.return;e!==null;)e.childLanes|=r,i=e.alternate,i!==null&&(i.childLanes|=r),i=e,e=e.return;return i.tag===3?i.stateNode:null}var sn=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function mn(e,r,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Le&2){var c=s.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),s.pending=r,Gr(e,i)}return c=s.interleaved,c===null?(r.next=r,gc(s)):(r.next=c.next,c.next=r),s.interleaved=r,Gr(e,i)}function Us(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var s=r.lanes;s&=e.pendingLanes,i|=s,r.lanes=i,rc(e,i)}}function vv(e,r){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var g={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=g:f=f.next=g,i=i.next}while(i!==null);f===null?c=f=r:f=f.next=r}else c=f=r;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}function co(e,r,i,s){var c=e.updateQueue;sn=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var x=b,N=x.next;x.next=null,g===null?f=N:g.next=N,g=x;var P=e.alternate;P!==null&&(P=P.updateQueue,b=P.lastBaseUpdate,b!==g&&(b===null?P.firstBaseUpdate=N:b.next=N,P.lastBaseUpdate=x))}if(f!==null){var B=c.baseState;g=0,P=N=x=null,b=f;do{var A=b.lane,W=b.eventTime;if((s&A)===A){P!==null&&(P=P.next={eventTime:W,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var G=e,Q=b;switch(A=r,W=i,Q.tag){case 1:if(G=Q.payload,typeof G=="function"){B=G.call(W,B,A);break e}B=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Q.payload,A=typeof G=="function"?G.call(W,B,A):G,A==null)break e;B=it({},B,A);break e;case 2:sn=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,A=c.effects,A===null?c.effects=[b]:A.push(b))}else W={eventTime:W,lane:A,tag:b.tag,payload:b.payload,callback:b.callback,next:null},P===null?(N=P=W,x=B):P=P.next=W,g|=A;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;A=b,b=A.next,A.next=null,c.lastBaseUpdate=A,c.shared.pending=null}}while(1);if(P===null&&(x=B),c.baseState=x,c.firstBaseUpdate=N,c.lastBaseUpdate=P,r=c.shared.interleaved,r!==null){c=r;do g|=c.lane,c=c.next;while(c!==r)}else f===null&&(c.shared.lanes=0);Qn|=g,e.lanes=g,e.memoizedState=B}}function wv(e,r,i){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var s=e[r],c=s.callback;if(c!==null){if(s.callback=null,s=i,typeof c!="function")throw Error(K(191,c));c.call(s)}}}var Wa={},Rr=bn(Wa),Oa=bn(Wa),Aa=bn(Wa);function Vn(e){if(e===Wa)throw Error(K(174));return e}function vc(e,r){switch(He(Aa,r),He(Oa,e),He(Rr,Wa),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:id(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=id(r,e)}Xe(Rr),He(Rr,r)}function Ci(){Xe(Rr),Xe(Oa),Xe(Aa)}function p1(e){Vn(Aa.current);var r=Vn(Rr.current),i=id(r,e.type);r!==i&&(He(Oa,e),He(Rr,i))}function wc(e){Oa.current===e&&(Xe(Rr),Xe(Oa))}var rt=bn(0);function po(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Pu=[];function _c(){for(var e=0;e<Pu.length;e++)Pu[e]._workInProgressVersionPrimary=null;Pu.length=0}var Vs=Kr.ReactCurrentDispatcher,Du=Kr.ReactCurrentBatchConfig,Kn=0,nt=null,ft=null,wt=null,fo=!1,va=!1,Ma=0,D$=0;function It(){throw Error(K(321))}function xc(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!Er(e[i],r[i]))return!1;return!0}function $c(e,r,i,s,c,f){if(Kn=f,nt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Vs.current=e===null||e.memoizedState===null?U$:V$,e=i(s,c),va){f=0;do{if(va=!1,Ma=0,25<=f)throw Error(K(301));f+=1,wt=ft=null,r.updateQueue=null,Vs.current=F$,e=i(s,c)}while(va)}if(Vs.current=ho,r=ft!==null&&ft.next!==null,Kn=0,wt=ft=nt=null,fo=!1,r)throw Error(K(300));return e}function bc(){var e=Ma!==0;return Ma=0,e}function zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?nt.memoizedState=wt=e:wt=wt.next=e,wt}function lr(){if(ft===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var r=wt===null?nt.memoizedState:wt.next;if(r!==null)wt=r,ft=e;else{if(e===null)throw Error(K(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?nt.memoizedState=wt=e:wt=wt.next=e}return wt}function Pa(e,r){return typeof r=="function"?r(e):r}function Bu(e){var r=lr(),i=r.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=e;var s=ft,c=s.baseQueue,f=i.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}s.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,s=s.baseState;var b=g=null,x=null,N=f;do{var P=N.lane;if((Kn&P)===P)x!==null&&(x=x.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),s=N.hasEagerState?N.eagerState:e(s,N.action);else{var B={lane:P,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};x===null?(b=x=B,g=s):x=x.next=B,nt.lanes|=P,Qn|=P}N=N.next}while(N!==null&&N!==f);x===null?g=s:x.next=b,Er(s,r.memoizedState)||(Ut=!0),r.memoizedState=s,r.baseState=g,r.baseQueue=x,i.lastRenderedState=s}if(e=i.interleaved,e!==null){c=e;do f=c.lane,nt.lanes|=f,Qn|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function Lu(e){var r=lr(),i=r.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=e;var s=i.dispatch,c=i.pending,f=r.memoizedState;if(c!==null){i.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Er(f,r.memoizedState)||(Ut=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),i.lastRenderedState=f}return[f,s]}function f1(){}function h1(e,r){var i=nt,s=lr(),c=r(),f=!Er(s.memoizedState,c);if(f&&(s.memoizedState=c,Ut=!0),s=s.queue,kc(y1.bind(null,i,s,e),[e]),s.getSnapshot!==r||f||wt!==null&&wt.memoizedState.tag&1){if(i.flags|=2048,Da(9,g1.bind(null,i,s,c,r),void 0,null),_t===null)throw Error(K(349));Kn&30||m1(i,r,c)}return c}function m1(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=nt.updateQueue,r===null?(r={lastEffect:null,stores:null},nt.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function g1(e,r,i,s){r.value=i,r.getSnapshot=s,v1(r)&&w1(e)}function y1(e,r,i){return i(function(){v1(r)&&w1(e)})}function v1(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!Er(e,i)}catch{return!0}}function w1(e){var r=Gr(e,1);r!==null&&Sr(r,e,1,-1)}function _v(e){var r=zr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},r.queue=e,e=e.dispatch=j$.bind(null,nt,e),[r.memoizedState,e]}function Da(e,r,i,s){return e={tag:e,create:r,destroy:i,deps:s,next:null},r=nt.updateQueue,r===null?(r={lastEffect:null,stores:null},nt.updateQueue=r,r.lastEffect=e.next=e):(i=r.lastEffect,i===null?r.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,r.lastEffect=e)),e}function _1(){return lr().memoizedState}function Fs(e,r,i,s){var c=zr();nt.flags|=e,c.memoizedState=Da(1|r,i,void 0,s===void 0?null:s)}function Io(e,r,i,s){var c=lr();s=s===void 0?null:s;var f=void 0;if(ft!==null){var g=ft.memoizedState;if(f=g.destroy,s!==null&&xc(s,g.deps)){c.memoizedState=Da(r,i,f,s);return}}nt.flags|=e,c.memoizedState=Da(1|r,i,f,s)}function xv(e,r){return Fs(8390656,8,e,r)}function kc(e,r){return Io(2048,8,e,r)}function x1(e,r){return Io(4,2,e,r)}function $1(e,r){return Io(4,4,e,r)}function b1(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function k1(e,r,i){return i=i!=null?i.concat([e]):null,Io(4,4,b1.bind(null,r,e),i)}function Sc(){}function S1(e,r){var i=lr();r=r===void 0?null:r;var s=i.memoizedState;return s!==null&&r!==null&&xc(r,s[1])?s[0]:(i.memoizedState=[e,r],e)}function E1(e,r){var i=lr();r=r===void 0?null:r;var s=i.memoizedState;return s!==null&&r!==null&&xc(r,s[1])?s[0]:(e=e(),i.memoizedState=[e,r],e)}function T1(e,r,i){return Kn&21?(Er(i,r)||(i=Rw(),nt.lanes|=i,Qn|=i,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=i)}function B$(e,r){var i=We;We=i!==0&&4>i?i:4,e(!0);var s=Du.transition;Du.transition={};try{e(!1),r()}finally{We=i,Du.transition=s}}function I1(){return lr().memoizedState}function L$(e,r,i){var s=yn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},z1(e))C1(r,i);else if(i=d1(e,r,i,s),i!==null){var c=Pt();Sr(i,e,s,c),N1(i,r,s)}}function j$(e,r,i){var s=yn(e),c={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(z1(e))C1(r,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var g=r.lastRenderedState,b=f(g,i);if(c.hasEagerState=!0,c.eagerState=b,Er(b,g)){var x=r.interleaved;x===null?(c.next=c,gc(r)):(c.next=x.next,x.next=c),r.interleaved=c;return}}catch{}finally{}i=d1(e,r,c,s),i!==null&&(c=Pt(),Sr(i,e,s,c),N1(i,r,s))}}function z1(e){var r=e.alternate;return e===nt||r!==null&&r===nt}function C1(e,r){va=fo=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function N1(e,r,i){if(i&4194240){var s=r.lanes;s&=e.pendingLanes,i|=s,r.lanes=i,rc(e,i)}}var ho={readContext:or,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},U$={readContext:or,useCallback:function(e,r){return zr().memoizedState=[e,r===void 0?null:r],e},useContext:or,useEffect:xv,useImperativeHandle:function(e,r,i){return i=i!=null?i.concat([e]):null,Fs(4194308,4,b1.bind(null,r,e),i)},useLayoutEffect:function(e,r){return Fs(4194308,4,e,r)},useInsertionEffect:function(e,r){return Fs(4,2,e,r)},useMemo:function(e,r){var i=zr();return r=r===void 0?null:r,e=e(),i.memoizedState=[e,r],e},useReducer:function(e,r,i){var s=zr();return r=i!==void 0?i(r):r,s.memoizedState=s.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=L$.bind(null,nt,e),[s.memoizedState,e]},useRef:function(e){var r=zr();return e={current:e},r.memoizedState=e},useState:_v,useDebugValue:Sc,useDeferredValue:function(e){return zr().memoizedState=e},useTransition:function(){var e=_v(!1),r=e[0];return e=B$.bind(null,e[1]),zr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,i){var s=nt,c=zr();if(Je){if(i===void 0)throw Error(K(407));i=i()}else{if(i=r(),_t===null)throw Error(K(349));Kn&30||m1(s,r,i)}c.memoizedState=i;var f={value:i,getSnapshot:r};return c.queue=f,xv(y1.bind(null,s,f,e),[e]),s.flags|=2048,Da(9,g1.bind(null,s,f,i,r),void 0,null),i},useId:function(){var e=zr(),r=_t.identifierPrefix;if(Je){var i=Vr,s=Ur;i=(s&~(1<<32-kr(s)-1)).toString(32)+i,r=":"+r+"R"+i,i=Ma++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=D$++,r=":"+r+"r"+i.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},V$={readContext:or,useCallback:S1,useContext:or,useEffect:kc,useImperativeHandle:k1,useInsertionEffect:x1,useLayoutEffect:$1,useMemo:E1,useReducer:Bu,useRef:_1,useState:function(){return Bu(Pa)},useDebugValue:Sc,useDeferredValue:function(e){var r=lr();return T1(r,ft.memoizedState,e)},useTransition:function(){var e=Bu(Pa)[0],r=lr().memoizedState;return[e,r]},useMutableSource:f1,useSyncExternalStore:h1,useId:I1,unstable_isNewReconciler:!1},F$={readContext:or,useCallback:S1,useContext:or,useEffect:kc,useImperativeHandle:k1,useInsertionEffect:x1,useLayoutEffect:$1,useMemo:E1,useReducer:Lu,useRef:_1,useState:function(){return Lu(Pa)},useDebugValue:Sc,useDeferredValue:function(e){var r=lr();return ft===null?r.memoizedState=e:T1(r,ft.memoizedState,e)},useTransition:function(){var e=Lu(Pa)[0],r=lr().memoizedState;return[e,r]},useMutableSource:f1,useSyncExternalStore:h1,useId:I1,unstable_isNewReconciler:!1};function xr(e,r){if(e&&e.defaultProps){r=it({},r),e=e.defaultProps;for(var i in e)r[i]===void 0&&(r[i]=e[i]);return r}return r}function Sd(e,r,i,s){r=e.memoizedState,i=i(s,r),i=i==null?r:it({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var zo={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,r,i){e=e._reactInternals;var s=Pt(),c=yn(e),f=Fr(s,c);f.payload=r,i!=null&&(f.callback=i),r=mn(e,f,c),r!==null&&(Sr(r,e,c,s),Us(r,e,c))},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var s=Pt(),c=yn(e),f=Fr(s,c);f.tag=1,f.payload=r,i!=null&&(f.callback=i),r=mn(e,f,c),r!==null&&(Sr(r,e,c,s),Us(r,e,c))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=Pt(),s=yn(e),c=Fr(i,s);c.tag=2,r!=null&&(c.callback=r),r=mn(e,c,s),r!==null&&(Sr(r,e,s,i),Us(r,e,s))}};function $v(e,r,i,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):r.prototype&&r.prototype.isPureReactComponent?!za(i,s)||!za(c,f):!0}function R1(e,r,i){var s=!1,c=xn,f=r.contextType;return typeof f=="object"&&f!==null?f=or(f):(c=Ft(r)?Gn:Nt.current,s=r.contextTypes,f=(s=s!=null)?Ti(e,c):xn),r=new r(i,f),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=zo,e.stateNode=r,r._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),r}function bv(e,r,i,s){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,s),r.state!==e&&zo.enqueueReplaceState(r,r.state,null)}function Ed(e,r,i,s){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},yc(e);var f=r.contextType;typeof f=="object"&&f!==null?c.context=or(f):(f=Ft(r)?Gn:Nt.current,c.context=Ti(e,f)),c.state=e.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Sd(e,r,f,i),c.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&zo.enqueueReplaceState(c,c.state,null),co(e,i,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,r){try{var i="",s=r;do i+=y2(s),s=s.return;while(s);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:r,stack:c,digest:null}}function ju(e,r,i){return{value:e,source:null,stack:i??null,digest:r??null}}function Td(e,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var q$=typeof WeakMap=="function"?WeakMap:Map;function O1(e,r,i){i=Fr(-1,i),i.tag=3,i.payload={element:null};var s=r.value;return i.callback=function(){go||(go=!0,Dd=s),Td(e,r)},i}function A1(e,r,i){i=Fr(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=r.value;i.payload=function(){return s(c)},i.callback=function(){Td(e,r)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){Td(e,r),typeof s!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),i}function kv(e,r,i){var s=e.pingCache;if(s===null){s=e.pingCache=new q$;var c=new Set;s.set(r,c)}else c=s.get(r),c===void 0&&(c=new Set,s.set(r,c));c.has(i)||(c.add(i),e=ib.bind(null,e,r,i),r.then(e,e))}function Sv(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Ev(e,r,i,s,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===r?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=Fr(-1,1),r.tag=2,mn(i,r,1))),i.lanes|=1),e)}var W$=Kr.ReactCurrentOwner,Ut=!1;function Mt(e,r,i,s){r.child=e===null?u1(r,null,i,s):zi(r,e.child,i,s)}function Tv(e,r,i,s,c){i=i.render;var f=r.ref;return bi(r,c),s=$c(e,r,i,s,f,c),i=bc(),e!==null&&!Ut?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~c,Hr(e,r,c)):(Je&&i&&dc(r),r.flags|=1,Mt(e,r,s,c),r.child)}function Iv(e,r,i,s,c){if(e===null){var f=i.type;return typeof f=="function"&&!Oc(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=f,M1(e,r,f,s,c)):(e=Hs(i.type,null,s,r,r.mode,c),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!(e.lanes&c)){var g=f.memoizedProps;if(i=i.compare,i=i!==null?i:za,i(g,s)&&e.ref===r.ref)return Hr(e,r,c)}return r.flags|=1,e=vn(f,s),e.ref=r.ref,e.return=r,r.child=e}function M1(e,r,i,s,c){if(e!==null){var f=e.memoizedProps;if(za(f,s)&&e.ref===r.ref)if(Ut=!1,r.pendingProps=s=f,(e.lanes&c)!==0)e.flags&131072&&(Ut=!0);else return r.lanes=e.lanes,Hr(e,r,c)}return Id(e,r,i,s,c)}function P1(e,r,i){var s=r.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(vi,Qt),Qt|=i;else{if(!(i&1073741824))return e=f!==null?f.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,He(vi,Qt),Qt|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=f!==null?f.baseLanes:i,He(vi,Qt),Qt|=s}else f!==null?(s=f.baseLanes|i,r.memoizedState=null):s=i,He(vi,Qt),Qt|=s;return Mt(e,r,c,i),r.child}function D1(e,r){var i=r.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function Id(e,r,i,s,c){var f=Ft(i)?Gn:Nt.current;return f=Ti(r,f),bi(r,c),i=$c(e,r,i,s,f,c),s=bc(),e!==null&&!Ut?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~c,Hr(e,r,c)):(Je&&s&&dc(r),r.flags|=1,Mt(e,r,i,c),r.child)}function zv(e,r,i,s,c){if(Ft(i)){var f=!0;ao(r)}else f=!1;if(bi(r,c),r.stateNode===null)qs(e,r),R1(r,i,s),Ed(r,i,s,c),s=!0;else if(e===null){var g=r.stateNode,b=r.memoizedProps;g.props=b;var x=g.context,N=i.contextType;typeof N=="object"&&N!==null?N=or(N):(N=Ft(i)?Gn:Nt.current,N=Ti(r,N));var P=i.getDerivedStateFromProps,B=typeof P=="function"||typeof g.getSnapshotBeforeUpdate=="function";B||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==s||x!==N)&&bv(r,g,s,N),sn=!1;var A=r.memoizedState;g.state=A,co(r,s,g,c),x=r.memoizedState,b!==s||A!==x||Vt.current||sn?(typeof P=="function"&&(Sd(r,i,P,s),x=r.memoizedState),(b=sn||$v(r,i,b,s,A,x,N))?(B||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=x),g.props=s,g.state=x,g.context=N,s=b):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{g=r.stateNode,c1(e,r),b=r.memoizedProps,N=r.type===r.elementType?b:xr(r.type,b),g.props=N,B=r.pendingProps,A=g.context,x=i.contextType,typeof x=="object"&&x!==null?x=or(x):(x=Ft(i)?Gn:Nt.current,x=Ti(r,x));var W=i.getDerivedStateFromProps;(P=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==B||A!==x)&&bv(r,g,s,x),sn=!1,A=r.memoizedState,g.state=A,co(r,s,g,c);var G=r.memoizedState;b!==B||A!==G||Vt.current||sn?(typeof W=="function"&&(Sd(r,i,W,s),G=r.memoizedState),(N=sn||$v(r,i,N,s,A,G,x)||!1)?(P||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(s,G,x),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(s,G,x)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&A===e.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&A===e.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=G),g.props=s,g.state=G,g.context=x,s=N):(typeof g.componentDidUpdate!="function"||b===e.memoizedProps&&A===e.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&A===e.memoizedState||(r.flags|=1024),s=!1)}return zd(e,r,i,s,f,c)}function zd(e,r,i,s,c,f){D1(e,r);var g=(r.flags&128)!==0;if(!s&&!g)return c&&hv(r,i,!1),Hr(e,r,f);s=r.stateNode,W$.current=r;var b=g&&typeof i.getDerivedStateFromError!="function"?null:s.render();return r.flags|=1,e!==null&&g?(r.child=zi(r,e.child,null,f),r.child=zi(r,null,b,f)):Mt(e,r,b,f),r.memoizedState=s.state,c&&hv(r,i,!0),r.child}function B1(e){var r=e.stateNode;r.pendingContext?fv(e,r.pendingContext,r.pendingContext!==r.context):r.context&&fv(e,r.context,!1),vc(e,r.containerInfo)}function Cv(e,r,i,s,c){return Ii(),pc(c),r.flags|=256,Mt(e,r,i,s),r.child}var Cd={dehydrated:null,treeContext:null,retryLane:0};function Nd(e){return{baseLanes:e,cachePool:null,transitions:null}}function L1(e,r,i){var s=r.pendingProps,c=rt.current,f=!1,g=(r.flags&128)!==0,b;if((b=g)||(b=e!==null&&e.memoizedState===null?!1:(c&2)!==0),b?(f=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),He(rt,c&1),e===null)return bd(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(g=s.children,e=s.fallback,f?(s=r.mode,f=r.child,g={mode:"hidden",children:g},!(s&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=Ro(g,s,0,null),e=Wn(e,s,i,null),f.return=r,e.return=r,f.sibling=e,r.child=f,r.child.memoizedState=Nd(i),r.memoizedState=Cd,e):Ec(r,g));if(c=e.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return G$(e,r,g,s,b,c,i);if(f){f=s.fallback,g=r.mode,c=e.child,b=c.sibling;var x={mode:"hidden",children:s.children};return!(g&1)&&r.child!==c?(s=r.child,s.childLanes=0,s.pendingProps=x,r.deletions=null):(s=vn(c,x),s.subtreeFlags=c.subtreeFlags&14680064),b!==null?f=vn(b,f):(f=Wn(f,g,i,null),f.flags|=2),f.return=r,s.return=r,s.sibling=f,r.child=s,s=f,f=r.child,g=e.child.memoizedState,g=g===null?Nd(i):{baseLanes:g.baseLanes|i,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=e.childLanes&~i,r.memoizedState=Cd,s}return f=e.child,e=f.sibling,s=vn(f,{mode:"visible",children:s.children}),!(r.mode&1)&&(s.lanes=i),s.return=r,s.sibling=null,e!==null&&(i=r.deletions,i===null?(r.deletions=[e],r.flags|=16):i.push(e)),r.child=s,r.memoizedState=null,s}function Ec(e,r){return r=Ro({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Es(e,r,i,s){return s!==null&&pc(s),zi(r,e.child,null,i),e=Ec(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function G$(e,r,i,s,c,f,g){if(i)return r.flags&256?(r.flags&=-257,s=ju(Error(K(422))),Es(e,r,g,s)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(f=s.fallback,c=r.mode,s=Ro({mode:"visible",children:s.children},c,0,null),f=Wn(f,c,g,null),f.flags|=2,s.return=r,f.return=r,s.sibling=f,r.child=s,r.mode&1&&zi(r,e.child,null,g),r.child.memoizedState=Nd(g),r.memoizedState=Cd,f);if(!(r.mode&1))return Es(e,r,g,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var b=s.dgst;return s=b,f=Error(K(419)),s=ju(f,s,void 0),Es(e,r,g,s)}if(b=(g&e.childLanes)!==0,Ut||b){if(s=_t,s!==null){switch(g&-g){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(s.suspendedLanes|g)?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,Gr(e,c),Sr(s,e,c,-1))}return Rc(),s=ju(Error(K(421))),Es(e,r,g,s)}return c.data==="$?"?(r.flags|=128,r.child=e.child,r=ab.bind(null,e),c._reactRetry=r,null):(e=f.treeContext,Xt=hn(c.nextSibling),Zt=r,Je=!0,br=null,e!==null&&(nr[ir++]=Ur,nr[ir++]=Vr,nr[ir++]=Hn,Ur=e.id,Vr=e.overflow,Hn=r),r=Ec(r,s.children),r.flags|=4096,r)}function Nv(e,r,i){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r),kd(e.return,r,i)}function Uu(e,r,i,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=i,f.tailMode=c)}function j1(e,r,i){var s=r.pendingProps,c=s.revealOrder,f=s.tail;if(Mt(e,r,s.children,i),s=rt.current,s&2)s=s&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,i,r);else if(e.tag===19)Nv(e,i,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(He(rt,s),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(i=r.child,c=null;i!==null;)e=i.alternate,e!==null&&po(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=r.child,r.child=null):(c=i.sibling,i.sibling=null),Uu(r,!1,c,i,f);break;case"backwards":for(i=null,c=r.child,r.child=null;c!==null;){if(e=c.alternate,e!==null&&po(e)===null){r.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Uu(r,!0,i,null,f);break;case"together":Uu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function qs(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Hr(e,r,i){if(e!==null&&(r.dependencies=e.dependencies),Qn|=r.lanes,!(i&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(K(153));if(r.child!==null){for(e=r.child,i=vn(e,e.pendingProps),r.child=i,i.return=r;e.sibling!==null;)e=e.sibling,i=i.sibling=vn(e,e.pendingProps),i.return=r;i.sibling=null}return r.child}function H$(e,r,i){switch(r.tag){case 3:B1(r),Ii();break;case 5:p1(r);break;case 1:Ft(r.type)&&ao(r);break;case 4:vc(r,r.stateNode.containerInfo);break;case 10:var s=r.type._context,c=r.memoizedProps.value;He(lo,s._currentValue),s._currentValue=c;break;case 13:if(s=r.memoizedState,s!==null)return s.dehydrated!==null?(He(rt,rt.current&1),r.flags|=128,null):i&r.child.childLanes?L1(e,r,i):(He(rt,rt.current&1),e=Hr(e,r,i),e!==null?e.sibling:null);He(rt,rt.current&1);break;case 19:if(s=(i&r.childLanes)!==0,e.flags&128){if(s)return j1(e,r,i);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),He(rt,rt.current),s)break;return null;case 22:case 23:return r.lanes=0,P1(e,r,i)}return Hr(e,r,i)}var U1,Rd,V1,F1;U1=function(e,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Rd=function(){};V1=function(e,r,i,s){var c=e.memoizedProps;if(c!==s){e=r.stateNode,Vn(Rr.current);var f=null;switch(i){case"input":c=ed(e,c),s=ed(e,s),f=[];break;case"select":c=it({},c,{value:void 0}),s=it({},s,{value:void 0}),f=[];break;case"textarea":c=nd(e,c),s=nd(e,s),f=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=no)}ad(i,s);var g;i=null;for(N in c)if(!s.hasOwnProperty(N)&&c.hasOwnProperty(N)&&c[N]!=null)if(N==="style"){var b=c[N];for(g in b)b.hasOwnProperty(g)&&(i||(i={}),i[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&($a.hasOwnProperty(N)?f||(f=[]):(f=f||[]).push(N,null));for(N in s){var x=s[N];if(b=c!=null?c[N]:void 0,s.hasOwnProperty(N)&&x!==b&&(x!=null||b!=null))if(N==="style")if(b){for(g in b)!b.hasOwnProperty(g)||x&&x.hasOwnProperty(g)||(i||(i={}),i[g]="");for(g in x)x.hasOwnProperty(g)&&b[g]!==x[g]&&(i||(i={}),i[g]=x[g])}else i||(f||(f=[]),f.push(N,i)),i=x;else N==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,b=b?b.__html:void 0,x!=null&&b!==x&&(f=f||[]).push(N,x)):N==="children"?typeof x!="string"&&typeof x!="number"||(f=f||[]).push(N,""+x):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&($a.hasOwnProperty(N)?(x!=null&&N==="onScroll"&&Qe("scroll",e),f||b===x||(f=[])):(f=f||[]).push(N,x))}i&&(f=f||[]).push("style",i);var N=f;(r.updateQueue=N)&&(r.flags|=4)}};F1=function(e,r,i,s){i!==s&&(r.flags|=4)};function ra(e,r){if(!Je)switch(e.tailMode){case"hidden":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function zt(e){var r=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(r)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=i,r}function K$(e,r,i){var s=r.pendingProps;switch(cc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(r),null;case 1:return Ft(r.type)&&io(),zt(r),null;case 3:return s=r.stateNode,Ci(),Xe(Vt),Xe(Nt),_c(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ks(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,br!==null&&(jd(br),br=null))),Rd(e,r),zt(r),null;case 5:wc(r);var c=Vn(Aa.current);if(i=r.type,e!==null&&r.stateNode!=null)V1(e,r,i,s,c),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!s){if(r.stateNode===null)throw Error(K(166));return zt(r),null}if(e=Vn(Rr.current),ks(r)){s=r.stateNode,i=r.type;var f=r.memoizedProps;switch(s[Cr]=r,s[Ra]=f,e=(r.mode&1)!==0,i){case"dialog":Qe("cancel",s),Qe("close",s);break;case"iframe":case"object":case"embed":Qe("load",s);break;case"video":case"audio":for(c=0;c<da.length;c++)Qe(da[c],s);break;case"source":Qe("error",s);break;case"img":case"image":case"link":Qe("error",s),Qe("load",s);break;case"details":Qe("toggle",s);break;case"input":jy(s,f),Qe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",s);break;case"textarea":Vy(s,f),Qe("invalid",s)}ad(i,f),c=null;for(var g in f)if(f.hasOwnProperty(g)){var b=f[g];g==="children"?typeof b=="string"?s.textContent!==b&&(f.suppressHydrationWarning!==!0&&bs(s.textContent,b,e),c=["children",b]):typeof b=="number"&&s.textContent!==""+b&&(f.suppressHydrationWarning!==!0&&bs(s.textContent,b,e),c=["children",""+b]):$a.hasOwnProperty(g)&&b!=null&&g==="onScroll"&&Qe("scroll",s)}switch(i){case"input":ms(s),Uy(s,f,!0);break;case"textarea":ms(s),Fy(s);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(s.onclick=no)}s=c,r.updateQueue=s,s!==null&&(r.flags|=4)}else{g=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yw(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=g.createElement(i,{is:s.is}):(e=g.createElement(i),i==="select"&&(g=e,s.multiple?g.multiple=!0:s.size&&(g.size=s.size))):e=g.createElementNS(e,i),e[Cr]=r,e[Ra]=s,U1(e,r,!1,!1),r.stateNode=e;e:{switch(g=sd(i,s),i){case"dialog":Qe("cancel",e),Qe("close",e),c=s;break;case"iframe":case"object":case"embed":Qe("load",e),c=s;break;case"video":case"audio":for(c=0;c<da.length;c++)Qe(da[c],e);c=s;break;case"source":Qe("error",e),c=s;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),c=s;break;case"details":Qe("toggle",e),c=s;break;case"input":jy(e,s),c=ed(e,s),Qe("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=it({},s,{value:void 0}),Qe("invalid",e);break;case"textarea":Vy(e,s),c=nd(e,s),Qe("invalid",e);break;default:c=s}ad(i,c),b=c;for(f in b)if(b.hasOwnProperty(f)){var x=b[f];f==="style"?_w(e,x):f==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&vw(e,x)):f==="children"?typeof x=="string"?(i!=="textarea"||x!=="")&&ba(e,x):typeof x=="number"&&ba(e,""+x):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($a.hasOwnProperty(f)?x!=null&&f==="onScroll"&&Qe("scroll",e):x!=null&&Xd(e,f,x,g))}switch(i){case"input":ms(e),Uy(e,s,!1);break;case"textarea":ms(e),Fy(e);break;case"option":s.value!=null&&e.setAttribute("value",""+_n(s.value));break;case"select":e.multiple=!!s.multiple,f=s.value,f!=null?wi(e,!!s.multiple,f,!1):s.defaultValue!=null&&wi(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=no)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return zt(r),null;case 6:if(e&&r.stateNode!=null)F1(e,r,e.memoizedProps,s);else{if(typeof s!="string"&&r.stateNode===null)throw Error(K(166));if(i=Vn(Aa.current),Vn(Rr.current),ks(r)){if(s=r.stateNode,i=r.memoizedProps,s[Cr]=r,(f=s.nodeValue!==i)&&(e=Zt,e!==null))switch(e.tag){case 3:bs(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bs(s.nodeValue,i,(e.mode&1)!==0)}f&&(r.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Cr]=r,r.stateNode=s}return zt(r),null;case 13:if(Xe(rt),s=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&Xt!==null&&r.mode&1&&!(r.flags&128))o1(),Ii(),r.flags|=98560,f=!1;else if(f=ks(r),s!==null&&s.dehydrated!==null){if(e===null){if(!f)throw Error(K(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(K(317));f[Cr]=r}else Ii(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;zt(r),f=!1}else br!==null&&(jd(br),br=null),f=!0;if(!f)return r.flags&65536?r:null}return r.flags&128?(r.lanes=i,r):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(r.child.flags|=8192,r.mode&1&&(e===null||rt.current&1?ht===0&&(ht=3):Rc())),r.updateQueue!==null&&(r.flags|=4),zt(r),null);case 4:return Ci(),Rd(e,r),e===null&&Ca(r.stateNode.containerInfo),zt(r),null;case 10:return mc(r.type._context),zt(r),null;case 17:return Ft(r.type)&&io(),zt(r),null;case 19:if(Xe(rt),f=r.memoizedState,f===null)return zt(r),null;if(s=(r.flags&128)!==0,g=f.rendering,g===null)if(s)ra(f,!1);else{if(ht!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(g=po(e),g!==null){for(r.flags|=128,ra(f,!1),s=g.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),r.subtreeFlags=0,s=i,i=r.child;i!==null;)f=i,e=s,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,e=g.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return He(rt,rt.current&1|2),r.child}e=e.sibling}f.tail!==null&&lt()>Ri&&(r.flags|=128,s=!0,ra(f,!1),r.lanes=4194304)}else{if(!s)if(e=po(g),e!==null){if(r.flags|=128,s=!0,i=e.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),ra(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Je)return zt(r),null}else 2*lt()-f.renderingStartTime>Ri&&i!==1073741824&&(r.flags|=128,s=!0,ra(f,!1),r.lanes=4194304);f.isBackwards?(g.sibling=r.child,r.child=g):(i=f.last,i!==null?i.sibling=g:r.child=g,f.last=g)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=lt(),r.sibling=null,i=rt.current,He(rt,s?i&1|2:i&1),r):(zt(r),null);case 22:case 23:return Nc(),s=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(r.flags|=8192),s&&r.mode&1?Qt&1073741824&&(zt(r),r.subtreeFlags&6&&(r.flags|=8192)):zt(r),null;case 24:return null;case 25:return null}throw Error(K(156,r.tag))}function Q$(e,r){switch(cc(r),r.tag){case 1:return Ft(r.type)&&io(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Ci(),Xe(Vt),Xe(Nt),_c(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return wc(r),null;case 13:if(Xe(rt),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(K(340));Ii()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Xe(rt),null;case 4:return Ci(),null;case 10:return mc(r.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Ts=!1,Ct=!1,X$=typeof WeakSet=="function"?WeakSet:Set,oe=null;function yi(e,r){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){at(e,r,s)}else i.current=null}function Od(e,r,i){try{i()}catch(s){at(e,r,s)}}var Rv=!1;function Z$(e,r){if(gd=eo,e=Kw(),uc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var g=0,b=-1,x=-1,N=0,P=0,B=e,A=null;t:for(;;){for(var W;B!==i||c!==0&&B.nodeType!==3||(b=g+c),B!==f||s!==0&&B.nodeType!==3||(x=g+s),B.nodeType===3&&(g+=B.nodeValue.length),(W=B.firstChild)!==null;)A=B,B=W;for(;;){if(B===e)break t;if(A===i&&++N===c&&(b=g),A===f&&++P===s&&(x=g),(W=B.nextSibling)!==null)break;B=A,A=B.parentNode}B=W}i=b===-1||x===-1?null:{start:b,end:x}}else i=null}i=i||{start:0,end:0}}else i=null;for(yd={focusedElem:e,selectionRange:i},eo=!1,oe=r;oe!==null;)if(r=oe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,oe=e;else for(;oe!==null;){r=oe;try{var G=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Q=G.memoizedProps,$e=G.memoizedState,M=r.stateNode,R=M.getSnapshotBeforeUpdate(r.elementType===r.type?Q:xr(r.type,Q),$e);M.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var D=r.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(H){at(r,r.return,H)}if(e=r.sibling,e!==null){e.return=r.return,oe=e;break}oe=r.return}return G=Rv,Rv=!1,G}function wa(e,r,i){var s=r.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&Od(r,i,f)}c=c.next}while(c!==s)}}function Co(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==r)}}function Ad(e){var r=e.ref;if(r!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof r=="function"?r(e):r.current=e}}function q1(e){var r=e.alternate;r!==null&&(e.alternate=null,q1(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Cr],delete r[Ra],delete r[_d],delete r[O$],delete r[A$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function W1(e){return e.tag===5||e.tag===3||e.tag===4}function Ov(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,r,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(e,r):i.insertBefore(e,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(e,i)):(r=i,r.appendChild(e)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=no));else if(s!==4&&(e=e.child,e!==null))for(Md(e,r,i),e=e.sibling;e!==null;)Md(e,r,i),e=e.sibling}function Pd(e,r,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?i.insertBefore(e,r):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Pd(e,r,i),e=e.sibling;e!==null;)Pd(e,r,i),e=e.sibling}var bt=null,$r=!1;function rn(e,r,i){for(i=i.child;i!==null;)G1(e,r,i),i=i.sibling}function G1(e,r,i){if(Nr&&typeof Nr.onCommitFiberUnmount=="function")try{Nr.onCommitFiberUnmount($o,i)}catch{}switch(i.tag){case 5:Ct||yi(i,r);case 6:var s=bt,c=$r;bt=null,rn(e,r,i),bt=s,$r=c,bt!==null&&($r?(e=bt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):bt.removeChild(i.stateNode));break;case 18:bt!==null&&($r?(e=bt,i=i.stateNode,e.nodeType===8?Au(e.parentNode,i):e.nodeType===1&&Au(e,i),Ta(e)):Au(bt,i.stateNode));break;case 4:s=bt,c=$r,bt=i.stateNode.containerInfo,$r=!0,rn(e,r,i),bt=s,$r=c;break;case 0:case 11:case 14:case 15:if(!Ct&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var f=c,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&Od(i,r,g),c=c.next}while(c!==s)}rn(e,r,i);break;case 1:if(!Ct&&(yi(i,r),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(b){at(i,r,b)}rn(e,r,i);break;case 21:rn(e,r,i);break;case 22:i.mode&1?(Ct=(s=Ct)||i.memoizedState!==null,rn(e,r,i),Ct=s):rn(e,r,i);break;default:rn(e,r,i)}}function Av(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new X$),r.forEach(function(s){var c=sb.bind(null,e,s);i.has(s)||(i.add(s),s.then(c,c))})}}function wr(e,r){var i=r.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];try{var f=e,g=r,b=g;e:for(;b!==null;){switch(b.tag){case 5:bt=b.stateNode,$r=!1;break e;case 3:bt=b.stateNode.containerInfo,$r=!0;break e;case 4:bt=b.stateNode.containerInfo,$r=!0;break e}b=b.return}if(bt===null)throw Error(K(160));G1(f,g,c),bt=null,$r=!1;var x=c.alternate;x!==null&&(x.return=null),c.return=null}catch(N){at(c,r,N)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)H1(r,e),r=r.sibling}function H1(e,r){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wr(r,e),Ir(e),s&4){try{wa(3,e,e.return),Co(3,e)}catch(Q){at(e,e.return,Q)}try{wa(5,e,e.return)}catch(Q){at(e,e.return,Q)}}break;case 1:wr(r,e),Ir(e),s&512&&i!==null&&yi(i,i.return);break;case 5:if(wr(r,e),Ir(e),s&512&&i!==null&&yi(i,i.return),e.flags&32){var c=e.stateNode;try{ba(c,"")}catch(Q){at(e,e.return,Q)}}if(s&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,g=i!==null?i.memoizedProps:f,b=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{b==="input"&&f.type==="radio"&&f.name!=null&&mw(c,f),sd(b,g);var N=sd(b,f);for(g=0;g<x.length;g+=2){var P=x[g],B=x[g+1];P==="style"?_w(c,B):P==="dangerouslySetInnerHTML"?vw(c,B):P==="children"?ba(c,B):Xd(c,P,B,N)}switch(b){case"input":td(c,f);break;case"textarea":gw(c,f);break;case"select":var A=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var W=f.value;W!=null?wi(c,!!f.multiple,W,!1):A!==!!f.multiple&&(f.defaultValue!=null?wi(c,!!f.multiple,f.defaultValue,!0):wi(c,!!f.multiple,f.multiple?[]:"",!1))}c[Ra]=f}catch(Q){at(e,e.return,Q)}}break;case 6:if(wr(r,e),Ir(e),s&4){if(e.stateNode===null)throw Error(K(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(Q){at(e,e.return,Q)}}break;case 3:if(wr(r,e),Ir(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(Q){at(e,e.return,Q)}break;case 4:wr(r,e),Ir(e);break;case 13:wr(r,e),Ir(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(zc=lt())),s&4&&Av(e);break;case 22:if(P=i!==null&&i.memoizedState!==null,e.mode&1?(Ct=(N=Ct)||P,wr(r,e),Ct=N):wr(r,e),Ir(e),s&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!P&&e.mode&1)for(oe=e,P=e.child;P!==null;){for(B=oe=P;oe!==null;){switch(A=oe,W=A.child,A.tag){case 0:case 11:case 14:case 15:wa(4,A,A.return);break;case 1:yi(A,A.return);var G=A.stateNode;if(typeof G.componentWillUnmount=="function"){s=A,i=A.return;try{r=s,G.props=r.memoizedProps,G.state=r.memoizedState,G.componentWillUnmount()}catch(Q){at(s,i,Q)}}break;case 5:yi(A,A.return);break;case 22:if(A.memoizedState!==null){Pv(B);continue}}W!==null?(W.return=A,oe=W):Pv(B)}P=P.sibling}e:for(P=null,B=e;;){if(B.tag===5){if(P===null){P=B;try{c=B.stateNode,N?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(b=B.stateNode,x=B.memoizedProps.style,g=x!=null&&x.hasOwnProperty("display")?x.display:null,b.style.display=ww("display",g))}catch(Q){at(e,e.return,Q)}}}else if(B.tag===6){if(P===null)try{B.stateNode.nodeValue=N?"":B.memoizedProps}catch(Q){at(e,e.return,Q)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;P===B&&(P=null),B=B.return}P===B&&(P=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:wr(r,e),Ir(e),s&4&&Av(e);break;case 21:break;default:wr(r,e),Ir(e)}}function Ir(e){var r=e.flags;if(r&2){try{e:{for(var i=e.return;i!==null;){if(W1(i)){var s=i;break e}i=i.return}throw Error(K(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(ba(c,""),s.flags&=-33);var f=Ov(e);Pd(e,f,c);break;case 3:case 4:var g=s.stateNode.containerInfo,b=Ov(e);Md(e,b,g);break;default:throw Error(K(161))}}catch(x){at(e,e.return,x)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Y$(e,r,i){oe=e,K1(e)}function K1(e,r,i){for(var s=(e.mode&1)!==0;oe!==null;){var c=oe,f=c.child;if(c.tag===22&&s){var g=c.memoizedState!==null||Ts;if(!g){var b=c.alternate,x=b!==null&&b.memoizedState!==null||Ct;b=Ts;var N=Ct;if(Ts=g,(Ct=x)&&!N)for(oe=c;oe!==null;)g=oe,x=g.child,g.tag===22&&g.memoizedState!==null?Dv(c):x!==null?(x.return=g,oe=x):Dv(c);for(;f!==null;)oe=f,K1(f),f=f.sibling;oe=c,Ts=b,Ct=N}Mv(e)}else c.subtreeFlags&8772&&f!==null?(f.return=c,oe=f):Mv(e)}}function Mv(e){for(;oe!==null;){var r=oe;if(r.flags&8772){var i=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ct||Co(5,r);break;case 1:var s=r.stateNode;if(r.flags&4&&!Ct)if(i===null)s.componentDidMount();else{var c=r.elementType===r.type?i.memoizedProps:xr(r.type,i.memoizedProps);s.componentDidUpdate(c,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&wv(r,f,s);break;case 3:var g=r.updateQueue;if(g!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}wv(r,g,i)}break;case 5:var b=r.stateNode;if(i===null&&r.flags&4){i=b;var x=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&i.focus();break;case"img":x.src&&(i.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var N=r.alternate;if(N!==null){var P=N.memoizedState;if(P!==null){var B=P.dehydrated;B!==null&&Ta(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Ct||r.flags&512&&Ad(r)}catch(A){at(r,r.return,A)}}if(r===e){oe=null;break}if(i=r.sibling,i!==null){i.return=r.return,oe=i;break}oe=r.return}}function Pv(e){for(;oe!==null;){var r=oe;if(r===e){oe=null;break}var i=r.sibling;if(i!==null){i.return=r.return,oe=i;break}oe=r.return}}function Dv(e){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{Co(4,r)}catch(x){at(r,i,x)}break;case 1:var s=r.stateNode;if(typeof s.componentDidMount=="function"){var c=r.return;try{s.componentDidMount()}catch(x){at(r,c,x)}}var f=r.return;try{Ad(r)}catch(x){at(r,f,x)}break;case 5:var g=r.return;try{Ad(r)}catch(x){at(r,g,x)}}}catch(x){at(r,r.return,x)}if(r===e){oe=null;break}var b=r.sibling;if(b!==null){b.return=r.return,oe=b;break}oe=r.return}}var J$=Math.ceil,mo=Kr.ReactCurrentDispatcher,Tc=Kr.ReactCurrentOwner,sr=Kr.ReactCurrentBatchConfig,Le=0,_t=null,dt=null,kt=0,Qt=0,vi=bn(0),ht=0,Ba=null,Qn=0,No=0,Ic=0,_a=null,jt=null,zc=0,Ri=1/0,Lr=null,go=!1,Dd=null,gn=null,Is=!1,dn=null,yo=0,xa=0,Bd=null,Ws=-1,Gs=0;function Pt(){return Le&6?lt():Ws!==-1?Ws:Ws=lt()}function yn(e){return e.mode&1?Le&2&&kt!==0?kt&-kt:P$.transition!==null?(Gs===0&&(Gs=Rw()),Gs):(e=We,e!==0||(e=window.event,e=e===void 0?16:Lw(e.type)),e):1}function Sr(e,r,i,s){if(50<xa)throw xa=0,Bd=null,Error(K(185));Va(e,i,s),(!(Le&2)||e!==_t)&&(e===_t&&(!(Le&2)&&(No|=i),ht===4&&ln(e,kt)),qt(e,s),i===1&&Le===0&&!(r.mode&1)&&(Ri=lt()+500,To&&kn()))}function qt(e,r){var i=e.callbackNode;P2(e,r);var s=Js(e,e===_t?kt:0);if(s===0)i!==null&&Gy(i),e.callbackNode=null,e.callbackPriority=0;else if(r=s&-s,e.callbackPriority!==r){if(i!=null&&Gy(i),r===1)e.tag===0?M$(Bv.bind(null,e)):i1(Bv.bind(null,e)),N$(function(){!(Le&6)&&kn()}),i=null;else{switch(Ow(s)){case 1:i=tc;break;case 4:i=Cw;break;case 16:i=Ys;break;case 536870912:i=Nw;break;default:i=Ys}i=r_(i,Q1.bind(null,e))}e.callbackPriority=r,e.callbackNode=i}}function Q1(e,r){if(Ws=-1,Gs=0,Le&6)throw Error(K(327));var i=e.callbackNode;if(ki()&&e.callbackNode!==i)return null;var s=Js(e,e===_t?kt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||r)r=vo(e,s);else{r=s;var c=Le;Le|=2;var f=Z1();(_t!==e||kt!==r)&&(Lr=null,Ri=lt()+500,qn(e,r));do try{rb();break}catch(b){X1(e,b)}while(1);hc(),mo.current=f,Le=c,dt!==null?r=0:(_t=null,kt=0,r=ht)}if(r!==0){if(r===2&&(c=cd(e),c!==0&&(s=c,r=Ld(e,c))),r===1)throw i=Ba,qn(e,0),ln(e,s),qt(e,lt()),i;if(r===6)ln(e,s);else{if(c=e.current.alternate,!(s&30)&&!eb(c)&&(r=vo(e,s),r===2&&(f=cd(e),f!==0&&(s=f,r=Ld(e,f))),r===1))throw i=Ba,qn(e,0),ln(e,s),qt(e,lt()),i;switch(e.finishedWork=c,e.finishedLanes=s,r){case 0:case 1:throw Error(K(345));case 2:Ln(e,jt,Lr);break;case 3:if(ln(e,s),(s&130023424)===s&&(r=zc+500-lt(),10<r)){if(Js(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){Pt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=wd(Ln.bind(null,e,jt,Lr),r);break}Ln(e,jt,Lr);break;case 4:if(ln(e,s),(s&4194240)===s)break;for(r=e.eventTimes,c=-1;0<s;){var g=31-kr(s);f=1<<g,g=r[g],g>c&&(c=g),s&=~f}if(s=c,s=lt()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*J$(s/1960))-s,10<s){e.timeoutHandle=wd(Ln.bind(null,e,jt,Lr),s);break}Ln(e,jt,Lr);break;case 5:Ln(e,jt,Lr);break;default:throw Error(K(329))}}}return qt(e,lt()),e.callbackNode===i?Q1.bind(null,e):null}function Ld(e,r){var i=_a;return e.current.memoizedState.isDehydrated&&(qn(e,r).flags|=256),e=vo(e,r),e!==2&&(r=jt,jt=i,r!==null&&jd(r)),e}function jd(e){jt===null?jt=e:jt.push.apply(jt,e)}function eb(e){for(var r=e;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var c=i[s],f=c.getSnapshot;c=c.value;try{if(!Er(f(),c))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ln(e,r){for(r&=~Ic,r&=~No,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var i=31-kr(r),s=1<<i;e[i]=-1,r&=~s}}function Bv(e){if(Le&6)throw Error(K(327));ki();var r=Js(e,0);if(!(r&1))return qt(e,lt()),null;var i=vo(e,r);if(e.tag!==0&&i===2){var s=cd(e);s!==0&&(r=s,i=Ld(e,s))}if(i===1)throw i=Ba,qn(e,0),ln(e,r),qt(e,lt()),i;if(i===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Ln(e,jt,Lr),qt(e,lt()),null}function Cc(e,r){var i=Le;Le|=1;try{return e(r)}finally{Le=i,Le===0&&(Ri=lt()+500,To&&kn())}}function Xn(e){dn!==null&&dn.tag===0&&!(Le&6)&&ki();var r=Le;Le|=1;var i=sr.transition,s=We;try{if(sr.transition=null,We=1,e)return e()}finally{We=s,sr.transition=i,Le=r,!(Le&6)&&kn()}}function Nc(){Qt=vi.current,Xe(vi)}function qn(e,r){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,C$(i)),dt!==null)for(i=dt.return;i!==null;){var s=i;switch(cc(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&io();break;case 3:Ci(),Xe(Vt),Xe(Nt),_c();break;case 5:wc(s);break;case 4:Ci();break;case 13:Xe(rt);break;case 19:Xe(rt);break;case 10:mc(s.type._context);break;case 22:case 23:Nc()}i=i.return}if(_t=e,dt=e=vn(e.current,null),kt=Qt=r,ht=0,Ba=null,Ic=No=Qn=0,jt=_a=null,Un!==null){for(r=0;r<Un.length;r++)if(i=Un[r],s=i.interleaved,s!==null){i.interleaved=null;var c=s.next,f=i.pending;if(f!==null){var g=f.next;f.next=c,s.next=g}i.pending=s}Un=null}return e}function X1(e,r){do{var i=dt;try{if(hc(),Vs.current=ho,fo){for(var s=nt.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}fo=!1}if(Kn=0,wt=ft=nt=null,va=!1,Ma=0,Tc.current=null,i===null||i.return===null){ht=1,Ba=r,dt=null;break}e:{var f=e,g=i.return,b=i,x=r;if(r=kt,b.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var N=x,P=b,B=P.tag;if(!(P.mode&1)&&(B===0||B===11||B===15)){var A=P.alternate;A?(P.updateQueue=A.updateQueue,P.memoizedState=A.memoizedState,P.lanes=A.lanes):(P.updateQueue=null,P.memoizedState=null)}var W=Sv(g);if(W!==null){W.flags&=-257,Ev(W,g,b,f,r),W.mode&1&&kv(f,N,r),r=W,x=N;var G=r.updateQueue;if(G===null){var Q=new Set;Q.add(x),r.updateQueue=Q}else G.add(x);break e}else{if(!(r&1)){kv(f,N,r),Rc();break e}x=Error(K(426))}}else if(Je&&b.mode&1){var $e=Sv(g);if($e!==null){!($e.flags&65536)&&($e.flags|=256),Ev($e,g,b,f,r),pc(Ni(x,b));break e}}f=x=Ni(x,b),ht!==4&&(ht=2),_a===null?_a=[f]:_a.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var M=O1(f,x,r);vv(f,M);break e;case 1:b=x;var R=f.type,D=f.stateNode;if(!(f.flags&128)&&(typeof R.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(gn===null||!gn.has(D)))){f.flags|=65536,r&=-r,f.lanes|=r;var H=A1(f,b,r);vv(f,H);break e}}f=f.return}while(f!==null)}J1(i)}catch(re){r=re,dt===i&&i!==null&&(dt=i=i.return);continue}break}while(1)}function Z1(){var e=mo.current;return mo.current=ho,e===null?ho:e}function Rc(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||!(Qn&268435455)&&!(No&268435455)||ln(_t,kt)}function vo(e,r){var i=Le;Le|=2;var s=Z1();(_t!==e||kt!==r)&&(Lr=null,qn(e,r));do try{tb();break}catch(c){X1(e,c)}while(1);if(hc(),Le=i,mo.current=s,dt!==null)throw Error(K(261));return _t=null,kt=0,ht}function tb(){for(;dt!==null;)Y1(dt)}function rb(){for(;dt!==null&&!T2();)Y1(dt)}function Y1(e){var r=t_(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,r===null?J1(e):dt=r,Tc.current=null}function J1(e){var r=e;do{var i=r.alternate;if(e=r.return,r.flags&32768){if(i=Q$(i,r),i!==null){i.flags&=32767,dt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ht=6,dt=null;return}}else if(i=K$(i,r,Qt),i!==null){dt=i;return}if(r=r.sibling,r!==null){dt=r;return}dt=r=e}while(r!==null);ht===0&&(ht=5)}function Ln(e,r,i){var s=We,c=sr.transition;try{sr.transition=null,We=1,nb(e,r,i,s)}finally{sr.transition=c,We=s}return null}function nb(e,r,i,s){do ki();while(dn!==null);if(Le&6)throw Error(K(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(D2(e,f),e===_t&&(dt=_t=null,kt=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Is||(Is=!0,r_(Ys,function(){return ki(),null})),f=(i.flags&15990)!==0,i.subtreeFlags&15990||f){f=sr.transition,sr.transition=null;var g=We;We=1;var b=Le;Le|=4,Tc.current=null,Z$(e,i),H1(i,e),b$(yd),eo=!!gd,yd=gd=null,e.current=i,Y$(i),I2(),Le=b,We=g,sr.transition=f}else e.current=i;if(Is&&(Is=!1,dn=e,yo=c),f=e.pendingLanes,f===0&&(gn=null),N2(i.stateNode),qt(e,lt()),r!==null)for(s=e.onRecoverableError,i=0;i<r.length;i++)c=r[i],s(c.value,{componentStack:c.stack,digest:c.digest});if(go)throw go=!1,e=Dd,Dd=null,e;return yo&1&&e.tag!==0&&ki(),f=e.pendingLanes,f&1?e===Bd?xa++:(xa=0,Bd=e):xa=0,kn(),null}function ki(){if(dn!==null){var e=Ow(yo),r=sr.transition,i=We;try{if(sr.transition=null,We=16>e?16:e,dn===null)var s=!1;else{if(e=dn,dn=null,yo=0,Le&6)throw Error(K(331));var c=Le;for(Le|=4,oe=e.current;oe!==null;){var f=oe,g=f.child;if(oe.flags&16){var b=f.deletions;if(b!==null){for(var x=0;x<b.length;x++){var N=b[x];for(oe=N;oe!==null;){var P=oe;switch(P.tag){case 0:case 11:case 15:wa(8,P,f)}var B=P.child;if(B!==null)B.return=P,oe=B;else for(;oe!==null;){P=oe;var A=P.sibling,W=P.return;if(q1(P),P===N){oe=null;break}if(A!==null){A.return=W,oe=A;break}oe=W}}}var G=f.alternate;if(G!==null){var Q=G.child;if(Q!==null){G.child=null;do{var $e=Q.sibling;Q.sibling=null,Q=$e}while(Q!==null)}}oe=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,oe=g;else e:for(;oe!==null;){if(f=oe,f.flags&2048)switch(f.tag){case 0:case 11:case 15:wa(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,oe=M;break e}oe=f.return}}var R=e.current;for(oe=R;oe!==null;){g=oe;var D=g.child;if(g.subtreeFlags&2064&&D!==null)D.return=g,oe=D;else e:for(g=R;oe!==null;){if(b=oe,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:Co(9,b)}}catch(re){at(b,b.return,re)}if(b===g){oe=null;break e}var H=b.sibling;if(H!==null){H.return=b.return,oe=H;break e}oe=b.return}}if(Le=c,kn(),Nr&&typeof Nr.onPostCommitFiberRoot=="function")try{Nr.onPostCommitFiberRoot($o,e)}catch{}s=!0}return s}finally{We=i,sr.transition=r}}return!1}function Lv(e,r,i){r=Ni(i,r),r=O1(e,r,1),e=mn(e,r,1),r=Pt(),e!==null&&(Va(e,1,r),qt(e,r))}function at(e,r,i){if(e.tag===3)Lv(e,e,i);else for(;r!==null;){if(r.tag===3){Lv(r,e,i);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(gn===null||!gn.has(s))){e=Ni(i,e),e=A1(r,e,1),r=mn(r,e,1),e=Pt(),r!==null&&(Va(r,1,e),qt(r,e));break}}r=r.return}}function ib(e,r,i){var s=e.pingCache;s!==null&&s.delete(r),r=Pt(),e.pingedLanes|=e.suspendedLanes&i,_t===e&&(kt&i)===i&&(ht===4||ht===3&&(kt&130023424)===kt&&500>lt()-zc?qn(e,0):Ic|=i),qt(e,r)}function e_(e,r){r===0&&(e.mode&1?(r=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):r=1);var i=Pt();e=Gr(e,r),e!==null&&(Va(e,r,i),qt(e,i))}function ab(e){var r=e.memoizedState,i=0;r!==null&&(i=r.retryLane),e_(e,i)}function sb(e,r){var i=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(K(314))}s!==null&&s.delete(r),e_(e,i)}var t_;t_=function(e,r,i){if(e!==null)if(e.memoizedProps!==r.pendingProps||Vt.current)Ut=!0;else{if(!(e.lanes&i)&&!(r.flags&128))return Ut=!1,H$(e,r,i);Ut=!!(e.flags&131072)}else Ut=!1,Je&&r.flags&1048576&&a1(r,oo,r.index);switch(r.lanes=0,r.tag){case 2:var s=r.type;qs(e,r),e=r.pendingProps;var c=Ti(r,Nt.current);bi(r,i),c=$c(null,r,s,e,c,i);var f=bc();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ft(s)?(f=!0,ao(r)):f=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,yc(r),c.updater=zo,r.stateNode=c,c._reactInternals=r,Ed(r,s,e,i),r=zd(null,r,s,!0,f,i)):(r.tag=0,Je&&f&&dc(r),Mt(null,r,c,i),r=r.child),r;case 16:s=r.elementType;e:{switch(qs(e,r),e=r.pendingProps,c=s._init,s=c(s._payload),r.type=s,c=r.tag=lb(s),e=xr(s,e),c){case 0:r=Id(null,r,s,e,i);break e;case 1:r=zv(null,r,s,e,i);break e;case 11:r=Tv(null,r,s,e,i);break e;case 14:r=Iv(null,r,s,xr(s.type,e),i);break e}throw Error(K(306,s,""))}return r;case 0:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:xr(s,c),Id(e,r,s,c,i);case 1:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:xr(s,c),zv(e,r,s,c,i);case 3:e:{if(B1(r),e===null)throw Error(K(387));s=r.pendingProps,f=r.memoizedState,c=f.element,c1(e,r),co(r,s,null,i);var g=r.memoizedState;if(s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){c=Ni(Error(K(423)),r),r=Cv(e,r,s,i,c);break e}else if(s!==c){c=Ni(Error(K(424)),r),r=Cv(e,r,s,i,c);break e}else for(Xt=hn(r.stateNode.containerInfo.firstChild),Zt=r,Je=!0,br=null,i=u1(r,null,s,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ii(),s===c){r=Hr(e,r,i);break e}Mt(e,r,s,i)}r=r.child}return r;case 5:return p1(r),e===null&&bd(r),s=r.type,c=r.pendingProps,f=e!==null?e.memoizedProps:null,g=c.children,vd(s,c)?g=null:f!==null&&vd(s,f)&&(r.flags|=32),D1(e,r),Mt(e,r,g,i),r.child;case 6:return e===null&&bd(r),null;case 13:return L1(e,r,i);case 4:return vc(r,r.stateNode.containerInfo),s=r.pendingProps,e===null?r.child=zi(r,null,s,i):Mt(e,r,s,i),r.child;case 11:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:xr(s,c),Tv(e,r,s,c,i);case 7:return Mt(e,r,r.pendingProps,i),r.child;case 8:return Mt(e,r,r.pendingProps.children,i),r.child;case 12:return Mt(e,r,r.pendingProps.children,i),r.child;case 10:e:{if(s=r.type._context,c=r.pendingProps,f=r.memoizedProps,g=c.value,He(lo,s._currentValue),s._currentValue=g,f!==null)if(Er(f.value,g)){if(f.children===c.children&&!Vt.current){r=Hr(e,r,i);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var b=f.dependencies;if(b!==null){g=f.child;for(var x=b.firstContext;x!==null;){if(x.context===s){if(f.tag===1){x=Fr(-1,i&-i),x.tag=2;var N=f.updateQueue;if(N!==null){N=N.shared;var P=N.pending;P===null?x.next=x:(x.next=P.next,P.next=x),N.pending=x}}f.lanes|=i,x=f.alternate,x!==null&&(x.lanes|=i),kd(f.return,i,r),b.lanes|=i;break}x=x.next}}else if(f.tag===10)g=f.type===r.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(K(341));g.lanes|=i,b=g.alternate,b!==null&&(b.lanes|=i),kd(g,i,r),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===r){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}Mt(e,r,c.children,i),r=r.child}return r;case 9:return c=r.type,s=r.pendingProps.children,bi(r,i),c=or(c),s=s(c),r.flags|=1,Mt(e,r,s,i),r.child;case 14:return s=r.type,c=xr(s,r.pendingProps),c=xr(s.type,c),Iv(e,r,s,c,i);case 15:return M1(e,r,r.type,r.pendingProps,i);case 17:return s=r.type,c=r.pendingProps,c=r.elementType===s?c:xr(s,c),qs(e,r),r.tag=1,Ft(s)?(e=!0,ao(r)):e=!1,bi(r,i),R1(r,s,c),Ed(r,s,c,i),zd(null,r,s,!0,e,i);case 19:return j1(e,r,i);case 22:return P1(e,r,i)}throw Error(K(156,r.tag))};function r_(e,r){return zw(e,r)}function ob(e,r,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(e,r,i,s){return new ob(e,r,i,s)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lb(e){if(typeof e=="function")return Oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yd)return 11;if(e===Jd)return 14}return 2}function vn(e,r){var i=e.alternate;return i===null?(i=ar(e.tag,r,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=r,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,r=e.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Hs(e,r,i,s,c,f){var g=2;if(s=e,typeof e=="function")Oc(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case li:return Wn(i.children,c,f,r);case Zd:g=8,c|=8;break;case Xu:return e=ar(12,i,r,c|2),e.elementType=Xu,e.lanes=f,e;case Zu:return e=ar(13,i,r,c),e.elementType=Zu,e.lanes=f,e;case Yu:return e=ar(19,i,r,c),e.elementType=Yu,e.lanes=f,e;case pw:return Ro(i,c,f,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dw:g=10;break e;case cw:g=9;break e;case Yd:g=11;break e;case Jd:g=14;break e;case an:g=16,s=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return r=ar(g,i,r,c),r.elementType=e,r.type=s,r.lanes=f,r}function Wn(e,r,i,s){return e=ar(7,e,s,r),e.lanes=i,e}function Ro(e,r,i,s){return e=ar(22,e,s,r),e.elementType=pw,e.lanes=i,e.stateNode={isHidden:!1},e}function Vu(e,r,i){return e=ar(6,e,null,r),e.lanes=i,e}function Fu(e,r,i){return r=ar(4,e.children!==null?e.children:[],e.key,r),r.lanes=i,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function ub(e,r,i,s,c){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Ac(e,r,i,s,c,f,g,b,x){return e=new ub(e,r,i,b,x),r===1?(r=1,f===!0&&(r|=8)):r=0,f=ar(3,null,null,r),e.current=f,f.stateNode=e,f.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(f),e}function db(e,r,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:s==null?null:""+s,children:e,containerInfo:r,implementation:i}}function n_(e){if(!e)return xn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(K(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ft(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(K(171))}if(e.tag===1){var i=e.type;if(Ft(i))return n1(e,i,r)}return r}function i_(e,r,i,s,c,f,g,b,x){return e=Ac(i,s,!0,e,c,f,g,b,x),e.context=n_(null),i=e.current,s=Pt(),c=yn(i),f=Fr(s,c),f.callback=r??null,mn(i,f,c),e.current.lanes=c,Va(e,c,s),qt(e,s),e}function Oo(e,r,i,s){var c=r.current,f=Pt(),g=yn(c);return i=n_(i),r.context===null?r.context=i:r.pendingContext=i,r=Fr(f,g),r.payload={element:e},s=s===void 0?null:s,s!==null&&(r.callback=s),e=mn(c,r,g),e!==null&&(Sr(e,c,g,f),Us(e,c,g)),g}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jv(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<r?i:r}}function Mc(e,r){jv(e,r),(e=e.alternate)&&jv(e,r)}function cb(){return null}var a_=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}Ao.prototype.render=Pc.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(K(409));Oo(e,r,null,null)};Ao.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Xn(function(){Oo(null,e,null,null)}),r[Wr]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var r=Pw();e={blockedOn:null,target:e,priority:r};for(var i=0;i<on.length&&r!==0&&r<on[i].priority;i++);on.splice(i,0,e),i===0&&Bw(e)}};function Dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function pb(e,r,i,s,c){if(c){if(typeof s=="function"){var f=s;s=function(){var N=wo(g);f.call(N)}}var g=i_(r,s,e,0,null,!1,!1,"",Uv);return e._reactRootContainer=g,e[Wr]=g.current,Ca(e.nodeType===8?e.parentNode:e),Xn(),g}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var b=s;s=function(){var N=wo(x);b.call(N)}}var x=Ac(e,0,!1,null,null,!1,!1,"",Uv);return e._reactRootContainer=x,e[Wr]=x.current,Ca(e.nodeType===8?e.parentNode:e),Xn(function(){Oo(r,x,i,s)}),x}function Po(e,r,i,s,c){var f=i._reactRootContainer;if(f){var g=f;if(typeof c=="function"){var b=c;c=function(){var x=wo(g);b.call(x)}}Oo(r,g,e,c)}else g=pb(i,r,e,c,s);return wo(g)}Aw=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var i=ua(r.pendingLanes);i!==0&&(rc(r,i|1),qt(r,lt()),!(Le&6)&&(Ri=lt()+500,kn()))}break;case 13:Xn(function(){var s=Gr(e,1);if(s!==null){var c=Pt();Sr(s,e,1,c)}}),Mc(e,1)}};nc=function(e){if(e.tag===13){var r=Gr(e,134217728);if(r!==null){var i=Pt();Sr(r,e,134217728,i)}Mc(e,134217728)}};Mw=function(e){if(e.tag===13){var r=yn(e),i=Gr(e,r);if(i!==null){var s=Pt();Sr(i,e,r,s)}Mc(e,r)}};Pw=function(){return We};Dw=function(e,r){var i=We;try{return We=e,r()}finally{We=i}};ld=function(e,r,i){switch(r){case"input":if(td(e,i),r=i.name,i.type==="radio"&&r!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var s=i[r];if(s!==e&&s.form===e.form){var c=Eo(s);if(!c)throw Error(K(90));hw(s),td(s,c)}}}break;case"textarea":gw(e,i);break;case"select":r=i.value,r!=null&&wi(e,!!i.multiple,r,!1)}};bw=Cc;kw=Xn;var fb={usingClientEntryPoint:!1,Events:[qa,pi,Eo,xw,$w,Cc]},na={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hb={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tw(e),e===null?null:e.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||cb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{$o=zs.inject(hb),Nr=zs}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fb;Jt.createPortal=function(e,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(r))throw Error(K(200));return db(e,r,null,i)};Jt.createRoot=function(e,r){if(!Dc(e))throw Error(K(299));var i=!1,s="",c=a_;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Ac(e,1,!1,null,null,i,!1,s,c),e[Wr]=r.current,Ca(e.nodeType===8?e.parentNode:e),new Pc(r)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=Tw(r),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return Xn(e)};Jt.hydrate=function(e,r,i){if(!Mo(r))throw Error(K(200));return Po(null,e,r,!0,i)};Jt.hydrateRoot=function(e,r,i){if(!Dc(e))throw Error(K(405));var s=i!=null&&i.hydratedSources||null,c=!1,f="",g=a_;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),r=i_(r,null,e,1,i??null,c,!1,f,g),e[Wr]=r.current,Ca(e),s)for(e=0;e<s.length;e++)i=s[e],c=i._getVersion,c=c(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,c]:r.mutableSourceEagerHydrationData.push(i,c);return new Ao(r)};Jt.render=function(e,r,i){if(!Mo(r))throw Error(K(200));return Po(null,e,r,!1,i)};Jt.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(K(40));return e._reactRootContainer?(Xn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[Wr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Cc;Jt.unstable_renderSubtreeIntoContainer=function(e,r,i,s){if(!Mo(i))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return Po(e,r,i,!1,s)};Jt.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(e){console.error(e)}}s_(),sw.exports=Jt;var mb=sw.exports,Vv=mb;Ku.createRoot=Vv.createRoot,Ku.hydrateRoot=Vv.hydrateRoot;var gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const yb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vb=(e,r)=>{const i=Ye.forwardRef(({color:s="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:g,children:b,...x},N)=>Ye.createElement("svg",{ref:N,...gb,width:c,height:c,stroke:s,strokeWidth:g?Number(f)*24/Number(c):f,className:`lucide lucide-${yb(e)}`,...x},[...r.map(([P,B])=>Ye.createElement(P,B)),...(Array.isArray(b)?b:[b])||[]]));return i.displayName=`${e}`,i};var ct=vb;const o_=ct("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Si=ct("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),l_=ct("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),wb=ct("Bug",[["rect",{width:"8",height:"14",x:"8",y:"6",rx:"4",key:"hq8nra"}],["path",{d:"m19 7-3 2",key:"fmg8ec"}],["path",{d:"m5 7 3 2",key:"dkxqes"}],["path",{d:"m19 19-3-2",key:"1hbhi4"}],["path",{d:"m5 19 3-2",key:"dvt2ee"}],["path",{d:"M20 13h-4",key:"1agfp2"}],["path",{d:"M4 13h4",key:"1bwh8b"}],["path",{d:"m10 4 1 2",key:"1pot59"}],["path",{d:"m14 4-1 2",key:"m8sn0o"}]]),La=ct("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),_b=ct("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),xb=ct("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),$b=ct("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),u_=ct("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),_o=ct("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),bb=ct("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),ca=ct("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),d_=ct("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),ja=ct("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),kb=ct("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),Sb=ct("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),Eb=ct("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c_=ct("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Tb=ct("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),p_=ct("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function f_(e){var r,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var c=e.length;for(r=0;r<c;r++)e[r]&&(i=f_(e[r]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function Ib(){for(var e,r,i=0,s="",c=arguments.length;i<c;i++)(e=arguments[i])&&(r=f_(e))&&(s&&(s+=" "),s+=r);return s}function zb(){for(var e=0,r,i,s="";e<arguments.length;)(r=arguments[e++])&&(i=h_(r))&&(s&&(s+=" "),s+=i);return s}function h_(e){if(typeof e=="string")return e;for(var r,i="",s=0;s<e.length;s++)e[s]&&(r=h_(e[s]))&&(i&&(i+=" "),i+=r);return i}var Bc="-";function Cb(e){var r=Rb(e),i=e.conflictingClassGroups,s=e.conflictingClassGroupModifiers,c=s===void 0?{}:s;function f(b){var x=b.split(Bc);return x[0]===""&&x.length!==1&&x.shift(),m_(x,r)||Nb(b)}function g(b,x){var N=i[b]||[];return x&&c[b]?[].concat(N,c[b]):N}return{getClassGroupId:f,getConflictingClassGroupIds:g}}function m_(e,r){var g;if(e.length===0)return r.classGroupId;var i=e[0],s=r.nextPart.get(i),c=s?m_(e.slice(1),s):void 0;if(c)return c;if(r.validators.length!==0){var f=e.join(Bc);return(g=r.validators.find(function(b){var x=b.validator;return x(f)}))==null?void 0:g.classGroupId}}var Fv=/^\[(.+)\]$/;function Nb(e){if(Fv.test(e)){var r=Fv.exec(e)[1],i=r==null?void 0:r.substring(0,r.indexOf(":"));if(i)return"arbitrary.."+i}}function Rb(e){var r=e.theme,i=e.prefix,s={nextPart:new Map,validators:[]},c=Ab(Object.entries(e.classGroups),i);return c.forEach(function(f){var g=f[0],b=f[1];Ud(b,s,g,r)}),s}function Ud(e,r,i,s){e.forEach(function(c){if(typeof c=="string"){var f=c===""?r:qv(r,c);f.classGroupId=i;return}if(typeof c=="function"){if(Ob(c)){Ud(c(s),r,i,s);return}r.validators.push({validator:c,classGroupId:i});return}Object.entries(c).forEach(function(g){var b=g[0],x=g[1];Ud(x,qv(r,b),i,s)})})}function qv(e,r){var i=e;return r.split(Bc).forEach(function(s){i.nextPart.has(s)||i.nextPart.set(s,{nextPart:new Map,validators:[]}),i=i.nextPart.get(s)}),i}function Ob(e){return e.isThemeGetter}function Ab(e,r){return r?e.map(function(i){var s=i[0],c=i[1],f=c.map(function(g){return typeof g=="string"?r+g:typeof g=="object"?Object.fromEntries(Object.entries(g).map(function(b){var x=b[0],N=b[1];return[r+x,N]})):g});return[s,f]}):e}function Mb(e){if(e<1)return{get:function(){},set:function(){}};var r=0,i=new Map,s=new Map;function c(f,g){i.set(f,g),r++,r>e&&(r=0,s=i,i=new Map)}return{get:function(g){var b=i.get(g);if(b!==void 0)return b;if((b=s.get(g))!==void 0)return c(g,b),b},set:function(g,b){i.has(g)?i.set(g,b):c(g,b)}}}var g_="!";function Pb(e){var r=e.separator||":",i=r.length===1,s=r[0],c=r.length;return function(g){for(var b=[],x=0,N=0,P,B=0;B<g.length;B++){var A=g[B];if(x===0){if(A===s&&(i||g.slice(B,B+c)===r)){b.push(g.slice(N,B)),N=B+c;continue}if(A==="/"){P=B;continue}}A==="["?x++:A==="]"&&x--}var W=b.length===0?g:g.substring(N),G=W.startsWith(g_),Q=G?W.substring(1):W,$e=P&&P>N?P-N:void 0;return{modifiers:b,hasImportantModifier:G,baseClassName:Q,maybePostfixModifierPosition:$e}}}function Db(e){if(e.length<=1)return e;var r=[],i=[];return e.forEach(function(s){var c=s[0]==="[";c?(r.push.apply(r,i.sort().concat([s])),i=[]):i.push(s)}),r.push.apply(r,i.sort()),r}function Bb(e){return{cache:Mb(e.cacheSize),splitModifiers:Pb(e),...Cb(e)}}var Lb=/\s+/;function jb(e,r){var i=r.splitModifiers,s=r.getClassGroupId,c=r.getConflictingClassGroupIds,f=new Set;return e.trim().split(Lb).map(function(g){var b=i(g),x=b.modifiers,N=b.hasImportantModifier,P=b.baseClassName,B=b.maybePostfixModifierPosition,A=s(B?P.substring(0,B):P),W=!!B;if(!A){if(!B)return{isTailwindClass:!1,originalClassName:g};if(A=s(P),!A)return{isTailwindClass:!1,originalClassName:g};W=!1}var G=Db(x).join(":"),Q=N?G+g_:G;return{isTailwindClass:!0,modifierId:Q,classGroupId:A,originalClassName:g,hasPostfixModifier:W}}).reverse().filter(function(g){if(!g.isTailwindClass)return!0;var b=g.modifierId,x=g.classGroupId,N=g.hasPostfixModifier,P=b+x;return f.has(P)?!1:(f.add(P),c(x,N).forEach(function(B){return f.add(b+B)}),!0)}).reverse().map(function(g){return g.originalClassName}).join(" ")}function Ub(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s,c,f,g=b;function b(N){var P=r[0],B=r.slice(1),A=B.reduce(function(W,G){return G(W)},P());return s=Bb(A),c=s.cache.get,f=s.cache.set,g=x,x(N)}function x(N){var P=c(N);if(P)return P;var B=jb(N,s);return f(N,B),B}return function(){return g(zb.apply(null,arguments))}}function Ke(e){var r=function(s){return s[e]||[]};return r.isThemeGetter=!0,r}var y_=/^\[(?:([a-z-]+):)?(.+)\]$/i,Vb=/^\d+\/\d+$/,Fb=new Set(["px","full","screen"]),qb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Wb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Gb=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function _r(e){return Fn(e)||Fb.has(e)||Vb.test(e)||Vd(e)}function Vd(e){return Jn(e,"length",Yb)}function Hb(e){return Jn(e,"size",v_)}function Kb(e){return Jn(e,"position",v_)}function Qb(e){return Jn(e,"url",Jb)}function Cs(e){return Jn(e,"number",Fn)}function Fn(e){return!Number.isNaN(Number(e))}function Xb(e){return e.endsWith("%")&&Fn(e.slice(0,-1))}function ia(e){return Wv(e)||Jn(e,"number",Wv)}function Oe(e){return y_.test(e)}function aa(){return!0}function nn(e){return qb.test(e)}function Zb(e){return Jn(e,"",ek)}function Jn(e,r,i){var s=y_.exec(e);return s?s[1]?s[1]===r:i(s[2]):!1}function Yb(e){return Wb.test(e)}function v_(){return!1}function Jb(e){return e.startsWith("url(")}function Wv(e){return Number.isInteger(Number(e))}function ek(e){return Gb.test(e)}function tk(){var e=Ke("colors"),r=Ke("spacing"),i=Ke("blur"),s=Ke("brightness"),c=Ke("borderColor"),f=Ke("borderRadius"),g=Ke("borderSpacing"),b=Ke("borderWidth"),x=Ke("contrast"),N=Ke("grayscale"),P=Ke("hueRotate"),B=Ke("invert"),A=Ke("gap"),W=Ke("gradientColorStops"),G=Ke("gradientColorStopPositions"),Q=Ke("inset"),$e=Ke("margin"),M=Ke("opacity"),R=Ke("padding"),D=Ke("saturate"),H=Ke("scale"),re=Ke("sepia"),J=Ke("skew"),se=Ke("space"),Y=Ke("translate"),Ue=function(){return["auto","contain","none"]},Se=function(){return["auto","hidden","clip","visible","scroll"]},ut=function(){return["auto",Oe,r]},he=function(){return[Oe,r]},Rt=function(){return["",_r]},Wt=function(){return["auto",Fn,Oe]},Or=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},Pe=function(){return["solid","dashed","dotted","double","none"]},ur=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},ne=function(){return["start","end","center","between","around","evenly","stretch"]},_e=function(){return["","0",Oe]},xe=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},ze=function(){return[Fn,Cs]},Ve=function(){return[Fn,Oe]};return{cacheSize:500,theme:{colors:[aa],spacing:[_r],blur:["none","",nn,Oe],brightness:ze(),borderColor:[e],borderRadius:["none","","full",nn,Oe],borderSpacing:he(),borderWidth:Rt(),contrast:ze(),grayscale:_e(),hueRotate:Ve(),invert:_e(),gap:he(),gradientColorStops:[e],gradientColorStopPositions:[Xb,Vd],inset:ut(),margin:ut(),opacity:ze(),padding:he(),saturate:ze(),scale:ze(),sepia:_e(),skew:Ve(),space:he(),translate:he()},classGroups:{aspect:[{aspect:["auto","square","video",Oe]}],container:["container"],columns:[{columns:[nn]}],"break-after":[{"break-after":xe()}],"break-before":[{"break-before":xe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Or(),[Oe])}],overflow:[{overflow:Se()}],"overflow-x":[{"overflow-x":Se()}],"overflow-y":[{"overflow-y":Se()}],overscroll:[{overscroll:Ue()}],"overscroll-x":[{"overscroll-x":Ue()}],"overscroll-y":[{"overscroll-y":Ue()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[Q]}],"inset-x":[{"inset-x":[Q]}],"inset-y":[{"inset-y":[Q]}],start:[{start:[Q]}],end:[{end:[Q]}],top:[{top:[Q]}],right:[{right:[Q]}],bottom:[{bottom:[Q]}],left:[{left:[Q]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ia]}],basis:[{basis:ut()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Oe]}],grow:[{grow:_e()}],shrink:[{shrink:_e()}],order:[{order:["first","last","none",ia]}],"grid-cols":[{"grid-cols":[aa]}],"col-start-end":[{col:["auto",{span:["full",ia]},Oe]}],"col-start":[{"col-start":Wt()}],"col-end":[{"col-end":Wt()}],"grid-rows":[{"grid-rows":[aa]}],"row-start-end":[{row:["auto",{span:[ia]},Oe]}],"row-start":[{"row-start":Wt()}],"row-end":[{"row-end":Wt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Oe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Oe]}],gap:[{gap:[A]}],"gap-x":[{"gap-x":[A]}],"gap-y":[{"gap-y":[A]}],"justify-content":[{justify:["normal"].concat(ne())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(ne(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(ne(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[$e]}],mx:[{mx:[$e]}],my:[{my:[$e]}],ms:[{ms:[$e]}],me:[{me:[$e]}],mt:[{mt:[$e]}],mr:[{mr:[$e]}],mb:[{mb:[$e]}],ml:[{ml:[$e]}],"space-x":[{"space-x":[se]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[se]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",Oe,r]}],"min-w":[{"min-w":["min","max","fit",Oe,_r]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[nn]},nn,Oe]}],h:[{h:[Oe,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Oe,_r]}],"max-h":[{"max-h":[Oe,r,"min","max","fit"]}],"font-size":[{text:["base",nn,Vd]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Cs]}],"font-family":[{font:[aa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Oe]}],"line-clamp":[{"line-clamp":["none",Fn,Cs]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Oe,_r]}],"list-image":[{"list-image":["none",Oe]}],"list-style-type":[{list:["none","disc","decimal",Oe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(Pe(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",_r]}],"underline-offset":[{"underline-offset":["auto",Oe,_r]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:he()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Or(),[Kb])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Hb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qb]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[G]}],"gradient-via-pos":[{via:[G]}],"gradient-to-pos":[{to:[G]}],"gradient-from":[{from:[W]}],"gradient-via":[{via:[W]}],"gradient-to":[{to:[W]}],rounded:[{rounded:[f]}],"rounded-s":[{"rounded-s":[f]}],"rounded-e":[{"rounded-e":[f]}],"rounded-t":[{"rounded-t":[f]}],"rounded-r":[{"rounded-r":[f]}],"rounded-b":[{"rounded-b":[f]}],"rounded-l":[{"rounded-l":[f]}],"rounded-ss":[{"rounded-ss":[f]}],"rounded-se":[{"rounded-se":[f]}],"rounded-ee":[{"rounded-ee":[f]}],"rounded-es":[{"rounded-es":[f]}],"rounded-tl":[{"rounded-tl":[f]}],"rounded-tr":[{"rounded-tr":[f]}],"rounded-br":[{"rounded-br":[f]}],"rounded-bl":[{"rounded-bl":[f]}],"border-w":[{border:[b]}],"border-w-x":[{"border-x":[b]}],"border-w-y":[{"border-y":[b]}],"border-w-s":[{"border-s":[b]}],"border-w-e":[{"border-e":[b]}],"border-w-t":[{"border-t":[b]}],"border-w-r":[{"border-r":[b]}],"border-w-b":[{"border-b":[b]}],"border-w-l":[{"border-l":[b]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[].concat(Pe(),["hidden"])}],"divide-x":[{"divide-x":[b]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[b]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:Pe()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:[""].concat(Pe())}],"outline-offset":[{"outline-offset":[Oe,_r]}],"outline-w":[{outline:[_r]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Rt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[_r]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",nn,Zb]}],"shadow-color":[{shadow:[aa]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":ur()}],"bg-blend":[{"bg-blend":ur()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[s]}],contrast:[{contrast:[x]}],"drop-shadow":[{"drop-shadow":["","none",nn,Oe]}],grayscale:[{grayscale:[N]}],"hue-rotate":[{"hue-rotate":[P]}],invert:[{invert:[B]}],saturate:[{saturate:[D]}],sepia:[{sepia:[re]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[x]}],"backdrop-grayscale":[{"backdrop-grayscale":[N]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[P]}],"backdrop-invert":[{"backdrop-invert":[B]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[re]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[g]}],"border-spacing-x":[{"border-spacing-x":[g]}],"border-spacing-y":[{"border-spacing-y":[g]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Oe]}],duration:[{duration:Ve()}],ease:[{ease:["linear","in","out","in-out",Oe]}],delay:[{delay:Ve()}],animate:[{animate:["none","spin","ping","pulse","bounce",Oe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[H]}],"scale-x":[{"scale-x":[H]}],"scale-y":[{"scale-y":[H]}],rotate:[{rotate:[ia,Oe]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Oe]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Oe]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":he()}],"scroll-mx":[{"scroll-mx":he()}],"scroll-my":[{"scroll-my":he()}],"scroll-ms":[{"scroll-ms":he()}],"scroll-me":[{"scroll-me":he()}],"scroll-mt":[{"scroll-mt":he()}],"scroll-mr":[{"scroll-mr":he()}],"scroll-mb":[{"scroll-mb":he()}],"scroll-ml":[{"scroll-ml":he()}],"scroll-p":[{"scroll-p":he()}],"scroll-px":[{"scroll-px":he()}],"scroll-py":[{"scroll-py":he()}],"scroll-ps":[{"scroll-ps":he()}],"scroll-pe":[{"scroll-pe":he()}],"scroll-pt":[{"scroll-pt":he()}],"scroll-pr":[{"scroll-pr":he()}],"scroll-pb":[{"scroll-pb":he()}],"scroll-pl":[{"scroll-pl":he()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Oe]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[_r,Cs]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var rk=Ub(tk);function qe(...e){return rk(Ib(e))}class nk{constructor(){Oy(this,"serverBase","http://localhost:3000")}trace(r,i){console.log(`[TruthScan API] ${r}`,i??"")}async buildPostRequest(r,i){const s=await fetch(`${this.serverBase}${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async fetchPageContent(r){this.trace("Fetching page content:",r);try{const i=await this.buildPostRequest("/api/scrape",{url:r});return this.trace(`Content fetched: ${i.text.length} chars`),i}catch(i){throw this.trace("Scrape error:",i),new Error(`Failed to fetch page content: ${i instanceof Error?i.message:"Unknown error"}`)}}async runAiDetection(r){this.trace("Running AI detection, length:",r.length);try{const i=await this.buildPostRequest("/api/detect",{text:r});return this.trace("AI detection result:",i),i}catch(i){throw this.trace("AI detection error:",i),new Error(`Failed to run AI detection: ${i instanceof Error?i.message:"Unknown error"}`)}}async verifyFacts(r){this.trace("Verifying facts, length:",r.length);try{const i=await this.buildPostRequest("/api/factcheck",{text:r});return this.trace("Fact-check result:",i),i}catch(i){throw this.trace("Fact-check error:",i),new Error(`Failed to verify facts: ${i instanceof Error?i.message:"Unknown error"}`)}}async getSentiment(r){this.trace("Getting sentiment, length:",r.length);try{const i=await this.buildPostRequest("/api/sentiment",{text:r});return this.trace("Sentiment result:",i),i}catch(i){throw this.trace("Sentiment error:",i),new Error(`Failed to analyze sentiment: ${i instanceof Error?i.message:"Unknown error"}`)}}async generateSummary(r){this.trace("Generating summary, length:",r.length);try{const i=await this.buildPostRequest("/api/summarize",{content:r});if(this.trace("Summary result:",i),!i.success)throw new Error(i.error||"Summarization failed");return i}catch(i){throw this.trace("Summarization error:",i),new Error(`Failed to generate summary: ${i instanceof Error?i.message:"Unknown error"}`)}}async queryContent(r,i){this.trace(`Querying content — Q: ${r.length} chars, content: ${i.length} chars`);try{const s=await this.buildPostRequest("/api/qa",{question:r,content:i});if(this.trace("Q&A result:",s),!s.success)throw new Error(s.error||"Q&A failed");return s}catch(s){throw this.trace("Q&A error:",s),new Error(`Failed to query content: ${s instanceof Error?s.message:"Unknown error"}`)}}async analyzeImageAI(r){this.trace("Analyzing image for AI:",r);try{const i=await this.buildPostRequest("/api/image-detect-ai",{url:r});return this.trace("Image detection result:",i),{url:r,aiLikelihoodPercent:i.aiLikelihoodPercent,rawModelReply:i.rawModelReply,topSources:i.topSources}}catch(i){throw this.trace("Image detection error:",i),new Error(`Failed to analyze image: ${i instanceof Error?i.message:"Unknown error"}`)}}async batchAnalyzeImages(r){if(this.trace("Batch image analysis, count:",r.length),!r||r.length===0)return[];const i=[];for(const s of r)try{i.push(await this.analyzeImageAI(s))}catch(c){this.trace(`Image failed: ${s}`,c);const f=c instanceof Error?c.message:"Unknown error",g=f.includes("skipAnalysis")||f.includes("Unsupported image format")||f.includes("HTTP error! status: 400");i.push({url:s,aiLikelihoodPercent:0,rawModelReply:g?"This format is not supported":`Analysis failed: ${f}`})}return i}async fullPageAnalysis(r,i=!0){this.trace("Full page analysis for:",r);try{const s=await this.fetchPageContent(r),c=await this.runAiDetection(s.text);let f;return i&&(f=await this.verifyFacts(s.text)),{scrapedData:s,detectionResult:c,factCheckResult:f,timestamp:new Date}}catch(s){throw this.trace("Full analysis failed:",s),s}}computeMisinfoScore(r){if(!r||r.length===0)return 0;const i=r.filter(s=>!s.isLikelyTrue).length;return Math.round(i/r.length*100)}async checkServerAlive(){this.trace("Checking server connectivity...");try{const r=await fetch(`${this.serverBase}/api/scrape`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:"https://example.com"})});return this.trace("Server check status:",r.status),r.ok}catch(r){return this.trace("Server check failed:",r),!1}}}const sa=new nk,ik="modulepreload",ak=function(e){return"/"+e},Gv={},sk=function(r,i,s){if(!i||i.length===0)return r();const c=document.getElementsByTagName("link");return Promise.all(i.map(f=>{if(f=ak(f),f in Gv)return;Gv[f]=!0;const g=f.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(!!s)for(let P=c.length-1;P>=0;P--){const B=c[P];if(B.href===f&&(!g||B.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${b}`))return;const N=document.createElement("link");if(N.rel=g?"stylesheet":ik,g||(N.as="script",N.crossOrigin=""),N.href=f,document.head.appendChild(N),g)return new Promise((P,B)=>{N.addEventListener("load",P),N.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>r()).catch(f=>{const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f})};function si(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var w_={exports:{}};(function(e,r){var i=(()=>{var s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,b=(t=>typeof si<"u"?si:typeof Proxy<"u"?new Proxy(t,{get:(n,a)=>(typeof si<"u"?si:n)[a]}):t)(function(t){if(typeof si<"u")return si.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),x=(t,n)=>()=>(t&&(n=t(t=0)),n),N=(t,n)=>{for(var a in n)s(t,a,{get:n[a],enumerable:!0})},P=(t,n,a,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of f(n))!g.call(t,l)&&l!==a&&s(t,l,{get:()=>n[l],enumerable:!(o=c(n,l))||o.enumerable});return t},B=t=>P(s({},"__esModule",{value:!0}),t),A,W,G,Q,$e,M=x(()=>{A=new Map,W=[],G=(t,n,a)=>{if(n&&typeof n.init=="function"&&typeof n.createInferenceSessionHandler=="function"){let o=A.get(t);if(o===void 0)A.set(t,{backend:n,priority:a});else{if(o.priority>a)return;if(o.priority===a&&o.backend!==n)throw new Error(`cannot register backend "${t}" using priority ${a}`)}if(a>=0){let l=W.indexOf(t);l!==-1&&W.splice(l,1);for(let u=0;u<W.length;u++)if(A.get(W[u]).priority<=a){W.splice(u,0,t);return}W.push(t)}return}throw new TypeError("not a valid backend")},Q=async t=>{let n=A.get(t);if(!n)return"backend not found.";if(n.initialized)return n.backend;if(n.aborted)return n.error;{let a=!!n.initPromise;try{return a||(n.initPromise=n.backend.init(t)),await n.initPromise,n.initialized=!0,n.backend}catch(o){return a||(n.error=`${o}`,n.aborted=!0),n.error}finally{delete n.initPromise}}},$e=async t=>{let n=t.executionProviders||[],a=n.map(h=>typeof h=="string"?h:h.name),o=a.length===0?W:a,l,u=[],d=new Set;for(let h of o){let m=await Q(h);typeof m=="string"?u.push({name:h,err:m}):(l||(l=m),l===m&&d.add(h))}if(!l)throw new Error(`no available backend found. ERR: ${u.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:m}of u)a.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${m}`);let p=n.filter(h=>d.has(typeof h=="string"?h:h.name));return[l,new Proxy(t,{get:(h,m)=>m==="executionProviders"?p:Reflect.get(h,m)})]}}),R=x(()=>{M()}),D,H=x(()=>{D="1.26.0"}),re,J,se=x(()=>{H(),re="warning",J={wasm:{},webgl:{},webgpu:{},versions:{common:D},set logLevel(t){if(t!==void 0){if(typeof t!="string"||["verbose","info","warning","error","fatal"].indexOf(t)===-1)throw new Error(`Unsupported logging level: ${t}`);re=t}},get logLevel(){return re}},Object.defineProperty(J,"logLevel",{enumerable:!0})}),Y,Ue=x(()=>{se(),Y=J}),Se,ut,he=x(()=>{Se=(t,n)=>{let a=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);a.width=t.dims[3],a.height=t.dims[2];let o=a.getContext("2d");if(o!=null){let l,u;(n==null?void 0:n.tensorLayout)!==void 0&&n.tensorLayout==="NHWC"?(l=t.dims[2],u=t.dims[3]):(l=t.dims[3],u=t.dims[2]);let d=(n==null?void 0:n.format)!==void 0?n.format:"RGB",p=n==null?void 0:n.norm,h,m;p===void 0||p.mean===void 0?h=[255,255,255,255]:typeof p.mean=="number"?h=[p.mean,p.mean,p.mean,p.mean]:(h=[p.mean[0],p.mean[1],p.mean[2],0],p.mean[3]!==void 0&&(h[3]=p.mean[3])),p===void 0||p.bias===void 0?m=[0,0,0,0]:typeof p.bias=="number"?m=[p.bias,p.bias,p.bias,p.bias]:(m=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(m[3]=p.bias[3]));let y=u*l,v=0,w=y,_=y*2,$=-1;d==="RGBA"?(v=0,w=y,_=y*2,$=y*3):d==="RGB"?(v=0,w=y,_=y*2):d==="RBG"&&(v=0,_=y,w=y*2);for(let S=0;S<u;S++)for(let I=0;I<l;I++){let E=(t.data[v++]-m[0])*h[0],k=(t.data[w++]-m[1])*h[1],C=(t.data[_++]-m[2])*h[2],z=$===-1?255:(t.data[$++]-m[3])*h[3];o.fillStyle="rgba("+E+","+k+","+C+","+z+")",o.fillRect(I,S,1,1)}if("toDataURL"in a)return a.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ut=(t,n)=>{let a=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(a!=null){let l,u,d;(n==null?void 0:n.tensorLayout)!==void 0&&n.tensorLayout==="NHWC"?(l=t.dims[2],u=t.dims[1],d=t.dims[3]):(l=t.dims[3],u=t.dims[2],d=t.dims[1]);let p=n!==void 0&&n.format!==void 0?n.format:"RGB",h=n==null?void 0:n.norm,m,y;h===void 0||h.mean===void 0?m=[255,255,255,255]:typeof h.mean=="number"?m=[h.mean,h.mean,h.mean,h.mean]:(m=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(m[3]=h.mean[3])),h===void 0||h.bias===void 0?y=[0,0,0,0]:typeof h.bias=="number"?y=[h.bias,h.bias,h.bias,h.bias]:(y=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(y[3]=h.bias[3]));let v=u*l;if(n!==void 0&&(n.format!==void 0&&d===4&&n.format!=="RGBA"||d===3&&n.format!=="RGB"&&n.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let w=4,_=0,$=1,S=2,I=3,E=0,k=v,C=v*2,z=-1;p==="RGBA"?(E=0,k=v,C=v*2,z=v*3):p==="RGB"?(E=0,k=v,C=v*2):p==="RBG"&&(E=0,C=v,k=v*2),o=a.createImageData(l,u);for(let O=0;O<u*l;_+=w,$+=w,S+=w,I+=w,O++)o.data[_]=(t.data[E++]-y[0])*m[0],o.data[$]=(t.data[k++]-y[1])*m[1],o.data[S]=(t.data[C++]-y[2])*m[2],o.data[I]=z===-1?255:(t.data[z++]-y[3])*m[3]}else throw new Error("Can not access image data");return o}}),Rt,Wt,Or,Pe,ur,ne,_e=x(()=>{xt(),Rt=(t,n)=>{if(t===void 0)throw new Error("Image buffer must be defined");if(n.height===void 0||n.width===void 0)throw new Error("Image height and width must be defined");if(n.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:a,width:o}=n,l=n.norm??{mean:255,bias:0},u,d;typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:u=[l.mean[0],l.mean[1],l.mean[2],l.mean[3]??255],typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:d=[l.bias[0],l.bias[1],l.bias[2],l.bias[3]??0];let p=n.format!==void 0?n.format:"RGBA",h=n.tensorFormat!==void 0&&n.tensorFormat!==void 0?n.tensorFormat:"RGB",m=a*o,y=h==="RGBA"?new Float32Array(m*4):new Float32Array(m*3),v=4,w=0,_=1,$=2,S=3,I=0,E=m,k=m*2,C=-1;p==="RGB"&&(v=3,w=0,_=1,$=2,S=-1),h==="RGBA"?C=m*3:h==="RBG"?(I=0,k=m,E=m*2):h==="BGR"&&(k=0,E=m,I=m*2);for(let z=0;z<m;z++,w+=v,$+=v,_+=v,S+=v)y[I++]=(t[w]+d[0])/u[0],y[E++]=(t[_]+d[1])/u[1],y[k++]=(t[$]+d[2])/u[2],C!==-1&&S!==-1&&(y[C++]=(t[S]+d[3])/u[3]);return h==="RGBA"?new Ae("float32",y,[1,4,a,o]):new Ae("float32",y,[1,3,a,o])},Wt=async(t,n)=>{let a=typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement,o=typeof ImageData<"u"&&t instanceof ImageData,l=typeof ImageBitmap<"u"&&t instanceof ImageBitmap,u=typeof t=="string",d,p=n??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},m=y=>typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||y instanceof OffscreenCanvas?y.getContext("2d"):null;if(a){let y=h();y.width=t.width,y.height=t.height;let v=m(y);if(v!=null){let w=t.height,_=t.width;if(n!==void 0&&n.resizedHeight!==void 0&&n.resizedWidth!==void 0&&(w=n.resizedHeight,_=n.resizedWidth),n!==void 0){if(p=n,n.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");p.tensorFormat="RGBA",p.height=w,p.width=_}else p.tensorFormat="RGBA",p.height=w,p.width=_;v.drawImage(t,0,0),d=v.getImageData(0,0,_,w).data}else throw new Error("Can not access image data")}else if(o){let y,v;if(n!==void 0&&n.resizedWidth!==void 0&&n.resizedHeight!==void 0?(y=n.resizedHeight,v=n.resizedWidth):(y=t.height,v=t.width),n!==void 0&&(p=n),p.format="RGBA",p.height=y,p.width=v,n!==void 0){let w=h();w.width=v,w.height=y;let _=m(w);if(_!=null)_.putImageData(t,0,0),d=_.getImageData(0,0,v,y).data;else throw new Error("Can not access image data")}else d=t.data}else if(l){if(n===void 0)throw new Error("Please provide image config with format for Imagebitmap");let y=h();y.width=t.width,y.height=t.height;let v=m(y);if(v!=null){let w=t.height,_=t.width;return v.drawImage(t,0,0,_,w),d=v.getImageData(0,0,_,w).data,p.height=w,p.width=_,Rt(d,p)}else throw new Error("Can not access image data")}else{if(u)return new Promise((y,v)=>{let w=h(),_=m(w);if(!t||!_)return v();let $=new Image;$.crossOrigin="Anonymous",$.src=t,$.onload=()=>{w.width=$.width,w.height=$.height,_.drawImage($,0,0,w.width,w.height);let S=_.getImageData(0,0,w.width,w.height);p.height=w.height,p.width=w.width,y(Rt(S.data,p))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(d!==void 0)return Rt(d,p);throw new Error("Input data provided is not supported - aborted tensor creation")},Or=(t,n)=>{let{width:a,height:o,download:l,dispose:u}=n,d=[1,o,a,4];return new Ae({location:"texture",type:"float32",texture:t,dims:d,download:l,dispose:u})},Pe=(t,n)=>{let{dataType:a,dims:o,download:l,dispose:u}=n;return new Ae({location:"gpu-buffer",type:a??"float32",gpuBuffer:t,dims:o,download:l,dispose:u})},ur=(t,n)=>{let{dataType:a,dims:o,download:l,dispose:u}=n;return new Ae({location:"ml-tensor",type:a??"float32",mlTensor:t,dims:o,download:l,dispose:u})},ne=(t,n,a)=>new Ae({location:"cpu-pinned",type:t,data:n,dims:a??[n.length]})}),xe,ze,Ve,et,ge=x(()=>{xe=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ze=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ve=!1,et=()=>{if(!Ve){Ve=!0;let t=typeof BigInt64Array<"u"&&BigInt64Array.from,n=typeof BigUint64Array<"u"&&BigUint64Array.from,a=globalThis.Float16Array,o=typeof a<"u"&&a.from;t&&(xe.set("int64",BigInt64Array),ze.set(BigInt64Array,"int64")),n&&(xe.set("uint64",BigUint64Array),ze.set(BigUint64Array,"uint64")),o?(xe.set("float16",a),ze.set(a,"float16")):xe.set("float16",Uint16Array)}}}),Ee,ye,mt=x(()=>{xt(),Ee=t=>{let n=1;for(let a=0;a<t.length;a++){let o=t[a];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${a}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${a}] must be a non-negative integer, got: ${o}`);n*=o}return n},ye=(t,n)=>{switch(t.location){case"cpu":return new Ae(t.type,t.data,n);case"cpu-pinned":return new Ae({location:"cpu-pinned",data:t.data,type:t.type,dims:n});case"texture":return new Ae({location:"texture",texture:t.texture,type:t.type,dims:n});case"gpu-buffer":return new Ae({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:n});case"ml-tensor":return new Ae({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:n});default:throw new Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),Ae,xt=x(()=>{he(),_e(),ge(),mt(),Ae=class{constructor(t,n,a){et();let o,l;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,o=t.type,l=t.dims,t.location){case"cpu-pinned":{let d=xe.get(o);if(!d)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(t.data instanceof d))throw new TypeError(`buffer should be of type ${d.name}`);this.cpuData=t.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let d,p;if(typeof t=="string")if(o=t,p=a,t==="string"){if(!Array.isArray(n))throw new TypeError("A string tensor's data must be a string array.");d=n}else{let h=xe.get(t);if(h===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(n)){if(t==="float16"&&h===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${h.name} as data.`);t==="uint64"||t==="int64"?d=h.from(n,BigInt):d=h.from(n)}else if(n instanceof h)d=n;else if(n instanceof Uint8ClampedArray)if(t==="uint8")d=Uint8Array.from(n);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&n instanceof Uint16Array&&h!==Uint16Array)d=new globalThis.Float16Array(n.buffer,n.byteOffset,n.length);else throw new TypeError(`A ${o} tensor's data must be type of ${h}`)}else if(p=n,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof t[0];if(h==="string")o="string",d=t;else if(h==="boolean")o="bool",d=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${h}.`)}else if(t instanceof Uint8ClampedArray)o="uint8",d=Uint8Array.from(t);else{let h=ze.get(t.constructor);if(h===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);o=h,d=t}if(p===void 0)p=[d.length];else if(!Array.isArray(p))throw new TypeError("A tensor's dims must be a number array");l=p,this.cpuData=d,this.dataLocation="cpu"}let u=Ee(l);if(this.cpuData&&u!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=l,this.size=u}static async fromImage(t,n){return Wt(t,n)}static fromTexture(t,n){return Or(t,n)}static fromGpuBuffer(t,n){return Pe(t,n)}static fromMLTensor(t,n){return ur(t,n)}static fromPinnedBuffer(t,n,a){return ne(t,n,a)}toDataURL(t){return Se(this,t)}toImageData(t){return ut(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let n=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=n,t&&this.disposer&&(this.disposer(),this.disposer=void 0),n}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ye(this,t)}}}),Ot,Qr=x(()=>{xt(),Ot=Ae}),Sn,Gt,gt,Et,tr,dr,Te=x(()=>{se(),Sn=(t,n)=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeStamp(`${t}::ORT::${n}`)},Gt=(t,n)=>{var l;let a=((l=new Error().stack)==null?void 0:l.split(/\r\n|\r|\n/g))||[],o=!1;for(let u=0;u<a.length;u++){if(o&&!a[u].includes("TRACE_FUNC")){let d=`FUNC_${t}::${a[u].trim().split(" ")[1]}`;n&&(d+=`::${n}`),Sn("CPU",d);return}a[u].includes("TRACE_FUNC")&&(o=!0)}},gt=t=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||Gt("BEGIN",t)},Et=t=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||Gt("END",t)},tr=t=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.time(`ORT::${t}`)},dr=t=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeEnd(`ORT::${t}`)}}),ei,N_=x(()=>{M(),Qr(),Te(),ei=class __{constructor(n){this.handler=n}async run(n,a,o){gt(),tr("InferenceSession.run");let l={},u={};if(typeof n!="object"||n===null||n instanceof Ot||Array.isArray(n))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof Ot)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let m of a){if(typeof m!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(m)===-1)throw new RangeError(`'fetches' contains invalid output name: ${m}.`);l[m]=null}if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let m=!1,y=Object.getOwnPropertyNames(a);for(let v of this.outputNames)if(y.indexOf(v)!==-1){let w=a[v];(w===null||w instanceof Ot)&&(m=!0,d=!1,l[v]=w)}if(m){if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else u=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let m of this.inputNames)if(typeof n[m]>"u")throw new Error(`input '${m}' is missing in 'feeds'.`);if(d)for(let m of this.outputNames)l[m]=null;let p=await this.handler.run(n,l,u),h={};for(let m in p)if(Object.hasOwnProperty.call(p,m)){let y=p[m];y instanceof Ot?h[m]=y:h[m]=new Ot(y.type,y.data,y.dims)}return dr("InferenceSession.run"),Et(),h}async release(){return this.handler.dispose()}static async create(n,a,o,l){gt(),tr("InferenceSession.create");let u,d={};if(typeof n=="string"){if(u=n,typeof a=="object"&&a!==null)d=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(n instanceof Uint8Array){if(u=n,typeof a=="object"&&a!==null)d=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(n instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer){let y=n,v=0,w=n.byteLength;if(typeof a=="object"&&a!==null)d=a;else if(typeof a=="number"){if(v=a,!Number.isSafeInteger(v))throw new RangeError("'byteOffset' must be an integer.");if(v<0||v>=y.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${y.byteLength}).`);if(w=n.byteLength-v,typeof o=="number"){if(w=o,!Number.isSafeInteger(w))throw new RangeError("'byteLength' must be an integer.");if(w<=0||v+w>y.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${y.byteLength-v}].`);if(typeof l=="object"&&l!==null)d=l;else if(typeof l<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof a<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(y,v,w)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[p,h]=await $e(d),m=await p.createInferenceSessionHandler(u,h);return dr("InferenceSession.create"),Et(),new __(m)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Do,R_=x(()=>{N_(),Do=ei}),O_=x(()=>{}),A_=x(()=>{}),M_=x(()=>{}),P_=x(()=>{}),Lc={};N(Lc,{InferenceSession:()=>Do,TRACE:()=>Sn,TRACE_EVENT_BEGIN:()=>tr,TRACE_EVENT_END:()=>dr,TRACE_FUNC_BEGIN:()=>gt,TRACE_FUNC_END:()=>Et,Tensor:()=>Ot,env:()=>Y,registerBackend:()=>G});var rr=x(()=>{R(),Ue(),R_(),Qr(),O_(),A_(),Te(),M_(),P_()}),Bo=x(()=>{}),jc={};N(jc,{default:()=>Uc});var Lo,jo,Uc,D_=x(()=>{var t;vy(),En(),Wo(),Lo="ort-wasm-proxy-worker",jo=((t=globalThis.self)==null?void 0:t.name)===Lo,jo&&(self.onmessage=n=>{let{type:a,in:o}=n.data;try{switch(a){case"init-wasm":Ko(o.wasm).then(()=>{au(o).then(()=>{postMessage({type:a})},l=>{postMessage({type:a,err:l})})},l=>{postMessage({type:a,err:l})});break;case"init-ep":{let{epName:l,env:u}=o;su(u,l).then(()=>{postMessage({type:a})},d=>{postMessage({type:a,err:d})});break}case"copy-from":{let{buffer:l}=o,u=ds(l);postMessage({type:a,out:u});break}case"create":{let{model:l,options:u}=o;lu(l,u).then(d=>{postMessage({type:a,out:d})},d=>{postMessage({type:a,err:d})});break}case"release":uu(o),postMessage({type:a});break;case"run":{let{sessionId:l,inputIndices:u,inputs:d,outputIndices:p,options:h}=o;cu(l,u,d,p,new Array(p.length).fill(null),h).then(m=>{m.some(y=>y[3]!=="cpu")?postMessage({type:a,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:a,out:m},fu([...d,...m]))},m=>{postMessage({type:a,err:m})});break}case"end-profiling":pu(o),postMessage({type:a});break;default:}}catch(l){postMessage({type:a,err:l})}}),Uc=jo?null:n=>new Worker(n??Ht,{type:"classic",name:Lo})}),Vc,Fc,Ht,Uo,Ga,qc,Wc,Vo,Gc,Fo,Hc,qo,Kc,Wo=x(()=>{Bo(),Vc=typeof location>"u"?void 0:location.origin,Fc=()=>{var t,n;return typeof document<"u"?(t=document.currentScript)==null?void 0:t.src:typeof self<"u"?(n=self.location)==null?void 0:n.href:void 0},Ht=Fc(),Uo=()=>{if(Ht&&!Ht.startsWith("blob:"))return Ht.substring(0,Ht.lastIndexOf("/")+1)},Ga=(t,n)=>{try{let a=n??Ht;return(a?new URL(t,a):new URL(t)).origin===Vc}catch{return!1}},qc=(t,n)=>{let a=n??Ht;try{return(a?new URL(t,a):new URL(t)).href}catch{return}},Wc=(t,n)=>`${n??"./"}${t}`,Vo=async t=>{let n=await(await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(n)},Gc=async t=>(await sk(()=>import(t),[])).default,Fo=(D_(),B(jc)).default,Hc=async()=>{if(!Ht)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ga(Ht))return[void 0,Fo()];let t=await Vo(Ht);return[t,Fo(t)]},qo=void 0,Kc=async(t,n,a,o)=>{let l=qo&&!(t||n);if(l)if(Ht)l=Ga(Ht)||o&&!a;else if(o&&!a)l=!0;else throw new Error("cannot determine the script source URL.");if(l)return[void 0,qo];{let u="ort-wasm-simd-threaded.jsep.mjs",d=t??qc(u,n),p=a&&d&&!Ga(d,n),h=p?await Vo(d):d??Wc(u,n);return[p?h:void 0,await Gc(h)]}}}),Go,Ha,Pi,Ho,Qc,Xc,Zc,Ko,Ge,En=x(()=>{Wo(),Ha=!1,Pi=!1,Ho=!1,Qc=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Xc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Zc=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ko=async t=>{if(Ha)return Promise.resolve();if(Pi)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ho)throw new Error("previous call to 'initializeWebAssembly()' failed.");Pi=!0;let n=t.initTimeout,a=t.numThreads;if(t.simd!==!1){if(t.simd==="relaxed"){if(!Zc())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Xc())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let o=Qc();a>1&&!o&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+a+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=a=1);let l=t.wasmPaths,u=typeof l=="string"?l:void 0,d=l==null?void 0:l.mjs,p=(d==null?void 0:d.href)??d,h=l==null?void 0:l.wasm,m=(h==null?void 0:h.href)??h,y=t.wasmBinary,[v,w]=await Kc(p,u,a>1,!!y||!!m),_=!1,$=[];if(n>0&&$.push(new Promise(S=>{setTimeout(()=>{_=!0,S()},n)})),$.push(new Promise((S,I)=>{let E={numThreads:a};if(y)E.wasmBinary=y,E.locateFile=k=>k;else if(m||u)E.locateFile=k=>m??u+k;else if(p&&p.indexOf("blob:")!==0)E.locateFile=k=>new URL(k,p).href;else if(v){let k=Uo();k&&(E.locateFile=C=>k+C)}w(E).then(k=>{Pi=!1,Ha=!0,Go=k,S(),v&&URL.revokeObjectURL(v)},k=>{Pi=!1,Ho=!0,I(k)})})),await Promise.race($),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${n}ms`)},Ge=()=>{if(Ha&&Go)return Go;throw new Error("WebAssembly is not initialized yet.")}}),cr,Ka,je,Qo=x(()=>{En(),cr=(t,n)=>{let a=Ge(),o=a.lengthBytesUTF8(t)+1,l=a._malloc(o);return a.stringToUTF8(t,l,o),n.push(l),l},Ka=(t,n,a,o)=>{if(typeof t=="object"&&t!==null){if(a.has(t))throw new Error("Circular reference in options");a.add(t)}Object.entries(t).forEach(([l,u])=>{let d=n?n+l:l;if(typeof u=="object")Ka(u,d+".",a,o);else if(typeof u=="string"||typeof u=="number")o(d,u.toString());else if(typeof u=="boolean")o(d,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},je=t=>{let n=Ge(),a=n.stackSave();try{let o=n.PTR_SIZE,l=n.stackAlloc(2*o);n._OrtGetLastError(l,l+o);let u=Number(n.getValue(l,o===4?"i32":"i64")),d=n.getValue(l+o,"*"),p=d?n.UTF8ToString(d):"";throw new Error(`${t} ERROR_CODE: ${u}, ERROR_MESSAGE: ${p}`)}finally{n.stackRestore(a)}}}),Yc,B_=x(()=>{En(),Qo(),Yc=t=>{let n=Ge(),a=0,o=[],l=t||{};try{if((t==null?void 0:t.logSeverityLevel)===void 0)l.logSeverityLevel=2;else if(typeof t.logSeverityLevel!="number"||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${t.logSeverityLevel}`);if((t==null?void 0:t.logVerbosityLevel)===void 0)l.logVerbosityLevel=0;else if(typeof t.logVerbosityLevel!="number"||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);(t==null?void 0:t.terminate)===void 0&&(l.terminate=!1);let u=0;return(t==null?void 0:t.tag)!==void 0&&(u=cr(t.tag,o)),a=n._OrtCreateRunOptions(l.logSeverityLevel,l.logVerbosityLevel,!!l.terminate,u),a===0&&je("Can't create run options."),(t==null?void 0:t.extra)!==void 0&&Ka(t.extra,"",new WeakSet,(d,p)=>{let h=cr(d,o),m=cr(p,o);n._OrtAddRunConfigEntry(a,h,m)!==0&&je(`Can't set a run config entry: ${d} - ${p}.`)}),[a,o]}catch(u){throw a!==0&&n._OrtReleaseRunOptions(a),o.forEach(d=>n._free(d)),u}}}),Jc,ep,tp,Tn,rp,np,L_=x(()=>{En(),Qo(),Jc=t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${t}`)}},ep=t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${t}`)}},tp=t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let n=t.extra.session;n.use_ort_model_bytes_directly||(n.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(a=>(typeof a=="string"?a:a.name)==="webgpu")&&(t.enableMemPattern=!1)},Tn=(t,n,a,o)=>{let l=cr(n,o),u=cr(a,o);Ge()._OrtAddSessionConfigEntry(t,l,u)!==0&&je(`Can't set a session config entry: ${n} - ${a}.`)},rp=async(t,n,a)=>{let o=n.executionProviders;for(let l of o){let u=typeof l=="string"?l:l.name,d=[];switch(u){case"webnn":if(u="WEBNN",Tn(t,"session.disable_quant_qdq","1",a),Tn(t,"session.disable_qdq_constant_folding","1",a),typeof l!="string"){let v=l==null?void 0:l.deviceType;v&&Tn(t,"deviceType",v,a)}break;case"webgpu":if(u="JS",typeof l!="string"){let v=l;if(v!=null&&v.preferredLayout){if(v.preferredLayout!=="NCHW"&&v.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${v.preferredLayout}`);Tn(t,"preferredLayout",v.preferredLayout,a)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let p=cr(u,a),h=d.length,m=0,y=0;if(h>0){m=Ge()._malloc(h*Ge().PTR_SIZE),a.push(m),y=Ge()._malloc(h*Ge().PTR_SIZE),a.push(y);for(let v=0;v<h;v++)Ge().setValue(m+v*Ge().PTR_SIZE,d[v][0],"*"),Ge().setValue(y+v*Ge().PTR_SIZE,d[v][1],"*")}await Ge()._OrtAppendExecutionProvider(t,p,m,y,h)!==0&&je(`Can't append execution provider: ${u}.`)}},np=async t=>{let n=Ge(),a=0,o=[],l=t||{};tp(l);try{let u=Jc(l.graphOptimizationLevel??"all"),d=ep(l.executionMode??"sequential"),p=typeof l.logId=="string"?cr(l.logId,o):0,h=l.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log severity level is not valid: ${h}`);let m=l.logVerbosityLevel??0;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log verbosity level is not valid: ${m}`);let y=typeof l.optimizedModelFilePath=="string"?cr(l.optimizedModelFilePath,o):0;if(a=n._OrtCreateSessionOptions(u,!!l.enableCpuMemArena,!!l.enableMemPattern,d,!!l.enableProfiling,0,p,h,m,y),a===0&&je("Can't create session options."),l.executionProviders&&await rp(a,l,o),l.enableGraphCapture!==void 0){if(typeof l.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${l.enableGraphCapture}`);Tn(a,"enableGraphCapture",l.enableGraphCapture.toString(),o)}if(l.freeDimensionOverrides)for(let[v,w]of Object.entries(l.freeDimensionOverrides)){if(typeof v!="string")throw new Error(`free dimension override name must be a string: ${v}`);if(typeof w!="number"||!Number.isInteger(w)||w<0)throw new Error(`free dimension override value must be a non-negative integer: ${w}`);let _=cr(v,o);n._OrtAddFreeDimensionOverride(a,_,w)!==0&&je(`Can't set a free dimension override: ${v} - ${w}.`)}return l.extra!==void 0&&Ka(l.extra,"",new WeakSet,(v,w)=>{Tn(a,v,w,o)}),[a,o]}catch(u){throw a!==0&&n._OrtReleaseSessionOptions(a)!==0&&je("Can't release session options."),o.forEach(d=>n._free(d)),u}}}),In,Ar,zn,Qa,Xa,Xo,Zo,Yo,ve=x(()=>{In=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${t}`)}},Ar=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${t}`)}},zn=(t,n)=>{let a=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],o=typeof n=="number"?n:n.reduce((l,u)=>l*u,1);return a>0?Math.ceil(o*a):void 0},Qa=t=>{switch(t){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${t}`)}},Xa=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${t}`)}},Xo=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Zo=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint64"||t==="int8"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Yo=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${t}`)}}}),Jo,ip=x(()=>{Bo(),Jo=async t=>{if(typeof t=="string"){let n=await fetch(t);if(!n.ok)throw new Error(`failed to load external data file: ${t}`);let a=n.headers.get("Content-Length"),o=a?parseInt(a,10):0;if(o<1073741824)return new Uint8Array(await n.arrayBuffer());{if(!n.body)throw new Error(`failed to load external data file: ${t}, no response body.`);let l=n.body.getReader(),u;try{u=new ArrayBuffer(o)}catch(p){if(p instanceof RangeError){let h=Math.ceil(o/65536);u=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw p}let d=0;for(;;){let{done:p,value:h}=await l.read();if(p)break;let m=h.byteLength;new Uint8Array(u,d,m).set(h),d+=m}return new Uint8Array(u,0,o)}}else return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t)}}),ap,sp,op,lp,el,up,Ce,Mr=x(()=>{ve(),ap=["V","I","W","E","F"],sp=(t,n)=>{console.log(`[${ap[t]},${new Date().toISOString()}]${n}`)},el=(t,n)=>{op=t,lp=n},up=(t,n)=>{let a=Xa(t),o=Xa(op);a>=o&&sp(a,typeof n=="function"?n():n)},Ce=(...t)=>{lp&&up(...t)}}),dp,ti,U,Za,cp,pp,fp,be=x(()=>{dp=class{static calcMatMulShape(t,n){return t[1]!==n[0]?void 0:[t[0],n[1]]}},ti=class{static calcShape(t,n,a=!1){let o=t.length,l=n.length;if(o===0)return n;if(l===0)return t;let u=Math.max(t.length,n.length),d=new Array(u);if(a){if(o<2||l<2)return;let p=dp.calcMatMulShape([t[o-2],t[o-1]],[n[l-2],n[l-1]]);if(p===void 0)return;[d[u-2],d[u-1]]=p}for(let p=a?3:1;p<=u;p++){let h=o-p<0?1:t[o-p],m=l-p<0?1:n[l-p];if(h!==m&&h>1&&m>1)return;let y=Math.max(h,m);if(h&&m)d[u-p]=Math.max(h,m);else{if(y>1)return;d[u-p]=0}}return d}static isValidBroadcast(t,n){let a=t.length,o=n.length;if(a>o)return!1;for(let l=1;l<=a;l++)if(t[a-l]!==1&&t[a-l]!==n[o-l])return!1;return!0}},U=class Ks{static size(n){return Ks.getSizeFromDimensionRange(n,0,n.length)}static convertShape(n,a=4){let o=n.length;if(o===0)return[];let l=new Array(o),u=o-1;for(;u>=0;){if(n[u]%a===0){l[u]=n[u]/a;break}if(a%n[u]!==0)throw new Error("cannot convert shape");l[u]=1,a/=n[u],u--}for(u--;u>=0;u--)l[u]=n[u];return l}static sizeFromDimension(n,a){if(a<0||a>n.length)throw new Error(`invalid dimension of ${a} for sizeFromDimension as Tensor has ${n.length} dimensions.`);return Ks.getSizeFromDimensionRange(n,a,n.length)}static sizeToDimension(n,a){if(a<0||a>n.length)throw new Error(`invalid dimension of ${a} for sizeToDimension as Tensor has ${n.length} dimensions.`);return Ks.getSizeFromDimensionRange(n,0,a)}static getSizeFromDimensionRange(n,a,o){let l=1;for(let u=a;u<o;u++){if(n[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");l*=Number(n[u])}return l}static computeStrides(n){let a=n.length;if(a===0)return[];if(a===1)return[1];let o=new Array(a);o[a-1]=1,o[a-2]=n[a-1];for(let l=a-3;l>=0;--l)o[l]=o[l+1]*n[l+1];return o}static normalizeAxis(n,a){if(n<-a&&n>=a)throw new Error("unsupported axis for this operation.");return n<0?n+a:n}static normalizeAxes(n,a){return n.map(o=>this.normalizeAxis(o,a??n.length))}static sortBasedOnPerm(n,a){return a?a.map(o=>n[o]):n.slice().reverse()}static padShape(n,a){let o=n.length;return n.map((l,u)=>l+a[u]+a[u+o])}static areEqual(n,a){return n.length!==a.length?!1:n.every((o,l)=>o===a[l])}},Za=class pa{static adjustPoolAttributes(n,a,o,l,u,d){if(!n&&o.length!==a.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(n)for(let p=0;p<a.length-2;p++)p>=o.length?o.push(a[p+2]):o[p]=a[p+2];for(let p=0;p<o.length;p++)if(p<l.length){if(l[p]<0)throw new Error("strides should be greater than or equal to 1")}else l.push(1);for(let p=0;p<o.length;p++)if(p<u.length){if(u[p]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let p=0;p<o.length*2;p++)if(p<d.length){if(d[p]<0)throw new Error("pad should be greater than or equal to 1")}else d.push(0);for(let p=0;p<o.length;p++){if(o[p]<=0)throw new Error("kernel shapes need to be greater than 0");if(d[p]>=o[p]||d[p+o.length]>=o[p])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(n,a,o,l,u,d,p){if(p){if(u.length!==2*(n.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(a.length!==n.length-2)throw new Error("length of strides should be the length of data dimensions");if(l.length!==n.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let h=0;h<n.length-2;h++)pa.adjustPadAndReturnShape(n[h+(d?1:2)],a[h],o[h],l[h],u,h,h+n.length-2,p)}}static computePoolOutputShape(n,a,o,l,u,d,p){if(a.length<=0)throw new Error("input shape must be of size greater than 0");let h=[a[0],a[1]];return pa.computeShapeHelper(n,a,h,o,l,u,d,p),h}static computeConvOutputShape(n,a,o,l,u,d,p){if(n.length<=0||a.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let h=[n[0],a[0]];return pa.computeShapeHelper(!1,n,h,o,l,u,d,p),h}static computeShapeHelper(n,a,o,l,u,d,p,h){if(n)for(let m=0;m<a.length-2;m++)o.push(1);else for(let m=0;m<a.length-2;m++)o.push(pa.adjustPadAndReturnShape(a[m+2],l[m],u[m],d[m],p,m,m+a.length-2,h))}static adjustPadAndReturnShape(n,a,o,l,u,d,p,h){let m=o*(l-1)+1;if(h&&h!=="NOTSET")switch(h){case"VALID":return u[d]=0,u[p]=0,Math.floor((n-m)/a+1);case"SAME_LOWER":case"SAME_UPPER":if(o!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let y=((n+a-1)/a-1)*a+l-n;return u[d]=Math.floor(h==="SAME_LOWER"?(y+1)/2:y/2),u[p]=y-u[d],Math.floor((n+y-l)/a+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((n+u[d]+u[p]-m)/a+1)}},cp=class{static getShapeOfGemmResult(t,n,a,o,l){if(t.length!==2||a.length!==2)throw new Error("shape need to be of size 2");let u,d,p;n?(u=t[1],d=t[0]):(u=t[0],d=t[1]);let h=-1;if(o?(p=a[0],h=1):(p=a[1],h=0),a[h]!==d)throw new Error("dimension mismatch");if(u<=0||p<=0||d<=0)throw new Error("invalid shape specified");if(l&&!ti.isValidBroadcast(l,[u,p]))throw new Error("gemm: invalid bias shape for broadcast");return[u,p,d]}},pp=-34028234663852886e22,fp=34028234663852886e22}),tl,hp=x(()=>{ve(),tl=(t,n)=>new(Qa(n))(t)}),rl,nl,il,mp,al,gp,sl,ol,ll,yp,vp,j_=x(()=>{ve(),Mr(),rl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),nl=(t,n)=>{if(n==="int32")return t;let a=rl.get(n);if(!a)throw new Error(`WebNN backend does not support data type: ${n}`);let o=a/8;if(t.byteLength%o!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${o}.`);let l=t.byteLength/o,u=new(Qa(n))(t.buffer,t.byteOffset,l);switch(n){case"int64":case"uint64":{let d=new Int32Array(l);for(let p=0;p<l;p++){let h=u[p];if(h>2147483647n||h<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");d[p]=Number(h)}return new Uint8Array(d.buffer)}case"int8":case"uint8":case"uint32":{if(n==="uint32"&&u.some(p=>p>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let d=Int32Array.from(u,Number);return new Uint8Array(d.buffer)}default:throw new Error(`Unsupported data conversion from ${n} to 'int32'`)}},il=(t,n)=>{if(n==="int32")return t;if(t.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let a=t.byteLength/4,o=new Int32Array(t.buffer,t.byteOffset,a);switch(n){case"int64":{let l=BigInt64Array.from(o,BigInt);return new Uint8Array(l.buffer)}case"uint64":{if(o.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let l=BigUint64Array.from(o,BigInt);return new Uint8Array(l.buffer)}case"int8":{if(o.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let l=Int8Array.from(o,Number);return new Uint8Array(l.buffer)}case"uint8":{if(o.some(l=>l<0||l>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(o,Number)}case"uint32":{if(o.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let l=Uint32Array.from(o,Number);return new Uint8Array(l.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${n}`)}},mp=1,al=()=>mp++,gp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),sl=(t,n)=>{let a=rl.get(t);if(!a)throw new Error(`WebNN backend does not support data type: ${t}`);return n.length>0?Math.ceil(n.reduce((o,l)=>o*l)*a/8):0},ol=class{constructor(t){this.isDataConverted=!1;let{sessionId:n,context:a,tensor:o,dataType:l,shape:u,fallbackDataType:d}=t;this.sessionId=n,this.mlContext=a,this.mlTensor=o,this.dataType=l,this.tensorShape=u,this.fallbackDataType=d}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return sl(this.dataType,this.tensorShape)}destroy(){Ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(this.fallbackDataType){let n=await this.mlContext.readTensor(this.mlTensor),a=il(new Uint8Array(n),this.dataType);if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(a);return}else return a.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,n,a){return this.mlContext===t&&this.dataType===n&&this.tensorShape.length===a.length&&this.tensorShape.every((o,l)=>o===a[l])}setIsDataConverted(t){this.isDataConverted=t}},ll=class{constructor(t,n){this.tensorManager=t,this.wrapper=n}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,n,a,o){let l=this.tensorManager.getMLContext(t),u=this.tensorManager.getMLOpSupportLimits(t),d;if(!(u!=null&&u.input.dataTypes.includes(n))){if(d=gp.get(n),!d||(u==null?void 0:u.input.dataTypes.includes(d)))throw new Error(`WebNN backend does not support data type: ${n}`);Ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${n} to ${d}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(l,n,a))return this.wrapper.tensor;if(o){if(this.wrapper.byteLength!==sl(n,a))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let p=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,n,a,p,!0,!0,d),o&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let n=t;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")n=nl(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(n);return}else Ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(n):this.activeUpload=new Uint8Array(n)}async download(t){var n,a;if(this.activeUpload){let o=(n=this.wrapper)!=null&&n.isDataConverted?il(this.activeUpload,(a=this.wrapper)==null?void 0:a.type):this.activeUpload;if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(o):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(o);return}else return o.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},yp=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let n=this.backend.getMLContext(t);if(!n)throw new Error("MLContext not found for session.");return n}getMLOpSupportLimits(t){return this.backend.getMLOpSupportLimits(t)}reserveTensorId(){let t=al();return this.tensorTrackersById.set(t,new ll(this)),t}releaseTensorId(t){let n=this.tensorTrackersById.get(t);n&&(this.tensorTrackersById.delete(t),n.tensorWrapper&&this.releaseTensor(n.tensorWrapper))}async ensureTensor(t,n,a,o,l){Ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${n}, dataType: ${a}, shape: ${o}, copyOld: ${l}}`);let u=this.tensorTrackersById.get(n);if(!u)throw new Error("Tensor not found.");return u.ensureTensor(t,a,o,l)}upload(t,n){let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");a.upload(n)}async download(t,n){Ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${n==null?void 0:n.byteLength}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.download(n)}releaseTensorsForSession(t){for(let n of this.freeTensors)n.sessionId===t&&n.destroy();this.freeTensors=this.freeTensors.filter(n=>n.sessionId!==t)}registerTensor(t,n,a,o){let l=this.getMLContext(t),u=al(),d=new ol({sessionId:t,context:l,tensor:n,dataType:a,shape:o});return this.tensorTrackersById.set(u,new ll(this,d)),this.externalTensors.add(d),u}async getCachedTensor(t,n,a,o,l,u,d){let p=this.getMLContext(t);for(let[m,y]of this.freeTensors.entries())if(y.canReuseTensor(p,n,a)){Ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${n}, ${d?`fallbackDataType: ${d},`:""} shape: ${a}`);let v=this.freeTensors.splice(m,1)[0];return v.sessionId=t,v}Ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${n}, ${d?`fallbackDataType: ${d},`:""} shape: ${a}}`);let h=await p.createTensor({dataType:d??n,shape:a,dimensions:a,usage:o,writable:l,readable:u});return new ol({sessionId:t,context:p,tensor:h,dataType:n,shape:a,fallbackDataType:d})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},vp=(...t)=>new yp(...t)}),Di,wp,_p,U_=x(()=>{ve(),En(),hp(),j_(),Mr(),Di=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),wp=(t,n)=>{if(t===n)return!0;if(t===void 0||n===void 0)return!1;let a=Object.keys(t).sort(),o=Object.keys(n).sort();return a.length===o.length&&a.every((l,u)=>l===o[u]&&t[l]===n[l])},_p=class{constructor(t){this.tensorManager=vp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,el(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){Ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){Ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let n=this.temporarySessionTensorIds.get(t);if(n){for(let a of n)Ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${a}}`),this.tensorManager.releaseTensorId(a);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let a=this.mlContextCache.findIndex(o=>o.gpuDevice===t);if(a!==-1)return this.mlContextCache[a].mlContext;{let o=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:o}),o}}else if(t===void 0){let a=this.mlContextCache.findIndex(o=>o.options===void 0&&o.gpuDevice===void 0);if(a!==-1)return this.mlContextCache[a].mlContext;{let o=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:o}),o}}let n=this.mlContextCache.findIndex(a=>wp(a.options,t));if(n!==-1)return this.mlContextCache[n].mlContext;{let a=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:a}),a}}registerMLContext(t,n){this.mlContextBySessionId.set(t,n);let a=this.sessionIdsByMLContext.get(n);a||(a=new Set,this.sessionIdsByMLContext.set(n,a)),a.add(t),this.mlOpSupportLimitsBySessionId.has(t)||this.mlOpSupportLimitsBySessionId.set(t,n.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let n=this.mlContextBySessionId.get(t);if(!n)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t),this.mlOpSupportLimitsBySessionId.delete(t);let a=this.sessionIdsByMLContext.get(n);if(a.delete(t),a.size===0){this.sessionIdsByMLContext.delete(n);let o=this.mlContextCache.findIndex(l=>l.mlContext===n);o!==-1&&this.mlContextCache.splice(o,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}getMLOpSupportLimits(t){return this.mlOpSupportLimitsBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){Ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,n,a,o,l){let u=Di.get(a);if(!u)throw new Error(`Unsupported ONNX data type: ${a}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,n,u,o,l)}async createTemporaryTensor(t,n,a){Ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${n}, shape: ${a}}`);let o=Di.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);let l=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,l,o,a,!1);let u=this.temporarySessionTensorIds.get(t);return u?u.push(l):this.temporarySessionTensorIds.set(t,[l]),l}uploadTensor(t,n){if(!Ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${n.byteLength}}`),this.tensorManager.upload(t,n)}async downloadTensor(t,n){return this.tensorManager.download(t,n)}createMLTensorDownloader(t,n){return async()=>{let a=await this.tensorManager.download(t);return tl(a,n)}}registerMLTensor(t,n,a,o){let l=Di.get(a);if(!l)throw new Error(`Unsupported ONNX data type: ${a}`);let u=this.tensorManager.registerTensor(t,n,l,o);return Ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${n}, dataType: ${l}, dimensions: ${o}} -> {tensorId: ${u}}`),u}registerMLConstant(t,n,a,o,l,u,d=!1){if(!u)throw new Error("External mounted files are not available.");let p=t;t.startsWith("./")&&(p=t.substring(2));let h=u.get(p);if(!h)throw new Error(`File with name ${p} not found in preloaded files.`);if(n+a>h.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let m=h.slice(n,n+a).buffer,y;switch(l.dataType){case"float32":y=new Float32Array(m);break;case"float16":y=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(m):new Uint16Array(m);break;case"int32":y=new Int32Array(m);break;case"uint32":y=new Uint32Array(m);break;case"int64":if(d){let v=nl(new Uint8Array(m),"int64");y=new Int32Array(v.buffer),l.dataType="int32"}else y=new BigInt64Array(m);break;case"uint64":y=new BigUint64Array(m);break;case"int8":y=new Int8Array(m);break;case"int4":case"uint4":case"uint8":y=new Uint8Array(m);break;default:throw new Error(`Unsupported data type: ${l.dataType} in creating WebNN Constant from external data.`)}return Ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${l.dataType}, shape: ${l.shape}}} ${d?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),o.constant(l,y)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,n){let a=this.sessionGraphInputs.get(t);return a?a.includes(n):!1}isGraphOutput(t,n){let a=this.sessionGraphOutputs.get(t);return a?a.includes(n):!1}isGraphInputOutputTypeSupported(t,n,a=!0){let o=Di.get(In(n)),l=this.mlOpSupportLimitsBySessionId.get(t);return typeof o>"u"?!1:a?!!(l!=null&&l.input.dataTypes.includes(o)):!!(l!=null&&l.output.dataTypes.includes(o))}flush(){}}}),ul=x(()=>{}),dl,Ya,Ja,xp,$p,cl,pl,bp,kp,V_=x(()=>{Mr(),ul(),dl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ya=[],Ja=t=>Math.ceil(Number(t)/16)*16,xp=t=>{for(let n=0;n<Ya.length;n++){let a=Ya[n];if(t<=a)return a}return Math.ceil(t/16)*16},$p=1,cl=()=>$p++,pl=async(t,n,a,o)=>{let l=Ja(a),u=t.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let d=t.getCommandEncoder();t.endComputePass(),d.copyBufferToBuffer(n,0,u,0,l),t.flush(),await u.mapAsync(GPUMapMode.READ);let p=u.getMappedRange();if(o){let h=o();return h.set(new Uint8Array(p,0,a)),h}else return new Uint8Array(p.slice(0,a))}finally{u.destroy()}},bp=class{constructor(t){this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[n]of dl)Ya.push(n),this.freeBuffers.set(n,[]),this.freeUniformBuffers.set(n,[]);this.sessionCount=0}upload(t,n){let a=n.buffer,o=n.byteOffset,l=n.byteLength,u=Ja(l),d=this.storageCache.get(t);if(!d)throw new Error("gpu data for uploading does not exist");if(Number(d.originalSize)!==l)throw new Error(`inconsistent data size. gpu data size=${d.originalSize}, data size=${l}`);let p=this.backend.device.createBuffer({mappedAtCreation:!0,size:u,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),h=p.getMappedRange();new Uint8Array(h).set(new Uint8Array(a,o,l)),p.unmap();let m=this.backend.device.createCommandEncoder();m.copyBufferToBuffer(p,0,d.gpuData.buffer,0,u),this.backend.device.queue.submit([m.finish()]),p.destroy(),Ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,n){let a=this.storageCache.get(t);if(!a)throw new Error("source gpu data for memcpy does not exist");let o=this.storageCache.get(n);if(!o)throw new Error("destination gpu data for memcpy does not exist");if(a.originalSize!==o.originalSize)throw new Error("inconsistent source and destination gpu data size");let l=Ja(a.originalSize),u=this.backend.getCommandEncoder();this.backend.endComputePass(),u.copyBufferToBuffer(a.gpuData.buffer,0,o.gpuData.buffer,0,l)}registerExternalBuffer(t,n,a){let o;if(a){if(o=a[0],t===a[1])return Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${n}) => id=${o}, buffer is the same, skip.`),o;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else o=cl();return this.storageCache.set(o,{gpuData:{id:o,type:0,buffer:t},originalSize:n}),Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${n}) => id=${o}, registered.`),o}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),Ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let a=xp(t),o,l=(n&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,u=(n&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(l||u){let p=(l?this.freeBuffers:this.freeUniformBuffers).get(a);p?p.length>0?o=p.pop():o=this.backend.device.createBuffer({size:a,usage:n}):o=this.backend.device.createBuffer({size:a,usage:n})}else o=this.backend.device.createBuffer({size:a,usage:n});let d={id:cl(),type:0,buffer:o};return this.storageCache.set(d.id,{gpuData:d,originalSize:Number(t)}),Ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${d.id}`),d}get(t){var n;return(n=this.storageCache.get(t))==null?void 0:n.gpuData}release(t){let n=typeof t=="bigint"?Number(t):t,a=this.storageCache.get(n);if(!a){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${n}), gpuDataId=${a.gpuData.id}`),this.storageCache.delete(n),this.buffersPending.push(a.gpuData.buffer),a.originalSize}async download(t,n){let a=this.storageCache.get(Number(t));if(!a)throw new Error("data does not exist");await pl(this.backend,a.gpuData.buffer,a.originalSize,n)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let n=dl.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let a=this.freeBuffers.get(t.size)||[];n===void 0||a.length>=n?t.destroy():a.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let a=this.freeUniformBuffers.get(t.size)||[];n===void 0||a.length>=n?t.destroy():a.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let n of this.buffersPending)t.push(n);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(n=>{n.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(n=>{n.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(n=>{n.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let n=this.capturedPendingBuffers.get(t);n&&(n.forEach(a=>{a.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(Ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(a=>{a.gpuData.buffer.destroy()}),this.storageCache=new Map)}},kp=(...t)=>new bp(...t)}),Sp,Be,tt=x(()=>{Sp=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},Be=t=>new Sp(t)}),ri,es,pt,Tt,de,Ze,fl,ni,Xr,le,Bi,F,ae,Ep,hl,Tp,Ip,ke=x(()=>{ve(),be(),ri=64,es=(t,n)=>{if(n===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return n>1?`vec${n}<f16>`:"f16";case 1:return n>1?`vec${n}<f32>`:"f32";case 6:return n>1?`vec${n}<i32>`:"i32";case 12:return n>1?`vec${n}<u32>`:"u32";case 7:if(n>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(n>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(n!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${t}`)}},pt=(t,n=1)=>{let a=es(t,n);return typeof a=="string"?a:a[0]},Tt=(t,n=1)=>{let a=es(t,n);return typeof a=="string"?a:a[1]},de=(...t)=>{let n=[];return t.forEach(a=>{a.length!==0&&n.push({type:12,data:a},{type:12,data:U.computeStrides(a)})}),n},Ze=t=>t%4===0?4:t%2===0?2:1,fl=(t="f32",n,a="0")=>!n||n===1?`${t}(${a})`:`vec${n}<${t}>(${a})`,ni=(t,n,a)=>t==="f32"?a:n===1?`f32(${a})`:`vec${n}<f32>(${a})`,Xr=(t,n)=>n===4?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:n===2?`(${t}.x + ${t}.y)`:n===3?`(${t}.x + ${t}.y + ${t}.z)`:t,le=(t,n,a,o)=>t.startsWith("uniforms.")&&a>4?typeof n=="string"?o==="f16"?`${t}[(${n}) / 8][(${n}) % 8 / 4][(${n}) % 8 % 4]`:`${t}[(${n}) / 4][(${n}) % 4]`:o==="f16"?`${t}[${Math.floor(n/8)}][${Math.floor(n%8/4)}][${n%8%4}]`:`${t}[${Math.floor(n/4)}][${n%4}]`:a>1?`${t}[${n}]`:t,Bi=(t,n,a,o,l)=>{let u=typeof a=="number",d=u?a:a.length,p=[...new Array(d).keys()],h=d<2?"u32":d<=4?`vec${d}<u32>`:`array<u32, ${d}>`,m=es(n,l),y=typeof m=="string"?m:m[1],v=typeof m=="string"?m:m[0],w={indices:h,value:y,storage:v,tensor:n},_=X=>typeof X=="string"?X:`${X}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=u?"uniforms.":"",I=`${S}${t}_shape`,E=`${S}${t}_strides`,k="";for(let X=0;X<d-1;X++)k+=`
    let dim${X} = current / ${le(E,X,d)};
    let rest${X} = current % ${le(E,X,d)};
    indices[${X}] = dim${X};
    current = rest${X};
    `;k+=`indices[${d-1}] = current;`;let C=d<2?"":`
  fn o2i_${t}(offset: u32) -> ${w.indices} {
    var indices: ${w.indices};
    var current = offset;
    ${k}
    return indices;
  }`,z=X=>($.offsetToIndices=!0,d<2?X:`o2i_${t}(${X})`),O=[];if(d>=2)for(let X=d-1;X>=0;X--)O.push(`${le(E,X,d)} * (indices[${X}])`);let j=d<2?"":`
  fn i2o_${t}(indices: ${w.indices}) -> u32 {
    return ${O.join("+")};
  }`,L=X=>($.indicesToOffset=!0,d<2?X:`i2o_${t}(${X})`),V=(...X)=>d===0?"0u":`${w.indices}(${X.map(_).join(",")})`,q=(X,ie)=>d<2?`${X}`:`${le(X,ie,d)}`,Z=(X,ie,ue)=>d<2?`${X}=${ue};`:`${le(X,ie,d)}=${ue};`,me={},ce=(X,ie)=>{$.broadcastedIndicesToOffset=!0;let ue=`${ie.name}broadcastedIndicesTo${t}Offset`;if(ue in me)return`${ue}(${X})`;let te=[];for(let Fe=d-1;Fe>=0;Fe--){let Dr=ie.indicesGet("outputIndices",Fe+ie.rank-d);te.push(`${q(E,Fe)} * (${Dr} % ${q(I,Fe)})`)}return me[ue]=`fn ${ue}(outputIndices: ${ie.type.indices}) -> u32 {
             return ${te.length>0?te.join("+"):"0u"};
           }`,`${ue}(${X})`},pe=(X,ie)=>(()=>{if(w.storage===w.value)return`${t}[${X}]=${ie};`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`${t}[${X}]=vec2<u32>(u32(${ie}), select(0u, 0xFFFFFFFFu, ${ie} < 0));`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`${t}[${X}]=vec2<u32>(u32(${ie}), 0u);`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`${t}[${X}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ie}));`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),Ie=X=>(()=>{if(w.storage===w.value)return`${t}[${X}]`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`i32(${t}[${X}].x)`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`u32(${t}[${X}].x)`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`vec4<bool>(bool(${t}[${X}] & 0xFFu), bool(${t}[${X}] & 0xFF00u), bool(${t}[${X}] & 0xFF0000u), bool(${t}[${X}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),Re=d<2?"":`
  fn get_${t}ByIndices(indices: ${w.indices}) -> ${y} {
    return ${Ie(`i2o_${t}(indices)`)};
  }`,fe=d<2?"":(()=>{let X=p.map(ue=>`d${ue}: u32`).join(", "),ie=p.map(ue=>`d${ue}`).join(", ");return`
  fn get_${t}(${X}) -> ${y} {
    return get_${t}ByIndices(${V(ie)});
  }`})(),we=(...X)=>{if(X.length!==d)throw new Error(`indices length must be ${d}`);let ie=X.map(_).join(",");return d===0?Ie("0u"):d===1?Ie(ie[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${t}(${ie})`)},st=X=>d<2?Ie(X):($.getByIndices=!0,$.indicesToOffset=!0,`get_${t}ByIndices(${X})`),ee=d<2?"":`
  fn set_${t}ByIndices(indices: ${w.indices}, value: ${y}) {
    ${pe(`i2o_${t}(indices)`,"value")}
  }`,Me=d<2?"":(()=>{let X=p.map(ue=>`d${ue}: u32`).join(", "),ie=p.map(ue=>`d${ue}`).join(", ");return`
  fn set_${t}(${X}, value: ${y}) {
    set_${t}ByIndices(${V(ie)}, value);
  }`})();return{impl:()=>{let X=[],ie=!1;return $.offsetToIndices&&(X.push(C),ie=!0),$.indicesToOffset&&(X.push(j),ie=!0),$.broadcastedIndicesToOffset&&(Object.values(me).forEach(ue=>X.push(ue)),ie=!0),$.set&&(X.push(Me),ie=!0),$.setByIndices&&(X.push(ee),ie=!0),$.get&&(X.push(fe),ie=!0),$.getByIndices&&(X.push(Re),ie=!0),!u&&ie&&X.unshift(`const ${I} = ${w.indices}(${a.join(",")});`,`const ${E} = ${w.indices}(${U.computeStrides(a).join(",")});`),X.join(`
`)},type:w,offsetToIndices:z,indicesToOffset:L,broadcastedIndicesToOffset:ce,indices:V,indicesGet:q,indicesSet:Z,set:(...X)=>{if(X.length!==d+1)throw new Error(`indices length must be ${d}`);let ie=X[d];if(typeof ie!="string")throw new Error("value must be string");let ue=X.slice(0,d).map(_).join(",");return d===0?pe("0u",ie):d===1?pe(ue[0],ie):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${t}(${ue}, ${ie})`)},setByOffset:pe,setByIndices:(X,ie)=>d<2?pe(X,ie):($.setByIndices=!0,$.indicesToOffset=!0,`set_${t}ByIndices(${X}, ${ie});`),get:we,getByOffset:Ie,getByIndices:st,usage:o,name:t,strides:E,shape:I,rank:d}},F=(t,n,a,o=1)=>Bi(t,n,a,"input",o),ae=(t,n,a,o=1)=>Bi(t,n,a,"output",o),Ep=(t,n,a)=>Bi(t,n,a,"atomicOutput",1),hl=(t,n,a,o=1)=>Bi(t,n,a,"internal",o),Tp=class{constructor(t,n){this.normalizedDispatchGroup=t,this.limits=n,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=ri){let n=typeof t=="number"?t:t[0],a=typeof t=="number"?1:t[1],o=typeof t=="number"?1:t[2];if(n>this.limits.maxComputeWorkgroupSizeX||a>this.limits.maxComputeWorkgroupSizeY||o>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${n}, ${a}, ${o}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(n*a*o>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${n}, ${a}, ${o}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let l=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,u=l?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=n=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(n)];return this.uniforms.map(n=>[t(n.type),n.length??1])}},Ip=(t,n)=>new Tp(t,n)}),zp,ml,Cp,Np,Rp,Op,Kt,Ap,Mp,Zr=x(()=>{ve(),be(),tt(),ke(),zp=(t,n)=>{if(!t||t.length!==1)throw new Error("Transpose requires 1 input.");if(n.length!==0&&n.length!==t[0].dims.length)throw new Error(`perm size ${n.length} does not match input rank ${t[0].dims.length}`)},ml=(t,n)=>n.length!==0?n:[...new Array(t).keys()].reverse(),Cp=(t,n)=>U.sortBasedOnPerm(t,ml(t.length,n)),Np=(t,n,a,o)=>{let l=`fn perm(i: ${o.type.indices}) -> ${a.type.indices} {
    var a: ${a.type.indices};`;for(let u=0;u<n;++u)l+=`a[${t[u]}]=i[${u}];`;return l+="return a;}"},Rp=(t,n)=>{let a=[],o=[];for(let l=0;l<t.length;++l)t[l]!==1&&a.push(t[l]),t[n[l]]!==1&&o.push(n[l]);return{newShape:a,newPerm:o}},Op=(t,n)=>{let a=0;for(let o=0;o<t.length;++o)if(n[t[o]]!==1){if(t[o]<a)return!1;a=t[o]}return!0},Kt=(t,n)=>{let a=t.dataType,o=t.dims.length,l=ml(o,n),u=Cp(t.dims,l),d=t.dims,p=u,h=o<2||Op(l,t.dims),m;if(h)return m=$=>{let S=F("input",a,d,4),I=ae("output",a,p,4);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,I)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=U.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil($/64/4)},programUniforms:[{type:12,data:Math.ceil($/4)}]}},getShaderSource:m};let{newShape:y,newPerm:v}=Rp(t.dims,l),w=U.areEqual(v,[2,3,1]),_=U.areEqual(v,[3,1,2]);if(y.length===2||w||_){d=w?[y[0],y[1]*y[2]]:_?[y[0]*y[1],y[2]]:y,p=[d[1],d[0]];let $=16;return m=S=>{let I=F("a",a,d.length),E=ae("output",a,p.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(I,E)}
  var<workgroup> tile : array<array<${E.type.value}, ${$+1}>, ${$}>;
  ${S.mainStart([$,$,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${$} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${$}u + local_id.x;
    let input_row = workgroup_id_x * ${$}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${I.getByIndices(`${I.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${$}u + local_id.x;
    let output_row = workgroup_id_y * ${$}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${E.setByIndices(`${E.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=U.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(p[1]/$),y:Math.ceil(p[0]/$)},programUniforms:[{type:12,data:S},...de(d,p)]}},getShaderSource:m}}return m=$=>{let S=F("a",a,d.length),I=ae("output",a,p.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,I)}

  ${Np(l,o,S,I)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",S.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>{let $=U.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...de(d,p)]}},getShaderSource:m}},Ap=(t,n)=>{zp(t.inputs,n.perm),t.compute(Kt(t.inputs[0],n.perm))},Mp=t=>Be({perm:t.perm})}),Pp,Dp,Bp,Lp,jp,Up,Vp,Fp,qp,Wp,pr,Gp,Hp,Kp,Qp,Xp,Zp,Yp,Jp,ef,tf,F_=x(()=>{ve(),be(),ke(),yl(),Zr(),Pp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Dp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Bp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Lp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},jp=(t,n)=>{let a=[];for(let o=n-t;o<n;++o)a.push(o);return a},Up=(t,n)=>{let a=[],o=t.length;for(let u=0;u<o;u++)n.indexOf(u)===-1&&a.push(t[u]);let l=n.map(u=>t[u]);return[a,l]},Vp=(t,n)=>{let a=t.length+n.length,o=[],l=0;for(let u=0;u<a;u++)n.indexOf(u)===-1?o.push(t[l++]):o.push(1);return o},Fp=(t,n)=>{for(let a=0;a<t.length;++a)if(t[t.length-a-1]!==n-1-a)return!1;return!0},qp=(t,n)=>{let a=[];if(!Fp(t,n)){for(let o=0;o<n;++o)t.indexOf(o)===-1&&a.push(o);t.forEach(o=>a.push(o))}return a},Wp=(t,n,a,o,l,u,d)=>{let p=a[0].dims,h=U.size(u),m=U.size(d),y=F("_A",a[0].dataType,p),v=ae("output",l,u),w=64;h===1&&(w=256);let _=`
          var<workgroup> aBestValues : array<f32, ${w}>;
       `,$=S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(y,v)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(w)}

          let outputIndex = global_idx / ${w};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Bp[o]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${w}) {
           let candidate = f32(${y.getByOffset("offset + k")});
           bestValue = ${Pp[o]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${w}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Dp[o]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${v.setByOffset("outputIndex",`${o==="mean"?`${v.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${v.type.storage}(${Lp[o]})`}`)};
         }
        }`;return{name:t,shaderCache:{hint:`${n};${w}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:l}],dispatchGroup:{x:h},programUniforms:[{type:12,data:m}]})}},pr=(t,n,a,o)=>{let l=t.inputs.length===1?a:gl(t.inputs,a),u=l.axes;u.length===0&&!l.noopWithEmptyAxes&&(u=t.inputs[0].dims.map((_,$)=>$));let d=U.normalizeAxes(u,t.inputs[0].dims.length),p=d,h=t.inputs[0],m=qp(p,t.inputs[0].dims.length);m.length>0&&(h=t.compute(Kt(t.inputs[0],m),{inputs:[0],outputs:[-1]})[0],p=jp(p.length,h.dims.length));let[y,v]=Up(h.dims,p),w=y;l.keepDims&&(w=Vp(y,d)),t.compute(Wp(n,l.cacheKey,[h],o,t.inputs[0].dataType,w,v),{inputs:[h]})},Gp=(t,n)=>{pr(t,"ReduceMeanShared",n,"mean")},Hp=(t,n)=>{pr(t,"ReduceL1Shared",n,"l1")},Kp=(t,n)=>{pr(t,"ReduceL2Shared",n,"l2")},Qp=(t,n)=>{pr(t,"ReduceLogSumExpShared",n,"logSumExp")},Xp=(t,n)=>{pr(t,"ReduceMaxShared",n,"max")},Zp=(t,n)=>{pr(t,"ReduceMinShared",n,"min")},Yp=(t,n)=>{pr(t,"ReduceProdShared",n,"prod")},Jp=(t,n)=>{pr(t,"ReduceSumShared",n,"sum")},ef=(t,n)=>{pr(t,"ReduceSumSquareShared",n,"sumSquare")},tf=(t,n)=>{pr(t,"ReduceLogSumShared",n,"logSum")}}),fr,rf,ts,gl,hr,nf,af,sf,of,lf,uf,df,cf,pf,ff,mr,hf,mf,gf,yf,vf,wf,_f,xf,$f,bf,yl=x(()=>{ve(),be(),tt(),ke(),F_(),fr=t=>{if(!t||t.length===0||t.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(t.length===2&&t[1].dims.length!==1)throw new Error("Invalid axes input dims.")},rf=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],ts=(t,n,a,o,l,u,d=!1,p=!1)=>{let h=[],m=a[0].dims,y=m.length,v=U.normalizeAxes(l,y),w=!p&&v.length===0;m.forEach((S,I)=>{w||v.indexOf(I)>=0?d&&h.push(1):h.push(S)});let _=h.length,$=U.size(h);return{name:t,shaderCache:n,getShaderSource:S=>{let I=[],E=F("_A",a[0].dataType,y),k=ae("output",u,_),C=o(E,k,v),z=C[2];for(let O=0,j=0;O<y;O++)w||v.indexOf(O)>=0?(d&&j++,z=`for(var j${O}: u32 = 0; j${O} < ${m[O]}; j${O}++) {
                  ${C[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${E.indicesSet("input_indices",O,`j${O}`)}
                  ${z}
                }`):(I.push(`${E.indicesSet("input_indices",O,k.indicesGet("output_indices",j))};`),j++);return`

        ${S.registerUniform("output_size","u32").declareVariables(E,k)}

        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${E.type.indices};
          let output_indices = ${k.offsetToIndices("global_idx")};

          ${I.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${z}
          ${C[3]}
          ${C.length===4?k.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:h,dataType:u}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...de(m,h)]})}},gl=(t,n)=>{let a=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(o=>a.push(Number(o))),Be({axes:a,keepDims:n.keepDims,noopWithEmptyAxes:n.noopWithEmptyAxes})},hr=(t,n,a,o)=>{let l=t.inputs,u=l.length===1?a:gl(l,a);t.compute(ts(n,{hint:u.cacheKey,inputDependencies:["rank"]},[l[0]],u.noopWithEmptyAxes&&u.axes.length===0?rf:o,u.axes,l[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},nf=(t,n)=>{fr(t.inputs),hr(t,"ReduceLogSum",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${a.getByIndices("input_indices")};`,"value = log(value);"])},af=(t,n)=>{fr(t.inputs),hr(t,"ReduceL1",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += abs(${a.getByIndices("input_indices")});`,""])},sf=(t,n)=>{fr(t.inputs),hr(t,"ReduceL2",n,(a,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${a.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},of=(t,n)=>{fr(t.inputs),hr(t,"ReduceLogSumExp",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += exp(${a.getByIndices("input_indices")});`,"value = log(value);"])},lf=(t,n)=>{fr(t.inputs),hr(t,"ReduceMax",n,(a,o,l)=>{let u=[];for(let d=0;d<a.rank;d++)(l.indexOf(d)>=0||l.length===0)&&u.push(a.indicesSet("input_indices",d,0));return[`${u.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};`,`value = max(value, ${a.getByIndices("input_indices")});`,""]})},uf=(t,n)=>{fr(t.inputs),hr(t,"ReduceMean",n,(a,o,l)=>{let u=1;for(let d=0;d<a.rank;d++)(l.indexOf(d)>=0||l.length===0)&&(u*=t.inputs[0].dims[d]);return["var sum = f32(0);","",`sum += f32(${a.getByIndices("input_indices")});`,`let value = ${o.type.value}(sum / ${u});`]})},df=(t,n)=>{fr(t.inputs),hr(t,"ReduceMin",n,(a,o,l)=>{let u=[];for(let d=0;d<a.rank;d++)(l.indexOf(d)>=0||l.length===0)&&u.push(`input_indices[${d}] = 0;`);return[`${u.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};`,`value = min(value, ${a.getByIndices("input_indices")});`,""]})},cf=(t,n)=>{fr(t.inputs),hr(t,"ReduceProd",n,(a,o)=>[`var value = ${o.type.storage}(1);`,"",`value *= ${a.getByIndices("input_indices")};`,""])},pf=(t,n)=>{fr(t.inputs),hr(t,"ReduceSum",n,(a,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${a.getByIndices("input_indices")};`,""])},ff=(t,n)=>{fr(t.inputs),hr(t,"ReduceSumSquare",n,(a,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${a.getByIndices("input_indices")}; value += t * t;`,""])},mr=(t,n,a)=>{if(n.length===0)return a;let o=1,l=1;for(let u=0;u<n.length;u++)n.indexOf(u)===-1?o*=t[u]:l*=t[u];return l<32&&o>1024},hf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?uf(t,n):Gp(t,n)},mf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?af(t,n):Hp(t,n)},gf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?sf(t,n):Kp(t,n)},yf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?of(t,n):Qp(t,n)},vf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?lf(t,n):Xp(t,n)},wf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?df(t,n):Zp(t,n)},_f=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?cf(t,n):Yp(t,n)},xf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?pf(t,n):Jp(t,n)},$f=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?ff(t,n):ef(t,n)},bf=(t,n)=>{mr(t.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?nf(t,n):tf(t,n)}}),vl,kf,Sf,wl,q_=x(()=>{ve(),tt(),yl(),vl=t=>{if(!t||t.length===0||t.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(t[0].dataType!==1)throw new Error("Invalid input type.")},kf=(t,n)=>{vl(t.inputs);let a=(o,l,u)=>{let d=[];for(let p=0;p<o.rank;p++)(u.indexOf(p)>=0||u.length===0)&&d.push(`input_indices[${p}] = 0;`);return[`${d.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${n.selectLastIndex>0?"<=":"<"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",l.setByOffset("global_idx","best_index")]};t.compute(ts("ArgMin",{hint:n.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],a,[n.axis],7,n.keepDims),{inputs:[0]})},Sf=(t,n)=>{vl(t.inputs);let a=(o,l,u)=>{let d=[];for(let p=0;p<o.rank;p++)(u.indexOf(p)>=0||u.length===0)&&d.push(`input_indices[${p}] = 0;`);return[`${d.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${n.selectLastIndex>0?">=":">"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",l.setByOffset("global_idx","best_index")]};t.compute(ts("argMax",{hint:n.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],a,[n.axis],7,n.keepDims),{inputs:[0]})},wl=t=>Be(t)}),Ef,rs,Tf,If,zf,Li,Cf,Nf,_l=x(()=>{ve(),be(),ul(),ke(),Ef=(t,n)=>{let a=t[0],o=t[1],l=t[2],u=t[3],d=t[4],p=t[5];if(d&&p)throw new Error("Attention cannot have both past and attention_bias");if(a.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let h=a.dims[0],m=a.dims[1],y=a.dims[2];if(l.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(o.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(o.dims[0]!==y)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(l.dims[0]!==o.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let v=l.dims[0]/3,w=v,_=w;if(n.qkvHiddenSizes.length>0){if(n.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of n.qkvHiddenSizes)if(C%n.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");v=n.qkvHiddenSizes[0],w=n.qkvHiddenSizes[1],_=n.qkvHiddenSizes[2]}let $=m;if(v!==w)throw new Error("qkv_hidden_sizes first element should be same as the second");if(l.dims[0]!==v+w+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(d){if(w!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(d.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(d.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(d.dims[1]!==h)throw new Error('Input "past" second dimension must be batch_size');if(d.dims[2]!==n.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(d.dims[4]!==w/n.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');n.pastPresentShareBuffer||(S=d.dims[3])}let I=$+S,E=-1,k=0;if(u)throw new Error("Mask not supported");if(d)throw new Error("past is not supported");if(p){if(p.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(p.dims[0]!==h||p.dims[1]!==n.numHeads||p.dims[2]!==m||p.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:m,pastSequenceLength:S,kvSequenceLength:$,totalSequenceLength:I,maxSequenceLength:E,inputHiddenSize:y,hiddenSize:v,vHiddenSize:_,headSize:Math.floor(v/n.numHeads),vHeadSize:Math.floor(_/n.numHeads),numHeads:n.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:n.maskFilterValue,maskType:k,scale:n.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},rs=(t,n,a)=>n&&t?`
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
    `,Tf=(t,n,a,o,l,u,d,p)=>{let h=Ze(d?1:u),m=64,y=u/h;y<m&&(m=32);let v=Math.ceil(u/h/m),w=[{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:l},{type:12,data:y},{type:12,data:v}],_=pt(t.dataType,h),$=Tt(1,h),S=["type"];d&&S.push("type"),p&&S.push("type");let I=E=>{let k=ae("x",t.dataType,t.dims,h),C=[k],z=d?F("seq_lens",d.dataType,d.dims):void 0;z&&C.push(z);let O=p?F("total_sequence_length_input",p.dataType,p.dims):void 0;O&&C.push(O);let j=Tt(t.dataType),L=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${m}>;
  var<workgroup> thread_sum: array<f32, ${m}>;
  ${E.registerUniforms(L).declareVariables(...C)}
  ${E.mainStart([m,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${rs(z,O,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${m};${_};${h}`,inputDependencies:S},getShaderSource:I,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:l,z:n*a},programUniforms:w})}},If=(t,n,a,o,l,u,d,p,h)=>{let m=d+u.kvSequenceLength,y=[u.batchSize,u.numHeads,u.sequenceLength,m],v=t>1&&o,w=u.kvNumHeads?u.kvNumHeads:u.numHeads,_=v?[u.batchSize,w,m,u.headSize]:void 0,$=u.nReps?u.nReps:1,S=u.scale===0?1/Math.sqrt(u.headSize):u.scale,I=Ze(u.headSize),E=u.headSize/I,k=12,C={x:Math.ceil(m/k),y:Math.ceil(u.sequenceLength/k),z:u.batchSize*u.numHeads},z=[{type:12,data:u.sequenceLength},{type:12,data:E},{type:12,data:m},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:S},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:$}],O=v&&o&&U.size(o.dims)>0,j=["type","type"];O&&j.push("type"),l&&j.push("type"),p&&j.push("type"),h&&j.push("type");let L=[{dims:y,dataType:n.dataType,gpuDataType:0}];v&&L.push({dims:_,dataType:n.dataType,gpuDataType:0});let V=q=>{let Z=F("q",n.dataType,n.dims,I),me=F("key",a.dataType,a.dims,I),ce=[Z,me];if(O){let ee=F("past_key",o.dataType,o.dims,I);ce.push(ee)}l&&ce.push(F("attention_bias",l.dataType,l.dims));let pe=p?F("seq_lens",p.dataType,p.dims):void 0;pe&&ce.push(pe);let Ie=h?F("total_sequence_length_input",h.dataType,h.dims):void 0;Ie&&ce.push(Ie);let Re=ae("output",n.dataType,y),fe=[Re];v&&fe.push(ae("present_key",n.dataType,_,I));let we=Tt(1,I),st=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${k}u;

  var<workgroup> tileQ: array<${Z.type.storage}, ${k*k}>;
  var<workgroup> tileK: array<${Z.type.storage}, ${k*k}>;
  ${q.registerUniforms(st).declareVariables(...ce,...fe)}
  ${q.mainStart([k,k,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${rs(pe,Ie,!0)}
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
      var sum: f32 = ${(()=>{switch(I){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${I}`)}})()};
        output[outputIdx] = ${Re.type.value} (sum * uniforms.alpha) + ${l?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${I};${l!==void 0};${o!==void 0};${t}`,inputDependencies:j},getRunData:()=>({outputs:L,dispatchGroup:C,programUniforms:z}),getShaderSource:V}},zf=(t,n,a,o,l,u,d=void 0,p=void 0)=>{let h=u+l.kvSequenceLength,m=l.nReps?l.nReps:1,y=l.vHiddenSize*m,v=t>1&&o,w=l.kvNumHeads?l.kvNumHeads:l.numHeads,_=v?[l.batchSize,w,h,l.headSize]:void 0,$=[l.batchSize,l.sequenceLength,y],S=12,I={x:Math.ceil(l.vHeadSize/S),y:Math.ceil(l.sequenceLength/S),z:l.batchSize*l.numHeads},E=[{type:12,data:l.sequenceLength},{type:12,data:h},{type:12,data:l.vHeadSize},{type:12,data:l.numHeads},{type:12,data:l.headSize},{type:12,data:y},{type:12,data:u},{type:12,data:l.kvSequenceLength},{type:12,data:m}],k=v&&o&&U.size(o.dims)>0,C=["type","type"];k&&C.push("type"),d&&C.push("type"),p&&C.push("type");let z=[{dims:$,dataType:n.dataType,gpuDataType:0}];v&&z.push({dims:_,dataType:n.dataType,gpuDataType:0});let O=j=>{let L=F("probs",n.dataType,n.dims),V=F("v",a.dataType,a.dims),q=[L,V];k&&q.push(F("past_value",o.dataType,o.dims));let Z=d?F("seq_lens",d.dataType,d.dims):void 0;d&&q.push(Z);let me=p?F("total_sequence_length_input",p.dataType,p.dims):void 0;p&&q.push(me);let ce=[ae("output",n.dataType,$)];v&&ce.push(ae("present_value",n.dataType,_));let pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${L.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${L.type.value}, ${S*S}>;
  ${j.registerUniforms(pe).declareVariables(...q,...ce)}
  ${j.mainStart([S,S,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${rs(Z,me,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${o!==void 0};${t}`,inputDependencies:C},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:E}),getShaderSource:O}},Li=(t,n,a,o,l,u,d,p,h,m,y=void 0,v=void 0)=>{let w=Math.min(t.outputCount,1+(d?1:0)+(p?1:0)),_=w>1?d:void 0,$=w>1?p:void 0,S=w>1?m.pastSequenceLength:0,I=S+m.kvSequenceLength,E=h&&U.size(h.dims)>0?h:void 0,k=[n,a];_&&U.size(_.dims)>0&&k.push(_),E&&k.push(E),y&&k.push(y),v&&k.push(v);let C=t.compute(If(w,n,a,_,E,m,S,y,v),{inputs:k,outputs:w>1?[-1,1]:[-1]})[0];t.compute(Tf(C,m.batchSize,m.numHeads,S,m.sequenceLength,I,y,v),{inputs:y&&v?[C,y,v]:[C],outputs:[]});let z=[C,o];$&&U.size($.dims)>0&&z.push($),y&&z.push(y),v&&z.push(v),t.compute(zf(w,C,o,$,m,S,y,v),{inputs:z,outputs:w>1?[0,2]:[0]})},Cf=(t,n)=>{let a=[n.batchSize,n.numHeads,n.sequenceLength,n.headSize],o=n.sequenceLength,l=n.inputHiddenSize,u=n.headSize,d=12,p={x:Math.ceil(n.headSize/d),y:Math.ceil(n.sequenceLength/d),z:n.batchSize*n.numHeads},h=[t.inputs[0],t.inputs[1],t.inputs[2]],m=[{type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:n.hiddenSize},{type:12,data:n.hiddenSize+n.hiddenSize+n.vHiddenSize}],y=v=>{let w=ae("output_q",h[0].dataType,a),_=ae("output_k",h[0].dataType,a),$=ae("output_v",h[0].dataType,a),S=F("input",h[0].dataType,h[0].dims),I=F("weight",h[1].dataType,h[1].dims),E=F("bias",h[2].dataType,h[2].dims),k=S.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileInput: array<${k}, ${d*d}>;
  var<workgroup> tileWeightQ: array<${k}, ${d*d}>;
  var<workgroup> tileWeightK: array<${k}, ${d*d}>;
  var<workgroup> tileWeightV: array<${k}, ${d*d}>;
  ${v.registerUniforms(C).declareVariables(S,I,E,w,_,$)}
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
  }`};return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:a,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:a,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:p,programUniforms:m}),getShaderSource:y},{inputs:h,outputs:[-1,-1,-1]})},Nf=(t,n)=>{let a=Ef(t.inputs,n),[o,l,u]=Cf(t,a);return Li(t,o,l,u,t.inputs[4],void 0,void 0,void 0,t.inputs[5],a)}}),Rf,Of,Af,Mf,W_=x(()=>{rr(),ve(),be(),tt(),ke(),Rf=(t,n)=>{if(!t||t.length!==5)throw new Error("BatchNormalization requires 5 inputs");let a=(o,l,u)=>{let d=l.length;if(d!==o.length)throw new Error(`${u}: num dimensions != ${d}`);l.forEach((p,h)=>{if(p!==o[h])throw new Error(`${u}: dim[${h}] do not match`)})};if(t[0].dims.length>1){let o=n.format==="NHWC"?n.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,n.spatial?2:void 0);a(t[1].dims,o,"Invalid input scale"),a(t[2].dims,o,"Invalid input B"),a(t[3].dims,o,"Invalid input mean"),a(t[4].dims,o,"Invalid input var")}else a(t[1].dims,[1],"Invalid input scale"),a(t[2].dims,[1],"Invalid input B"),a(t[3].dims,[1],"Invalid input mean"),a(t[4].dims,[1],"Invalid input var")},Of=(t,n)=>{let{epsilon:a,spatial:o,format:l}=n,u=t[0].dims,d=o?Ze(u[u.length-1]):1,p=l==="NHWC"&&u.length>1?d:1,h=U.size(u)/d,m=o,y=m?u.length:u,v=F("x",t[0].dataType,t[0].dims,d),w=F("scale",t[1].dataType,t[1].dims,p),_=F("bias",t[2].dataType,t[2].dims,p),$=F("inputMean",t[3].dataType,t[3].dims,p),S=F("inputVar",t[4].dataType,t[4].dims,p),I=ae("y",t[0].dataType,y,d),E=()=>{let C="";if(o)C=`let cOffset = ${u.length===1?"0u":l==="NHWC"?`outputIndices[${u.length-1}] / ${d}`:"outputIndices[1]"};`;else if(l==="NCHW")C=`
            ${I.indicesSet("outputIndices","0","0")}
            let cOffset = ${I.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${w.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let z=1;z<w.rank;z++)C+=`cIndices[${z}] = outputIndices[${z}];`;C+=`let cOffset = ${w.indicesToOffset("cIndices")};`}return C},k=C=>`
  const epsilon = ${a};
  ${C.registerUniform("outputSize","u32").declareVariables(v,w,_,$,S,I)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${I.offsetToIndices(`global_idx * ${d}`)};
    ${E()}
    let scale = ${w.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${S.getByOffset("cOffset")};
    let x = ${v.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${I.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${n.epsilon}_${n.format}_${o}_${d}`,inputDependencies:m?["rank","type","type","type","type"]:void 0},getShaderSource:k,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m?[{type:12,data:h},...de(u)]:[{type:12,data:h}]})}},Af=t=>Be(t),Mf=(t,n)=>{let{inputs:a,outputCount:o}=t,l=Af({...n,outputCount:o});if(Y.webgpu.validateInputContent&&Rf(a,l),n.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");t.compute(Of(a,l))}}),Pf,Df,Bf,G_=x(()=>{be(),ke(),Pf=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Df=t=>{let n=t[0].dims,a=t[0].dims[2],o=U.size(n)/4,l=t[0].dataType,u=F("input",l,n,4),d=F("bias",l,[a],4),p=F("residual",l,n,4),h=ae("output",l,n,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:m=>`
  const channels = ${a}u / 4;
  ${m.declareVariables(u,d,p,h)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let value = ${u.getByOffset("global_idx")}
      + ${d.getByOffset("global_idx % channels")} + ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx","value")}
  }`}},Bf=t=>{Pf(t.inputs),t.compute(Df(t.inputs))}}),Lf,De,jf,Uf,Vf,Ff,qf,Wf,Gf,Hf,Kf,Qf,Xf,Zf,Yf,Jf,ji,eh,ns,th,rh,nh,ih,ah,sh,oh,lh,uh,dh,ch,ph,fh,hh,mh,gh,xl,yh,$l,bl,vh,wh,_h,xh,$h,bh,kl=x(()=>{ve(),be(),tt(),ke(),Lf=(t,n,a,o,l,u,d)=>{let p=Math.ceil(n/4),h="";typeof l=="string"?h=`${l}(a)`:h=l("a");let m=F("inputData",a,[p],4),y=ae("outputData",o,[p],4),v=[{name:"vec_size",type:"u32"}];return d&&v.push(...d),`
      ${t.registerUniforms(v).declareVariables(m,y)}

  ${u??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${m.getByOffset("global_idx")};
    ${y.setByOffset("global_idx",h)}
  }`},De=(t,n,a,o,l,u=t.dataType,d,p)=>{let h=[{type:12,data:Math.ceil(U.size(t.dims)/4)}];return d&&h.push(...d),{name:n,shaderCache:{hint:l,inputDependencies:["type"]},getShaderSource:m=>Lf(m,U.size(t.dims),t.dataType,u,a,o,p),getRunData:m=>({outputs:[{dims:t.dims,dataType:u}],dispatchGroup:{x:Math.ceil(U.size(m[0].dims)/64/4)},programUniforms:h})}},jf=t=>{t.compute(De(t.inputs[0],"Abs","abs"))},Uf=t=>{t.compute(De(t.inputs[0],"Acos","acos"))},Vf=t=>{t.compute(De(t.inputs[0],"Acosh","acosh"))},Ff=t=>{t.compute(De(t.inputs[0],"Asin","asin"))},qf=t=>{t.compute(De(t.inputs[0],"Asinh","asinh"))},Wf=t=>{t.compute(De(t.inputs[0],"Atan","atan"))},Gf=t=>{t.compute(De(t.inputs[0],"Atanh","atanh"))},Hf=t=>Be(t),Kf=(t,n)=>{let a;switch(n.to){case 10:a="vec4<f16>";break;case 1:a="vec4<f32>";break;case 12:a="vec4<u32>";break;case 6:a="vec4<i32>";break;case 9:a="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${n.to}`)}t.compute(De(t.inputs[0],"Cast",a,void 0,n.cacheKey,n.to))},Qf=t=>{let n,a,o=t.length>=2&&t[1].data!==0,l=t.length>=3&&t[2].data!==0;switch(t[0].dataType){case 1:n=o?t[1].getFloat32Array()[0]:-34028234663852886e22,a=l?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:n=o?t[1].getUint16Array()[0]:64511,a=l?t[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Be({min:n,max:a})},Xf=(t,n)=>{let a=n||Qf(t.inputs),o=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"Clip",l=>`clamp(${l}, vec4<${o}>(uniforms.min), vec4<${o}>(uniforms.max))`,void 0,a.cacheKey,void 0,[{type:t.inputs[0].dataType,data:a.min},{type:t.inputs[0].dataType,data:a.max}],[{name:"min",type:o},{name:"max",type:o}]),{inputs:[0]})},Zf=t=>{t.compute(De(t.inputs[0],"Ceil","ceil"))},Yf=t=>{t.compute(De(t.inputs[0],"Cos","cos"))},Jf=t=>{t.compute(De(t.inputs[0],"Cosh","cosh"))},ji=t=>Be(t),eh=(t,n)=>{let a=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"Elu",o=>`elu_vf32(${o})`,`
  const elu_alpha_ = ${a}(${n.alpha});

  fn elu_f32(a: ${a}) -> ${a} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${a}>) -> vec4<${a}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,n.cacheKey))},ns=(t="f32")=>`
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
}`,th=t=>{let n=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"Erf",a=>`erf_vf32(${a})`,ns(n)))},rh=t=>{t.compute(De(t.inputs[0],"Exp","exp"))},nh=t=>{t.compute(De(t.inputs[0],"Floor","floor"))},ih=t=>{let n=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"Gelu",a=>`0.5 * ${a} * (1.0 + erf_vf32(${a} * 0.7071067811865475))`,ns(n)))},ah=(t,n)=>{let a=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"LeakyRelu",o=>`select(leaky_relu_alpha_ * ${o}, ${o}, ${o} >= vec4<${a}>(0.0))`,`const leaky_relu_alpha_ = ${a}(${n.alpha});`,n.cacheKey))},sh=t=>{t.compute(De(t.inputs[0],"Not",n=>`!${n}`))},oh=t=>{t.compute(De(t.inputs[0],"Neg",n=>`-${n}`))},lh=t=>{t.compute(De(t.inputs[0],"Reciprocal",n=>`1.0/${n}`))},uh=t=>{let n=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"Relu",a=>`select(vec4<${n}>(0.0), ${a}, ${a} > vec4<${n}>(0.0))`))},dh=t=>{t.compute(De(t.inputs[0],"Sigmoid",n=>`(1.0 / (1.0 + exp(-${n})))`))},ch=t=>Be(t),ph=(t,n)=>{let a=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"HardSigmoid",o=>`max(vec4<${a}>(0.0), min(vec4<${a}>(1.0), ${n.alpha} * ${o} + vec4<${a}>(${n.beta})))`,void 0,n.cacheKey))},fh=t=>{t.compute(De(t.inputs[0],"Sin","sin"))},hh=t=>{t.compute(De(t.inputs[0],"Sinh","sinh"))},mh=t=>{t.compute(De(t.inputs[0],"Sqrt","sqrt"))},gh=t=>{t.compute(De(t.inputs[0],"Tan","tan"))},xl=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,yh=t=>{t.compute(De(t.inputs[0],"Tanh",xl))},$l=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${xl("v")};
}
`,bl=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,vh=t=>{let n=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"FastGelu",bl,$l(n),void 0,t.inputs[0].dataType))},wh=(t,n)=>{let a=Tt(t.inputs[0].dataType);return t.compute(De(t.inputs[0],"ThresholdedRelu",o=>`select(vec4<${a}>(0.0), ${o}, ${o} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${a}>(${n.alpha});`,n.cacheKey)),0},_h=t=>{t.compute(De(t.inputs[0],"Log","log"))},xh=(t,n)=>`
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
`,$h=t=>`quick_gelu_impl(${t})`,bh=(t,n)=>{let a=Tt(t.inputs[0].dataType);t.compute(De(t.inputs[0],"QuickGelu",$h,xh(a,n.alpha),n.cacheKey,t.inputs[0].dataType))}}),kh,Sh,Eh,H_=x(()=>{be(),ke(),kl(),kh=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Sh=t=>{let n=t[0].dims.slice();n[2]=n[2]/2;let a=F("input",t[0].dataType,t[0].dims,4),o=F("bias",t[0].dataType,[t[0].dims[2]],4),l=ae("output",t[0].dataType,n,4),u=U.size(n)/4,d=pt(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:p=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${p.declareVariables(a,o,l)}

  ${ns(d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(u)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${l.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Eh=t=>{kh(t.inputs),t.compute(Sh(t.inputs))}}),Th,Ih,gr,zh,Ch,Nh,Rh,Oh,Ah,Mh,Ph,Dh,Bh,K_=x(()=>{ve(),be(),ke(),Th=(t,n,a,o,l,u,d,p,h,m,y,v)=>{let w,_;typeof p=="string"?w=_=(k,C)=>`${p}((${k}),(${C}))`:typeof p=="function"?w=_=p:(w=p.scalar,_=p.vector);let $=ae("outputData",y,o.length,4),S=F("aData",h,n.length,4),I=F("bData",m,a.length,4),E;if(l)if(u){let k=U.size(n)===1,C=U.size(a)===1,z=n.length>0&&n[n.length-1]%4===0,O=a.length>0&&a[a.length-1]%4===0;k||C?E=$.setByOffset("global_idx",_(k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),C?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"))):E=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${I.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",_(d||z?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,d||O?I.getByOffset("offsetB / 4u"):`${I.type.value}(${I.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else E=$.setByOffset("global_idx",_(S.getByOffset("global_idx"),I.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let k=(C,z,O="")=>{let j=`aData[indexA${z}][componentA${z}]`,L=`bData[indexB${z}][componentB${z}]`;return`
            let outputIndices${z} = ${$.offsetToIndices(`global_idx * 4u + ${z}u`)};
            let offsetA${z} = ${S.broadcastedIndicesToOffset(`outputIndices${z}`,$)};
            let offsetB${z} = ${I.broadcastedIndicesToOffset(`outputIndices${z}`,$)};
            let indexA${z} = offsetA${z} / 4u;
            let indexB${z} = offsetB${z} / 4u;
            let componentA${z} = offsetA${z} % 4u;
            let componentB${z} = offsetB${z} % 4u;
            ${C}[${z}] = ${O}(${w(j,L)});
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
        ${t.registerUniform("vec_size","u32").declareVariables(S,I,$)}

        ${v??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${E}
      }`},Ih=(t,n,a,o,l,u,d=a.dataType)=>{let p=a.dims.map(Number),h=o.dims.map(Number),m=!U.areEqual(p,h),y=p,v=U.size(p),w=!1,_=!1,$=[m];if(m){let S=ti.calcShape(p,h,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");y=S.slice(),v=U.size(y);let I=U.size(p)===1,E=U.size(h)===1,k=p.length>0&&p[p.length-1]%4===0,C=h.length>0&&h[h.length-1]%4===0;$.push(I),$.push(E),$.push(k),$.push(C);let z=1;for(let O=1;O<y.length;O++){let j=p[p.length-O],L=h[h.length-O];if(j===L)z*=j;else break}z%4===0?(_=!0,w=!0):(I||E||k||C)&&(w=!0)}else w=!0;return $.push(w),{name:t,shaderCache:{hint:n+$.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>Th(S,p,h,y,w,m,_,l,a.dataType,o.dataType,d,u),getRunData:()=>({outputs:[{dims:y,dataType:d}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(y)/4)},...de(p,h,y)]})}},gr=(t,n,a,o,l,u)=>{t.compute(Ih(n,l??"",t.inputs[0],t.inputs[1],a,o,u))},zh=t=>{gr(t,"Add",(n,a)=>`${n}+${a}`)},Ch=t=>{gr(t,"Div",(n,a)=>`${n}/${a}`)},Nh=t=>{gr(t,"Equal",{scalar:(n,a)=>`u32(${n}==${a})`,vector:(n,a)=>`vec4<u32>(${n}==${a})`},void 0,void 0,9)},Rh=t=>{gr(t,"Mul",(n,a)=>`${n}*${a}`)},Oh=t=>{let n=F("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;gr(t,"Pow",{scalar:(a,o)=>`pow_custom(${a},${o})`,vector:(a,o)=>`pow_vector_custom(${a},${o})`},`
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
      `)},Ah=t=>{gr(t,"Sub",(n,a)=>`${n}-${a}`)},Mh=t=>{gr(t,"Greater",{scalar:(n,a)=>`u32(${n}>${a})`,vector:(n,a)=>`vec4<u32>(${n}>${a})`},void 0,void 0,9)},Ph=t=>{gr(t,"Less",{scalar:(n,a)=>`u32(${n}<${a})`,vector:(n,a)=>`vec4<u32>(${n}<${a})`},void 0,void 0,9)},Dh=t=>{gr(t,"GreaterOrEqual",{scalar:(n,a)=>`u32(${n}>=${a})`,vector:(n,a)=>`vec4<u32>(${n}>=${a})`},void 0,void 0,9)},Bh=t=>{gr(t,"LessOrEqual",{scalar:(n,a)=>`u32(${n}<=${a})`,vector:(n,a)=>`vec4<u32>(${n}<=${a})`},void 0,void 0,9)}}),Lh,jh,Uh,Vh,Fh,qh,Q_=x(()=>{ve(),be(),tt(),ke(),Lh=(t,n)=>{if(!t||t.length<1)throw new Error("too few inputs");let a=0,o=t[a],l=o.dataType,u=o.dims.length;t.forEach((d,p)=>{if(p!==a){if(d.dataType!==l)throw new Error("input tensors should be one type");if(d.dims.length!==u)throw new Error("input tensors should have the same shape");d.dims.forEach((h,m)=>{if(m!==n&&h!==o.dims[m])throw new Error("non concat dimensions must match")})}})},jh=(t,n)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${t}u>(${n});
    for (var i: u32 = 0u; i < ${t}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${t}u;
  }`,Uh=(t,n)=>{let a=t.length,o=[];for(let l=0;l<a;++l){let u=n.setByOffset("global_idx",t[l].getByIndices("indices"));a===1?o.push(u):l===0?o.push(`if (inputIndex == ${l}u) { ${u} }`):l===a-1?o.push(`else { ${u} }`):o.push(`else if (inputIndex == ${l}) { ${u} }`)}return o.join(`
`)},Vh=(t,n,a,o)=>{let l=U.size(a),u=new Array(t.length),d=new Array(t.length),p=0,h=[],m=[],y=[{type:12,data:l}];for(let S=0;S<t.length;++S)p+=t[S].dims[n],u[S]=p,m.push(t[S].dims.length),d[S]=F(`input${S}`,o,m[S]),h.push("rank"),y.push({type:12,data:u[S]});for(let S=0;S<t.length;++S)y.push(...de(t[S].dims));y.push(...de(a));let v=ae("output",o,a.length),w=v.indicesGet("indices",n),_=Array.from(Array(u.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),$=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let I=0;I<t.length;I++)S.registerUniform(`sizeInConcatAxis${I}`,"u32");return S.declareVariables(...d,v)})()}

  ${jh(u.length,_)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${v.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${w});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${u.length}u>(${_});
      ${w} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Uh(d,v)}
  }`;return{name:"Concat",shaderCache:{hint:`${n}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:y}),getShaderSource:$}},Fh=(t,n)=>{let a=t.inputs,o=a[0].dims,l=U.normalizeAxis(n.axis,o.length);Lh(a,l);let u=o.slice();u[l]=a.reduce((p,h)=>p+(h.dims.length>l?h.dims[l]:0),0);let d=a.filter(p=>U.size(p.dims)>0);t.compute(Vh(d,l,u,a[0].dataType),{inputs:d})},qh=t=>Be({axis:t.axis})}),Cn,Nn,Rn,Sl,On=x(()=>{ve(),be(),Cn=(t,n,a="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${n}(0.0));`;case"Sigmoid":return`value = (${n}(1.0) / (${n}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${n}(${a}(uniforms.clip_min)), ${n}(${a}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${n}(0.0), min(${n}(1.0), ${a}(uniforms.alpha) * value + ${a}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${a}(uniforms.alpha) * value, value, value >= ${n}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${t.activation}`)}},Nn=(t,n)=>{t.activation==="Clip"?n.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):t.activation==="HardSigmoid"?n.push({type:1,data:t.alpha},{type:1,data:t.beta}):t.activation==="LeakyRelu"&&n.push({type:1,data:t.alpha})},Rn=(t,n)=>{t.activation==="Clip"?n.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):t.activation==="HardSigmoid"?n.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):t.activation==="LeakyRelu"&&n.push({name:"alpha",type:"f32"})},Sl=t=>{let n=(t==null?void 0:t.activation)||"";if(n==="HardSigmoid"){let[a,o]=(t==null?void 0:t.activation_params)||[.2,.5];return{activation:n,alpha:a,beta:o}}else if(n==="Clip"){let[a,o]=(t==null?void 0:t.activation_params)||[pp,fp];return{activation:n,clipMax:o,clipMin:a}}else if(n==="LeakyRelu"){let[a]=(t==null?void 0:t.activation_params)||[.01];return{activation:n,alpha:a}}return{activation:n}}}),yt,Wh,El=x(()=>{yt=(t,n)=>{switch(t){case 1:return n;case 2:return`vec2<${n}>`;case 3:return`vec3<${n}>`;case 4:return`vec4<${n}>`;default:throw new Error(`${t}-component is not supported.`)}},Wh=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Gh,X_=x(()=>{Gh=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),Ui,Tl,Il=x(()=>{ve(),be(),ke(),On(),Ui=(t,n,a,o,l)=>{let u=o-a;return`
      ${Array.from({length:a}).map((d,p)=>`
      if (${le(n.shape,p,n.rank)} != 1) {
        ${n.indicesSet(t,p,le(l,p+u,o))}
      } else {
        ${n.indicesSet(t,p,0)}
      }`).join("")}
`},Tl=(t,n,a,o,l=!1,u)=>{let d=t[0].dims,p=t[1].dims,h=d[d.length-2],m=p[p.length-1],y=d[d.length-1],v=Ze(m),w=Ze(y),_=Ze(h),$=U.size(a)/v/_,S=t.length>2,I=o?o.slice(0,-2):a.slice(0,-2),E=[U.size(I),h,m],k=[{type:12,data:$},{type:12,data:h},{type:12,data:m},{type:12,data:y}];Nn(n,k),k.push(...de(I,d,p)),S&&k.push(...de(t[2].dims)),k.push(...de(E));let C=z=>{let O=hl("batch_dims",t[0].dataType,I.length),j=F("a",t[0].dataType,d.length,w),L=F("b",t[1].dataType,p.length,v),V=ae("output",t[0].dataType,E.length,v),q=pt(V.type.tensor),Z=Cn(n,V.type.value,q),me=[j,L],ce="";if(S){let Re=l?v:1;me.push(F("bias",t[2].dataType,t[2].dims.length,Re)),ce=`${l?`value += bias[col / ${Re}];`:`value += ${V.type.value}(bias[row + i]);`}`}let pe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Rn(n,pe);let Ie=()=>{let Re=`var a_data: ${j.type.value};`;for(let fe=0;fe<w;fe++)Re+=`
              let b_data${fe} = b[(b_offset + (k + ${fe}) * uniforms.N + col) / ${v}];`;for(let fe=0;fe<_;fe++){Re+=`a_data = a[(a_offset + (row + ${fe}) * uniforms.K + k) / ${w}];`;for(let we=0;we<w;we++)Re+=`
            values[${fe}] = fma(${L.type.value}(a_data${w===1?"":`[${we}]`}), b_data${we}, values[${fe}]);
`}return Re};return`
  ${z.registerUniforms(pe).registerInternalVariables(O).declareVariables(...me,V)}
  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${v})) * ${v};
    var index1 = global_idx / (uniforms.N / ${v});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${a.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${j.type.indices};
    ${Ui("a_indices",j,j.rank-2,O.rank,"batch_indices")}
    ${j.indicesSet("a_indices",j.rank-2,0)}
    ${j.indicesSet("a_indices",j.rank-1,0)}
    let a_offset = ${j.indicesToOffset("a_indices")};

    var b_indices: ${L.type.indices};
    ${Ui("b_indices",L,L.rank-2,O.rank,"batch_indices")}
    ${L.indicesSet("b_indices",L.rank-2,0)}
    ${L.indicesSet("b_indices",L.rank-1,0)}
    let b_offset = ${L.indicesToOffset("b_indices")};
    var values: array<${V.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${w}) {
      ${Ie()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ce}
      ${Z}
      let cur_indices = ${V.type.indices}(batch, row + i, col);
      let offset = ${V.indicesToOffset("cur_indices")};
      ${V.setByOffset(`offset / ${v}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${n.activation};${v};${w};${_};${l}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(a):a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:k}),getShaderSource:C}}}),Hh,Kh,zl,Cl,Qh,Nl,Xh,is,Rl=x(()=>{ve(),be(),ke(),On(),Il(),El(),Hh=(t,n)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${n?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${n?", batchIndices":""});
        `,Kh=(t,n)=>t?`
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
        }`,zl=(t,n,a="f32",o,l=!1,u=32,d=!1,p=32)=>{let h=n[1]*t[1],m=n[0]*t[0],y=l?h:u,v=l?u:h,w=y/n[0],_=u/n[1];if(!((l&&w===4&&t[1]===4||!l&&(w===3||w===4))&&y%n[0]===0&&u%n[1]===0&&t[0]===4))throw new Error(`If transposeA ${l} is true, innerElementSize ${w} and workPerThread[1] ${t[1]} must be 4.
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
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Hh(l,o)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
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

          ${Kh(l,w)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Cl=(t,n)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${n?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${n?", batchIndices":""});
            `,Qh=t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Nl=(t,n,a="f32",o,l=!1,u=32,d=!1,p=32,h=!1)=>{let m=t[1]*n[1],y=t[0]*n[0],v=l?m:u,w=l?u:m;if(!(w%n[1]===0&&v%n[0]===0&&u%n[1]===0))throw new Error(`tileAHight ${w} must be divisible by workgroupSize[1]${n[1]}, tileAWidth ${v} must be divisible by workgroupSize[0]${n[0]}, tileInner ${u} must be divisible by workgroupSize[1]${n[1]}`);let _=w/n[1],$=v/n[0],S=u/n[1],I=h?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${m};
    let globalColStart = i32(workgroupId.x) * ${y};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${w}; inputRow = inputRow + ${n[1]}) {
        for (var inputCol = localCol; inputCol < ${v}; inputCol = inputCol + ${n[0]}) {
          ${Cl(l,o)}
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

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${S};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Cl(l,o)}
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
      ${Qh(l)}
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
    ${I}
  }
`},Xh=(t,n,a,o,l=!1)=>{let[u,d,p,h]=o,m=pt(o[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${yt(t,m)} {
      var value = ${yt(t,m)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${d.type.indices};
        ${Ui("aIndices",d,d.rank-2,u.rank,"batchIndices")}
        ${d.indicesSet("aIndices",d.rank-2,"u32(row)")}
        ${d.indicesSet("aIndices",d.rank-1,"u32(colIn)")}
        value = ${d.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${yt(t,m)} {
      var value = ${yt(t,m)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${p.type.indices};
        ${Ui("bIndices",p,p.rank-2,u.rank,"batchIndices")}
        ${p.indicesSet("bIndices",p.rank-2,"u32(row)")}
        ${p.indicesSet("bIndices",p.rank-1,"u32(colIn)")}
        value = ${p.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${yt(t,m)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${n?`value = value + ${l?"bias[colIn]":`${yt(t,m)}(bias[row])`};`:""}
        ${a}
        ${h.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},is=(t,n,a,o,l=!1,u)=>{let d=t[0].dims,p=t[1].dims,h=d.slice(0,-2),m=p.slice(0,-2),y=o?o.slice(0,-2):a.slice(0,-2),v=U.size(y),w=d[d.length-2],_=d[d.length-1],$=p[p.length-1],S=_%4===0&&$%4===0,I=w<=8?[4,1,1]:[4,4,1],E=[8,8,1],k=[Math.ceil($/E[0]/I[0]),Math.ceil(w/E[1]/I[1]),Math.ceil(v/E[2]/I[2])],C=S?4:1,z=[...h,w,_/C],O=z.length,j=[...m,_,$/C],L=j.length,V=[v,w,$/C],q=[{type:6,data:w},{type:6,data:$},{type:6,data:_}];Nn(n,q),q.push(...de(y,z,j));let Z=["rank","rank"],me=t.length>2;me&&(q.push(...de(t[2].dims)),Z.push("rank")),q.push(...de(V));let ce=pe=>{let Ie=y.length,Re=hl("batchDims",t[0].dataType,Ie,1),fe=pt(t[0].dataType),we=F("a",t[0].dataType,O,C),st=F("b",t[1].dataType,L,C),ee=ae("result",t[0].dataType,V.length,C),Me=[we,st];if(me){let Fe=l?C:1;Me.push(F("bias",t[2].dataType,t[2].dims.length,Fe))}let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Rn(n,X);let ie=pt(ee.type.tensor),ue=Cn(n,ee.type.value,ie),te=Xh(C,me,ue,[Re,we,st,ee],l);return`
  ${pe.registerUniforms(X).registerInternalVariables(Re).declareVariables(...Me,ee)}
  ${te}
  ${S?zl(I,E,fe,Re):Nl(I,E,fe,Re)}
                   `};return{name:"MatMul",shaderCache:{hint:`${I};${n.activation};${S};${l}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:u?u(a):a,dataType:t[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:q}),getShaderSource:ce}}}),Zh,Yh,Z_=x(()=>{ve(),Mr(),ke(),On(),El(),X_(),Rl(),Zh=(t,n,a,o,l=!1,u,d=4,p=4,h=4,m="f32")=>{let y=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${m}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},v=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},w=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=t?`
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
    `,$=t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",S=t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",I=t?"row":"col",E=t?"col":"row",k=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${I} / outWidth;
    let outCol = ${I} % outWidth;

    let WRow = ${E} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${E} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${E} % inChannels;
    var resData = ${yt(d,m)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${S}) {
      ${w}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${y(d)}
    }
    return resData;`,C=t?n&&o?`
    let col = colIn * ${d};
    ${k}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${k}
    }
    return ${yt(d,m)}(0.0);`:o&&a?`
    let col = colIn * ${d};
    ${k}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${k}
    }
    return ${yt(d,m)}(0.0);`,z=t?o&&a?v(p):`
    let col = colIn * ${p};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v(p)}
    }
    return ${yt(p,m)}(0.0);`:`
    let col = colIn * ${p};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${v(p)}
    }
    return ${yt(p,m)}(0.0);`,O=yt(h,m),j=yt(t?d:p,m),L=yt(t?p:d,m),V=Cn(u,O,m);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${j} {
      ${t?C:z}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${L} {
      ${t?z:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${h};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Wh(l)}
      ${V}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Yh=(t,n,a,o,l,u,d,p,h)=>{let m=n.format==="NHWC",y=m?t[0].dims[3]:t[0].dims[1],v=a[0],w=m?a[2]:a[3],_=m?a[1]:a[2],$=m?a[3]:a[1],S=m&&(y%4===0||y%3===0)&&$%4===0,I=m?$:w*_,E=m?w*_:$,k=[8,8,1],C=o<=8?[4,1,1]:[4,4,1],z=[Math.ceil(I/k[0]/C[0]),Math.ceil(E/k[1]/C[1]),Math.ceil(v/k[2]/C[2])];Ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${z}`);let O=S?m&&y%4!==0?3:4:1,j=k[1]*C[1],L=k[0]*C[0],V=Math.max(k[0]*O,k[1]),q=o%j===0,Z=l%L===0,me=u%V===0,ce=S?[O,4,4]:[1,1,1],pe=[{type:6,data:o},{type:6,data:l},{type:6,data:u},{type:6,data:[n.pads[0],n.pads[1]]},{type:6,data:n.strides},{type:6,data:n.dilations}];Nn(n,pe),pe.push(...de(t[0].dims,t[1].dims));let Ie=["rank","rank"];d&&(pe.push(...de(t[2].dims)),Ie.push("rank")),pe.push(...de(a));let Re=fe=>{let we=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Rn(n,we);let st=S?4:1,ee=pt(t[0].dataType),Me=`
      fn setOutputAtIndex(flatIndex : i32, value : ${S?`vec4<${ee}>`:ee}) {
        result[flatIndex] = ${S?`vec4<${ee}>`:ee}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${S?`vec4<${ee}>`:ee}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${S?"/ 4":""}, value);
      }`,X=F("x",t[0].dataType,t[0].dims.length,O===3?1:O),ie=F("w",t[1].dataType,t[1].dims.length,st),ue=[X,ie],te=ae("result",t[0].dataType,a.length,st);if(d){let Fe=F("bias",t[2].dataType,t[2].dims.length,st);ue.push(Fe),Me+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${S?`vec4<${ee}>`:ee} {
          return bias[coords.${m?"w":"y"}${S?"/ 4":""}];
        }`}return`
        ${Gh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${fe.registerUniforms(we).declareVariables(...ue,te)}
        ${Me}
        ${Zh(m,q,Z,me,d,n,ce[0],ce[1],ce[2],ee)}
        ${S?zl(C,k,ee,void 0,!m,V):Nl(C,k,ee,void 0,!m,V,!1,void 0,p)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${n.cacheKey};${O};${S};${q};${Z};${me};${j};${L};${V}`,inputDependencies:Ie},getRunData:()=>({outputs:[{dims:h?h(a):a,dataType:t[0].dataType}],dispatchGroup:{x:z[0],y:z[1],z:z[2]},programUniforms:pe}),getShaderSource:Re}}}),Jh,Ol,Vi,em,Al,tm,rm,nm,Y_=x(()=>{ve(),Mr(),be(),ke(),On(),El(),Jh=t=>{let n=1;for(let a=0;a<t.length;a++)n*=t[a];return n},Ol=t=>typeof t=="number"?[t,t,t]:t,Vi=(t,n)=>n<=1?t:t+(t-1)*(n-1),em=(t,n,a,o=1)=>{let l=Vi(n,o);return Math.floor((t[0]*(a-1)-a+l)/2)},Al=(t,n,a,o,l)=>{l==null&&(l=em(t,n[0],o[0]));let u=[0,0,0,a];for(let d=0;d<3;d++)t[d]+2*l>=n[d]&&(u[d]=Math.trunc((t[d]-n[d]+2*l)/o[d]+1));return u},tm=(t,n,a,o,l,u,d,p,h,m)=>{let y,v,w,_;if(t==="VALID"&&(t=0),typeof t=="number"){y={top:t,bottom:t,left:t,right:t,front:t,back:t};let $=Al([n,a,o,1],[p,h,m],1,[l,u,d],t);v=$[0],w=$[1],_=$[2]}else if(Array.isArray(t)){if(!t.every((S,I,E)=>S===E[0]))throw Error(`Unsupported padding parameter: ${t}`);y={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let $=Al([n,a,o,1],[p,h,m],1,[l,u,d],t[0]);v=$[0],w=$[1],_=$[2]}else if(t==="SAME_UPPER"){v=Math.ceil(n/l),w=Math.ceil(a/u),_=Math.ceil(o/d);let $=(v-1)*l+p-n,S=(w-1)*u+h-a,I=(_-1)*d+m-o,E=Math.floor($/2),k=$-E,C=Math.floor(S/2),z=S-C,O=Math.floor(I/2),j=I-O;y={top:C,bottom:z,left:O,right:j,front:E,back:k}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:y,outDepth:v,outHeight:w,outWidth:_}},rm=(t,n,a,o,l,u=!1,d="channelsLast")=>{let p,h,m,y,v;if(d==="channelsLast")[p,h,m,y,v]=t;else if(d==="channelsFirst")[p,v,h,m,y]=t;else throw new Error(`Unknown dataFormat ${d}`);let[w,,_,$,S]=n,[I,E,k]=Ol(a),[C,z,O]=Ol(o),j=Vi(_,C),L=Vi($,z),V=Vi(S,O),{padInfo:q,outDepth:Z,outHeight:me,outWidth:ce}=tm(l,h,m,y,I,E,k,j,L,V),pe=u?w*v:w,Ie=[0,0,0,0,0];return d==="channelsFirst"?Ie=[p,pe,Z,me,ce]:d==="channelsLast"&&(Ie=[p,Z,me,ce,pe]),{batchSize:p,dataFormat:d,inDepth:h,inHeight:m,inWidth:y,inChannels:v,outDepth:Z,outHeight:me,outWidth:ce,outChannels:pe,padInfo:q,strideDepth:I,strideHeight:E,strideWidth:k,filterDepth:_,filterHeight:$,filterWidth:S,effectiveFilterDepth:j,effectiveFilterHeight:L,effectiveFilterWidth:V,dilationDepth:C,dilationHeight:z,dilationWidth:O,inShape:t,outShape:Ie,filterShape:n}},nm=(t,n,a,o,l,u)=>{let d=u==="channelsLast";d?t[0].dims[3]:t[0].dims[1];let p=[64,1,1],h={x:a.map((I,E)=>E)},m=[Math.ceil(Jh(h.x.map(I=>a[I]))/p[0]),1,1];Ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${m}`);let y=1,v=U.size(a),w=[{type:12,data:v},{type:12,data:o},{type:12,data:l},{type:12,data:n.strides},{type:12,data:n.dilations}];Nn(n,w),w.push(...de(t[0].dims,t[1].dims));let _=["rank","rank"],$=t.length===3;$&&(w.push(...de(t[2].dims)),_.push("rank")),w.push(...de(a));let S=I=>{let E=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:o.length},{name:"pads",type:"u32",length:l.length},{name:"strides",type:"u32",length:n.strides.length},{name:"dilations",type:"u32",length:n.dilations.length}];Rn(n,E);let k=1,C=pt(t[0].dataType),z=F("x",t[0].dataType,t[0].dims.length,y),O=F("W",t[1].dataType,t[1].dims.length,k),j=[z,O],L=ae("result",t[0].dataType,a.length,k),V="";if($){let me=F("bias",t[2].dataType,t[2].dims.length,k);j.push(me),V+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${d?le("coords",4,5):le("coords",1,5)}];
        }`}let q=yt(y,C),Z=Cn(n,q,C);return`
            ${V}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
          ${I.registerUniforms(E).declareVariables(...j,L)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${L.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,z.rank)};
              let d2 = ${d?le("coords",z.rank-1,z.rank):le("coords",1,z.rank)};
              let xFRCCorner = vec3<u32>(${d?le("coords",1,z.rank):le("coords",2,z.rank)},
              ${d?le("coords",2,z.rank):le("coords",3,z.rank)},
              ${d?le("coords",3,z.rank):le("coords",4,z.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${d?le("uniforms.x_shape",1,z.rank):le("uniforms.x_shape",2,z.rank)};
              let xShapeZ = ${d?le("uniforms.x_shape",2,z.rank):le("uniforms.x_shape",3,z.rank)};
              let xShapeW = ${d?le("uniforms.x_shape",3,z.rank):le("uniforms.x_shape",4,z.rank)};
              let xShapeU = ${d?le("uniforms.x_shape",4,z.rank):le("uniforms.x_shape",1,z.rank)};
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
              ${Z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${n.cacheKey};${d};${y};${$}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:w}),getShaderSource:S}}}),im,am,J_=x(()=>{ve(),be(),ke(),On(),im=(t,n,a,o)=>{let l=t.length>2,u=l?"value += b[output_channel];":"",d=t[0].dims,p=t[1].dims,h=n.format==="NHWC",m=h?a[3]:a[1],y=m/n.group,v=h&&y>=4?Ze(m):1,w=U.size(a)/v,_=[{type:12,data:w},{type:12,data:n.dilations},{type:12,data:[n.strides[0],n.strides[1]]},{type:12,data:[n.pads[0],n.pads[1]]},{type:12,data:y}];Nn(n,_),_.push(...de(d,[p[0],p[1],p[2],p[3]/v]));let $=l?["rank","rank","rank"]:["rank","rank"];_.push(...de([a[0],a[1],a[2],a[3]/v]));let S=I=>{let E=ae("output",t[0].dataType,a.length,v),k=pt(E.type.tensor),C=Cn(n,E.type.value,k),z=F("x",t[0].dataType,d.length),O=F("w",t[1].dataType,p.length,v),j=[z,O];l&&j.push(F("b",t[2].dataType,t[2].dims,v));let L=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:n.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Rn(n,L);let V=h?`
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
            let xVal = ${z.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${z.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${I.registerUniforms(L).declareVariables(...j,E)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${E.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${h?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${h?1:2}], outputIndices[${h?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${v} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${h?2:1}];

    var value: ${E.type.value} = ${E.type.value}(0);
    ${V}
    ${u}
    ${C}
    ${E.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${n.cacheKey}_${v}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o?o(a):a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:_}),getShaderSource:S}},am=(t,n,a,o)=>{let l=t.length>2,u=Ze(a[3]),d=Ze(a[2]),p=U.size(a)/u/d,h=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/u],m=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/u],y=[a[0],a[1],a[2],a[3]/u],v=[{type:12,data:p},{type:6,data:[n.strides[0],n.strides[1]]},{type:6,data:[n.pads[0],n.pads[1]]}];Nn(n,v),v.push(...de(h,m,y));let w=(d-1)*n.strides[1]+m[1],_=$=>{let S=ae("output",t[0].dataType,y.length,u),I=pt(S.type.tensor),E=Cn(n,S.type.value,I),k=F("x",t[0].dataType,h.length,u),C=F("w",t[1].dataType,m.length,u),z=[k,C];l&&z.push(F("b",t[2].dataType,t[2].dims,u));let O=l?"value += b[output_channel];":"",j=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Rn(n,j),`
  ${$.registerUniforms(j).declareVariables(...z,S)}
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
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${n.cacheKey};${u};${d};${w};${m[0]};${m[1]}`,inputDependencies:l?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(a):a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:v}),getShaderSource:_}}}),sm,as,om,ss,Ml,Pl,lm,um,Dl,ex=x(()=>{be(),Z_(),Y_(),Rl(),J_(),On(),Il(),Zr(),sm=(t,n,a,o,l,u)=>{let d=t[0],p=t.slice(u?1:2,u?3:4),h=p.length,m=n[0],y=n.slice(2).map((w,_)=>w+(w-1)*(a[_]-1)),v=p.map((w,_)=>w+o[_]+o[_+h]).map((w,_)=>Math.floor((w-y[_]+l[_])/l[_]));return v.splice(0,0,d),v.splice(u?3:1,0,m),v},as=[2,3,1,0],om=(t,n)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw new Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let a=t[0].dims[n.format==="NHWC"?t[0].dims.length-1:1],o=t[1].dims[1]*n.group;if(a!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(t.length===3&&(t[2].dims.length!==1||t[1].dims[0]!==t[2].dims[0]))throw new Error("invalid bias");let l=t[0].dims.length-2;if(n.dilations.length!==l)throw new Error(`dilations should be ${l}D`);if(n.strides.length!==l)throw new Error(`strides should be ${l}D`);if(n.pads.length!==l*2)throw new Error(`pads should be ${l*2}D`);if(n.kernelShape.length!==0&&n.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape")},ss=(t,n)=>{let a=t.kernelShape.slice();a.length<n[1].dims.length-2&&a.push(...Array(n[1].dims.length-2-a.length).fill(0));for(let u=2;u<n[1].dims.length;++u)a[u-2]===0&&(a[u-2]=n[1].dims[u]);let o=t.pads.slice();Za.adjustPadsBasedOnAutoPad(n[0].dims,t.strides,t.dilations,a,o,t.format==="NHWC",t.autoPad);let l=Object.assign({},t);return Object.assign(l,{kernelShape:a,pads:o}),l},Ml=t=>{let n=Sl(t),a=t.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],l=t.dilations,u=t.group,d=t.kernel_shape,p=t.pads,h=t.strides,m=t.w_is_const();return{autoPad:o,format:a,dilations:l,group:u,kernelShape:d,pads:p,strides:h,wIsConst:m,...n,cacheKey:`${t.format};${n.activation};`}},Pl=(t,n,a,o)=>{let l=a.format==="NHWC",u=sm(n[0].dims,n[1].dims,a.dilations,a.pads,a.strides,l);if(a.group!==1){let j=[n[0]];if(l){let L=t.kernelCustomData.wT??t.compute(Kt(n[1],as),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=L),j.push(L)}else j.push(n[1]);n.length===3&&j.push(n[2]),!t.adapterInfo.isArchitecture("ampere")&&l&&n[1].dims[0]===a.group&&n[1].dims[1]===1&&a.dilations[0]===1&&a.dilations[1]===1?t.compute(am(j,a,u,o),{inputs:j}):t.compute(im(j,a,u,o),{inputs:j});return}let d=n.length===3,p=n[0].dims[l?1:2],h=n[0].dims[l?2:3],m=n[0].dims[l?3:1],y=n[1].dims[2],v=n[1].dims[3],w=u[l?1:2],_=u[l?2:3],$=u[l?3:1],S=l&&y===p&&v===h&&a.pads[0]===0&&a.pads[1]===0;if(S||y===1&&v===1&&a.dilations[0]===1&&a.dilations[1]===1&&a.strides[0]===1&&a.strides[1]===1&&a.pads[0]===0&&a.pads[1]===0){let j=u[0],L,V,q,Z=[];if(l){let pe=t.kernelCustomData.wT??t.compute(Kt(n[1],as),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];if(a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=pe),S){let Ie=p*h*m;L=n[0].reshape([1,j,Ie]),V=pe.reshape([1,Ie,$]),q=[1,j,$]}else L=n[0].reshape([j,p*h,m]),V=pe.reshape([1,m,$]),q=[j,w*_,$];Z.push(L),Z.push(V)}else L=n[0].reshape([j,m,p*h]),V=n[1].reshape([1,$,m]),q=[j,$,w*_],Z.push(V),Z.push(L);d&&Z.push(n[2]);let me=q[2],ce=Z[0].dims[Z[0].dims.length-1];me<8&&ce<8?t.compute(Tl(Z,a,u,q,l,o),{inputs:Z}):t.compute(is(Z,a,u,q,l,o),{inputs:Z});return}let I=!0,E=t.kernelCustomData.wT??t.compute(Kt(n[1],as),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=E);let k=[n[0],E];d&&k.push(n[2]);let C=l?w*_:$,z=l?$:w*_,O=y*v*m;t.compute(Yh(k,a,u,C,z,O,d,I,o),{inputs:k})},lm=(t,n)=>{let a=n.format==="NHWC",o=[t.inputs[0].reshape(a?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&o.push(t.inputs[2]);let l=[0,n.pads[0],0,n.pads[1]],u=[1].concat(n.strides),d=[1].concat(n.dilations),p=[1].concat(n.kernelShape),h=ss({...n,pads:l,strides:u,dilations:d,kernelShape:p},o);Pl(t,o,h,m=>a?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},um=(t,n,a)=>{let o=a.format==="NHWC"?"channelsLast":"channelsFirst",l=ss(a,n),u=a.autoPad==="NOTSET"?a.pads:a.autoPad,d=rm(n[0].dims,n[1].dims,a.strides,a.dilations,u,!1,o);t.compute(nm(n,l,d.outShape,[d.filterDepth,d.filterHeight,d.filterWidth],[d.padInfo.front,d.padInfo.top,d.padInfo.left],o))},Dl=(t,n)=>{if(om(t.inputs,n),t.inputs[0].dims.length===3)lm(t,n);else if(t.inputs[0].dims.length===5)um(t,t.inputs,n);else{let a=ss(n,t.inputs);Pl(t,t.inputs,a)}}}),dm,tx=x(()=>{ve(),Mr(),be(),ke(),dm=(t,n,a)=>{let o=t.length>2,l=n.outputShape,u=n.format==="NHWC",d=n.group,p=t[1].dims,h=p[2]/d,m=p[3],y=u?Ze(h):1,v=u&&m===1&&h>=4,w=v?Math.floor(h/4)*4:Math.floor(h/y)*y,_=h-w,$=u?Ze(m):1,S=u?m===1?y:$:1,I=U.size(l)/$,E=[Math.ceil(I/64),1,1];Ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${E}`);let k=["rank","rank"],C=[n.strides[0],n.strides[1]],z=[n.kernelShape[u?1:2],n.kernelShape[u?2:3]],O=[n.dilations[0],n.dilations[1]],j=[z[0]+(n.dilations[0]<=1?0:(n.kernelShape[u?1:2]-1)*(n.dilations[0]-1)),z[1]+(n.dilations[1]<=1?0:(n.kernelShape[u?2:3]-1)*(n.dilations[1]-1))],L=[j[0]-1-Math.floor((n.pads[0]+n.pads[2])/2),j[1]-1-Math.floor((n.pads[1]+n.pads[3])/2)],V=[{type:12,data:I},{type:12,data:C},{type:12,data:z},{type:12,data:O},{type:12,data:j},{type:6,data:L},{type:12,data:w},{type:12,data:h},{type:12,data:m},...de(t[0].dims,t[1].dims)];o&&(V.push(...de(t[2].dims)),k.push("rank")),V.push(...de(l));let q=Z=>{let me=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:C.length},{name:"filter_dims",type:"u32",length:z.length},{name:"dilations",type:"u32",length:z.length},{name:"effective_filter_dims",type:"u32",length:j.length},{name:"pads",type:"i32",length:L.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ce=pt(t[0].dataType),pe=u?1:2,Ie=u?2:3,Re=u?3:1,fe=F("W",t[1].dataType,t[1].dims.length,S),we=F("Dy",t[0].dataType,t[0].dims.length,y),st=[we,fe];o&&st.push(F("bias",t[2].dataType,[l[Re]].length,$));let ee=ae("result",t[0].dataType,l.length,$),Me=()=>{let ue="";if(v)y===4?ue+=`
        let xValue = ${we.getByOffset("x_offset")};
        let wValue = ${fe.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:y===2?ue+=`
          dotProd = dotProd + dot(vec4<${ce}>(${we.getByOffset("x_offset")}, ${we.getByOffset("x_offset + 1u")}), vec4<${ce}>(${fe.getByOffset("w_offset")}, ${fe.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:y===1&&(ue+=`
          dotProd = dotProd + dot(vec4<${ce}>(${we.getByOffset("x_offset")}, ${we.getByOffset("x_offset + 1u")}, ${we.getByOffset("x_offset + 2u")}, ${we.getByOffset("x_offset + 3u")}), vec4<${ce}>(${fe.getByOffset("w_offset")}, ${fe.getByOffset("w_offset + 1u")}, ${fe.getByOffset("w_offset + 2u")}, ${fe.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ue+=`
                  let xValue = ${u?we.getByOffset(`${we.indicesToOffset(`${we.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y}`):we.get("batch","inputChannel","idyR","idyC")};
        `,y===1)ue+=`
          let w_offset = ${fe.indicesToOffset(`${fe.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${fe.getByOffset(`w_offset / ${S}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let te=0;te<y;te++)ue+=`
            let wValue${te} = ${fe.getByOffset(`${fe.indicesToOffset(`${fe.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${te}, wOutChannel)`)} / ${S}`)};
            dotProd = dotProd + xValue[${te}] * wValue${te};`;return ue},X=()=>{if(_===0)return"";if(!v)throw new Error(`packInputAs4 ${v} is not true.`);let ue="";if(y===1){ue+="dotProd = dotProd";for(let te=0;te<_;te++)ue+=`
            + ${we.getByOffset(`x_offset + ${te}`)} * ${fe.getByOffset(`w_offset + ${te}`)}`;ue+=";"}else if(y===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);ue+=`
          let xValue = ${we.getByOffset("x_offset")};
          let wValue = ${fe.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ue},ie=`
            let outputIndices = ${ee.offsetToIndices(`global_idx * ${$}`)};
            let batch = ${ee.indicesGet("outputIndices",0)};
            let d1 = ${ee.indicesGet("outputIndices",Re)};
            let r = ${ee.indicesGet("outputIndices",pe)};
            let c = ${ee.indicesGet("outputIndices",Ie)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ee.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ce}(dyRCorner) + ${ce}(wR)) / ${ce}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ce}(uniforms.Dy_shape[${pe}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${ce}(dyCCorner) + ${ce}(wC)) / ${ce}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ce}(uniforms.Dy_shape[${Ie}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${v?`
                var x_offset = ${we.indicesToOffset(`${we.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y};
                var w_offset = ${fe.indicesToOffset(`${fe.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${S};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${v?4:y}) {
                  ${Me()}
                  inputChannel = inputChannel + ${v?4:y};
                }
                ${X()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${o?` + bias[d1 / ${$}]`:""};
            ${ee.setByOffset("global_idx","value")};
          `;return`
    ${Z.registerUniforms(me).declareVariables(...st,ee)}
      ${Z.mainStart()}
      ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ie}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${n.cacheKey};${y}${S}${$}${v}${_}`,inputDependencies:k},getRunData:()=>({dispatchGroup:{x:E[0],y:E[1],z:E[2]},outputs:[{dims:a?a(l):l,dataType:t[0].dataType}],programUniforms:V}),getShaderSource:q}}}),cm,pm,fm,Bl,hm,mm,Ll,gm,ym,rx=x(()=>{tx(),On(),Zr(),cm=(t,n,a,o,l,u)=>(t-1)*n+a+(o-1)*l+1-u,pm=(t,n,a,o,l)=>{let u=Math.floor(t/2);n==="SAME_UPPER"?(a[o]=u,a[l]=t-u):n==="SAME_LOWER"&&(a[o]=t-u,a[l]=u)},fm=(t,n,a,o,l,u,d,p,h,m)=>{let y=t.length-2,v=m.length===0;h.length<y&&h.push(...Array(y-h.length).fill(0));let w=t[0],_=n[p?3:1]*l;for(let $=0,S=t.length-y-(p?1:0);$<y;++$,++S){let I=t[S],E=v?I*d[$]:m[$],k=cm(I,d[$],u[$],n[S],a[$],E);pm(k,o,u,$,$+y),v&&m.push(d[$]*(I-1)+h[$]+(n[S]-1)*a[$]+1-u[$]-u[$+y])}m.splice(0,0,w),m.splice(p?3:1,0,_)},Bl=(t,n)=>{let a=t.kernelShape.slice();if(t.kernelShape.length===0||t.kernelShape.reduce((v,w)=>v*w,1)===0){a.length=0;for(let v=2;v<n[1].dims.length;++v)a.push(n[1].dims[v])}let o=t.format==="NHWC";a.splice(0,0,n[1].dims[0]),a.splice(o?3:1,0,n[1].dims[1]);let l=t.pads.slice(),u=t.outputShape.slice(),d=t.outputPadding.slice(),p=n[0].dims,h=t.dilations.slice();if(h.reduce((v,w)=>v+w,0)===0){let v=n[0].dims.length-2;h=new Array(v).fill(1)}let m=t.strides.slice();if(m.reduce((v,w)=>v+w,0)===0){let v=n[0].dims.length-2;m=new Array(v).fill(1)}fm(p,a,h,t.autoPad,t.group,l,m,o,d,u);let y=Object.assign({},t);return Object.assign(y,{kernelShape:a,pads:l,outputPadding:d,outputShape:u,dilations:h,strides:m}),y},hm=t=>{let n=Sl(t),a=t.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],l=t.dilations,u=t.group??1,d=t.kernelShape,p=t.pads,h=t.strides,m=t.wIsConst(),y=t.outputPadding,v=t.outputShape;return{autoPad:o,format:a,dilations:l,group:u,kernelShape:d,outputPadding:y,outputShape:v,pads:p,strides:h,wIsConst:m,...n,cacheKey:`${t.format};${n.activation};`}},mm=(t,n)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length!==4&&t[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let a=t[0].dims[n.format==="NHWC"?t[0].dims.length-1:1],o=t[1].dims[0];if(a!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let l=t[1].dims[1]*n.group;if(t.length===3&&(t[2].dims.length!==1||t[2].dims[0]!==l))throw new Error("invalid bias");let u=t[0].dims.length-2;if(n.dilations.reduce((d,p)=>d+p,0)>0&&n.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(n.strides.reduce((d,p)=>d+p,0)>0&&n.strides.length!==u)throw new Error(`strides should be ${u}D`);if(n.pads.reduce((d,p)=>d+p,0)>0&&n.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(n.outputPadding.length!==u&&n.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(n.kernelShape.reduce((d,p)=>d+p,0)>0&&n.kernelShape.length!==0&&n.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape");if(n.outputShape.length!==0&&n.outputShape.length!==t[0].dims.length-2)throw new Error("invalid output shape")},Ll=(t,n,a,o)=>{let l=t.kernelCustomData.wT??t.compute(Kt(n[1],[2,3,0,1]),{inputs:[1],outputs:[a.wIsConst?-2:-1]})[0];a.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=l);let u=[n[0],l];n.length===3&&u.push(n[2]),t.compute(dm(u,a,o),{inputs:u})},gm=(t,n)=>{let a=n.format==="NHWC",o=[t.inputs[0].reshape(a?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&o.push(t.inputs[2]);let l=n.kernelShape;(l.length===0||l[0]===0)&&(l=[t.inputs[1].dims[2]]);let u=n.dilations;(u.length===0||u[0]===0)&&(u=[1]);let d=n.strides;(d.length===0||d[0]===0)&&(d=[1]);let p=n.pads;p.length===0&&(p=[0,0]),p=[0,p[0],0,p[1]],d=[1].concat(d),u=[1].concat(u),l=[1].concat(l);let h=n.outputPadding;h=[0].concat(h);let m=Bl({...n,pads:p,strides:d,dilations:u,kernelShape:l,outputPadding:h},o);Ll(t,o,m,y=>a?[y[0],y[2],y[3]]:[y[0],y[1],y[3]])},ym=(t,n)=>{if(mm(t.inputs,n),t.inputs[0].dims.length===3)gm(t,n);else{let a=Bl(n,t.inputs);Ll(t,t.inputs,a)}}}),vm,wm,_m,nx=x(()=>{ve(),be(),tt(),ke(),vm=(t,n,a,o)=>{let l=U.size(n),u=n.length,d=F("input",t,u),p=ae("output",t,u),h=a.dataType===6?a.getInt32Array()[0]:Number(a.getBigInt64Array()[0]),m=U.normalizeAxis(h,u),y=v=>{let w=` i32(${d.indicesGet("inputIndices","uniforms.axis")}) `,_=le("uniforms.input_shape","uniforms.axis",u),$=o.reverse?w+(o.exclusive?" + 1":""):"0",S=o.reverse?_:w+(o.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:o.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},{type:12,data:m},...de(n,n)]}),getShaderSource:y}},wm=(t,n)=>{let a=t.inputs[0].dims,o=t.inputs[0].dataType,l=t.inputs[1];t.compute(vm(o,a,l,n),{inputs:[0]})},_m=t=>{let n=t.exclusive===1,a=t.reverse===1;return Be({exclusive:n,reverse:a})}}),xm,$m,bm,km,Sm,ix=x(()=>{ve(),be(),tt(),ke(),xm=t=>{if(!t||t.length!==1)throw new Error("DepthToSpace requires 1 input.");if(t[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$m=(t,n,a,o)=>{let l=[];l.push(`fn perm(i: ${o.type.indices}) -> ${a.type.indices} {
    var a: ${a.type.indices};`);for(let u=0;u<n;++u)l.push(a.indicesSet("a",t[u],`i[${u}]`));return l.push("return a;}"),l.join(`
`)},bm=(t,n)=>{let a,o,l,u,d,p,h=n.format==="NHWC",m=n.blocksize,y=n.mode==="DCR";h?([a,o,l,u]=t.dims,d=y?[a,o,l,m,m,u/m**2]:[a,o,l,u/m**2,m,m],p=y?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([a,o,l,u]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],d=y?[a,m,m,u/m**2,o,l]:[a,u/m**2,m,m,o,l],p=y?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let v=t.reshape(d),w=v.dims.length,_=t.dataType,$=F("a",_,w),S=ae("output",_,w),I=E=>`
  ${E.registerUniform("output_size","u32").declareVariables($,S)}

  ${$m(p,w,$,S)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${n.blocksize};${n.mode}`,inputDependencies:["rank"]},getRunData:E=>{let k=h?[a,o*m,l*m,u/m**2]:[a,u/m**2,o*m,l*m],C=U.size(k),z=v.dims,O=U.sortBasedOnPerm(z,p);return{outputs:[{dims:k,dataType:E[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...de(z,O)]}},getShaderSource:I}},km=(t,n)=>{xm(t.inputs),t.compute(bm(t.inputs[0],n))},Sm=t=>Be({blocksize:t.blocksize,mode:t.mode,format:t.format})}),os,Fi,jl,Em,Tm,Im,zm,Ul,Cm,Nm,Rm,ax=x(()=>{ve(),be(),tt(),ke(),os="[a-zA-Z]|\\.\\.\\.",Fi="("+os+")+",jl="^"+Fi+"$",Em="("+Fi+",)*"+Fi,Tm="^"+Em+"$",Im=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,n){let a=this.symbolToIndices.get(t);a===void 0?a=[n]:a.push(n),this.symbolToIndices.set(t,a)}},zm=class{constructor(t,n){var l;this.equation=n,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[a,o]=n.includes("->")?n.split("->",2):[n,""];if(!a.match(RegExp(Tm)))throw new Error("Invalid LHS term");if(a.split(",").forEach((u,d)=>{let p=t[d].dims.slice();if(!u.match(RegExp(jl)))throw new Error("Invalid LHS term");let h=this.processTerm(u,!0,p,d);this.lhs.push(h)}),o==="")o+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!o.match(RegExp(Fi)))throw new Error("Invalid RHS");(l=o.match(RegExp(os,"g")))==null||l.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(o,!1,this.outputDims)}addSymbol(t,n,a){let o=this.symbolToInfo.get(t);if(o!==void 0){if(o.dimValue!==n&&o.count!==1)throw new Error("Dimension mismatch");o.count++,o.inputIndices.push(a)}else o={count:1,dimValue:n,inputIndices:[a]};this.symbolToInfo.set(t,o)}processTerm(t,n,a,o=-1){let l=a.length,u=!1,d=[],p=0;if(!t.match(RegExp(jl))&&!n&&t!=="")throw new Error("Invalid LHS term");let h=t.match(RegExp(os,"g")),m=new Im(o);return h==null||h.forEach((y,v)=>{if(y==="..."){if(u)throw new Error("Only one ellipsis is allowed per input term");u=!0;let w=l-h.length+1;if(w<0)throw new Error("Ellipsis out of bounds");if(d=a.slice(p,p+w),this.hasEllipsis){if(this.ellipsisDims.length!==d.length||this.ellipsisDims.toString()!==d.toString())throw new Error("Ellipsis dimensions mismatch")}else if(n)this.hasEllipsis=!0,this.ellipsisDims=d;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<d.length;_++){let $=String.fromCharCode(48+_);m.addSymbol($,v+_),this.addSymbol($,a[p++],o)}}else m.addSymbol(y,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(y,a[p++],o)}),m}},Ul=t=>t+"_max",Cm=(t,n,a,o)=>{let l=t.map(m=>m.length).map((m,y)=>F(`input${y}`,n,m)),u=U.size(o),d=ae("output",n,o.length),p=[...a.symbolToInfo.keys()].filter(m=>!a.rhs.symbolToIndices.has(m)),h=m=>{let y=[],v="var prod = 1.0;",w="var sum = 0.0;",_="sum += prod;",$=[],S=[],I=[],E=[],k=a.symbolToInfo.size===a.rhs.symbolToIndices.size;a.symbolToInfo.forEach((z,O)=>{var j;if(a.rhs.symbolToIndices.has(O)){let L=(j=a.rhs.symbolToIndices.get(O))==null?void 0:j[0];L!==void 0&&a.lhs.forEach((V,q)=>{if(z.inputIndices.includes(q)){let Z=V.symbolToIndices.get(O);if(Z===void 0)throw new Error("Invalid symbol error");Z.forEach(me=>{y.push(`${l[q].indicesSet(`input${q}Indices`,me,d.indicesGet("outputIndices",L))}`)})}})}else a.lhs.forEach((L,V)=>{if(z.inputIndices.includes(V)){let q=L.symbolToIndices.get(O);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(Z=>{$.push(`${l[V].indicesSet(`input${V}Indices`,Z,`${O}`)}`)}),E.push(`prod *= ${l[V].getByIndices(`input${V}Indices`)};`)}}),S.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Ul(O)}; ${O}++) {`),I.push("}")});let C=k?[...y,`let sum = ${l.map((z,O)=>z.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...y,w,...S,...$,v,...E,_,...I];return`
            ${m.registerUniforms(p.map(z=>({name:`${Ul(z)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...l,d)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${d.offsetToIndices("global_idx")};
            ${l.map((z,O)=>`var input${O}Indices: ${l[O].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${d.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:a.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let m=p.filter(v=>a.symbolToInfo.has(v)).map(v=>{var w;return{type:12,data:((w=a.symbolToInfo.get(v))==null?void 0:w.dimValue)||0}});m.push({type:12,data:u});let y=t.map((v,w)=>[...de(v)]).reduce((v,w)=>v.concat(w),m);return y.push(...de(o)),{outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:y}},getShaderSource:h}},Nm=(t,n)=>{let a=new zm(t.inputs,n.equation),o=a.outputDims,l=t.inputs.map((u,d)=>u.dims);t.compute(Cm(l,t.inputs[0].dataType,a,o))},Rm=t=>{let n=t.equation.replace(/\s+/g,"");return Be({equation:n})}}),Om,Vl,Am,Mm,Pm,sx=x(()=>{ve(),be(),ke(),Om=t=>{if(!t||t.length!==2)throw new Error("Expand requires 2 input.");let n=t[0].dims,a=Array.from(t[1].getBigInt64Array(),Number),o=a.length<n.length?0:a.length-n.length,l=n.length<a.length?0:n.length-a.length;for(;o<a.length&&l<n.length;++o,++l)if(a[o]!==n[l]&&a[o]!==1&&n[l]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Vl=(t,n)=>{let a=t.length-n.length,o=[];for(let l=0;l<a;++l)o.push(t[l]);for(let l=0;l<n.length;++l)o.push(n[l]===1?t[l+a]:n[l]);return o},Am=(t,n)=>t.length>n.length?Vl(t,n):Vl(n,t),Mm=t=>{let n=t[0].dims,a=Array.from(t[1].getBigInt64Array(),Number),o=Am(n,a),l=t[0].dataType,u=l===9||U.size(n)===1,d=l===9||n.length>0&&n[n.length-1]%4===0?4:1,p=u||o.length>0&&o[o.length-1]%4===0?4:1,h=Math.ceil(U.size(o)/p),m=v=>{let w=F("input",l,n.length,d),_=ae("output",l,o.length,p),$;if(l===9){let S=(I,E,k="")=>`
          let outputIndices${E} = ${_.offsetToIndices(`outputOffset + ${E}u`)};
          let offset${E} = ${w.broadcastedIndicesToOffset(`outputIndices${E}`,_)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${I}[${E}] = ${k}(${w.getByOffset(`index${E}`)}[component${E}]);
        `;$=`
        let outputOffset = global_idx * ${p};
        var data = vec4<u32>(0);
        ${S("data",0,"u32")}
        ${S("data",1,"u32")}
        ${S("data",2,"u32")}
        ${S("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${p}`)};
        let inputOffset = ${w.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${w.getByOffset(`inputOffset / ${d}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${v.registerUniform("vec_size","u32").declareVariables(w,_)}
    ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},y=[{type:12,data:h},...de(n,o)];return{name:"Expand",shaderCache:{hint:`${o.length};${d}${p}`,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y})}},Pm=t=>{Om(t.inputs),t.compute(Mm(t.inputs),{inputs:[0]})}}),Dm,Bm,ox=x(()=>{ve(),be(),ke(),kl(),Dm=t=>{let n=t[0].dataType,a=U.size(t[0].dims),o=U.size(t[1].dims),l=o%4===0,u=d=>{let p=F("x",n,[1],4),h=F("bias",n,[1],4),m=ae("y",n,[1],4),y=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],v=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${h.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,w=l?`
      let bias = ${h.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${v(0)}${v(1)}${v(2)}${v(3)}
      let bias = ${p.type.value}(bias0, bias1, bias2, bias3);`;return`${d.registerUniforms(y).declareVariables(p,h,m)}

    ${$l(Tt(n))}

    ${d.mainStart(ri)}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${p.getByOffset("global_idx")};
      ${w}
      let x_in = x + bias;
      ${m.setByOffset("global_idx",bl("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${l}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:d=>({outputs:[{dims:d[0].dims,dataType:d[0].dataType}],programUniforms:[{type:12,data:Math.ceil(a/4)},{type:12,data:o}],dispatchGroup:{x:Math.ceil(a/ri/4)}})}},Bm=t=>{t.inputs.length<2||U.size(t.inputs[1].dims)===0?vh(t):t.compute(Dm(t.inputs))}}),Lm,jm,Um,Vm,lx=x(()=>{ve(),be(),tt(),ke(),Lm=t=>{if(!t||t.length!==2)throw new Error("Gather requires 2 inputs.")},jm=(t,n)=>{let a=t[0].dims,o=t[1].dims,l=a.length,u=U.normalizeAxis(n.axis,l),d=a.slice(0);d.splice(u,1,...o);let p=a[u],h=t[0].dataType===9?4:1,m=Math.ceil(U.size(d)/h),y=[{type:12,data:m},{type:6,data:p},{type:12,data:u},...de(t[0].dims,t[1].dims,d)],v=w=>{let _=F("data",t[0].dataType,t[0].dims.length,h),$=F("inputIndices",t[1].dataType,t[1].dims.length),S=ae("output",t[0].dataType,d.length,h),I=k=>{let C=o.length,z=`var indicesIndices${k}  = ${$.type.indices}(0);`;for(let O=0;O<C;O++)z+=`${C>1?`indicesIndices${k}[${O}]`:`indicesIndices${k}`} = ${d.length>1?`outputIndices${k}[uniforms.axis + ${O}]`:`outputIndices${k}`};`;z+=`
          var idx${k} = ${$.getByIndices(`indicesIndices${k}`)};
          if (idx${k} < 0) {
            idx${k} = idx${k} + uniforms.axisDimLimit;
          }
          var dataIndices${k} : ${_.type.indices};
        `;for(let O=0,j=0;O<l;O++)O===u?(z+=`${l>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = u32(idx${k});`,j+=C):(z+=`${l>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = ${d.length>1?`outputIndices${k}[${j}]`:`outputIndices${k}`};`,j++);return z},E;if(t[0].dataType===9){let k=(C,z,O="")=>`
          let outputIndices${z} = ${S.offsetToIndices(`outputOffset + ${z}u`)};
          ${I(z)};
          let offset${z} = ${_.indicesToOffset(`dataIndices${z}`)};
          let index${z} = offset${z} / 4u;
          let component${z} = offset${z} % 4u;
          ${C}[${z}] = ${O}(${_.getByOffset(`index${z}`)}[component${z}]);
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
      ${I("")};
      let value = ${_.getByIndices("dataIndices")};
      ${S.setByOffset("global_idx","value")};
      `;return`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,$,S)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${E}
      }`};return{name:"Gather",shaderCache:{hint:n.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:v}},Um=t=>Be({axis:t.axis}),Vm=(t,n)=>{let a=t.inputs;Lm(a),t.compute(jm(t.inputs,n))}}),Fm,qm,Wm,ux=x(()=>{ve(),be(),ke(),Fm=(t,n,a,o,l,u,d,p,h)=>{let m=[{type:12,data:u},{type:12,data:o},{type:12,data:l},{type:12,data:a},{type:12,data:d},{type:12,data:p},{type:12,data:h}],y=[u];m.push(...de(n.dims,y));let v=w=>{let _=F("indices_data",n.dataType,n.dims.length),$=ae("input_slice_offsets_data",12,1,1),S=[_,$],I=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:l.length},{name:"sizes_from_slice_dims_data",type:"u32",length:a.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${w.registerUniforms(I).declareVariables(...S)}
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
  }`};return t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${l.length}_${a.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:y,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:v},{inputs:[n],outputs:[-1]})[0]},qm=(t,n)=>{let a=t.inputs,o=a[0].dims,l=a[0].dataType,u=a[1].dims,d=u[u.length-1],p=U.sizeToDimension(u,u.length-1),h=U.sizeFromDimension(o,n.batchDims+d),m=U.sizeToDimension(o,n.batchDims),y=U.sizeFromDimension(o,n.batchDims),v=p/m,w=new Array(d),_=h;for(let z=0;z<d;++z)w[d-1-z]=_,_*=o[n.batchDims+d-1-z];let $=Fm(t,a[1],w,n.batchDims,o,p,v,y,d),S=n.batchDims+d;if(S>o.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let I=u.slice(0,-1).concat(o.slice(S)),E=U.size(I),k=[{type:12,data:E},{type:12,data:h},...de(a[0].dims,$.dims,I)],C=z=>{let O=F("data",a[0].dataType,a[0].dims.length),j=F("slice_offsets",12,$.dims.length),L=ae("output",a[0].dataType,I.length);return`
          ${z.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,j,L)}
            ${z.mainStart()}
            ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};t.compute({name:"GatherND",shaderCache:{hint:n.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:I,dataType:l}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:k}),getShaderSource:C},{inputs:[a[0],$]})},Wm=t=>({batchDims:t.batch_dims,cacheKey:""})}),Gm,Hm,Km,Qm,dx=x(()=>{ve(),be(),tt(),ke(),Gm=(t,n)=>{if(t.length<3||t.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let a=U.normalizeAxis(n.quantizeAxis,t[0].dims.length),o=n.blockSize,l=t[0],u=t[2],d=t.length===4?t[3]:void 0;if(u.dims.length!==l.dims.length||!l.dims.map((p,h)=>h===a?Math.ceil(p/o)===u.dims[h]:p===u.dims[h]).reduce((p,h)=>p&&h,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(d){if(d.dataType!==l.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(d.dims.length!==u.dims.length||!d.dims.map((p,h)=>p===u.dims[h]).reduce((p,h)=>p&&h,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Hm=(t,n)=>{let a=t[0].dims,o=t[1].dims,l=a.length,u=U.normalizeAxis(n.gatherAxis,l),d=U.normalizeAxis(n.quantizeAxis,l),p=a.slice(0);p.splice(u,1,...o);let h=U.size(p),m=t[2].dataType,y=t[0].dataType===22,v=[{type:12,data:h},{type:12,data:d},{type:12,data:u},{type:12,data:n.blockSize},...de(...t.map((_,$)=>_.dims),p)],w=_=>{let $=F("data",t[0].dataType,t[0].dims.length),S=F("inputIndices",t[1].dataType,t[1].dims.length),I=F("scales",t[2].dataType,t[2].dims.length),E=t.length>3?F("zeroPoint",t[3].dataType,t[3].dims.length):void 0,k=ae("output",m,p.length),C=[$,S,I];E&&C.push(E);let z=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(z).declareVariables(...C,k)}
        ${_.mainStart()}
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
        let quantize_axis_index = ${I.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${I.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${I.getByIndices("scale_indices")};
        ${E?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${E.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${E.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Tt(m)}(quantized_data - zero_point) * scale;
        ${k.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${n.cacheKey};${t.filter((_,$)=>$!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(_,$)=>"rank")},getRunData:()=>({outputs:[{dims:p,dataType:m}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:w}},Km=(t,n)=>{let a=t.inputs;Gm(a,n),t.compute(Hm(t.inputs,n))},Qm=t=>Be({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),Xm,Zm,Ym,Jm,cx=x(()=>{ve(),be(),tt(),ke(),Xm=t=>{if(!t||t.length!==2)throw new Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Zm=(t,n)=>{let a=t[0].dims,o=t[0].dataType,l=a.length,u=t[1].dims,d=t[1].dataType,p=U.normalizeAxis(n.axis,l),h=a[p],m=u.slice(0),y=U.size(m),v=F("input",o,l),w=F("indicesInput",d,u.length),_=ae("output",o,m.length),$=[{type:12,data:y},{type:6,data:h},{type:12,data:p}];return $.push(...de(a,u,m)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:m,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:$}),getShaderSource:S=>`
      ${S.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(v,w,_)}
      ${S.mainStart()}
      ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${w.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${v.type.indices}(outputIndices);
      ${v.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${v.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Ym=t=>Be({axis:t.axis}),Jm=(t,n)=>{let a=t.inputs;Xm(a),t.compute(Zm(t.inputs,n))}}),eg,tg,rg,ng,px=x(()=>{ve(),be(),ke(),eg=t=>{if(!t)throw new Error("Input is missing");if(t.length<2||t.length>3)throw new Error("Invaid input number.");if(t.length===3&&t[2].dims.length>2)throw new Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("Input types are mismatched")},tg=(t,n)=>{let a=t[0].dims.slice(),o=t[1].dims.slice(),[l,u,d]=cp.getShapeOfGemmResult(a,n.transA,o,n.transB,t.length===3?t[2].dims:void 0),p=[l,u];if(!p)throw new Error("Can't use gemm on the given tensors");let h=16,m=Math.ceil(u/h),y=Math.ceil(l/h),v=!0,w=U.size(p),_=[{type:12,data:v?m:w},{type:12,data:l},{type:12,data:u},{type:12,data:d},{type:1,data:n.alpha},{type:1,data:n.beta}],$=["type","type"];t.length===3&&(_.push(...de(t[2].dims)),$.push("rank")),_.push(...de(p));let S=E=>{let k="";n.transA&&n.transB?k="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":n.transA&&!n.transB?k="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!n.transA&&n.transB?k="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!n.transA&&!n.transB&&(k="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=n.alpha===1?"":"value *= uniforms.alpha;",z=F("a",t[0].dataType,t[0].dims),O=F("b",t[1].dataType,t[1].dims),j=z.type.value,L=null,V=[z,O];t.length===3&&(L=F("c",t[2].dataType,t[2].dims.length),V.push(L));let q=ae("output",t[0].dataType,p.length);V.push(q);let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${E.registerUniforms(Z).declareVariables(...V)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${j}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${k}
    }

    ${C}
    ${L!=null?`let cOffset = ${L.broadcastedIndicesToOffset("vec2(m, n)",q)}; value += ${j}(uniforms.beta) * ${L.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},I=E=>{let k=F("a",t[0].dataType,t[0].dims),C=F("b",t[1].dataType,t[1].dims),z=null,O=[k,C];t.length===3&&(z=F("c",t[2].dataType,t[2].dims.length),O.push(z));let j=ae("output",t[0].dataType,p.length);O.push(j);let L=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],V="",q="";n.transA&&n.transB?(q=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):n.transA&&!n.transB?(q=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!n.transA&&n.transB?(q=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!n.transA&&!n.transB&&(q=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let Z=n.alpha===1?"":"value *= uniforms.alpha;";return`
  ${E.registerUniforms(L).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${k.type.storage}, ${h}>, ${h}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${h}>, ${h}>;
  ${E.mainStart([h,h,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${h};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${h};
    let num_tiles = (uniforms.K - 1) / ${h} + 1;
    var k_start = 0u;
    var value = ${j.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${q}
      k_start = k_start + ${h};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${h}; k++) {
        ${V}
      }
      workgroupBarrier();
    }

    ${Z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",j)}; value += ${j.type.value}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return v?{name:"GemmShared",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:p,dataType:t[0].dataType}],dispatchGroup:{x:m*y},programUniforms:_}),getShaderSource:I}:{name:"Gemm",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:p,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:_}),getShaderSource:S}},rg=t=>{let n=t.transA,a=t.transB,o=t.alpha,l=t.beta;return{transA:n,transB:a,alpha:o,beta:l,cacheKey:`${t.transA};${t.transB};${t.alpha===1}`}},ng=(t,n)=>{eg(t.inputs),t.compute(tg(t.inputs,n))}}),Tr,Pr,An,Mn,ig,ag,sg,og,lg,ug,dg,cg,pg,fg,fx=x(()=>{ve(),be(),tt(),ke(),[Tr,Pr,An,Mn]=[0,1,2,3],ig=t=>{if(t[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw new Error("grid batch size must match input batch size")},ag=`
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
`,sg=t=>`
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
`,og=t=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${t.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,lg=t=>`
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
`,ug=(t,n,a)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${n} {
     var pixel = ${n}(0);
     var indices = vec4<u32>(0);
     indices[${Tr}] = batch;
     indices[${Pr}] = channel;`+(()=>{switch(a.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${An}] = u32(r);
            indices[${Mn}] = u32(c);
          } else {
            return ${n}(0);
          }
        `;case"border":return`
          indices[${An}] = u32(clamp(r, 0, H - 1));
          indices[${Mn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${An}] = gs_reflect(r, border[1], border[3]);
          indices[${Mn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${a.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`,dg=(t,n,a)=>(()=>{switch(a.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Tr}], indices[${Pr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Tr}], indices[${Pr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Tr}], indices[${Pr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Tr}], indices[${Pr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Tr}], indices[${Pr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Tr}], indices[${Pr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${a.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`,cg=(t,n)=>{let a=F("x",t[0].dataType,t[0].dims.length),o=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],l=F("grid",t[1].dataType,o.length,2),u=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];n.format==="NHWC"&&(u=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[Tr,Pr,An,Mn]=[0,3,1,2]);let d=ae("output",t[0].dataType,u.length),p=a.type.value,h=U.size(u),m=[{type:12,data:h},...de(t[0].dims,o,u)],y=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(a,l,d)}
  ${ag}
  ${sg(p)}
  ${og(n)}
  ${lg(n)}
  ${ug(a,p,n)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${An}]);
      let W_in = i32(uniforms.x_shape[${Mn}]);

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
      var grid_indices = vec3<u32>(indices[${Tr}], indices[${An}], indices[${Mn}]);
      let nxy = ${l.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${dg(d,p,n)}
  }`;return{name:"GridSample",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:["type","type"]},getRunData:v=>{let w=U.size(u);return{outputs:[{dims:u,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:m}},getShaderSource:y}},pg=(t,n)=>{ig(t.inputs),t.compute(cg(t.inputs,n))},fg=t=>Be({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),At,hg,mg,Fl,gg,qi,yg,vg=x(()=>{ve(),be(),tt(),ul(),_l(),ke(),Zr(),At=(t,n)=>t.length>n&&t[n].dims.length>0?t[n]:void 0,hg=(t,n)=>{let a=t[0],o=At(t,1),l=At(t,2),u=At(t,3),d=At(t,4),p=At(t,5),h=At(t,6),m=At(t,7);if(a.dims.length!==3&&a.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let y=a.dims[0],v=a.dims[1],w=a.dims.length===3?a.dims[2]:n.numHeads*a.dims[4],_=v,$=0,S=0,I=Math.floor(w/n.numHeads);if(h&&m&&U.size(h.dims)&&U.size(m.dims)){if(h.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(h.dims[0]!==y||h.dims[1]!==n.numHeads||h.dims[3]!==I)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[0]!==y||m.dims[1]!==n.numHeads||m.dims[3]!==I)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[2]!==m.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(m.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=h.dims[2],S=h.dims[2]}else if(h&&U.size(h.dims)||m&&U.size(m.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E;if(o&&U.size(o.dims)>0){if(a.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(o.dims[2]!==a.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');E=2,_=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==n.numHeads||o.dims[3]!==2||o.dims[4]!==I)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(l)throw new Error('Expect "value" be none when "key" has packed kv format.');E=5,_=o.dims[1]}else{if(o.dims[1]!==n.numHeads||o.dims[3]!==I)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');E=0,_=o.dims[2]}}else{if(a.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(a.dims[2]!==n.numHeads||a.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}if(u&&U.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(o&&o.dims.length===5&&o.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let k=$+_,C=0;if(d&&U.size(d.dims)>0){C=8;let L=d.dims;throw L.length===1?L[0]===y?C=1:L[0]===3*y+2&&(C=3):L.length===2&&L[0]===y&&L[1]===k&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let z=!1,O=w;if(l&&U.size(l.dims)>0){if(l.dims.length!==3&&l.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==l.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(l.dims.length===3){if(_!==l.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=l.dims[2]}else{if(_!==l.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=l.dims[1]*l.dims[3],z=!0}}let j=!1;if(d&&U.size(d.dims)>0)throw new Error("Key padding mask is not supported");if(p&&U.size(p.dims)>0){if(p.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(p.dims[0]!==y||p.dims[1]!==n.numHeads||p.dims[2]!==v||p.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:y,sequenceLength:v,pastSequenceLength:$,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:w,vHiddenSize:O,headSize:I,vHeadSize:Math.floor(O/n.numHeads),numHeads:n.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:n.maskFilterValue,maskType:C,scale:n.scale,broadcastResPosBias:j,passPastInKv:z,qkvFormat:E}},mg=t=>Be({...t}),Fl=Be({perm:[0,2,1,3]}),gg=(t,n,a,o,l,u,d)=>{let p=[o,l,u],h=U.size(p),m=[{type:12,data:h},{type:12,data:d},{type:12,data:u}],y=v=>{let w=ae("qkv_with_bias",n.dataType,p),_=F("qkv",n.dataType,p),$=F("bias",a.dataType,p),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${v.registerUniforms(S).declareVariables(_,$,w)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:p,dataType:n.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y},{inputs:[n,a],outputs:[-1]})[0]},qi=(t,n,a,o,l,u,d,p)=>{let h=u;if(d&&U.size(d.dims)>0){if(o===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return h=gg(t,u,d,n,o,a*l,p),h=h.reshape([n,o,a,l]),a===1||o===1?h:t.compute(Kt(h,Fl.perm),{inputs:[h],outputs:[-1]})[0]}else return u.dims.length===3&&(h=u.reshape([n,o,a,l])),a===1||o===1?h:t.compute(Kt(h,Fl.perm),{inputs:[h],outputs:[-1]})[0]},yg=(t,n)=>{let a=hg(t.inputs,n),o=t.inputs[0],l=At(t.inputs,1),u=At(t.inputs,2),d=At(t.inputs,3),p=At(t.inputs,4),h=At(t.inputs,5),m=At(t.inputs,6),y=At(t.inputs,7);if(o.dims.length===5)throw new Error("Packed QKV is not implemented");if((l==null?void 0:l.dims.length)===5)throw new Error("Packed KV is not implemented");let v=l&&u&&l.dims.length===4&&u.dims.length===4,w=qi(t,a.batchSize,a.numHeads,a.sequenceLength,a.headSize,o,d,0);if(v)return Li(t,w,l,u,p,void 0,m,y,h,a);if(!l||!u)throw new Error("key and value must be provided");let _=qi(t,a.batchSize,a.numHeads,a.kvSequenceLength,a.headSize,l,d,a.hiddenSize),$=qi(t,a.batchSize,a.numHeads,a.kvSequenceLength,a.vHeadSize,u,d,2*a.hiddenSize);Li(t,w,_,$,p,void 0,m,y,h,a)}}),wg,_g,xg,$g,ql,bg,kg,Sg=x(()=>{ve(),be(),tt(),ke(),wg=t=>{if(!t||t.length<1)throw new Error("too few inputs")},_g=(t,n)=>{let a=[],o=n.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(l=>a.push(Number(l))),o=a.length),Be({numOutputs:o,axis:n.axis,splitSizes:a})},xg=t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`,$g=t=>{let n=t.length,a=[];for(let o=0;o<n;++o){let l=t[o].setByIndices("indices","input[global_idx]");n===1?a.push(l):o===0?a.push(`if (output_number == ${o}u) { ${l} }`):o===n-1?a.push(`else { ${l} }`):a.push(`else if (output_number == ${o}) { ${l} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${a.join(`
`)}
      }`},ql=(t,n)=>{let a=t[0].dims,o=U.size(a),l=t[0].dataType,u=U.normalizeAxis(n.axis,a.length),d=new Array(n.numOutputs),p=F("input",l,a.length),h=new Array(n.numOutputs),m=[],y=[],v=0,w=[{type:12,data:o}];for(let $=0;$<n.numOutputs;$++){v+=n.splitSizes[$],h[$]=v;let S=a.slice();S[u]=n.splitSizes[$],y.push(S),d[$]=ae(`output${$}`,l,S.length),m.push({dims:y[$],dataType:t[0].dataType})}w.push({type:12,data:h},...de(a,...y));let _=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",h.length).declareVariables(p,...d)}
  ${xg(h.length)}
  ${$g(d)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${p.offsetToIndices("global_idx")};
    var index = ${p.indicesGet("indices",u)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",h.length)};
      ${p.indicesSet("indices",u,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:m,dispatchGroup:{x:Math.ceil(o/64)},programUniforms:w})}},bg=(t,n)=>{wg(t.inputs);let a=t.inputs.length===1?n:_g(t.inputs,n);t.compute(ql(t.inputs,a),{inputs:[0]})},kg=t=>{let n=t.axis,a=t.splitSizes,o=t.numOutputs<0?a.length:t.numOutputs;if(o!==a.length)throw new Error("numOutputs and splitSizes length must be equal");return Be({axis:n,numOutputs:o,splitSizes:a})}}),Eg,ls,Tg,Ig=x(()=>{ve(),be(),tt(),ke(),Eg=(t,n)=>{let[a,o,l,u]=t,{numHeads:d,rotaryEmbeddingDim:p}=n;if(a.dims.length!==3&&a.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${a.dims.length}`);if(!U.areEqual(o.dims,[])&&!U.areEqual(o.dims,[1])&&o.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${o.dims.length}`);if(l.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${l.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!U.areEqual(l.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(p>0&&d===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let h=a.dims[0],m=a.dims[a.dims.length-2],y=l.dims[0],v=U.sizeFromDimension(a.dims,1)/m,w=p===0?l.dims[1]*2:v/d;if(p>w)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(o.dims.length===2){if(h!==o.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${o.dims[0]}`);if(m!==o.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${o.dims[1]}`)}if(m>y)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(w/2!==l.dims[1]&&p/2!==l.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${l.dims[1]}`)},ls=(t,n)=>{let{interleaved:a,numHeads:o,rotaryEmbeddingDim:l,scale:u}=n,d=t[0].dims[0],p=U.sizeFromDimension(t[0].dims,1),h=t[0].dims[t[0].dims.length-2],m=p/h,y=t[2].dims[1],v=l===0?y*2:m/o,w=new Array(d,h,m/v,v-y),_=U.computeStrides(w),$=[{type:1,data:u},{type:12,data:w},{type:12,data:_},...t[0].dims.length===3?new Array({type:12,data:[p,m,v,1]}):[],...t[0].dims.length===4?new Array({type:12,data:[p,v,h*v,1]}):[],...de(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)],S=I=>{let E=F("input",t[0].dataType,t[0].dims.length),k=F("position_ids",t[1].dataType,t[1].dims.length),C=F("cos_cache",t[2].dataType,t[2].dims.length),z=F("sin_cache",t[3].dataType,t[3].dims.length),O=ae("output",t[0].dataType,t[0].dims.length);return I.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:w.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${I.declareVariables(E,k,C,z,O)}

        ${I.mainStart(ri)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${k.broadcastedIndicesToOffset("bsnh.xy",ae("",k.type.tensor,2))};
            let position_id =
                u32(${k.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${a});
            let j = i + select(half_rotary_emb_dim, 1, ${a});
            let re = ${E.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${E.getByOffset("j")} * ${z.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${E.getByOffset("i")} * ${z.get("position_id","bsnh[3]")} +
                ${E.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",E.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Be({interleaved:a}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(w)/ri)},programUniforms:$})}},Tg=(t,n)=>{Eg(t.inputs,n),t.compute(ls(t.inputs,n))}}),zg,Cg,Wl,Ng,Rg,hx=x(()=>{tt(),ve(),_l(),vg(),Sg(),Zr(),Ig(),ke(),zg=(t,n)=>{if(n.doRotary&&t.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let a=t[0],o=t[1],l=t[2],u=t[3],d=t[4];if(n.doRotary!==0&&t.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(n.localWindowSize!==-1)throw new Error("Local attention is not supported");if(n.softcap!==0)throw new Error("Softcap is not supported");if(n.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(n.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(a.dims.length!==3&&a.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=!1,h=a.dims[0],m=a.dims[1],y=a.dims.length===3?p?a.dims[2]/3:a.dims[2]:n.numHeads*a.dims[4],v=m,w=0,_=!o||o.dims.length===0,$=Math.floor(_?y/(n.numHeads+2*n.kvNumHeads):y/n.numHeads);_&&(y=$*n.numHeads);let S=u&&u.dims.length!==0,I=d&&d.dims.length!==0;if(S&&u.dims.length===4&&u.dims[0]===h&&u.dims[1]!==n.kvNumHeads&&u.dims[2]===n.kvNumHeads&&u.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&I){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2]}else if(S||I)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E=1;if(o&&o.dims.length>0){if(a.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(a.dims[2]%o.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');v=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==n.numHeads||o.dims[3]!==2||o.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(l)throw new Error('Expect "value" be none when "key" has packed kv format.');v=o.dims[1]}else{if(o.dims[1]!==n.numHeads||o.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=o.dims[2]}}else{if(a.dims.length!==3&&a.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(a.dims.length===5&&(a.dims[2]!==n.numHeads||a.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}let k=0,C=!1,z=n.kvNumHeads?$*n.kvNumHeads:y;if(l&&l.dims.length>0){if(l.dims.length!==3&&l.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==l.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(l.dims.length===3){if(v!==l.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');z=l.dims[2]}else{if(v!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');z=l.dims[1]*l.dims[3],C=!0}}let O=t.length>4?t[5]:void 0;if(O){if(O.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let j=O.dims.reduce((L,V)=>L*V,1);if(j!==h)throw new Error(`seqlens_k must have batch_size (${h}) elements, got ${j}.`);for(let L=0;L<O.dims.length;L++)if(O.dims[L]!==1&&O.dims[L]!==h)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${h}), got dims[${L}] = ${O.dims[L]}.`)}return{batchSize:h,sequenceLength:m,pastSequenceLength:w,kvSequenceLength:v,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:y,vHiddenSize:z,headSize:$,vHeadSize:Math.floor(z/n.kvNumHeads),numHeads:n.numHeads,kvNumHeads:n.kvNumHeads,nReps:n.numHeads/n.kvNumHeads,pastPresentShareBuffer:!1,maskType:k,scale:n.scale,broadcastResPosBias:!1,passPastInKv:C,qkvFormat:E}},Cg=Be({perm:[0,2,1,3]}),Wl=(t,n,a)=>{let o=n,l=a.kvNumHeads;return n.dims.length===3&&a.kvSequenceLength!==0&&(o=n.reshape([a.batchSize,a.kvSequenceLength,l,a.headSize]),o=t.compute(Kt(o,Cg.perm),{inputs:[o],outputs:[-1]})[0]),o},Ng=(t,n,a,o)=>{let l=7,u=["type","type"],d=[t*n],p=t*n,h=[{type:12,data:p},{type:12,data:n},{type:12,data:t}],m=y=>{let v=F("seq_lens",a.dataType,a.dims),w=F("total_seq_lens",o.dataType,o.dims),_=ae("pos_ids",l,d),$=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${y.registerUniforms($).declareVariables(v,w,_)}
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
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${t};${n}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:d,dataType:l}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:m}},Rg=(t,n)=>{var z;let a=zg(t.inputs,n);if(t.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((z=t.inputs[1])==null?void 0:z.dims.length)===5)throw new Error("Packed KV is not implemented");let o=t.inputs[0],l=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,u=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,d=t.inputs[3]&&t.inputs[3].dims.length!==0?t.inputs[3]:void 0,p=t.inputs[4]&&t.inputs[4].dims.length!==0?t.inputs[4]:void 0,h=t.inputs.length>4?t.inputs[5]:void 0,m=t.inputs.length>5?t.inputs[6]:void 0,y=a.kvNumHeads?a.kvNumHeads:a.numHeads,v=Be({axis:2,numOutputs:3,splitSizes:[a.numHeads*a.headSize,y*a.headSize,y*a.headSize]}),[w,_,$]=!l&&!u?t.compute(ql([o],v),{inputs:[o],outputs:[-1,-1,-1]}):[o,l,u],S,I;if(n.doRotary){let O=t.compute(Ng(a.batchSize,a.sequenceLength,h,m),{inputs:[h,m],outputs:[-1]})[0],j=t.inputs[7],L=t.inputs[8],V=Be({interleaved:n.rotaryInterleaved!==0,numHeads:a.numHeads,rotaryEmbeddingDim:0,scale:n.scale}),q=[w,O,j,L],Z=[-1];S=t.compute(ls(q,V),{inputs:q,outputs:Z})[0],q.splice(0,1,_);let me=Be({interleaved:n.rotaryInterleaved!==0,numHeads:a.kvNumHeads,rotaryEmbeddingDim:0,scale:n.scale});I=t.compute(ls(q,me),{inputs:q,outputs:Z})[0]}let E=qi(t,a.batchSize,a.numHeads,a.sequenceLength,a.headSize,n.doRotary?S:w,void 0,0),k=Wl(t,n.doRotary?I:_,a),C=Wl(t,$,a);Li(t,E,k,C,void 0,void 0,d,p,void 0,a,h,m)}}),Gl,Og,Ag,Mg,mx=x(()=>{ve(),be(),Zr(),ke(),Gl=(t,n,a,o,l,u,d,p)=>{let h=Ze(u),m=h===1?"f32":`vec${h}f`,y=h===1?"vec2f":`mat2x${h}f`,v=l*d,w=64;v===1&&(w=256);let _=[l,d,u/h],$=[l,d,2],S=["rank","type","type"],I=[];I.push(...de(_,$));let E=k=>{let C=F("x",n.dataType,3,h),z=F("scale",a.dataType,a.dims),O=F("bias",o.dataType,o.dims),j=ae("output",1,3,2),L=[C,z,O,j];return`
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
      let value = ${m}(${C.get("batch","channel","h")});
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
      let sum_final = ${Xr("workgroup_shared[0][0]",h)} / f32(hight * ${h});
      let squared_sum_final = ${Xr("workgroup_shared[0][1]",h)} / f32(hight * ${h});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${p}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${h};${p};${w}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:v},programUniforms:I}),getShaderSource:E},{inputs:[n,a,o],outputs:[-1]})[0]},Og=(t,n,a)=>{let o=n[0].dims,l=o,u=2,d=o[0],p=o[1],h=U.sizeFromDimension(o,u),m=Ze(h),y=U.size(l)/m,v=Gl(t,n[0],n[1],n[2],d,h,p,a.epsilon),w=[d,p,h/m],_=[d,p],$=["type","none"],S=I=>{let E=F("x",n[0].dataType,w.length,m),k=F("scale_shift",1,_.length,2),C=ae("output",n[0].dataType,w.length,m),z=[E,k,C];return`
  ${I.registerUniform("output_size","u32").declareVariables(...z)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${k.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${E.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};t.compute({name:"InstanceNormalization",shaderCache:{hint:`${m}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:l,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...de(w,_,w)]}),getShaderSource:S},{inputs:[n[0],v]})},Ag=(t,n,a)=>{let o=n[0].dims,l=o,u=o[0],d=o[o.length-1],p=U.sizeFromDimension(o,1)/d,h=Ze(d),m=U.size(l)/h,y=[{type:12,data:p},{type:12,data:Math.floor(d/h)}],v=["type","type"],w=!1,_=[0,o.length-1];for(let E=0;E<o.length-2;E++)w=w||o[E+1]!==1,_.push(E+1);w=w&&o[o.length-1]!==1;let $=w?t.compute(Kt(t.inputs[0],_),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:o.length},(E,k)=>o[_[k]])),S=Gl(t,$,n[1],n[2],u,p,d,a.epsilon),I=E=>{let k=pt(n[0].dataType),C=h===1?"vec2f":`mat${h}x2f`,z=L=>{let V=L===0?"x":"y",q=h===1?"f32":`vec${h}f`;switch(h){case 1:return`${k}(${q}(scale.${V}))`;case 2:return`vec2<${k}>(${q}(scale[0].${V}, scale[1].${V}))`;case 4:return`vec4<${k}>(${q}(scale[0].${V}, scale[1].${V}, scale[2].${V}, scale[3].${V}))`;default:throw new Error(`Not supported compoents ${h}`)}},O=F("input",n[0].dataType,n[0].dims,h),j=ae("output",n[0].dataType,l,h);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${j.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${E.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${z(0)}, ${z(1)});
  }`};t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${h}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:l,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:I},{inputs:[n[0],S]})},Mg=(t,n)=>{n.format==="NHWC"?Ag(t,t.inputs,n):Og(t,t.inputs,n)}}),Pg,Dg,Bg,gx=x(()=>{ve(),be(),ke(),Pg=t=>{if(!t||t.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Dg=(t,n,a)=>{let o=n.simplified,l=t[0].dims,u=t[1],d=!o&&t[2],p=l,h=U.normalizeAxis(n.axis,l.length),m=U.sizeToDimension(l,h),y=U.sizeFromDimension(l,h),v=U.size(u.dims),w=d?U.size(d.dims):0;if(v!==y||d&&w!==y)throw new Error(`Size of X.shape()[axis:] == ${y}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${v} and bias size of ${w}`);let _=[];for(let O=0;O<l.length;++O)O<h?_.push(l[O]):_.push(1);let $=Ze(y),S=["type","type"],I=[{type:12,data:m},{type:1,data:y},{type:12,data:Math.floor(y/$)},{type:1,data:n.epsilon}];d&&S.push("type");let E=a>1,k=a>2,C=O=>{let j=pt(t[0].dataType),L=[F("x",t[0].dataType,t[0].dims,$),F("scale",u.dataType,u.dims,$)];d&&L.push(F("bias",d.dataType,d.dims,$)),L.push(ae("output",t[0].dataType,p,$)),E&&L.push(ae("mean_data_output",1,_)),k&&L.push(ae("inv_std_output",1,_));let V=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(V).declareVariables(...L)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${fl("f32",$)};
    var mean_square_vector = ${fl("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ni(j,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Xr("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Xr("mean_square_vector",$)} / uniforms.norm_size ${o?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ni(j,$,"x[j + offset]")};
      let f32scale = ${ni(j,$,"scale[j]")};
      output[j + offset] = ${L[0].type.value}((f32input ${o?"":"- mean"}) * inv_std_dev * f32scale
        ${d?`+ ${ni(j,$,"bias[j]")}`:""}
      );
    }

    ${E?"mean_data_output[global_idx] = mean":""};
    ${k?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},z=[{dims:p,dataType:t[0].dataType}];return E&&z.push({dims:_,dataType:1}),k&&z.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${a};${o}`,inputDependencies:S},getRunData:()=>({outputs:z,dispatchGroup:{x:Math.ceil(m/64)},programUniforms:I}),getShaderSource:C}},Bg=(t,n)=>{Pg(t.inputs),t.compute(Dg(t.inputs,n,t.outputCount))}}),Lg,jg,yx=x(()=>{be(),Il(),Rl(),Lg=t=>{if(!t||t.length!==2)throw new Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw new Error("shared dimension does not match.")},jg=t=>{Lg(t.inputs);let n=ti.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!n)throw new Error("Can't use matmul on the given tensors");let a=n[n.length-1],o=t.inputs[0].dims[t.inputs[0].dims.length-1];if(a<8&&o<8)t.compute(Tl(t.inputs,{activation:""},n));else{let l=n[n.length-2],u=U.size(t.inputs[0].dims.slice(0,-2)),d=U.size(t.inputs[1].dims.slice(0,-2));if(u!==1&&l===1&&d===1){let p=t.inputs[0].reshape([1,u,o]),h=t.inputs[1].reshape([1,o,a]),m=[1,u,a],y=[p,h];t.compute(is(y,{activation:""},n,m),{inputs:y})}else t.compute(is(t.inputs,{activation:""},n))}}}),Ug,Vg,Fg,qg,Wg,vx=x(()=>{ve(),be(),tt(),ke(),Ug=(t,n)=>{if(t.length<3||t.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let a=t[0],o=a.dims.length;if(a.dims[o-1]!==n.k)throw new Error("The last dim of input shape does not match the k value");let l=Math.floor((n.k+n.blockSize-1)/n.blockSize),u=n.blockSize/8*n.bits,d=t[1];if(!U.areEqual(d.dims,[n.n,l,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let p=t[2].dims;if(U.size(p)!==n.n*l)throw new Error("scales input size error.");if(t.length===4){let h=t[3].dims,m=n.n*(n.bits===8?l:Math.floor((l*n.bits+7)/8));if(U.size(h)!==m)throw new Error("zeroPoints input size error.")}},Vg=(t,n)=>{let a=t[0].dims,o=a.length,l=a[o-2],u=n.k,d=n.n,p=a.slice(0,o-2),h=U.size(p),m=t[1].dims[2]/4,y=t[0].dataType,v=Ze(n.k),w=Ze(m),_=Ze(d),$=p.concat([l,d]),S=l>1&&d/_%2===0?2:1,I=U.size($)/_/S,E=64,k=[],C=[h,l,u/v],z=U.convertShape(t[1].dims).slice();z.splice(-1,1,m/w),k.push(...de(C)),k.push(...de(z)),k.push(...de(t[2].dims)),t.length===4&&k.push(...de(U.convertShape(t[3].dims)));let O=[h,l,d/_];k.push(...de(O));let j=L=>{let V=C.length,q=F("a",t[0].dataType,V,v),Z=F("b",12,z.length,w),me=F("scales",t[2].dataType,t[2].dims.length),ce=[q,Z,me],pe=t.length===4?F("zero_points",12,t[3].dims.length):void 0;pe&&ce.push(pe);let Ie=O.length,Re=ae("output",t[0].dataType,Ie,_),fe=pt(t[0].dataType),we=(()=>{switch(v){case 1:return`array<${fe}, 8>`;case 2:return`mat4x2<${fe}>`;case 4:return`mat2x4<${fe}>`;default:throw new Error(`${v}-component is not supported.`)}})(),st=Math.floor(32/n.bits),ee=Math.floor(st/8),Me=()=>{let ue="";for(let te=0;te<ee;te++){let Fe=te*n.bits*4,Dr=Fe+n.bits;ue+=`
          // reuse a data (pass ${te})
            var input_offset${te>0?te:""} = ${te===0?q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${te>0?te:""}: ${we};
            for (var j${te>0?te:""}: u32 = 0; j${te>0?te:""} < ${8/v}; j${te>0?te:""}++) {
              a_data${te>0?te:""}[j${te>0?te:""}] = ${q.getByOffset(`input_offset${te>0?te:""}`)};
              input_offset${te>0?te:""}++;
            }
          `;for(let $t=0;$t<_*S;$t++)ue+=`
            b_value = ${w===1?`b${$t}_data`:`b${$t}_data[i]`};
            ${n.bits===2?`{
              let half_word = b_value >> ${te*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Fe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Dr}u) & b_mask);`}
            b_quantized_values = ${we}(${Array.from({length:4},(yr,vr)=>`${fe}(b_value_lower[${vr}]), ${fe}(b_value_upper[${vr}])`).join(", ")});
            b_dequantized_values = ${v===1?`${we}(${Array.from({length:8},(yr,vr)=>`(b_quantized_values[${vr}] - ${pe?`zero_point${$t}`:"zero_point"}) * scale${$t}`).join(", ")});`:`(b_quantized_values - ${we}(${Array(8).fill(`${pe?`zero_point${$t}`:"zero_point"}`).join(",")})) * scale${$t};`};
            workgroup_shared[local_id.x * ${S} + ${Math.floor($t/_)}]${_>1?`[${$t%_}]`:""} += ${Array.from({length:8/v},(yr,vr)=>`${v===1?`a_data${te>0?te:""}[${vr}] * b_dequantized_values[${vr}]`:`dot(a_data${te>0?te:""}[${vr}], b_dequantized_values[${vr}])`}`).join(" + ")};
          `}return ue},X=()=>{let ue=`
            var col_index = col * ${_};
            ${pe?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/n.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,n.bits-1)} for unsigned ${n.bits}-bit quantization.
            let zero_point = ${fe}(${Math.pow(2,n.bits-1).toFixed(1)});`}
            `;for(let te=0;te<_*S;te++)ue+=`
            let scale${te} = ${me.getByOffset("col_index * nBlocksPerCol + block")};
            ${pe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${n.bits}u);
            zero_point_word = ${pe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${te} = ${fe}((zero_point_word) & ${n.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return ue},ie=()=>{let ue=`col_index = col * ${_};`;for(let te=0;te<_*S;te++)ue+=`
            let b${te}_data = ${Z.getByIndices(`${Z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return ue+=`
            var b_value: u32;
            let b_mask: u32 = ${n.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${we};
            var b_dequantized_values: ${we};`,ue};return`
        var<workgroup> workgroup_shared: array<${Re.type.value}, ${S*E}>;
        ${L.declareVariables(...ce,Re)}
        ${L.mainStart([E,1,1])}
          let output_indices = ${Re.offsetToIndices(`(global_idx / ${E}) * ${S}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${E}) {
            //process one block
            var word_offset: u32 = block * ${n.blockSize/v};
            ${X()}
            for (var word: u32 = 0; word < ${m}; word += ${w}) {
              ${ie()}
              for (var i: u32 = 0; i < ${w}; i++) {
                ${Me()}
                word_offset += ${st/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${S}) {
            var output_value: ${Re.type.value} = ${Re.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${E}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${S};
            }
            ${Re.setByIndices(`${Re.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${n.blockSize};${n.bits};${v};${w};${_};${S};${E}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:y}],dispatchGroup:{x:I},programUniforms:k}),getShaderSource:j}},Fg=(t,n)=>{let a=t[0].dims,o=a.length,l=a[o-2],u=n.k,d=n.n,p=a.slice(0,o-2),h=U.size(p),m=t[1].dims[2]/4,y=t[0].dataType,v=Ze(n.k),w=Ze(m),_=p.concat([l,d]),$=128,S=d%8===0?8:d%4===0?4:1,I=$/S,E=Math.floor(32/n.bits),k=I*w*E,C=k/v,z=k/n.blockSize,O=U.size(_)/S,j=[],L=[h,l,u/v],V=U.convertShape(t[1].dims).slice();V.splice(-1,1,m/w),j.push(...de(L)),j.push(...de(V)),j.push(...de(t[2].dims)),t.length===4&&j.push(...de(U.convertShape(t[3].dims)));let q=[h,l,d];j.push(...de(q));let Z=me=>{let ce=L.length,pe=F("a",t[0].dataType,ce,v),Ie=F("b",12,V.length,w),Re=F("scales",t[2].dataType,t[2].dims.length),fe=[pe,Ie,Re],we=t.length===4?F("zero_points",12,t[3].dims.length):void 0;we&&fe.push(we);let st=q.length,ee=ae("output",t[0].dataType,st),Me=pt(t[0].dataType),X=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${Me}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Me}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Me}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Me}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${pe.type.value}, ${C}>;
        var<workgroup> inter_results: array<array<${ee.type.value}, ${I}>, ${S}>;
        ${me.declareVariables(...fe,ee)}
        ${me.mainStart([I,S,1])}
          let output_indices = ${ee.offsetToIndices(`workgroup_index * ${S}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${z} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${C};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${C}; a_offset += ${$})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${pe.getByIndices(`${pe.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${pe.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${z} + local_id.x;
            ${we?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/n.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${n.bits}u);
            let zero_point_word = ${we.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Me}((zero_point_word) & ${n.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,n.bits-1)} for unsigned ${n.bits}-bit quantization.
            let zero_point = ${Me}(${Math.pow(2,n.bits-1).toFixed(1)});`}
            let scale = ${Re.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Ie.getByIndices(`${Ie.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${n.blockSize/v};
            for (var i: u32 = 0; i < ${w}; i++) {
              let b_value = ${w===1?"b_data":"b_data[i]"};
              ${(()=>{let ie=Math.floor(E/8),ue="";for(let te=0;te<ie;te++){let Fe=te*n.bits*4,Dr=Fe+n.bits;ue+=`
              ${X()}
              {${n.bits===2?`
                let half_word = b_value >> ${te*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Fe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Dr}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Me}>(${Array.from({length:4},($t,yr)=>`${Me}(b_value_lower[${yr}]), ${Me}(b_value_upper[${yr}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Me}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},($t,yr)=>`${`dot(a_data${yr}, b_dequantized_values[${yr}])`}`).join(" + ")};
              }
              word_offset += ${8/v};`}return ue})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${S}) {
            var output_value: ${ee.type.value} = ${ee.type.value}(0);
            for (var b = 0u; b < ${I}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ee.setByIndices(`${ee.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${n.blockSize};${v};${w};${I};${S}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:y}],dispatchGroup:{x:O},programUniforms:j}),getShaderSource:Z}},qg=(t,n)=>{Ug(t.inputs,n),n.blockSize===32&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(Fg(t.inputs,n)):t.compute(Vg(t.inputs,n))},Wg=t=>Be(t)}),Gg,Hg,Kg,Qg,Xg,Zg,Yg,Jg,e0,wx=x(()=>{ve(),be(),ke(),Gg=t=>{if(!t||t.length<1)throw new Error("Too few inputs");if(t[0].dataType!==1&&t[0].dataType!==10)throw new Error("Input type must be float or float16.");if(t.length>=2){let n=t[0].dims.length*2===t[1].dims[0];if(t.length===4&&(n=t[3].dims[0]*2===t[1].dims[0]),!n)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Hg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
            k = i32(${t.indicesGet("indices",l)}) - ${le("uniforms.pads",l,a)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${le("uniforms.x_shape",l,n)})) {
              break;
            }
            offset += k * i32(${le("uniforms.x_strides",l,n)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${o}
            value = x[offset];
          }
      `},Kg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
                k = i32(${t.indicesGet("indices",l)}) - ${le("uniforms.pads",l,a)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${le("uniforms.x_shape",l,n)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${le("uniforms.x_shape",l,n)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${le("uniforms.x_strides",l,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Qg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
                k = i32(${t.indicesGet("indices",l)}) - ${le("uniforms.pads",l,a)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${le("uniforms.x_shape",l,n)})) {
                  k = i32(${le("uniforms.x_shape",l,n)}) - 1;
                }
                offset += k * i32(${le("uniforms.x_strides",l,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Xg=(t,n,a)=>{let o="";for(let l=n-1;l>=0;--l)o+=`
                k = i32(${t.indicesGet("indices",l)}) - ${le("uniforms.pads",l,a)};
                if (k < 0)  {
                  k += i32(${le("uniforms.x_shape",l,n)}]);
                }
                if (k >= i32(${le("uniforms.x_shape",l,n)})) {
                  k -= i32(${le("uniforms.x_shape",l,n)});
                }
                offset += k * i32(${le("uniforms.x_strides",l,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Zg=(t,n,a)=>{switch(a.mode){case 0:return Hg(t,n,a.pads.length);case 1:return Kg(t,n,a.pads.length);case 2:return Qg(t,n,a.pads.length);case 3:return Xg(t,n,a.pads.length);default:throw new Error("Invalid mode")}},Yg=(t,n)=>{let a=U.padShape(t[0].dims.slice(),n.pads),o=t[0].dims,l=U.size(a),u=[{type:12,data:l},{type:6,data:n.pads}],d=t.length>=3&&t[2].data;n.mode===0&&u.push({type:d?t[2].dataType:1,data:n.value}),u.push(...de(t[0].dims,a));let p=["rank"],h=m=>{let y=ae("output",t[0].dataType,a.length),v=F("x",t[0].dataType,o.length),w=v.type.value,_=Zg(y,o.length,n),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:n.pads.length}];return n.mode===0&&$.push({name:"constant_value",type:d?w:"f32"}),`
            ${m.registerUniforms($).declareVariables(v,y)}
            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${y.offsetToIndices("global_idx")};

            var value = ${w}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${n.mode}${d}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(a)/64)},programUniforms:u}),getShaderSource:h}},Jg=(t,n)=>{if(t.length>1){let a=t[1].getBigInt64Array(),o=t.length>=3&&t[2].data?t[2].dataType===10?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,l=t[0].dims.length,u=new Int32Array(2*l).fill(0);if(t.length>=4){let p=t[3].getBigInt64Array();for(let h=0;h<p.length;h++)u[Number(p[h])]=Number(a[h]),u[Number(p[h])+l]=Number(a[h+p.length])}else a.forEach((p,h)=>u[Number(h)]=Number(p));let d=[];return u.forEach(p=>d.push(p)),{mode:n.mode,value:o,pads:d}}else return n},e0=(t,n)=>{Gg(t.inputs);let a=Jg(t.inputs,n);t.compute(Yg(t.inputs,a),{inputs:[0]})}}),Wi,Hl,Kl,Ql,Xl,t0,r0,Zl,Yl,n0,i0,Jl,a0,s0,eu,o0,l0,u0,d0,_x=x(()=>{rr(),ve(),be(),ke(),Wi=t=>{if(Y.webgpu.validateInputContent&&(!t||t.length!==1))throw new Error("Pool ops requires 1 input.")},Hl=(t,n,a)=>{let o=n.format==="NHWC",l=t.dims.slice();o&&l.splice(1,0,l.pop());let u=Object.hasOwnProperty.call(n,"dilations"),d=n.kernelShape.slice(),p=n.strides.slice(),h=u?n.dilations.slice():[],m=n.pads.slice();Za.adjustPoolAttributes(a,l,d,p,h,m);let y=Za.computePoolOutputShape(a,l,p,h,d,m,n.autoPad),v=Object.assign({},n);u?Object.assign(v,{kernelShape:d,strides:p,pads:m,dilations:h,cacheKey:n.cacheKey}):Object.assign(v,{kernelShape:d,strides:p,pads:m,cacheKey:n.cacheKey});let w=y.slice();return w.push(w.splice(1,1)[0]),[v,o?w:y]},Kl=(t,n)=>{let a=n.format==="NHWC",o=U.size(t),l=U.size(n.kernelShape),u=[{type:12,data:o},{type:12,data:l}],d=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(n.kernelShape.length<=2){let p=n.kernelShape[n.kernelShape.length-1],h=n.strides[n.strides.length-1],m=n.pads[n.pads.length/2-1],y=n.pads[n.pads.length-1],v=!!(m+y);u.push({type:12,data:p},{type:12,data:h},{type:12,data:m},{type:12,data:y}),d.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let w=!1;if(n.kernelShape.length===2){let _=n.kernelShape[n.kernelShape.length-2],$=n.strides[n.strides.length-2],S=n.pads[n.pads.length/2-2],I=n.pads[n.pads.length-2];w=!!(S+I),u.push({type:12,data:_},{type:12,data:$},{type:12,data:S},{type:12,data:I}),d.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,d,!0,v,w]}else{if(a)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let p=U.computeStrides(n.kernelShape);u.push({type:12,data:p},{type:12,data:n.pads},{type:12,data:n.strides}),d.push({name:"kernelStrides",type:"u32",length:p.length},{name:"pads",type:"u32",length:n.pads.length},{name:"strides",type:"u32",length:n.strides.length});let h=n.pads.reduce((m,y)=>m+y);return[u,d,!!h,!1,!1]}},Ql=(t,n,a,o,l,u,d,p,h,m,y,v)=>{let w=l.format==="NHWC",_=n.type.value,$=ae("output",n.type.tensor,o);if(l.kernelShape.length<=2){let S="",I="",E="",k=a-(w?2:1);if(y?S=`
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
                }`,l.kernelShape.length===2){let C=a-(w?3:2);v?I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${C}] < 0 || xIndices[${C}] >= uniforms.x_shape[${C}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                `,E=`
              }
            `}return`
            ${t.registerUniforms(h).declareVariables(n,$)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${_}(${p});
              var pad = 0;
              ${I}
              ${S}
              ${E}
              ${d}

              output[global_idx] = value;
            }`}else{if(w)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=l.kernelShape.length,I=l.pads.length,E="";return m?E=`
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

              var value = ${_}(${p});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${S-1}u; j++) {
                  offsets[j] = offset / ${le("uniforms.kernelStrides","j",S)};
                  offset -= offsets[j] * ${le("uniforms.kernelStrides","j",S)};
                }
                offsets[${S-1}] = offset;

                isPad = false;
                for (var j = ${a-S}u; j < ${a}u; j++) {
                  xIndices[j] = indices[j] * ${le("uniforms.strides",`j - ${a-S}u`,S)}
                    + offsets[j - ${a-S}u] - ${le("uniforms.pads","j - 2u",I)};
                  ${E}
              }
              ${d}

              output[global_idx] = value;
            }`}},Xl=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,t0=t=>`${Xl(t)};${t.countIncludePad}`,r0=t=>`${Xl(t)};${t.storageOrder};${t.dilations}`,Zl=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),Yl=(t,n,a,o)=>{let[l,u]=Hl(n,o,a),d=F("x",n.dataType,n.dims.length),p=d.type.value,h="value += x_val;",m="";l.countIncludePad?m+=`value /= ${p}(uniforms.kernelSize);`:m+=`value /= ${p}(i32(uniforms.kernelSize) - pad);`;let[y,v,w,_,$]=Kl(u,l);y.push(...de(n.dims,u));let S=["rank"];return{name:t,shaderCache:{hint:`${o.cacheKey};${w};${_};${$}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:u,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(U.size(u)/64)},programUniforms:y}),getShaderSource:I=>Ql(I,d,n.dims.length,u.length,l,h,m,0,v,w,_,$)}},n0=t=>{let n=t.count_include_pad!==0,a=Zl(t);if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let o={countIncludePad:n,...a,cacheKey:""};return{...o,cacheKey:t0(o)}},i0=(t,n)=>{Wi(t.inputs),t.compute(Yl("AveragePool",t.inputs[0],!1,n))},Jl={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},a0=t=>{let n=t.format;return{format:n,...Jl,cacheKey:n}},s0=(t,n)=>{Wi(t.inputs),t.compute(Yl("GlobalAveragePool",t.inputs[0],!0,n))},eu=(t,n,a,o)=>{let[l,u]=Hl(n,o,a),d=`
      value = max(x_val, value);
    `,p="",h=F("x",n.dataType,n.dims.length),m=["rank"],[y,v,w,_,$]=Kl(u,l);return y.push(...de(n.dims,u)),{name:t,shaderCache:{hint:`${o.cacheKey};${w};${_};${$}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(U.size(u)/64)},programUniforms:y}),getShaderSource:S=>Ql(S,h,n.dims.length,u.length,l,d,p,n.dataType===10?-65504:-1e5,v,w,_,$)}},o0=(t,n)=>{Wi(t.inputs),t.compute(eu("MaxPool",t.inputs[0],!1,n))},l0=t=>{let n=t.storage_order,a=t.dilations,o=Zl(t);if(n!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(o.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let l={storageOrder:n,dilations:a,...o,cacheKey:""};return{...l,cacheKey:r0(l)}},u0=t=>{let n=t.format;return{format:n,...Jl,cacheKey:n}},d0=(t,n)=>{Wi(t.inputs),t.compute(eu("GlobalMaxPool",t.inputs[0],!0,n))}}),c0,p0,f0,h0,xx=x(()=>{ve(),be(),tt(),ke(),c0=(t,n)=>{if(t.length<2||t.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(t.length===3&&t[1].dims===t[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==0&&t[1].dims.length!==1&&t[1].dims.length!==t[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((a,o)=>a===t[2].dims[o]).reduce((a,o)=>a&&o,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(n.blockSize>0){if(t[1].dims.length===0||t[1].dims.length===1&&t[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((l,u)=>u===n.axis||l===t[0].dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let a=t[0].dims[n.axis],o=t[1].dims[n.axis];if(n.blockSize<Math.ceil(a/o)||n.blockSize>Math.ceil(a/(o-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},p0=(t,n)=>{let a=U.normalizeAxis(n.axis,t[0].dims.length),o=t[0].dataType,l=o===3,u=t[0].dims,d=t[1].dataType,p=U.size(u),h=o===3||o===2,m=h?[Math.ceil(U.size(t[0].dims)/4)]:t[0].dims,y=t[1].dims,v=t.length>2?t[2]:void 0,w=v?h?[Math.ceil(U.size(v.dims)/4)]:v.dims:void 0,_=y.length===0||y.length===1&&y[0]===1,$=_===!1&&y.length===1,S=Ze(p),I=_&&(!h||S===4),E=I?S:1,k=I&&!h?S:1,C=F("input",h?12:o,m.length,k),z=F("scale",d,y.length),O=v?F("zero_point",h?12:o,w.length):void 0,j=ae("output",d,u.length,E),L=[C,z];O&&L.push(O);let V=[m,y];v&&V.push(w);let q=[{type:12,data:p/E},{type:12,data:a},{type:12,data:n.blockSize},...de(...V,u)],Z=me=>{let ce=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${me.registerUniforms(ce).declareVariables(...L,j)}
      ${me.mainStart()}
          ${me.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${j.offsetToIndices("global_idx")};

          // Set input x
          ${h?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${l?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${E===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${z.getByOffset("0")}`:$?`
            let scale_index = ${j.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${z.getByOffset("scale_index")};`:`
            var scale_indices: ${z.type.indices} = output_indices;
            let index = ${z.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${z.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${z.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?_?h?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${l?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:$?h?`
                let zero_point_index = ${j.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${l?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${j.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:h?`
                let zero_point_offset = ${z.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${l?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${h?l?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${j.setByOffset("global_idx",`${j.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:n.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Z,getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(p/E/64),y:1,z:1},programUniforms:q})}},f0=(t,n)=>{c0(t.inputs,n),t.compute(p0(t.inputs,n))},h0=t=>Be({axis:t.axis,blockSize:t.blockSize})}),m0,g0,y0,$x=x(()=>{rr(),ve(),ke(),m0=(t,n,a)=>{let o=t===n,l=t<n&&a<0,u=t>n&&a>0;if(o||l||u)throw new Error("Range these inputs' contents are invalid.")},g0=(t,n,a,o)=>{let l=Math.abs(Math.ceil((n-t)/a)),u=[l],d=l,p=[{type:12,data:d},{type:o,data:t},{type:o,data:a},...de(u)],h=m=>{let y=ae("output",o,u.length),v=y.type.value,w=[{name:"outputSize",type:"u32"},{name:"start",type:v},{name:"delta",type:v}];return`
        ${m.registerUniforms(w).declareVariables(y)}
        ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${v}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${o}`},getShaderSource:h,getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p})}},y0=t=>{let n=0,a=0,o=0;t.inputs[0].dataType===6?(n=t.inputs[0].getInt32Array()[0],a=t.inputs[1].getInt32Array()[0],o=t.inputs[2].getInt32Array()[0]):t.inputs[0].dataType===1&&(n=t.inputs[0].getFloat32Array()[0],a=t.inputs[1].getFloat32Array()[0],o=t.inputs[2].getFloat32Array()[0]),Y.webgpu.validateInputContent&&m0(n,a,o),t.compute(g0(n,a,o,t.inputs[0].dataType),{inputs:[]})}}),v0,w0,_0,x0,bx=x(()=>{ve(),be(),tt(),ke(),v0=(t,n,a,o)=>{if(t!=="none"&&o!=="i32"&&o!=="u32"&&o!=="f32")throw new Error(`Input ${o} is not supported with reduction ${t}.`);let l=`{
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
                ${l}max(bitcast<f32>(oldValue), (${a}))${u}`;case"min":return o==="i32"||o==="u32"?`atomicMin(&${n}, bitcast<${o}>(${a}));`:`${l}min(bitcast<${o}>(oldValue), (${a}))${u}`;case"mul":return`${l}(bitcast<${o}>(oldValue) * (${a}))${u}`;default:throw new Error(`Reduction ${t} is not supported.`)}},w0=(t,n)=>{let a=t[0].dims,o=t[1].dims,l=a,u=1,d=Math.ceil(U.sizeToDimension(o,o.length-1)/u),p=o[o.length-1],h=U.sizeFromDimension(a,p),m=[{type:12,data:d},{type:12,data:p},{type:12,data:h},...de(t[1].dims,t[2].dims,l)],y=v=>{let w=F("indices",t[1].dataType,t[1].dims.length),_=F("updates",t[2].dataType,t[2].dims.length,u),$=n.reduction!=="none"&&n.reduction!==""?Ep("output",t[0].dataType,l.length):ae("output",t[0].dataType,l.length,u);return`
      ${v.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(w,_,$)}
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
    ${v0(n.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${n.cacheKey}_${n.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y}},_0=t=>Be({reduction:t.reduction}),x0=(t,n)=>{t.compute(w0(t.inputs,n),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),$0,b0,k0,tu,S0,E0,T0,I0,z0,C0,N0,R0,ru,O0,A0,M0,P0,D0,B0,L0,kx=x(()=>{ve(),be(),tt(),ke(),$0=(t,n)=>{if(t.every(a=>a>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),t.length>0){if(n.mode==="linear"){if(!(t.length===2||t.length===3||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1||t.length===5&&t[0]===1&&t[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(n.mode==="cubic"&&!(t.length===2||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},b0=(t,n,a)=>{n.every(l=>l>=0&&l<a||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let o=new Array(a).fill(1);return n.forEach((l,u)=>o[l]=t[u]),o},k0=(t,n,a,o,l,u)=>{let[d,p,h]=a>10?[1,2,3]:[-1,t.length>1?1:-1,-1],m=t[0].dims.length;if(d>0&&t.length>d&&t[d].dims.length>0)t[d].getFloat32Array().forEach(y=>u.push(y));else if(n.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(p>0&&t.length>p&&t[p].dims.length===1&&t[p].dims[0]>0){if(t[p].getFloat32Array().forEach(y=>o.push(y)),o.length!==0&&o.length!==m&&a>=18&&o.length!==n.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");$0(o,n),n.axes.length>0&&b0(o,n.axes,m).forEach((y,v)=>o[v]=y)}if(h>0&&t.length>h&&t[h].dims.length===1&&t[h].dims[0]>0&&(t[h].getBigInt64Array().forEach(y=>l.push(Number(y))),l.length!==0&&l.length!==m&&a>=18&&l.length!==n.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(n.axes.length>0){if(o.length!==0&&o.length!==n.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(l.length!==0&&l.length!==n.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof o<"u"&&typeof l<"u"&&o.length>0&&l.length>m)throw new Error("Resize requires only of scales or sizes to be specified")},tu=(t,n,a,o)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${n});
  let whole = ${o}(big / (${a}));
  let fract = ${o}(big % (${a})) / ${o}(${a});
  return whole + fract;
`,S0=(t,n)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${n} { `+(()=>{switch(t){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${n}(xResized) / ${n}(xScale);
          } else {
            ${tu("xResized","lengthOriginal","lengthResized",n)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${n}(xResized) + 0.5) / ${n}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${n}(xResized) + 0.5) / ${n}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${tu("xResized","lengthOriginal - 1","lengthResized - 1",n)}
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
                  return offset + ((${n}(xResized) + 0.5) / ${n}(xScale)) - 0.5;`;case"half_pixel":return`return ((${n}(xResized) + 0.5) / ${n}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${t} is not supported`)}})()+"}",E0=(t,n,a)=>`fn getNearestPixelFromOriginal(xOriginal: ${a}, isDownSample: bool) -> ${a} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(n<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${t} is not supported`)}})()+"}",T0=(t,n,a)=>{let o=new Array(a).fill(0).concat(new Array(a).fill(1)),l=t.length===0?o:t.slice();return n.length>0?(n.forEach((u,d)=>{o[u]=l[d],o[d+a]=l[n.length+d]}),o):l},I0=(t,n,a,o)=>{let l=[];if(a.length>0)if(o.length>0){if(t.forEach(u=>l.push(u)),Math.max(...o)>t.length)throw new Error("axes is out of bound");o.forEach((u,d)=>l[u]=a[d])}else a.forEach(u=>l.push(u));else{if(n.length===0)throw new Error("Resize requires either scales or sizes.");l=t.map((u,d)=>Math.round(u*n[d]))}return l},z0=(t,n,a)=>{let o=(()=>{switch(a.keepAspectRatioPolicy){case"not_larger":return a.axes.length>0?Math.min(...a.axes.map(u=>n[u]),Number.MAX_VALUE):Math.min(...n,Number.MAX_VALUE);case"not_smaller":return a.axes.length>0?Math.max(...a.axes.map(u=>n[u]),Number.MIN_VALUE):Math.max(...n,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${a.keepAspectRatioPolicy} is not supported`)}})();n.fill(1,0,n.length);let l=t.slice();return a.axes.length>0?(a.axes.forEach(u=>n[u]=o),a.axes.forEach(u=>l[u]=Math.round(t[u]*n[u]))):(n.fill(o,0,n.length),l.forEach((u,d)=>l[d]=Math.round(u*n[d]))),l},C0=(t,n,a,o,l)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${a.length}> {
      var original_indices: array<${t.type.value}, ${a.length}>;
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${le("uniforms.scales","i",o)};
        var roi_low = ${le("uniforms.roi","i",l)};
        var roi_hi = ${le("uniforms.roi",`i + ${n.length}`,l)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${le("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",a.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,N0=(t,n,a,o,l,u,d)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${n.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${o.length}; i++) {
        var output_index = ${n.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${le("uniforms.scales","i",l)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${le("uniforms.roi","i",u)};
          var roi_hi = ${le("uniforms.roi",`i + ${a.length}`,u)};
          var input_shape_i = ${le("uniforms.input_shape","i",a.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",o.length)};
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
    }`,R0=(t,n)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",n.length)}) {
          return false;
        }
      }
      return true;
    }`,ru=(t,n,a,o)=>t.rank>o?`
    ${t.indicesSet("input_indices",n,"channel")};
    ${t.indicesSet("input_indices",a,"batch")};
`:"",O0=(t,n,a,o,l)=>{let[u,d,p,h]=a.length===2?[-1,0,1,-1]:[0,2,3,1],m=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",d,`max(0, min(row, ${a[d]} - 1))`)};
      ${t.indicesSet("input_indices",p,`max(0, min(col, ${a[p]} - 1))`)};
      ${ru(t,h,u,2)}
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
    }`},A0=(t,n,a,o,l,u,d,p,h,m)=>{let y=a.length===2,[v,w]=y?[0,1]:[2,3],_=t.type.value,$=S=>{let I=S===v?"row":"col";return`
      fn ${I}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${n.type.indices}) -> ${_} {
        var output_index = ${n.indicesGet("output_indices",S)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${l[S]},
        ${o[S]}, ${a[S]}, ${u[S]}, ${u[S]} + ${a.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${p} && (originalIdx < 0 || originalIdx > (${a[S]} - 1))) {
          return ${h};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${I}: ${_} = originalIdx + ${_}(i);
          if (${I} < 0 || ${I} >= ${a[S]}) {
            ${m?`coefs[i + 1] = 0.0;
                        continue;`:p?`return ${h};`:`${I} = max(0, min(${I}, ${a[S]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",S,`u32(${I})`)};
          data[i + 1] = ${S===v?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(v)};
    ${$(w)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${d} * onePlusAbsS - 5 * ${d}) * onePlusAbsS + 8 * ${d}) * onePlusAbsS - 4 * ${d};
    coeffs[1] = ((${d} + 2) * absS - (${d} + 3)) * absS * absS + 1;
    coeffs[2] = ((${d} + 2) * oneMinusAbsS - (${d} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${d} * twoMinusAbsS - 5 * ${d}) * twoMinusAbsS + 8 * ${d}) * twoMinusAbsS - 4 * ${d};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${n.type.indices}) -> ${_} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},M0=(t,n,a,o,l)=>{let[u,d,p,h,m]=a.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],y=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${y} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",d,`max(0, min(depth, ${a[d]} - 1))`)};
      ${t.indicesSet("input_indices",p,`max(0, min(height, ${a[p]} - 1))`)};
      ${t.indicesSet("input_indices",h,`max(0, min(width, ${a[h]} - 1))`)};
      ${ru(t,m,u,3)}
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
    }`},P0=(t,n,a,o,l,u)=>{let d=t.dims,p=T0(u,n.axes,d.length),h=I0(d,o,l,n.axes),m=o.slice();o.length===0&&(m=d.map((k,C)=>k===0?1:h[C]/k),n.keepAspectRatioPolicy!=="stretch"&&(h=z0(d,m,n)));let y=ae("output",t.dataType,h.length),v=F("input",t.dataType,d.length),w=U.size(h),_=d.length===h.length&&d.every((k,C)=>k===h[C]),$=n.coordinateTransformMode==="tf_crop_and_resize",S=n.extrapolationValue,I=v.type.value,E=k=>`
      ${_?"":`
      ${S0(n.coordinateTransformMode,I)};
      ${(()=>{switch(n.mode){case"nearest":return`
              ${R0(v,d)};
              ${E0(n.nearestMode,a,I)};
              ${N0(v,y,d,h,m.length,p.length,$)};
              `;case"linear":return`
              ${C0(y,d,h,m.length,p.length)};
              ${(()=>{if(d.length===2||d.length===4)return`${O0(v,y,d,$,S)}`;if(d.length===3||d.length===5)return`${M0(v,y,d,$,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(d.length===2||d.length===4)return`${A0(v,y,d,h,m,p,n.cubicCoeffA,$,n.extrapolationValue,n.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${k.registerUniform("output_size","u32").registerUniform("scales","f32",m.length).registerUniform("roi","f32",p.length).declareVariables(v,y)}
      ${k.mainStart()}
        ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${y.offsetToIndices("global_idx")};
        var input_indices: ${v.type.indices};
        ${(()=>{switch(n.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${v.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${n.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${d.length===2||d.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${n.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${n.cacheKey}|${a}|${m.length>0?n.mode==="cubic"?m:m.length:""}|${l.length>0?l:""}|${p.length>0?p:""}|${_}|${n.mode==="nearest"?d.length:d}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:h,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},{type:1,data:m},{type:1,data:p},...de(d,h)]})}},D0=t=>{let n=t.customDataBuffer;return new Uint32Array(n,n.byteOffset,1)[0]},B0=(t,n)=>{let a=[],o=[],l=[],u=D0(t);if(n.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");k0(t.inputs,n,u,a,o,l),t.compute(P0(t.inputs[0],n,u,a,o,l),{inputs:[0]})},L0=t=>{let n=t.antialias,a=t.axes,o=t.coordinateTransformMode,l=t.cubicCoeffA,u=t.excludeOutside!==0,d=t.extrapolationValue,p=t.keepAspectRatioPolicy,h=t.mode,m=t.nearestMode===""?"simple":t.nearestMode;return Be({antialias:n,axes:a,coordinateTransformMode:o,cubicCoeffA:l,excludeOutside:u,extrapolationValue:d,keepAspectRatioPolicy:p,mode:h,nearestMode:m})}}),j0,U0,V0,Sx=x(()=>{ve(),be(),ke(),j0=t=>{if(!t||t.length<3)throw new Error("layerNorm requires at least 3 inputs.");let n=t[0],a=t[1],o=t[2];if(n.dataType!==a.dataType||n.dataType!==o.dataType)throw new Error("All inputs must have the same data type");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Input must be 2D or 3D");if(a.dims.length!==3&&a.dims.length!==2)throw new Error("Skip must be 2D or 3D");let l=n.dims[n.dims.length-1],u=n.dims[n.dims.length-2];if(a.dims[a.dims.length-1]!==l)throw new Error("Skip must have the same hidden size as input");if(a.dims[a.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(o.dims.length!==1)throw new Error("Gamma must be 1D");if(o.dims[o.dims.length-1]!==l)throw new Error("Gamma must have the same hidden size as input");if(t.length>3){let d=t[3];if(d.dims.length!==1)throw new Error("Beta must be 1D");if(d.dims[d.dims.length-1]!==l)throw new Error("Beta must have the same hidden size as input")}if(t.length>4){let d=t[4];if(d.dims.length!==1)throw new Error("Bias must be 1D");if(d.dims[d.dims.length-1]!==l)throw new Error("Bias must have the same hidden size as input")}},U0=(t,n,a,o)=>{let l=n.simplified,u=t[0].dims,d=U.size(u),p=u,h=d,m=u.slice(-1)[0],y=o?u.slice(0,-1).concat(1):[],v=!l&&t.length>3,w=t.length>4,_=o&&a>1,$=o&&a>2,S=a>3,I=64,E=Ze(m),k=[{type:12,data:h},{type:12,data:E},{type:12,data:m},{type:1,data:n.epsilon}],C=O=>{let j=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],L=[F("x",t[0].dataType,t[0].dims,E),F("skip",t[1].dataType,t[1].dims,E),F("gamma",t[2].dataType,t[2].dims,E)];v&&L.push(F("beta",t[3].dataType,t[3].dims,E)),w&&L.push(F("bias",t[4].dataType,t[4].dims,E)),L.push(ae("output",t[0].dataType,p,E)),_&&L.push(ae("mean_output",1,y)),$&&L.push(ae("inv_std_output",1,y)),S&&L.push(ae("input_skip_bias_sum",t[0].dataType,p,E));let V=pt(t[0].dataType),q=pt(1,E);return`

      ${O.registerUniforms(j).declareVariables(...L)}
      var<workgroup> sum_shared : array<${q}, ${I}>;
      var<workgroup> sum_squared_shared : array<${q}, ${I}>;

      ${O.mainStart([I,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${I};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${I};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${I-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${w?"bias[offset1d + i]":V+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${S?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ni(V,E,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${I};
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
        let mean = ${Xr("sum",E)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Xr("square_sum",E)} / f32(uniforms.hidden_size) ${l?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${l?"":`- ${V}(mean)`}) *
            ${V}(inv_std_dev) * gamma[offset1d + i]
            ${v?"+ beta[offset1d + i]":""};
        }
      }`},z=[{dims:p,dataType:t[0].dataType}];return a>1&&z.push({dims:y,dataType:1}),a>2&&z.push({dims:y,dataType:1}),a>3&&z.push({dims:u,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${E};${_};${$};${S}`,inputDependencies:t.map((O,j)=>"type")},getShaderSource:C,getRunData:()=>({outputs:z,dispatchGroup:{x:Math.ceil(h/m)},programUniforms:k})}},V0=(t,n)=>{j0(t.inputs);let a=[0];t.outputCount>1&&a.push(-3),t.outputCount>2&&a.push(-3),t.outputCount>3&&a.push(3),t.compute(U0(t.inputs,n,t.outputCount,!1),{outputs:a})}}),F0,Gi,q0,nu,W0,G0,H0,K0,Ex=x(()=>{ve(),be(),tt(),ke(),F0=(t,n)=>{if(!t||t.length<1)throw new Error("too few inputs");if(n.axes.length!==0){if(n.axes.length!==n.starts.length||n.axes.length!==n.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(n.starts.length!==n.ends.length)throw new Error("starts and ends must have the same length");t.slice(1).forEach((a,o)=>{if(t[o+1].dataType!==6&&t[o+1].dataType!==7)throw new Error(`Input ${o} must be an array of int32 or int64`)})},Gi=(t,n)=>{let a=[];if(t.length>n)if(t[n].dataType===7)t[n].getBigInt64Array().forEach(o=>a.push(Number(o)));else if(t[n].dataType===6)t[n].getInt32Array().forEach(o=>a.push(Number(o)));else throw new Error(`Input ${n} must be an array of int32 or int64`);return a},q0=(t,n)=>{if(t.length>1){let a=Gi(t,1),o=Gi(t,2),l=Gi(t,3);return l.length===0&&(l=[...Array(t[0].dims.length).keys()]),Be({starts:a,ends:o,axes:l})}else return n},nu=(t,n,a,o,l)=>{let u=t;return t<0&&(u+=a[o[n]]),l[n]<0?Math.max(0,Math.min(u,a[o[n]]-1)):Math.max(0,Math.min(u,a[o[n]]))},W0=(t,n,a)=>`fn calculateInputIndices(output_indices: ${n.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${a.length-1}; i >= 0; i--) {
            let input_shape_i = ${le("uniforms.input_shape","i",a.length)};
            let steps_i = ${le("uniforms.steps","i",a.length)};
            let signs_i = ${le("uniforms.signs","i",a.length)};
            let starts_i = ${le("uniforms.starts","i",a.length)};
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
      }`,G0=(t,n)=>{let a=t[0].dims,o=U.size(a),l=n.axes.length>0?U.normalizeAxes(n.axes,a.length):[...Array(a.length).keys()],u=Gi(t,4);u.forEach(E=>E!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(l.length).fill(1));let d=n.starts.map((E,k)=>nu(E,k,a,l,u)),p=n.ends.map((E,k)=>nu(E,k,a,l,u));if(l.length!==d.length||l.length!==p.length)throw new Error("start, ends and axes should have the same number of elements");if(l.length!==a.length)for(let E=0;E<a.length;++E)l.includes(E)||(d.splice(E,0,0),p.splice(E,0,a[E]),u.splice(E,0,1));let h=u.map(E=>Math.sign(E));u.forEach((E,k,C)=>{if(E<0){let z=(p[k]-d[k])/E,O=d[k],j=O+z*u[k];d[k]=j,p[k]=O,C[k]=-E}});let m=a.slice(0);l.forEach((E,k)=>{m[E]=Math.ceil((p[E]-d[E])/u[E])});let y={dims:m,dataType:t[0].dataType},v=ae("output",t[0].dataType,m.length),w=F("input",t[0].dataType,t[0].dims.length),_=U.size(m),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:d.length},{name:"signs",type:"i32",length:h.length},{name:"steps",type:"u32",length:u.length}],S=[{type:12,data:_},{type:12,data:d},{type:6,data:h},{type:12,data:u},...de(t[0].dims,m)],I=E=>`
      ${E.registerUniforms($).declareVariables(w,v)}
        ${W0(w,v,a)}
        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${v.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${v.setByOffset("global_idx",w.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${h.length}_${d.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[y],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:S})}},H0=(t,n)=>{F0(t.inputs,n);let a=q0(t.inputs,n);t.compute(G0(t.inputs,a),{inputs:[0]})},K0=t=>{let n=t.starts,a=t.ends,o=t.axes;return Be({starts:n,ends:a,axes:o})}}),Q0,X0,Z0,Y0,Tx=x(()=>{ve(),be(),tt(),Zr(),ke(),Q0=t=>{if(!t||t.length!==1)throw new Error("Softmax op requires 1 input.")},X0=(t,n)=>{let a=t.inputs[0],o=a.dims,l=U.size(o),u=o.length,d=U.normalizeAxis(n.axis,u),p=d<o.length-1,h,m=[];p?(m=Array.from({length:u},(L,V)=>V),m[d]=u-1,m[u-1]=d,h=t.compute(Kt(a,m),{inputs:[a],outputs:[-1]})[0]):h=a;let y=h.dims,v=y[u-1],w=l/v,_=Ze(v),$=v/_,S=64;w===1&&(S=256);let I=(L,V)=>V===4?`max(max(${L}.x, ${L}.y), max(${L}.z, ${L}.w))`:V===2?`max(${L}.x, ${L}.y)`:V===3?`max(max(${L}.x, ${L}.y), ${L}.z)`:L,E=F("x",h.dataType,h.dims,_),k=ae("result",h.dataType,h.dims,_),C=E.type.value,z=pt(h.dataType)==="f32"?`var threadMax = ${C}(-3.4028234663852886e+38f);`:`var threadMax = ${C}(-65504.0h);`,O=L=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${S}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
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
        ${z}
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
          rowMaxShared = ${C}(${I("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
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
          rowSumShared = ${C}(${Xr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${C}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,j=t.compute({name:"Softmax",shaderCache:{hint:`${_};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:y,dataType:h.dataType}],dispatchGroup:{x:w},programUniforms:[{type:6,data:$}]}),getShaderSource:O},{inputs:[h],outputs:[p?-1:0]})[0];p&&t.compute(Kt(j,m),{inputs:[j]})},Z0=(t,n)=>{Q0(t.inputs),X0(t,n)},Y0=t=>Be({axis:t.axis})}),iu,J0,ey,ty,ry,Ix=x(()=>{ve(),be(),ke(),iu=t=>Array.from(t.getBigInt64Array(),Number),J0=t=>{if(!t||t.length!==2)throw new Error("Tile requires 2 inputs.");if(t[0].dataType!==1&&t[0].dataType!==10&&t[0].dataType!==6&&t[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(t[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(t[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(iu(t[1]).length!==t[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},ey=(t,n)=>{let a=[];for(let o=0;o<t.length;++o)a.push(t[o]*n[o]);return a},ty=(t,n)=>{let a=t[0].dims,o=n??iu(t[1]),l=ey(a,o),u=U.size(l),d=t[0].dataType,p=F("input",d,a.length),h=ae("output",d,l.length),m=y=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${o}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:l,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...de(t[0].dims,l)]}),getShaderSource:m}},ry=t=>{J0(t.inputs),t.compute(ty(t.inputs),{inputs:[0]})}}),ny,iy,ay,zx=x(()=>{ve(),be(),ke(),ny=(t,n,a,o,l)=>{let u=ae("output_data",l,a.length,4),d=F("a_data",n[1].dataType,n[1].dims.length,4),p=F("b_data",n[2].dataType,n[2].dims.length,4),h=F("c_data",n[0].dataType,n[0].dims.length,4),m,y=(v,w,_)=>`select(${w}, ${v}, ${_})`;if(!o)m=u.setByOffset("global_idx",y(d.getByOffset("global_idx"),p.getByOffset("global_idx"),h.getByOffset("global_idx")));else{let v=(w,_,$="")=>{let S=`a_data[index_a${_}][component_a${_}]`,I=`b_data[index_b${_}][component_b${_}]`,E=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${u.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,u)};
            let offset_b${_} = ${p.broadcastedIndicesToOffset(`output_indices${_}`,u)};
            let offset_c${_} = ${h.broadcastedIndicesToOffset(`output_indices${_}`,u)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${w}[${_}] = ${$}(${y(S,I,E)});
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
      }`},iy=t=>{let n=t[1].dims,a=t[2].dims,o=t[0].dims,l=t[1].dataType,u=!(U.areEqual(n,a)&&U.areEqual(a,o)),d=n,p=U.size(n);if(u){let m=ti.calcShape(ti.calcShape(n,a,!1),o,!1);if(!m)throw new Error("Can't perform where op on the given tensors");d=m,p=U.size(d)}let h=Math.ceil(p/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:m=>ny(m,t,d,u,l),getRunData:()=>({outputs:[{dims:d,dataType:l}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:h},...de(o,n,a,d)]})}},ay=t=>{t.compute(iy(t.inputs))}}),sy,Cx=x(()=>{q_(),_l(),W_(),G_(),H_(),K_(),Q_(),ex(),rx(),nx(),ix(),ax(),sx(),ox(),lx(),ux(),dx(),cx(),px(),fx(),hx(),mx(),gx(),yx(),vx(),vg(),wx(),_x(),xx(),$x(),bx(),yl(),kx(),Ig(),Sx(),Ex(),Tx(),Sg(),Ix(),Zr(),kl(),zx(),sy=new Map([["Abs",[jf]],["Acos",[Uf]],["Acosh",[Vf]],["Add",[zh]],["ArgMax",[Sf,wl]],["ArgMin",[kf,wl]],["Asin",[Ff]],["Asinh",[qf]],["Atan",[Wf]],["Atanh",[Gf]],["Attention",[Nf]],["AveragePool",[i0,n0]],["BatchNormalization",[Mf]],["BiasAdd",[Bf]],["BiasSplitGelu",[Eh]],["Cast",[Kf,Hf]],["Ceil",[Zf]],["Clip",[Xf]],["Concat",[Fh,qh]],["Conv",[Dl,Ml]],["ConvTranspose",[ym,hm]],["Cos",[Yf]],["Cosh",[Jf]],["CumSum",[wm,_m]],["DepthToSpace",[km,Sm]],["DequantizeLinear",[f0,h0]],["Div",[Ch]],["Einsum",[Nm,Rm]],["Elu",[eh,ji]],["Equal",[Nh]],["Erf",[th]],["Exp",[rh]],["Expand",[Pm]],["FastGelu",[Bm]],["Floor",[nh]],["FusedConv",[Dl,Ml]],["Gather",[Vm,Um]],["GatherElements",[Jm,Ym]],["GatherBlockQuantized",[Km,Qm]],["GatherND",[qm,Wm]],["Gelu",[ih]],["Gemm",[ng,rg]],["GlobalAveragePool",[s0,a0]],["GlobalMaxPool",[d0,u0]],["Greater",[Mh]],["GreaterOrEqual",[Dh]],["GridSample",[pg,fg]],["GroupQueryAttention",[Rg]],["HardSigmoid",[ph,ch]],["InstanceNormalization",[Mg]],["LayerNormalization",[Bg]],["LeakyRelu",[ah,ji]],["Less",[Ph]],["LessOrEqual",[Bh]],["Log",[_h]],["MatMul",[jg]],["MatMulNBits",[qg,Wg]],["MaxPool",[o0,l0]],["Mul",[Rh]],["MultiHeadAttention",[yg,mg]],["Neg",[oh]],["Not",[sh]],["Pad",[e0]],["Pow",[Oh]],["QuickGelu",[bh,ji]],["Range",[y0]],["Reciprocal",[lh]],["ReduceMin",[wf]],["ReduceMean",[hf]],["ReduceMax",[vf]],["ReduceSum",[xf]],["ReduceProd",[_f]],["ReduceL1",[mf]],["ReduceL2",[gf]],["ReduceLogSum",[bf]],["ReduceLogSumExp",[yf]],["ReduceSumSquare",[$f]],["Relu",[uh]],["Resize",[B0,L0]],["RotaryEmbedding",[Tg]],["ScatterND",[x0,_0]],["Sigmoid",[dh]],["Sin",[fh]],["Sinh",[hh]],["Slice",[H0,K0]],["SkipLayerNormalization",[V0]],["Split",[bg,kg]],["Sqrt",[mh]],["Softmax",[Z0,Y0]],["Sub",[Ah]],["Tan",[gh]],["Tanh",[yh]],["ThresholdedRelu",[wh,ji]],["Tile",[ry]],["Transpose",[Ap,Mp]],["Where",[ay]]])}),oy,Nx=x(()=>{rr(),Mr(),ke(),oy=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,n){this.repo.set(t,n)}run(t,n,a,o,l){gt(t.programInfo.name);let u=this.backend.device,d=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let p=[];for(let m of n)p.push({binding:p.length,resource:{buffer:m.buffer}});for(let m of a)p.push({binding:p.length,resource:{buffer:m.buffer}});l&&p.push({binding:p.length,resource:l});let h=u.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:p,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:h,dispatchGroup:o};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}d.setPipeline(t.computePipeline),d.setBindGroup(0,h),d.dispatchWorkgroups(...o),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Et(t.programInfo.name)}dispose(){}build(t,n){gt(t.name);let a=this.backend.device,o=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(m=>{a.features.has(m.feature)&&o.push(`enable ${m.extension};`)});let l=Ip(n,this.backend.device.limits),u=t.getShaderSource(l),d=`${o.join(`
`)}
${l.additionalImplementations}
${u}`,p=a.createShaderModule({code:d,label:t.name});Ce("verbose",()=>`[WebGPU] ${t.name} shader code: ${d}`);let h=a.createComputePipeline({compute:{module:p,entryPoint:"main"},layout:"auto",label:t.name});return Et(t.name),{programInfo:t,computePipeline:h,uniformVariablesInfo:l.variablesInfo}}normalizeDispatchGroupSize(t){let n=typeof t=="number"?t:t.x,a=typeof t=="number"?1:t.y||1,o=typeof t=="number"?1:t.z||1,l=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(n<=l&&a<=l&&o<=l)return[n,a,o];let u=n*a*o,d=Math.ceil(Math.sqrt(u));if(d>l){if(d=Math.ceil(Math.cbrt(u)),d>l)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[d,d,d]}else return[d,d,1]}}}),ly={};N(ly,{WebGpuBackend:()=>py});var uy,dy,cy,py,Rx=x(()=>{rr(),ve(),Mr(),hp(),V_(),Cx(),Nx(),uy=(t,n)=>{if(n.length!==t.length)throw new Error(`inputDependencies length ${n.length} is not equal to inputTensors length ${t.length}.`);let a=[];for(let o=0;o<t.length;++o){let l=t[o].dataType;switch(n[o]){case"none":{a.push("");break}case"type":{a.push(`${l}`);break}case"rank":{let u=t[o].dims.length;a.push(`${l};${u}`);break}case"dims":{let u=t[o].dims.join(",");a.push(`${l};${u}`);break}default:throw new Error(`unsupported input dependency: ${n[o]}`)}}return a.join("|")},dy=(t,n,a)=>{var l,u;let o=t.name;return(l=t.shaderCache)!=null&&l.hint&&(o+="["+t.shaderCache.hint+"]"),o+=":"+a+`:${uy(n,((u=t.shaderCache)==null?void 0:u.inputDependencies)??new Array(n.length).fill("dims"))}`,o},cy=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},py=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,n){this.env=t;let a=[],o={requiredLimits:{maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxBufferSize:n.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ},requiredFeatures:a},l=u=>n.features.has(u)&&a.push(u)&&!0;l("chromium-experimental-timestamp-query-inside-passes")||l("timestamp-query"),l("shader-f16"),l("subgroups"),this.device=await n.requestDevice(o),this.adapterInfo=new cy(n.info||await n.requestAdapterInfo()),this.gpuDataManager=kp(this),this.programManager=new oy(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,el(t.logLevel,!!t.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:n,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var t;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((t=this.env)!=null&&t.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),n={};this.queryType==="at-passes"&&(n.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(n)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;gt(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{var o;let n=new BigUint64Array(t.getMappedRange()),a=this.pendingQueries.get(t);for(let l=0;l<n.length/2;l++){let u=a[l],d=u.kernelId,p=this.kernels.get(d),h=p.kernelType,m=p.kernelName,y=u.programName,v=u.inputTensorViews,w=u.outputTensorViews,_=n[l*2],$=n[l*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let S=Number(_-this.queryTimeBase),I=Number($-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(I))throw new RangeError("incorrect timestamp range");if((o=this.env.webgpu.profiling)!=null&&o.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:v.map(E=>({dims:E.dims,dataType:Ar(E.dataType)})),outputsMetadata:w.map(E=>({dims:E.dims,dataType:Ar(E.dataType)})),kernelId:d,kernelType:h,kernelName:m,programName:y,startTime:S,endTime:I});else{let E="";v.forEach((C,z)=>{E+=`input[${z}]: [${C.dims}] | ${Ar(C.dataType)}, `});let k="";w.forEach((C,z)=>{k+=`output[${z}]: [${C.dims}] | ${Ar(C.dataType)}, `}),console.log(`[profiling] kernel "${d}|${h}|${m}|${y}" ${E}${k}start time: ${S} ns, execution time: ${I-S} ns`)}Sn("GPU",`${y}::${_}::${$}`)}t.unmap(),this.pendingQueries.delete(t)}),Et()}run(t,n,a,o,l,u){gt(t.name);let d=[];for(let k=0;k<n.length;++k){let C=n[k].data;if(C===0)continue;let z=this.gpuDataManager.get(C);if(!z)throw new Error(`no GPU data for input: ${C}`);d.push(z)}let{outputs:p,dispatchGroup:h,programUniforms:m}=t.getRunData(n),y=a.length===0?p.map((k,C)=>C):a;if(y.length!==p.length)throw new Error(`Output size ${y.length} must be equal to ${p.length}.`);let v=[],w=[];for(let k=0;k<p.length;++k){if(!Number.isInteger(y[k])||y[k]<-3||y[k]>=u)throw new Error(`Invalid output index: ${y[k]}`);if(y[k]===-3)continue;let C=y[k]===-1,z=y[k]===-2,O=C||z?l(p[k].dataType,p[k].dims):o(y[k],p[k].dataType,p[k].dims);if(v.push(O),O.data===0)continue;let j=this.gpuDataManager.get(O.data);if(!j)throw new Error(`no GPU data for output: ${O.data}`);if(C&&this.temporaryData.push(j),z){let L=this.kernelPersistentData.get(this.currentKernelId);L||(L=[],this.kernelPersistentData.set(this.currentKernelId,L)),L.push(j)}w.push(j)}if(d.length!==n.length||w.length!==v.length){if(w.length===0)return Et(t.name),v;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(m){let k=0,C=[];m.forEach(L=>{let V=typeof L.data=="number"?[L.data]:L.data;if(V.length===0)return;let q=L.type===10?2:4,Z,me;L.type===10?(me=V.length>4?16:V.length>2?8:V.length*q,Z=V.length>4?16:q*V.length):(me=V.length<=2?V.length*q:16,Z=16),k=Math.ceil(k/me)*me,C.push(k);let ce=L.type===10?8:4;k+=V.length>4?Math.ceil(V.length/ce)*Z:V.length*q});let z=16;k=Math.ceil(k/z)*z;let O=new ArrayBuffer(k);m.forEach((L,V)=>{let q=C[V],Z=typeof L.data=="number"?[L.data]:L.data;if(L.type===6)new Int32Array(O,q,Z.length).set(Z);else if(L.type===12)new Uint32Array(O,q,Z.length).set(Z);else if(L.type===10)new Uint16Array(O,q,Z.length).set(Z);else if(L.type===1)new Float32Array(O,q,Z.length).set(Z);else throw new Error(`Unsupported uniform type: ${Ar(L.type)}`)});let j=this.gpuDataManager.create(k,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(j.buffer,0,O,0,k),this.gpuDataManager.release(j.id),_={offset:0,size:k,buffer:j.buffer}}let $=this.programManager.normalizeDispatchGroupSize(h),S=$[1]===1&&$[2]===1,I=dy(t,n,S),E=this.programManager.getArtifact(I);if(E||(E=this.programManager.build(t,$),this.programManager.setArtifact(I,E),Ce("info",()=>`[artifact] key: ${I}, programName: ${t.name}`)),m&&E.uniformVariablesInfo){if(m.length!==E.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${E.uniformVariablesInfo.length}, got ${m.length} in program "${E.programInfo.name}".`);for(let k=0;k<m.length;k++){let C=m[k],z=C.type,O=typeof C.data=="number"?1:C.data.length,[j,L]=E.uniformVariablesInfo[k];if(z!==j||O!==L)throw new Error(`Uniform variable ${k} mismatch: expect type ${j} with size ${L}, got type ${z} with size ${O} in program "${E.programInfo.name}".`)}}if(Ce("info",()=>`[ProgramManager] run "${t.name}" (key=${I}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let k={kernelId:this.currentKernelId,programName:E.programInfo.name,inputTensorViews:n,outputTensorViews:v};this.pendingKernels.push(k),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(k)}return this.programManager.run(E,d,w,$,_),Et(t.name),v}upload(t,n){this.gpuDataManager.upload(t,n)}memcpy(t,n){this.gpuDataManager.memcpy(t,n)}async download(t,n){await this.gpuDataManager.download(t,n)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,n,a,o){let l=sy.get(t);if(!l)throw new Error(`kernel not implemented: ${t}`);let u={kernelType:t,kernelName:o,kernelEntry:l[0],attributes:[l[1],a]};this.kernels.set(n,u)}releaseKernel(t){let n=this.kernelPersistentData.get(t);if(n){for(let a of n)this.gpuDataManager.release(a.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,n,a){let o=this.kernels.get(t);if(!o)throw new Error(`kernel not created: ${t}`);let l=o.kernelType,u=o.kernelName,d=o.kernelEntry,p=o.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${l}] ${u}" is not allowed to be called recursively`);this.currentKernelId=t,p[0]&&(p[1]=p[0](p[1]),p[0]=void 0),Ce("info",()=>`[WebGPU] Start to run kernel "[${l}] ${u}"...`);let h=this.env.debug;this.temporaryData=[];try{return h&&this.device.pushErrorScope("validation"),d(n,p[1]),0}catch(m){return a.push(Promise.resolve(`[WebGPU] Kernel "[${l}] ${u}" failed. ${m}`)),1}finally{h&&a.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${l}] ${u}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,n,a,o){let l=this.sessionExternalDataMapping.get(t);l||(l=new Map,this.sessionExternalDataMapping.set(t,l));let u=l.get(n),d=this.gpuDataManager.registerExternalBuffer(a,o,u);return l.set(n,[d,a]),d}unregisterBuffers(t){let n=this.sessionExternalDataMapping.get(t);n&&(n.forEach(a=>this.gpuDataManager.unregisterExternalBuffer(a[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let n=this.gpuDataManager.get(t);if(!n)throw new Error(`no GPU data for buffer: ${t}`);return n.buffer}createDownloader(t,n,a){return async()=>{let o=await pl(this,t,n);return tl(o.buffer,a)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){var t;this.queryType="none",(((t=this.env.webgpu.profiling)==null?void 0:t.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ce("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),n=this.capturedPendingKernels.get(this.currentSessionId),a=t.length;this.pendingKernels=[];for(let o=0;o<a;o++){let l=this.getComputePassEncoder(),u=t[o];this.writeTimestamp(this.pendingDispatchNumber*2),l.setPipeline(u.computePipeline),l.setBindGroup(0,u.bindGroup),l.dispatchWorkgroups(...u.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(n[o]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),fy={};N(fy,{init:()=>my});var us,hy,my,Ox=x(()=>{ve(),Mr(),be(),U_(),us=class x_{constructor(n,a,o,l){this.module=n,this.dataType=a,this.data=o,this.dims=l}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,n)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,n)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,n)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let n=U.size(this.dims);return n===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,n)}reshape(n){if(U.size(n)!==U.size(this.dims))throw new Error("Invalid new shape");return new x_(this.module,this.dataType,this.data,n)}},hy=class{constructor(t,n,a){this.module=t,this.backend=n,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=n.adapterInfo;let o=t.PTR_SIZE,l=a/t.PTR_SIZE,u=o===4?"i32":"i64";this.opKernelContext=Number(t.getValue(o*l++,u));let d=Number(t.getValue(o*l++,u));this.outputCount=Number(t.getValue(o*l++,u)),this.customDataOffset=Number(t.getValue(o*l++,"*")),this.customDataSize=Number(t.getValue(o*l++,u));let p=[];for(let h=0;h<d;h++){let m=Number(t.getValue(o*l++,u)),y=Number(t.getValue(o*l++,"*")),v=Number(t.getValue(o*l++,u)),w=[];for(let _=0;_<v;_++)w.push(Number(t.getValue(o*l++,u)));p.push(new us(t,m,y,w))}this.inputs=p}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,n){var d;let a=((d=n==null?void 0:n.inputs)==null?void 0:d.map(p=>typeof p=="number"?this.inputs[p]:p))??this.inputs,o=(n==null?void 0:n.outputs)??[],l=(p,h,m)=>new us(this.module,h,this.output(p,m),m),u=(p,h)=>{let m=zn(p,h);if(!m)throw new Error(`Unsupported data type: ${p}`);let y=m>0?this.backend.gpuDataManager.create(m).id:0;return new us(this.module,p,y,h)};return this.backend.run(t,a,o,l,u,this.outputCount)}output(t,n){let a=this.module.stackSave();try{let o=this.module.PTR_SIZE,l=o===4?"i32":"i64",u=this.module.stackAlloc((1+n.length)*o);this.module.setValue(u,n.length,l);for(let d=0;d<n.length;d++)this.module.setValue(u+o*(d+1),n[d],l);return this.module._JsepOutput(this.opKernelContext,t,u)}catch(o){throw new Error(`Failed to generate kernel's output[${t}] with dims [${n}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${o}`)}finally{this.module.stackRestore(a)}}},my=async(t,n,a,o)=>{let l=n.jsepInit;if(!l)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(t==="webgpu"){let u=(Rx(),B(ly)).WebGpuBackend,d=new u;await d.initialize(a,o),l("webgpu",[d,p=>d.alloc(Number(p)),p=>d.free(p),(p,h,m,y=!1)=>{if(y)Ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(p)}, dst=${Number(h)}, size=${Number(m)}`),d.memcpy(Number(p),Number(h));else{Ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(p)}, gpuDataId=${Number(h)}, size=${Number(m)}`);let v=n.HEAPU8.subarray(Number(p>>>0),Number(p>>>0)+Number(m));d.upload(Number(h),v)}},async(p,h,m)=>{Ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${p}, dataOffset=${h}, size=${m}`),await d.download(Number(p),()=>n.HEAPU8.subarray(Number(h)>>>0,Number(h+m)>>>0))},(p,h,m)=>d.createKernel(p,Number(h),m,n.UTF8ToString(n._JsepGetNodeName(Number(h)))),p=>d.releaseKernel(p),(p,h,m,y)=>{Ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${p}, contextDataOffset=${h}`);let v=new hy(n,d,Number(h));return d.computeKernel(Number(p),v,y)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let u=new _p(a);l("webnn",[u,()=>u.reserveTensorId(),d=>u.releaseTensorId(d),async(d,p,h,m,y)=>u.ensureTensor(d,p,h,m,y),(d,p)=>{u.uploadTensor(d,p)},async(d,p)=>u.downloadTensor(d,p),(d,p)=>u.registerMLContext(d,p),!!a.trace])}}}),gy,au,su,Yr,yy,ou,ds,lu,uu,du,cu,pu,fu,vy=x(()=>{rr(),B_(),L_(),ve(),En(),Qo(),ip(),gy=(t,n)=>{Ge()._OrtInit(t,n)!==0&&je("Can't initialize onnxruntime.")},au=async t=>{gy(t.wasm.numThreads,Xa(t.logLevel))},su=async(t,n)=>{var o,l;(l=(o=Ge()).asyncInit)==null||l.call(o);let a=t.webgpu.adapter;if(n==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=t.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=t.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(n==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let u=(Ox(),B(fy)).init;n==="webgpu"&&await u("webgpu",Ge(),t,a),n==="webnn"&&await u("webnn",Ge(),t)}},Yr=new Map,yy=t=>{let n=Ge(),a=n.stackSave();try{let o=n.PTR_SIZE,l=n.stackAlloc(2*o);n._OrtGetInputOutputCount(t,l,l+o)!==0&&je("Can't get session input/output count.");let u=o===4?"i32":"i64";return[Number(n.getValue(l,u)),Number(n.getValue(l+o,u))]}finally{n.stackRestore(a)}},ou=(t,n)=>{let a=Ge(),o=a.stackSave(),l=0;try{let u=a.PTR_SIZE,d=a.stackAlloc(2*u);a._OrtGetInputOutputMetadata(t,n,d,d+u)!==0&&je("Can't get session input/output metadata.");let p=Number(a.getValue(d,"*"));l=Number(a.getValue(d+u,"*"));let h=a.HEAP32[l/4];if(h===0)return[p,0];let m=a.HEAPU32[l/4+1],y=[];for(let v=0;v<m;v++){let w=Number(a.getValue(l+8+v*u,"*"));y.push(w!==0?a.UTF8ToString(w):Number(a.getValue(l+8+(v+m)*u,"*")))}return[p,h,y]}finally{a.stackRestore(o),l!==0&&a._OrtFree(l)}},ds=t=>{let n=Ge(),a=n._malloc(t.byteLength);if(a===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return n.HEAPU8.set(t,a),[a,t.byteLength]},lu=async(t,n)=>{var v,w,_,$;let a,o,l=Ge();Array.isArray(t)?[a,o]=t:t.buffer===l.HEAPU8.buffer?[a,o]=[t.byteOffset,t.byteLength]:[a,o]=ds(t);let u=0,d=0,p=0,h=[],m=[],y=[];try{if([d,h]=await np(n),(n==null?void 0:n.externalData)&&l.mountExternalData){let V=[];for(let q of n.externalData){let Z=typeof q=="string"?q:q.path;V.push(Jo(typeof q=="string"?q:q.data).then(me=>{l.mountExternalData(Z,me)}))}await Promise.all(V)}for(let V of(n==null?void 0:n.executionProviders)??[])if((typeof V=="string"?V:V.name)==="webnn"){if(l.shouldTransferToMLTensor=!1,typeof V!="string"){let q=V,Z=q==null?void 0:q.context,me=q==null?void 0:q.gpuDevice,ce=q==null?void 0:q.deviceType,pe=q==null?void 0:q.powerPreference;Z?l.currentContext=Z:me?l.currentContext=await l.webnnCreateMLContext(me):l.currentContext=await l.webnnCreateMLContext({deviceType:ce,powerPreference:pe})}else l.currentContext=await l.webnnCreateMLContext();break}u=await l._OrtCreateSession(a,o,d),(v=l.webgpuOnCreateSession)==null||v.call(l,u),u===0&&je("Can't create a session."),(w=l.jsepOnCreateSession)==null||w.call(l),l.currentContext&&(l.webnnRegisterMLContext(u,l.currentContext),l.currentContext=void 0,l.shouldTransferToMLTensor=!0);let[S,I]=yy(u),E=!!(n!=null&&n.enableGraphCapture),k=[],C=[],z=[],O=[],j=[];for(let V=0;V<S;V++){let[q,Z,me]=ou(u,V);q===0&&je("Can't get an input name."),m.push(q);let ce=l.UTF8ToString(q);k.push(ce),z.push(Z===0?{name:ce,isTensor:!1}:{name:ce,isTensor:!0,type:Ar(Z),shape:me})}for(let V=0;V<I;V++){let[q,Z,me]=ou(u,V+S);q===0&&je("Can't get an output name."),y.push(q);let ce=l.UTF8ToString(q);C.push(ce),O.push(Z===0?{name:ce,isTensor:!1}:{name:ce,isTensor:!0,type:Ar(Z),shape:me});{if(E&&(n==null?void 0:n.preferredOutputLocation)===void 0){j.push("gpu-buffer");continue}let pe=typeof(n==null?void 0:n.preferredOutputLocation)=="string"?n.preferredOutputLocation:((_=n==null?void 0:n.preferredOutputLocation)==null?void 0:_[ce])??"cpu",Ie=l.webnnIsGraphOutput;if(pe==="cpu"&&Ie&&Ie(u,ce)){j.push("ml-tensor-cpu-output");continue}if(pe!=="cpu"&&pe!=="cpu-pinned"&&pe!=="gpu-buffer"&&pe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${pe}.`);if(E&&pe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${pe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);j.push(pe)}}let L=null;return j.some(V=>V==="gpu-buffer"||V==="ml-tensor"||V==="ml-tensor-cpu-output")&&(p=l._OrtCreateBinding(u),p===0&&je("Can't create IO binding."),L={handle:p,outputPreferredLocations:j,outputPreferredLocationsEncoded:j.map(V=>V==="ml-tensor-cpu-output"?"ml-tensor":V).map(V=>Yo(V))}),Yr.set(u,[u,m,y,L,E,!1]),[u,k,C,z,O]}catch(S){throw m.forEach(I=>l._OrtFree(I)),y.forEach(I=>l._OrtFree(I)),p!==0&&l._OrtReleaseBinding(p)!==0&&je("Can't release IO binding."),u!==0&&l._OrtReleaseSession(u)!==0&&je("Can't release session."),S}finally{l._free(a),d!==0&&l._OrtReleaseSessionOptions(d)!==0&&je("Can't release session options."),h.forEach(S=>l._free(S)),($=l.unmountExternalData)==null||$.call(l)}},uu=t=>{var h,m,y;let n=Ge(),a=Yr.get(t);if(!a)throw new Error(`cannot release session. invalid session id: ${t}`);let[o,l,u,d,p]=a;d&&(p&&n._OrtClearBoundOutputs(d.handle)!==0&&je("Can't clear bound outputs."),n._OrtReleaseBinding(d.handle)!==0&&je("Can't release IO binding.")),(h=n.jsepOnReleaseSession)==null||h.call(n,t),(m=n.webnnOnReleaseSession)==null||m.call(n,t),(y=n.webgpuOnReleaseSession)==null||y.call(n,t),l.forEach(v=>n._OrtFree(v)),u.forEach(v=>n._OrtFree(v)),n._OrtReleaseSession(o)!==0&&je("Can't release session."),Yr.delete(t)},du=async(t,n,a,o,l,u,d=!1)=>{if(!t){n.push(0);return}let p=Ge(),h=p.PTR_SIZE,m=t[0],y=t[1],v=t[3],w=v,_,$;if(m==="string"&&(v==="gpu-buffer"||v==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&v!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(v==="gpu-buffer"){let E=t[2].gpuBuffer;$=zn(In(m),y);{let k=p.jsepRegisterBuffer;if(!k)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=k(o,u,E,$)}}else if(v==="ml-tensor"){let E=t[2].mlTensor;$=zn(In(m),y);let k=p.webnnRegisterMLTensor;if(!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=k(o,E,In(m),y)}else{let E=t[2];if(Array.isArray(E)){$=h*E.length,_=p._malloc($),a.push(_);for(let k=0;k<E.length;k++){if(typeof E[k]!="string")throw new TypeError(`tensor data at index ${k} is not a string`);p.setValue(_+k*h,cr(E[k],a),"*")}}else{let k=p.webnnIsGraphInput,C=p.webnnIsGraphOutput;if(m!=="string"&&k&&C){let z=p.UTF8ToString(l);if(k(o,z)||C(o,z)){let O=In(m);$=zn(O,y),w="ml-tensor";let j=p.webnnCreateTemporaryTensor,L=p.webnnUploadTensor;if(!j||!L)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let V=await j(o,O,y);L(V,new Uint8Array(E.buffer,E.byteOffset,E.byteLength)),_=V}else $=E.byteLength,_=p._malloc($),a.push(_),p.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,$),_)}else $=E.byteLength,_=p._malloc($),a.push(_),p.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,$),_)}}let S=p.stackSave(),I=p.stackAlloc(4*y.length);try{y.forEach((k,C)=>p.setValue(I+C*h,k,h===4?"i32":"i64"));let E=p._OrtCreateTensor(In(m),_,$,I,y.length,Yo(w));E===0&&je(`Can't create tensor for input/output. session=${o}, index=${u}.`),n.push(E)}finally{p.stackRestore(S)}},cu=async(t,n,a,o,l,u)=>{var ce,pe,Ie,Re;let d=Ge(),p=d.PTR_SIZE,h=Yr.get(t);if(!h)throw new Error(`cannot run inference. invalid session id: ${t}`);let m=h[0],y=h[1],v=h[2],w=h[3],_=h[4],$=h[5],S=n.length,I=o.length,E=0,k=[],C=[],z=[],O=[],j=[],L=d.stackSave(),V=d.stackAlloc(S*p),q=d.stackAlloc(S*p),Z=d.stackAlloc(I*p),me=d.stackAlloc(I*p);try{[E,k]=Yc(u),tr("wasm prepareInputOutputTensor");for(let ee=0;ee<S;ee++)await du(a[ee],C,O,t,y[n[ee]],n[ee],_);for(let ee=0;ee<I;ee++)await du(l[ee],z,O,t,v[o[ee]],S+o[ee],_);dr("wasm prepareInputOutputTensor");for(let ee=0;ee<S;ee++)d.setValue(V+ee*p,C[ee],"*"),d.setValue(q+ee*p,y[n[ee]],"*");for(let ee=0;ee<I;ee++)d.setValue(Z+ee*p,z[ee],"*"),d.setValue(me+ee*p,v[o[ee]],"*");if(w&&!$){let{handle:ee,outputPreferredLocations:Me,outputPreferredLocationsEncoded:X}=w;if(y.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${y.length}).`);tr("wasm bindInputsOutputs");for(let ie=0;ie<S;ie++){let ue=n[ie];await d._OrtBindInput(ee,y[ue],C[ie])!==0&&je(`Can't bind input[${ie}] for session=${t}.`)}for(let ie=0;ie<I;ie++){let ue=o[ie];(ce=l[ie])!=null&&ce[3]?(j.push(z[ie]),d._OrtBindOutput(ee,v[ue],z[ie],0)!==0&&je(`Can't bind pre-allocated output[${ie}] for session=${t}.`)):d._OrtBindOutput(ee,v[ue],0,X[ue])!==0&&je(`Can't bind output[${ie}] to ${Me[ie]} for session=${t}.`)}dr("wasm bindInputsOutputs"),Yr.set(t,[m,y,v,w,_,!0])}(pe=d.jsepOnRunStart)==null||pe.call(d,m),(Ie=d.webnnOnRunStart)==null||Ie.call(d,m);let fe;w?fe=await d._OrtRunWithBinding(m,w.handle,I,Z,E):fe=await d._OrtRun(m,q,V,S,me,I,Z,E),fe!==0&&je("failed to call OrtRun().");let we=[],st=[];tr("wasm ProcessOutputTensor");for(let ee=0;ee<I;ee++){let Me=Number(d.getValue(Z+ee*p,"*"));if(Me===z[ee]||j.includes(z[ee])){we.push(l[ee]),Me!==z[ee]&&d._OrtReleaseTensor(Me)!==0&&je("Can't release tensor.");continue}let X=d.stackSave(),ie=d.stackAlloc(4*p),ue=!1,te,Fe=0;try{d._OrtGetTensorData(Me,ie,ie+p,ie+2*p,ie+3*p)!==0&&je(`Can't access output tensor data on index ${ee}.`);let Dr=p===4?"i32":"i64",$t=Number(d.getValue(ie,Dr));Fe=d.getValue(ie+p,"*");let yr=d.getValue(ie+p*2,"*"),vr=Number(d.getValue(ie+p*3,Dr)),en=[];for(let vt=0;vt<vr;vt++)en.push(Number(d.getValue(yr+vt*p,Dr)));d._OrtFree(yr)!==0&&je("Can't free memory for tensor dims.");let tn=en.reduce((vt,ot)=>vt*ot,1);te=Ar($t);let Qi=w==null?void 0:w.outputPreferredLocations[o[ee]];if(te==="string"){if(Qi==="gpu-buffer"||Qi==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let vt=[];for(let ot=0;ot<tn;ot++){let Br=d.getValue(Fe+ot*p,"*"),Bx=d.getValue(Fe+(ot+1)*p,"*"),Lx=ot===tn-1?void 0:Bx-Br;vt.push(d.UTF8ToString(Br,Lx))}we.push([te,en,vt,"cpu"])}else if(Qi==="gpu-buffer"&&tn>0){let vt=d.jsepGetBuffer;if(!vt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ot=vt(Fe),Br=zn($t,tn);if(Br===void 0||!Xo(te))throw new Error(`Unsupported data type: ${te}`);ue=!0,we.push([te,en,{gpuBuffer:ot,download:d.jsepCreateDownloader(ot,Br,te),dispose:()=>{d._OrtReleaseTensor(Me)!==0&&je("Can't release tensor.")}},"gpu-buffer"])}else if(Qi==="ml-tensor"&&tn>0){let vt=d.webnnEnsureTensor,ot=d.webnnIsGraphInputOutputTypeSupported;if(!vt||!ot)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(zn($t,tn)===void 0||!Zo(te))throw new Error(`Unsupported data type: ${te}`);if(!ot(t,te,!1))throw new Error(`preferredLocation "ml-tensor" for ${te} output is not supported by current WebNN Context.`);let Br=await vt(t,Fe,$t,en,!1);ue=!0,we.push([te,en,{mlTensor:Br,download:d.webnnCreateMLTensorDownloader(Fe,te),dispose:()=>{d.webnnReleaseTensorId(Fe),d._OrtReleaseTensor(Me)}},"ml-tensor"])}else if(Qi==="ml-tensor-cpu-output"&&tn>0){let vt=d.webnnCreateMLTensorDownloader(Fe,te)(),ot=we.length;ue=!0,st.push((async()=>{let Br=[ot,await vt];return d.webnnReleaseTensorId(Fe),d._OrtReleaseTensor(Me),Br})()),we.push([te,en,[],"cpu"])}else{let vt=Qa(te),ot=new vt(tn);new Uint8Array(ot.buffer,ot.byteOffset,ot.byteLength).set(d.HEAPU8.subarray(Fe,Fe+ot.byteLength)),we.push([te,en,ot,"cpu"])}}finally{d.stackRestore(X),te==="string"&&Fe&&d._free(Fe),ue||d._OrtReleaseTensor(Me)}}w&&!_&&(d._OrtClearBoundOutputs(w.handle)!==0&&je("Can't clear bound outputs."),Yr.set(t,[m,y,v,w,_,!1]));for(let[ee,Me]of await Promise.all(st))we[ee][2]=Me;return dr("wasm ProcessOutputTensor"),we}finally{(Re=d.webnnOnRunEnd)==null||Re.call(d,m),d.stackRestore(L),C.forEach(fe=>d._OrtReleaseTensor(fe)),z.forEach(fe=>d._OrtReleaseTensor(fe)),O.forEach(fe=>d._free(fe)),E!==0&&d._OrtReleaseRunOptions(E),k.forEach(fe=>d._free(fe))}},pu=t=>{let n=Ge(),a=Yr.get(t);if(!a)throw new Error("invalid session id");let o=a[0],l=n._OrtEndProfiling(o);l===0&&je("Can't get an profile file name."),n._OrtFree(l)},fu=t=>{let n=[];for(let a of t){let o=a[2];!Array.isArray(o)&&"buffer"in o&&n.push(o.buffer)}return n}}),Jr,Lt,ii,Hi,Ki,cs,hu,ps,Pn,Dn,wy,_y,xy,$y,by,ky,Sy,Ey,Ty=x(()=>{rr(),vy(),En(),Wo(),Jr=()=>!!Y.wasm.proxy&&typeof document<"u",ii=!1,Hi=!1,Ki=!1,ps=new Map,Pn=(t,n)=>{let a=ps.get(t);a?a.push(n):ps.set(t,[n])},Dn=()=>{if(ii||!Hi||Ki||!Lt)throw new Error("worker not ready")},wy=t=>{switch(t.data.type){case"init-wasm":ii=!1,t.data.err?(Ki=!0,hu[1](t.data.err)):(Hi=!0,hu[0]()),cs&&(URL.revokeObjectURL(cs),cs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let n=ps.get(t.data.type);t.data.err?n.shift()[1](t.data.err):n.shift()[0](t.data.out);break}}},_y=async()=>{if(!Hi){if(ii)throw new Error("multiple calls to 'initWasm()' detected.");if(Ki)throw new Error("previous call to 'initWasm()' failed.");if(ii=!0,Jr())return new Promise((t,n)=>{Lt==null||Lt.terminate(),Hc().then(([a,o])=>{try{Lt=o,Lt.onerror=u=>n(u),Lt.onmessage=wy,hu=[t,n];let l={type:"init-wasm",in:Y};if(!l.in.wasm.wasmPaths&&a){let u=Uo();u&&(l.in.wasm.wasmPaths=u)}Lt.postMessage(l),cs=a}catch(l){n(l)}},n)});try{await Ko(Y.wasm),await au(Y),Hi=!0}catch(t){throw Ki=!0,t}finally{ii=!1}}},xy=async t=>{if(Jr())return Dn(),new Promise((n,a)=>{Pn("init-ep",[n,a]);let o={type:"init-ep",in:{epName:t,env:Y}};Lt.postMessage(o)});await su(Y,t)},$y=async t=>Jr()?(Dn(),new Promise((n,a)=>{Pn("copy-from",[n,a]);let o={type:"copy-from",in:{buffer:t}};Lt.postMessage(o,[t.buffer])})):ds(t),by=async(t,n)=>{if(Jr()){if(n!=null&&n.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Dn(),new Promise((a,o)=>{Pn("create",[a,o]);let l={type:"create",in:{model:t,options:{...n}}},u=[];t instanceof Uint8Array&&u.push(t.buffer),Lt.postMessage(l,u)})}else return lu(t,n)},ky=async t=>{if(Jr())return Dn(),new Promise((n,a)=>{Pn("release",[n,a]);let o={type:"release",in:t};Lt.postMessage(o)});uu(t)},Sy=async(t,n,a,o,l,u)=>{if(Jr()){if(a.some(d=>d[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(l.some(d=>d))throw new Error("pre-allocated output tensor is not supported for proxy.");return Dn(),new Promise((d,p)=>{Pn("run",[d,p]);let h=a,m={type:"run",in:{sessionId:t,inputIndices:n,inputs:h,outputIndices:o,options:u}};Lt.postMessage(m,fu(h))})}else return cu(t,n,a,o,l,u)},Ey=async t=>{if(Jr())return Dn(),new Promise((n,a)=>{Pn("end-profiling",[n,a]);let o={type:"end-profiling",in:t};Lt.postMessage(o)});pu(t)}}),mu,Iy,zy,Ax=x(()=>{rr(),Ty(),ve(),Bo(),ip(),mu=(t,n)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${t.location} for ${n()}`)}},Iy=t=>{switch(t[3]){case"cpu":return new Ot(t[0],t[2],t[1]);case"gpu-buffer":{let n=t[0];if(!Xo(n))throw new Error(`not supported data type: ${n} for deserializing GPU tensor`);let{gpuBuffer:a,download:o,dispose:l}=t[2];return Ot.fromGpuBuffer(a,{dataType:n,dims:t[1],download:o,dispose:l})}case"ml-tensor":{let n=t[0];if(!Zo(n))throw new Error(`not supported data type: ${n} for deserializing MLTensor tensor`);let{mlTensor:a,download:o,dispose:l}=t[2];return Ot.fromMLTensor(a,{dataType:n,dims:t[1],download:o,dispose:l})}default:throw new Error(`invalid data location: ${t[3]}`)}},zy=class{async fetchModelAndCopyToWasmMemory(t){return $y(await Jo(t))}async loadModel(t,n){gt();let a;typeof t=="string"?a=await this.fetchModelAndCopyToWasmMemory(t):a=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await by(a,n),Et()}async dispose(){return ky(this.sessionId)}async run(t,n,a){gt();let o=[],l=[];Object.entries(t).forEach(v=>{let w=v[0],_=v[1],$=this.inputNames.indexOf(w);if($===-1)throw new Error(`invalid input '${w}'`);o.push(_),l.push($)});let u=[],d=[];Object.entries(n).forEach(v=>{let w=v[0],_=v[1],$=this.outputNames.indexOf(w);if($===-1)throw new Error(`invalid output '${w}'`);u.push(_),d.push($)});let p=o.map((v,w)=>mu(v,()=>`input "${this.inputNames[l[w]]}"`)),h=u.map((v,w)=>v?mu(v,()=>`output "${this.outputNames[d[w]]}"`):null),m=await Sy(this.sessionId,l,p,d,h,a),y={};for(let v=0;v<m.length;v++)y[this.outputNames[d[v]]]=u[v]??Iy(m[v]);return Et(),y}startProfiling(){}endProfiling(){Ey(this.sessionId)}}}),Cy={};N(Cy,{OnnxruntimeWebAssemblyBackend:()=>yu,initializeFlags:()=>gu,wasmBackend:()=>Ny});var gu,yu,Ny,Mx=x(()=>{rr(),Ty(),Ax(),gu=()=>{(typeof Y.wasm.initTimeout!="number"||Y.wasm.initTimeout<0)&&(Y.wasm.initTimeout=0);let t=Y.wasm.simd;if(typeof t!="boolean"&&t!==void 0&&t!=="fixed"&&t!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${t}". Reset it to \`false\` and ignore SIMD feature checking.`),Y.wasm.simd=!1),typeof Y.wasm.proxy!="boolean"&&(Y.wasm.proxy=!1),typeof Y.wasm.trace!="boolean"&&(Y.wasm.trace=!1),typeof Y.wasm.numThreads!="number"||!Number.isInteger(Y.wasm.numThreads)||Y.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Y.wasm.numThreads=1;else{let n=typeof navigator>"u"?b("node:os").cpus().length:navigator.hardwareConcurrency;Y.wasm.numThreads=Math.min(4,Math.ceil((n||1)/2))}},yu=class{async init(t){gu(),await _y(),await xy(t)}async createInferenceSessionHandler(t,n){let a=new zy;return await a.loadModel(t,n),a}},Ny=new yu}),Ry={};N(Ry,{InferenceSession:()=>Do,TRACE:()=>Sn,TRACE_EVENT_BEGIN:()=>tr,TRACE_EVENT_END:()=>dr,TRACE_FUNC_BEGIN:()=>gt,TRACE_FUNC_END:()=>Et,Tensor:()=>Ot,default:()=>Dx,env:()=>Y,registerBackend:()=>G}),rr(),rr(),rr();var Px="1.26.0",Dx=Lc;{let t=(Mx(),B(Cy)).wasmBackend;G("webgpu",t,5),G("webnn",t,5),G("cpu",t,10),G("wasm",t,10)}return Object.defineProperty(Y.versions,"web",{value:Px,enumerable:!0}),B(Ry)})();/**
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
 */e.exports=i})(w_);var wn=w_.exports;const Ns=chrome.runtime.getURL("");wn.env.wasm.wasmPaths={"ort-wasm-simd-threaded.wasm":`${Ns}ort-wasm-simd-threaded.wasm`,"ort-wasm-simd-threaded.jsep.wasm":`${Ns}ort-wasm-simd-threaded.jsep.wasm`,"ort-wasm-simd-threaded.asyncify.wasm":`${Ns}ort-wasm-simd-threaded.asyncify.wasm`,"ort-wasm-simd-threaded.jspi.wasm":`${Ns}ort-wasm-simd-threaded.jspi.wasm`};wn.env.webgpu={disabled:!0};wn.env.webnn={disabled:!0};const $_=chrome.runtime.getURL("models/ai_detector/model_quantized.onnx"),b_=chrome.runtime.getURL("models/fake_detector/fakenews_detector_quantized.onnx"),ok=chrome.runtime.getURL("models/ai_detector/tokenizer.json"),lk=chrome.runtime.getURL("models/fake_detector/tokenizer.json"),uk=512,dk=2e3,ck=101,pk=102,Hv=100,fk=1,hk=0;let qu=null,Rs=null,Wu=null,Os=null;async function k_(){return qu||Rs||(console.log("[TruthScan ONNX] Loading AI model..."),Rs=wn.InferenceSession.create($_,{executionProviders:["wasm"],graphOptimizationLevel:"all"}).then(e=>(qu=e,e)),Rs)}async function S_(){return Wu||Os||(console.log("[TruthScan ONNX] Loading fake-news model..."),Os=wn.InferenceSession.create(b_,{executionProviders:["wasm"],graphOptimizationLevel:"all"}).then(e=>(Wu=e,e)),Os)}let Gu=null,As=null,Hu=null,Ms=null;async function E_(e){var f;console.log("[TruthScan Tokenizer] Loading vocab from:",e);const r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch tokenizer.json (${r.status}): ${e}`);const i=await r.json(),s=(f=i==null?void 0:i.model)==null?void 0:f.vocab;if(!s||typeof s!="object")throw new Error(`tokenizer.json at ${e} has no model.vocab — cannot tokenize`);const c=new Map(Object.entries(s));return console.log(`[TruthScan Tokenizer] Vocab loaded: ${c.size} tokens`),c}async function T_(){return Gu||As||(As=E_(ok).then(e=>(Gu=e,e)),As)}async function I_(){return Hu||Ms||(Ms=E_(lk).then(e=>(Hu=e,e)),Ms)}function mk(e){return e>=19968&&e<=40959||e>=13312&&e<=19903||e>=131072&&e<=173791||e>=63744&&e<=64255}function gk(e){return e>=33&&e<=47||e>=58&&e<=64||e>=91&&e<=96||e>=123&&e<=126||e>=8192&&e<=8303}function yk(e,r){let i="";for(let c=0;c<e.length;c++){const f=e.charCodeAt(c);if(!(f===0||f===65533)){if(f>=0&&f<=31||f>=127&&f<=159){i+=" ";continue}if(mk(f)){i+=" "+e[c]+" ";continue}i+=e[c]}}const s=i.replace(/\s+/g," ").trim();return r?s.toLowerCase():s}function vk(e){const r=[];let i="";for(let s=0;s<e.length;s++){const c=e.charCodeAt(s);c===32||c===9||c===10||c===13?i&&(r.push(i),i=""):gk(c)?(i&&(r.push(i),i=""),r.push(e[s])):i+=e[s]}return i&&r.push(i),r}function wk(e,r){if(e.length>100)return[Hv];const i=[];let s=0;for(;s<e.length;){let c=e.length,f=!1;for(;s<c;){const g=s===0?e.slice(s,c):"##"+e.slice(s,c);if(r.has(g)){i.push(r.get(g)),f=!0;break}c--}if(!f)return[Hv];s=c}return i}function _k(e,r,i,s){const c=yk(e,s),f=vk(c),g=[ck];for(const x of f){if(g.length>=i-1)break;for(const N of wk(x,r)){if(g.length>=i-1)break;g.push(N)}}g.push(pk);const b=new Array(g.length).fill(1);return{input_ids:g,attention_mask:b}}const xk=5;function $k(e){const r=e.map(f=>f/xk),i=Math.max(...Array.from(r)),s=r.map(f=>Math.exp(f-i)),c=s.reduce((f,g)=>f+g,0);return s.map(f=>f/c)}function bk(e){return Math.min(85,Math.max(15,e))}async function z_(e,r,i,s,c,f){const g=i.slice(0,dk).trim();if(!g)return{percent:0,textPreview:""};const{input_ids:b,attention_mask:x}=_k(g,r,uk,f),N=b.length;console.log(`[TruthScan ONNX] ${c} — seq len: ${N}, first 8 IDs: [${b.slice(0,8).join(", ")}]`);const P=new BigInt64Array(b.map(BigInt)),B=new BigInt64Array(x.map(BigInt)),A=[1,N],W={input_ids:new wn.Tensor("int64",P,A),attention_mask:new wn.Tensor("int64",B,A)};e.inputNames.includes("token_type_ids")&&(W.token_type_ids=new wn.Tensor("int64",new BigInt64Array(N).fill(0n),A));const G=await e.run(W),Q=e.outputNames.find(D=>D.toLowerCase().includes("logit"))??e.outputNames[0],$e=G[Q].data,M=$k($e),R=bk(Math.round(M[s]*100));return console.log(`[TruthScan ONNX] ${c} — logits: [${Array.from($e).join(", ")}] → ${R}% (clamped to [15,85])`),{percent:R,textPreview:g.slice(0,200)}}async function kk(e){try{const[r,i]=await Promise.all([k_(),T_()]),{percent:s,textPreview:c}=await z_(r,i,e,fk,"AI",!0);return{aiLikelihoodPercent:s,textPreview:c,modelLoaded:!0}}catch(r){throw console.error("[TruthScan ONNX] AI inference error:",r),new Error(`Local AI inference failed: ${r instanceof Error?r.message:String(r)}`)}}async function Sk(e){try{const[r,i]=await Promise.all([S_(),I_()]),{percent:s,textPreview:c}=await z_(r,i,e,hk,"FAKE",!0);return{fakeLikelihoodPercent:s,textPreview:c,modelLoaded:!0}}catch(r){throw console.error("[TruthScan ONNX] Fake-news inference error:",r),new Error(`Local fake-news inference failed: ${r instanceof Error?r.message:String(r)}`)}}async function Ek(){try{await Promise.all([k_(),T_()]),console.log("[TruthScan ONNX] AI warm-up complete.")}catch(e){console.warn("[TruthScan ONNX] AI warm-up failed (non-fatal):",e)}}async function Tk(){try{await Promise.all([S_(),I_()]),console.log("[TruthScan ONNX] Fake-news warm-up complete.")}catch(e){console.warn("[TruthScan ONNX] Fake-news warm-up failed (non-fatal):",e)}}async function C_(){try{return(await fetch($_,{method:"HEAD"})).ok}catch{return!1}}async function Ik(){try{return(await fetch(b_,{method:"HEAD"})).ok}catch{return!1}}const zk={completed:T.jsx(La,{className:"w-4 h-4 text-emerald-400"}),loading:T.jsx(ja,{className:"w-4 h-4 text-purple-400 animate-spin"}),error:T.jsx(o_,{className:"w-4 h-4 text-red-400"}),pending:T.jsx(_b,{className:"w-4 h-4 text-slate-600"})},Ck={completed:"text-emerald-300",loading:"text-purple-300",error:"text-red-300",pending:"text-slate-500"},Nk={completed:"bg-emerald-500/10 border border-emerald-500/20",loading:"bg-purple-500/10 border border-purple-500/20",error:"bg-red-500/10 border border-red-500/20",pending:"bg-white/3 border border-white/5"},Rk=({stages:e,className:r})=>{const i=e.filter(c=>c.status==="completed").length,s=e.length>0?Math.round(i/e.length*100):0;return T.jsxs("div",{className:qe("space-y-2",r),children:[T.jsxs("div",{className:"flex items-center justify-between mb-2",children:[T.jsx("h3",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wide",children:"Analysis Pipeline"}),T.jsxs("span",{className:"text-xs text-slate-500",children:[i," / ",e.length]})]}),T.jsx("div",{className:"space-y-1.5",children:e.map(c=>T.jsxs("div",{className:qe("flex items-start gap-2.5 p-2 rounded-lg transition-all duration-200",Nk[c.status]),children:[T.jsx("div",{className:"flex-shrink-0 mt-0.5",children:zk[c.status]}),T.jsxs("div",{className:"flex-1 min-w-0",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:qe("text-xs font-medium",Ck[c.status]),children:c.title}),c.status==="loading"&&T.jsx("span",{className:"text-[10px] text-purple-400 animate-pulse",children:"Running..."})]}),T.jsx("p",{className:qe("text-[10px] mt-0.5 leading-relaxed",c.status==="error"?"text-red-400":"text-slate-600"),children:c.status==="error"&&c.error?c.error:c.description})]})]},c.id))}),T.jsxs("div",{className:"mt-3",children:[T.jsxs("div",{className:"flex justify-between text-[10px] text-slate-600 mb-1",children:[T.jsx("span",{children:"Progress"}),T.jsxs("span",{children:[s,"%"]})]}),T.jsx("div",{className:"w-full bg-white/5 rounded-full h-1.5",children:T.jsx("div",{className:"h-1.5 rounded-full transition-all duration-500",style:{width:`${s}%`,background:"linear-gradient(90deg, #7c3aed, #4f46e5)",boxShadow:s>0?"0 0 8px rgba(124, 58, 237, 0.5)":"none"}})})]})]})},Ok=({className:e})=>{const[r,i]=Ye.useState(!1),[s,c]=Ye.useState([]),[f,g]=Ye.useState("unknown"),b=A=>{const W=new Date().toLocaleTimeString();c(G=>[...G.slice(-19),`[${W}] ${A}`])},x=async()=>{var A;i(!0),c([]),b("Starting diagnostics...");try{b("Test 1: Checking local ONNX model file...");const W=await C_();g(W?"ready":"missing"),b(`Local model: ${W?"FOUND ✓":"NOT FOUND ✗"}`),b("Test 2: Checking Chrome extension APIs...");try{const G=await chrome.tabs.query({active:!0,currentWindow:!0});b(`Chrome tabs API: SUCCESS (${G.length} active tab)`),(A=G[0])!=null&&A.url&&b(`Current URL: ${G[0].url}`)}catch(G){b(`Chrome API check failed: ${G}`)}b("Test 3: Checking Chrome storage API...");try{await new Promise(G=>chrome.storage.local.set({_diag_test:1},()=>{chrome.storage.local.remove("_diag_test",G)})),b("Chrome storage API: SUCCESS ✓")}catch(G){b(`Chrome storage failed: ${G}`)}b("Diagnostics complete.")}catch(W){b(`Fatal test error: ${W}`)}finally{i(!1)}},N=()=>{switch(f){case"ready":return T.jsx(La,{className:"w-4 h-4 text-emerald-400"});case"missing":return T.jsx(o_,{className:"w-4 h-4 text-red-400"});default:return T.jsx("div",{className:"w-4 h-4 bg-slate-600 rounded-full animate-pulse"})}},P=()=>({ready:"Ready",missing:"Not Found",unknown:"Unknown"})[f],B={ready:"text-emerald-400",missing:"text-red-400",unknown:"text-slate-500"}[f];return T.jsxs("div",{className:qe("glass-panel p-4",e),children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsxs("h3",{className:"text-sm font-semibold text-white flex items-center gap-2",children:[T.jsx(wb,{className:"w-4 h-4 text-purple-400"}),"Diagnostics"]}),T.jsxs("button",{onClick:x,disabled:r,className:"ts-btn-ghost flex items-center gap-1.5 text-xs",children:[T.jsx(Sb,{className:qe("w-3.5 h-3.5",r&&"animate-spin")}),r?"Running...":"Run Tests"]})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"flex items-center justify-between p-2 bg-white/5 rounded-lg",children:[T.jsx("span",{className:"text-xs text-slate-400",children:"Local ONNX Model"}),T.jsxs("div",{className:"flex items-center gap-1.5",children:[N(),T.jsx("span",{className:qe("text-xs font-medium",B),children:P()})]})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[T.jsx("span",{className:"text-xs font-medium text-slate-400",children:"Test Log"}),T.jsxs("span",{className:"text-[10px] text-slate-600",children:[s.length," entries"]})]}),T.jsx("div",{className:"max-h-40 overflow-y-auto bg-black/30 rounded-lg p-2 text-[10px] font-mono",children:s.length===0?T.jsx("div",{className:"text-slate-600 text-center py-4",children:'No logs yet. Click "Run Tests" to start.'}):s.map((A,W)=>T.jsx("div",{className:"text-slate-500 mb-0.5 leading-relaxed",children:A},W))})]}),T.jsxs("div",{className:"text-[10px] text-slate-600 space-y-0.5",children:[T.jsx("p",{className:"font-medium text-slate-500",children:"Debug tips:"}),T.jsxs("ul",{className:"list-disc list-inside space-y-0.5 pl-1",children:[T.jsx("li",{children:"All inference runs locally — no server needed"}),T.jsx("li",{children:"Check browser console for detailed logs"}),T.jsx("li",{children:"If model is missing, reload the extension"})]})]})]})]})};function Fd(e){return e>=80?"Very High":e>=60?"High":e>=40?"Moderate":e>=20?"Low":"Very Low"}function Kv(e){return e>=80?"text-red-400":e>=60?"text-orange-400":e>=40?"text-amber-400":"text-emerald-400"}function Ak(e){return e>=80?"Very High":e>=60?"High":e>=40?"Moderate":e>=20?"Low":"Very Low"}function Mk(e){return e==="low"?T.jsx(La,{className:"w-4 h-4 text-emerald-400"}):e==="high"?T.jsx(Si,{className:"w-4 h-4 text-red-400"}):T.jsx(Si,{className:"w-4 h-4 text-amber-400"})}function Pk({darkMode:e,serverOnline:r,fakeModelOnline:i,inferenceMode:s,onToggleTheme:c,onToggleMode:f}){const g=s==="local";return T.jsxs("div",{className:"flex-shrink-0 border-b border-purple-500/20 bg-purple-900/10",children:[T.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0",children:T.jsx(c_,{className:"w-4 h-4 text-white"})}),T.jsxs("div",{children:[T.jsx("h1",{className:"text-sm font-bold text-white tracking-wide leading-tight",children:"TruthScan"}),T.jsx("p",{className:"text-[10px] text-purple-300 leading-tight",children:"AI & Misinformation Detector"})]})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsxs("div",{className:"flex items-center gap-1",title:"AI model status",children:[r===null?T.jsx("div",{className:"w-2 h-2 bg-slate-500 rounded-full animate-pulse"}):T.jsx("div",{className:qe("w-2 h-2 rounded-full",r?"bg-emerald-400":"bg-red-400"),style:r?{boxShadow:"0 0 6px rgba(52,211,153,0.6)"}:{}}),T.jsx("span",{className:qe("text-[10px] font-medium",r?"text-emerald-400":"text-red-400"),children:"AI"})]}),T.jsxs("div",{className:"flex items-center gap-1",title:"Fake-news model status",children:[i===null?T.jsx("div",{className:"w-2 h-2 bg-slate-500 rounded-full animate-pulse"}):T.jsx("div",{className:qe("w-2 h-2 rounded-full",i?"bg-emerald-400":"bg-red-400"),style:i?{boxShadow:"0 0 6px rgba(52,211,153,0.6)"}:{}}),T.jsx("span",{className:qe("text-[10px] font-medium",i?"text-emerald-400":"text-red-400"),children:"Fake"})]})]}),T.jsx("button",{onClick:c,className:"p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white",title:"Toggle theme",children:e?T.jsx(Tb,{className:"w-4 h-4"}):T.jsx(kb,{className:"w-4 h-4"})})]})]}),T.jsx("div",{className:"flex items-center justify-center pb-2.5 px-4",children:T.jsxs("button",{onClick:f,title:g?"Switch to API mode (requires backend server)":"Switch to Local mode (offline, no server needed)",className:qe("relative flex items-center rounded-full p-0.5 transition-all duration-300 w-48",g?"bg-gradient-to-r from-violet-600/40 to-indigo-600/40 border border-violet-500/40":"bg-gradient-to-r from-sky-600/40 to-cyan-600/40 border border-sky-500/40"),style:g?{boxShadow:"0 0 12px rgba(124,58,237,0.25)"}:{boxShadow:"0 0 12px rgba(14,165,233,0.25)"},children:[T.jsx("span",{className:qe("absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-all duration-300 ease-in-out",g?"left-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 shadow-lg":"left-[calc(50%+2px)] bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg"),style:g?{boxShadow:"0 0 8px rgba(124,58,237,0.5)"}:{boxShadow:"0 0 8px rgba(14,165,233,0.5)"}}),T.jsxs("span",{className:qe("relative z-10 flex-1 flex items-center justify-center gap-1.5 py-1 text-[11px] font-semibold transition-colors duration-300",g?"text-white":"text-slate-400"),children:[T.jsx(xb,{className:"w-3 h-3"}),"Local"]}),T.jsxs("span",{className:qe("relative z-10 flex-1 flex items-center justify-center gap-1.5 py-1 text-[11px] font-semibold transition-colors duration-300",g?"text-slate-400":"text-white"),children:[T.jsx(bb,{className:"w-3 h-3"}),"API"]})]})})]})}const Dk=[{id:"overview",label:"Overview",icon:T.jsx(u_,{className:"w-3.5 h-3.5"})},{id:"analysis",label:"Analysis",icon:T.jsx(l_,{className:"w-3.5 h-3.5"})},{id:"qa",label:"Q&A",icon:T.jsx(ca,{className:"w-3.5 h-3.5"})},{id:"settings",label:"Settings",icon:T.jsx(Eb,{className:"w-3.5 h-3.5"})}];function Bk({activeTab:e,onTabChange:r}){return T.jsx("div",{className:"flex gap-1 px-3 py-2 border-b border-purple-500/10 bg-black/20 flex-shrink-0",children:Dk.map(i=>T.jsxs("button",{onClick:()=>r(i.id),className:qe("flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",e===i.id?"bg-purple-600 text-white shadow-sm":"text-slate-500 hover:text-slate-200 hover:bg-white/5"),style:e===i.id?{boxShadow:"0 0 12px rgba(124,58,237,0.35)"}:{},children:[i.icon,T.jsx("span",{className:"hidden sm:inline",children:i.label}),T.jsx("span",{className:"sm:hidden",children:i.label.split("")[0]})]},i.id))})}function Lk({report:e,scanInProgress:r,summarizeInProgress:i,summaryData:s,pipelineStages:c,serverOnline:f,fakeModelOnline:g,inferenceMode:b,onScan:x,onSummarize:N}){var G,Q,$e;const P=s??((G=e==null?void 0:e.apiData)==null?void 0:G.summarizationResult),B=b==="local",A=[];B&&f===!1&&A.push("AI"),B&&g===!1&&A.push("Fake-news");const W=A.length>0;return T.jsx("div",{className:"space-y-3",children:T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsx("h2",{className:"text-sm font-semibold text-white",children:"Page Scanner"}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:x,disabled:r,className:"ts-btn-primary flex items-center gap-1.5 text-xs",children:r?T.jsxs(T.Fragment,{children:[T.jsx(ja,{className:"w-3.5 h-3.5 animate-spin"}),"Scanning..."]}):T.jsxs(T.Fragment,{children:[T.jsx(p_,{className:"w-3.5 h-3.5"}),"Scan Page"]})}),T.jsx("button",{onClick:N,disabled:i||!(($e=(Q=e==null?void 0:e.apiData)==null?void 0:Q.scrapedData)!=null&&$e.text),className:"ts-btn-ghost flex items-center gap-1.5 text-xs",children:i?T.jsxs(T.Fragment,{children:[T.jsx(ja,{className:"w-3.5 h-3.5 animate-spin"}),"Summarizing..."]}):T.jsxs(T.Fragment,{children:[T.jsx(_o,{className:"w-3.5 h-3.5"}),"Summarize"]})})]})]}),r&&c.length>0&&T.jsx("div",{className:"mb-3",children:T.jsx(Rk,{stages:c})}),e?T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"text-xs text-slate-500",children:"Overall Risk"}),T.jsxs("div",{className:qe("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",e.overallRisk==="high"?"bg-red-500/20 text-red-400 border border-red-500/30":e.overallRisk==="medium"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"),children:[Mk(e.overallRisk),e.overallRisk.toUpperCase()]})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-3 text-center",children:[B?T.jsx("div",{className:qe("text-lg font-bold",Kv(e.aiScore)),children:Fd(e.aiScore)}):T.jsxs("div",{className:qe("text-lg font-bold",Kv(e.aiScore)),children:[e.aiScore,"%"]}),T.jsx("div",{className:"text-[10px] text-slate-600 mt-0.5",children:B?"AI Risk Level · Local":"AI Likelihood · API"})]}),T.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-3 text-center",children:[T.jsxs("div",{className:"text-lg font-bold text-amber-400",children:[e.fakeNewsScore,"%"]}),T.jsx("div",{className:"text-[10px] text-slate-600 mt-0.5",children:B?"False Claims · Local":"Misinformation · API"})]})]}),e.apiData&&T.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg",children:[T.jsx(d_,{className:"w-3.5 h-3.5 text-indigo-400 flex-shrink-0"}),T.jsxs("span",{className:"text-xs text-indigo-300",children:[e.apiData.scrapedData.text.length.toLocaleString()," characters analyzed"]})]}),P&&T.jsxs("div",{className:"p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[T.jsx(_o,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),T.jsx("span",{className:"text-xs font-semibold text-emerald-300",children:"Summary"})]}),T.jsxs("p",{className:"text-[10px] text-emerald-700 mb-2",children:[P.model," · ",P.input_length," → ",P.summary_length," chars"]}),T.jsx("div",{className:"text-xs text-slate-300 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed",children:P.summary})]})]}):T.jsxs("div",{className:"py-10 text-center",children:[T.jsx("div",{className:"w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center",children:T.jsx(c_,{className:"w-7 h-7 text-purple-400/40"})}),T.jsx("p",{className:"text-sm text-slate-500 mb-1",children:'Click "Scan Page" to analyze this webpage'}),T.jsx("p",{className:"text-xs text-slate-700",children:B?"Offline · DistilBERT ONNX · No API key needed":"API Mode · Gemini + Tavily fact-check · Requires server"}),W&&T.jsxs("p",{className:"text-xs text-red-400 mt-3 flex items-center justify-center gap-1.5",children:[T.jsx(Si,{className:"w-3.5 h-3.5"}),"Local model missing: ",A.join(", ")," — reinstall extension"]})]})]})})}function jk({report:e,summaryData:r,summarizeInProgress:i,imageExpanded:s,onSummarize:c,onToggleImages:f}){var b,x,N;const g=r??((b=e.apiData)==null?void 0:b.summarizationResult);return T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsx("h3",{className:"text-sm font-semibold text-white",children:"Detection Results"}),!g&&T.jsxs("button",{onClick:c,disabled:i,className:"ts-btn-ghost text-xs flex items-center gap-1",children:[T.jsx(_o,{className:"w-3 h-3"}),i?"Processing...":"Summarize"]})]}),T.jsx("div",{className:"space-y-2",children:e.results.map(P=>T.jsxs("div",{className:"bg-white/5 border border-white/8 rounded-xl p-3",children:[T.jsxs("div",{className:"flex items-center justify-between mb-1",children:[T.jsx("span",{className:"text-xs font-medium text-slate-200 capitalize",children:P.type.replace("-"," ")}),T.jsxs("span",{className:qe("text-xs font-bold",P.confidence>=70?"text-red-400":P.confidence>=40?"text-amber-400":"text-emerald-400"),children:[P.confidence,"%"]})]}),T.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:P.description})]},P.id))})]}),e.factCheckClaims&&e.factCheckClaims.length>0&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Fact Check"}),T.jsx("div",{className:"space-y-2",children:e.factCheckClaims.map((P,B)=>T.jsxs("div",{className:qe("p-3 rounded-xl border-l-2",P.isLikelyTrue?"bg-emerald-500/10 border-emerald-500":"bg-red-500/10 border-red-500"),children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[P.isLikelyTrue?T.jsx(La,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}):T.jsx(Si,{className:"w-4 h-4 text-red-400 flex-shrink-0"}),T.jsx("span",{className:qe("text-xs font-semibold",P.isLikelyTrue?"text-emerald-300":"text-red-300"),children:P.isLikelyTrue?"Likely True":"Likely False"})]}),T.jsxs("p",{className:"text-xs text-slate-300 mb-2 leading-relaxed",children:['"',P.claim,'"']}),P.supportingSources&&P.supportingSources.length>0&&T.jsxs("div",{className:"space-y-1",children:[T.jsx("p",{className:"text-[10px] font-semibold text-slate-600 uppercase tracking-wide",children:"Sources"}),P.supportingSources.map((A,W)=>T.jsxs("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 group",children:[T.jsx($b,{className:"w-3 h-3 text-slate-600 group-hover:text-indigo-400 flex-shrink-0"}),T.jsx("span",{className:"text-[10px] text-indigo-400 hover:underline truncate",title:A.title,children:A.title})]},W))]})]},B))})]}),((x=e.apiData)==null?void 0:x.sentimentResult)&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Sentiment Analysis"}),T.jsxs("div",{className:"p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[T.jsx(d_,{className:"w-4 h-4 text-indigo-400"}),T.jsx("span",{className:"text-xs font-medium text-indigo-300",children:"Content Tone"})]}),T.jsx("p",{className:"text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:e.apiData.sentimentResult.summary})]})]}),g&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Content Summary"}),T.jsxs("div",{className:"p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[T.jsx(_o,{className:"w-4 h-4 text-emerald-400"}),T.jsx("span",{className:"text-xs font-medium text-emerald-300",children:"AI-Generated Summary"})]}),T.jsxs("p",{className:"text-[10px] text-emerald-700 mb-2",children:[g.model," · ",g.input_length," → ",g.summary_length," chars"]}),T.jsx("div",{className:"text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:g.summary})]})]}),((N=e.apiData)==null?void 0:N.imageDetectionResults)&&e.apiData.imageDetectionResults.length>0&&T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("button",{onClick:f,className:"w-full flex items-center justify-between hover:opacity-80 transition-opacity",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(u_,{className:"w-4 h-4 text-indigo-400"}),T.jsxs("div",{className:"text-left",children:[T.jsx("h3",{className:"text-sm font-semibold text-white",children:"Image Analysis"}),T.jsxs("p",{className:"text-[10px] text-slate-500",children:[e.apiData.imageDetectionResults.length," image",e.apiData.imageDetectionResults.length!==1?"s":""," analyzed"]})]})]}),T.jsx("div",{className:qe("transition-transform duration-200",s?"rotate-180":""),children:T.jsx("svg",{className:"w-4 h-4 text-slate-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),s&&T.jsx("div",{className:"mt-3 space-y-2",children:e.apiData.imageDetectionResults.map((P,B)=>T.jsxs("div",{className:qe("p-3 rounded-xl border-l-2",P.aiLikelihoodPercent>70?"bg-red-500/10 border-red-500":P.aiLikelihoodPercent>40?"bg-amber-500/10 border-amber-500":"bg-emerald-500/10 border-emerald-500"),children:[T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[P.aiLikelihoodPercent>70?T.jsx(Si,{className:"w-4 h-4 text-red-400 flex-shrink-0"}):P.aiLikelihoodPercent>40?T.jsx(Si,{className:"w-4 h-4 text-amber-400 flex-shrink-0"}):T.jsx(La,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),T.jsxs("span",{className:qe("text-xs font-medium",P.aiLikelihoodPercent>70?"text-red-300":P.aiLikelihoodPercent>40?"text-amber-300":"text-emerald-300"),children:["AI Likelihood: ",P.aiLikelihoodPercent,"%"]})]}),T.jsx("img",{src:P.url,alt:"Analyzed",className:"max-w-full h-24 object-cover rounded-lg border border-white/10 mb-2",onError:A=>{A.target.style.display="none"}}),T.jsx("p",{className:"text-[10px] text-slate-600 break-all",children:P.url}),P.rawModelReply&&T.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:[T.jsx("span",{className:"font-medium text-slate-300",children:"Analysis: "}),P.rawModelReply]}),P.topSources&&P.topSources.length>0&&P.aiLikelihoodPercent>40&&T.jsxs("div",{className:"mt-2 p-2 bg-white/5 rounded-lg",children:[T.jsx("p",{className:"text-[10px] font-medium text-slate-500 mb-1",children:"Possible AI Sources"}),P.topSources.map((A,W)=>T.jsxs("div",{className:"flex justify-between text-[10px]",children:[T.jsx("span",{className:"capitalize text-slate-500",children:A.source}),T.jsxs("span",{className:qe("font-medium",A.confidence>1?"text-red-400":A.confidence>.1?"text-amber-400":"text-slate-500"),children:[A.confidence.toFixed(2),"%"]})]},W))]})]},B))})]})]})}function Uk({report:e,question:r,qaResponse:i,answerInProgress:s,scanInProgress:c,onQuestionChange:f,onSubmit:g,onScan:b}){var N,P;const x=!!((P=(N=e==null?void 0:e.apiData)==null?void 0:N.scrapedData)!=null&&P.text);return T.jsx("div",{className:"space-y-3",children:T.jsxs("div",{className:"glass-panel p-4",children:[T.jsxs("h3",{className:"text-sm font-semibold text-white mb-3 flex items-center gap-2",children:[T.jsx(ca,{className:"w-4 h-4 text-indigo-400"}),"Ask About This Page"]}),x?T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-medium text-slate-400 mb-1.5",children:"Your Question"}),T.jsx("textarea",{value:r,onChange:B=>f(B.target.value),placeholder:"Ask anything about the page content...",className:"ts-input h-20 resize-none text-sm",disabled:s})]}),T.jsx("button",{onClick:g,disabled:!r.trim()||s,className:"ts-btn-primary w-full flex items-center justify-center gap-2 text-sm",children:s?T.jsxs(T.Fragment,{children:[T.jsx(ja,{className:"w-4 h-4 animate-spin"}),"Getting Answer..."]}):T.jsxs(T.Fragment,{children:[T.jsx(ca,{className:"w-4 h-4"}),"Ask Question"]})}),i&&T.jsxs("div",{className:"p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[T.jsx(ca,{className:"w-4 h-4 text-indigo-400"}),T.jsx("span",{className:"text-xs font-semibold text-indigo-300",children:"Answer"})]}),T.jsxs("p",{className:"text-[10px] text-indigo-600 mb-2",children:[i.model," · ",i.content_length," chars context · ",i.answer_length," char answer"]}),T.jsx("div",{className:"text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:i.answer})]}),T.jsxs("p",{className:"text-[10px] text-slate-700 text-center",children:[e.apiData.scrapedData.text.length.toLocaleString()," characters available as context"]})]}):T.jsxs("div",{className:"py-10 text-center",children:[T.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center",children:T.jsx(ca,{className:"w-6 h-6 text-indigo-400/40"})}),T.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"Scan the page first to enable Q&A"}),T.jsx("button",{onClick:b,disabled:c,className:"ts-btn-primary text-xs flex items-center gap-1.5 mx-auto",children:c?T.jsxs(T.Fragment,{children:[T.jsx(ja,{className:"w-3.5 h-3.5 animate-spin"}),"Scanning..."]}):T.jsxs(T.Fragment,{children:[T.jsx(p_,{className:"w-3.5 h-3.5"}),"Scan Page"]})})]})]})})}function Vk({darkMode:e,onToggleTheme:r}){return T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-3",children:"Appearance"}),T.jsxs("div",{className:"flex items-center justify-between py-2",children:[T.jsxs("div",{children:[T.jsx("p",{className:"text-sm text-slate-200",children:"Dark Theme"}),T.jsx("p",{className:"text-xs text-slate-600",children:"Use dark color scheme"})]}),T.jsx("button",{onClick:r,className:qe("relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200",e?"bg-purple-600":"bg-slate-700"),children:T.jsx("span",{className:qe("inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200",e?"translate-x-6":"translate-x-1")})})]})]}),T.jsx(Ok,{}),T.jsxs("div",{className:"glass-panel p-4",children:[T.jsx("h3",{className:"text-sm font-semibold text-white mb-2",children:"About TruthScan"}),T.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"TruthScan helps you identify AI-generated content and potential misinformation on any webpage. Stay informed online with advanced multi-model detection across text, facts, and images."}),T.jsxs("div",{className:"mt-3 flex items-center justify-between text-[10px] text-slate-600",children:[T.jsx("span",{children:"Version 2.0.0"}),T.jsx("span",{children:"Inference: Local ONNX"})]})]})]})}const Fk=()=>{const[e,r]=Ye.useState(!0),[i,s]=Ye.useState("local"),[c,f]=Ye.useState("overview"),[g,b]=Ye.useState(!1),[x,N]=Ye.useState(!1),[P,B]=Ye.useState(!1),[A,W]=Ye.useState(null),[G,Q]=Ye.useState(null),[$e,M]=Ye.useState(null),[R,D]=Ye.useState(""),[H,re]=Ye.useState(null),[J,se]=Ye.useState(null),[Y,Ue]=Ye.useState([]),[Se,ut]=Ye.useState(!1);Ye.useEffect(()=>{chrome.storage.local.get(["theme","inferenceMode"],ge=>{const Ee=ge.theme!=="light";r(Ee),document.documentElement.classList.toggle("dark",Ee),(ge.inferenceMode==="api"||ge.inferenceMode==="local")&&s(ge.inferenceMode)}),Rt(),ne(),Ek().catch(()=>{}),Tk().catch(()=>{})},[]);const he=ge=>console.log(`[TruthScan] ${ge}`),Rt=async()=>{he("Checking local model availability...");try{const ge=await C_(),Ee=await Ik();re(ge),se(Ee),he(`Local AI model: ${ge?"ready":"not found"}`),he(`Local fake-news model: ${Ee?"ready":"not found"}`)}catch{re(!1),se(!1)}},Wt=()=>{const ge=!e;r(ge),document.documentElement.classList.toggle("dark",ge),chrome.storage.local.set({theme:ge?"dark":"light"})},Or=()=>{const ge=i==="local"?"api":"local";s(ge),W(null),chrome.storage.local.set({inferenceMode:ge}),he(`Switched to ${ge} mode`)},Pe=(ge,Ee,ye)=>{Ue(mt=>mt.map(Ae=>Ae.id===ge?{...Ae,status:Ee,error:ye}:Ae))},ur=()=>{const ge=i==="api";return[{id:"get-url",title:"Getting Page URL",description:"Retrieving current tab URL",status:"pending"},{id:"scrape-content",title:"Extracting Content",description:"Reading page text via content script",status:"pending"},{id:"detect-ai",title:"AI Detection",description:ge?"Gemini LLM scoring via server":"Local DistilBERT ONNX",status:"pending"},{id:"fact-check",title:"Fact-Check",description:ge?"Tavily search + LLM verification":"Local DistilBERT ONNX",status:"pending"},{id:"sentiment",title:"Sentiment Analysis",description:ge?"Gemini sentiment via server":"Skipped — no local model",status:"pending"},{id:"image-scan",title:"Image Scanning",description:ge?"AI image detection via server":"Skipped — no local model",status:"pending"},{id:"summarize",title:"Summarizing",description:ge?"Groq / Gemini summarization":"Skipped — no local model",status:"pending"},{id:"report",title:"Building Report",description:"Compiling risk assessment",status:"pending"}]},ne=async()=>{try{const[ge]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!ge.url)return;chrome.storage.local.get([`analysis_${ge.url}`],Ee=>{const ye=Ee[`analysis_${ge.url}`];ye&&(he(`Restored saved report for: ${ge.url}`),W(ye))})}catch(ge){he(`Failed to restore report: ${ge}`)}},_e=async ge=>{try{const[Ee]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!Ee.url)return;chrome.storage.local.set({[`analysis_${Ee.url}`]:ge},()=>{he(`Report saved for: ${Ee.url}`)})}catch(Ee){he(`Failed to save report: ${Ee}`)}},xe=async ge=>{var mt;try{const Ae=await chrome.tabs.sendMessage(ge,{type:"ANALYZE_PAGE"});if(Ae!=null&&Ae.success&&((mt=Ae==null?void 0:Ae.content)!=null&&mt.text)){const xt=String(Ae.content.text).trim();if(xt)return{url:Ae.content.url||"",text:xt,images:[]}}}catch{he("Content script not reachable, falling back to scripting.executeScript...")}const[Ee]=await chrome.scripting.executeScript({target:{tabId:ge},func:()=>{const Ae=["article","main",'[role="main"]',".content",".post-content",".entry-content",".article-content",".story-content"];let xt="";for(const Ot of Ae){const Qr=document.querySelector(Ot);if(Qr){xt=(Qr.innerText||Qr.textContent||"").replace(/\s+/g," ").trim();break}}return xt||(xt=(document.body.innerText||document.body.textContent||"").replace(/\s+/g," ").trim()),{url:window.location.href,text:xt.substring(0,1e4)}}}),ye=Ee==null?void 0:Ee.result;if(!(ye!=null&&ye.text))throw new Error("Could not extract page content — try refreshing the page");return he(`Fallback extraction: ${ye.text.length} chars`),{url:ye.url,text:ye.text,images:[]}},ze=async()=>{b(!0);const ge=ur();Ue(ge),he("Starting full page scan...");let Ee,ye=null,mt=null,Ae=null,xt=null,Ot=null,Qr=[],Sn=null;const Gt=[];try{try{if(Pe("get-url","loading"),Ee=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],!(Ee!=null&&Ee.url))throw new Error("No active tab URL found");Pe("get-url","completed"),he(`Scanning: ${Ee.url}`)}catch(Te){Pe("get-url","error",Te instanceof Error?Te.message:"Unknown error");return}if(Pe("scrape-content","loading"),Ee.id)try{ye=await xe(Ee.id),Pe("scrape-content","completed"),he(`Content extracted: ${ye.text.length} chars`)}catch(Te){Pe("scrape-content","error",Te instanceof Error?Te.message:"Content extraction failed"),he(`Content extraction failed: ${Te}`)}else Pe("scrape-content","error","No tab ID — cannot extract content");if(ye){Pe("detect-ai","loading");try{if(i==="local"){const Te=await kk(ye.text);mt={textPreview:Te.textPreview,aiLikelihoodPercent:Te.aiLikelihoodPercent},Pe("detect-ai","completed"),he(`Local AI score: ${Te.aiLikelihoodPercent}%`),Gt.push({id:"1",type:"ai-generated",confidence:Te.aiLikelihoodPercent,description:`Local model (DistilBERT): ${Fd(Te.aiLikelihoodPercent).toLowerCase()} likelihood of AI generation`,timestamp:new Date})}else{const Te=await sa.runAiDetection(ye.text);mt={textPreview:Te.textPreview,aiLikelihoodPercent:Te.aiLikelihoodPercent},Pe("detect-ai","completed"),he(`API AI score: ${Te.aiLikelihoodPercent}%`),Gt.push({id:"1",type:"ai-generated",confidence:Te.aiLikelihoodPercent,description:`API model (Gemini): ${Fd(Te.aiLikelihoodPercent).toLowerCase()} likelihood of AI generation`,timestamp:new Date})}}catch(Te){Pe("detect-ai","error",Te instanceof Error?Te.message:"AI detection failed"),Gt.push({id:"1",type:"ai-generated",confidence:0,description:`AI detection failed (${i} mode) — see console`,timestamp:new Date})}}else Pe("detect-ai","error","No content — cannot run AI detection"),Gt.push({id:"1",type:"ai-generated",confidence:0,description:"AI detection skipped — no content extracted",timestamp:new Date});if(ye){Pe("fact-check","loading");try{if(i==="local"){const Te=await Sk(ye.text);Ae={textPreview:Te.textPreview,fakeLikelihoodPercent:Te.fakeLikelihoodPercent},Pe("fact-check","completed"),he(`Local fake-news score: ${Te.fakeLikelihoodPercent}%`),Gt.push({id:"2",type:"fake-news",confidence:Te.fakeLikelihoodPercent,description:`Local model (DistilBERT): ${Ak(Te.fakeLikelihoodPercent).toLowerCase()} likelihood of fake news`,timestamp:new Date})}else{const Te=await sa.verifyFacts(ye.text),ei=sa.computeMisinfoScore(Te.claims);Ae={textPreview:ye.text.slice(0,200),fakeLikelihoodPercent:ei},xt=Te,Pe("fact-check","completed"),he(`API fact-check misinformation score: ${ei}%`),Gt.push({id:"2",type:"fake-news",confidence:ei,description:`API fact-check (Google Search): ${Te.claims.length} claims verified`,timestamp:new Date})}}catch(Te){Pe("fact-check","error",Te instanceof Error?Te.message:"Fake-news detection failed"),Gt.push({id:"2",type:"fake-news",confidence:0,description:`Fake-news detection failed (${i} mode) — see console`,timestamp:new Date})}}else Pe("fact-check","error","No content — cannot run fake-news detection"),Gt.push({id:"2",type:"fake-news",confidence:0,description:"Fake-news detection skipped — no content extracted",timestamp:new Date});Pe("sentiment","completed"),he("Sentiment skipped — no local model"),Pe("image-scan","completed"),he("Image scan skipped — no local model"),Pe("summarize","completed"),he("Summarization skipped — no local model"),Pe("report","loading");const gt=(mt==null?void 0:mt.aiLikelihoodPercent)??0,Et=(Ae==null?void 0:Ae.fakeLikelihoodPercent)??0;let tr="low";gt>70||Et>70?tr="high":(gt>40||Et>40)&&(tr="medium");const dr={url:(ye==null?void 0:ye.url)??Ee.url,title:Ee.title??"Unknown",aiScore:gt,fakeNewsScore:Et,overallRisk:tr,results:Gt,factCheckClaims:(xt==null?void 0:xt.claims)??[],apiData:{scrapedData:ye??{url:Ee.url,text:"",images:[]},detectionResult:mt??{textPreview:"",aiLikelihoodPercent:0},factCheckResult:xt??void 0,sentimentResult:Ot??void 0,summarizationResult:Sn??void 0,imageDetectionResults:Qr,timestamp:new Date}};W(dr),await _e(dr),Pe("report","completed"),he("Scan complete")}catch(gt){he(`Fatal scan error: ${gt}`),console.error("[TruthScan] Unexpected scan failure:",gt)}finally{b(!1)}},Ve=async()=>{var ge,Ee;if(!((Ee=(ge=A==null?void 0:A.apiData)==null?void 0:ge.scrapedData)!=null&&Ee.text)){await ze();return}if(i==="api"){N(!0);try{const ye=await sa.generateSummary(A.apiData.scrapedData.text);Q(ye),he(`Summary generated: ${ye.summary_length} chars via ${ye.model}`)}catch(ye){he(`Summarization API failed: ${ye}`),console.error("[TruthScan] Summarize error:",ye)}finally{N(!1)}}else he("Summarization skipped — no local model available")},et=async()=>{var ge,Ee;if(!(!R.trim()||!((Ee=(ge=A==null?void 0:A.apiData)==null?void 0:ge.scrapedData)!=null&&Ee.text))){B(!0);try{if(i==="api"){const ye=await sa.queryContent(R.trim(),A.apiData.scrapedData.text);M(ye),he(`Q&A answered: ${ye.answer_length} chars via ${ye.model}`)}else await new Promise(ye=>setTimeout(ye,300)),M({question:R.trim(),answer:"Q&A requires an LLM — switch to API mode and ensure the Kit server is running.",model:"none",content_length:A.apiData.scrapedData.text.length,answer_length:0})}catch(ye){he(`Q&A failed: ${ye}`),M({question:R.trim(),answer:`Request failed: ${ye instanceof Error?ye.message:String(ye)}`,model:"error",content_length:A.apiData.scrapedData.text.length,answer_length:0})}finally{B(!1)}}};return T.jsxs("div",{className:qe("w-96 h-[600px] flex flex-col overflow-hidden",e?"bg-[#0a0a1a] text-slate-100":"bg-slate-100 text-slate-900 [&_.glass-panel]:bg-white [&_.glass-panel]:border-slate-200 [&_.ts-input]:bg-white [&_.ts-input]:border-slate-300 [&_.ts-input]:text-slate-900"),children:[T.jsx(Pk,{darkMode:e,serverOnline:H,fakeModelOnline:J,inferenceMode:i,onToggleTheme:Wt,onToggleMode:Or}),T.jsx(Bk,{activeTab:c,onTabChange:f}),T.jsxs("div",{className:"flex-1 overflow-y-auto p-3",children:[c==="overview"&&T.jsx(Lk,{report:A,scanInProgress:g,summarizeInProgress:x,summaryData:G,pipelineStages:Y,serverOnline:H,fakeModelOnline:J,inferenceMode:i,onScan:ze,onSummarize:Ve}),c==="analysis"&&A?T.jsx(jk,{report:A,summaryData:G,summarizeInProgress:x,imageExpanded:Se,onSummarize:Ve,onToggleImages:()=>ut(ge=>!ge)}):c==="analysis"&&T.jsxs("div",{className:"py-20 text-center",children:[T.jsx(l_,{className:"w-12 h-12 mx-auto mb-4 text-slate-800"}),T.jsx("p",{className:"text-sm text-slate-500",children:"No scan results yet."}),T.jsx("p",{className:"text-xs text-slate-700 mt-1",children:"Run a scan from the Overview tab first."})]}),c==="qa"&&T.jsx(Uk,{report:A,question:R,qaResponse:$e,answerInProgress:P,scanInProgress:g,onQuestionChange:D,onSubmit:et,onScan:ze}),c==="settings"&&T.jsx(Vk,{darkMode:e,onToggleTheme:Wt})]})]})};Ku.createRoot(document.getElementById("root")).render(T.jsx(i2.StrictMode,{children:T.jsx(Fk,{})}));

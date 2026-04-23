(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nh={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function mv(){if(K0)return Xl;K0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Xl.Fragment=n,Xl.jsx=i,Xl.jsxs=i,Xl}var Q0;function pv(){return Q0||(Q0=1,Nh.exports=mv()),Nh.exports}var r=pv(),Rh={exports:{}},ql={},Bh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function _v(){return Z0||(Z0=1,(function(t){function n(z,_e){var K=z.length;z.push(_e);e:for(;0<K;){var we=K-1>>>1,Te=z[we];if(0<c(Te,_e))z[we]=_e,z[K]=Te,K=we;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var _e=z[0],K=z.pop();if(K!==_e){z[0]=K;e:for(var we=0,Te=z.length,B=Te>>>1;we<B;){var H=2*(we+1)-1,L=z[H],oe=H+1,Le=z[oe];if(0>c(L,K))oe<Te&&0>c(Le,L)?(z[we]=Le,z[oe]=K,we=oe):(z[we]=L,z[H]=K,we=H);else if(oe<Te&&0>c(Le,K))z[we]=Le,z[oe]=K,we=oe;else break e}}return _e}function c(z,_e){var K=z.sortIndex-_e.sortIndex;return K!==0?K:z.id-_e.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,C=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function E(z){for(var _e=i(g);_e!==null;){if(_e.callback===null)a(g);else if(_e.startTime<=z)a(g),_e.sortIndex=_e.expirationTime,n(p,_e);else break;_e=i(g)}}function $(z){if(C=!1,E(z),!S)if(i(p)!==null)S=!0,W||(W=!0,G());else{var _e=i(g);_e!==null&&xe($,_e.startTime-z)}}var W=!1,P=-1,X=5,q=-1;function se(){return k?!0:!(t.unstable_now()-q<X)}function ae(){if(k=!1,W){var z=t.unstable_now();q=z;var _e=!0;try{e:{S=!1,C&&(C=!1,N(P),P=-1),w=!0;var K=b;try{t:{for(E(z),x=i(p);x!==null&&!(x.expirationTime>z&&se());){var we=x.callback;if(typeof we=="function"){x.callback=null,b=x.priorityLevel;var Te=we(x.expirationTime<=z);if(z=t.unstable_now(),typeof Te=="function"){x.callback=Te,E(z),_e=!0;break t}x===i(p)&&a(p),E(z)}else a(p);x=i(p)}if(x!==null)_e=!0;else{var B=i(g);B!==null&&xe($,B.startTime-z),_e=!1}}break e}finally{x=null,b=K,w=!1}_e=void 0}}finally{_e?G():W=!1}}}var G;if(typeof A=="function")G=function(){A(ae)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ce=ne.port2;ne.port1.onmessage=ae,G=function(){ce.postMessage(null)}}else G=function(){M(ae,0)};function xe(z,_e){P=M(function(){z(t.unstable_now())},_e)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var _e=3;break;default:_e=b}var K=b;b=_e;try{return z()}finally{b=K}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(z,_e){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=b;b=z;try{return _e()}finally{b=K}},t.unstable_scheduleCallback=function(z,_e,K){var we=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?we+K:we):K=we,z){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=K+Te,z={id:_++,callback:_e,priorityLevel:z,startTime:K,expirationTime:Te,sortIndex:-1},K>we?(z.sortIndex=K,n(g,z),i(p)===null&&z===i(g)&&(C?(N(P),P=-1):C=!0,xe($,K-we))):(z.sortIndex=Te,n(p,z),S||w||(S=!0,W||(W=!0,G()))),z},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(z){var _e=b;return function(){var K=b;b=_e;try{return z.apply(this,arguments)}finally{b=K}}}})(Lh)),Lh}var J0;function gv(){return J0||(J0=1,Bh.exports=_v()),Bh.exports}var Oh={exports:{}},cn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function yv(){if(ey)return cn;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function M(B,H,L){this.props=B,this.context=H,this.refs=k,this.updater=L||S}M.prototype.isReactComponent={},M.prototype.setState=function(B,H){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,H,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function N(){}N.prototype=M.prototype;function A(B,H,L){this.props=B,this.context=H,this.refs=k,this.updater=L||S}var E=A.prototype=new N;E.constructor=A,C(E,M.prototype),E.isPureReactComponent=!0;var $=Array.isArray;function W(){}var P={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function q(B,H,L){var oe=L.ref;return{$$typeof:t,type:B,key:H,ref:oe!==void 0?oe:null,props:L}}function se(B,H){return q(B.type,H,B.props)}function ae(B){return typeof B=="object"&&B!==null&&B.$$typeof===t}function G(B){var H={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(L){return H[L]})}var ne=/\/+/g;function ce(B,H){return typeof B=="object"&&B!==null&&B.key!=null?G(""+B.key):H.toString(36)}function xe(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(W,W):(B.status="pending",B.then(function(H){B.status==="pending"&&(B.status="fulfilled",B.value=H)},function(H){B.status==="pending"&&(B.status="rejected",B.reason=H)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,H,L,oe,Le){var Ee=typeof B;(Ee==="undefined"||Ee==="boolean")&&(B=null);var Be=!1;if(B===null)Be=!0;else switch(Ee){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(B.$$typeof){case t:case n:Be=!0;break;case _:return Be=B._init,z(Be(B._payload),H,L,oe,Le)}}if(Be)return Le=Le(B),Be=oe===""?"."+ce(B,0):oe,$(Le)?(L="",Be!=null&&(L=Be.replace(ne,"$&/")+"/"),z(Le,H,L,"",function(Wt){return Wt})):Le!=null&&(ae(Le)&&(Le=se(Le,L+(Le.key==null||B&&B.key===Le.key?"":(""+Le.key).replace(ne,"$&/")+"/")+Be)),H.push(Le)),1;Be=0;var et=oe===""?".":oe+":";if($(B))for(var Ze=0;Ze<B.length;Ze++)oe=B[Ze],Ee=et+ce(oe,Ze),Be+=z(oe,H,L,Ee,Le);else if(Ze=w(B),typeof Ze=="function")for(B=Ze.call(B),Ze=0;!(oe=B.next()).done;)oe=oe.value,Ee=et+ce(oe,Ze++),Be+=z(oe,H,L,Ee,Le);else if(Ee==="object"){if(typeof B.then=="function")return z(xe(B),H,L,oe,Le);throw H=String(B),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Be}function _e(B,H,L){if(B==null)return B;var oe=[],Le=0;return z(B,oe,"","",function(Ee){return H.call(L,Ee,Le++)}),oe}function K(B){if(B._status===-1){var H=B._result;H=H(),H.then(function(L){(B._status===0||B._status===-1)&&(B._status=1,B._result=L)},function(L){(B._status===0||B._status===-1)&&(B._status=2,B._result=L)}),B._status===-1&&(B._status=0,B._result=H)}if(B._status===1)return B._result.default;throw B._result}var we=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Te={map:_e,forEach:function(B,H,L){_e(B,function(){H.apply(this,arguments)},L)},count:function(B){var H=0;return _e(B,function(){H++}),H},toArray:function(B){return _e(B,function(H){return H})||[]},only:function(B){if(!ae(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return cn.Activity=x,cn.Children=Te,cn.Component=M,cn.Fragment=i,cn.Profiler=c,cn.PureComponent=A,cn.StrictMode=a,cn.Suspense=p,cn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,cn.__COMPILER_RUNTIME={__proto__:null,c:function(B){return P.H.useMemoCache(B)}},cn.cache=function(B){return function(){return B.apply(null,arguments)}},cn.cacheSignal=function(){return null},cn.cloneElement=function(B,H,L){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var oe=C({},B.props),Le=B.key;if(H!=null)for(Ee in H.key!==void 0&&(Le=""+H.key),H)!X.call(H,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&H.ref===void 0||(oe[Ee]=H[Ee]);var Ee=arguments.length-2;if(Ee===1)oe.children=L;else if(1<Ee){for(var Be=Array(Ee),et=0;et<Ee;et++)Be[et]=arguments[et+2];oe.children=Be}return q(B.type,Le,oe)},cn.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},cn.createElement=function(B,H,L){var oe,Le={},Ee=null;if(H!=null)for(oe in H.key!==void 0&&(Ee=""+H.key),H)X.call(H,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(Le[oe]=H[oe]);var Be=arguments.length-2;if(Be===1)Le.children=L;else if(1<Be){for(var et=Array(Be),Ze=0;Ze<Be;Ze++)et[Ze]=arguments[Ze+2];Le.children=et}if(B&&B.defaultProps)for(oe in Be=B.defaultProps,Be)Le[oe]===void 0&&(Le[oe]=Be[oe]);return q(B,Ee,Le)},cn.createRef=function(){return{current:null}},cn.forwardRef=function(B){return{$$typeof:h,render:B}},cn.isValidElement=ae,cn.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:K}},cn.memo=function(B,H){return{$$typeof:g,type:B,compare:H===void 0?null:H}},cn.startTransition=function(B){var H=P.T,L={};P.T=L;try{var oe=B(),Le=P.S;Le!==null&&Le(L,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(W,we)}catch(Ee){we(Ee)}finally{H!==null&&L.types!==null&&(H.types=L.types),P.T=H}},cn.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},cn.use=function(B){return P.H.use(B)},cn.useActionState=function(B,H,L){return P.H.useActionState(B,H,L)},cn.useCallback=function(B,H){return P.H.useCallback(B,H)},cn.useContext=function(B){return P.H.useContext(B)},cn.useDebugValue=function(){},cn.useDeferredValue=function(B,H){return P.H.useDeferredValue(B,H)},cn.useEffect=function(B,H){return P.H.useEffect(B,H)},cn.useEffectEvent=function(B){return P.H.useEffectEvent(B)},cn.useId=function(){return P.H.useId()},cn.useImperativeHandle=function(B,H,L){return P.H.useImperativeHandle(B,H,L)},cn.useInsertionEffect=function(B,H){return P.H.useInsertionEffect(B,H)},cn.useLayoutEffect=function(B,H){return P.H.useLayoutEffect(B,H)},cn.useMemo=function(B,H){return P.H.useMemo(B,H)},cn.useOptimistic=function(B,H){return P.H.useOptimistic(B,H)},cn.useReducer=function(B,H,L){return P.H.useReducer(B,H,L)},cn.useRef=function(B){return P.H.useRef(B)},cn.useState=function(B){return P.H.useState(B)},cn.useSyncExternalStore=function(B,H,L){return P.H.useSyncExternalStore(B,H,L)},cn.useTransition=function(){return P.H.useTransition()},cn.version="19.2.4",cn}var ty;function rp(){return ty||(ty=1,Oh.exports=yv()),Oh.exports}var zh={exports:{}},Ao={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function xv(){if(ny)return Ao;ny=1;var t=rp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ao.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ao.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Ao.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Ao.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Ao.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ao.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ao.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Ao.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ao.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Ao.requestFormReset=function(p){a.d.r(p)},Ao.unstable_batchedUpdates=function(p,g){return p(g)},Ao.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Ao.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ao.version="19.2.4",Ao}var sy;function wx(){if(sy)return zh.exports;sy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=xv(),zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function bv(){if(oy)return ql;oy=1;var t=gv(),n=rp(),i=wx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,l=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===l)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==l.return)o=f,l=m;else{for(var v=!1,T=f.child;T;){if(T===o){v=!0,o=f,l=m;break}if(T===l){v=!0,l=f,o=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===o){v=!0,o=m,l=f;break}if(T===l){v=!0,l=m,o=f;break}T=T.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),A=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case W:return"SuspenseList";case q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case A:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case E:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return s=e.displayName||null,s!==null?s:ce(e.type)||"Memo";case X:s=e._payload,e=e._init;try{return ce(e(s))}catch{}}return null}var xe=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},we=[],Te=-1;function B(e){return{current:e}}function H(e){0>Te||(e.current=we[Te],we[Te]=null,Te--)}function L(e,s){Te++,we[Te]=e.current,e.current=s}var oe=B(null),Le=B(null),Ee=B(null),Be=B(null);function et(e,s){switch(L(Ee,s),L(Le,e),L(oe,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?x0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=x0(s),e=b0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(oe),L(oe,e)}function Ze(){H(oe),H(Le),H(Ee)}function Wt(e){e.memoizedState!==null&&L(Be,e);var s=oe.current,o=b0(s,e.type);s!==o&&(L(Le,e),L(oe,o))}function Vt(e){Le.current===e&&(H(oe),H(Le)),Be.current===e&&(H(Be),Ul._currentValue=K)}var Mt,$t;function tn(e){if(Mt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Mt=s&&s[1]||"",$t=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+e+$t}var rn=!1;function de(e,s){if(!e||rn)return"";rn=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var Oe=function(){throw Error()};if(Object.defineProperty(Oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Oe,[])}catch(be){var pe=be}Reflect.construct(e,[],Oe)}else{try{Oe.call()}catch(be){pe=be}e.call(Oe.prototype)}}else{try{throw Error()}catch(be){pe=be}(Oe=e())&&typeof Oe.catch=="function"&&Oe.catch(function(){})}}catch(be){if(be&&pe&&typeof be.stack=="string")return[be.stack,pe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var U=v.split(`
`),ue=T.split(`
`);for(f=l=0;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ue.length&&!ue[f].includes("DetermineComponentFrameRoot");)f++;if(l===U.length||f===ue.length)for(l=U.length-1,f=ue.length-1;1<=l&&0<=f&&U[l]!==ue[f];)f--;for(;1<=l&&0<=f;l--,f--)if(U[l]!==ue[f]){if(l!==1||f!==1)do if(l--,f--,0>f||U[l]!==ue[f]){var Ce=`
`+U[l].replace(" at new "," at ");return e.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",e.displayName)),Ce}while(1<=l&&0<=f);break}}}finally{rn=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?tn(o):""}function Ye(e,s){switch(e.tag){case 26:case 27:case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return e.child!==s&&s!==null?tn("Suspense Fallback"):tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return tn("Activity");default:return""}}function ee(e){try{var s="",o=null;do s+=Ye(e,o),o=e,e=e.return;while(e);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var De=Object.prototype.hasOwnProperty,He=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,ot=t.unstable_shouldYield,ct=t.unstable_requestPaint,Qe=t.unstable_now,st=t.unstable_getCurrentPriorityLevel,ft=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,qe=t.unstable_NormalPriority,I=t.unstable_LowPriority,J=t.unstable_IdlePriority,he=t.log,ve=t.unstable_setDisableYieldValue,We=null,Xe=null;function Ne(e){if(typeof he=="function"&&ve(e),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(We,e)}catch{}}var Dt=Math.clz32?Math.clz32:mt,Ot=Math.log,Yt=Math.LN2;function mt(e){return e>>>=0,e===0?32:31-(Ot(e)/Yt|0)|0}var Pe=256,xt=262144,ln=4194304;function _n(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,s,o){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?f=_n(l):(v&=T,v!==0?f=_n(v):o||(o=T&~e,o!==0&&(f=_n(o))))):(T=l&~m,T!==0?f=_n(T):v!==0?f=_n(v):o||(o=l&~e,o!==0&&(f=_n(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Kt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Qt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(){var e=ln;return ln<<=1,(ln&62914560)===0&&(ln=4194304),e}function zn(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function pt(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,s,o,l,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var T=e.entanglements,U=e.expirationTimes,ue=e.hiddenUpdates;for(o=v&~o;0<o;){var Ce=31-Dt(o),Oe=1<<Ce;T[Ce]=0,U[Ce]=-1;var pe=ue[Ce];if(pe!==null)for(ue[Ce]=null,Ce=0;Ce<pe.length;Ce++){var be=pe[Ce];be!==null&&(be.lane&=-536870913)}o&=~Oe}l!==0&&nn(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function nn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var l=31-Dt(s);e.entangledLanes|=s,e.entanglements[l]=e.entanglements[l]|1073741824|o&261930}function Dn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var l=31-Dt(o),f=1<<l;f&s|e[l]&s&&(e[l]|=s),o&=~f}}function Jn(e,s){var o=s&-s;return o=(o&42)!==0?1:Un(o),(o&(e.suspendedLanes|s))!==0?0:o}function Un(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hs(){var e=_e.p;return e!==0?e:(e=window.event,e===void 0?32:U0(e.type))}function jn(e,s){var o=_e.p;try{return _e.p=e,s()}finally{_e.p=o}}var qn=Math.random().toString(36).slice(2),dn="__reactFiber$"+qn,es="__reactProps$"+qn,nt="__reactContainer$"+qn,Ts="__reactEvents$"+qn,vi="__reactListeners$"+qn,uo="__reactHandles$"+qn,io="__reactResources$"+qn,fo="__reactMarker$"+qn;function ao(e){delete e[dn],delete e[es],delete e[Ts],delete e[vi],delete e[uo]}function Wn(e){var s=e[dn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[nt]||o[dn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=M0(e);e!==null;){if(o=e[dn])return o;e=M0(e)}return s}e=o,o=e.parentNode}return null}function Vs(e){if(e=e[dn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Us(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Ws(e){var s=e[io];return s||(s=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function fn(e){e[fo]=!0}var Jo=new Set,Ro={};function Ys(e,s){ts(e,s),ts(e+"Capture",s)}function ts(e,s){for(Ro[e]=s,e=0;e<s.length;e++)Jo.add(s[e])}var So=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ei={},ko={};function Bo(e){return De.call(ko,e)?!0:De.call(ei,e)?!1:So.test(e)?ko[e]=!0:(ei[e]=!0,!1)}function ho(e,s,o){if(Bo(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Es(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Fs(e,s,o,l){if(l===null)e.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+l)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wi(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Li(e,s,o){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ti(e){if(!e._valueTracker){var s=wi(e)?"checked":"value";e._valueTracker=Li(e,s,""+e[s])}}function to(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),l="";return e&&(l=wi(e)?e.checked?"true":"false":e.value),e=l,e!==o?(s.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oo=/[\n"\\]/g;function Ds(e){return e.replace(Oo,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ro(e,s,o,l,f,m,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+$n(s)):e.value!==""+$n(s)&&(e.value=""+$n(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?mo(e,v,$n(s)):o!=null?mo(e,v,$n(o)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$n(T):e.removeAttribute("name")}function In(e,s,o,l,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ti(e);return}o=o!=null?""+$n(o):"",s=s!=null?""+$n(s):o,T||s===e.value||(e.value=s),e.defaultValue=s}l=l!=null?l:f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ti(e)}function mo(e,s,o){s==="number"&&Lo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Cs(e,s,o,l){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&l&&(e[o].defaultSelected=!0)}else{for(o=""+$n(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function ms(e,s,o){if(s!=null&&(s=""+$n(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+$n(o):""}function Si(e,s,o,l){if(s==null){if(l!=null){if(o!=null)throw Error(a(92));if(xe(l)){if(1<l.length)throw Error(a(93));l=l[0]}o=l}o==null&&(o=""),s=o}o=$n(s),e.defaultValue=o,l=e.textContent,l===o&&l!==""&&l!==null&&(e.value=l),ti(e)}function Xs(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var lo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zt(e,s,o){var l=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":l?e.setProperty(s,o):typeof o!="number"||o===0||lo.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Wo(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&o[f]!==l&&Zt(e,f,l)}else for(var m in s)s.hasOwnProperty(m)&&Zt(e,m,s[m])}function Ns(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Co=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(e){return Co.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Z(){}var fe=null;function ke(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Se=null,at=null;function ut(e){var s=Vs(e);if(s&&(e=s.stateNode)){var o=e[es]||null;e:switch(e=s.stateNode,s.type){case"input":if(ro(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ds(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var l=o[s];if(l!==e&&l.form===e.form){var f=l[es]||null;if(!f)throw Error(a(90));ro(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)l=o[s],l.form===e.form&&to(l)}break e;case"textarea":ms(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Cs(e,!!o.multiple,s,!1)}}}var lt=!1;function Tt(e,s,o){if(lt)return e(s,o);lt=!0;try{var l=e(s);return l}finally{if(lt=!1,(Se!==null||at!==null)&&(pu(),Se&&(s=Se,e=at,at=Se=null,ut(s),e)))for(s=0;s<e.length;s++)ut(e[s])}}function Lt(e,s){var o=e.stateNode;if(o===null)return null;var l=o[es]||null;if(l===null)return null;o=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Gn)try{var An={};Object.defineProperty(An,"passive",{get:function(){ns=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{ns=!1}var wn=null,Nn=null,Os=null;function zt(){if(Os)return Os;var e,s=Nn,o=s.length,l,f="value"in wn?wn.value:wn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(l=1;l<=v&&s[o-l]===f[m-l];l++);return Os=f.slice(e,1<l?1-l:void 0)}function Ut(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function Jt(){return!1}function Rt(e){function s(o,l,f,m,v){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(o=e[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?gn:Jt,this.isPropagationStopped=Jt,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),s}var j={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Y=Rt(j),re=x({},j,{view:0,detail:0}),me=Rt(re),Ve,Ie,Ge,dt=x({},re,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ge&&(Ge&&e.type==="mousemove"?(Ve=e.screenX-Ge.screenX,Ie=e.screenY-Ge.screenY):Ie=Ve=0,Ge=e),Ve)},movementY:function(e){return"movementY"in e?e.movementY:Ie}}),tt=Rt(dt),Et=x({},dt,{dataTransfer:0}),mn=Rt(Et),yn=x({},re,{relatedTarget:0}),Pn=Rt(yn),Mn=x({},j,{animationName:0,elapsedTime:0,pseudoElement:0}),Xt=Rt(Mn),Rn=x({},j,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),po=Rt(Rn),zs=x({},j,{data:0}),gt=Rt(zs),_o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},js={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function To(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Mo[e])?!!s[e]:!1}function Sn(){return To}var gs=x({},re,{key:function(e){if(e.key){var s=_o[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ut(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?js[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return e.type==="keypress"?Ut(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ut(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$o=Rt(gs),Yo=x({},dt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eo=Rt(Yo),Oi=x({},re,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn}),Fe=Rt(Oi),ht=x({},j,{propertyName:0,elapsedTime:0,pseudoElement:0}),St=Rt(ht),yt=x({},dt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pt=Rt(yt),qt=x({},j,{newState:0,oldState:0}),Ln=Rt(qt),Tn=[9,13,27,32],As=Gn&&"CompositionEvent"in window,ys=null;Gn&&"documentMode"in document&&(ys=document.documentMode);var zi=Gn&&"TextEvent"in window&&!ys,_a=Gn&&(!As||ys&&8<ys&&11>=ys),$i=" ",Gi=!1;function Ki(e,s){switch(e){case"keyup":return Tn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qi=!1;function Dc(e,s){switch(e){case"compositionend":return Ec(s);case"keypress":return s.which!==32?null:(Gi=!0,$i);case"textInput":return e=s.data,e===$i&&Gi?null:e;default:return null}}function Ac(e,s){if(Qi)return e==="compositionend"||!As&&Ki(e,s)?(e=zt(),Os=Nn=wn=null,Qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return _a&&s.locale!=="ko"?null:s.data;default:return null}}var Nc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hl(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Nc[e.type]:s==="textarea"}function ml(e,s,o,l){Se?at?at.push(l):at=[l]:Se=l,s=wu(s,"onChange"),0<s.length&&(o=new Y("onChange","change",null,o,l),e.push({event:o,listeners:s}))}var ga=null,ya=null;function Rc(e){h0(e,0)}function D(e){var s=Us(e);if(to(s))return e}function O(e,s){if(e==="change")return s}var F=!1;if(Gn){var V;if(Gn){var te="oninput"in document;if(!te){var ge=document.createElement("div");ge.setAttribute("oninput","return;"),te=typeof ge.oninput=="function"}V=te}else V=!1;F=V&&(!document.documentMode||9<document.documentMode)}function Ke(){ga&&(ga.detachEvent("onpropertychange",Je),ya=ga=null)}function Je(e){if(e.propertyName==="value"&&D(ya)){var s=[];ml(s,ya,e,ke(e)),Tt(Rc,s)}}function it(e,s,o){e==="focusin"?(Ke(),ga=s,ya=o,ga.attachEvent("onpropertychange",Je)):e==="focusout"&&Ke()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(ya)}function Bt(e,s){if(e==="click")return D(s)}function on(e,s){if(e==="input"||e==="change")return D(s)}function an(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var wt=typeof Object.is=="function"?Object.is:an;function _t(e,s){if(wt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),l=Object.keys(s);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!De.call(s,f)||!wt(e[f],s[f]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bs(e,s){var o=xs(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=s&&l>=s)return{node:o,offset:s-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xs(o)}}function vs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?vs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Bn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Lo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Lo(e.document)}return s}function Xn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Gt=Gn&&"documentMode"in document&&11>=document.documentMode,en=null,ws=null,On=null,no=!1;function Do(e,s,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;no||en==null||en!==Lo(l)||(l=en,"selectionStart"in l&&Xn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),On&&_t(On,l)||(On=l,l=wu(ws,"onSelect"),0<l.length&&(s=new Y("onSelect","select",null,s,o),e.push({event:s,listeners:l}),s.target=en)))}function cs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var ci={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},ki={},Ci={};Gn&&(Ci=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function ss(e){if(ki[e])return ki[e];if(!ci[e])return e;var s=ci[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ci)return ki[e]=s[o];return e}var ji=ss("animationend"),Ii=ss("animationiteration"),Bc=ss("animationstart"),Hd=ss("transitionrun"),Vd=ss("transitionstart"),Ud=ss("transitioncancel"),Fp=ss("transitionend"),Xp=new Map,Wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wd.push("scrollEnd");function Mi(e,s){Xp.set(e,s),Ys(s,[e])}var Lc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],xr=0,Yd=0;function Oc(){for(var e=xr,s=Yd=xr=0;s<e;){var o=ui[s];ui[s++]=null;var l=ui[s];ui[s++]=null;var f=ui[s];ui[s++]=null;var m=ui[s];if(ui[s++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}m!==0&&qp(o,f,m)}}function zc(e,s,o,l){ui[xr++]=e,ui[xr++]=s,ui[xr++]=o,ui[xr++]=l,Yd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Fd(e,s,o,l){return zc(e,s,o,l),$c(e)}function Ga(e,s){return zc(e,null,null,s),$c(e)}function qp(e,s,o){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-Dt(o),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[s]:l.push(s),s.lane=o|536870912),m):null}function $c(e){if(50<Ol)throw Ol=0,nh=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var br={};function Q5(e,s,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,s,o,l){return new Q5(e,s,o,l)}function Xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,s){var o=e.alternate;return o===null?(o=ni(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Gp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Ic(e,s,o,l,f,m){var v=0;if(l=e,typeof e=="function")Xd(e)&&(v=1);else if(typeof e=="string")v=nv(e,o,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case q:return e=ni(31,o,s,f),e.elementType=q,e.lanes=m,e;case C:return Ka(o.children,f,m,s);case k:v=8,f|=24;break;case M:return e=ni(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case $:return e=ni(13,o,s,f),e.elementType=$,e.lanes=m,e;case W:return e=ni(19,o,s,f),e.elementType=W,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:v=10;break e;case N:v=9;break e;case E:v=11;break e;case P:v=14;break e;case X:v=16,l=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),l=null}return s=ni(v,o,s,f),s.elementType=e,s.type=l,s.lanes=m,s}function Ka(e,s,o,l){return e=ni(7,e,l,s),e.lanes=o,e}function qd(e,s,o){return e=ni(6,e,null,s),e.lanes=o,e}function Kp(e){var s=ni(18,null,null,0);return s.stateNode=e,s}function Gd(e,s,o){return s=ni(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var Qp=new WeakMap;function di(e,s){if(typeof e=="object"&&e!==null){var o=Qp.get(e);return o!==void 0?o:(s={value:e,source:s,stack:ee(s)},Qp.set(e,s),s)}return{value:e,source:s,stack:ee(s)}}var vr=[],wr=0,Pc=null,pl=0,fi=[],hi=0,xa=null,Pi=1,Hi="";function Ji(e,s){vr[wr++]=pl,vr[wr++]=Pc,Pc=e,pl=s}function Zp(e,s,o){fi[hi++]=Pi,fi[hi++]=Hi,fi[hi++]=xa,xa=e;var l=Pi;e=Hi;var f=32-Dt(l)-1;l&=~(1<<f),o+=1;var m=32-Dt(s)+f;if(30<m){var v=f-f%5;m=(l&(1<<v)-1).toString(32),l>>=v,f-=v,Pi=1<<32-Dt(s)+f|o<<f|l,Hi=m+e}else Pi=1<<m|o<<f|l,Hi=e}function Kd(e){e.return!==null&&(Ji(e,1),Zp(e,1,0))}function Qd(e){for(;e===Pc;)Pc=vr[--wr],vr[wr]=null,pl=vr[--wr],vr[wr]=null;for(;e===xa;)xa=fi[--hi],fi[hi]=null,Hi=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null}function Jp(e,s){fi[hi++]=Pi,fi[hi++]=Hi,fi[hi++]=xa,Pi=s.id,Hi=s.overflow,xa=e}var go=null,Ss=null,En=!1,ba=null,mi=!1,Zd=Error(a(519));function va(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _l(di(s,e)),Zd}function e_(e){var s=e.stateNode,o=e.type,l=e.memoizedProps;switch(s[dn]=e,s[es]=l,o){case"dialog":vn("cancel",s),vn("close",s);break;case"iframe":case"object":case"embed":vn("load",s);break;case"video":case"audio":for(o=0;o<$l.length;o++)vn($l[o],s);break;case"source":vn("error",s);break;case"img":case"image":case"link":vn("error",s),vn("load",s);break;case"details":vn("toggle",s);break;case"input":vn("invalid",s),In(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":vn("invalid",s);break;case"textarea":vn("invalid",s),Si(s,l.value,l.defaultValue,l.children)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||l.suppressHydrationWarning===!0||g0(s.textContent,o)?(l.popover!=null&&(vn("beforetoggle",s),vn("toggle",s)),l.onScroll!=null&&vn("scroll",s),l.onScrollEnd!=null&&vn("scrollend",s),l.onClick!=null&&(s.onclick=Z),s=!0):s=!1,s||va(e,!0)}function t_(e){for(go=e.return;go;)switch(go.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:go=go.return}}function Sr(e){if(e!==go)return!1;if(!En)return t_(e),En=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||gh(e.type,e.memoizedProps)),o=!o),o&&Ss&&va(e),t_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=j0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=j0(e)}else s===27?(s=Ss,La(e.type)?(e=wh,wh=null,Ss=e):Ss=s):Ss=go?_i(e.stateNode.nextSibling):null;return!0}function Qa(){Ss=go=null,En=!1}function Jd(){var e=ba;return e!==null&&(Go===null?Go=e:Go.push.apply(Go,e),ba=null),e}function _l(e){ba===null?ba=[e]:ba.push(e)}var ef=B(null),Za=null,ea=null;function wa(e,s,o){L(ef,s._currentValue),s._currentValue=o}function ta(e){e._currentValue=ef.current,H(ef)}function tf(e,s,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),e===o)break;e=e.return}}function nf(e,s,o,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var U=0;U<s.length;U++)if(T.context===s[U]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),tf(m.return,o,e),l||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),tf(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function kr(e,s,o,l){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var T=f.type;wt(f.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(f===Be.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Ul):e=[Ul])}f=f.return}e!==null&&nf(s,e,o,l),s.flags|=262144}function Hc(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Za=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yo(e){return n_(Za,e)}function Vc(e,s){return Za===null&&Ja(e),n_(e,s)}function n_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ea===null){if(e===null)throw Error(a(308));ea=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ea=ea.next=s;return o}var Z5=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,l){e.push(l)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},J5=t.unstable_scheduleCallback,e2=t.unstable_NormalPriority,qs={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new Z5,data:new Map,refCount:0}}function gl(e){e.refCount--,e.refCount===0&&J5(e2,function(){e.controller.abort()})}var yl=null,of=0,Cr=0,jr=null;function t2(e,s){if(yl===null){var o=yl=[];of=0,Cr=lh(),jr={status:"pending",value:void 0,then:function(l){o.push(l)}}}return of++,s.then(s_,s_),s}function s_(){if(--of===0&&yl!==null){jr!==null&&(jr.status="fulfilled");var e=yl;yl=null,Cr=0,jr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function n2(e,s){var o=[],l={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),l}var o_=z.S;z.S=function(e,s){Hg=Qe(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&t2(e,s),o_!==null&&o_(e,s)};var er=B(null);function af(){var e=er.current;return e!==null?e:us.pooledCache}function Uc(e,s){s===null?L(er,er.current):L(er,s.pool)}function i_(){var e=af();return e===null?null:{parent:qs._currentValue,pool:e}}var Mr=Error(a(460)),rf=Error(a(474)),Wc=Error(a(542)),Yc={then:function(){}};function a_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function r_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Z,Z),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,c_(e),e;default:if(typeof s.status=="string")s.then(Z,Z);else{if(e=us,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,c_(e),e}throw nr=s,Mr}}function tr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(nr=o,Mr):o}}var nr=null;function l_(){if(nr===null)throw Error(a(459));var e=nr;return nr=null,e}function c_(e){if(e===Mr||e===Wc)throw Error(a(483))}var Tr=null,xl=0;function Fc(e){var s=xl;return xl+=1,Tr===null&&(Tr=[]),r_(Tr,e,s)}function bl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Xc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function u_(e){function s(ie,Q){if(e){var le=ie.deletions;le===null?(ie.deletions=[Q],ie.flags|=16):le.push(Q)}}function o(ie,Q){if(!e)return null;for(;Q!==null;)s(ie,Q),Q=Q.sibling;return null}function l(ie){for(var Q=new Map;ie!==null;)ie.key!==null?Q.set(ie.key,ie):Q.set(ie.index,ie),ie=ie.sibling;return Q}function f(ie,Q){return ie=Zi(ie,Q),ie.index=0,ie.sibling=null,ie}function m(ie,Q,le){return ie.index=le,e?(le=ie.alternate,le!==null?(le=le.index,le<Q?(ie.flags|=67108866,Q):le):(ie.flags|=67108866,Q)):(ie.flags|=1048576,Q)}function v(ie){return e&&ie.alternate===null&&(ie.flags|=67108866),ie}function T(ie,Q,le,Re){return Q===null||Q.tag!==6?(Q=qd(le,ie.mode,Re),Q.return=ie,Q):(Q=f(Q,le),Q.return=ie,Q)}function U(ie,Q,le,Re){var It=le.type;return It===C?Ce(ie,Q,le.props.children,Re,le.key):Q!==null&&(Q.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===X&&tr(It)===Q.type)?(Q=f(Q,le.props),bl(Q,le),Q.return=ie,Q):(Q=Ic(le.type,le.key,le.props,null,ie.mode,Re),bl(Q,le),Q.return=ie,Q)}function ue(ie,Q,le,Re){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==le.containerInfo||Q.stateNode.implementation!==le.implementation?(Q=Gd(le,ie.mode,Re),Q.return=ie,Q):(Q=f(Q,le.children||[]),Q.return=ie,Q)}function Ce(ie,Q,le,Re,It){return Q===null||Q.tag!==7?(Q=Ka(le,ie.mode,Re,It),Q.return=ie,Q):(Q=f(Q,le),Q.return=ie,Q)}function Oe(ie,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=qd(""+Q,ie.mode,le),Q.return=ie,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return le=Ic(Q.type,Q.key,Q.props,null,ie.mode,le),bl(le,Q),le.return=ie,le;case S:return Q=Gd(Q,ie.mode,le),Q.return=ie,Q;case X:return Q=tr(Q),Oe(ie,Q,le)}if(xe(Q)||G(Q))return Q=Ka(Q,ie.mode,le,null),Q.return=ie,Q;if(typeof Q.then=="function")return Oe(ie,Fc(Q),le);if(Q.$$typeof===A)return Oe(ie,Vc(ie,Q),le);Xc(ie,Q)}return null}function pe(ie,Q,le,Re){var It=Q!==null?Q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return It!==null?null:T(ie,Q,""+le,Re);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case w:return le.key===It?U(ie,Q,le,Re):null;case S:return le.key===It?ue(ie,Q,le,Re):null;case X:return le=tr(le),pe(ie,Q,le,Re)}if(xe(le)||G(le))return It!==null?null:Ce(ie,Q,le,Re,null);if(typeof le.then=="function")return pe(ie,Q,Fc(le),Re);if(le.$$typeof===A)return pe(ie,Q,Vc(ie,le),Re);Xc(ie,le)}return null}function be(ie,Q,le,Re,It){if(typeof Re=="string"&&Re!==""||typeof Re=="number"||typeof Re=="bigint")return ie=ie.get(le)||null,T(Q,ie,""+Re,It);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case w:return ie=ie.get(Re.key===null?le:Re.key)||null,U(Q,ie,Re,It);case S:return ie=ie.get(Re.key===null?le:Re.key)||null,ue(Q,ie,Re,It);case X:return Re=tr(Re),be(ie,Q,le,Re,It)}if(xe(Re)||G(Re))return ie=ie.get(le)||null,Ce(Q,ie,Re,It,null);if(typeof Re.then=="function")return be(ie,Q,le,Fc(Re),It);if(Re.$$typeof===A)return be(ie,Q,le,Vc(Q,Re),It);Xc(Q,Re)}return null}function Ct(ie,Q,le,Re){for(var It=null,Hn=null,At=Q,pn=Q=0,Cn=null;At!==null&&pn<le.length;pn++){At.index>pn?(Cn=At,At=null):Cn=At.sibling;var Vn=pe(ie,At,le[pn],Re);if(Vn===null){At===null&&(At=Cn);break}e&&At&&Vn.alternate===null&&s(ie,At),Q=m(Vn,Q,pn),Hn===null?It=Vn:Hn.sibling=Vn,Hn=Vn,At=Cn}if(pn===le.length)return o(ie,At),En&&Ji(ie,pn),It;if(At===null){for(;pn<le.length;pn++)At=Oe(ie,le[pn],Re),At!==null&&(Q=m(At,Q,pn),Hn===null?It=At:Hn.sibling=At,Hn=At);return En&&Ji(ie,pn),It}for(At=l(At);pn<le.length;pn++)Cn=be(At,ie,pn,le[pn],Re),Cn!==null&&(e&&Cn.alternate!==null&&At.delete(Cn.key===null?pn:Cn.key),Q=m(Cn,Q,pn),Hn===null?It=Cn:Hn.sibling=Cn,Hn=Cn);return e&&At.forEach(function(Pa){return s(ie,Pa)}),En&&Ji(ie,pn),It}function Ft(ie,Q,le,Re){if(le==null)throw Error(a(151));for(var It=null,Hn=null,At=Q,pn=Q=0,Cn=null,Vn=le.next();At!==null&&!Vn.done;pn++,Vn=le.next()){At.index>pn?(Cn=At,At=null):Cn=At.sibling;var Pa=pe(ie,At,Vn.value,Re);if(Pa===null){At===null&&(At=Cn);break}e&&At&&Pa.alternate===null&&s(ie,At),Q=m(Pa,Q,pn),Hn===null?It=Pa:Hn.sibling=Pa,Hn=Pa,At=Cn}if(Vn.done)return o(ie,At),En&&Ji(ie,pn),It;if(At===null){for(;!Vn.done;pn++,Vn=le.next())Vn=Oe(ie,Vn.value,Re),Vn!==null&&(Q=m(Vn,Q,pn),Hn===null?It=Vn:Hn.sibling=Vn,Hn=Vn);return En&&Ji(ie,pn),It}for(At=l(At);!Vn.done;pn++,Vn=le.next())Vn=be(At,ie,pn,Vn.value,Re),Vn!==null&&(e&&Vn.alternate!==null&&At.delete(Vn.key===null?pn:Vn.key),Q=m(Vn,Q,pn),Hn===null?It=Vn:Hn.sibling=Vn,Hn=Vn);return e&&At.forEach(function(hv){return s(ie,hv)}),En&&Ji(ie,pn),It}function as(ie,Q,le,Re){if(typeof le=="object"&&le!==null&&le.type===C&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case w:e:{for(var It=le.key;Q!==null;){if(Q.key===It){if(It=le.type,It===C){if(Q.tag===7){o(ie,Q.sibling),Re=f(Q,le.props.children),Re.return=ie,ie=Re;break e}}else if(Q.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===X&&tr(It)===Q.type){o(ie,Q.sibling),Re=f(Q,le.props),bl(Re,le),Re.return=ie,ie=Re;break e}o(ie,Q);break}else s(ie,Q);Q=Q.sibling}le.type===C?(Re=Ka(le.props.children,ie.mode,Re,le.key),Re.return=ie,ie=Re):(Re=Ic(le.type,le.key,le.props,null,ie.mode,Re),bl(Re,le),Re.return=ie,ie=Re)}return v(ie);case S:e:{for(It=le.key;Q!==null;){if(Q.key===It)if(Q.tag===4&&Q.stateNode.containerInfo===le.containerInfo&&Q.stateNode.implementation===le.implementation){o(ie,Q.sibling),Re=f(Q,le.children||[]),Re.return=ie,ie=Re;break e}else{o(ie,Q);break}else s(ie,Q);Q=Q.sibling}Re=Gd(le,ie.mode,Re),Re.return=ie,ie=Re}return v(ie);case X:return le=tr(le),as(ie,Q,le,Re)}if(xe(le))return Ct(ie,Q,le,Re);if(G(le)){if(It=G(le),typeof It!="function")throw Error(a(150));return le=It.call(le),Ft(ie,Q,le,Re)}if(typeof le.then=="function")return as(ie,Q,Fc(le),Re);if(le.$$typeof===A)return as(ie,Q,Vc(ie,le),Re);Xc(ie,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,Q!==null&&Q.tag===6?(o(ie,Q.sibling),Re=f(Q,le),Re.return=ie,ie=Re):(o(ie,Q),Re=qd(le,ie.mode,Re),Re.return=ie,ie=Re),v(ie)):o(ie,Q)}return function(ie,Q,le,Re){try{xl=0;var It=as(ie,Q,le,Re);return Tr=null,It}catch(At){if(At===Mr||At===Wc)throw At;var Hn=ni(29,At,null,ie.mode);return Hn.lanes=Re,Hn.return=ie,Hn}finally{}}}var sr=u_(!0),d_=u_(!1),Sa=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,s,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Yn&2)!==0){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=$c(e),qp(e,null,o),s}return zc(e,l,s,o),$c(e)}function vl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var l=s.lanes;l&=e.pendingLanes,o|=l,s.lanes=o,Dn(e,o)}}function uf(e,s){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var df=!1;function wl(){if(df){var e=jr;if(e!==null)throw e}}function Sl(e,s,o,l){df=!1;var f=e.updateQueue;Sa=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var U=T,ue=U.next;U.next=null,v===null?m=ue:v.next=ue,v=U;var Ce=e.alternate;Ce!==null&&(Ce=Ce.updateQueue,T=Ce.lastBaseUpdate,T!==v&&(T===null?Ce.firstBaseUpdate=ue:T.next=ue,Ce.lastBaseUpdate=U))}if(m!==null){var Oe=f.baseState;v=0,Ce=ue=U=null,T=m;do{var pe=T.lane&-536870913,be=pe!==T.lane;if(be?(kn&pe)===pe:(l&pe)===pe){pe!==0&&pe===Cr&&(df=!0),Ce!==null&&(Ce=Ce.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ct=e,Ft=T;pe=s;var as=o;switch(Ft.tag){case 1:if(Ct=Ft.payload,typeof Ct=="function"){Oe=Ct.call(as,Oe,pe);break e}Oe=Ct;break e;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Ft.payload,pe=typeof Ct=="function"?Ct.call(as,Oe,pe):Ct,pe==null)break e;Oe=x({},Oe,pe);break e;case 2:Sa=!0}}pe=T.callback,pe!==null&&(e.flags|=64,be&&(e.flags|=8192),be=f.callbacks,be===null?f.callbacks=[pe]:be.push(pe))}else be={lane:pe,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Ce===null?(ue=Ce=be,U=Oe):Ce=Ce.next=be,v|=pe;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;be=T,T=be.next,be.next=null,f.lastBaseUpdate=be,f.shared.pending=null}}while(!0);Ce===null&&(U=Oe),f.baseState=U,f.firstBaseUpdate=ue,f.lastBaseUpdate=Ce,m===null&&(f.shared.lanes=0),Da|=v,e.lanes=v,e.memoizedState=Oe}}function f_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function h_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)f_(o[e],s)}var Er=B(null),qc=B(0);function m_(e,s){e=ua,L(qc,e),L(Er,s),ua=e|s.baseLanes}function ff(){L(qc,ua),L(Er,Er.current)}function hf(){ua=qc.current,H(Er),H(qc)}var si=B(null),pi=null;function ja(e){var s=e.alternate;L($s,$s.current&1),L(si,e),pi===null&&(s===null||Er.current!==null||s.memoizedState!==null)&&(pi=e)}function mf(e){L($s,$s.current),L(si,e),pi===null&&(pi=e)}function p_(e){e.tag===22?(L($s,$s.current),L(si,e),pi===null&&(pi=e)):Ma()}function Ma(){L($s,$s.current),L(si,si.current)}function oi(e){H(si),pi===e&&(pi=null),H($s)}var $s=B(0);function Gc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||bh(o)||vh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var na=0,hn=null,os=null,Gs=null,Kc=!1,Dr=!1,or=!1,Qc=0,kl=0,Ar=null,s2=0;function Rs(){throw Error(a(321))}function pf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!wt(e[o],s[o]))return!1;return!0}function _f(e,s,o,l,f,m){return na=m,hn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?Z_:Af,or=!1,m=o(l,f),or=!1,Dr&&(m=g_(s,o,l,f)),__(e),m}function __(e){z.H=Ml;var s=os!==null&&os.next!==null;if(na=0,Gs=os=hn=null,Kc=!1,kl=0,Ar=null,s)throw Error(a(300));e===null||Ks||(e=e.dependencies,e!==null&&Hc(e)&&(Ks=!0))}function g_(e,s,o,l){hn=e;var f=0;do{if(Dr&&(Ar=null),kl=0,Dr=!1,25<=f)throw Error(a(301));if(f+=1,Gs=os=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=J_,m=s(o,l)}while(Dr);return m}function o2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Cl(s):s,e=e.useState()[0],(os!==null?os.memoizedState:null)!==e&&(hn.flags|=1024),s}function gf(){var e=Qc!==0;return Qc=0,e}function yf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function xf(e){if(Kc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Kc=!1}na=0,Gs=os=hn=null,Dr=!1,kl=Qc=0,Ar=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gs===null?hn.memoizedState=Gs=e:Gs=Gs.next=e,Gs}function Is(){if(os===null){var e=hn.alternate;e=e!==null?e.memoizedState:null}else e=os.next;var s=Gs===null?hn.memoizedState:Gs.next;if(s!==null)Gs=s,os=e;else{if(e===null)throw hn.alternate===null?Error(a(467)):Error(a(310));os=e,e={memoizedState:os.memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},Gs===null?hn.memoizedState=Gs=e:Gs=Gs.next=e}return Gs}function Zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(e){var s=kl;return kl+=1,Ar===null&&(Ar=[]),e=r_(Ar,e,s),s=hn,(Gs===null?s.memoizedState:Gs.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?Z_:Af),e}function Jc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===A)return yo(e)}throw Error(a(438,String(e)))}function bf(e){var s=null,o=hn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var l=hn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Zc(),hn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),l=0;l<e;l++)o[l]=se;return s.index++,o}function sa(e,s){return typeof s=="function"?s(e):s}function eu(e){var s=Is();return vf(s,os,e)}function vf(e,s,o){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=o;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var T=v=null,U=null,ue=s,Ce=!1;do{var Oe=ue.lane&-536870913;if(Oe!==ue.lane?(kn&Oe)===Oe:(na&Oe)===Oe){var pe=ue.revertLane;if(pe===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),Oe===Cr&&(Ce=!0);else if((na&pe)===pe){ue=ue.next,pe===Cr&&(Ce=!0);continue}else Oe={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},U===null?(T=U=Oe,v=m):U=U.next=Oe,hn.lanes|=pe,Da|=pe;Oe=ue.action,or&&o(m,Oe),m=ue.hasEagerState?ue.eagerState:o(m,Oe)}else pe={lane:Oe,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},U===null?(T=U=pe,v=m):U=U.next=pe,hn.lanes|=Oe,Da|=Oe;ue=ue.next}while(ue!==null&&ue!==s);if(U===null?v=m:U.next=T,!wt(m,e.memoizedState)&&(Ks=!0,Ce&&(o=jr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=U,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function wf(e){var s=Is(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var l=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);wt(m,s.memoizedState)||(Ks=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,l]}function y_(e,s,o){var l=hn,f=Is(),m=En;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!wt((os||f).memoizedState,o);if(v&&(f.memoizedState=o,Ks=!0),f=f.queue,Cf(v_.bind(null,l,f,e),[e]),f.getSnapshot!==s||v||Gs!==null&&Gs.memoizedState.tag&1){if(l.flags|=2048,Nr(9,{destroy:void 0},b_.bind(null,l,f,o,s),null),us===null)throw Error(a(349));m||(na&127)!==0||x_(l,s,o)}return o}function x_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=hn.updateQueue,s===null?(s=Zc(),hn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function b_(e,s,o,l){s.value=o,s.getSnapshot=l,w_(s)&&S_(e)}function v_(e,s,o){return o(function(){w_(s)&&S_(e)})}function w_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!wt(e,o)}catch{return!0}}function S_(e){var s=Ga(e,2);s!==null&&Ko(s,e,2)}function Sf(e){var s=Io();if(typeof e=="function"){var o=e;if(e=o(),or){Ne(!0);try{o()}finally{Ne(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},s}function k_(e,s,o,l){return e.baseState=o,vf(e,os,typeof l=="function"?l:sa)}function i2(e,s,o,l,f){if(su(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,l(m),o=s.pending,o===null?(m.next=s.pending=m,C_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function C_(e,s){var o=s.action,l=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var T=o(f,l),U=z.S;U!==null&&U(v,T),j_(e,s,T)}catch(ue){kf(e,s,ue)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,l),j_(e,s,m)}catch(ue){kf(e,s,ue)}}function j_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){M_(e,s,l)},function(l){return kf(e,s,l)}):M_(e,s,o)}function M_(e,s,o){s.status="fulfilled",s.value=o,T_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,C_(e,o)))}function kf(e,s,o){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=o,T_(s),s=s.next;while(s!==l)}e.action=null}function T_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function E_(e,s){return s}function D_(e,s){if(En){var o=us.formState;if(o!==null){e:{var l=hn;if(En){if(Ss){t:{for(var f=Ss,m=mi;f.nodeType!==8;){if(!m){f=null;break t}if(f=_i(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ss=_i(f.nextSibling),l=f.data==="F!";break e}}va(l)}l=!1}l&&(s=o[0])}}return o=Io(),o.memoizedState=o.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E_,lastRenderedState:s},o.queue=l,o=G_.bind(null,hn,l),l.dispatch=o,l=Sf(!1),m=Df.bind(null,hn,!1,l.queue),l=Io(),f={state:s,dispatch:null,action:e,pending:null},l.queue=f,o=i2.bind(null,hn,f,m,o),f.dispatch=o,l.memoizedState=e,[s,o,!1]}function A_(e){var s=Is();return N_(s,os,e)}function N_(e,s,o){if(s=vf(e,s,E_)[0],e=eu(sa)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=Cl(s)}catch(v){throw v===Mr?Wc:v}else l=s;s=Is();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(hn.flags|=2048,Nr(9,{destroy:void 0},a2.bind(null,f,o),null)),[l,m,e]}function a2(e,s){e.action=s}function R_(e){var s=Is(),o=os;if(o!==null)return N_(s,o,e);Is(),s=s.memoizedState,o=Is();var l=o.queue.dispatch;return o.memoizedState=e,[s,l,!1]}function Nr(e,s,o,l){return e={tag:e,create:o,deps:l,inst:s,next:null},s=hn.updateQueue,s===null&&(s=Zc(),hn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,s.lastEffect=e),e}function B_(){return Is().memoizedState}function tu(e,s,o,l){var f=Io();hn.flags|=e,f.memoizedState=Nr(1|s,{destroy:void 0},o,l===void 0?null:l)}function nu(e,s,o,l){var f=Is();l=l===void 0?null:l;var m=f.memoizedState.inst;os!==null&&l!==null&&pf(l,os.memoizedState.deps)?f.memoizedState=Nr(s,m,o,l):(hn.flags|=e,f.memoizedState=Nr(1|s,m,o,l))}function L_(e,s){tu(8390656,8,e,s)}function Cf(e,s){nu(2048,8,e,s)}function r2(e){hn.flags|=4;var s=hn.updateQueue;if(s===null)s=Zc(),hn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function O_(e){var s=Is().memoizedState;return r2({ref:s,nextImpl:e}),function(){if((Yn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function z_(e,s){return nu(4,2,e,s)}function $_(e,s){return nu(4,4,e,s)}function I_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function P_(e,s,o){o=o!=null?o.concat([e]):null,nu(4,4,I_.bind(null,s,e),o)}function jf(){}function H_(e,s){var o=Is();s=s===void 0?null:s;var l=o.memoizedState;return s!==null&&pf(s,l[1])?l[0]:(o.memoizedState=[e,s],e)}function V_(e,s){var o=Is();s=s===void 0?null:s;var l=o.memoizedState;if(s!==null&&pf(s,l[1]))return l[0];if(l=e(),or){Ne(!0);try{e()}finally{Ne(!1)}}return o.memoizedState=[l,s],l}function Mf(e,s,o){return o===void 0||(na&1073741824)!==0&&(kn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Ug(),hn.lanes|=e,Da|=e,o)}function U_(e,s,o,l){return wt(o,s)?o:Er.current!==null?(e=Mf(e,o,l),wt(e,s)||(Ks=!0),e):(na&42)===0||(na&1073741824)!==0&&(kn&261930)===0?(Ks=!0,e.memoizedState=o):(e=Ug(),hn.lanes|=e,Da|=e,s)}function W_(e,s,o,l,f){var m=_e.p;_e.p=m!==0&&8>m?m:8;var v=z.T,T={};z.T=T,Df(e,!1,s,o);try{var U=f(),ue=z.S;if(ue!==null&&ue(T,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var Ce=n2(U,l);jl(e,s,Ce,ri(e))}else jl(e,s,l,ri(e))}catch(Oe){jl(e,s,{then:function(){},status:"rejected",reason:Oe},ri())}finally{_e.p=m,v!==null&&T.types!==null&&(v.types=T.types),z.T=v}}function l2(){}function Tf(e,s,o,l){if(e.tag!==5)throw Error(a(476));var f=Y_(e).queue;W_(e,f,s,K,o===null?l2:function(){return F_(e),o(l)})}function Y_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:K},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function F_(e){var s=Y_(e);s.next===null&&(s=e.alternate.memoizedState),jl(e,s.next.queue,{},ri())}function Ef(){return yo(Ul)}function X_(){return Is().memoizedState}function q_(){return Is().memoizedState}function c2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=ri();e=ka(o);var l=Ca(s,e,o);l!==null&&(Ko(l,s,o),vl(l,s,o)),s={cache:sf()},e.payload=s;return}s=s.return}}function u2(e,s,o){var l=ri();o={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},su(e)?K_(s,o):(o=Fd(e,s,o,l),o!==null&&(Ko(o,e,l),Q_(o,s,l)))}function G_(e,s,o){var l=ri();jl(e,s,o,l)}function jl(e,s,o,l){var f={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(su(e))K_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,T=m(v,o);if(f.hasEagerState=!0,f.eagerState=T,wt(T,v))return zc(e,s,f,0),us===null&&Oc(),!1}catch{}finally{}if(o=Fd(e,s,f,l),o!==null)return Ko(o,e,l),Q_(o,s,l),!0}return!1}function Df(e,s,o,l){if(l={lane:2,revertLane:lh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},su(e)){if(s)throw Error(a(479))}else s=Fd(e,o,l,2),s!==null&&Ko(s,e,2)}function su(e){var s=e.alternate;return e===hn||s!==null&&s===hn}function K_(e,s){Dr=Kc=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function Q_(e,s,o){if((o&4194048)!==0){var l=s.lanes;l&=e.pendingLanes,o|=l,s.lanes=o,Dn(e,o)}}var Ml={readContext:yo,use:Jc,useCallback:Rs,useContext:Rs,useEffect:Rs,useImperativeHandle:Rs,useLayoutEffect:Rs,useInsertionEffect:Rs,useMemo:Rs,useReducer:Rs,useRef:Rs,useState:Rs,useDebugValue:Rs,useDeferredValue:Rs,useTransition:Rs,useSyncExternalStore:Rs,useId:Rs,useHostTransitionStatus:Rs,useFormState:Rs,useActionState:Rs,useOptimistic:Rs,useMemoCache:Rs,useCacheRefresh:Rs};Ml.useEffectEvent=Rs;var Z_={readContext:yo,use:Jc,useCallback:function(e,s){return Io().memoizedState=[e,s===void 0?null:s],e},useContext:yo,useEffect:L_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,tu(4194308,4,I_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return tu(4194308,4,e,s)},useInsertionEffect:function(e,s){tu(4,2,e,s)},useMemo:function(e,s){var o=Io();s=s===void 0?null:s;var l=e();if(or){Ne(!0);try{e()}finally{Ne(!1)}}return o.memoizedState=[l,s],l},useReducer:function(e,s,o){var l=Io();if(o!==void 0){var f=o(s);if(or){Ne(!0);try{o(s)}finally{Ne(!1)}}}else f=s;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=u2.bind(null,hn,e),[l.memoizedState,e]},useRef:function(e){var s=Io();return e={current:e},s.memoizedState=e},useState:function(e){e=Sf(e);var s=e.queue,o=G_.bind(null,hn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:jf,useDeferredValue:function(e,s){var o=Io();return Mf(o,e,s)},useTransition:function(){var e=Sf(!1);return e=W_.bind(null,hn,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var l=hn,f=Io();if(En){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),us===null)throw Error(a(349));(kn&127)!==0||x_(l,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,L_(v_.bind(null,l,m,e),[e]),l.flags|=2048,Nr(9,{destroy:void 0},b_.bind(null,l,m,o,s),null),o},useId:function(){var e=Io(),s=us.identifierPrefix;if(En){var o=Hi,l=Pi;o=(l&~(1<<32-Dt(l)-1)).toString(32)+o,s="_"+s+"R_"+o,o=Qc++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=s2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Ef,useFormState:D_,useActionState:D_,useOptimistic:function(e){var s=Io();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Df.bind(null,hn,!0,o),o.dispatch=s,[e,s]},useMemoCache:bf,useCacheRefresh:function(){return Io().memoizedState=c2.bind(null,hn)},useEffectEvent:function(e){var s=Io(),o={impl:e};return s.memoizedState=o,function(){if((Yn&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Af={readContext:yo,use:Jc,useCallback:H_,useContext:yo,useEffect:Cf,useImperativeHandle:P_,useInsertionEffect:z_,useLayoutEffect:$_,useMemo:V_,useReducer:eu,useRef:B_,useState:function(){return eu(sa)},useDebugValue:jf,useDeferredValue:function(e,s){var o=Is();return U_(o,os.memoizedState,e,s)},useTransition:function(){var e=eu(sa)[0],s=Is().memoizedState;return[typeof e=="boolean"?e:Cl(e),s]},useSyncExternalStore:y_,useId:X_,useHostTransitionStatus:Ef,useFormState:A_,useActionState:A_,useOptimistic:function(e,s){var o=Is();return k_(o,os,e,s)},useMemoCache:bf,useCacheRefresh:q_};Af.useEffectEvent=O_;var J_={readContext:yo,use:Jc,useCallback:H_,useContext:yo,useEffect:Cf,useImperativeHandle:P_,useInsertionEffect:z_,useLayoutEffect:$_,useMemo:V_,useReducer:wf,useRef:B_,useState:function(){return wf(sa)},useDebugValue:jf,useDeferredValue:function(e,s){var o=Is();return os===null?Mf(o,e,s):U_(o,os.memoizedState,e,s)},useTransition:function(){var e=wf(sa)[0],s=Is().memoizedState;return[typeof e=="boolean"?e:Cl(e),s]},useSyncExternalStore:y_,useId:X_,useHostTransitionStatus:Ef,useFormState:R_,useActionState:R_,useOptimistic:function(e,s){var o=Is();return os!==null?k_(o,os,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:bf,useCacheRefresh:q_};J_.useEffectEvent=O_;function Nf(e,s,o,l){s=e.memoizedState,o=o(l,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Rf={enqueueSetState:function(e,s,o){e=e._reactInternals;var l=ri(),f=ka(l);f.payload=s,o!=null&&(f.callback=o),s=Ca(e,f,l),s!==null&&(Ko(s,e,l),vl(s,e,l))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var l=ri(),f=ka(l);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ca(e,f,l),s!==null&&(Ko(s,e,l),vl(s,e,l))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=ri(),l=ka(o);l.tag=2,s!=null&&(l.callback=s),s=Ca(e,l,o),s!==null&&(Ko(s,e,o),vl(s,e,o))}};function eg(e,s,o,l,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,v):s.prototype&&s.prototype.isPureReactComponent?!_t(o,l)||!_t(f,m):!0}function tg(e,s,o,l){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,l),s.state!==e&&Rf.enqueueReplaceState(s,s.state,null)}function ir(e,s){var o=s;if("ref"in s){o={};for(var l in s)l!=="ref"&&(o[l]=s[l])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ng(e){Lc(e)}function sg(e){console.error(e)}function og(e){Lc(e)}function ou(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function ig(e,s,o){try{var l=e.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Bf(e,s,o){return o=ka(o),o.tag=3,o.payload={element:null},o.callback=function(){ou(e,s)},o}function ag(e){return e=ka(e),e.tag=3,e}function rg(e,s,o,l){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){ig(s,o,l)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ig(s,o,l),typeof f!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function d2(e,s,o,l,f){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=o.alternate,s!==null&&kr(s,o,f,!0),o=si.current,o!==null){switch(o.tag){case 31:case 13:return pi===null?_u():o.alternate===null&&Bs===0&&(Bs=3),o.flags&=-257,o.flags|=65536,o.lanes=f,l===Yc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([l]):s.add(l),ih(e,l,f)),!1;case 22:return o.flags|=65536,l===Yc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([l]):o.add(l)),ih(e,l,f)),!1}throw Error(a(435,o.tag))}return ih(e,l,f),_u(),!1}if(En)return s=si.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==Zd&&(e=Error(a(422),{cause:l}),_l(di(e,o)))):(l!==Zd&&(s=Error(a(423),{cause:l}),_l(di(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=di(l,o),f=Bf(e.stateNode,l,f),uf(e,f),Bs!==4&&(Bs=2)),!1;var m=Error(a(520),{cause:l});if(m=di(m,o),Ll===null?Ll=[m]:Ll.push(m),Bs!==4&&(Bs=2),s===null)return!0;l=di(l,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Bf(o.stateNode,l,e),uf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Aa===null||!Aa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ag(f),rg(f,e,o,l),uf(o,f),!1}o=o.return}while(o!==null);return!1}var Lf=Error(a(461)),Ks=!1;function xo(e,s,o,l){s.child=e===null?d_(s,null,o,l):sr(s,e.child,o,l)}function lg(e,s,o,l,f){o=o.render;var m=s.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ja(s),l=_f(e,s,o,v,m,f),T=gf(),e!==null&&!Ks?(yf(e,s,f),oa(e,s,f)):(En&&T&&Kd(s),s.flags|=1,xo(e,s,l,f),s.child)}function cg(e,s,o,l,f){if(e===null){var m=o.type;return typeof m=="function"&&!Xd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,ug(e,s,m,l,f)):(e=Ic(o.type,null,l,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Uf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:_t,o(v,l)&&e.ref===s.ref)return oa(e,s,f)}return s.flags|=1,e=Zi(m,l),e.ref=s.ref,e.return=s,s.child=e}function ug(e,s,o,l,f){if(e!==null){var m=e.memoizedProps;if(_t(m,l)&&e.ref===s.ref)if(Ks=!1,s.pendingProps=l=m,Uf(e,f))(e.flags&131072)!==0&&(Ks=!0);else return s.lanes=e.lanes,oa(e,s,f)}return Of(e,s,o,l,f)}function dg(e,s,o,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(l=s.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,s.child=null;return fg(e,s,m,o,l)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uc(s,m!==null?m.cachePool:null),m!==null?m_(s,m):ff(),p_(s);else return l=s.lanes=536870912,fg(e,s,m!==null?m.baseLanes|o:o,o,l)}else m!==null?(Uc(s,m.cachePool),m_(s,m),Ma(),s.memoizedState=null):(e!==null&&Uc(s,null),ff(),Ma());return xo(e,s,f,o),s.child}function Tl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function fg(e,s,o,l,f){var m=af();return m=m===null?null:{parent:qs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Uc(s,null),ff(),p_(s),e!==null&&kr(e,s,l,!0),s.childLanes=f,null}function iu(e,s){return s=ru({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function hg(e,s,o){return sr(s,e.child,null,o),e=iu(s,s.pendingProps),e.flags|=2,oi(s),s.memoizedState=null,e}function f2(e,s,o){var l=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(En){if(l.mode==="hidden")return e=iu(s,l),s.lanes=536870912,Tl(null,e);if(mf(s),(e=Ss)?(e=C0(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Pi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},o=Kp(e),o.return=s,s.child=o,go=s,Ss=null)):e=null,e===null)throw va(s);return s.lanes=536870912,null}return iu(s,l)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(mf(s),f)if(s.flags&256)s.flags&=-257,s=hg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Ks||kr(e,s,o,!1),f=(o&e.childLanes)!==0,Ks||f){if(l=us,l!==null&&(v=Jn(l,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ga(e,v),Ko(l,e,v),Lf;_u(),s=hg(e,s,o)}else e=m.treeContext,Ss=_i(v.nextSibling),go=s,En=!0,ba=null,mi=!1,e!==null&&Jp(s,e),s=iu(s,l),s.flags|=4096;return s}return e=Zi(e.child,{mode:l.mode,children:l.children}),e.ref=s.ref,s.child=e,e.return=s,e}function au(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Of(e,s,o,l,f){return Ja(s),o=_f(e,s,o,l,void 0,f),l=gf(),e!==null&&!Ks?(yf(e,s,f),oa(e,s,f)):(En&&l&&Kd(s),s.flags|=1,xo(e,s,o,f),s.child)}function mg(e,s,o,l,f,m){return Ja(s),s.updateQueue=null,o=g_(s,l,o,f),__(e),l=gf(),e!==null&&!Ks?(yf(e,s,m),oa(e,s,m)):(En&&l&&Kd(s),s.flags|=1,xo(e,s,o,m),s.child)}function pg(e,s,o,l,f){if(Ja(s),s.stateNode===null){var m=br,v=o.contextType;typeof v=="object"&&v!==null&&(m=yo(v)),m=new o(l,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Rf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=l,m.state=s.memoizedState,m.refs={},lf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?yo(v):br,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Nf(s,o,v,l),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Rf.enqueueReplaceState(m,m.state,null),Sl(s,l,m,f),wl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(e===null){m=s.stateNode;var T=s.memoizedProps,U=ir(o,T);m.props=U;var ue=m.context,Ce=o.contextType;v=br,typeof Ce=="object"&&Ce!==null&&(v=yo(Ce));var Oe=o.getDerivedStateFromProps;Ce=typeof Oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,Ce||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||ue!==v)&&tg(s,m,l,v),Sa=!1;var pe=s.memoizedState;m.state=pe,Sl(s,l,m,f),wl(),ue=s.memoizedState,T||pe!==ue||Sa?(typeof Oe=="function"&&(Nf(s,o,Oe,l),ue=s.memoizedState),(U=Sa||eg(s,o,U,l,pe,ue,v))?(Ce||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=ue),m.props=l,m.state=ue,m.context=v,l=U):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{m=s.stateNode,cf(e,s),v=s.memoizedProps,Ce=ir(o,v),m.props=Ce,Oe=s.pendingProps,pe=m.context,ue=o.contextType,U=br,typeof ue=="object"&&ue!==null&&(U=yo(ue)),T=o.getDerivedStateFromProps,(ue=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==Oe||pe!==U)&&tg(s,m,l,U),Sa=!1,pe=s.memoizedState,m.state=pe,Sl(s,l,m,f),wl();var be=s.memoizedState;v!==Oe||pe!==be||Sa||e!==null&&e.dependencies!==null&&Hc(e.dependencies)?(typeof T=="function"&&(Nf(s,o,T,l),be=s.memoizedState),(Ce=Sa||eg(s,o,Ce,l,pe,be,U)||e!==null&&e.dependencies!==null&&Hc(e.dependencies))?(ue||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,be,U),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,be,U)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=be),m.props=l,m.state=be,m.context=U,l=Ce):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&pe===e.memoizedState||(s.flags|=1024),l=!1)}return m=l,au(e,s),l=(s.flags&128)!==0,m||l?(m=s.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&l?(s.child=sr(s,e.child,null,f),s.child=sr(s,null,o,f)):xo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=oa(e,s,f),e}function _g(e,s,o,l){return Qa(),s.flags|=256,xo(e,s,o,l),s.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(e){return{baseLanes:e,cachePool:i_()}}function If(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=ai),e}function gg(e,s,o){var l=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:($s.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(En){if(f?ja(s):Ma(),(e=Ss)?(e=C0(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Pi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},o=Kp(e),o.return=s,s.child=o,go=s,Ss=null)):e=null,e===null)throw va(s);return vh(e)?s.lanes=32:s.lanes=536870912,null}var T=l.children;return l=l.fallback,f?(Ma(),f=s.mode,T=ru({mode:"hidden",children:T},f),l=Ka(l,f,o,null),T.return=s,l.return=s,T.sibling=l,s.child=T,l=s.child,l.memoizedState=$f(o),l.childLanes=If(e,v,o),s.memoizedState=zf,Tl(null,l)):(ja(s),Pf(s,T))}var U=e.memoizedState;if(U!==null&&(T=U.dehydrated,T!==null)){if(m)s.flags&256?(ja(s),s.flags&=-257,s=Hf(e,s,o)):s.memoizedState!==null?(Ma(),s.child=e.child,s.flags|=128,s=null):(Ma(),T=l.fallback,f=s.mode,l=ru({mode:"visible",children:l.children},f),T=Ka(T,f,o,null),T.flags|=2,l.return=s,T.return=s,l.sibling=T,s.child=l,sr(s,e.child,null,o),l=s.child,l.memoizedState=$f(o),l.childLanes=If(e,v,o),s.memoizedState=zf,s=Tl(null,l));else if(ja(s),vh(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var ue=v.dgst;v=ue,l=Error(a(419)),l.stack="",l.digest=v,_l({value:l,source:null,stack:null}),s=Hf(e,s,o)}else if(Ks||kr(e,s,o,!1),v=(o&e.childLanes)!==0,Ks||v){if(v=us,v!==null&&(l=Jn(v,o),l!==0&&l!==U.retryLane))throw U.retryLane=l,Ga(e,l),Ko(v,e,l),Lf;bh(T)||_u(),s=Hf(e,s,o)}else bh(T)?(s.flags|=192,s.child=e.child,s=null):(e=U.treeContext,Ss=_i(T.nextSibling),go=s,En=!0,ba=null,mi=!1,e!==null&&Jp(s,e),s=Pf(s,l.children),s.flags|=4096);return s}return f?(Ma(),T=l.fallback,f=s.mode,U=e.child,ue=U.sibling,l=Zi(U,{mode:"hidden",children:l.children}),l.subtreeFlags=U.subtreeFlags&65011712,ue!==null?T=Zi(ue,T):(T=Ka(T,f,o,null),T.flags|=2),T.return=s,l.return=s,l.sibling=T,s.child=l,Tl(null,l),l=s.child,T=e.child.memoizedState,T===null?T=$f(o):(f=T.cachePool,f!==null?(U=qs._currentValue,f=f.parent!==U?{parent:U,pool:U}:f):f=i_(),T={baseLanes:T.baseLanes|o,cachePool:f}),l.memoizedState=T,l.childLanes=If(e,v,o),s.memoizedState=zf,Tl(e.child,l)):(ja(s),o=e.child,e=o.sibling,o=Zi(o,{mode:"visible",children:l.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Pf(e,s){return s=ru({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function ru(e,s){return e=ni(22,e,null,s),e.lanes=0,e}function Hf(e,s,o){return sr(s,e.child,null,o),e=Pf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function yg(e,s,o){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s),tf(e.return,s,o)}function Vf(e,s,o,l,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function xg(e,s,o){var l=s.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var v=$s.current,T=(v&2)!==0;if(T?(v=v&1|2,s.flags|=128):v&=1,L($s,v),xo(e,s,l,o),l=En?pl:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,o,s);else if(e.tag===19)yg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Gc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Vf(s,!1,f,o,m,l);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Gc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Vf(s,!0,o,null,m,l);break;case"together":Vf(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function oa(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Da|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(kr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=Zi(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=Zi(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Uf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Hc(e)))}function h2(e,s,o){switch(s.tag){case 3:et(s,s.stateNode.containerInfo),wa(s,qs,e.memoizedState.cache),Qa();break;case 27:case 5:Wt(s);break;case 4:et(s,s.stateNode.containerInfo);break;case 10:wa(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,mf(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(ja(s),s.flags|=128,null):(o&s.child.childLanes)!==0?gg(e,s,o):(ja(s),e=oa(e,s,o),e!==null?e.sibling:null);ja(s);break;case 19:var f=(e.flags&128)!==0;if(l=(o&s.childLanes)!==0,l||(kr(e,s,o,!1),l=(o&s.childLanes)!==0),f){if(l)return xg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),L($s,$s.current),l)break;return null;case 22:return s.lanes=0,dg(e,s,o,s.pendingProps);case 24:wa(s,qs,e.memoizedState.cache)}return oa(e,s,o)}function bg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Ks=!0;else{if(!Uf(e,o)&&(s.flags&128)===0)return Ks=!1,h2(e,s,o);Ks=(e.flags&131072)!==0}else Ks=!1,En&&(s.flags&1048576)!==0&&Zp(s,pl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(e=tr(s.elementType),s.type=e,typeof e=="function")Xd(e)?(l=ir(e,l),s.tag=1,s=pg(null,s,e,l,o)):(s.tag=0,s=Of(null,s,e,l,o));else{if(e!=null){var f=e.$$typeof;if(f===E){s.tag=11,s=lg(null,s,e,l,o);break e}else if(f===P){s.tag=14,s=cg(null,s,e,l,o);break e}}throw s=ce(e)||e,Error(a(306,s,""))}}return s;case 0:return Of(e,s,s.type,s.pendingProps,o);case 1:return l=s.type,f=ir(l,s.pendingProps),pg(e,s,l,f,o);case 3:e:{if(et(s,s.stateNode.containerInfo),e===null)throw Error(a(387));l=s.pendingProps;var m=s.memoizedState;f=m.element,cf(e,s),Sl(s,l,null,o);var v=s.memoizedState;if(l=v.cache,wa(s,qs,l),l!==m.cache&&nf(s,[qs],o,!0),wl(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=_g(e,s,l,o);break e}else if(l!==f){f=di(Error(a(424)),s),_l(f),s=_g(e,s,l,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ss=_i(e.firstChild),go=s,En=!0,ba=null,mi=!0,o=d_(s,null,l,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Qa(),l===f){s=oa(e,s,o);break e}xo(e,s,l,o)}s=s.child}return s;case 26:return au(e,s),e===null?(o=A0(s.type,null,s.pendingProps,null))?s.memoizedState=o:En||(o=s.type,e=s.pendingProps,l=Su(Ee.current).createElement(o),l[dn]=s,l[es]=e,bo(l,o,e),fn(l),s.stateNode=l):s.memoizedState=A0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Wt(s),e===null&&En&&(l=s.stateNode=T0(s.type,s.pendingProps,Ee.current),go=s,mi=!0,f=Ss,La(s.type)?(wh=f,Ss=_i(l.firstChild)):Ss=f),xo(e,s,s.pendingProps.children,o),au(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&En&&((f=l=Ss)&&(l=U2(l,s.type,s.pendingProps,mi),l!==null?(s.stateNode=l,go=s,Ss=_i(l.firstChild),mi=!1,f=!0):f=!1),f||va(s)),Wt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,l=m.children,gh(f,m)?l=null:v!==null&&gh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=_f(e,s,o2,null,null,o),Ul._currentValue=f),au(e,s),xo(e,s,l,o),s.child;case 6:return e===null&&En&&((e=o=Ss)&&(o=W2(o,s.pendingProps,mi),o!==null?(s.stateNode=o,go=s,Ss=null,e=!0):e=!1),e||va(s)),null;case 13:return gg(e,s,o);case 4:return et(s,s.stateNode.containerInfo),l=s.pendingProps,e===null?s.child=sr(s,null,l,o):xo(e,s,l,o),s.child;case 11:return lg(e,s,s.type,s.pendingProps,o);case 7:return xo(e,s,s.pendingProps,o),s.child;case 8:return xo(e,s,s.pendingProps.children,o),s.child;case 12:return xo(e,s,s.pendingProps.children,o),s.child;case 10:return l=s.pendingProps,wa(s,s.type,l.value),xo(e,s,l.children,o),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,Ja(s),f=yo(f),l=l(f),s.flags|=1,xo(e,s,l,o),s.child;case 14:return cg(e,s,s.type,s.pendingProps,o);case 15:return ug(e,s,s.type,s.pendingProps,o);case 19:return xg(e,s,o);case 31:return f2(e,s,o);case 22:return dg(e,s,o,s.pendingProps);case 24:return Ja(s),l=yo(qs),e===null?(f=af(),f===null&&(f=us,m=sf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:l,cache:f},lf(s),wa(s,qs,f)):((e.lanes&o)!==0&&(cf(e,s),Sl(s,null,null,o),wl()),f=e.memoizedState,m=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),wa(s,qs,l)):(l=m.cache,wa(s,qs,l),l!==f.cache&&nf(s,[qs],o,!0))),xo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ia(e){e.flags|=4}function Wf(e,s,o,l,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Xg())e.flags|=8192;else throw nr=Yc,rf}else e.flags&=-16777217}function vg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!O0(s))if(Xg())e.flags|=8192;else throw nr=Yc,rf}function lu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?Nt():536870912,e.lanes|=s,Or|=s)}function El(e,s){if(!En)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ks(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=o,s}function m2(e,s,o){var l=s.pendingProps;switch(Qd(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ks(s),null;case 1:return ks(s),null;case 3:return o=s.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ta(qs),Ze(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Sr(s)?ia(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Jd())),ks(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ia(s),m!==null?(ks(s),vg(s,m)):(ks(s),Wf(s,f,null,l,o))):m?m!==e.memoizedState?(ia(s),ks(s),vg(s,m)):(ks(s),s.flags&=-16777217):(e=e.memoizedProps,e!==l&&ia(s),ks(s),Wf(s,f,e,l,o)),null;case 27:if(Vt(s),o=Ee.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&ia(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return ks(s),null}e=oe.current,Sr(s)?e_(s):(e=T0(f,l,o),s.stateNode=e,ia(s))}return ks(s),null;case 5:if(Vt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&ia(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return ks(s),null}if(m=oe.current,Sr(s))e_(s);else{var v=Su(Ee.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}m[dn]=s,m[es]=l;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(bo(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ia(s)}}return ks(s),Wf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==l&&ia(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ee.current,Sr(s)){if(e=s.stateNode,o=s.memoizedProps,l=null,f=go,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[dn]=s,e=!!(e.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||g0(e.nodeValue,o)),e||va(s,!0)}else e=Su(e).createTextNode(l),e[dn]=s,s.stateNode=e}return ks(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(l=Sr(s),o!==null){if(e===null){if(!l)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=s}else Qa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ks(s),e=!1}else o=Jd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(oi(s),s):(oi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return ks(s),null;case 13:if(l=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Sr(s),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[dn]=s}else Qa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ks(s),f=!1}else f=Jd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(oi(s),s):(oi(s),null)}return oi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=l!==null,e=e!==null&&e.memoizedState!==null,o&&(l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),lu(s,s.updateQueue),ks(s),null);case 4:return Ze(),e===null&&fh(s.stateNode.containerInfo),ks(s),null;case 10:return ta(s.type),ks(s),null;case 19:if(H($s),l=s.memoizedState,l===null)return ks(s),null;if(f=(s.flags&128)!==0,m=l.rendering,m===null)if(f)El(l,!1);else{if(Bs!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Gc(e),m!==null){for(s.flags|=128,El(l,!1),e=m.updateQueue,s.updateQueue=e,lu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Gp(o,e),o=o.sibling;return L($s,$s.current&1|2),En&&Ji(s,l.treeForkCount),s.child}e=e.sibling}l.tail!==null&&Qe()>hu&&(s.flags|=128,f=!0,El(l,!1),s.lanes=4194304)}else{if(!f)if(e=Gc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,lu(s,e),El(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!En)return ks(s),null}else 2*Qe()-l.renderingStartTime>hu&&o!==536870912&&(s.flags|=128,f=!0,El(l,!1),s.lanes=4194304);l.isBackwards?(m.sibling=s.child,s.child=m):(e=l.last,e!==null?e.sibling=m:s.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Qe(),e.sibling=null,o=$s.current,L($s,f?o&1|2:o&1),En&&Ji(s,l.treeForkCount),e):(ks(s),null);case 22:case 23:return oi(s),hf(),l=s.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(o&536870912)!==0&&(s.flags&128)===0&&(ks(s),s.subtreeFlags&6&&(s.flags|=8192)):ks(s),o=s.updateQueue,o!==null&&lu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==o&&(s.flags|=2048),e!==null&&H(er),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ta(qs),ks(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function p2(e,s){switch(Qd(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ta(qs),Ze(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Vt(s),null;case 31:if(s.memoizedState!==null){if(oi(s),s.alternate===null)throw Error(a(340));Qa()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(oi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));Qa()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return H($s),null;case 4:return Ze(),null;case 10:return ta(s.type),null;case 22:case 23:return oi(s),hf(),e!==null&&H(er),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ta(qs),null;case 25:return null;default:return null}}function wg(e,s){switch(Qd(s),s.tag){case 3:ta(qs),Ze();break;case 26:case 27:case 5:Vt(s);break;case 4:Ze();break;case 31:s.memoizedState!==null&&oi(s);break;case 13:oi(s);break;case 19:H($s);break;case 10:ta(s.type);break;case 22:case 23:oi(s),hf(),e!==null&&H(er);break;case 24:ta(qs)}}function Dl(e,s){try{var o=s.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var f=l.next;o=f;do{if((o.tag&e)===e){l=void 0;var m=o.create,v=o.inst;l=m(),v.destroy=l}o=o.next}while(o!==f)}}catch(T){Qn(s,s.return,T)}}function Ta(e,s,o){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=s;var U=o,ue=T;try{ue()}catch(Ce){Qn(f,U,Ce)}}}l=l.next}while(l!==m)}}catch(Ce){Qn(s,s.return,Ce)}}function Sg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{h_(s,o)}catch(l){Qn(e,e.return,l)}}}function kg(e,s,o){o.props=ir(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(l){Qn(e,s,l)}}function Al(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof o=="function"?e.refCleanup=o(l):o.current=l}}catch(f){Qn(e,s,f)}}function Vi(e,s){var o=e.ref,l=e.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(f){Qn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Qn(e,s,f)}else o.current=null}function Cg(e){var s=e.type,o=e.memoizedProps,l=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(f){Qn(e,e.return,f)}}function Yf(e,s,o){try{var l=e.stateNode;z2(l,e.type,o,s),l[es]=s}catch(f){Qn(e,e.return,f)}}function jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,s,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Z));else if(l!==4&&(l===27&&La(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Xf(e,s,o),e=e.sibling;e!==null;)Xf(e,s,o),e=e.sibling}function cu(e,s,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(l!==4&&(l===27&&La(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(cu(e,s,o),e=e.sibling;e!==null;)cu(e,s,o),e=e.sibling}function Mg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var l=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);bo(s,l,o),s[dn]=e,s[es]=o}catch(m){Qn(e,e.return,m)}}var aa=!1,Qs=!1,qf=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,co=null;function _2(e,s){if(e=e.containerInfo,ph=Du,e=Bn(e),Xn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,T=-1,U=-1,ue=0,Ce=0,Oe=e,pe=null;t:for(;;){for(var be;Oe!==o||f!==0&&Oe.nodeType!==3||(T=v+f),Oe!==m||l!==0&&Oe.nodeType!==3||(U=v+l),Oe.nodeType===3&&(v+=Oe.nodeValue.length),(be=Oe.firstChild)!==null;)pe=Oe,Oe=be;for(;;){if(Oe===e)break t;if(pe===o&&++ue===f&&(T=v),pe===m&&++Ce===l&&(U=v),(be=Oe.nextSibling)!==null)break;Oe=pe,pe=Oe.parentNode}Oe=be}o=T===-1||U===-1?null:{start:T,end:U}}else o=null}o=o||{start:0,end:0}}else o=null;for(_h={focusedElem:e,selectionRange:o},Du=!1,co=s;co!==null;)if(s=co,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,co=e;else for(;co!==null;){switch(s=co,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var Ct=ir(o.type,f);e=l.getSnapshotBeforeUpdate(Ct,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Ft){Qn(o,o.return,Ft)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)xh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,co=e;break}co=s.return}}function Eg(e,s,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:la(e,o),l&4&&Dl(5,o);break;case 1:if(la(e,o),l&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Qn(o,o.return,v)}else{var f=ir(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Qn(o,o.return,v)}}l&64&&Sg(o),l&512&&Al(o,o.return);break;case 3:if(la(e,o),l&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{h_(e,s)}catch(v){Qn(o,o.return,v)}}break;case 27:s===null&&l&4&&Mg(o);case 26:case 5:la(e,o),s===null&&l&4&&Cg(o),l&512&&Al(o,o.return);break;case 12:la(e,o);break;case 31:la(e,o),l&4&&Ng(e,o);break;case 13:la(e,o),l&4&&Rg(e,o),l&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=C2.bind(null,o),Y2(e,o))));break;case 22:if(l=o.memoizedState!==null||aa,!l){s=s!==null&&s.memoizedState!==null||Qs,f=aa;var m=Qs;aa=l,(Qs=s)&&!m?ca(e,o,(o.subtreeFlags&8772)!==0):la(e,o),aa=f,Qs=m}break;case 30:break;default:la(e,o)}}function Dg(e){var s=e.alternate;s!==null&&(e.alternate=null,Dg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ao(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ms=null,Fo=!1;function ra(e,s,o){for(o=o.child;o!==null;)Ag(e,s,o),o=o.sibling}function Ag(e,s,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(We,o)}catch{}switch(o.tag){case 26:Qs||Vi(o,s),ra(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Qs||Vi(o,s);var l=Ms,f=Fo;La(o.type)&&(Ms=o.stateNode,Fo=!1),ra(e,s,o),Pl(o.stateNode),Ms=l,Fo=f;break;case 5:Qs||Vi(o,s);case 6:if(l=Ms,f=Fo,Ms=null,ra(e,s,o),Ms=l,Fo=f,Ms!==null)if(Fo)try{(Ms.nodeType===9?Ms.body:Ms.nodeName==="HTML"?Ms.ownerDocument.body:Ms).removeChild(o.stateNode)}catch(m){Qn(o,s,m)}else try{Ms.removeChild(o.stateNode)}catch(m){Qn(o,s,m)}break;case 18:Ms!==null&&(Fo?(e=Ms,S0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Wr(e)):S0(Ms,o.stateNode));break;case 4:l=Ms,f=Fo,Ms=o.stateNode.containerInfo,Fo=!0,ra(e,s,o),Ms=l,Fo=f;break;case 0:case 11:case 14:case 15:Ta(2,o,s),Qs||Ta(4,o,s),ra(e,s,o);break;case 1:Qs||(Vi(o,s),l=o.stateNode,typeof l.componentWillUnmount=="function"&&kg(o,s,l)),ra(e,s,o);break;case 21:ra(e,s,o);break;case 22:Qs=(l=Qs)||o.memoizedState!==null,ra(e,s,o),Qs=l;break;default:ra(e,s,o)}}function Ng(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wr(e)}catch(o){Qn(s,s.return,o)}}}function Rg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wr(e)}catch(o){Qn(s,s.return,o)}}function g2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Tg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Tg),s;default:throw Error(a(435,e.tag))}}function uu(e,s){var o=g2(e);s.forEach(function(l){if(!o.has(l)){o.add(l);var f=j2.bind(null,e,l);l.then(f,f)}})}function Xo(e,s){var o=s.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l],m=e,v=s,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(La(T.type)){Ms=T.stateNode,Fo=!1;break e}break;case 5:Ms=T.stateNode,Fo=!1;break e;case 3:case 4:Ms=T.stateNode.containerInfo,Fo=!0;break e}T=T.return}if(Ms===null)throw Error(a(160));Ag(m,v,f),Ms=null,Fo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Bg(s,e),s=s.sibling}var Ti=null;function Bg(e,s){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xo(s,e),qo(e),l&4&&(Ta(3,e,e.return),Dl(3,e),Ta(5,e,e.return));break;case 1:Xo(s,e),qo(e),l&512&&(Qs||o===null||Vi(o,o.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var f=Ti;if(Xo(s,e),qo(e),l&512&&(Qs||o===null||Vi(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=e.memoizedState,o===null)if(l===null)if(e.stateNode===null){e:{l=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[fo]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),bo(m,l,o),m[dn]=e,fn(m),l=m;break e;case"link":var v=B0("link","href",f).get(l+(o.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(l),bo(m,l,o),f.head.appendChild(m);break;case"meta":if(v=B0("meta","content",f).get(l+(o.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(T,1);break t}}m=f.createElement(l),bo(m,l,o),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[dn]=e,fn(m),l=m}e.stateNode=l}else L0(f,e.type,e.stateNode);else e.stateNode=R0(f,l,e.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?L0(f,e.type,e.stateNode):R0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Xo(s,e),qo(e),l&512&&(Qs||o===null||Vi(o,o.return)),o!==null&&l&4&&Yf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Xo(s,e),qo(e),l&512&&(Qs||o===null||Vi(o,o.return)),e.flags&32){f=e.stateNode;try{Xs(f,"")}catch(Ct){Qn(e,e.return,Ct)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Yf(e,f,o!==null?o.memoizedProps:f)),l&1024&&(qf=!0);break;case 6:if(Xo(s,e),qo(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,o=e.stateNode;try{o.nodeValue=l}catch(Ct){Qn(e,e.return,Ct)}}break;case 3:if(ju=null,f=Ti,Ti=ku(s.containerInfo),Xo(s,e),Ti=f,qo(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Wr(s.containerInfo)}catch(Ct){Qn(e,e.return,Ct)}qf&&(qf=!1,Lg(e));break;case 4:l=Ti,Ti=ku(e.stateNode.containerInfo),Xo(s,e),qo(e),Ti=l;break;case 12:Xo(s,e),qo(e);break;case 31:Xo(s,e),qo(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,uu(e,l)));break;case 13:Xo(s,e),qo(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(fu=Qe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,uu(e,l)));break;case 22:f=e.memoizedState!==null;var U=o!==null&&o.memoizedState!==null,ue=aa,Ce=Qs;if(aa=ue||f,Qs=Ce||U,Xo(s,e),Qs=Ce,aa=ue,qo(e),l&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||U||aa||Qs||ar(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){U=o=s;try{if(m=U.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=U.stateNode;var Oe=U.memoizedProps.style,pe=Oe!=null&&Oe.hasOwnProperty("display")?Oe.display:null;T.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Ct){Qn(U,U.return,Ct)}}}else if(s.tag===6){if(o===null){U=s;try{U.stateNode.nodeValue=f?"":U.memoizedProps}catch(Ct){Qn(U,U.return,Ct)}}}else if(s.tag===18){if(o===null){U=s;try{var be=U.stateNode;f?k0(be,!0):k0(U.stateNode,!1)}catch(Ct){Qn(U,U.return,Ct)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=e.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,uu(e,o))));break;case 19:Xo(s,e),qo(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,uu(e,l)));break;case 30:break;case 21:break;default:Xo(s,e),qo(e)}}function qo(e){var s=e.flags;if(s&2){try{for(var o,l=e.return;l!==null;){if(jg(l)){o=l;break}l=l.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Ff(e);cu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Xs(v,""),o.flags&=-33);var T=Ff(e);cu(e,T,v);break;case 3:case 4:var U=o.stateNode.containerInfo,ue=Ff(e);Xf(e,ue,U);break;default:throw Error(a(161))}}catch(Ce){Qn(e,e.return,Ce)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Lg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function la(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Eg(e,s.alternate,s),s=s.sibling}function ar(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ta(4,s,s.return),ar(s);break;case 1:Vi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&kg(s,s.return,o),ar(s);break;case 27:Pl(s.stateNode);case 26:case 5:Vi(s,s.return),ar(s);break;case 22:s.memoizedState===null&&ar(s);break;case 30:ar(s);break;default:ar(s)}e=e.sibling}}function ca(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:ca(f,m,o),Dl(4,m);break;case 1:if(ca(f,m,o),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ue){Qn(l,l.return,ue)}if(l=m,f=l.updateQueue,f!==null){var T=l.stateNode;try{var U=f.shared.hiddenCallbacks;if(U!==null)for(f.shared.hiddenCallbacks=null,f=0;f<U.length;f++)f_(U[f],T)}catch(ue){Qn(l,l.return,ue)}}o&&v&64&&Sg(m),Al(m,m.return);break;case 27:Mg(m);case 26:case 5:ca(f,m,o),o&&l===null&&v&4&&Cg(m),Al(m,m.return);break;case 12:ca(f,m,o);break;case 31:ca(f,m,o),o&&v&4&&Ng(f,m);break;case 13:ca(f,m,o),o&&v&4&&Rg(f,m);break;case 22:m.memoizedState===null&&ca(f,m,o),Al(m,m.return);break;case 30:break;default:ca(f,m,o)}s=s.sibling}}function Gf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&gl(o))}function Kf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&gl(e))}function Ei(e,s,o,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Og(e,s,o,l),s=s.sibling}function Og(e,s,o,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Ei(e,s,o,l),f&2048&&Dl(9,s);break;case 1:Ei(e,s,o,l);break;case 3:Ei(e,s,o,l),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&gl(e)));break;case 12:if(f&2048){Ei(e,s,o,l),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(U){Qn(s,s.return,U)}}else Ei(e,s,o,l);break;case 31:Ei(e,s,o,l);break;case 13:Ei(e,s,o,l);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Ei(e,s,o,l):Nl(e,s):m._visibility&2?Ei(e,s,o,l):(m._visibility|=2,Rr(e,s,o,l,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Gf(v,s);break;case 24:Ei(e,s,o,l),f&2048&&Kf(s.alternate,s);break;default:Ei(e,s,o,l)}}function Rr(e,s,o,l,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,T=o,U=l,ue=v.flags;switch(v.tag){case 0:case 11:case 15:Rr(m,v,T,U,f),Dl(8,v);break;case 23:break;case 22:var Ce=v.stateNode;v.memoizedState!==null?Ce._visibility&2?Rr(m,v,T,U,f):Nl(m,v):(Ce._visibility|=2,Rr(m,v,T,U,f)),f&&ue&2048&&Gf(v.alternate,v);break;case 24:Rr(m,v,T,U,f),f&&ue&2048&&Kf(v.alternate,v);break;default:Rr(m,v,T,U,f)}s=s.sibling}}function Nl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,l=s,f=l.flags;switch(l.tag){case 22:Nl(o,l),f&2048&&Gf(l.alternate,l);break;case 24:Nl(o,l),f&2048&&Kf(l.alternate,l);break;default:Nl(o,l)}s=s.sibling}}var Rl=8192;function Br(e,s,o){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)zg(e,s,o),e=e.sibling}function zg(e,s,o){switch(e.tag){case 26:Br(e,s,o),e.flags&Rl&&e.memoizedState!==null&&sv(o,Ti,e.memoizedState,e.memoizedProps);break;case 5:Br(e,s,o);break;case 3:case 4:var l=Ti;Ti=ku(e.stateNode.containerInfo),Br(e,s,o),Ti=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Rl,Rl=16777216,Br(e,s,o),Rl=l):Br(e,s,o));break;default:Br(e,s,o)}}function $g(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Bl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var l=s[o];co=l,Pg(l,e)}$g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,du(e)):Bl(e);break;default:Bl(e)}}function du(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var l=s[o];co=l,Pg(l,e)}$g(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ta(8,s,s.return),du(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,du(s));break;default:du(s)}e=e.sibling}}function Pg(e,s){for(;co!==null;){var o=co;switch(o.tag){case 0:case 11:case 15:Ta(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gl(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,co=l;else e:for(o=e;co!==null;){l=co;var f=l.sibling,m=l.return;if(Dg(l),l===o){co=null;break e}if(f!==null){f.return=m,co=f;break e}co=m}}}var y2={getCacheForType:function(e){var s=yo(qs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return yo(qs).controller.signal}},x2=typeof WeakMap=="function"?WeakMap:Map,Yn=0,us=null,bn=null,kn=0,Kn=0,ii=null,Ea=!1,Lr=!1,Qf=!1,ua=0,Bs=0,Da=0,rr=0,Zf=0,ai=0,Or=0,Ll=null,Go=null,Jf=!1,fu=0,Hg=0,hu=1/0,mu=null,Aa=null,so=0,Na=null,zr=null,da=0,eh=0,th=null,Vg=null,Ol=0,nh=null;function ri(){return(Yn&2)!==0&&kn!==0?kn&-kn:z.T!==null?lh():hs()}function Ug(){if(ai===0)if((kn&536870912)===0||En){var e=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),ai=e}else ai=536870912;return e=si.current,e!==null&&(e.flags|=32),ai}function Ko(e,s,o){(e===us&&(Kn===2||Kn===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ra(e,kn,ai,!1)),pt(e,o),((Yn&2)===0||e!==us)&&(e===us&&((Yn&2)===0&&(rr|=o),Bs===4&&Ra(e,kn,ai,!1)),Ui(e))}function Wg(e,s,o){if((Yn&6)!==0)throw Error(a(327));var l=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Kt(e,s),f=l?w2(e,s):oh(e,s,!0),m=l;do{if(f===0){Lr&&!l&&Ra(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!b2(o)){f=oh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var T=e;f=Ll;var U=T.current.memoizedState.isDehydrated;if(U&&($r(T,v).flags|=256),v=oh(T,v,!1),v!==2){if(Qf&&!U){T.errorRecoveryDisabledLanes|=m,rr|=m,f=4;break e}m=Go,Go=f,m!==null&&(Go===null?Go=m:Go.push.apply(Go,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){$r(e,0),Ra(e,s,0,!0);break}e:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ra(l,s,ai,!Ea);break e;case 2:Go=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=fu+300-Qe(),10<f)){if(Ra(l,s,ai,!Ea),rt(l,0,!0)!==0)break e;da=s,l.timeoutHandle=v0(Yg.bind(null,l,o,Go,mu,Jf,s,ai,rr,Or,Ea,m,"Throttled",-0,0),f);break e}Yg(l,o,Go,mu,Jf,s,ai,rr,Or,Ea,m,null,-0,0)}}break}while(!0);Ui(e)}function Yg(e,s,o,l,f,m,v,T,U,ue,Ce,Oe,pe,be){if(e.timeoutHandle=-1,Oe=s.subtreeFlags,Oe&8192||(Oe&16785408)===16785408){Oe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Z},zg(s,m,Oe);var Ct=(m&62914560)===m?fu-Qe():(m&4194048)===m?Hg-Qe():0;if(Ct=ov(Oe,Ct),Ct!==null){da=m,e.cancelPendingCommit=Ct(Jg.bind(null,e,s,m,o,l,f,v,T,U,Ce,Oe,null,pe,be)),Ra(e,m,v,!ue);return}}Jg(e,s,m,o,l,f,v,T,U)}function b2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var f=o[l],m=f.getSnapshot;f=f.value;try{if(!wt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ra(e,s,o,l){s&=~Zf,s&=~rr,e.suspendedLanes|=s,e.pingedLanes&=~s,l&&(e.warmLanes|=s),l=e.expirationTimes;for(var f=s;0<f;){var m=31-Dt(f),v=1<<m;l[m]=-1,f&=~v}o!==0&&nn(e,o,s)}function pu(){return(Yn&6)===0?(zl(0),!1):!0}function sh(){if(bn!==null){if(Kn===0)var e=bn.return;else e=bn,ea=Za=null,xf(e),Tr=null,xl=0,e=bn;for(;e!==null;)wg(e.alternate,e),e=e.return;bn=null}}function $r(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,P2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),da=0,sh(),us=e,bn=o=Zi(e.current,null),kn=s,Kn=0,ii=null,Ea=!1,Lr=Kt(e,s),Qf=!1,Or=ai=Zf=rr=Da=Bs=0,Go=Ll=null,Jf=!1,(s&8)!==0&&(s|=s&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=s;0<l;){var f=31-Dt(l),m=1<<f;s|=e[f],l&=~m}return ua=s,Oc(),o}function Fg(e,s){hn=null,z.H=Ml,s===Mr||s===Wc?(s=l_(),Kn=3):s===rf?(s=l_(),Kn=4):Kn=s===Lf?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ii=s,bn===null&&(Bs=1,ou(e,di(s,e.current)))}function Xg(){var e=si.current;return e===null?!0:(kn&4194048)===kn?pi===null:(kn&62914560)===kn||(kn&536870912)!==0?e===pi:!1}function qg(){var e=z.H;return z.H=Ml,e===null?Ml:e}function Gg(){var e=z.A;return z.A=y2,e}function _u(){Bs=4,Ea||(kn&4194048)!==kn&&si.current!==null||(Lr=!0),(Da&134217727)===0&&(rr&134217727)===0||us===null||Ra(us,kn,ai,!1)}function oh(e,s,o){var l=Yn;Yn|=2;var f=qg(),m=Gg();(us!==e||kn!==s)&&(mu=null,$r(e,s)),s=!1;var v=Bs;e:do try{if(Kn!==0&&bn!==null){var T=bn,U=ii;switch(Kn){case 8:sh(),v=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(s=!0);var ue=Kn;if(Kn=0,ii=null,Ir(e,T,U,ue),o&&Lr){v=0;break e}break;default:ue=Kn,Kn=0,ii=null,Ir(e,T,U,ue)}}v2(),v=Bs;break}catch(Ce){Fg(e,Ce)}while(!0);return s&&e.shellSuspendCounter++,ea=Za=null,Yn=l,z.H=f,z.A=m,bn===null&&(us=null,kn=0,Oc()),v}function v2(){for(;bn!==null;)Kg(bn)}function w2(e,s){var o=Yn;Yn|=2;var l=qg(),f=Gg();us!==e||kn!==s?(mu=null,hu=Qe()+500,$r(e,s)):Lr=Kt(e,s);e:do try{if(Kn!==0&&bn!==null){s=bn;var m=ii;t:switch(Kn){case 1:Kn=0,ii=null,Ir(e,s,m,1);break;case 2:case 9:if(a_(m)){Kn=0,ii=null,Qg(s);break}s=function(){Kn!==2&&Kn!==9||us!==e||(Kn=7),Ui(e)},m.then(s,s);break e;case 3:Kn=7;break e;case 4:Kn=5;break e;case 7:a_(m)?(Kn=0,ii=null,Qg(s)):(Kn=0,ii=null,Ir(e,s,m,7));break;case 5:var v=null;switch(bn.tag){case 26:v=bn.memoizedState;case 5:case 27:var T=bn;if(v?O0(v):T.stateNode.complete){Kn=0,ii=null;var U=T.sibling;if(U!==null)bn=U;else{var ue=T.return;ue!==null?(bn=ue,gu(ue)):bn=null}break t}}Kn=0,ii=null,Ir(e,s,m,5);break;case 6:Kn=0,ii=null,Ir(e,s,m,6);break;case 8:sh(),Bs=6;break e;default:throw Error(a(462))}}S2();break}catch(Ce){Fg(e,Ce)}while(!0);return ea=Za=null,z.H=l,z.A=f,Yn=o,bn!==null?0:(us=null,kn=0,Oc(),Bs)}function S2(){for(;bn!==null&&!ot();)Kg(bn)}function Kg(e){var s=bg(e.alternate,e,ua);e.memoizedProps=e.pendingProps,s===null?gu(e):bn=s}function Qg(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=mg(o,s,s.pendingProps,s.type,void 0,kn);break;case 11:s=mg(o,s,s.pendingProps,s.type.render,s.ref,kn);break;case 5:xf(s);default:wg(o,s),s=bn=Gp(s,ua),s=bg(o,s,ua)}e.memoizedProps=e.pendingProps,s===null?gu(e):bn=s}function Ir(e,s,o,l){ea=Za=null,xf(s),Tr=null,xl=0;var f=s.return;try{if(d2(e,f,s,o,kn)){Bs=1,ou(e,di(o,e.current)),bn=null;return}}catch(m){if(f!==null)throw bn=f,m;Bs=1,ou(e,di(o,e.current)),bn=null;return}s.flags&32768?(En||l===1?e=!0:Lr||(kn&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=si.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zg(s,e)):gu(s)}function gu(e){var s=e;do{if((s.flags&32768)!==0){Zg(s,Ea);return}e=s.return;var o=m2(s.alternate,s,ua);if(o!==null){bn=o;return}if(s=s.sibling,s!==null){bn=s;return}bn=s=e}while(s!==null);Bs===0&&(Bs=5)}function Zg(e,s){do{var o=p2(e.alternate,e);if(o!==null){o.flags&=32767,bn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){bn=e;return}bn=e=o}while(e!==null);Bs=6,bn=null}function Jg(e,s,o,l,f,m,v,T,U){e.cancelPendingCommit=null;do yu();while(so!==0);if((Yn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Yd,sn(e,o,m,v,T,U),e===us&&(bn=us=null,kn=0),zr=s,Na=e,da=o,eh=m,th=f,Vg=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,M2(qe,function(){return o0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=_e.p,_e.p=2,v=Yn,Yn|=4;try{_2(e,s,o)}finally{Yn=v,_e.p=f,z.T=l}}so=1,e0(),t0(),n0()}}function e0(){if(so===1){so=0;var e=Na,s=zr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var l=_e.p;_e.p=2;var f=Yn;Yn|=4;try{Bg(s,e);var m=_h,v=Bn(e.containerInfo),T=m.focusedElem,U=m.selectionRange;if(v!==T&&T&&T.ownerDocument&&vs(T.ownerDocument.documentElement,T)){if(U!==null&&Xn(T)){var ue=U.start,Ce=U.end;if(Ce===void 0&&(Ce=ue),"selectionStart"in T)T.selectionStart=ue,T.selectionEnd=Math.min(Ce,T.value.length);else{var Oe=T.ownerDocument||document,pe=Oe&&Oe.defaultView||window;if(pe.getSelection){var be=pe.getSelection(),Ct=T.textContent.length,Ft=Math.min(U.start,Ct),as=U.end===void 0?Ft:Math.min(U.end,Ct);!be.extend&&Ft>as&&(v=as,as=Ft,Ft=v);var ie=bs(T,Ft),Q=bs(T,as);if(ie&&Q&&(be.rangeCount!==1||be.anchorNode!==ie.node||be.anchorOffset!==ie.offset||be.focusNode!==Q.node||be.focusOffset!==Q.offset)){var le=Oe.createRange();le.setStart(ie.node,ie.offset),be.removeAllRanges(),Ft>as?(be.addRange(le),be.extend(Q.node,Q.offset)):(le.setEnd(Q.node,Q.offset),be.addRange(le))}}}}for(Oe=[],be=T;be=be.parentNode;)be.nodeType===1&&Oe.push({element:be,left:be.scrollLeft,top:be.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Oe.length;T++){var Re=Oe[T];Re.element.scrollLeft=Re.left,Re.element.scrollTop=Re.top}}Du=!!ph,_h=ph=null}finally{Yn=f,_e.p=l,z.T=o}}e.current=s,so=2}}function t0(){if(so===2){so=0;var e=Na,s=zr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var l=_e.p;_e.p=2;var f=Yn;Yn|=4;try{Eg(e,s.alternate,s)}finally{Yn=f,_e.p=l,z.T=o}}so=3}}function n0(){if(so===4||so===3){so=0,ct();var e=Na,s=zr,o=da,l=Vg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?so=5:(so=0,zr=Na=null,s0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Aa=null),fs(o),s=s.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(We,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=z.T,f=_e.p,_e.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];m(T.value,{componentStack:T.stack})}}finally{z.T=s,_e.p=f}}(da&3)!==0&&yu(),Ui(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===nh?Ol++:(Ol=0,nh=e):Ol=0,zl(0)}}function s0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,gl(s)))}function yu(){return e0(),t0(),n0(),o0()}function o0(){if(so!==5)return!1;var e=Na,s=eh;eh=0;var o=fs(da),l=z.T,f=_e.p;try{_e.p=32>o?32:o,z.T=null,o=th,th=null;var m=Na,v=da;if(so=0,zr=Na=null,da=0,(Yn&6)!==0)throw Error(a(331));var T=Yn;if(Yn|=4,Ig(m.current),Og(m,m.current,v,o),Yn=T,zl(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(We,m)}catch{}return!0}finally{_e.p=f,z.T=l,s0(e,s)}}function i0(e,s,o){s=di(o,s),s=Bf(e.stateNode,s,2),e=Ca(e,s,2),e!==null&&(pt(e,2),Ui(e))}function Qn(e,s,o){if(e.tag===3)i0(e,e,o);else for(;s!==null;){if(s.tag===3){i0(s,e,o);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Aa===null||!Aa.has(l))){e=di(o,e),o=ag(2),l=Ca(s,o,2),l!==null&&(rg(o,l,s,e),pt(l,2),Ui(l));break}}s=s.return}}function ih(e,s,o){var l=e.pingCache;if(l===null){l=e.pingCache=new x2;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(o)||(Qf=!0,f.add(o),e=k2.bind(null,e,s,o),s.then(e,e))}function k2(e,s,o){var l=e.pingCache;l!==null&&l.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,us===e&&(kn&o)===o&&(Bs===4||Bs===3&&(kn&62914560)===kn&&300>Qe()-fu?(Yn&2)===0&&$r(e,0):Zf|=o,Or===kn&&(Or=0)),Ui(e)}function a0(e,s){s===0&&(s=Nt()),e=Ga(e,s),e!==null&&(pt(e,s),Ui(e))}function C2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),a0(e,o)}function j2(e,s){var o=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(s),a0(e,o)}function M2(e,s){return He(e,s)}var xu=null,Pr=null,ah=!1,bu=!1,rh=!1,Ba=0;function Ui(e){e!==Pr&&e.next===null&&(Pr===null?xu=Pr=e:Pr=Pr.next=e),bu=!0,ah||(ah=!0,E2())}function zl(e,s){if(!rh&&bu){rh=!0;do for(var o=!1,l=xu;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var v=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-Dt(42|e)+1)-1,m&=f&~(v&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,u0(l,m))}else m=kn,m=rt(l,l===us?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Kt(l,m)||(o=!0,u0(l,m));l=l.next}while(o);rh=!1}}function T2(){r0()}function r0(){bu=ah=!1;var e=0;Ba!==0&&I2()&&(e=Ba);for(var s=Qe(),o=null,l=xu;l!==null;){var f=l.next,m=l0(l,s);m===0?(l.next=null,o===null?xu=f:o.next=f,f===null&&(Pr=o)):(o=l,(e!==0||(m&3)!==0)&&(bu=!0)),l=f}so!==0&&so!==5||zl(e),Ba!==0&&(Ba=0)}function l0(e,s){for(var o=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Dt(m),T=1<<v,U=f[v];U===-1?((T&o)===0||(T&l)!==0)&&(f[v]=Qt(T,s)):U<=s&&(e.expiredLanes|=T),m&=~T}if(s=us,o=kn,o=rt(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,o===0||e===s&&(Kn===2||Kn===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&je(l),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Kt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(l!==null&&je(l),fs(o)){case 2:case 8:o=ze;break;case 32:o=qe;break;case 268435456:o=J;break;default:o=qe}return l=c0.bind(null,e),o=He(o,l),e.callbackPriority=s,e.callbackNode=o,s}return l!==null&&l!==null&&je(l),e.callbackPriority=2,e.callbackNode=null,2}function c0(e,s){if(so!==0&&so!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(yu()&&e.callbackNode!==o)return null;var l=kn;return l=rt(e,e===us?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Wg(e,l,s),l0(e,Qe()),e.callbackNode!=null&&e.callbackNode===o?c0.bind(null,e):null)}function u0(e,s){if(yu())return null;Wg(e,s,!0)}function E2(){H2(function(){(Yn&6)!==0?He(ft,T2):r0()})}function lh(){if(Ba===0){var e=Cr;e===0&&(e=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Ba=e}return Ba}function d0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jo(""+e)}function f0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function D2(e,s,o,l,f){if(s==="submit"&&o&&o.stateNode===f){var m=d0((f[es]||null).action),v=l.submitter;v&&(s=(s=v[es]||null)?d0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var T=new Y("action","action",null,l,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ba!==0){var U=v?f0(f,v):new FormData(f);Tf(o,{pending:!0,data:U,method:f.method,action:m},null,U)}}else typeof m=="function"&&(T.preventDefault(),U=v?f0(f,v):new FormData(f),Tf(o,{pending:!0,data:U,method:f.method,action:m},m,U))},currentTarget:f}]})}}for(var ch=0;ch<Wd.length;ch++){var uh=Wd[ch],A2=uh.toLowerCase(),N2=uh[0].toUpperCase()+uh.slice(1);Mi(A2,"on"+N2)}Mi(ji,"onAnimationEnd"),Mi(Ii,"onAnimationIteration"),Mi(Bc,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Hd,"onTransitionRun"),Mi(Vd,"onTransitionStart"),Mi(Ud,"onTransitionCancel"),Mi(Fp,"onTransitionEnd"),ts("onMouseEnter",["mouseout","mouseover"]),ts("onMouseLeave",["mouseout","mouseover"]),ts("onPointerEnter",["pointerout","pointerover"]),ts("onPointerLeave",["pointerout","pointerover"]),Ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ys("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function h0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],f=l.event;l=l.listeners;e:{var m=void 0;if(s)for(var v=l.length-1;0<=v;v--){var T=l[v],U=T.instance,ue=T.currentTarget;if(T=T.listener,U!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=ue;try{m(f)}catch(Ce){Lc(Ce)}f.currentTarget=null,m=U}else for(v=0;v<l.length;v++){if(T=l[v],U=T.instance,ue=T.currentTarget,T=T.listener,U!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=ue;try{m(f)}catch(Ce){Lc(Ce)}f.currentTarget=null,m=U}}}}function vn(e,s){var o=s[Ts];o===void 0&&(o=s[Ts]=new Set);var l=e+"__bubble";o.has(l)||(m0(s,e,2,!1),o.add(l))}function dh(e,s,o){var l=0;s&&(l|=4),m0(o,e,l,s)}var vu="_reactListening"+Math.random().toString(36).slice(2);function fh(e){if(!e[vu]){e[vu]=!0,Jo.forEach(function(o){o!=="selectionchange"&&(R2.has(o)||dh(o,!1,e),dh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[vu]||(s[vu]=!0,dh("selectionchange",!1,s))}}function m0(e,s,o,l){switch(U0(s)){case 2:var f=rv;break;case 8:f=lv;break;default:f=Mh}o=f.bind(null,s,o,e),f=void 0,!ns||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function hh(e,s,o,l,f){var m=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var U=v.tag;if((U===3||U===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=Wn(T),v===null)return;if(U=v.tag,U===5||U===6||U===26||U===27){l=m=v;continue e}T=T.parentNode}}l=l.return}Tt(function(){var ue=m,Ce=ke(o),Oe=[];e:{var pe=Xp.get(e);if(pe!==void 0){var be=Y,Ct=e;switch(e){case"keypress":if(Ut(o)===0)break e;case"keydown":case"keyup":be=$o;break;case"focusin":Ct="focus",be=Pn;break;case"focusout":Ct="blur",be=Pn;break;case"beforeblur":case"afterblur":be=Pn;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=tt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Fe;break;case ji:case Ii:case Bc:be=Xt;break;case Fp:be=St;break;case"scroll":case"scrollend":be=me;break;case"wheel":be=Pt;break;case"copy":case"cut":case"paste":be=po;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Eo;break;case"toggle":case"beforetoggle":be=Ln}var Ft=(s&4)!==0,as=!Ft&&(e==="scroll"||e==="scrollend"),ie=Ft?pe!==null?pe+"Capture":null:pe;Ft=[];for(var Q=ue,le;Q!==null;){var Re=Q;if(le=Re.stateNode,Re=Re.tag,Re!==5&&Re!==26&&Re!==27||le===null||ie===null||(Re=Lt(Q,ie),Re!=null&&Ft.push(Il(Q,Re,le))),as)break;Q=Q.return}0<Ft.length&&(pe=new be(pe,Ct,null,o,Ce),Oe.push({event:pe,listeners:Ft}))}}if((s&7)===0){e:{if(pe=e==="mouseover"||e==="pointerover",be=e==="mouseout"||e==="pointerout",pe&&o!==fe&&(Ct=o.relatedTarget||o.fromElement)&&(Wn(Ct)||Ct[nt]))break e;if((be||pe)&&(pe=Ce.window===Ce?Ce:(pe=Ce.ownerDocument)?pe.defaultView||pe.parentWindow:window,be?(Ct=o.relatedTarget||o.toElement,be=ue,Ct=Ct?Wn(Ct):null,Ct!==null&&(as=u(Ct),Ft=Ct.tag,Ct!==as||Ft!==5&&Ft!==27&&Ft!==6)&&(Ct=null)):(be=null,Ct=ue),be!==Ct)){if(Ft=tt,Re="onMouseLeave",ie="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(Ft=Eo,Re="onPointerLeave",ie="onPointerEnter",Q="pointer"),as=be==null?pe:Us(be),le=Ct==null?pe:Us(Ct),pe=new Ft(Re,Q+"leave",be,o,Ce),pe.target=as,pe.relatedTarget=le,Re=null,Wn(Ce)===ue&&(Ft=new Ft(ie,Q+"enter",Ct,o,Ce),Ft.target=le,Ft.relatedTarget=as,Re=Ft),as=Re,be&&Ct)t:{for(Ft=B2,ie=be,Q=Ct,le=0,Re=ie;Re;Re=Ft(Re))le++;Re=0;for(var It=Q;It;It=Ft(It))Re++;for(;0<le-Re;)ie=Ft(ie),le--;for(;0<Re-le;)Q=Ft(Q),Re--;for(;le--;){if(ie===Q||Q!==null&&ie===Q.alternate){Ft=ie;break t}ie=Ft(ie),Q=Ft(Q)}Ft=null}else Ft=null;be!==null&&p0(Oe,pe,be,Ft,!1),Ct!==null&&as!==null&&p0(Oe,as,Ct,Ft,!0)}}e:{if(pe=ue?Us(ue):window,be=pe.nodeName&&pe.nodeName.toLowerCase(),be==="select"||be==="input"&&pe.type==="file")var Hn=O;else if(hl(pe))if(F)Hn=on;else{Hn=vt;var At=it}else be=pe.nodeName,!be||be.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?ue&&Ns(ue.elementType)&&(Hn=O):Hn=Bt;if(Hn&&(Hn=Hn(e,ue))){ml(Oe,Hn,o,Ce);break e}At&&At(e,pe,ue),e==="focusout"&&ue&&pe.type==="number"&&ue.memoizedProps.value!=null&&mo(pe,"number",pe.value)}switch(At=ue?Us(ue):window,e){case"focusin":(hl(At)||At.contentEditable==="true")&&(en=At,ws=ue,On=null);break;case"focusout":On=ws=en=null;break;case"mousedown":no=!0;break;case"contextmenu":case"mouseup":case"dragend":no=!1,Do(Oe,o,Ce);break;case"selectionchange":if(Gt)break;case"keydown":case"keyup":Do(Oe,o,Ce)}var pn;if(As)e:{switch(e){case"compositionstart":var Cn="onCompositionStart";break e;case"compositionend":Cn="onCompositionEnd";break e;case"compositionupdate":Cn="onCompositionUpdate";break e}Cn=void 0}else Qi?Ki(e,o)&&(Cn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Cn="onCompositionStart");Cn&&(_a&&o.locale!=="ko"&&(Qi||Cn!=="onCompositionStart"?Cn==="onCompositionEnd"&&Qi&&(pn=zt()):(wn=Ce,Nn="value"in wn?wn.value:wn.textContent,Qi=!0)),At=wu(ue,Cn),0<At.length&&(Cn=new gt(Cn,e,null,o,Ce),Oe.push({event:Cn,listeners:At}),pn?Cn.data=pn:(pn=Ec(o),pn!==null&&(Cn.data=pn)))),(pn=zi?Dc(e,o):Ac(e,o))&&(Cn=wu(ue,"onBeforeInput"),0<Cn.length&&(At=new gt("onBeforeInput","beforeinput",null,o,Ce),Oe.push({event:At,listeners:Cn}),At.data=pn)),D2(Oe,e,ue,o,Ce)}h0(Oe,s)})}function Il(e,s,o){return{instance:e,listener:s,currentTarget:o}}function wu(e,s){for(var o=s+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Lt(e,o),f!=null&&l.unshift(Il(e,f,m)),f=Lt(e,s),f!=null&&l.push(Il(e,f,m))),e.tag===3)return l;e=e.return}return[]}function B2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p0(e,s,o,l,f){for(var m=s._reactName,v=[];o!==null&&o!==l;){var T=o,U=T.alternate,ue=T.stateNode;if(T=T.tag,U!==null&&U===l)break;T!==5&&T!==26&&T!==27||ue===null||(U=ue,f?(ue=Lt(o,m),ue!=null&&v.unshift(Il(o,ue,U))):f||(ue=Lt(o,m),ue!=null&&v.push(Il(o,ue,U)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var L2=/\r\n?/g,O2=/\u0000|\uFFFD/g;function _0(e){return(typeof e=="string"?e:""+e).replace(L2,`
`).replace(O2,"")}function g0(e,s){return s=_0(s),_0(e)===s}function is(e,s,o,l,f,m){switch(o){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||Xs(e,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&Xs(e,""+l);break;case"className":Es(e,"class",l);break;case"tabIndex":Es(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Es(e,o,l);break;case"style":Wo(e,l,m);break;case"data":if(s!=="object"){Es(e,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=jo(""+l),e.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&is(e,s,"name",f.name,f,null),is(e,s,"formEncType",f.formEncType,f,null),is(e,s,"formMethod",f.formMethod,f,null),is(e,s,"formTarget",f.formTarget,f,null)):(is(e,s,"encType",f.encType,f,null),is(e,s,"method",f.method,f,null),is(e,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=jo(""+l),e.setAttribute(o,l);break;case"onClick":l!=null&&(e.onclick=Z);break;case"onScroll":l!=null&&vn("scroll",e);break;case"onScrollEnd":l!=null&&vn("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}o=jo(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""+l):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":l===!0?e.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,l):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(o,l):e.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(o):e.setAttribute(o,l);break;case"popover":vn("beforetoggle",e),vn("toggle",e),ho(e,"popover",l);break;case"xlinkActuate":Fs(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Fs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Fs(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Fs(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Fs(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Fs(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Fs(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Fs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Fs(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ho(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=zo.get(o)||o,ho(e,o,l))}}function mh(e,s,o,l,f,m){switch(o){case"style":Wo(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof l=="string"?Xs(e,l):(typeof l=="number"||typeof l=="bigint")&&Xs(e,""+l);break;case"onScroll":l!=null&&vn("scroll",e);break;case"onScrollEnd":l!=null&&vn("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Z);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ro.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[es]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,l,f);break e}o in e?e[o]=l:l===!0?e.setAttribute(o,""):ho(e,o,l)}}}function bo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vn("error",e),vn("load",e);var l=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:is(e,s,m,v,o,null)}}f&&is(e,s,"srcSet",o.srcSet,o,null),l&&is(e,s,"src",o.src,o,null);return;case"input":vn("invalid",e);var T=m=v=f=null,U=null,ue=null;for(l in o)if(o.hasOwnProperty(l)){var Ce=o[l];if(Ce!=null)switch(l){case"name":f=Ce;break;case"type":v=Ce;break;case"checked":U=Ce;break;case"defaultChecked":ue=Ce;break;case"value":m=Ce;break;case"defaultValue":T=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,s));break;default:is(e,s,l,Ce,o,null)}}In(e,m,T,U,ue,v,f,!1);return;case"select":vn("invalid",e),l=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:is(e,s,f,T,o,null)}s=m,o=v,e.multiple=!!l,s!=null?Cs(e,!!l,s,!1):o!=null&&Cs(e,!!l,o,!0);return;case"textarea":vn("invalid",e),m=f=l=null;for(v in o)if(o.hasOwnProperty(v)&&(T=o[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:is(e,s,v,T,o,null)}Si(e,l,f,m);return;case"option":for(U in o)if(o.hasOwnProperty(U)&&(l=o[U],l!=null))switch(U){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:is(e,s,U,l,o,null)}return;case"dialog":vn("beforetoggle",e),vn("toggle",e),vn("cancel",e),vn("close",e);break;case"iframe":case"object":vn("load",e);break;case"video":case"audio":for(l=0;l<$l.length;l++)vn($l[l],e);break;case"image":vn("error",e),vn("load",e);break;case"details":vn("toggle",e);break;case"embed":case"source":case"link":vn("error",e),vn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in o)if(o.hasOwnProperty(ue)&&(l=o[ue],l!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:is(e,s,ue,l,o,null)}return;default:if(Ns(s)){for(Ce in o)o.hasOwnProperty(Ce)&&(l=o[Ce],l!==void 0&&mh(e,s,Ce,l,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(l=o[T],l!=null&&is(e,s,T,l,o,null))}function z2(e,s,o,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,U=null,ue=null,Ce=null;for(be in o){var Oe=o[be];if(o.hasOwnProperty(be)&&Oe!=null)switch(be){case"checked":break;case"value":break;case"defaultValue":U=Oe;default:l.hasOwnProperty(be)||is(e,s,be,null,l,Oe)}}for(var pe in l){var be=l[pe];if(Oe=o[pe],l.hasOwnProperty(pe)&&(be!=null||Oe!=null))switch(pe){case"type":m=be;break;case"name":f=be;break;case"checked":ue=be;break;case"defaultChecked":Ce=be;break;case"value":v=be;break;case"defaultValue":T=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(a(137,s));break;default:be!==Oe&&is(e,s,pe,be,l,Oe)}}ro(e,v,T,U,ue,Ce,m,f);return;case"select":be=v=T=pe=null;for(m in o)if(U=o[m],o.hasOwnProperty(m)&&U!=null)switch(m){case"value":break;case"multiple":be=U;default:l.hasOwnProperty(m)||is(e,s,m,null,l,U)}for(f in l)if(m=l[f],U=o[f],l.hasOwnProperty(f)&&(m!=null||U!=null))switch(f){case"value":pe=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==U&&is(e,s,f,m,l,U)}s=T,o=v,l=be,pe!=null?Cs(e,!!o,pe,!1):!!l!=!!o&&(s!=null?Cs(e,!!o,s,!0):Cs(e,!!o,o?[]:"",!1));return;case"textarea":be=pe=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:is(e,s,T,null,l,f)}for(v in l)if(f=l[v],m=o[v],l.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":pe=f;break;case"defaultValue":be=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&is(e,s,v,f,l,m)}ms(e,pe,be);return;case"option":for(var Ct in o)if(pe=o[Ct],o.hasOwnProperty(Ct)&&pe!=null&&!l.hasOwnProperty(Ct))switch(Ct){case"selected":e.selected=!1;break;default:is(e,s,Ct,null,l,pe)}for(U in l)if(pe=l[U],be=o[U],l.hasOwnProperty(U)&&pe!==be&&(pe!=null||be!=null))switch(U){case"selected":e.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:is(e,s,U,pe,l,be)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ft in o)pe=o[Ft],o.hasOwnProperty(Ft)&&pe!=null&&!l.hasOwnProperty(Ft)&&is(e,s,Ft,null,l,pe);for(ue in l)if(pe=l[ue],be=o[ue],l.hasOwnProperty(ue)&&pe!==be&&(pe!=null||be!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,s));break;default:is(e,s,ue,pe,l,be)}return;default:if(Ns(s)){for(var as in o)pe=o[as],o.hasOwnProperty(as)&&pe!==void 0&&!l.hasOwnProperty(as)&&mh(e,s,as,void 0,l,pe);for(Ce in l)pe=l[Ce],be=o[Ce],!l.hasOwnProperty(Ce)||pe===be||pe===void 0&&be===void 0||mh(e,s,Ce,pe,l,be);return}}for(var ie in o)pe=o[ie],o.hasOwnProperty(ie)&&pe!=null&&!l.hasOwnProperty(ie)&&is(e,s,ie,null,l,pe);for(Oe in l)pe=l[Oe],be=o[Oe],!l.hasOwnProperty(Oe)||pe===be||pe==null&&be==null||is(e,s,Oe,pe,l,be)}function y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var f=o[l],m=f.transferSize,v=f.initiatorType,T=f.duration;if(m&&T&&y0(v)){for(v=0,T=f.responseEnd,l+=1;l<o.length;l++){var U=o[l],ue=U.startTime;if(ue>T)break;var Ce=U.transferSize,Oe=U.initiatorType;Ce&&y0(Oe)&&(U=U.responseEnd,v+=Ce*(U<T?1:(T-ue)/(U-ue)))}if(--l,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ph=null,_h=null;function Su(e){return e.nodeType===9?e:e.ownerDocument}function x0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function gh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var yh=null;function I2(){var e=window.event;return e&&e.type==="popstate"?e===yh?!1:(yh=e,!0):(yh=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,P2=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,H2=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(V2)}:v0;function V2(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function S0(e,s){var o=s,l=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(l===0){e.removeChild(f),Wr(s);return}l--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")l++;else if(o==="html")Pl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Pl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,T=m.nodeName;m[fo]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Pl(e.ownerDocument.body);o=f}while(o);Wr(s)}function k0(e,s){var o=e;e=0;do{var l=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=l}while(o)}function xh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":xh(o),ao(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function U2(e,s,o,l){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[fo])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function W2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=_i(e.nextSibling),e===null))return null;return e}function C0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=_i(e.nextSibling),e===null))return null;return e}function bh(e){return e.data==="$?"||e.data==="$~"}function vh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Y2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var l=function(){s(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _i(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var wh=null;function j0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return _i(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function M0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function T0(e,s,o){switch(s=Su(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Pl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ao(e)}var gi=new Map,E0=new Set;function ku(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=_e.d;_e.d={f:F2,r:X2,D:q2,C:G2,L:K2,m:Q2,X:J2,S:Z2,M:ev};function F2(){var e=fa.f(),s=pu();return e||s}function X2(e){var s=Vs(e);s!==null&&s.tag===5&&s.type==="form"?F_(s):fa.r(e)}var Hr=typeof document>"u"?null:document;function D0(e,s,o){var l=Hr;if(l&&typeof s=="string"&&s){var f=Ds(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),E0.has(f)||(E0.add(f),e={rel:e,crossOrigin:o,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),bo(s,"link",e),fn(s),l.head.appendChild(s)))}}function q2(e){fa.D(e),D0("dns-prefetch",e,null)}function G2(e,s){fa.C(e,s),D0("preconnect",e,s)}function K2(e,s,o){fa.L(e,s,o);var l=Hr;if(l&&e&&s){var f='link[rel="preload"][as="'+Ds(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ds(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ds(o.imageSizes)+'"]')):f+='[href="'+Ds(e)+'"]';var m=f;switch(s){case"style":m=Vr(e);break;case"script":m=Ur(e)}gi.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),gi.set(m,e),l.querySelector(f)!==null||s==="style"&&l.querySelector(Hl(m))||s==="script"&&l.querySelector(Vl(m))||(s=l.createElement("link"),bo(s,"link",e),fn(s),l.head.appendChild(s)))}}function Q2(e,s){fa.m(e,s);var o=Hr;if(o&&e){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ds(l)+'"][href="'+Ds(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ur(e)}if(!gi.has(m)&&(e=x({rel:"modulepreload",href:e},s),gi.set(m,e),o.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Vl(m)))return}l=o.createElement("link"),bo(l,"link",e),fn(l),o.head.appendChild(l)}}}function Z2(e,s,o){fa.S(e,s,o);var l=Hr;if(l&&e){var f=Ws(l).hoistableStyles,m=Vr(e);s=s||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Hl(m)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=gi.get(m))&&Sh(e,o);var U=v=l.createElement("link");fn(U),bo(U,"link",e),U._p=new Promise(function(ue,Ce){U.onload=ue,U.onerror=Ce}),U.addEventListener("load",function(){T.loading|=1}),U.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Cu(v,s,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function J2(e,s){fa.X(e,s);var o=Hr;if(o&&e){var l=Ws(o).hoistableScripts,f=Ur(e),m=l.get(f);m||(m=o.querySelector(Vl(f)),m||(e=x({src:e,async:!0},s),(s=gi.get(f))&&kh(e,s),m=o.createElement("script"),fn(m),bo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function ev(e,s){fa.M(e,s);var o=Hr;if(o&&e){var l=Ws(o).hoistableScripts,f=Ur(e),m=l.get(f);m||(m=o.querySelector(Vl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=gi.get(f))&&kh(e,s),m=o.createElement("script"),fn(m),bo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function A0(e,s,o,l){var f=(f=Ee.current)?ku(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Vr(o.href),o=Ws(f).hoistableStyles,l=o.get(s),l||(l={type:"style",instance:null,count:0,state:null},o.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Vr(o.href);var m=Ws(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Hl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),gi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},gi.set(e,o),m||tv(f,e,o,v.state))),s&&l===null)throw Error(a(528,""));return v}if(s&&l!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Ur(o),o=Ws(f).hoistableScripts,l=o.get(s),l||(l={type:"script",instance:null,count:0,state:null},o.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Vr(e){return'href="'+Ds(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function N0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function tv(e,s,o,l){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=e.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),bo(s,"link",o),fn(s),e.head.appendChild(s))}function Ur(e){return'[src="'+Ds(e)+'"]'}function Vl(e){return"script[async]"+e}function R0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var l=e.querySelector('style[data-href~="'+Ds(o.href)+'"]');if(l)return s.instance=l,fn(l),l;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fn(l),bo(l,"style",f),Cu(l,o.precedence,e),s.instance=l;case"stylesheet":f=Vr(o.href);var m=e.querySelector(Hl(f));if(m)return s.state.loading|=4,s.instance=m,fn(m),m;l=N0(o),(f=gi.get(f))&&Sh(l,f),m=(e.ownerDocument||e).createElement("link"),fn(m);var v=m;return v._p=new Promise(function(T,U){v.onload=T,v.onerror=U}),bo(m,"link",l),s.state.loading|=4,Cu(m,o.precedence,e),s.instance=m;case"script":return m=Ur(o.src),(f=e.querySelector(Vl(m)))?(s.instance=f,fn(f),f):(l=o,(f=gi.get(m))&&(l=x({},o),kh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),fn(f),bo(f,"link",l),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,Cu(l,o.precedence,e));return s.instance}function Cu(e,s,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===s)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Sh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function kh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var ju=null;function B0(e,s,o){if(ju===null){var l=new Map,f=ju=new Map;f.set(o,l)}else f=ju,l=f.get(o),l||(l=new Map,f.set(o,l));if(l.has(e))return l;for(l.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[fo]||m[dn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var T=l.get(v);T?T.push(m):l.set(v,[m])}}return l}function L0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function nv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function O0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sv(e,s,o,l){if(o.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Vr(l.href),m=s.querySelector(Hl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Mu.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,fn(m);return}m=s.ownerDocument||s,l=N0(l),(f=gi.get(f))&&Sh(l,f),m=m.createElement("link"),fn(m);var v=m;v._p=new Promise(function(T,U){v.onload=T,v.onerror=U}),bo(m,"link",l),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Mu.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Ch=0;function ov(e,s){return e.stylesheets&&e.count===0&&Eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var l=setTimeout(function(){if(e.stylesheets&&Eu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Ch===0&&(Ch=62500*$2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Eu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Ch?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tu=null;function Eu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tu=new Map,s.forEach(iv,e),Tu=null,Mu.call(e))}function iv(e,s){if(!(s.state.loading&4)){var o=Tu.get(e);if(o)var l=o.get(null);else{o=new Map,Tu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),l=v)}l&&o.set(null,l)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||l,m===l&&o.set(null,f),o.set(v,f),this.count++,l=Mu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Ul={$$typeof:A,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function av(e,s,o,l,f,m,v,T,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.hiddenUpdates=zn(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function z0(e,s,o,l,f,m,v,T,U,ue,Ce,Oe){return e=new av(e,s,o,v,U,ue,Ce,Oe,T),s=1,m===!0&&(s|=24),m=ni(3,null,null,s),e.current=m,m.stateNode=e,s=sf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:s},lf(m),e}function $0(e){return e?(e=br,e):br}function I0(e,s,o,l,f,m){f=$0(f),l.context===null?l.context=f:l.pendingContext=f,l=ka(s),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=Ca(e,l,s),o!==null&&(Ko(o,e,s),vl(o,e,s))}function P0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function jh(e,s){P0(e,s),(e=e.alternate)&&P0(e,s)}function H0(e){if(e.tag===13||e.tag===31){var s=Ga(e,67108864);s!==null&&Ko(s,e,67108864),jh(e,67108864)}}function V0(e){if(e.tag===13||e.tag===31){var s=ri();s=Un(s);var o=Ga(e,s);o!==null&&Ko(o,e,s),jh(e,s)}}var Du=!0;function rv(e,s,o,l){var f=z.T;z.T=null;var m=_e.p;try{_e.p=2,Mh(e,s,o,l)}finally{_e.p=m,z.T=f}}function lv(e,s,o,l){var f=z.T;z.T=null;var m=_e.p;try{_e.p=8,Mh(e,s,o,l)}finally{_e.p=m,z.T=f}}function Mh(e,s,o,l){if(Du){var f=Th(l);if(f===null)hh(e,s,l,Au,o),W0(e,l);else if(uv(f,e,s,o,l))l.stopPropagation();else if(W0(e,l),s&4&&-1<cv.indexOf(e)){for(;f!==null;){var m=Vs(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=_n(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var U=1<<31-Dt(v);T.entanglements[1]|=U,v&=~U}Ui(m),(Yn&6)===0&&(hu=Qe()+500,zl(0))}}break;case 31:case 13:T=Ga(m,2),T!==null&&Ko(T,m,2),pu(),jh(m,2)}if(m=Th(l),m===null&&hh(e,s,l,Au,o),m===f)break;f=m}f!==null&&l.stopPropagation()}else hh(e,s,l,null,o)}}function Th(e){return e=ke(e),Eh(e)}var Au=null;function Eh(e){if(Au=null,e=Wn(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Au=e,null}function U0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case ft:return 2;case ze:return 8;case qe:case I:return 32;case J:return 268435456;default:return 32}default:return 32}}var Dh=!1,Oa=null,za=null,$a=null,Wl=new Map,Yl=new Map,Ia=[],cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(e,s){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Wl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(s.pointerId)}}function Fl(e,s,o,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Vs(s),s!==null&&H0(s)),e):(e.eventSystemFlags|=l,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function uv(e,s,o,l,f){switch(s){case"focusin":return Oa=Fl(Oa,e,s,o,l,f),!0;case"dragenter":return za=Fl(za,e,s,o,l,f),!0;case"mouseover":return $a=Fl($a,e,s,o,l,f),!0;case"pointerover":var m=f.pointerId;return Wl.set(m,Fl(Wl.get(m)||null,e,s,o,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Yl.set(m,Fl(Yl.get(m)||null,e,s,o,l,f)),!0}return!1}function Y0(e){var s=Wn(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,jn(e.priority,function(){V0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,jn(e.priority,function(){V0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Th(e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);fe=l,o.target.dispatchEvent(l),fe=null}else return s=Vs(o),s!==null&&H0(s),e.blockedOn=o,!1;s.shift()}return!0}function F0(e,s,o){Nu(e)&&o.delete(s)}function dv(){Dh=!1,Oa!==null&&Nu(Oa)&&(Oa=null),za!==null&&Nu(za)&&(za=null),$a!==null&&Nu($a)&&($a=null),Wl.forEach(F0),Yl.forEach(F0)}function Ru(e,s){e.blockedOn===s&&(e.blockedOn=null,Dh||(Dh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,dv)))}var Bu=null;function X0(e){Bu!==e&&(Bu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bu===e&&(Bu=null);for(var s=0;s<e.length;s+=3){var o=e[s],l=e[s+1],f=e[s+2];if(typeof l!="function"){if(Eh(l||o)===null)continue;break}var m=Vs(o);m!==null&&(e.splice(s,3),s-=3,Tf(m,{pending:!0,data:f,method:o.method,action:l},l,f))}}))}function Wr(e){function s(U){return Ru(U,e)}Oa!==null&&Ru(Oa,e),za!==null&&Ru(za,e),$a!==null&&Ru($a,e),Wl.forEach(s),Yl.forEach(s);for(var o=0;o<Ia.length;o++){var l=Ia[o];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ia.length&&(o=Ia[0],o.blockedOn===null);)Y0(o),o.blockedOn===null&&Ia.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var f=o[l],m=o[l+1],v=f[es]||null;if(typeof m=="function")v||X0(o);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[es]||null)T=v.formAction;else if(Eh(f)!==null)continue}else T=v.action;typeof T=="function"?o[l+1]=T:(o.splice(l,3),l-=3),X0(o)}}}function q0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Ah(e){this._internalRoot=e}Lu.prototype.render=Ah.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,l=ri();I0(o,l,e,s,null,null)},Lu.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;I0(e.current,2,null,e,null,null),pu(),s[nt]=null}};function Lu(e){this._internalRoot=e}Lu.prototype.unstable_scheduleHydration=function(e){if(e){var s=hs();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Ia.length&&s!==0&&s<Ia[o].priority;o++);Ia.splice(o,0,e),o===0&&Y0(e)}};var G0=n.version;if(G0!=="19.2.4")throw Error(a(527,G0,"19.2.4"));_e.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var fv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{We=Ou.inject(fv),Xe=Ou}catch{}}return ql.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,l="",f=ng,m=sg,v=og;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=z0(e,1,!1,null,null,o,l,null,f,m,v,q0),e[nt]=s.current,fh(e),new Ah(s)},ql.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var l=!1,f="",m=ng,v=sg,T=og,U=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(U=o.formState)),s=z0(e,1,!0,s,o!=null?o:null,l,f,U,m,v,T,q0),s.context=$0(null),o=s.current,l=ri(),l=Un(l),f=ka(l),f.callback=null,Ca(o,f,l),o=l,s.current.lanes=o,pt(s,o),Ui(s),e[nt]=s.current,fh(e),new Lu(s)},ql.version="19.2.4",ql}var iy;function vv(){if(iy)return Rh.exports;iy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Rh.exports=bv(),Rh.exports}var wv=vv();const Sv=vx(wv);var y=rp();const kv=vx(y);function Cv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function jv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var cd;const bi="__TAURI_TO_IPC_KEY__";function Mv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function ye(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Tv{get rid(){return Cv(this,cd,"f")}constructor(n){cd.set(this,void 0),jv(this,cd,n)}async close(){return ye("plugin:resources|close",{rid:this.rid})}}cd=new WeakMap;var li;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(li||(li={}));async function Sx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await ye("plugin:event|unlisten",{event:t,eventId:n})}async function rc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return ye("plugin:event|listen",{event:t,target:c,handler:Mv(n)}).then(u=>async()=>Sx(t,u))}async function Ev(t,n,i){return rc(t,a=>{Sx(t,a.id),n(a)},i)}async function Dv(t,n){await ye("plugin:event|emit",{event:t,payload:n})}async function Av(t,n,i){await ye("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class kx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new lc(this.width*n,this.height*n)}[bi](){return{width:this.width,height:this.height}}toJSON(){return this[bi]()}}class lc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new kx(this.width/n,this.height/n)}[bi](){return{width:this.width,height:this.height}}toJSON(){return this[bi]()}}class Yr{constructor(n){this.size=n}toLogical(n){return this.size instanceof kx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof lc?this.size:this.size.toPhysical(n)}[bi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[bi]()}}class Cx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Wa(this.x*n,this.y*n)}[bi](){return{x:this.x,y:this.y}}toJSON(){return this[bi]()}}class Wa{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Cx(this.x/n,this.y/n)}[bi](){return{x:this.x,y:this.y}}toJSON(){return this[bi]()}}class zu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Cx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Wa?this.position:this.position.toPhysical(n)}[bi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[bi]()}}class cc extends Tv{constructor(n){super(n)}static async new(n,i,a){return ye("plugin:image|new",{rgba:xd(n),width:i,height:a}).then(c=>new cc(c))}static async fromBytes(n){return ye("plugin:image|from_bytes",{bytes:xd(n)}).then(i=>new cc(i))}static async fromPath(n){return ye("plugin:image|from_path",{path:n}).then(i=>new cc(i))}async rgba(){return ye("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return ye("plugin:image|size",{rid:this.rid})}}function xd(t){return t==null?null:typeof t=="string"?t:t instanceof cc?t.rid:t}var Sm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(Sm||(Sm={}));class Nv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var ay;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(ay||(ay={}));function km(){return new jx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function $h(){return ye("plugin:window|get_all_windows").then(t=>t.map(n=>new jx(n,{skip:!0})))}const Ih=["tauri://created","tauri://error"];class jx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||ye("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await $h()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return km()}static async getAll(){return $h()}static async getFocusedWindow(){for(const n of await $h())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:rc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Ev(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Ih.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Dv(n,i)}async emitTo(n,i,a){if(Ih.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Av(n,i,a)}_handleTauriEvent(n,i){return Ih.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return ye("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ye("plugin:window|inner_position",{label:this.label}).then(n=>new Wa(n))}async outerPosition(){return ye("plugin:window|outer_position",{label:this.label}).then(n=>new Wa(n))}async innerSize(){return ye("plugin:window|inner_size",{label:this.label}).then(n=>new lc(n))}async outerSize(){return ye("plugin:window|outer_size",{label:this.label}).then(n=>new lc(n))}async isFullscreen(){return ye("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ye("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ye("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ye("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ye("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ye("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ye("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ye("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ye("plugin:window|is_closable",{label:this.label})}async isVisible(){return ye("plugin:window|is_visible",{label:this.label})}async title(){return ye("plugin:window|title",{label:this.label})}async theme(){return ye("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ye("plugin:window|is_always_on_top",{label:this.label})}async center(){return ye("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===Sm.Critical?i={type:"Critical"}:i={type:"Informational"}),ye("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return ye("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return ye("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return ye("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return ye("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return ye("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return ye("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return ye("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return ye("plugin:window|maximize",{label:this.label})}async unmaximize(){return ye("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ye("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ye("plugin:window|minimize",{label:this.label})}async unminimize(){return ye("plugin:window|unminimize",{label:this.label})}async show(){return ye("plugin:window|show",{label:this.label})}async hide(){return ye("plugin:window|hide",{label:this.label})}async close(){return ye("plugin:window|close",{label:this.label})}async destroy(){return ye("plugin:window|destroy",{label:this.label})}async setDecorations(n){return ye("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return ye("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return ye("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return ye("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return ye("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return ye("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return ye("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return ye("plugin:window|set_size",{label:this.label,value:n instanceof Yr?n:new Yr(n)})}async setMinSize(n){return ye("plugin:window|set_min_size",{label:this.label,value:n instanceof Yr?n:n?new Yr(n):null})}async setMaxSize(n){return ye("plugin:window|set_max_size",{label:this.label,value:n instanceof Yr?n:n?new Yr(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return ye("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return ye("plugin:window|set_position",{label:this.label,value:n instanceof zu?n:new zu(n)})}async setFullscreen(n){return ye("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return ye("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return ye("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return ye("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return ye("plugin:window|set_icon",{label:this.label,value:xd(n)})}async setSkipTaskbar(n){return ye("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return ye("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return ye("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return ye("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return ye("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return ye("plugin:window|set_cursor_position",{label:this.label,value:n instanceof zu?n:new zu(n)})}async setIgnoreCursorEvents(n){return ye("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return ye("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return ye("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return ye("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return ye("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return ye("plugin:window|set_overlay_icon",{label:this.label,value:n?xd(n):void 0})}async setProgressBar(n){return ye("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return ye("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return ye("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return ye("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(li.WINDOW_RESIZED,i=>{i.payload=new lc(i.payload),n(i)})}async onMoved(n){return this.listen(li.WINDOW_MOVED,i=>{i.payload=new Wa(i.payload),n(i)})}async onCloseRequested(n){return this.listen(li.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Nv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(li.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Wa(d.payload.position)}})}),a=await this.listen(li.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Wa(d.payload.position)}})}),c=await this.listen(li.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Wa(d.payload.position)}})}),u=await this.listen(li.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(li.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(li.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(li.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(li.WINDOW_THEME_CHANGED,n)}}var ry;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(ry||(ry={}));var ly;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(ly||(ly={}));var cy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(cy||(cy={}));var uy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(uy||(uy={}));const Rv=3.7,$u=200,Cm=240,ps=540,Ps=176,Ph=32,wc=20,Bv=Cm/2,Gl=ps+Bv,Fr=18,Xr=18,Hh="#E6E6E6";function dy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Jr(t,n){return{id:n.fullSha,branchName:t,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,kind:n.kind}}function ha(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Iu(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ha(t).localeCompare(ha(n))}function bd(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ha(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ha(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ha(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const C=(g=a.get(w))!=null?g:[];C.push(b),a.set(w,C)}for(const b of a.values())b.sort(Iu);const c=t.filter(b=>{var w;return((w=i.get(ha(b)))!=null?w:0)===0}).sort(Iu),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ha(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const C=ha(S),k=((x=i.get(C))!=null?x:0)-1;i.set(C,k),k===0&&c.push(S)}c.sort(Iu)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ha(b))).sort(Iu)]}function Mx(t,n){var i;return bd(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Tx(t,n,i){return Mx(t,i)}function Lv(t,n,i){const a=t.parentBranch;return!a||a===t.name||!n.has(a)?null:a===i?i:a}function Vh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Ov(t,n){var u,d;if(!n||t.length===0)return Vh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Vh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Vh(t)}function Pu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function zv(t,n,i){var _,x,b,w,S,C,k;const a=Tx(t,i,n);if(a.length===0)return null;const c=a.map(M=>Jr(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return g||((k=(C=Ov(c,p!=null?p:void 0))!=null?C:c[0])!=null?k:null)}function jm(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Mx(t.name,i);if(a.length>0){const g=a.map(b=>Jr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function Ex(t,n,i={}){var X,q,se,ae;const c=new Map(t.map(G=>[G.name,G])),u=new Map,d=(G,ne)=>{var xe;return ne?((xe=i[G])!=null?xe:[]).some(z=>z.fullSha===ne||z.sha===ne||z.fullSha.startsWith(ne)||ne.startsWith(z.fullSha)||z.sha.startsWith(ne)||ne.startsWith(z.sha)):!1},h=new Map;for(const G of t){const ce=((X=i[G.name])!=null?X:[]).filter(xe=>xe.kind!=="branch-created").map(xe=>new Date(xe.date).getTime()).filter(xe=>Number.isFinite(xe)).sort((xe,z)=>xe-z)[0];ce!=null&&h.set(G.name,ce)}const p=G=>{const ne=h.get(G.name);return ne!=null?ne:dy(G).start},g=G=>{const ne=Lv(G,c,n),ce=jm(G,n,i);return ne&&ne!==n?!ce||d(ne,ce)?ne:n:!ne&&!ce?null:ne!=null?ne:n};for(const G of t){if(G.name===n)continue;const ne=(q=g(G))!=null?q:n,ce=(se=u.get(ne))!=null?se:[];ce.push(G),u.set(ne,ce)}for(const G of u.values())G.sort((ne,ce)=>p(ne)-p(ce)||ne.name.localeCompare(ce.name));const _=new Map,x=[],b=new Map,w=new Map;for(const G of Object.values(i))for(const ne of G){const ce=new Date(ne.date).getTime();Number.isFinite(ce)&&(ne.fullSha&&w.set(ne.fullSha,ce),ne.sha&&w.set(ne.sha,ce))}const S=(G,ne)=>({start:Math.min(G,ne),end:Math.max(G,ne)}),C=G=>{var B,H;const ne=S(p(G),dy(G).end),ce=[ne],xe=ne.start,z=jm(G,n,i),_e=z?w.get(z):void 0,K=new Date((H=(B=G.divergedFromDate)!=null?B:G.createdDate)!=null?H:G.lastCommitDate).getTime(),we=Number.isFinite(_e!=null?_e:NaN)?_e:Number.isFinite(K)?K:null;if(we==null)return ce;const Te=S(we,xe);return Te.start!==Te.end&&ce.push(Te),ce},k=Math.max(1,360*60*1e3*Rv),M=(G,ne)=>!(G.start-ne.end>=k||ne.start-G.end>=k),N=(G,ne)=>ne.some(ce=>{var xe;return((xe=b.get(G))!=null?xe:[]).some(z=>M(ce,z))}),A=G=>{var B,H;const ne=_.get(G);if(ne)return ne.column;const ce=c.get(G);if(!ce)return 0;if(G===n){const L={name:G,column:0,parentName:null};_.set(G,L),x.push(L);const oe=C(ce);return b.set(0,[...(B=b.get(0))!=null?B:[],...oe]),0}const xe=g(ce),z=xe?A(xe):0,_e=xe?z+1:1,K=C(ce);let we=_e;for(;N(we,K);)we+=1;const Te={name:G,column:we,parentName:xe};return _.set(G,Te),x.push(Te),b.set(we,[...(H=b.get(we))!=null?H:[],...K]),we};A(n);const E=t.filter(G=>!_.has(G.name)).sort((G,ne)=>p(G)-p(ne)||G.name.localeCompare(ne.name)),$=E.filter(G=>g(G)!=null),W=E.filter(G=>g(G)==null);for(const G of $)A(G.name);let P=Math.max(0,...x.map(G=>G.column))+1+1;for(const G of W){const ne=C(G);let ce=P;for(;N(ce,ne);)ce+=1;const xe={name:G.name,column:ce,parentName:null};_.set(G.name,xe),x.push(xe),b.set(ce,[...(ae=b.get(ce))!=null?ae:[],...ne]),P=ce+1}return x.sort((G,ne)=>G.column-ne.column||G.name.localeCompare(ne.name))}const Hu=2.25,Di=0,Uh=0,$v=1800*1e3,Iv=1440*60*1e3;function fy(t,n,i=new Map){var q,se,ae,G,ne,ce,xe,z,_e,K,we,Te,B;if(t.length===0)return new Map;const a=(H,L)=>!H||!L?!1:H===L||H.startsWith(L)||L.startsWith(H),c=bd(t),u=new Map;for(const H of t){const L=(q=H.parentSha)!=null?q:null;if(L){const oe=(se=u.get(L))!=null?se:new Set;oe.add(H.id),u.set(L,oe)}for(const oe of(ae=i.get(H.id))!=null?ae:[]){if(!oe)continue;const Le=(G=u.get(oe))!=null?G:new Set;Le.add(H.id),u.set(oe,Le)}}const d=new Map,h=new Map,p=new Map,g=new Set,_=new Map,x=new Map,b=new Map,w=new Map;for(const H of t){const L=(ne=_.get(H.branchName))!=null?ne:new Set;L.add(H.id),_.set(H.branchName,L);const oe=(xe=(ce=n.get(H.branchName))==null?void 0:ce.column)!=null?xe:0,Le=(z=x.get(H.id))!=null?z:new Set;Le.add(oe),x.set(H.id,Le);const Ee=new Set;H.parentSha&&Ee.add(H.parentSha),b.set(H.visualId,Ee);const Be=new Set(Ee);for(const et of(_e=i.get(H.id))!=null?_e:[])et&&Be.add(et);w.set(H.visualId,Be)}const S=new Set(Array.from(x.keys())),C=Array.from(S),k=new Map,M=H=>{const L=[];for(const oe of C)a(oe,H)&&L.push(oe);return L},N=new Map;for(const H of C)N.set(H,new Set);for(const H of t){const L=M(H.id);if(L.length===0)continue;const oe=(K=w.get(H.visualId))!=null?K:new Set,Le=new Set;for(const Ee of oe)for(const Be of M(Ee))Le.add(Be);for(const Ee of L){const Be=(we=N.get(Ee))!=null?we:new Set;for(const et of Le)Be.add(et);N.set(Ee,Be)}}const A=new Map,E=(H,L=new Set)=>{var Be;const oe=A.get(H);if(oe)return oe;if(L.has(H))return new Set;L.add(H);const Le=(Be=N.get(H))!=null?Be:new Set,Ee=new Set;for(const et of Le){Ee.add(et);for(const Ze of E(et,L))Ee.add(Ze)}return L.delete(H),A.set(H,Ee),Ee},$=(H,L)=>{if(a(H,L))return!0;const oe=M(H),Le=M(L);for(const Ee of oe){const Be=E(Ee);for(const et of Le)if(Be.has(et))return!0}for(const Ee of Le){const Be=E(Ee);for(const et of oe)if(Be.has(et))return!0}return!1};let W=1;const P=(H,L)=>{var ee,De,He,je,ot,ct,Qe,st,ft;const oe=(De=(ee=n.get(H.branchName))==null?void 0:ee.column)!=null?De:0,Le=(He=_.get(H.branchName))!=null?He:new Set,Be=!(!!H.parentSha&&Le.has(H.parentSha))&&H.parentSha?H.parentSha:null,et=Array.from(L).flatMap(ze=>M(ze).flatMap(qe=>{var I;return(I=k.get(qe))!=null?I:[]})),Ze=et.length>0?Math.max(...et)+1:1,Wt=(je=u.get(H.id))!=null?je:new Set,Mt=Array.from(Wt).flatMap(ze=>{var qe;return Array.from((qe=x.get(ze))!=null?qe:[])}).some(ze=>ze!==oe),$t=new Date(H.date).getTime(),tn=Math.max(Ze,1);let rn=null;for(let ze=tn;ze<W;ze+=1){const qe=(ot=h.get(ze))!=null?ot:[];if(qe.length===0||Mt||g.has(ze))continue;const I=(ct=w.get(H.visualId))!=null?ct:new Set;if(!(qe.some(We=>$(H.id,We.sha)?!0:Array.from(I).some(Ne=>a(Ne,We.sha)))||qe.some(We=>We.column===oe)||!Number.isFinite($t)||!qe.every(We=>{if(!Number.isFinite(We.time))return!1;const Ne=!!Be&&!!We.branchEntryParentSha&&Be===We.branchEntryParentSha?Iv:$v;return Math.abs(We.time-$t)<=Ne}))){rn=ze;break}}rn==null&&(rn=Math.max(Ze,W)),d.set(H.visualId,rn),rn>=W&&(W=rn+1);const de=(Qe=h.get(rn))!=null?Qe:[];de.push({visualId:H.visualId,sha:H.id,column:oe,time:$t,branchEntryParentSha:Be}),h.set(rn,de),Mt&&g.add(rn);for(const ze of L){const qe=(st=p.get(ze))!=null?st:[];qe.push(rn),p.set(ze,qe)}const Ye=(ft=k.get(H.id))!=null?ft:[];Ye.push(rn),k.set(H.id,Ye)};let X=[...c];for(;X.length>0;){const H=[];let L=!1;for(const oe of X){const Le=(Te=b.get(oe.visualId))!=null?Te:new Set;if(Array.from(Le).some(Be=>M(Be).some(et=>{var Ze,Wt;return((Wt=(Ze=k.get(et))==null?void 0:Ze.length)!=null?Wt:0)===0}))){H.push(oe);continue}P(oe,Le),L=!0}if(!L){const oe=H.shift();if(!oe)break;P(oe,(B=b.get(oe.visualId))!=null?B:new Set)}X=H}return d}function Pv(t,n){if(t.length===0)return[];const i=new Set(Array.from(n).filter(d=>d>=0&&d<t.length)),a=[];let c=[];const u=()=>{c.length!==0&&(a.push({entries:c}),c=[])};for(let d=0;d<t.length;d+=1)c.push(t[d]),i.has(d)&&u();return u(),a}function Hv(t,n){if(t.length===0)return[];const i=[];let a=[],c=null;const u=()=>{a.length!==0&&(i.push(a),a=[])};for(const d of t){const h=n.get(d.item.visualId),p=h!=null&&c!=null&&Math.abs(h-c)===1;a.length>0&&!p&&u(),a.push(d),c=h!=null?h:null}return u(),i}function Dx(t){var Jo,Ro,Ys,ts,So,ei,ko,Bo,ho,Es,Fs,$n,wi,Li,ti,to,Lo,Oo,Ds,ro,In,mo,Cs,ms,Si,Xs,lo,Zt,Wo,Ns,zo,Co,jo,Z,fe,ke,Se,at,ut,lt,Tt,Lt,Gn,ns,An,wn,Nn,Os,zt,Ut,gn,Jt,Rt;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchUniqueAheadCounts:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,isDebugOpen:x,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:S,orientation:C="horizontal"}=t,k=C==="horizontal",M=new Map(i.map(j=>[j.name,j])),N=new Map(n.map(j=>[j.name,j])),A=bd([...a.map(j=>{var Y,re,me;return{id:j.fullSha,branchName:d,message:(Y=j.prTitle)!=null?Y:j.sha,author:"",date:j.date,parentSha:(me=(re=j.parentShas)==null?void 0:re[0])!=null?me:null}}),...((Jo=h[d])!=null?Jo:[]).map(j=>Jr(d,j)),...c.map(j=>Jr(d,j)),...u.map(j=>Jr(d,j))]),E=new Map,$=new Map;for(const j of i){if(j.name===d)continue;const Y=Tx(j.name,p,h);$.set(j.name,Y);const re=bd(Y.map(Ie=>Jr(j.name,Ie)));if(re.length>0){E.set(j.name,re);continue}const me=(ts=(Ys=(Ro=j.presidesFromSha)!=null?Ro:j.divergedFromSha)!=null?Ys:j.createdFromSha)!=null?ts:null;if(!me)continue;const Ve={id:`BRANCH_HEAD:${j.name}:${me}`,branchName:j.name,message:`Branch ${j.name}`,author:j.lastCommitAuthor,date:(ei=(So=j.createdDate)!=null?So:j.divergedFromDate)!=null?ei:j.lastCommitDate,parentSha:null,kind:"branch-created"};E.set(j.name,[Ve])}const W=new Set(A.map(j=>j.id)),P=(ko=[...A].sort((j,Y)=>new Date(j.date).getTime()-new Date(Y.date).getTime()||j.id.localeCompare(Y.id))[0])!=null?ko:null,X=new Map(Array.from(E.entries()).map(([j,Y])=>[j,new Set(Y.map(re=>re.id))])),q=new Map;for(const j of i){if(j.name===d)continue;const Y=zv(j.name,h,p);if(Y){q.set(j.name,Y);continue}const re=(Bo=E.get(j.name))==null?void 0:Bo[0];if(re){const me=(Fs=(Es=(ho=j.presidesFromSha)!=null?ho:j.divergedFromSha)!=null?Es:j.createdFromSha)!=null?Fs:null;q.set(j.name,{...re,parentSha:me})}}const se=new Map;for(const[j,Y]of E.entries()){const re=Y.find(me=>me.kind!=="branch-created");re&&se.set(j,re)}const ae=new Map;for(const[j,Y]of E.entries()){const re=Y.filter(dt=>dt.kind!=="branch-created"),me=re.length>0?re:Y,Ve=new Set(me.map(dt=>dt.id)),Ie=me.find(dt=>!dt.parentSha||!Ve.has(dt.parentSha)),Ge=Ie!=null?Ie:me[0];Ge&&ae.set(j,Ge)}const G=new Map;for(const j of i){if(j.name===d)continue;const Y=($n=ae.get(j.name))!=null?$n:null,re=(wi=Y==null?void 0:Y.parentSha)!=null?wi:null;if(re){G.set(j.name,re);continue}const me=(ti=(Li=q.get(j.name))==null?void 0:Li.parentSha)!=null?ti:null;if(me){G.set(j.name,me);continue}const Ve=(Oo=(Lo=(to=j.presidesFromSha)!=null?to:j.divergedFromSha)!=null?Lo:j.createdFromSha)!=null?Oo:null;Ve&&G.set(j.name,Ve)}const ne=j=>{var Ie,Ge,dt,tt,Et,mn,yn;const Y=j.parentBranch;if(!(Y&&Y!==d&&Y!==j.name&&M.has(Y)))return Y!=null?Y:d;const me=(dt=(Ge=(Ie=G.get(j.name))!=null?Ie:j.presidesFromSha)!=null?Ge:j.divergedFromSha)!=null?dt:j.createdFromSha;if(me&&((tt=X.get(Y))!=null?tt:new Set).has(me))return Y;const Ve=(mn=(Et=q.get(j.name))==null?void 0:Et.parentSha)!=null?mn:null;return Ve&&((yn=X.get(Y))!=null?yn:new Set).has(Ve),Y},ce=j=>{var Ve,Ie,Ge,dt,tt,Et,mn,yn;const Y=q.get(j.name),re=(tt=(dt=(Ge=(Ie=(Ve=G.get(j.name))!=null?Ve:Y==null?void 0:Y.parentSha)!=null?Ie:j.presidesFromSha)!=null?Ge:j.divergedFromSha)!=null?dt:j.createdFromSha)!=null?tt:null;if(!j.parentBranch&&!re||!re)return null;if(ne(j)===d){if(W.has(re))return re;const Pn=(Et=Y==null?void 0:Y.parentSha)!=null?Et:null;return Pn&&W.has(Pn)?Pn:(yn=(mn=P==null?void 0:P.id)!=null?mn:Pn)!=null?yn:re}return W.has(re),re},xe=j=>ce(j),z=new Set;for(const j of i){const Y=xe(j);Y&&z.add(Y);const re=(Ds=G.get(j.name))!=null?Ds:null;re&&z.add(re)}const _e=[],K=new Map(Array.from(E.entries()).map(([j,Y])=>[j,new Set(Y.map(re=>re.id))])),we=new Set;for(const j of K.values())for(const Y of j)we.add(Y);for(const j of A)we.has(j.id)||_e.push({...j,visualId:`${d}:${j.id}`});for(const[j,Y]of E.entries())for(const re of Y)_e.push({...re,visualId:`${j}:${re.id}`});const Te=[..._e].sort((j,Y)=>new Date(j.date).getTime()-new Date(Y.date).getTime()||j.id.localeCompare(Y.id)),B=new Map;for(const j of a){const Y=j.fullSha;if(!Y)continue;const re=((ro=j.parentShas)!=null?ro:[]).filter(Ve=>!!Ve&&Ve!==Y);if(re.length===0)continue;const me=(In=B.get(Y))!=null?In:new Set;for(const Ve of re)me.add(Ve);B.set(Y,me)}const H=new Map;for(const j of i){if(j.name===d)continue;const Y=ce(j);Y&&H.set(j.name,Y)}const L=new Map;for(const j of Te){const Y=B.get(j.id);if(Y&&Y.size>0){const Ve=(mo=L.get(j.id))!=null?mo:new Set;for(const Ie of Y)Ve.add(Ie);L.set(j.id,Ve)}if(j.branchName===d)continue;const re=H.get(j.branchName);if(!re||re===j.id)continue;const me=(Cs=L.get(j.id))!=null?Cs:new Set;me.add(re),L.set(j.id,me)}const oe=fy(Te,N,L),Le=new Map;for(const j of Te){const Y=(ms=Le.get(j.branchName))!=null?ms:[];Y.push(j),Le.set(j.branchName,Y)}const Ee=new Map;for(const j of i){if(j.name===d)continue;const Y=ne(j),re=(Si=Ee.get(Y))!=null?Si:[];re.push(j),Ee.set(Y,re)}const Be=new Map,et=new Map,Ze=new Map,Wt=new Map,Vt=new Map,Mt=(Xs=S==null?void 0:S.headSha)!=null?Xs:null,$t=(lo=S==null?void 0:S.branchName)!=null?lo:null,tn=(j,Y)=>!Mt||$t&&$t!==j?!1:Y===Mt||Y.startsWith(Mt)||Mt.startsWith(Y),rn=(j,Y)=>{var dt;if(Y.length===0)return[];const re=[...Y].sort((tt,Et)=>new Date(tt.date).getTime()-new Date(Et.date).getTime()||tt.id.localeCompare(Et.id)),me=new Set,Ve=(dt=Ee.get(j))!=null?dt:[];if(Ve.length>0){const tt=re.map(Et=>new Date(Et.date).getTime());Ve.forEach(Et=>{var zs,gt,_o;const mn=(zs=G.get(Et.name))!=null?zs:null;if(mn){const js=re.findIndex(Mo=>Mo.id===mn||Mo.id.startsWith(mn)||mn.startsWith(Mo.id));if(js>=0){me.add(js);return}}const yn=new Date((_o=(gt=Et.divergedFromDate)!=null?gt:Et.createdDate)!=null?_o:Et.lastCommitDate).getTime();if(!Number.isFinite(yn)||tt.length===0)return;let Pn=-1,Mn=Number.POSITIVE_INFINITY,Xt=-1,Rn=Number.POSITIVE_INFINITY;for(let js=0;js<tt.length;js+=1){const Mo=tt[js];if(Number.isFinite(Mo))if(Mo<=yn){const To=yn-Mo;To<Mn&&(Mn=To,Pn=js)}else{const To=Mo-yn;To<Rn&&(Rn=To,Xt=js)}}const po=Pn>=0?Pn:Xt;po>=0&&me.add(po)})}re.forEach((tt,Et)=>{z.has(tt.id)&&Et<re.length-1&&me.add(Et),(tt.kind==="uncommitted"||tt.kind==="stash"||tt.id==="WORKING_TREE"||tt.id.startsWith("STASH:"))&&(Et>0&&me.add(Et-1),me.add(Et)),tn(j,tt.id)&&(Et>0&&me.add(Et-1),me.add(Et))});const Ie=Pv(re.map(tt=>({item:tt})),me),Ge=[];return Ie.forEach((tt,Et)=>{Hv(tt.entries,oe).forEach((yn,Pn)=>{var zs;const Mn=yn.map(gt=>gt.item);if(Mn.length===0)return;const Xt=`grid-clump-${j}-${Mn[0].id}-${Mn[Mn.length-1].id}-${Et}-${Pn}`,Rn=Mn[Mn.length-1].visualId,po={branchName:j,key:Xt,commitIds:Mn.map(gt=>gt.visualId),leadId:Rn,count:Mn.length};Ge.push(po),Wt.set(Xt,Rn),Vt.set(Xt,Mn.length);for(const gt of po.commitIds){et.set(gt,Xt);const _o=gt.split(":").slice(1).join(":"),js=(zs=Ze.get(_o))!=null?zs:[];js.includes(Xt)||js.push(Xt),Ze.set(_o,js)}})}),Ge};for(const[j,Y]of Le.entries())Be.set(j,rn(j,Y));const de=x?i.flatMap(j=>{var Ve,Ie,Ge,dt;const Y=(Ve=h[j.name])!=null?Ve:[],re=[...(Ie=$.get(j.name))!=null?Ie:[]].reverse(),me=new Set(((Ge=E.get(j.name))!=null?Ge:[]).map(tt=>tt.id));return[`Branch ${j.name}`,`  ahead=${(dt=p[j.name])!=null?dt:0} previews=${re.length} rendered=${me.size}`,...re.map(tt=>{const Et=me.has(tt.fullSha)?"visible":"hidden",mn=me.has(tt.fullSha)?"kept by render set":"dropped by render set";return`  ${Et} ${tt.fullSha.slice(0,7)} ${tt.message} [${mn}]`}),Y.length===0?"  no preview data":null].filter(tt=>tt!=null)}):[],Ye=x?Array.from(E.entries()).map(([j,Y])=>[`Branch debug ${j}`,...Y.map(re=>`  ${re.id.slice(0,7)} ${re.message}`)].join(`
`)):[],ee=oe,De=Cm/Hu,He=20/Hu,je=k?ps+De+He:$u+De+He,ot=k?$u+De+He:Gl,ct=Math.max(0,...Te.map(j=>{var Y;return(Y=ee.get(j.visualId))!=null?Y:1})),Qe=Te.map(j=>{var Ve,Ie;const Y=N.get(j.branchName),re=(Ve=ee.get(j.visualId))!=null?Ve:1,me=(Ie=Y==null?void 0:Y.column)!=null?Ie:0;return k?{commit:j,row:re,column:me,x:Xr+(re-1)*je,y:Fr+me*ot}:{commit:j,row:re,column:me,x:Xr+me*Gl,y:Fr+(ct-re)*je}}),st=b.trim().toLowerCase(),ft=st?Qe.filter(j=>{const Y=j.commit.id.toLowerCase(),re=j.commit.id.slice(0,7).toLowerCase(),me=j.commit.message.toLowerCase(),Ve=j.commit.branchName.toLowerCase();return Y.includes(st)||re.includes(st)||me.includes(st)||Ve.includes(st)}):Qe,ze=w&&(Zt=Qe.find(j=>j.commit.id===w))!=null?Zt:null,qe=new Set(ft.map(j=>j.commit.id)),I=(Wo=S==null?void 0:S.headSha)!=null?Wo:null,J=(()=>{var Y,re;const j=(Y=S==null?void 0:S.branchName)!=null?Y:null;return!I||!j?null:(re=et.get(`${j}:${I}`))!=null?re:null})(),he=new Set;for(const j of Be.values())for(const Y of j)Y.count>1&&Y.key!==J&&he.add(Y.key);const ve=[...Te].filter(j=>{var Ie;const Y=et.get(j.visualId);if(!Y)return!0;const re=Wt.get(Y),me=(Ie=Vt.get(Y))!=null?Ie:1,Ve=g.has(Y)||!he.has(Y)&&!_.has(Y);return me<=1||Ve||re===j.visualId}),We=fy(ve,N,L),Xe=Cm/Hu,Ne=20/Hu,Dt=k?ps+Xe+Ne:$u+Xe+Ne,Ot=k?$u+Xe+Ne:Gl,Yt=Math.max(0,...ve.map(j=>{var Y;return(Y=We.get(j.visualId))!=null?Y:1})),mt=ve.map(j=>{var Ve,Ie;const Y=N.get(j.branchName),re=(Ve=We.get(j.visualId))!=null?Ve:1,me=(Ie=Y==null?void 0:Y.column)!=null?Ie:0;return k?{commit:j,row:re,column:me,x:Xr+(re-1)*Dt,y:Fr+me*Ot}:{commit:j,row:re,column:me,x:Xr+me*Gl,y:Fr+(Yt-re)*Dt}}),Pe=new Map;for(const j of mt){const Y=(Ns=Pe.get(j.commit.id))!=null?Ns:[];Y.push(j),Pe.set(j.commit.id,Y)}const xt=new Map;for(const j of mt){const Y=et.get(j.commit.visualId);if(!Y)continue;const re=xt.get(Y);(!re||(k?j.x>re.x:j.y<re.y))&&xt.set(Y,j)}const ln=(j,Y)=>`${j.toFixed(1)} ${Y.toFixed(1)}`,_n=Math.max(0,...mt.map(j=>j.row)),rt=Math.max(0,...n.map(j=>j.column)),Kt=k?Xr*2+Math.max(0,_n-1)*Dt+ps+Ph+Ne:Xr*2+(rt+1)*Gl,Qt=k?Fr*2+rt*Ot+Ps+Ph+Ne:Fr*2+Math.max(0,_n-1)*Dt+Ps+Ph+Ne,Nt=[],zn=new Map(i.map(j=>{var re,me;const Y=new Date((me=(re=j.createdDate)!=null?re:j.divergedFromDate)!=null?me:j.lastCommitDate).getTime();return[j.name,Number.isFinite(Y)?Y:0]})),pt=j=>{var Y;return(Y=zn.get(j))!=null?Y:0},sn=[],nn=j=>{x&&sn.push(j)},Dn=new Set,Jn=new Map,Un=(j,Y)=>{var me;const re=(me=Jn.get(j))!=null?me:[];re.includes(Y)||re.push(Y),Jn.set(j,re)},fs=new Set,hs=new Set,jn=new Set,qn=(j,Y)=>{var Ve,Ie;if(!j)return null;const re=Pu(Pe,j,Y);if(re)return re;const me=(Ve=et.get(`${Y!=null?Y:d}:${j}`))!=null?Ve:et.get(j);return me&&(Ie=xt.get(me))!=null?Ie:null},dn=new Set;for(const j of i){const Y=xe(j);Y&&hs.add(Y);const re=(zo=G.get(j.name))!=null?zo:null;re&&jn.add(re)}const es=j=>{var Ve;const Y=qn(j.id,j.branchName);if(Y)return Y;const re=et.get(j.visualId);if(!re)return null;const me=Wt.get(re);return me&&(Ve=mt.find(Ie=>Ie.commit.id===me))!=null?Ve:null},nt=(j,Y)=>j?Pu(Pe,j,Y):null,Ts=(j,Y)=>k?{x:j.x-Di,y:j.y+Ps/2,face:"left"}:{x:j.x+ps/2,y:j.y+Ps+Di,face:"bottom"},vi=j=>k?{x:j.x+ps+Di,y:j.y+Ps/2,face:"right"}:{x:j.x+ps/2,y:j.y+Ps+Di,face:"bottom"},uo=(j,Y)=>j.column!==Y.column?!0:k?j.commit.branchName!==Y.commit.branchName:!1,io=(j,Y,re)=>{if(!k)return{x:Y?j.x+ps:j.x+ps/2,y:Y?j.y+Ps/2:j.y,face:Y?"right":"top"};if(!Y)return{x:j.x+ps+Di,y:j.y+Ps/2,face:"right"};if(re&&re.column===j.column&&re.commit.branchName!==j.commit.branchName){if(re.x>j.x)return{x:j.x+ps/2,y:j.y+Ps+Di,face:"bottom"};if(re.x<j.x)return{x:j.x+ps/2,y:j.y-Di,face:"top"}}return!re||re.column===j.column?{x:j.x+ps+Di,y:j.y+Ps/2,face:"right"}:re.column>j.column?{x:j.x+ps/2,y:j.y+Ps+Di,face:"bottom"}:{x:j.x+ps/2,y:j.y-Di,face:"top"}},fo=j=>k?{x:j.x+ps/2,y:j.y+Ps+Di,face:"bottom"}:{x:j.x+ps,y:j.y+Ps/2,face:"right"},ao=(j,Y)=>Pu(Pe,j,Y),Wn=(j,Y)=>nt(j,Y),Vs=[],Us=new Set;for(const j of a){const Y=(Co=j.targetBranch)!=null?Co:d,re=(fe=(Z=qn(j.fullSha,Y))!=null?Z:(jo=Pe.get(j.fullSha))==null?void 0:jo[0])!=null?fe:null;if(!re){nn({id:`merge:${j.fullSha}:target`,kind:"merge",parent:(Se=(ke=j.parentShas)==null?void 0:ke[1])!=null?Se:"unknown",child:j.fullSha,rendered:!1,reason:"missing merge target node"});continue}const me=(ut=(at=j.parentShas)==null?void 0:at.slice(1))!=null?ut:[];if(me.length===0){nn({id:`merge:${j.fullSha}:parents`,kind:"merge",parent:"unknown",child:j.fullSha,rendered:!1,reason:"no merged parent shas"});continue}for(const Ve of me){const Ie=`merge:${j.fullSha}:${Ve!=null?Ve:"unknown"}`;if(!Ve||Ve===j.fullSha){nn({id:Ie,kind:"merge",parent:Ve!=null?Ve:"unknown",child:j.fullSha,rendered:!1,reason:Ve?"merged parent equals merge sha":"missing merged parent sha"});continue}const Ge=(lt=Pu(Pe,Ve))!=null?lt:null;if(!Ge){nn({id:Ie,kind:"merge",parent:Ve,child:j.fullSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ge.commit.id===re.commit.id){nn({id:Ie,kind:"merge",parent:Ge.commit.id,child:re.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let dt,tt,Et;const mn=k?re.x+ps/2:re.x+ps-Uh,yn=k?re.y+Ps+Uh:re.y+Ps/2,Pn=k?"bottom":"right";k?(dt=Ge.x+ps+Uh,tt=Ge.y+Ps/2,Et="right"):(dt=Ge.x+ps/2,tt=Ge.y,Et="top");const Mn=`${dt.toFixed(2)}:${tt.toFixed(2)}:${mn.toFixed(2)}:${yn.toFixed(2)}`;if(Us.has(Mn)){nn({id:Ie,kind:"merge",parent:Ge.commit.id,child:re.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Us.add(Mn),Vs.push({id:Ie,fromX:dt,fromY:tt,toX:mn,toY:yn,fromFace:Et,toFace:Pn,zIndex:pt(Ge.commit.branchName)}),nn({id:Ie,kind:"merge",parent:Ge.commit.id,child:re.commit.id,rendered:!0,reason:`merge connector rendered to ${Y}`})}}const Ws=new Set;for(const j of i){if(j.name===d)continue;const Y=q.get(j.name);if(!Y)continue;const re=ne(j),me=ao((Tt=G.get(j.name))!=null?Tt:"",re),Ve=(Lt=se.get(j.name))!=null?Lt:Y,Ie=(Gn=Wn(Ve.id,j.name))!=null?Gn:es(Ve);if(!me||!Ie||me.commit.id===Ie.commit.id){const mn=et.get(`${j.name}:${Y.id}`),yn=et.get(`${j.name}:${Ve.id}`),Pn=!!mn&&!he.has(mn),Mn=!!yn&&!he.has(yn),Xt=!!mn&&!g.has(mn)&&(Pn?_.has(mn):!0),Rn=!!yn&&!g.has(yn)&&(Mn?_.has(yn):!0);!me&&!Xt&&Un((ns=Ie==null?void 0:Ie.commit.id)!=null?ns:Y.id,"Missing parent node"),!Ie&&!Rn&&Un(Y.id,"Missing child node"),nn({id:`branch:${(An=me==null?void 0:me.commit.id)!=null?An:"null"}->${(wn=Ie==null?void 0:Ie.commit.id)!=null?wn:"null"}`,kind:"branch",parent:(Nn=me==null?void 0:me.commit.id)!=null?Nn:"null",child:(Os=Ie==null?void 0:Ie.commit.id)!=null?Os:"null",rendered:!1,reason:me?Ie?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Ge=`branch:${me.commit.id}->${Ie.commit.id}`;if(dn.has(Ge)){nn({id:Ge,kind:"branch",parent:me.commit.id,child:Ie.commit.id,rendered:!1,reason:"duplicate connector key"});continue}dn.add(Ge),fs.add(me.commit.id);const dt=uo(me,Ie);me.commit.branchName!==Ie.commit.branchName&&Ws.add(me.commit.id);const tt=fo(me),Et=vi(Ie);Nt.push({id:Ge,fromX:tt.x,fromY:tt.y,toX:Et.x,toY:Et.y,fromFace:tt.face,toFace:Et.face,zIndex:pt(Ie.commit.branchName)}),nn({id:Ge,kind:"branch",parent:me.commit.id,child:Ie.commit.id,rendered:!0,reason:dt?"branch connector rendered":k?"horizontal connector rendered":"vertical connector rendered"})}for(const j of mt){const Y=(zt=j.commit.parentSha)!=null?zt:null;if(!Y)continue;const re=ao(Y,j.commit.branchName);if(!re){const tt=(Ut=et.get(`${j.commit.branchName}:${Y}`))!=null?Ut:et.get(Y),Et=!!tt&&!he.has(tt);!!tt&&!g.has(tt)&&(Et?_.has(tt):!0)||Un(j.commit.id,"Missing parent node"),nn({id:`${j.commit.visualId}->${Y}`,kind:"ancestry",parent:Y,child:j.commit.id,rendered:!1,reason:"missing parent node"});continue}const me=j;if(me.commit.id===re.commit.id){Un(me.commit.id,"Parent and child resolve to the same node"),nn({id:`${re.commit.id}->${me.commit.id}`,kind:"ancestry",parent:re.commit.id,child:me.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${j.commit.branchName}:${(gn=re.commit.visualId)!=null?gn:re.commit.id}->${me.commit.visualId}`;if(dn.has(Ve)){Un(re.commit.id,"Duplicate connector key"),Un(me.commit.id,"Duplicate connector key"),nn({id:Ve,kind:"ancestry",parent:re.commit.id,child:me.commit.id,rendered:!1,reason:"duplicate connector key"});continue}dn.add(Ve),fs.add(re.commit.id);const Ie=uo(re,me),Ge=io(re,Ie,me),dt=Ts(me);Nt.push({id:Ve,fromX:Ge.x,fromY:Ge.y,toX:dt.x,toY:dt.y,fromFace:Ge.face,toFace:dt.face,zIndex:pt(me.commit.branchName)}),nn({id:Ve,kind:"ancestry",parent:re.commit.id,child:me.commit.id,rendered:!0,reason:Ie?"ancestry connector rendered":k?"horizontal ancestry rendered":"vertical ancestry rendered"}),Dn.add(re.commit.id),Dn.add(me.commit.id)}const fn=new Map;for(const j of mt){const Y=(Jt=fn.get(j.commit.branchName))!=null?Jt:[];Y.push(j),fn.set(j.commit.branchName,Y)}for(const[j,Y]of fn.entries()){if(Y.length<2)continue;const re=[...Y].sort((me,Ve)=>{var dt,tt,Et,mn,yn,Pn,Mn,Xt;const Ie=Number.isFinite(new Date((tt=(dt=me==null?void 0:me.commit)==null?void 0:dt.date)!=null?tt:"").getTime())?new Date(me.commit.date).getTime():0,Ge=Number.isFinite(new Date((mn=(Et=Ve==null?void 0:Ve.commit)==null?void 0:Et.date)!=null?mn:"").getTime())?new Date(Ve.commit.date).getTime():0;return Ie-Ge||((Pn=(yn=me==null?void 0:me.commit)==null?void 0:yn.id)!=null?Pn:"").localeCompare((Xt=(Mn=Ve==null?void 0:Ve.commit)==null?void 0:Mn.id)!=null?Xt:"")});for(let me=1;me<re.length;me+=1){const Ve=re[me-1],Ie=re[me];if(Ve.commit.id===Ie.commit.id)continue;const Ge=(Rt=Ie.commit.parentSha)!=null?Rt:null;if(Ge&&ao(Ge,Ie.commit.branchName))continue;const dt=`chain:${j}:${Ve.commit.id}->${Ie.commit.id}`;if(dn.has(dt)){Un(Ve.commit.id,"Duplicate branch chain connector"),Un(Ie.commit.id,"Duplicate branch chain connector"),nn({id:dt,kind:"ancestry",parent:Ve.commit.id,child:Ie.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}dn.add(dt);const tt=uo(Ve,Ie),Et=io(Ve,tt,Ie),mn=Ts(Ie);Nt.push({id:dt,fromX:Et.x,fromY:Et.y,toX:mn.x,toY:mn.y,fromFace:Et.face,toFace:mn.face,zIndex:pt(Ie.commit.branchName)}),nn({id:dt,kind:"ancestry",parent:Ve.commit.id,child:Ie.commit.id,rendered:!0,reason:"branch chain rendered"}),Dn.add(Ve.commit.id),Dn.add(Ie.commit.id)}}return{branchByName:M,laneByName:N,mainCommits:A,branchCommitsByLane:E,branchPreviewSets:$,allCommits:Te,clustersByBranch:Be,clusterKeyByCommitId:et,clusterKeyBySha:Ze,leadByClusterKey:Wt,clusterCounts:Vt,debugRows:de,branchDebugRows:Ye,nodes:Qe,normalizedSearchQuery:st,matchingNodes:ft,matchingNodeIds:qe,focusedNode:ze,checkedOutClusterKey:J,defaultCollapsedClumps:he,visibleCommitsList:ve,renderNodes:mt,visibleNodesBySha:Pe,visibleNodeByClusterKey:xt,pointFormatter:ln,contentWidth:Kt,contentHeight:Qt,connectors:Nt,mergeConnectors:Vs,connectorDecisions:sn,nodeWarnings:Jn,connectorParentShas:fs,branchStartShas:hs,branchOffNodeShas:jn,crossBranchOutgoingShas:Ws,commitIdsWithRenderedAncestry:Dn,branchBaseCommitByName:q,firstBranchCommitByName:ae}}const Vv=8,Uv=44,hy=120,my=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Ax(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<Vv){const W=d/_,P=h/_,X=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+W*X,c1y:n+P*X,c2x:i-W*X,c2y:a-P*X}}if(Math.min(p,g)<Uv){const W=d/_,P=h/_,X=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+W*X,c1y:n+P*X,c2x:i-W*X,c2y:a-P*X}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),C=Math.min(120,g*.32),k=Math.min(160,g*.42),M=my(c),N=my(u);if(!(M==="v"&&N==="h"||M==="v"&&N==null&&g>=p||M==null&&N==="h"&&g>=p||M==="v"&&N==="v"||M==null&&N==null&&g>p)){const W=i,P=n;return{kind:"elbowH",cx:W,cy:P,s1c1x:t+x*w,s1c1y:n,s1c2x:W-x*S,s1c2y:P,s2c1x:W,s2c1y:P+b*C,s2c2x:i,s2c2y:a-b*k}}const E=t,$=a;return{kind:"elbowV",cx:E,cy:$,s1c1x:t,s1c1y:n+b*k,s1c2x:E,s1c2y:$-b*C,s2c1x:E+x*w,s2c1y:$,s2c2x:i-x*S,s2c2y:a}}function Wv(t,n,i,a,c,u){const d=Ax(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function py(t,n,i,a,c,u,d){const h=Ax(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(hy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,C=a>=n?1:-1,k=h.cx-S*w,M=h.cy+C*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,M)}`,`C ${c(h.cx,M+C*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(hy,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const lp=2.25,Kl=lp/2,Yv=.45,Fv=.01,ma=lp,vd=10,Xv=-100,_y=0,gy=.9,qv=.9,yy=.001,Wh=.001,Gv=12,Kv=ps+48;function eo(...t){return t.filter(Boolean).join(" ")}function Qv(t){return Math.max(Yv,Math.min(lp,t))}function Zv(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Nx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Jv(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function ew(t,n,i,a,c,u,d){const h=Wv(t,n,i,a,u,d),p=Jv(h);return Nx(c,p)}function Rx(t,n){return{left:t.x,top:t.y+n,right:t.x+ps,bottom:t.y+wc+Ps+4}}function tw(t,n){const i=Kv,a=Math.max(120,Math.ceil(wc+Ps+4-n+24)),c=new Map;for(const u of t){const d=Rx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let C=c.get(S);C||(C=new Set,c.set(S,C)),C.add(x)}}return{cellW:i,cellH:a,buckets:c}}function nw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const C=d.get(`${w},${S}`);if(C)for(const k of C)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const C=Rx(S,a);Nx(n,C)&&b.add(w)}return b}function xy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/ma;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function sw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function by(t,n,i){const a=n/ma;return!Number.isFinite(a)||a<=0?t:sw(t,100/a)}function vy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function wo(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Mm(t,n){if(n){const i=vy(n),a=vy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Yh(t,n){return t.pathExists===!1?!1:Mm(t,n)}function ow(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function iw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),r.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function aw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:x,selectedVisibleCommitShas:b,iconScaleStyle:w,normalizedSearchQuery:S,matchingNodeIds:C,focusedNode:k,renderNodes:M,shouldRenderNode:N,manuallyOpenedClumps:A,manuallyClosedClumps:E,defaultCollapsedClumps:$,leadByClusterKey:W,clusterKeyByCommitId:P,clusterCounts:X,commitIdsWithRenderedAncestry:q,nodeWarnings:se,connectorParentShas:ae,branchStartShas:G,branchOffNodeShas:ne,crossBranchOutgoingShas:ce,branchBaseCommitByName:xe,branchStartAccentClass:z,connectorParentAccentClass:_e,commitCornerRadiusPx:K,lineStrokeWidth:we,pointFormatter:Te,connectors:B,mergeConnectors:H,cullConnectorPath:L,flushCameraReactTick:oe,setManuallyOpenedClumps:Le,setManuallyClosedClumps:Ee,onCommitCardClick:Be,unpushedCommitShasSetByBranch:et,checkedOutHeadSha:Ze}){const[Wt,Vt]=y.useState(new Set),Mt=y.useRef(null);y.useEffect(()=>{const de=new Set;X.forEach((De,He)=>{(A.has(He)||!$.has(He)&&!E.has(He))&&de.add(He)});const Ye=Mt.current;if(Ye==null){Mt.current=de;return}const ee=[];if(de.forEach(De=>{Ye.has(De)||ee.push(De)}),ee.length>0){Vt(He=>{const je=new Set(He);return ee.forEach(ot=>je.add(ot)),je});const De=window.setTimeout(()=>{Vt(He=>{const je=new Set(He);return ee.forEach(ot=>je.delete(ot)),je})},260);return Mt.current=de,()=>{window.clearTimeout(De)}}Mt.current=de},[X,$,E,A]);const $t=(de,Ye)=>{const ee=Ye.zIndex-de.zIndex;if(ee!==0)return ee;const De=Math.min(de.fromY,de.toY),He=Math.min(Ye.fromY,Ye.toY),je=De-He;return je!==0?je:de.id.localeCompare(Ye.id)},tn=H.filter(de=>L(de)).sort($t),rn=B.filter(de=>L(de)).sort($t);return r.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:r.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:r.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[M.filter(de=>N(de)).map(de=>{var We,Xe,Ne,Dt,Ot;const Ye=P.get(de.commit.visualId),ee=Ye?A.has(Ye)||!$.has(Ye)&&!E.has(Ye):!1,De=Ye?W.get(Ye)===de.commit.visualId:!1,He=Ye!=null&&ee&&!De&&Wt.has(Ye),je=Ye&&(We=X.get(Ye))!=null?We:1,ot=q.has(de.commit.id),ct=(Xe=se.get(de.commit.id))!=null?Xe:[],Qe=ct.length>0&&!ot,st=b.includes(de.commit.id),ft=de.commit.id==="WORKING_TREE"||de.commit.kind==="uncommitted",ze=de.commit.kind==="stash"||de.commit.id.startsWith("STASH:"),qe=ft||((Dt=(Ne=et.get(de.commit.branchName))==null?void 0:Ne.has(de.commit.id))!=null?Dt:!1),J=(ft||Ze!=null&&de.commit.id===Ze)&&!st,he=J?"text-[#38BDF2]":st?"text-[#158EFC]":"text-muted-foreground",ve=J?{color:"#38BDF2"}:st?{color:"#158EFC"}:void 0;return r.jsxs(iw,{fadeIn:He,dataCommitCard:"true",className:eo("group absolute z-20 cursor-pointer",S&&!C.has(de.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&C.has(de.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===de.commit.id?"z-30 scale-[1.015]":""),style:{left:de.x,top:de.y,width:ps,height:wc+Ps+4,overflow:"visible"},onClick:Yt=>Be(Yt,de),children:[r.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:r.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[r.jsxs("div",{className:eo("min-w-0 h-4 flex-1 text-sm font-medium leading-none",he,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:ve,children:[de.commit.branchName,"/",de.commit.id.slice(0,7)]}),De&&je>1?r.jsx("button",{type:"button",onMouseDown:Yt=>{Yt.stopPropagation()},onClick:Yt=>{if(Yt.stopPropagation(),Yt.preventDefault(),!Ye)return;!$.has(Ye)?(Le(Pe=>{if(!Pe.has(Ye))return Pe;const xt=new Set(Pe);return xt.delete(Ye),xt}),Ee(Pe=>{const xt=new Set(Pe);return xt.has(Ye)?xt.delete(Ye):xt.add(Ye),xt})):(Ee(Pe=>{if(!Pe.has(Ye))return Pe;const xt=new Set(Pe);return xt.delete(Ye),xt}),Le(Pe=>{const xt=new Set(Pe);return xt.has(Ye)?xt.delete(Ye):xt.add(Ye),xt})),oe()},className:eo("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",he),style:ve,children:ee?r.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${je}`}):null]})}),r.jsx("div",{className:eo("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",J&&!qe&&!ze?"bg-[#EBF7FE]":st&&!qe&&!ze?"bg-[#E5F0FF]":qe||ze?"bg-transparent":"bg-[#F5F5F5]",ze||ft?"border-dashed":"",ne.has(de.commit.id)||G.has(de.commit.id)||ce.has(de.commit.id)?z:ae.has(de.commit.id)?_e:((Ot=xe.get(de.commit.branchName))==null?void 0:Ot.id)===de.commit.id?"border-amber-500":Qe?"border-red-500":"",(S&&C.has(de.commit.id)&&!d,"")),style:{top:0,borderWidth:`${ze||ft?we*(2/1.5):we}px`,borderColor:J?"#38BDF2":st?"#158EFC":Hh,borderTopLeftRadius:0,borderTopRightRadius:`${K}px`,borderBottomRightRadius:`${K}px`,borderBottomLeftRadius:`${K}px`},children:r.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[r.jsxs("div",{className:"min-h-0 flex-1",children:[r.jsx("div",{className:eo("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",he,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:ve,children:De&&ee?de.commit.message:De&&je>1?`${de.commit.message} +${je-1}`:de.commit.message}),r.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Qe?r.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:ct.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?r.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[r.jsxs("div",{className:eo("text-sm font-medium",he),style:ve,children:["@",de.commit.author]}),r.jsx("div",{className:eo("text-sm font-medium",he),style:ve,children:new Date(de.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(k==null?void 0:k.commit.id)===de.commit.id&&S?r.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:w,children:"Search result"}):null]})})]},de.commit.visualId)}),r.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[tn.map(de=>{const{fromX:Ye,fromY:ee,toX:De,toY:He}=de,je=py(Ye,ee,De,He,Te,de.fromFace,de.toFace);return r.jsx("path",{d:je,fill:"none",stroke:Hh,strokeWidth:we,strokeLinecap:"round",strokeLinejoin:"round"},de.id)}),rn.map(de=>{const{fromX:Ye,fromY:ee,toX:De,toY:He}=de,je=py(Ye,ee,De,He,Te,de.fromFace,de.toFace);return r.jsx("path",{d:je,fill:"none",stroke:Hh,strokeWidth:we,strokeLinecap:"round",strokeLinejoin:"round"},de.id)})]})]})})})}function rw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:C,onCreateBranchFromNode:k,onMergeRefsIntoBranch:M,selectedPushTargets:N,selectedPushLabel:A,canPushCurrentBranch:E,pushCurrentBranchLabel:$,pushableRemoteBranchCount:W,deletableSelectionCount:P,canCreateRootBranch:X,selectedCommitTargetOption:q,mergeInProgress:se,setMergeTargetCommitSha:ae,worktrees:G,currentRepoPath:ne,worktreeMenuOpen:ce,setWorktreeMenuOpen:xe,onSwitchToWorktree:z,onRemoveWorktree:_e,removeWorktreeInProgress:K,setCommitDialogOpen:we,setDeleteConfirmOpen:Te,setNewBranchDialogOpen:B}){const H=t.length>0;return r.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[r.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[r.jsx("button",{type:"button",onClick:()=>we(!0),disabled:!g||i||H||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),r.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||H||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),r.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||H||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),r.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!E||H||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),r.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||W<2||H||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),r.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(N.map(L=>({branchName:L.branchName,targetSha:L.targetSha})))),disabled:!S||N.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:N.length>0?A:"Select commits to push",children:N.length>0?A:"Push selected"}),r.jsx("button",{type:"button",onClick:()=>Te(!0),disabled:!C||P===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),r.jsx("button",{type:"button",onClick:()=>B(!0),disabled:!k&&!X||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&q.options.length>0&&q.targetBranch&&M?r.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[r.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),q.options.map(L=>{const oe=L.targetBranch===q.targetBranch;return r.jsx("button",{type:"button",onClick:()=>ae(L.targetSha),className:eo("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",oe?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:L.targetBranch},`merge-${L.targetBranch}`)}),r.jsx("button",{type:"button",onClick:()=>void M(q.sources,q.targetBranch),disabled:q.sources.length===0||se,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:se?"Merging...":"Confirm"})]}):null,G.length>0&&(z||_e)?r.jsxs("div",{className:"pointer-events-auto relative",children:[r.jsxs("button",{type:"button",onClick:()=>xe(L=>!L),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[G.length," ",G.length===1?"Worktree":"Worktrees"]}),ce?r.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:G.map(L=>{var oe;return r.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:L.path,children:Mm(L,ne)?ow(L.path):"This window"}),r.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(oe=L.branchName)!=null?oe:"detached"," • ",L.headSha.slice(0,7)]})]}),Mm(L,ne)?r.jsxs("div",{className:"flex items-center gap-1",children:[z?r.jsx("button",{type:"button",onClick:()=>{xe(!1),z(L.path)},disabled:K||L.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,_e?r.jsx("button",{type:"button",onClick:()=>void _e(L.path,L.isPrunable),disabled:K,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:K?"...":"Remove"}):null]}):null]},L.path)})}):null]}):null]})}function lw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:w}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:r.jsx("button",{type:"button",onClick:n,className:eo("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?r.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),r.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),r.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:r.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function cw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:C,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:N,selectedCommitCanCreateBranch:A,createBranchFromNodeInProgress:E}){return r.jsxs(r.Fragment,{children:[t?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),r.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),r.jsx("textarea",{value:n,onChange:$=>i($.target.value),onKeyDown:$=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),r.jsx("div",{className:"mt-3 space-y-1.5",children:h.map($=>r.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:$},$))}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),r.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[r.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:eo("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),r.jsx("button",{type:"button",onClick:()=>k("new-root"),className:eo("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),r.jsx("input",{value:w,onChange:$=>C($.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:N,disabled:!w.trim()||E||S==="from-selected-node"&&!A,className:eo("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:E?"Creating...":"Create"})]})]})}):null]})}function uw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(Kl),c=y.useRef({panX:0,panY:0,zoom:Kl}),u=y.useRef(null),d=y.useRef(Kl),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(Kl),[b,w]=y.useState(0),S=y.useRef(null),C=y.useRef(0),k=y.useCallback(()=>{const q=t.current;if(!q)return null;const se=q.getBoundingClientRect(),ae=getComputedStyle(q),G=Number.parseFloat(ae.borderLeftWidth)||0,ne=Number.parseFloat(ae.borderTopWidth)||0,ce=Number.parseFloat(ae.paddingLeft)||vd,xe=Number.parseFloat(ae.paddingTop)||vd;return{x:se.left+G+ce,y:se.top+ne+xe}},[t]),M=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(q=>q+1)}),C.current=performance.now()},[]),N=y.useCallback((q,se,ae)=>{const G=c.current;c.current={panX:q,panY:se,zoom:ae};const ne=n.current;if(ne&&(ne.style.transform=`translate3d(${q}px, ${se}px, 0) scale(${ae/ma})`),Math.abs(d.current-ae)>Wh&&(d.current=ae,x(ae)),Math.abs(ae-G.zoom)>Wh){M();return}const z=performance.now()-C.current;if(z>=_y){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},_y-z)},[M,n]),A=y.useRef(null),E=y.useCallback(()=>{u.current!=null||!A.current||(u.current=window.requestAnimationFrame(A.current))},[]),$=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),W=y.useCallback((q,se,ae)=>{i.current={x:q,y:se},a.current=ae,$(),E()},[$,E]);A.current=()=>{u.current=null;const q=c.current,se=i.current.x,ae=i.current.y,G=a.current,ne=Math.abs(se-q.panX)<=yy?se:q.panX+(se-q.panX)*gy,ce=Math.abs(ae-q.panY)<=yy?ae:q.panY+(ae-q.panY)*gy,xe=Math.abs(G-q.zoom)<=Wh?G:q.zoom+(G-q.zoom)*qv;N(ne,ce,xe),ne!==se||ce!==ae||xe!==G?A.current&&(u.current=window.requestAnimationFrame(A.current)):M()};const P=y.useCallback((q,se,ae)=>{const G=Qv(ae),ne=c.current,ce=k();if(!ce){W(i.current.x,i.current.y,G);return}const xe=q-ce.x,z=se-ce.y,_e=ne.zoom/ma,K=G/ma,we=(xe-ne.panX)/_e,Te=(z-ne.panY)/_e;W(xe-we*K,z-Te*K,G)},[k,W]),X=y.useCallback(q=>{if(q.preventDefault(),q.ctrlKey||q.metaKey){const se=Math.exp(-q.deltaY*Fv);P(q.clientX,q.clientY,a.current*se);return}W(i.current.x-q.deltaX,i.current.y-q.deltaY,a.current)},[W,P]);return y.useLayoutEffect(()=>(N(0,0,Kl),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[N]),y.useLayoutEffect(()=>{const q=n.current;if(!q)return;const se=c.current;q.style.transform=`translate3d(${se.panX}px, ${se.panY}px, 0) scale(${se.zoom/ma})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:W,handleWheel:X}}function dw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function fw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[C,k]=y.useState(null),M=y.useCallback(A=>{const E=t.current,$=i();if(!E||!$)return[];const W=E.getBoundingClientRect(),P=n.current.zoom/ma;if(P<=0)return[];const X=[],q=A.left,se=A.left+A.width,ae=A.top,G=A.top+A.height;for(const ne of a){if(!c(ne))continue;const ce=$.x+n.current.panX+ne.x*P-W.left,xe=$.y+n.current.panY+ne.y*P-W.top,z=ce+ps*P,_e=xe+(wc+Ps)*P;!(z<q||ce>se||_e<ae||xe>G)&&X.push(ne.commit.id)}return X},[i,a,n,t,c]),N=y.useCallback(A=>{if(A.button!==0)return;const E=A.target;if(E!=null&&E.closest("[data-commit-card]")||E!=null&&E.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;A.preventDefault();const W=$.getBoundingClientRect(),P=A.clientX-W.left,X=A.clientY-W.top;d.current={startX:P,startY:X,currentX:P,currentY:X,additive:A.metaKey||A.ctrlKey},h.current=!1,p.current=A.metaKey||A.ctrlKey?w:[],_(!0),b({left:P,top:X,width:0,height:0})},[t,w]);return y.useEffect(()=>{const A=$=>{var ae;const W=d.current;if(!W)return;const P=t.current;if(!P)return;const X=P.getBoundingClientRect();W.currentX=$.clientX-X.left,W.currentY=$.clientY-X.top,!h.current&&(Math.abs(W.currentX-W.startX)>2||Math.abs(W.currentY-W.startY)>2)&&(h.current=!0);const q=dw(W);b(q);const se=M(q);S(W.additive?Array.from(new Set([...p.current,...se])):Array.from(new Set(se))),W.additive||k((ae=se[se.length-1])!=null?ae:null)},E=()=>{if(d.current){const $=h.current;d.current=null,h.current=!1,_(!1),b(null),$||(S([]),k(null));return}u()};return window.addEventListener("mousemove",A),window.addEventListener("mouseup",E),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",E)}},[M,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:C,setMergeTargetCommitSha:k,startMarqueeDrag:N}}function wy({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:C,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:N,onPushCommitTargets:A,pushInProgress:E=!1,onDeleteSelection:$,deleteInProgress:W=!1,worktrees:P=[],currentRepoPath:X,onRemoveWorktree:q,removeWorktreeInProgress:se=!1,onSwitchToWorktree:ae,onStashLocalChanges:G,stashInProgress:ne=!1,stashDisabled:ce=!1,onCommitLocalChanges:xe,commitInProgress:z=!1,commitDisabled:_e=!1,onStageAllChanges:K,stageInProgress:we=!1,onCreateBranchFromNode:Te,onCreateRootBranch:B,createBranchFromNodeInProgress:H=!1,orientation:L="horizontal",branchCommitPreviews:oe={},branchUniqueAheadCounts:Le={},gridSearchQuery:Ee="",gridSearchJumpToken:Be=0,gridFocusSha:et=null,checkedOutRef:Ze=null,onGridSearchResultCountChange:Wt,onGridSearchFocusChange:Vt,onInteractionChange:Mt,manuallyOpenedClumps:$t,manuallyClosedClumps:tn,setManuallyOpenedClumps:rn,setManuallyClosedClumps:de,layoutModel:Ye}){var _o,js,Mo,To,Sn,gs,$o,Yo,Eo,Oi;const ee=y.useRef(null),De=y.useRef(null),He=y.useRef(null),[je,ot]=y.useState(!1),[ct,Qe]=y.useState(!1),[st,ft]=y.useState(""),[ze,qe]=y.useState(!1),[I,J]=y.useState(!1),[he,ve]=y.useState(""),[We,Xe]=y.useState("from-selected-node"),[Ne,Dt]=y.useState(()=>new Set),[Ot,Yt]=y.useState(()=>new Set),mt=$t!=null?$t:Ne,Pe=tn!=null?tn:Ot,xt=rn!=null?rn:Dt,ln=de!=null?de:Yt,[_n,rt]=y.useState(!1),[Kt,Qt]=y.useState(null),[Nt,zn]=y.useState(null),{isCameraMoving:pt,renderedZoom:sn,cameraRenderTick:nn,renderedCameraRef:Dn,interactionIdleTimeoutRef:Jn,getTransformLayerOriginScreen:Un,flushCameraReactTick:fs,syncCamera:hs,handleWheel:jn}=uw({mapPadHostRef:De,transformLayerRef:He}),qn=y.useMemo(()=>Ex(t,d,oe),[t,d,oe]),dn=y.useMemo(()=>Dx({lanes:qn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:oe,branchUniqueAheadCounts:Le,manuallyOpenedClumps:mt,manuallyClosedClumps:Pe,isDebugOpen:_n,gridSearchQuery:Ee,gridFocusSha:et,checkedOutRef:Ze!=null?Ze:null,orientation:L}),[qn,t,n,i,a,d,oe,Le,mt,Pe,_n,Ee,et,(_o=Ze==null?void 0:Ze.headSha)!=null?_o:null,(js=Ze==null?void 0:Ze.branchName)!=null?js:null,L]),es=Ye!=null?Ye:dn,{allCommits:nt,debugRows:Ts,branchDebugRows:vi,clusterKeyByCommitId:uo,leadByClusterKey:io,clusterCounts:fo,matchingNodes:ao,matchingNodeIds:Wn,normalizedSearchQuery:Vs,focusedNode:Us,defaultCollapsedClumps:Ws,renderNodes:fn,visibleNodesBySha:Jo,contentWidth:Ro,contentHeight:Ys,connectors:ts,mergeConnectors:So,connectorDecisions:ei,nodeWarnings:ko,commitIdsWithRenderedAncestry:Bo,connectorParentShas:ho,branchStartShas:Es,branchOffNodeShas:Fs,crossBranchOutgoingShas:$n,branchBaseCommitByName:wi,pointFormatter:Li}=es,ti=!!Vs,to=sn/ma,Lo=y.useMemo(()=>({transform:`scale(${1/to})`,transformOrigin:"top left",width:`${100*to}%`,height:`${100*to}%`}),[to]),Oo=-(20/to),Ds=y.useMemo(()=>{const Fe=new Map;for(const ht of fn)Fe.set(ht.commit.visualId,ht);return Fe},[fn]),ro=y.useMemo(()=>tw(fn,Oo),[fn,Oo]),In=Fe=>{var Pt;const ht=Fe.commit.id,St=Fe.commit.visualId;if(ti&&Wn.has(ht)||(Us==null?void 0:Us.commit.id)===ht||Kt===null)return!0;if(!Kt.has(St))return!1;const yt=uo.get(St);return yt&&((Pt=fo.get(yt))!=null?Pt:1)>1&&(mt.has(yt)||!Ws.has(yt)&&!Pe.has(yt)),!0},mo=1.5/to,Cs=Gv/to,ms=y.useMemo(()=>({transform:`scale(${1/to})`,transformOrigin:"center"}),[to]),Si="border-slate-400/70",Xs="border-blue-500",lo=y.useMemo(()=>new Map(t.map(Fe=>[Fe.name,Fe])),[t]);y.useMemo(()=>new Set(t.filter(Fe=>Fe.commitsAhead===0&&!Fe.name.startsWith("*")).map(Fe=>Fe.name)),[t]);const Zt=y.useMemo(()=>{var ht,St;const Fe=new Map;for(const yt of fn){const Pt=(ht=Fe.get(yt.commit.id))!=null?ht:new Set;Pt.add(yt.commit.branchName),Fe.set(yt.commit.id,Pt)}for(const yt of i){const Pt=(St=Fe.get(yt.fullSha))!=null?St:new Set;Pt.add(d),Fe.set(yt.fullSha,Pt)}return Fe},[fn,i,d]),Wo=y.useMemo(()=>new Map(Object.entries(c).map(([Fe,ht])=>[Fe,new Set(ht)])),[c]),Ns=y.useCallback(()=>{Jn.current,fs()},[fs,Jn]),{isMarqueeSelecting:zo,marqueeRect:Co,selectedCommitShas:jo,setSelectedCommitShas:Z,mergeTargetCommitSha:fe,setMergeTargetCommitSha:ke,startMarqueeDrag:Se}=fw({scrollContainerRef:ee,renderedCameraRef:Dn,getTransformLayerOriginScreen:Un,renderNodes:fn,shouldRenderNode:In,onPointerReleaseNoMarquee:Ns}),at=y.useMemo(()=>new Set(fn.map(Fe=>Fe.commit.id)),[fn]),ut=y.useMemo(()=>jo.filter(Fe=>at.has(Fe)),[jo,at]),lt=y.useCallback((Fe,ht)=>{var Pt;if(!ht)return!1;if(((Pt=oe[Fe])!=null?Pt:[]).some(qt=>wo(qt.fullSha,ht)||wo(qt.sha,ht)))return!0;const yt=lo.get(Fe);return!!(yt!=null&&yt.headSha&&wo(yt.headSha,ht))},[oe,lo]),Tt=(Mo=Ze==null?void 0:Ze.branchName)!=null?Mo:null,Lt=(To=Ze==null?void 0:Ze.headSha)!=null?To:null,Gn=Tt==null,ns=y.useCallback((Fe,ht,St)=>{for(const yt of P){if(!Yh(yt,X))continue;if(yt.branchName){if(yt.branchName===Fe&&wo(yt.headSha,ht))return yt;continue}if(!wo(yt.headSha,ht)&&!wo(yt.headSha,St))continue;if(yt.parentSha&&lt(Fe,yt.parentSha)||lt(Fe,yt.headSha))return yt;const Pt=lo.get(Fe);if(Pt&&wo(Pt.headSha,yt.headSha)||Fe===d&&i.some(qt=>wo(qt.fullSha,yt.headSha)))return yt}return null},[P,X,lt,lo,d,i]),An=y.useCallback(Fe=>{for(const ht of P)if(Yh(ht,X)&&ht.branchName===Fe)return ht;return null},[P,X]),wn=y.useCallback((Fe,ht)=>{for(const St of P)if(Yh(St,X)&&(wo(St.headSha,Fe)||wo(St.headSha,ht)))return St;return null},[P,X]),Nn=y.useCallback(Fe=>{var ht;return Array.from((ht=Zt.get(Fe))!=null?ht:[])},[Zt]),Os=y.useMemo(()=>{var Pt,qt,Ln,Tn;const Fe=new Map;for(const As of ut){const ys=Nn(As);if(ys.length===0)continue;const zi=(Pt=ys.find($i=>$i!==d))!=null?Pt:ys[0],_a=ut.filter($i=>$i!==As).filter($i=>!new Set(Nn($i)).has(zi));Fe.set(zi,{targetSha:As,targetBranch:zi,sourceRefs:_a})}const ht=Array.from(Fe.values()),St=fe?ht.find(As=>{var ys;return As.targetSha===fe||As.targetBranch===((ys=Nn(fe)[0])!=null?ys:"")}):null,yt=(qt=St!=null?St:ht[ht.length-1])!=null?qt:null;return{options:ht,selected:yt,targetBranch:(Ln=yt==null?void 0:yt.targetBranch)!=null?Ln:null,sources:(Tn=yt==null?void 0:yt.sourceRefs)!=null?Tn:[]}},[ut,Nn,d,fe]),zt=y.useMemo(()=>{const Fe=[...Tt===d?[{name:d,headSha:Lt!=null?Lt:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(ht=>!ht.name.startsWith("*")&&ht.unpushedCommits>0&&ht.remoteSyncStatus!=="on-github").map(ht=>[ht.name,ht]);return new Map(Fe)},[t,Tt,Lt,d,a.length]),Ut=y.useMemo(()=>{const Fe=yt=>{var qt;const Pt=Nn(yt).filter(Ln=>zt.has(Ln));return Pt.length===0?null:Pt.length===1?Pt[0]:Tt&&Pt.includes(Tt)?Tt:(qt=Pt.find(Ln=>Ln!==d))!=null?qt:Pt[0]},ht=yt=>{var Pt;return yt===d?a.map(qt=>{var Ln,Tn;return{fullSha:qt.fullSha,sha:qt.sha,parentSha:(Ln=qt.parentSha)!=null?Ln:null,message:qt.message,author:qt.author,date:qt.date,kind:(Tn=qt.kind)!=null?Tn:"commit"}}):(Pt=oe[yt])!=null?Pt:[]},St=new Map;for(const yt of ut){const Pt=Fe(yt);if(!Pt)continue;const qt=zt.get(Pt);if(!qt)continue;const Ln=ht(Pt).slice(0,qt.unpushedCommits),Tn=Ln.findIndex(ys=>ys.fullSha===yt);if(Tn===-1)continue;const As=St.get(Pt);(!As||Tn<As.targetIndex)&&St.set(Pt,{branchName:Pt,targetSha:yt,targetIndex:Tn,commitCount:Ln.length-Tn})}return Array.from(St.values())},[ut,Nn,zt,Tt,d,a,oe]),gn=y.useMemo(()=>Array.from(new Set(ut.map(Fe=>/^STASH:(\d+)$/.exec(Fe)).filter(Fe=>!!Fe).map(Fe=>parseInt(Fe[1],10)))).sort((Fe,ht)=>Fe-ht),[ut]),Jt=ut.includes("WORKING_TREE"),Rt=(Jt?1:0)+gn.length,j=[...Jt?["Uncommitted changes"]:[],...gn.map(Fe=>`Stash ${Fe+1}`)],Y=zt.size,re=!Gn&&!!Tt&&zt.has(Tt),me=Tt?`Push ${Tt}`:"Push current branch",Ve=Ut.length===1?Ut[0].commitCount>1?`Push ${Ut[0].commitCount} commits on ${Ut[0].branchName}`:`Push ${Ut[0].targetSha.slice(0,7)} on ${Ut[0].branchName}`:`Push ${Ut.length} selected ranges`;y.useEffect(()=>{Mt==null||Mt(pt||zo)},[pt,zo,Mt]),y.useEffect(()=>{Wt==null||Wt(Vs?ao.length:null)},[ao.length,Vs,Wt]),y.useEffect(()=>{var ht,St;if(!Vs){Vt==null||Vt(null);return}const Fe=(St=(ht=ao[0])==null?void 0:ht.commit.id)!=null?St:null;Vt==null||Vt(Fe)},[ao,Vs,Vt]),y.useLayoutEffect(()=>{if(!et)return;const Fe=ee.current,ht=Us;if(!Fe||!ht)return;const St=Un();if(!St)return;const yt=Fe.getBoundingClientRect(),Pt=Dn.current.zoom,qt=Pt/ma,Ln=ht.x+ps/2,Tn=ht.y+wc+Ps/2,As=yt.left+yt.width/2,ys=yt.top+yt.height/2;hs(As-St.x-Ln*qt,ys-St.y-Tn*qt,Pt)},[et,Be,Us,Un]);const Ie=($o=(gs=Nt==null?void 0:Nt.width)!=null?gs:(Sn=ee.current)==null?void 0:Sn.clientWidth)!=null?$o:0,Ge=(Oi=(Eo=Nt==null?void 0:Nt.height)!=null?Eo:(Yo=ee.current)==null?void 0:Yo.clientHeight)!=null?Oi:0,dt=Ie>0&&Ge>0?xy(Ie,Ge,Dn.current,{innerPaddingPx:vd}):null,tt=dt!=null?by(dt,Dn.current.zoom):null,Et=Fe=>{if(!tt)return!0;const{fromX:ht,fromY:St,toX:yt,toY:Pt}=Fe;return ew(ht,St,yt,Pt,tt,Fe.fromFace,Fe.toFace)};y.useLayoutEffect(()=>{var Ln;const Fe=ee.current;if(!Fe||Fe.clientWidth<=0||Fe.clientHeight<=0)return;const ht=Fe.clientWidth,St=Fe.clientHeight;zn(Tn=>(Tn==null?void 0:Tn.width)===ht&&(Tn==null?void 0:Tn.height)===St?Tn:{width:ht,height:St});const yt=xy(ht,St,Dn.current,{innerPaddingPx:vd});if(!yt){Qt(Tn=>Tn===null?Tn:null);return}const Pt=by(yt,Dn.current.zoom),qt=nw(ro,Pt,Ds,Oo);for(const Tn of fn){const As=uo.get(Tn.commit.visualId);if(!As||((Ln=fo.get(As))!=null?Ln:1)<=1)continue;(mt.has(As)||!Ws.has(As)&&!Pe.has(As))&&qt.add(Tn.commit.visualId)}Qt(Tn=>Zv(Tn,qt)?Tn:qt)},[sn,Be,et,pt,nn,mt,Pe,Ws,uo,fo,fn,Nt,ro,Ds,Oo]),y.useLayoutEffect(()=>{const Fe=ee.current;if(!Fe)return;const ht=()=>{const yt=Fe.clientWidth,Pt=Fe.clientHeight;yt<=0||Pt<=0||zn(qt=>(qt==null?void 0:qt.width)===yt&&(qt==null?void 0:qt.height)===Pt?qt:{width:yt,height:Pt})};ht();const St=new ResizeObserver(ht);return St.observe(Fe),()=>St.disconnect()},[nt.length]);const mn=fn.filter(Fe=>In(Fe)).length,yn=So.filter(Fe=>Et(Fe)).length,Pn=ts.filter(Fe=>Et(Fe)).length,Mn=y.useCallback((Fe,ht)=>{Fe.stopPropagation();const St=ht.commit.id;if(Fe.shiftKey?(Z(Ln=>Ln.includes(St)?Ln.filter(Tn=>Tn!==St):[...Ln,St]),ke(St)):(Z(Ln=>Ln.includes(St)?[]:[St]),ke(Ln=>Ln===St?null:St)),!(Fe.metaKey||Fe.ctrlKey||Fe.detail>=2)||St==="WORKING_TREE")return;const Pt=St.length>=40?St.slice(0,7):St;let qt=null;if(ht.commit.branchName?(qt=ns(ht.commit.branchName,St,Pt),qt||(qt=An(ht.commit.branchName))):qt=wn(St,Pt),qt&&ae){ae(qt.path);return}h==null||h({commitSha:St})},[wn,ns,An,h,ae]),Xt=y.useCallback(async()=>{if(!xe)return;await xe(st)&&(Qe(!1),ft(""))},[xe,st]),Rn=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:Jt,stashIndices:gn}),qe(!1),Z([]),ke(null))},[$,Jt,gn]),po=y.useCallback(async()=>{const Fe=he.trim();if(Fe){if(We==="new-root"){if(!B)return;await B(Fe)}else{if(!Te||ut.length!==1)return;const ht=ut[0];if(!(ht==="WORKING_TREE"||ht.startsWith("STASH:")))return;await Te(ht,Fe)}J(!1),ve(""),Xe("from-selected-node"),Z([]),ke(null)}},[We,he,Te,B,ut]),zs=ut.length===1&&(ut[0]==="WORKING_TREE"||ut[0].startsWith("STASH:")),gt=!!B;return y.useEffect(()=>{if(I){if(!zs&&gt){Xe("new-root");return}zs&&Xe("from-selected-node")}},[gt,I,zs]),r.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[r.jsx(lw,{isOpen:_n,onToggle:()=>rt(Fe=>!Fe),onClose:()=>rt(!1),visibleBounds:tt,renderedNodeCount:mn,totalNodeCount:fn.length,renderedMergeConnectorCount:yn,totalMergeConnectorCount:So.length,renderedConnectorCount:Pn,totalConnectorCount:ts.length,mapGridCullViewportInsetScreenPx:Xv,debugRows:Ts,branchDebugRows:vi,connectorDecisions:ei}),nt.length===0?r.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:r.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):r.jsx(aw,{scrollContainerRef:ee,mapPadHostRef:De,transformLayerRef:He,isMarqueeSelecting:zo,contentWidth:Ro,contentHeight:Ys,isCameraMoving:pt,onWheel:jn,onMouseDown:Se,labelTopPx:Oo,inverseZoomStyle:Lo,displayZoom:to,iconScaleStyle:ms,selectedVisibleCommitShas:ut,normalizedSearchQuery:Vs,matchingNodeIds:Wn,focusedNode:Us,renderNodes:fn,shouldRenderNode:In,manuallyOpenedClumps:mt,manuallyClosedClumps:Pe,defaultCollapsedClumps:Ws,leadByClusterKey:io,clusterKeyByCommitId:uo,clusterCounts:fo,commitIdsWithRenderedAncestry:Bo,nodeWarnings:ko,connectorParentShas:ho,branchStartShas:Es,branchOffNodeShas:Fs,crossBranchOutgoingShas:$n,branchBaseCommitByName:wi,branchStartAccentClass:Xs,connectorParentAccentClass:Si,commitCornerRadiusPx:Cs,lineStrokeWidth:mo,pointFormatter:Li,connectors:ts,mergeConnectors:So,cullConnectorPath:Et,flushCameraReactTick:fs,setManuallyOpenedClumps:xt,setManuallyClosedClumps:ln,onCommitCardClick:Mn,unpushedCommitShasSetByBranch:Wo,checkedOutHeadSha:Lt}),Co&&zo?r.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Co.left,top:Co.top,width:Co.width,height:Co.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,r.jsx(rw,{selectedVisibleCommitShas:ut,commitInProgress:z,commitDisabled:_e,stageInProgress:we,stashInProgress:ne,stashDisabled:ce,pushInProgress:E,deleteInProgress:W,createBranchFromNodeInProgress:H,onCommitLocalChanges:xe,onStageAllChanges:K?()=>void K():void 0,onStashLocalChanges:G,onPushCurrentBranch:N,onPushAllBranches:M,onPushCommitTargets:A,onDeleteSelection:$,onCreateBranchFromNode:Te,onMergeRefsIntoBranch:C,selectedPushTargets:Ut,selectedPushLabel:Ve,canPushCurrentBranch:re,pushCurrentBranchLabel:me,pushableRemoteBranchCount:Y,deletableSelectionCount:Rt,canCreateRootBranch:gt,selectedCommitTargetOption:Os,mergeInProgress:k,mergeTargetCommitSha:fe,setMergeTargetCommitSha:ke,worktrees:P,currentRepoPath:X,worktreeMenuOpen:je,setWorktreeMenuOpen:ot,onSwitchToWorktree:ae,onRemoveWorktree:q,removeWorktreeInProgress:se,setCommitDialogOpen:Qe,setDeleteConfirmOpen:qe,setNewBranchDialogOpen:J}),r.jsx(cw,{commitDialogOpen:ct,commitMessageDraft:st,onCommitMessageDraftChange:ft,onCommitDialogClose:()=>Qe(!1),onCommitConfirm:()=>void Xt(),commitInProgress:z,deleteConfirmOpen:ze,deleteSelectionItems:j,onDeleteConfirmClose:()=>qe(!1),onDeleteConfirm:()=>void Rn(),deleteInProgress:W,deletableSelectionCount:Rt,newBranchDialogOpen:I,newBranchName:he,newBranchCreateMode:We,onNewBranchNameChange:ve,onNewBranchCreateModeChange:Xe,onNewBranchDialogClose:()=>J(!1),onNewBranchConfirm:()=>void po(),selectedCommitCanCreateBranch:zs,createBranchFromNodeInProgress:H})]})}function hw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchUniqueAheadCounts:x={},gridSearchQuery:b="",gridSearchJumpToken:w=0,gridFocusSha:S=null,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,view:M="time",isLoading:N=!1,scrollRequest:A,focusedErrorBranch:E,checkedOutRef:$=null,mapTopInsetPx:W=0,onMergeRefsIntoBranch:P,mergeInProgress:X=!1,onPushAllBranches:q,onPushCurrentBranch:se,onPushCommitTargets:ae,pushInProgress:G=!1,onDeleteSelection:ne,deleteInProgress:ce=!1,worktrees:xe=[],currentRepoPath:z,onRemoveWorktree:_e,removeWorktreeInProgress:K=!1,onSwitchToWorktree:we,onStashLocalChanges:Te,stashInProgress:B=!1,stashDisabled:H=!1,onCommitLocalChanges:L,commitInProgress:oe=!1,commitDisabled:Le=!1,onStageAllChanges:Ee,stageInProgress:Be=!1,onCreateBranchFromNode:et,onCreateRootBranch:Ze,createBranchFromNodeInProgress:Wt=!1,onMoveNodeBackToBranch:Vt,orientation:Mt="horizontal",onInteractionChange:$t,manuallyOpenedClumps:tn,manuallyClosedClumps:rn,setManuallyOpenedClumps:de,setManuallyClosedClumps:Ye,layoutModel:ee}){const De=new Set(u.map(Qe=>Qe.branchName)),He=14*864e5,je=Date.now();function ot(Qe){return De.has(Qe.name)||je-new Date(Qe.lastCommitDate).getTime()<=He}const ct=t.filter(Qe=>Qe.status==="stale"&&ot(Qe)).sort((Qe,st)=>new Date(st.lastCommitDate).getTime()-new Date(Qe.lastCommitDate).getTime());return r.jsx("div",{className:"h-full flex flex-col",children:M==="time"?r.jsx("div",{className:"flex-1 min-h-0",children:r.jsx(wy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchUniqueAheadCounts:x,staleBranches:ct,isLoading:N,scrollRequest:A,focusedErrorBranch:E,checkedOutRef:$,mapTopInsetPx:W,onMergeRefsIntoBranch:P,mergeInProgress:X,onPushAllBranches:q,onPushCurrentBranch:se,onPushCommitTargets:ae,pushInProgress:G,onDeleteSelection:ne,deleteInProgress:ce,worktrees:xe,currentRepoPath:z,onRemoveWorktree:_e,removeWorktreeInProgress:K,onSwitchToWorktree:we,onStashLocalChanges:Te,stashInProgress:B,stashDisabled:H,onCommitLocalChanges:L,commitInProgress:oe,commitDisabled:Le,onStageAllChanges:Ee,stageInProgress:Be,onCreateBranchFromNode:et,onCreateRootBranch:Ze,createBranchFromNodeInProgress:Wt,onMoveNodeBackToBranch:Vt,orientation:Mt,onInteractionChange:$t,manuallyOpenedClumps:tn,manuallyClosedClumps:rn,setManuallyOpenedClumps:de,setManuallyClosedClumps:Ye,layoutModel:ee})}):M==="grid"?r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(wy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchUniqueAheadCounts:x,gridSearchQuery:b,gridSearchJumpToken:w,gridFocusSha:S,checkedOutRef:$,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,onInteractionChange:$t,manuallyOpenedClumps:tn,manuallyClosedClumps:rn,setManuallyOpenedClumps:de,setManuallyClosedClumps:Ye,layoutModel:ee,orientation:Mt})}):null})}function mw(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function pw(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Sy(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Tm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:N}){var L,oe,Le;if(_.has(t)||!a.get(t))return null;const E=(L=d.get(t))!=null?L:null,$=E?E.slice(0,7):"none",W=(oe=u.get(t))!=null?oe:[],P=W.length>0,X=y.useMemo(()=>{var Ee;return[...(Ee=c[t])!=null?Ee:[]]},[c,t]),q=x&&X.length>0,se=x,ae=P||q,G=h.has(t),ne=se?X:[],ce=G&&ne.length>0,xe=g===t,z=new Set(_);z.add(t);const _e="top-[-0.2rem] h-4.5 w-[10px]",K="rounded-bl-[7px]",we="left-[0.65rem]",Te=new Map,B=[];for(const Ee of W){const Be=d.get(Ee);if(Be){const et=ne.findIndex(Ze=>wo(Ze.fullSha,Be)||wo(Ze.sha,Be));if(et>=0){const Ze=(Le=Te.get(et))!=null?Le:[];Ze.push(Ee),Te.set(et,Ze);continue}}B.push(Ee)}const H=y.useMemo(()=>{if(!x||ne.length===0)return[];const Ee=[];let Be=[],et=null;const Ze=()=>{if(Be.length===0)return;const Wt=Be[Be.length-1],Vt=`sidebar-single-${t}-${Wt.fullSha}`;Ee.push({key:et!=null?et:Vt,commits:Be,count:Be.length,lead:Wt}),Be=[],et=null};return ne.forEach(Wt=>{var Mt;const Vt=(Mt=S.get(`${t}:${Wt.fullSha}`))!=null?Mt:null;if(Be.length===0){Be=[Wt],et=Vt;return}if(Vt===et){Be.push(Wt);return}Ze(),Be=[Wt],et=Vt}),Ze(),Ee},[t,x,ne,S]);return r.jsxs("li",{className:eo("relative",n>0?"pl-4":"pl-0",n===0&&!i?G?"mb-12":"mb-1":""),children:[n>0?r.jsx("span",{"aria-hidden":"true",className:eo("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border/60",K,we,_e)}):null,!i&&n>0?r.jsx("span",{"aria-hidden":"true",className:eo("absolute top-0 bottom-[-1rem] border-l-[1.5px] border-border/50",we)}):null,r.jsx("div",{className:"flex items-center gap-1",children:r.jsxs("button",{type:"button",onClick:()=>{ae&&p(t),N==null||N(t)},className:eo("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",xe?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[ae?r.jsx("span",{className:eo("inline-block text-[10px] text-muted-foreground transition-transform",G?"rotate-90":""),children:"▶"}):null,r.jsxs("span",{className:"min-w-0 break-words",children:[r.jsx("span",{className:eo(xe?"font-medium text-foreground":"font-normal"),children:t}),r.jsxs("span",{className:"ml-1 text-[10px] text-muted-foreground/80",children:["(parent ",$,")"]})]})]})}),ce?r.jsx("ul",{className:"relative space-y-1 pl-4",children:H.map(Ee=>{const Be=Ee.count>1&&!C(Ee.key);return(Be?[Ee.lead]:Ee.commits).map(Ze=>{var Mt;const Wt=ne.findIndex($t=>$t.fullSha===Ze.fullSha),Vt=b(Ze.fullSha,w!=null?w:t);return r.jsxs("li",{children:[r.jsxs("div",{className:"flex items-start gap-1",children:[r.jsx("button",{type:"button",onClick:()=>M==null?void 0:M(Ze.fullSha),className:"min-w-0 flex-1 break-words rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ze.message,children:Ze.message}),Ee.count>1&&Ze.fullSha===Ee.lead.fullSha?r.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${Ee.lead.fullSha}`,onClick:()=>k(Ee.key,`${t}:${Ee.lead.fullSha}`),className:eo("shrink-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",Be?"":"min-w-[2ch] text-center"),children:Be?`+${Math.max(1,Ee.count-1)}`:"−"}):null]}),Vt.length>0?r.jsx("div",{className:"mt-1 space-y-1",children:Vt.map($t=>r.jsxs("div",{className:"min-w-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70",children:[r.jsx("span",{children:"Merged from "}),r.jsx("span",{className:"font-medium text-muted-foreground",children:$t})]},`${Ze.fullSha}:${$t}`))}):null,(Mt=Te.get(Wt))!=null&&Mt.length?r.jsx("ul",{className:"relative mb-1.75 space-y-2",children:Te.get(Wt).map(($t,tn,rn)=>r.jsx(Tm,{branchName:$t,depth:n+1,isLast:tn===rn.length-1&&B.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:$t,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:N},$t))}):null]},`${t}:${Ze.fullSha}`)})})}):null,P&&G&&B.length>0?r.jsx("ul",{className:"relative mb-3.5 space-y-1",children:B.map((Ee,Be)=>r.jsx(Tm,{branchName:Ee,depth:n+1,isLast:Be===B.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Ee,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:N},Ee))}):null]})}function _w({branches:t,defaultBranch:n,branchCommitPreviews:i,directCommits:a=[],mergeNodes:c=[],checkedOutRef:u,manuallyOpenedClumps:d,manuallyClosedClumps:h,setManuallyOpenedClumps:p,setManuallyClosedClumps:g,gridLayoutModel:_,onSelectCommit:x,onSelectBranch:b,className:w}){var $t,tn,rn;const S=y.useRef(null),C=y.useRef(null),[k,M]=y.useState(!0),[N,A]=y.useState(()=>new Set),[E,$]=y.useState(()=>new Set),W=d!=null?d:N,P=h!=null?h:E,X=p!=null?p:A,q=g!=null?g:$,[se,ae]=y.useState(null),[G,ne]=y.useState(null),ce=y.useMemo(()=>[...a].sort((de,Ye)=>new Date(de.date).getTime()-new Date(Ye.date).getTime()),[a]),xe=y.useMemo(()=>{var Ye,ee,De,He;const de=ce[ce.length-1];return{name:n,commitsAhead:0,commitsBehind:0,createdFromSha:(Ye=de==null?void 0:de.fullSha)!=null?Ye:void 0,createdDate:de==null?void 0:de.date,lastCommitDate:(ee=de==null?void 0:de.date)!=null?ee:new Date(0).toISOString(),lastCommitAuthor:(De=de==null?void 0:de.author)!=null?De:"Unknown",status:"fresh",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:(He=de==null?void 0:de.fullSha)!=null?He:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0}},[n,ce]),z=y.useMemo(()=>t.some(de=>de.name===n)?t:[xe,...t],[t,n,xe]),_e=y.useMemo(()=>{const de=ce.map(Ye=>{var ee,De;return{fullSha:Ye.fullSha,sha:Ye.sha,parentSha:(ee=Ye.parentSha)!=null?ee:null,message:Ye.message,author:Ye.author,date:Ye.date,kind:(De=Ye.kind)!=null?De:"commit"}});return{...i,[n]:de}},[i,n,ce]),K=y.useMemo(()=>{var ee,De,He;if(!_)return _e;const de=new Map(_.nodes.map(je=>[je.commit.visualId,je.row])),Ye={};for(const je of _.allCommits){const ot=(ee=Ye[je.branchName])!=null?ee:[];ot.push({fullSha:je.id,sha:je.id.slice(0,7),parentSha:(De=je.parentSha)!=null?De:null,message:je.message,author:je.author,date:je.date,kind:(He=je.kind)!=null?He:"commit"}),Ye[je.branchName]=ot}for(const je of Object.keys(Ye))Ye[je]=Ye[je].sort((ot,ct)=>{var qe,I;const Qe=(qe=de.get(`${je}:${ot.fullSha}`))!=null?qe:Number.MAX_SAFE_INTEGER,st=(I=de.get(`${je}:${ct.fullSha}`))!=null?I:Number.MAX_SAFE_INTEGER;if(Qe!==st)return Qe-st;const ft=new Date(ot.date).getTime(),ze=new Date(ct.date).getTime();return ft!==ze?ft-ze:ot.fullSha.localeCompare(ct.fullSha)});return Ye},[_,_e]),we=y.useMemo(()=>{var ee,De,He,je;const de=new Map,Ye=(ot,ct)=>{const Qe=z.filter(ft=>ft.name!==ct).filter(ft=>wo(ft.headSha,ot)).map(ft=>ft.name);if(Qe.length>0)return Qe.sort()[0];const st=Object.entries(K).filter(([ft])=>ft!==ct).flatMap(([ft,ze])=>{const qe=ze[ze.length-1];return qe?wo(qe.fullSha,ot)||wo(qe.sha,ot)?[ft]:[]:[]});return st.length>0?st.sort()[0]:ot.slice(0,7)};for(const ot of c){const ct=(ee=ot.targetBranch)!=null?ee:n;if(!ct||!ot.fullSha)continue;const Qe=((De=ot.parentShas)!=null?De:[]).slice(1).filter(ze=>!!ze&&!wo(ze,ot.fullSha));if(Qe.length===0)continue;const st=(He=de.get(ct))!=null?He:new Map,ft=(je=st.get(ot.fullSha))!=null?je:new Set;for(const ze of Qe)ft.add(Ye(ze,ct));st.set(ot.fullSha,ft),de.set(ct,st)}return de},[c,n,z,K]),Te=(de,Ye)=>{const ee=we.get(Ye);if(!ee)return[];for(const[De,He]of ee.entries())if(wo(de,De))return Array.from(He).sort();return[]},B=y.useMemo(()=>mw(z,n),[z,n]),H=y.useMemo(()=>pw(z,n,B),[z,n,B]),L=y.useMemo(()=>new Map(z.map(de=>[de.name,de])),[z]),oe=y.useMemo(()=>{var ee,De;const de=new Map,Ye=_?K:_e;for(const He of z){const je=(De=(ee=_==null?void 0:_.firstBranchCommitByName.get(He.name))==null?void 0:ee.parentSha)!=null?De:null,ot=je!=null?je:jm(He,n,Ye);de.set(He.name,ot)}return de},[z,_,n,_e,K]),[Le,Ee]=y.useState(()=>Sy(H,B,u,n));y.useEffect(()=>{Ee(de=>{const Ye=Sy(H,B,u,n),ee=new Set(de);for(const De of Ye)ee.add(De);return ee})},[H,B,u,n]);const Be=($t=u==null?void 0:u.branchName)!=null?$t:null,et=(tn=_==null?void 0:_.clusterKeyByCommitId)!=null?tn:new Map,Ze=(rn=_==null?void 0:_.defaultCollapsedClumps)!=null?rn:new Set,Wt=de=>W.has(de)||!Ze.has(de)&&!P.has(de),Vt=(de,Ye)=>{const ee=S.current,De=C.current;if(ee&&De){const He=`[data-clump-toggle-id="${Ye}"]`,je=ee.querySelector(He);if(je){const ot=je.getBoundingClientRect().top-De.getBoundingClientRect().top;ne({id:Ye,topWithinScrollBody:ot})}else ne(null)}else ne(null);ae(Ye),X(He=>{const je=new Set(He),ot=Wt(de);return q(ct=>{const Qe=new Set(ct);return ot?(je.delete(de),Qe.add(de)):(Qe.delete(de),je.add(de)),Qe}),je})};y.useLayoutEffect(()=>{if(!se)return;const de=S.current,Ye=C.current;if(!de||!Ye)return;const ee=`[data-clump-toggle-id="${se}"]`,De=de.querySelector(ee);if(De){if((G==null?void 0:G.id)===se){const je=De.getBoundingClientRect().top-Ye.getBoundingClientRect().top-G.topWithinScrollBody;Number.isFinite(je)&&je!==0&&(Ye.scrollTop+=je)}De.focus({preventScroll:!0}),ae(null),ne(null)}},[W,P,se,G]);const Mt=de=>{Ee(Ye=>{const ee=new Set(Ye);return ee.has(de)?ee.delete(de):ee.add(de),ee})};return r.jsxs("aside",{ref:S,"aria-label":"Dense branch sidebar",className:eo("pointer-events-auto h-full",w),children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[r.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Branches"}),r.jsx("button",{type:"button",onClick:()=>M(de=>!de),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:k?"Hide commits":"Show commits"})]}),r.jsx("div",{ref:C,className:"h-[calc(100%-1.75rem)] overflow-y-auto",children:r.jsx("ul",{className:"px-5",children:H.map((de,Ye)=>r.jsx(Tm,{branchName:de,depth:0,isLast:Ye===H.length-1,branchByName:L,branchCommitPreviews:K,childNamesByParent:B,branchAnchorShaByName:oe,expandedBranchNames:Le,onToggleBranch:Mt,checkedOutBranchName:Be,ancestors:new Set,showCommits:k,getMergeTargetLabels:Te,sourceBranchName:de,clusterKeyByCommitId:et,isGridClusterOpen:Wt,onToggleGridCluster:Vt,onSelectCommit:x,onSelectBranch:b},de))})})]})}function gw({onSelect:t,onClose:n}){const[i,a]=y.useState(""),[c,u]=y.useState(""),[d,h]=y.useState([]),[p,g]=y.useState([]),[_,x]=y.useState(!1),[b,w]=y.useState(!1),[S,C]=y.useState(null),[k,M]=y.useState(""),[N,A]=y.useState(0),[E,$]=y.useState(-1),W=y.useRef(null),P=y.useRef(null),X=y.useRef(0),q=i.length>=2;y.useEffect(()=>{ye("get_home_dir").then(L=>{M(L),u(L)})},[]),y.useEffect(()=>{var L;(L=W.current)==null||L.focus()},[]),y.useEffect(()=>{c&&!q&&se(c)},[c,q]),y.useEffect(()=>{if(P.current&&clearTimeout(P.current),!i||i.length<2){g([]),w(!1),X.current+=1;return}w(!0);const L=X.current+1;return X.current=L,P.current=setTimeout(async()=>{try{const Le=await ye("search_directories",{path:c,query:i,maxDepth:c===k?3:2,limit:15});if(X.current!==L)return;g(Le),A(0)}catch(oe){if(X.current!==L)return;console.error("Search failed:",oe),g([])}finally{if(X.current!==L)return;w(!1)}},220),()=>{P.current&&clearTimeout(P.current)}},[i,c,k]),y.useEffect(()=>{q||A(0)},[d,q]);async function se(L){x(!0),C(null),$(-1);try{const oe=await ye("list_directory",{path:L});h(oe.filter(Le=>Le.isDir))}catch(oe){C(oe instanceof Error?oe.message:String(oe)),h([])}finally{x(!1)}}const ae=q?p:d,G=y.useCallback(L=>{a(""),u(L)},[]),ne=y.useCallback(()=>{if(c==="/")return;const L=c.split("/").slice(0,-1).join("/")||"/";G(L)},[c,G]),ce=y.useCallback(()=>{k&&G(k)},[k,G]);function xe(L){L.isRepo?t(L.path):G(L.path)}function z(){var oe;const L=(oe=ae[N])!=null?oe:E>=0?ae[E]:void 0;L?xe(L):t(c)}function _e(L){if(L.key==="Escape")i?(a(""),L.preventDefault()):(n(),L.preventDefault());else if(L.key==="Enter")z(),L.preventDefault();else if(L.key==="ArrowDown")L.preventDefault(),A(oe=>Math.min(oe+1,ae.length-1));else if(L.key==="ArrowUp")L.preventDefault(),A(oe=>Math.max(oe-1,0));else if(L.key==="ArrowLeft"&&!q)L.preventDefault(),ne();else if(L.key==="ArrowRight"||L.key==="Tab"){const oe=ae[N];oe?(L.preventDefault(),G(oe.path)):L.key==="Tab"&&L.preventDefault()}else L.key==="Backspace"&&!i&&!q&&(L.preventDefault(),ne())}function K(L){L.target===L.currentTarget&&n()}function we(L){return k&&L.startsWith(k)?"~"+L.slice(k.length):L}function Te(L){const oe=L.split("/").filter(Boolean),Le=[];let Ee="";for(const Be of oe)Ee+="/"+Be,Le.push({name:Be,path:Ee});return Le}function B(L,oe){if(!oe)return L;const Le=L.toLowerCase().indexOf(oe.toLowerCase());return Le===-1?L:r.jsxs(r.Fragment,{children:[L.slice(0,Le),r.jsx("mark",{className:"bg-primary/20 text-primary rounded px-0.5",children:L.slice(Le,Le+oe.length)}),L.slice(Le+oe.length)]})}const H=Te(c);return r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-[12vh]",onClick:K,onKeyDown:L=>L.key==="Escape"&&n(),children:r.jsxs("div",{className:"bg-card rounded-xl shadow-lg flex flex-col overflow-hidden border border-border w-[520px] max-w-[90vw] max-h-[65vh]",children:[r.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-border",children:[r.jsxs("div",{className:"flex-1 flex items-center gap-0.5 overflow-x-auto",children:[r.jsx("button",{className:"flex items-center p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:ce,title:"Home (~)",children:r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),H.map((L,oe)=>r.jsxs("span",{className:"flex items-center",children:[r.jsx("svg",{className:"w-3 h-3 text-muted-foreground mx-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),r.jsx("button",{className:`px-1.5 py-1 hover:bg-accent rounded-lg text-sm whitespace-nowrap transition-colors ${oe===H.length-1?"text-foreground font-medium":"text-muted-foreground hover:text-foreground"}`,onClick:()=>G(L.path),children:L.name})]},L.path))]}),r.jsx("button",{className:"p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:n,title:"Close (Esc)",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border",children:[r.jsx("div",{className:`flex items-center justify-center text-muted-foreground ${b?"opacity-70":""}`,children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),r.jsx("input",{ref:W,type:"text",className:"flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm",placeholder:"Search folders...",value:i,onChange:L=>a(L.target.value),onKeyDown:_e,autoComplete:"off",spellCheck:!1}),i&&r.jsx("button",{className:"p-1 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:()=>a(""),title:"Clear",children:r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsx("div",{className:"flex-1 overflow-y-auto py-1",children:_&&!q?r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Loading..."}):S&&!q?r.jsx("div",{className:"py-6 text-center text-destructive text-sm",children:S}):r.jsx(r.Fragment,{children:q?p.length>0?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex items-center gap-1.5 px-4 py-2",children:[r.jsx("svg",{className:"w-3 h-3 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),r.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium",children:"Results"})]}),p.map((L,oe)=>r.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${oe===E?"bg-primary/10":oe===N?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(oe),A(oe)},onDoubleClick:()=>xe(L),onMouseEnter:()=>A(oe),children:[r.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${L.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:L.isRepo?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("div",{className:"truncate text-foreground",children:B(L.name,i)}),r.jsx("div",{className:"text-xs text-muted-foreground font-mono truncate",children:B(we(L.path),i)})]}),r.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},L.path))]}):b?null:r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"No matching folders"}):d.length>0?d.map((L,oe)=>r.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${oe===E?"bg-primary/10":oe===N?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(oe),A(oe)},onDoubleClick:()=>xe(L),onMouseEnter:()=>A(oe),children:[r.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${L.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:L.isRepo?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsx("span",{className:"flex-1 truncate text-foreground",children:L.name}),r.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},L.path)):_?null:r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Empty directory"})})}),r.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-t border-border bg-card/50",children:[r.jsxs("span",{className:"text-xs text-muted-foreground",children:[r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5",children:"↑↓"})," navigate",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Enter"})," open",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Tab"})," drill in",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"←"})," back"]}),r.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity",onClick:z,children:"Open"})]})]})})}const qr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function yw(t,n,i,a,c,u){var q,se,ae,G;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(se=(q=i[0])==null?void 0:q.fullSha)!=null?se:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ne=>({name:ne.name,headSha:ne.headSha,isDefault:!1}))],x=d?_.filter(ne=>qr(ne.headSha,d)):[],b=(ae=x.find(ne=>ne.isDefault))!=null?ae:x[0],w=!!(b&&d&&qr(b.headSha,d)),S=b&&!b.isDefault?n.find(ne=>ne.name===b.name):void 0,C=(()=>{var ce;if(!d)return null;const ne=i.find(xe=>qr(xe.fullSha,d)||qr(xe.sha,d));if(ne!=null&&ne.date)return ne.date;if(S){const xe=((ce=a[S.name])!=null?ce:[]).find(z=>qr(z.fullSha,d)||qr(z.sha,d));if(xe!=null&&xe.date)return xe.date}return null})(),k=C?new Date(C).getTime():Number.NaN,M=Date.now(),N=Number.isFinite(k)?Math.max(M,k+1+t.index):M+t.index,A=new Date(N).toISOString(),E=t.message.trim(),$={fullSha:h,sha:p,parentSha:d,message:E||p,author:"You",date:A,kind:"stash"},W={fullSha:h,sha:p,parentSha:d,message:E||p,author:"You",date:A,kind:"stash"};if(w&&(b!=null&&b.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,W]};if(w&&S)return{branches:n.map(ce=>ce.name===S.name?{...ce,commitsAhead:ce.commitsAhead+1,unpushedCommits:ce.unpushedCommits+1,lastCommitDate:A,headSha:h}:ce),directCommits:i,branchCommitPreviews:{...a,[S.name]:[$,...a[S.name]||[]]},branchUniqueAheadCounts:{...c,[S.name]:Math.max(0,(G=Object.prototype.hasOwnProperty.call(c,S.name)?c[S.name]:S.commitsAhead)!=null?G:0)+1}};const P=`*Stash:${t.index}`;return{branches:[{name:P,commitsAhead:1,commitsBehind:0,lastCommitDate:A,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(b==null?void 0:b.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[P]:[$]},branchUniqueAheadCounts:{...c,[P]:1}}}function xw(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=yw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}const bw="git-visualizer",Vu=!1,ky=1400,vw=180;function Fh(...t){return t.filter(Boolean).join(" ")}function ww(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Cy(t){return ww(t)===bw}function Sw(){var Co,jo;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState([]),[p,g]=y.useState([]),[_,x]=y.useState([]),[b,w]=y.useState({}),[S,C]=y.useState([]),[k,M]=y.useState("main"),[N,A]=y.useState(null),[E,$]=y.useState([]),[W,P]=y.useState(!1),[X,q]=y.useState(""),[se,ae]=y.useState(0),[G,ne]=y.useState(()=>new Set),[ce,xe]=y.useState(()=>new Set),[z,_e]=y.useState(null),[K,we]=y.useState(null),[Te,B]=y.useState(!1),[H,L]=y.useState(!1),[oe,Le]=y.useState(null),[Ee,Be]=y.useState("landing"),[et,Ze]=y.useState(!1),[Wt,Vt]=y.useState(!1),[Mt,$t]=y.useState("active"),[tn,rn]=y.useState(null),[de,Ye]=y.useState(null),[ee,De]=y.useState(!1),[He,je]=y.useState(null),[ot,ct]=y.useState(!1),[Qe,st]=y.useState(null),[ft,ze]=y.useState(null),[qe,I]=y.useState(!1),[J,he]=y.useState(!1),[ve,We]=y.useState(!1),[Xe,Ne]=y.useState(!1),[Dt,Ot]=y.useState({}),[Yt,mt]=y.useState({}),[Pe,xt]=y.useState({}),[ln,_n]=y.useState([]),[rt,Kt]=y.useState(!1),[Qt,Nt]=y.useState(!1),[zn,pt]=y.useState(!1),[sn,nn]=y.useState(!1),[Dn,Jn]=y.useState(!1),[Un,fs]=y.useState("horizontal"),hs=y.useRef(null),jn=Cy(t),qn=y.useRef(!1),dn=y.useRef([]),es=y.useRef([]),nt=y.useRef(null);function Ts(Z){if(Z.button!==0)return;const fe=Z.target;if(fe!=null&&fe.closest(".window-no-drag"))return;const ke=km();ye("start_window_drag").catch(()=>ke.startDragging()).catch(Se=>{console.warn("Failed to start window drag:",Se)})}async function vi(Z,fe){const Se=[];let at=0;for(;;){const ut=await ye("get_merge_nodes",{repoPath:Z,branch:fe,page:at,perPage:100});if(Se.push(...ut.nodes.map(lt=>({...lt,targetBranch:fe}))),!ut.hasMore||ut.nodes.length===0)break;at+=1}return Se}async function uo(Z,fe){var ut;const ke=Array.from(new Set(fe.filter(lt=>!!lt)));if(ke.length===0)return[];const Se=await Promise.all(ke.map(lt=>vi(Z,lt).catch(()=>[]))),at=new Map;for(const lt of Se)for(const Tt of lt){const Lt=`${Tt.fullSha}:${(ut=Tt.targetBranch)!=null?ut:""}`;at.has(Lt)||at.set(Lt,Tt)}return Array.from(at.values())}const io=Z=>Z.map(fe=>`${fe.name}|${fe.headSha}|${fe.commitsAhead}|${fe.commitsBehind}|${fe.unpushedCommits}|${fe.remoteSyncStatus}`).join("||"),fo=Z=>Z.map(fe=>fe.fullSha).join("|"),ao=Z=>{var fe,ke;return Z?`${(fe=Z.branchName)!=null?fe:""}|${Z.headSha}|${(ke=Z.parentSha)!=null?ke:""}|${Z.hasUncommittedChanges?1:0}`:"__none__"};async function Wn(Z,fe){const ke=fe!=null?fe:k,[Se,at,ut,lt,Tt,Lt]=await Promise.all([ye("get_branches",{repoPath:Z}),ye("get_direct_commits",{repoPath:Z,branch:ke}),ye("get_unpushed_direct_commits",{repoPath:Z,branch:ke}).catch(()=>[]),ye("get_checked_out_ref",{repoPath:Z}).catch(()=>null),ye("list_worktrees",{repoPath:Z}).catch(()=>[]),ye("list_stashes",{repoPath:Z}).catch(()=>[])]),Gn=Array.from(new Set([ke,...Se.map(wn=>wn.name)])),ns=await uo(Z,Gn),An=await Promise.all([ke,...Se.map(wn=>wn.name)].map(async wn=>{const Nn=await ye("get_branch_unpushed_commit_shas",{repoPath:Z,branch:wn}).catch(()=>[]);return[wn,Nn]}));u(Se),h(ns),g(at),x(ut),w(Object.fromEntries(An)),A(lt),$(Tt),_n(Lt)}async function Vs(Z,fe){const[ke,Se,at]=await Promise.all([ye("get_branches",{repoPath:Z}).catch(()=>[]),ye("get_direct_commits",{repoPath:Z,branch:fe}).catch(()=>[]),ye("get_checked_out_ref",{repoPath:Z}).catch(()=>null)]);return io(ke)!==io(dn.current)||fo(Se)!==fo(es.current)||ao(at)!==ao(nt.current)}async function Us(Z){ze(null),L(!0);try{const[fe,ke]=await Promise.all([ye("get_repo_info",{repoPath:Z}),ye("get_default_branch",{repoPath:Z})]);a(fe.name),M(ke),n(Z),await Wn(Z,ke),Jo(Z),ze({kind:"success",message:`Now targeting worktree at ${Z}`})}catch(fe){const ke=fe instanceof Error?fe.message:String(fe);ze({kind:"error",message:ke}),console.error("Failed to switch worktree:",ke)}finally{L(!1)}}async function Ws(Z,fe){if(!(!t||W)){P(!0),ze(null);try{await ye("remove_worktree",{repoPath:t,worktreePath:Z,force:fe}),await Wn(t),ze({kind:"success",message:`Removed worktree at ${Z}`})}catch(ke){const Se=ke instanceof Error?ke.message:String(ke);ze({kind:"error",message:Se}),console.error("Failed to remove worktree:",Se)}finally{P(!1)}}}async function fn(Z){B(!0),L(!0),Le(null),u([]),h([]),g([]),x([]),w({}),Be("map"),await new Promise(fe=>setTimeout(fe,15));try{const[fe,ke]=await Promise.all([ye("get_repo_info",{repoPath:Z}),ye("get_default_branch",{repoPath:Z})]);a(fe.name),M(ke),n(Z),Cy(Z)&&(await Wn(Z,ke),L(!1)),B(!1),Jo(Z)}catch(fe){console.error("Failed to load repo:",fe),Le(fe instanceof Error?fe.message:String(fe)),Be("landing"),n(null),B(!1),L(!1)}}async function Jo(Z){try{De(!1),st(null);const fe=await ye("get_github_info",{repoPath:Z}),ke=await ye("get_github_auth_status");if(je(ke),!ke.ghAvailable||!ke.authenticated)return;const Se=await ye("get_open_prs",{owner:fe.owner,repo:fe.repo});C(Se),De(!0)}catch(fe){console.log("GitHub data not available:",fe),st(fe instanceof Error?fe.message:String(fe)),De(!1)}}y.useEffect(()=>{let Z=null,fe=!1;const ke=(()=>{try{return km().label}catch{return null}})(),Se=async ut=>{var Tt;const lt=(Tt=ut==null?void 0:ut.path)==null?void 0:Tt.trim();if(!(!lt||fe)){if(t===lt){Be("map");return}await fn(lt)}};return(async()=>{ke==="main"&&(Z=await rc("gitviz://open-repo",async lt=>{await Se(lt.payload)}));const ut=await ye("take_pending_open_repo");await Se(ut)})(),()=>{fe=!0,Z&&Z()}},[t]),y.useEffect(()=>{dn.current=c},[c]),y.useEffect(()=>{es.current=p},[p]),y.useEffect(()=>{nt.current=N},[N]),y.useEffect(()=>{qn.current=Dn},[Dn]),y.useEffect(()=>{if(!t||!k||jn)return;ye("watch_repo",{repoPath:t}).catch(console.error);let Z=!1,fe=!1,ke,Se=null;const at=new Set;let ut=null,lt=!1,Tt=!1,Lt=null,Gn=null,ns=null,An=null;const wn=Jt=>Jt.map(Rt=>`${Rt.name}|${Rt.headSha}|${Rt.commitsAhead}|${Rt.commitsBehind}|${Rt.unpushedCommits}|${Rt.remoteSyncStatus}`).join("||"),Nn=Jt=>Jt.map(Rt=>{var j,Y;return`${Rt.fullSha}:${(j=Rt.targetBranch)!=null?j:""}:${((Y=Rt.parentShas)!=null?Y:[]).join(",")}`}).join("|"),Os=Jt=>Jt.map(Rt=>Rt.fullSha).join("|"),zt=async()=>{if(Z){fe=!0;return}Z=!0;try{const Jt=ye("get_branches",{repoPath:t}),Rt=ye("get_checked_out_ref",{repoPath:t}).catch(()=>null),j=ye("list_worktrees",{repoPath:t}).catch(()=>[]),Y=ye("get_direct_commits",{repoPath:t,branch:k}),re=ye("get_unpushed_direct_commits",{repoPath:t,branch:k}).catch(()=>[]),[me,Ve,Ie,Ge,dt]=await Promise.allSettled([Jt,Rt,j,Y,re]);if(lt)return;const tt=me.status==="fulfilled"?me.value:null;if(tt){const Xt=wn(tt);Xt!==Gn&&(Gn=Xt,u(tt))}if(Ge.status==="fulfilled"){const Xt=Ge.value,Rn=Os(Xt);Rn!==An&&(An=Rn,g(Xt))}dt.status==="fulfilled"&&x(dt.value),Ie.status==="fulfilled"&&$(Ie.value);const Et=[k,...(tt!=null?tt:[]).map(Xt=>Xt.name)],mn=await Promise.all(Et.map(async Xt=>{const Rn=await ye("get_branch_unpushed_commit_shas",{repoPath:t,branch:Xt}).catch(()=>[]);return[Xt,Rn]}));if(lt||w(Object.fromEntries(mn)),ye("list_stashes",{repoPath:t}).then(Xt=>{lt||_n(Xt)}).catch(()=>{}),L(!1),Ve.status==="fulfilled"&&Ve.value){const Xt=Ve.value;A(Rn=>Rn&&Rn.branchName===Xt.branchName&&Rn.headSha===Xt.headSha&&Rn.parentSha===Xt.parentSha&&Rn.hasUncommittedChanges===Xt.hasUncommittedChanges?Rn:Xt)}const yn=Array.from(new Set([k,...(tt!=null?tt:[]).map(Xt=>Xt.name)])),Pn=await uo(t,yn).catch(()=>[]);if(lt)return;const Mn=Nn(Pn);Mn!==ns&&(ns=Mn,h(Pn))}catch(Jt){console.error("Auto-refresh failed:",Jt)}finally{L(!1),Z=!1,fe&&!lt&&(fe=!1,ke=window.setTimeout(zt,200))}},Ut=async()=>{var Jt;if(!Tt){Tt=!0;try{const Rt=await ye("get_checked_out_ref",{repoPath:t});if(lt)return;const j=`${(Jt=Rt.branchName)!=null?Jt:""}|${Rt.headSha}|${Rt.hasUncommittedChanges?1:0}`,Y=Lt,re=!Y||Y.split("|").slice(0,2).join("|")!==j.split("|").slice(0,2).join("|");Lt=j,A(me=>me&&me.branchName===Rt.branchName&&me.headSha===Rt.headSha&&me.hasUncommittedChanges===Rt.hasUncommittedChanges?me:Rt),re&&gn()}catch{}finally{Tt=!1}}},gn=()=>{clearTimeout(ke),ke=window.setTimeout(zt,100);const Jt=[450];for(const Rt of Jt){const j=window.setTimeout(()=>{at.delete(j),zt()},Rt);at.add(j)}};return rc("git-activity",Jt=>{if(Jt.payload==="local"){Ut();return}gn()}).then(Jt=>{lt?Jt():ut=Jt}).catch(console.error),zt(),Se=window.setInterval(()=>{Ut()},700),Ut(),()=>{lt=!0,clearTimeout(ke),Se!=null&&window.clearInterval(Se);for(const Jt of at)window.clearTimeout(Jt);at.clear(),ut&&ut()}},[t,k,jn]),y.useEffect(()=>{if(!t||!k||!jn)return;ye("watch_repo",{repoPath:t}).catch(console.error);let Z=!1,fe=!1,ke=!1,Se=null;const at=async()=>{if(!Z){if(qn.current){fe=!0;return}if(ke){fe=!0;return}ke=!0;try{if(!await Vs(t,k)||Z)return;await Wn(t,k)}catch(lt){console.warn("Frozen git-activity refresh failed:",lt)}finally{ke=!1,fe&&!Z&&(fe=!1,window.setTimeout(()=>{at()},0))}}},ut=()=>{fe=!0,at()};return rc("git-activity",()=>{ut()}).then(lt=>{Z?lt():Se=lt}).catch(console.error),()=>{Z=!0,Se&&Se()}},[t,k,jn]);async function Ro(){if(t){ct(!0),st(null);try{await ye("authenticate_github");const Z=await ye("get_github_auth_status");je(Z),Z.authenticated?await Jo(t):Z.message&&st(Z.message)}catch(Z){st(Z instanceof Error?Z.message:String(Z))}finally{ct(!1)}}}const Ys=new Set(S.map(Z=>Z.branchName)),ts=14*864e5,So=Date.now(),ei=c.filter(Z=>Z.status==="stale"),ko=ei.filter(Z=>Ys.has(Z.name)||So-new Date(Z.lastCommitDate).getTime()<=ts),Bo=ei.filter(Z=>!Ys.has(Z.name)&&So-new Date(Z.lastCommitDate).getTime()>ts),ho=Z=>{var fe;return Object.prototype.hasOwnProperty.call(Pe,Z.name)?Math.max(0,(fe=Pe[Z.name])!=null?fe:0):Math.max(0,Z.commitsAhead)};y.useEffect(()=>{Ot({}),mt({}),xt({}),hs.current=null,ct(!1),je(null),st(null),A(null),ze(null)},[t]),y.useEffect(()=>{var ns,An,wn,Nn,Os;if(!t||!k){Ot({}),mt({}),xt({}),hs.current=null;return}const Z=c.map(zt=>{var Ut;return`${zt.name}:${zt.headSha}:${(Ut=zt.parentBranch)!=null?Ut:""}:${zt.commitsAhead}`}).join("|"),fe=d.map(zt=>{var Ut,gn;return`${zt.fullSha}:${(gn=(Ut=zt.parentShas)==null?void 0:Ut[1])!=null?gn:""}`}).join("|"),ke=`${t}|${k}|${Z}|${fe}`;if(hs.current===ke)return;hs.current=ke;const Se=new Map;for(const zt of d){const Ut=(An=(ns=zt.parentShas)==null?void 0:ns.slice(1))!=null?An:[];for(const gn of Ut)gn&&!Se.has(gn)&&Se.set(gn,zt)}const at=c.filter(zt=>zt.name!==k),ut=new Map;for(const zt of at){if(!zt.parentBranch||zt.parentBranch===zt.name)continue;const Ut=(wn=ut.get(zt.parentBranch))!=null?wn:0;ut.set(zt.parentBranch,Ut+1)}const lt=new Map;for(const zt of at){if(!zt.headSha)continue;const Ut=(Nn=lt.get(zt.headSha))!=null?Nn:[];Ut.push(zt),lt.set(zt.headSha,Ut)}const Tt=new Set;for(const zt of lt.values()){if(zt.length<2)continue;const Ut=[...zt].sort((gn,Jt)=>{var Y,re,me,Ve;const Rt=(re=(Y=gn.createdDate)!=null?Y:gn.divergedFromDate)!=null?re:gn.lastCommitDate,j=(Ve=(me=Jt.createdDate)!=null?me:Jt.divergedFromDate)!=null?Ve:Jt.lastCommitDate;return Rt.localeCompare(j)});for(let gn=1;gn<Ut.length;gn++)Tt.add(Ut[gn].name)}for(const zt of at){const Ut=((Os=ut.get(zt.name))!=null?Os:0)>0;zt.commitsAhead===0&&zt.headSha&&!Se.has(zt.headSha)&&!Ut&&Tt.add(zt.name)}let Lt=!1;async function Gn(){const zt=await Promise.all(at.map(async j=>{var Y,re,me;try{const Ve=(re=(Y=j.createdDate)!=null?Y:j.divergedFromDate)!=null?re:j.lastCommitDate,Ie=new Date(Ve).getTime(),Ge=j.parentBranch&&j.parentBranch!==j.name?j.parentBranch:k,dt=Se.get(j.headSha),tt=!!dt,Et=Tt.has(j.name),mn=((me=ut.get(j.name))!=null?me:0)>0,yn=Et||!tt&&!mn&&j.remoteSyncStatus!=="on-github"&&j.commitsAhead===0&&!!j.headSha&&(j.headSha===j.createdFromSha||j.headSha===j.divergedFromSha),Mn=tt&&Ge===k&&!!(dt!=null&&dt.fullSha)?dt==null?void 0:dt.fullSha:void 0;let Xt=[],Rn=!1;if(!yn){if(Mn)Xt=(await ye("get_branch_commits",{repoPath:t,branch:j.name,baseBranch:Ge,mergeCommitSha:Mn,includePrompts:Vu})).filter(gs=>gs.fullSha!==Mn),Rn=!0;else{const Sn=[j.createdFromSha,j.divergedFromSha].filter(Yo=>!!Yo),gs=Array.from(new Set(Ge===k?[...Sn,Ge,k]:[Ge,...Sn,k]));let $o=null;for(const Yo of gs)try{const Eo=await ye("get_branch_commits",{repoPath:t,branch:j.name,baseBranch:Yo,includePrompts:Vu});$o==null&&($o=Eo);const Oi=Ge===k&&(Yo===j.createdFromSha||Yo===j.divergedFromSha);if(Yo===Ge){Xt=Eo,Rn=!0;break}if(Oi){Xt=Eo,Rn=!0;break}if(Eo.length>0){Xt=Eo,Rn=!0;break}}catch{}!Rn&&$o!=null&&(Xt=$o,Rn=!0)}!Rn&&Number.isFinite(Ie)&&(Xt=(await ye("get_recent_log",{repoPath:t,branch:j.name,limit:400,firstParent:!1,includePrompts:Vu})).filter(gs=>{const $o=new Date(gs.date).getTime();return Number.isFinite($o)&&$o>=Ie}))}const po=Xt.flatMap(Sn=>{var gs;return(gs=Sn.agentPrompts)!=null?gs:[]}).sort((Sn,gs)=>new Date(gs.timestamp).getTime()-new Date(Sn.timestamp).getTime()),zs=Xt.map(Sn=>{var gs;return{fullSha:Sn.fullSha,sha:Sn.sha,parentSha:(gs=Sn.parentSha)!=null?gs:null,message:Sn.message,author:Sn.author,date:Sn.date,kind:"commit"}}),gt=yn?0:zs.length,_o=zs;if(po.length===0)return[j.name,{promptMeta:null,previews:_o,uniqueCount:gt}];const js=po[0],To=[...po].sort((Sn,gs)=>new Date(Sn.timestamp).getTime()-new Date(gs.timestamp).getTime()).map(Sn=>({id:Sn.id,agent:Sn.agent,prompt:Sn.prompt,timestamp:Sn.timestamp}));return[j.name,{promptMeta:{count:po.length,latestPrompt:js.prompt,latestAgent:js.agent,latestTimestamp:js.timestamp,markers:To},previews:_o,uniqueCount:gt}]}catch{return[j.name,{promptMeta:null,previews:[],uniqueCount:null}]}}));let Ut=null;try{const Y=(await ye("get_recent_log",{repoPath:t,branch:k,limit:250,firstParent:!1,includePrompts:Vu})).flatMap(re=>{var me;return(me=re.agentPrompts)!=null?me:[]}).sort((re,me)=>new Date(me.timestamp).getTime()-new Date(re.timestamp).getTime());if(Y.length>0){const re=Y[0],Ve=[...Y].sort((Ie,Ge)=>new Date(Ie.timestamp).getTime()-new Date(Ge.timestamp).getTime()).map(Ie=>({id:Ie.id,agent:Ie.agent,prompt:Ie.prompt,timestamp:Ie.timestamp}));Ut={count:Y.length,latestPrompt:re.prompt,latestAgent:re.agent,latestTimestamp:re.timestamp,markers:Ve}}}catch{Ut=null}if(Lt)return;const gn={},Jt={},Rt={};for(const[j,Y]of zt)Y.promptMeta&&(gn[j]=Y.promptMeta),Jt[j]=[...Y.previews],Y.uniqueCount!=null&&(Rt[j]=Y.uniqueCount);Ut&&(gn[k]=Ut),Ot(gn),mt(Jt),xt(Rt)}return Gn(),()=>{Lt=!0}},[t,k,c,d]),y.useEffect(()=>{if(!ft){I(!1);return}I(!0);const Z=window.setTimeout(()=>{I(!1)},ky),fe=window.setTimeout(()=>{ze(null)},ky+vw);return()=>{window.clearTimeout(Z),window.clearTimeout(fe)}},[ft]),y.useEffect(()=>{if(!t||c.length===0)return;const Z=Se=>new Promise(at=>setTimeout(at,Se));async function fe(){const at=`${await ye("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${at}`),Be("map"),await Z(800),await ye("screenshot",{path:`${at}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${at}`)}const ke=Se=>{(Se.metaKey||Se.ctrlKey)&&Se.shiftKey&&Se.key==="S"&&(Se.preventDefault(),fe())};return window.addEventListener("keydown",ke),()=>window.removeEventListener("keydown",ke)},[t,i,c]);function Es(){Vt(!0),setTimeout(()=>{Ze(!1),Vt(!1),$t("active"),Ye(null)},100)}async function Fs(Z){if(!t)return;ze(null);const fe=/^STASH:(\d+)$/.exec(Z.commitSha);if(fe){try{const ke=parseInt(fe[1],10),Se=await ye("apply_stash_restore",{repoPath:t,stashIndex:ke});A(Se),await Wn(t);const at=`Stash ${ke+1}`,ut=Se.branchName?` on branch ${Se.branchName}`:" at the stash base (detached HEAD)";ze({kind:"success",message:`Restored ${at}${ut}; stash applied and dropped (uncommitted changes).`})}catch(ke){const Se=ke instanceof Error?ke.message:String(ke);ze({kind:"error",message:Se}),console.error("Failed to apply stash:",Se)}return}if(Z.branchName){const ke=(at,ut)=>{const lt=at.replace(/\\/g,"/").replace(/\/+$/,""),Tt=ut.replace(/\\/g,"/").replace(/\/+$/,"");return lt===Tt||lt.toLowerCase()===Tt.toLowerCase()},Se=E.find(at=>at.pathExists===!1||at.isCurrent||t&&ke(at.path,t)?!1:at.branchName===Z.branchName);if(Se){await Us(Se.path);return}}try{let ke="";(await ye("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await ye("stash_push",{repoPath:t,includeUntracked:!0}),ke="Stashed local changes (including untracked), then ",await Wn(t));const at=Z.branchName?await ye("checkout_branch",{repoPath:t,branchName:Z.branchName}):await ye("checkout_ref",{repoPath:t,refName:Z.commitSha}),ut=await ye("get_checked_out_ref",{repoPath:t}).catch(()=>at);A(ut),await Wn(t);const lt=ut.branchName?ut.branchName:`${ut.headSha.slice(0,7)} (detached)`;ze({kind:"success",message:`${ke}Checked out ${lt}`})}catch(ke){const Se=ke instanceof Error?ke.message:String(ke);ze({kind:"error",message:Se}),console.error("Failed to checkout commit:",Se)}}async function $n(){if(!(!t||rt)){ze(null),Kt(!0);try{if(!(await ye("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){ze({kind:"error",message:"No local changes to stash."});return}await ye("stash_push",{repoPath:t,includeUntracked:!0}),await Wn(t),ze({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(Z){const fe=Z instanceof Error?Z.message:String(Z);ze({kind:"error",message:fe}),console.error("Failed to stash:",fe)}finally{Kt(!1)}}}async function wi(Z){if(!t||Qt)return!1;const fe=Z.trim();if(!fe)return ze({kind:"error",message:"Enter a commit message."}),!1;ze(null),Nt(!0);try{if(!(await ye("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return ze({kind:"error",message:"No local changes to commit."}),!1;const Se=await ye("commit_working_tree",{repoPath:t,message:fe});return A(Se),await Wn(t),ze({kind:"success",message:"Committed local changes."}),!0}catch(ke){const Se=ke instanceof Error?ke.message:String(ke);return ze({kind:"error",message:Se}),console.error("Failed to commit:",Se),!1}finally{Nt(!1)}}async function Li(){if(!t||zn)return!1;ze(null),pt(!0);try{if(!(await ye("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return ze({kind:"error",message:"No local changes to stage."}),!1;const fe=await ye("stage_working_tree",{repoPath:t});return A(fe),await Wn(t),ze({kind:"success",message:"Staged all changes."}),!0}catch(Z){const fe=Z instanceof Error?Z.message:String(Z);return ze({kind:"error",message:fe}),console.error("Failed to stage:",fe),!1}finally{pt(!1)}}async function ti(Z,fe){if(!(!t||sn)){nn(!0),ze(null);try{const ke=/^STASH:(\d+)$/.exec(Z);let Se;if(ke){const at=parseInt(ke[1],10);Se=await ye("move_stash_to_new_branch",{repoPath:t,stashIndex:at,branchName:fe})}else Se=await ye("create_branch_from_uncommitted",{repoPath:t,branchName:fe});A(Se),await Wn(t),ze({kind:"success",message:`Moved to new branch "${fe}"`})}catch(ke){const Se=ke instanceof Error?ke.message:String(ke);ze({kind:"error",message:Se}),console.error("Failed to create branch from node:",Se)}finally{nn(!1)}}}async function to(Z){if(!(!t||sn)){nn(!0),ze(null);try{const fe=await ye("create_root_branch",{repoPath:t,branchName:Z});A(fe),await Wn(t),ze({kind:"success",message:`Created new root branch "${Z}"`})}catch(fe){const ke=fe instanceof Error?fe.message:String(fe);ze({kind:"error",message:ke}),console.error("Failed to create root branch:",ke)}finally{nn(!1)}}}async function Lo(Z,fe){if(!t)return;const ke=Array.from(new Set(Z.filter(Se=>!!Se&&Se!==fe)));if(ke.length!==0){ze(null),he(!0);try{let Se=null;for(const at of ke)Se=await ye("merge_ref_into_branch",{repoPath:t,sourceRef:at,targetBranch:fe});await Wn(t),Se&&A(Se),ze({kind:"success",message:ke.length===1?`Merged ${ke[0].slice(0,7)} into ${fe}`:`Merged ${ke.length} commits into ${fe}`})}catch(Se){const at=Se instanceof Error?Se.message:String(Se);ze({kind:"error",message:at}),console.error("Failed to merge refs into branch:",at)}finally{he(!1)}}}async function Oo(){if(!(!t||ve)){ze(null),We(!0);try{const Z=await ye("push_all_unpushed_branches",{repoPath:t});await Wn(t),ze({kind:"success",message:Z.length>0?Z.length===1?`Pushed ${Z[0].branchName}`:`Pushed ${Z.length} branches`:"Everything local is already pushed."})}catch(Z){const fe=Z instanceof Error?Z.message:String(Z);ze({kind:"error",message:fe}),console.error("Failed to push all branches:",fe)}finally{We(!1)}}}async function Ds(){if(!(!t||ve)){ze(null),We(!0);try{const Z=await ye("push_current_branch",{repoPath:t});await Wn(t),ze({kind:"success",message:`Pushed ${Z.branchName}`})}catch(Z){const fe=Z instanceof Error?Z.message:String(Z);ze({kind:"error",message:fe}),console.error("Failed to push current branch:",fe)}finally{We(!1)}}}async function ro(Z){var ke;if(!t||ve)return;const fe=Array.from(new Map(Z.filter(Se=>Se.branchName&&Se.targetSha).map(Se=>[Se.branchName,Se])).values());if(fe.length!==0){ze(null),We(!0);try{for(const Se of fe)await ye("push_branch",{repoPath:t,branchName:Se.branchName,targetSha:Se.targetSha});await Wn(t),ze({kind:"success",message:fe.length===1?`Pushed ${fe[0].branchName} through ${(ke=fe[0].targetSha)==null?void 0:ke.slice(0,7)}`:`Pushed ${fe.length} selected commit ranges`})}catch(Se){const at=Se instanceof Error?Se.message:String(Se);ze({kind:"error",message:at}),console.error("Failed to push selected commits:",at)}finally{We(!1)}}}async function In(Z){var ut;if(!t||Xe)return;const fe=Array.from(new Set(Z.branchNames.filter(lt=>lt&&lt!==k))),ke=!!Z.discardUncommittedChanges,Se=(ut=Z.stashIndices)!=null?ut:[],at=Array.from(new Set(Se)).sort((lt,Tt)=>Tt-lt);if(!(fe.length===0&&!ke&&at.length===0)){ze(null),Ne(!0);try{for(const Lt of at)await ye("stash_drop",{repoPath:t,stashIndex:Lt});const lt=fe.length>0||ke?await ye("delete_selected_elements",{repoPath:t,branchNames:fe,discardUncommittedChanges:ke}):{deletedBranches:[],discardedUncommittedChanges:!1};await Wn(t);const Tt=[];at.length>0&&Tt.push(at.length===1?`removed stash ${at[0]+1}`:`removed ${at.length} stashes`),lt.discardedUncommittedChanges&&Tt.push("discarded local uncommitted changes"),lt.deletedBranches.length>0&&Tt.push(lt.deletedBranches.length===1?`deleted ${lt.deletedBranches[0]}`:`deleted ${lt.deletedBranches.length} branches`),ze({kind:"success",message:Tt.length>0?Tt.join(" and "):"Nothing to delete."})}catch(lt){const Tt=lt instanceof Error?lt.message:String(lt);ze({kind:"error",message:Tt}),console.error("Failed to delete selected elements:",Tt)}finally{Ne(!1)}}}function mo(Z){Be("map"),Ye(Z),rn(fe=>{var ke;return{branch:Z,seq:((ke=fe==null?void 0:fe.seq)!=null?ke:0)+1}})}function Cs(){n(null),$([]),C([]),g([]),x([]),w({}),Ot({}),mt({}),xt({}),_n([]),De(!1),Be("landing")}function ms(Z){Z&&(we(Z),ae(fe=>fe+1))}function Si(Z){Z&&(q(Z),ae(fe=>fe+1))}const{enrichedBranches:Xs,enrichedBranchCommitPreviews:lo,enrichedBranchUniqueAheadCounts:Zt,enrichedDirectCommits:Wo}=y.useMemo(()=>{var re,me,Ve,Ie;const Z=xw(ln,c,p,Yt,Pe,k);let fe=Z.branches,ke=Z.directCommits,Se=Z.branchCommitPreviews,at=Z.branchUniqueAheadCounts;if(!(N!=null&&N.hasUncommittedChanges))return{enrichedBranches:fe,enrichedDirectCommits:ke,enrichedBranchCommitPreviews:Se,enrichedBranchUniqueAheadCounts:at};const ut=N.headSha||N.parentSha||null,lt=(me=(re=ke[0])==null?void 0:re.fullSha)!=null?me:null,Tt=(Ge,dt)=>!Ge||!dt?!1:Ge===dt||Ge.startsWith(dt)||dt.startsWith(Ge),Lt=[{name:k,headSha:lt!=null?lt:"",isDefault:!0},...fe.map(Ge=>({name:Ge.name,headSha:Ge.headSha,isDefault:!1}))],Gn=N.branchName?Lt.find(Ge=>Ge.name===N.branchName):void 0,ns=ut?Lt.filter(Ge=>Tt(Ge.headSha,ut)):[],An=(Ve=Gn!=null?Gn:ns.find(Ge=>Ge.isDefault))!=null?Ve:ns[0],wn=!!(An&&ut&&Tt(An.headSha,ut)),Nn=An&&!An.isDefault?fe.find(Ge=>Ge.name===An.name):void 0,Os=(()=>{var dt;if(!ut)return null;const Ge=ke.find(tt=>Tt(tt.fullSha,ut)||Tt(tt.sha,ut));if(Ge!=null&&Ge.date)return Ge.date;if(Nn){const tt=((dt=Se[Nn.name])!=null?dt:[]).find(Et=>Tt(Et.fullSha,ut)||Tt(Et.sha,ut));if(tt!=null&&tt.date)return tt.date}return null})(),zt=Os?new Date(Os).getTime():Number.NaN,Ut=Date.now(),gn=Number.isFinite(zt)?Math.max(Ut,zt+1):Ut,Jt=new Date(gn).toISOString(),Rt={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ut,message:"Local uncommitted changes",author:"You",date:Jt,kind:"uncommitted"},j={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ut,message:"Local uncommitted changes",author:"You",date:Jt,kind:"uncommitted"};if(wn&&(An!=null&&An.isDefault))return{enrichedBranches:fe,enrichedBranchCommitPreviews:Se,enrichedBranchUniqueAheadCounts:at,enrichedDirectCommits:[...ke,j]};if(wn&&Nn)return{enrichedBranches:fe.map(dt=>dt.name===Nn.name?{...dt,commitsAhead:dt.commitsAhead+1,unpushedCommits:dt.unpushedCommits+1,lastCommitDate:Jt,headSha:"WORKING_TREE"}:dt),enrichedDirectCommits:ke,enrichedBranchCommitPreviews:{...Se,[Nn.name]:[Rt,...Se[Nn.name]||[]]},enrichedBranchUniqueAheadCounts:{...at,[Nn.name]:Math.max(0,(Ie=Object.prototype.hasOwnProperty.call(at,Nn.name)?at[Nn.name]:Nn.commitsAhead)!=null?Ie:0)+1}};const Y={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:Jt,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:ut!=null?ut:void 0,parentBranch:(An==null?void 0:An.name)||N.branchName||k};return{enrichedBranches:[Y,...fe],enrichedBranchCommitPreviews:{...Se,[Y.name]:[Rt]},enrichedBranchUniqueAheadCounts:{...at,[Y.name]:1},enrichedDirectCommits:ke}},[c,Yt,Pe,N,k,p,ln]),Ns=y.useMemo(()=>Ex(Xs,k,lo),[Xs,k,lo]),zo=y.useMemo(()=>Dx({lanes:Ns,branches:Xs,mergeNodes:d,directCommits:Wo,unpushedDirectCommits:_,defaultBranch:k,branchCommitPreviews:lo,branchUniqueAheadCounts:Zt,manuallyOpenedClumps:G,manuallyClosedClumps:ce,isDebugOpen:!1,gridSearchQuery:X,gridFocusSha:K,checkedOutRef:N!=null?N:null,orientation:Un}),[Ns,Xs,d,Wo,_,k,lo,Zt,G,ce,X,K,(Co=N==null?void 0:N.headSha)!=null?Co:null,(jo=N==null?void 0:N.branchName)!=null?jo:null,Un]);return r.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[r.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Ts,children:Ee==="map"&&r.jsxs("div",{className:"relative z-10 h-12 pointer-events-none",children:[r.jsx("button",{onClick:Cs,"aria-label":"Back",title:"Back",className:"window-no-drag pointer-events-auto absolute left-19 top-1/2 inline-flex h-7 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent",children:r.jsx("svg",{className:"h-3.5 w-3.5 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),r.jsx("div",{className:"absolute left-1/2 top-1/2 min-w-0 max-w-[52vw] -translate-x-1/2 -translate-y-1/2 text-center",children:r.jsx("h1",{className:"truncate text-sm font-medium text-foreground",children:i})})]})}),r.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:[Ee==="landing"&&r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(kw,{onSelect:fn,loading:Te,error:oe})}),r.jsxs("div",{className:`relative flex h-full min-h-0 flex-1 overflow-hidden ${Ee==="landing"?"hidden":""}`,children:[r.jsx(_w,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",branches:Xs,defaultBranch:k,branchCommitPreviews:lo,directCommits:Wo,mergeNodes:d,checkedOutRef:N,manuallyOpenedClumps:G,manuallyClosedClumps:ce,setManuallyOpenedClumps:ne,setManuallyClosedClumps:xe,gridLayoutModel:zo,onSelectCommit:ms,onSelectBranch:Si}),r.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[r.jsx(hw,{branches:Xs,mergeNodes:d,directCommits:Wo,unpushedDirectCommits:_,unpushedCommitShasByBranch:b,defaultBranch:k,branchCommitPreviews:lo,branchUniqueAheadCounts:Zt,gridSearchQuery:X,gridSearchJumpToken:se,gridFocusSha:K,onGridSearchResultCountChange:_e,onGridSearchFocusChange:we,checkedOutRef:N,onCommitClick:Fs,onMergeRefsIntoBranch:Lo,mergeInProgress:J,onPushAllBranches:Oo,onPushCurrentBranch:Ds,onPushCommitTargets:ro,pushInProgress:ve,onDeleteSelection:In,deleteInProgress:Xe,worktrees:E,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Ws,removeWorktreeInProgress:W,onSwitchToWorktree:Us,onStashLocalChanges:$n,stashInProgress:rt,stashDisabled:!1,onCommitLocalChanges:wi,commitInProgress:Qt,commitDisabled:!1,onStageAllChanges:Li,stageInProgress:zn,onCreateBranchFromNode:ti,onCreateRootBranch:to,createBranchFromNodeInProgress:sn,onInteractionChange:Jn,manuallyOpenedClumps:G,manuallyClosedClumps:ce,setManuallyOpenedClumps:ne,setManuallyClosedClumps:xe,layoutModel:zo,orientation:Un}),r.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:r.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[r.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[r.jsx("button",{type:"button",role:"radio","aria-checked":Un==="horizontal",tabIndex:0,onClick:()=>fs("horizontal"),onKeyDown:Z=>{(Z.key==="ArrowRight"||Z.key==="ArrowDown")&&(Z.preventDefault(),fs("vertical"))},className:Fh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Un==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),r.jsx("button",{type:"button",role:"radio","aria-checked":Un==="vertical",tabIndex:0,onClick:()=>fs("vertical"),onKeyDown:Z=>{(Z.key==="ArrowLeft"||Z.key==="ArrowUp")&&(Z.preventDefault(),fs("horizontal"))},className:Fh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Un==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(He==null?void 0:He.ghAvailable)&&!He.authenticated&&r.jsx("button",{onClick:Ro,disabled:ot,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:ot?"Connecting GitHub...":"Connect GitHub"}),He&&!He.ghAvailable&&r.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),Qe&&r.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:Qe,children:Qe}),r.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[r.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),r.jsx("input",{value:X,onChange:Z=>q(Z.target.value),onKeyDown:Z=>{Z.key==="Enter"&&(Z.preventDefault(),ae(fe=>fe+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),r.jsx("button",{type:"button",onClick:()=>ae(Z=>Z+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),z!=null&&r.jsxs("span",{className:"text-xs text-muted-foreground",children:[z," match",z===1?"":"es"]}),K&&r.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",K.slice(0,7)]}),ft&&r.jsx("span",{className:Fh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",qe?"opacity-100":"opacity-0",ft.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:ft.message,children:ft.message})]})})]}),et&&r.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${Wt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[r.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),r.jsx("button",{onClick:Es,className:"text-muted-foreground hover:text-foreground transition-colors",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[r.jsxs("button",{onClick:()=>$t("active"),className:`text-xs font-medium transition-colors ${Mt==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[ko.length," active"]}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),r.jsxs("button",{onClick:()=>$t("inactive"),className:`text-xs font-medium transition-colors ${Mt==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Bo.length," inactive"]})]}),r.jsx("div",{className:"overflow-y-auto max-h-64",children:(Mt==="active"?ko:Bo).map(Z=>{const fe=(de==null?void 0:de.name)===Z.name,ke=ho(Z);return r.jsxs("button",{onClick:()=>mo(Z),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:`text-sm font-medium truncate ${fe?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:Z.name}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[ke>0&&`${ke} ahead`,ke>0&&Z.commitsBehind>0&&", ",Z.commitsBehind>0&&`${Z.commitsBehind} behind`]})]}),r.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},Z.name)})})]})]})]})]})}function kw({onSelect:t,loading:n,error:i}){const a="git-visualizer:recent-repositories",[u,d]=y.useState(""),[h,p]=y.useState(!1),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]);function C($){return Array.isArray($)?$.filter(W=>typeof W=="object"&&W!==null&&typeof W.path=="string"&&typeof W.name=="string"&&typeof W.lastOpenedAt=="number").slice(0,10):[]}y.useEffect(()=>{try{const $=localStorage.getItem(a);if(!$)return;S(C(JSON.parse($)))}catch{S([])}},[]);function k($){return $==="/"?$:$.replace(/\/+$/,"")}function M($){const W=k($.trim());if(!W)return;const P=W.split("/").pop()||W,q=[{path:W,name:P,lastOpenedAt:Date.now()},...w.filter(se=>se.path!==W)].slice(0,10);S(q);try{localStorage.setItem(a,JSON.stringify(q))}catch{}}function N($){const W=k($);b(null),M(W),t(W)}function A($){p(!1),N($)}function E($){$.preventDefault();const W=u.trim();if(!W)return;if(W.startsWith("http://")||W.startsWith("https://")||W.startsWith("git@")||W.startsWith("github.com/")){b("Enter a local repo folder path (for example: /Users/you/code/repo).");return}N(W)}return r.jsxs("main",{className:"h-full flex flex-col items-center pt-[16vh] bg-background",children:[r.jsxs("div",{className:"w-full max-w-sm flex flex-col items-center px-6",children:[r.jsxs("div",{className:"flex flex-col w-full gap-3 shrink-0",children:[r.jsx("button",{onClick:()=>p(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-2xl hover:opacity-90 transition-opacity",children:"Browse for repository"}),g?r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs("form",{onSubmit:E,className:"flex items-center border border-border bg-card rounded-2xl",children:[r.jsxs("div",{className:"relative flex-1 min-w-0 overflow-hidden rounded-l-2xl",children:[r.jsx("input",{autoFocus:!0,type:"text",value:u,onChange:$=>{d($.target.value),x&&b(null)},placeholder:"Enter local path",className:"w-full bg-transparent pl-5 pr-2 py-3.5 text-sm focus:outline-none placeholder:text-muted-foreground tabular-nums min-w-0"}),r.jsx("div",{className:"absolute left-0 inset-y-0 w-10 pointer-events-none",style:{background:"linear-gradient(to right, var(--card), transparent)"}})]}),r.jsx("button",{type:"submit",disabled:!u||n,className:"m-1.5 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-[14px] hover:opacity-90 transition-opacity shrink-0",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 5l7 7-7 7"})})})]}),x&&r.jsx("p",{className:"text-xs text-destructive px-2",children:x}),!x&&i&&r.jsx("p",{className:"text-xs text-destructive px-2",children:i})]}):r.jsx("button",{onClick:()=>_(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground text-sm font-medium rounded-2xl hover:bg-accent transition-colors disabled:opacity-50",children:"Enter repo path"})]}),w.length>0&&r.jsxs("div",{className:"w-full mt-8 flex flex-col",children:[r.jsx("p",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-3 shrink-0",children:"Recently opened"}),r.jsx("div",{className:"flex flex-col gap-2",children:w.slice(0,5).map($=>r.jsxs("button",{onClick:()=>N($.path),disabled:n,className:"w-full shrink-0 rounded-xl border border-border bg-card text-left px-4 py-2.5 hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed",children:[r.jsx("p",{className:"text-foreground truncate text-sm",children:$.name}),r.jsx("p",{className:"text-xs text-muted-foreground truncate",children:$.path})]},$.path))})]})]}),h&&r.jsx(gw,{onSelect:A,onClose:()=>p(!1)})]})}var Sc=wx(),Cw=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,jw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Cw}var ds=jw,Mw=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Tw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Mw}var rs=Tw,Ew=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Dw=({size:t=24,style:n={}})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Aw=({size:t=20,...n})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Nw=({size:t=24,copied:n=!1,tint:i})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${rs.iconState} ${n?rs.hiddenScaled:rs.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${rs.iconState} ${n?rs.visibleScaled:rs.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Rw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${rs.iconStateFast} ${i?rs.visibleScaled:u?rs.sending:rs.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${rs.iconStateFast} ${a?rs.visibleScaled:rs.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${rs.iconStateFast} ${c?rs.visibleScaled:rs.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Bw=({size:t=24,isOpen:n=!0})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${rs.iconFade} ${n?rs.visible:rs.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${rs.iconFade} ${n?rs.hidden:rs.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Lw=({size:t=24,isPaused:n=!1})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${rs.iconFadeFast} ${n?rs.hidden:rs.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${rs.iconFadeFast} ${n?rs.visible:rs.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Ow=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),zw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Bx=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),$w=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Iw=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Pw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Hw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Vw=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Uw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Ww=({size:t=24})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Lx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Xh=Lx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Em="feedback-freeze-styles",qh="__agentation_freeze";function Yw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[qh]||(t[qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[qh]}var xn=Yw();typeof window<"u"&&!xn.installed&&(xn.origSetTimeout=window.setTimeout.bind(window),xn.origSetInterval=window.setInterval.bind(window),xn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?xn.origSetTimeout(t,n):xn.origSetTimeout((...a)=>{xn.frozen?xn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?xn.origSetInterval(t,n):xn.origSetInterval((...a)=>{xn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>xn.origRAF(n=>{xn.frozen?xn.frozenRAFQueue.push(t):t(n)}),xn.installed=!0);var Ht=xn.origSetTimeout,Fw=xn.origSetInterval,el=xn.origRAF;function Xw(t){return t?Lx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function qw(){if(typeof document>"u"||xn.frozen)return;xn.frozen=!0,xn.frozenTimeoutQueue=[],xn.frozenRAFQueue=[];let t=document.getElementById(Em);t||(t=document.createElement("style"),t.id=Em),t.textContent=`
    *${Xh},
    *${Xh}::before,
    *${Xh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),xn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Xw(i)||(n.pause(),xn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function jy(){var i;if(typeof document>"u"||!xn.frozen)return;xn.frozen=!1;const t=xn.frozenTimeoutQueue;xn.frozenTimeoutQueue=[];for(const a of t)xn.origSetTimeout(()=>{if(xn.frozen){xn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=xn.frozenRAFQueue;xn.frozenRAFQueue=[];for(const a of n)xn.origRAF(c=>{if(xn.frozen){xn.frozenRAFQueue.push(a);return}a(c)});for(const a of xn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}xn.pausedAnimations=[],(i=document.getElementById(Em))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Gh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var wd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},C){const[k,M]=y.useState(u),[N,A]=y.useState(!1),[E,$]=y.useState("initial"),[W,P]=y.useState(!1),[X,q]=y.useState(!1),se=y.useRef(null),ae=y.useRef(null),G=y.useRef(null),ne=y.useRef(null);y.useEffect(()=>{b&&E!=="exit"&&$("exit")},[b,E]),y.useEffect(()=>{Ht(()=>{$("enter")},0);const we=Ht(()=>{$("entered")},200),Te=Ht(()=>{const B=se.current;B&&(Gh(B),B.selectionStart=B.selectionEnd=B.value.length,B.scrollTop=B.scrollHeight)},50);return()=>{clearTimeout(we),clearTimeout(Te),G.current&&clearTimeout(G.current),ne.current&&clearTimeout(ne.current)}},[]);const ce=y.useCallback(()=>{ne.current&&clearTimeout(ne.current),A(!0),ne.current=Ht(()=>{A(!1),Gh(se.current)},250)},[]);y.useImperativeHandle(C,()=>({shake:ce}),[ce]);const xe=y.useCallback(()=>{$("exit"),G.current=Ht(()=>{p()},150)},[p]),z=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),_e=y.useCallback(we=>{we.stopPropagation(),!we.nativeEvent.isComposing&&(we.key==="Enter"&&!we.shiftKey&&(we.preventDefault(),z()),we.key==="Escape"&&xe())},[z,xe]),K=[ds.popup,w?ds.light:"",E==="enter"?ds.enter:"",E==="entered"?ds.entered:"",E==="exit"?ds.exit:"",N?ds.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:ae,className:K,"data-annotation-popup":!0,style:_,onClick:we=>we.stopPropagation(),children:[r.jsxs("div",{className:ds.header,children:[S&&Object.keys(S).length>0?r.jsxs("button",{className:ds.headerToggle,onClick:()=>{const we=X;q(!X),we&&Ht(()=>Gh(se.current),0)},type:"button",children:[r.jsx("svg",{className:`${ds.chevron} ${X?ds.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:ds.element,children:n})]}):r.jsx("span",{className:ds.element,children:n}),i&&r.jsx("span",{className:ds.timestamp,children:i})]}),S&&Object.keys(S).length>0&&r.jsx("div",{className:`${ds.stylesWrapper} ${X?ds.expanded:""}`,children:r.jsx("div",{className:ds.stylesInner,children:r.jsx("div",{className:ds.stylesBlock,children:Object.entries(S).map(([we,Te])=>r.jsxs("div",{className:ds.styleLine,children:[r.jsx("span",{className:ds.styleProperty,children:we.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:ds.styleValue,children:Te}),";"]},we))})})}),a&&r.jsxs("div",{className:ds.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),r.jsx("textarea",{ref:se,className:ds.textarea,style:{borderColor:W?x:void 0},placeholder:c,value:k,onChange:we=>M(we.target.value),onFocus:()=>P(!0),onBlur:()=>P(!1),rows:2,onKeyDown:_e}),r.jsxs("div",{className:ds.actions,children:[g&&r.jsx("div",{className:ds.deleteWrapper,children:r.jsx("button",{className:ds.deleteButton,onClick:g,type:"button",children:r.jsx(Vw,{size:22})})}),r.jsx("button",{className:ds.cancel,onClick:xe,children:"Cancel"}),r.jsx("button",{className:ds.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:z,disabled:!k.trim(),children:d})]})]})}),Gw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const C=g.current.getBoundingClientRect();p({top:C.top+C.height/2,right:window.innerWidth-C.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Ht(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Ht(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Sc.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},Kw=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Qw={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=Kw}var My=Qw,hr=({content:t})=>r.jsx(Gw,{className:My.tooltip,content:t,children:r.jsx(Aw,{className:My.tooltipIcon})}),bt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ox=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...bt.navigation},{type:"header",label:"Header",...bt.header},{type:"hero",label:"Hero",...bt.hero},{type:"section",label:"Section",...bt.section},{type:"sidebar",label:"Sidebar",...bt.sidebar},{type:"footer",label:"Footer",...bt.footer},{type:"modal",label:"Modal",...bt.modal},{type:"banner",label:"Banner",...bt.banner},{type:"drawer",label:"Drawer",...bt.drawer},{type:"popover",label:"Popover",...bt.popover},{type:"divider",label:"Divider",...bt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...bt.card},{type:"text",label:"Text",...bt.text},{type:"image",label:"Image",...bt.image},{type:"video",label:"Video",...bt.video},{type:"table",label:"Table",...bt.table},{type:"grid",label:"Grid",...bt.grid},{type:"list",label:"List",...bt.list},{type:"chart",label:"Chart",...bt.chart},{type:"codeBlock",label:"Code Block",...bt.codeBlock},{type:"map",label:"Map",...bt.map},{type:"timeline",label:"Timeline",...bt.timeline},{type:"calendar",label:"Calendar",...bt.calendar},{type:"accordion",label:"Accordion",...bt.accordion},{type:"carousel",label:"Carousel",...bt.carousel},{type:"logo",label:"Logo",...bt.logo},{type:"faq",label:"FAQ",...bt.faq},{type:"gallery",label:"Gallery",...bt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...bt.button},{type:"input",label:"Input",...bt.input},{type:"search",label:"Search",...bt.search},{type:"form",label:"Form",...bt.form},{type:"tabs",label:"Tabs",...bt.tabs},{type:"dropdown",label:"Dropdown",...bt.dropdown},{type:"toggle",label:"Toggle",...bt.toggle},{type:"stepper",label:"Stepper",...bt.stepper},{type:"rating",label:"Rating",...bt.rating},{type:"fileUpload",label:"File Upload",...bt.fileUpload},{type:"checkbox",label:"Checkbox",...bt.checkbox},{type:"radio",label:"Radio",...bt.radio},{type:"slider",label:"Slider",...bt.slider},{type:"datePicker",label:"Date Picker",...bt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...bt.avatar},{type:"badge",label:"Badge",...bt.badge},{type:"tag",label:"Tag",...bt.tag},{type:"breadcrumb",label:"Breadcrumb",...bt.breadcrumb},{type:"pagination",label:"Pagination",...bt.pagination},{type:"progress",label:"Progress",...bt.progress},{type:"alert",label:"Alert",...bt.alert},{type:"toast",label:"Toast",...bt.toast},{type:"notification",label:"Notification",...bt.notification},{type:"tooltip",label:"Tooltip",...bt.tooltip},{type:"stat",label:"Stat",...bt.stat},{type:"skeleton",label:"Skeleton",...bt.skeleton},{type:"chip",label:"Chip",...bt.chip},{type:"icon",label:"Icon",...bt.icon},{type:"spinner",label:"Spinner",...bt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...bt.pricing},{type:"testimonial",label:"Testimonial",...bt.testimonial},{type:"cta",label:"CTA",...bt.cta},{type:"productCard",label:"Product Card",...bt.productCard},{type:"profile",label:"Profile",...bt.profile},{type:"feature",label:"Feature",...bt.feature},{type:"team",label:"Team",...bt.team},{type:"login",label:"Login",...bt.login},{type:"contact",label:"Contact",...bt.contact}]}],Ri={};for(const t of Ox)for(const n of t.items)Ri[n.type]=n;function $e({w:t,h:n=3,strong:i}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Zn({w:t,h:n,radius:i=3,style:a}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Uo({size:t}){return r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Zw({width:t,height:n}){const i=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[r.jsx(Zn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[r.jsx($e,{w:t*.06}),r.jsx($e,{w:t*.07}),r.jsx($e,{w:t*.05}),r.jsx($e,{w:t*.06})]}),r.jsx(Zn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function Jw({width:t,height:n,text:i}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):r.jsx($e,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx($e,{w:t*.6}),r.jsx($e,{w:t*.4}),r.jsx(Zn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function eS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx($e,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Zn,{w:10,h:10,radius:2}),r.jsx($e,{w:t*(.4+c*17%30/100)})]},c))]})}function tS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx($e,{w:"60%",h:3,strong:!0}),r.jsx($e,{w:"80%",h:2}),r.jsx($e,{w:"70%",h:2}),r.jsx($e,{w:"60%",h:2})]},c))})}function nS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx($e,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx($e,{w:"90%"}),r.jsx($e,{w:"70%"}),r.jsx($e,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Zn,{w:70,h:26,radius:4}),r.jsx(Zn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function sS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx($e,{w:"70%",h:4,strong:!0}),r.jsx($e,{w:"95%",h:2}),r.jsx($e,{w:"85%",h:2}),r.jsx($e,{w:"50%",h:2})]})]})}function oS({width:t,height:n,text:i}){if(i)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx($e,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>r.jsx($e,{w:`${70+u*13%25}%`,h:2},u))]})}function iS({width:t,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function aS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx($e,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx($e,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function rS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(Uo,{size:8}),r.jsx($e,{w:`${55+c*17%35}%`,h:2})]},c))})}function lS({width:t,height:n,text:i}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):r.jsx($e,{w:Math.max(20,t*.5),h:3,strong:!0})})}function cS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx($e,{w:Math.min(80,t*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx($e,{w:"40%",h:2})})]})}function uS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx($e,{w:60+c*17%30,h:2}),r.jsx(Zn,{w:"100%",h:28,radius:4})]},c)),r.jsx(Zn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function dS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx($e,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx($e,{w:"80%",h:2}),r.jsx($e,{w:"65%",h:2}),r.jsx($e,{w:"75%",h:2})]})]})}function fS({width:t,height:n}){const i=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function hS({width:t,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx($e,{w:Math.max(16,t*.5),h:2,strong:!0})})}function mS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx($e,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx($e,{w:t*.35})]})}function pS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[r.jsx($e,{w:t*.3,h:4,strong:!0}),r.jsx($e,{w:t*.7}),r.jsx($e,{w:t*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[r.jsx(Zn,{w:"33%",h:"100%",radius:4}),r.jsx(Zn,{w:"33%",h:"100%",radius:4}),r.jsx(Zn,{w:"33%",h:"100%",radius:4})]})]})}function _S({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>r.jsx(Zn,{w:"100%",h:"100%",radius:4},u))})}function gS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx($e,{w:t*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx($e,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function yS({width:t,height:n}){const i=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function xS({width:t,height:n}){const i=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[r.jsx(Uo,{size:Math.min(14,n*.4)}),r.jsx($e,{w:"50%",h:2})]})}function bS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(Uo,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:"60%",h:3,strong:!0}),r.jsx($e,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function vS({width:t,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function wS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return r.jsx(Zn,{w:a,h:`${d}%`,radius:2},u)})})}function SS({width:t,height:n}){const i=Math.min(t,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Zn,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function kS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx($e,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function CS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx($e,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function jS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>r.jsx(Zn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function MS({width:t}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function TS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx($e,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function ES({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Zn,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(Uo,{size:5}),r.jsx(Uo,{size:5}),r.jsx(Uo,{size:5})]})]})}function DS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx($e,{w:t*.4,h:3,strong:!0}),r.jsx($e,{w:t*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(Uo,{size:5}),r.jsx($e,{w:`${50+a*17%35}%`,h:2})]},a))}),r.jsx(Zn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function AS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx($e,{w:"90%",h:2}),r.jsx($e,{w:"75%",h:2}),r.jsx($e,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Uo,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx($e,{w:60,h:3,strong:!0}),r.jsx($e,{w:40,h:2})]})]})]})}function NS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx($e,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx($e,{w:t*.35}),r.jsx(Zn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function RS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:"40%",h:3,strong:!0}),r.jsx($e,{w:"70%",h:2})]})]})}function BS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx($e,{w:t*.4,h:3,strong:!0}),r.jsx(Zn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function LS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx($e,{w:t*.5,h:2}),r.jsx($e,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx($e,{w:t*.3,h:2})]})}function OS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function zS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx($e,{w:Math.max(16,t*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function $S({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function IS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function PS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(Uo,{size:8}),c<i-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx($e,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function HS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx($e,{w:t*.4,h:2}),r.jsx($e,{w:t*.25,h:2})]})}function VS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(Uo,{size:6}),r.jsx(Uo,{size:6}),r.jsx(Uo,{size:6})]}),Array.from({length:i},(a,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:r.jsx($e,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function US({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx($e,{w:t*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx($e,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function WS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(Uo,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:"50%",h:3,strong:!0}),r.jsx($e,{w:"75%",h:2})]}),r.jsx($e,{w:30,h:2})]})}function YS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx($e,{w:"65%",h:4,strong:!0}),r.jsx($e,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx($e,{w:"30%",h:5,strong:!0}),r.jsx(Zn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function FS({width:t,height:n}){const i=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(Uo,{size:i}),r.jsx($e,{w:t*.45,h:4,strong:!0}),r.jsx($e,{w:t*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx($e,{w:20,h:3,strong:!0}),r.jsx($e,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx($e,{w:20,h:3,strong:!0}),r.jsx($e,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx($e,{w:20,h:3,strong:!0}),r.jsx($e,{w:28,h:2})]})]})]})}function XS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx($e,{w:i*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx($e,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function qS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx($e,{w:"70%",h:3,strong:!0}),r.jsx($e,{w:"90%",h:2}),r.jsx($e,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function GS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[r.jsx(Zn,{w:i,h:i,radius:i*.25}),r.jsx($e,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function KS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx($e,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function QS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function ZS({width:t,height:n}){const i=Math.min(t,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function JS({width:t,height:n}){const i=Math.min(t,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function e4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function t4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx($e,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx($e,{w:t*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function n4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function s4({width:t,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx($e,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function o4({width:t,height:n}){const i=Math.min(t,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:r.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function i4({width:t,height:n}){const i=Math.min(t,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function a4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[r.jsx(Zn,{w:i,h:i,radius:i*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx($e,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx($e,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx($e,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(Uo,{size:a}),r.jsx($e,{w:t*.12,h:3,strong:!0}),r.jsx($e,{w:t*.08,h:2})]},u))})]})}function l4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[r.jsx($e,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx($e,{w:t*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:Math.min(60,t*.2),h:2}),r.jsx(Zn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Zn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx($e,{w:t*.4,h:2})]})}function c4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[r.jsx($e,{w:t*.4,h:4,strong:!0}),r.jsx($e,{w:t*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:50,h:2}),r.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:40,h:2}),r.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx($e,{w:50,h:2}),r.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx($e,{w:60,h:2}),r.jsx(Zn,{w:"100%",h:"100%",radius:4})]}),r.jsx(Zn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var u4={navigation:Zw,hero:Jw,sidebar:eS,footer:tS,modal:nS,card:sS,text:oS,image:iS,table:aS,list:rS,button:lS,input:cS,form:uS,tabs:dS,avatar:fS,badge:hS,header:mS,section:pS,grid:_S,dropdown:gS,toggle:yS,search:xS,toast:bS,progress:vS,chart:wS,video:SS,tooltip:kS,breadcrumb:CS,pagination:jS,divider:MS,accordion:TS,carousel:ES,pricing:DS,testimonial:AS,cta:NS,alert:RS,banner:BS,stat:LS,stepper:OS,tag:zS,rating:$S,map:IS,timeline:PS,fileUpload:HS,codeBlock:VS,calendar:US,notification:WS,productCard:YS,profile:FS,drawer:XS,popover:qS,logo:GS,faq:KS,gallery:QS,checkbox:ZS,radio:JS,slider:e4,datePicker:t4,skeleton:n4,chip:s4,icon:o4,spinner:i4,feature:a4,team:r4,login:l4,contact:c4};function d4({type:t,width:n,height:i,text:a}){const c=u4[t];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:i,text:a})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var f4=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,h4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=f4}var Ae=h4,Gr=24,Uu=5;function Ty(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],C=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const ae of n)i.has(ae.id)||k.push(ae);c&&k.push(...c);for(const ae of k){const G=ae.x,ne=ae.x+ae.width,ce=ae.x+ae.width/2,xe=ae.y,z=ae.y+ae.height,_e=ae.y+ae.height/2;for(const K of S)for(const we of[G,ne,ce]){const Te=we-K;Math.abs(Te)<Uu&&Math.abs(Te)<Math.abs(u)&&(u=Te)}for(const K of C)for(const we of[xe,z,_e]){const Te=we-K;Math.abs(Te)<Uu&&Math.abs(Te)<Math.abs(d)&&(d=Te)}}const M=Math.abs(u)<Uu?u:0,N=Math.abs(d)<Uu?d:0,A=[],E=new Set,$=h+M,W=p+M,P=g+M,X=_+N,q=x+N,se=b+N;for(const ae of k){const G=ae.x,ne=ae.x+ae.width,ce=ae.x+ae.width/2,xe=ae.y,z=ae.y+ae.height,_e=ae.y+ae.height/2;for(const K of[G,ce,ne])for(const we of[$,P,W])if(Math.abs(we-K)<.5){const Te=`x:${Math.round(K)}`;E.has(Te)||(E.add(Te),A.push({axis:"x",pos:K}))}for(const K of[xe,_e,z])for(const we of[X,se,q])if(Math.abs(we-K)<.5){const Te=`y:${Math.round(K)}`;E.has(Te)||(E.add(Te),A.push({axis:"y",pos:K}))}}return{dx:M,dy:N,guides:A}}function Ey(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function m4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:C}){const[k,M]=y.useState(new Set),[N,A]=y.useState(null),[E,$]=y.useState(null),[W,P]=y.useState(null),[X,q]=y.useState([]),[se,ae]=y.useState(null),[G,ne]=y.useState(!1),ce=y.useRef(!1),[xe,z]=y.useState(new Set),_e=y.useRef(new Map),K=y.useRef(null),we=y.useRef(null),Te=y.useRef(t);Te.current=t;const B=y.useRef(_);B.current=_;const H=y.useRef(b);H.current=b;const L=y.useRef(w);L.current=w;const oe=y.useRef(x);y.useEffect(()=>{x!==oe.current&&(oe.current=x,M(new Set))},[x]);const Le=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Le.current){Le.current=S;const ee=new Set(Te.current.map(De=>De.id));ee.size>0&&(z(ee),M(new Set),we.current=null,Ht(()=>{n([]),z(new Set)},180))}},[S,n]),y.useEffect(()=>{const ee=De=>{const He=De.target;if(!(He.tagName==="INPUT"||He.tagName==="TEXTAREA"||He.isContentEditable)){if((De.key==="Backspace"||De.key==="Delete")&&k.size>0){De.preventDefault();const ot=new Set(k);z(ot),M(new Set),Ht(()=>{n(Te.current.filter(ct=>!ot.has(ct.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(De.key)&&k.size>0){De.preventDefault();const ot=De.shiftKey?20:1,ct=De.key==="ArrowLeft"?-ot:De.key==="ArrowRight"?ot:0,Qe=De.key==="ArrowUp"?-ot:De.key==="ArrowDown"?ot:0;n(t.map(st=>k.has(st.id)?{...st,x:Math.max(0,st.x+ct),y:Math.max(0,st.y+Qe)}:st));return}if(De.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",ee),()=>document.removeEventListener("keydown",ee)},[k,i,t,n,a]);const Ee=y.useCallback(ee=>{if(ee.button!==0||p||ee.target.closest(`.${Ae.placement}`))return;ee.preventDefault(),ee.stopPropagation();const He=window.scrollY,je=ee.clientX,ot=ee.clientY;if(i){we.current="place",d==null||d(!0);let ct=!1,Qe=je,st=ot;const ft=qe=>{Qe=qe.clientX,st=qe.clientY;const I=Math.abs(Qe-je),J=Math.abs(st-ot);if((I>5||J>5)&&(ct=!0),ct){const he=Math.min(je,Qe),ve=Math.min(ot,st),We=Math.abs(Qe-je),Xe=Math.abs(st-ot);A({x:he,y:ve,w:We,h:Xe}),P({x:qe.clientX+12,y:qe.clientY+12,text:`${Math.round(We)} × ${Math.round(Xe)}`})}},ze=qe=>{window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",ze),A(null),P(null),we.current=null,d==null||d(!1);const I=bt[i];let J,he,ve,We;ct?(J=Math.min(je,Qe),he=Math.min(ot,st)+He,ve=Math.max(Gr,Math.abs(Qe-je)),We=Math.max(Gr,Math.abs(st-ot))):(ve=I.width,We=I.height,J=je-ve/2,he=ot+He-We/2),J=Math.max(0,J),he=Math.max(0,he);const Xe={id:Ey(),type:i,x:J,y:he,width:ve,height:We,scrollY:He,timestamp:Date.now()},Ne=[...t,Xe];n(Ne),M(new Set([Xe.id])),a(null)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",ze)}else{ee.shiftKey||M(new Set),we.current="select";let ct=!1;const Qe=ft=>{const ze=Math.abs(ft.clientX-je),qe=Math.abs(ft.clientY-ot);if((ze>4||qe>4)&&(ct=!0),ct){const I=Math.min(je,ft.clientX),J=Math.min(ot,ft.clientY);$({x:I,y:J,w:Math.abs(ft.clientX-je),h:Math.abs(ft.clientY-ot)})}},st=ft=>{if(window.removeEventListener("mousemove",Qe),window.removeEventListener("mouseup",st),we.current=null,ct){const ze=Math.min(je,ft.clientX),qe=Math.min(ot,ft.clientY)+He,I=Math.abs(ft.clientX-je),J=Math.abs(ft.clientY-ot),he=new Set(ee.shiftKey?k:new Set);for(const ve of t)ve.y-He,ve.x+ve.width>ze&&ve.x<ze+I&&ve.y+ve.height>qe&&ve.y<qe+J&&he.add(ve.id);M(he)}$(null)};window.addEventListener("mousemove",Qe),window.addEventListener("mouseup",st)}},[i,p,t,n,k]),Be=y.useCallback((ee,De)=>{var Xe;if(ee.button!==0)return;const He=ee.target;if(He.closest(`.${Ae.handle}`)||He.closest(`.${Ae.deleteButton}`))return;ee.preventDefault(),ee.stopPropagation();let je;ee.shiftKey?(je=new Set(k),je.has(De)?je.delete(De):je.add(De)):k.has(De)?je=new Set(k):je=new Set([De]),M(je),(je.size!==k.size||[...je].some(Ne=>!k.has(Ne)))&&((Xe=B.current)==null||Xe.call(B,je,ee.shiftKey));const ct=ee.clientX,Qe=ee.clientY,st=new Map;for(const Ne of t)je.has(Ne.id)&&st.set(Ne.id,{x:Ne.x,y:Ne.y});we.current="move",d==null||d(!0);let ft=!1,ze=!1,qe=t,I=0,J=0;const he=new Map;for(const Ne of t)st.has(Ne.id)&&he.set(Ne.id,{w:Ne.width,h:Ne.height});const ve=Ne=>{var zn;const Dt=Ne.clientX-ct,Ot=Ne.clientY-Qe;if((Math.abs(Dt)>2||Math.abs(Ot)>2)&&(ft=!0),!ft)return;if(Ne.altKey&&!ze){ze=!0;const pt=[];for(const sn of t)st.has(sn.id)&&pt.push({...sn,id:Ey(),timestamp:Date.now()});qe=[...t,...pt]}let Yt=1/0,mt=1/0,Pe=-1/0,xt=-1/0;for(const[pt,sn]of st){const nn=he.get(pt);nn&&(Yt=Math.min(Yt,sn.x+Dt),mt=Math.min(mt,sn.y+Ot),Pe=Math.max(Pe,sn.x+Dt+nn.w),xt=Math.max(xt,sn.y+Ot+nn.h))}const ln={x:Yt,y:mt,width:Pe-Yt,height:xt-mt},{dx:_n,dy:rt,guides:Kt}=Ty(ln,qe,new Set(st.keys()),void 0,g);q(Kt);const Qt=Dt+_n,Nt=Ot+rt;I=Qt,J=Nt,n(qe.map(pt=>{const sn=st.get(pt.id);return sn?{...pt,x:Math.max(0,sn.x+Qt),y:Math.max(0,sn.y+Nt)}:pt})),(zn=H.current)==null||zn.call(H,Qt,Nt)},We=()=>{var Ne;window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",We),we.current=null,d==null||d(!1),q([]),(Ne=L.current)==null||Ne.call(L,I,J,ft)};window.addEventListener("mousemove",ve),window.addEventListener("mouseup",We)},[k,t,n,d]),et=y.useCallback((ee,De,He)=>{ee.preventDefault(),ee.stopPropagation();const je=t.find(he=>he.id===De);if(!je)return;M(new Set([De])),we.current="resize",d==null||d(!0);const ot=ee.clientX,ct=ee.clientY,Qe=je.width,st=je.height,ft=je.x,ze=je.y,qe={left:He.includes("w"),right:He.includes("e"),top:He.includes("n"),bottom:He.includes("s")},I=he=>{const ve=he.clientX-ot,We=he.clientY-ct;let Xe=Qe,Ne=st,Dt=ft,Ot=ze;He.includes("e")&&(Xe=Math.max(Gr,Qe+ve)),He.includes("w")&&(Xe=Math.max(Gr,Qe-ve),Dt=ft+Qe-Xe),He.includes("s")&&(Ne=Math.max(Gr,st+We)),He.includes("n")&&(Ne=Math.max(Gr,st-We),Ot=ze+st-Ne);const Yt={x:Dt,y:Ot,width:Xe,height:Ne},{dx:mt,dy:Pe,guides:xt}=Ty(Yt,Te.current,new Set([De]),qe,g);q(xt),mt!==0&&(qe.right?Xe+=mt:qe.left&&(Dt+=mt,Xe-=mt)),Pe!==0&&(qe.bottom?Ne+=Pe:qe.top&&(Ot+=Pe,Ne-=Pe)),n(Te.current.map(ln=>ln.id===De?{...ln,x:Dt,y:Ot,width:Xe,height:Ne}:ln)),P({x:he.clientX+12,y:he.clientY+12,text:`${Math.round(Xe)} × ${Math.round(Ne)}`})},J=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",J),P(null),we.current=null,d==null||d(!1),q([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",J)},[t,n,d]),Ze=y.useCallback(ee=>{we.current=null,z(De=>{const He=new Set(De);return He.add(ee),He}),M(De=>{const He=new Set(De);return He.delete(ee),He}),Ht(()=>{n(Te.current.filter(De=>De.id!==ee)),z(De=>{const He=new Set(De);return He.delete(ee),He})},180)},[n]),Wt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Vt=y.useCallback(ee=>{const De=t.find(He=>He.id===ee);De&&(ce.current=!!De.text,ae(ee),ne(!1))},[t]),Mt=y.useCallback(()=>{se&&(ne(!0),Ht(()=>{ae(null),ne(!1)},150))},[se]);y.useEffect(()=>{u&&se&&Mt()},[u]);const $t=y.useCallback(ee=>{se&&(n(t.map(De=>De.id===se?{...De,text:ee.trim()||void 0}:De)),Mt())},[se,t,n,Mt]),tn=typeof window<"u"?window.scrollY:0,rn=["nw","ne","se","sw"],de=C?"#f97316":"#3c82f7",Ye=[{dir:"n",cls:Ae.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:de})})},{dir:"e",cls:Ae.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:de})})},{dir:"s",cls:Ae.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:de})})},{dir:"w",cls:Ae.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:de})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:K,className:`${Ae.overlay} ${c?"":Ae.light} ${i?Ae.placing:""} ${p?Ae.passthrough:""} ${u?Ae.overlayExiting:""} ${C?Ae.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ee,children:t.map(ee=>{var ot;const De=k.has(ee.id),He=((ot=Ri[ee.type])==null?void 0:ot.label)||ee.type,je=ee.y-tn;return r.jsxs("div",{"data-design-placement":ee.id,className:`${Ae.placement} ${De?Ae.selected:""} ${xe.has(ee.id)?Ae.exiting:""}`,style:{left:ee.x,top:je,width:ee.width,height:ee.height,position:"fixed"},onMouseDown:ct=>Be(ct,ee.id),onDoubleClick:()=>Vt(ee.id),children:[r.jsx("span",{className:Ae.placementLabel,children:He}),r.jsx("span",{className:`${Ae.placementAnnotation} ${ee.text?Ae.annotationVisible:""}`,children:(ee.text&&_e.current.set(ee.id,ee.text),ee.text||_e.current.get(ee.id)||"")}),r.jsx("div",{className:Ae.placementContent,children:r.jsx(d4,{type:ee.type,width:ee.width,height:ee.height,text:ee.text})}),r.jsx("div",{className:Ae.deleteButton,onMouseDown:ct=>ct.stopPropagation(),onClick:()=>Ze(ee.id),children:"✕"}),rn.map(ct=>r.jsx("div",{className:`${Ae.handle} ${Ae[`handle${ct.charAt(0).toUpperCase()}${ct.slice(1)}`]}`,onMouseDown:Qe=>et(Qe,ee.id,ct)},ct)),Ye.map(({dir:ct,cls:Qe,arrow:st})=>r.jsx("div",{className:`${Ae.edgeHandle} ${Qe}`,onMouseDown:ft=>et(ft,ee.id,ct),children:st},ct))]},ee.id)})}),se&&(()=>{var ze,qe;const ee=t.find(I=>I.id===se);if(!ee)return null;const De=ee.y-tn,He=ee.x+ee.width/2,je=De-8,ot=De+ee.height+8,ct=je>200,Qe=ot<window.innerHeight-100,st=Math.max(160,Math.min(window.innerWidth-160,He));let ft;return ct?ft={left:st,bottom:window.innerHeight-je}:Qe?ft={left:st,top:ot}:ft={left:st,top:Math.max(80,window.innerHeight/2-80)},r.jsx(wd,{element:((ze=Ri[ee.type])==null?void 0:ze.label)||ee.type,placeholder:Wt[ee.type]||"Label or content text",initialValue:(qe=ee.text)!=null?qe:"",submitLabel:ce.current?"Save":"Set",onSubmit:$t,onCancel:Mt,onDelete:ce.current?()=>{$t("")}:void 0,isExiting:G,lightMode:!c,style:ft})})(),N&&r.jsx("div",{className:Ae.drawBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),E&&r.jsx("div",{className:Ae.selectBox,style:{left:E.x,top:E.y,width:E.w,height:E.h},"data-feedback-toolbar":!0}),W&&r.jsx("div",{className:Ae.sizeIndicator,style:{left:W.x,top:W.y},"data-feedback-toolbar":!0,children:W.text}),X.map((ee,De)=>r.jsx("div",{className:Ae.guideLine,style:ee.axis==="x"?{position:"fixed",left:ee.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ee.pos-tn,right:0,height:1},"data-feedback-toolbar":!0},`${ee.axis}-${ee.pos}-${De}`))]})}function p4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Ae.fadeTop:""} ${i?Ae.fadeBottom:""}`}var R="currentColor",Me="0.5";function _4({type:t}){switch(t){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:R,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:R,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:R,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:R,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:R,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:R,strokeWidth:Me})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:R,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:R,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:R,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:R,strokeWidth:Me})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:R,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:R,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:R,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:R,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:R,strokeWidth:Me,fill:R,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Me})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:R,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:R,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:R,strokeWidth:Me})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:R,strokeWidth:Me,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:R,strokeWidth:Me,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:R,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:R,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:R,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:R,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:R,strokeWidth:Me})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:R,strokeWidth:Me})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:R,strokeWidth:Me,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:R,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:R,strokeWidth:Me}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:R,strokeWidth:Me})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:R,strokeWidth:Me,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:R,strokeWidth:Me,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:R,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:R,opacity:".15",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:Me})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:R,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:R,strokeWidth:Me})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:R,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:R,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:R,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:R,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:R,strokeWidth:Me,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:R,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:R,strokeWidth:Me})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:R,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:R,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:R,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:R,strokeWidth:Me})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:R,opacity:".2",stroke:R,strokeWidth:Me}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:R,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:R,strokeWidth:Me}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:R,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:R,strokeWidth:Me})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:R,strokeWidth:Me,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:R,strokeWidth:Me,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:R,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:R,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:R,strokeWidth:Me,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:R,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:R,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:R,opacity:".15",stroke:R,strokeWidth:Me})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:R,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:R,opacity:".2",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:R,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:Me,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:R,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:R,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:R,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:R,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:R,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:R,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:R,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:R,strokeWidth:Me,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:R,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:R,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:R,strokeWidth:Me})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:R,strokeWidth:Me,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:R,strokeWidth:Me})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:R,strokeWidth:Me}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:R,strokeWidth:Me,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:R,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:R,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:R,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:R,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Me})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:R,strokeWidth:Me,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:R,strokeWidth:Me}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:R,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:R,strokeWidth:Me})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:R,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:R,strokeWidth:Me,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:R,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:R,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:R,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:R,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:R,opacity:".08",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:R,strokeWidth:Me,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:R,strokeWidth:Me,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:R,strokeWidth:Me,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:R,strokeWidth:Me,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:R,strokeWidth:Me,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:R,strokeWidth:Me,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:R,strokeWidth:Me,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:R,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:R,strokeWidth:Me,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:R,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:R,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:R,strokeWidth:Me}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:R,opacity:".2"})]});default:return null}}function g4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:a,className:`${Ae.placeScroll} ${c||""}`,children:Ox.map(d=>r.jsxs("div",{className:Ae.paletteSection,children:[r.jsx("div",{className:Ae.paletteSectionTitle,children:d.section}),d.items.map(h=>r.jsxs("div",{className:`${Ae.paletteItem} ${t===h.type?Ae.active:""} ${u?Ae.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[r.jsx("div",{className:Ae.paletteItemIcon,children:r.jsx(_4,{type:h.type})}),r.jsx("span",{className:Ae.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function y4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Ht(()=>a(null),250)}else g.current=n},[t,n]),i===null?r.jsxs(r.Fragment,{children:[t,n?` ${n}`:""]}):x?r.jsxs("span",{className:Ae.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),r.jsxs("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.exitUp:Ae.exitDown}`,children:[i," ",c]},`o${i}-${t}`),r.jsxs("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.enterUp:Ae.enterDown}`,children:[t," ",n]},`n${t}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:Ae.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:t}),r.jsx("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.exitUp:Ae.exitDown}`,children:i},`o${i}-${t}`),r.jsx("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.enterUp:Ae.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function x4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[C,k]=y.useState(!1),[M,N]=y.useState("exit"),[A,E]=y.useState(!1),[$,W]=y.useState(!0),P=y.useRef(0),X=y.useRef(""),q=y.useRef(0),se=y.useRef(),ae=y.useRef(null),[G,ne]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(se.current),cancelAnimationFrame(q.current),q.current=el(()=>{q.current=el(()=>{N("enter")})})):(cancelAnimationFrame(q.current),N("exit"),clearTimeout(se.current),se.current=Ht(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(q.current)),[u]);const ce=h>0||a>0,xe=h+a;return xe>0&&(P.current=xe,X.current=_?xe===1?"Component":"Components":xe===1?"Change":"Changes"),y.useEffect(()=>{if(ce)A?W(!1):(W(!0),E(!0),el(()=>{el(()=>{W(!1)})}));else{W(!0);const z=Ht(()=>E(!1),300);return()=>clearTimeout(z)}},[ce]),y.useEffect(()=>{if(!C)return;const z=ae.current;if(!z)return;const _e=()=>ne(p4(z));_e(),z.addEventListener("scroll",_e,{passive:!0});const K=new ResizeObserver(_e);return K.observe(z),()=>{z.removeEventListener("scroll",_e),K.disconnect()}},[C]),C?r.jsxs("div",{className:`${Ae.palette} ${Ae[M]} ${i?"":Ae.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(se.current),k(!1),N("exit"),d==null||d()))},children:[r.jsxs("div",{className:Ae.paletteHeader,children:[r.jsx("div",{className:Ae.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:Ae.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${Ae.canvasToggle} ${_?Ae.active:""}`,onClick:()=>x(!_),children:[r.jsx("span",{className:Ae.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:Ae.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${Ae.wireframePurposeWrap} ${_?"":Ae.collapsed}`,children:r.jsx("div",{className:Ae.wireframePurposeInner,children:r.jsx("textarea",{className:Ae.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),r.jsx(g4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:ae,fadeClass:G,blankCanvas:_}),A&&r.jsx("div",{className:`${Ae.paletteFooterWrap} ${$?Ae.footerHidden:""}`,children:r.jsx("div",{className:Ae.paletteFooterInner,children:r.jsx("div",{className:Ae.paletteFooterInnerContent,children:r.jsxs("div",{className:Ae.paletteFooter,children:[r.jsx("span",{className:Ae.paletteFooterCount,children:r.jsx(y4,{value:P.current,suffix:X.current})}),r.jsx("button",{className:Ae.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function il(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Po(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=il(i)}return null}function b4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=il(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ol(t){var a,c,u,d,h,p,g,_;const n=b4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Po(t,"svg");if(x){const b=il(x);if(b instanceof HTMLElement)return{name:`graphic in ${ol(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=il(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(C=>C.replace(/[A-Z0-9]{5,}.*$/,"")).filter(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Ql(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Wu(t){const n=il(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const C=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));C&&(w=`.${C}`)}if(x==="button"||x==="a"){const C=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(C)return`${x}${w} "${C}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function Zl(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var zx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),v4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),w4=new Set(["input","textarea","select"]),S4=new Set(["img","video","canvas","svg"]),k4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Yu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;v4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:w4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:S4.has(a)?c=["width","height","objectFit","borderRadius"]:k4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!zx.has(h)&&(i[u]=h)}return i}var C4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Fu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of C4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!zx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function j4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Xu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function qu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=il(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var M4=new Set(["nav","header","main","section","article","footer","aside"]),Dm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Dy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},T4=new Set(["script","style","noscript","link","meta"]),E4=40;function $x(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function yr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":yr(i)} > ${n}:nth-child(${c})`}return n}function Sd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Dm[a])return Dm[a];if(Dy[n])return Dy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ol(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Ix(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Px(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function D4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(T4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<E4)return;const g=M4.has(d),_=c.getAttribute("role")&&Dm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=$x(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Sd(c),tagName:d,selector:yr(c),role:c.getAttribute("role"),className:Ix(c),textSnippet:Px(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function A4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=$x(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Sd(t),tagName:t.tagName.toLowerCase(),selector:yr(t),role:t.getAttribute("role"),className:Ix(t),textSnippet:Px(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Ay={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Ny=["nw","n","ne","e","se","s","sw","w"],Gu=24,Ry=16,Ku=5;function By(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const P of n)i.has(P.id)||b.push(P.currentRect);a&&b.push(...a);for(const P of b){const X=P.x,q=P.x+P.width,se=P.x+P.width/2,ae=P.y,G=P.y+P.height,ne=P.y+P.height/2;for(const ce of[d,h,p])for(const xe of[X,q,se]){const z=xe-ce;Math.abs(z)<Ku&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const ce of[g,_,x])for(const xe of[ae,G,ne]){const z=xe-ce;Math.abs(z)<Ku&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<Ku?c:0,S=Math.abs(u)<Ku?u:0,C=[],k=new Set,M=d+w,N=h+w,A=p+w,E=g+S,$=_+S,W=x+S;for(const P of b){const X=P.x,q=P.x+P.width,se=P.x+P.width/2,ae=P.y,G=P.y+P.height,ne=P.y+P.height/2;for(const ce of[X,se,q])for(const xe of[M,A,N])if(Math.abs(xe-ce)<.5){const z=`x:${Math.round(ce)}`;k.has(z)||(k.add(z),C.push({axis:"x",pos:ce}))}for(const ce of[ae,ne,G])for(const xe of[E,W,$])if(Math.abs(xe-ce)<.5){const z=`y:${Math.round(ce)}`;k.has(z)||(k.add(z),C.push({axis:"y",pos:ce}))}}return{dx:w,dy:S,guides:C}}var N4=new Set(["script","style","noscript","link","meta","br","hr"]);function Ly(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(N4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Ry&&i.height>=Ry)return n;n=n.parentElement}return null}function R4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,C]=y.useState(new Set),[k,M]=y.useState(!1),N=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==N.current&&(N.current=x,b.length>0&&M(!0))},[x,b.length]);const A=y.useRef(p);y.useEffect(()=>{p!==A.current&&(A.current=p,C(new Set))},[p]);const[E,$]=y.useState(null),[W,P]=y.useState(!1),X=y.useRef(!1),q=y.useCallback(I=>{const J=b.find(he=>he.id===I);J&&(X.current=!!J.note,$(I),P(!1))},[b]),se=y.useCallback(()=>{E&&(P(!0),Ht(()=>{$(null),P(!1)},150))},[E]),ae=y.useCallback(I=>{E&&(n({...t,sections:b.map(J=>J.id===E?{...J,note:I.trim()||void 0}:J)}),se())},[E,b,t,n,se]);y.useEffect(()=>{a&&E&&se()},[a]);const[G,ne]=y.useState(new Set),ce=y.useRef(new Map),[xe,z]=y.useState(null),[_e,K]=y.useState(null),[we,Te]=y.useState([]),[B,H]=y.useState(0),L=y.useRef(null),oe=y.useRef(new Set),Le=y.useRef(new Map),[Ee,Be]=y.useState(new Map),[et,Ze]=y.useState(new Map),Wt=y.useRef(new Set),Vt=y.useRef(new Map),Mt=y.useRef(h);Mt.current=h;const $t=y.useRef(g);$t.current=g;const tn=y.useRef(_);tn.current=_,y.useEffect(()=>{u&&C(new Set)},[u]);const[rn,de]=y.useState(()=>!t.sections.some(I=>{const J=I.originalRect,he=I.currentRect;return Math.abs(J.x-he.x)>1||Math.abs(J.y-he.y)>1||Math.abs(J.width-he.width)>1||Math.abs(J.height-he.height)>1}));y.useEffect(()=>{if(!rn){const I=Ht(()=>de(!0),380);return()=>clearTimeout(I)}},[]);const Ye=y.useRef(new Set);y.useEffect(()=>{Ye.current=new Set(b.map(I=>I.selector))},[b]),y.useEffect(()=>{const I=()=>H(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),y.useEffect(()=>{const I=J=>{if(L.current){z(null);return}const he=document.elementFromPoint(J.clientX,J.clientY);if(!he){z(null);return}if(he.closest("[data-feedback-toolbar]")){z(null);return}if(he.closest("[data-design-placement]")){z(null);return}if(he.closest("[data-annotation-popup]")){z(null);return}const ve=Ly(he);if(!ve){z(null);return}for(const Xe of Ye.current)try{const Ne=document.querySelector(Xe);if(Ne&&(Ne===ve||ve.contains(Ne))){z(null);return}}catch{}const We=ve.getBoundingClientRect();z({x:We.x,y:We.y,w:We.width,h:We.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[b]),y.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),y.useEffect(()=>{const I=J=>{var Ne,Dt,Ot,Yt;if(L.current||J.button!==0)return;const he=J.target;if(!he||he.closest("[data-feedback-toolbar]")||he.closest("[data-design-placement]")||he.closest("[data-annotation-popup]"))return;const ve=Ly(he);let We=!1;if(ve)for(const mt of Ye.current)try{const Pe=document.querySelector(mt);if(Pe&&(Pe===ve||ve.contains(Pe))){We=!0;break}}catch{}const Xe=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(ve&&!We){J.preventDefault(),J.stopPropagation();const mt=A4(ve),Pe=[...b,mt],xt=[...t.originalOrder,mt.id];n({...t,sections:Pe,originalOrder:xt});const ln=new Set([mt.id]);C(ln),(Ne=Mt.current)==null||Ne.call(Mt,ln,Xe),z(null);const _n=J.clientX,rt=J.clientY,Kt={x:mt.currentRect.x,y:mt.currentRect.y};mt.originalRect;let Qt=!1,Nt=0,zn=0;L.current="move";const pt=nn=>{var dn;const Dn=nn.clientX-_n,Jn=nn.clientY-rt;if(!Qt&&(Math.abs(Dn)>2||Math.abs(Jn)>2)&&(Qt=!0),!Qt)return;const Un={x:Kt.x+Dn,y:Kt.y+Jn,width:mt.currentRect.width,height:mt.currentRect.height},fs=By(Un,Pe,new Set([mt.id]),d);Te(fs.guides);const hs=Dn+fs.dx,jn=Jn+fs.dy;Nt=hs,zn=jn;const qn=document.querySelector(`[data-rearrange-section="${mt.id}"]`);qn&&(qn.style.transform=`translate(${hs}px, ${jn}px)`),Be(new Map([[mt.id,{x:Kt.x+hs,y:Kt.y+jn,width:mt.currentRect.width,height:mt.currentRect.height}]])),(dn=$t.current)==null||dn.call($t,hs,jn)},sn=()=>{var Dn;window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",sn),L.current=null,Te([]),Be(new Map);const nn=document.querySelector(`[data-rearrange-section="${mt.id}"]`);nn&&(nn.style.transform=""),Qt&&n({...t,sections:Pe.map(Jn=>Jn.id===mt.id?{...Jn,currentRect:{...Jn.currentRect,x:Math.max(0,Kt.x+Nt),y:Math.max(0,Kt.y+zn)}}:Jn),originalOrder:xt}),(Dn=tn.current)==null||Dn.call(tn,Nt,zn,Qt)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",sn)}else if(We&&ve){J.preventDefault();for(const mt of b)try{const Pe=document.querySelector(mt.selector);if(Pe&&Pe===ve){const xt=new Set([mt.id]);C(xt),(Dt=Mt.current)==null||Dt.call(Mt,xt,Xe);return}}catch{}Xe||(C(new Set),(Ot=Mt.current)==null||Ot.call(Mt,new Set,!1))}else Xe||(C(new Set),(Yt=Mt.current)==null||Yt.call(Mt,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[b,t,n]),y.useEffect(()=>{const I=J=>{const he=J.target;if(!(he.tagName==="INPUT"||he.tagName==="TEXTAREA"||he.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&S.size>0){J.preventDefault();const ve=new Set(S);ne(We=>{const Xe=new Set(We);for(const Ne of ve)Xe.add(Ne);return Xe}),C(new Set),Ht(()=>{const We=w.current;n({...We,sections:We.sections.filter(Xe=>!ve.has(Xe.id)),originalOrder:We.originalOrder.filter(Xe=>!ve.has(Xe))}),ne(Xe=>{const Ne=new Set(Xe);for(const Dt of ve)Ne.delete(Dt);return Ne})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&S.size>0){J.preventDefault();const ve=J.shiftKey?20:1,We=J.key==="ArrowLeft"?-ve:J.key==="ArrowRight"?ve:0,Xe=J.key==="ArrowUp"?-ve:J.key==="ArrowDown"?ve:0;n({...t,sections:b.map(Ne=>S.has(Ne.id)?{...Ne,currentRect:{...Ne.currentRect,x:Math.max(0,Ne.currentRect.x+We),y:Math.max(0,Ne.currentRect.y+Xe)}}:Ne)});return}J.key==="Escape"&&S.size>0&&C(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[S,b,t,n]);const ee=y.useCallback((I,J)=>{var _n;if(I.button!==0)return;const he=I.target;if(he.closest(`.${Ae.handle}`)||he.closest(`.${Ae.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let ve;I.shiftKey||I.metaKey||I.ctrlKey?(ve=new Set(S),ve.has(J)?ve.delete(J):ve.add(J)):S.has(J)?ve=new Set(S):ve=new Set([J]),C(ve),(ve.size!==S.size||[...ve].some(rt=>!S.has(rt)))&&((_n=Mt.current)==null||_n.call(Mt,ve,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const Xe=I.clientX,Ne=I.clientY,Dt=new Map;for(const rt of b)ve.has(rt.id)&&Dt.set(rt.id,{x:rt.currentRect.x,y:rt.currentRect.y});L.current="move";let Ot=!1,Yt=0,mt=0;const Pe=new Map;for(const rt of b)if(ve.has(rt.id)){const Kt=document.querySelector(`[data-rearrange-section="${rt.id}"]`);Pe.set(rt.id,{outlineEl:Kt,curW:rt.currentRect.width,curH:rt.currentRect.height})}const xt=rt=>{var fs;const Kt=rt.clientX-Xe,Qt=rt.clientY-Ne;if(Kt===0&&Qt===0)return;Ot=!0;let Nt=1/0,zn=1/0,pt=-1/0,sn=-1/0;for(const[hs,{curW:jn,curH:qn}]of Pe){const dn=Dt.get(hs);if(!dn)continue;const es=dn.x+Kt,nt=dn.y+Qt;Nt=Math.min(Nt,es),zn=Math.min(zn,nt),pt=Math.max(pt,es+jn),sn=Math.max(sn,nt+qn)}const nn=By({x:Nt,y:zn,width:pt-Nt,height:sn-zn},b,ve,d),Dn=Kt+nn.dx,Jn=Qt+nn.dy;Yt=Dn,mt=Jn,Te(nn.guides);for(const[,{outlineEl:hs}]of Pe)hs&&(hs.style.transform=`translate(${Dn}px, ${Jn}px)`);const Un=new Map;for(const[hs,{curW:jn,curH:qn}]of Pe){const dn=Dt.get(hs);if(dn){const es={x:Math.max(0,dn.x+Dn),y:Math.max(0,dn.y+Jn),width:jn,height:qn};Un.set(hs,es)}}Be(Un),(fs=$t.current)==null||fs.call($t,Dn,Jn)},ln=rt=>{var Kt,Qt;window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",ln),L.current=null,Te([]),Be(new Map);for(const[,{outlineEl:Nt}]of Pe)Nt&&(Nt.style.transform="");if(Ot){const Nt=rt.clientX-Xe,zn=rt.clientY-Ne;if(Math.abs(Nt)<5&&Math.abs(zn)<5)n({...t,sections:b.map(pt=>{const sn=Dt.get(pt.id);return sn?{...pt,currentRect:{...pt.currentRect,x:sn.x,y:sn.y}}:pt})});else{n({...t,sections:b.map(pt=>{const sn=Dt.get(pt.id);return sn?{...pt,currentRect:{...pt.currentRect,x:Math.max(0,sn.x+Yt),y:Math.max(0,sn.y+mt)}}:pt})}),(Kt=tn.current)==null||Kt.call(tn,Yt,mt,!0);return}}(Qt=tn.current)==null||Qt.call(tn,0,0,!1)};window.addEventListener("mousemove",xt),window.addEventListener("mouseup",ln)},[S,b,t,n]),De=y.useCallback((I,J,he)=>{I.preventDefault(),I.stopPropagation();const ve=b.find(xt=>xt.id===J);if(!ve)return;C(new Set([J])),L.current="resize";const We=I.clientX,Xe=I.clientY,Ne={...ve.currentRect};ve.originalRect;const Dt=Ne.width/Ne.height;let Ot={...Ne};const Yt=document.querySelector(`[data-rearrange-section="${J}"]`),mt=xt=>{const ln=xt.clientX-We,_n=xt.clientY-Xe;let rt=Ne.x,Kt=Ne.y,Qt=Ne.width,Nt=Ne.height;if(he.includes("e")&&(Qt=Math.max(Gu,Ne.width+ln)),he.includes("w")&&(Qt=Math.max(Gu,Ne.width-ln),rt=Ne.x+Ne.width-Qt),he.includes("s")&&(Nt=Math.max(Gu,Ne.height+_n)),he.includes("n")&&(Nt=Math.max(Gu,Ne.height-_n),Kt=Ne.y+Ne.height-Nt),xt.shiftKey)if(he.length===2){const pt=Math.abs(Qt-Ne.width),sn=Math.abs(Nt-Ne.height);pt>sn?Nt=Qt/Dt:Qt=Nt*Dt,he.includes("w")&&(rt=Ne.x+Ne.width-Qt),he.includes("n")&&(Kt=Ne.y+Ne.height-Nt)}else he==="e"||he==="w"?Nt=Qt/Dt:Qt=Nt*Dt,he==="w"&&(rt=Ne.x+Ne.width-Qt),he==="n"&&(Kt=Ne.y+Ne.height-Nt);Ot={x:rt,y:Kt,width:Qt,height:Nt},Yt&&(Yt.style.left=`${rt}px`,Yt.style.top=`${Kt-B}px`,Yt.style.width=`${Qt}px`,Yt.style.height=`${Nt}px`),K({x:xt.clientX+12,y:xt.clientY+12,text:`${Math.round(Qt)} × ${Math.round(Nt)}`}),Be(new Map([[J,Ot]]))},Pe=()=>{window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Pe),K(null),L.current=null,Be(new Map),n({...t,sections:b.map(xt=>xt.id===J?{...xt,currentRect:Ot}:xt)})};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Pe)},[b,t,n,B]),He=y.useCallback(I=>{ne(J=>{const he=new Set(J);return he.add(I),he}),C(J=>{const he=new Set(J);return he.delete(I),he}),Ht(()=>{const J=w.current;n({...J,sections:J.sections.filter(he=>he.id!==I),originalOrder:J.originalOrder.filter(he=>he!==I)}),ne(he=>{const ve=new Set(he);return ve.delete(I),ve})},180)},[n]),je=I=>{const J=I.originalRect,he=I.currentRect;return Math.abs(J.x-he.x)>1||Math.abs(J.y-he.y)>1||Math.abs(J.width-he.width)>1||Math.abs(J.height-he.height)>1},ot=I=>{const J=I.originalRect,he=I.currentRect;return Math.abs(J.x-he.x)>1||Math.abs(J.y-he.y)>1},ct=I=>{const J=I.originalRect,he=I.currentRect;return Math.abs(J.width-he.width)>1||Math.abs(J.height-he.height)>1};for(const I of b)Le.current.has(I.id)||(ot(I)?Le.current.set(I.id,"move"):ct(I)&&Le.current.set(I.id,"resize"));for(const I of Le.current.keys())b.some(J=>J.id===I)||Le.current.delete(I);const Qe=b.filter(I=>{try{if(G.has(I.id)||S.has(I.id))return!0;const J=document.querySelector(I.selector);if(!J)return!1;const he=J.getBoundingClientRect(),ve=I.originalRect;return Math.abs(he.width-ve.width)+Math.abs(he.height-ve.height)<200}catch{return!1}}),st=Qe.filter(I=>je(I)),ft=Qe.filter(I=>!je(I)),ze=new Set(st.map(I=>I.id));for(const I of oe.current)ze.has(I)||oe.current.delete(I);const qe=[...ze].sort().join(",");for(const I of st)Vt.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return y.useEffect(()=>{const I=Wt.current;Wt.current=ze;const J=new Map;for(const he of I)if(!ze.has(he)){if(!b.some(We=>We.id===he))continue;const ve=Vt.current.get(he);ve&&(J.set(he,{orig:ve.originalRect,target:ve.currentRect,isFixed:ve.isFixed}),Vt.current.delete(he))}if(J.size>0){Ze(ve=>{const We=new Map(ve);for(const[Xe,Ne]of J)We.set(Xe,Ne);return We});const he=Ht(()=>{Ze(ve=>{const We=new Map(ve);for(const Xe of J.keys())We.delete(Xe);return We})},250);return()=>clearTimeout(he)}},[qe,b]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${Ae.rearrangeOverlay} ${i?"":Ae.light} ${a?Ae.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[xe&&r.jsx("div",{className:Ae.hoverHighlight,style:{left:xe.x,top:xe.y,width:xe.w,height:xe.h}}),ft.map(I=>{const J=I.currentRect,he=I.isFixed?J.y:J.y-B,ve=Ay,We=S.has(I.id);return r.jsxs("div",{"data-rearrange-section":I.id,className:`${Ae.sectionOutline} ${We?Ae.selected:""} ${k||a||G.has(I.id)?Ae.exiting:""}`,style:{left:J.x,top:he,width:J.width,height:J.height,borderColor:ve.border,backgroundColor:ve.bg,...rn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Xe=>ee(Xe,I.id),onDoubleClick:()=>q(I.id),children:[r.jsx("span",{className:Ae.sectionLabel,style:{backgroundColor:ve.pill},children:I.label}),r.jsx("span",{className:`${Ae.sectionAnnotation} ${I.note?Ae.annotationVisible:""}`,children:(I.note&&ce.current.set(I.id,I.note),I.note||ce.current.get(I.id)||"")}),r.jsxs("span",{className:Ae.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),r.jsx("div",{className:Ae.deleteButton,onMouseDown:Xe=>Xe.stopPropagation(),onClick:()=>He(I.id),children:"✕"}),Ny.map(Xe=>r.jsx("div",{className:`${Ae.handle} ${Ae[`handle${Xe.charAt(0).toUpperCase()}${Xe.slice(1)}`]}`,onMouseDown:Ne=>De(Ne,I.id,Xe)},Xe))]},I.id)}),st.map(I=>{const J=I.currentRect,he=I.isFixed?J.y:J.y-B,ve=S.has(I.id),We=ot(I),Xe=ct(I);if(u&&!ve)return null;const Dt=!oe.current.has(I.id);return Dt&&oe.current.add(I.id),r.jsxs("div",{"data-rearrange-section":I.id,className:`${Ae.ghostOutline} ${ve?Ae.selected:""} ${k||a||G.has(I.id)?Ae.exiting:""}`,style:{left:J.x,top:he,width:J.width,height:J.height,...rn?{}:{opacity:0,animation:"none",transition:"none"},...Dt?{}:{animation:"none"}},onMouseDown:Ot=>ee(Ot,I.id),onDoubleClick:()=>q(I.id),children:[r.jsx("span",{className:Ae.sectionLabel,style:{backgroundColor:Ay.pill},children:I.label}),r.jsx("span",{className:`${Ae.sectionAnnotation} ${I.note?Ae.annotationVisible:""}`,children:(I.note&&ce.current.set(I.id,I.note),I.note||ce.current.get(I.id)||"")}),r.jsxs("span",{className:Ae.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),r.jsx("div",{className:Ae.deleteButton,onMouseDown:Ot=>Ot.stopPropagation(),onClick:()=>He(I.id),children:"✕"}),Ny.map(Ot=>r.jsx("div",{className:`${Ae.handle} ${Ae[`handle${Ot.charAt(0).toUpperCase()}${Ot.slice(1)}`]}`,onMouseDown:Yt=>De(Yt,I.id,Ot)},Ot)),r.jsx("span",{className:Ae.ghostBadge,children:(()=>{const Ot=Le.current.get(I.id);if(We&&Xe){const[Yt,mt]=Ot==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",Yt," ",r.jsxs("span",{className:Ae.ghostBadgeExtra,children:["& ",mt]})]})}return`Suggested ${Xe?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const J of st){const he=Ee.get(J.id);I.push({id:J.id,orig:J.originalRect,target:he||J.currentRect,isFixed:J.isFixed,isSelected:S.has(J.id),isExiting:G.has(J.id)})}for(const[J,he]of Ee)if(!I.some(ve=>ve.id===J)){const ve=b.find(We=>We.id===J);ve&&I.push({id:J,orig:ve.originalRect,target:he,isFixed:ve.isFixed,isSelected:S.has(J)})}for(const[J,he]of et)I.some(ve=>ve.id===J)||I.push({id:J,orig:he.orig,target:he.target,isFixed:he.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:r.jsxs("svg",{className:`${Ae.connectorSvg} ${k||a?Ae.connectorExiting:""}`,children:[I.map(({id:J,orig:he,target:ve,isFixed:We,isSelected:Xe,isExiting:Ne})=>{const Dt=he.x+he.width/2,Ot=(We?he.y:he.y-B)+he.height/2,Yt=ve.x+ve.width/2,mt=(We?ve.y:ve.y-B)+ve.height/2,Pe=Yt-Dt,xt=mt-Ot,ln=Math.sqrt(Pe*Pe+xt*xt);if(ln<2)return null;const _n=Math.min(1,ln/40),rt=Math.min(ln*.3,60),Kt=ln>0?-xt/ln:0,Qt=ln>0?Pe/ln:0,Nt=(Dt+Yt)/2+Kt*rt,zn=(Ot+mt)/2+Qt*rt,pt=Ee.has(J),sn=pt||Xe?1:.4,nn=pt||Xe?1:.5;return r.jsxs("g",{className:Ne?Ae.connectorExiting:"",children:[r.jsx("path",{className:Ae.connectorLine,d:`M ${Dt} ${Ot} Q ${Nt} ${zn} ${Yt} ${mt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:sn*_n}),r.jsx("circle",{className:Ae.connectorDot,cx:Dt,cy:Ot,r:4*_n,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:nn*_n,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:Ae.connectorDot,cx:Yt,cy:mt,r:4*_n,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:nn*_n,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),E&&(()=>{var mt;const I=b.find(Pe=>Pe.id===E);if(!I)return null;const J=I.currentRect,he=I.isFixed?J.y:J.y-B,ve=J.x+J.width/2,We=he-8,Xe=he+J.height+8,Ne=We>200,Dt=Xe<window.innerHeight-100,Ot=Math.max(160,Math.min(window.innerWidth-160,ve));let Yt;return Ne?Yt={left:Ot,bottom:window.innerHeight-We}:Dt?Yt={left:Ot,top:Xe}:Yt={left:Ot,top:Math.max(80,window.innerHeight/2-80)},r.jsx(wd,{element:I.label,placeholder:"Add a note about this section",initialValue:(mt=I.note)!=null?mt:"",submitLabel:X.current?"Save":"Set",onSubmit:ae,onCancel:se,onDelete:X.current?()=>{ae("")}:void 0,isExiting:W,lightMode:!i,style:Yt})})(),_e&&r.jsx("div",{className:Ae.sizeIndicator,style:{left:_e.x,top:_e.y},"data-feedback-toolbar":!0,children:_e.text}),we.map((I,J)=>r.jsx("div",{className:Ae.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-B,width:"100vw",height:1}},`${I.axis}-${I.pos}-${J}`))]})}var Am=new Set(["script","style","noscript","link","meta","br","hr"]);function B4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Am.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Sd(c),selector:yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Am.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:Sd(h),selector:yr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function L4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function O4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Nm(t,n){const i=n?L4(n):B4(),a=O4(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const C=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(C&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(C&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!h||M<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const g=window.innerWidth,_=window.innerHeight,x=$4(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=z4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function z4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function $4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Hx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Vx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Hx(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function I4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Hx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Oy=15;function zy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Oy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Oy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function P4(t){var d;if(t.length<2)return[];const n=zy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=zy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",C=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${C}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Ux(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Am.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:yr(h)}}}return{viewport:t,contentArea:null}}function H4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:yr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Wx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Yx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
`;if(a+=`- Viewport: \`${n.width}×${n.height}px\`
`,i){const c=i;a+=`- Content area: \`${c.width}px\` wide, left edge at \`x=${c.left}\`, right at \`x=${c.right}\` (\`${c.selector}\`)
`,a+=`- Pixel → CSS translation:
`,a+=`  - **Horizontal position in container**: \`element.x - ${c.left}\` → use as \`margin-left\` or \`left\`
`,a+=`  - **Width as % of container**: \`element.width / ${c.width} × 100\` → use as \`width: X%\`
`,a+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",a+=`  - **Centered**: if \`|element.centerX - ${c.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else a+=`- No distinct content container — elements positioned relative to full viewport
`,a+=`- Pixel → CSS translation:
`,a+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,a+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return a+=`
`,a}function V4(t){const n=H4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function $y(t,n,i,a="standard"){var k,M,N,A;if(t.length===0)return"";const c=[...t].sort((E,$)=>Math.abs(E.y-$.y)<20?E.x-$.x:E.y-$.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((E,$)=>{var P;const W=((P=Ri[E.type])==null?void 0:P.label)||E.type;u+=`${$+1}. **${W}** — \`${Math.round(E.width)}×${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}),u;const d=Ux(n);u+=Yx(d),u+=`### Components
`,c.forEach((E,$)=>{var G;const W=((G=Ri[E.type])==null?void 0:G.label)||E.type,P={x:E.x,y:E.y,width:E.width,height:E.height};u+=`${$+1}. **${W}** — \`${Math.round(E.width)}×${Math.round(E.height)}px\` at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`;const X=Nm(P),se=Vx(X,{includeLeftRight:a==="detailed"||a==="forensic"});for(const ne of se)u+=`   - ${ne}
`;const ae=Wx(P,d);ae&&(u+=`   - CSS: ${ae}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const E of c){const $=h.find(W=>Math.abs(W.y-E.y)<30);$?$.items.push(E):h.push({y:E.y,items:[E]})}if(h.sort((E,$)=>E.y-$.y),h.forEach((E,$)=>{E.items.sort((P,X)=>P.x-X.x);const W=E.items.map(P=>{var X;return((X=Ri[P.type])==null?void 0:X.label)||P.type});if(E.items.length===1){const X=E.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(E.y)}): ${W[0]}${X?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(E.y)}): ${W.join(" | ")} — ${E.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let E=0;E<c.length-1;E++){const $=c[E],W=c[E+1],P=((k=Ri[$.type])==null?void 0:k.label)||$.type,X=((M=Ri[W.type])==null?void 0:M.label)||W.type,q=Math.round(W.y-($.y+$.height)),se=Math.round(W.x-($.x+$.width));Math.abs($.y-W.y)<30?u+=`- ${P} → ${X}: \`${se}px\` horizontal gap
`:u+=`- ${P} → ${X}: \`${q}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let E=0;E<c.length;E++)for(let $=E+1;$<c.length;$++){const W=c[E],P=c[$],X=((N=Ri[W.type])==null?void 0:N.label)||W.type,q=((A=Ri[P.type])==null?void 0:A.label)||P.type,se=Math.round(P.y-(W.y+W.height)),ae=Math.round(P.x-(W.x+W.width));u+=`- ${X} ↔ ${q}: h=\`${ae}px\` v=\`${se}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((E,$)=>{var P;const W=((P=Ri[E.type])==null?void 0:P.label)||E.type;u+=`${$}. ${W} at \`(${Math.round(E.x)}, ${Math.round(E.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(E=>E.type==="navigation"),g=c.some(E=>E.type==="hero"),_=c.some(E=>E.type==="sidebar"),x=c.some(E=>E.type==="footer"),b=c.filter(E=>E.type==="card"),w=c.filter(E=>E.type==="form"),S=c.filter(E=>E.type==="table"),C=c.filter(E=>E.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),g&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),C.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const E=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(E.width)}px 1fr;\`
`}if(b.length>1){const E=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${E}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Iy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=Ux({width:d,height:h});n!=="compact"&&(u+=Yx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Nm(w,g("original")),M=Nm(S,g("current")),N=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${I4(k,{x:w.x,y:w.y},N)}
`;const A=b?{width:S.width,height:S.height}:void 0,E=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=A?`, ${Math.round(A.width)}×${Math.round(A.height)}px`:"",P=Vx(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(P.length>0){u+=`  - Suggested position ${E}${$}: ${P[0]}
`;for(let q=1;q<P.length;q++)u+=`    ${P[q]}
`}else u+=`  - Suggested position ${E}${$}
`;const X=Wx(S,p);X&&(u+=`  - CSS: ${X}
`)}const C=V4(_.selector);if(C&&(u+=`  - ${C}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=P4(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Rm="feedback-annotations-",Fx=7;function kd(t){return`${Rm}${t}`}function Kh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(kd(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Fx*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Xx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(kd(t),JSON.stringify(n))}catch{}}function U4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Fx*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Rm)){const c=a.slice(Rm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function Jl(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Xx(t,a)}var cp="agentation-design-";function W4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${cp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function Y4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${cp}${t}`,JSON.stringify(n))}catch{}}function F4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${cp}${t}`)}catch{}}var up="agentation-rearrange-";function X4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${up}${t}`);return n?JSON.parse(n):null}catch{return null}}function q4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${up}${t}`,JSON.stringify(n))}catch{}}function G4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${up}${t}`)}catch{}}var dp="agentation-wireframe-";function K4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${dp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Py(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${dp}${t}`,JSON.stringify(n))}catch{}}function Qu(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${dp}${t}`)}catch{}}var qx="agentation-session-";function fp(t){return`${qx}${t}`}function Q4(t){if(typeof window>"u")return null;try{return localStorage.getItem(fp(t))}catch{return null}}function Qh(t,n){if(!(typeof window>"u"))try{localStorage.setItem(fp(t),n)}catch{}}function Z4(t){if(!(typeof window>"u"))try{localStorage.removeItem(fp(t))}catch{}}var Gx=`${qx}toolbar-hidden`;function J4(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Gx)==="1"}catch{return!1}}function e6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(Gx,"1")}catch{}}async function Zh(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Hy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Kr(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Vy(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ha(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Fn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Uy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Wy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],t6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function n6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Uy;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Uy,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Wy,...t.skipPatterns]:Wy,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:t6,filter:t==null?void 0:t.filter}}function s6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function o6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function i6(t,n){const i=s6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function a6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&i6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var Qr=null,r6=new WeakMap;function Jh(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function l6(){if(Qr!==null)return Qr;if(typeof document>"u")return!1;if(document.body&&Jh(document.body))return Qr=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&Jh(i))return Qr=!0,!0}if(document.body){for(const n of document.body.children)if(Jh(n))return Qr=!0,!0}return Qr=!1,!1}var ec={map:r6};function c6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function u6(t){const n=c6(t);return n?t[n]:null}function lr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function d6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Fn.HostComponent||n===Fn.HostText||n===Fn.HostHoistable||n===Fn.HostSingleton||n===Fn.Fragment||n===Fn.Mode||n===Fn.Profiler||n===Fn.DehydratedFragment||n===Fn.HostRoot||n===Fn.HostPortal||n===Fn.ScopeComponent||n===Fn.OffscreenComponent||n===Fn.LegacyHiddenComponent||n===Fn.CacheComponent||n===Fn.TracingMarkerComponent||n===Fn.Throw||n===Fn.ViewTransitionComponent||n===Fn.ActivityComponent)return null;if(n===Fn.ForwardRef){const u=a;if(u!=null&&u.render){const d=lr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:lr(i)}if(n===Fn.MemoComponent||n===Fn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=lr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:lr(i)}if(n===Fn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Fn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Fn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?lr(u._result):null}return n===Fn.SuspenseComponent||n===Fn.SuspenseListComponent?null:n===Fn.IncompleteClassComponent||n===Fn.IncompleteFunctionComponent||n===Fn.FunctionComponent||n===Fn.ClassComponent||n===Fn.IndeterminateComponent?lr(i):null}function f6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function h6(t,n){const i=n6(n),a=i.mode==="all";if(a){const p=ec.map.get(t);if(p!==void 0)return p}if(!l6()){const p={path:null,components:[]};return a&&ec.map.set(t,p),p}const c=i.mode==="smart"?o6(t):void 0,u=[];try{let p=u6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=d6(p);_&&!f6(_)&&a6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&ec.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&ec.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&ec.map.set(t,h),h}var tc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function m6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function _c(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function p6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:_c(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:_c(i._debugOwner)};i=i.return,a++}return null}function _6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:_c(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:_c(n)}}}n=n.return,i++}return null}var Zu=new Map;function g6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===tc.FunctionComponent||n===tc.IndeterminateComponent)&&typeof i=="function")return i;if(n===tc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===tc.MemoComponent||n===tc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function y6(){const t=kv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function x6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function b6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function v6(t){const n=g6(t);if(!n)return null;if(Zu.has(n))return Zu.get(n);const i=y6();if(!i)return Zu.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=x6(d.stack);h&&(c={fileName:b6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:_c(t)||void 0})}}}finally{i.set(a)}return Zu.set(n,c),c}function w6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=v6(i);if(c)return c;i=i.return,a++}return null}function Bm(t){const n=m6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=p6(n);if(i||(i=_6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=w6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function S6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function k6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Bm(i);if(c.found)return c;i=i.parentElement,a++}return Bm(t)}var C6=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,j6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=C6}var Ue=j6,nc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Yy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
`;return i==="forensic"?(c+=`
**Environment:**
`,c+=`- Viewport: ${a}
`,typeof window<"u"&&(c+=`- URL: ${window.location.href}
`,c+=`- User Agent: ${navigator.userAgent}
`,c+=`- Timestamp: ${new Date().toISOString()}
`,c+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),c+=`
---
`):i!=="compact"&&(c+=`**Viewport:** ${a}
`),c+=`
`,t.forEach((u,d)=>{i==="compact"?(c+=`${d+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText&&(c+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`),c+=`
`):i==="forensic"?(c+=`### ${d+1}. ${u.element}
`,u.isMultiSelect&&u.fullPath&&(c+=`*Forensic data shown for first element of selection*
`),u.fullPath&&(c+=`**Full DOM Path:** ${u.fullPath}
`),u.cssClasses&&(c+=`**CSS Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** x:${Math.round(u.boundingBox.x)}, y:${Math.round(u.boundingBox.y)} (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`),c+=`**Annotation at:** ${u.x.toFixed(1)}% from left, ${Math.round(u.y)}px from top
`,u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),u.computedStyles&&(c+=`**Computed Styles:** ${u.computedStyles}
`),u.accessibility&&(c+=`**Accessibility:** ${u.accessibility}
`),u.nearbyElements&&(c+=`**Nearby Elements:** ${u.nearbyElements}
`),u.sourceFile&&(c+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(c+=`**React:** ${u.reactComponents}
`),c+=`**Feedback:** ${u.comment}

`):(c+=`### ${d+1}. ${u.element}
`,c+=`**Location:** ${u.elementPath}
`,u.sourceFile&&(c+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(c+=`**React:** ${u.reactComponents}
`),i==="detailed"&&(u.cssClasses&&(c+=`**Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** ${Math.round(u.boundingBox.x)}px, ${Math.round(u.boundingBox.y)}px (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`)),u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),i==="detailed"&&u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),c+=`**Feedback:** ${u.comment}

`)}),c.trim()}var M6=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,T6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=M6}var Hs=T6;function Fy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:C,onContextMenu:k}){const M=(h||p)&&!g,N=M&&x==="delete",A=t.isMultiSelect,E=A?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?Hs.exit:u?Hs.clearing:d?"":Hs.enter,W=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return r.jsxs("div",{className:`${Hs.marker} ${A?Hs.multiSelect:""} ${$} ${N?Hs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:N?void 0:E,animationDelay:W},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:P=>{P.stopPropagation(),c||C(t)},onContextMenu:k?P=>{x==="delete"&&(P.preventDefault(),P.stopPropagation(),c||k(t))}:void 0,children:[M?N?r.jsx(Bx,{size:A?18:16}):r.jsx(Hw,{size:16}):r.jsx("span",{className:_!==null&&n>=_?Hs.renumber:void 0,children:n+1}),h&&!g&&r.jsxs("div",{className:`${Hs.markerTooltip} ${Hs.enter}`,style:b,children:[r.jsxs("span",{className:Hs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:Hs.markerNote,children:t.comment})]})]})}function E6({x:t,y:n,isMultiSelect:i,isExiting:a}){return r.jsx("div",{className:`${Hs.marker} ${Hs.pending} ${i?Hs.multiSelect:""} ${a?Hs.exit:Hs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(Ew,{size:12})})}function Xy({annotation:t,fixed:n}){const i=t.isMultiSelect;return r.jsx("div",{className:`${Hs.marker} ${n?Hs.fixed:""} ${Hs.hovered} ${i?Hs.multiSelect:""} ${Hs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:r.jsx(Bx,{size:i?12:10})})}var D6=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,A6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=D6}var em=A6,tm=({className:t="",...n})=>r.jsxs("div",{className:`${em.switchContainer} ${t}`,children:[r.jsx("input",{className:em.switchInput,type:"checkbox",...n}),r.jsx("div",{className:em.switchThumb})]}),N6=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,R6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=N6}var Ju=R6,B6=({className:t="",...n})=>r.jsxs("div",{className:`${Ju.checkboxContainer} ${t}`,children:[r.jsx("input",{className:Ju.checkboxInput,type:"checkbox",...n}),r.jsx("svg",{className:Ju.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:Ju.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),L6=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,O6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=L6}var qy=O6,Gy=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return r.jsxs("div",{className:`${qy.container} ${t}`,...u,children:[r.jsx(B6,{id:d,onChange:c,checked:a}),r.jsx("label",{className:qy.label,htmlFor:d,children:n}),i&&r.jsx(hr,{content:i})]})},z6=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,$6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=z6}var kt=$6;function I6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return r.jsx("div",{className:`${kt.settingsPanel} ${h?kt.enter:kt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:kt.settingsPanelContainer,children:[r.jsxs("div",{className:`${kt.settingsPage} ${g==="automations"?kt.slideLeft:""}`,children:[r.jsxs("div",{className:kt.settingsHeader,children:[r.jsx("a",{className:kt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:kt.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:kt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:kt.themeIconWrapper,children:r.jsx("span",{className:kt.themeIcon,children:i?r.jsx(Iw,{size:20}):r.jsx(Pw,{size:20})},i?"sun":"moon")})})]}),r.jsx("div",{className:kt.divider}),r.jsxs("div",{className:kt.settingsSection,children:[r.jsxs("div",{className:kt.settingsRow,children:[r.jsxs("div",{className:kt.settingsLabel,children:["Output Detail",r.jsx(hr,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:kt.cycleButton,onClick:()=>{const S=(nc.findIndex(C=>C.value===t.outputDetail)+1)%nc.length;n({outputDetail:nc[S].value})},children:[r.jsx("span",{className:kt.cycleButtonText,children:(b=nc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),r.jsx("span",{className:kt.cycleDots,children:nc.map(w=>r.jsx("span",{className:`${kt.cycleDot} ${t.outputDetail===w.value?kt.active:""}`},w.value))})]})]}),r.jsxs("div",{className:`${kt.settingsRow} ${kt.settingsRowMarginTop} ${c?"":kt.settingsRowDisabled}`,children:[r.jsxs("div",{className:kt.settingsLabel,children:["React Components",r.jsx(hr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(tm,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${kt.settingsRow} ${kt.settingsRowMarginTop}`,children:[r.jsxs("div",{className:kt.settingsLabel,children:["Hide Until Restart",r.jsx(hr,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(tm,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),r.jsx("div",{className:kt.divider}),r.jsxs("div",{className:kt.settingsSection,children:[r.jsx("div",{className:`${kt.settingsLabel} ${kt.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:kt.colorOptions,children:uc.map(w=>r.jsx("button",{className:`${kt.colorOption} ${t.annotationColorId===w.id?kt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),r.jsx("div",{className:kt.divider}),r.jsxs("div",{className:kt.settingsSection,children:[r.jsx(Gy,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(Gy,{className:kt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),r.jsx("div",{className:kt.divider}),r.jsxs("button",{className:kt.settingsNavLink,onClick:()=>_("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:kt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&r.jsx("span",{className:`${kt.mcpNavIndicator} ${kt[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${kt.settingsPage} ${kt.automationsPage} ${g==="automations"?kt.slideIn:""}`,children:[r.jsxs("button",{className:kt.settingsBackButton,onClick:()=>_("main"),children:[r.jsx(Uw,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:kt.divider}),r.jsxs("div",{className:kt.settingsSection,children:[r.jsxs("div",{className:kt.settingsRow,children:[r.jsxs("span",{className:kt.automationHeader,children:["MCP Connection",r.jsx(hr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&r.jsx("div",{className:`${kt.mcpStatusDot} ${kt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:kt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:kt.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:kt.divider}),r.jsxs("div",{className:`${kt.settingsSection} ${kt.settingsSectionGrow}`,children:[r.jsxs("div",{className:kt.settingsRow,children:[r.jsxs("span",{className:kt.automationHeader,children:["Webhooks",r.jsx(hr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:kt.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${kt.autoSendLabel} ${t.webhooksEnabled?kt.active:""} ${t.webhookUrl?"":kt.disabled}`,children:"Auto-Send"}),r.jsx(tm,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),r.jsx("p",{className:kt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:kt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function nm(t,n="filtered"){const{name:i,path:a}=ol(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=h6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var Ky=!1,sm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Wi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},uc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],P6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...uc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${uc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${uc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};P6();function cr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function om(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function ur(t){return t.status!=="resolved"&&t.status!=="dismissed"}function ed(t){const n=Bm(t),i=n.found?n:k6(t);if(i.found&&i.source)return S6(i.source,"path")}function H6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Ac,Nc,hl,ml,ga,ya,Rc;const[C,k]=y.useState(!1),[M,N]=y.useState([]),[A,E]=y.useState(!0),[$,W]=y.useState(()=>J4()),[P,X]=y.useState(!1),q=y.useRef(null);y.useEffect(()=>{const D=F=>{const V=q.current;V&&V.contains(F.target)&&F.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(F=>document.body.addEventListener(F,D)),()=>{O.forEach(F=>document.body.removeEventListener(F,D))}},[]);const[se,ae]=y.useState(!1),[G,ne]=y.useState(!1),[ce,xe]=y.useState(null),[z,_e]=y.useState({x:0,y:0}),[K,we]=y.useState(null),[Te,B]=y.useState(!1),[H,L]=y.useState("idle"),[oe,Le]=y.useState(!1),[Ee,Be]=y.useState(!1),[et,Ze]=y.useState(null),[Wt,Vt]=y.useState(null),[Mt,$t]=y.useState([]),[tn,rn]=y.useState(null),[de,Ye]=y.useState(null),[ee,De]=y.useState(null),[He,je]=y.useState(null),[ot,ct]=y.useState([]),[Qe,st]=y.useState(0),[ft,ze]=y.useState(!1),[qe,I]=y.useState(!1),[J,he]=y.useState(!1),[ve,We]=y.useState(!1),[Xe,Ne]=y.useState(!1),[Dt,Ot]=y.useState("main"),[Yt,mt]=y.useState(!1),[Pe,xt]=y.useState(!1),[ln,_n]=y.useState(!1),[rt,Kt]=y.useState([]),[Qt,Nt]=y.useState(null),zn=y.useRef(!1),[pt,sn]=y.useState(!1),[nn,Dn]=y.useState(!1),[Jn,Un]=y.useState(1),[fs,hs]=y.useState("new-page"),[jn,qn]=y.useState(""),[dn,es]=y.useState(!1),[nt,Ts]=y.useState(null),vi=y.useRef(!1),uo=y.useRef({rearrange:null,placements:[]}),io=y.useRef({rearrange:null,placements:[]}),[fo,ao]=y.useState(0),[Wn,Vs]=y.useState(0),[Us,Ws]=y.useState(0),[fn,Jo]=y.useState(0),Ro=y.useRef(new Set),Ys=y.useRef(new Set),ts=y.useRef(null),So=y.useRef(),ei=Pe&&C&&!ln&&pt;y.useEffect(()=>{if(ei){Dn(!1);const D=el(()=>{Dn(!0)});return()=>cancelAnimationFrame(D)}else Dn(!1)},[ei]);const ko=y.useRef(new Map),Bo=y.useRef(new Map),ho=y.useRef(),[Es,Fs]=y.useState(!1),[$n,wi]=y.useState([]),Li=y.useRef($n);Li.current=$n;const[ti,to]=y.useState(null),Lo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[Oo,Ds]=y.useState(!1),ro=y.useRef(null),[In,mo]=y.useState([]),Cs=y.useRef({cmd:!1,shift:!1}),ms=()=>{mt(!0)},Si=()=>{mt(!1)},Xs=()=>{Oo||(ro.current=Ht(()=>Ds(!0),850))},lo=()=>{ro.current&&(clearTimeout(ro.current),ro.current=null),Ds(!1),Si()};y.useEffect(()=>()=>{ro.current&&clearTimeout(ro.current)},[]);const[Zt,Wo]=y.useState(()=>{var D;try{const O=JSON.parse((D=localStorage.getItem("feedback-toolbar-settings"))!=null?D:"");return{...sm,...O,annotationColorId:uc.find(F=>F.id===O.annotationColorId)?O.annotationColorId:sm.annotationColorId}}catch{return sm}}),[Ns,zo]=y.useState(!0),[Co,jo]=y.useState(!1),Z=()=>{var D;(D=q.current)==null||D.classList.add(Ue.disableTransitions),zo(O=>!O),el(()=>{var O;(O=q.current)==null||O.classList.remove(Ue.disableTransitions)})},fe=!1,ke="off",[Se,at]=y.useState(x!=null?x:null),ut=y.useRef(!1),[lt,Tt]=y.useState(_?"connecting":"disconnected"),[Lt,Gn]=y.useState(null),[ns,An]=y.useState(!1),[wn,Nn]=y.useState(null),Os=y.useRef(!1),[zt,Ut]=y.useState(new Set),[gn,Jt]=y.useState(new Set),[Rt,j]=y.useState(!1),[Y,re]=y.useState(!1),[me,Ve]=y.useState(!1),Ie=y.useRef(null),Ge=y.useRef(null),dt=y.useRef(null),tt=y.useRef(null),Et=y.useRef(!1),mn=y.useRef(0),yn=y.useRef(null),Pn=y.useRef(null),Mn=8,Xt=50,Rn=y.useRef(null),po=y.useRef(null),zs=y.useRef(null),gt=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(ve)Ne(!0);else{mt(!1),Ot("main");const D=Ht(()=>Ne(!1),0);return()=>clearTimeout(D)}},[ve]);const _o=C&&A&&!Pe;y.useEffect(()=>{if(_o){ne(!1),ae(!0),Ut(new Set);const D=Ht(()=>{Ut(O=>{const F=new Set(O);return M.forEach(V=>F.add(V.id)),F})},350);return()=>clearTimeout(D)}else if(se){ne(!0);const D=Ht(()=>{ae(!1),ne(!1)},250);return()=>clearTimeout(D)}},[_o]),y.useEffect(()=>{I(!0),st(window.scrollY);const D=Kh(gt);N(D.filter(ur)),Ky||(jo(!0),Ky=!0,Ht(()=>jo(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&zo(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const F=JSON.parse(O);typeof F.x=="number"&&typeof F.y=="number"&&Gn(F)}}catch{}},[gt]),y.useEffect(()=>{qe&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Zt))},[Zt,qe]),y.useEffect(()=>{qe&&localStorage.setItem("feedback-toolbar-theme",Ns?"dark":"light")},[Ns,qe]);const js=y.useRef(!1);y.useEffect(()=>{const D=js.current;js.current=ns,D&&!ns&&Lt&&qe&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Lt))},[ns,Lt,qe]),y.useEffect(()=>{if(!_||!qe||ut.current)return;ut.current=!0,Tt("connecting"),(async()=>{try{const O=Q4(gt),F=x||O;let V=!1;if(F)try{const te=await Hy(_,F);at(te.id),Tt("connected"),Qh(gt,te.id),V=!0;const ge=Kh(gt),Ke=new Set(te.annotations.map(it=>it.id)),Je=ge.filter(it=>!Ke.has(it.id));if(Je.length>0){const vt=`${typeof window<"u"?window.location.origin:""}${gt}`,on=(await Promise.allSettled(Je.map(wt=>Kr(_,te.id,{...wt,sessionId:te.id,url:vt})))).map((wt,_t)=>wt.status==="fulfilled"?wt.value:(console.warn("[Agentation] Failed to sync annotation:",wt.reason),Je[_t])),an=[...te.annotations,...on];N(an.filter(ur)),Jl(gt,an.filter(ur),te.id)}else N(te.annotations.filter(ur)),Jl(gt,te.annotations.filter(ur),te.id)}catch(te){console.warn("[Agentation] Could not join session, creating new:",te),Z4(gt)}if(!V){const te=typeof window<"u"?window.location.href:"/",ge=await Zh(_,te);at(ge.id),Tt("connected"),Qh(gt,ge.id),b==null||b(ge.id);const Ke=U4(),Je=typeof window<"u"?window.location.origin:"",it=[];for(const[vt,Bt]of Ke){const on=Bt.filter(_t=>!_t._syncedTo);if(on.length===0)continue;const an=`${Je}${vt}`,wt=vt===gt;it.push((async()=>{try{const _t=wt?ge:await Zh(_,an),vs=(await Promise.allSettled(on.map(Bn=>Kr(_,_t.id,{...Bn,sessionId:_t.id,url:an})))).map((Bn,Xn)=>Bn.status==="fulfilled"?Bn.value:(console.warn("[Agentation] Failed to sync annotation:",Bn.reason),on[Xn])).filter(ur);if(Jl(vt,vs,_t.id),wt){const Bn=new Set(on.map(Xn=>Xn.id));N(Xn=>{const Gt=Xn.filter(en=>!Bn.has(en.id));return[...vs,...Gt]})}}catch(_t){console.warn(`[Agentation] Failed to sync annotations for ${vt}:`,_t)}})())}await Promise.allSettled(it)}}catch(O){Tt("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[_,x,qe,b,gt]),y.useEffect(()=>{if(!_||!qe)return;const D=async()=>{try{(await fetch(`${_}/health`)).ok?Tt("connected"):Tt("disconnected")}catch{Tt("disconnected")}};D();const O=Fw(D,1e4);return()=>clearInterval(O)},[_,qe]),y.useEffect(()=>{if(!_||!qe||!Se)return;const D=new EventSource(`${_}/sessions/${Se}/events`),O=["resolved","dismissed"],F=V=>{var te;try{const ge=JSON.parse(V.data);if(O.includes((te=ge.payload)==null?void 0:te.status)){const Ke=ge.payload.id,Je=ge.payload.kind;if(Je==="placement"){for(const[it,vt]of ko.current)if(vt===Ke){ko.current.delete(it),Kt(Bt=>Bt.filter(on=>on.id!==it));break}}else if(Je==="rearrange"){for(const[it,vt]of Bo.current)if(vt===Ke){Bo.current.delete(it),Ts(Bt=>{if(!Bt)return null;const on=Bt.sections.filter(an=>an.id!==it);return on.length===0?null:{...Bt,sections:on}});break}}else Jt(it=>new Set(it).add(Ke)),Ht(()=>{N(it=>it.filter(vt=>vt.id!==Ke)),Jt(it=>{const vt=new Set(it);return vt.delete(Ke),vt})},150)}}catch{}};return D.addEventListener("annotation.updated",F),()=>{D.removeEventListener("annotation.updated",F),D.close()}},[_,qe,Se]),y.useEffect(()=>{if(!_||!qe)return;const D=Pn.current==="disconnected",O=lt==="connected";Pn.current=lt,D&&O&&(async()=>{try{const V=Kh(gt);if(V.length===0)return;const ge=`${typeof window<"u"?window.location.origin:""}${gt}`;let Ke=Se,Je=[];if(Ke)try{Je=(await Hy(_,Ke)).annotations}catch{Ke=null}Ke||(Ke=(await Zh(_,ge)).id,at(Ke),Qh(gt,Ke));const it=new Set(Je.map(Bt=>Bt.id)),vt=V.filter(Bt=>!it.has(Bt.id));if(vt.length>0){const on=(await Promise.allSettled(vt.map(_t=>Kr(_,Ke,{..._t,sessionId:Ke,url:ge})))).map((_t,xs)=>_t.status==="fulfilled"?_t.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",_t.reason),vt[xs])),wt=[...Je,...on].filter(ur);N(wt),Jl(gt,wt,Ke)}}catch(V){console.warn("[Agentation] Failed to sync on reconnect:",V)}})()},[lt,_,qe,Se,gt]);const Mo=y.useCallback(()=>{P||(X(!0),We(!1),k(!1),Ht(()=>{e6(!0),W(!0),X(!1)},400))},[P]);y.useEffect(()=>{if(!i||!qe||!t||t.length===0||M.length>0)return;const D=[];return D.push(Ht(()=>{k(!0)},n-200)),t.forEach((O,F)=>{const V=n+F*300;D.push(Ht(()=>{const te=document.querySelector(O.selector);if(!te)return;const ge=te.getBoundingClientRect(),{name:Ke,path:Je}=ol(te),it={id:`demo-${Date.now()}-${F}`,x:(ge.left+ge.width/2)/window.innerWidth*100,y:ge.top+ge.height/2+window.scrollY,comment:O.comment,element:Ke,elementPath:Je,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:ge.left,y:ge.top+window.scrollY,width:ge.width,height:ge.height},nearbyText:Ql(te),cssClasses:Zl(te)};N(vt=>[...vt,it])},V))}),()=>{D.forEach(clearTimeout)}},[i,qe,t,n]),y.useEffect(()=>{const D=()=>{st(window.scrollY),ze(!0),zs.current&&clearTimeout(zs.current),zs.current=Ht(()=>{ze(!1)},150)};return window.addEventListener("scroll",D,{passive:!0}),()=>{window.removeEventListener("scroll",D),zs.current&&clearTimeout(zs.current)}},[]),y.useEffect(()=>{qe&&M.length>0?Se?Jl(gt,M,Se):Xx(gt,M):qe&&M.length===0&&localStorage.removeItem(kd(gt))},[M,gt,qe,Se]),y.useEffect(()=>{if(qe&&!zn.current){zn.current=!0;const D=W4(gt);D.length>0&&Kt(D)}},[qe,gt]),y.useEffect(()=>{qe&&zn.current&&!pt&&(rt.length>0?Y4(gt,rt):F4(gt))},[rt,gt,qe,pt]),y.useEffect(()=>{if(qe&&!vi.current){vi.current=!0;const D=X4(gt);if(D){const O={...D,sections:D.sections.map(F=>{var V;return{...F,currentRect:(V=F.currentRect)!=null?V:{...F.originalRect}}})};Ts(O)}}},[qe,gt]),y.useEffect(()=>{qe&&vi.current&&!pt&&(nt?q4(gt,nt):G4(gt))},[nt,gt,qe,pt]);const To=y.useRef(!1);y.useEffect(()=>{if(qe&&!To.current){To.current=!0;const D=K4(gt);D&&(io.current={rearrange:D.rearrange,placements:D.placements||[]},D.purpose&&qn(D.purpose))}},[qe,gt]),y.useEffect(()=>{var O,F,V,te,ge;if(!qe||!To.current)return;const D=io.current;pt?((F=(O=nt==null?void 0:nt.sections)==null?void 0:O.length)!=null?F:0)>0||rt.length>0||jn?Py(gt,{rearrange:nt,placements:rt,purpose:jn}):Qu(gt):((ge=(te=(V=D.rearrange)==null?void 0:V.sections)==null?void 0:te.length)!=null?ge:0)>0||D.placements.length>0||jn?Py(gt,{rearrange:D.rearrange,placements:D.placements,purpose:jn}):Qu(gt)},[nt,rt,jn,pt,gt,qe]),y.useEffect(()=>{Pe&&!nt&&Ts({sections:[],originalOrder:[],detectedAt:Date.now()})},[Pe,nt]),y.useEffect(()=>{if(!_||!Se)return;const D=ko.current,O=new Set(rt.map(F=>F.id));for(const F of rt){if(D.has(F.id))continue;D.set(F.id,"");const V=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:gt;Kr(_,Se,{id:F.id,x:F.x/window.innerWidth*100,y:F.y,comment:`Place ${F.type} at (${Math.round(F.x)}, ${Math.round(F.y)}), ${F.width}×${F.height}px${F.text?` — "${F.text}"`:""}`,element:`[design:${F.type}]`,elementPath:"[placement]",timestamp:F.timestamp,url:V,intent:"change",severity:"important",kind:"placement",placement:{componentType:F.type,width:F.width,height:F.height,scrollY:F.scrollY,text:F.text}}).then(te=>{D.has(F.id)&&D.set(F.id,te.id)}).catch(te=>{console.warn("[Agentation] Failed to sync placement annotation:",te),D.delete(F.id)})}for(const[F,V]of D)O.has(F)||(D.delete(F),V&&Ha(_,V).catch(()=>{}))},[rt,_,Se,gt]),y.useEffect(()=>{if(!(!_||!Se))return ho.current&&clearTimeout(ho.current),ho.current=Ht(()=>{const D=Bo.current;if(!nt||nt.sections.length===0){for(const[,V]of D)V&&Ha(_,V).catch(()=>{});D.clear();return}const O=new Set(nt.sections.map(V=>V.id)),F=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:gt;for(const V of nt.sections){const te=V.originalRect,ge=V.currentRect;if(!(Math.abs(te.x-ge.x)>1||Math.abs(te.y-ge.y)>1||Math.abs(te.width-ge.width)>1||Math.abs(te.height-ge.height)>1)){const it=D.get(V.id);it&&(D.delete(V.id),Ha(_,it).catch(()=>{}));continue}const Je=D.get(V.id);Je?Vy(_,Je,{comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(te.x)},${Math.round(te.y)}) ${Math.round(te.width)}×${Math.round(te.height)} to (${Math.round(ge.x)},${Math.round(ge.y)}) ${Math.round(ge.width)}×${Math.round(ge.height)}`}).catch(it=>{console.warn("[Agentation] Failed to update rearrange annotation:",it)}):(D.set(V.id,""),Kr(_,Se,{id:V.id,x:ge.x/window.innerWidth*100,y:ge.y,comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(te.x)},${Math.round(te.y)}) ${Math.round(te.width)}×${Math.round(te.height)} to (${Math.round(ge.x)},${Math.round(ge.y)}) ${Math.round(ge.width)}×${Math.round(ge.height)}`,element:V.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:F,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:V.selector,label:V.label,tagName:V.tagName,originalRect:te,currentRect:ge}}).then(it=>{D.has(V.id)&&D.set(V.id,it.id)}).catch(it=>{console.warn("[Agentation] Failed to sync rearrange annotation:",it),D.delete(V.id)}))}for(const[V,te]of D)O.has(V)||(D.delete(V),te&&Ha(_,te).catch(()=>{}))},300),()=>{ho.current&&clearTimeout(ho.current)}},[nt,_,Se,gt]);const Sn=y.useRef(new Map);y.useLayoutEffect(()=>{var F;const D=(F=nt==null?void 0:nt.sections)!=null?F:[],O=new Set;if((Pe||ln)&&C)for(const V of D){O.add(V.id);try{const te=document.querySelector(V.selector);if(!te)continue;if(!Sn.current.has(V.id)){const ge={transform:te.style.transform,transformOrigin:te.style.transformOrigin,opacity:te.style.opacity,position:te.style.position,zIndex:te.style.zIndex,display:te.style.display},Ke=[];let Je=te.parentElement;for(;Je&&Je!==document.body;){const vt=getComputedStyle(Je);(vt.overflow!=="visible"||vt.overflowX!=="visible"||vt.overflowY!=="visible")&&(Ke.push({el:Je,overflow:Je.style.overflow}),Je.style.overflow="visible"),Je=Je.parentElement}getComputedStyle(te).display==="inline"&&(te.style.display="inline-block"),Sn.current.set(V.id,{el:te,origStyles:ge,ancestors:Ke}),te.style.transformOrigin="top left",te.style.zIndex="9999"}}catch{}}for(const[V,te]of Sn.current)if(!O.has(V)){const{el:ge,origStyles:Ke,ancestors:Je}=te;ge.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ge.style.transform=Ke.transform,ge.style.transformOrigin=Ke.transformOrigin,ge.style.opacity=Ke.opacity,ge.style.position=Ke.position,ge.style.zIndex=Ke.zIndex,Sn.current.delete(V),Ht(()=>{ge.style.transition="",ge.style.display=Ke.display;for(const it of Je)it.el.style.overflow=it.overflow},450)}},[nt,Pe,ln,C]),y.useEffect(()=>()=>{for(const[,D]of Sn.current){const{el:O,origStyles:F,ancestors:V}=D;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=F.transform,O.style.transformOrigin=F.transformOrigin,O.style.opacity=F.opacity,O.style.position=F.position,O.style.zIndex=F.zIndex,Ht(()=>{O.style.transition="",O.style.display=F.display;for(const te of V)te.el.style.overflow=te.overflow},450)}Sn.current.clear()},[]);const gs=y.useCallback(()=>{_n(!0),xt(!1),Nt(null),clearTimeout(So.current),So.current=Ht(()=>{_n(!1)},300)},[]),$o=y.useCallback(()=>{Pe&&(_n(!0),xt(!1),Nt(null),clearTimeout(So.current),So.current=Ht(()=>{_n(!1)},300)),k(!1)},[Pe]),Yo=y.useCallback(()=>{J||(qw(),he(!0))},[J]),Eo=y.useCallback(()=>{J&&(jy(),he(!1))},[J]),Oi=y.useCallback(()=>{J?Eo():Yo()},[J,Yo,Eo]),Fe=y.useCallback(()=>{if(In.length===0)return;const D=In[0],O=D.element,F=In.length>1,V=In.map(te=>te.element.getBoundingClientRect());if(F){const te={left:Math.min(...V.map(_t=>_t.left)),top:Math.min(...V.map(_t=>_t.top)),right:Math.max(...V.map(_t=>_t.right)),bottom:Math.max(...V.map(_t=>_t.bottom))},ge=In.slice(0,5).map(_t=>_t.name).join(", "),Ke=In.length>5?` +${In.length-5} more`:"",Je=V.map(_t=>({x:_t.left,y:_t.top+window.scrollY,width:_t.width,height:_t.height})),vt=In[In.length-1].element,Bt=V[V.length-1],on=Bt.left+Bt.width/2,an=Bt.top+Bt.height/2,wt=om(vt);we({x:on/window.innerWidth*100,y:wt?an:an+window.scrollY,clientY:an,element:`${In.length} elements: ${ge}${Ke}`,elementPath:"multi-select",boundingBox:{x:te.left,y:te.top+window.scrollY,width:te.right-te.left,height:te.bottom-te.top},isMultiSelect:!0,isFixed:wt,elementBoundingBoxes:Je,multiSelectElements:In.map(_t=>_t.element),targetElement:vt,fullPath:qu(O),accessibility:Xu(O),computedStyles:Fu(O),computedStylesObj:Yu(O),nearbyElements:Wu(O),cssClasses:Zl(O),nearbyText:Ql(O),sourceFile:ed(O)})}else{const te=V[0],ge=om(O);we({x:te.left/window.innerWidth*100,y:ge?te.top:te.top+window.scrollY,clientY:te.top,element:D.name,elementPath:D.path,boundingBox:{x:te.left,y:ge?te.top:te.top+window.scrollY,width:te.width,height:te.height},isFixed:ge,fullPath:qu(O),accessibility:Xu(O),computedStyles:Fu(O),computedStylesObj:Yu(O),nearbyElements:Wu(O),cssClasses:Zl(O),nearbyText:Ql(O),reactComponents:D.reactComponents,sourceFile:ed(O)})}mo([]),xe(null)},[In]);y.useEffect(()=>{C||(we(null),De(null),je(null),ct([]),xe(null),We(!1),mo([]),Cs.current={cmd:!1,shift:!1},J&&Eo())},[C,J,Eo]),y.useEffect(()=>()=>{jy()},[]),y.useEffect(()=>{if(!C)return;const D=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",F=document.createElement("style");return F.id="feedback-cursor-styles",F.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${D})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(F),()=>{const V=document.getElementById("feedback-cursor-styles");V&&V.remove()}},[C]),y.useEffect(()=>{if(ti!==null&&C)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ti,C]),y.useEffect(()=>{if(!C||K||Es||Pe)return;const D=O=>{const F=O.composedPath()[0]||O.target;if(Po(F,"[data-feedback-toolbar]")){xe(null);return}const V=cr(O.clientX,O.clientY);if(!V||Po(V,"[data-feedback-toolbar]")){xe(null);return}const{name:te,elementName:ge,path:Ke,reactComponents:Je}=nm(V,ke),it=V.getBoundingClientRect();xe({element:te,elementName:ge,elementPath:Ke,rect:it,reactComponents:Je}),_e({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",D),()=>document.removeEventListener("mousemove",D)},[C,K,Es,Pe,ke,$n]);const ht=y.useCallback(D=>{var O;if(De(D),Ze(null),Vt(null),$t([]),(O=D.elementBoundingBoxes)!=null&&O.length){const F=[];for(const V of D.elementBoundingBoxes){const te=V.x+V.width/2,ge=V.y+V.height/2-window.scrollY,Ke=cr(te,ge);Ke&&F.push(Ke)}ct(F),je(null)}else if(D.boundingBox){const F=D.boundingBox,V=F.x+F.width/2,te=D.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,ge=cr(V,te);if(ge){const Ke=ge.getBoundingClientRect(),Je=Ke.width/F.width,it=Ke.height/F.height;Je<.5||it<.5?je(null):je(ge)}else je(null);ct([])}else je(null),ct([])},[]);y.useEffect(()=>{if(!C||Es||Pe)return;const D=O=>{var bs,vs;if(Et.current){Et.current=!1;return}const F=O.composedPath()[0]||O.target;if(Po(F,"[data-feedback-toolbar]")||Po(F,"[data-annotation-popup]")||Po(F,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!K&&!ee){O.preventDefault(),O.stopPropagation();const Bn=cr(O.clientX,O.clientY);if(!Bn)return;const Xn=Bn.getBoundingClientRect(),{name:Gt,path:en,reactComponents:ws}=nm(Bn,ke),On=In.findIndex(no=>no.element===Bn);On>=0?mo(no=>no.filter((Do,cs)=>cs!==On)):mo(no=>[...no,{element:Bn,rect:Xn,name:Gt,path:en,reactComponents:ws!=null?ws:void 0}]);return}const V=Po(F,"button, a, input, select, textarea, [role='button'], [onclick]");if(Zt.blockInteractions&&V&&(O.preventDefault(),O.stopPropagation()),K){if(V&&!Zt.blockInteractions)return;O.preventDefault(),(bs=Rn.current)==null||bs.shake();return}if(ee){if(V&&!Zt.blockInteractions)return;O.preventDefault(),(vs=po.current)==null||vs.shake();return}O.preventDefault();const te=cr(O.clientX,O.clientY);if(!te)return;const{name:ge,path:Ke,reactComponents:Je}=nm(te,ke),it=te.getBoundingClientRect(),vt=O.clientX/window.innerWidth*100,Bt=om(te),on=Bt?O.clientY:O.clientY+window.scrollY,an=window.getSelection();let wt;an&&an.toString().trim().length>0&&(wt=an.toString().trim().slice(0,500));const _t=Yu(te),xs=Fu(te);we({x:vt,y:on,clientY:O.clientY,element:ge,elementPath:Ke,selectedText:wt,boundingBox:{x:it.left,y:Bt?it.top:it.top+window.scrollY,width:it.width,height:it.height},nearbyText:Ql(te),cssClasses:Zl(te),isFixed:Bt,fullPath:qu(te),accessibility:Xu(te),computedStyles:xs,computedStylesObj:_t,nearbyElements:Wu(te),reactComponents:Je!=null?Je:void 0,sourceFile:ed(te),targetElement:te}),xe(null)};return document.addEventListener("click",D,!0),()=>document.removeEventListener("click",D,!0)},[C,Es,Pe,K,ee,Zt.blockInteractions,ke,In]),y.useEffect(()=>{if(!C)return;const D=V=>{V.key==="Meta"&&(Cs.current.cmd=!0),V.key==="Shift"&&(Cs.current.shift=!0)},O=V=>{const te=Cs.current.cmd&&Cs.current.shift;V.key==="Meta"&&(Cs.current.cmd=!1),V.key==="Shift"&&(Cs.current.shift=!1);const ge=Cs.current.cmd&&Cs.current.shift;te&&!ge&&In.length>0&&Fe()},F=()=>{Cs.current={cmd:!1,shift:!1},mo([])};return document.addEventListener("keydown",D),document.addEventListener("keyup",O),window.addEventListener("blur",F),()=>{document.removeEventListener("keydown",D),document.removeEventListener("keyup",O),window.removeEventListener("blur",F)}},[C,In,Fe]),y.useEffect(()=>{if(!C||K||Es||Pe)return;const D=O=>{const F=O.composedPath()[0]||O.target;Po(F,"[data-feedback-toolbar]")||Po(F,"[data-annotation-marker]")||Po(F,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(F.tagName)||F.isContentEditable||(O.preventDefault(),Ie.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[C,K,Es,Pe]),y.useEffect(()=>{if(!C||K)return;const D=O=>{if(!Ie.current)return;const F=O.clientX-Ie.current.x,V=O.clientY-Ie.current.y,te=F*F+V*V,ge=Mn*Mn;if(!me&&te>=ge&&(Ge.current=Ie.current,Ve(!0),O.preventDefault()),(me||te>=ge)&&Ge.current){if(dt.current){const Gt=Math.min(Ge.current.x,O.clientX),en=Math.min(Ge.current.y,O.clientY),ws=Math.abs(O.clientX-Ge.current.x),On=Math.abs(O.clientY-Ge.current.y);dt.current.style.transform=`translate(${Gt}px, ${en}px)`,dt.current.style.width=`${ws}px`,dt.current.style.height=`${On}px`}const Ke=Date.now();if(Ke-mn.current<Xt)return;mn.current=Ke;const Je=Ge.current.x,it=Ge.current.y,vt=Math.min(Je,O.clientX),Bt=Math.min(it,O.clientY),on=Math.max(Je,O.clientX),an=Math.max(it,O.clientY),wt=(vt+on)/2,_t=(Bt+an)/2,xs=new Set,bs=[[vt,Bt],[on,Bt],[vt,an],[on,an],[wt,_t],[wt,Bt],[wt,an],[vt,_t],[on,_t]];for(const[Gt,en]of bs){const ws=document.elementsFromPoint(Gt,en);for(const On of ws)On instanceof HTMLElement&&xs.add(On)}const vs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Gt of vs)if(Gt instanceof HTMLElement){const en=Gt.getBoundingClientRect(),ws=en.left+en.width/2,On=en.top+en.height/2,no=ws>=vt&&ws<=on&&On>=Bt&&On<=an,Do=Math.min(en.right,on)-Math.max(en.left,vt),cs=Math.min(en.bottom,an)-Math.max(en.top,Bt),ci=Do>0&&cs>0?Do*cs:0,ki=en.width*en.height,Ci=ki>0?ci/ki:0;(no||Ci>.5)&&xs.add(Gt)}const Bn=[],Xn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Gt of xs){if(Po(Gt,"[data-feedback-toolbar]")||Po(Gt,"[data-annotation-marker]"))continue;const en=Gt.getBoundingClientRect();if(!(en.width>window.innerWidth*.8&&en.height>window.innerHeight*.5)&&!(en.width<10||en.height<10)&&en.left<on&&en.right>vt&&en.top<an&&en.bottom>Bt){const ws=Gt.tagName;let On=Xn.has(ws);if(!On&&(ws==="DIV"||ws==="SPAN")){const no=Gt.textContent&&Gt.textContent.trim().length>0,Do=Gt.onclick!==null||Gt.getAttribute("role")==="button"||Gt.getAttribute("role")==="link"||Gt.classList.contains("clickable")||Gt.hasAttribute("data-clickable");(no||Do)&&!Gt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(On=!0)}if(On){let no=!1;for(const Do of Bn)if(Do.left<=en.left&&Do.right>=en.right&&Do.top<=en.top&&Do.bottom>=en.bottom){no=!0;break}no||Bn.push(en)}}}if(tt.current){const Gt=tt.current;for(;Gt.children.length>Bn.length;)Gt.removeChild(Gt.lastChild);Bn.forEach((en,ws)=>{let On=Gt.children[ws];On||(On=document.createElement("div"),On.className=Ue.selectedElementHighlight,Gt.appendChild(On)),On.style.transform=`translate(${en.left}px, ${en.top}px)`,On.style.width=`${en.width}px`,On.style.height=`${en.height}px`})}}};return document.addEventListener("mousemove",D,{passive:!0}),()=>document.removeEventListener("mousemove",D)},[C,K,me,Mn]),y.useEffect(()=>{if(!C)return;const D=O=>{const F=me,V=Ge.current;if(me&&V){Et.current=!0;const te=Math.min(V.x,O.clientX),ge=Math.min(V.y,O.clientY),Ke=Math.max(V.x,O.clientX),Je=Math.max(V.y,O.clientY),it=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(wt=>{if(!(wt instanceof HTMLElement)||Po(wt,"[data-feedback-toolbar]")||Po(wt,"[data-annotation-marker]"))return;const _t=wt.getBoundingClientRect();_t.width>window.innerWidth*.8&&_t.height>window.innerHeight*.5||_t.width<10||_t.height<10||_t.left<Ke&&_t.right>te&&_t.top<Je&&_t.bottom>ge&&it.push({element:wt,rect:_t})});const Bt=it.filter(({element:wt})=>!it.some(({element:_t})=>_t!==wt&&wt.contains(_t))),on=O.clientX/window.innerWidth*100,an=O.clientY+window.scrollY;if(Bt.length>0){const wt=Bt.reduce((Xn,{rect:Gt})=>({left:Math.min(Xn.left,Gt.left),top:Math.min(Xn.top,Gt.top),right:Math.max(Xn.right,Gt.right),bottom:Math.max(Xn.bottom,Gt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),_t=Bt.slice(0,5).map(({element:Xn})=>ol(Xn).name).join(", "),xs=Bt.length>5?` +${Bt.length-5} more`:"",bs=Bt[0].element,vs=Yu(bs),Bn=Fu(bs);we({x:on,y:an,clientY:O.clientY,element:`${Bt.length} elements: ${_t}${xs}`,elementPath:"multi-select",boundingBox:{x:wt.left,y:wt.top+window.scrollY,width:wt.right-wt.left,height:wt.bottom-wt.top},isMultiSelect:!0,fullPath:qu(bs),accessibility:Xu(bs),computedStyles:Bn,computedStylesObj:vs,nearbyElements:Wu(bs),cssClasses:Zl(bs),nearbyText:Ql(bs),sourceFile:ed(bs)})}else{const wt=Math.abs(Ke-te),_t=Math.abs(Je-ge);wt>20&&_t>20&&we({x:on,y:an,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(te)}, ${Math.round(ge)})`,boundingBox:{x:te,y:ge+window.scrollY,width:wt,height:_t},isMultiSelect:!0})}xe(null)}else F&&(Et.current=!0);Ie.current=null,Ge.current=null,Ve(!1),tt.current&&(tt.current.innerHTML="")};return document.addEventListener("mouseup",D),()=>document.removeEventListener("mouseup",D)},[C,me]);const St=y.useCallback(async(D,O,F)=>{const V=Zt.webhookUrl||w;if(!V||!Zt.webhooksEnabled&&!F)return!1;try{return(await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:D,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(te){return console.warn("[Agentation] Webhook failed:",te),!1}},[w,Zt.webhookUrl,Zt.webhooksEnabled]),yt=y.useCallback(D=>{var F;if(!K)return;const O={id:Date.now().toString(),x:K.x,y:K.y,comment:D,element:K.element,elementPath:K.elementPath,timestamp:Date.now(),selectedText:K.selectedText,boundingBox:K.boundingBox,nearbyText:K.nearbyText,cssClasses:K.cssClasses,isMultiSelect:K.isMultiSelect,isFixed:K.isFixed,fullPath:K.fullPath,accessibility:K.accessibility,computedStyles:K.computedStyles,nearbyElements:K.nearbyElements,reactComponents:K.reactComponents,sourceFile:K.sourceFile,elementBoundingBoxes:K.elementBoundingBoxes,..._&&Se?{sessionId:Se,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};N(V=>[...V,O]),yn.current=O.id,Ht(()=>{yn.current=null},300),Ht(()=>{Ut(V=>new Set(V).add(O.id))},250),a==null||a(O),St("annotation.add",{annotation:O}),j(!0),Ht(()=>{we(null),j(!1)},150),(F=window.getSelection())==null||F.removeAllRanges(),_&&Se&&Kr(_,Se,O).then(V=>{V.id!==O.id&&(N(te=>te.map(ge=>ge.id===O.id?{...ge,id:V.id}:ge)),Ut(te=>{const ge=new Set(te);return ge.delete(O.id),ge.add(V.id),ge}))}).catch(V=>{console.warn("[Agentation] Failed to sync annotation:",V)})},[K,a,St,_,Se]),Pt=y.useCallback(()=>{j(!0),Ht(()=>{we(null),j(!1)},150)},[]),qt=y.useCallback(D=>{const O=M.findIndex(V=>V.id===D),F=M[O];(ee==null?void 0:ee.id)===D&&(re(!0),Ht(()=>{De(null),je(null),ct([]),re(!1)},150)),rn(D),Jt(V=>new Set(V).add(D)),F&&(c==null||c(F),St("annotation.delete",{annotation:F})),_&&Ha(_,D).catch(V=>{console.warn("[Agentation] Failed to delete annotation from server:",V)}),Ht(()=>{N(V=>V.filter(te=>te.id!==D)),Jt(V=>{const te=new Set(V);return te.delete(D),te}),rn(null),O<M.length-1&&(Ye(O),Ht(()=>Ye(null),200))},150)},[M,ee,c,St,_]),Ln=y.useCallback(D=>{var O;if(!D){Ze(null),Vt(null),$t([]);return}if(Ze(D.id),(O=D.elementBoundingBoxes)!=null&&O.length){const F=[];for(const V of D.elementBoundingBoxes){const te=V.x+V.width/2,ge=V.y+V.height/2-window.scrollY,Je=document.elementsFromPoint(te,ge).find(it=>!it.closest("[data-annotation-marker]")&&!it.closest("[data-agentation-root]"));Je&&F.push(Je)}$t(F),Vt(null)}else if(D.boundingBox){const F=D.boundingBox,V=F.x+F.width/2,te=D.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,ge=cr(V,te);if(ge){const Ke=ge.getBoundingClientRect(),Je=Ke.width/F.width,it=Ke.height/F.height;Je<.5||it<.5?Vt(null):Vt(ge)}else Vt(null);$t([])}else Vt(null),$t([])},[]),Tn=y.useCallback(D=>{if(!ee)return;const O={...ee,comment:D};N(F=>F.map(V=>V.id===ee.id?O:V)),u==null||u(O),St("annotation.update",{annotation:O}),_&&Vy(_,ee.id,{comment:D}).catch(F=>{console.warn("[Agentation] Failed to update annotation on server:",F)}),re(!0),Ht(()=>{De(null),je(null),ct([]),re(!1)},150)},[ee,u,St,_]),As=y.useCallback(()=>{re(!0),Ht(()=>{De(null),je(null),ct([]),re(!1)},150)},[]),ys=y.useCallback(()=>{const D=M.length,O=rt.length>0||!!nt;if(D===0&&$n.length===0&&!O)return;if(d==null||d(M),St("annotations.clear",{annotations:M}),_){Promise.all(M.map(te=>Ha(_,te.id).catch(ge=>{console.warn("[Agentation] Failed to delete annotation from server:",ge)})));for(const[,te]of ko.current)te&&Ha(_,te).catch(()=>{});ko.current.clear();for(const[,te]of Bo.current)te&&Ha(_,te).catch(()=>{});Bo.current.clear()}Be(!0),Le(!0),wi([]);const F=Lo.current;if(F){const te=F.getContext("2d");te&&te.clearRect(0,0,F.width,F.height)}(rt.length>0||nt)&&(Ws(te=>te+1),Jo(te=>te+1),Ht(()=>{Kt([]),Ts(null)},200)),pt&&sn(!1),jn&&qn(""),io.current={rearrange:null,placements:[]},Qu(gt);const V=D*30+200;Ht(()=>{N([]),Ut(new Set),localStorage.removeItem(kd(gt)),Be(!1)},V),Ht(()=>Le(!1),1500)},[gt,M,$n,rt,nt,pt,jn,d,St,_]),zi=y.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:gt,O=Pe&&pt;let F;if(O){if(rt.length===0&&!nt&&!jn)return;F=""}else{if(F=Yy(M,D,Zt.outputDetail),!F&&$n.length===0&&rt.length===0&&!nt)return;F||(F=`## Page Feedback: ${D}
`)}if(!O&&$n.length>0){const V=new Set;for(const Je of M)Je.drawingIndex!=null&&V.add(Je.drawingIndex);const te=Lo.current;te&&(te.style.visibility="hidden");const ge=[],Ke=window.scrollY;for(let Je=0;Je<$n.length;Je++){if(V.has(Je))continue;const it=$n[Je];if(it.points.length<2)continue;const vt=it.fixed?it.points:it.points.map(ss=>({x:ss.x,y:ss.y-Ke}));let Bt=1/0,on=1/0,an=-1/0,wt=-1/0;for(const ss of vt)Bt=Math.min(Bt,ss.x),on=Math.min(on,ss.y),an=Math.max(an,ss.x),wt=Math.max(wt,ss.y);const _t=an-Bt,xs=wt-on,bs=Math.hypot(_t,xs),vs=vt[0],Bn=vt[vt.length-1],Xn=Math.hypot(Bn.x-vs.x,Bn.y-vs.y);let Gt;const en=Xn<bs*.35,ws=_t/Math.max(xs,1);if(en&&bs>20){const ss=Math.max(_t,xs)*.15;let ji=0;for(const Ii of vt){const Bc=Ii.x-Bt<ss,Hd=an-Ii.x<ss,Vd=Ii.y-on<ss,Ud=wt-Ii.y<ss;(Bc||Hd)&&(Vd||Ud)&&ji++}Gt=ji>vt.length*.15?"box":"circle"}else ws>3&&xs<40?Gt="underline":Xn>bs*.5?Gt="arrow":Gt="drawing";const On=Math.min(10,vt.length),no=Math.max(1,Math.floor(vt.length/On)),Do=new Set,cs=[],ci=[vs];for(let ss=no;ss<vt.length-1;ss+=no)ci.push(vt[ss]);ci.push(Bn);for(const ss of ci){const ji=cr(ss.x,ss.y);if(!ji||Do.has(ji)||Po(ji,"[data-feedback-toolbar]"))continue;Do.add(ji);const{name:Ii}=ol(ji);cs.includes(Ii)||cs.push(Ii)}const ki=`${Math.round(Bt)},${Math.round(on)} → ${Math.round(an)},${Math.round(wt)}`;let Ci;(Gt==="circle"||Gt==="box")&&cs.length>0?Ci=`${Gt==="box"?"Boxed":"Circled"} **${cs[0]}**${cs.length>1?` (and ${cs.slice(1).join(", ")})`:""} (region: ${ki})`:Gt==="underline"&&cs.length>0?Ci=`Underlined **${cs[0]}** (${ki})`:Gt==="arrow"&&cs.length>=2?Ci=`Arrow from **${cs[0]}** to **${cs[cs.length-1]}** (${Math.round(vs.x)},${Math.round(vs.y)} → ${Math.round(Bn.x)},${Math.round(Bn.y)})`:cs.length>0?Ci=`${Gt==="arrow"?"Arrow":"Drawing"} near **${cs.join("**, **")}** (region: ${ki})`:Ci=`Drawing at ${ki}`,ge.push(Ci)}te&&(te.style.visibility=""),ge.length>0&&(F+=`
**Drawings:**
`,ge.forEach((Je,it)=>{F+=`${it+1}. ${Je}
`}))}if((rt.length>0||O&&jn)&&(F+=`
`+$y(rt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:pt,wireframePurpose:jn||void 0},Zt.outputDetail)),nt){const V=Iy(nt,Zt.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(F+=`
`+V)}if(g)try{await navigator.clipboard.writeText(F)}catch{}h==null||h(F),B(!0),Ht(()=>B(!1),2e3),Zt.autoClearAfterCopy&&Ht(()=>ys(),500)},[M,$n,rt,nt,pt,Pe,fs,jn,gt,Zt.outputDetail,ke,Zt.autoClearAfterCopy,ys,g,h]),_a=y.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:gt;let O=Yy(M,D,Zt.outputDetail);if(!O&&rt.length===0&&!nt)return;if(O||(O=`## Page Feedback: ${D}
`),rt.length>0&&(O+=`
`+$y(rt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:pt,wireframePurpose:jn||void 0},Zt.outputDetail)),nt){const V=Iy(nt,Zt.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(O+=`
`+V)}p&&p(O,M),L("sending"),await new Promise(V=>Ht(V,150));const F=await St("submit",{output:O,annotations:M},!0);L(F?"sent":"failed"),Ht(()=>L("idle"),2500),F&&Zt.autoClearAfterCopy&&Ht(()=>ys(),500)},[p,St,M,rt,nt,pt,fs,gt,Zt.outputDetail,ke,Zt.autoClearAfterCopy,ys]);y.useEffect(()=>{if(!wn)return;const D=10,O=V=>{const te=V.clientX-wn.x,ge=V.clientY-wn.y,Ke=Math.sqrt(te*te+ge*ge);if(!ns&&Ke>D&&An(!0),ns||Ke>D){let Je=wn.toolbarX+te,it=wn.toolbarY+ge;const vt=20,Bt=337,on=44,wt=Bt-(C?lt==="connected"?297:257:44),_t=vt-wt,xs=window.innerWidth-vt-Bt;Je=Math.max(_t,Math.min(xs,Je)),it=Math.max(vt,Math.min(window.innerHeight-on-vt,it)),Gn({x:Je,y:it})}},F=()=>{ns&&(Os.current=!0),An(!1),Nn(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)}},[wn,ns,C,lt]);const $i=y.useCallback(D=>{var ge,Ke;if(D.target.closest("button")||D.target.closest("[data-agentation-settings-panel]"))return;const O=D.currentTarget.parentElement;if(!O)return;const F=O.getBoundingClientRect(),V=(ge=Lt==null?void 0:Lt.x)!=null?ge:F.left,te=(Ke=Lt==null?void 0:Lt.y)!=null?Ke:F.top;Nn({x:D.clientX,y:D.clientY,toolbarX:V,toolbarY:te})},[Lt]);if(y.useEffect(()=>{if(!Lt)return;const D=()=>{let te=Lt.x,ge=Lt.y;const it=20-(337-(C?lt==="connected"?297:257:44)),vt=window.innerWidth-20-337;te=Math.max(it,Math.min(vt,te)),ge=Math.max(20,Math.min(window.innerHeight-44-20,ge)),(te!==Lt.x||ge!==Lt.y)&&Gn({x:te,y:ge})};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[Lt,C,lt]),y.useEffect(()=>{const D=O=>{const F=O.target,V=F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable;if(O.key==="Escape"){if(Pe){Qt?Nt(null):gs();return}if(Es){Fs(!1);return}if(In.length>0){mo([]);return}K||C&&(ms(),k(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),ms(),C?$o():k(!0);return}if(!(V||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),ms(),Oi()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),ms(),Es&&Fs(!1),ve&&We(!1),K&&Pt(),Pe?gs():xt(!0)),(O.key==="h"||O.key==="H")&&M.length>0&&(O.preventDefault(),ms(),E(te=>!te)),(O.key==="c"||O.key==="C")&&(M.length>0||rt.length>0||nt)&&(O.preventDefault(),ms(),zi()),(O.key==="x"||O.key==="X")&&(M.length>0||rt.length>0||nt)&&(O.preventDefault(),ms(),ys(),rt.length>0&&Kt([]),nt&&Ts(null)),O.key==="s"||O.key==="S")){const te=Wi(Zt.webhookUrl)||Wi(w||"");M.length>0&&te&&H==="idle"&&(O.preventDefault(),ms(),_a())}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[C,Es,Pe,Qt,rt,nt,K,M.length,Zt.webhookUrl,w,H,_a,Oi,zi,ys,In]),!qe||$)return null;const Gi=M.length>0,Ki=M.filter(D=>!gn.has(D.id)&&D.kind!=="placement"&&D.kind!=="rearrange"),Ec=Ki.length>0,Qi=M.filter(D=>gn.has(D.id)),Dc=D=>{const ge=D.x/100*window.innerWidth,Ke=typeof D.y=="string"?parseFloat(D.y):D.y,Je={};window.innerHeight-Ke-22-10<80&&(Je.top="auto",Je.bottom="calc(100% + 10px)");const vt=ge-200/2,Bt=10;if(vt<Bt){const on=Bt-vt;Je.left=`calc(50% + ${on}px)`}else if(vt+200>window.innerWidth-Bt){const on=vt+200-(window.innerWidth-Bt);Je.left=`calc(50% - ${on}px)`}return Je};return Sc.createPortal(r.jsxs("div",{ref:q,style:{display:"contents"},"data-agentation-theme":Ns?"dark":"light","data-agentation-accent":Zt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${Ue.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Lt?{left:Lt.x,top:Lt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${Ue.toolbarContainer} ${C?Ue.expanded:Ue.collapsed} ${Co?Ue.entrance:""} ${P?Ue.hiding:""} ${!Zt.webhooksEnabled&&(Wi(Zt.webhookUrl)||Wi(w||""))?Ue.serverConnected:""}`,onClick:C?void 0:D=>{if(Os.current){Os.current=!1,D.preventDefault();return}k(!0)},onMouseDown:$i,role:C?void 0:"button",tabIndex:C?-1:0,title:C?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${Ue.toggleContent} ${C?Ue.hidden:Ue.visible}`,children:[r.jsx(Dw,{size:24}),Ec&&r.jsx("span",{className:`${Ue.badge} ${C?Ue.fadeOut:""} ${Co?Ue.entrance:""}`,children:Ki.length})]}),r.jsxs("div",{className:`${Ue.controlsContent} ${C?Ue.visible:Ue.hidden} ${Lt&&Lt.y<100?Ue.tooltipBelow:""} ${Yt||ve?Ue.tooltipsHidden:""} ${Oo?Ue.tooltipsInSession:""}`,onMouseEnter:Xs,onMouseLeave:lo,children:[r.jsxs("div",{className:`${Ue.buttonWrapper} ${Lt&&Lt.x<120?Ue.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:Ue.controlButton,onClick:D=>{D.stopPropagation(),ms(),Oi()},"data-active":J,children:r.jsx(Lw,{size:24,isPaused:J})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[J?"Resume animations":"Pause animations",r.jsx("span",{className:Ue.shortcut,children:"P"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:`${Ue.controlButton} ${Ns?"":Ue.light}`,onClick:D=>{D.stopPropagation(),ms(),Es&&Fs(!1),ve&&We(!1),K&&Pt(),Pe?gs():xt(!0)},"data-active":Pe,style:Pe&&pt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(Ww,{size:21})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[Pe?"Exit layout mode":"Layout mode",r.jsx("span",{className:Ue.shortcut,children:"L"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:Ue.controlButton,onClick:D=>{D.stopPropagation(),ms(),E(!A)},disabled:!Gi||Pe,children:r.jsx(Bw,{size:24,isOpen:A})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[A?"Hide markers":"Show markers",r.jsx("span",{className:Ue.shortcut,children:"H"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:`${Ue.controlButton} ${Te?Ue.statusShowing:""}`,onClick:D=>{D.stopPropagation(),ms(),zi()},disabled:Pe&&pt?rt.length===0&&!((Ac=nt==null?void 0:nt.sections)!=null&&Ac.length):!Gi&&$n.length===0&&rt.length===0&&!((Nc=nt==null?void 0:nt.sections)!=null&&Nc.length),"data-active":Te,children:r.jsx(Nw,{size:24,copied:Te,tint:Pe&&pt&&(rt.length>0||(hl=nt==null?void 0:nt.sections)!=null&&hl.length)?"#f97316":void 0})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[Pe&&pt?"Copy layout":"Copy feedback",r.jsx("span",{className:Ue.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${Ue.buttonWrapper} ${Ue.sendButtonWrapper} ${C&&!Zt.webhooksEnabled&&(Wi(Zt.webhookUrl)||Wi(w||""))?Ue.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${Ue.controlButton} ${H==="sent"||H==="failed"?Ue.statusShowing:""}`,onClick:D=>{D.stopPropagation(),ms(),_a()},disabled:!Gi||!Wi(Zt.webhookUrl)&&!Wi(w||"")||H==="sending","data-no-hover":H==="sent"||H==="failed",tabIndex:Wi(Zt.webhookUrl)||Wi(w||"")?0:-1,children:[r.jsx(Rw,{size:24,state:H}),Gi&&H==="idle"&&r.jsx("span",{className:Ue.buttonBadge,children:M.length})]}),r.jsxs("span",{className:Ue.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:Ue.shortcut,children:"S"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:Ue.controlButton,onClick:D=>{D.stopPropagation(),ms(),ys()},disabled:!Gi&&$n.length===0&&rt.length===0&&!((ml=nt==null?void 0:nt.sections)!=null&&ml.length),"data-danger":!0,children:r.jsx(zw,{size:24})}),r.jsxs("span",{className:Ue.buttonTooltip,children:["Clear all",r.jsx("span",{className:Ue.shortcut,children:"X"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:Ue.controlButton,onClick:D=>{D.stopPropagation(),ms(),Pe&&gs(),We(!ve)},children:r.jsx(Ow,{size:24})}),_&&lt!=="disconnected"&&r.jsx("span",{className:`${Ue.mcpIndicator} ${Ue[lt]} ${ve?Ue.hidden:""}`,title:lt==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:Ue.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:Ue.divider}),r.jsxs("div",{className:`${Ue.buttonWrapper} ${Lt&&typeof window<"u"&&Lt.x>window.innerWidth-120?Ue.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:Ue.controlButton,onClick:D=>{D.stopPropagation(),ms(),$o()},children:r.jsx($w,{size:24})}),r.jsxs("span",{className:Ue.buttonTooltip,children:["Exit",r.jsx("span",{className:Ue.shortcut,children:"Esc"})]})]})]}),r.jsx(x4,{visible:Pe&&C,activeType:Qt,onSelect:D=>{Nt(Qt===D?null:D)},isDarkMode:Ns,sectionCount:(ga=nt==null?void 0:nt.sections.length)!=null?ga:0,onDetectSections:()=>{var Ke,Je;const D=D4(),O=(Ke=nt==null?void 0:nt.sections)!=null?Ke:[],F=new Set(O.map(it=>it.selector)),V=D.filter(it=>!F.has(it.selector)),te=[...O,...V],ge=[...(Je=nt==null?void 0:nt.originalOrder)!=null?Je:[],...V.map(it=>it.id)];Ts({sections:te,originalOrder:ge,detectedAt:Date.now()})},placementCount:rt.length,onClearPlacements:()=>{Ws(D=>D+1),Jo(D=>D+1),Ht(()=>{Ts({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:pt,onBlankCanvasChange:D=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};D?(uo.current={rearrange:nt,placements:rt},Ts(io.current.rearrange||O),Kt(io.current.placements),Nt(null)):(io.current={rearrange:nt,placements:rt},Ts(uo.current.rearrange||O),Kt(uo.current.placements)),sn(D)},wireframePurpose:jn,onWireframePurposeChange:qn,Tooltip:hr,onDragStart:(D,O)=>{var on;O.preventDefault();const F=bt[D];let V=null,te=!1;const ge=O.clientX,Ke=O.clientY,Je=O.target.closest("[data-feedback-toolbar]"),it=(on=Je==null?void 0:Je.getBoundingClientRect().top)!=null?on:window.innerHeight,vt=an=>{const wt=an.clientX-ge,_t=an.clientY-Ke;if(!te&&(Math.abs(wt)>4||Math.abs(_t)>4)&&(te=!0,V=document.createElement("div"),V.className=`${Ae.dragPreview}${pt?` ${Ae.dragPreviewWireframe}`:""}`,document.body.appendChild(V)),!V)return;const xs=Math.max(0,it-an.clientY),bs=Math.min(1,xs/180),vs=1-Math.pow(1-bs,2),Bn=28,Xn=20,Gt=Math.min(140,F.width*.18),en=Math.min(90,F.height*.18),ws=Bn+(Gt-Bn)*vs,On=Xn+(en-Xn)*vs;V.style.width=`${ws}px`,V.style.height=`${On}px`,V.style.left=`${an.clientX-ws/2}px`,V.style.top=`${an.clientY-On/2}px`,V.style.opacity=`${.5+.5*vs}`,V.textContent=vs>.25?D:""},Bt=an=>{if(window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Bt),V&&document.body.removeChild(V),te){const wt=F.width,_t=F.height,xs=window.scrollY,bs=Math.max(0,an.clientX-wt/2),vs=Math.max(0,an.clientY+xs-_t/2),Bn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:D,x:bs,y:vs,width:wt,height:_t,scrollY:xs,timestamp:Date.now()};Kt(Xn=>[...Xn,Bn]),Nt(null),Ro.current=new Set,ao(Xn=>Xn+1)}};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Bt)}}),r.jsx(I6,{settings:Zt,onSettingsChange:D=>Wo(O=>({...O,...D})),isDarkMode:Ns,onToggleTheme:Z,isDevMode:fe,connectionStatus:lt,endpoint:_,isVisible:Xe,toolbarNearBottom:!!Lt&&Lt.y<230,settingsPage:Dt,onSettingsPageChange:Ot,onHideToolbar:Mo})]})}),(Pe||ln)&&r.jsx("div",{className:`${Ae.blankCanvas} ${nn?Ae.visible:""} ${dn?Ae.gridActive:""}`,style:{"--canvas-opacity":Jn},"data-feedback-toolbar":!0}),Pe&&pt&&nn&&r.jsxs("div",{className:Ae.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:Ae.wireframeOpacityRow,children:[r.jsx("span",{className:Ae.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:Ae.wireframeOpacitySlider,min:0,max:1,step:.01,value:Jn,onChange:D=>Un(Number(D.target.value))})]}),r.jsxs("div",{className:Ae.wireframeNoticeTitleRow,children:[r.jsx("span",{className:Ae.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:Ae.wireframeNoticeDivider}),r.jsx("button",{className:Ae.wireframeStartOver,onClick:()=>{Ws(D=>D+1),Ts({sections:[],originalOrder:[],detectedAt:Date.now()}),io.current={rearrange:null,placements:[]},qn(""),Qu(gt)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Pe||ln)&&r.jsx(m4,{placements:rt,onChange:Kt,activeComponent:ln?null:Qt,onActiveComponentChange:Nt,isDarkMode:Ns,exiting:ln,onInteractionChange:es,passthrough:!Qt,extraSnapRects:nt==null?void 0:nt.sections.map(D=>D.currentRect),deselectSignal:fo,clearSignal:Us,wireframe:pt,onSelectionChange:(D,O)=>{Ro.current=D,O||(Ys.current=new Set,Vs(F=>F+1))},onDragMove:(D,O)=>{const F=Ys.current;if(!(!F.size||!nt)){if(!ts.current){ts.current=new Map;for(const V of nt.sections)F.has(V.id)&&ts.current.set(V.id,{x:V.currentRect.x,y:V.currentRect.y})}for(const V of nt.sections){if(!F.has(V.id)||!ts.current.get(V.id))continue;const ge=document.querySelector(`[data-rearrange-section="${V.id}"]`);ge&&(ge.style.transform=`translate(${D}px, ${O}px)`)}}},onDragEnd:(D,O,F)=>{const V=Ys.current,te=ts.current;if(ts.current=null,!(!V.size||!nt||!te)){for(const ge of V){const Ke=document.querySelector(`[data-rearrange-section="${ge}"]`);Ke&&(Ke.style.transform="")}F&&Ts(ge=>ge&&{...ge,sections:ge.sections.map(Ke=>{const Je=te.get(Ke.id);return Je?{...Ke,currentRect:{...Ke.currentRect,x:Math.max(0,Je.x+D),y:Math.max(0,Je.y+O)}}:Ke})})}}}),(Pe||ln)&&nt&&r.jsx(R4,{rearrangeState:nt,onChange:Ts,isDarkMode:Ns,exiting:ln,blankCanvas:pt,extraSnapRects:rt.map(D=>({x:D.x,y:D.y,width:D.width,height:D.height})),clearSignal:fn,deselectSignal:Wn,onSelectionChange:(D,O)=>{Ys.current=D,O||(Ro.current=new Set,ao(F=>F+1))},onDragMove:(D,O)=>{const F=Ro.current;if(F.size){if(!ts.current){ts.current=new Map;for(const V of rt)F.has(V.id)&&ts.current.set(V.id,{x:V.x,y:V.y})}for(const V of F){const te=document.querySelector(`[data-design-placement="${V}"]`);te&&(te.style.transform=`translate(${D}px, ${O}px)`)}}},onDragEnd:(D,O,F)=>{const V=Ro.current,te=ts.current;if(ts.current=null,!(!V.size||!te)){for(const ge of V){const Ke=document.querySelector(`[data-design-placement="${ge}"]`);Ke&&(Ke.style.transform="")}F&&Kt(ge=>ge.map(Ke=>{const Je=te.get(Ke.id);return Je?{...Ke,x:Math.max(0,Je.x+D),y:Math.max(0,Je.y+O)}:Ke}))}}}),r.jsx("canvas",{ref:Lo,className:`${Ue.drawCanvas} ${Es?Ue.active:""}`,style:{opacity:_o?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:Ue.markersLayer,"data-feedback-toolbar":!0,children:[se&&Ki.filter(D=>!D.isFixed).map((D,O,F)=>r.jsx(Fy,{annotation:D,globalIndex:Ki.findIndex(V=>V.id===D.id),layerIndex:O,layerSize:F.length,isExiting:G,isClearing:Ee,isAnimated:zt.has(D.id),isHovered:!G&&et===D.id,isDeleting:tn===D.id,isEditingAny:!!ee,renumberFrom:de,markerClickBehavior:Zt.markerClickBehavior,tooltipStyle:Dc(D),onHoverEnter:V=>!G&&V.id!==yn.current&&Ln(V),onHoverLeave:()=>Ln(null),onClick:V=>Zt.markerClickBehavior==="delete"?qt(V.id):ht(V),onContextMenu:ht},D.id)),se&&!G&&Qi.filter(D=>!D.isFixed).map(D=>r.jsx(Xy,{annotation:D},D.id))]}),r.jsxs("div",{className:Ue.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[se&&Ki.filter(D=>D.isFixed).map((D,O,F)=>r.jsx(Fy,{annotation:D,globalIndex:Ki.findIndex(V=>V.id===D.id),layerIndex:O,layerSize:F.length,isExiting:G,isClearing:Ee,isAnimated:zt.has(D.id),isHovered:!G&&et===D.id,isDeleting:tn===D.id,isEditingAny:!!ee,renumberFrom:de,markerClickBehavior:Zt.markerClickBehavior,tooltipStyle:Dc(D),onHoverEnter:V=>!G&&V.id!==yn.current&&Ln(V),onHoverLeave:()=>Ln(null),onClick:V=>Zt.markerClickBehavior==="delete"?qt(V.id):ht(V),onContextMenu:ht},D.id)),se&&!G&&Qi.filter(D=>D.isFixed).map(D=>r.jsx(Xy,{annotation:D,fixed:!0},D.id))]}),C&&r.jsxs("div",{className:Ue.overlay,"data-feedback-toolbar":!0,style:K||ee?{zIndex:99999}:void 0,children:[(ce==null?void 0:ce.rect)&&!K&&!ft&&!me&&r.jsx("div",{className:`${Ue.hoverHighlight} ${Ue.enter}`,style:{left:ce.rect.left,top:ce.rect.top,width:ce.rect.width,height:ce.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),In.filter(D=>document.contains(D.element)).map((D,O)=>{const F=D.element.getBoundingClientRect(),V=In.length>1;return r.jsx("div",{className:V?Ue.multiSelectOutline:Ue.singleSelectOutline,style:{position:"fixed",left:F.left,top:F.top,width:F.width,height:F.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),et&&!K&&(()=>{var te;const D=M.find(ge=>ge.id===et);if(!(D!=null&&D.boundingBox))return null;if((te=D.elementBoundingBoxes)!=null&&te.length)return Mt.length>0?Mt.filter(ge=>document.contains(ge)).map((ge,Ke)=>{const Je=ge.getBoundingClientRect();return r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:Je.left,top:Je.top,width:Je.width,height:Je.height}},`hover-outline-live-${Ke}`)}):D.elementBoundingBoxes.map((ge,Ke)=>r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:ge.x,top:ge.y-Qe,width:ge.width,height:ge.height}},`hover-outline-${Ke}`));const O=Wt&&document.contains(Wt)?Wt.getBoundingClientRect():null,F=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:D.boundingBox.x,y:D.isFixed?D.boundingBox.y:D.boundingBox.y-Qe,width:D.boundingBox.width,height:D.boundingBox.height},V=D.isMultiSelect;return r.jsx("div",{className:`${V?Ue.multiSelectOutline:Ue.singleSelectOutline} ${Ue.enter}`,style:{left:F.x,top:F.y,width:F.width,height:F.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ce&&!K&&!ft&&!me&&r.jsxs("div",{className:`${Ue.hoverTooltip} ${Ue.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(ce.reactComponents?48:32),8)},children:[ce.reactComponents&&r.jsx("div",{className:Ue.hoverReactPath,children:ce.reactComponents}),r.jsx("div",{className:Ue.hoverElementName,children:ce.elementName})]}),K&&r.jsxs(r.Fragment,{children:[(ya=K.multiSelectElements)!=null&&ya.length?K.multiSelectElements.filter(D=>document.contains(D)).map((D,O)=>{const F=D.getBoundingClientRect();return r.jsx("div",{className:`${Ue.multiSelectOutline} ${Rt?Ue.exit:Ue.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`pending-multi-${O}`)}):K.targetElement&&document.contains(K.targetElement)?(()=>{const D=K.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${Ue.singleSelectOutline} ${Rt?Ue.exit:Ue.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():K.boundingBox&&r.jsx("div",{className:`${K.isMultiSelect?Ue.multiSelectOutline:Ue.singleSelectOutline} ${Rt?Ue.exit:Ue.enter}`,style:{left:K.boundingBox.x,top:K.boundingBox.y-Qe,width:K.boundingBox.width,height:K.boundingBox.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const D=K.x,O=K.isFixed?K.y:K.y-Qe;return r.jsxs(r.Fragment,{children:[r.jsx(E6,{x:D,y:O,isMultiSelect:K.isMultiSelect,isExiting:Rt}),r.jsx(wd,{ref:Rn,element:K.element,selectedText:K.selectedText,computedStyles:K.computedStylesObj,placeholder:K.element==="Area selection"?"What should change in this area?":K.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:yt,onCancel:Pt,isExiting:Rt,lightMode:!Ns,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,D/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),ee&&r.jsxs(r.Fragment,{children:[(Rc=ee.elementBoundingBoxes)!=null&&Rc.length?ot.length>0?ot.filter(D=>document.contains(D)).map((D,O)=>{const F=D.getBoundingClientRect();return r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`edit-multi-live-${O}`)}):ee.elementBoundingBoxes.map((D,O)=>r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:D.x,top:D.y-Qe,width:D.width,height:D.height}},`edit-multi-${O}`)):(()=>{const D=He&&document.contains(He)?He.getBoundingClientRect():null,O=D?{x:D.left,y:D.top,width:D.width,height:D.height}:ee.boundingBox?{x:ee.boundingBox.x,y:ee.isFixed?ee.boundingBox.y:ee.boundingBox.y-Qe,width:ee.boundingBox.width,height:ee.boundingBox.height}:null;return O?r.jsx("div",{className:`${ee.isMultiSelect?Ue.multiSelectOutline:Ue.singleSelectOutline} ${Ue.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...ee.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(wd,{ref:po,element:ee.element,selectedText:ee.selectedText,computedStyles:j4(ee.computedStyles),placeholder:"Edit your feedback...",initialValue:ee.comment,submitLabel:"Save",onSubmit:Tn,onCancel:As,onDelete:()=>qt(ee.id),isExiting:Y,lightMode:!Ns,accentColor:ee.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const D=ee.isFixed?ee.y:ee.y-Qe;return{left:Math.max(160,Math.min(window.innerWidth-160,ee.x/100*window.innerWidth)),...D>window.innerHeight-290?{bottom:window.innerHeight-D+20}:{top:D+20}}})()})]}),me&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:dt,className:Ue.dragSelection}),r.jsx("div",{ref:tt,className:Ue.highlightsContainer})]})]})]}),document.body)}const hp=y.createContext({});function kc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const V6=typeof window<"u",mp=V6?y.useLayoutEffect:y.useEffect,Rd=y.createContext(null);function pp(t,n){t.indexOf(n)===-1&&t.push(n)}function al(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const qi=(t,n,i)=>i>n?n:i<t?t:i;let _p=()=>{};const Fa={},Kx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Qx(t){return typeof t=="object"&&t!==null}const Zx=t=>/^0[^.\s]+$/u.test(t);function Jx(t){let n;return()=>(n===void 0&&(n=t()),n)}const xi=t=>t,U6=(t,n)=>i=>n(t(i)),Cc=(...t)=>t.reduce(U6),rl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class gp{constructor(){this.subscriptions=[]}add(n){return pp(this.subscriptions,n),()=>al(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Zo=t=>t*1e3,yi=t=>t/1e3;function eb(t,n){return n?t*(1e3/n):0}const W6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},tb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,Y6=1e-7,F6=12;function X6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=tb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>Y6&&++h<F6);return d}function jc(t,n,i,a){if(t===n&&i===a)return xi;const c=u=>X6(u,0,1,t,i);return u=>u===0||u===1?u:tb(c(u),n,a)}const nb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,sb=t=>n=>1-t(1-n),ob=jc(.33,1.53,.69,.99),yp=sb(ob),ib=nb(yp),ab=t=>t>=1?1:(t*=2)<1?.5*yp(t):.5*(2-Math.pow(2,-10*(t-1))),xp=t=>1-Math.sin(Math.acos(t)),rb=sb(xp),lb=nb(xp),q6=jc(.42,0,1,1),G6=jc(0,0,.58,1),cb=jc(.42,0,.58,1),ub=t=>Array.isArray(t)&&typeof t[0]!="number";function db(t,n){return ub(t)?t[W6(0,t.length,n)]:t}const fb=t=>Array.isArray(t)&&typeof t[0]=="number",K6={linear:xi,easeIn:q6,easeInOut:cb,easeOut:G6,circIn:xp,circInOut:lb,circOut:rb,backIn:yp,backInOut:ib,backOut:ob,anticipate:ab},Q6=t=>typeof t=="string",Qy=t=>{if(fb(t)){_p(t.length===4);const[n,i,a,c]=t;return jc(n,i,a,c)}else if(Q6(t))return K6[t];return t},td=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Z6(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const J6=40;function hb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=td.reduce((A,E)=>(A[E]=Z6(u),A),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,C=()=>{const A=Fa.useManualTiming,E=A?c.timestamp:performance.now();i=!1,A||(c.delta=a?1e3/60:Math.max(Math.min(E-c.timestamp,J6),1)),c.timestamp=E,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(C))},k=()=>{i=!0,a=!0,c.isProcessing||t(C)};return{schedule:td.reduce((A,E)=>{const $=d[E];return A[E]=(W,P=!1,X=!1)=>(i||k(),$.schedule(W,P,X)),A},{}),cancel:A=>{for(let E=0;E<td.length;E++)d[td[E]].cancel(A)},state:c,steps:d}}const{schedule:ls,cancel:pa,state:vo,steps:im}=hb(typeof requestAnimationFrame<"u"?requestAnimationFrame:xi,!0);let ud;function ek(){ud=void 0}const Ho={now:()=>(ud===void 0&&Ho.set(vo.isProcessing||Fa.useManualTiming?vo.timestamp:performance.now()),ud),set:t=>{ud=t,queueMicrotask(ek)}},mb=t=>n=>typeof n=="string"&&n.startsWith(t),pb=mb("--"),tk=mb("var(--"),bp=t=>tk(t)?nk.test(t.split("/*")[0].trim()):!1,nk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Zy(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const cl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},gc={...cl,transform:t=>qi(0,1,t)},nd={...cl,default:1},dc=t=>Math.round(t*1e5)/1e5,vp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sk(t){return t==null}const ok=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,wp=(t,n)=>i=>!!(typeof i=="string"&&ok.test(i)&&i.startsWith(t)||n&&!sk(i)&&Object.prototype.hasOwnProperty.call(i,n)),_b=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(vp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},ik=t=>qi(0,255,t),am={...cl,transform:t=>Math.round(ik(t))},mr={test:wp("rgb","red"),parse:_b("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+am.transform(t)+", "+am.transform(n)+", "+am.transform(i)+", "+dc(gc.transform(a))+")"};function ak(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Lm={test:wp("#"),parse:ak,transform:mr.transform},Mc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Va=Mc("deg"),Xi=Mc("%"),jt=Mc("px"),rk=Mc("vh"),lk=Mc("vw"),Jy={...Xi,parse:t=>Xi.parse(t)/100,transform:t=>Xi.transform(t*100)},tl={test:wp("hsl","hue"),parse:_b("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Xi.transform(dc(n))+", "+Xi.transform(dc(i))+", "+dc(gc.transform(a))+")"},Js={test:t=>mr.test(t)||Lm.test(t)||tl.test(t),parse:t=>mr.test(t)?mr.parse(t):tl.test(t)?tl.parse(t):Lm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?mr.transform(t):tl.transform(t),getAnimatableNone:t=>{const n=Js.parse(t);return n.alpha=0,Js.transform(n)}},ck=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uk(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(vp))==null?void 0:n.length)||0)+(((i=t.match(ck))==null?void 0:i.length)||0)>0}const gb="number",yb="color",dk="var",fk="var(",e1="${}",hk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ll(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(hk,p=>(Js.test(p)?(a.color.push(u),c.push(yb),i.push(Js.parse(p))):p.startsWith(fk)?(a.var.push(u),c.push(dk),i.push(p)):(a.number.push(u),c.push(gb),i.push(parseFloat(p))),++u,e1)).split(e1);return{values:i,split:h,indexes:a,types:c}}function mk(t){return ll(t).values}function xb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===gb?c+=dc(a[u]):d===yb?c+=Js.transform(a[u]):c+=a[u]}return c}}function pk(t){return xb(ll(t))}const _k=t=>typeof t=="number"?0:Js.test(t)?Js.getAnimatableNone(t):t,gk=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:_k(t);function yk(t){const n=ll(t);return xb(n)(n.values.map((a,c)=>gk(a,n.split[c])))}const Bi={test:uk,parse:mk,createTransformer:pk,getAnimatableNone:yk};function rm(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function xk({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=rm(p,h,t+1/3),u=rm(p,h,t),d=rm(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Cd(t,n){return i=>i>0?n:t}const _s=(t,n,i)=>t+(n-t)*i,lm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},bk=[Lm,mr,tl],vk=t=>bk.find(n=>n.test(t));function t1(t){const n=vk(t);if(!n)return!1;let i=n.parse(t);return n===tl&&(i=xk(i)),i}const n1=(t,n)=>{const i=t1(t),a=t1(n);if(!i||!a)return Cd(t,n);const c={...i};return u=>(c.red=lm(i.red,a.red,u),c.green=lm(i.green,a.green,u),c.blue=lm(i.blue,a.blue,u),c.alpha=_s(i.alpha,a.alpha,u),mr.transform(c))},Om=new Set(["none","hidden"]);function wk(t,n){return Om.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function Sk(t,n){return i=>_s(t,n,i)}function Sp(t){return typeof t=="number"?Sk:typeof t=="string"?bp(t)?Cd:Js.test(t)?n1:jk:Array.isArray(t)?bb:typeof t=="object"?Js.test(t)?n1:kk:Cd}function bb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Sp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function kk(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Sp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function Ck(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const jk=(t,n)=>{const i=Bi.createTransformer(n),a=ll(t),c=ll(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Om.has(t)&&!c.values.length||Om.has(n)&&!a.values.length?wk(t,n):Cc(bb(Ck(a,c),c.values),i):Cd(t,n)};function vb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?_s(t,n,i):Sp(t)(t,n)}const Mk=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ls.update(n,i),stop:()=>pa(n),now:()=>vo.isProcessing?vo.timestamp:Ho.now()}},wb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},jd=2e4;function kp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<jd;)n+=i,a=t.next(n);return n>=jd?1/0:n}function Sb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(kp(a),jd);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:yi(c)}}const Ls={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function zm(t,n){return t*Math.sqrt(1-n*n)}const Tk=12;function Ek(t,n,i){let a=i;for(let c=1;c<Tk;c++)a=a-t(a)/n(a);return a}const cm=.001;function Dk({duration:t=Ls.duration,bounce:n=Ls.bounce,velocity:i=Ls.velocity,mass:a=Ls.mass}){let c,u,d=1-n;d=qi(Ls.minDamping,Ls.maxDamping,d),t=qi(Ls.minDuration,Ls.maxDuration,yi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=zm(g,d),S=Math.exp(-x);return cm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),C=zm(Math.pow(g,2),d);return(-c(g)+cm>0?-1:1)*((b-w)*S)/C}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-cm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=Ek(c,u,h);if(t=Zo(t),isNaN(p))return{stiffness:Ls.stiffness,damping:Ls.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const Ak=["duration","bounce"],Nk=["stiffness","damping","mass"];function s1(t,n){return n.some(i=>t[i]!==void 0)}function Rk(t){let n={velocity:Ls.velocity,stiffness:Ls.stiffness,damping:Ls.damping,mass:Ls.mass,isResolvedFromDuration:!1,...t};if(!s1(t,Nk)&&s1(t,Ak))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*qi(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ls.mass,stiffness:c,damping:u}}else{const i=Dk({...t,velocity:0});n={...n,...i,mass:Ls.mass},n.isResolvedFromDuration=!0}return n}function yc(t=Ls.visualDuration,n=Ls.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=Rk({...i,velocity:-yi(i.velocity||0)}),S=b||0,C=g/(2*Math.sqrt(p*_)),k=d-u,M=yi(Math.sqrt(p/_)),N=Math.abs(k)<5;a||(a=N?Ls.restSpeed.granular:Ls.restSpeed.default),c||(c=N?Ls.restDelta.granular:Ls.restDelta.default);let A,E,$,W,P,X;if(C<1)$=zm(M,C),W=(S+C*M*k)/$,A=se=>{const ae=Math.exp(-C*M*se);return d-ae*(W*Math.sin($*se)+k*Math.cos($*se))},P=C*M*W+k*$,X=C*M*k-W*$,E=se=>Math.exp(-C*M*se)*(P*Math.sin($*se)+X*Math.cos($*se));else if(C===1){A=ae=>d-Math.exp(-M*ae)*(k+(S+M*k)*ae);const se=S+M*k;E=ae=>Math.exp(-M*ae)*(M*se*ae-S)}else{const se=M*Math.sqrt(C*C-1);A=ce=>{const xe=Math.exp(-C*M*ce),z=Math.min(se*ce,300);return d-xe*((S+C*M*k)*Math.sinh(z)+se*k*Math.cosh(z))/se};const ae=(S+C*M*k)/se,G=C*M*ae-k*se,ne=C*M*k-ae*se;E=ce=>{const xe=Math.exp(-C*M*ce),z=Math.min(se*ce,300);return xe*(G*Math.sinh(z)+ne*Math.cosh(z))}}const q={calculatedDuration:w&&x||null,velocity:se=>Zo(E(se)),next:se=>{if(!w&&C<1){const G=Math.exp(-C*M*se),ne=Math.sin($*se),ce=Math.cos($*se),xe=d-G*(W*ne+k*ce),z=Zo(G*(P*ne+X*ce));return h.done=Math.abs(z)<=a&&Math.abs(d-xe)<=c,h.value=h.done?d:xe,h}const ae=A(se);if(w)h.done=se>=x;else{const G=Zo(E(se));h.done=Math.abs(G)<=a&&Math.abs(d-ae)<=c}return h.value=h.done?d:ae,h},toString:()=>{const se=Math.min(kp(q),jd),ae=wb(G=>q.next(se*G).value,se,30);return se+"ms "+ae},toTransition:()=>{}};return q}yc.applyToOptions=t=>{const n=Sb(t,100,yc);return t.ease=n.ease,t.duration=Zo(n.duration),t.type="keyframes",t};const Bk=5;function kb(t,n,i){const a=Math.max(n-Bk,0);return eb(i-t(a),n-a)}function $m({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=X=>h!==void 0&&X<h||p!==void 0&&X>p,S=X=>h===void 0?p:p===void 0||Math.abs(h-X)<Math.abs(p-X)?h:p;let C=i*n;const k=x+C,M=d===void 0?k:d(k);M!==k&&(C=M-x);const N=X=>-C*Math.exp(-X/a),A=X=>M+N(X),E=X=>{const q=N(X),se=A(X);b.done=Math.abs(q)<=g,b.value=b.done?M:se};let $,W;const P=X=>{w(b.value)&&($=X,W=yc({keyframes:[b.value,S(b.value)],velocity:kb(A,X,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return P(0),{calculatedDuration:null,next:X=>{let q=!1;return!W&&$===void 0&&(q=!0,E(X),P(X)),$!==void 0&&X>=$?W.next(X-$):(!q&&E(X),b)}}}function Lk(t,n,i){const a=[],c=i||Fa.mix||vb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||xi:n;h=Cc(p,h)}a.push(h)}return a}function Cb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(_p(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=Lk(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=rl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(qi(t[0],t[u-1],_)):g}function jb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=rl(0,n,a);t.push(_s(i,1,c))}}function Mb(t){const n=[0];return jb(n,t.length-1),n}function Ok(t,n){return t.map(i=>i*n)}function zk(t,n){return t.map(()=>n||cb).splice(0,t.length-1)}function fc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=ub(a)?a.map(Qy):Qy(a),u={done:!1,value:n[0]},d=Ok(i&&i.length===n.length?i:Mb(n),t),h=Cb(d,n,{ease:Array.isArray(c)?c:zk(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const $k=t=>t!==null;function Bd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter($k),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const Ik={decay:$m,inertia:$m,tween:fc,keyframes:fc,spring:yc};function Tb(t){typeof t.type=="string"&&(t.type=Ik[t.type])}class Cp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const Pk=t=>t/100;class Md extends Cp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Ho.now()&&this.tick(Ho.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Tb(n);const{type:i=fc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||fc;p!==fc&&typeof h[0]!="number"&&(this.mixKeyframes=Cc(Pk,vb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=kp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:C,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let A=this.currentTime,E=a;if(x){const X=Math.min(this.currentTime,c)/h;let q=Math.floor(X),se=X%1;!se&&X>=1&&(se=1),se===1&&q--,q=Math.min(q,x+1),!!(q%2)&&(b==="reverse"?(se=1-se,w&&(se-=w/h)):b==="mirror"&&(E=d)),A=qi(0,1,se)*h}let $;N?(this.delayState.value=_[0],$=this.delayState):$=E.next(A),u&&!N&&($.value=u($.value));let{done:W}=$;!N&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return P&&S!==$m&&($.value=Bd(_,this.options,k,this.speed)),C&&C($.value),P&&this.finish(),$}then(n,i){return this.finished.then(n,i)}get duration(){return yi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+yi(n)}get time(){return yi(this.currentTime)}set time(n){n=Zo(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return kb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Ho.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=yi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=Mk,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ho.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function Hk(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const pr=t=>t*180/Math.PI,Im=t=>{const n=pr(Math.atan2(t[1],t[0]));return Pm(n)},Vk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Im,rotateZ:Im,skewX:t=>pr(Math.atan(t[1])),skewY:t=>pr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Pm=t=>(t=t%360,t<0&&(t+=360),t),o1=Im,i1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),a1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Uk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:i1,scaleY:a1,scale:t=>(i1(t)+a1(t))/2,rotateX:t=>Pm(pr(Math.atan2(t[6],t[5]))),rotateY:t=>Pm(pr(Math.atan2(-t[2],t[0]))),rotateZ:o1,rotate:o1,skewX:t=>pr(Math.atan(t[4])),skewY:t=>pr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Hm(t){return t.includes("scale")?1:0}function Vm(t,n){if(!t||t==="none")return Hm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=Uk,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=Vk,c=h}if(!c)return Hm(n);const u=a[n],d=c[1].split(",").map(Yk);return typeof u=="function"?u(d):d[u]}const Wk=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Vm(i,n)};function Yk(t){return parseFloat(t.trim())}const ul=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],dl=new Set(ul),r1=t=>t===cl||t===jt,Fk=new Set(["x","y","z"]),Xk=ul.filter(t=>!Fk.has(t));function qk(t){const n=[];return Xk.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Ya={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Vm(n,"x"),y:(t,{transform:n})=>Vm(n,"y")};Ya.translateX=Ya.x;Ya.translateY=Ya.y;const _r=new Set;let Um=!1,Wm=!1,Ym=!1;function Eb(){if(Wm){const t=Array.from(_r).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=qk(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Wm=!1,Um=!1,_r.forEach(t=>t.complete(Ym)),_r.clear()}function Db(){_r.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Wm=!0)})}function Gk(){Ym=!0,Db(),Eb(),Ym=!1}class jp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(_r.add(this),Um||(Um=!0,ls.read(Db),ls.resolveKeyframes(Eb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}Hk(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),_r.delete(this)}cancel(){this.state==="scheduled"&&(_r.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Kk=t=>t.startsWith("--");function Ab(t,n,i){Kk(n)?t.style.setProperty(n,i):t.style[n]=i}const Qk={};function Nb(t,n){const i=Jx(t);return()=>{var a;return(a=Qk[n])!=null?a:i()}}const Zk=Nb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Rb=Nb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ac=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,l1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ac([0,.65,.55,1]),circOut:ac([.55,0,1,.45]),backIn:ac([.31,.01,.66,-.59]),backOut:ac([.33,1.53,.69,.99])};function Bb(t,n){if(t)return typeof t=="function"?Rb()?wb(t,n):"ease-out":fb(t)?ac(t):Array.isArray(t)?t.map(i=>Bb(i,n)||l1.easeOut):l1[t]}function Jk(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Bb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Mp(t){return typeof t=="function"&&"applyToOptions"in t}function e3({type:t,...n}){var i,a;return Mp(t)&&Rb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Lb extends Cp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,_p(typeof n.type!="string");const g=e3(n);this.animation=Jk(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=Bd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Ab(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return yi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+yi(n)}get time(){return yi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Zo(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&Zk()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),xi):c(this)}}const Ob={anticipate:ab,backInOut:ib,circInOut:lb};function t3(t){return t in Ob}function n3(t){typeof t.ease=="string"&&t3(t.ease)&&(t.ease=Ob[t.ease])}const um=10;class s3 extends Lb{constructor(n){n3(n),Tb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Md({...d,autoplay:!1}),p=Math.max(um,Ho.now()-this.startTime),g=qi(0,um,p-um),_=h.sample(p).value,{name:x}=this.options;u&&x&&Ab(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const c1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Bi.test(t)||t==="0")&&!t.startsWith("url("));function o3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function i3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=c1(c,n),h=c1(u,n);return!d||!h?!1:o3(t)||(i==="spring"||Mp(i))&&a}function Fm(t){t.duration=0,t.type="keyframes"}const zb=new Set(["opacity","clipPath","filter","transform"]),a3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function r3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&a3.test(t[n]))return!0;return!1}const l3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),c3=Jx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function u3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return c3()&&i&&(zb.has(i)||l3.has(i)&&r3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const d3=40;class f3 extends Cp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var C,k;this._animation&&(this._animation.stop(),(C=this.stopTimeline)==null||C.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Ho.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||jp;this.keyframeResolver=new w(h,(C,k,M)=>this.onKeyframesResolved(C,k,b,!M),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,N;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Ho.now();let x=!0;i3(n,u,d,h)||(x=!1,(Fa.instantAnimations||!p)&&(_==null||_(Bd(n,a,i))),n[0]=n[n.length-1],Fm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>d3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&u3(w),C=(N=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:N.current;let k;if(S)try{k=new s3({...w,element:C})}catch{k=new Md(w)}else k=new Md(w);k.finished.then(()=>{this.notifyFinished()}).catch(xi),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),Gk()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class h3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return u1(this.animations,"duration")}get iterationDuration(){return u1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function u1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class m3 extends h3{then(n,i){return this.finished.finally(n).then(()=>{})}}function $b(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const p3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _3(t){const n=p3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Ib(t,n,i=1){const[a,c]=_3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return Kx(d)?parseFloat(d):d}return bp(c)?Ib(c,n,i+1):c}const g3={type:"spring",stiffness:500,damping:25,restSpeed:10},y3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),x3={type:"keyframes",duration:.8},b3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},v3=(t,{keyframes:n})=>n.length>2?x3:dl.has(t)?t.startsWith("scale")?y3(n[1]):g3:b3;function Pb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Tp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Pb(i,t):i}const w3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function S3(t){for(const n in t)if(!w3.has(n))return!0;return!1}const Ep=(t,n,i,a={},c,u)=>d=>{const h=Tp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-Zo(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};S3(h)||Object.assign(_,v3(t,_)),_.duration&&(_.duration=Zo(_.duration)),_.repeatDelay&&(_.repeatDelay=Zo(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Fm(_),_.delay===0&&(x=!0)),(Fa.instantAnimations||Fa.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Fm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=Bd(_.keyframes,h);if(b!==void 0){ls.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Md(_):new f3(_)};function d1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Dp(t,n,i,a){if(typeof n=="function"){const[c,u]=d1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=d1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function gr(t,n,i){const a=t.getProps();return Dp(a,n,i!==void 0?i:a.custom,t)}const Hb=new Set(["width","height","top","left","right","bottom",...ul]),f1=30,k3=t=>!isNaN(parseFloat(t)),hc={current:void 0};class C3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Ho.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Ho.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=k3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new gp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ls.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return hc.current&&hc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Ho.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>f1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,f1);return eb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xa(t,n){return new C3(t,n)}const Xm=t=>Array.isArray(t);function j3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Xa(i))}function M3(t){return Xm(t)?t[t.length-1]||0:t}function T3(t,n){const i=gr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=M3(u[d]);j3(t,d,h)}}const oo=t=>!!(t&&t.getVelocity);function E3(t){return!!(oo(t)&&t.add)}function qm(t,n){const i=t.getValue("willChange");if(E3(i))return i.add(n);if(!i&&Fa.WillChange){const a=new Fa.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Ap(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const D3="framerAppearId",Vb="data-"+Ap(D3);function Ub(t){return t.props[Vb]}function A3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Np(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Pb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),C=h[w];if(C===void 0||x&&A3(x,w))continue;const k={delay:i,...Tp(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(C)&&C===M&&!k.velocity){ls.update(()=>S.set(C));continue}let N=!1;if(window.MotionHandoffAnimation){const $=Ub(t);if($){const W=window.MotionHandoffAnimation($,w,ls);W!==null&&(k.startTime=W,N=!0)}}qm(t,w);const A=g!=null?g:t.shouldReduceMotion;S.start(Ep(w,S,C,A&&Hb.has(w)?{type:!1}:k,t,N));const E=S.animation;E&&_.push(E)}if(d){const w=()=>ls.update(()=>{d&&T3(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Gm(t,n,i={}){var p;const a=gr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Np(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return N3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function N3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Gm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+$b(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function R3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Gm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Gm(t,n,i);else{const c=typeof n=="function"?gr(t,n,i.custom):n;a=Promise.all(Np(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const B3={test:t=>t==="auto",parse:t=>t},Wb=t=>n=>n.test(t),Yb=[cl,jt,Xi,Va,lk,rk,B3],h1=t=>Yb.find(Wb(t));function L3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Zx(t):!0}const O3=new Set(["brightness","contrast","saturate","opacity"]);function z3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(vp)||[];if(!a)return t;const c=i.replace(a,"");let u=O3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const $3=/\b([a-z-]*)\(.*?\)/gu,Km={...Bi,getAnimatableNone:t=>{const n=t.match($3);return n?n.map(z3).join(" "):t}},Qm={...Bi,getAnimatableNone:t=>{const n=Bi.parse(t);return Bi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},m1={...cl,transform:Math.round},I3={rotate:Va,rotateX:Va,rotateY:Va,rotateZ:Va,scale:nd,scaleX:nd,scaleY:nd,scaleZ:nd,skew:Va,skewX:Va,skewY:Va,distance:jt,translateX:jt,translateY:jt,translateZ:jt,x:jt,y:jt,z:jt,perspective:jt,transformPerspective:jt,opacity:gc,originX:Jy,originY:Jy,originZ:jt},Rp={borderWidth:jt,borderTopWidth:jt,borderRightWidth:jt,borderBottomWidth:jt,borderLeftWidth:jt,borderRadius:jt,borderTopLeftRadius:jt,borderTopRightRadius:jt,borderBottomRightRadius:jt,borderBottomLeftRadius:jt,width:jt,maxWidth:jt,height:jt,maxHeight:jt,top:jt,right:jt,bottom:jt,left:jt,inset:jt,insetBlock:jt,insetBlockStart:jt,insetBlockEnd:jt,insetInline:jt,insetInlineStart:jt,insetInlineEnd:jt,padding:jt,paddingTop:jt,paddingRight:jt,paddingBottom:jt,paddingLeft:jt,paddingBlock:jt,paddingBlockStart:jt,paddingBlockEnd:jt,paddingInline:jt,paddingInlineStart:jt,paddingInlineEnd:jt,margin:jt,marginTop:jt,marginRight:jt,marginBottom:jt,marginLeft:jt,marginBlock:jt,marginBlockStart:jt,marginBlockEnd:jt,marginInline:jt,marginInlineStart:jt,marginInlineEnd:jt,fontSize:jt,backgroundPositionX:jt,backgroundPositionY:jt,...I3,zIndex:m1,fillOpacity:gc,strokeOpacity:gc,numOctaves:m1},P3={...Rp,color:Js,backgroundColor:Js,outlineColor:Js,fill:Js,stroke:Js,borderColor:Js,borderTopColor:Js,borderRightColor:Js,borderBottomColor:Js,borderLeftColor:Js,filter:Km,WebkitFilter:Km,mask:Qm,WebkitMask:Qm},Fb=t=>P3[t],H3=new Set([Km,Qm]);function Xb(t,n){let i=Fb(t);return H3.has(i)||(i=Bi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const V3=new Set(["auto","none","0"]);function U3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!V3.has(u)&&ll(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Xb(i,c)}class W3 extends jp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),bp(x))){const b=Ib(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Hb.has(a)||n.length!==2)return;const[c,u]=n,d=h1(c),h=h1(u),p=Zy(c),g=Zy(u);if(p!==g&&Ya[a]){this.needsMeasurement=!0;return}if(d!==h)if(r1(d)&&r1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Ya[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||L3(n[c]))&&a.push(c);a.length&&U3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ya[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Ya[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function Bp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const qb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function dd(t){return Qx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Lp}=hb(queueMicrotask,!1),Ni={x:!1,y:!1};function Gb(){return Ni.x||Ni.y}function Y3(t){return t==="x"||t==="y"?Ni[t]?null:(Ni[t]=!0,()=>{Ni[t]=!1}):Ni.x||Ni.y?null:(Ni.x=Ni.y=!0,()=>{Ni.x=Ni.y=!1})}function Kb(t,n){const i=Bp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function F3(t){return!(t.pointerType==="touch"||Gb())}function X3(t,n,i={}){const[a,c,u]=Kb(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},C=k=>{if(!F3(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",C,c),d.addEventListener("pointerdown",w,c)}),u}const Qb=(t,n)=>n?t===n?!0:Qb(t,n.parentElement):!1,Op=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,q3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function G3(t){return q3.has(t.tagName)||t.isContentEditable===!0}const K3=new Set(["INPUT","SELECT","TEXTAREA"]);function Q3(t){return K3.has(t.tagName)||t.isContentEditable===!0}const fd=new WeakSet;function p1(t){return n=>{n.key==="Enter"&&t(n)}}function dm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Z3=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=p1(()=>{if(fd.has(i))return;dm(i,"down");const c=p1(()=>{dm(i,"up")}),u=()=>dm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function _1(t){return Op(t)&&!Gb()}const g1=new WeakSet;function J3(t,n,i={}){const[a,c,u]=Kb(t,i),d=h=>{const p=h.currentTarget;if(!_1(h)||g1.has(h))return;fd.add(p),i.stopPropagation&&g1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),fd.has(p)&&fd.delete(p),_1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||Qb(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),dd(h)&&(h.addEventListener("focus",g=>Z3(g,c)),!G3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Ld(t){return Qx(t)&&"ownerSVGElement"in t}const hd=new WeakMap;let Ua;const Zb=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Ld(a)&&"getBBox"in a?a.getBBox()[n]:a[i],eC=Zb("inline","width","offsetWidth"),tC=Zb("block","height","offsetHeight");function nC({target:t,borderBoxSize:n}){var i;(i=hd.get(t))==null||i.forEach(a=>{a(t,{get width(){return eC(t,n)},get height(){return tC(t,n)}})})}function sC(t){t.forEach(nC)}function oC(){typeof ResizeObserver>"u"||(Ua=new ResizeObserver(sC))}function iC(t,n){Ua||oC();const i=Bp(t);return i.forEach(a=>{let c=hd.get(a);c||(c=new Set,hd.set(a,c)),c.add(n),Ua==null||Ua.observe(a)}),()=>{i.forEach(a=>{const c=hd.get(a);c==null||c.delete(n),c!=null&&c.size||Ua==null||Ua.unobserve(a)})}}const md=new Set;let nl;function aC(){nl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};md.forEach(n=>n(t))},window.addEventListener("resize",nl)}function rC(t){return md.add(t),nl||aC(),()=>{md.delete(t),!md.size&&typeof nl=="function"&&(window.removeEventListener("resize",nl),nl=void 0)}}function y1(t,n){return typeof t=="function"?rC(t):iC(t,n)}function Jb(t){return Ld(t)&&t.tagName==="svg"}function lC(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Cb(c,u,d);return n?h(a):h}const cC=[...Yb,Js,Bi],uC=t=>cC.find(Wb(t)),x1=()=>({translate:0,scale:1,origin:0,originPoint:0}),sl=()=>({x:x1(),y:x1()}),b1=()=>({min:0,max:0}),Zs=()=>({x:b1(),y:b1()}),xc=new WeakMap;function Od(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function bc(t){return typeof t=="string"||Array.isArray(t)}const zp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$p=["initial",...zp];function zd(t){return Od(t.animate)||$p.some(n=>bc(t[n]))}function e5(t){return!!(zd(t)||t.variants)}function dC(t,n,i){for(const a in n){const c=n[a],u=i[a];if(oo(c))t.addValue(a,c);else if(oo(u))t.addValue(a,Xa(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Xa(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Zm={current:null},t5={current:!1},fC=typeof window<"u";function hC(){if(t5.current=!0,!!fC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Zm.current=t.matches;t.addEventListener("change",n),n()}else Zm.current=!1}const v1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Td={};function n5(t){Td=t}function mC(){return Td}class s5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Ho.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ls.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=zd(i),this.isVariantNode=e5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&oo(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,xc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(t5.current||hC(),this.shouldReduceMotion=Zm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),pa(this.notifyUpdate),pa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&zb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Lb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:Zo(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=dl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ls.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Td){const i=Td[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Zs()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<v1.length;a++){const c=v1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=dC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Xa(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(Kx(a)||Zx(a))?a=parseFloat(a):!uC(a)&&Bi.test(i)&&(a=Xb(n,i)),this.setBaseTarget(n,oo(a)?a.get():a)),oo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Dp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!oo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new gp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Lp.render(this.render)}}class o5 extends s5{constructor(){super(...arguments),this.KeyframeResolver=W3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;oo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class qa{constructor(n){this.isMounted=!1,this.node=n}update(){}}function i5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function pC({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function _C(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function fm(t){return t===void 0||t===1}function Jm({scale:t,scaleX:n,scaleY:i}){return!fm(t)||!fm(n)||!fm(i)}function fr(t){return Jm(t)||a5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function a5(t){return w1(t.x)||w1(t.y)}function w1(t){return t&&t!=="0%"}function Ed(t,n,i){const a=t-i,c=n*a;return i+c}function S1(t,n,i,a,c){return c!==void 0&&(t=Ed(t,c,a)),Ed(t,i,a)+n}function ep(t,n=0,i=1,a,c){t.min=S1(t.min,n,i,a,c),t.max=S1(t.max,n,i,a,c)}function r5(t,{x:n,y:i}){ep(t.x,n.translate,n.scale,n.originPoint),ep(t.y,i.translate,i.scale,i.originPoint)}const k1=.999999999999,C1=1.0000000000001;function gC(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Fi(t.x,-u.scroll.offset.x),Fi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,r5(t,d)),a&&fr(u.latestValues)&&pd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<C1&&n.x>k1&&(n.x=1),n.y<C1&&n.y>k1&&(n.y=1)}function Fi(t,n){t.min+=n,t.max+=n}function j1(t,n,i,a,c=.5){const u=_s(t.min,t.max,c);ep(t,n,i,u,a)}function M1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function pd(t,n,i){const a=i!=null?i:t;j1(t.x,M1(n.x,a.x),n.scaleX,n.scale,n.originX),j1(t.y,M1(n.y,a.y),n.scaleY,n.scale,n.originY)}function l5(t,n){return i5(_C(t.getBoundingClientRect(),n))}function yC(t,n,i){const a=l5(t,i),{scroll:c}=n;return c&&(Fi(a.x,c.offset.x),Fi(a.y,c.offset.y)),a}const xC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bC=ul.length;function vC(t,n,i){let a="",c=!0;for(let u=0;u<bC;u++){const d=ul[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=qb(h,Rp[d]);if(!p){c=!1;const _=xC[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Ip(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(dl.has(p)){d=!0;continue}else if(pb(p)){c[p]=g;continue}else{const _=qb(g,Rp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=vC(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function c5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function T1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const sc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(jt.test(t))t=parseFloat(t);else return t;const i=T1(t,n.target.x),a=T1(t,n.target.y);return`${i}% ${a}%`}},wC={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Bi.parse(t);if(c.length>5)return a;const u=Bi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=_s(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},tp={borderRadius:{...sc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:sc,borderTopRightRadius:sc,borderBottomLeftRadius:sc,borderBottomRightRadius:sc,boxShadow:wC};function u5(t,{layout:n,layoutId:i}){return dl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!tp[t]||t==="opacity")}function Pp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(oo(a[h])||c&&oo(c[h])||u5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function SC(t){return window.getComputedStyle(t)}class d5 extends o5{constructor(){super(...arguments),this.type="html",this.renderInstance=c5}readValueFromInstance(n,i){var a;if(dl.has(i))return(a=this.projection)!=null&&a.isProjecting?Hm(i):Wk(n,i);{const c=SC(n),u=(pb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return l5(n,i)}build(n,i,a){Ip(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Pp(n,i,a)}}function kC(t,n){return t in n}class CC extends s5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(kC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return Zs()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const jC={offset:"stroke-dashoffset",array:"stroke-dasharray"},MC={offset:"strokeDashoffset",array:"strokeDasharray"};function TC(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?jC:MC;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const EC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function f5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Ip(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const C of EC)x[C]!==void 0&&(b[C]=x[C],delete x[C]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&TC(x,c,u,d,!1)}const h5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),m5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function DC(t,n,i,a){c5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(h5.has(c)?c:Ap(c),n.attrs[c])}function p5(t,n,i){const a=Pp(t,n,i);for(const c in t)if(oo(t[c])||oo(n[c])){const u=ul.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class _5 extends o5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Zs}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(dl.has(i)){const a=Fb(i);return a&&a.default||0}return i=h5.has(i)?i:Ap(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return p5(n,i,a)}build(n,i,a){f5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){DC(n,i,a,c)}mount(n){this.isSVGTag=m5(n.tagName),super.mount(n)}}const AC=$p.length;function g5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?g5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<AC;i++){const a=$p[i],c=t.props[a];(bc(c)||c===!1)&&(n[a]=c)}return n}function y5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const NC=[...zp].reverse(),RC=zp.length;function BC(t){return n=>Promise.all(n.map(({animation:i,options:a})=>R3(t,i,a)))}function LC(t){let n=BC(t),i=E1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=gr(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:C,...k}=b;_={..._,...k,...C}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=g5(t.parent)||{},b=[],w=new Set;let S={},C=1/0;for(let M=0;M<RC;M++){const N=NC[M],A=i[N],E=_[N]!==void 0?_[N]:x[N],$=bc(E),W=N===g?A.isActive:null;W===!1&&(C=M);let P=E===x[N]&&E!==_[N]&&$;if(P&&(a||c)&&t.manuallyAnimateOnMount&&(P=!1),A.protectedKeys={...S},!A.isActive&&W===null||!E&&!A.prevProp||Od(E)||typeof E=="boolean")continue;if(N==="exit"&&A.isActive&&W!==!0){A.prevResolvedValues&&(S={...S,...A.prevResolvedValues});continue}const X=OC(A.prevProp,E);let q=X||N===g&&A.isActive&&!P&&$||M>C&&$,se=!1;const ae=Array.isArray(E)?E:[E];let G=ae.reduce(u(N),{});W===!1&&(G={});const{prevResolvedValues:ne={}}=A,ce={...ne,...G},xe=K=>{q=!0,w.has(K)&&(se=!0,w.delete(K)),A.needsAnimating[K]=!0;const we=t.getValue(K);we&&(we.liveStyle=!1)};for(const K in ce){const we=G[K],Te=ne[K];if(S.hasOwnProperty(K))continue;let B=!1;Xm(we)&&Xm(Te)?B=!y5(we,Te):B=we!==Te,B?we!=null?xe(K):w.add(K):we!==void 0&&w.has(K)?xe(K):A.protectedKeys[K]=!0}A.prevProp=E,A.prevResolvedValues=G,A.isActive&&(S={...S,...G}),(a||c)&&t.blockInitialAnimation&&(q=!1);const z=P&&X;q&&(!z||se)&&b.push(...ae.map(K=>{const we={type:N};if(typeof K=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Te}=t,B=gr(Te,K);if(Te.enteringChildren&&B){const{delayChildren:H}=B.transition||{};we.delay=$b(Te.enteringChildren,t,H)}}return{animation:K,options:we}}))}if(w.size){const M={};if(typeof _.initial!="boolean"){const N=gr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);N&&N.transition&&(M.transition=N.transition)}w.forEach(N=>{const A=t.getBaseTarget(N),E=t.getValue(N);E&&(E.liveStyle=!0),M[N]=A!=null?A:null}),b.push({animation:M})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=E1(),c=!0}}}function OC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!y5(n,t):!1}function dr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function E1(){return{animate:dr(!0),whileInView:dr(),whileHover:dr(),whileTap:dr(),whileDrag:dr(),whileFocus:dr(),exit:dr()}}function np(t,n){t.min=n.min,t.max=n.max}function Ai(t,n){np(t.x,n.x),np(t.y,n.y)}function D1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const x5=1e-4,zC=1-x5,$C=1+x5,b5=.01,IC=0-b5,PC=0+b5;function Vo(t){return t.max-t.min}function HC(t,n,i){return Math.abs(t-n)<=i}function A1(t,n,i,a=.5){t.origin=a,t.originPoint=_s(n.min,n.max,t.origin),t.scale=Vo(i)/Vo(n),t.translate=_s(i.min,i.max,t.origin)-t.originPoint,(t.scale>=zC&&t.scale<=$C||isNaN(t.scale))&&(t.scale=1),(t.translate>=IC&&t.translate<=PC||isNaN(t.translate))&&(t.translate=0)}function mc(t,n,i,a){A1(t.x,n.x,i.x,a?a.originX:void 0),A1(t.y,n.y,i.y,a?a.originY:void 0)}function N1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Vo(n)}function VC(t,n,i,a){N1(t.x,n.x,i.x,a==null?void 0:a.x),N1(t.y,n.y,i.y,a==null?void 0:a.y)}function R1(t,n,i,a=0){const c=a?_s(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Vo(n)}function Dd(t,n,i,a){R1(t.x,n.x,i.x,a==null?void 0:a.x),R1(t.y,n.y,i.y,a==null?void 0:a.y)}function B1(t,n,i,a,c){return t-=n,t=Ed(t,1/i,a),c!==void 0&&(t=Ed(t,1/c,a)),t}function UC(t,n=0,i=1,a=.5,c,u=t,d=t){if(Xi.test(n)&&(n=parseFloat(n),n=_s(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=_s(u.min,u.max,a);t===u&&(h-=n),t.min=B1(t.min,n,i,h,c),t.max=B1(t.max,n,i,h,c)}function L1(t,n,[i,a,c],u,d){UC(t,n[i],n[a],n[c],n.scale,u,d)}const WC=["x","scaleX","originX"],YC=["y","scaleY","originY"];function O1(t,n,i,a){L1(t.x,n,WC,i?i.x:void 0,a?a.x:void 0),L1(t.y,n,YC,i?i.y:void 0,a?a.y:void 0)}function z1(t){return t.translate===0&&t.scale===1}function v5(t){return z1(t.x)&&z1(t.y)}function $1(t,n){return t.min===n.min&&t.max===n.max}function FC(t,n){return $1(t.x,n.x)&&$1(t.y,n.y)}function I1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function w5(t,n){return I1(t.x,n.x)&&I1(t.y,n.y)}function P1(t){return Vo(t.x)/Vo(t.y)}function H1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Yi(t){return[t("x"),t("y")]}function XC(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const S5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],qC=S5.length,V1=t=>typeof t=="string"?parseFloat(t):t,U1=t=>typeof t=="number"||jt.test(t);function GC(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=_s(0,(d=i.opacity)!=null?d:1,KC(a)),t.opacityExit=_s((h=n.opacity)!=null?h:1,0,QC(a))):u&&(t.opacity=_s((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<qC;_++){const x=S5[_];let b=W1(n,x),w=W1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||U1(b)===U1(w)?(t[x]=Math.max(_s(V1(b),V1(w),a),0),(Xi.test(w)||Xi.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=_s(n.rotate||0,i.rotate||0,a))}function W1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const KC=k5(0,.5,rb),QC=k5(.5,.95,xi);function k5(t,n,i){return a=>a<t?0:a>n?1:i(rl(t,n,a))}function C5(t,n,i){const a=oo(t)?t:Xa(t);return a.start(Ep("",a,n,i)),a.animation}function vc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const ZC=(t,n)=>t.depth-n.depth;class JC{constructor(){this.children=[],this.isDirty=!1}add(n){pp(this.children,n),this.isDirty=!0}remove(n){al(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(ZC),this.isDirty=!1,this.children.forEach(n)}}function ej(t,n){const i=Ho.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(pa(a),t(u-n))};return ls.setup(a,!0),()=>pa(a)}function _d(t){return oo(t)?t.get():t}class tj{constructor(){this.members=[]}add(n){pp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(al(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(al(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const gd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},hm=["","X","Y","Z"],nj=1e3;let sj=0;function mm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function j5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Ub(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ls,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&j5(a)}function M5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=sj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aj),this.nodes.forEach(fj),this.nodes.forEach(hj),this.nodes.forEach(rj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new JC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new gp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Ld(d)&&!Jb(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;ls.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=ej(b,250),gd.hasAnimatedSinceResize&&(gd.hasAnimatedSinceResize=!1,this.nodes.forEach(X1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||yj,{onLayoutAnimationStart:C,onLayoutAnimationComplete:k}=g.getProps(),M=!this.targetLayout||!w5(this.targetLayout,w),N=!x&&b;if(this.options.layoutRoot||this.resumeFrom||N||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...Tp(S,"layout"),onPlay:C,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(_,N)}else x||X1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),pa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&j5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(cj),this.nodes.forEach(Y1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(F1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(uj),this.nodes.forEach(dj),this.nodes.forEach(oj),this.nodes.forEach(ij)):this.nodes.forEach(F1),this.clearAllSnapshots();const h=Ho.now();vo.delta=qi(0,1e3/60,h-vo.timestamp),vo.timestamp=h,vo.isProcessing=!0,im.update.process(vo),im.preRender.process(vo),im.render.process(vo),vo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(lj),this.sharedNodes.forEach(pj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ls.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ls.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vo(this.snapshot.measuredBox.x)&&!Vo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Zs()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!v5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||fr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),xj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return Zs();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(bj))){const{scroll:_}=this.root;_&&(Fi(h.x,_.offset.x),Fi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=Zs();if(Ai(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ai(h,d),Fi(h.x,x.offset.x),Fi(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||Zs();Ai(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Fi(g.x,-w.scroll.offset.x),Fi(g.y,-w.scroll.offset.y)),fr(w.latestValues)&&pd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return fr(this.latestValues)&&pd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=Zs();Ai(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!fr(_.latestValues))continue;let x;_.instance&&(Jm(_.latestValues)&&_.updateSnapshot(),x=Zs(),Ai(x,_.measurePageBox())),O1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return fr(this.latestValues)&&O1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=vo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Zs(),this.targetWithTransforms=Zs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ai(this.target,this.layout.layoutBox),r5(this.target,this.targetDelta)):Ai(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Jm(this.parent.latestValues)||a5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zs(),this.relativeTargetOrigin=Zs(),Dd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Ai(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===vo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Ai(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;gC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Zs());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(D1(this.prevProjectionDelta.x,this.projectionDelta.x),D1(this.prevProjectionDelta.y,this.projectionDelta.y)),mc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!H1(this.projectionDelta.x,this.prevProjectionDelta.x)||!H1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=sl(),this.projectionDelta=sl(),this.projectionDeltaWithTransform=sl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=sl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=Zs(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,C=w!==S,k=this.getStack(),M=!k||k.members.length<=1,N=!!(C&&!M&&this.options.crossfade===!0&&!this.path.some(gj));this.animationProgress=0;let A;this.mixTargetDelta=E=>{const $=E/1e3;q1(x.x,d.x,$),q1(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),_j(this.relativeTarget,this.relativeTargetOrigin,b,$),A&&FC(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=Zs()),Ai(A,this.relativeTarget)),C&&(this.animationValues=_,GC(_,g,this.latestValues,$,N,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(pa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ls.update(()=>{gd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Xa(0)),this.motionValue.jump(0,!1),this.currentAnimation=C5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&T5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Zs();const x=Vo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Vo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Ai(h,p),pd(h,_),mc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new tj),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&mm("z",d,g,this.animationValues);for(let _=0;_<hm.length;_++)mm(`rotate${hm[_]}`,d,g,this.animationValues),mm(`skew${hm[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,C;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=_d(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=_d(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!fr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=XC(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(C=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?C:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in tp){if(_[k]===void 0)continue;const{correct:M,applyTo:N,isCSSVariable:A}=tp[k],E=x==="none"?_[k]:M(_[k],g);if(N){const $=N.length;for(let W=0;W<$;W++)d[N[W]]=E}else A?this.options.visualElement.renderState.vars[k]=E:d[k]=E}this.options.layoutId&&(d.pointerEvents=g===this?_d(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Y1),this.root.sharedNodes.clear()}}}function oj(t){t.updateLayout()}function ij(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Yi(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Vo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";np(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else T5(u,n.layoutBox,a)&&Yi(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Vo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=sl();mc(h,a,n.layoutBox);const p=sl();d?mc(p,t.applyTransform(c,!0),n.measuredBox):mc(p,a,n.layoutBox);const g=!v5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,C=Zs();Dd(C,n.layoutBox,b.layoutBox,S);const k=Zs();Dd(k,a,w.layoutBox,S),w5(C,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=C,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function aj(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function rj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function lj(t){t.clearSnapshot()}function Y1(t){t.clearMeasurements()}function cj(t){t.isLayoutDirty=!0,t.updateLayout()}function F1(t){t.isLayoutDirty=!1}function uj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function dj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function X1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function fj(t){t.resolveTargetDelta()}function hj(t){t.calcProjection()}function mj(t){t.resetSkewAndRotation()}function pj(t){t.removeLeadSnapshot()}function q1(t,n,i){t.translate=_s(n.translate,0,i),t.scale=_s(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function G1(t,n,i,a){t.min=_s(n.min,i.min,a),t.max=_s(n.max,i.max,a)}function _j(t,n,i,a){G1(t.x,n.x,i.x,a),G1(t.y,n.y,i.y,a)}function gj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yj={duration:.45,ease:[.4,0,.1,1]},K1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Q1=K1("applewebkit/")&&!K1("chrome/")?Math.round:xi;function Z1(t){t.min=Q1(t.min),t.max=Q1(t.max)}function xj(t){Z1(t.x),Z1(t.y)}function T5(t,n,i){return t==="position"||t==="preserve-aspect"&&!HC(P1(n),P1(i),.2)}function bj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const vj=M5({attachResizeListener:(t,n)=>vc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),pm={current:void 0},E5=M5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!pm.current){const t=new vj({});t.mount(window),t.setOptions({layoutScroll:!0}),pm.current=t}return pm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),$d=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function J1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function wj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=J1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():J1(t[c],null)}}}}function Sj(...t){return y.useCallback(wj(...t),t)}class kj extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(dd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=dd(a)&&a.offsetWidth||0,u=dd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Cj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext($d),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=Sj(h,_);return y.useInsertionEffect(()=>{const{width:S,height:C,top:k,left:M,right:N,bottom:A}=p.current;if(n||u===!1||!h.current||!S||!C)return;const E=i==="left"?`left: ${M}`:`right: ${N}`,$=a==="bottom"?`bottom: ${A}`:`top: ${k}`;h.current.dataset.motionPopId=d;const W=document.createElement("style");g&&(W.nonce=g);const P=c!=null?c:document.head;return P.appendChild(W),W.sheet&&W.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${C}px !important;
            ${E}px !important;
            ${$}px !important;
          }
        `),()=>{var X;(X=h.current)==null||X.removeAttribute("data-motion-pop-id"),P.contains(W)&&P.removeChild(W)}},[n]),r.jsx(kj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const jj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=kc(Mj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const C of _.values())if(!C)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,C)=>_.set(C,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=r.jsx(Cj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),r.jsx(Rd.Provider,{value:w,children:t})};function Mj(){return new Map}function D5(t=!0){const n=y.useContext(Rd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const sd=t=>t.key||"";function ex(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Id=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=D5(d),b=y.useMemo(()=>ex(t),[t]),w=d&&!_?[]:b.map(sd),S=y.useRef(!0),C=y.useRef(b),k=kc(()=>new Map),M=y.useRef(new Set),[N,A]=y.useState(b),[E,$]=y.useState(b);mp(()=>{S.current=!1,C.current=b;for(let X=0;X<E.length;X++){const q=sd(E[X]);w.includes(q)?(k.delete(q),M.current.delete(q)):k.get(q)!==!0&&k.set(q,!1)}},[E,w.length,w.join("-")]);const W=[];if(b!==N){let X=[...b];for(let q=0;q<E.length;q++){const se=E[q],ae=sd(se);w.includes(ae)||(X.splice(q,0,se),W.push(se))}return u==="wait"&&W.length&&(X=W),$(ex(X)),A(b),null}const{forceRender:P}=y.useContext(hp);return r.jsx(r.Fragment,{children:E.map(X=>{const q=sd(X),se=d&&!_?!1:b===E||w.includes(q),ae=()=>{if(M.current.has(q))return;if(k.has(q))M.current.add(q),k.set(q,!0);else return;let G=!0;k.forEach(ne=>{ne||(G=!1)}),G&&(P==null||P(),$(C.current),d&&(x==null||x()),a&&a())};return r.jsx(jj,{isPresent:se,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:se?void 0:ae,anchorX:h,anchorY:p,children:X},q)})})},A5=y.createContext({strict:!1}),tx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let nx=!1;function Tj(){if(nx)return;const t={};for(const n in tx)t[n]={isEnabled:i=>tx[n].some(a=>!!i[a])};n5(t),nx=!0}function N5(){return Tj(),mC()}function Ej(t){const n=N5();for(const i in t)n[i]={...n[i],...t[i]};n5(n)}const Dj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ad(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Dj.has(t)}let R5=t=>!Ad(t);function Aj(t){typeof t=="function"&&(R5=n=>n.startsWith("on")?!Ad(n):t(n))}try{Aj(require("@emotion/is-prop-valid").default)}catch{}function Nj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||oo(t[c])||(R5(c)||i===!0&&Ad(c)||!n&&!Ad(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Pd=y.createContext({});function Rj(t,n){if(zd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||bc(i)?i:void 0,animate:bc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Bj(t){const{initial:n,animate:i}=Rj(t,y.useContext(Pd));return y.useMemo(()=>({initial:n,animate:i}),[sx(n),sx(i)])}function sx(t){return Array.isArray(t)?t.join(" "):t}const Hp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function B5(t,n,i){for(const a in n)!oo(n[a])&&!u5(a,i)&&(t[a]=n[a])}function Lj({transformTemplate:t},n){return y.useMemo(()=>{const i=Hp();return Ip(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Oj(t,n){const i=t.style||{},a={};return B5(a,i,t),Object.assign(a,Lj(t,n)),a}function zj(t,n){const i={},a=Oj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const L5=()=>({...Hp(),attrs:{}});function $j(t,n,i,a){const c=y.useMemo(()=>{const u=L5();return f5(u,n,m5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};B5(u,t.style,t),c.style={...u,...c.style}}return c}const Ij=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vp(t){return typeof t!="string"||t.includes("-")?!1:!!(Ij.indexOf(t)>-1||/[A-Z]/u.test(t))}function Pj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Vp(t))?$j:zj)(n,a,c,t),g=Nj(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>oo(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function Hj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Vj(i,a,c,t),renderState:n()}}function Vj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=_d(u[b]);let{initial:d,animate:h}=t;const p=zd(t),g=e5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Od(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Dp(t,b[w]);if(S){const{transitionEnd:C,transition:k,...M}=S;for(const N in M){let A=M[N];if(Array.isArray(A)){const E=_?A.length-1:0;A=A[E]}A!==null&&(c[N]=A)}for(const N in C)c[N]=C[N]}}}return c}const O5=t=>(n,i)=>{const a=y.useContext(Pd),c=y.useContext(Rd),u=()=>Hj(t,n,a,c);return i?u():kc(u)},Uj=O5({scrapeMotionValuesFromProps:Pp,createRenderState:Hp}),Wj=O5({scrapeMotionValuesFromProps:p5,createRenderState:L5}),Yj=Symbol.for("motionComponentSymbol");function Fj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const z5=y.createContext({});function Zr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Xj(t,n,i,a,c,u){var A,E;const{visualElement:d}=y.useContext(Pd),h=y.useContext(A5),p=y.useContext(Rd),g=y.useContext($d),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,C=y.useContext(z5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&qj(b.current,i,c,C);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[Vb],N=y.useRef(!!M&&typeof window<"u"&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,M))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,M)));return mp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),N.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!N.current&&S.animationState&&S.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,M)}),N.current=!1),S.enteringChildren=void 0)}),S}function qj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:$5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&Zr(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function $5(t){if(t)return t.options.allowProjection!==!1?t.projection:$5(t.parent)}function _m(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&Ej(a);const u=i?i==="svg":Vp(t),d=u?Wj:Uj;function h(x,b){let w;const S={...y.useContext($d),...x,layoutId:Gj(x)},{isStatic:C}=S,k=Bj(x),M=d(x,C);if(!C&&typeof window<"u"){Kj();const N=Qj(S);w=N.MeasureLayout,k.visualElement=Xj(t,M,S,c,N.ProjectionNode,u)}return r.jsxs(Pd.Provider,{value:k,children:[w&&k.visualElement?r.jsx(w,{visualElement:k.visualElement,...S}):null,Pj(t,x,Fj(M,k.visualElement,b),M,C,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[Yj]=t,p}function Gj({layoutId:t}){const n=y.useContext(hp).id;return n&&t!==void 0?n+"-"+t:t}function Kj(t,n){y.useContext(A5).strict}function Qj(t){const n=N5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Zj(t,n){if(typeof Proxy>"u")return _m;const i=new Map,a=(u,d)=>_m(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,_m(d,void 0,t,n)),i.get(d))})}const Jj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Vp(t))?new _5(n):new d5(n,{allowProjection:t!==y.Fragment})};class e8 extends qa{constructor(n){super(n),n.animationState||(n.animationState=LC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Od(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let t8=0;class n8 extends qa{constructor(){super(...arguments),this.id=t8++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=gr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const s8={animation:{Feature:e8},exit:{Feature:n8}};function Tc(t){return{point:{x:t.pageX,y:t.pageY}}}const o8=t=>n=>Op(n)&&t(n,Tc(n));function pc(t,n,i,a){return vc(t,n,o8(i),a)}const I5=({current:t})=>t?t.ownerDocument.defaultView:null,ox=(t,n)=>Math.abs(t-n);function i8(t,n){const i=ox(t.x,n.x),a=ox(t.y,n.y);return Math.sqrt(i**2+a**2)}const ix=new Set(["auto","scroll"]);class P5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=od(this.lastRawMoveEventInfo,this.transformPagePoint));const w=gm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,C=i8(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!C)return;const{point:k}=w,{timestamp:M}=vo;this.history.push({...k,timestamp:M});const{onStart:N,onMove:A}=this.handlers;S||(N&&N(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=od(S,this.transformPagePoint),ls.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:C,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=gm(w.type==="pointercancel"?this.lastMoveEventInfo:od(S,this.transformPagePoint),this.history);this.startEvent&&C&&C(w,N),k&&k(w,N)},!Op(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Tc(n),g=od(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=vo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,gm(g,this.history)),this.removeListeners=Cc(pc(this.contextWindow,"pointermove",this.handlePointerMove),pc(this.contextWindow,"pointerup",this.handlePointerUp),pc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(ix.has(a.overflowX)||ix.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ls.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),pa(this.updatePoint)}}function od(t,n){return n?{point:n(t.point)}:t}function ax(t,n){return{x:t.x-n.x,y:t.y-n.y}}function gm({point:t},n){return{point:t,delta:ax(t,H5(n)),offset:ax(t,a8(n)),velocity:r8(n,.1)}}function a8(t){return t[0]}function H5(t){return t[t.length-1]}function r8(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=H5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>Zo(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>Zo(n)*2&&(a=t[1]);const u=yi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function l8(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?_s(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?_s(i,t,a.max):Math.min(t,i)),t}function rx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function c8(t,{top:n,left:i,bottom:a,right:c}){return{x:rx(t.x,i,c),y:rx(t.y,n,a)}}function lx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function u8(t,n){return{x:lx(t.x,n.x),y:lx(t.y,n.y)}}function d8(t,n){let i=.5;const a=Vo(t),c=Vo(n);return c>a?i=rl(n.min,n.max-a,t.min):a>c&&(i=rl(t.min,t.max-c,n.min)),qi(0,1,i)}function f8(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const sp=.35;function h8(t=sp){return t===!1?t=0:t===!0&&(t=sp),{x:cx(t,"left","right"),y:cx(t,"top","bottom")}}function cx(t,n,i){return{min:ux(t,n),max:ux(t,i)}}function ux(t,n){return typeof t=="number"?t:t[n]||0}const m8=new WeakMap;class p8{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Zs(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Tc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:C}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Y3(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yi(M=>{let N=this.getAxisMotionValue(M).get()||0;if(Xi.test(N)){const{projection:A}=this.visualElement;if(A&&A.layout){const E=A.layout.layoutBox[M];E&&(N=Vo(E)*(parseFloat(N)/100))}}this.originPoint[M]=N}),C&&ls.update(()=>C(x,b),!1,!0),qm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:C,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=g8(M),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&ls.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new P5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:I5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ls.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!id(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=l8(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&Zr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=c8(a.layoutBox,n):this.constraints=!1,this.elastic=h8(i),c!==this.constraints&&!Zr(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Yi(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=f8(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!Zr(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=yC(a,c.root,this.visualElement.getTransformPagePoint());let d=u8(c.layout.layoutBox,u);if(i){const h=i(pC(d));this.hasMutatedConstraints=!!h,h&&(d=i5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Yi(_=>{if(!id(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return qm(this.visualElement,n),a.start(Ep(n,a,0,i,this.visualElement,!1))}stopAnimation(){Yi(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Yi(i=>{const{drag:a}=this.getProps();if(!id(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-_s(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Zr(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Yi(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=d8({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Yi(d=>{if(!id(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(_s(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;m8.set(this.visualElement,this);const n=this.visualElement.current,i=pc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&Q3(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();Zr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=_8(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ls.read(c);const h=vc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Yi(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=sp,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function dx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function _8(t,n,i){const a=y1(t,dx(i)),c=y1(n,dx(i));return()=>{a(),c()}}function id(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function g8(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class y8 extends qa{constructor(n){super(n),this.removeGroupControls=xi,this.removeListeners=xi,this.controls=new p8(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ym=t=>(n,i)=>{t&&ls.update(()=>t(n,i),!1,!0)};class x8 extends qa{constructor(){super(...arguments),this.removePointerDownListener=xi}onPointerDown(n){this.session=new P5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:I5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:ym(n),onStart:ym(i),onMove:ym(a),onEnd:(u,d)=>{delete this.session,c&&ls.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=pc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let xm=!1;class b8 extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),xm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),xm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ls.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Lp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;xm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function V5(t){const[n,i]=D5(),a=y.useContext(hp);return r.jsx(b8,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(z5),isPresent:n,safeToRemove:i})}const v8={pan:{Feature:x8},drag:{Feature:y8,ProjectionNode:E5,MeasureLayout:V5}};function fx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ls.postRender(()=>u(n,Tc(n)))}class w8 extends qa{mount(){const{current:n}=this.node;n&&(this.unmount=X3(n,(i,a)=>(fx(this.node,a,"Start"),c=>fx(this.node,c,"End"))))}unmount(){}}class S8 extends qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Cc(vc(this.node.current,"focus",()=>this.onFocus()),vc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ls.postRender(()=>u(n,Tc(n)))}class k8 extends qa{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=J3(n,(c,u)=>(hx(this.node,u,"Start"),(d,{success:h})=>hx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const op=new WeakMap,bm=new WeakMap,C8=t=>{const n=op.get(t.target);n&&n(t)},j8=t=>{t.forEach(C8)};function M8({root:t,...n}){const i=t||document;bm.has(i)||bm.set(i,{});const a=bm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(j8,{root:t,...n})),a[c]}function T8(t,n,i){const a=M8(n);return op.set(t,i),a.observe(t),()=>{op.delete(t),a.unobserve(t)}}const E8={some:0,all:1};class D8 extends qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:E8[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=T8(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(A8(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function A8({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const N8={inView:{Feature:D8},tap:{Feature:k8},focus:{Feature:S8},hover:{Feature:w8}},R8={layout:{ProjectionNode:E5,MeasureLayout:V5}},B8={...s8,...N8,...v8,...R8},Qo=Zj(B8,Jj);function ip(t){const n=kc(()=>Xa(t)),{isStatic:i}=y.useContext($d);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function U5(t,n){const i=ip(n()),a=()=>i.set(n());return a(),mp(()=>{const c=()=>ls.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),pa(a)}}),i}function L8(t){hc.current=[],t();const n=U5(hc.current,t);return hc.current=void 0,n}function ad(t,n,i,a){if(typeof t=="function")return L8(t);const u=typeof n=="function"?n:lC(n,i,a),d=Array.isArray(t)?mx(t,u):mx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function mx(t,n){const i=kc(()=>[]);return U5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Up(t){return typeof t=="object"&&!Array.isArray(t)}function W5(t,n,i,a){return t==null?[]:typeof t=="string"&&Up(n)?Bp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function O8(t,n,i){return t*(n+1)}function px(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function z8(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(al(t,c),a--)}}function $8(t,n,i,a,c,u){z8(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:_s(c,u,a[d]),easing:db(i,d)})}function I8(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function P8(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const H8="easeInOut";function V8(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,px(x,S.at,_,g));continue}let[C,k,M={}]=S;M.at!==void 0&&(x=px(x,M.at,_,g));let N=0;const A=(E,$,W,P=0,X=0)=>{const q=U8(E),{delay:se=0,times:ae=Mb(q),type:G=n.type||"keyframes",repeat:ne,repeatType:ce,repeatDelay:xe=0,...z}=$;let{ease:_e=n.ease||"easeOut",duration:K}=$;const we=typeof se=="function"?se(P,X):se,Te=q.length,B=Mp(G)?G:c==null?void 0:c[G||"keyframes"];if(Te<=2&&B){let Le=100;if(Te===2&&F8(q)){const et=q[1]-q[0];Le=Math.abs(et)}const Ee={...n,...z};K!==void 0&&(Ee.duration=Zo(K));const Be=Sb(Ee,Le,B);_e=Be.ease,K=Be.duration}K!=null||(K=u);const H=x+we;ae.length===1&&ae[0]===0&&(ae[1]=1);const L=ae.length-q.length;if(L>0&&jb(ae,L),q.length===1&&q.unshift(null),ne){K=O8(K,ne);const Le=[...q],Ee=[...ae];_e=Array.isArray(_e)?[..._e]:[_e];const Be=[..._e];for(let et=0;et<ne;et++){q.push(...Le);for(let Ze=0;Ze<Le.length;Ze++)ae.push(Ee[Ze]+(et+1)),_e.push(Ze===0?"linear":db(Be,Ze-1))}I8(ae,ne)}const oe=H+K;$8(W,q,_e,ae,H,oe),N=Math.max(we+K,N),b=Math.max(oe,b)};if(oo(C)){const E=_x(C,h);A(k,M,gx("default",E))}else{const E=W5(C,k,a,p),$=E.length;for(let W=0;W<$;W++){k=k,M=M;const P=E[W],X=_x(P,h);for(const q in k)A(k[q],W8(M,q),gx(q,X),W,$)}}_=x,x+=N}return h.forEach((w,S)=>{for(const C in w){const k=w[C];k.sort(P8);const M=[],N=[],A=[];for(let P=0;P<k.length;P++){const{at:X,value:q,easing:se}=k[P];M.push(q),N.push(rl(0,b,X)),A.push(se||"easeOut")}N[0]!==0&&(N.unshift(0),M.unshift(M[0]),A.unshift(H8)),N[N.length-1]!==1&&(N.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const E=d.get(S);E.keyframes[C]=M;const{type:$,...W}=n;E.transition[C]={...W,duration:b,ease:A,times:N,...i}}}),d}function _x(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function gx(t,n){return n[t]||(n[t]=[]),n[t]}function U8(t){return Array.isArray(t)?t:[t]}function W8(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const Y8=t=>typeof t=="number",F8=t=>t.every(Y8);function X8(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Ld(t)&&!Jb(t)?new _5(n):new d5(n);i.mount(t),xc.set(t,i)}function q8(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new CC(n);i.mount(t),xc.set(t,i)}function G8(t,n){return oo(t)||typeof t=="number"||typeof t=="string"&&!Up(n)}function Y5(t,n,i,a){const c=[];if(G8(t,n))c.push(C5(t,Up(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=W5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?X8:q8;xc.has(p)||g(p);const _=xc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Np(_,{...n,transition:x},{}))}}return c}function K8(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Xa(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return V8(c,n,i,{spring:yc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...Y5(p,d,h))}),a}function Q8(t){return Array.isArray(t)&&t.some(Array.isArray)}function Z8(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(Q8(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=K8(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=Y5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new m3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{al(n.animations,g)})),g}return a}const yx=Z8();var J8=Object.freeze({}),e7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const C=w.slice(0,-7),k=d.get(C);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:J8}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},un=new e7;function t7(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(un.registerPanel(c,t,u.current,p.current),()=>un.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}un.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>un.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>un.subscribe(c,b),()=>un.getValues(c),()=>un.getValues(c));return F5(n,x,"")}function F5(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,C]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(C)&&C.length<=4&&typeof C[0]=="number")a[S]=(c=n[k])!=null?c:C[0];else if(typeof C=="number"||typeof C=="boolean"||typeof C=="string")a[S]=(u=n[k])!=null?u:C;else if(n7(C)||s7(C))a[S]=(d=n[k])!=null?d:C;else if(o7(C))a[S]=(h=n[k])!=null?h:C;else if(i7(C)){const M=(p=C.default)!=null?p:l7(C.options);a[S]=(g=n[k])!=null?g:M}else a7(C)?a[S]=(x=(_=n[k])!=null?_:C.default)!=null?x:"#000000":r7(C)?a[S]=(w=(b=n[k])!=null?b:C.default)!=null?w:"":typeof C=="object"&&C!==null&&(a[S]=F5(C,n,k))}return a}function fl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function n7(t){return fl(t,"spring")}function s7(t){return fl(t,"easing")}function o7(t){return fl(t,"action")}function i7(t){return fl(t,"select")&&"options"in t&&Array.isArray(t.options)}function a7(t){return fl(t,"color")}function r7(t){return fl(t,"text")}function l7(t){const n=t[0];return typeof n=="string"?n:n.value}function ap(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function yd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(ap(n)))}function oc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function ic(t,n,i,a,c){var g,_;const u=un.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));un.updateValue(t,n,yd(p,a))}function c7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function rd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function vm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function X5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=X5(i.children,n);if(a)return a}}return null}var ld=4;function u7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function d7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=u7(n);return t.key?`${q5(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function f7(t){return t.key?`${q5(t.modifier)}${t.key.toUpperCase()}`:"Press"}function q5(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var G5=y.createContext({activePanelId:null,activePath:null});function h7({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=un.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const C=X5(b.controls,w);if(C&&C.type==="slider")return{panelId:b.id,path:w,control:C,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=C=>{if(rd())return;const k=C.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const E=h("scroll")||h("drag")||h("move");if(E&&E.control.type==="slider"){C.preventDefault();const $=k==="arrowright"||k==="arrowup"?1:-1,W=oc(E.control,E.shortcut);ic(E.panelId,E.path,E.control,W,$);return}}const M=a.current.has(k);a.current.add(k);const N=vm(C),A=un.resolveShortcutTarget(k,N);if(A&&(i({activePanelId:A.panelId,activePath:A.path}),!M&&A.control.type==="toggle")){const E=un.getValue(A.panelId,A.path);un.updateValue(A.panelId,A.path,!E)}M||(u.current=null,d.current=0)},g=C=>{const k=C.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const N of a.current){const A=vm(C),E=un.resolveShortcutTarget(N,A);if(E){i({activePanelId:E.panelId,activePath:E.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},_=C=>{var N,A;if(rd())return;const k=vm(C);if(a.current.size>0)for(const E of a.current){const $=un.resolveShortcutTarget(E,k);if(!$)continue;const{panelId:W,path:P,control:X}=$;if(((A=(N=X.shortcut)==null?void 0:N.interaction)!=null?A:"scroll")!=="scroll"||X.type!=="slider")continue;C.preventDefault();const se=oc(X,X.shortcut),ae=C.deltaY>0?-1:1;ic(W,P,X,se,ae);return}const M=un.resolveScrollOnlyTargets();for(const{panelId:E,path:$,control:W,shortcut:P}of M){if(W.type!=="slider")continue;C.preventDefault();const X=oc(W,P),q=C.deltaY>0?-1:1;ic(E,$,W,X,q);return}},x=C=>{if(rd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=C.clientX,d.current=0,C.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=C=>{if(rd()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const N=C.clientX-u.current;u.current=C.clientX,d.current+=N;const A=oc(M.control,M.shortcut),E=Math.trunc(d.current/ld);E!==0&&(d.current-=E*ld,ic(M.panelId,M.path,M.control,A,E))}return}const k=h("move");if(k){if(u.current===null){u.current=C.clientX;return}const M=C.clientX-u.current;u.current=C.clientX,d.current+=M;const N=oc(k.control,k.shortcut),A=Math.trunc(d.current/ld);A!==0&&(d.current-=A*ld,ic(k.panelId,k.path,k.control,N,A))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),r.jsx(G5.Provider,{value:n,children:t})}var Wp="M6 9.5L12 15.5L18 9.5",m7="M5 12.75L10 19L19 5",wm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},p7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],_7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],xx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Nd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,C]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const N=()=>C(window.innerHeight);return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[a]),y.useEffect(()=>{const N=x.current;if(!N)return;const A=new ResizeObserver(()=>{if(h){const E=N.offsetHeight;w($=>$===E?$:E)}});return A.observe(N),()=>A.disconnect()},[h]);const k=()=>{if(c&&a)return;const N=!h;p(N),_(!N),u==null||u(N)},M=r.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[r.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[r.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&r.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("path",{opacity:"0.5",d:xx.path,fill:"currentColor"}),xx.circles.map((N,A)=>r.jsx("circle",{cx:N.cx,cy:N.cy,r:N.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},A))]}),!a&&r.jsx(Qo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:r.jsx("path",{d:Wp})})]}),a&&d&&h&&r.jsx("div",{className:"dialkit-panel-toolbar",onClick:N=>N.stopPropagation(),children:d})]}),r.jsx(Id,{initial:!1,children:h&&r.jsx(Qo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:r.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return r.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const N=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return r.jsx(Qo.div,{className:"dialkit-panel-inner",style:N,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var g7=3,y7=32,x7=200,b7=8;function No({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var qe;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,C]=y.useState(!1),[k,M]=y.useState(!1),[N,A]=y.useState(!1),[E,$]=y.useState(!1),[W,P]=y.useState(!1),[X,q]=y.useState(!1),[se,ae]=y.useState(""),G=y.useRef(null),ne=y.useRef(null),ce=y.useRef(!0),xe=y.useRef(null),z=y.useRef(null),_e=y.useRef(1),K=(n-a)/(c-a)*100,we=S||N,Te=ip(K),B=ad(Te,I=>`${I}%`),H=ad(Te,I=>`max(5px, calc(${I}% - 9px))`),L=ip(0),oe=ad(L,I=>`calc(100% + ${Math.abs(I)}px)`),Le=ad(L,I=>I<0?I:0);y.useEffect(()=>{!S&&!xe.current&&Te.jump(K)},[K,S,Te]);const Ee=y.useCallback(I=>{const J=z.current;if(!J)return n;const ve=(I-J.left)/_e.current,We=g.current?g.current.offsetWidth:J.width,Xe=Math.max(0,Math.min(1,ve/We)),Ne=a+Xe*(c-a);return Math.max(a,Math.min(c,Ne))},[a,c,n]),Be=y.useCallback(I=>(I-a)/(c-a)*100,[a,c]),et=y.useCallback((I,J)=>{const he=z.current;if(!he)return 0;const ve=J<0?he.left-I:I-he.right,We=Math.max(0,ve-y7);return J*b7*Math.sqrt(Math.min(We/x7,1))},[]),Ze=y.useCallback(I=>{if(!X&&(I.preventDefault(),I.target.setPointerCapture(I.pointerId),ne.current={x:I.clientX,y:I.clientY},ce.current=!0,C(!0),g.current)){z.current=g.current.getBoundingClientRect();const J=g.current.offsetWidth;_e.current=z.current.width/J}},[X]),Wt=y.useCallback(I=>{if(!S||!ne.current)return;const J=I.clientX-ne.current.x,he=I.clientY-ne.current.y,ve=Math.sqrt(J*J+he*he);if(ce.current&&ve>g7&&(ce.current=!1,M(!0)),!ce.current){const We=z.current;We&&(I.clientX<We.left?L.jump(et(I.clientX,-1)):I.clientX>We.right?L.jump(et(I.clientX,1)):L.jump(0));const Xe=Ee(I.clientX),Ne=Be(Xe);xe.current&&(xe.current.stop(),xe.current=null),Te.jump(Ne),i(yd(Xe,u))}},[S,Ee,Be,i,Te,L,et]),Vt=y.useCallback(I=>{if(S){if(ce.current){const J=Ee(I.clientX),ve=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):c7(J,a,c),We=Be(ve);xe.current&&xe.current.stop(),xe.current=yx(Te,We,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{xe.current=null}}),i(yd(ve,u))}L.get()!==0&&yx(L,0,{type:"spring",visualDuration:.35,bounce:.15}),C(!1),M(!1),ne.current=null}},[S,Ee,Be,i,a,c,Te,L]);y.useEffect(()=>(E&&!X&&!W?G.current=setTimeout(()=>{P(!0)},800):!E&&!X&&(G.current&&(clearTimeout(G.current),G.current=null),P(!1)),()=>{G.current&&clearTimeout(G.current)}),[E,X,W]),y.useEffect(()=>{X&&x.current&&(x.current.focus(),x.current.select())},[X]);const Mt=I=>{ae(I.target.value)},$t=()=>{const I=parseFloat(se);if(!isNaN(I)){const J=Math.max(a,Math.min(c,I));i(yd(J,u))}q(!1),$(!1),P(!1)},tn=I=>{W&&(I.stopPropagation(),I.preventDefault(),q(!0),ae(n.toFixed(ap(u))))},rn=I=>{I.key==="Enter"?$t():I.key==="Escape"&&(q(!1),$(!1))},de=()=>{$t()},Ye=n.toFixed(ap(u)),ee=8,De=10,He=10;let je=30,ot=78;const ct=(qe=g.current)==null?void 0:qe.offsetWidth;ct&&ct>0&&(b.current&&(je=(De+b.current.offsetWidth+ee)/ct*100),w.current&&(ot=(ct-He-w.current.offsetWidth-ee)/ct*100));const Qe=K<je||K>ot,st=we?Qe?.1:k?.9:.5:0,ft=(c-a)/u,ze=ft<=10?Array.from({length:ft-1},(I,J)=>{const he=(J+1)*u/(c-a)*100;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${he}%`}},J)}):Array.from({length:9},(I,J)=>{const he=(J+1)*10;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${he}%`}},J)});return r.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:r.jsxs(Qo.div,{ref:_,className:`dialkit-slider ${we?"dialkit-slider-active":""}`,onPointerDown:Ze,onPointerMove:Wt,onPointerUp:Vt,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{width:oe,x:Le},children:[r.jsx("div",{className:"dialkit-slider-hashmarks",children:ze}),r.jsx(Qo.div,{className:"dialkit-slider-fill",style:{width:B}}),r.jsx(Qo.div,{className:"dialkit-slider-handle",style:{left:H,y:"-50%"},animate:{opacity:st,scaleX:we?1:.25,scaleY:we&&Qe?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),r.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&r.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:d7(h)})]}),X?r.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:se,onChange:Mt,onKeyDown:rn,onBlur:de,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation()}):r.jsx("span",{ref:w,className:`dialkit-slider-value ${W?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:tn,onMouseDown:I=>W&&I.stopPropagation(),style:{cursor:W?"text":"default"},children:Ye})]})})}function Yp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,r.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&r.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return r.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function v7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&r.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:f7(a)})]}),r.jsx(Yp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function w7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function K5({spring:t,isSimpleMode:n}){var C,k,M,N,A;let c,u,d;if(n){const E=(C=t.visualDuration)!=null?C:.3,$=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/E,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(N=t.damping)!=null?N:17,d=(A=t.mass)!=null?A:1;const h=2,p=w7(c,u,d,h),g=p.map(([,E])=>E),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([E,$],W)=>{const P=E/h*256,q=140-(($-_)/(b||1)*140*.6+140*.2);return`${W===0?"M":"L"} ${P} ${q}`}).join(" "),S=[];for(let E=1;E<4;E++){const $=64*E,W=140/4*E;S.push(r.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${E}`),r.jsx("line",{x1:0,y1:W,x2:256,y2:W,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${E}`))}return r.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,r.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function S7({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(C=>un.subscribe(t,C),()=>un.getSpringMode(t,n),()=>un.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=C=>{un.updateSpringMode(t,n,C),c(C==="simple"?h.current.simple:h.current.advanced)},g=(C,k)=>{if(d){const{stiffness:M,damping:N,mass:A,...E}=a;c({...E,[C]:k})}else{const{visualDuration:M,bounce:N,...A}=a;c({...A,[C]:k})}};return r.jsx(Nd,{title:i,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx(K5,{spring:a,isSimpleMode:d}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Yp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(No,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:C=>g("visualDuration",C),min:.1,max:1,step:.05,unit:"s"}),r.jsx(No,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:C=>g("bounce",C),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(No,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:C=>g("stiffness",C),min:1,max:1e3,step:10}),r.jsx(No,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:C=>g("damping",C),min:1,max:100,step:1}),r.jsx(No,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:C=>g("mass",C),min:.1,max:10,step:.1})]})]})})}function k7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return r.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[r.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function C7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,C,k,M,N;const u=y.useSyncExternalStore(A=>un.subscribe(t,A),()=>un.getTransitionMode(t,n),()=>un.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=A=>{un.updateTransitionMode(t,n,A),c(A==="easing"?p.current.easing:A==="simple"?p.current.simple:p.current.advanced)},b=(A,E)=>{if(h){const{stiffness:$,damping:W,mass:P,...X}=g;c({...X,[A]:E})}else{const{visualDuration:$,bounce:W,...P}=g;c({...P,[A]:E})}},w=(A,E)=>{const $=[..._.ease];$[A]=E,c({..._,ease:$})};return r.jsx(Nd,{title:i,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?r.jsx(k7,{easing:_}):r.jsx(K5,{spring:g,isSimpleMode:h}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Yp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(No,{label:"x1",value:_.ease[0],onChange:A=>w(0,A),min:0,max:1,step:.01}),r.jsx(No,{label:"y1",value:_.ease[1],onChange:A=>w(1,A),min:-1,max:2,step:.01}),r.jsx(No,{label:"x2",value:_.ease[2],onChange:A=>w(2,A),min:0,max:1,step:.01}),r.jsx(No,{label:"y2",value:_.ease[3],onChange:A=>w(3,A),min:-1,max:2,step:.01}),r.jsx(No,{label:"Duration",value:_.duration,onChange:A=>c({..._,duration:A}),min:.1,max:2,step:.05,unit:"s"}),r.jsx(M7,{ease:_.ease,onChange:A=>c({..._,ease:A})})]}):h?r.jsxs(r.Fragment,{children:[r.jsx(No,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:A=>b("visualDuration",A),min:.1,max:1,step:.05,unit:"s"}),r.jsx(No,{label:"Bounce",value:(C=g.bounce)!=null?C:.2,onChange:A=>b("bounce",A),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(No,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:A=>b("stiffness",A),min:1,max:1e3,step:10}),r.jsx(No,{label:"Damping",value:(M=g.damping)!=null?M:17,onChange:A=>b("damping",A),min:1,max:100,step:1}),r.jsx(No,{label:"Mass",value:(N=g.mass)!=null?N:1,onChange:A=>b("mass",A),min:.1,max:10,step:.1})]})]})})}function bx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function j7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function M7({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(bx(t)),a(!0)},h=()=>{const g=j7(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:bx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function T7({label:t,value:n,onChange:i,placeholder:a}){return r.jsxs("div",{className:"dialkit-text-control",children:[r.jsx("label",{className:"dialkit-text-label",children:t}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function E7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function D7(t){return t.map(n=>typeof n=="string"?{value:n,label:E7(n)}:n)}function A7({label:t,value:n,options:i,onChange:a}){var C;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=D7(i),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),N=8+b.length*36,A=window.innerHeight-M.bottom-4,E=A<N&&M.top>A;x({top:E?M.top-4:M.bottom+4,left:M.left,width:M.width,above:E})},[b.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=M=>{const N=M.target;d.current&&!d.current.contains(N)&&h.current&&!h.current.contains(N)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),r.jsxs("div",{className:"dialkit-select-row",children:[r.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[r.jsx("span",{className:"dialkit-select-label",children:t}),r.jsxs("div",{className:"dialkit-select-right",children:[r.jsx("span",{className:"dialkit-select-value",children:(C=w==null?void 0:w.label)!=null?C:n}),r.jsx(Qo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:Wp})})]})]}),p&&Sc.createPortal(r.jsx(Id,{children:c&&_&&r.jsx(Qo.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>r.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var N7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function R7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),N7.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return r.jsxs("div",{className:"dialkit-color-control",children:[r.jsx("span",{className:"dialkit-color-label",children:t}),r.jsxs("div",{className:"dialkit-color-inputs",children:[a?r.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):r.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),r.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),r.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?B7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function B7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function L7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var N;if(!_)return;const M=(N=d.current)==null?void 0:N.getBoundingClientRect();M&&g({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const M=N=>{var E,$;const A=N.target;(E=d.current)!=null&&E.contains(A)||($=h.current)!=null&&$.contains(A)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const C=M=>{M?un.loadPreset(t,M):un.clearActivePreset(t),w()},k=(M,N)=>{M.stopPropagation(),un.deletePreset(t,N)};return r.jsxs("div",{className:"dialkit-preset-manager",children:[r.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[r.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),r.jsx(Qo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:Wp})})]}),Sc.createPortal(r.jsx(Id,{children:c&&r.jsxs(Qo.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[r.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>C(null),children:r.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>r.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>C(M.id),children:[r.jsx("span",{className:"dialkit-preset-name",children:M.name}),r.jsx("button",{className:"dialkit-preset-delete",onClick:N=>k(N,M.id),title:"Delete preset",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:_7.map((N,A)=>r.jsx("path",{d:N},A))})})]},M.id))]})}),document.body)]})}function O7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(G5);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>un.subscribe(t.id,k),()=>un.getValues(t.id),()=>un.getValues(t.id)),g=un.getPresets(t.id),_=un.getActivePresetId(t.id),x=()=>{const k=g.length+2;un.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var N,A,E;const M=p[k.path];switch(k.type){case"slider":return r.jsx(No,{label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return r.jsx(v7,{label:k.label,checked:M,onChange:$=>un.updateValue(t.id,k.path,$),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return r.jsx(S7,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"transition":return r.jsx(C7,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"folder":return r.jsx(Nd,{title:k.label,defaultOpen:(N=k.defaultOpen)!=null?N:!0,children:(A=k.children)==null?void 0:A.map(w)},k.path);case"text":return r.jsx(T7,{label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$),placeholder:k.placeholder},k.path);case"select":return r.jsx(A7,{label:k.label,value:M,options:(E=k.options)!=null?E:[],onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"color":return r.jsx(R7,{label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"action":return r.jsx("button",{className:"dialkit-button",onClick:()=>un.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),C=r.jsxs(r.Fragment,{children:[r.jsx(Qo.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:p7.map((k,M)=>r.jsx("path",{d:k},M))})}),r.jsx(L7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),r.jsx(Qo.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("span",{style:{position:"relative",width:16,height:16},children:r.jsx(Id,{initial:!1,mode:"wait",children:a?r.jsx(Qo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:r.jsx("path",{d:m7})},"check"):r.jsxs(Qo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[r.jsx("path",{d:wm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),r.jsx("path",{d:wm.sparkle,fill:"currentColor"}),r.jsx("path",{d:wm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return r.jsx("div",{className:"dialkit-panel-wrapper",children:r.jsx(Nd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:C,children:S()})})}var z7=typeof process<"u"?!1:!(typeof import.meta<"u");function $7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=z7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),C=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),N=y.useRef(!1);y.useEffect(()=>(p(!0),d(un.getPanels()),un.subscribeGlobal(()=>{d(un.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const X=new MutationObserver(()=>{var ae;const q=(ae=_.current)==null?void 0:ae.querySelector(".dialkit-panel-inner");if(!q)return;if(q.getAttribute("data-collapsed")==="true")C.current&&b(C.current);else{if(x){C.current=x;const G=x.x+21,ne=window.innerWidth/2;S(G<ne?"top-left":"top-right")}else S(t);b(null)}});return X.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>X.disconnect()},[g,x,t]);const A=y.useCallback(X=>{var ae;const q=(ae=_.current)==null?void 0:ae.querySelector(".dialkit-panel-inner");if(!q||q.getAttribute("data-collapsed")!=="true")return;const se=_.current.getBoundingClientRect();M.current={pointerX:X.clientX,pointerY:X.clientY,elX:se.left,elY:se.top},N.current=!1,k.current=!0,X.target.setPointerCapture(X.pointerId)},[]),E=y.useCallback(X=>{if(!k.current||!M.current)return;const q=X.clientX-M.current.pointerX,se=X.clientY-M.current.pointerY;!N.current&&Math.abs(q)+Math.abs(se)<4||(N.current=!0,b({x:M.current.elX+q,y:M.current.elY+se}))},[]),$=y.useCallback(X=>{var q;if(k.current&&(k.current=!1,M.current=null,N.current)){X.stopPropagation();const se=(q=_.current)==null?void 0:q.querySelector(".dialkit-panel-inner");if(se){const ae=G=>{G.stopPropagation()};se.addEventListener("click",ae,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const W=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,P=r.jsx(h7,{children:r.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:r.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:W,onPointerDown:g?void 0:A,onPointerMove:g?void 0:E,onPointerUp:g?void 0:$,children:u.map(X=>r.jsx(O7,{panel:X,defaultOpen:g||n,inline:g},X.id))})})});return g?P:Sc.createPortal(P,document.body)}const I7=()=>(t7("Git Visualizer",{preview:[1,0,1]}),null),P7=({children:t})=>r.jsxs(r.Fragment,{children:[t,r.jsx(I7,{}),r.jsx($7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),r.jsx(H6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Sv.createRoot(document.getElementById("root")).render(r.jsx(P7,{children:r.jsx(Sw,{})}));

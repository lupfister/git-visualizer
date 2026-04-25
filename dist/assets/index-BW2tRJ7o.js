(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oh={exports:{}},nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function Ev(){if(Z0)return nc;Z0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return nc.Fragment=n,nc.jsx=i,nc.jsxs=i,nc}var J0;function Av(){return J0||(J0=1,Oh.exports=Ev()),Oh.exports}var l=Av(),zh={exports:{}},sc={},$h={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function Dv(){return ey||(ey=1,(function(t){function n($,se){var W=$.length;$.push(se);e:for(;0<W;){var K=W-1>>>1,_e=$[K];if(0<c(_e,se))$[K]=se,$[W]=_e,W=K;else break e}}function i($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var se=$[0],W=$.pop();if(W!==se){$[0]=W;e:for(var K=0,_e=$.length,R=_e>>>1;K<R;){var oe=2*(K+1)-1,le=$[oe],de=oe+1,Ne=$[de];if(0>c(le,W))de<_e&&0>c(Ne,le)?($[K]=Ne,$[de]=W,K=de):($[K]=le,$[oe]=W,K=oe);else if(de<_e&&0>c(Ne,W))$[K]=Ne,$[de]=W,K=de;else break e}}return se}function c($,se){var W=$.sortIndex-se.sortIndex;return W!==0?W:$.id-se.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,j=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N($){for(var se=i(g);se!==null;){if(se.callback===null)a(g);else if(se.startTime<=$)a(g),se.sortIndex=se.expirationTime,n(p,se);else break;se=i(g)}}function Y($){if(j=!1,N($),!S)if(i(p)!==null)S=!0,P||(P=!0,ke());else{var se=i(g);se!==null&&ue(Y,se.startTime-$)}}var P=!1,F=-1,V=5,Z=-1;function ae(){return k?!0:!(t.unstable_now()-Z<V)}function ie(){if(k=!1,P){var $=t.unstable_now();Z=$;var se=!0;try{e:{S=!1,j&&(j=!1,z(F),F=-1),w=!0;var W=b;try{t:{for(N($),x=i(p);x!==null&&!(x.expirationTime>$&&ae());){var K=x.callback;if(typeof K=="function"){x.callback=null,b=x.priorityLevel;var _e=K(x.expirationTime<=$);if($=t.unstable_now(),typeof _e=="function"){x.callback=_e,N($),se=!0;break t}x===i(p)&&a(p),N($)}else a(p);x=i(p)}if(x!==null)se=!0;else{var R=i(g);R!==null&&ue(Y,R.startTime-$),se=!1}}break e}finally{x=null,b=W,w=!1}se=void 0}}finally{se?ke():P=!1}}}var ke;if(typeof L=="function")ke=function(){L(ie)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Q=Be.port2;Be.port1.onmessage=ie,ke=function(){Q.postMessage(null)}}else ke=function(){T(ie,0)};function ue($,se){F=T(function(){$(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function($){switch(b){case 1:case 2:case 3:var se=3;break;default:se=b}var W=b;b=se;try{return $()}finally{b=W}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function($,se){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var W=b;b=$;try{return se()}finally{b=W}},t.unstable_scheduleCallback=function($,se,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,$){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=W+_e,$={id:_++,callback:se,priorityLevel:$,startTime:W,expirationTime:_e,sortIndex:-1},W>K?($.sortIndex=W,n(g,$),i(p)===null&&$===i(g)&&(j?(z(F),F=-1):j=!0,ue(Y,W-K))):($.sortIndex=_e,n(p,$),S||w||(S=!0,P||(P=!0,ke()))),$},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function($){var se=b;return function(){var W=b;b=se;try{return $.apply(this,arguments)}finally{b=W}}}})(Ih)),Ih}var ty;function Nv(){return ty||(ty=1,$h.exports=Dv()),$h.exports}var Ph={exports:{}},Qt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Rv(){if(ny)return Qt;ny=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function T(R,oe,le){this.props=R,this.context=oe,this.refs=k,this.updater=le||S}T.prototype.isReactComponent={},T.prototype.setState=function(R,oe){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,oe,"setState")},T.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function z(){}z.prototype=T.prototype;function L(R,oe,le){this.props=R,this.context=oe,this.refs=k,this.updater=le||S}var N=L.prototype=new z;N.constructor=L,j(N,T.prototype),N.isPureReactComponent=!0;var Y=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function Z(R,oe,le){var de=le.ref;return{$$typeof:t,type:R,key:oe,ref:de!==void 0?de:null,props:le}}function ae(R,oe){return Z(R.type,oe,R.props)}function ie(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function ke(R){var oe={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(le){return oe[le]})}var Be=/\/+/g;function Q(R,oe){return typeof R=="object"&&R!==null&&R.key!=null?ke(""+R.key):oe.toString(36)}function ue(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(P,P):(R.status="pending",R.then(function(oe){R.status==="pending"&&(R.status="fulfilled",R.value=oe)},function(oe){R.status==="pending"&&(R.status="rejected",R.reason=oe)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function $(R,oe,le,de,Ne){var Pe=typeof R;(Pe==="undefined"||Pe==="boolean")&&(R=null);var Re=!1;if(R===null)Re=!0;else switch(Pe){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(R.$$typeof){case t:case n:Re=!0;break;case _:return Re=R._init,$(Re(R._payload),oe,le,de,Ne)}}if(Re)return Ne=Ne(R),Re=de===""?"."+Q(R,0):de,Y(Ne)?(le="",Re!=null&&(le=Re.replace(Be,"$&/")+"/"),$(Ne,oe,le,"",function(Ot){return Ot})):Ne!=null&&(ie(Ne)&&(Ne=ae(Ne,le+(Ne.key==null||R&&R.key===Ne.key?"":(""+Ne.key).replace(Be,"$&/")+"/")+Re)),oe.push(Ne)),1;Re=0;var tt=de===""?".":de+":";if(Y(R))for(var dt=0;dt<R.length;dt++)de=R[dt],Pe=tt+Q(de,dt),Re+=$(de,oe,le,Pe,Ne);else if(dt=w(R),typeof dt=="function")for(R=dt.call(R),dt=0;!(de=R.next()).done;)de=de.value,Pe=tt+Q(de,dt++),Re+=$(de,oe,le,Pe,Ne);else if(Pe==="object"){if(typeof R.then=="function")return $(ue(R),oe,le,de,Ne);throw oe=String(R),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.")}return Re}function se(R,oe,le){if(R==null)return R;var de=[],Ne=0;return $(R,de,"","",function(Pe){return oe.call(le,Pe,Ne++)}),de}function W(R){if(R._status===-1){var oe=R._result;oe=oe(),oe.then(function(le){(R._status===0||R._status===-1)&&(R._status=1,R._result=le)},function(le){(R._status===0||R._status===-1)&&(R._status=2,R._result=le)}),R._status===-1&&(R._status=0,R._result=oe)}if(R._status===1)return R._result.default;throw R._result}var K=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var oe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(oe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},_e={map:se,forEach:function(R,oe,le){se(R,function(){oe.apply(this,arguments)},le)},count:function(R){var oe=0;return se(R,function(){oe++}),oe},toArray:function(R){return se(R,function(oe){return oe})||[]},only:function(R){if(!ie(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return Qt.Activity=x,Qt.Children=_e,Qt.Component=T,Qt.Fragment=i,Qt.Profiler=c,Qt.PureComponent=L,Qt.StrictMode=a,Qt.Suspense=p,Qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Qt.__COMPILER_RUNTIME={__proto__:null,c:function(R){return F.H.useMemoCache(R)}},Qt.cache=function(R){return function(){return R.apply(null,arguments)}},Qt.cacheSignal=function(){return null},Qt.cloneElement=function(R,oe,le){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var de=j({},R.props),Ne=R.key;if(oe!=null)for(Pe in oe.key!==void 0&&(Ne=""+oe.key),oe)!V.call(oe,Pe)||Pe==="key"||Pe==="__self"||Pe==="__source"||Pe==="ref"&&oe.ref===void 0||(de[Pe]=oe[Pe]);var Pe=arguments.length-2;if(Pe===1)de.children=le;else if(1<Pe){for(var Re=Array(Pe),tt=0;tt<Pe;tt++)Re[tt]=arguments[tt+2];de.children=Re}return Z(R.type,Ne,de)},Qt.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},Qt.createElement=function(R,oe,le){var de,Ne={},Pe=null;if(oe!=null)for(de in oe.key!==void 0&&(Pe=""+oe.key),oe)V.call(oe,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(Ne[de]=oe[de]);var Re=arguments.length-2;if(Re===1)Ne.children=le;else if(1<Re){for(var tt=Array(Re),dt=0;dt<Re;dt++)tt[dt]=arguments[dt+2];Ne.children=tt}if(R&&R.defaultProps)for(de in Re=R.defaultProps,Re)Ne[de]===void 0&&(Ne[de]=Re[de]);return Z(R,Pe,Ne)},Qt.createRef=function(){return{current:null}},Qt.forwardRef=function(R){return{$$typeof:h,render:R}},Qt.isValidElement=ie,Qt.lazy=function(R){return{$$typeof:_,_payload:{_status:-1,_result:R},_init:W}},Qt.memo=function(R,oe){return{$$typeof:g,type:R,compare:oe===void 0?null:oe}},Qt.startTransition=function(R){var oe=F.T,le={};F.T=le;try{var de=R(),Ne=F.S;Ne!==null&&Ne(le,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(P,K)}catch(Pe){K(Pe)}finally{oe!==null&&le.types!==null&&(oe.types=le.types),F.T=oe}},Qt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Qt.use=function(R){return F.H.use(R)},Qt.useActionState=function(R,oe,le){return F.H.useActionState(R,oe,le)},Qt.useCallback=function(R,oe){return F.H.useCallback(R,oe)},Qt.useContext=function(R){return F.H.useContext(R)},Qt.useDebugValue=function(){},Qt.useDeferredValue=function(R,oe){return F.H.useDeferredValue(R,oe)},Qt.useEffect=function(R,oe){return F.H.useEffect(R,oe)},Qt.useEffectEvent=function(R){return F.H.useEffectEvent(R)},Qt.useId=function(){return F.H.useId()},Qt.useImperativeHandle=function(R,oe,le){return F.H.useImperativeHandle(R,oe,le)},Qt.useInsertionEffect=function(R,oe){return F.H.useInsertionEffect(R,oe)},Qt.useLayoutEffect=function(R,oe){return F.H.useLayoutEffect(R,oe)},Qt.useMemo=function(R,oe){return F.H.useMemo(R,oe)},Qt.useOptimistic=function(R,oe){return F.H.useOptimistic(R,oe)},Qt.useReducer=function(R,oe,le){return F.H.useReducer(R,oe,le)},Qt.useRef=function(R){return F.H.useRef(R)},Qt.useState=function(R){return F.H.useState(R)},Qt.useSyncExternalStore=function(R,oe,le){return F.H.useSyncExternalStore(R,oe,le)},Qt.useTransition=function(){return F.H.useTransition()},Qt.version="19.2.4",Qt}var sy;function lp(){return sy||(sy=1,Ph.exports=Rv()),Ph.exports}var Hh={exports:{}},Io={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Bv(){if(oy)return Io;oy=1;var t=lp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Io.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Io.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Io.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Io.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Io.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Io.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Io.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Io.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Io.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Io.requestFormReset=function(p){a.d.r(p)},Io.unstable_batchedUpdates=function(p,g){return p(g)},Io.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Io.useFormStatus=function(){return d.H.useHostTransitionStatus()},Io.version="19.2.4",Io}var iy;function Bx(){if(iy)return Hh.exports;iy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Hh.exports=Bv(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Lv(){if(ay)return sc;ay=1;var t=Nv(),n=lp(),i=Bx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,r=m;break}if(A===r){v=!0,r=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,r=f;break}if(A===r){v=!0,r=m,o=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case T:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case P:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case N:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return s=e.displayName||null,s!==null?s:Q(e.type)||"Memo";case V:s=e._payload,e=e._init;try{return Q(e(s))}catch{}}return null}var ue=Array.isArray,$=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},K=[],_e=-1;function R(e){return{current:e}}function oe(e){0>_e||(e.current=K[_e],K[_e]=null,_e--)}function le(e,s){_e++,K[_e]=e.current,e.current=s}var de=R(null),Ne=R(null),Pe=R(null),Re=R(null);function tt(e,s){switch(le(Pe,s),le(Ne,e),le(de,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?v0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=v0(s),e=w0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}oe(de),le(de,e)}function dt(){oe(de),oe(Ne),oe(Pe)}function Ot(e){e.memoizedState!==null&&le(Re,e);var s=de.current,o=w0(s,e.type);s!==o&&(le(Ne,e),le(de,o))}function ht(e){Ne.current===e&&(oe(de),oe(Ne)),Re.current===e&&(oe(Re),Zl._currentValue=W)}var Ie,Ee;function mt(e){if(Ie===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ie=s&&s[1]||"",Ee=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+e+Ee}var zt=!1;function xt(e,s){if(!e||zt)return"";zt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var $e=function(){throw Error()};if(Object.defineProperty($e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($e,[])}catch(ve){var ge=ve}Reflect.construct(e,[],$e)}else{try{$e.call()}catch(ve){ge=ve}e.call($e.prototype)}}else{try{throw Error()}catch(ve){ge=ve}($e=e())&&typeof $e.catch=="function"&&$e.catch(function(){})}}catch(ve){if(ve&&ge&&typeof ve.stack=="string")return[ve.stack,ge.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var X=v.split(`
`),pe=A.split(`
`);for(f=r=0;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;for(;f<pe.length&&!pe[f].includes("DetermineComponentFrameRoot");)f++;if(r===X.length||f===pe.length)for(r=X.length-1,f=pe.length-1;1<=r&&0<=f&&X[r]!==pe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(X[r]!==pe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||X[r]!==pe[f]){var je=`
`+X[r].replace(" at new "," at ");return e.displayName&&je.includes("<anonymous>")&&(je=je.replace("<anonymous>",e.displayName)),je}while(1<=r&&0<=f);break}}}finally{zt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?mt(o):""}function Vt(e,s){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==s&&s!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return xt(e.type,!1);case 11:return xt(e.type.render,!1);case 1:return xt(e.type,!0);case 31:return mt("Activity");default:return""}}function G(e){try{var s="",o=null;do s+=Vt(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Me=Object.prototype.hasOwnProperty,Je=t.unstable_scheduleCallback,Ze=t.unstable_cancelCallback,ct=t.unstable_shouldYield,Ae=t.unstable_requestPaint,rt=t.unstable_now,it=t.unstable_getCurrentPriorityLevel,pt=t.unstable_ImmediatePriority,$t=t.unstable_UserBlockingPriority,st=t.unstable_NormalPriority,H=t.unstable_LowPriority,te=t.unstable_IdlePriority,me=t.log,Se=t.unstable_setDisableYieldValue,Ke=null,Fe=null;function Le(e){if(typeof me=="function"&&Se(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Ke,e)}catch{}}var bt=Math.clz32?Math.clz32:Ge,Ue=Math.log,Pt=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/Pt|0)|0}var We=256,kt=262144,Bt=4194304;function Wt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~m,r!==0?f=Wt(r):(v&=A,v!==0?f=Wt(v):o||(o=A&~e,o!==0&&(f=Wt(o))))):(A=r&~m,A!==0?f=Wt(A):v!==0?f=Wt(v):o||(o=r&~e,o!==0&&(f=Wt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Nt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Tt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function an(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function ft(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,X=e.expirationTimes,pe=e.hiddenUpdates;for(o=v&~o;0<o;){var je=31-bt(o),$e=1<<je;A[je]=0,X[je]=-1;var ge=pe[je];if(ge!==null)for(pe[je]=null,je=0;je<ge.length;je++){var ve=ge[je];ve!==null&&(ve.lane&=-536870913)}o&=~$e}r!==0&&zn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function zn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-bt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function Rn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-bt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function kn(e,s){var o=s&-s;return o=(o&42)!==0?1:cs(o),(o&(e.suspendedLanes|s))!==0?0:o}function cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jn(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:W0(e.type))}function Mn(e,s){var o=se.p;try{return se.p=e,s()}finally{se.p=o}}var $n=Math.random().toString(36).slice(2),rn="__reactFiber$"+$n,Tn="__reactProps$"+$n,nt="__reactContainer$"+$n,ln="__reactEvents$"+$n,oo="__reactListeners$"+$n,No="__reactHandles$"+$n,us="__reactResources$"+$n,As="__reactMarker$"+$n;function ti(e){delete e[rn],delete e[Tn],delete e[ln],delete e[oo],delete e[No]}function ks(e){var s=e[rn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[nt]||o[rn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=E0(e);e!==null;){if(o=e[rn])return o;e=E0(e)}return s}e=o,o=e.parentNode}return null}function _o(e){if(e=e[rn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function io(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function go(e){var s=e[us];return s||(s=e[us]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function vn(e){e[As]=!0}var ni=new Set,Hs={};function Ns(e,s){ds(e,s),ds(e+"Capture",s)}function ds(e,s){for(Hs[e]=s,e=0;e<s.length;e++)ni.add(s[e])}var Ho=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},Rs={};function Us(e){return Me.call(Rs,e)?!0:Me.call(yo,e)?!1:Ho.test(e)?Rs[e]=!0:(yo[e]=!0,!1)}function En(e,s,o){if(Us(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function is(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function wn(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ro(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function fs(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function hi(e){if(!e._valueTracker){var s=Ro(e)?"checked":"value";e._valueTracker=fs(e,s,""+e[s])}}function mi(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Ro(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var si=/[\n"\\]/g;function ys(e){return e.replace(si,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function So(e,s,o,r,f,m,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Jt(s)):e.value!==""+Jt(s)&&(e.value=""+Jt(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?Ks(e,v,Jt(s)):o!=null?Ks(e,v,Jt(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Jt(A):e.removeAttribute("name")}function In(e,s,o,r,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){hi(e);return}o=o!=null?""+Jt(o):"",s=s!=null?""+Jt(s):o,A||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),hi(e)}function Ks(e,s,o){s==="number"&&Bo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function hs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+Jt(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function ms(e,s,o){if(s!=null&&(s=""+Jt(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Jt(o):""}function Pi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(ue(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Jt(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),hi(e)}function Uo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||Zi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function ki(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&qt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&qt(e,m,s[m])}function Bn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lo(e){return Vo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ao(){}var Yo=null;function xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,Qs=null;function ji(e){var s=_o(e);if(s&&(e=s.stateNode)){var o=e[Tn]||null;e:switch(e=s.stateNode,s.type){case"input":if(So(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ys(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[Tn]||null;if(!f)throw Error(a(90));So(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&mi(r)}break e;case"textarea":ms(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&hs(e,!!o.multiple,s,!1)}}}var Ds=!1;function Vs(e,s,o){if(Ds)return e(s,o);Ds=!0;try{var r=e(s);return r}finally{if(Ds=!1,(yn!==null||Qs!==null)&&(vu(),yn&&(s=yn,e=Qs,Qs=yn=null,ji(s),e)))for(s=0;s<e.length;s++)ji(e[s])}}function nn(e,s){var o=e.stateNode;if(o===null)return null;var r=o[Tn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var Bs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=!1;if(Bs)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){ro=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{ro=!1}var xs=null,Co=null,zo=null;function Wo(){if(zo)return zo;var e,s=Co,o=s.length,r,f="value"in xs?xs.value:xs.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return zo=f.slice(e,1<r?1-r:void 0)}function Ys(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function oi(){return!1}function Gn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?bo:oi,this.isPropagationStopped=oi,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),s}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Gn(dn),Un=x({},dn,{view:0,detail:0}),Ls=Gn(Un),pi,lo,js,vo=x({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(pi=e.screenX-js.screenX,lo=e.screenY-js.screenY):lo=pi=0,js=e),pi)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),bs=Gn(vo),E=x({},vo,{dataTransfer:0}),q=Gn(E),fe=x({},Un,{relatedTarget:0}),ye=Gn(fe),Ve=x({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),et=Gn(Ve),Rt=x({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ht=Gn(Rt),Dt=x({},dn,{data:0}),qe=Gn(Dt),sn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vn(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Pn[e])?!!s[e]:!1}function pn(){return Vn}var Ms=x({},Un,{key:function(e){if(e.key){var s=sn[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),co=Gn(Ms),ii=x({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=Gn(ii),Ji=x({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn}),I=Gn(Ji),ee=x({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ne=Gn(ee),xe=x({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ot=Gn(xe),gt=x({},dn,{newState:0,oldState:0}),yt=Gn(gt),Ft=[9,13,27,32],qn=Bs&&"CompositionEvent"in window,Kn=null;Bs&&"documentMode"in document&&(Kn=document.documentMode);var uo=Bs&&"TextEvent"in window&&!Kn,An=Bs&&(!qn||Kn&&8<Kn&&11>=Kn),Kt=" ",en=!1;function cn(e,s){switch(e){case"keyup":return Ft.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ts(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function Ws(e,s){switch(e){case"compositionend":return Ts(s);case"keypress":return s.which!==32?null:(en=!0,Kt);case"textInput":return e=s.data,e===Kt&&en?null:e;default:return null}}function Fs(e,s){if(Os)return e==="compositionend"||!qn&&cn(e,s)?(e=Wo(),zo=Co=xs=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return An&&s.locale!=="ko"?null:s.data;default:return null}}var fo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _i(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!fo[e.type]:s==="textarea"}function Go(e,s,o,r){yn?Qs?Qs.push(r):Qs=[r]:yn=r,s=Tu(s,"onChange"),0<s.length&&(o=new Fo("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var ko=null,jo=null;function be(e){p0(e,0)}function C(e){var s=io(e);if(mi(s))return e}function M(e,s){if(e==="change")return s}var D=!1;if(Bs){var B;if(Bs){var U="oninput"in document;if(!U){var re=document.createElement("div");re.setAttribute("oninput","return;"),U=typeof re.oninput=="function"}B=U}else B=!1;D=B&&(!document.documentMode||9<document.documentMode)}function Ce(){ko&&(ko.detachEvent("onpropertychange",ze),jo=ko=null)}function ze(e){if(e.propertyName==="value"&&C(jo)){var s=[];Go(s,jo,e,xo(e)),Vs(be,s)}}function Xe(e,s,o){e==="focusin"?(Ce(),ko=s,jo=o,ko.attachEvent("onpropertychange",ze)):e==="focusout"&&Ce()}function lt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return C(jo)}function wt(e,s){if(e==="click")return C(s)}function jt(e,s){if(e==="input"||e==="change")return C(s)}function Et(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var at=typeof Object.is=="function"?Object.is:Et;function ut(e,s){if(at(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!Me.call(s,f)||!at(e[f],s[f]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zn(e,s){var o=Qn(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qn(o)}}function vs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?vs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function bn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Bo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Bo(e.document)}return s}function Hn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Xt=Bs&&"documentMode"in document&&11>=document.documentMode,Gt=null,ws=null,Sn=null,ho=!1;function $o(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ho||Gt==null||Gt!==Bo(r)||(r=Gt,"selectionStart"in r&&Hn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sn&&ut(Sn,r)||(Sn=r,r=Tu(ws,"onSelect"),0<r.length&&(s=new Fo("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Gt)))}function as(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var Mi={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Hi={},Ui={};Bs&&(Ui=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Jn(e){if(Hi[e])return Hi[e];if(!Mi[e])return e;var s=Mi[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ui)return Hi[e]=s[o];return e}var Vi=Jn("animationend"),ea=Jn("animationiteration"),Pc=Jn("animationstart"),Wd=Jn("transitionrun"),Fd=Jn("transitionstart"),Xd=Jn("transitioncancel"),Gp=Jn("transitionend"),qp=new Map,Gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gd.push("scrollEnd");function Yi(e,s){qp.set(e,s),Ns(s,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],Nr=0,qd=0;function Uc(){for(var e=Nr,s=qd=Nr=0;s<e;){var o=Ti[s];Ti[s++]=null;var r=Ti[s];Ti[s++]=null;var f=Ti[s];Ti[s++]=null;var m=Ti[s];if(Ti[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Kp(o,f,m)}}function Vc(e,s,o,r){Ti[Nr++]=e,Ti[Nr++]=s,Ti[Nr++]=o,Ti[Nr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kd(e,s,o,r){return Vc(e,s,o,r),Yc(e)}function or(e,s){return Vc(e,null,null,s),Yc(e)}function Kp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-bt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Yc(e){if(50<Wl)throw Wl=0,ah=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Rr={};function f2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,s,o,r){return new f2(e,s,o,r)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,s){var o=e.alternate;return o===null?(o=gi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Qp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Wc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Qd(e)&&(v=1);else if(typeof e=="string")v=gv(e,o,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=gi(31,o,s,f),e.elementType=Z,e.lanes=m,e;case j:return ir(o.children,f,m,s);case k:v=8,f|=24;break;case T:return e=gi(12,o,s,f|2),e.elementType=T,e.lanes=m,e;case Y:return e=gi(13,o,s,f),e.elementType=Y,e.lanes=m,e;case P:return e=gi(19,o,s,f),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case z:v=9;break e;case N:v=11;break e;case F:v=14;break e;case V:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=gi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function ir(e,s,o,r){return e=gi(7,e,r,s),e.lanes=o,e}function Zd(e,s,o){return e=gi(6,e,null,s),e.lanes=o,e}function Zp(e){var s=gi(18,null,null,0);return s.stateNode=e,s}function Jd(e,s,o){return s=gi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var Jp=new WeakMap;function Ei(e,s){if(typeof e=="object"&&e!==null){var o=Jp.get(e);return o!==void 0?o:(s={value:e,source:s,stack:G(s)},Jp.set(e,s),s)}return{value:e,source:s,stack:G(s)}}var Br=[],Lr=0,Fc=null,Cl=0,Ai=[],Di=0,Ta=null,ta=1,na="";function fa(e,s){Br[Lr++]=Cl,Br[Lr++]=Fc,Fc=e,Cl=s}function e_(e,s,o){Ai[Di++]=ta,Ai[Di++]=na,Ai[Di++]=Ta,Ta=e;var r=ta;e=na;var f=32-bt(r)-1;r&=~(1<<f),o+=1;var m=32-bt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,ta=1<<32-bt(s)+f|o<<f|r,na=m+e}else ta=1<<m|o<<f|r,na=e}function ef(e){e.return!==null&&(fa(e,1),e_(e,1,0))}function tf(e){for(;e===Fc;)Fc=Br[--Lr],Br[Lr]=null,Cl=Br[--Lr],Br[Lr]=null;for(;e===Ta;)Ta=Ai[--Di],Ai[Di]=null,na=Ai[--Di],Ai[Di]=null,ta=Ai[--Di],Ai[Di]=null}function t_(e,s){Ai[Di++]=ta,Ai[Di++]=na,Ai[Di++]=Ta,ta=s.id,na=s.overflow,Ta=e}var Mo=null,Ss=null,xn=!1,Ea=null,Ni=!1,nf=Error(a(519));function Aa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(Ei(s,e)),nf}function n_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[rn]=e,s[Tn]=r,o){case"dialog":mn("cancel",s),mn("close",s);break;case"iframe":case"object":case"embed":mn("load",s);break;case"video":case"audio":for(o=0;o<Xl.length;o++)mn(Xl[o],s);break;case"source":mn("error",s);break;case"img":case"image":case"link":mn("error",s),mn("load",s);break;case"details":mn("toggle",s);break;case"input":mn("invalid",s),In(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mn("invalid",s);break;case"textarea":mn("invalid",s),Pi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||x0(s.textContent,o)?(r.popover!=null&&(mn("beforetoggle",s),mn("toggle",s)),r.onScroll!=null&&mn("scroll",s),r.onScrollEnd!=null&&mn("scrollend",s),r.onClick!=null&&(s.onclick=ao),s=!0):s=!1,s||Aa(e,!0)}function s_(e){for(Mo=e.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Mo=Mo.return}}function Or(e){if(e!==Mo)return!1;if(!xn)return s_(e),xn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||vh(e.type,e.memoizedProps)),o=!o),o&&Ss&&Aa(e),s_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=T0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ss=T0(e)}else s===27?(s=Ss,Ya(e.type)?(e=jh,jh=null,Ss=e):Ss=s):Ss=Mo?Bi(e.stateNode.nextSibling):null;return!0}function ar(){Ss=Mo=null,xn=!1}function sf(){var e=Ea;return e!==null&&(ci===null?ci=e:ci.push.apply(ci,e),Ea=null),e}function kl(e){Ea===null?Ea=[e]:Ea.push(e)}var of=R(null),rr=null,ha=null;function Da(e,s,o){le(of,s._currentValue),s._currentValue=o}function ma(e){e._currentValue=of.current,oe(of)}function af(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function rf(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var X=0;X<s.length;X++)if(A.context===s[X]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),af(m.return,o,e),r||(v=null);break e}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),af(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function zr(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;at(f.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(f===Re.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}f=f.return}e!==null&&rf(s,e,o,r),s.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){rr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function To(e){return o_(rr,e)}function Gc(e,s){return rr===null&&lr(e),o_(e,s)}function o_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},ha===null){if(e===null)throw Error(a(308));ha=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else ha=ha.next=s;return o}var h2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},m2=t.unstable_scheduleCallback,p2=t.unstable_NormalPriority,Zs={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new h2,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&m2(p2,function(){e.controller.abort()})}var Ml=null,cf=0,$r=0,Ir=null;function _2(e,s){if(Ml===null){var o=Ml=[];cf=0,$r=fh(),Ir={status:"pending",value:void 0,then:function(r){o.push(r)}}}return cf++,s.then(i_,i_),s}function i_(){if(--cf===0&&Ml!==null){Ir!==null&&(Ir.status="fulfilled");var e=Ml;Ml=null,$r=0,Ir=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function g2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var a_=$.S;$.S=function(e,s){Vg=rt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&_2(e,s),a_!==null&&a_(e,s)};var cr=R(null);function uf(){var e=cr.current;return e!==null?e:rs.pooledCache}function qc(e,s){s===null?le(cr,cr.current):le(cr,s.pool)}function r_(){var e=uf();return e===null?null:{parent:Zs._currentValue,pool:e}}var Pr=Error(a(460)),df=Error(a(474)),Kc=Error(a(542)),Qc={then:function(){}};function l_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function c_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(ao,ao),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,d_(e),e;default:if(typeof s.status=="string")s.then(ao,ao);else{if(e=rs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,d_(e),e}throw dr=s,Pr}}function ur(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(dr=o,Pr):o}}var dr=null;function u_(){if(dr===null)throw Error(a(459));var e=dr;return dr=null,e}function d_(e){if(e===Pr||e===Kc)throw Error(a(483))}var Hr=null,Tl=0;function Zc(e){var s=Tl;return Tl+=1,Hr===null&&(Hr=[]),c_(Hr,e,s)}function El(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Jc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function f_(e){function s(ce,J){if(e){var he=ce.deletions;he===null?(ce.deletions=[J],ce.flags|=16):he.push(J)}}function o(ce,J){if(!e)return null;for(;J!==null;)s(ce,J),J=J.sibling;return null}function r(ce){for(var J=new Map;ce!==null;)ce.key!==null?J.set(ce.key,ce):J.set(ce.index,ce),ce=ce.sibling;return J}function f(ce,J){return ce=da(ce,J),ce.index=0,ce.sibling=null,ce}function m(ce,J,he){return ce.index=he,e?(he=ce.alternate,he!==null?(he=he.index,he<J?(ce.flags|=67108866,J):he):(ce.flags|=67108866,J)):(ce.flags|=1048576,J)}function v(ce){return e&&ce.alternate===null&&(ce.flags|=67108866),ce}function A(ce,J,he,Oe){return J===null||J.tag!==6?(J=Zd(he,ce.mode,Oe),J.return=ce,J):(J=f(J,he),J.return=ce,J)}function X(ce,J,he,Oe){var It=he.type;return It===j?je(ce,J,he.props.children,Oe,he.key):J!==null&&(J.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===V&&ur(It)===J.type)?(J=f(J,he.props),El(J,he),J.return=ce,J):(J=Wc(he.type,he.key,he.props,null,ce.mode,Oe),El(J,he),J.return=ce,J)}function pe(ce,J,he,Oe){return J===null||J.tag!==4||J.stateNode.containerInfo!==he.containerInfo||J.stateNode.implementation!==he.implementation?(J=Jd(he,ce.mode,Oe),J.return=ce,J):(J=f(J,he.children||[]),J.return=ce,J)}function je(ce,J,he,Oe,It){return J===null||J.tag!==7?(J=ir(he,ce.mode,Oe,It),J.return=ce,J):(J=f(J,he),J.return=ce,J)}function $e(ce,J,he){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Zd(""+J,ce.mode,he),J.return=ce,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return he=Wc(J.type,J.key,J.props,null,ce.mode,he),El(he,J),he.return=ce,he;case S:return J=Jd(J,ce.mode,he),J.return=ce,J;case V:return J=ur(J),$e(ce,J,he)}if(ue(J)||ke(J))return J=ir(J,ce.mode,he,null),J.return=ce,J;if(typeof J.then=="function")return $e(ce,Zc(J),he);if(J.$$typeof===L)return $e(ce,Gc(ce,J),he);Jc(ce,J)}return null}function ge(ce,J,he,Oe){var It=J!==null?J.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return It!==null?null:A(ce,J,""+he,Oe);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case w:return he.key===It?X(ce,J,he,Oe):null;case S:return he.key===It?pe(ce,J,he,Oe):null;case V:return he=ur(he),ge(ce,J,he,Oe)}if(ue(he)||ke(he))return It!==null?null:je(ce,J,he,Oe,null);if(typeof he.then=="function")return ge(ce,J,Zc(he),Oe);if(he.$$typeof===L)return ge(ce,J,Gc(ce,he),Oe);Jc(ce,he)}return null}function ve(ce,J,he,Oe,It){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number"||typeof Oe=="bigint")return ce=ce.get(he)||null,A(J,ce,""+Oe,It);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case w:return ce=ce.get(Oe.key===null?he:Oe.key)||null,X(J,ce,Oe,It);case S:return ce=ce.get(Oe.key===null?he:Oe.key)||null,pe(J,ce,Oe,It);case V:return Oe=ur(Oe),ve(ce,J,he,Oe,It)}if(ue(Oe)||ke(Oe))return ce=ce.get(he)||null,je(J,ce,Oe,It,null);if(typeof Oe.then=="function")return ve(ce,J,he,Zc(Oe),It);if(Oe.$$typeof===L)return ve(ce,J,he,Gc(J,Oe),It);Jc(J,Oe)}return null}function Ct(ce,J,he,Oe){for(var It=null,Dn=null,At=J,on=J=0,gn=null;At!==null&&on<he.length;on++){At.index>on?(gn=At,At=null):gn=At.sibling;var Nn=ge(ce,At,he[on],Oe);if(Nn===null){At===null&&(At=gn);break}e&&At&&Nn.alternate===null&&s(ce,At),J=m(Nn,J,on),Dn===null?It=Nn:Dn.sibling=Nn,Dn=Nn,At=gn}if(on===he.length)return o(ce,At),xn&&fa(ce,on),It;if(At===null){for(;on<he.length;on++)At=$e(ce,he[on],Oe),At!==null&&(J=m(At,J,on),Dn===null?It=At:Dn.sibling=At,Dn=At);return xn&&fa(ce,on),It}for(At=r(At);on<he.length;on++)gn=ve(At,ce,on,he[on],Oe),gn!==null&&(e&&gn.alternate!==null&&At.delete(gn.key===null?on:gn.key),J=m(gn,J,on),Dn===null?It=gn:Dn.sibling=gn,Dn=gn);return e&&At.forEach(function(qa){return s(ce,qa)}),xn&&fa(ce,on),It}function Yt(ce,J,he,Oe){if(he==null)throw Error(a(151));for(var It=null,Dn=null,At=J,on=J=0,gn=null,Nn=he.next();At!==null&&!Nn.done;on++,Nn=he.next()){At.index>on?(gn=At,At=null):gn=At.sibling;var qa=ge(ce,At,Nn.value,Oe);if(qa===null){At===null&&(At=gn);break}e&&At&&qa.alternate===null&&s(ce,At),J=m(qa,J,on),Dn===null?It=qa:Dn.sibling=qa,Dn=qa,At=gn}if(Nn.done)return o(ce,At),xn&&fa(ce,on),It;if(At===null){for(;!Nn.done;on++,Nn=he.next())Nn=$e(ce,Nn.value,Oe),Nn!==null&&(J=m(Nn,J,on),Dn===null?It=Nn:Dn.sibling=Nn,Dn=Nn);return xn&&fa(ce,on),It}for(At=r(At);!Nn.done;on++,Nn=he.next())Nn=ve(At,ce,on,Nn.value,Oe),Nn!==null&&(e&&Nn.alternate!==null&&At.delete(Nn.key===null?on:Nn.key),J=m(Nn,J,on),Dn===null?It=Nn:Dn.sibling=Nn,Dn=Nn);return e&&At.forEach(function(Tv){return s(ce,Tv)}),xn&&fa(ce,on),It}function ns(ce,J,he,Oe){if(typeof he=="object"&&he!==null&&he.type===j&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case w:e:{for(var It=he.key;J!==null;){if(J.key===It){if(It=he.type,It===j){if(J.tag===7){o(ce,J.sibling),Oe=f(J,he.props.children),Oe.return=ce,ce=Oe;break e}}else if(J.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===V&&ur(It)===J.type){o(ce,J.sibling),Oe=f(J,he.props),El(Oe,he),Oe.return=ce,ce=Oe;break e}o(ce,J);break}else s(ce,J);J=J.sibling}he.type===j?(Oe=ir(he.props.children,ce.mode,Oe,he.key),Oe.return=ce,ce=Oe):(Oe=Wc(he.type,he.key,he.props,null,ce.mode,Oe),El(Oe,he),Oe.return=ce,ce=Oe)}return v(ce);case S:e:{for(It=he.key;J!==null;){if(J.key===It)if(J.tag===4&&J.stateNode.containerInfo===he.containerInfo&&J.stateNode.implementation===he.implementation){o(ce,J.sibling),Oe=f(J,he.children||[]),Oe.return=ce,ce=Oe;break e}else{o(ce,J);break}else s(ce,J);J=J.sibling}Oe=Jd(he,ce.mode,Oe),Oe.return=ce,ce=Oe}return v(ce);case V:return he=ur(he),ns(ce,J,he,Oe)}if(ue(he))return Ct(ce,J,he,Oe);if(ke(he)){if(It=ke(he),typeof It!="function")throw Error(a(150));return he=It.call(he),Yt(ce,J,he,Oe)}if(typeof he.then=="function")return ns(ce,J,Zc(he),Oe);if(he.$$typeof===L)return ns(ce,J,Gc(ce,he),Oe);Jc(ce,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,J!==null&&J.tag===6?(o(ce,J.sibling),Oe=f(J,he),Oe.return=ce,ce=Oe):(o(ce,J),Oe=Zd(he,ce.mode,Oe),Oe.return=ce,ce=Oe),v(ce)):o(ce,J)}return function(ce,J,he,Oe){try{Tl=0;var It=ns(ce,J,he,Oe);return Hr=null,It}catch(At){if(At===Pr||At===Kc)throw At;var Dn=gi(29,At,null,ce.mode);return Dn.lanes=Oe,Dn.return=ce,Dn}finally{}}}var fr=f_(!0),h_=f_(!1),Na=!1;function ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ln&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Yc(e),Kp(e,null,o),s}return Vc(e,r,s,o),Yc(e)}function Al(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Rn(e,o)}}function mf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var pf=!1;function Dl(){if(pf){var e=Ir;if(e!==null)throw e}}function Nl(e,s,o,r){pf=!1;var f=e.updateQueue;Na=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var X=A,pe=X.next;X.next=null,v===null?m=pe:v.next=pe,v=X;var je=e.alternate;je!==null&&(je=je.updateQueue,A=je.lastBaseUpdate,A!==v&&(A===null?je.firstBaseUpdate=pe:A.next=pe,je.lastBaseUpdate=X))}if(m!==null){var $e=f.baseState;v=0,je=pe=X=null,A=m;do{var ge=A.lane&-536870913,ve=ge!==A.lane;if(ve?(_n&ge)===ge:(r&ge)===ge){ge!==0&&ge===$r&&(pf=!0),je!==null&&(je=je.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ct=e,Yt=A;ge=s;var ns=o;switch(Yt.tag){case 1:if(Ct=Yt.payload,typeof Ct=="function"){$e=Ct.call(ns,$e,ge);break e}$e=Ct;break e;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Yt.payload,ge=typeof Ct=="function"?Ct.call(ns,$e,ge):Ct,ge==null)break e;$e=x({},$e,ge);break e;case 2:Na=!0}}ge=A.callback,ge!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[ge]:ve.push(ge))}else ve={lane:ge,tag:A.tag,payload:A.payload,callback:A.callback,next:null},je===null?(pe=je=ve,X=$e):je=je.next=ve,v|=ge;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ve=A,A=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);je===null&&(X=$e),f.baseState=X,f.firstBaseUpdate=pe,f.lastBaseUpdate=je,m===null&&(f.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=$e}}function m_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function p_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)m_(o[e],s)}var Ur=R(null),eu=R(0);function __(e,s){e=Sa,le(eu,e),le(Ur,s),Sa=e|s.baseLanes}function _f(){le(eu,Sa),le(Ur,Ur.current)}function gf(){Sa=eu.current,oe(Ur),oe(eu)}var yi=R(null),Ri=null;function La(e){var s=e.alternate;le(Xs,Xs.current&1),le(yi,e),Ri===null&&(s===null||Ur.current!==null||s.memoizedState!==null)&&(Ri=e)}function yf(e){le(Xs,Xs.current),le(yi,e),Ri===null&&(Ri=e)}function g_(e){e.tag===22?(le(Xs,Xs.current),le(yi,e),Ri===null&&(Ri=e)):Oa()}function Oa(){le(Xs,Xs.current),le(yi,yi.current)}function xi(e){oe(yi),Ri===e&&(Ri=null),oe(Xs)}var Xs=R(0);function tu(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ch(o)||kh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pa=0,tn=null,es=null,Js=null,nu=!1,Vr=!1,hr=!1,su=0,Rl=0,Yr=null,y2=0;function zs(){throw Error(a(321))}function xf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!at(e[o],s[o]))return!1;return!0}function bf(e,s,o,r,f,m){return pa=m,tn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=e===null||e.memoizedState===null?eg:Lf,hr=!1,m=o(r,f),hr=!1,Vr&&(m=x_(s,o,r,f)),y_(e),m}function y_(e){$.H=Ol;var s=es!==null&&es.next!==null;if(pa=0,Js=es=tn=null,nu=!1,Rl=0,Yr=null,s)throw Error(a(300));e===null||eo||(e=e.dependencies,e!==null&&Xc(e)&&(eo=!0))}function x_(e,s,o,r){tn=e;var f=0;do{if(Vr&&(Yr=null),Rl=0,Vr=!1,25<=f)throw Error(a(301));if(f+=1,Js=es=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=tg,m=s(o,r)}while(Vr);return m}function x2(){var e=$.H,s=e.useState()[0];return s=typeof s.then=="function"?Bl(s):s,e=e.useState()[0],(es!==null?es.memoizedState:null)!==e&&(tn.flags|=1024),s}function vf(){var e=su!==0;return su=0,e}function wf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function Sf(e){if(nu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}nu=!1}pa=0,Js=es=tn=null,Vr=!1,Rl=su=0,Yr=null}function qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Js===null?tn.memoizedState=Js=e:Js=Js.next=e,Js}function Gs(){if(es===null){var e=tn.alternate;e=e!==null?e.memoizedState:null}else e=es.next;var s=Js===null?tn.memoizedState:Js.next;if(s!==null)Js=s,es=e;else{if(e===null)throw tn.alternate===null?Error(a(467)):Error(a(310));es=e,e={memoizedState:es.memoizedState,baseState:es.baseState,baseQueue:es.baseQueue,queue:es.queue,next:null},Js===null?tn.memoizedState=Js=e:Js=Js.next=e}return Js}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var s=Rl;return Rl+=1,Yr===null&&(Yr=[]),e=c_(Yr,e,s),s=tn,(Js===null?s.memoizedState:Js.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?eg:Lf),e}function iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===L)return To(e)}throw Error(a(438,String(e)))}function Cf(e){var s=null,o=tn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=tn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=ou(),tn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=ae;return s.index++,o}function _a(e,s){return typeof s=="function"?s(e):s}function au(e){var s=Gs();return kf(s,es,e)}function kf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var A=v=null,X=null,pe=s,je=!1;do{var $e=pe.lane&-536870913;if($e!==pe.lane?(_n&$e)===$e:(pa&$e)===$e){var ge=pe.revertLane;if(ge===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),$e===$r&&(je=!0);else if((pa&ge)===ge){pe=pe.next,ge===$r&&(je=!0);continue}else $e={lane:0,revertLane:pe.revertLane,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},X===null?(A=X=$e,v=m):X=X.next=$e,tn.lanes|=ge,Ia|=ge;$e=pe.action,hr&&o(m,$e),m=pe.hasEagerState?pe.eagerState:o(m,$e)}else ge={lane:$e,revertLane:pe.revertLane,gesture:pe.gesture,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},X===null?(A=X=ge,v=m):X=X.next=ge,tn.lanes|=$e,Ia|=$e;pe=pe.next}while(pe!==null&&pe!==s);if(X===null?v=m:X.next=A,!at(m,e.memoizedState)&&(eo=!0,je&&(o=Ir,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=X,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jf(e){var s=Gs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);at(m,s.memoizedState)||(eo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function b_(e,s,o){var r=tn,f=Gs(),m=xn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!at((es||f).memoizedState,o);if(v&&(f.memoizedState=o,eo=!0),f=f.queue,Ef(S_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Js!==null&&Js.memoizedState.tag&1){if(r.flags|=2048,Wr(9,{destroy:void 0},w_.bind(null,r,f,o,s),null),rs===null)throw Error(a(349));m||(pa&127)!==0||v_(r,s,o)}return o}function v_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=tn.updateQueue,s===null?(s=ou(),tn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function w_(e,s,o,r){s.value=o,s.getSnapshot=r,C_(s)&&k_(e)}function S_(e,s,o){return o(function(){C_(s)&&k_(e)})}function C_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!at(e,o)}catch{return!0}}function k_(e){var s=or(e,2);s!==null&&ui(s,e,2)}function Mf(e){var s=qo();if(typeof e=="function"){var o=e;if(e=o(),hr){Le(!0);try{o()}finally{Le(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},s}function j_(e,s,o,r){return e.baseState=o,kf(e,es,typeof r=="function"?r:_a)}function b2(e,s,o,r,f){if(cu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};$.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,M_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function M_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=$.T,v={};$.T=v;try{var A=o(f,r),X=$.S;X!==null&&X(v,A),T_(e,s,A)}catch(pe){Tf(e,s,pe)}finally{m!==null&&v.types!==null&&(m.types=v.types),$.T=m}}else try{m=o(f,r),T_(e,s,m)}catch(pe){Tf(e,s,pe)}}function T_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){E_(e,s,r)},function(r){return Tf(e,s,r)}):E_(e,s,o)}function E_(e,s,o){s.status="fulfilled",s.value=o,A_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,M_(e,o)))}function Tf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,A_(s),s=s.next;while(s!==r)}e.action=null}function A_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function D_(e,s){return s}function N_(e,s){if(xn){var o=rs.formState;if(o!==null){e:{var r=tn;if(xn){if(Ss){t:{for(var f=Ss,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=Bi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ss=Bi(f.nextSibling),r=f.data==="F!";break e}}Aa(r)}r=!1}r&&(s=o[0])}}return o=qo(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D_,lastRenderedState:s},o.queue=r,o=Q_.bind(null,tn,r),r.dispatch=o,r=Mf(!1),m=Bf.bind(null,tn,!1,r.queue),r=qo(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=b2.bind(null,tn,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function R_(e){var s=Gs();return B_(s,es,e)}function B_(e,s,o){if(s=kf(e,s,D_)[0],e=au(_a)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Bl(s)}catch(v){throw v===Pr?Kc:v}else r=s;s=Gs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(tn.flags|=2048,Wr(9,{destroy:void 0},v2.bind(null,f,o),null)),[r,m,e]}function v2(e,s){e.action=s}function L_(e){var s=Gs(),o=es;if(o!==null)return B_(s,o,e);Gs(),s=s.memoizedState,o=Gs();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Wr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=tn.updateQueue,s===null&&(s=ou(),tn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function O_(){return Gs().memoizedState}function ru(e,s,o,r){var f=qo();tn.flags|=e,f.memoizedState=Wr(1|s,{destroy:void 0},o,r===void 0?null:r)}function lu(e,s,o,r){var f=Gs();r=r===void 0?null:r;var m=f.memoizedState.inst;es!==null&&r!==null&&xf(r,es.memoizedState.deps)?f.memoizedState=Wr(s,m,o,r):(tn.flags|=e,f.memoizedState=Wr(1|s,m,o,r))}function z_(e,s){ru(8390656,8,e,s)}function Ef(e,s){lu(2048,8,e,s)}function w2(e){tn.flags|=4;var s=tn.updateQueue;if(s===null)s=ou(),tn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function $_(e){var s=Gs().memoizedState;return w2({ref:s,nextImpl:e}),function(){if((Ln&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function I_(e,s){return lu(4,2,e,s)}function P_(e,s){return lu(4,4,e,s)}function H_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function U_(e,s,o){o=o!=null?o.concat([e]):null,lu(4,4,H_.bind(null,s,e),o)}function Af(){}function V_(e,s){var o=Gs();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&xf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function Y_(e,s){var o=Gs();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&xf(s,r[1]))return r[0];if(r=e(),hr){Le(!0);try{e()}finally{Le(!1)}}return o.memoizedState=[r,s],r}function Df(e,s,o){return o===void 0||(pa&1073741824)!==0&&(_n&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Wg(),tn.lanes|=e,Ia|=e,o)}function W_(e,s,o,r){return at(o,s)?o:Ur.current!==null?(e=Df(e,o,r),at(e,s)||(eo=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(_n&261930)===0?(eo=!0,e.memoizedState=o):(e=Wg(),tn.lanes|=e,Ia|=e,s)}function F_(e,s,o,r,f){var m=se.p;se.p=m!==0&&8>m?m:8;var v=$.T,A={};$.T=A,Bf(e,!1,s,o);try{var X=f(),pe=$.S;if(pe!==null&&pe(A,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var je=g2(X,r);Ll(e,s,je,wi(e))}else Ll(e,s,r,wi(e))}catch($e){Ll(e,s,{then:function(){},status:"rejected",reason:$e},wi())}finally{se.p=m,v!==null&&A.types!==null&&(v.types=A.types),$.T=v}}function S2(){}function Nf(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=X_(e).queue;F_(e,f,s,W,o===null?S2:function(){return G_(e),o(r)})}function X_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:W},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function G_(e){var s=X_(e);s.next===null&&(s=e.alternate.memoizedState),Ll(e,s.next.queue,{},wi())}function Rf(){return To(Zl)}function q_(){return Gs().memoizedState}function K_(){return Gs().memoizedState}function C2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=wi();e=Ra(o);var r=Ba(s,e,o);r!==null&&(ui(r,s,o),Al(r,s,o)),s={cache:lf()},e.payload=s;return}s=s.return}}function k2(e,s,o){var r=wi();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cu(e)?Z_(s,o):(o=Kd(e,s,o,r),o!==null&&(ui(o,e,r),J_(o,s,r)))}function Q_(e,s,o){var r=wi();Ll(e,s,o,r)}function Ll(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(cu(e))Z_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,at(A,v))return Vc(e,s,f,0),rs===null&&Uc(),!1}catch{}finally{}if(o=Kd(e,s,f,r),o!==null)return ui(o,e,r),J_(o,s,r),!0}return!1}function Bf(e,s,o,r){if(r={lane:2,revertLane:fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(s)throw Error(a(479))}else s=Kd(e,o,r,2),s!==null&&ui(s,e,2)}function cu(e){var s=e.alternate;return e===tn||s!==null&&s===tn}function Z_(e,s){Vr=nu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function J_(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,Rn(e,o)}}var Ol={readContext:To,use:iu,useCallback:zs,useContext:zs,useEffect:zs,useImperativeHandle:zs,useLayoutEffect:zs,useInsertionEffect:zs,useMemo:zs,useReducer:zs,useRef:zs,useState:zs,useDebugValue:zs,useDeferredValue:zs,useTransition:zs,useSyncExternalStore:zs,useId:zs,useHostTransitionStatus:zs,useFormState:zs,useActionState:zs,useOptimistic:zs,useMemoCache:zs,useCacheRefresh:zs};Ol.useEffectEvent=zs;var eg={readContext:To,use:iu,useCallback:function(e,s){return qo().memoizedState=[e,s===void 0?null:s],e},useContext:To,useEffect:z_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,ru(4194308,4,H_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return ru(4194308,4,e,s)},useInsertionEffect:function(e,s){ru(4,2,e,s)},useMemo:function(e,s){var o=qo();s=s===void 0?null:s;var r=e();if(hr){Le(!0);try{e()}finally{Le(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=qo();if(o!==void 0){var f=o(s);if(hr){Le(!0);try{o(s)}finally{Le(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=k2.bind(null,tn,e),[r.memoizedState,e]},useRef:function(e){var s=qo();return e={current:e},s.memoizedState=e},useState:function(e){e=Mf(e);var s=e.queue,o=Q_.bind(null,tn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Af,useDeferredValue:function(e,s){var o=qo();return Df(o,e,s)},useTransition:function(){var e=Mf(!1);return e=F_.bind(null,tn,e.queue,!0,!1),qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=tn,f=qo();if(xn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),rs===null)throw Error(a(349));(_n&127)!==0||v_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,z_(S_.bind(null,r,m,e),[e]),r.flags|=2048,Wr(9,{destroy:void 0},w_.bind(null,r,m,o,s),null),o},useId:function(){var e=qo(),s=rs.identifierPrefix;if(xn){var o=na,r=ta;o=(r&~(1<<32-bt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=su++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=y2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Rf,useFormState:N_,useActionState:N_,useOptimistic:function(e){var s=qo();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Bf.bind(null,tn,!0,o),o.dispatch=s,[e,s]},useMemoCache:Cf,useCacheRefresh:function(){return qo().memoizedState=C2.bind(null,tn)},useEffectEvent:function(e){var s=qo(),o={impl:e};return s.memoizedState=o,function(){if((Ln&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Lf={readContext:To,use:iu,useCallback:V_,useContext:To,useEffect:Ef,useImperativeHandle:U_,useInsertionEffect:I_,useLayoutEffect:P_,useMemo:Y_,useReducer:au,useRef:O_,useState:function(){return au(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Gs();return W_(o,es.memoizedState,e,s)},useTransition:function(){var e=au(_a)[0],s=Gs().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:b_,useId:q_,useHostTransitionStatus:Rf,useFormState:R_,useActionState:R_,useOptimistic:function(e,s){var o=Gs();return j_(o,es,e,s)},useMemoCache:Cf,useCacheRefresh:K_};Lf.useEffectEvent=$_;var tg={readContext:To,use:iu,useCallback:V_,useContext:To,useEffect:Ef,useImperativeHandle:U_,useInsertionEffect:I_,useLayoutEffect:P_,useMemo:Y_,useReducer:jf,useRef:O_,useState:function(){return jf(_a)},useDebugValue:Af,useDeferredValue:function(e,s){var o=Gs();return es===null?Df(o,e,s):W_(o,es.memoizedState,e,s)},useTransition:function(){var e=jf(_a)[0],s=Gs().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:b_,useId:q_,useHostTransitionStatus:Rf,useFormState:L_,useActionState:L_,useOptimistic:function(e,s){var o=Gs();return es!==null?j_(o,es,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:K_};tg.useEffectEvent=$_;function Of(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var zf={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=wi(),f=Ra(r);f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(ui(s,e,r),Al(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=wi(),f=Ra(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ba(e,f,r),s!==null&&(ui(s,e,r),Al(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=wi(),r=Ra(o);r.tag=2,s!=null&&(r.callback=s),s=Ba(e,r,o),s!==null&&(ui(s,e,o),Al(s,e,o))}};function ng(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!ut(o,r)||!ut(f,m):!0}function sg(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&zf.enqueueReplaceState(s,s.state,null)}function mr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function og(e){Hc(e)}function ig(e){console.error(e)}function ag(e){Hc(e)}function uu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function rg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function $f(e,s,o){return o=Ra(o),o.tag=3,o.payload={element:null},o.callback=function(){uu(e,s)},o}function lg(e){return e=Ra(e),e.tag=3,e}function cg(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){rg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){rg(s,o,r),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function j2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&zr(s,o,f,!0),o=yi.current,o!==null){switch(o.tag){case 31:case 13:return Ri===null?wu():o.alternate===null&&$s===0&&($s=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),ch(e,r,f)),!1;case 22:return o.flags|=65536,r===Qc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),ch(e,r,f)),!1}throw Error(a(435,o.tag))}return ch(e,r,f),wu(),!1}if(xn)return s=yi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==nf&&(e=Error(a(422),{cause:r}),kl(Ei(e,o)))):(r!==nf&&(s=Error(a(423),{cause:r}),kl(Ei(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=Ei(r,o),f=$f(e.stateNode,r,f),mf(e,f),$s!==4&&($s=2)),!1;var m=Error(a(520),{cause:r});if(m=Ei(m,o),Yl===null?Yl=[m]:Yl.push(m),$s!==4&&($s=2),s===null)return!0;r=Ei(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=$f(o.stateNode,r,e),mf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=lg(f),cg(f,e,o,r),mf(o,f),!1}o=o.return}while(o!==null);return!1}var If=Error(a(461)),eo=!1;function Eo(e,s,o,r){s.child=e===null?h_(s,null,o,r):fr(s,e.child,o,r)}function ug(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return lr(s),r=bf(e,s,o,v,m,f),A=vf(),e!==null&&!eo?(wf(e,s,f),ga(e,s,f)):(xn&&A&&ef(s),s.flags|=1,Eo(e,s,r,f),s.child)}function dg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,fg(e,s,m,r,f)):(e=Wc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Xf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:ut,o(v,r)&&e.ref===s.ref)return ga(e,s,f)}return s.flags|=1,e=da(m,r),e.ref=s.ref,e.return=s,s.child=e}function fg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(ut(m,r)&&e.ref===s.ref)if(eo=!1,s.pendingProps=r=m,Xf(e,f))(e.flags&131072)!==0&&(eo=!0);else return s.lanes=e.lanes,ga(e,s,f)}return Pf(e,s,o,r,f)}function hg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return mg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&qc(s,m!==null?m.cachePool:null),m!==null?__(s,m):_f(),g_(s);else return r=s.lanes=536870912,mg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(qc(s,m.cachePool),__(s,m),Oa(),s.memoizedState=null):(e!==null&&qc(s,null),_f(),Oa());return Eo(e,s,f,o),s.child}function zl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function mg(e,s,o,r,f){var m=uf();return m=m===null?null:{parent:Zs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&qc(s,null),_f(),g_(s),e!==null&&zr(e,s,r,!0),s.childLanes=f,null}function du(e,s){return s=hu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function pg(e,s,o){return fr(s,e.child,null,o),e=du(s,s.pendingProps),e.flags|=2,xi(s),s.memoizedState=null,e}function M2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(xn){if(r.mode==="hidden")return e=du(s,r),s.lanes=536870912,zl(null,e);if(yf(s),(e=Ss)?(e=M0(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=Zp(e),o.return=s,s.child=o,Mo=s,Ss=null)):e=null,e===null)throw Aa(s);return s.lanes=536870912,null}return du(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(yf(s),f)if(s.flags&256)s.flags&=-257,s=pg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(eo||zr(e,s,o,!1),f=(o&e.childLanes)!==0,eo||f){if(r=rs,r!==null&&(v=kn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,or(e,v),ui(r,e,v),If;wu(),s=pg(e,s,o)}else e=m.treeContext,Ss=Bi(v.nextSibling),Mo=s,xn=!0,Ea=null,Ni=!1,e!==null&&t_(s,e),s=du(s,r),s.flags|=4096;return s}return e=da(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function fu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function Pf(e,s,o,r,f){return lr(s),o=bf(e,s,o,r,void 0,f),r=vf(),e!==null&&!eo?(wf(e,s,f),ga(e,s,f)):(xn&&r&&ef(s),s.flags|=1,Eo(e,s,o,f),s.child)}function _g(e,s,o,r,f,m){return lr(s),s.updateQueue=null,o=x_(s,r,o,f),y_(e),r=vf(),e!==null&&!eo?(wf(e,s,m),ga(e,s,m)):(xn&&r&&ef(s),s.flags|=1,Eo(e,s,o,m),s.child)}function gg(e,s,o,r,f){if(lr(s),s.stateNode===null){var m=Rr,v=o.contextType;typeof v=="object"&&v!==null&&(m=To(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},ff(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?To(v):Rr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Of(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&zf.enqueueReplaceState(m,m.state,null),Nl(s,r,m,f),Dl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var A=s.memoizedProps,X=mr(o,A);m.props=X;var pe=m.context,je=o.contextType;v=Rr,typeof je=="object"&&je!==null&&(v=To(je));var $e=o.getDerivedStateFromProps;je=typeof $e=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,je||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||pe!==v)&&sg(s,m,r,v),Na=!1;var ge=s.memoizedState;m.state=ge,Nl(s,r,m,f),Dl(),pe=s.memoizedState,A||ge!==pe||Na?(typeof $e=="function"&&(Of(s,o,$e,r),pe=s.memoizedState),(X=Na||ng(s,o,X,r,ge,pe,v))?(je||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=pe),m.props=r,m.state=pe,m.context=v,r=X):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,hf(e,s),v=s.memoizedProps,je=mr(o,v),m.props=je,$e=s.pendingProps,ge=m.context,pe=o.contextType,X=Rr,typeof pe=="object"&&pe!==null&&(X=To(pe)),A=o.getDerivedStateFromProps,(pe=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==$e||ge!==X)&&sg(s,m,r,X),Na=!1,ge=s.memoizedState,m.state=ge,Nl(s,r,m,f),Dl();var ve=s.memoizedState;v!==$e||ge!==ve||Na||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof A=="function"&&(Of(s,o,A,r),ve=s.memoizedState),(je=Na||ng(s,o,je,r,ge,ve,X)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(pe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,X)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=X,r=je):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ge===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,fu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=fr(s,e.child,null,f),s.child=fr(s,null,o,f)):Eo(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ga(e,s,f),e}function yg(e,s,o,r){return ar(),s.flags|=256,Eo(e,s,o,r),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:r_()}}function Vf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=vi),e}function xg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Xs.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(xn){if(f?La(s):Oa(),(e=Ss)?(e=M0(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},o=Zp(e),o.return=s,s.child=o,Mo=s,Ss=null)):e=null,e===null)throw Aa(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var A=r.children;return r=r.fallback,f?(Oa(),f=s.mode,A=hu({mode:"hidden",children:A},f),r=ir(r,f,o,null),A.return=s,r.return=s,A.sibling=r,s.child=A,r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,zl(null,r)):(La(s),Yf(s,A))}var X=e.memoizedState;if(X!==null&&(A=X.dehydrated,A!==null)){if(m)s.flags&256?(La(s),s.flags&=-257,s=Wf(e,s,o)):s.memoizedState!==null?(Oa(),s.child=e.child,s.flags|=128,s=null):(Oa(),A=r.fallback,f=s.mode,r=hu({mode:"visible",children:r.children},f),A=ir(A,f,o,null),A.flags|=2,r.return=s,A.return=s,r.sibling=A,s.child=r,fr(s,e.child,null,o),r=s.child,r.memoizedState=Uf(o),r.childLanes=Vf(e,v,o),s.memoizedState=Hf,s=zl(null,r));else if(La(s),kh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var pe=v.dgst;v=pe,r=Error(a(419)),r.stack="",r.digest=v,kl({value:r,source:null,stack:null}),s=Wf(e,s,o)}else if(eo||zr(e,s,o,!1),v=(o&e.childLanes)!==0,eo||v){if(v=rs,v!==null&&(r=kn(v,o),r!==0&&r!==X.retryLane))throw X.retryLane=r,or(e,r),ui(v,e,r),If;Ch(A)||wu(),s=Wf(e,s,o)}else Ch(A)?(s.flags|=192,s.child=e.child,s=null):(e=X.treeContext,Ss=Bi(A.nextSibling),Mo=s,xn=!0,Ea=null,Ni=!1,e!==null&&t_(s,e),s=Yf(s,r.children),s.flags|=4096);return s}return f?(Oa(),A=r.fallback,f=s.mode,X=e.child,pe=X.sibling,r=da(X,{mode:"hidden",children:r.children}),r.subtreeFlags=X.subtreeFlags&65011712,pe!==null?A=da(pe,A):(A=ir(A,f,o,null),A.flags|=2),A.return=s,r.return=s,r.sibling=A,s.child=r,zl(null,r),r=s.child,A=e.child.memoizedState,A===null?A=Uf(o):(f=A.cachePool,f!==null?(X=Zs._currentValue,f=f.parent!==X?{parent:X,pool:X}:f):f=r_(),A={baseLanes:A.baseLanes|o,cachePool:f}),r.memoizedState=A,r.childLanes=Vf(e,v,o),s.memoizedState=Hf,zl(e.child,r)):(La(s),o=e.child,e=o.sibling,o=da(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Yf(e,s){return s=hu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function hu(e,s){return e=gi(22,e,null,s),e.lanes=0,e}function Wf(e,s,o){return fr(s,e.child,null,o),e=Yf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function bg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),af(e.return,s,o)}function Ff(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function vg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Xs.current,A=(v&2)!==0;if(A?(v=v&1|2,s.flags|=128):v&=1,le(Xs,v),Eo(e,s,r,o),r=xn?Cl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,o,s);else if(e.tag===19)bg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&tu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Ff(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&tu(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Ff(s,!0,o,null,m,r);break;case"together":Ff(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ga(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ia|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(zr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=da(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=da(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Xf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function T2(e,s,o){switch(s.tag){case 3:tt(s,s.stateNode.containerInfo),Da(s,Zs,e.memoizedState.cache),ar();break;case 27:case 5:Ot(s);break;case 4:tt(s,s.stateNode.containerInfo);break;case 10:Da(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(La(s),s.flags|=128,null):(o&s.child.childLanes)!==0?xg(e,s,o):(La(s),e=ga(e,s,o),e!==null?e.sibling:null);La(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||(zr(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return vg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),le(Xs,Xs.current),r)break;return null;case 22:return s.lanes=0,hg(e,s,o,s.pendingProps);case 24:Da(s,Zs,e.memoizedState.cache)}return ga(e,s,o)}function wg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)eo=!0;else{if(!Xf(e,o)&&(s.flags&128)===0)return eo=!1,T2(e,s,o);eo=(e.flags&131072)!==0}else eo=!1,xn&&(s.flags&1048576)!==0&&e_(s,Cl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=ur(s.elementType),s.type=e,typeof e=="function")Qd(e)?(r=mr(e,r),s.tag=1,s=gg(null,s,e,r,o)):(s.tag=0,s=Pf(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===N){s.tag=11,s=ug(null,s,e,r,o);break e}else if(f===F){s.tag=14,s=dg(null,s,e,r,o);break e}}throw s=Q(e)||e,Error(a(306,s,""))}}return s;case 0:return Pf(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=mr(r,s.pendingProps),gg(e,s,r,f,o);case 3:e:{if(tt(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,hf(e,s),Nl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Da(s,Zs,r),r!==m.cache&&rf(s,[Zs],o,!0),Dl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=yg(e,s,r,o);break e}else if(r!==f){f=Ei(Error(a(424)),s),kl(f),s=yg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ss=Bi(e.firstChild),Mo=s,xn=!0,Ea=null,Ni=!0,o=h_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ar(),r===f){s=ga(e,s,o);break e}Eo(e,s,r,o)}s=s.child}return s;case 26:return fu(e,s),e===null?(o=R0(s.type,null,s.pendingProps,null))?s.memoizedState=o:xn||(o=s.type,e=s.pendingProps,r=Eu(Pe.current).createElement(o),r[rn]=s,r[Tn]=e,Ao(r,o,e),vn(r),s.stateNode=r):s.memoizedState=R0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Ot(s),e===null&&xn&&(r=s.stateNode=A0(s.type,s.pendingProps,Pe.current),Mo=s,Ni=!0,f=Ss,Ya(s.type)?(jh=f,Ss=Bi(r.firstChild)):Ss=f),Eo(e,s,s.pendingProps.children,o),fu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&xn&&((f=r=Ss)&&(r=ov(r,s.type,s.pendingProps,Ni),r!==null?(s.stateNode=r,Mo=s,Ss=Bi(r.firstChild),Ni=!1,f=!0):f=!1),f||Aa(s)),Ot(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,vh(f,m)?r=null:v!==null&&vh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=bf(e,s,x2,null,null,o),Zl._currentValue=f),fu(e,s),Eo(e,s,r,o),s.child;case 6:return e===null&&xn&&((e=o=Ss)&&(o=iv(o,s.pendingProps,Ni),o!==null?(s.stateNode=o,Mo=s,Ss=null,e=!0):e=!1),e||Aa(s)),null;case 13:return xg(e,s,o);case 4:return tt(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=fr(s,null,r,o):Eo(e,s,r,o),s.child;case 11:return ug(e,s,s.type,s.pendingProps,o);case 7:return Eo(e,s,s.pendingProps,o),s.child;case 8:return Eo(e,s,s.pendingProps.children,o),s.child;case 12:return Eo(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Da(s,s.type,r.value),Eo(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,lr(s),f=To(f),r=r(f),s.flags|=1,Eo(e,s,r,o),s.child;case 14:return dg(e,s,s.type,s.pendingProps,o);case 15:return fg(e,s,s.type,s.pendingProps,o);case 19:return vg(e,s,o);case 31:return M2(e,s,o);case 22:return hg(e,s,o,s.pendingProps);case 24:return lr(s),r=To(Zs),e===null?(f=uf(),f===null&&(f=rs,m=lf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},ff(s),Da(s,Zs,f)):((e.lanes&o)!==0&&(hf(e,s),Nl(s,null,null,o),Dl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Da(s,Zs,r)):(r=m.cache,Da(s,Zs,r),r!==f.cache&&rf(s,[Zs],o,!0))),Eo(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function ya(e){e.flags|=4}function Gf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(qg())e.flags|=8192;else throw dr=Qc,df}else e.flags&=-16777217}function Sg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$0(s))if(qg())e.flags|=8192;else throw dr=Qc,df}function mu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?_t():536870912,e.lanes|=s,qr|=s)}function $l(e,s){if(!xn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Cs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function E2(e,s,o){var r=s.pendingProps;switch(tf(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cs(s),null;case 1:return Cs(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ma(Zs),dt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Or(s)?ya(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sf())),Cs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(ya(s),m!==null?(Cs(s),Sg(s,m)):(Cs(s),Gf(s,f,null,r,o))):m?m!==e.memoizedState?(ya(s),Cs(s),Sg(s,m)):(Cs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&ya(s),Cs(s),Gf(s,f,e,r,o)),null;case 27:if(ht(s),o=Pe.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Cs(s),null}e=de.current,Or(s)?n_(s):(e=A0(f,r,o),s.stateNode=e,ya(s))}return Cs(s),null;case 5:if(ht(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Cs(s),null}if(m=de.current,Or(s))n_(s);else{var v=Eu(Pe.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[rn]=s,m[Tn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(Ao(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ya(s)}}return Cs(s),Gf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&ya(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=Pe.current,Or(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=Mo,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[rn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||x0(e.nodeValue,o)),e||Aa(s,!0)}else e=Eu(e).createTextNode(r),e[rn]=s,s.stateNode=e}return Cs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=Or(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[rn]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Cs(s),e=!1}else o=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(xi(s),s):(xi(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Cs(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Or(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[rn]=s}else ar(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Cs(s),f=!1}else f=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(xi(s),s):(xi(s),null)}return xi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),mu(s,s.updateQueue),Cs(s),null);case 4:return dt(),e===null&&_h(s.stateNode.containerInfo),Cs(s),null;case 10:return ma(s.type),Cs(s),null;case 19:if(oe(Xs),r=s.memoizedState,r===null)return Cs(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)$l(r,!1);else{if($s!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=tu(e),m!==null){for(s.flags|=128,$l(r,!1),e=m.updateQueue,s.updateQueue=e,mu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Qp(o,e),o=o.sibling;return le(Xs,Xs.current&1|2),xn&&fa(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&rt()>xu&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304)}else{if(!f)if(e=tu(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,mu(s,e),$l(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!xn)return Cs(s),null}else 2*rt()-r.renderingStartTime>xu&&o!==536870912&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=rt(),e.sibling=null,o=Xs.current,le(Xs,f?o&1|2:o&1),xn&&fa(s,r.treeForkCount),e):(Cs(s),null);case 22:case 23:return xi(s),gf(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Cs(s),s.subtreeFlags&6&&(s.flags|=8192)):Cs(s),o=s.updateQueue,o!==null&&mu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&oe(cr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ma(Zs),Cs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function A2(e,s){switch(tf(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ma(Zs),dt(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return ht(s),null;case 31:if(s.memoizedState!==null){if(xi(s),s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(xi(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));ar()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return oe(Xs),null;case 4:return dt(),null;case 10:return ma(s.type),null;case 22:case 23:return xi(s),gf(),e!==null&&oe(cr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ma(Zs),null;case 25:return null;default:return null}}function Cg(e,s){switch(tf(s),s.tag){case 3:ma(Zs),dt();break;case 26:case 27:case 5:ht(s);break;case 4:dt();break;case 31:s.memoizedState!==null&&xi(s);break;case 13:xi(s);break;case 19:oe(Xs);break;case 10:ma(s.type);break;case 22:case 23:xi(s),gf(),e!==null&&oe(cr);break;case 24:ma(Zs)}}function Il(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(A){Wn(s,s.return,A)}}function za(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var X=o,pe=A;try{pe()}catch(je){Wn(f,X,je)}}}r=r.next}while(r!==m)}}catch(je){Wn(s,s.return,je)}}function kg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{p_(s,o)}catch(r){Wn(e,e.return,r)}}}function jg(e,s,o){o.props=mr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){Wn(e,s,r)}}function Pl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){Wn(e,s,f)}}function sa(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){Wn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Wn(e,s,f)}else o.current=null}function Mg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){Wn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;Z2(r,e.type,o,s),r[Tn]=s}catch(f){Wn(e,e.return,f)}}function Tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ao));else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Qf(e,s,o),e=e.sibling;e!==null;)Qf(e,s,o),e=e.sibling}function pu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ya(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(pu(e,s,o),e=e.sibling;e!==null;)pu(e,s,o),e=e.sibling}function Eg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Ao(s,r,o),s[rn]=e,s[Tn]=o}catch(m){Wn(e,e.return,m)}}var xa=!1,to=!1,Zf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,wo=null;function D2(e,s){if(e=e.containerInfo,xh=Ou,e=bn(e),Hn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,A=-1,X=-1,pe=0,je=0,$e=e,ge=null;t:for(;;){for(var ve;$e!==o||f!==0&&$e.nodeType!==3||(A=v+f),$e!==m||r!==0&&$e.nodeType!==3||(X=v+r),$e.nodeType===3&&(v+=$e.nodeValue.length),(ve=$e.firstChild)!==null;)ge=$e,$e=ve;for(;;){if($e===e)break t;if(ge===o&&++pe===f&&(A=v),ge===m&&++je===r&&(X=v),(ve=$e.nextSibling)!==null)break;$e=ge,ge=$e.parentNode}$e=ve}o=A===-1||X===-1?null:{start:A,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(bh={focusedElem:e,selectionRange:o},Ou=!1,wo=s;wo!==null;)if(s=wo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,wo=e;else for(;wo!==null;){switch(s=wo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Ct=mr(o.type,f);e=r.getSnapshotBeforeUpdate(Ct,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){Wn(o,o.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)Sh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,wo=e;break}wo=s.return}}function Dg(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:va(e,o),r&4&&Il(5,o);break;case 1:if(va(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Wn(o,o.return,v)}else{var f=mr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wn(o,o.return,v)}}r&64&&kg(o),r&512&&Pl(o,o.return);break;case 3:if(va(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{p_(e,s)}catch(v){Wn(o,o.return,v)}}break;case 27:s===null&&r&4&&Eg(o);case 26:case 5:va(e,o),s===null&&r&4&&Mg(o),r&512&&Pl(o,o.return);break;case 12:va(e,o);break;case 31:va(e,o),r&4&&Bg(e,o);break;case 13:va(e,o),r&4&&Lg(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=P2.bind(null,o),av(e,o))));break;case 22:if(r=o.memoizedState!==null||xa,!r){s=s!==null&&s.memoizedState!==null||to,f=xa;var m=to;xa=r,(to=s)&&!m?wa(e,o,(o.subtreeFlags&8772)!==0):va(e,o),xa=f,to=m}break;case 30:break;default:va(e,o)}}function Ng(e){var s=e.alternate;s!==null&&(e.alternate=null,Ng(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ti(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Es=null,ai=!1;function ba(e,s,o){for(o=o.child;o!==null;)Rg(e,s,o),o=o.sibling}function Rg(e,s,o){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Ke,o)}catch{}switch(o.tag){case 26:to||sa(o,s),ba(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:to||sa(o,s);var r=Es,f=ai;Ya(o.type)&&(Es=o.stateNode,ai=!1),ba(e,s,o),ql(o.stateNode),Es=r,ai=f;break;case 5:to||sa(o,s);case 6:if(r=Es,f=ai,Es=null,ba(e,s,o),Es=r,ai=f,Es!==null)if(ai)try{(Es.nodeType===9?Es.body:Es.nodeName==="HTML"?Es.ownerDocument.body:Es).removeChild(o.stateNode)}catch(m){Wn(o,s,m)}else try{Es.removeChild(o.stateNode)}catch(m){Wn(o,s,m)}break;case 18:Es!==null&&(ai?(e=Es,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),sl(e)):k0(Es,o.stateNode));break;case 4:r=Es,f=ai,Es=o.stateNode.containerInfo,ai=!0,ba(e,s,o),Es=r,ai=f;break;case 0:case 11:case 14:case 15:za(2,o,s),to||za(4,o,s),ba(e,s,o);break;case 1:to||(sa(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&jg(o,s,r)),ba(e,s,o);break;case 21:ba(e,s,o);break;case 22:to=(r=to)||o.memoizedState!==null,ba(e,s,o),to=r;break;default:ba(e,s,o)}}function Bg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sl(e)}catch(o){Wn(s,s.return,o)}}}function Lg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(o){Wn(s,s.return,o)}}function N2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ag),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ag),s;default:throw Error(a(435,e.tag))}}function _u(e,s){var o=N2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=H2.bind(null,e,r);r.then(f,f)}})}function ri(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){Es=A.stateNode,ai=!1;break e}break;case 5:Es=A.stateNode,ai=!1;break e;case 3:case 4:Es=A.stateNode.containerInfo,ai=!0;break e}A=A.return}if(Es===null)throw Error(a(160));Rg(m,v,f),Es=null,ai=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Og(s,e),s=s.sibling}var Wi=null;function Og(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(s,e),li(e),r&4&&(za(3,e,e.return),Il(3,e),za(5,e,e.return));break;case 1:ri(s,e),li(e),r&512&&(to||o===null||sa(o,o.return)),r&64&&xa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=Wi;if(ri(s,e),li(e),r&512&&(to||o===null||sa(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[As]||m[rn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),Ao(m,r,o),m[rn]=e,vn(m),r=m;break e;case"link":var v=O0("link","href",f).get(r+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}m=f.createElement(r),Ao(m,r,o),f.head.appendChild(m);break;case"meta":if(v=O0("meta","content",f).get(r+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}m=f.createElement(r),Ao(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[rn]=e,vn(m),r=m}e.stateNode=r}else z0(f,e.type,e.stateNode);else e.stateNode=L0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?z0(f,e.type,e.stateNode):L0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:ri(s,e),li(e),r&512&&(to||o===null||sa(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ri(s,e),li(e),r&512&&(to||o===null||sa(o,o.return)),e.flags&32){f=e.stateNode;try{Uo(f,"")}catch(Ct){Wn(e,e.return,Ct)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Zf=!0);break;case 6:if(ri(s,e),li(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Ct){Wn(e,e.return,Ct)}}break;case 3:if(Nu=null,f=Wi,Wi=Au(s.containerInfo),ri(s,e),Wi=f,li(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{sl(s.containerInfo)}catch(Ct){Wn(e,e.return,Ct)}Zf&&(Zf=!1,zg(e));break;case 4:r=Wi,Wi=Au(e.stateNode.containerInfo),ri(s,e),li(e),Wi=r;break;case 12:ri(s,e),li(e);break;case 31:ri(s,e),li(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 13:ri(s,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yu=rt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 22:f=e.memoizedState!==null;var X=o!==null&&o.memoizedState!==null,pe=xa,je=to;if(xa=pe||f,to=je||X,ri(s,e),to=je,xa=pe,li(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||X||xa||to||pr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){X=o=s;try{if(m=X.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=X.stateNode;var $e=X.memoizedProps.style,ge=$e!=null&&$e.hasOwnProperty("display")?$e.display:null;A.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(Ct){Wn(X,X.return,Ct)}}}else if(s.tag===6){if(o===null){X=s;try{X.stateNode.nodeValue=f?"":X.memoizedProps}catch(Ct){Wn(X,X.return,Ct)}}}else if(s.tag===18){if(o===null){X=s;try{var ve=X.stateNode;f?j0(ve,!0):j0(X.stateNode,!1)}catch(Ct){Wn(X,X.return,Ct)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,_u(e,o))));break;case 19:ri(s,e),li(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_u(e,r)));break;case 30:break;case 21:break;default:ri(s,e),li(e)}}function li(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Tg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Kf(e);pu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Uo(v,""),o.flags&=-33);var A=Kf(e);pu(e,A,v);break;case 3:case 4:var X=o.stateNode.containerInfo,pe=Kf(e);Qf(e,pe,X);break;default:throw Error(a(161))}}catch(je){Wn(e,e.return,je)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;zg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function va(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Dg(e,s.alternate,s),s=s.sibling}function pr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:za(4,s,s.return),pr(s);break;case 1:sa(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&jg(s,s.return,o),pr(s);break;case 27:ql(s.stateNode);case 26:case 5:sa(s,s.return),pr(s);break;case 22:s.memoizedState===null&&pr(s);break;case 30:pr(s);break;default:pr(s)}e=e.sibling}}function wa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:wa(f,m,o),Il(4,m);break;case 1:if(wa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(pe){Wn(r,r.return,pe)}if(r=m,f=r.updateQueue,f!==null){var A=r.stateNode;try{var X=f.shared.hiddenCallbacks;if(X!==null)for(f.shared.hiddenCallbacks=null,f=0;f<X.length;f++)m_(X[f],A)}catch(pe){Wn(r,r.return,pe)}}o&&v&64&&kg(m),Pl(m,m.return);break;case 27:Eg(m);case 26:case 5:wa(f,m,o),o&&r===null&&v&4&&Mg(m),Pl(m,m.return);break;case 12:wa(f,m,o);break;case 31:wa(f,m,o),o&&v&4&&Bg(f,m);break;case 13:wa(f,m,o),o&&v&4&&Lg(f,m);break;case 22:m.memoizedState===null&&wa(f,m,o),Pl(m,m.return);break;case 30:break;default:wa(f,m,o)}s=s.sibling}}function Jf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&jl(o))}function eh(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e))}function Fi(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)$g(e,s,o,r),s=s.sibling}function $g(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Fi(e,s,o,r),f&2048&&Il(9,s);break;case 1:Fi(e,s,o,r);break;case 3:Fi(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e)));break;case 12:if(f&2048){Fi(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){Wn(s,s.return,X)}}else Fi(e,s,o,r);break;case 31:Fi(e,s,o,r);break;case 13:Fi(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Fi(e,s,o,r):Hl(e,s):m._visibility&2?Fi(e,s,o,r):(m._visibility|=2,Fr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Jf(v,s);break;case 24:Fi(e,s,o,r),f&2048&&eh(s.alternate,s);break;default:Fi(e,s,o,r)}}function Fr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,A=o,X=r,pe=v.flags;switch(v.tag){case 0:case 11:case 15:Fr(m,v,A,X,f),Il(8,v);break;case 23:break;case 22:var je=v.stateNode;v.memoizedState!==null?je._visibility&2?Fr(m,v,A,X,f):Hl(m,v):(je._visibility|=2,Fr(m,v,A,X,f)),f&&pe&2048&&Jf(v.alternate,v);break;case 24:Fr(m,v,A,X,f),f&&pe&2048&&eh(v.alternate,v);break;default:Fr(m,v,A,X,f)}s=s.sibling}}function Hl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Hl(o,r),f&2048&&Jf(r.alternate,r);break;case 24:Hl(o,r),f&2048&&eh(r.alternate,r);break;default:Hl(o,r)}s=s.sibling}}var Ul=8192;function Xr(e,s,o){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Ig(e,s,o),e=e.sibling}function Ig(e,s,o){switch(e.tag){case 26:Xr(e,s,o),e.flags&Ul&&e.memoizedState!==null&&yv(o,Wi,e.memoizedState,e.memoizedProps);break;case 5:Xr(e,s,o);break;case 3:case 4:var r=Wi;Wi=Au(e.stateNode.containerInfo),Xr(e,s,o),Wi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ul,Ul=16777216,Xr(e,s,o),Ul=r):Xr(e,s,o));break;default:Xr(e,s,o)}}function Pg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Vl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Ug(r,e)}Pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Vl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Vl(e);break;case 12:Vl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,gu(e)):Vl(e);break;default:Vl(e)}}function gu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];wo=r,Ug(r,e)}Pg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:za(8,s,s.return),gu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,gu(s));break;default:gu(s)}e=e.sibling}}function Ug(e,s){for(;wo!==null;){var o=wo;switch(o.tag){case 0:case 11:case 15:za(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,wo=r;else e:for(o=e;wo!==null;){r=wo;var f=r.sibling,m=r.return;if(Ng(r),r===o){wo=null;break e}if(f!==null){f.return=m,wo=f;break e}wo=m}}}var R2={getCacheForType:function(e){var s=To(Zs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return To(Zs).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,Ln=0,rs=null,hn=null,_n=0,Yn=0,bi=null,$a=!1,Gr=!1,th=!1,Sa=0,$s=0,Ia=0,_r=0,nh=0,vi=0,qr=0,Yl=null,ci=null,sh=!1,yu=0,Vg=0,xu=1/0,bu=null,Pa=null,mo=0,Ha=null,Kr=null,Ca=0,oh=0,ih=null,Yg=null,Wl=0,ah=null;function wi(){return(Ln&2)!==0&&_n!==0?_n&-_n:$.T!==null?fh():jn()}function Wg(){if(vi===0)if((_n&536870912)===0||xn){var e=kt;kt<<=1,(kt&3932160)===0&&(kt=262144),vi=e}else vi=536870912;return e=yi.current,e!==null&&(e.flags|=32),vi}function ui(e,s,o){(e===rs&&(Yn===2||Yn===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ua(e,_n,vi,!1)),ft(e,o),((Ln&2)===0||e!==rs)&&(e===rs&&((Ln&2)===0&&(_r|=o),$s===4&&Ua(e,_n,vi,!1)),oa(e))}function Fg(e,s,o){if((Ln&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Nt(e,s),f=r?z2(e,s):lh(e,s,!0),m=r;do{if(f===0){Gr&&!r&&Ua(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!L2(o)){f=lh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var A=e;f=Yl;var X=A.current.memoizedState.isDehydrated;if(X&&(Qr(A,v).flags|=256),v=lh(A,v,!1),v!==2){if(th&&!X){A.errorRecoveryDisabledLanes|=m,_r|=m,f=4;break e}m=ci,ci=f,m!==null&&(ci===null?ci=m:ci.push.apply(ci,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Qr(e,0),Ua(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ua(r,s,vi,!$a);break e;case 2:ci=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=yu+300-rt(),10<f)){if(Ua(r,s,vi,!$a),Qe(r,0,!0)!==0)break e;Ca=s,r.timeoutHandle=S0(Xg.bind(null,r,o,ci,bu,sh,s,vi,_r,qr,$a,m,"Throttled",-0,0),f);break e}Xg(r,o,ci,bu,sh,s,vi,_r,qr,$a,m,null,-0,0)}}break}while(!0);oa(e)}function Xg(e,s,o,r,f,m,v,A,X,pe,je,$e,ge,ve){if(e.timeoutHandle=-1,$e=s.subtreeFlags,$e&8192||($e&16785408)===16785408){$e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ao},Ig(s,m,$e);var Ct=(m&62914560)===m?yu-rt():(m&4194048)===m?Vg-rt():0;if(Ct=xv($e,Ct),Ct!==null){Ca=m,e.cancelPendingCommit=Ct(t0.bind(null,e,s,m,o,r,f,v,A,X,je,$e,null,ge,ve)),Ua(e,m,v,!pe);return}}t0(e,s,m,o,r,f,v,A,X)}function L2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!at(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ua(e,s,o,r){s&=~nh,s&=~_r,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-bt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&zn(e,o,s)}function vu(){return(Ln&6)===0?(Fl(0),!1):!0}function rh(){if(hn!==null){if(Yn===0)var e=hn.return;else e=hn,ha=rr=null,Sf(e),Hr=null,Tl=0,e=hn;for(;e!==null;)Cg(e.alternate,e),e=e.return;hn=null}}function Qr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,tv(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Ca=0,rh(),rs=e,hn=o=da(e.current,null),_n=s,Yn=0,bi=null,$a=!1,Gr=Nt(e,s),th=!1,qr=vi=nh=_r=Ia=$s=0,ci=Yl=null,sh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-bt(r),m=1<<f;s|=e[f],r&=~m}return Sa=s,Uc(),o}function Gg(e,s){tn=null,$.H=Ol,s===Pr||s===Kc?(s=u_(),Yn=3):s===df?(s=u_(),Yn=4):Yn=s===If?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,bi=s,hn===null&&($s=1,uu(e,Ei(s,e.current)))}function qg(){var e=yi.current;return e===null?!0:(_n&4194048)===_n?Ri===null:(_n&62914560)===_n||(_n&536870912)!==0?e===Ri:!1}function Kg(){var e=$.H;return $.H=Ol,e===null?Ol:e}function Qg(){var e=$.A;return $.A=R2,e}function wu(){$s=4,$a||(_n&4194048)!==_n&&yi.current!==null||(Gr=!0),(Ia&134217727)===0&&(_r&134217727)===0||rs===null||Ua(rs,_n,vi,!1)}function lh(e,s,o){var r=Ln;Ln|=2;var f=Kg(),m=Qg();(rs!==e||_n!==s)&&(bu=null,Qr(e,s)),s=!1;var v=$s;e:do try{if(Yn!==0&&hn!==null){var A=hn,X=bi;switch(Yn){case 8:rh(),v=6;break e;case 3:case 2:case 9:case 6:yi.current===null&&(s=!0);var pe=Yn;if(Yn=0,bi=null,Zr(e,A,X,pe),o&&Gr){v=0;break e}break;default:pe=Yn,Yn=0,bi=null,Zr(e,A,X,pe)}}O2(),v=$s;break}catch(je){Gg(e,je)}while(!0);return s&&e.shellSuspendCounter++,ha=rr=null,Ln=r,$.H=f,$.A=m,hn===null&&(rs=null,_n=0,Uc()),v}function O2(){for(;hn!==null;)Zg(hn)}function z2(e,s){var o=Ln;Ln|=2;var r=Kg(),f=Qg();rs!==e||_n!==s?(bu=null,xu=rt()+500,Qr(e,s)):Gr=Nt(e,s);e:do try{if(Yn!==0&&hn!==null){s=hn;var m=bi;t:switch(Yn){case 1:Yn=0,bi=null,Zr(e,s,m,1);break;case 2:case 9:if(l_(m)){Yn=0,bi=null,Jg(s);break}s=function(){Yn!==2&&Yn!==9||rs!==e||(Yn=7),oa(e)},m.then(s,s);break e;case 3:Yn=7;break e;case 4:Yn=5;break e;case 7:l_(m)?(Yn=0,bi=null,Jg(s)):(Yn=0,bi=null,Zr(e,s,m,7));break;case 5:var v=null;switch(hn.tag){case 26:v=hn.memoizedState;case 5:case 27:var A=hn;if(v?$0(v):A.stateNode.complete){Yn=0,bi=null;var X=A.sibling;if(X!==null)hn=X;else{var pe=A.return;pe!==null?(hn=pe,Su(pe)):hn=null}break t}}Yn=0,bi=null,Zr(e,s,m,5);break;case 6:Yn=0,bi=null,Zr(e,s,m,6);break;case 8:rh(),$s=6;break e;default:throw Error(a(462))}}$2();break}catch(je){Gg(e,je)}while(!0);return ha=rr=null,$.H=r,$.A=f,Ln=o,hn!==null?0:(rs=null,_n=0,Uc(),$s)}function $2(){for(;hn!==null&&!ct();)Zg(hn)}function Zg(e){var s=wg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,s===null?Su(e):hn=s}function Jg(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=_g(o,s,s.pendingProps,s.type,void 0,_n);break;case 11:s=_g(o,s,s.pendingProps,s.type.render,s.ref,_n);break;case 5:Sf(s);default:Cg(o,s),s=hn=Qp(s,Sa),s=wg(o,s,Sa)}e.memoizedProps=e.pendingProps,s===null?Su(e):hn=s}function Zr(e,s,o,r){ha=rr=null,Sf(s),Hr=null,Tl=0;var f=s.return;try{if(j2(e,f,s,o,_n)){$s=1,uu(e,Ei(o,e.current)),hn=null;return}}catch(m){if(f!==null)throw hn=f,m;$s=1,uu(e,Ei(o,e.current)),hn=null;return}s.flags&32768?(xn||r===1?e=!0:Gr||(_n&536870912)!==0?e=!1:($a=e=!0,(r===2||r===9||r===3||r===6)&&(r=yi.current,r!==null&&r.tag===13&&(r.flags|=16384))),e0(s,e)):Su(s)}function Su(e){var s=e;do{if((s.flags&32768)!==0){e0(s,$a);return}e=s.return;var o=E2(s.alternate,s,Sa);if(o!==null){hn=o;return}if(s=s.sibling,s!==null){hn=s;return}hn=s=e}while(s!==null);$s===0&&($s=5)}function e0(e,s){do{var o=A2(e.alternate,e);if(o!==null){o.flags&=32767,hn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){hn=e;return}hn=e=o}while(e!==null);$s=6,hn=null}function t0(e,s,o,r,f,m,v,A,X){e.cancelPendingCommit=null;do Cu();while(mo!==0);if((Ln&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Lt(e,o,m,v,A,X),e===rs&&(hn=rs=null,_n=0),Kr=s,Ha=e,Ca=o,oh=m,ih=f,Yg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,U2(st,function(){return a0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=$.T,$.T=null,f=se.p,se.p=2,v=Ln,Ln|=4;try{D2(e,s,o)}finally{Ln=v,se.p=f,$.T=r}}mo=1,n0(),s0(),o0()}}function n0(){if(mo===1){mo=0;var e=Ha,s=Kr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var r=se.p;se.p=2;var f=Ln;Ln|=4;try{Og(s,e);var m=bh,v=bn(e.containerInfo),A=m.focusedElem,X=m.selectionRange;if(v!==A&&A&&A.ownerDocument&&vs(A.ownerDocument.documentElement,A)){if(X!==null&&Hn(A)){var pe=X.start,je=X.end;if(je===void 0&&(je=pe),"selectionStart"in A)A.selectionStart=pe,A.selectionEnd=Math.min(je,A.value.length);else{var $e=A.ownerDocument||document,ge=$e&&$e.defaultView||window;if(ge.getSelection){var ve=ge.getSelection(),Ct=A.textContent.length,Yt=Math.min(X.start,Ct),ns=X.end===void 0?Yt:Math.min(X.end,Ct);!ve.extend&&Yt>ns&&(v=ns,ns=Yt,Yt=v);var ce=Zn(A,Yt),J=Zn(A,ns);if(ce&&J&&(ve.rangeCount!==1||ve.anchorNode!==ce.node||ve.anchorOffset!==ce.offset||ve.focusNode!==J.node||ve.focusOffset!==J.offset)){var he=$e.createRange();he.setStart(ce.node,ce.offset),ve.removeAllRanges(),Yt>ns?(ve.addRange(he),ve.extend(J.node,J.offset)):(he.setEnd(J.node,J.offset),ve.addRange(he))}}}}for($e=[],ve=A;ve=ve.parentNode;)ve.nodeType===1&&$e.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<$e.length;A++){var Oe=$e[A];Oe.element.scrollLeft=Oe.left,Oe.element.scrollTop=Oe.top}}Ou=!!xh,bh=xh=null}finally{Ln=f,se.p=r,$.T=o}}e.current=s,mo=2}}function s0(){if(mo===2){mo=0;var e=Ha,s=Kr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var r=se.p;se.p=2;var f=Ln;Ln|=4;try{Dg(e,s.alternate,s)}finally{Ln=f,se.p=r,$.T=o}}mo=3}}function o0(){if(mo===4||mo===3){mo=0,Ae();var e=Ha,s=Kr,o=Ca,r=Yg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?mo=5:(mo=0,Kr=Ha=null,i0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Pa=null),Xn(o),s=s.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Ke,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=$.T,f=se.p,se.p=2,$.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];m(A.value,{componentStack:A.stack})}}finally{$.T=s,se.p=f}}(Ca&3)!==0&&Cu(),oa(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ah?Wl++:(Wl=0,ah=e):Wl=0,Fl(0)}}function i0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,jl(s)))}function Cu(){return n0(),s0(),o0(),a0()}function a0(){if(mo!==5)return!1;var e=Ha,s=oh;oh=0;var o=Xn(Ca),r=$.T,f=se.p;try{se.p=32>o?32:o,$.T=null,o=ih,ih=null;var m=Ha,v=Ca;if(mo=0,Kr=Ha=null,Ca=0,(Ln&6)!==0)throw Error(a(331));var A=Ln;if(Ln|=4,Hg(m.current),$g(m,m.current,v,o),Ln=A,Fl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Ke,m)}catch{}return!0}finally{se.p=f,$.T=r,i0(e,s)}}function r0(e,s,o){s=Ei(o,s),s=$f(e.stateNode,s,2),e=Ba(e,s,2),e!==null&&(ft(e,2),oa(e))}function Wn(e,s,o){if(e.tag===3)r0(e,e,o);else for(;s!==null;){if(s.tag===3){r0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pa===null||!Pa.has(r))){e=Ei(o,e),o=lg(2),r=Ba(s,o,2),r!==null&&(cg(o,r,s,e),ft(r,2),oa(r));break}}s=s.return}}function ch(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new B2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(th=!0,f.add(o),e=I2.bind(null,e,s,o),s.then(e,e))}function I2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,rs===e&&(_n&o)===o&&($s===4||$s===3&&(_n&62914560)===_n&&300>rt()-yu?(Ln&2)===0&&Qr(e,0):nh|=o,qr===_n&&(qr=0)),oa(e)}function l0(e,s){s===0&&(s=_t()),e=or(e,s),e!==null&&(ft(e,s),oa(e))}function P2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),l0(e,o)}function H2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),l0(e,o)}function U2(e,s){return Je(e,s)}var ku=null,Jr=null,uh=!1,ju=!1,dh=!1,Va=0;function oa(e){e!==Jr&&e.next===null&&(Jr===null?ku=Jr=e:Jr=Jr.next=e),ju=!0,uh||(uh=!0,Y2())}function Fl(e,s){if(!dh&&ju){dh=!0;do for(var o=!1,r=ku;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,A=r.pingedLanes;m=(1<<31-bt(42|e)+1)-1,m&=f&~(v&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,f0(r,m))}else m=_n,m=Qe(r,r===rs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Nt(r,m)||(o=!0,f0(r,m));r=r.next}while(o);dh=!1}}function V2(){c0()}function c0(){ju=uh=!1;var e=0;Va!==0&&ev()&&(e=Va);for(var s=rt(),o=null,r=ku;r!==null;){var f=r.next,m=u0(r,s);m===0?(r.next=null,o===null?ku=f:o.next=f,f===null&&(Jr=o)):(o=r,(e!==0||(m&3)!==0)&&(ju=!0)),r=f}mo!==0&&mo!==5||Fl(e),Va!==0&&(Va=0)}function u0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-bt(m),A=1<<v,X=f[v];X===-1?((A&o)===0||(A&r)!==0)&&(f[v]=Tt(A,s)):X<=s&&(e.expiredLanes|=A),m&=~A}if(s=rs,o=_n,o=Qe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Yn===2||Yn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Nt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ze(r),Xn(o)){case 2:case 8:o=$t;break;case 32:o=st;break;case 268435456:o=te;break;default:o=st}return r=d0.bind(null,e),o=Je(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function d0(e,s){if(mo!==0&&mo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Cu()&&e.callbackNode!==o)return null;var r=_n;return r=Qe(e,e===rs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fg(e,r,s),u0(e,rt()),e.callbackNode!=null&&e.callbackNode===o?d0.bind(null,e):null)}function f0(e,s){if(Cu())return null;Fg(e,s,!0)}function Y2(){nv(function(){(Ln&6)!==0?Je(pt,V2):c0()})}function fh(){if(Va===0){var e=$r;e===0&&(e=We,We<<=1,(We&261888)===0&&(We=256)),Va=e}return Va}function h0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lo(""+e)}function m0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function W2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=h0((f[Tn]||null).action),v=r.submitter;v&&(s=(s=v[Tn]||null)?h0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Fo("action","action",null,r,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var X=v?m0(f,v):new FormData(f);Nf(o,{pending:!0,data:X,method:f.method,action:m},null,X)}}else typeof m=="function"&&(A.preventDefault(),X=v?m0(f,v):new FormData(f),Nf(o,{pending:!0,data:X,method:f.method,action:m},m,X))},currentTarget:f}]})}}for(var hh=0;hh<Gd.length;hh++){var mh=Gd[hh],F2=mh.toLowerCase(),X2=mh[0].toUpperCase()+mh.slice(1);Yi(F2,"on"+X2)}Yi(Vi,"onAnimationEnd"),Yi(ea,"onAnimationIteration"),Yi(Pc,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Wd,"onTransitionRun"),Yi(Fd,"onTransitionStart"),Yi(Xd,"onTransitionCancel"),Yi(Gp,"onTransitionEnd"),ds("onMouseEnter",["mouseout","mouseover"]),ds("onMouseLeave",["mouseout","mouseover"]),ds("onPointerEnter",["pointerout","pointerover"]),ds("onPointerLeave",["pointerout","pointerover"]),Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function p0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var A=r[v],X=A.instance,pe=A.currentTarget;if(A=A.listener,X!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=pe;try{m(f)}catch(je){Hc(je)}f.currentTarget=null,m=X}else for(v=0;v<r.length;v++){if(A=r[v],X=A.instance,pe=A.currentTarget,A=A.listener,X!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=pe;try{m(f)}catch(je){Hc(je)}f.currentTarget=null,m=X}}}}function mn(e,s){var o=s[ln];o===void 0&&(o=s[ln]=new Set);var r=e+"__bubble";o.has(r)||(_0(s,e,2,!1),o.add(r))}function ph(e,s,o){var r=0;s&&(r|=4),_0(o,e,r,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _h(e){if(!e[Mu]){e[Mu]=!0,ni.forEach(function(o){o!=="selectionchange"&&(G2.has(o)||ph(o,!1,e),ph(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,ph("selectionchange",!1,s))}}function _0(e,s,o,r){switch(W0(s)){case 2:var f=wv;break;case 8:f=Sv;break;default:f=Dh}o=f.bind(null,s,o,e),f=void 0,!ro||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function gh(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=r.return;v!==null;){var X=v.tag;if((X===3||X===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=ks(A),v===null)return;if(X=v.tag,X===5||X===6||X===26||X===27){r=m=v;continue e}A=A.parentNode}}r=r.return}Vs(function(){var pe=m,je=xo(o),$e=[];e:{var ge=qp.get(e);if(ge!==void 0){var ve=Fo,Ct=e;switch(e){case"keypress":if(Ys(o)===0)break e;case"keydown":case"keyup":ve=co;break;case"focusin":Ct="focus",ve=ye;break;case"focusout":Ct="blur",ve=ye;break;case"beforeblur":case"afterblur":ve=ye;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=q;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=I;break;case Vi:case ea:case Pc:ve=et;break;case Gp:ve=ne;break;case"scroll":case"scrollend":ve=Ls;break;case"wheel":ve=ot;break;case"copy":case"cut":case"paste":ve=Ht;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Xo;break;case"toggle":case"beforetoggle":ve=yt}var Yt=(s&4)!==0,ns=!Yt&&(e==="scroll"||e==="scrollend"),ce=Yt?ge!==null?ge+"Capture":null:ge;Yt=[];for(var J=pe,he;J!==null;){var Oe=J;if(he=Oe.stateNode,Oe=Oe.tag,Oe!==5&&Oe!==26&&Oe!==27||he===null||ce===null||(Oe=nn(J,ce),Oe!=null&&Yt.push(Gl(J,Oe,he))),ns)break;J=J.return}0<Yt.length&&(ge=new ve(ge,Ct,null,o,je),$e.push({event:ge,listeners:Yt}))}}if((s&7)===0){e:{if(ge=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",ge&&o!==Yo&&(Ct=o.relatedTarget||o.fromElement)&&(ks(Ct)||Ct[nt]))break e;if((ve||ge)&&(ge=je.window===je?je:(ge=je.ownerDocument)?ge.defaultView||ge.parentWindow:window,ve?(Ct=o.relatedTarget||o.toElement,ve=pe,Ct=Ct?ks(Ct):null,Ct!==null&&(ns=u(Ct),Yt=Ct.tag,Ct!==ns||Yt!==5&&Yt!==27&&Yt!==6)&&(Ct=null)):(ve=null,Ct=pe),ve!==Ct)){if(Yt=bs,Oe="onMouseLeave",ce="onMouseEnter",J="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=Xo,Oe="onPointerLeave",ce="onPointerEnter",J="pointer"),ns=ve==null?ge:io(ve),he=Ct==null?ge:io(Ct),ge=new Yt(Oe,J+"leave",ve,o,je),ge.target=ns,ge.relatedTarget=he,Oe=null,ks(je)===pe&&(Yt=new Yt(ce,J+"enter",Ct,o,je),Yt.target=he,Yt.relatedTarget=ns,Oe=Yt),ns=Oe,ve&&Ct)t:{for(Yt=q2,ce=ve,J=Ct,he=0,Oe=ce;Oe;Oe=Yt(Oe))he++;Oe=0;for(var It=J;It;It=Yt(It))Oe++;for(;0<he-Oe;)ce=Yt(ce),he--;for(;0<Oe-he;)J=Yt(J),Oe--;for(;he--;){if(ce===J||J!==null&&ce===J.alternate){Yt=ce;break t}ce=Yt(ce),J=Yt(J)}Yt=null}else Yt=null;ve!==null&&g0($e,ge,ve,Yt,!1),Ct!==null&&ns!==null&&g0($e,ns,Ct,Yt,!0)}}e:{if(ge=pe?io(pe):window,ve=ge.nodeName&&ge.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ge.type==="file")var Dn=M;else if(_i(ge))if(D)Dn=jt;else{Dn=lt;var At=Xe}else ve=ge.nodeName,!ve||ve.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?pe&&Bn(pe.elementType)&&(Dn=M):Dn=wt;if(Dn&&(Dn=Dn(e,pe))){Go($e,Dn,o,je);break e}At&&At(e,ge,pe),e==="focusout"&&pe&&ge.type==="number"&&pe.memoizedProps.value!=null&&Ks(ge,"number",ge.value)}switch(At=pe?io(pe):window,e){case"focusin":(_i(At)||At.contentEditable==="true")&&(Gt=At,ws=pe,Sn=null);break;case"focusout":Sn=ws=Gt=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,$o($e,o,je);break;case"selectionchange":if(Xt)break;case"keydown":case"keyup":$o($e,o,je)}var on;if(qn)e:{switch(e){case"compositionstart":var gn="onCompositionStart";break e;case"compositionend":gn="onCompositionEnd";break e;case"compositionupdate":gn="onCompositionUpdate";break e}gn=void 0}else Os?cn(e,o)&&(gn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(gn="onCompositionStart");gn&&(An&&o.locale!=="ko"&&(Os||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&Os&&(on=Wo()):(xs=je,Co="value"in xs?xs.value:xs.textContent,Os=!0)),At=Tu(pe,gn),0<At.length&&(gn=new qe(gn,e,null,o,je),$e.push({event:gn,listeners:At}),on?gn.data=on:(on=Ts(o),on!==null&&(gn.data=on)))),(on=uo?Ws(e,o):Fs(e,o))&&(gn=Tu(pe,"onBeforeInput"),0<gn.length&&(At=new qe("onBeforeInput","beforeinput",null,o,je),$e.push({event:At,listeners:gn}),At.data=on)),W2($e,e,pe,o,je)}p0($e,s)})}function Gl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Tu(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=nn(e,o),f!=null&&r.unshift(Gl(e,f,m)),f=nn(e,s),f!=null&&r.push(Gl(e,f,m))),e.tag===3)return r;e=e.return}return[]}function q2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var A=o,X=A.alternate,pe=A.stateNode;if(A=A.tag,X!==null&&X===r)break;A!==5&&A!==26&&A!==27||pe===null||(X=pe,f?(pe=nn(o,m),pe!=null&&v.unshift(Gl(o,pe,X))):f||(pe=nn(o,m),pe!=null&&v.push(Gl(o,pe,X)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var K2=/\r\n?/g,Q2=/\u0000|\uFFFD/g;function y0(e){return(typeof e=="string"?e:""+e).replace(K2,`
`).replace(Q2,"")}function x0(e,s){return s=y0(s),y0(e)===s}function ts(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Uo(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Uo(e,""+r);break;case"className":is(e,"class",r);break;case"tabIndex":is(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":is(e,o,r);break;case"style":ki(e,r,m);break;case"data":if(s!=="object"){is(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Lo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ts(e,s,"name",f.name,f,null),ts(e,s,"formEncType",f.formEncType,f,null),ts(e,s,"formMethod",f.formMethod,f,null),ts(e,s,"formTarget",f.formTarget,f,null)):(ts(e,s,"encType",f.encType,f,null),ts(e,s,"method",f.method,f,null),ts(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Lo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=ao);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Lo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":mn("beforetoggle",e),mn("toggle",e),En(e,"popover",r);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":En(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ps.get(o)||o,En(e,o,r))}}function yh(e,s,o,r,f,m){switch(o){case"style":ki(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Uo(e,r):(typeof r=="number"||typeof r=="bigint")&&Uo(e,""+r);break;case"onScroll":r!=null&&mn("scroll",e);break;case"onScrollEnd":r!=null&&mn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ao);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Tn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):En(e,o,r)}}}function Ao(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mn("error",e),mn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,m,v,o,null)}}f&&ts(e,s,"srcSet",o.srcSet,o,null),r&&ts(e,s,"src",o.src,o,null);return;case"input":mn("invalid",e);var A=m=v=f=null,X=null,pe=null;for(r in o)if(o.hasOwnProperty(r)){var je=o[r];if(je!=null)switch(r){case"name":f=je;break;case"type":v=je;break;case"checked":X=je;break;case"defaultChecked":pe=je;break;case"value":m=je;break;case"defaultValue":A=je;break;case"children":case"dangerouslySetInnerHTML":if(je!=null)throw Error(a(137,s));break;default:ts(e,s,r,je,o,null)}}In(e,m,A,X,pe,v,f,!1);return;case"select":mn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:ts(e,s,f,A,o,null)}s=m,o=v,e.multiple=!!r,s!=null?hs(e,!!r,s,!1):o!=null&&hs(e,!!r,o,!0);return;case"textarea":mn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ts(e,s,v,A,o,null)}Pi(e,r,f,m);return;case"option":for(X in o)if(o.hasOwnProperty(X)&&(r=o[X],r!=null))switch(X){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ts(e,s,X,r,o,null)}return;case"dialog":mn("beforetoggle",e),mn("toggle",e),mn("cancel",e),mn("close",e);break;case"iframe":case"object":mn("load",e);break;case"video":case"audio":for(r=0;r<Xl.length;r++)mn(Xl[r],e);break;case"image":mn("error",e),mn("load",e);break;case"details":mn("toggle",e);break;case"embed":case"source":case"link":mn("error",e),mn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pe in o)if(o.hasOwnProperty(pe)&&(r=o[pe],r!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ts(e,s,pe,r,o,null)}return;default:if(Bn(s)){for(je in o)o.hasOwnProperty(je)&&(r=o[je],r!==void 0&&yh(e,s,je,r,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(r=o[A],r!=null&&ts(e,s,A,r,o,null))}function Z2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,X=null,pe=null,je=null;for(ve in o){var $e=o[ve];if(o.hasOwnProperty(ve)&&$e!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":X=$e;default:r.hasOwnProperty(ve)||ts(e,s,ve,null,r,$e)}}for(var ge in r){var ve=r[ge];if($e=o[ge],r.hasOwnProperty(ge)&&(ve!=null||$e!=null))switch(ge){case"type":m=ve;break;case"name":f=ve;break;case"checked":pe=ve;break;case"defaultChecked":je=ve;break;case"value":v=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==$e&&ts(e,s,ge,ve,r,$e)}}So(e,v,A,X,pe,je,m,f);return;case"select":ve=v=A=ge=null;for(m in o)if(X=o[m],o.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":ve=X;default:r.hasOwnProperty(m)||ts(e,s,m,null,r,X)}for(f in r)if(m=r[f],X=o[f],r.hasOwnProperty(f)&&(m!=null||X!=null))switch(f){case"value":ge=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==X&&ts(e,s,f,m,r,X)}s=A,o=v,r=ve,ge!=null?hs(e,!!o,ge,!1):!!r!=!!o&&(s!=null?hs(e,!!o,s,!0):hs(e,!!o,o?[]:"",!1));return;case"textarea":ve=ge=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ts(e,s,A,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":ge=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ts(e,s,v,f,r,m)}ms(e,ge,ve);return;case"option":for(var Ct in o)if(ge=o[Ct],o.hasOwnProperty(Ct)&&ge!=null&&!r.hasOwnProperty(Ct))switch(Ct){case"selected":e.selected=!1;break;default:ts(e,s,Ct,null,r,ge)}for(X in r)if(ge=r[X],ve=o[X],r.hasOwnProperty(X)&&ge!==ve&&(ge!=null||ve!=null))switch(X){case"selected":e.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:ts(e,s,X,ge,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in o)ge=o[Yt],o.hasOwnProperty(Yt)&&ge!=null&&!r.hasOwnProperty(Yt)&&ts(e,s,Yt,null,r,ge);for(pe in r)if(ge=r[pe],ve=o[pe],r.hasOwnProperty(pe)&&ge!==ve&&(ge!=null||ve!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,s));break;default:ts(e,s,pe,ge,r,ve)}return;default:if(Bn(s)){for(var ns in o)ge=o[ns],o.hasOwnProperty(ns)&&ge!==void 0&&!r.hasOwnProperty(ns)&&yh(e,s,ns,void 0,r,ge);for(je in r)ge=r[je],ve=o[je],!r.hasOwnProperty(je)||ge===ve||ge===void 0&&ve===void 0||yh(e,s,je,ge,r,ve);return}}for(var ce in o)ge=o[ce],o.hasOwnProperty(ce)&&ge!=null&&!r.hasOwnProperty(ce)&&ts(e,s,ce,null,r,ge);for($e in r)ge=r[$e],ve=o[$e],!r.hasOwnProperty($e)||ge===ve||ge==null&&ve==null||ts(e,s,$e,ge,r,ve)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,A=f.duration;if(m&&A&&b0(v)){for(v=0,A=f.responseEnd,r+=1;r<o.length;r++){var X=o[r],pe=X.startTime;if(pe>A)break;var je=X.transferSize,$e=X.initiatorType;je&&b0($e)&&(X=X.responseEnd,v+=je*(X<A?1:(A-pe)/(X-pe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,bh=null;function Eu(e){return e.nodeType===9?e:e.ownerDocument}function v0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function vh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=null;function ev(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(e){return C0.resolve(null).then(e).catch(sv)}:S0;function sv(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function k0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),sl(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,ql(o);for(var m=o.firstChild;m;){var v=m.nextSibling,A=m.nodeName;m[As]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&ql(e.ownerDocument.body);o=f}while(o);sl(s)}function j0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function Sh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),ti(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function ov(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[As])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function iv(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Bi(e.nextSibling),e===null))return null;return e}function M0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Bi(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function av(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Bi(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var jh=null;function T0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Bi(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function E0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function A0(e,s,o){switch(s=Eu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function ql(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ti(e)}var Li=new Map,D0=new Set;function Au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=se.d;se.d={f:rv,r:lv,D:cv,C:uv,L:dv,m:fv,X:mv,S:hv,M:pv};function rv(){var e=ka.f(),s=vu();return e||s}function lv(e){var s=_o(e);s!==null&&s.tag===5&&s.type==="form"?G_(s):ka.r(e)}var el=typeof document>"u"?null:document;function N0(e,s,o){var r=el;if(r&&typeof s=="string"&&s){var f=ys(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),D0.has(f)||(D0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),Ao(s,"link",e),vn(s),r.head.appendChild(s)))}}function cv(e){ka.D(e),N0("dns-prefetch",e,null)}function uv(e,s){ka.C(e,s),N0("preconnect",e,s)}function dv(e,s,o){ka.L(e,s,o);var r=el;if(r&&e&&s){var f='link[rel="preload"][as="'+ys(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ys(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ys(o.imageSizes)+'"]')):f+='[href="'+ys(e)+'"]';var m=f;switch(s){case"style":m=tl(e);break;case"script":m=nl(e)}Li.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Li.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Kl(m))||s==="script"&&r.querySelector(Ql(m))||(s=r.createElement("link"),Ao(s,"link",e),vn(s),r.head.appendChild(s)))}}function fv(e,s){ka.m(e,s);var o=el;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+ys(r)+'"][href="'+ys(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(e)}if(!Li.has(m)&&(e=x({rel:"modulepreload",href:e},s),Li.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ql(m)))return}r=o.createElement("link"),Ao(r,"link",e),vn(r),o.head.appendChild(r)}}}function hv(e,s,o){ka.S(e,s,o);var r=el;if(r&&e){var f=go(r).hoistableStyles,m=tl(e);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Kl(m)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Li.get(m))&&Mh(e,o);var X=v=r.createElement("link");vn(X),Ao(X,"link",e),X._p=new Promise(function(pe,je){X.onload=pe,X.onerror=je}),X.addEventListener("load",function(){A.loading|=1}),X.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Du(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function mv(e,s){ka.X(e,s);var o=el;if(o&&e){var r=go(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0},s),(s=Li.get(f))&&Th(e,s),m=o.createElement("script"),vn(m),Ao(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function pv(e,s){ka.M(e,s);var o=el;if(o&&e){var r=go(o).hoistableScripts,f=nl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Li.get(f))&&Th(e,s),m=o.createElement("script"),vn(m),Ao(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function R0(e,s,o,r){var f=(f=Pe.current)?Au(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=tl(o.href),o=go(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=tl(o.href);var m=go(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Kl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Li.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Li.set(e,o),m||_v(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=nl(o),o=go(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function tl(e){return'href="'+ys(e)+'"'}function Kl(e){return'link[rel="stylesheet"]['+e+"]"}function B0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _v(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),Ao(s,"link",o),vn(s),e.head.appendChild(s))}function nl(e){return'[src="'+ys(e)+'"]'}function Ql(e){return"script[async]"+e}function L0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+ys(o.href)+'"]');if(r)return s.instance=r,vn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vn(r),Ao(r,"style",f),Du(r,o.precedence,e),s.instance=r;case"stylesheet":f=tl(o.href);var m=e.querySelector(Kl(f));if(m)return s.state.loading|=4,s.instance=m,vn(m),m;r=B0(o),(f=Li.get(f))&&Mh(r,f),m=(e.ownerDocument||e).createElement("link"),vn(m);var v=m;return v._p=new Promise(function(A,X){v.onload=A,v.onerror=X}),Ao(m,"link",r),s.state.loading|=4,Du(m,o.precedence,e),s.instance=m;case"script":return m=nl(o.src),(f=e.querySelector(Ql(m)))?(s.instance=f,vn(f),f):(r=o,(f=Li.get(m))&&(r=x({},o),Th(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),vn(f),Ao(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Du(r,o.precedence,e));return s.instance}function Du(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Th(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Nu=null;function O0(e,s,o){if(Nu===null){var r=new Map,f=Nu=new Map;f.set(o,r)}else f=Nu,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[As]||m[rn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var A=r.get(v);A?A.push(m):r.set(v,[m])}}return r}function z0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function gv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function $0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=tl(r.href),m=s.querySelector(Kl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Ru.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,vn(m);return}m=s.ownerDocument||s,r=B0(r),(f=Li.get(f))&&Mh(r,f),m=m.createElement("link"),vn(m);var v=m;v._p=new Promise(function(A,X){v.onload=A,v.onerror=X}),Ao(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Ru.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Eh=0;function xv(e,s){return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Eh===0&&(Eh=62500*J2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Eh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bu=null;function Lu(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bu=new Map,s.forEach(bv,e),Bu=null,Ru.call(e))}function bv(e,s){if(!(s.state.loading&4)){var o=Bu.get(e);if(o)var r=o.get(null);else{o=new Map,Bu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Ru.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Zl={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function vv(e,s,o,r,f,m,v,A,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=an(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.hiddenUpdates=an(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function I0(e,s,o,r,f,m,v,A,X,pe,je,$e){return e=new vv(e,s,o,v,X,pe,je,$e,A),s=1,m===!0&&(s|=24),m=gi(3,null,null,s),e.current=m,m.stateNode=e,s=lf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},ff(m),e}function P0(e){return e?(e=Rr,e):Rr}function H0(e,s,o,r,f,m){f=P0(f),r.context===null?r.context=f:r.pendingContext=f,r=Ra(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Ba(e,r,s),o!==null&&(ui(o,e,s),Al(o,e,s))}function U0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Ah(e,s){U0(e,s),(e=e.alternate)&&U0(e,s)}function V0(e){if(e.tag===13||e.tag===31){var s=or(e,67108864);s!==null&&ui(s,e,67108864),Ah(e,67108864)}}function Y0(e){if(e.tag===13||e.tag===31){var s=wi();s=cs(s);var o=or(e,s);o!==null&&ui(o,e,s),Ah(e,s)}}var Ou=!0;function wv(e,s,o,r){var f=$.T;$.T=null;var m=se.p;try{se.p=2,Dh(e,s,o,r)}finally{se.p=m,$.T=f}}function Sv(e,s,o,r){var f=$.T;$.T=null;var m=se.p;try{se.p=8,Dh(e,s,o,r)}finally{se.p=m,$.T=f}}function Dh(e,s,o,r){if(Ou){var f=Nh(r);if(f===null)gh(e,s,r,zu,o),F0(e,r);else if(kv(f,e,s,o,r))r.stopPropagation();else if(F0(e,r),s&4&&-1<Cv.indexOf(e)){for(;f!==null;){var m=_o(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Wt(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var X=1<<31-bt(v);A.entanglements[1]|=X,v&=~X}oa(m),(Ln&6)===0&&(xu=rt()+500,Fl(0))}}break;case 31:case 13:A=or(m,2),A!==null&&ui(A,m,2),vu(),Ah(m,2)}if(m=Nh(r),m===null&&gh(e,s,r,zu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else gh(e,s,r,null,o)}}function Nh(e){return e=xo(e),Rh(e)}var zu=null;function Rh(e){if(zu=null,e=ks(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return zu=e,null}function W0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case pt:return 2;case $t:return 8;case st:case H:return 32;case te:return 268435456;default:return 32}default:return 32}}var Bh=!1,Wa=null,Fa=null,Xa=null,Jl=new Map,ec=new Map,Ga=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(e,s){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Jl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(s.pointerId)}}function tc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=_o(s),s!==null&&V0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function kv(e,s,o,r,f){switch(s){case"focusin":return Wa=tc(Wa,e,s,o,r,f),!0;case"dragenter":return Fa=tc(Fa,e,s,o,r,f),!0;case"mouseover":return Xa=tc(Xa,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Jl.set(m,tc(Jl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,ec.set(m,tc(ec.get(m)||null,e,s,o,r,f)),!0}return!1}function X0(e){var s=ks(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,Mn(e.priority,function(){Y0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,Mn(e.priority,function(){Y0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Nh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Yo=r,o.target.dispatchEvent(r),Yo=null}else return s=_o(o),s!==null&&V0(s),e.blockedOn=o,!1;s.shift()}return!0}function G0(e,s,o){$u(e)&&o.delete(s)}function jv(){Bh=!1,Wa!==null&&$u(Wa)&&(Wa=null),Fa!==null&&$u(Fa)&&(Fa=null),Xa!==null&&$u(Xa)&&(Xa=null),Jl.forEach(G0),ec.forEach(G0)}function Iu(e,s){e.blockedOn===s&&(e.blockedOn=null,Bh||(Bh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jv)))}var Pu=null;function q0(e){Pu!==e&&(Pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pu===e&&(Pu=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Rh(r||o)===null)continue;break}var m=_o(o);m!==null&&(e.splice(s,3),s-=3,Nf(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function sl(e){function s(X){return Iu(X,e)}Wa!==null&&Iu(Wa,e),Fa!==null&&Iu(Fa,e),Xa!==null&&Iu(Xa,e),Jl.forEach(s),ec.forEach(s);for(var o=0;o<Ga.length;o++){var r=Ga[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ga.length&&(o=Ga[0],o.blockedOn===null);)X0(o),o.blockedOn===null&&Ga.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[Tn]||null;if(typeof m=="function")v||q0(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Tn]||null)A=v.formAction;else if(Rh(f)!==null)continue}else A=v.action;typeof A=="function"?o[r+1]=A:(o.splice(r,3),r-=3),q0(o)}}}function K0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}Hu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=wi();H0(o,r,e,s,null,null)},Hu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;H0(e.current,2,null,e,null,null),vu(),s[nt]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var s=jn();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Ga.length&&s!==0&&s<Ga[o].priority;o++);Ga.splice(o,0,e),o===0&&X0(e)}};var Q0=n.version;if(Q0!=="19.2.4")throw Error(a(527,Q0,"19.2.4"));se.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Mv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Ke=Uu.inject(Mv),Fe=Uu}catch{}}return sc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=og,m=ig,v=ag;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=I0(e,1,!1,null,null,o,r,null,f,m,v,K0),e[nt]=s.current,_h(e),new Lh(s)},sc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=og,v=ig,A=ag,X=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(X=o.formState)),s=I0(e,1,!0,s,o!=null?o:null,r,f,X,m,v,A,K0),s.context=P0(null),o=s.current,r=wi(),r=cs(r),f=Ra(r),f.callback=null,Ba(o,f,r),o=r,s.current.lanes=o,ft(s,o),oa(s),e[nt]=s.current,_h(e),new Hu(s)},sc.version="19.2.4",sc}var ry;function Ov(){if(ry)return zh.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),zh.exports=Lv(),zh.exports}var zv=Ov();const $v=Rx(zv);var y=lp();const Iv=Rx(y);function Pv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Hv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var hd;const Ii="__TAURI_TO_IPC_KEY__";function Uv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function we(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Vv{get rid(){return Pv(this,hd,"f")}constructor(n){hd.set(this,void 0),Hv(this,hd,n)}async close(){return we("plugin:resources|close",{rid:this.rid})}}hd=new WeakMap;var Si;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(Si||(Si={}));async function Lx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await we("plugin:event|unlisten",{event:t,eventId:n})}async function gc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return we("plugin:event|listen",{event:t,target:c,handler:Uv(n)}).then(u=>async()=>Lx(t,u))}async function Yv(t,n,i){return gc(t,a=>{Lx(t,a.id),n(a)},i)}async function Wv(t,n){await we("plugin:event|emit",{event:t,payload:n})}async function Fv(t,n,i){await we("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ox{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new yc(this.width*n,this.height*n)}[Ii](){return{width:this.width,height:this.height}}toJSON(){return this[Ii]()}}class yc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ox(this.width/n,this.height/n)}[Ii](){return{width:this.width,height:this.height}}toJSON(){return this[Ii]()}}class ol{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ox?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof yc?this.size:this.size.toPhysical(n)}[Ii](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ii]()}}class zx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ja(this.x*n,this.y*n)}[Ii](){return{x:this.x,y:this.y}}toJSON(){return this[Ii]()}}class Ja{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new zx(this.x/n,this.y/n)}[Ii](){return{x:this.x,y:this.y}}toJSON(){return this[Ii]()}}class Vu{constructor(n){this.position=n}toLogical(n){return this.position instanceof zx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ja?this.position:this.position.toPhysical(n)}[Ii](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ii]()}}class xc extends Vv{constructor(n){super(n)}static async new(n,i,a){return we("plugin:image|new",{rgba:Cd(n),width:i,height:a}).then(c=>new xc(c))}static async fromBytes(n){return we("plugin:image|from_bytes",{bytes:Cd(n)}).then(i=>new xc(i))}static async fromPath(n){return we("plugin:image|from_path",{path:n}).then(i=>new xc(i))}async rgba(){return we("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return we("plugin:image|size",{rid:this.rid})}}function Cd(t){return t==null?null:typeof t=="string"?t:t instanceof xc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class Xv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var ly;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(ly||(ly={}));function $x(){return new Ix(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Uh(){return we("plugin:window|get_all_windows").then(t=>t.map(n=>new Ix(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Ix{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||we("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Uh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return $x()}static async getAll(){return Uh()}static async getFocusedWindow(){for(const n of await Uh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:gc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Yv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Wv(n,i)}async emitTo(n,i,a){if(Vh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Fv(n,i,a)}_handleTauriEvent(n,i){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return we("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return we("plugin:window|inner_position",{label:this.label}).then(n=>new Ja(n))}async outerPosition(){return we("plugin:window|outer_position",{label:this.label}).then(n=>new Ja(n))}async innerSize(){return we("plugin:window|inner_size",{label:this.label}).then(n=>new yc(n))}async outerSize(){return we("plugin:window|outer_size",{label:this.label}).then(n=>new yc(n))}async isFullscreen(){return we("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return we("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return we("plugin:window|is_maximized",{label:this.label})}async isFocused(){return we("plugin:window|is_focused",{label:this.label})}async isDecorated(){return we("plugin:window|is_decorated",{label:this.label})}async isResizable(){return we("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return we("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return we("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return we("plugin:window|is_closable",{label:this.label})}async isVisible(){return we("plugin:window|is_visible",{label:this.label})}async title(){return we("plugin:window|title",{label:this.label})}async theme(){return we("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return we("plugin:window|is_always_on_top",{label:this.label})}async center(){return we("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),we("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return we("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return we("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return we("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return we("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return we("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return we("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return we("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return we("plugin:window|maximize",{label:this.label})}async unmaximize(){return we("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return we("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return we("plugin:window|minimize",{label:this.label})}async unminimize(){return we("plugin:window|unminimize",{label:this.label})}async show(){return we("plugin:window|show",{label:this.label})}async hide(){return we("plugin:window|hide",{label:this.label})}async close(){return we("plugin:window|close",{label:this.label})}async destroy(){return we("plugin:window|destroy",{label:this.label})}async setDecorations(n){return we("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return we("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return we("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return we("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return we("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return we("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return we("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return we("plugin:window|set_size",{label:this.label,value:n instanceof ol?n:new ol(n)})}async setMinSize(n){return we("plugin:window|set_min_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setMaxSize(n){return we("plugin:window|set_max_size",{label:this.label,value:n instanceof ol?n:n?new ol(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return we("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return we("plugin:window|set_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setFullscreen(n){return we("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return we("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return we("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return we("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return we("plugin:window|set_icon",{label:this.label,value:Cd(n)})}async setSkipTaskbar(n){return we("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return we("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return we("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return we("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return we("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return we("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Vu?n:new Vu(n)})}async setIgnoreCursorEvents(n){return we("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return we("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return we("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return we("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return we("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return we("plugin:window|set_overlay_icon",{label:this.label,value:n?Cd(n):void 0})}async setProgressBar(n){return we("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return we("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return we("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return we("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(Si.WINDOW_RESIZED,i=>{i.payload=new yc(i.payload),n(i)})}async onMoved(n){return this.listen(Si.WINDOW_MOVED,i=>{i.payload=new Ja(i.payload),n(i)})}async onCloseRequested(n){return this.listen(Si.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Xv(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(Si.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),a=await this.listen(Si.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ja(d.payload.position)}})}),c=await this.listen(Si.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ja(d.payload.position)}})}),u=await this.listen(Si.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(Si.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(Si.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(Si.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(Si.WINDOW_THEME_CHANGED,n)}}var cy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(cy||(cy={}));var uy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(uy||(uy={}));var dy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(dy||(dy={}));var fy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(fy||(fy={}));async function Gv(t={}){return typeof t=="object"&&Object.freeze(t),await we("plugin:dialog|open",{options:t})}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=(...t)=>t.filter((n,i,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,a)=>a?a.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=t=>{const n=Kv(t);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=y.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:u,iconNode:d,...h},p)=>y.createElement("svg",{ref:p,...Qv,width:n,height:n,stroke:t,strokeWidth:a?Number(i)*24/Number(n):i,className:Px("lucide",c),...!u&&!Zv(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,_])=>y.createElement(g,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=(t,n)=>{const i=y.forwardRef(({className:a,...c},u)=>y.createElement(Jv,{ref:u,iconNode:n,className:Px(`lucide-${qv(hy(t))}`,`lucide-${t}`,a),...c}));return i.displayName=hy(t),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hx=Rc("chevron-down",ew);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],nw=Rc("chevron-up",tw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],ow=Rc("panel-left-close",sw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],aw=Rc("panel-left-open",iw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],lw=Rc("search",rw),cw=3.7,Yu=200,Mm=240,_s=540,Is=176,Yh=32,xl=20,uw=Mm/2,oc=_s+uw,gr=18,yr=18,Wh="#E6E6E6";function my(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function kr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function ja(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function pc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:ja(t).localeCompare(ja(n))}function Ux(t){return[...t].sort(pc)}function dw(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[ja(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(ja(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=ja(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const j=(g=a.get(w))!=null?g:[];j.push(b),a.set(w,j)}for(const b of a.values())b.sort(pc);const c=t.filter(b=>{var w;return((w=i.get(ja(b)))!=null?w:0)===0}).sort(pc),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=ja(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const j=ja(S),k=((x=i.get(j))!=null?x:0)-1;i.set(j,k),k===0&&c.push(S)}c.sort(pc)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(ja(b))).sort(pc)]}function Vx(t,n){var i;return Ux(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Yx(t,n,i){return Vx(t,i)}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function fw(t,n){var u,d;if(!n||t.length===0)return Fh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Wu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function hw(t,n,i){var _,x,b,w,S,j,k;const a=Yx(t,i,n);if(a.length===0)return null;const c=a.map(T=>kr(t,T)),u=new Set(c.map(T=>T.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(T=>T.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(T=>h&&T.id===h||d&&T.id===d?!0:!T.parentSha||!u.has(T.parentSha));return g||((k=(j=fw(c,p!=null?p:void 0))!=null?j:c[0])!=null?k:null)}function mw(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Vx(t.name,i);if(a.length>0){const g=a.map(b=>kr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function cp(t,n,i={},a={}){var ae,ie,ke,Be;const u=new Map(t.map(Q=>[Q.name,Q])),d=new Map,h=new Map;for(const Q of t){const $=((ae=i[Q.name])!=null?ae:[]).filter(se=>se.kind!=="branch-created").map(se=>new Date(se.date).getTime()).filter(se=>Number.isFinite(se)).sort((se,W)=>se-W)[0];$!=null&&h.set(Q.name,$)}const p=Q=>{const ue=h.get(Q.name);return ue!=null?ue:my(Q).start},g=Q=>{var $;const ue=($=a[Q.name])!=null?$:null;return ue&&ue!==Q.name&&(ue===n||u.has(ue))?ue:Q.name===n?null:Q.parentBranch&&Q.parentBranch!==Q.name&&(Q.parentBranch===n||u.has(Q.parentBranch))?Q.parentBranch:null};for(const Q of t){if(Q.name===n)continue;const ue=(ie=g(Q))!=null?ie:n,$=(ke=d.get(ue))!=null?ke:[];$.push(Q),d.set(ue,$)}for(const Q of d.values())Q.sort((ue,$)=>p(ue)-p($)||ue.name.localeCompare($.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const Q of Object.values(i))for(const ue of Q){const $=new Date(ue.date).getTime();Number.isFinite($)&&(ue.fullSha&&S.set(ue.fullSha,$),ue.sha&&S.set(ue.sha,$))}const j=(Q,ue)=>({start:Math.min(Q,ue),end:Math.max(Q,ue)}),k=Q=>{var le,de;const ue=j(p(Q),my(Q).end),$=[ue],se=ue.start,W=mw(Q,n,i),K=W?S.get(W):void 0,_e=new Date((de=(le=Q.divergedFromDate)!=null?le:Q.createdDate)!=null?de:Q.lastCommitDate).getTime(),R=Number.isFinite(K!=null?K:NaN)?K:Number.isFinite(_e)?_e:null;if(R==null)return $;const oe=j(R,se);return oe.start!==oe.end&&$.push(oe),$},T=Math.max(1,360*60*1e3*cw),z=(Q,ue)=>!(Q.start-ue.end>=T||ue.start-Q.end>=T),L=(Q,ue)=>ue.some($=>{var se;return((se=w.get(Q))!=null?se:[]).some(W=>z($,W))}),N=(Q,ue=new Set)=>{const $=b.get(Q);if($!=null)return $;if(ue.has(Q))return 1;ue.add(Q);const se=u.get(Q);if(!se||Q===n)return ue.delete(Q),b.set(Q,0),0;const W=g(se),K=W?N(W,ue)+1:1;return ue.delete(Q),b.set(Q,K),K},Y=(Q,ue=new Set)=>{var Pe,Re;const $=_.get(Q);if($)return $.column;if(ue.has(Q))return 0;ue.add(Q);const se=u.get(Q);if(!se)return ue.delete(Q),0;if(Q===n){const tt={name:Q,column:0,parentName:null};_.set(Q,tt),x.push(tt);const dt=k(se);return w.set(0,[...(Pe=w.get(0))!=null?Pe:[],...dt]),ue.delete(Q),0}const W=g(se),K=W&&!ue.has(W)?W:null,_e=K?Y(K,ue):0,R=Math.max(1,N(Q)),oe=Math.max(K?_e+1:1,R),le=k(se);let de=oe;for(;L(de,le);)de+=1;const Ne={name:Q,column:de,parentName:K};return _.set(Q,Ne),x.push(Ne),w.set(de,[...(Re=w.get(de))!=null?Re:[],...le]),ue.delete(Q),de};Y(n);const P=t.filter(Q=>!_.has(Q.name)).sort((Q,ue)=>p(Q)-p(ue)||Q.name.localeCompare(ue.name)),F=P.filter(Q=>g(Q)!=null),V=P.filter(Q=>g(Q)==null);for(const Q of F)Y(Q.name);let Z=Math.max(0,...x.map(Q=>Q.column))+1+1;for(const Q of V){const ue=k(Q);let $=Z;for(;L($,ue);)$+=1;const se={name:Q.name,column:$,parentName:null};_.set(Q.name,se),x.push(se),w.set($,[...(Be=w.get($))!=null?Be:[],...ue]),Z=$+1}return x.sort((Q,ue)=>Q.column-ue.column||Q.name.localeCompare(ue.name))}function pw(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Fu=2.25,Xi=0,Xh=0,_w=1800*1e3,gw=1440*60*1e3,Oi=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Qo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function py(t,n,i=new Map){var F,V,Z,ae,ie,ke,Be,Q,ue,$,se,W;if(t.length===0)return new Map;const a=[...t].sort((K,_e)=>{const R=Oi(K.date)-Oi(_e.date);return R!==0?R:K.id!==_e.id?K.id.localeCompare(_e.id):K.visualId.localeCompare(_e.visualId)}),c=new Map;for(const K of t){const _e=(F=K.parentSha)!=null?F:null;if(_e){const R=(V=c.get(_e))!=null?V:new Set;R.add(K.id),c.set(_e,R)}for(const R of(Z=i.get(K.id))!=null?Z:[]){if(!R)continue;const oe=(ae=c.get(R))!=null?ae:new Set;oe.add(K.id),c.set(R,oe)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const K of t){const _e=(ie=g.get(K.branchName))!=null?ie:new Set;_e.add(K.id),g.set(K.branchName,_e);const R=(Be=(ke=n.get(K.branchName))==null?void 0:ke.column)!=null?Be:0,oe=(Q=_.get(K.id))!=null?Q:new Set;oe.add(R),_.set(K.id,oe);const le=new Set;K.parentSha&&le.add(K.parentSha),x.set(K.visualId,le);const de=new Set(le);for(const Ne of(ue=i.get(K.id))!=null?ue:[])Ne&&de.add(Ne);b.set(K.visualId,de)}const w=new Set(Array.from(_.keys())),S=Array.from(w),j=new Map,k=K=>{const _e=[];for(const R of S)Qo(R,K)&&_e.push(R);return _e},T=new Map;for(const K of S)T.set(K,new Set);for(const K of t){const _e=k(K.id);if(_e.length===0)continue;const R=($=b.get(K.visualId))!=null?$:new Set,oe=new Set;for(const le of R)for(const de of k(le))oe.add(de);for(const le of _e){const de=(se=T.get(le))!=null?se:new Set;for(const Ne of oe)de.add(Ne);T.set(le,de)}}const z=new Map,L=(K,_e=new Set)=>{var de;const R=z.get(K);if(R)return R;if(_e.has(K))return new Set;_e.add(K);const oe=(de=T.get(K))!=null?de:new Set,le=new Set;for(const Ne of oe){le.add(Ne);for(const Pe of L(Ne,_e))le.add(Pe)}return _e.delete(K),z.set(K,le),le},N=(K,_e)=>{if(Qo(K,_e))return!0;const R=k(K),oe=k(_e);for(const le of R){const de=L(le);for(const Ne of oe)if(de.has(Ne))return!0}for(const le of oe){const de=L(le);for(const Ne of R)if(de.has(Ne))return!0}return!1};let Y=1;const P=(K,_e)=>{var xt,Vt,G,Me,Je,Ze,ct,Ae,rt;const R=(Vt=(xt=n.get(K.branchName))==null?void 0:xt.column)!=null?Vt:0,oe=(G=g.get(K.branchName))!=null?G:new Set,de=!(!!K.parentSha&&oe.has(K.parentSha))&&K.parentSha?K.parentSha:null,Ne=Array.from(_e).flatMap(it=>k(it).flatMap(pt=>{var $t;return($t=j.get(pt))!=null?$t:[]})),Pe=(K.kind==="branch-created"||K.kind==="stash")&&Ne.length>0?Math.max(...Ne)+1:null,Re=Ne.length>0?Math.max(...Ne)+1:1,tt=(Me=c.get(K.id))!=null?Me:new Set,Ot=Array.from(tt).flatMap(it=>{var pt;return Array.from((pt=_.get(it))!=null?pt:[])}).some(it=>it!==R),ht=new Date(K.date).getTime(),Ie=Math.max(Re,1);let Ee=null;for(let it=Ie;it<Y;it+=1){const pt=(Je=d.get(it))!=null?Je:[];if(pt.length===0||Ot||p.has(it))continue;const $t=(Ze=b.get(K.visualId))!=null?Ze:new Set;if(!(pt.some(me=>N(K.id,me.sha)?!0:Array.from($t).some(Ke=>Qo(Ke,me.sha)))||pt.some(me=>me.column===R)||!Number.isFinite(ht)||!pt.every(me=>{if(!Number.isFinite(me.time))return!1;const Ke=!!de&&!!me.branchEntryParentSha&&de===me.branchEntryParentSha?gw:_w;return Math.abs(me.time-ht)<=Ke}))){Ee=it;break}}Pe!=null&&(Ee=Pe),Ee==null&&(Ee=Math.max(Re,Y)),u.set(K.visualId,Ee),Ee>=Y&&(Y=Ee+1);const mt=(ct=d.get(Ee))!=null?ct:[];mt.push({visualId:K.visualId,sha:K.id,column:R,time:ht,branchEntryParentSha:de}),d.set(Ee,mt),Ot&&p.add(Ee);for(const it of _e){const pt=(Ae=h.get(it))!=null?Ae:[];pt.push(Ee),h.set(it,pt)}const zt=(rt=j.get(K.id))!=null?rt:[];zt.push(Ee),j.set(K.id,zt)};for(const K of a){const _e=(W=x.get(K.visualId))!=null?W:new Set;P(K,_e)}return u}function jc(t){var Jt,Ro,fs,hi,mi,Bo,si,ys,So,In,Ks,hs,ms,Pi,Uo,Zi,qt,ki,Bn,ps,Vo,Lo,ao,Yo,xo,yn,Qs,ji,Ds,Vs,nn,Bs,ro,Oo,xs,Co,zo,Wo,Ys,bo,oi,Gn,dn,Fo,Un,Ls,pi,lo,js,vo,bs;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:j,orientation:k="horizontal",nodePositionOverrides:T={}}=t,z=k==="horizontal",L=new Map(i.map(E=>[E.name,E])),N=new Map(n.map(E=>[E.name,E])),Y=dw([...a.map(E=>{var q,fe,ye;return{id:E.fullSha,branchName:d,message:(q=E.prTitle)!=null?q:E.sha,author:"",date:E.date,parentSha:(ye=(fe=E.parentShas)==null?void 0:fe[0])!=null?ye:null}}),...((Jt=h[d])!=null?Jt:[]).map(E=>kr(d,E)),...c.map(E=>kr(E.branch||"",E)),...u.map(E=>kr(E.branch||"",E))]),P=new Map,F=new Map;for(const E of i){if(E.name===d)continue;const q=Yx(E.name,g,h);F.set(E.name,q);const fe=Ux(q.map(Ht=>kr(E.name,Ht)));if(fe.length>0){P.set(E.name,fe);continue}const ye=(hi=(fs=(Ro=E.presidesFromSha)!=null?Ro:E.divergedFromSha)!=null?fs:E.createdFromSha)!=null?hi:null;if(!ye)continue;const Ve=(mi=c.find(Ht=>Qo(Ht.fullSha,ye)||Qo(Ht.sha,ye)))==null?void 0:mi.date,et=Ve?null:(Bo=Object.values(h).flat().find(Ht=>Qo(Ht.fullSha,ye)||Qo(Ht.sha,ye)))==null?void 0:Bo.date,Rt={id:`BRANCH_HEAD:${E.name}:${ye}`,branchName:E.name,message:`Branch ${E.name}`,author:E.lastCommitAuthor,date:(So=(ys=(si=Ve!=null?Ve:et)!=null?si:E.createdDate)!=null?ys:E.divergedFromDate)!=null?So:E.lastCommitDate,parentSha:ye,kind:"branch-created"};P.set(E.name,[Rt])}const V=new Set(Y.map(E=>E.id)),Z=(In=[...Y].sort((E,q)=>Oi(E.date)-Oi(q.date)||E.id.localeCompare(q.id))[0])!=null?In:null,ae=new Map(Array.from(P.entries()).map(([E,q])=>[E,new Set(q.map(fe=>fe.id))])),ie=new Map;for(const E of i){if(E.name===d)continue;const q=hw(E.name,h,g);if(q){ie.set(E.name,q);continue}const fe=(Ks=P.get(E.name))==null?void 0:Ks[0];if(fe){const ye=(Pi=(ms=(hs=E.presidesFromSha)!=null?hs:E.divergedFromSha)!=null?ms:E.createdFromSha)!=null?Pi:null;ie.set(E.name,{...fe,parentSha:ye})}}const ke=new Map;for(const[E,q]of P.entries()){const fe=q.find(ye=>ye.kind!=="branch-created");fe&&ke.set(E,fe)}const Be=new Map;for(const[E,q]of P.entries()){const fe=q.filter(et=>et.kind!=="branch-created"),Ve=(Uo=(fe.length>0?fe:q)[0])!=null?Uo:null;Ve&&Be.set(E,Ve)}const Q=new Map;for(const E of i){if(E.name===d)continue;const q=(Zi=Be.get(E.name))!=null?Zi:null,fe=(ki=(qt=ie.get(E.name))==null?void 0:qt.parentSha)!=null?ki:null,ye=(Vo=(ps=(Bn=E.presidesFromSha)!=null?Bn:E.divergedFromSha)!=null?ps:E.createdFromSha)!=null?Vo:null,Ve=(Lo=q==null?void 0:q.parentSha)!=null?Lo:null,et=(ao=Ve!=null?Ve:fe)!=null?ao:ye;et&&Q.set(E.name,et)}const ue=E=>{var et,Rt,Ht,Dt,qe,sn,fn,Pn;const q=(et=p[E.name])!=null?et:null;if(!(q&&q!==d&&q!==E.name&&L.has(q)))return q!=null?q:"";const ye=(Dt=(Ht=(Rt=Q.get(E.name))!=null?Rt:E.presidesFromSha)!=null?Ht:E.divergedFromSha)!=null?Dt:E.createdFromSha;if(ye&&((qe=ae.get(q))!=null?qe:new Set).has(ye))return q;const Ve=(fn=(sn=ie.get(E.name))==null?void 0:sn.parentSha)!=null?fn:null;return Ve&&((Pn=ae.get(q))!=null?Pn:new Set).has(Ve),q},$=E=>{var Ve,et,Rt,Ht,Dt,qe,sn,fn;const q=ie.get(E.name),fe=(Dt=(Ht=(Rt=(et=(Ve=Q.get(E.name))!=null?Ve:q==null?void 0:q.parentSha)!=null?et:E.presidesFromSha)!=null?Rt:E.divergedFromSha)!=null?Ht:E.createdFromSha)!=null?Dt:null;if(!E.parentBranch&&!fe||!fe)return null;if(ue(E)===d){if(V.has(fe))return fe;const Pn=(qe=q==null?void 0:q.parentSha)!=null?qe:null;return Pn&&V.has(Pn)?Pn:(fn=(sn=Z==null?void 0:Z.id)!=null?sn:Pn)!=null?fn:fe}return V.has(fe),fe},se=E=>$(E),W=new Map;for(const E of[...c,...u]){const q={...kr(E.branch||"",E),visualId:`${E.branch||""}:${E.fullSha}`};W.set(E.fullSha,q)}const K=new Map(W),_e=E=>{K.has(E.id)||K.set(E.id,E)},R=new Map(Array.from(P.entries()).map(([E,q])=>[E,new Set(q.map(fe=>fe.id))])),oe=new Set;for(const E of R.values())for(const q of E)oe.add(q);for(const E of Y)oe.has(E.id)||_e({...E,visualId:`${E.branchName}:${E.id}`});for(const[E,q]of P.entries())for(const fe of q)_e({...fe,visualId:`${E}:${fe.id}`});const de=[...Array.from(K.values()).map(E=>({...E,visualId:`${E.branchName}:${E.id}`}))].sort((E,q)=>Oi(E.date)-Oi(q.date)||E.id.localeCompare(q.id)),Ne=new Map;for(const E of de){const q=(Yo=Ne.get(E.branchName))!=null?Yo:new Set;q.add(E.id),Ne.set(E.branchName,q)}const Pe=(E,q)=>{const fe=Ne.get(E);if(!fe||fe.size===0)return!1;for(const ye of fe)if(Qo(ye,q))return!0;return!1},Re=(E,q)=>{const fe=Array.from(Ne.entries()).filter(([ye])=>ye!==q).filter(([,ye])=>Array.from(ye).some(Ve=>Qo(Ve,E))).map(([ye])=>ye);return fe.length>0?fe.sort()[0]:E.slice(0,7)},tt=[],dt=new Map,Ot=new Map;for(const E of a){const q=E.fullSha,fe=E.targetBranch,ye=E.targetCommitSha;if(!q||!fe||!ye||!Pe(fe,ye))continue;const Ve=((xo=E.parentShas)!=null?xo:[]).slice(1).filter(Rt=>!!Rt&&!Qo(Rt,q));if(Ve.length===0)continue;const et=(yn=Ot.get(q))!=null?yn:new Set;for(const Rt of Ve){et.add(Rt);const Ht=Re(Rt,fe);tt.push({sourceCommitSha:Rt,sourceBranchName:Ht,mergeCommitSha:q,targetCommitSha:ye,targetBranchName:fe});const Dt=(Qs=dt.get(Ht))!=null?Qs:new Map,qe=(ji=Dt.get(Rt))!=null?ji:new Set;qe.add(fe),Dt.set(Rt,qe),dt.set(Ht,Dt)}Ot.set(q,et)}const ht=new Map;for(const E of i){if(E.name===d)continue;const q=$(E);q&&ht.set(E.name,q)}const Ie=new Map;for(const E of de){const q=Ot.get(E.id);if(q&&q.size>0){const Ve=(Ds=Ie.get(E.id))!=null?Ds:new Set;for(const et of q)Ve.add(et);Ie.set(E.id,Ve)}if(E.branchName===d)continue;const fe=ht.get(E.branchName);if(!fe||fe===E.id)continue;const ye=(Vs=Ie.get(E.id))!=null?Vs:new Set;ye.add(fe),Ie.set(E.id,ye)}const Ee=py(de,N,Ie),mt=new Map;for(const E of de){const q=(nn=mt.get(E.branchName))!=null?nn:[];q.push(E),mt.set(E.branchName,q)}const zt=new Map,xt=new Map,Vt=new Map,G=new Map,Me=new Map,Je=(E,q)=>{var et,Rt,Ht;if(q.length===0)return[];const fe=[...q].sort((Dt,qe)=>{var Pn,Vn;const sn=(Pn=Ee.get(Dt.visualId))!=null?Pn:Number.MAX_SAFE_INTEGER,fn=(Vn=Ee.get(qe.visualId))!=null?Vn:Number.MAX_SAFE_INTEGER;return sn!==fn?sn-fn:Oi(Dt.date)-Oi(qe.date)||Dt.id.localeCompare(qe.id)}),ye=new Map;for(const Dt of fe){const qe=((et=Dt.clusterKey)==null?void 0:et.trim())||`cluster:${E}:${Dt.id}`,sn=(Rt=ye.get(qe))!=null?Rt:[];sn.push(Dt),ye.set(qe,sn)}const Ve=[];for(const[Dt,qe]of ye.entries()){if(qe.length===0)continue;const fn=[...qe].sort((Vn,pn)=>{var ii,Xo;const Ms=(ii=Ee.get(Vn.visualId))!=null?ii:Number.MIN_SAFE_INTEGER,co=(Xo=Ee.get(pn.visualId))!=null?Xo:Number.MIN_SAFE_INTEGER;return Ms!==co?co-Ms:Oi(pn.date)-Oi(Vn.date)||pn.id.localeCompare(Vn.id)})[0].visualId,Pn={branchName:E,key:Dt,commitIds:qe.map(Vn=>Vn.visualId),leadId:fn,count:qe.length};Ve.push(Pn),G.set(Dt,fn),Me.set(Dt,qe.length);for(const Vn of Pn.commitIds){xt.set(Vn,Dt);const pn=Vn.split(":").slice(1).join(":"),Ms=(Ht=Vt.get(pn))!=null?Ht:[];Ms.includes(Dt)||Ms.push(Dt),Vt.set(pn,Ms)}}return Ve};for(const[E,q]of mt.entries())zt.set(E,Je(E,q));const Ze=new Map;for(const E of de)Ze.set(E.id,E);const ct=E=>{if(!E)return"none";const q=Array.from(Ze.values()).find(fe=>Qo(fe.id,E)||Qo(fe.id.slice(0,7),E)||Qo(E,fe.id));return q?`${q.id.slice(0,7)} ${q.branchName}`:E.slice(0,7)},Ae=b?["Lane rows (expected):",...[...n].sort((E,q)=>E.column-q.column||E.name.localeCompare(q.name)).map(E=>{var q;return`  row=${E.column} branch=${E.name} parent=${(q=E.parentName)!=null?q:"none"}`}),"",...i.flatMap(E=>{var Rt,Ht,Dt,qe,sn,fn,Pn,Vn;const q=(Rt=h[E.name])!=null?Rt:[],fe=[...(Ht=F.get(E.name))!=null?Ht:[]].reverse(),ye=new Set(((Dt=P.get(E.name))!=null?Dt:[]).map(pn=>pn.id)),Ve=(sn=(qe=fe.find(pn=>!pn.parentSha||!fe.some(Ms=>{var co;return Qo(Ms.fullSha,(co=pn.parentSha)!=null?co:"")})))!=null?qe:fe[0])!=null?sn:null,et=(Pn=(fn=Ve==null?void 0:Ve.parentSha)!=null?fn:Q.get(E.name))!=null?Pn:null;return[`Branch ${E.name}`,`  ahead=${(Vn=g[E.name])!=null?Vn:0} previews=${fe.length} rendered=${ye.size}`,`  db parent commit=${ct(et)}`,`  db child commit=${Ve?`${Ve.fullSha.slice(0,7)} ${E.name}`:"none"}`,...fe.map(pn=>{const Ms=ye.has(pn.fullSha)?"visible":"hidden",co=ye.has(pn.fullSha)?"kept by render set":"dropped by render set";return`  ${Ms} ${pn.fullSha.slice(0,7)} ${pn.message} [${co}]`}),q.length===0?"  no preview data":null].filter(pn=>pn!=null)})]:[],rt=b?Array.from(P.entries()).map(([E,q])=>[`Branch debug ${E}`,...q.map(fe=>`  ${fe.id.slice(0,7)} ${fe.message}`)].join(`
`)):[],it=Ee,pt=Mm/Fu,$t=20/Fu,st=z?_s+pt+$t:Yu+pt+$t,H=z?Yu+pt+$t:oc,te=Math.max(0,...de.map(E=>{var q;return(q=it.get(E.visualId))!=null?q:1})),me=de.map(E=>{var Ve,et;const q=N.get(E.branchName),fe=(Ve=it.get(E.visualId))!=null?Ve:1,ye=(et=q==null?void 0:q.column)!=null?et:0;return z?{commit:E,row:fe,column:ye,x:yr+(fe-1)*st,y:gr+ye*H}:{commit:E,row:fe,column:ye,x:yr+ye*oc,y:gr+(te-fe)*st}}),Se=E=>{var fe;const q=(fe=T[E.commit.visualId])!=null?fe:T[E.commit.id];return q?{...E,x:q.x,y:q.y}:E},Ke=me.map(Se),Fe=w.trim().toLowerCase(),Le=Fe?Ke.filter(E=>{const q=E.commit.id.toLowerCase(),fe=E.commit.id.slice(0,7).toLowerCase(),ye=E.commit.message.toLowerCase(),Ve=E.commit.branchName.toLowerCase();return q.includes(Fe)||fe.includes(Fe)||ye.includes(Fe)||Ve.includes(Fe)}):Ke,bt=S&&(Bs=Ke.find(E=>E.commit.id===S))!=null?Bs:null,Ue=new Set(Le.map(E=>E.commit.id)),Pt=(ro=j==null?void 0:j.headSha)!=null?ro:null,Ge=(()=>{var q,fe;const E=(q=j==null?void 0:j.branchName)!=null?q:null;return!Pt||!E?null:(fe=xt.get(`${E}:${Pt}`))!=null?fe:null})(),We=new Set;for(const E of zt.values())for(const q of E)q.count>1&&q.key!==Ge&&We.add(q.key);const kt=[...de].filter(E=>{var et;const q=xt.get(E.visualId);if(!q)return!0;const fe=G.get(q),ye=(et=Me.get(q))!=null?et:1,Ve=_.has(q)||!We.has(q)&&!x.has(q);return ye<=1||Ve||fe===E.visualId}),Bt=py(kt,N,Ie),Wt=Mm/Fu,Qe=20/Fu,Nt=z?_s+Wt+Qe:Yu+Wt+Qe,Tt=z?Yu+Wt+Qe:oc,_t=Math.max(0,...kt.map(E=>{var q;return(q=Bt.get(E.visualId))!=null?q:1})),an=kt.map(E=>{var Ve,et;const q=N.get(E.branchName),fe=(Ve=Bt.get(E.visualId))!=null?Ve:1,ye=(et=q==null?void 0:q.column)!=null?et:0;return Se(z?{commit:E,row:fe,column:ye,x:yr+(fe-1)*Nt,y:gr+ye*Tt}:{commit:E,row:fe,column:ye,x:yr+ye*oc,y:gr+(_t-fe)*Nt})}),ft=new Map;for(const E of an){const q=(Oo=ft.get(E.commit.id))!=null?Oo:[];q.push(E),ft.set(E.commit.id,q)}const Lt=new Map;for(const E of an){const q=xt.get(E.commit.visualId);if(!q)continue;const fe=Lt.get(q);(!fe||(z?E.x>fe.x:E.y<fe.y))&&Lt.set(q,E)}const zn=(E,q)=>`${E.toFixed(1)} ${q.toFixed(1)}`,Rn=Math.max(0,...an.map(E=>E.row)),kn=Math.max(0,...n.map(E=>E.column)),cs=Math.max(0,...an.map(E=>E.x+_s)),Xn=Math.max(0,...an.map(E=>E.y+xl+Is)),jn=Math.max(z?yr*2+Math.max(0,Rn-1)*Nt+_s+Yh+Qe:yr*2+(kn+1)*oc,cs+yr),Mn=Math.max(z?gr*2+kn*Tt+Is+Yh+Qe:gr*2+Math.max(0,Rn-1)*Nt+Is+Yh+Qe,Xn+gr),$n=[],rn=new Map(i.map(E=>{var fe,ye;const q=new Date((ye=(fe=E.createdDate)!=null?fe:E.divergedFromDate)!=null?ye:E.lastCommitDate).getTime();return[E.name,Number.isFinite(q)?q:0]})),Tn=E=>{var q;return(q=rn.get(E))!=null?q:0},nt=[],ln=E=>{b&&nt.push(E)},oo=new Set,No=new Map,us=(E,q)=>{var ye;const fe=(ye=No.get(E))!=null?ye:[];fe.includes(q)||fe.push(q),No.set(E,fe)},As=new Set,ti=new Set,ks=new Set,_o=(E,q)=>{var Ve,et;if(!E)return null;const fe=Wu(ft,E,q);if(fe)return fe;const ye=(Ve=xt.get(`${q!=null?q:d}:${E}`))!=null?Ve:xt.get(E);return ye&&(et=Lt.get(ye))!=null?et:null},io=new Set;for(const E of i){const q=se(E);q&&ti.add(q);const fe=(xs=Q.get(E.name))!=null?xs:null;fe&&ks.add(fe)}const go=E=>{var Ve;const q=_o(E.id,E.branchName);if(q)return q;const fe=xt.get(E.visualId);if(!fe)return null;const ye=G.get(fe);return ye&&(Ve=an.find(et=>et.commit.id===ye))!=null?Ve:null},vn=(E,q)=>E?Wu(ft,E,q):null,ni=(E,q)=>z?{x:E.x-Xi,y:E.y+Is/2,face:"left"}:{x:E.x+_s/2,y:E.y+Is+Xi,face:"bottom"},Hs=E=>z?{x:E.x-Xi,y:E.y+Is/2,face:"left"}:{x:E.x+_s/2,y:E.y+Is+Xi,face:"bottom"},Ns=(E,q)=>E.column!==q.column?!0:z?E.commit.branchName!==q.commit.branchName:!1,ds=(E,q,fe)=>{if(!z)return{x:q?E.x+_s:E.x+_s/2,y:q?E.y+Is/2:E.y,face:q?"right":"top"};if(!q)return{x:E.x+_s+Xi,y:E.y+Is/2,face:"right"};if(fe&&fe.column===E.column&&fe.commit.branchName!==E.commit.branchName){if(fe.x>E.x)return{x:E.x+_s/2,y:E.y+Is+Xi,face:"bottom"};if(fe.x<E.x)return{x:E.x+_s/2,y:E.y-Xi,face:"top"}}return!fe||fe.column===E.column?{x:E.x+_s+Xi,y:E.y+Is/2,face:"right"}:fe.column>E.column?{x:E.x+_s/2,y:E.y+Is+Xi,face:"bottom"}:{x:E.x+_s/2,y:E.y-Xi,face:"top"}},Ho=E=>z?{x:E.x+_s/2,y:E.y+Is+Xi,face:"bottom"}:{x:E.x+_s,y:E.y+Is/2,face:"right"},yo=(E,q)=>Wu(ft,E,q),Rs=(E,q)=>vn(E,q),Us=[],En=new Set;for(const E of tt){const q=(Co=_o(E.targetCommitSha,E.targetBranchName))!=null?Co:null;if(!q){ln({id:`merge:${E.mergeCommitSha}:${E.sourceCommitSha}:target`,kind:"merge",parent:E.sourceCommitSha,child:E.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const fe=E.sourceCommitSha,ye=`merge:${E.mergeCommitSha}:${fe!=null?fe:"unknown"}`;if(!fe||Qo(fe,E.targetCommitSha)){ln({id:ye,kind:"merge",parent:fe!=null?fe:"unknown",child:E.targetCommitSha,rendered:!1,reason:fe?"merged parent equals merge target sha":"missing merged parent sha"});continue}const Ve=(zo=Wu(ft,fe))!=null?zo:null;if(!Ve){ln({id:ye,kind:"merge",parent:fe,child:E.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(Ve.commit.id===q.commit.id){ln({id:ye,kind:"merge",parent:Ve.commit.id,child:q.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let et,Rt,Ht;const Dt=z?q.x+_s/2:q.x+_s-Xh,qe=z?q.y+Is+Xh:q.y+Is/2,sn=z?"bottom":"right";z?(et=Ve.x+_s+Xh,Rt=Ve.y+Is/2,Ht="right"):(et=Ve.x+_s/2,Rt=Ve.y,Ht="top");const fn=`${et.toFixed(2)}:${Rt.toFixed(2)}:${Dt.toFixed(2)}:${qe.toFixed(2)}`;if(En.has(fn)){ln({id:ye,kind:"merge",parent:Ve.commit.id,child:q.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}En.add(fn),Us.push({id:ye,fromX:et,fromY:Rt,toX:Dt,toY:qe,fromFace:Ht,toFace:sn,zIndex:Tn(Ve.commit.branchName)}),ln({id:ye,kind:"merge",parent:Ve.commit.id,child:q.commit.id,rendered:!0,reason:`merge connector rendered to ${E.targetBranchName}`})}const is=new Set;for(const E of i){if(E.name===d)continue;const q=ie.get(E.name);if(!q)continue;const fe=ue(E),ye=yo((Wo=Q.get(E.name))!=null?Wo:"",fe),Ve=(Ys=ke.get(E.name))!=null?Ys:q,et=(bo=Rs(Ve.id,E.name))!=null?bo:go(Ve);if(!ye||!et||ye.commit.id===et.commit.id){const sn=xt.get(`${E.name}:${q.id}`),fn=xt.get(`${E.name}:${Ve.id}`),Pn=!!sn&&!We.has(sn),Vn=!!fn&&!We.has(fn),pn=!!sn&&!_.has(sn)&&(Pn?x.has(sn):!0),Ms=!!fn&&!_.has(fn)&&(Vn?x.has(fn):!0);!ye&&!pn&&us((oi=et==null?void 0:et.commit.id)!=null?oi:q.id,"Missing parent node"),!et&&!Ms&&us(q.id,"Missing child node"),ln({id:`branch:${(Gn=ye==null?void 0:ye.commit.id)!=null?Gn:"null"}->${(dn=et==null?void 0:et.commit.id)!=null?dn:"null"}`,kind:"branch",parent:(Fo=ye==null?void 0:ye.commit.id)!=null?Fo:"null",child:(Un=et==null?void 0:et.commit.id)!=null?Un:"null",rendered:!1,reason:ye?et?"parent and child are the same node":"missing child node":"missing parent node"});continue}const Rt=`branch:${ye.commit.id}->${et.commit.id}`;if(io.has(Rt)){ln({id:Rt,kind:"branch",parent:ye.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate connector key"});continue}io.add(Rt),As.add(ye.commit.id);const Ht=Ns(ye,et);ye.commit.branchName!==et.commit.branchName&&is.add(ye.commit.id);const Dt=Ho(ye),qe=Hs(et);$n.push({id:Rt,fromX:Dt.x,fromY:Dt.y,toX:qe.x,toY:qe.y,fromFace:Dt.face,toFace:qe.face,zIndex:Tn(et.commit.branchName)}),ln({id:Rt,kind:"branch",parent:ye.commit.id,child:et.commit.id,rendered:!0,reason:Ht?"branch connector rendered":z?"horizontal connector rendered":"vertical connector rendered"})}for(const E of de){const q=go(E);if(!q)continue;const fe=(Ls=E.parentSha)!=null?Ls:null;if(!fe)continue;const ye=(pi=_o(fe,E.branchName))!=null?pi:yo(fe,E.branchName);if(!ye){const Dt=(lo=xt.get(`${E.branchName}:${fe}`))!=null?lo:xt.get(fe),qe=!!Dt&&!We.has(Dt);!!Dt&&!_.has(Dt)&&(qe?x.has(Dt):!0)||us(E.id,"Missing parent node"),ln({id:`${E.visualId}->${fe}`,kind:"ancestry",parent:fe,child:E.id,rendered:!1,reason:"missing parent node"});continue}if(q.commit.id===ye.commit.id){us(q.commit.id,"Parent and child resolve to the same node"),ln({id:`${ye.commit.id}->${q.commit.id}`,kind:"ancestry",parent:ye.commit.id,child:q.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const Ve=`${E.branchName}:${(js=ye.commit.visualId)!=null?js:ye.commit.id}->${q.commit.visualId}`;if(io.has(Ve)){us(ye.commit.id,"Duplicate connector key"),us(q.commit.id,"Duplicate connector key"),ln({id:Ve,kind:"ancestry",parent:ye.commit.id,child:q.commit.id,rendered:!1,reason:"duplicate connector key"});continue}io.add(Ve),As.add(ye.commit.id);const et=Ns(ye,q),Rt=ds(ye,et,q),Ht=ni(q);$n.push({id:Ve,fromX:Rt.x,fromY:Rt.y,toX:Ht.x,toY:Ht.y,fromFace:Rt.face,toFace:Ht.face,zIndex:Tn(q.commit.branchName)}),ln({id:Ve,kind:"ancestry",parent:ye.commit.id,child:q.commit.id,rendered:!0,reason:et?"ancestry connector rendered":z?"horizontal ancestry rendered":"vertical ancestry rendered"}),oo.add(ye.commit.id),oo.add(q.commit.id)}const wn=new Map;for(const E of an){const q=(vo=wn.get(E.commit.branchName))!=null?vo:[];q.push(E),wn.set(E.commit.branchName,q)}for(const[E,q]of wn.entries()){if(q.length<2)continue;const fe=[...q].sort((ye,Ve)=>{var et,Rt,Ht,Dt,qe,sn,fn,Pn;return ye.row!==Ve.row?ye.row-Ve.row:Oi((Rt=(et=ye==null?void 0:ye.commit)==null?void 0:et.date)!=null?Rt:null)-Oi((Dt=(Ht=Ve==null?void 0:Ve.commit)==null?void 0:Ht.date)!=null?Dt:null)||((sn=(qe=ye==null?void 0:ye.commit)==null?void 0:qe.id)!=null?sn:"").localeCompare((Pn=(fn=Ve==null?void 0:Ve.commit)==null?void 0:fn.id)!=null?Pn:"")});for(let ye=1;ye<fe.length;ye+=1){const Ve=fe[ye-1],et=fe[ye];if(Ve.commit.id===et.commit.id)continue;const Rt=(bs=et.commit.parentSha)!=null?bs:null;if(Rt&&yo(Rt,et.commit.branchName))continue;const Ht=`chain:${E}:${Ve.commit.id}->${et.commit.id}`;if(io.has(Ht)){us(Ve.commit.id,"Duplicate branch chain connector"),us(et.commit.id,"Duplicate branch chain connector"),ln({id:Ht,kind:"ancestry",parent:Ve.commit.id,child:et.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}io.add(Ht);const Dt=Ns(Ve,et),qe=ds(Ve,Dt,et),sn=ni(et);$n.push({id:Ht,fromX:qe.x,fromY:qe.y,toX:sn.x,toY:sn.y,fromFace:qe.face,toFace:sn.face,zIndex:Tn(et.commit.branchName)}),ln({id:Ht,kind:"ancestry",parent:Ve.commit.id,child:et.commit.id,rendered:!0,reason:"branch chain rendered"}),oo.add(Ve.commit.id),oo.add(et.commit.id)}}return{branchByName:L,laneByName:N,mainCommits:Y,branchCommitsByLane:P,branchPreviewSets:F,allCommits:de,clustersByBranch:zt,clusterKeyByCommitId:xt,clusterKeyBySha:Vt,leadByClusterKey:G,clusterCounts:Me,debugRows:Ae,branchDebugRows:rt,nodes:me,normalizedSearchQuery:Fe,matchingNodes:Le,matchingNodeIds:Ue,focusedNode:bt,checkedOutClusterKey:Ge,defaultCollapsedClumps:We,visibleCommitsList:kt,renderNodes:an,visibleNodesBySha:ft,visibleNodeByClusterKey:Lt,pointFormatter:zn,contentWidth:jn,contentHeight:Mn,connectors:$n,mergeConnectors:Us,connectorDecisions:nt,nodeWarnings:No,connectorParentShas:As,branchStartShas:ti,branchOffNodeShas:ks,crossBranchOutgoingShas:is,commitIdsWithRenderedAncestry:oo,branchBaseCommitByName:ie,firstBranchCommitByName:Be,mergeDestinations:tt,mergeTargetBranchesBySourceBranchAndCommitSha:dt}}const yw=8,xw=44,_y=120,gy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Wx(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<yw){const P=d/_,F=h/_,V=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+P*V,c1y:n+F*V,c2x:i-P*V,c2y:a-F*V}}if(Math.min(p,g)<xw){const P=d/_,F=h/_,V=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+P*V,c1y:n+F*V,c2x:i-P*V,c2y:a-F*V}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),j=Math.min(120,g*.32),k=Math.min(160,g*.42),T=gy(c),z=gy(u);if(!(T==="v"&&z==="h"||T==="v"&&z==null&&g>=p||T==null&&z==="h"&&g>=p||T==="v"&&z==="v"||T==null&&z==null&&g>p)){const P=i,F=n;return{kind:"elbowH",cx:P,cy:F,s1c1x:t+x*w,s1c1y:n,s1c2x:P-x*S,s1c2y:F,s2c1x:P,s2c1y:F+b*j,s2c2x:i,s2c2y:a-b*k}}const N=t,Y=a;return{kind:"elbowV",cx:N,cy:Y,s1c1x:t,s1c1y:n+b*k,s1c2x:N,s1c2y:Y-b*j,s2c1x:N+x*w,s2c1y:Y,s2c2x:i-x*S,s2c2y:a}}function bw(t,n,i,a,c,u){const d=Wx(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function yy(t,n,i,a,c,u,d){const h=Wx(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,j=a>=n?1:-1,k=h.cx-S*w,T=h.cy+j*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(k-S*w*.5,h.cy)} ${c(k,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,T)}`,`C ${c(h.cx,T+j*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const up=2.25,ic=up/2,vw=.45,ww=.01,la=up,kd=10,Sw=-100,xy=0,by=.9,Cw=.9,vy=.001,Gh=.001,kw=12,jw=_s+48;function Cn(...t){return t.filter(Boolean).join(" ")}function Mw(t){return Math.max(vw,Math.min(up,t))}function Tw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function Fx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Ew(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function Aw(t,n,i,a,c,u,d){const h=bw(t,n,i,a,u,d),p=Ew(h);return Fx(c,p)}function Xx(t,n){return{left:t.x,top:t.y+n,right:t.x+_s,bottom:t.y+xl+Is+4}}function Dw(t,n){const i=jw,a=Math.max(120,Math.ceil(xl+Is+4-n+24)),c=new Map;for(const u of t){const d=Xx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let j=c.get(S);j||(j=new Set,c.set(S,j)),j.add(x)}}return{cellW:i,cellH:a,buckets:c}}function Nw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const j=d.get(`${w},${S}`);if(j)for(const k of j)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const j=Xx(S,a);Fx(n,j)&&b.add(w)}return b}function wy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/la;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function Rw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Sy(t,n,i){const a=n/la;return!Number.isFinite(a)||a<=0?t:Rw(t,100/a)}function Cy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function Ci(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Tm(t,n){if(n){const i=Cy(n),a=Cy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Tm(t,n)}function Bw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function Lw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stashInProgress:a,stashDisabled:c,pushInProgress:u,hasUncommittedChanges:d,createBranchFromNodeInProgress:h,onCommitLocalChanges:p,onStashLocalChanges:g,onPushCurrentBranch:_,onPushAllBranches:x,onPushCommitTargets:b,onMergeRefsIntoBranch:w,selectedPushTargets:S,selectedPushLabel:j,canPushCurrentBranch:k,pushCurrentBranchLabel:T,pushableRemoteBranchCount:z,selectedCommitTargetOption:L,mergeInProgress:N,setMergeTargetCommitSha:Y,worktrees:P,currentRepoPath:F,worktreeMenuOpen:V,setWorktreeMenuOpen:Z,onSwitchToWorktree:ae,onRemoveWorktree:ie,removeWorktreeInProgress:ke,setCommitDialogOpen:Be,setNewBranchDialogOpen:Q}){var Ot;const ue=t.length>0,$=t.length>0&&t.every(ht=>ht==="WORKING_TREE"),[se,W]=y.useState(!1),K=y.useRef(null),_e=y.useRef(null),R="inline-flex h-7 items-center rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",oe=!!p&&d&&!i&&!n&&(!ue||$),le=!!_&&k&&!ue&&!u,de=!!b&&S.length>0&&!u,Ne=!!x&&z>=2&&!ue&&!u,Pe=!!g&&!c&&!ue&&!a,Re="Push Selected...",tt=oe?{label:n?"Committing...":"Commit",run:()=>Be(!0),disabled:!oe}:le?{label:u?"Pushing...":T,run:()=>void(_==null?void 0:_()),disabled:!le}:de?{label:Re,run:()=>void(b==null?void 0:b(S.map(ht=>({branchName:ht.branchName,targetSha:ht.targetSha})))),disabled:!de}:null;return y.useEffect(()=>{const ht=Ie=>{var mt,zt;const Ee=Ie.target;Ee&&((mt=K.current)!=null&&mt.contains(Ee)||(zt=_e.current)!=null&&zt.contains(Ee)||(W(!1),Z(!1)))};return window.addEventListener("pointerdown",ht),()=>window.removeEventListener("pointerdown",ht)},[Z]),l.jsx("div",{className:"pointer-events-none z-[60] flex w-full justify-end",children:l.jsxs("div",{className:"pointer-events-auto flex w-fit max-w-full flex-nowrap items-center justify-start gap-[9px]",children:[l.jsxs("div",{ref:K,className:"relative inline-flex h-7 items-stretch rounded-md border border-border/60 bg-card/95",children:[l.jsx("button",{type:"button",onClick:()=>{tt&&tt.run()},disabled:!tt||tt.disabled,className:Cn(R,"h-full rounded-r-none border-0 bg-transparent pr-1 hover:bg-accent"),children:(Ot=tt==null?void 0:tt.label)!=null?Ot:"Commit"}),l.jsx("button",{type:"button",onClick:()=>W(ht=>!ht),disabled:!tt,"aria-haspopup":"menu","aria-expanded":se,className:Cn(R,"h-full rounded-l-none border-0 bg-transparent pl-1 hover:bg-accent"),title:"More actions",children:l.jsx(Hx,{className:"h-3.5 w-3.5 shrink-0"})}),se&&tt?l.jsxs("div",{className:"absolute left-0 top-full z-[70] mt-2 inline-flex w-max min-w-0 flex-col overflow-hidden rounded-md border border-border/60 bg-card p-1",children:[l.jsx("button",{type:"button",onClick:()=>{W(!1),Be(!0)},disabled:!oe,className:Cn(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!oe&&"text-muted-foreground opacity-50"),children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>{W(!1),_==null||_()},disabled:!le,className:Cn(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!le&&"text-muted-foreground opacity-50"),children:u?"Pushing...":T}),l.jsx("button",{type:"button",onClick:()=>{W(!1),b==null||b(S.map(ht=>({branchName:ht.branchName,targetSha:ht.targetSha})))},disabled:!de,className:Cn(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!de&&"text-muted-foreground opacity-50"),title:j,children:Re}),l.jsx("button",{type:"button",onClick:()=>{W(!1),x==null||x()},disabled:!Ne,className:Cn(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Ne&&"text-muted-foreground opacity-50"),children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>{W(!1),g==null||g()},disabled:!Pe,className:Cn(R,"w-max justify-start whitespace-nowrap rounded-md border-0 bg-transparent px-2",!Pe&&"text-muted-foreground opacity-50"),children:a?"Stashing...":"Stash"})]}):null]}),l.jsx("div",{className:"flex w-fit flex-nowrap items-center gap-[9px]",children:l.jsx("button",{type:"button",onClick:()=>Q(!0),disabled:h,className:Cn(R,"pointer-events-auto relative z-10 bg-background"),children:h?"Creating...":"New Branch"})}),t.length>1&&L.options.length>0&&L.targetBranch&&w?l.jsxs("div",{className:"pointer-events-auto inline-flex w-fit flex-nowrap items-center gap-[9px] rounded-md border border-border/60 bg-card/95 px-2 py-1",children:[l.jsx("span",{className:"px-1 text-[11px] font-medium text-muted-foreground",children:"Merge to"}),L.options.map(ht=>{const Ie=ht.targetBranch===L.targetBranch;return l.jsx("button",{type:"button",onClick:()=>Y(ht.targetSha),className:Cn("rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium transition-colors",Ie?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:ht.targetBranch},`merge-${ht.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void w(L.sources,L.targetBranch),disabled:L.sources.length===0||N,className:"rounded-md border border-border/60 px-1.5 h-4.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:N?"Merging...":"Confirm"})]}):null,P.length>0&&(ae||ie)?l.jsxs("div",{ref:_e,className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>Z(ht=>!ht),className:R,children:[P.length," ",P.length===1?"Worktree":"Worktrees"]}),V?l.jsx("div",{className:"absolute left-0 top-full z-[70] mt-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border/60 bg-card p-2",children:P.map(ht=>{var Ie;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:ht.path,children:Tm(ht,F)?Bw(ht.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(Ie=ht.branchName)!=null?Ie:"detached"," • ",ht.headSha.slice(0,7)]})]}),Tm(ht,F)?l.jsxs("div",{className:"flex items-center gap-1",children:[ae?l.jsx("button",{type:"button",onClick:()=>{Z(!1),ae(ht.path)},disabled:ke||ht.pathExists===!1,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ie?l.jsx("button",{type:"button",onClick:()=>void ie(ht.path,ht.isPrunable),disabled:ke,className:"rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:ke?"...":"Remove"}):null]}):null]},ht.path)})}):null]}):null]})})}function Ow({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let g=null;const _=requestAnimationFrame(()=>{g=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),g!=null&&cancelAnimationFrame(g)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function zw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:g,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,iconScaleStyle:S,normalizedSearchQuery:j,matchingNodeIds:k,focusedNode:T,renderNodes:z,shouldRenderNode:L,manuallyOpenedClumps:N,manuallyClosedClumps:Y,defaultCollapsedClumps:P,leadByClusterKey:F,clusterKeyByCommitId:V,clusterCounts:Z,commitIdsWithRenderedAncestry:ae,nodeWarnings:ie,connectorParentShas:ke,branchStartShas:Be,branchOffNodeShas:Q,crossBranchOutgoingShas:ue,branchBaseCommitByName:$,branchStartAccentClass:se,connectorParentAccentClass:W,commitCornerRadiusPx:K,lineStrokeWidth:_e,pointFormatter:R,connectors:oe,mergeConnectors:le,cullConnectorPath:de,flushCameraReactTick:Ne,setManuallyOpenedClumps:Pe,setManuallyClosedClumps:Re,onCommitCardClick:tt,unpushedCommitShasSetByBranch:dt,checkedOutHeadSha:Ot}){const[ht,Ie]=y.useState(new Set),Ee=y.useRef(null);y.useEffect(()=>{const G=new Set;Z.forEach((Ze,ct)=>{(N.has(ct)||!P.has(ct)&&!Y.has(ct))&&G.add(ct)});const Me=Ee.current;if(Me==null){Ee.current=G;return}const Je=[];if(G.forEach(Ze=>{Me.has(Ze)||Je.push(Ze)}),Je.length>0){Ie(ct=>{const Ae=new Set(ct);return Je.forEach(rt=>Ae.add(rt)),Ae});const Ze=window.setTimeout(()=>{Ie(ct=>{const Ae=new Set(ct);return Je.forEach(rt=>Ae.delete(rt)),Ae})},260);return Ee.current=G,()=>{window.clearTimeout(Ze)}}Ee.current=G},[Z,P,Y,N]);const mt=(G,Me)=>{const Je=Me.zIndex-G.zIndex;if(Je!==0)return Je;const Ze=Math.min(G.fromY,G.toY),ct=Math.min(Me.fromY,Me.toY),Ae=Ze-ct;return Ae!==0?Ae:G.id.localeCompare(Me.id)},zt=le.filter(G=>de(G)).sort(mt),xt=oe.filter(G=>de(G)).sort(mt),Vt=z.filter(G=>L(G));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[Vt.map(G=>{var Ge,We,kt,Bt,Wt;const Me=V.get(G.commit.visualId),Je=Me?N.has(Me)||!P.has(Me)&&!Y.has(Me):!1,Ze=Me?F.get(Me)===G.commit.visualId:!1,ct=Me!=null&&Je&&!Ze&&ht.has(Me),Ae=Me&&(Ge=Z.get(Me))!=null?Ge:1,rt=ae.has(G.commit.id),it=(We=ie.get(G.commit.id))!=null?We:[],pt=it.length>0&&!rt,$t=w.includes(G.commit.id),st=G.commit.id==="WORKING_TREE"||G.commit.kind==="uncommitted",H=G.commit.kind==="stash"||G.commit.id.startsWith("STASH:"),te=/^STASH:(\d+)$/.exec(G.commit.id),me=te?`Stash:${te[1]}`:null,Se=H?G.commit.message.trim()&&G.commit.message.trim()!=="git-visualizer"?G.commit.message:"Stashed changes":G.commit.message,Ke=G.commit.kind==="branch-created"&&G.commit.id.startsWith("BRANCH_HEAD:"),Fe=st||((Bt=(kt=dt.get(G.commit.branchName))==null?void 0:kt.has(G.commit.id))!=null?Bt:!1),bt=(st||Ot!=null&&G.commit.id===Ot)&&!$t,Ue=bt?"text-[#38BDF2]":$t?"text-[#158EFC]":"text-muted-foreground",Pt=bt?{color:"#38BDF2"}:$t?{color:"#158EFC"}:void 0;return l.jsxs(Ow,{fadeIn:ct,dataCommitCard:"true",className:Cn("group absolute z-20 cursor-grab active:cursor-grabbing",j&&!k.has(G.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",j&&k.has(G.commit.id)?"scale-[1.01]":"",(T==null?void 0:T.commit.id)===G.commit.id?"z-30 scale-[1.015]":""),style:{left:G.x,top:G.y,width:_s,height:xl+Is+4,overflow:"visible"},onClick:Qe=>tt(Qe,G),onPointerDown:Qe=>g(Qe,G),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Cn("min-w-0 h-4 flex-1 text-sm font-medium leading-none",Ue,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Pt,children:H&&me?me:G.commit.branchName?`${G.commit.branchName}/${G.commit.id.slice(0,7)}`:G.commit.id.slice(0,7)}),Ze&&Ae>1?l.jsx("button",{type:"button",onMouseDown:Qe=>{Qe.stopPropagation()},onClick:Qe=>{if(Qe.stopPropagation(),Qe.preventDefault(),!Me)return;!P.has(Me)?(Pe(Tt=>{if(!Tt.has(Me))return Tt;const _t=new Set(Tt);return _t.delete(Me),_t}),Re(Tt=>{const _t=new Set(Tt);return _t.has(Me)?_t.delete(Me):_t.add(Me),_t})):(Re(Tt=>{if(!Tt.has(Me))return Tt;const _t=new Set(Tt);return _t.delete(Me),_t}),Pe(Tt=>{const _t=new Set(Tt);return _t.has(Me)?_t.delete(Me):_t.add(Me),_t})),Ne()},className:Cn("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",Ue),style:Pt,children:Je?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ae}`}):null]})}),l.jsx("div",{className:Cn("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",bt&&!Fe&&!H&&!Ke?"bg-[#EBF7FE]":$t&&!Fe&&!H&&!Ke?"bg-[#E5F0FF]":Fe||H||Ke?"bg-transparent":"bg-[#F5F5F5]",H||st||Ke?"border-dashed":"",Q.has(G.commit.id)||Be.has(G.commit.id)||ue.has(G.commit.id)?se:ke.has(G.commit.id)?W:((Wt=$.get(G.commit.branchName))==null?void 0:Wt.id)===G.commit.id?"border-amber-500":pt?"border-red-500":"",(j&&k.has(G.commit.id)&&!d,"")),style:{top:0,borderWidth:`${H||st||Ke?_e*(2/1.5):_e}px`,borderColor:bt?"#38BDF2":$t?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${K}px`,borderBottomRightRadius:`${K}px`,borderBottomLeftRadius:`${K}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Cn("max-w-[38rem] select-text text-sm font-medium leading-tight tracking-tight text-muted-foreground",Ue,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),"data-selectable-text":"true",style:Pt,children:Ze&&Je?Se:Ze&&Ae>1?`${Se} +${Ae-1}`:Se}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:pt?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:it.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Cn("select-text text-sm font-medium",Ue),"data-selectable-text":"true",style:Pt,children:["@",G.commit.author]}),l.jsx("div",{className:Cn("select-text text-sm font-medium",Ue),"data-selectable-text":"true",style:Pt,children:new Date(G.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(T==null?void 0:T.commit.id)===G.commit.id&&j?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},G.commit.visualId)}),l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[zt.map(G=>{const{fromX:Me,fromY:Je,toX:Ze,toY:ct}=G,Ae=yy(Me,Je,Ze,ct,R,G.fromFace,G.toFace);return l.jsx("path",{d:Ae,fill:"none",stroke:Wh,strokeWidth:_e,strokeLinecap:"round",strokeLinejoin:"round"},G.id)}),xt.map(G=>{const{fromX:Me,fromY:Je,toX:Ze,toY:ct}=G,Ae=yy(Me,Je,Ze,ct,R,G.fromFace,G.toFace);return l.jsx("path",{d:Ae,fill:"none",stroke:Wh,strokeWidth:_e,strokeLinecap:"round",strokeLinejoin:"round"},G.id)})]})]})})})}function $w({isOpen:t,onClose:n,visibleBounds:i,renderedNodeCount:a,totalNodeCount:c,renderedMergeConnectorCount:u,totalMergeConnectorCount:d,renderedConnectorCount:h,totalConnectorCount:p,mapGridCullViewportInsetScreenPx:g,debugRows:_,branchDebugRows:x,connectorDecisions:b}){return l.jsx(l.Fragment,{children:t?l.jsxs("div",{className:"absolute right-2.5 top-10 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:n,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${g}px screen/side): ${i?`${(i.right-i.left).toFixed(0)} x ${(i.bottom-i.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${a} / ${c}`,`Rendered merge connectors: ${u} / ${d}`,`Rendered connectors: ${h} / ${p}`,"",..._,...x,"",...b.map(w=>`${w.rendered?"rendered":"skipped"} [${w.kind}] ${w.parent.slice(0,7)} -> ${w.child.slice(0,7)} (${w.reason})`)].join(`
`)})})]}):null})}function Iw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:j,onNewBranchCreateModeChange:k,onNewBranchDialogClose:T,onNewBranchConfirm:z,selectedCommitCanCreateBranch:L,currentCheckedOutCommitCanCreateBranch:N,createBranchFromNodeInProgress:Y}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:a,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:P=>P.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:P=>i(P.target.value),onKeyDown:P=>{(P.metaKey||P.ctrlKey)&&P.key==="Enter"&&(P.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:p,children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",onClick:P=>P.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(P=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:P},P))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",onClick:T,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",onClick:P=>P.stopPropagation(),children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:Cn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>k("new-root"),className:Cn("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:P=>j(P.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:T,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:z,disabled:!w.trim()||Y||S==="from-selected-node"&&!L&&!N,className:Cn("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:Y?"Creating...":"Create"})]})]})}):null]})}const ky="/icon-GitOrientation.svg";function Pw({orientation:t,onOrientationChange:n}){const i=t==="horizontal"?"vertical":"horizontal";return l.jsxs("button",{type:"button",onClick:()=>n(i),className:Cn("inline-flex h-7 items-center gap-1.5 rounded-md border border-border/60 bg-card pl-1.5 pr-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),"aria-label":`Rotate view to ${i}`,title:"Rotate View",children:[l.jsx("span",{className:"relative size-4 shrink-0",children:l.jsx("span",{"aria-hidden":"true",className:Cn("absolute inset-0 bg-muted-foreground transition-transform duration-300 ease-in-out",t==="vertical"&&"rotate-[-90deg]"),style:{WebkitMaskImage:`url(${ky})`,WebkitMaskPosition:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"contain",maskImage:`url(${ky})`,maskPosition:"center",maskRepeat:"no-repeat",maskSize:"contain"}})}),l.jsx("span",{className:"whitespace-nowrap text-[12px] font-normal leading-none text-muted-foreground",children:"Rotate View"})]})}function Hw({query:t,onQueryChange:n,resultCount:i,resultIndex:a,onJump:c}){return l.jsxs("div",{className:"window-no-drag flex h-7 min-w-64 flex-1 max-w-[42rem] items-center gap-2 rounded-full border border-border/60 bg-card/95 pl-2.5 pr-1",children:[l.jsx(lw,{className:"h-3.5 w-3.5 shrink-0 text-muted-foreground"}),l.jsx("input",{value:t,onChange:u=>n(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),c(1))},placeholder:"Search",className:"w-full bg-transparent text-[11px] text-foreground outline-none placeholder:text-muted-foreground/70"}),i!=null&&i>0?l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[11px] font-medium tabular-nums text-foreground",children:[(a!=null?a:0)+1,"/",i]}),l.jsx("button",{type:"button",onClick:()=>c(-1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Previous search result",title:"Previous result",children:l.jsx(nw,{className:"h-4 w-4 shrink-0"})}),l.jsx("button",{type:"button",onClick:()=>c(1),className:"inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground","aria-label":"Next search result",title:"Next result",children:l.jsx(Hx,{className:"h-4 w-4 shrink-0"})})]}):null]})}function Uw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(ic),c=y.useRef({panX:0,panY:0,zoom:ic}),u=y.useRef(null),d=y.useRef(ic),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(ic),[b,w]=y.useState(0),S=y.useRef(null),j=y.useRef(0),k=y.useCallback(()=>{const Z=t.current;if(!Z)return null;const ae=Z.getBoundingClientRect(),ie=getComputedStyle(Z),ke=Number.parseFloat(ie.borderLeftWidth)||0,Be=Number.parseFloat(ie.borderTopWidth)||0,Q=Number.parseFloat(ie.paddingLeft)||kd,ue=Number.parseFloat(ie.paddingTop)||kd;return{x:ae.left+ke+Q,y:ae.top+Be+ue}},[t]),T=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(Z=>Z+1)}),j.current=performance.now()},[]),z=y.useCallback((Z,ae,ie)=>{const ke=c.current;c.current={panX:Z,panY:ae,zoom:ie};const Be=n.current;if(Be&&(Be.style.transform=`translate3d(${Z}px, ${ae}px, 0) scale(${ie/la})`),Math.abs(d.current-ie)>Gh&&(d.current=ie,x(ie)),Math.abs(ie-ke.zoom)>Gh){T();return}const $=performance.now()-j.current;if($>=xy){T();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,T()},xy-$)},[T,n]),L=y.useRef(null),N=y.useCallback(()=>{u.current!=null||!L.current||(u.current=window.requestAnimationFrame(L.current))},[]),Y=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),P=y.useCallback((Z,ae,ie)=>{i.current={x:Z,y:ae},a.current=ie,Y(),N()},[Y,N]);L.current=()=>{u.current=null;const Z=c.current,ae=i.current.x,ie=i.current.y,ke=a.current,Be=Math.abs(ae-Z.panX)<=vy?ae:Z.panX+(ae-Z.panX)*by,Q=Math.abs(ie-Z.panY)<=vy?ie:Z.panY+(ie-Z.panY)*by,ue=Math.abs(ke-Z.zoom)<=Gh?ke:Z.zoom+(ke-Z.zoom)*Cw;z(Be,Q,ue),Be!==ae||Q!==ie||ue!==ke?L.current&&(u.current=window.requestAnimationFrame(L.current)):T()};const F=y.useCallback((Z,ae,ie)=>{const ke=Mw(ie),Be=c.current,Q=k();if(!Q){P(i.current.x,i.current.y,ke);return}const ue=Z-Q.x,$=ae-Q.y,se=Be.zoom/la,W=ke/la,K=(ue-Be.panX)/se,_e=($-Be.panY)/se;P(ue-K*W,$-_e*W,ke)},[k,P]),V=y.useCallback(Z=>{if(Z.preventDefault(),Z.ctrlKey||Z.metaKey){const ae=Math.exp(-Z.deltaY*ww);F(Z.clientX,Z.clientY,a.current*ae);return}P(i.current.x-Z.deltaX,i.current.y-Z.deltaY,a.current)},[P,F]);return y.useLayoutEffect(()=>(z(0,0,ic),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[z]),y.useLayoutEffect(()=>{const Z=n.current;if(!Z)return;const ae=c.current;Z.style.transform=`translate3d(${ae.panX}px, ${ae.panY}px, 0) scale(${ae.zoom/la})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:T,syncCamera:P,handleWheel:V}}function Vw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function Yw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[j,k]=y.useState(null),T=y.useCallback(L=>{const N=t.current,Y=i();if(!N||!Y)return[];const P=N.getBoundingClientRect(),F=n.current.zoom/la;if(F<=0)return[];const V=[],Z=L.left,ae=L.left+L.width,ie=L.top,ke=L.top+L.height;for(const Be of a){if(!c(Be))continue;const Q=Y.x+n.current.panX+Be.x*F-P.left,ue=Y.y+n.current.panY+Be.y*F-P.top,$=Q+_s*F,se=ue+(xl+Is)*F;!($<Z||Q>ae||se<ie||ue>ke)&&V.push(Be.commit.id)}return V},[i,a,n,t,c]),z=y.useCallback(L=>{if(L.button!==0)return;const N=L.target;if(N!=null&&N.closest("[data-commit-card]")||N!=null&&N.closest("button, a, input, textarea, select"))return;const Y=t.current;if(!Y)return;L.preventDefault();const P=Y.getBoundingClientRect(),F=L.clientX-P.left,V=L.clientY-P.top;d.current={startX:F,startY:V,currentX:F,currentY:V,additive:L.metaKey||L.ctrlKey},h.current=!1,p.current=L.metaKey||L.ctrlKey?w:[],_(!0),b({left:F,top:V,width:0,height:0})},[t,w]);return y.useEffect(()=>{const L=Y=>{var ie;const P=d.current;if(!P)return;const F=t.current;if(!F)return;const V=F.getBoundingClientRect();P.currentX=Y.clientX-V.left,P.currentY=Y.clientY-V.top,!h.current&&(Math.abs(P.currentX-P.startX)>2||Math.abs(P.currentY-P.startY)>2)&&(h.current=!0);const Z=Vw(P);b(Z);const ae=T(Z);S(P.additive?Array.from(new Set([...p.current,...ae])):Array.from(new Set(ae))),P.additive||k((ie=ae[ae.length-1])!=null?ie:null)},N=()=>{if(d.current){const Y=h.current;d.current=null,h.current=!1,_(!1),b(null),Y||(S([]),k(null));return}u()};return window.addEventListener("mousemove",L),window.addEventListener("mouseup",N),()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",N)}},[T,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:j,setMergeTargetCommitSha:k,startMarqueeDrag:z}}function jy({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:j,mergeInProgress:k=!1,onPushAllBranches:T,onPushCurrentBranch:z,onPushCommitTargets:L,pushInProgress:N=!1,onDeleteSelection:Y,deleteInProgress:P=!1,worktrees:F=[],currentRepoPath:V,onRemoveWorktree:Z,removeWorktreeInProgress:ae=!1,onSwitchToWorktree:ie,onStashLocalChanges:ke,stashInProgress:Be=!1,stashDisabled:Q=!1,onCommitLocalChanges:ue,commitInProgress:$=!1,commitDisabled:se=!1,onStageAllChanges:W,stageInProgress:K=!1,onCreateBranchFromNode:_e,onCreateRootBranch:R,createBranchFromNodeInProgress:oe=!1,isDebugOpen:le=!1,onDebugClose:de,orientation:Ne="horizontal",branchCommitPreviews:Pe={},branchParentByName:Re={},branchUniqueAheadCounts:tt={},gridSearchQuery:dt="",gridSearchJumpToken:Ot=0,gridSearchJumpDirection:ht=1,gridFocusSha:Ie=null,checkedOutRef:Ee=null,onGridSearchResultCountChange:mt,onGridSearchResultIndexChange:zt,onGridSearchFocusChange:xt,onInteractionChange:Vt,manuallyOpenedClumps:G,manuallyClosedClumps:Me,setManuallyOpenedClumps:Je,setManuallyClosedClumps:Ze,layoutModel:ct,gridHudProps:Ae}){var uo,An,Kt,en,cn,Ts,Os,Ws,Fs,fo,_i,Go,ko,jo;const rt=y.useRef(null),it=y.useRef(null),pt=y.useRef(null),$t=y.useRef(null),st=y.useRef(void 0),H=y.useRef(void 0),te=y.useRef(void 0),me=y.useRef(0),[Se,Ke]=y.useState(!1),[Fe,Le]=y.useState(!1),[bt,Ue]=y.useState(""),[Pt,Ge]=y.useState(!1),[We,kt]=y.useState(!1),[Bt,Wt]=y.useState(""),[Qe,Nt]=y.useState("from-selected-node"),[Tt,_t]=y.useState(()=>new Set),[an,ft]=y.useState(()=>new Set),[Lt,zn]=y.useState({}),Rn=y.useRef(!1),kn=y.useRef(null),cs=y.useRef(null),Xn=G!=null?G:Tt,jn=Me!=null?Me:an,Mn=Je!=null?Je:_t,$n=Ze!=null?Ze:ft,[rn,Tn]=y.useState(null),[nt,ln]=y.useState(null),{isCameraMoving:oo,renderedZoom:No,cameraRenderTick:us,renderedCameraRef:As,interactionIdleTimeoutRef:ti,getTransformLayerOriginScreen:ks,flushCameraReactTick:_o,syncCamera:io,handleWheel:go}=Uw({mapPadHostRef:it,transformLayerRef:pt}),vn=y.useMemo(()=>cp(t,d,Pe,Re),[t,d,Pe,Re]),ni=y.useMemo(()=>jc({lanes:vn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Pe,branchParentByName:Re,branchUniqueAheadCounts:tt,manuallyOpenedClumps:Xn,manuallyClosedClumps:jn,isDebugOpen:le,gridSearchQuery:dt,gridFocusSha:Ie,checkedOutRef:Ee!=null?Ee:null,orientation:Ne,nodePositionOverrides:Lt}),[vn,t,n,i,a,d,Pe,Re,tt,Xn,jn,le,dt,Ie,(uo=Ee==null?void 0:Ee.headSha)!=null?uo:null,(An=Ee==null?void 0:Ee.branchName)!=null?An:null,Ne,Lt]),Ns=Object.keys(Lt).length>0?ni:ct!=null?ct:ni,ds=y.useMemo(()=>jc({lanes:vn,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:Pe,branchParentByName:Re,branchUniqueAheadCounts:tt,manuallyOpenedClumps:Xn,manuallyClosedClumps:jn,isDebugOpen:le,gridSearchQuery:dt,gridFocusSha:Ie,checkedOutRef:Ee!=null?Ee:null,orientation:Ne,nodePositionOverrides:Lt}),[vn,t,n,i,a,d,Pe,Re,tt,Xn,jn,le,dt,Ie,(Kt=Ee==null?void 0:Ee.headSha)!=null?Kt:null,(en=Ee==null?void 0:Ee.branchName)!=null?en:null,Ne,Lt]),{allCommits:Ho,clusterKeyByCommitId:yo,leadByClusterKey:Rs,clusterCounts:Us,matchingNodes:En,matchingNodeIds:is,normalizedSearchQuery:wn,focusedNode:Jt,defaultCollapsedClumps:Ro,renderNodes:fs,visibleNodesBySha:hi,contentWidth:mi,contentHeight:Bo,connectors:si,mergeConnectors:ys,connectorDecisions:So,nodeWarnings:In,commitIdsWithRenderedAncestry:Ks,connectorParentShas:hs,branchStartShas:ms,branchOffNodeShas:Pi,crossBranchOutgoingShas:Uo,branchBaseCommitByName:Zi,pointFormatter:qt}=Ns,ki=!!wn,Bn=No/la,ps=y.useMemo(()=>({transform:`scale(${1/Bn})`,transformOrigin:"top left",width:`${100*Bn}%`,height:`${100*Bn}%`}),[Bn]),Vo=-(20/Bn),Lo=y.useMemo(()=>{const be=new Map;for(const C of fs)be.set(C.commit.visualId,C);return be},[fs]),ao=y.useMemo(()=>Dw(fs,Vo),[fs,Vo]),Yo=be=>{var B;const C=be.commit.id,M=be.commit.visualId;if(ki&&is.has(C)||(Jt==null?void 0:Jt.commit.id)===C||rn===null)return!0;if(!rn.has(M))return!1;const D=yo.get(M);return D&&((B=Us.get(D))!=null?B:1)>1&&(Xn.has(D)||!Ro.has(D)&&!jn.has(D)),!0},xo=1.5/Bn,yn=kw/Bn,Qs=y.useMemo(()=>({transform:`scale(${1/Bn})`,transformOrigin:"center"}),[Bn]),ji="border-slate-400/70",Ds="border-blue-500",Vs=y.useMemo(()=>new Map(t.map(be=>[be.name,be])),[t]),nn=(cn=Ee==null?void 0:Ee.hasUncommittedChanges)!=null?cn:!1;y.useMemo(()=>new Set(t.filter(be=>be.commitsAhead===0&&!be.name.startsWith("*")).map(be=>be.name)),[t]);const Bs=y.useMemo(()=>{var C,M;const be=new Map;for(const D of fs){const B=(C=be.get(D.commit.id))!=null?C:new Set;B.add(D.commit.branchName),be.set(D.commit.id,B)}for(const D of i){const B=(M=be.get(D.fullSha))!=null?M:new Set;D.branch&&B.add(D.branch),be.set(D.fullSha,B)}return be},[fs,i,d]),ro=y.useMemo(()=>new Map(Object.entries(c).map(([be,C])=>[be,new Set(C)])),[c]),Oo=y.useCallback(()=>{ti.current,_o()},[_o,ti]),{isMarqueeSelecting:xs,marqueeRect:Co,selectedCommitShas:zo,setSelectedCommitShas:Wo,mergeTargetCommitSha:Ys,setMergeTargetCommitSha:bo,startMarqueeDrag:oi}=Yw({scrollContainerRef:rt,renderedCameraRef:As,getTransformLayerOriginScreen:ks,renderNodes:fs,shouldRenderNode:Yo,onPointerReleaseNoMarquee:Oo}),Gn=y.useMemo(()=>new Set(fs.map(be=>be.commit.id)),[fs]),dn=y.useMemo(()=>zo.filter(be=>Gn.has(be)),[zo,Gn]),Fo=y.useCallback((be,C)=>{var B;if(!C)return!1;if(((B=Pe[be])!=null?B:[]).some(U=>Ci(U.fullSha,C)||Ci(U.sha,C)))return!0;const D=Vs.get(be);return!!(D!=null&&D.headSha&&Ci(D.headSha,C))},[Pe,Vs]),Un=(Ts=Ee==null?void 0:Ee.branchName)!=null?Ts:null,Ls=(Os=Ee==null?void 0:Ee.headSha)!=null?Os:null,pi=Un==null,lo=y.useMemo(()=>{if(!Ie)return null;const be=fs.filter(C=>C.commit.id===Ie);return be.length===0?null:be.length===1||!Jt?be[0]:be.reduce((C,M)=>{const D=(C.x-Jt.x)**2+(C.y-Jt.y)**2;return(M.x-Jt.x)**2+(M.y-Jt.y)**2<D?M:C})},[Ie,fs,Jt]),js=y.useCallback((be,C,M)=>{for(const D of F){if(!qh(D,V))continue;if(D.branchName){if(D.branchName===be&&Ci(D.headSha,C))return D;continue}if(!Ci(D.headSha,C)&&!Ci(D.headSha,M))continue;if(D.parentSha&&Fo(be,D.parentSha)||Fo(be,D.headSha))return D;const B=Vs.get(be);if(B&&Ci(B.headSha,D.headSha)||be===d&&i.some(U=>Ci(U.fullSha,D.headSha)))return D}return null},[F,V,Fo,Vs,d,i]),vo=y.useCallback(be=>{for(const C of F)if(qh(C,V)&&C.branchName===be)return C;return null},[F,V]),bs=y.useCallback((be,C)=>{for(const M of F)if(qh(M,V)&&(Ci(M.headSha,be)||Ci(M.headSha,C)))return M;return null},[F,V]),E=y.useCallback(be=>{var C;return Array.from((C=Bs.get(be))!=null?C:[])},[Bs]),q=y.useMemo(()=>{var B,U,re,Ce;const be=new Map;for(const ze of dn){const Xe=E(ze);if(Xe.length===0)continue;const lt=(B=Xe.find(jt=>jt!==d))!=null?B:Xe[0],wt=dn.filter(jt=>jt!==ze).filter(jt=>!new Set(E(jt)).has(lt));be.set(lt,{targetSha:ze,targetBranch:lt,sourceRefs:wt})}const C=Array.from(be.values()),M=Ys?C.find(ze=>{var Xe;return ze.targetSha===Ys||ze.targetBranch===((Xe=E(Ys)[0])!=null?Xe:"")}):null,D=(U=M!=null?M:C[C.length-1])!=null?U:null;return{options:C,selected:D,targetBranch:(re=D==null?void 0:D.targetBranch)!=null?re:null,sources:(Ce=D==null?void 0:D.sourceRefs)!=null?Ce:[]}},[dn,E,d,Ys]),fe=y.useMemo(()=>{const be=[...Un===d?[{name:d,headSha:Ls!=null?Ls:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(C=>!C.name.startsWith("*")&&C.unpushedCommits>0&&C.remoteSyncStatus!=="on-github").map(C=>[C.name,C]);return new Map(be)},[t,Un,Ls,d,a.length]),ye=y.useMemo(()=>{const be=D=>{var U;const B=E(D).filter(re=>fe.has(re));return B.length===0?null:B.length===1?B[0]:Un&&B.includes(Un)?Un:(U=B.find(re=>re!==d))!=null?U:B[0]},C=D=>{var B;return D===d?a.map(U=>{var re,Ce;return{fullSha:U.fullSha,sha:U.sha,parentSha:(re=U.parentSha)!=null?re:null,message:U.message,author:U.author,date:U.date,kind:(Ce=U.kind)!=null?Ce:"commit"}}):(B=Pe[D])!=null?B:[]},M=new Map;for(const D of dn){const B=be(D);if(!B)continue;const U=fe.get(B);if(!U)continue;const re=C(B).slice(0,U.unpushedCommits),Ce=re.findIndex(Xe=>Xe.fullSha===D);if(Ce===-1)continue;const ze=M.get(B);(!ze||Ce<ze.targetIndex)&&M.set(B,{branchName:B,targetSha:D,targetIndex:Ce,commitCount:re.length-Ce})}return Array.from(M.values())},[dn,E,fe,Un,d,a,Pe]),Ve=y.useMemo(()=>Array.from(new Set(dn.map(be=>/^STASH:(\d+)$/.exec(be)).filter(be=>!!be).map(be=>parseInt(be[1],10)))).sort((be,C)=>be-C),[dn]),et=dn.includes("WORKING_TREE"),Rt=(et?1:0)+Ve.length,Ht=[...et?["Uncommitted changes"]:[],...Ve.map(be=>`Stash ${be+1}`)],Dt=fe.size,qe=!pi&&!!Un&&fe.has(Un),sn=Un?`Push ${Un}`:"Push current branch",fn=ye.length===1?ye[0].commitCount>1?`Push ${ye[0].commitCount} commits on ${ye[0].branchName}`:`Push ${ye[0].targetSha.slice(0,7)} on ${ye[0].branchName}`:`Push ${ye.length} selected ranges`;y.useEffect(()=>{const be=oo||xs;$t.current!==be&&($t.current=be,Vt==null||Vt(be))},[oo,xs,Vt]),y.useEffect(()=>{const be=wn?En.length:null;st.current!==be&&(st.current=be,mt==null||mt(be))},[En.length,wn,mt]),y.useEffect(()=>{const be=wn&&Ie?(()=>{const C=En.findIndex(M=>M.commit.id===Ie);return C>=0?C:null})():null;H.current!==be&&(H.current=be,zt==null||zt(be))},[Ie,En,wn,zt]);const Pn=y.useMemo(()=>{var ze,Xe,lt,wt,jt,Et;if(!wn)return null;const be=wn,C=t.map(at=>at.name),M=C.find(at=>at.toLowerCase()===be),D=M!=null?M:C.find(at=>at.toLowerCase().startsWith(be)),U=D!=null?D:C.find(at=>at.toLowerCase().includes(be));if(!U)return null;const re=(ze=t.find(at=>at.name===U))!=null?ze:null;if(re!=null&&re.headSha)return re.headSha;const Ce=(Xe=Pe[U])!=null?Xe:[];return Ce.length>0?(wt=(lt=Ce[0])==null?void 0:lt.fullSha)!=null?wt:null:U===d&&(Et=(jt=i[0])==null?void 0:jt.fullSha)!=null?Et:null},[wn,t,Pe,d,i]);y.useEffect(()=>{var D,B,U;if(!wn){if(me.current=Ot,te.current===null)return;te.current=null,xt==null||xt(null);return}if(Ot<=0||me.current===Ot)return;me.current=Ot;let be;const C=Ie?En.findIndex(re=>re.commit.id===Ie):-1,M=En.length>0?C<0?0:(C+ht+En.length)%En.length:-1;be=(U=(B=(D=En[M])==null?void 0:D.commit.id)!=null?B:Pn)!=null?U:null,te.current!==be&&(te.current=be,xt==null||xt(be))},[En,wn,xt,Pn,Ot,ht]),y.useLayoutEffect(()=>{if(!Ie)return;const be=rt.current,C=lo;if(!be||!C)return;const M=ks();if(!M)return;const D=be.getBoundingClientRect(),B=As.current.zoom,U=B/la,re=C.x+_s/2,Ce=C.y+xl+Is/2,ze=D.left+D.width/2,Xe=D.top+D.height/2;io(ze-M.x-re*U,Xe-M.y-Ce*U,B)},[Ie,Ot,lo,ks,io,As]);const Vn=(fo=(Fs=nt==null?void 0:nt.width)!=null?Fs:(Ws=rt.current)==null?void 0:Ws.clientWidth)!=null?fo:0,pn=(ko=(Go=nt==null?void 0:nt.height)!=null?Go:(_i=rt.current)==null?void 0:_i.clientHeight)!=null?ko:0,Ms=Vn>0&&pn>0?wy(Vn,pn,As.current,{innerPaddingPx:kd}):null,co=Ms!=null?Sy(Ms,As.current.zoom):null,ii=be=>{if(!co)return!0;const{fromX:C,fromY:M,toX:D,toY:B}=be;return Aw(C,M,D,B,co,be.fromFace,be.toFace)};y.useLayoutEffect(()=>{var re;const be=rt.current;if(!be||be.clientWidth<=0||be.clientHeight<=0)return;const C=be.clientWidth,M=be.clientHeight;ln(Ce=>(Ce==null?void 0:Ce.width)===C&&(Ce==null?void 0:Ce.height)===M?Ce:{width:C,height:M});const D=wy(C,M,As.current,{innerPaddingPx:kd});if(!D){Tn(Ce=>Ce===null?Ce:null);return}const B=Sy(D,As.current.zoom),U=Nw(ao,B,Lo,Vo);for(const Ce of fs){const ze=yo.get(Ce.commit.visualId);if(!ze||((re=Us.get(ze))!=null?re:1)<=1)continue;(Xn.has(ze)||!Ro.has(ze)&&!jn.has(ze))&&U.add(Ce.commit.visualId)}Tn(Ce=>Tw(Ce,U)?Ce:U)},[No,Ot,Ie,oo,us,Xn,jn,Ro,yo,Us,fs,nt,ao,Lo,Vo]),y.useLayoutEffect(()=>{const be=rt.current;if(!be)return;const C=()=>{const D=be.clientWidth,B=be.clientHeight;D<=0||B<=0||ln(U=>(U==null?void 0:U.width)===D&&(U==null?void 0:U.height)===B?U:{width:D,height:B})};C();const M=new ResizeObserver(C);return M.observe(be),()=>M.disconnect()},[Ho.length]);const Xo=fs.filter(be=>Yo(be)).length,Ji=ys.filter(be=>ii(be)).length,I=si.filter(be=>ii(be)).length,ee=y.useCallback((be,C)=>{if(Rn.current){be.preventDefault(),be.stopPropagation();return}be.stopPropagation();const M=C.commit.id;if(be.shiftKey?(Wo(re=>re.includes(M)?re.filter(Ce=>Ce!==M):[...re,M]),bo(M)):(Wo(re=>re.includes(M)?[]:[M]),bo(re=>re===M?null:M)),!(be.metaKey||be.ctrlKey||be.detail>=2)||M==="WORKING_TREE")return;const B=M.length>=40?M.slice(0,7):M;let U=null;if(C.commit.branchName?(U=js(C.commit.branchName,M,B),U||(U=vo(C.commit.branchName))):U=bs(M,B),U&&ie){ie(U.path);return}h==null||h({commitSha:M})},[bs,js,vo,h,ie]),ne=y.useCallback((be,C)=>{var Ce,ze,Xe,lt,wt;if(be.button!==0)return;const M=be.target;if(M!=null&&M.closest('[data-selectable-text="true"]')||M!=null&&M.closest("button, a, input, textarea, select"))return;be.stopPropagation(),be.preventDefault(),Rn.current=!1,be.currentTarget.setPointerCapture(be.pointerId);const D=(Ce=Lt[C.commit.visualId])!=null?Ce:Lt[C.commit.id];kn.current={nodeId:C.commit.visualId,startX:be.clientX,startY:be.clientY,baseX:(ze=D==null?void 0:D.x)!=null?ze:C.x,baseY:(Xe=D==null?void 0:D.y)!=null?Xe:C.y,moved:!1,pendingX:(lt=D==null?void 0:D.x)!=null?lt:C.x,pendingY:(wt=D==null?void 0:D.y)!=null?wt:C.y};const B=()=>{cs.current=null;const jt=kn.current;jt&&zn(Et=>({...Et,[jt.nodeId]:{x:jt.pendingX,y:jt.pendingY}}))},U=jt=>{const Et=kn.current;if(!Et)return;const at=As.current.zoom/la,ut=at>0?1/at:1,Qn=(jt.clientX-Et.startX)*ut,Zn=(jt.clientY-Et.startY)*ut;(Math.abs(Qn)>2||Math.abs(Zn)>2)&&(Et.moved=!0),Et.moved&&(Rn.current=!0),Et.pendingX=Et.baseX+Qn,Et.pendingY=Et.baseY+Zn,cs.current==null&&(cs.current=window.requestAnimationFrame(B))},re=()=>{window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",re),window.removeEventListener("pointercancel",re),cs.current!=null&&(window.cancelAnimationFrame(cs.current),cs.current=null,B());try{be.currentTarget.releasePointerCapture(be.pointerId)}catch{}const jt=kn.current;kn.current=null,jt&&window.setTimeout(()=>{Rn.current=!1},0)};window.addEventListener("pointermove",U),window.addEventListener("pointerup",re),window.addEventListener("pointercancel",re)},[Lt]),xe=y.useCallback(async()=>{if(!ue)return;await ue(bt)&&(Le(!1),Ue(""))},[ue,bt]),ot=y.useCallback(async()=>{Y&&(await Y({branchNames:[],discardUncommittedChanges:et,stashIndices:Ve}),Ge(!1),Wo([]),bo(null))},[Y,et,Ve]),gt=y.useCallback(async()=>{var C;const be=Bt.trim();if(be){if(Qe==="new-root"){if(!R)return;await R(be)}else{if(!_e)return;const M=dn.length===1?dn[0]:(C=Ee==null?void 0:Ee.headSha)!=null?C:null;if(!M||!(M==="WORKING_TREE"||M.startsWith("STASH:")||M===(Ee==null?void 0:Ee.headSha)))return;await _e(M,be)}kt(!1),Wt(""),Nt("from-selected-node"),Wo([]),bo(null)}},[Ee==null?void 0:Ee.headSha,Qe,Bt,_e,R,dn]),yt=!!(Ee!=null&&Ee.headSha),Ft=dn.length===0&&yt,qn=dn.length===1&&(dn[0]==="WORKING_TREE"||dn[0].startsWith("STASH:"))||Ft,Kn=!!R;return y.useEffect(()=>{if(We){if(!qn&&!Ft&&Kn){Nt("new-root");return}(qn||Ft)&&Nt("from-selected-node")}},[Kn,Ft,We,qn]),y.useEffect(()=>{const be=C=>{if(!Y||Pt||dn.length===0)return;const M=C.target;M!=null&&M.closest('input, textarea, select, button, [contenteditable="true"]')||C.key!=="Delete"&&C.key!=="Backspace"||(C.preventDefault(),Ge(!0))};return window.addEventListener("keydown",be),()=>window.removeEventListener("keydown",be)},[Pt,Y,dn.length]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-card",children:[l.jsx($w,{isOpen:le,onClose:()=>de==null?void 0:de(),visibleBounds:co,renderedNodeCount:Xo,totalNodeCount:fs.length,renderedMergeConnectorCount:Ji,totalMergeConnectorCount:ys.length,renderedConnectorCount:I,totalConnectorCount:si.length,mapGridCullViewportInsetScreenPx:Sw,debugRows:ds.debugRows,branchDebugRows:ds.branchDebugRows,connectorDecisions:So}),Ae?l.jsxs("div",{className:"pointer-events-none z-[70] flex w-full",children:[l.jsxs("div",{className:"window-no-drag pointer-events-auto grid w-full max-w-[calc(100%-64px)] grid-cols-3 items-center gap-3 overflow-x-auto bg-red-500/20 p-2.25",children:[l.jsx("div",{className:"flex min-w-0 items-center justify-start",children:l.jsx(Lw,{selectedVisibleCommitShas:dn,commitInProgress:$,commitDisabled:se,stageInProgress:K,stashInProgress:Be,stashDisabled:Q,pushInProgress:N,hasUncommittedChanges:nn,createBranchFromNodeInProgress:oe,onCommitLocalChanges:ue,onStageAllChanges:W?()=>void W():void 0,onStashLocalChanges:ke,onPushCurrentBranch:z,onPushAllBranches:T,onPushCommitTargets:L,onMergeRefsIntoBranch:j,selectedPushTargets:ye,selectedPushLabel:fn,canPushCurrentBranch:qe,pushCurrentBranchLabel:sn,pushableRemoteBranchCount:Dt,selectedCommitTargetOption:q,mergeInProgress:k,mergeTargetCommitSha:Ys,setMergeTargetCommitSha:bo,worktrees:F,currentRepoPath:V,worktreeMenuOpen:Se,setWorktreeMenuOpen:Ke,onSwitchToWorktree:ie,onRemoveWorktree:Z,removeWorktreeInProgress:ae,setCommitDialogOpen:Le,setNewBranchDialogOpen:kt})}),l.jsx("div",{className:"flex min-w-0 items-center justify-center gap-2",children:l.jsx(Hw,{query:Ae.gridSearchQuery,onQueryChange:Ae.setGridSearchQuery,resultCount:Ae.gridSearchResultCount,resultIndex:Ae.gridSearchResultIndex,onJump:be=>{Ae.setGridSearchJumpDirection(be),Ae.setGridSearchJumpToken(C=>C+1)}})}),l.jsxs("div",{className:"flex min-w-0 items-center justify-end gap-2",children:[l.jsx(Pw,{orientation:Ae.mapGridOrientation,onOrientationChange:Ae.setMapGridOrientation}),l.jsx("button",{type:"button",onClick:()=>Ae.setIsGridDebugOpen(be=>!be),className:"inline-flex h-7 items-center rounded-md border border-border/60 bg-card px-2 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Debug"})]})]}),l.jsxs("div",{className:"pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-[min(22rem,calc(100vw-2rem))] flex-col items-end gap-1.5",children:[(jo=Ae.githubAuthStatus)!=null&&jo.ghAvailable&&!Ae.githubAuthStatus.authenticated?l.jsx("button",{onClick:Ae.onGitHubAuthSetup,disabled:Ae.githubAuthLoading,className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:Ae.githubAuthLoading?"Connecting GitHub...":"Connect GitHub"}):null,Ae.githubAuthStatus&&!Ae.githubAuthStatus.ghAvailable?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] font-medium text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",children:"Install `gh` for private PR data"})]}):null,Ae.githubAuthMessage?l.jsxs("div",{className:"window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border border-border/60 bg-card/95 px-2 text-[11px] text-muted-foreground backdrop-blur-sm",children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium text-muted-foreground",children:"GitHub"}),l.jsx("p",{className:"max-w-36 truncate text-[11px] text-foreground/90",title:Ae.githubAuthMessage,children:Ae.githubAuthMessage})]}):null,Ae.commitSwitchFeedback?l.jsxs("div",{className:`window-no-drag pointer-events-auto inline-flex h-7 items-center gap-2 rounded-md border px-2 text-[11px] backdrop-blur-sm transition-opacity duration-200 ${Ae.isCommitSwitchFeedbackVisible?"opacity-100":"opacity-0"} ${Ae.commitSwitchFeedback.kind==="error"?"border-red-200/80 bg-red-50/95 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300":"border-blue-200/80 bg-blue-50/95 text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300"}`,title:Ae.commitSwitchFeedback.message,children:[l.jsx("p",{className:"shrink-0 text-[10px] font-medium opacity-70",children:Ae.commitSwitchFeedback.kind==="error"?"Alert":"Update"}),l.jsx("p",{className:"truncate text-[11px]",children:Ae.commitSwitchFeedback.message})]}):null]})]}):null,Ho.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(zw,{scrollContainerRef:rt,mapPadHostRef:it,transformLayerRef:pt,isMarqueeSelecting:xs,contentWidth:mi,contentHeight:Bo,isCameraMoving:oo,onWheel:go,onMouseDown:oi,onNodePointerDown:ne,labelTopPx:Vo,inverseZoomStyle:ps,displayZoom:Bn,iconScaleStyle:Qs,selectedVisibleCommitShas:dn,normalizedSearchQuery:wn,matchingNodeIds:is,focusedNode:lo,renderNodes:fs,shouldRenderNode:Yo,manuallyOpenedClumps:Xn,manuallyClosedClumps:jn,defaultCollapsedClumps:Ro,leadByClusterKey:Rs,clusterKeyByCommitId:yo,clusterCounts:Us,commitIdsWithRenderedAncestry:Ks,nodeWarnings:In,connectorParentShas:hs,branchStartShas:ms,branchOffNodeShas:Pi,crossBranchOutgoingShas:Uo,branchBaseCommitByName:Zi,branchStartAccentClass:Ds,connectorParentAccentClass:ji,commitCornerRadiusPx:yn,lineStrokeWidth:xo,pointFormatter:qt,connectors:si,mergeConnectors:ys,cullConnectorPath:ii,flushCameraReactTick:_o,setManuallyOpenedClumps:Mn,setManuallyClosedClumps:$n,onCommitCardClick:ee,unpushedCommitShasSetByBranch:ro,checkedOutHeadSha:Ls}),Co&&xs?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:Co.left,top:Co.top,width:Co.width,height:Co.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(Iw,{commitDialogOpen:Fe,commitMessageDraft:bt,onCommitMessageDraftChange:Ue,onCommitDialogClose:()=>Le(!1),onCommitConfirm:()=>void xe(),commitInProgress:$,deleteConfirmOpen:Pt,deleteSelectionItems:Ht,onDeleteConfirmClose:()=>Ge(!1),onDeleteConfirm:()=>void ot(),deleteInProgress:P,deletableSelectionCount:Rt,newBranchDialogOpen:We,newBranchName:Bt,newBranchCreateMode:Qe,onNewBranchNameChange:Wt,onNewBranchCreateModeChange:Nt,onNewBranchDialogClose:()=>kt(!1),onNewBranchConfirm:()=>void gt(),selectedCommitCanCreateBranch:qn,currentCheckedOutCommitCanCreateBranch:Ft,createBranchFromNodeInProgress:oe})]})}function Ww({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridSearchJumpDirection:j=1,gridFocusSha:k=null,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,view:N="time",isLoading:Y=!1,scrollRequest:P,focusedErrorBranch:F,checkedOutRef:V=null,mapTopInsetPx:Z=0,onMergeRefsIntoBranch:ae,mergeInProgress:ie=!1,onPushAllBranches:ke,onPushCurrentBranch:Be,onPushCommitTargets:Q,pushInProgress:ue=!1,onDeleteSelection:$,worktrees:se=[],currentRepoPath:W,onRemoveWorktree:K,removeWorktreeInProgress:_e=!1,onSwitchToWorktree:R,onStashLocalChanges:oe,stashInProgress:le=!1,stashDisabled:de=!1,onCommitLocalChanges:Ne,commitInProgress:Pe=!1,commitDisabled:Re=!1,onStageAllChanges:tt,stageInProgress:dt=!1,onCreateBranchFromNode:Ot,onCreateRootBranch:ht,createBranchFromNodeInProgress:Ie=!1,onMoveNodeBackToBranch:Ee,isDebugOpen:mt=!1,onDebugClose:zt,orientation:xt="horizontal",onInteractionChange:Vt,manuallyOpenedClumps:G,manuallyClosedClumps:Me,setManuallyOpenedClumps:Je,setManuallyClosedClumps:Ze,layoutModel:ct,gridHudProps:Ae}){const rt=new Set(u.map(H=>H.branchName)),it=14*864e5,pt=Date.now();function $t(H){return rt.has(H.name)||pt-new Date(H.lastCommitDate).getTime()<=it}const st=t.filter(H=>H.status==="stale"&&$t(H)).sort((H,te)=>new Date(te.lastCommitDate).getTime()-new Date(H.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,staleBranches:st,isLoading:Y,scrollRequest:P,focusedErrorBranch:F,checkedOutRef:V,mapTopInsetPx:Z,onMergeRefsIntoBranch:ae,mergeInProgress:ie,onPushAllBranches:ke,onPushCurrentBranch:Be,onPushCommitTargets:Q,pushInProgress:ue,onDeleteSelection:$,worktrees:se,currentRepoPath:W,onRemoveWorktree:K,removeWorktreeInProgress:_e,onSwitchToWorktree:R,onStashLocalChanges:oe,stashInProgress:le,stashDisabled:de,onCommitLocalChanges:Ne,commitInProgress:Pe,commitDisabled:Re,onStageAllChanges:tt,stageInProgress:dt,onCreateBranchFromNode:Ot,onCreateRootBranch:ht,createBranchFromNodeInProgress:Ie,onMoveNodeBackToBranch:Ee,isDebugOpen:mt,onDebugClose:zt,orientation:xt,onInteractionChange:Vt,manuallyOpenedClumps:G,manuallyClosedClumps:Me,setManuallyOpenedClumps:Je,setManuallyClosedClumps:Ze,layoutModel:ct,gridHudProps:Ae})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(jy,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridSearchJumpDirection:j,gridFocusSha:k,checkedOutRef:V,onGridSearchResultCountChange:T,onGridSearchResultIndexChange:z,onGridSearchFocusChange:L,onInteractionChange:Vt,manuallyOpenedClumps:G,manuallyClosedClumps:Me,setManuallyOpenedClumps:Je,setManuallyClosedClumps:Ze,layoutModel:ct,isDebugOpen:mt,onDebugClose:zt,orientation:xt,gridHudProps:Ae})}):null})}const Sr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Fw(t,n,i,a){if(!t)return null;const c=d=>Sr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function Xw(t,n,i,a,c,u){var ie,ke,Be,Q,ue,$;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(ke=(ie=i[0])==null?void 0:ie.fullSha)!=null?ke:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(se=>({name:se.name,headSha:se.headSha,isDefault:!1}))],x=d?_.filter(se=>Sr(se.headSha,d)):[],b=Fw(d,i,a,u),w=b?_.find(se=>se.name===b):void 0,S=(Q=(Be=x.find(se=>se.isDefault))!=null?Be:x[0])!=null?Q:w,j=!!(S&&d&&Sr(S.headSha,d)),k=S&&!S.isDefault?n.find(se=>se.name===S.name):void 0,T=(()=>{var W;if(!d)return null;const se=i.find(K=>Sr(K.fullSha,d)||Sr(K.sha,d));if(se!=null&&se.date)return se.date;if(k){const K=((W=a[k.name])!=null?W:[]).find(_e=>Sr(_e.fullSha,d)||Sr(_e.sha,d));if(K!=null&&K.date)return K.date}return null})(),z=T?new Date(T).getTime():Number.NaN,L=Date.now(),N=Number.isFinite(z)?Math.max(L,z+1+t.index):L+t.index,Y=new Date(N).toISOString(),P=t.message.trim(),F={fullSha:h,sha:p,parentSha:d,message:P||p,author:"You",date:Y,kind:"stash"},V={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(ue=k==null?void 0:k.name)!=null?ue:u,message:P||p,author:"You",date:Y,kind:"stash"};if(j&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,V]};if(j&&k)return{branches:n.map(W=>W.name===k.name?{...W,commitsAhead:W.commitsAhead+1,unpushedCommits:W.unpushedCommits+1,lastCommitDate:Y,headSha:h}:W),directCommits:i,branchCommitPreviews:{...a,[k.name]:[F,...a[k.name]||[]]},branchUniqueAheadCounts:{...c,[k.name]:Math.max(0,($=Object.prototype.hasOwnProperty.call(c,k.name)?c[k.name]:k.commitsAhead)!=null?$:0)+1}};const Z=`*Stash:${t.index}`;return{branches:[{name:Z,commitsAhead:1,commitsBehind:0,lastCommitDate:Y,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[Z]:[F]},branchUniqueAheadCounts:{...c,[Z]:1}}}function Gx(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=Xw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Gw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var F,V,Z,ae;const j=Gx(g,t,i,u,h,c);let k=j.branches,T=j.directCommits,z=j.branchCommitPreviews,L=j.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const ie=p.headSha||p.parentSha||null,ke=(V=(F=T[0])==null?void 0:F.fullSha)!=null?V:null,Be=(Re,tt)=>!Re||!tt?!1:Re===tt||Re.startsWith(tt)||tt.startsWith(Re),Q=[{name:c,headSha:ke!=null?ke:"",isDefault:!0},...k.map(Re=>({name:Re.name,headSha:Re.headSha,isDefault:!1}))],ue=p.branchName?Q.find(Re=>Re.name===p.branchName):void 0,$=ie?Q.filter(Re=>Be(Re.headSha,ie)):[],se=(Z=ue!=null?ue:$.find(Re=>Re.isDefault))!=null?Z:$[0],W=!!(se&&ie&&Be(se.headSha,ie)),K=se&&!se.isDefault?k.find(Re=>Re.name===se.name):void 0,_e=(()=>{var tt;if(!ie)return null;const Re=T.find(dt=>Be(dt.fullSha,ie)||Be(dt.sha,ie));if(Re!=null&&Re.date)return Re.date;if(K){const dt=((tt=z[K.name])!=null?tt:[]).find(Ot=>Be(Ot.fullSha,ie)||Be(Ot.sha,ie));if(dt!=null&&dt.date)return dt.date}return null})(),R=_e?new Date(_e).getTime():Number.NaN,oe=Date.now(),le=Number.isFinite(R)?Math.max(oe,R+1):oe,de=new Date(le).toISOString(),Ne={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"},Pe={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:ie,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:de,kind:"uncommitted"};if(W&&(se!=null&&se.isDefault))T=[...T,Pe];else if(W&&K)k=k.map(Re=>Re.name===K.name?{...Re,commitsAhead:Re.commitsAhead+1,unpushedCommits:Re.unpushedCommits+1,lastCommitDate:de,headSha:"WORKING_TREE"}:Re),z={...z,[K.name]:[Ne,...z[K.name]||[]]},L={...L,[K.name]:Math.max(0,(ae=Object.prototype.hasOwnProperty.call(L,K.name)?L[K.name]:K.commitsAhead)!=null?ae:0)+1};else{const Re={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:de,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:ie!=null?ie:void 0,parentBranch:(se==null?void 0:se.name)||p.branchName||c};k=[Re,...k],z={...z,[Re.name]:[Ne]},L={...L,[Re.name]:1}}}const N={...d};N[c]=null;const Y=cp(k,c,z,N),P=jc({lanes:Y,branches:k,mergeNodes:n,directCommits:T,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:z,branchParentByName:N,branchUniqueAheadCounts:L,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:k,enrichedBranchCommitPreviews:z,enrichedBranchUniqueAheadCounts:L,enrichedDirectCommits:T,sharedGridLayoutModel:P}}function My(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Ty(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ey(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Em({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:T,onSelectBranch:z}){var R,oe;if(_.has(t)||!a.get(t))return null;const N=(R=u.get(t))!=null?R:[],Y=N.length>0,P=y.useMemo(()=>{var le;return[...(le=c[t])!=null?le:[]]},[c,t]),F=x&&P.length>0,V=x,Z=Y||F,ae=h.has(t),ie=V?P:[],ke=ae&&ie.length>0,Be=g===t,Q=new Set(_);Q.add(t);const ue="top-[-0.2rem] h-4.5 w-[10px]",$="rounded-bl-[7px]",se="left-[0.65rem]",W=new Map,K=[];for(const le of N){const de=d.get(le);if(de){const Ne=ie.findIndex(Pe=>Ci(Pe.fullSha,de)||Ci(Pe.sha,de));if(Ne>=0){const Pe=(oe=W.get(Ne))!=null?oe:[];Pe.push(le),W.set(Ne,Pe);continue}}K.push(le)}const _e=y.useMemo(()=>{if(!x||ie.length===0)return[];const le=[];let de=[],Ne=null;const Pe=()=>{if(de.length===0)return;const Re=de[de.length-1],tt=`sidebar-single-${t}-${Re.fullSha}`;le.push({key:Ne!=null?Ne:tt,commits:de,count:de.length,lead:Re}),de=[],Ne=null};return ie.forEach(Re=>{var dt;const tt=(dt=S.get(`${t}:${Re.fullSha}`))!=null?dt:null;if(de.length===0){de=[Re],Ne=tt;return}if(tt===Ne){de.push(Re);return}Pe(),de=[Re],Ne=tt}),Pe(),le},[t,x,ie,S]);return l.jsxs("li",{className:Cn("relative",n>0?"pl-4":"pl-0",n===0&&!i?ae?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Cn("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",$,se,ue)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Cn("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",se)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{Z&&p(t),z==null||z(t)},className:Cn("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Be?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[Z?l.jsx("span",{className:Cn("inline-block text-[10px] text-muted-foreground transition-transform",ae?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Cn(Be?"font-medium text-foreground":"font-normal"),children:t})})]})}),ke?l.jsx("ul",{className:"relative space-y-1 pl-4",children:_e.map(le=>{const de=le.count>1&&!j(le.key);return(de?[le.lead]:le.commits).map(Pe=>{var dt;const Re=ie.findIndex(Ot=>Ot.fullSha===Pe.fullSha),tt=b(Pe.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(Pe.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Pe.message,children:[l.jsx("span",{className:"block truncate",children:Pe.message}),tt.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:tt.map(Ot=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Ot})]},`${Pe.fullSha}:${Ot}`))}):null]}),le.count>1&&Pe.fullSha===le.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${le.lead.fullSha}`,onClick:()=>k(le.key,`${t}:${le.lead.fullSha}`),className:Cn("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",de?"":"min-w-[2ch] text-center"),children:de?`+${Math.max(1,le.count-1)}`:"−"}):null]}),(dt=W.get(Re))!=null&&dt.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:W.get(Re).map((Ot,ht,Ie)=>l.jsx(Em,{branchName:Ot,depth:n+1,isLast:ht===Ie.length-1&&K.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Ot,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:T,onSelectBranch:z},Ot))}):null]},`${t}:${Pe.fullSha}`)})})}):null,Y&&ae&&K.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:K.map((le,de)=>l.jsx(Em,{branchName:le,depth:n+1,isLast:de===K.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:le,clusterKeyByCommitId:S,isGridClusterOpen:j,onToggleGridCluster:k,onSelectCommit:T,onSelectBranch:z},le))}):null]})}function qw({open:t}){return t?l.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-4 w-4 shrink-0 text-muted-foreground transition-colors",children:[l.jsx("path",{d:"M2.5 7a2 2 0 0 1 2-2h3.1c.44 0 .86.18 1.18.49l.84.81h5.88a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),l.jsx("path",{d:"M4.25 6H8l.84.81",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}):l.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-4 w-4 shrink-0 text-muted-foreground transition-colors",children:[l.jsx("path",{d:"M2.5 7a2 2 0 0 1 2-2h3.1c.44 0 .86.18 1.18.49l.84.81h5.88a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),l.jsx("path",{d:"M6.1 5H8l.84.81",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Kw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:w,onSelectCommit:S,onSelectBranch:j,showCommits:k,onToggleShowCommits:T,className:z,style:L,collapsed:N=!1}){var ht;const Y=y.useRef(null),P=y.useRef(null),[F,V]=y.useState(()=>new Set),[Z,ae]=y.useState(()=>new Set),[ie,ke]=y.useState(()=>new Set),Be=g!=null?g:Z,Q=_!=null?_:ie,ue=x!=null?x:ae,$=b!=null?b:ke,[se,W]=y.useState(null),[K,_e]=y.useState(null),R=y.useMemo(()=>d.some(Ee=>Ee.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),oe=y.useMemo(()=>My(R,h),[R,h]),le=y.useMemo(()=>Ty(R,h,oe),[R,h,oe]),[de,Ne]=y.useState(()=>Ey(le,oe,p,h));y.useEffect(()=>{Ne(Ie=>{const Ee=Ey(le,oe,p,h),mt=new Set(Ie);for(const zt of Ee)mt.add(zt);return mt})},[le,oe,p,h]),y.useEffect(()=>{V(Ie=>{const Ee=new Set(Ie);for(const mt of t)Ee.add(mt.path);return Ee})},[t]);const Pe=(ht=w==null?void 0:w.defaultCollapsedClumps)!=null?ht:new Set,Re=Ie=>Be.has(Ie)||!Pe.has(Ie)&&!Q.has(Ie),tt=(Ie,Ee)=>{const mt=Y.current,zt=P.current;if(mt&&zt){const xt=`[data-clump-toggle-id="${Ee}"]`,Vt=mt.querySelector(xt);if(Vt){const G=Vt.getBoundingClientRect().top-zt.getBoundingClientRect().top;_e({id:Ee,topWithinScrollBody:G})}else _e(null)}else _e(null);W(Ee),ue(xt=>{const Vt=new Set(xt),G=Re(Ie);return $(Me=>{const Je=new Set(Me);return G?(Vt.delete(Ie),Je.add(Ie)):(Je.delete(Ie),Vt.add(Ie)),Je}),Vt})};y.useLayoutEffect(()=>{if(!se)return;const Ie=Y.current,Ee=P.current;if(!Ie||!Ee)return;const mt=`[data-clump-toggle-id="${se}"]`,zt=Ie.querySelector(mt);if(zt){if((K==null?void 0:K.id)===se){const Vt=zt.getBoundingClientRect().top-Ee.getBoundingClientRect().top-K.topWithinScrollBody;Number.isFinite(Vt)&&Vt!==0&&(Ee.scrollTop+=Vt)}zt.focus({preventScroll:!0}),W(null),_e(null)}},[Be,Q,se,K]);const dt=Ie=>{Ne(Ee=>{const mt=new Set(Ee);return mt.has(Ie)?mt.delete(Ie):mt.add(Ie),mt})},Ot=y.useMemo(()=>{var Ee,mt,zt,xt,Vt,G,Me,Je,Ze,ct;const Ie=new Map;for(const Ae of t){const rt=Ae.path===n,it=Gw({branches:Ae.branches,mergeNodes:Ae.mergeNodes,directCommits:Ae.directCommits,unpushedDirectCommits:Ae.unpushedDirectCommits,defaultBranch:Ae.defaultBranch,branchCommitPreviews:Ae.branchCommitPreviews,branchUniqueAheadCounts:Ae.branchUniqueAheadCounts,checkedOutRef:Ae.checkedOutRef,stashes:Ae.stashes,manuallyOpenedClumps:rt?Be:new Set,manuallyClosedClumps:rt?Q:new Set}),pt=it.enrichedBranches.some(Ge=>Ge.name===Ae.defaultBranch)?it.enrichedBranches:[{name:Ae.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...it.enrichedBranches],$t=new Map(it.sharedGridLayoutModel.nodes.map(Ge=>[Ge.commit.visualId,Ge.row])),st={};for(const Ge of it.sharedGridLayoutModel.allCommits){const We=(Ee=st[Ge.branchName])!=null?Ee:[];We.push({fullSha:Ge.id,sha:Ge.id.slice(0,7),parentSha:(mt=Ge.parentSha)!=null?mt:null,message:Ge.message,author:Ge.author,date:Ge.date,kind:(zt=Ge.kind)!=null?zt:"commit"}),st[Ge.branchName]=We}for(const Ge of Object.keys(st))st[Ge]=st[Ge].sort((We,kt)=>{var Tt,_t;const Bt=new Date(We.date).getTime(),Wt=new Date(kt.date).getTime();if(Bt!==Wt)return Bt-Wt;const Qe=(Tt=$t.get(`${Ge}:${We.fullSha}`))!=null?Tt:Number.MAX_SAFE_INTEGER,Nt=(_t=$t.get(`${Ge}:${kt.fullSha}`))!=null?_t:Number.MAX_SAFE_INTEGER;return Qe!==Nt?Qe-Nt:We.fullSha.localeCompare(kt.fullSha)});const H=(xt=it.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?xt:new Map,te=(Ge,We)=>{const kt=H.get(We);if(!kt)return[];for(const[Bt,Wt]of kt.entries())if(Ci(Ge,Bt))return Array.from(Wt).sort();return[]},me=My(pt,Ae.defaultBranch),Se=Ty(pt,Ae.defaultBranch,me),Ke=new Map(pt.map(Ge=>[Ge.name,Ge])),Fe=new Map;for(const Ge of pt){const We=(G=(Vt=it.sharedGridLayoutModel.firstBranchCommitByName.get(Ge.name))==null?void 0:Vt.parentSha)!=null?G:null,kt=We!=null?We:null;Fe.set(Ge.name,kt)}const Le=(Me=it.sharedGridLayoutModel.defaultCollapsedClumps)!=null?Me:new Set,bt=rt?Be:new Set,Ue=rt?Q:new Set,Pt=Ge=>bt.has(Ge)||!Le.has(Ge)&&!Ue.has(Ge);Ie.set(Ae.path,{rootBranchNames:Se,branchByName:Ke,branchCommitPreviewsFromLayout:st,childNamesByParent:me,branchAnchorShaByName:Fe,checkedOutBranchName:(Ze=(Je=Ae.checkedOutRef)==null?void 0:Je.branchName)!=null?Ze:null,clusterKeyByCommitId:(ct=it.sharedGridLayoutModel.clusterKeyByCommitId)!=null?ct:new Map,getMergeTargetLabels:te,isGridClusterOpen:Pt})}return Ie},[n,Q,Be,t]);return l.jsxs("aside",{ref:Y,"aria-label":"Dense branch sidebar",className:Cn("pointer-events-auto relative h-full select-none overflow-hidden",z),style:L,children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"absolute inset-x-0 top-0 z-80 flex h-12 items-start px-2.5 pt-2.25",children:l.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Add Repo"}),l.jsx("button",{type:"button",onClick:T,className:"window-no-drag shrink-0 rounded-md border border-border/60 px-2 h-7 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent",children:k?"Hide Commits":"Show Commits"})]})}),l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[u&&l.jsx("div",{className:"px-2.5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:P,className:Cn("min-h-0 flex-1 space-y-8 overflow-y-auto px-2.5 pr-4",N?"opacity-0 pointer-events-none":""),style:{scrollbarGutter:"stable both-edges"},children:t.map(Ie=>{var G;const Ee=Ie.path===n,mt=F.has(Ie.path),zt=(G=Ie.treeLoaded)!=null?G:Ie.branches.length>0,xt=Ot.get(Ie.path),Vt=Ee?de:new Set(xt?Array.from(xt.branchByName.keys()):[]);return l.jsx("div",{className:Cn("relative z-0",mt&&xt?"mb-5":"mb-1"),children:l.jsxs("div",{className:"relative z-0 px-1",children:[l.jsxs("div",{className:Cn("sticky top-0 z-20 flex w-full items-center gap-2 rounded-lg bg-[#FAFAF9] px-0 py-1 transition-colors hover:bg-accent",Ee?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[l.jsx("button",{type:"button",onClick:()=>{V(Me=>{const Je=new Set(Me);return Je.has(Ie.path)?Je.delete(Ie.path):Je.add(Ie.path),Je})},"aria-expanded":mt,"aria-label":`${mt?"Collapse":"Expand"} ${Ie.name}`,className:"flex h-4 w-4 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-accent",children:l.jsx(qw,{open:mt})}),l.jsx("button",{type:"button",onClick:()=>{i(Ie.path)},className:Cn("min-w-0 flex-1 truncate pl-0 text-left text-sm transition-colors",Ee?"font-semibold text-primary":"font-medium text-muted-foreground"),children:Ie.name})]}),mt?zt&&xt?l.jsx("ul",{className:"relative z-0 space-y-0 pt-0",children:xt.rootBranchNames.map((Me,Je)=>l.jsx(Em,{branchName:Me,depth:0,isLast:Je===xt.rootBranchNames.length-1,branchByName:xt.branchByName,branchCommitPreviews:xt.branchCommitPreviewsFromLayout,childNamesByParent:xt.childNamesByParent,branchAnchorShaByName:xt.branchAnchorShaByName,expandedBranchNames:Vt,onToggleBranch:dt,checkedOutBranchName:xt.checkedOutBranchName,ancestors:new Set,showCommits:k,getMergeTargetLabels:xt.getMergeTargetLabels,sourceBranchName:Me,clusterKeyByCommitId:xt.clusterKeyByCommitId,isGridClusterOpen:xt.isGridClusterOpen,onToggleGridCluster:tt,onSelectCommit:async Ze=>{Ee||await i(Ie.path),S==null||S(Ze)},onSelectBranch:async Ze=>{Ee||await i(Ie.path),j==null||j(Ze)}},`${Ie.path}:${Me}`))}):l.jsx("p",{className:"px-2 py-2 text-xs text-muted-foreground",children:"Loading branch tree..."}):null]})},Ie.path)})})]})]})}const Qw="git-visualizer",Ay="git-visualizer:projects",Dy=12,Ny=1400,Zw=180,Ry="git-visualizer:sidebar-width",By="git-visualizer:sidebar-collapsed",Ly=432,Oy=280,zy=640;function il(t){return t==="/"?t:t.replace(/\/+$/,"")}function Jw(...t){return t.filter(Boolean).join(" ")}function md(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function eS(t){return md(t)===Qw}function tS(){var co,ii,Xo,Ji;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,w]=y.useState([]),[S,j]=y.useState([]),[k,T]=y.useState([]),[z,L]=y.useState({}),[N,Y]=y.useState([]),[P,F]=y.useState("main"),[V,Z]=y.useState(null),[ae,ie]=y.useState([]),[ke,Be]=y.useState(!1),[Q,ue]=y.useState(""),[$,se]=y.useState(0),[W,K]=y.useState(1),[_e,R]=y.useState(()=>new Set),[oe,le]=y.useState(()=>new Set),[de,Ne]=y.useState(null),[Pe,Re]=y.useState(null),[tt,dt]=y.useState(null),[Ot,ht]=y.useState(!1),[Ie,Ee]=y.useState(!1),[mt,zt]=y.useState(!1),[xt,Vt]=y.useState(null),[G,Me]=y.useState(!1),[Je,Ze]=y.useState(!1),[ct,Ae]=y.useState("active"),[rt,it]=y.useState(null),[pt,$t]=y.useState(null),[st,H]=y.useState(!1),[te,me]=y.useState(null),[Se,Ke]=y.useState(!1),[Fe,Le]=y.useState(null),[bt,Ue]=y.useState(null),[Pt,Ge]=y.useState(!1),[We,kt]=y.useState(!1),[Bt,Wt]=y.useState(!1),[Qe,Nt]=y.useState(!1),[Tt,_t]=y.useState({}),[an,ft]=y.useState({}),[Lt,zn]=y.useState({}),[Rn,kn]=y.useState({}),[cs,Xn]=y.useState({}),[jn,Mn]=y.useState([]),[$n,rn]=y.useState(!1),[Tn,nt]=y.useState(!1),[ln,oo]=y.useState(!1),[No,us]=y.useState(!1),[As,ti]=y.useState(!1),[ks,_o]=y.useState("horizontal"),[io,go]=y.useState(!1),[vn,ni]=y.useState(Ly),[Hs,Ns]=y.useState(!1),[ds,Ho]=y.useState({dragging:!1,lastEvent:"idle"}),yo=y.useRef(null),Rs=y.useRef(0),Us=y.useRef(0),En=y.useRef(null),is=y.useRef(Ly),wn=y.useRef(null),Jt=y.useRef(null),Ro=eS(t)||!0,fs=y.useRef(!1),hi=y.useRef(!1),mi=y.useRef(new Set),Bo=y.useRef([]),si=y.useRef([]),ys=y.useRef(null),So=y.useMemo(()=>c.map(I=>{var ee,ne,xe,ot,gt,yt,Ft,qn,Kn,uo,An,Kt,en,cn,Ts,Os,Ws,Fs,fo,_i,Go,ko,jo,be,C,M,D,B;return{...I,...(ee=d[I.path])!=null?ee:{},branches:(xe=(ne=d[I.path])==null?void 0:ne.branches)!=null?xe:[],mergeNodes:(gt=(ot=d[I.path])==null?void 0:ot.mergeNodes)!=null?gt:[],directCommits:(Ft=(yt=d[I.path])==null?void 0:yt.directCommits)!=null?Ft:[],unpushedDirectCommits:(Kn=(qn=d[I.path])==null?void 0:qn.unpushedDirectCommits)!=null?Kn:[],unpushedCommitShasByBranch:(An=(uo=d[I.path])==null?void 0:uo.unpushedCommitShasByBranch)!=null?An:{},checkedOutRef:(en=(Kt=d[I.path])==null?void 0:Kt.checkedOutRef)!=null?en:null,worktrees:(Ts=(cn=d[I.path])==null?void 0:cn.worktrees)!=null?Ts:[],stashes:(Ws=(Os=d[I.path])==null?void 0:Os.stashes)!=null?Ws:[],branchCommitPreviews:(fo=(Fs=d[I.path])==null?void 0:Fs.branchCommitPreviews)!=null?fo:{},laneByBranch:(Go=(_i=d[I.path])==null?void 0:_i.laneByBranch)!=null?Go:{},branchUniqueAheadCounts:(jo=(ko=d[I.path])==null?void 0:ko.branchUniqueAheadCounts)!=null?jo:{},defaultBranch:(M=(C=(be=d[I.path])==null?void 0:be.defaultBranch)!=null?C:I.branchName)!=null?M:"main",treeLoaded:(B=(D=d[I.path])==null?void 0:D.loaded)!=null?B:!1}}),[c,d]);y.useEffect(()=>{try{const I=localStorage.getItem(Ay);if(!I)return;const ee=JSON.parse(I);if(!Array.isArray(ee))return;const ne=ee.filter(xe=>typeof xe=="object"&&xe!==null&&typeof xe.path=="string"&&typeof xe.name=="string"&&typeof xe.lastOpenedAt=="number");u(ne.slice(0,Dy))}catch{u([])}},[]),y.useEffect(()=>{hi.current||t||c.length!==0&&(hi.current=!0,yn(c[0].path))},[c,t]);const In=y.useMemo(()=>b.reduce((I,ee)=>(I[ee.targetCommitSha]=ee.targetBranch,I),{}),[b]);y.useEffect(()=>{t&&h(I=>{var ee,ne;return{...I,[t]:{path:t,name:i||md(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:k,mergeTargetBranchByCommitSha:b.reduce((xe,ot)=>(xe[ot.targetCommitSha]=ot.targetBranch,xe),{}),unpushedCommitShasByBranch:z,checkedOutRef:V,worktrees:ae,stashes:jn,branchCommitPreviews:an,branchParentByName:Lt,laneByBranch:Rn,branchUniqueAheadCounts:cs,defaultBranch:P,loaded:!0,cacheSchemaVersion:(ne=(ee=I[t])==null?void 0:ee.cacheSchemaVersion)!=null?ne:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,k,In,z,V,ae,jn,an,Lt,Rn,cs,P]);async function Ks(I,ee=!1){var xe;const ne=il(I);if(ne&&!mi.current.has(ne)&&!(!ee&&((xe=d[ne])!=null&&xe.loaded))){mi.current.add(ne),g(!0);try{const ot=await we("get_repo_visual_snapshot",{repoPath:ne,forceRefresh:ee});h(gt=>({...gt,[ne]:ot}))}finally{mi.current.delete(ne),mi.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(I=>{Ks(I.path),we("watch_repo",{repoPath:I.path}).catch(console.error)})},[c]),y.useEffect(()=>{let I=!1,ee=null;return gc("git-activity",ne=>{if(I)return;const xe=il(ne.payload.repoPath);!xe||xe===t||Ks(xe,!0)}).then(ne=>{I?ne():ee=ne}).catch(console.error),()=>{I=!0,ee&&ee()}},[t]);function hs(I){u(ee=>{const ne=il(I.path);if(!ne)return ee;const xe={...I,path:ne},gt=(ee.some(yt=>yt.path===ne)?ee.map(yt=>yt.path===ne?xe:yt):[...ee,xe]).slice(-Dy);try{localStorage.setItem(Ay,JSON.stringify(gt))}catch{}return gt})}async function ms(I){const ee=il(I);if(ee){Vt(null);try{const[ne,xe]=await Promise.all([we("get_repo_info",{repoPath:ee}),we("get_default_branch",{repoPath:ee}).catch(()=>"main")]);hs({path:ee,name:ne.name,lastOpenedAt:Date.now(),branchName:xe}),await Ks(ee,!0)}catch(ne){Vt(ne instanceof Error?ne.message:String(ne))}}}const Pi=()=>{(async()=>{var I,ee;try{const ne=await Gv({directory:!0,multiple:!1,defaultPath:(ee=(I=c[0])==null?void 0:I.path)!=null?ee:void 0});typeof ne=="string"&&ne&&await ms(ne)}catch(ne){Vt(ne instanceof Error?ne.message:String(ne))}})()};async function Uo(I,ee){const xe=[];let ot=0;for(;;){const gt=await we("get_merge_nodes",{repoPath:I,branch:ee,page:ot,perPage:100});if(xe.push(...gt.nodes),!gt.hasMore||gt.nodes.length===0)break;ot+=1}return xe}async function Zi(I,ee,ne){const xe=Array.from(new Set([ne,...ee.map(yt=>yt.name)].filter(yt=>!!yt)));if(xe.length===0)return[];const ot=await Promise.all(xe.map(yt=>Uo(I,yt).catch(()=>[]))),gt=new Map;for(const yt of ot)for(const Ft of yt){const qn=`${Ft.targetCommitSha}:${Ft.targetBranch}`;gt.has(qn)||gt.set(qn,Ft)}return Array.from(gt.values())}const qt=I=>I.map(ee=>`${ee.name}|${ee.headSha}|${ee.commitsAhead}|${ee.commitsBehind}|${ee.unpushedCommits}|${ee.remoteSyncStatus}`).join("||"),ki=I=>I.map(ee=>ee.fullSha).join("|"),Bn=I=>{var ee,ne;return I?`${(ee=I.branchName)!=null?ee:""}|${I.headSha}|${(ne=I.parentSha)!=null?ne:""}|${I.hasUncommittedChanges?1:0}`:"__none__"};async function ps(I,ee){const ne=ee!=null?ee:P,[xe,ot,gt,yt,Ft,qn]=await Promise.all([we("get_branches",{repoPath:I}),we("get_all_repo_commits",{repoPath:I}),we("get_unpushed_direct_commits",{repoPath:I,branch:ne}).catch(()=>[]),we("get_checked_out_ref",{repoPath:I}).catch(()=>null),we("list_worktrees",{repoPath:I}).catch(()=>[]),we("list_stashes",{repoPath:I}).catch(()=>[])]),Kn=await Zi(I,xe,ne),uo=await Promise.all([ne,...xe.map(An=>An.name)].map(async An=>{const Kt=await we("get_branch_unpushed_commit_shas",{repoPath:I,branch:An}).catch(()=>[]);return[An,Kt]}));x(xe),w(Kn),j(ot),T(gt),L(Object.fromEntries(uo)),Z(yt),ie(Ft),Mn(qn)}async function Vo(I){const[ee,ne,xe]=await Promise.all([we("get_branches",{repoPath:I}).catch(()=>[]),we("get_all_repo_commits",{repoPath:I}).catch(()=>[]),we("get_checked_out_ref",{repoPath:I}).catch(()=>null)]);return qt(ee)!==qt(Bo.current)||ki(ne)!==ki(si.current)||Bn(xe)!==Bn(ys.current)}async function Lo(I){Ue(null),zt(!0);try{const[ee,ne]=await Promise.all([we("get_repo_info",{repoPath:I}),we("get_default_branch",{repoPath:I})]);a(ee.name),F(ne),n(I),await ps(I,ne),Qs(I),Ue({kind:"success",message:`Now targeting worktree at ${I}`})}catch(ee){const ne=ee instanceof Error?ee.message:String(ee);Ue({kind:"error",message:ne}),console.error("Failed to switch worktree:",ne)}finally{zt(!1)}}async function ao(I,ee){if(!(!t||ke)){Be(!0),Ue(null);try{await we("remove_worktree",{repoPath:t,worktreePath:I,force:ee}),await ps(t),Ue({kind:"success",message:`Removed worktree at ${I}`})}catch(ne){const xe=ne instanceof Error?ne.message:String(ne);Ue({kind:"error",message:xe}),console.error("Failed to remove worktree:",xe)}finally{Be(!1)}}}function Yo(I,ee){var ne,xe;a(ee.name||md(I)),F(ee.defaultBranch||"main"),x(ee.branches),w(ee.mergeNodes),j(ee.directCommits),T(ee.unpushedDirectCommits),L(ee.unpushedCommitShasByBranch),Z(ee.checkedOutRef),ie(ee.worktrees),Mn(ee.stashes),ft(ee.branchCommitPreviews),zn((ne=ee.branchParentByName)!=null?ne:{}),kn((xe=ee.laneByBranch)!=null?xe:{}),Xn(ee.branchUniqueAheadCounts),n(I)}async function xo(I,ee,ne){const xe=ne==null?void 0:ne.forceRefresh,ot=ne==null?void 0:ne.applyToActiveState;try{const[gt,yt]=await Promise.all([we("get_repo_info",{repoPath:I}),we("get_default_branch",{repoPath:I})]);if(ee!==Rs.current)return;const Ft=await we("get_repo_visual_snapshot",{repoPath:I,forceRefresh:xe});if(ee!==Rs.current)return;h(qn=>({...qn,[I]:Ft})),ot&&(t===I||Rs.current),Qs(I)}catch(gt){if(ee!==Rs.current)return;console.error("Background snapshot refresh failed:",gt)}}async function yn(I){const ee=++Rs.current,ne=il(I);if(!ne)return;const xe=d[ne];if(xe!=null&&xe.loaded){Vt(null),Yo(ne,xe),hs({path:ne,name:xe.name||md(ne),lastOpenedAt:Date.now(),branchName:xe.defaultBranch}),zt(!1),Ee(!1),xo(ne,ee,{forceRefresh:!1,applyToActiveState:!1});return}if(Ee(!0),zt(!0),Vt(null),await new Promise(ot=>setTimeout(ot,15)),ee===Rs.current)try{const[ot,gt]=await Promise.all([we("get_repo_info",{repoPath:ne}),we("get_default_branch",{repoPath:ne})]);if(ee!==Rs.current)return;a(ot.name),F(gt);const yt=await we("get_repo_visual_snapshot",{repoPath:ne,forceRefresh:!0});if(ee!==Rs.current)return;h(Ft=>({...Ft,[ne]:yt})),Yo(ne,yt),hs({path:ne,name:ot.name,lastOpenedAt:Date.now(),branchName:gt}),zt(!1),Ee(!1),Qs(ne)}catch(ot){if(ee!==Rs.current)return;console.error("Failed to load repo:",ot),Vt(ot instanceof Error?ot.message:String(ot)),n(null),Ee(!1),zt(!1)}}async function Qs(I){const ee=++Us.current;try{if(ee!==Us.current)return;H(!1),Le(null);const ne=await we("get_github_info",{repoPath:I}),xe=await we("get_github_auth_status");if(ee!==Us.current||(me(xe),!xe.ghAvailable||!xe.authenticated))return;const ot=await we("get_open_prs",{owner:ne.owner,repo:ne.repo});if(ee!==Us.current)return;Y(ot),H(!0)}catch(ne){if(ee!==Us.current)return;console.log("GitHub data not available:",ne),Le(ne instanceof Error?ne.message:String(ne)),H(!1)}}y.useEffect(()=>{let I=null,ee=!1;const ne=(()=>{try{return $x().label}catch{return null}})(),xe=async gt=>{var Ft;const yt=(Ft=gt==null?void 0:gt.path)==null?void 0:Ft.trim();!yt||ee||t!==yt&&await yn(yt)};return(async()=>{ne==="main"&&(I=await gc("gitviz://open-repo",async yt=>{await xe(yt.payload)}));const gt=await we("take_pending_open_repo");await xe(gt)})(),()=>{ee=!0,I&&I()}},[t]),y.useEffect(()=>{Bo.current=_},[_]),y.useEffect(()=>{si.current=S},[S]),y.useEffect(()=>{ys.current=V},[V]),y.useEffect(()=>{fs.current=As},[As]),y.useEffect(()=>{},[t,P,Ro]),y.useEffect(()=>{if(!t||!P||!Ro)return;we("watch_repo",{repoPath:t}).catch(console.error);let I=!1,ee=!1,ne=!1,xe=null;const ot=async()=>{if(!I){if(fs.current){ee=!0;return}if(ne){ee=!0;return}ne=!0;try{if(!await Vo(t)||I)return;await ps(t,P)}catch(yt){console.warn("Frozen git-activity refresh failed:",yt)}finally{ne=!1,ee&&!I&&(ee=!1,window.setTimeout(()=>{ot()},0))}}},gt=()=>{ee=!0,ot()};return gc("git-activity",yt=>{il(yt.payload.repoPath)===t&&(Ks(t,!0),gt())}).then(yt=>{I?yt():xe=yt}).catch(console.error),()=>{I=!0,xe&&xe()}},[t,P,Ro]);async function ji(){if(t){Ke(!0),Le(null);try{await we("authenticate_github");const I=await we("get_github_auth_status");me(I),I.authenticated?await Qs(t):I.message&&Le(I.message)}catch(I){Le(I instanceof Error?I.message:String(I))}finally{Ke(!1)}}}const Ds=new Set(N.map(I=>I.branchName)),Vs=14*864e5,nn=Date.now(),Bs=_.filter(I=>I.status==="stale"),ro=Bs.filter(I=>Ds.has(I.name)||nn-new Date(I.lastCommitDate).getTime()<=Vs),Oo=Bs.filter(I=>!Ds.has(I.name)&&nn-new Date(I.lastCommitDate).getTime()>Vs),xs=I=>{var ee;return Object.prototype.hasOwnProperty.call(cs,I.name)?Math.max(0,(ee=cs[I.name])!=null?ee:0):Math.max(0,I.commitsAhead)};y.useEffect(()=>{_t({}),Jt.current=null,Ke(!1),me(null),Le(null),Y([]),Ue(null)},[t]),y.useEffect(()=>{var qn,Kn,uo,An;if(!t||!P){_t({}),ft({}),zn({}),kn({}),Xn({}),Jt.current=null;return}const I=_.map(Kt=>{var en;return`${Kt.name}:${Kt.headSha}:${(en=Kt.parentBranch)!=null?en:""}:${Kt.commitsAhead}`}).join("|"),ee=b.map(Kt=>{var en,cn;return`${Kt.fullSha}:${(cn=(en=Kt.parentShas)==null?void 0:en[1])!=null?cn:""}`}).join("|"),ne=`${t}|${P}|${I}|${ee}`;if(Jt.current===ne)return;Jt.current=ne;const xe={},ot={};for(const Kt of _){if(Kt.name===P)continue;const en=S.filter(cn=>cn.branch===Kt.name).map(cn=>{var Ts;return{fullSha:cn.fullSha,sha:cn.sha,parentSha:(Ts=cn.parentSha)!=null?Ts:null,message:cn.message,author:cn.author,date:cn.date,kind:"commit"}});xe[Kt.name]=en,ot[Kt.name]=en.length}const gt=new Map;for(const Kt of S)gt.set(Kt.fullSha,Kt.branch);const yt=Kt=>{if(!Kt)return null;const en=gt.get(Kt);if(en)return en;for(const[cn,Ts]of gt.entries())if(cn.startsWith(Kt)||Kt.startsWith(cn))return Ts;return null},Ft={[P]:null};for(const Kt of _){if(Kt.name===P){Ft[Kt.name]=null;continue}const en=S.filter(Ws=>Ws.branch===Kt.name),cn=new Set(en.map(Ws=>Ws.fullSha)),Ts=(Kn=(qn=en.filter(Ws=>{var fo;const Fs=(fo=Ws.parentSha)!=null?fo:null;return!Fs||!cn.has(Fs)}).sort((Ws,Fs)=>{const fo=new Date(Ws.date).getTime()-new Date(Fs.date).getTime();return fo!==0?fo:Ws.fullSha.localeCompare(Fs.fullSha)})[0])==null?void 0:qn.parentSha)!=null?Kn:null,Os=yt(Ts);Ft[Kt.name]=(An=(uo=Os!=null?Os:Lt[Kt.name])!=null?uo:Kt.parentBranch)!=null?An:null}_t({}),ft(xe),zn(Ft),kn(Kt=>{const en={};for(const cn of _){const Ts=Kt[cn.name];Ts!=null&&Number.isFinite(Ts)&&(en[cn.name]=Ts)}return en}),Xn(ot)},[t,P,_,b,S,Lt]),y.useEffect(()=>{if(!bt){Ge(!1);return}Ge(!0);const I=window.setTimeout(()=>{Ge(!1)},Ny),ee=window.setTimeout(()=>{Ue(null)},Ny+Zw);return()=>{window.clearTimeout(I),window.clearTimeout(ee)}},[bt]),y.useEffect(()=>{if(!t||_.length===0)return;const I=xe=>new Promise(ot=>setTimeout(ot,xe));async function ee(){const ot=`${await we("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${ot}`),await I(800),await we("screenshot",{path:`${ot}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${ot}`)}const ne=xe=>{if((xe.metaKey||xe.ctrlKey)&&!xe.shiftKey&&!xe.altKey&&xe.key.toLowerCase()==="b"){xe.preventDefault(),Ns(ot=>!ot);return}(xe.metaKey||xe.ctrlKey)&&xe.shiftKey&&xe.key==="S"&&(xe.preventDefault(),ee())};return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[t,i,_]);function Co(){Ze(!0),setTimeout(()=>{Me(!1),Ze(!1),Ae("active"),$t(null)},100)}async function zo(I){if(!t)return;Ue(null);const ee=/^STASH:(\d+)$/.exec(I.commitSha);if(ee){try{const ne=parseInt(ee[1],10),xe=await we("apply_stash_restore",{repoPath:t,stashIndex:ne});Z(xe),await ps(t);const ot=`Stash ${ne+1}`,gt=xe.branchName?` on branch ${xe.branchName}`:" at the stash base (detached HEAD)";Ue({kind:"success",message:`Restored ${ot}${gt}; stash applied and dropped (uncommitted changes).`})}catch(ne){const xe=ne instanceof Error?ne.message:String(ne);Ue({kind:"error",message:xe}),console.error("Failed to apply stash:",xe)}return}if(I.branchName){const ne=(ot,gt)=>{const yt=ot.replace(/\\/g,"/").replace(/\/+$/,""),Ft=gt.replace(/\\/g,"/").replace(/\/+$/,"");return yt===Ft||yt.toLowerCase()===Ft.toLowerCase()},xe=ae.find(ot=>ot.pathExists===!1||ot.isCurrent||t&&ne(ot.path,t)?!1:ot.branchName===I.branchName);if(xe){await Lo(xe.path);return}}try{let ne="";(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await we("stash_push",{repoPath:t,includeUntracked:!0}),ne="Stashed local changes (including untracked), then ",await ps(t));const ot=I.branchName?await we("checkout_branch",{repoPath:t,branchName:I.branchName}):await we("checkout_ref",{repoPath:t,refName:I.commitSha}),gt=await we("get_checked_out_ref",{repoPath:t}).catch(()=>ot);Z(gt),await ps(t);const yt=gt.branchName?gt.branchName:`${gt.headSha.slice(0,7)} (detached)`;Ue({kind:"success",message:`${ne}Checked out ${yt}`})}catch(ne){const xe=ne instanceof Error?ne.message:String(ne);Ue({kind:"error",message:xe}),console.error("Failed to checkout commit:",xe)}}async function Wo(){if(!(!t||$n)){Ue(null),rn(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ue({kind:"error",message:"No local changes to stash."});return}await we("stash_push",{repoPath:t,includeUntracked:!0}),await ps(t),Ue({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(I){const ee=I instanceof Error?I.message:String(I);Ue({kind:"error",message:ee}),console.error("Failed to stash:",ee)}finally{rn(!1)}}}async function Ys(I){if(!t||Tn)return!1;const ee=I.trim();if(!ee)return Ue({kind:"error",message:"Enter a commit message."}),!1;Ue(null),nt(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ue({kind:"error",message:"No local changes to commit."}),!1;const xe=await we("commit_working_tree",{repoPath:t,message:ee});return Z(xe),await ps(t),Ue({kind:"success",message:"Committed local changes."}),!0}catch(ne){const xe=ne instanceof Error?ne.message:String(ne);return Ue({kind:"error",message:xe}),console.error("Failed to commit:",xe),!1}finally{nt(!1)}}async function bo(){if(!t||ln)return!1;Ue(null),oo(!0);try{if(!(await we("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ue({kind:"error",message:"No local changes to stage."}),!1;const ee=await we("stage_working_tree",{repoPath:t});return Z(ee),await ps(t),Ue({kind:"success",message:"Staged all changes."}),!0}catch(I){const ee=I instanceof Error?I.message:String(I);return Ue({kind:"error",message:ee}),console.error("Failed to stage:",ee),!1}finally{oo(!1)}}async function oi(I,ee){if(!(!t||No)){us(!0),Ue(null);try{const ne=/^STASH:(\d+)$/.exec(I);let xe;if(ne){const ot=parseInt(ne[1],10);xe=await we("move_stash_to_new_branch",{repoPath:t,stashIndex:ot,branchName:ee})}else xe=await we("create_branch_from_uncommitted",{repoPath:t,branchName:ee});Z(xe),await ps(t),Ue({kind:"success",message:`Moved to new branch "${ee}"`})}catch(ne){const xe=ne instanceof Error?ne.message:String(ne);Ue({kind:"error",message:xe}),console.error("Failed to create branch from node:",xe)}finally{us(!1)}}}async function Gn(I){if(!(!t||No)){us(!0),Ue(null);try{const ee=await we("create_root_branch",{repoPath:t,branchName:I});Z(ee),await ps(t),Ue({kind:"success",message:`Created new root branch "${I}"`})}catch(ee){const ne=ee instanceof Error?ee.message:String(ee);Ue({kind:"error",message:ne}),console.error("Failed to create root branch:",ne)}finally{us(!1)}}}async function dn(I,ee){if(!t)return;const ne=Array.from(new Set(I.filter(xe=>!!xe&&xe!==ee)));if(ne.length!==0){Ue(null),kt(!0);try{let xe=null;for(const ot of ne)xe=await we("merge_ref_into_branch",{repoPath:t,sourceRef:ot,targetBranch:ee});await ps(t),xe&&Z(xe),Ue({kind:"success",message:ne.length===1?`Merged ${ne[0].slice(0,7)} into ${ee}`:`Merged ${ne.length} commits into ${ee}`})}catch(xe){const ot=xe instanceof Error?xe.message:String(xe);Ue({kind:"error",message:ot}),console.error("Failed to merge refs into branch:",ot)}finally{kt(!1)}}}async function Fo(){if(!(!t||Bt)){Ue(null),Wt(!0);try{const I=await we("push_all_unpushed_branches",{repoPath:t});await ps(t),Ue({kind:"success",message:I.length>0?I.length===1?`Pushed ${I[0].branchName}`:`Pushed ${I.length} branches`:"Everything local is already pushed."})}catch(I){const ee=I instanceof Error?I.message:String(I);Ue({kind:"error",message:ee}),console.error("Failed to push all branches:",ee)}finally{Wt(!1)}}}async function Un(){if(!(!t||Bt)){Ue(null),Wt(!0);try{const I=await we("push_current_branch",{repoPath:t});await ps(t),Ue({kind:"success",message:`Pushed ${I.branchName}`})}catch(I){const ee=I instanceof Error?I.message:String(I);Ue({kind:"error",message:ee}),console.error("Failed to push current branch:",ee)}finally{Wt(!1)}}}async function Ls(I){var ne;if(!t||Bt)return;const ee=Array.from(new Map(I.filter(xe=>xe.branchName&&xe.targetSha).map(xe=>[xe.branchName,xe])).values());if(ee.length!==0){Ue(null),Wt(!0);try{for(const xe of ee)await we("push_branch",{repoPath:t,branchName:xe.branchName,targetSha:xe.targetSha});await ps(t),Ue({kind:"success",message:ee.length===1?`Pushed ${ee[0].branchName} through ${(ne=ee[0].targetSha)==null?void 0:ne.slice(0,7)}`:`Pushed ${ee.length} selected commit ranges`})}catch(xe){const ot=xe instanceof Error?xe.message:String(xe);Ue({kind:"error",message:ot}),console.error("Failed to push selected commits:",ot)}finally{Wt(!1)}}}async function pi(I){var gt;if(!t||Qe)return;const ee=Array.from(new Set(I.branchNames.filter(yt=>yt&&yt!==P))),ne=!!I.discardUncommittedChanges,xe=(gt=I.stashIndices)!=null?gt:[],ot=Array.from(new Set(xe)).sort((yt,Ft)=>Ft-yt);if(!(ee.length===0&&!ne&&ot.length===0)){Ue(null),Nt(!0);try{for(const qn of ot)await we("stash_drop",{repoPath:t,stashIndex:qn});const yt=ee.length>0||ne?await we("delete_selected_elements",{repoPath:t,branchNames:ee,discardUncommittedChanges:ne}):{deletedBranches:[],discardedUncommittedChanges:!1};await ps(t);const Ft=[];ot.length>0&&Ft.push(ot.length===1?`removed stash ${ot[0]+1}`:`removed ${ot.length} stashes`),yt.discardedUncommittedChanges&&Ft.push("discarded local uncommitted changes"),yt.deletedBranches.length>0&&Ft.push(yt.deletedBranches.length===1?`deleted ${yt.deletedBranches[0]}`:`deleted ${yt.deletedBranches.length} branches`),Ue({kind:"success",message:Ft.length>0?Ft.join(" and "):"Nothing to delete."})}catch(yt){const Ft=yt instanceof Error?yt.message:String(yt);Ue({kind:"error",message:Ft}),console.error("Failed to delete selected elements:",Ft)}finally{Nt(!1)}}}function lo(I){$t(I),it(ee=>{var ne;return{branch:I,seq:((ne=ee==null?void 0:ee.seq)!=null?ne:0)+1}})}function js(I){I&&(dt(I),se(ee=>ee+1))}function vo(I){I&&(ue(I),se(ee=>ee+1))}y.useEffect(()=>{var ne;const I=V!=null&&V.hasUncommittedChanges?"WORKING_TREE":(ne=V==null?void 0:V.headSha)!=null?ne:null;if(!I)return;const ee=`${t!=null?t:"__no-repo__"}|${ks}|${I}`;yo.current!==ee&&(yo.current=ee,dt(I),se(xe=>xe+1))},[V==null?void 0:V.hasUncommittedChanges,V==null?void 0:V.headSha,ks,t]),y.useEffect(()=>{yo.current=null},[t]);const{enrichedBranches:bs,enrichedBranchCommitPreviews:E,enrichedBranchUniqueAheadCounts:q,enrichedDirectCommits:fe}=y.useMemo(()=>{var ko,jo,be,C;const I=Gx(jn,_,S,an,cs,P);let ee=I.branches,ne=I.directCommits,xe=I.branchCommitPreviews,ot=I.branchUniqueAheadCounts;if(!(V!=null&&V.hasUncommittedChanges))return{enrichedBranches:ee,enrichedDirectCommits:ne,enrichedBranchCommitPreviews:xe,enrichedBranchUniqueAheadCounts:ot};const gt=V.headSha||V.parentSha||null,yt=(jo=(ko=ne[0])==null?void 0:ko.fullSha)!=null?jo:null,Ft=(M,D)=>!M||!D?!1:M===D||M.startsWith(D)||D.startsWith(M),qn=[{name:P,headSha:yt!=null?yt:"",isDefault:!0},...ee.map(M=>({name:M.name,headSha:M.headSha,isDefault:!1}))],Kn=V.branchName?qn.find(M=>M.name===V.branchName):void 0,uo=gt?qn.filter(M=>Ft(M.headSha,gt)):[],An=(be=Kn!=null?Kn:uo.find(M=>M.isDefault))!=null?be:uo[0],Kt=!!(An&&gt&&Ft(An.headSha,gt)),en=An&&!An.isDefault?ee.find(M=>M.name===An.name):void 0,cn=(()=>{var D;if(!gt)return null;const M=ne.find(B=>Ft(B.fullSha,gt)||Ft(B.sha,gt));if(M!=null&&M.date)return M.date;if(en){const B=((D=xe[en.name])!=null?D:[]).find(U=>Ft(U.fullSha,gt)||Ft(U.sha,gt));if(B!=null&&B.date)return B.date}return null})(),Ts=cn?new Date(cn).getTime():Number.NaN,Os=Date.now(),Ws=Number.isFinite(Ts)?Math.max(Os,Ts+1):Os,Fs=new Date(Ws).toISOString(),fo={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:gt,message:"Local uncommitted changes",author:"You",date:Fs,kind:"uncommitted"},_i={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:gt,childShas:[],branch:P,message:"Local uncommitted changes",author:"You",date:Fs,kind:"uncommitted"};if(Kt&&(An!=null&&An.isDefault))return{enrichedBranches:ee,enrichedBranchCommitPreviews:xe,enrichedBranchUniqueAheadCounts:ot,enrichedDirectCommits:[...ne,_i]};if(Kt&&en)return{enrichedBranches:ee.map(D=>D.name===en.name?{...D,commitsAhead:D.commitsAhead+1,unpushedCommits:D.unpushedCommits+1,lastCommitDate:Fs,headSha:"WORKING_TREE"}:D),enrichedDirectCommits:ne,enrichedBranchCommitPreviews:{...xe,[en.name]:[fo,...xe[en.name]||[]]},enrichedBranchUniqueAheadCounts:{...ot,[en.name]:Math.max(0,(C=Object.prototype.hasOwnProperty.call(ot,en.name)?ot[en.name]:en.commitsAhead)!=null?C:0)+1}};const Go={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:Fs,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:gt!=null?gt:void 0,parentBranch:(An==null?void 0:An.name)||V.branchName||P};return{enrichedBranches:[Go,...ee],enrichedBranchCommitPreviews:{...xe,[Go.name]:[fo]},enrichedBranchUniqueAheadCounts:{...ot,[Go.name]:1},enrichedDirectCommits:ne}},[_,an,cs,V,P,S,jn]),ye=y.useMemo(()=>{const I={...Lt};return I[P]=null,I},[Lt,P,bs]),Ve=y.useMemo(()=>{var I;return(I=pw(bs,P,ye,Rn))!=null?I:cp(bs,P,E,ye)},[bs,P,E,ye,Rn]),et=y.useMemo(()=>jc({lanes:Ve,branches:bs,mergeNodes:b,directCommits:fe,unpushedDirectCommits:k,defaultBranch:P,branchCommitPreviews:E,branchParentByName:ye,branchUniqueAheadCounts:q,manuallyOpenedClumps:_e,manuallyClosedClumps:oe,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:tt,checkedOutRef:V!=null?V:null,orientation:ks}),[Ve,bs,b,fe,k,P,E,ye,q,_e,oe,Q,tt,(co=V==null?void 0:V.headSha)!=null?co:null,(ii=V==null?void 0:V.branchName)!=null?ii:null,ks]),Rt=y.useMemo(()=>{var I;return tt&&(I=et.clusterKeyByCommitId.get(tt))!=null?I:null},[et.clusterKeyByCommitId,tt]),Ht=y.useMemo(()=>{if(!Rt||oe.has(Rt))return _e;const I=new Set(_e);return I.add(Rt),I},[oe,_e,Rt]),Dt=y.useMemo(()=>{if(!Rt)return oe;const I=new Set(oe);return I.delete(Rt),I},[oe,Rt]),qe=y.useMemo(()=>jc({lanes:Ve,branches:bs,mergeNodes:b,directCommits:fe,unpushedDirectCommits:k,defaultBranch:P,branchCommitPreviews:E,branchParentByName:ye,branchUniqueAheadCounts:q,manuallyOpenedClumps:Ht,manuallyClosedClumps:Dt,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:tt,checkedOutRef:V!=null?V:null,orientation:ks}),[Ve,bs,b,fe,k,P,E,ye,q,Ht,Dt,Q,tt,(Xo=V==null?void 0:V.headSha)!=null?Xo:null,(Ji=V==null?void 0:V.branchName)!=null?Ji:null,ks]);y.useEffect(()=>{try{const I=window.localStorage.getItem(Ry);if(I){const ne=Number(I);Number.isFinite(ne)&&ni(Math.min(zy,Math.max(Oy,ne)))}const ee=window.localStorage.getItem(By);ee!=null&&Ns(ee==="true")}catch{}},[]),y.useEffect(()=>{is.current=vn},[vn]),y.useEffect(()=>{const I=wn.current;I&&(I.style.width=Hs?"0px":`${vn}px`)},[vn,Hs]),y.useEffect(()=>{try{window.localStorage.setItem(By,String(Hs))}catch{}},[Hs]);const sn=I=>{const ee=En.current;if(!ee)return;const ne=ee.startWidth+(I-ee.startX);ee.pendingWidth=Math.min(zy,Math.max(Oy,ne));const xe=wn.current;xe&&(xe.style.width=`${ee.pendingWidth}px`)},fn=(I,ee)=>{const ne=En.current;if(ne&&!(ee!=null&&ne.pointerId!==ee)){En.current=null,Ho({dragging:!1,lastEvent:I}),document.body.style.cursor="",document.body.style.userSelect="",ni(ne.pendingWidth);try{window.localStorage.setItem(Ry,String(ne.pendingWidth))}catch{}}},Pn=I=>{I.button===0&&(I.preventDefault(),Ho({dragging:!0,lastEvent:"handle:pointerdown"}),console.debug("[sidebar-resize] pointerdown",{pointerId:I.pointerId,clientX:I.clientX,width:is.current}),En.current={startX:I.clientX,startWidth:is.current,pendingWidth:is.current,pointerId:I.pointerId},document.body.style.cursor="col-resize",document.body.style.userSelect="none",I.currentTarget.setPointerCapture(I.pointerId))},Vn=I=>{const ee=En.current;!ee||ee.pointerId!==I.pointerId||(ds.lastEvent!=="move"&&console.debug("[sidebar-resize] pointermove",{clientX:I.clientX}),Ho(ne=>ne.dragging?{dragging:!0,lastEvent:"move"}:ne),sn(I.clientX))},pn=I=>{if(En.current){console.debug("[sidebar-resize] pointerup",{pointerId:I.pointerId});try{I.currentTarget.releasePointerCapture(I.pointerId)}catch{}fn("pointerup",I.pointerId)}},Ms=I=>{if(En.current){console.debug("[sidebar-resize] pointercancel",{pointerId:I.pointerId});try{I.currentTarget.releasePointerCapture(I.pointerId)}catch{}fn("pointercancel",I.pointerId)}};return l.jsx("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:l.jsx("div",{className:"relative z-30 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsxs("div",{ref:wn,className:"relative z-20 flex h-full min-h-0 flex-none overflow-visible",style:{width:Hs?64:vn},children:[l.jsx("button",{type:"button",className:"window-no-drag absolute right-2.5 left-22 top-2.25 z-[90] inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":Hs?"Open sidebar":"Collapse sidebar",onClick:()=>Ns(I=>!I),children:Hs?l.jsx(aw,{className:"h-4 w-4 shrink-0"}):l.jsx(ow,{className:"h-4 w-4 shrink-0"})}),l.jsx(Kw,{className:Jw("min-h-0 shrink-0 overflow-hidden pt-16 transition-[width,opacity] duration-300 ease-in-out","opacity-100"),style:{width:"100%"},collapsed:Hs,projects:So,activeProjectPath:t,onSelectProject:yn,onAddProject:Pi,projectLoading:Ie||p,projectError:xt,branches:bs,defaultBranch:P,checkedOutRef:V,showCommits:Ot,onToggleShowCommits:()=>ht(I=>!I),manuallyOpenedClumps:Ht,manuallyClosedClumps:Dt,setManuallyOpenedClumps:R,setManuallyClosedClumps:le,gridLayoutModel:qe,onSelectCommit:js,onSelectBranch:vo}),Hs?null:l.jsx("div",{"aria-hidden":"true",onPointerDown:Pn,onPointerMove:Vn,onPointerUp:pn,onPointerCancel:Ms,className:"absolute bottom-0 right-[-6px] top-0 z-50 w-3 cursor-col-resize bg-transparent"})]}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-40 h-12"}),l.jsx(Ww,{branches:bs,mergeNodes:b,directCommits:fe,unpushedDirectCommits:k,unpushedCommitShasByBranch:z,defaultBranch:P,branchCommitPreviews:E,branchParentByName:ye,branchUniqueAheadCounts:q,gridSearchQuery:Q,gridSearchJumpToken:$,gridSearchJumpDirection:W,gridFocusSha:tt,onGridSearchResultCountChange:Ne,onGridSearchResultIndexChange:Re,onGridSearchFocusChange:dt,checkedOutRef:V,onCommitClick:zo,onMergeRefsIntoBranch:dn,mergeInProgress:We,onPushAllBranches:Fo,onPushCurrentBranch:Un,onPushCommitTargets:Ls,pushInProgress:Bt,onDeleteSelection:pi,deleteInProgress:Qe,worktrees:ae,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:ao,removeWorktreeInProgress:ke,onSwitchToWorktree:Lo,onStashLocalChanges:Wo,stashInProgress:$n,stashDisabled:!1,onCommitLocalChanges:Ys,commitInProgress:Tn,commitDisabled:!1,onStageAllChanges:bo,stageInProgress:ln,onCreateBranchFromNode:oi,onCreateRootBranch:Gn,createBranchFromNodeInProgress:No,isDebugOpen:io,onDebugClose:()=>go(!1),onInteractionChange:ti,manuallyOpenedClumps:Ht,manuallyClosedClumps:Dt,setManuallyOpenedClumps:R,setManuallyClosedClumps:le,layoutModel:qe,orientation:ks,gridHudProps:{githubAuthStatus:te,githubAuthLoading:Se,onGitHubAuthSetup:ji,gridSearchQuery:Q,setGridSearchQuery:ue,gridSearchResultCount:de,gridSearchResultIndex:Pe,setGridSearchJumpDirection:K,setGridSearchJumpToken:se,mapGridOrientation:ks,setMapGridOrientation:_o,setIsGridDebugOpen:go,githubAuthMessage:Fe,commitSwitchFeedback:bt,isCommitSwitchFeedbackVisible:Pt}})]}),G&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl overflow-hidden ${Je?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Co,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>Ae("active"),className:`text-xs font-medium transition-colors ${ct==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[ro.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>Ae("inactive"),className:`text-xs font-medium transition-colors ${ct==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Oo.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(ct==="active"?ro:Oo).map(I=>{const ee=(pt==null?void 0:pt.name)===I.name,ne=xs(I);return l.jsxs("button",{onClick:()=>lo(I),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${ee?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:I.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[ne>0&&`${ne} ahead`,ne>0&&I.commitsBehind>0&&", ",I.commitsBehind>0&&`${I.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},I.name)})})]})]})})})}var Bc=Bx(),nS=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,sS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=nS}var ls=sS,oS=`.icon-transitions-module__iconState___uqK9J {
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
}`,iS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=oS}var ss=iS,aS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),rS=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),lS=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),cS=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ss.iconState} ${n?ss.hiddenScaled:ss.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ss.iconState} ${n?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),uS=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ss.iconStateFast} ${i?ss.visibleScaled:u?ss.sending:ss.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ss.iconStateFast} ${a?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconStateFast} ${c?ss.visibleScaled:ss.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},dS=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFade} ${n?ss.visible:ss.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ss.iconFade} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),fS=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ss.iconFadeFast} ${n?ss.hidden:ss.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ss.iconFadeFast} ${n?ss.visible:ss.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),hS=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),mS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qx=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),pS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),_S=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),gS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),yS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),xS=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),bS=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),vS=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Kx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Kx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Am="feedback-freeze-styles",Qh="__agentation_freeze";function wS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var un=wS();typeof window<"u"&&!un.installed&&(un.origSetTimeout=window.setTimeout.bind(window),un.origSetInterval=window.setInterval.bind(window),un.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?un.origSetTimeout(t,n):un.origSetTimeout((...a)=>{un.frozen?un.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?un.origSetInterval(t,n):un.origSetInterval((...a)=>{un.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>un.origRAF(n=>{un.frozen?un.frozenRAFQueue.push(t):t(n)}),un.installed=!0);var Ut=un.origSetTimeout,SS=un.origSetInterval,ul=un.origRAF;function CS(t){return t?Kx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function kS(){if(typeof document>"u"||un.frozen)return;un.frozen=!0,un.frozenTimeoutQueue=[],un.frozenRAFQueue=[];let t=document.getElementById(Am);t||(t=document.createElement("style"),t.id=Am),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),un.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;CS(i)||(n.pause(),un.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function $y(){var i;if(typeof document>"u"||!un.frozen)return;un.frozen=!1;const t=un.frozenTimeoutQueue;un.frozenTimeoutQueue=[];for(const a of t)un.origSetTimeout(()=>{if(un.frozen){un.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=un.frozenRAFQueue;un.frozenRAFQueue=[];for(const a of n)un.origRAF(c=>{if(un.frozen){un.frozenRAFQueue.push(a);return}a(c)});for(const a of un.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}un.pausedAnimations=[],(i=document.getElementById(Am))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var jd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},j){const[k,T]=y.useState(u),[z,L]=y.useState(!1),[N,Y]=y.useState("initial"),[P,F]=y.useState(!1),[V,Z]=y.useState(!1),ae=y.useRef(null),ie=y.useRef(null),ke=y.useRef(null),Be=y.useRef(null);y.useEffect(()=>{b&&N!=="exit"&&Y("exit")},[b,N]),y.useEffect(()=>{Ut(()=>{Y("enter")},0);const K=Ut(()=>{Y("entered")},200),_e=Ut(()=>{const R=ae.current;R&&(Zh(R),R.selectionStart=R.selectionEnd=R.value.length,R.scrollTop=R.scrollHeight)},50);return()=>{clearTimeout(K),clearTimeout(_e),ke.current&&clearTimeout(ke.current),Be.current&&clearTimeout(Be.current)}},[]);const Q=y.useCallback(()=>{Be.current&&clearTimeout(Be.current),L(!0),Be.current=Ut(()=>{L(!1),Zh(ae.current)},250)},[]);y.useImperativeHandle(j,()=>({shake:Q}),[Q]);const ue=y.useCallback(()=>{Y("exit"),ke.current=Ut(()=>{p()},150)},[p]),$=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),se=y.useCallback(K=>{K.stopPropagation(),!K.nativeEvent.isComposing&&(K.key==="Enter"&&!K.shiftKey&&(K.preventDefault(),$()),K.key==="Escape"&&ue())},[$,ue]),W=[ls.popup,w?ls.light:"",N==="enter"?ls.enter:"",N==="entered"?ls.entered:"",N==="exit"?ls.exit:"",z?ls.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:ie,className:W,"data-annotation-popup":!0,style:_,onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:ls.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:ls.headerToggle,onClick:()=>{const K=V;Z(!V),K&&Ut(()=>Zh(ae.current),0)},type:"button",children:[l.jsx("svg",{className:`${ls.chevron} ${V?ls.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:ls.element,children:n})]}):l.jsx("span",{className:ls.element,children:n}),i&&l.jsx("span",{className:ls.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${ls.stylesWrapper} ${V?ls.expanded:""}`,children:l.jsx("div",{className:ls.stylesInner,children:l.jsx("div",{className:ls.stylesBlock,children:Object.entries(S).map(([K,_e])=>l.jsxs("div",{className:ls.styleLine,children:[l.jsx("span",{className:ls.styleProperty,children:K.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:ls.styleValue,children:_e}),";"]},K))})})}),a&&l.jsxs("div",{className:ls.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:ae,className:ls.textarea,style:{borderColor:P?x:void 0},placeholder:c,value:k,onChange:K=>T(K.target.value),onFocus:()=>F(!0),onBlur:()=>F(!1),rows:2,onKeyDown:se}),l.jsxs("div",{className:ls.actions,children:[g&&l.jsx("div",{className:ls.deleteWrapper,children:l.jsx("button",{className:ls.deleteButton,onClick:g,type:"button",children:l.jsx(xS,{size:22})})}),l.jsx("button",{className:ls.cancel,onClick:ue,children:"Cancel"}),l.jsx("button",{className:ls.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:$,disabled:!k.trim(),children:d})]})]})}),jS=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const j=g.current.getBoundingClientRect();p({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Ut(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Ut(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Bc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},MS=`.styles-module__tooltip___mcXL2 {
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
}`,TS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=MS}var Iy=TS,jr=({content:t})=>l.jsx(jS,{className:Iy.tooltip,content:t,children:l.jsx(lS,{className:Iy.tooltipIcon})}),vt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Qx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...vt.navigation},{type:"header",label:"Header",...vt.header},{type:"hero",label:"Hero",...vt.hero},{type:"section",label:"Section",...vt.section},{type:"sidebar",label:"Sidebar",...vt.sidebar},{type:"footer",label:"Footer",...vt.footer},{type:"modal",label:"Modal",...vt.modal},{type:"banner",label:"Banner",...vt.banner},{type:"drawer",label:"Drawer",...vt.drawer},{type:"popover",label:"Popover",...vt.popover},{type:"divider",label:"Divider",...vt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...vt.card},{type:"text",label:"Text",...vt.text},{type:"image",label:"Image",...vt.image},{type:"video",label:"Video",...vt.video},{type:"table",label:"Table",...vt.table},{type:"grid",label:"Grid",...vt.grid},{type:"list",label:"List",...vt.list},{type:"chart",label:"Chart",...vt.chart},{type:"codeBlock",label:"Code Block",...vt.codeBlock},{type:"map",label:"Map",...vt.map},{type:"timeline",label:"Timeline",...vt.timeline},{type:"calendar",label:"Calendar",...vt.calendar},{type:"accordion",label:"Accordion",...vt.accordion},{type:"carousel",label:"Carousel",...vt.carousel},{type:"logo",label:"Logo",...vt.logo},{type:"faq",label:"FAQ",...vt.faq},{type:"gallery",label:"Gallery",...vt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...vt.button},{type:"input",label:"Input",...vt.input},{type:"search",label:"Search",...vt.search},{type:"form",label:"Form",...vt.form},{type:"tabs",label:"Tabs",...vt.tabs},{type:"dropdown",label:"Dropdown",...vt.dropdown},{type:"toggle",label:"Toggle",...vt.toggle},{type:"stepper",label:"Stepper",...vt.stepper},{type:"rating",label:"Rating",...vt.rating},{type:"fileUpload",label:"File Upload",...vt.fileUpload},{type:"checkbox",label:"Checkbox",...vt.checkbox},{type:"radio",label:"Radio",...vt.radio},{type:"slider",label:"Slider",...vt.slider},{type:"datePicker",label:"Date Picker",...vt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...vt.avatar},{type:"badge",label:"Badge",...vt.badge},{type:"tag",label:"Tag",...vt.tag},{type:"breadcrumb",label:"Breadcrumb",...vt.breadcrumb},{type:"pagination",label:"Pagination",...vt.pagination},{type:"progress",label:"Progress",...vt.progress},{type:"alert",label:"Alert",...vt.alert},{type:"toast",label:"Toast",...vt.toast},{type:"notification",label:"Notification",...vt.notification},{type:"tooltip",label:"Tooltip",...vt.tooltip},{type:"stat",label:"Stat",...vt.stat},{type:"skeleton",label:"Skeleton",...vt.skeleton},{type:"chip",label:"Chip",...vt.chip},{type:"icon",label:"Icon",...vt.icon},{type:"spinner",label:"Spinner",...vt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...vt.pricing},{type:"testimonial",label:"Testimonial",...vt.testimonial},{type:"cta",label:"CTA",...vt.cta},{type:"productCard",label:"Product Card",...vt.productCard},{type:"profile",label:"Profile",...vt.profile},{type:"feature",label:"Feature",...vt.feature},{type:"team",label:"Team",...vt.team},{type:"login",label:"Login",...vt.login},{type:"contact",label:"Contact",...vt.contact}]}],Ki={};for(const t of Qx)for(const n of t.items)Ki[n.type]=n;function He({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Fn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function ei({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function ES({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Fn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(He,{w:t*.06}),l.jsx(He,{w:t*.07}),l.jsx(He,{w:t*.05}),l.jsx(He,{w:t*.06})]}),l.jsx(Fn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function AS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(He,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(He,{w:t*.6}),l.jsx(He,{w:t*.4}),l.jsx(Fn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function DS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(He,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Fn,{w:10,h:10,radius:2}),l.jsx(He,{w:t*(.4+c*17%30/100)})]},c))]})}function NS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:"60%",h:3,strong:!0}),l.jsx(He,{w:"80%",h:2}),l.jsx(He,{w:"70%",h:2}),l.jsx(He,{w:"60%",h:2})]},c))})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(He,{w:"90%"}),l.jsx(He,{w:"70%"}),l.jsx(He,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Fn,{w:70,h:26,radius:4}),l.jsx(Fn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"70%",h:4,strong:!0}),l.jsx(He,{w:"95%",h:2}),l.jsx(He,{w:"85%",h:2}),l.jsx(He,{w:"50%",h:2})]})]})}function LS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(He,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(He,{w:`${70+u*13%25}%`,h:2},u))]})}function OS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function zS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(He,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(He,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function $S({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(ei,{size:8}),l.jsx(He,{w:`${55+c*17%35}%`,h:2})]},c))})}function IS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(He,{w:Math.max(20,t*.5),h:3,strong:!0})})}function PS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(He,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(He,{w:"40%",h:2})})]})}function HS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:60+c*17%30,h:2}),l.jsx(Fn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Fn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function US({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(He,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(He,{w:"80%",h:2}),l.jsx(He,{w:"65%",h:2}),l.jsx(He,{w:"75%",h:2})]})]})}function VS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function YS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0})})}function WS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(He,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(He,{w:t*.35})]})}function FS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx(He,{w:t*.7}),l.jsx(He,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Fn,{w:"33%",h:"100%",radius:4}),l.jsx(Fn,{w:"33%",h:"100%",radius:4}),l.jsx(Fn,{w:"33%",h:"100%",radius:4})]})]})}function XS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Fn,{w:"100%",h:"100%",radius:4},u))})}function GS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(He,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(He,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function qS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function KS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(ei,{size:Math.min(14,n*.4)}),l.jsx(He,{w:"50%",h:2})]})}function QS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ei,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"60%",h:3,strong:!0}),l.jsx(He,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function ZS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function JS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Fn,{w:a,h:`${d}%`,radius:2},u)})})}function e4({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Fn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function t4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(He,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function n4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(He,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function s4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Fn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function o4({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function i4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(He,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Fn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(ei,{size:5}),l.jsx(ei,{size:5}),l.jsx(ei,{size:5})]})]})}function r4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(He,{w:t*.4,h:3,strong:!0}),l.jsx(He,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(ei,{size:5}),l.jsx(He,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Fn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function l4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:"90%",h:2}),l.jsx(He,{w:"75%",h:2}),l.jsx(He,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(ei,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(He,{w:60,h:3,strong:!0}),l.jsx(He,{w:40,h:2})]})]})]})}function c4({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(He,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(He,{w:t*.35}),l.jsx(Fn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function u4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"40%",h:3,strong:!0}),l.jsx(He,{w:"70%",h:2})]})]})}function d4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(He,{w:t*.4,h:3,strong:!0}),l.jsx(Fn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function f4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(He,{w:t*.5,h:2}),l.jsx(He,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(He,{w:t*.3,h:2})]})}function h4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function m4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function p4({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function _4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function g4({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(ei,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(He,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function y4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(He,{w:t*.4,h:2}),l.jsx(He,{w:t*.25,h:2})]})}function x4({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(ei,{size:6}),l.jsx(ei,{size:6}),l.jsx(ei,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(He,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function b4({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(He,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(He,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function v4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(ei,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:"50%",h:3,strong:!0}),l.jsx(He,{w:"75%",h:2})]}),l.jsx(He,{w:30,h:2})]})}function w4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"65%",h:4,strong:!0}),l.jsx(He,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(He,{w:"30%",h:5,strong:!0}),l.jsx(Fn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function S4({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(ei,{size:i}),l.jsx(He,{w:t*.45,h:4,strong:!0}),l.jsx(He,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(He,{w:20,h:3,strong:!0}),l.jsx(He,{w:28,h:2})]})]})]})}function C4({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(He,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(He,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function k4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(He,{w:"70%",h:3,strong:!0}),l.jsx(He,{w:"90%",h:2}),l.jsx(He,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function j4({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Fn,{w:i,h:i,radius:i*.25}),l.jsx(He,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function M4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(He,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function T4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function E4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function A4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function D4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function N4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(He,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(He,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function R4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function B4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(He,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function L4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function O4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function z4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Fn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(He,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(He,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function $4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(He,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(ei,{size:a}),l.jsx(He,{w:t*.12,h:3,strong:!0}),l.jsx(He,{w:t*.08,h:2})]},u))})]})}function I4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(He,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(He,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:Math.min(60,t*.2),h:2}),l.jsx(Fn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Fn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(He,{w:t*.4,h:2})]})}function P4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(He,{w:t*.4,h:4,strong:!0}),l.jsx(He,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:50,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:40,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(He,{w:50,h:2}),l.jsx(Fn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(He,{w:60,h:2}),l.jsx(Fn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Fn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var H4={navigation:ES,hero:AS,sidebar:DS,footer:NS,modal:RS,card:BS,text:LS,image:OS,table:zS,list:$S,button:IS,input:PS,form:HS,tabs:US,avatar:VS,badge:YS,header:WS,section:FS,grid:XS,dropdown:GS,toggle:qS,search:KS,toast:QS,progress:ZS,chart:JS,video:e4,tooltip:t4,breadcrumb:n4,pagination:s4,divider:o4,accordion:i4,carousel:a4,pricing:r4,testimonial:l4,cta:c4,alert:u4,banner:d4,stat:f4,stepper:h4,tag:m4,rating:p4,map:_4,timeline:g4,fileUpload:y4,codeBlock:x4,calendar:b4,notification:v4,productCard:w4,profile:S4,drawer:C4,popover:k4,logo:j4,faq:M4,gallery:T4,checkbox:E4,radio:A4,slider:D4,datePicker:N4,skeleton:R4,chip:B4,icon:L4,spinner:O4,feature:z4,team:$4,login:I4,contact:P4};function U4({type:t,width:n,height:i,text:a}){const c=H4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var V4=`svg[fill=none] {
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
}`,Y4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=V4}var De=Y4,al=24,Xu=5;function Py(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],j=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const ie of n)i.has(ie.id)||k.push(ie);c&&k.push(...c);for(const ie of k){const ke=ie.x,Be=ie.x+ie.width,Q=ie.x+ie.width/2,ue=ie.y,$=ie.y+ie.height,se=ie.y+ie.height/2;for(const W of S)for(const K of[ke,Be,Q]){const _e=K-W;Math.abs(_e)<Xu&&Math.abs(_e)<Math.abs(u)&&(u=_e)}for(const W of j)for(const K of[ue,$,se]){const _e=K-W;Math.abs(_e)<Xu&&Math.abs(_e)<Math.abs(d)&&(d=_e)}}const T=Math.abs(u)<Xu?u:0,z=Math.abs(d)<Xu?d:0,L=[],N=new Set,Y=h+T,P=p+T,F=g+T,V=_+z,Z=x+z,ae=b+z;for(const ie of k){const ke=ie.x,Be=ie.x+ie.width,Q=ie.x+ie.width/2,ue=ie.y,$=ie.y+ie.height,se=ie.y+ie.height/2;for(const W of[ke,Q,Be])for(const K of[Y,F,P])if(Math.abs(K-W)<.5){const _e=`x:${Math.round(W)}`;N.has(_e)||(N.add(_e),L.push({axis:"x",pos:W}))}for(const W of[ue,se,$])for(const K of[V,ae,Z])if(Math.abs(K-W)<.5){const _e=`y:${Math.round(W)}`;N.has(_e)||(N.add(_e),L.push({axis:"y",pos:W}))}}return{dx:T,dy:z,guides:L}}function Hy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function W4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:j}){const[k,T]=y.useState(new Set),[z,L]=y.useState(null),[N,Y]=y.useState(null),[P,F]=y.useState(null),[V,Z]=y.useState([]),[ae,ie]=y.useState(null),[ke,Be]=y.useState(!1),Q=y.useRef(!1),[ue,$]=y.useState(new Set),se=y.useRef(new Map),W=y.useRef(null),K=y.useRef(null),_e=y.useRef(t);_e.current=t;const R=y.useRef(_);R.current=_;const oe=y.useRef(b);oe.current=b;const le=y.useRef(w);le.current=w;const de=y.useRef(x);y.useEffect(()=>{x!==de.current&&(de.current=x,T(new Set))},[x]);const Ne=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==Ne.current){Ne.current=S;const G=new Set(_e.current.map(Me=>Me.id));G.size>0&&($(G),T(new Set),K.current=null,Ut(()=>{n([]),$(new Set)},180))}},[S,n]),y.useEffect(()=>{const G=Me=>{const Je=Me.target;if(!(Je.tagName==="INPUT"||Je.tagName==="TEXTAREA"||Je.isContentEditable)){if((Me.key==="Backspace"||Me.key==="Delete")&&k.size>0){Me.preventDefault();const ct=new Set(k);$(ct),T(new Set),Ut(()=>{n(_e.current.filter(Ae=>!ct.has(Ae.id))),$(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Me.key)&&k.size>0){Me.preventDefault();const ct=Me.shiftKey?20:1,Ae=Me.key==="ArrowLeft"?-ct:Me.key==="ArrowRight"?ct:0,rt=Me.key==="ArrowUp"?-ct:Me.key==="ArrowDown"?ct:0;n(t.map(it=>k.has(it.id)?{...it,x:Math.max(0,it.x+Ae),y:Math.max(0,it.y+rt)}:it));return}if(Me.key==="Escape"){i?a(null):k.size>0&&T(new Set);return}}};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[k,i,t,n,a]);const Pe=y.useCallback(G=>{if(G.button!==0||p||G.target.closest(`.${De.placement}`))return;G.preventDefault(),G.stopPropagation();const Je=window.scrollY,Ze=G.clientX,ct=G.clientY;if(i){K.current="place",d==null||d(!0);let Ae=!1,rt=Ze,it=ct;const pt=st=>{rt=st.clientX,it=st.clientY;const H=Math.abs(rt-Ze),te=Math.abs(it-ct);if((H>5||te>5)&&(Ae=!0),Ae){const me=Math.min(Ze,rt),Se=Math.min(ct,it),Ke=Math.abs(rt-Ze),Fe=Math.abs(it-ct);L({x:me,y:Se,w:Ke,h:Fe}),F({x:st.clientX+12,y:st.clientY+12,text:`${Math.round(Ke)} × ${Math.round(Fe)}`})}},$t=st=>{window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",$t),L(null),F(null),K.current=null,d==null||d(!1);const H=vt[i];let te,me,Se,Ke;Ae?(te=Math.min(Ze,rt),me=Math.min(ct,it)+Je,Se=Math.max(al,Math.abs(rt-Ze)),Ke=Math.max(al,Math.abs(it-ct))):(Se=H.width,Ke=H.height,te=Ze-Se/2,me=ct+Je-Ke/2),te=Math.max(0,te),me=Math.max(0,me);const Fe={id:Hy(),type:i,x:te,y:me,width:Se,height:Ke,scrollY:Je,timestamp:Date.now()},Le=[...t,Fe];n(Le),T(new Set([Fe.id])),a(null)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",$t)}else{G.shiftKey||T(new Set),K.current="select";let Ae=!1;const rt=pt=>{const $t=Math.abs(pt.clientX-Ze),st=Math.abs(pt.clientY-ct);if(($t>4||st>4)&&(Ae=!0),Ae){const H=Math.min(Ze,pt.clientX),te=Math.min(ct,pt.clientY);Y({x:H,y:te,w:Math.abs(pt.clientX-Ze),h:Math.abs(pt.clientY-ct)})}},it=pt=>{if(window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",it),K.current=null,Ae){const $t=Math.min(Ze,pt.clientX),st=Math.min(ct,pt.clientY)+Je,H=Math.abs(pt.clientX-Ze),te=Math.abs(pt.clientY-ct),me=new Set(G.shiftKey?k:new Set);for(const Se of t)Se.y-Je,Se.x+Se.width>$t&&Se.x<$t+H&&Se.y+Se.height>st&&Se.y<st+te&&me.add(Se.id);T(me)}Y(null)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",it)}},[i,p,t,n,k]),Re=y.useCallback((G,Me)=>{var Fe;if(G.button!==0)return;const Je=G.target;if(Je.closest(`.${De.handle}`)||Je.closest(`.${De.deleteButton}`))return;G.preventDefault(),G.stopPropagation();let Ze;G.shiftKey?(Ze=new Set(k),Ze.has(Me)?Ze.delete(Me):Ze.add(Me)):k.has(Me)?Ze=new Set(k):Ze=new Set([Me]),T(Ze),(Ze.size!==k.size||[...Ze].some(Le=>!k.has(Le)))&&((Fe=R.current)==null||Fe.call(R,Ze,G.shiftKey));const Ae=G.clientX,rt=G.clientY,it=new Map;for(const Le of t)Ze.has(Le.id)&&it.set(Le.id,{x:Le.x,y:Le.y});K.current="move",d==null||d(!0);let pt=!1,$t=!1,st=t,H=0,te=0;const me=new Map;for(const Le of t)it.has(Le.id)&&me.set(Le.id,{w:Le.width,h:Le.height});const Se=Le=>{var an;const bt=Le.clientX-Ae,Ue=Le.clientY-rt;if((Math.abs(bt)>2||Math.abs(Ue)>2)&&(pt=!0),!pt)return;if(Le.altKey&&!$t){$t=!0;const ft=[];for(const Lt of t)it.has(Lt.id)&&ft.push({...Lt,id:Hy(),timestamp:Date.now()});st=[...t,...ft]}let Pt=1/0,Ge=1/0,We=-1/0,kt=-1/0;for(const[ft,Lt]of it){const zn=me.get(ft);zn&&(Pt=Math.min(Pt,Lt.x+bt),Ge=Math.min(Ge,Lt.y+Ue),We=Math.max(We,Lt.x+bt+zn.w),kt=Math.max(kt,Lt.y+Ue+zn.h))}const Bt={x:Pt,y:Ge,width:We-Pt,height:kt-Ge},{dx:Wt,dy:Qe,guides:Nt}=Py(Bt,st,new Set(it.keys()),void 0,g);Z(Nt);const Tt=bt+Wt,_t=Ue+Qe;H=Tt,te=_t,n(st.map(ft=>{const Lt=it.get(ft.id);return Lt?{...ft,x:Math.max(0,Lt.x+Tt),y:Math.max(0,Lt.y+_t)}:ft})),(an=oe.current)==null||an.call(oe,Tt,_t)},Ke=()=>{var Le;window.removeEventListener("mousemove",Se),window.removeEventListener("mouseup",Ke),K.current=null,d==null||d(!1),Z([]),(Le=le.current)==null||Le.call(le,H,te,pt)};window.addEventListener("mousemove",Se),window.addEventListener("mouseup",Ke)},[k,t,n,d]),tt=y.useCallback((G,Me,Je)=>{G.preventDefault(),G.stopPropagation();const Ze=t.find(me=>me.id===Me);if(!Ze)return;T(new Set([Me])),K.current="resize",d==null||d(!0);const ct=G.clientX,Ae=G.clientY,rt=Ze.width,it=Ze.height,pt=Ze.x,$t=Ze.y,st={left:Je.includes("w"),right:Je.includes("e"),top:Je.includes("n"),bottom:Je.includes("s")},H=me=>{const Se=me.clientX-ct,Ke=me.clientY-Ae;let Fe=rt,Le=it,bt=pt,Ue=$t;Je.includes("e")&&(Fe=Math.max(al,rt+Se)),Je.includes("w")&&(Fe=Math.max(al,rt-Se),bt=pt+rt-Fe),Je.includes("s")&&(Le=Math.max(al,it+Ke)),Je.includes("n")&&(Le=Math.max(al,it-Ke),Ue=$t+it-Le);const Pt={x:bt,y:Ue,width:Fe,height:Le},{dx:Ge,dy:We,guides:kt}=Py(Pt,_e.current,new Set([Me]),st,g);Z(kt),Ge!==0&&(st.right?Fe+=Ge:st.left&&(bt+=Ge,Fe-=Ge)),We!==0&&(st.bottom?Le+=We:st.top&&(Ue+=We,Le-=We)),n(_e.current.map(Bt=>Bt.id===Me?{...Bt,x:bt,y:Ue,width:Fe,height:Le}:Bt)),F({x:me.clientX+12,y:me.clientY+12,text:`${Math.round(Fe)} × ${Math.round(Le)}`})},te=()=>{window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",te),F(null),K.current=null,d==null||d(!1),Z([])};window.addEventListener("mousemove",H),window.addEventListener("mouseup",te)},[t,n,d]),dt=y.useCallback(G=>{K.current=null,$(Me=>{const Je=new Set(Me);return Je.add(G),Je}),T(Me=>{const Je=new Set(Me);return Je.delete(G),Je}),Ut(()=>{n(_e.current.filter(Me=>Me.id!==G)),$(Me=>{const Je=new Set(Me);return Je.delete(G),Je})},180)},[n]),Ot={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},ht=y.useCallback(G=>{const Me=t.find(Je=>Je.id===G);Me&&(Q.current=!!Me.text,ie(G),Be(!1))},[t]),Ie=y.useCallback(()=>{ae&&(Be(!0),Ut(()=>{ie(null),Be(!1)},150))},[ae]);y.useEffect(()=>{u&&ae&&Ie()},[u]);const Ee=y.useCallback(G=>{ae&&(n(t.map(Me=>Me.id===ae?{...Me,text:G.trim()||void 0}:Me)),Ie())},[ae,t,n,Ie]),mt=typeof window<"u"?window.scrollY:0,zt=["nw","ne","se","sw"],xt=j?"#f97316":"#3c82f7",Vt=[{dir:"n",cls:De.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:xt})})},{dir:"e",cls:De.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:xt})})},{dir:"s",cls:De.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:xt})})},{dir:"w",cls:De.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:xt})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:W,className:`${De.overlay} ${c?"":De.light} ${i?De.placing:""} ${p?De.passthrough:""} ${u?De.overlayExiting:""} ${j?De.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Pe,children:t.map(G=>{var ct;const Me=k.has(G.id),Je=((ct=Ki[G.type])==null?void 0:ct.label)||G.type,Ze=G.y-mt;return l.jsxs("div",{"data-design-placement":G.id,className:`${De.placement} ${Me?De.selected:""} ${ue.has(G.id)?De.exiting:""}`,style:{left:G.x,top:Ze,width:G.width,height:G.height,position:"fixed"},onMouseDown:Ae=>Re(Ae,G.id),onDoubleClick:()=>ht(G.id),children:[l.jsx("span",{className:De.placementLabel,children:Je}),l.jsx("span",{className:`${De.placementAnnotation} ${G.text?De.annotationVisible:""}`,children:(G.text&&se.current.set(G.id,G.text),G.text||se.current.get(G.id)||"")}),l.jsx("div",{className:De.placementContent,children:l.jsx(U4,{type:G.type,width:G.width,height:G.height,text:G.text})}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ae=>Ae.stopPropagation(),onClick:()=>dt(G.id),children:"✕"}),zt.map(Ae=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ae.charAt(0).toUpperCase()}${Ae.slice(1)}`]}`,onMouseDown:rt=>tt(rt,G.id,Ae)},Ae)),Vt.map(({dir:Ae,cls:rt,arrow:it})=>l.jsx("div",{className:`${De.edgeHandle} ${rt}`,onMouseDown:pt=>tt(pt,G.id,Ae),children:it},Ae))]},G.id)})}),ae&&(()=>{var $t,st;const G=t.find(H=>H.id===ae);if(!G)return null;const Me=G.y-mt,Je=G.x+G.width/2,Ze=Me-8,ct=Me+G.height+8,Ae=Ze>200,rt=ct<window.innerHeight-100,it=Math.max(160,Math.min(window.innerWidth-160,Je));let pt;return Ae?pt={left:it,bottom:window.innerHeight-Ze}:rt?pt={left:it,top:ct}:pt={left:it,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:(($t=Ki[G.type])==null?void 0:$t.label)||G.type,placeholder:Ot[G.type]||"Label or content text",initialValue:(st=G.text)!=null?st:"",submitLabel:Q.current?"Save":"Set",onSubmit:Ee,onCancel:Ie,onDelete:Q.current?()=>{Ee("")}:void 0,isExiting:ke,lightMode:!c,style:pt})})(),z&&l.jsx("div",{className:De.drawBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),N&&l.jsx("div",{className:De.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),P&&l.jsx("div",{className:De.sizeIndicator,style:{left:P.x,top:P.y},"data-feedback-toolbar":!0,children:P.text}),V.map((G,Me)=>l.jsx("div",{className:De.guideLine,style:G.axis==="x"?{position:"fixed",left:G.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:G.pos-mt,right:0,height:1},"data-feedback-toolbar":!0},`${G.axis}-${G.pos}-${Me}`))]})}function F4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?De.fadeTop:""} ${i?De.fadeBottom:""}`}var O="currentColor",Te="0.5";function X4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:O,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:O,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:O,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:O,strokeWidth:Te})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:O,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:O,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:O,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:O,strokeWidth:Te,fill:O,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:O,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:O,strokeWidth:Te})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:O,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:O,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:O,strokeWidth:Te})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:O,strokeWidth:Te,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:O,strokeWidth:Te,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:O,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:O,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:O,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:O,strokeWidth:Te})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:O,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:O,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:O,strokeWidth:Te})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:O,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:O,opacity:".15",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:O,strokeWidth:Te})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:O,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:O,strokeWidth:Te})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:O,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:O,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:O,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:O,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:O,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:O,strokeWidth:Te})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:O,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:O,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:O,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:O,opacity:".2",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:O,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:O,strokeWidth:Te})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:O,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:O,strokeWidth:Te,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:O,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:O,opacity:".15",stroke:O,strokeWidth:Te})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:O,opacity:".2",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:O,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:O,strokeWidth:Te,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:O,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:O,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:O,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:O,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:O,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:O,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:O,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:O,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:O,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:O,strokeWidth:Te})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:O,strokeWidth:Te,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:O,strokeWidth:Te})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:O,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:O,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:O,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:O,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:O,strokeWidth:Te})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:O,strokeWidth:Te,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:O,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:O,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:O,strokeWidth:Te})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:O,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:O,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:O,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:O,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:O,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:O,opacity:".08",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:O,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:O,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:O,strokeWidth:Te,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:O,strokeWidth:Te,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:O,strokeWidth:Te,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:O,strokeWidth:Te,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:O,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:O,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:O,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:O,strokeWidth:Te,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:O,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:O,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:O,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:O,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:O,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:O,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:O,opacity:".2"})]});default:return null}}function G4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${De.placeScroll} ${c||""}`,children:Qx.map(d=>l.jsxs("div",{className:De.paletteSection,children:[l.jsx("div",{className:De.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${De.paletteItem} ${t===h.type?De.active:""} ${u?De.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:De.paletteItemIcon,children:l.jsx(X4,{type:h.type})}),l.jsx("span",{className:De.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function q4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Ut(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:De.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${De.rollingNum} ${d==="up"?De.exitUp:De.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${De.rollingNum} ${d==="up"?De.enterUp:De.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:De.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${De.rollingNum} ${d==="up"?De.exitUp:De.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${De.rollingNum} ${d==="up"?De.enterUp:De.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function K4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[j,k]=y.useState(!1),[T,z]=y.useState("exit"),[L,N]=y.useState(!1),[Y,P]=y.useState(!0),F=y.useRef(0),V=y.useRef(""),Z=y.useRef(0),ae=y.useRef(),ie=y.useRef(null),[ke,Be]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(ae.current),cancelAnimationFrame(Z.current),Z.current=ul(()=>{Z.current=ul(()=>{z("enter")})})):(cancelAnimationFrame(Z.current),z("exit"),clearTimeout(ae.current),ae.current=Ut(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(Z.current)),[u]);const Q=h>0||a>0,ue=h+a;return ue>0&&(F.current=ue,V.current=_?ue===1?"Component":"Components":ue===1?"Change":"Changes"),y.useEffect(()=>{if(Q)L?P(!1):(P(!0),N(!0),ul(()=>{ul(()=>{P(!1)})}));else{P(!0);const $=Ut(()=>N(!1),300);return()=>clearTimeout($)}},[Q]),y.useEffect(()=>{if(!j)return;const $=ie.current;if(!$)return;const se=()=>Be(F4($));se(),$.addEventListener("scroll",se,{passive:!0});const W=new ResizeObserver(se);return W.observe($),()=>{$.removeEventListener("scroll",se),W.disconnect()}},[j]),j?l.jsxs("div",{className:`${De.palette} ${De[T]} ${i?"":De.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:$=>$.stopPropagation(),onMouseDown:$=>$.stopPropagation(),onTransitionEnd:$=>{$.target===$.currentTarget&&(u||(clearTimeout(ae.current),k(!1),z("exit"),d==null||d()))},children:[l.jsxs("div",{className:De.paletteHeader,children:[l.jsx("div",{className:De.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:De.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${De.canvasToggle} ${_?De.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:De.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:De.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${De.wireframePurposeWrap} ${_?"":De.collapsed}`,children:l.jsx("div",{className:De.wireframePurposeInner,children:l.jsx("textarea",{className:De.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:$=>w($.target.value),rows:2})})}),l.jsx(G4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:ie,fadeClass:ke,blankCanvas:_}),L&&l.jsx("div",{className:`${De.paletteFooterWrap} ${Y?De.footerHidden:""}`,children:l.jsx("div",{className:De.paletteFooterInner,children:l.jsx("div",{className:De.paletteFooterInnerContent,children:l.jsxs("div",{className:De.paletteFooter,children:[l.jsx("span",{className:De.paletteFooterCount,children:l.jsx(q4,{value:F.current,suffix:V.current})}),l.jsx("button",{className:De.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function pl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Ko(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=pl(i)}return null}function Q4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=pl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function ml(t){var a,c,u,d,h,p,g,_;const n=Q4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Ko(t,"svg");if(x){const b=pl(x);if(b instanceof HTMLElement)return{name:`graphic in ${ml(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=pl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function ac(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Gu(t){const n=pl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const j=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));j&&(w=`.${j}`)}if(x==="button"||x==="a"){const j=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(j)return`${x}${w} "${j}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function rc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Zx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Z4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),J4=new Set(["input","textarea","select"]),e6=new Set(["img","video","canvas","svg"]),t6=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function qu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;Z4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:J4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:e6.has(a)?c=["width","height","objectFit","borderRadius"]:t6.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Zx.has(h)&&(i[u]=h)}return i}var n6=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ku(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of n6){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Zx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function s6(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Zu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=pl(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var o6=new Set(["nav","header","main","section","article","footer","aside"]),Dm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Uy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},i6=new Set(["script","style","noscript","link","meta"]),a6=40;function Jx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Dr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Dr(i)} > ${n}:nth-child(${c})`}return n}function Md(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Dm[a])return Dm[a];if(Uy[n])return Uy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=ml(t);return u.charAt(0).toUpperCase()+u.slice(1)}function eb(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function tb(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function r6(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(i6.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<a6)return;const g=o6.has(d),_=c.getAttribute("role")&&Dm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Jx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(c),tagName:d,selector:Dr(c),role:c.getAttribute("role"),className:eb(c),textSnippet:tb(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function l6(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Jx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Md(t),tagName:t.tagName.toLowerCase(),selector:Dr(t),role:t.getAttribute("role"),className:eb(t),textSnippet:tb(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Vy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Yy=["nw","n","ne","e","se","s","sw","w"],Ju=24,Wy=16,ed=5;function Fy(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const F of n)i.has(F.id)||b.push(F.currentRect);a&&b.push(...a);for(const F of b){const V=F.x,Z=F.x+F.width,ae=F.x+F.width/2,ie=F.y,ke=F.y+F.height,Be=F.y+F.height/2;for(const Q of[d,h,p])for(const ue of[V,Z,ae]){const $=ue-Q;Math.abs($)<ed&&Math.abs($)<Math.abs(c)&&(c=$)}for(const Q of[g,_,x])for(const ue of[ie,ke,Be]){const $=ue-Q;Math.abs($)<ed&&Math.abs($)<Math.abs(u)&&(u=$)}}const w=Math.abs(c)<ed?c:0,S=Math.abs(u)<ed?u:0,j=[],k=new Set,T=d+w,z=h+w,L=p+w,N=g+S,Y=_+S,P=x+S;for(const F of b){const V=F.x,Z=F.x+F.width,ae=F.x+F.width/2,ie=F.y,ke=F.y+F.height,Be=F.y+F.height/2;for(const Q of[V,ae,Z])for(const ue of[T,L,z])if(Math.abs(ue-Q)<.5){const $=`x:${Math.round(Q)}`;k.has($)||(k.add($),j.push({axis:"x",pos:Q}))}for(const Q of[ie,Be,ke])for(const ue of[N,P,Y])if(Math.abs(ue-Q)<.5){const $=`y:${Math.round(Q)}`;k.has($)||(k.add($),j.push({axis:"y",pos:Q}))}}return{dx:w,dy:S,guides:j}}var c6=new Set(["script","style","noscript","link","meta","br","hr"]);function Xy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(c6.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Wy&&i.height>=Wy)return n;n=n.parentElement}return null}function u6({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,j]=y.useState(new Set),[k,T]=y.useState(!1),z=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==z.current&&(z.current=x,b.length>0&&T(!0))},[x,b.length]);const L=y.useRef(p);y.useEffect(()=>{p!==L.current&&(L.current=p,j(new Set))},[p]);const[N,Y]=y.useState(null),[P,F]=y.useState(!1),V=y.useRef(!1),Z=y.useCallback(H=>{const te=b.find(me=>me.id===H);te&&(V.current=!!te.note,Y(H),F(!1))},[b]),ae=y.useCallback(()=>{N&&(F(!0),Ut(()=>{Y(null),F(!1)},150))},[N]),ie=y.useCallback(H=>{N&&(n({...t,sections:b.map(te=>te.id===N?{...te,note:H.trim()||void 0}:te)}),ae())},[N,b,t,n,ae]);y.useEffect(()=>{a&&N&&ae()},[a]);const[ke,Be]=y.useState(new Set),Q=y.useRef(new Map),[ue,$]=y.useState(null),[se,W]=y.useState(null),[K,_e]=y.useState([]),[R,oe]=y.useState(0),le=y.useRef(null),de=y.useRef(new Set),Ne=y.useRef(new Map),[Pe,Re]=y.useState(new Map),[tt,dt]=y.useState(new Map),Ot=y.useRef(new Set),ht=y.useRef(new Map),Ie=y.useRef(h);Ie.current=h;const Ee=y.useRef(g);Ee.current=g;const mt=y.useRef(_);mt.current=_,y.useEffect(()=>{u&&j(new Set)},[u]);const[zt,xt]=y.useState(()=>!t.sections.some(H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.x-me.x)>1||Math.abs(te.y-me.y)>1||Math.abs(te.width-me.width)>1||Math.abs(te.height-me.height)>1}));y.useEffect(()=>{if(!zt){const H=Ut(()=>xt(!0),380);return()=>clearTimeout(H)}},[]);const Vt=y.useRef(new Set);y.useEffect(()=>{Vt.current=new Set(b.map(H=>H.selector))},[b]),y.useEffect(()=>{const H=()=>oe(window.scrollY);return H(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H)}},[]),y.useEffect(()=>{const H=te=>{if(le.current){$(null);return}const me=document.elementFromPoint(te.clientX,te.clientY);if(!me){$(null);return}if(me.closest("[data-feedback-toolbar]")){$(null);return}if(me.closest("[data-design-placement]")){$(null);return}if(me.closest("[data-annotation-popup]")){$(null);return}const Se=Xy(me);if(!Se){$(null);return}for(const Fe of Vt.current)try{const Le=document.querySelector(Fe);if(Le&&(Le===Se||Se.contains(Le))){$(null);return}}catch{}const Ke=Se.getBoundingClientRect();$({x:Ke.x,y:Ke.y,w:Ke.width,h:Ke.height})};return document.addEventListener("mousemove",H,{passive:!0}),()=>document.removeEventListener("mousemove",H)},[b]),y.useEffect(()=>{const H=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=H}},[]),y.useEffect(()=>{const H=te=>{var Le,bt,Ue,Pt;if(le.current||te.button!==0)return;const me=te.target;if(!me||me.closest("[data-feedback-toolbar]")||me.closest("[data-design-placement]")||me.closest("[data-annotation-popup]"))return;const Se=Xy(me);let Ke=!1;if(Se)for(const Ge of Vt.current)try{const We=document.querySelector(Ge);if(We&&(We===Se||Se.contains(We))){Ke=!0;break}}catch{}const Fe=!!(te.shiftKey||te.metaKey||te.ctrlKey);if(Se&&!Ke){te.preventDefault(),te.stopPropagation();const Ge=l6(Se),We=[...b,Ge],kt=[...t.originalOrder,Ge.id];n({...t,sections:We,originalOrder:kt});const Bt=new Set([Ge.id]);j(Bt),(Le=Ie.current)==null||Le.call(Ie,Bt,Fe),$(null);const Wt=te.clientX,Qe=te.clientY,Nt={x:Ge.currentRect.x,y:Ge.currentRect.y};Ge.originalRect;let Tt=!1,_t=0,an=0;le.current="move";const ft=zn=>{var rn;const Rn=zn.clientX-Wt,kn=zn.clientY-Qe;if(!Tt&&(Math.abs(Rn)>2||Math.abs(kn)>2)&&(Tt=!0),!Tt)return;const cs={x:Nt.x+Rn,y:Nt.y+kn,width:Ge.currentRect.width,height:Ge.currentRect.height},Xn=Fy(cs,We,new Set([Ge.id]),d);_e(Xn.guides);const jn=Rn+Xn.dx,Mn=kn+Xn.dy;_t=jn,an=Mn;const $n=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);$n&&($n.style.transform=`translate(${jn}px, ${Mn}px)`),Re(new Map([[Ge.id,{x:Nt.x+jn,y:Nt.y+Mn,width:Ge.currentRect.width,height:Ge.currentRect.height}]])),(rn=Ee.current)==null||rn.call(Ee,jn,Mn)},Lt=()=>{var Rn;window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Lt),le.current=null,_e([]),Re(new Map);const zn=document.querySelector(`[data-rearrange-section="${Ge.id}"]`);zn&&(zn.style.transform=""),Tt&&n({...t,sections:We.map(kn=>kn.id===Ge.id?{...kn,currentRect:{...kn.currentRect,x:Math.max(0,Nt.x+_t),y:Math.max(0,Nt.y+an)}}:kn),originalOrder:kt}),(Rn=mt.current)==null||Rn.call(mt,_t,an,Tt)};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",Lt)}else if(Ke&&Se){te.preventDefault();for(const Ge of b)try{const We=document.querySelector(Ge.selector);if(We&&We===Se){const kt=new Set([Ge.id]);j(kt),(bt=Ie.current)==null||bt.call(Ie,kt,Fe);return}}catch{}Fe||(j(new Set),(Ue=Ie.current)==null||Ue.call(Ie,new Set,!1))}else Fe||(j(new Set),(Pt=Ie.current)==null||Pt.call(Ie,new Set,!1))};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[b,t,n]),y.useEffect(()=>{const H=te=>{const me=te.target;if(!(me.tagName==="INPUT"||me.tagName==="TEXTAREA"||me.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&S.size>0){te.preventDefault();const Se=new Set(S);Be(Ke=>{const Fe=new Set(Ke);for(const Le of Se)Fe.add(Le);return Fe}),j(new Set),Ut(()=>{const Ke=w.current;n({...Ke,sections:Ke.sections.filter(Fe=>!Se.has(Fe.id)),originalOrder:Ke.originalOrder.filter(Fe=>!Se.has(Fe))}),Be(Fe=>{const Le=new Set(Fe);for(const bt of Se)Le.delete(bt);return Le})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&S.size>0){te.preventDefault();const Se=te.shiftKey?20:1,Ke=te.key==="ArrowLeft"?-Se:te.key==="ArrowRight"?Se:0,Fe=te.key==="ArrowUp"?-Se:te.key==="ArrowDown"?Se:0;n({...t,sections:b.map(Le=>S.has(Le.id)?{...Le,currentRect:{...Le.currentRect,x:Math.max(0,Le.currentRect.x+Ke),y:Math.max(0,Le.currentRect.y+Fe)}}:Le)});return}te.key==="Escape"&&S.size>0&&j(new Set)}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[S,b,t,n]);const G=y.useCallback((H,te)=>{var Wt;if(H.button!==0)return;const me=H.target;if(me.closest(`.${De.handle}`)||me.closest(`.${De.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let Se;H.shiftKey||H.metaKey||H.ctrlKey?(Se=new Set(S),Se.has(te)?Se.delete(te):Se.add(te)):S.has(te)?Se=new Set(S):Se=new Set([te]),j(Se),(Se.size!==S.size||[...Se].some(Qe=>!S.has(Qe)))&&((Wt=Ie.current)==null||Wt.call(Ie,Se,!!(H.shiftKey||H.metaKey||H.ctrlKey)));const Fe=H.clientX,Le=H.clientY,bt=new Map;for(const Qe of b)Se.has(Qe.id)&&bt.set(Qe.id,{x:Qe.currentRect.x,y:Qe.currentRect.y});le.current="move";let Ue=!1,Pt=0,Ge=0;const We=new Map;for(const Qe of b)if(Se.has(Qe.id)){const Nt=document.querySelector(`[data-rearrange-section="${Qe.id}"]`);We.set(Qe.id,{outlineEl:Nt,curW:Qe.currentRect.width,curH:Qe.currentRect.height})}const kt=Qe=>{var Xn;const Nt=Qe.clientX-Fe,Tt=Qe.clientY-Le;if(Nt===0&&Tt===0)return;Ue=!0;let _t=1/0,an=1/0,ft=-1/0,Lt=-1/0;for(const[jn,{curW:Mn,curH:$n}]of We){const rn=bt.get(jn);if(!rn)continue;const Tn=rn.x+Nt,nt=rn.y+Tt;_t=Math.min(_t,Tn),an=Math.min(an,nt),ft=Math.max(ft,Tn+Mn),Lt=Math.max(Lt,nt+$n)}const zn=Fy({x:_t,y:an,width:ft-_t,height:Lt-an},b,Se,d),Rn=Nt+zn.dx,kn=Tt+zn.dy;Pt=Rn,Ge=kn,_e(zn.guides);for(const[,{outlineEl:jn}]of We)jn&&(jn.style.transform=`translate(${Rn}px, ${kn}px)`);const cs=new Map;for(const[jn,{curW:Mn,curH:$n}]of We){const rn=bt.get(jn);if(rn){const Tn={x:Math.max(0,rn.x+Rn),y:Math.max(0,rn.y+kn),width:Mn,height:$n};cs.set(jn,Tn)}}Re(cs),(Xn=Ee.current)==null||Xn.call(Ee,Rn,kn)},Bt=Qe=>{var Nt,Tt;window.removeEventListener("mousemove",kt),window.removeEventListener("mouseup",Bt),le.current=null,_e([]),Re(new Map);for(const[,{outlineEl:_t}]of We)_t&&(_t.style.transform="");if(Ue){const _t=Qe.clientX-Fe,an=Qe.clientY-Le;if(Math.abs(_t)<5&&Math.abs(an)<5)n({...t,sections:b.map(ft=>{const Lt=bt.get(ft.id);return Lt?{...ft,currentRect:{...ft.currentRect,x:Lt.x,y:Lt.y}}:ft})});else{n({...t,sections:b.map(ft=>{const Lt=bt.get(ft.id);return Lt?{...ft,currentRect:{...ft.currentRect,x:Math.max(0,Lt.x+Pt),y:Math.max(0,Lt.y+Ge)}}:ft})}),(Nt=mt.current)==null||Nt.call(mt,Pt,Ge,!0);return}}(Tt=mt.current)==null||Tt.call(mt,0,0,!1)};window.addEventListener("mousemove",kt),window.addEventListener("mouseup",Bt)},[S,b,t,n]),Me=y.useCallback((H,te,me)=>{H.preventDefault(),H.stopPropagation();const Se=b.find(kt=>kt.id===te);if(!Se)return;j(new Set([te])),le.current="resize";const Ke=H.clientX,Fe=H.clientY,Le={...Se.currentRect};Se.originalRect;const bt=Le.width/Le.height;let Ue={...Le};const Pt=document.querySelector(`[data-rearrange-section="${te}"]`),Ge=kt=>{const Bt=kt.clientX-Ke,Wt=kt.clientY-Fe;let Qe=Le.x,Nt=Le.y,Tt=Le.width,_t=Le.height;if(me.includes("e")&&(Tt=Math.max(Ju,Le.width+Bt)),me.includes("w")&&(Tt=Math.max(Ju,Le.width-Bt),Qe=Le.x+Le.width-Tt),me.includes("s")&&(_t=Math.max(Ju,Le.height+Wt)),me.includes("n")&&(_t=Math.max(Ju,Le.height-Wt),Nt=Le.y+Le.height-_t),kt.shiftKey)if(me.length===2){const ft=Math.abs(Tt-Le.width),Lt=Math.abs(_t-Le.height);ft>Lt?_t=Tt/bt:Tt=_t*bt,me.includes("w")&&(Qe=Le.x+Le.width-Tt),me.includes("n")&&(Nt=Le.y+Le.height-_t)}else me==="e"||me==="w"?_t=Tt/bt:Tt=_t*bt,me==="w"&&(Qe=Le.x+Le.width-Tt),me==="n"&&(Nt=Le.y+Le.height-_t);Ue={x:Qe,y:Nt,width:Tt,height:_t},Pt&&(Pt.style.left=`${Qe}px`,Pt.style.top=`${Nt-R}px`,Pt.style.width=`${Tt}px`,Pt.style.height=`${_t}px`),W({x:kt.clientX+12,y:kt.clientY+12,text:`${Math.round(Tt)} × ${Math.round(_t)}`}),Re(new Map([[te,Ue]]))},We=()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",We),W(null),le.current=null,Re(new Map),n({...t,sections:b.map(kt=>kt.id===te?{...kt,currentRect:Ue}:kt)})};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",We)},[b,t,n,R]),Je=y.useCallback(H=>{Be(te=>{const me=new Set(te);return me.add(H),me}),j(te=>{const me=new Set(te);return me.delete(H),me}),Ut(()=>{const te=w.current;n({...te,sections:te.sections.filter(me=>me.id!==H),originalOrder:te.originalOrder.filter(me=>me!==H)}),Be(me=>{const Se=new Set(me);return Se.delete(H),Se})},180)},[n]),Ze=H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.x-me.x)>1||Math.abs(te.y-me.y)>1||Math.abs(te.width-me.width)>1||Math.abs(te.height-me.height)>1},ct=H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.x-me.x)>1||Math.abs(te.y-me.y)>1},Ae=H=>{const te=H.originalRect,me=H.currentRect;return Math.abs(te.width-me.width)>1||Math.abs(te.height-me.height)>1};for(const H of b)Ne.current.has(H.id)||(ct(H)?Ne.current.set(H.id,"move"):Ae(H)&&Ne.current.set(H.id,"resize"));for(const H of Ne.current.keys())b.some(te=>te.id===H)||Ne.current.delete(H);const rt=b.filter(H=>{try{if(ke.has(H.id)||S.has(H.id))return!0;const te=document.querySelector(H.selector);if(!te)return!1;const me=te.getBoundingClientRect(),Se=H.originalRect;return Math.abs(me.width-Se.width)+Math.abs(me.height-Se.height)<200}catch{return!1}}),it=rt.filter(H=>Ze(H)),pt=rt.filter(H=>!Ze(H)),$t=new Set(it.map(H=>H.id));for(const H of de.current)$t.has(H)||de.current.delete(H);const st=[...$t].sort().join(",");for(const H of it)ht.current.set(H.id,{currentRect:H.currentRect,originalRect:H.originalRect,isFixed:H.isFixed});return y.useEffect(()=>{const H=Ot.current;Ot.current=$t;const te=new Map;for(const me of H)if(!$t.has(me)){if(!b.some(Ke=>Ke.id===me))continue;const Se=ht.current.get(me);Se&&(te.set(me,{orig:Se.originalRect,target:Se.currentRect,isFixed:Se.isFixed}),ht.current.delete(me))}if(te.size>0){dt(Se=>{const Ke=new Map(Se);for(const[Fe,Le]of te)Ke.set(Fe,Le);return Ke});const me=Ut(()=>{dt(Se=>{const Ke=new Map(Se);for(const Fe of te.keys())Ke.delete(Fe);return Ke})},250);return()=>clearTimeout(me)}},[st,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${De.rearrangeOverlay} ${i?"":De.light} ${a?De.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ue&&l.jsx("div",{className:De.hoverHighlight,style:{left:ue.x,top:ue.y,width:ue.w,height:ue.h}}),pt.map(H=>{const te=H.currentRect,me=H.isFixed?te.y:te.y-R,Se=Vy,Ke=S.has(H.id);return l.jsxs("div",{"data-rearrange-section":H.id,className:`${De.sectionOutline} ${Ke?De.selected:""} ${k||a||ke.has(H.id)?De.exiting:""}`,style:{left:te.x,top:me,width:te.width,height:te.height,borderColor:Se.border,backgroundColor:Se.bg,...zt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Fe=>G(Fe,H.id),onDoubleClick:()=>Z(H.id),children:[l.jsx("span",{className:De.sectionLabel,style:{backgroundColor:Se.pill},children:H.label}),l.jsx("span",{className:`${De.sectionAnnotation} ${H.note?De.annotationVisible:""}`,children:(H.note&&Q.current.set(H.id,H.note),H.note||Q.current.get(H.id)||"")}),l.jsxs("span",{className:De.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:De.deleteButton,onMouseDown:Fe=>Fe.stopPropagation(),onClick:()=>Je(H.id),children:"✕"}),Yy.map(Fe=>l.jsx("div",{className:`${De.handle} ${De[`handle${Fe.charAt(0).toUpperCase()}${Fe.slice(1)}`]}`,onMouseDown:Le=>Me(Le,H.id,Fe)},Fe))]},H.id)}),it.map(H=>{const te=H.currentRect,me=H.isFixed?te.y:te.y-R,Se=S.has(H.id),Ke=ct(H),Fe=Ae(H);if(u&&!Se)return null;const bt=!de.current.has(H.id);return bt&&de.current.add(H.id),l.jsxs("div",{"data-rearrange-section":H.id,className:`${De.ghostOutline} ${Se?De.selected:""} ${k||a||ke.has(H.id)?De.exiting:""}`,style:{left:te.x,top:me,width:te.width,height:te.height,...zt?{}:{opacity:0,animation:"none",transition:"none"},...bt?{}:{animation:"none"}},onMouseDown:Ue=>G(Ue,H.id),onDoubleClick:()=>Z(H.id),children:[l.jsx("span",{className:De.sectionLabel,style:{backgroundColor:Vy.pill},children:H.label}),l.jsx("span",{className:`${De.sectionAnnotation} ${H.note?De.annotationVisible:""}`,children:(H.note&&Q.current.set(H.id,H.note),H.note||Q.current.get(H.id)||"")}),l.jsxs("span",{className:De.sectionDimensions,children:[Math.round(te.width)," × ",Math.round(te.height)]}),l.jsx("div",{className:De.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>Je(H.id),children:"✕"}),Yy.map(Ue=>l.jsx("div",{className:`${De.handle} ${De[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:Pt=>Me(Pt,H.id,Ue)},Ue)),l.jsx("span",{className:De.ghostBadge,children:(()=>{const Ue=Ne.current.get(H.id);if(Ke&&Fe){const[Pt,Ge]=Ue==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",Pt," ",l.jsxs("span",{className:De.ghostBadgeExtra,children:["& ",Ge]})]})}return`Suggested ${Fe?"Resize":"Move"}`})()})]},H.id)})]}),!u&&(()=>{const H=[];for(const te of it){const me=Pe.get(te.id);H.push({id:te.id,orig:te.originalRect,target:me||te.currentRect,isFixed:te.isFixed,isSelected:S.has(te.id),isExiting:ke.has(te.id)})}for(const[te,me]of Pe)if(!H.some(Se=>Se.id===te)){const Se=b.find(Ke=>Ke.id===te);Se&&H.push({id:te,orig:Se.originalRect,target:me,isFixed:Se.isFixed,isSelected:S.has(te)})}for(const[te,me]of tt)H.some(Se=>Se.id===te)||H.push({id:te,orig:me.orig,target:me.target,isFixed:me.isFixed,isSelected:!1,isExiting:!0});return H.length===0?null:l.jsxs("svg",{className:`${De.connectorSvg} ${k||a?De.connectorExiting:""}`,children:[H.map(({id:te,orig:me,target:Se,isFixed:Ke,isSelected:Fe,isExiting:Le})=>{const bt=me.x+me.width/2,Ue=(Ke?me.y:me.y-R)+me.height/2,Pt=Se.x+Se.width/2,Ge=(Ke?Se.y:Se.y-R)+Se.height/2,We=Pt-bt,kt=Ge-Ue,Bt=Math.sqrt(We*We+kt*kt);if(Bt<2)return null;const Wt=Math.min(1,Bt/40),Qe=Math.min(Bt*.3,60),Nt=Bt>0?-kt/Bt:0,Tt=Bt>0?We/Bt:0,_t=(bt+Pt)/2+Nt*Qe,an=(Ue+Ge)/2+Tt*Qe,ft=Pe.has(te),Lt=ft||Fe?1:.4,zn=ft||Fe?1:.5;return l.jsxs("g",{className:Le?De.connectorExiting:"",children:[l.jsx("path",{className:De.connectorLine,d:`M ${bt} ${Ue} Q ${_t} ${an} ${Pt} ${Ge}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Lt*Wt}),l.jsx("circle",{className:De.connectorDot,cx:bt,cy:Ue,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:zn*Wt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:De.connectorDot,cx:Pt,cy:Ge,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:zn*Wt,filter:"url(#connDotShadow)"})]},`conn-${te}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{var Ge;const H=b.find(We=>We.id===N);if(!H)return null;const te=H.currentRect,me=H.isFixed?te.y:te.y-R,Se=te.x+te.width/2,Ke=me-8,Fe=me+te.height+8,Le=Ke>200,bt=Fe<window.innerHeight-100,Ue=Math.max(160,Math.min(window.innerWidth-160,Se));let Pt;return Le?Pt={left:Ue,bottom:window.innerHeight-Ke}:bt?Pt={left:Ue,top:Fe}:Pt={left:Ue,top:Math.max(80,window.innerHeight/2-80)},l.jsx(jd,{element:H.label,placeholder:"Add a note about this section",initialValue:(Ge=H.note)!=null?Ge:"",submitLabel:V.current?"Save":"Set",onSubmit:ie,onCancel:ae,onDelete:V.current?()=>{ie("")}:void 0,isExiting:P,lightMode:!i,style:Pt})})(),se&&l.jsx("div",{className:De.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),K.map((H,te)=>l.jsx("div",{className:De.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:H.pos-R,width:"100vw",height:1}},`${H.axis}-${H.pos}-${te}`))]})}var Nm=new Set(["script","style","noscript","link","meta","br","hr"]);function d6(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Nm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Md(c),selector:Dr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Nm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:Md(h),selector:Dr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function f6(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function h6(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Rm(t,n){const i=n?f6(n):d6(),a=h6(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const j=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(j&&S.bottom<=a.top+5){const T=Math.round(a.top-S.bottom);(!c||T<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}if(j&&S.top>=a.bottom-5){const T=Math.round(S.top-a.bottom);(!u||T<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}if(k&&S.right<=a.left+5){const T=Math.round(a.left-S.right);(!d||T<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}if(k&&S.left>=a.right-5){const T=Math.round(S.left-a.right);(!h||T<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,T),_dist:T})}}const g=window.innerWidth,_=window.innerHeight,x=p6(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=m6(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function m6(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function p6(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function nb(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function sb(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=nb(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function _6(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(nb(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Gy=15;function qy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Gy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Gy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function g6(t){var d;if(t.length<2)return[];const n=qy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=qy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",j=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${j}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function ob(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Nm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Dr(h)}}}return{viewport:t,contentArea:null}}function y6(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Dr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function ib(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function ab(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function x6(t){const n=y6(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Ky(t,n,i,a="standard"){var k,T,z,L;if(t.length===0)return"";const c=[...t].sort((N,Y)=>Math.abs(N.y-Y.y)<20?N.x-Y.x:N.y-Y.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((N,Y)=>{var F;const P=((F=Ki[N.type])==null?void 0:F.label)||N.type;u+=`${Y+1}. **${P}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}),u;const d=ob(n);u+=ab(d),u+=`### Components
`,c.forEach((N,Y)=>{var ke;const P=((ke=Ki[N.type])==null?void 0:ke.label)||N.type,F={x:N.x,y:N.y,width:N.width,height:N.height};u+=`${Y+1}. **${P}** — \`${Math.round(N.width)}×${Math.round(N.height)}px\` at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`;const V=Rm(F),ae=sb(V,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Be of ae)u+=`   - ${Be}
`;const ie=ib(F,d);ie&&(u+=`   - CSS: ${ie}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const N of c){const Y=h.find(P=>Math.abs(P.y-N.y)<30);Y?Y.items.push(N):h.push({y:N.y,items:[N]})}if(h.sort((N,Y)=>N.y-Y.y),h.forEach((N,Y)=>{N.items.sort((F,V)=>F.x-V.x);const P=N.items.map(F=>{var V;return((V=Ki[F.type])==null?void 0:V.label)||F.type});if(N.items.length===1){const V=N.items[0].width>n.width*.8;u+=`- Row ${Y+1} (y≈${Math.round(N.y)}): ${P[0]}${V?" — full width":""}
`}else u+=`- Row ${Y+1} (y≈${Math.round(N.y)}): ${P.join(" | ")} — ${N.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let N=0;N<c.length-1;N++){const Y=c[N],P=c[N+1],F=((k=Ki[Y.type])==null?void 0:k.label)||Y.type,V=((T=Ki[P.type])==null?void 0:T.label)||P.type,Z=Math.round(P.y-(Y.y+Y.height)),ae=Math.round(P.x-(Y.x+Y.width));Math.abs(Y.y-P.y)<30?u+=`- ${F} → ${V}: \`${ae}px\` horizontal gap
`:u+=`- ${F} → ${V}: \`${Z}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let N=0;N<c.length;N++)for(let Y=N+1;Y<c.length;Y++){const P=c[N],F=c[Y],V=((z=Ki[P.type])==null?void 0:z.label)||P.type,Z=((L=Ki[F.type])==null?void 0:L.label)||F.type,ae=Math.round(F.y-(P.y+P.height)),ie=Math.round(F.x-(P.x+P.width));u+=`- ${V} ↔ ${Z}: h=\`${ie}px\` v=\`${ae}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((N,Y)=>{var F;const P=((F=Ki[N.type])==null?void 0:F.label)||N.type;u+=`${Y}. ${P} at \`(${Math.round(N.x)}, ${Math.round(N.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(N=>N.type==="navigation"),g=c.some(N=>N.type==="hero"),_=c.some(N=>N.type==="sidebar"),x=c.some(N=>N.type==="footer"),b=c.filter(N=>N.type==="card"),w=c.filter(N=>N.type==="form"),S=c.filter(N=>N.type==="table"),j=c.filter(N=>N.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),g&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const N=c.find(Y=>Y.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(N.width)}px 1fr;\`
`}if(b.length>1){const N=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${N}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Qy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=ob({width:d,height:h});n!=="compact"&&(u+=ab(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Rm(w,g("original")),T=Rm(S,g("current")),z=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${_6(k,{x:w.x,y:w.y},z)}
`;const L=b?{width:S.width,height:S.height}:void 0,N=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,Y=L?`, ${Math.round(L.width)}×${Math.round(L.height)}px`:"",F=sb(T,{includeLeftRight:n==="detailed"||n==="forensic"});if(F.length>0){u+=`  - Suggested position ${N}${Y}: ${F[0]}
`;for(let Z=1;Z<F.length;Z++)u+=`    ${F[Z]}
`}else u+=`  - Suggested position ${N}${Y}
`;const V=ib(S,p);V&&(u+=`  - CSS: ${V}
`)}const j=x6(_.selector);if(j&&(u+=`  - ${j}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=g6(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Bm="feedback-annotations-",rb=7;function Td(t){return`${Bm}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Td(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-rb*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function lb(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Td(t),JSON.stringify(n))}catch{}}function b6(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-rb*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Bm)){const c=a.slice(Bm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function lc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));lb(t,a)}var dp="agentation-design-";function v6(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${dp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function w6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${dp}${t}`,JSON.stringify(n))}catch{}}function S6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${dp}${t}`)}catch{}}var fp="agentation-rearrange-";function C6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${fp}${t}`);return n?JSON.parse(n):null}catch{return null}}function k6(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${fp}${t}`,JSON.stringify(n))}catch{}}function j6(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${fp}${t}`)}catch{}}var hp="agentation-wireframe-";function M6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Zy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function td(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var cb="agentation-session-";function mp(t){return`${cb}${t}`}function T6(t){if(typeof window>"u")return null;try{return localStorage.getItem(mp(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(mp(t),n)}catch{}}function E6(t){if(!(typeof window>"u"))try{localStorage.removeItem(mp(t))}catch{}}var ub=`${cb}toolbar-hidden`;function A6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ub)==="1"}catch{return!1}}function D6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(ub,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Jy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function rl(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function e1(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Ka(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var On={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},t1=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),n1=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],N6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function R6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=t1;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...t1,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...n1,...t.skipPatterns]:n1,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:N6,filter:t==null?void 0:t.filter}}function B6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function L6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function O6(t,n){const i=B6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function z6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&O6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var ll=null,$6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function I6(){if(ll!==null)return ll;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return ll=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return ll=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return ll=!0,!0}return ll=!1,!1}var cc={map:$6};function P6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function H6(t){const n=P6(t);return n?t[n]:null}function xr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function U6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===On.HostComponent||n===On.HostText||n===On.HostHoistable||n===On.HostSingleton||n===On.Fragment||n===On.Mode||n===On.Profiler||n===On.DehydratedFragment||n===On.HostRoot||n===On.HostPortal||n===On.ScopeComponent||n===On.OffscreenComponent||n===On.LegacyHiddenComponent||n===On.CacheComponent||n===On.TracingMarkerComponent||n===On.Throw||n===On.ViewTransitionComponent||n===On.ActivityComponent)return null;if(n===On.ForwardRef){const u=a;if(u!=null&&u.render){const d=xr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===On.MemoComponent||n===On.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=xr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:xr(i)}if(n===On.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===On.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===On.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?xr(u._result):null}return n===On.SuspenseComponent||n===On.SuspenseListComponent?null:n===On.IncompleteClassComponent||n===On.IncompleteFunctionComponent||n===On.FunctionComponent||n===On.ClassComponent||n===On.IndeterminateComponent?xr(i):null}function V6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function Y6(t,n){const i=R6(n),a=i.mode==="all";if(a){const p=cc.map.get(t);if(p!==void 0)return p}if(!I6()){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const c=i.mode==="smart"?L6(t):void 0,u=[];try{let p=H6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=U6(p);_&&!V6(_)&&z6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&cc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&cc.map.set(t,h),h}var uc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function W6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function Mc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function F6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:Mc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:Mc(i._debugOwner)};i=i.return,a++}return null}function X6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:Mc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:Mc(n)}}}n=n.return,i++}return null}var nd=new Map;function G6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===uc.FunctionComponent||n===uc.IndeterminateComponent)&&typeof i=="function")return i;if(n===uc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===uc.MemoComponent||n===uc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function q6(){const t=Iv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function K6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function Q6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Z6(t){const n=G6(t);if(!n)return null;if(nd.has(n))return nd.get(n);const i=q6();if(!i)return nd.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=K6(d.stack);h&&(c={fileName:Q6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:Mc(t)||void 0})}}}finally{i.set(a)}return nd.set(n,c),c}function J6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=Z6(i);if(c)return c;i=i.return,a++}return null}function Lm(t){const n=W6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=F6(n);if(i||(i=X6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=J6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function eC(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function tC(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Lm(i);if(c.found)return c;i=i.parentElement,a++}return Lm(t)}var nC=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,sC={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=nC}var Ye=sC,dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function s1(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var oC=`@keyframes styles-module__markerIn___x4G8D {
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
}`,iC={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=oC}var qs=iC;function o1({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:j,onContextMenu:k}){const T=(h||p)&&!g,z=T&&x==="delete",L=t.isMultiSelect,N=L?"var(--agentation-color-green)":"var(--agentation-color-accent)",Y=c?qs.exit:u?qs.clearing:d?"":qs.enter,P=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${qs.marker} ${L?qs.multiSelect:""} ${Y} ${z?qs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:z?void 0:N,animationDelay:P},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:F=>{F.stopPropagation(),c||j(t)},onContextMenu:k?F=>{x==="delete"&&(F.preventDefault(),F.stopPropagation(),c||k(t))}:void 0,children:[T?z?l.jsx(qx,{size:L?18:16}):l.jsx(yS,{size:16}):l.jsx("span",{className:_!==null&&n>=_?qs.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${qs.markerTooltip} ${qs.enter}`,style:b,children:[l.jsxs("span",{className:qs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:qs.markerNote,children:t.comment})]})]})}function aC({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${qs.marker} ${qs.pending} ${i?qs.multiSelect:""} ${a?qs.exit:qs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(aS,{size:12})})}function i1({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${qs.marker} ${n?qs.fixed:""} ${qs.hovered} ${i?qs.multiSelect:""} ${qs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(qx,{size:i?12:10})})}var rC=`.styles-module__switchContainer___Ka-AB {
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
}`,lC={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=rC}var sm=lC,om=({className:t="",...n})=>l.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[l.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:sm.switchThumb})]}),cC=`.styles-module__checkboxContainer___joqZk {
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
}`,uC={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=cC}var sd=uC,dC=({className:t="",...n})=>l.jsxs("div",{className:`${sd.checkboxContainer} ${t}`,children:[l.jsx("input",{className:sd.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:sd.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:sd.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),fC=`.styles-module__container___w8eAF {
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
}`,hC={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=fC}var a1=hC,r1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${a1.container} ${t}`,...u,children:[l.jsx(dC,{id:d,onChange:c,checked:a}),l.jsx("label",{className:a1.label,htmlFor:d,children:n}),i&&l.jsx(jr,{content:i})]})},mC=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,pC={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=mC}var St=pC;function _C({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${St.settingsPanel} ${h?St.enter:St.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:St.settingsPanelContainer,children:[l.jsxs("div",{className:`${St.settingsPage} ${g==="automations"?St.slideLeft:""}`,children:[l.jsxs("div",{className:St.settingsHeader,children:[l.jsx("a",{className:St.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:St.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:St.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:St.themeIconWrapper,children:l.jsx("span",{className:St.themeIcon,children:i?l.jsx(_S,{size:20}):l.jsx(gS,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsxs("div",{className:St.settingsRow,children:[l.jsxs("div",{className:St.settingsLabel,children:["Output Detail",l.jsx(jr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:St.cycleButton,onClick:()=>{const S=(dc.findIndex(j=>j.value===t.outputDetail)+1)%dc.length;n({outputDetail:dc[S].value})},children:[l.jsx("span",{className:St.cycleButtonText,children:(b=dc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:St.cycleDots,children:dc.map(w=>l.jsx("span",{className:`${St.cycleDot} ${t.outputDetail===w.value?St.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop} ${c?"":St.settingsRowDisabled}`,children:[l.jsxs("div",{className:St.settingsLabel,children:["React Components",l.jsx(jr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop}`,children:[l.jsxs("div",{className:St.settingsLabel,children:["Hide Until Restart",l.jsx(jr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsx("div",{className:`${St.settingsLabel} ${St.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:St.colorOptions,children:bc.map(w=>l.jsx("button",{className:`${St.colorOption} ${t.annotationColorId===w.id?St.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsx(r1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(r1,{className:St.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:St.divider}),l.jsxs("button",{className:St.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:St.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${St.mcpNavIndicator} ${St[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${St.settingsPage} ${St.automationsPage} ${g==="automations"?St.slideIn:""}`,children:[l.jsxs("button",{className:St.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(bS,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:St.settingsSection,children:[l.jsxs("div",{className:St.settingsRow,children:[l.jsxs("span",{className:St.automationHeader,children:["MCP Connection",l.jsx(jr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${St.mcpStatusDot} ${St[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:St.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:St.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:St.divider}),l.jsxs("div",{className:`${St.settingsSection} ${St.settingsSectionGrow}`,children:[l.jsxs("div",{className:St.settingsRow,children:[l.jsxs("span",{className:St.automationHeader,children:["Webhooks",l.jsx(jr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:St.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${St.autoSendLabel} ${t.webhooksEnabled?St.active:""} ${t.webhookUrl?"":St.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:St.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:St.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=ml(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=Y6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var l1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ia=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},bc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],gC=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...bc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${bc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${bc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};gC();function br(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function vr(t){return t.status!=="resolved"&&t.status!=="dismissed"}function od(t){const n=Lm(t),i=n.found?n:tC(t);if(i.found&&i.source)return eC(i.source,"path")}function yC({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Fs,fo,_i,Go,ko,jo,be;const[j,k]=y.useState(!1),[T,z]=y.useState([]),[L,N]=y.useState(!0),[Y,P]=y.useState(()=>A6()),[F,V]=y.useState(!1),Z=y.useRef(null);y.useEffect(()=>{const C=D=>{const B=Z.current;B&&B.contains(D.target)&&D.stopPropagation()},M=["mousedown","click","pointerdown"];return M.forEach(D=>document.body.addEventListener(D,C)),()=>{M.forEach(D=>document.body.removeEventListener(D,C))}},[]);const[ae,ie]=y.useState(!1),[ke,Be]=y.useState(!1),[Q,ue]=y.useState(null),[$,se]=y.useState({x:0,y:0}),[W,K]=y.useState(null),[_e,R]=y.useState(!1),[oe,le]=y.useState("idle"),[de,Ne]=y.useState(!1),[Pe,Re]=y.useState(!1),[tt,dt]=y.useState(null),[Ot,ht]=y.useState(null),[Ie,Ee]=y.useState([]),[mt,zt]=y.useState(null),[xt,Vt]=y.useState(null),[G,Me]=y.useState(null),[Je,Ze]=y.useState(null),[ct,Ae]=y.useState([]),[rt,it]=y.useState(0),[pt,$t]=y.useState(!1),[st,H]=y.useState(!1),[te,me]=y.useState(!1),[Se,Ke]=y.useState(!1),[Fe,Le]=y.useState(!1),[bt,Ue]=y.useState("main"),[Pt,Ge]=y.useState(!1),[We,kt]=y.useState(!1),[Bt,Wt]=y.useState(!1),[Qe,Nt]=y.useState([]),[Tt,_t]=y.useState(null),an=y.useRef(!1),[ft,Lt]=y.useState(!1),[zn,Rn]=y.useState(!1),[kn,cs]=y.useState(1),[Xn,jn]=y.useState("new-page"),[Mn,$n]=y.useState(""),[rn,Tn]=y.useState(!1),[nt,ln]=y.useState(null),oo=y.useRef(!1),No=y.useRef({rearrange:null,placements:[]}),us=y.useRef({rearrange:null,placements:[]}),[As,ti]=y.useState(0),[ks,_o]=y.useState(0),[io,go]=y.useState(0),[vn,ni]=y.useState(0),Hs=y.useRef(new Set),Ns=y.useRef(new Set),ds=y.useRef(null),Ho=y.useRef(),yo=We&&j&&!Bt&&ft;y.useEffect(()=>{if(yo){Rn(!1);const C=ul(()=>{Rn(!0)});return()=>cancelAnimationFrame(C)}else Rn(!1)},[yo]);const Rs=y.useRef(new Map),Us=y.useRef(new Map),En=y.useRef(),[is,wn]=y.useState(!1),[Jt,Ro]=y.useState([]),fs=y.useRef(Jt);fs.current=Jt;const[hi,mi]=y.useState(null),Bo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[si,ys]=y.useState(!1),So=y.useRef(null),[In,Ks]=y.useState([]),hs=y.useRef({cmd:!1,shift:!1}),ms=()=>{Ge(!0)},Pi=()=>{Ge(!1)},Uo=()=>{si||(So.current=Ut(()=>ys(!0),850))},Zi=()=>{So.current&&(clearTimeout(So.current),So.current=null),ys(!1),Pi()};y.useEffect(()=>()=>{So.current&&clearTimeout(So.current)},[]);const[qt,ki]=y.useState(()=>{var C;try{const M=JSON.parse((C=localStorage.getItem("feedback-toolbar-settings"))!=null?C:"");return{...am,...M,annotationColorId:bc.find(D=>D.id===M.annotationColorId)?M.annotationColorId:am.annotationColorId}}catch{return am}}),[Bn,ps]=y.useState(!0),[Vo,Lo]=y.useState(!1),ao=()=>{var C;(C=Z.current)==null||C.classList.add(Ye.disableTransitions),ps(M=>!M),ul(()=>{var M;(M=Z.current)==null||M.classList.remove(Ye.disableTransitions)})},Yo=!1,xo="off",[yn,Qs]=y.useState(x!=null?x:null),ji=y.useRef(!1),[Ds,Vs]=y.useState(_?"connecting":"disconnected"),[nn,Bs]=y.useState(null),[ro,Oo]=y.useState(!1),[xs,Co]=y.useState(null),zo=y.useRef(!1),[Wo,Ys]=y.useState(new Set),[bo,oi]=y.useState(new Set),[Gn,dn]=y.useState(!1),[Fo,Un]=y.useState(!1),[Ls,pi]=y.useState(!1),lo=y.useRef(null),js=y.useRef(null),vo=y.useRef(null),bs=y.useRef(null),E=y.useRef(!1),q=y.useRef(0),fe=y.useRef(null),ye=y.useRef(null),Ve=8,et=50,Rt=y.useRef(null),Ht=y.useRef(null),Dt=y.useRef(null),qe=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(Se)Le(!0);else{Ge(!1),Ue("main");const C=Ut(()=>Le(!1),0);return()=>clearTimeout(C)}},[Se]);const sn=j&&L&&!We;y.useEffect(()=>{if(sn){Be(!1),ie(!0),Ys(new Set);const C=Ut(()=>{Ys(M=>{const D=new Set(M);return T.forEach(B=>D.add(B.id)),D})},350);return()=>clearTimeout(C)}else if(ae){Be(!0);const C=Ut(()=>{ie(!1),Be(!1)},250);return()=>clearTimeout(C)}},[sn]),y.useEffect(()=>{H(!0),it(window.scrollY);const C=Jh(qe);z(C.filter(vr)),l1||(Lo(!0),l1=!0,Ut(()=>Lo(!1),750));try{const M=localStorage.getItem("feedback-toolbar-theme");M!==null&&ps(M==="dark")}catch{}try{const M=localStorage.getItem("feedback-toolbar-position");if(M){const D=JSON.parse(M);typeof D.x=="number"&&typeof D.y=="number"&&Bs(D)}}catch{}},[qe]),y.useEffect(()=>{st&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(qt))},[qt,st]),y.useEffect(()=>{st&&localStorage.setItem("feedback-toolbar-theme",Bn?"dark":"light")},[Bn,st]);const fn=y.useRef(!1);y.useEffect(()=>{const C=fn.current;fn.current=ro,C&&!ro&&nn&&st&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(nn))},[ro,nn,st]),y.useEffect(()=>{if(!_||!st||ji.current)return;ji.current=!0,Vs("connecting"),(async()=>{try{const M=T6(qe),D=x||M;let B=!1;if(D)try{const U=await Jy(_,D);Qs(U.id),Vs("connected"),em(qe,U.id),B=!0;const re=Jh(qe),Ce=new Set(U.annotations.map(Xe=>Xe.id)),ze=re.filter(Xe=>!Ce.has(Xe.id));if(ze.length>0){const lt=`${typeof window<"u"?window.location.origin:""}${qe}`,jt=(await Promise.allSettled(ze.map(at=>rl(_,U.id,{...at,sessionId:U.id,url:lt})))).map((at,ut)=>at.status==="fulfilled"?at.value:(console.warn("[Agentation] Failed to sync annotation:",at.reason),ze[ut])),Et=[...U.annotations,...jt];z(Et.filter(vr)),lc(qe,Et.filter(vr),U.id)}else z(U.annotations.filter(vr)),lc(qe,U.annotations.filter(vr),U.id)}catch(U){console.warn("[Agentation] Could not join session, creating new:",U),E6(qe)}if(!B){const U=typeof window<"u"?window.location.href:"/",re=await tm(_,U);Qs(re.id),Vs("connected"),em(qe,re.id),b==null||b(re.id);const Ce=b6(),ze=typeof window<"u"?window.location.origin:"",Xe=[];for(const[lt,wt]of Ce){const jt=wt.filter(ut=>!ut._syncedTo);if(jt.length===0)continue;const Et=`${ze}${lt}`,at=lt===qe;Xe.push((async()=>{try{const ut=at?re:await tm(_,Et),vs=(await Promise.allSettled(jt.map(bn=>rl(_,ut.id,{...bn,sessionId:ut.id,url:Et})))).map((bn,Hn)=>bn.status==="fulfilled"?bn.value:(console.warn("[Agentation] Failed to sync annotation:",bn.reason),jt[Hn])).filter(vr);if(lc(lt,vs,ut.id),at){const bn=new Set(jt.map(Hn=>Hn.id));z(Hn=>{const Xt=Hn.filter(Gt=>!bn.has(Gt.id));return[...vs,...Xt]})}}catch(ut){console.warn(`[Agentation] Failed to sync annotations for ${lt}:`,ut)}})())}await Promise.allSettled(Xe)}}catch(M){Vs("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",M)}})()},[_,x,st,b,qe]),y.useEffect(()=>{if(!_||!st)return;const C=async()=>{try{(await fetch(`${_}/health`)).ok?Vs("connected"):Vs("disconnected")}catch{Vs("disconnected")}};C();const M=SS(C,1e4);return()=>clearInterval(M)},[_,st]),y.useEffect(()=>{if(!_||!st||!yn)return;const C=new EventSource(`${_}/sessions/${yn}/events`),M=["resolved","dismissed"],D=B=>{var U;try{const re=JSON.parse(B.data);if(M.includes((U=re.payload)==null?void 0:U.status)){const Ce=re.payload.id,ze=re.payload.kind;if(ze==="placement"){for(const[Xe,lt]of Rs.current)if(lt===Ce){Rs.current.delete(Xe),Nt(wt=>wt.filter(jt=>jt.id!==Xe));break}}else if(ze==="rearrange"){for(const[Xe,lt]of Us.current)if(lt===Ce){Us.current.delete(Xe),ln(wt=>{if(!wt)return null;const jt=wt.sections.filter(Et=>Et.id!==Xe);return jt.length===0?null:{...wt,sections:jt}});break}}else oi(Xe=>new Set(Xe).add(Ce)),Ut(()=>{z(Xe=>Xe.filter(lt=>lt.id!==Ce)),oi(Xe=>{const lt=new Set(Xe);return lt.delete(Ce),lt})},150)}}catch{}};return C.addEventListener("annotation.updated",D),()=>{C.removeEventListener("annotation.updated",D),C.close()}},[_,st,yn]),y.useEffect(()=>{if(!_||!st)return;const C=ye.current==="disconnected",M=Ds==="connected";ye.current=Ds,C&&M&&(async()=>{try{const B=Jh(qe);if(B.length===0)return;const re=`${typeof window<"u"?window.location.origin:""}${qe}`;let Ce=yn,ze=[];if(Ce)try{ze=(await Jy(_,Ce)).annotations}catch{Ce=null}Ce||(Ce=(await tm(_,re)).id,Qs(Ce),em(qe,Ce));const Xe=new Set(ze.map(wt=>wt.id)),lt=B.filter(wt=>!Xe.has(wt.id));if(lt.length>0){const jt=(await Promise.allSettled(lt.map(ut=>rl(_,Ce,{...ut,sessionId:Ce,url:re})))).map((ut,Qn)=>ut.status==="fulfilled"?ut.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ut.reason),lt[Qn])),at=[...ze,...jt].filter(vr);z(at),lc(qe,at,Ce)}}catch(B){console.warn("[Agentation] Failed to sync on reconnect:",B)}})()},[Ds,_,st,yn,qe]);const Pn=y.useCallback(()=>{F||(V(!0),Ke(!1),k(!1),Ut(()=>{D6(!0),P(!0),V(!1)},400))},[F]);y.useEffect(()=>{if(!i||!st||!t||t.length===0||T.length>0)return;const C=[];return C.push(Ut(()=>{k(!0)},n-200)),t.forEach((M,D)=>{const B=n+D*300;C.push(Ut(()=>{const U=document.querySelector(M.selector);if(!U)return;const re=U.getBoundingClientRect(),{name:Ce,path:ze}=ml(U),Xe={id:`demo-${Date.now()}-${D}`,x:(re.left+re.width/2)/window.innerWidth*100,y:re.top+re.height/2+window.scrollY,comment:M.comment,element:Ce,elementPath:ze,timestamp:Date.now(),selectedText:M.selectedText,boundingBox:{x:re.left,y:re.top+window.scrollY,width:re.width,height:re.height},nearbyText:ac(U),cssClasses:rc(U)};z(lt=>[...lt,Xe])},B))}),()=>{C.forEach(clearTimeout)}},[i,st,t,n]),y.useEffect(()=>{const C=()=>{it(window.scrollY),$t(!0),Dt.current&&clearTimeout(Dt.current),Dt.current=Ut(()=>{$t(!1)},150)};return window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),Dt.current&&clearTimeout(Dt.current)}},[]),y.useEffect(()=>{st&&T.length>0?yn?lc(qe,T,yn):lb(qe,T):st&&T.length===0&&localStorage.removeItem(Td(qe))},[T,qe,st,yn]),y.useEffect(()=>{if(st&&!an.current){an.current=!0;const C=v6(qe);C.length>0&&Nt(C)}},[st,qe]),y.useEffect(()=>{st&&an.current&&!ft&&(Qe.length>0?w6(qe,Qe):S6(qe))},[Qe,qe,st,ft]),y.useEffect(()=>{if(st&&!oo.current){oo.current=!0;const C=C6(qe);if(C){const M={...C,sections:C.sections.map(D=>{var B;return{...D,currentRect:(B=D.currentRect)!=null?B:{...D.originalRect}}})};ln(M)}}},[st,qe]),y.useEffect(()=>{st&&oo.current&&!ft&&(nt?k6(qe,nt):j6(qe))},[nt,qe,st,ft]);const Vn=y.useRef(!1);y.useEffect(()=>{if(st&&!Vn.current){Vn.current=!0;const C=M6(qe);C&&(us.current={rearrange:C.rearrange,placements:C.placements||[]},C.purpose&&$n(C.purpose))}},[st,qe]),y.useEffect(()=>{var M,D,B,U,re;if(!st||!Vn.current)return;const C=us.current;ft?((D=(M=nt==null?void 0:nt.sections)==null?void 0:M.length)!=null?D:0)>0||Qe.length>0||Mn?Zy(qe,{rearrange:nt,placements:Qe,purpose:Mn}):td(qe):((re=(U=(B=C.rearrange)==null?void 0:B.sections)==null?void 0:U.length)!=null?re:0)>0||C.placements.length>0||Mn?Zy(qe,{rearrange:C.rearrange,placements:C.placements,purpose:Mn}):td(qe)},[nt,Qe,Mn,ft,qe,st]),y.useEffect(()=>{We&&!nt&&ln({sections:[],originalOrder:[],detectedAt:Date.now()})},[We,nt]),y.useEffect(()=>{if(!_||!yn)return;const C=Rs.current,M=new Set(Qe.map(D=>D.id));for(const D of Qe){if(C.has(D.id))continue;C.set(D.id,"");const B=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe;rl(_,yn,{id:D.id,x:D.x/window.innerWidth*100,y:D.y,comment:`Place ${D.type} at (${Math.round(D.x)}, ${Math.round(D.y)}), ${D.width}×${D.height}px${D.text?` — "${D.text}"`:""}`,element:`[design:${D.type}]`,elementPath:"[placement]",timestamp:D.timestamp,url:B,intent:"change",severity:"important",kind:"placement",placement:{componentType:D.type,width:D.width,height:D.height,scrollY:D.scrollY,text:D.text}}).then(U=>{C.has(D.id)&&C.set(D.id,U.id)}).catch(U=>{console.warn("[Agentation] Failed to sync placement annotation:",U),C.delete(D.id)})}for(const[D,B]of C)M.has(D)||(C.delete(D),B&&Ka(_,B).catch(()=>{}))},[Qe,_,yn,qe]),y.useEffect(()=>{if(!(!_||!yn))return En.current&&clearTimeout(En.current),En.current=Ut(()=>{const C=Us.current;if(!nt||nt.sections.length===0){for(const[,B]of C)B&&Ka(_,B).catch(()=>{});C.clear();return}const M=new Set(nt.sections.map(B=>B.id)),D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe;for(const B of nt.sections){const U=B.originalRect,re=B.currentRect;if(!(Math.abs(U.x-re.x)>1||Math.abs(U.y-re.y)>1||Math.abs(U.width-re.width)>1||Math.abs(U.height-re.height)>1)){const Xe=C.get(B.id);Xe&&(C.delete(B.id),Ka(_,Xe).catch(()=>{}));continue}const ze=C.get(B.id);ze?e1(_,ze,{comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(U.x)},${Math.round(U.y)}) ${Math.round(U.width)}×${Math.round(U.height)} to (${Math.round(re.x)},${Math.round(re.y)}) ${Math.round(re.width)}×${Math.round(re.height)}`}).catch(Xe=>{console.warn("[Agentation] Failed to update rearrange annotation:",Xe)}):(C.set(B.id,""),rl(_,yn,{id:B.id,x:re.x/window.innerWidth*100,y:re.y,comment:`Move ${B.label} section (${B.tagName}) — from (${Math.round(U.x)},${Math.round(U.y)}) ${Math.round(U.width)}×${Math.round(U.height)} to (${Math.round(re.x)},${Math.round(re.y)}) ${Math.round(re.width)}×${Math.round(re.height)}`,element:B.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:D,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:B.selector,label:B.label,tagName:B.tagName,originalRect:U,currentRect:re}}).then(Xe=>{C.has(B.id)&&C.set(B.id,Xe.id)}).catch(Xe=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Xe),C.delete(B.id)}))}for(const[B,U]of C)M.has(B)||(C.delete(B),U&&Ka(_,U).catch(()=>{}))},300),()=>{En.current&&clearTimeout(En.current)}},[nt,_,yn,qe]);const pn=y.useRef(new Map);y.useLayoutEffect(()=>{var D;const C=(D=nt==null?void 0:nt.sections)!=null?D:[],M=new Set;if((We||Bt)&&j)for(const B of C){M.add(B.id);try{const U=document.querySelector(B.selector);if(!U)continue;if(!pn.current.has(B.id)){const re={transform:U.style.transform,transformOrigin:U.style.transformOrigin,opacity:U.style.opacity,position:U.style.position,zIndex:U.style.zIndex,display:U.style.display},Ce=[];let ze=U.parentElement;for(;ze&&ze!==document.body;){const lt=getComputedStyle(ze);(lt.overflow!=="visible"||lt.overflowX!=="visible"||lt.overflowY!=="visible")&&(Ce.push({el:ze,overflow:ze.style.overflow}),ze.style.overflow="visible"),ze=ze.parentElement}getComputedStyle(U).display==="inline"&&(U.style.display="inline-block"),pn.current.set(B.id,{el:U,origStyles:re,ancestors:Ce}),U.style.transformOrigin="top left",U.style.zIndex="9999"}}catch{}}for(const[B,U]of pn.current)if(!M.has(B)){const{el:re,origStyles:Ce,ancestors:ze}=U;re.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",re.style.transform=Ce.transform,re.style.transformOrigin=Ce.transformOrigin,re.style.opacity=Ce.opacity,re.style.position=Ce.position,re.style.zIndex=Ce.zIndex,pn.current.delete(B),Ut(()=>{re.style.transition="",re.style.display=Ce.display;for(const Xe of ze)Xe.el.style.overflow=Xe.overflow},450)}},[nt,We,Bt,j]),y.useEffect(()=>()=>{for(const[,C]of pn.current){const{el:M,origStyles:D,ancestors:B}=C;M.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",M.style.transform=D.transform,M.style.transformOrigin=D.transformOrigin,M.style.opacity=D.opacity,M.style.position=D.position,M.style.zIndex=D.zIndex,Ut(()=>{M.style.transition="",M.style.display=D.display;for(const U of B)U.el.style.overflow=U.overflow},450)}pn.current.clear()},[]);const Ms=y.useCallback(()=>{Wt(!0),kt(!1),_t(null),clearTimeout(Ho.current),Ho.current=Ut(()=>{Wt(!1)},300)},[]),co=y.useCallback(()=>{We&&(Wt(!0),kt(!1),_t(null),clearTimeout(Ho.current),Ho.current=Ut(()=>{Wt(!1)},300)),k(!1)},[We]),ii=y.useCallback(()=>{te||(kS(),me(!0))},[te]),Xo=y.useCallback(()=>{te&&($y(),me(!1))},[te]),Ji=y.useCallback(()=>{te?Xo():ii()},[te,ii,Xo]),I=y.useCallback(()=>{if(In.length===0)return;const C=In[0],M=C.element,D=In.length>1,B=In.map(U=>U.element.getBoundingClientRect());if(D){const U={left:Math.min(...B.map(ut=>ut.left)),top:Math.min(...B.map(ut=>ut.top)),right:Math.max(...B.map(ut=>ut.right)),bottom:Math.max(...B.map(ut=>ut.bottom))},re=In.slice(0,5).map(ut=>ut.name).join(", "),Ce=In.length>5?` +${In.length-5} more`:"",ze=B.map(ut=>({x:ut.left,y:ut.top+window.scrollY,width:ut.width,height:ut.height})),lt=In[In.length-1].element,wt=B[B.length-1],jt=wt.left+wt.width/2,Et=wt.top+wt.height/2,at=rm(lt);K({x:jt/window.innerWidth*100,y:at?Et:Et+window.scrollY,clientY:Et,element:`${In.length} elements: ${re}${Ce}`,elementPath:"multi-select",boundingBox:{x:U.left,y:U.top+window.scrollY,width:U.right-U.left,height:U.bottom-U.top},isMultiSelect:!0,isFixed:at,elementBoundingBoxes:ze,multiSelectElements:In.map(ut=>ut.element),targetElement:lt,fullPath:Zu(M),accessibility:Qu(M),computedStyles:Ku(M),computedStylesObj:qu(M),nearbyElements:Gu(M),cssClasses:rc(M),nearbyText:ac(M),sourceFile:od(M)})}else{const U=B[0],re=rm(M);K({x:U.left/window.innerWidth*100,y:re?U.top:U.top+window.scrollY,clientY:U.top,element:C.name,elementPath:C.path,boundingBox:{x:U.left,y:re?U.top:U.top+window.scrollY,width:U.width,height:U.height},isFixed:re,fullPath:Zu(M),accessibility:Qu(M),computedStyles:Ku(M),computedStylesObj:qu(M),nearbyElements:Gu(M),cssClasses:rc(M),nearbyText:ac(M),reactComponents:C.reactComponents,sourceFile:od(M)})}Ks([]),ue(null)},[In]);y.useEffect(()=>{j||(K(null),Me(null),Ze(null),Ae([]),ue(null),Ke(!1),Ks([]),hs.current={cmd:!1,shift:!1},te&&Xo())},[j,te,Xo]),y.useEffect(()=>()=>{$y()},[]),y.useEffect(()=>{if(!j)return;const C=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),M=":not([data-agentation-root]):not([data-agentation-root] *)",D=document.createElement("style");return D.id="feedback-cursor-styles",D.textContent=`
      body ${M} {
        cursor: crosshair !important;
      }

      body :is(${C})${M} {
        cursor: text !important;
      }
    `,document.head.appendChild(D),()=>{const B=document.getElementById("feedback-cursor-styles");B&&B.remove()}},[j]),y.useEffect(()=>{if(hi!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[hi,j]),y.useEffect(()=>{if(!j||W||is||We)return;const C=M=>{const D=M.composedPath()[0]||M.target;if(Ko(D,"[data-feedback-toolbar]")){ue(null);return}const B=br(M.clientX,M.clientY);if(!B||Ko(B,"[data-feedback-toolbar]")){ue(null);return}const{name:U,elementName:re,path:Ce,reactComponents:ze}=im(B,xo),Xe=B.getBoundingClientRect();ue({element:U,elementName:re,elementPath:Ce,rect:Xe,reactComponents:ze}),se({x:M.clientX,y:M.clientY})};return document.addEventListener("mousemove",C),()=>document.removeEventListener("mousemove",C)},[j,W,is,We,xo,Jt]);const ee=y.useCallback(C=>{var M;if(Me(C),dt(null),ht(null),Ee([]),(M=C.elementBoundingBoxes)!=null&&M.length){const D=[];for(const B of C.elementBoundingBoxes){const U=B.x+B.width/2,re=B.y+B.height/2-window.scrollY,Ce=br(U,re);Ce&&D.push(Ce)}Ae(D),Ze(null)}else if(C.boundingBox){const D=C.boundingBox,B=D.x+D.width/2,U=C.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,re=br(B,U);if(re){const Ce=re.getBoundingClientRect(),ze=Ce.width/D.width,Xe=Ce.height/D.height;ze<.5||Xe<.5?Ze(null):Ze(re)}else Ze(null);Ae([])}else Ze(null),Ae([])},[]);y.useEffect(()=>{if(!j||is||We)return;const C=M=>{var Zn,vs;if(E.current){E.current=!1;return}const D=M.composedPath()[0]||M.target;if(Ko(D,"[data-feedback-toolbar]")||Ko(D,"[data-annotation-popup]")||Ko(D,"[data-annotation-marker]"))return;if(M.metaKey&&M.shiftKey&&!W&&!G){M.preventDefault(),M.stopPropagation();const bn=br(M.clientX,M.clientY);if(!bn)return;const Hn=bn.getBoundingClientRect(),{name:Xt,path:Gt,reactComponents:ws}=im(bn,xo),Sn=In.findIndex(ho=>ho.element===bn);Sn>=0?Ks(ho=>ho.filter(($o,as)=>as!==Sn)):Ks(ho=>[...ho,{element:bn,rect:Hn,name:Xt,path:Gt,reactComponents:ws!=null?ws:void 0}]);return}const B=Ko(D,"button, a, input, select, textarea, [role='button'], [onclick]");if(qt.blockInteractions&&B&&(M.preventDefault(),M.stopPropagation()),W){if(B&&!qt.blockInteractions)return;M.preventDefault(),(Zn=Rt.current)==null||Zn.shake();return}if(G){if(B&&!qt.blockInteractions)return;M.preventDefault(),(vs=Ht.current)==null||vs.shake();return}M.preventDefault();const U=br(M.clientX,M.clientY);if(!U)return;const{name:re,path:Ce,reactComponents:ze}=im(U,xo),Xe=U.getBoundingClientRect(),lt=M.clientX/window.innerWidth*100,wt=rm(U),jt=wt?M.clientY:M.clientY+window.scrollY,Et=window.getSelection();let at;Et&&Et.toString().trim().length>0&&(at=Et.toString().trim().slice(0,500));const ut=qu(U),Qn=Ku(U);K({x:lt,y:jt,clientY:M.clientY,element:re,elementPath:Ce,selectedText:at,boundingBox:{x:Xe.left,y:wt?Xe.top:Xe.top+window.scrollY,width:Xe.width,height:Xe.height},nearbyText:ac(U),cssClasses:rc(U),isFixed:wt,fullPath:Zu(U),accessibility:Qu(U),computedStyles:Qn,computedStylesObj:ut,nearbyElements:Gu(U),reactComponents:ze!=null?ze:void 0,sourceFile:od(U),targetElement:U}),ue(null)};return document.addEventListener("click",C,!0),()=>document.removeEventListener("click",C,!0)},[j,is,We,W,G,qt.blockInteractions,xo,In]),y.useEffect(()=>{if(!j)return;const C=B=>{B.key==="Meta"&&(hs.current.cmd=!0),B.key==="Shift"&&(hs.current.shift=!0)},M=B=>{const U=hs.current.cmd&&hs.current.shift;B.key==="Meta"&&(hs.current.cmd=!1),B.key==="Shift"&&(hs.current.shift=!1);const re=hs.current.cmd&&hs.current.shift;U&&!re&&In.length>0&&I()},D=()=>{hs.current={cmd:!1,shift:!1},Ks([])};return document.addEventListener("keydown",C),document.addEventListener("keyup",M),window.addEventListener("blur",D),()=>{document.removeEventListener("keydown",C),document.removeEventListener("keyup",M),window.removeEventListener("blur",D)}},[j,In,I]),y.useEffect(()=>{if(!j||W||is||We)return;const C=M=>{const D=M.composedPath()[0]||M.target;Ko(D,"[data-feedback-toolbar]")||Ko(D,"[data-annotation-marker]")||Ko(D,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(D.tagName)||D.isContentEditable||(M.preventDefault(),lo.current={x:M.clientX,y:M.clientY})};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[j,W,is,We]),y.useEffect(()=>{if(!j||W)return;const C=M=>{if(!lo.current)return;const D=M.clientX-lo.current.x,B=M.clientY-lo.current.y,U=D*D+B*B,re=Ve*Ve;if(!Ls&&U>=re&&(js.current=lo.current,pi(!0),M.preventDefault()),(Ls||U>=re)&&js.current){if(vo.current){const Xt=Math.min(js.current.x,M.clientX),Gt=Math.min(js.current.y,M.clientY),ws=Math.abs(M.clientX-js.current.x),Sn=Math.abs(M.clientY-js.current.y);vo.current.style.transform=`translate(${Xt}px, ${Gt}px)`,vo.current.style.width=`${ws}px`,vo.current.style.height=`${Sn}px`}const Ce=Date.now();if(Ce-q.current<et)return;q.current=Ce;const ze=js.current.x,Xe=js.current.y,lt=Math.min(ze,M.clientX),wt=Math.min(Xe,M.clientY),jt=Math.max(ze,M.clientX),Et=Math.max(Xe,M.clientY),at=(lt+jt)/2,ut=(wt+Et)/2,Qn=new Set,Zn=[[lt,wt],[jt,wt],[lt,Et],[jt,Et],[at,ut],[at,wt],[at,Et],[lt,ut],[jt,ut]];for(const[Xt,Gt]of Zn){const ws=document.elementsFromPoint(Xt,Gt);for(const Sn of ws)Sn instanceof HTMLElement&&Qn.add(Sn)}const vs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Xt of vs)if(Xt instanceof HTMLElement){const Gt=Xt.getBoundingClientRect(),ws=Gt.left+Gt.width/2,Sn=Gt.top+Gt.height/2,ho=ws>=lt&&ws<=jt&&Sn>=wt&&Sn<=Et,$o=Math.min(Gt.right,jt)-Math.max(Gt.left,lt),as=Math.min(Gt.bottom,Et)-Math.max(Gt.top,wt),Mi=$o>0&&as>0?$o*as:0,Hi=Gt.width*Gt.height,Ui=Hi>0?Mi/Hi:0;(ho||Ui>.5)&&Qn.add(Xt)}const bn=[],Hn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Xt of Qn){if(Ko(Xt,"[data-feedback-toolbar]")||Ko(Xt,"[data-annotation-marker]"))continue;const Gt=Xt.getBoundingClientRect();if(!(Gt.width>window.innerWidth*.8&&Gt.height>window.innerHeight*.5)&&!(Gt.width<10||Gt.height<10)&&Gt.left<jt&&Gt.right>lt&&Gt.top<Et&&Gt.bottom>wt){const ws=Xt.tagName;let Sn=Hn.has(ws);if(!Sn&&(ws==="DIV"||ws==="SPAN")){const ho=Xt.textContent&&Xt.textContent.trim().length>0,$o=Xt.onclick!==null||Xt.getAttribute("role")==="button"||Xt.getAttribute("role")==="link"||Xt.classList.contains("clickable")||Xt.hasAttribute("data-clickable");(ho||$o)&&!Xt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Sn=!0)}if(Sn){let ho=!1;for(const $o of bn)if($o.left<=Gt.left&&$o.right>=Gt.right&&$o.top<=Gt.top&&$o.bottom>=Gt.bottom){ho=!0;break}ho||bn.push(Gt)}}}if(bs.current){const Xt=bs.current;for(;Xt.children.length>bn.length;)Xt.removeChild(Xt.lastChild);bn.forEach((Gt,ws)=>{let Sn=Xt.children[ws];Sn||(Sn=document.createElement("div"),Sn.className=Ye.selectedElementHighlight,Xt.appendChild(Sn)),Sn.style.transform=`translate(${Gt.left}px, ${Gt.top}px)`,Sn.style.width=`${Gt.width}px`,Sn.style.height=`${Gt.height}px`})}}};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[j,W,Ls,Ve]),y.useEffect(()=>{if(!j)return;const C=M=>{const D=Ls,B=js.current;if(Ls&&B){E.current=!0;const U=Math.min(B.x,M.clientX),re=Math.min(B.y,M.clientY),Ce=Math.max(B.x,M.clientX),ze=Math.max(B.y,M.clientY),Xe=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(at=>{if(!(at instanceof HTMLElement)||Ko(at,"[data-feedback-toolbar]")||Ko(at,"[data-annotation-marker]"))return;const ut=at.getBoundingClientRect();ut.width>window.innerWidth*.8&&ut.height>window.innerHeight*.5||ut.width<10||ut.height<10||ut.left<Ce&&ut.right>U&&ut.top<ze&&ut.bottom>re&&Xe.push({element:at,rect:ut})});const wt=Xe.filter(({element:at})=>!Xe.some(({element:ut})=>ut!==at&&at.contains(ut))),jt=M.clientX/window.innerWidth*100,Et=M.clientY+window.scrollY;if(wt.length>0){const at=wt.reduce((Hn,{rect:Xt})=>({left:Math.min(Hn.left,Xt.left),top:Math.min(Hn.top,Xt.top),right:Math.max(Hn.right,Xt.right),bottom:Math.max(Hn.bottom,Xt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ut=wt.slice(0,5).map(({element:Hn})=>ml(Hn).name).join(", "),Qn=wt.length>5?` +${wt.length-5} more`:"",Zn=wt[0].element,vs=qu(Zn),bn=Ku(Zn);K({x:jt,y:Et,clientY:M.clientY,element:`${wt.length} elements: ${ut}${Qn}`,elementPath:"multi-select",boundingBox:{x:at.left,y:at.top+window.scrollY,width:at.right-at.left,height:at.bottom-at.top},isMultiSelect:!0,fullPath:Zu(Zn),accessibility:Qu(Zn),computedStyles:bn,computedStylesObj:vs,nearbyElements:Gu(Zn),cssClasses:rc(Zn),nearbyText:ac(Zn),sourceFile:od(Zn)})}else{const at=Math.abs(Ce-U),ut=Math.abs(ze-re);at>20&&ut>20&&K({x:jt,y:Et,clientY:M.clientY,element:"Area selection",elementPath:`region at (${Math.round(U)}, ${Math.round(re)})`,boundingBox:{x:U,y:re+window.scrollY,width:at,height:ut},isMultiSelect:!0})}ue(null)}else D&&(E.current=!0);lo.current=null,js.current=null,pi(!1),bs.current&&(bs.current.innerHTML="")};return document.addEventListener("mouseup",C),()=>document.removeEventListener("mouseup",C)},[j,Ls]);const ne=y.useCallback(async(C,M,D)=>{const B=qt.webhookUrl||w;if(!B||!qt.webhooksEnabled&&!D)return!1;try{return(await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:C,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...M})})).ok}catch(U){return console.warn("[Agentation] Webhook failed:",U),!1}},[w,qt.webhookUrl,qt.webhooksEnabled]),xe=y.useCallback(C=>{var D;if(!W)return;const M={id:Date.now().toString(),x:W.x,y:W.y,comment:C,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,..._&&yn?{sessionId:yn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};z(B=>[...B,M]),fe.current=M.id,Ut(()=>{fe.current=null},300),Ut(()=>{Ys(B=>new Set(B).add(M.id))},250),a==null||a(M),ne("annotation.add",{annotation:M}),dn(!0),Ut(()=>{K(null),dn(!1)},150),(D=window.getSelection())==null||D.removeAllRanges(),_&&yn&&rl(_,yn,M).then(B=>{B.id!==M.id&&(z(U=>U.map(re=>re.id===M.id?{...re,id:B.id}:re)),Ys(U=>{const re=new Set(U);return re.delete(M.id),re.add(B.id),re}))}).catch(B=>{console.warn("[Agentation] Failed to sync annotation:",B)})},[W,a,ne,_,yn]),ot=y.useCallback(()=>{dn(!0),Ut(()=>{K(null),dn(!1)},150)},[]),gt=y.useCallback(C=>{const M=T.findIndex(B=>B.id===C),D=T[M];(G==null?void 0:G.id)===C&&(Un(!0),Ut(()=>{Me(null),Ze(null),Ae([]),Un(!1)},150)),zt(C),oi(B=>new Set(B).add(C)),D&&(c==null||c(D),ne("annotation.delete",{annotation:D})),_&&Ka(_,C).catch(B=>{console.warn("[Agentation] Failed to delete annotation from server:",B)}),Ut(()=>{z(B=>B.filter(U=>U.id!==C)),oi(B=>{const U=new Set(B);return U.delete(C),U}),zt(null),M<T.length-1&&(Vt(M),Ut(()=>Vt(null),200))},150)},[T,G,c,ne,_]),yt=y.useCallback(C=>{var M;if(!C){dt(null),ht(null),Ee([]);return}if(dt(C.id),(M=C.elementBoundingBoxes)!=null&&M.length){const D=[];for(const B of C.elementBoundingBoxes){const U=B.x+B.width/2,re=B.y+B.height/2-window.scrollY,ze=document.elementsFromPoint(U,re).find(Xe=>!Xe.closest("[data-annotation-marker]")&&!Xe.closest("[data-agentation-root]"));ze&&D.push(ze)}Ee(D),ht(null)}else if(C.boundingBox){const D=C.boundingBox,B=D.x+D.width/2,U=C.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,re=br(B,U);if(re){const Ce=re.getBoundingClientRect(),ze=Ce.width/D.width,Xe=Ce.height/D.height;ze<.5||Xe<.5?ht(null):ht(re)}else ht(null);Ee([])}else ht(null),Ee([])},[]),Ft=y.useCallback(C=>{if(!G)return;const M={...G,comment:C};z(D=>D.map(B=>B.id===G.id?M:B)),u==null||u(M),ne("annotation.update",{annotation:M}),_&&e1(_,G.id,{comment:C}).catch(D=>{console.warn("[Agentation] Failed to update annotation on server:",D)}),Un(!0),Ut(()=>{Me(null),Ze(null),Ae([]),Un(!1)},150)},[G,u,ne,_]),qn=y.useCallback(()=>{Un(!0),Ut(()=>{Me(null),Ze(null),Ae([]),Un(!1)},150)},[]),Kn=y.useCallback(()=>{const C=T.length,M=Qe.length>0||!!nt;if(C===0&&Jt.length===0&&!M)return;if(d==null||d(T),ne("annotations.clear",{annotations:T}),_){Promise.all(T.map(U=>Ka(_,U.id).catch(re=>{console.warn("[Agentation] Failed to delete annotation from server:",re)})));for(const[,U]of Rs.current)U&&Ka(_,U).catch(()=>{});Rs.current.clear();for(const[,U]of Us.current)U&&Ka(_,U).catch(()=>{});Us.current.clear()}Re(!0),Ne(!0),Ro([]);const D=Bo.current;if(D){const U=D.getContext("2d");U&&U.clearRect(0,0,D.width,D.height)}(Qe.length>0||nt)&&(go(U=>U+1),ni(U=>U+1),Ut(()=>{Nt([]),ln(null)},200)),ft&&Lt(!1),Mn&&$n(""),us.current={rearrange:null,placements:[]},td(qe);const B=C*30+200;Ut(()=>{z([]),Ys(new Set),localStorage.removeItem(Td(qe)),Re(!1)},B),Ut(()=>Ne(!1),1500)},[qe,T,Jt,Qe,nt,ft,Mn,d,ne,_]),uo=y.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe,M=We&&ft;let D;if(M){if(Qe.length===0&&!nt&&!Mn)return;D=""}else{if(D=s1(T,C,qt.outputDetail),!D&&Jt.length===0&&Qe.length===0&&!nt)return;D||(D=`## Page Feedback: ${C}
`)}if(!M&&Jt.length>0){const B=new Set;for(const ze of T)ze.drawingIndex!=null&&B.add(ze.drawingIndex);const U=Bo.current;U&&(U.style.visibility="hidden");const re=[],Ce=window.scrollY;for(let ze=0;ze<Jt.length;ze++){if(B.has(ze))continue;const Xe=Jt[ze];if(Xe.points.length<2)continue;const lt=Xe.fixed?Xe.points:Xe.points.map(Jn=>({x:Jn.x,y:Jn.y-Ce}));let wt=1/0,jt=1/0,Et=-1/0,at=-1/0;for(const Jn of lt)wt=Math.min(wt,Jn.x),jt=Math.min(jt,Jn.y),Et=Math.max(Et,Jn.x),at=Math.max(at,Jn.y);const ut=Et-wt,Qn=at-jt,Zn=Math.hypot(ut,Qn),vs=lt[0],bn=lt[lt.length-1],Hn=Math.hypot(bn.x-vs.x,bn.y-vs.y);let Xt;const Gt=Hn<Zn*.35,ws=ut/Math.max(Qn,1);if(Gt&&Zn>20){const Jn=Math.max(ut,Qn)*.15;let Vi=0;for(const ea of lt){const Pc=ea.x-wt<Jn,Wd=Et-ea.x<Jn,Fd=ea.y-jt<Jn,Xd=at-ea.y<Jn;(Pc||Wd)&&(Fd||Xd)&&Vi++}Xt=Vi>lt.length*.15?"box":"circle"}else ws>3&&Qn<40?Xt="underline":Hn>Zn*.5?Xt="arrow":Xt="drawing";const Sn=Math.min(10,lt.length),ho=Math.max(1,Math.floor(lt.length/Sn)),$o=new Set,as=[],Mi=[vs];for(let Jn=ho;Jn<lt.length-1;Jn+=ho)Mi.push(lt[Jn]);Mi.push(bn);for(const Jn of Mi){const Vi=br(Jn.x,Jn.y);if(!Vi||$o.has(Vi)||Ko(Vi,"[data-feedback-toolbar]"))continue;$o.add(Vi);const{name:ea}=ml(Vi);as.includes(ea)||as.push(ea)}const Hi=`${Math.round(wt)},${Math.round(jt)} → ${Math.round(Et)},${Math.round(at)}`;let Ui;(Xt==="circle"||Xt==="box")&&as.length>0?Ui=`${Xt==="box"?"Boxed":"Circled"} **${as[0]}**${as.length>1?` (and ${as.slice(1).join(", ")})`:""} (region: ${Hi})`:Xt==="underline"&&as.length>0?Ui=`Underlined **${as[0]}** (${Hi})`:Xt==="arrow"&&as.length>=2?Ui=`Arrow from **${as[0]}** to **${as[as.length-1]}** (${Math.round(vs.x)},${Math.round(vs.y)} → ${Math.round(bn.x)},${Math.round(bn.y)})`:as.length>0?Ui=`${Xt==="arrow"?"Arrow":"Drawing"} near **${as.join("**, **")}** (region: ${Hi})`:Ui=`Drawing at ${Hi}`,re.push(Ui)}U&&(U.style.visibility=""),re.length>0&&(D+=`
**Drawings:**
`,re.forEach((ze,Xe)=>{D+=`${Xe+1}. ${ze}
`}))}if((Qe.length>0||M&&Mn)&&(D+=`
`+Ky(Qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:Mn||void 0},qt.outputDetail)),nt){const B=Qy(nt,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(D+=`
`+B)}if(g)try{await navigator.clipboard.writeText(D)}catch{}h==null||h(D),R(!0),Ut(()=>R(!1),2e3),qt.autoClearAfterCopy&&Ut(()=>Kn(),500)},[T,Jt,Qe,nt,ft,We,Xn,Mn,qe,qt.outputDetail,xo,qt.autoClearAfterCopy,Kn,g,h]),An=y.useCallback(async()=>{const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:qe;let M=s1(T,C,qt.outputDetail);if(!M&&Qe.length===0&&!nt)return;if(M||(M=`## Page Feedback: ${C}
`),Qe.length>0&&(M+=`
`+Ky(Qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:Mn||void 0},qt.outputDetail)),nt){const B=Qy(nt,qt.outputDetail,{width:window.innerWidth,height:window.innerHeight});B&&(M+=`
`+B)}p&&p(M,T),le("sending"),await new Promise(B=>Ut(B,150));const D=await ne("submit",{output:M,annotations:T},!0);le(D?"sent":"failed"),Ut(()=>le("idle"),2500),D&&qt.autoClearAfterCopy&&Ut(()=>Kn(),500)},[p,ne,T,Qe,nt,ft,Xn,qe,qt.outputDetail,xo,qt.autoClearAfterCopy,Kn]);y.useEffect(()=>{if(!xs)return;const C=10,M=B=>{const U=B.clientX-xs.x,re=B.clientY-xs.y,Ce=Math.sqrt(U*U+re*re);if(!ro&&Ce>C&&Oo(!0),ro||Ce>C){let ze=xs.toolbarX+U,Xe=xs.toolbarY+re;const lt=20,wt=337,jt=44,at=wt-(j?Ds==="connected"?297:257:44),ut=lt-at,Qn=window.innerWidth-lt-wt;ze=Math.max(ut,Math.min(Qn,ze)),Xe=Math.max(lt,Math.min(window.innerHeight-jt-lt,Xe)),Bs({x:ze,y:Xe})}},D=()=>{ro&&(zo.current=!0),Oo(!1),Co(null)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",D)}},[xs,ro,j,Ds]);const Kt=y.useCallback(C=>{var re,Ce;if(C.target.closest("button")||C.target.closest("[data-agentation-settings-panel]"))return;const M=C.currentTarget.parentElement;if(!M)return;const D=M.getBoundingClientRect(),B=(re=nn==null?void 0:nn.x)!=null?re:D.left,U=(Ce=nn==null?void 0:nn.y)!=null?Ce:D.top;Co({x:C.clientX,y:C.clientY,toolbarX:B,toolbarY:U})},[nn]);if(y.useEffect(()=>{if(!nn)return;const C=()=>{let U=nn.x,re=nn.y;const Xe=20-(337-(j?Ds==="connected"?297:257:44)),lt=window.innerWidth-20-337;U=Math.max(Xe,Math.min(lt,U)),re=Math.max(20,Math.min(window.innerHeight-44-20,re)),(U!==nn.x||re!==nn.y)&&Bs({x:U,y:re})};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[nn,j,Ds]),y.useEffect(()=>{const C=M=>{const D=M.target,B=D.tagName==="INPUT"||D.tagName==="TEXTAREA"||D.isContentEditable;if(M.key==="Escape"){if(We){Tt?_t(null):Ms();return}if(is){wn(!1);return}if(In.length>0){Ks([]);return}W||j&&(ms(),k(!1))}if((M.metaKey||M.ctrlKey)&&M.shiftKey&&(M.key==="f"||M.key==="F")){M.preventDefault(),ms(),j?co():k(!0);return}if(!(B||M.metaKey||M.ctrlKey)&&((M.key==="p"||M.key==="P")&&(M.preventDefault(),ms(),Ji()),(M.key==="l"||M.key==="L")&&(M.preventDefault(),ms(),is&&wn(!1),Se&&Ke(!1),W&&ot(),We?Ms():kt(!0)),(M.key==="h"||M.key==="H")&&T.length>0&&(M.preventDefault(),ms(),N(U=>!U)),(M.key==="c"||M.key==="C")&&(T.length>0||Qe.length>0||nt)&&(M.preventDefault(),ms(),uo()),(M.key==="x"||M.key==="X")&&(T.length>0||Qe.length>0||nt)&&(M.preventDefault(),ms(),Kn(),Qe.length>0&&Nt([]),nt&&ln(null)),M.key==="s"||M.key==="S")){const U=ia(qt.webhookUrl)||ia(w||"");T.length>0&&U&&oe==="idle"&&(M.preventDefault(),ms(),An())}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[j,is,We,Tt,Qe,nt,W,T.length,qt.webhookUrl,w,oe,An,Ji,uo,Kn,In]),!st||Y)return null;const en=T.length>0,cn=T.filter(C=>!bo.has(C.id)&&C.kind!=="placement"&&C.kind!=="rearrange"),Ts=cn.length>0,Os=T.filter(C=>bo.has(C.id)),Ws=C=>{const re=C.x/100*window.innerWidth,Ce=typeof C.y=="string"?parseFloat(C.y):C.y,ze={};window.innerHeight-Ce-22-10<80&&(ze.top="auto",ze.bottom="calc(100% + 10px)");const lt=re-200/2,wt=10;if(lt<wt){const jt=wt-lt;ze.left=`calc(50% + ${jt}px)`}else if(lt+200>window.innerWidth-wt){const jt=lt+200-(window.innerWidth-wt);ze.left=`calc(50% - ${jt}px)`}return ze};return Bc.createPortal(l.jsxs("div",{ref:Z,style:{display:"contents"},"data-agentation-theme":Bn?"dark":"light","data-agentation-accent":qt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${Ye.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:nn?{left:nn.x,top:nn.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${Ye.toolbarContainer} ${j?Ye.expanded:Ye.collapsed} ${Vo?Ye.entrance:""} ${F?Ye.hiding:""} ${!qt.webhooksEnabled&&(ia(qt.webhookUrl)||ia(w||""))?Ye.serverConnected:""}`,onClick:j?void 0:C=>{if(zo.current){zo.current=!1,C.preventDefault();return}k(!0)},onMouseDown:Kt,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${Ye.toggleContent} ${j?Ye.hidden:Ye.visible}`,children:[l.jsx(rS,{size:24}),Ts&&l.jsx("span",{className:`${Ye.badge} ${j?Ye.fadeOut:""} ${Vo?Ye.entrance:""}`,children:cn.length})]}),l.jsxs("div",{className:`${Ye.controlsContent} ${j?Ye.visible:Ye.hidden} ${nn&&nn.y<100?Ye.tooltipBelow:""} ${Pt||Se?Ye.tooltipsHidden:""} ${si?Ye.tooltipsInSession:""}`,onMouseEnter:Uo,onMouseLeave:Zi,children:[l.jsxs("div",{className:`${Ye.buttonWrapper} ${nn&&nn.x<120?Ye.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),ms(),Ji()},"data-active":te,children:l.jsx(fS,{size:24,isPaused:te})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[te?"Resume animations":"Pause animations",l.jsx("span",{className:Ye.shortcut,children:"P"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:`${Ye.controlButton} ${Bn?"":Ye.light}`,onClick:C=>{C.stopPropagation(),ms(),is&&wn(!1),Se&&Ke(!1),W&&ot(),We?Ms():kt(!0)},"data-active":We,style:We&&ft?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(vS,{size:21})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[We?"Exit layout mode":"Layout mode",l.jsx("span",{className:Ye.shortcut,children:"L"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),ms(),N(!L)},disabled:!en||We,children:l.jsx(dS,{size:24,isOpen:L})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[L?"Hide markers":"Show markers",l.jsx("span",{className:Ye.shortcut,children:"H"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:`${Ye.controlButton} ${_e?Ye.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ms(),uo()},disabled:We&&ft?Qe.length===0&&!((Fs=nt==null?void 0:nt.sections)!=null&&Fs.length):!en&&Jt.length===0&&Qe.length===0&&!((fo=nt==null?void 0:nt.sections)!=null&&fo.length),"data-active":_e,children:l.jsx(cS,{size:24,copied:_e,tint:We&&ft&&(Qe.length>0||(_i=nt==null?void 0:nt.sections)!=null&&_i.length)?"#f97316":void 0})}),l.jsxs("span",{className:Ye.buttonTooltip,children:[We&&ft?"Copy layout":"Copy feedback",l.jsx("span",{className:Ye.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${Ye.buttonWrapper} ${Ye.sendButtonWrapper} ${j&&!qt.webhooksEnabled&&(ia(qt.webhookUrl)||ia(w||""))?Ye.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${Ye.controlButton} ${oe==="sent"||oe==="failed"?Ye.statusShowing:""}`,onClick:C=>{C.stopPropagation(),ms(),An()},disabled:!en||!ia(qt.webhookUrl)&&!ia(w||"")||oe==="sending","data-no-hover":oe==="sent"||oe==="failed",tabIndex:ia(qt.webhookUrl)||ia(w||"")?0:-1,children:[l.jsx(uS,{size:24,state:oe}),en&&oe==="idle"&&l.jsx("span",{className:Ye.buttonBadge,children:T.length})]}),l.jsxs("span",{className:Ye.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:Ye.shortcut,children:"S"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),ms(),Kn()},disabled:!en&&Jt.length===0&&Qe.length===0&&!((Go=nt==null?void 0:nt.sections)!=null&&Go.length),"data-danger":!0,children:l.jsx(mS,{size:24})}),l.jsxs("span",{className:Ye.buttonTooltip,children:["Clear all",l.jsx("span",{className:Ye.shortcut,children:"X"})]})]}),l.jsxs("div",{className:Ye.buttonWrapper,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),ms(),We&&Ms(),Ke(!Se)},children:l.jsx(hS,{size:24})}),_&&Ds!=="disconnected"&&l.jsx("span",{className:`${Ye.mcpIndicator} ${Ye[Ds]} ${Se?Ye.hidden:""}`,title:Ds==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:Ye.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:Ye.divider}),l.jsxs("div",{className:`${Ye.buttonWrapper} ${nn&&typeof window<"u"&&nn.x>window.innerWidth-120?Ye.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:Ye.controlButton,onClick:C=>{C.stopPropagation(),ms(),co()},children:l.jsx(pS,{size:24})}),l.jsxs("span",{className:Ye.buttonTooltip,children:["Exit",l.jsx("span",{className:Ye.shortcut,children:"Esc"})]})]})]}),l.jsx(K4,{visible:We&&j,activeType:Tt,onSelect:C=>{_t(Tt===C?null:C)},isDarkMode:Bn,sectionCount:(ko=nt==null?void 0:nt.sections.length)!=null?ko:0,onDetectSections:()=>{var Ce,ze;const C=r6(),M=(Ce=nt==null?void 0:nt.sections)!=null?Ce:[],D=new Set(M.map(Xe=>Xe.selector)),B=C.filter(Xe=>!D.has(Xe.selector)),U=[...M,...B],re=[...(ze=nt==null?void 0:nt.originalOrder)!=null?ze:[],...B.map(Xe=>Xe.id)];ln({sections:U,originalOrder:re,detectedAt:Date.now()})},placementCount:Qe.length,onClearPlacements:()=>{go(C=>C+1),ni(C=>C+1),Ut(()=>{ln({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:C=>{const M={sections:[],originalOrder:[],detectedAt:Date.now()};C?(No.current={rearrange:nt,placements:Qe},ln(us.current.rearrange||M),Nt(us.current.placements),_t(null)):(us.current={rearrange:nt,placements:Qe},ln(No.current.rearrange||M),Nt(No.current.placements)),Lt(C)},wireframePurpose:Mn,onWireframePurposeChange:$n,Tooltip:jr,onDragStart:(C,M)=>{var jt;M.preventDefault();const D=vt[C];let B=null,U=!1;const re=M.clientX,Ce=M.clientY,ze=M.target.closest("[data-feedback-toolbar]"),Xe=(jt=ze==null?void 0:ze.getBoundingClientRect().top)!=null?jt:window.innerHeight,lt=Et=>{const at=Et.clientX-re,ut=Et.clientY-Ce;if(!U&&(Math.abs(at)>4||Math.abs(ut)>4)&&(U=!0,B=document.createElement("div"),B.className=`${De.dragPreview}${ft?` ${De.dragPreviewWireframe}`:""}`,document.body.appendChild(B)),!B)return;const Qn=Math.max(0,Xe-Et.clientY),Zn=Math.min(1,Qn/180),vs=1-Math.pow(1-Zn,2),bn=28,Hn=20,Xt=Math.min(140,D.width*.18),Gt=Math.min(90,D.height*.18),ws=bn+(Xt-bn)*vs,Sn=Hn+(Gt-Hn)*vs;B.style.width=`${ws}px`,B.style.height=`${Sn}px`,B.style.left=`${Et.clientX-ws/2}px`,B.style.top=`${Et.clientY-Sn/2}px`,B.style.opacity=`${.5+.5*vs}`,B.textContent=vs>.25?C:""},wt=Et=>{if(window.removeEventListener("mousemove",lt),window.removeEventListener("mouseup",wt),B&&document.body.removeChild(B),U){const at=D.width,ut=D.height,Qn=window.scrollY,Zn=Math.max(0,Et.clientX-at/2),vs=Math.max(0,Et.clientY+Qn-ut/2),bn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:C,x:Zn,y:vs,width:at,height:ut,scrollY:Qn,timestamp:Date.now()};Nt(Hn=>[...Hn,bn]),_t(null),Hs.current=new Set,ti(Hn=>Hn+1)}};window.addEventListener("mousemove",lt),window.addEventListener("mouseup",wt)}}),l.jsx(_C,{settings:qt,onSettingsChange:C=>ki(M=>({...M,...C})),isDarkMode:Bn,onToggleTheme:ao,isDevMode:Yo,connectionStatus:Ds,endpoint:_,isVisible:Fe,toolbarNearBottom:!!nn&&nn.y<230,settingsPage:bt,onSettingsPageChange:Ue,onHideToolbar:Pn})]})}),(We||Bt)&&l.jsx("div",{className:`${De.blankCanvas} ${zn?De.visible:""} ${rn?De.gridActive:""}`,style:{"--canvas-opacity":kn},"data-feedback-toolbar":!0}),We&&ft&&zn&&l.jsxs("div",{className:De.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:De.wireframeOpacityRow,children:[l.jsx("span",{className:De.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:De.wireframeOpacitySlider,min:0,max:1,step:.01,value:kn,onChange:C=>cs(Number(C.target.value))})]}),l.jsxs("div",{className:De.wireframeNoticeTitleRow,children:[l.jsx("span",{className:De.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:De.wireframeNoticeDivider}),l.jsx("button",{className:De.wireframeStartOver,onClick:()=>{go(C=>C+1),ln({sections:[],originalOrder:[],detectedAt:Date.now()}),us.current={rearrange:null,placements:[]},$n(""),td(qe)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(We||Bt)&&l.jsx(W4,{placements:Qe,onChange:Nt,activeComponent:Bt?null:Tt,onActiveComponentChange:_t,isDarkMode:Bn,exiting:Bt,onInteractionChange:Tn,passthrough:!Tt,extraSnapRects:nt==null?void 0:nt.sections.map(C=>C.currentRect),deselectSignal:As,clearSignal:io,wireframe:ft,onSelectionChange:(C,M)=>{Hs.current=C,M||(Ns.current=new Set,_o(D=>D+1))},onDragMove:(C,M)=>{const D=Ns.current;if(!(!D.size||!nt)){if(!ds.current){ds.current=new Map;for(const B of nt.sections)D.has(B.id)&&ds.current.set(B.id,{x:B.currentRect.x,y:B.currentRect.y})}for(const B of nt.sections){if(!D.has(B.id)||!ds.current.get(B.id))continue;const re=document.querySelector(`[data-rearrange-section="${B.id}"]`);re&&(re.style.transform=`translate(${C}px, ${M}px)`)}}},onDragEnd:(C,M,D)=>{const B=Ns.current,U=ds.current;if(ds.current=null,!(!B.size||!nt||!U)){for(const re of B){const Ce=document.querySelector(`[data-rearrange-section="${re}"]`);Ce&&(Ce.style.transform="")}D&&ln(re=>re&&{...re,sections:re.sections.map(Ce=>{const ze=U.get(Ce.id);return ze?{...Ce,currentRect:{...Ce.currentRect,x:Math.max(0,ze.x+C),y:Math.max(0,ze.y+M)}}:Ce})})}}}),(We||Bt)&&nt&&l.jsx(u6,{rearrangeState:nt,onChange:ln,isDarkMode:Bn,exiting:Bt,blankCanvas:ft,extraSnapRects:Qe.map(C=>({x:C.x,y:C.y,width:C.width,height:C.height})),clearSignal:vn,deselectSignal:ks,onSelectionChange:(C,M)=>{Ns.current=C,M||(Hs.current=new Set,ti(D=>D+1))},onDragMove:(C,M)=>{const D=Hs.current;if(D.size){if(!ds.current){ds.current=new Map;for(const B of Qe)D.has(B.id)&&ds.current.set(B.id,{x:B.x,y:B.y})}for(const B of D){const U=document.querySelector(`[data-design-placement="${B}"]`);U&&(U.style.transform=`translate(${C}px, ${M}px)`)}}},onDragEnd:(C,M,D)=>{const B=Hs.current,U=ds.current;if(ds.current=null,!(!B.size||!U)){for(const re of B){const Ce=document.querySelector(`[data-design-placement="${re}"]`);Ce&&(Ce.style.transform="")}D&&Nt(re=>re.map(Ce=>{const ze=U.get(Ce.id);return ze?{...Ce,x:Math.max(0,ze.x+C),y:Math.max(0,ze.y+M)}:Ce}))}}}),l.jsx("canvas",{ref:Bo,className:`${Ye.drawCanvas} ${is?Ye.active:""}`,style:{opacity:sn?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:Ye.markersLayer,"data-feedback-toolbar":!0,children:[ae&&cn.filter(C=>!C.isFixed).map((C,M,D)=>l.jsx(o1,{annotation:C,globalIndex:cn.findIndex(B=>B.id===C.id),layerIndex:M,layerSize:D.length,isExiting:ke,isClearing:Pe,isAnimated:Wo.has(C.id),isHovered:!ke&&tt===C.id,isDeleting:mt===C.id,isEditingAny:!!G,renumberFrom:xt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:Ws(C),onHoverEnter:B=>!ke&&B.id!==fe.current&&yt(B),onHoverLeave:()=>yt(null),onClick:B=>qt.markerClickBehavior==="delete"?gt(B.id):ee(B),onContextMenu:ee},C.id)),ae&&!ke&&Os.filter(C=>!C.isFixed).map(C=>l.jsx(i1,{annotation:C},C.id))]}),l.jsxs("div",{className:Ye.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ae&&cn.filter(C=>C.isFixed).map((C,M,D)=>l.jsx(o1,{annotation:C,globalIndex:cn.findIndex(B=>B.id===C.id),layerIndex:M,layerSize:D.length,isExiting:ke,isClearing:Pe,isAnimated:Wo.has(C.id),isHovered:!ke&&tt===C.id,isDeleting:mt===C.id,isEditingAny:!!G,renumberFrom:xt,markerClickBehavior:qt.markerClickBehavior,tooltipStyle:Ws(C),onHoverEnter:B=>!ke&&B.id!==fe.current&&yt(B),onHoverLeave:()=>yt(null),onClick:B=>qt.markerClickBehavior==="delete"?gt(B.id):ee(B),onContextMenu:ee},C.id)),ae&&!ke&&Os.filter(C=>C.isFixed).map(C=>l.jsx(i1,{annotation:C,fixed:!0},C.id))]}),j&&l.jsxs("div",{className:Ye.overlay,"data-feedback-toolbar":!0,style:W||G?{zIndex:99999}:void 0,children:[(Q==null?void 0:Q.rect)&&!W&&!pt&&!Ls&&l.jsx("div",{className:`${Ye.hoverHighlight} ${Ye.enter}`,style:{left:Q.rect.left,top:Q.rect.top,width:Q.rect.width,height:Q.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),In.filter(C=>document.contains(C.element)).map((C,M)=>{const D=C.element.getBoundingClientRect(),B=In.length>1;return l.jsx("div",{className:B?Ye.multiSelectOutline:Ye.singleSelectOutline,style:{position:"fixed",left:D.left,top:D.top,width:D.width,height:D.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},M)}),tt&&!W&&(()=>{var U;const C=T.find(re=>re.id===tt);if(!(C!=null&&C.boundingBox))return null;if((U=C.elementBoundingBoxes)!=null&&U.length)return Ie.length>0?Ie.filter(re=>document.contains(re)).map((re,Ce)=>{const ze=re.getBoundingClientRect();return l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:ze.left,top:ze.top,width:ze.width,height:ze.height}},`hover-outline-live-${Ce}`)}):C.elementBoundingBoxes.map((re,Ce)=>l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:re.x,top:re.y-rt,width:re.width,height:re.height}},`hover-outline-${Ce}`));const M=Ot&&document.contains(Ot)?Ot.getBoundingClientRect():null,D=M?{x:M.left,y:M.top,width:M.width,height:M.height}:{x:C.boundingBox.x,y:C.isFixed?C.boundingBox.y:C.boundingBox.y-rt,width:C.boundingBox.width,height:C.boundingBox.height},B=C.isMultiSelect;return l.jsx("div",{className:`${B?Ye.multiSelectOutline:Ye.singleSelectOutline} ${Ye.enter}`,style:{left:D.x,top:D.y,width:D.width,height:D.height,...B?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Q&&!W&&!pt&&!Ls&&l.jsxs("div",{className:`${Ye.hoverTooltip} ${Ye.enter}`,style:{left:Math.max(8,Math.min($.x,window.innerWidth-100)),top:Math.max($.y-(Q.reactComponents?48:32),8)},children:[Q.reactComponents&&l.jsx("div",{className:Ye.hoverReactPath,children:Q.reactComponents}),l.jsx("div",{className:Ye.hoverElementName,children:Q.elementName})]}),W&&l.jsxs(l.Fragment,{children:[(jo=W.multiSelectElements)!=null&&jo.length?W.multiSelectElements.filter(C=>document.contains(C)).map((C,M)=>{const D=C.getBoundingClientRect();return l.jsx("div",{className:`${Ye.multiSelectOutline} ${Gn?Ye.exit:Ye.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`pending-multi-${M}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const C=W.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${Ye.singleSelectOutline} ${Gn?Ye.exit:Ye.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&l.jsx("div",{className:`${W.isMultiSelect?Ye.multiSelectOutline:Ye.singleSelectOutline} ${Gn?Ye.exit:Ye.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-rt,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const C=W.x,M=W.isFixed?W.y:W.y-rt;return l.jsxs(l.Fragment,{children:[l.jsx(aC,{x:C,y:M,isMultiSelect:W.isMultiSelect,isExiting:Gn}),l.jsx(jd,{ref:Rt,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:xe,onCancel:ot,isExiting:Gn,lightMode:!Bn,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...M>window.innerHeight-290?{bottom:window.innerHeight-M+20}:{top:M+20}}})]})})()]}),G&&l.jsxs(l.Fragment,{children:[(be=G.elementBoundingBoxes)!=null&&be.length?ct.length>0?ct.filter(C=>document.contains(C)).map((C,M)=>{const D=C.getBoundingClientRect();return l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`edit-multi-live-${M}`)}):G.elementBoundingBoxes.map((C,M)=>l.jsx("div",{className:`${Ye.multiSelectOutline} ${Ye.enter}`,style:{left:C.x,top:C.y-rt,width:C.width,height:C.height}},`edit-multi-${M}`)):(()=>{const C=Je&&document.contains(Je)?Je.getBoundingClientRect():null,M=C?{x:C.left,y:C.top,width:C.width,height:C.height}:G.boundingBox?{x:G.boundingBox.x,y:G.isFixed?G.boundingBox.y:G.boundingBox.y-rt,width:G.boundingBox.width,height:G.boundingBox.height}:null;return M?l.jsx("div",{className:`${G.isMultiSelect?Ye.multiSelectOutline:Ye.singleSelectOutline} ${Ye.enter}`,style:{left:M.x,top:M.y,width:M.width,height:M.height,...G.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(jd,{ref:Ht,element:G.element,selectedText:G.selectedText,computedStyles:s6(G.computedStyles),placeholder:"Edit your feedback...",initialValue:G.comment,submitLabel:"Save",onSubmit:Ft,onCancel:qn,onDelete:()=>gt(G.id),isExiting:Fo,lightMode:!Bn,accentColor:G.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const C=G.isFixed?G.y:G.y-rt;return{left:Math.max(160,Math.min(window.innerWidth-160,G.x/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})()})]}),Ls&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:vo,className:Ye.dragSelection}),l.jsx("div",{ref:bs,className:Ye.highlightsContainer})]})]})]}),document.body)}const pp=y.createContext({});function Lc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const xC=typeof window<"u",_p=xC?y.useLayoutEffect:y.useEffect,zd=y.createContext(null);function gp(t,n){t.indexOf(n)===-1&&t.push(n)}function _l(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ua=(t,n,i)=>i>n?n:i<t?t:i;let yp=()=>{};const tr={},db=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function fb(t){return typeof t=="object"&&t!==null}const hb=t=>/^0[^.\s]+$/u.test(t);function mb(t){let n;return()=>(n===void 0&&(n=t()),n)}const $i=t=>t,bC=(t,n)=>i=>n(t(i)),Oc=(...t)=>t.reduce(bC),gl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class xp{constructor(){this.subscriptions=[]}add(n){return gp(this.subscriptions,n),()=>_l(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fi=t=>t*1e3,zi=t=>t/1e3;function pb(t,n){return n?t*(1e3/n):0}const vC=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},_b=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,wC=1e-7,SC=12;function CC(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=_b(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>wC&&++h<SC);return d}function zc(t,n,i,a){if(t===n&&i===a)return $i;const c=u=>CC(u,0,1,t,i);return u=>u===0||u===1?u:_b(c(u),n,a)}const gb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,yb=t=>n=>1-t(1-n),xb=zc(.33,1.53,.69,.99),bp=yb(xb),bb=gb(bp),vb=t=>t>=1?1:(t*=2)<1?.5*bp(t):.5*(2-Math.pow(2,-10*(t-1))),vp=t=>1-Math.sin(Math.acos(t)),wb=yb(vp),Sb=gb(vp),kC=zc(.42,0,1,1),jC=zc(0,0,.58,1),Cb=zc(.42,0,.58,1),kb=t=>Array.isArray(t)&&typeof t[0]!="number";function jb(t,n){return kb(t)?t[vC(0,t.length,n)]:t}const Mb=t=>Array.isArray(t)&&typeof t[0]=="number",MC={linear:$i,easeIn:kC,easeInOut:Cb,easeOut:jC,circIn:vp,circInOut:Sb,circOut:wb,backIn:bp,backInOut:bb,backOut:xb,anticipate:vb},TC=t=>typeof t=="string",c1=t=>{if(Mb(t)){yp(t.length===4);const[n,i,a,c]=t;return zc(n,i,a,c)}else if(TC(t))return MC[t];return t},id=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function EC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const AC=40;function Tb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=id.reduce((L,N)=>(L[N]=EC(u),L),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,j=()=>{const L=tr.useManualTiming,N=L?c.timestamp:performance.now();i=!1,L||(c.delta=a?1e3/60:Math.max(Math.min(N-c.timestamp,AC),1)),c.timestamp=N,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(j))},k=()=>{i=!0,a=!0,c.isProcessing||t(j)};return{schedule:id.reduce((L,N)=>{const Y=d[N];return L[N]=(P,F=!1,V=!1)=>(i||k(),Y.schedule(P,F,V)),L},{}),cancel:L=>{for(let N=0;N<id.length;N++)d[id[N]].cancel(L)},state:c,steps:d}}const{schedule:os,cancel:Ma,state:Do,steps:lm}=Tb(typeof requestAnimationFrame<"u"?requestAnimationFrame:$i,!0);let pd;function DC(){pd=void 0}const Zo={now:()=>(pd===void 0&&Zo.set(Do.isProcessing||tr.useManualTiming?Do.timestamp:performance.now()),pd),set:t=>{pd=t,queueMicrotask(DC)}},Eb=t=>n=>typeof n=="string"&&n.startsWith(t),Ab=Eb("--"),NC=Eb("var(--"),wp=t=>NC(t)?RC.test(t.split("/*")[0].trim()):!1,RC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function u1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const bl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Tc={...bl,transform:t=>ua(0,1,t)},ad={...bl,default:1},vc=t=>Math.round(t*1e5)/1e5,Sp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function BC(t){return t==null}const LC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cp=(t,n)=>i=>!!(typeof i=="string"&&LC.test(i)&&i.startsWith(t)||n&&!BC(i)&&Object.prototype.hasOwnProperty.call(i,n)),Db=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Sp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},OC=t=>ua(0,255,t),cm={...bl,transform:t=>Math.round(OC(t))},Mr={test:Cp("rgb","red"),parse:Db("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+vc(Tc.transform(a))+")"};function zC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Om={test:Cp("#"),parse:zC,transform:Mr.transform},$c=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Qa=$c("deg"),ca=$c("%"),Mt=$c("px"),$C=$c("vh"),IC=$c("vw"),d1={...ca,parse:t=>ca.parse(t)/100,transform:t=>ca.transform(t*100)},dl={test:Cp("hsl","hue"),parse:Db("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+ca.transform(vc(n))+", "+ca.transform(vc(i))+", "+vc(Tc.transform(a))+")"},so={test:t=>Mr.test(t)||Om.test(t)||dl.test(t),parse:t=>Mr.test(t)?Mr.parse(t):dl.test(t)?dl.parse(t):Om.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Mr.transform(t):dl.transform(t),getAnimatableNone:t=>{const n=so.parse(t);return n.alpha=0,so.transform(n)}},PC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Sp))==null?void 0:n.length)||0)+(((i=t.match(PC))==null?void 0:i.length)||0)>0}const Nb="number",Rb="color",UC="var",VC="var(",f1="${}",YC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(YC,p=>(so.test(p)?(a.color.push(u),c.push(Rb),i.push(so.parse(p))):p.startsWith(VC)?(a.var.push(u),c.push(UC),i.push(p)):(a.number.push(u),c.push(Nb),i.push(parseFloat(p))),++u,f1)).split(f1);return{values:i,split:h,indexes:a,types:c}}function WC(t){return yl(t).values}function Bb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Nb?c+=vc(a[u]):d===Rb?c+=so.transform(a[u]):c+=a[u]}return c}}function FC(t){return Bb(yl(t))}const XC=t=>typeof t=="number"?0:so.test(t)?so.getAnimatableNone(t):t,GC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:XC(t);function qC(t){const n=yl(t);return Bb(n)(n.values.map((a,c)=>GC(a,n.split[c])))}const Qi={test:HC,parse:WC,createTransformer:FC,getAnimatableNone:qC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function KC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Ed(t,n){return i=>i>0?n:t}const gs=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},QC=[Om,Mr,dl],ZC=t=>QC.find(n=>n.test(t));function h1(t){const n=ZC(t);if(!n)return!1;let i=n.parse(t);return n===dl&&(i=KC(i)),i}const m1=(t,n)=>{const i=h1(t),a=h1(n);if(!i||!a)return Ed(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=gs(i.alpha,a.alpha,u),Mr.transform(c))},zm=new Set(["none","hidden"]);function JC(t,n){return zm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function e3(t,n){return i=>gs(t,n,i)}function kp(t){return typeof t=="number"?e3:typeof t=="string"?wp(t)?Ed:so.test(t)?m1:s3:Array.isArray(t)?Lb:typeof t=="object"?so.test(t)?m1:t3:Ed}function Lb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>kp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function t3(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=kp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function n3(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const s3=(t,n)=>{const i=Qi.createTransformer(n),a=yl(t),c=yl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?zm.has(t)&&!c.values.length||zm.has(n)&&!a.values.length?JC(t,n):Oc(Lb(n3(a,c),c.values),i):Ed(t,n)};function Ob(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?gs(t,n,i):kp(t)(t,n)}const o3=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>os.update(n,i),stop:()=>Ma(n),now:()=>Do.isProcessing?Do.timestamp:Zo.now()}},zb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ad=2e4;function jp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ad;)n+=i,a=t.next(n);return n>=Ad?1/0:n}function $b(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(jp(a),Ad);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:zi(c)}}const Ps={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function $m(t,n){return t*Math.sqrt(1-n*n)}const i3=12;function a3(t,n,i){let a=i;for(let c=1;c<i3;c++)a=a-t(a)/n(a);return a}const fm=.001;function r3({duration:t=Ps.duration,bounce:n=Ps.bounce,velocity:i=Ps.velocity,mass:a=Ps.mass}){let c,u,d=1-n;d=ua(Ps.minDamping,Ps.maxDamping,d),t=ua(Ps.minDuration,Ps.maxDuration,zi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=$m(g,d),S=Math.exp(-x);return fm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),j=$m(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-w)*S)/j}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=a3(c,u,h);if(t=fi(t),isNaN(p))return{stiffness:Ps.stiffness,damping:Ps.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const l3=["duration","bounce"],c3=["stiffness","damping","mass"];function p1(t,n){return n.some(i=>t[i]!==void 0)}function u3(t){let n={velocity:Ps.velocity,stiffness:Ps.stiffness,damping:Ps.damping,mass:Ps.mass,isResolvedFromDuration:!1,...t};if(!p1(t,c3)&&p1(t,l3))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ua(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ps.mass,stiffness:c,damping:u}}else{const i=r3({...t,velocity:0});n={...n,...i,mass:Ps.mass},n.isResolvedFromDuration=!0}return n}function Ec(t=Ps.visualDuration,n=Ps.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=u3({...i,velocity:-zi(i.velocity||0)}),S=b||0,j=g/(2*Math.sqrt(p*_)),k=d-u,T=zi(Math.sqrt(p/_)),z=Math.abs(k)<5;a||(a=z?Ps.restSpeed.granular:Ps.restSpeed.default),c||(c=z?Ps.restDelta.granular:Ps.restDelta.default);let L,N,Y,P,F,V;if(j<1)Y=$m(T,j),P=(S+j*T*k)/Y,L=ae=>{const ie=Math.exp(-j*T*ae);return d-ie*(P*Math.sin(Y*ae)+k*Math.cos(Y*ae))},F=j*T*P+k*Y,V=j*T*k-P*Y,N=ae=>Math.exp(-j*T*ae)*(F*Math.sin(Y*ae)+V*Math.cos(Y*ae));else if(j===1){L=ie=>d-Math.exp(-T*ie)*(k+(S+T*k)*ie);const ae=S+T*k;N=ie=>Math.exp(-T*ie)*(T*ae*ie-S)}else{const ae=T*Math.sqrt(j*j-1);L=Q=>{const ue=Math.exp(-j*T*Q),$=Math.min(ae*Q,300);return d-ue*((S+j*T*k)*Math.sinh($)+ae*k*Math.cosh($))/ae};const ie=(S+j*T*k)/ae,ke=j*T*ie-k*ae,Be=j*T*k-ie*ae;N=Q=>{const ue=Math.exp(-j*T*Q),$=Math.min(ae*Q,300);return ue*(ke*Math.sinh($)+Be*Math.cosh($))}}const Z={calculatedDuration:w&&x||null,velocity:ae=>fi(N(ae)),next:ae=>{if(!w&&j<1){const ke=Math.exp(-j*T*ae),Be=Math.sin(Y*ae),Q=Math.cos(Y*ae),ue=d-ke*(P*Be+k*Q),$=fi(ke*(F*Be+V*Q));return h.done=Math.abs($)<=a&&Math.abs(d-ue)<=c,h.value=h.done?d:ue,h}const ie=L(ae);if(w)h.done=ae>=x;else{const ke=fi(N(ae));h.done=Math.abs(ke)<=a&&Math.abs(d-ie)<=c}return h.value=h.done?d:ie,h},toString:()=>{const ae=Math.min(jp(Z),Ad),ie=zb(ke=>Z.next(ae*ke).value,ae,30);return ae+"ms "+ie},toTransition:()=>{}};return Z}Ec.applyToOptions=t=>{const n=$b(t,100,Ec);return t.ease=n.ease,t.duration=fi(n.duration),t.type="keyframes",t};const d3=5;function Ib(t,n,i){const a=Math.max(n-d3,0);return pb(i-t(a),n-a)}function Im({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=V=>h!==void 0&&V<h||p!==void 0&&V>p,S=V=>h===void 0?p:p===void 0||Math.abs(h-V)<Math.abs(p-V)?h:p;let j=i*n;const k=x+j,T=d===void 0?k:d(k);T!==k&&(j=T-x);const z=V=>-j*Math.exp(-V/a),L=V=>T+z(V),N=V=>{const Z=z(V),ae=L(V);b.done=Math.abs(Z)<=g,b.value=b.done?T:ae};let Y,P;const F=V=>{w(b.value)&&(Y=V,P=Ec({keyframes:[b.value,S(b.value)],velocity:Ib(L,V,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return F(0),{calculatedDuration:null,next:V=>{let Z=!1;return!P&&Y===void 0&&(Z=!0,N(V),F(V)),Y!==void 0&&V>=Y?P.next(V-Y):(!Z&&N(V),b)}}}function f3(t,n,i){const a=[],c=i||tr.mix||Ob,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||$i:n;h=Oc(p,h)}a.push(h)}return a}function Pb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(yp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=f3(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=gl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(ua(t[0],t[u-1],_)):g}function Hb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=gl(0,n,a);t.push(gs(i,1,c))}}function Ub(t){const n=[0];return Hb(n,t.length-1),n}function h3(t,n){return t.map(i=>i*n)}function m3(t,n){return t.map(()=>n||Cb).splice(0,t.length-1)}function wc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=kb(a)?a.map(c1):c1(a),u={done:!1,value:n[0]},d=h3(i&&i.length===n.length?i:Ub(n),t),h=Pb(d,n,{ease:Array.isArray(c)?c:m3(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const p3=t=>t!==null;function $d(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(p3),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const _3={decay:Im,inertia:Im,tween:wc,keyframes:wc,spring:Ec};function Vb(t){typeof t.type=="string"&&(t.type=_3[t.type])}class Mp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const g3=t=>t/100;class Dd extends Mp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Zo.now()&&this.tick(Zo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Vb(n);const{type:i=wc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||wc;p!==wc&&typeof h[0]!="number"&&(this.mixKeyframes=Oc(g3,Ob(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=jp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:j,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const T=this.currentTime-g*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,N=a;if(x){const V=Math.min(this.currentTime,c)/h;let Z=Math.floor(V),ae=V%1;!ae&&V>=1&&(ae=1),ae===1&&Z--,Z=Math.min(Z,x+1),!!(Z%2)&&(b==="reverse"?(ae=1-ae,w&&(ae-=w/h)):b==="mirror"&&(N=d)),L=ua(0,1,ae)*h}let Y;z?(this.delayState.value=_[0],Y=this.delayState):Y=N.next(L),u&&!z&&(Y.value=u(Y.value));let{done:P}=Y;!z&&p!==null&&(P=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return F&&S!==Im&&(Y.value=$d(_,this.options,k,this.speed)),j&&j(Y.value),F&&this.finish(),Y}then(n,i){return this.finished.then(n,i)}get duration(){return zi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(this.currentTime)}set time(n){n=fi(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ib(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Zo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=zi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=o3,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Zo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function y3(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Tr=t=>t*180/Math.PI,Pm=t=>{const n=Tr(Math.atan2(t[1],t[0]));return Hm(n)},x3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Pm,rotateZ:Pm,skewX:t=>Tr(Math.atan(t[1])),skewY:t=>Tr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Hm=t=>(t=t%360,t<0&&(t+=360),t),_1=Pm,g1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),y1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),b3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:g1,scaleY:y1,scale:t=>(g1(t)+y1(t))/2,rotateX:t=>Hm(Tr(Math.atan2(t[6],t[5]))),rotateY:t=>Hm(Tr(Math.atan2(-t[2],t[0]))),rotateZ:_1,rotate:_1,skewX:t=>Tr(Math.atan(t[4])),skewY:t=>Tr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Um(t){return t.includes("scale")?1:0}function Vm(t,n){if(!t||t==="none")return Um(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=b3,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=x3,c=h}if(!c)return Um(n);const u=a[n],d=c[1].split(",").map(w3);return typeof u=="function"?u(d):d[u]}const v3=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Vm(i,n)};function w3(t){return parseFloat(t.trim())}const vl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wl=new Set(vl),x1=t=>t===bl||t===Mt,S3=new Set(["x","y","z"]),C3=vl.filter(t=>!S3.has(t));function k3(t){const n=[];return C3.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const er={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Vm(n,"x"),y:(t,{transform:n})=>Vm(n,"y")};er.translateX=er.x;er.translateY=er.y;const Er=new Set;let Ym=!1,Wm=!1,Fm=!1;function Yb(){if(Wm){const t=Array.from(Er).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=k3(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Wm=!1,Ym=!1,Er.forEach(t=>t.complete(Fm)),Er.clear()}function Wb(){Er.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Wm=!0)})}function j3(){Fm=!0,Wb(),Yb(),Fm=!1}class Tp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Er.add(this),Ym||(Ym=!0,os.read(Wb),os.resolveKeyframes(Yb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}y3(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Er.delete(this)}cancel(){this.state==="scheduled"&&(Er.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const M3=t=>t.startsWith("--");function Fb(t,n,i){M3(n)?t.style.setProperty(n,i):t.style[n]=i}const T3={};function Xb(t,n){const i=mb(t);return()=>{var a;return(a=T3[n])!=null?a:i()}}const E3=Xb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Gb=Xb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_c=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,b1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_c([0,.65,.55,1]),circOut:_c([.55,0,1,.45]),backIn:_c([.31,.01,.66,-.59]),backOut:_c([.33,1.53,.69,.99])};function qb(t,n){if(t)return typeof t=="function"?Gb()?zb(t,n):"ease-out":Mb(t)?_c(t):Array.isArray(t)?t.map(i=>qb(i,n)||b1.easeOut):b1[t]}function A3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=qb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Ep(t){return typeof t=="function"&&"applyToOptions"in t}function D3({type:t,...n}){var i,a;return Ep(t)&&Gb()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Kb extends Mp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,yp(typeof n.type!="string");const g=D3(n);this.animation=A3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=$d(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Fb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return zi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+zi(n)}get time(){return zi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=fi(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&E3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),$i):c(this)}}const Qb={anticipate:vb,backInOut:bb,circInOut:Sb};function N3(t){return t in Qb}function R3(t){typeof t.ease=="string"&&N3(t.ease)&&(t.ease=Qb[t.ease])}const hm=10;class B3 extends Kb{constructor(n){R3(n),Vb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Dd({...d,autoplay:!1}),p=Math.max(hm,Zo.now()-this.startTime),g=ua(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Fb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const v1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Qi.test(t)||t==="0")&&!t.startsWith("url("));function L3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function O3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=v1(c,n),h=v1(u,n);return!d||!h?!1:L3(t)||(i==="spring"||Ep(i))&&a}function Xm(t){t.duration=0,t.type="keyframes"}const Zb=new Set(["opacity","clipPath","filter","transform"]),z3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function $3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&z3.test(t[n]))return!0;return!1}const I3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),P3=mb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function H3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return P3()&&i&&(Zb.has(i)||I3.has(i)&&$3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const U3=40;class V3 extends Mp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var j,k;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Zo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Tp;this.keyframeResolver=new w(h,(j,k,T)=>this.onKeyframesResolved(j,k,b,!T),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var T,z;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Zo.now();let x=!0;O3(n,u,d,h)||(x=!1,(tr.instantAnimations||!p)&&(_==null||_($d(n,a,i))),n[0]=n[n.length-1],Xm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>U3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&H3(w),j=(z=(T=w.motionValue)==null?void 0:T.owner)==null?void 0:z.current;let k;if(S)try{k=new B3({...w,element:j})}catch{k=new Dd(w)}else k=new Dd(w);k.finished.then(()=>{this.notifyFinished()}).catch($i),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),j3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class Y3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return w1(this.animations,"duration")}get iterationDuration(){return w1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function w1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class W3 extends Y3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Jb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const F3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function X3(t){const n=F3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function e5(t,n,i=1){const[a,c]=X3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return db(d)?parseFloat(d):d}return wp(c)?e5(c,n,i+1):c}const G3={type:"spring",stiffness:500,damping:25,restSpeed:10},q3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),K3={type:"keyframes",duration:.8},Q3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z3=(t,{keyframes:n})=>n.length>2?K3:wl.has(t)?t.startsWith("scale")?q3(n[1]):G3:Q3;function t5(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Ap(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?t5(i,t):i}const J3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function ek(t){for(const n in t)if(!J3.has(n))return!0;return!1}const Dp=(t,n,i,a={},c,u)=>d=>{const h=Ap(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-fi(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};ek(h)||Object.assign(_,Z3(t,_)),_.duration&&(_.duration=fi(_.duration)),_.repeatDelay&&(_.repeatDelay=fi(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Xm(_),_.delay===0&&(x=!0)),(tr.instantAnimations||tr.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Xm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=$d(_.keyframes,h);if(b!==void 0){os.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Dd(_):new V3(_)};function S1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Np(t,n,i,a){if(typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=S1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Ar(t,n,i){const a=t.getProps();return Np(a,n,i!==void 0?i:a.custom,t)}const n5=new Set(["width","height","top","left","right","bottom",...vl]),C1=30,tk=t=>!isNaN(parseFloat(t)),Sc={current:void 0};class nk{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Zo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Zo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=tk(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new xp);const a=this.events[n].add(i);return n==="change"?()=>{a(),os.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Sc.current&&Sc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Zo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>C1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,C1);return pb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(t,n){return new nk(t,n)}const Gm=t=>Array.isArray(t);function sk(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,nr(i))}function ok(t){return Gm(t)?t[t.length-1]||0:t}function ik(t,n){const i=Ar(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=ok(u[d]);sk(t,d,h)}}const po=t=>!!(t&&t.getVelocity);function ak(t){return!!(po(t)&&t.add)}function qm(t,n){const i=t.getValue("willChange");if(ak(i))return i.add(n);if(!i&&tr.WillChange){const a=new tr.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Rp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const rk="framerAppearId",s5="data-"+Rp(rk);function o5(t){return t.props[s5]}function lk({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Bp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?t5(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),j=h[w];if(j===void 0||x&&lk(x,w))continue;const k={delay:i,...Ap(u||{},w)},T=S.get();if(T!==void 0&&!S.isAnimating()&&!Array.isArray(j)&&j===T&&!k.velocity){os.update(()=>S.set(j));continue}let z=!1;if(window.MotionHandoffAnimation){const Y=o5(t);if(Y){const P=window.MotionHandoffAnimation(Y,w,os);P!==null&&(k.startTime=P,z=!0)}}qm(t,w);const L=g!=null?g:t.shouldReduceMotion;S.start(Dp(w,S,j,L&&n5.has(w)?{type:!1}:k,t,z));const N=S.animation;N&&_.push(N)}if(d){const w=()=>os.update(()=>{d&&ik(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Km(t,n,i={}){var p;const a=Ar(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Bp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return ck(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function ck(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Km(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Jb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function uk(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Km(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Km(t,n,i);else{const c=typeof n=="function"?Ar(t,n,i.custom):n;a=Promise.all(Bp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const dk={test:t=>t==="auto",parse:t=>t},i5=t=>n=>n.test(t),a5=[bl,Mt,ca,Qa,IC,$C,dk],k1=t=>a5.find(i5(t));function fk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||hb(t):!0}const hk=new Set(["brightness","contrast","saturate","opacity"]);function mk(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Sp)||[];if(!a)return t;const c=i.replace(a,"");let u=hk.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const pk=/\b([a-z-]*)\(.*?\)/gu,Qm={...Qi,getAnimatableNone:t=>{const n=t.match(pk);return n?n.map(mk).join(" "):t}},Zm={...Qi,getAnimatableNone:t=>{const n=Qi.parse(t);return Qi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},j1={...bl,transform:Math.round},_k={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:ad,scaleX:ad,scaleY:ad,scaleZ:ad,skew:Qa,skewX:Qa,skewY:Qa,distance:Mt,translateX:Mt,translateY:Mt,translateZ:Mt,x:Mt,y:Mt,z:Mt,perspective:Mt,transformPerspective:Mt,opacity:Tc,originX:d1,originY:d1,originZ:Mt},Lp={borderWidth:Mt,borderTopWidth:Mt,borderRightWidth:Mt,borderBottomWidth:Mt,borderLeftWidth:Mt,borderRadius:Mt,borderTopLeftRadius:Mt,borderTopRightRadius:Mt,borderBottomRightRadius:Mt,borderBottomLeftRadius:Mt,width:Mt,maxWidth:Mt,height:Mt,maxHeight:Mt,top:Mt,right:Mt,bottom:Mt,left:Mt,inset:Mt,insetBlock:Mt,insetBlockStart:Mt,insetBlockEnd:Mt,insetInline:Mt,insetInlineStart:Mt,insetInlineEnd:Mt,padding:Mt,paddingTop:Mt,paddingRight:Mt,paddingBottom:Mt,paddingLeft:Mt,paddingBlock:Mt,paddingBlockStart:Mt,paddingBlockEnd:Mt,paddingInline:Mt,paddingInlineStart:Mt,paddingInlineEnd:Mt,margin:Mt,marginTop:Mt,marginRight:Mt,marginBottom:Mt,marginLeft:Mt,marginBlock:Mt,marginBlockStart:Mt,marginBlockEnd:Mt,marginInline:Mt,marginInlineStart:Mt,marginInlineEnd:Mt,fontSize:Mt,backgroundPositionX:Mt,backgroundPositionY:Mt,..._k,zIndex:j1,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:j1},gk={...Lp,color:so,backgroundColor:so,outlineColor:so,fill:so,stroke:so,borderColor:so,borderTopColor:so,borderRightColor:so,borderBottomColor:so,borderLeftColor:so,filter:Qm,WebkitFilter:Qm,mask:Zm,WebkitMask:Zm},r5=t=>gk[t],yk=new Set([Qm,Zm]);function l5(t,n){let i=r5(t);return yk.has(i)||(i=Qi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const xk=new Set(["auto","none","0"]);function bk(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!xk.has(u)&&yl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=l5(i,c)}class vk extends Tp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),wp(x))){const b=e5(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!n5.has(a)||n.length!==2)return;const[c,u]=n,d=k1(c),h=k1(u),p=u1(c),g=u1(u);if(p!==g&&er[a]){this.needsMeasurement=!0;return}if(d!==h)if(x1(d)&&x1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else er[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||fk(n[c]))&&a.push(c);a.length&&bk(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=er[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=er[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function Op(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const c5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function _d(t){return fb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:zp}=Tb(queueMicrotask,!1),qi={x:!1,y:!1};function u5(){return qi.x||qi.y}function wk(t){return t==="x"||t==="y"?qi[t]?null:(qi[t]=!0,()=>{qi[t]=!1}):qi.x||qi.y?null:(qi.x=qi.y=!0,()=>{qi.x=qi.y=!1})}function d5(t,n){const i=Op(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Sk(t){return!(t.pointerType==="touch"||u5())}function Ck(t,n,i={}){const[a,c,u]=d5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},j=k=>{if(!Sk(k))return;p=!1;const T=n(d,k);typeof T=="function"&&(g=T,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",j,c),d.addEventListener("pointerdown",w,c)}),u}const f5=(t,n)=>n?t===n?!0:f5(t,n.parentElement):!1,$p=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,kk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jk(t){return kk.has(t.tagName)||t.isContentEditable===!0}const Mk=new Set(["INPUT","SELECT","TEXTAREA"]);function Tk(t){return Mk.has(t.tagName)||t.isContentEditable===!0}const gd=new WeakSet;function M1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Ek=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=M1(()=>{if(gd.has(i))return;mm(i,"down");const c=M1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function T1(t){return $p(t)&&!u5()}const E1=new WeakSet;function Ak(t,n,i={}){const[a,c,u]=d5(t,i),d=h=>{const p=h.currentTarget;if(!T1(h)||E1.has(h))return;gd.add(p),i.stopPropagation&&E1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),gd.has(p)&&gd.delete(p),T1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||f5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),_d(h)&&(h.addEventListener("focus",g=>Ek(g,c)),!jk(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Id(t){return fb(t)&&"ownerSVGElement"in t}const yd=new WeakMap;let Za;const h5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Id(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Dk=h5("inline","width","offsetWidth"),Nk=h5("block","height","offsetHeight");function Rk({target:t,borderBoxSize:n}){var i;(i=yd.get(t))==null||i.forEach(a=>{a(t,{get width(){return Dk(t,n)},get height(){return Nk(t,n)}})})}function Bk(t){t.forEach(Rk)}function Lk(){typeof ResizeObserver>"u"||(Za=new ResizeObserver(Bk))}function Ok(t,n){Za||Lk();const i=Op(t);return i.forEach(a=>{let c=yd.get(a);c||(c=new Set,yd.set(a,c)),c.add(n),Za==null||Za.observe(a)}),()=>{i.forEach(a=>{const c=yd.get(a);c==null||c.delete(n),c!=null&&c.size||Za==null||Za.unobserve(a)})}}const xd=new Set;let fl;function zk(){fl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};xd.forEach(n=>n(t))},window.addEventListener("resize",fl)}function $k(t){return xd.add(t),fl||zk(),()=>{xd.delete(t),!xd.size&&typeof fl=="function"&&(window.removeEventListener("resize",fl),fl=void 0)}}function A1(t,n){return typeof t=="function"?$k(t):Ok(t,n)}function m5(t){return Id(t)&&t.tagName==="svg"}function Ik(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Pb(c,u,d);return n?h(a):h}const Pk=[...a5,so,Qi],Hk=t=>Pk.find(i5(t)),D1=()=>({translate:0,scale:1,origin:0,originPoint:0}),hl=()=>({x:D1(),y:D1()}),N1=()=>({min:0,max:0}),no=()=>({x:N1(),y:N1()}),Ac=new WeakMap;function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Dc(t){return typeof t=="string"||Array.isArray(t)}const Ip=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pp=["initial",...Ip];function Hd(t){return Pd(t.animate)||Pp.some(n=>Dc(t[n]))}function p5(t){return!!(Hd(t)||t.variants)}function Uk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(po(c))t.addValue(a,c);else if(po(u))t.addValue(a,nr(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,nr(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Jm={current:null},_5={current:!1},Vk=typeof window<"u";function Yk(){if(_5.current=!0,!!Vk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Jm.current=t.matches;t.addEventListener("change",n),n()}else Jm.current=!1}const R1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Nd={};function g5(t){Nd=t}function Wk(){return Nd}class y5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Tp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Zo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,os.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Hd(i),this.isVariantNode=p5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&po(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ac.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_5.current||Yk(),this.shouldReduceMotion=Jm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),Ma(this.notifyUpdate),Ma(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Zb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Kb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:fi(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=wl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&os.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Nd){const i=Nd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):no()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<R1.length;a++){const c=R1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Uk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=nr(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(db(a)||hb(a))?a=parseFloat(a):!Hk(a)&&Qi.test(i)&&(a=l5(n,i)),this.setBaseTarget(n,po(a)?a.get():a)),po(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Np(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!po(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new xp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){zp.render(this.render)}}class x5 extends y5{constructor(){super(...arguments),this.KeyframeResolver=vk}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;po(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class sr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function b5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function Fk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function Xk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function ep({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function Cr(t){return ep(t)||v5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function v5(t){return B1(t.x)||B1(t.y)}function B1(t){return t&&t!=="0%"}function Rd(t,n,i){const a=t-i,c=n*a;return i+c}function L1(t,n,i,a,c){return c!==void 0&&(t=Rd(t,c,a)),Rd(t,i,a)+n}function tp(t,n=0,i=1,a,c){t.min=L1(t.min,n,i,a,c),t.max=L1(t.max,n,i,a,c)}function w5(t,{x:n,y:i}){tp(t.x,n.translate,n.scale,n.originPoint),tp(t.y,i.translate,i.scale,i.originPoint)}const O1=.999999999999,z1=1.0000000000001;function Gk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(ra(t.x,-u.scroll.offset.x),ra(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,w5(t,d)),a&&Cr(u.latestValues)&&bd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<z1&&n.x>O1&&(n.x=1),n.y<z1&&n.y>O1&&(n.y=1)}function ra(t,n){t.min+=n,t.max+=n}function $1(t,n,i,a,c=.5){const u=gs(t.min,t.max,c);tp(t,n,i,u,a)}function I1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function bd(t,n,i){const a=i!=null?i:t;$1(t.x,I1(n.x,a.x),n.scaleX,n.scale,n.originX),$1(t.y,I1(n.y,a.y),n.scaleY,n.scale,n.originY)}function S5(t,n){return b5(Xk(t.getBoundingClientRect(),n))}function qk(t,n,i){const a=S5(t,i),{scroll:c}=n;return c&&(ra(a.x,c.offset.x),ra(a.y,c.offset.y)),a}const Kk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qk=vl.length;function Zk(t,n,i){let a="",c=!0;for(let u=0;u<Qk;u++){const d=vl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=c5(h,Lp[d]);if(!p){c=!1;const _=Kk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Hp(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(wl.has(p)){d=!0;continue}else if(Ab(p)){c[p]=g;continue}else{const _=c5(g,Lp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=Zk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function C5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function P1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const fc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Mt.test(t))t=parseFloat(t);else return t;const i=P1(t,n.target.x),a=P1(t,n.target.y);return`${i}% ${a}%`}},Jk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Qi.parse(t);if(c.length>5)return a;const u=Qi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=gs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},np={borderRadius:{...fc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fc,borderTopRightRadius:fc,borderBottomLeftRadius:fc,borderBottomRightRadius:fc,boxShadow:Jk};function k5(t,{layout:n,layoutId:i}){return wl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!np[t]||t==="opacity")}function Up(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(po(a[h])||c&&po(c[h])||k5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function e8(t){return window.getComputedStyle(t)}class j5 extends x5{constructor(){super(...arguments),this.type="html",this.renderInstance=C5}readValueFromInstance(n,i){var a;if(wl.has(i))return(a=this.projection)!=null&&a.isProjecting?Um(i):v3(n,i);{const c=e8(n),u=(Ab(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return S5(n,i)}build(n,i,a){Hp(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Up(n,i,a)}}function t8(t,n){return t in n}class n8 extends y5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(t8(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return no()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const s8={offset:"stroke-dashoffset",array:"stroke-dasharray"},o8={offset:"strokeDashoffset",array:"strokeDasharray"};function i8(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?s8:o8;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const a8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function M5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Hp(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const j of a8)x[j]!==void 0&&(b[j]=x[j],delete x[j]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&i8(x,c,u,d,!1)}const T5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),E5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function r8(t,n,i,a){C5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(T5.has(c)?c:Rp(c),n.attrs[c])}function A5(t,n,i){const a=Up(t,n,i);for(const c in t)if(po(t[c])||po(n[c])){const u=vl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class D5 extends x5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=no}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(wl.has(i)){const a=r5(i);return a&&a.default||0}return i=T5.has(i)?i:Rp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return A5(n,i,a)}build(n,i,a){M5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){r8(n,i,a,c)}mount(n){this.isSVGTag=E5(n.tagName),super.mount(n)}}const l8=Pp.length;function N5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?N5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<l8;i++){const a=Pp[i],c=t.props[a];(Dc(c)||c===!1)&&(n[a]=c)}return n}function R5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const c8=[...Ip].reverse(),u8=Ip.length;function d8(t){return n=>Promise.all(n.map(({animation:i,options:a})=>uk(t,i,a)))}function f8(t){let n=d8(t),i=H1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=Ar(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:j,...k}=b;_={..._,...k,...j}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=N5(t.parent)||{},b=[],w=new Set;let S={},j=1/0;for(let T=0;T<u8;T++){const z=c8[T],L=i[z],N=_[z]!==void 0?_[z]:x[z],Y=Dc(N),P=z===g?L.isActive:null;P===!1&&(j=T);let F=N===x[z]&&N!==_[z]&&Y;if(F&&(a||c)&&t.manuallyAnimateOnMount&&(F=!1),L.protectedKeys={...S},!L.isActive&&P===null||!N&&!L.prevProp||Pd(N)||typeof N=="boolean")continue;if(z==="exit"&&L.isActive&&P!==!0){L.prevResolvedValues&&(S={...S,...L.prevResolvedValues});continue}const V=h8(L.prevProp,N);let Z=V||z===g&&L.isActive&&!F&&Y||T>j&&Y,ae=!1;const ie=Array.isArray(N)?N:[N];let ke=ie.reduce(u(z),{});P===!1&&(ke={});const{prevResolvedValues:Be={}}=L,Q={...Be,...ke},ue=W=>{Z=!0,w.has(W)&&(ae=!0,w.delete(W)),L.needsAnimating[W]=!0;const K=t.getValue(W);K&&(K.liveStyle=!1)};for(const W in Q){const K=ke[W],_e=Be[W];if(S.hasOwnProperty(W))continue;let R=!1;Gm(K)&&Gm(_e)?R=!R5(K,_e):R=K!==_e,R?K!=null?ue(W):w.add(W):K!==void 0&&w.has(W)?ue(W):L.protectedKeys[W]=!0}L.prevProp=N,L.prevResolvedValues=ke,L.isActive&&(S={...S,...ke}),(a||c)&&t.blockInitialAnimation&&(Z=!1);const $=F&&V;Z&&(!$||ae)&&b.push(...ie.map(W=>{const K={type:z};if(typeof W=="string"&&(a||c)&&!$&&t.manuallyAnimateOnMount&&t.parent){const{parent:_e}=t,R=Ar(_e,W);if(_e.enteringChildren&&R){const{delayChildren:oe}=R.transition||{};K.delay=Jb(_e.enteringChildren,t,oe)}}return{animation:W,options:K}}))}if(w.size){const T={};if(typeof _.initial!="boolean"){const z=Ar(t,Array.isArray(_.initial)?_.initial[0]:_.initial);z&&z.transition&&(T.transition=z.transition)}w.forEach(z=>{const L=t.getBaseTarget(z),N=t.getValue(z);N&&(N.liveStyle=!0),T[z]=L!=null?L:null}),b.push({animation:T})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=H1(),c=!0}}}function h8(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!R5(n,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function H1(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}function sp(t,n){t.min=n.min,t.max=n.max}function Gi(t,n){sp(t.x,n.x),sp(t.y,n.y)}function U1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const B5=1e-4,m8=1-B5,p8=1+B5,L5=.01,_8=0-L5,g8=0+L5;function Jo(t){return t.max-t.min}function y8(t,n,i){return Math.abs(t-n)<=i}function V1(t,n,i,a=.5){t.origin=a,t.originPoint=gs(n.min,n.max,t.origin),t.scale=Jo(i)/Jo(n),t.translate=gs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=m8&&t.scale<=p8||isNaN(t.scale))&&(t.scale=1),(t.translate>=_8&&t.translate<=g8||isNaN(t.translate))&&(t.translate=0)}function Cc(t,n,i,a){V1(t.x,n.x,i.x,a?a.originX:void 0),V1(t.y,n.y,i.y,a?a.originY:void 0)}function Y1(t,n,i,a=0){const c=a?gs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Jo(n)}function x8(t,n,i,a){Y1(t.x,n.x,i.x,a==null?void 0:a.x),Y1(t.y,n.y,i.y,a==null?void 0:a.y)}function W1(t,n,i,a=0){const c=a?gs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Jo(n)}function Bd(t,n,i,a){W1(t.x,n.x,i.x,a==null?void 0:a.x),W1(t.y,n.y,i.y,a==null?void 0:a.y)}function F1(t,n,i,a,c){return t-=n,t=Rd(t,1/i,a),c!==void 0&&(t=Rd(t,1/c,a)),t}function b8(t,n=0,i=1,a=.5,c,u=t,d=t){if(ca.test(n)&&(n=parseFloat(n),n=gs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=gs(u.min,u.max,a);t===u&&(h-=n),t.min=F1(t.min,n,i,h,c),t.max=F1(t.max,n,i,h,c)}function X1(t,n,[i,a,c],u,d){b8(t,n[i],n[a],n[c],n.scale,u,d)}const v8=["x","scaleX","originX"],w8=["y","scaleY","originY"];function G1(t,n,i,a){X1(t.x,n,v8,i?i.x:void 0,a?a.x:void 0),X1(t.y,n,w8,i?i.y:void 0,a?a.y:void 0)}function q1(t){return t.translate===0&&t.scale===1}function O5(t){return q1(t.x)&&q1(t.y)}function K1(t,n){return t.min===n.min&&t.max===n.max}function S8(t,n){return K1(t.x,n.x)&&K1(t.y,n.y)}function Q1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function z5(t,n){return Q1(t.x,n.x)&&Q1(t.y,n.y)}function Z1(t){return Jo(t.x)/Jo(t.y)}function J1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function aa(t){return[t("x"),t("y")]}function C8(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const $5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],k8=$5.length,ex=t=>typeof t=="string"?parseFloat(t):t,tx=t=>typeof t=="number"||Mt.test(t);function j8(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=gs(0,(d=i.opacity)!=null?d:1,M8(a)),t.opacityExit=gs((h=n.opacity)!=null?h:1,0,T8(a))):u&&(t.opacity=gs((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<k8;_++){const x=$5[_];let b=nx(n,x),w=nx(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||tx(b)===tx(w)?(t[x]=Math.max(gs(ex(b),ex(w),a),0),(ca.test(w)||ca.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=gs(n.rotate||0,i.rotate||0,a))}function nx(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const M8=I5(0,.5,wb),T8=I5(.5,.95,$i);function I5(t,n,i){return a=>a<t?0:a>n?1:i(gl(t,n,a))}function P5(t,n,i){const a=po(t)?t:nr(t);return a.start(Dp("",a,n,i)),a.animation}function Nc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const E8=(t,n)=>t.depth-n.depth;class A8{constructor(){this.children=[],this.isDirty=!1}add(n){gp(this.children,n),this.isDirty=!0}remove(n){_l(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(E8),this.isDirty=!1,this.children.forEach(n)}}function D8(t,n){const i=Zo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(Ma(a),t(u-n))};return os.setup(a,!0),()=>Ma(a)}function vd(t){return po(t)?t.get():t}class N8{constructor(){this.members=[]}add(n){gp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(_l(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(_l(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],R8=1e3;let B8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function H5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=o5(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",os,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&H5(a)}function U5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=B8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(z8),this.nodes.forEach(V8),this.nodes.forEach(Y8),this.nodes.forEach($8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new A8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new xp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Id(d)&&!m5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;os.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=D8(b,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(ix)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||q8,{onLayoutAnimationStart:j,onLayoutAnimationComplete:k}=g.getProps(),T=!this.targetLayout||!z5(this.targetLayout,w),z=!x&&b;if(this.options.layoutRoot||this.resumeFrom||z||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Ap(S,"layout"),onPlay:j,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(_,z)}else x||ix(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ma(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(W8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(P8),this.nodes.forEach(sx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ox);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(H8),this.nodes.forEach(U8),this.nodes.forEach(L8),this.nodes.forEach(O8)):this.nodes.forEach(ox),this.clearAllSnapshots();const h=Zo.now();Do.delta=ua(0,1e3/60,h-Do.timestamp),Do.timestamp=h,Do.isProcessing=!0,lm.update.process(Do),lm.preRender.process(Do),lm.render.process(Do),Do.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I8),this.sharedNodes.forEach(F8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,os.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){os.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Jo(this.snapshot.measuredBox.x)&&!Jo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=no()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!O5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Cr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),K8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return no();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(Q8))){const{scroll:_}=this.root;_&&(ra(h.x,_.offset.x),ra(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=no();if(Gi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Gi(h,d),ra(h.x,x.offset.x),ra(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||no();Gi(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ra(g.x,-w.scroll.offset.x),ra(g.y,-w.scroll.offset.y)),Cr(w.latestValues)&&bd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return Cr(this.latestValues)&&bd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=no();Gi(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!Cr(_.latestValues))continue;let x;_.instance&&(ep(_.latestValues)&&_.updateSnapshot(),x=no(),Gi(x,_.measurePageBox())),G1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return Cr(this.latestValues)&&G1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Do.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Do.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=no(),this.targetWithTransforms=no()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),x8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Gi(this.target,this.layout.layoutBox),w5(this.target,this.targetDelta)):Gi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ep(this.parent.latestValues)||v5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=no(),this.relativeTargetOrigin=no(),Bd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Gi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Do.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Gi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;Gk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=no());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(U1(this.prevProjectionDelta.x,this.projectionDelta.x),U1(this.prevProjectionDelta.y,this.projectionDelta.y)),Cc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!J1(this.projectionDelta.x,this.prevProjectionDelta.x)||!J1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hl(),this.projectionDelta=hl(),this.projectionDeltaWithTransform=hl()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=hl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=no(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=w!==S,k=this.getStack(),T=!k||k.members.length<=1,z=!!(j&&!T&&this.options.crossfade===!0&&!this.path.some(G8));this.animationProgress=0;let L;this.mixTargetDelta=N=>{const Y=N/1e3;ax(x.x,d.x,Y),ax(x.y,d.y,Y),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),X8(this.relativeTarget,this.relativeTargetOrigin,b,Y),L&&S8(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=no()),Gi(L,this.relativeTarget)),j&&(this.animationValues=_,j8(_,g,this.latestValues,Y,z,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Ma(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=os.update(()=>{wd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.motionValue.jump(0,!1),this.currentAnimation=P5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(R8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&V5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||no();const x=Jo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Jo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Gi(h,p),bd(h,_),Cc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new N8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,j;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=vd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=C8(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(j=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?j:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in np){if(_[k]===void 0)continue;const{correct:T,applyTo:z,isCSSVariable:L}=np[k],N=x==="none"?_[k]:T(_[k],g);if(z){const Y=z.length;for(let P=0;P<Y;P++)d[z[P]]=N}else L?this.options.visualElement.renderState.vars[k]=N:d[k]=N}this.options.layoutId&&(d.pointerEvents=g===this?vd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(sx),this.root.sharedNodes.clear()}}}function L8(t){t.updateLayout()}function O8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Jo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";sp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else V5(u,n.layoutBox,a)&&aa(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Jo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=hl();Cc(h,a,n.layoutBox);const p=hl();d?Cc(p,t.applyTransform(c,!0),n.measuredBox):Cc(p,a,n.layoutBox);const g=!O5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,j=no();Bd(j,n.layoutBox,b.layoutBox,S);const k=no();Bd(k,a,w.layoutBox,S),z5(j,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function z8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function $8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function I8(t){t.clearSnapshot()}function sx(t){t.clearMeasurements()}function P8(t){t.isLayoutDirty=!0,t.updateLayout()}function ox(t){t.isLayoutDirty=!1}function H8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function U8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function ix(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function V8(t){t.resolveTargetDelta()}function Y8(t){t.calcProjection()}function W8(t){t.resetSkewAndRotation()}function F8(t){t.removeLeadSnapshot()}function ax(t,n,i){t.translate=gs(n.translate,0,i),t.scale=gs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function rx(t,n,i,a){t.min=gs(n.min,i.min,a),t.max=gs(n.max,i.max,a)}function X8(t,n,i,a){rx(t.x,n.x,i.x,a),rx(t.y,n.y,i.y,a)}function G8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const q8={duration:.45,ease:[.4,0,.1,1]},lx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cx=lx("applewebkit/")&&!lx("chrome/")?Math.round:$i;function ux(t){t.min=cx(t.min),t.max=cx(t.max)}function K8(t){ux(t.x),ux(t.y)}function V5(t,n,i){return t==="position"||t==="preserve-aspect"&&!y8(Z1(n),Z1(i),.2)}function Q8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const Z8=U5({attachResizeListener:(t,n)=>Nc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},Y5=U5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new Z8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ud=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function dx(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function J8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=dx(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():dx(t[c],null)}}}}function ej(...t){return y.useCallback(J8(...t),t)}class tj extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(_d(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=_d(a)&&a.offsetWidth||0,u=_d(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function nj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Ud),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=ej(h,_);return y.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:T,right:z,bottom:L}=p.current;if(n||u===!1||!h.current||!S||!j)return;const N=i==="left"?`left: ${T}`:`right: ${z}`,Y=a==="bottom"?`bottom: ${L}`:`top: ${k}`;h.current.dataset.motionPopId=d;const P=document.createElement("style");g&&(P.nonce=g);const F=c!=null?c:document.head;return F.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${N}px !important;
            ${Y}px !important;
          }
        `),()=>{var V;(V=h.current)==null||V.removeAttribute("data-motion-pop-id"),F.contains(P)&&F.removeChild(P)}},[n]),l.jsx(tj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const sj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Lc(oj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const j of _.values())if(!j)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,j)=>_.set(j,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(nj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(zd.Provider,{value:w,children:t})};function oj(){return new Map}function W5(t=!0){const n=y.useContext(zd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const rd=t=>t.key||"";function fx(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Vd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=W5(d),b=y.useMemo(()=>fx(t),[t]),w=d&&!_?[]:b.map(rd),S=y.useRef(!0),j=y.useRef(b),k=Lc(()=>new Map),T=y.useRef(new Set),[z,L]=y.useState(b),[N,Y]=y.useState(b);_p(()=>{S.current=!1,j.current=b;for(let V=0;V<N.length;V++){const Z=rd(N[V]);w.includes(Z)?(k.delete(Z),T.current.delete(Z)):k.get(Z)!==!0&&k.set(Z,!1)}},[N,w.length,w.join("-")]);const P=[];if(b!==z){let V=[...b];for(let Z=0;Z<N.length;Z++){const ae=N[Z],ie=rd(ae);w.includes(ie)||(V.splice(Z,0,ae),P.push(ae))}return u==="wait"&&P.length&&(V=P),Y(fx(V)),L(b),null}const{forceRender:F}=y.useContext(pp);return l.jsx(l.Fragment,{children:N.map(V=>{const Z=rd(V),ae=d&&!_?!1:b===N||w.includes(Z),ie=()=>{if(T.current.has(Z))return;if(k.has(Z))T.current.add(Z),k.set(Z,!0);else return;let ke=!0;k.forEach(Be=>{Be||(ke=!1)}),ke&&(F==null||F(),Y(j.current),d&&(x==null||x()),a&&a())};return l.jsx(sj,{isPresent:ae,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:ae?void 0:ie,anchorX:h,anchorY:p,children:V},Z)})})},F5=y.createContext({strict:!1}),hx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let mx=!1;function ij(){if(mx)return;const t={};for(const n in hx)t[n]={isEnabled:i=>hx[n].some(a=>!!i[a])};g5(t),mx=!0}function X5(){return ij(),Wk()}function aj(t){const n=X5();for(const i in t)n[i]={...n[i],...t[i]};g5(n)}const rj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ld(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||rj.has(t)}let G5=t=>!Ld(t);function lj(t){typeof t=="function"&&(G5=n=>n.startsWith("on")?!Ld(n):t(n))}try{lj(require("@emotion/is-prop-valid").default)}catch{}function cj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||po(t[c])||(G5(c)||i===!0&&Ld(c)||!n&&!Ld(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Yd=y.createContext({});function uj(t,n){if(Hd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Dc(i)?i:void 0,animate:Dc(a)?a:void 0}}return t.inherit!==!1?n:{}}function dj(t){const{initial:n,animate:i}=uj(t,y.useContext(Yd));return y.useMemo(()=>({initial:n,animate:i}),[px(n),px(i)])}function px(t){return Array.isArray(t)?t.join(" "):t}const Vp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q5(t,n,i){for(const a in n)!po(n[a])&&!k5(a,i)&&(t[a]=n[a])}function fj({transformTemplate:t},n){return y.useMemo(()=>{const i=Vp();return Hp(i,n,t),Object.assign({},i.vars,i.style)},[n])}function hj(t,n){const i=t.style||{},a={};return q5(a,i,t),Object.assign(a,fj(t,n)),a}function mj(t,n){const i={},a=hj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const K5=()=>({...Vp(),attrs:{}});function pj(t,n,i,a){const c=y.useMemo(()=>{const u=K5();return M5(u,n,E5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};q5(u,t.style,t),c.style={...u,...c.style}}return c}const _j=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yp(t){return typeof t!="string"||t.includes("-")?!1:!!(_j.indexOf(t)>-1||/[A-Z]/u.test(t))}function gj(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Yp(t))?pj:mj)(n,a,c,t),g=cj(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>po(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function yj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:xj(i,a,c,t),renderState:n()}}function xj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=vd(u[b]);let{initial:d,animate:h}=t;const p=Hd(t),g=p5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Pd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Np(t,b[w]);if(S){const{transitionEnd:j,transition:k,...T}=S;for(const z in T){let L=T[z];if(Array.isArray(L)){const N=_?L.length-1:0;L=L[N]}L!==null&&(c[z]=L)}for(const z in j)c[z]=j[z]}}}return c}const Q5=t=>(n,i)=>{const a=y.useContext(Yd),c=y.useContext(zd),u=()=>yj(t,n,a,c);return i?u():Lc(u)},bj=Q5({scrapeMotionValuesFromProps:Up,createRenderState:Vp}),vj=Q5({scrapeMotionValuesFromProps:A5,createRenderState:K5}),wj=Symbol.for("motionComponentSymbol");function Sj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const Z5=y.createContext({});function cl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Cj(t,n,i,a,c,u){var L,N;const{visualElement:d}=y.useContext(Yd),h=y.useContext(F5),p=y.useContext(zd),g=y.useContext(Ud),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,j=y.useContext(Z5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&kj(b.current,i,c,j);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const T=i[s5],z=y.useRef(!!T&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,T))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,T)));return _p(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),z.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!z.current&&S.animationState&&S.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,T)}),z.current=!1),S.enteringChildren=void 0)}),S}function kj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:J5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&cl(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function J5(t){if(t)return t.options.allowProjection!==!1?t.projection:J5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&aj(a);const u=i?i==="svg":Yp(t),d=u?vj:bj;function h(x,b){let w;const S={...y.useContext(Ud),...x,layoutId:jj(x)},{isStatic:j}=S,k=dj(x),T=d(x,j);if(!j&&typeof window<"u"){Mj();const z=Tj(S);w=z.MeasureLayout,k.visualElement=Cj(t,T,S,c,z.ProjectionNode,u)}return l.jsxs(Yd.Provider,{value:k,children:[w&&k.visualElement?l.jsx(w,{visualElement:k.visualElement,...S}):null,gj(t,x,Sj(T,k.visualElement,b),T,j,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[wj]=t,p}function jj({layoutId:t}){const n=y.useContext(pp).id;return n&&t!==void 0?n+"-"+t:t}function Mj(t,n){y.useContext(F5).strict}function Tj(t){const n=X5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Ej(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const Aj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Yp(t))?new D5(n):new j5(n,{allowProjection:t!==y.Fragment})};class Dj extends sr{constructor(n){super(n),n.animationState||(n.animationState=f8(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Pd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let Nj=0;class Rj extends sr{constructor(){super(...arguments),this.id=Nj++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Ar(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Bj={animation:{Feature:Dj},exit:{Feature:Rj}};function Ic(t){return{point:{x:t.pageX,y:t.pageY}}}const Lj=t=>n=>$p(n)&&t(n,Ic(n));function kc(t,n,i,a){return Nc(t,n,Lj(i),a)}const e2=({current:t})=>t?t.ownerDocument.defaultView:null,_x=(t,n)=>Math.abs(t-n);function Oj(t,n){const i=_x(t.x,n.x),a=_x(t.y,n.y);return Math.sqrt(i**2+a**2)}const gx=new Set(["auto","scroll"]);class t2{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ld(this.lastRawMoveEventInfo,this.transformPagePoint));const w=bm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=Oj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:k}=w,{timestamp:T}=Do;this.history.push({...k,timestamp:T});const{onStart:z,onMove:L}=this.handlers;S||(z&&z(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ld(S,this.transformPagePoint),os.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:j,onSessionEnd:k,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const z=bm(w.type==="pointercancel"?this.lastMoveEventInfo:ld(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,z),k&&k(w,z)},!$p(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ic(n),g=ld(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=Do;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=Oc(kc(this.contextWindow,"pointermove",this.handlePointerMove),kc(this.contextWindow,"pointerup",this.handlePointerUp),kc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(gx.has(a.overflowX)||gx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),os.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ma(this.updatePoint)}}function ld(t,n){return n?{point:n(t.point)}:t}function yx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:yx(t,n2(n)),offset:yx(t,zj(n)),velocity:$j(n,.1)}}function zj(t){return t[0]}function n2(t){return t[t.length-1]}function $j(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=n2(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>fi(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>fi(n)*2&&(a=t[1]);const u=zi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ij(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?gs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?gs(i,t,a.max):Math.min(t,i)),t}function xx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function Pj(t,{top:n,left:i,bottom:a,right:c}){return{x:xx(t.x,i,c),y:xx(t.y,n,a)}}function bx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function Hj(t,n){return{x:bx(t.x,n.x),y:bx(t.y,n.y)}}function Uj(t,n){let i=.5;const a=Jo(t),c=Jo(n);return c>a?i=gl(n.min,n.max-a,t.min):a>c&&(i=gl(t.min,t.max-c,n.min)),ua(0,1,i)}function Vj(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const op=.35;function Yj(t=op){return t===!1?t=0:t===!0&&(t=op),{x:vx(t,"left","right"),y:vx(t,"top","bottom")}}function vx(t,n,i){return{min:wx(t,n),max:wx(t,i)}}function wx(t,n){return typeof t=="number"?t:t[n]||0}const Wj=new WeakMap;class Fj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=no(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ic(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wk(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(T=>{let z=this.getAxisMotionValue(T).get()||0;if(ca.test(z)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[T];N&&(z=Jo(N)*(parseFloat(z)/100))}}this.originPoint[T]=z}),j&&os.update(()=>j(x,b),!1,!0),qm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:T}=b;if(S&&this.currentDirection===null){this.currentDirection=Gj(T),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),k&&os.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new t2(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:e2(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&os.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!cd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=Ij(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&cl(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Pj(a.layoutBox,n):this.constraints=!1,this.elastic=Yj(i),c!==this.constraints&&!cl(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Vj(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!cl(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=qk(a,c.root,this.visualElement.getTransformPagePoint());let d=Hj(c.layout.layoutBox,u);if(i){const h=i(Fk(d));this.hasMutatedConstraints=!!h,h&&(d=b5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=aa(_=>{if(!cd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return qm(this.visualElement,n),a.start(Dp(n,a,0,i,this.visualElement,!1))}stopAnimation(){aa(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){aa(i=>{const{drag:a}=this.getProps();if(!cd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-gs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!cl(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};aa(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=Uj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(d=>{if(!cd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(gs(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Wj.set(this.visualElement,this);const n=this.visualElement.current,i=kc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&Tk(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();cl(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Xj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),os.read(c);const h=Nc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(aa(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=op,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function Sx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function Xj(t,n,i){const a=A1(t,Sx(i)),c=A1(n,Sx(i));return()=>{a(),c()}}function cd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function Gj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class qj extends sr{constructor(n){super(n),this.removeGroupControls=$i,this.removeListeners=$i,this.controls=new Fj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$i}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&os.update(()=>t(n,i),!1,!0)};class Kj extends sr{constructor(){super(...arguments),this.removePointerDownListener=$i}onPointerDown(n){this.session=new t2(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e2(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&os.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=kc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class Qj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||os.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),zp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function s2(t){const[n,i]=W5(),a=y.useContext(pp);return l.jsx(Qj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(Z5),isPresent:n,safeToRemove:i})}const Zj={pan:{Feature:Kj},drag:{Feature:qj,ProjectionNode:Y5,MeasureLayout:s2}};function Cx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class Jj extends sr{mount(){const{current:n}=this.node;n&&(this.unmount=Ck(n,(i,a)=>(Cx(this.node,a,"Start"),c=>Cx(this.node,c,"End"))))}unmount(){}}class eM extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(Nc(this.node.current,"focus",()=>this.onFocus()),Nc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&os.postRender(()=>u(n,Ic(n)))}class tM extends sr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Ak(n,(c,u)=>(kx(this.node,u,"Start"),(d,{success:h})=>kx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ip=new WeakMap,Sm=new WeakMap,nM=t=>{const n=ip.get(t.target);n&&n(t)},sM=t=>{t.forEach(nM)};function oM({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(sM,{root:t,...n})),a[c]}function iM(t,n,i){const a=oM(n);return ip.set(t,i),a.observe(t),()=>{ip.delete(t),a.unobserve(t)}}const aM={some:0,all:1};class rM extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:aM[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=iM(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(lM(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function lM({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const cM={inView:{Feature:rM},tap:{Feature:tM},focus:{Feature:eM},hover:{Feature:Jj}},uM={layout:{ProjectionNode:Y5,MeasureLayout:s2}},dM={...Bj,...cM,...Zj,...uM},di=Ej(dM,Aj);function ap(t){const n=Lc(()=>nr(t)),{isStatic:i}=y.useContext(Ud);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function o2(t,n){const i=ap(n()),a=()=>i.set(n());return a(),_p(()=>{const c=()=>os.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),Ma(a)}}),i}function fM(t){Sc.current=[],t();const n=o2(Sc.current,t);return Sc.current=void 0,n}function ud(t,n,i,a){if(typeof t=="function")return fM(t);const u=typeof n=="function"?n:Ik(n,i,a),d=Array.isArray(t)?jx(t,u):jx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function jx(t,n){const i=Lc(()=>[]);return o2(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Wp(t){return typeof t=="object"&&!Array.isArray(t)}function i2(t,n,i,a){return t==null?[]:typeof t=="string"&&Wp(n)?Op(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function hM(t,n,i){return t*(n+1)}function Mx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function mM(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(_l(t,c),a--)}}function pM(t,n,i,a,c,u){mM(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:gs(c,u,a[d]),easing:jb(i,d)})}function _M(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function gM(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const yM="easeInOut";function xM(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,Mx(x,S.at,_,g));continue}let[j,k,T={}]=S;T.at!==void 0&&(x=Mx(x,T.at,_,g));let z=0;const L=(N,Y,P,F=0,V=0)=>{const Z=bM(N),{delay:ae=0,times:ie=Ub(Z),type:ke=n.type||"keyframes",repeat:Be,repeatType:Q,repeatDelay:ue=0,...$}=Y;let{ease:se=n.ease||"easeOut",duration:W}=Y;const K=typeof ae=="function"?ae(F,V):ae,_e=Z.length,R=Ep(ke)?ke:c==null?void 0:c[ke||"keyframes"];if(_e<=2&&R){let Ne=100;if(_e===2&&SM(Z)){const tt=Z[1]-Z[0];Ne=Math.abs(tt)}const Pe={...n,...$};W!==void 0&&(Pe.duration=fi(W));const Re=$b(Pe,Ne,R);se=Re.ease,W=Re.duration}W!=null||(W=u);const oe=x+K;ie.length===1&&ie[0]===0&&(ie[1]=1);const le=ie.length-Z.length;if(le>0&&Hb(ie,le),Z.length===1&&Z.unshift(null),Be){W=hM(W,Be);const Ne=[...Z],Pe=[...ie];se=Array.isArray(se)?[...se]:[se];const Re=[...se];for(let tt=0;tt<Be;tt++){Z.push(...Ne);for(let dt=0;dt<Ne.length;dt++)ie.push(Pe[dt]+(tt+1)),se.push(dt===0?"linear":jb(Re,dt-1))}_M(ie,Be)}const de=oe+W;pM(P,Z,se,ie,oe,de),z=Math.max(K+W,z),b=Math.max(de,b)};if(po(j)){const N=Tx(j,h);L(k,T,Ex("default",N))}else{const N=i2(j,k,a,p),Y=N.length;for(let P=0;P<Y;P++){k=k,T=T;const F=N[P],V=Tx(F,h);for(const Z in k)L(k[Z],vM(T,Z),Ex(Z,V),P,Y)}}_=x,x+=z}return h.forEach((w,S)=>{for(const j in w){const k=w[j];k.sort(gM);const T=[],z=[],L=[];for(let F=0;F<k.length;F++){const{at:V,value:Z,easing:ae}=k[F];T.push(Z),z.push(gl(0,b,V)),L.push(ae||"easeOut")}z[0]!==0&&(z.unshift(0),T.unshift(T[0]),L.unshift(yM)),z[z.length-1]!==1&&(z.push(1),T.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const N=d.get(S);N.keyframes[j]=T;const{type:Y,...P}=n;N.transition[j]={...P,duration:b,ease:L,times:z,...i}}}),d}function Tx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Ex(t,n){return n[t]||(n[t]=[]),n[t]}function bM(t){return Array.isArray(t)?t:[t]}function vM(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const wM=t=>typeof t=="number",SM=t=>t.every(wM);function CM(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Id(t)&&!m5(t)?new D5(n):new j5(n);i.mount(t),Ac.set(t,i)}function kM(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new n8(n);i.mount(t),Ac.set(t,i)}function jM(t,n){return po(t)||typeof t=="number"||typeof t=="string"&&!Wp(n)}function a2(t,n,i,a){const c=[];if(jM(t,n))c.push(P5(t,Wp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=i2(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?CM:kM;Ac.has(p)||g(p);const _=Ac.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Bp(_,{...n,transition:x},{}))}}return c}function MM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=nr(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return xM(c,n,i,{spring:Ec}).forEach(({keyframes:d,transition:h},p)=>{a.push(...a2(p,d,h))}),a}function TM(t){return Array.isArray(t)&&t.some(Array.isArray)}function EM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(TM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=MM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=a2(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new W3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{_l(n.animations,g)})),g}return a}const Ax=EM();var AM=Object.freeze({}),DM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const j=w.slice(0,-7),k=d.get(j);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:AM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},Zt=new DM;function NM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(Zt.registerPanel(c,t,u.current,p.current),()=>Zt.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}Zt.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>Zt.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>Zt.subscribe(c,b),()=>Zt.getValues(c),()=>Zt.getValues(c));return r2(n,x,"")}function r2(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,j]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(j)&&j.length<=4&&typeof j[0]=="number")a[S]=(c=n[k])!=null?c:j[0];else if(typeof j=="number"||typeof j=="boolean"||typeof j=="string")a[S]=(u=n[k])!=null?u:j;else if(RM(j)||BM(j))a[S]=(d=n[k])!=null?d:j;else if(LM(j))a[S]=(h=n[k])!=null?h:j;else if(OM(j)){const T=(p=j.default)!=null?p:IM(j.options);a[S]=(g=n[k])!=null?g:T}else zM(j)?a[S]=(x=(_=n[k])!=null?_:j.default)!=null?x:"#000000":$M(j)?a[S]=(w=(b=n[k])!=null?b:j.default)!=null?w:"":typeof j=="object"&&j!==null&&(a[S]=r2(j,n,k))}return a}function Sl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function RM(t){return Sl(t,"spring")}function BM(t){return Sl(t,"easing")}function LM(t){return Sl(t,"action")}function OM(t){return Sl(t,"select")&&"options"in t&&Array.isArray(t.options)}function zM(t){return Sl(t,"color")}function $M(t){return Sl(t,"text")}function IM(t){const n=t[0];return typeof n=="string"?n:n.value}function rp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function Sd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(rp(n)))}function hc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function mc(t,n,i,a,c){var g,_;const u=Zt.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));Zt.updateValue(t,n,Sd(p,a))}function PM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function dd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function l2(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=l2(i.children,n);if(a)return a}}return null}var fd=4;function HM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function UM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=HM(n);return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function VM(t){return t.key?`${c2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function c2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var u2=y.createContext({activePanelId:null,activePath:null});function YM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=Zt.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const j=l2(b.controls,w);if(j&&j.type==="slider")return{panelId:b.id,path:w,control:j,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=j=>{if(dd())return;const k=j.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const N=h("scroll")||h("drag")||h("move");if(N&&N.control.type==="slider"){j.preventDefault();const Y=k==="arrowright"||k==="arrowup"?1:-1,P=hc(N.control,N.shortcut);mc(N.panelId,N.path,N.control,P,Y);return}}const T=a.current.has(k);a.current.add(k);const z=Cm(j),L=Zt.resolveShortcutTarget(k,z);if(L&&(i({activePanelId:L.panelId,activePath:L.path}),!T&&L.control.type==="toggle")){const N=Zt.getValue(L.panelId,L.path);Zt.updateValue(L.panelId,L.path,!N)}T||(u.current=null,d.current=0)},g=j=>{const k=j.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let T=!1;for(const z of a.current){const L=Cm(j),N=Zt.resolveShortcutTarget(z,L);if(N){i({activePanelId:N.panelId,activePath:N.path}),T=!0;break}}T||i({activePanelId:null,activePath:null})}},_=j=>{var z,L;if(dd())return;const k=Cm(j);if(a.current.size>0)for(const N of a.current){const Y=Zt.resolveShortcutTarget(N,k);if(!Y)continue;const{panelId:P,path:F,control:V}=Y;if(((L=(z=V.shortcut)==null?void 0:z.interaction)!=null?L:"scroll")!=="scroll"||V.type!=="slider")continue;j.preventDefault();const ae=hc(V,V.shortcut),ie=j.deltaY>0?-1:1;mc(P,F,V,ae,ie);return}const T=Zt.resolveScrollOnlyTargets();for(const{panelId:N,path:Y,control:P,shortcut:F}of T){if(P.type!=="slider")continue;j.preventDefault();const V=hc(P,F),Z=j.deltaY>0?-1:1;mc(N,Y,P,V,Z);return}},x=j=>{if(dd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=j.clientX,d.current=0,j.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=j=>{if(dd()||a.current.size===0)return;if(c.current){const T=h("drag");if(T&&u.current!==null){const z=j.clientX-u.current;u.current=j.clientX,d.current+=z;const L=hc(T.control,T.shortcut),N=Math.trunc(d.current/fd);N!==0&&(d.current-=N*fd,mc(T.panelId,T.path,T.control,L,N))}return}const k=h("move");if(k){if(u.current===null){u.current=j.clientX;return}const T=j.clientX-u.current;u.current=j.clientX,d.current+=T;const z=hc(k.control,k.shortcut),L=Math.trunc(d.current/fd);L!==0&&(d.current-=L*fd,mc(k.panelId,k.path,k.control,z,L))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(u2.Provider,{value:n,children:t})}var Fp="M6 9.5L12 15.5L18 9.5",WM="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},FM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],XM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Dx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Od({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,j]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const z=()=>j(window.innerHeight);return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[a]),y.useEffect(()=>{const z=x.current;if(!z)return;const L=new ResizeObserver(()=>{if(h){const N=z.offsetHeight;w(Y=>Y===N?Y:N)}});return L.observe(z),()=>L.disconnect()},[h]);const k=()=>{if(c&&a)return;const z=!h;p(z),_(!z),u==null||u(z)},T=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:Dx.path,fill:"currentColor"}),Dx.circles.map((z,L)=>l.jsx("circle",{cx:z.cx,cy:z.cy,r:z.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},L))]}),!a&&l.jsx(di.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Fp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:z=>z.stopPropagation(),children:d})]}),l.jsx(Vd,{initial:!1,children:h&&l.jsx(di.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:T});const z=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(di.div,{className:"dialkit-panel-inner",style:z,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:T})}return T}var GM=3,qM=32,KM=200,QM=8;function Po({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var st;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,j]=y.useState(!1),[k,T]=y.useState(!1),[z,L]=y.useState(!1),[N,Y]=y.useState(!1),[P,F]=y.useState(!1),[V,Z]=y.useState(!1),[ae,ie]=y.useState(""),ke=y.useRef(null),Be=y.useRef(null),Q=y.useRef(!0),ue=y.useRef(null),$=y.useRef(null),se=y.useRef(1),W=(n-a)/(c-a)*100,K=S||z,_e=ap(W),R=ud(_e,H=>`${H}%`),oe=ud(_e,H=>`max(5px, calc(${H}% - 9px))`),le=ap(0),de=ud(le,H=>`calc(100% + ${Math.abs(H)}px)`),Ne=ud(le,H=>H<0?H:0);y.useEffect(()=>{!S&&!ue.current&&_e.jump(W)},[W,S,_e]);const Pe=y.useCallback(H=>{const te=$.current;if(!te)return n;const Se=(H-te.left)/se.current,Ke=g.current?g.current.offsetWidth:te.width,Fe=Math.max(0,Math.min(1,Se/Ke)),Le=a+Fe*(c-a);return Math.max(a,Math.min(c,Le))},[a,c,n]),Re=y.useCallback(H=>(H-a)/(c-a)*100,[a,c]),tt=y.useCallback((H,te)=>{const me=$.current;if(!me)return 0;const Se=te<0?me.left-H:H-me.right,Ke=Math.max(0,Se-qM);return te*QM*Math.sqrt(Math.min(Ke/KM,1))},[]),dt=y.useCallback(H=>{if(!V&&(H.preventDefault(),H.target.setPointerCapture(H.pointerId),Be.current={x:H.clientX,y:H.clientY},Q.current=!0,j(!0),g.current)){$.current=g.current.getBoundingClientRect();const te=g.current.offsetWidth;se.current=$.current.width/te}},[V]),Ot=y.useCallback(H=>{if(!S||!Be.current)return;const te=H.clientX-Be.current.x,me=H.clientY-Be.current.y,Se=Math.sqrt(te*te+me*me);if(Q.current&&Se>GM&&(Q.current=!1,T(!0)),!Q.current){const Ke=$.current;Ke&&(H.clientX<Ke.left?le.jump(tt(H.clientX,-1)):H.clientX>Ke.right?le.jump(tt(H.clientX,1)):le.jump(0));const Fe=Pe(H.clientX),Le=Re(Fe);ue.current&&(ue.current.stop(),ue.current=null),_e.jump(Le),i(Sd(Fe,u))}},[S,Pe,Re,i,_e,le,tt]),ht=y.useCallback(H=>{if(S){if(Q.current){const te=Pe(H.clientX),Se=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((te-a)/u)*u)):PM(te,a,c),Ke=Re(Se);ue.current&&ue.current.stop(),ue.current=Ax(_e,Ke,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ue.current=null}}),i(Sd(Se,u))}le.get()!==0&&Ax(le,0,{type:"spring",visualDuration:.35,bounce:.15}),j(!1),T(!1),Be.current=null}},[S,Pe,Re,i,a,c,_e,le]);y.useEffect(()=>(N&&!V&&!P?ke.current=setTimeout(()=>{F(!0)},800):!N&&!V&&(ke.current&&(clearTimeout(ke.current),ke.current=null),F(!1)),()=>{ke.current&&clearTimeout(ke.current)}),[N,V,P]),y.useEffect(()=>{V&&x.current&&(x.current.focus(),x.current.select())},[V]);const Ie=H=>{ie(H.target.value)},Ee=()=>{const H=parseFloat(ae);if(!isNaN(H)){const te=Math.max(a,Math.min(c,H));i(Sd(te,u))}Z(!1),Y(!1),F(!1)},mt=H=>{P&&(H.stopPropagation(),H.preventDefault(),Z(!0),ie(n.toFixed(rp(u))))},zt=H=>{H.key==="Enter"?Ee():H.key==="Escape"&&(Z(!1),Y(!1))},xt=()=>{Ee()},Vt=n.toFixed(rp(u)),G=8,Me=10,Je=10;let Ze=30,ct=78;const Ae=(st=g.current)==null?void 0:st.offsetWidth;Ae&&Ae>0&&(b.current&&(Ze=(Me+b.current.offsetWidth+G)/Ae*100),w.current&&(ct=(Ae-Je-w.current.offsetWidth-G)/Ae*100));const rt=W<Ze||W>ct,it=K?rt?.1:k?.9:.5:0,pt=(c-a)/u,$t=pt<=10?Array.from({length:pt-1},(H,te)=>{const me=(te+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${me}%`}},te)}):Array.from({length:9},(H,te)=>{const me=(te+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${me}%`}},te)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(di.div,{ref:_,className:`dialkit-slider ${K?"dialkit-slider-active":""}`,onPointerDown:dt,onPointerMove:Ot,onPointerUp:ht,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),style:{width:de,x:Ne},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:$t}),l.jsx(di.div,{className:"dialkit-slider-fill",style:{width:R}}),l.jsx(di.div,{className:"dialkit-slider-handle",style:{left:oe,y:"-50%"},animate:{opacity:it,scaleX:K?1:.25,scaleY:K&&rt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:UM(h)})]}),V?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ae,onChange:Ie,onKeyDown:zt,onBlur:xt,onClick:H=>H.stopPropagation(),onMouseDown:H=>H.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${P?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>Y(!0),onMouseLeave:()=>Y(!1),onClick:mt,onMouseDown:H=>P&&H.stopPropagation(),style:{cursor:P?"text":"default"},children:Vt})]})})}function Xp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function ZM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:VM(a)})]}),l.jsx(Xp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function JM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function d2({spring:t,isSimpleMode:n}){var j,k,T,z,L;let c,u,d;if(n){const N=(j=t.visualDuration)!=null?j:.3,Y=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/N,c=Math.pow(c,2),u=2*(1-Y)*Math.sqrt(c*d)}else c=(T=t.stiffness)!=null?T:400,u=(z=t.damping)!=null?z:17,d=(L=t.mass)!=null?L:1;const h=2,p=JM(c,u,d,h),g=p.map(([,N])=>N),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([N,Y],P)=>{const F=N/h*256,Z=140-((Y-_)/(b||1)*140*.6+140*.2);return`${P===0?"M":"L"} ${F} ${Z}`}).join(" "),S=[];for(let N=1;N<4;N++){const Y=64*N,P=140/4*N;S.push(l.jsx("line",{x1:Y,y1:0,x2:Y,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${N}`),l.jsx("line",{x1:0,y1:P,x2:256,y2:P,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${N}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function e7({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(j=>Zt.subscribe(t,j),()=>Zt.getSpringMode(t,n),()=>Zt.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=j=>{Zt.updateSpringMode(t,n,j),c(j==="simple"?h.current.simple:h.current.advanced)},g=(j,k)=>{if(d){const{stiffness:T,damping:z,mass:L,...N}=a;c({...N,[j]:k})}else{const{visualDuration:T,bounce:z,...L}=a;c({...L,[j]:k})}};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(d2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Xp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:j=>g("visualDuration",j),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:j=>g("bounce",j),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:j=>g("stiffness",j),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:j=>g("damping",j),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:j=>g("mass",j),min:.1,max:10,step:.1})]})]})})}function t7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function n7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,j,k,T,z;const u=y.useSyncExternalStore(L=>Zt.subscribe(t,L),()=>Zt.getTransitionMode(t,n),()=>Zt.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=L=>{Zt.updateTransitionMode(t,n,L),c(L==="easing"?p.current.easing:L==="simple"?p.current.simple:p.current.advanced)},b=(L,N)=>{if(h){const{stiffness:Y,damping:P,mass:F,...V}=g;c({...V,[L]:N})}else{const{visualDuration:Y,bounce:P,...F}=g;c({...F,[L]:N})}},w=(L,N)=>{const Y=[..._.ease];Y[L]=N,c({..._,ease:Y})};return l.jsx(Od,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(t7,{easing:_}):l.jsx(d2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(Xp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"x1",value:_.ease[0],onChange:L=>w(0,L),min:0,max:1,step:.01}),l.jsx(Po,{label:"y1",value:_.ease[1],onChange:L=>w(1,L),min:-1,max:2,step:.01}),l.jsx(Po,{label:"x2",value:_.ease[2],onChange:L=>w(2,L),min:0,max:1,step:.01}),l.jsx(Po,{label:"y2",value:_.ease[3],onChange:L=>w(3,L),min:-1,max:2,step:.01}),l.jsx(Po,{label:"Duration",value:_.duration,onChange:L=>c({..._,duration:L}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(o7,{ease:_.ease,onChange:L=>c({..._,ease:L})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:L=>b("visualDuration",L),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Po,{label:"Bounce",value:(j=g.bounce)!=null?j:.2,onChange:L=>b("bounce",L),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Po,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:L=>b("stiffness",L),min:1,max:1e3,step:10}),l.jsx(Po,{label:"Damping",value:(T=g.damping)!=null?T:17,onChange:L=>b("damping",L),min:1,max:100,step:1}),l.jsx(Po,{label:"Mass",value:(z=g.mass)!=null?z:1,onChange:L=>b("mass",L),min:.1,max:10,step:.1})]})]})})}function Nx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function s7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function o7({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(Nx(t)),a(!0)},h=()=>{const g=s7(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:Nx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function i7({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function a7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function r7(t){return t.map(n=>typeof n=="string"?{value:n,label:a7(n)}:n)}function l7({label:t,value:n,options:i,onChange:a}){var j;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=r7(i),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const T=k.getBoundingClientRect(),z=8+b.length*36,L=window.innerHeight-T.bottom-4,N=L<z&&T.top>L;x({top:N?T.top-4:T.bottom+4,left:T.left,width:T.width,above:N})},[b.length]);return y.useEffect(()=>{var T;const k=(T=d.current)==null?void 0:T.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=T=>{const z=T.target;d.current&&!d.current.contains(z)&&h.current&&!h.current.contains(z)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(j=w==null?void 0:w.label)!=null?j:n}),l.jsx(di.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Fp})})]})]}),p&&Bc.createPortal(l.jsx(Vd,{children:c&&_&&l.jsx(di.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var c7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function u7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),c7.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?d7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function d7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function f7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(T=>T.id===i),b=y.useCallback(()=>{var z;if(!_)return;const T=(z=d.current)==null?void 0:z.getBoundingClientRect();T&&g({top:T.bottom+4,left:T.left,width:T.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const T=z=>{var N,Y;const L=z.target;(N=d.current)!=null&&N.contains(L)||(Y=h.current)!=null&&Y.contains(L)||w()};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[c,w]);const j=T=>{T?Zt.loadPreset(t,T):Zt.clearActivePreset(t),w()},k=(T,z)=>{T.stopPropagation(),Zt.deletePreset(t,z)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(di.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Fp})})]}),Bc.createPortal(l.jsx(Vd,{children:c&&l.jsxs(di.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>j(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(T=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(T.id===i),onClick:()=>j(T.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:T.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:z=>k(z,T.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:XM.map((z,L)=>l.jsx("path",{d:z},L))})})]},T.id))]})}),document.body)]})}function h7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(u2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>Zt.subscribe(t.id,k),()=>Zt.getValues(t.id),()=>Zt.getValues(t.id)),g=Zt.getPresets(t.id),_=Zt.getActivePresetId(t.id),x=()=>{const k=g.length+2;Zt.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),T=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(T),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var z,L,N;const T=p[k.path];switch(k.type){case"slider":return l.jsx(Po,{label:k.label,value:T,onChange:Y=>Zt.updateValue(t.id,k.path,Y),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return l.jsx(ZM,{label:k.label,checked:T,onChange:Y=>Zt.updateValue(t.id,k.path,Y),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return l.jsx(e7,{panelId:t.id,path:k.path,label:k.label,spring:T,onChange:Y=>Zt.updateValue(t.id,k.path,Y)},k.path);case"transition":return l.jsx(n7,{panelId:t.id,path:k.path,label:k.label,value:T,onChange:Y=>Zt.updateValue(t.id,k.path,Y)},k.path);case"folder":return l.jsx(Od,{title:k.label,defaultOpen:(z=k.defaultOpen)!=null?z:!0,children:(L=k.children)==null?void 0:L.map(w)},k.path);case"text":return l.jsx(i7,{label:k.label,value:T,onChange:Y=>Zt.updateValue(t.id,k.path,Y),placeholder:k.placeholder},k.path);case"select":return l.jsx(l7,{label:k.label,value:T,options:(N=k.options)!=null?N:[],onChange:Y=>Zt.updateValue(t.id,k.path,Y)},k.path);case"color":return l.jsx(u7,{label:k.label,value:T,onChange:Y=>Zt.updateValue(t.id,k.path,Y)},k.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>Zt.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),j=l.jsxs(l.Fragment,{children:[l.jsx(di.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:FM.map((k,T)=>l.jsx("path",{d:k},T))})}),l.jsx(f7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(di.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Vd,{initial:!1,mode:"wait",children:a?l.jsx(di.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:WM})},"check"):l.jsxs(di.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Od,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:j,children:S()})})}var m7=typeof process<"u"?!1:!(typeof import.meta<"u");function p7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=m7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),j=y.useRef(null),k=y.useRef(!1),T=y.useRef(null),z=y.useRef(!1);y.useEffect(()=>(p(!0),d(Zt.getPanels()),Zt.subscribeGlobal(()=>{d(Zt.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const V=new MutationObserver(()=>{var ie;const Z=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!Z)return;if(Z.getAttribute("data-collapsed")==="true")j.current&&b(j.current);else{if(x){j.current=x;const ke=x.x+21,Be=window.innerWidth/2;S(ke<Be?"top-left":"top-right")}else S(t);b(null)}});return V.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>V.disconnect()},[g,x,t]);const L=y.useCallback(V=>{var ie;const Z=(ie=_.current)==null?void 0:ie.querySelector(".dialkit-panel-inner");if(!Z||Z.getAttribute("data-collapsed")!=="true")return;const ae=_.current.getBoundingClientRect();T.current={pointerX:V.clientX,pointerY:V.clientY,elX:ae.left,elY:ae.top},z.current=!1,k.current=!0,V.target.setPointerCapture(V.pointerId)},[]),N=y.useCallback(V=>{if(!k.current||!T.current)return;const Z=V.clientX-T.current.pointerX,ae=V.clientY-T.current.pointerY;!z.current&&Math.abs(Z)+Math.abs(ae)<4||(z.current=!0,b({x:T.current.elX+Z,y:T.current.elY+ae}))},[]),Y=y.useCallback(V=>{var Z;if(k.current&&(k.current=!1,T.current=null,z.current)){V.stopPropagation();const ae=(Z=_.current)==null?void 0:Z.querySelector(".dialkit-panel-inner");if(ae){const ie=ke=>{ke.stopPropagation()};ae.addEventListener("click",ie,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const P=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,F=l.jsx(YM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:P,onPointerDown:g?void 0:L,onPointerMove:g?void 0:N,onPointerUp:g?void 0:Y,children:u.map(V=>l.jsx(h7,{panel:V,defaultOpen:g||n,inline:g},V.id))})})});return g?F:Bc.createPortal(F,document.body)}const _7=()=>(NM("Git Visualizer",{preview:[1,0,1]}),null),g7=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(_7,{}),l.jsx(p7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(yC,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});$v.createRoot(document.getElementById("root")).render(l.jsx(g7,{children:l.jsx(tS,{})}));

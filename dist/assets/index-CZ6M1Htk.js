(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Mx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lh={exports:{}},nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function bv(){if(J0)return nc;J0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return nc.Fragment=n,nc.jsx=i,nc.jsxs=i,nc}var ey;function vv(){return ey||(ey=1,Lh.exports=bv()),Lh.exports}var l=vv(),Oh={exports:{}},sc={},zh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function wv(){return ty||(ty=1,(function(t){function n(O,ee){var Y=O.length;O.push(ee);e:for(;0<Y;){var q=Y-1>>>1,ge=O[q];if(0<c(ge,ee))O[q]=ee,O[Y]=ge,Y=q;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var ee=O[0],Y=O.pop();if(Y!==ee){O[0]=Y;e:for(var q=0,ge=O.length,D=ge>>>1;q<D;){var ae=2*(q+1)-1,se=O[ae],ce=ae+1,De=O[ce];if(0>c(se,Y))ce<ge&&0>c(De,se)?(O[q]=De,O[ce]=Y,q=ce):(O[q]=se,O[ae]=Y,q=ae);else if(ce<ge&&0>c(De,Y))O[q]=De,O[ce]=Y,q=ce;else break e}}return ee}function c(O,ee){var Y=O.sortIndex-ee.sortIndex;return Y!==0?Y:O.id-ee.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,k=!1,C=!1,j=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function A(O){for(var ee=i(g);ee!==null;){if(ee.callback===null)a(g);else if(ee.startTime<=O)a(g),ee.sortIndex=ee.expirationTime,n(p,ee);else break;ee=i(g)}}function I(O){if(k=!1,A(O),!S)if(i(p)!==null)S=!0,V||(V=!0,Ce());else{var ee=i(g);ee!==null&&de(I,ee.startTime-O)}}var V=!1,X=-1,U=5,G=-1;function re(){return C?!0:!(t.unstable_now()-G<U)}function oe(){if(C=!1,V){var O=t.unstable_now();G=O;var ee=!0;try{e:{S=!1,k&&(k=!1,N(X),X=-1),w=!0;var Y=b;try{t:{for(A(O),x=i(p);x!==null&&!(x.expirationTime>O&&re());){var q=x.callback;if(typeof q=="function"){x.callback=null,b=x.priorityLevel;var ge=q(x.expirationTime<=O);if(O=t.unstable_now(),typeof ge=="function"){x.callback=ge,A(O),ee=!0;break t}x===i(p)&&a(p),A(O)}else a(p);x=i(p)}if(x!==null)ee=!0;else{var D=i(g);D!==null&&de(I,D.startTime-O),ee=!1}}break e}finally{x=null,b=Y,w=!1}ee=void 0}}finally{ee?Ce():V=!1}}}var Ce;if(typeof B=="function")Ce=function(){B(oe)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Q=Le.port2;Le.port1.onmessage=oe,Ce=function(){Q.postMessage(null)}}else Ce=function(){j(oe,0)};function de(O,ee){X=j(function(){O(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(O){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var Y=b;b=ee;try{return O()}finally{b=Y}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function(O,ee){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=b;b=O;try{return ee()}finally{b=Y}},t.unstable_scheduleCallback=function(O,ee,Y){var q=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?q+Y:q):Y=q,O){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Y+ge,O={id:_++,callback:ee,priorityLevel:O,startTime:Y,expirationTime:ge,sortIndex:-1},Y>q?(O.sortIndex=Y,n(g,O),i(p)===null&&O===i(g)&&(k?(N(X),X=-1):k=!0,de(I,Y-q))):(O.sortIndex=ge,n(p,O),S||w||(S=!0,V||(V=!0,Ce()))),O},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(O){var ee=b;return function(){var Y=b;b=ee;try{return O.apply(this,arguments)}finally{b=Y}}}})($h)),$h}var ny;function Sv(){return ny||(ny=1,zh.exports=wv()),zh.exports}var Ih={exports:{}},sn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function Cv(){if(sy)return sn;sy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function j(D,ae,se){this.props=D,this.context=ae,this.refs=C,this.updater=se||S}j.prototype.isReactComponent={},j.prototype.setState=function(D,ae){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ae,"setState")},j.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function N(){}N.prototype=j.prototype;function B(D,ae,se){this.props=D,this.context=ae,this.refs=C,this.updater=se||S}var A=B.prototype=new N;A.constructor=B,k(A,j.prototype),A.isPureReactComponent=!0;var I=Array.isArray;function V(){}var X={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function G(D,ae,se){var ce=se.ref;return{$$typeof:t,type:D,key:ae,ref:ce!==void 0?ce:null,props:se}}function re(D,ae){return G(D.type,ae,D.props)}function oe(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function Ce(D){var ae={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(se){return ae[se]})}var Le=/\/+/g;function Q(D,ae){return typeof D=="object"&&D!==null&&D.key!=null?Ce(""+D.key):ae.toString(36)}function de(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(V,V):(D.status="pending",D.then(function(ae){D.status==="pending"&&(D.status="fulfilled",D.value=ae)},function(ae){D.status==="pending"&&(D.status="rejected",D.reason=ae)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function O(D,ae,se,ce,De){var We=typeof D;(We==="undefined"||We==="boolean")&&(D=null);var Re=!1;if(D===null)Re=!0;else switch(We){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(D.$$typeof){case t:case n:Re=!0;break;case _:return Re=D._init,O(Re(D._payload),ae,se,ce,De)}}if(Re)return De=De(D),Re=ce===""?"."+Q(D,0):ce,I(De)?(se="",Re!=null&&(se=Re.replace(Le,"$&/")+"/"),O(De,ae,se,"",function(Pe){return Pe})):De!=null&&(oe(De)&&(De=re(De,se+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(Le,"$&/")+"/")+Re)),ae.push(De)),1;Re=0;var mt=ce===""?".":ce+":";if(I(D))for(var at=0;at<D.length;at++)ce=D[at],We=mt+Q(ce,at),Re+=O(ce,ae,se,We,De);else if(at=w(D),typeof at=="function")for(D=at.call(D),at=0;!(ce=D.next()).done;)ce=ce.value,We=mt+Q(ce,at++),Re+=O(ce,ae,se,We,De);else if(We==="object"){if(typeof D.then=="function")return O(de(D),ae,se,ce,De);throw ae=String(D),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Re}function ee(D,ae,se){if(D==null)return D;var ce=[],De=0;return O(D,ce,"","",function(We){return ae.call(se,We,De++)}),ce}function Y(D){if(D._status===-1){var ae=D._result;ae=ae(),ae.then(function(se){(D._status===0||D._status===-1)&&(D._status=1,D._result=se)},function(se){(D._status===0||D._status===-1)&&(D._status=2,D._result=se)}),D._status===-1&&(D._status=0,D._result=ae)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ge={map:ee,forEach:function(D,ae,se){ee(D,function(){ae.apply(this,arguments)},se)},count:function(D){var ae=0;return ee(D,function(){ae++}),ae},toArray:function(D){return ee(D,function(ae){return ae})||[]},only:function(D){if(!oe(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return sn.Activity=x,sn.Children=ge,sn.Component=j,sn.Fragment=i,sn.Profiler=c,sn.PureComponent=B,sn.StrictMode=a,sn.Suspense=p,sn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,sn.__COMPILER_RUNTIME={__proto__:null,c:function(D){return X.H.useMemoCache(D)}},sn.cache=function(D){return function(){return D.apply(null,arguments)}},sn.cacheSignal=function(){return null},sn.cloneElement=function(D,ae,se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ce=k({},D.props),De=D.key;if(ae!=null)for(We in ae.key!==void 0&&(De=""+ae.key),ae)!U.call(ae,We)||We==="key"||We==="__self"||We==="__source"||We==="ref"&&ae.ref===void 0||(ce[We]=ae[We]);var We=arguments.length-2;if(We===1)ce.children=se;else if(1<We){for(var Re=Array(We),mt=0;mt<We;mt++)Re[mt]=arguments[mt+2];ce.children=Re}return G(D.type,De,ce)},sn.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},sn.createElement=function(D,ae,se){var ce,De={},We=null;if(ae!=null)for(ce in ae.key!==void 0&&(We=""+ae.key),ae)U.call(ae,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(De[ce]=ae[ce]);var Re=arguments.length-2;if(Re===1)De.children=se;else if(1<Re){for(var mt=Array(Re),at=0;at<Re;at++)mt[at]=arguments[at+2];De.children=mt}if(D&&D.defaultProps)for(ce in Re=D.defaultProps,Re)De[ce]===void 0&&(De[ce]=Re[ce]);return G(D,We,De)},sn.createRef=function(){return{current:null}},sn.forwardRef=function(D){return{$$typeof:h,render:D}},sn.isValidElement=oe,sn.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:Y}},sn.memo=function(D,ae){return{$$typeof:g,type:D,compare:ae===void 0?null:ae}},sn.startTransition=function(D){var ae=X.T,se={};X.T=se;try{var ce=D(),De=X.S;De!==null&&De(se,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(V,q)}catch(We){q(We)}finally{ae!==null&&se.types!==null&&(ae.types=se.types),X.T=ae}},sn.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},sn.use=function(D){return X.H.use(D)},sn.useActionState=function(D,ae,se){return X.H.useActionState(D,ae,se)},sn.useCallback=function(D,ae){return X.H.useCallback(D,ae)},sn.useContext=function(D){return X.H.useContext(D)},sn.useDebugValue=function(){},sn.useDeferredValue=function(D,ae){return X.H.useDeferredValue(D,ae)},sn.useEffect=function(D,ae){return X.H.useEffect(D,ae)},sn.useEffectEvent=function(D){return X.H.useEffectEvent(D)},sn.useId=function(){return X.H.useId()},sn.useImperativeHandle=function(D,ae,se){return X.H.useImperativeHandle(D,ae,se)},sn.useInsertionEffect=function(D,ae){return X.H.useInsertionEffect(D,ae)},sn.useLayoutEffect=function(D,ae){return X.H.useLayoutEffect(D,ae)},sn.useMemo=function(D,ae){return X.H.useMemo(D,ae)},sn.useOptimistic=function(D,ae){return X.H.useOptimistic(D,ae)},sn.useReducer=function(D,ae,se){return X.H.useReducer(D,ae,se)},sn.useRef=function(D){return X.H.useRef(D)},sn.useState=function(D){return X.H.useState(D)},sn.useSyncExternalStore=function(D,ae,se){return X.H.useSyncExternalStore(D,ae,se)},sn.useTransition=function(){return X.H.useTransition()},sn.version="19.2.4",sn}var oy;function cp(){return oy||(oy=1,Ih.exports=Cv()),Ih.exports}var Ph={exports:{}},Ro={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function kv(){if(iy)return Ro;iy=1;var t=cp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ro.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ro.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Ro.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Ro.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Ro.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ro.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ro.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Ro.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ro.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Ro.requestFormReset=function(p){a.d.r(p)},Ro.unstable_batchedUpdates=function(p,g){return p(g)},Ro.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Ro.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ro.version="19.2.4",Ro}var ay;function Tx(){if(ay)return Ph.exports;ay=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=kv(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function jv(){if(ry)return sc;ry=1;var t=Sv(),n=cp(),i=Tx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,r=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(r=f.return,r!==null){o=r;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===r)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==r.return)o=f,r=m;else{for(var v=!1,T=f.child;T;){if(T===o){v=!0,o=f,r=m;break}if(T===r){v=!0,r=f,o=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===o){v=!0,o=m,r=f;break}if(T===r){v=!0,r=m,o=f;break}T=T.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==r)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),B=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case j:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case V:return"SuspenseList";case G:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case B:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case A:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return s=e.displayName||null,s!==null?s:Q(e.type)||"Memo";case U:s=e._payload,e=e._init;try{return Q(e(s))}catch{}}return null}var de=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},q=[],ge=-1;function D(e){return{current:e}}function ae(e){0>ge||(e.current=q[ge],q[ge]=null,ge--)}function se(e,s){ge++,q[ge]=e.current,e.current=s}var ce=D(null),De=D(null),We=D(null),Re=D(null);function mt(e,s){switch(se(We,s),se(De,e),se(ce,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?w0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=w0(s),e=S0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(ce),se(ce,e)}function at(){ae(ce),ae(De),ae(We)}function Pe(e){e.memoizedState!==null&&se(Re,e);var s=ce.current,o=S0(s,e.type);s!==o&&(se(De,e),se(ce,o))}function ct(e){De.current===e&&(ae(ce),ae(De)),Re.current===e&&(ae(Re),Zl._currentValue=Y)}var dt,bt;function gt(e){if(dt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);dt=s&&s[1]||"",bt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+bt}var Xt=!1;function Ut(e,s){if(!e||Xt)return"";Xt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(s){var ze=function(){throw Error()};if(Object.defineProperty(ze.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ze,[])}catch(ve){var xe=ve}Reflect.construct(e,[],ze)}else{try{ze.call()}catch(ve){xe=ve}e.call(ze.prototype)}}else{try{throw Error()}catch(ve){xe=ve}(ze=e())&&typeof ze.catch=="function"&&ze.catch(function(){})}}catch(ve){if(ve&&xe&&typeof ve.stack=="string")return[ve.stack,xe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=r.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var F=v.split(`
`),pe=T.split(`
`);for(f=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;f<pe.length&&!pe[f].includes("DetermineComponentFrameRoot");)f++;if(r===F.length||f===pe.length)for(r=F.length-1,f=pe.length-1;1<=r&&0<=f&&F[r]!==pe[f];)f--;for(;1<=r&&0<=f;r--,f--)if(F[r]!==pe[f]){if(r!==1||f!==1)do if(r--,f--,0>f||F[r]!==pe[f]){var Me=`
`+F[r].replace(" at new "," at ");return e.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",e.displayName)),Me}while(1<=r&&0<=f);break}}}finally{Xt=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?gt(o):""}function dn(e,s){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==s&&s!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return Ut(e.type,!1);case 11:return Ut(e.type.render,!1);case 1:return Ut(e.type,!0);case 31:return gt("Activity");default:return""}}function _e(e){try{var s="",o=null;do s+=dn(e,o),o=e,e=e.return;while(e);return s}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var me=Object.prototype.hasOwnProperty,rt=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,_t=t.unstable_shouldYield,Je=t.unstable_requestPaint,tt=t.unstable_now,Qe=t.unstable_getCurrentPriorityLevel,ht=t.unstable_ImmediatePriority,qt=t.unstable_UserBlockingPriority,ut=t.unstable_NormalPriority,$=t.unstable_LowPriority,J=t.unstable_IdlePriority,K=t.log,we=t.unstable_setDisableYieldValue,Ge=null,Ve=null;function Ne(e){if(typeof K=="function"&&we(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Ge,e)}catch{}}var kt=Math.clz32?Math.clz32:ft,nt=Math.log,At=Math.LN2;function ft(e){return e>>>=0,e===0?32:31-(nt(e)/At|0)|0}var Ye=256,Ot=262144,Vt=4194304;function Jt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,s,o){var r=e.pendingLanes;if(r===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~m,r!==0?f=Jt(r):(v&=T,v!==0?f=Jt(v):o||(o=T&~e,o!==0&&(f=Jt(o))))):(T=r&~m,T!==0?f=Jt(T):v!==0?f=Jt(v):o||(o=r&~e,o!==0&&(f=Jt(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Dt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Mt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Nt(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function et(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zt(e,s,o,r,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,pe=e.hiddenUpdates;for(o=v&~o;0<o;){var Me=31-kt(o),ze=1<<Me;T[Me]=0,F[Me]=-1;var xe=pe[Me];if(xe!==null)for(pe[Me]=null,Me=0;Me<xe.length;Me++){var ve=xe[Me];ve!==null&&(ve.lane&=-536870913)}o&=~ze}r!==0&&Tn(e,r,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function Tn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var r=31-kt(s);e.entangledLanes|=s,e.entanglements[r]=e.entanglements[r]|1073741824|o&261930}function os(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var r=31-kt(o),f=1<<r;f&s|e[r]&s&&(e[r]|=s),o&=~f}}function Kn(e,s){var o=s&-s;return o=(o&42)!==0?1:fo(o),(o&(e.suspendedLanes|s))!==0?0:o}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cs(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:F0(e.type))}function wn(e,s){var o=ee.p;try{return ee.p=e,s()}finally{ee.p=o}}var Nn=Math.random().toString(36).slice(2),fn="__reactFiber$"+Nn,pn="__reactProps$"+Nn,ot="__reactContainer$"+Nn,en="__reactEvents$"+Nn,qs="__reactListeners$"+Nn,To="__reactHandles$"+Nn,zn="__reactResources$"+Nn,Ns="__reactMarker$"+Nn;function go(e){delete e[fn],delete e[pn],delete e[en],delete e[qs],delete e[To]}function Eo(e){var s=e[fn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[ot]||o[fn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=A0(e);e!==null;){if(o=e[fn])return o;e=A0(e)}return s}e=o,o=e.parentNode}return null}function yo(e){if(e=e[fn]||e[ot]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Gs(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Hs(e){var s=e[zn];return s||(s=e[zn]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Pn(e){e[Ns]=!0}var ti=new Set,ho={};function Ts(e,s){fs(e,s),fs(e+"Capture",s)}function fs(e,s){for(ho[e]=s,e=0;e<s.length;e++)ti.add(s[e])}var Es=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),As={},xo={};function Vn(e){return me.call(xo,e)?!0:me.call(As,e)?!1:Es.test(e)?xo[e]=!0:(As[e]=!0,!1)}function Ao(e,s,o){if(Vn(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var r=s.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Ds(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Rs(e,s,o,r){if(r===null)e.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+r)}}function Sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fo(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _s(e,s,o){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function ni(e){if(!e._valueTracker){var s=Fo(e)?"checked":"value";e._valueTracker=_s(e,s,""+e[s])}}function Ei(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),r="";return e&&(r=Fo(e)?e.checked?"true":"false":e.value),e=r,e!==o?(s.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fi=/[\n"\\]/g;function Bs(e){return e.replace(fi,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function oo(e,s,o,r,f,m,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Sn(s)):e.value!==""+Sn(s)&&(e.value=""+Sn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?bo(e,v,Sn(s)):o!=null?bo(e,v,Sn(o)):r!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Sn(T):e.removeAttribute("name")}function En(e,s,o,r,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){ni(e);return}o=o!=null?""+Sn(o):"",s=s!=null?""+Sn(s):o,T||s===e.value||(e.value=s),e.defaultValue=s}r=r!=null?r:f,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ni(e)}function bo(e,s,o){s==="number"&&Lo(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function gs(e,s,o,r){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&r&&(e[o].defaultSelected=!0)}else{for(o=""+Sn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,r&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function xn(e,s,o){if(s!=null&&(s=""+Sn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Sn(o):""}function hi(e,s,o,r){if(s==null){if(r!=null){if(o!=null)throw Error(a(92));if(de(r)){if(1<r.length)throw Error(a(93));r=r[0]}o=r}o==null&&(o=""),s=o}o=Sn(s),e.defaultValue=o,r=e.textContent,r===o&&r!==""&&r!==null&&(e.value=r),ni(e)}function Ks(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var mi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var r=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":r?e.setProperty(s,o):typeof o!="number"||o===0||mi.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function si(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||s!=null&&s.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var f in s)r=s[f],s.hasOwnProperty(f)&&o[f]!==r&&Kt(e,f,r)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function Us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Di=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return Di.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mo(){}var Oo=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var An=null,vo=null;function zo(e){var s=yo(e);if(s&&(e=s.stateNode)){var o=e[pn]||null;e:switch(e=s.stateNode,s.type){case"input":if(oo(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Bs(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var r=o[s];if(r!==e&&r.form===e.form){var f=r[pn]||null;if(!f)throw Error(a(90));oo(r,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)r=o[s],r.form===e.form&&Ei(r)}break e;case"textarea":xn(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&gs(e,!!o.multiple,s,!1)}}}var hs=!1;function po(e,s,o){if(hs)return e(s,o);hs=!0;try{var r=e(s);return r}finally{if(hs=!1,(An!==null||vo!==null)&&(xu(),An&&(s=An,e=vo,vo=An=null,zo(s),e)))for(s=0;s<e.length;s++)zo(e[s])}}function an(e,s){var o=e.stateNode;if(o===null)return null;var r=o[pn]||null;if(r===null)return null;o=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var ks=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=!1;if(ks)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Ls=!1}var is=null,Hn=null,ao=null;function as(){if(ao)return ao;var e,s=Hn,o=s.length,r,f="value"in is?is.value:is.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(r=1;r<=v&&s[o-r]===f[m-r];r++);return ao=f.slice(e,1<r?1-r:void 0)}function zs(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function wo(){return!1}function Yn(e){function s(o,r,f,m,v){this._reactName=o,this._targetInst=f,this.type=r,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(o=e[T],this[T]=o?o(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$o:wo,this.isPropagationStopped=wo,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),s}var z={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},te=Yn(z),ie=x({},z,{view:0,detail:0}),ye=Yn(ie),Ze,it,st,zt=x({},ie,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==st&&(st&&e.type==="mousemove"?(Ze=e.screenX-st.screenX,it=e.screenY-st.screenY):it=Ze=0,st=e),Ze)},movementY:function(e){return"movementY"in e?e.movementY:it}}),Rn=Yn(zt),M=x({},zt,{dataTransfer:0}),W=Yn(M),ue=x({},ie,{relatedTarget:0}),fe=Yn(ue),ke=x({},z,{animationName:0,elapsedTime:0,pseudoElement:0}),Oe=Yn(ke),vt=x({},z,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lt=Yn(vt),yt=x({},z,{data:0}),$e=Yn(yt),Yt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bn(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=kn[e])?!!s[e]:!1}function mn(){return Bn}var rs=x({},ie,{key:function(e){if(e.key){var s=Yt[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mn,charCode:function(e){return e.type==="keypress"?zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qs=Yn(rs),jn=x({},zt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wn=Yn(jn),Vs=x({},ie,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mn}),Ni=Yn(Vs),ta=x({},z,{propertyName:0,elapsedTime:0,pseudoElement:0}),Io=Yn(ta),Dr=x({},zt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),va=Yn(Dr),wa=x({},z,{newState:0,oldState:0}),na=Yn(wa),Nr=[9,13,27,32],Sa=ks&&"CompositionEvent"in window,Do=null;ks&&"documentMode"in document&&(Do=document.documentMode);var Ca=ks&&"TextEvent"in window&&!Do,sa=ks&&(!Sa||Do&&8<Do&&11>=Do),nr=" ",je=!1;function Fe(e,s){switch(e){case"keyup":return Nr.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ue=!1;function It(e,s){switch(e){case"compositionend":return xt(s);case"keypress":return s.which!==32?null:(je=!0,nr);case"textInput":return e=s.data,e===nr&&je?null:e;default:return null}}function Pt(e,s){if(Ue)return e==="compositionend"||!Sa&&Fe(e,s)?(e=as(),ao=Hn=is=null,Ue=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return sa&&s.locale!=="ko"?null:s.data;default:return null}}var cn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!cn[e.type]:s==="textarea"}function Fn(e,s,o,r){An?vo?vo.push(r):vo=[r]:An=r,s=ju(s,"onChange"),0<s.length&&(o=new te("onChange","change",null,o,r),e.push({event:o,listeners:s}))}var ms=null,ro=null;function pi(e){_0(e,0)}function E(e){var s=Gs(e);if(Ei(s))return e}function L(e,s){if(e==="change")return s}var H=!1;if(ks){var P;if(ks){var ne="oninput"in document;if(!ne){var be=document.createElement("div");be.setAttribute("oninput","return;"),ne=typeof be.oninput=="function"}P=ne}else P=!1;H=P&&(!document.documentMode||9<document.documentMode)}function Xe(){ms&&(ms.detachEvent("onpropertychange",Ke),ro=ms=null)}function Ke(e){if(e.propertyName==="value"&&E(ro)){var s=[];Fn(s,ro,e,io(e)),po(pi,s)}}function lt(e,s,o){e==="focusin"?(Xe(),ms=s,ro=o,ms.attachEvent("onpropertychange",Ke)):e==="focusout"&&Xe()}function St(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return E(ro)}function $t(e,s){if(e==="click")return E(s)}function tn(e,s){if(e==="input"||e==="change")return E(s)}function nn(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var Ct=typeof Object.is=="function"?Object.is:nn;function pt(e,s){if(Ct(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),r=Object.keys(s);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var f=o[r];if(!me.call(s,f)||!Ct(e[f],s[f]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,s){var o=ys(e);e=0;for(var r;o;){if(o.nodeType===3){if(r=e+o.textContent.length,e<=s&&r>=s)return{node:o,offset:s-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ys(o)}}function bs(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?bs(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Mn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Lo(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Lo(e.document)}return s}function Un(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Gt=ks&&"documentMode"in document&&11>=document.documentMode,Qt=null,vs=null,Dn=null,lo=!1;function No(e,s,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lo||Qt==null||Qt!==Lo(r)||(r=Qt,"selectionStart"in r&&Un(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&pt(Dn,r)||(Dn=r,r=ju(vs,"onSelect"),0<r.length&&(s=new te("onSelect","select",null,s,o),e.push({event:s,listeners:r}),s.target=Qt)))}function ls(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var _i={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Ri={},Bi={};ks&&(Bi=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Qn(e){if(Ri[e])return Ri[e];if(!_i[e])return e;var s=_i[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Bi)return Ri[e]=s[o];return e}var Li=Qn("animationend"),Yi=Qn("animationiteration"),$c=Qn("animationstart"),Yd=Qn("transitionrun"),Wd=Qn("transitionstart"),Fd=Qn("transitioncancel"),Gp=Qn("transitionend"),Kp=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Oi(e,s){Kp.set(e,s),Ts(s,[e])}var Ic=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],Rr=0,qd=0;function Pc(){for(var e=Rr,s=qd=Rr=0;s<e;){var o=gi[s];gi[s++]=null;var r=gi[s];gi[s++]=null;var f=gi[s];gi[s++]=null;var m=gi[s];if(gi[s++]=null,r!==null&&f!==null){var v=r.pending;v===null?f.next=f:(f.next=v.next,v.next=f),r.pending=f}m!==0&&Qp(o,f,m)}}function Hc(e,s,o,r){gi[Rr++]=e,gi[Rr++]=s,gi[Rr++]=o,gi[Rr++]=r,qd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Gd(e,s,o,r){return Hc(e,s,o,r),Uc(e)}function sr(e,s){return Hc(e,null,null,s),Uc(e)}function Qp(e,s,o){e.lanes|=o;var r=e.alternate;r!==null&&(r.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,r=m.alternate,r!==null&&(r.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-kt(o),e=m.hiddenUpdates,r=e[f],r===null?e[f]=[s]:r.push(s),s.lane=o|536870912),m):null}function Uc(e){if(50<Wl)throw Wl=0,ih=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var Br={};function s2(e,s,o,r){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,s,o,r){return new s2(e,s,o,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,s){var o=e.alternate;return o===null?(o=oi(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Zp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Vc(e,s,o,r,f,m){var v=0;if(r=e,typeof e=="function")Kd(e)&&(v=1);else if(typeof e=="string")v=lv(e,o,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case G:return e=oi(31,o,s,f),e.elementType=G,e.lanes=m,e;case k:return or(o.children,f,m,s);case C:v=8,f|=24;break;case j:return e=oi(12,o,s,f|2),e.elementType=j,e.lanes=m,e;case I:return e=oi(13,o,s,f),e.elementType=I,e.lanes=m,e;case V:return e=oi(19,o,s,f),e.elementType=V,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:v=10;break e;case N:v=9;break e;case A:v=11;break e;case X:v=14;break e;case U:v=16,r=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),r=null}return s=oi(v,o,s,f),s.elementType=e,s.type=r,s.lanes=m,s}function or(e,s,o,r){return e=oi(7,e,r,s),e.lanes=o,e}function Qd(e,s,o){return e=oi(6,e,null,s),e.lanes=o,e}function Jp(e){var s=oi(18,null,null,0);return s.stateNode=e,s}function Zd(e,s,o){return s=oi(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var e_=new WeakMap;function yi(e,s){if(typeof e=="object"&&e!==null){var o=e_.get(e);return o!==void 0?o:(s={value:e,source:s,stack:_e(s)},e_.set(e,s),s)}return{value:e,source:s,stack:_e(s)}}var Lr=[],Or=0,Yc=null,Cl=0,xi=[],bi=0,ka=null,Wi=1,Fi="";function ia(e,s){Lr[Or++]=Cl,Lr[Or++]=Yc,Yc=e,Cl=s}function t_(e,s,o){xi[bi++]=Wi,xi[bi++]=Fi,xi[bi++]=ka,ka=e;var r=Wi;e=Fi;var f=32-kt(r)-1;r&=~(1<<f),o+=1;var m=32-kt(s)+f;if(30<m){var v=f-f%5;m=(r&(1<<v)-1).toString(32),r>>=v,f-=v,Wi=1<<32-kt(s)+f|o<<f|r,Fi=m+e}else Wi=1<<m|o<<f|r,Fi=e}function Jd(e){e.return!==null&&(ia(e,1),t_(e,1,0))}function ef(e){for(;e===Yc;)Yc=Lr[--Or],Lr[Or]=null,Cl=Lr[--Or],Lr[Or]=null;for(;e===ka;)ka=xi[--bi],xi[bi]=null,Fi=xi[--bi],xi[bi]=null,Wi=xi[--bi],xi[bi]=null}function n_(e,s){xi[bi++]=Wi,xi[bi++]=Fi,xi[bi++]=ka,Wi=s.id,Fi=s.overflow,ka=e}var So=null,ws=null,Cn=!1,ja=null,vi=!1,tf=Error(a(519));function Ma(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(yi(s,e)),tf}function s_(e){var s=e.stateNode,o=e.type,r=e.memoizedProps;switch(s[fn]=e,s[pn]=r,o){case"dialog":yn("cancel",s),yn("close",s);break;case"iframe":case"object":case"embed":yn("load",s);break;case"video":case"audio":for(o=0;o<Xl.length;o++)yn(Xl[o],s);break;case"source":yn("error",s);break;case"img":case"image":case"link":yn("error",s),yn("load",s);break;case"details":yn("toggle",s);break;case"input":yn("invalid",s),En(s,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yn("invalid",s);break;case"textarea":yn("invalid",s),hi(s,r.value,r.defaultValue,r.children)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||r.suppressHydrationWarning===!0||b0(s.textContent,o)?(r.popover!=null&&(yn("beforetoggle",s),yn("toggle",s)),r.onScroll!=null&&yn("scroll",s),r.onScrollEnd!=null&&yn("scrollend",s),r.onClick!=null&&(s.onclick=mo),s=!0):s=!1,s||Ma(e,!0)}function o_(e){for(So=e.return;So;)switch(So.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:So=So.return}}function zr(e){if(e!==So)return!1;if(!Cn)return o_(e),Cn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||bh(e.type,e.memoizedProps)),o=!o),o&&ws&&Ma(e),o_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=E0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ws=E0(e)}else s===27?(s=ws,Ha(e.type)?(e=kh,kh=null,ws=e):ws=s):ws=So?Si(e.stateNode.nextSibling):null;return!0}function ir(){ws=So=null,Cn=!1}function nf(){var e=ja;return e!==null&&(Qo===null?Qo=e:Qo.push.apply(Qo,e),ja=null),e}function kl(e){ja===null?ja=[e]:ja.push(e)}var sf=D(null),ar=null,aa=null;function Ta(e,s,o){se(sf,s._currentValue),s._currentValue=o}function ra(e){e._currentValue=sf.current,ae(sf)}function of(e,s,o){for(;e!==null;){var r=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),e===o)break;e=e.return}}function af(e,s,o,r){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var F=0;F<s.length;F++)if(T.context===s[F]){m.lanes|=o,T=m.alternate,T!==null&&(T.lanes|=o),of(m.return,o,e),r||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),of(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function $r(e,s,o,r){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var T=f.type;Ct(f.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(f===Re.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Zl):e=[Zl])}f=f.return}e!==null&&af(s,e,o,r),s.flags|=262144}function Wc(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Co(e){return i_(ar,e)}function Fc(e,s){return ar===null&&rr(e),i_(e,s)}function i_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},aa===null){if(e===null)throw Error(a(308));aa=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else aa=aa.next=s;return o}var o2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,r){e.push(r)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},i2=t.unstable_scheduleCallback,a2=t.unstable_NormalPriority,Zs={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new o2,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&i2(a2,function(){e.controller.abort()})}var Ml=null,lf=0,Ir=0,Pr=null;function r2(e,s){if(Ml===null){var o=Ml=[];lf=0,Ir=dh(),Pr={status:"pending",value:void 0,then:function(r){o.push(r)}}}return lf++,s.then(a_,a_),s}function a_(){if(--lf===0&&Ml!==null){Pr!==null&&(Pr.status="fulfilled");var e=Ml;Ml=null,Ir=0,Pr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function l2(e,s){var o=[],r={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){r.status="fulfilled",r.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(r.status="rejected",r.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),r}var r_=O.S;O.S=function(e,s){Yg=tt(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&r2(e,s),r_!==null&&r_(e,s)};var lr=D(null);function cf(){var e=lr.current;return e!==null?e:cs.pooledCache}function Xc(e,s){s===null?se(lr,lr.current):se(lr,s.pool)}function l_(){var e=cf();return e===null?null:{parent:Zs._currentValue,pool:e}}var Hr=Error(a(460)),uf=Error(a(474)),qc=Error(a(542)),Gc={then:function(){}};function c_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(mo,mo),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e;default:if(typeof s.status=="string")s.then(mo,mo);else{if(e=cs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(r){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=r}},function(r){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=r}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,f_(e),e}throw ur=s,Hr}}function cr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(ur=o,Hr):o}}var ur=null;function d_(){if(ur===null)throw Error(a(459));var e=ur;return ur=null,e}function f_(e){if(e===Hr||e===qc)throw Error(a(483))}var Ur=null,Tl=0;function Kc(e){var s=Tl;return Tl+=1,Ur===null&&(Ur=[]),u_(Ur,e,s)}function El(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Qc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function h_(e){function s(le,Z){if(e){var he=le.deletions;he===null?(le.deletions=[Z],le.flags|=16):he.push(Z)}}function o(le,Z){if(!e)return null;for(;Z!==null;)s(le,Z),Z=Z.sibling;return null}function r(le){for(var Z=new Map;le!==null;)le.key!==null?Z.set(le.key,le):Z.set(le.index,le),le=le.sibling;return Z}function f(le,Z){return le=oa(le,Z),le.index=0,le.sibling=null,le}function m(le,Z,he){return le.index=he,e?(he=le.alternate,he!==null?(he=he.index,he<Z?(le.flags|=67108866,Z):he):(le.flags|=67108866,Z)):(le.flags|=1048576,Z)}function v(le){return e&&le.alternate===null&&(le.flags|=67108866),le}function T(le,Z,he,Be){return Z===null||Z.tag!==6?(Z=Qd(he,le.mode,Be),Z.return=le,Z):(Z=f(Z,he),Z.return=le,Z)}function F(le,Z,he,Be){var Ht=he.type;return Ht===k?Me(le,Z,he.props.children,Be,he.key):Z!==null&&(Z.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===U&&cr(Ht)===Z.type)?(Z=f(Z,he.props),El(Z,he),Z.return=le,Z):(Z=Vc(he.type,he.key,he.props,null,le.mode,Be),El(Z,he),Z.return=le,Z)}function pe(le,Z,he,Be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==he.containerInfo||Z.stateNode.implementation!==he.implementation?(Z=Zd(he,le.mode,Be),Z.return=le,Z):(Z=f(Z,he.children||[]),Z.return=le,Z)}function Me(le,Z,he,Be,Ht){return Z===null||Z.tag!==7?(Z=or(he,le.mode,Be,Ht),Z.return=le,Z):(Z=f(Z,he),Z.return=le,Z)}function ze(le,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Qd(""+Z,le.mode,he),Z.return=le,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return he=Vc(Z.type,Z.key,Z.props,null,le.mode,he),El(he,Z),he.return=le,he;case S:return Z=Zd(Z,le.mode,he),Z.return=le,Z;case U:return Z=cr(Z),ze(le,Z,he)}if(de(Z)||Ce(Z))return Z=or(Z,le.mode,he,null),Z.return=le,Z;if(typeof Z.then=="function")return ze(le,Kc(Z),he);if(Z.$$typeof===B)return ze(le,Fc(le,Z),he);Qc(le,Z)}return null}function xe(le,Z,he,Be){var Ht=Z!==null?Z.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return Ht!==null?null:T(le,Z,""+he,Be);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case w:return he.key===Ht?F(le,Z,he,Be):null;case S:return he.key===Ht?pe(le,Z,he,Be):null;case U:return he=cr(he),xe(le,Z,he,Be)}if(de(he)||Ce(he))return Ht!==null?null:Me(le,Z,he,Be,null);if(typeof he.then=="function")return xe(le,Z,Kc(he),Be);if(he.$$typeof===B)return xe(le,Z,Fc(le,he),Be);Qc(le,he)}return null}function ve(le,Z,he,Be,Ht){if(typeof Be=="string"&&Be!==""||typeof Be=="number"||typeof Be=="bigint")return le=le.get(he)||null,T(Z,le,""+Be,Ht);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case w:return le=le.get(Be.key===null?he:Be.key)||null,F(Z,le,Be,Ht);case S:return le=le.get(Be.key===null?he:Be.key)||null,pe(Z,le,Be,Ht);case U:return Be=cr(Be),ve(le,Z,he,Be,Ht)}if(de(Be)||Ce(Be))return le=le.get(he)||null,Me(Z,le,Be,Ht,null);if(typeof Be.then=="function")return ve(le,Z,he,Kc(Be),Ht);if(Be.$$typeof===B)return ve(le,Z,he,Fc(Z,Be),Ht);Qc(Z,Be)}return null}function Tt(le,Z,he,Be){for(var Ht=null,Ln=null,Rt=Z,un=Z=0,vn=null;Rt!==null&&un<he.length;un++){Rt.index>un?(vn=Rt,Rt=null):vn=Rt.sibling;var On=xe(le,Rt,he[un],Be);if(On===null){Rt===null&&(Rt=vn);break}e&&Rt&&On.alternate===null&&s(le,Rt),Z=m(On,Z,un),Ln===null?Ht=On:Ln.sibling=On,Ln=On,Rt=vn}if(un===he.length)return o(le,Rt),Cn&&ia(le,un),Ht;if(Rt===null){for(;un<he.length;un++)Rt=ze(le,he[un],Be),Rt!==null&&(Z=m(Rt,Z,un),Ln===null?Ht=Rt:Ln.sibling=Rt,Ln=Rt);return Cn&&ia(le,un),Ht}for(Rt=r(Rt);un<he.length;un++)vn=ve(Rt,le,un,he[un],Be),vn!==null&&(e&&vn.alternate!==null&&Rt.delete(vn.key===null?un:vn.key),Z=m(vn,Z,un),Ln===null?Ht=vn:Ln.sibling=vn,Ln=vn);return e&&Rt.forEach(function(Fa){return s(le,Fa)}),Cn&&ia(le,un),Ht}function Ft(le,Z,he,Be){if(he==null)throw Error(a(151));for(var Ht=null,Ln=null,Rt=Z,un=Z=0,vn=null,On=he.next();Rt!==null&&!On.done;un++,On=he.next()){Rt.index>un?(vn=Rt,Rt=null):vn=Rt.sibling;var Fa=xe(le,Rt,On.value,Be);if(Fa===null){Rt===null&&(Rt=vn);break}e&&Rt&&Fa.alternate===null&&s(le,Rt),Z=m(Fa,Z,un),Ln===null?Ht=Fa:Ln.sibling=Fa,Ln=Fa,Rt=vn}if(On.done)return o(le,Rt),Cn&&ia(le,un),Ht;if(Rt===null){for(;!On.done;un++,On=he.next())On=ze(le,On.value,Be),On!==null&&(Z=m(On,Z,un),Ln===null?Ht=On:Ln.sibling=On,Ln=On);return Cn&&ia(le,un),Ht}for(Rt=r(Rt);!On.done;un++,On=he.next())On=ve(Rt,le,un,On.value,Be),On!==null&&(e&&On.alternate!==null&&Rt.delete(On.key===null?un:On.key),Z=m(On,Z,un),Ln===null?Ht=On:Ln.sibling=On,Ln=On);return e&&Rt.forEach(function(xv){return s(le,xv)}),Cn&&ia(le,un),Ht}function es(le,Z,he,Be){if(typeof he=="object"&&he!==null&&he.type===k&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case w:e:{for(var Ht=he.key;Z!==null;){if(Z.key===Ht){if(Ht=he.type,Ht===k){if(Z.tag===7){o(le,Z.sibling),Be=f(Z,he.props.children),Be.return=le,le=Be;break e}}else if(Z.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===U&&cr(Ht)===Z.type){o(le,Z.sibling),Be=f(Z,he.props),El(Be,he),Be.return=le,le=Be;break e}o(le,Z);break}else s(le,Z);Z=Z.sibling}he.type===k?(Be=or(he.props.children,le.mode,Be,he.key),Be.return=le,le=Be):(Be=Vc(he.type,he.key,he.props,null,le.mode,Be),El(Be,he),Be.return=le,le=Be)}return v(le);case S:e:{for(Ht=he.key;Z!==null;){if(Z.key===Ht)if(Z.tag===4&&Z.stateNode.containerInfo===he.containerInfo&&Z.stateNode.implementation===he.implementation){o(le,Z.sibling),Be=f(Z,he.children||[]),Be.return=le,le=Be;break e}else{o(le,Z);break}else s(le,Z);Z=Z.sibling}Be=Zd(he,le.mode,Be),Be.return=le,le=Be}return v(le);case U:return he=cr(he),es(le,Z,he,Be)}if(de(he))return Tt(le,Z,he,Be);if(Ce(he)){if(Ht=Ce(he),typeof Ht!="function")throw Error(a(150));return he=Ht.call(he),Ft(le,Z,he,Be)}if(typeof he.then=="function")return es(le,Z,Kc(he),Be);if(he.$$typeof===B)return es(le,Z,Fc(le,he),Be);Qc(le,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,Z!==null&&Z.tag===6?(o(le,Z.sibling),Be=f(Z,he),Be.return=le,le=Be):(o(le,Z),Be=Qd(he,le.mode,Be),Be.return=le,le=Be),v(le)):o(le,Z)}return function(le,Z,he,Be){try{Tl=0;var Ht=es(le,Z,he,Be);return Ur=null,Ht}catch(Rt){if(Rt===Hr||Rt===qc)throw Rt;var Ln=oi(29,Rt,null,le.mode);return Ln.lanes=Be,Ln.return=le,Ln}finally{}}}var dr=h_(!0),m_=h_(!1),Ea=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,s,o){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($n&2)!==0){var f=r.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),r.pending=s,s=Uc(e),Qp(e,null,o),s}return Hc(e,r,s,o),Uc(e)}function Al(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}function hf(e,s){var o=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:r.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:r.shared,callbacks:r.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var mf=!1;function Dl(){if(mf){var e=Pr;if(e!==null)throw e}}function Nl(e,s,o,r){mf=!1;var f=e.updateQueue;Ea=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var F=T,pe=F.next;F.next=null,v===null?m=pe:v.next=pe,v=F;var Me=e.alternate;Me!==null&&(Me=Me.updateQueue,T=Me.lastBaseUpdate,T!==v&&(T===null?Me.firstBaseUpdate=pe:T.next=pe,Me.lastBaseUpdate=F))}if(m!==null){var ze=f.baseState;v=0,Me=pe=F=null,T=m;do{var xe=T.lane&-536870913,ve=xe!==T.lane;if(ve?(bn&xe)===xe:(r&xe)===xe){xe!==0&&xe===Ir&&(mf=!0),Me!==null&&(Me=Me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Tt=e,Ft=T;xe=s;var es=o;switch(Ft.tag){case 1:if(Tt=Ft.payload,typeof Tt=="function"){ze=Tt.call(es,ze,xe);break e}ze=Tt;break e;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Ft.payload,xe=typeof Tt=="function"?Tt.call(es,ze,xe):Tt,xe==null)break e;ze=x({},ze,xe);break e;case 2:Ea=!0}}xe=T.callback,xe!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[xe]:ve.push(xe))}else ve={lane:xe,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Me===null?(pe=Me=ve,F=ze):Me=Me.next=ve,v|=xe;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;ve=T,T=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);Me===null&&(F=ze),f.baseState=F,f.firstBaseUpdate=pe,f.lastBaseUpdate=Me,m===null&&(f.shared.lanes=0),Oa|=v,e.lanes=v,e.memoizedState=ze}}function p_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function __(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)p_(o[e],s)}var Vr=D(null),Zc=D(0);function g_(e,s){e=_a,se(Zc,e),se(Vr,s),_a=e|s.baseLanes}function pf(){se(Zc,_a),se(Vr,Vr.current)}function _f(){_a=Zc.current,ae(Vr),ae(Zc)}var ii=D(null),wi=null;function Na(e){var s=e.alternate;se(Ys,Ys.current&1),se(ii,e),wi===null&&(s===null||Vr.current!==null||s.memoizedState!==null)&&(wi=e)}function gf(e){se(Ys,Ys.current),se(ii,e),wi===null&&(wi=e)}function y_(e){e.tag===22?(se(Ys,Ys.current),se(ii,e),wi===null&&(wi=e)):Ra()}function Ra(){se(Ys,Ys.current),se(ii,ii.current)}function ai(e){ae(ii),wi===e&&(wi=null),ae(Ys)}var Ys=D(0);function Jc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Sh(o)||Ch(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var la=0,ln=null,Zn=null,Js=null,eu=!1,Yr=!1,fr=!1,tu=0,Rl=0,Wr=null,c2=0;function $s(){throw Error(a(321))}function yf(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!Ct(e[o],s[o]))return!1;return!0}function xf(e,s,o,r,f,m){return la=m,ln=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,O.H=e===null||e.memoizedState===null?tg:Bf,fr=!1,m=o(r,f),fr=!1,Yr&&(m=b_(s,o,r,f)),x_(e),m}function x_(e){O.H=Ol;var s=Zn!==null&&Zn.next!==null;if(la=0,Js=Zn=ln=null,eu=!1,Rl=0,Wr=null,s)throw Error(a(300));e===null||eo||(e=e.dependencies,e!==null&&Wc(e)&&(eo=!0))}function b_(e,s,o,r){ln=e;var f=0;do{if(Yr&&(Wr=null),Rl=0,Yr=!1,25<=f)throw Error(a(301));if(f+=1,Js=Zn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=ng,m=s(o,r)}while(Yr);return m}function u2(){var e=O.H,s=e.useState()[0];return s=typeof s.then=="function"?Bl(s):s,e=e.useState()[0],(Zn!==null?Zn.memoizedState:null)!==e&&(ln.flags|=1024),s}function bf(){var e=tu!==0;return tu=0,e}function vf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function wf(e){if(eu){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}eu=!1}la=0,Js=Zn=ln=null,Yr=!1,Rl=tu=0,Wr=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Js===null?ln.memoizedState=Js=e:Js=Js.next=e,Js}function Ws(){if(Zn===null){var e=ln.alternate;e=e!==null?e.memoizedState:null}else e=Zn.next;var s=Js===null?ln.memoizedState:Js.next;if(s!==null)Js=s,Zn=e;else{if(e===null)throw ln.alternate===null?Error(a(467)):Error(a(310));Zn=e,e={memoizedState:Zn.memoizedState,baseState:Zn.baseState,baseQueue:Zn.baseQueue,queue:Zn.queue,next:null},Js===null?ln.memoizedState=Js=e:Js=Js.next=e}return Js}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var s=Rl;return Rl+=1,Wr===null&&(Wr=[]),e=u_(Wr,e,s),s=ln,(Js===null?s.memoizedState:Js.next)===null&&(s=s.alternate,O.H=s===null||s.memoizedState===null?tg:Bf),e}function su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===B)return Co(e)}throw Error(a(438,String(e)))}function Sf(e){var s=null,o=ln.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var r=ln.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(s={data:r.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=nu(),ln.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),r=0;r<e;r++)o[r]=re;return s.index++,o}function ca(e,s){return typeof s=="function"?s(e):s}function ou(e){var s=Ws();return Cf(s,Zn,e)}function Cf(e,s,o){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=o;var f=e.baseQueue,m=r.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,r.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var T=v=null,F=null,pe=s,Me=!1;do{var ze=pe.lane&-536870913;if(ze!==pe.lane?(bn&ze)===ze:(la&ze)===ze){var xe=pe.revertLane;if(xe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),ze===Ir&&(Me=!0);else if((la&xe)===xe){pe=pe.next,xe===Ir&&(Me=!0);continue}else ze={lane:0,revertLane:pe.revertLane,gesture:null,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},F===null?(T=F=ze,v=m):F=F.next=ze,ln.lanes|=xe,Oa|=xe;ze=pe.action,fr&&o(m,ze),m=pe.hasEagerState?pe.eagerState:o(m,ze)}else xe={lane:ze,revertLane:pe.revertLane,gesture:pe.gesture,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null},F===null?(T=F=xe,v=m):F=F.next=xe,ln.lanes|=ze,Oa|=ze;pe=pe.next}while(pe!==null&&pe!==s);if(F===null?v=m:F.next=T,!Ct(m,e.memoizedState)&&(eo=!0,Me&&(o=Pr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=F,r.lastRenderedState=m}return f===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function kf(e){var s=Ws(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var r=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);Ct(m,s.memoizedState)||(eo=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,r]}function v_(e,s,o){var r=ln,f=Ws(),m=Cn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!Ct((Zn||f).memoizedState,o);if(v&&(f.memoizedState=o,eo=!0),f=f.queue,Tf(C_.bind(null,r,f,e),[e]),f.getSnapshot!==s||v||Js!==null&&Js.memoizedState.tag&1){if(r.flags|=2048,Fr(9,{destroy:void 0},S_.bind(null,r,f,o,s),null),cs===null)throw Error(a(349));m||(la&127)!==0||w_(r,s,o)}return o}function w_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=ln.updateQueue,s===null?(s=nu(),ln.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function S_(e,s,o,r){s.value=o,s.getSnapshot=r,k_(s)&&j_(e)}function C_(e,s,o){return o(function(){k_(s)&&j_(e)})}function k_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!Ct(e,o)}catch{return!0}}function j_(e){var s=sr(e,2);s!==null&&Zo(s,e,2)}function jf(e){var s=Po();if(typeof e=="function"){var o=e;if(e=o(),fr){Ne(!0);try{o()}finally{Ne(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},s}function M_(e,s,o,r){return e.baseState=o,Cf(e,Zn,typeof r=="function"?r:ca)}function d2(e,s,o,r,f){if(ru(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};O.T!==null?o(!0):m.isTransition=!1,r(m),o=s.pending,o===null?(m.next=s.pending=m,T_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function T_(e,s){var o=s.action,r=s.payload,f=e.state;if(s.isTransition){var m=O.T,v={};O.T=v;try{var T=o(f,r),F=O.S;F!==null&&F(v,T),E_(e,s,T)}catch(pe){Mf(e,s,pe)}finally{m!==null&&v.types!==null&&(m.types=v.types),O.T=m}}else try{m=o(f,r),E_(e,s,m)}catch(pe){Mf(e,s,pe)}}function E_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){A_(e,s,r)},function(r){return Mf(e,s,r)}):A_(e,s,o)}function A_(e,s,o){s.status="fulfilled",s.value=o,D_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,T_(e,o)))}function Mf(e,s,o){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do s.status="rejected",s.reason=o,D_(s),s=s.next;while(s!==r)}e.action=null}function D_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function N_(e,s){return s}function R_(e,s){if(Cn){var o=cs.formState;if(o!==null){e:{var r=ln;if(Cn){if(ws){t:{for(var f=ws,m=vi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Si(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ws=Si(f.nextSibling),r=f.data==="F!";break e}}Ma(r)}r=!1}r&&(s=o[0])}}return o=Po(),o.memoizedState=o.baseState=s,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N_,lastRenderedState:s},o.queue=r,o=Z_.bind(null,ln,r),r.dispatch=o,r=jf(!1),m=Rf.bind(null,ln,!1,r.queue),r=Po(),f={state:s,dispatch:null,action:e,pending:null},r.queue=f,o=d2.bind(null,ln,f,m,o),f.dispatch=o,r.memoizedState=e,[s,o,!1]}function B_(e){var s=Ws();return L_(s,Zn,e)}function L_(e,s,o){if(s=Cf(e,s,N_)[0],e=ou(ca)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var r=Bl(s)}catch(v){throw v===Hr?qc:v}else r=s;s=Ws();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ln.flags|=2048,Fr(9,{destroy:void 0},f2.bind(null,f,o),null)),[r,m,e]}function f2(e,s){e.action=s}function O_(e){var s=Ws(),o=Zn;if(o!==null)return L_(s,o,e);Ws(),s=s.memoizedState,o=Ws();var r=o.queue.dispatch;return o.memoizedState=e,[s,r,!1]}function Fr(e,s,o,r){return e={tag:e,create:o,deps:r,inst:s,next:null},s=ln.updateQueue,s===null&&(s=nu(),ln.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(r=o.next,o.next=e,e.next=r,s.lastEffect=e),e}function z_(){return Ws().memoizedState}function iu(e,s,o,r){var f=Po();ln.flags|=e,f.memoizedState=Fr(1|s,{destroy:void 0},o,r===void 0?null:r)}function au(e,s,o,r){var f=Ws();r=r===void 0?null:r;var m=f.memoizedState.inst;Zn!==null&&r!==null&&yf(r,Zn.memoizedState.deps)?f.memoizedState=Fr(s,m,o,r):(ln.flags|=e,f.memoizedState=Fr(1|s,m,o,r))}function $_(e,s){iu(8390656,8,e,s)}function Tf(e,s){au(2048,8,e,s)}function h2(e){ln.flags|=4;var s=ln.updateQueue;if(s===null)s=nu(),ln.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function I_(e){var s=Ws().memoizedState;return h2({ref:s,nextImpl:e}),function(){if(($n&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function P_(e,s){return au(4,2,e,s)}function H_(e,s){return au(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function V_(e,s,o){o=o!=null?o.concat([e]):null,au(4,4,U_.bind(null,s,e),o)}function Ef(){}function Y_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;return s!==null&&yf(s,r[1])?r[0]:(o.memoizedState=[e,s],e)}function W_(e,s){var o=Ws();s=s===void 0?null:s;var r=o.memoizedState;if(s!==null&&yf(s,r[1]))return r[0];if(r=e(),fr){Ne(!0);try{e()}finally{Ne(!1)}}return o.memoizedState=[r,s],r}function Af(e,s,o){return o===void 0||(la&1073741824)!==0&&(bn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Fg(),ln.lanes|=e,Oa|=e,o)}function F_(e,s,o,r){return Ct(o,s)?o:Vr.current!==null?(e=Af(e,o,r),Ct(e,s)||(eo=!0),e):(la&42)===0||(la&1073741824)!==0&&(bn&261930)===0?(eo=!0,e.memoizedState=o):(e=Fg(),ln.lanes|=e,Oa|=e,s)}function X_(e,s,o,r,f){var m=ee.p;ee.p=m!==0&&8>m?m:8;var v=O.T,T={};O.T=T,Rf(e,!1,s,o);try{var F=f(),pe=O.S;if(pe!==null&&pe(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var Me=l2(F,r);Ll(e,s,Me,ci(e))}else Ll(e,s,r,ci(e))}catch(ze){Ll(e,s,{then:function(){},status:"rejected",reason:ze},ci())}finally{ee.p=m,v!==null&&T.types!==null&&(v.types=T.types),O.T=v}}function m2(){}function Df(e,s,o,r){if(e.tag!==5)throw Error(a(476));var f=q_(e).queue;X_(e,f,s,Y,o===null?m2:function(){return G_(e),o(r)})}function q_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:Y},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function G_(e){var s=q_(e);s.next===null&&(s=e.alternate.memoizedState),Ll(e,s.next.queue,{},ci())}function Nf(){return Co(Zl)}function K_(){return Ws().memoizedState}function Q_(){return Ws().memoizedState}function p2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=ci();e=Aa(o);var r=Da(s,e,o);r!==null&&(Zo(r,s,o),Al(r,s,o)),s={cache:rf()},e.payload=s;return}s=s.return}}function _2(e,s,o){var r=ci();o={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ru(e)?J_(s,o):(o=Gd(e,s,o,r),o!==null&&(Zo(o,e,r),eg(o,s,r)))}function Z_(e,s,o){var r=ci();Ll(e,s,o,r)}function Ll(e,s,o,r){var f={lane:r,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(ru(e))J_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,T=m(v,o);if(f.hasEagerState=!0,f.eagerState=T,Ct(T,v))return Hc(e,s,f,0),cs===null&&Pc(),!1}catch{}finally{}if(o=Gd(e,s,f,r),o!==null)return Zo(o,e,r),eg(o,s,r),!0}return!1}function Rf(e,s,o,r){if(r={lane:2,revertLane:dh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ru(e)){if(s)throw Error(a(479))}else s=Gd(e,o,r,2),s!==null&&Zo(s,e,2)}function ru(e){var s=e.alternate;return e===ln||s!==null&&s===ln}function J_(e,s){Yr=eu=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function eg(e,s,o){if((o&4194048)!==0){var r=s.lanes;r&=e.pendingLanes,o|=r,s.lanes=o,os(e,o)}}var Ol={readContext:Co,use:su,useCallback:$s,useContext:$s,useEffect:$s,useImperativeHandle:$s,useLayoutEffect:$s,useInsertionEffect:$s,useMemo:$s,useReducer:$s,useRef:$s,useState:$s,useDebugValue:$s,useDeferredValue:$s,useTransition:$s,useSyncExternalStore:$s,useId:$s,useHostTransitionStatus:$s,useFormState:$s,useActionState:$s,useOptimistic:$s,useMemoCache:$s,useCacheRefresh:$s};Ol.useEffectEvent=$s;var tg={readContext:Co,use:su,useCallback:function(e,s){return Po().memoizedState=[e,s===void 0?null:s],e},useContext:Co,useEffect:$_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,iu(4194308,4,U_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return iu(4194308,4,e,s)},useInsertionEffect:function(e,s){iu(4,2,e,s)},useMemo:function(e,s){var o=Po();s=s===void 0?null:s;var r=e();if(fr){Ne(!0);try{e()}finally{Ne(!1)}}return o.memoizedState=[r,s],r},useReducer:function(e,s,o){var r=Po();if(o!==void 0){var f=o(s);if(fr){Ne(!0);try{o(s)}finally{Ne(!1)}}}else f=s;return r.memoizedState=r.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},r.queue=e,e=e.dispatch=_2.bind(null,ln,e),[r.memoizedState,e]},useRef:function(e){var s=Po();return e={current:e},s.memoizedState=e},useState:function(e){e=jf(e);var s=e.queue,o=Z_.bind(null,ln,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Po();return Af(o,e,s)},useTransition:function(){var e=jf(!1);return e=X_.bind(null,ln,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var r=ln,f=Po();if(Cn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),cs===null)throw Error(a(349));(bn&127)!==0||w_(r,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,$_(C_.bind(null,r,m,e),[e]),r.flags|=2048,Fr(9,{destroy:void 0},S_.bind(null,r,m,o,s),null),o},useId:function(){var e=Po(),s=cs.identifierPrefix;if(Cn){var o=Fi,r=Wi;o=(r&~(1<<32-kt(r)-1)).toString(32)+o,s="_"+s+"R_"+o,o=tu++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=c2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Nf,useFormState:R_,useActionState:R_,useOptimistic:function(e){var s=Po();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Rf.bind(null,ln,!0,o),o.dispatch=s,[e,s]},useMemoCache:Sf,useCacheRefresh:function(){return Po().memoizedState=p2.bind(null,ln)},useEffectEvent:function(e){var s=Po(),o={impl:e};return s.memoizedState=o,function(){if(($n&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Bf={readContext:Co,use:su,useCallback:Y_,useContext:Co,useEffect:Tf,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:ou,useRef:z_,useState:function(){return ou(ca)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Ws();return F_(o,Zn.memoizedState,e,s)},useTransition:function(){var e=ou(ca)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Nf,useFormState:B_,useActionState:B_,useOptimistic:function(e,s){var o=Ws();return M_(o,Zn,e,s)},useMemoCache:Sf,useCacheRefresh:Q_};Bf.useEffectEvent=I_;var ng={readContext:Co,use:su,useCallback:Y_,useContext:Co,useEffect:Tf,useImperativeHandle:V_,useInsertionEffect:P_,useLayoutEffect:H_,useMemo:W_,useReducer:kf,useRef:z_,useState:function(){return kf(ca)},useDebugValue:Ef,useDeferredValue:function(e,s){var o=Ws();return Zn===null?Af(o,e,s):F_(o,Zn.memoizedState,e,s)},useTransition:function(){var e=kf(ca)[0],s=Ws().memoizedState;return[typeof e=="boolean"?e:Bl(e),s]},useSyncExternalStore:v_,useId:K_,useHostTransitionStatus:Nf,useFormState:O_,useActionState:O_,useOptimistic:function(e,s){var o=Ws();return Zn!==null?M_(o,Zn,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Q_};ng.useEffectEvent=I_;function Lf(e,s,o,r){s=e.memoizedState,o=o(r,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Of={enqueueSetState:function(e,s,o){e=e._reactInternals;var r=ci(),f=Aa(r);f.payload=s,o!=null&&(f.callback=o),s=Da(e,f,r),s!==null&&(Zo(s,e,r),Al(s,e,r))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var r=ci(),f=Aa(r);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Da(e,f,r),s!==null&&(Zo(s,e,r),Al(s,e,r))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=ci(),r=Aa(o);r.tag=2,s!=null&&(r.callback=s),s=Da(e,r,o),s!==null&&(Zo(s,e,o),Al(s,e,o))}};function sg(e,s,o,r,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,m,v):s.prototype&&s.prototype.isPureReactComponent?!pt(o,r)||!pt(f,m):!0}function og(e,s,o,r){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,r),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function hr(e,s){var o=s;if("ref"in s){o={};for(var r in s)r!=="ref"&&(o[r]=s[r])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ig(e){Ic(e)}function ag(e){console.error(e)}function rg(e){Ic(e)}function lu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(r){setTimeout(function(){throw r})}}function lg(e,s,o){try{var r=e.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zf(e,s,o){return o=Aa(o),o.tag=3,o.payload={element:null},o.callback=function(){lu(e,s)},o}function cg(e){return e=Aa(e),e.tag=3,e}function ug(e,s,o,r){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;e.payload=function(){return f(m)},e.callback=function(){lg(s,o,r)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){lg(s,o,r),typeof f!="function"&&(za===null?za=new Set([this]):za.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function g2(e,s,o,r,f){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(s=o.alternate,s!==null&&$r(s,o,f,!0),o=ii.current,o!==null){switch(o.tag){case 31:case 13:return wi===null?bu():o.alternate===null&&Is===0&&(Is=3),o.flags&=-257,o.flags|=65536,o.lanes=f,r===Gc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([r]):s.add(r),lh(e,r,f)),!1;case 22:return o.flags|=65536,r===Gc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([r]):o.add(r)),lh(e,r,f)),!1}throw Error(a(435,o.tag))}return lh(e,r,f),bu(),!1}if(Cn)return s=ii.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,r!==tf&&(e=Error(a(422),{cause:r}),kl(yi(e,o)))):(r!==tf&&(s=Error(a(423),{cause:r}),kl(yi(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,r=yi(r,o),f=zf(e.stateNode,r,f),hf(e,f),Is!==4&&(Is=2)),!1;var m=Error(a(520),{cause:r});if(m=yi(m,o),Yl===null?Yl=[m]:Yl.push(m),Is!==4&&(Is=2),s===null)return!0;r=yi(r,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=zf(o.stateNode,r,e),hf(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(za===null||!za.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=cg(f),ug(f,e,o,r),hf(o,f),!1}o=o.return}while(o!==null);return!1}var $f=Error(a(461)),eo=!1;function ko(e,s,o,r){s.child=e===null?m_(s,null,o,r):dr(s,e.child,o,r)}function dg(e,s,o,r,f){o=o.render;var m=s.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return rr(s),r=xf(e,s,o,v,m,f),T=bf(),e!==null&&!eo?(vf(e,s,f),ua(e,s,f)):(Cn&&T&&Jd(s),s.flags|=1,ko(e,s,r,f),s.child)}function fg(e,s,o,r,f){if(e===null){var m=o.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,hg(e,s,m,r,f)):(e=Vc(o.type,null,r,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Ff(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:pt,o(v,r)&&e.ref===s.ref)return ua(e,s,f)}return s.flags|=1,e=oa(m,r),e.ref=s.ref,e.return=s,s.child=e}function hg(e,s,o,r,f){if(e!==null){var m=e.memoizedProps;if(pt(m,r)&&e.ref===s.ref)if(eo=!1,s.pendingProps=r=m,Ff(e,f))(e.flags&131072)!==0&&(eo=!0);else return s.lanes=e.lanes,ua(e,s,f)}return If(e,s,o,r,f)}function mg(e,s,o,r){var f=r.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(r=s.child=e.child,f=0;r!==null;)f=f|r.lanes|r.childLanes,r=r.sibling;r=f&~m}else r=0,s.child=null;return pg(e,s,m,o,r)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xc(s,m!==null?m.cachePool:null),m!==null?g_(s,m):pf(),y_(s);else return r=s.lanes=536870912,pg(e,s,m!==null?m.baseLanes|o:o,o,r)}else m!==null?(Xc(s,m.cachePool),g_(s,m),Ra(),s.memoizedState=null):(e!==null&&Xc(s,null),pf(),Ra());return ko(e,s,f,o),s.child}function zl(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function pg(e,s,o,r,f){var m=cf();return m=m===null?null:{parent:Zs._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Xc(s,null),pf(),y_(s),e!==null&&$r(e,s,r,!0),s.childLanes=f,null}function cu(e,s){return s=du({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function _g(e,s,o){return dr(s,e.child,null,o),e=cu(s,s.pendingProps),e.flags|=2,ai(s),s.memoizedState=null,e}function y2(e,s,o){var r=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Cn){if(r.mode==="hidden")return e=cu(s,r),s.lanes=536870912,zl(null,e);if(gf(s),(e=ws)?(e=T0(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,So=s,ws=null)):e=null,e===null)throw Ma(s);return s.lanes=536870912,null}return cu(s,r)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(gf(s),f)if(s.flags&256)s.flags&=-257,s=_g(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(eo||$r(e,s,o,!1),f=(o&e.childLanes)!==0,eo||f){if(r=cs,r!==null&&(v=Kn(r,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,sr(e,v),Zo(r,e,v),$f;bu(),s=_g(e,s,o)}else e=m.treeContext,ws=Si(v.nextSibling),So=s,Cn=!0,ja=null,vi=!1,e!==null&&n_(s,e),s=cu(s,r),s.flags|=4096;return s}return e=oa(e.child,{mode:r.mode,children:r.children}),e.ref=s.ref,s.child=e,e.return=s,e}function uu(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function If(e,s,o,r,f){return rr(s),o=xf(e,s,o,r,void 0,f),r=bf(),e!==null&&!eo?(vf(e,s,f),ua(e,s,f)):(Cn&&r&&Jd(s),s.flags|=1,ko(e,s,o,f),s.child)}function gg(e,s,o,r,f,m){return rr(s),s.updateQueue=null,o=b_(s,r,o,f),x_(e),r=bf(),e!==null&&!eo?(vf(e,s,m),ua(e,s,m)):(Cn&&r&&Jd(s),s.flags|=1,ko(e,s,o,m),s.child)}function yg(e,s,o,r,f){if(rr(s),s.stateNode===null){var m=Br,v=o.contextType;typeof v=="object"&&v!==null&&(m=Co(v)),m=new o(r,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=r,m.state=s.memoizedState,m.refs={},df(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?Co(v):Br,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Lf(s,o,v,r),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Of.enqueueReplaceState(m,m.state,null),Nl(s,r,m,f),Dl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!0}else if(e===null){m=s.stateNode;var T=s.memoizedProps,F=hr(o,T);m.props=F;var pe=m.context,Me=o.contextType;v=Br,typeof Me=="object"&&Me!==null&&(v=Co(Me));var ze=o.getDerivedStateFromProps;Me=typeof ze=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=s.pendingProps!==T,Me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||pe!==v)&&og(s,m,r,v),Ea=!1;var xe=s.memoizedState;m.state=xe,Nl(s,r,m,f),Dl(),pe=s.memoizedState,T||xe!==pe||Ea?(typeof ze=="function"&&(Lf(s,o,ze,r),pe=s.memoizedState),(F=Ea||sg(s,o,F,r,xe,pe,v))?(Me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=pe),m.props=r,m.state=pe,m.context=v,r=F):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{m=s.stateNode,ff(e,s),v=s.memoizedProps,Me=hr(o,v),m.props=Me,ze=s.pendingProps,xe=m.context,pe=o.contextType,F=Br,typeof pe=="object"&&pe!==null&&(F=Co(pe)),T=o.getDerivedStateFromProps,(pe=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ze||xe!==F)&&og(s,m,r,F),Ea=!1,xe=s.memoizedState,m.state=xe,Nl(s,r,m,f),Dl();var ve=s.memoizedState;v!==ze||xe!==ve||Ea||e!==null&&e.dependencies!==null&&Wc(e.dependencies)?(typeof T=="function"&&(Lf(s,o,T,r),ve=s.memoizedState),(Me=Ea||sg(s,o,Me,r,xe,ve,F)||e!==null&&e.dependencies!==null&&Wc(e.dependencies))?(pe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ve,F),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ve,F)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=ve),m.props=r,m.state=ve,m.context=F,r=Me):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&xe===e.memoizedState||(s.flags|=1024),r=!1)}return m=r,uu(e,s),r=(s.flags&128)!==0,m||r?(m=s.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&r?(s.child=dr(s,e.child,null,f),s.child=dr(s,null,o,f)):ko(e,s,o,f),s.memoizedState=m.state,e=s.child):e=ua(e,s,f),e}function xg(e,s,o,r){return ir(),s.flags|=256,ko(e,s,o,r),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:l_()}}function Uf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=li),e}function bg(e,s,o){var r=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Ys.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Cn){if(f?Na(s):Ra(),(e=ws)?(e=T0(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Wi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},o=Jp(e),o.return=s,s.child=o,So=s,ws=null)):e=null,e===null)throw Ma(s);return Ch(e)?s.lanes=32:s.lanes=536870912,null}var T=r.children;return r=r.fallback,f?(Ra(),f=s.mode,T=du({mode:"hidden",children:T},f),r=or(r,f,o,null),T.return=s,r.return=s,T.sibling=r,s.child=T,r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Pf,zl(null,r)):(Na(s),Vf(s,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(m)s.flags&256?(Na(s),s.flags&=-257,s=Yf(e,s,o)):s.memoizedState!==null?(Ra(),s.child=e.child,s.flags|=128,s=null):(Ra(),T=r.fallback,f=s.mode,r=du({mode:"visible",children:r.children},f),T=or(T,f,o,null),T.flags|=2,r.return=s,T.return=s,r.sibling=T,s.child=r,dr(s,e.child,null,o),r=s.child,r.memoizedState=Hf(o),r.childLanes=Uf(e,v,o),s.memoizedState=Pf,s=zl(null,r));else if(Na(s),Ch(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var pe=v.dgst;v=pe,r=Error(a(419)),r.stack="",r.digest=v,kl({value:r,source:null,stack:null}),s=Yf(e,s,o)}else if(eo||$r(e,s,o,!1),v=(o&e.childLanes)!==0,eo||v){if(v=cs,v!==null&&(r=Kn(v,o),r!==0&&r!==F.retryLane))throw F.retryLane=r,sr(e,r),Zo(v,e,r),$f;Sh(T)||bu(),s=Yf(e,s,o)}else Sh(T)?(s.flags|=192,s.child=e.child,s=null):(e=F.treeContext,ws=Si(T.nextSibling),So=s,Cn=!0,ja=null,vi=!1,e!==null&&n_(s,e),s=Vf(s,r.children),s.flags|=4096);return s}return f?(Ra(),T=r.fallback,f=s.mode,F=e.child,pe=F.sibling,r=oa(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,pe!==null?T=oa(pe,T):(T=or(T,f,o,null),T.flags|=2),T.return=s,r.return=s,r.sibling=T,s.child=r,zl(null,r),r=s.child,T=e.child.memoizedState,T===null?T=Hf(o):(f=T.cachePool,f!==null?(F=Zs._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=l_(),T={baseLanes:T.baseLanes|o,cachePool:f}),r.memoizedState=T,r.childLanes=Uf(e,v,o),s.memoizedState=Pf,zl(e.child,r)):(Na(s),o=e.child,e=o.sibling,o=oa(o,{mode:"visible",children:r.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Vf(e,s){return s=du({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function du(e,s){return e=oi(22,e,null,s),e.lanes=0,e}function Yf(e,s,o){return dr(s,e.child,null,o),e=Vf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function vg(e,s,o){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s),of(e.return,s,o)}function Wf(e,s,o,r,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function wg(e,s,o){var r=s.pendingProps,f=r.revealOrder,m=r.tail;r=r.children;var v=Ys.current,T=(v&2)!==0;if(T?(v=v&1|2,s.flags|=128):v&=1,se(Ys,v),ko(e,s,r,o),r=Cn?Cl:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,o,s);else if(e.tag===19)vg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Jc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Wf(s,!1,f,o,m,r);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Jc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Wf(s,!0,o,null,m,r);break;case"together":Wf(s,!1,null,null,void 0,r);break;default:s.memoizedState=null}return s.child}function ua(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Oa|=s.lanes,(o&s.childLanes)===0)if(e!==null){if($r(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=oa(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=oa(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Ff(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Wc(e)))}function x2(e,s,o){switch(s.tag){case 3:mt(s,s.stateNode.containerInfo),Ta(s,Zs,e.memoizedState.cache),ir();break;case 27:case 5:Pe(s);break;case 4:mt(s,s.stateNode.containerInfo);break;case 10:Ta(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,gf(s),null;break;case 13:var r=s.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(s),s.flags|=128,null):(o&s.child.childLanes)!==0?bg(e,s,o):(Na(s),e=ua(e,s,o),e!==null?e.sibling:null);Na(s);break;case 19:var f=(e.flags&128)!==0;if(r=(o&s.childLanes)!==0,r||($r(e,s,o,!1),r=(o&s.childLanes)!==0),f){if(r)return wg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Ys,Ys.current),r)break;return null;case 22:return s.lanes=0,mg(e,s,o,s.pendingProps);case 24:Ta(s,Zs,e.memoizedState.cache)}return ua(e,s,o)}function Sg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)eo=!0;else{if(!Ff(e,o)&&(s.flags&128)===0)return eo=!1,x2(e,s,o);eo=(e.flags&131072)!==0}else eo=!1,Cn&&(s.flags&1048576)!==0&&t_(s,Cl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var r=s.pendingProps;if(e=cr(s.elementType),s.type=e,typeof e=="function")Kd(e)?(r=hr(e,r),s.tag=1,s=yg(null,s,e,r,o)):(s.tag=0,s=If(null,s,e,r,o));else{if(e!=null){var f=e.$$typeof;if(f===A){s.tag=11,s=dg(null,s,e,r,o);break e}else if(f===X){s.tag=14,s=fg(null,s,e,r,o);break e}}throw s=Q(e)||e,Error(a(306,s,""))}}return s;case 0:return If(e,s,s.type,s.pendingProps,o);case 1:return r=s.type,f=hr(r,s.pendingProps),yg(e,s,r,f,o);case 3:e:{if(mt(s,s.stateNode.containerInfo),e===null)throw Error(a(387));r=s.pendingProps;var m=s.memoizedState;f=m.element,ff(e,s),Nl(s,r,null,o);var v=s.memoizedState;if(r=v.cache,Ta(s,Zs,r),r!==m.cache&&af(s,[Zs],o,!0),Dl(),r=v.element,m.isDehydrated)if(m={element:r,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=xg(e,s,r,o);break e}else if(r!==f){f=yi(Error(a(424)),s),kl(f),s=xg(e,s,r,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ws=Si(e.firstChild),So=s,Cn=!0,ja=null,vi=!0,o=m_(s,null,r,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ir(),r===f){s=ua(e,s,o);break e}ko(e,s,r,o)}s=s.child}return s;case 26:return uu(e,s),e===null?(o=B0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Cn||(o=s.type,e=s.pendingProps,r=Mu(We.current).createElement(o),r[fn]=s,r[pn]=e,jo(r,o,e),Pn(r),s.stateNode=r):s.memoizedState=B0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Pe(s),e===null&&Cn&&(r=s.stateNode=D0(s.type,s.pendingProps,We.current),So=s,vi=!0,f=ws,Ha(s.type)?(kh=f,ws=Si(r.firstChild)):ws=f),ko(e,s,s.pendingProps.children,o),uu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Cn&&((f=r=ws)&&(r=G2(r,s.type,s.pendingProps,vi),r!==null?(s.stateNode=r,So=s,ws=Si(r.firstChild),vi=!1,f=!0):f=!1),f||Ma(s)),Pe(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,r=m.children,bh(f,m)?r=null:v!==null&&bh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=xf(e,s,u2,null,null,o),Zl._currentValue=f),uu(e,s),ko(e,s,r,o),s.child;case 6:return e===null&&Cn&&((e=o=ws)&&(o=K2(o,s.pendingProps,vi),o!==null?(s.stateNode=o,So=s,ws=null,e=!0):e=!1),e||Ma(s)),null;case 13:return bg(e,s,o);case 4:return mt(s,s.stateNode.containerInfo),r=s.pendingProps,e===null?s.child=dr(s,null,r,o):ko(e,s,r,o),s.child;case 11:return dg(e,s,s.type,s.pendingProps,o);case 7:return ko(e,s,s.pendingProps,o),s.child;case 8:return ko(e,s,s.pendingProps.children,o),s.child;case 12:return ko(e,s,s.pendingProps.children,o),s.child;case 10:return r=s.pendingProps,Ta(s,s.type,r.value),ko(e,s,r.children,o),s.child;case 9:return f=s.type._context,r=s.pendingProps.children,rr(s),f=Co(f),r=r(f),s.flags|=1,ko(e,s,r,o),s.child;case 14:return fg(e,s,s.type,s.pendingProps,o);case 15:return hg(e,s,s.type,s.pendingProps,o);case 19:return wg(e,s,o);case 31:return y2(e,s,o);case 22:return mg(e,s,o,s.pendingProps);case 24:return rr(s),r=Co(Zs),e===null?(f=cf(),f===null&&(f=cs,m=rf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:r,cache:f},df(s),Ta(s,Zs,f)):((e.lanes&o)!==0&&(ff(e,s),Nl(s,null,null,o),Dl()),f=e.memoizedState,m=s.memoizedState,f.parent!==r?(f={parent:r,cache:r},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ta(s,Zs,r)):(r=m.cache,Ta(s,Zs,r),r!==f.cache&&af(s,[Zs],o,!0))),ko(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function da(e){e.flags|=4}function Xf(e,s,o,r,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw ur=Gc,uf}else e.flags&=-16777217}function Cg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I0(s))if(Kg())e.flags|=8192;else throw ur=Gc,uf}function fu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?Bt():536870912,e.lanes|=s,Kr|=s)}function $l(e,s){if(!Cn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ss(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,r=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags&65011712,r|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,r|=f.subtreeFlags,r|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=r,e.childLanes=o,s}function b2(e,s,o){var r=s.pendingProps;switch(ef(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ss(s),null;case 1:return Ss(s),null;case 3:return o=s.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),s.memoizedState.cache!==r&&(s.flags|=2048),ra(Zs),at(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zr(s)?da(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nf())),Ss(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(da(s),m!==null?(Ss(s),Cg(s,m)):(Ss(s),Xf(s,f,null,r,o))):m?m!==e.memoizedState?(da(s),Ss(s),Cg(s,m)):(Ss(s),s.flags&=-16777217):(e=e.memoizedProps,e!==r&&da(s),Ss(s),Xf(s,f,e,r,o)),null;case 27:if(ct(s),o=We.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&da(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}e=ce.current,zr(s)?s_(s):(e=D0(f,r,o),s.stateNode=e,da(s))}return Ss(s),null;case 5:if(ct(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==r&&da(s);else{if(!r){if(s.stateNode===null)throw Error(a(166));return Ss(s),null}if(m=ce.current,zr(s))s_(s);else{var v=Mu(We.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?m.multiple=!0:r.size&&(m.size=r.size);break;default:m=typeof r.is=="string"?v.createElement(f,{is:r.is}):v.createElement(f)}}m[fn]=s,m[pn]=r;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(jo(m,f,r),f){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&da(s)}}return Ss(s),Xf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==r&&da(s);else{if(typeof r!="string"&&s.stateNode===null)throw Error(a(166));if(e=We.current,zr(s)){if(e=s.stateNode,o=s.memoizedProps,r=null,f=So,f!==null)switch(f.tag){case 27:case 5:r=f.memoizedProps}e[fn]=s,e=!!(e.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||b0(e.nodeValue,o)),e||Ma(s,!0)}else e=Mu(e).createTextNode(r),e[fn]=s,s.stateNode=e}return Ss(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(r=zr(s),o!==null){if(e===null){if(!r)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=s}else ir(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),e=!1}else o=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(ai(s),s):(ai(s),null);if((s.flags&128)!==0)throw Error(a(558))}return Ss(s),null;case 13:if(r=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=zr(s),r!==null&&r.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=s}else ir(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ss(s),f=!1}else f=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(ai(s),s):(ai(s),null)}return ai(s),(s.flags&128)!==0?(s.lanes=o,s):(o=r!==null,e=e!==null&&e.memoizedState!==null,o&&(r=s.child,f=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(f=r.alternate.memoizedState.cachePool.pool),m=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(m=r.memoizedState.cachePool.pool),m!==f&&(r.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),fu(s,s.updateQueue),Ss(s),null);case 4:return at(),e===null&&ph(s.stateNode.containerInfo),Ss(s),null;case 10:return ra(s.type),Ss(s),null;case 19:if(ae(Ys),r=s.memoizedState,r===null)return Ss(s),null;if(f=(s.flags&128)!==0,m=r.rendering,m===null)if(f)$l(r,!1);else{if(Is!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Jc(e),m!==null){for(s.flags|=128,$l(r,!1),e=m.updateQueue,s.updateQueue=e,fu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Zp(o,e),o=o.sibling;return se(Ys,Ys.current&1|2),Cn&&ia(s,r.treeForkCount),s.child}e=e.sibling}r.tail!==null&&tt()>gu&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304)}else{if(!f)if(e=Jc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,fu(s,e),$l(r,!0),r.tail===null&&r.tailMode==="hidden"&&!m.alternate&&!Cn)return Ss(s),null}else 2*tt()-r.renderingStartTime>gu&&o!==536870912&&(s.flags|=128,f=!0,$l(r,!1),s.lanes=4194304);r.isBackwards?(m.sibling=s.child,s.child=m):(e=r.last,e!==null?e.sibling=m:s.child=m,r.last=m)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=tt(),e.sibling=null,o=Ys.current,se(Ys,f?o&1|2:o&1),Cn&&ia(s,r.treeForkCount),e):(Ss(s),null);case 22:case 23:return ai(s),_f(),r=s.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(s.flags|=8192):r&&(s.flags|=8192),r?(o&536870912)!==0&&(s.flags&128)===0&&(Ss(s),s.subtreeFlags&6&&(s.flags|=8192)):Ss(s),o=s.updateQueue,o!==null&&fu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(s.flags|=2048),e!==null&&ae(lr),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ra(Zs),Ss(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function v2(e,s){switch(ef(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ra(Zs),at(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return ct(s),null;case 31:if(s.memoizedState!==null){if(ai(s),s.alternate===null)throw Error(a(340));ir()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(ai(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));ir()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ae(Ys),null;case 4:return at(),null;case 10:return ra(s.type),null;case 22:case 23:return ai(s),_f(),e!==null&&ae(lr),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ra(Zs),null;case 25:return null;default:return null}}function kg(e,s){switch(ef(s),s.tag){case 3:ra(Zs),at();break;case 26:case 27:case 5:ct(s);break;case 4:at();break;case 31:s.memoizedState!==null&&ai(s);break;case 13:ai(s);break;case 19:ae(Ys);break;case 10:ra(s.type);break;case 22:case 23:ai(s),_f(),e!==null&&ae(lr);break;case 24:ra(Zs)}}function Il(e,s){try{var o=s.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var f=r.next;o=f;do{if((o.tag&e)===e){r=void 0;var m=o.create,v=o.inst;r=m(),v.destroy=r}o=o.next}while(o!==f)}}catch(T){qn(s,s.return,T)}}function Ba(e,s,o){try{var r=s.updateQueue,f=r!==null?r.lastEffect:null;if(f!==null){var m=f.next;r=m;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=s;var F=o,pe=T;try{pe()}catch(Me){qn(f,F,Me)}}}r=r.next}while(r!==m)}}catch(Me){qn(s,s.return,Me)}}function jg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{__(s,o)}catch(r){qn(e,e.return,r)}}}function Mg(e,s,o){o.props=hr(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(r){qn(e,s,r)}}function Pl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof o=="function"?e.refCleanup=o(r):o.current=r}}catch(f){qn(e,s,f)}}function Xi(e,s){var o=e.ref,r=e.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(f){qn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){qn(e,s,f)}else o.current=null}function Tg(e){var s=e.type,o=e.memoizedProps,r=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(f){qn(e,e.return,f)}}function qf(e,s,o){try{var r=e.stateNode;V2(r,e.type,o,s),r[pn]=s}catch(f){qn(e,e.return,f)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=mo));else if(r!==4&&(r===27&&Ha(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(Kf(e,s,o),e=e.sibling;e!==null;)Kf(e,s,o),e=e.sibling}function hu(e,s,o){var r=e.tag;if(r===5||r===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(r!==4&&(r===27&&Ha(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(hu(e,s,o),e=e.sibling;e!==null;)hu(e,s,o),e=e.sibling}function Ag(e){var s=e.stateNode,o=e.memoizedProps;try{for(var r=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);jo(s,r,o),s[fn]=e,s[pn]=o}catch(m){qn(e,e.return,m)}}var fa=!1,to=!1,Qf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,_o=null;function w2(e,s){if(e=e.containerInfo,yh=Bu,e=Mn(e),Un(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var f=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,T=-1,F=-1,pe=0,Me=0,ze=e,xe=null;t:for(;;){for(var ve;ze!==o||f!==0&&ze.nodeType!==3||(T=v+f),ze!==m||r!==0&&ze.nodeType!==3||(F=v+r),ze.nodeType===3&&(v+=ze.nodeValue.length),(ve=ze.firstChild)!==null;)xe=ze,ze=ve;for(;;){if(ze===e)break t;if(xe===o&&++pe===f&&(T=v),xe===m&&++Me===r&&(F=v),(ve=ze.nextSibling)!==null)break;ze=xe,xe=ze.parentNode}ze=ve}o=T===-1||F===-1?null:{start:T,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(xh={focusedElem:e,selectionRange:o},Bu=!1,_o=s;_o!==null;)if(s=_o,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,_o=e;else for(;_o!==null;){switch(s=_o,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,r=o.stateNode;try{var Tt=hr(o.type,f);e=r.getSnapshotBeforeUpdate(Tt,m),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ft){qn(o,o.return,Ft)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)wh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,_o=e;break}_o=s.return}}function Ng(e,s,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:ma(e,o),r&4&&Il(5,o);break;case 1:if(ma(e,o),r&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){qn(o,o.return,v)}else{var f=hr(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){qn(o,o.return,v)}}r&64&&jg(o),r&512&&Pl(o,o.return);break;case 3:if(ma(e,o),r&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{__(e,s)}catch(v){qn(o,o.return,v)}}break;case 27:s===null&&r&4&&Ag(o);case 26:case 5:ma(e,o),s===null&&r&4&&Tg(o),r&512&&Pl(o,o.return);break;case 12:ma(e,o);break;case 31:ma(e,o),r&4&&Lg(e,o);break;case 13:ma(e,o),r&4&&Og(e,o),r&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=D2.bind(null,o),Q2(e,o))));break;case 22:if(r=o.memoizedState!==null||fa,!r){s=s!==null&&s.memoizedState!==null||to,f=fa;var m=to;fa=r,(to=s)&&!m?pa(e,o,(o.subtreeFlags&8772)!==0):ma(e,o),fa=f,to=m}break;case 30:break;default:ma(e,o)}}function Rg(e){var s=e.alternate;s!==null&&(e.alternate=null,Rg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&go(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var js=null,qo=!1;function ha(e,s,o){for(o=o.child;o!==null;)Bg(e,s,o),o=o.sibling}function Bg(e,s,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ge,o)}catch{}switch(o.tag){case 26:to||Xi(o,s),ha(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:to||Xi(o,s);var r=js,f=qo;Ha(o.type)&&(js=o.stateNode,qo=!1),ha(e,s,o),Gl(o.stateNode),js=r,qo=f;break;case 5:to||Xi(o,s);case 6:if(r=js,f=qo,js=null,ha(e,s,o),js=r,qo=f,js!==null)if(qo)try{(js.nodeType===9?js.body:js.nodeName==="HTML"?js.ownerDocument.body:js).removeChild(o.stateNode)}catch(m){qn(o,s,m)}else try{js.removeChild(o.stateNode)}catch(m){qn(o,s,m)}break;case 18:js!==null&&(qo?(e=js,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ol(e)):j0(js,o.stateNode));break;case 4:r=js,f=qo,js=o.stateNode.containerInfo,qo=!0,ha(e,s,o),js=r,qo=f;break;case 0:case 11:case 14:case 15:Ba(2,o,s),to||Ba(4,o,s),ha(e,s,o);break;case 1:to||(Xi(o,s),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Mg(o,s,r)),ha(e,s,o);break;case 21:ha(e,s,o);break;case 22:to=(r=to)||o.memoizedState!==null,ha(e,s,o),to=r;break;default:ha(e,s,o)}}function Lg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ol(e)}catch(o){qn(s,s.return,o)}}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(o){qn(s,s.return,o)}}function S2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Dg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Dg),s;default:throw Error(a(435,e.tag))}}function mu(e,s){var o=S2(e);s.forEach(function(r){if(!o.has(r)){o.add(r);var f=N2.bind(null,e,r);r.then(f,f)}})}function Go(e,s){var o=s.deletions;if(o!==null)for(var r=0;r<o.length;r++){var f=o[r],m=e,v=s,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ha(T.type)){js=T.stateNode,qo=!1;break e}break;case 5:js=T.stateNode,qo=!1;break e;case 3:case 4:js=T.stateNode.containerInfo,qo=!0;break e}T=T.return}if(js===null)throw Error(a(160));Bg(m,v,f),js=null,qo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)zg(s,e),s=s.sibling}var zi=null;function zg(e,s){var o=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Go(s,e),Ko(e),r&4&&(Ba(3,e,e.return),Il(3,e),Ba(5,e,e.return));break;case 1:Go(s,e),Ko(e),r&512&&(to||o===null||Xi(o,o.return)),r&64&&fa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var f=zi;if(Go(s,e),Ko(e),r&512&&(to||o===null||Xi(o,o.return)),r&4){var m=o!==null?o.memoizedState:null;if(r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null){e:{r=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(r){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ns]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(r),f.head.insertBefore(m,f.querySelector("head > title"))),jo(m,r,o),m[fn]=e,Pn(m),r=m;break e;case"link":var v=z0("link","href",f).get(r+(o.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(r),jo(m,r,o),f.head.appendChild(m);break;case"meta":if(v=z0("meta","content",f).get(r+(o.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(T,1);break t}}m=f.createElement(r),jo(m,r,o),f.head.appendChild(m);break;default:throw Error(a(468,r))}m[fn]=e,Pn(m),r=m}e.stateNode=r}else $0(f,e.type,e.stateNode);else e.stateNode=O0(f,r,e.memoizedProps);else m!==r?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,r===null?$0(f,e.type,e.stateNode):O0(f,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qf(e,e.memoizedProps,o.memoizedProps)}break;case 27:Go(s,e),Ko(e),r&512&&(to||o===null||Xi(o,o.return)),o!==null&&r&4&&qf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Go(s,e),Ko(e),r&512&&(to||o===null||Xi(o,o.return)),e.flags&32){f=e.stateNode;try{Ks(f,"")}catch(Tt){qn(e,e.return,Tt)}}r&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,o!==null?o.memoizedProps:f)),r&1024&&(Qf=!0);break;case 6:if(Go(s,e),Ko(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,o=e.stateNode;try{o.nodeValue=r}catch(Tt){qn(e,e.return,Tt)}}break;case 3:if(Au=null,f=zi,zi=Tu(s.containerInfo),Go(s,e),zi=f,Ko(e),r&4&&o!==null&&o.memoizedState.isDehydrated)try{ol(s.containerInfo)}catch(Tt){qn(e,e.return,Tt)}Qf&&(Qf=!1,$g(e));break;case 4:r=zi,zi=Tu(e.stateNode.containerInfo),Go(s,e),Ko(e),zi=r;break;case 12:Go(s,e),Ko(e);break;case 31:Go(s,e),Ko(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 13:Go(s,e),Ko(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_u=tt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 22:f=e.memoizedState!==null;var F=o!==null&&o.memoizedState!==null,pe=fa,Me=to;if(fa=pe||f,to=Me||F,Go(s,e),to=Me,fa=pe,Ko(e),r&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||F||fa||to||mr(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){F=o=s;try{if(m=F.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=F.stateNode;var ze=F.memoizedProps.style,xe=ze!=null&&ze.hasOwnProperty("display")?ze.display:null;T.style.display=xe==null||typeof xe=="boolean"?"":(""+xe).trim()}}catch(Tt){qn(F,F.return,Tt)}}}else if(s.tag===6){if(o===null){F=s;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Tt){qn(F,F.return,Tt)}}}else if(s.tag===18){if(o===null){F=s;try{var ve=F.stateNode;f?M0(ve,!0):M0(F.stateNode,!1)}catch(Tt){qn(F,F.return,Tt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}r&4&&(r=e.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,mu(e,o))));break;case 19:Go(s,e),Ko(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,mu(e,r)));break;case 30:break;case 21:break;default:Go(s,e),Ko(e)}}function Ko(e){var s=e.flags;if(s&2){try{for(var o,r=e.return;r!==null;){if(Eg(r)){o=r;break}r=r.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Gf(e);hu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(Ks(v,""),o.flags&=-33);var T=Gf(e);hu(e,T,v);break;case 3:case 4:var F=o.stateNode.containerInfo,pe=Gf(e);Kf(e,pe,F);break;default:throw Error(a(161))}}catch(Me){qn(e,e.return,Me)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;$g(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function ma(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Ng(e,s.alternate,s),s=s.sibling}function mr(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:Ba(4,s,s.return),mr(s);break;case 1:Xi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&Mg(s,s.return,o),mr(s);break;case 27:Gl(s.stateNode);case 26:case 5:Xi(s,s.return),mr(s);break;case 22:s.memoizedState===null&&mr(s);break;case 30:mr(s);break;default:mr(s)}e=e.sibling}}function pa(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var r=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:pa(f,m,o),Il(4,m);break;case 1:if(pa(f,m,o),r=m,f=r.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(pe){qn(r,r.return,pe)}if(r=m,f=r.updateQueue,f!==null){var T=r.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)p_(F[f],T)}catch(pe){qn(r,r.return,pe)}}o&&v&64&&jg(m),Pl(m,m.return);break;case 27:Ag(m);case 26:case 5:pa(f,m,o),o&&r===null&&v&4&&Tg(m),Pl(m,m.return);break;case 12:pa(f,m,o);break;case 31:pa(f,m,o),o&&v&4&&Lg(f,m);break;case 13:pa(f,m,o),o&&v&4&&Og(f,m);break;case 22:m.memoizedState===null&&pa(f,m,o),Pl(m,m.return);break;case 30:break;default:pa(f,m,o)}s=s.sibling}}function Zf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&jl(o))}function Jf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e))}function $i(e,s,o,r){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Ig(e,s,o,r),s=s.sibling}function Ig(e,s,o,r){var f=s.flags;switch(s.tag){case 0:case 11:case 15:$i(e,s,o,r),f&2048&&Il(9,s);break;case 1:$i(e,s,o,r);break;case 3:$i(e,s,o,r),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&jl(e)));break;case 12:if(f&2048){$i(e,s,o,r),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){qn(s,s.return,F)}}else $i(e,s,o,r);break;case 31:$i(e,s,o,r);break;case 13:$i(e,s,o,r);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?$i(e,s,o,r):Hl(e,s):m._visibility&2?$i(e,s,o,r):(m._visibility|=2,Xr(e,s,o,r,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(v,s);break;case 24:$i(e,s,o,r),f&2048&&Jf(s.alternate,s);break;default:$i(e,s,o,r)}}function Xr(e,s,o,r,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,T=o,F=r,pe=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(m,v,T,F,f),Il(8,v);break;case 23:break;case 22:var Me=v.stateNode;v.memoizedState!==null?Me._visibility&2?Xr(m,v,T,F,f):Hl(m,v):(Me._visibility|=2,Xr(m,v,T,F,f)),f&&pe&2048&&Zf(v.alternate,v);break;case 24:Xr(m,v,T,F,f),f&&pe&2048&&Jf(v.alternate,v);break;default:Xr(m,v,T,F,f)}s=s.sibling}}function Hl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,r=s,f=r.flags;switch(r.tag){case 22:Hl(o,r),f&2048&&Zf(r.alternate,r);break;case 24:Hl(o,r),f&2048&&Jf(r.alternate,r);break;default:Hl(o,r)}s=s.sibling}}var Ul=8192;function qr(e,s,o){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Pg(e,s,o),e=e.sibling}function Pg(e,s,o){switch(e.tag){case 26:qr(e,s,o),e.flags&Ul&&e.memoizedState!==null&&cv(o,zi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,s,o);break;case 3:case 4:var r=zi;zi=Tu(e.stateNode.containerInfo),qr(e,s,o),zi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ul,Ul=16777216,qr(e,s,o),Ul=r):qr(e,s,o));break;default:qr(e,s,o)}}function Hg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Vl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];_o=r,Vg(r,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:Vl(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Vl(e);break;case 12:Vl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,pu(e)):Vl(e);break;default:Vl(e)}}function pu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var r=s[o];_o=r,Vg(r,e)}Hg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:Ba(8,s,s.return),pu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,pu(s));break;default:pu(s)}e=e.sibling}}function Vg(e,s){for(;_o!==null;){var o=_o;switch(o.tag){case 0:case 11:case 15:Ba(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jl(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,_o=r;else e:for(o=e;_o!==null;){r=_o;var f=r.sibling,m=r.return;if(Rg(r),r===o){_o=null;break e}if(f!==null){f.return=m,_o=f;break e}_o=m}}}var C2={getCacheForType:function(e){var s=Co(Zs),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return Co(Zs).controller.signal}},k2=typeof WeakMap=="function"?WeakMap:Map,$n=0,cs=null,gn=null,bn=0,Xn=0,ri=null,La=!1,Gr=!1,eh=!1,_a=0,Is=0,Oa=0,pr=0,th=0,li=0,Kr=0,Yl=null,Qo=null,nh=!1,_u=0,Yg=0,gu=1/0,yu=null,za=null,co=0,$a=null,Qr=null,ga=0,sh=0,oh=null,Wg=null,Wl=0,ih=null;function ci(){return($n&2)!==0&&bn!==0?bn&-bn:O.T!==null?dh():Cs()}function Fg(){if(li===0)if((bn&536870912)===0||Cn){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),li=e}else li=536870912;return e=ii.current,e!==null&&(e.flags|=32),li}function Zo(e,s,o){(e===cs&&(Xn===2||Xn===9)||e.cancelPendingCommit!==null)&&(Zr(e,0),Ia(e,bn,li,!1)),et(e,o),(($n&2)===0||e!==cs)&&(e===cs&&(($n&2)===0&&(pr|=o),Is===4&&Ia(e,bn,li,!1)),qi(e))}function Xg(e,s,o){if(($n&6)!==0)throw Error(a(327));var r=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Dt(e,s),f=r?T2(e,s):rh(e,s,!0),m=r;do{if(f===0){Gr&&!r&&Ia(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!j2(o)){f=rh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var T=e;f=Yl;var F=T.current.memoizedState.isDehydrated;if(F&&(Zr(T,v).flags|=256),v=rh(T,v,!1),v!==2){if(eh&&!F){T.errorRecoveryDisabledLanes|=m,pr|=m,f=4;break e}m=Qo,Qo=f,m!==null&&(Qo===null?Qo=m:Qo.push.apply(Qo,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Zr(e,0),Ia(e,s,0,!0);break}e:{switch(r=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Ia(r,s,li,!La);break e;case 2:Qo=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=_u+300-tt(),10<f)){if(Ia(r,s,li,!La),qe(r,0,!0)!==0)break e;ga=s,r.timeoutHandle=C0(qg.bind(null,r,o,Qo,yu,nh,s,li,pr,Kr,La,m,"Throttled",-0,0),f);break e}qg(r,o,Qo,yu,nh,s,li,pr,Kr,La,m,null,-0,0)}}break}while(!0);qi(e)}function qg(e,s,o,r,f,m,v,T,F,pe,Me,ze,xe,ve){if(e.timeoutHandle=-1,ze=s.subtreeFlags,ze&8192||(ze&16785408)===16785408){ze={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mo},Pg(s,m,ze);var Tt=(m&62914560)===m?_u-tt():(m&4194048)===m?Yg-tt():0;if(Tt=uv(ze,Tt),Tt!==null){ga=m,e.cancelPendingCommit=Tt(n0.bind(null,e,s,m,o,r,f,v,T,F,Me,ze,null,xe,ve)),Ia(e,m,v,!pe);return}}n0(e,s,m,o,r,f,v,T,F)}function j2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var f=o[r],m=f.getSnapshot;f=f.value;try{if(!Ct(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ia(e,s,o,r){s&=~th,s&=~pr,e.suspendedLanes|=s,e.pingedLanes&=~s,r&&(e.warmLanes|=s),r=e.expirationTimes;for(var f=s;0<f;){var m=31-kt(f),v=1<<m;r[m]=-1,f&=~v}o!==0&&Tn(e,o,s)}function xu(){return($n&6)===0?(Fl(0),!1):!0}function ah(){if(gn!==null){if(Xn===0)var e=gn.return;else e=gn,aa=ar=null,wf(e),Ur=null,Tl=0,e=gn;for(;e!==null;)kg(e.alternate,e),e=e.return;gn=null}}function Zr(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,F2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ga=0,ah(),cs=e,gn=o=oa(e.current,null),bn=s,Xn=0,ri=null,La=!1,Gr=Dt(e,s),eh=!1,Kr=li=th=pr=Oa=Is=0,Qo=Yl=null,nh=!1,(s&8)!==0&&(s|=s&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=s;0<r;){var f=31-kt(r),m=1<<f;s|=e[f],r&=~m}return _a=s,Pc(),o}function Gg(e,s){ln=null,O.H=Ol,s===Hr||s===qc?(s=d_(),Xn=3):s===uf?(s=d_(),Xn=4):Xn=s===$f?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ri=s,gn===null&&(Is=1,lu(e,yi(s,e.current)))}function Kg(){var e=ii.current;return e===null?!0:(bn&4194048)===bn?wi===null:(bn&62914560)===bn||(bn&536870912)!==0?e===wi:!1}function Qg(){var e=O.H;return O.H=Ol,e===null?Ol:e}function Zg(){var e=O.A;return O.A=C2,e}function bu(){Is=4,La||(bn&4194048)!==bn&&ii.current!==null||(Gr=!0),(Oa&134217727)===0&&(pr&134217727)===0||cs===null||Ia(cs,bn,li,!1)}function rh(e,s,o){var r=$n;$n|=2;var f=Qg(),m=Zg();(cs!==e||bn!==s)&&(yu=null,Zr(e,s)),s=!1;var v=Is;e:do try{if(Xn!==0&&gn!==null){var T=gn,F=ri;switch(Xn){case 8:ah(),v=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(s=!0);var pe=Xn;if(Xn=0,ri=null,Jr(e,T,F,pe),o&&Gr){v=0;break e}break;default:pe=Xn,Xn=0,ri=null,Jr(e,T,F,pe)}}M2(),v=Is;break}catch(Me){Gg(e,Me)}while(!0);return s&&e.shellSuspendCounter++,aa=ar=null,$n=r,O.H=f,O.A=m,gn===null&&(cs=null,bn=0,Pc()),v}function M2(){for(;gn!==null;)Jg(gn)}function T2(e,s){var o=$n;$n|=2;var r=Qg(),f=Zg();cs!==e||bn!==s?(yu=null,gu=tt()+500,Zr(e,s)):Gr=Dt(e,s);e:do try{if(Xn!==0&&gn!==null){s=gn;var m=ri;t:switch(Xn){case 1:Xn=0,ri=null,Jr(e,s,m,1);break;case 2:case 9:if(c_(m)){Xn=0,ri=null,e0(s);break}s=function(){Xn!==2&&Xn!==9||cs!==e||(Xn=7),qi(e)},m.then(s,s);break e;case 3:Xn=7;break e;case 4:Xn=5;break e;case 7:c_(m)?(Xn=0,ri=null,e0(s)):(Xn=0,ri=null,Jr(e,s,m,7));break;case 5:var v=null;switch(gn.tag){case 26:v=gn.memoizedState;case 5:case 27:var T=gn;if(v?I0(v):T.stateNode.complete){Xn=0,ri=null;var F=T.sibling;if(F!==null)gn=F;else{var pe=T.return;pe!==null?(gn=pe,vu(pe)):gn=null}break t}}Xn=0,ri=null,Jr(e,s,m,5);break;case 6:Xn=0,ri=null,Jr(e,s,m,6);break;case 8:ah(),Is=6;break e;default:throw Error(a(462))}}E2();break}catch(Me){Gg(e,Me)}while(!0);return aa=ar=null,O.H=r,O.A=f,$n=o,gn!==null?0:(cs=null,bn=0,Pc(),Is)}function E2(){for(;gn!==null&&!_t();)Jg(gn)}function Jg(e){var s=Sg(e.alternate,e,_a);e.memoizedProps=e.pendingProps,s===null?vu(e):gn=s}function e0(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=gg(o,s,s.pendingProps,s.type,void 0,bn);break;case 11:s=gg(o,s,s.pendingProps,s.type.render,s.ref,bn);break;case 5:wf(s);default:kg(o,s),s=gn=Zp(s,_a),s=Sg(o,s,_a)}e.memoizedProps=e.pendingProps,s===null?vu(e):gn=s}function Jr(e,s,o,r){aa=ar=null,wf(s),Ur=null,Tl=0;var f=s.return;try{if(g2(e,f,s,o,bn)){Is=1,lu(e,yi(o,e.current)),gn=null;return}}catch(m){if(f!==null)throw gn=f,m;Is=1,lu(e,yi(o,e.current)),gn=null;return}s.flags&32768?(Cn||r===1?e=!0:Gr||(bn&536870912)!==0?e=!1:(La=e=!0,(r===2||r===9||r===3||r===6)&&(r=ii.current,r!==null&&r.tag===13&&(r.flags|=16384))),t0(s,e)):vu(s)}function vu(e){var s=e;do{if((s.flags&32768)!==0){t0(s,La);return}e=s.return;var o=b2(s.alternate,s,_a);if(o!==null){gn=o;return}if(s=s.sibling,s!==null){gn=s;return}gn=s=e}while(s!==null);Is===0&&(Is=5)}function t0(e,s){do{var o=v2(e.alternate,e);if(o!==null){o.flags&=32767,gn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){gn=e;return}gn=e=o}while(e!==null);Is=6,gn=null}function n0(e,s,o,r,f,m,v,T,F){e.cancelPendingCommit=null;do wu();while(co!==0);if(($n&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Zt(e,o,m,v,T,F),e===cs&&(gn=cs=null,bn=0),Qr=s,$a=e,ga=o,sh=m,oh=f,Wg=r,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R2(ut,function(){return r0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,f=ee.p,ee.p=2,v=$n,$n|=4;try{w2(e,s,o)}finally{$n=v,ee.p=f,O.T=r}}co=1,s0(),o0(),i0()}}function s0(){if(co===1){co=0;var e=$a,s=Qr,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var r=ee.p;ee.p=2;var f=$n;$n|=4;try{zg(s,e);var m=xh,v=Mn(e.containerInfo),T=m.focusedElem,F=m.selectionRange;if(v!==T&&T&&T.ownerDocument&&bs(T.ownerDocument.documentElement,T)){if(F!==null&&Un(T)){var pe=F.start,Me=F.end;if(Me===void 0&&(Me=pe),"selectionStart"in T)T.selectionStart=pe,T.selectionEnd=Math.min(Me,T.value.length);else{var ze=T.ownerDocument||document,xe=ze&&ze.defaultView||window;if(xe.getSelection){var ve=xe.getSelection(),Tt=T.textContent.length,Ft=Math.min(F.start,Tt),es=F.end===void 0?Ft:Math.min(F.end,Tt);!ve.extend&&Ft>es&&(v=es,es=Ft,Ft=v);var le=xs(T,Ft),Z=xs(T,es);if(le&&Z&&(ve.rangeCount!==1||ve.anchorNode!==le.node||ve.anchorOffset!==le.offset||ve.focusNode!==Z.node||ve.focusOffset!==Z.offset)){var he=ze.createRange();he.setStart(le.node,le.offset),ve.removeAllRanges(),Ft>es?(ve.addRange(he),ve.extend(Z.node,Z.offset)):(he.setEnd(Z.node,Z.offset),ve.addRange(he))}}}}for(ze=[],ve=T;ve=ve.parentNode;)ve.nodeType===1&&ze.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ze.length;T++){var Be=ze[T];Be.element.scrollLeft=Be.left,Be.element.scrollTop=Be.top}}Bu=!!yh,xh=yh=null}finally{$n=f,ee.p=r,O.T=o}}e.current=s,co=2}}function o0(){if(co===2){co=0;var e=$a,s=Qr,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=O.T,O.T=null;var r=ee.p;ee.p=2;var f=$n;$n|=4;try{Ng(e,s.alternate,s)}finally{$n=f,ee.p=r,O.T=o}}co=3}}function i0(){if(co===4||co===3){co=0,Je();var e=$a,s=Qr,o=ga,r=Wg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?co=5:(co=0,Qr=$a=null,a0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(za=null),ds(o),s=s.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ge,s,void 0,(s.current.flags&128)===128)}catch{}if(r!==null){s=O.T,f=ee.p,ee.p=2,O.T=null;try{for(var m=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];m(T.value,{componentStack:T.stack})}}finally{O.T=s,ee.p=f}}(ga&3)!==0&&wu(),qi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===ih?Wl++:(Wl=0,ih=e):Wl=0,Fl(0)}}function a0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,jl(s)))}function wu(){return s0(),o0(),i0(),r0()}function r0(){if(co!==5)return!1;var e=$a,s=sh;sh=0;var o=ds(ga),r=O.T,f=ee.p;try{ee.p=32>o?32:o,O.T=null,o=oh,oh=null;var m=$a,v=ga;if(co=0,Qr=$a=null,ga=0,($n&6)!==0)throw Error(a(331));var T=$n;if($n|=4,Ug(m.current),Ig(m,m.current,v,o),$n=T,Fl(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ge,m)}catch{}return!0}finally{ee.p=f,O.T=r,a0(e,s)}}function l0(e,s,o){s=yi(o,s),s=zf(e.stateNode,s,2),e=Da(e,s,2),e!==null&&(et(e,2),qi(e))}function qn(e,s,o){if(e.tag===3)l0(e,e,o);else for(;s!==null;){if(s.tag===3){l0(s,e,o);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))){e=yi(o,e),o=cg(2),r=Da(s,o,2),r!==null&&(ug(o,r,s,e),et(r,2),qi(r));break}}s=s.return}}function lh(e,s,o){var r=e.pingCache;if(r===null){r=e.pingCache=new k2;var f=new Set;r.set(s,f)}else f=r.get(s),f===void 0&&(f=new Set,r.set(s,f));f.has(o)||(eh=!0,f.add(o),e=A2.bind(null,e,s,o),s.then(e,e))}function A2(e,s,o){var r=e.pingCache;r!==null&&r.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,cs===e&&(bn&o)===o&&(Is===4||Is===3&&(bn&62914560)===bn&&300>tt()-_u?($n&2)===0&&Zr(e,0):th|=o,Kr===bn&&(Kr=0)),qi(e)}function c0(e,s){s===0&&(s=Bt()),e=sr(e,s),e!==null&&(et(e,s),qi(e))}function D2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),c0(e,o)}function N2(e,s){var o=0;switch(e.tag){case 31:case 13:var r=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(s),c0(e,o)}function R2(e,s){return rt(e,s)}var Su=null,el=null,ch=!1,Cu=!1,uh=!1,Pa=0;function qi(e){e!==el&&e.next===null&&(el===null?Su=el=e:el=el.next=e),Cu=!0,ch||(ch=!0,L2())}function Fl(e,s){if(!uh&&Cu){uh=!0;do for(var o=!1,r=Su;r!==null;){if(e!==0){var f=r.pendingLanes;if(f===0)var m=0;else{var v=r.suspendedLanes,T=r.pingedLanes;m=(1<<31-kt(42|e)+1)-1,m&=f&~(v&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,h0(r,m))}else m=bn,m=qe(r,r===cs?m:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(m&3)===0||Dt(r,m)||(o=!0,h0(r,m));r=r.next}while(o);uh=!1}}function B2(){u0()}function u0(){Cu=ch=!1;var e=0;Pa!==0&&W2()&&(e=Pa);for(var s=tt(),o=null,r=Su;r!==null;){var f=r.next,m=d0(r,s);m===0?(r.next=null,o===null?Su=f:o.next=f,f===null&&(el=o)):(o=r,(e!==0||(m&3)!==0)&&(Cu=!0)),r=f}co!==0&&co!==5||Fl(e),Pa!==0&&(Pa=0)}function d0(e,s){for(var o=e.suspendedLanes,r=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-kt(m),T=1<<v,F=f[v];F===-1?((T&o)===0||(T&r)!==0)&&(f[v]=Mt(T,s)):F<=s&&(e.expiredLanes|=T),m&=~T}if(s=cs,o=bn,o=qe(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,o===0||e===s&&(Xn===2||Xn===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Dt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(r!==null&&Ee(r),ds(o)){case 2:case 8:o=qt;break;case 32:o=ut;break;case 268435456:o=J;break;default:o=ut}return r=f0.bind(null,e),o=rt(o,r),e.callbackPriority=s,e.callbackNode=o,s}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,s){if(co!==0&&co!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(wu()&&e.callbackNode!==o)return null;var r=bn;return r=qe(e,e===cs?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Xg(e,r,s),d0(e,tt()),e.callbackNode!=null&&e.callbackNode===o?f0.bind(null,e):null)}function h0(e,s){if(wu())return null;Xg(e,s,!0)}function L2(){X2(function(){($n&6)!==0?rt(ht,B2):u0()})}function dh(){if(Pa===0){var e=Ir;e===0&&(e=Ye,Ye<<=1,(Ye&261888)===0&&(Ye=256)),Pa=e}return Pa}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function p0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function O2(e,s,o,r,f){if(s==="submit"&&o&&o.stateNode===f){var m=m0((f[pn]||null).action),v=r.submitter;v&&(s=(s=v[pn]||null)?m0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var T=new te("action","action",null,r,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Pa!==0){var F=v?p0(f,v):new FormData(f);Df(o,{pending:!0,data:F,method:f.method,action:m},null,F)}}else typeof m=="function"&&(T.preventDefault(),F=v?p0(f,v):new FormData(f),Df(o,{pending:!0,data:F,method:f.method,action:m},m,F))},currentTarget:f}]})}}for(var fh=0;fh<Xd.length;fh++){var hh=Xd[fh],z2=hh.toLowerCase(),$2=hh[0].toUpperCase()+hh.slice(1);Oi(z2,"on"+$2)}Oi(Li,"onAnimationEnd"),Oi(Yi,"onAnimationIteration"),Oi($c,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(Yd,"onTransitionRun"),Oi(Wd,"onTransitionStart"),Oi(Fd,"onTransitionCancel"),Oi(Gp,"onTransitionEnd"),fs("onMouseEnter",["mouseout","mouseover"]),fs("onMouseLeave",["mouseout","mouseover"]),fs("onPointerEnter",["pointerout","pointerover"]),fs("onPointerLeave",["pointerout","pointerover"]),Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function _0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var r=e[o],f=r.event;r=r.listeners;e:{var m=void 0;if(s)for(var v=r.length-1;0<=v;v--){var T=r[v],F=T.instance,pe=T.currentTarget;if(T=T.listener,F!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=pe;try{m(f)}catch(Me){Ic(Me)}f.currentTarget=null,m=F}else for(v=0;v<r.length;v++){if(T=r[v],F=T.instance,pe=T.currentTarget,T=T.listener,F!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=pe;try{m(f)}catch(Me){Ic(Me)}f.currentTarget=null,m=F}}}}function yn(e,s){var o=s[en];o===void 0&&(o=s[en]=new Set);var r=e+"__bubble";o.has(r)||(g0(s,e,2,!1),o.add(r))}function mh(e,s,o){var r=0;s&&(r|=4),g0(o,e,r,s)}var ku="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[ku]){e[ku]=!0,ti.forEach(function(o){o!=="selectionchange"&&(I2.has(o)||mh(o,!1,e),mh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[ku]||(s[ku]=!0,mh("selectionchange",!1,s))}}function g0(e,s,o,r){switch(F0(s)){case 2:var f=hv;break;case 8:f=mv;break;default:f=Ah}o=f.bind(null,s,o,e),f=void 0,!Ls||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),r?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function _h(e,s,o,r,f){var m=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=r.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=Eo(T),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){r=m=v;continue e}T=T.parentNode}}r=r.return}po(function(){var pe=m,Me=io(o),ze=[];e:{var xe=Kp.get(e);if(xe!==void 0){var ve=te,Tt=e;switch(e){case"keypress":if(zs(o)===0)break e;case"keydown":case"keyup":ve=Qs;break;case"focusin":Tt="focus",ve=fe;break;case"focusout":Tt="blur",ve=fe;break;case"beforeblur":case"afterblur":ve=fe;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=W;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Ni;break;case Li:case Yi:case $c:ve=Oe;break;case Gp:ve=Io;break;case"scroll":case"scrollend":ve=ye;break;case"wheel":ve=va;break;case"copy":case"cut":case"paste":ve=Lt;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Wn;break;case"toggle":case"beforetoggle":ve=na}var Ft=(s&4)!==0,es=!Ft&&(e==="scroll"||e==="scrollend"),le=Ft?xe!==null?xe+"Capture":null:xe;Ft=[];for(var Z=pe,he;Z!==null;){var Be=Z;if(he=Be.stateNode,Be=Be.tag,Be!==5&&Be!==26&&Be!==27||he===null||le===null||(Be=an(Z,le),Be!=null&&Ft.push(ql(Z,Be,he))),es)break;Z=Z.return}0<Ft.length&&(xe=new ve(xe,Tt,null,o,Me),ze.push({event:xe,listeners:Ft}))}}if((s&7)===0){e:{if(xe=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",xe&&o!==Oo&&(Tt=o.relatedTarget||o.fromElement)&&(Eo(Tt)||Tt[ot]))break e;if((ve||xe)&&(xe=Me.window===Me?Me:(xe=Me.ownerDocument)?xe.defaultView||xe.parentWindow:window,ve?(Tt=o.relatedTarget||o.toElement,ve=pe,Tt=Tt?Eo(Tt):null,Tt!==null&&(es=u(Tt),Ft=Tt.tag,Tt!==es||Ft!==5&&Ft!==27&&Ft!==6)&&(Tt=null)):(ve=null,Tt=pe),ve!==Tt)){if(Ft=Rn,Be="onMouseLeave",le="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(Ft=Wn,Be="onPointerLeave",le="onPointerEnter",Z="pointer"),es=ve==null?xe:Gs(ve),he=Tt==null?xe:Gs(Tt),xe=new Ft(Be,Z+"leave",ve,o,Me),xe.target=es,xe.relatedTarget=he,Be=null,Eo(Me)===pe&&(Ft=new Ft(le,Z+"enter",Tt,o,Me),Ft.target=he,Ft.relatedTarget=es,Be=Ft),es=Be,ve&&Tt)t:{for(Ft=P2,le=ve,Z=Tt,he=0,Be=le;Be;Be=Ft(Be))he++;Be=0;for(var Ht=Z;Ht;Ht=Ft(Ht))Be++;for(;0<he-Be;)le=Ft(le),he--;for(;0<Be-he;)Z=Ft(Z),Be--;for(;he--;){if(le===Z||Z!==null&&le===Z.alternate){Ft=le;break t}le=Ft(le),Z=Ft(Z)}Ft=null}else Ft=null;ve!==null&&y0(ze,xe,ve,Ft,!1),Tt!==null&&es!==null&&y0(ze,es,Tt,Ft,!0)}}e:{if(xe=pe?Gs(pe):window,ve=xe.nodeName&&xe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&xe.type==="file")var Ln=L;else if(rn(xe))if(H)Ln=tn;else{Ln=St;var Rt=lt}else ve=xe.nodeName,!ve||ve.toLowerCase()!=="input"||xe.type!=="checkbox"&&xe.type!=="radio"?pe&&Us(pe.elementType)&&(Ln=L):Ln=$t;if(Ln&&(Ln=Ln(e,pe))){Fn(ze,Ln,o,Me);break e}Rt&&Rt(e,xe,pe),e==="focusout"&&pe&&xe.type==="number"&&pe.memoizedProps.value!=null&&bo(xe,"number",xe.value)}switch(Rt=pe?Gs(pe):window,e){case"focusin":(rn(Rt)||Rt.contentEditable==="true")&&(Qt=Rt,vs=pe,Dn=null);break;case"focusout":Dn=vs=Qt=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,No(ze,o,Me);break;case"selectionchange":if(Gt)break;case"keydown":case"keyup":No(ze,o,Me)}var un;if(Sa)e:{switch(e){case"compositionstart":var vn="onCompositionStart";break e;case"compositionend":vn="onCompositionEnd";break e;case"compositionupdate":vn="onCompositionUpdate";break e}vn=void 0}else Ue?Fe(e,o)&&(vn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(vn="onCompositionStart");vn&&(sa&&o.locale!=="ko"&&(Ue||vn!=="onCompositionStart"?vn==="onCompositionEnd"&&Ue&&(un=as()):(is=Me,Hn="value"in is?is.value:is.textContent,Ue=!0)),Rt=ju(pe,vn),0<Rt.length&&(vn=new $e(vn,e,null,o,Me),ze.push({event:vn,listeners:Rt}),un?vn.data=un:(un=xt(o),un!==null&&(vn.data=un)))),(un=Ca?It(e,o):Pt(e,o))&&(vn=ju(pe,"onBeforeInput"),0<vn.length&&(Rt=new $e("onBeforeInput","beforeinput",null,o,Me),ze.push({event:Rt,listeners:vn}),Rt.data=un)),O2(ze,e,pe,o,Me)}_0(ze,s)})}function ql(e,s,o){return{instance:e,listener:s,currentTarget:o}}function ju(e,s){for(var o=s+"Capture",r=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=an(e,o),f!=null&&r.unshift(ql(e,f,m)),f=an(e,s),f!=null&&r.push(ql(e,f,m))),e.tag===3)return r;e=e.return}return[]}function P2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y0(e,s,o,r,f){for(var m=s._reactName,v=[];o!==null&&o!==r;){var T=o,F=T.alternate,pe=T.stateNode;if(T=T.tag,F!==null&&F===r)break;T!==5&&T!==26&&T!==27||pe===null||(F=pe,f?(pe=an(o,m),pe!=null&&v.unshift(ql(o,pe,F))):f||(pe=an(o,m),pe!=null&&v.push(ql(o,pe,F)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var H2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(H2,`
`).replace(U2,"")}function b0(e,s){return s=x0(s),x0(e)===s}function Jn(e,s,o,r,f,m){switch(o){case"children":typeof r=="string"?s==="body"||s==="textarea"&&r===""||Ks(e,r):(typeof r=="number"||typeof r=="bigint")&&s!=="body"&&Ks(e,""+r);break;case"className":Ds(e,"class",r);break;case"tabIndex":Ds(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ds(e,o,r);break;case"style":si(e,r,m);break;case"data":if(s!=="object"){Ds(e,"data",r);break}case"src":case"href":if(r===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Xo(""+r),e.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Jn(e,s,"name",f.name,f,null),Jn(e,s,"formEncType",f.formEncType,f,null),Jn(e,s,"formMethod",f.formMethod,f,null),Jn(e,s,"formTarget",f.formTarget,f,null)):(Jn(e,s,"encType",f.encType,f,null),Jn(e,s,"method",f.method,f,null),Jn(e,s,"target",f.target,f,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(o);break}r=Xo(""+r),e.setAttribute(o,r);break;case"onClick":r!=null&&(e.onclick=mo);break;case"onScroll":r!=null&&yn("scroll",e);break;case"onScrollEnd":r!=null&&yn("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}o=Xo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""+r):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":r===!0?e.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(o,r):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(o,r):e.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(o):e.setAttribute(o,r);break;case"popover":yn("beforetoggle",e),yn("toggle",e),Ao(e,"popover",r);break;case"xlinkActuate":Rs(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Rs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Rs(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Rs(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Rs(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Rs(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Rs(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Rs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Rs(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ao(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ai.get(o)||o,Ao(e,o,r))}}function gh(e,s,o,r,f,m){switch(o){case"style":si(e,r,m);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(o=r.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof r=="string"?Ks(e,r):(typeof r=="number"||typeof r=="bigint")&&Ks(e,""+r);break;case"onScroll":r!=null&&yn("scroll",e);break;case"onScrollEnd":r!=null&&yn("scrollend",e);break;case"onClick":r!=null&&(e.onclick=mo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ho.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[pn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof r=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,r,f);break e}o in e?e[o]=r:r===!0?e.setAttribute(o,""):Ao(e,o,r)}}}function jo(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yn("error",e),yn("load",e);var r=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":r=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Jn(e,s,m,v,o,null)}}f&&Jn(e,s,"srcSet",o.srcSet,o,null),r&&Jn(e,s,"src",o.src,o,null);return;case"input":yn("invalid",e);var T=m=v=f=null,F=null,pe=null;for(r in o)if(o.hasOwnProperty(r)){var Me=o[r];if(Me!=null)switch(r){case"name":f=Me;break;case"type":v=Me;break;case"checked":F=Me;break;case"defaultChecked":pe=Me;break;case"value":m=Me;break;case"defaultValue":T=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(a(137,s));break;default:Jn(e,s,r,Me,o,null)}}En(e,m,T,F,pe,v,f,!1);return;case"select":yn("invalid",e),r=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Jn(e,s,f,T,o,null)}s=m,o=v,e.multiple=!!r,s!=null?gs(e,!!r,s,!1):o!=null&&gs(e,!!r,o,!0);return;case"textarea":yn("invalid",e),m=f=r=null;for(v in o)if(o.hasOwnProperty(v)&&(T=o[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Jn(e,s,v,T,o,null)}hi(e,r,f,m);return;case"option":for(F in o)if(o.hasOwnProperty(F)&&(r=o[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Jn(e,s,F,r,o,null)}return;case"dialog":yn("beforetoggle",e),yn("toggle",e),yn("cancel",e),yn("close",e);break;case"iframe":case"object":yn("load",e);break;case"video":case"audio":for(r=0;r<Xl.length;r++)yn(Xl[r],e);break;case"image":yn("error",e),yn("load",e);break;case"details":yn("toggle",e);break;case"embed":case"source":case"link":yn("error",e),yn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pe in o)if(o.hasOwnProperty(pe)&&(r=o[pe],r!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:Jn(e,s,pe,r,o,null)}return;default:if(Us(s)){for(Me in o)o.hasOwnProperty(Me)&&(r=o[Me],r!==void 0&&gh(e,s,Me,r,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(r=o[T],r!=null&&Jn(e,s,T,r,o,null))}function V2(e,s,o,r){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,F=null,pe=null,Me=null;for(ve in o){var ze=o[ve];if(o.hasOwnProperty(ve)&&ze!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":F=ze;default:r.hasOwnProperty(ve)||Jn(e,s,ve,null,r,ze)}}for(var xe in r){var ve=r[xe];if(ze=o[xe],r.hasOwnProperty(xe)&&(ve!=null||ze!=null))switch(xe){case"type":m=ve;break;case"name":f=ve;break;case"checked":pe=ve;break;case"defaultChecked":Me=ve;break;case"value":v=ve;break;case"defaultValue":T=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==ze&&Jn(e,s,xe,ve,r,ze)}}oo(e,v,T,F,pe,Me,m,f);return;case"select":ve=v=T=xe=null;for(m in o)if(F=o[m],o.hasOwnProperty(m)&&F!=null)switch(m){case"value":break;case"multiple":ve=F;default:r.hasOwnProperty(m)||Jn(e,s,m,null,r,F)}for(f in r)if(m=r[f],F=o[f],r.hasOwnProperty(f)&&(m!=null||F!=null))switch(f){case"value":xe=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==F&&Jn(e,s,f,m,r,F)}s=T,o=v,r=ve,xe!=null?gs(e,!!o,xe,!1):!!r!=!!o&&(s!=null?gs(e,!!o,s,!0):gs(e,!!o,o?[]:"",!1));return;case"textarea":ve=xe=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Jn(e,s,T,null,r,f)}for(v in r)if(f=r[v],m=o[v],r.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":xe=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Jn(e,s,v,f,r,m)}xn(e,xe,ve);return;case"option":for(var Tt in o)if(xe=o[Tt],o.hasOwnProperty(Tt)&&xe!=null&&!r.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Jn(e,s,Tt,null,r,xe)}for(F in r)if(xe=r[F],ve=o[F],r.hasOwnProperty(F)&&xe!==ve&&(xe!=null||ve!=null))switch(F){case"selected":e.selected=xe&&typeof xe!="function"&&typeof xe!="symbol";break;default:Jn(e,s,F,xe,r,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ft in o)xe=o[Ft],o.hasOwnProperty(Ft)&&xe!=null&&!r.hasOwnProperty(Ft)&&Jn(e,s,Ft,null,r,xe);for(pe in r)if(xe=r[pe],ve=o[pe],r.hasOwnProperty(pe)&&xe!==ve&&(xe!=null||ve!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,s));break;default:Jn(e,s,pe,xe,r,ve)}return;default:if(Us(s)){for(var es in o)xe=o[es],o.hasOwnProperty(es)&&xe!==void 0&&!r.hasOwnProperty(es)&&gh(e,s,es,void 0,r,xe);for(Me in r)xe=r[Me],ve=o[Me],!r.hasOwnProperty(Me)||xe===ve||xe===void 0&&ve===void 0||gh(e,s,Me,xe,r,ve);return}}for(var le in o)xe=o[le],o.hasOwnProperty(le)&&xe!=null&&!r.hasOwnProperty(le)&&Jn(e,s,le,null,r,xe);for(ze in r)xe=r[ze],ve=o[ze],!r.hasOwnProperty(ze)||xe===ve||xe==null&&ve==null||Jn(e,s,ze,xe,r,ve)}function v0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),r=0;r<o.length;r++){var f=o[r],m=f.transferSize,v=f.initiatorType,T=f.duration;if(m&&T&&v0(v)){for(v=0,T=f.responseEnd,r+=1;r<o.length;r++){var F=o[r],pe=F.startTime;if(pe>T)break;var Me=F.transferSize,ze=F.initiatorType;Me&&v0(ze)&&(F=F.responseEnd,v+=Me*(F<T?1:(T-pe)/(F-pe)))}if(--r,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,xh=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function w0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function bh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=null;function W2(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,X2=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(q2)}:C0;function q2(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function j0(e,s){var o=s,r=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(r===0){e.removeChild(f),ol(s);return}r--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")r++;else if(o==="html")Gl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Gl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,T=m.nodeName;m[Ns]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Gl(e.ownerDocument.body);o=f}while(o);ol(s)}function M0(e,s){var o=e;e=0;do{var r=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),r&&r.nodeType===8)if(o=r.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=r}while(o)}function wh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":wh(o),go(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function G2(e,s,o,r){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ns])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function K2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Si(e.nextSibling),e===null))return null;return e}function T0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Si(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function Ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var r=function(){s(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Si(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var kh=null;function E0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return Si(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function D0(e,s,o){switch(s=Mu(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Gl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);go(e)}var Ci=new Map,N0=new Set;function Tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=ee.d;ee.d={f:Z2,r:J2,D:ev,C:tv,L:nv,m:sv,X:iv,S:ov,M:av};function Z2(){var e=ya.f(),s=xu();return e||s}function J2(e){var s=yo(e);s!==null&&s.tag===5&&s.type==="form"?G_(s):ya.r(e)}var tl=typeof document>"u"?null:document;function R0(e,s,o){var r=tl;if(r&&typeof s=="string"&&s){var f=Bs(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),N0.has(f)||(N0.add(f),e={rel:e,crossOrigin:o,href:s},r.querySelector(f)===null&&(s=r.createElement("link"),jo(s,"link",e),Pn(s),r.head.appendChild(s)))}}function ev(e){ya.D(e),R0("dns-prefetch",e,null)}function tv(e,s){ya.C(e,s),R0("preconnect",e,s)}function nv(e,s,o){ya.L(e,s,o);var r=tl;if(r&&e&&s){var f='link[rel="preload"][as="'+Bs(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Bs(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Bs(o.imageSizes)+'"]')):f+='[href="'+Bs(e)+'"]';var m=f;switch(s){case"style":m=nl(e);break;case"script":m=sl(e)}Ci.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),Ci.set(m,e),r.querySelector(f)!==null||s==="style"&&r.querySelector(Kl(m))||s==="script"&&r.querySelector(Ql(m))||(s=r.createElement("link"),jo(s,"link",e),Pn(s),r.head.appendChild(s)))}}function sv(e,s){ya.m(e,s);var o=tl;if(o&&e){var r=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Bs(r)+'"][href="'+Bs(e)+'"]',m=f;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sl(e)}if(!Ci.has(m)&&(e=x({rel:"modulepreload",href:e},s),Ci.set(m,e),o.querySelector(f)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ql(m)))return}r=o.createElement("link"),jo(r,"link",e),Pn(r),o.head.appendChild(r)}}}function ov(e,s,o){ya.S(e,s,o);var r=tl;if(r&&e){var f=Hs(r).hoistableStyles,m=nl(e);s=s||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(Kl(m)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=Ci.get(m))&&jh(e,o);var F=v=r.createElement("link");Pn(F),jo(F,"link",e),F._p=new Promise(function(pe,Me){F.onload=pe,F.onerror=Me}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Eu(v,s,r)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function iv(e,s){ya.X(e,s);var o=tl;if(o&&e){var r=Hs(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0},s),(s=Ci.get(f))&&Mh(e,s),m=o.createElement("script"),Pn(m),jo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function av(e,s){ya.M(e,s);var o=tl;if(o&&e){var r=Hs(o).hoistableScripts,f=sl(e),m=r.get(f);m||(m=o.querySelector(Ql(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=Ci.get(f))&&Mh(e,s),m=o.createElement("script"),Pn(m),jo(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},r.set(f,m))}}function B0(e,s,o,r){var f=(f=We.current)?Tu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=nl(o.href),o=Hs(f).hoistableStyles,r=o.get(s),r||(r={type:"style",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=nl(o.href);var m=Hs(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Kl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),Ci.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ci.set(e,o),m||rv(f,e,o,v.state))),s&&r===null)throw Error(a(528,""));return v}if(s&&r!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=sl(o),o=Hs(f).hoistableScripts,r=o.get(s),r||(r={type:"script",instance:null,count:0,state:null},o.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function nl(e){return'href="'+Bs(e)+'"'}function Kl(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function rv(e,s,o,r){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?r.loading=1:(s=e.createElement("link"),r.preload=s,s.addEventListener("load",function(){return r.loading|=1}),s.addEventListener("error",function(){return r.loading|=2}),jo(s,"link",o),Pn(s),e.head.appendChild(s))}function sl(e){return'[src="'+Bs(e)+'"]'}function Ql(e){return"script[async]"+e}function O0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var r=e.querySelector('style[data-href~="'+Bs(o.href)+'"]');if(r)return s.instance=r,Pn(r),r;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pn(r),jo(r,"style",f),Eu(r,o.precedence,e),s.instance=r;case"stylesheet":f=nl(o.href);var m=e.querySelector(Kl(f));if(m)return s.state.loading|=4,s.instance=m,Pn(m),m;r=L0(o),(f=Ci.get(f))&&jh(r,f),m=(e.ownerDocument||e).createElement("link"),Pn(m);var v=m;return v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),jo(m,"link",r),s.state.loading|=4,Eu(m,o.precedence,e),s.instance=m;case"script":return m=sl(o.src),(f=e.querySelector(Ql(m)))?(s.instance=f,Pn(f),f):(r=o,(f=Ci.get(m))&&(r=x({},o),Mh(r,f)),e=e.ownerDocument||e,f=e.createElement("script"),Pn(f),jo(f,"link",r),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(r=s.instance,s.state.loading|=4,Eu(r,o.precedence,e));return s.instance}function Eu(e,s,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=r.length?r[r.length-1]:null,m=f,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===s)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function jh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Au=null;function z0(e,s,o){if(Au===null){var r=new Map,f=Au=new Map;f.set(o,r)}else f=Au,r=f.get(o),r||(r=new Map,f.set(o,r));if(r.has(e))return r;for(r.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[Ns]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var T=r.get(v);T?T.push(m):r.set(v,[m])}}return r}function $0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function lv(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function I0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cv(e,s,o,r){if(o.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=nl(r.href),m=s.querySelector(Kl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Du.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,Pn(m);return}m=s.ownerDocument||s,r=L0(r),(f=Ci.get(f))&&jh(r,f),m=m.createElement("link"),Pn(m);var v=m;v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),jo(m,"link",r),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Du.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var Th=0;function uv(e,s){return e.stylesheets&&e.count===0&&Ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var r=setTimeout(function(){if(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*Y2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(f)}}:null}function Du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function Ru(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,s.forEach(dv,e),Nu=null,Du.call(e))}function dv(e,s){if(!(s.state.loading&4)){var o=Nu.get(e);if(o)var r=o.get(null);else{o=new Map,Nu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),r=v)}r&&o.set(null,r)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||r,m===r&&o.set(null,f),o.set(v,f),this.count++,r=Du.bind(this),f.addEventListener("load",r),f.addEventListener("error",r),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Zl={$$typeof:B,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function fv(e,s,o,r,f,m,v,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=r,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function P0(e,s,o,r,f,m,v,T,F,pe,Me,ze){return e=new fv(e,s,o,v,F,pe,Me,ze,T),s=1,m===!0&&(s|=24),m=oi(3,null,null,s),e.current=m,m.stateNode=e,s=rf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:r,isDehydrated:o,cache:s},df(m),e}function H0(e){return e?(e=Br,e):Br}function U0(e,s,o,r,f,m){f=H0(f),r.context===null?r.context=f:r.pendingContext=f,r=Aa(s),r.payload={element:o},m=m===void 0?null:m,m!==null&&(r.callback=m),o=Da(e,r,s),o!==null&&(Zo(o,e,s),Al(o,e,s))}function V0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Eh(e,s){V0(e,s),(e=e.alternate)&&V0(e,s)}function Y0(e){if(e.tag===13||e.tag===31){var s=sr(e,67108864);s!==null&&Zo(s,e,67108864),Eh(e,67108864)}}function W0(e){if(e.tag===13||e.tag===31){var s=ci();s=fo(s);var o=sr(e,s);o!==null&&Zo(o,e,s),Eh(e,s)}}var Bu=!0;function hv(e,s,o,r){var f=O.T;O.T=null;var m=ee.p;try{ee.p=2,Ah(e,s,o,r)}finally{ee.p=m,O.T=f}}function mv(e,s,o,r){var f=O.T;O.T=null;var m=ee.p;try{ee.p=8,Ah(e,s,o,r)}finally{ee.p=m,O.T=f}}function Ah(e,s,o,r){if(Bu){var f=Dh(r);if(f===null)_h(e,s,r,Lu,o),X0(e,r);else if(_v(f,e,s,o,r))r.stopPropagation();else if(X0(e,r),s&4&&-1<pv.indexOf(e)){for(;f!==null;){var m=yo(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Jt(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var F=1<<31-kt(v);T.entanglements[1]|=F,v&=~F}qi(m),($n&6)===0&&(gu=tt()+500,Fl(0))}}break;case 31:case 13:T=sr(m,2),T!==null&&Zo(T,m,2),xu(),Eh(m,2)}if(m=Dh(r),m===null&&_h(e,s,r,Lu,o),m===f)break;f=m}f!==null&&r.stopPropagation()}else _h(e,s,r,null,o)}}function Dh(e){return e=io(e),Nh(e)}var Lu=null;function Nh(e){if(Lu=null,e=Eo(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Lu=e,null}function F0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case ht:return 2;case qt:return 8;case ut:case $:return 32;case J:return 268435456;default:return 32}default:return 32}}var Rh=!1,Ua=null,Va=null,Ya=null,Jl=new Map,ec=new Map,Wa=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(e,s){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Jl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(s.pointerId)}}function tc(e,s,o,r,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:r,nativeEvent:m,targetContainers:[f]},s!==null&&(s=yo(s),s!==null&&Y0(s)),e):(e.eventSystemFlags|=r,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function _v(e,s,o,r,f){switch(s){case"focusin":return Ua=tc(Ua,e,s,o,r,f),!0;case"dragenter":return Va=tc(Va,e,s,o,r,f),!0;case"mouseover":return Ya=tc(Ya,e,s,o,r,f),!0;case"pointerover":var m=f.pointerId;return Jl.set(m,tc(Jl.get(m)||null,e,s,o,r,f)),!0;case"gotpointercapture":return m=f.pointerId,ec.set(m,tc(ec.get(m)||null,e,s,o,r,f)),!0}return!1}function q0(e){var s=Eo(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,wn(e.priority,function(){W0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,wn(e.priority,function(){W0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Dh(e.nativeEvent);if(o===null){o=e.nativeEvent;var r=new o.constructor(o.type,o);Oo=r,o.target.dispatchEvent(r),Oo=null}else return s=yo(o),s!==null&&Y0(s),e.blockedOn=o,!1;s.shift()}return!0}function G0(e,s,o){Ou(e)&&o.delete(s)}function gv(){Rh=!1,Ua!==null&&Ou(Ua)&&(Ua=null),Va!==null&&Ou(Va)&&(Va=null),Ya!==null&&Ou(Ya)&&(Ya=null),Jl.forEach(G0),ec.forEach(G0)}function zu(e,s){e.blockedOn===s&&(e.blockedOn=null,Rh||(Rh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,gv)))}var $u=null;function K0(e){$u!==e&&($u=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){$u===e&&($u=null);for(var s=0;s<e.length;s+=3){var o=e[s],r=e[s+1],f=e[s+2];if(typeof r!="function"){if(Nh(r||o)===null)continue;break}var m=yo(o);m!==null&&(e.splice(s,3),s-=3,Df(m,{pending:!0,data:f,method:o.method,action:r},r,f))}}))}function ol(e){function s(F){return zu(F,e)}Ua!==null&&zu(Ua,e),Va!==null&&zu(Va,e),Ya!==null&&zu(Ya,e),Jl.forEach(s),ec.forEach(s);for(var o=0;o<Wa.length;o++){var r=Wa[o];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Wa.length&&(o=Wa[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&Wa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var f=o[r],m=o[r+1],v=f[pn]||null;if(typeof m=="function")v||K0(o);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[pn]||null)T=v.formAction;else if(Nh(f)!==null)continue}else T=v.action;typeof T=="function"?o[r+1]=T:(o.splice(r,3),r-=3),K0(o)}}}function Q0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),r||setTimeout(o,20)}function o(){if(!r&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Bh(e){this._internalRoot=e}Iu.prototype.render=Bh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,r=ci();U0(o,r,e,s,null,null)},Iu.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),xu(),s[ot]=null}};function Iu(e){this._internalRoot=e}Iu.prototype.unstable_scheduleHydration=function(e){if(e){var s=Cs();e={blockedOn:null,target:e,priority:s};for(var o=0;o<Wa.length&&s!==0&&s<Wa[o].priority;o++);Wa.splice(o,0,e),o===0&&q0(e)}};var Z0=n.version;if(Z0!=="19.2.4")throw Error(a(527,Z0,"19.2.4"));ee.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Ge=Pu.inject(yv),Ve=Pu}catch{}}return sc.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,r="",f=ig,m=ag,v=rg;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=P0(e,1,!1,null,null,o,r,null,f,m,v,Q0),e[ot]=s.current,ph(e),new Bh(s)},sc.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var r=!1,f="",m=ig,v=ag,T=rg,F=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.formState!==void 0&&(F=o.formState)),s=P0(e,1,!0,s,o!=null?o:null,r,f,F,m,v,T,Q0),s.context=H0(null),o=s.current,r=ci(),r=fo(r),f=Aa(r),f.callback=null,Da(o,f,r),o=r,s.current.lanes=o,et(s,o),qi(s),e[ot]=s.current,ph(e),new Iu(s)},sc.version="19.2.4",sc}var ly;function Mv(){if(ly)return Oh.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=jv(),Oh.exports}var Tv=Mv();const Ev=Mx(Tv);var y=cp();const Av=Mx(y);function Dv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Nv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var dd;const Ti="__TAURI_TO_IPC_KEY__";function Rv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function Se(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Bv{get rid(){return Dv(this,dd,"f")}constructor(n){dd.set(this,void 0),Nv(this,dd,n)}async close(){return Se("plugin:resources|close",{rid:this.rid})}}dd=new WeakMap;var ui;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(ui||(ui={}));async function Ex(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await Se("plugin:event|unlisten",{event:t,eventId:n})}async function gc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return Se("plugin:event|listen",{event:t,target:c,handler:Rv(n)}).then(u=>async()=>Ex(t,u))}async function Lv(t,n,i){return gc(t,a=>{Ex(t,a.id),n(a)},i)}async function Ov(t,n){await Se("plugin:event|emit",{event:t,payload:n})}async function zv(t,n,i){await Se("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class Ax{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new yc(this.width*n,this.height*n)}[Ti](){return{width:this.width,height:this.height}}toJSON(){return this[Ti]()}}class yc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Ax(this.width/n,this.height/n)}[Ti](){return{width:this.width,height:this.height}}toJSON(){return this[Ti]()}}class il{constructor(n){this.size=n}toLogical(n){return this.size instanceof Ax?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof yc?this.size:this.size.toPhysical(n)}[Ti](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[Ti]()}}class Dx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ka(this.x*n,this.y*n)}[Ti](){return{x:this.x,y:this.y}}toJSON(){return this[Ti]()}}class Ka{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Dx(this.x/n,this.y/n)}[Ti](){return{x:this.x,y:this.y}}toJSON(){return this[Ti]()}}class Hu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Dx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ka?this.position:this.position.toPhysical(n)}[Ti](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[Ti]()}}class xc extends Bv{constructor(n){super(n)}static async new(n,i,a){return Se("plugin:image|new",{rgba:wd(n),width:i,height:a}).then(c=>new xc(c))}static async fromBytes(n){return Se("plugin:image|from_bytes",{bytes:wd(n)}).then(i=>new xc(i))}static async fromPath(n){return Se("plugin:image|from_path",{path:n}).then(i=>new xc(i))}async rgba(){return Se("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return Se("plugin:image|size",{rid:this.rid})}}function wd(t){return t==null?null:typeof t=="string"?t:t instanceof xc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class $v{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var cy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(cy||(cy={}));function Mm(){return new Nx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Hh(){return Se("plugin:window|get_all_windows").then(t=>t.map(n=>new Nx(n,{skip:!0})))}const Uh=["tauri://created","tauri://error"];class Nx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||Se("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Hh()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Mm()}static async getAll(){return Hh()}static async getFocusedWindow(){for(const n of await Hh())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:gc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:Lv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Uh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Ov(n,i)}async emitTo(n,i,a){if(Uh.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return zv(n,i,a)}_handleTauriEvent(n,i){return Uh.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return Se("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return Se("plugin:window|inner_position",{label:this.label}).then(n=>new Ka(n))}async outerPosition(){return Se("plugin:window|outer_position",{label:this.label}).then(n=>new Ka(n))}async innerSize(){return Se("plugin:window|inner_size",{label:this.label}).then(n=>new yc(n))}async outerSize(){return Se("plugin:window|outer_size",{label:this.label}).then(n=>new yc(n))}async isFullscreen(){return Se("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return Se("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return Se("plugin:window|is_maximized",{label:this.label})}async isFocused(){return Se("plugin:window|is_focused",{label:this.label})}async isDecorated(){return Se("plugin:window|is_decorated",{label:this.label})}async isResizable(){return Se("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return Se("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return Se("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return Se("plugin:window|is_closable",{label:this.label})}async isVisible(){return Se("plugin:window|is_visible",{label:this.label})}async title(){return Se("plugin:window|title",{label:this.label})}async theme(){return Se("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return Se("plugin:window|is_always_on_top",{label:this.label})}async center(){return Se("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===jm.Critical?i={type:"Critical"}:i={type:"Informational"}),Se("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return Se("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return Se("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return Se("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return Se("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return Se("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return Se("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return Se("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return Se("plugin:window|maximize",{label:this.label})}async unmaximize(){return Se("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return Se("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return Se("plugin:window|minimize",{label:this.label})}async unminimize(){return Se("plugin:window|unminimize",{label:this.label})}async show(){return Se("plugin:window|show",{label:this.label})}async hide(){return Se("plugin:window|hide",{label:this.label})}async close(){return Se("plugin:window|close",{label:this.label})}async destroy(){return Se("plugin:window|destroy",{label:this.label})}async setDecorations(n){return Se("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return Se("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return Se("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return Se("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return Se("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return Se("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return Se("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return Se("plugin:window|set_size",{label:this.label,value:n instanceof il?n:new il(n)})}async setMinSize(n){return Se("plugin:window|set_min_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setMaxSize(n){return Se("plugin:window|set_max_size",{label:this.label,value:n instanceof il?n:n?new il(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return Se("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return Se("plugin:window|set_position",{label:this.label,value:n instanceof Hu?n:new Hu(n)})}async setFullscreen(n){return Se("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return Se("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return Se("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return Se("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return Se("plugin:window|set_icon",{label:this.label,value:wd(n)})}async setSkipTaskbar(n){return Se("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return Se("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return Se("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return Se("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return Se("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return Se("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Hu?n:new Hu(n)})}async setIgnoreCursorEvents(n){return Se("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return Se("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return Se("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return Se("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return Se("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return Se("plugin:window|set_overlay_icon",{label:this.label,value:n?wd(n):void 0})}async setProgressBar(n){return Se("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return Se("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return Se("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return Se("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(ui.WINDOW_RESIZED,i=>{i.payload=new yc(i.payload),n(i)})}async onMoved(n){return this.listen(ui.WINDOW_MOVED,i=>{i.payload=new Ka(i.payload),n(i)})}async onCloseRequested(n){return this.listen(ui.WINDOW_CLOSE_REQUESTED,async i=>{const a=new $v(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(ui.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ka(d.payload.position)}})}),a=await this.listen(ui.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ka(d.payload.position)}})}),c=await this.listen(ui.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ka(d.payload.position)}})}),u=await this.listen(ui.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(ui.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(ui.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(ui.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(ui.WINDOW_THEME_CHANGED,n)}}var uy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(uy||(uy={}));var dy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(dy||(dy={}));var fy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(fy||(fy={}));var hy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(hy||(hy={}));async function Iv(t={}){return typeof t=="object"&&Object.freeze(t),await Se("plugin:dialog|open",{options:t})}const Pv=3.7,Uu=200,Tm=240,ts=540,Ms=176,Vh=32,Za=20,Hv=Tm/2,oc=ts+Hv,_r=18,gr=18,Yh="#E6E6E6";function my(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function Cr(t,n){var a;const i="branch"in n&&n.branch?n.branch:t;return{id:n.fullSha,branchName:i,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,clusterKey:"clusterKey"in n&&(a=n.clusterKey)!=null?a:null,kind:n.kind}}function xa(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function pc(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:xa(t).localeCompare(xa(n))}function Rx(t){return[...t].sort(pc)}function Uv(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[xa(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(xa(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=xa(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const k=(g=a.get(w))!=null?g:[];k.push(b),a.set(w,k)}for(const b of a.values())b.sort(pc);const c=t.filter(b=>{var w;return((w=i.get(xa(b)))!=null?w:0)===0}).sort(pc),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=xa(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const k=xa(S),C=((x=i.get(k))!=null?x:0)-1;i.set(k,C),C===0&&c.push(S)}c.sort(pc)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(xa(b))).sort(pc)]}function Bx(t,n){var i;return Rx(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function Lx(t,n,i){return Bx(t,i)}function Wh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Vv(t,n){var u,d;if(!n||t.length===0)return Wh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Wh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Wh(t)}function Vu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Yv(t,n,i){var _,x,b,w,S,k,C;const a=Lx(t,i,n);if(a.length===0)return null;const c=a.map(j=>Cr(t,j)),u=new Set(c.map(j=>j.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(j=>j.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(j=>h&&j.id===h||d&&j.id===d?!0:!j.parentSha||!u.has(j.parentSha));return g||((C=(k=Vv(c,p!=null?p:void 0))!=null?k:c[0])!=null?C:null)}function Wv(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Bx(t.name,i);if(a.length>0){const g=a.map(b=>Cr(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function up(t,n,i={},a={}){var re,oe,Ce,Le;const u=new Map(t.map(Q=>[Q.name,Q])),d=new Map,h=new Map;for(const Q of t){const O=((re=i[Q.name])!=null?re:[]).filter(ee=>ee.kind!=="branch-created").map(ee=>new Date(ee.date).getTime()).filter(ee=>Number.isFinite(ee)).sort((ee,Y)=>ee-Y)[0];O!=null&&h.set(Q.name,O)}const p=Q=>{const de=h.get(Q.name);return de!=null?de:my(Q).start},g=Q=>{var O;const de=(O=a[Q.name])!=null?O:null;return de&&de!==Q.name&&(de===n||u.has(de))?de:Q.name===n?null:Q.parentBranch&&Q.parentBranch!==Q.name&&(Q.parentBranch===n||u.has(Q.parentBranch))?Q.parentBranch:null};for(const Q of t){if(Q.name===n)continue;const de=(oe=g(Q))!=null?oe:n,O=(Ce=d.get(de))!=null?Ce:[];O.push(Q),d.set(de,O)}for(const Q of d.values())Q.sort((de,O)=>p(de)-p(O)||de.name.localeCompare(O.name));const _=new Map,x=[],b=new Map,w=new Map,S=new Map;for(const Q of Object.values(i))for(const de of Q){const O=new Date(de.date).getTime();Number.isFinite(O)&&(de.fullSha&&S.set(de.fullSha,O),de.sha&&S.set(de.sha,O))}const k=(Q,de)=>({start:Math.min(Q,de),end:Math.max(Q,de)}),C=Q=>{var se,ce;const de=k(p(Q),my(Q).end),O=[de],ee=de.start,Y=Wv(Q,n,i),q=Y?S.get(Y):void 0,ge=new Date((ce=(se=Q.divergedFromDate)!=null?se:Q.createdDate)!=null?ce:Q.lastCommitDate).getTime(),D=Number.isFinite(q!=null?q:NaN)?q:Number.isFinite(ge)?ge:null;if(D==null)return O;const ae=k(D,ee);return ae.start!==ae.end&&O.push(ae),O},j=Math.max(1,360*60*1e3*Pv),N=(Q,de)=>!(Q.start-de.end>=j||de.start-Q.end>=j),B=(Q,de)=>de.some(O=>{var ee;return((ee=w.get(Q))!=null?ee:[]).some(Y=>N(O,Y))}),A=(Q,de=new Set)=>{const O=b.get(Q);if(O!=null)return O;if(de.has(Q))return 1;de.add(Q);const ee=u.get(Q);if(!ee||Q===n)return de.delete(Q),b.set(Q,0),0;const Y=g(ee),q=Y?A(Y,de)+1:1;return de.delete(Q),b.set(Q,q),q},I=(Q,de=new Set)=>{var We,Re;const O=_.get(Q);if(O)return O.column;if(de.has(Q))return 0;de.add(Q);const ee=u.get(Q);if(!ee)return de.delete(Q),0;if(Q===n){const mt={name:Q,column:0,parentName:null};_.set(Q,mt),x.push(mt);const at=C(ee);return w.set(0,[...(We=w.get(0))!=null?We:[],...at]),de.delete(Q),0}const Y=g(ee),q=Y&&!de.has(Y)?Y:null,ge=q?I(q,de):0,D=Math.max(1,A(Q)),ae=Math.max(q?ge+1:1,D),se=C(ee);let ce=ae;for(;B(ce,se);)ce+=1;const De={name:Q,column:ce,parentName:q};return _.set(Q,De),x.push(De),w.set(ce,[...(Re=w.get(ce))!=null?Re:[],...se]),de.delete(Q),ce};I(n);const V=t.filter(Q=>!_.has(Q.name)).sort((Q,de)=>p(Q)-p(de)||Q.name.localeCompare(de.name)),X=V.filter(Q=>g(Q)!=null),U=V.filter(Q=>g(Q)==null);for(const Q of X)I(Q.name);let G=Math.max(0,...x.map(Q=>Q.column))+1+1;for(const Q of U){const de=C(Q);let O=G;for(;B(O,de);)O+=1;const ee={name:Q.name,column:O,parentName:null};_.set(Q.name,ee),x.push(ee),w.set(O,[...(Le=w.get(O))!=null?Le:[],...de]),G=O+1}return x.sort((Q,de)=>Q.column-de.column||Q.name.localeCompare(de.name))}function Fv(t,n,i,a){const c=new Map(t.map(h=>[h.name,h])),u=h=>{var g;const p=(g=i[h.name])!=null?g:null;return p&&p!==h.name&&(p===n||c.has(p))?p:h.name===n?null:h.parentBranch&&h.parentBranch!==h.name&&(h.parentBranch===n||c.has(h.parentBranch))?h.parentBranch:null},d=[];for(const h of t){const p=a[h.name];if(p==null||!Number.isFinite(p))return null;d.push({name:h.name,column:p,parentName:u(h)})}return d.some(h=>h.name===n&&h.column===0)?d.sort((h,p)=>h.column-p.column||h.name.localeCompare(p.name)):null}const Yu=2.25,Ii=0,Fh=0,Xv=1800*1e3,qv=1440*60*1e3,ki=t=>{const n=t?new Date(t).getTime():Number.NaN;return Number.isFinite(n)?n:Number.NEGATIVE_INFINITY},Uo=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function py(t,n,i=new Map){var X,U,G,re,oe,Ce,Le,Q,de,O,ee,Y;if(t.length===0)return new Map;const a=[...t].sort((q,ge)=>{const D=ki(q.date)-ki(ge.date);return D!==0?D:q.id!==ge.id?q.id.localeCompare(ge.id):q.visualId.localeCompare(ge.visualId)}),c=new Map;for(const q of t){const ge=(X=q.parentSha)!=null?X:null;if(ge){const D=(U=c.get(ge))!=null?U:new Set;D.add(q.id),c.set(ge,D)}for(const D of(G=i.get(q.id))!=null?G:[]){if(!D)continue;const ae=(re=c.get(D))!=null?re:new Set;ae.add(q.id),c.set(D,ae)}}const u=new Map,d=new Map,h=new Map,p=new Set,g=new Map,_=new Map,x=new Map,b=new Map;for(const q of t){const ge=(oe=g.get(q.branchName))!=null?oe:new Set;ge.add(q.id),g.set(q.branchName,ge);const D=(Le=(Ce=n.get(q.branchName))==null?void 0:Ce.column)!=null?Le:0,ae=(Q=_.get(q.id))!=null?Q:new Set;ae.add(D),_.set(q.id,ae);const se=new Set;q.parentSha&&se.add(q.parentSha),x.set(q.visualId,se);const ce=new Set(se);for(const De of(de=i.get(q.id))!=null?de:[])De&&ce.add(De);b.set(q.visualId,ce)}const w=new Set(Array.from(_.keys())),S=Array.from(w),k=new Map,C=q=>{const ge=[];for(const D of S)Uo(D,q)&&ge.push(D);return ge},j=new Map;for(const q of S)j.set(q,new Set);for(const q of t){const ge=C(q.id);if(ge.length===0)continue;const D=(O=b.get(q.visualId))!=null?O:new Set,ae=new Set;for(const se of D)for(const ce of C(se))ae.add(ce);for(const se of ge){const ce=(ee=j.get(se))!=null?ee:new Set;for(const De of ae)ce.add(De);j.set(se,ce)}}const N=new Map,B=(q,ge=new Set)=>{var ce;const D=N.get(q);if(D)return D;if(ge.has(q))return new Set;ge.add(q);const ae=(ce=j.get(q))!=null?ce:new Set,se=new Set;for(const De of ae){se.add(De);for(const We of B(De,ge))se.add(We)}return ge.delete(q),N.set(q,se),se},A=(q,ge)=>{if(Uo(q,ge))return!0;const D=C(q),ae=C(ge);for(const se of D){const ce=B(se);for(const De of ae)if(ce.has(De))return!0}for(const se of ae){const ce=B(se);for(const De of D)if(ce.has(De))return!0}return!1};let I=1;const V=(q,ge)=>{var Ut,dn,_e,me,rt,Ee,_t,Je,tt;const D=(dn=(Ut=n.get(q.branchName))==null?void 0:Ut.column)!=null?dn:0,ae=(_e=g.get(q.branchName))!=null?_e:new Set,ce=!(!!q.parentSha&&ae.has(q.parentSha))&&q.parentSha?q.parentSha:null,De=Array.from(ge).flatMap(Qe=>C(Qe).flatMap(ht=>{var qt;return(qt=k.get(ht))!=null?qt:[]})),We=(q.kind==="branch-created"||q.kind==="stash")&&De.length>0?Math.max(...De)+1:null,Re=De.length>0?Math.max(...De)+1:1,mt=(me=c.get(q.id))!=null?me:new Set,Pe=Array.from(mt).flatMap(Qe=>{var ht;return Array.from((ht=_.get(Qe))!=null?ht:[])}).some(Qe=>Qe!==D),ct=new Date(q.date).getTime(),dt=Math.max(Re,1);let bt=null;for(let Qe=dt;Qe<I;Qe+=1){const ht=(rt=d.get(Qe))!=null?rt:[];if(ht.length===0||Pe||p.has(Qe))continue;const qt=(Ee=b.get(q.visualId))!=null?Ee:new Set;if(!(ht.some(K=>A(q.id,K.sha)?!0:Array.from(qt).some(Ge=>Uo(Ge,K.sha)))||ht.some(K=>K.column===D)||!Number.isFinite(ct)||!ht.every(K=>{if(!Number.isFinite(K.time))return!1;const Ge=!!ce&&!!K.branchEntryParentSha&&ce===K.branchEntryParentSha?qv:Xv;return Math.abs(K.time-ct)<=Ge}))){bt=Qe;break}}We!=null&&(bt=We),bt==null&&(bt=Math.max(Re,I)),u.set(q.visualId,bt),bt>=I&&(I=bt+1);const gt=(_t=d.get(bt))!=null?_t:[];gt.push({visualId:q.visualId,sha:q.id,column:D,time:ct,branchEntryParentSha:ce}),d.set(bt,gt),Pe&&p.add(bt);for(const Qe of ge){const ht=(Je=h.get(Qe))!=null?Je:[];ht.push(bt),h.set(Qe,ht)}const Xt=(tt=k.get(q.id))!=null?tt:[];Xt.push(bt),k.set(q.id,Xt)};for(const q of a){const ge=(Y=x.get(q.visualId))!=null?Y:new Set;V(q,ge)}return u}function Sd(t){var Sn,Fo,_s,ni,Ei,Lo,fi,Bs,oo,En,bo,gs,xn,hi,Ks,mi,Kt,si,Us,Ai,Di,Xo,mo,Oo,io,An,vo,zo,hs,po,an,ks,Ls,Os,is,Hn,ao,as,zs,$o,wo,Yn,z,te,ie,ye,Ze,it,st,zt,Rn;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchParentByName:p={},branchUniqueAheadCounts:g,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:b,gridSearchQuery:w,gridFocusSha:S,checkedOutRef:k,orientation:C="horizontal",nodePositionOverrides:j={}}=t,N=C==="horizontal",B=new Map(i.map(M=>[M.name,M])),A=new Map(n.map(M=>[M.name,M])),I=Uv([...a.map(M=>{var W,ue,fe;return{id:M.fullSha,branchName:d,message:(W=M.prTitle)!=null?W:M.sha,author:"",date:M.date,parentSha:(fe=(ue=M.parentShas)==null?void 0:ue[0])!=null?fe:null}}),...((Sn=h[d])!=null?Sn:[]).map(M=>Cr(d,M)),...c.map(M=>Cr(M.branch||"",M)),...u.map(M=>Cr(M.branch||"",M))]),V=new Map,X=new Map;for(const M of i){if(M.name===d)continue;const W=Lx(M.name,g,h);X.set(M.name,W);const ue=Rx(W.map(Lt=>Cr(M.name,Lt)));if(ue.length>0){V.set(M.name,ue);continue}const fe=(ni=(_s=(Fo=M.presidesFromSha)!=null?Fo:M.divergedFromSha)!=null?_s:M.createdFromSha)!=null?ni:null;if(!fe)continue;const ke=(Ei=c.find(Lt=>Uo(Lt.fullSha,fe)||Uo(Lt.sha,fe)))==null?void 0:Ei.date,Oe=ke?null:(Lo=Object.values(h).flat().find(Lt=>Uo(Lt.fullSha,fe)||Uo(Lt.sha,fe)))==null?void 0:Lo.date,vt={id:`BRANCH_HEAD:${M.name}:${fe}`,branchName:M.name,message:`Branch ${M.name}`,author:M.lastCommitAuthor,date:(oo=(Bs=(fi=ke!=null?ke:Oe)!=null?fi:M.createdDate)!=null?Bs:M.divergedFromDate)!=null?oo:M.lastCommitDate,parentSha:fe,kind:"branch-created"};V.set(M.name,[vt])}const U=new Set(I.map(M=>M.id)),G=(En=[...I].sort((M,W)=>ki(M.date)-ki(W.date)||M.id.localeCompare(W.id))[0])!=null?En:null,re=new Map(Array.from(V.entries()).map(([M,W])=>[M,new Set(W.map(ue=>ue.id))])),oe=new Map;for(const M of i){if(M.name===d)continue;const W=Yv(M.name,h,g);if(W){oe.set(M.name,W);continue}const ue=(bo=V.get(M.name))==null?void 0:bo[0];if(ue){const fe=(hi=(xn=(gs=M.presidesFromSha)!=null?gs:M.divergedFromSha)!=null?xn:M.createdFromSha)!=null?hi:null;oe.set(M.name,{...ue,parentSha:fe})}}const Ce=new Map;for(const[M,W]of V.entries()){const ue=W.find(fe=>fe.kind!=="branch-created");ue&&Ce.set(M,ue)}const Le=new Map;for(const[M,W]of V.entries()){const ue=W.filter(Oe=>Oe.kind!=="branch-created"),ke=(Ks=(ue.length>0?ue:W)[0])!=null?Ks:null;ke&&Le.set(M,ke)}const Q=new Map;for(const M of i){if(M.name===d)continue;const W=(mi=Le.get(M.name))!=null?mi:null,ue=(si=(Kt=oe.get(M.name))==null?void 0:Kt.parentSha)!=null?si:null,fe=(Di=(Ai=(Us=M.presidesFromSha)!=null?Us:M.divergedFromSha)!=null?Ai:M.createdFromSha)!=null?Di:null,ke=(Xo=W==null?void 0:W.parentSha)!=null?Xo:null,Oe=(mo=ke!=null?ke:ue)!=null?mo:fe;Oe&&Q.set(M.name,Oe)}const de=M=>{var Oe,vt,Lt,yt,$e,Yt,hn,kn;const W=(Oe=p[M.name])!=null?Oe:null;if(!(W&&W!==d&&W!==M.name&&B.has(W)))return W!=null?W:"";const fe=(yt=(Lt=(vt=Q.get(M.name))!=null?vt:M.presidesFromSha)!=null?Lt:M.divergedFromSha)!=null?yt:M.createdFromSha;if(fe&&(($e=re.get(W))!=null?$e:new Set).has(fe))return W;const ke=(hn=(Yt=oe.get(M.name))==null?void 0:Yt.parentSha)!=null?hn:null;return ke&&((kn=re.get(W))!=null?kn:new Set).has(ke),W},O=M=>{var ke,Oe,vt,Lt,yt,$e,Yt,hn;const W=oe.get(M.name),ue=(yt=(Lt=(vt=(Oe=(ke=Q.get(M.name))!=null?ke:W==null?void 0:W.parentSha)!=null?Oe:M.presidesFromSha)!=null?vt:M.divergedFromSha)!=null?Lt:M.createdFromSha)!=null?yt:null;if(!M.parentBranch&&!ue||!ue)return null;if(de(M)===d){if(U.has(ue))return ue;const kn=($e=W==null?void 0:W.parentSha)!=null?$e:null;return kn&&U.has(kn)?kn:(hn=(Yt=G==null?void 0:G.id)!=null?Yt:kn)!=null?hn:ue}return U.has(ue),ue},ee=M=>O(M),Y=new Map;for(const M of[...c,...u]){const W={...Cr(M.branch||"",M),visualId:`${M.branch||""}:${M.fullSha}`};Y.set(M.fullSha,W)}const q=new Map(Y),ge=M=>{q.has(M.id)||q.set(M.id,M)},D=new Map(Array.from(V.entries()).map(([M,W])=>[M,new Set(W.map(ue=>ue.id))])),ae=new Set;for(const M of D.values())for(const W of M)ae.add(W);for(const M of I)ae.has(M.id)||ge({...M,visualId:`${M.branchName}:${M.id}`});for(const[M,W]of V.entries())for(const ue of W)ge({...ue,visualId:`${M}:${ue.id}`});const ce=[...Array.from(q.values()).map(M=>({...M,visualId:`${M.branchName}:${M.id}`}))].sort((M,W)=>ki(M.date)-ki(W.date)||M.id.localeCompare(W.id)),De=new Map;for(const M of ce){const W=(Oo=De.get(M.branchName))!=null?Oo:new Set;W.add(M.id),De.set(M.branchName,W)}const We=(M,W)=>{const ue=De.get(M);if(!ue||ue.size===0)return!1;for(const fe of ue)if(Uo(fe,W))return!0;return!1},Re=(M,W)=>{const ue=Array.from(De.entries()).filter(([fe])=>fe!==W).filter(([,fe])=>Array.from(fe).some(ke=>Uo(ke,M))).map(([fe])=>fe);return ue.length>0?ue.sort()[0]:M.slice(0,7)},mt=[],at=new Map,Pe=new Map;for(const M of a){const W=M.fullSha,ue=M.targetBranch,fe=M.targetCommitSha;if(!W||!ue||!fe||!We(ue,fe))continue;const ke=((io=M.parentShas)!=null?io:[]).slice(1).filter(vt=>!!vt&&!Uo(vt,W));if(ke.length===0)continue;const Oe=(An=Pe.get(W))!=null?An:new Set;for(const vt of ke){Oe.add(vt);const Lt=Re(vt,ue);mt.push({sourceCommitSha:vt,sourceBranchName:Lt,mergeCommitSha:W,targetCommitSha:fe,targetBranchName:ue});const yt=(vo=at.get(Lt))!=null?vo:new Map,$e=(zo=yt.get(vt))!=null?zo:new Set;$e.add(ue),yt.set(vt,$e),at.set(Lt,yt)}Pe.set(W,Oe)}const ct=new Map;for(const M of i){if(M.name===d)continue;const W=O(M);W&&ct.set(M.name,W)}const dt=new Map;for(const M of ce){const W=Pe.get(M.id);if(W&&W.size>0){const ke=(hs=dt.get(M.id))!=null?hs:new Set;for(const Oe of W)ke.add(Oe);dt.set(M.id,ke)}if(M.branchName===d)continue;const ue=ct.get(M.branchName);if(!ue||ue===M.id)continue;const fe=(po=dt.get(M.id))!=null?po:new Set;fe.add(ue),dt.set(M.id,fe)}const bt=py(ce,A,dt),gt=new Map;for(const M of ce){const W=(an=gt.get(M.branchName))!=null?an:[];W.push(M),gt.set(M.branchName,W)}const Xt=new Map,Ut=new Map,dn=new Map,_e=new Map,me=new Map,rt=(M,W)=>{var Oe,vt,Lt;if(W.length===0)return[];const ue=[...W].sort((yt,$e)=>{var kn,Bn;const Yt=(kn=bt.get(yt.visualId))!=null?kn:Number.MAX_SAFE_INTEGER,hn=(Bn=bt.get($e.visualId))!=null?Bn:Number.MAX_SAFE_INTEGER;return Yt!==hn?Yt-hn:ki(yt.date)-ki($e.date)||yt.id.localeCompare($e.id)}),fe=new Map;for(const yt of ue){const $e=((Oe=yt.clusterKey)==null?void 0:Oe.trim())||`cluster:${M}:${yt.id}`,Yt=(vt=fe.get($e))!=null?vt:[];Yt.push(yt),fe.set($e,Yt)}const ke=[];for(const[yt,$e]of fe.entries()){if($e.length===0)continue;const hn=[...$e].sort((Bn,mn)=>{var jn,Wn;const rs=(jn=bt.get(Bn.visualId))!=null?jn:Number.MIN_SAFE_INTEGER,Qs=(Wn=bt.get(mn.visualId))!=null?Wn:Number.MIN_SAFE_INTEGER;return rs!==Qs?Qs-rs:ki(mn.date)-ki(Bn.date)||mn.id.localeCompare(Bn.id)})[0].visualId,kn={branchName:M,key:yt,commitIds:$e.map(Bn=>Bn.visualId),leadId:hn,count:$e.length};ke.push(kn),_e.set(yt,hn),me.set(yt,$e.length);for(const Bn of kn.commitIds){Ut.set(Bn,yt);const mn=Bn.split(":").slice(1).join(":"),rs=(Lt=dn.get(mn))!=null?Lt:[];rs.includes(yt)||rs.push(yt),dn.set(mn,rs)}}return ke};for(const[M,W]of gt.entries())Xt.set(M,rt(M,W));const Ee=new Map;for(const M of ce)Ee.set(M.id,M);const _t=M=>{if(!M)return"none";const W=Array.from(Ee.values()).find(ue=>Uo(ue.id,M)||Uo(ue.id.slice(0,7),M)||Uo(M,ue.id));return W?`${W.id.slice(0,7)} ${W.branchName}`:M.slice(0,7)},Je=b?["Lane rows (expected):",...[...n].sort((M,W)=>M.column-W.column||M.name.localeCompare(W.name)).map(M=>{var W;return`  row=${M.column} branch=${M.name} parent=${(W=M.parentName)!=null?W:"none"}`}),"",...i.flatMap(M=>{var vt,Lt,yt,$e,Yt,hn,kn,Bn;const W=(vt=h[M.name])!=null?vt:[],ue=[...(Lt=X.get(M.name))!=null?Lt:[]].reverse(),fe=new Set(((yt=V.get(M.name))!=null?yt:[]).map(mn=>mn.id)),ke=(Yt=($e=ue.find(mn=>!mn.parentSha||!ue.some(rs=>{var Qs;return Uo(rs.fullSha,(Qs=mn.parentSha)!=null?Qs:"")})))!=null?$e:ue[0])!=null?Yt:null,Oe=(kn=(hn=ke==null?void 0:ke.parentSha)!=null?hn:Q.get(M.name))!=null?kn:null;return[`Branch ${M.name}`,`  ahead=${(Bn=g[M.name])!=null?Bn:0} previews=${ue.length} rendered=${fe.size}`,`  db parent commit=${_t(Oe)}`,`  db child commit=${ke?`${ke.fullSha.slice(0,7)} ${M.name}`:"none"}`,...ue.map(mn=>{const rs=fe.has(mn.fullSha)?"visible":"hidden",Qs=fe.has(mn.fullSha)?"kept by render set":"dropped by render set";return`  ${rs} ${mn.fullSha.slice(0,7)} ${mn.message} [${Qs}]`}),W.length===0?"  no preview data":null].filter(mn=>mn!=null)})]:[],tt=b?Array.from(V.entries()).map(([M,W])=>[`Branch debug ${M}`,...W.map(ue=>`  ${ue.id.slice(0,7)} ${ue.message}`)].join(`
`)):[],Qe=bt,ht=Tm/Yu,qt=20/Yu,ut=N?ts+ht+qt:Uu+ht+qt,$=N?Uu+ht+qt:oc,J=Math.max(0,...ce.map(M=>{var W;return(W=Qe.get(M.visualId))!=null?W:1})),K=ce.map(M=>{var ke,Oe;const W=A.get(M.branchName),ue=(ke=Qe.get(M.visualId))!=null?ke:1,fe=(Oe=W==null?void 0:W.column)!=null?Oe:0;return N?{commit:M,row:ue,column:fe,x:gr+(ue-1)*ut,y:_r+fe*$}:{commit:M,row:ue,column:fe,x:gr+fe*oc,y:_r+(J-ue)*ut}}),we=M=>{var ue;const W=(ue=j[M.commit.visualId])!=null?ue:j[M.commit.id];return W?{...M,x:W.x,y:W.y}:M},Ge=K.map(we),Ve=w.trim().toLowerCase(),Ne=Ve?Ge.filter(M=>{const W=M.commit.id.toLowerCase(),ue=M.commit.id.slice(0,7).toLowerCase(),fe=M.commit.message.toLowerCase(),ke=M.commit.branchName.toLowerCase();return W.includes(Ve)||ue.includes(Ve)||fe.includes(Ve)||ke.includes(Ve)}):Ge,kt=S&&(ks=Ge.find(M=>M.commit.id===S))!=null?ks:null,nt=new Set(Ne.map(M=>M.commit.id)),At=(Ls=k==null?void 0:k.headSha)!=null?Ls:null,ft=(()=>{var W,ue;const M=(W=k==null?void 0:k.branchName)!=null?W:null;return!At||!M?null:(ue=Ut.get(`${M}:${At}`))!=null?ue:null})(),Ye=new Set;for(const M of Xt.values())for(const W of M)W.count>1&&W.key!==ft&&Ye.add(W.key);const Ot=[...ce].filter(M=>{var Oe;const W=Ut.get(M.visualId);if(!W)return!0;const ue=_e.get(W),fe=(Oe=me.get(W))!=null?Oe:1,ke=_.has(W)||!Ye.has(W)&&!x.has(W);return fe<=1||ke||ue===M.visualId}),Vt=py(Ot,A,dt),Jt=Tm/Yu,qe=20/Yu,Dt=N?ts+Jt+qe:Uu+Jt+qe,Mt=N?Uu+Jt+qe:oc,Bt=Math.max(0,...Ot.map(M=>{var W;return(W=Vt.get(M.visualId))!=null?W:1})),Nt=Ot.map(M=>{var ke,Oe;const W=A.get(M.branchName),ue=(ke=Vt.get(M.visualId))!=null?ke:1,fe=(Oe=W==null?void 0:W.column)!=null?Oe:0;return we(N?{commit:M,row:ue,column:fe,x:gr+(ue-1)*Dt,y:_r+fe*Mt}:{commit:M,row:ue,column:fe,x:gr+fe*oc,y:_r+(Bt-ue)*Dt})}),et=new Map;for(const M of Nt){const W=(Os=et.get(M.commit.id))!=null?Os:[];W.push(M),et.set(M.commit.id,W)}const Zt=new Map;for(const M of Nt){const W=Ut.get(M.commit.visualId);if(!W)continue;const ue=Zt.get(W);(!ue||(N?M.x>ue.x:M.y<ue.y))&&Zt.set(W,M)}const Tn=(M,W)=>`${M.toFixed(1)} ${W.toFixed(1)}`,os=Math.max(0,...Nt.map(M=>M.row)),Kn=Math.max(0,...n.map(M=>M.column)),fo=Math.max(0,...Nt.map(M=>M.x+ts)),ds=Math.max(0,...Nt.map(M=>M.y+Za+Ms)),Cs=Math.max(N?gr*2+Math.max(0,os-1)*Dt+ts+Vh+qe:gr*2+(Kn+1)*oc,fo+gr),wn=Math.max(N?_r*2+Kn*Mt+Ms+Vh+qe:_r*2+Math.max(0,os-1)*Dt+Ms+Vh+qe,ds+_r),Nn=[],fn=new Map(i.map(M=>{var ue,fe;const W=new Date((fe=(ue=M.createdDate)!=null?ue:M.divergedFromDate)!=null?fe:M.lastCommitDate).getTime();return[M.name,Number.isFinite(W)?W:0]})),pn=M=>{var W;return(W=fn.get(M))!=null?W:0},ot=[],en=M=>{b&&ot.push(M)},qs=new Set,To=new Map,zn=(M,W)=>{var fe;const ue=(fe=To.get(M))!=null?fe:[];ue.includes(W)||ue.push(W),To.set(M,ue)},Ns=new Set,go=new Set,Eo=new Set,yo=(M,W)=>{var ke,Oe;if(!M)return null;const ue=Vu(et,M,W);if(ue)return ue;const fe=(ke=Ut.get(`${W!=null?W:d}:${M}`))!=null?ke:Ut.get(M);return fe&&(Oe=Zt.get(fe))!=null?Oe:null},Gs=new Set;for(const M of i){const W=ee(M);W&&go.add(W);const ue=(is=Q.get(M.name))!=null?is:null;ue&&Eo.add(ue)}const Hs=M=>{var ke;const W=yo(M.id,M.branchName);if(W)return W;const ue=Ut.get(M.visualId);if(!ue)return null;const fe=_e.get(ue);return fe&&(ke=Nt.find(Oe=>Oe.commit.id===fe))!=null?ke:null},Pn=(M,W)=>M?Vu(et,M,W):null,ti=(M,W)=>N?{x:M.x-Ii,y:M.y+Ms/2,face:"left"}:{x:M.x+ts/2,y:M.y+Ms+Ii,face:"bottom"},ho=M=>N?{x:M.x-Ii,y:M.y+Ms/2,face:"left"}:{x:M.x+ts/2,y:M.y+Ms+Ii,face:"bottom"},Ts=(M,W)=>M.column!==W.column?!0:N?M.commit.branchName!==W.commit.branchName:!1,fs=(M,W,ue)=>{if(!N)return{x:W?M.x+ts:M.x+ts/2,y:W?M.y+Ms/2:M.y,face:W?"right":"top"};if(!W)return{x:M.x+ts+Ii,y:M.y+Ms/2,face:"right"};if(ue&&ue.column===M.column&&ue.commit.branchName!==M.commit.branchName){if(ue.x>M.x)return{x:M.x+ts/2,y:M.y+Ms+Ii,face:"bottom"};if(ue.x<M.x)return{x:M.x+ts/2,y:M.y-Ii,face:"top"}}return!ue||ue.column===M.column?{x:M.x+ts+Ii,y:M.y+Ms/2,face:"right"}:ue.column>M.column?{x:M.x+ts/2,y:M.y+Ms+Ii,face:"bottom"}:{x:M.x+ts/2,y:M.y-Ii,face:"top"}},Es=M=>N?{x:M.x+ts/2,y:M.y+Ms+Ii,face:"bottom"}:{x:M.x+ts,y:M.y+Ms/2,face:"right"},As=(M,W)=>Vu(et,M,W),xo=(M,W)=>Pn(M,W),Vn=[],Ao=new Set;for(const M of mt){const W=(Hn=yo(M.targetCommitSha,M.targetBranchName))!=null?Hn:null;if(!W){en({id:`merge:${M.mergeCommitSha}:${M.sourceCommitSha}:target`,kind:"merge",parent:M.sourceCommitSha,child:M.targetCommitSha,rendered:!1,reason:"missing merge target node"});continue}const ue=M.sourceCommitSha,fe=`merge:${M.mergeCommitSha}:${ue!=null?ue:"unknown"}`;if(!ue||Uo(ue,M.targetCommitSha)){en({id:fe,kind:"merge",parent:ue!=null?ue:"unknown",child:M.targetCommitSha,rendered:!1,reason:ue?"merged parent equals merge target sha":"missing merged parent sha"});continue}const ke=(ao=Vu(et,ue))!=null?ao:null;if(!ke){en({id:fe,kind:"merge",parent:ue,child:M.targetCommitSha,rendered:!1,reason:"missing merge parent node"});continue}if(ke.commit.id===W.commit.id){en({id:fe,kind:"merge",parent:ke.commit.id,child:W.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let Oe,vt,Lt;const yt=N?W.x+ts/2:W.x+ts-Fh,$e=N?W.y+Ms+Fh:W.y+Ms/2,Yt=N?"bottom":"right";N?(Oe=ke.x+ts+Fh,vt=ke.y+Ms/2,Lt="right"):(Oe=ke.x+ts/2,vt=ke.y,Lt="top");const hn=`${Oe.toFixed(2)}:${vt.toFixed(2)}:${yt.toFixed(2)}:${$e.toFixed(2)}`;if(Ao.has(hn)){en({id:fe,kind:"merge",parent:ke.commit.id,child:W.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Ao.add(hn),Vn.push({id:fe,fromX:Oe,fromY:vt,toX:yt,toY:$e,fromFace:Lt,toFace:Yt,zIndex:pn(ke.commit.branchName)}),en({id:fe,kind:"merge",parent:ke.commit.id,child:W.commit.id,rendered:!0,reason:`merge connector rendered to ${M.targetBranchName}`})}const Ds=new Set;for(const M of i){if(M.name===d)continue;const W=oe.get(M.name);if(!W)continue;const ue=de(M),fe=As((as=Q.get(M.name))!=null?as:"",ue),ke=(zs=Ce.get(M.name))!=null?zs:W,Oe=($o=xo(ke.id,M.name))!=null?$o:Hs(ke);if(!fe||!Oe||fe.commit.id===Oe.commit.id){const Yt=Ut.get(`${M.name}:${W.id}`),hn=Ut.get(`${M.name}:${ke.id}`),kn=!!Yt&&!Ye.has(Yt),Bn=!!hn&&!Ye.has(hn),mn=!!Yt&&!_.has(Yt)&&(kn?x.has(Yt):!0),rs=!!hn&&!_.has(hn)&&(Bn?x.has(hn):!0);!fe&&!mn&&zn((wo=Oe==null?void 0:Oe.commit.id)!=null?wo:W.id,"Missing parent node"),!Oe&&!rs&&zn(W.id,"Missing child node"),en({id:`branch:${(Yn=fe==null?void 0:fe.commit.id)!=null?Yn:"null"}->${(z=Oe==null?void 0:Oe.commit.id)!=null?z:"null"}`,kind:"branch",parent:(te=fe==null?void 0:fe.commit.id)!=null?te:"null",child:(ie=Oe==null?void 0:Oe.commit.id)!=null?ie:"null",rendered:!1,reason:fe?Oe?"parent and child are the same node":"missing child node":"missing parent node"});continue}const vt=`branch:${fe.commit.id}->${Oe.commit.id}`;if(Gs.has(vt)){en({id:vt,kind:"branch",parent:fe.commit.id,child:Oe.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Gs.add(vt),Ns.add(fe.commit.id);const Lt=Ts(fe,Oe);fe.commit.branchName!==Oe.commit.branchName&&Ds.add(fe.commit.id);const yt=Es(fe),$e=ho(Oe);Nn.push({id:vt,fromX:yt.x,fromY:yt.y,toX:$e.x,toY:$e.y,fromFace:yt.face,toFace:$e.face,zIndex:pn(Oe.commit.branchName)}),en({id:vt,kind:"branch",parent:fe.commit.id,child:Oe.commit.id,rendered:!0,reason:Lt?"branch connector rendered":N?"horizontal connector rendered":"vertical connector rendered"})}for(const M of ce){const W=Hs(M);if(!W)continue;const ue=(ye=M.parentSha)!=null?ye:null;if(!ue)continue;const fe=(Ze=yo(ue,M.branchName))!=null?Ze:As(ue,M.branchName);if(!fe){const yt=(it=Ut.get(`${M.branchName}:${ue}`))!=null?it:Ut.get(ue),$e=!!yt&&!Ye.has(yt);!!yt&&!_.has(yt)&&($e?x.has(yt):!0)||zn(M.id,"Missing parent node"),en({id:`${M.visualId}->${ue}`,kind:"ancestry",parent:ue,child:M.id,rendered:!1,reason:"missing parent node"});continue}if(W.commit.id===fe.commit.id){zn(W.commit.id,"Parent and child resolve to the same node"),en({id:`${fe.commit.id}->${W.commit.id}`,kind:"ancestry",parent:fe.commit.id,child:W.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const ke=`${M.branchName}:${(st=fe.commit.visualId)!=null?st:fe.commit.id}->${W.commit.visualId}`;if(Gs.has(ke)){zn(fe.commit.id,"Duplicate connector key"),zn(W.commit.id,"Duplicate connector key"),en({id:ke,kind:"ancestry",parent:fe.commit.id,child:W.commit.id,rendered:!1,reason:"duplicate connector key"});continue}Gs.add(ke),Ns.add(fe.commit.id);const Oe=Ts(fe,W),vt=fs(fe,Oe,W),Lt=ti(W);Nn.push({id:ke,fromX:vt.x,fromY:vt.y,toX:Lt.x,toY:Lt.y,fromFace:vt.face,toFace:Lt.face,zIndex:pn(W.commit.branchName)}),en({id:ke,kind:"ancestry",parent:fe.commit.id,child:W.commit.id,rendered:!0,reason:Oe?"ancestry connector rendered":N?"horizontal ancestry rendered":"vertical ancestry rendered"}),qs.add(fe.commit.id),qs.add(W.commit.id)}const Rs=new Map;for(const M of Nt){const W=(zt=Rs.get(M.commit.branchName))!=null?zt:[];W.push(M),Rs.set(M.commit.branchName,W)}for(const[M,W]of Rs.entries()){if(W.length<2)continue;const ue=[...W].sort((fe,ke)=>{var Oe,vt,Lt,yt,$e,Yt,hn,kn;return fe.row!==ke.row?fe.row-ke.row:ki((vt=(Oe=fe==null?void 0:fe.commit)==null?void 0:Oe.date)!=null?vt:null)-ki((yt=(Lt=ke==null?void 0:ke.commit)==null?void 0:Lt.date)!=null?yt:null)||((Yt=($e=fe==null?void 0:fe.commit)==null?void 0:$e.id)!=null?Yt:"").localeCompare((kn=(hn=ke==null?void 0:ke.commit)==null?void 0:hn.id)!=null?kn:"")});for(let fe=1;fe<ue.length;fe+=1){const ke=ue[fe-1],Oe=ue[fe];if(ke.commit.id===Oe.commit.id)continue;const vt=(Rn=Oe.commit.parentSha)!=null?Rn:null;if(vt&&As(vt,Oe.commit.branchName))continue;const Lt=`chain:${M}:${ke.commit.id}->${Oe.commit.id}`;if(Gs.has(Lt)){zn(ke.commit.id,"Duplicate branch chain connector"),zn(Oe.commit.id,"Duplicate branch chain connector"),en({id:Lt,kind:"ancestry",parent:ke.commit.id,child:Oe.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}Gs.add(Lt);const yt=Ts(ke,Oe),$e=fs(ke,yt,Oe),Yt=ti(Oe);Nn.push({id:Lt,fromX:$e.x,fromY:$e.y,toX:Yt.x,toY:Yt.y,fromFace:$e.face,toFace:Yt.face,zIndex:pn(Oe.commit.branchName)}),en({id:Lt,kind:"ancestry",parent:ke.commit.id,child:Oe.commit.id,rendered:!0,reason:"branch chain rendered"}),qs.add(ke.commit.id),qs.add(Oe.commit.id)}}return{branchByName:B,laneByName:A,mainCommits:I,branchCommitsByLane:V,branchPreviewSets:X,allCommits:ce,clustersByBranch:Xt,clusterKeyByCommitId:Ut,clusterKeyBySha:dn,leadByClusterKey:_e,clusterCounts:me,debugRows:Je,branchDebugRows:tt,nodes:K,normalizedSearchQuery:Ve,matchingNodes:Ne,matchingNodeIds:nt,focusedNode:kt,checkedOutClusterKey:ft,defaultCollapsedClumps:Ye,visibleCommitsList:Ot,renderNodes:Nt,visibleNodesBySha:et,visibleNodeByClusterKey:Zt,pointFormatter:Tn,contentWidth:Cs,contentHeight:wn,connectors:Nn,mergeConnectors:Vn,connectorDecisions:ot,nodeWarnings:To,connectorParentShas:Ns,branchStartShas:go,branchOffNodeShas:Eo,crossBranchOutgoingShas:Ds,commitIdsWithRenderedAncestry:qs,branchBaseCommitByName:oe,firstBranchCommitByName:Le,mergeDestinations:mt,mergeTargetBranchesBySourceBranchAndCommitSha:at}}const Gv=8,Kv=44,_y=120,gy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function Ox(t,n,i,a,c,u){const d=i-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<Gv){const V=d/_,X=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*U,c1y:n+X*U,c2x:i-V*U,c2y:a-X*U}}if(Math.min(p,g)<Kv){const V=d/_,X=h/_,U=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+V*U,c1y:n+X*U,c2x:i-V*U,c2y:a-X*U}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),k=Math.min(120,g*.32),C=Math.min(160,g*.42),j=gy(c),N=gy(u);if(!(j==="v"&&N==="h"||j==="v"&&N==null&&g>=p||j==null&&N==="h"&&g>=p||j==="v"&&N==="v"||j==null&&N==null&&g>p)){const V=i,X=n;return{kind:"elbowH",cx:V,cy:X,s1c1x:t+x*w,s1c1y:n,s1c2x:V-x*S,s1c2y:X,s2c1x:V,s2c1y:X+b*k,s2c2x:i,s2c2y:a-b*C}}const A=t,I=a;return{kind:"elbowV",cx:A,cy:I,s1c1x:t,s1c1y:n+b*C,s1c2x:A,s1c2y:I-b*k,s2c1x:A+x*w,s2c1y:I,s2c2x:i-x*S,s2c2y:a}}function Qv(t,n,i,a,c,u){const d=Ox(t,n,i,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:i,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:i,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:i,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function yy(t,n,i,a,c,u,d){const h=Ox(t,n,i,a,u,d);if(h.kind==="line")return[`M ${c(t,n)}`,`L ${c(i,a)}`].join(" ");if(h.kind==="chord")return[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(i,a)}`].join(" ");if(h.kind==="elbowH"){const w=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),S=i>=t?1:-1,k=a>=n?1:-1,C=h.cx-S*w,j=h.cy+k*w;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(C-S*w*.5,h.cy)} ${c(C,h.cy)}`,`Q ${c(h.cx,h.cy)} ${c(h.cx,j)}`,`C ${c(h.cx,j+k*w*.5)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const p=Math.max(8,Math.min(_y,Math.abs(i-t)*.48,Math.abs(a-n)*.48)),g=i>=t?1:-1,_=a>=n?1:-1,x=h.cy-_*p,b=h.cx+g*p;return[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.cx,x-_*p*.5)} ${c(h.cx,x)}`,`Q ${c(h.cx,h.cy)} ${c(b,h.cy)}`,`C ${c(b+g*p*.5,h.cy)} ${c(h.s2c2x,h.s2c2y)} ${c(i,a)}`].join(" ")}const dp=2.25,ic=dp/2,Zv=.45,Jv=.01,Zi=dp,Cd=10,ew=-100,xy=0,by=.9,tw=.9,vy=.001,Xh=.001,nw=12,sw=ts+48;function Xs(...t){return t.filter(Boolean).join(" ")}function ow(t){return Math.max(Zv,Math.min(dp,t))}function iw(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function zx(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function aw(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function rw(t,n,i,a,c,u,d){const h=Qv(t,n,i,a,u,d),p=aw(h);return zx(c,p)}function $x(t,n){return{left:t.x,top:t.y+n,right:t.x+ts,bottom:t.y+Za+Ms+4}}function lw(t,n){const i=sw,a=Math.max(120,Math.ceil(Za+Ms+4-n+24)),c=new Map;for(const u of t){const d=$x(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let k=c.get(S);k||(k=new Set,c.set(S,k)),k.add(x)}}return{cellW:i,cellH:a,buckets:c}}function cw(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const k=d.get(`${w},${S}`);if(k)for(const C of k)x.add(C)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const k=$x(S,a);zx(n,k)&&b.add(w)}return b}function wy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/Zi;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function uw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function Sy(t,n,i){const a=n/Zi;return!Number.isFinite(a)||a<=0?t:uw(t,100/a)}function Cy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function di(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Em(t,n){if(n){const i=Cy(n),a=Cy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Em(t,n)}function dw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function fw({fadeIn:t,className:n,style:i,onClick:a,onPointerDown:c,dataCommitCard:u,children:d}){const[h,p]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){p(!0);return}p(!1);let g=null;const _=requestAnimationFrame(()=>{g=requestAnimationFrame(()=>p(!0))});return()=>{cancelAnimationFrame(_),g!=null&&cancelAnimationFrame(g)}},[t]),l.jsx("div",{className:n,"data-commit-card":u,onClick:a,onPointerDown:c,style:{...i,opacity:h?1:0,transition:t?"opacity 240ms ease-out":void 0},children:d})}function hw({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,onNodePointerDown:g,labelTopPx:_,inverseZoomStyle:x,displayZoom:b,selectedVisibleCommitShas:w,iconScaleStyle:S,normalizedSearchQuery:k,matchingNodeIds:C,focusedNode:j,renderNodes:N,shouldRenderNode:B,manuallyOpenedClumps:A,manuallyClosedClumps:I,defaultCollapsedClumps:V,leadByClusterKey:X,clusterKeyByCommitId:U,clusterCounts:G,commitIdsWithRenderedAncestry:re,nodeWarnings:oe,connectorParentShas:Ce,branchStartShas:Le,branchOffNodeShas:Q,crossBranchOutgoingShas:de,branchBaseCommitByName:O,branchStartAccentClass:ee,connectorParentAccentClass:Y,commitCornerRadiusPx:q,lineStrokeWidth:ge,pointFormatter:D,connectors:ae,mergeConnectors:se,cullConnectorPath:ce,flushCameraReactTick:De,setManuallyOpenedClumps:We,setManuallyClosedClumps:Re,onCommitCardClick:mt,unpushedCommitShasSetByBranch:at,checkedOutHeadSha:Pe,dragOverlay:ct}){const[dt,bt]=y.useState(new Set),gt=y.useRef(null);y.useEffect(()=>{const me=new Set;G.forEach((_t,Je)=>{(A.has(Je)||!V.has(Je)&&!I.has(Je))&&me.add(Je)});const rt=gt.current;if(rt==null){gt.current=me;return}const Ee=[];if(me.forEach(_t=>{rt.has(_t)||Ee.push(_t)}),Ee.length>0){bt(Je=>{const tt=new Set(Je);return Ee.forEach(Qe=>tt.add(Qe)),tt});const _t=window.setTimeout(()=>{bt(Je=>{const tt=new Set(Je);return Ee.forEach(Qe=>tt.delete(Qe)),tt})},260);return gt.current=me,()=>{window.clearTimeout(_t)}}gt.current=me},[G,V,I,A]);const Xt=(me,rt)=>{const Ee=rt.zIndex-me.zIndex;if(Ee!==0)return Ee;const _t=Math.min(me.fromY,me.toY),Je=Math.min(rt.fromY,rt.toY),tt=_t-Je;return tt!==0?tt:me.id.localeCompare(rt.id)},Ut=se.filter(me=>ce(me)).sort(Xt),dn=ae.filter(me=>ce(me)).sort(Xt),_e=N.filter(me=>B(me));return l.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:l.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:l.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[_e.map(me=>{var Ot,Vt,Jt,qe,Dt;const rt=(ct==null?void 0:ct.nodeId)===me.commit.visualId,Ee=U.get(me.commit.visualId),_t=Ee?A.has(Ee)||!V.has(Ee)&&!I.has(Ee):!1,Je=Ee?X.get(Ee)===me.commit.visualId:!1,tt=Ee!=null&&_t&&!Je&&dt.has(Ee),Qe=Ee&&(Ot=G.get(Ee))!=null?Ot:1,ht=re.has(me.commit.id),qt=(Vt=oe.get(me.commit.id))!=null?Vt:[],ut=qt.length>0&&!ht,$=w.includes(me.commit.id),J=me.commit.id==="WORKING_TREE"||me.commit.kind==="uncommitted",K=me.commit.kind==="stash"||me.commit.id.startsWith("STASH:"),we=/^STASH:(\d+)$/.exec(me.commit.id),Ge=we?`Stash:${we[1]}`:null,Ve=K?me.commit.message.trim()&&me.commit.message.trim()!=="git-visualizer"?me.commit.message:"Stashed changes":me.commit.message,Ne=me.commit.kind==="branch-created"&&me.commit.id.startsWith("BRANCH_HEAD:"),kt=J||((qe=(Jt=at.get(me.commit.branchName))==null?void 0:Jt.has(me.commit.id))!=null?qe:!1),At=(J||Pe!=null&&me.commit.id===Pe)&&!$,ft=At?"text-[#38BDF2]":$?"text-[#158EFC]":"text-muted-foreground",Ye=At?{color:"#38BDF2"}:$?{color:"#158EFC"}:void 0;return l.jsxs(fw,{fadeIn:tt,dataCommitCard:"true",className:Xs("group absolute z-20 cursor-grab active:cursor-grabbing",k&&!C.has(me.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",k&&C.has(me.commit.id)?"scale-[1.01]":"",(j==null?void 0:j.commit.id)===me.commit.id?"z-30 scale-[1.015]":"",rt?"opacity-0":""),style:{left:me.x,top:me.y,width:ts,height:Za+Ms+4,overflow:"visible"},onClick:Mt=>mt(Mt,me),onPointerDown:Mt=>g(Mt,me),children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[l.jsx("div",{className:Xs("min-w-0 h-4 flex-1 text-sm font-medium leading-none",ft,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ye,children:K&&Ge?Ge:me.commit.branchName?`${me.commit.branchName}/${me.commit.id.slice(0,7)}`:me.commit.id.slice(0,7)}),Je&&Qe>1?l.jsx("button",{type:"button",onMouseDown:Mt=>{Mt.stopPropagation()},onClick:Mt=>{if(Mt.stopPropagation(),Mt.preventDefault(),!Ee)return;!V.has(Ee)?(We(Nt=>{if(!Nt.has(Ee))return Nt;const et=new Set(Nt);return et.delete(Ee),et}),Re(Nt=>{const et=new Set(Nt);return et.has(Ee)?et.delete(Ee):et.add(Ee),et})):(Re(Nt=>{if(!Nt.has(Ee))return Nt;const et=new Set(Nt);return et.delete(Ee),et}),We(Nt=>{const et=new Set(Nt);return et.has(Ee)?et.delete(Ee):et.add(Ee),et})),De()},className:Xs("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",ft),style:Ye,children:_t?l.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Qe}`}):null]})}),l.jsx("div",{className:Xs("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",At&&!kt&&!K&&!Ne?"bg-[#EBF7FE]":$&&!kt&&!K&&!Ne?"bg-[#E5F0FF]":kt||K||Ne?"bg-transparent":"bg-[#F5F5F5]",K||J||Ne?"border-dashed":"",Q.has(me.commit.id)||Le.has(me.commit.id)||de.has(me.commit.id)?ee:Ce.has(me.commit.id)?Y:((Dt=O.get(me.commit.branchName))==null?void 0:Dt.id)===me.commit.id?"border-amber-500":ut?"border-red-500":"",(k&&C.has(me.commit.id)&&!d,"")),style:{top:0,borderWidth:`${K||J||Ne?ge*(2/1.5):ge}px`,borderColor:At?"#38BDF2":$?"#158EFC":Yh,borderTopLeftRadius:0,borderTopRightRadius:`${q}px`,borderBottomRightRadius:`${q}px`,borderBottomLeftRadius:`${q}px`},children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:[l.jsxs("div",{className:"min-h-0 flex-1",children:[l.jsx("div",{className:Xs("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",ft,b<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ye,children:Je&&_t?Ve:Je&&Qe>1?`${Ve} +${Qe-1}`:Ve}),l.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:ut?l.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:qt.join(`
`),children:"Broken ancestry"}):null})]}),b>.5?l.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[l.jsxs("div",{className:Xs("text-sm font-medium",ft),style:Ye,children:["@",me.commit.author]}),l.jsx("div",{className:Xs("text-sm font-medium",ft),style:Ye,children:new Date(me.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(j==null?void 0:j.commit.id)===me.commit.id&&k?l.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:S,children:"Search result"}):null]})})]},me.commit.visualId)}),ct?l.jsx("div",{className:"pointer-events-none absolute z-40",style:{left:ct.x,top:ct.y,width:ts,height:Za+Ms+4,overflow:"visible"},children:l.jsxs("div",{className:"group absolute z-40 cursor-grabbing",style:{left:0,top:0,width:ts,height:Za+Ms+4,overflow:"visible"},children:[l.jsx("div",{className:"absolute left-0 w-full",style:{...x,top:`${_}px`},children:l.jsx("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:l.jsx("div",{className:"min-w-0 h-4 flex-1 text-sm font-medium leading-none text-foreground break-words whitespace-normal",children:ct.node.commit.branchName?`${ct.node.commit.branchName}/${ct.node.commit.id.slice(0,7)}`:ct.node.commit.id.slice(0,7)})})}),l.jsx("div",{className:"absolute left-0 h-[176px] w-full overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50 bg-card shadow-lg",style:{top:0,borderTopLeftRadius:0,borderTopRightRadius:`${q}px`,borderBottomRightRadius:`${q}px`,borderBottomLeftRadius:`${q}px`},children:l.jsx("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:x,children:l.jsx("div",{className:"min-h-0 flex-1",children:l.jsx("div",{className:"text-sm font-medium leading-tight tracking-tight text-foreground",children:ct.node.commit.message})})})})]})}):null,l.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[Ut.map(me=>{const{fromX:rt,fromY:Ee,toX:_t,toY:Je}=me,tt=yy(rt,Ee,_t,Je,D,me.fromFace,me.toFace);return l.jsx("path",{d:tt,fill:"none",stroke:Yh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},me.id)}),dn.map(me=>{const{fromX:rt,fromY:Ee,toX:_t,toY:Je}=me,tt=yy(rt,Ee,_t,Je,D,me.fromFace,me.toFace);return l.jsx("path",{d:tt,fill:"none",stroke:Yh,strokeWidth:ge,strokeLinecap:"round",strokeLinejoin:"round"},me.id)})]})]})})})}function mw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:k,onCreateBranchFromNode:C,onMergeRefsIntoBranch:j,selectedPushTargets:N,selectedPushLabel:B,canPushCurrentBranch:A,pushCurrentBranchLabel:I,pushableRemoteBranchCount:V,deletableSelectionCount:X,canCreateRootBranch:U,selectedCommitTargetOption:G,mergeInProgress:re,setMergeTargetCommitSha:oe,worktrees:Ce,currentRepoPath:Le,worktreeMenuOpen:Q,setWorktreeMenuOpen:de,onSwitchToWorktree:O,onRemoveWorktree:ee,removeWorktreeInProgress:Y,setCommitDialogOpen:q,setDeleteConfirmOpen:ge,setNewBranchDialogOpen:D}){const ae=t.length>0;return l.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("button",{type:"button",onClick:()=>q(!0),disabled:!g||i||ae||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),l.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||ae||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),l.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||ae||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),l.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!A||ae||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":I}),l.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||V<2||ae||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),l.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(N.map(se=>({branchName:se.branchName,targetSha:se.targetSha})))),disabled:!S||N.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:N.length>0?B:"Select commits to push",children:N.length>0?B:"Push selected"}),l.jsx("button",{type:"button",onClick:()=>ge(!0),disabled:!k||X===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),l.jsx("button",{type:"button",onClick:()=>D(!0),disabled:!C&&!U||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&G.options.length>0&&G.targetBranch&&j?l.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[l.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),G.options.map(se=>{const ce=se.targetBranch===G.targetBranch;return l.jsx("button",{type:"button",onClick:()=>oe(se.targetSha),className:Xs("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",ce?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:se.targetBranch},`merge-${se.targetBranch}`)}),l.jsx("button",{type:"button",onClick:()=>void j(G.sources,G.targetBranch),disabled:G.sources.length===0||re,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:re?"Merging...":"Confirm"})]}):null,Ce.length>0&&(O||ee)?l.jsxs("div",{className:"pointer-events-auto relative",children:[l.jsxs("button",{type:"button",onClick:()=>de(se=>!se),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[Ce.length," ",Ce.length===1?"Worktree":"Worktrees"]}),Q?l.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:Ce.map(se=>{var ce;return l.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:se.path,children:Em(se,Le)?dw(se.path):"This window"}),l.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(ce=se.branchName)!=null?ce:"detached"," • ",se.headSha.slice(0,7)]})]}),Em(se,Le)?l.jsxs("div",{className:"flex items-center gap-1",children:[O?l.jsx("button",{type:"button",onClick:()=>{de(!1),O(se.path)},disabled:Y||se.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,ee?l.jsx("button",{type:"button",onClick:()=>void ee(se.path,se.isPrunable),disabled:Y,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:Y?"...":"Remove"}):null]}):null]},se.path)})}):null]}):null]})}function pw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:w}){return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:l.jsx("button",{type:"button",onClick:n,className:Xs("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?l.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),l.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),l.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),l.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:l.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function _w({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:k,onNewBranchCreateModeChange:C,onNewBranchDialogClose:j,onNewBranchConfirm:N,selectedCommitCanCreateBranch:B,createBranchFromNodeInProgress:A}){return l.jsxs(l.Fragment,{children:[t?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),l.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),l.jsx("textarea",{value:n,onChange:I=>i(I.target.value),onKeyDown:I=>{(I.metaKey||I.ctrlKey)&&I.key==="Enter"&&(I.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),l.jsx("div",{className:"mt-3 space-y-1.5",children:h.map(I=>l.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:I},I))}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?l.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[l.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),l.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[l.jsx("button",{type:"button",onClick:()=>C("from-selected-node"),className:Xs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),l.jsx("button",{type:"button",onClick:()=>C("new-root"),className:Xs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):l.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),l.jsx("input",{value:w,onChange:I=>k(I.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:j,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),l.jsx("button",{type:"button",onClick:N,disabled:!w.trim()||A||S==="from-selected-node"&&!B,className:Xs("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:A?"Creating...":"Create"})]})]})}):null]})}function gw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(ic),c=y.useRef({panX:0,panY:0,zoom:ic}),u=y.useRef(null),d=y.useRef(ic),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(ic),[b,w]=y.useState(0),S=y.useRef(null),k=y.useRef(0),C=y.useCallback(()=>{const G=t.current;if(!G)return null;const re=G.getBoundingClientRect(),oe=getComputedStyle(G),Ce=Number.parseFloat(oe.borderLeftWidth)||0,Le=Number.parseFloat(oe.borderTopWidth)||0,Q=Number.parseFloat(oe.paddingLeft)||Cd,de=Number.parseFloat(oe.paddingTop)||Cd;return{x:re.left+Ce+Q,y:re.top+Le+de}},[t]),j=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(G=>G+1)}),k.current=performance.now()},[]),N=y.useCallback((G,re,oe)=>{const Ce=c.current;c.current={panX:G,panY:re,zoom:oe};const Le=n.current;if(Le&&(Le.style.transform=`translate3d(${G}px, ${re}px, 0) scale(${oe/Zi})`),Math.abs(d.current-oe)>Xh&&(d.current=oe,x(oe)),Math.abs(oe-Ce.zoom)>Xh){j();return}const O=performance.now()-k.current;if(O>=xy){j();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,j()},xy-O)},[j,n]),B=y.useRef(null),A=y.useCallback(()=>{u.current!=null||!B.current||(u.current=window.requestAnimationFrame(B.current))},[]),I=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),V=y.useCallback((G,re,oe)=>{i.current={x:G,y:re},a.current=oe,I(),A()},[I,A]);B.current=()=>{u.current=null;const G=c.current,re=i.current.x,oe=i.current.y,Ce=a.current,Le=Math.abs(re-G.panX)<=vy?re:G.panX+(re-G.panX)*by,Q=Math.abs(oe-G.panY)<=vy?oe:G.panY+(oe-G.panY)*by,de=Math.abs(Ce-G.zoom)<=Xh?Ce:G.zoom+(Ce-G.zoom)*tw;N(Le,Q,de),Le!==re||Q!==oe||de!==Ce?B.current&&(u.current=window.requestAnimationFrame(B.current)):j()};const X=y.useCallback((G,re,oe)=>{const Ce=ow(oe),Le=c.current,Q=C();if(!Q){V(i.current.x,i.current.y,Ce);return}const de=G-Q.x,O=re-Q.y,ee=Le.zoom/Zi,Y=Ce/Zi,q=(de-Le.panX)/ee,ge=(O-Le.panY)/ee;V(de-q*Y,O-ge*Y,Ce)},[C,V]),U=y.useCallback(G=>{if(G.preventDefault(),G.ctrlKey||G.metaKey){const re=Math.exp(-G.deltaY*Jv);X(G.clientX,G.clientY,a.current*re);return}V(i.current.x-G.deltaX,i.current.y-G.deltaY,a.current)},[V,X]);return y.useLayoutEffect(()=>(N(0,0,ic),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[N]),y.useLayoutEffect(()=>{const G=n.current;if(!G)return;const re=c.current;G.style.transform=`translate3d(${re.panX}px, ${re.panY}px, 0) scale(${re.zoom/Zi})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:C,flushCameraReactTick:j,syncCamera:V,handleWheel:U}}function yw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function xw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[k,C]=y.useState(null),j=y.useCallback(B=>{const A=t.current,I=i();if(!A||!I)return[];const V=A.getBoundingClientRect(),X=n.current.zoom/Zi;if(X<=0)return[];const U=[],G=B.left,re=B.left+B.width,oe=B.top,Ce=B.top+B.height;for(const Le of a){if(!c(Le))continue;const Q=I.x+n.current.panX+Le.x*X-V.left,de=I.y+n.current.panY+Le.y*X-V.top,O=Q+ts*X,ee=de+(Za+Ms)*X;!(O<G||Q>re||ee<oe||de>Ce)&&U.push(Le.commit.id)}return U},[i,a,n,t,c]),N=y.useCallback(B=>{if(B.button!==0)return;const A=B.target;if(A!=null&&A.closest("[data-commit-card]")||A!=null&&A.closest("button, a, input, textarea, select"))return;const I=t.current;if(!I)return;B.preventDefault();const V=I.getBoundingClientRect(),X=B.clientX-V.left,U=B.clientY-V.top;d.current={startX:X,startY:U,currentX:X,currentY:U,additive:B.metaKey||B.ctrlKey},h.current=!1,p.current=B.metaKey||B.ctrlKey?w:[],_(!0),b({left:X,top:U,width:0,height:0})},[t,w]);return y.useEffect(()=>{const B=I=>{var oe;const V=d.current;if(!V)return;const X=t.current;if(!X)return;const U=X.getBoundingClientRect();V.currentX=I.clientX-U.left,V.currentY=I.clientY-U.top,!h.current&&(Math.abs(V.currentX-V.startX)>2||Math.abs(V.currentY-V.startY)>2)&&(h.current=!0);const G=yw(V);b(G);const re=j(G);S(V.additive?Array.from(new Set([...p.current,...re])):Array.from(new Set(re))),V.additive||C((oe=re[re.length-1])!=null?oe:null)},A=()=>{if(d.current){const I=h.current;d.current=null,h.current=!1,_(!1),b(null),I||(S([]),C(null));return}u()};return window.addEventListener("mousemove",B),window.addEventListener("mouseup",A),()=>{window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",A)}},[j,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:k,setMergeTargetCommitSha:C,startMarqueeDrag:N}}function ky({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:k,mergeInProgress:C=!1,onPushAllBranches:j,onPushCurrentBranch:N,onPushCommitTargets:B,pushInProgress:A=!1,onDeleteSelection:I,deleteInProgress:V=!1,worktrees:X=[],currentRepoPath:U,onRemoveWorktree:G,removeWorktreeInProgress:re=!1,onSwitchToWorktree:oe,onStashLocalChanges:Ce,stashInProgress:Le=!1,stashDisabled:Q=!1,onCommitLocalChanges:de,commitInProgress:O=!1,commitDisabled:ee=!1,onStageAllChanges:Y,stageInProgress:q=!1,onCreateBranchFromNode:ge,onCreateRootBranch:D,createBranchFromNodeInProgress:ae=!1,orientation:se="horizontal",branchCommitPreviews:ce={},branchParentByName:De={},branchUniqueAheadCounts:We={},gridSearchQuery:Re="",gridSearchJumpToken:mt=0,gridFocusSha:at=null,checkedOutRef:Pe=null,onGridSearchResultCountChange:ct,onGridSearchFocusChange:dt,onInteractionChange:bt,manuallyOpenedClumps:gt,manuallyClosedClumps:Xt,setManuallyOpenedClumps:Ut,setManuallyClosedClumps:dn,layoutModel:_e}){var ta,Io,Dr,va,wa,na,Nr,Sa,Do,Ca,sa,nr;const me=y.useRef(null),rt=y.useRef(null),Ee=y.useRef(null),[_t,Je]=y.useState(!1),[tt,Qe]=y.useState(!1),[ht,qt]=y.useState(""),[ut,$]=y.useState(!1),[J,K]=y.useState(!1),[we,Ge]=y.useState(""),[Ve,Ne]=y.useState("from-selected-node"),[kt,nt]=y.useState(()=>new Set),[At,ft]=y.useState(()=>new Set),[Ye,Ot]=y.useState({}),[Vt,Jt]=y.useState(null),qe=y.useRef(!1),Dt=y.useRef(null),Mt=y.useRef(null),Bt=gt!=null?gt:kt,Nt=Xt!=null?Xt:At,et=Ut!=null?Ut:nt,Zt=dn!=null?dn:ft,[Tn,os]=y.useState(!1),[Kn,fo]=y.useState(null),[ds,Cs]=y.useState(null),{isCameraMoving:wn,renderedZoom:Nn,cameraRenderTick:fn,renderedCameraRef:pn,interactionIdleTimeoutRef:ot,getTransformLayerOriginScreen:en,flushCameraReactTick:qs,syncCamera:To,handleWheel:zn}=gw({mapPadHostRef:rt,transformLayerRef:Ee}),Ns=y.useMemo(()=>up(t,d,ce,De),[t,d,ce,De]),go=y.useMemo(()=>Sd({lanes:Ns,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ce,branchParentByName:De,branchUniqueAheadCounts:We,manuallyOpenedClumps:Bt,manuallyClosedClumps:Nt,isDebugOpen:Tn,gridSearchQuery:Re,gridFocusSha:at,checkedOutRef:Pe!=null?Pe:null,orientation:se,nodePositionOverrides:Ye}),[Ns,t,n,i,a,d,ce,De,We,Bt,Nt,Tn,Re,at,(ta=Pe==null?void 0:Pe.headSha)!=null?ta:null,(Io=Pe==null?void 0:Pe.branchName)!=null?Io:null,se,Ye]),yo=Object.keys(Ye).length>0?go:_e!=null?_e:go,Gs=y.useMemo(()=>Sd({lanes:Ns,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ce,branchParentByName:De,branchUniqueAheadCounts:We,manuallyOpenedClumps:Bt,manuallyClosedClumps:Nt,isDebugOpen:Tn,gridSearchQuery:Re,gridFocusSha:at,checkedOutRef:Pe!=null?Pe:null,orientation:se,nodePositionOverrides:Ye}),[Ns,t,n,i,a,d,ce,De,We,Bt,Nt,Tn,Re,at,(Dr=Pe==null?void 0:Pe.headSha)!=null?Dr:null,(va=Pe==null?void 0:Pe.branchName)!=null?va:null,se,Ye]),{allCommits:Hs,clusterKeyByCommitId:Pn,leadByClusterKey:ti,clusterCounts:ho,matchingNodes:Ts,matchingNodeIds:fs,normalizedSearchQuery:Es,focusedNode:As,defaultCollapsedClumps:xo,renderNodes:Vn,visibleNodesBySha:Ao,contentWidth:Ds,contentHeight:Rs,connectors:Sn,mergeConnectors:Fo,connectorDecisions:_s,nodeWarnings:ni,commitIdsWithRenderedAncestry:Ei,connectorParentShas:Lo,branchStartShas:fi,branchOffNodeShas:Bs,crossBranchOutgoingShas:oo,branchBaseCommitByName:En,pointFormatter:bo}=yo,gs=!!Es,xn=Nn/Zi,hi=y.useMemo(()=>({transform:`scale(${1/xn})`,transformOrigin:"top left",width:`${100*xn}%`,height:`${100*xn}%`}),[xn]),Ks=-(20/xn),mi=y.useMemo(()=>{const je=new Map;for(const Fe of Vn)je.set(Fe.commit.visualId,Fe);return je},[Vn]),Kt=y.useMemo(()=>lw(Vn,Ks),[Vn,Ks]),si=je=>{var It;const Fe=je.commit.id,xt=je.commit.visualId;if(gs&&fs.has(Fe)||(As==null?void 0:As.commit.id)===Fe||Kn===null)return!0;if(!Kn.has(xt))return!1;const Ue=Pn.get(xt);return Ue&&((It=ho.get(Ue))!=null?It:1)>1&&(Bt.has(Ue)||!xo.has(Ue)&&!Nt.has(Ue)),!0},Us=1.5/xn,Ai=nw/xn,Di=y.useMemo(()=>({transform:`scale(${1/xn})`,transformOrigin:"center"}),[xn]),Xo="border-slate-400/70",mo="border-blue-500",Oo=y.useMemo(()=>new Map(t.map(je=>[je.name,je])),[t]);y.useMemo(()=>new Set(t.filter(je=>je.commitsAhead===0&&!je.name.startsWith("*")).map(je=>je.name)),[t]);const io=y.useMemo(()=>{var Fe,xt;const je=new Map;for(const Ue of Vn){const It=(Fe=je.get(Ue.commit.id))!=null?Fe:new Set;It.add(Ue.commit.branchName),je.set(Ue.commit.id,It)}for(const Ue of i){const It=(xt=je.get(Ue.fullSha))!=null?xt:new Set;Ue.branch&&It.add(Ue.branch),je.set(Ue.fullSha,It)}return je},[Vn,i,d]),An=y.useMemo(()=>new Map(Object.entries(c).map(([je,Fe])=>[je,new Set(Fe)])),[c]),vo=y.useCallback(()=>{ot.current,qs()},[qs,ot]),{isMarqueeSelecting:zo,marqueeRect:hs,selectedCommitShas:po,setSelectedCommitShas:an,mergeTargetCommitSha:ks,setMergeTargetCommitSha:Ls,startMarqueeDrag:Os}=xw({scrollContainerRef:me,renderedCameraRef:pn,getTransformLayerOriginScreen:en,renderNodes:Vn,shouldRenderNode:si,onPointerReleaseNoMarquee:vo}),is=y.useMemo(()=>new Set(Vn.map(je=>je.commit.id)),[Vn]),Hn=y.useMemo(()=>po.filter(je=>is.has(je)),[po,is]),ao=y.useCallback((je,Fe)=>{var It;if(!Fe)return!1;if(((It=ce[je])!=null?It:[]).some(Pt=>di(Pt.fullSha,Fe)||di(Pt.sha,Fe)))return!0;const Ue=Oo.get(je);return!!(Ue!=null&&Ue.headSha&&di(Ue.headSha,Fe))},[ce,Oo]),as=(wa=Pe==null?void 0:Pe.branchName)!=null?wa:null,zs=(na=Pe==null?void 0:Pe.headSha)!=null?na:null,$o=as==null,wo=y.useMemo(()=>{if(!at)return null;const je=Vn.filter(Fe=>Fe.commit.id===at);return je.length===0?null:je.length===1||!As?je[0]:je.reduce((Fe,xt)=>{const Ue=(Fe.x-As.x)**2+(Fe.y-As.y)**2;return(xt.x-As.x)**2+(xt.y-As.y)**2<Ue?xt:Fe})},[at,Vn,As]),Yn=y.useCallback((je,Fe,xt)=>{for(const Ue of X){if(!qh(Ue,U))continue;if(Ue.branchName){if(Ue.branchName===je&&di(Ue.headSha,Fe))return Ue;continue}if(!di(Ue.headSha,Fe)&&!di(Ue.headSha,xt))continue;if(Ue.parentSha&&ao(je,Ue.parentSha)||ao(je,Ue.headSha))return Ue;const It=Oo.get(je);if(It&&di(It.headSha,Ue.headSha)||je===d&&i.some(Pt=>di(Pt.fullSha,Ue.headSha)))return Ue}return null},[X,U,ao,Oo,d,i]),z=y.useCallback(je=>{for(const Fe of X)if(qh(Fe,U)&&Fe.branchName===je)return Fe;return null},[X,U]),te=y.useCallback((je,Fe)=>{for(const xt of X)if(qh(xt,U)&&(di(xt.headSha,je)||di(xt.headSha,Fe)))return xt;return null},[X,U]),ie=y.useCallback(je=>{var Fe;return Array.from((Fe=io.get(je))!=null?Fe:[])},[io]),ye=y.useMemo(()=>{var It,Pt,cn,rn;const je=new Map;for(const Fn of Hn){const ms=ie(Fn);if(ms.length===0)continue;const ro=(It=ms.find(E=>E!==d))!=null?It:ms[0],pi=Hn.filter(E=>E!==Fn).filter(E=>!new Set(ie(E)).has(ro));je.set(ro,{targetSha:Fn,targetBranch:ro,sourceRefs:pi})}const Fe=Array.from(je.values()),xt=ks?Fe.find(Fn=>{var ms;return Fn.targetSha===ks||Fn.targetBranch===((ms=ie(ks)[0])!=null?ms:"")}):null,Ue=(Pt=xt!=null?xt:Fe[Fe.length-1])!=null?Pt:null;return{options:Fe,selected:Ue,targetBranch:(cn=Ue==null?void 0:Ue.targetBranch)!=null?cn:null,sources:(rn=Ue==null?void 0:Ue.sourceRefs)!=null?rn:[]}},[Hn,ie,d,ks]),Ze=y.useMemo(()=>{const je=[...as===d?[{name:d,headSha:zs!=null?zs:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(Fe=>!Fe.name.startsWith("*")&&Fe.unpushedCommits>0&&Fe.remoteSyncStatus!=="on-github").map(Fe=>[Fe.name,Fe]);return new Map(je)},[t,as,zs,d,a.length]),it=y.useMemo(()=>{const je=Ue=>{var Pt;const It=ie(Ue).filter(cn=>Ze.has(cn));return It.length===0?null:It.length===1?It[0]:as&&It.includes(as)?as:(Pt=It.find(cn=>cn!==d))!=null?Pt:It[0]},Fe=Ue=>{var It;return Ue===d?a.map(Pt=>{var cn,rn;return{fullSha:Pt.fullSha,sha:Pt.sha,parentSha:(cn=Pt.parentSha)!=null?cn:null,message:Pt.message,author:Pt.author,date:Pt.date,kind:(rn=Pt.kind)!=null?rn:"commit"}}):(It=ce[Ue])!=null?It:[]},xt=new Map;for(const Ue of Hn){const It=je(Ue);if(!It)continue;const Pt=Ze.get(It);if(!Pt)continue;const cn=Fe(It).slice(0,Pt.unpushedCommits),rn=cn.findIndex(ms=>ms.fullSha===Ue);if(rn===-1)continue;const Fn=xt.get(It);(!Fn||rn<Fn.targetIndex)&&xt.set(It,{branchName:It,targetSha:Ue,targetIndex:rn,commitCount:cn.length-rn})}return Array.from(xt.values())},[Hn,ie,Ze,as,d,a,ce]),st=y.useMemo(()=>Array.from(new Set(Hn.map(je=>/^STASH:(\d+)$/.exec(je)).filter(je=>!!je).map(je=>parseInt(je[1],10)))).sort((je,Fe)=>je-Fe),[Hn]),zt=Hn.includes("WORKING_TREE"),Rn=(zt?1:0)+st.length,M=[...zt?["Uncommitted changes"]:[],...st.map(je=>`Stash ${je+1}`)],W=Ze.size,ue=!$o&&!!as&&Ze.has(as),fe=as?`Push ${as}`:"Push current branch",ke=it.length===1?it[0].commitCount>1?`Push ${it[0].commitCount} commits on ${it[0].branchName}`:`Push ${it[0].targetSha.slice(0,7)} on ${it[0].branchName}`:`Push ${it.length} selected ranges`;y.useEffect(()=>{bt==null||bt(wn||zo)},[wn,zo,bt]),y.useEffect(()=>{ct==null||ct(Es?Ts.length:null)},[Ts.length,Es,ct]);const Oe=y.useMemo(()=>{var Fn,ms,ro,pi,E,L;if(!Es)return null;const je=Es,Fe=t.map(H=>H.name),xt=Fe.find(H=>H.toLowerCase()===je),Ue=xt!=null?xt:Fe.find(H=>H.toLowerCase().startsWith(je)),Pt=Ue!=null?Ue:Fe.find(H=>H.toLowerCase().includes(je));if(!Pt)return null;const cn=(Fn=t.find(H=>H.name===Pt))!=null?Fn:null;if(cn!=null&&cn.headSha)return cn.headSha;const rn=(ms=ce[Pt])!=null?ms:[];return rn.length>0?(pi=(ro=rn[0])==null?void 0:ro.fullSha)!=null?pi:null:Pt===d&&(L=(E=i[0])==null?void 0:E.fullSha)!=null?L:null},[Es,t,ce,d,i]);y.useEffect(()=>{var Fe,xt;if(!Es){dt==null||dt(null);return}if(mt<=0)return;if(Oe){dt==null||dt(Oe);return}const je=(xt=(Fe=Ts[0])==null?void 0:Fe.commit.id)!=null?xt:null;dt==null||dt(je)},[Ts,Es,dt,Oe,mt]),y.useLayoutEffect(()=>{if(!at)return;const je=me.current,Fe=wo;if(!je||!Fe)return;const xt=en();if(!xt)return;const Ue=je.getBoundingClientRect(),It=pn.current.zoom,Pt=It/Zi,cn=Fe.x+ts/2,rn=Fe.y+Za+Ms/2,Fn=Ue.left+Ue.width/2,ms=Ue.top+Ue.height/2;To(Fn-xt.x-cn*Pt,ms-xt.y-rn*Pt,It)},[at,mt,wo,en,To,pn]);const vt=(Do=(Sa=ds==null?void 0:ds.width)!=null?Sa:(Nr=me.current)==null?void 0:Nr.clientWidth)!=null?Do:0,Lt=(nr=(sa=ds==null?void 0:ds.height)!=null?sa:(Ca=me.current)==null?void 0:Ca.clientHeight)!=null?nr:0,yt=vt>0&&Lt>0?wy(vt,Lt,pn.current,{innerPaddingPx:Cd}):null,$e=yt!=null?Sy(yt,pn.current.zoom):null,Yt=je=>{if(!$e)return!0;const{fromX:Fe,fromY:xt,toX:Ue,toY:It}=je;return rw(Fe,xt,Ue,It,$e,je.fromFace,je.toFace)};y.useLayoutEffect(()=>{var cn;const je=me.current;if(!je||je.clientWidth<=0||je.clientHeight<=0)return;const Fe=je.clientWidth,xt=je.clientHeight;Cs(rn=>(rn==null?void 0:rn.width)===Fe&&(rn==null?void 0:rn.height)===xt?rn:{width:Fe,height:xt});const Ue=wy(Fe,xt,pn.current,{innerPaddingPx:Cd});if(!Ue){fo(rn=>rn===null?rn:null);return}const It=Sy(Ue,pn.current.zoom),Pt=cw(Kt,It,mi,Ks);for(const rn of Vn){const Fn=Pn.get(rn.commit.visualId);if(!Fn||((cn=ho.get(Fn))!=null?cn:1)<=1)continue;(Bt.has(Fn)||!xo.has(Fn)&&!Nt.has(Fn))&&Pt.add(rn.commit.visualId)}fo(rn=>iw(rn,Pt)?rn:Pt)},[Nn,mt,at,wn,fn,Bt,Nt,xo,Pn,ho,Vn,ds,Kt,mi,Ks]),y.useLayoutEffect(()=>{const je=me.current;if(!je)return;const Fe=()=>{const Ue=je.clientWidth,It=je.clientHeight;Ue<=0||It<=0||Cs(Pt=>(Pt==null?void 0:Pt.width)===Ue&&(Pt==null?void 0:Pt.height)===It?Pt:{width:Ue,height:It})};Fe();const xt=new ResizeObserver(Fe);return xt.observe(je),()=>xt.disconnect()},[Hs.length]);const hn=Vn.filter(je=>si(je)).length,kn=Fo.filter(je=>Yt(je)).length,Bn=Sn.filter(je=>Yt(je)).length,mn=y.useCallback((je,Fe)=>{if(qe.current){je.preventDefault(),je.stopPropagation();return}je.stopPropagation();const xt=Fe.commit.id;if(je.shiftKey?(an(cn=>cn.includes(xt)?cn.filter(rn=>rn!==xt):[...cn,xt]),Ls(xt)):(an(cn=>cn.includes(xt)?[]:[xt]),Ls(cn=>cn===xt?null:xt)),!(je.metaKey||je.ctrlKey||je.detail>=2)||xt==="WORKING_TREE")return;const It=xt.length>=40?xt.slice(0,7):xt;let Pt=null;if(Fe.commit.branchName?(Pt=Yn(Fe.commit.branchName,xt,It),Pt||(Pt=z(Fe.commit.branchName))):Pt=te(xt,It),Pt&&oe){oe(Pt.path);return}h==null||h({commitSha:xt})},[te,Yn,z,h,oe]),rs=y.useCallback((je,Fe)=>{var rn,Fn,ms,ro,pi,E,L;if(je.button!==0)return;const xt=je.target;if(xt!=null&&xt.closest("button, a, input, textarea, select"))return;je.stopPropagation(),je.preventDefault(),qe.current=!1,je.currentTarget.setPointerCapture(je.pointerId);const Ue=(rn=Ye[Fe.commit.visualId])!=null?rn:Ye[Fe.commit.id];Dt.current={nodeId:Fe.commit.visualId,startX:je.clientX,startY:je.clientY,baseX:(Fn=Ue==null?void 0:Ue.x)!=null?Fn:Fe.x,baseY:(ms=Ue==null?void 0:Ue.y)!=null?ms:Fe.y,moved:!1,pendingX:(ro=Ue==null?void 0:Ue.x)!=null?ro:Fe.x,pendingY:(pi=Ue==null?void 0:Ue.y)!=null?pi:Fe.y},Jt({nodeId:Fe.commit.visualId,x:(E=Ue==null?void 0:Ue.x)!=null?E:Fe.x,y:(L=Ue==null?void 0:Ue.y)!=null?L:Fe.y,node:Fe});const It=()=>{Mt.current=null;const H=Dt.current;H&&Jt(P=>P&&{...P,x:H.pendingX,y:H.pendingY})},Pt=H=>{const P=Dt.current;if(!P)return;const ne=pn.current.zoom/Zi,be=ne>0?1/ne:1,Xe=(H.clientX-P.startX)*be,Ke=(H.clientY-P.startY)*be;(Math.abs(Xe)>2||Math.abs(Ke)>2)&&(P.moved=!0),P.moved&&(qe.current=!0),P.pendingX=P.baseX+Xe,P.pendingY=P.baseY+Ke,Mt.current==null&&(Mt.current=window.requestAnimationFrame(It))},cn=()=>{window.removeEventListener("pointermove",Pt),window.removeEventListener("pointerup",cn),window.removeEventListener("pointercancel",cn),Mt.current!=null&&(window.cancelAnimationFrame(Mt.current),Mt.current=null,It());try{je.currentTarget.releasePointerCapture(je.pointerId)}catch{}const H=Dt.current;Dt.current=null,H&&(Ot(P=>({...P,[H.nodeId]:{x:H.pendingX,y:H.pendingY}})),Jt(null),window.setTimeout(()=>{qe.current=!1},0))};window.addEventListener("pointermove",Pt),window.addEventListener("pointerup",cn),window.addEventListener("pointercancel",cn)},[Ye]),Qs=y.useCallback(async()=>{if(!de)return;await de(ht)&&(Qe(!1),qt(""))},[de,ht]),jn=y.useCallback(async()=>{I&&(await I({branchNames:[],discardUncommittedChanges:zt,stashIndices:st}),$(!1),an([]),Ls(null))},[I,zt,st]),Wn=y.useCallback(async()=>{const je=we.trim();if(je){if(Ve==="new-root"){if(!D)return;await D(je)}else{if(!ge||Hn.length!==1)return;const Fe=Hn[0];if(!(Fe==="WORKING_TREE"||Fe.startsWith("STASH:")))return;await ge(Fe,je)}K(!1),Ge(""),Ne("from-selected-node"),an([]),Ls(null)}},[Ve,we,ge,D,Hn]),Vs=Hn.length===1&&(Hn[0]==="WORKING_TREE"||Hn[0].startsWith("STASH:")),Ni=!!D;return y.useEffect(()=>{if(J){if(!Vs&&Ni){Ne("new-root");return}Vs&&Ne("from-selected-node")}},[Ni,J,Vs]),l.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[l.jsx(pw,{isOpen:Tn,onToggle:()=>os(je=>!je),onClose:()=>os(!1),visibleBounds:$e,renderedNodeCount:hn,totalNodeCount:Vn.length,renderedMergeConnectorCount:kn,totalMergeConnectorCount:Fo.length,renderedConnectorCount:Bn,totalConnectorCount:Sn.length,mapGridCullViewportInsetScreenPx:ew,debugRows:Gs.debugRows,branchDebugRows:Gs.branchDebugRows,connectorDecisions:_s}),Hs.length===0?l.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:l.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:l.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):l.jsx(hw,{scrollContainerRef:me,mapPadHostRef:rt,transformLayerRef:Ee,isMarqueeSelecting:zo,contentWidth:Ds,contentHeight:Rs,isCameraMoving:wn,onWheel:zn,onMouseDown:Os,onNodePointerDown:rs,labelTopPx:Ks,inverseZoomStyle:hi,displayZoom:xn,iconScaleStyle:Di,selectedVisibleCommitShas:Hn,normalizedSearchQuery:Es,matchingNodeIds:fs,focusedNode:wo,renderNodes:Vn,shouldRenderNode:si,manuallyOpenedClumps:Bt,manuallyClosedClumps:Nt,defaultCollapsedClumps:xo,leadByClusterKey:ti,clusterKeyByCommitId:Pn,clusterCounts:ho,commitIdsWithRenderedAncestry:Ei,nodeWarnings:ni,connectorParentShas:Lo,branchStartShas:fi,branchOffNodeShas:Bs,crossBranchOutgoingShas:oo,branchBaseCommitByName:En,branchStartAccentClass:mo,connectorParentAccentClass:Xo,commitCornerRadiusPx:Ai,lineStrokeWidth:Us,pointFormatter:bo,connectors:Sn,mergeConnectors:Fo,cullConnectorPath:Yt,flushCameraReactTick:qs,setManuallyOpenedClumps:et,setManuallyClosedClumps:Zt,onCommitCardClick:mn,unpushedCommitShasSetByBranch:An,checkedOutHeadSha:zs,dragOverlay:Vt}),hs&&zo?l.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:hs.left,top:hs.top,width:hs.width,height:hs.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,l.jsx(mw,{selectedVisibleCommitShas:Hn,commitInProgress:O,commitDisabled:ee,stageInProgress:q,stashInProgress:Le,stashDisabled:Q,pushInProgress:A,deleteInProgress:V,createBranchFromNodeInProgress:ae,onCommitLocalChanges:de,onStageAllChanges:Y?()=>void Y():void 0,onStashLocalChanges:Ce,onPushCurrentBranch:N,onPushAllBranches:j,onPushCommitTargets:B,onDeleteSelection:I,onCreateBranchFromNode:ge,onMergeRefsIntoBranch:k,selectedPushTargets:it,selectedPushLabel:ke,canPushCurrentBranch:ue,pushCurrentBranchLabel:fe,pushableRemoteBranchCount:W,deletableSelectionCount:Rn,canCreateRootBranch:Ni,selectedCommitTargetOption:ye,mergeInProgress:C,mergeTargetCommitSha:ks,setMergeTargetCommitSha:Ls,worktrees:X,currentRepoPath:U,worktreeMenuOpen:_t,setWorktreeMenuOpen:Je,onSwitchToWorktree:oe,onRemoveWorktree:G,removeWorktreeInProgress:re,setCommitDialogOpen:Qe,setDeleteConfirmOpen:$,setNewBranchDialogOpen:K}),l.jsx(_w,{commitDialogOpen:tt,commitMessageDraft:ht,onCommitMessageDraftChange:qt,onCommitDialogClose:()=>Qe(!1),onCommitConfirm:()=>void Qs(),commitInProgress:O,deleteConfirmOpen:ut,deleteSelectionItems:M,onDeleteConfirmClose:()=>$(!1),onDeleteConfirm:()=>void jn(),deleteInProgress:V,deletableSelectionCount:Rn,newBranchDialogOpen:J,newBranchName:we,newBranchCreateMode:Ve,onNewBranchNameChange:Ge,onNewBranchCreateModeChange:Ne,onNewBranchDialogClose:()=>K(!1),onNewBranchConfirm:()=>void Wn(),selectedCommitCanCreateBranch:Vs,createBranchFromNodeInProgress:ae})]})}function bw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchParentByName:x={},branchUniqueAheadCounts:b={},gridSearchQuery:w="",gridSearchJumpToken:S=0,gridFocusSha:k=null,onGridSearchResultCountChange:C,onGridSearchFocusChange:j,view:N="time",isLoading:B=!1,scrollRequest:A,focusedErrorBranch:I,checkedOutRef:V=null,mapTopInsetPx:X=0,onMergeRefsIntoBranch:U,mergeInProgress:G=!1,onPushAllBranches:re,onPushCurrentBranch:oe,onPushCommitTargets:Ce,pushInProgress:Le=!1,onDeleteSelection:Q,deleteInProgress:de=!1,worktrees:O=[],currentRepoPath:ee,onRemoveWorktree:Y,removeWorktreeInProgress:q=!1,onSwitchToWorktree:ge,onStashLocalChanges:D,stashInProgress:ae=!1,stashDisabled:se=!1,onCommitLocalChanges:ce,commitInProgress:De=!1,commitDisabled:We=!1,onStageAllChanges:Re,stageInProgress:mt=!1,onCreateBranchFromNode:at,onCreateRootBranch:Pe,createBranchFromNodeInProgress:ct=!1,onMoveNodeBackToBranch:dt,orientation:bt="horizontal",onInteractionChange:gt,manuallyOpenedClumps:Xt,manuallyClosedClumps:Ut,setManuallyOpenedClumps:dn,setManuallyClosedClumps:_e,layoutModel:me}){const rt=new Set(u.map(Qe=>Qe.branchName)),Ee=14*864e5,_t=Date.now();function Je(Qe){return rt.has(Qe.name)||_t-new Date(Qe.lastCommitDate).getTime()<=Ee}const tt=t.filter(Qe=>Qe.status==="stale"&&Je(Qe)).sort((Qe,ht)=>new Date(ht.lastCommitDate).getTime()-new Date(Qe.lastCommitDate).getTime());return l.jsx("div",{className:"h-full flex flex-col",children:N==="time"?l.jsx("div",{className:"flex-1 min-h-0",children:l.jsx(ky,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridFocusSha:k,onGridSearchResultCountChange:C,onGridSearchFocusChange:j,staleBranches:tt,isLoading:B,scrollRequest:A,focusedErrorBranch:I,checkedOutRef:V,mapTopInsetPx:X,onMergeRefsIntoBranch:U,mergeInProgress:G,onPushAllBranches:re,onPushCurrentBranch:oe,onPushCommitTargets:Ce,pushInProgress:Le,onDeleteSelection:Q,deleteInProgress:de,worktrees:O,currentRepoPath:ee,onRemoveWorktree:Y,removeWorktreeInProgress:q,onSwitchToWorktree:ge,onStashLocalChanges:D,stashInProgress:ae,stashDisabled:se,onCommitLocalChanges:ce,commitInProgress:De,commitDisabled:We,onStageAllChanges:Re,stageInProgress:mt,onCreateBranchFromNode:at,onCreateRootBranch:Pe,createBranchFromNodeInProgress:ct,onMoveNodeBackToBranch:dt,orientation:bt,onInteractionChange:gt,manuallyOpenedClumps:Xt,manuallyClosedClumps:Ut,setManuallyOpenedClumps:dn,setManuallyClosedClumps:_e,layoutModel:me})}):N==="grid"?l.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:l.jsx(ky,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchParentByName:x,branchUniqueAheadCounts:b,gridSearchQuery:w,gridSearchJumpToken:S,gridFocusSha:k,checkedOutRef:V,onGridSearchResultCountChange:C,onGridSearchFocusChange:j,onInteractionChange:gt,manuallyOpenedClumps:Xt,manuallyClosedClumps:Ut,setManuallyOpenedClumps:dn,setManuallyClosedClumps:_e,layoutModel:me,orientation:bt})}):null})}const wr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function vw(t,n,i,a){if(!t)return null;const c=d=>wr(d,t);if(n.some(d=>c(d.fullSha)||c(d.sha)))return a;for(const[d,h]of Object.entries(i))if(h.some(g=>c(g.fullSha)||c(g.sha)))return d;return null}function ww(t,n,i,a,c,u){var oe,Ce,Le,Q,de,O;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(Ce=(oe=i[0])==null?void 0:oe.fullSha)!=null?Ce:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(ee=>({name:ee.name,headSha:ee.headSha,isDefault:!1}))],x=d?_.filter(ee=>wr(ee.headSha,d)):[],b=vw(d,i,a,u),w=b?_.find(ee=>ee.name===b):void 0,S=(Q=(Le=x.find(ee=>ee.isDefault))!=null?Le:x[0])!=null?Q:w,k=!!(S&&d&&wr(S.headSha,d)),C=S&&!S.isDefault?n.find(ee=>ee.name===S.name):void 0,j=(()=>{var Y;if(!d)return null;const ee=i.find(q=>wr(q.fullSha,d)||wr(q.sha,d));if(ee!=null&&ee.date)return ee.date;if(C){const q=((Y=a[C.name])!=null?Y:[]).find(ge=>wr(ge.fullSha,d)||wr(ge.sha,d));if(q!=null&&q.date)return q.date}return null})(),N=j?new Date(j).getTime():Number.NaN,B=Date.now(),A=Number.isFinite(N)?Math.max(B,N+1+t.index):B+t.index,I=new Date(A).toISOString(),V=t.message.trim(),X={fullSha:h,sha:p,parentSha:d,message:V||p,author:"You",date:I,kind:"stash"},U={fullSha:h,sha:p,parentSha:d,childShas:[],branch:(de=C==null?void 0:C.name)!=null?de:u,message:V||p,author:"You",date:I,kind:"stash"};if(k&&(S!=null&&S.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,U]};if(k&&C)return{branches:n.map(Y=>Y.name===C.name?{...Y,commitsAhead:Y.commitsAhead+1,unpushedCommits:Y.unpushedCommits+1,lastCommitDate:I,headSha:h}:Y),directCommits:i,branchCommitPreviews:{...a,[C.name]:[X,...a[C.name]||[]]},branchUniqueAheadCounts:{...c,[C.name]:Math.max(0,(O=Object.prototype.hasOwnProperty.call(c,C.name)?c[C.name]:C.commitsAhead)!=null?O:0)+1}};const G=`*Stash:${t.index}`;return{branches:[{name:G,commitsAhead:1,commitsBehind:0,lastCommitDate:I,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(S==null?void 0:S.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[G]:[X]},branchUniqueAheadCounts:{...c,[G]:1}}}function Ix(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=ww(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}function Sw({branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:u,branchParentByName:d={},branchUniqueAheadCounts:h,checkedOutRef:p,stashes:g,manuallyOpenedClumps:_=new Set,manuallyClosedClumps:x=new Set,gridSearchQuery:b="",gridFocusSha:w=null,orientation:S="horizontal"}){var X,U,G,re;const k=Ix(g,t,i,u,h,c);let C=k.branches,j=k.directCommits,N=k.branchCommitPreviews,B=k.branchUniqueAheadCounts;if(p!=null&&p.hasUncommittedChanges){const oe=p.headSha||p.parentSha||null,Ce=(U=(X=j[0])==null?void 0:X.fullSha)!=null?U:null,Le=(Re,mt)=>!Re||!mt?!1:Re===mt||Re.startsWith(mt)||mt.startsWith(Re),Q=[{name:c,headSha:Ce!=null?Ce:"",isDefault:!0},...C.map(Re=>({name:Re.name,headSha:Re.headSha,isDefault:!1}))],de=p.branchName?Q.find(Re=>Re.name===p.branchName):void 0,O=oe?Q.filter(Re=>Le(Re.headSha,oe)):[],ee=(G=de!=null?de:O.find(Re=>Re.isDefault))!=null?G:O[0],Y=!!(ee&&oe&&Le(ee.headSha,oe)),q=ee&&!ee.isDefault?C.find(Re=>Re.name===ee.name):void 0,ge=(()=>{var mt;if(!oe)return null;const Re=j.find(at=>Le(at.fullSha,oe)||Le(at.sha,oe));if(Re!=null&&Re.date)return Re.date;if(q){const at=((mt=N[q.name])!=null?mt:[]).find(Pe=>Le(Pe.fullSha,oe)||Le(Pe.sha,oe));if(at!=null&&at.date)return at.date}return null})(),D=ge?new Date(ge).getTime():Number.NaN,ae=Date.now(),se=Number.isFinite(D)?Math.max(ae,D+1):ae,ce=new Date(se).toISOString(),De={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:oe,message:"Local uncommitted changes",author:"You",date:ce,kind:"uncommitted"},We={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:oe,childShas:[],branch:c,message:"Local uncommitted changes",author:"You",date:ce,kind:"uncommitted"};if(Y&&(ee!=null&&ee.isDefault))j=[...j,We];else if(Y&&q)C=C.map(Re=>Re.name===q.name?{...Re,commitsAhead:Re.commitsAhead+1,unpushedCommits:Re.unpushedCommits+1,lastCommitDate:ce,headSha:"WORKING_TREE"}:Re),N={...N,[q.name]:[De,...N[q.name]||[]]},B={...B,[q.name]:Math.max(0,(re=Object.prototype.hasOwnProperty.call(B,q.name)?B[q.name]:q.commitsAhead)!=null?re:0)+1};else{const Re={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:ce,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:oe!=null?oe:void 0,parentBranch:(ee==null?void 0:ee.name)||p.branchName||c};C=[Re,...C],N={...N,[Re.name]:[De]},B={...B,[Re.name]:1}}}const A={...d};A[c]=null;const I=up(C,c,N,A),V=Sd({lanes:I,branches:C,mergeNodes:n,directCommits:j,unpushedDirectCommits:a,defaultBranch:c,branchCommitPreviews:N,branchParentByName:A,branchUniqueAheadCounts:B,manuallyOpenedClumps:_,manuallyClosedClumps:x,isDebugOpen:!1,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:p,orientation:S});return{enrichedBranches:C,enrichedBranchCommitPreviews:N,enrichedBranchUniqueAheadCounts:B,enrichedDirectCommits:j,sharedGridLayoutModel:V}}function jy(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function My(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ty(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Am({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:N}){var D,ae;if(_.has(t)||!a.get(t))return null;const A=(D=u.get(t))!=null?D:[],I=A.length>0,V=y.useMemo(()=>{var se;return[...(se=c[t])!=null?se:[]]},[c,t]),X=x&&V.length>0,U=x,G=I||X,re=h.has(t),oe=U?V:[],Ce=re&&oe.length>0,Le=g===t,Q=new Set(_);Q.add(t);const de="top-[-0.2rem] h-4.5 w-[10px]",O="rounded-bl-[7px]",ee="left-[0.65rem]",Y=new Map,q=[];for(const se of A){const ce=d.get(se);if(ce){const De=oe.findIndex(We=>di(We.fullSha,ce)||di(We.sha,ce));if(De>=0){const We=(ae=Y.get(De))!=null?ae:[];We.push(se),Y.set(De,We);continue}}q.push(se)}const ge=y.useMemo(()=>{if(!x||oe.length===0)return[];const se=[];let ce=[],De=null;const We=()=>{if(ce.length===0)return;const Re=ce[ce.length-1],mt=`sidebar-single-${t}-${Re.fullSha}`;se.push({key:De!=null?De:mt,commits:ce,count:ce.length,lead:Re}),ce=[],De=null};return oe.forEach(Re=>{var at;const mt=(at=S.get(`${t}:${Re.fullSha}`))!=null?at:null;if(ce.length===0){ce=[Re],De=mt;return}if(mt===De){ce.push(Re);return}We(),ce=[Re],De=mt}),We(),se},[t,x,oe,S]);return l.jsxs("li",{className:Xs("relative",n>0?"pl-4":"pl-0",n===0&&!i?re?"mb-5":"mb-1":""),children:[n>0?l.jsx("span",{"aria-hidden":"true",className:Xs("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border",O,ee,de)}):null,!i&&n>0?l.jsx("span",{"aria-hidden":"true",className:Xs("absolute top-0 border-l-[1.5px] border-border","bottom-[-0.5rem]",ee)}):null,l.jsx("div",{className:"flex items-center gap-1",children:l.jsxs("button",{type:"button",onClick:()=>{G&&p(t),N==null||N(t)},className:Xs("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",Le?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[G?l.jsx("span",{className:Xs("inline-block text-[10px] text-muted-foreground transition-transform",re?"rotate-90":""),children:"▶"}):null,l.jsx("span",{className:"min-w-0 break-words",children:l.jsx("span",{className:Xs(Le?"font-medium text-foreground":"font-normal"),children:t})})]})}),Ce?l.jsx("ul",{className:"relative space-y-1 pl-4",children:ge.map(se=>{const ce=se.count>1&&!k(se.key);return(ce?[se.lead]:se.commits).map(We=>{var at;const Re=oe.findIndex(Pe=>Pe.fullSha===We.fullSha),mt=b(We.fullSha,w!=null?w:t);return l.jsxs("li",{children:[l.jsxs("div",{className:"flex items-start gap-1",children:[l.jsxs("button",{type:"button",onClick:()=>j==null?void 0:j(We.fullSha),className:"min-w-0 flex-1 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:We.message,children:[l.jsx("span",{className:"block truncate",children:We.message}),mt.length>0?l.jsx("span",{className:"mt-0 block space-y-0.5",children:mt.map(Pe=>l.jsxs("span",{className:"block truncate",children:[l.jsx("span",{children:"Merged to "}),l.jsx("span",{className:"font-medium text-muted-foreground",children:Pe})]},`${We.fullSha}:${Pe}`))}):null]}),se.count>1&&We.fullSha===se.lead.fullSha?l.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${se.lead.fullSha}`,onClick:()=>C(se.key,`${t}:${se.lead.fullSha}`),className:Xs("shrink-0 rounded-md px-2 py-1 text-left text-xs leading-4 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",ce?"":"min-w-[2ch] text-center"),children:ce?`+${Math.max(1,se.count-1)}`:"−"}):null]}),(at=Y.get(Re))!=null&&at.length?l.jsx("ul",{className:"relative mb-1.75 space-y-0",children:Y.get(Re).map((Pe,ct,dt)=>l.jsx(Am,{branchName:Pe,depth:n+1,isLast:ct===dt.length-1&&q.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Pe,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:N},Pe))}):null]},`${t}:${We.fullSha}`)})})}):null,I&&re&&q.length>0?l.jsx("ul",{className:"relative mb-1.75 space-y-1.75",children:q.map((se,ce)=>l.jsx(Am,{branchName:se,depth:n+1,isLast:ce===q.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:Q,showCommits:x,getMergeTargetLabels:b,sourceBranchName:se,clusterKeyByCommitId:S,isGridClusterOpen:k,onToggleGridCluster:C,onSelectCommit:j,onSelectBranch:N},se))}):null]})}function Cw({projects:t,activeProjectPath:n,onSelectProject:i,onAddProject:a,projectLoading:c=!1,projectError:u=null,branches:d,defaultBranch:h,checkedOutRef:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,setManuallyOpenedClumps:x,setManuallyClosedClumps:b,gridLayoutModel:w,onSelectCommit:S,onSelectBranch:k,className:C}){var at;const j=y.useRef(null),N=y.useRef(null),[B,A]=y.useState(!1),[I,V]=y.useState(()=>new Set),[X,U]=y.useState(()=>new Set),[G,re]=y.useState(()=>new Set),oe=g!=null?g:X,Ce=_!=null?_:G,Le=x!=null?x:U,Q=b!=null?b:re,[de,O]=y.useState(null),[ee,Y]=y.useState(null),q=y.useMemo(()=>d.some(ct=>ct.name===h)?d:[{name:h,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...d],[d,h]),ge=y.useMemo(()=>jy(q,h),[q,h]),D=y.useMemo(()=>My(q,h,ge),[q,h,ge]),[ae,se]=y.useState(()=>Ty(D,ge,p,h));y.useEffect(()=>{se(Pe=>{const ct=Ty(D,ge,p,h),dt=new Set(Pe);for(const bt of ct)dt.add(bt);return dt})},[D,ge,p,h]);const ce=(at=w==null?void 0:w.defaultCollapsedClumps)!=null?at:new Set,De=Pe=>oe.has(Pe)||!ce.has(Pe)&&!Ce.has(Pe),We=(Pe,ct)=>{const dt=j.current,bt=N.current;if(dt&&bt){const gt=`[data-clump-toggle-id="${ct}"]`,Xt=dt.querySelector(gt);if(Xt){const Ut=Xt.getBoundingClientRect().top-bt.getBoundingClientRect().top;Y({id:ct,topWithinScrollBody:Ut})}else Y(null)}else Y(null);O(ct),Le(gt=>{const Xt=new Set(gt),Ut=De(Pe);return Q(dn=>{const _e=new Set(dn);return Ut?(Xt.delete(Pe),_e.add(Pe)):(_e.delete(Pe),Xt.add(Pe)),_e}),Xt})};y.useLayoutEffect(()=>{if(!de)return;const Pe=j.current,ct=N.current;if(!Pe||!ct)return;const dt=`[data-clump-toggle-id="${de}"]`,bt=Pe.querySelector(dt);if(bt){if((ee==null?void 0:ee.id)===de){const Xt=bt.getBoundingClientRect().top-ct.getBoundingClientRect().top-ee.topWithinScrollBody;Number.isFinite(Xt)&&Xt!==0&&(ct.scrollTop+=Xt)}bt.focus({preventScroll:!0}),O(null),Y(null)}},[oe,Ce,de,ee]);const Re=Pe=>{se(ct=>{const dt=new Set(ct);return dt.has(Pe)?dt.delete(Pe):dt.add(Pe),dt})};y.useEffect(()=>{V(Pe=>{const ct=new Set(Pe);for(const dt of t)ct.add(dt.path);return n&&ct.add(n),ct})},[n,t]);const mt=y.useMemo(()=>{var ct,dt,bt,gt,Xt,Ut,dn,_e,me,rt;const Pe=new Map;for(const Ee of t){const _t=Ee.path===n,Je=Sw({branches:Ee.branches,mergeNodes:Ee.mergeNodes,directCommits:Ee.directCommits,unpushedDirectCommits:Ee.unpushedDirectCommits,defaultBranch:Ee.defaultBranch,branchCommitPreviews:Ee.branchCommitPreviews,branchUniqueAheadCounts:Ee.branchUniqueAheadCounts,checkedOutRef:Ee.checkedOutRef,stashes:Ee.stashes,manuallyOpenedClumps:_t?oe:new Set,manuallyClosedClumps:_t?Ce:new Set}),tt=Je.enrichedBranches.some(nt=>nt.name===Ee.defaultBranch)?Je.enrichedBranches:[{name:Ee.defaultBranch,commitsAhead:0,commitsBehind:0,lastCommitDate:new Date(0).toISOString(),lastCommitAuthor:"Unknown",status:"unknown",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0},...Je.enrichedBranches],Qe=new Map(Je.sharedGridLayoutModel.nodes.map(nt=>[nt.commit.visualId,nt.row])),ht={};for(const nt of Je.sharedGridLayoutModel.allCommits){const At=(ct=ht[nt.branchName])!=null?ct:[];At.push({fullSha:nt.id,sha:nt.id.slice(0,7),parentSha:(dt=nt.parentSha)!=null?dt:null,message:nt.message,author:nt.author,date:nt.date,kind:(bt=nt.kind)!=null?bt:"commit"}),ht[nt.branchName]=At}for(const nt of Object.keys(ht))ht[nt]=ht[nt].sort((At,ft)=>{var qe,Dt;const Ye=new Date(At.date).getTime(),Ot=new Date(ft.date).getTime();if(Ye!==Ot)return Ye-Ot;const Vt=(qe=Qe.get(`${nt}:${At.fullSha}`))!=null?qe:Number.MAX_SAFE_INTEGER,Jt=(Dt=Qe.get(`${nt}:${ft.fullSha}`))!=null?Dt:Number.MAX_SAFE_INTEGER;return Vt!==Jt?Vt-Jt:At.fullSha.localeCompare(ft.fullSha)});const qt=(gt=Je.sharedGridLayoutModel.mergeTargetBranchesBySourceBranchAndCommitSha)!=null?gt:new Map,ut=(nt,At)=>{const ft=qt.get(At);if(!ft)return[];for(const[Ye,Ot]of ft.entries())if(di(nt,Ye))return Array.from(Ot).sort();return[]},$=jy(tt,Ee.defaultBranch),J=My(tt,Ee.defaultBranch,$),K=new Map(tt.map(nt=>[nt.name,nt])),we=new Map;for(const nt of tt){const At=(Ut=(Xt=Je.sharedGridLayoutModel.firstBranchCommitByName.get(nt.name))==null?void 0:Xt.parentSha)!=null?Ut:null,ft=At!=null?At:null;we.set(nt.name,ft)}const Ge=(dn=Je.sharedGridLayoutModel.defaultCollapsedClumps)!=null?dn:new Set,Ve=_t?oe:new Set,Ne=_t?Ce:new Set,kt=nt=>Ve.has(nt)||!Ge.has(nt)&&!Ne.has(nt);Pe.set(Ee.path,{rootBranchNames:J,branchByName:K,branchCommitPreviewsFromLayout:ht,childNamesByParent:$,branchAnchorShaByName:we,checkedOutBranchName:(me=(_e=Ee.checkedOutRef)==null?void 0:_e.branchName)!=null?me:null,clusterKeyByCommitId:(rt=Je.sharedGridLayoutModel.clusterKeyByCommitId)!=null?rt:new Map,getMergeTargetLabels:ut,isGridClusterOpen:kt})}return Pe},[n,Ce,oe,t]);return l.jsx("aside",{ref:j,"aria-label":"Dense branch sidebar",className:Xs("pointer-events-auto h-full",C),children:l.jsxs("div",{className:"flex h-full min-h-0 flex-col",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[l.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Projects"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{type:"button",onClick:a,disabled:c,className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",children:"Add repo"}),l.jsx("button",{type:"button",onClick:()=>A(Pe=>!Pe),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:B?"Hide commits":"Show commits"})]})]}),u&&l.jsx("div",{className:"px-5 pb-3",children:l.jsx("p",{className:"rounded-xl border border-red-50 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-900/20 dark:bg-red-900/20 dark:text-red-400",children:u})}),l.jsx("div",{ref:N,className:"mb-3 min-h-0 flex-1 space-y-2 overflow-y-auto px-5",children:t.map(Pe=>{var Ut,dn;const ct=Pe.path===n,dt=I.has(Pe.path)||ct,bt=(Ut=Pe.treeLoaded)!=null?Ut:Pe.branches.length>0,gt=mt.get(Pe.path),Xt=ct?ae:new Set(gt?Array.from(gt.branchByName.keys()):[]);return l.jsxs("div",{className:"rounded-xl border border-border/50 bg-card",children:[l.jsxs("button",{type:"button",onClick:()=>{i(Pe.path)},className:Xs("flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors",ct?"bg-primary/10 text-foreground":"hover:bg-accent"),children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"truncate text-sm font-medium",children:Pe.name}),l.jsx("p",{className:"truncate text-xs text-muted-foreground",children:Pe.path})]}),l.jsx("span",{className:"shrink-0 text-xs text-muted-foreground",children:(dn=Pe.branchName)!=null?dn:"branch"})]}),dt&&l.jsx("div",{className:"border-t border-border/50 px-3 py-3",children:bt&&gt?l.jsx("ul",{className:"space-y-1",children:gt.rootBranchNames.map((_e,me)=>l.jsx(Am,{branchName:_e,depth:0,isLast:me===gt.rootBranchNames.length-1,branchByName:gt.branchByName,branchCommitPreviews:gt.branchCommitPreviewsFromLayout,childNamesByParent:gt.childNamesByParent,branchAnchorShaByName:gt.branchAnchorShaByName,expandedBranchNames:Xt,onToggleBranch:Re,checkedOutBranchName:gt.checkedOutBranchName,ancestors:new Set,showCommits:B,getMergeTargetLabels:gt.getMergeTargetLabels,sourceBranchName:_e,clusterKeyByCommitId:gt.clusterKeyByCommitId,isGridClusterOpen:gt.isGridClusterOpen,onToggleGridCluster:We,onSelectCommit:async rt=>{ct||await i(Pe.path),S==null||S(rt)},onSelectBranch:async rt=>{ct||await i(Pe.path),k==null||k(rt)}},`${Pe.path}:${_e}`))}):l.jsx("p",{className:"px-2 py-1 text-xs text-muted-foreground",children:"Loading branch tree..."})})]},Pe.path)})})]})})}const kw="git-visualizer",Ey="git-visualizer:projects",Ay=12,Dy=1400,jw=180;function al(t){return t==="/"?t:t.replace(/\/+$/,"")}function Gh(...t){return t.filter(Boolean).join(" ")}function fd(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Mw(t){return fd(t)===kw}function Tw(){var wo,Yn;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState({}),[p,g]=y.useState(!1),[_,x]=y.useState([]),[b,w]=y.useState([]),[S,k]=y.useState([]),[C,j]=y.useState([]),[N,B]=y.useState({}),[A,I]=y.useState([]),[V,X]=y.useState("main"),[U,G]=y.useState(null),[re,oe]=y.useState([]),[Ce,Le]=y.useState(!1),[Q,de]=y.useState(""),[O,ee]=y.useState(0),[Y,q]=y.useState(()=>new Set),[ge,D]=y.useState(()=>new Set),[ae,se]=y.useState(null),[ce,De]=y.useState(null),[We,Re]=y.useState(!1),[mt,at]=y.useState(!1),[Pe,ct]=y.useState(null),[dt,bt]=y.useState(!1),[gt,Xt]=y.useState(!1),[Ut,dn]=y.useState("active"),[_e,me]=y.useState(null),[rt,Ee]=y.useState(null),[_t,Je]=y.useState(!1),[tt,Qe]=y.useState(null),[ht,qt]=y.useState(!1),[ut,$]=y.useState(null),[J,K]=y.useState(null),[we,Ge]=y.useState(!1),[Ve,Ne]=y.useState(!1),[kt,nt]=y.useState(!1),[At,ft]=y.useState(!1),[Ye,Ot]=y.useState({}),[Vt,Jt]=y.useState({}),[qe,Dt]=y.useState({}),[Mt,Bt]=y.useState({}),[Nt,et]=y.useState({}),[Zt,Tn]=y.useState([]),[os,Kn]=y.useState(!1),[fo,ds]=y.useState(!1),[Cs,wn]=y.useState(!1),[Nn,fn]=y.useState(!1),[pn,ot]=y.useState(!1),[en,qs]=y.useState("horizontal"),To=y.useRef(null),zn=y.useRef(0),Ns=y.useRef(0),go=y.useRef(null),Eo=Mw(t)||!0,yo=y.useRef(!1),Gs=y.useRef(!1),Hs=y.useRef(new Set),Pn=y.useRef([]),ti=y.useRef([]),ho=y.useRef(null),Ts=y.useMemo(()=>c.map(z=>{var te,ie,ye,Ze,it,st,zt,Rn,M,W,ue,fe,ke,Oe,vt,Lt,yt,$e,Yt,hn,kn,Bn,mn,rs,Qs,jn,Wn,Vs;return{...z,...(te=d[z.path])!=null?te:{},branches:(ye=(ie=d[z.path])==null?void 0:ie.branches)!=null?ye:[],mergeNodes:(it=(Ze=d[z.path])==null?void 0:Ze.mergeNodes)!=null?it:[],directCommits:(zt=(st=d[z.path])==null?void 0:st.directCommits)!=null?zt:[],unpushedDirectCommits:(M=(Rn=d[z.path])==null?void 0:Rn.unpushedDirectCommits)!=null?M:[],unpushedCommitShasByBranch:(ue=(W=d[z.path])==null?void 0:W.unpushedCommitShasByBranch)!=null?ue:{},checkedOutRef:(ke=(fe=d[z.path])==null?void 0:fe.checkedOutRef)!=null?ke:null,worktrees:(vt=(Oe=d[z.path])==null?void 0:Oe.worktrees)!=null?vt:[],stashes:(yt=(Lt=d[z.path])==null?void 0:Lt.stashes)!=null?yt:[],branchCommitPreviews:(Yt=($e=d[z.path])==null?void 0:$e.branchCommitPreviews)!=null?Yt:{},laneByBranch:(kn=(hn=d[z.path])==null?void 0:hn.laneByBranch)!=null?kn:{},branchUniqueAheadCounts:(mn=(Bn=d[z.path])==null?void 0:Bn.branchUniqueAheadCounts)!=null?mn:{},defaultBranch:(jn=(Qs=(rs=d[z.path])==null?void 0:rs.defaultBranch)!=null?Qs:z.branchName)!=null?jn:"main",treeLoaded:(Vs=(Wn=d[z.path])==null?void 0:Wn.loaded)!=null?Vs:!1}}),[c,d]);y.useEffect(()=>{try{const z=localStorage.getItem(Ey);if(!z)return;const te=JSON.parse(z);if(!Array.isArray(te))return;const ie=te.filter(ye=>typeof ye=="object"&&ye!==null&&typeof ye.path=="string"&&typeof ye.name=="string"&&typeof ye.lastOpenedAt=="number");u(ie.slice(0,Ay))}catch{u([])}},[]),y.useEffect(()=>{Gs.current||t||c.length!==0&&(Gs.current=!0,oo(c[0].path))},[c,t]);const fs=y.useMemo(()=>b.reduce((z,te)=>(z[te.targetCommitSha]=te.targetBranch,z),{}),[b]);y.useEffect(()=>{t&&h(z=>{var te,ie;return{...z,[t]:{path:t,name:i||fd(t),branches:_,mergeNodes:b,directCommits:S,unpushedDirectCommits:C,mergeTargetBranchByCommitSha:b.reduce((ye,Ze)=>(ye[Ze.targetCommitSha]=Ze.targetBranch,ye),{}),unpushedCommitShasByBranch:N,checkedOutRef:U,worktrees:re,stashes:Zt,branchCommitPreviews:Vt,branchParentByName:qe,laneByBranch:Mt,branchUniqueAheadCounts:Nt,defaultBranch:V,loaded:!0,cacheSchemaVersion:(ie=(te=z[t])==null?void 0:te.cacheSchemaVersion)!=null?ie:1,updatedAtMs:Date.now()}}})},[t,i,_,b,S,C,fs,N,U,re,Zt,Vt,qe,Mt,Nt,V]);async function Es(z,te=!1){var ye;const ie=al(z);if(ie&&!Hs.current.has(ie)&&!(!te&&((ye=d[ie])!=null&&ye.loaded))){Hs.current.add(ie),g(!0);try{const Ze=await Se("get_repo_visual_snapshot",{repoPath:ie,forceRefresh:te});h(it=>({...it,[ie]:Ze}))}finally{Hs.current.delete(ie),Hs.current.size===0&&g(!1)}}}y.useEffect(()=>{c.length!==0&&c.forEach(z=>{Es(z.path),Se("watch_repo",{repoPath:z.path}).catch(console.error)})},[c]),y.useEffect(()=>{let z=!1,te=null;return gc("git-activity",ie=>{if(z)return;const ye=al(ie.payload.repoPath);!ye||ye===t||Es(ye,!0)}).then(ie=>{z?ie():te=ie}).catch(console.error),()=>{z=!0,te&&te()}},[t]);function As(z){u(te=>{const ie=al(z.path);if(!ie)return te;const ye={...z,path:ie},it=(te.some(st=>st.path===ie)?te.map(st=>st.path===ie?ye:st):[...te,ye]).slice(-Ay);try{localStorage.setItem(Ey,JSON.stringify(it))}catch{}return it})}async function xo(z){const te=al(z);if(te){ct(null);try{const[ie,ye]=await Promise.all([Se("get_repo_info",{repoPath:te}),Se("get_default_branch",{repoPath:te}).catch(()=>"main")]);As({path:te,name:ie.name,lastOpenedAt:Date.now(),branchName:ye}),await Es(te,!0)}catch(ie){ct(ie instanceof Error?ie.message:String(ie))}}}function Vn(z){if(z.button!==0)return;const te=z.target;if(te!=null&&te.closest(".window-no-drag"))return;const ie=Mm();Se("start_window_drag").catch(()=>ie.startDragging()).catch(ye=>{console.warn("Failed to start window drag:",ye)})}async function Ao(z,te){const ye=[];let Ze=0;for(;;){const it=await Se("get_merge_nodes",{repoPath:z,branch:te,page:Ze,perPage:100});if(ye.push(...it.nodes),!it.hasMore||it.nodes.length===0)break;Ze+=1}return ye}async function Ds(z,te,ie){const ye=Array.from(new Set([ie,...te.map(st=>st.name)].filter(st=>!!st)));if(ye.length===0)return[];const Ze=await Promise.all(ye.map(st=>Ao(z,st).catch(()=>[]))),it=new Map;for(const st of Ze)for(const zt of st){const Rn=`${zt.targetCommitSha}:${zt.targetBranch}`;it.has(Rn)||it.set(Rn,zt)}return Array.from(it.values())}const Rs=z=>z.map(te=>`${te.name}|${te.headSha}|${te.commitsAhead}|${te.commitsBehind}|${te.unpushedCommits}|${te.remoteSyncStatus}`).join("||"),Sn=z=>z.map(te=>te.fullSha).join("|"),Fo=z=>{var te,ie;return z?`${(te=z.branchName)!=null?te:""}|${z.headSha}|${(ie=z.parentSha)!=null?ie:""}|${z.hasUncommittedChanges?1:0}`:"__none__"};async function _s(z,te){const ie=te!=null?te:V,[ye,Ze,it,st,zt,Rn]=await Promise.all([Se("get_branches",{repoPath:z}),Se("get_all_repo_commits",{repoPath:z}),Se("get_unpushed_direct_commits",{repoPath:z,branch:ie}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:z}).catch(()=>null),Se("list_worktrees",{repoPath:z}).catch(()=>[]),Se("list_stashes",{repoPath:z}).catch(()=>[])]),M=await Ds(z,ye,ie),W=await Promise.all([ie,...ye.map(ue=>ue.name)].map(async ue=>{const fe=await Se("get_branch_unpushed_commit_shas",{repoPath:z,branch:ue}).catch(()=>[]);return[ue,fe]}));x(ye),w(M),k(Ze),j(it),B(Object.fromEntries(W)),G(st),oe(zt),Tn(Rn)}async function ni(z){const[te,ie,ye]=await Promise.all([Se("get_branches",{repoPath:z}).catch(()=>[]),Se("get_all_repo_commits",{repoPath:z}).catch(()=>[]),Se("get_checked_out_ref",{repoPath:z}).catch(()=>null)]);return Rs(te)!==Rs(Pn.current)||Sn(ie)!==Sn(ti.current)||Fo(ye)!==Fo(ho.current)}async function Ei(z){K(null),at(!0);try{const[te,ie]=await Promise.all([Se("get_repo_info",{repoPath:z}),Se("get_default_branch",{repoPath:z})]);a(te.name),X(ie),n(z),await _s(z,ie),En(z),K({kind:"success",message:`Now targeting worktree at ${z}`})}catch(te){const ie=te instanceof Error?te.message:String(te);K({kind:"error",message:ie}),console.error("Failed to switch worktree:",ie)}finally{at(!1)}}async function Lo(z,te){if(!(!t||Ce)){Le(!0),K(null);try{await Se("remove_worktree",{repoPath:t,worktreePath:z,force:te}),await _s(t),K({kind:"success",message:`Removed worktree at ${z}`})}catch(ie){const ye=ie instanceof Error?ie.message:String(ie);K({kind:"error",message:ye}),console.error("Failed to remove worktree:",ye)}finally{Le(!1)}}}function fi(z,te){var ie,ye;a(te.name||fd(z)),X(te.defaultBranch||"main"),x(te.branches),w(te.mergeNodes),k(te.directCommits),j(te.unpushedDirectCommits),B(te.unpushedCommitShasByBranch),G(te.checkedOutRef),oe(te.worktrees),Tn(te.stashes),Jt(te.branchCommitPreviews),Dt((ie=te.branchParentByName)!=null?ie:{}),Bt((ye=te.laneByBranch)!=null?ye:{}),et(te.branchUniqueAheadCounts),n(z)}async function Bs(z,te,ie){const ye=ie==null?void 0:ie.forceRefresh,Ze=ie==null?void 0:ie.applyToActiveState;try{const[it,st]=await Promise.all([Se("get_repo_info",{repoPath:z}),Se("get_default_branch",{repoPath:z})]);if(te!==zn.current)return;const zt=await Se("get_repo_visual_snapshot",{repoPath:z,forceRefresh:ye});if(te!==zn.current)return;h(Rn=>({...Rn,[z]:zt})),Ze&&(t===z||zn.current),En(z)}catch(it){if(te!==zn.current)return;console.error("Background snapshot refresh failed:",it)}}async function oo(z){const te=++zn.current,ie=al(z);if(!ie)return;const ye=d[ie];if(ye!=null&&ye.loaded){ct(null),fi(ie,ye),As({path:ie,name:ye.name||fd(ie),lastOpenedAt:Date.now(),branchName:ye.defaultBranch}),at(!1),Re(!1),Bs(ie,te,{forceRefresh:!1,applyToActiveState:!1});return}if(Re(!0),at(!0),ct(null),await new Promise(Ze=>setTimeout(Ze,15)),te===zn.current)try{const[Ze,it]=await Promise.all([Se("get_repo_info",{repoPath:ie}),Se("get_default_branch",{repoPath:ie})]);if(te!==zn.current)return;a(Ze.name),X(it);const st=await Se("get_repo_visual_snapshot",{repoPath:ie,forceRefresh:!0});if(te!==zn.current)return;h(zt=>({...zt,[ie]:st})),fi(ie,st),As({path:ie,name:Ze.name,lastOpenedAt:Date.now(),branchName:it}),at(!1),Re(!1),En(ie)}catch(Ze){if(te!==zn.current)return;console.error("Failed to load repo:",Ze),ct(Ze instanceof Error?Ze.message:String(Ze)),n(null),Re(!1),at(!1)}}async function En(z){const te=++Ns.current;try{if(te!==Ns.current)return;Je(!1),$(null);const ie=await Se("get_github_info",{repoPath:z}),ye=await Se("get_github_auth_status");if(te!==Ns.current||(Qe(ye),!ye.ghAvailable||!ye.authenticated))return;const Ze=await Se("get_open_prs",{owner:ie.owner,repo:ie.repo});if(te!==Ns.current)return;I(Ze),Je(!0)}catch(ie){if(te!==Ns.current)return;console.log("GitHub data not available:",ie),$(ie instanceof Error?ie.message:String(ie)),Je(!1)}}y.useEffect(()=>{let z=null,te=!1;const ie=(()=>{try{return Mm().label}catch{return null}})(),ye=async it=>{var zt;const st=(zt=it==null?void 0:it.path)==null?void 0:zt.trim();!st||te||t!==st&&await oo(st)};return(async()=>{ie==="main"&&(z=await gc("gitviz://open-repo",async st=>{await ye(st.payload)}));const it=await Se("take_pending_open_repo");await ye(it)})(),()=>{te=!0,z&&z()}},[t]),y.useEffect(()=>{Pn.current=_},[_]),y.useEffect(()=>{ti.current=S},[S]),y.useEffect(()=>{ho.current=U},[U]),y.useEffect(()=>{yo.current=pn},[pn]),y.useEffect(()=>{},[t,V,Eo]),y.useEffect(()=>{if(!t||!V||!Eo)return;Se("watch_repo",{repoPath:t}).catch(console.error);let z=!1,te=!1,ie=!1,ye=null;const Ze=async()=>{if(!z){if(yo.current){te=!0;return}if(ie){te=!0;return}ie=!0;try{if(!await ni(t)||z)return;await _s(t,V)}catch(st){console.warn("Frozen git-activity refresh failed:",st)}finally{ie=!1,te&&!z&&(te=!1,window.setTimeout(()=>{Ze()},0))}}},it=()=>{te=!0,Ze()};return gc("git-activity",st=>{al(st.payload.repoPath)===t&&(Es(t,!0),it())}).then(st=>{z?st():ye=st}).catch(console.error),()=>{z=!0,ye&&ye()}},[t,V,Eo]);async function bo(){if(t){qt(!0),$(null);try{await Se("authenticate_github");const z=await Se("get_github_auth_status");Qe(z),z.authenticated?await En(t):z.message&&$(z.message)}catch(z){$(z instanceof Error?z.message:String(z))}finally{qt(!1)}}}const gs=new Set(A.map(z=>z.branchName)),xn=14*864e5,hi=Date.now(),Ks=_.filter(z=>z.status==="stale"),mi=Ks.filter(z=>gs.has(z.name)||hi-new Date(z.lastCommitDate).getTime()<=xn),Kt=Ks.filter(z=>!gs.has(z.name)&&hi-new Date(z.lastCommitDate).getTime()>xn),si=z=>{var te;return Object.prototype.hasOwnProperty.call(Nt,z.name)?Math.max(0,(te=Nt[z.name])!=null?te:0):Math.max(0,z.commitsAhead)};y.useEffect(()=>{Ot({}),go.current=null,qt(!1),Qe(null),$(null),I([]),K(null)},[t]),y.useEffect(()=>{var Rn,M,W,ue;if(!t||!V){Ot({}),Jt({}),Dt({}),Bt({}),et({}),go.current=null;return}const z=_.map(fe=>{var ke;return`${fe.name}:${fe.headSha}:${(ke=fe.parentBranch)!=null?ke:""}:${fe.commitsAhead}`}).join("|"),te=b.map(fe=>{var ke,Oe;return`${fe.fullSha}:${(Oe=(ke=fe.parentShas)==null?void 0:ke[1])!=null?Oe:""}`}).join("|"),ie=`${t}|${V}|${z}|${te}`;if(go.current===ie)return;go.current=ie;const ye={},Ze={};for(const fe of _){if(fe.name===V)continue;const ke=S.filter(Oe=>Oe.branch===fe.name).map(Oe=>{var vt;return{fullSha:Oe.fullSha,sha:Oe.sha,parentSha:(vt=Oe.parentSha)!=null?vt:null,message:Oe.message,author:Oe.author,date:Oe.date,kind:"commit"}});ye[fe.name]=ke,Ze[fe.name]=ke.length}const it=new Map;for(const fe of S)it.set(fe.fullSha,fe.branch);const st=fe=>{if(!fe)return null;const ke=it.get(fe);if(ke)return ke;for(const[Oe,vt]of it.entries())if(Oe.startsWith(fe)||fe.startsWith(Oe))return vt;return null},zt={[V]:null};for(const fe of _){if(fe.name===V){zt[fe.name]=null;continue}const ke=S.filter(yt=>yt.branch===fe.name),Oe=new Set(ke.map(yt=>yt.fullSha)),vt=(M=(Rn=ke.filter(yt=>{var Yt;const $e=(Yt=yt.parentSha)!=null?Yt:null;return!$e||!Oe.has($e)}).sort((yt,$e)=>{const Yt=new Date(yt.date).getTime()-new Date($e.date).getTime();return Yt!==0?Yt:yt.fullSha.localeCompare($e.fullSha)})[0])==null?void 0:Rn.parentSha)!=null?M:null,Lt=st(vt);zt[fe.name]=(ue=(W=Lt!=null?Lt:qe[fe.name])!=null?W:fe.parentBranch)!=null?ue:null}Ot({}),Jt(ye),Dt(zt),Bt(fe=>{const ke={};for(const Oe of _){const vt=fe[Oe.name];vt!=null&&Number.isFinite(vt)&&(ke[Oe.name]=vt)}return ke}),et(Ze)},[t,V,_,b,S,qe]),y.useEffect(()=>{if(!J){Ge(!1);return}Ge(!0);const z=window.setTimeout(()=>{Ge(!1)},Dy),te=window.setTimeout(()=>{K(null)},Dy+jw);return()=>{window.clearTimeout(z),window.clearTimeout(te)}},[J]),y.useEffect(()=>{if(!t||_.length===0)return;const z=ye=>new Promise(Ze=>setTimeout(Ze,ye));async function te(){const Ze=`${await Se("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${Ze}`),await z(800),await Se("screenshot",{path:`${Ze}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${Ze}`)}const ie=ye=>{(ye.metaKey||ye.ctrlKey)&&ye.shiftKey&&ye.key==="S"&&(ye.preventDefault(),te())};return window.addEventListener("keydown",ie),()=>window.removeEventListener("keydown",ie)},[t,i,_]);function Us(){Xt(!0),setTimeout(()=>{bt(!1),Xt(!1),dn("active"),Ee(null)},100)}async function Ai(z){if(!t)return;K(null);const te=/^STASH:(\d+)$/.exec(z.commitSha);if(te){try{const ie=parseInt(te[1],10),ye=await Se("apply_stash_restore",{repoPath:t,stashIndex:ie});G(ye),await _s(t);const Ze=`Stash ${ie+1}`,it=ye.branchName?` on branch ${ye.branchName}`:" at the stash base (detached HEAD)";K({kind:"success",message:`Restored ${Ze}${it}; stash applied and dropped (uncommitted changes).`})}catch(ie){const ye=ie instanceof Error?ie.message:String(ie);K({kind:"error",message:ye}),console.error("Failed to apply stash:",ye)}return}if(z.branchName){const ie=(Ze,it)=>{const st=Ze.replace(/\\/g,"/").replace(/\/+$/,""),zt=it.replace(/\\/g,"/").replace(/\/+$/,"");return st===zt||st.toLowerCase()===zt.toLowerCase()},ye=re.find(Ze=>Ze.pathExists===!1||Ze.isCurrent||t&&ie(Ze.path,t)?!1:Ze.branchName===z.branchName);if(ye){await Ei(ye.path);return}}try{let ie="";(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await Se("stash_push",{repoPath:t,includeUntracked:!0}),ie="Stashed local changes (including untracked), then ",await _s(t));const Ze=z.branchName?await Se("checkout_branch",{repoPath:t,branchName:z.branchName}):await Se("checkout_ref",{repoPath:t,refName:z.commitSha}),it=await Se("get_checked_out_ref",{repoPath:t}).catch(()=>Ze);G(it),await _s(t);const st=it.branchName?it.branchName:`${it.headSha.slice(0,7)} (detached)`;K({kind:"success",message:`${ie}Checked out ${st}`})}catch(ie){const ye=ie instanceof Error?ie.message:String(ie);K({kind:"error",message:ye}),console.error("Failed to checkout commit:",ye)}}async function Di(){if(!(!t||os)){K(null),Kn(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){K({kind:"error",message:"No local changes to stash."});return}await Se("stash_push",{repoPath:t,includeUntracked:!0}),await _s(t),K({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(z){const te=z instanceof Error?z.message:String(z);K({kind:"error",message:te}),console.error("Failed to stash:",te)}finally{Kn(!1)}}}async function Xo(z){if(!t||fo)return!1;const te=z.trim();if(!te)return K({kind:"error",message:"Enter a commit message."}),!1;K(null),ds(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return K({kind:"error",message:"No local changes to commit."}),!1;const ye=await Se("commit_working_tree",{repoPath:t,message:te});return G(ye),await _s(t),K({kind:"success",message:"Committed local changes."}),!0}catch(ie){const ye=ie instanceof Error?ie.message:String(ie);return K({kind:"error",message:ye}),console.error("Failed to commit:",ye),!1}finally{ds(!1)}}async function mo(){if(!t||Cs)return!1;K(null),wn(!0);try{if(!(await Se("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return K({kind:"error",message:"No local changes to stage."}),!1;const te=await Se("stage_working_tree",{repoPath:t});return G(te),await _s(t),K({kind:"success",message:"Staged all changes."}),!0}catch(z){const te=z instanceof Error?z.message:String(z);return K({kind:"error",message:te}),console.error("Failed to stage:",te),!1}finally{wn(!1)}}async function Oo(z,te){if(!(!t||Nn)){fn(!0),K(null);try{const ie=/^STASH:(\d+)$/.exec(z);let ye;if(ie){const Ze=parseInt(ie[1],10);ye=await Se("move_stash_to_new_branch",{repoPath:t,stashIndex:Ze,branchName:te})}else ye=await Se("create_branch_from_uncommitted",{repoPath:t,branchName:te});G(ye),await _s(t),K({kind:"success",message:`Moved to new branch "${te}"`})}catch(ie){const ye=ie instanceof Error?ie.message:String(ie);K({kind:"error",message:ye}),console.error("Failed to create branch from node:",ye)}finally{fn(!1)}}}async function io(z){if(!(!t||Nn)){fn(!0),K(null);try{const te=await Se("create_root_branch",{repoPath:t,branchName:z});G(te),await _s(t),K({kind:"success",message:`Created new root branch "${z}"`})}catch(te){const ie=te instanceof Error?te.message:String(te);K({kind:"error",message:ie}),console.error("Failed to create root branch:",ie)}finally{fn(!1)}}}async function An(z,te){if(!t)return;const ie=Array.from(new Set(z.filter(ye=>!!ye&&ye!==te)));if(ie.length!==0){K(null),Ne(!0);try{let ye=null;for(const Ze of ie)ye=await Se("merge_ref_into_branch",{repoPath:t,sourceRef:Ze,targetBranch:te});await _s(t),ye&&G(ye),K({kind:"success",message:ie.length===1?`Merged ${ie[0].slice(0,7)} into ${te}`:`Merged ${ie.length} commits into ${te}`})}catch(ye){const Ze=ye instanceof Error?ye.message:String(ye);K({kind:"error",message:Ze}),console.error("Failed to merge refs into branch:",Ze)}finally{Ne(!1)}}}async function vo(){if(!(!t||kt)){K(null),nt(!0);try{const z=await Se("push_all_unpushed_branches",{repoPath:t});await _s(t),K({kind:"success",message:z.length>0?z.length===1?`Pushed ${z[0].branchName}`:`Pushed ${z.length} branches`:"Everything local is already pushed."})}catch(z){const te=z instanceof Error?z.message:String(z);K({kind:"error",message:te}),console.error("Failed to push all branches:",te)}finally{nt(!1)}}}async function zo(){if(!(!t||kt)){K(null),nt(!0);try{const z=await Se("push_current_branch",{repoPath:t});await _s(t),K({kind:"success",message:`Pushed ${z.branchName}`})}catch(z){const te=z instanceof Error?z.message:String(z);K({kind:"error",message:te}),console.error("Failed to push current branch:",te)}finally{nt(!1)}}}async function hs(z){var ie;if(!t||kt)return;const te=Array.from(new Map(z.filter(ye=>ye.branchName&&ye.targetSha).map(ye=>[ye.branchName,ye])).values());if(te.length!==0){K(null),nt(!0);try{for(const ye of te)await Se("push_branch",{repoPath:t,branchName:ye.branchName,targetSha:ye.targetSha});await _s(t),K({kind:"success",message:te.length===1?`Pushed ${te[0].branchName} through ${(ie=te[0].targetSha)==null?void 0:ie.slice(0,7)}`:`Pushed ${te.length} selected commit ranges`})}catch(ye){const Ze=ye instanceof Error?ye.message:String(ye);K({kind:"error",message:Ze}),console.error("Failed to push selected commits:",Ze)}finally{nt(!1)}}}async function po(z){var it;if(!t||At)return;const te=Array.from(new Set(z.branchNames.filter(st=>st&&st!==V))),ie=!!z.discardUncommittedChanges,ye=(it=z.stashIndices)!=null?it:[],Ze=Array.from(new Set(ye)).sort((st,zt)=>zt-st);if(!(te.length===0&&!ie&&Ze.length===0)){K(null),ft(!0);try{for(const Rn of Ze)await Se("stash_drop",{repoPath:t,stashIndex:Rn});const st=te.length>0||ie?await Se("delete_selected_elements",{repoPath:t,branchNames:te,discardUncommittedChanges:ie}):{deletedBranches:[],discardedUncommittedChanges:!1};await _s(t);const zt=[];Ze.length>0&&zt.push(Ze.length===1?`removed stash ${Ze[0]+1}`:`removed ${Ze.length} stashes`),st.discardedUncommittedChanges&&zt.push("discarded local uncommitted changes"),st.deletedBranches.length>0&&zt.push(st.deletedBranches.length===1?`deleted ${st.deletedBranches[0]}`:`deleted ${st.deletedBranches.length} branches`),K({kind:"success",message:zt.length>0?zt.join(" and "):"Nothing to delete."})}catch(st){const zt=st instanceof Error?st.message:String(st);K({kind:"error",message:zt}),console.error("Failed to delete selected elements:",zt)}finally{ft(!1)}}}function an(z){Ee(z),me(te=>{var ie;return{branch:z,seq:((ie=te==null?void 0:te.seq)!=null?ie:0)+1}})}function ks(z){z&&(De(z),ee(te=>te+1))}function Ls(z){z&&(de(z),ee(te=>te+1))}y.useEffect(()=>{var ie;const z=U!=null&&U.hasUncommittedChanges?"WORKING_TREE":(ie=U==null?void 0:U.headSha)!=null?ie:null;if(!z)return;const te=`${t!=null?t:"__no-repo__"}|${en}|${z}`;To.current!==te&&(To.current=te,De(z),ee(ye=>ye+1))},[U==null?void 0:U.hasUncommittedChanges,U==null?void 0:U.headSha,en,t]),y.useEffect(()=>{To.current=null},[t]);const{enrichedBranches:Os,enrichedBranchCommitPreviews:is,enrichedBranchUniqueAheadCounts:Hn,enrichedDirectCommits:ao}=y.useMemo(()=>{var Bn,mn,rs,Qs;const z=Ix(Zt,_,S,Vt,Nt,V);let te=z.branches,ie=z.directCommits,ye=z.branchCommitPreviews,Ze=z.branchUniqueAheadCounts;if(!(U!=null&&U.hasUncommittedChanges))return{enrichedBranches:te,enrichedDirectCommits:ie,enrichedBranchCommitPreviews:ye,enrichedBranchUniqueAheadCounts:Ze};const it=U.headSha||U.parentSha||null,st=(mn=(Bn=ie[0])==null?void 0:Bn.fullSha)!=null?mn:null,zt=(jn,Wn)=>!jn||!Wn?!1:jn===Wn||jn.startsWith(Wn)||Wn.startsWith(jn),Rn=[{name:V,headSha:st!=null?st:"",isDefault:!0},...te.map(jn=>({name:jn.name,headSha:jn.headSha,isDefault:!1}))],M=U.branchName?Rn.find(jn=>jn.name===U.branchName):void 0,W=it?Rn.filter(jn=>zt(jn.headSha,it)):[],ue=(rs=M!=null?M:W.find(jn=>jn.isDefault))!=null?rs:W[0],fe=!!(ue&&it&&zt(ue.headSha,it)),ke=ue&&!ue.isDefault?te.find(jn=>jn.name===ue.name):void 0,Oe=(()=>{var Wn;if(!it)return null;const jn=ie.find(Vs=>zt(Vs.fullSha,it)||zt(Vs.sha,it));if(jn!=null&&jn.date)return jn.date;if(ke){const Vs=((Wn=ye[ke.name])!=null?Wn:[]).find(Ni=>zt(Ni.fullSha,it)||zt(Ni.sha,it));if(Vs!=null&&Vs.date)return Vs.date}return null})(),vt=Oe?new Date(Oe).getTime():Number.NaN,Lt=Date.now(),yt=Number.isFinite(vt)?Math.max(Lt,vt+1):Lt,$e=new Date(yt).toISOString(),Yt={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:it,message:"Local uncommitted changes",author:"You",date:$e,kind:"uncommitted"},hn={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:it,childShas:[],branch:V,message:"Local uncommitted changes",author:"You",date:$e,kind:"uncommitted"};if(fe&&(ue!=null&&ue.isDefault))return{enrichedBranches:te,enrichedBranchCommitPreviews:ye,enrichedBranchUniqueAheadCounts:Ze,enrichedDirectCommits:[...ie,hn]};if(fe&&ke)return{enrichedBranches:te.map(Wn=>Wn.name===ke.name?{...Wn,commitsAhead:Wn.commitsAhead+1,unpushedCommits:Wn.unpushedCommits+1,lastCommitDate:$e,headSha:"WORKING_TREE"}:Wn),enrichedDirectCommits:ie,enrichedBranchCommitPreviews:{...ye,[ke.name]:[Yt,...ye[ke.name]||[]]},enrichedBranchUniqueAheadCounts:{...Ze,[ke.name]:Math.max(0,(Qs=Object.prototype.hasOwnProperty.call(Ze,ke.name)?Ze[ke.name]:ke.commitsAhead)!=null?Qs:0)+1}};const kn={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:$e,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:it!=null?it:void 0,parentBranch:(ue==null?void 0:ue.name)||U.branchName||V};return{enrichedBranches:[kn,...te],enrichedBranchCommitPreviews:{...ye,[kn.name]:[Yt]},enrichedBranchUniqueAheadCounts:{...Ze,[kn.name]:1},enrichedDirectCommits:ie}},[_,Vt,Nt,U,V,S,Zt]),as=y.useMemo(()=>{const z={...qe};return z[V]=null,z},[qe,V,Os]),zs=y.useMemo(()=>{var z;return(z=Fv(Os,V,as,Mt))!=null?z:up(Os,V,is,as)},[Os,V,is,as,Mt]),$o=y.useMemo(()=>Sd({lanes:zs,branches:Os,mergeNodes:b,directCommits:ao,unpushedDirectCommits:C,defaultBranch:V,branchCommitPreviews:is,branchParentByName:as,branchUniqueAheadCounts:Hn,manuallyOpenedClumps:Y,manuallyClosedClumps:ge,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:ce,checkedOutRef:U!=null?U:null,orientation:en}),[zs,Os,b,ao,C,V,is,as,Hn,Y,ge,Q,ce,(wo=U==null?void 0:U.headSha)!=null?wo:null,(Yn=U==null?void 0:U.branchName)!=null?Yn:null,en]);return l.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[l.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Vn}),l.jsx("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:l.jsxs("div",{className:"relative flex h-full min-h-0 flex-1 overflow-hidden",children:[l.jsx(Cw,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",projects:Ts,activeProjectPath:t,onSelectProject:oo,onAddProject:()=>{(async()=>{var z,te;try{const ie=await Iv({directory:!0,multiple:!1,defaultPath:(te=(z=c[0])==null?void 0:z.path)!=null?te:void 0});typeof ie=="string"&&ie&&await xo(ie)}catch(ie){ct(ie instanceof Error?ie.message:String(ie))}})()},projectLoading:We||p,projectError:Pe,branches:Os,defaultBranch:V,checkedOutRef:U,manuallyOpenedClumps:Y,manuallyClosedClumps:ge,setManuallyOpenedClumps:q,setManuallyClosedClumps:D,gridLayoutModel:$o,onSelectCommit:ks,onSelectBranch:Ls}),l.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[l.jsx(bw,{branches:Os,mergeNodes:b,directCommits:ao,unpushedDirectCommits:C,unpushedCommitShasByBranch:N,defaultBranch:V,branchCommitPreviews:is,branchParentByName:as,branchUniqueAheadCounts:Hn,gridSearchQuery:Q,gridSearchJumpToken:O,gridFocusSha:ce,onGridSearchResultCountChange:se,onGridSearchFocusChange:De,checkedOutRef:U,onCommitClick:Ai,onMergeRefsIntoBranch:An,mergeInProgress:Ve,onPushAllBranches:vo,onPushCurrentBranch:zo,onPushCommitTargets:hs,pushInProgress:kt,onDeleteSelection:po,deleteInProgress:At,worktrees:re,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Lo,removeWorktreeInProgress:Ce,onSwitchToWorktree:Ei,onStashLocalChanges:Di,stashInProgress:os,stashDisabled:!1,onCommitLocalChanges:Xo,commitInProgress:fo,commitDisabled:!1,onStageAllChanges:mo,stageInProgress:Cs,onCreateBranchFromNode:Oo,onCreateRootBranch:io,createBranchFromNodeInProgress:Nn,onInteractionChange:ot,manuallyOpenedClumps:Y,manuallyClosedClumps:ge,setManuallyOpenedClumps:q,setManuallyClosedClumps:D,layoutModel:$o,orientation:en}),l.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:l.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[l.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[l.jsx("button",{type:"button",role:"radio","aria-checked":en==="horizontal",tabIndex:0,onClick:()=>qs("horizontal"),onKeyDown:z=>{(z.key==="ArrowRight"||z.key==="ArrowDown")&&(z.preventDefault(),qs("vertical"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",en==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),l.jsx("button",{type:"button",role:"radio","aria-checked":en==="vertical",tabIndex:0,onClick:()=>qs("vertical"),onKeyDown:z=>{(z.key==="ArrowLeft"||z.key==="ArrowUp")&&(z.preventDefault(),qs("horizontal"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",en==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(tt==null?void 0:tt.ghAvailable)&&!tt.authenticated&&l.jsx("button",{onClick:bo,disabled:ht,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:ht?"Connecting GitHub...":"Connect GitHub"}),tt&&!tt.ghAvailable&&l.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),ut&&l.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:ut,children:ut}),l.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[l.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),l.jsx("input",{value:Q,onChange:z=>de(z.target.value),onKeyDown:z=>{z.key==="Enter"&&(z.preventDefault(),ee(te=>te+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),l.jsx("button",{type:"button",onClick:()=>ee(z=>z+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),ae!=null&&l.jsxs("span",{className:"text-xs text-muted-foreground",children:[ae," match",ae===1?"":"es"]}),ce&&l.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",ce.slice(0,7)]}),J&&l.jsx("span",{className:Gh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",we?"opacity-100":"opacity-0",J.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:J.message,children:J.message})]})})]}),dt&&l.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${gt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[l.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),l.jsx("button",{onClick:Us,className:"text-muted-foreground hover:text-foreground transition-colors",children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[l.jsxs("button",{onClick:()=>dn("active"),className:`text-xs font-medium transition-colors ${Ut==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[mi.length," active"]}),l.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),l.jsxs("button",{onClick:()=>dn("inactive"),className:`text-xs font-medium transition-colors ${Ut==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Kt.length," inactive"]})]}),l.jsx("div",{className:"overflow-y-auto max-h-64",children:(Ut==="active"?mi:Kt).map(z=>{const te=(rt==null?void 0:rt.name)===z.name,ie=si(z);return l.jsxs("button",{onClick:()=>an(z),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-sm font-medium truncate ${te?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:z.name}),l.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[ie>0&&`${ie} ahead`,ie>0&&z.commitsBehind>0&&", ",z.commitsBehind>0&&`${z.commitsBehind} behind`]})]}),l.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},z.name)})})]})]})})]})}var Nc=Tx(),Ew=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Aw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Ew}var us=Aw,Dw=`.icon-transitions-module__iconState___uqK9J {
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
}`,Nw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Dw}var ns=Nw,Rw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Bw=({size:t=24,style:n={}})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[l.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[l.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_list_sparkle",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Lw=({size:t=20,...n})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[l.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),l.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Ow=({size:t=24,copied:n=!1,tint:i})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[l.jsxs("g",{className:`${ns.iconState} ${n?ns.hiddenScaled:ns.visibleScaled}`,children:[l.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsxs("g",{className:`${ns.iconState} ${n?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),zw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("g",{className:`${ns.iconStateFast} ${i?ns.visibleScaled:u?ns.sending:ns.hiddenScaled}`,children:l.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsxs("g",{className:`${ns.iconStateFast} ${a?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ns.iconStateFast} ${c?ns.visibleScaled:ns.hiddenScaled}`,children:[l.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},$w=({size:t=24,isOpen:n=!0})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ns.iconFade} ${n?ns.visible:ns.hidden}`,children:[l.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsxs("g",{className:`${ns.iconFade} ${n?ns.hidden:ns.visible}`,children:[l.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),l.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Iw=({size:t=24,isPaused:n=!1})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{className:`${ns.iconFadeFast} ${n?ns.hidden:ns.visible}`,children:[l.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),l.jsx("path",{className:`${ns.iconFadeFast} ${n?ns.visible:ns.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Pw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Hw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Px=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[l.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_2_53",children:l.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Uw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Vw=({size:t=16})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[l.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Yw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Ww=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Fw=({size:t=24})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Xw=({size:t=16})=>l.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),qw=({size:t=24})=>l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Hx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Hx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Dm="feedback-freeze-styles",Qh="__agentation_freeze";function Gw(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var _n=Gw();typeof window<"u"&&!_n.installed&&(_n.origSetTimeout=window.setTimeout.bind(window),_n.origSetInterval=window.setInterval.bind(window),_n.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?_n.origSetTimeout(t,n):_n.origSetTimeout((...a)=>{_n.frozen?_n.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?_n.origSetInterval(t,n):_n.origSetInterval((...a)=>{_n.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>_n.origRAF(n=>{_n.frozen?_n.frozenRAFQueue.push(t):t(n)}),_n.installed=!0);var Wt=_n.origSetTimeout,Kw=_n.origSetInterval,dl=_n.origRAF;function Qw(t){return t?Hx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Zw(){if(typeof document>"u"||_n.frozen)return;_n.frozen=!0,_n.frozenTimeoutQueue=[],_n.frozenRAFQueue=[];let t=document.getElementById(Dm);t||(t=document.createElement("style"),t.id=Dm),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),_n.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Qw(i)||(n.pause(),_n.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ny(){var i;if(typeof document>"u"||!_n.frozen)return;_n.frozen=!1;const t=_n.frozenTimeoutQueue;_n.frozenTimeoutQueue=[];for(const a of t)_n.origSetTimeout(()=>{if(_n.frozen){_n.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=_n.frozenRAFQueue;_n.frozenRAFQueue=[];for(const a of n)_n.origRAF(c=>{if(_n.frozen){_n.frozenRAFQueue.push(a);return}a(c)});for(const a of _n.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}_n.pausedAnimations=[],(i=document.getElementById(Dm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},k){const[C,j]=y.useState(u),[N,B]=y.useState(!1),[A,I]=y.useState("initial"),[V,X]=y.useState(!1),[U,G]=y.useState(!1),re=y.useRef(null),oe=y.useRef(null),Ce=y.useRef(null),Le=y.useRef(null);y.useEffect(()=>{b&&A!=="exit"&&I("exit")},[b,A]),y.useEffect(()=>{Wt(()=>{I("enter")},0);const q=Wt(()=>{I("entered")},200),ge=Wt(()=>{const D=re.current;D&&(Zh(D),D.selectionStart=D.selectionEnd=D.value.length,D.scrollTop=D.scrollHeight)},50);return()=>{clearTimeout(q),clearTimeout(ge),Ce.current&&clearTimeout(Ce.current),Le.current&&clearTimeout(Le.current)}},[]);const Q=y.useCallback(()=>{Le.current&&clearTimeout(Le.current),B(!0),Le.current=Wt(()=>{B(!1),Zh(re.current)},250)},[]);y.useImperativeHandle(k,()=>({shake:Q}),[Q]);const de=y.useCallback(()=>{I("exit"),Ce.current=Wt(()=>{p()},150)},[p]),O=y.useCallback(()=>{C.trim()&&h(C.trim())},[C,h]),ee=y.useCallback(q=>{q.stopPropagation(),!q.nativeEvent.isComposing&&(q.key==="Enter"&&!q.shiftKey&&(q.preventDefault(),O()),q.key==="Escape"&&de())},[O,de]),Y=[us.popup,w?us.light:"",A==="enter"?us.enter:"",A==="entered"?us.entered:"",A==="exit"?us.exit:"",N?us.shake:""].filter(Boolean).join(" ");return l.jsxs("div",{ref:oe,className:Y,"data-annotation-popup":!0,style:_,onClick:q=>q.stopPropagation(),children:[l.jsxs("div",{className:us.header,children:[S&&Object.keys(S).length>0?l.jsxs("button",{className:us.headerToggle,onClick:()=>{const q=U;G(!U),q&&Wt(()=>Zh(re.current),0)},type:"button",children:[l.jsx("svg",{className:`${us.chevron} ${U?us.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("span",{className:us.element,children:n})]}):l.jsx("span",{className:us.element,children:n}),i&&l.jsx("span",{className:us.timestamp,children:i})]}),S&&Object.keys(S).length>0&&l.jsx("div",{className:`${us.stylesWrapper} ${U?us.expanded:""}`,children:l.jsx("div",{className:us.stylesInner,children:l.jsx("div",{className:us.stylesBlock,children:Object.entries(S).map(([q,ge])=>l.jsxs("div",{className:us.styleLine,children:[l.jsx("span",{className:us.styleProperty,children:q.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",l.jsx("span",{className:us.styleValue,children:ge}),";"]},q))})})}),a&&l.jsxs("div",{className:us.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),l.jsx("textarea",{ref:re,className:us.textarea,style:{borderColor:V?x:void 0},placeholder:c,value:C,onChange:q=>j(q.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:ee}),l.jsxs("div",{className:us.actions,children:[g&&l.jsx("div",{className:us.deleteWrapper,children:l.jsx("button",{className:us.deleteButton,onClick:g,type:"button",children:l.jsx(Fw,{size:22})})}),l.jsx("button",{className:us.cancel,onClick:de,children:"Cancel"}),l.jsx("button",{className:us.submit,style:{backgroundColor:x,opacity:C.trim()?1:.4},onClick:O,disabled:!C.trim(),children:d})]})]})}),Jw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const k=g.current.getBoundingClientRect();p({top:k.top+k.height/2,right:window.innerWidth-k.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Wt(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Wt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),l.jsxs(l.Fragment,{children:[l.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&Nc.createPortal(l.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},eS=`.styles-module__tooltip___mcXL2 {
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
}`,tS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=eS}var Ry=tS,kr=({content:t})=>l.jsx(Jw,{className:Ry.tooltip,content:t,children:l.jsx(Lw,{className:Ry.tooltipIcon})}),wt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ux=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...wt.navigation},{type:"header",label:"Header",...wt.header},{type:"hero",label:"Hero",...wt.hero},{type:"section",label:"Section",...wt.section},{type:"sidebar",label:"Sidebar",...wt.sidebar},{type:"footer",label:"Footer",...wt.footer},{type:"modal",label:"Modal",...wt.modal},{type:"banner",label:"Banner",...wt.banner},{type:"drawer",label:"Drawer",...wt.drawer},{type:"popover",label:"Popover",...wt.popover},{type:"divider",label:"Divider",...wt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...wt.card},{type:"text",label:"Text",...wt.text},{type:"image",label:"Image",...wt.image},{type:"video",label:"Video",...wt.video},{type:"table",label:"Table",...wt.table},{type:"grid",label:"Grid",...wt.grid},{type:"list",label:"List",...wt.list},{type:"chart",label:"Chart",...wt.chart},{type:"codeBlock",label:"Code Block",...wt.codeBlock},{type:"map",label:"Map",...wt.map},{type:"timeline",label:"Timeline",...wt.timeline},{type:"calendar",label:"Calendar",...wt.calendar},{type:"accordion",label:"Accordion",...wt.accordion},{type:"carousel",label:"Carousel",...wt.carousel},{type:"logo",label:"Logo",...wt.logo},{type:"faq",label:"FAQ",...wt.faq},{type:"gallery",label:"Gallery",...wt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...wt.button},{type:"input",label:"Input",...wt.input},{type:"search",label:"Search",...wt.search},{type:"form",label:"Form",...wt.form},{type:"tabs",label:"Tabs",...wt.tabs},{type:"dropdown",label:"Dropdown",...wt.dropdown},{type:"toggle",label:"Toggle",...wt.toggle},{type:"stepper",label:"Stepper",...wt.stepper},{type:"rating",label:"Rating",...wt.rating},{type:"fileUpload",label:"File Upload",...wt.fileUpload},{type:"checkbox",label:"Checkbox",...wt.checkbox},{type:"radio",label:"Radio",...wt.radio},{type:"slider",label:"Slider",...wt.slider},{type:"datePicker",label:"Date Picker",...wt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...wt.avatar},{type:"badge",label:"Badge",...wt.badge},{type:"tag",label:"Tag",...wt.tag},{type:"breadcrumb",label:"Breadcrumb",...wt.breadcrumb},{type:"pagination",label:"Pagination",...wt.pagination},{type:"progress",label:"Progress",...wt.progress},{type:"alert",label:"Alert",...wt.alert},{type:"toast",label:"Toast",...wt.toast},{type:"notification",label:"Notification",...wt.notification},{type:"tooltip",label:"Tooltip",...wt.tooltip},{type:"stat",label:"Stat",...wt.stat},{type:"skeleton",label:"Skeleton",...wt.skeleton},{type:"chip",label:"Chip",...wt.chip},{type:"icon",label:"Icon",...wt.icon},{type:"spinner",label:"Spinner",...wt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...wt.pricing},{type:"testimonial",label:"Testimonial",...wt.testimonial},{type:"cta",label:"CTA",...wt.cta},{type:"productCard",label:"Product Card",...wt.productCard},{type:"profile",label:"Profile",...wt.profile},{type:"feature",label:"Feature",...wt.feature},{type:"team",label:"Team",...wt.team},{type:"login",label:"Login",...wt.login},{type:"contact",label:"Contact",...wt.contact}]}],Ui={};for(const t of Ux)for(const n of t.items)Ui[n.type]=n;function Ie({w:t,h:n=3,strong:i}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gn({w:t,h:n,radius:i=3,style:a}){return l.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function Wo({size:t}){return l.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function nS({width:t,height:n}){const i=Math.max(8,n*.2);return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[l.jsx(Gn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[l.jsx(Ie,{w:t*.06}),l.jsx(Ie,{w:t*.07}),l.jsx(Ie,{w:t*.05}),l.jsx(Ie,{w:t*.06})]}),l.jsx(Gn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function sS({width:t,height:n,text:i}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?l.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):l.jsx(Ie,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),l.jsx(Ie,{w:t*.6}),l.jsx(Ie,{w:t*.4}),l.jsx(Gn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function oS({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return l.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[l.jsx(Ie,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Gn,{w:10,h:10,radius:2}),l.jsx(Ie,{w:t*(.4+c*17%30/100)})]},c))]})}function iS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return l.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"70%",h:2}),l.jsx(Ie,{w:"60%",h:2})]},c))})}function aS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"90%"}),l.jsx(Ie,{w:"70%"}),l.jsx(Ie,{w:"80%"})]}),l.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx(Gn,{w:70,h:26,radius:4}),l.jsx(Gn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function rS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:4,strong:!0}),l.jsx(Ie,{w:"95%",h:2}),l.jsx(Ie,{w:"85%",h:2}),l.jsx(Ie,{w:"50%",h:2})]})]})}function lS({width:t,height:n,text:i}){if(i)return l.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[l.jsx(Ie,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>l.jsx(Ie,{w:`${70+u*13%25}%`,h:2},u))]})}function cS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",position:"relative"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function uS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>l.jsx("div",{style:{flex:1,padding:"0 8px"},children:l.jsx(Ie,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function dS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[l.jsx(Wo,{size:8}),l.jsx(Ie,{w:`${55+c*17%35}%`,h:2})]},c))})}function fS({width:t,height:n,text:i}){return l.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?l.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):l.jsx(Ie,{w:Math.max(20,t*.5),h:3,strong:!0})})}function hS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[l.jsx(Ie,{w:Math.min(80,t*.3),h:2}),l.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:l.jsx(Ie,{w:"40%",h:2})})]})}function mS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:60+c*17%30,h:2}),l.jsx(Gn,{w:"100%",h:28,radius:4})]},c)),l.jsx(Gn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function pS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:l.jsx(Ie,{w:60,h:3,strong:c===0})},c))}),l.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[l.jsx(Ie,{w:"80%",h:2}),l.jsx(Ie,{w:"65%",h:2}),l.jsx(Ie,{w:"75%",h:2})]})]})}function _S({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),l.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),l.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function gS({width:t,height:n}){return l.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0})})}function yS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),l.jsx(Ie,{w:t*.35})]})}function xS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx(Ie,{w:t*.7}),l.jsx(Ie,{w:t*.5}),l.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4}),l.jsx(Gn,{w:"33%",h:"100%",radius:4})]})]})}function bS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx(Gn,{w:"100%",h:"100%",radius:4},u))})}function vS({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:l.jsx(Ie,{w:t*.5,h:3,strong:!0})}),l.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>l.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:l.jsx(Ie,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function wS({width:t,height:n}){const i=Math.min(t,n)/2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function SS({width:t,height:n}){const i=Math.min(n/2,20);return l.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[l.jsx(Wo,{size:Math.min(14,n*.4)}),l.jsx(Ie,{w:"50%",h:2})]})}function CS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Wo,{size:Math.min(20,n*.5)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"60%",h:3,strong:!0}),l.jsx(Ie,{w:"80%",h:2})]}),l.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function kS({width:t,height:n}){return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),l.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function jS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return l.jsx(Gn,{w:a,h:`${d}%`,radius:2},u)})})}function MS({width:t,height:n}){const i=Math.min(t,n)*.12;return l.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function TS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Ie,{w:"60%",h:2})}),l.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function ES({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&l.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),l.jsx(Ie,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function AS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>l.jsx(Gn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function DS({width:t}){return l.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:l.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function NS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsx(Ie,{w:`${40+c*17%25}%`,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function RS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Gn,{w:"100%",h:"100%",radius:4}),l.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[l.jsx(Wo,{size:5}),l.jsx(Wo,{size:5}),l.jsx(Wo,{size:5})]})]})}function BS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Ie,{w:t*.3,h:6,strong:!0}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx(Wo,{size:5}),l.jsx(Ie,{w:`${50+a*17%35}%`,h:2})]},a))}),l.jsx(Gn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function LS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[l.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"75%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx(Wo,{size:20}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[l.jsx(Ie,{w:60,h:3,strong:!0}),l.jsx(Ie,{w:40,h:2})]})]})]})}function OS({width:t,height:n}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[l.jsx(Ie,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),l.jsx(Ie,{w:t*.35}),l.jsx(Gn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function zS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"40%",h:3,strong:!0}),l.jsx(Ie,{w:"70%",h:2})]})]})}function $S({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[l.jsx(Ie,{w:t*.4,h:3,strong:!0}),l.jsx(Gn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function IS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Ie,{w:t*.5,h:2}),l.jsx(Ie,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),l.jsx(Ie,{w:t*.3,h:2})]})}function PS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[l.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&l.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function HS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[l.jsx(Ie,{w:Math.max(16,t*.5),h:2,strong:!0}),l.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function US({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>l.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:l.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function VS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[l.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),l.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),l.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),l.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:l.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[l.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),l.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function YS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return l.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[l.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[l.jsx(Wo,{size:8}),c<i-1&&l.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),l.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:`${35+c*13%25}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function WS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),l.jsx(Ie,{w:t*.4,h:2}),l.jsx(Ie,{w:t*.25,h:2})]})}function FS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return l.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[l.jsx(Wo,{size:6}),l.jsx(Wo,{size:6}),l.jsx(Wo,{size:6})]}),Array.from({length:i},(a,c)=>l.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:l.jsx(Ie,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function XS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.3,h:3,strong:!0}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:l.jsx(Ie,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:l.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function qS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[l.jsx(Wo,{size:Math.min(32,n*.55)}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:"50%",h:3,strong:!0}),l.jsx(Ie,{w:"75%",h:2})]}),l.jsx(Ie,{w:30,h:2})]})}function GS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[l.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),l.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"65%",h:4,strong:!0}),l.jsx(Ie,{w:"40%",h:3}),l.jsx("div",{style:{flex:1}}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"30%",h:5,strong:!0}),l.jsx(Gn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function KS({width:t,height:n}){const i=Math.min(48,n*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[l.jsx(Wo,{size:i}),l.jsx(Ie,{w:t*.45,h:4,strong:!0}),l.jsx(Ie,{w:t*.3,h:2}),l.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[l.jsx(Ie,{w:20,h:3,strong:!0}),l.jsx(Ie,{w:28,h:2})]})]})]})}function QS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return l.jsxs("div",{style:{height:"100%",display:"flex"},children:[l.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),l.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[l.jsx(Ie,{w:i*.4,h:4,strong:!0}),l.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>l.jsx("div",{style:{padding:"6px 0"},children:l.jsx(Ie,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function ZS({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[l.jsx(Ie,{w:"70%",h:3,strong:!0}),l.jsx(Ie,{w:"90%",h:2}),l.jsx(Ie,{w:"60%",h:2})]}),l.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function JS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsx(Ie,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function e4({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),l.jsx(Ie,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),l.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function t4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>l.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:l.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[l.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),l.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function n4({width:t,height:n}){const i=Math.min(t,n);return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function s4({width:t,height:n}){const i=Math.min(t,n)/2-1;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),l.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function o4({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return l.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[l.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:l.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),l.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function i4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[l.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[l.jsx(Ie,{w:"40%",h:2}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),l.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),l.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),l.jsx(Ie,{w:t*.25,h:2,strong:!0}),l.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:l.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function a4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[l.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),l.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function r4({width:t,height:n}){return l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:l.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[l.jsx(Ie,{w:"60%",h:2,strong:!0}),l.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function l4({width:t,height:n}){const i=Math.min(t,n);return l.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:l.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function c4({width:t,height:n}){const i=Math.min(t,n)/2-2;return l.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[l.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),l.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function u4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return l.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>l.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[l.jsx(Gn,{w:i,h:i,radius:i*.25}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx(Ie,{w:`${40+u*13%20}%`,h:3,strong:!0}),l.jsx(Ie,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function d4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[l.jsx(Ie,{w:t*.3,h:4,strong:!0}),l.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx(Wo,{size:a}),l.jsx(Ie,{w:t*.12,h:3,strong:!0}),l.jsx(Ie,{w:t*.08,h:2})]},u))})]})}function f4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[l.jsx(Ie,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),l.jsx(Ie,{w:t*.35,h:2}),l.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:Math.min(60,t*.2),h:2}),l.jsx(Gn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),l.jsx(Gn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),l.jsx(Ie,{w:t*.4,h:2})]})}function h4({width:t,height:n}){return l.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[l.jsx(Ie,{w:t*.4,h:4,strong:!0}),l.jsx(Ie,{w:t*.6,h:2}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:40,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[l.jsx(Ie,{w:50,h:2}),l.jsx(Gn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[l.jsx(Ie,{w:60,h:2}),l.jsx(Gn,{w:"100%",h:"100%",radius:4})]}),l.jsx(Gn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var m4={navigation:nS,hero:sS,sidebar:oS,footer:iS,modal:aS,card:rS,text:lS,image:cS,table:uS,list:dS,button:fS,input:hS,form:mS,tabs:pS,avatar:_S,badge:gS,header:yS,section:xS,grid:bS,dropdown:vS,toggle:wS,search:SS,toast:CS,progress:kS,chart:jS,video:MS,tooltip:TS,breadcrumb:ES,pagination:AS,divider:DS,accordion:NS,carousel:RS,pricing:BS,testimonial:LS,cta:OS,alert:zS,banner:$S,stat:IS,stepper:PS,tag:HS,rating:US,map:VS,timeline:YS,fileUpload:WS,codeBlock:FS,calendar:XS,notification:qS,productCard:GS,profile:KS,drawer:QS,popover:ZS,logo:JS,faq:e4,gallery:t4,checkbox:n4,radio:s4,slider:o4,datePicker:i4,skeleton:a4,chip:r4,icon:l4,spinner:c4,feature:u4,team:d4,login:f4,contact:h4};function p4({type:t,width:n,height:i,text:a}){const c=m4[t];return c?l.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:l.jsx(c,{width:n,height:i,text:a})}):l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var _4=`svg[fill=none] {
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
}`,g4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=_4}var Ae=g4,rl=24,Wu=5;function By(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],k=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],C=[];for(const oe of n)i.has(oe.id)||C.push(oe);c&&C.push(...c);for(const oe of C){const Ce=oe.x,Le=oe.x+oe.width,Q=oe.x+oe.width/2,de=oe.y,O=oe.y+oe.height,ee=oe.y+oe.height/2;for(const Y of S)for(const q of[Ce,Le,Q]){const ge=q-Y;Math.abs(ge)<Wu&&Math.abs(ge)<Math.abs(u)&&(u=ge)}for(const Y of k)for(const q of[de,O,ee]){const ge=q-Y;Math.abs(ge)<Wu&&Math.abs(ge)<Math.abs(d)&&(d=ge)}}const j=Math.abs(u)<Wu?u:0,N=Math.abs(d)<Wu?d:0,B=[],A=new Set,I=h+j,V=p+j,X=g+j,U=_+N,G=x+N,re=b+N;for(const oe of C){const Ce=oe.x,Le=oe.x+oe.width,Q=oe.x+oe.width/2,de=oe.y,O=oe.y+oe.height,ee=oe.y+oe.height/2;for(const Y of[Ce,Q,Le])for(const q of[I,X,V])if(Math.abs(q-Y)<.5){const ge=`x:${Math.round(Y)}`;A.has(ge)||(A.add(ge),B.push({axis:"x",pos:Y}))}for(const Y of[de,ee,O])for(const q of[U,re,G])if(Math.abs(q-Y)<.5){const ge=`y:${Math.round(Y)}`;A.has(ge)||(A.add(ge),B.push({axis:"y",pos:Y}))}}return{dx:j,dy:N,guides:B}}function Ly(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function y4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:k}){const[C,j]=y.useState(new Set),[N,B]=y.useState(null),[A,I]=y.useState(null),[V,X]=y.useState(null),[U,G]=y.useState([]),[re,oe]=y.useState(null),[Ce,Le]=y.useState(!1),Q=y.useRef(!1),[de,O]=y.useState(new Set),ee=y.useRef(new Map),Y=y.useRef(null),q=y.useRef(null),ge=y.useRef(t);ge.current=t;const D=y.useRef(_);D.current=_;const ae=y.useRef(b);ae.current=b;const se=y.useRef(w);se.current=w;const ce=y.useRef(x);y.useEffect(()=>{x!==ce.current&&(ce.current=x,j(new Set))},[x]);const De=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==De.current){De.current=S;const _e=new Set(ge.current.map(me=>me.id));_e.size>0&&(O(_e),j(new Set),q.current=null,Wt(()=>{n([]),O(new Set)},180))}},[S,n]),y.useEffect(()=>{const _e=me=>{const rt=me.target;if(!(rt.tagName==="INPUT"||rt.tagName==="TEXTAREA"||rt.isContentEditable)){if((me.key==="Backspace"||me.key==="Delete")&&C.size>0){me.preventDefault();const _t=new Set(C);O(_t),j(new Set),Wt(()=>{n(ge.current.filter(Je=>!_t.has(Je.id))),O(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(me.key)&&C.size>0){me.preventDefault();const _t=me.shiftKey?20:1,Je=me.key==="ArrowLeft"?-_t:me.key==="ArrowRight"?_t:0,tt=me.key==="ArrowUp"?-_t:me.key==="ArrowDown"?_t:0;n(t.map(Qe=>C.has(Qe.id)?{...Qe,x:Math.max(0,Qe.x+Je),y:Math.max(0,Qe.y+tt)}:Qe));return}if(me.key==="Escape"){i?a(null):C.size>0&&j(new Set);return}}};return document.addEventListener("keydown",_e),()=>document.removeEventListener("keydown",_e)},[C,i,t,n,a]);const We=y.useCallback(_e=>{if(_e.button!==0||p||_e.target.closest(`.${Ae.placement}`))return;_e.preventDefault(),_e.stopPropagation();const rt=window.scrollY,Ee=_e.clientX,_t=_e.clientY;if(i){q.current="place",d==null||d(!0);let Je=!1,tt=Ee,Qe=_t;const ht=ut=>{tt=ut.clientX,Qe=ut.clientY;const $=Math.abs(tt-Ee),J=Math.abs(Qe-_t);if(($>5||J>5)&&(Je=!0),Je){const K=Math.min(Ee,tt),we=Math.min(_t,Qe),Ge=Math.abs(tt-Ee),Ve=Math.abs(Qe-_t);B({x:K,y:we,w:Ge,h:Ve}),X({x:ut.clientX+12,y:ut.clientY+12,text:`${Math.round(Ge)} × ${Math.round(Ve)}`})}},qt=ut=>{window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",qt),B(null),X(null),q.current=null,d==null||d(!1);const $=wt[i];let J,K,we,Ge;Je?(J=Math.min(Ee,tt),K=Math.min(_t,Qe)+rt,we=Math.max(rl,Math.abs(tt-Ee)),Ge=Math.max(rl,Math.abs(Qe-_t))):(we=$.width,Ge=$.height,J=Ee-we/2,K=_t+rt-Ge/2),J=Math.max(0,J),K=Math.max(0,K);const Ve={id:Ly(),type:i,x:J,y:K,width:we,height:Ge,scrollY:rt,timestamp:Date.now()},Ne=[...t,Ve];n(Ne),j(new Set([Ve.id])),a(null)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",qt)}else{_e.shiftKey||j(new Set),q.current="select";let Je=!1;const tt=ht=>{const qt=Math.abs(ht.clientX-Ee),ut=Math.abs(ht.clientY-_t);if((qt>4||ut>4)&&(Je=!0),Je){const $=Math.min(Ee,ht.clientX),J=Math.min(_t,ht.clientY);I({x:$,y:J,w:Math.abs(ht.clientX-Ee),h:Math.abs(ht.clientY-_t)})}},Qe=ht=>{if(window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",Qe),q.current=null,Je){const qt=Math.min(Ee,ht.clientX),ut=Math.min(_t,ht.clientY)+rt,$=Math.abs(ht.clientX-Ee),J=Math.abs(ht.clientY-_t),K=new Set(_e.shiftKey?C:new Set);for(const we of t)we.y-rt,we.x+we.width>qt&&we.x<qt+$&&we.y+we.height>ut&&we.y<ut+J&&K.add(we.id);j(K)}I(null)};window.addEventListener("mousemove",tt),window.addEventListener("mouseup",Qe)}},[i,p,t,n,C]),Re=y.useCallback((_e,me)=>{var Ve;if(_e.button!==0)return;const rt=_e.target;if(rt.closest(`.${Ae.handle}`)||rt.closest(`.${Ae.deleteButton}`))return;_e.preventDefault(),_e.stopPropagation();let Ee;_e.shiftKey?(Ee=new Set(C),Ee.has(me)?Ee.delete(me):Ee.add(me)):C.has(me)?Ee=new Set(C):Ee=new Set([me]),j(Ee),(Ee.size!==C.size||[...Ee].some(Ne=>!C.has(Ne)))&&((Ve=D.current)==null||Ve.call(D,Ee,_e.shiftKey));const Je=_e.clientX,tt=_e.clientY,Qe=new Map;for(const Ne of t)Ee.has(Ne.id)&&Qe.set(Ne.id,{x:Ne.x,y:Ne.y});q.current="move",d==null||d(!0);let ht=!1,qt=!1,ut=t,$=0,J=0;const K=new Map;for(const Ne of t)Qe.has(Ne.id)&&K.set(Ne.id,{w:Ne.width,h:Ne.height});const we=Ne=>{var Nt;const kt=Ne.clientX-Je,nt=Ne.clientY-tt;if((Math.abs(kt)>2||Math.abs(nt)>2)&&(ht=!0),!ht)return;if(Ne.altKey&&!qt){qt=!0;const et=[];for(const Zt of t)Qe.has(Zt.id)&&et.push({...Zt,id:Ly(),timestamp:Date.now()});ut=[...t,...et]}let At=1/0,ft=1/0,Ye=-1/0,Ot=-1/0;for(const[et,Zt]of Qe){const Tn=K.get(et);Tn&&(At=Math.min(At,Zt.x+kt),ft=Math.min(ft,Zt.y+nt),Ye=Math.max(Ye,Zt.x+kt+Tn.w),Ot=Math.max(Ot,Zt.y+nt+Tn.h))}const Vt={x:At,y:ft,width:Ye-At,height:Ot-ft},{dx:Jt,dy:qe,guides:Dt}=By(Vt,ut,new Set(Qe.keys()),void 0,g);G(Dt);const Mt=kt+Jt,Bt=nt+qe;$=Mt,J=Bt,n(ut.map(et=>{const Zt=Qe.get(et.id);return Zt?{...et,x:Math.max(0,Zt.x+Mt),y:Math.max(0,Zt.y+Bt)}:et})),(Nt=ae.current)==null||Nt.call(ae,Mt,Bt)},Ge=()=>{var Ne;window.removeEventListener("mousemove",we),window.removeEventListener("mouseup",Ge),q.current=null,d==null||d(!1),G([]),(Ne=se.current)==null||Ne.call(se,$,J,ht)};window.addEventListener("mousemove",we),window.addEventListener("mouseup",Ge)},[C,t,n,d]),mt=y.useCallback((_e,me,rt)=>{_e.preventDefault(),_e.stopPropagation();const Ee=t.find(K=>K.id===me);if(!Ee)return;j(new Set([me])),q.current="resize",d==null||d(!0);const _t=_e.clientX,Je=_e.clientY,tt=Ee.width,Qe=Ee.height,ht=Ee.x,qt=Ee.y,ut={left:rt.includes("w"),right:rt.includes("e"),top:rt.includes("n"),bottom:rt.includes("s")},$=K=>{const we=K.clientX-_t,Ge=K.clientY-Je;let Ve=tt,Ne=Qe,kt=ht,nt=qt;rt.includes("e")&&(Ve=Math.max(rl,tt+we)),rt.includes("w")&&(Ve=Math.max(rl,tt-we),kt=ht+tt-Ve),rt.includes("s")&&(Ne=Math.max(rl,Qe+Ge)),rt.includes("n")&&(Ne=Math.max(rl,Qe-Ge),nt=qt+Qe-Ne);const At={x:kt,y:nt,width:Ve,height:Ne},{dx:ft,dy:Ye,guides:Ot}=By(At,ge.current,new Set([me]),ut,g);G(Ot),ft!==0&&(ut.right?Ve+=ft:ut.left&&(kt+=ft,Ve-=ft)),Ye!==0&&(ut.bottom?Ne+=Ye:ut.top&&(nt+=Ye,Ne-=Ye)),n(ge.current.map(Vt=>Vt.id===me?{...Vt,x:kt,y:nt,width:Ve,height:Ne}:Vt)),X({x:K.clientX+12,y:K.clientY+12,text:`${Math.round(Ve)} × ${Math.round(Ne)}`})},J=()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",J),X(null),q.current=null,d==null||d(!1),G([])};window.addEventListener("mousemove",$),window.addEventListener("mouseup",J)},[t,n,d]),at=y.useCallback(_e=>{q.current=null,O(me=>{const rt=new Set(me);return rt.add(_e),rt}),j(me=>{const rt=new Set(me);return rt.delete(_e),rt}),Wt(()=>{n(ge.current.filter(me=>me.id!==_e)),O(me=>{const rt=new Set(me);return rt.delete(_e),rt})},180)},[n]),Pe={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},ct=y.useCallback(_e=>{const me=t.find(rt=>rt.id===_e);me&&(Q.current=!!me.text,oe(_e),Le(!1))},[t]),dt=y.useCallback(()=>{re&&(Le(!0),Wt(()=>{oe(null),Le(!1)},150))},[re]);y.useEffect(()=>{u&&re&&dt()},[u]);const bt=y.useCallback(_e=>{re&&(n(t.map(me=>me.id===re?{...me,text:_e.trim()||void 0}:me)),dt())},[re,t,n,dt]),gt=typeof window<"u"?window.scrollY:0,Xt=["nw","ne","se","sw"],Ut=k?"#f97316":"#3c82f7",dn=[{dir:"n",cls:Ae.edgeN,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Ut})})},{dir:"e",cls:Ae.edgeE,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Ut})})},{dir:"s",cls:Ae.edgeS,arrow:l.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:l.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Ut})})},{dir:"w",cls:Ae.edgeW,arrow:l.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:l.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Ut})})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:Y,className:`${Ae.overlay} ${c?"":Ae.light} ${i?Ae.placing:""} ${p?Ae.passthrough:""} ${u?Ae.overlayExiting:""} ${k?Ae.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:We,children:t.map(_e=>{var _t;const me=C.has(_e.id),rt=((_t=Ui[_e.type])==null?void 0:_t.label)||_e.type,Ee=_e.y-gt;return l.jsxs("div",{"data-design-placement":_e.id,className:`${Ae.placement} ${me?Ae.selected:""} ${de.has(_e.id)?Ae.exiting:""}`,style:{left:_e.x,top:Ee,width:_e.width,height:_e.height,position:"fixed"},onMouseDown:Je=>Re(Je,_e.id),onDoubleClick:()=>ct(_e.id),children:[l.jsx("span",{className:Ae.placementLabel,children:rt}),l.jsx("span",{className:`${Ae.placementAnnotation} ${_e.text?Ae.annotationVisible:""}`,children:(_e.text&&ee.current.set(_e.id,_e.text),_e.text||ee.current.get(_e.id)||"")}),l.jsx("div",{className:Ae.placementContent,children:l.jsx(p4,{type:_e.type,width:_e.width,height:_e.height,text:_e.text})}),l.jsx("div",{className:Ae.deleteButton,onMouseDown:Je=>Je.stopPropagation(),onClick:()=>at(_e.id),children:"✕"}),Xt.map(Je=>l.jsx("div",{className:`${Ae.handle} ${Ae[`handle${Je.charAt(0).toUpperCase()}${Je.slice(1)}`]}`,onMouseDown:tt=>mt(tt,_e.id,Je)},Je)),dn.map(({dir:Je,cls:tt,arrow:Qe})=>l.jsx("div",{className:`${Ae.edgeHandle} ${tt}`,onMouseDown:ht=>mt(ht,_e.id,Je),children:Qe},Je))]},_e.id)})}),re&&(()=>{var qt,ut;const _e=t.find($=>$.id===re);if(!_e)return null;const me=_e.y-gt,rt=_e.x+_e.width/2,Ee=me-8,_t=me+_e.height+8,Je=Ee>200,tt=_t<window.innerHeight-100,Qe=Math.max(160,Math.min(window.innerWidth-160,rt));let ht;return Je?ht={left:Qe,bottom:window.innerHeight-Ee}:tt?ht={left:Qe,top:_t}:ht={left:Qe,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:((qt=Ui[_e.type])==null?void 0:qt.label)||_e.type,placeholder:Pe[_e.type]||"Label or content text",initialValue:(ut=_e.text)!=null?ut:"",submitLabel:Q.current?"Save":"Set",onSubmit:bt,onCancel:dt,onDelete:Q.current?()=>{bt("")}:void 0,isExiting:Ce,lightMode:!c,style:ht})})(),N&&l.jsx("div",{className:Ae.drawBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),A&&l.jsx("div",{className:Ae.selectBox,style:{left:A.x,top:A.y,width:A.w,height:A.h},"data-feedback-toolbar":!0}),V&&l.jsx("div",{className:Ae.sizeIndicator,style:{left:V.x,top:V.y},"data-feedback-toolbar":!0,children:V.text}),U.map((_e,me)=>l.jsx("div",{className:Ae.guideLine,style:_e.axis==="x"?{position:"fixed",left:_e.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:_e.pos-gt,right:0,height:1},"data-feedback-toolbar":!0},`${_e.axis}-${_e.pos}-${me}`))]})}function x4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Ae.fadeTop:""} ${i?Ae.fadeBottom:""}`}var R="currentColor",Te="0.5";function b4({type:t}){switch(t){case"navigation":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:R,opacity:".4"}),l.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:R,opacity:".25"})]});case"header":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:R,opacity:".35"}),l.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:R,opacity:".15"})]});case"hero":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:R,opacity:".35"}),l.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:R,strokeWidth:Te})]});case"section":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:R,opacity:".15"})]});case"sidebar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:R,opacity:".15"})]});case"footer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:R,opacity:".2"})]});case"modal":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:R,strokeWidth:Te})]});case"divider":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:R,strokeWidth:"0.5",opacity:".3"})});case"card":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:R,opacity:".04"}),l.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:R,opacity:".12"})]});case"text":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:R,opacity:".12"})]});case"image":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"})]});case"video":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:R,strokeWidth:Te,fill:R,opacity:".15"})]});case"table":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:R,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:R,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"}),l.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"})]});case"grid":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:Te})]});case"list":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:R,opacity:".2"})]});case"chart":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:R,opacity:".2"}),l.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:R,opacity:".2"})]});case"accordion":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:R,strokeWidth:Te})]});case"carousel":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:R,strokeWidth:Te,opacity:".35"}),l.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:R,strokeWidth:Te,opacity:".35"}),l.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:R,opacity:".35"}),l.jsx("circle",{cx:"10",cy:"14",r:".6",fill:R,opacity:".15"}),l.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:R,opacity:".15"})]});case"button":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"})]});case"input":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:R,opacity:".12"})]});case"search":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"form":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:R,strokeWidth:Te})]});case"tabs":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:R,strokeWidth:Te})]});case"dropdown":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:R,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"13",cy:"8",r:"2",fill:R,opacity:".3"})]});case"avatar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:R,strokeWidth:Te}),l.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:R,strokeWidth:Te})]});case"badge":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"})]});case"breadcrumb":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:R,opacity:".3"}),l.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:R,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("path",{d:"M14 7l1 1-1 1",stroke:R,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:R,opacity:".15"})]});case"pagination":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:R,opacity:".15",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:Te})]});case"progress":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:R,opacity:".2"})]});case"toast":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".12"})]});case"tooltip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:R,strokeWidth:Te})]});case"pricing":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:R,opacity:".1"}),l.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:R,opacity:".1"}),l.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:R,opacity:".2"})]});case"testimonial":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:R,opacity:".2",fontFamily:"serif",children:"“"}),l.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:R,opacity:".12"}),l.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:R,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:R,opacity:".15"})]});case"cta":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:R,strokeWidth:Te})]});case"alert":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:R,strokeWidth:"0.6",opacity:".5"}),l.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:R,opacity:".5"}),l.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:R,opacity:".2"})]});case"banner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:R,strokeWidth:Te})]});case"stat":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:R,opacity:".3"}),l.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"stepper":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"4",cy:"8",r:"2",fill:R,opacity:".2",stroke:R,strokeWidth:Te}),l.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:R,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:R,strokeWidth:Te}),l.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:R,strokeWidth:".4",opacity:".3"}),l.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:R,strokeWidth:Te})]});case"tag":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:R,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:R,strokeWidth:Te,opacity:".2"})]});case"rating":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:R,opacity:".25"}),l.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:R,opacity:".25"}),l.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:R,strokeWidth:Te,opacity:".25"})]});case"map":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:R,strokeWidth:".3",opacity:".15"}),l.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:R,strokeWidth:".3",opacity:".15"}),l.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:R,opacity:".15",stroke:R,strokeWidth:Te})]});case"timeline":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:R,strokeWidth:".4",opacity:".25"}),l.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:R,opacity:".2",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:R,opacity:".15"})]});case"fileUpload":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:Te,strokeDasharray:"2 1"}),l.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:R,opacity:".15"})]});case"codeBlock":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"4",cy:"4",r:".6",fill:R,opacity:".3"}),l.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:R,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"4",r:".6",fill:R,opacity:".3"}),l.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:R,opacity:".12"})]});case"calendar":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:R,strokeWidth:".4",opacity:".25"}),l.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:R,opacity:".2"}),l.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:R,opacity:".2"}),l.jsx("circle",{cx:"7",cy:"9",r:".6",fill:R,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"9",r:".6",fill:R,opacity:".2"}),l.jsx("circle",{cx:"13",cy:"9",r:".6",fill:R,opacity:".3"}),l.jsx("circle",{cx:"7",cy:"12",r:".6",fill:R,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"12",r:".6",fill:R,opacity:".2"})]});case"notification":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:R,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:R,opacity:".12"}),l.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:R,opacity:".25"})]});case"productCard":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:R,opacity:".04"}),l.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:R,strokeWidth:Te})]});case"profile":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"drawer":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:R,strokeWidth:Te,opacity:".15"})]});case"popover":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:R,strokeWidth:Te})]});case"logo":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:R,strokeWidth:Te}),l.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:R,strokeWidth:Te,opacity:".3"}),l.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:R,opacity:".12"})]});case"faq":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:R,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:R,opacity:".12"}),l.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:R,opacity:".3",fontWeight:"bold",children:"?"}),l.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:R,opacity:".12"})]});case"gallery":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:Te})]});case"checkbox":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:R,strokeWidth:Te,opacity:".35"})]});case"radio":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:R,strokeWidth:Te}),l.jsx("circle",{cx:"10",cy:"8",r:"2",fill:R,opacity:".3"})]});case"slider":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:R,strokeWidth:Te})]});case"datePicker":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:R,opacity:".12"}),l.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:R,strokeWidth:Te,strokeDasharray:"2 1",opacity:".3"}),l.jsx("circle",{cx:"6",cy:"10",r:".6",fill:R,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"10",r:".6",fill:R,opacity:".3"}),l.jsx("circle",{cx:"14",cy:"10",r:".6",fill:R,opacity:".2"}),l.jsx("circle",{cx:"6",cy:"13",r:".6",fill:R,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"13",r:".6",fill:R,opacity:".2"})]});case"skeleton":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:R,opacity:".08"}),l.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:R,opacity:".08"}),l.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:R,opacity:".08"})]});case"chip":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:R,opacity:".08",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),l.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:R,strokeWidth:Te,opacity:".2"}),l.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:R,strokeWidth:Te,opacity:".2"}),l.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:R,strokeWidth:Te,opacity:".25"})]});case"icon":return l.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:l.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:R,strokeWidth:Te,opacity:".3"})});case"spinner":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:R,strokeWidth:Te,opacity:".12"}),l.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:R,strokeWidth:Te,opacity:".35",strokeLinecap:"round"})]});case"feature":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:R,strokeWidth:Te,opacity:".25"}),l.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"}),l.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:R,opacity:".12"})]});case"team":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:R,strokeWidth:Te,opacity:".5"}),l.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".15"}),l.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:R,opacity:".1"})]});case"login":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),l.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:R,opacity:".2"})]});case"contact":return l.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[l.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),l.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:R,strokeWidth:Te}),l.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:R,opacity:".2"})]});default:return null}}function v4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return l.jsx("div",{ref:a,className:`${Ae.placeScroll} ${c||""}`,children:Ux.map(d=>l.jsxs("div",{className:Ae.paletteSection,children:[l.jsx("div",{className:Ae.paletteSectionTitle,children:d.section}),d.items.map(h=>l.jsxs("div",{className:`${Ae.paletteItem} ${t===h.type?Ae.active:""} ${u?Ae.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[l.jsx("div",{className:Ae.paletteItemIcon,children:l.jsx(b4,{type:h.type})}),l.jsx("span",{className:Ae.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function w4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Wt(()=>a(null),250)}else g.current=n},[t,n]),i===null?l.jsxs(l.Fragment,{children:[t,n?` ${n}`:""]}):x?l.jsxs("span",{className:Ae.rollingWrap,children:[l.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),l.jsxs("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.exitUp:Ae.exitDown}`,children:[i," ",c]},`o${i}-${t}`),l.jsxs("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.enterUp:Ae.enterDown}`,children:[t," ",n]},`n${t}`)]}):l.jsxs(l.Fragment,{children:[l.jsxs("span",{className:Ae.rollingWrap,children:[l.jsx("span",{style:{visibility:"hidden"},children:t}),l.jsx("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.exitUp:Ae.exitDown}`,children:i},`o${i}-${t}`),l.jsx("span",{className:`${Ae.rollingNum} ${d==="up"?Ae.enterUp:Ae.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function S4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[k,C]=y.useState(!1),[j,N]=y.useState("exit"),[B,A]=y.useState(!1),[I,V]=y.useState(!0),X=y.useRef(0),U=y.useRef(""),G=y.useRef(0),re=y.useRef(),oe=y.useRef(null),[Ce,Le]=y.useState("");y.useEffect(()=>(u?(C(!0),clearTimeout(re.current),cancelAnimationFrame(G.current),G.current=dl(()=>{G.current=dl(()=>{N("enter")})})):(cancelAnimationFrame(G.current),N("exit"),clearTimeout(re.current),re.current=Wt(()=>{C(!1),d==null||d()},200)),()=>cancelAnimationFrame(G.current)),[u]);const Q=h>0||a>0,de=h+a;return de>0&&(X.current=de,U.current=_?de===1?"Component":"Components":de===1?"Change":"Changes"),y.useEffect(()=>{if(Q)B?V(!1):(V(!0),A(!0),dl(()=>{dl(()=>{V(!1)})}));else{V(!0);const O=Wt(()=>A(!1),300);return()=>clearTimeout(O)}},[Q]),y.useEffect(()=>{if(!k)return;const O=oe.current;if(!O)return;const ee=()=>Le(x4(O));ee(),O.addEventListener("scroll",ee,{passive:!0});const Y=new ResizeObserver(ee);return Y.observe(O),()=>{O.removeEventListener("scroll",ee),Y.disconnect()}},[k]),k?l.jsxs("div",{className:`${Ae.palette} ${Ae[j]} ${i?"":Ae.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:O=>O.stopPropagation(),onMouseDown:O=>O.stopPropagation(),onTransitionEnd:O=>{O.target===O.currentTarget&&(u||(clearTimeout(re.current),C(!1),N("exit"),d==null||d()))},children:[l.jsxs("div",{className:Ae.paletteHeader,children:[l.jsx("div",{className:Ae.paletteHeaderTitle,children:"Layout Mode"}),l.jsxs("div",{className:Ae.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",l.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),l.jsxs("div",{className:`${Ae.canvasToggle} ${_?Ae.active:""}`,onClick:()=>x(!_),children:[l.jsx("span",{className:Ae.canvasToggleIcon,children:l.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[l.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),l.jsx("span",{className:Ae.canvasToggleLabel,children:"Wireframe New Page"})]}),l.jsx("div",{className:`${Ae.wireframePurposeWrap} ${_?"":Ae.collapsed}`,children:l.jsx("div",{className:Ae.wireframePurposeInner,children:l.jsx("textarea",{className:Ae.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:O=>w(O.target.value),rows:2})})}),l.jsx(v4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:oe,fadeClass:Ce,blankCanvas:_}),B&&l.jsx("div",{className:`${Ae.paletteFooterWrap} ${I?Ae.footerHidden:""}`,children:l.jsx("div",{className:Ae.paletteFooterInner,children:l.jsx("div",{className:Ae.paletteFooterInnerContent,children:l.jsxs("div",{className:Ae.paletteFooter,children:[l.jsx("span",{className:Ae.paletteFooterCount,children:l.jsx(w4,{value:X.current,suffix:U.current})}),l.jsx("button",{className:Ae.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function _l(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Ho(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=_l(i)}return null}function C4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=_l(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function pl(t){var a,c,u,d,h,p,g,_;const n=C4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Ho(t,"svg");if(x){const b=_l(x);if(b instanceof HTMLElement)return{name:`graphic in ${pl(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=_l(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(k=>k.replace(/[A-Z0-9]{5,}.*$/,"")).filter(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function ac(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Fu(t){const n=_l(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const k=b.split(/\s+/).map(C=>C.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C));k&&(w=`.${k}`)}if(x==="button"||x==="a"){const k=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(k)return`${x}${w} "${k}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function rc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Vx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),k4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),j4=new Set(["input","textarea","select"]),M4=new Set(["img","video","canvas","svg"]),T4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;k4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:j4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:M4.has(a)?c=["width","height","objectFit","borderRadius"]:T4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Vx.has(h)&&(i[u]=h)}return i}var E4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of E4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Vx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function A4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Gu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ku(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=_l(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var D4=new Set(["nav","header","main","section","article","footer","aside"]),Nm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Oy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},N4=new Set(["script","style","noscript","link","meta"]),R4=40;function Yx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function Ar(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":Ar(i)} > ${n}:nth-child(${c})`}return n}function jd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Nm[a])return Nm[a];if(Oy[n])return Oy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=pl(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Wx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Fx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function B4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(N4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<R4)return;const g=D4.has(d),_=c.getAttribute("role")&&Nm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Yx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(c),tagName:d,selector:Ar(c),role:c.getAttribute("role"),className:Wx(c),textSnippet:Fx(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function L4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Yx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jd(t),tagName:t.tagName.toLowerCase(),selector:Ar(t),role:t.getAttribute("role"),className:Wx(t),textSnippet:Fx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var zy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},$y=["nw","n","ne","e","se","s","sw","w"],Qu=24,Iy=16,Zu=5;function Py(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const X of n)i.has(X.id)||b.push(X.currentRect);a&&b.push(...a);for(const X of b){const U=X.x,G=X.x+X.width,re=X.x+X.width/2,oe=X.y,Ce=X.y+X.height,Le=X.y+X.height/2;for(const Q of[d,h,p])for(const de of[U,G,re]){const O=de-Q;Math.abs(O)<Zu&&Math.abs(O)<Math.abs(c)&&(c=O)}for(const Q of[g,_,x])for(const de of[oe,Ce,Le]){const O=de-Q;Math.abs(O)<Zu&&Math.abs(O)<Math.abs(u)&&(u=O)}}const w=Math.abs(c)<Zu?c:0,S=Math.abs(u)<Zu?u:0,k=[],C=new Set,j=d+w,N=h+w,B=p+w,A=g+S,I=_+S,V=x+S;for(const X of b){const U=X.x,G=X.x+X.width,re=X.x+X.width/2,oe=X.y,Ce=X.y+X.height,Le=X.y+X.height/2;for(const Q of[U,re,G])for(const de of[j,B,N])if(Math.abs(de-Q)<.5){const O=`x:${Math.round(Q)}`;C.has(O)||(C.add(O),k.push({axis:"x",pos:Q}))}for(const Q of[oe,Le,Ce])for(const de of[A,V,I])if(Math.abs(de-Q)<.5){const O=`y:${Math.round(Q)}`;C.has(O)||(C.add(O),k.push({axis:"y",pos:Q}))}}return{dx:w,dy:S,guides:k}}var O4=new Set(["script","style","noscript","link","meta","br","hr"]);function Hy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(O4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Iy&&i.height>=Iy)return n;n=n.parentElement}return null}function z4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,k]=y.useState(new Set),[C,j]=y.useState(!1),N=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==N.current&&(N.current=x,b.length>0&&j(!0))},[x,b.length]);const B=y.useRef(p);y.useEffect(()=>{p!==B.current&&(B.current=p,k(new Set))},[p]);const[A,I]=y.useState(null),[V,X]=y.useState(!1),U=y.useRef(!1),G=y.useCallback($=>{const J=b.find(K=>K.id===$);J&&(U.current=!!J.note,I($),X(!1))},[b]),re=y.useCallback(()=>{A&&(X(!0),Wt(()=>{I(null),X(!1)},150))},[A]),oe=y.useCallback($=>{A&&(n({...t,sections:b.map(J=>J.id===A?{...J,note:$.trim()||void 0}:J)}),re())},[A,b,t,n,re]);y.useEffect(()=>{a&&A&&re()},[a]);const[Ce,Le]=y.useState(new Set),Q=y.useRef(new Map),[de,O]=y.useState(null),[ee,Y]=y.useState(null),[q,ge]=y.useState([]),[D,ae]=y.useState(0),se=y.useRef(null),ce=y.useRef(new Set),De=y.useRef(new Map),[We,Re]=y.useState(new Map),[mt,at]=y.useState(new Map),Pe=y.useRef(new Set),ct=y.useRef(new Map),dt=y.useRef(h);dt.current=h;const bt=y.useRef(g);bt.current=g;const gt=y.useRef(_);gt.current=_,y.useEffect(()=>{u&&k(new Set)},[u]);const[Xt,Ut]=y.useState(()=>!t.sections.some($=>{const J=$.originalRect,K=$.currentRect;return Math.abs(J.x-K.x)>1||Math.abs(J.y-K.y)>1||Math.abs(J.width-K.width)>1||Math.abs(J.height-K.height)>1}));y.useEffect(()=>{if(!Xt){const $=Wt(()=>Ut(!0),380);return()=>clearTimeout($)}},[]);const dn=y.useRef(new Set);y.useEffect(()=>{dn.current=new Set(b.map($=>$.selector))},[b]),y.useEffect(()=>{const $=()=>ae(window.scrollY);return $(),window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",$,{passive:!0}),()=>{window.removeEventListener("scroll",$),window.removeEventListener("resize",$)}},[]),y.useEffect(()=>{const $=J=>{if(se.current){O(null);return}const K=document.elementFromPoint(J.clientX,J.clientY);if(!K){O(null);return}if(K.closest("[data-feedback-toolbar]")){O(null);return}if(K.closest("[data-design-placement]")){O(null);return}if(K.closest("[data-annotation-popup]")){O(null);return}const we=Hy(K);if(!we){O(null);return}for(const Ve of dn.current)try{const Ne=document.querySelector(Ve);if(Ne&&(Ne===we||we.contains(Ne))){O(null);return}}catch{}const Ge=we.getBoundingClientRect();O({x:Ge.x,y:Ge.y,w:Ge.width,h:Ge.height})};return document.addEventListener("mousemove",$,{passive:!0}),()=>document.removeEventListener("mousemove",$)},[b]),y.useEffect(()=>{const $=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=$}},[]),y.useEffect(()=>{const $=J=>{var Ne,kt,nt,At;if(se.current||J.button!==0)return;const K=J.target;if(!K||K.closest("[data-feedback-toolbar]")||K.closest("[data-design-placement]")||K.closest("[data-annotation-popup]"))return;const we=Hy(K);let Ge=!1;if(we)for(const ft of dn.current)try{const Ye=document.querySelector(ft);if(Ye&&(Ye===we||we.contains(Ye))){Ge=!0;break}}catch{}const Ve=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(we&&!Ge){J.preventDefault(),J.stopPropagation();const ft=L4(we),Ye=[...b,ft],Ot=[...t.originalOrder,ft.id];n({...t,sections:Ye,originalOrder:Ot});const Vt=new Set([ft.id]);k(Vt),(Ne=dt.current)==null||Ne.call(dt,Vt,Ve),O(null);const Jt=J.clientX,qe=J.clientY,Dt={x:ft.currentRect.x,y:ft.currentRect.y};ft.originalRect;let Mt=!1,Bt=0,Nt=0;se.current="move";const et=Tn=>{var fn;const os=Tn.clientX-Jt,Kn=Tn.clientY-qe;if(!Mt&&(Math.abs(os)>2||Math.abs(Kn)>2)&&(Mt=!0),!Mt)return;const fo={x:Dt.x+os,y:Dt.y+Kn,width:ft.currentRect.width,height:ft.currentRect.height},ds=Py(fo,Ye,new Set([ft.id]),d);ge(ds.guides);const Cs=os+ds.dx,wn=Kn+ds.dy;Bt=Cs,Nt=wn;const Nn=document.querySelector(`[data-rearrange-section="${ft.id}"]`);Nn&&(Nn.style.transform=`translate(${Cs}px, ${wn}px)`),Re(new Map([[ft.id,{x:Dt.x+Cs,y:Dt.y+wn,width:ft.currentRect.width,height:ft.currentRect.height}]])),(fn=bt.current)==null||fn.call(bt,Cs,wn)},Zt=()=>{var os;window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",Zt),se.current=null,ge([]),Re(new Map);const Tn=document.querySelector(`[data-rearrange-section="${ft.id}"]`);Tn&&(Tn.style.transform=""),Mt&&n({...t,sections:Ye.map(Kn=>Kn.id===ft.id?{...Kn,currentRect:{...Kn.currentRect,x:Math.max(0,Dt.x+Bt),y:Math.max(0,Dt.y+Nt)}}:Kn),originalOrder:Ot}),(os=gt.current)==null||os.call(gt,Bt,Nt,Mt)};window.addEventListener("mousemove",et),window.addEventListener("mouseup",Zt)}else if(Ge&&we){J.preventDefault();for(const ft of b)try{const Ye=document.querySelector(ft.selector);if(Ye&&Ye===we){const Ot=new Set([ft.id]);k(Ot),(kt=dt.current)==null||kt.call(dt,Ot,Ve);return}}catch{}Ve||(k(new Set),(nt=dt.current)==null||nt.call(dt,new Set,!1))}else Ve||(k(new Set),(At=dt.current)==null||At.call(dt,new Set,!1))};return document.addEventListener("mousedown",$,!0),()=>document.removeEventListener("mousedown",$,!0)},[b,t,n]),y.useEffect(()=>{const $=J=>{const K=J.target;if(!(K.tagName==="INPUT"||K.tagName==="TEXTAREA"||K.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&S.size>0){J.preventDefault();const we=new Set(S);Le(Ge=>{const Ve=new Set(Ge);for(const Ne of we)Ve.add(Ne);return Ve}),k(new Set),Wt(()=>{const Ge=w.current;n({...Ge,sections:Ge.sections.filter(Ve=>!we.has(Ve.id)),originalOrder:Ge.originalOrder.filter(Ve=>!we.has(Ve))}),Le(Ve=>{const Ne=new Set(Ve);for(const kt of we)Ne.delete(kt);return Ne})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&S.size>0){J.preventDefault();const we=J.shiftKey?20:1,Ge=J.key==="ArrowLeft"?-we:J.key==="ArrowRight"?we:0,Ve=J.key==="ArrowUp"?-we:J.key==="ArrowDown"?we:0;n({...t,sections:b.map(Ne=>S.has(Ne.id)?{...Ne,currentRect:{...Ne.currentRect,x:Math.max(0,Ne.currentRect.x+Ge),y:Math.max(0,Ne.currentRect.y+Ve)}}:Ne)});return}J.key==="Escape"&&S.size>0&&k(new Set)}};return document.addEventListener("keydown",$),()=>document.removeEventListener("keydown",$)},[S,b,t,n]);const _e=y.useCallback(($,J)=>{var Jt;if($.button!==0)return;const K=$.target;if(K.closest(`.${Ae.handle}`)||K.closest(`.${Ae.deleteButton}`))return;$.preventDefault(),$.stopPropagation();let we;$.shiftKey||$.metaKey||$.ctrlKey?(we=new Set(S),we.has(J)?we.delete(J):we.add(J)):S.has(J)?we=new Set(S):we=new Set([J]),k(we),(we.size!==S.size||[...we].some(qe=>!S.has(qe)))&&((Jt=dt.current)==null||Jt.call(dt,we,!!($.shiftKey||$.metaKey||$.ctrlKey)));const Ve=$.clientX,Ne=$.clientY,kt=new Map;for(const qe of b)we.has(qe.id)&&kt.set(qe.id,{x:qe.currentRect.x,y:qe.currentRect.y});se.current="move";let nt=!1,At=0,ft=0;const Ye=new Map;for(const qe of b)if(we.has(qe.id)){const Dt=document.querySelector(`[data-rearrange-section="${qe.id}"]`);Ye.set(qe.id,{outlineEl:Dt,curW:qe.currentRect.width,curH:qe.currentRect.height})}const Ot=qe=>{var ds;const Dt=qe.clientX-Ve,Mt=qe.clientY-Ne;if(Dt===0&&Mt===0)return;nt=!0;let Bt=1/0,Nt=1/0,et=-1/0,Zt=-1/0;for(const[Cs,{curW:wn,curH:Nn}]of Ye){const fn=kt.get(Cs);if(!fn)continue;const pn=fn.x+Dt,ot=fn.y+Mt;Bt=Math.min(Bt,pn),Nt=Math.min(Nt,ot),et=Math.max(et,pn+wn),Zt=Math.max(Zt,ot+Nn)}const Tn=Py({x:Bt,y:Nt,width:et-Bt,height:Zt-Nt},b,we,d),os=Dt+Tn.dx,Kn=Mt+Tn.dy;At=os,ft=Kn,ge(Tn.guides);for(const[,{outlineEl:Cs}]of Ye)Cs&&(Cs.style.transform=`translate(${os}px, ${Kn}px)`);const fo=new Map;for(const[Cs,{curW:wn,curH:Nn}]of Ye){const fn=kt.get(Cs);if(fn){const pn={x:Math.max(0,fn.x+os),y:Math.max(0,fn.y+Kn),width:wn,height:Nn};fo.set(Cs,pn)}}Re(fo),(ds=bt.current)==null||ds.call(bt,os,Kn)},Vt=qe=>{var Dt,Mt;window.removeEventListener("mousemove",Ot),window.removeEventListener("mouseup",Vt),se.current=null,ge([]),Re(new Map);for(const[,{outlineEl:Bt}]of Ye)Bt&&(Bt.style.transform="");if(nt){const Bt=qe.clientX-Ve,Nt=qe.clientY-Ne;if(Math.abs(Bt)<5&&Math.abs(Nt)<5)n({...t,sections:b.map(et=>{const Zt=kt.get(et.id);return Zt?{...et,currentRect:{...et.currentRect,x:Zt.x,y:Zt.y}}:et})});else{n({...t,sections:b.map(et=>{const Zt=kt.get(et.id);return Zt?{...et,currentRect:{...et.currentRect,x:Math.max(0,Zt.x+At),y:Math.max(0,Zt.y+ft)}}:et})}),(Dt=gt.current)==null||Dt.call(gt,At,ft,!0);return}}(Mt=gt.current)==null||Mt.call(gt,0,0,!1)};window.addEventListener("mousemove",Ot),window.addEventListener("mouseup",Vt)},[S,b,t,n]),me=y.useCallback(($,J,K)=>{$.preventDefault(),$.stopPropagation();const we=b.find(Ot=>Ot.id===J);if(!we)return;k(new Set([J])),se.current="resize";const Ge=$.clientX,Ve=$.clientY,Ne={...we.currentRect};we.originalRect;const kt=Ne.width/Ne.height;let nt={...Ne};const At=document.querySelector(`[data-rearrange-section="${J}"]`),ft=Ot=>{const Vt=Ot.clientX-Ge,Jt=Ot.clientY-Ve;let qe=Ne.x,Dt=Ne.y,Mt=Ne.width,Bt=Ne.height;if(K.includes("e")&&(Mt=Math.max(Qu,Ne.width+Vt)),K.includes("w")&&(Mt=Math.max(Qu,Ne.width-Vt),qe=Ne.x+Ne.width-Mt),K.includes("s")&&(Bt=Math.max(Qu,Ne.height+Jt)),K.includes("n")&&(Bt=Math.max(Qu,Ne.height-Jt),Dt=Ne.y+Ne.height-Bt),Ot.shiftKey)if(K.length===2){const et=Math.abs(Mt-Ne.width),Zt=Math.abs(Bt-Ne.height);et>Zt?Bt=Mt/kt:Mt=Bt*kt,K.includes("w")&&(qe=Ne.x+Ne.width-Mt),K.includes("n")&&(Dt=Ne.y+Ne.height-Bt)}else K==="e"||K==="w"?Bt=Mt/kt:Mt=Bt*kt,K==="w"&&(qe=Ne.x+Ne.width-Mt),K==="n"&&(Dt=Ne.y+Ne.height-Bt);nt={x:qe,y:Dt,width:Mt,height:Bt},At&&(At.style.left=`${qe}px`,At.style.top=`${Dt-D}px`,At.style.width=`${Mt}px`,At.style.height=`${Bt}px`),Y({x:Ot.clientX+12,y:Ot.clientY+12,text:`${Math.round(Mt)} × ${Math.round(Bt)}`}),Re(new Map([[J,nt]]))},Ye=()=>{window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Ye),Y(null),se.current=null,Re(new Map),n({...t,sections:b.map(Ot=>Ot.id===J?{...Ot,currentRect:nt}:Ot)})};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",Ye)},[b,t,n,D]),rt=y.useCallback($=>{Le(J=>{const K=new Set(J);return K.add($),K}),k(J=>{const K=new Set(J);return K.delete($),K}),Wt(()=>{const J=w.current;n({...J,sections:J.sections.filter(K=>K.id!==$),originalOrder:J.originalOrder.filter(K=>K!==$)}),Le(K=>{const we=new Set(K);return we.delete($),we})},180)},[n]),Ee=$=>{const J=$.originalRect,K=$.currentRect;return Math.abs(J.x-K.x)>1||Math.abs(J.y-K.y)>1||Math.abs(J.width-K.width)>1||Math.abs(J.height-K.height)>1},_t=$=>{const J=$.originalRect,K=$.currentRect;return Math.abs(J.x-K.x)>1||Math.abs(J.y-K.y)>1},Je=$=>{const J=$.originalRect,K=$.currentRect;return Math.abs(J.width-K.width)>1||Math.abs(J.height-K.height)>1};for(const $ of b)De.current.has($.id)||(_t($)?De.current.set($.id,"move"):Je($)&&De.current.set($.id,"resize"));for(const $ of De.current.keys())b.some(J=>J.id===$)||De.current.delete($);const tt=b.filter($=>{try{if(Ce.has($.id)||S.has($.id))return!0;const J=document.querySelector($.selector);if(!J)return!1;const K=J.getBoundingClientRect(),we=$.originalRect;return Math.abs(K.width-we.width)+Math.abs(K.height-we.height)<200}catch{return!1}}),Qe=tt.filter($=>Ee($)),ht=tt.filter($=>!Ee($)),qt=new Set(Qe.map($=>$.id));for(const $ of ce.current)qt.has($)||ce.current.delete($);const ut=[...qt].sort().join(",");for(const $ of Qe)ct.current.set($.id,{currentRect:$.currentRect,originalRect:$.originalRect,isFixed:$.isFixed});return y.useEffect(()=>{const $=Pe.current;Pe.current=qt;const J=new Map;for(const K of $)if(!qt.has(K)){if(!b.some(Ge=>Ge.id===K))continue;const we=ct.current.get(K);we&&(J.set(K,{orig:we.originalRect,target:we.currentRect,isFixed:we.isFixed}),ct.current.delete(K))}if(J.size>0){at(we=>{const Ge=new Map(we);for(const[Ve,Ne]of J)Ge.set(Ve,Ne);return Ge});const K=Wt(()=>{at(we=>{const Ge=new Map(we);for(const Ve of J.keys())Ge.delete(Ve);return Ge})},250);return()=>clearTimeout(K)}},[ut,b]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`${Ae.rearrangeOverlay} ${i?"":Ae.light} ${a?Ae.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[de&&l.jsx("div",{className:Ae.hoverHighlight,style:{left:de.x,top:de.y,width:de.w,height:de.h}}),ht.map($=>{const J=$.currentRect,K=$.isFixed?J.y:J.y-D,we=zy,Ge=S.has($.id);return l.jsxs("div",{"data-rearrange-section":$.id,className:`${Ae.sectionOutline} ${Ge?Ae.selected:""} ${C||a||Ce.has($.id)?Ae.exiting:""}`,style:{left:J.x,top:K,width:J.width,height:J.height,borderColor:we.border,backgroundColor:we.bg,...Xt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ve=>_e(Ve,$.id),onDoubleClick:()=>G($.id),children:[l.jsx("span",{className:Ae.sectionLabel,style:{backgroundColor:we.pill},children:$.label}),l.jsx("span",{className:`${Ae.sectionAnnotation} ${$.note?Ae.annotationVisible:""}`,children:($.note&&Q.current.set($.id,$.note),$.note||Q.current.get($.id)||"")}),l.jsxs("span",{className:Ae.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Ae.deleteButton,onMouseDown:Ve=>Ve.stopPropagation(),onClick:()=>rt($.id),children:"✕"}),$y.map(Ve=>l.jsx("div",{className:`${Ae.handle} ${Ae[`handle${Ve.charAt(0).toUpperCase()}${Ve.slice(1)}`]}`,onMouseDown:Ne=>me(Ne,$.id,Ve)},Ve))]},$.id)}),Qe.map($=>{const J=$.currentRect,K=$.isFixed?J.y:J.y-D,we=S.has($.id),Ge=_t($),Ve=Je($);if(u&&!we)return null;const kt=!ce.current.has($.id);return kt&&ce.current.add($.id),l.jsxs("div",{"data-rearrange-section":$.id,className:`${Ae.ghostOutline} ${we?Ae.selected:""} ${C||a||Ce.has($.id)?Ae.exiting:""}`,style:{left:J.x,top:K,width:J.width,height:J.height,...Xt?{}:{opacity:0,animation:"none",transition:"none"},...kt?{}:{animation:"none"}},onMouseDown:nt=>_e(nt,$.id),onDoubleClick:()=>G($.id),children:[l.jsx("span",{className:Ae.sectionLabel,style:{backgroundColor:zy.pill},children:$.label}),l.jsx("span",{className:`${Ae.sectionAnnotation} ${$.note?Ae.annotationVisible:""}`,children:($.note&&Q.current.set($.id,$.note),$.note||Q.current.get($.id)||"")}),l.jsxs("span",{className:Ae.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),l.jsx("div",{className:Ae.deleteButton,onMouseDown:nt=>nt.stopPropagation(),onClick:()=>rt($.id),children:"✕"}),$y.map(nt=>l.jsx("div",{className:`${Ae.handle} ${Ae[`handle${nt.charAt(0).toUpperCase()}${nt.slice(1)}`]}`,onMouseDown:At=>me(At,$.id,nt)},nt)),l.jsx("span",{className:Ae.ghostBadge,children:(()=>{const nt=De.current.get($.id);if(Ge&&Ve){const[At,ft]=nt==="resize"?["Resize","Move"]:["Move","Resize"];return l.jsxs(l.Fragment,{children:["Suggested ",At," ",l.jsxs("span",{className:Ae.ghostBadgeExtra,children:["& ",ft]})]})}return`Suggested ${Ve?"Resize":"Move"}`})()})]},$.id)})]}),!u&&(()=>{const $=[];for(const J of Qe){const K=We.get(J.id);$.push({id:J.id,orig:J.originalRect,target:K||J.currentRect,isFixed:J.isFixed,isSelected:S.has(J.id),isExiting:Ce.has(J.id)})}for(const[J,K]of We)if(!$.some(we=>we.id===J)){const we=b.find(Ge=>Ge.id===J);we&&$.push({id:J,orig:we.originalRect,target:K,isFixed:we.isFixed,isSelected:S.has(J)})}for(const[J,K]of mt)$.some(we=>we.id===J)||$.push({id:J,orig:K.orig,target:K.target,isFixed:K.isFixed,isSelected:!1,isExiting:!0});return $.length===0?null:l.jsxs("svg",{className:`${Ae.connectorSvg} ${C||a?Ae.connectorExiting:""}`,children:[$.map(({id:J,orig:K,target:we,isFixed:Ge,isSelected:Ve,isExiting:Ne})=>{const kt=K.x+K.width/2,nt=(Ge?K.y:K.y-D)+K.height/2,At=we.x+we.width/2,ft=(Ge?we.y:we.y-D)+we.height/2,Ye=At-kt,Ot=ft-nt,Vt=Math.sqrt(Ye*Ye+Ot*Ot);if(Vt<2)return null;const Jt=Math.min(1,Vt/40),qe=Math.min(Vt*.3,60),Dt=Vt>0?-Ot/Vt:0,Mt=Vt>0?Ye/Vt:0,Bt=(kt+At)/2+Dt*qe,Nt=(nt+ft)/2+Mt*qe,et=We.has(J),Zt=et||Ve?1:.4,Tn=et||Ve?1:.5;return l.jsxs("g",{className:Ne?Ae.connectorExiting:"",children:[l.jsx("path",{className:Ae.connectorLine,d:`M ${kt} ${nt} Q ${Bt} ${Nt} ${At} ${ft}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Zt*Jt}),l.jsx("circle",{className:Ae.connectorDot,cx:kt,cy:nt,r:4*Jt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Tn*Jt,filter:"url(#connDotShadow)"}),l.jsx("circle",{className:Ae.connectorDot,cx:At,cy:ft,r:4*Jt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Tn*Jt,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),l.jsx("defs",{children:l.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:l.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),A&&(()=>{var ft;const $=b.find(Ye=>Ye.id===A);if(!$)return null;const J=$.currentRect,K=$.isFixed?J.y:J.y-D,we=J.x+J.width/2,Ge=K-8,Ve=K+J.height+8,Ne=Ge>200,kt=Ve<window.innerHeight-100,nt=Math.max(160,Math.min(window.innerWidth-160,we));let At;return Ne?At={left:nt,bottom:window.innerHeight-Ge}:kt?At={left:nt,top:Ve}:At={left:nt,top:Math.max(80,window.innerHeight/2-80)},l.jsx(kd,{element:$.label,placeholder:"Add a note about this section",initialValue:(ft=$.note)!=null?ft:"",submitLabel:U.current?"Save":"Set",onSubmit:oe,onCancel:re,onDelete:U.current?()=>{oe("")}:void 0,isExiting:V,lightMode:!i,style:At})})(),ee&&l.jsx("div",{className:Ae.sizeIndicator,style:{left:ee.x,top:ee.y},"data-feedback-toolbar":!0,children:ee.text}),q.map(($,J)=>l.jsx("div",{className:Ae.guideLine,style:$.axis==="x"?{position:"fixed",left:$.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:$.pos-D,width:"100vw",height:1}},`${$.axis}-${$.pos}-${J}`))]})}var Rm=new Set(["script","style","noscript","link","meta","br","hr"]);function $4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Rm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:jd(c),selector:Ar(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Rm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:jd(h),selector:Ar(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function I4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function P4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Bm(t,n){const i=n?I4(n):$4(),a=P4(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const k=a.right>S.left+5&&a.left<S.right-5,C=a.bottom>S.top+5&&a.top<S.bottom-5;if(k&&S.bottom<=a.top+5){const j=Math.round(a.top-S.bottom);(!c||j<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(k&&S.top>=a.bottom-5){const j=Math.round(S.top-a.bottom);(!u||j<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.right<=a.left+5){const j=Math.round(a.left-S.right);(!d||j<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.left>=a.right-5){const j=Math.round(S.left-a.right);(!h||j<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}}const g=window.innerWidth,_=window.innerHeight,x=U4(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=H4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function H4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function U4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Xx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function qx(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Xx(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function V4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Xx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Uy=15;function Vy(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Uy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Uy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function Y4(t){var d;if(t.length<2)return[];const n=Vy(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Vy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",k=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${k}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Gx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Rm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:Ar(h)}}}return{viewport:t,contentArea:null}}function W4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:Ar(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Kx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Qx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function F4(t){const n=W4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Yy(t,n,i,a="standard"){var C,j,N,B;if(t.length===0)return"";const c=[...t].sort((A,I)=>Math.abs(A.y-I.y)<20?A.x-I.x:A.y-I.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((A,I)=>{var X;const V=((X=Ui[A.type])==null?void 0:X.label)||A.type;u+=`${I+1}. **${V}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}),u;const d=Gx(n);u+=Qx(d),u+=`### Components
`,c.forEach((A,I)=>{var Ce;const V=((Ce=Ui[A.type])==null?void 0:Ce.label)||A.type,X={x:A.x,y:A.y,width:A.width,height:A.height};u+=`${I+1}. **${V}** — \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`;const U=Bm(X),re=qx(U,{includeLeftRight:a==="detailed"||a==="forensic"});for(const Le of re)u+=`   - ${Le}
`;const oe=Kx(X,d);oe&&(u+=`   - CSS: ${oe}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const A of c){const I=h.find(V=>Math.abs(V.y-A.y)<30);I?I.items.push(A):h.push({y:A.y,items:[A]})}if(h.sort((A,I)=>A.y-I.y),h.forEach((A,I)=>{A.items.sort((X,U)=>X.x-U.x);const V=A.items.map(X=>{var U;return((U=Ui[X.type])==null?void 0:U.label)||X.type});if(A.items.length===1){const U=A.items[0].width>n.width*.8;u+=`- Row ${I+1} (y≈${Math.round(A.y)}): ${V[0]}${U?" — full width":""}
`}else u+=`- Row ${I+1} (y≈${Math.round(A.y)}): ${V.join(" | ")} — ${A.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let A=0;A<c.length-1;A++){const I=c[A],V=c[A+1],X=((C=Ui[I.type])==null?void 0:C.label)||I.type,U=((j=Ui[V.type])==null?void 0:j.label)||V.type,G=Math.round(V.y-(I.y+I.height)),re=Math.round(V.x-(I.x+I.width));Math.abs(I.y-V.y)<30?u+=`- ${X} → ${U}: \`${re}px\` horizontal gap
`:u+=`- ${X} → ${U}: \`${G}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let A=0;A<c.length;A++)for(let I=A+1;I<c.length;I++){const V=c[A],X=c[I],U=((N=Ui[V.type])==null?void 0:N.label)||V.type,G=((B=Ui[X.type])==null?void 0:B.label)||X.type,re=Math.round(X.y-(V.y+V.height)),oe=Math.round(X.x-(V.x+V.width));u+=`- ${U} ↔ ${G}: h=\`${oe}px\` v=\`${re}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((A,I)=>{var X;const V=((X=Ui[A.type])==null?void 0:X.label)||A.type;u+=`${I}. ${V} at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(A=>A.type==="navigation"),g=c.some(A=>A.type==="hero"),_=c.some(A=>A.type==="sidebar"),x=c.some(A=>A.type==="footer"),b=c.filter(A=>A.type==="card"),w=c.filter(A=>A.type==="form"),S=c.filter(A=>A.type==="table"),k=c.filter(A=>A.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
`),g&&(u+=`- Hero section with heading, subtext, and call-to-action
`),_&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),w.length>0&&(u+=`- ${w.length} form${w.length>1?"s":""} — add proper labels, validation, and submit handling
`),S.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),k.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),a==="detailed"||a==="forensic"){if(u+=`
### CSS Suggestions
`,_){const A=c.find(I=>I.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(A.width)}px 1fr;\`
`}if(b.length>1){const A=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${A}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Wy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=Gx({width:d,height:h});n!=="compact"&&(u+=Qx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const C=Bm(w,g("original")),j=Bm(S,g("current")),N=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${V4(C,{x:w.x,y:w.y},N)}
`;const B=b?{width:S.width,height:S.height}:void 0,A=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,I=B?`, ${Math.round(B.width)}×${Math.round(B.height)}px`:"",X=qx(j,{includeLeftRight:n==="detailed"||n==="forensic"});if(X.length>0){u+=`  - Suggested position ${A}${I}: ${X[0]}
`;for(let G=1;G<X.length;G++)u+=`    ${X[G]}
`}else u+=`  - Suggested position ${A}${I}
`;const U=Kx(S,p);U&&(u+=`  - CSS: ${U}
`)}const k=F4(_.selector);if(k&&(u+=`  - ${k}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const C=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;C!==_.selector&&(u+=`  - Element: \`${C}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=Y4(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Lm="feedback-annotations-",Zx=7;function Md(t){return`${Lm}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Md(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Zx*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Jx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Md(t),JSON.stringify(n))}catch{}}function X4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Zx*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Lm)){const c=a.slice(Lm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function lc(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Jx(t,a)}var fp="agentation-design-";function q4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${fp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function G4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${fp}${t}`,JSON.stringify(n))}catch{}}function K4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${fp}${t}`)}catch{}}var hp="agentation-rearrange-";function Q4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Z4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function J4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-wireframe-";function e6(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Fy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function Ju(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var eb="agentation-session-";function pp(t){return`${eb}${t}`}function t6(t){if(typeof window>"u")return null;try{return localStorage.getItem(pp(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(pp(t),n)}catch{}}function n6(t){if(!(typeof window>"u"))try{localStorage.removeItem(pp(t))}catch{}}var tb=`${eb}toolbar-hidden`;function s6(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(tb)==="1"}catch{return!1}}function o6(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(tb,"1")}catch{}}async function tm(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Xy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function ll(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function qy(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Xa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var In={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Gy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Ky=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],i6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function a6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Gy;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Gy,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Ky,...t.skipPatterns]:Ky,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:i6,filter:t==null?void 0:t.filter}}function r6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function l6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function c6(t,n){const i=r6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function u6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&c6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var cl=null,d6=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function f6(){if(cl!==null)return cl;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return cl=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&nm(i))return cl=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return cl=!0,!0}return cl=!1,!1}var cc={map:d6};function h6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function m6(t){const n=h6(t);return n?t[n]:null}function yr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function p6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===In.HostComponent||n===In.HostText||n===In.HostHoistable||n===In.HostSingleton||n===In.Fragment||n===In.Mode||n===In.Profiler||n===In.DehydratedFragment||n===In.HostRoot||n===In.HostPortal||n===In.ScopeComponent||n===In.OffscreenComponent||n===In.LegacyHiddenComponent||n===In.CacheComponent||n===In.TracingMarkerComponent||n===In.Throw||n===In.ViewTransitionComponent||n===In.ActivityComponent)return null;if(n===In.ForwardRef){const u=a;if(u!=null&&u.render){const d=yr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:yr(i)}if(n===In.MemoComponent||n===In.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=yr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:yr(i)}if(n===In.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===In.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===In.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?yr(u._result):null}return n===In.SuspenseComponent||n===In.SuspenseListComponent?null:n===In.IncompleteClassComponent||n===In.IncompleteFunctionComponent||n===In.FunctionComponent||n===In.ClassComponent||n===In.IndeterminateComponent?yr(i):null}function _6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function g6(t,n){const i=a6(n),a=i.mode==="all";if(a){const p=cc.map.get(t);if(p!==void 0)return p}if(!f6()){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const c=i.mode==="smart"?l6(t):void 0,u=[];try{let p=m6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=p6(p);_&&!_6(_)&&u6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&cc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&cc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&cc.map.set(t,h),h}var uc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function y6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function jc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function x6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:jc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:jc(i._debugOwner)};i=i.return,a++}return null}function b6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:jc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:jc(n)}}}n=n.return,i++}return null}var ed=new Map;function v6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===uc.FunctionComponent||n===uc.IndeterminateComponent)&&typeof i=="function")return i;if(n===uc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===uc.MemoComponent||n===uc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function w6(){const t=Av,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function S6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function C6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function k6(t){const n=v6(t);if(!n)return null;if(ed.has(n))return ed.get(n);const i=w6();if(!i)return ed.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=S6(d.stack);h&&(c={fileName:C6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:jc(t)||void 0})}}}finally{i.set(a)}return ed.set(n,c),c}function j6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=k6(i);if(c)return c;i=i.return,a++}return null}function Om(t){const n=y6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=x6(n);if(i||(i=b6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=j6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function M6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function T6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Om(i);if(c.found)return c;i=i.parentElement,a++}return Om(t)}var E6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,A6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=E6}var He=A6,dc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Qy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var D6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,N6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=D6}var Fs=N6;function Zy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:k,onContextMenu:C}){const j=(h||p)&&!g,N=j&&x==="delete",B=t.isMultiSelect,A=B?"var(--agentation-color-green)":"var(--agentation-color-accent)",I=c?Fs.exit:u?Fs.clearing:d?"":Fs.enter,V=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return l.jsxs("div",{className:`${Fs.marker} ${B?Fs.multiSelect:""} ${I} ${N?Fs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:N?void 0:A,animationDelay:V},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:X=>{X.stopPropagation(),c||k(t)},onContextMenu:C?X=>{x==="delete"&&(X.preventDefault(),X.stopPropagation(),c||C(t))}:void 0,children:[j?N?l.jsx(Px,{size:B?18:16}):l.jsx(Ww,{size:16}):l.jsx("span",{className:_!==null&&n>=_?Fs.renumber:void 0,children:n+1}),h&&!g&&l.jsxs("div",{className:`${Fs.markerTooltip} ${Fs.enter}`,style:b,children:[l.jsxs("span",{className:Fs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),l.jsx("span",{className:Fs.markerNote,children:t.comment})]})]})}function R6({x:t,y:n,isMultiSelect:i,isExiting:a}){return l.jsx("div",{className:`${Fs.marker} ${Fs.pending} ${i?Fs.multiSelect:""} ${a?Fs.exit:Fs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:l.jsx(Rw,{size:12})})}function Jy({annotation:t,fixed:n}){const i=t.isMultiSelect;return l.jsx("div",{className:`${Fs.marker} ${n?Fs.fixed:""} ${Fs.hovered} ${i?Fs.multiSelect:""} ${Fs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:l.jsx(Px,{size:i?12:10})})}var B6=`.styles-module__switchContainer___Ka-AB {
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
}`,L6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=B6}var sm=L6,om=({className:t="",...n})=>l.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[l.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),l.jsx("div",{className:sm.switchThumb})]}),O6=`.styles-module__checkboxContainer___joqZk {
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
}`,z6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=O6}var td=z6,$6=({className:t="",...n})=>l.jsxs("div",{className:`${td.checkboxContainer} ${t}`,children:[l.jsx("input",{className:td.checkboxInput,type:"checkbox",...n}),l.jsx("svg",{className:td.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{className:td.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),I6=`.styles-module__container___w8eAF {
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
}`,P6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=I6}var e1=P6,t1=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return l.jsxs("div",{className:`${e1.container} ${t}`,...u,children:[l.jsx($6,{id:d,onChange:c,checked:a}),l.jsx("label",{className:e1.label,htmlFor:d,children:n}),i&&l.jsx(kr,{content:i})]})},H6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,U6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=H6}var jt=U6;function V6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return l.jsx("div",{className:`${jt.settingsPanel} ${h?jt.enter:jt.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:l.jsxs("div",{className:jt.settingsPanelContainer,children:[l.jsxs("div",{className:`${jt.settingsPage} ${g==="automations"?jt.slideLeft:""}`,children:[l.jsxs("div",{className:jt.settingsHeader,children:[l.jsx("a",{className:jt.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),l.jsxs("p",{className:jt.settingsVersion,children:["v","3.0.2"]}),l.jsx("button",{className:jt.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:l.jsx("span",{className:jt.themeIconWrapper,children:l.jsx("span",{className:jt.themeIcon,children:i?l.jsx(Vw,{size:20}):l.jsx(Yw,{size:20})},i?"sun":"moon")})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Output Detail",l.jsx(kr,{content:"Controls how much detail is included in the copied output"})]}),l.jsxs("button",{className:jt.cycleButton,onClick:()=>{const S=(dc.findIndex(k=>k.value===t.outputDetail)+1)%dc.length;n({outputDetail:dc[S].value})},children:[l.jsx("span",{className:jt.cycleButtonText,children:(b=dc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),l.jsx("span",{className:jt.cycleDots,children:dc.map(w=>l.jsx("span",{className:`${jt.cycleDot} ${t.outputDetail===w.value?jt.active:""}`},w.value))})]})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop} ${c?"":jt.settingsRowDisabled}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["React Components",l.jsx(kr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),l.jsx(om,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),l.jsxs("div",{className:`${jt.settingsRow} ${jt.settingsRowMarginTop}`,children:[l.jsxs("div",{className:jt.settingsLabel,children:["Hide Until Restart",l.jsx(kr,{content:"Hides the toolbar until you open a new tab"})]}),l.jsx(om,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx("div",{className:`${jt.settingsLabel} ${jt.settingsLabelMarker}`,children:"Marker Color"}),l.jsx("div",{className:jt.colorOptions,children:bc.map(w=>l.jsx("button",{className:`${jt.colorOption} ${t.annotationColorId===w.id?jt.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsx(t1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),l.jsx(t1,{className:jt.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),l.jsx("div",{className:jt.divider}),l.jsxs("button",{className:jt.settingsNavLink,onClick:()=>_("automations"),children:[l.jsx("span",{children:"Manage MCP & Webhooks"}),l.jsxs("span",{className:jt.settingsNavLinkRight,children:[d&&u!=="disconnected"&&l.jsx("span",{className:`${jt.mcpNavIndicator} ${jt[u]}`}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),l.jsxs("div",{className:`${jt.settingsPage} ${jt.automationsPage} ${g==="automations"?jt.slideIn:""}`,children:[l.jsxs("button",{className:jt.settingsBackButton,onClick:()=>_("main"),children:[l.jsx(Xw,{size:16}),l.jsx("span",{children:"Manage MCP & Webhooks"})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:jt.settingsSection,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["MCP Connection",l.jsx(kr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&l.jsx("div",{className:`${jt.mcpStatusDot} ${jt[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),l.jsxs("p",{className:jt.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",l.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:jt.learnMoreLink,children:"Learn more"})]})]}),l.jsx("div",{className:jt.divider}),l.jsxs("div",{className:`${jt.settingsSection} ${jt.settingsSectionGrow}`,children:[l.jsxs("div",{className:jt.settingsRow,children:[l.jsxs("span",{className:jt.automationHeader,children:["Webhooks",l.jsx(kr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),l.jsxs("div",{className:jt.autoSendContainer,children:[l.jsx("label",{htmlFor:"agentation-auto-send",className:`${jt.autoSendLabel} ${t.webhooksEnabled?jt.active:""} ${t.webhookUrl?"":jt.disabled}`,children:"Auto-Send"}),l.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),l.jsx("p",{className:jt.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),l.jsx("textarea",{className:jt.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:i,path:a}=pl(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=g6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var n1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Gi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},bc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],Y6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...bc.map(n=>`
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
    }`].join(""),document.head.appendChild(t)};Y6();function xr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function br(t){return t.status!=="resolved"&&t.status!=="dismissed"}function nd(t){const n=Om(t),i=n.found?n:T6(t);if(i.found&&i.source)return M6(i.source,"path")}function W6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Pt,cn,rn,Fn,ms,ro,pi;const[k,C]=y.useState(!1),[j,N]=y.useState([]),[B,A]=y.useState(!0),[I,V]=y.useState(()=>s6()),[X,U]=y.useState(!1),G=y.useRef(null);y.useEffect(()=>{const E=H=>{const P=G.current;P&&P.contains(H.target)&&H.stopPropagation()},L=["mousedown","click","pointerdown"];return L.forEach(H=>document.body.addEventListener(H,E)),()=>{L.forEach(H=>document.body.removeEventListener(H,E))}},[]);const[re,oe]=y.useState(!1),[Ce,Le]=y.useState(!1),[Q,de]=y.useState(null),[O,ee]=y.useState({x:0,y:0}),[Y,q]=y.useState(null),[ge,D]=y.useState(!1),[ae,se]=y.useState("idle"),[ce,De]=y.useState(!1),[We,Re]=y.useState(!1),[mt,at]=y.useState(null),[Pe,ct]=y.useState(null),[dt,bt]=y.useState([]),[gt,Xt]=y.useState(null),[Ut,dn]=y.useState(null),[_e,me]=y.useState(null),[rt,Ee]=y.useState(null),[_t,Je]=y.useState([]),[tt,Qe]=y.useState(0),[ht,qt]=y.useState(!1),[ut,$]=y.useState(!1),[J,K]=y.useState(!1),[we,Ge]=y.useState(!1),[Ve,Ne]=y.useState(!1),[kt,nt]=y.useState("main"),[At,ft]=y.useState(!1),[Ye,Ot]=y.useState(!1),[Vt,Jt]=y.useState(!1),[qe,Dt]=y.useState([]),[Mt,Bt]=y.useState(null),Nt=y.useRef(!1),[et,Zt]=y.useState(!1),[Tn,os]=y.useState(!1),[Kn,fo]=y.useState(1),[ds,Cs]=y.useState("new-page"),[wn,Nn]=y.useState(""),[fn,pn]=y.useState(!1),[ot,en]=y.useState(null),qs=y.useRef(!1),To=y.useRef({rearrange:null,placements:[]}),zn=y.useRef({rearrange:null,placements:[]}),[Ns,go]=y.useState(0),[Eo,yo]=y.useState(0),[Gs,Hs]=y.useState(0),[Pn,ti]=y.useState(0),ho=y.useRef(new Set),Ts=y.useRef(new Set),fs=y.useRef(null),Es=y.useRef(),As=Ye&&k&&!Vt&&et;y.useEffect(()=>{if(As){os(!1);const E=dl(()=>{os(!0)});return()=>cancelAnimationFrame(E)}else os(!1)},[As]);const xo=y.useRef(new Map),Vn=y.useRef(new Map),Ao=y.useRef(),[Ds,Rs]=y.useState(!1),[Sn,Fo]=y.useState([]),_s=y.useRef(Sn);_s.current=Sn;const[ni,Ei]=y.useState(null),Lo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[fi,Bs]=y.useState(!1),oo=y.useRef(null),[En,bo]=y.useState([]),gs=y.useRef({cmd:!1,shift:!1}),xn=()=>{ft(!0)},hi=()=>{ft(!1)},Ks=()=>{fi||(oo.current=Wt(()=>Bs(!0),850))},mi=()=>{oo.current&&(clearTimeout(oo.current),oo.current=null),Bs(!1),hi()};y.useEffect(()=>()=>{oo.current&&clearTimeout(oo.current)},[]);const[Kt,si]=y.useState(()=>{var E;try{const L=JSON.parse((E=localStorage.getItem("feedback-toolbar-settings"))!=null?E:"");return{...am,...L,annotationColorId:bc.find(H=>H.id===L.annotationColorId)?L.annotationColorId:am.annotationColorId}}catch{return am}}),[Us,Ai]=y.useState(!0),[Di,Xo]=y.useState(!1),mo=()=>{var E;(E=G.current)==null||E.classList.add(He.disableTransitions),Ai(L=>!L),dl(()=>{var L;(L=G.current)==null||L.classList.remove(He.disableTransitions)})},Oo=!1,io="off",[An,vo]=y.useState(x!=null?x:null),zo=y.useRef(!1),[hs,po]=y.useState(_?"connecting":"disconnected"),[an,ks]=y.useState(null),[Ls,Os]=y.useState(!1),[is,Hn]=y.useState(null),ao=y.useRef(!1),[as,zs]=y.useState(new Set),[$o,wo]=y.useState(new Set),[Yn,z]=y.useState(!1),[te,ie]=y.useState(!1),[ye,Ze]=y.useState(!1),it=y.useRef(null),st=y.useRef(null),zt=y.useRef(null),Rn=y.useRef(null),M=y.useRef(!1),W=y.useRef(0),ue=y.useRef(null),fe=y.useRef(null),ke=8,Oe=50,vt=y.useRef(null),Lt=y.useRef(null),yt=y.useRef(null),$e=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(we)Ne(!0);else{ft(!1),nt("main");const E=Wt(()=>Ne(!1),0);return()=>clearTimeout(E)}},[we]);const Yt=k&&B&&!Ye;y.useEffect(()=>{if(Yt){Le(!1),oe(!0),zs(new Set);const E=Wt(()=>{zs(L=>{const H=new Set(L);return j.forEach(P=>H.add(P.id)),H})},350);return()=>clearTimeout(E)}else if(re){Le(!0);const E=Wt(()=>{oe(!1),Le(!1)},250);return()=>clearTimeout(E)}},[Yt]),y.useEffect(()=>{$(!0),Qe(window.scrollY);const E=Jh($e);N(E.filter(br)),n1||(Xo(!0),n1=!0,Wt(()=>Xo(!1),750));try{const L=localStorage.getItem("feedback-toolbar-theme");L!==null&&Ai(L==="dark")}catch{}try{const L=localStorage.getItem("feedback-toolbar-position");if(L){const H=JSON.parse(L);typeof H.x=="number"&&typeof H.y=="number"&&ks(H)}}catch{}},[$e]),y.useEffect(()=>{ut&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,ut]),y.useEffect(()=>{ut&&localStorage.setItem("feedback-toolbar-theme",Us?"dark":"light")},[Us,ut]);const hn=y.useRef(!1);y.useEffect(()=>{const E=hn.current;hn.current=Ls,E&&!Ls&&an&&ut&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(an))},[Ls,an,ut]),y.useEffect(()=>{if(!_||!ut||zo.current)return;zo.current=!0,po("connecting"),(async()=>{try{const L=t6($e),H=x||L;let P=!1;if(H)try{const ne=await Xy(_,H);vo(ne.id),po("connected"),em($e,ne.id),P=!0;const be=Jh($e),Xe=new Set(ne.annotations.map(lt=>lt.id)),Ke=be.filter(lt=>!Xe.has(lt.id));if(Ke.length>0){const St=`${typeof window<"u"?window.location.origin:""}${$e}`,tn=(await Promise.allSettled(Ke.map(Ct=>ll(_,ne.id,{...Ct,sessionId:ne.id,url:St})))).map((Ct,pt)=>Ct.status==="fulfilled"?Ct.value:(console.warn("[Agentation] Failed to sync annotation:",Ct.reason),Ke[pt])),nn=[...ne.annotations,...tn];N(nn.filter(br)),lc($e,nn.filter(br),ne.id)}else N(ne.annotations.filter(br)),lc($e,ne.annotations.filter(br),ne.id)}catch(ne){console.warn("[Agentation] Could not join session, creating new:",ne),n6($e)}if(!P){const ne=typeof window<"u"?window.location.href:"/",be=await tm(_,ne);vo(be.id),po("connected"),em($e,be.id),b==null||b(be.id);const Xe=X4(),Ke=typeof window<"u"?window.location.origin:"",lt=[];for(const[St,$t]of Xe){const tn=$t.filter(pt=>!pt._syncedTo);if(tn.length===0)continue;const nn=`${Ke}${St}`,Ct=St===$e;lt.push((async()=>{try{const pt=Ct?be:await tm(_,nn),bs=(await Promise.allSettled(tn.map(Mn=>ll(_,pt.id,{...Mn,sessionId:pt.id,url:nn})))).map((Mn,Un)=>Mn.status==="fulfilled"?Mn.value:(console.warn("[Agentation] Failed to sync annotation:",Mn.reason),tn[Un])).filter(br);if(lc(St,bs,pt.id),Ct){const Mn=new Set(tn.map(Un=>Un.id));N(Un=>{const Gt=Un.filter(Qt=>!Mn.has(Qt.id));return[...bs,...Gt]})}}catch(pt){console.warn(`[Agentation] Failed to sync annotations for ${St}:`,pt)}})())}await Promise.allSettled(lt)}}catch(L){po("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",L)}})()},[_,x,ut,b,$e]),y.useEffect(()=>{if(!_||!ut)return;const E=async()=>{try{(await fetch(`${_}/health`)).ok?po("connected"):po("disconnected")}catch{po("disconnected")}};E();const L=Kw(E,1e4);return()=>clearInterval(L)},[_,ut]),y.useEffect(()=>{if(!_||!ut||!An)return;const E=new EventSource(`${_}/sessions/${An}/events`),L=["resolved","dismissed"],H=P=>{var ne;try{const be=JSON.parse(P.data);if(L.includes((ne=be.payload)==null?void 0:ne.status)){const Xe=be.payload.id,Ke=be.payload.kind;if(Ke==="placement"){for(const[lt,St]of xo.current)if(St===Xe){xo.current.delete(lt),Dt($t=>$t.filter(tn=>tn.id!==lt));break}}else if(Ke==="rearrange"){for(const[lt,St]of Vn.current)if(St===Xe){Vn.current.delete(lt),en($t=>{if(!$t)return null;const tn=$t.sections.filter(nn=>nn.id!==lt);return tn.length===0?null:{...$t,sections:tn}});break}}else wo(lt=>new Set(lt).add(Xe)),Wt(()=>{N(lt=>lt.filter(St=>St.id!==Xe)),wo(lt=>{const St=new Set(lt);return St.delete(Xe),St})},150)}}catch{}};return E.addEventListener("annotation.updated",H),()=>{E.removeEventListener("annotation.updated",H),E.close()}},[_,ut,An]),y.useEffect(()=>{if(!_||!ut)return;const E=fe.current==="disconnected",L=hs==="connected";fe.current=hs,E&&L&&(async()=>{try{const P=Jh($e);if(P.length===0)return;const be=`${typeof window<"u"?window.location.origin:""}${$e}`;let Xe=An,Ke=[];if(Xe)try{Ke=(await Xy(_,Xe)).annotations}catch{Xe=null}Xe||(Xe=(await tm(_,be)).id,vo(Xe),em($e,Xe));const lt=new Set(Ke.map($t=>$t.id)),St=P.filter($t=>!lt.has($t.id));if(St.length>0){const tn=(await Promise.allSettled(St.map(pt=>ll(_,Xe,{...pt,sessionId:Xe,url:be})))).map((pt,ys)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",pt.reason),St[ys])),Ct=[...Ke,...tn].filter(br);N(Ct),lc($e,Ct,Xe)}}catch(P){console.warn("[Agentation] Failed to sync on reconnect:",P)}})()},[hs,_,ut,An,$e]);const kn=y.useCallback(()=>{X||(U(!0),Ge(!1),C(!1),Wt(()=>{o6(!0),V(!0),U(!1)},400))},[X]);y.useEffect(()=>{if(!i||!ut||!t||t.length===0||j.length>0)return;const E=[];return E.push(Wt(()=>{C(!0)},n-200)),t.forEach((L,H)=>{const P=n+H*300;E.push(Wt(()=>{const ne=document.querySelector(L.selector);if(!ne)return;const be=ne.getBoundingClientRect(),{name:Xe,path:Ke}=pl(ne),lt={id:`demo-${Date.now()}-${H}`,x:(be.left+be.width/2)/window.innerWidth*100,y:be.top+be.height/2+window.scrollY,comment:L.comment,element:Xe,elementPath:Ke,timestamp:Date.now(),selectedText:L.selectedText,boundingBox:{x:be.left,y:be.top+window.scrollY,width:be.width,height:be.height},nearbyText:ac(ne),cssClasses:rc(ne)};N(St=>[...St,lt])},P))}),()=>{E.forEach(clearTimeout)}},[i,ut,t,n]),y.useEffect(()=>{const E=()=>{Qe(window.scrollY),qt(!0),yt.current&&clearTimeout(yt.current),yt.current=Wt(()=>{qt(!1)},150)};return window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),yt.current&&clearTimeout(yt.current)}},[]),y.useEffect(()=>{ut&&j.length>0?An?lc($e,j,An):Jx($e,j):ut&&j.length===0&&localStorage.removeItem(Md($e))},[j,$e,ut,An]),y.useEffect(()=>{if(ut&&!Nt.current){Nt.current=!0;const E=q4($e);E.length>0&&Dt(E)}},[ut,$e]),y.useEffect(()=>{ut&&Nt.current&&!et&&(qe.length>0?G4($e,qe):K4($e))},[qe,$e,ut,et]),y.useEffect(()=>{if(ut&&!qs.current){qs.current=!0;const E=Q4($e);if(E){const L={...E,sections:E.sections.map(H=>{var P;return{...H,currentRect:(P=H.currentRect)!=null?P:{...H.originalRect}}})};en(L)}}},[ut,$e]),y.useEffect(()=>{ut&&qs.current&&!et&&(ot?Z4($e,ot):J4($e))},[ot,$e,ut,et]);const Bn=y.useRef(!1);y.useEffect(()=>{if(ut&&!Bn.current){Bn.current=!0;const E=e6($e);E&&(zn.current={rearrange:E.rearrange,placements:E.placements||[]},E.purpose&&Nn(E.purpose))}},[ut,$e]),y.useEffect(()=>{var L,H,P,ne,be;if(!ut||!Bn.current)return;const E=zn.current;et?((H=(L=ot==null?void 0:ot.sections)==null?void 0:L.length)!=null?H:0)>0||qe.length>0||wn?Fy($e,{rearrange:ot,placements:qe,purpose:wn}):Ju($e):((be=(ne=(P=E.rearrange)==null?void 0:P.sections)==null?void 0:ne.length)!=null?be:0)>0||E.placements.length>0||wn?Fy($e,{rearrange:E.rearrange,placements:E.placements,purpose:wn}):Ju($e)},[ot,qe,wn,et,$e,ut]),y.useEffect(()=>{Ye&&!ot&&en({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ye,ot]),y.useEffect(()=>{if(!_||!An)return;const E=xo.current,L=new Set(qe.map(H=>H.id));for(const H of qe){if(E.has(H.id))continue;E.set(H.id,"");const P=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:$e;ll(_,An,{id:H.id,x:H.x/window.innerWidth*100,y:H.y,comment:`Place ${H.type} at (${Math.round(H.x)}, ${Math.round(H.y)}), ${H.width}×${H.height}px${H.text?` — "${H.text}"`:""}`,element:`[design:${H.type}]`,elementPath:"[placement]",timestamp:H.timestamp,url:P,intent:"change",severity:"important",kind:"placement",placement:{componentType:H.type,width:H.width,height:H.height,scrollY:H.scrollY,text:H.text}}).then(ne=>{E.has(H.id)&&E.set(H.id,ne.id)}).catch(ne=>{console.warn("[Agentation] Failed to sync placement annotation:",ne),E.delete(H.id)})}for(const[H,P]of E)L.has(H)||(E.delete(H),P&&Xa(_,P).catch(()=>{}))},[qe,_,An,$e]),y.useEffect(()=>{if(!(!_||!An))return Ao.current&&clearTimeout(Ao.current),Ao.current=Wt(()=>{const E=Vn.current;if(!ot||ot.sections.length===0){for(const[,P]of E)P&&Xa(_,P).catch(()=>{});E.clear();return}const L=new Set(ot.sections.map(P=>P.id)),H=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:$e;for(const P of ot.sections){const ne=P.originalRect,be=P.currentRect;if(!(Math.abs(ne.x-be.x)>1||Math.abs(ne.y-be.y)>1||Math.abs(ne.width-be.width)>1||Math.abs(ne.height-be.height)>1)){const lt=E.get(P.id);lt&&(E.delete(P.id),Xa(_,lt).catch(()=>{}));continue}const Ke=E.get(P.id);Ke?qy(_,Ke,{comment:`Move ${P.label} section (${P.tagName}) — from (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)} to (${Math.round(be.x)},${Math.round(be.y)}) ${Math.round(be.width)}×${Math.round(be.height)}`}).catch(lt=>{console.warn("[Agentation] Failed to update rearrange annotation:",lt)}):(E.set(P.id,""),ll(_,An,{id:P.id,x:be.x/window.innerWidth*100,y:be.y,comment:`Move ${P.label} section (${P.tagName}) — from (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}×${Math.round(ne.height)} to (${Math.round(be.x)},${Math.round(be.y)}) ${Math.round(be.width)}×${Math.round(be.height)}`,element:P.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:H,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:P.selector,label:P.label,tagName:P.tagName,originalRect:ne,currentRect:be}}).then(lt=>{E.has(P.id)&&E.set(P.id,lt.id)}).catch(lt=>{console.warn("[Agentation] Failed to sync rearrange annotation:",lt),E.delete(P.id)}))}for(const[P,ne]of E)L.has(P)||(E.delete(P),ne&&Xa(_,ne).catch(()=>{}))},300),()=>{Ao.current&&clearTimeout(Ao.current)}},[ot,_,An,$e]);const mn=y.useRef(new Map);y.useLayoutEffect(()=>{var H;const E=(H=ot==null?void 0:ot.sections)!=null?H:[],L=new Set;if((Ye||Vt)&&k)for(const P of E){L.add(P.id);try{const ne=document.querySelector(P.selector);if(!ne)continue;if(!mn.current.has(P.id)){const be={transform:ne.style.transform,transformOrigin:ne.style.transformOrigin,opacity:ne.style.opacity,position:ne.style.position,zIndex:ne.style.zIndex,display:ne.style.display},Xe=[];let Ke=ne.parentElement;for(;Ke&&Ke!==document.body;){const St=getComputedStyle(Ke);(St.overflow!=="visible"||St.overflowX!=="visible"||St.overflowY!=="visible")&&(Xe.push({el:Ke,overflow:Ke.style.overflow}),Ke.style.overflow="visible"),Ke=Ke.parentElement}getComputedStyle(ne).display==="inline"&&(ne.style.display="inline-block"),mn.current.set(P.id,{el:ne,origStyles:be,ancestors:Xe}),ne.style.transformOrigin="top left",ne.style.zIndex="9999"}}catch{}}for(const[P,ne]of mn.current)if(!L.has(P)){const{el:be,origStyles:Xe,ancestors:Ke}=ne;be.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",be.style.transform=Xe.transform,be.style.transformOrigin=Xe.transformOrigin,be.style.opacity=Xe.opacity,be.style.position=Xe.position,be.style.zIndex=Xe.zIndex,mn.current.delete(P),Wt(()=>{be.style.transition="",be.style.display=Xe.display;for(const lt of Ke)lt.el.style.overflow=lt.overflow},450)}},[ot,Ye,Vt,k]),y.useEffect(()=>()=>{for(const[,E]of mn.current){const{el:L,origStyles:H,ancestors:P}=E;L.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",L.style.transform=H.transform,L.style.transformOrigin=H.transformOrigin,L.style.opacity=H.opacity,L.style.position=H.position,L.style.zIndex=H.zIndex,Wt(()=>{L.style.transition="",L.style.display=H.display;for(const ne of P)ne.el.style.overflow=ne.overflow},450)}mn.current.clear()},[]);const rs=y.useCallback(()=>{Jt(!0),Ot(!1),Bt(null),clearTimeout(Es.current),Es.current=Wt(()=>{Jt(!1)},300)},[]),Qs=y.useCallback(()=>{Ye&&(Jt(!0),Ot(!1),Bt(null),clearTimeout(Es.current),Es.current=Wt(()=>{Jt(!1)},300)),C(!1)},[Ye]),jn=y.useCallback(()=>{J||(Zw(),K(!0))},[J]),Wn=y.useCallback(()=>{J&&(Ny(),K(!1))},[J]),Vs=y.useCallback(()=>{J?Wn():jn()},[J,jn,Wn]),Ni=y.useCallback(()=>{if(En.length===0)return;const E=En[0],L=E.element,H=En.length>1,P=En.map(ne=>ne.element.getBoundingClientRect());if(H){const ne={left:Math.min(...P.map(pt=>pt.left)),top:Math.min(...P.map(pt=>pt.top)),right:Math.max(...P.map(pt=>pt.right)),bottom:Math.max(...P.map(pt=>pt.bottom))},be=En.slice(0,5).map(pt=>pt.name).join(", "),Xe=En.length>5?` +${En.length-5} more`:"",Ke=P.map(pt=>({x:pt.left,y:pt.top+window.scrollY,width:pt.width,height:pt.height})),St=En[En.length-1].element,$t=P[P.length-1],tn=$t.left+$t.width/2,nn=$t.top+$t.height/2,Ct=rm(St);q({x:tn/window.innerWidth*100,y:Ct?nn:nn+window.scrollY,clientY:nn,element:`${En.length} elements: ${be}${Xe}`,elementPath:"multi-select",boundingBox:{x:ne.left,y:ne.top+window.scrollY,width:ne.right-ne.left,height:ne.bottom-ne.top},isMultiSelect:!0,isFixed:Ct,elementBoundingBoxes:Ke,multiSelectElements:En.map(pt=>pt.element),targetElement:St,fullPath:Ku(L),accessibility:Gu(L),computedStyles:qu(L),computedStylesObj:Xu(L),nearbyElements:Fu(L),cssClasses:rc(L),nearbyText:ac(L),sourceFile:nd(L)})}else{const ne=P[0],be=rm(L);q({x:ne.left/window.innerWidth*100,y:be?ne.top:ne.top+window.scrollY,clientY:ne.top,element:E.name,elementPath:E.path,boundingBox:{x:ne.left,y:be?ne.top:ne.top+window.scrollY,width:ne.width,height:ne.height},isFixed:be,fullPath:Ku(L),accessibility:Gu(L),computedStyles:qu(L),computedStylesObj:Xu(L),nearbyElements:Fu(L),cssClasses:rc(L),nearbyText:ac(L),reactComponents:E.reactComponents,sourceFile:nd(L)})}bo([]),de(null)},[En]);y.useEffect(()=>{k||(q(null),me(null),Ee(null),Je([]),de(null),Ge(!1),bo([]),gs.current={cmd:!1,shift:!1},J&&Wn())},[k,J,Wn]),y.useEffect(()=>()=>{Ny()},[]),y.useEffect(()=>{if(!k)return;const E=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),L=":not([data-agentation-root]):not([data-agentation-root] *)",H=document.createElement("style");return H.id="feedback-cursor-styles",H.textContent=`
      body ${L} {
        cursor: crosshair !important;
      }

      body :is(${E})${L} {
        cursor: text !important;
      }
    `,document.head.appendChild(H),()=>{const P=document.getElementById("feedback-cursor-styles");P&&P.remove()}},[k]),y.useEffect(()=>{if(ni!==null&&k)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ni,k]),y.useEffect(()=>{if(!k||Y||Ds||Ye)return;const E=L=>{const H=L.composedPath()[0]||L.target;if(Ho(H,"[data-feedback-toolbar]")){de(null);return}const P=xr(L.clientX,L.clientY);if(!P||Ho(P,"[data-feedback-toolbar]")){de(null);return}const{name:ne,elementName:be,path:Xe,reactComponents:Ke}=im(P,io),lt=P.getBoundingClientRect();de({element:ne,elementName:be,elementPath:Xe,rect:lt,reactComponents:Ke}),ee({x:L.clientX,y:L.clientY})};return document.addEventListener("mousemove",E),()=>document.removeEventListener("mousemove",E)},[k,Y,Ds,Ye,io,Sn]);const ta=y.useCallback(E=>{var L;if(me(E),at(null),ct(null),bt([]),(L=E.elementBoundingBoxes)!=null&&L.length){const H=[];for(const P of E.elementBoundingBoxes){const ne=P.x+P.width/2,be=P.y+P.height/2-window.scrollY,Xe=xr(ne,be);Xe&&H.push(Xe)}Je(H),Ee(null)}else if(E.boundingBox){const H=E.boundingBox,P=H.x+H.width/2,ne=E.isFixed?H.y+H.height/2:H.y+H.height/2-window.scrollY,be=xr(P,ne);if(be){const Xe=be.getBoundingClientRect(),Ke=Xe.width/H.width,lt=Xe.height/H.height;Ke<.5||lt<.5?Ee(null):Ee(be)}else Ee(null);Je([])}else Ee(null),Je([])},[]);y.useEffect(()=>{if(!k||Ds||Ye)return;const E=L=>{var xs,bs;if(M.current){M.current=!1;return}const H=L.composedPath()[0]||L.target;if(Ho(H,"[data-feedback-toolbar]")||Ho(H,"[data-annotation-popup]")||Ho(H,"[data-annotation-marker]"))return;if(L.metaKey&&L.shiftKey&&!Y&&!_e){L.preventDefault(),L.stopPropagation();const Mn=xr(L.clientX,L.clientY);if(!Mn)return;const Un=Mn.getBoundingClientRect(),{name:Gt,path:Qt,reactComponents:vs}=im(Mn,io),Dn=En.findIndex(lo=>lo.element===Mn);Dn>=0?bo(lo=>lo.filter((No,ls)=>ls!==Dn)):bo(lo=>[...lo,{element:Mn,rect:Un,name:Gt,path:Qt,reactComponents:vs!=null?vs:void 0}]);return}const P=Ho(H,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&P&&(L.preventDefault(),L.stopPropagation()),Y){if(P&&!Kt.blockInteractions)return;L.preventDefault(),(xs=vt.current)==null||xs.shake();return}if(_e){if(P&&!Kt.blockInteractions)return;L.preventDefault(),(bs=Lt.current)==null||bs.shake();return}L.preventDefault();const ne=xr(L.clientX,L.clientY);if(!ne)return;const{name:be,path:Xe,reactComponents:Ke}=im(ne,io),lt=ne.getBoundingClientRect(),St=L.clientX/window.innerWidth*100,$t=rm(ne),tn=$t?L.clientY:L.clientY+window.scrollY,nn=window.getSelection();let Ct;nn&&nn.toString().trim().length>0&&(Ct=nn.toString().trim().slice(0,500));const pt=Xu(ne),ys=qu(ne);q({x:St,y:tn,clientY:L.clientY,element:be,elementPath:Xe,selectedText:Ct,boundingBox:{x:lt.left,y:$t?lt.top:lt.top+window.scrollY,width:lt.width,height:lt.height},nearbyText:ac(ne),cssClasses:rc(ne),isFixed:$t,fullPath:Ku(ne),accessibility:Gu(ne),computedStyles:ys,computedStylesObj:pt,nearbyElements:Fu(ne),reactComponents:Ke!=null?Ke:void 0,sourceFile:nd(ne),targetElement:ne}),de(null)};return document.addEventListener("click",E,!0),()=>document.removeEventListener("click",E,!0)},[k,Ds,Ye,Y,_e,Kt.blockInteractions,io,En]),y.useEffect(()=>{if(!k)return;const E=P=>{P.key==="Meta"&&(gs.current.cmd=!0),P.key==="Shift"&&(gs.current.shift=!0)},L=P=>{const ne=gs.current.cmd&&gs.current.shift;P.key==="Meta"&&(gs.current.cmd=!1),P.key==="Shift"&&(gs.current.shift=!1);const be=gs.current.cmd&&gs.current.shift;ne&&!be&&En.length>0&&Ni()},H=()=>{gs.current={cmd:!1,shift:!1},bo([])};return document.addEventListener("keydown",E),document.addEventListener("keyup",L),window.addEventListener("blur",H),()=>{document.removeEventListener("keydown",E),document.removeEventListener("keyup",L),window.removeEventListener("blur",H)}},[k,En,Ni]),y.useEffect(()=>{if(!k||Y||Ds||Ye)return;const E=L=>{const H=L.composedPath()[0]||L.target;Ho(H,"[data-feedback-toolbar]")||Ho(H,"[data-annotation-marker]")||Ho(H,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(H.tagName)||H.isContentEditable||(L.preventDefault(),it.current={x:L.clientX,y:L.clientY})};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[k,Y,Ds,Ye]),y.useEffect(()=>{if(!k||Y)return;const E=L=>{if(!it.current)return;const H=L.clientX-it.current.x,P=L.clientY-it.current.y,ne=H*H+P*P,be=ke*ke;if(!ye&&ne>=be&&(st.current=it.current,Ze(!0),L.preventDefault()),(ye||ne>=be)&&st.current){if(zt.current){const Gt=Math.min(st.current.x,L.clientX),Qt=Math.min(st.current.y,L.clientY),vs=Math.abs(L.clientX-st.current.x),Dn=Math.abs(L.clientY-st.current.y);zt.current.style.transform=`translate(${Gt}px, ${Qt}px)`,zt.current.style.width=`${vs}px`,zt.current.style.height=`${Dn}px`}const Xe=Date.now();if(Xe-W.current<Oe)return;W.current=Xe;const Ke=st.current.x,lt=st.current.y,St=Math.min(Ke,L.clientX),$t=Math.min(lt,L.clientY),tn=Math.max(Ke,L.clientX),nn=Math.max(lt,L.clientY),Ct=(St+tn)/2,pt=($t+nn)/2,ys=new Set,xs=[[St,$t],[tn,$t],[St,nn],[tn,nn],[Ct,pt],[Ct,$t],[Ct,nn],[St,pt],[tn,pt]];for(const[Gt,Qt]of xs){const vs=document.elementsFromPoint(Gt,Qt);for(const Dn of vs)Dn instanceof HTMLElement&&ys.add(Dn)}const bs=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Gt of bs)if(Gt instanceof HTMLElement){const Qt=Gt.getBoundingClientRect(),vs=Qt.left+Qt.width/2,Dn=Qt.top+Qt.height/2,lo=vs>=St&&vs<=tn&&Dn>=$t&&Dn<=nn,No=Math.min(Qt.right,tn)-Math.max(Qt.left,St),ls=Math.min(Qt.bottom,nn)-Math.max(Qt.top,$t),_i=No>0&&ls>0?No*ls:0,Ri=Qt.width*Qt.height,Bi=Ri>0?_i/Ri:0;(lo||Bi>.5)&&ys.add(Gt)}const Mn=[],Un=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Gt of ys){if(Ho(Gt,"[data-feedback-toolbar]")||Ho(Gt,"[data-annotation-marker]"))continue;const Qt=Gt.getBoundingClientRect();if(!(Qt.width>window.innerWidth*.8&&Qt.height>window.innerHeight*.5)&&!(Qt.width<10||Qt.height<10)&&Qt.left<tn&&Qt.right>St&&Qt.top<nn&&Qt.bottom>$t){const vs=Gt.tagName;let Dn=Un.has(vs);if(!Dn&&(vs==="DIV"||vs==="SPAN")){const lo=Gt.textContent&&Gt.textContent.trim().length>0,No=Gt.onclick!==null||Gt.getAttribute("role")==="button"||Gt.getAttribute("role")==="link"||Gt.classList.contains("clickable")||Gt.hasAttribute("data-clickable");(lo||No)&&!Gt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Dn=!0)}if(Dn){let lo=!1;for(const No of Mn)if(No.left<=Qt.left&&No.right>=Qt.right&&No.top<=Qt.top&&No.bottom>=Qt.bottom){lo=!0;break}lo||Mn.push(Qt)}}}if(Rn.current){const Gt=Rn.current;for(;Gt.children.length>Mn.length;)Gt.removeChild(Gt.lastChild);Mn.forEach((Qt,vs)=>{let Dn=Gt.children[vs];Dn||(Dn=document.createElement("div"),Dn.className=He.selectedElementHighlight,Gt.appendChild(Dn)),Dn.style.transform=`translate(${Qt.left}px, ${Qt.top}px)`,Dn.style.width=`${Qt.width}px`,Dn.style.height=`${Qt.height}px`})}}};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[k,Y,ye,ke]),y.useEffect(()=>{if(!k)return;const E=L=>{const H=ye,P=st.current;if(ye&&P){M.current=!0;const ne=Math.min(P.x,L.clientX),be=Math.min(P.y,L.clientY),Xe=Math.max(P.x,L.clientX),Ke=Math.max(P.y,L.clientY),lt=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ct=>{if(!(Ct instanceof HTMLElement)||Ho(Ct,"[data-feedback-toolbar]")||Ho(Ct,"[data-annotation-marker]"))return;const pt=Ct.getBoundingClientRect();pt.width>window.innerWidth*.8&&pt.height>window.innerHeight*.5||pt.width<10||pt.height<10||pt.left<Xe&&pt.right>ne&&pt.top<Ke&&pt.bottom>be&&lt.push({element:Ct,rect:pt})});const $t=lt.filter(({element:Ct})=>!lt.some(({element:pt})=>pt!==Ct&&Ct.contains(pt))),tn=L.clientX/window.innerWidth*100,nn=L.clientY+window.scrollY;if($t.length>0){const Ct=$t.reduce((Un,{rect:Gt})=>({left:Math.min(Un.left,Gt.left),top:Math.min(Un.top,Gt.top),right:Math.max(Un.right,Gt.right),bottom:Math.max(Un.bottom,Gt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),pt=$t.slice(0,5).map(({element:Un})=>pl(Un).name).join(", "),ys=$t.length>5?` +${$t.length-5} more`:"",xs=$t[0].element,bs=Xu(xs),Mn=qu(xs);q({x:tn,y:nn,clientY:L.clientY,element:`${$t.length} elements: ${pt}${ys}`,elementPath:"multi-select",boundingBox:{x:Ct.left,y:Ct.top+window.scrollY,width:Ct.right-Ct.left,height:Ct.bottom-Ct.top},isMultiSelect:!0,fullPath:Ku(xs),accessibility:Gu(xs),computedStyles:Mn,computedStylesObj:bs,nearbyElements:Fu(xs),cssClasses:rc(xs),nearbyText:ac(xs),sourceFile:nd(xs)})}else{const Ct=Math.abs(Xe-ne),pt=Math.abs(Ke-be);Ct>20&&pt>20&&q({x:tn,y:nn,clientY:L.clientY,element:"Area selection",elementPath:`region at (${Math.round(ne)}, ${Math.round(be)})`,boundingBox:{x:ne,y:be+window.scrollY,width:Ct,height:pt},isMultiSelect:!0})}de(null)}else H&&(M.current=!0);it.current=null,st.current=null,Ze(!1),Rn.current&&(Rn.current.innerHTML="")};return document.addEventListener("mouseup",E),()=>document.removeEventListener("mouseup",E)},[k,ye]);const Io=y.useCallback(async(E,L,H)=>{const P=Kt.webhookUrl||w;if(!P||!Kt.webhooksEnabled&&!H)return!1;try{return(await fetch(P,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:E,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...L})})).ok}catch(ne){return console.warn("[Agentation] Webhook failed:",ne),!1}},[w,Kt.webhookUrl,Kt.webhooksEnabled]),Dr=y.useCallback(E=>{var H;if(!Y)return;const L={id:Date.now().toString(),x:Y.x,y:Y.y,comment:E,element:Y.element,elementPath:Y.elementPath,timestamp:Date.now(),selectedText:Y.selectedText,boundingBox:Y.boundingBox,nearbyText:Y.nearbyText,cssClasses:Y.cssClasses,isMultiSelect:Y.isMultiSelect,isFixed:Y.isFixed,fullPath:Y.fullPath,accessibility:Y.accessibility,computedStyles:Y.computedStyles,nearbyElements:Y.nearbyElements,reactComponents:Y.reactComponents,sourceFile:Y.sourceFile,elementBoundingBoxes:Y.elementBoundingBoxes,..._&&An?{sessionId:An,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};N(P=>[...P,L]),ue.current=L.id,Wt(()=>{ue.current=null},300),Wt(()=>{zs(P=>new Set(P).add(L.id))},250),a==null||a(L),Io("annotation.add",{annotation:L}),z(!0),Wt(()=>{q(null),z(!1)},150),(H=window.getSelection())==null||H.removeAllRanges(),_&&An&&ll(_,An,L).then(P=>{P.id!==L.id&&(N(ne=>ne.map(be=>be.id===L.id?{...be,id:P.id}:be)),zs(ne=>{const be=new Set(ne);return be.delete(L.id),be.add(P.id),be}))}).catch(P=>{console.warn("[Agentation] Failed to sync annotation:",P)})},[Y,a,Io,_,An]),va=y.useCallback(()=>{z(!0),Wt(()=>{q(null),z(!1)},150)},[]),wa=y.useCallback(E=>{const L=j.findIndex(P=>P.id===E),H=j[L];(_e==null?void 0:_e.id)===E&&(ie(!0),Wt(()=>{me(null),Ee(null),Je([]),ie(!1)},150)),Xt(E),wo(P=>new Set(P).add(E)),H&&(c==null||c(H),Io("annotation.delete",{annotation:H})),_&&Xa(_,E).catch(P=>{console.warn("[Agentation] Failed to delete annotation from server:",P)}),Wt(()=>{N(P=>P.filter(ne=>ne.id!==E)),wo(P=>{const ne=new Set(P);return ne.delete(E),ne}),Xt(null),L<j.length-1&&(dn(L),Wt(()=>dn(null),200))},150)},[j,_e,c,Io,_]),na=y.useCallback(E=>{var L;if(!E){at(null),ct(null),bt([]);return}if(at(E.id),(L=E.elementBoundingBoxes)!=null&&L.length){const H=[];for(const P of E.elementBoundingBoxes){const ne=P.x+P.width/2,be=P.y+P.height/2-window.scrollY,Ke=document.elementsFromPoint(ne,be).find(lt=>!lt.closest("[data-annotation-marker]")&&!lt.closest("[data-agentation-root]"));Ke&&H.push(Ke)}bt(H),ct(null)}else if(E.boundingBox){const H=E.boundingBox,P=H.x+H.width/2,ne=E.isFixed?H.y+H.height/2:H.y+H.height/2-window.scrollY,be=xr(P,ne);if(be){const Xe=be.getBoundingClientRect(),Ke=Xe.width/H.width,lt=Xe.height/H.height;Ke<.5||lt<.5?ct(null):ct(be)}else ct(null);bt([])}else ct(null),bt([])},[]),Nr=y.useCallback(E=>{if(!_e)return;const L={..._e,comment:E};N(H=>H.map(P=>P.id===_e.id?L:P)),u==null||u(L),Io("annotation.update",{annotation:L}),_&&qy(_,_e.id,{comment:E}).catch(H=>{console.warn("[Agentation] Failed to update annotation on server:",H)}),ie(!0),Wt(()=>{me(null),Ee(null),Je([]),ie(!1)},150)},[_e,u,Io,_]),Sa=y.useCallback(()=>{ie(!0),Wt(()=>{me(null),Ee(null),Je([]),ie(!1)},150)},[]),Do=y.useCallback(()=>{const E=j.length,L=qe.length>0||!!ot;if(E===0&&Sn.length===0&&!L)return;if(d==null||d(j),Io("annotations.clear",{annotations:j}),_){Promise.all(j.map(ne=>Xa(_,ne.id).catch(be=>{console.warn("[Agentation] Failed to delete annotation from server:",be)})));for(const[,ne]of xo.current)ne&&Xa(_,ne).catch(()=>{});xo.current.clear();for(const[,ne]of Vn.current)ne&&Xa(_,ne).catch(()=>{});Vn.current.clear()}Re(!0),De(!0),Fo([]);const H=Lo.current;if(H){const ne=H.getContext("2d");ne&&ne.clearRect(0,0,H.width,H.height)}(qe.length>0||ot)&&(Hs(ne=>ne+1),ti(ne=>ne+1),Wt(()=>{Dt([]),en(null)},200)),et&&Zt(!1),wn&&Nn(""),zn.current={rearrange:null,placements:[]},Ju($e);const P=E*30+200;Wt(()=>{N([]),zs(new Set),localStorage.removeItem(Md($e)),Re(!1)},P),Wt(()=>De(!1),1500)},[$e,j,Sn,qe,ot,et,wn,d,Io,_]),Ca=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:$e,L=Ye&&et;let H;if(L){if(qe.length===0&&!ot&&!wn)return;H=""}else{if(H=Qy(j,E,Kt.outputDetail),!H&&Sn.length===0&&qe.length===0&&!ot)return;H||(H=`## Page Feedback: ${E}
`)}if(!L&&Sn.length>0){const P=new Set;for(const Ke of j)Ke.drawingIndex!=null&&P.add(Ke.drawingIndex);const ne=Lo.current;ne&&(ne.style.visibility="hidden");const be=[],Xe=window.scrollY;for(let Ke=0;Ke<Sn.length;Ke++){if(P.has(Ke))continue;const lt=Sn[Ke];if(lt.points.length<2)continue;const St=lt.fixed?lt.points:lt.points.map(Qn=>({x:Qn.x,y:Qn.y-Xe}));let $t=1/0,tn=1/0,nn=-1/0,Ct=-1/0;for(const Qn of St)$t=Math.min($t,Qn.x),tn=Math.min(tn,Qn.y),nn=Math.max(nn,Qn.x),Ct=Math.max(Ct,Qn.y);const pt=nn-$t,ys=Ct-tn,xs=Math.hypot(pt,ys),bs=St[0],Mn=St[St.length-1],Un=Math.hypot(Mn.x-bs.x,Mn.y-bs.y);let Gt;const Qt=Un<xs*.35,vs=pt/Math.max(ys,1);if(Qt&&xs>20){const Qn=Math.max(pt,ys)*.15;let Li=0;for(const Yi of St){const $c=Yi.x-$t<Qn,Yd=nn-Yi.x<Qn,Wd=Yi.y-tn<Qn,Fd=Ct-Yi.y<Qn;($c||Yd)&&(Wd||Fd)&&Li++}Gt=Li>St.length*.15?"box":"circle"}else vs>3&&ys<40?Gt="underline":Un>xs*.5?Gt="arrow":Gt="drawing";const Dn=Math.min(10,St.length),lo=Math.max(1,Math.floor(St.length/Dn)),No=new Set,ls=[],_i=[bs];for(let Qn=lo;Qn<St.length-1;Qn+=lo)_i.push(St[Qn]);_i.push(Mn);for(const Qn of _i){const Li=xr(Qn.x,Qn.y);if(!Li||No.has(Li)||Ho(Li,"[data-feedback-toolbar]"))continue;No.add(Li);const{name:Yi}=pl(Li);ls.includes(Yi)||ls.push(Yi)}const Ri=`${Math.round($t)},${Math.round(tn)} → ${Math.round(nn)},${Math.round(Ct)}`;let Bi;(Gt==="circle"||Gt==="box")&&ls.length>0?Bi=`${Gt==="box"?"Boxed":"Circled"} **${ls[0]}**${ls.length>1?` (and ${ls.slice(1).join(", ")})`:""} (region: ${Ri})`:Gt==="underline"&&ls.length>0?Bi=`Underlined **${ls[0]}** (${Ri})`:Gt==="arrow"&&ls.length>=2?Bi=`Arrow from **${ls[0]}** to **${ls[ls.length-1]}** (${Math.round(bs.x)},${Math.round(bs.y)} → ${Math.round(Mn.x)},${Math.round(Mn.y)})`:ls.length>0?Bi=`${Gt==="arrow"?"Arrow":"Drawing"} near **${ls.join("**, **")}** (region: ${Ri})`:Bi=`Drawing at ${Ri}`,be.push(Bi)}ne&&(ne.style.visibility=""),be.length>0&&(H+=`
**Drawings:**
`,be.forEach((Ke,lt)=>{H+=`${lt+1}. ${Ke}
`}))}if((qe.length>0||L&&wn)&&(H+=`
`+Yy(qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:et,wireframePurpose:wn||void 0},Kt.outputDetail)),ot){const P=Wy(ot,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});P&&(H+=`
`+P)}if(g)try{await navigator.clipboard.writeText(H)}catch{}h==null||h(H),D(!0),Wt(()=>D(!1),2e3),Kt.autoClearAfterCopy&&Wt(()=>Do(),500)},[j,Sn,qe,ot,et,Ye,ds,wn,$e,Kt.outputDetail,io,Kt.autoClearAfterCopy,Do,g,h]),sa=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:$e;let L=Qy(j,E,Kt.outputDetail);if(!L&&qe.length===0&&!ot)return;if(L||(L=`## Page Feedback: ${E}
`),qe.length>0&&(L+=`
`+Yy(qe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:et,wireframePurpose:wn||void 0},Kt.outputDetail)),ot){const P=Wy(ot,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});P&&(L+=`
`+P)}p&&p(L,j),se("sending"),await new Promise(P=>Wt(P,150));const H=await Io("submit",{output:L,annotations:j},!0);se(H?"sent":"failed"),Wt(()=>se("idle"),2500),H&&Kt.autoClearAfterCopy&&Wt(()=>Do(),500)},[p,Io,j,qe,ot,et,ds,$e,Kt.outputDetail,io,Kt.autoClearAfterCopy,Do]);y.useEffect(()=>{if(!is)return;const E=10,L=P=>{const ne=P.clientX-is.x,be=P.clientY-is.y,Xe=Math.sqrt(ne*ne+be*be);if(!Ls&&Xe>E&&Os(!0),Ls||Xe>E){let Ke=is.toolbarX+ne,lt=is.toolbarY+be;const St=20,$t=337,tn=44,Ct=$t-(k?hs==="connected"?297:257:44),pt=St-Ct,ys=window.innerWidth-St-$t;Ke=Math.max(pt,Math.min(ys,Ke)),lt=Math.max(St,Math.min(window.innerHeight-tn-St,lt)),ks({x:Ke,y:lt})}},H=()=>{Ls&&(ao.current=!0),Os(!1),Hn(null)};return document.addEventListener("mousemove",L),document.addEventListener("mouseup",H),()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",H)}},[is,Ls,k,hs]);const nr=y.useCallback(E=>{var be,Xe;if(E.target.closest("button")||E.target.closest("[data-agentation-settings-panel]"))return;const L=E.currentTarget.parentElement;if(!L)return;const H=L.getBoundingClientRect(),P=(be=an==null?void 0:an.x)!=null?be:H.left,ne=(Xe=an==null?void 0:an.y)!=null?Xe:H.top;Hn({x:E.clientX,y:E.clientY,toolbarX:P,toolbarY:ne})},[an]);if(y.useEffect(()=>{if(!an)return;const E=()=>{let ne=an.x,be=an.y;const lt=20-(337-(k?hs==="connected"?297:257:44)),St=window.innerWidth-20-337;ne=Math.max(lt,Math.min(St,ne)),be=Math.max(20,Math.min(window.innerHeight-44-20,be)),(ne!==an.x||be!==an.y)&&ks({x:ne,y:be})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[an,k,hs]),y.useEffect(()=>{const E=L=>{const H=L.target,P=H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable;if(L.key==="Escape"){if(Ye){Mt?Bt(null):rs();return}if(Ds){Rs(!1);return}if(En.length>0){bo([]);return}Y||k&&(xn(),C(!1))}if((L.metaKey||L.ctrlKey)&&L.shiftKey&&(L.key==="f"||L.key==="F")){L.preventDefault(),xn(),k?Qs():C(!0);return}if(!(P||L.metaKey||L.ctrlKey)&&((L.key==="p"||L.key==="P")&&(L.preventDefault(),xn(),Vs()),(L.key==="l"||L.key==="L")&&(L.preventDefault(),xn(),Ds&&Rs(!1),we&&Ge(!1),Y&&va(),Ye?rs():Ot(!0)),(L.key==="h"||L.key==="H")&&j.length>0&&(L.preventDefault(),xn(),A(ne=>!ne)),(L.key==="c"||L.key==="C")&&(j.length>0||qe.length>0||ot)&&(L.preventDefault(),xn(),Ca()),(L.key==="x"||L.key==="X")&&(j.length>0||qe.length>0||ot)&&(L.preventDefault(),xn(),Do(),qe.length>0&&Dt([]),ot&&en(null)),L.key==="s"||L.key==="S")){const ne=Gi(Kt.webhookUrl)||Gi(w||"");j.length>0&&ne&&ae==="idle"&&(L.preventDefault(),xn(),sa())}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[k,Ds,Ye,Mt,qe,ot,Y,j.length,Kt.webhookUrl,w,ae,sa,Vs,Ca,Do,En]),!ut||I)return null;const je=j.length>0,Fe=j.filter(E=>!$o.has(E.id)&&E.kind!=="placement"&&E.kind!=="rearrange"),xt=Fe.length>0,Ue=j.filter(E=>$o.has(E.id)),It=E=>{const be=E.x/100*window.innerWidth,Xe=typeof E.y=="string"?parseFloat(E.y):E.y,Ke={};window.innerHeight-Xe-22-10<80&&(Ke.top="auto",Ke.bottom="calc(100% + 10px)");const St=be-200/2,$t=10;if(St<$t){const tn=$t-St;Ke.left=`calc(50% + ${tn}px)`}else if(St+200>window.innerWidth-$t){const tn=St+200-(window.innerWidth-$t);Ke.left=`calc(50% - ${tn}px)`}return Ke};return Nc.createPortal(l.jsxs("div",{ref:G,style:{display:"contents"},"data-agentation-theme":Us?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[l.jsx("div",{className:`${He.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:an?{left:an.x,top:an.y,right:"auto",bottom:"auto"}:void 0,children:l.jsxs("div",{className:`${He.toolbarContainer} ${k?He.expanded:He.collapsed} ${Di?He.entrance:""} ${X?He.hiding:""} ${!Kt.webhooksEnabled&&(Gi(Kt.webhookUrl)||Gi(w||""))?He.serverConnected:""}`,onClick:k?void 0:E=>{if(ao.current){ao.current=!1,E.preventDefault();return}C(!0)},onMouseDown:nr,role:k?void 0:"button",tabIndex:k?-1:0,title:k?void 0:"Start feedback mode",children:[l.jsxs("div",{className:`${He.toggleContent} ${k?He.hidden:He.visible}`,children:[l.jsx(Bw,{size:24}),xt&&l.jsx("span",{className:`${He.badge} ${k?He.fadeOut:""} ${Di?He.entrance:""}`,children:Fe.length})]}),l.jsxs("div",{className:`${He.controlsContent} ${k?He.visible:He.hidden} ${an&&an.y<100?He.tooltipBelow:""} ${At||we?He.tooltipsHidden:""} ${fi?He.tooltipsInSession:""}`,onMouseEnter:Ks,onMouseLeave:mi,children:[l.jsxs("div",{className:`${He.buttonWrapper} ${an&&an.x<120?He.buttonWrapperAlignLeft:""}`,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),xn(),Vs()},"data-active":J,children:l.jsx(Iw,{size:24,isPaused:J})}),l.jsxs("span",{className:He.buttonTooltip,children:[J?"Resume animations":"Pause animations",l.jsx("span",{className:He.shortcut,children:"P"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:`${He.controlButton} ${Us?"":He.light}`,onClick:E=>{E.stopPropagation(),xn(),Ds&&Rs(!1),we&&Ge(!1),Y&&va(),Ye?rs():Ot(!0)},"data-active":Ye,style:Ye&&et?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:l.jsx(qw,{size:21})}),l.jsxs("span",{className:He.buttonTooltip,children:[Ye?"Exit layout mode":"Layout mode",l.jsx("span",{className:He.shortcut,children:"L"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),xn(),A(!B)},disabled:!je||Ye,children:l.jsx($w,{size:24,isOpen:B})}),l.jsxs("span",{className:He.buttonTooltip,children:[B?"Hide markers":"Show markers",l.jsx("span",{className:He.shortcut,children:"H"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:`${He.controlButton} ${ge?He.statusShowing:""}`,onClick:E=>{E.stopPropagation(),xn(),Ca()},disabled:Ye&&et?qe.length===0&&!((Pt=ot==null?void 0:ot.sections)!=null&&Pt.length):!je&&Sn.length===0&&qe.length===0&&!((cn=ot==null?void 0:ot.sections)!=null&&cn.length),"data-active":ge,children:l.jsx(Ow,{size:24,copied:ge,tint:Ye&&et&&(qe.length>0||(rn=ot==null?void 0:ot.sections)!=null&&rn.length)?"#f97316":void 0})}),l.jsxs("span",{className:He.buttonTooltip,children:[Ye&&et?"Copy layout":"Copy feedback",l.jsx("span",{className:He.shortcut,children:"C"})]})]}),l.jsxs("div",{className:`${He.buttonWrapper} ${He.sendButtonWrapper} ${k&&!Kt.webhooksEnabled&&(Gi(Kt.webhookUrl)||Gi(w||""))?He.sendButtonVisible:""}`,children:[l.jsxs("button",{className:`${He.controlButton} ${ae==="sent"||ae==="failed"?He.statusShowing:""}`,onClick:E=>{E.stopPropagation(),xn(),sa()},disabled:!je||!Gi(Kt.webhookUrl)&&!Gi(w||"")||ae==="sending","data-no-hover":ae==="sent"||ae==="failed",tabIndex:Gi(Kt.webhookUrl)||Gi(w||"")?0:-1,children:[l.jsx(zw,{size:24,state:ae}),je&&ae==="idle"&&l.jsx("span",{className:He.buttonBadge,children:j.length})]}),l.jsxs("span",{className:He.buttonTooltip,children:["Send Annotations",l.jsx("span",{className:He.shortcut,children:"S"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),xn(),Do()},disabled:!je&&Sn.length===0&&qe.length===0&&!((Fn=ot==null?void 0:ot.sections)!=null&&Fn.length),"data-danger":!0,children:l.jsx(Hw,{size:24})}),l.jsxs("span",{className:He.buttonTooltip,children:["Clear all",l.jsx("span",{className:He.shortcut,children:"X"})]})]}),l.jsxs("div",{className:He.buttonWrapper,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),xn(),Ye&&rs(),Ge(!we)},children:l.jsx(Pw,{size:24})}),_&&hs!=="disconnected"&&l.jsx("span",{className:`${He.mcpIndicator} ${He[hs]} ${we?He.hidden:""}`,title:hs==="connected"?"MCP Connected":"MCP Connecting..."}),l.jsx("span",{className:He.buttonTooltip,children:"Settings"})]}),l.jsx("div",{className:He.divider}),l.jsxs("div",{className:`${He.buttonWrapper} ${an&&typeof window<"u"&&an.x>window.innerWidth-120?He.buttonWrapperAlignRight:""}`,children:[l.jsx("button",{className:He.controlButton,onClick:E=>{E.stopPropagation(),xn(),Qs()},children:l.jsx(Uw,{size:24})}),l.jsxs("span",{className:He.buttonTooltip,children:["Exit",l.jsx("span",{className:He.shortcut,children:"Esc"})]})]})]}),l.jsx(S4,{visible:Ye&&k,activeType:Mt,onSelect:E=>{Bt(Mt===E?null:E)},isDarkMode:Us,sectionCount:(ms=ot==null?void 0:ot.sections.length)!=null?ms:0,onDetectSections:()=>{var Xe,Ke;const E=B4(),L=(Xe=ot==null?void 0:ot.sections)!=null?Xe:[],H=new Set(L.map(lt=>lt.selector)),P=E.filter(lt=>!H.has(lt.selector)),ne=[...L,...P],be=[...(Ke=ot==null?void 0:ot.originalOrder)!=null?Ke:[],...P.map(lt=>lt.id)];en({sections:ne,originalOrder:be,detectedAt:Date.now()})},placementCount:qe.length,onClearPlacements:()=>{Hs(E=>E+1),ti(E=>E+1),Wt(()=>{en({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:et,onBlankCanvasChange:E=>{const L={sections:[],originalOrder:[],detectedAt:Date.now()};E?(To.current={rearrange:ot,placements:qe},en(zn.current.rearrange||L),Dt(zn.current.placements),Bt(null)):(zn.current={rearrange:ot,placements:qe},en(To.current.rearrange||L),Dt(To.current.placements)),Zt(E)},wireframePurpose:wn,onWireframePurposeChange:Nn,Tooltip:kr,onDragStart:(E,L)=>{var tn;L.preventDefault();const H=wt[E];let P=null,ne=!1;const be=L.clientX,Xe=L.clientY,Ke=L.target.closest("[data-feedback-toolbar]"),lt=(tn=Ke==null?void 0:Ke.getBoundingClientRect().top)!=null?tn:window.innerHeight,St=nn=>{const Ct=nn.clientX-be,pt=nn.clientY-Xe;if(!ne&&(Math.abs(Ct)>4||Math.abs(pt)>4)&&(ne=!0,P=document.createElement("div"),P.className=`${Ae.dragPreview}${et?` ${Ae.dragPreviewWireframe}`:""}`,document.body.appendChild(P)),!P)return;const ys=Math.max(0,lt-nn.clientY),xs=Math.min(1,ys/180),bs=1-Math.pow(1-xs,2),Mn=28,Un=20,Gt=Math.min(140,H.width*.18),Qt=Math.min(90,H.height*.18),vs=Mn+(Gt-Mn)*bs,Dn=Un+(Qt-Un)*bs;P.style.width=`${vs}px`,P.style.height=`${Dn}px`,P.style.left=`${nn.clientX-vs/2}px`,P.style.top=`${nn.clientY-Dn/2}px`,P.style.opacity=`${.5+.5*bs}`,P.textContent=bs>.25?E:""},$t=nn=>{if(window.removeEventListener("mousemove",St),window.removeEventListener("mouseup",$t),P&&document.body.removeChild(P),ne){const Ct=H.width,pt=H.height,ys=window.scrollY,xs=Math.max(0,nn.clientX-Ct/2),bs=Math.max(0,nn.clientY+ys-pt/2),Mn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:E,x:xs,y:bs,width:Ct,height:pt,scrollY:ys,timestamp:Date.now()};Dt(Un=>[...Un,Mn]),Bt(null),ho.current=new Set,go(Un=>Un+1)}};window.addEventListener("mousemove",St),window.addEventListener("mouseup",$t)}}),l.jsx(V6,{settings:Kt,onSettingsChange:E=>si(L=>({...L,...E})),isDarkMode:Us,onToggleTheme:mo,isDevMode:Oo,connectionStatus:hs,endpoint:_,isVisible:Ve,toolbarNearBottom:!!an&&an.y<230,settingsPage:kt,onSettingsPageChange:nt,onHideToolbar:kn})]})}),(Ye||Vt)&&l.jsx("div",{className:`${Ae.blankCanvas} ${Tn?Ae.visible:""} ${fn?Ae.gridActive:""}`,style:{"--canvas-opacity":Kn},"data-feedback-toolbar":!0}),Ye&&et&&Tn&&l.jsxs("div",{className:Ae.wireframeNotice,"data-feedback-toolbar":!0,children:[l.jsxs("div",{className:Ae.wireframeOpacityRow,children:[l.jsx("span",{className:Ae.wireframeOpacityLabel,children:"Toggle Opacity"}),l.jsx("input",{type:"range",className:Ae.wireframeOpacitySlider,min:0,max:1,step:.01,value:Kn,onChange:E=>fo(Number(E.target.value))})]}),l.jsxs("div",{className:Ae.wireframeNoticeTitleRow,children:[l.jsx("span",{className:Ae.wireframeNoticeTitle,children:"Wireframe Mode"}),l.jsx("span",{className:Ae.wireframeNoticeDivider}),l.jsx("button",{className:Ae.wireframeStartOver,onClick:()=>{Hs(E=>E+1),en({sections:[],originalOrder:[],detectedAt:Date.now()}),zn.current={rearrange:null,placements:[]},Nn(""),Ju($e)},children:"Start Over"})]}),"Drag components onto the canvas.",l.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ye||Vt)&&l.jsx(y4,{placements:qe,onChange:Dt,activeComponent:Vt?null:Mt,onActiveComponentChange:Bt,isDarkMode:Us,exiting:Vt,onInteractionChange:pn,passthrough:!Mt,extraSnapRects:ot==null?void 0:ot.sections.map(E=>E.currentRect),deselectSignal:Ns,clearSignal:Gs,wireframe:et,onSelectionChange:(E,L)=>{ho.current=E,L||(Ts.current=new Set,yo(H=>H+1))},onDragMove:(E,L)=>{const H=Ts.current;if(!(!H.size||!ot)){if(!fs.current){fs.current=new Map;for(const P of ot.sections)H.has(P.id)&&fs.current.set(P.id,{x:P.currentRect.x,y:P.currentRect.y})}for(const P of ot.sections){if(!H.has(P.id)||!fs.current.get(P.id))continue;const be=document.querySelector(`[data-rearrange-section="${P.id}"]`);be&&(be.style.transform=`translate(${E}px, ${L}px)`)}}},onDragEnd:(E,L,H)=>{const P=Ts.current,ne=fs.current;if(fs.current=null,!(!P.size||!ot||!ne)){for(const be of P){const Xe=document.querySelector(`[data-rearrange-section="${be}"]`);Xe&&(Xe.style.transform="")}H&&en(be=>be&&{...be,sections:be.sections.map(Xe=>{const Ke=ne.get(Xe.id);return Ke?{...Xe,currentRect:{...Xe.currentRect,x:Math.max(0,Ke.x+E),y:Math.max(0,Ke.y+L)}}:Xe})})}}}),(Ye||Vt)&&ot&&l.jsx(z4,{rearrangeState:ot,onChange:en,isDarkMode:Us,exiting:Vt,blankCanvas:et,extraSnapRects:qe.map(E=>({x:E.x,y:E.y,width:E.width,height:E.height})),clearSignal:Pn,deselectSignal:Eo,onSelectionChange:(E,L)=>{Ts.current=E,L||(ho.current=new Set,go(H=>H+1))},onDragMove:(E,L)=>{const H=ho.current;if(H.size){if(!fs.current){fs.current=new Map;for(const P of qe)H.has(P.id)&&fs.current.set(P.id,{x:P.x,y:P.y})}for(const P of H){const ne=document.querySelector(`[data-design-placement="${P}"]`);ne&&(ne.style.transform=`translate(${E}px, ${L}px)`)}}},onDragEnd:(E,L,H)=>{const P=ho.current,ne=fs.current;if(fs.current=null,!(!P.size||!ne)){for(const be of P){const Xe=document.querySelector(`[data-design-placement="${be}"]`);Xe&&(Xe.style.transform="")}H&&Dt(be=>be.map(Xe=>{const Ke=ne.get(Xe.id);return Ke?{...Xe,x:Math.max(0,Ke.x+E),y:Math.max(0,Ke.y+L)}:Xe}))}}}),l.jsx("canvas",{ref:Lo,className:`${He.drawCanvas} ${Ds?He.active:""}`,style:{opacity:Yt?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),l.jsxs("div",{className:He.markersLayer,"data-feedback-toolbar":!0,children:[re&&Fe.filter(E=>!E.isFixed).map((E,L,H)=>l.jsx(Zy,{annotation:E,globalIndex:Fe.findIndex(P=>P.id===E.id),layerIndex:L,layerSize:H.length,isExiting:Ce,isClearing:We,isAnimated:as.has(E.id),isHovered:!Ce&&mt===E.id,isDeleting:gt===E.id,isEditingAny:!!_e,renumberFrom:Ut,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:It(E),onHoverEnter:P=>!Ce&&P.id!==ue.current&&na(P),onHoverLeave:()=>na(null),onClick:P=>Kt.markerClickBehavior==="delete"?wa(P.id):ta(P),onContextMenu:ta},E.id)),re&&!Ce&&Ue.filter(E=>!E.isFixed).map(E=>l.jsx(Jy,{annotation:E},E.id))]}),l.jsxs("div",{className:He.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[re&&Fe.filter(E=>E.isFixed).map((E,L,H)=>l.jsx(Zy,{annotation:E,globalIndex:Fe.findIndex(P=>P.id===E.id),layerIndex:L,layerSize:H.length,isExiting:Ce,isClearing:We,isAnimated:as.has(E.id),isHovered:!Ce&&mt===E.id,isDeleting:gt===E.id,isEditingAny:!!_e,renumberFrom:Ut,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:It(E),onHoverEnter:P=>!Ce&&P.id!==ue.current&&na(P),onHoverLeave:()=>na(null),onClick:P=>Kt.markerClickBehavior==="delete"?wa(P.id):ta(P),onContextMenu:ta},E.id)),re&&!Ce&&Ue.filter(E=>E.isFixed).map(E=>l.jsx(Jy,{annotation:E,fixed:!0},E.id))]}),k&&l.jsxs("div",{className:He.overlay,"data-feedback-toolbar":!0,style:Y||_e?{zIndex:99999}:void 0,children:[(Q==null?void 0:Q.rect)&&!Y&&!ht&&!ye&&l.jsx("div",{className:`${He.hoverHighlight} ${He.enter}`,style:{left:Q.rect.left,top:Q.rect.top,width:Q.rect.width,height:Q.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),En.filter(E=>document.contains(E.element)).map((E,L)=>{const H=E.element.getBoundingClientRect(),P=En.length>1;return l.jsx("div",{className:P?He.multiSelectOutline:He.singleSelectOutline,style:{position:"fixed",left:H.left,top:H.top,width:H.width,height:H.height,...P?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},L)}),mt&&!Y&&(()=>{var ne;const E=j.find(be=>be.id===mt);if(!(E!=null&&E.boundingBox))return null;if((ne=E.elementBoundingBoxes)!=null&&ne.length)return dt.length>0?dt.filter(be=>document.contains(be)).map((be,Xe)=>{const Ke=be.getBoundingClientRect();return l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:Ke.left,top:Ke.top,width:Ke.width,height:Ke.height}},`hover-outline-live-${Xe}`)}):E.elementBoundingBoxes.map((be,Xe)=>l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:be.x,top:be.y-tt,width:be.width,height:be.height}},`hover-outline-${Xe}`));const L=Pe&&document.contains(Pe)?Pe.getBoundingClientRect():null,H=L?{x:L.left,y:L.top,width:L.width,height:L.height}:{x:E.boundingBox.x,y:E.isFixed?E.boundingBox.y:E.boundingBox.y-tt,width:E.boundingBox.width,height:E.boundingBox.height},P=E.isMultiSelect;return l.jsx("div",{className:`${P?He.multiSelectOutline:He.singleSelectOutline} ${He.enter}`,style:{left:H.x,top:H.y,width:H.width,height:H.height,...P?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Q&&!Y&&!ht&&!ye&&l.jsxs("div",{className:`${He.hoverTooltip} ${He.enter}`,style:{left:Math.max(8,Math.min(O.x,window.innerWidth-100)),top:Math.max(O.y-(Q.reactComponents?48:32),8)},children:[Q.reactComponents&&l.jsx("div",{className:He.hoverReactPath,children:Q.reactComponents}),l.jsx("div",{className:He.hoverElementName,children:Q.elementName})]}),Y&&l.jsxs(l.Fragment,{children:[(ro=Y.multiSelectElements)!=null&&ro.length?Y.multiSelectElements.filter(E=>document.contains(E)).map((E,L)=>{const H=E.getBoundingClientRect();return l.jsx("div",{className:`${He.multiSelectOutline} ${Yn?He.exit:He.enter}`,style:{left:H.left,top:H.top,width:H.width,height:H.height}},`pending-multi-${L}`)}):Y.targetElement&&document.contains(Y.targetElement)?(()=>{const E=Y.targetElement.getBoundingClientRect();return l.jsx("div",{className:`${He.singleSelectOutline} ${Yn?He.exit:He.enter}`,style:{left:E.left,top:E.top,width:E.width,height:E.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():Y.boundingBox&&l.jsx("div",{className:`${Y.isMultiSelect?He.multiSelectOutline:He.singleSelectOutline} ${Yn?He.exit:He.enter}`,style:{left:Y.boundingBox.x,top:Y.boundingBox.y-tt,width:Y.boundingBox.width,height:Y.boundingBox.height,...Y.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const E=Y.x,L=Y.isFixed?Y.y:Y.y-tt;return l.jsxs(l.Fragment,{children:[l.jsx(R6,{x:E,y:L,isMultiSelect:Y.isMultiSelect,isExiting:Yn}),l.jsx(kd,{ref:vt,element:Y.element,selectedText:Y.selectedText,computedStyles:Y.computedStylesObj,placeholder:Y.element==="Area selection"?"What should change in this area?":Y.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Dr,onCancel:va,isExiting:Yn,lightMode:!Us,accentColor:Y.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,E/100*window.innerWidth)),...L>window.innerHeight-290?{bottom:window.innerHeight-L+20}:{top:L+20}}})]})})()]}),_e&&l.jsxs(l.Fragment,{children:[(pi=_e.elementBoundingBoxes)!=null&&pi.length?_t.length>0?_t.filter(E=>document.contains(E)).map((E,L)=>{const H=E.getBoundingClientRect();return l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:H.left,top:H.top,width:H.width,height:H.height}},`edit-multi-live-${L}`)}):_e.elementBoundingBoxes.map((E,L)=>l.jsx("div",{className:`${He.multiSelectOutline} ${He.enter}`,style:{left:E.x,top:E.y-tt,width:E.width,height:E.height}},`edit-multi-${L}`)):(()=>{const E=rt&&document.contains(rt)?rt.getBoundingClientRect():null,L=E?{x:E.left,y:E.top,width:E.width,height:E.height}:_e.boundingBox?{x:_e.boundingBox.x,y:_e.isFixed?_e.boundingBox.y:_e.boundingBox.y-tt,width:_e.boundingBox.width,height:_e.boundingBox.height}:null;return L?l.jsx("div",{className:`${_e.isMultiSelect?He.multiSelectOutline:He.singleSelectOutline} ${He.enter}`,style:{left:L.x,top:L.y,width:L.width,height:L.height,..._e.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),l.jsx(kd,{ref:Lt,element:_e.element,selectedText:_e.selectedText,computedStyles:A4(_e.computedStyles),placeholder:"Edit your feedback...",initialValue:_e.comment,submitLabel:"Save",onSubmit:Nr,onCancel:Sa,onDelete:()=>wa(_e.id),isExiting:te,lightMode:!Us,accentColor:_e.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const E=_e.isFixed?_e.y:_e.y-tt;return{left:Math.max(160,Math.min(window.innerWidth-160,_e.x/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})()})]}),ye&&l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:zt,className:He.dragSelection}),l.jsx("div",{ref:Rn,className:He.highlightsContainer})]})]})]}),document.body)}const _p=y.createContext({});function Rc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const F6=typeof window<"u",gp=F6?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function yp(t,n){t.indexOf(n)===-1&&t.push(n)}function gl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const ea=(t,n,i)=>i>n?n:i<t?t:i;let xp=()=>{};const Ja={},nb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function sb(t){return typeof t=="object"&&t!==null}const ob=t=>/^0[^.\s]+$/u.test(t);function ib(t){let n;return()=>(n===void 0&&(n=t()),n)}const Mi=t=>t,X6=(t,n)=>i=>n(t(i)),Bc=(...t)=>t.reduce(X6),yl=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class bp{constructor(){this.subscriptions=[]}add(n){return yp(this.subscriptions,n),()=>gl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ei=t=>t*1e3,ji=t=>t/1e3;function ab(t,n){return n?t*(1e3/n):0}const q6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},rb=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,G6=1e-7,K6=12;function Q6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=rb(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>G6&&++h<K6);return d}function Lc(t,n,i,a){if(t===n&&i===a)return Mi;const c=u=>Q6(u,0,1,t,i);return u=>u===0||u===1?u:rb(c(u),n,a)}const lb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,cb=t=>n=>1-t(1-n),ub=Lc(.33,1.53,.69,.99),vp=cb(ub),db=lb(vp),fb=t=>t>=1?1:(t*=2)<1?.5*vp(t):.5*(2-Math.pow(2,-10*(t-1))),wp=t=>1-Math.sin(Math.acos(t)),hb=cb(wp),mb=lb(wp),Z6=Lc(.42,0,1,1),J6=Lc(0,0,.58,1),pb=Lc(.42,0,.58,1),_b=t=>Array.isArray(t)&&typeof t[0]!="number";function gb(t,n){return _b(t)?t[q6(0,t.length,n)]:t}const yb=t=>Array.isArray(t)&&typeof t[0]=="number",eC={linear:Mi,easeIn:Z6,easeInOut:pb,easeOut:J6,circIn:wp,circInOut:mb,circOut:hb,backIn:vp,backInOut:db,backOut:ub,anticipate:fb},tC=t=>typeof t=="string",s1=t=>{if(yb(t)){xp(t.length===4);const[n,i,a,c]=t;return Lc(n,i,a,c)}else if(tC(t))return eC[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function nC(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const sC=40;function xb(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=sd.reduce((B,A)=>(B[A]=nC(u),B),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,k=()=>{const B=Ja.useManualTiming,A=B?c.timestamp:performance.now();i=!1,B||(c.delta=a?1e3/60:Math.max(Math.min(A-c.timestamp,sC),1)),c.timestamp=A,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(k))},C=()=>{i=!0,a=!0,c.isProcessing||t(k)};return{schedule:sd.reduce((B,A)=>{const I=d[A];return B[A]=(V,X=!1,U=!1)=>(i||C(),I.schedule(V,X,U)),B},{}),cancel:B=>{for(let A=0;A<sd.length;A++)d[sd[A]].cancel(B)},state:c,steps:d}}const{schedule:ss,cancel:ba,state:Mo,steps:lm}=xb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mi,!0);let hd;function oC(){hd=void 0}const Vo={now:()=>(hd===void 0&&Vo.set(Mo.isProcessing||Ja.useManualTiming?Mo.timestamp:performance.now()),hd),set:t=>{hd=t,queueMicrotask(oC)}},bb=t=>n=>typeof n=="string"&&n.startsWith(t),vb=bb("--"),iC=bb("var(--"),Sp=t=>iC(t)?aC.test(t.split("/*")[0].trim()):!1,aC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function o1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const bl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Mc={...bl,transform:t=>ea(0,1,t)},od={...bl,default:1},vc=t=>Math.round(t*1e5)/1e5,Cp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rC(t){return t==null}const lC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kp=(t,n)=>i=>!!(typeof i=="string"&&lC.test(i)&&i.startsWith(t)||n&&!rC(i)&&Object.prototype.hasOwnProperty.call(i,n)),wb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Cp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},cC=t=>ea(0,255,t),cm={...bl,transform:t=>Math.round(cC(t))},jr={test:kp("rgb","red"),parse:wb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(i)+", "+vc(Mc.transform(a))+")"};function uC(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const zm={test:kp("#"),parse:uC,transform:jr.transform},Oc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),qa=Oc("deg"),Ji=Oc("%"),Et=Oc("px"),dC=Oc("vh"),fC=Oc("vw"),i1={...Ji,parse:t=>Ji.parse(t)/100,transform:t=>Ji.transform(t*100)},fl={test:kp("hsl","hue"),parse:wb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Ji.transform(vc(n))+", "+Ji.transform(vc(i))+", "+vc(Mc.transform(a))+")"},so={test:t=>jr.test(t)||zm.test(t)||fl.test(t),parse:t=>jr.test(t)?jr.parse(t):fl.test(t)?fl.parse(t):zm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?jr.transform(t):fl.transform(t),getAnimatableNone:t=>{const n=so.parse(t);return n.alpha=0,so.transform(n)}},hC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mC(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Cp))==null?void 0:n.length)||0)+(((i=t.match(hC))==null?void 0:i.length)||0)>0}const Sb="number",Cb="color",pC="var",_C="var(",a1="${}",gC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(gC,p=>(so.test(p)?(a.color.push(u),c.push(Cb),i.push(so.parse(p))):p.startsWith(_C)?(a.var.push(u),c.push(pC),i.push(p)):(a.number.push(u),c.push(Sb),i.push(parseFloat(p))),++u,a1)).split(a1);return{values:i,split:h,indexes:a,types:c}}function yC(t){return xl(t).values}function kb({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===Sb?c+=vc(a[u]):d===Cb?c+=so.transform(a[u]):c+=a[u]}return c}}function xC(t){return kb(xl(t))}const bC=t=>typeof t=="number"?0:so.test(t)?so.getAnimatableNone(t):t,vC=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:bC(t);function wC(t){const n=xl(t);return kb(n)(n.values.map((a,c)=>vC(a,n.split[c])))}const Vi={test:mC,parse:yC,createTransformer:xC,getAnimatableNone:wC};function um(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function SC({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Td(t,n){return i=>i>0?n:t}const ps=(t,n,i)=>t+(n-t)*i,dm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},CC=[zm,jr,fl],kC=t=>CC.find(n=>n.test(t));function r1(t){const n=kC(t);if(!n)return!1;let i=n.parse(t);return n===fl&&(i=SC(i)),i}const l1=(t,n)=>{const i=r1(t),a=r1(n);if(!i||!a)return Td(t,n);const c={...i};return u=>(c.red=dm(i.red,a.red,u),c.green=dm(i.green,a.green,u),c.blue=dm(i.blue,a.blue,u),c.alpha=ps(i.alpha,a.alpha,u),jr.transform(c))},$m=new Set(["none","hidden"]);function jC(t,n){return $m.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function MC(t,n){return i=>ps(t,n,i)}function jp(t){return typeof t=="number"?MC:typeof t=="string"?Sp(t)?Td:so.test(t)?l1:AC:Array.isArray(t)?jb:typeof t=="object"?so.test(t)?l1:TC:Td}function jb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>jp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function TC(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=jp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function EC(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const AC=(t,n)=>{const i=Vi.createTransformer(n),a=xl(t),c=xl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?$m.has(t)&&!c.values.length||$m.has(n)&&!a.values.length?jC(t,n):Bc(jb(EC(a,c),c.values),i):Td(t,n)};function Mb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?ps(t,n,i):jp(t)(t,n)}const DC=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ss.update(n,i),stop:()=>ba(n),now:()=>Mo.isProcessing?Mo.timestamp:Vo.now()}},Tb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ed=2e4;function Mp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Ed;)n+=i,a=t.next(n);return n>=Ed?1/0:n}function Eb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(Mp(a),Ed);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:ji(c)}}const Ps={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Im(t,n){return t*Math.sqrt(1-n*n)}const NC=12;function RC(t,n,i){let a=i;for(let c=1;c<NC;c++)a=a-t(a)/n(a);return a}const fm=.001;function BC({duration:t=Ps.duration,bounce:n=Ps.bounce,velocity:i=Ps.velocity,mass:a=Ps.mass}){let c,u,d=1-n;d=ea(Ps.minDamping,Ps.maxDamping,d),t=ea(Ps.minDuration,Ps.maxDuration,ji(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=Im(g,d),S=Math.exp(-x);return fm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),k=Im(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-w)*S)/k}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=RC(c,u,h);if(t=ei(t),isNaN(p))return{stiffness:Ps.stiffness,damping:Ps.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const LC=["duration","bounce"],OC=["stiffness","damping","mass"];function c1(t,n){return n.some(i=>t[i]!==void 0)}function zC(t){let n={velocity:Ps.velocity,stiffness:Ps.stiffness,damping:Ps.damping,mass:Ps.mass,isResolvedFromDuration:!1,...t};if(!c1(t,OC)&&c1(t,LC))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*ea(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Ps.mass,stiffness:c,damping:u}}else{const i=BC({...t,velocity:0});n={...n,...i,mass:Ps.mass},n.isResolvedFromDuration=!0}return n}function Tc(t=Ps.visualDuration,n=Ps.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=zC({...i,velocity:-ji(i.velocity||0)}),S=b||0,k=g/(2*Math.sqrt(p*_)),C=d-u,j=ji(Math.sqrt(p/_)),N=Math.abs(C)<5;a||(a=N?Ps.restSpeed.granular:Ps.restSpeed.default),c||(c=N?Ps.restDelta.granular:Ps.restDelta.default);let B,A,I,V,X,U;if(k<1)I=Im(j,k),V=(S+k*j*C)/I,B=re=>{const oe=Math.exp(-k*j*re);return d-oe*(V*Math.sin(I*re)+C*Math.cos(I*re))},X=k*j*V+C*I,U=k*j*C-V*I,A=re=>Math.exp(-k*j*re)*(X*Math.sin(I*re)+U*Math.cos(I*re));else if(k===1){B=oe=>d-Math.exp(-j*oe)*(C+(S+j*C)*oe);const re=S+j*C;A=oe=>Math.exp(-j*oe)*(j*re*oe-S)}else{const re=j*Math.sqrt(k*k-1);B=Q=>{const de=Math.exp(-k*j*Q),O=Math.min(re*Q,300);return d-de*((S+k*j*C)*Math.sinh(O)+re*C*Math.cosh(O))/re};const oe=(S+k*j*C)/re,Ce=k*j*oe-C*re,Le=k*j*C-oe*re;A=Q=>{const de=Math.exp(-k*j*Q),O=Math.min(re*Q,300);return de*(Ce*Math.sinh(O)+Le*Math.cosh(O))}}const G={calculatedDuration:w&&x||null,velocity:re=>ei(A(re)),next:re=>{if(!w&&k<1){const Ce=Math.exp(-k*j*re),Le=Math.sin(I*re),Q=Math.cos(I*re),de=d-Ce*(V*Le+C*Q),O=ei(Ce*(X*Le+U*Q));return h.done=Math.abs(O)<=a&&Math.abs(d-de)<=c,h.value=h.done?d:de,h}const oe=B(re);if(w)h.done=re>=x;else{const Ce=ei(A(re));h.done=Math.abs(Ce)<=a&&Math.abs(d-oe)<=c}return h.value=h.done?d:oe,h},toString:()=>{const re=Math.min(Mp(G),Ed),oe=Tb(Ce=>G.next(re*Ce).value,re,30);return re+"ms "+oe},toTransition:()=>{}};return G}Tc.applyToOptions=t=>{const n=Eb(t,100,Tc);return t.ease=n.ease,t.duration=ei(n.duration),t.type="keyframes",t};const $C=5;function Ab(t,n,i){const a=Math.max(n-$C,0);return ab(i-t(a),n-a)}function Pm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=U=>h!==void 0&&U<h||p!==void 0&&U>p,S=U=>h===void 0?p:p===void 0||Math.abs(h-U)<Math.abs(p-U)?h:p;let k=i*n;const C=x+k,j=d===void 0?C:d(C);j!==C&&(k=j-x);const N=U=>-k*Math.exp(-U/a),B=U=>j+N(U),A=U=>{const G=N(U),re=B(U);b.done=Math.abs(G)<=g,b.value=b.done?j:re};let I,V;const X=U=>{w(b.value)&&(I=U,V=Tc({keyframes:[b.value,S(b.value)],velocity:Ab(B,U,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return X(0),{calculatedDuration:null,next:U=>{let G=!1;return!V&&I===void 0&&(G=!0,A(U),X(U)),I!==void 0&&U>=I?V.next(U-I):(!G&&A(U),b)}}}function IC(t,n,i){const a=[],c=i||Ja.mix||Mb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||Mi:n;h=Bc(p,h)}a.push(h)}return a}function Db(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(xp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=IC(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=yl(t[x],t[x+1],_);return h[x](b)};return i?_=>g(ea(t[0],t[u-1],_)):g}function Nb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=yl(0,n,a);t.push(ps(i,1,c))}}function Rb(t){const n=[0];return Nb(n,t.length-1),n}function PC(t,n){return t.map(i=>i*n)}function HC(t,n){return t.map(()=>n||pb).splice(0,t.length-1)}function wc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=_b(a)?a.map(s1):s1(a),u={done:!1,value:n[0]},d=PC(i&&i.length===n.length?i:Rb(n),t),h=Db(d,n,{ease:Array.isArray(c)?c:HC(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const UC=t=>t!==null;function zd(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(UC),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const VC={decay:Pm,inertia:Pm,tween:wc,keyframes:wc,spring:Tc};function Bb(t){typeof t.type=="string"&&(t.type=VC[t.type])}class Tp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const YC=t=>t/100;class Ad extends Tp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Vo.now()&&this.tick(Vo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Bb(n);const{type:i=wc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||wc;p!==wc&&typeof h[0]!="number"&&(this.mixKeyframes=Bc(YC,Mb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Mp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:k,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const j=this.currentTime-g*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?j<0:j>c;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let B=this.currentTime,A=a;if(x){const U=Math.min(this.currentTime,c)/h;let G=Math.floor(U),re=U%1;!re&&U>=1&&(re=1),re===1&&G--,G=Math.min(G,x+1),!!(G%2)&&(b==="reverse"?(re=1-re,w&&(re-=w/h)):b==="mirror"&&(A=d)),B=ea(0,1,re)*h}let I;N?(this.delayState.value=_[0],I=this.delayState):I=A.next(B),u&&!N&&(I.value=u(I.value));let{done:V}=I;!N&&p!==null&&(V=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return X&&S!==Pm&&(I.value=zd(_,this.options,C,this.speed)),k&&k(I.value),X&&this.finish(),I}then(n,i){return this.finished.then(n,i)}get duration(){return ji(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+ji(n)}get time(){return ji(this.currentTime)}set time(n){n=ei(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return Ab(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Vo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=ji(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=DC,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function WC(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const Mr=t=>t*180/Math.PI,Hm=t=>{const n=Mr(Math.atan2(t[1],t[0]));return Um(n)},FC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hm,rotateZ:Hm,skewX:t=>Mr(Math.atan(t[1])),skewY:t=>Mr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Um=t=>(t=t%360,t<0&&(t+=360),t),u1=Hm,d1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),f1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),XC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:d1,scaleY:f1,scale:t=>(d1(t)+f1(t))/2,rotateX:t=>Um(Mr(Math.atan2(t[6],t[5]))),rotateY:t=>Um(Mr(Math.atan2(-t[2],t[0]))),rotateZ:u1,rotate:u1,skewX:t=>Mr(Math.atan(t[4])),skewY:t=>Mr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Vm(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Vm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=XC,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=FC,c=h}if(!c)return Vm(n);const u=a[n],d=c[1].split(",").map(GC);return typeof u=="function"?u(d):d[u]}const qC=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Ym(i,n)};function GC(t){return parseFloat(t.trim())}const vl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wl=new Set(vl),h1=t=>t===bl||t===Et,KC=new Set(["x","y","z"]),QC=vl.filter(t=>!KC.has(t));function ZC(t){const n=[];return QC.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Qa={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};Qa.translateX=Qa.x;Qa.translateY=Qa.y;const Tr=new Set;let Wm=!1,Fm=!1,Xm=!1;function Lb(){if(Fm){const t=Array.from(Tr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=ZC(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Fm=!1,Wm=!1,Tr.forEach(t=>t.complete(Xm)),Tr.clear()}function Ob(){Tr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fm=!0)})}function JC(){Xm=!0,Ob(),Lb(),Xm=!1}class Ep{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Tr.add(this),Wm||(Wm=!0,ss.read(Ob),ss.resolveKeyframes(Lb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}WC(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Tr.delete(this)}cancel(){this.state==="scheduled"&&(Tr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const e3=t=>t.startsWith("--");function zb(t,n,i){e3(n)?t.style.setProperty(n,i):t.style[n]=i}const t3={};function $b(t,n){const i=ib(t);return()=>{var a;return(a=t3[n])!=null?a:i()}}const n3=$b(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ib=$b(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_c=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,m1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_c([0,.65,.55,1]),circOut:_c([.55,0,1,.45]),backIn:_c([.31,.01,.66,-.59]),backOut:_c([.33,1.53,.69,.99])};function Pb(t,n){if(t)return typeof t=="function"?Ib()?Tb(t,n):"ease-out":yb(t)?_c(t):Array.isArray(t)?t.map(i=>Pb(i,n)||m1.easeOut):m1[t]}function s3(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Pb(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Ap(t){return typeof t=="function"&&"applyToOptions"in t}function o3({type:t,...n}){var i,a;return Ap(t)&&Ib()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Hb extends Tp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,xp(typeof n.type!="string");const g=o3(n);this.animation=s3(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),zb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return ji(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+ji(n)}get time(){return ji(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ei(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&n3()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),Mi):c(this)}}const Ub={anticipate:fb,backInOut:db,circInOut:mb};function i3(t){return t in Ub}function a3(t){typeof t.ease=="string"&&i3(t.ease)&&(t.ease=Ub[t.ease])}const hm=10;class r3 extends Hb{constructor(n){a3(n),Bb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Ad({...d,autoplay:!1}),p=Math.max(hm,Vo.now()-this.startTime),g=ea(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&zb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const p1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Vi.test(t)||t==="0")&&!t.startsWith("url("));function l3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function c3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=p1(c,n),h=p1(u,n);return!d||!h?!1:l3(t)||(i==="spring"||Ap(i))&&a}function qm(t){t.duration=0,t.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),u3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function d3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&u3.test(t[n]))return!0;return!1}const f3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),h3=ib(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function m3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return h3()&&i&&(Vb.has(i)||f3.has(i)&&d3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const p3=40;class _3 extends Tp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var k,C;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=Vo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Ep;this.keyframeResolver=new w(h,(k,C,j)=>this.onKeyframesResolved(k,C,b,!j),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var j,N;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Vo.now();let x=!0;c3(n,u,d,h)||(x=!1,(Ja.instantAnimations||!p)&&(_==null||_(zd(n,a,i))),n[0]=n[n.length-1],qm(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>p3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&m3(w),k=(N=(j=w.motionValue)==null?void 0:j.owner)==null?void 0:N.current;let C;if(S)try{C=new r3({...w,element:k})}catch{C=new Ad(w)}else C=new Ad(w);C.finished.then(()=>{this.notifyFinished()}).catch(Mi),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),JC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class g3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return _1(this.animations,"duration")}get iterationDuration(){return _1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function _1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class y3 extends g3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Yb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const x3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function b3(t){const n=x3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Wb(t,n,i=1){const[a,c]=b3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return nb(d)?parseFloat(d):d}return Sp(c)?Wb(c,n,i+1):c}const v3={type:"spring",stiffness:500,damping:25,restSpeed:10},w3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),S3={type:"keyframes",duration:.8},C3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},k3=(t,{keyframes:n})=>n.length>2?S3:wl.has(t)?t.startsWith("scale")?w3(n[1]):v3:C3;function Fb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Dp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?Fb(i,t):i}const j3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function M3(t){for(const n in t)if(!j3.has(n))return!0;return!1}const Np=(t,n,i,a={},c,u)=>d=>{const h=Dp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-ei(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};M3(h)||Object.assign(_,k3(t,_)),_.duration&&(_.duration=ei(_.duration)),_.repeatDelay&&(_.repeatDelay=ei(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(qm(_),_.delay===0&&(x=!0)),(Ja.instantAnimations||Ja.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,qm(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=zd(_.keyframes,h);if(b!==void 0){ss.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Ad(_):new _3(_)};function g1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Rp(t,n,i,a){if(typeof n=="function"){const[c,u]=g1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=g1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function Er(t,n,i){const a=t.getProps();return Rp(a,n,i!==void 0?i:a.custom,t)}const Xb=new Set(["width","height","top","left","right","bottom",...vl]),y1=30,T3=t=>!isNaN(parseFloat(t)),Sc={current:void 0};class E3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Vo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Vo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=T3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new bp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ss.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return Sc.current&&Sc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Vo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>y1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,y1);return ab(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function er(t,n){return new E3(t,n)}const Gm=t=>Array.isArray(t);function A3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,er(i))}function D3(t){return Gm(t)?t[t.length-1]||0:t}function N3(t,n){const i=Er(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=D3(u[d]);A3(t,d,h)}}const uo=t=>!!(t&&t.getVelocity);function R3(t){return!!(uo(t)&&t.add)}function Km(t,n){const i=t.getValue("willChange");if(R3(i))return i.add(n);if(!i&&Ja.WillChange){const a=new Ja.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Bp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const B3="framerAppearId",qb="data-"+Bp(B3);function Gb(t){return t.props[qb]}function L3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Lp(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Fb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),k=h[w];if(k===void 0||x&&L3(x,w))continue;const C={delay:i,...Dp(u||{},w)},j=S.get();if(j!==void 0&&!S.isAnimating()&&!Array.isArray(k)&&k===j&&!C.velocity){ss.update(()=>S.set(k));continue}let N=!1;if(window.MotionHandoffAnimation){const I=Gb(t);if(I){const V=window.MotionHandoffAnimation(I,w,ss);V!==null&&(C.startTime=V,N=!0)}}Km(t,w);const B=g!=null?g:t.shouldReduceMotion;S.start(Np(w,S,k,B&&Xb.has(w)?{type:!1}:C,t,N));const A=S.animation;A&&_.push(A)}if(d){const w=()=>ss.update(()=>{d&&N3(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Qm(t,n,i={}){var p;const a=Er(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Lp(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return O3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function O3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Yb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function z3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=Qm(t,n,i);else{const c=typeof n=="function"?Er(t,n,i.custom):n;a=Promise.all(Lp(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const $3={test:t=>t==="auto",parse:t=>t},Kb=t=>n=>n.test(t),Qb=[bl,Et,Ji,qa,fC,dC,$3],x1=t=>Qb.find(Kb(t));function I3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ob(t):!0}const P3=new Set(["brightness","contrast","saturate","opacity"]);function H3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(Cp)||[];if(!a)return t;const c=i.replace(a,"");let u=P3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const U3=/\b([a-z-]*)\(.*?\)/gu,Zm={...Vi,getAnimatableNone:t=>{const n=t.match(U3);return n?n.map(H3).join(" "):t}},Jm={...Vi,getAnimatableNone:t=>{const n=Vi.parse(t);return Vi.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},b1={...bl,transform:Math.round},V3={rotate:qa,rotateX:qa,rotateY:qa,rotateZ:qa,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:qa,skewX:qa,skewY:qa,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:Mc,originX:i1,originY:i1,originZ:Et},Op={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,top:Et,right:Et,bottom:Et,left:Et,inset:Et,insetBlock:Et,insetBlockStart:Et,insetBlockEnd:Et,insetInline:Et,insetInlineStart:Et,insetInlineEnd:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,paddingBlock:Et,paddingBlockStart:Et,paddingBlockEnd:Et,paddingInline:Et,paddingInlineStart:Et,paddingInlineEnd:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,marginBlock:Et,marginBlockStart:Et,marginBlockEnd:Et,marginInline:Et,marginInlineStart:Et,marginInlineEnd:Et,fontSize:Et,backgroundPositionX:Et,backgroundPositionY:Et,...V3,zIndex:b1,fillOpacity:Mc,strokeOpacity:Mc,numOctaves:b1},Y3={...Op,color:so,backgroundColor:so,outlineColor:so,fill:so,stroke:so,borderColor:so,borderTopColor:so,borderRightColor:so,borderBottomColor:so,borderLeftColor:so,filter:Zm,WebkitFilter:Zm,mask:Jm,WebkitMask:Jm},Zb=t=>Y3[t],W3=new Set([Zm,Jm]);function Jb(t,n){let i=Zb(t);return W3.has(i)||(i=Vi),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const F3=new Set(["auto","none","0"]);function X3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!F3.has(u)&&xl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Jb(i,c)}class q3 extends Ep{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),Sp(x))){const b=Wb(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Xb.has(a)||n.length!==2)return;const[c,u]=n,d=x1(c),h=x1(u),p=o1(c),g=o1(u);if(p!==g&&Qa[a]){this.needsMeasurement=!0;return}if(d!==h)if(h1(d)&&h1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Qa[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||I3(n[c]))&&a.push(c);a.length&&X3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qa[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Qa[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function zp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const e5=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function md(t){return sb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:$p}=xb(queueMicrotask,!1),Hi={x:!1,y:!1};function t5(){return Hi.x||Hi.y}function G3(t){return t==="x"||t==="y"?Hi[t]?null:(Hi[t]=!0,()=>{Hi[t]=!1}):Hi.x||Hi.y?null:(Hi.x=Hi.y=!0,()=>{Hi.x=Hi.y=!1})}function n5(t,n){const i=zp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function K3(t){return!(t.pointerType==="touch"||t5())}function Q3(t,n,i={}){const[a,c,u]=n5(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=C=>{g&&(g(C),g=void 0),_()},b=C=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(C))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=C=>{if(C.pointerType!=="touch"){if(h){p=!0;return}x(C)}},k=C=>{if(!K3(C))return;p=!1;const j=n(d,C);typeof j=="function"&&(g=j,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",k,c),d.addEventListener("pointerdown",w,c)}),u}const s5=(t,n)=>n?t===n?!0:s5(t,n.parentElement):!1,Ip=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Z3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function J3(t){return Z3.has(t.tagName)||t.isContentEditable===!0}const ek=new Set(["INPUT","SELECT","TEXTAREA"]);function tk(t){return ek.has(t.tagName)||t.isContentEditable===!0}const pd=new WeakSet;function v1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const nk=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=v1(()=>{if(pd.has(i))return;mm(i,"down");const c=v1(()=>{mm(i,"up")}),u=()=>mm(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function w1(t){return Ip(t)&&!t5()}const S1=new WeakSet;function sk(t,n,i={}){const[a,c,u]=n5(t,i),d=h=>{const p=h.currentTarget;if(!w1(h)||S1.has(h))return;pd.add(p),i.stopPropagation&&S1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),pd.has(p)&&pd.delete(p),w1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||s5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),md(h)&&(h.addEventListener("focus",g=>nk(g,c)),!J3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function $d(t){return sb(t)&&"ownerSVGElement"in t}const _d=new WeakMap;let Ga;const o5=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:$d(a)&&"getBBox"in a?a.getBBox()[n]:a[i],ok=o5("inline","width","offsetWidth"),ik=o5("block","height","offsetHeight");function ak({target:t,borderBoxSize:n}){var i;(i=_d.get(t))==null||i.forEach(a=>{a(t,{get width(){return ok(t,n)},get height(){return ik(t,n)}})})}function rk(t){t.forEach(ak)}function lk(){typeof ResizeObserver>"u"||(Ga=new ResizeObserver(rk))}function ck(t,n){Ga||lk();const i=zp(t);return i.forEach(a=>{let c=_d.get(a);c||(c=new Set,_d.set(a,c)),c.add(n),Ga==null||Ga.observe(a)}),()=>{i.forEach(a=>{const c=_d.get(a);c==null||c.delete(n),c!=null&&c.size||Ga==null||Ga.unobserve(a)})}}const gd=new Set;let hl;function uk(){hl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};gd.forEach(n=>n(t))},window.addEventListener("resize",hl)}function dk(t){return gd.add(t),hl||uk(),()=>{gd.delete(t),!gd.size&&typeof hl=="function"&&(window.removeEventListener("resize",hl),hl=void 0)}}function C1(t,n){return typeof t=="function"?dk(t):ck(t,n)}function i5(t){return $d(t)&&t.tagName==="svg"}function fk(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=Db(c,u,d);return n?h(a):h}const hk=[...Qb,so,Vi],mk=t=>hk.find(Kb(t)),k1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ml=()=>({x:k1(),y:k1()}),j1=()=>({min:0,max:0}),no=()=>({x:j1(),y:j1()}),Ec=new WeakMap;function Id(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ac(t){return typeof t=="string"||Array.isArray(t)}const Pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Pp];function Pd(t){return Id(t.animate)||Hp.some(n=>Ac(t[n]))}function a5(t){return!!(Pd(t)||t.variants)}function pk(t,n,i){for(const a in n){const c=n[a],u=i[a];if(uo(c))t.addValue(a,c);else if(uo(u))t.addValue(a,er(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,er(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const ep={current:null},r5={current:!1},_k=typeof window<"u";function gk(){if(r5.current=!0,!!_k)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>ep.current=t.matches;t.addEventListener("change",n),n()}else ep.current=!1}const M1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function l5(t){Dd=t}function yk(){return Dd}class c5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ep,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Vo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ss.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Pd(i),this.isVariantNode=a5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&uo(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,Ec.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(r5.current||gk(),this.shouldReduceMotion=ep.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),ba(this.notifyUpdate),ba(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Vb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Hb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:ei(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=wl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ss.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const i=Dd[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):no()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<M1.length;a++){const c=M1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=pk(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=er(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(nb(a)||ob(a))?a=parseFloat(a):!mk(a)&&Vi.test(i)&&(a=Jb(n,i)),this.setBaseTarget(n,uo(a)?a.get():a)),uo(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Rp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!uo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new bp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){$p.render(this.render)}}class u5 extends c5{constructor(){super(...arguments),this.KeyframeResolver=q3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;uo(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class tr{constructor(n){this.isMounted=!1,this.node=n}update(){}}function d5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function xk({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function bk(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function tp({scale:t,scaleX:n,scaleY:i}){return!pm(t)||!pm(n)||!pm(i)}function Sr(t){return tp(t)||f5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function f5(t){return T1(t.x)||T1(t.y)}function T1(t){return t&&t!=="0%"}function Nd(t,n,i){const a=t-i,c=n*a;return i+c}function E1(t,n,i,a,c){return c!==void 0&&(t=Nd(t,c,a)),Nd(t,i,a)+n}function np(t,n=0,i=1,a,c){t.min=E1(t.min,n,i,a,c),t.max=E1(t.max,n,i,a,c)}function h5(t,{x:n,y:i}){np(t.x,n.translate,n.scale,n.originPoint),np(t.y,i.translate,i.scale,i.originPoint)}const A1=.999999999999,D1=1.0000000000001;function vk(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Qi(t.x,-u.scroll.offset.x),Qi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,h5(t,d)),a&&Sr(u.latestValues)&&yd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<D1&&n.x>A1&&(n.x=1),n.y<D1&&n.y>A1&&(n.y=1)}function Qi(t,n){t.min+=n,t.max+=n}function N1(t,n,i,a,c=.5){const u=ps(t.min,t.max,c);np(t,n,i,u,a)}function R1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function yd(t,n,i){const a=i!=null?i:t;N1(t.x,R1(n.x,a.x),n.scaleX,n.scale,n.originX),N1(t.y,R1(n.y,a.y),n.scaleY,n.scale,n.originY)}function m5(t,n){return d5(bk(t.getBoundingClientRect(),n))}function wk(t,n,i){const a=m5(t,i),{scroll:c}=n;return c&&(Qi(a.x,c.offset.x),Qi(a.y,c.offset.y)),a}const Sk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ck=vl.length;function kk(t,n,i){let a="",c=!0;for(let u=0;u<Ck;u++){const d=vl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=e5(h,Op[d]);if(!p){c=!1;const _=Sk[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Up(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(wl.has(p)){d=!0;continue}else if(vb(p)){c[p]=g;continue}else{const _=e5(g,Op[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=kk(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function p5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function B1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const fc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Et.test(t))t=parseFloat(t);else return t;const i=B1(t,n.target.x),a=B1(t,n.target.y);return`${i}% ${a}%`}},jk={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Vi.parse(t);if(c.length>5)return a;const u=Vi.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=ps(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},sp={borderRadius:{...fc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fc,borderTopRightRadius:fc,borderBottomLeftRadius:fc,borderBottomRightRadius:fc,boxShadow:jk};function _5(t,{layout:n,layoutId:i}){return wl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!sp[t]||t==="opacity")}function Vp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(uo(a[h])||c&&uo(c[h])||_5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function Mk(t){return window.getComputedStyle(t)}class g5 extends u5{constructor(){super(...arguments),this.type="html",this.renderInstance=p5}readValueFromInstance(n,i){var a;if(wl.has(i))return(a=this.projection)!=null&&a.isProjecting?Vm(i):qC(n,i);{const c=Mk(n),u=(vb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return m5(n,i)}build(n,i,a){Up(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Vp(n,i,a)}}function Tk(t,n){return t in n}class Ek extends c5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(Tk(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return no()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const Ak={offset:"stroke-dashoffset",array:"stroke-dasharray"},Dk={offset:"strokeDashoffset",array:"strokeDasharray"};function Nk(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?Ak:Dk;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const Rk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function y5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Up(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const k of Rk)x[k]!==void 0&&(b[k]=x[k],delete x[k]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&Nk(x,c,u,d,!1)}const x5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),b5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Bk(t,n,i,a){p5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(x5.has(c)?c:Bp(c),n.attrs[c])}function v5(t,n,i){const a=Vp(t,n,i);for(const c in t)if(uo(t[c])||uo(n[c])){const u=vl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class w5 extends u5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=no}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(wl.has(i)){const a=Zb(i);return a&&a.default||0}return i=x5.has(i)?i:Bp(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return v5(n,i,a)}build(n,i,a){y5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){Bk(n,i,a,c)}mount(n){this.isSVGTag=b5(n.tagName),super.mount(n)}}const Lk=Hp.length;function S5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?S5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<Lk;i++){const a=Hp[i],c=t.props[a];(Ac(c)||c===!1)&&(n[a]=c)}return n}function C5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const Ok=[...Pp].reverse(),zk=Pp.length;function $k(t){return n=>Promise.all(n.map(({animation:i,options:a})=>z3(t,i,a)))}function Ik(t){let n=$k(t),i=L1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=Er(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:k,...C}=b;_={..._,...C,...k}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=S5(t.parent)||{},b=[],w=new Set;let S={},k=1/0;for(let j=0;j<zk;j++){const N=Ok[j],B=i[N],A=_[N]!==void 0?_[N]:x[N],I=Ac(A),V=N===g?B.isActive:null;V===!1&&(k=j);let X=A===x[N]&&A!==_[N]&&I;if(X&&(a||c)&&t.manuallyAnimateOnMount&&(X=!1),B.protectedKeys={...S},!B.isActive&&V===null||!A&&!B.prevProp||Id(A)||typeof A=="boolean")continue;if(N==="exit"&&B.isActive&&V!==!0){B.prevResolvedValues&&(S={...S,...B.prevResolvedValues});continue}const U=Pk(B.prevProp,A);let G=U||N===g&&B.isActive&&!X&&I||j>k&&I,re=!1;const oe=Array.isArray(A)?A:[A];let Ce=oe.reduce(u(N),{});V===!1&&(Ce={});const{prevResolvedValues:Le={}}=B,Q={...Le,...Ce},de=Y=>{G=!0,w.has(Y)&&(re=!0,w.delete(Y)),B.needsAnimating[Y]=!0;const q=t.getValue(Y);q&&(q.liveStyle=!1)};for(const Y in Q){const q=Ce[Y],ge=Le[Y];if(S.hasOwnProperty(Y))continue;let D=!1;Gm(q)&&Gm(ge)?D=!C5(q,ge):D=q!==ge,D?q!=null?de(Y):w.add(Y):q!==void 0&&w.has(Y)?de(Y):B.protectedKeys[Y]=!0}B.prevProp=A,B.prevResolvedValues=Ce,B.isActive&&(S={...S,...Ce}),(a||c)&&t.blockInitialAnimation&&(G=!1);const O=X&&U;G&&(!O||re)&&b.push(...oe.map(Y=>{const q={type:N};if(typeof Y=="string"&&(a||c)&&!O&&t.manuallyAnimateOnMount&&t.parent){const{parent:ge}=t,D=Er(ge,Y);if(ge.enteringChildren&&D){const{delayChildren:ae}=D.transition||{};q.delay=Yb(ge.enteringChildren,t,ae)}}return{animation:Y,options:q}}))}if(w.size){const j={};if(typeof _.initial!="boolean"){const N=Er(t,Array.isArray(_.initial)?_.initial[0]:_.initial);N&&N.transition&&(j.transition=N.transition)}w.forEach(N=>{const B=t.getBaseTarget(N),A=t.getValue(N);A&&(A.liveStyle=!0),j[N]=B!=null?B:null}),b.push({animation:j})}let C=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(C=!1),a=!1,c=!1,C?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=L1(),c=!0}}}function Pk(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!C5(n,t):!1}function vr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function L1(){return{animate:vr(!0),whileInView:vr(),whileHover:vr(),whileTap:vr(),whileDrag:vr(),whileFocus:vr(),exit:vr()}}function op(t,n){t.min=n.min,t.max=n.max}function Pi(t,n){op(t.x,n.x),op(t.y,n.y)}function O1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const k5=1e-4,Hk=1-k5,Uk=1+k5,j5=.01,Vk=0-j5,Yk=0+j5;function Yo(t){return t.max-t.min}function Wk(t,n,i){return Math.abs(t-n)<=i}function z1(t,n,i,a=.5){t.origin=a,t.originPoint=ps(n.min,n.max,t.origin),t.scale=Yo(i)/Yo(n),t.translate=ps(i.min,i.max,t.origin)-t.originPoint,(t.scale>=Hk&&t.scale<=Uk||isNaN(t.scale))&&(t.scale=1),(t.translate>=Vk&&t.translate<=Yk||isNaN(t.translate))&&(t.translate=0)}function Cc(t,n,i,a){z1(t.x,n.x,i.x,a?a.originX:void 0),z1(t.y,n.y,i.y,a?a.originY:void 0)}function $1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Yo(n)}function Fk(t,n,i,a){$1(t.x,n.x,i.x,a==null?void 0:a.x),$1(t.y,n.y,i.y,a==null?void 0:a.y)}function I1(t,n,i,a=0){const c=a?ps(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Yo(n)}function Rd(t,n,i,a){I1(t.x,n.x,i.x,a==null?void 0:a.x),I1(t.y,n.y,i.y,a==null?void 0:a.y)}function P1(t,n,i,a,c){return t-=n,t=Nd(t,1/i,a),c!==void 0&&(t=Nd(t,1/c,a)),t}function Xk(t,n=0,i=1,a=.5,c,u=t,d=t){if(Ji.test(n)&&(n=parseFloat(n),n=ps(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=ps(u.min,u.max,a);t===u&&(h-=n),t.min=P1(t.min,n,i,h,c),t.max=P1(t.max,n,i,h,c)}function H1(t,n,[i,a,c],u,d){Xk(t,n[i],n[a],n[c],n.scale,u,d)}const qk=["x","scaleX","originX"],Gk=["y","scaleY","originY"];function U1(t,n,i,a){H1(t.x,n,qk,i?i.x:void 0,a?a.x:void 0),H1(t.y,n,Gk,i?i.y:void 0,a?a.y:void 0)}function V1(t){return t.translate===0&&t.scale===1}function M5(t){return V1(t.x)&&V1(t.y)}function Y1(t,n){return t.min===n.min&&t.max===n.max}function Kk(t,n){return Y1(t.x,n.x)&&Y1(t.y,n.y)}function W1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function T5(t,n){return W1(t.x,n.x)&&W1(t.y,n.y)}function F1(t){return Yo(t.x)/Yo(t.y)}function X1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Ki(t){return[t("x"),t("y")]}function Qk(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const E5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Zk=E5.length,q1=t=>typeof t=="string"?parseFloat(t):t,G1=t=>typeof t=="number"||Et.test(t);function Jk(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=ps(0,(d=i.opacity)!=null?d:1,e8(a)),t.opacityExit=ps((h=n.opacity)!=null?h:1,0,t8(a))):u&&(t.opacity=ps((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<Zk;_++){const x=E5[_];let b=K1(n,x),w=K1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||G1(b)===G1(w)?(t[x]=Math.max(ps(q1(b),q1(w),a),0),(Ji.test(w)||Ji.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=ps(n.rotate||0,i.rotate||0,a))}function K1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const e8=A5(0,.5,hb),t8=A5(.5,.95,Mi);function A5(t,n,i){return a=>a<t?0:a>n?1:i(yl(t,n,a))}function D5(t,n,i){const a=uo(t)?t:er(t);return a.start(Np("",a,n,i)),a.animation}function Dc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const n8=(t,n)=>t.depth-n.depth;class s8{constructor(){this.children=[],this.isDirty=!1}add(n){yp(this.children,n),this.isDirty=!0}remove(n){gl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(n8),this.isDirty=!1,this.children.forEach(n)}}function o8(t,n){const i=Vo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(ba(a),t(u-n))};return ss.setup(a,!0),()=>ba(a)}function xd(t){return uo(t)?t.get():t}class i8{constructor(){this.members=[]}add(n){yp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(gl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(gl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const bd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],a8=1e3;let r8=0;function gm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function N5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Gb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ss,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&N5(a)}function R5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=r8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(u8),this.nodes.forEach(_8),this.nodes.forEach(g8),this.nodes.forEach(d8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new s8)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new bp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=$d(d)&&!i5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;ss.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=o8(b,250),bd.hasAnimatedSinceResize&&(bd.hasAnimatedSinceResize=!1,this.nodes.forEach(J1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||w8,{onLayoutAnimationStart:k,onLayoutAnimationComplete:C}=g.getProps(),j=!this.targetLayout||!T5(this.targetLayout,w),N=!x&&b;if(this.options.layoutRoot||this.resumeFrom||N||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Dp(S,"layout"),onPlay:k,onComplete:C};(g.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(_,N)}else x||J1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ba(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(y8),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&N5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(h8),this.nodes.forEach(Q1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Z1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(m8),this.nodes.forEach(p8),this.nodes.forEach(l8),this.nodes.forEach(c8)):this.nodes.forEach(Z1),this.clearAllSnapshots();const h=Vo.now();Mo.delta=ea(0,1e3/60,h-Mo.timestamp),Mo.timestamp=h,Mo.isProcessing=!0,lm.update.process(Mo),lm.preRender.process(Mo),lm.render.process(Mo),Mo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(f8),this.sharedNodes.forEach(x8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ss.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ss.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yo(this.snapshot.measuredBox.x)&&!Yo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=no()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!M5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||Sr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),S8(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return no();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(C8))){const{scroll:_}=this.root;_&&(Qi(h.x,_.offset.x),Qi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=no();if(Pi(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Pi(h,d),Qi(h.x,x.offset.x),Qi(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||no();Pi(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Qi(g.x,-w.scroll.offset.x),Qi(g.y,-w.scroll.offset.y)),Sr(w.latestValues)&&yd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return Sr(this.latestValues)&&yd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=no();Pi(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!Sr(_.latestValues))continue;let x;_.instance&&(tp(_.latestValues)&&_.updateSnapshot(),x=no(),Pi(x,_.measurePageBox())),U1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return Sr(this.latestValues)&&U1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=Mo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=no(),this.targetWithTransforms=no()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Fk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Pi(this.target,this.layout.layoutBox),h5(this.target,this.targetDelta)):Pi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tp(this.parent.latestValues)||f5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=no(),this.relativeTargetOrigin=no(),Rd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Pi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Mo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Pi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;vk(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=no());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(O1(this.prevProjectionDelta.x,this.projectionDelta.x),O1(this.prevProjectionDelta.y,this.projectionDelta.y)),Cc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!X1(this.projectionDelta.x,this.prevProjectionDelta.x)||!X1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ml(),this.projectionDelta=ml(),this.projectionDeltaWithTransform=ml()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=ml();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=no(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=w!==S,C=this.getStack(),j=!C||C.members.length<=1,N=!!(k&&!j&&this.options.crossfade===!0&&!this.path.some(v8));this.animationProgress=0;let B;this.mixTargetDelta=A=>{const I=A/1e3;ex(x.x,d.x,I),ex(x.y,d.y,I),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),b8(this.relativeTarget,this.relativeTargetOrigin,b,I),B&&Kk(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=no()),Pi(B,this.relativeTarget)),k&&(this.animationValues=_,Jk(_,g,this.latestValues,I,N,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(ba(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ss.update(()=>{bd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=er(0)),this.motionValue.jump(0,!1),this.currentAnimation=D5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(a8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&B5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||no();const x=Yo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Yo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Pi(h,p),yd(h,_),Cc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new i8),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,k;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=xd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Sr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=Qk(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(k=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?k:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const C in sp){if(_[C]===void 0)continue;const{correct:j,applyTo:N,isCSSVariable:B}=sp[C],A=x==="none"?_[C]:j(_[C],g);if(N){const I=N.length;for(let V=0;V<I;V++)d[N[V]]=A}else B?this.options.visualElement.renderState.vars[C]=A:d[C]=A}this.options.layoutId&&(d.pointerEvents=g===this?xd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Q1),this.root.sharedNodes.clear()}}}function l8(t){t.updateLayout()}function c8(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Yo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";op(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else B5(u,n.layoutBox,a)&&Ki(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Yo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=ml();Cc(h,a,n.layoutBox);const p=ml();d?Cc(p,t.applyTransform(c,!0),n.measuredBox):Cc(p,a,n.layoutBox);const g=!M5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,k=no();Rd(k,n.layoutBox,b.layoutBox,S);const C=no();Rd(C,a,w.layoutBox,S),T5(k,C)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=C,t.relativeTargetOrigin=k,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function u8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function d8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function f8(t){t.clearSnapshot()}function Q1(t){t.clearMeasurements()}function h8(t){t.isLayoutDirty=!0,t.updateLayout()}function Z1(t){t.isLayoutDirty=!1}function m8(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function p8(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function J1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function _8(t){t.resolveTargetDelta()}function g8(t){t.calcProjection()}function y8(t){t.resetSkewAndRotation()}function x8(t){t.removeLeadSnapshot()}function ex(t,n,i){t.translate=ps(n.translate,0,i),t.scale=ps(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function tx(t,n,i,a){t.min=ps(n.min,i.min,a),t.max=ps(n.max,i.max,a)}function b8(t,n,i,a){tx(t.x,n.x,i.x,a),tx(t.y,n.y,i.y,a)}function v8(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const w8={duration:.45,ease:[.4,0,.1,1]},nx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sx=nx("applewebkit/")&&!nx("chrome/")?Math.round:Mi;function ox(t){t.min=sx(t.min),t.max=sx(t.max)}function S8(t){ox(t.x),ox(t.y)}function B5(t,n,i){return t==="position"||t==="preserve-aspect"&&!Wk(F1(n),F1(i),.2)}function C8(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const k8=R5({attachResizeListener:(t,n)=>Dc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},L5=R5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new k8({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Hd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function ix(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function j8(...t){return n=>{let i=!1;const a=t.map(c=>{const u=ix(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():ix(t[c],null)}}}}function M8(...t){return y.useCallback(j8(...t),t)}class T8 extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(md(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=md(a)&&a.offsetWidth||0,u=md(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function E8({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Hd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=M8(h,_);return y.useInsertionEffect(()=>{const{width:S,height:k,top:C,left:j,right:N,bottom:B}=p.current;if(n||u===!1||!h.current||!S||!k)return;const A=i==="left"?`left: ${j}`:`right: ${N}`,I=a==="bottom"?`bottom: ${B}`:`top: ${C}`;h.current.dataset.motionPopId=d;const V=document.createElement("style");g&&(V.nonce=g);const X=c!=null?c:document.head;return X.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${k}px !important;
            ${A}px !important;
            ${I}px !important;
          }
        `),()=>{var U;(U=h.current)==null||U.removeAttribute("data-motion-pop-id"),X.contains(V)&&X.removeChild(V)}},[n]),l.jsx(T8,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const A8=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Rc(D8),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const k of _.values())if(!k)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,k)=>_.set(k,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=l.jsx(E8,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),l.jsx(Od.Provider,{value:w,children:t})};function D8(){return new Map}function O5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const id=t=>t.key||"";function ax(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Ud=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=O5(d),b=y.useMemo(()=>ax(t),[t]),w=d&&!_?[]:b.map(id),S=y.useRef(!0),k=y.useRef(b),C=Rc(()=>new Map),j=y.useRef(new Set),[N,B]=y.useState(b),[A,I]=y.useState(b);gp(()=>{S.current=!1,k.current=b;for(let U=0;U<A.length;U++){const G=id(A[U]);w.includes(G)?(C.delete(G),j.current.delete(G)):C.get(G)!==!0&&C.set(G,!1)}},[A,w.length,w.join("-")]);const V=[];if(b!==N){let U=[...b];for(let G=0;G<A.length;G++){const re=A[G],oe=id(re);w.includes(oe)||(U.splice(G,0,re),V.push(re))}return u==="wait"&&V.length&&(U=V),I(ax(U)),B(b),null}const{forceRender:X}=y.useContext(_p);return l.jsx(l.Fragment,{children:A.map(U=>{const G=id(U),re=d&&!_?!1:b===A||w.includes(G),oe=()=>{if(j.current.has(G))return;if(C.has(G))j.current.add(G),C.set(G,!0);else return;let Ce=!0;C.forEach(Le=>{Le||(Ce=!1)}),Ce&&(X==null||X(),I(k.current),d&&(x==null||x()),a&&a())};return l.jsx(A8,{isPresent:re,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:re?void 0:oe,anchorX:h,anchorY:p,children:U},G)})})},z5=y.createContext({strict:!1}),rx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let lx=!1;function N8(){if(lx)return;const t={};for(const n in rx)t[n]={isEnabled:i=>rx[n].some(a=>!!i[a])};l5(t),lx=!0}function $5(){return N8(),yk()}function R8(t){const n=$5();for(const i in t)n[i]={...n[i],...t[i]};l5(n)}const B8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||B8.has(t)}let I5=t=>!Bd(t);function L8(t){typeof t=="function"&&(I5=n=>n.startsWith("on")?!Bd(n):t(n))}try{L8(require("@emotion/is-prop-valid").default)}catch{}function O8(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||uo(t[c])||(I5(c)||i===!0&&Bd(c)||!n&&!Bd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Vd=y.createContext({});function z8(t,n){if(Pd(t)){const{initial:i,animate:a}=t;return{initial:i===!1||Ac(i)?i:void 0,animate:Ac(a)?a:void 0}}return t.inherit!==!1?n:{}}function $8(t){const{initial:n,animate:i}=z8(t,y.useContext(Vd));return y.useMemo(()=>({initial:n,animate:i}),[cx(n),cx(i)])}function cx(t){return Array.isArray(t)?t.join(" "):t}const Yp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P5(t,n,i){for(const a in n)!uo(n[a])&&!_5(a,i)&&(t[a]=n[a])}function I8({transformTemplate:t},n){return y.useMemo(()=>{const i=Yp();return Up(i,n,t),Object.assign({},i.vars,i.style)},[n])}function P8(t,n){const i=t.style||{},a={};return P5(a,i,t),Object.assign(a,I8(t,n)),a}function H8(t,n){const i={},a=P8(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const H5=()=>({...Yp(),attrs:{}});function U8(t,n,i,a){const c=y.useMemo(()=>{const u=H5();return y5(u,n,b5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};P5(u,t.style,t),c.style={...u,...c.style}}return c}const V8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wp(t){return typeof t!="string"||t.includes("-")?!1:!!(V8.indexOf(t)>-1||/[A-Z]/u.test(t))}function Y8(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Wp(t))?U8:H8)(n,a,c,t),g=O8(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>uo(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function W8({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:F8(i,a,c,t),renderState:n()}}function F8(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=xd(u[b]);let{initial:d,animate:h}=t;const p=Pd(t),g=a5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Id(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Rp(t,b[w]);if(S){const{transitionEnd:k,transition:C,...j}=S;for(const N in j){let B=j[N];if(Array.isArray(B)){const A=_?B.length-1:0;B=B[A]}B!==null&&(c[N]=B)}for(const N in k)c[N]=k[N]}}}return c}const U5=t=>(n,i)=>{const a=y.useContext(Vd),c=y.useContext(Od),u=()=>W8(t,n,a,c);return i?u():Rc(u)},X8=U5({scrapeMotionValuesFromProps:Vp,createRenderState:Yp}),q8=U5({scrapeMotionValuesFromProps:v5,createRenderState:H5}),G8=Symbol.for("motionComponentSymbol");function K8(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const V5=y.createContext({});function ul(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Q8(t,n,i,a,c,u){var B,A;const{visualElement:d}=y.useContext(Vd),h=y.useContext(z5),p=y.useContext(Od),g=y.useContext(Hd),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,k=y.useContext(V5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Z8(b.current,i,c,k);const C=y.useRef(!1);y.useInsertionEffect(()=>{S&&C.current&&S.update(i,p)});const j=i[qb],N=y.useRef(!!j&&typeof window<"u"&&!((B=window.MotionHandoffIsComplete)!=null&&B.call(window,j))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,j)));return gp(()=>{w.current=!0,S&&(C.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),N.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!N.current&&S.animationState&&S.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)==null||I.call(window,j)}),N.current=!1),S.enteringChildren=void 0)}),S}function Z8(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:Y5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&ul(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function Y5(t){if(t)return t.options.allowProjection!==!1?t.projection:Y5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&R8(a);const u=i?i==="svg":Wp(t),d=u?q8:X8;function h(x,b){let w;const S={...y.useContext(Hd),...x,layoutId:J8(x)},{isStatic:k}=S,C=$8(x),j=d(x,k);if(!k&&typeof window<"u"){ej();const N=tj(S);w=N.MeasureLayout,C.visualElement=Q8(t,j,S,c,N.ProjectionNode,u)}return l.jsxs(Vd.Provider,{value:C,children:[w&&C.visualElement?l.jsx(w,{visualElement:C.visualElement,...S}):null,Y8(t,x,K8(j,C.visualElement,b),j,k,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[G8]=t,p}function J8({layoutId:t}){const n=y.useContext(_p).id;return n&&t!==void 0?n+"-"+t:t}function ej(t,n){y.useContext(z5).strict}function tj(t){const n=$5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function nj(t,n){if(typeof Proxy>"u")return xm;const i=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,xm(d,void 0,t,n)),i.get(d))})}const sj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Wp(t))?new w5(n):new g5(n,{allowProjection:t!==y.Fragment})};class oj extends tr{constructor(n){super(n),n.animationState||(n.animationState=Ik(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Id(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let ij=0;class aj extends tr{constructor(){super(...arguments),this.id=ij++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=Er(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const rj={animation:{Feature:oj},exit:{Feature:aj}};function zc(t){return{point:{x:t.pageX,y:t.pageY}}}const lj=t=>n=>Ip(n)&&t(n,zc(n));function kc(t,n,i,a){return Dc(t,n,lj(i),a)}const W5=({current:t})=>t?t.ownerDocument.defaultView:null,ux=(t,n)=>Math.abs(t-n);function cj(t,n){const i=ux(t.x,n.x),a=ux(t.y,n.y);return Math.sqrt(i**2+a**2)}const dx=new Set(["auto","scroll"]);class F5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const w=bm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,k=cj(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!k)return;const{point:C}=w,{timestamp:j}=Mo;this.history.push({...C,timestamp:j});const{onStart:N,onMove:B}=this.handlers;S||(N&&N(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ad(S,this.transformPagePoint),ss.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:k,onSessionEnd:C,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=bm(w.type==="pointercancel"?this.lastMoveEventInfo:ad(S,this.transformPagePoint),this.history);this.startEvent&&k&&k(w,N),C&&C(w,N)},!Ip(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=zc(n),g=ad(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=Mo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,bm(g,this.history)),this.removeListeners=Bc(kc(this.contextWindow,"pointermove",this.handlePointerMove),kc(this.contextWindow,"pointerup",this.handlePointerUp),kc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(dx.has(a.overflowX)||dx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ss.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ba(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function fx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:fx(t,X5(n)),offset:fx(t,uj(n)),velocity:dj(n,.1)}}function uj(t){return t[0]}function X5(t){return t[t.length-1]}function dj(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=X5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>ei(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>ei(n)*2&&(a=t[1]);const u=ji(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function fj(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?ps(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?ps(i,t,a.max):Math.min(t,i)),t}function hx(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function hj(t,{top:n,left:i,bottom:a,right:c}){return{x:hx(t.x,i,c),y:hx(t.y,n,a)}}function mx(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function mj(t,n){return{x:mx(t.x,n.x),y:mx(t.y,n.y)}}function pj(t,n){let i=.5;const a=Yo(t),c=Yo(n);return c>a?i=yl(n.min,n.max-a,t.min):a>c&&(i=yl(t.min,t.max-c,n.min)),ea(0,1,i)}function _j(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const ip=.35;function gj(t=ip){return t===!1?t=0:t===!0&&(t=ip),{x:px(t,"left","right"),y:px(t,"top","bottom")}}function px(t,n,i){return{min:_x(t,n),max:_x(t,i)}}function _x(t,n){return typeof t=="number"?t:t[n]||0}const yj=new WeakMap;class xj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=no(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(zc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=G3(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(j=>{let N=this.getAxisMotionValue(j).get()||0;if(Ji.test(N)){const{projection:B}=this.visualElement;if(B&&B.layout){const A=B.layout.layoutBox[j];A&&(N=Yo(A)*(parseFloat(N)/100))}}this.originPoint[j]=N}),k&&ss.update(()=>k(x,b),!1,!0),Km(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:C}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:j}=b;if(S&&this.currentDirection===null){this.currentDirection=vj(j),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,j),this.updateAxis("y",b.point,j),this.visualElement.render(),C&&ss.update(()=>C(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new F5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:W5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ss.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=fj(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&ul(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=hj(a.layoutBox,n):this.constraints=!1,this.elastic=gj(i),c!==this.constraints&&!ul(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Ki(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=_j(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!ul(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=wk(a,c.root,this.visualElement.getTransformPagePoint());let d=mj(c.layout.layoutBox,u);if(i){const h=i(xk(d));this.hasMutatedConstraints=!!h,h&&(d=d5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Ki(_=>{if(!rd(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Km(this.visualElement,n),a.start(Np(n,a,0,i,this.visualElement,!1))}stopAnimation(){Ki(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Ki(i=>{const{drag:a}=this.getProps();if(!rd(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-ps(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!ul(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ki(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=pj({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ki(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(ps(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yj.set(this.visualElement,this);const n=this.visualElement.current,i=kc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&tk(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();ul(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=bj(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ss.read(c);const h=Dc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Ki(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=ip,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function gx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function bj(t,n,i){const a=C1(t,gx(i)),c=C1(n,gx(i));return()=>{a(),c()}}function rd(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function vj(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class wj extends tr{constructor(n){super(n),this.removeGroupControls=Mi,this.removeListeners=Mi,this.controls=new xj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,i)=>{t&&ss.update(()=>t(n,i),!1,!0)};class Sj extends tr{constructor(){super(...arguments),this.removePointerDownListener=Mi}onPointerDown(n){this.session=new F5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:W5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(i),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&ss.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=kc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class Cj extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),wm=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ss.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),$p.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function q5(t){const[n,i]=O5(),a=y.useContext(_p);return l.jsx(Cj,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(V5),isPresent:n,safeToRemove:i})}const kj={pan:{Feature:Sj},drag:{Feature:wj,ProjectionNode:L5,MeasureLayout:q5}};function yx(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ss.postRender(()=>u(n,zc(n)))}class jj extends tr{mount(){const{current:n}=this.node;n&&(this.unmount=Q3(n,(i,a)=>(yx(this.node,a,"Start"),c=>yx(this.node,c,"End"))))}unmount(){}}class Mj extends tr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Bc(Dc(this.node.current,"focus",()=>this.onFocus()),Dc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ss.postRender(()=>u(n,zc(n)))}class Tj extends tr{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=sk(n,(c,u)=>(xx(this.node,u,"Start"),(d,{success:h})=>xx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const ap=new WeakMap,Sm=new WeakMap,Ej=t=>{const n=ap.get(t.target);n&&n(t)},Aj=t=>{t.forEach(Ej)};function Dj({root:t,...n}){const i=t||document;Sm.has(i)||Sm.set(i,{});const a=Sm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(Aj,{root:t,...n})),a[c]}function Nj(t,n,i){const a=Dj(n);return ap.set(t,i),a.observe(t),()=>{ap.delete(t),a.unobserve(t)}}const Rj={some:0,all:1};class Bj extends tr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Rj[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=Nj(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(Lj(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Lj({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const Oj={inView:{Feature:Bj},tap:{Feature:Tj},focus:{Feature:Mj},hover:{Feature:jj}},zj={layout:{ProjectionNode:L5,MeasureLayout:q5}},$j={...rj,...Oj,...kj,...zj},Jo=nj($j,sj);function rp(t){const n=Rc(()=>er(t)),{isStatic:i}=y.useContext(Hd);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function G5(t,n){const i=rp(n()),a=()=>i.set(n());return a(),gp(()=>{const c=()=>ss.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),ba(a)}}),i}function Ij(t){Sc.current=[],t();const n=G5(Sc.current,t);return Sc.current=void 0,n}function ld(t,n,i,a){if(typeof t=="function")return Ij(t);const u=typeof n=="function"?n:fk(n,i,a),d=Array.isArray(t)?bx(t,u):bx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function bx(t,n){const i=Rc(()=>[]);return G5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Fp(t){return typeof t=="object"&&!Array.isArray(t)}function K5(t,n,i,a){return t==null?[]:typeof t=="string"&&Fp(n)?zp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function Pj(t,n,i){return t*(n+1)}function vx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function Hj(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(gl(t,c),a--)}}function Uj(t,n,i,a,c,u){Hj(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:ps(c,u,a[d]),easing:gb(i,d)})}function Vj(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function Yj(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Wj="easeInOut";function Fj(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,vx(x,S.at,_,g));continue}let[k,C,j={}]=S;j.at!==void 0&&(x=vx(x,j.at,_,g));let N=0;const B=(A,I,V,X=0,U=0)=>{const G=Xj(A),{delay:re=0,times:oe=Rb(G),type:Ce=n.type||"keyframes",repeat:Le,repeatType:Q,repeatDelay:de=0,...O}=I;let{ease:ee=n.ease||"easeOut",duration:Y}=I;const q=typeof re=="function"?re(X,U):re,ge=G.length,D=Ap(Ce)?Ce:c==null?void 0:c[Ce||"keyframes"];if(ge<=2&&D){let De=100;if(ge===2&&Kj(G)){const mt=G[1]-G[0];De=Math.abs(mt)}const We={...n,...O};Y!==void 0&&(We.duration=ei(Y));const Re=Eb(We,De,D);ee=Re.ease,Y=Re.duration}Y!=null||(Y=u);const ae=x+q;oe.length===1&&oe[0]===0&&(oe[1]=1);const se=oe.length-G.length;if(se>0&&Nb(oe,se),G.length===1&&G.unshift(null),Le){Y=Pj(Y,Le);const De=[...G],We=[...oe];ee=Array.isArray(ee)?[...ee]:[ee];const Re=[...ee];for(let mt=0;mt<Le;mt++){G.push(...De);for(let at=0;at<De.length;at++)oe.push(We[at]+(mt+1)),ee.push(at===0?"linear":gb(Re,at-1))}Vj(oe,Le)}const ce=ae+Y;Uj(V,G,ee,oe,ae,ce),N=Math.max(q+Y,N),b=Math.max(ce,b)};if(uo(k)){const A=wx(k,h);B(C,j,Sx("default",A))}else{const A=K5(k,C,a,p),I=A.length;for(let V=0;V<I;V++){C=C,j=j;const X=A[V],U=wx(X,h);for(const G in C)B(C[G],qj(j,G),Sx(G,U),V,I)}}_=x,x+=N}return h.forEach((w,S)=>{for(const k in w){const C=w[k];C.sort(Yj);const j=[],N=[],B=[];for(let X=0;X<C.length;X++){const{at:U,value:G,easing:re}=C[X];j.push(G),N.push(yl(0,b,U)),B.push(re||"easeOut")}N[0]!==0&&(N.unshift(0),j.unshift(j[0]),B.unshift(Wj)),N[N.length-1]!==1&&(N.push(1),j.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const A=d.get(S);A.keyframes[k]=j;const{type:I,...V}=n;A.transition[k]={...V,duration:b,ease:B,times:N,...i}}}),d}function wx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Sx(t,n){return n[t]||(n[t]=[]),n[t]}function Xj(t){return Array.isArray(t)?t:[t]}function qj(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const Gj=t=>typeof t=="number",Kj=t=>t.every(Gj);function Qj(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=$d(t)&&!i5(t)?new w5(n):new g5(n);i.mount(t),Ec.set(t,i)}function Zj(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new Ek(n);i.mount(t),Ec.set(t,i)}function Jj(t,n){return uo(t)||typeof t=="number"||typeof t=="string"&&!Fp(n)}function Q5(t,n,i,a){const c=[];if(Jj(t,n))c.push(D5(t,Fp(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=K5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?Qj:Zj;Ec.has(p)||g(p);const _=Ec.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Lp(_,{...n,transition:x},{}))}}return c}function eM(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=er(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Fj(c,n,i,{spring:Tc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...Q5(p,d,h))}),a}function tM(t){return Array.isArray(t)&&t.some(Array.isArray)}function nM(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(tM(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=eM(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=Q5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new y3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{gl(n.animations,g)})),g}return a}const Cx=nM();var sM=Object.freeze({}),oM=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const k=w.slice(0,-7),C=d.get(k);(C==null?void 0:C.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:sM}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},on=new oM;function iM(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(on.registerPanel(c,t,u.current,p.current),()=>on.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}on.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>on.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>on.subscribe(c,b),()=>on.getValues(c),()=>on.getValues(c));return Z5(n,x,"")}function Z5(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,k]of Object.entries(t)){if(S==="_collapsed")continue;const C=i?`${i}.${S}`:S;if(Array.isArray(k)&&k.length<=4&&typeof k[0]=="number")a[S]=(c=n[C])!=null?c:k[0];else if(typeof k=="number"||typeof k=="boolean"||typeof k=="string")a[S]=(u=n[C])!=null?u:k;else if(aM(k)||rM(k))a[S]=(d=n[C])!=null?d:k;else if(lM(k))a[S]=(h=n[C])!=null?h:k;else if(cM(k)){const j=(p=k.default)!=null?p:fM(k.options);a[S]=(g=n[C])!=null?g:j}else uM(k)?a[S]=(x=(_=n[C])!=null?_:k.default)!=null?x:"#000000":dM(k)?a[S]=(w=(b=n[C])!=null?b:k.default)!=null?w:"":typeof k=="object"&&k!==null&&(a[S]=Z5(k,n,C))}return a}function Sl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function aM(t){return Sl(t,"spring")}function rM(t){return Sl(t,"easing")}function lM(t){return Sl(t,"action")}function cM(t){return Sl(t,"select")&&"options"in t&&Array.isArray(t.options)}function uM(t){return Sl(t,"color")}function dM(t){return Sl(t,"text")}function fM(t){const n=t[0];return typeof n=="string"?n:n.value}function lp(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function vd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(lp(n)))}function hc(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function mc(t,n,i,a,c){var g,_;const u=on.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));on.updateValue(t,n,vd(p,a))}function hM(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function cd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function Cm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function J5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=J5(i.children,n);if(a)return a}}return null}var ud=4;function mM(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function pM(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=mM(n);return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function _M(t){return t.key?`${e2(t.modifier)}${t.key.toUpperCase()}`:"Press"}function e2(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var t2=y.createContext({activePanelId:null,activePath:null});function gM({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=on.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const k=J5(b.controls,w);if(k&&k.type==="slider")return{panelId:b.id,path:w,control:k,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=k=>{if(cd())return;const C=k.key.toLowerCase();if((C==="arrowleft"||C==="arrowright"||C==="arrowup"||C==="arrowdown")&&a.current.size>0){const A=h("scroll")||h("drag")||h("move");if(A&&A.control.type==="slider"){k.preventDefault();const I=C==="arrowright"||C==="arrowup"?1:-1,V=hc(A.control,A.shortcut);mc(A.panelId,A.path,A.control,V,I);return}}const j=a.current.has(C);a.current.add(C);const N=Cm(k),B=on.resolveShortcutTarget(C,N);if(B&&(i({activePanelId:B.panelId,activePath:B.path}),!j&&B.control.type==="toggle")){const A=on.getValue(B.panelId,B.path);on.updateValue(B.panelId,B.path,!A)}j||(u.current=null,d.current=0)},g=k=>{const C=k.key.toLowerCase();if(a.current.delete(C),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let j=!1;for(const N of a.current){const B=Cm(k),A=on.resolveShortcutTarget(N,B);if(A){i({activePanelId:A.panelId,activePath:A.path}),j=!0;break}}j||i({activePanelId:null,activePath:null})}},_=k=>{var N,B;if(cd())return;const C=Cm(k);if(a.current.size>0)for(const A of a.current){const I=on.resolveShortcutTarget(A,C);if(!I)continue;const{panelId:V,path:X,control:U}=I;if(((B=(N=U.shortcut)==null?void 0:N.interaction)!=null?B:"scroll")!=="scroll"||U.type!=="slider")continue;k.preventDefault();const re=hc(U,U.shortcut),oe=k.deltaY>0?-1:1;mc(V,X,U,re,oe);return}const j=on.resolveScrollOnlyTargets();for(const{panelId:A,path:I,control:V,shortcut:X}of j){if(V.type!=="slider")continue;k.preventDefault();const U=hc(V,X),G=k.deltaY>0?-1:1;mc(A,I,V,U,G);return}},x=k=>{if(cd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=k.clientX,d.current=0,k.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=k=>{if(cd()||a.current.size===0)return;if(c.current){const j=h("drag");if(j&&u.current!==null){const N=k.clientX-u.current;u.current=k.clientX,d.current+=N;const B=hc(j.control,j.shortcut),A=Math.trunc(d.current/ud);A!==0&&(d.current-=A*ud,mc(j.panelId,j.path,j.control,B,A))}return}const C=h("move");if(C){if(u.current===null){u.current=k.clientX;return}const j=k.clientX-u.current;u.current=k.clientX,d.current+=j;const N=hc(C.control,C.shortcut),B=Math.trunc(d.current/ud);B!==0&&(d.current-=B*ud,mc(C.panelId,C.path,C.control,N,B))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),l.jsx(t2.Provider,{value:n,children:t})}var Xp="M6 9.5L12 15.5L18 9.5",yM="M5 12.75L10 19L19 5",km={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},xM=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],bM=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],kx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Ld({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,k]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const N=()=>k(window.innerHeight);return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[a]),y.useEffect(()=>{const N=x.current;if(!N)return;const B=new ResizeObserver(()=>{if(h){const A=N.offsetHeight;w(I=>I===A?I:A)}});return B.observe(N),()=>B.disconnect()},[h]);const C=()=>{if(c&&a)return;const N=!h;p(N),_(!N),u==null||u(N)},j=l.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[l.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:C,children:[l.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):l.jsx("div",{className:"dialkit-folder-title-row",children:l.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&l.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("path",{opacity:"0.5",d:kx.path,fill:"currentColor"}),kx.circles.map((N,B)=>l.jsx("circle",{cx:N.cx,cy:N.cy,r:N.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},B))]}),!a&&l.jsx(Jo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:l.jsx("path",{d:Xp})})]}),a&&d&&h&&l.jsx("div",{className:"dialkit-panel-toolbar",onClick:N=>N.stopPropagation(),children:d})]}),l.jsx(Ud,{initial:!1,children:h&&l.jsx(Jo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:l.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return l.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:j});const N=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return l.jsx(Jo.div,{className:"dialkit-panel-inner",style:N,onClick:h?void 0:C,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:j})}return j}var vM=3,wM=32,SM=200,CM=8;function Bo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var ut;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,k]=y.useState(!1),[C,j]=y.useState(!1),[N,B]=y.useState(!1),[A,I]=y.useState(!1),[V,X]=y.useState(!1),[U,G]=y.useState(!1),[re,oe]=y.useState(""),Ce=y.useRef(null),Le=y.useRef(null),Q=y.useRef(!0),de=y.useRef(null),O=y.useRef(null),ee=y.useRef(1),Y=(n-a)/(c-a)*100,q=S||N,ge=rp(Y),D=ld(ge,$=>`${$}%`),ae=ld(ge,$=>`max(5px, calc(${$}% - 9px))`),se=rp(0),ce=ld(se,$=>`calc(100% + ${Math.abs($)}px)`),De=ld(se,$=>$<0?$:0);y.useEffect(()=>{!S&&!de.current&&ge.jump(Y)},[Y,S,ge]);const We=y.useCallback($=>{const J=O.current;if(!J)return n;const we=($-J.left)/ee.current,Ge=g.current?g.current.offsetWidth:J.width,Ve=Math.max(0,Math.min(1,we/Ge)),Ne=a+Ve*(c-a);return Math.max(a,Math.min(c,Ne))},[a,c,n]),Re=y.useCallback($=>($-a)/(c-a)*100,[a,c]),mt=y.useCallback(($,J)=>{const K=O.current;if(!K)return 0;const we=J<0?K.left-$:$-K.right,Ge=Math.max(0,we-wM);return J*CM*Math.sqrt(Math.min(Ge/SM,1))},[]),at=y.useCallback($=>{if(!U&&($.preventDefault(),$.target.setPointerCapture($.pointerId),Le.current={x:$.clientX,y:$.clientY},Q.current=!0,k(!0),g.current)){O.current=g.current.getBoundingClientRect();const J=g.current.offsetWidth;ee.current=O.current.width/J}},[U]),Pe=y.useCallback($=>{if(!S||!Le.current)return;const J=$.clientX-Le.current.x,K=$.clientY-Le.current.y,we=Math.sqrt(J*J+K*K);if(Q.current&&we>vM&&(Q.current=!1,j(!0)),!Q.current){const Ge=O.current;Ge&&($.clientX<Ge.left?se.jump(mt($.clientX,-1)):$.clientX>Ge.right?se.jump(mt($.clientX,1)):se.jump(0));const Ve=We($.clientX),Ne=Re(Ve);de.current&&(de.current.stop(),de.current=null),ge.jump(Ne),i(vd(Ve,u))}},[S,We,Re,i,ge,se,mt]),ct=y.useCallback($=>{if(S){if(Q.current){const J=We($.clientX),we=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):hM(J,a,c),Ge=Re(we);de.current&&de.current.stop(),de.current=Cx(ge,Ge,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{de.current=null}}),i(vd(we,u))}se.get()!==0&&Cx(se,0,{type:"spring",visualDuration:.35,bounce:.15}),k(!1),j(!1),Le.current=null}},[S,We,Re,i,a,c,ge,se]);y.useEffect(()=>(A&&!U&&!V?Ce.current=setTimeout(()=>{X(!0)},800):!A&&!U&&(Ce.current&&(clearTimeout(Ce.current),Ce.current=null),X(!1)),()=>{Ce.current&&clearTimeout(Ce.current)}),[A,U,V]),y.useEffect(()=>{U&&x.current&&(x.current.focus(),x.current.select())},[U]);const dt=$=>{oe($.target.value)},bt=()=>{const $=parseFloat(re);if(!isNaN($)){const J=Math.max(a,Math.min(c,$));i(vd(J,u))}G(!1),I(!1),X(!1)},gt=$=>{V&&($.stopPropagation(),$.preventDefault(),G(!0),oe(n.toFixed(lp(u))))},Xt=$=>{$.key==="Enter"?bt():$.key==="Escape"&&(G(!1),I(!1))},Ut=()=>{bt()},dn=n.toFixed(lp(u)),_e=8,me=10,rt=10;let Ee=30,_t=78;const Je=(ut=g.current)==null?void 0:ut.offsetWidth;Je&&Je>0&&(b.current&&(Ee=(me+b.current.offsetWidth+_e)/Je*100),w.current&&(_t=(Je-rt-w.current.offsetWidth-_e)/Je*100));const tt=Y<Ee||Y>_t,Qe=q?tt?.1:C?.9:.5:0,ht=(c-a)/u,qt=ht<=10?Array.from({length:ht-1},($,J)=>{const K=(J+1)*u/(c-a)*100;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${K}%`}},J)}):Array.from({length:9},($,J)=>{const K=(J+1)*10;return l.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${K}%`}},J)});return l.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:l.jsxs(Jo.div,{ref:_,className:`dialkit-slider ${q?"dialkit-slider-active":""}`,onPointerDown:at,onPointerMove:Pe,onPointerUp:ct,onMouseEnter:()=>B(!0),onMouseLeave:()=>B(!1),style:{width:ce,x:De},children:[l.jsx("div",{className:"dialkit-slider-hashmarks",children:qt}),l.jsx(Jo.div,{className:"dialkit-slider-fill",style:{width:D}}),l.jsx(Jo.div,{className:"dialkit-slider-handle",style:{left:ae,y:"-50%"},animate:{opacity:Qe,scaleX:q?1:.25,scaleY:q&&tt?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),l.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&l.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:pM(h)})]}),U?l.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:re,onChange:dt,onKeyDown:Xt,onBlur:Ut,onClick:$=>$.stopPropagation(),onMouseDown:$=>$.stopPropagation()}):l.jsx("span",{ref:w,className:`dialkit-slider-value ${V?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),onClick:gt,onMouseDown:$=>V&&$.stopPropagation(),style:{cursor:V?"text":"default"},children:dn})]})})}function qp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,l.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&l.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return l.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function kM({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&l.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:_M(a)})]}),l.jsx(qp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function jM(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function n2({spring:t,isSimpleMode:n}){var k,C,j,N,B;let c,u,d;if(n){const A=(k=t.visualDuration)!=null?k:.3,I=(C=t.bounce)!=null?C:.2;d=1,c=2*Math.PI/A,c=Math.pow(c,2),u=2*(1-I)*Math.sqrt(c*d)}else c=(j=t.stiffness)!=null?j:400,u=(N=t.damping)!=null?N:17,d=(B=t.mass)!=null?B:1;const h=2,p=jM(c,u,d,h),g=p.map(([,A])=>A),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([A,I],V)=>{const X=A/h*256,G=140-((I-_)/(b||1)*140*.6+140*.2);return`${V===0?"M":"L"} ${X} ${G}`}).join(" "),S=[];for(let A=1;A<4;A++){const I=64*A,V=140/4*A;S.push(l.jsx("line",{x1:I,y1:0,x2:I,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${A}`),l.jsx("line",{x1:0,y1:V,x2:256,y2:V,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${A}`))}return l.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,l.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function MM({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(k=>on.subscribe(t,k),()=>on.getSpringMode(t,n),()=>on.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=k=>{on.updateSpringMode(t,n,k),c(k==="simple"?h.current.simple:h.current.advanced)},g=(k,C)=>{if(d){const{stiffness:j,damping:N,mass:B,...A}=a;c({...A,[k]:C})}else{const{visualDuration:j,bounce:N,...B}=a;c({...B,[k]:C})}};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx(n2,{spring:a,isSimpleMode:d}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:k=>g("visualDuration",k),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Bo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:k=>g("bounce",k),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:k=>g("stiffness",k),min:1,max:1e3,step:10}),l.jsx(Bo,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:k=>g("damping",k),min:1,max:100,step:1}),l.jsx(Bo,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:k=>g("mass",k),min:.1,max:10,step:.1})]})]})})}function TM({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return l.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[l.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),l.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function EM({panelId:t,path:n,label:i,value:a,onChange:c}){var S,k,C,j,N;const u=y.useSyncExternalStore(B=>on.subscribe(t,B),()=>on.getTransitionMode(t,n),()=>on.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=B=>{on.updateTransitionMode(t,n,B),c(B==="easing"?p.current.easing:B==="simple"?p.current.simple:p.current.advanced)},b=(B,A)=>{if(h){const{stiffness:I,damping:V,mass:X,...U}=g;c({...U,[B]:A})}else{const{visualDuration:I,bounce:V,...X}=g;c({...X,[B]:A})}},w=(B,A)=>{const I=[..._.ease];I[B]=A,c({..._,ease:I})};return l.jsx(Ld,{title:i,defaultOpen:!0,children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?l.jsx(TM,{easing:_}):l.jsx(n2,{spring:g,isSimpleMode:h}),l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),l.jsx(qp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"x1",value:_.ease[0],onChange:B=>w(0,B),min:0,max:1,step:.01}),l.jsx(Bo,{label:"y1",value:_.ease[1],onChange:B=>w(1,B),min:-1,max:2,step:.01}),l.jsx(Bo,{label:"x2",value:_.ease[2],onChange:B=>w(2,B),min:0,max:1,step:.01}),l.jsx(Bo,{label:"y2",value:_.ease[3],onChange:B=>w(3,B),min:-1,max:2,step:.01}),l.jsx(Bo,{label:"Duration",value:_.duration,onChange:B=>c({..._,duration:B}),min:.1,max:2,step:.05,unit:"s"}),l.jsx(DM,{ease:_.ease,onChange:B=>c({..._,ease:B})})]}):h?l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:B=>b("visualDuration",B),min:.1,max:1,step:.05,unit:"s"}),l.jsx(Bo,{label:"Bounce",value:(k=g.bounce)!=null?k:.2,onChange:B=>b("bounce",B),min:0,max:1,step:.05})]}):l.jsxs(l.Fragment,{children:[l.jsx(Bo,{label:"Stiffness",value:(C=g.stiffness)!=null?C:400,onChange:B=>b("stiffness",B),min:1,max:1e3,step:10}),l.jsx(Bo,{label:"Damping",value:(j=g.damping)!=null?j:17,onChange:B=>b("damping",B),min:1,max:100,step:1}),l.jsx(Bo,{label:"Mass",value:(N=g.mass)!=null?N:1,onChange:B=>b("mass",B),min:.1,max:10,step:.1})]})]})})}function jx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function AM(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function DM({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(jx(t)),a(!0)},h=()=>{const g=AM(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return l.jsxs("div",{className:"dialkit-labeled-control",children:[l.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:jx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function NM({label:t,value:n,onChange:i,placeholder:a}){return l.jsxs("div",{className:"dialkit-text-control",children:[l.jsx("label",{className:"dialkit-text-label",children:t}),l.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function RM(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function BM(t){return t.map(n=>typeof n=="string"?{value:n,label:RM(n)}:n)}function LM({label:t,value:n,options:i,onChange:a}){var k;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=BM(i),w=b.find(C=>C.value===n),S=y.useCallback(()=>{const C=d.current;if(!C)return;const j=C.getBoundingClientRect(),N=8+b.length*36,B=window.innerHeight-j.bottom-4,A=B<N&&j.top>B;x({top:A?j.top-4:j.bottom+4,left:j.left,width:j.width,above:A})},[b.length]);return y.useEffect(()=>{var j;const C=(j=d.current)==null?void 0:j.closest(".dialkit-root");g(C!=null?C:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const C=j=>{const N=j.target;d.current&&!d.current.contains(N)&&h.current&&!h.current.contains(N)&&u(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[c]),l.jsxs("div",{className:"dialkit-select-row",children:[l.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[l.jsx("span",{className:"dialkit-select-label",children:t}),l.jsxs("div",{className:"dialkit-select-right",children:[l.jsx("span",{className:"dialkit-select-value",children:(k=w==null?void 0:w.label)!=null?k:n}),l.jsx(Jo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]})]}),p&&Nc.createPortal(l.jsx(Ud,{children:c&&_&&l.jsx(Jo.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(C=>l.jsx("button",{className:"dialkit-select-option","data-selected":String(C.value===n),onClick:()=>{a(C.value),u(!1)},children:C.label},C.value))})}),p)]})}var OM=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function zM({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),OM.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return l.jsxs("div",{className:"dialkit-color-control",children:[l.jsx("span",{className:"dialkit-color-label",children:t}),l.jsxs("div",{className:"dialkit-color-inputs",children:[a?l.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):l.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),l.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),l.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?$M(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function $M(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function IM({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(j=>j.id===i),b=y.useCallback(()=>{var N;if(!_)return;const j=(N=d.current)==null?void 0:N.getBoundingClientRect();j&&g({top:j.bottom+4,left:j.left,width:j.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const j=N=>{var A,I;const B=N.target;(A=d.current)!=null&&A.contains(B)||(I=h.current)!=null&&I.contains(B)||w()};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c,w]);const k=j=>{j?on.loadPreset(t,j):on.clearActivePreset(t),w()},C=(j,N)=>{j.stopPropagation(),on.deletePreset(t,N)};return l.jsxs("div",{className:"dialkit-preset-manager",children:[l.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[l.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),l.jsx(Jo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:l.jsx("path",{d:Xp})})]}),Nc.createPortal(l.jsx(Ud,{children:c&&l.jsxs(Jo.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[l.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:l.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(j=>l.jsxs("div",{className:"dialkit-preset-item","data-active":String(j.id===i),onClick:()=>k(j.id),children:[l.jsx("span",{className:"dialkit-preset-name",children:j.name}),l.jsx("button",{className:"dialkit-preset-delete",onClick:N=>C(N,j.id),title:"Delete preset",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:bM.map((N,B)=>l.jsx("path",{d:N},B))})})]},j.id))]})}),document.body)]})}function PM({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(t2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(C=>on.subscribe(t.id,C),()=>on.getValues(t.id),()=>on.getValues(t.id)),g=on.getPresets(t.id),_=on.getActivePresetId(t.id),x=()=>{const C=g.length+2;on.savePreset(t.id,`Version ${C}`)},b=()=>{const C=JSON.stringify(p,null,2),j=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${C}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(j),c(!0),setTimeout(()=>c(!1),1500)},w=C=>{var N,B,A;const j=p[C.path];switch(C.type){case"slider":return l.jsx(Bo,{label:C.label,value:j,onChange:I=>on.updateValue(t.id,C.path,I),min:C.min,max:C.max,step:C.step,shortcut:C.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===C.path},C.path);case"toggle":return l.jsx(kM,{label:C.label,checked:j,onChange:I=>on.updateValue(t.id,C.path,I),shortcut:C.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===C.path},C.path);case"spring":return l.jsx(MM,{panelId:t.id,path:C.path,label:C.label,spring:j,onChange:I=>on.updateValue(t.id,C.path,I)},C.path);case"transition":return l.jsx(EM,{panelId:t.id,path:C.path,label:C.label,value:j,onChange:I=>on.updateValue(t.id,C.path,I)},C.path);case"folder":return l.jsx(Ld,{title:C.label,defaultOpen:(N=C.defaultOpen)!=null?N:!0,children:(B=C.children)==null?void 0:B.map(w)},C.path);case"text":return l.jsx(NM,{label:C.label,value:j,onChange:I=>on.updateValue(t.id,C.path,I),placeholder:C.placeholder},C.path);case"select":return l.jsx(LM,{label:C.label,value:j,options:(A=C.options)!=null?A:[],onChange:I=>on.updateValue(t.id,C.path,I)},C.path);case"color":return l.jsx(zM,{label:C.label,value:j,onChange:I=>on.updateValue(t.id,C.path,I)},C.path);case"action":return l.jsx("button",{className:"dialkit-button",onClick:()=>on.triggerAction(t.id,C.path),children:C.label},C.path);default:return null}},S=()=>t.controls.map(w),k=l.jsxs(l.Fragment,{children:[l.jsx(Jo.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:xM.map((C,j)=>l.jsx("path",{d:C},j))})}),l.jsx(IM,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),l.jsx(Jo.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:l.jsx("span",{style:{position:"relative",width:16,height:16},children:l.jsx(Ud,{initial:!1,mode:"wait",children:a?l.jsx(Jo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:l.jsx("path",{d:yM})},"check"):l.jsxs(Jo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[l.jsx("path",{d:km.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),l.jsx("path",{d:km.sparkle,fill:"currentColor"}),l.jsx("path",{d:km.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return l.jsx("div",{className:"dialkit-panel-wrapper",children:l.jsx(Ld,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:k,children:S()})})}var HM=typeof process<"u"?!1:!(typeof import.meta<"u");function UM({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=HM}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),k=y.useRef(null),C=y.useRef(!1),j=y.useRef(null),N=y.useRef(!1);y.useEffect(()=>(p(!0),d(on.getPanels()),on.subscribeGlobal(()=>{d(on.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const U=new MutationObserver(()=>{var oe;const G=(oe=_.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!G)return;if(G.getAttribute("data-collapsed")==="true")k.current&&b(k.current);else{if(x){k.current=x;const Ce=x.x+21,Le=window.innerWidth/2;S(Ce<Le?"top-left":"top-right")}else S(t);b(null)}});return U.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>U.disconnect()},[g,x,t]);const B=y.useCallback(U=>{var oe;const G=(oe=_.current)==null?void 0:oe.querySelector(".dialkit-panel-inner");if(!G||G.getAttribute("data-collapsed")!=="true")return;const re=_.current.getBoundingClientRect();j.current={pointerX:U.clientX,pointerY:U.clientY,elX:re.left,elY:re.top},N.current=!1,C.current=!0,U.target.setPointerCapture(U.pointerId)},[]),A=y.useCallback(U=>{if(!C.current||!j.current)return;const G=U.clientX-j.current.pointerX,re=U.clientY-j.current.pointerY;!N.current&&Math.abs(G)+Math.abs(re)<4||(N.current=!0,b({x:j.current.elX+G,y:j.current.elY+re}))},[]),I=y.useCallback(U=>{var G;if(C.current&&(C.current=!1,j.current=null,N.current)){U.stopPropagation();const re=(G=_.current)==null?void 0:G.querySelector(".dialkit-panel-inner");if(re){const oe=Ce=>{Ce.stopPropagation()};re.addEventListener("click",oe,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const V=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,X=l.jsx(gM,{children:l.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:l.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:V,onPointerDown:g?void 0:B,onPointerMove:g?void 0:A,onPointerUp:g?void 0:I,children:u.map(U=>l.jsx(PM,{panel:U,defaultOpen:g||n,inline:g},U.id))})})});return g?X:Nc.createPortal(X,document.body)}const VM=()=>(iM("Git Visualizer",{preview:[1,0,1]}),null),YM=({children:t})=>l.jsxs(l.Fragment,{children:[t,l.jsx(VM,{}),l.jsx(UM,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),l.jsx(W6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Ev.createRoot(document.getElementById("root")).render(l.jsx(YM,{children:l.jsx(Tw,{})}));

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}})();function Mx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bh={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function xv(){if(ey)return Kl;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return Kl.Fragment=n,Kl.jsx=o,Kl.jsxs=o,Kl}var ty;function bv(){return ty||(ty=1,Bh.exports=xv()),Bh.exports}var r=bv(),Oh={exports:{}},Ql={},zh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function vv(){return ny||(ny=1,(function(t){function n(z,_e){var K=z.length;z.push(_e);e:for(;0<K;){var we=K-1>>>1,Ee=z[we];if(0<c(Ee,_e))z[we]=_e,z[K]=Ee,K=we;else break e}}function o(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var _e=z[0],K=z.pop();if(K!==_e){z[0]=K;e:for(var we=0,Ee=z.length,L=Ee>>>1;we<L;){var H=2*(we+1)-1,B=z[H],oe=H+1,ze=z[oe];if(0>c(B,K))oe<Ee&&0>c(ze,B)?(z[we]=ze,z[oe]=K,we=oe):(z[we]=B,z[H]=K,we=H);else if(oe<Ee&&0>c(ze,K))z[we]=ze,z[oe]=K,we=oe;else break e}}return _e}function c(z,_e){var K=z.sortIndex-_e.sortIndex;return K!==0?K:z.id-_e.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,C=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function T(z){for(var _e=o(g);_e!==null;){if(_e.callback===null)a(g);else if(_e.startTime<=z)a(g),_e.sortIndex=_e.expirationTime,n(p,_e);else break;_e=o(g)}}function $(z){if(C=!1,T(z),!S)if(o(p)!==null)S=!0,W||(W=!0,G());else{var _e=o(g);_e!==null&&be($,_e.startTime-z)}}var W=!1,P=-1,X=5,q=-1;function ne(){return k?!0:!(t.unstable_now()-q<X)}function le(){if(k=!1,W){var z=t.unstable_now();q=z;var _e=!0;try{e:{S=!1,C&&(C=!1,N(P),P=-1),w=!0;var K=b;try{t:{for(T(z),x=o(p);x!==null&&!(x.expirationTime>z&&ne());){var we=x.callback;if(typeof we=="function"){x.callback=null,b=x.priorityLevel;var Ee=we(x.expirationTime<=z);if(z=t.unstable_now(),typeof Ee=="function"){x.callback=Ee,T(z),_e=!0;break t}x===o(p)&&a(p),T(z)}else a(p);x=o(p)}if(x!==null)_e=!0;else{var L=o(g);L!==null&&be($,L.startTime-z),_e=!1}}break e}finally{x=null,b=K,w=!1}_e=void 0}}finally{_e?G():W=!1}}}var G;if(typeof A=="function")G=function(){A(le)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,de=te.port2;te.port1.onmessage=le,G=function(){de.postMessage(null)}}else G=function(){j(le,0)};function be(z,_e){P=j(function(){z(t.unstable_now())},_e)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var _e=3;break;default:_e=b}var K=b;b=_e;try{return z()}finally{b=K}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(z,_e){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=b;b=z;try{return _e()}finally{b=K}},t.unstable_scheduleCallback=function(z,_e,K){var we=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?we+K:we):K=we,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=K+Ee,z={id:_++,callback:_e,priorityLevel:z,startTime:K,expirationTime:Ee,sortIndex:-1},K>we?(z.sortIndex=K,n(g,z),o(p)===null&&z===o(g)&&(C?(N(P),P=-1):C=!0,be($,K-we))):(z.sortIndex=Ee,n(p,z),S||w||(S=!0,W||(W=!0,G()))),z},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(z){var _e=b;return function(){var K=b;b=_e;try{return z.apply(this,arguments)}finally{b=K}}}})($h)),$h}var sy;function wv(){return sy||(sy=1,zh.exports=vv()),zh.exports}var Ih={exports:{}},un={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function Sv(){if(oy)return un;oy=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function j(L,H,B){this.props=L,this.context=H,this.refs=k,this.updater=B||S}j.prototype.isReactComponent={},j.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},j.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=j.prototype;function A(L,H,B){this.props=L,this.context=H,this.refs=k,this.updater=B||S}var T=A.prototype=new N;T.constructor=A,C(T,j.prototype),T.isPureReactComponent=!0;var $=Array.isArray;function W(){}var P={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function q(L,H,B){var oe=B.ref;return{$$typeof:t,type:L,key:H,ref:oe!==void 0?oe:null,props:B}}function ne(L,H){return q(L.type,H,L.props)}function le(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function G(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(B){return H[B]})}var te=/\/+/g;function de(L,H){return typeof L=="object"&&L!==null&&L.key!=null?G(""+L.key):H.toString(36)}function be(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(W,W):(L.status="pending",L.then(function(H){L.status==="pending"&&(L.status="fulfilled",L.value=H)},function(H){L.status==="pending"&&(L.status="rejected",L.reason=H)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,H,B,oe,ze){var Ae=typeof L;(Ae==="undefined"||Ae==="boolean")&&(L=null);var Oe=!1;if(L===null)Oe=!0;else switch(Ae){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(L.$$typeof){case t:case n:Oe=!0;break;case _:return Oe=L._init,z(Oe(L._payload),H,B,oe,ze)}}if(Oe)return ze=ze(L),Oe=oe===""?"."+de(L,0):oe,$(ze)?(B="",Oe!=null&&(B=Oe.replace(te,"$&/")+"/"),z(ze,H,B,"",function(Xt){return Xt})):ze!=null&&(le(ze)&&(ze=ne(ze,B+(ze.key==null||L&&L.key===ze.key?"":(""+ze.key).replace(te,"$&/")+"/")+Oe)),H.push(ze)),1;Oe=0;var Ze=oe===""?".":oe+":";if($(L))for(var Je=0;Je<L.length;Je++)oe=L[Je],Ae=Ze+de(oe,Je),Oe+=z(oe,H,B,Ae,ze);else if(Je=w(L),typeof Je=="function")for(L=Je.call(L),Je=0;!(oe=L.next()).done;)oe=oe.value,Ae=Ze+de(oe,Je++),Oe+=z(oe,H,B,Ae,ze);else if(Ae==="object"){if(typeof L.then=="function")return z(be(L),H,B,oe,ze);throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function _e(L,H,B){if(L==null)return L;var oe=[],ze=0;return z(L,oe,"","",function(Ae){return H.call(B,Ae,ze++)}),oe}function K(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(B){(L._status===0||L._status===-1)&&(L._status=1,L._result=B)},function(B){(L._status===0||L._status===-1)&&(L._status=2,L._result=B)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var we=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Ee={map:_e,forEach:function(L,H,B){_e(L,function(){H.apply(this,arguments)},B)},count:function(L){var H=0;return _e(L,function(){H++}),H},toArray:function(L){return _e(L,function(H){return H})||[]},only:function(L){if(!le(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return un.Activity=x,un.Children=Ee,un.Component=j,un.Fragment=o,un.Profiler=c,un.PureComponent=A,un.StrictMode=a,un.Suspense=p,un.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,un.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},un.cache=function(L){return function(){return L.apply(null,arguments)}},un.cacheSignal=function(){return null},un.cloneElement=function(L,H,B){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var oe=C({},L.props),ze=L.key;if(H!=null)for(Ae in H.key!==void 0&&(ze=""+H.key),H)!X.call(H,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&H.ref===void 0||(oe[Ae]=H[Ae]);var Ae=arguments.length-2;if(Ae===1)oe.children=B;else if(1<Ae){for(var Oe=Array(Ae),Ze=0;Ze<Ae;Ze++)Oe[Ze]=arguments[Ze+2];oe.children=Oe}return q(L.type,ze,oe)},un.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},un.createElement=function(L,H,B){var oe,ze={},Ae=null;if(H!=null)for(oe in H.key!==void 0&&(Ae=""+H.key),H)X.call(H,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ze[oe]=H[oe]);var Oe=arguments.length-2;if(Oe===1)ze.children=B;else if(1<Oe){for(var Ze=Array(Oe),Je=0;Je<Oe;Je++)Ze[Je]=arguments[Je+2];ze.children=Ze}if(L&&L.defaultProps)for(oe in Oe=L.defaultProps,Oe)ze[oe]===void 0&&(ze[oe]=Oe[oe]);return q(L,Ae,ze)},un.createRef=function(){return{current:null}},un.forwardRef=function(L){return{$$typeof:h,render:L}},un.isValidElement=le,un.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:K}},un.memo=function(L,H){return{$$typeof:g,type:L,compare:H===void 0?null:H}},un.startTransition=function(L){var H=P.T,B={};P.T=B;try{var oe=L(),ze=P.S;ze!==null&&ze(B,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(W,we)}catch(Ae){we(Ae)}finally{H!==null&&B.types!==null&&(H.types=B.types),P.T=H}},un.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},un.use=function(L){return P.H.use(L)},un.useActionState=function(L,H,B){return P.H.useActionState(L,H,B)},un.useCallback=function(L,H){return P.H.useCallback(L,H)},un.useContext=function(L){return P.H.useContext(L)},un.useDebugValue=function(){},un.useDeferredValue=function(L,H){return P.H.useDeferredValue(L,H)},un.useEffect=function(L,H){return P.H.useEffect(L,H)},un.useEffectEvent=function(L){return P.H.useEffectEvent(L)},un.useId=function(){return P.H.useId()},un.useImperativeHandle=function(L,H,B){return P.H.useImperativeHandle(L,H,B)},un.useInsertionEffect=function(L,H){return P.H.useInsertionEffect(L,H)},un.useLayoutEffect=function(L,H){return P.H.useLayoutEffect(L,H)},un.useMemo=function(L,H){return P.H.useMemo(L,H)},un.useOptimistic=function(L,H){return P.H.useOptimistic(L,H)},un.useReducer=function(L,H,B){return P.H.useReducer(L,H,B)},un.useRef=function(L){return P.H.useRef(L)},un.useState=function(L){return P.H.useState(L)},un.useSyncExternalStore=function(L,H,B){return P.H.useSyncExternalStore(L,H,B)},un.useTransition=function(){return P.H.useTransition()},un.version="19.2.4",un}var iy;function dp(){return iy||(iy=1,Ih.exports=Sv()),Ih.exports}var Ph={exports:{}},So={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function kv(){if(ay)return So;ay=1;var t=dp();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(n(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return So.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,So.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},So.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},So.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},So.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},So.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},So.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},So.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},So.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},So.requestFormReset=function(p){a.d.r(p)},So.unstable_batchedUpdates=function(p,g){return p(g)},So.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},So.useFormStatus=function(){return d.H.useHostTransitionStatus()},So.version="19.2.4",So}var ry;function Tx(){if(ry)return Ph.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Ph.exports=kv(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Cv(){if(ly)return Ql;ly=1;var t=wv(),n=dp(),o=Tx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)s+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,i=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(i=s.return),e=s.return;while(e)}return s.tag===3?i:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var i=e,l=s;;){var f=i.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){i=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===i)return p(f),e;if(m===l)return p(f),s;m=m.sibling}throw Error(a(188))}if(i.return!==l.return)i=f,l=m;else{for(var v=!1,M=f.child;M;){if(M===i){v=!0,i=f,l=m;break}if(M===l){v=!0,l=f,i=m;break}M=M.sibling}if(!v){for(M=m.child;M;){if(M===i){v=!0,i=m,l=f;break}if(M===l){v=!0,l=m,i=f;break}M=M.sibling}if(!v)throw Error(a(189))}}if(i.alternate!==l)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),A=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function de(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case j:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case W:return"SuspenseList";case q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case A:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case T:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return s=e.displayName||null,s!==null?s:de(e.type)||"Memo";case X:s=e._payload,e=e._init;try{return de(e(s))}catch{}}return null}var be=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},we=[],Ee=-1;function L(e){return{current:e}}function H(e){0>Ee||(e.current=we[Ee],we[Ee]=null,Ee--)}function B(e,s){Ee++,we[Ee]=e.current,e.current=s}var oe=L(null),ze=L(null),Ae=L(null),Oe=L(null);function Ze(e,s){switch(B(Ae,s),B(ze,e),B(oe,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?S0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=S0(s),e=k0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(oe),B(oe,e)}function Je(){H(oe),H(ze),H(Ae)}function Xt(e){e.memoizedState!==null&&B(Oe,e);var s=oe.current,i=k0(s,e.type);s!==i&&(B(ze,e),B(oe,i))}function qt(e){ze.current===e&&(H(oe),H(ze)),Oe.current===e&&(H(Oe),Yl._currentValue=K)}var Dt,It;function nn(e){if(Dt===void 0)try{throw Error()}catch(i){var s=i.stack.trim().match(/\n( *(at )?)/);Dt=s&&s[1]||"",It=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dt+e+It}var sn=!1;function Ge(e,s){if(!e||sn)return"";sn=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var $e=function(){throw Error()};if(Object.defineProperty($e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($e,[])}catch(ve){var me=ve}Reflect.construct(e,[],$e)}else{try{$e.call()}catch(ve){me=ve}e.call($e.prototype)}}else{try{throw Error()}catch(ve){me=ve}($e=e())&&typeof $e.catch=="function"&&$e.catch(function(){})}}catch(ve){if(ve&&me&&typeof ve.stack=="string")return[ve.stack,me.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],M=m[1];if(v&&M){var U=v.split(`
`),fe=M.split(`
`);for(f=l=0;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;for(;f<fe.length&&!fe[f].includes("DetermineComponentFrameRoot");)f++;if(l===U.length||f===fe.length)for(l=U.length-1,f=fe.length-1;1<=l&&0<=f&&U[l]!==fe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(U[l]!==fe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||U[l]!==fe[f]){var Te=`
`+U[l].replace(" at new "," at ");return e.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",e.displayName)),Te}while(1<=l&&0<=f);break}}}finally{sn=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?nn(i):""}function yt(e,s){switch(e.tag){case 26:case 27:case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return e.child!==s&&s!==null?nn("Suspense Fallback"):nn("Suspense");case 19:return nn("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return nn("Activity");default:return""}}function ae(e){try{var s="",i=null;do s+=yt(e,i),i=e,e=e.return;while(e);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ce=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,qe=t.unstable_shouldYield,Xe=t.unstable_requestPaint,Ie=t.unstable_now,ct=t.unstable_getCurrentPriorityLevel,pt=t.unstable_ImmediatePriority,Ve=t.unstable_UserBlockingPriority,Ye=t.unstable_NormalPriority,I=t.unstable_LowPriority,Z=t.unstable_IdlePriority,ge=t.log,ke=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ne(e){if(typeof ge=="function"&&ke(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Ue,e)}catch{}}var Nt=Math.clz32?Math.clz32:_t,Et=Math.log,Pt=Math.LN2;function _t(e){return e>>>=0,e===0?32:31-(Et(e)/Pt|0)|0}var tt=256,Ot=262144,on=4194304;function Qt(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,s,i){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var M=l&134217727;return M!==0?(l=M&~m,l!==0?f=Qt(l):(v&=M,v!==0?f=Qt(v):i||(i=M&~e,i!==0&&(f=Qt(i))))):(M=l&~m,M!==0?f=Qt(M):v!==0?f=Qt(v):i||(i=l&~e,i!==0&&(f=Qt(i)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,i=s&-s,m>=i||m===32&&(i&4194048)!==0)?s:f}function Ut(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Jt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var e=on;return on<<=1,(on&62914560)===0&&(on=4194304),e}function An(e){for(var s=[],i=0;31>i;i++)s.push(e);return s}function at(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wt(e,s,i,l,f,m){var v=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var M=e.entanglements,U=e.expirationTimes,fe=e.hiddenUpdates;for(i=v&~i;0<i;){var Te=31-Nt(i),$e=1<<Te;M[Te]=0,U[Te]=-1;var me=fe[Te];if(me!==null)for(fe[Te]=null,Te=0;Te<me.length;Te++){var ve=me[Te];ve!==null&&(ve.lane&=-536870913)}i&=~$e}l!==0&&Tn(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function Tn(e,s,i){e.pendingLanes|=s,e.suspendedLanes&=~s;var l=31-Nt(s);e.entangledLanes|=s,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function jn(e,s){var i=e.entangledLanes|=s;for(e=e.entanglements;i;){var l=31-Nt(i),f=1<<l;f&s|e[l]&s&&(e[l]|=s),i&=~f}}function Zn(e,s){var i=s&-s;return i=(i&42)!==0?1:Ms(i),(i&(e.suspendedLanes|s))!==0?0:i}function Ms(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rs(){var e=_e.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function mn(e,s){var i=_e.p;try{return _e.p=e,s()}finally{_e.p=i}}var Yn=Math.random().toString(36).slice(2),xn="__reactFiber$"+Yn,Wn="__reactProps$"+Yn,nt="__reactContainer$"+Yn,ws="__reactEvents$"+Yn,Ko="__reactListeners$"+Yn,Qo="__reactHandles$"+Yn,to="__reactResources$"+Yn,Co="__reactMarker$"+Yn;function co(e){delete e[xn],delete e[Wn],delete e[ws],delete e[Ko],delete e[Qo]}function Bn(e){var s=e[xn];if(s)return s;for(var i=e.parentNode;i;){if(s=i[nt]||i[xn]){if(i=s.alternate,s.child!==null||i!==null&&i.child!==null)for(e=A0(e);e!==null;){if(i=e[xn])return i;e=A0(e)}return s}e=i,i=e.parentNode}return null}function no(e){if(e=e[xn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function so(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function oo(e){var s=e[to];return s||(s=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Nn(e){e[Co]=!0}var Qs=new Set,io={};function Rn(e,s){hs(e,s),hs(e+"Capture",s)}function hs(e,s){for(io[e]=s,e=0;e<s.length;e++)Qs.add(s[e])}var Io=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},ao={};function uo(e){return ce.call(ao,e)?!0:ce.call(Zo,e)?!1:Io.test(e)?ao[e]=!0:(Zo[e]=!0,!1)}function fo(e,s,i){if(uo(s))if(i===null)e.removeAttribute(s);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+i)}}function Ts(e,s,i){if(i===null)e.removeAttribute(s);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+i)}}function Vs(e,s,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(s,i,""+l)}}function On(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bi(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Li(e,s,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){i=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(v){i=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Jo(e){if(!e._valueTracker){var s=bi(e)?"checked":"value";e._valueTracker=Li(e,s,""+e[s])}}function Bi(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var i=s.getValue(),l="";return e&&(l=bi(e)?e.checked?"true":"false":e.value),e=l,e!==i?(s.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vi=/[\n"\\]/g;function Hn(e){return e.replace(vi,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ho(e,s,i,l,f,m,v,M){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+On(s)):e.value!==""+On(s)&&(e.value=""+On(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?ro(e,v,On(s)):i!=null?ro(e,v,On(i)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.name=""+On(M):e.removeAttribute("name")}function En(e,s,i,l,f,m,v,M){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||i!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Jo(e);return}i=i!=null?""+On(i):"",s=s!=null?""+On(s):i,M||s===e.value||(e.value=s),e.defaultValue=s}l=l!=null?l:f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=M?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Jo(e)}function ro(e,s,i){s==="number"&&jo(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function ms(e,s,i,l){if(e=e.options,s){s={};for(var f=0;f<i.length;f++)s["$"+i[f]]=!0;for(i=0;i<e.length;i++)f=s.hasOwnProperty("$"+e[i].value),e[i].selected!==f&&(e[i].selected=f),f&&l&&(e[i].defaultSelected=!0)}else{for(i=""+On(i),s=null,f=0;f<e.length;f++){if(e[f].value===i){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function es(e,s,i){if(s!=null&&(s=""+On(s),s!==e.value&&(e.value=s),i==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=i!=null?""+On(i):""}function wi(e,s,i,l){if(s==null){if(l!=null){if(i!=null)throw Error(a(92));if(be(l)){if(1<l.length)throw Error(a(93));l=l[0]}i=l}i==null&&(i=""),s=i}i=On(s),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),Jo(e)}function Ss(e,s){if(s){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=s;return}}e.textContent=s}var Mo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function en(e,s,i){var l=s.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":l?e.setProperty(s,i):typeof i!="number"||i===0||Mo.has(s)?s==="float"?e.cssFloat=i:e[s]=(""+i).trim():e[s]=i+"px"}function Po(e,s,i){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&i[f]!==l&&en(e,f,l)}else for(var m in s)s.hasOwnProperty(m)&&en(e,m,s[m])}function Ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var To=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ei=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eo(e){return ei.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function J(){}var he=null;function je(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Se=null,ot=null;function bt(e){var s=no(e);if(s&&(e=s.stateNode)){var i=e[Wn]||null;e:switch(e=s.stateNode,s.type){case"input":if(ho(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),s=i.name,i.type==="radio"&&s!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Hn(""+s)+'"][type="radio"]'),s=0;s<i.length;s++){var l=i[s];if(l!==e&&l.form===e.form){var f=l[Wn]||null;if(!f)throw Error(a(90));ho(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<i.length;s++)l=i[s],l.form===e.form&&Bi(l)}break e;case"textarea":es(e,i.value,i.defaultValue);break e;case"select":s=i.value,s!=null&&ms(e,!!i.multiple,s,!1)}}}var rt=!1;function Ft(e,s,i){if(rt)return e(s,i);rt=!0;try{var l=e(s);return l}finally{if(rt=!1,(Se!==null||ot!==null)&&(gu(),Se&&(s=Se,e=ot,ot=Se=null,bt(s),e)))for(s=0;s<e.length;s++)bt(e[s])}}function zt(e,s){var i=e.stateNode;if(i===null)return null;var l=i[Wn]||null;if(l===null)return null;i=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,s,typeof i));return i}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xn=!1;if(cn)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){Xn=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{Xn=!1}var _n=null,qn=null,As=null;function Vt(){if(As)return As;var e,s=qn,i=s.length,l,f="value"in _n?_n.value:_n.textContent,m=f.length;for(e=0;e<i&&s[e]===f[e];e++);var v=i-e;for(l=1;l<=v&&s[i-l]===f[m-l];l++);return As=f.slice(e,1<l?1-l:void 0)}function E(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Y(){return!0}function se(){return!1}function re(e){function s(i,l,f,m,v){this._reactName=i,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(i=e[M],this[M]=i?i(m):m[M]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Y:se,this.isPropagationStopped=se,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Y)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Y)},persist:function(){},isPersistent:Y}),s}var pe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Le=re(pe),st=x({},pe,{view:0,detail:0}),ut=re(st),ft,ht,it,Tt=x({},st,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==it&&(it&&e.type==="mousemove"?(ft=e.screenX-it.screenX,ht=e.screenY-it.screenY):ht=ft=0,it=e),ft)},movementY:function(e){return"movementY"in e?e.movementY:ht}}),Gt=re(Tt),bn=x({},Tt,{dataTransfer:0}),ds=re(bn),Ns=x({},st,{relatedTarget:0}),ks=re(Ns),Rs=x({},pe,{animationName:0,elapsedTime:0,pseudoElement:0}),an=re(Rs),zn=x({},pe,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cs=re(zn),$s=x({},pe,{data:0}),jt=re($s),Oi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Si(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Gi[e])?!!s[e]:!1}function Sn(){return Si}var ps=x({},st,{key:function(e){if(e.key){var s=Oi[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=E(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return e.type==="keypress"?E(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?E(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Do=re(ps),Ho=x({},Tt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vo=re(Ho),$i=x({},st,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn}),qa=re($i),Ki=x({},pe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ao=re(Ki),xr=x({},Tt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pe=re(xr),dt=x({},pe,{newState:0,oldState:0}),kt=re(dt),mt=[9,13,27,32],Rt=cn&&"CompositionEvent"in window,Lt=null;cn&&"documentMode"in document&&(Lt=document.documentMode);var $n=cn&&"TextEvent"in window&&!Lt,gn=cn&&(!Rt||Lt&&8<Lt&&11>=Lt),Ls=" ",Us=!1;function Vo(e,s){switch(e){case"keyup":return mt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function br(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var No=!1;function pl(e,s){switch(e){case"compositionend":return br(s);case"keypress":return s.which!==32?null:(Us=!0,Ls);case"textInput":return e=s.data,e===Ls&&Us?null:e;default:return null}}function Rc(e,s){if(No)return e==="compositionend"||!Rt&&Vo(e,s)?(e=Vt(),As=qn=_n=null,No=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return gn&&s.locale!=="ko"?null:s.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _l(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Lc[e.type]:s==="textarea"}function gl(e,s,i,l){Se?ot?ot.push(l):ot=[l]:Se=l,s=ku(s,"onChange"),0<s.length&&(i=new Le("onChange","change",null,i,l),e.push({event:i,listeners:s}))}var pa=null,_a=null;function Bc(e){g0(e,0)}function D(e){var s=so(e);if(Bi(s))return e}function O(e,s){if(e==="change")return s}var F=!1;if(cn){var V;if(cn){var ee="oninput"in document;if(!ee){var ye=document.createElement("div");ye.setAttribute("oninput","return;"),ee=typeof ye.oninput=="function"}V=ee}else V=!1;F=V&&(!document.documentMode||9<document.documentMode)}function Qe(){pa&&(pa.detachEvent("onpropertychange",et),_a=pa=null)}function et(e){if(e.propertyName==="value"&&D(_a)){var s=[];gl(s,_a,e,je(e)),Ft(Bc,s)}}function lt(e,s,i){e==="focusin"?(Qe(),pa=s,_a=i,pa.attachEvent("onpropertychange",et)):e==="focusout"&&Qe()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(_a)}function Bt(e,s){if(e==="click")return D(s)}function rn(e,s){if(e==="input"||e==="change")return D(s)}function ln(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var wt=typeof Object.is=="function"?Object.is:ln;function gt(e,s){if(wt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var i=Object.keys(e),l=Object.keys(s);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var f=i[l];if(!ce.call(s,f)||!wt(e[f],s[f]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gs(e,s){var i=_s(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=s&&l>=s)return{node:i,offset:s-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=_s(i)}}function ys(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ys(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Dn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=jo(e.document);s instanceof e.HTMLIFrameElement;){try{var i=typeof s.contentWindow.location.href=="string"}catch{i=!1}if(i)e=s.contentWindow;else break;s=jo(e.document)}return s}function Fn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Zt=cn&&"documentMode"in document&&11>=document.documentMode,tn=null,xs=null,Ln=null,Zs=!1;function wo(e,s,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Zs||tn==null||tn!==jo(l)||(l=tn,"selectionStart"in l&&Fn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ln&&gt(Ln,l)||(Ln=l,l=ku(xs,"onSelect"),0<l.length&&(s=new Le("onSelect","select",null,s,i),e.push({event:s,listeners:l}),s.target=tn)))}function ls(e,s){var i={};return i[e.toLowerCase()]=s.toLowerCase(),i["Webkit"+e]="webkit"+s,i["Moz"+e]="moz"+s,i}var li={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},ki={},Ci={};cn&&(Ci=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function ts(e){if(ki[e])return ki[e];if(!li[e])return e;var s=li[e],i;for(i in s)if(s.hasOwnProperty(i)&&i in Ci)return ki[e]=s[i];return e}var ji=ts("animationend"),Ii=ts("animationiteration"),Oc=ts("animationstart"),Wd=ts("transitionrun"),Fd=ts("transitionstart"),Yd=ts("transitioncancel"),Kp=ts("transitionend"),Qp=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Mi(e,s){Qp.set(e,s),Rn(s,[e])}var zc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],vr=0,qd=0;function $c(){for(var e=vr,s=qd=vr=0;s<e;){var i=ci[s];ci[s++]=null;var l=ci[s];ci[s++]=null;var f=ci[s];ci[s++]=null;var m=ci[s];if(ci[s++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}m!==0&&Zp(i,f,m)}}function Ic(e,s,i,l){ci[vr++]=e,ci[vr++]=s,ci[vr++]=i,ci[vr++]=l,qd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gd(e,s,i,l){return Ic(e,s,i,l),Pc(e)}function Ga(e,s){return Ic(e,null,null,s),Pc(e)}function Zp(e,s,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var f=!1,m=e.return;m!==null;)m.childLanes|=i,l=m.alternate,l!==null&&(l.childLanes|=i),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-Nt(i),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[s]:l.push(s),s.lane=i|536870912),m):null}function Pc(e){if(50<Il)throw Il=0,ih=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var wr={};function n2(e,s,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,s,i,l){return new n2(e,s,i,l)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,s){var i=e.alternate;return i===null?(i=ti(e.tag,s,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=s,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,s=e.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Jp(e,s){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,s=i.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Hc(e,s,i,l,f,m){var v=0;if(l=e,typeof e=="function")Kd(e)&&(v=1);else if(typeof e=="string")v=rv(e,i,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case q:return e=ti(31,i,s,f),e.elementType=q,e.lanes=m,e;case C:return Ka(i.children,f,m,s);case k:v=8,f|=24;break;case j:return e=ti(12,i,s,f|2),e.elementType=j,e.lanes=m,e;case $:return e=ti(13,i,s,f),e.elementType=$,e.lanes=m,e;case W:return e=ti(19,i,s,f),e.elementType=W,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:v=10;break e;case N:v=9;break e;case T:v=11;break e;case P:v=14;break e;case X:v=16,l=null;break e}v=29,i=Error(a(130,e===null?"null":typeof e,"")),l=null}return s=ti(v,i,s,f),s.elementType=e,s.type=l,s.lanes=m,s}function Ka(e,s,i,l){return e=ti(7,e,l,s),e.lanes=i,e}function Qd(e,s,i){return e=ti(6,e,null,s),e.lanes=i,e}function e_(e){var s=ti(18,null,null,0);return s.stateNode=e,s}function Zd(e,s,i){return s=ti(4,e.children!==null?e.children:[],e.key,s),s.lanes=i,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var t_=new WeakMap;function ui(e,s){if(typeof e=="object"&&e!==null){var i=t_.get(e);return i!==void 0?i:(s={value:e,source:s,stack:ae(s)},t_.set(e,s),s)}return{value:e,source:s,stack:ae(s)}}var Sr=[],kr=0,Vc=null,yl=0,di=[],fi=0,ga=null,Pi=1,Hi="";function Zi(e,s){Sr[kr++]=yl,Sr[kr++]=Vc,Vc=e,yl=s}function n_(e,s,i){di[fi++]=Pi,di[fi++]=Hi,di[fi++]=ga,ga=e;var l=Pi;e=Hi;var f=32-Nt(l)-1;l&=~(1<<f),i+=1;var m=32-Nt(s)+f;if(30<m){var v=f-f%5;m=(l&(1<<v)-1).toString(32),l>>=v,f-=v,Pi=1<<32-Nt(s)+f|i<<f|l,Hi=m+e}else Pi=1<<m|i<<f|l,Hi=e}function Jd(e){e.return!==null&&(Zi(e,1),n_(e,1,0))}function ef(e){for(;e===Vc;)Vc=Sr[--kr],Sr[kr]=null,yl=Sr[--kr],Sr[kr]=null;for(;e===ga;)ga=di[--fi],di[fi]=null,Hi=di[--fi],di[fi]=null,Pi=di[--fi],di[fi]=null}function s_(e,s){di[fi++]=Pi,di[fi++]=Hi,di[fi++]=ga,Pi=s.id,Hi=s.overflow,ga=e}var mo=null,bs=null,Mn=!1,ya=null,hi=!1,tf=Error(a(519));function xa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xl(ui(s,e)),tf}function o_(e){var s=e.stateNode,i=e.type,l=e.memoizedProps;switch(s[xn]=e,s[Wn]=l,i){case"dialog":wn("cancel",s),wn("close",s);break;case"iframe":case"object":case"embed":wn("load",s);break;case"video":case"audio":for(i=0;i<Hl.length;i++)wn(Hl[i],s);break;case"source":wn("error",s);break;case"img":case"image":case"link":wn("error",s),wn("load",s);break;case"details":wn("toggle",s);break;case"input":wn("invalid",s),En(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":wn("invalid",s);break;case"textarea":wn("invalid",s),wi(s,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||s.textContent===""+i||l.suppressHydrationWarning===!0||v0(s.textContent,i)?(l.popover!=null&&(wn("beforetoggle",s),wn("toggle",s)),l.onScroll!=null&&wn("scroll",s),l.onScrollEnd!=null&&wn("scrollend",s),l.onClick!=null&&(s.onclick=J),s=!0):s=!1,s||xa(e,!0)}function i_(e){for(mo=e.return;mo;)switch(mo.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:mo=mo.return}}function Cr(e){if(e!==mo)return!1;if(!Mn)return i_(e),Mn=!0,!1;var s=e.tag,i;if((i=s!==3&&s!==27)&&((i=s===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||bh(e.type,e.memoizedProps)),i=!i),i&&bs&&xa(e),i_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));bs=D0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));bs=D0(e)}else s===27?(s=bs,Ra(e.type)?(e=Ch,Ch=null,bs=e):bs=s):bs=mo?pi(e.stateNode.nextSibling):null;return!0}function Qa(){bs=mo=null,Mn=!1}function nf(){var e=ya;return e!==null&&(Yo===null?Yo=e:Yo.push.apply(Yo,e),ya=null),e}function xl(e){ya===null?ya=[e]:ya.push(e)}var sf=L(null),Za=null,Ji=null;function ba(e,s,i){B(sf,s._currentValue),s._currentValue=i}function ea(e){e._currentValue=sf.current,H(sf)}function of(e,s,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),e===i)break;e=e.return}}function af(e,s,i,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var M=m;m=f;for(var U=0;U<s.length;U++)if(M.context===s[U]){m.lanes|=i,M=m.alternate,M!==null&&(M.lanes|=i),of(m.return,i,e),l||(v=null);break e}m=M.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=i,m=v.alternate,m!==null&&(m.lanes|=i),of(v,i,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function jr(e,s,i,l){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var M=f.type;wt(f.pendingProps.value,v.value)||(e!==null?e.push(M):e=[M])}}else if(f===Oe.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Yl):e=[Yl])}f=f.return}e!==null&&af(s,e,i,l),s.flags|=262144}function Uc(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Za=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function po(e){return a_(Za,e)}function Wc(e,s){return Za===null&&Ja(e),a_(e,s)}function a_(e,s){var i=s._currentValue;if(s={context:s,memoizedValue:i,next:null},Ji===null){if(e===null)throw Error(a(308));Ji=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else Ji=Ji.next=s;return i}var s2=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){s.aborted=!0,e.forEach(function(i){return i()})}},o2=t.unstable_scheduleCallback,i2=t.unstable_NormalPriority,Ws={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new s2,data:new Map,refCount:0}}function bl(e){e.refCount--,e.refCount===0&&o2(i2,function(){e.controller.abort()})}var vl=null,lf=0,Mr=0,Tr=null;function a2(e,s){if(vl===null){var i=vl=[];lf=0,Mr=dh(),Tr={status:"pending",value:void 0,then:function(l){i.push(l)}}}return lf++,s.then(r_,r_),s}function r_(){if(--lf===0&&vl!==null){Tr!==null&&(Tr.status="fulfilled");var e=vl;vl=null,Mr=0,Tr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function r2(e,s){var i=[],l={status:"pending",value:null,reason:null,then:function(f){i.push(f)}};return e.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<i.length;f++)(0,i[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<i.length;f++)(0,i[f])(void 0)}),l}var l_=z.S;z.S=function(e,s){Fg=Ie(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&a2(e,s),l_!==null&&l_(e,s)};var er=L(null);function cf(){var e=er.current;return e!==null?e:cs.pooledCache}function Fc(e,s){s===null?B(er,er.current):B(er,s.pool)}function c_(){var e=cf();return e===null?null:{parent:Ws._currentValue,pool:e}}var Er=Error(a(460)),uf=Error(a(474)),Yc=Error(a(542)),Xc={then:function(){}};function u_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d_(e,s,i){switch(i=e[i],i===void 0?e.push(s):i!==s&&(s.then(J,J),s=i),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e;default:if(typeof s.status=="string")s.then(J,J);else{if(e=cs,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,h_(e),e}throw nr=s,Er}}function tr(e){try{var s=e._init;return s(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(nr=i,Er):i}}var nr=null;function f_(){if(nr===null)throw Error(a(459));var e=nr;return nr=null,e}function h_(e){if(e===Er||e===Yc)throw Error(a(483))}var Dr=null,wl=0;function qc(e){var s=wl;return wl+=1,Dr===null&&(Dr=[]),d_(Dr,e,s)}function Sl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function Gc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function m_(e){function s(ie,Q){if(e){var ue=ie.deletions;ue===null?(ie.deletions=[Q],ie.flags|=16):ue.push(Q)}}function i(ie,Q){if(!e)return null;for(;Q!==null;)s(ie,Q),Q=Q.sibling;return null}function l(ie){for(var Q=new Map;ie!==null;)ie.key!==null?Q.set(ie.key,ie):Q.set(ie.index,ie),ie=ie.sibling;return Q}function f(ie,Q){return ie=Qi(ie,Q),ie.index=0,ie.sibling=null,ie}function m(ie,Q,ue){return ie.index=ue,e?(ue=ie.alternate,ue!==null?(ue=ue.index,ue<Q?(ie.flags|=67108866,Q):ue):(ie.flags|=67108866,Q)):(ie.flags|=1048576,Q)}function v(ie){return e&&ie.alternate===null&&(ie.flags|=67108866),ie}function M(ie,Q,ue,Be){return Q===null||Q.tag!==6?(Q=Qd(ue,ie.mode,Be),Q.return=ie,Q):(Q=f(Q,ue),Q.return=ie,Q)}function U(ie,Q,ue,Be){var $t=ue.type;return $t===C?Te(ie,Q,ue.props.children,Be,ue.key):Q!==null&&(Q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===X&&tr($t)===Q.type)?(Q=f(Q,ue.props),Sl(Q,ue),Q.return=ie,Q):(Q=Hc(ue.type,ue.key,ue.props,null,ie.mode,Be),Sl(Q,ue),Q.return=ie,Q)}function fe(ie,Q,ue,Be){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ue.containerInfo||Q.stateNode.implementation!==ue.implementation?(Q=Zd(ue,ie.mode,Be),Q.return=ie,Q):(Q=f(Q,ue.children||[]),Q.return=ie,Q)}function Te(ie,Q,ue,Be,$t){return Q===null||Q.tag!==7?(Q=Ka(ue,ie.mode,Be,$t),Q.return=ie,Q):(Q=f(Q,ue),Q.return=ie,Q)}function $e(ie,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Qd(""+Q,ie.mode,ue),Q.return=ie,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return ue=Hc(Q.type,Q.key,Q.props,null,ie.mode,ue),Sl(ue,Q),ue.return=ie,ue;case S:return Q=Zd(Q,ie.mode,ue),Q.return=ie,Q;case X:return Q=tr(Q),$e(ie,Q,ue)}if(be(Q)||G(Q))return Q=Ka(Q,ie.mode,ue,null),Q.return=ie,Q;if(typeof Q.then=="function")return $e(ie,qc(Q),ue);if(Q.$$typeof===A)return $e(ie,Wc(ie,Q),ue);Gc(ie,Q)}return null}function me(ie,Q,ue,Be){var $t=Q!==null?Q.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return $t!==null?null:M(ie,Q,""+ue,Be);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case w:return ue.key===$t?U(ie,Q,ue,Be):null;case S:return ue.key===$t?fe(ie,Q,ue,Be):null;case X:return ue=tr(ue),me(ie,Q,ue,Be)}if(be(ue)||G(ue))return $t!==null?null:Te(ie,Q,ue,Be,null);if(typeof ue.then=="function")return me(ie,Q,qc(ue),Be);if(ue.$$typeof===A)return me(ie,Q,Wc(ie,ue),Be);Gc(ie,ue)}return null}function ve(ie,Q,ue,Be,$t){if(typeof Be=="string"&&Be!==""||typeof Be=="number"||typeof Be=="bigint")return ie=ie.get(ue)||null,M(Q,ie,""+Be,$t);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case w:return ie=ie.get(Be.key===null?ue:Be.key)||null,U(Q,ie,Be,$t);case S:return ie=ie.get(Be.key===null?ue:Be.key)||null,fe(Q,ie,Be,$t);case X:return Be=tr(Be),ve(ie,Q,ue,Be,$t)}if(be(Be)||G(Be))return ie=ie.get(ue)||null,Te(Q,ie,Be,$t,null);if(typeof Be.then=="function")return ve(ie,Q,ue,qc(Be),$t);if(Be.$$typeof===A)return ve(ie,Q,ue,Wc(Q,Be),$t);Gc(Q,Be)}return null}function Ct(ie,Q,ue,Be){for(var $t=null,In=null,At=Q,pn=Q=0,Cn=null;At!==null&&pn<ue.length;pn++){At.index>pn?(Cn=At,At=null):Cn=At.sibling;var Pn=me(ie,At,ue[pn],Be);if(Pn===null){At===null&&(At=Cn);break}e&&At&&Pn.alternate===null&&s(ie,At),Q=m(Pn,Q,pn),In===null?$t=Pn:In.sibling=Pn,In=Pn,At=Cn}if(pn===ue.length)return i(ie,At),Mn&&Zi(ie,pn),$t;if(At===null){for(;pn<ue.length;pn++)At=$e(ie,ue[pn],Be),At!==null&&(Q=m(At,Q,pn),In===null?$t=At:In.sibling=At,In=At);return Mn&&Zi(ie,pn),$t}for(At=l(At);pn<ue.length;pn++)Cn=ve(At,ie,pn,ue[pn],Be),Cn!==null&&(e&&Cn.alternate!==null&&At.delete(Cn.key===null?pn:Cn.key),Q=m(Cn,Q,pn),In===null?$t=Cn:In.sibling=Cn,In=Cn);return e&&At.forEach(function($a){return s(ie,$a)}),Mn&&Zi(ie,pn),$t}function Kt(ie,Q,ue,Be){if(ue==null)throw Error(a(151));for(var $t=null,In=null,At=Q,pn=Q=0,Cn=null,Pn=ue.next();At!==null&&!Pn.done;pn++,Pn=ue.next()){At.index>pn?(Cn=At,At=null):Cn=At.sibling;var $a=me(ie,At,Pn.value,Be);if($a===null){At===null&&(At=Cn);break}e&&At&&$a.alternate===null&&s(ie,At),Q=m($a,Q,pn),In===null?$t=$a:In.sibling=$a,In=$a,At=Cn}if(Pn.done)return i(ie,At),Mn&&Zi(ie,pn),$t;if(At===null){for(;!Pn.done;pn++,Pn=ue.next())Pn=$e(ie,Pn.value,Be),Pn!==null&&(Q=m(Pn,Q,pn),In===null?$t=Pn:In.sibling=Pn,In=Pn);return Mn&&Zi(ie,pn),$t}for(At=l(At);!Pn.done;pn++,Pn=ue.next())Pn=ve(At,ie,pn,Pn.value,Be),Pn!==null&&(e&&Pn.alternate!==null&&At.delete(Pn.key===null?pn:Pn.key),Q=m(Pn,Q,pn),In===null?$t=Pn:In.sibling=Pn,In=Pn);return e&&At.forEach(function(yv){return s(ie,yv)}),Mn&&Zi(ie,pn),$t}function os(ie,Q,ue,Be){if(typeof ue=="object"&&ue!==null&&ue.type===C&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case w:e:{for(var $t=ue.key;Q!==null;){if(Q.key===$t){if($t=ue.type,$t===C){if(Q.tag===7){i(ie,Q.sibling),Be=f(Q,ue.props.children),Be.return=ie,ie=Be;break e}}else if(Q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===X&&tr($t)===Q.type){i(ie,Q.sibling),Be=f(Q,ue.props),Sl(Be,ue),Be.return=ie,ie=Be;break e}i(ie,Q);break}else s(ie,Q);Q=Q.sibling}ue.type===C?(Be=Ka(ue.props.children,ie.mode,Be,ue.key),Be.return=ie,ie=Be):(Be=Hc(ue.type,ue.key,ue.props,null,ie.mode,Be),Sl(Be,ue),Be.return=ie,ie=Be)}return v(ie);case S:e:{for($t=ue.key;Q!==null;){if(Q.key===$t)if(Q.tag===4&&Q.stateNode.containerInfo===ue.containerInfo&&Q.stateNode.implementation===ue.implementation){i(ie,Q.sibling),Be=f(Q,ue.children||[]),Be.return=ie,ie=Be;break e}else{i(ie,Q);break}else s(ie,Q);Q=Q.sibling}Be=Zd(ue,ie.mode,Be),Be.return=ie,ie=Be}return v(ie);case X:return ue=tr(ue),os(ie,Q,ue,Be)}if(be(ue))return Ct(ie,Q,ue,Be);if(G(ue)){if($t=G(ue),typeof $t!="function")throw Error(a(150));return ue=$t.call(ue),Kt(ie,Q,ue,Be)}if(typeof ue.then=="function")return os(ie,Q,qc(ue),Be);if(ue.$$typeof===A)return os(ie,Q,Wc(ie,ue),Be);Gc(ie,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint"?(ue=""+ue,Q!==null&&Q.tag===6?(i(ie,Q.sibling),Be=f(Q,ue),Be.return=ie,ie=Be):(i(ie,Q),Be=Qd(ue,ie.mode,Be),Be.return=ie,ie=Be),v(ie)):i(ie,Q)}return function(ie,Q,ue,Be){try{wl=0;var $t=os(ie,Q,ue,Be);return Dr=null,$t}catch(At){if(At===Er||At===Yc)throw At;var In=ti(29,At,null,ie.mode);return In.lanes=Be,In.return=ie,In}finally{}}}var sr=m_(!0),p_=m_(!1),va=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,s,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Vn&2)!==0){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=Pc(e),Zp(e,null,i),s}return Ic(e,l,s,i),Pc(e)}function kl(e,s,i){if(s=s.updateQueue,s!==null&&(s=s.shared,(i&4194048)!==0)){var l=s.lanes;l&=e.pendingLanes,i|=l,s.lanes=i,jn(e,i)}}function hf(e,s){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var f=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,i=i.next}while(i!==null);m===null?f=m=s:m=m.next=s}else f=m=s;i={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=s:e.next=s,i.lastBaseUpdate=s}var mf=!1;function Cl(){if(mf){var e=Tr;if(e!==null)throw e}}function jl(e,s,i,l){mf=!1;var f=e.updateQueue;va=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,M=f.shared.pending;if(M!==null){f.shared.pending=null;var U=M,fe=U.next;U.next=null,v===null?m=fe:v.next=fe,v=U;var Te=e.alternate;Te!==null&&(Te=Te.updateQueue,M=Te.lastBaseUpdate,M!==v&&(M===null?Te.firstBaseUpdate=fe:M.next=fe,Te.lastBaseUpdate=U))}if(m!==null){var $e=f.baseState;v=0,Te=fe=U=null,M=m;do{var me=M.lane&-536870913,ve=me!==M.lane;if(ve?(kn&me)===me:(l&me)===me){me!==0&&me===Mr&&(mf=!0),Te!==null&&(Te=Te.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var Ct=e,Kt=M;me=s;var os=i;switch(Kt.tag){case 1:if(Ct=Kt.payload,typeof Ct=="function"){$e=Ct.call(os,$e,me);break e}$e=Ct;break e;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Kt.payload,me=typeof Ct=="function"?Ct.call(os,$e,me):Ct,me==null)break e;$e=x({},$e,me);break e;case 2:va=!0}}me=M.callback,me!==null&&(e.flags|=64,ve&&(e.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[me]:ve.push(me))}else ve={lane:me,tag:M.tag,payload:M.payload,callback:M.callback,next:null},Te===null?(fe=Te=ve,U=$e):Te=Te.next=ve,v|=me;if(M=M.next,M===null){if(M=f.shared.pending,M===null)break;ve=M,M=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);Te===null&&(U=$e),f.baseState=U,f.firstBaseUpdate=fe,f.lastBaseUpdate=Te,m===null&&(f.shared.lanes=0),Ta|=v,e.lanes=v,e.memoizedState=$e}}function __(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function g_(e,s){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)__(i[e],s)}var Ar=L(null),Kc=L(0);function y_(e,s){e=ca,B(Kc,e),B(Ar,s),ca=e|s.baseLanes}function pf(){B(Kc,ca),B(Ar,Ar.current)}function _f(){ca=Kc.current,H(Ar),H(Kc)}var ni=L(null),mi=null;function ka(e){var s=e.alternate;B(Is,Is.current&1),B(ni,e),mi===null&&(s===null||Ar.current!==null||s.memoizedState!==null)&&(mi=e)}function gf(e){B(Is,Is.current),B(ni,e),mi===null&&(mi=e)}function x_(e){e.tag===22?(B(Is,Is.current),B(ni,e),mi===null&&(mi=e)):Ca()}function Ca(){B(Is,Is.current),B(ni,ni.current)}function si(e){H(ni),mi===e&&(mi=null),H(Is)}var Is=L(0);function Qc(e){for(var s=e;s!==null;){if(s.tag===13){var i=s.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Sh(i)||kh(i)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ta=0,hn=null,ns=null,Fs=null,Zc=!1,Nr=!1,or=!1,Jc=0,Ml=0,Rr=null,l2=0;function Bs(){throw Error(a(321))}function yf(e,s){if(s===null)return!1;for(var i=0;i<s.length&&i<e.length;i++)if(!wt(e[i],s[i]))return!1;return!0}function xf(e,s,i,l,f,m){return ta=m,hn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?ng:Lf,or=!1,m=i(l,f),or=!1,Nr&&(m=v_(s,i,l,f)),b_(e),m}function b_(e){z.H=Dl;var s=ns!==null&&ns.next!==null;if(ta=0,Fs=ns=hn=null,Zc=!1,Ml=0,Rr=null,s)throw Error(a(300));e===null||Ys||(e=e.dependencies,e!==null&&Uc(e)&&(Ys=!0))}function v_(e,s,i,l){hn=e;var f=0;do{if(Nr&&(Rr=null),Ml=0,Nr=!1,25<=f)throw Error(a(301));if(f+=1,Fs=ns=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=sg,m=s(i,l)}while(Nr);return m}function c2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?Tl(s):s,e=e.useState()[0],(ns!==null?ns.memoizedState:null)!==e&&(hn.flags|=1024),s}function bf(){var e=Jc!==0;return Jc=0,e}function vf(e,s,i){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i}function wf(e){if(Zc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Zc=!1}ta=0,Fs=ns=hn=null,Nr=!1,Ml=Jc=0,Rr=null}function Ro(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fs===null?hn.memoizedState=Fs=e:Fs=Fs.next=e,Fs}function Ps(){if(ns===null){var e=hn.alternate;e=e!==null?e.memoizedState:null}else e=ns.next;var s=Fs===null?hn.memoizedState:Fs.next;if(s!==null)Fs=s,ns=e;else{if(e===null)throw hn.alternate===null?Error(a(467)):Error(a(310));ns=e,e={memoizedState:ns.memoizedState,baseState:ns.baseState,baseQueue:ns.baseQueue,queue:ns.queue,next:null},Fs===null?hn.memoizedState=Fs=e:Fs=Fs.next=e}return Fs}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(e){var s=Ml;return Ml+=1,Rr===null&&(Rr=[]),e=d_(Rr,e,s),s=hn,(Fs===null?s.memoizedState:Fs.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?ng:Lf),e}function tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tl(e);if(e.$$typeof===A)return po(e)}throw Error(a(438,String(e)))}function Sf(e){var s=null,i=hn.updateQueue;if(i!==null&&(s=i.memoCache),s==null){var l=hn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),i===null&&(i=eu(),hn.updateQueue=i),i.memoCache=s,i=s.data[s.index],i===void 0)for(i=s.data[s.index]=Array(e),l=0;l<e;l++)i[l]=ne;return s.index++,i}function na(e,s){return typeof s=="function"?s(e):s}function nu(e){var s=Ps();return kf(s,ns,e)}function kf(e,s,i){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=i;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var M=v=null,U=null,fe=s,Te=!1;do{var $e=fe.lane&-536870913;if($e!==fe.lane?(kn&$e)===$e:(ta&$e)===$e){var me=fe.revertLane;if(me===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),$e===Mr&&(Te=!0);else if((ta&me)===me){fe=fe.next,me===Mr&&(Te=!0);continue}else $e={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},U===null?(M=U=$e,v=m):U=U.next=$e,hn.lanes|=me,Ta|=me;$e=fe.action,or&&i(m,$e),m=fe.hasEagerState?fe.eagerState:i(m,$e)}else me={lane:$e,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},U===null?(M=U=me,v=m):U=U.next=me,hn.lanes|=$e,Ta|=$e;fe=fe.next}while(fe!==null&&fe!==s);if(U===null?v=m:U.next=M,!wt(m,e.memoizedState)&&(Ys=!0,Te&&(i=Tr,i!==null)))throw i;e.memoizedState=m,e.baseState=v,e.baseQueue=U,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Cf(e){var s=Ps(),i=s.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var l=i.dispatch,f=i.pending,m=s.memoizedState;if(f!==null){i.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);wt(m,s.memoizedState)||(Ys=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),i.lastRenderedState=m}return[m,l]}function w_(e,s,i){var l=hn,f=Ps(),m=Mn;if(m){if(i===void 0)throw Error(a(407));i=i()}else i=s();var v=!wt((ns||f).memoizedState,i);if(v&&(f.memoizedState=i,Ys=!0),f=f.queue,Tf(C_.bind(null,l,f,e),[e]),f.getSnapshot!==s||v||Fs!==null&&Fs.memoizedState.tag&1){if(l.flags|=2048,Lr(9,{destroy:void 0},k_.bind(null,l,f,i,s),null),cs===null)throw Error(a(349));m||(ta&127)!==0||S_(l,s,i)}return i}function S_(e,s,i){e.flags|=16384,e={getSnapshot:s,value:i},s=hn.updateQueue,s===null?(s=eu(),hn.updateQueue=s,s.stores=[e]):(i=s.stores,i===null?s.stores=[e]:i.push(e))}function k_(e,s,i,l){s.value=i,s.getSnapshot=l,j_(s)&&M_(e)}function C_(e,s,i){return i(function(){j_(s)&&M_(e)})}function j_(e){var s=e.getSnapshot;e=e.value;try{var i=s();return!wt(e,i)}catch{return!0}}function M_(e){var s=Ga(e,2);s!==null&&Xo(s,e,2)}function jf(e){var s=Ro();if(typeof e=="function"){var i=e;if(e=i(),or){Ne(!0);try{i()}finally{Ne(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},s}function T_(e,s,i,l){return e.baseState=i,kf(e,ns,typeof l=="function"?l:na)}function u2(e,s,i,l,f){if(iu(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?i(!0):m.isTransition=!1,l(m),i=s.pending,i===null?(m.next=s.pending=m,E_(s,m)):(m.next=i.next,s.pending=i.next=m)}}function E_(e,s){var i=s.action,l=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var M=i(f,l),U=z.S;U!==null&&U(v,M),D_(e,s,M)}catch(fe){Mf(e,s,fe)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=i(f,l),D_(e,s,m)}catch(fe){Mf(e,s,fe)}}function D_(e,s,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){A_(e,s,l)},function(l){return Mf(e,s,l)}):A_(e,s,i)}function A_(e,s,i){s.status="fulfilled",s.value=i,N_(s),e.state=i,s=e.pending,s!==null&&(i=s.next,i===s?e.pending=null:(i=i.next,s.next=i,E_(e,i)))}function Mf(e,s,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=i,N_(s),s=s.next;while(s!==l)}e.action=null}function N_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function R_(e,s){return s}function L_(e,s){if(Mn){var i=cs.formState;if(i!==null){e:{var l=hn;if(Mn){if(bs){t:{for(var f=bs,m=hi;f.nodeType!==8;){if(!m){f=null;break t}if(f=pi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){bs=pi(f.nextSibling),l=f.data==="F!";break e}}xa(l)}l=!1}l&&(s=i[0])}}return i=Ro(),i.memoizedState=i.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:s},i.queue=l,i=J_.bind(null,hn,l),l.dispatch=i,l=jf(!1),m=Rf.bind(null,hn,!1,l.queue),l=Ro(),f={state:s,dispatch:null,action:e,pending:null},l.queue=f,i=u2.bind(null,hn,f,m,i),f.dispatch=i,l.memoizedState=e,[s,i,!1]}function B_(e){var s=Ps();return O_(s,ns,e)}function O_(e,s,i){if(s=kf(e,s,R_)[0],e=nu(na)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=Tl(s)}catch(v){throw v===Er?Yc:v}else l=s;s=Ps();var f=s.queue,m=f.dispatch;return i!==s.memoizedState&&(hn.flags|=2048,Lr(9,{destroy:void 0},d2.bind(null,f,i),null)),[l,m,e]}function d2(e,s){e.action=s}function z_(e){var s=Ps(),i=ns;if(i!==null)return O_(s,i,e);Ps(),s=s.memoizedState,i=Ps();var l=i.queue.dispatch;return i.memoizedState=e,[s,l,!1]}function Lr(e,s,i,l){return e={tag:e,create:i,deps:l,inst:s,next:null},s=hn.updateQueue,s===null&&(s=eu(),hn.updateQueue=s),i=s.lastEffect,i===null?s.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,s.lastEffect=e),e}function $_(){return Ps().memoizedState}function su(e,s,i,l){var f=Ro();hn.flags|=e,f.memoizedState=Lr(1|s,{destroy:void 0},i,l===void 0?null:l)}function ou(e,s,i,l){var f=Ps();l=l===void 0?null:l;var m=f.memoizedState.inst;ns!==null&&l!==null&&yf(l,ns.memoizedState.deps)?f.memoizedState=Lr(s,m,i,l):(hn.flags|=e,f.memoizedState=Lr(1|s,m,i,l))}function I_(e,s){su(8390656,8,e,s)}function Tf(e,s){ou(2048,8,e,s)}function f2(e){hn.flags|=4;var s=hn.updateQueue;if(s===null)s=eu(),hn.updateQueue=s,s.events=[e];else{var i=s.events;i===null?s.events=[e]:i.push(e)}}function P_(e){var s=Ps().memoizedState;return f2({ref:s,nextImpl:e}),function(){if((Vn&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function H_(e,s){return ou(4,2,e,s)}function V_(e,s){return ou(4,4,e,s)}function U_(e,s){if(typeof s=="function"){e=e();var i=s(e);return function(){typeof i=="function"?i():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function W_(e,s,i){i=i!=null?i.concat([e]):null,ou(4,4,U_.bind(null,s,e),i)}function Ef(){}function F_(e,s){var i=Ps();s=s===void 0?null:s;var l=i.memoizedState;return s!==null&&yf(s,l[1])?l[0]:(i.memoizedState=[e,s],e)}function Y_(e,s){var i=Ps();s=s===void 0?null:s;var l=i.memoizedState;if(s!==null&&yf(s,l[1]))return l[0];if(l=e(),or){Ne(!0);try{e()}finally{Ne(!1)}}return i.memoizedState=[l,s],l}function Df(e,s,i){return i===void 0||(ta&1073741824)!==0&&(kn&261930)===0?e.memoizedState=s:(e.memoizedState=i,e=Xg(),hn.lanes|=e,Ta|=e,i)}function X_(e,s,i,l){return wt(i,s)?i:Ar.current!==null?(e=Df(e,i,l),wt(e,s)||(Ys=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(kn&261930)===0?(Ys=!0,e.memoizedState=i):(e=Xg(),hn.lanes|=e,Ta|=e,s)}function q_(e,s,i,l,f){var m=_e.p;_e.p=m!==0&&8>m?m:8;var v=z.T,M={};z.T=M,Rf(e,!1,s,i);try{var U=f(),fe=z.S;if(fe!==null&&fe(M,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var Te=r2(U,l);El(e,s,Te,ai(e))}else El(e,s,l,ai(e))}catch($e){El(e,s,{then:function(){},status:"rejected",reason:$e},ai())}finally{_e.p=m,v!==null&&M.types!==null&&(v.types=M.types),z.T=v}}function h2(){}function Af(e,s,i,l){if(e.tag!==5)throw Error(a(476));var f=G_(e).queue;q_(e,f,s,K,i===null?h2:function(){return K_(e),i(l)})}function G_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:K},next:null};var i={};return s.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:i},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function K_(e){var s=G_(e);s.next===null&&(s=e.alternate.memoizedState),El(e,s.next.queue,{},ai())}function Nf(){return po(Yl)}function Q_(){return Ps().memoizedState}function Z_(){return Ps().memoizedState}function m2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var i=ai();e=wa(i);var l=Sa(s,e,i);l!==null&&(Xo(l,s,i),kl(l,s,i)),s={cache:rf()},e.payload=s;return}s=s.return}}function p2(e,s,i){var l=ai();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},iu(e)?eg(s,i):(i=Gd(e,s,i,l),i!==null&&(Xo(i,e,l),tg(i,s,l)))}function J_(e,s,i){var l=ai();El(e,s,i,l)}function El(e,s,i,l){var f={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(iu(e))eg(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,M=m(v,i);if(f.hasEagerState=!0,f.eagerState=M,wt(M,v))return Ic(e,s,f,0),cs===null&&$c(),!1}catch{}finally{}if(i=Gd(e,s,f,l),i!==null)return Xo(i,e,l),tg(i,s,l),!0}return!1}function Rf(e,s,i,l){if(l={lane:2,revertLane:dh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},iu(e)){if(s)throw Error(a(479))}else s=Gd(e,i,l,2),s!==null&&Xo(s,e,2)}function iu(e){var s=e.alternate;return e===hn||s!==null&&s===hn}function eg(e,s){Nr=Zc=!0;var i=e.pending;i===null?s.next=s:(s.next=i.next,i.next=s),e.pending=s}function tg(e,s,i){if((i&4194048)!==0){var l=s.lanes;l&=e.pendingLanes,i|=l,s.lanes=i,jn(e,i)}}var Dl={readContext:po,use:tu,useCallback:Bs,useContext:Bs,useEffect:Bs,useImperativeHandle:Bs,useLayoutEffect:Bs,useInsertionEffect:Bs,useMemo:Bs,useReducer:Bs,useRef:Bs,useState:Bs,useDebugValue:Bs,useDeferredValue:Bs,useTransition:Bs,useSyncExternalStore:Bs,useId:Bs,useHostTransitionStatus:Bs,useFormState:Bs,useActionState:Bs,useOptimistic:Bs,useMemoCache:Bs,useCacheRefresh:Bs};Dl.useEffectEvent=Bs;var ng={readContext:po,use:tu,useCallback:function(e,s){return Ro().memoizedState=[e,s===void 0?null:s],e},useContext:po,useEffect:I_,useImperativeHandle:function(e,s,i){i=i!=null?i.concat([e]):null,su(4194308,4,U_.bind(null,s,e),i)},useLayoutEffect:function(e,s){return su(4194308,4,e,s)},useInsertionEffect:function(e,s){su(4,2,e,s)},useMemo:function(e,s){var i=Ro();s=s===void 0?null:s;var l=e();if(or){Ne(!0);try{e()}finally{Ne(!1)}}return i.memoizedState=[l,s],l},useReducer:function(e,s,i){var l=Ro();if(i!==void 0){var f=i(s);if(or){Ne(!0);try{i(s)}finally{Ne(!1)}}}else f=s;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=p2.bind(null,hn,e),[l.memoizedState,e]},useRef:function(e){var s=Ro();return e={current:e},s.memoizedState=e},useState:function(e){e=jf(e);var s=e.queue,i=J_.bind(null,hn,s);return s.dispatch=i,[e.memoizedState,i]},useDebugValue:Ef,useDeferredValue:function(e,s){var i=Ro();return Df(i,e,s)},useTransition:function(){var e=jf(!1);return e=q_.bind(null,hn,e.queue,!0,!1),Ro().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,i){var l=hn,f=Ro();if(Mn){if(i===void 0)throw Error(a(407));i=i()}else{if(i=s(),cs===null)throw Error(a(349));(kn&127)!==0||S_(l,s,i)}f.memoizedState=i;var m={value:i,getSnapshot:s};return f.queue=m,I_(C_.bind(null,l,m,e),[e]),l.flags|=2048,Lr(9,{destroy:void 0},k_.bind(null,l,m,i,s),null),i},useId:function(){var e=Ro(),s=cs.identifierPrefix;if(Mn){var i=Hi,l=Pi;i=(l&~(1<<32-Nt(l)-1)).toString(32)+i,s="_"+s+"R_"+i,i=Jc++,0<i&&(s+="H"+i.toString(32)),s+="_"}else i=l2++,s="_"+s+"r_"+i.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Nf,useFormState:L_,useActionState:L_,useOptimistic:function(e){var s=Ro();s.memoizedState=s.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=i,s=Rf.bind(null,hn,!0,i),i.dispatch=s,[e,s]},useMemoCache:Sf,useCacheRefresh:function(){return Ro().memoizedState=m2.bind(null,hn)},useEffectEvent:function(e){var s=Ro(),i={impl:e};return s.memoizedState=i,function(){if((Vn&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}},Lf={readContext:po,use:tu,useCallback:F_,useContext:po,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:Y_,useReducer:nu,useRef:$_,useState:function(){return nu(na)},useDebugValue:Ef,useDeferredValue:function(e,s){var i=Ps();return X_(i,ns.memoizedState,e,s)},useTransition:function(){var e=nu(na)[0],s=Ps().memoizedState;return[typeof e=="boolean"?e:Tl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Nf,useFormState:B_,useActionState:B_,useOptimistic:function(e,s){var i=Ps();return T_(i,ns,e,s)},useMemoCache:Sf,useCacheRefresh:Z_};Lf.useEffectEvent=P_;var sg={readContext:po,use:tu,useCallback:F_,useContext:po,useEffect:Tf,useImperativeHandle:W_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:Y_,useReducer:Cf,useRef:$_,useState:function(){return Cf(na)},useDebugValue:Ef,useDeferredValue:function(e,s){var i=Ps();return ns===null?Df(i,e,s):X_(i,ns.memoizedState,e,s)},useTransition:function(){var e=Cf(na)[0],s=Ps().memoizedState;return[typeof e=="boolean"?e:Tl(e),s]},useSyncExternalStore:w_,useId:Q_,useHostTransitionStatus:Nf,useFormState:z_,useActionState:z_,useOptimistic:function(e,s){var i=Ps();return ns!==null?T_(i,ns,e,s):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Z_};sg.useEffectEvent=P_;function Bf(e,s,i,l){s=e.memoizedState,i=i(l,s),i=i==null?s:x({},s,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Of={enqueueSetState:function(e,s,i){e=e._reactInternals;var l=ai(),f=wa(l);f.payload=s,i!=null&&(f.callback=i),s=Sa(e,f,l),s!==null&&(Xo(s,e,l),kl(s,e,l))},enqueueReplaceState:function(e,s,i){e=e._reactInternals;var l=ai(),f=wa(l);f.tag=1,f.payload=s,i!=null&&(f.callback=i),s=Sa(e,f,l),s!==null&&(Xo(s,e,l),kl(s,e,l))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var i=ai(),l=wa(i);l.tag=2,s!=null&&(l.callback=s),s=Sa(e,l,i),s!==null&&(Xo(s,e,i),kl(s,e,i))}};function og(e,s,i,l,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,v):s.prototype&&s.prototype.isPureReactComponent?!gt(i,l)||!gt(f,m):!0}function ig(e,s,i,l){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(i,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(i,l),s.state!==e&&Of.enqueueReplaceState(s,s.state,null)}function ir(e,s){var i=s;if("ref"in s){i={};for(var l in s)l!=="ref"&&(i[l]=s[l])}if(e=e.defaultProps){i===s&&(i=x({},i));for(var f in e)i[f]===void 0&&(i[f]=e[f])}return i}function ag(e){zc(e)}function rg(e){console.error(e)}function lg(e){zc(e)}function au(e,s){try{var i=e.onUncaughtError;i(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function cg(e,s,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function zf(e,s,i){return i=wa(i),i.tag=3,i.payload={element:null},i.callback=function(){au(e,s)},i}function ug(e){return e=wa(e),e.tag=3,e}function dg(e,s,i,l){var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){cg(s,i,l)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cg(s,i,l),typeof f!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var M=l.stack;this.componentDidCatch(l.value,{componentStack:M!==null?M:""})})}function _2(e,s,i,l,f){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=i.alternate,s!==null&&jr(s,i,f,!0),i=ni.current,i!==null){switch(i.tag){case 31:case 13:return mi===null?yu():i.alternate===null&&Os===0&&(Os=3),i.flags&=-257,i.flags|=65536,i.lanes=f,l===Xc?i.flags|=16384:(s=i.updateQueue,s===null?i.updateQueue=new Set([l]):s.add(l),lh(e,l,f)),!1;case 22:return i.flags|=65536,l===Xc?i.flags|=16384:(s=i.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=s):(i=s.retryQueue,i===null?s.retryQueue=new Set([l]):i.add(l)),lh(e,l,f)),!1}throw Error(a(435,i.tag))}return lh(e,l,f),yu(),!1}if(Mn)return s=ni.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==tf&&(e=Error(a(422),{cause:l}),xl(ui(e,i)))):(l!==tf&&(s=Error(a(423),{cause:l}),xl(ui(s,i))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ui(l,i),f=zf(e.stateNode,l,f),hf(e,f),Os!==4&&(Os=2)),!1;var m=Error(a(520),{cause:l});if(m=ui(m,i),$l===null?$l=[m]:$l.push(m),Os!==4&&(Os=2),s===null)return!0;l=ui(l,i),i=s;do{switch(i.tag){case 3:return i.flags|=65536,e=f&-f,i.lanes|=e,e=zf(i.stateNode,l,e),hf(i,e),!1;case 1:if(s=i.type,m=i.stateNode,(i.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ea===null||!Ea.has(m))))return i.flags|=65536,f&=-f,i.lanes|=f,f=ug(f),dg(f,e,i,l),hf(i,f),!1}i=i.return}while(i!==null);return!1}var $f=Error(a(461)),Ys=!1;function _o(e,s,i,l){s.child=e===null?p_(s,null,i,l):sr(s,e.child,i,l)}function fg(e,s,i,l,f){i=i.render;var m=s.ref;if("ref"in l){var v={};for(var M in l)M!=="ref"&&(v[M]=l[M])}else v=l;return Ja(s),l=xf(e,s,i,v,m,f),M=bf(),e!==null&&!Ys?(vf(e,s,f),sa(e,s,f)):(Mn&&M&&Jd(s),s.flags|=1,_o(e,s,l,f),s.child)}function hg(e,s,i,l,f){if(e===null){var m=i.type;return typeof m=="function"&&!Kd(m)&&m.defaultProps===void 0&&i.compare===null?(s.tag=15,s.type=m,mg(e,s,m,l,f)):(e=Hc(i.type,null,l,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Yf(e,f)){var v=m.memoizedProps;if(i=i.compare,i=i!==null?i:gt,i(v,l)&&e.ref===s.ref)return sa(e,s,f)}return s.flags|=1,e=Qi(m,l),e.ref=s.ref,e.return=s,s.child=e}function mg(e,s,i,l,f){if(e!==null){var m=e.memoizedProps;if(gt(m,l)&&e.ref===s.ref)if(Ys=!1,s.pendingProps=l=m,Yf(e,f))(e.flags&131072)!==0&&(Ys=!0);else return s.lanes=e.lanes,sa(e,s,f)}return If(e,s,i,l,f)}function pg(e,s,i,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|i:i,e!==null){for(l=s.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,s.child=null;return _g(e,s,m,i,l)}if((i&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fc(s,m!==null?m.cachePool:null),m!==null?y_(s,m):pf(),x_(s);else return l=s.lanes=536870912,_g(e,s,m!==null?m.baseLanes|i:i,i,l)}else m!==null?(Fc(s,m.cachePool),y_(s,m),Ca(),s.memoizedState=null):(e!==null&&Fc(s,null),pf(),Ca());return _o(e,s,f,i),s.child}function Al(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function _g(e,s,i,l,f){var m=cf();return m=m===null?null:{parent:Ws._currentValue,pool:m},s.memoizedState={baseLanes:i,cachePool:m},e!==null&&Fc(s,null),pf(),x_(s),e!==null&&jr(e,s,l,!0),s.childLanes=f,null}function ru(e,s){return s=cu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function gg(e,s,i){return sr(s,e.child,null,i),e=ru(s,s.pendingProps),e.flags|=2,si(s),s.memoizedState=null,e}function g2(e,s,i){var l=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Mn){if(l.mode==="hidden")return e=ru(s,l),s.lanes=536870912,Al(null,e);if(gf(s),(e=bs)?(e=E0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Pi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},i=e_(e),i.return=s,s.child=i,mo=s,bs=null)):e=null,e===null)throw xa(s);return s.lanes=536870912,null}return ru(s,l)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(gf(s),f)if(s.flags&256)s.flags&=-257,s=gg(e,s,i);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Ys||jr(e,s,i,!1),f=(i&e.childLanes)!==0,Ys||f){if(l=cs,l!==null&&(v=Zn(l,i),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ga(e,v),Xo(l,e,v),$f;yu(),s=gg(e,s,i)}else e=m.treeContext,bs=pi(v.nextSibling),mo=s,Mn=!0,ya=null,hi=!1,e!==null&&s_(s,e),s=ru(s,l),s.flags|=4096;return s}return e=Qi(e.child,{mode:l.mode,children:l.children}),e.ref=s.ref,s.child=e,e.return=s,e}function lu(e,s){var i=s.ref;if(i===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(e===null||e.ref!==i)&&(s.flags|=4194816)}}function If(e,s,i,l,f){return Ja(s),i=xf(e,s,i,l,void 0,f),l=bf(),e!==null&&!Ys?(vf(e,s,f),sa(e,s,f)):(Mn&&l&&Jd(s),s.flags|=1,_o(e,s,i,f),s.child)}function yg(e,s,i,l,f,m){return Ja(s),s.updateQueue=null,i=v_(s,l,i,f),b_(e),l=bf(),e!==null&&!Ys?(vf(e,s,m),sa(e,s,m)):(Mn&&l&&Jd(s),s.flags|=1,_o(e,s,i,m),s.child)}function xg(e,s,i,l,f){if(Ja(s),s.stateNode===null){var m=wr,v=i.contextType;typeof v=="object"&&v!==null&&(m=po(v)),m=new i(l,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Of,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=l,m.state=s.memoizedState,m.refs={},df(s),v=i.contextType,m.context=typeof v=="object"&&v!==null?po(v):wr,m.state=s.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Bf(s,i,v,l),m.state=s.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Of.enqueueReplaceState(m,m.state,null),jl(s,l,m,f),Cl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(e===null){m=s.stateNode;var M=s.memoizedProps,U=ir(i,M);m.props=U;var fe=m.context,Te=i.contextType;v=wr,typeof Te=="object"&&Te!==null&&(v=po(Te));var $e=i.getDerivedStateFromProps;Te=typeof $e=="function"||typeof m.getSnapshotBeforeUpdate=="function",M=s.pendingProps!==M,Te||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M||fe!==v)&&ig(s,m,l,v),va=!1;var me=s.memoizedState;m.state=me,jl(s,l,m,f),Cl(),fe=s.memoizedState,M||me!==fe||va?(typeof $e=="function"&&(Bf(s,i,$e,l),fe=s.memoizedState),(U=va||og(s,i,U,l,me,fe,v))?(Te||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=fe),m.props=l,m.state=fe,m.context=v,l=U):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{m=s.stateNode,ff(e,s),v=s.memoizedProps,Te=ir(i,v),m.props=Te,$e=s.pendingProps,me=m.context,fe=i.contextType,U=wr,typeof fe=="object"&&fe!==null&&(U=po(fe)),M=i.getDerivedStateFromProps,(fe=typeof M=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==$e||me!==U)&&ig(s,m,l,U),va=!1,me=s.memoizedState,m.state=me,jl(s,l,m,f),Cl();var ve=s.memoizedState;v!==$e||me!==ve||va||e!==null&&e.dependencies!==null&&Uc(e.dependencies)?(typeof M=="function"&&(Bf(s,i,M,l),ve=s.memoizedState),(Te=va||og(s,i,Te,l,me,ve,U)||e!==null&&e.dependencies!==null&&Uc(e.dependencies))?(fe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ve,U),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ve,U)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&me===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&me===e.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=ve),m.props=l,m.state=ve,m.context=U,l=Te):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&me===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&me===e.memoizedState||(s.flags|=1024),l=!1)}return m=l,lu(e,s),l=(s.flags&128)!==0,m||l?(m=s.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&l?(s.child=sr(s,e.child,null,f),s.child=sr(s,null,i,f)):_o(e,s,i,f),s.memoizedState=m.state,e=s.child):e=sa(e,s,f),e}function bg(e,s,i,l){return Qa(),s.flags|=256,_o(e,s,i,l),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:c_()}}function Vf(e,s,i){return e=e!==null?e.childLanes&~i:0,s&&(e|=ii),e}function vg(e,s,i){var l=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Is.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Mn){if(f?ka(s):Ca(),(e=bs)?(e=E0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Pi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},i=e_(e),i.return=s,s.child=i,mo=s,bs=null)):e=null,e===null)throw xa(s);return kh(e)?s.lanes=32:s.lanes=536870912,null}var M=l.children;return l=l.fallback,f?(Ca(),f=s.mode,M=cu({mode:"hidden",children:M},f),l=Ka(l,f,i,null),M.return=s,l.return=s,M.sibling=l,s.child=M,l=s.child,l.memoizedState=Hf(i),l.childLanes=Vf(e,v,i),s.memoizedState=Pf,Al(null,l)):(ka(s),Uf(s,M))}var U=e.memoizedState;if(U!==null&&(M=U.dehydrated,M!==null)){if(m)s.flags&256?(ka(s),s.flags&=-257,s=Wf(e,s,i)):s.memoizedState!==null?(Ca(),s.child=e.child,s.flags|=128,s=null):(Ca(),M=l.fallback,f=s.mode,l=cu({mode:"visible",children:l.children},f),M=Ka(M,f,i,null),M.flags|=2,l.return=s,M.return=s,l.sibling=M,s.child=l,sr(s,e.child,null,i),l=s.child,l.memoizedState=Hf(i),l.childLanes=Vf(e,v,i),s.memoizedState=Pf,s=Al(null,l));else if(ka(s),kh(M)){if(v=M.nextSibling&&M.nextSibling.dataset,v)var fe=v.dgst;v=fe,l=Error(a(419)),l.stack="",l.digest=v,xl({value:l,source:null,stack:null}),s=Wf(e,s,i)}else if(Ys||jr(e,s,i,!1),v=(i&e.childLanes)!==0,Ys||v){if(v=cs,v!==null&&(l=Zn(v,i),l!==0&&l!==U.retryLane))throw U.retryLane=l,Ga(e,l),Xo(v,e,l),$f;Sh(M)||yu(),s=Wf(e,s,i)}else Sh(M)?(s.flags|=192,s.child=e.child,s=null):(e=U.treeContext,bs=pi(M.nextSibling),mo=s,Mn=!0,ya=null,hi=!1,e!==null&&s_(s,e),s=Uf(s,l.children),s.flags|=4096);return s}return f?(Ca(),M=l.fallback,f=s.mode,U=e.child,fe=U.sibling,l=Qi(U,{mode:"hidden",children:l.children}),l.subtreeFlags=U.subtreeFlags&65011712,fe!==null?M=Qi(fe,M):(M=Ka(M,f,i,null),M.flags|=2),M.return=s,l.return=s,l.sibling=M,s.child=l,Al(null,l),l=s.child,M=e.child.memoizedState,M===null?M=Hf(i):(f=M.cachePool,f!==null?(U=Ws._currentValue,f=f.parent!==U?{parent:U,pool:U}:f):f=c_(),M={baseLanes:M.baseLanes|i,cachePool:f}),l.memoizedState=M,l.childLanes=Vf(e,v,i),s.memoizedState=Pf,Al(e.child,l)):(ka(s),i=e.child,e=i.sibling,i=Qi(i,{mode:"visible",children:l.children}),i.return=s,i.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=i,s.memoizedState=null,i)}function Uf(e,s){return s=cu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function cu(e,s){return e=ti(22,e,null,s),e.lanes=0,e}function Wf(e,s,i){return sr(s,e.child,null,i),e=Uf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function wg(e,s,i){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s),of(e.return,s,i)}function Ff(e,s,i,l,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=i,v.tailMode=f,v.treeForkCount=m)}function Sg(e,s,i){var l=s.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var v=Is.current,M=(v&2)!==0;if(M?(v=v&1|2,s.flags|=128):v&=1,B(Is,v),_o(e,s,l,i),l=Mn?yl:0,!M&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,i,s);else if(e.tag===19)wg(e,i,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(i=s.child,f=null;i!==null;)e=i.alternate,e!==null&&Qc(e)===null&&(f=i),i=i.sibling;i=f,i===null?(f=s.child,s.child=null):(f=i.sibling,i.sibling=null),Ff(s,!1,f,i,m,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Qc(e)===null){s.child=f;break}e=f.sibling,f.sibling=i,i=f,f=e}Ff(s,!0,i,null,m,l);break;case"together":Ff(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function sa(e,s,i){if(e!==null&&(s.dependencies=e.dependencies),Ta|=s.lanes,(i&s.childLanes)===0)if(e!==null){if(jr(e,s,i,!1),(i&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,i=Qi(e,e.pendingProps),s.child=i,i.return=s;e.sibling!==null;)e=e.sibling,i=i.sibling=Qi(e,e.pendingProps),i.return=s;i.sibling=null}return s.child}function Yf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Uc(e)))}function y2(e,s,i){switch(s.tag){case 3:Ze(s,s.stateNode.containerInfo),ba(s,Ws,e.memoizedState.cache),Qa();break;case 27:case 5:Xt(s);break;case 4:Ze(s,s.stateNode.containerInfo);break;case 10:ba(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,gf(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(s),s.flags|=128,null):(i&s.child.childLanes)!==0?vg(e,s,i):(ka(s),e=sa(e,s,i),e!==null?e.sibling:null);ka(s);break;case 19:var f=(e.flags&128)!==0;if(l=(i&s.childLanes)!==0,l||(jr(e,s,i,!1),l=(i&s.childLanes)!==0),f){if(l)return Sg(e,s,i);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),B(Is,Is.current),l)break;return null;case 22:return s.lanes=0,pg(e,s,i,s.pendingProps);case 24:ba(s,Ws,e.memoizedState.cache)}return sa(e,s,i)}function kg(e,s,i){if(e!==null)if(e.memoizedProps!==s.pendingProps)Ys=!0;else{if(!Yf(e,i)&&(s.flags&128)===0)return Ys=!1,y2(e,s,i);Ys=(e.flags&131072)!==0}else Ys=!1,Mn&&(s.flags&1048576)!==0&&n_(s,yl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(e=tr(s.elementType),s.type=e,typeof e=="function")Kd(e)?(l=ir(e,l),s.tag=1,s=xg(null,s,e,l,i)):(s.tag=0,s=If(null,s,e,l,i));else{if(e!=null){var f=e.$$typeof;if(f===T){s.tag=11,s=fg(null,s,e,l,i);break e}else if(f===P){s.tag=14,s=hg(null,s,e,l,i);break e}}throw s=de(e)||e,Error(a(306,s,""))}}return s;case 0:return If(e,s,s.type,s.pendingProps,i);case 1:return l=s.type,f=ir(l,s.pendingProps),xg(e,s,l,f,i);case 3:e:{if(Ze(s,s.stateNode.containerInfo),e===null)throw Error(a(387));l=s.pendingProps;var m=s.memoizedState;f=m.element,ff(e,s),jl(s,l,null,i);var v=s.memoizedState;if(l=v.cache,ba(s,Ws,l),l!==m.cache&&af(s,[Ws],i,!0),Cl(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bg(e,s,l,i);break e}else if(l!==f){f=ui(Error(a(424)),s),xl(f),s=bg(e,s,l,i);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bs=pi(e.firstChild),mo=s,Mn=!0,ya=null,hi=!0,i=p_(s,null,l,i),s.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Qa(),l===f){s=sa(e,s,i);break e}_o(e,s,l,i)}s=s.child}return s;case 26:return lu(e,s),e===null?(i=B0(s.type,null,s.pendingProps,null))?s.memoizedState=i:Mn||(i=s.type,e=s.pendingProps,l=Cu(Ae.current).createElement(i),l[xn]=s,l[Wn]=e,go(l,i,e),Nn(l),s.stateNode=l):s.memoizedState=B0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Xt(s),e===null&&Mn&&(l=s.stateNode=N0(s.type,s.pendingProps,Ae.current),mo=s,hi=!0,f=bs,Ra(s.type)?(Ch=f,bs=pi(l.firstChild)):bs=f),_o(e,s,s.pendingProps.children,i),lu(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Mn&&((f=l=bs)&&(l=q2(l,s.type,s.pendingProps,hi),l!==null?(s.stateNode=l,mo=s,bs=pi(l.firstChild),hi=!1,f=!0):f=!1),f||xa(s)),Xt(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,l=m.children,bh(f,m)?l=null:v!==null&&bh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=xf(e,s,c2,null,null,i),Yl._currentValue=f),lu(e,s),_o(e,s,l,i),s.child;case 6:return e===null&&Mn&&((e=i=bs)&&(i=G2(i,s.pendingProps,hi),i!==null?(s.stateNode=i,mo=s,bs=null,e=!0):e=!1),e||xa(s)),null;case 13:return vg(e,s,i);case 4:return Ze(s,s.stateNode.containerInfo),l=s.pendingProps,e===null?s.child=sr(s,null,l,i):_o(e,s,l,i),s.child;case 11:return fg(e,s,s.type,s.pendingProps,i);case 7:return _o(e,s,s.pendingProps,i),s.child;case 8:return _o(e,s,s.pendingProps.children,i),s.child;case 12:return _o(e,s,s.pendingProps.children,i),s.child;case 10:return l=s.pendingProps,ba(s,s.type,l.value),_o(e,s,l.children,i),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,Ja(s),f=po(f),l=l(f),s.flags|=1,_o(e,s,l,i),s.child;case 14:return hg(e,s,s.type,s.pendingProps,i);case 15:return mg(e,s,s.type,s.pendingProps,i);case 19:return Sg(e,s,i);case 31:return g2(e,s,i);case 22:return pg(e,s,i,s.pendingProps);case 24:return Ja(s),l=po(Ws),e===null?(f=cf(),f===null&&(f=cs,m=rf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=i),f=m),s.memoizedState={parent:l,cache:f},df(s),ba(s,Ws,f)):((e.lanes&i)!==0&&(ff(e,s),jl(s,null,null,i),Cl()),f=e.memoizedState,m=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ba(s,Ws,l)):(l=m.cache,ba(s,Ws,l),l!==f.cache&&af(s,[Ws],i,!0))),_o(e,s,s.pendingProps.children,i),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function oa(e){e.flags|=4}function Xf(e,s,i,l,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw nr=Xc,uf}else e.flags&=-16777217}function Cg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(s))if(Qg())e.flags|=8192;else throw nr=Xc,uf}function uu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?Ht():536870912,e.lanes|=s,$r|=s)}function Nl(e,s){if(!Mn)switch(e.tailMode){case"hidden":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function vs(e){var s=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(s)for(var f=e.child;f!==null;)i|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)i|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=i,s}function x2(e,s,i){var l=s.pendingProps;switch(ef(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vs(s),null;case 1:return vs(s),null;case 3:return i=s.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ea(Ws),Je(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Cr(s)?oa(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nf())),vs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(oa(s),m!==null?(vs(s),Cg(s,m)):(vs(s),Xf(s,f,null,l,i))):m?m!==e.memoizedState?(oa(s),vs(s),Cg(s,m)):(vs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==l&&oa(s),vs(s),Xf(s,f,e,l,i)),null;case 27:if(qt(s),i=Ae.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&oa(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return vs(s),null}e=oe.current,Cr(s)?o_(s):(e=N0(f,l,i),s.stateNode=e,oa(s))}return vs(s),null;case 5:if(qt(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&oa(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return vs(s),null}if(m=oe.current,Cr(s))o_(s);else{var v=Cu(Ae.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}m[xn]=s,m[Wn]=l;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(go(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&oa(s)}}return vs(s),Xf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,i),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==l&&oa(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(a(166));if(e=Ae.current,Cr(s)){if(e=s.stateNode,i=s.memoizedProps,l=null,f=mo,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[xn]=s,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||v0(e.nodeValue,i)),e||xa(s,!0)}else e=Cu(e).createTextNode(l),e[xn]=s,s.stateNode=e}return vs(s),null;case 31:if(i=s.memoizedState,e===null||e.memoizedState!==null){if(l=Cr(s),i!==null){if(e===null){if(!l)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[xn]=s}else Qa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),e=!1}else i=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return s.flags&256?(si(s),s):(si(s),null);if((s.flags&128)!==0)throw Error(a(558))}return vs(s),null;case 13:if(l=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Cr(s),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[xn]=s}else Qa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),f=!1}else f=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(si(s),s):(si(s),null)}return si(s),(s.flags&128)!==0?(s.lanes=i,s):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),i!==e&&i&&(s.child.flags|=8192),uu(s,s.updateQueue),vs(s),null);case 4:return Je(),e===null&&ph(s.stateNode.containerInfo),vs(s),null;case 10:return ea(s.type),vs(s),null;case 19:if(H(Is),l=s.memoizedState,l===null)return vs(s),null;if(f=(s.flags&128)!==0,m=l.rendering,m===null)if(f)Nl(l,!1);else{if(Os!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Qc(e),m!==null){for(s.flags|=128,Nl(l,!1),e=m.updateQueue,s.updateQueue=e,uu(s,e),s.subtreeFlags=0,e=i,i=s.child;i!==null;)Jp(i,e),i=i.sibling;return B(Is,Is.current&1|2),Mn&&Zi(s,l.treeForkCount),s.child}e=e.sibling}l.tail!==null&&Ie()>pu&&(s.flags|=128,f=!0,Nl(l,!1),s.lanes=4194304)}else{if(!f)if(e=Qc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,uu(s,e),Nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Mn)return vs(s),null}else 2*Ie()-l.renderingStartTime>pu&&i!==536870912&&(s.flags|=128,f=!0,Nl(l,!1),s.lanes=4194304);l.isBackwards?(m.sibling=s.child,s.child=m):(e=l.last,e!==null?e.sibling=m:s.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ie(),e.sibling=null,i=Is.current,B(Is,f?i&1|2:i&1),Mn&&Zi(s,l.treeForkCount),e):(vs(s),null);case 22:case 23:return si(s),_f(),l=s.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(i&536870912)!==0&&(s.flags&128)===0&&(vs(s),s.subtreeFlags&6&&(s.flags|=8192)):vs(s),i=s.updateQueue,i!==null&&uu(s,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==i&&(s.flags|=2048),e!==null&&H(er),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),s.memoizedState.cache!==i&&(s.flags|=2048),ea(Ws),vs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function b2(e,s){switch(ef(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ea(Ws),Je(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return qt(s),null;case 31:if(s.memoizedState!==null){if(si(s),s.alternate===null)throw Error(a(340));Qa()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(si(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));Qa()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return H(Is),null;case 4:return Je(),null;case 10:return ea(s.type),null;case 22:case 23:return si(s),_f(),e!==null&&H(er),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return ea(Ws),null;case 25:return null;default:return null}}function jg(e,s){switch(ef(s),s.tag){case 3:ea(Ws),Je();break;case 26:case 27:case 5:qt(s);break;case 4:Je();break;case 31:s.memoizedState!==null&&si(s);break;case 13:si(s);break;case 19:H(Is);break;case 10:ea(s.type);break;case 22:case 23:si(s),_f(),e!==null&&H(er);break;case 24:ea(Ws)}}function Rl(e,s){try{var i=s.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var f=l.next;i=f;do{if((i.tag&e)===e){l=void 0;var m=i.create,v=i.inst;l=m(),v.destroy=l}i=i.next}while(i!==f)}}catch(M){Kn(s,s.return,M)}}function ja(e,s,i){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var v=l.inst,M=v.destroy;if(M!==void 0){v.destroy=void 0,f=s;var U=i,fe=M;try{fe()}catch(Te){Kn(f,U,Te)}}}l=l.next}while(l!==m)}}catch(Te){Kn(s,s.return,Te)}}function Mg(e){var s=e.updateQueue;if(s!==null){var i=e.stateNode;try{g_(s,i)}catch(l){Kn(e,e.return,l)}}}function Tg(e,s,i){i.props=ir(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){Kn(e,s,l)}}function Ll(e,s){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(f){Kn(e,s,f)}}function Vi(e,s){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(f){Kn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(f){Kn(e,s,f)}else i.current=null}function Eg(e){var s=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(f){Kn(e,e.return,f)}}function qf(e,s,i){try{var l=e.stateNode;V2(l,e.type,i,s),l[Wn]=s}catch(f){Kn(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,s,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,s):(s=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.appendChild(e),i=i._reactRootContainer,i!=null||s.onclick!==null||(s.onclick=J));else if(l!==4&&(l===27&&Ra(e.type)&&(i=e.stateNode,s=null),e=e.child,e!==null))for(Kf(e,s,i),e=e.sibling;e!==null;)Kf(e,s,i),e=e.sibling}function du(e,s,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?i.insertBefore(e,s):i.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(du(e,s,i),e=e.sibling;e!==null;)du(e,s,i),e=e.sibling}function Ag(e){var s=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);go(s,l,i),s[xn]=e,s[Wn]=i}catch(m){Kn(e,e.return,m)}}var ia=!1,Xs=!1,Qf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,lo=null;function v2(e,s){if(e=e.containerInfo,yh=Nu,e=Dn(e),Fn(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var v=0,M=-1,U=-1,fe=0,Te=0,$e=e,me=null;t:for(;;){for(var ve;$e!==i||f!==0&&$e.nodeType!==3||(M=v+f),$e!==m||l!==0&&$e.nodeType!==3||(U=v+l),$e.nodeType===3&&(v+=$e.nodeValue.length),(ve=$e.firstChild)!==null;)me=$e,$e=ve;for(;;){if($e===e)break t;if(me===i&&++fe===f&&(M=v),me===m&&++Te===l&&(U=v),(ve=$e.nextSibling)!==null)break;$e=me,me=$e.parentNode}$e=ve}i=M===-1||U===-1?null:{start:M,end:U}}else i=null}i=i||{start:0,end:0}}else i=null;for(xh={focusedElem:e,selectionRange:i},Nu=!1,lo=s;lo!==null;)if(s=lo,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,lo=e;else for(;lo!==null;){switch(s=lo,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)f=e[i],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,i=s,f=m.memoizedProps,m=m.memoizedState,l=i.stateNode;try{var Ct=ir(i.type,f);e=l.getSnapshotBeforeUpdate(Ct,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Kt){Kn(i,i.return,Kt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,i=e.nodeType,i===9)wh(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,lo=e;break}lo=s.return}}function Rg(e,s,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:ra(e,i),l&4&&Rl(5,i);break;case 1:if(ra(e,i),l&4)if(e=i.stateNode,s===null)try{e.componentDidMount()}catch(v){Kn(i,i.return,v)}else{var f=ir(i.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Kn(i,i.return,v)}}l&64&&Mg(i),l&512&&Ll(i,i.return);break;case 3:if(ra(e,i),l&64&&(e=i.updateQueue,e!==null)){if(s=null,i.child!==null)switch(i.child.tag){case 27:case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}try{g_(e,s)}catch(v){Kn(i,i.return,v)}}break;case 27:s===null&&l&4&&Ag(i);case 26:case 5:ra(e,i),s===null&&l&4&&Eg(i),l&512&&Ll(i,i.return);break;case 12:ra(e,i);break;case 31:ra(e,i),l&4&&Og(e,i);break;case 13:ra(e,i),l&4&&zg(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=D2.bind(null,i),K2(e,i))));break;case 22:if(l=i.memoizedState!==null||ia,!l){s=s!==null&&s.memoizedState!==null||Xs,f=ia;var m=Xs;ia=l,(Xs=s)&&!m?la(e,i,(i.subtreeFlags&8772)!==0):ra(e,i),ia=f,Xs=m}break;case 30:break;default:ra(e,i)}}function Lg(e){var s=e.alternate;s!==null&&(e.alternate=null,Lg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&co(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var js=null,Uo=!1;function aa(e,s,i){for(i=i.child;i!==null;)Bg(e,s,i),i=i.sibling}function Bg(e,s,i){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ue,i)}catch{}switch(i.tag){case 26:Xs||Vi(i,s),aa(e,s,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Xs||Vi(i,s);var l=js,f=Uo;Ra(i.type)&&(js=i.stateNode,Uo=!1),aa(e,s,i),Ul(i.stateNode),js=l,Uo=f;break;case 5:Xs||Vi(i,s);case 6:if(l=js,f=Uo,js=null,aa(e,s,i),js=l,Uo=f,js!==null)if(Uo)try{(js.nodeType===9?js.body:js.nodeName==="HTML"?js.ownerDocument.body:js).removeChild(i.stateNode)}catch(m){Kn(i,s,m)}else try{js.removeChild(i.stateNode)}catch(m){Kn(i,s,m)}break;case 18:js!==null&&(Uo?(e=js,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Yr(e)):M0(js,i.stateNode));break;case 4:l=js,f=Uo,js=i.stateNode.containerInfo,Uo=!0,aa(e,s,i),js=l,Uo=f;break;case 0:case 11:case 14:case 15:ja(2,i,s),Xs||ja(4,i,s),aa(e,s,i);break;case 1:Xs||(Vi(i,s),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Tg(i,s,l)),aa(e,s,i);break;case 21:aa(e,s,i);break;case 22:Xs=(l=Xs)||i.memoizedState!==null,aa(e,s,i),Xs=l;break;default:aa(e,s,i)}}function Og(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(i){Kn(s,s.return,i)}}}function zg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(i){Kn(s,s.return,i)}}function w2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Ng),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Ng),s;default:throw Error(a(435,e.tag))}}function fu(e,s){var i=w2(e);s.forEach(function(l){if(!i.has(l)){i.add(l);var f=A2.bind(null,e,l);l.then(f,f)}})}function Wo(e,s){var i=s.deletions;if(i!==null)for(var l=0;l<i.length;l++){var f=i[l],m=e,v=s,M=v;e:for(;M!==null;){switch(M.tag){case 27:if(Ra(M.type)){js=M.stateNode,Uo=!1;break e}break;case 5:js=M.stateNode,Uo=!1;break e;case 3:case 4:js=M.stateNode.containerInfo,Uo=!0;break e}M=M.return}if(js===null)throw Error(a(160));Bg(m,v,f),js=null,Uo=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)$g(s,e),s=s.sibling}var Ti=null;function $g(e,s){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wo(s,e),Fo(e),l&4&&(ja(3,e,e.return),Rl(3,e),ja(5,e,e.return));break;case 1:Wo(s,e),Fo(e),l&512&&(Xs||i===null||Vi(i,i.return)),l&64&&ia&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var f=Ti;if(Wo(s,e),Fo(e),l&512&&(Xs||i===null||Vi(i,i.return)),l&4){var m=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Co]||m[xn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),go(m,l,i),m[xn]=e,Nn(m),l=m;break e;case"link":var v=$0("link","href",f).get(l+(i.href||""));if(v){for(var M=0;M<v.length;M++)if(m=v[M],m.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&m.getAttribute("rel")===(i.rel==null?null:i.rel)&&m.getAttribute("title")===(i.title==null?null:i.title)&&m.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){v.splice(M,1);break t}}m=f.createElement(l),go(m,l,i),f.head.appendChild(m);break;case"meta":if(v=$0("meta","content",f).get(l+(i.content||""))){for(M=0;M<v.length;M++)if(m=v[M],m.getAttribute("content")===(i.content==null?null:""+i.content)&&m.getAttribute("name")===(i.name==null?null:i.name)&&m.getAttribute("property")===(i.property==null?null:i.property)&&m.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&m.getAttribute("charset")===(i.charSet==null?null:i.charSet)){v.splice(M,1);break t}}m=f.createElement(l),go(m,l,i),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[xn]=e,Nn(m),l=m}e.stateNode=l}else I0(f,e.type,e.stateNode);else e.stateNode=z0(f,l,e.memoizedProps);else m!==l?(m===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):m.count--,l===null?I0(f,e.type,e.stateNode):z0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qf(e,e.memoizedProps,i.memoizedProps)}break;case 27:Wo(s,e),Fo(e),l&512&&(Xs||i===null||Vi(i,i.return)),i!==null&&l&4&&qf(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Wo(s,e),Fo(e),l&512&&(Xs||i===null||Vi(i,i.return)),e.flags&32){f=e.stateNode;try{Ss(f,"")}catch(Ct){Kn(e,e.return,Ct)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,qf(e,f,i!==null?i.memoizedProps:f)),l&1024&&(Qf=!0);break;case 6:if(Wo(s,e),Fo(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(Ct){Kn(e,e.return,Ct)}}break;case 3:if(Tu=null,f=Ti,Ti=ju(s.containerInfo),Wo(s,e),Ti=f,Fo(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Yr(s.containerInfo)}catch(Ct){Kn(e,e.return,Ct)}Qf&&(Qf=!1,Ig(e));break;case 4:l=Ti,Ti=ju(e.stateNode.containerInfo),Wo(s,e),Fo(e),Ti=l;break;case 12:Wo(s,e),Fo(e);break;case 31:Wo(s,e),Fo(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fu(e,l)));break;case 13:Wo(s,e),Fo(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(mu=Ie()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fu(e,l)));break;case 22:f=e.memoizedState!==null;var U=i!==null&&i.memoizedState!==null,fe=ia,Te=Xs;if(ia=fe||f,Xs=Te||U,Wo(s,e),Xs=Te,ia=fe,Fo(e),l&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(i===null||U||ia||Xs||ar(e)),i=null,s=e;;){if(s.tag===5||s.tag===26){if(i===null){U=i=s;try{if(m=U.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{M=U.stateNode;var $e=U.memoizedProps.style,me=$e!=null&&$e.hasOwnProperty("display")?$e.display:null;M.style.display=me==null||typeof me=="boolean"?"":(""+me).trim()}}catch(Ct){Kn(U,U.return,Ct)}}}else if(s.tag===6){if(i===null){U=s;try{U.stateNode.nodeValue=f?"":U.memoizedProps}catch(Ct){Kn(U,U.return,Ct)}}}else if(s.tag===18){if(i===null){U=s;try{var ve=U.stateNode;f?T0(ve,!0):T0(U.stateNode,!1)}catch(Ct){Kn(U,U.return,Ct)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;i===s&&(i=null),s=s.return}i===s&&(i=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,fu(e,i))));break;case 19:Wo(s,e),Fo(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fu(e,l)));break;case 30:break;case 21:break;default:Wo(s,e),Fo(e)}}function Fo(e){var s=e.flags;if(s&2){try{for(var i,l=e.return;l!==null;){if(Dg(l)){i=l;break}l=l.return}if(i==null)throw Error(a(160));switch(i.tag){case 27:var f=i.stateNode,m=Gf(e);du(e,m,f);break;case 5:var v=i.stateNode;i.flags&32&&(Ss(v,""),i.flags&=-33);var M=Gf(e);du(e,M,v);break;case 3:case 4:var U=i.stateNode.containerInfo,fe=Gf(e);Kf(e,fe,U);break;default:throw Error(a(161))}}catch(Te){Kn(e,e.return,Te)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Ig(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function ra(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Rg(e,s.alternate,s),s=s.sibling}function ar(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:ja(4,s,s.return),ar(s);break;case 1:Vi(s,s.return);var i=s.stateNode;typeof i.componentWillUnmount=="function"&&Tg(s,s.return,i),ar(s);break;case 27:Ul(s.stateNode);case 26:case 5:Vi(s,s.return),ar(s);break;case 22:s.memoizedState===null&&ar(s);break;case 30:ar(s);break;default:ar(s)}e=e.sibling}}function la(e,s,i){for(i=i&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:la(f,m,i),Rl(4,m);break;case 1:if(la(f,m,i),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(fe){Kn(l,l.return,fe)}if(l=m,f=l.updateQueue,f!==null){var M=l.stateNode;try{var U=f.shared.hiddenCallbacks;if(U!==null)for(f.shared.hiddenCallbacks=null,f=0;f<U.length;f++)__(U[f],M)}catch(fe){Kn(l,l.return,fe)}}i&&v&64&&Mg(m),Ll(m,m.return);break;case 27:Ag(m);case 26:case 5:la(f,m,i),i&&l===null&&v&4&&Eg(m),Ll(m,m.return);break;case 12:la(f,m,i);break;case 31:la(f,m,i),i&&v&4&&Og(f,m);break;case 13:la(f,m,i),i&&v&4&&zg(f,m);break;case 22:m.memoizedState===null&&la(f,m,i),Ll(m,m.return);break;case 30:break;default:la(f,m,i)}s=s.sibling}}function Zf(e,s){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&bl(i))}function Jf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&bl(e))}function Ei(e,s,i,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Pg(e,s,i,l),s=s.sibling}function Pg(e,s,i,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Ei(e,s,i,l),f&2048&&Rl(9,s);break;case 1:Ei(e,s,i,l);break;case 3:Ei(e,s,i,l),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&bl(e)));break;case 12:if(f&2048){Ei(e,s,i,l),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,M=m.onPostCommit;typeof M=="function"&&M(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(U){Kn(s,s.return,U)}}else Ei(e,s,i,l);break;case 31:Ei(e,s,i,l);break;case 13:Ei(e,s,i,l);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Ei(e,s,i,l):Bl(e,s):m._visibility&2?Ei(e,s,i,l):(m._visibility|=2,Br(e,s,i,l,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(v,s);break;case 24:Ei(e,s,i,l),f&2048&&Jf(s.alternate,s);break;default:Ei(e,s,i,l)}}function Br(e,s,i,l,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,M=i,U=l,fe=v.flags;switch(v.tag){case 0:case 11:case 15:Br(m,v,M,U,f),Rl(8,v);break;case 23:break;case 22:var Te=v.stateNode;v.memoizedState!==null?Te._visibility&2?Br(m,v,M,U,f):Bl(m,v):(Te._visibility|=2,Br(m,v,M,U,f)),f&&fe&2048&&Zf(v.alternate,v);break;case 24:Br(m,v,M,U,f),f&&fe&2048&&Jf(v.alternate,v);break;default:Br(m,v,M,U,f)}s=s.sibling}}function Bl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var i=e,l=s,f=l.flags;switch(l.tag){case 22:Bl(i,l),f&2048&&Zf(l.alternate,l);break;case 24:Bl(i,l),f&2048&&Jf(l.alternate,l);break;default:Bl(i,l)}s=s.sibling}}var Ol=8192;function Or(e,s,i){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Hg(e,s,i),e=e.sibling}function Hg(e,s,i){switch(e.tag){case 26:Or(e,s,i),e.flags&Ol&&e.memoizedState!==null&&lv(i,Ti,e.memoizedState,e.memoizedProps);break;case 5:Or(e,s,i);break;case 3:case 4:var l=Ti;Ti=ju(e.stateNode.containerInfo),Or(e,s,i),Ti=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ol,Ol=16777216,Or(e,s,i),Ol=l):Or(e,s,i));break;default:Or(e,s,i)}}function Vg(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function zl(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var i=0;i<s.length;i++){var l=s[i];lo=l,Wg(l,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:zl(e),e.flags&2048&&ja(9,e,e.return);break;case 3:zl(e);break;case 12:zl(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,hu(e)):zl(e);break;default:zl(e)}}function hu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var i=0;i<s.length;i++){var l=s[i];lo=l,Wg(l,e)}Vg(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:ja(8,s,s.return),hu(s);break;case 22:i=s.stateNode,i._visibility&2&&(i._visibility&=-3,hu(s));break;default:hu(s)}e=e.sibling}}function Wg(e,s){for(;lo!==null;){var i=lo;switch(i.tag){case 0:case 11:case 15:ja(8,i,s);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:bl(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,lo=l;else e:for(i=e;lo!==null;){l=lo;var f=l.sibling,m=l.return;if(Lg(l),l===i){lo=null;break e}if(f!==null){f.return=m,lo=f;break e}lo=m}}}var S2={getCacheForType:function(e){var s=po(Ws),i=s.data.get(e);return i===void 0&&(i=e(),s.data.set(e,i)),i},cacheSignal:function(){return po(Ws).controller.signal}},k2=typeof WeakMap=="function"?WeakMap:Map,Vn=0,cs=null,vn=null,kn=0,Gn=0,oi=null,Ma=!1,zr=!1,eh=!1,ca=0,Os=0,Ta=0,rr=0,th=0,ii=0,$r=0,$l=null,Yo=null,nh=!1,mu=0,Fg=0,pu=1/0,_u=null,Ea=null,Js=0,Da=null,Ir=null,ua=0,sh=0,oh=null,Yg=null,Il=0,ih=null;function ai(){return(Vn&2)!==0&&kn!==0?kn&-kn:z.T!==null?dh():rs()}function Xg(){if(ii===0)if((kn&536870912)===0||Mn){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ii=e}else ii=536870912;return e=ni.current,e!==null&&(e.flags|=32),ii}function Xo(e,s,i){(e===cs&&(Gn===2||Gn===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),Aa(e,kn,ii,!1)),at(e,i),((Vn&2)===0||e!==cs)&&(e===cs&&((Vn&2)===0&&(rr|=i),Os===4&&Aa(e,kn,ii,!1)),Ui(e))}function qg(e,s,i){if((Vn&6)!==0)throw Error(a(327));var l=!i&&(s&127)===0&&(s&e.expiredLanes)===0||Ut(e,s),f=l?M2(e,s):rh(e,s,!0),m=l;do{if(f===0){zr&&!l&&Aa(e,s,0,!1);break}else{if(i=e.current.alternate,m&&!C2(i)){f=rh(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var M=e;f=$l;var U=M.current.memoizedState.isDehydrated;if(U&&(Pr(M,v).flags|=256),v=rh(M,v,!1),v!==2){if(eh&&!U){M.errorRecoveryDisabledLanes|=m,rr|=m,f=4;break e}m=Yo,Yo=f,m!==null&&(Yo===null?Yo=m:Yo.push.apply(Yo,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Pr(e,0),Aa(e,s,0,!0);break}e:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Aa(l,s,ii,!Ma);break e;case 2:Yo=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=mu+300-Ie(),10<f)){if(Aa(l,s,ii,!Ma),Ke(l,0,!0)!==0)break e;ua=s,l.timeoutHandle=C0(Gg.bind(null,l,i,Yo,_u,nh,s,ii,rr,$r,Ma,m,"Throttled",-0,0),f);break e}Gg(l,i,Yo,_u,nh,s,ii,rr,$r,Ma,m,null,-0,0)}}break}while(!0);Ui(e)}function Gg(e,s,i,l,f,m,v,M,U,fe,Te,$e,me,ve){if(e.timeoutHandle=-1,$e=s.subtreeFlags,$e&8192||($e&16785408)===16785408){$e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:J},Hg(s,m,$e);var Ct=(m&62914560)===m?mu-Ie():(m&4194048)===m?Fg-Ie():0;if(Ct=cv($e,Ct),Ct!==null){ua=m,e.cancelPendingCommit=Ct(s0.bind(null,e,s,m,i,l,f,v,M,U,Te,$e,null,me,ve)),Aa(e,m,v,!fe);return}}s0(e,s,m,i,l,f,v,M,U)}function C2(e){for(var s=e;;){var i=s.tag;if((i===0||i===11||i===15)&&s.flags&16384&&(i=s.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var f=i[l],m=f.getSnapshot;f=f.value;try{if(!wt(m(),f))return!1}catch{return!1}}if(i=s.child,s.subtreeFlags&16384&&i!==null)i.return=s,s=i;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Aa(e,s,i,l){s&=~th,s&=~rr,e.suspendedLanes|=s,e.pingedLanes&=~s,l&&(e.warmLanes|=s),l=e.expirationTimes;for(var f=s;0<f;){var m=31-Nt(f),v=1<<m;l[m]=-1,f&=~v}i!==0&&Tn(e,i,s)}function gu(){return(Vn&6)===0?(Pl(0),!1):!0}function ah(){if(vn!==null){if(Gn===0)var e=vn.return;else e=vn,Ji=Za=null,wf(e),Dr=null,wl=0,e=vn;for(;e!==null;)jg(e.alternate,e),e=e.return;vn=null}}function Pr(e,s){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,F2(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),ua=0,ah(),cs=e,vn=i=Qi(e.current,null),kn=s,Gn=0,oi=null,Ma=!1,zr=Ut(e,s),eh=!1,$r=ii=th=rr=Ta=Os=0,Yo=$l=null,nh=!1,(s&8)!==0&&(s|=s&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=s;0<l;){var f=31-Nt(l),m=1<<f;s|=e[f],l&=~m}return ca=s,$c(),i}function Kg(e,s){hn=null,z.H=Dl,s===Er||s===Yc?(s=f_(),Gn=3):s===uf?(s=f_(),Gn=4):Gn=s===$f?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,oi=s,vn===null&&(Os=1,au(e,ui(s,e.current)))}function Qg(){var e=ni.current;return e===null?!0:(kn&4194048)===kn?mi===null:(kn&62914560)===kn||(kn&536870912)!==0?e===mi:!1}function Zg(){var e=z.H;return z.H=Dl,e===null?Dl:e}function Jg(){var e=z.A;return z.A=S2,e}function yu(){Os=4,Ma||(kn&4194048)!==kn&&ni.current!==null||(zr=!0),(Ta&134217727)===0&&(rr&134217727)===0||cs===null||Aa(cs,kn,ii,!1)}function rh(e,s,i){var l=Vn;Vn|=2;var f=Zg(),m=Jg();(cs!==e||kn!==s)&&(_u=null,Pr(e,s)),s=!1;var v=Os;e:do try{if(Gn!==0&&vn!==null){var M=vn,U=oi;switch(Gn){case 8:ah(),v=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(s=!0);var fe=Gn;if(Gn=0,oi=null,Hr(e,M,U,fe),i&&zr){v=0;break e}break;default:fe=Gn,Gn=0,oi=null,Hr(e,M,U,fe)}}j2(),v=Os;break}catch(Te){Kg(e,Te)}while(!0);return s&&e.shellSuspendCounter++,Ji=Za=null,Vn=l,z.H=f,z.A=m,vn===null&&(cs=null,kn=0,$c()),v}function j2(){for(;vn!==null;)e0(vn)}function M2(e,s){var i=Vn;Vn|=2;var l=Zg(),f=Jg();cs!==e||kn!==s?(_u=null,pu=Ie()+500,Pr(e,s)):zr=Ut(e,s);e:do try{if(Gn!==0&&vn!==null){s=vn;var m=oi;t:switch(Gn){case 1:Gn=0,oi=null,Hr(e,s,m,1);break;case 2:case 9:if(u_(m)){Gn=0,oi=null,t0(s);break}s=function(){Gn!==2&&Gn!==9||cs!==e||(Gn=7),Ui(e)},m.then(s,s);break e;case 3:Gn=7;break e;case 4:Gn=5;break e;case 7:u_(m)?(Gn=0,oi=null,t0(s)):(Gn=0,oi=null,Hr(e,s,m,7));break;case 5:var v=null;switch(vn.tag){case 26:v=vn.memoizedState;case 5:case 27:var M=vn;if(v?P0(v):M.stateNode.complete){Gn=0,oi=null;var U=M.sibling;if(U!==null)vn=U;else{var fe=M.return;fe!==null?(vn=fe,xu(fe)):vn=null}break t}}Gn=0,oi=null,Hr(e,s,m,5);break;case 6:Gn=0,oi=null,Hr(e,s,m,6);break;case 8:ah(),Os=6;break e;default:throw Error(a(462))}}T2();break}catch(Te){Kg(e,Te)}while(!0);return Ji=Za=null,z.H=l,z.A=f,Vn=i,vn!==null?0:(cs=null,kn=0,$c(),Os)}function T2(){for(;vn!==null&&!qe();)e0(vn)}function e0(e){var s=kg(e.alternate,e,ca);e.memoizedProps=e.pendingProps,s===null?xu(e):vn=s}function t0(e){var s=e,i=s.alternate;switch(s.tag){case 15:case 0:s=yg(i,s,s.pendingProps,s.type,void 0,kn);break;case 11:s=yg(i,s,s.pendingProps,s.type.render,s.ref,kn);break;case 5:wf(s);default:jg(i,s),s=vn=Jp(s,ca),s=kg(i,s,ca)}e.memoizedProps=e.pendingProps,s===null?xu(e):vn=s}function Hr(e,s,i,l){Ji=Za=null,wf(s),Dr=null,wl=0;var f=s.return;try{if(_2(e,f,s,i,kn)){Os=1,au(e,ui(i,e.current)),vn=null;return}}catch(m){if(f!==null)throw vn=f,m;Os=1,au(e,ui(i,e.current)),vn=null;return}s.flags&32768?(Mn||l===1?e=!0:zr||(kn&536870912)!==0?e=!1:(Ma=e=!0,(l===2||l===9||l===3||l===6)&&(l=ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),n0(s,e)):xu(s)}function xu(e){var s=e;do{if((s.flags&32768)!==0){n0(s,Ma);return}e=s.return;var i=x2(s.alternate,s,ca);if(i!==null){vn=i;return}if(s=s.sibling,s!==null){vn=s;return}vn=s=e}while(s!==null);Os===0&&(Os=5)}function n0(e,s){do{var i=b2(e.alternate,e);if(i!==null){i.flags&=32767,vn=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!s&&(e=e.sibling,e!==null)){vn=e;return}vn=e=i}while(e!==null);Os=6,vn=null}function s0(e,s,i,l,f,m,v,M,U){e.cancelPendingCommit=null;do bu();while(Js!==0);if((Vn&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=qd,Wt(e,i,m,v,M,U),e===cs&&(vn=cs=null,kn=0),Ir=s,Da=e,ua=i,sh=m,oh=f,Yg=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,N2(Ye,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=_e.p,_e.p=2,v=Vn,Vn|=4;try{v2(e,s,i)}finally{Vn=v,_e.p=f,z.T=l}}Js=1,o0(),i0(),a0()}}function o0(){if(Js===1){Js=0;var e=Da,s=Ir,i=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||i){i=z.T,z.T=null;var l=_e.p;_e.p=2;var f=Vn;Vn|=4;try{$g(s,e);var m=xh,v=Dn(e.containerInfo),M=m.focusedElem,U=m.selectionRange;if(v!==M&&M&&M.ownerDocument&&ys(M.ownerDocument.documentElement,M)){if(U!==null&&Fn(M)){var fe=U.start,Te=U.end;if(Te===void 0&&(Te=fe),"selectionStart"in M)M.selectionStart=fe,M.selectionEnd=Math.min(Te,M.value.length);else{var $e=M.ownerDocument||document,me=$e&&$e.defaultView||window;if(me.getSelection){var ve=me.getSelection(),Ct=M.textContent.length,Kt=Math.min(U.start,Ct),os=U.end===void 0?Kt:Math.min(U.end,Ct);!ve.extend&&Kt>os&&(v=os,os=Kt,Kt=v);var ie=gs(M,Kt),Q=gs(M,os);if(ie&&Q&&(ve.rangeCount!==1||ve.anchorNode!==ie.node||ve.anchorOffset!==ie.offset||ve.focusNode!==Q.node||ve.focusOffset!==Q.offset)){var ue=$e.createRange();ue.setStart(ie.node,ie.offset),ve.removeAllRanges(),Kt>os?(ve.addRange(ue),ve.extend(Q.node,Q.offset)):(ue.setEnd(Q.node,Q.offset),ve.addRange(ue))}}}}for($e=[],ve=M;ve=ve.parentNode;)ve.nodeType===1&&$e.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<$e.length;M++){var Be=$e[M];Be.element.scrollLeft=Be.left,Be.element.scrollTop=Be.top}}Nu=!!yh,xh=yh=null}finally{Vn=f,_e.p=l,z.T=i}}e.current=s,Js=2}}function i0(){if(Js===2){Js=0;var e=Da,s=Ir,i=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||i){i=z.T,z.T=null;var l=_e.p;_e.p=2;var f=Vn;Vn|=4;try{Rg(e,s.alternate,s)}finally{Vn=f,_e.p=l,z.T=i}}Js=3}}function a0(){if(Js===4||Js===3){Js=0,Xe();var e=Da,s=Ir,i=ua,l=Yg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Js=5:(Js=0,Ir=Da=null,r0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ea=null),Jn(i),s=s.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ue,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=z.T,f=_e.p,_e.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<l.length;v++){var M=l[v];m(M.value,{componentStack:M.stack})}}finally{z.T=s,_e.p=f}}(ua&3)!==0&&bu(),Ui(e),f=e.pendingLanes,(i&261930)!==0&&(f&42)!==0?e===ih?Il++:(Il=0,ih=e):Il=0,Pl(0)}}function r0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,bl(s)))}function bu(){return o0(),i0(),a0(),l0()}function l0(){if(Js!==5)return!1;var e=Da,s=sh;sh=0;var i=Jn(ua),l=z.T,f=_e.p;try{_e.p=32>i?32:i,z.T=null,i=oh,oh=null;var m=Da,v=ua;if(Js=0,Ir=Da=null,ua=0,(Vn&6)!==0)throw Error(a(331));var M=Vn;if(Vn|=4,Ug(m.current),Pg(m,m.current,v,i),Vn=M,Pl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ue,m)}catch{}return!0}finally{_e.p=f,z.T=l,r0(e,s)}}function c0(e,s,i){s=ui(i,s),s=zf(e.stateNode,s,2),e=Sa(e,s,2),e!==null&&(at(e,2),Ui(e))}function Kn(e,s,i){if(e.tag===3)c0(e,e,i);else for(;s!==null;){if(s.tag===3){c0(s,e,i);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ea===null||!Ea.has(l))){e=ui(i,e),i=ug(2),l=Sa(s,i,2),l!==null&&(dg(i,l,s,e),at(l,2),Ui(l));break}}s=s.return}}function lh(e,s,i){var l=e.pingCache;if(l===null){l=e.pingCache=new k2;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(i)||(eh=!0,f.add(i),e=E2.bind(null,e,s,i),s.then(e,e))}function E2(e,s,i){var l=e.pingCache;l!==null&&l.delete(s),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,cs===e&&(kn&i)===i&&(Os===4||Os===3&&(kn&62914560)===kn&&300>Ie()-mu?(Vn&2)===0&&Pr(e,0):th|=i,$r===kn&&($r=0)),Ui(e)}function u0(e,s){s===0&&(s=Ht()),e=Ga(e,s),e!==null&&(at(e,s),Ui(e))}function D2(e){var s=e.memoizedState,i=0;s!==null&&(i=s.retryLane),u0(e,i)}function A2(e,s){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(i=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(s),u0(e,i)}function N2(e,s){return Ce(e,s)}var vu=null,Vr=null,ch=!1,wu=!1,uh=!1,Na=0;function Ui(e){e!==Vr&&e.next===null&&(Vr===null?vu=Vr=e:Vr=Vr.next=e),wu=!0,ch||(ch=!0,L2())}function Pl(e,s){if(!uh&&wu){uh=!0;do for(var i=!1,l=vu;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var v=l.suspendedLanes,M=l.pingedLanes;m=(1<<31-Nt(42|e)+1)-1,m&=f&~(v&~M),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(i=!0,m0(l,m))}else m=kn,m=Ke(l,l===cs?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ut(l,m)||(i=!0,m0(l,m));l=l.next}while(i);uh=!1}}function R2(){d0()}function d0(){wu=ch=!1;var e=0;Na!==0&&W2()&&(e=Na);for(var s=Ie(),i=null,l=vu;l!==null;){var f=l.next,m=f0(l,s);m===0?(l.next=null,i===null?vu=f:i.next=f,f===null&&(Vr=i)):(i=l,(e!==0||(m&3)!==0)&&(wu=!0)),l=f}Js!==0&&Js!==5||Pl(e),Na!==0&&(Na=0)}function f0(e,s){for(var i=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Nt(m),M=1<<v,U=f[v];U===-1?((M&i)===0||(M&l)!==0)&&(f[v]=Jt(M,s)):U<=s&&(e.expiredLanes|=M),m&=~M}if(s=cs,i=kn,i=Ke(e,e===s?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===s&&(Gn===2||Gn===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Me(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Ut(e,i)){if(s=i&-i,s===e.callbackPriority)return s;switch(l!==null&&Me(l),Jn(i)){case 2:case 8:i=Ve;break;case 32:i=Ye;break;case 268435456:i=Z;break;default:i=Ye}return l=h0.bind(null,e),i=Ce(i,l),e.callbackPriority=s,e.callbackNode=i,s}return l!==null&&l!==null&&Me(l),e.callbackPriority=2,e.callbackNode=null,2}function h0(e,s){if(Js!==0&&Js!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(bu()&&e.callbackNode!==i)return null;var l=kn;return l=Ke(e,e===cs?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(qg(e,l,s),f0(e,Ie()),e.callbackNode!=null&&e.callbackNode===i?h0.bind(null,e):null)}function m0(e,s){if(bu())return null;qg(e,s,!0)}function L2(){Y2(function(){(Vn&6)!==0?Ce(pt,R2):d0()})}function dh(){if(Na===0){var e=Mr;e===0&&(e=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Na=e}return Na}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Eo(""+e)}function _0(e,s){var i=s.ownerDocument.createElement("input");return i.name=s.name,i.value=s.value,e.id&&i.setAttribute("form",e.id),s.parentNode.insertBefore(i,s),e=new FormData(e),i.parentNode.removeChild(i),e}function B2(e,s,i,l,f){if(s==="submit"&&i&&i.stateNode===f){var m=p0((f[Wn]||null).action),v=l.submitter;v&&(s=(s=v[Wn]||null)?p0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var M=new Le("action","action",null,l,f);e.push({event:M,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Na!==0){var U=v?_0(f,v):new FormData(f);Af(i,{pending:!0,data:U,method:f.method,action:m},null,U)}}else typeof m=="function"&&(M.preventDefault(),U=v?_0(f,v):new FormData(f),Af(i,{pending:!0,data:U,method:f.method,action:m},m,U))},currentTarget:f}]})}}for(var fh=0;fh<Xd.length;fh++){var hh=Xd[fh],O2=hh.toLowerCase(),z2=hh[0].toUpperCase()+hh.slice(1);Mi(O2,"on"+z2)}Mi(ji,"onAnimationEnd"),Mi(Ii,"onAnimationIteration"),Mi(Oc,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Wd,"onTransitionRun"),Mi(Fd,"onTransitionStart"),Mi(Yd,"onTransitionCancel"),Mi(Kp,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function g0(e,s){s=(s&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],f=l.event;l=l.listeners;e:{var m=void 0;if(s)for(var v=l.length-1;0<=v;v--){var M=l[v],U=M.instance,fe=M.currentTarget;if(M=M.listener,U!==m&&f.isPropagationStopped())break e;m=M,f.currentTarget=fe;try{m(f)}catch(Te){zc(Te)}f.currentTarget=null,m=U}else for(v=0;v<l.length;v++){if(M=l[v],U=M.instance,fe=M.currentTarget,M=M.listener,U!==m&&f.isPropagationStopped())break e;m=M,f.currentTarget=fe;try{m(f)}catch(Te){zc(Te)}f.currentTarget=null,m=U}}}}function wn(e,s){var i=s[ws];i===void 0&&(i=s[ws]=new Set);var l=e+"__bubble";i.has(l)||(y0(s,e,2,!1),i.add(l))}function mh(e,s,i){var l=0;s&&(l|=4),y0(i,e,l,s)}var Su="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[Su]){e[Su]=!0,Qs.forEach(function(i){i!=="selectionchange"&&($2.has(i)||mh(i,!1,e),mh(i,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Su]||(s[Su]=!0,mh("selectionchange",!1,s))}}function y0(e,s,i,l){switch(X0(s)){case 2:var f=fv;break;case 8:f=hv;break;default:f=Dh}i=f.bind(null,s,i,e),f=void 0,!Xn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(s,i,{capture:!0,passive:f}):e.addEventListener(s,i,!0):f!==void 0?e.addEventListener(s,i,{passive:f}):e.addEventListener(s,i,!1)}function _h(e,s,i,l,f){var m=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var M=l.stateNode.containerInfo;if(M===f)break;if(v===4)for(v=l.return;v!==null;){var U=v.tag;if((U===3||U===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;M!==null;){if(v=Bn(M),v===null)return;if(U=v.tag,U===5||U===6||U===26||U===27){l=m=v;continue e}M=M.parentNode}}l=l.return}Ft(function(){var fe=m,Te=je(i),$e=[];e:{var me=Qp.get(e);if(me!==void 0){var ve=Le,Ct=e;switch(e){case"keypress":if(E(i)===0)break e;case"keydown":case"keyup":ve=Do;break;case"focusin":Ct="focus",ve=ks;break;case"focusout":Ct="blur",ve=ks;break;case"beforeblur":case"afterblur":ve=ks;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Gt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=ds;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=qa;break;case ji:case Ii:case Oc:ve=an;break;case Kp:ve=Ao;break;case"scroll":case"scrollend":ve=ut;break;case"wheel":ve=Pe;break;case"copy":case"cut":case"paste":ve=Cs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=vo;break;case"toggle":case"beforetoggle":ve=kt}var Kt=(s&4)!==0,os=!Kt&&(e==="scroll"||e==="scrollend"),ie=Kt?me!==null?me+"Capture":null:me;Kt=[];for(var Q=fe,ue;Q!==null;){var Be=Q;if(ue=Be.stateNode,Be=Be.tag,Be!==5&&Be!==26&&Be!==27||ue===null||ie===null||(Be=zt(Q,ie),Be!=null&&Kt.push(Vl(Q,Be,ue))),os)break;Q=Q.return}0<Kt.length&&(me=new ve(me,Ct,null,i,Te),$e.push({event:me,listeners:Kt}))}}if((s&7)===0){e:{if(me=e==="mouseover"||e==="pointerover",ve=e==="mouseout"||e==="pointerout",me&&i!==he&&(Ct=i.relatedTarget||i.fromElement)&&(Bn(Ct)||Ct[nt]))break e;if((ve||me)&&(me=Te.window===Te?Te:(me=Te.ownerDocument)?me.defaultView||me.parentWindow:window,ve?(Ct=i.relatedTarget||i.toElement,ve=fe,Ct=Ct?Bn(Ct):null,Ct!==null&&(os=u(Ct),Kt=Ct.tag,Ct!==os||Kt!==5&&Kt!==27&&Kt!==6)&&(Ct=null)):(ve=null,Ct=fe),ve!==Ct)){if(Kt=Gt,Be="onMouseLeave",ie="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(Kt=vo,Be="onPointerLeave",ie="onPointerEnter",Q="pointer"),os=ve==null?me:so(ve),ue=Ct==null?me:so(Ct),me=new Kt(Be,Q+"leave",ve,i,Te),me.target=os,me.relatedTarget=ue,Be=null,Bn(Te)===fe&&(Kt=new Kt(ie,Q+"enter",Ct,i,Te),Kt.target=ue,Kt.relatedTarget=os,Be=Kt),os=Be,ve&&Ct)t:{for(Kt=I2,ie=ve,Q=Ct,ue=0,Be=ie;Be;Be=Kt(Be))ue++;Be=0;for(var $t=Q;$t;$t=Kt($t))Be++;for(;0<ue-Be;)ie=Kt(ie),ue--;for(;0<Be-ue;)Q=Kt(Q),Be--;for(;ue--;){if(ie===Q||Q!==null&&ie===Q.alternate){Kt=ie;break t}ie=Kt(ie),Q=Kt(Q)}Kt=null}else Kt=null;ve!==null&&x0($e,me,ve,Kt,!1),Ct!==null&&os!==null&&x0($e,os,Ct,Kt,!0)}}e:{if(me=fe?so(fe):window,ve=me.nodeName&&me.nodeName.toLowerCase(),ve==="select"||ve==="input"&&me.type==="file")var In=O;else if(_l(me))if(F)In=rn;else{In=vt;var At=lt}else ve=me.nodeName,!ve||ve.toLowerCase()!=="input"||me.type!=="checkbox"&&me.type!=="radio"?fe&&Ds(fe.elementType)&&(In=O):In=Bt;if(In&&(In=In(e,fe))){gl($e,In,i,Te);break e}At&&At(e,me,fe),e==="focusout"&&fe&&me.type==="number"&&fe.memoizedProps.value!=null&&ro(me,"number",me.value)}switch(At=fe?so(fe):window,e){case"focusin":(_l(At)||At.contentEditable==="true")&&(tn=At,xs=fe,Ln=null);break;case"focusout":Ln=xs=tn=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,wo($e,i,Te);break;case"selectionchange":if(Zt)break;case"keydown":case"keyup":wo($e,i,Te)}var pn;if(Rt)e:{switch(e){case"compositionstart":var Cn="onCompositionStart";break e;case"compositionend":Cn="onCompositionEnd";break e;case"compositionupdate":Cn="onCompositionUpdate";break e}Cn=void 0}else No?Vo(e,i)&&(Cn="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Cn="onCompositionStart");Cn&&(gn&&i.locale!=="ko"&&(No||Cn!=="onCompositionStart"?Cn==="onCompositionEnd"&&No&&(pn=Vt()):(_n=Te,qn="value"in _n?_n.value:_n.textContent,No=!0)),At=ku(fe,Cn),0<At.length&&(Cn=new jt(Cn,e,null,i,Te),$e.push({event:Cn,listeners:At}),pn?Cn.data=pn:(pn=br(i),pn!==null&&(Cn.data=pn)))),(pn=$n?pl(e,i):Rc(e,i))&&(Cn=ku(fe,"onBeforeInput"),0<Cn.length&&(At=new jt("onBeforeInput","beforeinput",null,i,Te),$e.push({event:At,listeners:Cn}),At.data=pn)),B2($e,e,fe,i,Te)}g0($e,s)})}function Vl(e,s,i){return{instance:e,listener:s,currentTarget:i}}function ku(e,s){for(var i=s+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=zt(e,i),f!=null&&l.unshift(Vl(e,f,m)),f=zt(e,s),f!=null&&l.push(Vl(e,f,m))),e.tag===3)return l;e=e.return}return[]}function I2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,s,i,l,f){for(var m=s._reactName,v=[];i!==null&&i!==l;){var M=i,U=M.alternate,fe=M.stateNode;if(M=M.tag,U!==null&&U===l)break;M!==5&&M!==26&&M!==27||fe===null||(U=fe,f?(fe=zt(i,m),fe!=null&&v.unshift(Vl(i,fe,U))):f||(fe=zt(i,m),fe!=null&&v.push(Vl(i,fe,U)))),i=i.return}v.length!==0&&e.push({event:s,listeners:v})}var P2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(P2,`
`).replace(H2,"")}function v0(e,s){return s=b0(s),b0(e)===s}function ss(e,s,i,l,f,m){switch(i){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||Ss(e,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&Ss(e,""+l);break;case"className":Ts(e,"class",l);break;case"tabIndex":Ts(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ts(e,i,l);break;case"style":Po(e,l,m);break;case"data":if(s!=="object"){Ts(e,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Eo(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(i==="formAction"?(s!=="input"&&ss(e,s,"name",f.name,f,null),ss(e,s,"formEncType",f.formEncType,f,null),ss(e,s,"formMethod",f.formMethod,f,null),ss(e,s,"formTarget",f.formTarget,f,null)):(ss(e,s,"encType",f.encType,f,null),ss(e,s,"method",f.method,f,null),ss(e,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=Eo(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=J);break;case"onScroll":l!=null&&wn("scroll",e);break;case"onScrollEnd":l!=null&&wn("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=Eo(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":wn("beforetoggle",e),wn("toggle",e),fo(e,"popover",l);break;case"xlinkActuate":Vs(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vs(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vs(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vs(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vs(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vs(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vs(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fo(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=To.get(i)||i,fo(e,i,l))}}function gh(e,s,i,l,f,m){switch(i){case"style":Po(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"children":typeof l=="string"?Ss(e,l):(typeof l=="number"||typeof l=="bigint")&&Ss(e,""+l);break;case"onScroll":l!=null&&wn("scroll",e);break;case"onScrollEnd":l!=null&&wn("scrollend",e);break;case"onClick":l!=null&&(e.onclick=J);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(f=i.endsWith("Capture"),s=i.slice(2,f?i.length-7:void 0),m=e[Wn]||null,m=m!=null?m[i]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(s,l,f);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):fo(e,i,l)}}}function go(e,s,i){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wn("error",e),wn("load",e);var l=!1,f=!1,m;for(m in i)if(i.hasOwnProperty(m)){var v=i[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ss(e,s,m,v,i,null)}}f&&ss(e,s,"srcSet",i.srcSet,i,null),l&&ss(e,s,"src",i.src,i,null);return;case"input":wn("invalid",e);var M=m=v=f=null,U=null,fe=null;for(l in i)if(i.hasOwnProperty(l)){var Te=i[l];if(Te!=null)switch(l){case"name":f=Te;break;case"type":v=Te;break;case"checked":U=Te;break;case"defaultChecked":fe=Te;break;case"value":m=Te;break;case"defaultValue":M=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(a(137,s));break;default:ss(e,s,l,Te,i,null)}}En(e,m,M,U,fe,v,f,!1);return;case"select":wn("invalid",e),l=v=m=null;for(f in i)if(i.hasOwnProperty(f)&&(M=i[f],M!=null))switch(f){case"value":m=M;break;case"defaultValue":v=M;break;case"multiple":l=M;default:ss(e,s,f,M,i,null)}s=m,i=v,e.multiple=!!l,s!=null?ms(e,!!l,s,!1):i!=null&&ms(e,!!l,i,!0);return;case"textarea":wn("invalid",e),m=f=l=null;for(v in i)if(i.hasOwnProperty(v)&&(M=i[v],M!=null))switch(v){case"value":l=M;break;case"defaultValue":f=M;break;case"children":m=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(a(91));break;default:ss(e,s,v,M,i,null)}wi(e,l,f,m);return;case"option":for(U in i)if(i.hasOwnProperty(U)&&(l=i[U],l!=null))switch(U){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ss(e,s,U,l,i,null)}return;case"dialog":wn("beforetoggle",e),wn("toggle",e),wn("cancel",e),wn("close",e);break;case"iframe":case"object":wn("load",e);break;case"video":case"audio":for(l=0;l<Hl.length;l++)wn(Hl[l],e);break;case"image":wn("error",e),wn("load",e);break;case"details":wn("toggle",e);break;case"embed":case"source":case"link":wn("error",e),wn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in i)if(i.hasOwnProperty(fe)&&(l=i[fe],l!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:ss(e,s,fe,l,i,null)}return;default:if(Ds(s)){for(Te in i)i.hasOwnProperty(Te)&&(l=i[Te],l!==void 0&&gh(e,s,Te,l,i,void 0));return}}for(M in i)i.hasOwnProperty(M)&&(l=i[M],l!=null&&ss(e,s,M,l,i,null))}function V2(e,s,i,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,M=null,U=null,fe=null,Te=null;for(ve in i){var $e=i[ve];if(i.hasOwnProperty(ve)&&$e!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":U=$e;default:l.hasOwnProperty(ve)||ss(e,s,ve,null,l,$e)}}for(var me in l){var ve=l[me];if($e=i[me],l.hasOwnProperty(me)&&(ve!=null||$e!=null))switch(me){case"type":m=ve;break;case"name":f=ve;break;case"checked":fe=ve;break;case"defaultChecked":Te=ve;break;case"value":v=ve;break;case"defaultValue":M=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,s));break;default:ve!==$e&&ss(e,s,me,ve,l,$e)}}ho(e,v,M,U,fe,Te,m,f);return;case"select":ve=v=M=me=null;for(m in i)if(U=i[m],i.hasOwnProperty(m)&&U!=null)switch(m){case"value":break;case"multiple":ve=U;default:l.hasOwnProperty(m)||ss(e,s,m,null,l,U)}for(f in l)if(m=l[f],U=i[f],l.hasOwnProperty(f)&&(m!=null||U!=null))switch(f){case"value":me=m;break;case"defaultValue":M=m;break;case"multiple":v=m;default:m!==U&&ss(e,s,f,m,l,U)}s=M,i=v,l=ve,me!=null?ms(e,!!i,me,!1):!!l!=!!i&&(s!=null?ms(e,!!i,s,!0):ms(e,!!i,i?[]:"",!1));return;case"textarea":ve=me=null;for(M in i)if(f=i[M],i.hasOwnProperty(M)&&f!=null&&!l.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:ss(e,s,M,null,l,f)}for(v in l)if(f=l[v],m=i[v],l.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":me=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&ss(e,s,v,f,l,m)}es(e,me,ve);return;case"option":for(var Ct in i)if(me=i[Ct],i.hasOwnProperty(Ct)&&me!=null&&!l.hasOwnProperty(Ct))switch(Ct){case"selected":e.selected=!1;break;default:ss(e,s,Ct,null,l,me)}for(U in l)if(me=l[U],ve=i[U],l.hasOwnProperty(U)&&me!==ve&&(me!=null||ve!=null))switch(U){case"selected":e.selected=me&&typeof me!="function"&&typeof me!="symbol";break;default:ss(e,s,U,me,l,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in i)me=i[Kt],i.hasOwnProperty(Kt)&&me!=null&&!l.hasOwnProperty(Kt)&&ss(e,s,Kt,null,l,me);for(fe in l)if(me=l[fe],ve=i[fe],l.hasOwnProperty(fe)&&me!==ve&&(me!=null||ve!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,s));break;default:ss(e,s,fe,me,l,ve)}return;default:if(Ds(s)){for(var os in i)me=i[os],i.hasOwnProperty(os)&&me!==void 0&&!l.hasOwnProperty(os)&&gh(e,s,os,void 0,l,me);for(Te in l)me=l[Te],ve=i[Te],!l.hasOwnProperty(Te)||me===ve||me===void 0&&ve===void 0||gh(e,s,Te,me,l,ve);return}}for(var ie in i)me=i[ie],i.hasOwnProperty(ie)&&me!=null&&!l.hasOwnProperty(ie)&&ss(e,s,ie,null,l,me);for($e in l)me=l[$e],ve=i[$e],!l.hasOwnProperty($e)||me===ve||me==null&&ve==null||ss(e,s,$e,me,l,ve)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var f=i[l],m=f.transferSize,v=f.initiatorType,M=f.duration;if(m&&M&&w0(v)){for(v=0,M=f.responseEnd,l+=1;l<i.length;l++){var U=i[l],fe=U.startTime;if(fe>M)break;var Te=U.transferSize,$e=U.initiatorType;Te&&w0($e)&&(U=U.responseEnd,v+=Te*(U<M?1:(M-fe)/(U-fe)))}if(--l,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,xh=null;function Cu(e){return e.nodeType===9?e:e.ownerDocument}function S0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function bh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=null;function W2(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,Y2=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(X2)}:C0;function X2(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function M0(e,s){var i=s,l=0;do{var f=i.nextSibling;if(e.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(f),Yr(s);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Ul(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Ul(i);for(var m=i.firstChild;m;){var v=m.nextSibling,M=m.nodeName;m[Co]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&m.rel.toLowerCase()==="stylesheet"||i.removeChild(m),m=v}}else i==="body"&&Ul(e.ownerDocument.body);i=f}while(i);Yr(s)}function T0(e,s){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?s?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(s?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function wh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var i=s;switch(s=s.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":wh(i),co(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function q2(e,s,i,l){for(;e.nodeType===1;){var f=i;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Co])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function G2(e,s,i){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=pi(e.nextSibling),e===null))return null;return e}function E0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=pi(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$?"||e.data==="$~"}function kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function K2(e,s){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||i.readyState!=="loading")s();else{var l=function(){s(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function pi(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Ch=null;function D0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(s===0)return pi(e.nextSibling);s--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||s++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(s===0)return e;s--}else i!=="/$"&&i!=="/&"||s++}e=e.previousSibling}return null}function N0(e,s,i){switch(s=Cu(i),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ul(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);co(e)}var _i=new Map,R0=new Set;function ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=_e.d;_e.d={f:Q2,r:Z2,D:J2,C:ev,L:tv,m:nv,X:ov,S:sv,M:iv};function Q2(){var e=da.f(),s=gu();return e||s}function Z2(e){var s=no(e);s!==null&&s.tag===5&&s.type==="form"?K_(s):da.r(e)}var Ur=typeof document>"u"?null:document;function L0(e,s,i){var l=Ur;if(l&&typeof s=="string"&&s){var f=Hn(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof i=="string"&&(f+='[crossorigin="'+i+'"]'),R0.has(f)||(R0.add(f),e={rel:e,crossOrigin:i,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),go(s,"link",e),Nn(s),l.head.appendChild(s)))}}function J2(e){da.D(e),L0("dns-prefetch",e,null)}function ev(e,s){da.C(e,s),L0("preconnect",e,s)}function tv(e,s,i){da.L(e,s,i);var l=Ur;if(l&&e&&s){var f='link[rel="preload"][as="'+Hn(s)+'"]';s==="image"&&i&&i.imageSrcSet?(f+='[imagesrcset="'+Hn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(f+='[imagesizes="'+Hn(i.imageSizes)+'"]')):f+='[href="'+Hn(e)+'"]';var m=f;switch(s){case"style":m=Wr(e);break;case"script":m=Fr(e)}_i.has(m)||(e=x({rel:"preload",href:s==="image"&&i&&i.imageSrcSet?void 0:e,as:s},i),_i.set(m,e),l.querySelector(f)!==null||s==="style"&&l.querySelector(Wl(m))||s==="script"&&l.querySelector(Fl(m))||(s=l.createElement("link"),go(s,"link",e),Nn(s),l.head.appendChild(s)))}}function nv(e,s){da.m(e,s);var i=Ur;if(i&&e){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Hn(l)+'"][href="'+Hn(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Fr(e)}if(!_i.has(m)&&(e=x({rel:"modulepreload",href:e},s),_i.set(m,e),i.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Fl(m)))return}l=i.createElement("link"),go(l,"link",e),Nn(l),i.head.appendChild(l)}}}function sv(e,s,i){da.S(e,s,i);var l=Ur;if(l&&e){var f=oo(l).hoistableStyles,m=Wr(e);s=s||"default";var v=f.get(m);if(!v){var M={loading:0,preload:null};if(v=l.querySelector(Wl(m)))M.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},i),(i=_i.get(m))&&jh(e,i);var U=v=l.createElement("link");Nn(U),go(U,"link",e),U._p=new Promise(function(fe,Te){U.onload=fe,U.onerror=Te}),U.addEventListener("load",function(){M.loading|=1}),U.addEventListener("error",function(){M.loading|=2}),M.loading|=4,Mu(v,s,l)}v={type:"stylesheet",instance:v,count:1,state:M},f.set(m,v)}}}function ov(e,s){da.X(e,s);var i=Ur;if(i&&e){var l=oo(i).hoistableScripts,f=Fr(e),m=l.get(f);m||(m=i.querySelector(Fl(f)),m||(e=x({src:e,async:!0},s),(s=_i.get(f))&&Mh(e,s),m=i.createElement("script"),Nn(m),go(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function iv(e,s){da.M(e,s);var i=Ur;if(i&&e){var l=oo(i).hoistableScripts,f=Fr(e),m=l.get(f);m||(m=i.querySelector(Fl(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=_i.get(f))&&Mh(e,s),m=i.createElement("script"),Nn(m),go(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function B0(e,s,i,l){var f=(f=Ae.current)?ju(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(s=Wr(i.href),i=oo(f).hoistableStyles,l=i.get(s),l||(l={type:"style",instance:null,count:0,state:null},i.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Wr(i.href);var m=oo(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Wl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),_i.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},_i.set(e,i),m||av(f,e,i,v.state))),s&&l===null)throw Error(a(528,""));return v}if(s&&l!==null)throw Error(a(529,""));return null;case"script":return s=i.async,i=i.src,typeof i=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Fr(i),i=oo(f).hoistableScripts,l=i.get(s),l||(l={type:"script",instance:null,count:0,state:null},i.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Wr(e){return'href="'+Hn(e)+'"'}function Wl(e){return'link[rel="stylesheet"]['+e+"]"}function O0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function av(e,s,i,l){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=e.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),go(s,"link",i),Nn(s),e.head.appendChild(s))}function Fr(e){return'[src="'+Hn(e)+'"]'}function Fl(e){return"script[async]"+e}function z0(e,s,i){if(s.count++,s.instance===null)switch(s.type){case"style":var l=e.querySelector('style[data-href~="'+Hn(i.href)+'"]');if(l)return s.instance=l,Nn(l),l;var f=x({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Nn(l),go(l,"style",f),Mu(l,i.precedence,e),s.instance=l;case"stylesheet":f=Wr(i.href);var m=e.querySelector(Wl(f));if(m)return s.state.loading|=4,s.instance=m,Nn(m),m;l=O0(i),(f=_i.get(f))&&jh(l,f),m=(e.ownerDocument||e).createElement("link"),Nn(m);var v=m;return v._p=new Promise(function(M,U){v.onload=M,v.onerror=U}),go(m,"link",l),s.state.loading|=4,Mu(m,i.precedence,e),s.instance=m;case"script":return m=Fr(i.src),(f=e.querySelector(Fl(m)))?(s.instance=f,Nn(f),f):(l=i,(f=_i.get(m))&&(l=x({},i),Mh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),Nn(f),go(f,"link",l),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,Mu(l,i.precedence,e));return s.instance}function Mu(e,s,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,v=0;v<l.length;v++){var M=l[v];if(M.dataset.precedence===s)m=M;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=i.nodeType===9?i.head:i,s.insertBefore(e,s.firstChild))}function jh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Mh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Tu=null;function $0(e,s,i){if(Tu===null){var l=new Map,f=Tu=new Map;f.set(i,l)}else f=Tu,l=f.get(i),l||(l=new Map,f.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),f=0;f<i.length;f++){var m=i[f];if(!(m[Co]||m[xn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var M=l.get(v);M?M.push(m):l.set(v,[m])}}return l}function I0(e,s,i){e=e.ownerDocument||e,e.head.insertBefore(i,s==="title"?e.querySelector("head > title"):null)}function rv(e,s,i){if(i===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lv(e,s,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Wr(l.href),m=s.querySelector(Wl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Eu.bind(e),s.then(e,e)),i.state.loading|=4,i.instance=m,Nn(m);return}m=s.ownerDocument||s,l=O0(l),(f=_i.get(f))&&jh(l,f),m=m.createElement("link"),Nn(m);var v=m;v._p=new Promise(function(M,U){v.onload=M,v.onerror=U}),go(m,"link",l),i.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,s),(s=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Eu.bind(e),s.addEventListener("load",i),s.addEventListener("error",i))}}var Th=0;function cv(e,s){return e.stylesheets&&e.count===0&&Au(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&Au(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&Th===0&&(Th=62500*U2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Au(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Th?50:800)+s);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Du=null;function Au(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Du=new Map,s.forEach(uv,e),Du=null,Eu.call(e))}function uv(e,s){if(!(s.state.loading&4)){var i=Du.get(e);if(i)var l=i.get(null);else{i=new Map,Du.set(e,i);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),l=v)}l&&i.set(null,l)}f=s.instance,v=f.getAttribute("data-precedence"),m=i.get(v)||l,m===l&&i.set(null,f),i.set(v,f),this.count++,l=Eu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Yl={$$typeof:A,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function dv(e,s,i,l,f,m,v,M,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=An(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.hiddenUpdates=An(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function H0(e,s,i,l,f,m,v,M,U,fe,Te,$e){return e=new dv(e,s,i,v,U,fe,Te,$e,M),s=1,m===!0&&(s|=24),m=ti(3,null,null,s),e.current=m,m.stateNode=e,s=rf(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:l,isDehydrated:i,cache:s},df(m),e}function V0(e){return e?(e=wr,e):wr}function U0(e,s,i,l,f,m){f=V0(f),l.context===null?l.context=f:l.pendingContext=f,l=wa(s),l.payload={element:i},m=m===void 0?null:m,m!==null&&(l.callback=m),i=Sa(e,l,s),i!==null&&(Xo(i,e,s),kl(i,e,s))}function W0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<s?i:s}}function Eh(e,s){W0(e,s),(e=e.alternate)&&W0(e,s)}function F0(e){if(e.tag===13||e.tag===31){var s=Ga(e,67108864);s!==null&&Xo(s,e,67108864),Eh(e,67108864)}}function Y0(e){if(e.tag===13||e.tag===31){var s=ai();s=Ms(s);var i=Ga(e,s);i!==null&&Xo(i,e,s),Eh(e,s)}}var Nu=!0;function fv(e,s,i,l){var f=z.T;z.T=null;var m=_e.p;try{_e.p=2,Dh(e,s,i,l)}finally{_e.p=m,z.T=f}}function hv(e,s,i,l){var f=z.T;z.T=null;var m=_e.p;try{_e.p=8,Dh(e,s,i,l)}finally{_e.p=m,z.T=f}}function Dh(e,s,i,l){if(Nu){var f=Ah(l);if(f===null)_h(e,s,l,Ru,i),q0(e,l);else if(pv(f,e,s,i,l))l.stopPropagation();else if(q0(e,l),s&4&&-1<mv.indexOf(e)){for(;f!==null;){var m=no(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Qt(m.pendingLanes);if(v!==0){var M=m;for(M.pendingLanes|=2,M.entangledLanes|=2;v;){var U=1<<31-Nt(v);M.entanglements[1]|=U,v&=~U}Ui(m),(Vn&6)===0&&(pu=Ie()+500,Pl(0))}}break;case 31:case 13:M=Ga(m,2),M!==null&&Xo(M,m,2),gu(),Eh(m,2)}if(m=Ah(l),m===null&&_h(e,s,l,Ru,i),m===f)break;f=m}f!==null&&l.stopPropagation()}else _h(e,s,l,null,i)}}function Ah(e){return e=je(e),Nh(e)}var Ru=null;function Nh(e){if(Ru=null,e=Bn(e),e!==null){var s=u(e);if(s===null)e=null;else{var i=s.tag;if(i===13){if(e=d(s),e!==null)return e;e=null}else if(i===31){if(e=h(s),e!==null)return e;e=null}else if(i===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Ru=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ct()){case pt:return 2;case Ve:return 8;case Ye:case I:return 32;case Z:return 268435456;default:return 32}default:return 32}}var Rh=!1,La=null,Ba=null,Oa=null,Xl=new Map,ql=new Map,za=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,s){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(s.pointerId)}}function Gl(e,s,i,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:i,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},s!==null&&(s=no(s),s!==null&&F0(s)),e):(e.eventSystemFlags|=l,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function pv(e,s,i,l,f){switch(s){case"focusin":return La=Gl(La,e,s,i,l,f),!0;case"dragenter":return Ba=Gl(Ba,e,s,i,l,f),!0;case"mouseover":return Oa=Gl(Oa,e,s,i,l,f),!0;case"pointerover":var m=f.pointerId;return Xl.set(m,Gl(Xl.get(m)||null,e,s,i,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ql.set(m,Gl(ql.get(m)||null,e,s,i,l,f)),!0}return!1}function G0(e){var s=Bn(e.target);if(s!==null){var i=u(s);if(i!==null){if(s=i.tag,s===13){if(s=d(i),s!==null){e.blockedOn=s,mn(e.priority,function(){Y0(i)});return}}else if(s===31){if(s=h(i),s!==null){e.blockedOn=s,mn(e.priority,function(){Y0(i)});return}}else if(s===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var i=Ah(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);he=l,i.target.dispatchEvent(l),he=null}else return s=no(i),s!==null&&F0(s),e.blockedOn=i,!1;s.shift()}return!0}function K0(e,s,i){Lu(e)&&i.delete(s)}function _v(){Rh=!1,La!==null&&Lu(La)&&(La=null),Ba!==null&&Lu(Ba)&&(Ba=null),Oa!==null&&Lu(Oa)&&(Oa=null),Xl.forEach(K0),ql.forEach(K0)}function Bu(e,s){e.blockedOn===s&&(e.blockedOn=null,Rh||(Rh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,_v)))}var Ou=null;function Q0(e){Ou!==e&&(Ou=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Ou===e&&(Ou=null);for(var s=0;s<e.length;s+=3){var i=e[s],l=e[s+1],f=e[s+2];if(typeof l!="function"){if(Nh(l||i)===null)continue;break}var m=no(i);m!==null&&(e.splice(s,3),s-=3,Af(m,{pending:!0,data:f,method:i.method,action:l},l,f))}}))}function Yr(e){function s(U){return Bu(U,e)}La!==null&&Bu(La,e),Ba!==null&&Bu(Ba,e),Oa!==null&&Bu(Oa,e),Xl.forEach(s),ql.forEach(s);for(var i=0;i<za.length;i++){var l=za[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<za.length&&(i=za[0],i.blockedOn===null);)G0(i),i.blockedOn===null&&za.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var f=i[l],m=i[l+1],v=f[Wn]||null;if(typeof m=="function")v||Q0(i);else if(v){var M=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Wn]||null)M=v.formAction;else if(Nh(f)!==null)continue}else M=v.action;typeof M=="function"?i[l+1]=M:(i.splice(l,3),l-=3),Q0(i)}}}function Z0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Lh(e){this._internalRoot=e}zu.prototype.render=Lh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var i=s.current,l=ai();U0(i,l,e,s,null,null)},zu.prototype.unmount=Lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;U0(e.current,2,null,e,null,null),gu(),s[nt]=null}};function zu(e){this._internalRoot=e}zu.prototype.unstable_scheduleHydration=function(e){if(e){var s=rs();e={blockedOn:null,target:e,priority:s};for(var i=0;i<za.length&&s!==0&&s<za[i].priority;i++);za.splice(i,0,e),i===0&&G0(e)}};var J0=n.version;if(J0!=="19.2.4")throw Error(a(527,J0,"19.2.4"));_e.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var gv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Ue=$u.inject(gv),We=$u}catch{}}return Ql.createRoot=function(e,s){if(!c(e))throw Error(a(299));var i=!1,l="",f=ag,m=rg,v=lg;return s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=H0(e,1,!1,null,null,i,l,null,f,m,v,Z0),e[nt]=s.current,ph(e),new Lh(s)},Ql.hydrateRoot=function(e,s,i){if(!c(e))throw Error(a(299));var l=!1,f="",m=ag,v=rg,M=lg,U=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.formState!==void 0&&(U=i.formState)),s=H0(e,1,!0,s,i!=null?i:null,l,f,U,m,v,M,Z0),s.context=V0(null),i=s.current,l=ai(),l=Ms(l),f=wa(l),f.callback=null,Sa(i,f,l),i=l,s.current.lanes=i,at(s,i),Ui(s),e[nt]=s.current,ph(e),new zu(s)},Ql.version="19.2.4",Ql}var cy;function jv(){if(cy)return Oh.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Oh.exports=Cv(),Oh.exports}var Mv=jv();const Tv=Mx(Mv);var y=dp();const Ev=Mx(y);function Dv(t,n,o,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?a:o==="a"?a.call(t):a?a.value:n.get(t)}function Av(t,n,o,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,o),o}var dd;const xi="__TAURI_TO_IPC_KEY__";function Nv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function xe(t,n={},o){return window.__TAURI_INTERNALS__.invoke(t,n,o)}class Rv{get rid(){return Dv(this,dd,"f")}constructor(n){dd.set(this,void 0),Av(this,dd,n)}async close(){return xe("plugin:resources|close",{rid:this.rid})}}dd=new WeakMap;var ri;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(ri||(ri={}));async function Ex(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await xe("plugin:event|unlisten",{event:t,eventId:n})}async function uc(t,n,o){var a;const c=typeof(o==null?void 0:o.target)=="string"?{kind:"AnyLabel",label:o.target}:(a=o==null?void 0:o.target)!==null&&a!==void 0?a:{kind:"Any"};return xe("plugin:event|listen",{event:t,target:c,handler:Nv(n)}).then(u=>async()=>Ex(t,u))}async function Lv(t,n,o){return uc(t,a=>{Ex(t,a.id),n(a)},o)}async function Bv(t,n){await xe("plugin:event|emit",{event:t,payload:n})}async function Ov(t,n,o){await xe("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:o})}class Dx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new dc(this.width*n,this.height*n)}[xi](){return{width:this.width,height:this.height}}toJSON(){return this[xi]()}}class dc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new Dx(this.width/n,this.height/n)}[xi](){return{width:this.width,height:this.height}}toJSON(){return this[xi]()}}class Xr{constructor(n){this.size=n}toLogical(n){return this.size instanceof Dx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof dc?this.size:this.size.toPhysical(n)}[xi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[xi]()}}class Ax{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ua(this.x*n,this.y*n)}[xi](){return{x:this.x,y:this.y}}toJSON(){return this[xi]()}}class Ua{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Ax(this.x/n,this.y/n)}[xi](){return{x:this.x,y:this.y}}toJSON(){return this[xi]()}}class Iu{constructor(n){this.position=n}toLogical(n){return this.position instanceof Ax?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ua?this.position:this.position.toPhysical(n)}[xi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[xi]()}}class fc extends Rv{constructor(n){super(n)}static async new(n,o,a){return xe("plugin:image|new",{rgba:vd(n),width:o,height:a}).then(c=>new fc(c))}static async fromBytes(n){return xe("plugin:image|from_bytes",{bytes:vd(n)}).then(o=>new fc(o))}static async fromPath(n){return xe("plugin:image|from_path",{path:n}).then(o=>new fc(o))}async rgba(){return xe("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return xe("plugin:image|size",{rid:this.rid})}}function vd(t){return t==null?null:typeof t=="string"?t:t instanceof fc?t.rid:t}var jm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(jm||(jm={}));class zv{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var uy;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(uy||(uy={}));function Mm(){return new Nx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Hh(){return xe("plugin:window|get_all_windows").then(t=>t.map(n=>new Nx(n,{skip:!0})))}const Vh=["tauri://created","tauri://error"];class Nx{constructor(n,o={}){var a;this.label=n,this.listeners=Object.create(null),o!=null&&o.skip||xe("plugin:window|create",{options:{...o,parent:typeof o.parent=="string"?o.parent:(a=o.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var o;return(o=(await Hh()).find(a=>a.label===n))!==null&&o!==void 0?o:null}static getCurrent(){return Mm()}static async getAll(){return Hh()}static async getFocusedWindow(){for(const n of await Hh())if(await n.isFocused())return n;return null}async listen(n,o){return this._handleTauriEvent(n,o)?()=>{const a=this.listeners[n];a.splice(a.indexOf(o),1)}:uc(n,o,{target:{kind:"Window",label:this.label}})}async once(n,o){return this._handleTauriEvent(n,o)?()=>{const a=this.listeners[n];a.splice(a.indexOf(o),1)}:Lv(n,o,{target:{kind:"Window",label:this.label}})}async emit(n,o){if(Vh.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:o});return}return Bv(n,o)}async emitTo(n,o,a){if(Vh.includes(o)){for(const c of this.listeners[o]||[])c({event:o,id:-1,payload:a});return}return Ov(n,o,a)}_handleTauriEvent(n,o){return Vh.includes(n)?(n in this.listeners?this.listeners[n].push(o):this.listeners[n]=[o],!0):!1}async scaleFactor(){return xe("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return xe("plugin:window|inner_position",{label:this.label}).then(n=>new Ua(n))}async outerPosition(){return xe("plugin:window|outer_position",{label:this.label}).then(n=>new Ua(n))}async innerSize(){return xe("plugin:window|inner_size",{label:this.label}).then(n=>new dc(n))}async outerSize(){return xe("plugin:window|outer_size",{label:this.label}).then(n=>new dc(n))}async isFullscreen(){return xe("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return xe("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return xe("plugin:window|is_maximized",{label:this.label})}async isFocused(){return xe("plugin:window|is_focused",{label:this.label})}async isDecorated(){return xe("plugin:window|is_decorated",{label:this.label})}async isResizable(){return xe("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return xe("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return xe("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return xe("plugin:window|is_closable",{label:this.label})}async isVisible(){return xe("plugin:window|is_visible",{label:this.label})}async title(){return xe("plugin:window|title",{label:this.label})}async theme(){return xe("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return xe("plugin:window|is_always_on_top",{label:this.label})}async center(){return xe("plugin:window|center",{label:this.label})}async requestUserAttention(n){let o=null;return n&&(n===jm.Critical?o={type:"Critical"}:o={type:"Informational"}),xe("plugin:window|request_user_attention",{label:this.label,value:o})}async setResizable(n){return xe("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return xe("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return xe("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return xe("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return xe("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return xe("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return xe("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return xe("plugin:window|maximize",{label:this.label})}async unmaximize(){return xe("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return xe("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return xe("plugin:window|minimize",{label:this.label})}async unminimize(){return xe("plugin:window|unminimize",{label:this.label})}async show(){return xe("plugin:window|show",{label:this.label})}async hide(){return xe("plugin:window|hide",{label:this.label})}async close(){return xe("plugin:window|close",{label:this.label})}async destroy(){return xe("plugin:window|destroy",{label:this.label})}async setDecorations(n){return xe("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return xe("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return xe("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return xe("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return xe("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return xe("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return xe("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return xe("plugin:window|set_size",{label:this.label,value:n instanceof Xr?n:new Xr(n)})}async setMinSize(n){return xe("plugin:window|set_min_size",{label:this.label,value:n instanceof Xr?n:n?new Xr(n):null})}async setMaxSize(n){return xe("plugin:window|set_max_size",{label:this.label,value:n instanceof Xr?n:n?new Xr(n):null})}async setSizeConstraints(n){function o(a){return a?{Logical:a}:null}return xe("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:o(n==null?void 0:n.minWidth),minHeight:o(n==null?void 0:n.minHeight),maxWidth:o(n==null?void 0:n.maxWidth),maxHeight:o(n==null?void 0:n.maxHeight)}})}async setPosition(n){return xe("plugin:window|set_position",{label:this.label,value:n instanceof Iu?n:new Iu(n)})}async setFullscreen(n){return xe("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return xe("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return xe("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return xe("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return xe("plugin:window|set_icon",{label:this.label,value:vd(n)})}async setSkipTaskbar(n){return xe("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return xe("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return xe("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return xe("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return xe("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return xe("plugin:window|set_cursor_position",{label:this.label,value:n instanceof Iu?n:new Iu(n)})}async setIgnoreCursorEvents(n){return xe("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return xe("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return xe("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return xe("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return xe("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return xe("plugin:window|set_overlay_icon",{label:this.label,value:n?vd(n):void 0})}async setProgressBar(n){return xe("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return xe("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return xe("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return xe("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(ri.WINDOW_RESIZED,o=>{o.payload=new dc(o.payload),n(o)})}async onMoved(n){return this.listen(ri.WINDOW_MOVED,o=>{o.payload=new Ua(o.payload),n(o)})}async onCloseRequested(n){return this.listen(ri.WINDOW_CLOSE_REQUESTED,async o=>{const a=new zv(o);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const o=await this.listen(ri.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ua(d.payload.position)}})}),a=await this.listen(ri.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ua(d.payload.position)}})}),c=await this.listen(ri.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ua(d.payload.position)}})}),u=await this.listen(ri.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{o(),c(),a(),u()}}async onFocusChanged(n){const o=await this.listen(ri.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(ri.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{o(),a()}}async onScaleChanged(n){return this.listen(ri.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(ri.WINDOW_THEME_CHANGED,n)}}var dy;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(dy||(dy={}));var fy;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(fy||(fy={}));var hy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(hy||(hy={}));var my;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(my||(my={}));function $v({laneX:t,tipY:n,mergeX:o,mergeY:a,cornerR:c,pointFormatter:u}){if(Math.abs(a-n)<.5)return`M ${u(t,n)} L ${u(o,a)}`;const d=o>=t?1:-1,h=Math.max(0,Math.min(c,Math.abs(a-n),Math.abs(o-t)));if(h<.5)return[`M ${u(t,n)}`,`L ${u(t,a)}`,`L ${u(o,a)}`].join(" ");const p=a-Math.sign(a-n)*h,g=t+d*h;return[`M ${u(t,n)}`,`L ${u(t,p)}`,`Q ${u(t,a)} ${u(g,a)}`,`L ${u(o,a)}`].join(" ")}const Iv=3.7,Pu=200,Tm=240,Es=540,yo=176,Uh=32,Cc=20,Pv=Tm/2,Zl=Es+Pv,qr=18,Gr=18,Wh="#E6E6E6";function py(t){var n,o;return{start:new Date((o=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?o:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function tl(t,n){return{id:n.fullSha,branchName:t,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,kind:n.kind}}function fa(t){var n,o;return(o=(n=t.id)!=null?n:t.fullSha)!=null?o:""}function Hu(t,n){const o=new Date(t.date).getTime()-new Date(n.date).getTime();return o!==0?o:fa(t).localeCompare(fa(n))}function wd(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[fa(b),b])),o=new Map,a=new Map;t.forEach(b=>o.set(fa(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=fa(b);o.set(S,((p=o.get(S))!=null?p:0)+1);const C=(g=a.get(w))!=null?g:[];C.push(b),a.set(w,C)}for(const b of a.values())b.sort(Hu);const c=t.filter(b=>{var w;return((w=o.get(fa(b)))!=null?w:0)===0}).sort(Hu),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=fa(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const C=fa(S),k=((x=o.get(C))!=null?x:0)-1;o.set(C,k),k===0&&c.push(S)}c.sort(Hu)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(fa(b))).sort(Hu)]}function Rx(t,n){var o;return wd(((o=n[t])!=null?o:[]).filter(a=>a.kind!=="branch-created"))}function Lx(t,n,o){return Rx(t,o)}function Hv(t,n,o){const a=t.parentBranch;return!a||a===t.name||!n.has(a)?null:a===o?o:a}function Fh(t){var n;return t.length===0?null:(n=[...t].sort((o,a)=>new Date(a.date).getTime()-new Date(o.date).getTime())[0])!=null?n:null}function Vv(t,n){var u,d;if(!n||t.length===0)return Fh(t);const o=new Date(n).getTime();if(!Number.isFinite(o))return Fh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=o){const g=o-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-o;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Fh(t)}function Vu(t,n,o){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(o){const d=a.find(h=>h.commit.branchName===o);if(d)return d}return(u=a[0])!=null?u:null}function Uv(t,n,o){var _,x,b,w,S,C,k;const a=Lx(t,o,n);if(a.length===0)return null;const c=a.map(j=>tl(t,j)),u=new Set(c.map(j=>j.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(j=>j.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(j=>h&&j.id===h||d&&j.id===d?!0:!j.parentSha||!u.has(j.parentSha));return g||((k=(C=Vv(c,p!=null?p:void 0))!=null?C:c[0])!=null?k:null)}function Em(t,n,o){var c,u,d,h,p;if(t.name===n)return null;const a=Rx(t.name,o);if(a.length>0){const g=a.map(b=>tl(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function Bx(t,n,o={}){var X,q,ne,le;const c=new Map(t.map(G=>[G.name,G])),u=new Map,d=(G,te)=>{var be;return te?((be=o[G])!=null?be:[]).some(z=>z.fullSha===te||z.sha===te||z.fullSha.startsWith(te)||te.startsWith(z.fullSha)||z.sha.startsWith(te)||te.startsWith(z.sha)):!1},h=new Map;for(const G of t){const de=((X=o[G.name])!=null?X:[]).filter(be=>be.kind!=="branch-created").map(be=>new Date(be.date).getTime()).filter(be=>Number.isFinite(be)).sort((be,z)=>be-z)[0];de!=null&&h.set(G.name,de)}const p=G=>{const te=h.get(G.name);return te!=null?te:py(G).start},g=G=>{const te=Hv(G,c,n),de=Em(G,n,o);return te&&te!==n?!de||d(te,de)?te:n:!te&&!de?null:te!=null?te:n};for(const G of t){if(G.name===n)continue;const te=(q=g(G))!=null?q:n,de=(ne=u.get(te))!=null?ne:[];de.push(G),u.set(te,de)}for(const G of u.values())G.sort((te,de)=>p(te)-p(de)||te.name.localeCompare(de.name));const _=new Map,x=[],b=new Map,w=new Map;for(const G of Object.values(o))for(const te of G){const de=new Date(te.date).getTime();Number.isFinite(de)&&(te.fullSha&&w.set(te.fullSha,de),te.sha&&w.set(te.sha,de))}const S=(G,te)=>({start:Math.min(G,te),end:Math.max(G,te)}),C=G=>{var L,H;const te=S(p(G),py(G).end),de=[te],be=te.start,z=Em(G,n,o),_e=z?w.get(z):void 0,K=new Date((H=(L=G.divergedFromDate)!=null?L:G.createdDate)!=null?H:G.lastCommitDate).getTime(),we=Number.isFinite(_e!=null?_e:NaN)?_e:Number.isFinite(K)?K:null;if(we==null)return de;const Ee=S(we,be);return Ee.start!==Ee.end&&de.push(Ee),de},k=Math.max(1,360*60*1e3*Iv),j=(G,te)=>!(G.start-te.end>=k||te.start-G.end>=k),N=(G,te)=>te.some(de=>{var be;return((be=b.get(G))!=null?be:[]).some(z=>j(de,z))}),A=G=>{var L,H;const te=_.get(G);if(te)return te.column;const de=c.get(G);if(!de)return 0;if(G===n){const B={name:G,column:0,parentName:null};_.set(G,B),x.push(B);const oe=C(de);return b.set(0,[...(L=b.get(0))!=null?L:[],...oe]),0}const be=g(de),z=be?A(be):0,_e=be?z+1:1,K=C(de);let we=_e;for(;N(we,K);)we+=1;const Ee={name:G,column:we,parentName:be};return _.set(G,Ee),x.push(Ee),b.set(we,[...(H=b.get(we))!=null?H:[],...K]),we};A(n);const T=t.filter(G=>!_.has(G.name)).sort((G,te)=>p(G)-p(te)||G.name.localeCompare(te.name)),$=T.filter(G=>g(G)!=null),W=T.filter(G=>g(G)==null);for(const G of $)A(G.name);let P=Math.max(0,...x.map(G=>G.column))+1+1;for(const G of W){const te=C(G);let de=P;for(;N(de,te);)de+=1;const be={name:G.name,column:de,parentName:null};_.set(G.name,be),x.push(be),b.set(de,[...(le=b.get(de))!=null?le:[],...te]),P=de+1}return x.sort((G,te)=>G.column-te.column||G.name.localeCompare(te.name))}const Uu=2.25,Ia=0,_y=0,Wv=1800*1e3,Fv=1440*60*1e3;function gy(t,n,o=new Map){var q,ne,le,G,te,de,be,z,_e,K,we,Ee,L;if(t.length===0)return new Map;const a=(H,B)=>!H||!B?!1:H===B||H.startsWith(B)||B.startsWith(H),c=wd(t),u=new Map;for(const H of t){const B=(q=H.parentSha)!=null?q:null;if(B){const oe=(ne=u.get(B))!=null?ne:new Set;oe.add(H.id),u.set(B,oe)}for(const oe of(le=o.get(H.id))!=null?le:[]){if(!oe)continue;const ze=(G=u.get(oe))!=null?G:new Set;ze.add(H.id),u.set(oe,ze)}}const d=new Map,h=new Map,p=new Map,g=new Set,_=new Map,x=new Map,b=new Map,w=new Map;for(const H of t){const B=(te=_.get(H.branchName))!=null?te:new Set;B.add(H.id),_.set(H.branchName,B);const oe=(be=(de=n.get(H.branchName))==null?void 0:de.column)!=null?be:0,ze=(z=x.get(H.id))!=null?z:new Set;ze.add(oe),x.set(H.id,ze);const Ae=new Set;H.parentSha&&Ae.add(H.parentSha),b.set(H.visualId,Ae);const Oe=new Set(Ae);for(const Ze of(_e=o.get(H.id))!=null?_e:[])Ze&&Oe.add(Ze);w.set(H.visualId,Oe)}const S=new Set(Array.from(x.keys())),C=Array.from(S),k=new Map,j=H=>{const B=[];for(const oe of C)a(oe,H)&&B.push(oe);return B},N=new Map;for(const H of C)N.set(H,new Set);for(const H of t){const B=j(H.id);if(B.length===0)continue;const oe=(K=w.get(H.visualId))!=null?K:new Set,ze=new Set;for(const Ae of oe)for(const Oe of j(Ae))ze.add(Oe);for(const Ae of B){const Oe=(we=N.get(Ae))!=null?we:new Set;for(const Ze of ze)Oe.add(Ze);N.set(Ae,Oe)}}const A=new Map,T=(H,B=new Set)=>{var Oe;const oe=A.get(H);if(oe)return oe;if(B.has(H))return new Set;B.add(H);const ze=(Oe=N.get(H))!=null?Oe:new Set,Ae=new Set;for(const Ze of ze){Ae.add(Ze);for(const Je of T(Ze,B))Ae.add(Je)}return B.delete(H),A.set(H,Ae),Ae},$=(H,B)=>{if(a(H,B))return!0;const oe=j(H),ze=j(B);for(const Ae of oe){const Oe=T(Ae);for(const Ze of ze)if(Oe.has(Ze))return!0}for(const Ae of ze){const Oe=T(Ae);for(const Ze of oe)if(Oe.has(Ze))return!0}return!1};let W=1;const P=(H,B)=>{var ae,ce,Ce,Me,qe,Xe,Ie,ct,pt;const oe=(ce=(ae=n.get(H.branchName))==null?void 0:ae.column)!=null?ce:0,ze=(Ce=_.get(H.branchName))!=null?Ce:new Set,Oe=!(!!H.parentSha&&ze.has(H.parentSha))&&H.parentSha?H.parentSha:null,Ze=Array.from(B).flatMap(Ve=>j(Ve).flatMap(Ye=>{var I;return(I=k.get(Ye))!=null?I:[]})),Je=Ze.length>0?Math.max(...Ze)+1:1,Xt=(Me=u.get(H.id))!=null?Me:new Set,Dt=Array.from(Xt).flatMap(Ve=>{var Ye;return Array.from((Ye=x.get(Ve))!=null?Ye:[])}).some(Ve=>Ve!==oe),It=new Date(H.date).getTime(),nn=Math.max(Je,1);let sn=null;for(let Ve=nn;Ve<W;Ve+=1){const Ye=(qe=h.get(Ve))!=null?qe:[];if(Ye.length===0||Dt||g.has(Ve))continue;const I=(Xe=w.get(H.visualId))!=null?Xe:new Set;if(!(Ye.some(Ue=>$(H.id,Ue.sha)?!0:Array.from(I).some(Ne=>a(Ne,Ue.sha)))||Ye.some(Ue=>Ue.column===oe)||!Number.isFinite(It)||!Ye.every(Ue=>{if(!Number.isFinite(Ue.time))return!1;const Ne=!!Oe&&!!Ue.branchEntryParentSha&&Oe===Ue.branchEntryParentSha?Fv:Wv;return Math.abs(Ue.time-It)<=Ne}))){sn=Ve;break}}sn==null&&(sn=Math.max(Je,W)),d.set(H.visualId,sn),sn>=W&&(W=sn+1);const Ge=(Ie=h.get(sn))!=null?Ie:[];Ge.push({visualId:H.visualId,sha:H.id,column:oe,time:It,branchEntryParentSha:Oe}),h.set(sn,Ge),Dt&&g.add(sn);for(const Ve of B){const Ye=(ct=p.get(Ve))!=null?ct:[];Ye.push(sn),p.set(Ve,Ye)}const yt=(pt=k.get(H.id))!=null?pt:[];yt.push(sn),k.set(H.id,yt)};let X=[...c];for(;X.length>0;){const H=[];let B=!1;for(const oe of X){const ze=(Ee=b.get(oe.visualId))!=null?Ee:new Set;if(Array.from(ze).some(Oe=>j(Oe).some(Ze=>{var Je,Xt;return((Xt=(Je=k.get(Ze))==null?void 0:Je.length)!=null?Xt:0)===0}))){H.push(oe);continue}P(oe,ze),B=!0}if(!B){const oe=H.shift();if(!oe)break;P(oe,(L=b.get(oe.visualId))!=null?L:new Set)}X=H}return d}function Yv(t,n){if(t.length===0)return[];const o=new Set(Array.from(n).filter(d=>d>=0&&d<t.length)),a=[];let c=[];const u=()=>{c.length!==0&&(a.push({entries:c}),c=[])};for(let d=0;d<t.length;d+=1)c.push(t[d]),o.has(d)&&u();return u(),a}function Xv(t,n){if(t.length===0)return[];const o=[];let a=[],c=null;const u=()=>{a.length!==0&&(o.push(a),a=[])};for(const d of t){const h=n.get(d.item.visualId),p=h!=null&&c!=null&&Math.abs(h-c)===1;a.length>0&&!p&&u(),a.push(d),c=h!=null?h:null}return u(),o}function Ox(t){var no,so,oo,Nn,Qs,io,Rn,hs,Io,Zo,ao,uo,fo,Ts,Vs,On,bi,Li,Jo,Bi,jo,vi,Hn,ho,En,ro,ms,es,wi,Ss,Mo,en,Po,Ds,To,ei,Eo,J,he,je,Se,ot,bt,rt,Ft,zt,cn,Xn,fn,_n,qn,As,Vt;const{lanes:n,branches:o,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchUniqueAheadCounts:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,isDebugOpen:x,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:S,orientation:C="horizontal"}=t,k=C==="horizontal",j=new Map(o.map(E=>[E.name,E])),N=new Map(n.map(E=>[E.name,E])),A=wd([...a.map(E=>{var Y,se,re;return{id:E.fullSha,branchName:d,message:(Y=E.prTitle)!=null?Y:E.sha,author:"",date:E.date,parentSha:(re=(se=E.parentShas)==null?void 0:se[0])!=null?re:null}}),...((no=h[d])!=null?no:[]).map(E=>tl(d,E)),...c.map(E=>tl(d,E)),...u.map(E=>tl(d,E))]),T=new Map,$=new Map;for(const E of o){if(E.name===d)continue;const Y=Lx(E.name,p,h);$.set(E.name,Y);const se=wd(Y.map(Le=>tl(E.name,Le)));if(se.length>0){T.set(E.name,se);continue}const re=(Nn=(oo=(so=E.presidesFromSha)!=null?so:E.divergedFromSha)!=null?oo:E.createdFromSha)!=null?Nn:null;if(!re)continue;const pe={id:`BRANCH_HEAD:${E.name}:${re}`,branchName:E.name,message:`Branch ${E.name}`,author:E.lastCommitAuthor,date:(io=(Qs=E.createdDate)!=null?Qs:E.divergedFromDate)!=null?io:E.lastCommitDate,parentSha:null,kind:"branch-created"};T.set(E.name,[pe])}const W=new Set(A.map(E=>E.id)),P=(Rn=[...A].sort((E,Y)=>new Date(E.date).getTime()-new Date(Y.date).getTime()||E.id.localeCompare(Y.id))[0])!=null?Rn:null,X=new Map(Array.from(T.entries()).map(([E,Y])=>[E,new Set(Y.map(se=>se.id))])),q=new Map;for(const E of o){if(E.name===d)continue;const Y=Uv(E.name,h,p);if(Y){q.set(E.name,Y);continue}const se=(hs=T.get(E.name))==null?void 0:hs[0];if(se){const re=(ao=(Zo=(Io=E.presidesFromSha)!=null?Io:E.divergedFromSha)!=null?Zo:E.createdFromSha)!=null?ao:null;q.set(E.name,{...se,parentSha:re})}}const ne=new Map;for(const[E,Y]of T.entries()){const se=Y.find(re=>re.kind!=="branch-created");se&&ne.set(E,se)}const le=new Map;for(const[E,Y]of T.entries()){const se=Y.filter(ut=>ut.kind!=="branch-created"),re=se.length>0?se:Y,pe=new Set(re.map(ut=>ut.id)),Le=re.find(ut=>!ut.parentSha||!pe.has(ut.parentSha)),st=Le!=null?Le:re[0];st&&le.set(E,st)}const G=new Map;for(const E of o){if(E.name===d)continue;const Y=(uo=le.get(E.name))!=null?uo:null,se=(fo=Y==null?void 0:Y.parentSha)!=null?fo:null;if(se){G.set(E.name,se);continue}const re=(Vs=(Ts=q.get(E.name))==null?void 0:Ts.parentSha)!=null?Vs:null;if(re){G.set(E.name,re);continue}const pe=(Li=(bi=(On=E.presidesFromSha)!=null?On:E.divergedFromSha)!=null?bi:E.createdFromSha)!=null?Li:null;pe&&G.set(E.name,pe)}const te=E=>{var Le,st,ut,ft,ht,it,Tt;const Y=E.parentBranch;if(!(Y&&Y!==d&&Y!==E.name&&j.has(Y)))return Y!=null?Y:d;const re=(ut=(st=(Le=G.get(E.name))!=null?Le:E.presidesFromSha)!=null?st:E.divergedFromSha)!=null?ut:E.createdFromSha;if(re&&((ft=X.get(Y))!=null?ft:new Set).has(re))return Y;const pe=(it=(ht=q.get(E.name))==null?void 0:ht.parentSha)!=null?it:null;return pe&&((Tt=X.get(Y))!=null?Tt:new Set).has(pe),Y},de=E=>{var pe,Le,st,ut,ft,ht,it,Tt;const Y=q.get(E.name),se=(ft=(ut=(st=(Le=(pe=G.get(E.name))!=null?pe:Y==null?void 0:Y.parentSha)!=null?Le:E.presidesFromSha)!=null?st:E.divergedFromSha)!=null?ut:E.createdFromSha)!=null?ft:null;if(!E.parentBranch&&!se||!se)return null;if(te(E)===d){if(W.has(se))return se;const Gt=(ht=Y==null?void 0:Y.parentSha)!=null?ht:null;return Gt&&W.has(Gt)?Gt:(Tt=(it=P==null?void 0:P.id)!=null?it:Gt)!=null?Tt:se}return W.has(se),se},be=E=>de(E),z=new Set;for(const E of o){const Y=be(E);Y&&z.add(Y);const se=(Jo=G.get(E.name))!=null?Jo:null;se&&z.add(se)}const _e=[],K=new Map(Array.from(T.entries()).map(([E,Y])=>[E,new Set(Y.map(se=>se.id))])),we=new Set;for(const E of K.values())for(const Y of E)we.add(Y);for(const E of A)we.has(E.id)||_e.push({...E,visualId:`${d}:${E.id}`});for(const[E,Y]of T.entries())for(const se of Y)_e.push({...se,visualId:`${E}:${se.id}`});const Ee=[..._e].sort((E,Y)=>new Date(E.date).getTime()-new Date(Y.date).getTime()||E.id.localeCompare(Y.id)),L=new Map;for(const E of a){const Y=E.fullSha;if(!Y)continue;const se=((Bi=E.parentShas)!=null?Bi:[]).filter(pe=>!!pe&&pe!==Y);if(se.length===0)continue;const re=(jo=L.get(Y))!=null?jo:new Set;for(const pe of se)re.add(pe);L.set(Y,re)}const H=new Map;for(const E of o){if(E.name===d)continue;const Y=de(E);Y&&H.set(E.name,Y)}const B=new Map;for(const E of Ee){const Y=L.get(E.id);if(Y&&Y.size>0){const pe=(vi=B.get(E.id))!=null?vi:new Set;for(const Le of Y)pe.add(Le);B.set(E.id,pe)}if(E.branchName===d)continue;const se=H.get(E.branchName);if(!se||se===E.id)continue;const re=(Hn=B.get(E.id))!=null?Hn:new Set;re.add(se),B.set(E.id,re)}const oe=gy(Ee,N,B),ze=new Map;for(const E of Ee){const Y=(ho=ze.get(E.branchName))!=null?ho:[];Y.push(E),ze.set(E.branchName,Y)}const Ae=new Map;for(const E of o){if(E.name===d)continue;const Y=te(E),se=(En=Ae.get(Y))!=null?En:[];se.push(E),Ae.set(Y,se)}const Oe=new Map,Ze=new Map,Je=new Map,Xt=new Map,qt=new Map,Dt=(ro=S==null?void 0:S.headSha)!=null?ro:null,It=(ms=S==null?void 0:S.branchName)!=null?ms:null,nn=(E,Y)=>!Dt||It&&It!==E?!1:Y===Dt||Y.startsWith(Dt)||Dt.startsWith(Y),sn=(E,Y)=>{var ut;if(Y.length===0)return[];const se=[...Y].sort((ft,ht)=>new Date(ft.date).getTime()-new Date(ht.date).getTime()||ft.id.localeCompare(ht.id)),re=new Set,pe=(ut=Ae.get(E))!=null?ut:[];if(pe.length>0){const ft=se.map(ht=>new Date(ht.date).getTime());pe.forEach(ht=>{var Rs,an,zn;const it=(Rs=G.get(ht.name))!=null?Rs:null;if(it){const Cs=se.findIndex($s=>$s.id===it||$s.id.startsWith(it)||it.startsWith($s.id));if(Cs>=0){re.add(Cs);return}}const Tt=new Date((zn=(an=ht.divergedFromDate)!=null?an:ht.createdDate)!=null?zn:ht.lastCommitDate).getTime();if(!Number.isFinite(Tt)||ft.length===0)return;let Gt=-1,bn=Number.POSITIVE_INFINITY,ds=-1,Ns=Number.POSITIVE_INFINITY;for(let Cs=0;Cs<ft.length;Cs+=1){const $s=ft[Cs];if(Number.isFinite($s))if($s<=Tt){const jt=Tt-$s;jt<bn&&(bn=jt,Gt=Cs)}else{const jt=$s-Tt;jt<Ns&&(Ns=jt,ds=Cs)}}const ks=Gt>=0?Gt:ds;ks>=0&&re.add(ks)})}se.forEach((ft,ht)=>{z.has(ft.id)&&ht<se.length-1&&re.add(ht),(ft.kind==="uncommitted"||ft.kind==="stash"||ft.id==="WORKING_TREE"||ft.id.startsWith("STASH:"))&&(ht>0&&re.add(ht-1),re.add(ht)),nn(E,ft.id)&&(ht>0&&re.add(ht-1),re.add(ht))});const Le=Yv(se.map(ft=>({item:ft})),re),st=[];return Le.forEach((ft,ht)=>{Xv(ft.entries,oe).forEach((Tt,Gt)=>{var Rs;const bn=Tt.map(an=>an.item);if(bn.length===0)return;const ds=`grid-clump-${E}-${bn[0].id}-${bn[bn.length-1].id}-${ht}-${Gt}`,Ns=bn[bn.length-1].visualId,ks={branchName:E,key:ds,commitIds:bn.map(an=>an.visualId),leadId:Ns,count:bn.length};st.push(ks),Xt.set(ds,Ns),qt.set(ds,bn.length);for(const an of ks.commitIds){Ze.set(an,ds);const zn=an.split(":").slice(1).join(":"),Cs=(Rs=Je.get(zn))!=null?Rs:[];Cs.includes(ds)||Cs.push(ds),Je.set(zn,Cs)}})}),st};for(const[E,Y]of ze.entries())Oe.set(E,sn(E,Y));const Ge=x?o.flatMap(E=>{var pe,Le,st,ut;const Y=(pe=h[E.name])!=null?pe:[],se=[...(Le=$.get(E.name))!=null?Le:[]].reverse(),re=new Set(((st=T.get(E.name))!=null?st:[]).map(ft=>ft.id));return[`Branch ${E.name}`,`  ahead=${(ut=p[E.name])!=null?ut:0} previews=${se.length} rendered=${re.size}`,...se.map(ft=>{const ht=re.has(ft.fullSha)?"visible":"hidden",it=re.has(ft.fullSha)?"kept by render set":"dropped by render set";return`  ${ht} ${ft.fullSha.slice(0,7)} ${ft.message} [${it}]`}),Y.length===0?"  no preview data":null].filter(ft=>ft!=null)}):[],yt=x?Array.from(T.entries()).map(([E,Y])=>[`Branch debug ${E}`,...Y.map(se=>`  ${se.id.slice(0,7)} ${se.message}`)].join(`
`)):[],ae=oe,ce=Tm/Uu,Ce=20/Uu,Me=k?Es+ce+Ce:Pu+ce+Ce,qe=k?Pu+ce+Ce:Zl,Xe=Ee.map(E=>{var pe,Le;const Y=N.get(E.branchName),se=(pe=ae.get(E.visualId))!=null?pe:1,re=(Le=Y==null?void 0:Y.column)!=null?Le:0;return k?{commit:E,row:se,column:re,x:Gr+(se-1)*Me,y:qr+re*qe}:{commit:E,row:se,column:re,x:Gr+re*Zl,y:qr+(se-1)*Me}}),Ie=b.trim().toLowerCase(),ct=Ie?Xe.filter(E=>{const Y=E.commit.id.toLowerCase(),se=E.commit.id.slice(0,7).toLowerCase(),re=E.commit.message.toLowerCase(),pe=E.commit.branchName.toLowerCase();return Y.includes(Ie)||se.includes(Ie)||re.includes(Ie)||pe.includes(Ie)}):Xe,pt=w&&(es=Xe.find(E=>E.commit.id===w))!=null?es:null,Ve=new Set(ct.map(E=>E.commit.id)),Ye=(wi=S==null?void 0:S.headSha)!=null?wi:null,I=(()=>{var Y,se;const E=(Y=S==null?void 0:S.branchName)!=null?Y:null;return!Ye||!E?null:(se=Ze.get(`${E}:${Ye}`))!=null?se:null})(),Z=new Set;for(const E of Oe.values())for(const Y of E)Y.count>1&&Y.key!==I&&Z.add(Y.key);const ge=[...Ee].filter(E=>{var Le;const Y=Ze.get(E.visualId);if(!Y)return!0;const se=Xt.get(Y),re=(Le=qt.get(Y))!=null?Le:1,pe=g.has(Y)||!Z.has(Y)&&!_.has(Y);return re<=1||pe||se===E.visualId}),ke=gy(ge,N,B),Ue=Tm/Uu,We=20/Uu,Ne=k?Es+Ue+We:Pu+Ue+We,Nt=k?Pu+Ue+We:Zl,Et=ge.map(E=>{var pe,Le;const Y=N.get(E.branchName),se=(pe=ke.get(E.visualId))!=null?pe:1,re=(Le=Y==null?void 0:Y.column)!=null?Le:0;return k?{commit:E,row:se,column:re,x:Gr+(se-1)*Ne,y:qr+re*Nt}:{commit:E,row:se,column:re,x:Gr+re*Zl,y:qr+(se-1)*Ne}}),Pt=new Map;for(const E of Et){const Y=(Ss=Pt.get(E.commit.id))!=null?Ss:[];Y.push(E),Pt.set(E.commit.id,Y)}const _t=new Map;for(const E of Et){const Y=Ze.get(E.commit.visualId);if(!Y)continue;const se=_t.get(Y);(!se||(k?E.x>se.x:E.y>se.y))&&_t.set(Y,E)}const tt=(E,Y)=>`${E.toFixed(1)} ${Y.toFixed(1)}`,Ot=Math.max(0,...Et.map(E=>E.row)),on=Math.max(0,...n.map(E=>E.column)),Qt=k?Gr*2+Math.max(0,Ot-1)*Ne+Es+Uh+We:Gr*2+(on+1)*Zl,Ke=k?qr*2+on*Nt+yo+Uh+We:qr*2+Math.max(0,Ot-1)*Ne+yo+Uh+We,Ut=[],Jt=new Map(o.map(E=>{var se,re;const Y=new Date((re=(se=E.createdDate)!=null?se:E.divergedFromDate)!=null?re:E.lastCommitDate).getTime();return[E.name,Number.isFinite(Y)?Y:0]})),Ht=E=>{var Y;return(Y=Jt.get(E))!=null?Y:0},An=[],at=E=>{x&&An.push(E)},Wt=new Set,Tn=new Map,jn=(E,Y)=>{var re;const se=(re=Tn.get(E))!=null?re:[];se.includes(Y)||se.push(Y),Tn.set(E,se)},Zn=new Set,Ms=new Set,Jn=new Set,rs=(E,Y)=>{var pe,Le;if(!E)return null;const se=Vu(Pt,E,Y);if(se)return se;const re=(pe=Ze.get(`${Y!=null?Y:d}:${E}`))!=null?pe:Ze.get(E);return re&&(Le=_t.get(re))!=null?Le:null},mn=new Set;for(const E of o){const Y=be(E);Y&&Ms.add(Y);const se=(Mo=G.get(E.name))!=null?Mo:null;se&&Jn.add(se)}const Yn=E=>{var pe;const Y=rs(E.id,E.branchName);if(Y)return Y;const se=Ze.get(E.visualId);if(!se)return null;const re=Xt.get(se);return re&&(pe=Et.find(Le=>Le.commit.id===re))!=null?pe:null},xn=(E,Y)=>E?Vu(Pt,E,Y):null,Wn=(E,Y)=>k?{x:E.x-Ia,y:E.y+yo/2,face:"left"}:{x:E.x+Es/2,y:E.y+yo+Ia,face:"bottom"},nt=(E,Y)=>E.column!==Y.column?!0:k?E.commit.branchName!==Y.commit.branchName:!1,ws=(E,Y,se)=>{if(!k)return{x:Y?E.x+Es:E.x+Es/2,y:Y?E.y+yo/2:E.y,face:Y?"right":"top"};if(!Y)return{x:E.x+Es+Ia,y:E.y+yo/2,face:"right"};if(se&&se.column===E.column&&se.commit.branchName!==E.commit.branchName){if(se.x>E.x)return{x:E.x+Es/2,y:E.y+yo+Ia,face:"bottom"};if(se.x<E.x)return{x:E.x+Es/2,y:E.y-Ia,face:"top"}}return!se||se.column===E.column?{x:E.x+Es+Ia,y:E.y+yo/2,face:"right"}:se.column>E.column?{x:E.x+Es/2,y:E.y+yo+Ia,face:"bottom"}:{x:E.x+Es/2,y:E.y-Ia,face:"top"}},Ko=(E,Y)=>Vu(Pt,E,Y),Qo=(E,Y)=>xn(E,Y),to=[],Co=new Set;for(const E of a){const Y=(en=E.targetBranch)!=null?en:d,se=(To=(Ds=rs(E.fullSha,Y))!=null?Ds:(Po=Pt.get(E.fullSha))==null?void 0:Po[0])!=null?To:null;if(!se){at({id:`merge:${E.fullSha}:target`,kind:"merge",parent:(Eo=(ei=E.parentShas)==null?void 0:ei[1])!=null?Eo:"unknown",child:E.fullSha,rendered:!1,reason:"missing merge target node"});continue}const re=(he=(J=E.parentShas)==null?void 0:J.slice(1))!=null?he:[];if(re.length===0){at({id:`merge:${E.fullSha}:parents`,kind:"merge",parent:"unknown",child:E.fullSha,rendered:!1,reason:"no merged parent shas"});continue}for(const pe of re){const Le=`merge:${E.fullSha}:${pe!=null?pe:"unknown"}`;if(!pe||pe===E.fullSha){at({id:Le,kind:"merge",parent:pe!=null?pe:"unknown",child:E.fullSha,rendered:!1,reason:pe?"merged parent equals merge sha":"missing merged parent sha"});continue}const st=(je=Vu(Pt,pe))!=null?je:null;if(!st){at({id:Le,kind:"merge",parent:pe,child:E.fullSha,rendered:!1,reason:"missing merge parent node"});continue}if(st.commit.id===se.commit.id){at({id:Le,kind:"merge",parent:st.commit.id,child:se.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}let ut,ft,ht;const it=k?se.x-_y:se.x+Es-_y,Tt=se.y+yo/2,Gt=k?"left":"right";k?st.column===se.column?(ut=st.x+Es,ft=st.y+yo/2,ht="right"):st.column>se.column?(ut=st.x+Es/2,ft=st.y+yo,ht="bottom"):(ut=st.x+Es/2,ft=st.y,ht="top"):(ut=st.x+Es/2,ft=st.y,ht="top");const bn=`${ut.toFixed(2)}:${ft.toFixed(2)}:${it.toFixed(2)}:${Tt.toFixed(2)}`;if(Co.has(bn)){at({id:Le,kind:"merge",parent:st.commit.id,child:se.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}Co.add(bn),to.push({id:Le,fromX:ut,fromY:ft,toX:it,toY:Tt,fromFace:ht,toFace:Gt,zIndex:Ht(st.commit.branchName)}),at({id:Le,kind:"merge",parent:st.commit.id,child:se.commit.id,rendered:!0,reason:`merge connector rendered to ${Y}`})}}const co=new Set;for(const E of o){if(E.name===d)continue;const Y=q.get(E.name);if(!Y)continue;const se=te(E),re=Ko((Se=G.get(E.name))!=null?Se:"",se),pe=(ot=ne.get(E.name))!=null?ot:Y,Le=(bt=Qo(pe.id,E.name))!=null?bt:Yn(pe);if(!re||!Le||re.commit.id===Le.commit.id){const it=Ze.get(`${E.name}:${Y.id}`),Tt=Ze.get(`${E.name}:${pe.id}`),Gt=!!it&&!Z.has(it),bn=!!Tt&&!Z.has(Tt),ds=!!it&&!g.has(it)&&(Gt?_.has(it):!0),Ns=!!Tt&&!g.has(Tt)&&(bn?_.has(Tt):!0);!re&&!ds&&jn((rt=Le==null?void 0:Le.commit.id)!=null?rt:Y.id,"Missing parent node"),!Le&&!Ns&&jn(Y.id,"Missing child node"),at({id:`branch:${(Ft=re==null?void 0:re.commit.id)!=null?Ft:"null"}->${(zt=Le==null?void 0:Le.commit.id)!=null?zt:"null"}`,kind:"branch",parent:(cn=re==null?void 0:re.commit.id)!=null?cn:"null",child:(Xn=Le==null?void 0:Le.commit.id)!=null?Xn:"null",rendered:!1,reason:re?Le?"parent and child are the same node":"missing child node":"missing parent node"});continue}const st=`branch:${re.commit.id}->${Le.commit.id}`;if(mn.has(st)){at({id:st,kind:"branch",parent:re.commit.id,child:Le.commit.id,rendered:!1,reason:"duplicate connector key"});continue}mn.add(st),Zn.add(re.commit.id);const ut=nt(re,Le);re.commit.branchName!==Le.commit.branchName&&co.add(re.commit.id);const ft=ws(re,ut,Le),ht=Wn(Le);Ut.push({id:st,fromX:ft.x,fromY:ft.y,toX:ht.x,toY:ht.y,fromFace:ft.face,toFace:ht.face,zIndex:Ht(Le.commit.branchName)}),at({id:st,kind:"branch",parent:re.commit.id,child:Le.commit.id,rendered:!0,reason:ut?"branch connector rendered":k?"horizontal connector rendered":"vertical connector rendered"})}for(const E of Et){const Y=(fn=E.commit.parentSha)!=null?fn:null;if(!Y)continue;const se=Ko(Y,E.commit.branchName);if(!se){const ft=(_n=Ze.get(`${E.commit.branchName}:${Y}`))!=null?_n:Ze.get(Y),ht=!!ft&&!Z.has(ft);!!ft&&!g.has(ft)&&(ht?_.has(ft):!0)||jn(E.commit.id,"Missing parent node"),at({id:`${E.commit.visualId}->${Y}`,kind:"ancestry",parent:Y,child:E.commit.id,rendered:!1,reason:"missing parent node"});continue}const re=E;if(re.commit.id===se.commit.id){jn(re.commit.id,"Parent and child resolve to the same node"),at({id:`${se.commit.id}->${re.commit.id}`,kind:"ancestry",parent:se.commit.id,child:re.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const pe=`${E.commit.branchName}:${(qn=se.commit.visualId)!=null?qn:se.commit.id}->${re.commit.visualId}`;if(mn.has(pe)){jn(se.commit.id,"Duplicate connector key"),jn(re.commit.id,"Duplicate connector key"),at({id:pe,kind:"ancestry",parent:se.commit.id,child:re.commit.id,rendered:!1,reason:"duplicate connector key"});continue}mn.add(pe),Zn.add(se.commit.id);const Le=nt(se,re),st=ws(se,Le,re),ut=Wn(re);Ut.push({id:pe,fromX:st.x,fromY:st.y,toX:ut.x,toY:ut.y,fromFace:st.face,toFace:ut.face,zIndex:Ht(re.commit.branchName)}),at({id:pe,kind:"ancestry",parent:se.commit.id,child:re.commit.id,rendered:!0,reason:Le?"ancestry connector rendered":k?"horizontal ancestry rendered":"vertical ancestry rendered"}),Wt.add(se.commit.id),Wt.add(re.commit.id)}const Bn=new Map;for(const E of Et){const Y=(As=Bn.get(E.commit.branchName))!=null?As:[];Y.push(E),Bn.set(E.commit.branchName,Y)}for(const[E,Y]of Bn.entries()){if(Y.length<2)continue;const se=[...Y].sort((re,pe)=>{var ut,ft,ht,it,Tt,Gt,bn,ds;const Le=Number.isFinite(new Date((ft=(ut=re==null?void 0:re.commit)==null?void 0:ut.date)!=null?ft:"").getTime())?new Date(re.commit.date).getTime():0,st=Number.isFinite(new Date((it=(ht=pe==null?void 0:pe.commit)==null?void 0:ht.date)!=null?it:"").getTime())?new Date(pe.commit.date).getTime():0;return Le-st||((Gt=(Tt=re==null?void 0:re.commit)==null?void 0:Tt.id)!=null?Gt:"").localeCompare((ds=(bn=pe==null?void 0:pe.commit)==null?void 0:bn.id)!=null?ds:"")});for(let re=1;re<se.length;re+=1){const pe=se[re-1],Le=se[re];if(pe.commit.id===Le.commit.id)continue;const st=(Vt=Le.commit.parentSha)!=null?Vt:null;if(st&&Ko(st,Le.commit.branchName))continue;const ut=`chain:${E}:${pe.commit.id}->${Le.commit.id}`;if(mn.has(ut)){jn(pe.commit.id,"Duplicate branch chain connector"),jn(Le.commit.id,"Duplicate branch chain connector"),at({id:ut,kind:"ancestry",parent:pe.commit.id,child:Le.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}mn.add(ut);const ft=nt(pe,Le),ht=ws(pe,ft,Le),it=Wn(Le);Ut.push({id:ut,fromX:ht.x,fromY:ht.y,toX:it.x,toY:it.y,fromFace:ht.face,toFace:it.face,zIndex:Ht(Le.commit.branchName)}),at({id:ut,kind:"ancestry",parent:pe.commit.id,child:Le.commit.id,rendered:!0,reason:"branch chain rendered"}),Wt.add(pe.commit.id),Wt.add(Le.commit.id)}}return{branchByName:j,laneByName:N,mainCommits:A,branchCommitsByLane:T,branchPreviewSets:$,allCommits:Ee,clustersByBranch:Oe,clusterKeyByCommitId:Ze,clusterKeyBySha:Je,leadByClusterKey:Xt,clusterCounts:qt,debugRows:Ge,branchDebugRows:yt,nodes:Xe,normalizedSearchQuery:Ie,matchingNodes:ct,matchingNodeIds:Ve,focusedNode:pt,checkedOutClusterKey:I,defaultCollapsedClumps:Z,visibleCommitsList:ge,renderNodes:Et,visibleNodesBySha:Pt,visibleNodeByClusterKey:_t,pointFormatter:tt,contentWidth:Qt,contentHeight:Ke,connectors:Ut,mergeConnectors:to,connectorDecisions:An,nodeWarnings:Tn,connectorParentShas:Zn,branchStartShas:Ms,branchOffNodeShas:Jn,crossBranchOutgoingShas:co,commitIdsWithRenderedAncestry:Wt,branchBaseCommitByName:q,firstBranchCommitByName:le}}function yy(t,n,o,a,c,u,d=0){const h=a-Math.sign(a-n||1)*d,p=Math.max(0,Math.min(c,Math.abs(o-t),Math.abs(a-n)));if(p<.5)return[`M ${u(t,n)}`,`L ${u(o,n)}`,`L ${u(o,h)}`].join(" ");const g=o>=t?1:-1,_=a>=n?1:-1,x=o-g*p,b=h-_*p;return[`M ${u(t,n)}`,`L ${u(x,n)}`,`Q ${u(o,n)} ${u(o,n+_*p)}`,`L ${u(o,b)}`,`L ${u(o,h)}`].join(" ")}function qv(t,n,o,a,c,u,d=0){const h=o-Math.sign(o-t||1)*d,p=Math.max(0,Math.min(c,Math.abs(o-t),Math.abs(a-n)));if(p<.5)return[`M ${u(t,n)}`,`L ${u(t,a)}`,`L ${u(h,a)}`].join(" ");const g=o>=t?1:-1,_=a>=n?1:-1,x=a-_*p,b=h-g*p;return[`M ${u(t,n)}`,`L ${u(t,x)}`,`Q ${u(t,a)} ${u(t+g*p,a)}`,`L ${u(b,a)}`,`L ${u(h,a)}`].join(" ")}function Gv(t,n,o,a){return Math.abs(a-n)>Math.abs(o-t)}const Kv=8,Qv=44,xy=t=>t==="left"||t==="right"?"h":t==="top"||t==="bottom"?"v":null;function zx(t,n,o,a,c,u){const d=o-t,h=a-n,p=Math.abs(d),g=Math.abs(h),_=Math.hypot(d,h);if(_<.5)return{kind:"line"};const x=d>=0?1:-1,b=h>=0?1:-1;if(Math.min(p,g)<Kv){const W=d/_,P=h/_,X=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+W*X,c1y:n+P*X,c2x:o-W*X,c2y:a-P*X}}if(Math.min(p,g)<Qv){const W=d/_,P=h/_,X=Math.min(240,Math.max(56,_*.42));return{kind:"chord",c1x:t+W*X,c1y:n+P*X,c2x:o-W*X,c2y:a-P*X}}const w=Math.min(160,p*.42),S=Math.min(100,p*.22),C=Math.min(120,g*.32),k=Math.min(160,g*.42),j=xy(c),N=xy(u);if(!(j==="v"&&N==="h"||j==="v"&&N==null&&g>=p||j==null&&N==="h"&&g>=p||j==="v"&&N==="v"||j==null&&N==null&&g>p)){const W=o,P=n;return{kind:"elbowH",cx:W,cy:P,s1c1x:t+x*w,s1c1y:n,s1c2x:W-x*S,s1c2y:P,s2c1x:W,s2c1y:P+b*C,s2c2x:o,s2c2y:a-b*k}}const T=t,$=a;return{kind:"elbowV",cx:T,cy:$,s1c1x:t,s1c1y:n+b*k,s1c2x:T,s1c2y:$-b*C,s2c1x:T+x*w,s2c1y:$,s2c2x:o-x*S,s2c2y:a}}function Zv(t,n,o,a,c,u){const d=zx(t,n,o,a,c,u);return d.kind==="line"?[{x:t,y:n},{x:o,y:a}]:d.kind==="chord"?[{x:t,y:n},{x:o,y:a},{x:d.c1x,y:d.c1y},{x:d.c2x,y:d.c2y}]:d.kind==="elbowH"?[{x:t,y:n},{x:o,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]:[{x:t,y:n},{x:o,y:a},{x:d.cx,y:d.cy},{x:d.s1c1x,y:d.s1c1y},{x:d.s1c2x,y:d.s1c2y},{x:d.s2c1x,y:d.s2c1y},{x:d.s2c2x,y:d.s2c2y}]}function by(t,n,o,a,c,u,d){const h=zx(t,n,o,a,u,d);return h.kind==="line"?[`M ${c(t,n)}`,`L ${c(o,a)}`].join(" "):h.kind==="chord"?[`M ${c(t,n)}`,`C ${c(h.c1x,h.c1y)} ${c(h.c2x,h.c2y)} ${c(o,a)}`].join(" "):h.kind==="elbowH"?[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.s1c2x,h.s1c2y)} ${c(h.cx,h.cy)}`,`C ${c(h.s2c1x,h.s2c1y)} ${c(h.s2c2x,h.s2c2y)} ${c(o,a)}`].join(" "):[`M ${c(t,n)}`,`C ${c(h.s1c1x,h.s1c1y)} ${c(h.s1c2x,h.s1c2y)} ${c(h.cx,h.cy)}`,`C ${c(h.s2c1x,h.s2c1y)} ${c(h.s2c2x,h.s2c2y)} ${c(o,a)}`].join(" ")}const fp=2.25,Jl=fp/2,Jv=.45,ew=.01,ha=fp,Sd=10,tw=-100,vy=0,wy=.9,nw=.9,Sy=.001,Yh=.001,Xh=0,sw=120,ow=12,Dm="git-visualizer-loose-cable-connectors",iw=Es+48;function Ks(...t){return t.filter(Boolean).join(" ")}function aw(t){return Math.max(Jv,Math.min(fp,t))}function rw(t,n){if(t===null||t.size!==n.size)return!1;for(const o of t)if(!n.has(o))return!1;return!0}function jc(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Bo(t,n,o,a,c){const{left:u,top:d,right:h,bottom:p}=c;let g=0,_=1;const x=o-t,b=a-n,w=(S,C)=>{if(Math.abs(S)<1e-12)return C>=0;const k=C/S;if(S<0){if(k>_)return!1;k>g&&(g=k)}else{if(k<g)return!1;k<_&&(_=k)}return!0};return!w(-x,t-u)||!w(x,h-t)||!w(-b,n-d)||!w(b,p-n)?!1:g<=_}function Bd(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,o=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=o;for(const g of t)n=Math.min(n,g.x),o=Math.min(o,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:o,right:a,bottom:c}}function ky(t,n,o,a,c,u,d){const h=a-Math.sign(a-n||1)*u,p=Math.max(0,Math.min(c,Math.abs(o-t),Math.abs(a-n)));if(p<.5)return Bo(t,n,o,n,d)||Bo(o,n,o,h,d);const g=o>=t?1:-1,_=a>=n?1:-1,x=o-g*p,b=h-_*p,w=o,S=n+_*p;if(Bo(t,n,x,n,d))return!0;const C=Bd([{x,y:n},{x:o,y:n},{x:w,y:S}]);return jc(d,C)||Bo(w,S,o,b,d)?!0:Bo(o,b,o,h,d)}function lw(t,n,o,a,c,u,d){const h=o-Math.sign(o-t||1)*u,p=Math.max(0,Math.min(c,Math.abs(o-t),Math.abs(a-n)));if(p<.5)return Bo(t,n,t,a,d)||Bo(t,a,h,a,d);const g=o>=t?1:-1,_=a>=n?1:-1,x=a-_*p,b=h-g*p,w=t+g*p,S=a;if(Bo(t,n,t,x,d))return!0;const C=Bd([{x:t,y:x},{x:t,y:a},{x:w,y:S}]);return jc(d,C)||Bo(w,S,b,a,d)?!0:Bo(b,a,h,a,d)}function cw(t,n,o,a,c,u,d){const h=Zv(t,n,o,a,u,d),p=Bd(h);return jc(c,p)}function uw(t,n,o,a,c,u){if(Math.abs(a-n)<.5)return Bo(t,n,o,a,u);const d=o>=t?1:-1,h=Math.max(0,Math.min(c,Math.abs(a-n),Math.abs(o-t)));if(h<.5)return Bo(t,n,t,a,u)||Bo(t,a,o,a,u);const p=a-Math.sign(a-n)*h,g=t+d*h;if(Bo(t,n,t,p,u))return!0;const _=Bd([{x:t,y:p},{x:t,y:a},{x:g,y:a}]);return jc(u,_)?!0:Bo(g,a,o,a,u)}function $x(t,n){return{left:t.x,top:t.y+n,right:t.x+Es,bottom:t.y+Cc+yo+4}}function dw(t,n){const o=iw,a=Math.max(120,Math.ceil(Cc+yo+4-n+24)),c=new Map;for(const u of t){const d=$x(u,n),h=Math.floor(d.left/o),p=Math.floor(d.right/o),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let C=c.get(S);C||(C=new Set,c.set(S,C)),C.add(x)}}return{cellW:o,cellH:a,buckets:c}}function fw(t,n,o,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const C=d.get(`${w},${S}`);if(C)for(const k of C)x.add(k)}const b=new Set;for(const w of x){const S=o.get(w);if(!S)continue;const C=$x(S,a);jc(n,C)&&b.add(w)}return b}function Cy(t,n,o,a){var d;if(o.zoom<=0||t<=0||n<=0)return null;const c=o.zoom/ha;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-o.panX)/c,top:(-u-o.panY)/c,right:(t-u-o.panX)/c,bottom:(n-u-o.panY)/c}}function hw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function jy(t,n,o){const a=n/ha;return!Number.isFinite(a)||a<=0?t:hw(t,100/a)}function My(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function bo(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function Am(t,n){if(n){const o=My(n),a=My(t.path);if(o===a||o.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function qh(t,n){return t.pathExists===!1?!1:Am(t,n)}function mw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function pw({fadeIn:t,className:n,style:o,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),r.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...o,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function _w({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:o,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:x,selectedVisibleCommitShas:b,iconScaleStyle:w,normalizedSearchQuery:S,matchingNodeIds:C,focusedNode:k,renderNodes:j,shouldRenderNode:N,manuallyOpenedClumps:A,manuallyClosedClumps:T,defaultCollapsedClumps:$,leadByClusterKey:W,clusterKeyByCommitId:P,clusterCounts:X,commitIdsWithRenderedAncestry:q,nodeWarnings:ne,connectorParentShas:le,branchStartShas:G,branchOffNodeShas:te,crossBranchOutgoingShas:de,branchBaseCommitByName:be,branchStartAccentClass:z,connectorParentAccentClass:_e,commitCornerRadiusPx:K,lineStrokeWidth:we,connectorCornerRadiusPx:Ee,pointFormatter:L,connectors:H,mergeConnectors:B,cullConnectorPath:oe,mapOrientation:ze,looseCableConnectors:Ae=!1,flushCameraReactTick:Oe,setManuallyOpenedClumps:Ze,setManuallyClosedClumps:Je,onCommitCardClick:Xt,unpushedCommitShasSetByBranch:qt,checkedOutHeadSha:Dt}){const[It,nn]=y.useState(new Set),sn=y.useRef(null);y.useEffect(()=>{const ce=new Set;X.forEach((qe,Xe)=>{(A.has(Xe)||!$.has(Xe)&&!T.has(Xe))&&ce.add(Xe)});const Ce=sn.current;if(Ce==null){sn.current=ce;return}const Me=[];if(ce.forEach(qe=>{Ce.has(qe)||Me.push(qe)}),Me.length>0){nn(Xe=>{const Ie=new Set(Xe);return Me.forEach(ct=>Ie.add(ct)),Ie});const qe=window.setTimeout(()=>{nn(Xe=>{const Ie=new Set(Xe);return Me.forEach(ct=>Ie.delete(ct)),Ie})},260);return sn.current=ce,()=>{window.clearTimeout(qe)}}sn.current=ce},[X,$,T,A]);const Ge=(ce,Ce)=>{const Me=Ce.zIndex-ce.zIndex;if(Me!==0)return Me;const qe=Math.min(ce.fromY,ce.toY),Xe=Math.min(Ce.fromY,Ce.toY),Ie=qe-Xe;return Ie!==0?Ie:ce.id.localeCompare(Ce.id)},yt=B.filter(ce=>oe(ce)).sort(Ge),ae=H.filter(ce=>oe(ce)).sort(Ge);return r.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:r.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:r.jsxs("div",{ref:o,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[j.filter(ce=>N(ce)).map(ce=>{var Nt,Et,Pt,_t,tt;const Ce=P.get(ce.commit.visualId),Me=Ce?A.has(Ce)||!$.has(Ce)&&!T.has(Ce):!1,qe=Ce?W.get(Ce)===ce.commit.visualId:!1,Xe=Ce!=null&&Me&&!qe&&It.has(Ce),Ie=Ce&&(Nt=X.get(Ce))!=null?Nt:1,ct=q.has(ce.commit.id),pt=(Et=ne.get(ce.commit.id))!=null?Et:[],Ve=pt.length>0&&!ct,Ye=b.includes(ce.commit.id),I=ce.commit.id==="WORKING_TREE"||ce.commit.kind==="uncommitted",Z=ce.commit.kind==="stash"||ce.commit.id.startsWith("STASH:"),ge=I||((_t=(Pt=qt.get(ce.commit.branchName))==null?void 0:Pt.has(ce.commit.id))!=null?_t:!1),Ue=(I||Dt!=null&&ce.commit.id===Dt)&&!Ye,We=Ue?"text-[#38BDF2]":Ye?"text-[#158EFC]":"text-muted-foreground",Ne=Ue?{color:"#38BDF2"}:Ye?{color:"#158EFC"}:void 0;return r.jsxs(pw,{fadeIn:Xe,dataCommitCard:"true",className:Ks("group absolute z-20 cursor-pointer",S&&!C.has(ce.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&C.has(ce.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===ce.commit.id?"z-30 scale-[1.015]":""),style:{left:ce.x,top:ce.y,width:Es,height:Cc+yo+4,overflow:"visible"},onClick:Ot=>Xt(Ot,ce),children:[r.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:r.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[r.jsxs("div",{className:Ks("min-w-0 h-4 flex-1 text-sm font-medium leading-none",We,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ne,children:[ce.commit.branchName,"/",ce.commit.id.slice(0,7)]}),qe&&Ie>1?r.jsx("button",{type:"button",onMouseDown:Ot=>{Ot.stopPropagation()},onClick:Ot=>{if(Ot.stopPropagation(),Ot.preventDefault(),!Ce)return;!$.has(Ce)?(Ze(Qt=>{if(!Qt.has(Ce))return Qt;const Ke=new Set(Qt);return Ke.delete(Ce),Ke}),Je(Qt=>{const Ke=new Set(Qt);return Ke.has(Ce)?Ke.delete(Ce):Ke.add(Ce),Ke})):(Je(Qt=>{if(!Qt.has(Ce))return Qt;const Ke=new Set(Qt);return Ke.delete(Ce),Ke}),Ze(Qt=>{const Ke=new Set(Qt);return Ke.has(Ce)?Ke.delete(Ce):Ke.add(Ce),Ke})),Oe()},className:Ks("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",We),style:Ne,children:Me?r.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Ie}`}):null]})}),r.jsx("div",{className:Ks("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",Ue&&!ge&&!Z?"bg-[#EBF7FE]":Ye&&!ge&&!Z?"bg-[#E5F0FF]":ge||Z?"bg-transparent":"bg-[#F5F5F5]",Z||I?"border-dashed":"",te.has(ce.commit.id)||G.has(ce.commit.id)||de.has(ce.commit.id)?z:le.has(ce.commit.id)?_e:((tt=be.get(ce.commit.branchName))==null?void 0:tt.id)===ce.commit.id?"border-amber-500":Ve?"border-red-500":"",(S&&C.has(ce.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Z||I?we*(2/1.5):we}px`,borderColor:Ue?"#38BDF2":Ye?"#158EFC":Wh,borderTopLeftRadius:0,borderTopRightRadius:`${K}px`,borderBottomRightRadius:`${K}px`,borderBottomLeftRadius:`${K}px`},children:r.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[r.jsxs("div",{className:"min-h-0 flex-1",children:[r.jsx("div",{className:Ks("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",We,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ne,children:qe&&Me?ce.commit.message:qe&&Ie>1?`${ce.commit.message} +${Ie-1}`:ce.commit.message}),r.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:Ve?r.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:pt.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?r.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[r.jsxs("div",{className:Ks("text-sm font-medium",We),style:Ne,children:["@",ce.commit.author]}),r.jsx("div",{className:Ks("text-sm font-medium",We),style:Ne,children:new Date(ce.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(k==null?void 0:k.commit.id)===ce.commit.id&&S?r.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:w,children:"Search result"}):null]})})]},ce.commit.visualId)}),r.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[yt.map(ce=>{const{fromX:Ce,fromY:Me,toX:qe,toY:Xe}=ce,Ie=Ae?by(Ce,Me,qe,Xe,L,ce.fromFace,ce.toFace):ze==="horizontal"?yy(Ce,Me,qe,Xe,Ee,L,0):$v({laneX:Ce,tipY:Me,mergeX:qe,mergeY:Xe,cornerR:Ee,pointFormatter:L});return r.jsx("path",{d:Ie,fill:"none",stroke:Wh,strokeWidth:we,strokeLinecap:"round",strokeLinejoin:"round"},ce.id)}),ae.map(ce=>{const{fromX:Ce,fromY:Me,toX:qe,toY:Xe}=ce;let Ie;return Ae?Ie=by(Ce,Me,qe,Xe,L,ce.fromFace,ce.toFace):Ie=ze==="horizontal"&&Gv(Ce,Me,qe,Xe)?qv(Ce,Me,qe,Xe,Ee,L,0):yy(Ce,Me,qe,Xe,Ee,L,0),r.jsx("path",{d:Ie,fill:"none",stroke:Wh,strokeWidth:we,strokeLinecap:"round",strokeLinejoin:"round"},ce.id)})]})]})})})}function gw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:o,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:C,onCreateBranchFromNode:k,onMergeRefsIntoBranch:j,selectedPushTargets:N,selectedPushLabel:A,canPushCurrentBranch:T,pushCurrentBranchLabel:$,pushableRemoteBranchCount:W,deletableSelectionCount:P,canCreateRootBranch:X,selectedCommitTargetOption:q,mergeInProgress:ne,setMergeTargetCommitSha:le,worktrees:G,currentRepoPath:te,worktreeMenuOpen:de,setWorktreeMenuOpen:be,onSwitchToWorktree:z,onRemoveWorktree:_e,removeWorktreeInProgress:K,setCommitDialogOpen:we,setDeleteConfirmOpen:Ee,setNewBranchDialogOpen:L}){const H=t.length>0;return r.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[r.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[r.jsx("button",{type:"button",onClick:()=>we(!0),disabled:!g||o||H||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),r.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||o||H||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),r.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||H||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),r.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!T||H||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),r.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||W<2||H||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),r.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(N.map(B=>({branchName:B.branchName,targetSha:B.targetSha})))),disabled:!S||N.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:N.length>0?A:"Select commits to push",children:N.length>0?A:"Push selected"}),r.jsx("button",{type:"button",onClick:()=>Ee(!0),disabled:!C||P===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),r.jsx("button",{type:"button",onClick:()=>L(!0),disabled:!k&&!X||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&q.options.length>0&&q.targetBranch&&j?r.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[r.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),q.options.map(B=>{const oe=B.targetBranch===q.targetBranch;return r.jsx("button",{type:"button",onClick:()=>le(B.targetSha),className:Ks("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",oe?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:B.targetBranch},`merge-${B.targetBranch}`)}),r.jsx("button",{type:"button",onClick:()=>void j(q.sources,q.targetBranch),disabled:q.sources.length===0||ne,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:ne?"Merging...":"Confirm"})]}):null,G.length>0&&(z||_e)?r.jsxs("div",{className:"pointer-events-auto relative",children:[r.jsxs("button",{type:"button",onClick:()=>be(B=>!B),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[G.length," ",G.length===1?"Worktree":"Worktrees"]}),de?r.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:G.map(B=>{var oe;return r.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:B.path,children:Am(B,te)?mw(B.path):"This window"}),r.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(oe=B.branchName)!=null?oe:"detached"," • ",B.headSha.slice(0,7)]})]}),Am(B,te)?r.jsxs("div",{className:"flex items-center gap-1",children:[z?r.jsx("button",{type:"button",onClick:()=>{be(!1),z(B.path)},disabled:K||B.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,_e?r.jsx("button",{type:"button",onClick:()=>void _e(B.path,B.isPrunable),disabled:K,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:K?"...":"Remove"}):null]}):null]},B.path)})}):null]}):null]})}function yw({isOpen:t,onToggle:n,onClose:o,looseCableConnectors:a,onLooseCableConnectorsChange:c,visibleBounds:u,renderedNodeCount:d,totalNodeCount:h,renderedMergeConnectorCount:p,totalMergeConnectorCount:g,renderedConnectorCount:_,totalConnectorCount:x,mapGridCullViewportInsetScreenPx:b,debugRows:w,branchDebugRows:S,connectorDecisions:C}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:r.jsx("button",{type:"button",onClick:n,className:Ks("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?r.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),r.jsx("button",{type:"button",onClick:o,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),r.jsxs("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:[r.jsxs("label",{className:"mb-3 flex cursor-pointer items-start gap-2 rounded-lg border border-border/40 bg-muted/15 px-3 py-2.5",children:[r.jsx("input",{type:"checkbox",checked:a,onChange:k=>c(k.target.checked),className:"mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"}),r.jsxs("span",{children:[r.jsx("span",{className:"block text-sm font-medium text-foreground",children:"Loose cable connectors"}),r.jsxs("span",{className:"mt-0.5 block text-xs text-muted-foreground",children:["Smooth cubic paths instead of elbows. Persists in localStorage (",r.jsx("code",{className:"rounded bg-muted/50 px-1 py-0.5 text-[10px]",children:Dm}),"). Optional URL flag:"," ",r.jsx("code",{className:"rounded bg-muted/50 px-1 py-0.5 text-[10px]",children:"?looseCables=1"})]})]})]}),r.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${b}px screen/side): ${u?`${(u.right-u.left).toFixed(0)} x ${(u.bottom-u.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${d} / ${h}`,`Rendered merge connectors: ${p} / ${g}`,`Rendered connectors: ${_} / ${x}`,"",...w,...S,"",...C.map(k=>`${k.rendered?"rendered":"skipped"} [${k.kind}] ${k.parent.slice(0,7)} -> ${k.child.slice(0,7)} (${k.reason})`)].join(`
`)})]})]}):null]})}function xw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:o,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:C,onNewBranchCreateModeChange:k,onNewBranchDialogClose:j,onNewBranchConfirm:N,selectedCommitCanCreateBranch:A,createBranchFromNodeInProgress:T}){return r.jsxs(r.Fragment,{children:[t?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),r.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),r.jsx("textarea",{value:n,onChange:$=>o($.target.value),onKeyDown:$=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),r.jsx("div",{className:"mt-3 space-y-1.5",children:h.map($=>r.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:$},$))}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),r.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[r.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:Ks("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),r.jsx("button",{type:"button",onClick:()=>k("new-root"),className:Ks("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),r.jsx("input",{value:w,onChange:$=>C($.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:j,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:N,disabled:!w.trim()||T||S==="from-selected-node"&&!A,className:Ks("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:T?"Creating...":"Create"})]})]})}):null]})}function bw({mapPadHostRef:t,transformLayerRef:n}){const o=y.useRef({x:0,y:0}),a=y.useRef(Jl),c=y.useRef({panX:0,panY:0,zoom:Jl}),u=y.useRef(null),d=y.useRef(Jl),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(Jl),[b,w]=y.useState(0),S=y.useRef(null),C=y.useRef(0),k=y.useCallback(()=>{const q=t.current;if(!q)return null;const ne=q.getBoundingClientRect(),le=getComputedStyle(q),G=Number.parseFloat(le.borderLeftWidth)||0,te=Number.parseFloat(le.borderTopWidth)||0,de=Number.parseFloat(le.paddingLeft)||Sd,be=Number.parseFloat(le.paddingTop)||Sd;return{x:ne.left+G+de,y:ne.top+te+be}},[t]),j=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(q=>q+1)}),C.current=performance.now()},[]),N=y.useCallback((q,ne,le)=>{const G=c.current;c.current={panX:q,panY:ne,zoom:le};const te=n.current;if(te&&(te.style.transform=`translate3d(${q}px, ${ne}px, 0) scale(${le/ha})`),Math.abs(d.current-le)>Yh&&(d.current=le,x(le)),Math.abs(le-G.zoom)>Yh){j();return}const z=performance.now()-C.current;if(z>=vy){j();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,j()},vy-z)},[j,n]),A=y.useRef(null),T=y.useCallback(()=>{u.current!=null||!A.current||(u.current=window.requestAnimationFrame(A.current))},[]),$=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),W=y.useCallback((q,ne,le)=>{o.current={x:q,y:ne},a.current=le,$(),T()},[$,T]);A.current=()=>{u.current=null;const q=c.current,ne=o.current.x,le=o.current.y,G=a.current,te=Math.abs(ne-q.panX)<=Sy?ne:q.panX+(ne-q.panX)*wy,de=Math.abs(le-q.panY)<=Sy?le:q.panY+(le-q.panY)*wy,be=Math.abs(G-q.zoom)<=Yh?G:q.zoom+(G-q.zoom)*nw;N(te,de,be),te!==ne||de!==le||be!==G?A.current&&(u.current=window.requestAnimationFrame(A.current)):j()};const P=y.useCallback((q,ne,le)=>{const G=aw(le),te=c.current,de=k();if(!de){W(o.current.x,o.current.y,G);return}const be=q-de.x,z=ne-de.y,_e=te.zoom/ha,K=G/ha,we=(be-te.panX)/_e,Ee=(z-te.panY)/_e;W(be-we*K,z-Ee*K,G)},[k,W]),X=y.useCallback(q=>{if(q.preventDefault(),q.ctrlKey||q.metaKey){const ne=Math.exp(-q.deltaY*ew);P(q.clientX,q.clientY,a.current*ne);return}W(o.current.x-q.deltaX,o.current.y-q.deltaY,a.current)},[W,P]);return y.useLayoutEffect(()=>(N(0,0,Jl),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[N]),y.useLayoutEffect(()=>{const q=n.current;if(!q)return;const ne=c.current;q.style.transform=`translate3d(${ne.panX}px, ${ne.panY}px, 0) scale(${ne.zoom/ha})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:j,syncCamera:W,handleWheel:X}}function vw(t){const n=Math.min(t.startX,t.currentX),o=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:o,width:a,height:c}}function ww({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:o,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[C,k]=y.useState(null),j=y.useCallback(A=>{const T=t.current,$=o();if(!T||!$)return[];const W=T.getBoundingClientRect(),P=n.current.zoom/ha;if(P<=0)return[];const X=[],q=A.left,ne=A.left+A.width,le=A.top,G=A.top+A.height;for(const te of a){if(!c(te))continue;const de=$.x+n.current.panX+te.x*P-W.left,be=$.y+n.current.panY+te.y*P-W.top,z=de+Es*P,_e=be+(Cc+yo)*P;!(z<q||de>ne||_e<le||be>G)&&X.push(te.commit.id)}return X},[o,a,n,t,c]),N=y.useCallback(A=>{if(A.button!==0)return;const T=A.target;if(T!=null&&T.closest("[data-commit-card]")||T!=null&&T.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;A.preventDefault();const W=$.getBoundingClientRect(),P=A.clientX-W.left,X=A.clientY-W.top;d.current={startX:P,startY:X,currentX:P,currentY:X,additive:A.metaKey||A.ctrlKey},h.current=!1,p.current=A.metaKey||A.ctrlKey?w:[],_(!0),b({left:P,top:X,width:0,height:0})},[t,w]);return y.useEffect(()=>{const A=$=>{var le;const W=d.current;if(!W)return;const P=t.current;if(!P)return;const X=P.getBoundingClientRect();W.currentX=$.clientX-X.left,W.currentY=$.clientY-X.top,!h.current&&(Math.abs(W.currentX-W.startX)>2||Math.abs(W.currentY-W.startY)>2)&&(h.current=!0);const q=vw(W);b(q);const ne=j(q);S(W.additive?Array.from(new Set([...p.current,...ne])):Array.from(new Set(ne))),W.additive||k((le=ne[ne.length-1])!=null?le:null)},T=()=>{if(d.current){const $=h.current;d.current=null,h.current=!1,_(!1),b(null),$||(S([]),k(null));return}u()};return window.addEventListener("mousemove",A),window.addEventListener("mouseup",T),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",T)}},[j,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:C,setMergeTargetCommitSha:k,startMarqueeDrag:N}}function Ty({branches:t,mergeNodes:n=[],directCommits:o=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:C,mergeInProgress:k=!1,onPushAllBranches:j,onPushCurrentBranch:N,onPushCommitTargets:A,pushInProgress:T=!1,onDeleteSelection:$,deleteInProgress:W=!1,worktrees:P=[],currentRepoPath:X,onRemoveWorktree:q,removeWorktreeInProgress:ne=!1,onSwitchToWorktree:le,onStashLocalChanges:G,stashInProgress:te=!1,stashDisabled:de=!1,onCommitLocalChanges:be,commitInProgress:z=!1,commitDisabled:_e=!1,onStageAllChanges:K,stageInProgress:we=!1,onCreateBranchFromNode:Ee,onCreateRootBranch:L,createBranchFromNodeInProgress:H=!1,orientation:B="horizontal",branchCommitPreviews:oe={},branchUniqueAheadCounts:ze={},gridSearchQuery:Ae="",gridSearchJumpToken:Oe=0,gridFocusSha:Ze=null,checkedOutRef:Je=null,onGridSearchResultCountChange:Xt,onGridSearchFocusChange:qt,onInteractionChange:Dt,manuallyOpenedClumps:It,manuallyClosedClumps:nn,setManuallyOpenedClumps:sn,setManuallyClosedClumps:Ge,layoutModel:yt}){var Sn,ps,Do,Ho,vo,$i,qa,Ki,Ao,xr;const ae=y.useRef(null),ce=y.useRef(null),Ce=y.useRef(null),[Me,qe]=y.useState(!1),[Xe,Ie]=y.useState(!1),[ct,pt]=y.useState(""),[Ve,Ye]=y.useState(!1),[I,Z]=y.useState(!1),[ge,ke]=y.useState(""),[Ue,We]=y.useState("from-selected-node"),[Ne,Nt]=y.useState(()=>new Set),[Et,Pt]=y.useState(()=>new Set),_t=It!=null?It:Ne,tt=nn!=null?nn:Et,Ot=sn!=null?sn:Nt,on=Ge!=null?Ge:Pt,[Qt,Ke]=y.useState(!1),[Ut,Jt]=y.useState(()=>{if(typeof window>"u")return!1;try{const Pe=new URLSearchParams(window.location.search).get("looseCables");return Pe==="1"||Pe==="true"?!0:Pe==="0"||Pe==="false"?!1:localStorage.getItem(Dm)==="1"}catch{return!1}}),Ht=y.useCallback(Pe=>{Jt(Pe);try{localStorage.setItem(Dm,Pe?"1":"0")}catch{}},[]),[An,at]=y.useState(null),[Wt,Tn]=y.useState(null),{isCameraMoving:jn,renderedZoom:Zn,cameraRenderTick:Ms,renderedCameraRef:Jn,interactionIdleTimeoutRef:rs,getTransformLayerOriginScreen:mn,flushCameraReactTick:Yn,syncCamera:xn,handleWheel:Wn}=bw({mapPadHostRef:ce,transformLayerRef:Ce}),nt=y.useMemo(()=>Bx(t,d,oe),[t,d,oe]),ws=y.useMemo(()=>Ox({lanes:nt,branches:t,mergeNodes:n,directCommits:o,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:oe,branchUniqueAheadCounts:ze,manuallyOpenedClumps:_t,manuallyClosedClumps:tt,isDebugOpen:Qt,gridSearchQuery:Ae,gridFocusSha:Ze,checkedOutRef:Je!=null?Je:null,orientation:B}),[nt,t,n,o,a,d,oe,ze,_t,tt,Qt,Ae,Ze,(Sn=Je==null?void 0:Je.headSha)!=null?Sn:null,(ps=Je==null?void 0:Je.branchName)!=null?ps:null,B]),Ko=yt!=null?yt:ws,{allCommits:Qo,debugRows:to,branchDebugRows:Co,clusterKeyByCommitId:co,leadByClusterKey:Bn,clusterCounts:no,matchingNodes:so,matchingNodeIds:oo,normalizedSearchQuery:Nn,focusedNode:Qs,defaultCollapsedClumps:io,renderNodes:Rn,visibleNodesBySha:hs,contentWidth:Io,contentHeight:Zo,connectors:ao,mergeConnectors:uo,connectorDecisions:fo,nodeWarnings:Ts,commitIdsWithRenderedAncestry:Vs,connectorParentShas:On,branchStartShas:bi,branchOffNodeShas:Li,crossBranchOutgoingShas:Jo,branchBaseCommitByName:Bi,pointFormatter:jo}=Ko,vi=!!Nn,Hn=Zn/ha,ho=y.useMemo(()=>({transform:`scale(${1/Hn})`,transformOrigin:"top left",width:`${100*Hn}%`,height:`${100*Hn}%`}),[Hn]),En=-(20/Hn),ro=y.useMemo(()=>{const Pe=new Map;for(const dt of Rn)Pe.set(dt.commit.visualId,dt);return Pe},[Rn]),ms=y.useMemo(()=>dw(Rn,En),[Rn,En]),es=Pe=>{var Rt;const dt=Pe.commit.id,kt=Pe.commit.visualId;if(vi&&oo.has(dt)||(Qs==null?void 0:Qs.commit.id)===dt||An===null)return!0;if(!An.has(kt))return!1;const mt=co.get(kt);return mt&&((Rt=no.get(mt))!=null?Rt:1)>1&&(_t.has(mt)||!io.has(mt)&&!tt.has(mt)),!0},wi=1.5/Hn,Ss=sw,Mo=ow/Hn,en=y.useMemo(()=>({transform:`scale(${1/Hn})`,transformOrigin:"center"}),[Hn]),Po="border-slate-400/70",Ds="border-blue-500",To=y.useMemo(()=>new Map(t.map(Pe=>[Pe.name,Pe])),[t]);y.useMemo(()=>new Set(t.filter(Pe=>Pe.commitsAhead===0&&!Pe.name.startsWith("*")).map(Pe=>Pe.name)),[t]);const ei=y.useMemo(()=>{var dt,kt;const Pe=new Map;for(const mt of Rn){const Rt=(dt=Pe.get(mt.commit.id))!=null?dt:new Set;Rt.add(mt.commit.branchName),Pe.set(mt.commit.id,Rt)}for(const mt of o){const Rt=(kt=Pe.get(mt.fullSha))!=null?kt:new Set;Rt.add(d),Pe.set(mt.fullSha,Rt)}return Pe},[Rn,o,d]),Eo=y.useMemo(()=>new Map(Object.entries(c).map(([Pe,dt])=>[Pe,new Set(dt)])),[c]),J=y.useCallback(()=>{rs.current,Yn()},[Yn,rs]),{isMarqueeSelecting:he,marqueeRect:je,selectedCommitShas:Se,setSelectedCommitShas:ot,mergeTargetCommitSha:bt,setMergeTargetCommitSha:rt,startMarqueeDrag:Ft}=ww({scrollContainerRef:ae,renderedCameraRef:Jn,getTransformLayerOriginScreen:mn,renderNodes:Rn,shouldRenderNode:es,onPointerReleaseNoMarquee:J}),zt=y.useMemo(()=>new Set(Rn.map(Pe=>Pe.commit.id)),[Rn]),cn=y.useMemo(()=>Se.filter(Pe=>zt.has(Pe)),[Se,zt]),Xn=y.useCallback((Pe,dt)=>{var Rt;if(!dt)return!1;if(((Rt=oe[Pe])!=null?Rt:[]).some(Lt=>bo(Lt.fullSha,dt)||bo(Lt.sha,dt)))return!0;const mt=To.get(Pe);return!!(mt!=null&&mt.headSha&&bo(mt.headSha,dt))},[oe,To]),fn=(Do=Je==null?void 0:Je.branchName)!=null?Do:null,_n=(Ho=Je==null?void 0:Je.headSha)!=null?Ho:null,qn=fn==null,As=y.useCallback((Pe,dt,kt)=>{for(const mt of P){if(!qh(mt,X))continue;if(mt.branchName){if(mt.branchName===Pe&&bo(mt.headSha,dt))return mt;continue}if(!bo(mt.headSha,dt)&&!bo(mt.headSha,kt))continue;if(mt.parentSha&&Xn(Pe,mt.parentSha)||Xn(Pe,mt.headSha))return mt;const Rt=To.get(Pe);if(Rt&&bo(Rt.headSha,mt.headSha)||Pe===d&&o.some(Lt=>bo(Lt.fullSha,mt.headSha)))return mt}return null},[P,X,Xn,To,d,o]),Vt=y.useCallback(Pe=>{for(const dt of P)if(qh(dt,X)&&dt.branchName===Pe)return dt;return null},[P,X]),E=y.useCallback((Pe,dt)=>{for(const kt of P)if(qh(kt,X)&&(bo(kt.headSha,Pe)||bo(kt.headSha,dt)))return kt;return null},[P,X]),Y=y.useCallback(Pe=>{var dt;return Array.from((dt=ei.get(Pe))!=null?dt:[])},[ei]),se=y.useMemo(()=>{var Rt,Lt,$n,gn;const Pe=new Map;for(const Ls of cn){const Us=Y(Ls);if(Us.length===0)continue;const Vo=(Rt=Us.find(No=>No!==d))!=null?Rt:Us[0],br=cn.filter(No=>No!==Ls).filter(No=>!new Set(Y(No)).has(Vo));Pe.set(Vo,{targetSha:Ls,targetBranch:Vo,sourceRefs:br})}const dt=Array.from(Pe.values()),kt=bt?dt.find(Ls=>{var Us;return Ls.targetSha===bt||Ls.targetBranch===((Us=Y(bt)[0])!=null?Us:"")}):null,mt=(Lt=kt!=null?kt:dt[dt.length-1])!=null?Lt:null;return{options:dt,selected:mt,targetBranch:($n=mt==null?void 0:mt.targetBranch)!=null?$n:null,sources:(gn=mt==null?void 0:mt.sourceRefs)!=null?gn:[]}},[cn,Y,d,bt]),re=y.useMemo(()=>{const Pe=[...fn===d?[{name:d,headSha:_n!=null?_n:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(dt=>!dt.name.startsWith("*")&&dt.unpushedCommits>0&&dt.remoteSyncStatus!=="on-github").map(dt=>[dt.name,dt]);return new Map(Pe)},[t,fn,_n,d,a.length]),pe=y.useMemo(()=>{const Pe=mt=>{var Lt;const Rt=Y(mt).filter($n=>re.has($n));return Rt.length===0?null:Rt.length===1?Rt[0]:fn&&Rt.includes(fn)?fn:(Lt=Rt.find($n=>$n!==d))!=null?Lt:Rt[0]},dt=mt=>{var Rt;return mt===d?a.map(Lt=>{var $n,gn;return{fullSha:Lt.fullSha,sha:Lt.sha,parentSha:($n=Lt.parentSha)!=null?$n:null,message:Lt.message,author:Lt.author,date:Lt.date,kind:(gn=Lt.kind)!=null?gn:"commit"}}):(Rt=oe[mt])!=null?Rt:[]},kt=new Map;for(const mt of cn){const Rt=Pe(mt);if(!Rt)continue;const Lt=re.get(Rt);if(!Lt)continue;const $n=dt(Rt).slice(0,Lt.unpushedCommits),gn=$n.findIndex(Us=>Us.fullSha===mt);if(gn===-1)continue;const Ls=kt.get(Rt);(!Ls||gn<Ls.targetIndex)&&kt.set(Rt,{branchName:Rt,targetSha:mt,targetIndex:gn,commitCount:$n.length-gn})}return Array.from(kt.values())},[cn,Y,re,fn,d,a,oe]),Le=y.useMemo(()=>Array.from(new Set(cn.map(Pe=>/^STASH:(\d+)$/.exec(Pe)).filter(Pe=>!!Pe).map(Pe=>parseInt(Pe[1],10)))).sort((Pe,dt)=>Pe-dt),[cn]),st=cn.includes("WORKING_TREE"),ut=(st?1:0)+Le.length,ft=[...st?["Uncommitted changes"]:[],...Le.map(Pe=>`Stash ${Pe+1}`)],ht=re.size,it=!qn&&!!fn&&re.has(fn),Tt=fn?`Push ${fn}`:"Push current branch",Gt=pe.length===1?pe[0].commitCount>1?`Push ${pe[0].commitCount} commits on ${pe[0].branchName}`:`Push ${pe[0].targetSha.slice(0,7)} on ${pe[0].branchName}`:`Push ${pe.length} selected ranges`;y.useEffect(()=>{Dt==null||Dt(jn||he)},[jn,he,Dt]),y.useEffect(()=>{Xt==null||Xt(Nn?so.length:null)},[so.length,Nn,Xt]),y.useEffect(()=>{var dt,kt;if(!Nn){qt==null||qt(null);return}const Pe=(kt=(dt=so[0])==null?void 0:dt.commit.id)!=null?kt:null;qt==null||qt(Pe)},[so,Nn,qt]),y.useLayoutEffect(()=>{if(!Ze)return;const Pe=ae.current,dt=Qs;if(!Pe||!dt)return;const kt=mn();if(!kt)return;const mt=Pe.getBoundingClientRect(),Rt=Jn.current.zoom,Lt=Rt/ha,$n=dt.x+Es/2,gn=dt.y+Cc+yo/2,Ls=mt.left+mt.width/2,Us=mt.top+mt.height/2;xn(Ls-kt.x-$n*Lt,Us-kt.y-gn*Lt,Rt)},[Ze,Oe,Qs,mn]);const bn=(qa=($i=Wt==null?void 0:Wt.width)!=null?$i:(vo=ae.current)==null?void 0:vo.clientWidth)!=null?qa:0,ds=(xr=(Ao=Wt==null?void 0:Wt.height)!=null?Ao:(Ki=ae.current)==null?void 0:Ki.clientHeight)!=null?xr:0,Ns=bn>0&&ds>0?Cy(bn,ds,Jn.current,{innerPaddingPx:Sd}):null,ks=Ns!=null?jy(Ns,Jn.current.zoom):null,Rs=Pe=>{if(!ks)return!0;const{fromX:dt,fromY:kt,toX:mt,toY:Rt}=Pe;return Ut?cw(dt,kt,mt,Rt,ks,Pe.fromFace,Pe.toFace):Pe.id.startsWith("merge:")?B==="horizontal"?ky(dt,kt,mt,Rt,Ss,Xh,ks):uw(dt,kt,mt,Rt,Ss,ks):B==="horizontal"&&Math.abs(Rt-kt)>Math.abs(mt-dt)?lw(dt,kt,mt,Rt,Ss,Xh,ks):ky(dt,kt,mt,Rt,Ss,Xh,ks)};y.useLayoutEffect(()=>{var $n;const Pe=ae.current;if(!Pe||Pe.clientWidth<=0||Pe.clientHeight<=0)return;const dt=Pe.clientWidth,kt=Pe.clientHeight;Tn(gn=>(gn==null?void 0:gn.width)===dt&&(gn==null?void 0:gn.height)===kt?gn:{width:dt,height:kt});const mt=Cy(dt,kt,Jn.current,{innerPaddingPx:Sd});if(!mt){at(gn=>gn===null?gn:null);return}const Rt=jy(mt,Jn.current.zoom),Lt=fw(ms,Rt,ro,En);for(const gn of Rn){const Ls=co.get(gn.commit.visualId);if(!Ls||(($n=no.get(Ls))!=null?$n:1)<=1)continue;(_t.has(Ls)||!io.has(Ls)&&!tt.has(Ls))&&Lt.add(gn.commit.visualId)}at(gn=>rw(gn,Lt)?gn:Lt)},[Zn,Oe,Ze,jn,Ms,_t,tt,io,co,no,Rn,Wt,ms,ro,En]),y.useLayoutEffect(()=>{const Pe=ae.current;if(!Pe)return;const dt=()=>{const mt=Pe.clientWidth,Rt=Pe.clientHeight;mt<=0||Rt<=0||Tn(Lt=>(Lt==null?void 0:Lt.width)===mt&&(Lt==null?void 0:Lt.height)===Rt?Lt:{width:mt,height:Rt})};dt();const kt=new ResizeObserver(dt);return kt.observe(Pe),()=>kt.disconnect()},[Qo.length]);const an=Rn.filter(Pe=>es(Pe)).length,zn=uo.filter(Pe=>Rs(Pe)).length,Cs=ao.filter(Pe=>Rs(Pe)).length,$s=y.useCallback((Pe,dt)=>{Pe.stopPropagation();const kt=dt.commit.id;if(Pe.shiftKey?(ot($n=>$n.includes(kt)?$n.filter(gn=>gn!==kt):[...$n,kt]),rt(kt)):(ot($n=>$n.includes(kt)?[]:[kt]),rt($n=>$n===kt?null:kt)),!(Pe.metaKey||Pe.ctrlKey||Pe.detail>=2)||kt==="WORKING_TREE")return;const Rt=kt.length>=40?kt.slice(0,7):kt;let Lt=null;if(dt.commit.branchName?(Lt=As(dt.commit.branchName,kt,Rt),Lt||(Lt=Vt(dt.commit.branchName))):Lt=E(kt,Rt),Lt&&le){le(Lt.path);return}h==null||h({commitSha:kt})},[E,As,Vt,h,le]),jt=y.useCallback(async()=>{if(!be)return;await be(ct)&&(Ie(!1),pt(""))},[be,ct]),Oi=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:st,stashIndices:Le}),Ye(!1),ot([]),rt(null))},[$,st,Le]),zi=y.useCallback(async()=>{const Pe=ge.trim();if(Pe){if(Ue==="new-root"){if(!L)return;await L(Pe)}else{if(!Ee||cn.length!==1)return;const dt=cn[0];if(!(dt==="WORKING_TREE"||dt.startsWith("STASH:")))return;await Ee(dt,Pe)}Z(!1),ke(""),We("from-selected-node"),ot([]),rt(null)}},[Ue,ge,Ee,L,cn]),Gi=cn.length===1&&(cn[0]==="WORKING_TREE"||cn[0].startsWith("STASH:")),Si=!!L;return y.useEffect(()=>{if(I){if(!Gi&&Si){We("new-root");return}Gi&&We("from-selected-node")}},[Si,I,Gi]),r.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[r.jsx(yw,{isOpen:Qt,onToggle:()=>Ke(Pe=>!Pe),onClose:()=>Ke(!1),looseCableConnectors:Ut,onLooseCableConnectorsChange:Ht,visibleBounds:ks,renderedNodeCount:an,totalNodeCount:Rn.length,renderedMergeConnectorCount:zn,totalMergeConnectorCount:uo.length,renderedConnectorCount:Cs,totalConnectorCount:ao.length,mapGridCullViewportInsetScreenPx:tw,debugRows:to,branchDebugRows:Co,connectorDecisions:fo}),Qo.length===0?r.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:r.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):r.jsx(_w,{scrollContainerRef:ae,mapPadHostRef:ce,transformLayerRef:Ce,isMarqueeSelecting:he,contentWidth:Io,contentHeight:Zo,isCameraMoving:jn,onWheel:Wn,onMouseDown:Ft,labelTopPx:En,inverseZoomStyle:ho,displayZoom:Hn,iconScaleStyle:en,selectedVisibleCommitShas:cn,normalizedSearchQuery:Nn,matchingNodeIds:oo,focusedNode:Qs,renderNodes:Rn,shouldRenderNode:es,manuallyOpenedClumps:_t,manuallyClosedClumps:tt,defaultCollapsedClumps:io,leadByClusterKey:Bn,clusterKeyByCommitId:co,clusterCounts:no,commitIdsWithRenderedAncestry:Vs,nodeWarnings:Ts,connectorParentShas:On,branchStartShas:bi,branchOffNodeShas:Li,crossBranchOutgoingShas:Jo,branchBaseCommitByName:Bi,branchStartAccentClass:Ds,connectorParentAccentClass:Po,commitCornerRadiusPx:Mo,lineStrokeWidth:wi,connectorCornerRadiusPx:Ss,pointFormatter:jo,connectors:ao,mergeConnectors:uo,cullConnectorPath:Rs,mapOrientation:B,looseCableConnectors:Ut,flushCameraReactTick:Yn,setManuallyOpenedClumps:Ot,setManuallyClosedClumps:on,onCommitCardClick:$s,unpushedCommitShasSetByBranch:Eo,checkedOutHeadSha:_n}),je&&he?r.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:je.left,top:je.top,width:je.width,height:je.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,r.jsx(gw,{selectedVisibleCommitShas:cn,commitInProgress:z,commitDisabled:_e,stageInProgress:we,stashInProgress:te,stashDisabled:de,pushInProgress:T,deleteInProgress:W,createBranchFromNodeInProgress:H,onCommitLocalChanges:be,onStageAllChanges:K?()=>void K():void 0,onStashLocalChanges:G,onPushCurrentBranch:N,onPushAllBranches:j,onPushCommitTargets:A,onDeleteSelection:$,onCreateBranchFromNode:Ee,onMergeRefsIntoBranch:C,selectedPushTargets:pe,selectedPushLabel:Gt,canPushCurrentBranch:it,pushCurrentBranchLabel:Tt,pushableRemoteBranchCount:ht,deletableSelectionCount:ut,canCreateRootBranch:Si,selectedCommitTargetOption:se,mergeInProgress:k,mergeTargetCommitSha:bt,setMergeTargetCommitSha:rt,worktrees:P,currentRepoPath:X,worktreeMenuOpen:Me,setWorktreeMenuOpen:qe,onSwitchToWorktree:le,onRemoveWorktree:q,removeWorktreeInProgress:ne,setCommitDialogOpen:Ie,setDeleteConfirmOpen:Ye,setNewBranchDialogOpen:Z}),r.jsx(xw,{commitDialogOpen:Xe,commitMessageDraft:ct,onCommitMessageDraftChange:pt,onCommitDialogClose:()=>Ie(!1),onCommitConfirm:()=>void jt(),commitInProgress:z,deleteConfirmOpen:Ve,deleteSelectionItems:ft,onDeleteConfirmClose:()=>Ye(!1),onDeleteConfirm:()=>void Oi(),deleteInProgress:W,deletableSelectionCount:ut,newBranchDialogOpen:I,newBranchName:ge,newBranchCreateMode:Ue,onNewBranchNameChange:ke,onNewBranchCreateModeChange:We,onNewBranchDialogClose:()=>Z(!1),onNewBranchConfirm:()=>void zi(),selectedCommitCanCreateBranch:Gi,createBranchFromNodeInProgress:H})]})}function Sw({branches:t,mergeNodes:n=[],directCommits:o=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchUniqueAheadCounts:x={},gridSearchQuery:b="",gridSearchJumpToken:w=0,gridFocusSha:S=null,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,view:j="time",isLoading:N=!1,scrollRequest:A,focusedErrorBranch:T,checkedOutRef:$=null,mapTopInsetPx:W=0,onMergeRefsIntoBranch:P,mergeInProgress:X=!1,onPushAllBranches:q,onPushCurrentBranch:ne,onPushCommitTargets:le,pushInProgress:G=!1,onDeleteSelection:te,deleteInProgress:de=!1,worktrees:be=[],currentRepoPath:z,onRemoveWorktree:_e,removeWorktreeInProgress:K=!1,onSwitchToWorktree:we,onStashLocalChanges:Ee,stashInProgress:L=!1,stashDisabled:H=!1,onCommitLocalChanges:B,commitInProgress:oe=!1,commitDisabled:ze=!1,onStageAllChanges:Ae,stageInProgress:Oe=!1,onCreateBranchFromNode:Ze,onCreateRootBranch:Je,createBranchFromNodeInProgress:Xt=!1,onMoveNodeBackToBranch:qt,orientation:Dt="horizontal",onInteractionChange:It,manuallyOpenedClumps:nn,manuallyClosedClumps:sn,setManuallyOpenedClumps:Ge,setManuallyClosedClumps:yt,layoutModel:ae}){const ce=new Set(u.map(Ie=>Ie.branchName)),Ce=14*864e5,Me=Date.now();function qe(Ie){return ce.has(Ie.name)||Me-new Date(Ie.lastCommitDate).getTime()<=Ce}const Xe=t.filter(Ie=>Ie.status==="stale"&&qe(Ie)).sort((Ie,ct)=>new Date(ct.lastCommitDate).getTime()-new Date(Ie.lastCommitDate).getTime());return r.jsx("div",{className:"h-full flex flex-col",children:j==="time"?r.jsx("div",{className:"flex-1 min-h-0",children:r.jsx(Ty,{branches:t,mergeNodes:n,directCommits:o,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchUniqueAheadCounts:x,staleBranches:Xe,isLoading:N,scrollRequest:A,focusedErrorBranch:T,checkedOutRef:$,mapTopInsetPx:W,onMergeRefsIntoBranch:P,mergeInProgress:X,onPushAllBranches:q,onPushCurrentBranch:ne,onPushCommitTargets:le,pushInProgress:G,onDeleteSelection:te,deleteInProgress:de,worktrees:be,currentRepoPath:z,onRemoveWorktree:_e,removeWorktreeInProgress:K,onSwitchToWorktree:we,onStashLocalChanges:Ee,stashInProgress:L,stashDisabled:H,onCommitLocalChanges:B,commitInProgress:oe,commitDisabled:ze,onStageAllChanges:Ae,stageInProgress:Oe,onCreateBranchFromNode:Ze,onCreateRootBranch:Je,createBranchFromNodeInProgress:Xt,onMoveNodeBackToBranch:qt,orientation:Dt,onInteractionChange:It,manuallyOpenedClumps:nn,manuallyClosedClumps:sn,setManuallyOpenedClumps:Ge,setManuallyClosedClumps:yt,layoutModel:ae})}):j==="grid"?r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(Ty,{branches:t,mergeNodes:n,directCommits:o,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchUniqueAheadCounts:x,gridSearchQuery:b,gridSearchJumpToken:w,gridFocusSha:S,checkedOutRef:$,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,onInteractionChange:It,manuallyOpenedClumps:nn,manuallyClosedClumps:sn,setManuallyOpenedClumps:Ge,setManuallyClosedClumps:yt,layoutModel:ae,orientation:Dt})}):null})}function kw(t,n){var u;const o=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(o.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=o.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=o.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function Cw(t,n,o){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of o.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function Ey(t,n,o,a){const c=new Set([a]);if(!(o!=null&&o.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===o.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Nm({branchName:t,depth:n,isLast:o,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:j,onSelectBranch:N}){var B,oe,ze;if(_.has(t)||!a.get(t))return null;const T=(B=d.get(t))!=null?B:null,$=T?T.slice(0,7):"none",W=(oe=u.get(t))!=null?oe:[],P=W.length>0,X=y.useMemo(()=>{var Ae;return[...(Ae=c[t])!=null?Ae:[]]},[c,t]),q=x&&X.length>0,ne=x,le=P||q,G=h.has(t),te=ne?X:[],de=G&&te.length>0,be=g===t,z=new Set(_);z.add(t);const _e="top-[-0.2rem] h-4.5 w-[10px]",K="rounded-bl-[7px]",we="left-[0.65rem]",Ee=new Map,L=[];for(const Ae of W){const Oe=d.get(Ae);if(Oe){const Ze=te.findIndex(Je=>bo(Je.fullSha,Oe)||bo(Je.sha,Oe));if(Ze>=0){const Je=(ze=Ee.get(Ze))!=null?ze:[];Je.push(Ae),Ee.set(Ze,Je);continue}}L.push(Ae)}const H=y.useMemo(()=>{if(!x||te.length===0)return[];const Ae=[];let Oe=[],Ze=null;const Je=()=>{if(Oe.length===0)return;const Xt=Oe[Oe.length-1],qt=`sidebar-single-${t}-${Xt.fullSha}`;Ae.push({key:Ze!=null?Ze:qt,commits:Oe,count:Oe.length,lead:Xt}),Oe=[],Ze=null};return te.forEach(Xt=>{var Dt;const qt=(Dt=S.get(`${t}:${Xt.fullSha}`))!=null?Dt:null;if(Oe.length===0){Oe=[Xt],Ze=qt;return}if(qt===Ze){Oe.push(Xt);return}Je(),Oe=[Xt],Ze=qt}),Je(),Ae},[t,x,te,S]);return r.jsxs("li",{className:Ks("relative",n>0?"pl-4":"pl-0",n===0&&!o?G?"mb-12":"mb-1":""),children:[n>0?r.jsx("span",{"aria-hidden":"true",className:Ks("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border/60",K,we,_e)}):null,!o&&n>0?r.jsx("span",{"aria-hidden":"true",className:Ks("absolute top-0 bottom-[-1rem] border-l-[1.5px] border-border/50",we)}):null,r.jsx("div",{className:"flex items-center gap-1",children:r.jsxs("button",{type:"button",onClick:()=>{le&&p(t),N==null||N(t)},className:Ks("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",be?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[le?r.jsx("span",{className:Ks("inline-block text-[10px] text-muted-foreground transition-transform",G?"rotate-90":""),children:"▶"}):null,r.jsxs("span",{className:"min-w-0 break-words",children:[r.jsx("span",{className:Ks(be?"font-medium text-foreground":"font-normal"),children:t}),r.jsxs("span",{className:"ml-1 text-[10px] text-muted-foreground/80",children:["(parent ",$,")"]})]})]})}),de?r.jsx("ul",{className:"relative space-y-1 pl-4",children:H.map(Ae=>{const Oe=Ae.count>1&&!C(Ae.key);return(Oe?[Ae.lead]:Ae.commits).map(Je=>{var Dt;const Xt=te.findIndex(It=>It.fullSha===Je.fullSha),qt=b(Je.fullSha,w!=null?w:t);return r.jsxs("li",{children:[r.jsxs("div",{className:"flex items-start gap-1",children:[r.jsx("button",{type:"button",onClick:()=>j==null?void 0:j(Je.fullSha),className:"min-w-0 flex-1 break-words rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Je.message,children:Je.message}),Ae.count>1&&Je.fullSha===Ae.lead.fullSha?r.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${Ae.lead.fullSha}`,onClick:()=>k(Ae.key,`${t}:${Ae.lead.fullSha}`),className:Ks("shrink-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",Oe?"":"min-w-[2ch] text-center"),children:Oe?`+${Math.max(1,Ae.count-1)}`:"−"}):null]}),qt.length>0?r.jsx("div",{className:"mt-1 space-y-1",children:qt.map(It=>r.jsxs("div",{className:"min-w-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70",children:[r.jsx("span",{children:"Merged from "}),r.jsx("span",{className:"font-medium text-muted-foreground",children:It})]},`${Je.fullSha}:${It}`))}):null,(Dt=Ee.get(Xt))!=null&&Dt.length?r.jsx("ul",{className:"relative mb-1.75 space-y-2",children:Ee.get(Xt).map((It,nn,sn)=>r.jsx(Nm,{branchName:It,depth:n+1,isLast:nn===sn.length-1&&L.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:It,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:j,onSelectBranch:N},It))}):null]},`${t}:${Je.fullSha}`)})})}):null,P&&G&&L.length>0?r.jsx("ul",{className:"relative mb-3.5 space-y-1",children:L.map((Ae,Oe)=>r.jsx(Nm,{branchName:Ae,depth:n+1,isLast:Oe===L.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Ae,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:j,onSelectBranch:N},Ae))}):null]})}function jw({branches:t,defaultBranch:n,branchCommitPreviews:o,directCommits:a=[],mergeNodes:c=[],checkedOutRef:u,manuallyOpenedClumps:d,manuallyClosedClumps:h,setManuallyOpenedClumps:p,setManuallyClosedClumps:g,gridLayoutModel:_,onSelectCommit:x,onSelectBranch:b,className:w}){var It,nn,sn;const S=y.useRef(null),C=y.useRef(null),[k,j]=y.useState(!0),[N,A]=y.useState(()=>new Set),[T,$]=y.useState(()=>new Set),W=d!=null?d:N,P=h!=null?h:T,X=p!=null?p:A,q=g!=null?g:$,[ne,le]=y.useState(null),[G,te]=y.useState(null),de=y.useMemo(()=>[...a].sort((Ge,yt)=>new Date(Ge.date).getTime()-new Date(yt.date).getTime()),[a]),be=y.useMemo(()=>{var yt,ae,ce,Ce;const Ge=de[de.length-1];return{name:n,commitsAhead:0,commitsBehind:0,createdFromSha:(yt=Ge==null?void 0:Ge.fullSha)!=null?yt:void 0,createdDate:Ge==null?void 0:Ge.date,lastCommitDate:(ae=Ge==null?void 0:Ge.date)!=null?ae:new Date(0).toISOString(),lastCommitAuthor:(ce=Ge==null?void 0:Ge.author)!=null?ce:"Unknown",status:"fresh",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:(Ce=Ge==null?void 0:Ge.fullSha)!=null?Ce:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0}},[n,de]),z=y.useMemo(()=>t.some(Ge=>Ge.name===n)?t:[be,...t],[t,n,be]),_e=y.useMemo(()=>{const Ge=de.map(yt=>{var ae,ce;return{fullSha:yt.fullSha,sha:yt.sha,parentSha:(ae=yt.parentSha)!=null?ae:null,message:yt.message,author:yt.author,date:yt.date,kind:(ce=yt.kind)!=null?ce:"commit"}});return{...o,[n]:Ge}},[o,n,de]),K=y.useMemo(()=>{var ae,ce,Ce;if(!_)return _e;const Ge=new Map(_.nodes.map(Me=>[Me.commit.visualId,Me.row])),yt={};for(const Me of _.allCommits){const qe=(ae=yt[Me.branchName])!=null?ae:[];qe.push({fullSha:Me.id,sha:Me.id.slice(0,7),parentSha:(ce=Me.parentSha)!=null?ce:null,message:Me.message,author:Me.author,date:Me.date,kind:(Ce=Me.kind)!=null?Ce:"commit"}),yt[Me.branchName]=qe}for(const Me of Object.keys(yt))yt[Me]=yt[Me].sort((qe,Xe)=>{var Ye,I;const Ie=(Ye=Ge.get(`${Me}:${qe.fullSha}`))!=null?Ye:Number.MAX_SAFE_INTEGER,ct=(I=Ge.get(`${Me}:${Xe.fullSha}`))!=null?I:Number.MAX_SAFE_INTEGER;if(Ie!==ct)return Ie-ct;const pt=new Date(qe.date).getTime(),Ve=new Date(Xe.date).getTime();return pt!==Ve?pt-Ve:qe.fullSha.localeCompare(Xe.fullSha)});return yt},[_,_e]),we=y.useMemo(()=>{var ae,ce,Ce,Me;const Ge=new Map,yt=(qe,Xe)=>{const Ie=z.filter(pt=>pt.name!==Xe).filter(pt=>bo(pt.headSha,qe)).map(pt=>pt.name);if(Ie.length>0)return Ie.sort()[0];const ct=Object.entries(K).filter(([pt])=>pt!==Xe).flatMap(([pt,Ve])=>{const Ye=Ve[Ve.length-1];return Ye?bo(Ye.fullSha,qe)||bo(Ye.sha,qe)?[pt]:[]:[]});return ct.length>0?ct.sort()[0]:qe.slice(0,7)};for(const qe of c){const Xe=(ae=qe.targetBranch)!=null?ae:n;if(!Xe||!qe.fullSha)continue;const Ie=((ce=qe.parentShas)!=null?ce:[]).slice(1).filter(Ve=>!!Ve&&!bo(Ve,qe.fullSha));if(Ie.length===0)continue;const ct=(Ce=Ge.get(Xe))!=null?Ce:new Map,pt=(Me=ct.get(qe.fullSha))!=null?Me:new Set;for(const Ve of Ie)pt.add(yt(Ve,Xe));ct.set(qe.fullSha,pt),Ge.set(Xe,ct)}return Ge},[c,n,z,K]),Ee=(Ge,yt)=>{const ae=we.get(yt);if(!ae)return[];for(const[ce,Ce]of ae.entries())if(bo(Ge,ce))return Array.from(Ce).sort();return[]},L=y.useMemo(()=>kw(z,n),[z,n]),H=y.useMemo(()=>Cw(z,n,L),[z,n,L]),B=y.useMemo(()=>new Map(z.map(Ge=>[Ge.name,Ge])),[z]),oe=y.useMemo(()=>{var ae,ce;const Ge=new Map,yt=_?K:_e;for(const Ce of z){const Me=(ce=(ae=_==null?void 0:_.firstBranchCommitByName.get(Ce.name))==null?void 0:ae.parentSha)!=null?ce:null,qe=Me!=null?Me:Em(Ce,n,yt);Ge.set(Ce.name,qe)}return Ge},[z,_,n,_e,K]),[ze,Ae]=y.useState(()=>Ey(H,L,u,n));y.useEffect(()=>{Ae(Ge=>{const yt=Ey(H,L,u,n),ae=new Set(Ge);for(const ce of yt)ae.add(ce);return ae})},[H,L,u,n]);const Oe=(It=u==null?void 0:u.branchName)!=null?It:null,Ze=(nn=_==null?void 0:_.clusterKeyByCommitId)!=null?nn:new Map,Je=(sn=_==null?void 0:_.defaultCollapsedClumps)!=null?sn:new Set,Xt=Ge=>W.has(Ge)||!Je.has(Ge)&&!P.has(Ge),qt=(Ge,yt)=>{const ae=S.current,ce=C.current;if(ae&&ce){const Ce=`[data-clump-toggle-id="${yt}"]`,Me=ae.querySelector(Ce);if(Me){const qe=Me.getBoundingClientRect().top-ce.getBoundingClientRect().top;te({id:yt,topWithinScrollBody:qe})}else te(null)}else te(null);le(yt),X(Ce=>{const Me=new Set(Ce),qe=Xt(Ge);return q(Xe=>{const Ie=new Set(Xe);return qe?(Me.delete(Ge),Ie.add(Ge)):(Ie.delete(Ge),Me.add(Ge)),Ie}),Me})};y.useLayoutEffect(()=>{if(!ne)return;const Ge=S.current,yt=C.current;if(!Ge||!yt)return;const ae=`[data-clump-toggle-id="${ne}"]`,ce=Ge.querySelector(ae);if(ce){if((G==null?void 0:G.id)===ne){const Me=ce.getBoundingClientRect().top-yt.getBoundingClientRect().top-G.topWithinScrollBody;Number.isFinite(Me)&&Me!==0&&(yt.scrollTop+=Me)}ce.focus({preventScroll:!0}),le(null),te(null)}},[W,P,ne,G]);const Dt=Ge=>{Ae(yt=>{const ae=new Set(yt);return ae.has(Ge)?ae.delete(Ge):ae.add(Ge),ae})};return r.jsxs("aside",{ref:S,"aria-label":"Dense branch sidebar",className:Ks("pointer-events-auto h-full",w),children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[r.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Branches"}),r.jsx("button",{type:"button",onClick:()=>j(Ge=>!Ge),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:k?"Hide commits":"Show commits"})]}),r.jsx("div",{ref:C,className:"h-[calc(100%-1.75rem)] overflow-y-auto",children:r.jsx("ul",{className:"px-5",children:H.map((Ge,yt)=>r.jsx(Nm,{branchName:Ge,depth:0,isLast:yt===H.length-1,branchByName:B,branchCommitPreviews:K,childNamesByParent:L,branchAnchorShaByName:oe,expandedBranchNames:ze,onToggleBranch:Dt,checkedOutBranchName:Oe,ancestors:new Set,showCommits:k,getMergeTargetLabels:Ee,sourceBranchName:Ge,clusterKeyByCommitId:Ze,isGridClusterOpen:Xt,onToggleGridCluster:qt,onSelectCommit:x,onSelectBranch:b},Ge))})})]})}function Mw({onSelect:t,onClose:n}){const[o,a]=y.useState(""),[c,u]=y.useState(""),[d,h]=y.useState([]),[p,g]=y.useState([]),[_,x]=y.useState(!1),[b,w]=y.useState(!1),[S,C]=y.useState(null),[k,j]=y.useState(""),[N,A]=y.useState(0),[T,$]=y.useState(-1),W=y.useRef(null),P=y.useRef(null),X=y.useRef(0),q=o.length>=2;y.useEffect(()=>{xe("get_home_dir").then(B=>{j(B),u(B)})},[]),y.useEffect(()=>{var B;(B=W.current)==null||B.focus()},[]),y.useEffect(()=>{c&&!q&&ne(c)},[c,q]),y.useEffect(()=>{if(P.current&&clearTimeout(P.current),!o||o.length<2){g([]),w(!1),X.current+=1;return}w(!0);const B=X.current+1;return X.current=B,P.current=setTimeout(async()=>{try{const ze=await xe("search_directories",{path:c,query:o,maxDepth:c===k?3:2,limit:15});if(X.current!==B)return;g(ze),A(0)}catch(oe){if(X.current!==B)return;console.error("Search failed:",oe),g([])}finally{if(X.current!==B)return;w(!1)}},220),()=>{P.current&&clearTimeout(P.current)}},[o,c,k]),y.useEffect(()=>{q||A(0)},[d,q]);async function ne(B){x(!0),C(null),$(-1);try{const oe=await xe("list_directory",{path:B});h(oe.filter(ze=>ze.isDir))}catch(oe){C(oe instanceof Error?oe.message:String(oe)),h([])}finally{x(!1)}}const le=q?p:d,G=y.useCallback(B=>{a(""),u(B)},[]),te=y.useCallback(()=>{if(c==="/")return;const B=c.split("/").slice(0,-1).join("/")||"/";G(B)},[c,G]),de=y.useCallback(()=>{k&&G(k)},[k,G]);function be(B){B.isRepo?t(B.path):G(B.path)}function z(){var oe;const B=(oe=le[N])!=null?oe:T>=0?le[T]:void 0;B?be(B):t(c)}function _e(B){if(B.key==="Escape")o?(a(""),B.preventDefault()):(n(),B.preventDefault());else if(B.key==="Enter")z(),B.preventDefault();else if(B.key==="ArrowDown")B.preventDefault(),A(oe=>Math.min(oe+1,le.length-1));else if(B.key==="ArrowUp")B.preventDefault(),A(oe=>Math.max(oe-1,0));else if(B.key==="ArrowLeft"&&!q)B.preventDefault(),te();else if(B.key==="ArrowRight"||B.key==="Tab"){const oe=le[N];oe?(B.preventDefault(),G(oe.path)):B.key==="Tab"&&B.preventDefault()}else B.key==="Backspace"&&!o&&!q&&(B.preventDefault(),te())}function K(B){B.target===B.currentTarget&&n()}function we(B){return k&&B.startsWith(k)?"~"+B.slice(k.length):B}function Ee(B){const oe=B.split("/").filter(Boolean),ze=[];let Ae="";for(const Oe of oe)Ae+="/"+Oe,ze.push({name:Oe,path:Ae});return ze}function L(B,oe){if(!oe)return B;const ze=B.toLowerCase().indexOf(oe.toLowerCase());return ze===-1?B:r.jsxs(r.Fragment,{children:[B.slice(0,ze),r.jsx("mark",{className:"bg-primary/20 text-primary rounded px-0.5",children:B.slice(ze,ze+oe.length)}),B.slice(ze+oe.length)]})}const H=Ee(c);return r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-[12vh]",onClick:K,onKeyDown:B=>B.key==="Escape"&&n(),children:r.jsxs("div",{className:"bg-card rounded-xl shadow-lg flex flex-col overflow-hidden border border-border w-[520px] max-w-[90vw] max-h-[65vh]",children:[r.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-border",children:[r.jsxs("div",{className:"flex-1 flex items-center gap-0.5 overflow-x-auto",children:[r.jsx("button",{className:"flex items-center p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:de,title:"Home (~)",children:r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),H.map((B,oe)=>r.jsxs("span",{className:"flex items-center",children:[r.jsx("svg",{className:"w-3 h-3 text-muted-foreground mx-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),r.jsx("button",{className:`px-1.5 py-1 hover:bg-accent rounded-lg text-sm whitespace-nowrap transition-colors ${oe===H.length-1?"text-foreground font-medium":"text-muted-foreground hover:text-foreground"}`,onClick:()=>G(B.path),children:B.name})]},B.path))]}),r.jsx("button",{className:"p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:n,title:"Close (Esc)",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border",children:[r.jsx("div",{className:`flex items-center justify-center text-muted-foreground ${b?"opacity-70":""}`,children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),r.jsx("input",{ref:W,type:"text",className:"flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm",placeholder:"Search folders...",value:o,onChange:B=>a(B.target.value),onKeyDown:_e,autoComplete:"off",spellCheck:!1}),o&&r.jsx("button",{className:"p-1 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:()=>a(""),title:"Clear",children:r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsx("div",{className:"flex-1 overflow-y-auto py-1",children:_&&!q?r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Loading..."}):S&&!q?r.jsx("div",{className:"py-6 text-center text-destructive text-sm",children:S}):r.jsx(r.Fragment,{children:q?p.length>0?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex items-center gap-1.5 px-4 py-2",children:[r.jsx("svg",{className:"w-3 h-3 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),r.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium",children:"Results"})]}),p.map((B,oe)=>r.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${oe===T?"bg-primary/10":oe===N?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(oe),A(oe)},onDoubleClick:()=>be(B),onMouseEnter:()=>A(oe),children:[r.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${B.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.isRepo?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("div",{className:"truncate text-foreground",children:L(B.name,o)}),r.jsx("div",{className:"text-xs text-muted-foreground font-mono truncate",children:L(we(B.path),o)})]}),r.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},B.path))]}):b?null:r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"No matching folders"}):d.length>0?d.map((B,oe)=>r.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${oe===T?"bg-primary/10":oe===N?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(oe),A(oe)},onDoubleClick:()=>be(B),onMouseEnter:()=>A(oe),children:[r.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${B.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.isRepo?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsx("span",{className:"flex-1 truncate text-foreground",children:B.name}),r.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},B.path)):_?null:r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Empty directory"})})}),r.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-t border-border bg-card/50",children:[r.jsxs("span",{className:"text-xs text-muted-foreground",children:[r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5",children:"↑↓"})," navigate",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Enter"})," open",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Tab"})," drill in",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"←"})," back"]}),r.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity",onClick:z,children:"Open"})]})]})})}const Kr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function Tw(t,n,o,a,c,u){var q,ne,le,G;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(ne=(q=o[0])==null?void 0:q.fullSha)!=null?ne:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(te=>({name:te.name,headSha:te.headSha,isDefault:!1}))],x=d?_.filter(te=>Kr(te.headSha,d)):[],b=(le=x.find(te=>te.isDefault))!=null?le:x[0],w=!!(b&&d&&Kr(b.headSha,d)),S=b&&!b.isDefault?n.find(te=>te.name===b.name):void 0,C=(()=>{var de;if(!d)return null;const te=o.find(be=>Kr(be.fullSha,d)||Kr(be.sha,d));if(te!=null&&te.date)return te.date;if(S){const be=((de=a[S.name])!=null?de:[]).find(z=>Kr(z.fullSha,d)||Kr(z.sha,d));if(be!=null&&be.date)return be.date}return null})(),k=C?new Date(C).getTime():Number.NaN,j=Date.now(),N=Number.isFinite(k)?Math.max(j,k+1+t.index):j+t.index,A=new Date(N).toISOString(),T=t.message.trim(),$={fullSha:h,sha:p,parentSha:d,message:T||p,author:"You",date:A,kind:"stash"},W={fullSha:h,sha:p,parentSha:d,message:T||p,author:"You",date:A,kind:"stash"};if(w&&(b!=null&&b.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...o,W]};if(w&&S)return{branches:n.map(de=>de.name===S.name?{...de,commitsAhead:de.commitsAhead+1,unpushedCommits:de.unpushedCommits+1,lastCommitDate:A,headSha:h}:de),directCommits:o,branchCommitPreviews:{...a,[S.name]:[$,...a[S.name]||[]]},branchUniqueAheadCounts:{...c,[S.name]:Math.max(0,(G=Object.prototype.hasOwnProperty.call(c,S.name)?c[S.name]:S.commitsAhead)!=null?G:0)+1}};const P=`*Stash:${t.index}`;return{branches:[{name:P,commitsAhead:1,commitsBehind:0,lastCommitDate:A,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(b==null?void 0:b.name)||u},...n],directCommits:o,branchCommitPreviews:{...a,[P]:[$]},branchUniqueAheadCounts:{...c,[P]:1}}}function Ew(t,n,o,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:o,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=Tw(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}const Dw="git-visualizer",Wu=!1,Dy=1400,Aw=180;function Gh(...t){return t.filter(Boolean).join(" ")}function Nw(t){var a;if(!t)return"";const o=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=o[o.length-1])!=null?a:""}function Ay(t){return Nw(t)===Dw}function Rw(){var ei,Eo;const[t,n]=y.useState(null),[o,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState([]),[p,g]=y.useState([]),[_,x]=y.useState([]),[b,w]=y.useState({}),[S,C]=y.useState([]),[k,j]=y.useState("main"),[N,A]=y.useState(null),[T,$]=y.useState([]),[W,P]=y.useState(!1),[X,q]=y.useState(""),[ne,le]=y.useState(0),[G,te]=y.useState(()=>new Set),[de,be]=y.useState(()=>new Set),[z,_e]=y.useState(null),[K,we]=y.useState(null),[Ee,L]=y.useState(!1),[H,B]=y.useState(!1),[oe,ze]=y.useState(null),[Ae,Oe]=y.useState("landing"),[Ze,Je]=y.useState(!1),[Xt,qt]=y.useState(!1),[Dt,It]=y.useState("active"),[nn,sn]=y.useState(null),[Ge,yt]=y.useState(null),[ae,ce]=y.useState(!1),[Ce,Me]=y.useState(null),[qe,Xe]=y.useState(!1),[Ie,ct]=y.useState(null),[pt,Ve]=y.useState(null),[Ye,I]=y.useState(!1),[Z,ge]=y.useState(!1),[ke,Ue]=y.useState(!1),[We,Ne]=y.useState(!1),[Nt,Et]=y.useState({}),[Pt,_t]=y.useState({}),[tt,Ot]=y.useState({}),[on,Qt]=y.useState([]),[Ke,Ut]=y.useState(!1),[Jt,Ht]=y.useState(!1),[An,at]=y.useState(!1),[Wt,Tn]=y.useState(!1),[jn,Zn]=y.useState(!1),[Ms,Jn]=y.useState("horizontal"),rs=y.useRef(null),mn=Ay(t),Yn=y.useRef(!1),xn=y.useRef([]),Wn=y.useRef([]),nt=y.useRef(null);function ws(J){if(J.button!==0)return;const he=J.target;if(he!=null&&he.closest(".window-no-drag"))return;const je=Mm();xe("start_window_drag").catch(()=>je.startDragging()).catch(Se=>{console.warn("Failed to start window drag:",Se)})}async function Ko(J,he){const Se=[];let ot=0;for(;;){const bt=await xe("get_merge_nodes",{repoPath:J,branch:he,page:ot,perPage:100});if(Se.push(...bt.nodes.map(rt=>({...rt,targetBranch:he}))),!bt.hasMore||bt.nodes.length===0)break;ot+=1}return Se}async function Qo(J,he){var bt;const je=Array.from(new Set(he.filter(rt=>!!rt)));if(je.length===0)return[];const Se=await Promise.all(je.map(rt=>Ko(J,rt).catch(()=>[]))),ot=new Map;for(const rt of Se)for(const Ft of rt){const zt=`${Ft.fullSha}:${(bt=Ft.targetBranch)!=null?bt:""}`;ot.has(zt)||ot.set(zt,Ft)}return Array.from(ot.values())}const to=J=>J.map(he=>`${he.name}|${he.headSha}|${he.commitsAhead}|${he.commitsBehind}|${he.unpushedCommits}|${he.remoteSyncStatus}`).join("||"),Co=J=>J.map(he=>he.fullSha).join("|"),co=J=>{var he,je;return J?`${(he=J.branchName)!=null?he:""}|${J.headSha}|${(je=J.parentSha)!=null?je:""}|${J.hasUncommittedChanges?1:0}`:"__none__"};async function Bn(J,he){const je=he!=null?he:k,[Se,ot,bt,rt,Ft,zt]=await Promise.all([xe("get_branches",{repoPath:J}),xe("get_direct_commits",{repoPath:J,branch:je}),xe("get_unpushed_direct_commits",{repoPath:J,branch:je}).catch(()=>[]),xe("get_checked_out_ref",{repoPath:J}).catch(()=>null),xe("list_worktrees",{repoPath:J}).catch(()=>[]),xe("list_stashes",{repoPath:J}).catch(()=>[])]),cn=Array.from(new Set([je,...Se.map(_n=>_n.name)])),Xn=await Qo(J,cn),fn=await Promise.all([je,...Se.map(_n=>_n.name)].map(async _n=>{const qn=await xe("get_branch_unpushed_commit_shas",{repoPath:J,branch:_n}).catch(()=>[]);return[_n,qn]}));u(Se),h(Xn),g(ot),x(bt),w(Object.fromEntries(fn)),A(rt),$(Ft),Qt(zt)}async function no(J,he){const[je,Se,ot]=await Promise.all([xe("get_branches",{repoPath:J}).catch(()=>[]),xe("get_direct_commits",{repoPath:J,branch:he}).catch(()=>[]),xe("get_checked_out_ref",{repoPath:J}).catch(()=>null)]);return to(je)!==to(xn.current)||Co(Se)!==Co(Wn.current)||co(ot)!==co(nt.current)}async function so(J){Ve(null),B(!0);try{const[he,je]=await Promise.all([xe("get_repo_info",{repoPath:J}),xe("get_default_branch",{repoPath:J})]);a(he.name),j(je),n(J),await Bn(J,je),Qs(J),Ve({kind:"success",message:`Now targeting worktree at ${J}`})}catch(he){const je=he instanceof Error?he.message:String(he);Ve({kind:"error",message:je}),console.error("Failed to switch worktree:",je)}finally{B(!1)}}async function oo(J,he){if(!(!t||W)){P(!0),Ve(null);try{await xe("remove_worktree",{repoPath:t,worktreePath:J,force:he}),await Bn(t),Ve({kind:"success",message:`Removed worktree at ${J}`})}catch(je){const Se=je instanceof Error?je.message:String(je);Ve({kind:"error",message:Se}),console.error("Failed to remove worktree:",Se)}finally{P(!1)}}}async function Nn(J){L(!0),B(!0),ze(null),u([]),h([]),g([]),x([]),w({}),Oe("map"),await new Promise(he=>setTimeout(he,15));try{const[he,je]=await Promise.all([xe("get_repo_info",{repoPath:J}),xe("get_default_branch",{repoPath:J})]);a(he.name),j(je),n(J),Ay(J)&&(await Bn(J,je),B(!1)),L(!1),Qs(J)}catch(he){console.error("Failed to load repo:",he),ze(he instanceof Error?he.message:String(he)),Oe("landing"),n(null),L(!1),B(!1)}}async function Qs(J){try{ce(!1),ct(null);const he=await xe("get_github_info",{repoPath:J}),je=await xe("get_github_auth_status");if(Me(je),!je.ghAvailable||!je.authenticated)return;const Se=await xe("get_open_prs",{owner:he.owner,repo:he.repo});C(Se),ce(!0)}catch(he){console.log("GitHub data not available:",he),ct(he instanceof Error?he.message:String(he)),ce(!1)}}y.useEffect(()=>{let J=null,he=!1;const je=(()=>{try{return Mm().label}catch{return null}})(),Se=async bt=>{var Ft;const rt=(Ft=bt==null?void 0:bt.path)==null?void 0:Ft.trim();if(!(!rt||he)){if(t===rt){Oe("map");return}await Nn(rt)}};return(async()=>{je==="main"&&(J=await uc("gitviz://open-repo",async rt=>{await Se(rt.payload)}));const bt=await xe("take_pending_open_repo");await Se(bt)})(),()=>{he=!0,J&&J()}},[t]),y.useEffect(()=>{xn.current=c},[c]),y.useEffect(()=>{Wn.current=p},[p]),y.useEffect(()=>{nt.current=N},[N]),y.useEffect(()=>{Yn.current=jn},[jn]),y.useEffect(()=>{if(!t||!k||mn)return;xe("watch_repo",{repoPath:t}).catch(console.error);let J=!1,he=!1,je,Se=null;const ot=new Set;let bt=null,rt=!1,Ft=!1,zt=null,cn=null,Xn=null,fn=null;const _n=se=>se.map(re=>`${re.name}|${re.headSha}|${re.commitsAhead}|${re.commitsBehind}|${re.unpushedCommits}|${re.remoteSyncStatus}`).join("||"),qn=se=>se.map(re=>{var pe,Le;return`${re.fullSha}:${(pe=re.targetBranch)!=null?pe:""}:${((Le=re.parentShas)!=null?Le:[]).join(",")}`}).join("|"),As=se=>se.map(re=>re.fullSha).join("|"),Vt=async()=>{if(J){he=!0;return}J=!0;try{const se=xe("get_branches",{repoPath:t}),re=xe("get_checked_out_ref",{repoPath:t}).catch(()=>null),pe=xe("list_worktrees",{repoPath:t}).catch(()=>[]),Le=xe("get_direct_commits",{repoPath:t,branch:k}),st=xe("get_unpushed_direct_commits",{repoPath:t,branch:k}).catch(()=>[]),[ut,ft,ht,it,Tt]=await Promise.allSettled([se,re,pe,Le,st]);if(rt)return;const Gt=ut.status==="fulfilled"?ut.value:null;if(Gt){const an=_n(Gt);an!==cn&&(cn=an,u(Gt))}if(it.status==="fulfilled"){const an=it.value,zn=As(an);zn!==fn&&(fn=zn,g(an))}Tt.status==="fulfilled"&&x(Tt.value),ht.status==="fulfilled"&&$(ht.value);const bn=[k,...(Gt!=null?Gt:[]).map(an=>an.name)],ds=await Promise.all(bn.map(async an=>{const zn=await xe("get_branch_unpushed_commit_shas",{repoPath:t,branch:an}).catch(()=>[]);return[an,zn]}));if(rt||w(Object.fromEntries(ds)),xe("list_stashes",{repoPath:t}).then(an=>{rt||Qt(an)}).catch(()=>{}),B(!1),ft.status==="fulfilled"&&ft.value){const an=ft.value;A(zn=>zn&&zn.branchName===an.branchName&&zn.headSha===an.headSha&&zn.parentSha===an.parentSha&&zn.hasUncommittedChanges===an.hasUncommittedChanges?zn:an)}const Ns=Array.from(new Set([k,...(Gt!=null?Gt:[]).map(an=>an.name)])),ks=await Qo(t,Ns).catch(()=>[]);if(rt)return;const Rs=qn(ks);Rs!==Xn&&(Xn=Rs,h(ks))}catch(se){console.error("Auto-refresh failed:",se)}finally{B(!1),J=!1,he&&!rt&&(he=!1,je=window.setTimeout(Vt,200))}},E=async()=>{var se;if(!Ft){Ft=!0;try{const re=await xe("get_checked_out_ref",{repoPath:t});if(rt)return;const pe=`${(se=re.branchName)!=null?se:""}|${re.headSha}|${re.hasUncommittedChanges?1:0}`,Le=zt,st=!Le||Le.split("|").slice(0,2).join("|")!==pe.split("|").slice(0,2).join("|");zt=pe,A(ut=>ut&&ut.branchName===re.branchName&&ut.headSha===re.headSha&&ut.hasUncommittedChanges===re.hasUncommittedChanges?ut:re),st&&Y()}catch{}finally{Ft=!1}}},Y=()=>{clearTimeout(je),je=window.setTimeout(Vt,100);const se=[450];for(const re of se){const pe=window.setTimeout(()=>{ot.delete(pe),Vt()},re);ot.add(pe)}};return uc("git-activity",se=>{if(se.payload==="local"){E();return}Y()}).then(se=>{rt?se():bt=se}).catch(console.error),Vt(),Se=window.setInterval(()=>{E()},700),E(),()=>{rt=!0,clearTimeout(je),Se!=null&&window.clearInterval(Se);for(const se of ot)window.clearTimeout(se);ot.clear(),bt&&bt()}},[t,k,mn]),y.useEffect(()=>{if(!t||!k||!mn)return;xe("watch_repo",{repoPath:t}).catch(console.error);let J=!1,he=!1,je=!1,Se=null;const ot=async()=>{if(!J){if(Yn.current){he=!0;return}if(je){he=!0;return}je=!0;try{if(!await no(t,k)||J)return;await Bn(t,k)}catch(rt){console.warn("Frozen git-activity refresh failed:",rt)}finally{je=!1,he&&!J&&(he=!1,window.setTimeout(()=>{ot()},0))}}},bt=()=>{he=!0,ot()};return uc("git-activity",()=>{bt()}).then(rt=>{J?rt():Se=rt}).catch(console.error),()=>{J=!0,Se&&Se()}},[t,k,mn]);async function io(){if(t){Xe(!0),ct(null);try{await xe("authenticate_github");const J=await xe("get_github_auth_status");Me(J),J.authenticated?await Qs(t):J.message&&ct(J.message)}catch(J){ct(J instanceof Error?J.message:String(J))}finally{Xe(!1)}}}const Rn=new Set(S.map(J=>J.branchName)),hs=14*864e5,Io=Date.now(),Zo=c.filter(J=>J.status==="stale"),ao=Zo.filter(J=>Rn.has(J.name)||Io-new Date(J.lastCommitDate).getTime()<=hs),uo=Zo.filter(J=>!Rn.has(J.name)&&Io-new Date(J.lastCommitDate).getTime()>hs),fo=J=>{var he;return Object.prototype.hasOwnProperty.call(tt,J.name)?Math.max(0,(he=tt[J.name])!=null?he:0):Math.max(0,J.commitsAhead)};y.useEffect(()=>{Et({}),_t({}),Ot({}),rs.current=null,Xe(!1),Me(null),ct(null),A(null),Ve(null)},[t]),y.useEffect(()=>{var Xn,fn,_n,qn,As;if(!t||!k){Et({}),_t({}),Ot({}),rs.current=null;return}const J=c.map(Vt=>{var E;return`${Vt.name}:${Vt.headSha}:${(E=Vt.parentBranch)!=null?E:""}:${Vt.commitsAhead}`}).join("|"),he=d.map(Vt=>{var E,Y;return`${Vt.fullSha}:${(Y=(E=Vt.parentShas)==null?void 0:E[1])!=null?Y:""}`}).join("|"),je=`${t}|${k}|${J}|${he}`;if(rs.current===je)return;rs.current=je;const Se=new Map;for(const Vt of d){const E=(fn=(Xn=Vt.parentShas)==null?void 0:Xn.slice(1))!=null?fn:[];for(const Y of E)Y&&!Se.has(Y)&&Se.set(Y,Vt)}const ot=c.filter(Vt=>Vt.name!==k),bt=new Map;for(const Vt of ot){if(!Vt.parentBranch||Vt.parentBranch===Vt.name)continue;const E=(_n=bt.get(Vt.parentBranch))!=null?_n:0;bt.set(Vt.parentBranch,E+1)}const rt=new Map;for(const Vt of ot){if(!Vt.headSha)continue;const E=(qn=rt.get(Vt.headSha))!=null?qn:[];E.push(Vt),rt.set(Vt.headSha,E)}const Ft=new Set;for(const Vt of rt.values()){if(Vt.length<2)continue;const E=[...Vt].sort((Y,se)=>{var Le,st,ut,ft;const re=(st=(Le=Y.createdDate)!=null?Le:Y.divergedFromDate)!=null?st:Y.lastCommitDate,pe=(ft=(ut=se.createdDate)!=null?ut:se.divergedFromDate)!=null?ft:se.lastCommitDate;return re.localeCompare(pe)});for(let Y=1;Y<E.length;Y++)Ft.add(E[Y].name)}for(const Vt of ot){const E=((As=bt.get(Vt.name))!=null?As:0)>0;Vt.commitsAhead===0&&Vt.headSha&&!Se.has(Vt.headSha)&&!E&&Ft.add(Vt.name)}let zt=!1;async function cn(){const Vt=await Promise.all(ot.map(async pe=>{var Le,st,ut;try{const ft=(st=(Le=pe.createdDate)!=null?Le:pe.divergedFromDate)!=null?st:pe.lastCommitDate,ht=new Date(ft).getTime(),it=pe.parentBranch&&pe.parentBranch!==pe.name?pe.parentBranch:k,Tt=Se.get(pe.headSha),Gt=!!Tt,bn=Ft.has(pe.name),ds=((ut=bt.get(pe.name))!=null?ut:0)>0,Ns=bn||!Gt&&!ds&&pe.remoteSyncStatus!=="on-github"&&pe.commitsAhead===0&&!!pe.headSha&&(pe.headSha===pe.createdFromSha||pe.headSha===pe.divergedFromSha),Rs=Gt&&it===k&&!!(Tt!=null&&Tt.fullSha)?Tt==null?void 0:Tt.fullSha:void 0;let an=[],zn=!1;if(!Ns){if(Rs)an=(await xe("get_branch_commits",{repoPath:t,branch:pe.name,baseBranch:it,mergeCommitSha:Rs,includePrompts:Wu})).filter(ps=>ps.fullSha!==Rs),zn=!0;else{const Sn=[pe.createdFromSha,pe.divergedFromSha].filter(Ho=>!!Ho),ps=Array.from(new Set(it===k?[...Sn,it,k]:[it,...Sn,k]));let Do=null;for(const Ho of ps)try{const vo=await xe("get_branch_commits",{repoPath:t,branch:pe.name,baseBranch:Ho,includePrompts:Wu});Do==null&&(Do=vo);const $i=it===k&&(Ho===pe.createdFromSha||Ho===pe.divergedFromSha);if(Ho===it){an=vo,zn=!0;break}if($i){an=vo,zn=!0;break}if(vo.length>0){an=vo,zn=!0;break}}catch{}!zn&&Do!=null&&(an=Do,zn=!0)}!zn&&Number.isFinite(ht)&&(an=(await xe("get_recent_log",{repoPath:t,branch:pe.name,limit:400,firstParent:!1,includePrompts:Wu})).filter(ps=>{const Do=new Date(ps.date).getTime();return Number.isFinite(Do)&&Do>=ht}))}const Cs=an.flatMap(Sn=>{var ps;return(ps=Sn.agentPrompts)!=null?ps:[]}).sort((Sn,ps)=>new Date(ps.timestamp).getTime()-new Date(Sn.timestamp).getTime()),$s=an.map(Sn=>{var ps;return{fullSha:Sn.fullSha,sha:Sn.sha,parentSha:(ps=Sn.parentSha)!=null?ps:null,message:Sn.message,author:Sn.author,date:Sn.date,kind:"commit"}}),jt=Ns?0:$s.length,Oi=$s;if(Cs.length===0)return[pe.name,{promptMeta:null,previews:Oi,uniqueCount:jt}];const zi=Cs[0],Si=[...Cs].sort((Sn,ps)=>new Date(Sn.timestamp).getTime()-new Date(ps.timestamp).getTime()).map(Sn=>({id:Sn.id,agent:Sn.agent,prompt:Sn.prompt,timestamp:Sn.timestamp}));return[pe.name,{promptMeta:{count:Cs.length,latestPrompt:zi.prompt,latestAgent:zi.agent,latestTimestamp:zi.timestamp,markers:Si},previews:Oi,uniqueCount:jt}]}catch{return[pe.name,{promptMeta:null,previews:[],uniqueCount:null}]}}));let E=null;try{const Le=(await xe("get_recent_log",{repoPath:t,branch:k,limit:250,firstParent:!1,includePrompts:Wu})).flatMap(st=>{var ut;return(ut=st.agentPrompts)!=null?ut:[]}).sort((st,ut)=>new Date(ut.timestamp).getTime()-new Date(st.timestamp).getTime());if(Le.length>0){const st=Le[0],ft=[...Le].sort((ht,it)=>new Date(ht.timestamp).getTime()-new Date(it.timestamp).getTime()).map(ht=>({id:ht.id,agent:ht.agent,prompt:ht.prompt,timestamp:ht.timestamp}));E={count:Le.length,latestPrompt:st.prompt,latestAgent:st.agent,latestTimestamp:st.timestamp,markers:ft}}}catch{E=null}if(zt)return;const Y={},se={},re={};for(const[pe,Le]of Vt)Le.promptMeta&&(Y[pe]=Le.promptMeta),se[pe]=[...Le.previews],Le.uniqueCount!=null&&(re[pe]=Le.uniqueCount);E&&(Y[k]=E),Et(Y),_t(se),Ot(re)}return cn(),()=>{zt=!0}},[t,k,c,d]),y.useEffect(()=>{if(!pt){I(!1);return}I(!0);const J=window.setTimeout(()=>{I(!1)},Dy),he=window.setTimeout(()=>{Ve(null)},Dy+Aw);return()=>{window.clearTimeout(J),window.clearTimeout(he)}},[pt]),y.useEffect(()=>{if(!t||c.length===0)return;const J=Se=>new Promise(ot=>setTimeout(ot,Se));async function he(){const ot=`${await xe("get_home_dir")}/Desktop/git-viz-screenshots/${o}`;console.log(`📸 Saving screenshots to ${ot}`),Oe("map"),await J(800),await xe("screenshot",{path:`${ot}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${ot}`)}const je=Se=>{(Se.metaKey||Se.ctrlKey)&&Se.shiftKey&&Se.key==="S"&&(Se.preventDefault(),he())};return window.addEventListener("keydown",je),()=>window.removeEventListener("keydown",je)},[t,o,c]);function Ts(){qt(!0),setTimeout(()=>{Je(!1),qt(!1),It("active"),yt(null)},100)}async function Vs(J){if(!t)return;Ve(null);const he=/^STASH:(\d+)$/.exec(J.commitSha);if(he){try{const je=parseInt(he[1],10),Se=await xe("apply_stash_restore",{repoPath:t,stashIndex:je});A(Se),await Bn(t);const ot=`Stash ${je+1}`,bt=Se.branchName?` on branch ${Se.branchName}`:" at the stash base (detached HEAD)";Ve({kind:"success",message:`Restored ${ot}${bt}; stash applied and dropped (uncommitted changes).`})}catch(je){const Se=je instanceof Error?je.message:String(je);Ve({kind:"error",message:Se}),console.error("Failed to apply stash:",Se)}return}if(J.branchName){const je=(ot,bt)=>{const rt=ot.replace(/\\/g,"/").replace(/\/+$/,""),Ft=bt.replace(/\\/g,"/").replace(/\/+$/,"");return rt===Ft||rt.toLowerCase()===Ft.toLowerCase()},Se=T.find(ot=>ot.pathExists===!1||ot.isCurrent||t&&je(ot.path,t)?!1:ot.branchName===J.branchName);if(Se){await so(Se.path);return}}try{let je="";(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await xe("stash_push",{repoPath:t,includeUntracked:!0}),je="Stashed local changes (including untracked), then ",await Bn(t));const ot=J.branchName?await xe("checkout_branch",{repoPath:t,branchName:J.branchName}):await xe("checkout_ref",{repoPath:t,refName:J.commitSha}),bt=await xe("get_checked_out_ref",{repoPath:t}).catch(()=>ot);A(bt),await Bn(t);const rt=bt.branchName?bt.branchName:`${bt.headSha.slice(0,7)} (detached)`;Ve({kind:"success",message:`${je}Checked out ${rt}`})}catch(je){const Se=je instanceof Error?je.message:String(je);Ve({kind:"error",message:Se}),console.error("Failed to checkout commit:",Se)}}async function On(){if(!(!t||Ke)){Ve(null),Ut(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ve({kind:"error",message:"No local changes to stash."});return}await xe("stash_push",{repoPath:t,includeUntracked:!0}),await Bn(t),Ve({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(J){const he=J instanceof Error?J.message:String(J);Ve({kind:"error",message:he}),console.error("Failed to stash:",he)}finally{Ut(!1)}}}async function bi(J){if(!t||Jt)return!1;const he=J.trim();if(!he)return Ve({kind:"error",message:"Enter a commit message."}),!1;Ve(null),Ht(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ve({kind:"error",message:"No local changes to commit."}),!1;const Se=await xe("commit_working_tree",{repoPath:t,message:he});return A(Se),await Bn(t),Ve({kind:"success",message:"Committed local changes."}),!0}catch(je){const Se=je instanceof Error?je.message:String(je);return Ve({kind:"error",message:Se}),console.error("Failed to commit:",Se),!1}finally{Ht(!1)}}async function Li(){if(!t||An)return!1;Ve(null),at(!0);try{if(!(await xe("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ve({kind:"error",message:"No local changes to stage."}),!1;const he=await xe("stage_working_tree",{repoPath:t});return A(he),await Bn(t),Ve({kind:"success",message:"Staged all changes."}),!0}catch(J){const he=J instanceof Error?J.message:String(J);return Ve({kind:"error",message:he}),console.error("Failed to stage:",he),!1}finally{at(!1)}}async function Jo(J,he){if(!(!t||Wt)){Tn(!0),Ve(null);try{const je=/^STASH:(\d+)$/.exec(J);let Se;if(je){const ot=parseInt(je[1],10);Se=await xe("move_stash_to_new_branch",{repoPath:t,stashIndex:ot,branchName:he})}else Se=await xe("create_branch_from_uncommitted",{repoPath:t,branchName:he});A(Se),await Bn(t),Ve({kind:"success",message:`Moved to new branch "${he}"`})}catch(je){const Se=je instanceof Error?je.message:String(je);Ve({kind:"error",message:Se}),console.error("Failed to create branch from node:",Se)}finally{Tn(!1)}}}async function Bi(J){if(!(!t||Wt)){Tn(!0),Ve(null);try{const he=await xe("create_root_branch",{repoPath:t,branchName:J});A(he),await Bn(t),Ve({kind:"success",message:`Created new root branch "${J}"`})}catch(he){const je=he instanceof Error?he.message:String(he);Ve({kind:"error",message:je}),console.error("Failed to create root branch:",je)}finally{Tn(!1)}}}async function jo(J,he){if(!t)return;const je=Array.from(new Set(J.filter(Se=>!!Se&&Se!==he)));if(je.length!==0){Ve(null),ge(!0);try{let Se=null;for(const ot of je)Se=await xe("merge_ref_into_branch",{repoPath:t,sourceRef:ot,targetBranch:he});await Bn(t),Se&&A(Se),Ve({kind:"success",message:je.length===1?`Merged ${je[0].slice(0,7)} into ${he}`:`Merged ${je.length} commits into ${he}`})}catch(Se){const ot=Se instanceof Error?Se.message:String(Se);Ve({kind:"error",message:ot}),console.error("Failed to merge refs into branch:",ot)}finally{ge(!1)}}}async function vi(){if(!(!t||ke)){Ve(null),Ue(!0);try{const J=await xe("push_all_unpushed_branches",{repoPath:t});await Bn(t),Ve({kind:"success",message:J.length>0?J.length===1?`Pushed ${J[0].branchName}`:`Pushed ${J.length} branches`:"Everything local is already pushed."})}catch(J){const he=J instanceof Error?J.message:String(J);Ve({kind:"error",message:he}),console.error("Failed to push all branches:",he)}finally{Ue(!1)}}}async function Hn(){if(!(!t||ke)){Ve(null),Ue(!0);try{const J=await xe("push_current_branch",{repoPath:t});await Bn(t),Ve({kind:"success",message:`Pushed ${J.branchName}`})}catch(J){const he=J instanceof Error?J.message:String(J);Ve({kind:"error",message:he}),console.error("Failed to push current branch:",he)}finally{Ue(!1)}}}async function ho(J){var je;if(!t||ke)return;const he=Array.from(new Map(J.filter(Se=>Se.branchName&&Se.targetSha).map(Se=>[Se.branchName,Se])).values());if(he.length!==0){Ve(null),Ue(!0);try{for(const Se of he)await xe("push_branch",{repoPath:t,branchName:Se.branchName,targetSha:Se.targetSha});await Bn(t),Ve({kind:"success",message:he.length===1?`Pushed ${he[0].branchName} through ${(je=he[0].targetSha)==null?void 0:je.slice(0,7)}`:`Pushed ${he.length} selected commit ranges`})}catch(Se){const ot=Se instanceof Error?Se.message:String(Se);Ve({kind:"error",message:ot}),console.error("Failed to push selected commits:",ot)}finally{Ue(!1)}}}async function En(J){var bt;if(!t||We)return;const he=Array.from(new Set(J.branchNames.filter(rt=>rt&&rt!==k))),je=!!J.discardUncommittedChanges,Se=(bt=J.stashIndices)!=null?bt:[],ot=Array.from(new Set(Se)).sort((rt,Ft)=>Ft-rt);if(!(he.length===0&&!je&&ot.length===0)){Ve(null),Ne(!0);try{for(const zt of ot)await xe("stash_drop",{repoPath:t,stashIndex:zt});const rt=he.length>0||je?await xe("delete_selected_elements",{repoPath:t,branchNames:he,discardUncommittedChanges:je}):{deletedBranches:[],discardedUncommittedChanges:!1};await Bn(t);const Ft=[];ot.length>0&&Ft.push(ot.length===1?`removed stash ${ot[0]+1}`:`removed ${ot.length} stashes`),rt.discardedUncommittedChanges&&Ft.push("discarded local uncommitted changes"),rt.deletedBranches.length>0&&Ft.push(rt.deletedBranches.length===1?`deleted ${rt.deletedBranches[0]}`:`deleted ${rt.deletedBranches.length} branches`),Ve({kind:"success",message:Ft.length>0?Ft.join(" and "):"Nothing to delete."})}catch(rt){const Ft=rt instanceof Error?rt.message:String(rt);Ve({kind:"error",message:Ft}),console.error("Failed to delete selected elements:",Ft)}finally{Ne(!1)}}}function ro(J){Oe("map"),yt(J),sn(he=>{var je;return{branch:J,seq:((je=he==null?void 0:he.seq)!=null?je:0)+1}})}function ms(){n(null),$([]),C([]),g([]),x([]),w({}),Et({}),_t({}),Ot({}),Qt([]),ce(!1),Oe("landing")}function es(J){J&&(we(J),le(he=>he+1))}function wi(J){J&&(q(J),le(he=>he+1))}const{enrichedBranches:Ss,enrichedBranchCommitPreviews:Mo,enrichedBranchUniqueAheadCounts:en,enrichedDirectCommits:Po}=y.useMemo(()=>{var st,ut,ft,ht;const J=Ew(on,c,p,Pt,tt,k);let he=J.branches,je=J.directCommits,Se=J.branchCommitPreviews,ot=J.branchUniqueAheadCounts;if(!(N!=null&&N.hasUncommittedChanges))return{enrichedBranches:he,enrichedDirectCommits:je,enrichedBranchCommitPreviews:Se,enrichedBranchUniqueAheadCounts:ot};const bt=N.headSha||N.parentSha||null,rt=(ut=(st=je[0])==null?void 0:st.fullSha)!=null?ut:null,Ft=(it,Tt)=>!it||!Tt?!1:it===Tt||it.startsWith(Tt)||Tt.startsWith(it),zt=[{name:k,headSha:rt!=null?rt:"",isDefault:!0},...he.map(it=>({name:it.name,headSha:it.headSha,isDefault:!1}))],cn=N.branchName?zt.find(it=>it.name===N.branchName):void 0,Xn=bt?zt.filter(it=>Ft(it.headSha,bt)):[],fn=(ft=cn!=null?cn:Xn.find(it=>it.isDefault))!=null?ft:Xn[0],_n=!!(fn&&bt&&Ft(fn.headSha,bt)),qn=fn&&!fn.isDefault?he.find(it=>it.name===fn.name):void 0,As=(()=>{var Tt;if(!bt)return null;const it=je.find(Gt=>Ft(Gt.fullSha,bt)||Ft(Gt.sha,bt));if(it!=null&&it.date)return it.date;if(qn){const Gt=((Tt=Se[qn.name])!=null?Tt:[]).find(bn=>Ft(bn.fullSha,bt)||Ft(bn.sha,bt));if(Gt!=null&&Gt.date)return Gt.date}return null})(),Vt=As?new Date(As).getTime():Number.NaN,E=Date.now(),Y=Number.isFinite(Vt)?Math.max(E,Vt+1):E,se=new Date(Y).toISOString(),re={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:bt,message:"Local uncommitted changes",author:"You",date:se,kind:"uncommitted"},pe={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:bt,message:"Local uncommitted changes",author:"You",date:se,kind:"uncommitted"};if(_n&&(fn!=null&&fn.isDefault))return{enrichedBranches:he,enrichedBranchCommitPreviews:Se,enrichedBranchUniqueAheadCounts:ot,enrichedDirectCommits:[...je,pe]};if(_n&&qn)return{enrichedBranches:he.map(Tt=>Tt.name===qn.name?{...Tt,commitsAhead:Tt.commitsAhead+1,unpushedCommits:Tt.unpushedCommits+1,lastCommitDate:se,headSha:"WORKING_TREE"}:Tt),enrichedDirectCommits:je,enrichedBranchCommitPreviews:{...Se,[qn.name]:[re,...Se[qn.name]||[]]},enrichedBranchUniqueAheadCounts:{...ot,[qn.name]:Math.max(0,(ht=Object.prototype.hasOwnProperty.call(ot,qn.name)?ot[qn.name]:qn.commitsAhead)!=null?ht:0)+1}};const Le={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:se,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:bt!=null?bt:void 0,parentBranch:(fn==null?void 0:fn.name)||N.branchName||k};return{enrichedBranches:[Le,...he],enrichedBranchCommitPreviews:{...Se,[Le.name]:[re]},enrichedBranchUniqueAheadCounts:{...ot,[Le.name]:1},enrichedDirectCommits:je}},[c,Pt,tt,N,k,p,on]),Ds=y.useMemo(()=>Bx(Ss,k,Mo),[Ss,k,Mo]),To=y.useMemo(()=>Ox({lanes:Ds,branches:Ss,mergeNodes:d,directCommits:Po,unpushedDirectCommits:_,defaultBranch:k,branchCommitPreviews:Mo,branchUniqueAheadCounts:en,manuallyOpenedClumps:G,manuallyClosedClumps:de,isDebugOpen:!1,gridSearchQuery:X,gridFocusSha:K,checkedOutRef:N!=null?N:null,orientation:Ms}),[Ds,Ss,d,Po,_,k,Mo,en,G,de,X,K,(ei=N==null?void 0:N.headSha)!=null?ei:null,(Eo=N==null?void 0:N.branchName)!=null?Eo:null,Ms]);return r.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[r.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:ws,children:Ae==="map"&&r.jsxs("div",{className:"relative z-10 h-12 pointer-events-none",children:[r.jsx("button",{onClick:ms,"aria-label":"Back",title:"Back",className:"window-no-drag pointer-events-auto absolute left-19 top-1/2 inline-flex h-7 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent",children:r.jsx("svg",{className:"h-3.5 w-3.5 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),r.jsx("div",{className:"absolute left-1/2 top-1/2 min-w-0 max-w-[52vw] -translate-x-1/2 -translate-y-1/2 text-center",children:r.jsx("h1",{className:"truncate text-sm font-medium text-foreground",children:o})})]})}),r.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:[Ae==="landing"&&r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(Lw,{onSelect:Nn,loading:Ee,error:oe})}),r.jsxs("div",{className:`relative flex h-full min-h-0 flex-1 overflow-hidden ${Ae==="landing"?"hidden":""}`,children:[r.jsx(jw,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",branches:Ss,defaultBranch:k,branchCommitPreviews:Mo,directCommits:Po,mergeNodes:d,checkedOutRef:N,manuallyOpenedClumps:G,manuallyClosedClumps:de,setManuallyOpenedClumps:te,setManuallyClosedClumps:be,gridLayoutModel:To,onSelectCommit:es,onSelectBranch:wi}),r.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[r.jsx(Sw,{branches:Ss,mergeNodes:d,directCommits:Po,unpushedDirectCommits:_,unpushedCommitShasByBranch:b,defaultBranch:k,branchCommitPreviews:Mo,branchUniqueAheadCounts:en,gridSearchQuery:X,gridSearchJumpToken:ne,gridFocusSha:K,onGridSearchResultCountChange:_e,onGridSearchFocusChange:we,checkedOutRef:N,onCommitClick:Vs,onMergeRefsIntoBranch:jo,mergeInProgress:Z,onPushAllBranches:vi,onPushCurrentBranch:Hn,onPushCommitTargets:ho,pushInProgress:ke,onDeleteSelection:En,deleteInProgress:We,worktrees:T,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:oo,removeWorktreeInProgress:W,onSwitchToWorktree:so,onStashLocalChanges:On,stashInProgress:Ke,stashDisabled:!1,onCommitLocalChanges:bi,commitInProgress:Jt,commitDisabled:!1,onStageAllChanges:Li,stageInProgress:An,onCreateBranchFromNode:Jo,onCreateRootBranch:Bi,createBranchFromNodeInProgress:Wt,onInteractionChange:Zn,manuallyOpenedClumps:G,manuallyClosedClumps:de,setManuallyOpenedClumps:te,setManuallyClosedClumps:be,layoutModel:To,orientation:Ms}),r.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:r.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[r.jsxs("div",{className:"flex shrink-0 rounded-full border border-border bg-muted/20 p-0.5 shadow-sm",role:"radiogroup","aria-label":"Commit map layout",children:[r.jsx("button",{type:"button",role:"radio","aria-checked":Ms==="horizontal",tabIndex:0,onClick:()=>Jn("horizontal"),onKeyDown:J=>{(J.key==="ArrowRight"||J.key==="ArrowDown")&&(J.preventDefault(),Jn("vertical"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Ms==="horizontal"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Horizontal"}),r.jsx("button",{type:"button",role:"radio","aria-checked":Ms==="vertical",tabIndex:0,onClick:()=>Jn("vertical"),onKeyDown:J=>{(J.key==="ArrowLeft"||J.key==="ArrowUp")&&(J.preventDefault(),Jn("horizontal"))},className:Gh("rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",Ms==="vertical"?"border border-border/50 bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:"Vertical"})]}),(Ce==null?void 0:Ce.ghAvailable)&&!Ce.authenticated&&r.jsx("button",{onClick:io,disabled:qe,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:qe?"Connecting GitHub...":"Connect GitHub"}),Ce&&!Ce.ghAvailable&&r.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),Ie&&r.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:Ie,children:Ie}),r.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[r.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),r.jsx("input",{value:X,onChange:J=>q(J.target.value),onKeyDown:J=>{J.key==="Enter"&&(J.preventDefault(),le(he=>he+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),r.jsx("button",{type:"button",onClick:()=>le(J=>J+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),z!=null&&r.jsxs("span",{className:"text-xs text-muted-foreground",children:[z," match",z===1?"":"es"]}),K&&r.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",K.slice(0,7)]}),pt&&r.jsx("span",{className:Gh("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",Ye?"opacity-100":"opacity-0",pt.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:pt.message,children:pt.message})]})})]}),Ze&&r.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${Xt?"animate-error-panel-out":"animate-error-panel-in"}`,children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[r.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),r.jsx("button",{onClick:Ts,className:"text-muted-foreground hover:text-foreground transition-colors",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[r.jsxs("button",{onClick:()=>It("active"),className:`text-xs font-medium transition-colors ${Dt==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[ao.length," active"]}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),r.jsxs("button",{onClick:()=>It("inactive"),className:`text-xs font-medium transition-colors ${Dt==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[uo.length," inactive"]})]}),r.jsx("div",{className:"overflow-y-auto max-h-64",children:(Dt==="active"?ao:uo).map(J=>{const he=(Ge==null?void 0:Ge.name)===J.name,je=fo(J);return r.jsxs("button",{onClick:()=>ro(J),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:`text-sm font-medium truncate ${he?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:J.name}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[je>0&&`${je} ahead`,je>0&&J.commitsBehind>0&&", ",J.commitsBehind>0&&`${J.commitsBehind} behind`]})]}),r.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},J.name)})})]})]})]})]})}function Lw({onSelect:t,loading:n,error:o}){const a="git-visualizer:recent-repositories",[u,d]=y.useState(""),[h,p]=y.useState(!1),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]);function C($){return Array.isArray($)?$.filter(W=>typeof W=="object"&&W!==null&&typeof W.path=="string"&&typeof W.name=="string"&&typeof W.lastOpenedAt=="number").slice(0,10):[]}y.useEffect(()=>{try{const $=localStorage.getItem(a);if(!$)return;S(C(JSON.parse($)))}catch{S([])}},[]);function k($){return $==="/"?$:$.replace(/\/+$/,"")}function j($){const W=k($.trim());if(!W)return;const P=W.split("/").pop()||W,q=[{path:W,name:P,lastOpenedAt:Date.now()},...w.filter(ne=>ne.path!==W)].slice(0,10);S(q);try{localStorage.setItem(a,JSON.stringify(q))}catch{}}function N($){const W=k($);b(null),j(W),t(W)}function A($){p(!1),N($)}function T($){$.preventDefault();const W=u.trim();if(!W)return;if(W.startsWith("http://")||W.startsWith("https://")||W.startsWith("git@")||W.startsWith("github.com/")){b("Enter a local repo folder path (for example: /Users/you/code/repo).");return}N(W)}return r.jsxs("main",{className:"h-full flex flex-col items-center pt-[16vh] bg-background",children:[r.jsxs("div",{className:"w-full max-w-sm flex flex-col items-center px-6",children:[r.jsxs("div",{className:"flex flex-col w-full gap-3 shrink-0",children:[r.jsx("button",{onClick:()=>p(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-2xl hover:opacity-90 transition-opacity",children:"Browse for repository"}),g?r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs("form",{onSubmit:T,className:"flex items-center border border-border bg-card rounded-2xl",children:[r.jsxs("div",{className:"relative flex-1 min-w-0 overflow-hidden rounded-l-2xl",children:[r.jsx("input",{autoFocus:!0,type:"text",value:u,onChange:$=>{d($.target.value),x&&b(null)},placeholder:"Enter local path",className:"w-full bg-transparent pl-5 pr-2 py-3.5 text-sm focus:outline-none placeholder:text-muted-foreground tabular-nums min-w-0"}),r.jsx("div",{className:"absolute left-0 inset-y-0 w-10 pointer-events-none",style:{background:"linear-gradient(to right, var(--card), transparent)"}})]}),r.jsx("button",{type:"submit",disabled:!u||n,className:"m-1.5 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-[14px] hover:opacity-90 transition-opacity shrink-0",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 5l7 7-7 7"})})})]}),x&&r.jsx("p",{className:"text-xs text-destructive px-2",children:x}),!x&&o&&r.jsx("p",{className:"text-xs text-destructive px-2",children:o})]}):r.jsx("button",{onClick:()=>_(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground text-sm font-medium rounded-2xl hover:bg-accent transition-colors disabled:opacity-50",children:"Enter repo path"})]}),w.length>0&&r.jsxs("div",{className:"w-full mt-8 flex flex-col",children:[r.jsx("p",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-3 shrink-0",children:"Recently opened"}),r.jsx("div",{className:"flex flex-col gap-2",children:w.slice(0,5).map($=>r.jsxs("button",{onClick:()=>N($.path),disabled:n,className:"w-full shrink-0 rounded-xl border border-border bg-card text-left px-4 py-2.5 hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed",children:[r.jsx("p",{className:"text-foreground truncate text-sm",children:$.name}),r.jsx("p",{className:"text-xs text-muted-foreground truncate",children:$.path})]},$.path))})]})]}),h&&r.jsx(Mw,{onSelect:A,onClose:()=>p(!1)})]})}var Mc=Tx(),Bw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Ow={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Bw}var us=Ow,zw=`.icon-transitions-module__iconState___uqK9J {
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
}`,$w={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=zw}var is=$w,Iw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Pw=({size:t=24,style:n={}})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Hw=({size:t=20,...n})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Vw=({size:t=24,copied:n=!1,tint:o})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o?{color:o,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${is.iconState} ${n?is.hiddenScaled:is.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${is.iconState} ${n?is.visibleScaled:is.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Uw=({size:t=24,state:n="idle"})=>{const o=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${is.iconStateFast} ${o?is.visibleScaled:u?is.sending:is.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${is.iconStateFast} ${a?is.visibleScaled:is.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${is.iconStateFast} ${c?is.visibleScaled:is.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Ww=({size:t=24,isOpen:n=!0})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${is.iconFade} ${n?is.visible:is.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${is.iconFade} ${n?is.hidden:is.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Fw=({size:t=24,isPaused:n=!1})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${is.iconFadeFast} ${n?is.hidden:is.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${is.iconFadeFast} ${n?is.visible:is.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Yw=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Xw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ix=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),qw=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Gw=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Kw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Qw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Zw=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Jw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),eS=({size:t=24})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Px=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Kh=Px.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Rm="feedback-freeze-styles",Qh="__agentation_freeze";function tS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qh]||(t[Qh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qh]}var yn=tS();typeof window<"u"&&!yn.installed&&(yn.origSetTimeout=window.setTimeout.bind(window),yn.origSetInterval=window.setInterval.bind(window),yn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...o)=>typeof t=="string"?yn.origSetTimeout(t,n):yn.origSetTimeout((...a)=>{yn.frozen?yn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...o),window.setInterval=(t,n,...o)=>typeof t=="string"?yn.origSetInterval(t,n):yn.origSetInterval((...a)=>{yn.frozen||t(...a)},n,...o),window.requestAnimationFrame=t=>yn.origRAF(n=>{yn.frozen?yn.frozenRAFQueue.push(t):t(n)}),yn.installed=!0);var Yt=yn.origSetTimeout,nS=yn.origSetInterval,nl=yn.origRAF;function sS(t){return t?Px.some(n=>{var o;return!!((o=t.closest)!=null&&o.call(t,`[${n}]`))}):!1}function oS(){if(typeof document>"u"||yn.frozen)return;yn.frozen=!0,yn.frozenTimeoutQueue=[],yn.frozenRAFQueue=[];let t=document.getElementById(Rm);t||(t=document.createElement("style"),t.id=Rm),t.textContent=`
    *${Kh},
    *${Kh}::before,
    *${Kh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),yn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const o=(a=n.effect)==null?void 0:a.target;sS(o)||(n.pause(),yn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ny(){var o;if(typeof document>"u"||!yn.frozen)return;yn.frozen=!1;const t=yn.frozenTimeoutQueue;yn.frozenTimeoutQueue=[];for(const a of t)yn.origSetTimeout(()=>{if(yn.frozen){yn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=yn.frozenRAFQueue;yn.frozenRAFQueue=[];for(const a of n)yn.origRAF(c=>{if(yn.frozen){yn.frozenRAFQueue.push(a);return}a(c)});for(const a of yn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}yn.pausedAnimations=[],(o=document.getElementById(Rm))==null||o.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function Zh(t){if(!t)return;const n=o=>o.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var kd=y.forwardRef(function({element:n,timestamp:o,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},C){const[k,j]=y.useState(u),[N,A]=y.useState(!1),[T,$]=y.useState("initial"),[W,P]=y.useState(!1),[X,q]=y.useState(!1),ne=y.useRef(null),le=y.useRef(null),G=y.useRef(null),te=y.useRef(null);y.useEffect(()=>{b&&T!=="exit"&&$("exit")},[b,T]),y.useEffect(()=>{Yt(()=>{$("enter")},0);const we=Yt(()=>{$("entered")},200),Ee=Yt(()=>{const L=ne.current;L&&(Zh(L),L.selectionStart=L.selectionEnd=L.value.length,L.scrollTop=L.scrollHeight)},50);return()=>{clearTimeout(we),clearTimeout(Ee),G.current&&clearTimeout(G.current),te.current&&clearTimeout(te.current)}},[]);const de=y.useCallback(()=>{te.current&&clearTimeout(te.current),A(!0),te.current=Yt(()=>{A(!1),Zh(ne.current)},250)},[]);y.useImperativeHandle(C,()=>({shake:de}),[de]);const be=y.useCallback(()=>{$("exit"),G.current=Yt(()=>{p()},150)},[p]),z=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),_e=y.useCallback(we=>{we.stopPropagation(),!we.nativeEvent.isComposing&&(we.key==="Enter"&&!we.shiftKey&&(we.preventDefault(),z()),we.key==="Escape"&&be())},[z,be]),K=[us.popup,w?us.light:"",T==="enter"?us.enter:"",T==="entered"?us.entered:"",T==="exit"?us.exit:"",N?us.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:le,className:K,"data-annotation-popup":!0,style:_,onClick:we=>we.stopPropagation(),children:[r.jsxs("div",{className:us.header,children:[S&&Object.keys(S).length>0?r.jsxs("button",{className:us.headerToggle,onClick:()=>{const we=X;q(!X),we&&Yt(()=>Zh(ne.current),0)},type:"button",children:[r.jsx("svg",{className:`${us.chevron} ${X?us.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:us.element,children:n})]}):r.jsx("span",{className:us.element,children:n}),o&&r.jsx("span",{className:us.timestamp,children:o})]}),S&&Object.keys(S).length>0&&r.jsx("div",{className:`${us.stylesWrapper} ${X?us.expanded:""}`,children:r.jsx("div",{className:us.stylesInner,children:r.jsx("div",{className:us.stylesBlock,children:Object.entries(S).map(([we,Ee])=>r.jsxs("div",{className:us.styleLine,children:[r.jsx("span",{className:us.styleProperty,children:we.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:us.styleValue,children:Ee}),";"]},we))})})}),a&&r.jsxs("div",{className:us.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),r.jsx("textarea",{ref:ne,className:us.textarea,style:{borderColor:W?x:void 0},placeholder:c,value:k,onChange:we=>j(we.target.value),onFocus:()=>P(!0),onBlur:()=>P(!1),rows:2,onKeyDown:_e}),r.jsxs("div",{className:us.actions,children:[g&&r.jsx("div",{className:us.deleteWrapper,children:r.jsx("button",{className:us.deleteButton,onClick:g,type:"button",children:r.jsx(Zw,{size:22})})}),r.jsx("button",{className:us.cancel,onClick:be,children:"Cancel"}),r.jsx("button",{className:us.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:z,disabled:!k.trim(),children:d})]})]})}),iS=({content:t,children:n,...o})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const C=g.current.getBoundingClientRect();p({top:C.top+C.height/2,right:window.innerWidth-C.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Yt(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Yt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...o,children:n}),u&&Mc.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},aS=`.styles-module__tooltip___mcXL2 {
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
}`,rS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=aS}var Ry=rS,hr=({content:t})=>r.jsx(iS,{className:Ry.tooltip,content:t,children:r.jsx(Hw,{className:Ry.tooltipIcon})}),xt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Hx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...xt.navigation},{type:"header",label:"Header",...xt.header},{type:"hero",label:"Hero",...xt.hero},{type:"section",label:"Section",...xt.section},{type:"sidebar",label:"Sidebar",...xt.sidebar},{type:"footer",label:"Footer",...xt.footer},{type:"modal",label:"Modal",...xt.modal},{type:"banner",label:"Banner",...xt.banner},{type:"drawer",label:"Drawer",...xt.drawer},{type:"popover",label:"Popover",...xt.popover},{type:"divider",label:"Divider",...xt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...xt.card},{type:"text",label:"Text",...xt.text},{type:"image",label:"Image",...xt.image},{type:"video",label:"Video",...xt.video},{type:"table",label:"Table",...xt.table},{type:"grid",label:"Grid",...xt.grid},{type:"list",label:"List",...xt.list},{type:"chart",label:"Chart",...xt.chart},{type:"codeBlock",label:"Code Block",...xt.codeBlock},{type:"map",label:"Map",...xt.map},{type:"timeline",label:"Timeline",...xt.timeline},{type:"calendar",label:"Calendar",...xt.calendar},{type:"accordion",label:"Accordion",...xt.accordion},{type:"carousel",label:"Carousel",...xt.carousel},{type:"logo",label:"Logo",...xt.logo},{type:"faq",label:"FAQ",...xt.faq},{type:"gallery",label:"Gallery",...xt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...xt.button},{type:"input",label:"Input",...xt.input},{type:"search",label:"Search",...xt.search},{type:"form",label:"Form",...xt.form},{type:"tabs",label:"Tabs",...xt.tabs},{type:"dropdown",label:"Dropdown",...xt.dropdown},{type:"toggle",label:"Toggle",...xt.toggle},{type:"stepper",label:"Stepper",...xt.stepper},{type:"rating",label:"Rating",...xt.rating},{type:"fileUpload",label:"File Upload",...xt.fileUpload},{type:"checkbox",label:"Checkbox",...xt.checkbox},{type:"radio",label:"Radio",...xt.radio},{type:"slider",label:"Slider",...xt.slider},{type:"datePicker",label:"Date Picker",...xt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...xt.avatar},{type:"badge",label:"Badge",...xt.badge},{type:"tag",label:"Tag",...xt.tag},{type:"breadcrumb",label:"Breadcrumb",...xt.breadcrumb},{type:"pagination",label:"Pagination",...xt.pagination},{type:"progress",label:"Progress",...xt.progress},{type:"alert",label:"Alert",...xt.alert},{type:"toast",label:"Toast",...xt.toast},{type:"notification",label:"Notification",...xt.notification},{type:"tooltip",label:"Tooltip",...xt.tooltip},{type:"stat",label:"Stat",...xt.stat},{type:"skeleton",label:"Skeleton",...xt.skeleton},{type:"chip",label:"Chip",...xt.chip},{type:"icon",label:"Icon",...xt.icon},{type:"spinner",label:"Spinner",...xt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...xt.pricing},{type:"testimonial",label:"Testimonial",...xt.testimonial},{type:"cta",label:"CTA",...xt.cta},{type:"productCard",label:"Product Card",...xt.productCard},{type:"profile",label:"Profile",...xt.profile},{type:"feature",label:"Feature",...xt.feature},{type:"team",label:"Team",...xt.team},{type:"login",label:"Login",...xt.login},{type:"contact",label:"Contact",...xt.contact}]}],Ni={};for(const t of Hx)for(const n of t.items)Ni[n.type]=n;function He({w:t,h:n=3,strong:o}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:o?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Qn({w:t,h:n,radius:o=3,style:a}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function $o({size:t}){return r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function lS({width:t,height:n}){const o=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${o}px`,gap:t*.02},children:[r.jsx(Qn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[r.jsx(He,{w:t*.06}),r.jsx(He,{w:t*.07}),r.jsx(He,{w:t*.05}),r.jsx(He,{w:t*.06})]}),r.jsx(Qn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function cS({width:t,height:n,text:o}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[o?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:o}):r.jsx(He,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx(He,{w:t*.6}),r.jsx(He,{w:t*.4}),r.jsx(Qn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function uS({width:t,height:n}){const o=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx(He,{w:t*.6,h:4,strong:!0}),Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Qn,{w:10,h:10,radius:2}),r.jsx(He,{w:t*(.4+c*17%30/100)})]},c))]})}function dS({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(He,{w:"60%",h:3,strong:!0}),r.jsx(He,{w:"80%",h:2}),r.jsx(He,{w:"70%",h:2}),r.jsx(He,{w:"60%",h:2})]},c))})}function fS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(He,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(He,{w:"90%"}),r.jsx(He,{w:"70%"}),r.jsx(He,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Qn,{w:70,h:26,radius:4}),r.jsx(Qn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function hS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(He,{w:"70%",h:4,strong:!0}),r.jsx(He,{w:"95%",h:2}),r.jsx(He,{w:"85%",h:2}),r.jsx(He,{w:"50%",h:2})]})]})}function mS({width:t,height:n,text:o}){if(o)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:o});const a=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(He,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>r.jsx(He,{w:`${70+u*13%25}%`,h:2},u))]})}function pS({width:t,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function _S({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:o},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(He,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:o},(d,h)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(He,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function gS({width:t,height:n}){const o=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx($o,{size:8}),r.jsx(He,{w:`${55+c*17%35}%`,h:2})]},c))})}function yS({width:t,height:n,text:o}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:o}):r.jsx(He,{w:Math.max(20,t*.5),h:3,strong:!0})})}function xS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(He,{w:Math.min(80,t*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(He,{w:"40%",h:2})})]})}function bS({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(He,{w:60+c*17%30,h:2}),r.jsx(Qn,{w:"100%",h:28,radius:4})]},c)),r.jsx(Qn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function vS({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(a,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(He,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(He,{w:"80%",h:2}),r.jsx(He,{w:"65%",h:2}),r.jsx(He,{w:"75%",h:2})]})]})}function wS({width:t,height:n}){const o=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:o-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:t/2,cy:n*.38,r:o*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${t/2-o*.55} ${n*.78} C${t/2-o*.55} ${n*.55} ${t/2+o*.55} ${n*.55} ${t/2+o*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function SS({width:t,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0})})}function kS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(He,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx(He,{w:t*.35})]})}function CS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[r.jsx(He,{w:t*.3,h:4,strong:!0}),r.jsx(He,{w:t*.7}),r.jsx(He,{w:t*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[r.jsx(Qn,{w:"33%",h:"100%",radius:4}),r.jsx(Qn,{w:"33%",h:"100%",radius:4}),r.jsx(Qn,{w:"33%",h:"100%",radius:4})]})]})}function jS({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:o*a},(c,u)=>r.jsx(Qn,{w:"100%",h:"100%",radius:4},u))})}function MS({width:t,height:n}){const o=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(He,{w:t*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:o},(a,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(He,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function TS({width:t,height:n}){const o=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:o,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t-o,cy:n/2,r:o*.7,fill:"var(--agd-bar)"})]})}function ES({width:t,height:n}){const o=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${o*.6}px`,gap:6},children:[r.jsx($o,{size:Math.min(14,n*.4)}),r.jsx(He,{w:"50%",h:2})]})}function DS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx($o,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:"60%",h:3,strong:!0}),r.jsx(He,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function AS({width:t,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function NS({width:t,height:n}){const o=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(o*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(c,u)=>{const d=30+(u*37+17)%55;return r.jsx(Qn,{w:a,h:`${d}%`,radius:2},u)})})}function RS({width:t,height:n}){const o=Math.min(t,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Qn,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${o*.6}px solid var(--agd-bar-strong)`,borderTop:`${o*.4}px solid transparent`,borderBottom:`${o*.4}px solid transparent`,marginLeft:o*.15}})})]})}function LS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(He,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function BS({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(He,{w:40+c*13%20,h:2,strong:c===o-1})]},c))})}function OS({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:o},(c,u)=>r.jsx(Qn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function zS({width:t}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function $S({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(He,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function IS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Qn,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx($o,{size:5}),r.jsx($o,{size:5}),r.jsx($o,{size:5})]})]})}function PS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx(He,{w:t*.4,h:3,strong:!0}),r.jsx(He,{w:t*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(o,a)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx($o,{size:5}),r.jsx(He,{w:`${50+a*17%35}%`,h:2})]},a))}),r.jsx(Qn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function HS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(He,{w:"90%",h:2}),r.jsx(He,{w:"75%",h:2}),r.jsx(He,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx($o,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(He,{w:60,h:3,strong:!0}),r.jsx(He,{w:40,h:2})]})]})]})}function VS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(He,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx(He,{w:t*.35}),r.jsx(Qn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function US({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:"40%",h:3,strong:!0}),r.jsx(He,{w:"70%",h:2})]})]})}function WS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(He,{w:t*.4,h:3,strong:!0}),r.jsx(Qn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function FS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(He,{w:t*.5,h:2}),r.jsx(He,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx(He,{w:t*.3,h:2})]})}function YS({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:o},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<o-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function XS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(He,{w:Math.max(16,t*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function qS({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function GS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function KS({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx($o,{size:8}),c<o-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(He,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function QS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(He,{w:t*.4,h:2}),r.jsx(He,{w:t*.25,h:2})]})}function ZS({width:t,height:n}){const o=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx($o,{size:6}),r.jsx($o,{size:6}),r.jsx($o,{size:6})]}),Array.from({length:o},(a,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<o-1?12:0},children:r.jsx(He,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function JS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(He,{w:t*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(He,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function e4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx($o,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:"50%",h:3,strong:!0}),r.jsx(He,{w:"75%",h:2})]}),r.jsx(He,{w:30,h:2})]})}function t4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(He,{w:"65%",h:4,strong:!0}),r.jsx(He,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(He,{w:"30%",h:5,strong:!0}),r.jsx(Qn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function n4({width:t,height:n}){const o=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx($o,{size:o}),r.jsx(He,{w:t*.45,h:4,strong:!0}),r.jsx(He,{w:t*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(He,{w:20,h:3,strong:!0}),r.jsx(He,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(He,{w:20,h:3,strong:!0}),r.jsx(He,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(He,{w:20,h:3,strong:!0}),r.jsx(He,{w:28,h:2})]})]})]})}function s4({width:t,height:n}){const o=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:t-o,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx(He,{w:o*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(He,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function o4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(He,{w:"70%",h:3,strong:!0}),r.jsx(He,{w:"90%",h:2}),r.jsx(He,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function i4({width:t,height:n}){const o=Math.min(n*.7,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[r.jsx(Qn,{w:o,h:o,radius:o*.25}),r.jsx(He,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function a4({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(He,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function r4({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:o*a},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function l4({width:t,height:n}){const o=Math.min(t,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-o+2)/2,width:o-2,height:o-2,rx:o*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${o*.25} ${n/2}l${o*.2} ${o*.2} ${o*.3}-${o*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function c4({width:t,height:n}){const o=Math.min(t,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:t/2,cy:n/2,r:o*.45,fill:"var(--agd-bar)"})]})}function u4({width:t,height:n}){const o=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:o,borderRadius:o/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:o/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function d4({width:t,height:n}){const o=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-o-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:o,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(He,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(He,{w:t*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function f4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function h4({width:t,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx(He,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function m4({width:t,height:n}){const o=Math.min(t,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:r.jsx("path",{d:`M${t/2} ${(n-o)/2+o*.1}l${o*.12} ${o*.25} ${o*.28} ${o*.04}-${o*.2} ${o*.2} ${o*.05} ${o*.28}-${o*.25}-${o*.12}-${o*.25} ${o*.12} ${o*.05}-${o*.28}-${o*.2}-${o*.2} ${o*.28}-${o*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function p4({width:t,height:n}){const o=Math.min(t,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${t/2} ${n/2-o}a${o} ${o} 0 0 1 ${o} ${o}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function _4({width:t,height:n}){const o=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[r.jsx(Qn,{w:o,h:o,radius:o*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(He,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(He,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function g4({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx(He,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:o},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx($o,{size:a}),r.jsx(He,{w:t*.12,h:3,strong:!0}),r.jsx(He,{w:t*.08,h:2})]},u))})]})}function y4({width:t,height:n}){const o=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[r.jsx(He,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx(He,{w:t*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:o},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:Math.min(60,t*.2),h:2}),r.jsx(Qn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Qn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx(He,{w:t*.4,h:2})]})}function x4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[r.jsx(He,{w:t*.4,h:4,strong:!0}),r.jsx(He,{w:t*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:50,h:2}),r.jsx(Qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:40,h:2}),r.jsx(Qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(He,{w:50,h:2}),r.jsx(Qn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(He,{w:60,h:2}),r.jsx(Qn,{w:"100%",h:"100%",radius:4})]}),r.jsx(Qn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var b4={navigation:lS,hero:cS,sidebar:uS,footer:dS,modal:fS,card:hS,text:mS,image:pS,table:_S,list:gS,button:yS,input:xS,form:bS,tabs:vS,avatar:wS,badge:SS,header:kS,section:CS,grid:jS,dropdown:MS,toggle:TS,search:ES,toast:DS,progress:AS,chart:NS,video:RS,tooltip:LS,breadcrumb:BS,pagination:OS,divider:zS,accordion:$S,carousel:IS,pricing:PS,testimonial:HS,cta:VS,alert:US,banner:WS,stat:FS,stepper:YS,tag:XS,rating:qS,map:GS,timeline:KS,fileUpload:QS,codeBlock:ZS,calendar:JS,notification:e4,productCard:t4,profile:n4,drawer:s4,popover:o4,logo:i4,faq:a4,gallery:r4,checkbox:l4,radio:c4,slider:u4,datePicker:d4,skeleton:f4,chip:h4,icon:m4,spinner:p4,feature:_4,team:g4,login:y4,contact:x4};function v4({type:t,width:n,height:o,text:a}){const c=b4[t];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:o,text:a})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var w4=`svg[fill=none] {
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
}`,S4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=w4}var Re=S4,Qr=24,Fu=5;function Ly(t,n,o,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],C=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const le of n)o.has(le.id)||k.push(le);c&&k.push(...c);for(const le of k){const G=le.x,te=le.x+le.width,de=le.x+le.width/2,be=le.y,z=le.y+le.height,_e=le.y+le.height/2;for(const K of S)for(const we of[G,te,de]){const Ee=we-K;Math.abs(Ee)<Fu&&Math.abs(Ee)<Math.abs(u)&&(u=Ee)}for(const K of C)for(const we of[be,z,_e]){const Ee=we-K;Math.abs(Ee)<Fu&&Math.abs(Ee)<Math.abs(d)&&(d=Ee)}}const j=Math.abs(u)<Fu?u:0,N=Math.abs(d)<Fu?d:0,A=[],T=new Set,$=h+j,W=p+j,P=g+j,X=_+N,q=x+N,ne=b+N;for(const le of k){const G=le.x,te=le.x+le.width,de=le.x+le.width/2,be=le.y,z=le.y+le.height,_e=le.y+le.height/2;for(const K of[G,de,te])for(const we of[$,P,W])if(Math.abs(we-K)<.5){const Ee=`x:${Math.round(K)}`;T.has(Ee)||(T.add(Ee),A.push({axis:"x",pos:K}))}for(const K of[be,_e,z])for(const we of[X,ne,q])if(Math.abs(we-K)<.5){const Ee=`y:${Math.round(K)}`;T.has(Ee)||(T.add(Ee),A.push({axis:"y",pos:K}))}}return{dx:j,dy:N,guides:A}}function By(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function k4({placements:t,onChange:n,activeComponent:o,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:C}){const[k,j]=y.useState(new Set),[N,A]=y.useState(null),[T,$]=y.useState(null),[W,P]=y.useState(null),[X,q]=y.useState([]),[ne,le]=y.useState(null),[G,te]=y.useState(!1),de=y.useRef(!1),[be,z]=y.useState(new Set),_e=y.useRef(new Map),K=y.useRef(null),we=y.useRef(null),Ee=y.useRef(t);Ee.current=t;const L=y.useRef(_);L.current=_;const H=y.useRef(b);H.current=b;const B=y.useRef(w);B.current=w;const oe=y.useRef(x);y.useEffect(()=>{x!==oe.current&&(oe.current=x,j(new Set))},[x]);const ze=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==ze.current){ze.current=S;const ae=new Set(Ee.current.map(ce=>ce.id));ae.size>0&&(z(ae),j(new Set),we.current=null,Yt(()=>{n([]),z(new Set)},180))}},[S,n]),y.useEffect(()=>{const ae=ce=>{const Ce=ce.target;if(!(Ce.tagName==="INPUT"||Ce.tagName==="TEXTAREA"||Ce.isContentEditable)){if((ce.key==="Backspace"||ce.key==="Delete")&&k.size>0){ce.preventDefault();const qe=new Set(k);z(qe),j(new Set),Yt(()=>{n(Ee.current.filter(Xe=>!qe.has(Xe.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ce.key)&&k.size>0){ce.preventDefault();const qe=ce.shiftKey?20:1,Xe=ce.key==="ArrowLeft"?-qe:ce.key==="ArrowRight"?qe:0,Ie=ce.key==="ArrowUp"?-qe:ce.key==="ArrowDown"?qe:0;n(t.map(ct=>k.has(ct.id)?{...ct,x:Math.max(0,ct.x+Xe),y:Math.max(0,ct.y+Ie)}:ct));return}if(ce.key==="Escape"){o?a(null):k.size>0&&j(new Set);return}}};return document.addEventListener("keydown",ae),()=>document.removeEventListener("keydown",ae)},[k,o,t,n,a]);const Ae=y.useCallback(ae=>{if(ae.button!==0||p||ae.target.closest(`.${Re.placement}`))return;ae.preventDefault(),ae.stopPropagation();const Ce=window.scrollY,Me=ae.clientX,qe=ae.clientY;if(o){we.current="place",d==null||d(!0);let Xe=!1,Ie=Me,ct=qe;const pt=Ye=>{Ie=Ye.clientX,ct=Ye.clientY;const I=Math.abs(Ie-Me),Z=Math.abs(ct-qe);if((I>5||Z>5)&&(Xe=!0),Xe){const ge=Math.min(Me,Ie),ke=Math.min(qe,ct),Ue=Math.abs(Ie-Me),We=Math.abs(ct-qe);A({x:ge,y:ke,w:Ue,h:We}),P({x:Ye.clientX+12,y:Ye.clientY+12,text:`${Math.round(Ue)} × ${Math.round(We)}`})}},Ve=Ye=>{window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",Ve),A(null),P(null),we.current=null,d==null||d(!1);const I=xt[o];let Z,ge,ke,Ue;Xe?(Z=Math.min(Me,Ie),ge=Math.min(qe,ct)+Ce,ke=Math.max(Qr,Math.abs(Ie-Me)),Ue=Math.max(Qr,Math.abs(ct-qe))):(ke=I.width,Ue=I.height,Z=Me-ke/2,ge=qe+Ce-Ue/2),Z=Math.max(0,Z),ge=Math.max(0,ge);const We={id:By(),type:o,x:Z,y:ge,width:ke,height:Ue,scrollY:Ce,timestamp:Date.now()},Ne=[...t,We];n(Ne),j(new Set([We.id])),a(null)};window.addEventListener("mousemove",pt),window.addEventListener("mouseup",Ve)}else{ae.shiftKey||j(new Set),we.current="select";let Xe=!1;const Ie=pt=>{const Ve=Math.abs(pt.clientX-Me),Ye=Math.abs(pt.clientY-qe);if((Ve>4||Ye>4)&&(Xe=!0),Xe){const I=Math.min(Me,pt.clientX),Z=Math.min(qe,pt.clientY);$({x:I,y:Z,w:Math.abs(pt.clientX-Me),h:Math.abs(pt.clientY-qe)})}},ct=pt=>{if(window.removeEventListener("mousemove",Ie),window.removeEventListener("mouseup",ct),we.current=null,Xe){const Ve=Math.min(Me,pt.clientX),Ye=Math.min(qe,pt.clientY)+Ce,I=Math.abs(pt.clientX-Me),Z=Math.abs(pt.clientY-qe),ge=new Set(ae.shiftKey?k:new Set);for(const ke of t)ke.y-Ce,ke.x+ke.width>Ve&&ke.x<Ve+I&&ke.y+ke.height>Ye&&ke.y<Ye+Z&&ge.add(ke.id);j(ge)}$(null)};window.addEventListener("mousemove",Ie),window.addEventListener("mouseup",ct)}},[o,p,t,n,k]),Oe=y.useCallback((ae,ce)=>{var We;if(ae.button!==0)return;const Ce=ae.target;if(Ce.closest(`.${Re.handle}`)||Ce.closest(`.${Re.deleteButton}`))return;ae.preventDefault(),ae.stopPropagation();let Me;ae.shiftKey?(Me=new Set(k),Me.has(ce)?Me.delete(ce):Me.add(ce)):k.has(ce)?Me=new Set(k):Me=new Set([ce]),j(Me),(Me.size!==k.size||[...Me].some(Ne=>!k.has(Ne)))&&((We=L.current)==null||We.call(L,Me,ae.shiftKey));const Xe=ae.clientX,Ie=ae.clientY,ct=new Map;for(const Ne of t)Me.has(Ne.id)&&ct.set(Ne.id,{x:Ne.x,y:Ne.y});we.current="move",d==null||d(!0);let pt=!1,Ve=!1,Ye=t,I=0,Z=0;const ge=new Map;for(const Ne of t)ct.has(Ne.id)&&ge.set(Ne.id,{w:Ne.width,h:Ne.height});const ke=Ne=>{var An;const Nt=Ne.clientX-Xe,Et=Ne.clientY-Ie;if((Math.abs(Nt)>2||Math.abs(Et)>2)&&(pt=!0),!pt)return;if(Ne.altKey&&!Ve){Ve=!0;const at=[];for(const Wt of t)ct.has(Wt.id)&&at.push({...Wt,id:By(),timestamp:Date.now()});Ye=[...t,...at]}let Pt=1/0,_t=1/0,tt=-1/0,Ot=-1/0;for(const[at,Wt]of ct){const Tn=ge.get(at);Tn&&(Pt=Math.min(Pt,Wt.x+Nt),_t=Math.min(_t,Wt.y+Et),tt=Math.max(tt,Wt.x+Nt+Tn.w),Ot=Math.max(Ot,Wt.y+Et+Tn.h))}const on={x:Pt,y:_t,width:tt-Pt,height:Ot-_t},{dx:Qt,dy:Ke,guides:Ut}=Ly(on,Ye,new Set(ct.keys()),void 0,g);q(Ut);const Jt=Nt+Qt,Ht=Et+Ke;I=Jt,Z=Ht,n(Ye.map(at=>{const Wt=ct.get(at.id);return Wt?{...at,x:Math.max(0,Wt.x+Jt),y:Math.max(0,Wt.y+Ht)}:at})),(An=H.current)==null||An.call(H,Jt,Ht)},Ue=()=>{var Ne;window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Ue),we.current=null,d==null||d(!1),q([]),(Ne=B.current)==null||Ne.call(B,I,Z,pt)};window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Ue)},[k,t,n,d]),Ze=y.useCallback((ae,ce,Ce)=>{ae.preventDefault(),ae.stopPropagation();const Me=t.find(ge=>ge.id===ce);if(!Me)return;j(new Set([ce])),we.current="resize",d==null||d(!0);const qe=ae.clientX,Xe=ae.clientY,Ie=Me.width,ct=Me.height,pt=Me.x,Ve=Me.y,Ye={left:Ce.includes("w"),right:Ce.includes("e"),top:Ce.includes("n"),bottom:Ce.includes("s")},I=ge=>{const ke=ge.clientX-qe,Ue=ge.clientY-Xe;let We=Ie,Ne=ct,Nt=pt,Et=Ve;Ce.includes("e")&&(We=Math.max(Qr,Ie+ke)),Ce.includes("w")&&(We=Math.max(Qr,Ie-ke),Nt=pt+Ie-We),Ce.includes("s")&&(Ne=Math.max(Qr,ct+Ue)),Ce.includes("n")&&(Ne=Math.max(Qr,ct-Ue),Et=Ve+ct-Ne);const Pt={x:Nt,y:Et,width:We,height:Ne},{dx:_t,dy:tt,guides:Ot}=Ly(Pt,Ee.current,new Set([ce]),Ye,g);q(Ot),_t!==0&&(Ye.right?We+=_t:Ye.left&&(Nt+=_t,We-=_t)),tt!==0&&(Ye.bottom?Ne+=tt:Ye.top&&(Et+=tt,Ne-=tt)),n(Ee.current.map(on=>on.id===ce?{...on,x:Nt,y:Et,width:We,height:Ne}:on)),P({x:ge.clientX+12,y:ge.clientY+12,text:`${Math.round(We)} × ${Math.round(Ne)}`})},Z=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",Z),P(null),we.current=null,d==null||d(!1),q([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",Z)},[t,n,d]),Je=y.useCallback(ae=>{we.current=null,z(ce=>{const Ce=new Set(ce);return Ce.add(ae),Ce}),j(ce=>{const Ce=new Set(ce);return Ce.delete(ae),Ce}),Yt(()=>{n(Ee.current.filter(ce=>ce.id!==ae)),z(ce=>{const Ce=new Set(ce);return Ce.delete(ae),Ce})},180)},[n]),Xt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},qt=y.useCallback(ae=>{const ce=t.find(Ce=>Ce.id===ae);ce&&(de.current=!!ce.text,le(ae),te(!1))},[t]),Dt=y.useCallback(()=>{ne&&(te(!0),Yt(()=>{le(null),te(!1)},150))},[ne]);y.useEffect(()=>{u&&ne&&Dt()},[u]);const It=y.useCallback(ae=>{ne&&(n(t.map(ce=>ce.id===ne?{...ce,text:ae.trim()||void 0}:ce)),Dt())},[ne,t,n,Dt]),nn=typeof window<"u"?window.scrollY:0,sn=["nw","ne","se","sw"],Ge=C?"#f97316":"#3c82f7",yt=[{dir:"n",cls:Re.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Ge})})},{dir:"e",cls:Re.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Ge})})},{dir:"s",cls:Re.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Ge})})},{dir:"w",cls:Re.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Ge})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:K,className:`${Re.overlay} ${c?"":Re.light} ${o?Re.placing:""} ${p?Re.passthrough:""} ${u?Re.overlayExiting:""} ${C?Re.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ae,children:t.map(ae=>{var qe;const ce=k.has(ae.id),Ce=((qe=Ni[ae.type])==null?void 0:qe.label)||ae.type,Me=ae.y-nn;return r.jsxs("div",{"data-design-placement":ae.id,className:`${Re.placement} ${ce?Re.selected:""} ${be.has(ae.id)?Re.exiting:""}`,style:{left:ae.x,top:Me,width:ae.width,height:ae.height,position:"fixed"},onMouseDown:Xe=>Oe(Xe,ae.id),onDoubleClick:()=>qt(ae.id),children:[r.jsx("span",{className:Re.placementLabel,children:Ce}),r.jsx("span",{className:`${Re.placementAnnotation} ${ae.text?Re.annotationVisible:""}`,children:(ae.text&&_e.current.set(ae.id,ae.text),ae.text||_e.current.get(ae.id)||"")}),r.jsx("div",{className:Re.placementContent,children:r.jsx(v4,{type:ae.type,width:ae.width,height:ae.height,text:ae.text})}),r.jsx("div",{className:Re.deleteButton,onMouseDown:Xe=>Xe.stopPropagation(),onClick:()=>Je(ae.id),children:"✕"}),sn.map(Xe=>r.jsx("div",{className:`${Re.handle} ${Re[`handle${Xe.charAt(0).toUpperCase()}${Xe.slice(1)}`]}`,onMouseDown:Ie=>Ze(Ie,ae.id,Xe)},Xe)),yt.map(({dir:Xe,cls:Ie,arrow:ct})=>r.jsx("div",{className:`${Re.edgeHandle} ${Ie}`,onMouseDown:pt=>Ze(pt,ae.id,Xe),children:ct},Xe))]},ae.id)})}),ne&&(()=>{var Ve,Ye;const ae=t.find(I=>I.id===ne);if(!ae)return null;const ce=ae.y-nn,Ce=ae.x+ae.width/2,Me=ce-8,qe=ce+ae.height+8,Xe=Me>200,Ie=qe<window.innerHeight-100,ct=Math.max(160,Math.min(window.innerWidth-160,Ce));let pt;return Xe?pt={left:ct,bottom:window.innerHeight-Me}:Ie?pt={left:ct,top:qe}:pt={left:ct,top:Math.max(80,window.innerHeight/2-80)},r.jsx(kd,{element:((Ve=Ni[ae.type])==null?void 0:Ve.label)||ae.type,placeholder:Xt[ae.type]||"Label or content text",initialValue:(Ye=ae.text)!=null?Ye:"",submitLabel:de.current?"Save":"Set",onSubmit:It,onCancel:Dt,onDelete:de.current?()=>{It("")}:void 0,isExiting:G,lightMode:!c,style:pt})})(),N&&r.jsx("div",{className:Re.drawBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),T&&r.jsx("div",{className:Re.selectBox,style:{left:T.x,top:T.y,width:T.w,height:T.h},"data-feedback-toolbar":!0}),W&&r.jsx("div",{className:Re.sizeIndicator,style:{left:W.x,top:W.y},"data-feedback-toolbar":!0,children:W.text}),X.map((ae,ce)=>r.jsx("div",{className:Re.guideLine,style:ae.axis==="x"?{position:"fixed",left:ae.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ae.pos-nn,right:0,height:1},"data-feedback-toolbar":!0},`${ae.axis}-${ae.pos}-${ce}`))]})}function C4(t){if(!t)return"";const n=t.scrollTop>2,o=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Re.fadeTop:""} ${o?Re.fadeBottom:""}`}var R="currentColor",De="0.5";function j4({type:t}){switch(t){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:R,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:R,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:R,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:R,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:R,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:R,strokeWidth:De})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:R,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:R,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:R,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:R,strokeWidth:De})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:R,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:R,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:R,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:R,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:R,strokeWidth:De,fill:R,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:R,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:R,strokeWidth:De})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:R,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:R,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:R,strokeWidth:De})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:R,strokeWidth:De}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:R,strokeWidth:De,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:R,strokeWidth:De,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:R,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:R,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:R,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:R,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:R,strokeWidth:De})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:R,strokeWidth:De})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:R,strokeWidth:De,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:R,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:R,strokeWidth:De}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:R,strokeWidth:De})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:R,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:R,strokeWidth:De,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:R,strokeWidth:De,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:R,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:R,opacity:".15",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:R,strokeWidth:De})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:R,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:R,strokeWidth:De})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:R,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:R,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:R,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:R,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:R,strokeWidth:De,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:R,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:R,strokeWidth:De})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:R,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:R,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:R,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:R,strokeWidth:De})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:R,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:R,opacity:".2",stroke:R,strokeWidth:De}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:R,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:R,strokeWidth:De}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:R,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:R,strokeWidth:De})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:R,strokeWidth:De,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:R,strokeWidth:De,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:R,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:R,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:R,strokeWidth:De,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:R,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:R,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:R,opacity:".15",stroke:R,strokeWidth:De})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:R,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:R,opacity:".2",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:R,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:R,strokeWidth:De,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:R,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:R,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:R,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:R,strokeWidth:De}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:R,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:R,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:R,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:R,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:R,strokeWidth:De,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:R,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:R,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:R,strokeWidth:De})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:R,strokeWidth:De,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:R,strokeWidth:De})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:R,strokeWidth:De}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:R,strokeWidth:De,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:R,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:R,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:R,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:R,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:R,strokeWidth:De})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:R,strokeWidth:De,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:R,strokeWidth:De}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:R,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:R,strokeWidth:De})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:R,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:R,strokeWidth:De,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:R,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:R,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:R,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:R,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:R,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:R,opacity:".08",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:R,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:R,strokeWidth:De,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:R,strokeWidth:De,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:R,strokeWidth:De,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:R,strokeWidth:De,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:R,strokeWidth:De,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:R,strokeWidth:De,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:R,strokeWidth:De,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:R,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:R,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:R,strokeWidth:De,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:R,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:R,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:R,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:R,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:R,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:R,strokeWidth:De}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:R,opacity:".2"})]});default:return null}}function M4({activeType:t,onSelect:n,onDragStart:o,scrollRef:a,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:a,className:`${Re.placeScroll} ${c||""}`,children:Hx.map(d=>r.jsxs("div",{className:Re.paletteSection,children:[r.jsx("div",{className:Re.paletteSectionTitle,children:d.section}),d.items.map(h=>r.jsxs("div",{className:`${Re.paletteItem} ${t===h.type?Re.active:""} ${u?Re.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&o(h.type,p)},children:[r.jsx("div",{className:Re.paletteItemIcon,children:r.jsx(j4,{type:h.type})}),r.jsx("span",{className:Re.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function T4({value:t,suffix:n}){const[o,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=o!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Yt(()=>a(null),250)}else g.current=n},[t,n]),o===null?r.jsxs(r.Fragment,{children:[t,n?` ${n}`:""]}):x?r.jsxs("span",{className:Re.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),r.jsxs("span",{className:`${Re.rollingNum} ${d==="up"?Re.exitUp:Re.exitDown}`,children:[o," ",c]},`o${o}-${t}`),r.jsxs("span",{className:`${Re.rollingNum} ${d==="up"?Re.enterUp:Re.enterDown}`,children:[t," ",n]},`n${t}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:Re.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:t}),r.jsx("span",{className:`${Re.rollingNum} ${d==="up"?Re.exitUp:Re.exitDown}`,children:o},`o${o}-${t}`),r.jsx("span",{className:`${Re.rollingNum} ${d==="up"?Re.enterUp:Re.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function E4({activeType:t,onSelect:n,isDarkMode:o,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[C,k]=y.useState(!1),[j,N]=y.useState("exit"),[A,T]=y.useState(!1),[$,W]=y.useState(!0),P=y.useRef(0),X=y.useRef(""),q=y.useRef(0),ne=y.useRef(),le=y.useRef(null),[G,te]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(ne.current),cancelAnimationFrame(q.current),q.current=nl(()=>{q.current=nl(()=>{N("enter")})})):(cancelAnimationFrame(q.current),N("exit"),clearTimeout(ne.current),ne.current=Yt(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(q.current)),[u]);const de=h>0||a>0,be=h+a;return be>0&&(P.current=be,X.current=_?be===1?"Component":"Components":be===1?"Change":"Changes"),y.useEffect(()=>{if(de)A?W(!1):(W(!0),T(!0),nl(()=>{nl(()=>{W(!1)})}));else{W(!0);const z=Yt(()=>T(!1),300);return()=>clearTimeout(z)}},[de]),y.useEffect(()=>{if(!C)return;const z=le.current;if(!z)return;const _e=()=>te(C4(z));_e(),z.addEventListener("scroll",_e,{passive:!0});const K=new ResizeObserver(_e);return K.observe(z),()=>{z.removeEventListener("scroll",_e),K.disconnect()}},[C]),C?r.jsxs("div",{className:`${Re.palette} ${Re[j]} ${o?"":Re.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(ne.current),k(!1),N("exit"),d==null||d()))},children:[r.jsxs("div",{className:Re.paletteHeader,children:[r.jsx("div",{className:Re.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:Re.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${Re.canvasToggle} ${_?Re.active:""}`,onClick:()=>x(!_),children:[r.jsx("span",{className:Re.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:Re.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${Re.wireframePurposeWrap} ${_?"":Re.collapsed}`,children:r.jsx("div",{className:Re.wireframePurposeInner,children:r.jsx("textarea",{className:Re.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),r.jsx(M4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:le,fadeClass:G,blankCanvas:_}),A&&r.jsx("div",{className:`${Re.paletteFooterWrap} ${$?Re.footerHidden:""}`,children:r.jsx("div",{className:Re.paletteFooterInner,children:r.jsx("div",{className:Re.paletteFooterInnerContent,children:r.jsxs("div",{className:Re.paletteFooter,children:[r.jsx("span",{className:Re.paletteFooterCount,children:r.jsx(T4,{value:P.current,suffix:X.current})}),r.jsx("button",{className:Re.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function rl(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Lo(t,n){let o=t;for(;o;){if(o.matches(n))return o;o=rl(o)}return null}function D4(t,n=4){const o=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=rl(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),o.unshift(d),a=h,c++}return o.join(" > ")}function al(t){var a,c,u,d,h,p,g,_;const n=D4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const o=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(o)){const x=Lo(t,"svg");if(x){const b=rl(x);if(b instanceof HTMLElement)return{name:`graphic in ${al(b).name}`,path:n}}return{name:"graphic element",path:n}}if(o==="svg"){const x=rl(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(o==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(o==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(o==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(o)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${o} "${x.slice(0,35)}"`:o,path:n}}if(o==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(o==="span"||o==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:o,path:n}}if(o==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(o==="blockquote")return{name:"blockquote",path:n};if(o==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(o==="pre")return{name:"code block",path:n};if(o==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(o==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(o)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${o} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(C=>C.replace(/[A-Z0-9]{5,}.*$/,"")).filter(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:o==="div"?"container":o,path:n}}return{name:o,path:n}}function ec(t){var u,d,h;const n=[],o=(u=t.textContent)==null?void 0:u.trim();o&&o.length<100&&n.push(o);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Yu(t){const n=rl(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const C=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));C&&(w=`.${C}`)}if(x==="button"||x==="a"){const C=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(C)return`${x}${w} "${C}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function tc(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Vx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),A4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),N4=new Set(["input","textarea","select"]),R4=new Set(["img","video","canvas","svg"]),L4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),o={},a=t.tagName.toLowerCase();let c;A4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:N4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:R4.has(a)?c=["width","height","objectFit","borderRadius"]:L4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Vx.has(h)&&(o[u]=h)}return o}var B4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function qu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),o=[];for(const a of B4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Vx.has(u)&&o.push(`${c}: ${u}`)}return o.join("; ")}function O4(t){if(!t)return;const n={},o=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of o){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function Gu(t){const n=[],o=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return o&&n.push(`role="${o}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ku(t){const n=[];let o=t;for(;o&&o.tagName.toLowerCase()!=="html";){const a=o.tagName.toLowerCase();let c=a;if(o.id)c=`${a}#${o.id}`;else if(o.className&&typeof o.className=="string"){const d=o.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=rl(o);!o.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),o=u}return n.join(" > ")}var z4=new Set(["nav","header","main","section","article","footer","aside"]),Lm={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Oy={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},$4=new Set(["script","style","noscript","link","meta"]),I4=40;function Ux(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function yr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const o=t.parentElement;if(o){const c=Array.from(o.children).indexOf(t)+1;return`${o===document.body?"body":yr(o)} > ${n}:nth-child(${c})`}return n}function Cd(t){var d;const n=t.tagName.toLowerCase(),o=t.getAttribute("aria-label");if(o)return o;const a=t.getAttribute("role");if(a&&Lm[a])return Lm[a];if(Oy[n])return Oy[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=al(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Wx(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function Fx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const o=n.replace(/\s+/g," ");return o.length<=30?o:o.slice(0,30)+"…"}function P4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let o=n;t!==document.body&&n.length<3&&(o=Array.from(document.body.children));const a=[];return o.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if($4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<I4)return;const g=z4.has(d),_=c.getAttribute("role")&&Lm[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Ux(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Cd(c),tagName:d,selector:yr(c),role:c.getAttribute("role"),className:Wx(c),textSnippet:Fx(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function H4(t){const n=window.scrollY,o=t.getBoundingClientRect(),a=Ux(t),c={x:o.x,y:a?o.y:o.y+n,width:o.width,height:o.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Cd(t),tagName:t.tagName.toLowerCase(),selector:yr(t),role:t.getAttribute("role"),className:Wx(t),textSnippet:Fx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var zy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},$y=["nw","n","ne","e","se","s","sw","w"],Qu=24,Iy=16,Zu=5;function Py(t,n,o,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const P of n)o.has(P.id)||b.push(P.currentRect);a&&b.push(...a);for(const P of b){const X=P.x,q=P.x+P.width,ne=P.x+P.width/2,le=P.y,G=P.y+P.height,te=P.y+P.height/2;for(const de of[d,h,p])for(const be of[X,q,ne]){const z=be-de;Math.abs(z)<Zu&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const de of[g,_,x])for(const be of[le,G,te]){const z=be-de;Math.abs(z)<Zu&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<Zu?c:0,S=Math.abs(u)<Zu?u:0,C=[],k=new Set,j=d+w,N=h+w,A=p+w,T=g+S,$=_+S,W=x+S;for(const P of b){const X=P.x,q=P.x+P.width,ne=P.x+P.width/2,le=P.y,G=P.y+P.height,te=P.y+P.height/2;for(const de of[X,ne,q])for(const be of[j,A,N])if(Math.abs(be-de)<.5){const z=`x:${Math.round(de)}`;k.has(z)||(k.add(z),C.push({axis:"x",pos:de}))}for(const de of[le,te,G])for(const be of[T,W,$])if(Math.abs(be-de)<.5){const z=`y:${Math.round(de)}`;k.has(z)||(k.add(z),C.push({axis:"y",pos:de}))}}return{dx:w,dy:S,guides:C}}var V4=new Set(["script","style","noscript","link","meta","br","hr"]);function Hy(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(V4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const o=n.getBoundingClientRect();if(o.width>=Iy&&o.height>=Iy)return n;n=n.parentElement}return null}function U4({rearrangeState:t,onChange:n,isDarkMode:o,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,C]=y.useState(new Set),[k,j]=y.useState(!1),N=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==N.current&&(N.current=x,b.length>0&&j(!0))},[x,b.length]);const A=y.useRef(p);y.useEffect(()=>{p!==A.current&&(A.current=p,C(new Set))},[p]);const[T,$]=y.useState(null),[W,P]=y.useState(!1),X=y.useRef(!1),q=y.useCallback(I=>{const Z=b.find(ge=>ge.id===I);Z&&(X.current=!!Z.note,$(I),P(!1))},[b]),ne=y.useCallback(()=>{T&&(P(!0),Yt(()=>{$(null),P(!1)},150))},[T]),le=y.useCallback(I=>{T&&(n({...t,sections:b.map(Z=>Z.id===T?{...Z,note:I.trim()||void 0}:Z)}),ne())},[T,b,t,n,ne]);y.useEffect(()=>{a&&T&&ne()},[a]);const[G,te]=y.useState(new Set),de=y.useRef(new Map),[be,z]=y.useState(null),[_e,K]=y.useState(null),[we,Ee]=y.useState([]),[L,H]=y.useState(0),B=y.useRef(null),oe=y.useRef(new Set),ze=y.useRef(new Map),[Ae,Oe]=y.useState(new Map),[Ze,Je]=y.useState(new Map),Xt=y.useRef(new Set),qt=y.useRef(new Map),Dt=y.useRef(h);Dt.current=h;const It=y.useRef(g);It.current=g;const nn=y.useRef(_);nn.current=_,y.useEffect(()=>{u&&C(new Set)},[u]);const[sn,Ge]=y.useState(()=>!t.sections.some(I=>{const Z=I.originalRect,ge=I.currentRect;return Math.abs(Z.x-ge.x)>1||Math.abs(Z.y-ge.y)>1||Math.abs(Z.width-ge.width)>1||Math.abs(Z.height-ge.height)>1}));y.useEffect(()=>{if(!sn){const I=Yt(()=>Ge(!0),380);return()=>clearTimeout(I)}},[]);const yt=y.useRef(new Set);y.useEffect(()=>{yt.current=new Set(b.map(I=>I.selector))},[b]),y.useEffect(()=>{const I=()=>H(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),y.useEffect(()=>{const I=Z=>{if(B.current){z(null);return}const ge=document.elementFromPoint(Z.clientX,Z.clientY);if(!ge){z(null);return}if(ge.closest("[data-feedback-toolbar]")){z(null);return}if(ge.closest("[data-design-placement]")){z(null);return}if(ge.closest("[data-annotation-popup]")){z(null);return}const ke=Hy(ge);if(!ke){z(null);return}for(const We of yt.current)try{const Ne=document.querySelector(We);if(Ne&&(Ne===ke||ke.contains(Ne))){z(null);return}}catch{}const Ue=ke.getBoundingClientRect();z({x:Ue.x,y:Ue.y,w:Ue.width,h:Ue.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[b]),y.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),y.useEffect(()=>{const I=Z=>{var Ne,Nt,Et,Pt;if(B.current||Z.button!==0)return;const ge=Z.target;if(!ge||ge.closest("[data-feedback-toolbar]")||ge.closest("[data-design-placement]")||ge.closest("[data-annotation-popup]"))return;const ke=Hy(ge);let Ue=!1;if(ke)for(const _t of yt.current)try{const tt=document.querySelector(_t);if(tt&&(tt===ke||ke.contains(tt))){Ue=!0;break}}catch{}const We=!!(Z.shiftKey||Z.metaKey||Z.ctrlKey);if(ke&&!Ue){Z.preventDefault(),Z.stopPropagation();const _t=H4(ke),tt=[...b,_t],Ot=[...t.originalOrder,_t.id];n({...t,sections:tt,originalOrder:Ot});const on=new Set([_t.id]);C(on),(Ne=Dt.current)==null||Ne.call(Dt,on,We),z(null);const Qt=Z.clientX,Ke=Z.clientY,Ut={x:_t.currentRect.x,y:_t.currentRect.y};_t.originalRect;let Jt=!1,Ht=0,An=0;B.current="move";const at=Tn=>{var xn;const jn=Tn.clientX-Qt,Zn=Tn.clientY-Ke;if(!Jt&&(Math.abs(jn)>2||Math.abs(Zn)>2)&&(Jt=!0),!Jt)return;const Ms={x:Ut.x+jn,y:Ut.y+Zn,width:_t.currentRect.width,height:_t.currentRect.height},Jn=Py(Ms,tt,new Set([_t.id]),d);Ee(Jn.guides);const rs=jn+Jn.dx,mn=Zn+Jn.dy;Ht=rs,An=mn;const Yn=document.querySelector(`[data-rearrange-section="${_t.id}"]`);Yn&&(Yn.style.transform=`translate(${rs}px, ${mn}px)`),Oe(new Map([[_t.id,{x:Ut.x+rs,y:Ut.y+mn,width:_t.currentRect.width,height:_t.currentRect.height}]])),(xn=It.current)==null||xn.call(It,rs,mn)},Wt=()=>{var jn;window.removeEventListener("mousemove",at),window.removeEventListener("mouseup",Wt),B.current=null,Ee([]),Oe(new Map);const Tn=document.querySelector(`[data-rearrange-section="${_t.id}"]`);Tn&&(Tn.style.transform=""),Jt&&n({...t,sections:tt.map(Zn=>Zn.id===_t.id?{...Zn,currentRect:{...Zn.currentRect,x:Math.max(0,Ut.x+Ht),y:Math.max(0,Ut.y+An)}}:Zn),originalOrder:Ot}),(jn=nn.current)==null||jn.call(nn,Ht,An,Jt)};window.addEventListener("mousemove",at),window.addEventListener("mouseup",Wt)}else if(Ue&&ke){Z.preventDefault();for(const _t of b)try{const tt=document.querySelector(_t.selector);if(tt&&tt===ke){const Ot=new Set([_t.id]);C(Ot),(Nt=Dt.current)==null||Nt.call(Dt,Ot,We);return}}catch{}We||(C(new Set),(Et=Dt.current)==null||Et.call(Dt,new Set,!1))}else We||(C(new Set),(Pt=Dt.current)==null||Pt.call(Dt,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[b,t,n]),y.useEffect(()=>{const I=Z=>{const ge=Z.target;if(!(ge.tagName==="INPUT"||ge.tagName==="TEXTAREA"||ge.isContentEditable)){if((Z.key==="Backspace"||Z.key==="Delete")&&S.size>0){Z.preventDefault();const ke=new Set(S);te(Ue=>{const We=new Set(Ue);for(const Ne of ke)We.add(Ne);return We}),C(new Set),Yt(()=>{const Ue=w.current;n({...Ue,sections:Ue.sections.filter(We=>!ke.has(We.id)),originalOrder:Ue.originalOrder.filter(We=>!ke.has(We))}),te(We=>{const Ne=new Set(We);for(const Nt of ke)Ne.delete(Nt);return Ne})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Z.key)&&S.size>0){Z.preventDefault();const ke=Z.shiftKey?20:1,Ue=Z.key==="ArrowLeft"?-ke:Z.key==="ArrowRight"?ke:0,We=Z.key==="ArrowUp"?-ke:Z.key==="ArrowDown"?ke:0;n({...t,sections:b.map(Ne=>S.has(Ne.id)?{...Ne,currentRect:{...Ne.currentRect,x:Math.max(0,Ne.currentRect.x+Ue),y:Math.max(0,Ne.currentRect.y+We)}}:Ne)});return}Z.key==="Escape"&&S.size>0&&C(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[S,b,t,n]);const ae=y.useCallback((I,Z)=>{var Qt;if(I.button!==0)return;const ge=I.target;if(ge.closest(`.${Re.handle}`)||ge.closest(`.${Re.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let ke;I.shiftKey||I.metaKey||I.ctrlKey?(ke=new Set(S),ke.has(Z)?ke.delete(Z):ke.add(Z)):S.has(Z)?ke=new Set(S):ke=new Set([Z]),C(ke),(ke.size!==S.size||[...ke].some(Ke=>!S.has(Ke)))&&((Qt=Dt.current)==null||Qt.call(Dt,ke,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const We=I.clientX,Ne=I.clientY,Nt=new Map;for(const Ke of b)ke.has(Ke.id)&&Nt.set(Ke.id,{x:Ke.currentRect.x,y:Ke.currentRect.y});B.current="move";let Et=!1,Pt=0,_t=0;const tt=new Map;for(const Ke of b)if(ke.has(Ke.id)){const Ut=document.querySelector(`[data-rearrange-section="${Ke.id}"]`);tt.set(Ke.id,{outlineEl:Ut,curW:Ke.currentRect.width,curH:Ke.currentRect.height})}const Ot=Ke=>{var Jn;const Ut=Ke.clientX-We,Jt=Ke.clientY-Ne;if(Ut===0&&Jt===0)return;Et=!0;let Ht=1/0,An=1/0,at=-1/0,Wt=-1/0;for(const[rs,{curW:mn,curH:Yn}]of tt){const xn=Nt.get(rs);if(!xn)continue;const Wn=xn.x+Ut,nt=xn.y+Jt;Ht=Math.min(Ht,Wn),An=Math.min(An,nt),at=Math.max(at,Wn+mn),Wt=Math.max(Wt,nt+Yn)}const Tn=Py({x:Ht,y:An,width:at-Ht,height:Wt-An},b,ke,d),jn=Ut+Tn.dx,Zn=Jt+Tn.dy;Pt=jn,_t=Zn,Ee(Tn.guides);for(const[,{outlineEl:rs}]of tt)rs&&(rs.style.transform=`translate(${jn}px, ${Zn}px)`);const Ms=new Map;for(const[rs,{curW:mn,curH:Yn}]of tt){const xn=Nt.get(rs);if(xn){const Wn={x:Math.max(0,xn.x+jn),y:Math.max(0,xn.y+Zn),width:mn,height:Yn};Ms.set(rs,Wn)}}Oe(Ms),(Jn=It.current)==null||Jn.call(It,jn,Zn)},on=Ke=>{var Ut,Jt;window.removeEventListener("mousemove",Ot),window.removeEventListener("mouseup",on),B.current=null,Ee([]),Oe(new Map);for(const[,{outlineEl:Ht}]of tt)Ht&&(Ht.style.transform="");if(Et){const Ht=Ke.clientX-We,An=Ke.clientY-Ne;if(Math.abs(Ht)<5&&Math.abs(An)<5)n({...t,sections:b.map(at=>{const Wt=Nt.get(at.id);return Wt?{...at,currentRect:{...at.currentRect,x:Wt.x,y:Wt.y}}:at})});else{n({...t,sections:b.map(at=>{const Wt=Nt.get(at.id);return Wt?{...at,currentRect:{...at.currentRect,x:Math.max(0,Wt.x+Pt),y:Math.max(0,Wt.y+_t)}}:at})}),(Ut=nn.current)==null||Ut.call(nn,Pt,_t,!0);return}}(Jt=nn.current)==null||Jt.call(nn,0,0,!1)};window.addEventListener("mousemove",Ot),window.addEventListener("mouseup",on)},[S,b,t,n]),ce=y.useCallback((I,Z,ge)=>{I.preventDefault(),I.stopPropagation();const ke=b.find(Ot=>Ot.id===Z);if(!ke)return;C(new Set([Z])),B.current="resize";const Ue=I.clientX,We=I.clientY,Ne={...ke.currentRect};ke.originalRect;const Nt=Ne.width/Ne.height;let Et={...Ne};const Pt=document.querySelector(`[data-rearrange-section="${Z}"]`),_t=Ot=>{const on=Ot.clientX-Ue,Qt=Ot.clientY-We;let Ke=Ne.x,Ut=Ne.y,Jt=Ne.width,Ht=Ne.height;if(ge.includes("e")&&(Jt=Math.max(Qu,Ne.width+on)),ge.includes("w")&&(Jt=Math.max(Qu,Ne.width-on),Ke=Ne.x+Ne.width-Jt),ge.includes("s")&&(Ht=Math.max(Qu,Ne.height+Qt)),ge.includes("n")&&(Ht=Math.max(Qu,Ne.height-Qt),Ut=Ne.y+Ne.height-Ht),Ot.shiftKey)if(ge.length===2){const at=Math.abs(Jt-Ne.width),Wt=Math.abs(Ht-Ne.height);at>Wt?Ht=Jt/Nt:Jt=Ht*Nt,ge.includes("w")&&(Ke=Ne.x+Ne.width-Jt),ge.includes("n")&&(Ut=Ne.y+Ne.height-Ht)}else ge==="e"||ge==="w"?Ht=Jt/Nt:Jt=Ht*Nt,ge==="w"&&(Ke=Ne.x+Ne.width-Jt),ge==="n"&&(Ut=Ne.y+Ne.height-Ht);Et={x:Ke,y:Ut,width:Jt,height:Ht},Pt&&(Pt.style.left=`${Ke}px`,Pt.style.top=`${Ut-L}px`,Pt.style.width=`${Jt}px`,Pt.style.height=`${Ht}px`),K({x:Ot.clientX+12,y:Ot.clientY+12,text:`${Math.round(Jt)} × ${Math.round(Ht)}`}),Oe(new Map([[Z,Et]]))},tt=()=>{window.removeEventListener("mousemove",_t),window.removeEventListener("mouseup",tt),K(null),B.current=null,Oe(new Map),n({...t,sections:b.map(Ot=>Ot.id===Z?{...Ot,currentRect:Et}:Ot)})};window.addEventListener("mousemove",_t),window.addEventListener("mouseup",tt)},[b,t,n,L]),Ce=y.useCallback(I=>{te(Z=>{const ge=new Set(Z);return ge.add(I),ge}),C(Z=>{const ge=new Set(Z);return ge.delete(I),ge}),Yt(()=>{const Z=w.current;n({...Z,sections:Z.sections.filter(ge=>ge.id!==I),originalOrder:Z.originalOrder.filter(ge=>ge!==I)}),te(ge=>{const ke=new Set(ge);return ke.delete(I),ke})},180)},[n]),Me=I=>{const Z=I.originalRect,ge=I.currentRect;return Math.abs(Z.x-ge.x)>1||Math.abs(Z.y-ge.y)>1||Math.abs(Z.width-ge.width)>1||Math.abs(Z.height-ge.height)>1},qe=I=>{const Z=I.originalRect,ge=I.currentRect;return Math.abs(Z.x-ge.x)>1||Math.abs(Z.y-ge.y)>1},Xe=I=>{const Z=I.originalRect,ge=I.currentRect;return Math.abs(Z.width-ge.width)>1||Math.abs(Z.height-ge.height)>1};for(const I of b)ze.current.has(I.id)||(qe(I)?ze.current.set(I.id,"move"):Xe(I)&&ze.current.set(I.id,"resize"));for(const I of ze.current.keys())b.some(Z=>Z.id===I)||ze.current.delete(I);const Ie=b.filter(I=>{try{if(G.has(I.id)||S.has(I.id))return!0;const Z=document.querySelector(I.selector);if(!Z)return!1;const ge=Z.getBoundingClientRect(),ke=I.originalRect;return Math.abs(ge.width-ke.width)+Math.abs(ge.height-ke.height)<200}catch{return!1}}),ct=Ie.filter(I=>Me(I)),pt=Ie.filter(I=>!Me(I)),Ve=new Set(ct.map(I=>I.id));for(const I of oe.current)Ve.has(I)||oe.current.delete(I);const Ye=[...Ve].sort().join(",");for(const I of ct)qt.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return y.useEffect(()=>{const I=Xt.current;Xt.current=Ve;const Z=new Map;for(const ge of I)if(!Ve.has(ge)){if(!b.some(Ue=>Ue.id===ge))continue;const ke=qt.current.get(ge);ke&&(Z.set(ge,{orig:ke.originalRect,target:ke.currentRect,isFixed:ke.isFixed}),qt.current.delete(ge))}if(Z.size>0){Je(ke=>{const Ue=new Map(ke);for(const[We,Ne]of Z)Ue.set(We,Ne);return Ue});const ge=Yt(()=>{Je(ke=>{const Ue=new Map(ke);for(const We of Z.keys())Ue.delete(We);return Ue})},250);return()=>clearTimeout(ge)}},[Ye,b]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${Re.rearrangeOverlay} ${o?"":Re.light} ${a?Re.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[be&&r.jsx("div",{className:Re.hoverHighlight,style:{left:be.x,top:be.y,width:be.w,height:be.h}}),pt.map(I=>{const Z=I.currentRect,ge=I.isFixed?Z.y:Z.y-L,ke=zy,Ue=S.has(I.id);return r.jsxs("div",{"data-rearrange-section":I.id,className:`${Re.sectionOutline} ${Ue?Re.selected:""} ${k||a||G.has(I.id)?Re.exiting:""}`,style:{left:Z.x,top:ge,width:Z.width,height:Z.height,borderColor:ke.border,backgroundColor:ke.bg,...sn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:We=>ae(We,I.id),onDoubleClick:()=>q(I.id),children:[r.jsx("span",{className:Re.sectionLabel,style:{backgroundColor:ke.pill},children:I.label}),r.jsx("span",{className:`${Re.sectionAnnotation} ${I.note?Re.annotationVisible:""}`,children:(I.note&&de.current.set(I.id,I.note),I.note||de.current.get(I.id)||"")}),r.jsxs("span",{className:Re.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),r.jsx("div",{className:Re.deleteButton,onMouseDown:We=>We.stopPropagation(),onClick:()=>Ce(I.id),children:"✕"}),$y.map(We=>r.jsx("div",{className:`${Re.handle} ${Re[`handle${We.charAt(0).toUpperCase()}${We.slice(1)}`]}`,onMouseDown:Ne=>ce(Ne,I.id,We)},We))]},I.id)}),ct.map(I=>{const Z=I.currentRect,ge=I.isFixed?Z.y:Z.y-L,ke=S.has(I.id),Ue=qe(I),We=Xe(I);if(u&&!ke)return null;const Nt=!oe.current.has(I.id);return Nt&&oe.current.add(I.id),r.jsxs("div",{"data-rearrange-section":I.id,className:`${Re.ghostOutline} ${ke?Re.selected:""} ${k||a||G.has(I.id)?Re.exiting:""}`,style:{left:Z.x,top:ge,width:Z.width,height:Z.height,...sn?{}:{opacity:0,animation:"none",transition:"none"},...Nt?{}:{animation:"none"}},onMouseDown:Et=>ae(Et,I.id),onDoubleClick:()=>q(I.id),children:[r.jsx("span",{className:Re.sectionLabel,style:{backgroundColor:zy.pill},children:I.label}),r.jsx("span",{className:`${Re.sectionAnnotation} ${I.note?Re.annotationVisible:""}`,children:(I.note&&de.current.set(I.id,I.note),I.note||de.current.get(I.id)||"")}),r.jsxs("span",{className:Re.sectionDimensions,children:[Math.round(Z.width)," × ",Math.round(Z.height)]}),r.jsx("div",{className:Re.deleteButton,onMouseDown:Et=>Et.stopPropagation(),onClick:()=>Ce(I.id),children:"✕"}),$y.map(Et=>r.jsx("div",{className:`${Re.handle} ${Re[`handle${Et.charAt(0).toUpperCase()}${Et.slice(1)}`]}`,onMouseDown:Pt=>ce(Pt,I.id,Et)},Et)),r.jsx("span",{className:Re.ghostBadge,children:(()=>{const Et=ze.current.get(I.id);if(Ue&&We){const[Pt,_t]=Et==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",Pt," ",r.jsxs("span",{className:Re.ghostBadgeExtra,children:["& ",_t]})]})}return`Suggested ${We?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const Z of ct){const ge=Ae.get(Z.id);I.push({id:Z.id,orig:Z.originalRect,target:ge||Z.currentRect,isFixed:Z.isFixed,isSelected:S.has(Z.id),isExiting:G.has(Z.id)})}for(const[Z,ge]of Ae)if(!I.some(ke=>ke.id===Z)){const ke=b.find(Ue=>Ue.id===Z);ke&&I.push({id:Z,orig:ke.originalRect,target:ge,isFixed:ke.isFixed,isSelected:S.has(Z)})}for(const[Z,ge]of Ze)I.some(ke=>ke.id===Z)||I.push({id:Z,orig:ge.orig,target:ge.target,isFixed:ge.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:r.jsxs("svg",{className:`${Re.connectorSvg} ${k||a?Re.connectorExiting:""}`,children:[I.map(({id:Z,orig:ge,target:ke,isFixed:Ue,isSelected:We,isExiting:Ne})=>{const Nt=ge.x+ge.width/2,Et=(Ue?ge.y:ge.y-L)+ge.height/2,Pt=ke.x+ke.width/2,_t=(Ue?ke.y:ke.y-L)+ke.height/2,tt=Pt-Nt,Ot=_t-Et,on=Math.sqrt(tt*tt+Ot*Ot);if(on<2)return null;const Qt=Math.min(1,on/40),Ke=Math.min(on*.3,60),Ut=on>0?-Ot/on:0,Jt=on>0?tt/on:0,Ht=(Nt+Pt)/2+Ut*Ke,An=(Et+_t)/2+Jt*Ke,at=Ae.has(Z),Wt=at||We?1:.4,Tn=at||We?1:.5;return r.jsxs("g",{className:Ne?Re.connectorExiting:"",children:[r.jsx("path",{className:Re.connectorLine,d:`M ${Nt} ${Et} Q ${Ht} ${An} ${Pt} ${_t}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Wt*Qt}),r.jsx("circle",{className:Re.connectorDot,cx:Nt,cy:Et,r:4*Qt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Tn*Qt,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:Re.connectorDot,cx:Pt,cy:_t,r:4*Qt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Tn*Qt,filter:"url(#connDotShadow)"})]},`conn-${Z}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),T&&(()=>{var _t;const I=b.find(tt=>tt.id===T);if(!I)return null;const Z=I.currentRect,ge=I.isFixed?Z.y:Z.y-L,ke=Z.x+Z.width/2,Ue=ge-8,We=ge+Z.height+8,Ne=Ue>200,Nt=We<window.innerHeight-100,Et=Math.max(160,Math.min(window.innerWidth-160,ke));let Pt;return Ne?Pt={left:Et,bottom:window.innerHeight-Ue}:Nt?Pt={left:Et,top:We}:Pt={left:Et,top:Math.max(80,window.innerHeight/2-80)},r.jsx(kd,{element:I.label,placeholder:"Add a note about this section",initialValue:(_t=I.note)!=null?_t:"",submitLabel:X.current?"Save":"Set",onSubmit:le,onCancel:ne,onDelete:X.current?()=>{le("")}:void 0,isExiting:W,lightMode:!o,style:Pt})})(),_e&&r.jsx("div",{className:Re.sizeIndicator,style:{left:_e.x,top:_e.y},"data-feedback-toolbar":!0,children:_e.text}),we.map((I,Z)=>r.jsx("div",{className:Re.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-L,width:"100vw",height:1}},`${I.axis}-${I.pos}-${Z}`))]})}var Bm=new Set(["script","style","noscript","link","meta","br","hr"]);function W4(){const t=document.querySelector("main")||document.body,n=[],o=Array.from(t.children),a=t!==document.body&&o.length<3?Array.from(document.body.children):o;for(const c of a){if(!(c instanceof HTMLElement)||Bm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:Cd(c),selector:yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Bm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:Cd(h),selector:yr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function F4(t){const n=window.scrollY;return t.map(({label:o,selector:a,rect:c})=>{const u=c.y-n;return{label:o,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function Y4(t){const n=window.scrollY,o=t.y-n,a=t.x;return{top:o,bottom:o+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Om(t,n){const o=n?F4(n):W4(),a=Y4(t);let c=null,u=null,d=null,h=null,p=null;for(const S of o){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const C=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(C&&S.bottom<=a.top+5){const j=Math.round(a.top-S.bottom);(!c||j<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(C&&S.top>=a.bottom-5){const j=Math.round(S.top-a.bottom);(!u||j<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(k&&S.right<=a.left+5){const j=Math.round(a.left-S.right);(!d||j<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}if(k&&S.left>=a.right-5){const j=Math.round(S.left-a.right);(!h||j<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,j),_dist:j})}}const g=window.innerWidth,_=window.innerHeight,x=q4(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=X4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,o);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function X4(t,n,o,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>o+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function q4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function Yx(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Xx(t,n={}){const o=[];t.above&&o.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&o.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&o.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&o.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=Yx(t.alignment);return t.containedIn?o.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):o.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&o.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&o.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&o.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),o}function G4(t,n,o){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push(Yx(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=o?`, ${Math.round(o.width)}×${Math.round(o.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var Vy=15;function Uy(t){if(t.length<2)return[];const n=[],o=new Set;for(let a=0;a<t.length;a++){if(o.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)o.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>o.add(p))}}for(let a=0;a<t.length;a++){if(o.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)o.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<Vy&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>o.add(p))}}return n}function K4(t){var d;if(t.length<2)return[];const n=Uy(t.map(h=>({label:h.label,rect:h.originalRect}))),o=Uy(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of o){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",C=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${C}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of o){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function qx(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],o=new Set,a=h=>{o.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Bm.has(h.tagName.toLowerCase())||(o.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:yr(h)}}}return{viewport:t,contentArea:null}}function Q4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const o=getComputedStyle(n.parentElement),a={parentDisplay:o.display,parentSelector:yr(n.parentElement)};return o.display.includes("flex")&&(a.flexDirection=o.flexDirection),o.display.includes("grid")&&o.gridTemplateColumns!=="none"&&(a.gridCols=o.gridTemplateColumns),o.gap&&o.gap!=="normal"&&o.gap!=="0px"&&(a.gap=o.gap),a}function Gx(t,n){const o=n.contentArea,a=o?o.width:n.viewport.width,c=o?o.left:0,u=o?o.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Kx(t){const{viewport:n,contentArea:o}=t;let a=`### Reference Frame
`;if(a+=`- Viewport: \`${n.width}×${n.height}px\`
`,o){const c=o;a+=`- Content area: \`${c.width}px\` wide, left edge at \`x=${c.left}\`, right at \`x=${c.right}\` (\`${c.selector}\`)
`,a+=`- Pixel → CSS translation:
`,a+=`  - **Horizontal position in container**: \`element.x - ${c.left}\` → use as \`margin-left\` or \`left\`
`,a+=`  - **Width as % of container**: \`element.width / ${c.width} × 100\` → use as \`width: X%\`
`,a+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",a+=`  - **Centered**: if \`|element.centerX - ${c.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else a+=`- No distinct content container — elements positioned relative to full viewport
`,a+=`- Pixel → CSS translation:
`,a+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,a+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return a+=`
`,a}function Z4(t){const n=Q4(t);if(!n)return null;let o=`\`${n.parentDisplay}\``;return n.flexDirection&&(o+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(o+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(o+=`, gap: \`${n.gap}\``),`Parent: ${o} (\`${n.parentSelector}\`)`}function Wy(t,n,o,a="standard"){var k,j,N,A;if(t.length===0)return"";const c=[...t].sort((T,$)=>Math.abs(T.y-$.y)<20?T.x-$.x:T.y-$.y);let u="";if(o!=null&&o.blankCanvas?(u+=`## Wireframe: New Page

`,o.wireframePurpose&&(u+=`> **Purpose:** ${o.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((T,$)=>{var P;const W=((P=Ni[T.type])==null?void 0:P.label)||T.type;u+=`${$+1}. **${W}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}),u;const d=qx(n);u+=Kx(d),u+=`### Components
`,c.forEach((T,$)=>{var G;const W=((G=Ni[T.type])==null?void 0:G.label)||T.type,P={x:T.x,y:T.y,width:T.width,height:T.height};u+=`${$+1}. **${W}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`;const X=Om(P),ne=Xx(X,{includeLeftRight:a==="detailed"||a==="forensic"});for(const te of ne)u+=`   - ${te}
`;const le=Gx(P,d);le&&(u+=`   - CSS: ${le}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const T of c){const $=h.find(W=>Math.abs(W.y-T.y)<30);$?$.items.push(T):h.push({y:T.y,items:[T]})}if(h.sort((T,$)=>T.y-$.y),h.forEach((T,$)=>{T.items.sort((P,X)=>P.x-X.x);const W=T.items.map(P=>{var X;return((X=Ni[P.type])==null?void 0:X.label)||P.type});if(T.items.length===1){const X=T.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(T.y)}): ${W[0]}${X?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(T.y)}): ${W.join(" | ")} — ${T.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let T=0;T<c.length-1;T++){const $=c[T],W=c[T+1],P=((k=Ni[$.type])==null?void 0:k.label)||$.type,X=((j=Ni[W.type])==null?void 0:j.label)||W.type,q=Math.round(W.y-($.y+$.height)),ne=Math.round(W.x-($.x+$.width));Math.abs($.y-W.y)<30?u+=`- ${P} → ${X}: \`${ne}px\` horizontal gap
`:u+=`- ${P} → ${X}: \`${q}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let T=0;T<c.length;T++)for(let $=T+1;$<c.length;$++){const W=c[T],P=c[$],X=((N=Ni[W.type])==null?void 0:N.label)||W.type,q=((A=Ni[P.type])==null?void 0:A.label)||P.type,ne=Math.round(P.y-(W.y+W.height)),le=Math.round(P.x-(W.x+W.width));u+=`- ${X} ↔ ${q}: h=\`${le}px\` v=\`${ne}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((T,$)=>{var P;const W=((P=Ni[T.type])==null?void 0:P.label)||T.type;u+=`${$}. ${W} at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}))}u+=`
### Suggested Implementation
`;const p=c.some(T=>T.type==="navigation"),g=c.some(T=>T.type==="hero"),_=c.some(T=>T.type==="sidebar"),x=c.some(T=>T.type==="footer"),b=c.filter(T=>T.type==="card"),w=c.filter(T=>T.type==="form"),S=c.filter(T=>T.type==="table"),C=c.filter(T=>T.type==="modal");if(p&&(u+=`- Top navigation bar with logo + nav links + CTA
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
`,_){const T=c.find($=>$.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(T.width)}px 1fr;\`
`}if(b.length>1){const T=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${T}px); gap: 16px;\`
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function Fy(t,n="standard",o){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=o?o.width:typeof window<"u"?window.innerWidth:0,h=o?o.height:typeof window<"u"?window.innerHeight:0,p=qx({width:d,height:h});n!=="compact"&&(u+=Kx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Om(w,g("original")),j=Om(S,g("current")),N=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${G4(k,{x:w.x,y:w.y},N)}
`;const A=b?{width:S.width,height:S.height}:void 0,T=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=A?`, ${Math.round(A.width)}×${Math.round(A.height)}px`:"",P=Xx(j,{includeLeftRight:n==="detailed"||n==="forensic"});if(P.length>0){u+=`  - Suggested position ${T}${$}: ${P[0]}
`;for(let q=1;q<P.length;q++)u+=`    ${P[q]}
`}else u+=`  - Suggested position ${T}${$}
`;const X=Gx(S,p);X&&(u+=`  - CSS: ${X}
`)}const C=Z4(_.selector);if(C&&(u+=`  - ${C}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=K4(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var zm="feedback-annotations-",Qx=7;function jd(t){return`${zm}${t}`}function Jh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(jd(t));if(!n)return[];const o=JSON.parse(n),a=Date.now()-Qx*24*60*60*1e3;return o.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Zx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(jd(t),JSON.stringify(n))}catch{}}function J4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Qx*24*60*60*1e3;for(let o=0;o<localStorage.length;o++){const a=localStorage.key(o);if(a!=null&&a.startsWith(zm)){const c=a.slice(zm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function nc(t,n,o){const a=n.map(c=>({...c,_syncedTo:o}));Zx(t,a)}var hp="agentation-design-";function ek(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${hp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function tk(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${hp}${t}`,JSON.stringify(n))}catch{}}function nk(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${hp}${t}`)}catch{}}var mp="agentation-rearrange-";function sk(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${mp}${t}`);return n?JSON.parse(n):null}catch{return null}}function ok(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${mp}${t}`,JSON.stringify(n))}catch{}}function ik(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${mp}${t}`)}catch{}}var pp="agentation-wireframe-";function ak(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${pp}${t}`);return n?JSON.parse(n):null}catch{return null}}function Yy(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${pp}${t}`,JSON.stringify(n))}catch{}}function Ju(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${pp}${t}`)}catch{}}var Jx="agentation-session-";function _p(t){return`${Jx}${t}`}function rk(t){if(typeof window>"u")return null;try{return localStorage.getItem(_p(t))}catch{return null}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(_p(t),n)}catch{}}function lk(t){if(!(typeof window>"u"))try{localStorage.removeItem(_p(t))}catch{}}var eb=`${Jx}toolbar-hidden`;function ck(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(eb)==="1"}catch{return!1}}function uk(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(eb,"1")}catch{}}async function tm(t,n){const o=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!o.ok)throw new Error(`Failed to create session: ${o.status}`);return o.json()}async function Xy(t,n){const o=await fetch(`${t}/sessions/${n}`);if(!o.ok)throw new Error(`Failed to get session: ${o.status}`);return o.json()}async function Zr(t,n,o){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function qy(t,n,o){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Pa(t,n){const o=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!o.ok)throw new Error(`Failed to delete annotation: ${o.status}`)}var Un={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Gy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Ky=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],dk=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function fk(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let o=Gy;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);o=new Set([...Gy,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:o,skipPatterns:t!=null&&t.skipPatterns?[...Ky,...t.skipPatterns]:Ky,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:dk,filter:t==null?void 0:t.filter}}function hk(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function mk(t,n=10){const o=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&o.add(d)}}),a=a.parentElement,c++;return o}function pk(t,n){const o=hk(t);for(const a of n){if(a===o)return!0;const c=o.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function _k(t,n,o,a){if(o.filter)return o.filter(t,n);switch(o.mode){case"all":return!0;case"filtered":return!(o.skipExact.has(t)||o.skipPatterns.some(c=>c.test(t)));case"smart":return o.skipExact.has(t)||o.skipPatterns.some(c=>c.test(t))?!1:!!(a&&pk(t,a)||o.userPatterns.some(c=>c.test(t)));default:return!0}}var Jr=null,gk=new WeakMap;function nm(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function yk(){if(Jr!==null)return Jr;if(typeof document>"u")return!1;if(document.body&&nm(document.body))return Jr=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const o=document.querySelector(n);if(o&&nm(o))return Jr=!0,!0}if(document.body){for(const n of document.body.children)if(nm(n))return Jr=!0,!0}return Jr=!1,!1}var sc={map:gk};function xk(t){return Object.keys(t).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"))||null}function bk(t){const n=xk(t);return n?t[n]:null}function lr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function vk(t){var c;const{tag:n,type:o,elementType:a}=t;if(n===Un.HostComponent||n===Un.HostText||n===Un.HostHoistable||n===Un.HostSingleton||n===Un.Fragment||n===Un.Mode||n===Un.Profiler||n===Un.DehydratedFragment||n===Un.HostRoot||n===Un.HostPortal||n===Un.ScopeComponent||n===Un.OffscreenComponent||n===Un.LegacyHiddenComponent||n===Un.CacheComponent||n===Un.TracingMarkerComponent||n===Un.Throw||n===Un.ViewTransitionComponent||n===Un.ActivityComponent)return null;if(n===Un.ForwardRef){const u=a;if(u!=null&&u.render){const d=lr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:lr(o)}if(n===Un.MemoComponent||n===Un.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=lr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:lr(o)}if(n===Un.ContextProvider){const u=o;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Un.ContextConsumer){const u=o;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Un.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?lr(u._result):null}return n===Un.SuspenseComponent||n===Un.SuspenseListComponent?null:n===Un.IncompleteClassComponent||n===Un.IncompleteFunctionComponent||n===Un.FunctionComponent||n===Un.ClassComponent||n===Un.IndeterminateComponent?lr(o):null}function wk(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function Sk(t,n){const o=fk(n),a=o.mode==="all";if(a){const p=sc.map.get(t);if(p!==void 0)return p}if(!yk()){const p={path:null,components:[]};return a&&sc.map.set(t,p),p}const c=o.mode==="smart"?mk(t):void 0,u=[];try{let p=bk(t),g=0;for(;p&&g<o.maxDepth&&u.length<o.maxComponents;){const _=vk(p);_&&!wk(_)&&_k(_,g,o,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&sc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&sc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&sc.map.set(t,h),h}var oc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function kk(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),o=n.find(u=>u.startsWith("__reactFiber$"));if(o)return t[o]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function xc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Ck(t,n=50){var c;let o=t,a=0;for(;o&&a<n;){if(o._debugSource)return{source:o._debugSource,componentName:xc(o)};if((c=o._debugOwner)!=null&&c._debugSource)return{source:o._debugOwner._debugSource,componentName:xc(o._debugOwner)};o=o.return,a++}return null}function jk(t){let n=t,o=0;const a=50;for(;n&&o<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:xc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:xc(n)}}}n=n.return,o++}return null}var ed=new Map;function Mk(t){var c;const n=t.tag,o=t.type,a=t.elementType;if(typeof o=="string"||o==null||typeof o=="function"&&((c=o.prototype)!=null&&c.isReactComponent))return null;if((n===oc.FunctionComponent||n===oc.IndeterminateComponent)&&typeof o=="function")return o;if(n===oc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===oc.MemoComponent||n===oc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof o=="function"?o:null}function Tk(){const t=Ev,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(o){const a=o.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function Ek(t){const n=t.split(`
`),o=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||o.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function Dk(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Ak(t){const n=Mk(t);if(!n)return null;if(ed.has(n))return ed.get(n);const o=Tk();if(!o)return ed.set(n,null),null;const a=o.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});o.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=Ek(d.stack);h&&(c={fileName:Dk(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:xc(t)||void 0})}}}finally{o.set(a)}return ed.set(n,c),c}function Nk(t,n=15){let o=t,a=0;for(;o&&a<n;){const c=Ak(o);if(c)return c;o=o.return,a++}return null}function $m(t){const n=kk(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let o=Ck(n);if(o||(o=jk(n)),o!=null&&o.source)return{found:!0,source:{fileName:o.source.fileName,lineNumber:o.source.lineNumber,columnNumber:o.source.columnNumber,componentName:o.componentName||void 0},isReactApp:!0,isProduction:!1};const a=Nk(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Rk(t,n="path"){const{fileName:o,lineNumber:a,columnNumber:c}=t;let u=`${o}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${o.startsWith("/")?"":"/"}${u}`:u}function Lk(t,n=10){let o=t,a=0;for(;o&&a<n;){const c=$m(o);if(c.found)return c;o=o.parentElement,a++}return $m(t)}var Bk=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,Ok={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=Bk}var Fe=Ok,ic=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Qy(t,n,o="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
`;return o==="forensic"?(c+=`
**Environment:**
`,c+=`- Viewport: ${a}
`,typeof window<"u"&&(c+=`- URL: ${window.location.href}
`,c+=`- User Agent: ${navigator.userAgent}
`,c+=`- Timestamp: ${new Date().toISOString()}
`,c+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),c+=`
---
`):o!=="compact"&&(c+=`**Viewport:** ${a}
`),c+=`
`,t.forEach((u,d)=>{o==="compact"?(c+=`${d+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText&&(c+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`),c+=`
`):o==="forensic"?(c+=`### ${d+1}. ${u.element}
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
`),o==="detailed"&&(u.cssClasses&&(c+=`**Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** ${Math.round(u.boundingBox.x)}px, ${Math.round(u.boundingBox.y)}px (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`)),u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),o==="detailed"&&u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),c+=`**Feedback:** ${u.comment}

`)}),c.trim()}var zk=`@keyframes styles-module__markerIn___x4G8D {
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
}`,$k={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=zk}var Hs=$k;function Zy({annotation:t,globalIndex:n,layerIndex:o,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:C,onContextMenu:k}){const j=(h||p)&&!g,N=j&&x==="delete",A=t.isMultiSelect,T=A?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?Hs.exit:u?Hs.clearing:d?"":Hs.enter,W=c?`${(a-1-o)*20}ms`:`${o*20}ms`;return r.jsxs("div",{className:`${Hs.marker} ${A?Hs.multiSelect:""} ${$} ${N?Hs.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:N?void 0:T,animationDelay:W},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:P=>{P.stopPropagation(),c||C(t)},onContextMenu:k?P=>{x==="delete"&&(P.preventDefault(),P.stopPropagation(),c||k(t))}:void 0,children:[j?N?r.jsx(Ix,{size:A?18:16}):r.jsx(Qw,{size:16}):r.jsx("span",{className:_!==null&&n>=_?Hs.renumber:void 0,children:n+1}),h&&!g&&r.jsxs("div",{className:`${Hs.markerTooltip} ${Hs.enter}`,style:b,children:[r.jsxs("span",{className:Hs.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:Hs.markerNote,children:t.comment})]})]})}function Ik({x:t,y:n,isMultiSelect:o,isExiting:a}){return r.jsx("div",{className:`${Hs.marker} ${Hs.pending} ${o?Hs.multiSelect:""} ${a?Hs.exit:Hs.enter}`,style:{left:`${t}%`,top:n,backgroundColor:o?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(Iw,{size:12})})}function Jy({annotation:t,fixed:n}){const o=t.isMultiSelect;return r.jsx("div",{className:`${Hs.marker} ${n?Hs.fixed:""} ${Hs.hovered} ${o?Hs.multiSelect:""} ${Hs.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:r.jsx(Ix,{size:o?12:10})})}var Pk=`.styles-module__switchContainer___Ka-AB {
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
}`,Hk={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=Pk}var sm=Hk,om=({className:t="",...n})=>r.jsxs("div",{className:`${sm.switchContainer} ${t}`,children:[r.jsx("input",{className:sm.switchInput,type:"checkbox",...n}),r.jsx("div",{className:sm.switchThumb})]}),Vk=`.styles-module__checkboxContainer___joqZk {
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
}`,Uk={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=Vk}var td=Uk,Wk=({className:t="",...n})=>r.jsxs("div",{className:`${td.checkboxContainer} ${t}`,children:[r.jsx("input",{className:td.checkboxInput,type:"checkbox",...n}),r.jsx("svg",{className:td.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:td.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),Fk=`.styles-module__container___w8eAF {
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
}`,Yk={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=Fk}var e1=Yk,t1=({className:t="",label:n,tooltip:o,checked:a,onChange:c,...u})=>{const d=y.useId();return r.jsxs("div",{className:`${e1.container} ${t}`,...u,children:[r.jsx(Wk,{id:d,onChange:c,checked:a}),r.jsx("label",{className:e1.label,htmlFor:d,children:n}),o&&r.jsx(hr,{content:o})]})},Xk=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,qk={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=Xk}var St=qk;function Gk({settings:t,onSettingsChange:n,isDarkMode:o,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return r.jsx("div",{className:`${St.settingsPanel} ${h?St.enter:St.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:St.settingsPanelContainer,children:[r.jsxs("div",{className:`${St.settingsPage} ${g==="automations"?St.slideLeft:""}`,children:[r.jsxs("div",{className:St.settingsHeader,children:[r.jsx("a",{className:St.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:St.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:St.themeToggle,onClick:a,title:o?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:St.themeIconWrapper,children:r.jsx("span",{className:St.themeIcon,children:o?r.jsx(Gw,{size:20}):r.jsx(Kw,{size:20})},o?"sun":"moon")})})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("div",{className:St.settingsLabel,children:["Output Detail",r.jsx(hr,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:St.cycleButton,onClick:()=>{const S=(ic.findIndex(C=>C.value===t.outputDetail)+1)%ic.length;n({outputDetail:ic[S].value})},children:[r.jsx("span",{className:St.cycleButtonText,children:(b=ic.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),r.jsx("span",{className:St.cycleDots,children:ic.map(w=>r.jsx("span",{className:`${St.cycleDot} ${t.outputDetail===w.value?St.active:""}`},w.value))})]})]}),r.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop} ${c?"":St.settingsRowDisabled}`,children:[r.jsxs("div",{className:St.settingsLabel,children:["React Components",r.jsx(hr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(om,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop}`,children:[r.jsxs("div",{className:St.settingsLabel,children:["Hide Until Restart",r.jsx(hr,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(om,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsx("div",{className:`${St.settingsLabel} ${St.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:St.colorOptions,children:hc.map(w=>r.jsx("button",{className:`${St.colorOption} ${t.annotationColorId===w.id?St.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsx(t1,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(t1,{className:St.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),r.jsx("div",{className:St.divider}),r.jsxs("button",{className:St.settingsNavLink,onClick:()=>_("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:St.settingsNavLinkRight,children:[d&&u!=="disconnected"&&r.jsx("span",{className:`${St.mcpNavIndicator} ${St[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${St.settingsPage} ${St.automationsPage} ${g==="automations"?St.slideIn:""}`,children:[r.jsxs("button",{className:St.settingsBackButton,onClick:()=>_("main"),children:[r.jsx(Jw,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("span",{className:St.automationHeader,children:["MCP Connection",r.jsx(hr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&r.jsx("div",{className:`${St.mcpStatusDot} ${St[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:St.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:St.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:`${St.settingsSection} ${St.settingsSectionGrow}`,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("span",{className:St.automationHeader,children:["Webhooks",r.jsx(hr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:St.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${St.autoSendLabel} ${t.webhooksEnabled?St.active:""} ${t.webhookUrl?"":St.disabled}`,children:"Auto-Send"}),r.jsx(om,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),r.jsx("p",{className:St.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:St.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function im(t,n="filtered"){const{name:o,path:a}=al(t);if(n==="off")return{name:o,elementName:o,path:a,reactComponents:null};const c=Sk(t,{mode:n});return{name:c.path?`${c.path} ${o}`:o,elementName:o,path:a,reactComponents:c.path}}var n1=!1,am={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Wi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},hc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],Kk=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...hc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${hc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${hc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};Kk();function cr(t,n){let o=document.elementFromPoint(t,n);if(!o)return null;for(;o!=null&&o.shadowRoot;){const a=o.shadowRoot.elementFromPoint(t,n);if(!a||a===o)break;o=a}return o}function rm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function ur(t){return t.status!=="resolved"&&t.status!=="dismissed"}function nd(t){const n=$m(t),o=n.found?n:Lk(t);if(o.found&&o.source)return Rk(o.source,"path")}function Qk({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:o=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Rc,Lc,_l,gl,pa,_a,Bc;const[C,k]=y.useState(!1),[j,N]=y.useState([]),[A,T]=y.useState(!0),[$,W]=y.useState(()=>ck()),[P,X]=y.useState(!1),q=y.useRef(null);y.useEffect(()=>{const D=F=>{const V=q.current;V&&V.contains(F.target)&&F.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(F=>document.body.addEventListener(F,D)),()=>{O.forEach(F=>document.body.removeEventListener(F,D))}},[]);const[ne,le]=y.useState(!1),[G,te]=y.useState(!1),[de,be]=y.useState(null),[z,_e]=y.useState({x:0,y:0}),[K,we]=y.useState(null),[Ee,L]=y.useState(!1),[H,B]=y.useState("idle"),[oe,ze]=y.useState(!1),[Ae,Oe]=y.useState(!1),[Ze,Je]=y.useState(null),[Xt,qt]=y.useState(null),[Dt,It]=y.useState([]),[nn,sn]=y.useState(null),[Ge,yt]=y.useState(null),[ae,ce]=y.useState(null),[Ce,Me]=y.useState(null),[qe,Xe]=y.useState([]),[Ie,ct]=y.useState(0),[pt,Ve]=y.useState(!1),[Ye,I]=y.useState(!1),[Z,ge]=y.useState(!1),[ke,Ue]=y.useState(!1),[We,Ne]=y.useState(!1),[Nt,Et]=y.useState("main"),[Pt,_t]=y.useState(!1),[tt,Ot]=y.useState(!1),[on,Qt]=y.useState(!1),[Ke,Ut]=y.useState([]),[Jt,Ht]=y.useState(null),An=y.useRef(!1),[at,Wt]=y.useState(!1),[Tn,jn]=y.useState(!1),[Zn,Ms]=y.useState(1),[Jn,rs]=y.useState("new-page"),[mn,Yn]=y.useState(""),[xn,Wn]=y.useState(!1),[nt,ws]=y.useState(null),Ko=y.useRef(!1),Qo=y.useRef({rearrange:null,placements:[]}),to=y.useRef({rearrange:null,placements:[]}),[Co,co]=y.useState(0),[Bn,no]=y.useState(0),[so,oo]=y.useState(0),[Nn,Qs]=y.useState(0),io=y.useRef(new Set),Rn=y.useRef(new Set),hs=y.useRef(null),Io=y.useRef(),Zo=tt&&C&&!on&&at;y.useEffect(()=>{if(Zo){jn(!1);const D=nl(()=>{jn(!0)});return()=>cancelAnimationFrame(D)}else jn(!1)},[Zo]);const ao=y.useRef(new Map),uo=y.useRef(new Map),fo=y.useRef(),[Ts,Vs]=y.useState(!1),[On,bi]=y.useState([]),Li=y.useRef(On);Li.current=On;const[Jo,Bi]=y.useState(null),jo=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[vi,Hn]=y.useState(!1),ho=y.useRef(null),[En,ro]=y.useState([]),ms=y.useRef({cmd:!1,shift:!1}),es=()=>{_t(!0)},wi=()=>{_t(!1)},Ss=()=>{vi||(ho.current=Yt(()=>Hn(!0),850))},Mo=()=>{ho.current&&(clearTimeout(ho.current),ho.current=null),Hn(!1),wi()};y.useEffect(()=>()=>{ho.current&&clearTimeout(ho.current)},[]);const[en,Po]=y.useState(()=>{var D;try{const O=JSON.parse((D=localStorage.getItem("feedback-toolbar-settings"))!=null?D:"");return{...am,...O,annotationColorId:hc.find(F=>F.id===O.annotationColorId)?O.annotationColorId:am.annotationColorId}}catch{return am}}),[Ds,To]=y.useState(!0),[ei,Eo]=y.useState(!1),J=()=>{var D;(D=q.current)==null||D.classList.add(Fe.disableTransitions),To(O=>!O),nl(()=>{var O;(O=q.current)==null||O.classList.remove(Fe.disableTransitions)})},he=!1,je="off",[Se,ot]=y.useState(x!=null?x:null),bt=y.useRef(!1),[rt,Ft]=y.useState(_?"connecting":"disconnected"),[zt,cn]=y.useState(null),[Xn,fn]=y.useState(!1),[_n,qn]=y.useState(null),As=y.useRef(!1),[Vt,E]=y.useState(new Set),[Y,se]=y.useState(new Set),[re,pe]=y.useState(!1),[Le,st]=y.useState(!1),[ut,ft]=y.useState(!1),ht=y.useRef(null),it=y.useRef(null),Tt=y.useRef(null),Gt=y.useRef(null),bn=y.useRef(!1),ds=y.useRef(0),Ns=y.useRef(null),ks=y.useRef(null),Rs=8,an=50,zn=y.useRef(null),Cs=y.useRef(null),$s=y.useRef(null),jt=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(ke)Ne(!0);else{_t(!1),Et("main");const D=Yt(()=>Ne(!1),0);return()=>clearTimeout(D)}},[ke]);const Oi=C&&A&&!tt;y.useEffect(()=>{if(Oi){te(!1),le(!0),E(new Set);const D=Yt(()=>{E(O=>{const F=new Set(O);return j.forEach(V=>F.add(V.id)),F})},350);return()=>clearTimeout(D)}else if(ne){te(!0);const D=Yt(()=>{le(!1),te(!1)},250);return()=>clearTimeout(D)}},[Oi]),y.useEffect(()=>{I(!0),ct(window.scrollY);const D=Jh(jt);N(D.filter(ur)),n1||(Eo(!0),n1=!0,Yt(()=>Eo(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&To(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const F=JSON.parse(O);typeof F.x=="number"&&typeof F.y=="number"&&cn(F)}}catch{}},[jt]),y.useEffect(()=>{Ye&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(en))},[en,Ye]),y.useEffect(()=>{Ye&&localStorage.setItem("feedback-toolbar-theme",Ds?"dark":"light")},[Ds,Ye]);const zi=y.useRef(!1);y.useEffect(()=>{const D=zi.current;zi.current=Xn,D&&!Xn&&zt&&Ye&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(zt))},[Xn,zt,Ye]),y.useEffect(()=>{if(!_||!Ye||bt.current)return;bt.current=!0,Ft("connecting"),(async()=>{try{const O=rk(jt),F=x||O;let V=!1;if(F)try{const ee=await Xy(_,F);ot(ee.id),Ft("connected"),em(jt,ee.id),V=!0;const ye=Jh(jt),Qe=new Set(ee.annotations.map(lt=>lt.id)),et=ye.filter(lt=>!Qe.has(lt.id));if(et.length>0){const vt=`${typeof window<"u"?window.location.origin:""}${jt}`,rn=(await Promise.allSettled(et.map(wt=>Zr(_,ee.id,{...wt,sessionId:ee.id,url:vt})))).map((wt,gt)=>wt.status==="fulfilled"?wt.value:(console.warn("[Agentation] Failed to sync annotation:",wt.reason),et[gt])),ln=[...ee.annotations,...rn];N(ln.filter(ur)),nc(jt,ln.filter(ur),ee.id)}else N(ee.annotations.filter(ur)),nc(jt,ee.annotations.filter(ur),ee.id)}catch(ee){console.warn("[Agentation] Could not join session, creating new:",ee),lk(jt)}if(!V){const ee=typeof window<"u"?window.location.href:"/",ye=await tm(_,ee);ot(ye.id),Ft("connected"),em(jt,ye.id),b==null||b(ye.id);const Qe=J4(),et=typeof window<"u"?window.location.origin:"",lt=[];for(const[vt,Bt]of Qe){const rn=Bt.filter(gt=>!gt._syncedTo);if(rn.length===0)continue;const ln=`${et}${vt}`,wt=vt===jt;lt.push((async()=>{try{const gt=wt?ye:await tm(_,ln),ys=(await Promise.allSettled(rn.map(Dn=>Zr(_,gt.id,{...Dn,sessionId:gt.id,url:ln})))).map((Dn,Fn)=>Dn.status==="fulfilled"?Dn.value:(console.warn("[Agentation] Failed to sync annotation:",Dn.reason),rn[Fn])).filter(ur);if(nc(vt,ys,gt.id),wt){const Dn=new Set(rn.map(Fn=>Fn.id));N(Fn=>{const Zt=Fn.filter(tn=>!Dn.has(tn.id));return[...ys,...Zt]})}}catch(gt){console.warn(`[Agentation] Failed to sync annotations for ${vt}:`,gt)}})())}await Promise.allSettled(lt)}}catch(O){Ft("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[_,x,Ye,b,jt]),y.useEffect(()=>{if(!_||!Ye)return;const D=async()=>{try{(await fetch(`${_}/health`)).ok?Ft("connected"):Ft("disconnected")}catch{Ft("disconnected")}};D();const O=nS(D,1e4);return()=>clearInterval(O)},[_,Ye]),y.useEffect(()=>{if(!_||!Ye||!Se)return;const D=new EventSource(`${_}/sessions/${Se}/events`),O=["resolved","dismissed"],F=V=>{var ee;try{const ye=JSON.parse(V.data);if(O.includes((ee=ye.payload)==null?void 0:ee.status)){const Qe=ye.payload.id,et=ye.payload.kind;if(et==="placement"){for(const[lt,vt]of ao.current)if(vt===Qe){ao.current.delete(lt),Ut(Bt=>Bt.filter(rn=>rn.id!==lt));break}}else if(et==="rearrange"){for(const[lt,vt]of uo.current)if(vt===Qe){uo.current.delete(lt),ws(Bt=>{if(!Bt)return null;const rn=Bt.sections.filter(ln=>ln.id!==lt);return rn.length===0?null:{...Bt,sections:rn}});break}}else se(lt=>new Set(lt).add(Qe)),Yt(()=>{N(lt=>lt.filter(vt=>vt.id!==Qe)),se(lt=>{const vt=new Set(lt);return vt.delete(Qe),vt})},150)}}catch{}};return D.addEventListener("annotation.updated",F),()=>{D.removeEventListener("annotation.updated",F),D.close()}},[_,Ye,Se]),y.useEffect(()=>{if(!_||!Ye)return;const D=ks.current==="disconnected",O=rt==="connected";ks.current=rt,D&&O&&(async()=>{try{const V=Jh(jt);if(V.length===0)return;const ye=`${typeof window<"u"?window.location.origin:""}${jt}`;let Qe=Se,et=[];if(Qe)try{et=(await Xy(_,Qe)).annotations}catch{Qe=null}Qe||(Qe=(await tm(_,ye)).id,ot(Qe),em(jt,Qe));const lt=new Set(et.map(Bt=>Bt.id)),vt=V.filter(Bt=>!lt.has(Bt.id));if(vt.length>0){const rn=(await Promise.allSettled(vt.map(gt=>Zr(_,Qe,{...gt,sessionId:Qe,url:ye})))).map((gt,_s)=>gt.status==="fulfilled"?gt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",gt.reason),vt[_s])),wt=[...et,...rn].filter(ur);N(wt),nc(jt,wt,Qe)}}catch(V){console.warn("[Agentation] Failed to sync on reconnect:",V)}})()},[rt,_,Ye,Se,jt]);const Gi=y.useCallback(()=>{P||(X(!0),Ue(!1),k(!1),Yt(()=>{uk(!0),W(!0),X(!1)},400))},[P]);y.useEffect(()=>{if(!o||!Ye||!t||t.length===0||j.length>0)return;const D=[];return D.push(Yt(()=>{k(!0)},n-200)),t.forEach((O,F)=>{const V=n+F*300;D.push(Yt(()=>{const ee=document.querySelector(O.selector);if(!ee)return;const ye=ee.getBoundingClientRect(),{name:Qe,path:et}=al(ee),lt={id:`demo-${Date.now()}-${F}`,x:(ye.left+ye.width/2)/window.innerWidth*100,y:ye.top+ye.height/2+window.scrollY,comment:O.comment,element:Qe,elementPath:et,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:ye.left,y:ye.top+window.scrollY,width:ye.width,height:ye.height},nearbyText:ec(ee),cssClasses:tc(ee)};N(vt=>[...vt,lt])},V))}),()=>{D.forEach(clearTimeout)}},[o,Ye,t,n]),y.useEffect(()=>{const D=()=>{ct(window.scrollY),Ve(!0),$s.current&&clearTimeout($s.current),$s.current=Yt(()=>{Ve(!1)},150)};return window.addEventListener("scroll",D,{passive:!0}),()=>{window.removeEventListener("scroll",D),$s.current&&clearTimeout($s.current)}},[]),y.useEffect(()=>{Ye&&j.length>0?Se?nc(jt,j,Se):Zx(jt,j):Ye&&j.length===0&&localStorage.removeItem(jd(jt))},[j,jt,Ye,Se]),y.useEffect(()=>{if(Ye&&!An.current){An.current=!0;const D=ek(jt);D.length>0&&Ut(D)}},[Ye,jt]),y.useEffect(()=>{Ye&&An.current&&!at&&(Ke.length>0?tk(jt,Ke):nk(jt))},[Ke,jt,Ye,at]),y.useEffect(()=>{if(Ye&&!Ko.current){Ko.current=!0;const D=sk(jt);if(D){const O={...D,sections:D.sections.map(F=>{var V;return{...F,currentRect:(V=F.currentRect)!=null?V:{...F.originalRect}}})};ws(O)}}},[Ye,jt]),y.useEffect(()=>{Ye&&Ko.current&&!at&&(nt?ok(jt,nt):ik(jt))},[nt,jt,Ye,at]);const Si=y.useRef(!1);y.useEffect(()=>{if(Ye&&!Si.current){Si.current=!0;const D=ak(jt);D&&(to.current={rearrange:D.rearrange,placements:D.placements||[]},D.purpose&&Yn(D.purpose))}},[Ye,jt]),y.useEffect(()=>{var O,F,V,ee,ye;if(!Ye||!Si.current)return;const D=to.current;at?((F=(O=nt==null?void 0:nt.sections)==null?void 0:O.length)!=null?F:0)>0||Ke.length>0||mn?Yy(jt,{rearrange:nt,placements:Ke,purpose:mn}):Ju(jt):((ye=(ee=(V=D.rearrange)==null?void 0:V.sections)==null?void 0:ee.length)!=null?ye:0)>0||D.placements.length>0||mn?Yy(jt,{rearrange:D.rearrange,placements:D.placements,purpose:mn}):Ju(jt)},[nt,Ke,mn,at,jt,Ye]),y.useEffect(()=>{tt&&!nt&&ws({sections:[],originalOrder:[],detectedAt:Date.now()})},[tt,nt]),y.useEffect(()=>{if(!_||!Se)return;const D=ao.current,O=new Set(Ke.map(F=>F.id));for(const F of Ke){if(D.has(F.id))continue;D.set(F.id,"");const V=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;Zr(_,Se,{id:F.id,x:F.x/window.innerWidth*100,y:F.y,comment:`Place ${F.type} at (${Math.round(F.x)}, ${Math.round(F.y)}), ${F.width}×${F.height}px${F.text?` — "${F.text}"`:""}`,element:`[design:${F.type}]`,elementPath:"[placement]",timestamp:F.timestamp,url:V,intent:"change",severity:"important",kind:"placement",placement:{componentType:F.type,width:F.width,height:F.height,scrollY:F.scrollY,text:F.text}}).then(ee=>{D.has(F.id)&&D.set(F.id,ee.id)}).catch(ee=>{console.warn("[Agentation] Failed to sync placement annotation:",ee),D.delete(F.id)})}for(const[F,V]of D)O.has(F)||(D.delete(F),V&&Pa(_,V).catch(()=>{}))},[Ke,_,Se,jt]),y.useEffect(()=>{if(!(!_||!Se))return fo.current&&clearTimeout(fo.current),fo.current=Yt(()=>{const D=uo.current;if(!nt||nt.sections.length===0){for(const[,V]of D)V&&Pa(_,V).catch(()=>{});D.clear();return}const O=new Set(nt.sections.map(V=>V.id)),F=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;for(const V of nt.sections){const ee=V.originalRect,ye=V.currentRect;if(!(Math.abs(ee.x-ye.x)>1||Math.abs(ee.y-ye.y)>1||Math.abs(ee.width-ye.width)>1||Math.abs(ee.height-ye.height)>1)){const lt=D.get(V.id);lt&&(D.delete(V.id),Pa(_,lt).catch(()=>{}));continue}const et=D.get(V.id);et?qy(_,et,{comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(ee.x)},${Math.round(ee.y)}) ${Math.round(ee.width)}×${Math.round(ee.height)} to (${Math.round(ye.x)},${Math.round(ye.y)}) ${Math.round(ye.width)}×${Math.round(ye.height)}`}).catch(lt=>{console.warn("[Agentation] Failed to update rearrange annotation:",lt)}):(D.set(V.id,""),Zr(_,Se,{id:V.id,x:ye.x/window.innerWidth*100,y:ye.y,comment:`Move ${V.label} section (${V.tagName}) — from (${Math.round(ee.x)},${Math.round(ee.y)}) ${Math.round(ee.width)}×${Math.round(ee.height)} to (${Math.round(ye.x)},${Math.round(ye.y)}) ${Math.round(ye.width)}×${Math.round(ye.height)}`,element:V.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:F,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:V.selector,label:V.label,tagName:V.tagName,originalRect:ee,currentRect:ye}}).then(lt=>{D.has(V.id)&&D.set(V.id,lt.id)}).catch(lt=>{console.warn("[Agentation] Failed to sync rearrange annotation:",lt),D.delete(V.id)}))}for(const[V,ee]of D)O.has(V)||(D.delete(V),ee&&Pa(_,ee).catch(()=>{}))},300),()=>{fo.current&&clearTimeout(fo.current)}},[nt,_,Se,jt]);const Sn=y.useRef(new Map);y.useLayoutEffect(()=>{var F;const D=(F=nt==null?void 0:nt.sections)!=null?F:[],O=new Set;if((tt||on)&&C)for(const V of D){O.add(V.id);try{const ee=document.querySelector(V.selector);if(!ee)continue;if(!Sn.current.has(V.id)){const ye={transform:ee.style.transform,transformOrigin:ee.style.transformOrigin,opacity:ee.style.opacity,position:ee.style.position,zIndex:ee.style.zIndex,display:ee.style.display},Qe=[];let et=ee.parentElement;for(;et&&et!==document.body;){const vt=getComputedStyle(et);(vt.overflow!=="visible"||vt.overflowX!=="visible"||vt.overflowY!=="visible")&&(Qe.push({el:et,overflow:et.style.overflow}),et.style.overflow="visible"),et=et.parentElement}getComputedStyle(ee).display==="inline"&&(ee.style.display="inline-block"),Sn.current.set(V.id,{el:ee,origStyles:ye,ancestors:Qe}),ee.style.transformOrigin="top left",ee.style.zIndex="9999"}}catch{}}for(const[V,ee]of Sn.current)if(!O.has(V)){const{el:ye,origStyles:Qe,ancestors:et}=ee;ye.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",ye.style.transform=Qe.transform,ye.style.transformOrigin=Qe.transformOrigin,ye.style.opacity=Qe.opacity,ye.style.position=Qe.position,ye.style.zIndex=Qe.zIndex,Sn.current.delete(V),Yt(()=>{ye.style.transition="",ye.style.display=Qe.display;for(const lt of et)lt.el.style.overflow=lt.overflow},450)}},[nt,tt,on,C]),y.useEffect(()=>()=>{for(const[,D]of Sn.current){const{el:O,origStyles:F,ancestors:V}=D;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=F.transform,O.style.transformOrigin=F.transformOrigin,O.style.opacity=F.opacity,O.style.position=F.position,O.style.zIndex=F.zIndex,Yt(()=>{O.style.transition="",O.style.display=F.display;for(const ee of V)ee.el.style.overflow=ee.overflow},450)}Sn.current.clear()},[]);const ps=y.useCallback(()=>{Qt(!0),Ot(!1),Ht(null),clearTimeout(Io.current),Io.current=Yt(()=>{Qt(!1)},300)},[]),Do=y.useCallback(()=>{tt&&(Qt(!0),Ot(!1),Ht(null),clearTimeout(Io.current),Io.current=Yt(()=>{Qt(!1)},300)),k(!1)},[tt]),Ho=y.useCallback(()=>{Z||(oS(),ge(!0))},[Z]),vo=y.useCallback(()=>{Z&&(Ny(),ge(!1))},[Z]),$i=y.useCallback(()=>{Z?vo():Ho()},[Z,Ho,vo]),qa=y.useCallback(()=>{if(En.length===0)return;const D=En[0],O=D.element,F=En.length>1,V=En.map(ee=>ee.element.getBoundingClientRect());if(F){const ee={left:Math.min(...V.map(gt=>gt.left)),top:Math.min(...V.map(gt=>gt.top)),right:Math.max(...V.map(gt=>gt.right)),bottom:Math.max(...V.map(gt=>gt.bottom))},ye=En.slice(0,5).map(gt=>gt.name).join(", "),Qe=En.length>5?` +${En.length-5} more`:"",et=V.map(gt=>({x:gt.left,y:gt.top+window.scrollY,width:gt.width,height:gt.height})),vt=En[En.length-1].element,Bt=V[V.length-1],rn=Bt.left+Bt.width/2,ln=Bt.top+Bt.height/2,wt=rm(vt);we({x:rn/window.innerWidth*100,y:wt?ln:ln+window.scrollY,clientY:ln,element:`${En.length} elements: ${ye}${Qe}`,elementPath:"multi-select",boundingBox:{x:ee.left,y:ee.top+window.scrollY,width:ee.right-ee.left,height:ee.bottom-ee.top},isMultiSelect:!0,isFixed:wt,elementBoundingBoxes:et,multiSelectElements:En.map(gt=>gt.element),targetElement:vt,fullPath:Ku(O),accessibility:Gu(O),computedStyles:qu(O),computedStylesObj:Xu(O),nearbyElements:Yu(O),cssClasses:tc(O),nearbyText:ec(O),sourceFile:nd(O)})}else{const ee=V[0],ye=rm(O);we({x:ee.left/window.innerWidth*100,y:ye?ee.top:ee.top+window.scrollY,clientY:ee.top,element:D.name,elementPath:D.path,boundingBox:{x:ee.left,y:ye?ee.top:ee.top+window.scrollY,width:ee.width,height:ee.height},isFixed:ye,fullPath:Ku(O),accessibility:Gu(O),computedStyles:qu(O),computedStylesObj:Xu(O),nearbyElements:Yu(O),cssClasses:tc(O),nearbyText:ec(O),reactComponents:D.reactComponents,sourceFile:nd(O)})}ro([]),be(null)},[En]);y.useEffect(()=>{C||(we(null),ce(null),Me(null),Xe([]),be(null),Ue(!1),ro([]),ms.current={cmd:!1,shift:!1},Z&&vo())},[C,Z,vo]),y.useEffect(()=>()=>{Ny()},[]),y.useEffect(()=>{if(!C)return;const D=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",F=document.createElement("style");return F.id="feedback-cursor-styles",F.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${D})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(F),()=>{const V=document.getElementById("feedback-cursor-styles");V&&V.remove()}},[C]),y.useEffect(()=>{if(Jo!==null&&C)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Jo,C]),y.useEffect(()=>{if(!C||K||Ts||tt)return;const D=O=>{const F=O.composedPath()[0]||O.target;if(Lo(F,"[data-feedback-toolbar]")){be(null);return}const V=cr(O.clientX,O.clientY);if(!V||Lo(V,"[data-feedback-toolbar]")){be(null);return}const{name:ee,elementName:ye,path:Qe,reactComponents:et}=im(V,je),lt=V.getBoundingClientRect();be({element:ee,elementName:ye,elementPath:Qe,rect:lt,reactComponents:et}),_e({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",D),()=>document.removeEventListener("mousemove",D)},[C,K,Ts,tt,je,On]);const Ki=y.useCallback(D=>{var O;if(ce(D),Je(null),qt(null),It([]),(O=D.elementBoundingBoxes)!=null&&O.length){const F=[];for(const V of D.elementBoundingBoxes){const ee=V.x+V.width/2,ye=V.y+V.height/2-window.scrollY,Qe=cr(ee,ye);Qe&&F.push(Qe)}Xe(F),Me(null)}else if(D.boundingBox){const F=D.boundingBox,V=F.x+F.width/2,ee=D.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,ye=cr(V,ee);if(ye){const Qe=ye.getBoundingClientRect(),et=Qe.width/F.width,lt=Qe.height/F.height;et<.5||lt<.5?Me(null):Me(ye)}else Me(null);Xe([])}else Me(null),Xe([])},[]);y.useEffect(()=>{if(!C||Ts||tt)return;const D=O=>{var gs,ys;if(bn.current){bn.current=!1;return}const F=O.composedPath()[0]||O.target;if(Lo(F,"[data-feedback-toolbar]")||Lo(F,"[data-annotation-popup]")||Lo(F,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!K&&!ae){O.preventDefault(),O.stopPropagation();const Dn=cr(O.clientX,O.clientY);if(!Dn)return;const Fn=Dn.getBoundingClientRect(),{name:Zt,path:tn,reactComponents:xs}=im(Dn,je),Ln=En.findIndex(Zs=>Zs.element===Dn);Ln>=0?ro(Zs=>Zs.filter((wo,ls)=>ls!==Ln)):ro(Zs=>[...Zs,{element:Dn,rect:Fn,name:Zt,path:tn,reactComponents:xs!=null?xs:void 0}]);return}const V=Lo(F,"button, a, input, select, textarea, [role='button'], [onclick]");if(en.blockInteractions&&V&&(O.preventDefault(),O.stopPropagation()),K){if(V&&!en.blockInteractions)return;O.preventDefault(),(gs=zn.current)==null||gs.shake();return}if(ae){if(V&&!en.blockInteractions)return;O.preventDefault(),(ys=Cs.current)==null||ys.shake();return}O.preventDefault();const ee=cr(O.clientX,O.clientY);if(!ee)return;const{name:ye,path:Qe,reactComponents:et}=im(ee,je),lt=ee.getBoundingClientRect(),vt=O.clientX/window.innerWidth*100,Bt=rm(ee),rn=Bt?O.clientY:O.clientY+window.scrollY,ln=window.getSelection();let wt;ln&&ln.toString().trim().length>0&&(wt=ln.toString().trim().slice(0,500));const gt=Xu(ee),_s=qu(ee);we({x:vt,y:rn,clientY:O.clientY,element:ye,elementPath:Qe,selectedText:wt,boundingBox:{x:lt.left,y:Bt?lt.top:lt.top+window.scrollY,width:lt.width,height:lt.height},nearbyText:ec(ee),cssClasses:tc(ee),isFixed:Bt,fullPath:Ku(ee),accessibility:Gu(ee),computedStyles:_s,computedStylesObj:gt,nearbyElements:Yu(ee),reactComponents:et!=null?et:void 0,sourceFile:nd(ee),targetElement:ee}),be(null)};return document.addEventListener("click",D,!0),()=>document.removeEventListener("click",D,!0)},[C,Ts,tt,K,ae,en.blockInteractions,je,En]),y.useEffect(()=>{if(!C)return;const D=V=>{V.key==="Meta"&&(ms.current.cmd=!0),V.key==="Shift"&&(ms.current.shift=!0)},O=V=>{const ee=ms.current.cmd&&ms.current.shift;V.key==="Meta"&&(ms.current.cmd=!1),V.key==="Shift"&&(ms.current.shift=!1);const ye=ms.current.cmd&&ms.current.shift;ee&&!ye&&En.length>0&&qa()},F=()=>{ms.current={cmd:!1,shift:!1},ro([])};return document.addEventListener("keydown",D),document.addEventListener("keyup",O),window.addEventListener("blur",F),()=>{document.removeEventListener("keydown",D),document.removeEventListener("keyup",O),window.removeEventListener("blur",F)}},[C,En,qa]),y.useEffect(()=>{if(!C||K||Ts||tt)return;const D=O=>{const F=O.composedPath()[0]||O.target;Lo(F,"[data-feedback-toolbar]")||Lo(F,"[data-annotation-marker]")||Lo(F,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(F.tagName)||F.isContentEditable||(O.preventDefault(),ht.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[C,K,Ts,tt]),y.useEffect(()=>{if(!C||K)return;const D=O=>{if(!ht.current)return;const F=O.clientX-ht.current.x,V=O.clientY-ht.current.y,ee=F*F+V*V,ye=Rs*Rs;if(!ut&&ee>=ye&&(it.current=ht.current,ft(!0),O.preventDefault()),(ut||ee>=ye)&&it.current){if(Tt.current){const Zt=Math.min(it.current.x,O.clientX),tn=Math.min(it.current.y,O.clientY),xs=Math.abs(O.clientX-it.current.x),Ln=Math.abs(O.clientY-it.current.y);Tt.current.style.transform=`translate(${Zt}px, ${tn}px)`,Tt.current.style.width=`${xs}px`,Tt.current.style.height=`${Ln}px`}const Qe=Date.now();if(Qe-ds.current<an)return;ds.current=Qe;const et=it.current.x,lt=it.current.y,vt=Math.min(et,O.clientX),Bt=Math.min(lt,O.clientY),rn=Math.max(et,O.clientX),ln=Math.max(lt,O.clientY),wt=(vt+rn)/2,gt=(Bt+ln)/2,_s=new Set,gs=[[vt,Bt],[rn,Bt],[vt,ln],[rn,ln],[wt,gt],[wt,Bt],[wt,ln],[vt,gt],[rn,gt]];for(const[Zt,tn]of gs){const xs=document.elementsFromPoint(Zt,tn);for(const Ln of xs)Ln instanceof HTMLElement&&_s.add(Ln)}const ys=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Zt of ys)if(Zt instanceof HTMLElement){const tn=Zt.getBoundingClientRect(),xs=tn.left+tn.width/2,Ln=tn.top+tn.height/2,Zs=xs>=vt&&xs<=rn&&Ln>=Bt&&Ln<=ln,wo=Math.min(tn.right,rn)-Math.max(tn.left,vt),ls=Math.min(tn.bottom,ln)-Math.max(tn.top,Bt),li=wo>0&&ls>0?wo*ls:0,ki=tn.width*tn.height,Ci=ki>0?li/ki:0;(Zs||Ci>.5)&&_s.add(Zt)}const Dn=[],Fn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Zt of _s){if(Lo(Zt,"[data-feedback-toolbar]")||Lo(Zt,"[data-annotation-marker]"))continue;const tn=Zt.getBoundingClientRect();if(!(tn.width>window.innerWidth*.8&&tn.height>window.innerHeight*.5)&&!(tn.width<10||tn.height<10)&&tn.left<rn&&tn.right>vt&&tn.top<ln&&tn.bottom>Bt){const xs=Zt.tagName;let Ln=Fn.has(xs);if(!Ln&&(xs==="DIV"||xs==="SPAN")){const Zs=Zt.textContent&&Zt.textContent.trim().length>0,wo=Zt.onclick!==null||Zt.getAttribute("role")==="button"||Zt.getAttribute("role")==="link"||Zt.classList.contains("clickable")||Zt.hasAttribute("data-clickable");(Zs||wo)&&!Zt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ln=!0)}if(Ln){let Zs=!1;for(const wo of Dn)if(wo.left<=tn.left&&wo.right>=tn.right&&wo.top<=tn.top&&wo.bottom>=tn.bottom){Zs=!0;break}Zs||Dn.push(tn)}}}if(Gt.current){const Zt=Gt.current;for(;Zt.children.length>Dn.length;)Zt.removeChild(Zt.lastChild);Dn.forEach((tn,xs)=>{let Ln=Zt.children[xs];Ln||(Ln=document.createElement("div"),Ln.className=Fe.selectedElementHighlight,Zt.appendChild(Ln)),Ln.style.transform=`translate(${tn.left}px, ${tn.top}px)`,Ln.style.width=`${tn.width}px`,Ln.style.height=`${tn.height}px`})}}};return document.addEventListener("mousemove",D,{passive:!0}),()=>document.removeEventListener("mousemove",D)},[C,K,ut,Rs]),y.useEffect(()=>{if(!C)return;const D=O=>{const F=ut,V=it.current;if(ut&&V){bn.current=!0;const ee=Math.min(V.x,O.clientX),ye=Math.min(V.y,O.clientY),Qe=Math.max(V.x,O.clientX),et=Math.max(V.y,O.clientY),lt=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(wt=>{if(!(wt instanceof HTMLElement)||Lo(wt,"[data-feedback-toolbar]")||Lo(wt,"[data-annotation-marker]"))return;const gt=wt.getBoundingClientRect();gt.width>window.innerWidth*.8&&gt.height>window.innerHeight*.5||gt.width<10||gt.height<10||gt.left<Qe&&gt.right>ee&&gt.top<et&&gt.bottom>ye&&lt.push({element:wt,rect:gt})});const Bt=lt.filter(({element:wt})=>!lt.some(({element:gt})=>gt!==wt&&wt.contains(gt))),rn=O.clientX/window.innerWidth*100,ln=O.clientY+window.scrollY;if(Bt.length>0){const wt=Bt.reduce((Fn,{rect:Zt})=>({left:Math.min(Fn.left,Zt.left),top:Math.min(Fn.top,Zt.top),right:Math.max(Fn.right,Zt.right),bottom:Math.max(Fn.bottom,Zt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),gt=Bt.slice(0,5).map(({element:Fn})=>al(Fn).name).join(", "),_s=Bt.length>5?` +${Bt.length-5} more`:"",gs=Bt[0].element,ys=Xu(gs),Dn=qu(gs);we({x:rn,y:ln,clientY:O.clientY,element:`${Bt.length} elements: ${gt}${_s}`,elementPath:"multi-select",boundingBox:{x:wt.left,y:wt.top+window.scrollY,width:wt.right-wt.left,height:wt.bottom-wt.top},isMultiSelect:!0,fullPath:Ku(gs),accessibility:Gu(gs),computedStyles:Dn,computedStylesObj:ys,nearbyElements:Yu(gs),cssClasses:tc(gs),nearbyText:ec(gs),sourceFile:nd(gs)})}else{const wt=Math.abs(Qe-ee),gt=Math.abs(et-ye);wt>20&&gt>20&&we({x:rn,y:ln,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(ee)}, ${Math.round(ye)})`,boundingBox:{x:ee,y:ye+window.scrollY,width:wt,height:gt},isMultiSelect:!0})}be(null)}else F&&(bn.current=!0);ht.current=null,it.current=null,ft(!1),Gt.current&&(Gt.current.innerHTML="")};return document.addEventListener("mouseup",D),()=>document.removeEventListener("mouseup",D)},[C,ut]);const Ao=y.useCallback(async(D,O,F)=>{const V=en.webhookUrl||w;if(!V||!en.webhooksEnabled&&!F)return!1;try{return(await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:D,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(ee){return console.warn("[Agentation] Webhook failed:",ee),!1}},[w,en.webhookUrl,en.webhooksEnabled]),xr=y.useCallback(D=>{var F;if(!K)return;const O={id:Date.now().toString(),x:K.x,y:K.y,comment:D,element:K.element,elementPath:K.elementPath,timestamp:Date.now(),selectedText:K.selectedText,boundingBox:K.boundingBox,nearbyText:K.nearbyText,cssClasses:K.cssClasses,isMultiSelect:K.isMultiSelect,isFixed:K.isFixed,fullPath:K.fullPath,accessibility:K.accessibility,computedStyles:K.computedStyles,nearbyElements:K.nearbyElements,reactComponents:K.reactComponents,sourceFile:K.sourceFile,elementBoundingBoxes:K.elementBoundingBoxes,..._&&Se?{sessionId:Se,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};N(V=>[...V,O]),Ns.current=O.id,Yt(()=>{Ns.current=null},300),Yt(()=>{E(V=>new Set(V).add(O.id))},250),a==null||a(O),Ao("annotation.add",{annotation:O}),pe(!0),Yt(()=>{we(null),pe(!1)},150),(F=window.getSelection())==null||F.removeAllRanges(),_&&Se&&Zr(_,Se,O).then(V=>{V.id!==O.id&&(N(ee=>ee.map(ye=>ye.id===O.id?{...ye,id:V.id}:ye)),E(ee=>{const ye=new Set(ee);return ye.delete(O.id),ye.add(V.id),ye}))}).catch(V=>{console.warn("[Agentation] Failed to sync annotation:",V)})},[K,a,Ao,_,Se]),Pe=y.useCallback(()=>{pe(!0),Yt(()=>{we(null),pe(!1)},150)},[]),dt=y.useCallback(D=>{const O=j.findIndex(V=>V.id===D),F=j[O];(ae==null?void 0:ae.id)===D&&(st(!0),Yt(()=>{ce(null),Me(null),Xe([]),st(!1)},150)),sn(D),se(V=>new Set(V).add(D)),F&&(c==null||c(F),Ao("annotation.delete",{annotation:F})),_&&Pa(_,D).catch(V=>{console.warn("[Agentation] Failed to delete annotation from server:",V)}),Yt(()=>{N(V=>V.filter(ee=>ee.id!==D)),se(V=>{const ee=new Set(V);return ee.delete(D),ee}),sn(null),O<j.length-1&&(yt(O),Yt(()=>yt(null),200))},150)},[j,ae,c,Ao,_]),kt=y.useCallback(D=>{var O;if(!D){Je(null),qt(null),It([]);return}if(Je(D.id),(O=D.elementBoundingBoxes)!=null&&O.length){const F=[];for(const V of D.elementBoundingBoxes){const ee=V.x+V.width/2,ye=V.y+V.height/2-window.scrollY,et=document.elementsFromPoint(ee,ye).find(lt=>!lt.closest("[data-annotation-marker]")&&!lt.closest("[data-agentation-root]"));et&&F.push(et)}It(F),qt(null)}else if(D.boundingBox){const F=D.boundingBox,V=F.x+F.width/2,ee=D.isFixed?F.y+F.height/2:F.y+F.height/2-window.scrollY,ye=cr(V,ee);if(ye){const Qe=ye.getBoundingClientRect(),et=Qe.width/F.width,lt=Qe.height/F.height;et<.5||lt<.5?qt(null):qt(ye)}else qt(null);It([])}else qt(null),It([])},[]),mt=y.useCallback(D=>{if(!ae)return;const O={...ae,comment:D};N(F=>F.map(V=>V.id===ae.id?O:V)),u==null||u(O),Ao("annotation.update",{annotation:O}),_&&qy(_,ae.id,{comment:D}).catch(F=>{console.warn("[Agentation] Failed to update annotation on server:",F)}),st(!0),Yt(()=>{ce(null),Me(null),Xe([]),st(!1)},150)},[ae,u,Ao,_]),Rt=y.useCallback(()=>{st(!0),Yt(()=>{ce(null),Me(null),Xe([]),st(!1)},150)},[]),Lt=y.useCallback(()=>{const D=j.length,O=Ke.length>0||!!nt;if(D===0&&On.length===0&&!O)return;if(d==null||d(j),Ao("annotations.clear",{annotations:j}),_){Promise.all(j.map(ee=>Pa(_,ee.id).catch(ye=>{console.warn("[Agentation] Failed to delete annotation from server:",ye)})));for(const[,ee]of ao.current)ee&&Pa(_,ee).catch(()=>{});ao.current.clear();for(const[,ee]of uo.current)ee&&Pa(_,ee).catch(()=>{});uo.current.clear()}Oe(!0),ze(!0),bi([]);const F=jo.current;if(F){const ee=F.getContext("2d");ee&&ee.clearRect(0,0,F.width,F.height)}(Ke.length>0||nt)&&(oo(ee=>ee+1),Qs(ee=>ee+1),Yt(()=>{Ut([]),ws(null)},200)),at&&Wt(!1),mn&&Yn(""),to.current={rearrange:null,placements:[]},Ju(jt);const V=D*30+200;Yt(()=>{N([]),E(new Set),localStorage.removeItem(jd(jt)),Oe(!1)},V),Yt(()=>ze(!1),1500)},[jt,j,On,Ke,nt,at,mn,d,Ao,_]),$n=y.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt,O=tt&&at;let F;if(O){if(Ke.length===0&&!nt&&!mn)return;F=""}else{if(F=Qy(j,D,en.outputDetail),!F&&On.length===0&&Ke.length===0&&!nt)return;F||(F=`## Page Feedback: ${D}
`)}if(!O&&On.length>0){const V=new Set;for(const et of j)et.drawingIndex!=null&&V.add(et.drawingIndex);const ee=jo.current;ee&&(ee.style.visibility="hidden");const ye=[],Qe=window.scrollY;for(let et=0;et<On.length;et++){if(V.has(et))continue;const lt=On[et];if(lt.points.length<2)continue;const vt=lt.fixed?lt.points:lt.points.map(ts=>({x:ts.x,y:ts.y-Qe}));let Bt=1/0,rn=1/0,ln=-1/0,wt=-1/0;for(const ts of vt)Bt=Math.min(Bt,ts.x),rn=Math.min(rn,ts.y),ln=Math.max(ln,ts.x),wt=Math.max(wt,ts.y);const gt=ln-Bt,_s=wt-rn,gs=Math.hypot(gt,_s),ys=vt[0],Dn=vt[vt.length-1],Fn=Math.hypot(Dn.x-ys.x,Dn.y-ys.y);let Zt;const tn=Fn<gs*.35,xs=gt/Math.max(_s,1);if(tn&&gs>20){const ts=Math.max(gt,_s)*.15;let ji=0;for(const Ii of vt){const Oc=Ii.x-Bt<ts,Wd=ln-Ii.x<ts,Fd=Ii.y-rn<ts,Yd=wt-Ii.y<ts;(Oc||Wd)&&(Fd||Yd)&&ji++}Zt=ji>vt.length*.15?"box":"circle"}else xs>3&&_s<40?Zt="underline":Fn>gs*.5?Zt="arrow":Zt="drawing";const Ln=Math.min(10,vt.length),Zs=Math.max(1,Math.floor(vt.length/Ln)),wo=new Set,ls=[],li=[ys];for(let ts=Zs;ts<vt.length-1;ts+=Zs)li.push(vt[ts]);li.push(Dn);for(const ts of li){const ji=cr(ts.x,ts.y);if(!ji||wo.has(ji)||Lo(ji,"[data-feedback-toolbar]"))continue;wo.add(ji);const{name:Ii}=al(ji);ls.includes(Ii)||ls.push(Ii)}const ki=`${Math.round(Bt)},${Math.round(rn)} → ${Math.round(ln)},${Math.round(wt)}`;let Ci;(Zt==="circle"||Zt==="box")&&ls.length>0?Ci=`${Zt==="box"?"Boxed":"Circled"} **${ls[0]}**${ls.length>1?` (and ${ls.slice(1).join(", ")})`:""} (region: ${ki})`:Zt==="underline"&&ls.length>0?Ci=`Underlined **${ls[0]}** (${ki})`:Zt==="arrow"&&ls.length>=2?Ci=`Arrow from **${ls[0]}** to **${ls[ls.length-1]}** (${Math.round(ys.x)},${Math.round(ys.y)} → ${Math.round(Dn.x)},${Math.round(Dn.y)})`:ls.length>0?Ci=`${Zt==="arrow"?"Arrow":"Drawing"} near **${ls.join("**, **")}** (region: ${ki})`:Ci=`Drawing at ${ki}`,ye.push(Ci)}ee&&(ee.style.visibility=""),ye.length>0&&(F+=`
**Drawings:**
`,ye.forEach((et,lt)=>{F+=`${lt+1}. ${et}
`}))}if((Ke.length>0||O&&mn)&&(F+=`
`+Wy(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:at,wireframePurpose:mn||void 0},en.outputDetail)),nt){const V=Fy(nt,en.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(F+=`
`+V)}if(g)try{await navigator.clipboard.writeText(F)}catch{}h==null||h(F),L(!0),Yt(()=>L(!1),2e3),en.autoClearAfterCopy&&Yt(()=>Lt(),500)},[j,On,Ke,nt,at,tt,Jn,mn,jt,en.outputDetail,je,en.autoClearAfterCopy,Lt,g,h]),gn=y.useCallback(async()=>{const D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:jt;let O=Qy(j,D,en.outputDetail);if(!O&&Ke.length===0&&!nt)return;if(O||(O=`## Page Feedback: ${D}
`),Ke.length>0&&(O+=`
`+Wy(Ke,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:at,wireframePurpose:mn||void 0},en.outputDetail)),nt){const V=Fy(nt,en.outputDetail,{width:window.innerWidth,height:window.innerHeight});V&&(O+=`
`+V)}p&&p(O,j),B("sending"),await new Promise(V=>Yt(V,150));const F=await Ao("submit",{output:O,annotations:j},!0);B(F?"sent":"failed"),Yt(()=>B("idle"),2500),F&&en.autoClearAfterCopy&&Yt(()=>Lt(),500)},[p,Ao,j,Ke,nt,at,Jn,jt,en.outputDetail,je,en.autoClearAfterCopy,Lt]);y.useEffect(()=>{if(!_n)return;const D=10,O=V=>{const ee=V.clientX-_n.x,ye=V.clientY-_n.y,Qe=Math.sqrt(ee*ee+ye*ye);if(!Xn&&Qe>D&&fn(!0),Xn||Qe>D){let et=_n.toolbarX+ee,lt=_n.toolbarY+ye;const vt=20,Bt=337,rn=44,wt=Bt-(C?rt==="connected"?297:257:44),gt=vt-wt,_s=window.innerWidth-vt-Bt;et=Math.max(gt,Math.min(_s,et)),lt=Math.max(vt,Math.min(window.innerHeight-rn-vt,lt)),cn({x:et,y:lt})}},F=()=>{Xn&&(As.current=!0),fn(!1),qn(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)}},[_n,Xn,C,rt]);const Ls=y.useCallback(D=>{var ye,Qe;if(D.target.closest("button")||D.target.closest("[data-agentation-settings-panel]"))return;const O=D.currentTarget.parentElement;if(!O)return;const F=O.getBoundingClientRect(),V=(ye=zt==null?void 0:zt.x)!=null?ye:F.left,ee=(Qe=zt==null?void 0:zt.y)!=null?Qe:F.top;qn({x:D.clientX,y:D.clientY,toolbarX:V,toolbarY:ee})},[zt]);if(y.useEffect(()=>{if(!zt)return;const D=()=>{let ee=zt.x,ye=zt.y;const lt=20-(337-(C?rt==="connected"?297:257:44)),vt=window.innerWidth-20-337;ee=Math.max(lt,Math.min(vt,ee)),ye=Math.max(20,Math.min(window.innerHeight-44-20,ye)),(ee!==zt.x||ye!==zt.y)&&cn({x:ee,y:ye})};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[zt,C,rt]),y.useEffect(()=>{const D=O=>{const F=O.target,V=F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable;if(O.key==="Escape"){if(tt){Jt?Ht(null):ps();return}if(Ts){Vs(!1);return}if(En.length>0){ro([]);return}K||C&&(es(),k(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),es(),C?Do():k(!0);return}if(!(V||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),es(),$i()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),es(),Ts&&Vs(!1),ke&&Ue(!1),K&&Pe(),tt?ps():Ot(!0)),(O.key==="h"||O.key==="H")&&j.length>0&&(O.preventDefault(),es(),T(ee=>!ee)),(O.key==="c"||O.key==="C")&&(j.length>0||Ke.length>0||nt)&&(O.preventDefault(),es(),$n()),(O.key==="x"||O.key==="X")&&(j.length>0||Ke.length>0||nt)&&(O.preventDefault(),es(),Lt(),Ke.length>0&&Ut([]),nt&&ws(null)),O.key==="s"||O.key==="S")){const ee=Wi(en.webhookUrl)||Wi(w||"");j.length>0&&ee&&H==="idle"&&(O.preventDefault(),es(),gn())}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[C,Ts,tt,Jt,Ke,nt,K,j.length,en.webhookUrl,w,H,gn,$i,$n,Lt,En]),!Ye||$)return null;const Us=j.length>0,Vo=j.filter(D=>!Y.has(D.id)&&D.kind!=="placement"&&D.kind!=="rearrange"),br=Vo.length>0,No=j.filter(D=>Y.has(D.id)),pl=D=>{const ye=D.x/100*window.innerWidth,Qe=typeof D.y=="string"?parseFloat(D.y):D.y,et={};window.innerHeight-Qe-22-10<80&&(et.top="auto",et.bottom="calc(100% + 10px)");const vt=ye-200/2,Bt=10;if(vt<Bt){const rn=Bt-vt;et.left=`calc(50% + ${rn}px)`}else if(vt+200>window.innerWidth-Bt){const rn=vt+200-(window.innerWidth-Bt);et.left=`calc(50% - ${rn}px)`}return et};return Mc.createPortal(r.jsxs("div",{ref:q,style:{display:"contents"},"data-agentation-theme":Ds?"dark":"light","data-agentation-accent":en.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${Fe.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:zt?{left:zt.x,top:zt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${Fe.toolbarContainer} ${C?Fe.expanded:Fe.collapsed} ${ei?Fe.entrance:""} ${P?Fe.hiding:""} ${!en.webhooksEnabled&&(Wi(en.webhookUrl)||Wi(w||""))?Fe.serverConnected:""}`,onClick:C?void 0:D=>{if(As.current){As.current=!1,D.preventDefault();return}k(!0)},onMouseDown:Ls,role:C?void 0:"button",tabIndex:C?-1:0,title:C?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${Fe.toggleContent} ${C?Fe.hidden:Fe.visible}`,children:[r.jsx(Pw,{size:24}),br&&r.jsx("span",{className:`${Fe.badge} ${C?Fe.fadeOut:""} ${ei?Fe.entrance:""}`,children:Vo.length})]}),r.jsxs("div",{className:`${Fe.controlsContent} ${C?Fe.visible:Fe.hidden} ${zt&&zt.y<100?Fe.tooltipBelow:""} ${Pt||ke?Fe.tooltipsHidden:""} ${vi?Fe.tooltipsInSession:""}`,onMouseEnter:Ss,onMouseLeave:Mo,children:[r.jsxs("div",{className:`${Fe.buttonWrapper} ${zt&&zt.x<120?Fe.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:Fe.controlButton,onClick:D=>{D.stopPropagation(),es(),$i()},"data-active":Z,children:r.jsx(Fw,{size:24,isPaused:Z})}),r.jsxs("span",{className:Fe.buttonTooltip,children:[Z?"Resume animations":"Pause animations",r.jsx("span",{className:Fe.shortcut,children:"P"})]})]}),r.jsxs("div",{className:Fe.buttonWrapper,children:[r.jsx("button",{className:`${Fe.controlButton} ${Ds?"":Fe.light}`,onClick:D=>{D.stopPropagation(),es(),Ts&&Vs(!1),ke&&Ue(!1),K&&Pe(),tt?ps():Ot(!0)},"data-active":tt,style:tt&&at?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(eS,{size:21})}),r.jsxs("span",{className:Fe.buttonTooltip,children:[tt?"Exit layout mode":"Layout mode",r.jsx("span",{className:Fe.shortcut,children:"L"})]})]}),r.jsxs("div",{className:Fe.buttonWrapper,children:[r.jsx("button",{className:Fe.controlButton,onClick:D=>{D.stopPropagation(),es(),T(!A)},disabled:!Us||tt,children:r.jsx(Ww,{size:24,isOpen:A})}),r.jsxs("span",{className:Fe.buttonTooltip,children:[A?"Hide markers":"Show markers",r.jsx("span",{className:Fe.shortcut,children:"H"})]})]}),r.jsxs("div",{className:Fe.buttonWrapper,children:[r.jsx("button",{className:`${Fe.controlButton} ${Ee?Fe.statusShowing:""}`,onClick:D=>{D.stopPropagation(),es(),$n()},disabled:tt&&at?Ke.length===0&&!((Rc=nt==null?void 0:nt.sections)!=null&&Rc.length):!Us&&On.length===0&&Ke.length===0&&!((Lc=nt==null?void 0:nt.sections)!=null&&Lc.length),"data-active":Ee,children:r.jsx(Vw,{size:24,copied:Ee,tint:tt&&at&&(Ke.length>0||(_l=nt==null?void 0:nt.sections)!=null&&_l.length)?"#f97316":void 0})}),r.jsxs("span",{className:Fe.buttonTooltip,children:[tt&&at?"Copy layout":"Copy feedback",r.jsx("span",{className:Fe.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${Fe.buttonWrapper} ${Fe.sendButtonWrapper} ${C&&!en.webhooksEnabled&&(Wi(en.webhookUrl)||Wi(w||""))?Fe.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${Fe.controlButton} ${H==="sent"||H==="failed"?Fe.statusShowing:""}`,onClick:D=>{D.stopPropagation(),es(),gn()},disabled:!Us||!Wi(en.webhookUrl)&&!Wi(w||"")||H==="sending","data-no-hover":H==="sent"||H==="failed",tabIndex:Wi(en.webhookUrl)||Wi(w||"")?0:-1,children:[r.jsx(Uw,{size:24,state:H}),Us&&H==="idle"&&r.jsx("span",{className:Fe.buttonBadge,children:j.length})]}),r.jsxs("span",{className:Fe.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:Fe.shortcut,children:"S"})]})]}),r.jsxs("div",{className:Fe.buttonWrapper,children:[r.jsx("button",{className:Fe.controlButton,onClick:D=>{D.stopPropagation(),es(),Lt()},disabled:!Us&&On.length===0&&Ke.length===0&&!((gl=nt==null?void 0:nt.sections)!=null&&gl.length),"data-danger":!0,children:r.jsx(Xw,{size:24})}),r.jsxs("span",{className:Fe.buttonTooltip,children:["Clear all",r.jsx("span",{className:Fe.shortcut,children:"X"})]})]}),r.jsxs("div",{className:Fe.buttonWrapper,children:[r.jsx("button",{className:Fe.controlButton,onClick:D=>{D.stopPropagation(),es(),tt&&ps(),Ue(!ke)},children:r.jsx(Yw,{size:24})}),_&&rt!=="disconnected"&&r.jsx("span",{className:`${Fe.mcpIndicator} ${Fe[rt]} ${ke?Fe.hidden:""}`,title:rt==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:Fe.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:Fe.divider}),r.jsxs("div",{className:`${Fe.buttonWrapper} ${zt&&typeof window<"u"&&zt.x>window.innerWidth-120?Fe.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:Fe.controlButton,onClick:D=>{D.stopPropagation(),es(),Do()},children:r.jsx(qw,{size:24})}),r.jsxs("span",{className:Fe.buttonTooltip,children:["Exit",r.jsx("span",{className:Fe.shortcut,children:"Esc"})]})]})]}),r.jsx(E4,{visible:tt&&C,activeType:Jt,onSelect:D=>{Ht(Jt===D?null:D)},isDarkMode:Ds,sectionCount:(pa=nt==null?void 0:nt.sections.length)!=null?pa:0,onDetectSections:()=>{var Qe,et;const D=P4(),O=(Qe=nt==null?void 0:nt.sections)!=null?Qe:[],F=new Set(O.map(lt=>lt.selector)),V=D.filter(lt=>!F.has(lt.selector)),ee=[...O,...V],ye=[...(et=nt==null?void 0:nt.originalOrder)!=null?et:[],...V.map(lt=>lt.id)];ws({sections:ee,originalOrder:ye,detectedAt:Date.now()})},placementCount:Ke.length,onClearPlacements:()=>{oo(D=>D+1),Qs(D=>D+1),Yt(()=>{ws({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:at,onBlankCanvasChange:D=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};D?(Qo.current={rearrange:nt,placements:Ke},ws(to.current.rearrange||O),Ut(to.current.placements),Ht(null)):(to.current={rearrange:nt,placements:Ke},ws(Qo.current.rearrange||O),Ut(Qo.current.placements)),Wt(D)},wireframePurpose:mn,onWireframePurposeChange:Yn,Tooltip:hr,onDragStart:(D,O)=>{var rn;O.preventDefault();const F=xt[D];let V=null,ee=!1;const ye=O.clientX,Qe=O.clientY,et=O.target.closest("[data-feedback-toolbar]"),lt=(rn=et==null?void 0:et.getBoundingClientRect().top)!=null?rn:window.innerHeight,vt=ln=>{const wt=ln.clientX-ye,gt=ln.clientY-Qe;if(!ee&&(Math.abs(wt)>4||Math.abs(gt)>4)&&(ee=!0,V=document.createElement("div"),V.className=`${Re.dragPreview}${at?` ${Re.dragPreviewWireframe}`:""}`,document.body.appendChild(V)),!V)return;const _s=Math.max(0,lt-ln.clientY),gs=Math.min(1,_s/180),ys=1-Math.pow(1-gs,2),Dn=28,Fn=20,Zt=Math.min(140,F.width*.18),tn=Math.min(90,F.height*.18),xs=Dn+(Zt-Dn)*ys,Ln=Fn+(tn-Fn)*ys;V.style.width=`${xs}px`,V.style.height=`${Ln}px`,V.style.left=`${ln.clientX-xs/2}px`,V.style.top=`${ln.clientY-Ln/2}px`,V.style.opacity=`${.5+.5*ys}`,V.textContent=ys>.25?D:""},Bt=ln=>{if(window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Bt),V&&document.body.removeChild(V),ee){const wt=F.width,gt=F.height,_s=window.scrollY,gs=Math.max(0,ln.clientX-wt/2),ys=Math.max(0,ln.clientY+_s-gt/2),Dn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:D,x:gs,y:ys,width:wt,height:gt,scrollY:_s,timestamp:Date.now()};Ut(Fn=>[...Fn,Dn]),Ht(null),io.current=new Set,co(Fn=>Fn+1)}};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Bt)}}),r.jsx(Gk,{settings:en,onSettingsChange:D=>Po(O=>({...O,...D})),isDarkMode:Ds,onToggleTheme:J,isDevMode:he,connectionStatus:rt,endpoint:_,isVisible:We,toolbarNearBottom:!!zt&&zt.y<230,settingsPage:Nt,onSettingsPageChange:Et,onHideToolbar:Gi})]})}),(tt||on)&&r.jsx("div",{className:`${Re.blankCanvas} ${Tn?Re.visible:""} ${xn?Re.gridActive:""}`,style:{"--canvas-opacity":Zn},"data-feedback-toolbar":!0}),tt&&at&&Tn&&r.jsxs("div",{className:Re.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:Re.wireframeOpacityRow,children:[r.jsx("span",{className:Re.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:Re.wireframeOpacitySlider,min:0,max:1,step:.01,value:Zn,onChange:D=>Ms(Number(D.target.value))})]}),r.jsxs("div",{className:Re.wireframeNoticeTitleRow,children:[r.jsx("span",{className:Re.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:Re.wireframeNoticeDivider}),r.jsx("button",{className:Re.wireframeStartOver,onClick:()=>{oo(D=>D+1),ws({sections:[],originalOrder:[],detectedAt:Date.now()}),to.current={rearrange:null,placements:[]},Yn(""),Ju(jt)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(tt||on)&&r.jsx(k4,{placements:Ke,onChange:Ut,activeComponent:on?null:Jt,onActiveComponentChange:Ht,isDarkMode:Ds,exiting:on,onInteractionChange:Wn,passthrough:!Jt,extraSnapRects:nt==null?void 0:nt.sections.map(D=>D.currentRect),deselectSignal:Co,clearSignal:so,wireframe:at,onSelectionChange:(D,O)=>{io.current=D,O||(Rn.current=new Set,no(F=>F+1))},onDragMove:(D,O)=>{const F=Rn.current;if(!(!F.size||!nt)){if(!hs.current){hs.current=new Map;for(const V of nt.sections)F.has(V.id)&&hs.current.set(V.id,{x:V.currentRect.x,y:V.currentRect.y})}for(const V of nt.sections){if(!F.has(V.id)||!hs.current.get(V.id))continue;const ye=document.querySelector(`[data-rearrange-section="${V.id}"]`);ye&&(ye.style.transform=`translate(${D}px, ${O}px)`)}}},onDragEnd:(D,O,F)=>{const V=Rn.current,ee=hs.current;if(hs.current=null,!(!V.size||!nt||!ee)){for(const ye of V){const Qe=document.querySelector(`[data-rearrange-section="${ye}"]`);Qe&&(Qe.style.transform="")}F&&ws(ye=>ye&&{...ye,sections:ye.sections.map(Qe=>{const et=ee.get(Qe.id);return et?{...Qe,currentRect:{...Qe.currentRect,x:Math.max(0,et.x+D),y:Math.max(0,et.y+O)}}:Qe})})}}}),(tt||on)&&nt&&r.jsx(U4,{rearrangeState:nt,onChange:ws,isDarkMode:Ds,exiting:on,blankCanvas:at,extraSnapRects:Ke.map(D=>({x:D.x,y:D.y,width:D.width,height:D.height})),clearSignal:Nn,deselectSignal:Bn,onSelectionChange:(D,O)=>{Rn.current=D,O||(io.current=new Set,co(F=>F+1))},onDragMove:(D,O)=>{const F=io.current;if(F.size){if(!hs.current){hs.current=new Map;for(const V of Ke)F.has(V.id)&&hs.current.set(V.id,{x:V.x,y:V.y})}for(const V of F){const ee=document.querySelector(`[data-design-placement="${V}"]`);ee&&(ee.style.transform=`translate(${D}px, ${O}px)`)}}},onDragEnd:(D,O,F)=>{const V=io.current,ee=hs.current;if(hs.current=null,!(!V.size||!ee)){for(const ye of V){const Qe=document.querySelector(`[data-design-placement="${ye}"]`);Qe&&(Qe.style.transform="")}F&&Ut(ye=>ye.map(Qe=>{const et=ee.get(Qe.id);return et?{...Qe,x:Math.max(0,et.x+D),y:Math.max(0,et.y+O)}:Qe}))}}}),r.jsx("canvas",{ref:jo,className:`${Fe.drawCanvas} ${Ts?Fe.active:""}`,style:{opacity:Oi?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:Fe.markersLayer,"data-feedback-toolbar":!0,children:[ne&&Vo.filter(D=>!D.isFixed).map((D,O,F)=>r.jsx(Zy,{annotation:D,globalIndex:Vo.findIndex(V=>V.id===D.id),layerIndex:O,layerSize:F.length,isExiting:G,isClearing:Ae,isAnimated:Vt.has(D.id),isHovered:!G&&Ze===D.id,isDeleting:nn===D.id,isEditingAny:!!ae,renumberFrom:Ge,markerClickBehavior:en.markerClickBehavior,tooltipStyle:pl(D),onHoverEnter:V=>!G&&V.id!==Ns.current&&kt(V),onHoverLeave:()=>kt(null),onClick:V=>en.markerClickBehavior==="delete"?dt(V.id):Ki(V),onContextMenu:Ki},D.id)),ne&&!G&&No.filter(D=>!D.isFixed).map(D=>r.jsx(Jy,{annotation:D},D.id))]}),r.jsxs("div",{className:Fe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ne&&Vo.filter(D=>D.isFixed).map((D,O,F)=>r.jsx(Zy,{annotation:D,globalIndex:Vo.findIndex(V=>V.id===D.id),layerIndex:O,layerSize:F.length,isExiting:G,isClearing:Ae,isAnimated:Vt.has(D.id),isHovered:!G&&Ze===D.id,isDeleting:nn===D.id,isEditingAny:!!ae,renumberFrom:Ge,markerClickBehavior:en.markerClickBehavior,tooltipStyle:pl(D),onHoverEnter:V=>!G&&V.id!==Ns.current&&kt(V),onHoverLeave:()=>kt(null),onClick:V=>en.markerClickBehavior==="delete"?dt(V.id):Ki(V),onContextMenu:Ki},D.id)),ne&&!G&&No.filter(D=>D.isFixed).map(D=>r.jsx(Jy,{annotation:D,fixed:!0},D.id))]}),C&&r.jsxs("div",{className:Fe.overlay,"data-feedback-toolbar":!0,style:K||ae?{zIndex:99999}:void 0,children:[(de==null?void 0:de.rect)&&!K&&!pt&&!ut&&r.jsx("div",{className:`${Fe.hoverHighlight} ${Fe.enter}`,style:{left:de.rect.left,top:de.rect.top,width:de.rect.width,height:de.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),En.filter(D=>document.contains(D.element)).map((D,O)=>{const F=D.element.getBoundingClientRect(),V=En.length>1;return r.jsx("div",{className:V?Fe.multiSelectOutline:Fe.singleSelectOutline,style:{position:"fixed",left:F.left,top:F.top,width:F.width,height:F.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),Ze&&!K&&(()=>{var ee;const D=j.find(ye=>ye.id===Ze);if(!(D!=null&&D.boundingBox))return null;if((ee=D.elementBoundingBoxes)!=null&&ee.length)return Dt.length>0?Dt.filter(ye=>document.contains(ye)).map((ye,Qe)=>{const et=ye.getBoundingClientRect();return r.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:et.left,top:et.top,width:et.width,height:et.height}},`hover-outline-live-${Qe}`)}):D.elementBoundingBoxes.map((ye,Qe)=>r.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:ye.x,top:ye.y-Ie,width:ye.width,height:ye.height}},`hover-outline-${Qe}`));const O=Xt&&document.contains(Xt)?Xt.getBoundingClientRect():null,F=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:D.boundingBox.x,y:D.isFixed?D.boundingBox.y:D.boundingBox.y-Ie,width:D.boundingBox.width,height:D.boundingBox.height},V=D.isMultiSelect;return r.jsx("div",{className:`${V?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Fe.enter}`,style:{left:F.x,top:F.y,width:F.width,height:F.height,...V?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),de&&!K&&!pt&&!ut&&r.jsxs("div",{className:`${Fe.hoverTooltip} ${Fe.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(de.reactComponents?48:32),8)},children:[de.reactComponents&&r.jsx("div",{className:Fe.hoverReactPath,children:de.reactComponents}),r.jsx("div",{className:Fe.hoverElementName,children:de.elementName})]}),K&&r.jsxs(r.Fragment,{children:[(_a=K.multiSelectElements)!=null&&_a.length?K.multiSelectElements.filter(D=>document.contains(D)).map((D,O)=>{const F=D.getBoundingClientRect();return r.jsx("div",{className:`${Fe.multiSelectOutline} ${re?Fe.exit:Fe.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`pending-multi-${O}`)}):K.targetElement&&document.contains(K.targetElement)?(()=>{const D=K.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${Fe.singleSelectOutline} ${re?Fe.exit:Fe.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():K.boundingBox&&r.jsx("div",{className:`${K.isMultiSelect?Fe.multiSelectOutline:Fe.singleSelectOutline} ${re?Fe.exit:Fe.enter}`,style:{left:K.boundingBox.x,top:K.boundingBox.y-Ie,width:K.boundingBox.width,height:K.boundingBox.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const D=K.x,O=K.isFixed?K.y:K.y-Ie;return r.jsxs(r.Fragment,{children:[r.jsx(Ik,{x:D,y:O,isMultiSelect:K.isMultiSelect,isExiting:re}),r.jsx(kd,{ref:zn,element:K.element,selectedText:K.selectedText,computedStyles:K.computedStylesObj,placeholder:K.element==="Area selection"?"What should change in this area?":K.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:xr,onCancel:Pe,isExiting:re,lightMode:!Ds,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,D/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),ae&&r.jsxs(r.Fragment,{children:[(Bc=ae.elementBoundingBoxes)!=null&&Bc.length?qe.length>0?qe.filter(D=>document.contains(D)).map((D,O)=>{const F=D.getBoundingClientRect();return r.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:F.left,top:F.top,width:F.width,height:F.height}},`edit-multi-live-${O}`)}):ae.elementBoundingBoxes.map((D,O)=>r.jsx("div",{className:`${Fe.multiSelectOutline} ${Fe.enter}`,style:{left:D.x,top:D.y-Ie,width:D.width,height:D.height}},`edit-multi-${O}`)):(()=>{const D=Ce&&document.contains(Ce)?Ce.getBoundingClientRect():null,O=D?{x:D.left,y:D.top,width:D.width,height:D.height}:ae.boundingBox?{x:ae.boundingBox.x,y:ae.isFixed?ae.boundingBox.y:ae.boundingBox.y-Ie,width:ae.boundingBox.width,height:ae.boundingBox.height}:null;return O?r.jsx("div",{className:`${ae.isMultiSelect?Fe.multiSelectOutline:Fe.singleSelectOutline} ${Fe.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...ae.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(kd,{ref:Cs,element:ae.element,selectedText:ae.selectedText,computedStyles:O4(ae.computedStyles),placeholder:"Edit your feedback...",initialValue:ae.comment,submitLabel:"Save",onSubmit:mt,onCancel:Rt,onDelete:()=>dt(ae.id),isExiting:Le,lightMode:!Ds,accentColor:ae.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const D=ae.isFixed?ae.y:ae.y-Ie;return{left:Math.max(160,Math.min(window.innerWidth-160,ae.x/100*window.innerWidth)),...D>window.innerHeight-290?{bottom:window.innerHeight-D+20}:{top:D+20}}})()})]}),ut&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:Tt,className:Fe.dragSelection}),r.jsx("div",{ref:Gt,className:Fe.highlightsContainer})]})]})]}),document.body)}const gp=y.createContext({});function Tc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const Zk=typeof window<"u",yp=Zk?y.useLayoutEffect:y.useEffect,Od=y.createContext(null);function xp(t,n){t.indexOf(n)===-1&&t.push(n)}function ll(t,n){const o=t.indexOf(n);o>-1&&t.splice(o,1)}const qi=(t,n,o)=>o>n?n:o<t?t:o;let bp=()=>{};const Fa={},tb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function nb(t){return typeof t=="object"&&t!==null}const sb=t=>/^0[^.\s]+$/u.test(t);function ob(t){let n;return()=>(n===void 0&&(n=t()),n)}const yi=t=>t,Jk=(t,n)=>o=>n(t(o)),Ec=(...t)=>t.reduce(Jk),cl=(t,n,o)=>{const a=n-t;return a===0?1:(o-t)/a};class vp{constructor(){this.subscriptions=[]}add(n){return xp(this.subscriptions,n),()=>ll(this.subscriptions,n)}notify(n,o,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,o,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Go=t=>t*1e3,gi=t=>t/1e3;function ib(t,n){return n?t*(1e3/n):0}const e6=(t,n,o)=>{const a=n-t;return((o-t)%a+a)%a+t},ab=(t,n,o)=>(((1-3*o+3*n)*t+(3*o-6*n))*t+3*n)*t,t6=1e-7,n6=12;function s6(t,n,o,a,c){let u,d,h=0;do d=n+(o-n)/2,u=ab(d,a,c)-t,u>0?o=d:n=d;while(Math.abs(u)>t6&&++h<n6);return d}function Dc(t,n,o,a){if(t===n&&o===a)return yi;const c=u=>s6(u,0,1,t,o);return u=>u===0||u===1?u:ab(c(u),n,a)}const rb=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,lb=t=>n=>1-t(1-n),cb=Dc(.33,1.53,.69,.99),wp=lb(cb),ub=rb(wp),db=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),fb=lb(Sp),hb=rb(Sp),o6=Dc(.42,0,1,1),i6=Dc(0,0,.58,1),mb=Dc(.42,0,.58,1),pb=t=>Array.isArray(t)&&typeof t[0]!="number";function _b(t,n){return pb(t)?t[e6(0,t.length,n)]:t}const gb=t=>Array.isArray(t)&&typeof t[0]=="number",a6={linear:yi,easeIn:o6,easeInOut:mb,easeOut:i6,circIn:Sp,circInOut:hb,circOut:fb,backIn:wp,backInOut:ub,backOut:cb,anticipate:db},r6=t=>typeof t=="string",s1=t=>{if(gb(t)){bp(t.length===4);const[n,o,a,c]=t;return Dc(n,o,a,c)}else if(r6(t))return a6[t];return t},sd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function l6(t,n){let o=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?o:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=o;o=a,a=x,o.forEach(p),o.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const c6=40;function yb(t,n){let o=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,d=sd.reduce((A,T)=>(A[T]=l6(u),A),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,C=()=>{const A=Fa.useManualTiming,T=A?c.timestamp:performance.now();o=!1,A||(c.delta=a?1e3/60:Math.max(Math.min(T-c.timestamp,c6),1)),c.timestamp=T,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,o&&n&&(a=!1,t(C))},k=()=>{o=!0,a=!0,c.isProcessing||t(C)};return{schedule:sd.reduce((A,T)=>{const $=d[T];return A[T]=(W,P=!1,X=!1)=>(o||k(),$.schedule(W,P,X)),A},{}),cancel:A=>{for(let T=0;T<sd.length;T++)d[sd[T]].cancel(A)},state:c,steps:d}}const{schedule:as,cancel:ma,state:xo,steps:lm}=yb(typeof requestAnimationFrame<"u"?requestAnimationFrame:yi,!0);let fd;function u6(){fd=void 0}const Oo={now:()=>(fd===void 0&&Oo.set(xo.isProcessing||Fa.useManualTiming?xo.timestamp:performance.now()),fd),set:t=>{fd=t,queueMicrotask(u6)}},xb=t=>n=>typeof n=="string"&&n.startsWith(t),bb=xb("--"),d6=xb("var(--"),kp=t=>d6(t)?f6.test(t.split("/*")[0].trim()):!1,f6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function o1(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const dl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},bc={...dl,transform:t=>qi(0,1,t)},od={...dl,default:1},mc=t=>Math.round(t*1e5)/1e5,Cp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function h6(t){return t==null}const m6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jp=(t,n)=>o=>!!(typeof o=="string"&&m6.test(o)&&o.startsWith(t)||n&&!h6(o)&&Object.prototype.hasOwnProperty.call(o,n)),vb=(t,n,o)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(Cp);return{[t]:parseFloat(c),[n]:parseFloat(u),[o]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},p6=t=>qi(0,255,t),cm={...dl,transform:t=>Math.round(p6(t))},mr={test:jp("rgb","red"),parse:vb("red","green","blue"),transform:({red:t,green:n,blue:o,alpha:a=1})=>"rgba("+cm.transform(t)+", "+cm.transform(n)+", "+cm.transform(o)+", "+mc(bc.transform(a))+")"};function _6(t){let n="",o="",a="",c="";return t.length>5?(n=t.substring(1,3),o=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),o=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,o+=o,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Im={test:jp("#"),parse:_6,transform:mr.transform},Ac=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Ha=Ac("deg"),Xi=Ac("%"),Mt=Ac("px"),g6=Ac("vh"),y6=Ac("vw"),i1={...Xi,parse:t=>Xi.parse(t)/100,transform:t=>Xi.transform(t*100)},sl={test:jp("hsl","hue"),parse:vb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:o,alpha:a=1})=>"hsla("+Math.round(t)+", "+Xi.transform(mc(n))+", "+Xi.transform(mc(o))+", "+mc(bc.transform(a))+")"},Gs={test:t=>mr.test(t)||Im.test(t)||sl.test(t),parse:t=>mr.test(t)?mr.parse(t):sl.test(t)?sl.parse(t):Im.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?mr.transform(t):sl.transform(t),getAnimatableNone:t=>{const n=Gs.parse(t);return n.alpha=0,Gs.transform(n)}},x6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function b6(t){var n,o;return isNaN(t)&&typeof t=="string"&&(((n=t.match(Cp))==null?void 0:n.length)||0)+(((o=t.match(x6))==null?void 0:o.length)||0)>0}const wb="number",Sb="color",v6="var",w6="var(",a1="${}",S6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ul(t){const n=t.toString(),o=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(S6,p=>(Gs.test(p)?(a.color.push(u),c.push(Sb),o.push(Gs.parse(p))):p.startsWith(w6)?(a.var.push(u),c.push(v6),o.push(p)):(a.number.push(u),c.push(wb),o.push(parseFloat(p))),++u,a1)).split(a1);return{values:o,split:h,indexes:a,types:c}}function k6(t){return ul(t).values}function kb({split:t,types:n}){const o=t.length;return a=>{let c="";for(let u=0;u<o;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===wb?c+=mc(a[u]):d===Sb?c+=Gs.transform(a[u]):c+=a[u]}return c}}function C6(t){return kb(ul(t))}const j6=t=>typeof t=="number"?0:Gs.test(t)?Gs.getAnimatableNone(t):t,M6=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:j6(t);function T6(t){const n=ul(t);return kb(n)(n.values.map((a,c)=>M6(a,n.split[c])))}const Ri={test:b6,parse:k6,createTransformer:C6,getAnimatableNone:T6};function um(t,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(n-t)*6*o:o<1/2?n:o<2/3?t+(n-t)*(2/3-o)*6:t}function E6({hue:t,saturation:n,lightness:o,alpha:a}){t/=360,n/=100,o/=100;let c=0,u=0,d=0;if(!n)c=u=d=o;else{const h=o<.5?o*(1+n):o+n-o*n,p=2*o-h;c=um(p,h,t+1/3),u=um(p,h,t),d=um(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function Md(t,n){return o=>o>0?n:t}const fs=(t,n,o)=>t+(n-t)*o,dm=(t,n,o)=>{const a=t*t,c=o*(n*n-a)+a;return c<0?0:Math.sqrt(c)},D6=[Im,mr,sl],A6=t=>D6.find(n=>n.test(t));function r1(t){const n=A6(t);if(!n)return!1;let o=n.parse(t);return n===sl&&(o=E6(o)),o}const l1=(t,n)=>{const o=r1(t),a=r1(n);if(!o||!a)return Md(t,n);const c={...o};return u=>(c.red=dm(o.red,a.red,u),c.green=dm(o.green,a.green,u),c.blue=dm(o.blue,a.blue,u),c.alpha=fs(o.alpha,a.alpha,u),mr.transform(c))},Pm=new Set(["none","hidden"]);function N6(t,n){return Pm.has(t)?o=>o<=0?t:n:o=>o>=1?n:t}function R6(t,n){return o=>fs(t,n,o)}function Mp(t){return typeof t=="number"?R6:typeof t=="string"?kp(t)?Md:Gs.test(t)?l1:O6:Array.isArray(t)?Cb:typeof t=="object"?Gs.test(t)?l1:L6:Md}function Cb(t,n){const o=[...t],a=o.length,c=t.map((u,d)=>Mp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)o[d]=c[d](u);return o}}function L6(t,n){const o={...t,...n},a={};for(const c in o)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Mp(t[c])(t[c],n[c]));return c=>{for(const u in a)o[u]=a[u](c);return o}}function B6(t,n){var c;const o=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;o[u]=p,a[d]++}return o}const O6=(t,n)=>{const o=Ri.createTransformer(n),a=ul(t),c=ul(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Pm.has(t)&&!c.values.length||Pm.has(n)&&!a.values.length?N6(t,n):Ec(Cb(B6(a,c),c.values),o):Md(t,n)};function jb(t,n,o){return typeof t=="number"&&typeof n=="number"&&typeof o=="number"?fs(t,n,o):Mp(t)(t,n)}const z6=t=>{const n=({timestamp:o})=>t(o);return{start:(o=!0)=>as.update(n,o),stop:()=>ma(n),now:()=>xo.isProcessing?xo.timestamp:Oo.now()}},Mb=(t,n,o=10)=>{let a="";const c=Math.max(Math.round(n/o),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Td=2e4;function Tp(t){let n=0;const o=50;let a=t.next(n);for(;!a.done&&n<Td;)n+=o,a=t.next(n);return n>=Td?1/0:n}function Tb(t,n=100,o){const a=o({...t,keyframes:[0,n]}),c=Math.min(Tp(a),Td);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:gi(c)}}const zs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hm(t,n){return t*Math.sqrt(1-n*n)}const $6=12;function I6(t,n,o){let a=o;for(let c=1;c<$6;c++)a=a-t(a)/n(a);return a}const fm=.001;function P6({duration:t=zs.duration,bounce:n=zs.bounce,velocity:o=zs.velocity,mass:a=zs.mass}){let c,u,d=1-n;d=qi(zs.minDamping,zs.maxDamping,d),t=qi(zs.minDuration,zs.maxDuration,gi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-o,w=Hm(g,d),S=Math.exp(-x);return fm-b/w*S},u=g=>{const x=g*d*t,b=x*o+o,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),C=Hm(Math.pow(g,2),d);return(-c(g)+fm>0?-1:1)*((b-w)*S)/C}):(c=g=>{const _=Math.exp(-g*t),x=(g-o)*t+1;return-fm+_*x},u=g=>{const _=Math.exp(-g*t),x=(o-g)*(t*t);return _*x});const h=5/t,p=I6(c,u,h);if(t=Go(t),isNaN(p))return{stiffness:zs.stiffness,damping:zs.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const H6=["duration","bounce"],V6=["stiffness","damping","mass"];function c1(t,n){return n.some(o=>t[o]!==void 0)}function U6(t){let n={velocity:zs.velocity,stiffness:zs.stiffness,damping:zs.damping,mass:zs.mass,isResolvedFromDuration:!1,...t};if(!c1(t,V6)&&c1(t,H6))if(n.velocity=0,t.visualDuration){const o=t.visualDuration,a=2*Math.PI/(o*1.2),c=a*a,u=2*qi(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:zs.mass,stiffness:c,damping:u}}else{const o=P6({...t,velocity:0});n={...n,...o,mass:zs.mass},n.isResolvedFromDuration=!0}return n}function vc(t=zs.visualDuration,n=zs.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=o;const u=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=U6({...o,velocity:-gi(o.velocity||0)}),S=b||0,C=g/(2*Math.sqrt(p*_)),k=d-u,j=gi(Math.sqrt(p/_)),N=Math.abs(k)<5;a||(a=N?zs.restSpeed.granular:zs.restSpeed.default),c||(c=N?zs.restDelta.granular:zs.restDelta.default);let A,T,$,W,P,X;if(C<1)$=Hm(j,C),W=(S+C*j*k)/$,A=ne=>{const le=Math.exp(-C*j*ne);return d-le*(W*Math.sin($*ne)+k*Math.cos($*ne))},P=C*j*W+k*$,X=C*j*k-W*$,T=ne=>Math.exp(-C*j*ne)*(P*Math.sin($*ne)+X*Math.cos($*ne));else if(C===1){A=le=>d-Math.exp(-j*le)*(k+(S+j*k)*le);const ne=S+j*k;T=le=>Math.exp(-j*le)*(j*ne*le-S)}else{const ne=j*Math.sqrt(C*C-1);A=de=>{const be=Math.exp(-C*j*de),z=Math.min(ne*de,300);return d-be*((S+C*j*k)*Math.sinh(z)+ne*k*Math.cosh(z))/ne};const le=(S+C*j*k)/ne,G=C*j*le-k*ne,te=C*j*k-le*ne;T=de=>{const be=Math.exp(-C*j*de),z=Math.min(ne*de,300);return be*(G*Math.sinh(z)+te*Math.cosh(z))}}const q={calculatedDuration:w&&x||null,velocity:ne=>Go(T(ne)),next:ne=>{if(!w&&C<1){const G=Math.exp(-C*j*ne),te=Math.sin($*ne),de=Math.cos($*ne),be=d-G*(W*te+k*de),z=Go(G*(P*te+X*de));return h.done=Math.abs(z)<=a&&Math.abs(d-be)<=c,h.value=h.done?d:be,h}const le=A(ne);if(w)h.done=ne>=x;else{const G=Go(T(ne));h.done=Math.abs(G)<=a&&Math.abs(d-le)<=c}return h.value=h.done?d:le,h},toString:()=>{const ne=Math.min(Tp(q),Td),le=Mb(G=>q.next(ne*G).value,ne,30);return ne+"ms "+le},toTransition:()=>{}};return q}vc.applyToOptions=t=>{const n=Tb(t,100,vc);return t.ease=n.ease,t.duration=Go(n.duration),t.type="keyframes",t};const W6=5;function Eb(t,n,o){const a=Math.max(n-W6,0);return ib(o-t(a),n-a)}function Vm({keyframes:t,velocity:n=0,power:o=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=X=>h!==void 0&&X<h||p!==void 0&&X>p,S=X=>h===void 0?p:p===void 0||Math.abs(h-X)<Math.abs(p-X)?h:p;let C=o*n;const k=x+C,j=d===void 0?k:d(k);j!==k&&(C=j-x);const N=X=>-C*Math.exp(-X/a),A=X=>j+N(X),T=X=>{const q=N(X),ne=A(X);b.done=Math.abs(q)<=g,b.value=b.done?j:ne};let $,W;const P=X=>{w(b.value)&&($=X,W=vc({keyframes:[b.value,S(b.value)],velocity:Eb(A,X,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return P(0),{calculatedDuration:null,next:X=>{let q=!1;return!W&&$===void 0&&(q=!0,T(X),P(X)),$!==void 0&&X>=$?W.next(X-$):(!q&&T(X),b)}}}function F6(t,n,o){const a=[],c=o||Fa.mix||jb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||yi:n;h=Ec(p,h)}a.push(h)}return a}function Db(t,n,{clamp:o=!0,ease:a,mixer:c}={}){const u=t.length;if(bp(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=F6(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=cl(t[x],t[x+1],_);return h[x](b)};return o?_=>g(qi(t[0],t[u-1],_)):g}function Ab(t,n){const o=t[t.length-1];for(let a=1;a<=n;a++){const c=cl(0,n,a);t.push(fs(o,1,c))}}function Nb(t){const n=[0];return Ab(n,t.length-1),n}function Y6(t,n){return t.map(o=>o*n)}function X6(t,n){return t.map(()=>n||mb).splice(0,t.length-1)}function pc({duration:t=300,keyframes:n,times:o,ease:a="easeInOut"}){const c=pb(a)?a.map(s1):s1(a),u={done:!1,value:n[0]},d=Y6(o&&o.length===n.length?o:Nb(n),t),h=Db(d,n,{ease:Array.isArray(c)?c:X6(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const q6=t=>t!==null;function zd(t,{repeat:n,repeatType:o="loop"},a,c=1){const u=t.filter(q6),h=c<0||n&&o!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const G6={decay:Vm,inertia:Vm,tween:pc,keyframes:pc,spring:vc};function Rb(t){typeof t.type=="string"&&(t.type=G6[t.type])}class Ep{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,o){return this.finished.then(n,o)}}const K6=t=>t/100;class Ed extends Ep{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:o}=this.options;o&&o.updatedAt!==Oo.now()&&this.tick(Oo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Rb(n);const{type:o=pc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=o||pc;p!==pc&&typeof h[0]!="number"&&(this.mixKeyframes=Ec(K6,jb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Tp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const o=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(n,o=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:C,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),o?this.currentTime=n:this.updateTime(n);const j=this.currentTime-g*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?j<0:j>c;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let A=this.currentTime,T=a;if(x){const X=Math.min(this.currentTime,c)/h;let q=Math.floor(X),ne=X%1;!ne&&X>=1&&(ne=1),ne===1&&q--,q=Math.min(q,x+1),!!(q%2)&&(b==="reverse"?(ne=1-ne,w&&(ne-=w/h)):b==="mirror"&&(T=d)),A=qi(0,1,ne)*h}let $;N?(this.delayState.value=_[0],$=this.delayState):$=T.next(A),u&&!N&&($.value=u($.value));let{done:W}=$;!N&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return P&&S!==Vm&&($.value=zd(_,this.options,k,this.speed)),C&&C($.value),P&&this.finish(),$}then(n,o){return this.finished.then(n,o)}get duration(){return gi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+gi(n)}get time(){return gi(this.currentTime)}set time(n){n=Go(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const o=this.generator.next(n).value;return Eb(a=>this.generator.next(a).value,n,o)}get speed(){return this.playbackSpeed}set speed(n){const o=this.playbackSpeed!==n;o&&this.driver&&this.updateTime(Oo.now()),this.playbackSpeed=n,o&&this.driver&&(this.time=gi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=z6,startTime:o}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=o!=null?o:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Oo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(n=this.options).onComplete)==null||o.call(n)}cancel(){var n,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(n=this.options).onCancel)==null||o.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),n.observe(this)}}function Q6(t){var n;for(let o=1;o<t.length;o++)(n=t[o])!=null||(t[o]=t[o-1])}const pr=t=>t*180/Math.PI,Um=t=>{const n=pr(Math.atan2(t[1],t[0]));return Wm(n)},Z6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Um,rotateZ:Um,skewX:t=>pr(Math.atan(t[1])),skewY:t=>pr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Wm=t=>(t=t%360,t<0&&(t+=360),t),u1=Um,d1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),f1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),J6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:d1,scaleY:f1,scale:t=>(d1(t)+f1(t))/2,rotateX:t=>Wm(pr(Math.atan2(t[6],t[5]))),rotateY:t=>Wm(pr(Math.atan2(-t[2],t[0]))),rotateZ:u1,rotate:u1,skewX:t=>pr(Math.atan(t[4])),skewY:t=>pr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Fm(t){return t.includes("scale")?1:0}function Ym(t,n){if(!t||t==="none")return Fm(n);const o=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(o)a=J6,c=o;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=Z6,c=h}if(!c)return Fm(n);const u=a[n],d=c[1].split(",").map(t3);return typeof u=="function"?u(d):d[u]}const e3=(t,n)=>{const{transform:o="none"}=getComputedStyle(t);return Ym(o,n)};function t3(t){return parseFloat(t.trim())}const fl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],hl=new Set(fl),h1=t=>t===dl||t===Mt,n3=new Set(["x","y","z"]),s3=fl.filter(t=>!n3.has(t));function o3(t){const n=[];return s3.forEach(o=>{const a=t.getValue(o);a!==void 0&&(n.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),n}const Wa={width:({x:t},{paddingLeft:n="0",paddingRight:o="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(o)},height:({y:t},{paddingTop:n="0",paddingBottom:o="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(o)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Ym(n,"x"),y:(t,{transform:n})=>Ym(n,"y")};Wa.translateX=Wa.x;Wa.translateY=Wa.y;const _r=new Set;let Xm=!1,qm=!1,Gm=!1;function Lb(){if(qm){const t=Array.from(_r).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),o=new Map;n.forEach(a=>{const c=o3(a);c.length&&(o.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=o.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}qm=!1,Xm=!1,_r.forEach(t=>t.complete(Gm)),_r.clear()}function Bb(){_r.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(qm=!0)})}function i3(){Gm=!0,Bb(),Lb(),Gm=!1}class Dp{constructor(n,o,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=o,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(_r.add(this),Xm||(Xm=!0,as.read(Bb),as.resolveKeyframes(Lb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:o,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&o){const h=a.readValue(o,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}Q6(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),_r.delete(this)}cancel(){this.state==="scheduled"&&(_r.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const a3=t=>t.startsWith("--");function Ob(t,n,o){a3(n)?t.style.setProperty(n,o):t.style[n]=o}const r3={};function zb(t,n){const o=ob(t);return()=>{var a;return(a=r3[n])!=null?a:o()}}const l3=zb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),$b=zb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),cc=([t,n,o,a])=>`cubic-bezier(${t}, ${n}, ${o}, ${a})`,m1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:cc([0,.65,.55,1]),circOut:cc([.55,0,1,.45]),backIn:cc([.31,.01,.66,-.59]),backOut:cc([.33,1.53,.69,.99])};function Ib(t,n){if(t)return typeof t=="function"?$b()?Mb(t,n):"ease-out":gb(t)?cc(t):Array.isArray(t)?t.map(o=>Ib(o,n)||m1.easeOut):m1[t]}function c3(t,n,o,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:o};p&&(_.offset=p);const x=Ib(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Ap(t){return typeof t=="function"&&"applyToOptions"in t}function u3({type:t,...n}){var o,a;return Ap(t)&&$b()?t.applyToOptions(n):((o=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Pb extends Ep{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:o,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,bp(typeof n.type!="string");const g=u3(n);this.animation=c3(o,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=zd(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Ob(o,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,o;(o=(n=this.animation).finish)==null||o.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,a,c;const n=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var o,a;const n=((a=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:a.call(o).duration)||0;return gi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+gi(n)}get time(){return gi(Number(this.animation.currentTime)||0)}set time(n){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Go(n),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:o,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&l3()?(this.animation.timeline=n,o&&(this.animation.rangeStart=o),a&&(this.animation.rangeEnd=a),yi):c(this)}}const Hb={anticipate:db,backInOut:ub,circInOut:hb};function d3(t){return t in Hb}function f3(t){typeof t.ease=="string"&&d3(t.ease)&&(t.ease=Hb[t.ease])}const hm=10;class h3 extends Pb{constructor(n){f3(n),Rb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:o,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!o)return;if(n!==void 0){o.set(n);return}const h=new Ed({...d,autoplay:!1}),p=Math.max(hm,Oo.now()-this.startTime),g=qi(0,hm,p-hm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Ob(u,x,_),o.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const p1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ri.test(t)||t==="0")&&!t.startsWith("url("));function m3(t){const n=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==n)return!0}function p3(t,n,o,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=p1(c,n),h=p1(u,n);return!d||!h?!1:m3(t)||(o==="spring"||Ap(o))&&a}function Km(t){t.duration=0,t.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),_3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function g3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&_3.test(t[n]))return!0;return!1}const y3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),x3=ob(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function b3(t){var x;const{motionValue:n,name:o,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return x3()&&o&&(Vb.has(o)||y3.has(o)&&g3(h))&&(o!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const v3=40;class w3 extends Ep{constructor({autoplay:n=!0,delay:o=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var C,k;this._animation&&(this._animation.stop(),(C=this.stopTimeline)==null||C.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Oo.now();const b={autoplay:n,delay:o,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||Dp;this.keyframeResolver=new w(h,(C,k,j)=>this.onKeyframesResolved(C,k,b,!j),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,o,a,c){var j,N;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Oo.now();let x=!0;p3(n,u,d,h)||(x=!1,(Fa.instantAnimations||!p)&&(_==null||_(zd(n,a,o))),n[0]=n[n.length-1],Km(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>v3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...a,keyframes:n},S=x&&!g&&b3(w),C=(N=(j=w.motionValue)==null?void 0:j.owner)==null?void 0:N.current;let k;if(S)try{k=new h3({...w,element:C})}catch{k=new Ed(w)}else k=new Ed(w);k.finished.then(()=>{this.notifyFinished()}).catch(yi),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,o){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),i3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class S3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,o){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=o}attachTimeline(n){const o=this.animations.map(a=>a.attachTimeline(n));return()=>{o.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return _1(this.animations,"duration")}get iterationDuration(){return _1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(o=>o[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function _1(t,n){let o=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>o&&(o=c)}return o}class k3 extends S3{then(n,o){return this.finished.finally(n).then(()=>{})}}function Ub(t,n,o,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof o=="function"?o(u,d):c===1?u*a:h-u*a}const C3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function j3(t){const n=C3.exec(t);if(!n)return[,];const[,o,a,c]=n;return[`--${o!=null?o:a}`,c]}function Wb(t,n,o=1){const[a,c]=j3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return tb(d)?parseFloat(d):d}return kp(c)?Wb(c,n,o+1):c}const M3={type:"spring",stiffness:500,damping:25,restSpeed:10},T3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),E3={type:"keyframes",duration:.8},D3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},A3=(t,{keyframes:n})=>n.length>2?E3:hl.has(t)?t.startsWith("scale")?T3(n[1]):M3:D3;function Fb(t,n){if(t!=null&&t.inherit&&n){const{inherit:o,...a}=t;return{...n,...a}}return t}function Np(t,n){var a,c;const o=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return o!==t?Fb(o,t):o}const N3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function R3(t){for(const n in t)if(!N3.has(n))return!0;return!1}const Rp=(t,n,o,a={},c,u)=>d=>{const h=Np(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-Go(p);const _={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};R3(h)||Object.assign(_,A3(t,_)),_.duration&&(_.duration=Go(_.duration)),_.repeatDelay&&(_.repeatDelay=Go(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Km(_),_.delay===0&&(x=!0)),(Fa.instantAnimations||Fa.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Km(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=zd(_.keyframes,h);if(b!==void 0){as.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Ed(_):new w3(_)};function g1(t){const n=[{},{}];return t==null||t.values.forEach((o,a)=>{n[0][a]=o.get(),n[1][a]=o.getVelocity()}),n}function Lp(t,n,o,a){if(typeof n=="function"){const[c,u]=g1(a);n=n(o!==void 0?o:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=g1(a);n=n(o!==void 0?o:t.custom,c,u)}return n}function gr(t,n,o){const a=t.getProps();return Lp(a,n,o!==void 0?o:a.custom,t)}const Yb=new Set(["width","height","top","left","right","bottom",...fl]),y1=30,L3=t=>!isNaN(parseFloat(t)),_c={current:void 0};class B3{constructor(n,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Oo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=o.owner}setCurrent(n){this.current=n,this.updatedAt=Oo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=L3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,o){this.events[n]||(this.events[n]=new vp);const a=this.events[n].add(o);return n==="change"?()=>{a(),as.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,o){this.passiveEffect=n,this.stopPassiveEffect=o}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,o=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return _c.current&&_c.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Oo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>y1)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,y1);return ib(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(n){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=n(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,o;(n=this.dependents)==null||n.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ya(t,n){return new B3(t,n)}const Qm=t=>Array.isArray(t);function O3(t,n,o){t.hasValue(n)?t.getValue(n).set(o):t.addValue(n,Ya(o))}function z3(t){return Qm(t)?t[t.length-1]||0:t}function $3(t,n){const o=gr(t,n);let{transitionEnd:a={},transition:c={},...u}=o||{};u={...u,...a};for(const d in u){const h=z3(u[d]);O3(t,d,h)}}const eo=t=>!!(t&&t.getVelocity);function I3(t){return!!(eo(t)&&t.add)}function Zm(t,n){const o=t.getValue("willChange");if(I3(o))return o.add(n);if(!o&&Fa.WillChange){const a=new Fa.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Bp(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const P3="framerAppearId",Xb="data-"+Bp(P3);function qb(t){return t.props[Xb]}function H3({protectedKeys:t,needsAnimating:n},o){const a=t.hasOwnProperty(o)&&n[o]!==!0;return n[o]=!1,a}function Op(t,n,{delay:o=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?Fb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),C=h[w];if(C===void 0||x&&H3(x,w))continue;const k={delay:o,...Np(u||{},w)},j=S.get();if(j!==void 0&&!S.isAnimating()&&!Array.isArray(C)&&C===j&&!k.velocity){as.update(()=>S.set(C));continue}let N=!1;if(window.MotionHandoffAnimation){const $=qb(t);if($){const W=window.MotionHandoffAnimation($,w,as);W!==null&&(k.startTime=W,N=!0)}}Zm(t,w);const A=g!=null?g:t.shouldReduceMotion;S.start(Rp(w,S,C,A&&Yb.has(w)?{type:!1}:k,t,N));const T=S.animation;T&&_.push(T)}if(d){const w=()=>as.update(()=>{d&&$3(t,d)});_.length?Promise.all(_).then(w):w()}return _}function Jm(t,n,o={}){var p;const a=gr(t,n,o.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};o.transitionOverride&&(c=o.transitionOverride);const u=a?()=>Promise.all(Op(t,a,o)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return V3(t,n,g,_,x,b,o)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(o.delay)])}function V3(t,n,o=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(Jm(p,n,{...d,delay:o+(typeof a=="function"?0:a)+Ub(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function U3(t,n,o={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>Jm(t,u,o));a=Promise.all(c)}else if(typeof n=="string")a=Jm(t,n,o);else{const c=typeof n=="function"?gr(t,n,o.custom):n;a=Promise.all(Op(t,c,o))}return a.then(()=>{t.notify("AnimationComplete",n)})}const W3={test:t=>t==="auto",parse:t=>t},Gb=t=>n=>n.test(t),Kb=[dl,Mt,Xi,Ha,y6,g6,W3],x1=t=>Kb.find(Gb(t));function F3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||sb(t):!0}const Y3=new Set(["brightness","contrast","saturate","opacity"]);function X3(t){const[n,o]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=o.match(Cp)||[];if(!a)return t;const c=o.replace(a,"");let u=Y3.has(n)?1:0;return a!==o&&(u*=100),n+"("+u+c+")"}const q3=/\b([a-z-]*)\(.*?\)/gu,ep={...Ri,getAnimatableNone:t=>{const n=t.match(q3);return n?n.map(X3).join(" "):t}},tp={...Ri,getAnimatableNone:t=>{const n=Ri.parse(t);return Ri.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},b1={...dl,transform:Math.round},G3={rotate:Ha,rotateX:Ha,rotateY:Ha,rotateZ:Ha,scale:od,scaleX:od,scaleY:od,scaleZ:od,skew:Ha,skewX:Ha,skewY:Ha,distance:Mt,translateX:Mt,translateY:Mt,translateZ:Mt,x:Mt,y:Mt,z:Mt,perspective:Mt,transformPerspective:Mt,opacity:bc,originX:i1,originY:i1,originZ:Mt},zp={borderWidth:Mt,borderTopWidth:Mt,borderRightWidth:Mt,borderBottomWidth:Mt,borderLeftWidth:Mt,borderRadius:Mt,borderTopLeftRadius:Mt,borderTopRightRadius:Mt,borderBottomRightRadius:Mt,borderBottomLeftRadius:Mt,width:Mt,maxWidth:Mt,height:Mt,maxHeight:Mt,top:Mt,right:Mt,bottom:Mt,left:Mt,inset:Mt,insetBlock:Mt,insetBlockStart:Mt,insetBlockEnd:Mt,insetInline:Mt,insetInlineStart:Mt,insetInlineEnd:Mt,padding:Mt,paddingTop:Mt,paddingRight:Mt,paddingBottom:Mt,paddingLeft:Mt,paddingBlock:Mt,paddingBlockStart:Mt,paddingBlockEnd:Mt,paddingInline:Mt,paddingInlineStart:Mt,paddingInlineEnd:Mt,margin:Mt,marginTop:Mt,marginRight:Mt,marginBottom:Mt,marginLeft:Mt,marginBlock:Mt,marginBlockStart:Mt,marginBlockEnd:Mt,marginInline:Mt,marginInlineStart:Mt,marginInlineEnd:Mt,fontSize:Mt,backgroundPositionX:Mt,backgroundPositionY:Mt,...G3,zIndex:b1,fillOpacity:bc,strokeOpacity:bc,numOctaves:b1},K3={...zp,color:Gs,backgroundColor:Gs,outlineColor:Gs,fill:Gs,stroke:Gs,borderColor:Gs,borderTopColor:Gs,borderRightColor:Gs,borderBottomColor:Gs,borderLeftColor:Gs,filter:ep,WebkitFilter:ep,mask:tp,WebkitMask:tp},Qb=t=>K3[t],Q3=new Set([ep,tp]);function Zb(t,n){let o=Qb(t);return Q3.has(o)||(o=Ri),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const Z3=new Set(["auto","none","0"]);function J3(t,n,o){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!Z3.has(u)&&ul(u).values.length&&(c=t[a]),a++}if(c&&o)for(const u of n)t[u]=Zb(o,c)}class eC extends Dp{constructor(n,o,a,c,u){super(n,o,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),kp(x))){const b=Wb(x,o.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Yb.has(a)||n.length!==2)return;const[c,u]=n,d=x1(c),h=x1(u),p=o1(c),g=o1(u);if(p!==g&&Wa[a]){this.needsMeasurement=!0;return}if(d!==h)if(h1(d)&&h1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Wa[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:o}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||F3(n[c]))&&a.push(c);a.length&&J3(n,a,o)}measureInitialState(){const{element:n,unresolvedKeyframes:o,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wa[a](n.measureViewportBox(),window.getComputedStyle(n.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:o,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(o);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Wa[o](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function $p(t,n,o){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=o==null?void 0:o[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const Jb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function hd(t){return nb(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ip}=yb(queueMicrotask,!1),Ai={x:!1,y:!1};function e5(){return Ai.x||Ai.y}function tC(t){return t==="x"||t==="y"?Ai[t]?null:(Ai[t]=!0,()=>{Ai[t]=!1}):Ai.x||Ai.y?null:(Ai.x=Ai.y=!0,()=>{Ai.x=Ai.y=!1})}function t5(t,n){const o=$p(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[o,c,()=>a.abort()]}function nC(t){return!(t.pointerType==="touch"||e5())}function sC(t,n,o={}){const[a,c,u]=t5(t,o);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},C=k=>{if(!nC(k))return;p=!1;const j=n(d,k);typeof j=="function"&&(g=j,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",C,c),d.addEventListener("pointerdown",w,c)}),u}const n5=(t,n)=>n?t===n?!0:n5(t,n.parentElement):!1,Pp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,oC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function iC(t){return oC.has(t.tagName)||t.isContentEditable===!0}const aC=new Set(["INPUT","SELECT","TEXTAREA"]);function rC(t){return aC.has(t.tagName)||t.isContentEditable===!0}const md=new WeakSet;function v1(t){return n=>{n.key==="Enter"&&t(n)}}function mm(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const lC=(t,n)=>{const o=t.currentTarget;if(!o)return;const a=v1(()=>{if(md.has(o))return;mm(o,"down");const c=v1(()=>{mm(o,"up")}),u=()=>mm(o,"cancel");o.addEventListener("keyup",c,n),o.addEventListener("blur",u,n)});o.addEventListener("keydown",a,n),o.addEventListener("blur",()=>o.removeEventListener("keydown",a),n)};function w1(t){return Pp(t)&&!e5()}const S1=new WeakSet;function cC(t,n,o={}){const[a,c,u]=t5(t,o),d=h=>{const p=h.currentTarget;if(!w1(h)||S1.has(h))return;md.add(p),o.stopPropagation&&S1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),md.has(p)&&md.delete(p),w1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||o.useGlobalTarget||n5(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(o.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),hd(h)&&(h.addEventListener("focus",g=>lC(g,c)),!iC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function $d(t){return nb(t)&&"ownerSVGElement"in t}const pd=new WeakMap;let Va;const s5=(t,n,o)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:$d(a)&&"getBBox"in a?a.getBBox()[n]:a[o],uC=s5("inline","width","offsetWidth"),dC=s5("block","height","offsetHeight");function fC({target:t,borderBoxSize:n}){var o;(o=pd.get(t))==null||o.forEach(a=>{a(t,{get width(){return uC(t,n)},get height(){return dC(t,n)}})})}function hC(t){t.forEach(fC)}function mC(){typeof ResizeObserver>"u"||(Va=new ResizeObserver(hC))}function pC(t,n){Va||mC();const o=$p(t);return o.forEach(a=>{let c=pd.get(a);c||(c=new Set,pd.set(a,c)),c.add(n),Va==null||Va.observe(a)}),()=>{o.forEach(a=>{const c=pd.get(a);c==null||c.delete(n),c!=null&&c.size||Va==null||Va.unobserve(a)})}}const _d=new Set;let ol;function _C(){ol=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};_d.forEach(n=>n(t))},window.addEventListener("resize",ol)}function gC(t){return _d.add(t),ol||_C(),()=>{_d.delete(t),!_d.size&&typeof ol=="function"&&(window.removeEventListener("resize",ol),ol=void 0)}}function k1(t,n){return typeof t=="function"?gC(t):pC(t,n)}function o5(t){return $d(t)&&t.tagName==="svg"}function yC(...t){const n=!Array.isArray(t[0]),o=n?0:-1,a=t[0+o],c=t[1+o],u=t[2+o],d=t[3+o],h=Db(c,u,d);return n?h(a):h}const xC=[...Kb,Gs,Ri],bC=t=>xC.find(Gb(t)),C1=()=>({translate:0,scale:1,origin:0,originPoint:0}),il=()=>({x:C1(),y:C1()}),j1=()=>({min:0,max:0}),qs=()=>({x:j1(),y:j1()}),wc=new WeakMap;function Id(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Sc(t){return typeof t=="string"||Array.isArray(t)}const Hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Hp];function Pd(t){return Id(t.animate)||Vp.some(n=>Sc(t[n]))}function i5(t){return!!(Pd(t)||t.variants)}function vC(t,n,o){for(const a in n){const c=n[a],u=o[a];if(eo(c))t.addValue(a,c);else if(eo(u))t.addValue(a,Ya(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Ya(d!==void 0?d:c,{owner:t}))}}for(const a in o)n[a]===void 0&&t.removeValue(a);return n}const np={current:null},a5={current:!1},wC=typeof window<"u";function SC(){if(a5.current=!0,!!wC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>np.current=t.matches;t.addEventListener("change",n),n()}else np.current=!1}const M1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Dd={};function r5(t){Dd=t}function kC(){return Dd}class l5{scrapeMotionValuesFromProps(n,o,a){return{}}constructor({parent:n,props:o,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Oo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,as.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=o.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=o,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Pd(o),this.isVariantNode=i5(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&eo(S)&&S.set(g[w])}}mount(n){var o,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(o=this.values.get(u))==null||o.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,wc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(a5.current||SC(),this.shouldReduceMotion=np.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),ma(this.notifyUpdate),ma(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const a=this.features[o];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var o;this.children.add(n),(o=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,o){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),o.accelerate&&Vb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=o.accelerate,x=new Pb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:Go(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=hl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&as.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,o)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),o.owner&&o.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dd){const o=Dd[n];if(!o)continue;const{isEnabled:a,Feature:c}=o;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):qs()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,o){this.latestValues[n]=o}update(n,o){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<M1.length;a++){const c=M1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=vC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(n),()=>o.variantChildren.delete(n)}addValue(n,o){const a=this.values.get(n);o!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,o),this.values.set(n,o),this.latestValues[n]=o.get())}removeValue(n){this.values.delete(n);const o=this.valueSubscriptions.get(n);o&&(o(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,o){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&o!==void 0&&(a=Ya(o===null?void 0:o,{owner:this}),this.addValue(n,a)),a}readValue(n,o){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(tb(a)||sb(a))?a=parseFloat(a):!bC(a)&&Ri.test(o)&&(a=Zb(n,o)),this.setBaseTarget(n,eo(a)?a.get():a)),eo(a)?a.get():a}setBaseTarget(n,o){this.baseTarget[n]=o}getBaseTarget(n){var u;const{initial:o}=this.props;let a;if(typeof o=="string"||typeof o=="object"){const d=Lp(this.props,o,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(o&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!eo(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,o){return this.events[n]||(this.events[n]=new vp),this.events[n].add(o)}notify(n,...o){this.events[n]&&this.events[n].notify(...o)}scheduleRenderMicrotask(){Ip.render(this.render)}}class c5 extends l5{constructor(){super(...arguments),this.KeyframeResolver=eC}sortInstanceNodePosition(n,o){return n.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(n,o){const a=n.style;return a?a[o]:void 0}removeValueFromRenderState(n,{vars:o,style:a}){delete o[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;eo(n)&&(this.childSubscription=n.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Xa{constructor(n){this.isMounted=!1,this.node=n}update(){}}function u5({top:t,left:n,right:o,bottom:a}){return{x:{min:n,max:o},y:{min:t,max:a}}}function CC({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function jC(t,n){if(!n)return t;const o=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function pm(t){return t===void 0||t===1}function sp({scale:t,scaleX:n,scaleY:o}){return!pm(t)||!pm(n)||!pm(o)}function fr(t){return sp(t)||d5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function d5(t){return T1(t.x)||T1(t.y)}function T1(t){return t&&t!=="0%"}function Ad(t,n,o){const a=t-o,c=n*a;return o+c}function E1(t,n,o,a,c){return c!==void 0&&(t=Ad(t,c,a)),Ad(t,o,a)+n}function op(t,n=0,o=1,a,c){t.min=E1(t.min,n,o,a,c),t.max=E1(t.max,n,o,a,c)}function f5(t,{x:n,y:o}){op(t.x,n.translate,n.scale,n.originPoint),op(t.y,o.translate,o.scale,o.originPoint)}const D1=.999999999999,A1=1.0000000000001;function MC(t,n,o,a=!1){var h;const c=o.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=o[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Yi(t.x,-u.scroll.offset.x),Yi(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,f5(t,d)),a&&fr(u.latestValues)&&gd(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<A1&&n.x>D1&&(n.x=1),n.y<A1&&n.y>D1&&(n.y=1)}function Yi(t,n){t.min+=n,t.max+=n}function N1(t,n,o,a,c=.5){const u=fs(t.min,t.max,c);op(t,n,o,u,a)}function R1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function gd(t,n,o){const a=o!=null?o:t;N1(t.x,R1(n.x,a.x),n.scaleX,n.scale,n.originX),N1(t.y,R1(n.y,a.y),n.scaleY,n.scale,n.originY)}function h5(t,n){return u5(jC(t.getBoundingClientRect(),n))}function TC(t,n,o){const a=h5(t,o),{scroll:c}=n;return c&&(Yi(a.x,c.offset.x),Yi(a.y,c.offset.y)),a}const EC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},DC=fl.length;function AC(t,n,o){let a="",c=!0;for(let u=0;u<DC;u++){const d=fl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||o){const g=Jb(h,zp[d]);if(!p){c=!1;const _=EC[d]||d;a+=`${_}(${g}) `}o&&(n[d]=g)}}return a=a.trim(),o?a=o(n,c?"":a):c&&(a="none"),a}function Up(t,n,o){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(hl.has(p)){d=!0;continue}else if(bb(p)){c[p]=g;continue}else{const _=Jb(g,zp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||o?a.transform=AC(n,t.transform,o):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function m5(t,{style:n,vars:o},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in o)u.setProperty(d,o[d])}function L1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const ac={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(Mt.test(t))t=parseFloat(t);else return t;const o=L1(t,n.target.x),a=L1(t,n.target.y);return`${o}% ${a}%`}},NC={correct:(t,{treeScale:n,projectionDelta:o})=>{const a=t,c=Ri.parse(t);if(c.length>5)return a;const u=Ri.createTransformer(t),d=typeof c[0]!="number"?1:0,h=o.x.scale*n.x,p=o.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=fs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},ip={borderRadius:{...ac,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ac,borderTopRightRadius:ac,borderBottomLeftRadius:ac,borderBottomRightRadius:ac,boxShadow:NC};function p5(t,{layout:n,layoutId:o}){return hl.has(t)||t.startsWith("origin")||(n||o!==void 0)&&(!!ip[t]||t==="opacity")}function Wp(t,n,o){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(eo(a[h])||c&&eo(c[h])||p5(h,t)||((d=o==null?void 0:o.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function RC(t){return window.getComputedStyle(t)}class _5 extends c5{constructor(){super(...arguments),this.type="html",this.renderInstance=m5}readValueFromInstance(n,o){var a;if(hl.has(o))return(a=this.projection)!=null&&a.isProjecting?Fm(o):e3(n,o);{const c=RC(n),u=(bb(o)?c.getPropertyValue(o):c[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:o}){return h5(n,o)}build(n,o,a){Up(n,o,a.transformTemplate)}scrapeMotionValuesFromProps(n,o,a){return Wp(n,o,a)}}function LC(t,n){return t in n}class BC extends l5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,o){if(LC(o,n)){const a=n[o];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,o){delete o.output[n]}measureInstanceViewportBox(){return qs()}build(n,o){Object.assign(n.output,o)}renderInstance(n,{output:o}){Object.assign(n,o)}sortInstanceNodePosition(){return 0}}const OC={offset:"stroke-dashoffset",array:"stroke-dasharray"},zC={offset:"strokeDashoffset",array:"strokeDasharray"};function $C(t,n,o=1,a=0,c=!0){t.pathLength=1;const u=c?OC:zC;t[u.offset]=`${-a}`,t[u.array]=`${n} ${o}`}const IC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function g5(t,{attrX:n,attrY:o,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Up(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const C of IC)x[C]!==void 0&&(b[C]=x[C],delete x[C]);n!==void 0&&(x.x=n),o!==void 0&&(x.y=o),a!==void 0&&(x.scale=a),c!==void 0&&$C(x,c,u,d,!1)}const y5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),x5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function PC(t,n,o,a){m5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(y5.has(c)?c:Bp(c),n.attrs[c])}function b5(t,n,o){const a=Wp(t,n,o);for(const c in t)if(eo(t[c])||eo(n[c])){const u=fl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class v5 extends c5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=qs}getBaseTargetFromProps(n,o){return n[o]}readValueFromInstance(n,o){if(hl.has(o)){const a=Qb(o);return a&&a.default||0}return o=y5.has(o)?o:Bp(o),n.getAttribute(o)}scrapeMotionValuesFromProps(n,o,a){return b5(n,o,a)}build(n,o,a){g5(n,o,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,o,a,c){PC(n,o,a,c)}mount(n){this.isSVGTag=x5(n.tagName),super.mount(n)}}const HC=Vp.length;function w5(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?w5(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const n={};for(let o=0;o<HC;o++){const a=Vp[o],c=t.props[a];(Sc(c)||c===!1)&&(n[a]=c)}return n}function S5(t,n){if(!Array.isArray(n))return!1;const o=n.length;if(o!==t.length)return!1;for(let a=0;a<o;a++)if(n[a]!==t[a])return!1;return!0}const VC=[...Hp].reverse(),UC=Hp.length;function WC(t){return n=>Promise.all(n.map(({animation:o,options:a})=>U3(t,o,a)))}function FC(t){let n=WC(t),o=B1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=gr(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:C,...k}=b;_={..._,...k,...C}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=w5(t.parent)||{},b=[],w=new Set;let S={},C=1/0;for(let j=0;j<UC;j++){const N=VC[j],A=o[N],T=_[N]!==void 0?_[N]:x[N],$=Sc(T),W=N===g?A.isActive:null;W===!1&&(C=j);let P=T===x[N]&&T!==_[N]&&$;if(P&&(a||c)&&t.manuallyAnimateOnMount&&(P=!1),A.protectedKeys={...S},!A.isActive&&W===null||!T&&!A.prevProp||Id(T)||typeof T=="boolean")continue;if(N==="exit"&&A.isActive&&W!==!0){A.prevResolvedValues&&(S={...S,...A.prevResolvedValues});continue}const X=YC(A.prevProp,T);let q=X||N===g&&A.isActive&&!P&&$||j>C&&$,ne=!1;const le=Array.isArray(T)?T:[T];let G=le.reduce(u(N),{});W===!1&&(G={});const{prevResolvedValues:te={}}=A,de={...te,...G},be=K=>{q=!0,w.has(K)&&(ne=!0,w.delete(K)),A.needsAnimating[K]=!0;const we=t.getValue(K);we&&(we.liveStyle=!1)};for(const K in de){const we=G[K],Ee=te[K];if(S.hasOwnProperty(K))continue;let L=!1;Qm(we)&&Qm(Ee)?L=!S5(we,Ee):L=we!==Ee,L?we!=null?be(K):w.add(K):we!==void 0&&w.has(K)?be(K):A.protectedKeys[K]=!0}A.prevProp=T,A.prevResolvedValues=G,A.isActive&&(S={...S,...G}),(a||c)&&t.blockInitialAnimation&&(q=!1);const z=P&&X;q&&(!z||ne)&&b.push(...le.map(K=>{const we={type:N};if(typeof K=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ee}=t,L=gr(Ee,K);if(Ee.enteringChildren&&L){const{delayChildren:H}=L.transition||{};we.delay=Ub(Ee.enteringChildren,t,H)}}return{animation:K,options:we}}))}if(w.size){const j={};if(typeof _.initial!="boolean"){const N=gr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);N&&N.transition&&(j.transition=N.transition)}w.forEach(N=>{const A=t.getBaseTarget(N),T=t.getValue(N);T&&(T.liveStyle=!0),j[N]=A!=null?A:null}),b.push({animation:j})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(o[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),o[g].isActive=_;const x=h(g);for(const w in o)o[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>o,reset:()=>{o=B1(),c=!0}}}function YC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!S5(n,t):!1}function dr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function B1(){return{animate:dr(!0),whileInView:dr(),whileHover:dr(),whileTap:dr(),whileDrag:dr(),whileFocus:dr(),exit:dr()}}function ap(t,n){t.min=n.min,t.max=n.max}function Di(t,n){ap(t.x,n.x),ap(t.y,n.y)}function O1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const k5=1e-4,XC=1-k5,qC=1+k5,C5=.01,GC=0-C5,KC=0+C5;function zo(t){return t.max-t.min}function QC(t,n,o){return Math.abs(t-n)<=o}function z1(t,n,o,a=.5){t.origin=a,t.originPoint=fs(n.min,n.max,t.origin),t.scale=zo(o)/zo(n),t.translate=fs(o.min,o.max,t.origin)-t.originPoint,(t.scale>=XC&&t.scale<=qC||isNaN(t.scale))&&(t.scale=1),(t.translate>=GC&&t.translate<=KC||isNaN(t.translate))&&(t.translate=0)}function gc(t,n,o,a){z1(t.x,n.x,o.x,a?a.originX:void 0),z1(t.y,n.y,o.y,a?a.originY:void 0)}function $1(t,n,o,a=0){const c=a?fs(o.min,o.max,a):o.min;t.min=c+n.min,t.max=t.min+zo(n)}function ZC(t,n,o,a){$1(t.x,n.x,o.x,a==null?void 0:a.x),$1(t.y,n.y,o.y,a==null?void 0:a.y)}function I1(t,n,o,a=0){const c=a?fs(o.min,o.max,a):o.min;t.min=n.min-c,t.max=t.min+zo(n)}function Nd(t,n,o,a){I1(t.x,n.x,o.x,a==null?void 0:a.x),I1(t.y,n.y,o.y,a==null?void 0:a.y)}function P1(t,n,o,a,c){return t-=n,t=Ad(t,1/o,a),c!==void 0&&(t=Ad(t,1/c,a)),t}function JC(t,n=0,o=1,a=.5,c,u=t,d=t){if(Xi.test(n)&&(n=parseFloat(n),n=fs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=fs(u.min,u.max,a);t===u&&(h-=n),t.min=P1(t.min,n,o,h,c),t.max=P1(t.max,n,o,h,c)}function H1(t,n,[o,a,c],u,d){JC(t,n[o],n[a],n[c],n.scale,u,d)}const ej=["x","scaleX","originX"],tj=["y","scaleY","originY"];function V1(t,n,o,a){H1(t.x,n,ej,o?o.x:void 0,a?a.x:void 0),H1(t.y,n,tj,o?o.y:void 0,a?a.y:void 0)}function U1(t){return t.translate===0&&t.scale===1}function j5(t){return U1(t.x)&&U1(t.y)}function W1(t,n){return t.min===n.min&&t.max===n.max}function nj(t,n){return W1(t.x,n.x)&&W1(t.y,n.y)}function F1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function M5(t,n){return F1(t.x,n.x)&&F1(t.y,n.y)}function Y1(t){return zo(t.x)/zo(t.y)}function X1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Fi(t){return[t("x"),t("y")]}function sj(t,n,o){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(o==null?void 0:o.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),o){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=o;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const T5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],oj=T5.length,q1=t=>typeof t=="string"?parseFloat(t):t,G1=t=>typeof t=="number"||Mt.test(t);function ij(t,n,o,a,c,u){var d,h,p,g;c?(t.opacity=fs(0,(d=o.opacity)!=null?d:1,aj(a)),t.opacityExit=fs((h=n.opacity)!=null?h:1,0,rj(a))):u&&(t.opacity=fs((p=n.opacity)!=null?p:1,(g=o.opacity)!=null?g:1,a));for(let _=0;_<oj;_++){const x=T5[_];let b=K1(n,x),w=K1(o,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||G1(b)===G1(w)?(t[x]=Math.max(fs(q1(b),q1(w),a),0),(Xi.test(w)||Xi.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||o.rotate)&&(t.rotate=fs(n.rotate||0,o.rotate||0,a))}function K1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const aj=E5(0,.5,fb),rj=E5(.5,.95,yi);function E5(t,n,o){return a=>a<t?0:a>n?1:o(cl(t,n,a))}function D5(t,n,o){const a=eo(t)?t:Ya(t);return a.start(Rp("",a,n,o)),a.animation}function kc(t,n,o,a={passive:!0}){return t.addEventListener(n,o,a),()=>t.removeEventListener(n,o)}const lj=(t,n)=>t.depth-n.depth;class cj{constructor(){this.children=[],this.isDirty=!1}add(n){xp(this.children,n),this.isDirty=!0}remove(n){ll(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(lj),this.isDirty=!1,this.children.forEach(n)}}function uj(t,n){const o=Oo.now(),a=({timestamp:c})=>{const u=c-o;u>=n&&(ma(a),t(u-n))};return as.setup(a,!0),()=>ma(a)}function yd(t){return eo(t)?t.get():t}class dj{constructor(){this.members=[]}add(n){xp(this.members,n);for(let o=this.members.length-1;o>=0;o--){const a=this.members[o];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(ll(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(ll(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(n){var o;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((o=c.instance)==null?void 0:o.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,o){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,o&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var o,a,c,u,d;(a=(o=n.options).onExitComplete)==null||a.call(o),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const xd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_m=["","X","Y","Z"],fj=1e3;let hj=0;function gm(t,n,o,a){const{latestValues:c}=n;c[t]&&(o[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function A5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const o=qb(n);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",as,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&A5(a)}function N5({attachResizeListener:t,defaultParent:n,measureScroll:o,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=hj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_j),this.nodes.forEach(wj),this.nodes.forEach(Sj),this.nodes.forEach(gj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new cj)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new vp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=$d(d)&&!o5(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;as.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=uj(b,250),xd.hasAnimatedSinceResize&&(xd.hasAnimatedSinceResize=!1,this.nodes.forEach(J1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||Tj,{onLayoutAnimationStart:C,onLayoutAnimationComplete:k}=g.getProps(),j=!this.targetLayout||!M5(this.targetLayout,w),N=!x&&b;if(this.options.layoutRoot||this.resumeFrom||N||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...Np(S,"layout"),onPlay:C,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(_,N)}else x||J1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ma(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&A5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(xj),this.nodes.forEach(Q1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Z1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bj),this.nodes.forEach(vj),this.nodes.forEach(mj),this.nodes.forEach(pj)):this.nodes.forEach(Z1),this.clearAllSnapshots();const h=Oo.now();xo.delta=qi(0,1e3/60,h-xo.timestamp),xo.timestamp=h,xo.isProcessing=!0,lm.update.process(xo),lm.preRender.process(xo),lm.render.process(xo),xo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yj),this.sharedNodes.forEach(Cj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,as.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){as.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!zo(this.snapshot.measuredBox.x)&&!zo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=qs()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!j5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||fr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),Ej(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return qs();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(Dj))){const{scroll:_}=this.root;_&&(Yi(h.x,_.offset.x),Yi(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=qs();if(Di(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Di(h,d),Yi(h.x,x.offset.x),Yi(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||qs();Di(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Yi(g.x,-w.scroll.offset.x),Yi(g.y,-w.scroll.offset.y)),fr(w.latestValues)&&gd(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return fr(this.latestValues)&&gd(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=qs();Di(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!fr(_.latestValues))continue;let x;_.instance&&(sp(_.latestValues)&&_.updateSnapshot(),x=qs(),Di(x,_.measurePageBox())),V1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return fr(this.latestValues)&&V1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=xo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=qs(),this.targetWithTransforms=qs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ZC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Di(this.target,this.layout.layoutBox),f5(this.target,this.targetDelta)):Di(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||d5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qs(),this.relativeTargetOrigin=qs(),Nd(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Di(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===xo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Di(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;MC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=qs());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(O1(this.prevProjectionDelta.x,this.projectionDelta.x),O1(this.prevProjectionDelta.y,this.projectionDelta.y)),gc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!X1(this.projectionDelta.x,this.prevProjectionDelta.x)||!X1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=il(),this.projectionDelta=il(),this.projectionDeltaWithTransform=il()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=il();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=qs(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,C=w!==S,k=this.getStack(),j=!k||k.members.length<=1,N=!!(C&&!j&&this.options.crossfade===!0&&!this.path.some(Mj));this.animationProgress=0;let A;this.mixTargetDelta=T=>{const $=T/1e3;ex(x.x,d.x,$),ex(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nd(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),jj(this.relativeTarget,this.relativeTargetOrigin,b,$),A&&nj(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=qs()),Di(A,this.relativeTarget)),C&&(this.animationValues=_,ij(_,g,this.latestValues,$,N,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(ma(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=as.update(()=>{xd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ya(0)),this.motionValue.jump(0,!1),this.currentAnimation=D5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&R5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||qs();const x=zo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=zo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Di(h,p),gd(h,_),gc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new dj),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&gm("z",d,g,this.animationValues);for(let _=0;_<_m.length;_++)gm(`rotate${_m[_]}`,d,g,this.animationValues),gm(`skew${_m[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,C;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=yd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=yd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!fr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=sj(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(C=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?C:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in ip){if(_[k]===void 0)continue;const{correct:j,applyTo:N,isCSSVariable:A}=ip[k],T=x==="none"?_[k]:j(_[k],g);if(N){const $=N.length;for(let W=0;W<$;W++)d[N[W]]=T}else A?this.options.visualElement.renderState.vars[k]=T:d[k]=T}this.options.layoutId&&(d.pointerEvents=g===this?yd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Q1),this.root.sharedNodes.clear()}}}function mj(t){t.updateLayout()}function pj(t){var o;const n=((o=t.resumeFrom)==null?void 0:o.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Fi(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=zo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";ap(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else R5(u,n.layoutBox,a)&&Fi(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=zo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=il();gc(h,a,n.layoutBox);const p=il();d?gc(p,t.applyTransform(c,!0),n.measuredBox):gc(p,a,n.layoutBox);const g=!j5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,C=qs();Nd(C,n.layoutBox,b.layoutBox,S);const k=qs();Nd(k,a,w.layoutBox,S),M5(C,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=C,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function _j(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yj(t){t.clearSnapshot()}function Q1(t){t.clearMeasurements()}function xj(t){t.isLayoutDirty=!0,t.updateLayout()}function Z1(t){t.isLayoutDirty=!1}function bj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function vj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function J1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function wj(t){t.resolveTargetDelta()}function Sj(t){t.calcProjection()}function kj(t){t.resetSkewAndRotation()}function Cj(t){t.removeLeadSnapshot()}function ex(t,n,o){t.translate=fs(n.translate,0,o),t.scale=fs(n.scale,1,o),t.origin=n.origin,t.originPoint=n.originPoint}function tx(t,n,o,a){t.min=fs(n.min,o.min,a),t.max=fs(n.max,o.max,a)}function jj(t,n,o,a){tx(t.x,n.x,o.x,a),tx(t.y,n.y,o.y,a)}function Mj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Tj={duration:.45,ease:[.4,0,.1,1]},nx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sx=nx("applewebkit/")&&!nx("chrome/")?Math.round:yi;function ox(t){t.min=sx(t.min),t.max=sx(t.max)}function Ej(t){ox(t.x),ox(t.y)}function R5(t,n,o){return t==="position"||t==="preserve-aspect"&&!QC(Y1(n),Y1(o),.2)}function Dj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const Aj=N5({attachResizeListener:(t,n)=>kc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ym={current:void 0},L5=N5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ym.current){const t=new Aj({});t.mount(window),t.setOptions({layoutScroll:!0}),ym.current=t}return ym.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Hd=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function ix(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function Nj(...t){return n=>{let o=!1;const a=t.map(c=>{const u=ix(c,n);return!o&&typeof u=="function"&&(o=!0),u});if(o)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():ix(t[c],null)}}}}function Rj(...t){return y.useCallback(Nj(...t),t)}class Lj extends y.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(hd(o)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=o.offsetParent,c=hd(a)&&a.offsetWidth||0,u=hd(a)&&a.offsetHeight||0,d=getComputedStyle(o),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=o.offsetTop,h.left=o.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Bj({children:t,isPresent:n,anchorX:o,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Hd),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=Rj(h,_);return y.useInsertionEffect(()=>{const{width:S,height:C,top:k,left:j,right:N,bottom:A}=p.current;if(n||u===!1||!h.current||!S||!C)return;const T=o==="left"?`left: ${j}`:`right: ${N}`,$=a==="bottom"?`bottom: ${A}`:`top: ${k}`;h.current.dataset.motionPopId=d;const W=document.createElement("style");g&&(W.nonce=g);const P=c!=null?c:document.head;return P.appendChild(W),W.sheet&&W.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${C}px !important;
            ${T}px !important;
            ${$}px !important;
          }
        `),()=>{var X;(X=h.current)==null||X.removeAttribute("data-motion-pop-id"),P.contains(W)&&P.removeChild(W)}},[n]),r.jsx(Lj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const Oj=({children:t,initial:n,isPresent:o,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Tc(zj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:o,custom:c,onExitComplete:S=>{_.set(S,!0);for(const C of _.values())if(!C)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[o,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,C)=>_.set(C,!1))},[o]),y.useEffect(()=>{!o&&!_.size&&a&&a()},[o]),t=r.jsx(Bj,{pop:d==="popLayout",isPresent:o,anchorX:h,anchorY:p,root:g,children:t}),r.jsx(Od.Provider,{value:w,children:t})};function zj(){return new Map}function B5(t=!0){const n=y.useContext(Od);if(n===null)return[!0,null];const{isPresent:o,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!o&&a?[!1,d]:[!0]}const id=t=>t.key||"";function ax(t){const n=[];return y.Children.forEach(t,o=>{y.isValidElement(o)&&n.push(o)}),n}const Vd=({children:t,custom:n,initial:o=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=B5(d),b=y.useMemo(()=>ax(t),[t]),w=d&&!_?[]:b.map(id),S=y.useRef(!0),C=y.useRef(b),k=Tc(()=>new Map),j=y.useRef(new Set),[N,A]=y.useState(b),[T,$]=y.useState(b);yp(()=>{S.current=!1,C.current=b;for(let X=0;X<T.length;X++){const q=id(T[X]);w.includes(q)?(k.delete(q),j.current.delete(q)):k.get(q)!==!0&&k.set(q,!1)}},[T,w.length,w.join("-")]);const W=[];if(b!==N){let X=[...b];for(let q=0;q<T.length;q++){const ne=T[q],le=id(ne);w.includes(le)||(X.splice(q,0,ne),W.push(ne))}return u==="wait"&&W.length&&(X=W),$(ax(X)),A(b),null}const{forceRender:P}=y.useContext(gp);return r.jsx(r.Fragment,{children:T.map(X=>{const q=id(X),ne=d&&!_?!1:b===T||w.includes(q),le=()=>{if(j.current.has(q))return;if(k.has(q))j.current.add(q),k.set(q,!0);else return;let G=!0;k.forEach(te=>{te||(G=!1)}),G&&(P==null||P(),$(C.current),d&&(x==null||x()),a&&a())};return r.jsx(Oj,{isPresent:ne,initial:!S.current||o?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:ne?void 0:le,anchorX:h,anchorY:p,children:X},q)})})},O5=y.createContext({strict:!1}),rx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let lx=!1;function $j(){if(lx)return;const t={};for(const n in rx)t[n]={isEnabled:o=>rx[n].some(a=>!!o[a])};r5(t),lx=!0}function z5(){return $j(),kC()}function Ij(t){const n=z5();for(const o in t)n[o]={...n[o],...t[o]};r5(n)}const Pj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Rd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Pj.has(t)}let $5=t=>!Rd(t);function Hj(t){typeof t=="function"&&($5=n=>n.startsWith("on")?!Rd(n):t(n))}try{Hj(require("@emotion/is-prop-valid").default)}catch{}function Vj(t,n,o){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||eo(t[c])||($5(c)||o===!0&&Rd(c)||!n&&!Rd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Ud=y.createContext({});function Uj(t,n){if(Pd(t)){const{initial:o,animate:a}=t;return{initial:o===!1||Sc(o)?o:void 0,animate:Sc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Wj(t){const{initial:n,animate:o}=Uj(t,y.useContext(Ud));return y.useMemo(()=>({initial:n,animate:o}),[cx(n),cx(o)])}function cx(t){return Array.isArray(t)?t.join(" "):t}const Fp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function I5(t,n,o){for(const a in n)!eo(n[a])&&!p5(a,o)&&(t[a]=n[a])}function Fj({transformTemplate:t},n){return y.useMemo(()=>{const o=Fp();return Up(o,n,t),Object.assign({},o.vars,o.style)},[n])}function Yj(t,n){const o=t.style||{},a={};return I5(a,o,t),Object.assign(a,Fj(t,n)),a}function Xj(t,n){const o={},a=Yj(t,n);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=a,o}const P5=()=>({...Fp(),attrs:{}});function qj(t,n,o,a){const c=y.useMemo(()=>{const u=P5();return g5(u,n,x5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};I5(u,t.style,t),c.style={...u,...c.style}}return c}const Gj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yp(t){return typeof t!="string"||t.includes("-")?!1:!!(Gj.indexOf(t)>-1||/[A-Z]/u.test(t))}function Kj(t,n,o,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Yp(t))?qj:Xj)(n,a,c,t),g=Vj(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:o}:{},{children:x}=n,b=y.useMemo(()=>eo(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function Qj({scrapeMotionValuesFromProps:t,createRenderState:n},o,a,c){return{latestValues:Zj(o,a,c,t),renderState:n()}}function Zj(t,n,o,a){const c={},u=a(t,{});for(const b in u)c[b]=yd(u[b]);let{initial:d,animate:h}=t;const p=Pd(t),g=i5(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=o?o.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!Id(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Lp(t,b[w]);if(S){const{transitionEnd:C,transition:k,...j}=S;for(const N in j){let A=j[N];if(Array.isArray(A)){const T=_?A.length-1:0;A=A[T]}A!==null&&(c[N]=A)}for(const N in C)c[N]=C[N]}}}return c}const H5=t=>(n,o)=>{const a=y.useContext(Ud),c=y.useContext(Od),u=()=>Qj(t,n,a,c);return o?u():Tc(u)},Jj=H5({scrapeMotionValuesFromProps:Wp,createRenderState:Fp}),e8=H5({scrapeMotionValuesFromProps:b5,createRenderState:P5}),t8=Symbol.for("motionComponentSymbol");function n8(t,n,o){const a=y.useRef(o);y.useInsertionEffect(()=>{a.current=o});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const V5=y.createContext({});function el(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function s8(t,n,o,a,c,u){var A,T;const{visualElement:d}=y.useContext(Ud),h=y.useContext(O5),p=y.useContext(Od),g=y.useContext(Hd),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:o,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,C=y.useContext(V5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&o8(b.current,o,c,C);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(o,p)});const j=o[Xb],N=y.useRef(!!j&&typeof window<"u"&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,j))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,j)));return yp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),N.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!N.current&&S.animationState&&S.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,j)}),N.current=!1),S.enteringChildren=void 0)}),S}function o8(t,n,o,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new o(t.latestValues,n["data-framer-portal-id"]?void 0:U5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&el(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function U5(t){if(t)return t.options.allowProjection!==!1?t.projection:U5(t.parent)}function xm(t,{forwardMotionProps:n=!1,type:o}={},a,c){var g,_;a&&Ij(a);const u=o?o==="svg":Yp(t),d=u?e8:Jj;function h(x,b){let w;const S={...y.useContext(Hd),...x,layoutId:i8(x)},{isStatic:C}=S,k=Wj(x),j=d(x,C);if(!C&&typeof window<"u"){a8();const N=r8(S);w=N.MeasureLayout,k.visualElement=s8(t,j,S,c,N.ProjectionNode,u)}return r.jsxs(Ud.Provider,{value:k,children:[w&&k.visualElement?r.jsx(w,{visualElement:k.visualElement,...S}):null,Kj(t,x,n8(j,k.visualElement,b),j,C,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[t8]=t,p}function i8({layoutId:t}){const n=y.useContext(gp).id;return n&&t!==void 0?n+"-"+t:t}function a8(t,n){y.useContext(O5).strict}function r8(t){const n=z5(),{drag:o,layout:a}=n;if(!o&&!a)return{};const c={...o,...a};return{MeasureLayout:o!=null&&o.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function l8(t,n){if(typeof Proxy>"u")return xm;const o=new Map,a=(u,d)=>xm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(o.has(d)||o.set(d,xm(d,void 0,t,n)),o.get(d))})}const c8=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Yp(t))?new v5(n):new _5(n,{allowProjection:t!==y.Fragment})};class u8 extends Xa{constructor(n){super(n),n.animationState||(n.animationState=FC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Id(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:o}=this.node.prevProps||{};n!==o&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let d8=0;class f8 extends Xa{constructor(){super(...arguments),this.id=d8++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=gr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);o&&!n&&c.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:n,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const h8={animation:{Feature:u8},exit:{Feature:f8}};function Nc(t){return{point:{x:t.pageX,y:t.pageY}}}const m8=t=>n=>Pp(n)&&t(n,Nc(n));function yc(t,n,o,a){return kc(t,n,m8(o),a)}const W5=({current:t})=>t?t.ownerDocument.defaultView:null,ux=(t,n)=>Math.abs(t-n);function p8(t,n){const o=ux(t.x,n.x),a=ux(t.y,n.y);return Math.sqrt(o**2+a**2)}const dx=new Set(["auto","scroll"]);class F5{constructor(n,o,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ad(this.lastRawMoveEventInfo,this.transformPagePoint));const w=bm(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,C=p8(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!C)return;const{point:k}=w,{timestamp:j}=xo;this.history.push({...k,timestamp:j});const{onStart:N,onMove:A}=this.handlers;S||(N&&N(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=ad(S,this.transformPagePoint),as.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:C,onSessionEnd:k,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=bm(w.type==="pointercancel"?this.lastMoveEventInfo:ad(S,this.transformPagePoint),this.history);this.startEvent&&C&&C(w,N),k&&k(w,N)},!Pp(n))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Nc(n),g=ad(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=xo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=o;b&&b(n,bm(g,this.history)),this.removeListeners=Ec(yc(this.contextWindow,"pointermove",this.handlePointerMove),yc(this.contextWindow,"pointerup",this.handlePointerUp),yc(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let o=n.parentElement;for(;o;){const a=getComputedStyle(o);(dx.has(a.overflowX)||dx.has(a.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const o=this.scrollPositions.get(n);if(!o)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-o.x,y:c.y-o.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),as.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ma(this.updatePoint)}}function ad(t,n){return n?{point:n(t.point)}:t}function fx(t,n){return{x:t.x-n.x,y:t.y-n.y}}function bm({point:t},n){return{point:t,delta:fx(t,Y5(n)),offset:fx(t,_8(n)),velocity:g8(n,.1)}}function _8(t){return t[0]}function Y5(t){return t[t.length-1]}function g8(t,n){if(t.length<2)return{x:0,y:0};let o=t.length-1,a=null;const c=Y5(t);for(;o>=0&&(a=t[o],!(c.timestamp-a.timestamp>Go(n)));)o--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>Go(n)*2&&(a=t[1]);const u=gi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function y8(t,{min:n,max:o},a){return n!==void 0&&t<n?t=a?fs(n,t,a.min):Math.max(t,n):o!==void 0&&t>o&&(t=a?fs(o,t,a.max):Math.min(t,o)),t}function hx(t,n,o){return{min:n!==void 0?t.min+n:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function x8(t,{top:n,left:o,bottom:a,right:c}){return{x:hx(t.x,o,c),y:hx(t.y,n,a)}}function mx(t,n){let o=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([o,a]=[a,o]),{min:o,max:a}}function b8(t,n){return{x:mx(t.x,n.x),y:mx(t.y,n.y)}}function v8(t,n){let o=.5;const a=zo(t),c=zo(n);return c>a?o=cl(n.min,n.max-a,t.min):a>c&&(o=cl(t.min,t.max-c,n.min)),qi(0,1,o)}function w8(t,n){const o={};return n.min!==void 0&&(o.min=n.min-t.min),n.max!==void 0&&(o.max=n.max-t.min),o}const rp=.35;function S8(t=rp){return t===!1?t=0:t===!0&&(t=rp),{x:px(t,"left","right"),y:px(t,"top","bottom")}}function px(t,n,o){return{min:_x(t,n),max:_x(t,o)}}function _x(t,n){return typeof t=="number"?t:t[n]||0}const k8=new WeakMap;class C8{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=qs(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:o=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{o&&this.snapToCursor(Nc(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:C}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tC(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fi(j=>{let N=this.getAxisMotionValue(j).get()||0;if(Xi.test(N)){const{projection:A}=this.visualElement;if(A&&A.layout){const T=A.layout.layoutBox[j];T&&(N=zo(T)*(parseFloat(N)/100))}}this.originPoint[j]=N}),C&&as.update(()=>C(x,b),!1,!0),Zm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:C,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:j}=b;if(S&&this.currentDirection===null){this.currentDirection=M8(j),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,j),this.updateAxis("y",b.point,j),this.visualElement.render(),k&&as.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new F5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:W5(this.visualElement),element:this.visualElement.current})}stop(n,o){const a=n||this.latestPointerEvent,c=o||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&as.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:o}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,o,a){const{drag:c}=this.getProps();if(!a||!rd(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=y8(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:o}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&el(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=x8(a.layoutBox,n):this.constraints=!1,this.elastic=S8(o),c!==this.constraints&&!el(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Fi(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=w8(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:o}=this.getProps();if(!n||!el(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=TC(a,c.root,this.visualElement.getTransformPagePoint());let d=b8(c.layout.layoutBox,u);if(o){const h=o(CC(d));this.hasMutatedConstraints=!!h,h&&(d=u5(h))}return d}startAnimation(n){const{drag:o,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Fi(_=>{if(!rd(_,o,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,o){const a=this.getAxisMotionValue(n);return Zm(this.visualElement,n),a.start(Rp(n,a,0,o,this.visualElement,!1))}stopAnimation(){Fi(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const o=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[o];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Fi(o=>{const{drag:a}=this.getProps();if(!rd(o,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[o],p=u.get()||0;u.set(n[o]-fs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!el(o)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Fi(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=v8({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Fi(d=>{if(!rd(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(fs(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;k8.set(this.visualElement,this);const n=this.visualElement.current,o=yc(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&rC(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();el(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=j8(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),as.read(c);const h=kc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Fi(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),o(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=rp,dragMomentum:h=!0}=n;return{...n,drag:o,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function gx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function j8(t,n,o){const a=k1(t,gx(o)),c=k1(n,gx(o));return()=>{a(),c()}}function rd(t,n,o){return(n===!0||n===t)&&(o===null||o===t)}function M8(t,n=10){let o=null;return Math.abs(t.y)>n?o="y":Math.abs(t.x)>n&&(o="x"),o}class T8 extends Xa{constructor(n){super(n),this.removeGroupControls=yi,this.removeListeners=yi,this.controls=new C8(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};n!==o&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vm=t=>(n,o)=>{t&&as.update(()=>t(n,o),!1,!0)};class E8 extends Xa{constructor(){super(...arguments),this.removePointerDownListener=yi}onPointerDown(n){this.session=new F5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:W5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:o,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:vm(n),onStart:vm(o),onMove:vm(a),onEnd:(u,d)=>{delete this.session,c&&as.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=yc(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wm=!1;class D8 extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(o.group&&o.group.add(u),a&&a.register&&c&&a.register(u),wm&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),xd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:o,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==o&&d.setOptions({...d.options,layoutDependency:o}),wm=!0,c||n.layoutDependency!==o||o===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||as.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:o}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=o,a.root.didUpdate(),Ip.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:c}=n;wm=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function X5(t){const[n,o]=B5(),a=y.useContext(gp);return r.jsx(D8,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(V5),isPresent:n,safeToRemove:o})}const A8={pan:{Feature:E8},drag:{Feature:T8,ProjectionNode:L5,MeasureLayout:X5}};function yx(t,n,o){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,u=a[c];u&&as.postRender(()=>u(n,Nc(n)))}class N8 extends Xa{mount(){const{current:n}=this.node;n&&(this.unmount=sC(n,(o,a)=>(yx(this.node,a,"Start"),c=>yx(this.node,c,"End"))))}unmount(){}}class R8 extends Xa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ec(kc(this.node.current,"focus",()=>this.onFocus()),kc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xx(t,n,o){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),u=a[c];u&&as.postRender(()=>u(n,Nc(n)))}class L8 extends Xa{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:o,propagate:a}=this.node.props;this.unmount=cC(n,(c,u)=>(xx(this.node,u,"Start"),(d,{success:h})=>xx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const lp=new WeakMap,Sm=new WeakMap,B8=t=>{const n=lp.get(t.target);n&&n(t)},O8=t=>{t.forEach(B8)};function z8({root:t,...n}){const o=t||document;Sm.has(o)||Sm.set(o,{});const a=Sm.get(o),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(O8,{root:t,...n})),a[c]}function $8(t,n,o){const a=z8(n);return lp.set(t,o),a.observe(t),()=>{lp.delete(t),a.unobserve(t)}}const I8={some:0,all:1};class P8 extends Xa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:o,margin:a,amount:c="some",once:u}=n,d={root:o?o.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:I8[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=$8(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:o}=this.node;["amount","margin","root"].some(H8(n,o))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function H8({viewport:t={}},{viewport:n={}}={}){return o=>t[o]!==n[o]}const V8={inView:{Feature:P8},tap:{Feature:L8},focus:{Feature:R8},hover:{Feature:N8}},U8={layout:{ProjectionNode:L5,MeasureLayout:X5}},W8={...h8,...V8,...A8,...U8},qo=l8(W8,c8);function cp(t){const n=Tc(()=>Ya(t)),{isStatic:o}=y.useContext(Hd);if(o){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function q5(t,n){const o=cp(n()),a=()=>o.set(n());return a(),yp(()=>{const c=()=>as.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),ma(a)}}),o}function F8(t){_c.current=[],t();const n=q5(_c.current,t);return _c.current=void 0,n}function ld(t,n,o,a){if(typeof t=="function")return F8(t);const u=typeof n=="function"?n:yC(n,o,a),d=Array.isArray(t)?bx(t,u):bx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(o)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:o,isTransformed:!0}),d}function bx(t,n){const o=Tc(()=>[]);return q5(t,()=>{o.length=0;const a=t.length;for(let c=0;c<a;c++)o[c]=t[c].get();return n(o)})}function Xp(t){return typeof t=="object"&&!Array.isArray(t)}function G5(t,n,o,a){return t==null?[]:typeof t=="string"&&Xp(n)?$p(t,o,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function Y8(t,n,o){return t*(n+1)}function vx(t,n,o,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?o:n.startsWith("<")?Math.max(0,o+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function X8(t,n,o){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<o&&(ll(t,c),a--)}}function q8(t,n,o,a,c,u){X8(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:fs(c,u,a[d]),easing:_b(o,d)})}function G8(t,n){for(let o=0;o<t.length;o++)t[o]=t[o]/(n+1)}function K8(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const Q8="easeInOut";function Z8(t,{defaultTransition:n={},...o}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,vx(x,S.at,_,g));continue}let[C,k,j={}]=S;j.at!==void 0&&(x=vx(x,j.at,_,g));let N=0;const A=(T,$,W,P=0,X=0)=>{const q=J8(T),{delay:ne=0,times:le=Nb(q),type:G=n.type||"keyframes",repeat:te,repeatType:de,repeatDelay:be=0,...z}=$;let{ease:_e=n.ease||"easeOut",duration:K}=$;const we=typeof ne=="function"?ne(P,X):ne,Ee=q.length,L=Ap(G)?G:c==null?void 0:c[G||"keyframes"];if(Ee<=2&&L){let ze=100;if(Ee===2&&n7(q)){const Ze=q[1]-q[0];ze=Math.abs(Ze)}const Ae={...n,...z};K!==void 0&&(Ae.duration=Go(K));const Oe=Tb(Ae,ze,L);_e=Oe.ease,K=Oe.duration}K!=null||(K=u);const H=x+we;le.length===1&&le[0]===0&&(le[1]=1);const B=le.length-q.length;if(B>0&&Ab(le,B),q.length===1&&q.unshift(null),te){K=Y8(K,te);const ze=[...q],Ae=[...le];_e=Array.isArray(_e)?[..._e]:[_e];const Oe=[..._e];for(let Ze=0;Ze<te;Ze++){q.push(...ze);for(let Je=0;Je<ze.length;Je++)le.push(Ae[Je]+(Ze+1)),_e.push(Je===0?"linear":_b(Oe,Je-1))}G8(le,te)}const oe=H+K;q8(W,q,_e,le,H,oe),N=Math.max(we+K,N),b=Math.max(oe,b)};if(eo(C)){const T=wx(C,h);A(k,j,Sx("default",T))}else{const T=G5(C,k,a,p),$=T.length;for(let W=0;W<$;W++){k=k,j=j;const P=T[W],X=wx(P,h);for(const q in k)A(k[q],e7(j,q),Sx(q,X),W,$)}}_=x,x+=N}return h.forEach((w,S)=>{for(const C in w){const k=w[C];k.sort(K8);const j=[],N=[],A=[];for(let P=0;P<k.length;P++){const{at:X,value:q,easing:ne}=k[P];j.push(q),N.push(cl(0,b,X)),A.push(ne||"easeOut")}N[0]!==0&&(N.unshift(0),j.unshift(j[0]),A.unshift(Q8)),N[N.length-1]!==1&&(N.push(1),j.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const T=d.get(S);T.keyframes[C]=j;const{type:$,...W}=n;T.transition[C]={...W,duration:b,ease:A,times:N,...o}}}),d}function wx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function Sx(t,n){return n[t]||(n[t]=[]),n[t]}function J8(t){return Array.isArray(t)?t:[t]}function e7(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const t7=t=>typeof t=="number",n7=t=>t.every(t7);function s7(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},o=$d(t)&&!o5(t)?new v5(n):new _5(n);o.mount(t),wc.set(t,o)}function o7(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},o=new BC(n);o.mount(t),wc.set(t,o)}function i7(t,n){return eo(t)||typeof t=="number"||typeof t=="string"&&!Xp(n)}function K5(t,n,o,a){const c=[];if(i7(t,n))c.push(D5(t,Xp(n)&&n.default||n,o&&(o.default||o)));else{if(t==null)return c;const u=G5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?s7:o7;wc.has(p)||g(p);const _=wc.get(p),x={...o};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Op(_,{...n,transition:x},{}))}}return c}function a7(t,n,o){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Ya(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return Z8(c,n,o,{spring:vc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...K5(p,d,h))}),a}function r7(t){return Array.isArray(t)&&t.some(Array.isArray)}function l7(t={}){const{scope:n,reduceMotion:o}=t;function a(c,u,d){let h=[],p;if(r7(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=a7(c,o!==void 0?{reduceMotion:o,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=K5(c,u,o!==void 0?{reduceMotion:o,...x}:x,n)}const g=new k3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{ll(n.animations,g)})),g}return a}const kx=l7();var c7=Object.freeze({}),u7=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,o,a){const c=this.parseConfig(o,"",a),u=this.flattenValues(o,"");this.initTransitionModes(o,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,o,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,o,a);return}const u=this.parseConfig(o,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(o,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(o,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const C=w.slice(0,-7),k=d.get(C);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,o){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=o;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=o)}else{const d=this.baseValues.get(t);d&&(d[n]=o)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,o){this.updateTransitionMode(t,n,o)}getSpringMode(t,n){const o=this.getTransitionMode(t,n);return o==="easing"?"simple":o}updateTransitionMode(t,n,o){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=o,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const o=this.panels.get(t);return o&&o.values[`${n}.__mode`]||"simple"}getValue(t,n){const o=this.panels.get(t);return o==null?void 0:o.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:c7}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var o;(o=this.listeners.get(t))==null||o.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var o;(o=this.actionListeners.get(t))==null||o.delete(n)}}triggerAction(t,n){var o;(o=this.actionListeners.get(t))==null||o.forEach(a=>a(n))}savePreset(t,n){var d;const o=this.panels.get(t);if(!o)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...o.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...o.values}),this.notify(t),a}loadPreset(t,n){var u;const o=this.panels.get(t);if(!o)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(o.values={...c.values},this.snapshots.set(t,{...o.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const o=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,o.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),o=this.baseValues.get(t);n&&o&&(n.values={...o},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var o;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((o=u.modifier)!=null?o:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const o of this.panels.values())for(const[a,c]of Object.entries(o.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(o.controls,a);u&&t.push({panelId:o.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const o of t){if(o.path===n)return o;if(o.type==="folder"&&o.children){const a=this.findControlByPath(o.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(o=>o())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,o){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))o[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;o[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,o)}}parseConfig(t,n,o){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=o==null?void 0:o[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,o)})}}return a}flattenValues(t,n){var a,c,u;const o={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")o[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")o[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))o[p]=h;else if(this.isActionConfig(h))o[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;o[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?o[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?o[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(o,this.flattenValues(h,p))}return o}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const o=n-t;return o<=1?.01:o<=10?.1:o<=100?1:10}normalizePreservedValue(t,n,o){var a,c,u;if(t===void 0||!o)return n;switch(o.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=o.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=o.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof o.step!="number"||o.step<=0?p:this.roundToStep(p,d,h,o.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=o.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,o,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(o,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),o=n.indexOf(".");return o===-1?0:n.length-o-1}mapControlsByPath(t){const n=new Map,o=a=>{for(const c of a){if(c.type==="folder"&&c.children){o(c.children);continue}n.set(c.path,c)}};return o(t),n}},dn=new u7;function d7(t,n,o){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(o==null?void 0:o.onAction);h.current=o==null?void 0:o.onAction;const p=y.useRef(o==null?void 0:o.shortcuts);p.current=o==null?void 0:o.shortcuts;const g=JSON.stringify(o==null?void 0:o.shortcuts);y.useEffect(()=>(dn.registerPanel(c,t,u.current,p.current),()=>dn.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}dn.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>dn.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>dn.subscribe(c,b),()=>dn.getValues(c),()=>dn.getValues(c));return Q5(n,x,"")}function Q5(t,n,o){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,C]of Object.entries(t)){if(S==="_collapsed")continue;const k=o?`${o}.${S}`:S;if(Array.isArray(C)&&C.length<=4&&typeof C[0]=="number")a[S]=(c=n[k])!=null?c:C[0];else if(typeof C=="number"||typeof C=="boolean"||typeof C=="string")a[S]=(u=n[k])!=null?u:C;else if(f7(C)||h7(C))a[S]=(d=n[k])!=null?d:C;else if(m7(C))a[S]=(h=n[k])!=null?h:C;else if(p7(C)){const j=(p=C.default)!=null?p:y7(C.options);a[S]=(g=n[k])!=null?g:j}else _7(C)?a[S]=(x=(_=n[k])!=null?_:C.default)!=null?x:"#000000":g7(C)?a[S]=(w=(b=n[k])!=null?b:C.default)!=null?w:"":typeof C=="object"&&C!==null&&(a[S]=Q5(C,n,k))}return a}function ml(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function f7(t){return ml(t,"spring")}function h7(t){return ml(t,"easing")}function m7(t){return ml(t,"action")}function p7(t){return ml(t,"select")&&"options"in t&&Array.isArray(t.options)}function _7(t){return ml(t,"color")}function g7(t){return ml(t,"text")}function y7(t){const n=t[0];return typeof n=="string"?n:n.value}function up(t){const n=t.toString(),o=n.indexOf(".");return o===-1?0:n.length-o-1}function bd(t,n){const o=Math.round(t/n)*n;return parseFloat(o.toFixed(up(n)))}function rc(t,n){var d,h,p,g;const o=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-o,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function lc(t,n,o,a,c){var g,_;const u=dn.getValue(t,n),d=(g=o.min)!=null?g:0,h=(_=o.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));dn.updateValue(t,n,bd(p,a))}function x7(t,n,o){const a=(t-n)/(o-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(o-n):t}function cd(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function km(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function Z5(t,n){for(const o of t){if(o.path===n)return o;if(o.type==="folder"&&o.children){const a=Z5(o.children,n);if(a)return a}}return null}var ud=4;function b7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function v7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",o=b7(n);return t.key?`${J5(t.modifier)}${t.key.toUpperCase()}+${o}`:o}function w7(t){return t.key?`${J5(t.modifier)}${t.key.toUpperCase()}`:"Press"}function J5(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var e2=y.createContext({activePanelId:null,activePath:null});function S7({children:t}){const[n,o]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=dn.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const C=Z5(b.controls,w);if(C&&C.type==="slider")return{panelId:b.id,path:w,control:C,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=C=>{if(cd())return;const k=C.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const T=h("scroll")||h("drag")||h("move");if(T&&T.control.type==="slider"){C.preventDefault();const $=k==="arrowright"||k==="arrowup"?1:-1,W=rc(T.control,T.shortcut);lc(T.panelId,T.path,T.control,W,$);return}}const j=a.current.has(k);a.current.add(k);const N=km(C),A=dn.resolveShortcutTarget(k,N);if(A&&(o({activePanelId:A.panelId,activePath:A.path}),!j&&A.control.type==="toggle")){const T=dn.getValue(A.panelId,A.path);dn.updateValue(A.panelId,A.path,!T)}j||(u.current=null,d.current=0)},g=C=>{const k=C.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)o({activePanelId:null,activePath:null});else{let j=!1;for(const N of a.current){const A=km(C),T=dn.resolveShortcutTarget(N,A);if(T){o({activePanelId:T.panelId,activePath:T.path}),j=!0;break}}j||o({activePanelId:null,activePath:null})}},_=C=>{var N,A;if(cd())return;const k=km(C);if(a.current.size>0)for(const T of a.current){const $=dn.resolveShortcutTarget(T,k);if(!$)continue;const{panelId:W,path:P,control:X}=$;if(((A=(N=X.shortcut)==null?void 0:N.interaction)!=null?A:"scroll")!=="scroll"||X.type!=="slider")continue;C.preventDefault();const ne=rc(X,X.shortcut),le=C.deltaY>0?-1:1;lc(W,P,X,ne,le);return}const j=dn.resolveScrollOnlyTargets();for(const{panelId:T,path:$,control:W,shortcut:P}of j){if(W.type!=="slider")continue;C.preventDefault();const X=rc(W,P),q=C.deltaY>0?-1:1;lc(T,$,W,X,q);return}},x=C=>{if(cd()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=C.clientX,d.current=0,C.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=C=>{if(cd()||a.current.size===0)return;if(c.current){const j=h("drag");if(j&&u.current!==null){const N=C.clientX-u.current;u.current=C.clientX,d.current+=N;const A=rc(j.control,j.shortcut),T=Math.trunc(d.current/ud);T!==0&&(d.current-=T*ud,lc(j.panelId,j.path,j.control,A,T))}return}const k=h("move");if(k){if(u.current===null){u.current=C.clientX;return}const j=C.clientX-u.current;u.current=C.clientX,d.current+=j;const N=rc(k.control,k.shortcut),A=Math.trunc(d.current/ud);A!==0&&(d.current-=A*ud,lc(k.panelId,k.path,k.control,N,A))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,o({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),r.jsx(e2.Provider,{value:n,children:t})}var qp="M6 9.5L12 15.5L18 9.5",k7="M5 12.75L10 19L19 5",Cm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},C7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],j7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],Cx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Ld({title:t,children:n,defaultOpen:o=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(o),[g,_]=y.useState(!o),x=y.useRef(null),[b,w]=y.useState(void 0),[S,C]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const N=()=>C(window.innerHeight);return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[a]),y.useEffect(()=>{const N=x.current;if(!N)return;const A=new ResizeObserver(()=>{if(h){const T=N.offsetHeight;w($=>$===T?$:T)}});return A.observe(N),()=>A.disconnect()},[h]);const k=()=>{if(c&&a)return;const N=!h;p(N),_(!N),u==null||u(N)},j=r.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[r.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[r.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&r.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("path",{opacity:"0.5",d:Cx.path,fill:"currentColor"}),Cx.circles.map((N,A)=>r.jsx("circle",{cx:N.cx,cy:N.cy,r:N.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},A))]}),!a&&r.jsx(qo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:r.jsx("path",{d:qp})})]}),a&&d&&h&&r.jsx("div",{className:"dialkit-panel-toolbar",onClick:N=>N.stopPropagation(),children:d})]}),r.jsx(Vd,{initial:!1,children:h&&r.jsx(qo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:r.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return r.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:j});const N=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return r.jsx(qo.div,{className:"dialkit-panel-inner",style:N,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:j})}return j}var M7=3,T7=32,E7=200,D7=8;function ko({label:t,value:n,onChange:o,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var Ye;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,C]=y.useState(!1),[k,j]=y.useState(!1),[N,A]=y.useState(!1),[T,$]=y.useState(!1),[W,P]=y.useState(!1),[X,q]=y.useState(!1),[ne,le]=y.useState(""),G=y.useRef(null),te=y.useRef(null),de=y.useRef(!0),be=y.useRef(null),z=y.useRef(null),_e=y.useRef(1),K=(n-a)/(c-a)*100,we=S||N,Ee=cp(K),L=ld(Ee,I=>`${I}%`),H=ld(Ee,I=>`max(5px, calc(${I}% - 9px))`),B=cp(0),oe=ld(B,I=>`calc(100% + ${Math.abs(I)}px)`),ze=ld(B,I=>I<0?I:0);y.useEffect(()=>{!S&&!be.current&&Ee.jump(K)},[K,S,Ee]);const Ae=y.useCallback(I=>{const Z=z.current;if(!Z)return n;const ke=(I-Z.left)/_e.current,Ue=g.current?g.current.offsetWidth:Z.width,We=Math.max(0,Math.min(1,ke/Ue)),Ne=a+We*(c-a);return Math.max(a,Math.min(c,Ne))},[a,c,n]),Oe=y.useCallback(I=>(I-a)/(c-a)*100,[a,c]),Ze=y.useCallback((I,Z)=>{const ge=z.current;if(!ge)return 0;const ke=Z<0?ge.left-I:I-ge.right,Ue=Math.max(0,ke-T7);return Z*D7*Math.sqrt(Math.min(Ue/E7,1))},[]),Je=y.useCallback(I=>{if(!X&&(I.preventDefault(),I.target.setPointerCapture(I.pointerId),te.current={x:I.clientX,y:I.clientY},de.current=!0,C(!0),g.current)){z.current=g.current.getBoundingClientRect();const Z=g.current.offsetWidth;_e.current=z.current.width/Z}},[X]),Xt=y.useCallback(I=>{if(!S||!te.current)return;const Z=I.clientX-te.current.x,ge=I.clientY-te.current.y,ke=Math.sqrt(Z*Z+ge*ge);if(de.current&&ke>M7&&(de.current=!1,j(!0)),!de.current){const Ue=z.current;Ue&&(I.clientX<Ue.left?B.jump(Ze(I.clientX,-1)):I.clientX>Ue.right?B.jump(Ze(I.clientX,1)):B.jump(0));const We=Ae(I.clientX),Ne=Oe(We);be.current&&(be.current.stop(),be.current=null),Ee.jump(Ne),o(bd(We,u))}},[S,Ae,Oe,o,Ee,B,Ze]),qt=y.useCallback(I=>{if(S){if(de.current){const Z=Ae(I.clientX),ke=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((Z-a)/u)*u)):x7(Z,a,c),Ue=Oe(ke);be.current&&be.current.stop(),be.current=kx(Ee,Ue,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{be.current=null}}),o(bd(ke,u))}B.get()!==0&&kx(B,0,{type:"spring",visualDuration:.35,bounce:.15}),C(!1),j(!1),te.current=null}},[S,Ae,Oe,o,a,c,Ee,B]);y.useEffect(()=>(T&&!X&&!W?G.current=setTimeout(()=>{P(!0)},800):!T&&!X&&(G.current&&(clearTimeout(G.current),G.current=null),P(!1)),()=>{G.current&&clearTimeout(G.current)}),[T,X,W]),y.useEffect(()=>{X&&x.current&&(x.current.focus(),x.current.select())},[X]);const Dt=I=>{le(I.target.value)},It=()=>{const I=parseFloat(ne);if(!isNaN(I)){const Z=Math.max(a,Math.min(c,I));o(bd(Z,u))}q(!1),$(!1),P(!1)},nn=I=>{W&&(I.stopPropagation(),I.preventDefault(),q(!0),le(n.toFixed(up(u))))},sn=I=>{I.key==="Enter"?It():I.key==="Escape"&&(q(!1),$(!1))},Ge=()=>{It()},yt=n.toFixed(up(u)),ae=8,ce=10,Ce=10;let Me=30,qe=78;const Xe=(Ye=g.current)==null?void 0:Ye.offsetWidth;Xe&&Xe>0&&(b.current&&(Me=(ce+b.current.offsetWidth+ae)/Xe*100),w.current&&(qe=(Xe-Ce-w.current.offsetWidth-ae)/Xe*100));const Ie=K<Me||K>qe,ct=we?Ie?.1:k?.9:.5:0,pt=(c-a)/u,Ve=pt<=10?Array.from({length:pt-1},(I,Z)=>{const ge=(Z+1)*u/(c-a)*100;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ge}%`}},Z)}):Array.from({length:9},(I,Z)=>{const ge=(Z+1)*10;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${ge}%`}},Z)});return r.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:r.jsxs(qo.div,{ref:_,className:`dialkit-slider ${we?"dialkit-slider-active":""}`,onPointerDown:Je,onPointerMove:Xt,onPointerUp:qt,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{width:oe,x:ze},children:[r.jsx("div",{className:"dialkit-slider-hashmarks",children:Ve}),r.jsx(qo.div,{className:"dialkit-slider-fill",style:{width:L}}),r.jsx(qo.div,{className:"dialkit-slider-handle",style:{left:H,y:"-50%"},animate:{opacity:ct,scaleX:we?1:.25,scaleY:we&&Ie?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),r.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&r.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:v7(h)})]}),X?r.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ne,onChange:Dt,onKeyDown:sn,onBlur:Ge,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation()}):r.jsx("span",{ref:w,className:`dialkit-slider-value ${W?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:nn,onMouseDown:I=>W&&I.stopPropagation(),style:{cursor:W?"text":"default"},children:yt})]})})}function Gp({options:t,value:n,onChange:o}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,r.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&r.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return r.jsx("button",{onClick:()=>o(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function A7({label:t,checked:n,onChange:o,shortcut:a,shortcutActive:c}){return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&r.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:w7(a)})]}),r.jsx(Gp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>o(u==="on")})]})}function N7(t,n,o,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/o;p+=S*d,h+=p*d}return c}function t2({spring:t,isSimpleMode:n}){var C,k,j,N,A;let c,u,d;if(n){const T=(C=t.visualDuration)!=null?C:.3,$=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/T,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(j=t.stiffness)!=null?j:400,u=(N=t.damping)!=null?N:17,d=(A=t.mass)!=null?A:1;const h=2,p=N7(c,u,d,h),g=p.map(([,T])=>T),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([T,$],W)=>{const P=T/h*256,q=140-(($-_)/(b||1)*140*.6+140*.2);return`${W===0?"M":"L"} ${P} ${q}`}).join(" "),S=[];for(let T=1;T<4;T++){const $=64*T,W=140/4*T;S.push(r.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${T}`),r.jsx("line",{x1:0,y1:W,x2:256,y2:W,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${T}`))}return r.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,r.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function R7({panelId:t,path:n,label:o,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(C=>dn.subscribe(t,C),()=>dn.getSpringMode(t,n),()=>dn.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=C=>{dn.updateSpringMode(t,n,C),c(C==="simple"?h.current.simple:h.current.advanced)},g=(C,k)=>{if(d){const{stiffness:j,damping:N,mass:A,...T}=a;c({...T,[C]:k})}else{const{visualDuration:j,bounce:N,...A}=a;c({...A,[C]:k})}};return r.jsx(Ld,{title:o,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx(t2,{spring:a,isSimpleMode:d}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Gp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(ko,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:C=>g("visualDuration",C),min:.1,max:1,step:.05,unit:"s"}),r.jsx(ko,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:C=>g("bounce",C),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(ko,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:C=>g("stiffness",C),min:1,max:1e3,step:10}),r.jsx(ko,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:C=>g("damping",C),min:1,max:100,step:1}),r.jsx(ko,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:C=>g("mass",C),min:.1,max:10,step:.1})]})]})})}function L7({easing:t}){const n=t.ease,o=200,a=10,u=(o-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return r.jsxs("svg",{viewBox:`0 0 ${o} ${o}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[r.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function B7({panelId:t,path:n,label:o,value:a,onChange:c}){var S,C,k,j,N;const u=y.useSyncExternalStore(A=>dn.subscribe(t,A),()=>dn.getTransitionMode(t,n),()=>dn.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=A=>{dn.updateTransitionMode(t,n,A),c(A==="easing"?p.current.easing:A==="simple"?p.current.simple:p.current.advanced)},b=(A,T)=>{if(h){const{stiffness:$,damping:W,mass:P,...X}=g;c({...X,[A]:T})}else{const{visualDuration:$,bounce:W,...P}=g;c({...P,[A]:T})}},w=(A,T)=>{const $=[..._.ease];$[A]=T,c({..._,ease:$})};return r.jsx(Ld,{title:o,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?r.jsx(L7,{easing:_}):r.jsx(t2,{spring:g,isSimpleMode:h}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Gp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(ko,{label:"x1",value:_.ease[0],onChange:A=>w(0,A),min:0,max:1,step:.01}),r.jsx(ko,{label:"y1",value:_.ease[1],onChange:A=>w(1,A),min:-1,max:2,step:.01}),r.jsx(ko,{label:"x2",value:_.ease[2],onChange:A=>w(2,A),min:0,max:1,step:.01}),r.jsx(ko,{label:"y2",value:_.ease[3],onChange:A=>w(3,A),min:-1,max:2,step:.01}),r.jsx(ko,{label:"Duration",value:_.duration,onChange:A=>c({..._,duration:A}),min:.1,max:2,step:.05,unit:"s"}),r.jsx(z7,{ease:_.ease,onChange:A=>c({..._,ease:A})})]}):h?r.jsxs(r.Fragment,{children:[r.jsx(ko,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:A=>b("visualDuration",A),min:.1,max:1,step:.05,unit:"s"}),r.jsx(ko,{label:"Bounce",value:(C=g.bounce)!=null?C:.2,onChange:A=>b("bounce",A),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(ko,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:A=>b("stiffness",A),min:1,max:1e3,step:10}),r.jsx(ko,{label:"Damping",value:(j=g.damping)!=null?j:17,onChange:A=>b("damping",A),min:1,max:100,step:1}),r.jsx(ko,{label:"Mass",value:(N=g.mass)!=null?N:1,onChange:A=>b("mass",A),min:.1,max:10,step:.1})]})]})})}function jx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function O7(t){const n=t.split(",").map(o=>parseFloat(o.trim()));return n.length===4&&n.every(o=>!isNaN(o))?n:null}function z7({ease:t,onChange:n}){const[o,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(jx(t)),a(!0)},h=()=>{const g=O7(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:o?c:jx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function $7({label:t,value:n,onChange:o,placeholder:a}){return r.jsxs("div",{className:"dialkit-text-control",children:[r.jsx("label",{className:"dialkit-text-label",children:t}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>o(c.target.value),placeholder:a})]})}function I7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function P7(t){return t.map(n=>typeof n=="string"?{value:n,label:I7(n)}:n)}function H7({label:t,value:n,options:o,onChange:a}){var C;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=P7(o),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const j=k.getBoundingClientRect(),N=8+b.length*36,A=window.innerHeight-j.bottom-4,T=A<N&&j.top>A;x({top:T?j.top-4:j.bottom+4,left:j.left,width:j.width,above:T})},[b.length]);return y.useEffect(()=>{var j;const k=(j=d.current)==null?void 0:j.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=j=>{const N=j.target;d.current&&!d.current.contains(N)&&h.current&&!h.current.contains(N)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),r.jsxs("div",{className:"dialkit-select-row",children:[r.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[r.jsx("span",{className:"dialkit-select-label",children:t}),r.jsxs("div",{className:"dialkit-select-right",children:[r.jsx("span",{className:"dialkit-select-value",children:(C=w==null?void 0:w.label)!=null?C:n}),r.jsx(qo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:qp})})]})]}),p&&Mc.createPortal(r.jsx(Vd,{children:c&&_&&r.jsx(qo.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>r.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var V7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function U7({label:t,value:n,onChange:o}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),V7.test(u)?o(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return r.jsxs("div",{className:"dialkit-color-control",children:[r.jsx("span",{className:"dialkit-color-label",children:t}),r.jsxs("div",{className:"dialkit-color-inputs",children:[a?r.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):r.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),r.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),r.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?W7(n):n.slice(0,7),onChange:_=>o(_.target.value)})]})]})}function W7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function F7({panelId:t,presets:n,activePresetId:o,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(j=>j.id===o),b=y.useCallback(()=>{var N;if(!_)return;const j=(N=d.current)==null?void 0:N.getBoundingClientRect();j&&g({top:j.bottom+4,left:j.left,width:j.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const j=N=>{var T,$;const A=N.target;(T=d.current)!=null&&T.contains(A)||($=h.current)!=null&&$.contains(A)||w()};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[c,w]);const C=j=>{j?dn.loadPreset(t,j):dn.clearActivePreset(t),w()},k=(j,N)=>{j.stopPropagation(),dn.deletePreset(t,N)};return r.jsxs("div",{className:"dialkit-preset-manager",children:[r.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[r.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),r.jsx(qo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:qp})})]}),Mc.createPortal(r.jsx(Vd,{children:c&&r.jsxs(qo.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[r.jsx("div",{className:"dialkit-preset-item","data-active":String(!o),onClick:()=>C(null),children:r.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(j=>r.jsxs("div",{className:"dialkit-preset-item","data-active":String(j.id===o),onClick:()=>C(j.id),children:[r.jsx("span",{className:"dialkit-preset-name",children:j.name}),r.jsx("button",{className:"dialkit-preset-delete",onClick:N=>k(N,j.id),title:"Delete preset",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:j7.map((N,A)=>r.jsx("path",{d:N},A))})})]},j.id))]})}),document.body)]})}function Y7({panel:t,defaultOpen:n=!0,inline:o=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(e2);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>dn.subscribe(t.id,k),()=>dn.getValues(t.id),()=>dn.getValues(t.id)),g=dn.getPresets(t.id),_=dn.getActivePresetId(t.id),x=()=>{const k=g.length+2;dn.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),j=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(j),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var N,A,T;const j=p[k.path];switch(k.type){case"slider":return r.jsx(ko,{label:k.label,value:j,onChange:$=>dn.updateValue(t.id,k.path,$),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return r.jsx(A7,{label:k.label,checked:j,onChange:$=>dn.updateValue(t.id,k.path,$),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return r.jsx(R7,{panelId:t.id,path:k.path,label:k.label,spring:j,onChange:$=>dn.updateValue(t.id,k.path,$)},k.path);case"transition":return r.jsx(B7,{panelId:t.id,path:k.path,label:k.label,value:j,onChange:$=>dn.updateValue(t.id,k.path,$)},k.path);case"folder":return r.jsx(Ld,{title:k.label,defaultOpen:(N=k.defaultOpen)!=null?N:!0,children:(A=k.children)==null?void 0:A.map(w)},k.path);case"text":return r.jsx($7,{label:k.label,value:j,onChange:$=>dn.updateValue(t.id,k.path,$),placeholder:k.placeholder},k.path);case"select":return r.jsx(H7,{label:k.label,value:j,options:(T=k.options)!=null?T:[],onChange:$=>dn.updateValue(t.id,k.path,$)},k.path);case"color":return r.jsx(U7,{label:k.label,value:j,onChange:$=>dn.updateValue(t.id,k.path,$)},k.path);case"action":return r.jsx("button",{className:"dialkit-button",onClick:()=>dn.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),C=r.jsxs(r.Fragment,{children:[r.jsx(qo.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:C7.map((k,j)=>r.jsx("path",{d:k},j))})}),r.jsx(F7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),r.jsx(qo.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("span",{style:{position:"relative",width:16,height:16},children:r.jsx(Vd,{initial:!1,mode:"wait",children:a?r.jsx(qo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:r.jsx("path",{d:k7})},"check"):r.jsxs(qo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[r.jsx("path",{d:Cm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),r.jsx("path",{d:Cm.sparkle,fill:"currentColor"}),r.jsx("path",{d:Cm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return r.jsx("div",{className:"dialkit-panel-wrapper",children:r.jsx(Ld,{title:t.name,defaultOpen:n,isRoot:!0,inline:o,onOpenChange:d,toolbar:C,children:S()})})}var X7=typeof process<"u"?!1:!(typeof import.meta<"u");function q7({position:t="top-right",defaultOpen:n=!0,mode:o="popover",theme:a="system",productionEnabled:c=X7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=o==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),C=y.useRef(null),k=y.useRef(!1),j=y.useRef(null),N=y.useRef(!1);y.useEffect(()=>(p(!0),d(dn.getPanels()),dn.subscribeGlobal(()=>{d(dn.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const X=new MutationObserver(()=>{var le;const q=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!q)return;if(q.getAttribute("data-collapsed")==="true")C.current&&b(C.current);else{if(x){C.current=x;const G=x.x+21,te=window.innerWidth/2;S(G<te?"top-left":"top-right")}else S(t);b(null)}});return X.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>X.disconnect()},[g,x,t]);const A=y.useCallback(X=>{var le;const q=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!q||q.getAttribute("data-collapsed")!=="true")return;const ne=_.current.getBoundingClientRect();j.current={pointerX:X.clientX,pointerY:X.clientY,elX:ne.left,elY:ne.top},N.current=!1,k.current=!0,X.target.setPointerCapture(X.pointerId)},[]),T=y.useCallback(X=>{if(!k.current||!j.current)return;const q=X.clientX-j.current.pointerX,ne=X.clientY-j.current.pointerY;!N.current&&Math.abs(q)+Math.abs(ne)<4||(N.current=!0,b({x:j.current.elX+q,y:j.current.elY+ne}))},[]),$=y.useCallback(X=>{var q;if(k.current&&(k.current=!1,j.current=null,N.current)){X.stopPropagation();const ne=(q=_.current)==null?void 0:q.querySelector(".dialkit-panel-inner");if(ne){const le=G=>{G.stopPropagation()};ne.addEventListener("click",le,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const W=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,P=r.jsx(S7,{children:r.jsx("div",{className:"dialkit-root","data-mode":o,"data-theme":a,children:r.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":o,style:W,onPointerDown:g?void 0:A,onPointerMove:g?void 0:T,onPointerUp:g?void 0:$,children:u.map(X=>r.jsx(Y7,{panel:X,defaultOpen:g||n,inline:g},X.id))})})});return g?P:Mc.createPortal(P,document.body)}const G7=()=>(d7("Git Visualizer",{preview:[1,0,1]}),null),K7=({children:t})=>r.jsxs(r.Fragment,{children:[t,r.jsx(G7,{}),r.jsx(q7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),r.jsx(Qk,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});Tv.createRoot(document.getElementById("root")).render(r.jsx(K7,{children:r.jsx(Rw,{})}));

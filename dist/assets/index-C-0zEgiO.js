(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function xx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rh={exports:{}},ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function dv(){if(K0)return ql;K0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:t,type:a,key:d,ref:c!==void 0?c:null,props:u}}return ql.Fragment=n,ql.jsx=i,ql.jsxs=i,ql}var Q0;function fv(){return Q0||(Q0=1,Rh.exports=dv()),Rh.exports}var r=fv(),Bh={exports:{}},Gl={},Lh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function hv(){return Z0||(Z0=1,(function(t){function n(z,me){var G=z.length;z.push(me);e:for(;0<G;){var ve=G-1>>>1,Me=z[ve];if(0<c(Me,me))z[ve]=me,z[G]=Me,G=ve;else break e}}function i(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var me=z[0],G=z.pop();if(G!==me){z[0]=G;e:for(var ve=0,Me=z.length,B=Me>>>1;ve<B;){var P=2*(ve+1)-1,L=z[P],ie=P+1,$e=z[ie];if(0>c(L,G))ie<Me&&0>c($e,L)?(z[ve]=$e,z[ie]=G,ve=ie):(z[ve]=L,z[P]=G,ve=P);else if(ie<Me&&0>c($e,G))z[ve]=$e,z[ie]=G,ve=ie;else break e}}return me}function c(z,me){var G=z.sortIndex-me.sortIndex;return G!==0?G:z.id-me.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,x=null,b=3,w=!1,S=!1,C=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function T(z){for(var me=i(g);me!==null;){if(me.callback===null)a(g);else if(me.startTime<=z)a(g),me.sortIndex=me.expirationTime,n(p,me);else break;me=i(g)}}function $(z){if(C=!1,T(z),!S)if(i(p)!==null)S=!0,F||(F=!0,q());else{var me=i(g);me!==null&&ye($,me.startTime-z)}}var F=!1,U=-1,Q=5,X=-1;function ne(){return k?!0:!(t.unstable_now()-X<Q)}function le(){if(k=!1,F){var z=t.unstable_now();X=z;var me=!0;try{e:{S=!1,C&&(C=!1,R(U),U=-1),w=!0;var G=b;try{t:{for(T(z),x=i(p);x!==null&&!(x.expirationTime>z&&ne());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,b=x.priorityLevel;var Me=ve(x.expirationTime<=z);if(z=t.unstable_now(),typeof Me=="function"){x.callback=Me,T(z),me=!0;break t}x===i(p)&&a(p),T(z)}else a(p);x=i(p)}if(x!==null)me=!0;else{var B=i(g);B!==null&&ye($,B.startTime-z),me=!1}}break e}finally{x=null,b=G,w=!1}me=void 0}}finally{me?q():F=!1}}}var q;if(typeof A=="function")q=function(){A(le)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ue=te.port2;te.port1.onmessage=le,q=function(){ue.postMessage(null)}}else q=function(){M(le,0)};function ye(z,me){U=M(function(){z(t.unstable_now())},me)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(z){switch(b){case 1:case 2:case 3:var me=3;break;default:me=b}var G=b;b=me;try{return z()}finally{b=G}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(z,me){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=b;b=z;try{return me()}finally{b=G}},t.unstable_scheduleCallback=function(z,me,G){var ve=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ve+G:ve):G=ve,z){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=G+Me,z={id:_++,callback:me,priorityLevel:z,startTime:G,expirationTime:Me,sortIndex:-1},G>ve?(z.sortIndex=G,n(g,z),i(p)===null&&z===i(g)&&(C?(R(U),U=-1):C=!0,ye($,G-ve))):(z.sortIndex=Me,n(p,z),S||w||(S=!0,F||(F=!0,q()))),z},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(z){var me=b;return function(){var G=b;b=me;try{return z.apply(this,arguments)}finally{b=G}}}})(Oh)),Oh}var J0;function mv(){return J0||(J0=1,Lh.exports=hv()),Lh.exports}var zh={exports:{}},cn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function pv(){if(ey)return cn;ey=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function w(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function M(B,P,L){this.props=B,this.context=P,this.refs=k,this.updater=L||S}M.prototype.isReactComponent={},M.prototype.setState=function(B,P){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,P,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function R(){}R.prototype=M.prototype;function A(B,P,L){this.props=B,this.context=P,this.refs=k,this.updater=L||S}var T=A.prototype=new R;T.constructor=A,C(T,M.prototype),T.isPureReactComponent=!0;var $=Array.isArray;function F(){}var U={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function X(B,P,L){var ie=L.ref;return{$$typeof:t,type:B,key:P,ref:ie!==void 0?ie:null,props:L}}function ne(B,P){return X(B.type,P,B.props)}function le(B){return typeof B=="object"&&B!==null&&B.$$typeof===t}function q(B){var P={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(L){return P[L]})}var te=/\/+/g;function ue(B,P){return typeof B=="object"&&B!==null&&B.key!=null?q(""+B.key):P.toString(36)}function ye(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(F,F):(B.status="pending",B.then(function(P){B.status==="pending"&&(B.status="fulfilled",B.value=P)},function(P){B.status==="pending"&&(B.status="rejected",B.reason=P)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,P,L,ie,$e){var Te=typeof B;(Te==="undefined"||Te==="boolean")&&(B=null);var Re=!1;if(B===null)Re=!0;else switch(Te){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(B.$$typeof){case t:case n:Re=!0;break;case _:return Re=B._init,z(Re(B._payload),P,L,ie,$e)}}if(Re)return $e=$e(B),Re=ie===""?"."+ue(B,0):ie,$($e)?(L="",Re!=null&&(L=Re.replace(te,"$&/")+"/"),z($e,P,L,"",function(Ut){return Ut})):$e!=null&&(le($e)&&($e=ne($e,L+($e.key==null||B&&B.key===$e.key?"":(""+$e.key).replace(te,"$&/")+"/")+Re)),P.push($e)),1;Re=0;var Qe=ie===""?".":ie+":";if($(B))for(var Ze=0;Ze<B.length;Ze++)ie=B[Ze],Te=Qe+ue(ie,Ze),Re+=z(ie,P,L,Te,$e);else if(Ze=w(B),typeof Ze=="function")for(B=Ze.call(B),Ze=0;!(ie=B.next()).done;)ie=ie.value,Te=Qe+ue(ie,Ze++),Re+=z(ie,P,L,Te,$e);else if(Te==="object"){if(typeof B.then=="function")return z(ye(B),P,L,ie,$e);throw P=String(B),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return Re}function me(B,P,L){if(B==null)return B;var ie=[],$e=0;return z(B,ie,"","",function(Te){return P.call(L,Te,$e++)}),ie}function G(B){if(B._status===-1){var P=B._result;P=P(),P.then(function(L){(B._status===0||B._status===-1)&&(B._status=1,B._result=L)},function(L){(B._status===0||B._status===-1)&&(B._status=2,B._result=L)}),B._status===-1&&(B._status=0,B._result=P)}if(B._status===1)return B._result.default;throw B._result}var ve=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Me={map:me,forEach:function(B,P,L){me(B,function(){P.apply(this,arguments)},L)},count:function(B){var P=0;return me(B,function(){P++}),P},toArray:function(B){return me(B,function(P){return P})||[]},only:function(B){if(!le(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return cn.Activity=x,cn.Children=Me,cn.Component=M,cn.Fragment=i,cn.Profiler=c,cn.PureComponent=A,cn.StrictMode=a,cn.Suspense=p,cn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,cn.__COMPILER_RUNTIME={__proto__:null,c:function(B){return U.H.useMemoCache(B)}},cn.cache=function(B){return function(){return B.apply(null,arguments)}},cn.cacheSignal=function(){return null},cn.cloneElement=function(B,P,L){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var ie=C({},B.props),$e=B.key;if(P!=null)for(Te in P.key!==void 0&&($e=""+P.key),P)!Q.call(P,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&P.ref===void 0||(ie[Te]=P[Te]);var Te=arguments.length-2;if(Te===1)ie.children=L;else if(1<Te){for(var Re=Array(Te),Qe=0;Qe<Te;Qe++)Re[Qe]=arguments[Qe+2];ie.children=Re}return X(B.type,$e,ie)},cn.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},cn.createElement=function(B,P,L){var ie,$e={},Te=null;if(P!=null)for(ie in P.key!==void 0&&(Te=""+P.key),P)Q.call(P,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&($e[ie]=P[ie]);var Re=arguments.length-2;if(Re===1)$e.children=L;else if(1<Re){for(var Qe=Array(Re),Ze=0;Ze<Re;Ze++)Qe[Ze]=arguments[Ze+2];$e.children=Qe}if(B&&B.defaultProps)for(ie in Re=B.defaultProps,Re)$e[ie]===void 0&&($e[ie]=Re[ie]);return X(B,Te,$e)},cn.createRef=function(){return{current:null}},cn.forwardRef=function(B){return{$$typeof:h,render:B}},cn.isValidElement=le,cn.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:G}},cn.memo=function(B,P){return{$$typeof:g,type:B,compare:P===void 0?null:P}},cn.startTransition=function(B){var P=U.T,L={};U.T=L;try{var ie=B(),$e=U.S;$e!==null&&$e(L,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(F,ve)}catch(Te){ve(Te)}finally{P!==null&&L.types!==null&&(P.types=L.types),U.T=P}},cn.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},cn.use=function(B){return U.H.use(B)},cn.useActionState=function(B,P,L){return U.H.useActionState(B,P,L)},cn.useCallback=function(B,P){return U.H.useCallback(B,P)},cn.useContext=function(B){return U.H.useContext(B)},cn.useDebugValue=function(){},cn.useDeferredValue=function(B,P){return U.H.useDeferredValue(B,P)},cn.useEffect=function(B,P){return U.H.useEffect(B,P)},cn.useEffectEvent=function(B){return U.H.useEffectEvent(B)},cn.useId=function(){return U.H.useId()},cn.useImperativeHandle=function(B,P,L){return U.H.useImperativeHandle(B,P,L)},cn.useInsertionEffect=function(B,P){return U.H.useInsertionEffect(B,P)},cn.useLayoutEffect=function(B,P){return U.H.useLayoutEffect(B,P)},cn.useMemo=function(B,P){return U.H.useMemo(B,P)},cn.useOptimistic=function(B,P){return U.H.useOptimistic(B,P)},cn.useReducer=function(B,P,L){return U.H.useReducer(B,P,L)},cn.useRef=function(B){return U.H.useRef(B)},cn.useState=function(B){return U.H.useState(B)},cn.useSyncExternalStore=function(B,P,L){return U.H.useSyncExternalStore(B,P,L)},cn.useTransition=function(){return U.H.useTransition()},cn.version="19.2.4",cn}var ty;function ap(){return ty||(ty=1,zh.exports=pv()),zh.exports}var $h={exports:{}},Mo={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function _v(){if(ny)return Mo;ny=1;var t=ap();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:g,implementation:_}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Mo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Mo.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return u(p,g,null,_)},Mo.flushSync=function(p){var g=d.T,_=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=g,a.p=_,a.d.f()}},Mo.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Mo.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Mo.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:w}):_==="script"&&a.d.X(p,{crossOrigin:x,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Mo.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=h(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Mo.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,x=h(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Mo.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=h(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Mo.requestFormReset=function(p){a.d.r(p)},Mo.unstable_batchedUpdates=function(p,g){return p(g)},Mo.useFormState=function(p,g,_){return d.H.useFormState(p,g,_)},Mo.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mo.version="19.2.4",Mo}var sy;function bx(){if(sy)return $h.exports;sy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),$h.exports=_v(),$h.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function gv(){if(oy)return Gl;oy=1;var t=mv(),n=ap(),i=bx();function a(e){var s="https://react.dev/errors/"+e;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var s=e,o=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(o=s.return),e=s.return;while(e)}return s.tag===3?o:null}function d(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function h(e){if(e.tag===31){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function g(e){var s=e.alternate;if(!s){if(s=u(e),s===null)throw Error(a(188));return s!==e?null:e}for(var o=e,l=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return p(f),e;if(m===l)return p(f),s;m=m.sibling}throw Error(a(188))}if(o.return!==l.return)o=f,l=m;else{for(var v=!1,j=f.child;j;){if(j===o){v=!0,o=f,l=m;break}if(j===l){v=!0,l=f,o=m;break}j=j.sibling}if(!v){for(j=m.child;j;){if(j===o){v=!0,o=m,l=f;break}if(j===l){v=!0,l=m,o=f;break}j=j.sibling}if(!v)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:s}function _(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e;for(e=e.child;e!==null;){if(s=_(e),s!==null)return s;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),A=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case F:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case A:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case T:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return s=e.displayName||null,s!==null?s:ue(e.type)||"Memo";case Q:s=e._payload,e=e._init;try{return ue(e(s))}catch{}}return null}var ye=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ve=[],Me=-1;function B(e){return{current:e}}function P(e){0>Me||(e.current=ve[Me],ve[Me]=null,Me--)}function L(e,s){Me++,ve[Me]=e.current,e.current=s}var ie=B(null),$e=B(null),Te=B(null),Re=B(null);function Qe(e,s){switch(L(Te,s),L($e,e),L(ie,null),s.nodeType){case 9:case 11:e=(e=s.documentElement)&&(e=e.namespaceURI)?x0(e):0;break;default:if(e=s.tagName,s=s.namespaceURI)s=x0(s),e=b0(s,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ie),L(ie,e)}function Ze(){P(ie),P($e),P(Te)}function Ut(e){e.memoizedState!==null&&L(Re,e);var s=ie.current,o=b0(s,e.type);s!==o&&(L($e,e),L(ie,o))}function Ft(e){$e.current===e&&(P(ie),P($e)),Re.current===e&&(P(Re),Wl._currentValue=G)}var Dt,zt;function sn(e){if(Dt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Dt=s&&s[1]||"",zt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dt+e+zt}var rn=!1;function qe(e,s){if(!e||rn)return"";rn=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var ze=function(){throw Error()};if(Object.defineProperty(ze.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ze,[])}catch(xe){var he=xe}Reflect.construct(e,[],ze)}else{try{ze.call()}catch(xe){he=xe}e.call(ze.prototype)}}else{try{throw Error()}catch(xe){he=xe}(ze=e())&&typeof ze.catch=="function"&&ze.catch(function(){})}}catch(xe){if(xe&&he&&typeof xe.stack=="string")return[xe.stack,he.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],j=m[1];if(v&&j){var V=v.split(`
`),de=j.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<de.length&&!de[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===de.length)for(l=V.length-1,f=de.length-1;1<=l&&0<=f&&V[l]!==de[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==de[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==de[f]){var ke=`
`+V[l].replace(" at new "," at ");return e.displayName&&ke.includes("<anonymous>")&&(ke=ke.replace("<anonymous>",e.displayName)),ke}while(1<=l&&0<=f);break}}}finally{rn=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?sn(o):""}function Se(e,s){switch(e.tag){case 26:case 27:case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return e.child!==s&&s!==null?sn("Suspense Fallback"):sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return qe(e.type,!1);case 11:return qe(e.type.render,!1);case 1:return qe(e.type,!0);case 31:return sn("Activity");default:return""}}function K(e){try{var s="",o=null;do s+=Se(e,o),o=e,e=e.return;while(e);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Be=Object.prototype.hasOwnProperty,Ye=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Je=t.unstable_shouldYield,at=t.unstable_requestPaint,Xe=t.unstable_now,dt=t.unstable_getCurrentPriorityLevel,ht=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,I=t.unstable_LowPriority,J=t.unstable_IdlePriority,pe=t.log,we=t.unstable_setDisableYieldValue,Ve=null,We=null;function Ae(e){if(typeof pe=="function"&&we(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Ve,e)}catch{}}var Rt=Math.clz32?Math.clz32:ft,Mt=Math.log,Ht=Math.LN2;function ft(e){return e>>>=0,e===0?32:31-(Mt(e)/Ht|0)|0}var et=256,Tt=262144,At=4194304;function pn(e){var s=e&42;if(s!==0)return s;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lt(e,s,o){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var j=l&134217727;return j!==0?(l=j&~m,l!==0?f=pn(l):(v&=j,v!==0?f=pn(v):o||(o=j&~e,o!==0&&(f=pn(o))))):(j=l&~m,j!==0?f=pn(j):v!==0?f=pn(v):o||(o=l&~e,o!==0&&(f=pn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Wt(e,s){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&s)===0}function Zt(e,s){switch(e){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=At;return At<<=1,(At&62914560)===0&&(At=4194304),e}function En(e){for(var s=[],o=0;31>o;o++)s.push(e);return s}function it(e,s){e.pendingLanes|=s,s!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function en(e,s,o,l,f,m){var v=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var j=e.entanglements,V=e.expirationTimes,de=e.hiddenUpdates;for(o=v&~o;0<o;){var ke=31-Rt(o),ze=1<<ke;j[ke]=0,V[ke]=-1;var he=de[ke];if(he!==null)for(de[ke]=null,ke=0;ke<he.length;ke++){var xe=he[ke];xe!==null&&(xe.lane&=-536870913)}o&=~ze}l!==0&&Dn(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(v&~s))}function Dn(e,s,o){e.pendingLanes|=s,e.suspendedLanes&=~s;var l=31-Rt(s);e.entangledLanes|=s,e.entanglements[l]=e.entanglements[l]|1073741824|o&261930}function yn(e,s){var o=e.entangledLanes|=s;for(e=e.entanglements;o;){var l=31-Rt(o),f=1<<l;f&s|e[l]&s&&(e[l]|=s),o&=~f}}function Jn(e,s){var o=s&-s;return o=(o&42)!==0?1:Ms(o),(o&(e.suspendedLanes|s))!==0?0:o}function Ms(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ws(){var e=me.p;return e!==0?e:(e=window.event,e===void 0?32:U0(e.type))}function xn(e,s){var o=me.p;try{return me.p=e,s()}finally{me.p=o}}var es=Math.random().toString(36).slice(2),bn="__reactFiber$"+es,Xn="__reactProps$"+es,nt="__reactContainer$"+es,ps="__reactEvents$"+es,ii="__reactListeners$"+es,bo="__reactHandles$"+es,no="__reactResources$"+es,An="__reactMarker$"+es;function ro(e){delete e[bn],delete e[Xn],delete e[ps],delete e[ii],delete e[bo]}function lo(e){var s=e[bn];if(s)return s;for(var o=e.parentNode;o;){if(s=o[nt]||o[bn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(e=M0(e);e!==null;){if(o=e[bn])return o;e=M0(e)}return s}e=o,o=e.parentNode}return null}function Ps(e){if(e=e[bn]||e[nt]){var s=e.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return e}return null}function Hs(e){var s=e.tag;if(s===5||s===26||s===27||s===6)return e.stateNode;throw Error(a(33))}function Ts(e){var s=e[no];return s||(s=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function mn(e){e[An]=!0}var ai=new Set,vo={};function Vs(e,s){ts(e,s),ts(e+"Capture",s)}function ts(e,s){for(vo[e]=s,e=0;e<s.length;e++)ai.add(s[e])}var wo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xo={},Do={};function $o(e){return Be.call(Do,e)?!0:Be.call(Xo,e)?!1:wo.test(e)?Do[e]=!0:(Xo[e]=!0,!1)}function co(e,s,o){if($o(s))if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(s);return}}e.setAttribute(s,""+o)}}function Cs(e,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttribute(s,""+o)}}function Us(e,s,o,l){if(l===null)e.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(s,o,""+l)}}function Bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bi(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ni(e,s,o){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,s);if(!e.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(e,s,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function qo(e){if(!e._valueTracker){var s=bi(e)?"checked":"value";e._valueTracker=Ni(e,s,""+e[s])}}function Zs(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var o=s.getValue(),l="";return e&&(l=bi(e)?e.checked?"true":"false":e.value),e=l,e!==o?(s.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var No=/[\n"\\]/g;function js(e){return e.replace(No,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function so(e,s,o,l,f,m,v,j){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),s!=null?v==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+Bn(s)):e.value!==""+Bn(s)&&(e.value=""+Bn(s)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),s!=null?uo(e,v,Bn(s)):o!=null?uo(e,v,Bn(o)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+Bn(j):e.removeAttribute("name")}function Ln(e,s,o,l,f,m,v,j){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){qo(e);return}o=o!=null?""+Bn(o):"",s=s!=null?""+Bn(s):o,j||s===e.value||(e.value=s),e.defaultValue=s}l=l!=null?l:f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=j?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qo(e)}function uo(e,s,o){s==="number"&&Ao(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function fs(e,s,o,l){if(e=e.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=s.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&l&&(e[o].defaultSelected=!0)}else{for(o=""+Bn(o),s=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}s!==null||e[f].disabled||(s=e[f])}s!==null&&(s.selected=!0)}}function In(e,s,o){if(s!=null&&(s=""+Bn(s),s!==e.value&&(e.value=s),o==null)){e.defaultValue!==s&&(e.defaultValue=s);return}e.defaultValue=o!=null?""+Bn(o):""}function So(e,s,o,l){if(s==null){if(l!=null){if(o!=null)throw Error(a(92));if(ye(l)){if(1<l.length)throw Error(a(93));l=l[0]}o=l}o==null&&(o=""),s=o}o=Bn(s),e.defaultValue=o,l=e.textContent,l===o&&l!==""&&l!==null&&(e.value=l),qo(e)}function fo(e,s){if(s){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=s;return}}e.textContent=s}var Go=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(e,s,o){var l=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="":l?e.setProperty(s,o):typeof o!="number"||o===0||Go.has(s)?s==="float"?e.cssFloat=o:e[s]=(""+o).trim():e[s]=o+"px"}function Ko(e,s,o){if(s!=null&&typeof s!="object")throw Error(a(62));if(e=e.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&o[f]!==l&&Kt(e,f,l)}else for(var m in s)s.hasOwnProperty(m)&&Kt(e,m,s[m])}function Es(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oe=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fe(e){return oe.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ce(){}var Oe=null;function st(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tt=null,mt=null;function Jt(e){var s=Ps(e);if(s&&(e=s.stateNode)){var o=e[Xn]||null;e:switch(e=s.stateNode,s.type){case"input":if(so(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+js(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var l=o[s];if(l!==e&&l.form===e.form){var f=l[Xn]||null;if(!f)throw Error(a(90));so(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)l=o[s],l.form===e.form&&Zs(l)}break e;case"textarea":In(e,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&fs(e,!!o.multiple,s,!1)}}}var Xt=!1;function ns(e,s,o){if(Xt)return e(s,o);Xt=!0;try{var l=e(s);return l}finally{if(Xt=!1,(tt!==null||mt!==null)&&(_u(),tt&&(s=tt,e=mt,mt=tt=null,Jt(s),e)))for(s=0;s<e.length;s++)Jt(e[s])}}function Lt(e,s){var o=e.stateNode;if(o===null)return null;var l=o[Xn]||null;if(l===null)return null;o=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,s,typeof o));return o}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(dn)try{var On={};Object.defineProperty(On,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Pn=!1}var qn=null,$t=null,tn=null;function D(){if(tn)return tn;var e,s=$t,o=s.length,l,f="value"in qn?qn.value:qn.textContent,m=f.length;for(e=0;e<o&&s[e]===f[e];e++);var v=o-e;for(l=1;l<=v&&s[o-l]===f[m-l];l++);return tn=f.slice(e,1<l?1-l:void 0)}function W(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function se(){return!0}function re(){return!1}function be(e){function s(o,l,f,m,v){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(o=e[j],this[j]=o?o(m):m[j]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?se:re,this.isPropagationStopped=re,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=se)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=se)},persist:function(){},isPersistent:se}),s}var Le={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_t=be(Le),kt=x({},Le,{view:0,detail:0}),ct=be(kt),ot,xt,wt,_n=x({},kt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wt&&(wt&&e.type==="mousemove"?(ot=e.screenX-wt.screenX,xt=e.screenY-wt.screenY):xt=ot=0,wt=e),ot)},movementY:function(e){return"movementY"in e?e.movementY:xt}}),Nn=be(_n),Hn=x({},_n,{dataTransfer:0}),Ws=be(Hn),Bs=x({},kt,{relatedTarget:0}),ln=be(Bs),vn=x({},Le,{animationName:0,elapsedTime:0,pseudoElement:0}),ko=be(vn),Ds=x({},Le,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oo=be(Ds),io=x({},Le,{data:0}),Et=be(io),Ri={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ss(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Gn[e])?!!s[e]:!1}function Ls(){return Ss}var Co=x({},kt,{key:function(e){if(e.key){var s=Ri[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=W(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?W(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?W(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qo=be(Co),qi=x({},_n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bi=be(qi),ma=x({},kt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),qa=be(ma),He=x({},Le,{propertyName:0,elapsedTime:0,pseudoElement:0}),ut=be(He),It=x({},_n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gt=be(It),Yt=x({},Le,{newState:0,oldState:0}),qt=be(Yt),Yn=[9,13,27,32],wn=dn&&"CompositionEvent"in window,Vn=null;dn&&"documentMode"in document&&(Vn=document.documentMode);var ho=dn&&"TextEvent"in window&&!Vn,vi=dn&&(!wn||Vn&&8<Vn&&11>=Vn),xr=" ",Io=!1;function Li(e,s){switch(e){case"keyup":return Yn.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gi=!1;function Ac(e,s){switch(e){case"compositionend":return Dc(s);case"keypress":return s.which!==32?null:(Io=!0,xr);case"textInput":return e=s.data,e===xr&&Io?null:e;default:return null}}function Nc(e,s){if(Gi)return e==="compositionend"||!wn&&Li(e,s)?(e=D(),tn=$t=qn=null,Gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return vi&&s.locale!=="ko"?null:s.data;default:return null}}var Rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!Rc[e.type]:s==="textarea"}function pl(e,s,o,l){tt?mt?mt.push(l):mt=[l]:tt=l,s=Su(s,"onChange"),0<s.length&&(o=new _t("onChange","change",null,o,l),e.push({event:o,listeners:s}))}var pa=null,_a=null;function Bc(e){h0(e,0)}function E(e){var s=Hs(e);if(Zs(s))return e}function O(e,s){if(e==="change")return s}var Y=!1;if(dn){var H;if(dn){var ee="oninput"in document;if(!ee){var _e=document.createElement("div");_e.setAttribute("oninput","return;"),ee=typeof _e.oninput=="function"}H=ee}else H=!1;Y=H&&(!document.documentMode||9<document.documentMode)}function Ge(){pa&&(pa.detachEvent("onpropertychange",Ke),_a=pa=null)}function Ke(e){if(e.propertyName==="value"&&E(_a)){var s=[];pl(s,_a,e,st(e)),ns(Bc,s)}}function rt(e,s,o){e==="focusin"?(Ge(),pa=s,_a=o,pa.attachEvent("onpropertychange",Ke)):e==="focusout"&&Ge()}function bt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return E(_a)}function Ot(e,s){if(e==="click")return E(s)}function on(e,s){if(e==="input"||e==="change")return E(s)}function an(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var vt=typeof Object.is=="function"?Object.is:an;function pt(e,s){if(vt(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var o=Object.keys(e),l=Object.keys(s);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!Be.call(s,f)||!vt(e[f],s[f]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gs(e,s){var o=_s(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=s&&l>=s)return{node:o,offset:s-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_s(o)}}function ys(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?ys(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Tn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var s=Ao(e.document);s instanceof e.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)e=s.contentWindow;else break;s=Ao(e.document)}return s}function Fn(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}var Qt=dn&&"documentMode"in document&&11>=document.documentMode,nn=null,xs=null,Rn=null,Js=!1;function jo(e,s,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Js||nn==null||nn!==Ao(l)||(l=nn,"selectionStart"in l&&Fn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Rn&&pt(Rn,l)||(Rn=l,l=Su(xs,"onSelect"),0<l.length&&(s=new _t("onSelect","select",null,s,o),e.push({event:s,listeners:l}),s.target=nn)))}function cs(e,s){var o={};return o[e.toLowerCase()]=s.toLowerCase(),o["Webkit"+e]="webkit"+s,o["Moz"+e]="moz"+s,o}var li={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},wi={},Si={};dn&&(Si=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function ss(e){if(wi[e])return wi[e];if(!li[e])return e;var s=li[e],o;for(o in s)if(s.hasOwnProperty(o)&&o in Si)return wi[e]=s[o];return e}var ki=ss("animationend"),Oi=ss("animationiteration"),Lc=ss("animationstart"),Vd=ss("transitionrun"),Ud=ss("transitionstart"),Wd=ss("transitioncancel"),Fp=ss("transitionend"),Xp=new Map,Yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yd.push("scrollEnd");function Ci(e,s){Xp.set(e,s),Vs(s,[e])}var Oc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],br=0,Fd=0;function zc(){for(var e=br,s=Fd=br=0;s<e;){var o=ci[s];ci[s++]=null;var l=ci[s];ci[s++]=null;var f=ci[s];ci[s++]=null;var m=ci[s];if(ci[s++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}m!==0&&qp(o,f,m)}}function $c(e,s,o,l){ci[br++]=e,ci[br++]=s,ci[br++]=o,ci[br++]=l,Fd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xd(e,s,o,l){return $c(e,s,o,l),Ic(e)}function Ga(e,s){return $c(e,null,null,s),Ic(e)}function qp(e,s,o){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o);for(var f=!1,m=e.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&s!==null&&(f=31-Rt(o),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[s]:l.push(s),s.lane=o|536870912),m):null}function Ic(e){if(50<zl)throw zl=0,sh=null,Error(a(185));for(var s=e.return;s!==null;)e=s,s=e.return;return e.tag===3?e.stateNode:null}var vr={};function q5(e,s,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zo(e,s,o,l){return new q5(e,s,o,l)}function qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,s){var o=e.alternate;return o===null?(o=Zo(e.tag,s,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=s,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Gp(e,s){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=s,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,s=o.dependencies,e.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),e}function Pc(e,s,o,l,f,m){var v=0;if(l=e,typeof e=="function")qd(e)&&(v=1);else if(typeof e=="string")v=J2(e,o,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=Zo(31,o,s,f),e.elementType=X,e.lanes=m,e;case C:return Ka(o.children,f,m,s);case k:v=8,f|=24;break;case M:return e=Zo(12,o,s,f|2),e.elementType=M,e.lanes=m,e;case $:return e=Zo(13,o,s,f),e.elementType=$,e.lanes=m,e;case F:return e=Zo(19,o,s,f),e.elementType=F,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:v=10;break e;case R:v=9;break e;case T:v=11;break e;case U:v=14;break e;case Q:v=16,l=null;break e}v=29,o=Error(a(130,e===null?"null":typeof e,"")),l=null}return s=Zo(v,o,s,f),s.elementType=e,s.type=l,s.lanes=m,s}function Ka(e,s,o,l){return e=Zo(7,e,l,s),e.lanes=o,e}function Gd(e,s,o){return e=Zo(6,e,null,s),e.lanes=o,e}function Kp(e){var s=Zo(18,null,null,0);return s.stateNode=e,s}function Kd(e,s,o){return s=Zo(4,e.children!==null?e.children:[],e.key,s),s.lanes=o,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}var Qp=new WeakMap;function ui(e,s){if(typeof e=="object"&&e!==null){var o=Qp.get(e);return o!==void 0?o:(s={value:e,source:s,stack:K(s)},Qp.set(e,s),s)}return{value:e,source:s,stack:K(s)}}var wr=[],Sr=0,Hc=null,_l=0,di=[],fi=0,ga=null,zi=1,$i="";function Qi(e,s){wr[Sr++]=_l,wr[Sr++]=Hc,Hc=e,_l=s}function Zp(e,s,o){di[fi++]=zi,di[fi++]=$i,di[fi++]=ga,ga=e;var l=zi;e=$i;var f=32-Rt(l)-1;l&=~(1<<f),o+=1;var m=32-Rt(s)+f;if(30<m){var v=f-f%5;m=(l&(1<<v)-1).toString(32),l>>=v,f-=v,zi=1<<32-Rt(s)+f|o<<f|l,$i=m+e}else zi=1<<m|o<<f|l,$i=e}function Qd(e){e.return!==null&&(Qi(e,1),Zp(e,1,0))}function Zd(e){for(;e===Hc;)Hc=wr[--Sr],wr[Sr]=null,_l=wr[--Sr],wr[Sr]=null;for(;e===ga;)ga=di[--fi],di[fi]=null,$i=di[--fi],di[fi]=null,zi=di[--fi],di[fi]=null}function Jp(e,s){di[fi++]=zi,di[fi++]=$i,di[fi++]=ga,zi=s.id,$i=s.overflow,ga=e}var mo=null,bs=null,Mn=!1,ya=null,hi=!1,Jd=Error(a(519));function xa(e){var s=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gl(ui(s,e)),Jd}function e_(e){var s=e.stateNode,o=e.type,l=e.memoizedProps;switch(s[bn]=e,s[Xn]=l,o){case"dialog":kn("cancel",s),kn("close",s);break;case"iframe":case"object":case"embed":kn("load",s);break;case"video":case"audio":for(o=0;o<Il.length;o++)kn(Il[o],s);break;case"source":kn("error",s);break;case"img":case"image":case"link":kn("error",s),kn("load",s);break;case"details":kn("toggle",s);break;case"input":kn("invalid",s),Ln(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":kn("invalid",s);break;case"textarea":kn("invalid",s),So(s,l.value,l.defaultValue,l.children)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||l.suppressHydrationWarning===!0||g0(s.textContent,o)?(l.popover!=null&&(kn("beforetoggle",s),kn("toggle",s)),l.onScroll!=null&&kn("scroll",s),l.onScrollEnd!=null&&kn("scrollend",s),l.onClick!=null&&(s.onclick=Ce),s=!0):s=!1,s||xa(e,!0)}function t_(e){for(mo=e.return;mo;)switch(mo.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:mo=mo.return}}function kr(e){if(e!==mo)return!1;if(!Mn)return t_(e),Mn=!0,!1;var s=e.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||yh(e.type,e.memoizedProps)),o=!o),o&&bs&&xa(e),t_(e),s===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));bs=j0(e)}else if(s===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));bs=j0(e)}else s===27?(s=bs,Ra(e.type)?(e=Sh,Sh=null,bs=e):bs=s):bs=mo?pi(e.stateNode.nextSibling):null;return!0}function Qa(){bs=mo=null,Mn=!1}function ef(){var e=ya;return e!==null&&(Uo===null?Uo=e:Uo.push.apply(Uo,e),ya=null),e}function gl(e){ya===null?ya=[e]:ya.push(e)}var tf=B(null),Za=null,Zi=null;function ba(e,s,o){L(tf,s._currentValue),s._currentValue=o}function Ji(e){e._currentValue=tf.current,P(tf)}function nf(e,s,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),e===o)break;e=e.return}}function sf(e,s,o,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var j=m;m=f;for(var V=0;V<s.length;V++)if(j.context===s[V]){m.lanes|=o,j=m.alternate,j!==null&&(j.lanes|=o),nf(m.return,o,e),l||(v=null);break e}m=j.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),nf(v,o,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Cr(e,s,o,l){e=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var j=f.type;vt(f.pendingProps.value,v.value)||(e!==null?e.push(j):e=[j])}}else if(f===Re.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Wl):e=[Wl])}f=f.return}e!==null&&sf(s,e,o,l),s.flags|=262144}function Vc(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Za=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function po(e){return n_(Za,e)}function Uc(e,s){return Za===null&&Ja(e),n_(e,s)}function n_(e,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Zi===null){if(e===null)throw Error(a(308));Zi=s,e.dependencies={lanes:0,firstContext:s},e.flags|=524288}else Zi=Zi.next=s;return o}var G5=typeof AbortController<"u"?AbortController:function(){var e=[],s=this.signal={aborted:!1,addEventListener:function(o,l){e.push(l)}};this.abort=function(){s.aborted=!0,e.forEach(function(o){return o()})}},K5=t.unstable_scheduleCallback,Q5=t.unstable_NormalPriority,Ys={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function of(){return{controller:new G5,data:new Map,refCount:0}}function yl(e){e.refCount--,e.refCount===0&&K5(Q5,function(){e.controller.abort()})}var xl=null,af=0,jr=0,Mr=null;function Z5(e,s){if(xl===null){var o=xl=[];af=0,jr=ch(),Mr={status:"pending",value:void 0,then:function(l){o.push(l)}}}return af++,s.then(s_,s_),s}function s_(){if(--af===0&&xl!==null){Mr!==null&&(Mr.status="fulfilled");var e=xl;xl=null,jr=0,Mr=null;for(var s=0;s<e.length;s++)(0,e[s])()}}function J5(e,s){var o=[],l={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),l}var o_=z.S;z.S=function(e,s){Hg=Xe(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&Z5(e,s),o_!==null&&o_(e,s)};var er=B(null);function rf(){var e=er.current;return e!==null?e:us.pooledCache}function Wc(e,s){s===null?L(er,er.current):L(er,s.pool)}function i_(){var e=rf();return e===null?null:{parent:Ys._currentValue,pool:e}}var Tr=Error(a(460)),lf=Error(a(474)),Yc=Error(a(542)),Fc={then:function(){}};function a_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function r_(e,s,o){switch(o=e[o],o===void 0?e.push(s):o!==s&&(s.then(Ce,Ce),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,c_(e),e;default:if(typeof s.status=="string")s.then(Ce,Ce);else{if(e=us,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=s,e.status="pending",e.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw e=s.reason,c_(e),e}throw nr=s,Tr}}function tr(e){try{var s=e._init;return s(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(nr=o,Tr):o}}var nr=null;function l_(){if(nr===null)throw Error(a(459));var e=nr;return nr=null,e}function c_(e){if(e===Tr||e===Yc)throw Error(a(483))}var Er=null,bl=0;function Xc(e){var s=bl;return bl+=1,Er===null&&(Er=[]),r_(Er,e,s)}function vl(e,s){s=s.props.ref,e.ref=s!==void 0?s:null}function qc(e,s){throw s.$$typeof===b?Error(a(525)):(e=Object.prototype.toString.call(s),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e)))}function u_(e){function s(ae,Z){if(e){var ce=ae.deletions;ce===null?(ae.deletions=[Z],ae.flags|=16):ce.push(Z)}}function o(ae,Z){if(!e)return null;for(;Z!==null;)s(ae,Z),Z=Z.sibling;return null}function l(ae){for(var Z=new Map;ae!==null;)ae.key!==null?Z.set(ae.key,ae):Z.set(ae.index,ae),ae=ae.sibling;return Z}function f(ae,Z){return ae=Ki(ae,Z),ae.index=0,ae.sibling=null,ae}function m(ae,Z,ce){return ae.index=ce,e?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<Z?(ae.flags|=67108866,Z):ce):(ae.flags|=67108866,Z)):(ae.flags|=1048576,Z)}function v(ae){return e&&ae.alternate===null&&(ae.flags|=67108866),ae}function j(ae,Z,ce,Ne){return Z===null||Z.tag!==6?(Z=Gd(ce,ae.mode,Ne),Z.return=ae,Z):(Z=f(Z,ce),Z.return=ae,Z)}function V(ae,Z,ce,Ne){var Pt=ce.type;return Pt===C?ke(ae,Z,ce.props.children,Ne,ce.key):Z!==null&&(Z.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===Q&&tr(Pt)===Z.type)?(Z=f(Z,ce.props),vl(Z,ce),Z.return=ae,Z):(Z=Pc(ce.type,ce.key,ce.props,null,ae.mode,Ne),vl(Z,ce),Z.return=ae,Z)}function de(ae,Z,ce,Ne){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ce.containerInfo||Z.stateNode.implementation!==ce.implementation?(Z=Kd(ce,ae.mode,Ne),Z.return=ae,Z):(Z=f(Z,ce.children||[]),Z.return=ae,Z)}function ke(ae,Z,ce,Ne,Pt){return Z===null||Z.tag!==7?(Z=Ka(ce,ae.mode,Ne,Pt),Z.return=ae,Z):(Z=f(Z,ce),Z.return=ae,Z)}function ze(ae,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Gd(""+Z,ae.mode,ce),Z.return=ae,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return ce=Pc(Z.type,Z.key,Z.props,null,ae.mode,ce),vl(ce,Z),ce.return=ae,ce;case S:return Z=Kd(Z,ae.mode,ce),Z.return=ae,Z;case Q:return Z=tr(Z),ze(ae,Z,ce)}if(ye(Z)||q(Z))return Z=Ka(Z,ae.mode,ce,null),Z.return=ae,Z;if(typeof Z.then=="function")return ze(ae,Xc(Z),ce);if(Z.$$typeof===A)return ze(ae,Uc(ae,Z),ce);qc(ae,Z)}return null}function he(ae,Z,ce,Ne){var Pt=Z!==null?Z.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return Pt!==null?null:j(ae,Z,""+ce,Ne);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:return ce.key===Pt?V(ae,Z,ce,Ne):null;case S:return ce.key===Pt?de(ae,Z,ce,Ne):null;case Q:return ce=tr(ce),he(ae,Z,ce,Ne)}if(ye(ce)||q(ce))return Pt!==null?null:ke(ae,Z,ce,Ne,null);if(typeof ce.then=="function")return he(ae,Z,Xc(ce),Ne);if(ce.$$typeof===A)return he(ae,Z,Uc(ae,ce),Ne);qc(ae,ce)}return null}function xe(ae,Z,ce,Ne,Pt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number"||typeof Ne=="bigint")return ae=ae.get(ce)||null,j(Z,ae,""+Ne,Pt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case w:return ae=ae.get(Ne.key===null?ce:Ne.key)||null,V(Z,ae,Ne,Pt);case S:return ae=ae.get(Ne.key===null?ce:Ne.key)||null,de(Z,ae,Ne,Pt);case Q:return Ne=tr(Ne),xe(ae,Z,ce,Ne,Pt)}if(ye(Ne)||q(Ne))return ae=ae.get(ce)||null,ke(Z,ae,Ne,Pt,null);if(typeof Ne.then=="function")return xe(ae,Z,ce,Xc(Ne),Pt);if(Ne.$$typeof===A)return xe(ae,Z,ce,Uc(Z,Ne),Pt);qc(Z,Ne)}return null}function Ct(ae,Z,ce,Ne){for(var Pt=null,zn=null,Nt=Z,hn=Z=0,jn=null;Nt!==null&&hn<ce.length;hn++){Nt.index>hn?(jn=Nt,Nt=null):jn=Nt.sibling;var $n=he(ae,Nt,ce[hn],Ne);if($n===null){Nt===null&&(Nt=jn);break}e&&Nt&&$n.alternate===null&&s(ae,Nt),Z=m($n,Z,hn),zn===null?Pt=$n:zn.sibling=$n,zn=$n,Nt=jn}if(hn===ce.length)return o(ae,Nt),Mn&&Qi(ae,hn),Pt;if(Nt===null){for(;hn<ce.length;hn++)Nt=ze(ae,ce[hn],Ne),Nt!==null&&(Z=m(Nt,Z,hn),zn===null?Pt=Nt:zn.sibling=Nt,zn=Nt);return Mn&&Qi(ae,hn),Pt}for(Nt=l(Nt);hn<ce.length;hn++)jn=xe(Nt,ae,hn,ce[hn],Ne),jn!==null&&(e&&jn.alternate!==null&&Nt.delete(jn.key===null?hn:jn.key),Z=m(jn,Z,hn),zn===null?Pt=jn:zn.sibling=jn,zn=jn);return e&&Nt.forEach(function($a){return s(ae,$a)}),Mn&&Qi(ae,hn),Pt}function Gt(ae,Z,ce,Ne){if(ce==null)throw Error(a(151));for(var Pt=null,zn=null,Nt=Z,hn=Z=0,jn=null,$n=ce.next();Nt!==null&&!$n.done;hn++,$n=ce.next()){Nt.index>hn?(jn=Nt,Nt=null):jn=Nt.sibling;var $a=he(ae,Nt,$n.value,Ne);if($a===null){Nt===null&&(Nt=jn);break}e&&Nt&&$a.alternate===null&&s(ae,Nt),Z=m($a,Z,hn),zn===null?Pt=$a:zn.sibling=$a,zn=$a,Nt=jn}if($n.done)return o(ae,Nt),Mn&&Qi(ae,hn),Pt;if(Nt===null){for(;!$n.done;hn++,$n=ce.next())$n=ze(ae,$n.value,Ne),$n!==null&&(Z=m($n,Z,hn),zn===null?Pt=$n:zn.sibling=$n,zn=$n);return Mn&&Qi(ae,hn),Pt}for(Nt=l(Nt);!$n.done;hn++,$n=ce.next())$n=xe(Nt,ae,hn,$n.value,Ne),$n!==null&&(e&&$n.alternate!==null&&Nt.delete($n.key===null?hn:$n.key),Z=m($n,Z,hn),zn===null?Pt=$n:zn.sibling=$n,zn=$n);return e&&Nt.forEach(function(uv){return s(ae,uv)}),Mn&&Qi(ae,hn),Pt}function as(ae,Z,ce,Ne){if(typeof ce=="object"&&ce!==null&&ce.type===C&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:e:{for(var Pt=ce.key;Z!==null;){if(Z.key===Pt){if(Pt=ce.type,Pt===C){if(Z.tag===7){o(ae,Z.sibling),Ne=f(Z,ce.props.children),Ne.return=ae,ae=Ne;break e}}else if(Z.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===Q&&tr(Pt)===Z.type){o(ae,Z.sibling),Ne=f(Z,ce.props),vl(Ne,ce),Ne.return=ae,ae=Ne;break e}o(ae,Z);break}else s(ae,Z);Z=Z.sibling}ce.type===C?(Ne=Ka(ce.props.children,ae.mode,Ne,ce.key),Ne.return=ae,ae=Ne):(Ne=Pc(ce.type,ce.key,ce.props,null,ae.mode,Ne),vl(Ne,ce),Ne.return=ae,ae=Ne)}return v(ae);case S:e:{for(Pt=ce.key;Z!==null;){if(Z.key===Pt)if(Z.tag===4&&Z.stateNode.containerInfo===ce.containerInfo&&Z.stateNode.implementation===ce.implementation){o(ae,Z.sibling),Ne=f(Z,ce.children||[]),Ne.return=ae,ae=Ne;break e}else{o(ae,Z);break}else s(ae,Z);Z=Z.sibling}Ne=Kd(ce,ae.mode,Ne),Ne.return=ae,ae=Ne}return v(ae);case Q:return ce=tr(ce),as(ae,Z,ce,Ne)}if(ye(ce))return Ct(ae,Z,ce,Ne);if(q(ce)){if(Pt=q(ce),typeof Pt!="function")throw Error(a(150));return ce=Pt.call(ce),Gt(ae,Z,ce,Ne)}if(typeof ce.then=="function")return as(ae,Z,Xc(ce),Ne);if(ce.$$typeof===A)return as(ae,Z,Uc(ae,ce),Ne);qc(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint"?(ce=""+ce,Z!==null&&Z.tag===6?(o(ae,Z.sibling),Ne=f(Z,ce),Ne.return=ae,ae=Ne):(o(ae,Z),Ne=Gd(ce,ae.mode,Ne),Ne.return=ae,ae=Ne),v(ae)):o(ae,Z)}return function(ae,Z,ce,Ne){try{bl=0;var Pt=as(ae,Z,ce,Ne);return Er=null,Pt}catch(Nt){if(Nt===Tr||Nt===Yc)throw Nt;var zn=Zo(29,Nt,null,ae.mode);return zn.lanes=Ne,zn.return=ae,zn}finally{}}}var sr=u_(!0),d_=u_(!1),va=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,s,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Un&2)!==0){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=Ic(e),qp(e,null,o),s}return $c(e,l,s,o),Ic(e)}function wl(e,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var l=s.lanes;l&=e.pendingLanes,o|=l,s.lanes=o,yn(e,o)}}function df(e,s){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=s:e.next=s,o.lastBaseUpdate=s}var ff=!1;function Sl(){if(ff){var e=Mr;if(e!==null)throw e}}function kl(e,s,o,l){ff=!1;var f=e.updateQueue;va=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,j=f.shared.pending;if(j!==null){f.shared.pending=null;var V=j,de=V.next;V.next=null,v===null?m=de:v.next=de,v=V;var ke=e.alternate;ke!==null&&(ke=ke.updateQueue,j=ke.lastBaseUpdate,j!==v&&(j===null?ke.firstBaseUpdate=de:j.next=de,ke.lastBaseUpdate=V))}if(m!==null){var ze=f.baseState;v=0,ke=de=V=null,j=m;do{var he=j.lane&-536870913,xe=he!==j.lane;if(xe?(Cn&he)===he:(l&he)===he){he!==0&&he===jr&&(ff=!0),ke!==null&&(ke=ke.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var Ct=e,Gt=j;he=s;var as=o;switch(Gt.tag){case 1:if(Ct=Gt.payload,typeof Ct=="function"){ze=Ct.call(as,ze,he);break e}ze=Ct;break e;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Gt.payload,he=typeof Ct=="function"?Ct.call(as,ze,he):Ct,he==null)break e;ze=x({},ze,he);break e;case 2:va=!0}}he=j.callback,he!==null&&(e.flags|=64,xe&&(e.flags|=8192),xe=f.callbacks,xe===null?f.callbacks=[he]:xe.push(he))}else xe={lane:he,tag:j.tag,payload:j.payload,callback:j.callback,next:null},ke===null?(de=ke=xe,V=ze):ke=ke.next=xe,v|=he;if(j=j.next,j===null){if(j=f.shared.pending,j===null)break;xe=j,j=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);ke===null&&(V=ze),f.baseState=V,f.firstBaseUpdate=de,f.lastBaseUpdate=ke,m===null&&(f.shared.lanes=0),Ta|=v,e.lanes=v,e.memoizedState=ze}}function f_(e,s){if(typeof e!="function")throw Error(a(191,e));e.call(s)}function h_(e,s){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)f_(o[e],s)}var Dr=B(null),Gc=B(0);function m_(e,s){e=la,L(Gc,e),L(Dr,s),la=e|s.baseLanes}function hf(){L(Gc,la),L(Dr,Dr.current)}function mf(){la=Gc.current,P(Dr),P(Gc)}var Jo=B(null),mi=null;function ka(e){var s=e.alternate;L(Os,Os.current&1),L(Jo,e),mi===null&&(s===null||Dr.current!==null||s.memoizedState!==null)&&(mi=e)}function pf(e){L(Os,Os.current),L(Jo,e),mi===null&&(mi=e)}function p_(e){e.tag===22?(L(Os,Os.current),L(Jo,e),mi===null&&(mi=e)):Ca()}function Ca(){L(Os,Os.current),L(Jo,Jo.current)}function ei(e){P(Jo),mi===e&&(mi=null),P(Os)}var Os=B(0);function Kc(e){for(var s=e;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||vh(o)||wh(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ea=0,fn=null,os=null,Fs=null,Qc=!1,Ar=!1,or=!1,Zc=0,Cl=0,Nr=null,e2=0;function As(){throw Error(a(321))}function _f(e,s){if(s===null)return!1;for(var o=0;o<s.length&&o<e.length;o++)if(!vt(e[o],s[o]))return!1;return!0}function gf(e,s,o,l,f,m){return ea=m,fn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,z.H=e===null||e.memoizedState===null?Z_:Nf,or=!1,m=o(l,f),or=!1,Ar&&(m=g_(s,o,l,f)),__(e),m}function __(e){z.H=Tl;var s=os!==null&&os.next!==null;if(ea=0,Fs=os=fn=null,Qc=!1,Cl=0,Nr=null,s)throw Error(a(300));e===null||Xs||(e=e.dependencies,e!==null&&Vc(e)&&(Xs=!0))}function g_(e,s,o,l){fn=e;var f=0;do{if(Ar&&(Nr=null),Cl=0,Ar=!1,25<=f)throw Error(a(301));if(f+=1,Fs=os=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=J_,m=s(o,l)}while(Ar);return m}function t2(){var e=z.H,s=e.useState()[0];return s=typeof s.then=="function"?jl(s):s,e=e.useState()[0],(os!==null?os.memoizedState:null)!==e&&(fn.flags|=1024),s}function yf(){var e=Zc!==0;return Zc=0,e}function xf(e,s,o){s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~o}function bf(e){if(Qc){for(e=e.memoizedState;e!==null;){var s=e.queue;s!==null&&(s.pending=null),e=e.next}Qc=!1}ea=0,Fs=os=fn=null,Ar=!1,Cl=Zc=0,Nr=null}function Ro(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fs===null?fn.memoizedState=Fs=e:Fs=Fs.next=e,Fs}function zs(){if(os===null){var e=fn.alternate;e=e!==null?e.memoizedState:null}else e=os.next;var s=Fs===null?fn.memoizedState:Fs.next;if(s!==null)Fs=s,os=e;else{if(e===null)throw fn.alternate===null?Error(a(467)):Error(a(310));os=e,e={memoizedState:os.memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},Fs===null?fn.memoizedState=Fs=e:Fs=Fs.next=e}return Fs}function Jc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(e){var s=Cl;return Cl+=1,Nr===null&&(Nr=[]),e=r_(Nr,e,s),s=fn,(Fs===null?s.memoizedState:Fs.next)===null&&(s=s.alternate,z.H=s===null||s.memoizedState===null?Z_:Nf),e}function eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===A)return po(e)}throw Error(a(438,String(e)))}function vf(e){var s=null,o=fn.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var l=fn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Jc(),fn.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(e),l=0;l<e;l++)o[l]=ne;return s.index++,o}function ta(e,s){return typeof s=="function"?s(e):s}function tu(e){var s=zs();return wf(s,os,e)}function wf(e,s,o){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=o;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{s=f.next;var j=v=null,V=null,de=s,ke=!1;do{var ze=de.lane&-536870913;if(ze!==de.lane?(Cn&ze)===ze:(ea&ze)===ze){var he=de.revertLane;if(he===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),ze===jr&&(ke=!0);else if((ea&he)===he){de=de.next,he===jr&&(ke=!0);continue}else ze={lane:0,revertLane:de.revertLane,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},V===null?(j=V=ze,v=m):V=V.next=ze,fn.lanes|=he,Ta|=he;ze=de.action,or&&o(m,ze),m=de.hasEagerState?de.eagerState:o(m,ze)}else he={lane:ze,revertLane:de.revertLane,gesture:de.gesture,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},V===null?(j=V=he,v=m):V=V.next=he,fn.lanes|=ze,Ta|=ze;de=de.next}while(de!==null&&de!==s);if(V===null?v=m:V.next=j,!vt(m,e.memoizedState)&&(Xs=!0,ke&&(o=Mr,o!==null)))throw o;e.memoizedState=m,e.baseState=v,e.baseQueue=V,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sf(e){var s=zs(),o=s.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var l=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=e(m,v.action),v=v.next;while(v!==f);vt(m,s.memoizedState)||(Xs=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,l]}function y_(e,s,o){var l=fn,f=zs(),m=Mn;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=s();var v=!vt((os||f).memoizedState,o);if(v&&(f.memoizedState=o,Xs=!0),f=f.queue,jf(v_.bind(null,l,f,e),[e]),f.getSnapshot!==s||v||Fs!==null&&Fs.memoizedState.tag&1){if(l.flags|=2048,Rr(9,{destroy:void 0},b_.bind(null,l,f,o,s),null),us===null)throw Error(a(349));m||(ea&127)!==0||x_(l,s,o)}return o}function x_(e,s,o){e.flags|=16384,e={getSnapshot:s,value:o},s=fn.updateQueue,s===null?(s=Jc(),fn.updateQueue=s,s.stores=[e]):(o=s.stores,o===null?s.stores=[e]:o.push(e))}function b_(e,s,o,l){s.value=o,s.getSnapshot=l,w_(s)&&S_(e)}function v_(e,s,o){return o(function(){w_(s)&&S_(e)})}function w_(e){var s=e.getSnapshot;e=e.value;try{var o=s();return!vt(e,o)}catch{return!0}}function S_(e){var s=Ga(e,2);s!==null&&Wo(s,e,2)}function kf(e){var s=Ro();if(typeof e=="function"){var o=e;if(e=o(),or){Ae(!0);try{o()}finally{Ae(!1)}}}return s.memoizedState=s.baseState=e,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},s}function k_(e,s,o,l){return e.baseState=o,wf(e,os,typeof l=="function"?l:ta)}function n2(e,s,o,l,f){if(ou(e))throw Error(a(485));if(e=s.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};z.T!==null?o(!0):m.isTransition=!1,l(m),o=s.pending,o===null?(m.next=s.pending=m,C_(s,m)):(m.next=o.next,s.pending=o.next=m)}}function C_(e,s){var o=s.action,l=s.payload,f=e.state;if(s.isTransition){var m=z.T,v={};z.T=v;try{var j=o(f,l),V=z.S;V!==null&&V(v,j),j_(e,s,j)}catch(de){Cf(e,s,de)}finally{m!==null&&v.types!==null&&(m.types=v.types),z.T=m}}else try{m=o(f,l),j_(e,s,m)}catch(de){Cf(e,s,de)}}function j_(e,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){M_(e,s,l)},function(l){return Cf(e,s,l)}):M_(e,s,o)}function M_(e,s,o){s.status="fulfilled",s.value=o,T_(s),e.state=o,s=e.pending,s!==null&&(o=s.next,o===s?e.pending=null:(o=o.next,s.next=o,C_(e,o)))}function Cf(e,s,o){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=o,T_(s),s=s.next;while(s!==l)}e.action=null}function T_(e){e=e.listeners;for(var s=0;s<e.length;s++)(0,e[s])()}function E_(e,s){return s}function D_(e,s){if(Mn){var o=us.formState;if(o!==null){e:{var l=fn;if(Mn){if(bs){t:{for(var f=bs,m=hi;f.nodeType!==8;){if(!m){f=null;break t}if(f=pi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){bs=pi(f.nextSibling),l=f.data==="F!";break e}}xa(l)}l=!1}l&&(s=o[0])}}return o=Ro(),o.memoizedState=o.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E_,lastRenderedState:s},o.queue=l,o=G_.bind(null,fn,l),l.dispatch=o,l=kf(!1),m=Af.bind(null,fn,!1,l.queue),l=Ro(),f={state:s,dispatch:null,action:e,pending:null},l.queue=f,o=n2.bind(null,fn,f,m,o),f.dispatch=o,l.memoizedState=e,[s,o,!1]}function A_(e){var s=zs();return N_(s,os,e)}function N_(e,s,o){if(s=wf(e,s,E_)[0],e=tu(ta)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=jl(s)}catch(v){throw v===Tr?Yc:v}else l=s;s=zs();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(fn.flags|=2048,Rr(9,{destroy:void 0},s2.bind(null,f,o),null)),[l,m,e]}function s2(e,s){e.action=s}function R_(e){var s=zs(),o=os;if(o!==null)return N_(s,o,e);zs(),s=s.memoizedState,o=zs();var l=o.queue.dispatch;return o.memoizedState=e,[s,l,!1]}function Rr(e,s,o,l){return e={tag:e,create:o,deps:l,inst:s,next:null},s=fn.updateQueue,s===null&&(s=Jc(),fn.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,s.lastEffect=e),e}function B_(){return zs().memoizedState}function nu(e,s,o,l){var f=Ro();fn.flags|=e,f.memoizedState=Rr(1|s,{destroy:void 0},o,l===void 0?null:l)}function su(e,s,o,l){var f=zs();l=l===void 0?null:l;var m=f.memoizedState.inst;os!==null&&l!==null&&_f(l,os.memoizedState.deps)?f.memoizedState=Rr(s,m,o,l):(fn.flags|=e,f.memoizedState=Rr(1|s,m,o,l))}function L_(e,s){nu(8390656,8,e,s)}function jf(e,s){su(2048,8,e,s)}function o2(e){fn.flags|=4;var s=fn.updateQueue;if(s===null)s=Jc(),fn.updateQueue=s,s.events=[e];else{var o=s.events;o===null?s.events=[e]:o.push(e)}}function O_(e){var s=zs().memoizedState;return o2({ref:s,nextImpl:e}),function(){if((Un&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}function z_(e,s){return su(4,2,e,s)}function $_(e,s){return su(4,4,e,s)}function I_(e,s){if(typeof s=="function"){e=e();var o=s(e);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function P_(e,s,o){o=o!=null?o.concat([e]):null,su(4,4,I_.bind(null,s,e),o)}function Mf(){}function H_(e,s){var o=zs();s=s===void 0?null:s;var l=o.memoizedState;return s!==null&&_f(s,l[1])?l[0]:(o.memoizedState=[e,s],e)}function V_(e,s){var o=zs();s=s===void 0?null:s;var l=o.memoizedState;if(s!==null&&_f(s,l[1]))return l[0];if(l=e(),or){Ae(!0);try{e()}finally{Ae(!1)}}return o.memoizedState=[l,s],l}function Tf(e,s,o){return o===void 0||(ea&1073741824)!==0&&(Cn&261930)===0?e.memoizedState=s:(e.memoizedState=o,e=Ug(),fn.lanes|=e,Ta|=e,o)}function U_(e,s,o,l){return vt(o,s)?o:Dr.current!==null?(e=Tf(e,o,l),vt(e,s)||(Xs=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Cn&261930)===0?(Xs=!0,e.memoizedState=o):(e=Ug(),fn.lanes|=e,Ta|=e,s)}function W_(e,s,o,l,f){var m=me.p;me.p=m!==0&&8>m?m:8;var v=z.T,j={};z.T=j,Af(e,!1,s,o);try{var V=f(),de=z.S;if(de!==null&&de(j,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ke=J5(V,l);Ml(e,s,ke,si(e))}else Ml(e,s,l,si(e))}catch(ze){Ml(e,s,{then:function(){},status:"rejected",reason:ze},si())}finally{me.p=m,v!==null&&j.types!==null&&(v.types=j.types),z.T=v}}function i2(){}function Ef(e,s,o,l){if(e.tag!==5)throw Error(a(476));var f=Y_(e).queue;W_(e,f,s,G,o===null?i2:function(){return F_(e),o(l)})}function Y_(e){var s=e.memoizedState;if(s!==null)return s;s={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:G},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:o},next:null},e.memoizedState=s,e=e.alternate,e!==null&&(e.memoizedState=s),s}function F_(e){var s=Y_(e);s.next===null&&(s=e.alternate.memoizedState),Ml(e,s.next.queue,{},si())}function Df(){return po(Wl)}function X_(){return zs().memoizedState}function q_(){return zs().memoizedState}function a2(e){for(var s=e.return;s!==null;){switch(s.tag){case 24:case 3:var o=si();e=wa(o);var l=Sa(s,e,o);l!==null&&(Wo(l,s,o),wl(l,s,o)),s={cache:of()},e.payload=s;return}s=s.return}}function r2(e,s,o){var l=si();o={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ou(e)?K_(s,o):(o=Xd(e,s,o,l),o!==null&&(Wo(o,e,l),Q_(o,s,l)))}function G_(e,s,o){var l=si();Ml(e,s,o,l)}function Ml(e,s,o,l){var f={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(ou(e))K_(s,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,j=m(v,o);if(f.hasEagerState=!0,f.eagerState=j,vt(j,v))return $c(e,s,f,0),us===null&&zc(),!1}catch{}finally{}if(o=Xd(e,s,f,l),o!==null)return Wo(o,e,l),Q_(o,s,l),!0}return!1}function Af(e,s,o,l){if(l={lane:2,revertLane:ch(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ou(e)){if(s)throw Error(a(479))}else s=Xd(e,o,l,2),s!==null&&Wo(s,e,2)}function ou(e){var s=e.alternate;return e===fn||s!==null&&s===fn}function K_(e,s){Ar=Qc=!0;var o=e.pending;o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s}function Q_(e,s,o){if((o&4194048)!==0){var l=s.lanes;l&=e.pendingLanes,o|=l,s.lanes=o,yn(e,o)}}var Tl={readContext:po,use:eu,useCallback:As,useContext:As,useEffect:As,useImperativeHandle:As,useLayoutEffect:As,useInsertionEffect:As,useMemo:As,useReducer:As,useRef:As,useState:As,useDebugValue:As,useDeferredValue:As,useTransition:As,useSyncExternalStore:As,useId:As,useHostTransitionStatus:As,useFormState:As,useActionState:As,useOptimistic:As,useMemoCache:As,useCacheRefresh:As};Tl.useEffectEvent=As;var Z_={readContext:po,use:eu,useCallback:function(e,s){return Ro().memoizedState=[e,s===void 0?null:s],e},useContext:po,useEffect:L_,useImperativeHandle:function(e,s,o){o=o!=null?o.concat([e]):null,nu(4194308,4,I_.bind(null,s,e),o)},useLayoutEffect:function(e,s){return nu(4194308,4,e,s)},useInsertionEffect:function(e,s){nu(4,2,e,s)},useMemo:function(e,s){var o=Ro();s=s===void 0?null:s;var l=e();if(or){Ae(!0);try{e()}finally{Ae(!1)}}return o.memoizedState=[l,s],l},useReducer:function(e,s,o){var l=Ro();if(o!==void 0){var f=o(s);if(or){Ae(!0);try{o(s)}finally{Ae(!1)}}}else f=s;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=r2.bind(null,fn,e),[l.memoizedState,e]},useRef:function(e){var s=Ro();return e={current:e},s.memoizedState=e},useState:function(e){e=kf(e);var s=e.queue,o=G_.bind(null,fn,s);return s.dispatch=o,[e.memoizedState,o]},useDebugValue:Mf,useDeferredValue:function(e,s){var o=Ro();return Tf(o,e,s)},useTransition:function(){var e=kf(!1);return e=W_.bind(null,fn,e.queue,!0,!1),Ro().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,s,o){var l=fn,f=Ro();if(Mn){if(o===void 0)throw Error(a(407));o=o()}else{if(o=s(),us===null)throw Error(a(349));(Cn&127)!==0||x_(l,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,L_(v_.bind(null,l,m,e),[e]),l.flags|=2048,Rr(9,{destroy:void 0},b_.bind(null,l,m,o,s),null),o},useId:function(){var e=Ro(),s=us.identifierPrefix;if(Mn){var o=$i,l=zi;o=(l&~(1<<32-Rt(l)-1)).toString(32)+o,s="_"+s+"R_"+o,o=Zc++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=e2++,s="_"+s+"r_"+o.toString(32)+"_";return e.memoizedState=s},useHostTransitionStatus:Df,useFormState:D_,useActionState:D_,useOptimistic:function(e){var s=Ro();s.memoizedState=s.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Af.bind(null,fn,!0,o),o.dispatch=s,[e,s]},useMemoCache:vf,useCacheRefresh:function(){return Ro().memoizedState=a2.bind(null,fn)},useEffectEvent:function(e){var s=Ro(),o={impl:e};return s.memoizedState=o,function(){if((Un&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Nf={readContext:po,use:eu,useCallback:H_,useContext:po,useEffect:jf,useImperativeHandle:P_,useInsertionEffect:z_,useLayoutEffect:$_,useMemo:V_,useReducer:tu,useRef:B_,useState:function(){return tu(ta)},useDebugValue:Mf,useDeferredValue:function(e,s){var o=zs();return U_(o,os.memoizedState,e,s)},useTransition:function(){var e=tu(ta)[0],s=zs().memoizedState;return[typeof e=="boolean"?e:jl(e),s]},useSyncExternalStore:y_,useId:X_,useHostTransitionStatus:Df,useFormState:A_,useActionState:A_,useOptimistic:function(e,s){var o=zs();return k_(o,os,e,s)},useMemoCache:vf,useCacheRefresh:q_};Nf.useEffectEvent=O_;var J_={readContext:po,use:eu,useCallback:H_,useContext:po,useEffect:jf,useImperativeHandle:P_,useInsertionEffect:z_,useLayoutEffect:$_,useMemo:V_,useReducer:Sf,useRef:B_,useState:function(){return Sf(ta)},useDebugValue:Mf,useDeferredValue:function(e,s){var o=zs();return os===null?Tf(o,e,s):U_(o,os.memoizedState,e,s)},useTransition:function(){var e=Sf(ta)[0],s=zs().memoizedState;return[typeof e=="boolean"?e:jl(e),s]},useSyncExternalStore:y_,useId:X_,useHostTransitionStatus:Df,useFormState:R_,useActionState:R_,useOptimistic:function(e,s){var o=zs();return os!==null?k_(o,os,e,s):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:vf,useCacheRefresh:q_};J_.useEffectEvent=O_;function Rf(e,s,o,l){s=e.memoizedState,o=o(l,s),o=o==null?s:x({},s,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Bf={enqueueSetState:function(e,s,o){e=e._reactInternals;var l=si(),f=wa(l);f.payload=s,o!=null&&(f.callback=o),s=Sa(e,f,l),s!==null&&(Wo(s,e,l),wl(s,e,l))},enqueueReplaceState:function(e,s,o){e=e._reactInternals;var l=si(),f=wa(l);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Sa(e,f,l),s!==null&&(Wo(s,e,l),wl(s,e,l))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var o=si(),l=wa(o);l.tag=2,s!=null&&(l.callback=s),s=Sa(e,l,o),s!==null&&(Wo(s,e,o),wl(s,e,o))}};function eg(e,s,o,l,f,m,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,v):s.prototype&&s.prototype.isPureReactComponent?!pt(o,l)||!pt(f,m):!0}function tg(e,s,o,l){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,l),s.state!==e&&Bf.enqueueReplaceState(s,s.state,null)}function ir(e,s){var o=s;if("ref"in s){o={};for(var l in s)l!=="ref"&&(o[l]=s[l])}if(e=e.defaultProps){o===s&&(o=x({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function ng(e){Oc(e)}function sg(e){console.error(e)}function og(e){Oc(e)}function iu(e,s){try{var o=e.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function ig(e,s,o){try{var l=e.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Lf(e,s,o){return o=wa(o),o.tag=3,o.payload={element:null},o.callback=function(){iu(e,s)},o}function ag(e){return e=wa(e),e.tag=3,e}function rg(e,s,o,l){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){ig(s,o,l)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ig(s,o,l),typeof f!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var j=l.stack;this.componentDidCatch(l.value,{componentStack:j!==null?j:""})})}function l2(e,s,o,l,f){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=o.alternate,s!==null&&Cr(s,o,f,!0),o=Jo.current,o!==null){switch(o.tag){case 31:case 13:return mi===null?gu():o.alternate===null&&Ns===0&&(Ns=3),o.flags&=-257,o.flags|=65536,o.lanes=f,l===Fc?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([l]):s.add(l),ah(e,l,f)),!1;case 22:return o.flags|=65536,l===Fc?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([l]):o.add(l)),ah(e,l,f)),!1}throw Error(a(435,o.tag))}return ah(e,l,f),gu(),!1}if(Mn)return s=Jo.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==Jd&&(e=Error(a(422),{cause:l}),gl(ui(e,o)))):(l!==Jd&&(s=Error(a(423),{cause:l}),gl(ui(s,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ui(l,o),f=Lf(e.stateNode,l,f),df(e,f),Ns!==4&&(Ns=2)),!1;var m=Error(a(520),{cause:l});if(m=ui(m,o),Ol===null?Ol=[m]:Ol.push(m),Ns!==4&&(Ns=2),s===null)return!0;l=ui(l,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Lf(o.stateNode,l,e),df(o,e),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ea===null||!Ea.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=ag(f),rg(f,e,o,l),df(o,f),!1}o=o.return}while(o!==null);return!1}var Of=Error(a(461)),Xs=!1;function _o(e,s,o,l){s.child=e===null?d_(s,null,o,l):sr(s,e.child,o,l)}function lg(e,s,o,l,f){o=o.render;var m=s.ref;if("ref"in l){var v={};for(var j in l)j!=="ref"&&(v[j]=l[j])}else v=l;return Ja(s),l=gf(e,s,o,v,m,f),j=yf(),e!==null&&!Xs?(xf(e,s,f),na(e,s,f)):(Mn&&j&&Qd(s),s.flags|=1,_o(e,s,l,f),s.child)}function cg(e,s,o,l,f){if(e===null){var m=o.type;return typeof m=="function"&&!qd(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,ug(e,s,m,l,f)):(e=Pc(o.type,null,l,s,s.mode,f),e.ref=s.ref,e.return=s,s.child=e)}if(m=e.child,!Wf(e,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:pt,o(v,l)&&e.ref===s.ref)return na(e,s,f)}return s.flags|=1,e=Ki(m,l),e.ref=s.ref,e.return=s,s.child=e}function ug(e,s,o,l,f){if(e!==null){var m=e.memoizedProps;if(pt(m,l)&&e.ref===s.ref)if(Xs=!1,s.pendingProps=l=m,Wf(e,f))(e.flags&131072)!==0&&(Xs=!0);else return s.lanes=e.lanes,na(e,s,f)}return zf(e,s,o,l,f)}function dg(e,s,o,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,e!==null){for(l=s.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,s.child=null;return fg(e,s,m,o,l)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wc(s,m!==null?m.cachePool:null),m!==null?m_(s,m):hf(),p_(s);else return l=s.lanes=536870912,fg(e,s,m!==null?m.baseLanes|o:o,o,l)}else m!==null?(Wc(s,m.cachePool),m_(s,m),Ca(),s.memoizedState=null):(e!==null&&Wc(s,null),hf(),Ca());return _o(e,s,f,o),s.child}function El(e,s){return e!==null&&e.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function fg(e,s,o,l,f){var m=rf();return m=m===null?null:{parent:Ys._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},e!==null&&Wc(s,null),hf(),p_(s),e!==null&&Cr(e,s,l,!0),s.childLanes=f,null}function au(e,s){return s=lu({mode:s.mode,children:s.children},e.mode),s.ref=e.ref,e.child=s,s.return=e,s}function hg(e,s,o){return sr(s,e.child,null,o),e=au(s,s.pendingProps),e.flags|=2,ei(s),s.memoizedState=null,e}function c2(e,s,o){var l=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,e===null){if(Mn){if(l.mode==="hidden")return e=au(s,l),s.lanes=536870912,El(null,e);if(pf(s),(e=bs)?(e=C0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ga!==null?{id:zi,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},o=Kp(e),o.return=s,s.child=o,mo=s,bs=null)):e=null,e===null)throw xa(s);return s.lanes=536870912,null}return au(s,l)}var m=e.memoizedState;if(m!==null){var v=m.dehydrated;if(pf(s),f)if(s.flags&256)s.flags&=-257,s=hg(e,s,o);else if(s.memoizedState!==null)s.child=e.child,s.flags|=128,s=null;else throw Error(a(558));else if(Xs||Cr(e,s,o,!1),f=(o&e.childLanes)!==0,Xs||f){if(l=us,l!==null&&(v=Jn(l,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ga(e,v),Wo(l,e,v),Of;gu(),s=hg(e,s,o)}else e=m.treeContext,bs=pi(v.nextSibling),mo=s,Mn=!0,ya=null,hi=!1,e!==null&&Jp(s,e),s=au(s,l),s.flags|=4096;return s}return e=Ki(e.child,{mode:l.mode,children:l.children}),e.ref=s.ref,s.child=e,e.return=s,e}function ru(e,s){var o=s.ref;if(o===null)e!==null&&e.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(s.flags|=4194816)}}function zf(e,s,o,l,f){return Ja(s),o=gf(e,s,o,l,void 0,f),l=yf(),e!==null&&!Xs?(xf(e,s,f),na(e,s,f)):(Mn&&l&&Qd(s),s.flags|=1,_o(e,s,o,f),s.child)}function mg(e,s,o,l,f,m){return Ja(s),s.updateQueue=null,o=g_(s,l,o,f),__(e),l=yf(),e!==null&&!Xs?(xf(e,s,m),na(e,s,m)):(Mn&&l&&Qd(s),s.flags|=1,_o(e,s,o,m),s.child)}function pg(e,s,o,l,f){if(Ja(s),s.stateNode===null){var m=vr,v=o.contextType;typeof v=="object"&&v!==null&&(m=po(v)),m=new o(l,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Bf,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=l,m.state=s.memoizedState,m.refs={},cf(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?po(v):vr,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Rf(s,o,v,l),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Bf.enqueueReplaceState(m,m.state,null),kl(s,l,m,f),Sl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(e===null){m=s.stateNode;var j=s.memoizedProps,V=ir(o,j);m.props=V;var de=m.context,ke=o.contextType;v=vr,typeof ke=="object"&&ke!==null&&(v=po(ke));var ze=o.getDerivedStateFromProps;ke=typeof ze=="function"||typeof m.getSnapshotBeforeUpdate=="function",j=s.pendingProps!==j,ke||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j||de!==v)&&tg(s,m,l,v),va=!1;var he=s.memoizedState;m.state=he,kl(s,l,m,f),Sl(),de=s.memoizedState,j||he!==de||va?(typeof ze=="function"&&(Rf(s,o,ze,l),de=s.memoizedState),(V=va||eg(s,o,V,l,he,de,v))?(ke||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=de),m.props=l,m.state=de,m.context=v,l=V):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{m=s.stateNode,uf(e,s),v=s.memoizedProps,ke=ir(o,v),m.props=ke,ze=s.pendingProps,he=m.context,de=o.contextType,V=vr,typeof de=="object"&&de!==null&&(V=po(de)),j=o.getDerivedStateFromProps,(de=typeof j=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ze||he!==V)&&tg(s,m,l,V),va=!1,he=s.memoizedState,m.state=he,kl(s,l,m,f),Sl();var xe=s.memoizedState;v!==ze||he!==xe||va||e!==null&&e.dependencies!==null&&Vc(e.dependencies)?(typeof j=="function"&&(Rf(s,o,j,l),xe=s.memoizedState),(ke=va||eg(s,o,ke,l,he,xe,V)||e!==null&&e.dependencies!==null&&Vc(e.dependencies))?(de||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,xe,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,xe,V)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&he===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&he===e.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=xe),m.props=l,m.state=xe,m.context=V,l=ke):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&he===e.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&he===e.memoizedState||(s.flags|=1024),l=!1)}return m=l,ru(e,s),l=(s.flags&128)!==0,m||l?(m=s.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,e!==null&&l?(s.child=sr(s,e.child,null,f),s.child=sr(s,null,o,f)):_o(e,s,o,f),s.memoizedState=m.state,e=s.child):e=na(e,s,f),e}function _g(e,s,o,l){return Qa(),s.flags|=256,_o(e,s,o,l),s.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(e){return{baseLanes:e,cachePool:i_()}}function Pf(e,s,o){return e=e!==null?e.childLanes&~o:0,s&&(e|=ni),e}function gg(e,s,o){var l=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(Os.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,e===null){if(Mn){if(f?ka(s):Ca(),(e=bs)?(e=C0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(s.memoizedState={dehydrated:e,treeContext:ga!==null?{id:zi,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},o=Kp(e),o.return=s,s.child=o,mo=s,bs=null)):e=null,e===null)throw xa(s);return wh(e)?s.lanes=32:s.lanes=536870912,null}var j=l.children;return l=l.fallback,f?(Ca(),f=s.mode,j=lu({mode:"hidden",children:j},f),l=Ka(l,f,o,null),j.return=s,l.return=s,j.sibling=l,s.child=j,l=s.child,l.memoizedState=If(o),l.childLanes=Pf(e,v,o),s.memoizedState=$f,El(null,l)):(ka(s),Hf(s,j))}var V=e.memoizedState;if(V!==null&&(j=V.dehydrated,j!==null)){if(m)s.flags&256?(ka(s),s.flags&=-257,s=Vf(e,s,o)):s.memoizedState!==null?(Ca(),s.child=e.child,s.flags|=128,s=null):(Ca(),j=l.fallback,f=s.mode,l=lu({mode:"visible",children:l.children},f),j=Ka(j,f,o,null),j.flags|=2,l.return=s,j.return=s,l.sibling=j,s.child=l,sr(s,e.child,null,o),l=s.child,l.memoizedState=If(o),l.childLanes=Pf(e,v,o),s.memoizedState=$f,s=El(null,l));else if(ka(s),wh(j)){if(v=j.nextSibling&&j.nextSibling.dataset,v)var de=v.dgst;v=de,l=Error(a(419)),l.stack="",l.digest=v,gl({value:l,source:null,stack:null}),s=Vf(e,s,o)}else if(Xs||Cr(e,s,o,!1),v=(o&e.childLanes)!==0,Xs||v){if(v=us,v!==null&&(l=Jn(v,o),l!==0&&l!==V.retryLane))throw V.retryLane=l,Ga(e,l),Wo(v,e,l),Of;vh(j)||gu(),s=Vf(e,s,o)}else vh(j)?(s.flags|=192,s.child=e.child,s=null):(e=V.treeContext,bs=pi(j.nextSibling),mo=s,Mn=!0,ya=null,hi=!1,e!==null&&Jp(s,e),s=Hf(s,l.children),s.flags|=4096);return s}return f?(Ca(),j=l.fallback,f=s.mode,V=e.child,de=V.sibling,l=Ki(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,de!==null?j=Ki(de,j):(j=Ka(j,f,o,null),j.flags|=2),j.return=s,l.return=s,l.sibling=j,s.child=l,El(null,l),l=s.child,j=e.child.memoizedState,j===null?j=If(o):(f=j.cachePool,f!==null?(V=Ys._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=i_(),j={baseLanes:j.baseLanes|o,cachePool:f}),l.memoizedState=j,l.childLanes=Pf(e,v,o),s.memoizedState=$f,El(e.child,l)):(ka(s),o=e.child,e=o.sibling,o=Ki(o,{mode:"visible",children:l.children}),o.return=s,o.sibling=null,e!==null&&(v=s.deletions,v===null?(s.deletions=[e],s.flags|=16):v.push(e)),s.child=o,s.memoizedState=null,o)}function Hf(e,s){return s=lu({mode:"visible",children:s},e.mode),s.return=e,e.child=s}function lu(e,s){return e=Zo(22,e,null,s),e.lanes=0,e}function Vf(e,s,o){return sr(s,e.child,null,o),e=Hf(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function yg(e,s,o){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s),nf(e.return,s,o)}function Uf(e,s,o,l,f,m){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f,treeForkCount:m}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=o,v.tailMode=f,v.treeForkCount=m)}function xg(e,s,o){var l=s.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var v=Os.current,j=(v&2)!==0;if(j?(v=v&1|2,s.flags|=128):v&=1,L(Os,v),_o(e,s,l,o),l=Mn?_l:0,!j&&e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,o,s);else if(e.tag===19)yg(e,o,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=s.child,f=null;o!==null;)e=o.alternate,e!==null&&Kc(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Uf(s,!1,f,o,m,l);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(e=f.alternate,e!==null&&Kc(e)===null){s.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}Uf(s,!0,o,null,m,l);break;case"together":Uf(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function na(e,s,o){if(e!==null&&(s.dependencies=e.dependencies),Ta|=s.lanes,(o&s.childLanes)===0)if(e!==null){if(Cr(e,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(e!==null&&s.child!==e.child)throw Error(a(153));if(s.child!==null){for(e=s.child,o=Ki(e,e.pendingProps),s.child=o,o.return=s;e.sibling!==null;)e=e.sibling,o=o.sibling=Ki(e,e.pendingProps),o.return=s;o.sibling=null}return s.child}function Wf(e,s){return(e.lanes&s)!==0?!0:(e=e.dependencies,!!(e!==null&&Vc(e)))}function u2(e,s,o){switch(s.tag){case 3:Qe(s,s.stateNode.containerInfo),ba(s,Ys,e.memoizedState.cache),Qa();break;case 27:case 5:Ut(s);break;case 4:Qe(s,s.stateNode.containerInfo);break;case 10:ba(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,pf(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(ka(s),s.flags|=128,null):(o&s.child.childLanes)!==0?gg(e,s,o):(ka(s),e=na(e,s,o),e!==null?e.sibling:null);ka(s);break;case 19:var f=(e.flags&128)!==0;if(l=(o&s.childLanes)!==0,l||(Cr(e,s,o,!1),l=(o&s.childLanes)!==0),f){if(l)return xg(e,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),L(Os,Os.current),l)break;return null;case 22:return s.lanes=0,dg(e,s,o,s.pendingProps);case 24:ba(s,Ys,e.memoizedState.cache)}return na(e,s,o)}function bg(e,s,o){if(e!==null)if(e.memoizedProps!==s.pendingProps)Xs=!0;else{if(!Wf(e,o)&&(s.flags&128)===0)return Xs=!1,u2(e,s,o);Xs=(e.flags&131072)!==0}else Xs=!1,Mn&&(s.flags&1048576)!==0&&Zp(s,_l,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(e=tr(s.elementType),s.type=e,typeof e=="function")qd(e)?(l=ir(e,l),s.tag=1,s=pg(null,s,e,l,o)):(s.tag=0,s=zf(null,s,e,l,o));else{if(e!=null){var f=e.$$typeof;if(f===T){s.tag=11,s=lg(null,s,e,l,o);break e}else if(f===U){s.tag=14,s=cg(null,s,e,l,o);break e}}throw s=ue(e)||e,Error(a(306,s,""))}}return s;case 0:return zf(e,s,s.type,s.pendingProps,o);case 1:return l=s.type,f=ir(l,s.pendingProps),pg(e,s,l,f,o);case 3:e:{if(Qe(s,s.stateNode.containerInfo),e===null)throw Error(a(387));l=s.pendingProps;var m=s.memoizedState;f=m.element,uf(e,s),kl(s,l,null,o);var v=s.memoizedState;if(l=v.cache,ba(s,Ys,l),l!==m.cache&&sf(s,[Ys],o,!0),Sl(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=_g(e,s,l,o);break e}else if(l!==f){f=ui(Error(a(424)),s),gl(f),s=_g(e,s,l,o);break e}else{switch(e=s.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bs=pi(e.firstChild),mo=s,Mn=!0,ya=null,hi=!0,o=d_(s,null,l,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Qa(),l===f){s=na(e,s,o);break e}_o(e,s,l,o)}s=s.child}return s;case 26:return ru(e,s),e===null?(o=A0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Mn||(o=s.type,e=s.pendingProps,l=ku(Te.current).createElement(o),l[bn]=s,l[Xn]=e,go(l,o,e),mn(l),s.stateNode=l):s.memoizedState=A0(s.type,e.memoizedProps,s.pendingProps,e.memoizedState),null;case 27:return Ut(s),e===null&&Mn&&(l=s.stateNode=T0(s.type,s.pendingProps,Te.current),mo=s,hi=!0,f=bs,Ra(s.type)?(Sh=f,bs=pi(l.firstChild)):bs=f),_o(e,s,s.pendingProps.children,o),ru(e,s),e===null&&(s.flags|=4194304),s.child;case 5:return e===null&&Mn&&((f=l=bs)&&(l=P2(l,s.type,s.pendingProps,hi),l!==null?(s.stateNode=l,mo=s,bs=pi(l.firstChild),hi=!1,f=!0):f=!1),f||xa(s)),Ut(s),f=s.type,m=s.pendingProps,v=e!==null?e.memoizedProps:null,l=m.children,yh(f,m)?l=null:v!==null&&yh(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=gf(e,s,t2,null,null,o),Wl._currentValue=f),ru(e,s),_o(e,s,l,o),s.child;case 6:return e===null&&Mn&&((e=o=bs)&&(o=H2(o,s.pendingProps,hi),o!==null?(s.stateNode=o,mo=s,bs=null,e=!0):e=!1),e||xa(s)),null;case 13:return gg(e,s,o);case 4:return Qe(s,s.stateNode.containerInfo),l=s.pendingProps,e===null?s.child=sr(s,null,l,o):_o(e,s,l,o),s.child;case 11:return lg(e,s,s.type,s.pendingProps,o);case 7:return _o(e,s,s.pendingProps,o),s.child;case 8:return _o(e,s,s.pendingProps.children,o),s.child;case 12:return _o(e,s,s.pendingProps.children,o),s.child;case 10:return l=s.pendingProps,ba(s,s.type,l.value),_o(e,s,l.children,o),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,Ja(s),f=po(f),l=l(f),s.flags|=1,_o(e,s,l,o),s.child;case 14:return cg(e,s,s.type,s.pendingProps,o);case 15:return ug(e,s,s.type,s.pendingProps,o);case 19:return xg(e,s,o);case 31:return c2(e,s,o);case 22:return dg(e,s,o,s.pendingProps);case 24:return Ja(s),l=po(Ys),e===null?(f=rf(),f===null&&(f=us,m=of(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:l,cache:f},cf(s),ba(s,Ys,f)):((e.lanes&o)!==0&&(uf(e,s),kl(s,null,null,o),Sl()),f=e.memoizedState,m=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ba(s,Ys,l)):(l=m.cache,ba(s,Ys,l),l!==f.cache&&sf(s,[Ys],o,!0))),_o(e,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(a(156,s.tag))}function sa(e){e.flags|=4}function Yf(e,s,o,l,f){if((s=(e.mode&32)!==0)&&(s=!1),s){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Xg())e.flags|=8192;else throw nr=Fc,lf}else e.flags&=-16777217}function vg(e,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!O0(s))if(Xg())e.flags|=8192;else throw nr=Fc,lf}function cu(e,s){s!==null&&(e.flags|=4),e.flags&16384&&(s=e.tag!==22?Bt():536870912,e.lanes|=s,zr|=s)}function Dl(e,s){if(!Mn)switch(e.tailMode){case"hidden":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function vs(e){var s=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(s)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=o,s}function d2(e,s,o){var l=s.pendingProps;switch(Zd(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vs(s),null;case 1:return vs(s),null;case 3:return o=s.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),Ji(Ys),Ze(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(kr(s)?sa(s):e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ef())),vs(s),null;case 26:var f=s.type,m=s.memoizedState;return e===null?(sa(s),m!==null?(vs(s),vg(s,m)):(vs(s),Yf(s,f,null,l,o))):m?m!==e.memoizedState?(sa(s),vs(s),vg(s,m)):(vs(s),s.flags&=-16777217):(e=e.memoizedProps,e!==l&&sa(s),vs(s),Yf(s,f,e,l,o)),null;case 27:if(Ft(s),o=Te.current,f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&sa(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return vs(s),null}e=ie.current,kr(s)?e_(s):(e=T0(f,l,o),s.stateNode=e,sa(s))}return vs(s),null;case 5:if(Ft(s),f=s.type,e!==null&&s.stateNode!=null)e.memoizedProps!==l&&sa(s);else{if(!l){if(s.stateNode===null)throw Error(a(166));return vs(s),null}if(m=ie.current,kr(s))e_(s);else{var v=ku(Te.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}m[bn]=s,m[Xn]=l;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=m;e:switch(go(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&sa(s)}}return vs(s),Yf(s,s.type,e===null?null:e.memoizedProps,s.pendingProps,o),null;case 6:if(e&&s.stateNode!=null)e.memoizedProps!==l&&sa(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(a(166));if(e=Te.current,kr(s)){if(e=s.stateNode,o=s.memoizedProps,l=null,f=mo,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[bn]=s,e=!!(e.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||g0(e.nodeValue,o)),e||xa(s,!0)}else e=ku(e).createTextNode(l),e[bn]=s,s.stateNode=e}return vs(s),null;case 31:if(o=s.memoizedState,e===null||e.memoizedState!==null){if(l=kr(s),o!==null){if(e===null){if(!l)throw Error(a(318));if(e=s.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[bn]=s}else Qa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),e=!1}else o=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return s.flags&256?(ei(s),s):(ei(s),null);if((s.flags&128)!==0)throw Error(a(558))}return vs(s),null;case 13:if(l=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=kr(s),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[bn]=s}else Qa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vs(s),f=!1}else f=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(ei(s),s):(ei(s),null)}return ei(s),(s.flags&128)!==0?(s.lanes=o,s):(o=l!==null,e=e!==null&&e.memoizedState!==null,o&&(l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),o!==e&&o&&(s.child.flags|=8192),cu(s,s.updateQueue),vs(s),null);case 4:return Ze(),e===null&&hh(s.stateNode.containerInfo),vs(s),null;case 10:return Ji(s.type),vs(s),null;case 19:if(P(Os),l=s.memoizedState,l===null)return vs(s),null;if(f=(s.flags&128)!==0,m=l.rendering,m===null)if(f)Dl(l,!1);else{if(Ns!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(m=Kc(e),m!==null){for(s.flags|=128,Dl(l,!1),e=m.updateQueue,s.updateQueue=e,cu(s,e),s.subtreeFlags=0,e=o,o=s.child;o!==null;)Gp(o,e),o=o.sibling;return L(Os,Os.current&1|2),Mn&&Qi(s,l.treeForkCount),s.child}e=e.sibling}l.tail!==null&&Xe()>mu&&(s.flags|=128,f=!0,Dl(l,!1),s.lanes=4194304)}else{if(!f)if(e=Kc(m),e!==null){if(s.flags|=128,f=!0,e=e.updateQueue,s.updateQueue=e,cu(s,e),Dl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Mn)return vs(s),null}else 2*Xe()-l.renderingStartTime>mu&&o!==536870912&&(s.flags|=128,f=!0,Dl(l,!1),s.lanes=4194304);l.isBackwards?(m.sibling=s.child,s.child=m):(e=l.last,e!==null?e.sibling=m:s.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Xe(),e.sibling=null,o=Os.current,L(Os,f?o&1|2:o&1),Mn&&Qi(s,l.treeForkCount),e):(vs(s),null);case 22:case 23:return ei(s),mf(),l=s.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(o&536870912)!==0&&(s.flags&128)===0&&(vs(s),s.subtreeFlags&6&&(s.flags|=8192)):vs(s),o=s.updateQueue,o!==null&&cu(s,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==o&&(s.flags|=2048),e!==null&&P(er),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ji(Ys),vs(s),null;case 25:return null;case 30:return null}throw Error(a(156,s.tag))}function f2(e,s){switch(Zd(s),s.tag){case 1:return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return Ji(Ys),Ze(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 26:case 27:case 5:return Ft(s),null;case 31:if(s.memoizedState!==null){if(ei(s),s.alternate===null)throw Error(a(340));Qa()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 13:if(ei(s),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(a(340));Qa()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return P(Os),null;case 4:return Ze(),null;case 10:return Ji(s.type),null;case 22:case 23:return ei(s),mf(),e!==null&&P(er),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 24:return Ji(Ys),null;case 25:return null;default:return null}}function wg(e,s){switch(Zd(s),s.tag){case 3:Ji(Ys),Ze();break;case 26:case 27:case 5:Ft(s);break;case 4:Ze();break;case 31:s.memoizedState!==null&&ei(s);break;case 13:ei(s);break;case 19:P(Os);break;case 10:Ji(s.type);break;case 22:case 23:ei(s),mf(),e!==null&&P(er);break;case 24:Ji(Ys)}}function Al(e,s){try{var o=s.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var f=l.next;o=f;do{if((o.tag&e)===e){l=void 0;var m=o.create,v=o.inst;l=m(),v.destroy=l}o=o.next}while(o!==f)}}catch(j){Qn(s,s.return,j)}}function ja(e,s,o){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var v=l.inst,j=v.destroy;if(j!==void 0){v.destroy=void 0,f=s;var V=o,de=j;try{de()}catch(ke){Qn(f,V,ke)}}}l=l.next}while(l!==m)}}catch(ke){Qn(s,s.return,ke)}}function Sg(e){var s=e.updateQueue;if(s!==null){var o=e.stateNode;try{h_(s,o)}catch(l){Qn(e,e.return,l)}}}function kg(e,s,o){o.props=ir(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(l){Qn(e,s,l)}}function Nl(e,s){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof o=="function"?e.refCleanup=o(l):o.current=l}}catch(f){Qn(e,s,f)}}function Ii(e,s){var o=e.ref,l=e.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(f){Qn(e,s,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Qn(e,s,f)}else o.current=null}function Cg(e){var s=e.type,o=e.memoizedProps,l=e.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(f){Qn(e,e.return,f)}}function Ff(e,s,o){try{var l=e.stateNode;B2(l,e.type,o,s),l[Xn]=s}catch(f){Qn(e,e.return,f)}}function jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qf(e,s,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(e),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ce));else if(l!==4&&(l===27&&Ra(e.type)&&(o=e.stateNode,s=null),e=e.child,e!==null))for(qf(e,s,o),e=e.sibling;e!==null;)qf(e,s,o),e=e.sibling}function uu(e,s,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?o.insertBefore(e,s):o.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(uu(e,s,o),e=e.sibling;e!==null;)uu(e,s,o),e=e.sibling}function Mg(e){var s=e.stateNode,o=e.memoizedProps;try{for(var l=e.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);go(s,l,o),s[bn]=e,s[Xn]=o}catch(m){Qn(e,e.return,m)}}var oa=!1,qs=!1,Gf=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,ao=null;function h2(e,s){if(e=e.containerInfo,_h=Au,e=Tn(e),Fn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,j=-1,V=-1,de=0,ke=0,ze=e,he=null;t:for(;;){for(var xe;ze!==o||f!==0&&ze.nodeType!==3||(j=v+f),ze!==m||l!==0&&ze.nodeType!==3||(V=v+l),ze.nodeType===3&&(v+=ze.nodeValue.length),(xe=ze.firstChild)!==null;)he=ze,ze=xe;for(;;){if(ze===e)break t;if(he===o&&++de===f&&(j=v),he===m&&++ke===l&&(V=v),(xe=ze.nextSibling)!==null)break;ze=he,he=ze.parentNode}ze=xe}o=j===-1||V===-1?null:{start:j,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(gh={focusedElem:e,selectionRange:o},Au=!1,ao=s;ao!==null;)if(s=ao,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,ao=e;else for(;ao!==null;){switch(s=ao,m=s.alternate,e=s.flags,s.tag){case 0:if((e&4)!==0&&(e=s.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var Ct=ir(o.type,f);e=l.getSnapshotBeforeUpdate(Ct,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Gt){Qn(o,o.return,Gt)}}break;case 3:if((e&1024)!==0){if(e=s.stateNode.containerInfo,o=e.nodeType,o===9)bh(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=s.sibling,e!==null){e.return=s.return,ao=e;break}ao=s.return}}function Eg(e,s,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:aa(e,o),l&4&&Al(5,o);break;case 1:if(aa(e,o),l&4)if(e=o.stateNode,s===null)try{e.componentDidMount()}catch(v){Qn(o,o.return,v)}else{var f=ir(o.type,s.memoizedProps);s=s.memoizedState;try{e.componentDidUpdate(f,s,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Qn(o,o.return,v)}}l&64&&Sg(o),l&512&&Nl(o,o.return);break;case 3:if(aa(e,o),l&64&&(e=o.updateQueue,e!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{h_(e,s)}catch(v){Qn(o,o.return,v)}}break;case 27:s===null&&l&4&&Mg(o);case 26:case 5:aa(e,o),s===null&&l&4&&Cg(o),l&512&&Nl(o,o.return);break;case 12:aa(e,o);break;case 31:aa(e,o),l&4&&Ng(e,o);break;case 13:aa(e,o),l&4&&Rg(e,o),l&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=w2.bind(null,o),V2(e,o))));break;case 22:if(l=o.memoizedState!==null||oa,!l){s=s!==null&&s.memoizedState!==null||qs,f=oa;var m=qs;oa=l,(qs=s)&&!m?ra(e,o,(o.subtreeFlags&8772)!==0):aa(e,o),oa=f,qs=m}break;case 30:break;default:aa(e,o)}}function Dg(e){var s=e.alternate;s!==null&&(e.alternate=null,Dg(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&ro(s)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ks=null,Po=!1;function ia(e,s,o){for(o=o.child;o!==null;)Ag(e,s,o),o=o.sibling}function Ag(e,s,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ve,o)}catch{}switch(o.tag){case 26:qs||Ii(o,s),ia(e,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:qs||Ii(o,s);var l=ks,f=Po;Ra(o.type)&&(ks=o.stateNode,Po=!1),ia(e,s,o),Hl(o.stateNode),ks=l,Po=f;break;case 5:qs||Ii(o,s);case 6:if(l=ks,f=Po,ks=null,ia(e,s,o),ks=l,Po=f,ks!==null)if(Po)try{(ks.nodeType===9?ks.body:ks.nodeName==="HTML"?ks.ownerDocument.body:ks).removeChild(o.stateNode)}catch(m){Qn(o,s,m)}else try{ks.removeChild(o.stateNode)}catch(m){Qn(o,s,m)}break;case 18:ks!==null&&(Po?(e=ks,S0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Yr(e)):S0(ks,o.stateNode));break;case 4:l=ks,f=Po,ks=o.stateNode.containerInfo,Po=!0,ia(e,s,o),ks=l,Po=f;break;case 0:case 11:case 14:case 15:ja(2,o,s),qs||ja(4,o,s),ia(e,s,o);break;case 1:qs||(Ii(o,s),l=o.stateNode,typeof l.componentWillUnmount=="function"&&kg(o,s,l)),ia(e,s,o);break;case 21:ia(e,s,o);break;case 22:qs=(l=qs)||o.memoizedState!==null,ia(e,s,o),qs=l;break;default:ia(e,s,o)}}function Ng(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(o){Qn(s,s.return,o)}}}function Rg(e,s){if(s.memoizedState===null&&(e=s.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(o){Qn(s,s.return,o)}}function m2(e){switch(e.tag){case 31:case 13:case 19:var s=e.stateNode;return s===null&&(s=e.stateNode=new Tg),s;case 22:return e=e.stateNode,s=e._retryCache,s===null&&(s=e._retryCache=new Tg),s;default:throw Error(a(435,e.tag))}}function du(e,s){var o=m2(e);s.forEach(function(l){if(!o.has(l)){o.add(l);var f=S2.bind(null,e,l);l.then(f,f)}})}function Ho(e,s){var o=s.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l],m=e,v=s,j=v;e:for(;j!==null;){switch(j.tag){case 27:if(Ra(j.type)){ks=j.stateNode,Po=!1;break e}break;case 5:ks=j.stateNode,Po=!1;break e;case 3:case 4:ks=j.stateNode.containerInfo,Po=!0;break e}j=j.return}if(ks===null)throw Error(a(160));Ag(m,v,f),ks=null,Po=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)Bg(s,e),s=s.sibling}var ji=null;function Bg(e,s){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ho(s,e),Vo(e),l&4&&(ja(3,e,e.return),Al(3,e),ja(5,e,e.return));break;case 1:Ho(s,e),Vo(e),l&512&&(qs||o===null||Ii(o,o.return)),l&64&&oa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var f=ji;if(Ho(s,e),Vo(e),l&512&&(qs||o===null||Ii(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=e.memoizedState,o===null)if(l===null)if(e.stateNode===null){e:{l=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[An]||m[bn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),go(m,l,o),m[bn]=e,mn(m),l=m;break e;case"link":var v=B0("link","href",f).get(l+(o.href||""));if(v){for(var j=0;j<v.length;j++)if(m=v[j],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(j,1);break t}}m=f.createElement(l),go(m,l,o),f.head.appendChild(m);break;case"meta":if(v=B0("meta","content",f).get(l+(o.content||""))){for(j=0;j<v.length;j++)if(m=v[j],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(j,1);break t}}m=f.createElement(l),go(m,l,o),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[bn]=e,mn(m),l=m}e.stateNode=l}else L0(f,e.type,e.stateNode);else e.stateNode=R0(f,l,e.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?L0(f,e.type,e.stateNode):R0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,o.memoizedProps)}break;case 27:Ho(s,e),Vo(e),l&512&&(qs||o===null||Ii(o,o.return)),o!==null&&l&4&&Ff(e,e.memoizedProps,o.memoizedProps);break;case 5:if(Ho(s,e),Vo(e),l&512&&(qs||o===null||Ii(o,o.return)),e.flags&32){f=e.stateNode;try{fo(f,"")}catch(Ct){Qn(e,e.return,Ct)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Ff(e,f,o!==null?o.memoizedProps:f)),l&1024&&(Gf=!0);break;case 6:if(Ho(s,e),Vo(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,o=e.stateNode;try{o.nodeValue=l}catch(Ct){Qn(e,e.return,Ct)}}break;case 3:if(Mu=null,f=ji,ji=Cu(s.containerInfo),Ho(s,e),ji=f,Vo(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Yr(s.containerInfo)}catch(Ct){Qn(e,e.return,Ct)}Gf&&(Gf=!1,Lg(e));break;case 4:l=ji,ji=Cu(e.stateNode.containerInfo),Ho(s,e),Vo(e),ji=l;break;case 12:Ho(s,e),Vo(e);break;case 31:Ho(s,e),Vo(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 13:Ho(s,e),Vo(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(hu=Xe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 22:f=e.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,de=oa,ke=qs;if(oa=de||f,qs=ke||V,Ho(s,e),qs=ke,oa=de,Vo(e),l&8192)e:for(s=e.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||V||oa||qs||ar(e)),o=null,s=e;;){if(s.tag===5||s.tag===26){if(o===null){V=o=s;try{if(m=V.stateNode,f)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{j=V.stateNode;var ze=V.memoizedProps.style,he=ze!=null&&ze.hasOwnProperty("display")?ze.display:null;j.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(Ct){Qn(V,V.return,Ct)}}}else if(s.tag===6){if(o===null){V=s;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Ct){Qn(V,V.return,Ct)}}}else if(s.tag===18){if(o===null){V=s;try{var xe=V.stateNode;f?k0(xe,!0):k0(V.stateNode,!1)}catch(Ct){Qn(V,V.return,Ct)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=e.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,du(e,o))));break;case 19:Ho(s,e),Vo(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,du(e,l)));break;case 30:break;case 21:break;default:Ho(s,e),Vo(e)}}function Vo(e){var s=e.flags;if(s&2){try{for(var o,l=e.return;l!==null;){if(jg(l)){o=l;break}l=l.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,m=Xf(e);uu(e,m,f);break;case 5:var v=o.stateNode;o.flags&32&&(fo(v,""),o.flags&=-33);var j=Xf(e);uu(e,j,v);break;case 3:case 4:var V=o.stateNode.containerInfo,de=Xf(e);qf(e,de,V);break;default:throw Error(a(161))}}catch(ke){Qn(e,e.return,ke)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var s=e;Lg(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),e=e.sibling}}function aa(e,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)Eg(e,s.alternate,s),s=s.sibling}function ar(e){for(e=e.child;e!==null;){var s=e;switch(s.tag){case 0:case 11:case 14:case 15:ja(4,s,s.return),ar(s);break;case 1:Ii(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&kg(s,s.return,o),ar(s);break;case 27:Hl(s.stateNode);case 26:case 5:Ii(s,s.return),ar(s);break;case 22:s.memoizedState===null&&ar(s);break;case 30:ar(s);break;default:ar(s)}e=e.sibling}}function ra(e,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=e,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:ra(f,m,o),Al(4,m);break;case 1:if(ra(f,m,o),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(de){Qn(l,l.return,de)}if(l=m,f=l.updateQueue,f!==null){var j=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)f_(V[f],j)}catch(de){Qn(l,l.return,de)}}o&&v&64&&Sg(m),Nl(m,m.return);break;case 27:Mg(m);case 26:case 5:ra(f,m,o),o&&l===null&&v&4&&Cg(m),Nl(m,m.return);break;case 12:ra(f,m,o);break;case 31:ra(f,m,o),o&&v&4&&Ng(f,m);break;case 13:ra(f,m,o),o&&v&4&&Rg(f,m);break;case 22:m.memoizedState===null&&ra(f,m,o),Nl(m,m.return);break;case 30:break;default:ra(f,m,o)}s=s.sibling}}function Kf(e,s){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(e=s.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&yl(o))}function Qf(e,s){e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&yl(e))}function Mi(e,s,o,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Og(e,s,o,l),s=s.sibling}function Og(e,s,o,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Mi(e,s,o,l),f&2048&&Al(9,s);break;case 1:Mi(e,s,o,l);break;case 3:Mi(e,s,o,l),f&2048&&(e=null,s.alternate!==null&&(e=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==e&&(s.refCount++,e!=null&&yl(e)));break;case 12:if(f&2048){Mi(e,s,o,l),e=s.stateNode;try{var m=s.memoizedProps,v=m.id,j=m.onPostCommit;typeof j=="function"&&j(v,s.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Qn(s,s.return,V)}}else Mi(e,s,o,l);break;case 31:Mi(e,s,o,l);break;case 13:Mi(e,s,o,l);break;case 23:break;case 22:m=s.stateNode,v=s.alternate,s.memoizedState!==null?m._visibility&2?Mi(e,s,o,l):Rl(e,s):m._visibility&2?Mi(e,s,o,l):(m._visibility|=2,Br(e,s,o,l,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Kf(v,s);break;case 24:Mi(e,s,o,l),f&2048&&Qf(s.alternate,s);break;default:Mi(e,s,o,l)}}function Br(e,s,o,l,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=e,v=s,j=o,V=l,de=v.flags;switch(v.tag){case 0:case 11:case 15:Br(m,v,j,V,f),Al(8,v);break;case 23:break;case 22:var ke=v.stateNode;v.memoizedState!==null?ke._visibility&2?Br(m,v,j,V,f):Rl(m,v):(ke._visibility|=2,Br(m,v,j,V,f)),f&&de&2048&&Kf(v.alternate,v);break;case 24:Br(m,v,j,V,f),f&&de&2048&&Qf(v.alternate,v);break;default:Br(m,v,j,V,f)}s=s.sibling}}function Rl(e,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=e,l=s,f=l.flags;switch(l.tag){case 22:Rl(o,l),f&2048&&Kf(l.alternate,l);break;case 24:Rl(o,l),f&2048&&Qf(l.alternate,l);break;default:Rl(o,l)}s=s.sibling}}var Bl=8192;function Lr(e,s,o){if(e.subtreeFlags&Bl)for(e=e.child;e!==null;)zg(e,s,o),e=e.sibling}function zg(e,s,o){switch(e.tag){case 26:Lr(e,s,o),e.flags&Bl&&e.memoizedState!==null&&ev(o,ji,e.memoizedState,e.memoizedProps);break;case 5:Lr(e,s,o);break;case 3:case 4:var l=ji;ji=Cu(e.stateNode.containerInfo),Lr(e,s,o),ji=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Bl,Bl=16777216,Lr(e,s,o),Bl=l):Lr(e,s,o));break;default:Lr(e,s,o)}}function $g(e){var s=e.alternate;if(s!==null&&(e=s.child,e!==null)){s.child=null;do s=e.sibling,e.sibling=null,e=s;while(e!==null)}}function Ll(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var l=s[o];ao=l,Pg(l,e)}$g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var s=e.stateNode;e.memoizedState!==null&&s._visibility&2&&(e.return===null||e.return.tag!==13)?(s._visibility&=-3,fu(e)):Ll(e);break;default:Ll(e)}}function fu(e){var s=e.deletions;if((e.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var l=s[o];ao=l,Pg(l,e)}$g(e)}for(e=e.child;e!==null;){switch(s=e,s.tag){case 0:case 11:case 15:ja(8,s,s.return),fu(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,fu(s));break;default:fu(s)}e=e.sibling}}function Pg(e,s){for(;ao!==null;){var o=ao;switch(o.tag){case 0:case 11:case 15:ja(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:yl(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,ao=l;else e:for(o=e;ao!==null;){l=ao;var f=l.sibling,m=l.return;if(Dg(l),l===o){ao=null;break e}if(f!==null){f.return=m,ao=f;break e}ao=m}}}var p2={getCacheForType:function(e){var s=po(Ys),o=s.data.get(e);return o===void 0&&(o=e(),s.data.set(e,o)),o},cacheSignal:function(){return po(Ys).controller.signal}},_2=typeof WeakMap=="function"?WeakMap:Map,Un=0,us=null,Sn=null,Cn=0,Kn=0,ti=null,Ma=!1,Or=!1,Zf=!1,la=0,Ns=0,Ta=0,rr=0,Jf=0,ni=0,zr=0,Ol=null,Uo=null,eh=!1,hu=0,Hg=0,mu=1/0,pu=null,Ea=null,eo=0,Da=null,$r=null,ca=0,th=0,nh=null,Vg=null,zl=0,sh=null;function si(){return(Un&2)!==0&&Cn!==0?Cn&-Cn:z.T!==null?ch():ws()}function Ug(){if(ni===0)if((Cn&536870912)===0||Mn){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ni=e}else ni=536870912;return e=Jo.current,e!==null&&(e.flags|=32),ni}function Wo(e,s,o){(e===us&&(Kn===2||Kn===9)||e.cancelPendingCommit!==null)&&(Ir(e,0),Aa(e,Cn,ni,!1)),it(e,o),((Un&2)===0||e!==us)&&(e===us&&((Un&2)===0&&(rr|=o),Ns===4&&Aa(e,Cn,ni,!1)),Pi(e))}function Wg(e,s,o){if((Un&6)!==0)throw Error(a(327));var l=!o&&(s&127)===0&&(s&e.expiredLanes)===0||Wt(e,s),f=l?x2(e,s):ih(e,s,!0),m=l;do{if(f===0){Or&&!l&&Aa(e,s,0,!1);break}else{if(o=e.current.alternate,m&&!g2(o)){f=ih(e,s,!1),m=!1;continue}if(f===2){if(m=s,e.errorRecoveryDisabledLanes&m)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var j=e;f=Ol;var V=j.current.memoizedState.isDehydrated;if(V&&(Ir(j,v).flags|=256),v=ih(j,v,!1),v!==2){if(Zf&&!V){j.errorRecoveryDisabledLanes|=m,rr|=m,f=4;break e}m=Uo,Uo=f,m!==null&&(Uo===null?Uo=m:Uo.push.apply(Uo,m))}f=v}if(m=!1,f!==2)continue}}if(f===1){Ir(e,0),Aa(e,s,0,!0);break}e:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((s&4194048)!==s)break;case 6:Aa(l,s,ni,!Ma);break e;case 2:Uo=null;break;case 3:case 5:break;default:throw Error(a(329))}if((s&62914560)===s&&(f=hu+300-Xe(),10<f)){if(Aa(l,s,ni,!Ma),lt(l,0,!0)!==0)break e;ca=s,l.timeoutHandle=v0(Yg.bind(null,l,o,Uo,pu,eh,s,ni,rr,zr,Ma,m,"Throttled",-0,0),f);break e}Yg(l,o,Uo,pu,eh,s,ni,rr,zr,Ma,m,null,-0,0)}}break}while(!0);Pi(e)}function Yg(e,s,o,l,f,m,v,j,V,de,ke,ze,he,xe){if(e.timeoutHandle=-1,ze=s.subtreeFlags,ze&8192||(ze&16785408)===16785408){ze={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ce},zg(s,m,ze);var Ct=(m&62914560)===m?hu-Xe():(m&4194048)===m?Hg-Xe():0;if(Ct=tv(ze,Ct),Ct!==null){ca=m,e.cancelPendingCommit=Ct(Jg.bind(null,e,s,m,o,l,f,v,j,V,ke,ze,null,he,xe)),Aa(e,m,v,!de);return}}Jg(e,s,m,o,l,f,v,j,V)}function g2(e){for(var s=e;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var f=o[l],m=f.getSnapshot;f=f.value;try{if(!vt(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Aa(e,s,o,l){s&=~Jf,s&=~rr,e.suspendedLanes|=s,e.pingedLanes&=~s,l&&(e.warmLanes|=s),l=e.expirationTimes;for(var f=s;0<f;){var m=31-Rt(f),v=1<<m;l[m]=-1,f&=~v}o!==0&&Dn(e,o,s)}function _u(){return(Un&6)===0?($l(0),!1):!0}function oh(){if(Sn!==null){if(Kn===0)var e=Sn.return;else e=Sn,Zi=Za=null,bf(e),Er=null,bl=0,e=Sn;for(;e!==null;)wg(e.alternate,e),e=e.return;Sn=null}}function Ir(e,s){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,z2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ca=0,oh(),us=e,Sn=o=Ki(e.current,null),Cn=s,Kn=0,ti=null,Ma=!1,Or=Wt(e,s),Zf=!1,zr=ni=Jf=rr=Ta=Ns=0,Uo=Ol=null,eh=!1,(s&8)!==0&&(s|=s&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=s;0<l;){var f=31-Rt(l),m=1<<f;s|=e[f],l&=~m}return la=s,zc(),o}function Fg(e,s){fn=null,z.H=Tl,s===Tr||s===Yc?(s=l_(),Kn=3):s===lf?(s=l_(),Kn=4):Kn=s===Of?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ti=s,Sn===null&&(Ns=1,iu(e,ui(s,e.current)))}function Xg(){var e=Jo.current;return e===null?!0:(Cn&4194048)===Cn?mi===null:(Cn&62914560)===Cn||(Cn&536870912)!==0?e===mi:!1}function qg(){var e=z.H;return z.H=Tl,e===null?Tl:e}function Gg(){var e=z.A;return z.A=p2,e}function gu(){Ns=4,Ma||(Cn&4194048)!==Cn&&Jo.current!==null||(Or=!0),(Ta&134217727)===0&&(rr&134217727)===0||us===null||Aa(us,Cn,ni,!1)}function ih(e,s,o){var l=Un;Un|=2;var f=qg(),m=Gg();(us!==e||Cn!==s)&&(pu=null,Ir(e,s)),s=!1;var v=Ns;e:do try{if(Kn!==0&&Sn!==null){var j=Sn,V=ti;switch(Kn){case 8:oh(),v=6;break e;case 3:case 2:case 9:case 6:Jo.current===null&&(s=!0);var de=Kn;if(Kn=0,ti=null,Pr(e,j,V,de),o&&Or){v=0;break e}break;default:de=Kn,Kn=0,ti=null,Pr(e,j,V,de)}}y2(),v=Ns;break}catch(ke){Fg(e,ke)}while(!0);return s&&e.shellSuspendCounter++,Zi=Za=null,Un=l,z.H=f,z.A=m,Sn===null&&(us=null,Cn=0,zc()),v}function y2(){for(;Sn!==null;)Kg(Sn)}function x2(e,s){var o=Un;Un|=2;var l=qg(),f=Gg();us!==e||Cn!==s?(pu=null,mu=Xe()+500,Ir(e,s)):Or=Wt(e,s);e:do try{if(Kn!==0&&Sn!==null){s=Sn;var m=ti;t:switch(Kn){case 1:Kn=0,ti=null,Pr(e,s,m,1);break;case 2:case 9:if(a_(m)){Kn=0,ti=null,Qg(s);break}s=function(){Kn!==2&&Kn!==9||us!==e||(Kn=7),Pi(e)},m.then(s,s);break e;case 3:Kn=7;break e;case 4:Kn=5;break e;case 7:a_(m)?(Kn=0,ti=null,Qg(s)):(Kn=0,ti=null,Pr(e,s,m,7));break;case 5:var v=null;switch(Sn.tag){case 26:v=Sn.memoizedState;case 5:case 27:var j=Sn;if(v?O0(v):j.stateNode.complete){Kn=0,ti=null;var V=j.sibling;if(V!==null)Sn=V;else{var de=j.return;de!==null?(Sn=de,yu(de)):Sn=null}break t}}Kn=0,ti=null,Pr(e,s,m,5);break;case 6:Kn=0,ti=null,Pr(e,s,m,6);break;case 8:oh(),Ns=6;break e;default:throw Error(a(462))}}b2();break}catch(ke){Fg(e,ke)}while(!0);return Zi=Za=null,z.H=l,z.A=f,Un=o,Sn!==null?0:(us=null,Cn=0,zc(),Ns)}function b2(){for(;Sn!==null&&!Je();)Kg(Sn)}function Kg(e){var s=bg(e.alternate,e,la);e.memoizedProps=e.pendingProps,s===null?yu(e):Sn=s}function Qg(e){var s=e,o=s.alternate;switch(s.tag){case 15:case 0:s=mg(o,s,s.pendingProps,s.type,void 0,Cn);break;case 11:s=mg(o,s,s.pendingProps,s.type.render,s.ref,Cn);break;case 5:bf(s);default:wg(o,s),s=Sn=Gp(s,la),s=bg(o,s,la)}e.memoizedProps=e.pendingProps,s===null?yu(e):Sn=s}function Pr(e,s,o,l){Zi=Za=null,bf(s),Er=null,bl=0;var f=s.return;try{if(l2(e,f,s,o,Cn)){Ns=1,iu(e,ui(o,e.current)),Sn=null;return}}catch(m){if(f!==null)throw Sn=f,m;Ns=1,iu(e,ui(o,e.current)),Sn=null;return}s.flags&32768?(Mn||l===1?e=!0:Or||(Cn&536870912)!==0?e=!1:(Ma=e=!0,(l===2||l===9||l===3||l===6)&&(l=Jo.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zg(s,e)):yu(s)}function yu(e){var s=e;do{if((s.flags&32768)!==0){Zg(s,Ma);return}e=s.return;var o=d2(s.alternate,s,la);if(o!==null){Sn=o;return}if(s=s.sibling,s!==null){Sn=s;return}Sn=s=e}while(s!==null);Ns===0&&(Ns=5)}function Zg(e,s){do{var o=f2(e.alternate,e);if(o!==null){o.flags&=32767,Sn=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(e=e.sibling,e!==null)){Sn=e;return}Sn=e=o}while(e!==null);Ns=6,Sn=null}function Jg(e,s,o,l,f,m,v,j,V){e.cancelPendingCommit=null;do xu();while(eo!==0);if((Un&6)!==0)throw Error(a(327));if(s!==null){if(s===e.current)throw Error(a(177));if(m=s.lanes|s.childLanes,m|=Fd,en(e,o,m,v,j,V),e===us&&(Sn=us=null,Cn=0),$r=s,Da=e,ca=o,th=m,nh=f,Vg=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,k2(Fe,function(){return o0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=me.p,me.p=2,v=Un,Un|=4;try{h2(e,s,o)}finally{Un=v,me.p=f,z.T=l}}eo=1,e0(),t0(),n0()}}function e0(){if(eo===1){eo=0;var e=Da,s=$r,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var l=me.p;me.p=2;var f=Un;Un|=4;try{Bg(s,e);var m=gh,v=Tn(e.containerInfo),j=m.focusedElem,V=m.selectionRange;if(v!==j&&j&&j.ownerDocument&&ys(j.ownerDocument.documentElement,j)){if(V!==null&&Fn(j)){var de=V.start,ke=V.end;if(ke===void 0&&(ke=de),"selectionStart"in j)j.selectionStart=de,j.selectionEnd=Math.min(ke,j.value.length);else{var ze=j.ownerDocument||document,he=ze&&ze.defaultView||window;if(he.getSelection){var xe=he.getSelection(),Ct=j.textContent.length,Gt=Math.min(V.start,Ct),as=V.end===void 0?Gt:Math.min(V.end,Ct);!xe.extend&&Gt>as&&(v=as,as=Gt,Gt=v);var ae=gs(j,Gt),Z=gs(j,as);if(ae&&Z&&(xe.rangeCount!==1||xe.anchorNode!==ae.node||xe.anchorOffset!==ae.offset||xe.focusNode!==Z.node||xe.focusOffset!==Z.offset)){var ce=ze.createRange();ce.setStart(ae.node,ae.offset),xe.removeAllRanges(),Gt>as?(xe.addRange(ce),xe.extend(Z.node,Z.offset)):(ce.setEnd(Z.node,Z.offset),xe.addRange(ce))}}}}for(ze=[],xe=j;xe=xe.parentNode;)xe.nodeType===1&&ze.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<ze.length;j++){var Ne=ze[j];Ne.element.scrollLeft=Ne.left,Ne.element.scrollTop=Ne.top}}Au=!!_h,gh=_h=null}finally{Un=f,me.p=l,z.T=o}}e.current=s,eo=2}}function t0(){if(eo===2){eo=0;var e=Da,s=$r,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var l=me.p;me.p=2;var f=Un;Un|=4;try{Eg(e,s.alternate,s)}finally{Un=f,me.p=l,z.T=o}}eo=3}}function n0(){if(eo===4||eo===3){eo=0,at();var e=Da,s=$r,o=ca,l=Vg;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?eo=5:(eo=0,$r=Da=null,s0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ea=null),ms(o),s=s.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ve,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=z.T,f=me.p,me.p=2,z.T=null;try{for(var m=e.onRecoverableError,v=0;v<l.length;v++){var j=l[v];m(j.value,{componentStack:j.stack})}}finally{z.T=s,me.p=f}}(ca&3)!==0&&xu(),Pi(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===sh?zl++:(zl=0,sh=e):zl=0,$l(0)}}function s0(e,s){(e.pooledCacheLanes&=s)===0&&(s=e.pooledCache,s!=null&&(e.pooledCache=null,yl(s)))}function xu(){return e0(),t0(),n0(),o0()}function o0(){if(eo!==5)return!1;var e=Da,s=th;th=0;var o=ms(ca),l=z.T,f=me.p;try{me.p=32>o?32:o,z.T=null,o=nh,nh=null;var m=Da,v=ca;if(eo=0,$r=Da=null,ca=0,(Un&6)!==0)throw Error(a(331));var j=Un;if(Un|=4,Ig(m.current),Og(m,m.current,v,o),Un=j,$l(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ve,m)}catch{}return!0}finally{me.p=f,z.T=l,s0(e,s)}}function i0(e,s,o){s=ui(o,s),s=Lf(e.stateNode,s,2),e=Sa(e,s,2),e!==null&&(it(e,2),Pi(e))}function Qn(e,s,o){if(e.tag===3)i0(e,e,o);else for(;s!==null;){if(s.tag===3){i0(s,e,o);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ea===null||!Ea.has(l))){e=ui(o,e),o=ag(2),l=Sa(s,o,2),l!==null&&(rg(o,l,s,e),it(l,2),Pi(l));break}}s=s.return}}function ah(e,s,o){var l=e.pingCache;if(l===null){l=e.pingCache=new _2;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(o)||(Zf=!0,f.add(o),e=v2.bind(null,e,s,o),s.then(e,e))}function v2(e,s,o){var l=e.pingCache;l!==null&&l.delete(s),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,us===e&&(Cn&o)===o&&(Ns===4||Ns===3&&(Cn&62914560)===Cn&&300>Xe()-hu?(Un&2)===0&&Ir(e,0):Jf|=o,zr===Cn&&(zr=0)),Pi(e)}function a0(e,s){s===0&&(s=Bt()),e=Ga(e,s),e!==null&&(it(e,s),Pi(e))}function w2(e){var s=e.memoizedState,o=0;s!==null&&(o=s.retryLane),a0(e,o)}function S2(e,s){var o=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(s),a0(e,o)}function k2(e,s){return Ye(e,s)}var bu=null,Hr=null,rh=!1,vu=!1,lh=!1,Na=0;function Pi(e){e!==Hr&&e.next===null&&(Hr===null?bu=Hr=e:Hr=Hr.next=e),vu=!0,rh||(rh=!0,j2())}function $l(e,s){if(!lh&&vu){lh=!0;do for(var o=!1,l=bu;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var v=l.suspendedLanes,j=l.pingedLanes;m=(1<<31-Rt(42|e)+1)-1,m&=f&~(v&~j),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,u0(l,m))}else m=Cn,m=lt(l,l===us?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Wt(l,m)||(o=!0,u0(l,m));l=l.next}while(o);lh=!1}}function C2(){r0()}function r0(){vu=rh=!1;var e=0;Na!==0&&O2()&&(e=Na);for(var s=Xe(),o=null,l=bu;l!==null;){var f=l.next,m=l0(l,s);m===0?(l.next=null,o===null?bu=f:o.next=f,f===null&&(Hr=o)):(o=l,(e!==0||(m&3)!==0)&&(vu=!0)),l=f}eo!==0&&eo!==5||$l(e),Na!==0&&(Na=0)}function l0(e,s){for(var o=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var v=31-Rt(m),j=1<<v,V=f[v];V===-1?((j&o)===0||(j&l)!==0)&&(f[v]=Zt(j,s)):V<=s&&(e.expiredLanes|=j),m&=~j}if(s=us,o=Cn,o=lt(e,e===s?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,o===0||e===s&&(Kn===2||Kn===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&De(l),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Wt(e,o)){if(s=o&-o,s===e.callbackPriority)return s;switch(l!==null&&De(l),ms(o)){case 2:case 8:o=Ie;break;case 32:o=Fe;break;case 268435456:o=J;break;default:o=Fe}return l=c0.bind(null,e),o=Ye(o,l),e.callbackPriority=s,e.callbackNode=o,s}return l!==null&&l!==null&&De(l),e.callbackPriority=2,e.callbackNode=null,2}function c0(e,s){if(eo!==0&&eo!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(xu()&&e.callbackNode!==o)return null;var l=Cn;return l=lt(e,e===us?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Wg(e,l,s),l0(e,Xe()),e.callbackNode!=null&&e.callbackNode===o?c0.bind(null,e):null)}function u0(e,s){if(xu())return null;Wg(e,s,!0)}function j2(){$2(function(){(Un&6)!==0?Ye(ht,C2):r0()})}function ch(){if(Na===0){var e=jr;e===0&&(e=et,et<<=1,(et&261888)===0&&(et=256)),Na=e}return Na}function d0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fe(""+e)}function f0(e,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,e.id&&o.setAttribute("form",e.id),s.parentNode.insertBefore(o,s),e=new FormData(e),o.parentNode.removeChild(o),e}function M2(e,s,o,l,f){if(s==="submit"&&o&&o.stateNode===f){var m=d0((f[Xn]||null).action),v=l.submitter;v&&(s=(s=v[Xn]||null)?d0(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var j=new _t("action","action",null,l,f);e.push({event:j,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Na!==0){var V=v?f0(f,v):new FormData(f);Ef(o,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(j.preventDefault(),V=v?f0(f,v):new FormData(f),Ef(o,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var uh=0;uh<Yd.length;uh++){var dh=Yd[uh],T2=dh.toLowerCase(),E2=dh[0].toUpperCase()+dh.slice(1);Ci(T2,"on"+E2)}Ci(ki,"onAnimationEnd"),Ci(Oi,"onAnimationIteration"),Ci(Lc,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(Vd,"onTransitionRun"),Ci(Ud,"onTransitionStart"),Ci(Wd,"onTransitionCancel"),Ci(Fp,"onTransitionEnd"),ts("onMouseEnter",["mouseout","mouseover"]),ts("onMouseLeave",["mouseout","mouseover"]),ts("onPointerEnter",["pointerout","pointerover"]),ts("onPointerLeave",["pointerout","pointerover"]),Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function h0(e,s){s=(s&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],f=l.event;l=l.listeners;e:{var m=void 0;if(s)for(var v=l.length-1;0<=v;v--){var j=l[v],V=j.instance,de=j.currentTarget;if(j=j.listener,V!==m&&f.isPropagationStopped())break e;m=j,f.currentTarget=de;try{m(f)}catch(ke){Oc(ke)}f.currentTarget=null,m=V}else for(v=0;v<l.length;v++){if(j=l[v],V=j.instance,de=j.currentTarget,j=j.listener,V!==m&&f.isPropagationStopped())break e;m=j,f.currentTarget=de;try{m(f)}catch(ke){Oc(ke)}f.currentTarget=null,m=V}}}}function kn(e,s){var o=s[ps];o===void 0&&(o=s[ps]=new Set);var l=e+"__bubble";o.has(l)||(m0(s,e,2,!1),o.add(l))}function fh(e,s,o){var l=0;s&&(l|=4),m0(o,e,l,s)}var wu="_reactListening"+Math.random().toString(36).slice(2);function hh(e){if(!e[wu]){e[wu]=!0,ai.forEach(function(o){o!=="selectionchange"&&(D2.has(o)||fh(o,!1,e),fh(o,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[wu]||(s[wu]=!0,fh("selectionchange",!1,s))}}function m0(e,s,o,l){switch(U0(s)){case 2:var f=ov;break;case 8:f=iv;break;default:f=Th}o=f.bind(null,s,o,e),f=void 0,!Pn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(s,o,{capture:!0,passive:f}):e.addEventListener(s,o,!0):f!==void 0?e.addEventListener(s,o,{passive:f}):e.addEventListener(s,o,!1)}function mh(e,s,o,l,f){var m=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var j=l.stateNode.containerInfo;if(j===f)break;if(v===4)for(v=l.return;v!==null;){var V=v.tag;if((V===3||V===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;j!==null;){if(v=lo(j),v===null)return;if(V=v.tag,V===5||V===6||V===26||V===27){l=m=v;continue e}j=j.parentNode}}l=l.return}ns(function(){var de=m,ke=st(o),ze=[];e:{var he=Xp.get(e);if(he!==void 0){var xe=_t,Ct=e;switch(e){case"keypress":if(W(o)===0)break e;case"keydown":case"keyup":xe=Qo;break;case"focusin":Ct="focus",xe=ln;break;case"focusout":Ct="blur",xe=ln;break;case"beforeblur":case"afterblur":xe=ln;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=Nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=Ws;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=qa;break;case ki:case Oi:case Lc:xe=ko;break;case Fp:xe=ut;break;case"scroll":case"scrollend":xe=ct;break;case"wheel":xe=gt;break;case"copy":case"cut":case"paste":xe=oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=Bi;break;case"toggle":case"beforetoggle":xe=qt}var Gt=(s&4)!==0,as=!Gt&&(e==="scroll"||e==="scrollend"),ae=Gt?he!==null?he+"Capture":null:he;Gt=[];for(var Z=de,ce;Z!==null;){var Ne=Z;if(ce=Ne.stateNode,Ne=Ne.tag,Ne!==5&&Ne!==26&&Ne!==27||ce===null||ae===null||(Ne=Lt(Z,ae),Ne!=null&&Gt.push(Pl(Z,Ne,ce))),as)break;Z=Z.return}0<Gt.length&&(he=new xe(he,Ct,null,o,ke),ze.push({event:he,listeners:Gt}))}}if((s&7)===0){e:{if(he=e==="mouseover"||e==="pointerover",xe=e==="mouseout"||e==="pointerout",he&&o!==Oe&&(Ct=o.relatedTarget||o.fromElement)&&(lo(Ct)||Ct[nt]))break e;if((xe||he)&&(he=ke.window===ke?ke:(he=ke.ownerDocument)?he.defaultView||he.parentWindow:window,xe?(Ct=o.relatedTarget||o.toElement,xe=de,Ct=Ct?lo(Ct):null,Ct!==null&&(as=u(Ct),Gt=Ct.tag,Ct!==as||Gt!==5&&Gt!==27&&Gt!==6)&&(Ct=null)):(xe=null,Ct=de),xe!==Ct)){if(Gt=Nn,Ne="onMouseLeave",ae="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(Gt=Bi,Ne="onPointerLeave",ae="onPointerEnter",Z="pointer"),as=xe==null?he:Hs(xe),ce=Ct==null?he:Hs(Ct),he=new Gt(Ne,Z+"leave",xe,o,ke),he.target=as,he.relatedTarget=ce,Ne=null,lo(ke)===de&&(Gt=new Gt(ae,Z+"enter",Ct,o,ke),Gt.target=ce,Gt.relatedTarget=as,Ne=Gt),as=Ne,xe&&Ct)t:{for(Gt=A2,ae=xe,Z=Ct,ce=0,Ne=ae;Ne;Ne=Gt(Ne))ce++;Ne=0;for(var Pt=Z;Pt;Pt=Gt(Pt))Ne++;for(;0<ce-Ne;)ae=Gt(ae),ce--;for(;0<Ne-ce;)Z=Gt(Z),Ne--;for(;ce--;){if(ae===Z||Z!==null&&ae===Z.alternate){Gt=ae;break t}ae=Gt(ae),Z=Gt(Z)}Gt=null}else Gt=null;xe!==null&&p0(ze,he,xe,Gt,!1),Ct!==null&&as!==null&&p0(ze,as,Ct,Gt,!0)}}e:{if(he=de?Hs(de):window,xe=he.nodeName&&he.nodeName.toLowerCase(),xe==="select"||xe==="input"&&he.type==="file")var zn=O;else if(ml(he))if(Y)zn=on;else{zn=bt;var Nt=rt}else xe=he.nodeName,!xe||xe.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?de&&Es(de.elementType)&&(zn=O):zn=Ot;if(zn&&(zn=zn(e,de))){pl(ze,zn,o,ke);break e}Nt&&Nt(e,he,de),e==="focusout"&&de&&he.type==="number"&&de.memoizedProps.value!=null&&uo(he,"number",he.value)}switch(Nt=de?Hs(de):window,e){case"focusin":(ml(Nt)||Nt.contentEditable==="true")&&(nn=Nt,xs=de,Rn=null);break;case"focusout":Rn=xs=nn=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,jo(ze,o,ke);break;case"selectionchange":if(Qt)break;case"keydown":case"keyup":jo(ze,o,ke)}var hn;if(wn)e:{switch(e){case"compositionstart":var jn="onCompositionStart";break e;case"compositionend":jn="onCompositionEnd";break e;case"compositionupdate":jn="onCompositionUpdate";break e}jn=void 0}else Gi?Li(e,o)&&(jn="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(jn="onCompositionStart");jn&&(vi&&o.locale!=="ko"&&(Gi||jn!=="onCompositionStart"?jn==="onCompositionEnd"&&Gi&&(hn=D()):(qn=ke,$t="value"in qn?qn.value:qn.textContent,Gi=!0)),Nt=Su(de,jn),0<Nt.length&&(jn=new Et(jn,e,null,o,ke),ze.push({event:jn,listeners:Nt}),hn?jn.data=hn:(hn=Dc(o),hn!==null&&(jn.data=hn)))),(hn=ho?Ac(e,o):Nc(e,o))&&(jn=Su(de,"onBeforeInput"),0<jn.length&&(Nt=new Et("onBeforeInput","beforeinput",null,o,ke),ze.push({event:Nt,listeners:jn}),Nt.data=hn)),M2(ze,e,de,o,ke)}h0(ze,s)})}function Pl(e,s,o){return{instance:e,listener:s,currentTarget:o}}function Su(e,s){for(var o=s+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Lt(e,o),f!=null&&l.unshift(Pl(e,f,m)),f=Lt(e,s),f!=null&&l.push(Pl(e,f,m))),e.tag===3)return l;e=e.return}return[]}function A2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p0(e,s,o,l,f){for(var m=s._reactName,v=[];o!==null&&o!==l;){var j=o,V=j.alternate,de=j.stateNode;if(j=j.tag,V!==null&&V===l)break;j!==5&&j!==26&&j!==27||de===null||(V=de,f?(de=Lt(o,m),de!=null&&v.unshift(Pl(o,de,V))):f||(de=Lt(o,m),de!=null&&v.push(Pl(o,de,V)))),o=o.return}v.length!==0&&e.push({event:s,listeners:v})}var N2=/\r\n?/g,R2=/\u0000|\uFFFD/g;function _0(e){return(typeof e=="string"?e:""+e).replace(N2,`
`).replace(R2,"")}function g0(e,s){return s=_0(s),_0(e)===s}function is(e,s,o,l,f,m){switch(o){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||fo(e,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&fo(e,""+l);break;case"className":Cs(e,"class",l);break;case"tabIndex":Cs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Cs(e,o,l);break;case"style":Ko(e,l,m);break;case"data":if(s!=="object"){Cs(e,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||o!=="href")){e.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=fe(""+l),e.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&is(e,s,"name",f.name,f,null),is(e,s,"formEncType",f.formEncType,f,null),is(e,s,"formMethod",f.formMethod,f,null),is(e,s,"formTarget",f.formTarget,f,null)):(is(e,s,"encType",f.encType,f,null),is(e,s,"method",f.method,f,null),is(e,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=fe(""+l),e.setAttribute(o,l);break;case"onClick":l!=null&&(e.onclick=Ce);break;case"onScroll":l!=null&&kn("scroll",e);break;case"onScrollEnd":l!=null&&kn("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}o=fe(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""+l):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":l===!0?e.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,l):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(o,l):e.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(o):e.setAttribute(o,l);break;case"popover":kn("beforetoggle",e),kn("toggle",e),co(e,"popover",l);break;case"xlinkActuate":Us(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Us(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Us(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Us(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Us(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Us(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Us(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Us(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Us(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":co(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ri.get(o)||o,co(e,o,l))}}function ph(e,s,o,l,f,m){switch(o){case"style":Ko(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof l=="string"?fo(e,l):(typeof l=="number"||typeof l=="bigint")&&fo(e,""+l);break;case"onScroll":l!=null&&kn("scroll",e);break;case"onScrollEnd":l!=null&&kn("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ce);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=e[Xn]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(s,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(s,l,f);break e}o in e?e[o]=l:l===!0?e.setAttribute(o,""):co(e,o,l)}}}function go(e,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kn("error",e),kn("load",e);var l=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:is(e,s,m,v,o,null)}}f&&is(e,s,"srcSet",o.srcSet,o,null),l&&is(e,s,"src",o.src,o,null);return;case"input":kn("invalid",e);var j=m=v=f=null,V=null,de=null;for(l in o)if(o.hasOwnProperty(l)){var ke=o[l];if(ke!=null)switch(l){case"name":f=ke;break;case"type":v=ke;break;case"checked":V=ke;break;case"defaultChecked":de=ke;break;case"value":m=ke;break;case"defaultValue":j=ke;break;case"children":case"dangerouslySetInnerHTML":if(ke!=null)throw Error(a(137,s));break;default:is(e,s,l,ke,o,null)}}Ln(e,m,j,V,de,v,f,!1);return;case"select":kn("invalid",e),l=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(j=o[f],j!=null))switch(f){case"value":m=j;break;case"defaultValue":v=j;break;case"multiple":l=j;default:is(e,s,f,j,o,null)}s=m,o=v,e.multiple=!!l,s!=null?fs(e,!!l,s,!1):o!=null&&fs(e,!!l,o,!0);return;case"textarea":kn("invalid",e),m=f=l=null;for(v in o)if(o.hasOwnProperty(v)&&(j=o[v],j!=null))switch(v){case"value":l=j;break;case"defaultValue":f=j;break;case"children":m=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(91));break;default:is(e,s,v,j,o,null)}So(e,l,f,m);return;case"option":for(V in o)if(o.hasOwnProperty(V)&&(l=o[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:is(e,s,V,l,o,null)}return;case"dialog":kn("beforetoggle",e),kn("toggle",e),kn("cancel",e),kn("close",e);break;case"iframe":case"object":kn("load",e);break;case"video":case"audio":for(l=0;l<Il.length;l++)kn(Il[l],e);break;case"image":kn("error",e),kn("load",e);break;case"details":kn("toggle",e);break;case"embed":case"source":case"link":kn("error",e),kn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in o)if(o.hasOwnProperty(de)&&(l=o[de],l!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,s));default:is(e,s,de,l,o,null)}return;default:if(Es(s)){for(ke in o)o.hasOwnProperty(ke)&&(l=o[ke],l!==void 0&&ph(e,s,ke,l,o,void 0));return}}for(j in o)o.hasOwnProperty(j)&&(l=o[j],l!=null&&is(e,s,j,l,o,null))}function B2(e,s,o,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,j=null,V=null,de=null,ke=null;for(xe in o){var ze=o[xe];if(o.hasOwnProperty(xe)&&ze!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":V=ze;default:l.hasOwnProperty(xe)||is(e,s,xe,null,l,ze)}}for(var he in l){var xe=l[he];if(ze=o[he],l.hasOwnProperty(he)&&(xe!=null||ze!=null))switch(he){case"type":m=xe;break;case"name":f=xe;break;case"checked":de=xe;break;case"defaultChecked":ke=xe;break;case"value":v=xe;break;case"defaultValue":j=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,s));break;default:xe!==ze&&is(e,s,he,xe,l,ze)}}so(e,v,j,V,de,ke,m,f);return;case"select":xe=v=j=he=null;for(m in o)if(V=o[m],o.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":xe=V;default:l.hasOwnProperty(m)||is(e,s,m,null,l,V)}for(f in l)if(m=l[f],V=o[f],l.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":he=m;break;case"defaultValue":j=m;break;case"multiple":v=m;default:m!==V&&is(e,s,f,m,l,V)}s=j,o=v,l=xe,he!=null?fs(e,!!o,he,!1):!!l!=!!o&&(s!=null?fs(e,!!o,s,!0):fs(e,!!o,o?[]:"",!1));return;case"textarea":xe=he=null;for(j in o)if(f=o[j],o.hasOwnProperty(j)&&f!=null&&!l.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:is(e,s,j,null,l,f)}for(v in l)if(f=l[v],m=o[v],l.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":he=f;break;case"defaultValue":xe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&is(e,s,v,f,l,m)}In(e,he,xe);return;case"option":for(var Ct in o)if(he=o[Ct],o.hasOwnProperty(Ct)&&he!=null&&!l.hasOwnProperty(Ct))switch(Ct){case"selected":e.selected=!1;break;default:is(e,s,Ct,null,l,he)}for(V in l)if(he=l[V],xe=o[V],l.hasOwnProperty(V)&&he!==xe&&(he!=null||xe!=null))switch(V){case"selected":e.selected=he&&typeof he!="function"&&typeof he!="symbol";break;default:is(e,s,V,he,l,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Gt in o)he=o[Gt],o.hasOwnProperty(Gt)&&he!=null&&!l.hasOwnProperty(Gt)&&is(e,s,Gt,null,l,he);for(de in l)if(he=l[de],xe=o[de],l.hasOwnProperty(de)&&he!==xe&&(he!=null||xe!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,s));break;default:is(e,s,de,he,l,xe)}return;default:if(Es(s)){for(var as in o)he=o[as],o.hasOwnProperty(as)&&he!==void 0&&!l.hasOwnProperty(as)&&ph(e,s,as,void 0,l,he);for(ke in l)he=l[ke],xe=o[ke],!l.hasOwnProperty(ke)||he===xe||he===void 0&&xe===void 0||ph(e,s,ke,he,l,xe);return}}for(var ae in o)he=o[ae],o.hasOwnProperty(ae)&&he!=null&&!l.hasOwnProperty(ae)&&is(e,s,ae,null,l,he);for(ze in l)he=l[ze],xe=o[ze],!l.hasOwnProperty(ze)||he===xe||he==null&&xe==null||is(e,s,ze,he,l,xe)}function y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function L2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,s=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var f=o[l],m=f.transferSize,v=f.initiatorType,j=f.duration;if(m&&j&&y0(v)){for(v=0,j=f.responseEnd,l+=1;l<o.length;l++){var V=o[l],de=V.startTime;if(de>j)break;var ke=V.transferSize,ze=V.initiatorType;ke&&y0(ze)&&(V=V.responseEnd,v+=ke*(V<j?1:(j-de)/(V-de)))}if(--l,s+=8*(m+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return s/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _h=null,gh=null;function ku(e){return e.nodeType===9?e:e.ownerDocument}function x0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(e,s){if(e===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&s==="foreignObject"?0:e}function yh(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var xh=null;function O2(){var e=window.event;return e&&e.type==="popstate"?e===xh?!1:(xh=e,!0):(xh=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,z2=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,$2=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(I2)}:v0;function I2(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function S0(e,s){var o=s,l=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(l===0){e.removeChild(f),Yr(s);return}l--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")l++;else if(o==="html")Hl(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Hl(o);for(var m=o.firstChild;m;){var v=m.nextSibling,j=m.nodeName;m[An]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Hl(e.ownerDocument.body);o=f}while(o);Yr(s)}function k0(e,s){var o=e;e=0;do{var l=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=l}while(o)}function bh(e){var s=e.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":bh(o),ro(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function P2(e,s,o,l){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[An])switch(s){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(s==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function H2(e,s,o){if(s==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=pi(e.nextSibling),e===null))return null;return e}function C0(e,s){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=pi(e.nextSibling),e===null))return null;return e}function vh(e){return e.data==="$?"||e.data==="$~"}function wh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function V2(e,s){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=s;else if(e.data!=="$?"||o.readyState!=="loading")s();else{var l=function(){s(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function pi(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return e}var Sh=null;function j0(e){e=e.nextSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(s===0)return pi(e.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}e=e.nextSibling}return null}function M0(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return e;s--}else o!=="/$"&&o!=="/&"||s++}e=e.previousSibling}return null}function T0(e,s,o){switch(s=ku(o),e){case"html":if(e=s.documentElement,!e)throw Error(a(452));return e;case"head":if(e=s.head,!e)throw Error(a(453));return e;case"body":if(e=s.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Hl(e){for(var s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ro(e)}var _i=new Map,E0=new Set;function Cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=me.d;me.d={f:U2,r:W2,D:Y2,C:F2,L:X2,m:q2,X:K2,S:G2,M:Q2};function U2(){var e=ua.f(),s=_u();return e||s}function W2(e){var s=Ps(e);s!==null&&s.tag===5&&s.type==="form"?F_(s):ua.r(e)}var Vr=typeof document>"u"?null:document;function D0(e,s,o){var l=Vr;if(l&&typeof s=="string"&&s){var f=js(s);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),E0.has(f)||(E0.add(f),e={rel:e,crossOrigin:o,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),go(s,"link",e),mn(s),l.head.appendChild(s)))}}function Y2(e){ua.D(e),D0("dns-prefetch",e,null)}function F2(e,s){ua.C(e,s),D0("preconnect",e,s)}function X2(e,s,o){ua.L(e,s,o);var l=Vr;if(l&&e&&s){var f='link[rel="preload"][as="'+js(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+js(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+js(o.imageSizes)+'"]')):f+='[href="'+js(e)+'"]';var m=f;switch(s){case"style":m=Ur(e);break;case"script":m=Wr(e)}_i.has(m)||(e=x({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:e,as:s},o),_i.set(m,e),l.querySelector(f)!==null||s==="style"&&l.querySelector(Vl(m))||s==="script"&&l.querySelector(Ul(m))||(s=l.createElement("link"),go(s,"link",e),mn(s),l.head.appendChild(s)))}}function q2(e,s){ua.m(e,s);var o=Vr;if(o&&e){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+js(l)+'"][href="'+js(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Wr(e)}if(!_i.has(m)&&(e=x({rel:"modulepreload",href:e},s),_i.set(m,e),o.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ul(m)))return}l=o.createElement("link"),go(l,"link",e),mn(l),o.head.appendChild(l)}}}function G2(e,s,o){ua.S(e,s,o);var l=Vr;if(l&&e){var f=Ts(l).hoistableStyles,m=Ur(e);s=s||"default";var v=f.get(m);if(!v){var j={loading:0,preload:null};if(v=l.querySelector(Vl(m)))j.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":s},o),(o=_i.get(m))&&kh(e,o);var V=v=l.createElement("link");mn(V),go(V,"link",e),V._p=new Promise(function(de,ke){V.onload=de,V.onerror=ke}),V.addEventListener("load",function(){j.loading|=1}),V.addEventListener("error",function(){j.loading|=2}),j.loading|=4,ju(v,s,l)}v={type:"stylesheet",instance:v,count:1,state:j},f.set(m,v)}}}function K2(e,s){ua.X(e,s);var o=Vr;if(o&&e){var l=Ts(o).hoistableScripts,f=Wr(e),m=l.get(f);m||(m=o.querySelector(Ul(f)),m||(e=x({src:e,async:!0},s),(s=_i.get(f))&&Ch(e,s),m=o.createElement("script"),mn(m),go(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Q2(e,s){ua.M(e,s);var o=Vr;if(o&&e){var l=Ts(o).hoistableScripts,f=Wr(e),m=l.get(f);m||(m=o.querySelector(Ul(f)),m||(e=x({src:e,async:!0,type:"module"},s),(s=_i.get(f))&&Ch(e,s),m=o.createElement("script"),mn(m),go(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function A0(e,s,o,l){var f=(f=Te.current)?Cu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Ur(o.href),o=Ts(f).hoistableStyles,l=o.get(s),l||(l={type:"style",instance:null,count:0,state:null},o.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=Ur(o.href);var m=Ts(f).hoistableStyles,v=m.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,v),(m=f.querySelector(Vl(e)))&&!m._p&&(v.instance=m,v.state.loading=5),_i.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},_i.set(e,o),m||Z2(f,e,o,v.state))),s&&l===null)throw Error(a(528,""));return v}if(s&&l!==null)throw Error(a(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Wr(o),o=Ts(f).hoistableScripts,l=o.get(s),l||(l={type:"script",instance:null,count:0,state:null},o.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ur(e){return'href="'+js(e)+'"'}function Vl(e){return'link[rel="stylesheet"]['+e+"]"}function N0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Z2(e,s,o,l){e.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=e.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),go(s,"link",o),mn(s),e.head.appendChild(s))}function Wr(e){return'[src="'+js(e)+'"]'}function Ul(e){return"script[async]"+e}function R0(e,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var l=e.querySelector('style[data-href~="'+js(o.href)+'"]');if(l)return s.instance=l,mn(l),l;var f=x({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),mn(l),go(l,"style",f),ju(l,o.precedence,e),s.instance=l;case"stylesheet":f=Ur(o.href);var m=e.querySelector(Vl(f));if(m)return s.state.loading|=4,s.instance=m,mn(m),m;l=N0(o),(f=_i.get(f))&&kh(l,f),m=(e.ownerDocument||e).createElement("link"),mn(m);var v=m;return v._p=new Promise(function(j,V){v.onload=j,v.onerror=V}),go(m,"link",l),s.state.loading|=4,ju(m,o.precedence,e),s.instance=m;case"script":return m=Wr(o.src),(f=e.querySelector(Ul(m)))?(s.instance=f,mn(f),f):(l=o,(f=_i.get(m))&&(l=x({},o),Ch(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),mn(f),go(f,"link",l),e.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(a(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,ju(l,o.precedence,e));return s.instance}function ju(e,s,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,v=0;v<l.length;v++){var j=l[v];if(j.dataset.precedence===s)m=j;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(e,s.firstChild))}function kh(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.title==null&&(e.title=s.title)}function Ch(e,s){e.crossOrigin==null&&(e.crossOrigin=s.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=s.referrerPolicy),e.integrity==null&&(e.integrity=s.integrity)}var Mu=null;function B0(e,s,o){if(Mu===null){var l=new Map,f=Mu=new Map;f.set(o,l)}else f=Mu,l=f.get(o),l||(l=new Map,f.set(o,l));if(l.has(e))return l;for(l.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var m=o[f];if(!(m[An]||m[bn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=e+v;var j=l.get(v);j?j.push(m):l.set(v,[m])}}return l}function L0(e,s,o){e=e.ownerDocument||e,e.head.insertBefore(o,s==="title"?e.querySelector("head > title"):null)}function J2(e,s,o){if(o===1||s.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return e=s.disabled,typeof s.precedence=="string"&&e==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function O0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ev(e,s,o,l){if(o.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=Ur(l.href),m=s.querySelector(Vl(f));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(e.count++,e=Tu.bind(e),s.then(e,e)),o.state.loading|=4,o.instance=m,mn(m);return}m=s.ownerDocument||s,l=N0(l),(f=_i.get(f))&&kh(l,f),m=m.createElement("link"),mn(m);var v=m;v._p=new Promise(function(j,V){v.onload=j,v.onerror=V}),go(m,"link",l),o.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Tu.bind(e),s.addEventListener("load",o),s.addEventListener("error",o))}}var jh=0;function tv(e,s){return e.stylesheets&&e.count===0&&Du(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var l=setTimeout(function(){if(e.stylesheets&&Du(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+s);0<e.imgBytes&&jh===0&&(jh=62500*L2());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Du(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>jh?50:800)+s);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Eu=null;function Du(e,s){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Eu=new Map,s.forEach(nv,e),Eu=null,Tu.call(e))}function nv(e,s){if(!(s.state.loading&4)){var o=Eu.get(e);if(o)var l=o.get(null);else{o=new Map,Eu.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),l=v)}l&&o.set(null,l)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||l,m===l&&o.set(null,f),o.set(v,f),this.count++,l=Tu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),s.state.loading|=4}}var Wl={$$typeof:A,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function sv(e,s,o,l,f,m,v,j,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=En(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.hiddenUpdates=En(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function z0(e,s,o,l,f,m,v,j,V,de,ke,ze){return e=new sv(e,s,o,v,V,de,ke,ze,j),s=1,m===!0&&(s|=24),m=Zo(3,null,null,s),e.current=m,m.stateNode=e,s=of(),s.refCount++,e.pooledCache=s,s.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:s},cf(m),e}function $0(e){return e?(e=vr,e):vr}function I0(e,s,o,l,f,m){f=$0(f),l.context===null?l.context=f:l.pendingContext=f,l=wa(s),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=Sa(e,l,s),o!==null&&(Wo(o,e,s),wl(o,e,s))}function P0(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<s?o:s}}function Mh(e,s){P0(e,s),(e=e.alternate)&&P0(e,s)}function H0(e){if(e.tag===13||e.tag===31){var s=Ga(e,67108864);s!==null&&Wo(s,e,67108864),Mh(e,67108864)}}function V0(e){if(e.tag===13||e.tag===31){var s=si();s=Ms(s);var o=Ga(e,s);o!==null&&Wo(o,e,s),Mh(e,s)}}var Au=!0;function ov(e,s,o,l){var f=z.T;z.T=null;var m=me.p;try{me.p=2,Th(e,s,o,l)}finally{me.p=m,z.T=f}}function iv(e,s,o,l){var f=z.T;z.T=null;var m=me.p;try{me.p=8,Th(e,s,o,l)}finally{me.p=m,z.T=f}}function Th(e,s,o,l){if(Au){var f=Eh(l);if(f===null)mh(e,s,l,Nu,o),W0(e,l);else if(rv(f,e,s,o,l))l.stopPropagation();else if(W0(e,l),s&4&&-1<av.indexOf(e)){for(;f!==null;){var m=Ps(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=pn(m.pendingLanes);if(v!==0){var j=m;for(j.pendingLanes|=2,j.entangledLanes|=2;v;){var V=1<<31-Rt(v);j.entanglements[1]|=V,v&=~V}Pi(m),(Un&6)===0&&(mu=Xe()+500,$l(0))}}break;case 31:case 13:j=Ga(m,2),j!==null&&Wo(j,m,2),_u(),Mh(m,2)}if(m=Eh(l),m===null&&mh(e,s,l,Nu,o),m===f)break;f=m}f!==null&&l.stopPropagation()}else mh(e,s,l,null,o)}}function Eh(e){return e=st(e),Dh(e)}var Nu=null;function Dh(e){if(Nu=null,e=lo(e),e!==null){var s=u(e);if(s===null)e=null;else{var o=s.tag;if(o===13){if(e=d(s),e!==null)return e;e=null}else if(o===31){if(e=h(s),e!==null)return e;e=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null)}}return Nu=e,null}function U0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case ht:return 2;case Ie:return 8;case Fe:case I:return 32;case J:return 268435456;default:return 32}default:return 32}}var Ah=!1,Ba=null,La=null,Oa=null,Yl=new Map,Fl=new Map,za=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(e,s){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Yl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(s.pointerId)}}function Xl(e,s,o,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:s,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Ps(s),s!==null&&H0(s)),e):(e.eventSystemFlags|=l,s=e.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),e)}function rv(e,s,o,l,f){switch(s){case"focusin":return Ba=Xl(Ba,e,s,o,l,f),!0;case"dragenter":return La=Xl(La,e,s,o,l,f),!0;case"mouseover":return Oa=Xl(Oa,e,s,o,l,f),!0;case"pointerover":var m=f.pointerId;return Yl.set(m,Xl(Yl.get(m)||null,e,s,o,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Fl.set(m,Xl(Fl.get(m)||null,e,s,o,l,f)),!0}return!1}function Y0(e){var s=lo(e.target);if(s!==null){var o=u(s);if(o!==null){if(s=o.tag,s===13){if(s=d(o),s!==null){e.blockedOn=s,xn(e.priority,function(){V0(o)});return}}else if(s===31){if(s=h(o),s!==null){e.blockedOn=s,xn(e.priority,function(){V0(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ru(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var o=Eh(e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);Oe=l,o.target.dispatchEvent(l),Oe=null}else return s=Ps(o),s!==null&&H0(s),e.blockedOn=o,!1;s.shift()}return!0}function F0(e,s,o){Ru(e)&&o.delete(s)}function lv(){Ah=!1,Ba!==null&&Ru(Ba)&&(Ba=null),La!==null&&Ru(La)&&(La=null),Oa!==null&&Ru(Oa)&&(Oa=null),Yl.forEach(F0),Fl.forEach(F0)}function Bu(e,s){e.blockedOn===s&&(e.blockedOn=null,Ah||(Ah=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,lv)))}var Lu=null;function X0(e){Lu!==e&&(Lu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Lu===e&&(Lu=null);for(var s=0;s<e.length;s+=3){var o=e[s],l=e[s+1],f=e[s+2];if(typeof l!="function"){if(Dh(l||o)===null)continue;break}var m=Ps(o);m!==null&&(e.splice(s,3),s-=3,Ef(m,{pending:!0,data:f,method:o.method,action:l},l,f))}}))}function Yr(e){function s(V){return Bu(V,e)}Ba!==null&&Bu(Ba,e),La!==null&&Bu(La,e),Oa!==null&&Bu(Oa,e),Yl.forEach(s),Fl.forEach(s);for(var o=0;o<za.length;o++){var l=za[o];l.blockedOn===e&&(l.blockedOn=null)}for(;0<za.length&&(o=za[0],o.blockedOn===null);)Y0(o),o.blockedOn===null&&za.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var f=o[l],m=o[l+1],v=f[Xn]||null;if(typeof m=="function")v||X0(o);else if(v){var j=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[Xn]||null)j=v.formAction;else if(Dh(f)!==null)continue}else j=v.action;typeof j=="function"?o[l+1]=j:(o.splice(l,3),l-=3),X0(o)}}}function q0(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function Nh(e){this._internalRoot=e}Ou.prototype.render=Nh.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(a(409));var o=s.current,l=si();I0(o,l,e,s,null,null)},Ou.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;I0(e.current,2,null,e,null,null),_u(),s[nt]=null}};function Ou(e){this._internalRoot=e}Ou.prototype.unstable_scheduleHydration=function(e){if(e){var s=ws();e={blockedOn:null,target:e,priority:s};for(var o=0;o<za.length&&s!==0&&s<za[o].priority;o++);za.splice(o,0,e),o===0&&Y0(e)}};var G0=n.version;if(G0!=="19.2.4")throw Error(a(527,G0,"19.2.4"));me.findDOMNode=function(e){var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(s),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var cv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{Ve=zu.inject(cv),We=zu}catch{}}return Gl.createRoot=function(e,s){if(!c(e))throw Error(a(299));var o=!1,l="",f=ng,m=sg,v=og;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=z0(e,1,!1,null,null,o,l,null,f,m,v,q0),e[nt]=s.current,hh(e),new Nh(s)},Gl.hydrateRoot=function(e,s,o){if(!c(e))throw Error(a(299));var l=!1,f="",m=ng,v=sg,j=og,V=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(j=o.onRecoverableError),o.formState!==void 0&&(V=o.formState)),s=z0(e,1,!0,s,o!=null?o:null,l,f,V,m,v,j,q0),s.context=$0(null),o=s.current,l=si(),l=Ms(l),f=wa(l),f.callback=null,Sa(o,f,l),o=l,s.current.lanes=o,it(s,o),Pi(s),e[nt]=s.current,hh(e),new Ou(s)},Gl.version="19.2.4",Gl}var iy;function yv(){if(iy)return Bh.exports;iy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Bh.exports=gv(),Bh.exports}var xv=yv();const bv=xx(xv);var y=ap();const vv=xx(y);function wv(t,n,i,a){if(typeof n=="function"?t!==n||!a:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?a:i==="a"?a.call(t):a?a.value:n.get(t)}function Sv(t,n,i,a,c){if(typeof n=="function"?t!==n||!0:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(t,i),i}var ud;const xi="__TAURI_TO_IPC_KEY__";function kv(t,n=!1){return window.__TAURI_INTERNALS__.transformCallback(t,n)}async function ge(t,n={},i){return window.__TAURI_INTERNALS__.invoke(t,n,i)}class Cv{get rid(){return wv(this,ud,"f")}constructor(n){ud.set(this,void 0),Sv(this,ud,n)}async close(){return ge("plugin:resources|close",{rid:this.rid})}}ud=new WeakMap;var oi;(function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"})(oi||(oi={}));async function vx(t,n){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t,n),await ge("plugin:event|unlisten",{event:t,eventId:n})}async function lc(t,n,i){var a;const c=typeof(i==null?void 0:i.target)=="string"?{kind:"AnyLabel",label:i.target}:(a=i==null?void 0:i.target)!==null&&a!==void 0?a:{kind:"Any"};return ge("plugin:event|listen",{event:t,target:c,handler:kv(n)}).then(u=>async()=>vx(t,u))}async function jv(t,n,i){return lc(t,a=>{vx(t,a.id),n(a)},i)}async function Mv(t,n){await ge("plugin:event|emit",{event:t,payload:n})}async function Tv(t,n,i){await ge("plugin:event|emit_to",{target:typeof t=="string"?{kind:"AnyLabel",label:t}:t,event:n,payload:i})}class wx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.width=n[0].Logical.width,this.height=n[0].Logical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toPhysical(n){return new cc(this.width*n,this.height*n)}[xi](){return{width:this.width,height:this.height}}toJSON(){return this[xi]()}}class cc{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.width=n[0].Physical.width,this.height=n[0].Physical.height):(this.width=n[0].width,this.height=n[0].height):(this.width=n[0],this.height=n[1])}toLogical(n){return new wx(this.width/n,this.height/n)}[xi](){return{width:this.width,height:this.height}}toJSON(){return this[xi]()}}class Fr{constructor(n){this.size=n}toLogical(n){return this.size instanceof wx?this.size:this.size.toLogical(n)}toPhysical(n){return this.size instanceof cc?this.size:this.size.toPhysical(n)}[xi](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[xi]()}}class Sx{constructor(...n){this.type="Logical",n.length===1?"Logical"in n[0]?(this.x=n[0].Logical.x,this.y=n[0].Logical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toPhysical(n){return new Ua(this.x*n,this.y*n)}[xi](){return{x:this.x,y:this.y}}toJSON(){return this[xi]()}}class Ua{constructor(...n){this.type="Physical",n.length===1?"Physical"in n[0]?(this.x=n[0].Physical.x,this.y=n[0].Physical.y):(this.x=n[0].x,this.y=n[0].y):(this.x=n[0],this.y=n[1])}toLogical(n){return new Sx(this.x/n,this.y/n)}[xi](){return{x:this.x,y:this.y}}toJSON(){return this[xi]()}}class $u{constructor(n){this.position=n}toLogical(n){return this.position instanceof Sx?this.position:this.position.toLogical(n)}toPhysical(n){return this.position instanceof Ua?this.position:this.position.toPhysical(n)}[xi](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[xi]()}}class uc extends Cv{constructor(n){super(n)}static async new(n,i,a){return ge("plugin:image|new",{rgba:bd(n),width:i,height:a}).then(c=>new uc(c))}static async fromBytes(n){return ge("plugin:image|from_bytes",{bytes:bd(n)}).then(i=>new uc(i))}static async fromPath(n){return ge("plugin:image|from_path",{path:n}).then(i=>new uc(i))}async rgba(){return ge("plugin:image|rgba",{rid:this.rid}).then(n=>new Uint8Array(n))}async size(){return ge("plugin:image|size",{rid:this.rid})}}function bd(t){return t==null?null:typeof t=="string"?t:t instanceof uc?t.rid:t}var wm;(function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"})(wm||(wm={}));class Ev{constructor(n){this._preventDefault=!1,this.event=n.event,this.id=n.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var ay;(function(t){t.None="none",t.Normal="normal",t.Indeterminate="indeterminate",t.Paused="paused",t.Error="error"})(ay||(ay={}));function Sm(){return new kx(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Ih(){return ge("plugin:window|get_all_windows").then(t=>t.map(n=>new kx(n,{skip:!0})))}const Ph=["tauri://created","tauri://error"];class kx{constructor(n,i={}){var a;this.label=n,this.listeners=Object.create(null),i!=null&&i.skip||ge("plugin:window|create",{options:{...i,parent:typeof i.parent=="string"?i.parent:(a=i.parent)===null||a===void 0?void 0:a.label,label:n}}).then(async()=>this.emit("tauri://created")).catch(async c=>this.emit("tauri://error",c))}static async getByLabel(n){var i;return(i=(await Ih()).find(a=>a.label===n))!==null&&i!==void 0?i:null}static getCurrent(){return Sm()}static async getAll(){return Ih()}static async getFocusedWindow(){for(const n of await Ih())if(await n.isFocused())return n;return null}async listen(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:lc(n,i,{target:{kind:"Window",label:this.label}})}async once(n,i){return this._handleTauriEvent(n,i)?()=>{const a=this.listeners[n];a.splice(a.indexOf(i),1)}:jv(n,i,{target:{kind:"Window",label:this.label}})}async emit(n,i){if(Ph.includes(n)){for(const a of this.listeners[n]||[])a({event:n,id:-1,payload:i});return}return Mv(n,i)}async emitTo(n,i,a){if(Ph.includes(i)){for(const c of this.listeners[i]||[])c({event:i,id:-1,payload:a});return}return Tv(n,i,a)}_handleTauriEvent(n,i){return Ph.includes(n)?(n in this.listeners?this.listeners[n].push(i):this.listeners[n]=[i],!0):!1}async scaleFactor(){return ge("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ge("plugin:window|inner_position",{label:this.label}).then(n=>new Ua(n))}async outerPosition(){return ge("plugin:window|outer_position",{label:this.label}).then(n=>new Ua(n))}async innerSize(){return ge("plugin:window|inner_size",{label:this.label}).then(n=>new cc(n))}async outerSize(){return ge("plugin:window|outer_size",{label:this.label}).then(n=>new cc(n))}async isFullscreen(){return ge("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ge("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ge("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ge("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ge("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ge("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ge("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ge("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ge("plugin:window|is_closable",{label:this.label})}async isVisible(){return ge("plugin:window|is_visible",{label:this.label})}async title(){return ge("plugin:window|title",{label:this.label})}async theme(){return ge("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ge("plugin:window|is_always_on_top",{label:this.label})}async center(){return ge("plugin:window|center",{label:this.label})}async requestUserAttention(n){let i=null;return n&&(n===wm.Critical?i={type:"Critical"}:i={type:"Informational"}),ge("plugin:window|request_user_attention",{label:this.label,value:i})}async setResizable(n){return ge("plugin:window|set_resizable",{label:this.label,value:n})}async setEnabled(n){return ge("plugin:window|set_enabled",{label:this.label,value:n})}async isEnabled(){return ge("plugin:window|is_enabled",{label:this.label})}async setMaximizable(n){return ge("plugin:window|set_maximizable",{label:this.label,value:n})}async setMinimizable(n){return ge("plugin:window|set_minimizable",{label:this.label,value:n})}async setClosable(n){return ge("plugin:window|set_closable",{label:this.label,value:n})}async setTitle(n){return ge("plugin:window|set_title",{label:this.label,value:n})}async maximize(){return ge("plugin:window|maximize",{label:this.label})}async unmaximize(){return ge("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ge("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ge("plugin:window|minimize",{label:this.label})}async unminimize(){return ge("plugin:window|unminimize",{label:this.label})}async show(){return ge("plugin:window|show",{label:this.label})}async hide(){return ge("plugin:window|hide",{label:this.label})}async close(){return ge("plugin:window|close",{label:this.label})}async destroy(){return ge("plugin:window|destroy",{label:this.label})}async setDecorations(n){return ge("plugin:window|set_decorations",{label:this.label,value:n})}async setShadow(n){return ge("plugin:window|set_shadow",{label:this.label,value:n})}async setEffects(n){return ge("plugin:window|set_effects",{label:this.label,value:n})}async clearEffects(){return ge("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(n){return ge("plugin:window|set_always_on_top",{label:this.label,value:n})}async setAlwaysOnBottom(n){return ge("plugin:window|set_always_on_bottom",{label:this.label,value:n})}async setContentProtected(n){return ge("plugin:window|set_content_protected",{label:this.label,value:n})}async setSize(n){return ge("plugin:window|set_size",{label:this.label,value:n instanceof Fr?n:new Fr(n)})}async setMinSize(n){return ge("plugin:window|set_min_size",{label:this.label,value:n instanceof Fr?n:n?new Fr(n):null})}async setMaxSize(n){return ge("plugin:window|set_max_size",{label:this.label,value:n instanceof Fr?n:n?new Fr(n):null})}async setSizeConstraints(n){function i(a){return a?{Logical:a}:null}return ge("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:i(n==null?void 0:n.minWidth),minHeight:i(n==null?void 0:n.minHeight),maxWidth:i(n==null?void 0:n.maxWidth),maxHeight:i(n==null?void 0:n.maxHeight)}})}async setPosition(n){return ge("plugin:window|set_position",{label:this.label,value:n instanceof $u?n:new $u(n)})}async setFullscreen(n){return ge("plugin:window|set_fullscreen",{label:this.label,value:n})}async setSimpleFullscreen(n){return ge("plugin:window|set_simple_fullscreen",{label:this.label,value:n})}async setFocus(){return ge("plugin:window|set_focus",{label:this.label})}async setFocusable(n){return ge("plugin:window|set_focusable",{label:this.label,value:n})}async setIcon(n){return ge("plugin:window|set_icon",{label:this.label,value:bd(n)})}async setSkipTaskbar(n){return ge("plugin:window|set_skip_taskbar",{label:this.label,value:n})}async setCursorGrab(n){return ge("plugin:window|set_cursor_grab",{label:this.label,value:n})}async setCursorVisible(n){return ge("plugin:window|set_cursor_visible",{label:this.label,value:n})}async setCursorIcon(n){return ge("plugin:window|set_cursor_icon",{label:this.label,value:n})}async setBackgroundColor(n){return ge("plugin:window|set_background_color",{color:n})}async setCursorPosition(n){return ge("plugin:window|set_cursor_position",{label:this.label,value:n instanceof $u?n:new $u(n)})}async setIgnoreCursorEvents(n){return ge("plugin:window|set_ignore_cursor_events",{label:this.label,value:n})}async startDragging(){return ge("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(n){return ge("plugin:window|start_resize_dragging",{label:this.label,value:n})}async setBadgeCount(n){return ge("plugin:window|set_badge_count",{label:this.label,value:n})}async setBadgeLabel(n){return ge("plugin:window|set_badge_label",{label:this.label,value:n})}async setOverlayIcon(n){return ge("plugin:window|set_overlay_icon",{label:this.label,value:n?bd(n):void 0})}async setProgressBar(n){return ge("plugin:window|set_progress_bar",{label:this.label,value:n})}async setVisibleOnAllWorkspaces(n){return ge("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:n})}async setTitleBarStyle(n){return ge("plugin:window|set_title_bar_style",{label:this.label,value:n})}async setTheme(n){return ge("plugin:window|set_theme",{label:this.label,value:n})}async onResized(n){return this.listen(oi.WINDOW_RESIZED,i=>{i.payload=new cc(i.payload),n(i)})}async onMoved(n){return this.listen(oi.WINDOW_MOVED,i=>{i.payload=new Ua(i.payload),n(i)})}async onCloseRequested(n){return this.listen(oi.WINDOW_CLOSE_REQUESTED,async i=>{const a=new Ev(i);await n(a),a.isPreventDefault()||await this.destroy()})}async onDragDropEvent(n){const i=await this.listen(oi.DRAG_ENTER,d=>{n({...d,payload:{type:"enter",paths:d.payload.paths,position:new Ua(d.payload.position)}})}),a=await this.listen(oi.DRAG_OVER,d=>{n({...d,payload:{type:"over",position:new Ua(d.payload.position)}})}),c=await this.listen(oi.DRAG_DROP,d=>{n({...d,payload:{type:"drop",paths:d.payload.paths,position:new Ua(d.payload.position)}})}),u=await this.listen(oi.DRAG_LEAVE,d=>{n({...d,payload:{type:"leave"}})});return()=>{i(),c(),a(),u()}}async onFocusChanged(n){const i=await this.listen(oi.WINDOW_FOCUS,c=>{n({...c,payload:!0})}),a=await this.listen(oi.WINDOW_BLUR,c=>{n({...c,payload:!1})});return()=>{i(),a()}}async onScaleChanged(n){return this.listen(oi.WINDOW_SCALE_FACTOR_CHANGED,n)}async onThemeChanged(n){return this.listen(oi.WINDOW_THEME_CHANGED,n)}}var ry;(function(t){t.Disabled="disabled",t.Throttle="throttle",t.Suspend="suspend"})(ry||(ry={}));var ly;(function(t){t.Default="default",t.FluentOverlay="fluentOverlay"})(ly||(ly={}));var cy;(function(t){t.AppearanceBased="appearanceBased",t.Light="light",t.Dark="dark",t.MediumLight="mediumLight",t.UltraDark="ultraDark",t.Titlebar="titlebar",t.Selection="selection",t.Menu="menu",t.Popover="popover",t.Sidebar="sidebar",t.HeaderView="headerView",t.Sheet="sheet",t.WindowBackground="windowBackground",t.HudWindow="hudWindow",t.FullScreenUI="fullScreenUI",t.Tooltip="tooltip",t.ContentBackground="contentBackground",t.UnderWindowBackground="underWindowBackground",t.UnderPageBackground="underPageBackground",t.Mica="mica",t.Blur="blur",t.Acrylic="acrylic",t.Tabbed="tabbed",t.TabbedDark="tabbedDark",t.TabbedLight="tabbedLight"})(cy||(cy={}));var uy;(function(t){t.FollowsWindowActiveState="followsWindowActiveState",t.Active="active",t.Inactive="inactive"})(uy||(uy={}));function Dv({laneX:t,tipY:n,mergeX:i,mergeY:a,cornerR:c,pointFormatter:u}){if(Math.abs(a-n)<.5)return`M ${u(t,n)} L ${u(i,a)}`;const d=i>=t?1:-1,h=Math.max(0,Math.min(c,Math.abs(a-n),Math.abs(i-t)));if(h<.5)return[`M ${u(t,n)}`,`L ${u(t,a)}`,`L ${u(i,a)}`].join(" ");const p=a-Math.sign(a-n)*h,g=t+d*h;return[`M ${u(t,n)}`,`L ${u(t,p)}`,`Q ${u(t,a)} ${u(g,a)}`,`L ${u(i,a)}`].join(" ")}const Av=3.7,Iu=200,km=240,$s=540,To=176,Hh=32,Sc=20,Nv=km/2,Kl=$s+Nv,Xr=18,qr=18,Vh="#E6E6E6";function dy(t){var n,i;return{start:new Date((i=(n=t.createdDate)!=null?n:t.divergedFromDate)!=null?i:t.lastCommitDate).getTime(),end:new Date(t.lastCommitDate).getTime()}}function el(t,n){return{id:n.fullSha,branchName:t,message:n.message,author:n.author,date:n.date,parentSha:n.parentSha,kind:n.kind}}function da(t){var n,i;return(i=(n=t.id)!=null?n:t.fullSha)!=null?i:""}function Pu(t,n){const i=new Date(t.date).getTime()-new Date(n.date).getTime();return i!==0?i:da(t).localeCompare(da(n))}function vd(t){var h,p,g,_,x;if(t.length<=1)return[...t];const n=new Map(t.map(b=>[da(b),b])),i=new Map,a=new Map;t.forEach(b=>i.set(da(b),0));for(const b of t){const w=(h=b.parentSha)!=null?h:void 0;if(!w||!n.has(w))continue;const S=da(b);i.set(S,((p=i.get(S))!=null?p:0)+1);const C=(g=a.get(w))!=null?g:[];C.push(b),a.set(w,C)}for(const b of a.values())b.sort(Pu);const c=t.filter(b=>{var w;return((w=i.get(da(b)))!=null?w:0)===0}).sort(Pu),u=[],d=new Set;for(;c.length>0;){const b=c.shift(),w=da(b);if(!d.has(w)){d.add(w),u.push(b);for(const S of(_=a.get(w))!=null?_:[]){const C=da(S),k=((x=i.get(C))!=null?x:0)-1;i.set(C,k),k===0&&c.push(S)}c.sort(Pu)}}return u.length===t.length?u:[...u,...t.filter(b=>!d.has(da(b))).sort(Pu)]}function Cx(t,n){var i;return vd(((i=n[t])!=null?i:[]).filter(a=>a.kind!=="branch-created"))}function jx(t,n,i){return Cx(t,i)}function Rv(t,n,i){const a=t.parentBranch;return!a||a===t.name||!n.has(a)?null:a===i?i:a}function Uh(t){var n;return t.length===0?null:(n=[...t].sort((i,a)=>new Date(a.date).getTime()-new Date(i.date).getTime())[0])!=null?n:null}function Bv(t,n){var u,d;if(!n||t.length===0)return Uh(t);const i=new Date(n).getTime();if(!Number.isFinite(i))return Uh(t);let a=null,c=null;for(const h of t){const p=new Date(h.date).getTime();if(Number.isFinite(p))if(p<=i){const g=i-p;(!a||g<a.delta)&&(a={delta:g,commit:h})}else{const g=p-i;(!c||g<c.delta)&&(c={delta:g,commit:h})}}return(d=(u=a==null?void 0:a.commit)!=null?u:c==null?void 0:c.commit)!=null?d:Uh(t)}function Hu(t,n,i){var c,u;if(!n)return null;const a=(c=t.get(n))!=null?c:[];if(a.length===0)return null;if(i){const d=a.find(h=>h.commit.branchName===i);if(d)return d}return(u=a[0])!=null?u:null}function Lv(t,n,i){var _,x,b,w,S,C,k;const a=jx(t,i,n);if(a.length===0)return null;const c=a.map(M=>el(t,M)),u=new Set(c.map(M=>M.id)),d=(x=(_=c[0])==null?void 0:_.parentSha)!=null?x:null,h=(w=(b=c.find(M=>M.kind==="branch-created"))==null?void 0:b.id)!=null?w:null,p=(S=c[0])==null?void 0:S.date,g=c.find(M=>h&&M.id===h||d&&M.id===d?!0:!M.parentSha||!u.has(M.parentSha));return g||((k=(C=Bv(c,p!=null?p:void 0))!=null?C:c[0])!=null?k:null)}function Cm(t,n,i){var c,u,d,h,p;if(t.name===n)return null;const a=Cx(t.name,i);if(a.length>0){const g=a.map(b=>el(t.name,b)),_=new Set(g.map(b=>b.id)),x=(u=(c=g.find(b=>!b.parentSha||!_.has(b.parentSha)))!=null?c:g[0])!=null?u:null;if(x!=null&&x.parentSha)return x.parentSha}return(p=(h=(d=t.presidesFromSha)!=null?d:t.divergedFromSha)!=null?h:t.createdFromSha)!=null?p:null}function Mx(t,n,i={}){var Q,X,ne,le;const c=new Map(t.map(q=>[q.name,q])),u=new Map,d=(q,te)=>{var ye;return te?((ye=i[q])!=null?ye:[]).some(z=>z.fullSha===te||z.sha===te||z.fullSha.startsWith(te)||te.startsWith(z.fullSha)||z.sha.startsWith(te)||te.startsWith(z.sha)):!1},h=new Map;for(const q of t){const ue=((Q=i[q.name])!=null?Q:[]).filter(ye=>ye.kind!=="branch-created").map(ye=>new Date(ye.date).getTime()).filter(ye=>Number.isFinite(ye)).sort((ye,z)=>ye-z)[0];ue!=null&&h.set(q.name,ue)}const p=q=>{const te=h.get(q.name);return te!=null?te:dy(q).start},g=q=>{const te=Rv(q,c,n),ue=Cm(q,n,i);return te&&te!==n?!ue||d(te,ue)?te:n:!te&&!ue?null:te!=null?te:n};for(const q of t){if(q.name===n)continue;const te=(X=g(q))!=null?X:n,ue=(ne=u.get(te))!=null?ne:[];ue.push(q),u.set(te,ue)}for(const q of u.values())q.sort((te,ue)=>p(te)-p(ue)||te.name.localeCompare(ue.name));const _=new Map,x=[],b=new Map,w=new Map;for(const q of Object.values(i))for(const te of q){const ue=new Date(te.date).getTime();Number.isFinite(ue)&&(te.fullSha&&w.set(te.fullSha,ue),te.sha&&w.set(te.sha,ue))}const S=(q,te)=>({start:Math.min(q,te),end:Math.max(q,te)}),C=q=>{var B,P;const te=S(p(q),dy(q).end),ue=[te],ye=te.start,z=Cm(q,n,i),me=z?w.get(z):void 0,G=new Date((P=(B=q.divergedFromDate)!=null?B:q.createdDate)!=null?P:q.lastCommitDate).getTime(),ve=Number.isFinite(me!=null?me:NaN)?me:Number.isFinite(G)?G:null;if(ve==null)return ue;const Me=S(ve,ye);return Me.start!==Me.end&&ue.push(Me),ue},k=Math.max(1,360*60*1e3*Av),M=(q,te)=>!(q.start-te.end>=k||te.start-q.end>=k),R=(q,te)=>te.some(ue=>{var ye;return((ye=b.get(q))!=null?ye:[]).some(z=>M(ue,z))}),A=q=>{var B,P;const te=_.get(q);if(te)return te.column;const ue=c.get(q);if(!ue)return 0;if(q===n){const L={name:q,column:0,parentName:null};_.set(q,L),x.push(L);const ie=C(ue);return b.set(0,[...(B=b.get(0))!=null?B:[],...ie]),0}const ye=g(ue),z=ye?A(ye):0,me=ye?z+1:1,G=C(ue);let ve=me;for(;R(ve,G);)ve+=1;const Me={name:q,column:ve,parentName:ye};return _.set(q,Me),x.push(Me),b.set(ve,[...(P=b.get(ve))!=null?P:[],...G]),ve};A(n);const T=t.filter(q=>!_.has(q.name)).sort((q,te)=>p(q)-p(te)||q.name.localeCompare(te.name)),$=T.filter(q=>g(q)!=null),F=T.filter(q=>g(q)==null);for(const q of $)A(q.name);let U=Math.max(0,...x.map(q=>q.column))+1+1;for(const q of F){const te=C(q);let ue=U;for(;R(ue,te);)ue+=1;const ye={name:q.name,column:ue,parentName:null};_.set(q.name,ye),x.push(ye),b.set(ue,[...(le=b.get(ue))!=null?le:[],...te]),U=ue+1}return x.sort((q,te)=>q.column-te.column||q.name.localeCompare(te.name))}const Vu=2.25,Ia=0,fy=0,Ov=1800*1e3,zv=1440*60*1e3;function hy(t,n,i=new Map){var X,ne,le,q,te,ue,ye,z,me,G,ve,Me,B;if(t.length===0)return new Map;const a=(P,L)=>!P||!L?!1:P===L||P.startsWith(L)||L.startsWith(P),c=vd(t),u=new Map;for(const P of t){const L=(X=P.parentSha)!=null?X:null;if(L){const ie=(ne=u.get(L))!=null?ne:new Set;ie.add(P.id),u.set(L,ie)}for(const ie of(le=i.get(P.id))!=null?le:[]){if(!ie)continue;const $e=(q=u.get(ie))!=null?q:new Set;$e.add(P.id),u.set(ie,$e)}}const d=new Map,h=new Map,p=new Map,g=new Set,_=new Map,x=new Map,b=new Map,w=new Map;for(const P of t){const L=(te=_.get(P.branchName))!=null?te:new Set;L.add(P.id),_.set(P.branchName,L);const ie=(ye=(ue=n.get(P.branchName))==null?void 0:ue.column)!=null?ye:0,$e=(z=x.get(P.id))!=null?z:new Set;$e.add(ie),x.set(P.id,$e);const Te=new Set;P.parentSha&&Te.add(P.parentSha),b.set(P.visualId,Te);const Re=new Set(Te);for(const Qe of(me=i.get(P.id))!=null?me:[])Qe&&Re.add(Qe);w.set(P.visualId,Re)}const S=new Set(Array.from(x.keys())),C=Array.from(S),k=new Map,M=P=>{const L=[];for(const ie of C)a(ie,P)&&L.push(ie);return L},R=new Map;for(const P of C)R.set(P,new Set);for(const P of t){const L=M(P.id);if(L.length===0)continue;const ie=(G=w.get(P.visualId))!=null?G:new Set,$e=new Set;for(const Te of ie)for(const Re of M(Te))$e.add(Re);for(const Te of L){const Re=(ve=R.get(Te))!=null?ve:new Set;for(const Qe of $e)Re.add(Qe);R.set(Te,Re)}}const A=new Map,T=(P,L=new Set)=>{var Re;const ie=A.get(P);if(ie)return ie;if(L.has(P))return new Set;L.add(P);const $e=(Re=R.get(P))!=null?Re:new Set,Te=new Set;for(const Qe of $e){Te.add(Qe);for(const Ze of T(Qe,L))Te.add(Ze)}return L.delete(P),A.set(P,Te),Te},$=(P,L)=>{if(a(P,L))return!0;const ie=M(P),$e=M(L);for(const Te of ie){const Re=T(Te);for(const Qe of $e)if(Re.has(Qe))return!0}for(const Te of $e){const Re=T(Te);for(const Qe of ie)if(Re.has(Qe))return!0}return!1};let F=1;const U=(P,L)=>{var K,Be,Ye,De,Je,at,Xe,dt,ht;const ie=(Be=(K=n.get(P.branchName))==null?void 0:K.column)!=null?Be:0,$e=(Ye=_.get(P.branchName))!=null?Ye:new Set,Re=!(!!P.parentSha&&$e.has(P.parentSha))&&P.parentSha?P.parentSha:null,Qe=Array.from(L).flatMap(Ie=>M(Ie).flatMap(Fe=>{var I;return(I=k.get(Fe))!=null?I:[]})),Ze=Qe.length>0?Math.max(...Qe)+1:1,Ut=(De=u.get(P.id))!=null?De:new Set,Dt=Array.from(Ut).flatMap(Ie=>{var Fe;return Array.from((Fe=x.get(Ie))!=null?Fe:[])}).some(Ie=>Ie!==ie),zt=new Date(P.date).getTime(),sn=Math.max(Ze,1);let rn=null;for(let Ie=sn;Ie<F;Ie+=1){const Fe=(Je=h.get(Ie))!=null?Je:[];if(Fe.length===0||Dt||g.has(Ie))continue;const I=(at=w.get(P.visualId))!=null?at:new Set;if(!(Fe.some(Ve=>$(P.id,Ve.sha)?!0:Array.from(I).some(Ae=>a(Ae,Ve.sha)))||Fe.some(Ve=>Ve.column===ie)||!Number.isFinite(zt)||!Fe.every(Ve=>{if(!Number.isFinite(Ve.time))return!1;const Ae=!!Re&&!!Ve.branchEntryParentSha&&Re===Ve.branchEntryParentSha?zv:Ov;return Math.abs(Ve.time-zt)<=Ae}))){rn=Ie;break}}rn==null&&(rn=Math.max(Ze,F)),d.set(P.visualId,rn),rn>=F&&(F=rn+1);const qe=(Xe=h.get(rn))!=null?Xe:[];qe.push({visualId:P.visualId,sha:P.id,column:ie,time:zt,branchEntryParentSha:Re}),h.set(rn,qe),Dt&&g.add(rn);for(const Ie of L){const Fe=(dt=p.get(Ie))!=null?dt:[];Fe.push(rn),p.set(Ie,Fe)}const Se=(ht=k.get(P.id))!=null?ht:[];Se.push(rn),k.set(P.id,Se)};let Q=[...c];for(;Q.length>0;){const P=[];let L=!1;for(const ie of Q){const $e=(Me=b.get(ie.visualId))!=null?Me:new Set;if(Array.from($e).some(Re=>M(Re).some(Qe=>{var Ze,Ut;return((Ut=(Ze=k.get(Qe))==null?void 0:Ze.length)!=null?Ut:0)===0}))){P.push(ie);continue}U(ie,$e),L=!0}if(!L){const ie=P.shift();if(!ie)break;U(ie,(B=b.get(ie.visualId))!=null?B:new Set)}Q=P}return d}function $v(t,n){if(t.length===0)return[];const i=new Set(Array.from(n).filter(d=>d>=0&&d<t.length)),a=[];let c=[];const u=()=>{c.length!==0&&(a.push({entries:c}),c=[])};for(let d=0;d<t.length;d+=1)c.push(t[d]),i.has(d)&&u();return u(),a}function Iv(t,n){if(t.length===0)return[];const i=[];let a=[],c=null;const u=()=>{a.length!==0&&(i.push(a),a=[])};for(const d of t){const h=n.get(d.item.visualId),p=h!=null&&c!=null&&Math.abs(h-c)===1;a.length>0&&!p&&u(),a.push(d),c=h!=null?h:null}return u(),i}function Tx(t){var lo,Ps,Hs,Ts,mn,ai,vo,Vs,ts,wo,Xo,Do,$o,co,Cs,Us,Bn,bi,Ni,qo,Zs,Ao,No,js,so,Ln,uo,fs,In,So,fo,Go,Kt,Ko,Es,ri,oe,fe,Ce,Oe,st,tt,mt,Jt,Xt,ns,Lt,dn,Pn,On,qn,$t,tn;const{lanes:n,branches:i,mergeNodes:a,directCommits:c,unpushedDirectCommits:u,defaultBranch:d,branchCommitPreviews:h,branchUniqueAheadCounts:p,manuallyOpenedClumps:g,manuallyClosedClumps:_,isDebugOpen:x,gridSearchQuery:b,gridFocusSha:w,checkedOutRef:S,orientation:C="horizontal"}=t,k=C==="horizontal",M=new Map(i.map(D=>[D.name,D])),R=new Map(n.map(D=>[D.name,D])),A=vd([...a.map(D=>{var W,se,re;return{id:D.fullSha,branchName:d,message:(W=D.prTitle)!=null?W:D.sha,author:"",date:D.date,parentSha:(re=(se=D.parentShas)==null?void 0:se[0])!=null?re:null}}),...((lo=h[d])!=null?lo:[]).map(D=>el(d,D)),...c.map(D=>el(d,D)),...u.map(D=>el(d,D))]),T=new Map,$=new Map;for(const D of i){if(D.name===d)continue;const W=jx(D.name,p,h);$.set(D.name,W);const se=vd(W.map(Le=>el(D.name,Le)));if(se.length>0){T.set(D.name,se);continue}const re=(Ts=(Hs=(Ps=D.presidesFromSha)!=null?Ps:D.divergedFromSha)!=null?Hs:D.createdFromSha)!=null?Ts:null;if(!re)continue;const be={id:`BRANCH_HEAD:${D.name}:${re}`,branchName:D.name,message:`Branch ${D.name}`,author:D.lastCommitAuthor,date:(ai=(mn=D.createdDate)!=null?mn:D.divergedFromDate)!=null?ai:D.lastCommitDate,parentSha:null,kind:"branch-created"};T.set(D.name,[be])}const F=new Set(A.map(D=>D.id)),U=(vo=[...A].sort((D,W)=>new Date(D.date).getTime()-new Date(W.date).getTime()||D.id.localeCompare(W.id))[0])!=null?vo:null,Q=new Map(Array.from(T.entries()).map(([D,W])=>[D,new Set(W.map(se=>se.id))])),X=new Map;for(const D of i){if(D.name===d)continue;const W=Lv(D.name,h,p);if(W){X.set(D.name,W);continue}const se=(Vs=T.get(D.name))==null?void 0:Vs[0];if(se){const re=(Xo=(wo=(ts=D.presidesFromSha)!=null?ts:D.divergedFromSha)!=null?wo:D.createdFromSha)!=null?Xo:null;X.set(D.name,{...se,parentSha:re})}}const ne=new Map;for(const[D,W]of T.entries()){const se=W.find(re=>re.kind!=="branch-created");se&&ne.set(D,se)}const le=new Map;for(const[D,W]of T.entries()){const se=W.filter(kt=>kt.kind!=="branch-created"),re=se.length>0?se:W,be=new Set(re.map(kt=>kt.id)),Le=re.find(kt=>!kt.parentSha||!be.has(kt.parentSha)),_t=Le!=null?Le:re[0];_t&&le.set(D,_t)}const q=new Map;for(const D of i){if(D.name===d)continue;const W=(Do=le.get(D.name))!=null?Do:null,se=($o=W==null?void 0:W.parentSha)!=null?$o:null;if(se){q.set(D.name,se);continue}const re=(Cs=(co=X.get(D.name))==null?void 0:co.parentSha)!=null?Cs:null;if(re){q.set(D.name,re);continue}const be=(bi=(Bn=(Us=D.presidesFromSha)!=null?Us:D.divergedFromSha)!=null?Bn:D.createdFromSha)!=null?bi:null;be&&q.set(D.name,be)}const te=D=>{var Le,_t,kt,ct,ot,xt,wt;const W=D.parentBranch;if(!(W&&W!==d&&W!==D.name&&M.has(W)))return W!=null?W:d;const re=(kt=(_t=(Le=q.get(D.name))!=null?Le:D.presidesFromSha)!=null?_t:D.divergedFromSha)!=null?kt:D.createdFromSha;if(re&&((ct=Q.get(W))!=null?ct:new Set).has(re))return W;const be=(xt=(ot=X.get(D.name))==null?void 0:ot.parentSha)!=null?xt:null;return be&&((wt=Q.get(W))!=null?wt:new Set).has(be),W},ue=D=>{var be,Le,_t,kt,ct,ot,xt,wt;const W=X.get(D.name),se=(ct=(kt=(_t=(Le=(be=q.get(D.name))!=null?be:W==null?void 0:W.parentSha)!=null?Le:D.presidesFromSha)!=null?_t:D.divergedFromSha)!=null?kt:D.createdFromSha)!=null?ct:null;if(!D.parentBranch&&!se||!se)return null;if(te(D)===d){if(F.has(se))return se;const _n=(ot=W==null?void 0:W.parentSha)!=null?ot:null;return _n&&F.has(_n)?_n:(wt=(xt=U==null?void 0:U.id)!=null?xt:_n)!=null?wt:se}return F.has(se),se},ye=D=>ue(D),z=new Set;for(const D of i){const W=ye(D);W&&z.add(W);const se=(Ni=q.get(D.name))!=null?Ni:null;se&&z.add(se)}const me=[],G=new Map(Array.from(T.entries()).map(([D,W])=>[D,new Set(W.map(se=>se.id))])),ve=new Set;for(const D of G.values())for(const W of D)ve.add(W);for(const D of A)ve.has(D.id)||me.push({...D,visualId:`${d}:${D.id}`});for(const[D,W]of T.entries())for(const se of W)me.push({...se,visualId:`${D}:${se.id}`});const Me=[...me].sort((D,W)=>new Date(D.date).getTime()-new Date(W.date).getTime()||D.id.localeCompare(W.id)),B=new Map;for(const D of a){const W=D.fullSha;if(!W)continue;const se=((qo=D.parentShas)!=null?qo:[]).filter(be=>!!be&&be!==W);if(se.length===0)continue;const re=(Zs=B.get(W))!=null?Zs:new Set;for(const be of se)re.add(be);B.set(W,re)}const P=new Map;for(const D of i){if(D.name===d)continue;const W=ue(D);W&&P.set(D.name,W)}const L=new Map;for(const D of Me){const W=B.get(D.id);if(W&&W.size>0){const be=(Ao=L.get(D.id))!=null?Ao:new Set;for(const Le of W)be.add(Le);L.set(D.id,be)}if(D.branchName===d)continue;const se=P.get(D.branchName);if(!se||se===D.id)continue;const re=(No=L.get(D.id))!=null?No:new Set;re.add(se),L.set(D.id,re)}const ie=hy(Me,R,L),$e=new Map;for(const D of Me){const W=(js=$e.get(D.branchName))!=null?js:[];W.push(D),$e.set(D.branchName,W)}const Te=new Map;for(const D of i){if(D.name===d)continue;const W=te(D),se=(so=Te.get(W))!=null?so:[];se.push(D),Te.set(W,se)}const Re=new Map,Qe=new Map,Ze=new Map,Ut=new Map,Ft=new Map,Dt=(Ln=S==null?void 0:S.headSha)!=null?Ln:null,zt=(uo=S==null?void 0:S.branchName)!=null?uo:null,sn=(D,W)=>!Dt||zt&&zt!==D?!1:W===Dt||W.startsWith(Dt)||Dt.startsWith(W),rn=(D,W)=>{var kt;if(W.length===0)return[];const se=[...W].sort((ct,ot)=>new Date(ct.date).getTime()-new Date(ot.date).getTime()||ct.id.localeCompare(ot.id)),re=new Set,be=(kt=Te.get(D))!=null?kt:[];if(be.length>0){const ct=se.map(ot=>new Date(ot.date).getTime());be.forEach(ot=>{var ln,vn,ko;const xt=(ln=q.get(ot.name))!=null?ln:null;if(xt){const Ds=se.findIndex(oo=>oo.id===xt||oo.id.startsWith(xt)||xt.startsWith(oo.id));if(Ds>=0){re.add(Ds);return}}const wt=new Date((ko=(vn=ot.divergedFromDate)!=null?vn:ot.createdDate)!=null?ko:ot.lastCommitDate).getTime();if(!Number.isFinite(wt)||ct.length===0)return;let _n=-1,Nn=Number.POSITIVE_INFINITY,Hn=-1,Ws=Number.POSITIVE_INFINITY;for(let Ds=0;Ds<ct.length;Ds+=1){const oo=ct[Ds];if(Number.isFinite(oo))if(oo<=wt){const io=wt-oo;io<Nn&&(Nn=io,_n=Ds)}else{const io=oo-wt;io<Ws&&(Ws=io,Hn=Ds)}}const Bs=_n>=0?_n:Hn;Bs>=0&&re.add(Bs)})}se.forEach((ct,ot)=>{z.has(ct.id)&&ot<se.length-1&&re.add(ot),(ct.kind==="uncommitted"||ct.kind==="stash"||ct.id==="WORKING_TREE"||ct.id.startsWith("STASH:"))&&(ot>0&&re.add(ot-1),re.add(ot)),sn(D,ct.id)&&(ot>0&&re.add(ot-1),re.add(ot))});const Le=$v(se.map(ct=>({item:ct})),re),_t=[];return Le.forEach((ct,ot)=>{Iv(ct.entries,ie).forEach((wt,_n)=>{var ln;const Nn=wt.map(vn=>vn.item);if(Nn.length===0)return;const Hn=`grid-clump-${D}-${Nn[0].id}-${Nn[Nn.length-1].id}-${ot}-${_n}`,Ws=Nn[Nn.length-1].visualId,Bs={branchName:D,key:Hn,commitIds:Nn.map(vn=>vn.visualId),leadId:Ws,count:Nn.length};_t.push(Bs),Ut.set(Hn,Ws),Ft.set(Hn,Nn.length);for(const vn of Bs.commitIds){Qe.set(vn,Hn);const ko=vn.split(":").slice(1).join(":"),Ds=(ln=Ze.get(ko))!=null?ln:[];Ds.includes(Hn)||Ds.push(Hn),Ze.set(ko,Ds)}})}),_t};for(const[D,W]of $e.entries())Re.set(D,rn(D,W));const qe=x?i.flatMap(D=>{var be,Le,_t,kt;const W=(be=h[D.name])!=null?be:[],se=[...(Le=$.get(D.name))!=null?Le:[]].reverse(),re=new Set(((_t=T.get(D.name))!=null?_t:[]).map(ct=>ct.id));return[`Branch ${D.name}`,`  ahead=${(kt=p[D.name])!=null?kt:0} previews=${se.length} rendered=${re.size}`,...se.map(ct=>{const ot=re.has(ct.fullSha)?"visible":"hidden",xt=re.has(ct.fullSha)?"kept by render set":"dropped by render set";return`  ${ot} ${ct.fullSha.slice(0,7)} ${ct.message} [${xt}]`}),W.length===0?"  no preview data":null].filter(ct=>ct!=null)}):[],Se=x?Array.from(T.entries()).map(([D,W])=>[`Branch debug ${D}`,...W.map(se=>`  ${se.id.slice(0,7)} ${se.message}`)].join(`
`)):[],K=ie,Be=km/Vu,Ye=20/Vu,De=k?$s+Be+Ye:Iu+Be+Ye,Je=k?Iu+Be+Ye:Kl,at=Me.map(D=>{var be,Le;const W=R.get(D.branchName),se=(be=K.get(D.visualId))!=null?be:1,re=(Le=W==null?void 0:W.column)!=null?Le:0;return k?{commit:D,row:se,column:re,x:qr+(se-1)*De,y:Xr+re*Je}:{commit:D,row:se,column:re,x:qr+re*Kl,y:Xr+(se-1)*De}}),Xe=b.trim().toLowerCase(),dt=Xe?at.filter(D=>{const W=D.commit.id.toLowerCase(),se=D.commit.id.slice(0,7).toLowerCase(),re=D.commit.message.toLowerCase(),be=D.commit.branchName.toLowerCase();return W.includes(Xe)||se.includes(Xe)||re.includes(Xe)||be.includes(Xe)}):at,ht=w&&(fs=at.find(D=>D.commit.id===w))!=null?fs:null,Ie=new Set(dt.map(D=>D.commit.id)),Fe=(In=S==null?void 0:S.headSha)!=null?In:null,I=(()=>{var W,se;const D=(W=S==null?void 0:S.branchName)!=null?W:null;return!Fe||!D?null:(se=Qe.get(`${D}:${Fe}`))!=null?se:null})(),J=new Set;for(const D of Re.values())for(const W of D)W.count>1&&W.key!==I&&J.add(W.key);const pe=[...Me].filter(D=>{var Le;const W=Qe.get(D.visualId);if(!W)return!0;const se=Ut.get(W),re=(Le=Ft.get(W))!=null?Le:1,be=g.has(W)||!J.has(W)&&!_.has(W);return re<=1||be||se===D.visualId}),we=hy(pe,R,L),Ve=km/Vu,We=20/Vu,Ae=k?$s+Ve+We:Iu+Ve+We,Rt=k?Iu+Ve+We:Kl,Mt=pe.map(D=>{var be,Le;const W=R.get(D.branchName),se=(be=we.get(D.visualId))!=null?be:1,re=(Le=W==null?void 0:W.column)!=null?Le:0;return k?{commit:D,row:se,column:re,x:qr+(se-1)*Ae,y:Xr+re*Rt}:{commit:D,row:se,column:re,x:qr+re*Kl,y:Xr+(se-1)*Ae}}),Ht=new Map;for(const D of Mt){const W=(So=Ht.get(D.commit.id))!=null?So:[];W.push(D),Ht.set(D.commit.id,W)}const ft=new Map;for(const D of Mt){const W=Qe.get(D.commit.visualId);if(!W)continue;const se=ft.get(W);(!se||(k?D.x>se.x:D.y>se.y))&&ft.set(W,D)}const et=(D,W)=>`${D.toFixed(1)} ${W.toFixed(1)}`,Tt=Math.max(0,...Mt.map(D=>D.row)),At=Math.max(0,...n.map(D=>D.column)),pn=k?qr*2+Math.max(0,Tt-1)*Ae+$s+Hh+We:qr*2+(At+1)*Kl,lt=k?Xr*2+At*Rt+To+Hh+We:Xr*2+Math.max(0,Tt-1)*Ae+To+Hh+We,Wt=[],Zt=new Map(i.map(D=>{var se,re;const W=new Date((re=(se=D.createdDate)!=null?se:D.divergedFromDate)!=null?re:D.lastCommitDate).getTime();return[D.name,Number.isFinite(W)?W:0]})),Bt=D=>{var W;return(W=Zt.get(D))!=null?W:0},En=[],it=D=>{x&&En.push(D)},en=new Set,Dn=new Map,yn=(D,W)=>{var re;const se=(re=Dn.get(D))!=null?re:[];se.includes(W)||se.push(W),Dn.set(D,se)},Jn=new Set,Ms=new Set,ms=new Set,ws=(D,W)=>{var be,Le;if(!D)return null;const se=Hu(Ht,D,W);if(se)return se;const re=(be=Qe.get(`${W!=null?W:d}:${D}`))!=null?be:Qe.get(D);return re&&(Le=ft.get(re))!=null?Le:null},xn=new Set;for(const D of i){const W=ye(D);W&&Ms.add(W);const se=(fo=q.get(D.name))!=null?fo:null;se&&ms.add(se)}const es=D=>{var be;const W=ws(D.id,D.branchName);if(W)return W;const se=Qe.get(D.visualId);if(!se)return null;const re=Ut.get(se);return re&&(be=Mt.find(Le=>Le.commit.id===re))!=null?be:null},bn=(D,W)=>D?Hu(Ht,D,W):null,Xn=(D,W)=>k?W&&W.column!==D.column?W.column<D.column?{x:D.x+$s/2,y:D.y-Ia}:{x:D.x+$s/2,y:D.y+To+Ia}:{x:D.x-Ia,y:D.y+To/2}:{x:D.x+$s/2,y:D.y+To+Ia},nt=(D,W,se)=>k?W?se&&se.column>D.column?{x:D.x+$s/2,y:D.y+To+Ia}:se&&se.column<D.column?{x:D.x+$s/2,y:D.y-Ia}:{x:D.x+$s+Ia,y:D.y+To/2}:{x:D.x+$s+Ia,y:D.y+To/2}:{x:W?D.x+$s:D.x+$s/2,y:W?D.y+To/2:D.y},ps=(D,W)=>Hu(Ht,D,W),ii=(D,W)=>bn(D,W),bo=[],no=new Set;for(const D of a){const W=(Go=D.targetBranch)!=null?Go:d,se=(Es=(Ko=ws(D.fullSha,W))!=null?Ko:(Kt=Ht.get(D.fullSha))==null?void 0:Kt[0])!=null?Es:null;if(!se){it({id:`merge:${D.fullSha}:target`,kind:"merge",parent:(oe=(ri=D.parentShas)==null?void 0:ri[1])!=null?oe:"unknown",child:D.fullSha,rendered:!1,reason:"missing merge target node"});continue}const re=(Ce=(fe=D.parentShas)==null?void 0:fe.slice(1))!=null?Ce:[];if(re.length===0){it({id:`merge:${D.fullSha}:parents`,kind:"merge",parent:"unknown",child:D.fullSha,rendered:!1,reason:"no merged parent shas"});continue}for(const be of re){const Le=`merge:${D.fullSha}:${be!=null?be:"unknown"}`;if(!be||be===D.fullSha){it({id:Le,kind:"merge",parent:be!=null?be:"unknown",child:D.fullSha,rendered:!1,reason:be?"merged parent equals merge sha":"missing merged parent sha"});continue}const _t=(Oe=Hu(Ht,be))!=null?Oe:null;if(!_t){it({id:Le,kind:"merge",parent:be,child:D.fullSha,rendered:!1,reason:"missing merge parent node"});continue}if(_t.commit.id===se.commit.id){it({id:Le,kind:"merge",parent:_t.commit.id,child:se.commit.id,rendered:!1,reason:"merge parent and target resolve to same node"});continue}const kt=k?_t.x+$s:_t.x+$s/2,ct=k?_t.y+To/2:_t.y,ot=k?se.x-fy:se.x+$s-fy,xt=se.y+To/2,wt=`${kt.toFixed(2)}:${ct.toFixed(2)}:${ot.toFixed(2)}:${xt.toFixed(2)}`;if(no.has(wt)){it({id:Le,kind:"merge",parent:_t.commit.id,child:se.commit.id,rendered:!1,reason:"duplicate merge connector geometry"});continue}no.add(wt),bo.push({id:Le,fromX:kt,fromY:ct,toX:ot,toY:xt,zIndex:Bt(_t.commit.branchName)}),it({id:Le,kind:"merge",parent:_t.commit.id,child:se.commit.id,rendered:!0,reason:`merge connector rendered to ${W}`})}}const An=new Set;for(const D of i){if(D.name===d)continue;const W=X.get(D.name);if(!W)continue;const se=te(D),re=ps((st=q.get(D.name))!=null?st:"",se),be=(tt=ne.get(D.name))!=null?tt:W,Le=(mt=ii(be.id,D.name))!=null?mt:es(be);if(!re||!Le||re.commit.id===Le.commit.id){const xt=Qe.get(`${D.name}:${W.id}`),wt=Qe.get(`${D.name}:${be.id}`),_n=!!xt&&!J.has(xt),Nn=!!wt&&!J.has(wt),Hn=!!xt&&!g.has(xt)&&(_n?_.has(xt):!0),Ws=!!wt&&!g.has(wt)&&(Nn?_.has(wt):!0);!re&&!Hn&&yn((Jt=Le==null?void 0:Le.commit.id)!=null?Jt:W.id,"Missing parent node"),!Le&&!Ws&&yn(W.id,"Missing child node"),it({id:`branch:${(Xt=re==null?void 0:re.commit.id)!=null?Xt:"null"}->${(ns=Le==null?void 0:Le.commit.id)!=null?ns:"null"}`,kind:"branch",parent:(Lt=re==null?void 0:re.commit.id)!=null?Lt:"null",child:(dn=Le==null?void 0:Le.commit.id)!=null?dn:"null",rendered:!1,reason:re?Le?"parent and child are the same node":"missing child node":"missing parent node"});continue}const _t=`branch:${re.commit.id}->${Le.commit.id}`;if(xn.has(_t)){it({id:_t,kind:"branch",parent:re.commit.id,child:Le.commit.id,rendered:!1,reason:"duplicate connector key"});continue}xn.add(_t),Jn.add(re.commit.id);const kt=re.column!==Le.column;re.commit.branchName!==Le.commit.branchName&&An.add(re.commit.id);const ct=nt(re,kt,Le),ot=Xn(Le,re);Wt.push({id:_t,fromX:ct.x,fromY:ct.y,toX:ot.x,toY:ot.y,zIndex:Bt(Le.commit.branchName)}),it({id:_t,kind:"branch",parent:re.commit.id,child:Le.commit.id,rendered:!0,reason:kt?"branch connector rendered":k?"horizontal connector rendered":"vertical connector rendered"})}for(const D of Mt){const W=(Pn=D.commit.parentSha)!=null?Pn:null;if(!W)continue;const se=ps(W,D.commit.branchName);if(!se){const ct=(On=Qe.get(`${D.commit.branchName}:${W}`))!=null?On:Qe.get(W),ot=!!ct&&!J.has(ct);!!ct&&!g.has(ct)&&(ot?_.has(ct):!0)||yn(D.commit.id,"Missing parent node"),it({id:`${D.commit.visualId}->${W}`,kind:"ancestry",parent:W,child:D.commit.id,rendered:!1,reason:"missing parent node"});continue}const re=D;if(re.commit.id===se.commit.id){yn(re.commit.id,"Parent and child resolve to the same node"),it({id:`${se.commit.id}->${re.commit.id}`,kind:"ancestry",parent:se.commit.id,child:re.commit.id,rendered:!1,reason:"parent and child are the same node"});continue}const be=`${D.commit.branchName}:${(qn=se.commit.visualId)!=null?qn:se.commit.id}->${re.commit.visualId}`;if(xn.has(be)){yn(se.commit.id,"Duplicate connector key"),yn(re.commit.id,"Duplicate connector key"),it({id:be,kind:"ancestry",parent:se.commit.id,child:re.commit.id,rendered:!1,reason:"duplicate connector key"});continue}xn.add(be),Jn.add(se.commit.id);const Le=se.column!==re.column,_t=nt(se,Le,re),kt=Xn(re,se);Wt.push({id:be,fromX:_t.x,fromY:_t.y,toX:kt.x,toY:kt.y,zIndex:Bt(re.commit.branchName)}),it({id:be,kind:"ancestry",parent:se.commit.id,child:re.commit.id,rendered:!0,reason:Le?"ancestry connector rendered":k?"horizontal ancestry rendered":"vertical ancestry rendered"}),en.add(se.commit.id),en.add(re.commit.id)}const ro=new Map;for(const D of Mt){const W=($t=ro.get(D.commit.branchName))!=null?$t:[];W.push(D),ro.set(D.commit.branchName,W)}for(const[D,W]of ro.entries()){if(W.length<2)continue;const se=[...W].sort((re,be)=>{var kt,ct,ot,xt,wt,_n,Nn,Hn;const Le=Number.isFinite(new Date((ct=(kt=re==null?void 0:re.commit)==null?void 0:kt.date)!=null?ct:"").getTime())?new Date(re.commit.date).getTime():0,_t=Number.isFinite(new Date((xt=(ot=be==null?void 0:be.commit)==null?void 0:ot.date)!=null?xt:"").getTime())?new Date(be.commit.date).getTime():0;return Le-_t||((_n=(wt=re==null?void 0:re.commit)==null?void 0:wt.id)!=null?_n:"").localeCompare((Hn=(Nn=be==null?void 0:be.commit)==null?void 0:Nn.id)!=null?Hn:"")});for(let re=1;re<se.length;re+=1){const be=se[re-1],Le=se[re];if(be.commit.id===Le.commit.id)continue;const _t=(tn=Le.commit.parentSha)!=null?tn:null;if(_t&&ps(_t,Le.commit.branchName))continue;const kt=`chain:${D}:${be.commit.id}->${Le.commit.id}`;if(xn.has(kt)){yn(be.commit.id,"Duplicate branch chain connector"),yn(Le.commit.id,"Duplicate branch chain connector"),it({id:kt,kind:"ancestry",parent:be.commit.id,child:Le.commit.id,rendered:!1,reason:"duplicate branch chain key"});continue}xn.add(kt);const ct=be.column!==Le.column,ot=nt(be,ct,Le),xt=Xn(Le,be);Wt.push({id:kt,fromX:ot.x,fromY:ot.y,toX:xt.x,toY:xt.y,zIndex:Bt(Le.commit.branchName)}),it({id:kt,kind:"ancestry",parent:be.commit.id,child:Le.commit.id,rendered:!0,reason:"branch chain rendered"}),en.add(be.commit.id),en.add(Le.commit.id)}}return{branchByName:M,laneByName:R,mainCommits:A,branchCommitsByLane:T,branchPreviewSets:$,allCommits:Me,clustersByBranch:Re,clusterKeyByCommitId:Qe,clusterKeyBySha:Ze,leadByClusterKey:Ut,clusterCounts:Ft,debugRows:qe,branchDebugRows:Se,nodes:at,normalizedSearchQuery:Xe,matchingNodes:dt,matchingNodeIds:Ie,focusedNode:ht,checkedOutClusterKey:I,defaultCollapsedClumps:J,visibleCommitsList:pe,renderNodes:Mt,visibleNodesBySha:Ht,visibleNodeByClusterKey:ft,pointFormatter:et,contentWidth:pn,contentHeight:lt,connectors:Wt,mergeConnectors:bo,connectorDecisions:En,nodeWarnings:Dn,connectorParentShas:Jn,branchStartShas:Ms,branchOffNodeShas:ms,crossBranchOutgoingShas:An,commitIdsWithRenderedAncestry:en,branchBaseCommitByName:X,firstBranchCommitByName:le}}function Pv(t,n,i,a,c,u,d=0){const h=a-Math.sign(a-n||1)*d,p=Math.max(0,Math.min(c,Math.abs(i-t),Math.abs(a-n)));if(p<.5)return[`M ${u(t,n)}`,`L ${u(i,n)}`,`L ${u(i,h)}`].join(" ");const g=i>=t?1:-1,_=a>=n?1:-1,x=i-g*p,b=h-_*p;return[`M ${u(t,n)}`,`L ${u(x,n)}`,`Q ${u(i,n)} ${u(i,n+_*p)}`,`L ${u(i,b)}`,`L ${u(i,h)}`].join(" ")}const rp=2.25,Ql=rp/2,Hv=.45,Vv=.01,fa=rp,wd=10,Uv=-100,my=0,py=.9,Wv=.9,_y=.001,Wh=.001,Yv=0,Fv=120,Xv=12,qv=$s+48;function Qs(...t){return t.filter(Boolean).join(" ")}function Gv(t){return Math.max(Hv,Math.min(rp,t))}function Kv(t,n){if(t===null||t.size!==n.size)return!1;for(const i of t)if(!n.has(i))return!1;return!0}function lp(t,n){return!(n.right<t.left||n.left>t.right||n.bottom<t.top||n.top>t.bottom)}function Wi(t,n,i,a,c){const{left:u,top:d,right:h,bottom:p}=c;let g=0,_=1;const x=i-t,b=a-n,w=(S,C)=>{if(Math.abs(S)<1e-12)return C>=0;const k=C/S;if(S<0){if(k>_)return!1;k>g&&(g=k)}else{if(k<g)return!1;k<_&&(_=k)}return!0};return!w(-x,t-u)||!w(x,h-t)||!w(-b,n-d)||!w(b,p-n)?!1:g<=_}function Ex(t){var u,d,h,p;let n=(d=(u=t[0])==null?void 0:u.x)!=null?d:0,i=(p=(h=t[0])==null?void 0:h.y)!=null?p:0,a=n,c=i;for(const g of t)n=Math.min(n,g.x),i=Math.min(i,g.y),a=Math.max(a,g.x),c=Math.max(c,g.y);return{left:n,top:i,right:a,bottom:c}}function Qv(t,n,i,a,c,u,d){const h=a-Math.sign(a-n||1)*u,p=Math.max(0,Math.min(c,Math.abs(i-t),Math.abs(a-n)));if(p<.5)return Wi(t,n,i,n,d)||Wi(i,n,i,h,d);const g=i>=t?1:-1,_=a>=n?1:-1,x=i-g*p,b=h-_*p,w=i,S=n+_*p;if(Wi(t,n,x,n,d))return!0;const C=Ex([{x,y:n},{x:i,y:n},{x:w,y:S}]);return lp(d,C)||Wi(w,S,i,b,d)?!0:Wi(i,b,i,h,d)}function Zv(t,n,i,a,c,u){if(Math.abs(a-n)<.5)return Wi(t,n,i,a,u);const d=i>=t?1:-1,h=Math.max(0,Math.min(c,Math.abs(a-n),Math.abs(i-t)));if(h<.5)return Wi(t,n,t,a,u)||Wi(t,a,i,a,u);const p=a-Math.sign(a-n)*h,g=t+d*h;if(Wi(t,n,t,p,u))return!0;const _=Ex([{x:t,y:p},{x:t,y:a},{x:g,y:a}]);return lp(u,_)?!0:Wi(g,a,i,a,u)}function Dx(t,n){return{left:t.x,top:t.y+n,right:t.x+$s,bottom:t.y+Sc+To+4}}function Jv(t,n){const i=qv,a=Math.max(120,Math.ceil(Sc+To+4-n+24)),c=new Map;for(const u of t){const d=Dx(u,n),h=Math.floor(d.left/i),p=Math.floor(d.right/i),g=Math.floor(d.top/a),_=Math.floor(d.bottom/a),x=u.commit.visualId;for(let b=h;b<=p;b++)for(let w=g;w<=_;w++){const S=`${b},${w}`;let C=c.get(S);C||(C=new Set,c.set(S,C)),C.add(x)}}return{cellW:i,cellH:a,buckets:c}}function ew(t,n,i,a){const{cellW:c,cellH:u,buckets:d}=t,h=Math.floor(n.left/c),p=Math.floor(n.right/c),g=Math.floor(n.top/u),_=Math.floor(n.bottom/u),x=new Set;for(let w=h;w<=p;w++)for(let S=g;S<=_;S++){const C=d.get(`${w},${S}`);if(C)for(const k of C)x.add(k)}const b=new Set;for(const w of x){const S=i.get(w);if(!S)continue;const C=Dx(S,a);lp(n,C)&&b.add(w)}return b}function gy(t,n,i,a){var d;if(i.zoom<=0||t<=0||n<=0)return null;const c=i.zoom/fa;if(!Number.isFinite(c)||c<=0)return null;const u=(d=a==null?void 0:a.innerPaddingPx)!=null?d:0;return{left:(-u-i.panX)/c,top:(-u-i.panY)/c,right:(t-u-i.panX)/c,bottom:(n-u-i.panY)/c}}function tw(t,n){return n>0?{left:t.left-n,top:t.top-n,right:t.right+n,bottom:t.bottom+n}:t}function yy(t,n,i){const a=n/fa;return!Number.isFinite(a)||a<=0?t:tw(t,100/a)}function xy(t){return t.replace(/\\/g,"/").replace(/\/+$/,"")}function xo(t,n){return!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t)}function jm(t,n){if(n){const i=xy(n),a=xy(t.path);if(i===a||i.toLowerCase()===a.toLowerCase())return!1}return!t.isCurrent}function Yh(t,n){return t.pathExists===!1?!1:jm(t,n)}function nw(t){const n=t.replace(/\\/g,"/").split("/").filter(Boolean);return n.length<=2?t:`.../${n.slice(-2).join("/")}`}function sw({fadeIn:t,className:n,style:i,onClick:a,dataCommitCard:c,children:u}){const[d,h]=y.useState(!t);return y.useLayoutEffect(()=>{if(!t){h(!0);return}h(!1);let p=null;const g=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>h(!0))});return()=>{cancelAnimationFrame(g),p!=null&&cancelAnimationFrame(p)}},[t]),r.jsx("div",{className:n,"data-commit-card":c,onClick:a,style:{...i,opacity:d?1:0,transition:t?"opacity 240ms ease-out":void 0},children:u})}function ow({scrollContainerRef:t,mapPadHostRef:n,transformLayerRef:i,isMarqueeSelecting:a,contentWidth:c,contentHeight:u,isCameraMoving:d,onWheel:h,onMouseDown:p,labelTopPx:g,inverseZoomStyle:_,displayZoom:x,selectedVisibleCommitShas:b,iconScaleStyle:w,normalizedSearchQuery:S,matchingNodeIds:C,focusedNode:k,renderNodes:M,shouldRenderNode:R,manuallyOpenedClumps:A,manuallyClosedClumps:T,defaultCollapsedClumps:$,leadByClusterKey:F,clusterKeyByCommitId:U,clusterCounts:Q,commitIdsWithRenderedAncestry:X,nodeWarnings:ne,connectorParentShas:le,branchStartShas:q,branchOffNodeShas:te,crossBranchOutgoingShas:ue,branchBaseCommitByName:ye,branchStartAccentClass:z,connectorParentAccentClass:me,commitCornerRadiusPx:G,lineStrokeWidth:ve,connectorCornerRadiusPx:Me,pointFormatter:B,connectors:P,mergeConnectors:L,cullConnectorPath:ie,flushCameraReactTick:$e,setManuallyOpenedClumps:Te,setManuallyClosedClumps:Re,onCommitCardClick:Qe,unpushedCommitShasSetByBranch:Ze,checkedOutHeadSha:Ut}){const[Ft,Dt]=y.useState(new Set),zt=y.useRef(null);y.useEffect(()=>{const Se=new Set;Q.forEach((Ye,De)=>{(A.has(De)||!$.has(De)&&!T.has(De))&&Se.add(De)});const K=zt.current;if(K==null){zt.current=Se;return}const Be=[];if(Se.forEach(Ye=>{K.has(Ye)||Be.push(Ye)}),Be.length>0){Dt(De=>{const Je=new Set(De);return Be.forEach(at=>Je.add(at)),Je});const Ye=window.setTimeout(()=>{Dt(De=>{const Je=new Set(De);return Be.forEach(at=>Je.delete(at)),Je})},260);return zt.current=Se,()=>{window.clearTimeout(Ye)}}zt.current=Se},[Q,$,T,A]);const sn=(Se,K)=>{const Be=K.zIndex-Se.zIndex;if(Be!==0)return Be;const Ye=Math.min(Se.fromY,Se.toY),De=Math.min(K.fromY,K.toY),Je=Ye-De;return Je!==0?Je:Se.id.localeCompare(K.id)},rn=L.filter(Se=>ie(Se)).sort(sn),qe=P.filter(Se=>ie(Se)).sort(sn);return r.jsx("div",{ref:t,className:"flex-1 min-h-0 overflow-hidden",style:{cursor:a?"crosshair":"default"},children:r.jsx("div",{ref:n,className:"relative min-w-full bg-[#FAFAF9] p-2.5",onWheel:h,onMouseDown:p,style:{width:c,minWidth:"100%",height:u},children:r.jsxs("div",{ref:i,className:"absolute left-0 top-0",style:{width:c,height:u,transformOrigin:"top left",...d?{willChange:"transform"}:{}},children:[M.filter(Se=>R(Se)).map(Se=>{var We,Ae,Rt,Mt,Ht;const K=U.get(Se.commit.visualId),Be=K?A.has(K)||!$.has(K)&&!T.has(K):!1,Ye=K?F.get(K)===Se.commit.visualId:!1,De=K!=null&&Be&&!Ye&&Ft.has(K),Je=K&&(We=Q.get(K))!=null?We:1,at=X.has(Se.commit.id),Xe=(Ae=ne.get(Se.commit.id))!=null?Ae:[],dt=Xe.length>0&&!at,ht=b.includes(Se.commit.id),Ie=Se.commit.id==="WORKING_TREE"||Se.commit.kind==="uncommitted",Fe=Se.commit.kind==="stash"||Se.commit.id.startsWith("STASH:"),I=Ie||((Mt=(Rt=Ze.get(Se.commit.branchName))==null?void 0:Rt.has(Se.commit.id))!=null?Mt:!1),pe=(Ie||Ut!=null&&Se.commit.id===Ut)&&!ht,we=pe?"text-[#38BDF2]":ht?"text-[#158EFC]":"text-muted-foreground",Ve=pe?{color:"#38BDF2"}:ht?{color:"#158EFC"}:void 0;return r.jsxs(sw,{fadeIn:De,dataCommitCard:"true",className:Qs("group absolute z-20 cursor-pointer",S&&!C.has(Se.commit.id)?d?"opacity-10":"opacity-10 blur-[0.5px]":"",S&&C.has(Se.commit.id)?"scale-[1.01]":"",(k==null?void 0:k.commit.id)===Se.commit.id?"z-30 scale-[1.015]":""),style:{left:Se.x,top:Se.y,width:$s,height:Sc+To+4,overflow:"visible"},onClick:ft=>Qe(ft,Se),children:[r.jsx("div",{className:"absolute left-0 w-full",style:{..._,top:`${g}px`},children:r.jsxs("div",{className:"flex min-w-0 items-baseline justify-between gap-2 px-0 pb-0",children:[r.jsxs("div",{className:Qs("min-w-0 h-4 flex-1 text-sm font-medium leading-none",we,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ve,children:[Se.commit.branchName,"/",Se.commit.id.slice(0,7)]}),Ye&&Je>1?r.jsx("button",{type:"button",onMouseDown:ft=>{ft.stopPropagation()},onClick:ft=>{if(ft.stopPropagation(),ft.preventDefault(),!K)return;!$.has(K)?(Te(Tt=>{if(!Tt.has(K))return Tt;const At=new Set(Tt);return At.delete(K),At}),Re(Tt=>{const At=new Set(Tt);return At.has(K)?At.delete(K):At.add(K),At})):(Re(Tt=>{if(!Tt.has(K))return Tt;const At=new Set(Tt);return At.delete(K),At}),Te(Tt=>{const At=new Set(Tt);return At.has(K)?At.delete(K):At.add(K),At})),$e()},className:Qs("inline-flex self-start items-center bg-transparent p-0 text-sm font-medium leading-none",we),style:Ve,children:Be?r.jsx("span",{className:"-translate-x-[1px] translate-y-[2px] text-base leading-none",children:"⌃"}):`x${Je}`}):null]})}),r.jsx("div",{className:Qs("absolute left-0 h-[176px] w-full cursor-pointer overflow-hidden rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none border border-border/50",pe&&!I&&!Fe?"bg-[#EBF7FE]":ht&&!I&&!Fe?"bg-[#E5F0FF]":I||Fe?"bg-transparent":"bg-[#F5F5F5]",Fe||Ie?"border-dashed":"",te.has(Se.commit.id)||q.has(Se.commit.id)||ue.has(Se.commit.id)?z:le.has(Se.commit.id)?me:((Ht=ye.get(Se.commit.branchName))==null?void 0:Ht.id)===Se.commit.id?"border-amber-500":dt?"border-red-500":"",(S&&C.has(Se.commit.id)&&!d,"")),style:{top:0,borderWidth:`${Fe||Ie?ve*(2/1.5):ve}px`,borderColor:pe?"#38BDF2":ht?"#158EFC":Vh,borderTopLeftRadius:0,borderTopRightRadius:`${G}px`,borderBottomRightRadius:`${G}px`,borderBottomLeftRadius:`${G}px`},children:r.jsxs("div",{className:"flex h-full min-h-0 flex-col px-2.5 py-2",style:_,children:[r.jsxs("div",{className:"min-h-0 flex-1",children:[r.jsx("div",{className:Qs("max-w-[38rem] text-sm font-medium leading-tight tracking-tight text-muted-foreground",we,x<=.5?"overflow-hidden text-ellipsis whitespace-nowrap":"break-words whitespace-normal"),style:Ve,children:Ye&&Be?Se.commit.message:Ye&&Je>1?`${Se.commit.message} +${Je-1}`:Se.commit.message}),r.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1.5",children:dt?r.jsx("span",{className:"inline-flex items-center gap-1 rounded-lg border border-red-500/25 bg-red-50 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:bg-red-900/20 dark:text-muted-foreground",title:Xe.join(`
`),children:"Broken ancestry"}):null})]}),x>.5?r.jsxs("div",{className:"mt-auto flex items-end justify-between gap-4 pt-5",children:[r.jsxs("div",{className:Qs("text-sm font-medium",we),style:Ve,children:["@",Se.commit.author]}),r.jsx("div",{className:Qs("text-sm font-medium",we),style:Ve,children:new Date(Se.commit.date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})})]}):null,(k==null?void 0:k.commit.id)===Se.commit.id&&S?r.jsx("div",{className:"absolute left-5 top-4 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-muted-foreground",style:w,children:"Search result"}):null]})})]},Se.commit.visualId)}),r.jsxs("svg",{className:"pointer-events-none absolute inset-0 z-10",width:c,height:u,viewBox:`0 0 ${c} ${u}`,"aria-hidden":"true",overflow:"visible",style:{overflow:"visible"},children:[rn.map(Se=>{const K=Dv({laneX:Se.fromX,tipY:Se.fromY,mergeX:Se.toX,mergeY:Se.toY,cornerR:Me,pointFormatter:B});return r.jsx("path",{d:K,fill:"none",stroke:Vh,strokeWidth:ve,strokeLinecap:"round",strokeLinejoin:"round"},Se.id)}),qe.map(Se=>{const K=Pv(Se.fromX,Se.fromY,Se.toX,Se.toY,Me,B,0);return r.jsx("path",{d:K,fill:"none",stroke:Vh,strokeWidth:ve,strokeLinecap:"round",strokeLinejoin:"round"},Se.id)})]})]})})})}function iw({selectedVisibleCommitShas:t,commitInProgress:n,commitDisabled:i,stageInProgress:a,stashInProgress:c,stashDisabled:u,pushInProgress:d,deleteInProgress:h,createBranchFromNodeInProgress:p,onCommitLocalChanges:g,onStageAllChanges:_,onStashLocalChanges:x,onPushCurrentBranch:b,onPushAllBranches:w,onPushCommitTargets:S,onDeleteSelection:C,onCreateBranchFromNode:k,onMergeRefsIntoBranch:M,selectedPushTargets:R,selectedPushLabel:A,canPushCurrentBranch:T,pushCurrentBranchLabel:$,pushableRemoteBranchCount:F,deletableSelectionCount:U,canCreateRootBranch:Q,selectedCommitTargetOption:X,mergeInProgress:ne,setMergeTargetCommitSha:le,worktrees:q,currentRepoPath:te,worktreeMenuOpen:ue,setWorktreeMenuOpen:ye,onSwitchToWorktree:z,onRemoveWorktree:me,removeWorktreeInProgress:G,setCommitDialogOpen:ve,setDeleteConfirmOpen:Me,setNewBranchDialogOpen:B}){const P=t.length>0;return r.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 right-4 z-[70] flex flex-wrap items-center gap-2",children:[r.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[r.jsx("button",{type:"button",onClick:()=>ve(!0),disabled:!g||i||P||n,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:n?"Committing...":"Commit"}),r.jsx("button",{type:"button",onClick:()=>void(_==null?void 0:_()),disabled:!_||i||P||a,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:a?"Staging...":"Stage all"}),r.jsx("button",{type:"button",onClick:()=>void(x==null?void 0:x()),disabled:!x||u||P||c,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:c?"Stashing...":"Stash"}),r.jsx("button",{type:"button",onClick:()=>void(b==null?void 0:b()),disabled:!b||!T||P||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:d?"Pushing...":$}),r.jsx("button",{type:"button",onClick:()=>void(w==null?void 0:w()),disabled:!w||F<2||P||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Push all"}),r.jsx("button",{type:"button",onClick:()=>void(S==null?void 0:S(R.map(L=>({branchName:L.branchName,targetSha:L.targetSha})))),disabled:!S||R.length===0||d,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",title:R.length>0?A:"Select commits to push",children:R.length>0?A:"Push selected"}),r.jsx("button",{type:"button",onClick:()=>Me(!0),disabled:!C||U===0||h,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 disabled:cursor-not-allowed disabled:opacity-50",children:h?"Deleting...":"Delete selection"}),r.jsx("button",{type:"button",onClick:()=>B(!0),disabled:!k&&!Q||p,className:"rounded-lg px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:p?"Creating...":"Create branch"})]}),t.length>1&&X.options.length>0&&X.targetBranch&&M?r.jsxs("div",{className:"pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-1 backdrop-blur-sm",children:[r.jsx("span",{className:"px-1 text-xs font-medium text-muted-foreground",children:"merge to"}),X.options.map(L=>{const ie=L.targetBranch===X.targetBranch;return r.jsx("button",{type:"button",onClick:()=>le(L.targetSha),className:Qs("rounded-full px-2.5 py-1 text-xs font-medium transition-colors",ie?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:L.targetBranch},`merge-${L.targetBranch}`)}),r.jsx("button",{type:"button",onClick:()=>void M(X.sources,X.targetBranch),disabled:X.sources.length===0||ne,className:"rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",children:ne?"Merging...":"Confirm"})]}):null,q.length>0&&(z||me)?r.jsxs("div",{className:"pointer-events-auto relative",children:[r.jsxs("button",{type:"button",onClick:()=>ye(L=>!L),className:"rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent",children:[q.length," ",q.length===1?"Worktree":"Worktrees"]}),ue?r.jsx("div",{className:"absolute bottom-full left-0 mb-2 w-[22rem] max-h-64 overflow-auto rounded-xl border border-border bg-card p-2",children:q.map(L=>{var ie;return r.jsxs("div",{className:"mb-1 flex items-start justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/30",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{className:"truncate text-xs font-medium text-foreground",title:L.path,children:jm(L,te)?nw(L.path):"This window"}),r.jsxs("div",{className:"truncate text-[11px] text-muted-foreground",children:[(ie=L.branchName)!=null?ie:"detached"," • ",L.headSha.slice(0,7)]})]}),jm(L,te)?r.jsxs("div",{className:"flex items-center gap-1",children:[z?r.jsx("button",{type:"button",onClick:()=>{ye(!1),z(L.path)},disabled:G||L.pathExists===!1,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:"Switch"}):null,me?r.jsx("button",{type:"button",onClick:()=>void me(L.path,L.isPrunable),disabled:G,className:"rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:G?"...":"Remove"}):null]}):null]},L.path)})}):null]}):null]})}function aw({isOpen:t,onToggle:n,onClose:i,visibleBounds:a,renderedNodeCount:c,totalNodeCount:u,renderedMergeConnectorCount:d,totalMergeConnectorCount:h,renderedConnectorCount:p,totalConnectorCount:g,mapGridCullViewportInsetScreenPx:_,debugRows:x,branchDebugRows:b,connectorDecisions:w}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-[10000] flex items-end gap-2",children:r.jsx("button",{type:"button",onClick:n,className:Qs("pointer-events-auto inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",t?"border-primary/30 bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"),children:"Debug"})}),t?r.jsxs("div",{className:"absolute bottom-14 right-4 z-[10000] flex max-h-[calc(100%-4rem)] w-[min(42rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-border/50 px-4 py-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Commit debug"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Rendered branch summaries and connector decisions"})]}),r.jsx("button",{type:"button",onClick:i,className:"rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Close"})]}),r.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:r.jsx("pre",{className:"whitespace-pre-wrap break-words text-[11px] leading-5 text-muted-foreground",children:[`Cull viewport (inset ${_}px screen/side): ${a?`${(a.right-a.left).toFixed(0)} x ${(a.bottom-a.top).toFixed(0)} content px`:"unavailable"}`,`Rendered nodes: ${c} / ${u}`,`Rendered merge connectors: ${d} / ${h}`,`Rendered connectors: ${p} / ${g}`,"",...x,...b,"",...w.map(S=>`${S.rendered?"rendered":"skipped"} [${S.kind}] ${S.parent.slice(0,7)} -> ${S.child.slice(0,7)} (${S.reason})`)].join(`
`)})})]}):null]})}function rw({commitDialogOpen:t,commitMessageDraft:n,onCommitMessageDraftChange:i,onCommitDialogClose:a,onCommitConfirm:c,commitInProgress:u,deleteConfirmOpen:d,deleteSelectionItems:h,onDeleteConfirmClose:p,onDeleteConfirm:g,deleteInProgress:_,deletableSelectionCount:x,newBranchDialogOpen:b,newBranchName:w,newBranchCreateMode:S,onNewBranchNameChange:C,onNewBranchCreateModeChange:k,onNewBranchDialogClose:M,onNewBranchConfirm:R,selectedCommitCanCreateBranch:A,createBranchFromNodeInProgress:T}){return r.jsxs(r.Fragment,{children:[t?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create commit"}),r.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Stage all changes, then commit on current HEAD."}),r.jsx("textarea",{value:n,onChange:$=>i($.target.value),onKeyDown:$=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),c())},rows:4,placeholder:"Describe your changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:a,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:c,disabled:!n.trim()||u,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",children:u?"Committing...":"Commit"})]})]})}):null,d?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Delete selected items?"}),r.jsx("div",{className:"mt-3 space-y-1.5",children:h.map($=>r.jsx("div",{className:"rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground",children:$},$))}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:g,disabled:x===0||_,className:"rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50/80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",children:_?"Deleting...":"Delete"})]})]})}):null,b?r.jsx("div",{className:"absolute inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-border bg-card p-4",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:"Create branch"}),r.jsxs("div",{className:"mt-3 inline-flex items-center rounded-lg border border-border bg-muted/30 p-1",children:[r.jsx("button",{type:"button",onClick:()=>k("from-selected-node"),className:Qs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="from-selected-node"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"From selection"}),r.jsx("button",{type:"button",onClick:()=>k("new-root"),className:Qs("rounded-md px-2.5 py-1 text-xs font-medium transition-colors",S==="new-root"?"bg-card text-foreground":"text-muted-foreground hover:bg-accent hover:text-foreground"),children:"New root"})]}),S==="from-selected-node"?r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates from selected uncommitted changes or stash node."}):r.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Creates an orphan branch with unrelated history."}),r.jsx("input",{value:w,onChange:$=>C($.target.value),placeholder:"feature/my-changes",className:"mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"}),r.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[r.jsx("button",{type:"button",onClick:M,className:"rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent",children:"Cancel"}),r.jsx("button",{type:"button",onClick:R,disabled:!w.trim()||T||S==="from-selected-node"&&!A,className:Qs("rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent","disabled:cursor-not-allowed disabled:opacity-50"),children:T?"Creating...":"Create"})]})]})}):null]})}function lw({mapPadHostRef:t,transformLayerRef:n}){const i=y.useRef({x:0,y:0}),a=y.useRef(Ql),c=y.useRef({panX:0,panY:0,zoom:Ql}),u=y.useRef(null),d=y.useRef(Ql),h=y.useRef(null),[p,g]=y.useState(!1),[_,x]=y.useState(Ql),[b,w]=y.useState(0),S=y.useRef(null),C=y.useRef(0),k=y.useCallback(()=>{const X=t.current;if(!X)return null;const ne=X.getBoundingClientRect(),le=getComputedStyle(X),q=Number.parseFloat(le.borderLeftWidth)||0,te=Number.parseFloat(le.borderTopWidth)||0,ue=Number.parseFloat(le.paddingLeft)||wd,ye=Number.parseFloat(le.paddingTop)||wd;return{x:ne.left+q+ue,y:ne.top+te+ye}},[t]),M=y.useCallback(()=>{S.current!=null&&(window.clearTimeout(S.current),S.current=null),y.startTransition(()=>{w(X=>X+1)}),C.current=performance.now()},[]),R=y.useCallback((X,ne,le)=>{const q=c.current;c.current={panX:X,panY:ne,zoom:le};const te=n.current;if(te&&(te.style.transform=`translate3d(${X}px, ${ne}px, 0) scale(${le/fa})`),Math.abs(d.current-le)>Wh&&(d.current=le,x(le)),Math.abs(le-q.zoom)>Wh){M();return}const z=performance.now()-C.current;if(z>=my){M();return}S.current!=null&&window.clearTimeout(S.current),S.current=window.setTimeout(()=>{S.current=null,M()},my-z)},[M,n]),A=y.useRef(null),T=y.useCallback(()=>{u.current!=null||!A.current||(u.current=window.requestAnimationFrame(A.current))},[]),$=y.useCallback(()=>{g(!0),h.current!=null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=null,g(!1)},90)},[]),F=y.useCallback((X,ne,le)=>{i.current={x:X,y:ne},a.current=le,$(),T()},[$,T]);A.current=()=>{u.current=null;const X=c.current,ne=i.current.x,le=i.current.y,q=a.current,te=Math.abs(ne-X.panX)<=_y?ne:X.panX+(ne-X.panX)*py,ue=Math.abs(le-X.panY)<=_y?le:X.panY+(le-X.panY)*py,ye=Math.abs(q-X.zoom)<=Wh?q:X.zoom+(q-X.zoom)*Wv;R(te,ue,ye),te!==ne||ue!==le||ye!==q?A.current&&(u.current=window.requestAnimationFrame(A.current)):M()};const U=y.useCallback((X,ne,le)=>{const q=Gv(le),te=c.current,ue=k();if(!ue){F(i.current.x,i.current.y,q);return}const ye=X-ue.x,z=ne-ue.y,me=te.zoom/fa,G=q/fa,ve=(ye-te.panX)/me,Me=(z-te.panY)/me;F(ye-ve*G,z-Me*G,q)},[k,F]),Q=y.useCallback(X=>{if(X.preventDefault(),X.ctrlKey||X.metaKey){const ne=Math.exp(-X.deltaY*Vv);U(X.clientX,X.clientY,a.current*ne);return}F(i.current.x-X.deltaX,i.current.y-X.deltaY,a.current)},[F,U]);return y.useLayoutEffect(()=>(R(0,0,Ql),()=>{h.current!=null&&window.clearTimeout(h.current),u.current!=null&&window.cancelAnimationFrame(u.current),S.current!=null&&(window.clearTimeout(S.current),S.current=null)}),[R]),y.useLayoutEffect(()=>{const X=n.current;if(!X)return;const ne=c.current;X.style.transform=`translate3d(${ne.panX}px, ${ne.panY}px, 0) scale(${ne.zoom/fa})`}),{isCameraMoving:p,renderedZoom:_,cameraRenderTick:b,renderedCameraRef:c,interactionIdleTimeoutRef:h,getTransformLayerOriginScreen:k,flushCameraReactTick:M,syncCamera:F,handleWheel:Q}}function cw(t){const n=Math.min(t.startX,t.currentX),i=Math.min(t.startY,t.currentY),a=Math.abs(t.currentX-t.startX),c=Math.abs(t.currentY-t.startY);return{left:n,top:i,width:a,height:c}}function uw({scrollContainerRef:t,renderedCameraRef:n,getTransformLayerOriginScreen:i,renderNodes:a,shouldRenderNode:c,onPointerReleaseNoMarquee:u}){const d=y.useRef(null),h=y.useRef(!1),p=y.useRef([]),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]),[C,k]=y.useState(null),M=y.useCallback(A=>{const T=t.current,$=i();if(!T||!$)return[];const F=T.getBoundingClientRect(),U=n.current.zoom/fa;if(U<=0)return[];const Q=[],X=A.left,ne=A.left+A.width,le=A.top,q=A.top+A.height;for(const te of a){if(!c(te))continue;const ue=$.x+n.current.panX+te.x*U-F.left,ye=$.y+n.current.panY+te.y*U-F.top,z=ue+$s*U,me=ye+(Sc+To)*U;!(z<X||ue>ne||me<le||ye>q)&&Q.push(te.commit.id)}return Q},[i,a,n,t,c]),R=y.useCallback(A=>{if(A.button!==0)return;const T=A.target;if(T!=null&&T.closest("[data-commit-card]")||T!=null&&T.closest("button, a, input, textarea, select"))return;const $=t.current;if(!$)return;A.preventDefault();const F=$.getBoundingClientRect(),U=A.clientX-F.left,Q=A.clientY-F.top;d.current={startX:U,startY:Q,currentX:U,currentY:Q,additive:A.metaKey||A.ctrlKey},h.current=!1,p.current=A.metaKey||A.ctrlKey?w:[],_(!0),b({left:U,top:Q,width:0,height:0})},[t,w]);return y.useEffect(()=>{const A=$=>{var le;const F=d.current;if(!F)return;const U=t.current;if(!U)return;const Q=U.getBoundingClientRect();F.currentX=$.clientX-Q.left,F.currentY=$.clientY-Q.top,!h.current&&(Math.abs(F.currentX-F.startX)>2||Math.abs(F.currentY-F.startY)>2)&&(h.current=!0);const X=cw(F);b(X);const ne=M(X);S(F.additive?Array.from(new Set([...p.current,...ne])):Array.from(new Set(ne))),F.additive||k((le=ne[ne.length-1])!=null?le:null)},T=()=>{if(d.current){const $=h.current;d.current=null,h.current=!1,_(!1),b(null),$||(S([]),k(null));return}u()};return window.addEventListener("mousemove",A),window.addEventListener("mouseup",T),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",T)}},[M,u,t]),{isMarqueeSelecting:g,marqueeRect:x,selectedCommitShas:w,setSelectedCommitShas:S,mergeTargetCommitSha:C,setMergeTargetCommitSha:k,startMarqueeDrag:R}}function by({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,view:g,staleBranches:_=[],isLoading:x=!1,scrollRequest:b,focusedErrorBranch:w,mapTopInsetPx:S=0,onMergeRefsIntoBranch:C,mergeInProgress:k=!1,onPushAllBranches:M,onPushCurrentBranch:R,onPushCommitTargets:A,pushInProgress:T=!1,onDeleteSelection:$,deleteInProgress:F=!1,worktrees:U=[],currentRepoPath:Q,onRemoveWorktree:X,removeWorktreeInProgress:ne=!1,onSwitchToWorktree:le,onStashLocalChanges:q,stashInProgress:te=!1,stashDisabled:ue=!1,onCommitLocalChanges:ye,commitInProgress:z=!1,commitDisabled:me=!1,onStageAllChanges:G,stageInProgress:ve=!1,onCreateBranchFromNode:Me,onCreateRootBranch:B,createBranchFromNodeInProgress:P=!1,orientation:L="horizontal",branchCommitPreviews:ie={},branchUniqueAheadCounts:$e={},gridSearchQuery:Te="",gridSearchJumpToken:Re=0,gridFocusSha:Qe=null,checkedOutRef:Ze=null,onGridSearchResultCountChange:Ut,onGridSearchFocusChange:Ft,onInteractionChange:Dt,manuallyOpenedClumps:zt,manuallyClosedClumps:sn,setManuallyOpenedClumps:rn,setManuallyClosedClumps:qe,layoutModel:Se}){var Xi,Gn,Ss,Ls,Co,Qo,qi,Bi,ma,qa;const K=y.useRef(null),Be=y.useRef(null),Ye=y.useRef(null),[De,Je]=y.useState(!1),[at,Xe]=y.useState(!1),[dt,ht]=y.useState(""),[Ie,Fe]=y.useState(!1),[I,J]=y.useState(!1),[pe,we]=y.useState(""),[Ve,We]=y.useState("from-selected-node"),[Ae,Rt]=y.useState(()=>new Set),[Mt,Ht]=y.useState(()=>new Set),ft=zt!=null?zt:Ae,et=sn!=null?sn:Mt,Tt=rn!=null?rn:Rt,At=qe!=null?qe:Ht,[pn,lt]=y.useState(!1),[Wt,Zt]=y.useState(null),[Bt,En]=y.useState(null),{isCameraMoving:it,renderedZoom:en,cameraRenderTick:Dn,renderedCameraRef:yn,interactionIdleTimeoutRef:Jn,getTransformLayerOriginScreen:Ms,flushCameraReactTick:ms,syncCamera:ws,handleWheel:xn}=lw({mapPadHostRef:Be,transformLayerRef:Ye}),es=y.useMemo(()=>Mx(t,d,ie),[t,d,ie]),bn=y.useMemo(()=>Tx({lanes:es,branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:ie,branchUniqueAheadCounts:$e,manuallyOpenedClumps:ft,manuallyClosedClumps:et,isDebugOpen:pn,gridSearchQuery:Te,gridFocusSha:Qe,checkedOutRef:Ze!=null?Ze:null,orientation:L}),[es,t,n,i,a,d,ie,$e,ft,et,pn,Te,Qe,(Xi=Ze==null?void 0:Ze.headSha)!=null?Xi:null,(Gn=Ze==null?void 0:Ze.branchName)!=null?Gn:null,L]),Xn=Se!=null?Se:bn,{allCommits:nt,debugRows:ps,branchDebugRows:ii,clusterKeyByCommitId:bo,leadByClusterKey:no,clusterCounts:An,matchingNodes:ro,matchingNodeIds:lo,normalizedSearchQuery:Ps,focusedNode:Hs,defaultCollapsedClumps:Ts,renderNodes:mn,visibleNodesBySha:ai,contentWidth:vo,contentHeight:Vs,connectors:ts,mergeConnectors:wo,connectorDecisions:Xo,nodeWarnings:Do,commitIdsWithRenderedAncestry:$o,connectorParentShas:co,branchStartShas:Cs,branchOffNodeShas:Us,crossBranchOutgoingShas:Bn,branchBaseCommitByName:bi,pointFormatter:Ni}=Xn,qo=!!Ps,Zs=en/fa,Ao=y.useMemo(()=>({transform:`scale(${1/Zs})`,transformOrigin:"top left",width:`${100*Zs}%`,height:`${100*Zs}%`}),[Zs]),No=-(20/Zs),js=y.useMemo(()=>{const He=new Map;for(const ut of mn)He.set(ut.commit.visualId,ut);return He},[mn]),so=y.useMemo(()=>Jv(mn,No),[mn,No]),Ln=He=>{var Yt;const ut=He.commit.id,It=He.commit.visualId;if(qo&&lo.has(ut)||(Hs==null?void 0:Hs.commit.id)===ut||Wt===null)return!0;if(!Wt.has(It))return!1;const gt=bo.get(It);return gt&&((Yt=An.get(gt))!=null?Yt:1)>1&&(ft.has(gt)||!Ts.has(gt)&&!et.has(gt)),!0},uo=1.5/Zs,fs=Fv,In=Xv/Zs,So=y.useMemo(()=>({transform:`scale(${1/Zs})`,transformOrigin:"center"}),[Zs]),fo="border-slate-400/70",Go="border-blue-500",Kt=y.useMemo(()=>new Map(t.map(He=>[He.name,He])),[t]);y.useMemo(()=>new Set(t.filter(He=>He.commitsAhead===0&&!He.name.startsWith("*")).map(He=>He.name)),[t]);const Ko=y.useMemo(()=>{var ut,It;const He=new Map;for(const gt of mn){const Yt=(ut=He.get(gt.commit.id))!=null?ut:new Set;Yt.add(gt.commit.branchName),He.set(gt.commit.id,Yt)}for(const gt of i){const Yt=(It=He.get(gt.fullSha))!=null?It:new Set;Yt.add(d),He.set(gt.fullSha,Yt)}return He},[mn,i,d]),Es=y.useMemo(()=>new Map(Object.entries(c).map(([He,ut])=>[He,new Set(ut)])),[c]),ri=y.useCallback(()=>{Jn.current,ms()},[ms,Jn]),{isMarqueeSelecting:oe,marqueeRect:fe,selectedCommitShas:Ce,setSelectedCommitShas:Oe,mergeTargetCommitSha:st,setMergeTargetCommitSha:tt,startMarqueeDrag:mt}=uw({scrollContainerRef:K,renderedCameraRef:yn,getTransformLayerOriginScreen:Ms,renderNodes:mn,shouldRenderNode:Ln,onPointerReleaseNoMarquee:ri}),Jt=y.useMemo(()=>new Set(mn.map(He=>He.commit.id)),[mn]),Xt=y.useMemo(()=>Ce.filter(He=>Jt.has(He)),[Ce,Jt]),ns=y.useCallback((He,ut)=>{var Yt;if(!ut)return!1;if(((Yt=ie[He])!=null?Yt:[]).some(qt=>xo(qt.fullSha,ut)||xo(qt.sha,ut)))return!0;const gt=Kt.get(He);return!!(gt!=null&&gt.headSha&&xo(gt.headSha,ut))},[ie,Kt]),Lt=(Ss=Ze==null?void 0:Ze.branchName)!=null?Ss:null,dn=(Ls=Ze==null?void 0:Ze.headSha)!=null?Ls:null,Pn=Lt==null,On=y.useCallback((He,ut,It)=>{for(const gt of U){if(!Yh(gt,Q))continue;if(gt.branchName){if(gt.branchName===He&&xo(gt.headSha,ut))return gt;continue}if(!xo(gt.headSha,ut)&&!xo(gt.headSha,It))continue;if(gt.parentSha&&ns(He,gt.parentSha)||ns(He,gt.headSha))return gt;const Yt=Kt.get(He);if(Yt&&xo(Yt.headSha,gt.headSha)||He===d&&i.some(qt=>xo(qt.fullSha,gt.headSha)))return gt}return null},[U,Q,ns,Kt,d,i]),qn=y.useCallback(He=>{for(const ut of U)if(Yh(ut,Q)&&ut.branchName===He)return ut;return null},[U,Q]),$t=y.useCallback((He,ut)=>{for(const It of U)if(Yh(It,Q)&&(xo(It.headSha,He)||xo(It.headSha,ut)))return It;return null},[U,Q]),tn=y.useCallback(He=>{var ut;return Array.from((ut=Ko.get(He))!=null?ut:[])},[Ko]),D=y.useMemo(()=>{var Yt,qt,Yn,wn;const He=new Map;for(const Vn of Xt){const ho=tn(Vn);if(ho.length===0)continue;const vi=(Yt=ho.find(Io=>Io!==d))!=null?Yt:ho[0],xr=Xt.filter(Io=>Io!==Vn).filter(Io=>!new Set(tn(Io)).has(vi));He.set(vi,{targetSha:Vn,targetBranch:vi,sourceRefs:xr})}const ut=Array.from(He.values()),It=st?ut.find(Vn=>{var ho;return Vn.targetSha===st||Vn.targetBranch===((ho=tn(st)[0])!=null?ho:"")}):null,gt=(qt=It!=null?It:ut[ut.length-1])!=null?qt:null;return{options:ut,selected:gt,targetBranch:(Yn=gt==null?void 0:gt.targetBranch)!=null?Yn:null,sources:(wn=gt==null?void 0:gt.sourceRefs)!=null?wn:[]}},[Xt,tn,d,st]),W=y.useMemo(()=>{const He=[...Lt===d?[{name:d,headSha:dn!=null?dn:"",unpushedCommits:a.length,remoteSyncStatus:"unpushed"}]:[],...t].filter(ut=>!ut.name.startsWith("*")&&ut.unpushedCommits>0&&ut.remoteSyncStatus!=="on-github").map(ut=>[ut.name,ut]);return new Map(He)},[t,Lt,dn,d,a.length]),se=y.useMemo(()=>{const He=gt=>{var qt;const Yt=tn(gt).filter(Yn=>W.has(Yn));return Yt.length===0?null:Yt.length===1?Yt[0]:Lt&&Yt.includes(Lt)?Lt:(qt=Yt.find(Yn=>Yn!==d))!=null?qt:Yt[0]},ut=gt=>{var Yt;return gt===d?a.map(qt=>{var Yn,wn;return{fullSha:qt.fullSha,sha:qt.sha,parentSha:(Yn=qt.parentSha)!=null?Yn:null,message:qt.message,author:qt.author,date:qt.date,kind:(wn=qt.kind)!=null?wn:"commit"}}):(Yt=ie[gt])!=null?Yt:[]},It=new Map;for(const gt of Xt){const Yt=He(gt);if(!Yt)continue;const qt=W.get(Yt);if(!qt)continue;const Yn=ut(Yt).slice(0,qt.unpushedCommits),wn=Yn.findIndex(ho=>ho.fullSha===gt);if(wn===-1)continue;const Vn=It.get(Yt);(!Vn||wn<Vn.targetIndex)&&It.set(Yt,{branchName:Yt,targetSha:gt,targetIndex:wn,commitCount:Yn.length-wn})}return Array.from(It.values())},[Xt,tn,W,Lt,d,a,ie]),re=y.useMemo(()=>Array.from(new Set(Xt.map(He=>/^STASH:(\d+)$/.exec(He)).filter(He=>!!He).map(He=>parseInt(He[1],10)))).sort((He,ut)=>He-ut),[Xt]),be=Xt.includes("WORKING_TREE"),Le=(be?1:0)+re.length,_t=[...be?["Uncommitted changes"]:[],...re.map(He=>`Stash ${He+1}`)],kt=W.size,ct=!Pn&&!!Lt&&W.has(Lt),ot=Lt?`Push ${Lt}`:"Push current branch",xt=se.length===1?se[0].commitCount>1?`Push ${se[0].commitCount} commits on ${se[0].branchName}`:`Push ${se[0].targetSha.slice(0,7)} on ${se[0].branchName}`:`Push ${se.length} selected ranges`;y.useEffect(()=>{Dt==null||Dt(it||oe)},[it,oe,Dt]),y.useEffect(()=>{Ut==null||Ut(Ps?ro.length:null)},[ro.length,Ps,Ut]),y.useEffect(()=>{var ut,It;if(!Ps){Ft==null||Ft(null);return}const He=(It=(ut=ro[0])==null?void 0:ut.commit.id)!=null?It:null;Ft==null||Ft(He)},[ro,Ps,Ft]),y.useLayoutEffect(()=>{if(!Qe)return;const He=K.current,ut=Hs;if(!He||!ut)return;const It=Ms();if(!It)return;const gt=He.getBoundingClientRect(),Yt=yn.current.zoom,qt=Yt/fa,Yn=ut.x+$s/2,wn=ut.y+Sc+To/2,Vn=gt.left+gt.width/2,ho=gt.top+gt.height/2;ws(Vn-It.x-Yn*qt,ho-It.y-wn*qt,Yt)},[Qe,Re,Hs,Ms]);const wt=(qi=(Qo=Bt==null?void 0:Bt.width)!=null?Qo:(Co=K.current)==null?void 0:Co.clientWidth)!=null?qi:0,_n=(qa=(ma=Bt==null?void 0:Bt.height)!=null?ma:(Bi=K.current)==null?void 0:Bi.clientHeight)!=null?qa:0,Nn=wt>0&&_n>0?gy(wt,_n,yn.current,{innerPaddingPx:wd}):null,Hn=Nn!=null?yy(Nn,yn.current.zoom):null,Ws=He=>Hn?He.id.startsWith("merge:")?Zv(He.fromX,He.fromY,He.toX,He.toY,fs,Hn):Qv(He.fromX,He.fromY,He.toX,He.toY,fs,Yv,Hn):!0;y.useLayoutEffect(()=>{var Yn;const He=K.current;if(!He||He.clientWidth<=0||He.clientHeight<=0)return;const ut=He.clientWidth,It=He.clientHeight;En(wn=>(wn==null?void 0:wn.width)===ut&&(wn==null?void 0:wn.height)===It?wn:{width:ut,height:It});const gt=gy(ut,It,yn.current,{innerPaddingPx:wd});if(!gt){Zt(wn=>wn===null?wn:null);return}const Yt=yy(gt,yn.current.zoom),qt=ew(so,Yt,js,No);for(const wn of mn){const Vn=bo.get(wn.commit.visualId);if(!Vn||((Yn=An.get(Vn))!=null?Yn:1)<=1)continue;(ft.has(Vn)||!Ts.has(Vn)&&!et.has(Vn))&&qt.add(wn.commit.visualId)}Zt(wn=>Kv(wn,qt)?wn:qt)},[en,Re,Qe,it,Dn,ft,et,Ts,bo,An,mn,Bt,so,js,No]),y.useLayoutEffect(()=>{const He=K.current;if(!He)return;const ut=()=>{const gt=He.clientWidth,Yt=He.clientHeight;gt<=0||Yt<=0||En(qt=>(qt==null?void 0:qt.width)===gt&&(qt==null?void 0:qt.height)===Yt?qt:{width:gt,height:Yt})};ut();const It=new ResizeObserver(ut);return It.observe(He),()=>It.disconnect()},[nt.length]);const Bs=mn.filter(He=>Ln(He)).length,ln=wo.filter(He=>Ws(He)).length,vn=ts.filter(He=>Ws(He)).length,ko=y.useCallback((He,ut)=>{He.stopPropagation();const It=ut.commit.id;if(He.shiftKey?(Oe(Yn=>Yn.includes(It)?Yn.filter(wn=>wn!==It):[...Yn,It]),tt(It)):(Oe(Yn=>Yn.includes(It)?[]:[It]),tt(Yn=>Yn===It?null:It)),!(He.metaKey||He.ctrlKey||He.detail>=2)||It==="WORKING_TREE")return;const Yt=It.length>=40?It.slice(0,7):It;let qt=null;if(ut.commit.branchName?(qt=On(ut.commit.branchName,It,Yt),qt||(qt=qn(ut.commit.branchName))):qt=$t(It,Yt),qt&&le){le(qt.path);return}h==null||h({commitSha:It})},[$t,On,qn,h,le]),Ds=y.useCallback(async()=>{if(!ye)return;await ye(dt)&&(Xe(!1),ht(""))},[ye,dt]),oo=y.useCallback(async()=>{$&&(await $({branchNames:[],discardUncommittedChanges:be,stashIndices:re}),Fe(!1),Oe([]),tt(null))},[$,be,re]),io=y.useCallback(async()=>{const He=pe.trim();if(He){if(Ve==="new-root"){if(!B)return;await B(He)}else{if(!Me||Xt.length!==1)return;const ut=Xt[0];if(!(ut==="WORKING_TREE"||ut.startsWith("STASH:")))return;await Me(ut,He)}J(!1),we(""),We("from-selected-node"),Oe([]),tt(null)}},[Ve,pe,Me,B,Xt]),Et=Xt.length===1&&(Xt[0]==="WORKING_TREE"||Xt[0].startsWith("STASH:")),Ri=!!B;return y.useEffect(()=>{if(I){if(!Et&&Ri){We("new-root");return}Et&&We("from-selected-node")}},[Ri,I,Et]),r.jsxs("div",{className:"relative flex h-full min-h-0 flex-col overflow-hidden border border-border bg-card",children:[r.jsx(aw,{isOpen:pn,onToggle:()=>lt(He=>!He),onClose:()=>lt(!1),visibleBounds:Hn,renderedNodeCount:Bs,totalNodeCount:mn.length,renderedMergeConnectorCount:ln,totalMergeConnectorCount:wo.length,renderedConnectorCount:vn,totalConnectorCount:ts.length,mapGridCullViewportInsetScreenPx:Uv,debugRows:ps,branchDebugRows:ii,connectorDecisions:Xo}),nt.length===0?r.jsx("div",{className:"flex flex-1 min-h-0 items-center justify-center py-20",children:r.jsx("div",{className:"rounded-xl border border-border/50 bg-muted/30 px-4 py-3",children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"No commits to render"})})}):r.jsx(ow,{scrollContainerRef:K,mapPadHostRef:Be,transformLayerRef:Ye,isMarqueeSelecting:oe,contentWidth:vo,contentHeight:Vs,isCameraMoving:it,onWheel:xn,onMouseDown:mt,labelTopPx:No,inverseZoomStyle:Ao,displayZoom:Zs,iconScaleStyle:So,selectedVisibleCommitShas:Xt,normalizedSearchQuery:Ps,matchingNodeIds:lo,focusedNode:Hs,renderNodes:mn,shouldRenderNode:Ln,manuallyOpenedClumps:ft,manuallyClosedClumps:et,defaultCollapsedClumps:Ts,leadByClusterKey:no,clusterKeyByCommitId:bo,clusterCounts:An,commitIdsWithRenderedAncestry:$o,nodeWarnings:Do,connectorParentShas:co,branchStartShas:Cs,branchOffNodeShas:Us,crossBranchOutgoingShas:Bn,branchBaseCommitByName:bi,branchStartAccentClass:Go,connectorParentAccentClass:fo,commitCornerRadiusPx:In,lineStrokeWidth:uo,connectorCornerRadiusPx:fs,pointFormatter:Ni,connectors:ts,mergeConnectors:wo,cullConnectorPath:Ws,flushCameraReactTick:ms,setManuallyOpenedClumps:Tt,setManuallyClosedClumps:At,onCommitCardClick:ko,unpushedCommitShasSetByBranch:Es,checkedOutHeadSha:dn}),fe&&oe?r.jsx("div",{className:"pointer-events-none absolute z-[60] border",style:{left:fe.left,top:fe.top,width:fe.width,height:fe.height,borderColor:"#068CFD",borderWidth:"1.5px",backgroundColor:"transparent",borderRadius:0}}):null,r.jsx(iw,{selectedVisibleCommitShas:Xt,commitInProgress:z,commitDisabled:me,stageInProgress:ve,stashInProgress:te,stashDisabled:ue,pushInProgress:T,deleteInProgress:F,createBranchFromNodeInProgress:P,onCommitLocalChanges:ye,onStageAllChanges:G?()=>void G():void 0,onStashLocalChanges:q,onPushCurrentBranch:R,onPushAllBranches:M,onPushCommitTargets:A,onDeleteSelection:$,onCreateBranchFromNode:Me,onMergeRefsIntoBranch:C,selectedPushTargets:se,selectedPushLabel:xt,canPushCurrentBranch:ct,pushCurrentBranchLabel:ot,pushableRemoteBranchCount:kt,deletableSelectionCount:Le,canCreateRootBranch:Ri,selectedCommitTargetOption:D,mergeInProgress:k,mergeTargetCommitSha:st,setMergeTargetCommitSha:tt,worktrees:U,currentRepoPath:Q,worktreeMenuOpen:De,setWorktreeMenuOpen:Je,onSwitchToWorktree:le,onRemoveWorktree:X,removeWorktreeInProgress:ne,setCommitDialogOpen:Xe,setDeleteConfirmOpen:Fe,setNewBranchDialogOpen:J}),r.jsx(rw,{commitDialogOpen:at,commitMessageDraft:dt,onCommitMessageDraftChange:ht,onCommitDialogClose:()=>Xe(!1),onCommitConfirm:()=>void Ds(),commitInProgress:z,deleteConfirmOpen:Ie,deleteSelectionItems:_t,onDeleteConfirmClose:()=>Fe(!1),onDeleteConfirm:()=>void oo(),deleteInProgress:F,deletableSelectionCount:Le,newBranchDialogOpen:I,newBranchName:pe,newBranchCreateMode:Ve,onNewBranchNameChange:we,onNewBranchCreateModeChange:We,onNewBranchDialogClose:()=>J(!1),onNewBranchConfirm:()=>void io(),selectedCommitCanCreateBranch:Et,createBranchFromNodeInProgress:P})]})}function dw({branches:t,mergeNodes:n=[],directCommits:i=[],unpushedDirectCommits:a=[],unpushedCommitShasByBranch:c={},openPRs:u=[],defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g={},branchCommitPreviews:_={},branchUniqueAheadCounts:x={},gridSearchQuery:b="",gridSearchJumpToken:w=0,gridFocusSha:S=null,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,view:M="time",isLoading:R=!1,scrollRequest:A,focusedErrorBranch:T,checkedOutRef:$=null,mapTopInsetPx:F=0,onMergeRefsIntoBranch:U,mergeInProgress:Q=!1,onPushAllBranches:X,onPushCurrentBranch:ne,onPushCommitTargets:le,pushInProgress:q=!1,onDeleteSelection:te,deleteInProgress:ue=!1,worktrees:ye=[],currentRepoPath:z,onRemoveWorktree:me,removeWorktreeInProgress:G=!1,onSwitchToWorktree:ve,onStashLocalChanges:Me,stashInProgress:B=!1,stashDisabled:P=!1,onCommitLocalChanges:L,commitInProgress:ie=!1,commitDisabled:$e=!1,onStageAllChanges:Te,stageInProgress:Re=!1,onCreateBranchFromNode:Qe,onCreateRootBranch:Ze,createBranchFromNodeInProgress:Ut=!1,onMoveNodeBackToBranch:Ft,orientation:Dt="horizontal",onInteractionChange:zt,manuallyOpenedClumps:sn,manuallyClosedClumps:rn,setManuallyOpenedClumps:qe,setManuallyClosedClumps:Se,layoutModel:K}){const Be=new Set(u.map(Xe=>Xe.branchName)),Ye=14*864e5,De=Date.now();function Je(Xe){return Be.has(Xe.name)||De-new Date(Xe.lastCommitDate).getTime()<=Ye}const at=t.filter(Xe=>Xe.status==="stale"&&Je(Xe)).sort((Xe,dt)=>new Date(dt.lastCommitDate).getTime()-new Date(Xe.lastCommitDate).getTime());return r.jsx("div",{className:"h-full flex flex-col",children:M==="time"?r.jsx("div",{className:"flex-1 min-h-0",children:r.jsx(by,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,unpushedCommitShasByBranch:c,openPRs:u,defaultBranch:d,onCommitClick:h,onLoadMore:p,branchPromptMeta:g,branchCommitPreviews:_,branchUniqueAheadCounts:x,staleBranches:at,isLoading:R,scrollRequest:A,focusedErrorBranch:T,checkedOutRef:$,mapTopInsetPx:F,onMergeRefsIntoBranch:U,mergeInProgress:Q,onPushAllBranches:X,onPushCurrentBranch:ne,onPushCommitTargets:le,pushInProgress:q,onDeleteSelection:te,deleteInProgress:ue,worktrees:ye,currentRepoPath:z,onRemoveWorktree:me,removeWorktreeInProgress:G,onSwitchToWorktree:ve,onStashLocalChanges:Me,stashInProgress:B,stashDisabled:P,onCommitLocalChanges:L,commitInProgress:ie,commitDisabled:$e,onStageAllChanges:Te,stageInProgress:Re,onCreateBranchFromNode:Qe,onCreateRootBranch:Ze,createBranchFromNodeInProgress:Ut,onMoveNodeBackToBranch:Ft,orientation:Dt,onInteractionChange:zt,manuallyOpenedClumps:sn,manuallyClosedClumps:rn,setManuallyOpenedClumps:qe,setManuallyClosedClumps:Se,layoutModel:K})}):M==="grid"?r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(by,{branches:t,mergeNodes:n,directCommits:i,unpushedDirectCommits:a,defaultBranch:d,branchCommitPreviews:_,branchUniqueAheadCounts:x,gridSearchQuery:b,gridSearchJumpToken:w,gridFocusSha:S,checkedOutRef:$,onGridSearchResultCountChange:C,onGridSearchFocusChange:k,onInteractionChange:zt,manuallyOpenedClumps:sn,manuallyClosedClumps:rn,setManuallyOpenedClumps:qe,setManuallyClosedClumps:Se,layoutModel:K,orientation:Dt})}):null})}function fw(t,n){var u;const i=new Map(t.map(d=>[d.name,d])),a=new Map;for(const d of t){const h=d.parentBranch;if(!h||h===d.name||!(i.has(h)||h===n))continue;const g=(u=a.get(h))!=null?u:[];g.push(d.name),a.set(h,g)}const c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=i.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=i.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g};for(const[d,h]of a.entries())h.sort(c);return a}function hw(t,n,i){const a=new Map(t.map(d=>[d.name,d])),c=(d,h)=>{var _,x,b,w;const p=new Date((x=(_=a.get(d))==null?void 0:_.lastCommitDate)!=null?x:0).getTime(),g=new Date((w=(b=a.get(h))==null?void 0:b.lastCommitDate)!=null?w:0).getTime();return p-g},u=new Set;for(const d of i.values())for(const h of d)u.add(h);return t.map(d=>d.name).filter(d=>!u.has(d)).sort((d,h)=>d===n?-1:h===n?1:c(d,h))}function vy(t,n,i,a){const c=new Set([a]);if(!(i!=null&&i.branchName))return c;const u=(d,h)=>{var p;for(const g of d){const _=[...h,g];if(g===i.branchName){for(const x of _)c.add(x);return!0}if(u((p=n.get(g))!=null?p:[],_))return!0}return!1};return u(t,[]),c}function Mm({branchName:t,depth:n,isLast:i,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:_,showCommits:x,getMergeTargetLabels:b,sourceBranchName:w,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:R}){var L,ie,$e;if(_.has(t)||!a.get(t))return null;const T=(L=d.get(t))!=null?L:null,$=T?T.slice(0,7):"none",F=(ie=u.get(t))!=null?ie:[],U=F.length>0,Q=y.useMemo(()=>{var Te;return[...(Te=c[t])!=null?Te:[]]},[c,t]),X=x&&Q.length>0,ne=x,le=U||X,q=h.has(t),te=ne?Q:[],ue=q&&te.length>0,ye=g===t,z=new Set(_);z.add(t);const me="top-[-0.2rem] h-4.5 w-[10px]",G="rounded-bl-[7px]",ve="left-[0.65rem]",Me=new Map,B=[];for(const Te of F){const Re=d.get(Te);if(Re){const Qe=te.findIndex(Ze=>xo(Ze.fullSha,Re)||xo(Ze.sha,Re));if(Qe>=0){const Ze=($e=Me.get(Qe))!=null?$e:[];Ze.push(Te),Me.set(Qe,Ze);continue}}B.push(Te)}const P=y.useMemo(()=>{if(!x||te.length===0)return[];const Te=[];let Re=[],Qe=null;const Ze=()=>{if(Re.length===0)return;const Ut=Re[Re.length-1],Ft=`sidebar-single-${t}-${Ut.fullSha}`;Te.push({key:Qe!=null?Qe:Ft,commits:Re,count:Re.length,lead:Ut}),Re=[],Qe=null};return te.forEach(Ut=>{var Dt;const Ft=(Dt=S.get(`${t}:${Ut.fullSha}`))!=null?Dt:null;if(Re.length===0){Re=[Ut],Qe=Ft;return}if(Ft===Qe){Re.push(Ut);return}Ze(),Re=[Ut],Qe=Ft}),Ze(),Te},[t,x,te,S]);return r.jsxs("li",{className:Qs("relative",n>0?"pl-4":"pl-0",n===0&&!i?q?"mb-12":"mb-1":""),children:[n>0?r.jsx("span",{"aria-hidden":"true",className:Qs("absolute w-3 border-b-[1.5px] border-l-[1.5px] border-border/60",G,ve,me)}):null,!i&&n>0?r.jsx("span",{"aria-hidden":"true",className:Qs("absolute top-0 bottom-[-1rem] border-l-[1.5px] border-border/50",ve)}):null,r.jsx("div",{className:"flex items-center gap-1",children:r.jsxs("button",{type:"button",onClick:()=>{le&&p(t),R==null||R(t)},className:Qs("group flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1 text-left text-sm transition-colors hover:bg-accent",ye?"text-foreground":"text-muted-foreground hover:text-foreground"),children:[le?r.jsx("span",{className:Qs("inline-block text-[10px] text-muted-foreground transition-transform",q?"rotate-90":""),children:"▶"}):null,r.jsxs("span",{className:"min-w-0 break-words",children:[r.jsx("span",{className:Qs(ye?"font-medium text-foreground":"font-normal"),children:t}),r.jsxs("span",{className:"ml-1 text-[10px] text-muted-foreground/80",children:["(parent ",$,")"]})]})]})}),ue?r.jsx("ul",{className:"relative space-y-1 pl-4",children:P.map(Te=>{const Re=Te.count>1&&!C(Te.key);return(Re?[Te.lead]:Te.commits).map(Ze=>{var Dt;const Ut=te.findIndex(zt=>zt.fullSha===Ze.fullSha),Ft=b(Ze.fullSha,w!=null?w:t);return r.jsxs("li",{children:[r.jsxs("div",{className:"flex items-start gap-1",children:[r.jsx("button",{type:"button",onClick:()=>M==null?void 0:M(Ze.fullSha),className:"min-w-0 flex-1 break-words rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",title:Ze.message,children:Ze.message}),Te.count>1&&Ze.fullSha===Te.lead.fullSha?r.jsx("button",{type:"button","data-clump-toggle-id":`${t}:${Te.lead.fullSha}`,onClick:()=>k(Te.key,`${t}:${Te.lead.fullSha}`),className:Qs("shrink-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-muted-foreground",Re?"":"min-w-[2ch] text-center"),children:Re?`+${Math.max(1,Te.count-1)}`:"−"}):null]}),Ft.length>0?r.jsx("div",{className:"mt-1 space-y-1",children:Ft.map(zt=>r.jsxs("div",{className:"min-w-0 rounded-md px-2 py-1 text-left text-sm leading-5 text-muted-foreground/70",children:[r.jsx("span",{children:"Merged from "}),r.jsx("span",{className:"font-medium text-muted-foreground",children:zt})]},`${Ze.fullSha}:${zt}`))}):null,(Dt=Me.get(Ut))!=null&&Dt.length?r.jsx("ul",{className:"relative mb-1.75 space-y-2",children:Me.get(Ut).map((zt,sn,rn)=>r.jsx(Mm,{branchName:zt,depth:n+1,isLast:sn===rn.length-1&&B.length===0,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:zt,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:R},zt))}):null]},`${t}:${Ze.fullSha}`)})})}):null,U&&q&&B.length>0?r.jsx("ul",{className:"relative mb-3.5 space-y-1",children:B.map((Te,Re)=>r.jsx(Mm,{branchName:Te,depth:n+1,isLast:Re===B.length-1,branchByName:a,branchCommitPreviews:c,childNamesByParent:u,branchAnchorShaByName:d,expandedBranchNames:h,onToggleBranch:p,checkedOutBranchName:g,ancestors:z,showCommits:x,getMergeTargetLabels:b,sourceBranchName:Te,clusterKeyByCommitId:S,isGridClusterOpen:C,onToggleGridCluster:k,onSelectCommit:M,onSelectBranch:R},Te))}):null]})}function mw({branches:t,defaultBranch:n,branchCommitPreviews:i,directCommits:a=[],mergeNodes:c=[],checkedOutRef:u,manuallyOpenedClumps:d,manuallyClosedClumps:h,setManuallyOpenedClumps:p,setManuallyClosedClumps:g,gridLayoutModel:_,onSelectCommit:x,onSelectBranch:b,className:w}){var zt,sn,rn;const S=y.useRef(null),C=y.useRef(null),[k,M]=y.useState(!0),[R,A]=y.useState(()=>new Set),[T,$]=y.useState(()=>new Set),F=d!=null?d:R,U=h!=null?h:T,Q=p!=null?p:A,X=g!=null?g:$,[ne,le]=y.useState(null),[q,te]=y.useState(null),ue=y.useMemo(()=>[...a].sort((qe,Se)=>new Date(qe.date).getTime()-new Date(Se.date).getTime()),[a]),ye=y.useMemo(()=>{var Se,K,Be,Ye;const qe=ue[ue.length-1];return{name:n,commitsAhead:0,commitsBehind:0,createdFromSha:(Se=qe==null?void 0:qe.fullSha)!=null?Se:void 0,createdDate:qe==null?void 0:qe.date,lastCommitDate:(K=qe==null?void 0:qe.date)!=null?K:new Date(0).toISOString(),lastCommitAuthor:(Be=qe==null?void 0:qe.author)!=null?Be:"Unknown",status:"fresh",remoteSyncStatus:"on-github",unpushedCommits:0,headSha:(Ye=qe==null?void 0:qe.fullSha)!=null?Ye:"",parentBranch:void 0,divergedFromSha:void 0,divergedFromDate:void 0}},[n,ue]),z=y.useMemo(()=>t.some(qe=>qe.name===n)?t:[ye,...t],[t,n,ye]),me=y.useMemo(()=>{const qe=ue.map(Se=>{var K,Be;return{fullSha:Se.fullSha,sha:Se.sha,parentSha:(K=Se.parentSha)!=null?K:null,message:Se.message,author:Se.author,date:Se.date,kind:(Be=Se.kind)!=null?Be:"commit"}});return{...i,[n]:qe}},[i,n,ue]),G=y.useMemo(()=>{var K,Be,Ye;if(!_)return me;const qe=new Map(_.nodes.map(De=>[De.commit.visualId,De.row])),Se={};for(const De of _.allCommits){const Je=(K=Se[De.branchName])!=null?K:[];Je.push({fullSha:De.id,sha:De.id.slice(0,7),parentSha:(Be=De.parentSha)!=null?Be:null,message:De.message,author:De.author,date:De.date,kind:(Ye=De.kind)!=null?Ye:"commit"}),Se[De.branchName]=Je}for(const De of Object.keys(Se))Se[De]=Se[De].sort((Je,at)=>{var Fe,I;const Xe=(Fe=qe.get(`${De}:${Je.fullSha}`))!=null?Fe:Number.MAX_SAFE_INTEGER,dt=(I=qe.get(`${De}:${at.fullSha}`))!=null?I:Number.MAX_SAFE_INTEGER;if(Xe!==dt)return Xe-dt;const ht=new Date(Je.date).getTime(),Ie=new Date(at.date).getTime();return ht!==Ie?ht-Ie:Je.fullSha.localeCompare(at.fullSha)});return Se},[_,me]),ve=y.useMemo(()=>{var K,Be,Ye,De;const qe=new Map,Se=(Je,at)=>{const Xe=z.filter(ht=>ht.name!==at).filter(ht=>xo(ht.headSha,Je)).map(ht=>ht.name);if(Xe.length>0)return Xe.sort()[0];const dt=Object.entries(G).filter(([ht])=>ht!==at).flatMap(([ht,Ie])=>{const Fe=Ie[Ie.length-1];return Fe?xo(Fe.fullSha,Je)||xo(Fe.sha,Je)?[ht]:[]:[]});return dt.length>0?dt.sort()[0]:Je.slice(0,7)};for(const Je of c){const at=(K=Je.targetBranch)!=null?K:n;if(!at||!Je.fullSha)continue;const Xe=((Be=Je.parentShas)!=null?Be:[]).slice(1).filter(Ie=>!!Ie&&!xo(Ie,Je.fullSha));if(Xe.length===0)continue;const dt=(Ye=qe.get(at))!=null?Ye:new Map,ht=(De=dt.get(Je.fullSha))!=null?De:new Set;for(const Ie of Xe)ht.add(Se(Ie,at));dt.set(Je.fullSha,ht),qe.set(at,dt)}return qe},[c,n,z,G]),Me=(qe,Se)=>{const K=ve.get(Se);if(!K)return[];for(const[Be,Ye]of K.entries())if(xo(qe,Be))return Array.from(Ye).sort();return[]},B=y.useMemo(()=>fw(z,n),[z,n]),P=y.useMemo(()=>hw(z,n,B),[z,n,B]),L=y.useMemo(()=>new Map(z.map(qe=>[qe.name,qe])),[z]),ie=y.useMemo(()=>{var K,Be;const qe=new Map,Se=_?G:me;for(const Ye of z){const De=(Be=(K=_==null?void 0:_.firstBranchCommitByName.get(Ye.name))==null?void 0:K.parentSha)!=null?Be:null,Je=De!=null?De:Cm(Ye,n,Se);qe.set(Ye.name,Je)}return qe},[z,_,n,me,G]),[$e,Te]=y.useState(()=>vy(P,B,u,n));y.useEffect(()=>{Te(qe=>{const Se=vy(P,B,u,n),K=new Set(qe);for(const Be of Se)K.add(Be);return K})},[P,B,u,n]);const Re=(zt=u==null?void 0:u.branchName)!=null?zt:null,Qe=(sn=_==null?void 0:_.clusterKeyByCommitId)!=null?sn:new Map,Ze=(rn=_==null?void 0:_.defaultCollapsedClumps)!=null?rn:new Set,Ut=qe=>F.has(qe)||!Ze.has(qe)&&!U.has(qe),Ft=(qe,Se)=>{const K=S.current,Be=C.current;if(K&&Be){const Ye=`[data-clump-toggle-id="${Se}"]`,De=K.querySelector(Ye);if(De){const Je=De.getBoundingClientRect().top-Be.getBoundingClientRect().top;te({id:Se,topWithinScrollBody:Je})}else te(null)}else te(null);le(Se),Q(Ye=>{const De=new Set(Ye),Je=Ut(qe);return X(at=>{const Xe=new Set(at);return Je?(De.delete(qe),Xe.add(qe)):(Xe.delete(qe),De.add(qe)),Xe}),De})};y.useLayoutEffect(()=>{if(!ne)return;const qe=S.current,Se=C.current;if(!qe||!Se)return;const K=`[data-clump-toggle-id="${ne}"]`,Be=qe.querySelector(K);if(Be){if((q==null?void 0:q.id)===ne){const De=Be.getBoundingClientRect().top-Se.getBoundingClientRect().top-q.topWithinScrollBody;Number.isFinite(De)&&De!==0&&(Se.scrollTop+=De)}Be.focus({preventScroll:!0}),le(null),te(null)}},[F,U,ne,q]);const Dt=qe=>{Te(Se=>{const K=new Set(Se);return K.has(qe)?K.delete(qe):K.add(qe),K})};return r.jsxs("aside",{ref:S,"aria-label":"Dense branch sidebar",className:Qs("pointer-events-auto h-full",w),children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3 px-5",children:[r.jsx("h2",{className:"text-sm font-medium text-foreground",children:"Branches"}),r.jsx("button",{type:"button",onClick:()=>M(qe=>!qe),className:"shrink-0 rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:k?"Hide commits":"Show commits"})]}),r.jsx("div",{ref:C,className:"h-[calc(100%-1.75rem)] overflow-y-auto",children:r.jsx("ul",{className:"px-5",children:P.map((qe,Se)=>r.jsx(Mm,{branchName:qe,depth:0,isLast:Se===P.length-1,branchByName:L,branchCommitPreviews:G,childNamesByParent:B,branchAnchorShaByName:ie,expandedBranchNames:$e,onToggleBranch:Dt,checkedOutBranchName:Re,ancestors:new Set,showCommits:k,getMergeTargetLabels:Me,sourceBranchName:qe,clusterKeyByCommitId:Qe,isGridClusterOpen:Ut,onToggleGridCluster:Ft,onSelectCommit:x,onSelectBranch:b},qe))})})]})}function pw({onSelect:t,onClose:n}){const[i,a]=y.useState(""),[c,u]=y.useState(""),[d,h]=y.useState([]),[p,g]=y.useState([]),[_,x]=y.useState(!1),[b,w]=y.useState(!1),[S,C]=y.useState(null),[k,M]=y.useState(""),[R,A]=y.useState(0),[T,$]=y.useState(-1),F=y.useRef(null),U=y.useRef(null),Q=y.useRef(0),X=i.length>=2;y.useEffect(()=>{ge("get_home_dir").then(L=>{M(L),u(L)})},[]),y.useEffect(()=>{var L;(L=F.current)==null||L.focus()},[]),y.useEffect(()=>{c&&!X&&ne(c)},[c,X]),y.useEffect(()=>{if(U.current&&clearTimeout(U.current),!i||i.length<2){g([]),w(!1),Q.current+=1;return}w(!0);const L=Q.current+1;return Q.current=L,U.current=setTimeout(async()=>{try{const $e=await ge("search_directories",{path:c,query:i,maxDepth:c===k?3:2,limit:15});if(Q.current!==L)return;g($e),A(0)}catch(ie){if(Q.current!==L)return;console.error("Search failed:",ie),g([])}finally{if(Q.current!==L)return;w(!1)}},220),()=>{U.current&&clearTimeout(U.current)}},[i,c,k]),y.useEffect(()=>{X||A(0)},[d,X]);async function ne(L){x(!0),C(null),$(-1);try{const ie=await ge("list_directory",{path:L});h(ie.filter($e=>$e.isDir))}catch(ie){C(ie instanceof Error?ie.message:String(ie)),h([])}finally{x(!1)}}const le=X?p:d,q=y.useCallback(L=>{a(""),u(L)},[]),te=y.useCallback(()=>{if(c==="/")return;const L=c.split("/").slice(0,-1).join("/")||"/";q(L)},[c,q]),ue=y.useCallback(()=>{k&&q(k)},[k,q]);function ye(L){L.isRepo?t(L.path):q(L.path)}function z(){var ie;const L=(ie=le[R])!=null?ie:T>=0?le[T]:void 0;L?ye(L):t(c)}function me(L){if(L.key==="Escape")i?(a(""),L.preventDefault()):(n(),L.preventDefault());else if(L.key==="Enter")z(),L.preventDefault();else if(L.key==="ArrowDown")L.preventDefault(),A(ie=>Math.min(ie+1,le.length-1));else if(L.key==="ArrowUp")L.preventDefault(),A(ie=>Math.max(ie-1,0));else if(L.key==="ArrowLeft"&&!X)L.preventDefault(),te();else if(L.key==="ArrowRight"||L.key==="Tab"){const ie=le[R];ie?(L.preventDefault(),q(ie.path)):L.key==="Tab"&&L.preventDefault()}else L.key==="Backspace"&&!i&&!X&&(L.preventDefault(),te())}function G(L){L.target===L.currentTarget&&n()}function ve(L){return k&&L.startsWith(k)?"~"+L.slice(k.length):L}function Me(L){const ie=L.split("/").filter(Boolean),$e=[];let Te="";for(const Re of ie)Te+="/"+Re,$e.push({name:Re,path:Te});return $e}function B(L,ie){if(!ie)return L;const $e=L.toLowerCase().indexOf(ie.toLowerCase());return $e===-1?L:r.jsxs(r.Fragment,{children:[L.slice(0,$e),r.jsx("mark",{className:"bg-primary/20 text-primary rounded px-0.5",children:L.slice($e,$e+ie.length)}),L.slice($e+ie.length)]})}const P=Me(c);return r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-[12vh]",onClick:G,onKeyDown:L=>L.key==="Escape"&&n(),children:r.jsxs("div",{className:"bg-card rounded-xl shadow-lg flex flex-col overflow-hidden border border-border w-[520px] max-w-[90vw] max-h-[65vh]",children:[r.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-border",children:[r.jsxs("div",{className:"flex-1 flex items-center gap-0.5 overflow-x-auto",children:[r.jsx("button",{className:"flex items-center p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:ue,title:"Home (~)",children:r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),P.map((L,ie)=>r.jsxs("span",{className:"flex items-center",children:[r.jsx("svg",{className:"w-3 h-3 text-muted-foreground mx-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),r.jsx("button",{className:`px-1.5 py-1 hover:bg-accent rounded-lg text-sm whitespace-nowrap transition-colors ${ie===P.length-1?"text-foreground font-medium":"text-muted-foreground hover:text-foreground"}`,onClick:()=>q(L.path),children:L.name})]},L.path))]}),r.jsx("button",{className:"p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:n,title:"Close (Esc)",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border",children:[r.jsx("div",{className:`flex items-center justify-center text-muted-foreground ${b?"opacity-70":""}`,children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),r.jsx("input",{ref:F,type:"text",className:"flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm",placeholder:"Search folders...",value:i,onChange:L=>a(L.target.value),onKeyDown:me,autoComplete:"off",spellCheck:!1}),i&&r.jsx("button",{className:"p-1 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors",onClick:()=>a(""),title:"Clear",children:r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsx("div",{className:"flex-1 overflow-y-auto py-1",children:_&&!X?r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Loading..."}):S&&!X?r.jsx("div",{className:"py-6 text-center text-destructive text-sm",children:S}):r.jsx(r.Fragment,{children:X?p.length>0?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex items-center gap-1.5 px-4 py-2",children:[r.jsx("svg",{className:"w-3 h-3 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),r.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium",children:"Results"})]}),p.map((L,ie)=>r.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${ie===T?"bg-primary/10":ie===R?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(ie),A(ie)},onDoubleClick:()=>ye(L),onMouseEnter:()=>A(ie),children:[r.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${L.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:L.isRepo?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("div",{className:"truncate text-foreground",children:B(L.name,i)}),r.jsx("div",{className:"text-xs text-muted-foreground font-mono truncate",children:B(ve(L.path),i)})]}),r.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},L.path))]}):b?null:r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"No matching folders"}):d.length>0?d.map((L,ie)=>r.jsxs("button",{className:`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${ie===T?"bg-primary/10":ie===R?"bg-accent":"hover:bg-accent"}`,onClick:()=>{$(ie),A(ie)},onDoubleClick:()=>ye(L),onMouseEnter:()=>A(ie),children:[r.jsx("svg",{className:`w-4 h-4 flex-shrink-0 ${L.isRepo?"text-blue-400":"text-muted-foreground"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:L.isRepo?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),r.jsx("span",{className:"flex-1 truncate text-foreground",children:L.name}),r.jsx("svg",{className:"w-3.5 h-3.5 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},L.path)):_?null:r.jsx("div",{className:"py-6 text-center text-muted-foreground text-sm",children:"Empty directory"})})}),r.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-t border-border bg-card/50",children:[r.jsxs("span",{className:"text-xs text-muted-foreground",children:[r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5",children:"↑↓"})," navigate",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Enter"})," open",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"Tab"})," drill in",r.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono mx-0.5 ml-2",children:"←"})," back"]}),r.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-sm font-medium transition-opacity",onClick:z,children:"Open"})]})]})})}const Gr=(t,n)=>!t||!n?!1:t===n||t.startsWith(n)||n.startsWith(t);function _w(t,n,i,a,c,u){var X,ne,le,q;const d=t.baseSha,h=`STASH:${t.index}`,p=`Stash ${t.index+1}`,g=(ne=(X=i[0])==null?void 0:X.fullSha)!=null?ne:null,_=[{name:u,headSha:g!=null?g:"",isDefault:!0},...n.map(te=>({name:te.name,headSha:te.headSha,isDefault:!1}))],x=d?_.filter(te=>Gr(te.headSha,d)):[],b=(le=x.find(te=>te.isDefault))!=null?le:x[0],w=!!(b&&d&&Gr(b.headSha,d)),S=b&&!b.isDefault?n.find(te=>te.name===b.name):void 0,C=(()=>{var ue;if(!d)return null;const te=i.find(ye=>Gr(ye.fullSha,d)||Gr(ye.sha,d));if(te!=null&&te.date)return te.date;if(S){const ye=((ue=a[S.name])!=null?ue:[]).find(z=>Gr(z.fullSha,d)||Gr(z.sha,d));if(ye!=null&&ye.date)return ye.date}return null})(),k=C?new Date(C).getTime():Number.NaN,M=Date.now(),R=Number.isFinite(k)?Math.max(M,k+1+t.index):M+t.index,A=new Date(R).toISOString(),T=t.message.trim(),$={fullSha:h,sha:p,parentSha:d,message:T||p,author:"You",date:A,kind:"stash"},F={fullSha:h,sha:p,parentSha:d,message:T||p,author:"You",date:A,kind:"stash"};if(w&&(b!=null&&b.isDefault))return{branches:n,branchCommitPreviews:a,branchUniqueAheadCounts:c,directCommits:[...i,F]};if(w&&S)return{branches:n.map(ue=>ue.name===S.name?{...ue,commitsAhead:ue.commitsAhead+1,unpushedCommits:ue.unpushedCommits+1,lastCommitDate:A,headSha:h}:ue),directCommits:i,branchCommitPreviews:{...a,[S.name]:[$,...a[S.name]||[]]},branchUniqueAheadCounts:{...c,[S.name]:Math.max(0,(q=Object.prototype.hasOwnProperty.call(c,S.name)?c[S.name]:S.commitsAhead)!=null?q:0)+1}};const U=`*Stash:${t.index}`;return{branches:[{name:U,commitsAhead:1,commitsBehind:0,lastCommitDate:A,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:h,divergedFromSha:d!=null?d:void 0,parentBranch:(b==null?void 0:b.name)||u},...n],directCommits:i,branchCommitPreviews:{...a,[U]:[$]},branchUniqueAheadCounts:{...c,[U]:1}}}function gw(t,n,i,a,c,u){const d=[...t].sort((p,g)=>p.index-g.index);let h={branches:n,directCommits:i,branchCommitPreviews:a,branchUniqueAheadCounts:c};for(const p of d)h=_w(p,h.branches,h.directCommits,h.branchCommitPreviews,h.branchUniqueAheadCounts,u);return h}const yw="git-visualizer",Uu=!1,wy=1400,xw=180;function bw(...t){return t.filter(Boolean).join(" ")}function vw(t){var a;if(!t)return"";const i=t.replace(/\\/g,"/").replace(/\/+$/,"").split("/");return(a=i[i.length-1])!=null?a:""}function Sy(t){return vw(t)===yw}function ww(){var Es,ri;const[t,n]=y.useState(null),[i,a]=y.useState(""),[c,u]=y.useState([]),[d,h]=y.useState([]),[p,g]=y.useState([]),[_,x]=y.useState([]),[b,w]=y.useState({}),[S,C]=y.useState([]),[k,M]=y.useState("main"),[R,A]=y.useState(null),[T,$]=y.useState([]),[F,U]=y.useState(!1),[Q,X]=y.useState(""),[ne,le]=y.useState(0),[q,te]=y.useState(()=>new Set),[ue,ye]=y.useState(()=>new Set),[z,me]=y.useState(null),[G,ve]=y.useState(null),[Me,B]=y.useState(!1),[P,L]=y.useState(!1),[ie,$e]=y.useState(null),[Te,Re]=y.useState("landing"),[Qe,Ze]=y.useState(!1),[Ut,Ft]=y.useState(!1),[Dt,zt]=y.useState("active"),[sn,rn]=y.useState(null),[qe,Se]=y.useState(null),[K,Be]=y.useState(!1),[Ye,De]=y.useState(null),[Je,at]=y.useState(!1),[Xe,dt]=y.useState(null),[ht,Ie]=y.useState(null),[Fe,I]=y.useState(!1),[J,pe]=y.useState(!1),[we,Ve]=y.useState(!1),[We,Ae]=y.useState(!1),[Rt,Mt]=y.useState({}),[Ht,ft]=y.useState({}),[et,Tt]=y.useState({}),[At,pn]=y.useState([]),[lt,Wt]=y.useState(!1),[Zt,Bt]=y.useState(!1),[En,it]=y.useState(!1),[en,Dn]=y.useState(!1),[yn,Jn]=y.useState(!1),Ms=y.useRef(null),ms=Sy(t),ws=y.useRef(!1),xn=y.useRef([]),es=y.useRef([]),bn=y.useRef(null);function Xn(oe){if(oe.button!==0)return;const fe=oe.target;if(fe!=null&&fe.closest(".window-no-drag"))return;const Ce=Sm();ge("start_window_drag").catch(()=>Ce.startDragging()).catch(Oe=>{console.warn("Failed to start window drag:",Oe)})}async function nt(oe,fe){const Oe=[];let st=0;for(;;){const tt=await ge("get_merge_nodes",{repoPath:oe,branch:fe,page:st,perPage:100});if(Oe.push(...tt.nodes.map(mt=>({...mt,targetBranch:fe}))),!tt.hasMore||tt.nodes.length===0)break;st+=1}return Oe}async function ps(oe,fe){var tt;const Ce=Array.from(new Set(fe.filter(mt=>!!mt)));if(Ce.length===0)return[];const Oe=await Promise.all(Ce.map(mt=>nt(oe,mt).catch(()=>[]))),st=new Map;for(const mt of Oe)for(const Jt of mt){const Xt=`${Jt.fullSha}:${(tt=Jt.targetBranch)!=null?tt:""}`;st.has(Xt)||st.set(Xt,Jt)}return Array.from(st.values())}const ii=oe=>oe.map(fe=>`${fe.name}|${fe.headSha}|${fe.commitsAhead}|${fe.commitsBehind}|${fe.unpushedCommits}|${fe.remoteSyncStatus}`).join("||"),bo=oe=>oe.map(fe=>fe.fullSha).join("|"),no=oe=>{var fe,Ce;return oe?`${(fe=oe.branchName)!=null?fe:""}|${oe.headSha}|${(Ce=oe.parentSha)!=null?Ce:""}|${oe.hasUncommittedChanges?1:0}`:"__none__"};async function An(oe,fe){const Ce=fe!=null?fe:k,[Oe,st,tt,mt,Jt,Xt]=await Promise.all([ge("get_branches",{repoPath:oe}),ge("get_direct_commits",{repoPath:oe,branch:Ce}),ge("get_unpushed_direct_commits",{repoPath:oe,branch:Ce}).catch(()=>[]),ge("get_checked_out_ref",{repoPath:oe}).catch(()=>null),ge("list_worktrees",{repoPath:oe}).catch(()=>[]),ge("list_stashes",{repoPath:oe}).catch(()=>[])]),ns=Array.from(new Set([Ce,...Oe.map(Pn=>Pn.name)])),Lt=await ps(oe,ns),dn=await Promise.all([Ce,...Oe.map(Pn=>Pn.name)].map(async Pn=>{const On=await ge("get_branch_unpushed_commit_shas",{repoPath:oe,branch:Pn}).catch(()=>[]);return[Pn,On]}));u(Oe),h(Lt),g(st),x(tt),w(Object.fromEntries(dn)),A(mt),$(Jt),pn(Xt)}async function ro(oe,fe){const[Ce,Oe,st]=await Promise.all([ge("get_branches",{repoPath:oe}).catch(()=>[]),ge("get_direct_commits",{repoPath:oe,branch:fe}).catch(()=>[]),ge("get_checked_out_ref",{repoPath:oe}).catch(()=>null)]);return ii(Ce)!==ii(xn.current)||bo(Oe)!==bo(es.current)||no(st)!==no(bn.current)}async function lo(oe){Ie(null),L(!0);try{const[fe,Ce]=await Promise.all([ge("get_repo_info",{repoPath:oe}),ge("get_default_branch",{repoPath:oe})]);a(fe.name),M(Ce),n(oe),await An(oe,Ce),Ts(oe),Ie({kind:"success",message:`Now targeting worktree at ${oe}`})}catch(fe){const Ce=fe instanceof Error?fe.message:String(fe);Ie({kind:"error",message:Ce}),console.error("Failed to switch worktree:",Ce)}finally{L(!1)}}async function Ps(oe,fe){if(!(!t||F)){U(!0),Ie(null);try{await ge("remove_worktree",{repoPath:t,worktreePath:oe,force:fe}),await An(t),Ie({kind:"success",message:`Removed worktree at ${oe}`})}catch(Ce){const Oe=Ce instanceof Error?Ce.message:String(Ce);Ie({kind:"error",message:Oe}),console.error("Failed to remove worktree:",Oe)}finally{U(!1)}}}async function Hs(oe){B(!0),L(!0),$e(null),u([]),h([]),g([]),x([]),w({}),Re("map"),await new Promise(fe=>setTimeout(fe,15));try{const[fe,Ce]=await Promise.all([ge("get_repo_info",{repoPath:oe}),ge("get_default_branch",{repoPath:oe})]);a(fe.name),M(Ce),n(oe),Sy(oe)&&(await An(oe,Ce),L(!1)),B(!1),Ts(oe)}catch(fe){console.error("Failed to load repo:",fe),$e(fe instanceof Error?fe.message:String(fe)),Re("landing"),n(null),B(!1),L(!1)}}async function Ts(oe){try{Be(!1),dt(null);const fe=await ge("get_github_info",{repoPath:oe}),Ce=await ge("get_github_auth_status");if(De(Ce),!Ce.ghAvailable||!Ce.authenticated)return;const Oe=await ge("get_open_prs",{owner:fe.owner,repo:fe.repo});C(Oe),Be(!0)}catch(fe){console.log("GitHub data not available:",fe),dt(fe instanceof Error?fe.message:String(fe)),Be(!1)}}y.useEffect(()=>{let oe=null,fe=!1;const Ce=(()=>{try{return Sm().label}catch{return null}})(),Oe=async tt=>{var Jt;const mt=(Jt=tt==null?void 0:tt.path)==null?void 0:Jt.trim();if(!(!mt||fe)){if(t===mt){Re("map");return}await Hs(mt)}};return(async()=>{Ce==="main"&&(oe=await lc("gitviz://open-repo",async mt=>{await Oe(mt.payload)}));const tt=await ge("take_pending_open_repo");await Oe(tt)})(),()=>{fe=!0,oe&&oe()}},[t]),y.useEffect(()=>{xn.current=c},[c]),y.useEffect(()=>{es.current=p},[p]),y.useEffect(()=>{bn.current=R},[R]),y.useEffect(()=>{ws.current=yn},[yn]),y.useEffect(()=>{if(!t||!k||ms)return;ge("watch_repo",{repoPath:t}).catch(console.error);let oe=!1,fe=!1,Ce,Oe=null;const st=new Set;let tt=null,mt=!1,Jt=!1,Xt=null,ns=null,Lt=null,dn=null;const Pn=W=>W.map(se=>`${se.name}|${se.headSha}|${se.commitsAhead}|${se.commitsBehind}|${se.unpushedCommits}|${se.remoteSyncStatus}`).join("||"),On=W=>W.map(se=>{var re,be;return`${se.fullSha}:${(re=se.targetBranch)!=null?re:""}:${((be=se.parentShas)!=null?be:[]).join(",")}`}).join("|"),qn=W=>W.map(se=>se.fullSha).join("|"),$t=async()=>{if(oe){fe=!0;return}oe=!0;try{const W=ge("get_branches",{repoPath:t}),se=ge("get_checked_out_ref",{repoPath:t}).catch(()=>null),re=ge("list_worktrees",{repoPath:t}).catch(()=>[]),be=ge("get_direct_commits",{repoPath:t,branch:k}),Le=ge("get_unpushed_direct_commits",{repoPath:t,branch:k}).catch(()=>[]),[_t,kt,ct,ot,xt]=await Promise.allSettled([W,se,re,be,Le]);if(mt)return;const wt=_t.status==="fulfilled"?_t.value:null;if(wt){const ln=Pn(wt);ln!==ns&&(ns=ln,u(wt))}if(ot.status==="fulfilled"){const ln=ot.value,vn=qn(ln);vn!==dn&&(dn=vn,g(ln))}xt.status==="fulfilled"&&x(xt.value),ct.status==="fulfilled"&&$(ct.value);const _n=[k,...(wt!=null?wt:[]).map(ln=>ln.name)],Nn=await Promise.all(_n.map(async ln=>{const vn=await ge("get_branch_unpushed_commit_shas",{repoPath:t,branch:ln}).catch(()=>[]);return[ln,vn]}));if(mt||w(Object.fromEntries(Nn)),ge("list_stashes",{repoPath:t}).then(ln=>{mt||pn(ln)}).catch(()=>{}),L(!1),kt.status==="fulfilled"&&kt.value){const ln=kt.value;A(vn=>vn&&vn.branchName===ln.branchName&&vn.headSha===ln.headSha&&vn.parentSha===ln.parentSha&&vn.hasUncommittedChanges===ln.hasUncommittedChanges?vn:ln)}const Hn=Array.from(new Set([k,...(wt!=null?wt:[]).map(ln=>ln.name)])),Ws=await ps(t,Hn).catch(()=>[]);if(mt)return;const Bs=On(Ws);Bs!==Lt&&(Lt=Bs,h(Ws))}catch(W){console.error("Auto-refresh failed:",W)}finally{L(!1),oe=!1,fe&&!mt&&(fe=!1,Ce=window.setTimeout($t,200))}},tn=async()=>{var W;if(!Jt){Jt=!0;try{const se=await ge("get_checked_out_ref",{repoPath:t});if(mt)return;const re=`${(W=se.branchName)!=null?W:""}|${se.headSha}|${se.hasUncommittedChanges?1:0}`,be=Xt,Le=!be||be.split("|").slice(0,2).join("|")!==re.split("|").slice(0,2).join("|");Xt=re,A(_t=>_t&&_t.branchName===se.branchName&&_t.headSha===se.headSha&&_t.hasUncommittedChanges===se.hasUncommittedChanges?_t:se),Le&&D()}catch{}finally{Jt=!1}}},D=()=>{clearTimeout(Ce),Ce=window.setTimeout($t,100);const W=[450];for(const se of W){const re=window.setTimeout(()=>{st.delete(re),$t()},se);st.add(re)}};return lc("git-activity",W=>{if(W.payload==="local"){tn();return}D()}).then(W=>{mt?W():tt=W}).catch(console.error),$t(),Oe=window.setInterval(()=>{tn()},700),tn(),()=>{mt=!0,clearTimeout(Ce),Oe!=null&&window.clearInterval(Oe);for(const W of st)window.clearTimeout(W);st.clear(),tt&&tt()}},[t,k,ms]),y.useEffect(()=>{if(!t||!k||!ms)return;ge("watch_repo",{repoPath:t}).catch(console.error);let oe=!1,fe=!1,Ce=!1,Oe=null;const st=async()=>{if(!oe){if(ws.current){fe=!0;return}if(Ce){fe=!0;return}Ce=!0;try{if(!await ro(t,k)||oe)return;await An(t,k)}catch(mt){console.warn("Frozen git-activity refresh failed:",mt)}finally{Ce=!1,fe&&!oe&&(fe=!1,window.setTimeout(()=>{st()},0))}}},tt=()=>{fe=!0,st()};return lc("git-activity",()=>{tt()}).then(mt=>{oe?mt():Oe=mt}).catch(console.error),()=>{oe=!0,Oe&&Oe()}},[t,k,ms]);async function mn(){if(t){at(!0),dt(null);try{await ge("authenticate_github");const oe=await ge("get_github_auth_status");De(oe),oe.authenticated?await Ts(t):oe.message&&dt(oe.message)}catch(oe){dt(oe instanceof Error?oe.message:String(oe))}finally{at(!1)}}}const ai=new Set(S.map(oe=>oe.branchName)),vo=14*864e5,Vs=Date.now(),ts=c.filter(oe=>oe.status==="stale"),wo=ts.filter(oe=>ai.has(oe.name)||Vs-new Date(oe.lastCommitDate).getTime()<=vo),Xo=ts.filter(oe=>!ai.has(oe.name)&&Vs-new Date(oe.lastCommitDate).getTime()>vo),Do=oe=>{var fe;return Object.prototype.hasOwnProperty.call(et,oe.name)?Math.max(0,(fe=et[oe.name])!=null?fe:0):Math.max(0,oe.commitsAhead)};y.useEffect(()=>{Mt({}),ft({}),Tt({}),Ms.current=null,at(!1),De(null),dt(null),A(null),Ie(null)},[t]),y.useEffect(()=>{var Lt,dn,Pn,On,qn;if(!t||!k){Mt({}),ft({}),Tt({}),Ms.current=null;return}const oe=c.map($t=>{var tn;return`${$t.name}:${$t.headSha}:${(tn=$t.parentBranch)!=null?tn:""}:${$t.commitsAhead}`}).join("|"),fe=d.map($t=>{var tn,D;return`${$t.fullSha}:${(D=(tn=$t.parentShas)==null?void 0:tn[1])!=null?D:""}`}).join("|"),Ce=`${t}|${k}|${oe}|${fe}`;if(Ms.current===Ce)return;Ms.current=Ce;const Oe=new Map;for(const $t of d){const tn=(dn=(Lt=$t.parentShas)==null?void 0:Lt.slice(1))!=null?dn:[];for(const D of tn)D&&!Oe.has(D)&&Oe.set(D,$t)}const st=c.filter($t=>$t.name!==k),tt=new Map;for(const $t of st){if(!$t.parentBranch||$t.parentBranch===$t.name)continue;const tn=(Pn=tt.get($t.parentBranch))!=null?Pn:0;tt.set($t.parentBranch,tn+1)}const mt=new Map;for(const $t of st){if(!$t.headSha)continue;const tn=(On=mt.get($t.headSha))!=null?On:[];tn.push($t),mt.set($t.headSha,tn)}const Jt=new Set;for(const $t of mt.values()){if($t.length<2)continue;const tn=[...$t].sort((D,W)=>{var be,Le,_t,kt;const se=(Le=(be=D.createdDate)!=null?be:D.divergedFromDate)!=null?Le:D.lastCommitDate,re=(kt=(_t=W.createdDate)!=null?_t:W.divergedFromDate)!=null?kt:W.lastCommitDate;return se.localeCompare(re)});for(let D=1;D<tn.length;D++)Jt.add(tn[D].name)}for(const $t of st){const tn=((qn=tt.get($t.name))!=null?qn:0)>0;$t.commitsAhead===0&&$t.headSha&&!Oe.has($t.headSha)&&!tn&&Jt.add($t.name)}let Xt=!1;async function ns(){const $t=await Promise.all(st.map(async re=>{var be,Le,_t;try{const kt=(Le=(be=re.createdDate)!=null?be:re.divergedFromDate)!=null?Le:re.lastCommitDate,ct=new Date(kt).getTime(),ot=re.parentBranch&&re.parentBranch!==re.name?re.parentBranch:k,xt=Oe.get(re.headSha),wt=!!xt,_n=Jt.has(re.name),Nn=((_t=tt.get(re.name))!=null?_t:0)>0,Hn=_n||!wt&&!Nn&&re.remoteSyncStatus!=="on-github"&&re.commitsAhead===0&&!!re.headSha&&(re.headSha===re.createdFromSha||re.headSha===re.divergedFromSha),Bs=wt&&ot===k&&!!(xt!=null&&xt.fullSha)?xt==null?void 0:xt.fullSha:void 0;let ln=[],vn=!1;if(!Hn){if(Bs)ln=(await ge("get_branch_commits",{repoPath:t,branch:re.name,baseBranch:ot,mergeCommitSha:Bs,includePrompts:Uu})).filter(Ss=>Ss.fullSha!==Bs),vn=!0;else{const Gn=[re.createdFromSha,re.divergedFromSha].filter(Co=>!!Co),Ss=Array.from(new Set(ot===k?[...Gn,ot,k]:[ot,...Gn,k]));let Ls=null;for(const Co of Ss)try{const Qo=await ge("get_branch_commits",{repoPath:t,branch:re.name,baseBranch:Co,includePrompts:Uu});Ls==null&&(Ls=Qo);const qi=ot===k&&(Co===re.createdFromSha||Co===re.divergedFromSha);if(Co===ot){ln=Qo,vn=!0;break}if(qi){ln=Qo,vn=!0;break}if(Qo.length>0){ln=Qo,vn=!0;break}}catch{}!vn&&Ls!=null&&(ln=Ls,vn=!0)}!vn&&Number.isFinite(ct)&&(ln=(await ge("get_recent_log",{repoPath:t,branch:re.name,limit:400,firstParent:!1,includePrompts:Uu})).filter(Ss=>{const Ls=new Date(Ss.date).getTime();return Number.isFinite(Ls)&&Ls>=ct}))}const ko=ln.flatMap(Gn=>{var Ss;return(Ss=Gn.agentPrompts)!=null?Ss:[]}).sort((Gn,Ss)=>new Date(Ss.timestamp).getTime()-new Date(Gn.timestamp).getTime()),Ds=ln.map(Gn=>{var Ss;return{fullSha:Gn.fullSha,sha:Gn.sha,parentSha:(Ss=Gn.parentSha)!=null?Ss:null,message:Gn.message,author:Gn.author,date:Gn.date,kind:"commit"}}),oo=Hn?0:Ds.length,io=Ds;if(ko.length===0)return[re.name,{promptMeta:null,previews:io,uniqueCount:oo}];const Et=ko[0],Xi=[...ko].sort((Gn,Ss)=>new Date(Gn.timestamp).getTime()-new Date(Ss.timestamp).getTime()).map(Gn=>({id:Gn.id,agent:Gn.agent,prompt:Gn.prompt,timestamp:Gn.timestamp}));return[re.name,{promptMeta:{count:ko.length,latestPrompt:Et.prompt,latestAgent:Et.agent,latestTimestamp:Et.timestamp,markers:Xi},previews:io,uniqueCount:oo}]}catch{return[re.name,{promptMeta:null,previews:[],uniqueCount:null}]}}));let tn=null;try{const be=(await ge("get_recent_log",{repoPath:t,branch:k,limit:250,firstParent:!1,includePrompts:Uu})).flatMap(Le=>{var _t;return(_t=Le.agentPrompts)!=null?_t:[]}).sort((Le,_t)=>new Date(_t.timestamp).getTime()-new Date(Le.timestamp).getTime());if(be.length>0){const Le=be[0],kt=[...be].sort((ct,ot)=>new Date(ct.timestamp).getTime()-new Date(ot.timestamp).getTime()).map(ct=>({id:ct.id,agent:ct.agent,prompt:ct.prompt,timestamp:ct.timestamp}));tn={count:be.length,latestPrompt:Le.prompt,latestAgent:Le.agent,latestTimestamp:Le.timestamp,markers:kt}}}catch{tn=null}if(Xt)return;const D={},W={},se={};for(const[re,be]of $t)be.promptMeta&&(D[re]=be.promptMeta),W[re]=[...be.previews],be.uniqueCount!=null&&(se[re]=be.uniqueCount);tn&&(D[k]=tn),Mt(D),ft(W),Tt(se)}return ns(),()=>{Xt=!0}},[t,k,c,d]),y.useEffect(()=>{if(!ht){I(!1);return}I(!0);const oe=window.setTimeout(()=>{I(!1)},wy),fe=window.setTimeout(()=>{Ie(null)},wy+xw);return()=>{window.clearTimeout(oe),window.clearTimeout(fe)}},[ht]),y.useEffect(()=>{if(!t||c.length===0)return;const oe=Oe=>new Promise(st=>setTimeout(st,Oe));async function fe(){const st=`${await ge("get_home_dir")}/Desktop/git-viz-screenshots/${i}`;console.log(`📸 Saving screenshots to ${st}`),Re("map"),await oe(800),await ge("screenshot",{path:`${st}/main-timeline.png`}),console.log(`📸 Done — screenshot saved to ${st}`)}const Ce=Oe=>{(Oe.metaKey||Oe.ctrlKey)&&Oe.shiftKey&&Oe.key==="S"&&(Oe.preventDefault(),fe())};return window.addEventListener("keydown",Ce),()=>window.removeEventListener("keydown",Ce)},[t,i,c]);function $o(){Ft(!0),setTimeout(()=>{Ze(!1),Ft(!1),zt("active"),Se(null)},100)}async function co(oe){if(!t)return;Ie(null);const fe=/^STASH:(\d+)$/.exec(oe.commitSha);if(fe){try{const Ce=parseInt(fe[1],10),Oe=await ge("apply_stash_restore",{repoPath:t,stashIndex:Ce});A(Oe),await An(t);const st=`Stash ${Ce+1}`,tt=Oe.branchName?` on branch ${Oe.branchName}`:" at the stash base (detached HEAD)";Ie({kind:"success",message:`Restored ${st}${tt}; stash applied and dropped (uncommitted changes).`})}catch(Ce){const Oe=Ce instanceof Error?Ce.message:String(Ce);Ie({kind:"error",message:Oe}),console.error("Failed to apply stash:",Oe)}return}if(oe.branchName){const Ce=(st,tt)=>{const mt=st.replace(/\\/g,"/").replace(/\/+$/,""),Jt=tt.replace(/\\/g,"/").replace(/\/+$/,"");return mt===Jt||mt.toLowerCase()===Jt.toLowerCase()},Oe=T.find(st=>st.pathExists===!1||st.isCurrent||t&&Ce(st.path,t)?!1:st.branchName===oe.branchName);if(Oe){await lo(Oe.path);return}}try{let Ce="";(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges&&(await ge("stash_push",{repoPath:t,includeUntracked:!0}),Ce="Stashed local changes (including untracked), then ",await An(t));const st=oe.branchName?await ge("checkout_branch",{repoPath:t,branchName:oe.branchName}):await ge("checkout_ref",{repoPath:t,refName:oe.commitSha}),tt=await ge("get_checked_out_ref",{repoPath:t}).catch(()=>st);A(tt),await An(t);const mt=tt.branchName?tt.branchName:`${tt.headSha.slice(0,7)} (detached)`;Ie({kind:"success",message:`${Ce}Checked out ${mt}`})}catch(Ce){const Oe=Ce instanceof Error?Ce.message:String(Ce);Ie({kind:"error",message:Oe}),console.error("Failed to checkout commit:",Oe)}}async function Cs(){if(!(!t||lt)){Ie(null),Wt(!0);try{if(!(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges){Ie({kind:"error",message:"No local changes to stash."});return}await ge("stash_push",{repoPath:t,includeUntracked:!0}),await An(t),Ie({kind:"success",message:"Stashed local changes (including untracked files)."})}catch(oe){const fe=oe instanceof Error?oe.message:String(oe);Ie({kind:"error",message:fe}),console.error("Failed to stash:",fe)}finally{Wt(!1)}}}async function Us(oe){if(!t||Zt)return!1;const fe=oe.trim();if(!fe)return Ie({kind:"error",message:"Enter a commit message."}),!1;Ie(null),Bt(!0);try{if(!(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ie({kind:"error",message:"No local changes to commit."}),!1;const Oe=await ge("commit_working_tree",{repoPath:t,message:fe});return A(Oe),await An(t),Ie({kind:"success",message:"Committed local changes."}),!0}catch(Ce){const Oe=Ce instanceof Error?Ce.message:String(Ce);return Ie({kind:"error",message:Oe}),console.error("Failed to commit:",Oe),!1}finally{Bt(!1)}}async function Bn(){if(!t||En)return!1;Ie(null),it(!0);try{if(!(await ge("get_checked_out_ref",{repoPath:t})).hasUncommittedChanges)return Ie({kind:"error",message:"No local changes to stage."}),!1;const fe=await ge("stage_working_tree",{repoPath:t});return A(fe),await An(t),Ie({kind:"success",message:"Staged all changes."}),!0}catch(oe){const fe=oe instanceof Error?oe.message:String(oe);return Ie({kind:"error",message:fe}),console.error("Failed to stage:",fe),!1}finally{it(!1)}}async function bi(oe,fe){if(!(!t||en)){Dn(!0),Ie(null);try{const Ce=/^STASH:(\d+)$/.exec(oe);let Oe;if(Ce){const st=parseInt(Ce[1],10);Oe=await ge("move_stash_to_new_branch",{repoPath:t,stashIndex:st,branchName:fe})}else Oe=await ge("create_branch_from_uncommitted",{repoPath:t,branchName:fe});A(Oe),await An(t),Ie({kind:"success",message:`Moved to new branch "${fe}"`})}catch(Ce){const Oe=Ce instanceof Error?Ce.message:String(Ce);Ie({kind:"error",message:Oe}),console.error("Failed to create branch from node:",Oe)}finally{Dn(!1)}}}async function Ni(oe){if(!(!t||en)){Dn(!0),Ie(null);try{const fe=await ge("create_root_branch",{repoPath:t,branchName:oe});A(fe),await An(t),Ie({kind:"success",message:`Created new root branch "${oe}"`})}catch(fe){const Ce=fe instanceof Error?fe.message:String(fe);Ie({kind:"error",message:Ce}),console.error("Failed to create root branch:",Ce)}finally{Dn(!1)}}}async function qo(oe,fe){if(!t)return;const Ce=Array.from(new Set(oe.filter(Oe=>!!Oe&&Oe!==fe)));if(Ce.length!==0){Ie(null),pe(!0);try{let Oe=null;for(const st of Ce)Oe=await ge("merge_ref_into_branch",{repoPath:t,sourceRef:st,targetBranch:fe});await An(t),Oe&&A(Oe),Ie({kind:"success",message:Ce.length===1?`Merged ${Ce[0].slice(0,7)} into ${fe}`:`Merged ${Ce.length} commits into ${fe}`})}catch(Oe){const st=Oe instanceof Error?Oe.message:String(Oe);Ie({kind:"error",message:st}),console.error("Failed to merge refs into branch:",st)}finally{pe(!1)}}}async function Zs(){if(!(!t||we)){Ie(null),Ve(!0);try{const oe=await ge("push_all_unpushed_branches",{repoPath:t});await An(t),Ie({kind:"success",message:oe.length>0?oe.length===1?`Pushed ${oe[0].branchName}`:`Pushed ${oe.length} branches`:"Everything local is already pushed."})}catch(oe){const fe=oe instanceof Error?oe.message:String(oe);Ie({kind:"error",message:fe}),console.error("Failed to push all branches:",fe)}finally{Ve(!1)}}}async function Ao(){if(!(!t||we)){Ie(null),Ve(!0);try{const oe=await ge("push_current_branch",{repoPath:t});await An(t),Ie({kind:"success",message:`Pushed ${oe.branchName}`})}catch(oe){const fe=oe instanceof Error?oe.message:String(oe);Ie({kind:"error",message:fe}),console.error("Failed to push current branch:",fe)}finally{Ve(!1)}}}async function No(oe){var Ce;if(!t||we)return;const fe=Array.from(new Map(oe.filter(Oe=>Oe.branchName&&Oe.targetSha).map(Oe=>[Oe.branchName,Oe])).values());if(fe.length!==0){Ie(null),Ve(!0);try{for(const Oe of fe)await ge("push_branch",{repoPath:t,branchName:Oe.branchName,targetSha:Oe.targetSha});await An(t),Ie({kind:"success",message:fe.length===1?`Pushed ${fe[0].branchName} through ${(Ce=fe[0].targetSha)==null?void 0:Ce.slice(0,7)}`:`Pushed ${fe.length} selected commit ranges`})}catch(Oe){const st=Oe instanceof Error?Oe.message:String(Oe);Ie({kind:"error",message:st}),console.error("Failed to push selected commits:",st)}finally{Ve(!1)}}}async function js(oe){var tt;if(!t||We)return;const fe=Array.from(new Set(oe.branchNames.filter(mt=>mt&&mt!==k))),Ce=!!oe.discardUncommittedChanges,Oe=(tt=oe.stashIndices)!=null?tt:[],st=Array.from(new Set(Oe)).sort((mt,Jt)=>Jt-mt);if(!(fe.length===0&&!Ce&&st.length===0)){Ie(null),Ae(!0);try{for(const Xt of st)await ge("stash_drop",{repoPath:t,stashIndex:Xt});const mt=fe.length>0||Ce?await ge("delete_selected_elements",{repoPath:t,branchNames:fe,discardUncommittedChanges:Ce}):{deletedBranches:[],discardedUncommittedChanges:!1};await An(t);const Jt=[];st.length>0&&Jt.push(st.length===1?`removed stash ${st[0]+1}`:`removed ${st.length} stashes`),mt.discardedUncommittedChanges&&Jt.push("discarded local uncommitted changes"),mt.deletedBranches.length>0&&Jt.push(mt.deletedBranches.length===1?`deleted ${mt.deletedBranches[0]}`:`deleted ${mt.deletedBranches.length} branches`),Ie({kind:"success",message:Jt.length>0?Jt.join(" and "):"Nothing to delete."})}catch(mt){const Jt=mt instanceof Error?mt.message:String(mt);Ie({kind:"error",message:Jt}),console.error("Failed to delete selected elements:",Jt)}finally{Ae(!1)}}}function so(oe){Re("map"),Se(oe),rn(fe=>{var Ce;return{branch:oe,seq:((Ce=fe==null?void 0:fe.seq)!=null?Ce:0)+1}})}function Ln(){n(null),$([]),C([]),g([]),x([]),w({}),Mt({}),ft({}),Tt({}),pn([]),Be(!1),Re("landing")}function uo(oe){oe&&(ve(oe),le(fe=>fe+1))}function fs(oe){oe&&(X(oe),le(fe=>fe+1))}const{enrichedBranches:In,enrichedBranchCommitPreviews:So,enrichedBranchUniqueAheadCounts:fo,enrichedDirectCommits:Go}=y.useMemo(()=>{var Le,_t,kt,ct;const oe=gw(At,c,p,Ht,et,k);let fe=oe.branches,Ce=oe.directCommits,Oe=oe.branchCommitPreviews,st=oe.branchUniqueAheadCounts;if(!(R!=null&&R.hasUncommittedChanges))return{enrichedBranches:fe,enrichedDirectCommits:Ce,enrichedBranchCommitPreviews:Oe,enrichedBranchUniqueAheadCounts:st};const tt=R.headSha||R.parentSha||null,mt=(_t=(Le=Ce[0])==null?void 0:Le.fullSha)!=null?_t:null,Jt=(ot,xt)=>!ot||!xt?!1:ot===xt||ot.startsWith(xt)||xt.startsWith(ot),Xt=[{name:k,headSha:mt!=null?mt:"",isDefault:!0},...fe.map(ot=>({name:ot.name,headSha:ot.headSha,isDefault:!1}))],ns=R.branchName?Xt.find(ot=>ot.name===R.branchName):void 0,Lt=tt?Xt.filter(ot=>Jt(ot.headSha,tt)):[],dn=(kt=ns!=null?ns:Lt.find(ot=>ot.isDefault))!=null?kt:Lt[0],Pn=!!(dn&&tt&&Jt(dn.headSha,tt)),On=dn&&!dn.isDefault?fe.find(ot=>ot.name===dn.name):void 0,qn=(()=>{var xt;if(!tt)return null;const ot=Ce.find(wt=>Jt(wt.fullSha,tt)||Jt(wt.sha,tt));if(ot!=null&&ot.date)return ot.date;if(On){const wt=((xt=Oe[On.name])!=null?xt:[]).find(_n=>Jt(_n.fullSha,tt)||Jt(_n.sha,tt));if(wt!=null&&wt.date)return wt.date}return null})(),$t=qn?new Date(qn).getTime():Number.NaN,tn=Date.now(),D=Number.isFinite($t)?Math.max(tn,$t+1):tn,W=new Date(D).toISOString(),se={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:tt,message:"Local uncommitted changes",author:"You",date:W,kind:"uncommitted"},re={fullSha:"WORKING_TREE",sha:"Uncommited Changes",parentSha:tt,message:"Local uncommitted changes",author:"You",date:W,kind:"uncommitted"};if(Pn&&(dn!=null&&dn.isDefault))return{enrichedBranches:fe,enrichedBranchCommitPreviews:Oe,enrichedBranchUniqueAheadCounts:st,enrichedDirectCommits:[...Ce,re]};if(Pn&&On)return{enrichedBranches:fe.map(xt=>xt.name===On.name?{...xt,commitsAhead:xt.commitsAhead+1,unpushedCommits:xt.unpushedCommits+1,lastCommitDate:W,headSha:"WORKING_TREE"}:xt),enrichedDirectCommits:Ce,enrichedBranchCommitPreviews:{...Oe,[On.name]:[se,...Oe[On.name]||[]]},enrichedBranchUniqueAheadCounts:{...st,[On.name]:Math.max(0,(ct=Object.prototype.hasOwnProperty.call(st,On.name)?st[On.name]:On.commitsAhead)!=null?ct:0)+1}};const be={name:"*Uncommitted",commitsAhead:1,commitsBehind:0,lastCommitDate:W,lastCommitAuthor:"You",status:"fresh",remoteSyncStatus:"local-only",unpushedCommits:1,headSha:"WORKING_TREE",divergedFromSha:tt!=null?tt:void 0,parentBranch:(dn==null?void 0:dn.name)||R.branchName||k};return{enrichedBranches:[be,...fe],enrichedBranchCommitPreviews:{...Oe,[be.name]:[se]},enrichedBranchUniqueAheadCounts:{...st,[be.name]:1},enrichedDirectCommits:Ce}},[c,Ht,et,R,k,p,At]),Kt=y.useMemo(()=>Mx(In,k,So),[In,k,So]),Ko=y.useMemo(()=>Tx({lanes:Kt,branches:In,mergeNodes:d,directCommits:Go,unpushedDirectCommits:_,defaultBranch:k,branchCommitPreviews:So,branchUniqueAheadCounts:fo,manuallyOpenedClumps:q,manuallyClosedClumps:ue,isDebugOpen:!1,gridSearchQuery:Q,gridFocusSha:G,checkedOutRef:R!=null?R:null,orientation:"horizontal"}),[Kt,In,d,Go,_,k,So,fo,q,ue,Q,G,(Es=R==null?void 0:R.headSha)!=null?Es:null,(ri=R==null?void 0:R.branchName)!=null?ri:null]);return r.jsxs("div",{className:"relative flex h-screen min-h-0 flex-col bg-background text-foreground",children:[r.jsx("header",{"data-tauri-drag-region":!0,className:"window-drag-region absolute left-0 right-0 top-0 z-[9999] h-12 px-4",style:{paddingTop:"max(env(safe-area-inset-top), 0px)"},onMouseDown:Xn,children:Te==="map"&&r.jsxs("div",{className:"relative z-10 h-12 pointer-events-none",children:[r.jsx("button",{onClick:Ln,"aria-label":"Back",title:"Back",className:"window-no-drag pointer-events-auto absolute left-19 top-1/2 inline-flex h-7 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent",children:r.jsx("svg",{className:"h-3.5 w-3.5 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),r.jsx("div",{className:"absolute left-1/2 top-1/2 min-w-0 max-w-[52vw] -translate-x-1/2 -translate-y-1/2 text-center",children:r.jsx("h1",{className:"truncate text-sm font-medium text-foreground",children:i})})]})}),r.jsxs("div",{className:"relative z-10 flex h-full min-h-0 flex-col",children:[Te==="landing"&&r.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:r.jsx(Sw,{onSelect:Hs,loading:Me,error:ie})}),r.jsxs("div",{className:`relative flex h-full min-h-0 flex-1 overflow-hidden ${Te==="landing"?"hidden":""}`,children:[r.jsx(mw,{className:"min-h-0 w-[27rem] shrink-0 border-r border-border/50 pb-4 pt-16",branches:In,defaultBranch:k,branchCommitPreviews:So,directCommits:Go,mergeNodes:d,checkedOutRef:R,manuallyOpenedClumps:q,manuallyClosedClumps:ue,setManuallyOpenedClumps:te,setManuallyClosedClumps:ye,gridLayoutModel:Ko,onSelectCommit:uo,onSelectBranch:fs}),r.jsxs("div",{className:"relative min-h-0 min-w-0 flex-1 overflow-hidden",children:[r.jsx(dw,{branches:In,mergeNodes:d,directCommits:Go,unpushedDirectCommits:_,unpushedCommitShasByBranch:b,defaultBranch:k,branchCommitPreviews:So,branchUniqueAheadCounts:fo,gridSearchQuery:Q,gridSearchJumpToken:ne,gridFocusSha:G,onGridSearchResultCountChange:me,onGridSearchFocusChange:ve,checkedOutRef:R,onCommitClick:co,onMergeRefsIntoBranch:qo,mergeInProgress:J,onPushAllBranches:Zs,onPushCurrentBranch:Ao,onPushCommitTargets:No,pushInProgress:we,onDeleteSelection:js,deleteInProgress:We,worktrees:T,currentRepoPath:t!=null?t:void 0,onRemoveWorktree:Ps,removeWorktreeInProgress:F,onSwitchToWorktree:lo,onStashLocalChanges:Cs,stashInProgress:lt,stashDisabled:!1,onCommitLocalChanges:Us,commitInProgress:Zt,commitDisabled:!1,onStageAllChanges:Bn,stageInProgress:En,onCreateBranchFromNode:bi,onCreateRootBranch:Ni,createBranchFromNodeInProgress:en,onInteractionChange:Jn,manuallyOpenedClumps:q,manuallyClosedClumps:ue,setManuallyOpenedClumps:te,setManuallyClosedClumps:ye,layoutModel:Ko}),r.jsx("header",{"data-map-ui":!0,className:"absolute left-0 right-0 top-12 z-40 px-4 md:px-8",children:r.jsxs("div",{className:"window-no-drag pointer-events-auto relative z-10 min-h-8 content-start flex flex-wrap items-center gap-2",children:[(Ye==null?void 0:Ye.ghAvailable)&&!Ye.authenticated&&r.jsx("button",{onClick:mn,disabled:Je,className:"text-xs text-muted-foreground hover:text-foreground border border-border/50 rounded-full px-3 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:Je?"Connecting GitHub...":"Connect GitHub"}),Ye&&!Ye.ghAvailable&&r.jsx("span",{className:"text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1",children:"Install `gh` for private PR data"}),Xe&&r.jsx("span",{className:"text-xs text-muted-foreground max-w-64 truncate",title:Xe,children:Xe}),r.jsxs("div",{className:"window-no-drag flex min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm",children:[r.jsx("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium shrink-0",children:"Search"}),r.jsx("input",{value:Q,onChange:oe=>X(oe.target.value),onKeyDown:oe=>{oe.key==="Enter"&&(oe.preventDefault(),le(fe=>fe+1))},placeholder:"sha, message, or branch",className:"w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/70"}),r.jsx("button",{type:"button",onClick:()=>le(oe=>oe+1),className:"shrink-0 rounded-full border border-border/50 bg-muted/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",children:"Jump"})]}),z!=null&&r.jsxs("span",{className:"text-xs text-muted-foreground",children:[z," match",z===1?"":"es"]}),G&&r.jsxs("span",{className:"text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary",children:["Focused ",G.slice(0,7)]}),ht&&r.jsx("span",{className:bw("text-xs rounded-full px-3 py-1 max-w-[26rem] truncate transition-opacity duration-200",Fe?"opacity-100":"opacity-0",ht.kind==="error"?"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400":"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"),title:ht.message,children:ht.message})]})})]}),Qe&&r.jsxs("div",{"data-map-ui":!0,className:`absolute top-[96px] right-4 z-50 w-[calc(100%-2rem)] max-w-80 bg-card border border-border rounded-2xl shadow-lg overflow-hidden ${Ut?"animate-error-panel-out":"animate-error-panel-in"}`,children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border/50",children:[r.jsx("span",{className:"text-sm font-medium text-foreground",children:"Branch errors"}),r.jsx("button",{onClick:$o,className:"text-muted-foreground hover:text-foreground transition-colors",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),r.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 border-b border-border/30 bg-muted/30",children:[r.jsxs("button",{onClick:()=>zt("active"),className:`text-xs font-medium transition-colors ${Dt==="active"?"text-destructive":"text-muted-foreground hover:text-foreground"}`,children:[wo.length," active"]}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"·"}),r.jsxs("button",{onClick:()=>zt("inactive"),className:`text-xs font-medium transition-colors ${Dt==="inactive"?"text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[Xo.length," inactive"]})]}),r.jsx("div",{className:"overflow-y-auto max-h-64",children:(Dt==="active"?wo:Xo).map(oe=>{const fe=(qe==null?void 0:qe.name)===oe.name,Ce=Do(oe);return r.jsxs("button",{onClick:()=>so(oe),className:"w-full group flex items-center justify-between px-4 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all text-left",children:[r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:`text-sm font-medium truncate ${fe?"text-amber-600 dark:text-amber-400":"text-foreground"}`,children:oe.name}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:[Ce>0&&`${Ce} ahead`,Ce>0&&oe.commitsBehind>0&&", ",oe.commitsBehind>0&&`${oe.commitsBehind} behind`]})]}),r.jsx("span",{className:"text-[10px] font-medium uppercase tracking-wide bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full shrink-0 mt-0.5",children:"Stale"})]},oe.name)})})]})]})]})]})}function Sw({onSelect:t,loading:n,error:i}){const a="git-visualizer:recent-repositories",[u,d]=y.useState(""),[h,p]=y.useState(!1),[g,_]=y.useState(!1),[x,b]=y.useState(null),[w,S]=y.useState([]);function C($){return Array.isArray($)?$.filter(F=>typeof F=="object"&&F!==null&&typeof F.path=="string"&&typeof F.name=="string"&&typeof F.lastOpenedAt=="number").slice(0,10):[]}y.useEffect(()=>{try{const $=localStorage.getItem(a);if(!$)return;S(C(JSON.parse($)))}catch{S([])}},[]);function k($){return $==="/"?$:$.replace(/\/+$/,"")}function M($){const F=k($.trim());if(!F)return;const U=F.split("/").pop()||F,X=[{path:F,name:U,lastOpenedAt:Date.now()},...w.filter(ne=>ne.path!==F)].slice(0,10);S(X);try{localStorage.setItem(a,JSON.stringify(X))}catch{}}function R($){const F=k($);b(null),M(F),t(F)}function A($){p(!1),R($)}function T($){$.preventDefault();const F=u.trim();if(!F)return;if(F.startsWith("http://")||F.startsWith("https://")||F.startsWith("git@")||F.startsWith("github.com/")){b("Enter a local repo folder path (for example: /Users/you/code/repo).");return}R(F)}return r.jsxs("main",{className:"h-full flex flex-col items-center pt-[16vh] bg-background",children:[r.jsxs("div",{className:"w-full max-w-sm flex flex-col items-center px-6",children:[r.jsxs("div",{className:"flex flex-col w-full gap-3 shrink-0",children:[r.jsx("button",{onClick:()=>p(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-2xl hover:opacity-90 transition-opacity",children:"Browse for repository"}),g?r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs("form",{onSubmit:T,className:"flex items-center border border-border bg-card rounded-2xl",children:[r.jsxs("div",{className:"relative flex-1 min-w-0 overflow-hidden rounded-l-2xl",children:[r.jsx("input",{autoFocus:!0,type:"text",value:u,onChange:$=>{d($.target.value),x&&b(null)},placeholder:"Enter local path",className:"w-full bg-transparent pl-5 pr-2 py-3.5 text-sm focus:outline-none placeholder:text-muted-foreground tabular-nums min-w-0"}),r.jsx("div",{className:"absolute left-0 inset-y-0 w-10 pointer-events-none",style:{background:"linear-gradient(to right, var(--card), transparent)"}})]}),r.jsx("button",{type:"submit",disabled:!u||n,className:"m-1.5 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-[14px] hover:opacity-90 transition-opacity shrink-0",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 5l7 7-7 7"})})})]}),x&&r.jsx("p",{className:"text-xs text-destructive px-2",children:x}),!x&&i&&r.jsx("p",{className:"text-xs text-destructive px-2",children:i})]}):r.jsx("button",{onClick:()=>_(!0),className:"w-full flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground text-sm font-medium rounded-2xl hover:bg-accent transition-colors disabled:opacity-50",children:"Enter repo path"})]}),w.length>0&&r.jsxs("div",{className:"w-full mt-8 flex flex-col",children:[r.jsx("p",{className:"text-[10px] uppercase tracking-wide text-muted-foreground font-medium mb-3 shrink-0",children:"Recently opened"}),r.jsx("div",{className:"flex flex-col gap-2",children:w.slice(0,5).map($=>r.jsxs("button",{onClick:()=>R($.path),disabled:n,className:"w-full shrink-0 rounded-xl border border-border bg-card text-left px-4 py-2.5 hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed",children:[r.jsx("p",{className:"text-foreground truncate text-sm",children:$.name}),r.jsx("p",{className:"text-xs text-muted-foreground truncate",children:$.path})]},$.path))})]})]}),h&&r.jsx(pw,{onSelect:A,onClose:()=>p(!1)})]})}var kc=bx(),kw=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Cw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=kw}var ds=Cw,jw=`.icon-transitions-module__iconState___uqK9J {
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
}`,Mw={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=jw}var rs=Mw,Tw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Ew=({size:t=24,style:n={}})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Dw=({size:t=20,...n})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Aw=({size:t=24,copied:n=!1,tint:i})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${rs.iconState} ${n?rs.hiddenScaled:rs.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${rs.iconState} ${n?rs.visibleScaled:rs.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Nw=({size:t=24,state:n="idle"})=>{const i=n==="idle",a=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${rs.iconStateFast} ${i?rs.visibleScaled:u?rs.sending:rs.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${rs.iconStateFast} ${a?rs.visibleScaled:rs.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${rs.iconStateFast} ${c?rs.visibleScaled:rs.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Rw=({size:t=24,isOpen:n=!0})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${rs.iconFade} ${n?rs.visible:rs.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${rs.iconFade} ${n?rs.hidden:rs.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Bw=({size:t=24,isPaused:n=!1})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${rs.iconFadeFast} ${n?rs.hidden:rs.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${rs.iconFadeFast} ${n?rs.visible:rs.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Lw=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Ow=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ax=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),zw=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),$w=({size:t=16})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Iw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Pw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Hw=({size:t=24})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Vw=({size:t=16})=>r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Uw=({size:t=24})=>r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Nx=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Fh=Nx.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Tm="feedback-freeze-styles",Xh="__agentation_freeze";function Ww(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Xh]||(t[Xh]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Xh]}var gn=Ww();typeof window<"u"&&!gn.installed&&(gn.origSetTimeout=window.setTimeout.bind(window),gn.origSetInterval=window.setInterval.bind(window),gn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...i)=>typeof t=="string"?gn.origSetTimeout(t,n):gn.origSetTimeout((...a)=>{gn.frozen?gn.frozenTimeoutQueue.push(()=>t(...a)):t(...a)},n,...i),window.setInterval=(t,n,...i)=>typeof t=="string"?gn.origSetInterval(t,n):gn.origSetInterval((...a)=>{gn.frozen||t(...a)},n,...i),window.requestAnimationFrame=t=>gn.origRAF(n=>{gn.frozen?gn.frozenRAFQueue.push(t):t(n)}),gn.installed=!0);var Vt=gn.origSetTimeout,Yw=gn.origSetInterval,tl=gn.origRAF;function Fw(t){return t?Nx.some(n=>{var i;return!!((i=t.closest)!=null&&i.call(t,`[${n}]`))}):!1}function Xw(){if(typeof document>"u"||gn.frozen)return;gn.frozen=!0,gn.frozenTimeoutQueue=[],gn.frozenRAFQueue=[];let t=document.getElementById(Tm);t||(t=document.createElement("style"),t.id=Tm),t.textContent=`
    *${Fh},
    *${Fh}::before,
    *${Fh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),gn.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var a;if(n.playState!=="running")return;const i=(a=n.effect)==null?void 0:a.target;Fw(i)||(n.pause(),gn.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function ky(){var i;if(typeof document>"u"||!gn.frozen)return;gn.frozen=!1;const t=gn.frozenTimeoutQueue;gn.frozenTimeoutQueue=[];for(const a of t)gn.origSetTimeout(()=>{if(gn.frozen){gn.frozenTimeoutQueue.push(a);return}try{a()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=gn.frozenRAFQueue;gn.frozenRAFQueue=[];for(const a of n)gn.origRAF(c=>{if(gn.frozen){gn.frozenRAFQueue.push(a);return}a(c)});for(const a of gn.pausedAnimations)try{a.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}gn.pausedAnimations=[],(i=document.getElementById(Tm))==null||i.remove(),document.querySelectorAll("video").forEach(a=>{a.dataset.wasPaused==="false"&&(a.play().catch(()=>{}),delete a.dataset.wasPaused)})}function qh(t){if(!t)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Sd=y.forwardRef(function({element:n,timestamp:i,selectedText:a,placeholder:c="What should change?",initialValue:u="",submitLabel:d="Add",onSubmit:h,onCancel:p,onDelete:g,style:_,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:w=!1,computedStyles:S},C){const[k,M]=y.useState(u),[R,A]=y.useState(!1),[T,$]=y.useState("initial"),[F,U]=y.useState(!1),[Q,X]=y.useState(!1),ne=y.useRef(null),le=y.useRef(null),q=y.useRef(null),te=y.useRef(null);y.useEffect(()=>{b&&T!=="exit"&&$("exit")},[b,T]),y.useEffect(()=>{Vt(()=>{$("enter")},0);const ve=Vt(()=>{$("entered")},200),Me=Vt(()=>{const B=ne.current;B&&(qh(B),B.selectionStart=B.selectionEnd=B.value.length,B.scrollTop=B.scrollHeight)},50);return()=>{clearTimeout(ve),clearTimeout(Me),q.current&&clearTimeout(q.current),te.current&&clearTimeout(te.current)}},[]);const ue=y.useCallback(()=>{te.current&&clearTimeout(te.current),A(!0),te.current=Vt(()=>{A(!1),qh(ne.current)},250)},[]);y.useImperativeHandle(C,()=>({shake:ue}),[ue]);const ye=y.useCallback(()=>{$("exit"),q.current=Vt(()=>{p()},150)},[p]),z=y.useCallback(()=>{k.trim()&&h(k.trim())},[k,h]),me=y.useCallback(ve=>{ve.stopPropagation(),!ve.nativeEvent.isComposing&&(ve.key==="Enter"&&!ve.shiftKey&&(ve.preventDefault(),z()),ve.key==="Escape"&&ye())},[z,ye]),G=[ds.popup,w?ds.light:"",T==="enter"?ds.enter:"",T==="entered"?ds.entered:"",T==="exit"?ds.exit:"",R?ds.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:le,className:G,"data-annotation-popup":!0,style:_,onClick:ve=>ve.stopPropagation(),children:[r.jsxs("div",{className:ds.header,children:[S&&Object.keys(S).length>0?r.jsxs("button",{className:ds.headerToggle,onClick:()=>{const ve=Q;X(!Q),ve&&Vt(()=>qh(ne.current),0)},type:"button",children:[r.jsx("svg",{className:`${ds.chevron} ${Q?ds.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:ds.element,children:n})]}):r.jsx("span",{className:ds.element,children:n}),i&&r.jsx("span",{className:ds.timestamp,children:i})]}),S&&Object.keys(S).length>0&&r.jsx("div",{className:`${ds.stylesWrapper} ${Q?ds.expanded:""}`,children:r.jsx("div",{className:ds.stylesInner,children:r.jsx("div",{className:ds.stylesBlock,children:Object.entries(S).map(([ve,Me])=>r.jsxs("div",{className:ds.styleLine,children:[r.jsx("span",{className:ds.styleProperty,children:ve.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:ds.styleValue,children:Me}),";"]},ve))})})}),a&&r.jsxs("div",{className:ds.quote,children:["“",a.slice(0,80),a.length>80?"...":"","”"]}),r.jsx("textarea",{ref:ne,className:ds.textarea,style:{borderColor:F?x:void 0},placeholder:c,value:k,onChange:ve=>M(ve.target.value),onFocus:()=>U(!0),onBlur:()=>U(!1),rows:2,onKeyDown:me}),r.jsxs("div",{className:ds.actions,children:[g&&r.jsx("div",{className:ds.deleteWrapper,children:r.jsx("button",{className:ds.deleteButton,onClick:g,type:"button",children:r.jsx(Hw,{size:22})})}),r.jsx("button",{className:ds.cancel,onClick:ye,children:"Cancel"}),r.jsx("button",{className:ds.submit,style:{backgroundColor:x,opacity:k.trim()?1:.4},onClick:z,disabled:!k.trim(),children:d})]})]})}),qw=({content:t,children:n,...i})=>{const[a,c]=y.useState(!1),[u,d]=y.useState(!1),[h,p]=y.useState({top:0,right:0}),g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=()=>{if(g.current){const C=g.current.getBoundingClientRect();p({top:C.top+C.height/2,right:window.innerWidth-C.left+8})}},w=()=>{d(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),_.current=Vt(()=>{c(!0)},500)},S=()=>{_.current&&(clearTimeout(_.current),_.current=null),c(!1),x.current=Vt(()=>{d(!1)},150)};return y.useEffect(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:g,onMouseEnter:w,onMouseLeave:S,...i,children:n}),u&&kc.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},Gw=`.styles-module__tooltip___mcXL2 {
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
}`,Kw={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=Gw}var Cy=Kw,hr=({content:t})=>r.jsx(qw,{className:Cy.tooltip,content:t,children:r.jsx(Dw,{className:Cy.tooltipIcon})}),yt={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Rx=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...yt.navigation},{type:"header",label:"Header",...yt.header},{type:"hero",label:"Hero",...yt.hero},{type:"section",label:"Section",...yt.section},{type:"sidebar",label:"Sidebar",...yt.sidebar},{type:"footer",label:"Footer",...yt.footer},{type:"modal",label:"Modal",...yt.modal},{type:"banner",label:"Banner",...yt.banner},{type:"drawer",label:"Drawer",...yt.drawer},{type:"popover",label:"Popover",...yt.popover},{type:"divider",label:"Divider",...yt.divider}]},{section:"Content",items:[{type:"card",label:"Card",...yt.card},{type:"text",label:"Text",...yt.text},{type:"image",label:"Image",...yt.image},{type:"video",label:"Video",...yt.video},{type:"table",label:"Table",...yt.table},{type:"grid",label:"Grid",...yt.grid},{type:"list",label:"List",...yt.list},{type:"chart",label:"Chart",...yt.chart},{type:"codeBlock",label:"Code Block",...yt.codeBlock},{type:"map",label:"Map",...yt.map},{type:"timeline",label:"Timeline",...yt.timeline},{type:"calendar",label:"Calendar",...yt.calendar},{type:"accordion",label:"Accordion",...yt.accordion},{type:"carousel",label:"Carousel",...yt.carousel},{type:"logo",label:"Logo",...yt.logo},{type:"faq",label:"FAQ",...yt.faq},{type:"gallery",label:"Gallery",...yt.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...yt.button},{type:"input",label:"Input",...yt.input},{type:"search",label:"Search",...yt.search},{type:"form",label:"Form",...yt.form},{type:"tabs",label:"Tabs",...yt.tabs},{type:"dropdown",label:"Dropdown",...yt.dropdown},{type:"toggle",label:"Toggle",...yt.toggle},{type:"stepper",label:"Stepper",...yt.stepper},{type:"rating",label:"Rating",...yt.rating},{type:"fileUpload",label:"File Upload",...yt.fileUpload},{type:"checkbox",label:"Checkbox",...yt.checkbox},{type:"radio",label:"Radio",...yt.radio},{type:"slider",label:"Slider",...yt.slider},{type:"datePicker",label:"Date Picker",...yt.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...yt.avatar},{type:"badge",label:"Badge",...yt.badge},{type:"tag",label:"Tag",...yt.tag},{type:"breadcrumb",label:"Breadcrumb",...yt.breadcrumb},{type:"pagination",label:"Pagination",...yt.pagination},{type:"progress",label:"Progress",...yt.progress},{type:"alert",label:"Alert",...yt.alert},{type:"toast",label:"Toast",...yt.toast},{type:"notification",label:"Notification",...yt.notification},{type:"tooltip",label:"Tooltip",...yt.tooltip},{type:"stat",label:"Stat",...yt.stat},{type:"skeleton",label:"Skeleton",...yt.skeleton},{type:"chip",label:"Chip",...yt.chip},{type:"icon",label:"Icon",...yt.icon},{type:"spinner",label:"Spinner",...yt.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...yt.pricing},{type:"testimonial",label:"Testimonial",...yt.testimonial},{type:"cta",label:"CTA",...yt.cta},{type:"productCard",label:"Product Card",...yt.productCard},{type:"profile",label:"Profile",...yt.profile},{type:"feature",label:"Feature",...yt.feature},{type:"team",label:"Team",...yt.team},{type:"login",label:"Login",...yt.login},{type:"contact",label:"Contact",...yt.contact}]}],Di={};for(const t of Rx)for(const n of t.items)Di[n.type]=n;function Pe({w:t,h:n=3,strong:i}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Zn({w:t,h:n,radius:i=3,style:a}){return r.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...a}})}function zo({size:t}){return r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Qw({width:t,height:n}){const i=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:t*.02},children:[r.jsx(Zn,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[r.jsx(Pe,{w:t*.06}),r.jsx(Pe,{w:t*.07}),r.jsx(Pe,{w:t*.05}),r.jsx(Pe,{w:t*.06})]}),r.jsx(Zn,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function Zw({width:t,height:n,text:i}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):r.jsx(Pe,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx(Pe,{w:t*.6}),r.jsx(Pe,{w:t*.4}),r.jsx(Zn,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function Jw({width:t,height:n}){const i=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx(Pe,{w:t*.6,h:4,strong:!0}),Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Zn,{w:10,h:10,radius:2}),r.jsx(Pe,{w:t*(.4+c*17%30/100)})]},c))]})}function eS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Pe,{w:"60%",h:3,strong:!0}),r.jsx(Pe,{w:"80%",h:2}),r.jsx(Pe,{w:"70%",h:2}),r.jsx(Pe,{w:"60%",h:2})]},c))})}function tS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(Pe,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(Pe,{w:"90%"}),r.jsx(Pe,{w:"70%"}),r.jsx(Pe,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Zn,{w:70,h:26,radius:4}),r.jsx(Zn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function nS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(Pe,{w:"70%",h:4,strong:!0}),r.jsx(Pe,{w:"95%",h:2}),r.jsx(Pe,{w:"85%",h:2}),r.jsx(Pe,{w:"50%",h:2})]})]})}function sS({width:t,height:n,text:i}){if(i)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const a=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(Pe,{w:t*.6,h:5,strong:!0}),Array.from({length:a},(c,u)=>r.jsx(Pe,{w:`${70+u*13%25}%`,h:2},u))]})}function oS({width:t,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function iS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(t/100))),a=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(Pe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(d,h)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(Pe,{w:`${50+(u*7+h*13)%40}%`,h:2})},h))},u))]})}function aS({width:t,height:n}){const i=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(zo,{size:8}),r.jsx(Pe,{w:`${55+c*17%35}%`,h:2})]},c))})}function rS({width:t,height:n,text:i}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):r.jsx(Pe,{w:Math.max(20,t*.5),h:3,strong:!0})})}function lS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(Pe,{w:Math.min(80,t*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(Pe,{w:"40%",h:2})})]})}function cS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Pe,{w:60+c*17%30,h:2}),r.jsx(Zn,{w:"100%",h:28,radius:4})]},c)),r.jsx(Zn,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function uS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(a,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(Pe,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(Pe,{w:"80%",h:2}),r.jsx(Pe,{w:"65%",h:2}),r.jsx(Pe,{w:"75%",h:2})]})]})}function dS({width:t,height:n}){const i=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:t/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${t/2-i*.55} ${n*.78} C${t/2-i*.55} ${n*.55} ${t/2+i*.55} ${n*.55} ${t/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function fS({width:t,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Pe,{w:Math.max(16,t*.5),h:2,strong:!0})})}function hS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(Pe,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx(Pe,{w:t*.35})]})}function mS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[r.jsx(Pe,{w:t*.3,h:4,strong:!0}),r.jsx(Pe,{w:t*.7}),r.jsx(Pe,{w:t*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[r.jsx(Zn,{w:"33%",h:"100%",radius:4}),r.jsx(Zn,{w:"33%",h:"100%",radius:4}),r.jsx(Zn,{w:"33%",h:"100%",radius:4})]})]})}function pS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/140))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*a},(c,u)=>r.jsx(Zn,{w:"100%",h:"100%",radius:4},u))})}function _S({width:t,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(Pe,{w:t*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(a,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(Pe,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function gS({width:t,height:n}){const i=Math.min(t,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:t-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function yS({width:t,height:n}){const i=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[r.jsx(zo,{size:Math.min(14,n*.4)}),r.jsx(Pe,{w:"50%",h:2})]})}function xS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(zo,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:"60%",h:3,strong:!0}),r.jsx(Pe,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function bS({width:t,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function vS({width:t,height:n}){const i=Math.max(3,Math.min(7,Math.floor(t/50))),a=t/(i*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const d=30+(u*37+17)%55;return r.jsx(Zn,{w:a,h:`${d}%`,radius:2},u)})})}function wS({width:t,height:n}){const i=Math.min(t,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Zn,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function SS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Pe,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function kS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(Pe,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function CS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/40))),a=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>r.jsx(Zn,{w:a,h:a,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function jS({width:t}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function MS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(Pe,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function TS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Zn,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(zo,{size:5}),r.jsx(zo,{size:5}),r.jsx(zo,{size:5})]})]})}function ES({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx(Pe,{w:t*.4,h:3,strong:!0}),r.jsx(Pe,{w:t*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,a)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(zo,{size:5}),r.jsx(Pe,{w:`${50+a*17%35}%`,h:2})]},a))}),r.jsx(Zn,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function DS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Pe,{w:"90%",h:2}),r.jsx(Pe,{w:"75%",h:2}),r.jsx(Pe,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(zo,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(Pe,{w:60,h:3,strong:!0}),r.jsx(Pe,{w:40,h:2})]})]})]})}function AS({width:t,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(Pe,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx(Pe,{w:t*.35}),r.jsx(Zn,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function NS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:"40%",h:3,strong:!0}),r.jsx(Pe,{w:"70%",h:2})]})]})}function RS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(Pe,{w:t*.4,h:3,strong:!0}),r.jsx(Zn,{w:60,h:Math.min(24,n*.6),radius:4})]})}function BS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(Pe,{w:t*.5,h:2}),r.jsx(Pe,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx(Pe,{w:t*.3,h:2})]})}function LS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(t/100))),a=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function OS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(Pe,{w:Math.max(16,t*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function zS({width:t,height:n}){const a=Math.min(n*.7,t/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:a*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function $S({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function IS({width:t,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(zo,{size:8}),c<i-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(Pe,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function PS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(Pe,{w:t*.4,h:2}),r.jsx(Pe,{w:t*.25,h:2})]})}function HS({width:t,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(zo,{size:6}),r.jsx(zo,{size:6}),r.jsx(zo,{size:6})]}),Array.from({length:i},(a,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:r.jsx(Pe,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function VS({width:t,height:n}){const c=Math.min((t-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Pe,{w:t*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(Pe,{w:c*.5,h:2})},`h${d}`)),Array.from({length:35},(u,d)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function US({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(zo,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:"50%",h:3,strong:!0}),r.jsx(Pe,{w:"75%",h:2})]}),r.jsx(Pe,{w:30,h:2})]})}function WS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(Pe,{w:"65%",h:4,strong:!0}),r.jsx(Pe,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(Pe,{w:"30%",h:5,strong:!0}),r.jsx(Zn,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function YS({width:t,height:n}){const i=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(zo,{size:i}),r.jsx(Pe,{w:t*.45,h:4,strong:!0}),r.jsx(Pe,{w:t*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(Pe,{w:20,h:3,strong:!0}),r.jsx(Pe,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(Pe,{w:20,h:3,strong:!0}),r.jsx(Pe,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(Pe,{w:20,h:3,strong:!0}),r.jsx(Pe,{w:28,h:2})]})]})]})}function FS({width:t,height:n}){const i=Math.max(t*.6,80),a=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:t-i,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx(Pe,{w:i*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:a},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(Pe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function XS({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(Pe,{w:"70%",h:3,strong:!0}),r.jsx(Pe,{w:"90%",h:2}),r.jsx(Pe,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function qS({width:t,height:n}){const i=Math.min(n*.7,t*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[r.jsx(Zn,{w:i,h:i,radius:i*.25}),r.jsx(Pe,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function GS({width:t,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(Pe,{w:t*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function KS({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*a},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function QS({width:t,height:n}){const i=Math.min(t,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ZS({width:t,height:n}){const i=Math.min(t,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:t/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function JS({width:t,height:n}){const i=Math.max(2,n*.12),a=Math.min(n*.35,10),c=t*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-a,width:a*2,height:a*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function e4({width:t,height:n}){const i=Math.min(36,n*.15),a=7,c=4,u=Math.min((t-16)/a,(n-i-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(Pe,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Pe,{w:t*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:a*c},(d,h)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function t4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function n4({width:t,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx(Pe,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function s4({width:t,height:n}){const i=Math.min(t,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:r.jsx("path",{d:`M${t/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function o4({width:t,height:n}){const i=Math.min(t,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[r.jsx("circle",{cx:t/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${t/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function i4({width:t,height:n}){const i=Math.min(36,n*.25,t*.12),a=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:a},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[r.jsx(Zn,{w:i,h:i,radius:i*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(Pe,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(Pe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function a4({width:t,height:n}){const i=Math.max(2,Math.min(4,Math.floor(t/120))),a=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx(Pe,{w:t*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(zo,{size:a}),r.jsx(Pe,{w:t*.12,h:3,strong:!0}),r.jsx(Pe,{w:t*.08,h:2})]},u))})]})}function r4({width:t,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[r.jsx(Pe,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx(Pe,{w:t*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(a,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:Math.min(60,t*.2),h:2}),r.jsx(Zn,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Zn,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx(Pe,{w:t*.4,h:2})]})}function l4({width:t,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[r.jsx(Pe,{w:t*.4,h:4,strong:!0}),r.jsx(Pe,{w:t*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:50,h:2}),r.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:40,h:2}),r.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(Pe,{w:50,h:2}),r.jsx(Zn,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(Pe,{w:60,h:2}),r.jsx(Zn,{w:"100%",h:"100%",radius:4})]}),r.jsx(Zn,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var c4={navigation:Qw,hero:Zw,sidebar:Jw,footer:eS,modal:tS,card:nS,text:sS,image:oS,table:iS,list:aS,button:rS,input:lS,form:cS,tabs:uS,avatar:dS,badge:fS,header:hS,section:mS,grid:pS,dropdown:_S,toggle:gS,search:yS,toast:xS,progress:bS,chart:vS,video:wS,tooltip:SS,breadcrumb:kS,pagination:CS,divider:jS,accordion:MS,carousel:TS,pricing:ES,testimonial:DS,cta:AS,alert:NS,banner:RS,stat:BS,stepper:LS,tag:OS,rating:zS,map:$S,timeline:IS,fileUpload:PS,codeBlock:HS,calendar:VS,notification:US,productCard:WS,profile:YS,drawer:FS,popover:XS,logo:qS,faq:GS,gallery:KS,checkbox:QS,radio:ZS,slider:JS,datePicker:e4,skeleton:t4,chip:n4,icon:s4,spinner:o4,feature:i4,team:a4,login:r4,contact:l4};function u4({type:t,width:n,height:i,text:a}){const c=c4[t];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:i,text:a})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var d4=`svg[fill=none] {
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
}`,f4={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=d4}var Ee=f4,Kr=24,Wu=5;function jy(t,n,i,a,c){let u=1/0,d=1/0;const h=t.x,p=t.x+t.width,g=t.x+t.width/2,_=t.y,x=t.y+t.height,b=t.y+t.height/2,w=!a,S=w?[h,p,g]:[...a.left?[h]:[],...a.right?[p]:[]],C=w?[_,x,b]:[...a.top?[_]:[],...a.bottom?[x]:[]],k=[];for(const le of n)i.has(le.id)||k.push(le);c&&k.push(...c);for(const le of k){const q=le.x,te=le.x+le.width,ue=le.x+le.width/2,ye=le.y,z=le.y+le.height,me=le.y+le.height/2;for(const G of S)for(const ve of[q,te,ue]){const Me=ve-G;Math.abs(Me)<Wu&&Math.abs(Me)<Math.abs(u)&&(u=Me)}for(const G of C)for(const ve of[ye,z,me]){const Me=ve-G;Math.abs(Me)<Wu&&Math.abs(Me)<Math.abs(d)&&(d=Me)}}const M=Math.abs(u)<Wu?u:0,R=Math.abs(d)<Wu?d:0,A=[],T=new Set,$=h+M,F=p+M,U=g+M,Q=_+R,X=x+R,ne=b+R;for(const le of k){const q=le.x,te=le.x+le.width,ue=le.x+le.width/2,ye=le.y,z=le.y+le.height,me=le.y+le.height/2;for(const G of[q,ue,te])for(const ve of[$,U,F])if(Math.abs(ve-G)<.5){const Me=`x:${Math.round(G)}`;T.has(Me)||(T.add(Me),A.push({axis:"x",pos:G}))}for(const G of[ye,me,z])for(const ve of[Q,ne,X])if(Math.abs(ve-G)<.5){const Me=`y:${Math.round(G)}`;T.has(Me)||(T.add(Me),A.push({axis:"y",pos:G}))}}return{dx:M,dy:R,guides:A}}function My(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function h4({placements:t,onChange:n,activeComponent:i,onActiveComponentChange:a,isDarkMode:c,exiting:u,onInteractionChange:d,className:h,passthrough:p,extraSnapRects:g,onSelectionChange:_,deselectSignal:x,onDragMove:b,onDragEnd:w,clearSignal:S,wireframe:C}){const[k,M]=y.useState(new Set),[R,A]=y.useState(null),[T,$]=y.useState(null),[F,U]=y.useState(null),[Q,X]=y.useState([]),[ne,le]=y.useState(null),[q,te]=y.useState(!1),ue=y.useRef(!1),[ye,z]=y.useState(new Set),me=y.useRef(new Map),G=y.useRef(null),ve=y.useRef(null),Me=y.useRef(t);Me.current=t;const B=y.useRef(_);B.current=_;const P=y.useRef(b);P.current=b;const L=y.useRef(w);L.current=w;const ie=y.useRef(x);y.useEffect(()=>{x!==ie.current&&(ie.current=x,M(new Set))},[x]);const $e=y.useRef(S);y.useEffect(()=>{if(S!==void 0&&S!==$e.current){$e.current=S;const K=new Set(Me.current.map(Be=>Be.id));K.size>0&&(z(K),M(new Set),ve.current=null,Vt(()=>{n([]),z(new Set)},180))}},[S,n]),y.useEffect(()=>{const K=Be=>{const Ye=Be.target;if(!(Ye.tagName==="INPUT"||Ye.tagName==="TEXTAREA"||Ye.isContentEditable)){if((Be.key==="Backspace"||Be.key==="Delete")&&k.size>0){Be.preventDefault();const Je=new Set(k);z(Je),M(new Set),Vt(()=>{n(Me.current.filter(at=>!Je.has(at.id))),z(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Be.key)&&k.size>0){Be.preventDefault();const Je=Be.shiftKey?20:1,at=Be.key==="ArrowLeft"?-Je:Be.key==="ArrowRight"?Je:0,Xe=Be.key==="ArrowUp"?-Je:Be.key==="ArrowDown"?Je:0;n(t.map(dt=>k.has(dt.id)?{...dt,x:Math.max(0,dt.x+at),y:Math.max(0,dt.y+Xe)}:dt));return}if(Be.key==="Escape"){i?a(null):k.size>0&&M(new Set);return}}};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[k,i,t,n,a]);const Te=y.useCallback(K=>{if(K.button!==0||p||K.target.closest(`.${Ee.placement}`))return;K.preventDefault(),K.stopPropagation();const Ye=window.scrollY,De=K.clientX,Je=K.clientY;if(i){ve.current="place",d==null||d(!0);let at=!1,Xe=De,dt=Je;const ht=Fe=>{Xe=Fe.clientX,dt=Fe.clientY;const I=Math.abs(Xe-De),J=Math.abs(dt-Je);if((I>5||J>5)&&(at=!0),at){const pe=Math.min(De,Xe),we=Math.min(Je,dt),Ve=Math.abs(Xe-De),We=Math.abs(dt-Je);A({x:pe,y:we,w:Ve,h:We}),U({x:Fe.clientX+12,y:Fe.clientY+12,text:`${Math.round(Ve)} × ${Math.round(We)}`})}},Ie=Fe=>{window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",Ie),A(null),U(null),ve.current=null,d==null||d(!1);const I=yt[i];let J,pe,we,Ve;at?(J=Math.min(De,Xe),pe=Math.min(Je,dt)+Ye,we=Math.max(Kr,Math.abs(Xe-De)),Ve=Math.max(Kr,Math.abs(dt-Je))):(we=I.width,Ve=I.height,J=De-we/2,pe=Je+Ye-Ve/2),J=Math.max(0,J),pe=Math.max(0,pe);const We={id:My(),type:i,x:J,y:pe,width:we,height:Ve,scrollY:Ye,timestamp:Date.now()},Ae=[...t,We];n(Ae),M(new Set([We.id])),a(null)};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",Ie)}else{K.shiftKey||M(new Set),ve.current="select";let at=!1;const Xe=ht=>{const Ie=Math.abs(ht.clientX-De),Fe=Math.abs(ht.clientY-Je);if((Ie>4||Fe>4)&&(at=!0),at){const I=Math.min(De,ht.clientX),J=Math.min(Je,ht.clientY);$({x:I,y:J,w:Math.abs(ht.clientX-De),h:Math.abs(ht.clientY-Je)})}},dt=ht=>{if(window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",dt),ve.current=null,at){const Ie=Math.min(De,ht.clientX),Fe=Math.min(Je,ht.clientY)+Ye,I=Math.abs(ht.clientX-De),J=Math.abs(ht.clientY-Je),pe=new Set(K.shiftKey?k:new Set);for(const we of t)we.y-Ye,we.x+we.width>Ie&&we.x<Ie+I&&we.y+we.height>Fe&&we.y<Fe+J&&pe.add(we.id);M(pe)}$(null)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",dt)}},[i,p,t,n,k]),Re=y.useCallback((K,Be)=>{var We;if(K.button!==0)return;const Ye=K.target;if(Ye.closest(`.${Ee.handle}`)||Ye.closest(`.${Ee.deleteButton}`))return;K.preventDefault(),K.stopPropagation();let De;K.shiftKey?(De=new Set(k),De.has(Be)?De.delete(Be):De.add(Be)):k.has(Be)?De=new Set(k):De=new Set([Be]),M(De),(De.size!==k.size||[...De].some(Ae=>!k.has(Ae)))&&((We=B.current)==null||We.call(B,De,K.shiftKey));const at=K.clientX,Xe=K.clientY,dt=new Map;for(const Ae of t)De.has(Ae.id)&&dt.set(Ae.id,{x:Ae.x,y:Ae.y});ve.current="move",d==null||d(!0);let ht=!1,Ie=!1,Fe=t,I=0,J=0;const pe=new Map;for(const Ae of t)dt.has(Ae.id)&&pe.set(Ae.id,{w:Ae.width,h:Ae.height});const we=Ae=>{var En;const Rt=Ae.clientX-at,Mt=Ae.clientY-Xe;if((Math.abs(Rt)>2||Math.abs(Mt)>2)&&(ht=!0),!ht)return;if(Ae.altKey&&!Ie){Ie=!0;const it=[];for(const en of t)dt.has(en.id)&&it.push({...en,id:My(),timestamp:Date.now()});Fe=[...t,...it]}let Ht=1/0,ft=1/0,et=-1/0,Tt=-1/0;for(const[it,en]of dt){const Dn=pe.get(it);Dn&&(Ht=Math.min(Ht,en.x+Rt),ft=Math.min(ft,en.y+Mt),et=Math.max(et,en.x+Rt+Dn.w),Tt=Math.max(Tt,en.y+Mt+Dn.h))}const At={x:Ht,y:ft,width:et-Ht,height:Tt-ft},{dx:pn,dy:lt,guides:Wt}=jy(At,Fe,new Set(dt.keys()),void 0,g);X(Wt);const Zt=Rt+pn,Bt=Mt+lt;I=Zt,J=Bt,n(Fe.map(it=>{const en=dt.get(it.id);return en?{...it,x:Math.max(0,en.x+Zt),y:Math.max(0,en.y+Bt)}:it})),(En=P.current)==null||En.call(P,Zt,Bt)},Ve=()=>{var Ae;window.removeEventListener("mousemove",we),window.removeEventListener("mouseup",Ve),ve.current=null,d==null||d(!1),X([]),(Ae=L.current)==null||Ae.call(L,I,J,ht)};window.addEventListener("mousemove",we),window.addEventListener("mouseup",Ve)},[k,t,n,d]),Qe=y.useCallback((K,Be,Ye)=>{K.preventDefault(),K.stopPropagation();const De=t.find(pe=>pe.id===Be);if(!De)return;M(new Set([Be])),ve.current="resize",d==null||d(!0);const Je=K.clientX,at=K.clientY,Xe=De.width,dt=De.height,ht=De.x,Ie=De.y,Fe={left:Ye.includes("w"),right:Ye.includes("e"),top:Ye.includes("n"),bottom:Ye.includes("s")},I=pe=>{const we=pe.clientX-Je,Ve=pe.clientY-at;let We=Xe,Ae=dt,Rt=ht,Mt=Ie;Ye.includes("e")&&(We=Math.max(Kr,Xe+we)),Ye.includes("w")&&(We=Math.max(Kr,Xe-we),Rt=ht+Xe-We),Ye.includes("s")&&(Ae=Math.max(Kr,dt+Ve)),Ye.includes("n")&&(Ae=Math.max(Kr,dt-Ve),Mt=Ie+dt-Ae);const Ht={x:Rt,y:Mt,width:We,height:Ae},{dx:ft,dy:et,guides:Tt}=jy(Ht,Me.current,new Set([Be]),Fe,g);X(Tt),ft!==0&&(Fe.right?We+=ft:Fe.left&&(Rt+=ft,We-=ft)),et!==0&&(Fe.bottom?Ae+=et:Fe.top&&(Mt+=et,Ae-=et)),n(Me.current.map(At=>At.id===Be?{...At,x:Rt,y:Mt,width:We,height:Ae}:At)),U({x:pe.clientX+12,y:pe.clientY+12,text:`${Math.round(We)} × ${Math.round(Ae)}`})},J=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",J),U(null),ve.current=null,d==null||d(!1),X([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",J)},[t,n,d]),Ze=y.useCallback(K=>{ve.current=null,z(Be=>{const Ye=new Set(Be);return Ye.add(K),Ye}),M(Be=>{const Ye=new Set(Be);return Ye.delete(K),Ye}),Vt(()=>{n(Me.current.filter(Be=>Be.id!==K)),z(Be=>{const Ye=new Set(Be);return Ye.delete(K),Ye})},180)},[n]),Ut={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Ft=y.useCallback(K=>{const Be=t.find(Ye=>Ye.id===K);Be&&(ue.current=!!Be.text,le(K),te(!1))},[t]),Dt=y.useCallback(()=>{ne&&(te(!0),Vt(()=>{le(null),te(!1)},150))},[ne]);y.useEffect(()=>{u&&ne&&Dt()},[u]);const zt=y.useCallback(K=>{ne&&(n(t.map(Be=>Be.id===ne?{...Be,text:K.trim()||void 0}:Be)),Dt())},[ne,t,n,Dt]),sn=typeof window<"u"?window.scrollY:0,rn=["nw","ne","se","sw"],qe=C?"#f97316":"#3c82f7",Se=[{dir:"n",cls:Ee.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:qe})})},{dir:"e",cls:Ee.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:qe})})},{dir:"s",cls:Ee.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:qe})})},{dir:"w",cls:Ee.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:qe})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:G,className:`${Ee.overlay} ${c?"":Ee.light} ${i?Ee.placing:""} ${p?Ee.passthrough:""} ${u?Ee.overlayExiting:""} ${C?Ee.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Te,children:t.map(K=>{var Je;const Be=k.has(K.id),Ye=((Je=Di[K.type])==null?void 0:Je.label)||K.type,De=K.y-sn;return r.jsxs("div",{"data-design-placement":K.id,className:`${Ee.placement} ${Be?Ee.selected:""} ${ye.has(K.id)?Ee.exiting:""}`,style:{left:K.x,top:De,width:K.width,height:K.height,position:"fixed"},onMouseDown:at=>Re(at,K.id),onDoubleClick:()=>Ft(K.id),children:[r.jsx("span",{className:Ee.placementLabel,children:Ye}),r.jsx("span",{className:`${Ee.placementAnnotation} ${K.text?Ee.annotationVisible:""}`,children:(K.text&&me.current.set(K.id,K.text),K.text||me.current.get(K.id)||"")}),r.jsx("div",{className:Ee.placementContent,children:r.jsx(u4,{type:K.type,width:K.width,height:K.height,text:K.text})}),r.jsx("div",{className:Ee.deleteButton,onMouseDown:at=>at.stopPropagation(),onClick:()=>Ze(K.id),children:"✕"}),rn.map(at=>r.jsx("div",{className:`${Ee.handle} ${Ee[`handle${at.charAt(0).toUpperCase()}${at.slice(1)}`]}`,onMouseDown:Xe=>Qe(Xe,K.id,at)},at)),Se.map(({dir:at,cls:Xe,arrow:dt})=>r.jsx("div",{className:`${Ee.edgeHandle} ${Xe}`,onMouseDown:ht=>Qe(ht,K.id,at),children:dt},at))]},K.id)})}),ne&&(()=>{var Ie,Fe;const K=t.find(I=>I.id===ne);if(!K)return null;const Be=K.y-sn,Ye=K.x+K.width/2,De=Be-8,Je=Be+K.height+8,at=De>200,Xe=Je<window.innerHeight-100,dt=Math.max(160,Math.min(window.innerWidth-160,Ye));let ht;return at?ht={left:dt,bottom:window.innerHeight-De}:Xe?ht={left:dt,top:Je}:ht={left:dt,top:Math.max(80,window.innerHeight/2-80)},r.jsx(Sd,{element:((Ie=Di[K.type])==null?void 0:Ie.label)||K.type,placeholder:Ut[K.type]||"Label or content text",initialValue:(Fe=K.text)!=null?Fe:"",submitLabel:ue.current?"Save":"Set",onSubmit:zt,onCancel:Dt,onDelete:ue.current?()=>{zt("")}:void 0,isExiting:q,lightMode:!c,style:ht})})(),R&&r.jsx("div",{className:Ee.drawBox,style:{left:R.x,top:R.y,width:R.w,height:R.h},"data-feedback-toolbar":!0}),T&&r.jsx("div",{className:Ee.selectBox,style:{left:T.x,top:T.y,width:T.w,height:T.h},"data-feedback-toolbar":!0}),F&&r.jsx("div",{className:Ee.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),Q.map((K,Be)=>r.jsx("div",{className:Ee.guideLine,style:K.axis==="x"?{position:"fixed",left:K.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:K.pos-sn,right:0,height:1},"data-feedback-toolbar":!0},`${K.axis}-${K.pos}-${Be}`))]})}function m4(t){if(!t)return"";const n=t.scrollTop>2,i=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?Ee.fadeTop:""} ${i?Ee.fadeBottom:""}`}var N="currentColor",je="0.5";function p4({type:t}){switch(t){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:N,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:N,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:N,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:N,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:N,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:N,strokeWidth:je})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:N,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:N,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:N,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:N,strokeWidth:je})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:N,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:N,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:N,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:N,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:N,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:N,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:N,strokeWidth:je,fill:N,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:N,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:N,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:N,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:N,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:N,strokeWidth:je})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:N,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:N,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:N,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:N,strokeWidth:je})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:N,strokeWidth:je}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:N,strokeWidth:je,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:N,strokeWidth:je,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:N,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:N,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:N,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:N,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:N,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:N,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:N,strokeWidth:je})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:N,strokeWidth:je})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:N,strokeWidth:je,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:N,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:N,strokeWidth:je}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:N,strokeWidth:je})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:N,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:N,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:N,strokeWidth:je,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:N,strokeWidth:je,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:N,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:N,opacity:".15",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:N,strokeWidth:je})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:N,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:N,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:N,strokeWidth:je})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:N,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:N,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:N,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:N,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:N,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:N,strokeWidth:je,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:N,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:N,strokeWidth:je})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:N,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:N,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:N,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:N,strokeWidth:je})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:N,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:N,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:N,opacity:".2",stroke:N,strokeWidth:je}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:N,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:N,strokeWidth:je}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:N,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:N,strokeWidth:je})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:N,strokeWidth:je,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:N,strokeWidth:je,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:N,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:N,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:N,strokeWidth:je,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:N,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:N,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:N,opacity:".15",stroke:N,strokeWidth:je})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:N,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:N,opacity:".2",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:N,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:N,strokeWidth:je,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:N,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:N,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:N,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:N,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:N,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:N,strokeWidth:je}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:N,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:N,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:N,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:N,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:N,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:N,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:N,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:N,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:N,strokeWidth:je,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:N,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:N,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:N,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:N,strokeWidth:je})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:N,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:N,strokeWidth:je,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:N,strokeWidth:je})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:N,strokeWidth:je}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:N,strokeWidth:je,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:N,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:N,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:N,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:N,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:N,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:N,strokeWidth:je})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:N,strokeWidth:je,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:N,strokeWidth:je}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:N,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:N,strokeWidth:je})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:N,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:N,strokeWidth:je,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:N,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:N,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:N,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:N,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:N,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:N,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:N,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:N,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:N,opacity:".08",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:N,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:N,strokeWidth:je,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:N,strokeWidth:je,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:N,strokeWidth:je,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:N,strokeWidth:je,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:N,strokeWidth:je,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:N,strokeWidth:je,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:N,strokeWidth:je,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:N,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:N,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:N,strokeWidth:je,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:N,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:N,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:N,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:N,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:N,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:N,strokeWidth:je}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:N,opacity:".2"})]});default:return null}}function _4({activeType:t,onSelect:n,onDragStart:i,scrollRef:a,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:a,className:`${Ee.placeScroll} ${c||""}`,children:Rx.map(d=>r.jsxs("div",{className:Ee.paletteSection,children:[r.jsx("div",{className:Ee.paletteSectionTitle,children:d.section}),d.items.map(h=>r.jsxs("div",{className:`${Ee.paletteItem} ${t===h.type?Ee.active:""} ${u?Ee.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:p=>{p.button===0&&i(h.type,p)},children:[r.jsx("div",{className:Ee.paletteItemIcon,children:r.jsx(p4,{type:h.type})}),r.jsx("span",{className:Ee.paletteItemLabel,children:h.label})]},h.type))]},d.section))})}function g4({value:t,suffix:n}){const[i,a]=y.useState(null),[c,u]=y.useState(n),[d,h]=y.useState("up"),p=y.useRef(t),g=y.useRef(n),_=y.useRef(),x=i!==null&&c!==n;return y.useEffect(()=>{if(t!==p.current){if(t===0){p.current=t,g.current=n,a(null);return}h(t>p.current?"up":"down"),a(p.current),u(g.current),p.current=t,g.current=n,clearTimeout(_.current),_.current=Vt(()=>a(null),250)}else g.current=n},[t,n]),i===null?r.jsxs(r.Fragment,{children:[t,n?` ${n}`:""]}):x?r.jsxs("span",{className:Ee.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),r.jsxs("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.exitUp:Ee.exitDown}`,children:[i," ",c]},`o${i}-${t}`),r.jsxs("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.enterUp:Ee.enterDown}`,children:[t," ",n]},`n${t}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:Ee.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:t}),r.jsx("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.exitUp:Ee.exitDown}`,children:i},`o${i}-${t}`),r.jsx("span",{className:`${Ee.rollingNum} ${d==="up"?Ee.enterUp:Ee.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function y4({activeType:t,onSelect:n,isDarkMode:i,sectionCount:a,onDetectSections:c,visible:u,onExited:d,placementCount:h,onClearPlacements:p,onDragStart:g,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:w,Tooltip:S}){const[C,k]=y.useState(!1),[M,R]=y.useState("exit"),[A,T]=y.useState(!1),[$,F]=y.useState(!0),U=y.useRef(0),Q=y.useRef(""),X=y.useRef(0),ne=y.useRef(),le=y.useRef(null),[q,te]=y.useState("");y.useEffect(()=>(u?(k(!0),clearTimeout(ne.current),cancelAnimationFrame(X.current),X.current=tl(()=>{X.current=tl(()=>{R("enter")})})):(cancelAnimationFrame(X.current),R("exit"),clearTimeout(ne.current),ne.current=Vt(()=>{k(!1),d==null||d()},200)),()=>cancelAnimationFrame(X.current)),[u]);const ue=h>0||a>0,ye=h+a;return ye>0&&(U.current=ye,Q.current=_?ye===1?"Component":"Components":ye===1?"Change":"Changes"),y.useEffect(()=>{if(ue)A?F(!1):(F(!0),T(!0),tl(()=>{tl(()=>{F(!1)})}));else{F(!0);const z=Vt(()=>T(!1),300);return()=>clearTimeout(z)}},[ue]),y.useEffect(()=>{if(!C)return;const z=le.current;if(!z)return;const me=()=>te(m4(z));me(),z.addEventListener("scroll",me,{passive:!0});const G=new ResizeObserver(me);return G.observe(z),()=>{z.removeEventListener("scroll",me),G.disconnect()}},[C]),C?r.jsxs("div",{className:`${Ee.palette} ${Ee[M]} ${i?"":Ee.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:z=>z.stopPropagation(),onMouseDown:z=>z.stopPropagation(),onTransitionEnd:z=>{z.target===z.currentTarget&&(u||(clearTimeout(ne.current),k(!1),R("exit"),d==null||d()))},children:[r.jsxs("div",{className:Ee.paletteHeader,children:[r.jsx("div",{className:Ee.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:Ee.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${Ee.canvasToggle} ${_?Ee.active:""}`,onClick:()=>x(!_),children:[r.jsx("span",{className:Ee.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:Ee.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${Ee.wireframePurposeWrap} ${_?"":Ee.collapsed}`,children:r.jsx("div",{className:Ee.wireframePurposeInner,children:r.jsx("textarea",{className:Ee.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:z=>w(z.target.value),rows:2})})}),r.jsx(_4,{activeType:t,onSelect:n,onDragStart:g,scrollRef:le,fadeClass:q,blankCanvas:_}),A&&r.jsx("div",{className:`${Ee.paletteFooterWrap} ${$?Ee.footerHidden:""}`,children:r.jsx("div",{className:Ee.paletteFooterInner,children:r.jsx("div",{className:Ee.paletteFooterInnerContent,children:r.jsxs("div",{className:Ee.paletteFooter,children:[r.jsx("span",{className:Ee.paletteFooterCount,children:r.jsx(g4,{value:U.current,suffix:Q.current})}),r.jsx("button",{className:Ee.paletteFooterClear,onClick:p,children:"Clear"})]})})})})]}):null}function al(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Bo(t,n){let i=t;for(;i;){if(i.matches(n))return i;i=al(i)}return null}function x4(t,n=4){const i=[];let a=t,c=0;for(;a&&c<n;){const u=a.tagName.toLowerCase();if(u==="html"||u==="body")break;let d=u;if(a.id)d=`#${a.id}`;else if(a.className&&typeof a.className=="string"){const p=a.className.split(/\s+/).find(g=>g.length>2&&!g.match(/^[a-z]{1,2}$/)&&!g.match(/[A-Z0-9]{5,}/));p&&(d=`.${p.split("_")[0]}`)}const h=al(a);!a.parentElement&&h&&(d=`⟨shadow⟩ ${d}`),i.unshift(d),a=h,c++}return i.join(" > ")}function il(t){var a,c,u,d,h,p,g,_;const n=x4(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const i=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const x=Bo(t,"svg");if(x){const b=al(x);if(b instanceof HTMLElement)return{name:`graphic in ${il(b).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const x=al(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(a=x.textContent)==null?void 0:a.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const x=(c=t.textContent)==null?void 0:c.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(i==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),w=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:w?{name:`input [${w}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const x=(d=t.textContent)==null?void 0:d.trim();return{name:x?`${i} "${x.slice(0,35)}"`:i,path:n}}if(i==="p"){const x=(h=t.textContent)==null?void 0:h.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const x=(p=t.textContent)==null?void 0:p.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:i,path:n}}if(i==="li"){const x=(g=t.textContent)==null?void 0:g.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const x=t.className,b=t.getAttribute("role"),w=t.getAttribute("aria-label");if(w)return{name:`${i} [${w}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const S=x.split(/[\s_-]+/).map(C=>C.replace(/[A-Z0-9]{5,}.*$/,"")).filter(C=>C.length>2&&!/^[a-z]{1,2}$/.test(C)).slice(0,2);if(S.length>0)return{name:S.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function Zl(t){var u,d,h;const n=[],i=(u=t.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const a=t.previousElementSibling;if(a){const p=(d=a.textContent)==null?void 0:d.trim();p&&p.length<50&&n.unshift(`[before: "${p.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const p=(h=c.textContent)==null?void 0:h.trim();p&&p.length<50&&n.push(`[after: "${p.slice(0,40)}"]`)}return n.join(" ")}function Yu(t){const n=al(t);if(!n)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(_=>_!==t&&_ instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(_=>{var S;const x=_.tagName.toLowerCase(),b=_.className;let w="";if(typeof b=="string"&&b){const C=b.split(/\s+/).map(k=>k.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(k=>k.length>2&&!/^[a-z]{1,2}$/.test(k));C&&(w=`.${C}`)}if(x==="button"||x==="a"){const C=(S=_.textContent)==null?void 0:S.trim().slice(0,15);if(C)return`${x}${w} "${C}"`}return`${x}${w}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const _=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(h=`.${_}`)}const p=n.children.length,g=p>u.length+1?` (${p} total in ${h})`:"";return u.join(", ")+g}function Jl(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(a=>a.length>0).map(a=>{const c=a.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:a}).filter((a,c,u)=>u.indexOf(a)===c).join(", ")}var Bx=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),b4=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),v4=new Set(["input","textarea","select"]),w4=new Set(["img","video","canvas","svg"]),S4=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Fu(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),i={},a=t.tagName.toLowerCase();let c;b4.has(a)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:a==="button"||a==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:v4.has(a)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:w4.has(a)?c=["width","height","objectFit","borderRadius"]:S4.has(a)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const d=u.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(d);h&&!Bx.has(h)&&(i[u]=h)}return i}var k4=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Xu(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),i=[];for(const a of k4){const c=a.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!Bx.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function C4(t){if(!t)return;const n={},i=t.split(";").map(a=>a.trim()).filter(Boolean);for(const a of i){const c=a.indexOf(":");if(c>0){const u=a.slice(0,c).trim(),d=a.slice(c+1).trim();u&&d&&(n[u]=d)}}return Object.keys(n).length>0?n:void 0}function qu(t){const n=[],i=t.getAttribute("role"),a=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),d=t.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),a&&n.push(`aria-label="${a}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),d==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Gu(t){const n=[];let i=t;for(;i&&i.tagName.toLowerCase()!=="html";){const a=i.tagName.toLowerCase();let c=a;if(i.id)c=`${a}#${i.id}`;else if(i.className&&typeof i.className=="string"){const d=i.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);d&&(c=`${a}.${d}`)}const u=al(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var j4=new Set(["nav","header","main","section","article","footer","aside"]),Em={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Ty={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},M4=new Set(["script","style","noscript","link","meta"]),T4=40;function Lx(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function yr(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const c=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=t.parentElement;if(i){const c=Array.from(i.children).indexOf(t)+1;return`${i===document.body?"body":yr(i)} > ${n}:nth-child(${c})`}return n}function kd(t){var d;const n=t.tagName.toLowerCase(),i=t.getAttribute("aria-label");if(i)return i;const a=t.getAttribute("role");if(a&&Em[a])return Em[a];if(Ty[n])return Ty[n];const c=t.querySelector("h1, h2, h3, h4, h5, h6");if(c){const h=(d=c.textContent)==null?void 0:d.trim();if(h&&h.length<=50)return h;if(h)return h.slice(0,47)+"..."}const{name:u}=il(t);return u.charAt(0).toUpperCase()+u.slice(1)}function Ox(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a))||null}function zx(t){var a;const n=(a=t.textContent)==null?void 0:a.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function E4(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let i=n;t!==document.body&&n.length<3&&(i=Array.from(document.body.children));const a=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const d=c.tagName.toLowerCase();if(M4.has(d)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(c);if(h.display==="none"||h.visibility==="hidden")return;const p=c.getBoundingClientRect();if(p.height<T4)return;const g=j4.has(d),_=c.getAttribute("role")&&Em[c.getAttribute("role")],x=d==="div"&&p.height>=60;if(!g&&!_&&!x)return;const b=window.scrollY,w=Lx(c),S={x:p.x,y:w?p.y:p.y+b,width:p.width,height:p.height};a.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:kd(c),tagName:d,selector:yr(c),role:c.getAttribute("role"),className:Ox(c),textSnippet:zx(c),originalRect:S,currentRect:{...S},originalIndex:u,isFixed:w})}),a}function D4(t){const n=window.scrollY,i=t.getBoundingClientRect(),a=Lx(t),c={x:i.x,y:a?i.y:i.y+n,width:i.width,height:i.height},u=t.parentElement;let d=0;return u&&(d=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:kd(t),tagName:t.tagName.toLowerCase(),selector:yr(t),role:t.getAttribute("role"),className:Ox(t),textSnippet:zx(t),originalRect:c,currentRect:{...c},originalIndex:d,isFixed:a}}var Ey={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Dy=["nw","n","ne","e","se","s","sw","w"],Ku=24,Ay=16,Qu=5;function Ny(t,n,i,a){let c=1/0,u=1/0;const d=t.x,h=t.x+t.width,p=t.x+t.width/2,g=t.y,_=t.y+t.height,x=t.y+t.height/2,b=[];for(const U of n)i.has(U.id)||b.push(U.currentRect);a&&b.push(...a);for(const U of b){const Q=U.x,X=U.x+U.width,ne=U.x+U.width/2,le=U.y,q=U.y+U.height,te=U.y+U.height/2;for(const ue of[d,h,p])for(const ye of[Q,X,ne]){const z=ye-ue;Math.abs(z)<Qu&&Math.abs(z)<Math.abs(c)&&(c=z)}for(const ue of[g,_,x])for(const ye of[le,q,te]){const z=ye-ue;Math.abs(z)<Qu&&Math.abs(z)<Math.abs(u)&&(u=z)}}const w=Math.abs(c)<Qu?c:0,S=Math.abs(u)<Qu?u:0,C=[],k=new Set,M=d+w,R=h+w,A=p+w,T=g+S,$=_+S,F=x+S;for(const U of b){const Q=U.x,X=U.x+U.width,ne=U.x+U.width/2,le=U.y,q=U.y+U.height,te=U.y+U.height/2;for(const ue of[Q,ne,X])for(const ye of[M,A,R])if(Math.abs(ye-ue)<.5){const z=`x:${Math.round(ue)}`;k.has(z)||(k.add(z),C.push({axis:"x",pos:ue}))}for(const ue of[le,te,q])for(const ye of[T,F,$])if(Math.abs(ye-ue)<.5){const z=`y:${Math.round(ue)}`;k.has(z)||(k.add(z),C.push({axis:"y",pos:ue}))}}return{dx:w,dy:S,guides:C}}var A4=new Set(["script","style","noscript","link","meta","br","hr"]);function Ry(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(A4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=Ay&&i.height>=Ay)return n;n=n.parentElement}return null}function N4({rearrangeState:t,onChange:n,isDarkMode:i,exiting:a,className:c,blankCanvas:u,extraSnapRects:d,onSelectionChange:h,deselectSignal:p,onDragMove:g,onDragEnd:_,clearSignal:x}){const{sections:b}=t,w=y.useRef(t);w.current=t;const[S,C]=y.useState(new Set),[k,M]=y.useState(!1),R=y.useRef(x);y.useEffect(()=>{x!==void 0&&x!==R.current&&(R.current=x,b.length>0&&M(!0))},[x,b.length]);const A=y.useRef(p);y.useEffect(()=>{p!==A.current&&(A.current=p,C(new Set))},[p]);const[T,$]=y.useState(null),[F,U]=y.useState(!1),Q=y.useRef(!1),X=y.useCallback(I=>{const J=b.find(pe=>pe.id===I);J&&(Q.current=!!J.note,$(I),U(!1))},[b]),ne=y.useCallback(()=>{T&&(U(!0),Vt(()=>{$(null),U(!1)},150))},[T]),le=y.useCallback(I=>{T&&(n({...t,sections:b.map(J=>J.id===T?{...J,note:I.trim()||void 0}:J)}),ne())},[T,b,t,n,ne]);y.useEffect(()=>{a&&T&&ne()},[a]);const[q,te]=y.useState(new Set),ue=y.useRef(new Map),[ye,z]=y.useState(null),[me,G]=y.useState(null),[ve,Me]=y.useState([]),[B,P]=y.useState(0),L=y.useRef(null),ie=y.useRef(new Set),$e=y.useRef(new Map),[Te,Re]=y.useState(new Map),[Qe,Ze]=y.useState(new Map),Ut=y.useRef(new Set),Ft=y.useRef(new Map),Dt=y.useRef(h);Dt.current=h;const zt=y.useRef(g);zt.current=g;const sn=y.useRef(_);sn.current=_,y.useEffect(()=>{u&&C(new Set)},[u]);const[rn,qe]=y.useState(()=>!t.sections.some(I=>{const J=I.originalRect,pe=I.currentRect;return Math.abs(J.x-pe.x)>1||Math.abs(J.y-pe.y)>1||Math.abs(J.width-pe.width)>1||Math.abs(J.height-pe.height)>1}));y.useEffect(()=>{if(!rn){const I=Vt(()=>qe(!0),380);return()=>clearTimeout(I)}},[]);const Se=y.useRef(new Set);y.useEffect(()=>{Se.current=new Set(b.map(I=>I.selector))},[b]),y.useEffect(()=>{const I=()=>P(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),y.useEffect(()=>{const I=J=>{if(L.current){z(null);return}const pe=document.elementFromPoint(J.clientX,J.clientY);if(!pe){z(null);return}if(pe.closest("[data-feedback-toolbar]")){z(null);return}if(pe.closest("[data-design-placement]")){z(null);return}if(pe.closest("[data-annotation-popup]")){z(null);return}const we=Ry(pe);if(!we){z(null);return}for(const We of Se.current)try{const Ae=document.querySelector(We);if(Ae&&(Ae===we||we.contains(Ae))){z(null);return}}catch{}const Ve=we.getBoundingClientRect();z({x:Ve.x,y:Ve.y,w:Ve.width,h:Ve.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[b]),y.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),y.useEffect(()=>{const I=J=>{var Ae,Rt,Mt,Ht;if(L.current||J.button!==0)return;const pe=J.target;if(!pe||pe.closest("[data-feedback-toolbar]")||pe.closest("[data-design-placement]")||pe.closest("[data-annotation-popup]"))return;const we=Ry(pe);let Ve=!1;if(we)for(const ft of Se.current)try{const et=document.querySelector(ft);if(et&&(et===we||we.contains(et))){Ve=!0;break}}catch{}const We=!!(J.shiftKey||J.metaKey||J.ctrlKey);if(we&&!Ve){J.preventDefault(),J.stopPropagation();const ft=D4(we),et=[...b,ft],Tt=[...t.originalOrder,ft.id];n({...t,sections:et,originalOrder:Tt});const At=new Set([ft.id]);C(At),(Ae=Dt.current)==null||Ae.call(Dt,At,We),z(null);const pn=J.clientX,lt=J.clientY,Wt={x:ft.currentRect.x,y:ft.currentRect.y};ft.originalRect;let Zt=!1,Bt=0,En=0;L.current="move";const it=Dn=>{var bn;const yn=Dn.clientX-pn,Jn=Dn.clientY-lt;if(!Zt&&(Math.abs(yn)>2||Math.abs(Jn)>2)&&(Zt=!0),!Zt)return;const Ms={x:Wt.x+yn,y:Wt.y+Jn,width:ft.currentRect.width,height:ft.currentRect.height},ms=Ny(Ms,et,new Set([ft.id]),d);Me(ms.guides);const ws=yn+ms.dx,xn=Jn+ms.dy;Bt=ws,En=xn;const es=document.querySelector(`[data-rearrange-section="${ft.id}"]`);es&&(es.style.transform=`translate(${ws}px, ${xn}px)`),Re(new Map([[ft.id,{x:Wt.x+ws,y:Wt.y+xn,width:ft.currentRect.width,height:ft.currentRect.height}]])),(bn=zt.current)==null||bn.call(zt,ws,xn)},en=()=>{var yn;window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",en),L.current=null,Me([]),Re(new Map);const Dn=document.querySelector(`[data-rearrange-section="${ft.id}"]`);Dn&&(Dn.style.transform=""),Zt&&n({...t,sections:et.map(Jn=>Jn.id===ft.id?{...Jn,currentRect:{...Jn.currentRect,x:Math.max(0,Wt.x+Bt),y:Math.max(0,Wt.y+En)}}:Jn),originalOrder:Tt}),(yn=sn.current)==null||yn.call(sn,Bt,En,Zt)};window.addEventListener("mousemove",it),window.addEventListener("mouseup",en)}else if(Ve&&we){J.preventDefault();for(const ft of b)try{const et=document.querySelector(ft.selector);if(et&&et===we){const Tt=new Set([ft.id]);C(Tt),(Rt=Dt.current)==null||Rt.call(Dt,Tt,We);return}}catch{}We||(C(new Set),(Mt=Dt.current)==null||Mt.call(Dt,new Set,!1))}else We||(C(new Set),(Ht=Dt.current)==null||Ht.call(Dt,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[b,t,n]),y.useEffect(()=>{const I=J=>{const pe=J.target;if(!(pe.tagName==="INPUT"||pe.tagName==="TEXTAREA"||pe.isContentEditable)){if((J.key==="Backspace"||J.key==="Delete")&&S.size>0){J.preventDefault();const we=new Set(S);te(Ve=>{const We=new Set(Ve);for(const Ae of we)We.add(Ae);return We}),C(new Set),Vt(()=>{const Ve=w.current;n({...Ve,sections:Ve.sections.filter(We=>!we.has(We.id)),originalOrder:Ve.originalOrder.filter(We=>!we.has(We))}),te(We=>{const Ae=new Set(We);for(const Rt of we)Ae.delete(Rt);return Ae})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.key)&&S.size>0){J.preventDefault();const we=J.shiftKey?20:1,Ve=J.key==="ArrowLeft"?-we:J.key==="ArrowRight"?we:0,We=J.key==="ArrowUp"?-we:J.key==="ArrowDown"?we:0;n({...t,sections:b.map(Ae=>S.has(Ae.id)?{...Ae,currentRect:{...Ae.currentRect,x:Math.max(0,Ae.currentRect.x+Ve),y:Math.max(0,Ae.currentRect.y+We)}}:Ae)});return}J.key==="Escape"&&S.size>0&&C(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[S,b,t,n]);const K=y.useCallback((I,J)=>{var pn;if(I.button!==0)return;const pe=I.target;if(pe.closest(`.${Ee.handle}`)||pe.closest(`.${Ee.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let we;I.shiftKey||I.metaKey||I.ctrlKey?(we=new Set(S),we.has(J)?we.delete(J):we.add(J)):S.has(J)?we=new Set(S):we=new Set([J]),C(we),(we.size!==S.size||[...we].some(lt=>!S.has(lt)))&&((pn=Dt.current)==null||pn.call(Dt,we,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const We=I.clientX,Ae=I.clientY,Rt=new Map;for(const lt of b)we.has(lt.id)&&Rt.set(lt.id,{x:lt.currentRect.x,y:lt.currentRect.y});L.current="move";let Mt=!1,Ht=0,ft=0;const et=new Map;for(const lt of b)if(we.has(lt.id)){const Wt=document.querySelector(`[data-rearrange-section="${lt.id}"]`);et.set(lt.id,{outlineEl:Wt,curW:lt.currentRect.width,curH:lt.currentRect.height})}const Tt=lt=>{var ms;const Wt=lt.clientX-We,Zt=lt.clientY-Ae;if(Wt===0&&Zt===0)return;Mt=!0;let Bt=1/0,En=1/0,it=-1/0,en=-1/0;for(const[ws,{curW:xn,curH:es}]of et){const bn=Rt.get(ws);if(!bn)continue;const Xn=bn.x+Wt,nt=bn.y+Zt;Bt=Math.min(Bt,Xn),En=Math.min(En,nt),it=Math.max(it,Xn+xn),en=Math.max(en,nt+es)}const Dn=Ny({x:Bt,y:En,width:it-Bt,height:en-En},b,we,d),yn=Wt+Dn.dx,Jn=Zt+Dn.dy;Ht=yn,ft=Jn,Me(Dn.guides);for(const[,{outlineEl:ws}]of et)ws&&(ws.style.transform=`translate(${yn}px, ${Jn}px)`);const Ms=new Map;for(const[ws,{curW:xn,curH:es}]of et){const bn=Rt.get(ws);if(bn){const Xn={x:Math.max(0,bn.x+yn),y:Math.max(0,bn.y+Jn),width:xn,height:es};Ms.set(ws,Xn)}}Re(Ms),(ms=zt.current)==null||ms.call(zt,yn,Jn)},At=lt=>{var Wt,Zt;window.removeEventListener("mousemove",Tt),window.removeEventListener("mouseup",At),L.current=null,Me([]),Re(new Map);for(const[,{outlineEl:Bt}]of et)Bt&&(Bt.style.transform="");if(Mt){const Bt=lt.clientX-We,En=lt.clientY-Ae;if(Math.abs(Bt)<5&&Math.abs(En)<5)n({...t,sections:b.map(it=>{const en=Rt.get(it.id);return en?{...it,currentRect:{...it.currentRect,x:en.x,y:en.y}}:it})});else{n({...t,sections:b.map(it=>{const en=Rt.get(it.id);return en?{...it,currentRect:{...it.currentRect,x:Math.max(0,en.x+Ht),y:Math.max(0,en.y+ft)}}:it})}),(Wt=sn.current)==null||Wt.call(sn,Ht,ft,!0);return}}(Zt=sn.current)==null||Zt.call(sn,0,0,!1)};window.addEventListener("mousemove",Tt),window.addEventListener("mouseup",At)},[S,b,t,n]),Be=y.useCallback((I,J,pe)=>{I.preventDefault(),I.stopPropagation();const we=b.find(Tt=>Tt.id===J);if(!we)return;C(new Set([J])),L.current="resize";const Ve=I.clientX,We=I.clientY,Ae={...we.currentRect};we.originalRect;const Rt=Ae.width/Ae.height;let Mt={...Ae};const Ht=document.querySelector(`[data-rearrange-section="${J}"]`),ft=Tt=>{const At=Tt.clientX-Ve,pn=Tt.clientY-We;let lt=Ae.x,Wt=Ae.y,Zt=Ae.width,Bt=Ae.height;if(pe.includes("e")&&(Zt=Math.max(Ku,Ae.width+At)),pe.includes("w")&&(Zt=Math.max(Ku,Ae.width-At),lt=Ae.x+Ae.width-Zt),pe.includes("s")&&(Bt=Math.max(Ku,Ae.height+pn)),pe.includes("n")&&(Bt=Math.max(Ku,Ae.height-pn),Wt=Ae.y+Ae.height-Bt),Tt.shiftKey)if(pe.length===2){const it=Math.abs(Zt-Ae.width),en=Math.abs(Bt-Ae.height);it>en?Bt=Zt/Rt:Zt=Bt*Rt,pe.includes("w")&&(lt=Ae.x+Ae.width-Zt),pe.includes("n")&&(Wt=Ae.y+Ae.height-Bt)}else pe==="e"||pe==="w"?Bt=Zt/Rt:Zt=Bt*Rt,pe==="w"&&(lt=Ae.x+Ae.width-Zt),pe==="n"&&(Wt=Ae.y+Ae.height-Bt);Mt={x:lt,y:Wt,width:Zt,height:Bt},Ht&&(Ht.style.left=`${lt}px`,Ht.style.top=`${Wt-B}px`,Ht.style.width=`${Zt}px`,Ht.style.height=`${Bt}px`),G({x:Tt.clientX+12,y:Tt.clientY+12,text:`${Math.round(Zt)} × ${Math.round(Bt)}`}),Re(new Map([[J,Mt]]))},et=()=>{window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",et),G(null),L.current=null,Re(new Map),n({...t,sections:b.map(Tt=>Tt.id===J?{...Tt,currentRect:Mt}:Tt)})};window.addEventListener("mousemove",ft),window.addEventListener("mouseup",et)},[b,t,n,B]),Ye=y.useCallback(I=>{te(J=>{const pe=new Set(J);return pe.add(I),pe}),C(J=>{const pe=new Set(J);return pe.delete(I),pe}),Vt(()=>{const J=w.current;n({...J,sections:J.sections.filter(pe=>pe.id!==I),originalOrder:J.originalOrder.filter(pe=>pe!==I)}),te(pe=>{const we=new Set(pe);return we.delete(I),we})},180)},[n]),De=I=>{const J=I.originalRect,pe=I.currentRect;return Math.abs(J.x-pe.x)>1||Math.abs(J.y-pe.y)>1||Math.abs(J.width-pe.width)>1||Math.abs(J.height-pe.height)>1},Je=I=>{const J=I.originalRect,pe=I.currentRect;return Math.abs(J.x-pe.x)>1||Math.abs(J.y-pe.y)>1},at=I=>{const J=I.originalRect,pe=I.currentRect;return Math.abs(J.width-pe.width)>1||Math.abs(J.height-pe.height)>1};for(const I of b)$e.current.has(I.id)||(Je(I)?$e.current.set(I.id,"move"):at(I)&&$e.current.set(I.id,"resize"));for(const I of $e.current.keys())b.some(J=>J.id===I)||$e.current.delete(I);const Xe=b.filter(I=>{try{if(q.has(I.id)||S.has(I.id))return!0;const J=document.querySelector(I.selector);if(!J)return!1;const pe=J.getBoundingClientRect(),we=I.originalRect;return Math.abs(pe.width-we.width)+Math.abs(pe.height-we.height)<200}catch{return!1}}),dt=Xe.filter(I=>De(I)),ht=Xe.filter(I=>!De(I)),Ie=new Set(dt.map(I=>I.id));for(const I of ie.current)Ie.has(I)||ie.current.delete(I);const Fe=[...Ie].sort().join(",");for(const I of dt)Ft.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return y.useEffect(()=>{const I=Ut.current;Ut.current=Ie;const J=new Map;for(const pe of I)if(!Ie.has(pe)){if(!b.some(Ve=>Ve.id===pe))continue;const we=Ft.current.get(pe);we&&(J.set(pe,{orig:we.originalRect,target:we.currentRect,isFixed:we.isFixed}),Ft.current.delete(pe))}if(J.size>0){Ze(we=>{const Ve=new Map(we);for(const[We,Ae]of J)Ve.set(We,Ae);return Ve});const pe=Vt(()=>{Ze(we=>{const Ve=new Map(we);for(const We of J.keys())Ve.delete(We);return Ve})},250);return()=>clearTimeout(pe)}},[Fe,b]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${Ee.rearrangeOverlay} ${i?"":Ee.light} ${a?Ee.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ye&&r.jsx("div",{className:Ee.hoverHighlight,style:{left:ye.x,top:ye.y,width:ye.w,height:ye.h}}),ht.map(I=>{const J=I.currentRect,pe=I.isFixed?J.y:J.y-B,we=Ey,Ve=S.has(I.id);return r.jsxs("div",{"data-rearrange-section":I.id,className:`${Ee.sectionOutline} ${Ve?Ee.selected:""} ${k||a||q.has(I.id)?Ee.exiting:""}`,style:{left:J.x,top:pe,width:J.width,height:J.height,borderColor:we.border,backgroundColor:we.bg,...rn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:We=>K(We,I.id),onDoubleClick:()=>X(I.id),children:[r.jsx("span",{className:Ee.sectionLabel,style:{backgroundColor:we.pill},children:I.label}),r.jsx("span",{className:`${Ee.sectionAnnotation} ${I.note?Ee.annotationVisible:""}`,children:(I.note&&ue.current.set(I.id,I.note),I.note||ue.current.get(I.id)||"")}),r.jsxs("span",{className:Ee.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),r.jsx("div",{className:Ee.deleteButton,onMouseDown:We=>We.stopPropagation(),onClick:()=>Ye(I.id),children:"✕"}),Dy.map(We=>r.jsx("div",{className:`${Ee.handle} ${Ee[`handle${We.charAt(0).toUpperCase()}${We.slice(1)}`]}`,onMouseDown:Ae=>Be(Ae,I.id,We)},We))]},I.id)}),dt.map(I=>{const J=I.currentRect,pe=I.isFixed?J.y:J.y-B,we=S.has(I.id),Ve=Je(I),We=at(I);if(u&&!we)return null;const Rt=!ie.current.has(I.id);return Rt&&ie.current.add(I.id),r.jsxs("div",{"data-rearrange-section":I.id,className:`${Ee.ghostOutline} ${we?Ee.selected:""} ${k||a||q.has(I.id)?Ee.exiting:""}`,style:{left:J.x,top:pe,width:J.width,height:J.height,...rn?{}:{opacity:0,animation:"none",transition:"none"},...Rt?{}:{animation:"none"}},onMouseDown:Mt=>K(Mt,I.id),onDoubleClick:()=>X(I.id),children:[r.jsx("span",{className:Ee.sectionLabel,style:{backgroundColor:Ey.pill},children:I.label}),r.jsx("span",{className:`${Ee.sectionAnnotation} ${I.note?Ee.annotationVisible:""}`,children:(I.note&&ue.current.set(I.id,I.note),I.note||ue.current.get(I.id)||"")}),r.jsxs("span",{className:Ee.sectionDimensions,children:[Math.round(J.width)," × ",Math.round(J.height)]}),r.jsx("div",{className:Ee.deleteButton,onMouseDown:Mt=>Mt.stopPropagation(),onClick:()=>Ye(I.id),children:"✕"}),Dy.map(Mt=>r.jsx("div",{className:`${Ee.handle} ${Ee[`handle${Mt.charAt(0).toUpperCase()}${Mt.slice(1)}`]}`,onMouseDown:Ht=>Be(Ht,I.id,Mt)},Mt)),r.jsx("span",{className:Ee.ghostBadge,children:(()=>{const Mt=$e.current.get(I.id);if(Ve&&We){const[Ht,ft]=Mt==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",Ht," ",r.jsxs("span",{className:Ee.ghostBadgeExtra,children:["& ",ft]})]})}return`Suggested ${We?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const J of dt){const pe=Te.get(J.id);I.push({id:J.id,orig:J.originalRect,target:pe||J.currentRect,isFixed:J.isFixed,isSelected:S.has(J.id),isExiting:q.has(J.id)})}for(const[J,pe]of Te)if(!I.some(we=>we.id===J)){const we=b.find(Ve=>Ve.id===J);we&&I.push({id:J,orig:we.originalRect,target:pe,isFixed:we.isFixed,isSelected:S.has(J)})}for(const[J,pe]of Qe)I.some(we=>we.id===J)||I.push({id:J,orig:pe.orig,target:pe.target,isFixed:pe.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:r.jsxs("svg",{className:`${Ee.connectorSvg} ${k||a?Ee.connectorExiting:""}`,children:[I.map(({id:J,orig:pe,target:we,isFixed:Ve,isSelected:We,isExiting:Ae})=>{const Rt=pe.x+pe.width/2,Mt=(Ve?pe.y:pe.y-B)+pe.height/2,Ht=we.x+we.width/2,ft=(Ve?we.y:we.y-B)+we.height/2,et=Ht-Rt,Tt=ft-Mt,At=Math.sqrt(et*et+Tt*Tt);if(At<2)return null;const pn=Math.min(1,At/40),lt=Math.min(At*.3,60),Wt=At>0?-Tt/At:0,Zt=At>0?et/At:0,Bt=(Rt+Ht)/2+Wt*lt,En=(Mt+ft)/2+Zt*lt,it=Te.has(J),en=it||We?1:.4,Dn=it||We?1:.5;return r.jsxs("g",{className:Ae?Ee.connectorExiting:"",children:[r.jsx("path",{className:Ee.connectorLine,d:`M ${Rt} ${Mt} Q ${Bt} ${En} ${Ht} ${ft}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:en*pn}),r.jsx("circle",{className:Ee.connectorDot,cx:Rt,cy:Mt,r:4*pn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Dn*pn,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:Ee.connectorDot,cx:Ht,cy:ft,r:4*pn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Dn*pn,filter:"url(#connDotShadow)"})]},`conn-${J}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),T&&(()=>{var ft;const I=b.find(et=>et.id===T);if(!I)return null;const J=I.currentRect,pe=I.isFixed?J.y:J.y-B,we=J.x+J.width/2,Ve=pe-8,We=pe+J.height+8,Ae=Ve>200,Rt=We<window.innerHeight-100,Mt=Math.max(160,Math.min(window.innerWidth-160,we));let Ht;return Ae?Ht={left:Mt,bottom:window.innerHeight-Ve}:Rt?Ht={left:Mt,top:We}:Ht={left:Mt,top:Math.max(80,window.innerHeight/2-80)},r.jsx(Sd,{element:I.label,placeholder:"Add a note about this section",initialValue:(ft=I.note)!=null?ft:"",submitLabel:Q.current?"Save":"Set",onSubmit:le,onCancel:ne,onDelete:Q.current?()=>{le("")}:void 0,isExiting:F,lightMode:!i,style:Ht})})(),me&&r.jsx("div",{className:Ee.sizeIndicator,style:{left:me.x,top:me.y},"data-feedback-toolbar":!0,children:me.text}),ve.map((I,J)=>r.jsx("div",{className:Ee.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-B,width:"100vw",height:1}},`${I.axis}-${I.pos}-${J}`))]})}var Dm=new Set(["script","style","noscript","link","meta","br","hr"]);function R4(){const t=document.querySelector("main")||document.body,n=[],i=Array.from(t.children),a=t!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of a){if(!(c instanceof HTMLElement)||Dm.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const d=c.getBoundingClientRect();if(!(d.height<10||d.width<10)){n.push({label:kd(c),selector:yr(c),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(const h of Array.from(c.children)){if(!(h instanceof HTMLElement)||Dm.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const p=window.getComputedStyle(h);if(p.display==="none"||p.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:kd(h),selector:yr(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function B4(t){const n=window.scrollY;return t.map(({label:i,selector:a,rect:c})=>{const u=c.y-n;return{label:i,selector:a,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function L4(t){const n=window.scrollY,i=t.y-n,a=t.x;return{top:i,bottom:i+t.height,left:a,right:a+t.width,area:t.width*t.height}}function Am(t,n){const i=n?B4(n):R4(),a=L4(t);let c=null,u=null,d=null,h=null,p=null;for(const S of i){if(Math.abs(S.left-a.left)<2&&Math.abs(S.top-a.top)<2&&Math.abs(S.right-S.left-t.width)<2&&Math.abs(S.bottom-S.top-t.height)<2)continue;S.left<=a.left+2&&S.right>=a.right-2&&S.top<=a.top+2&&S.bottom>=a.bottom-2&&S.area>a.area*1.5&&(!p||S.area<p._area)&&(p={label:S.label,selector:S.selector,_area:S.area});const C=a.right>S.left+5&&a.left<S.right-5,k=a.bottom>S.top+5&&a.top<S.bottom-5;if(C&&S.bottom<=a.top+5){const M=Math.round(a.top-S.bottom);(!c||M<c._dist)&&(c={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(C&&S.top>=a.bottom-5){const M=Math.round(S.top-a.bottom);(!u||M<u._dist)&&(u={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.right<=a.left+5){const M=Math.round(a.left-S.right);(!d||M<d._dist)&&(d={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}if(k&&S.left>=a.right-5){const M=Math.round(S.left-a.right);(!h||M<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,M),_dist:M})}}const g=window.innerWidth,_=window.innerHeight,x=z4(t,g),b=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,w=O4(a,t,g,_,p?{label:p.label,selector:p.selector,_area:p._area}:null,i);return{above:b(c),below:b(u),left:b(d),right:b(h),alignment:x,containedIn:p?{label:p.label,selector:p.selector}:null,outOfBounds:w}}function O4(t,n,i,a,c,u){const d={};let h=!1;const p=[];if(t.left<-2&&p.push("left"),t.right>i+2&&p.push("right"),t.top<-2&&p.push("top"),t.bottom>a+2&&p.push("bottom"),p.length>0&&(d.viewport=p,h=!0),c){const g=u.find(_=>_.label===c.label&&_.selector===c.selector&&Math.abs(_.area-c._area)<10);if(g){const _=[];t.left<g.left-2&&_.push("left"),t.right>g.right+2&&_.push("right"),t.top<g.top-2&&_.push("top"),t.bottom>g.bottom+2&&_.push("bottom"),_.length>0&&(d.container={label:c.label,edges:_},h=!0)}}return h?d:null}function z4(t,n){if(t.width/n>.85)return"full-width";const a=t.x+t.width/2,c=n/2,u=a-c,d=n*.08;return Math.abs(u)<d?"center":u<0?"left":"right"}function $x(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Ix(t,n={}){const i=[];t.above&&i.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&i.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&i.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&i.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const a=$x(t.alignment);return t.containedIn?i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in \`${t.containedIn.label}\``):i.push(`${a.charAt(0).toUpperCase()+a.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&i.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&i.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),i}function $4(t,n,i){var u,d;const a=[];t.above&&a.push(`below \`${t.above.label}\``),t.below&&a.push(`above \`${t.below.label}\``),t.left&&a.push(`right of \`${t.left.label}\``),t.right&&a.push(`left of \`${t.right.label}\``),t.containedIn&&a.push(`inside \`${t.containedIn.label}\``),a.push($x(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&a.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(d=t.outOfBounds)!=null&&d.container&&a.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${a.join(", ")}`}var By=15;function Ly(t){if(t.length<2)return[];const n=[],i=new Set;for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.y-t[u].rect.y)<By&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.x-g.rect.x);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.x-(u[p].rect.x+u[p].rect.width)));const h=Math.round(u.reduce((p,g)=>p+g.rect.y,0)/u.length);n.push({labels:u.map(p=>p.label),type:"row",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}for(let a=0;a<t.length;a++){if(i.has(a))continue;const c=[a];for(let u=a+1;u<t.length;u++)i.has(u)||Math.abs(t[a].rect.x-t[u].rect.x)<By&&c.push(u);if(c.length>=2){const u=c.map(p=>t[p]);u.sort((p,g)=>p.rect.y-g.rect.y);const d=[];for(let p=0;p<u.length-1;p++)d.push(Math.round(u[p+1].rect.y-(u[p].rect.y+u[p].rect.height)));const h=Math.round(u.reduce((p,g)=>p+g.rect.x,0)/u.length);n.push({labels:u.map(p=>p.label),type:"column",sharedEdge:h,gaps:d,avgGap:d.length?Math.round(d.reduce((p,g)=>p+g,0)/d.length):0}),c.forEach(p=>i.add(p))}}return n}function I4(t){var d;if(t.length<2)return[];const n=Ly(t.map(h=>({label:h.label,rect:h.originalRect}))),i=Ly(t.map(h=>({label:h.label,rect:h.currentRect}))),a=[],c=new Set;for(const h of n){const p=new Set(h.labels);let g=null,_=0;for(const x of i){const b=x.labels.filter(w=>p.has(w)).length;b>=2&&b>_&&(g=x,_=b)}if(g){const x=g.labels.filter(w=>p.has(w)),b=x.join(", ");if(g.type!==h.type){const w=h.type==="row"?"y":"x",S=g.type==="row"?"y":"x";a.push(`**${b}**: ${h.type} (${w}≈${h.sharedEdge}, ${h.avgGap}px gaps) → ${g.type} (${S}≈${g.sharedEdge}, ${g.avgGap}px gaps)`)}else if(Math.abs(h.sharedEdge-g.sharedEdge)>20||Math.abs(h.avgGap-g.avgGap)>5){const w=h.type==="row"?"y":"x",S=Math.abs(h.sharedEdge-g.sharedEdge)>20?` ${w}: ${h.sharedEdge} → ${g.sharedEdge}`:"",C=Math.abs(h.avgGap-g.avgGap)>5?` gaps: ${h.avgGap}px → ${g.avgGap}px`:"";a.push(`**${b}**: ${h.type} shifted —${S}${C}`)}x.forEach(w=>c.add(w))}else{const x=h.labels.join(", "),b=h.type==="row"?"y":"x";a.push(`**${x}**: ${h.type} (${b}≈${h.sharedEdge}) dissolved`),h.labels.forEach(w=>c.add(w))}}for(const h of i){if(h.labels.every(_=>c.has(_))||h.labels.filter(_=>!c.has(_)).length<2)continue;if(!n.some(_=>_.labels.filter(b=>h.labels.includes(b)).length>=2)){const _=h.type==="row"?"y":"x";a.push(`**${h.labels.join(", ")}**: new ${h.type} (${_}≈${h.sharedEdge}, ${h.avgGap}px gaps)`),h.labels.forEach(x=>c.add(x))}}const u=t.filter(h=>!c.has(h.label));if(u.length>=2){const h={};for(const p of u){const g=Math.round(p.currentRect.x/5)*5;((d=h[g])!=null?d:h[g]=[]).push(p.label)}for(const[p,g]of Object.entries(h))g.length>=2&&a.push(`**${g.join(", ")}**: shared left edge at x≈${p}`)}return a}function Px(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],i=new Set,a=h=>{i.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||Dm.has(h.tagName.toLowerCase())||(i.add(h),n.push(h)))},c=document.querySelector("main");c&&a(c);const u=document.querySelector("[role='main']");u&&a(u);for(const h of Array.from(document.body.children))if(a(h),h.children){for(const p of Array.from(h.children))if(a(p),p.children)for(const g of Array.from(p.children))a(g)}let d=null;for(const h of n){const p=h.getBoundingClientRect();if(p.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!d||p.width<d.rect.width)&&(d={el:h,rect:p});continue}!d&&p.width<t.width-20&&p.width>100&&(d={el:h,rect:p})}if(d){const{el:h,rect:p}=d;return{viewport:t,contentArea:{width:Math.round(p.width),left:Math.round(p.left),right:Math.round(p.right),centerX:Math.round(p.left+p.width/2),selector:yr(h)}}}return{viewport:t,contentArea:null}}function P4(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),a={parentDisplay:i.display,parentSelector:yr(n.parentElement)};return i.display.includes("flex")&&(a.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(a.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(a.gap=i.gap),a}function Hx(t,n){const i=n.contentArea,a=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),d=Math.round(t.x-c),h=Math.round(c+a-(t.x+t.width)),p=(t.width/a*100).toFixed(1),g=t.x+t.width/2,_=Math.abs(g-u)<20,x=t.width/a>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${d}px\` in container, right \`${h}px\`, width \`${p}%\` (\`${Math.round(t.width)}px\`)`),_&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function Vx(t){const{viewport:n,contentArea:i}=t;let a=`### Reference Frame
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
`,a}function H4(t){const n=P4(t);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function Oy(t,n,i,a="standard"){var k,M,R,A;if(t.length===0)return"";const c=[...t].sort((T,$)=>Math.abs(T.y-$.y)<20?T.x-$.x:T.y-$.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,a==="compact")return u+=`### Components
`,c.forEach((T,$)=>{var U;const F=((U=Di[T.type])==null?void 0:U.label)||T.type;u+=`${$+1}. **${F}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}),u;const d=Px(n);u+=Vx(d),u+=`### Components
`,c.forEach((T,$)=>{var q;const F=((q=Di[T.type])==null?void 0:q.label)||T.type,U={x:T.x,y:T.y,width:T.width,height:T.height};u+=`${$+1}. **${F}** — \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`;const Q=Am(U),ne=Ix(Q,{includeLeftRight:a==="detailed"||a==="forensic"});for(const te of ne)u+=`   - ${te}
`;const le=Hx(U,d);le&&(u+=`   - CSS: ${le}
`)}),u+=`
### Layout Analysis
`;const h=[];for(const T of c){const $=h.find(F=>Math.abs(F.y-T.y)<30);$?$.items.push(T):h.push({y:T.y,items:[T]})}if(h.sort((T,$)=>T.y-$.y),h.forEach((T,$)=>{T.items.sort((U,Q)=>U.x-Q.x);const F=T.items.map(U=>{var Q;return((Q=Di[U.type])==null?void 0:Q.label)||U.type});if(T.items.length===1){const Q=T.items[0].width>n.width*.8;u+=`- Row ${$+1} (y≈${Math.round(T.y)}): ${F[0]}${Q?" — full width":""}
`}else u+=`- Row ${$+1} (y≈${Math.round(T.y)}): ${F.join(" | ")} — ${T.items.length} items side by side
`}),a==="detailed"||a==="forensic"){u+=`
### Spacing & Gaps
`;for(let T=0;T<c.length-1;T++){const $=c[T],F=c[T+1],U=((k=Di[$.type])==null?void 0:k.label)||$.type,Q=((M=Di[F.type])==null?void 0:M.label)||F.type,X=Math.round(F.y-($.y+$.height)),ne=Math.round(F.x-($.x+$.width));Math.abs($.y-F.y)<30?u+=`- ${U} → ${Q}: \`${ne}px\` horizontal gap
`:u+=`- ${U} → ${Q}: \`${X}px\` vertical gap
`}if(a==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let T=0;T<c.length;T++)for(let $=T+1;$<c.length;$++){const F=c[T],U=c[$],Q=((R=Di[F.type])==null?void 0:R.label)||F.type,X=((A=Di[U.type])==null?void 0:A.label)||U.type,ne=Math.round(U.y-(F.y+F.height)),le=Math.round(U.x-(F.x+F.width));u+=`- ${Q} ↔ ${X}: h=\`${le}px\` v=\`${ne}px\`
`}}a==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach((T,$)=>{var U;const F=((U=Di[T.type])==null?void 0:U.label)||T.type;u+=`${$}. ${F} at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
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
`}p&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function zy(t,n="standard",i){const{sections:a}=t,c=[];for(const _ of a){const x=_.originalRect,b=_.currentRect,w=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,S=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!w&&!S){n==="forensic"&&c.push({section:_,posMoved:!1,sizeChanged:!1});continue}c.push({section:_,posMoved:w,sizeChanged:S})}if(c.length===0||n!=="forensic"&&c.every(_=>!_.posMoved&&!_.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const d=i?i.width:typeof window<"u"?window.innerWidth:0,h=i?i.height:typeof window<"u"?window.innerHeight:0,p=Px({width:d,height:h});n!=="compact"&&(u+=Vx(p)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${a.length}

`);const g=_=>a.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:_,posMoved:x,sizeChanged:b}of c){const w=_.originalRect,S=_.currentRect;if(!x&&!b){u+=`- ${_.label} — unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)}px
`:x?u+=`- Suggested: move **${_.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:u+=`- Suggested: resize **${_.label}** to ${Math.round(S.width)}×${Math.round(S.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${_.label}**
`:x?u+=`- Suggested: move **${_.label}**
`:u+=`- Suggested: resize **${_.label}** from ${Math.round(w.width)}×${Math.round(w.height)}px to ${Math.round(S.width)}×${Math.round(S.height)}px
`,x){const k=Am(w,g("original")),M=Am(S,g("current")),R=b?{width:w.width,height:w.height}:void 0;u+=`  - Currently ${$4(k,{x:w.x,y:w.y},R)}
`;const A=b?{width:S.width,height:S.height}:void 0,T=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,$=A?`, ${Math.round(A.width)}×${Math.round(A.height)}px`:"",U=Ix(M,{includeLeftRight:n==="detailed"||n==="forensic"});if(U.length>0){u+=`  - Suggested position ${T}${$}: ${U[0]}
`;for(let X=1;X<U.length;X++)u+=`    ${U[X]}
`}else u+=`  - Suggested position ${T}${$}
`;const Q=Hx(S,p);Q&&(u+=`  - CSS: ${Q}
`)}const C=H4(_.selector);if(C&&(u+=`  - ${C}
`),u+=`  - Selector: \`${_.selector}\`
`,n==="detailed"||n==="forensic"){const k=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;k!==_.selector&&(u+=`  - Element: \`${k}\`
`),_.role&&(u+=`  - Role: \`${_.role}\`
`),n==="forensic"&&_.textSnippet&&(u+=`  - Text: "${_.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(w.x)}, y: ${Math.round(w.y)}, w: ${Math.round(w.width)}, h: ${Math.round(w.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(n!=="compact"){const _=c.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=I4(_);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&a.length>1){u+=`
### All Sections (current positions)
`;const _=[...a].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of _){const b=x.currentRect,w=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${w?" ← suggested":""}
`}}return u}var Nm="feedback-annotations-",Ux=7;function Cd(t){return`${Nm}${t}`}function Gh(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(Cd(t));if(!n)return[];const i=JSON.parse(n),a=Date.now()-Ux*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>a)}catch{return[]}}function Wx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(Cd(t),JSON.stringify(n))}catch{}}function V4(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Ux*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const a=localStorage.key(i);if(a!=null&&a.startsWith(Nm)){const c=a.slice(Nm.length),u=localStorage.getItem(a);if(u){const h=JSON.parse(u).filter(p=>!p.timestamp||p.timestamp>n);h.length>0&&t.set(c,h)}}}}catch{}return t}function ec(t,n,i){const a=n.map(c=>({...c,_syncedTo:i}));Wx(t,a)}var cp="agentation-design-";function U4(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${cp}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function W4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${cp}${t}`,JSON.stringify(n))}catch{}}function Y4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${cp}${t}`)}catch{}}var up="agentation-rearrange-";function F4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${up}${t}`);return n?JSON.parse(n):null}catch{return null}}function X4(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${up}${t}`,JSON.stringify(n))}catch{}}function q4(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${up}${t}`)}catch{}}var dp="agentation-wireframe-";function G4(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${dp}${t}`);return n?JSON.parse(n):null}catch{return null}}function $y(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${dp}${t}`,JSON.stringify(n))}catch{}}function Zu(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${dp}${t}`)}catch{}}var Yx="agentation-session-";function fp(t){return`${Yx}${t}`}function K4(t){if(typeof window>"u")return null;try{return localStorage.getItem(fp(t))}catch{return null}}function Kh(t,n){if(!(typeof window>"u"))try{localStorage.setItem(fp(t),n)}catch{}}function Q4(t){if(!(typeof window>"u"))try{localStorage.removeItem(fp(t))}catch{}}var Fx=`${Yx}toolbar-hidden`;function Z4(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Fx)==="1"}catch{return!1}}function J4(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(Fx,"1")}catch{}}async function Qh(t,n){const i=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function Iy(t,n){const i=await fetch(`${t}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Qr(t,n,i){const a=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to sync annotation: ${a.status}`);return a.json()}async function Py(t,n,i){const a=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`Failed to update annotation: ${a.status}`);return a.json()}async function Pa(t,n){const i=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Wn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Hy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Vy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],e6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function t6(t){var a,c,u,d;const n=(a=t==null?void 0:t.mode)!=null?a:"filtered";let i=Hy;if(t!=null&&t.skipExact){const h=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);i=new Set([...Hy,...h])}return{maxComponents:(c=t==null?void 0:t.maxComponents)!=null?c:6,maxDepth:(u=t==null?void 0:t.maxDepth)!=null?u:30,mode:n,skipExact:i,skipPatterns:t!=null&&t.skipPatterns?[...Vy,...t.skipPatterns]:Vy,userPatterns:(d=t==null?void 0:t.userPatterns)!=null?d:e6,filter:t==null?void 0:t.filter}}function n6(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function s6(t,n=10){const i=new Set;let a=t,c=0;for(;a&&c<n;)a.className&&typeof a.className=="string"&&a.className.split(/\s+/).forEach(u=>{if(u.length>1){const d=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&i.add(d)}}),a=a.parentElement,c++;return i}function o6(t,n){const i=n6(t);for(const a of n){if(a===i)return!0;const c=i.split("-").filter(d=>d.length>2),u=a.split("-").filter(d=>d.length>2);for(const d of c)for(const h of u)if(d===h||d.includes(h)||h.includes(d))return!0}return!1}function i6(t,n,i,a){if(i.filter)return i.filter(t,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t)));case"smart":return i.skipExact.has(t)||i.skipPatterns.some(c=>c.test(t))?!1:!!(a&&o6(t,a)||i.userPatterns.some(c=>c.test(t)));default:return!0}}var Zr=null,a6=new WeakMap;function Zh(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function r6(){if(Zr!==null)return Zr;if(typeof document>"u")return!1;if(document.body&&Zh(document.body))return Zr=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const i=document.querySelector(n);if(i&&Zh(i))return Zr=!0,!0}if(document.body){for(const n of document.body.children)if(Zh(n))return Zr=!0,!0}return Zr=!1,!1}var tc={map:a6};function l6(t){return Object.keys(t).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function c6(t){const n=l6(t);return n?t[n]:null}function lr(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function u6(t){var c;const{tag:n,type:i,elementType:a}=t;if(n===Wn.HostComponent||n===Wn.HostText||n===Wn.HostHoistable||n===Wn.HostSingleton||n===Wn.Fragment||n===Wn.Mode||n===Wn.Profiler||n===Wn.DehydratedFragment||n===Wn.HostRoot||n===Wn.HostPortal||n===Wn.ScopeComponent||n===Wn.OffscreenComponent||n===Wn.LegacyHiddenComponent||n===Wn.CacheComponent||n===Wn.TracingMarkerComponent||n===Wn.Throw||n===Wn.ViewTransitionComponent||n===Wn.ActivityComponent)return null;if(n===Wn.ForwardRef){const u=a;if(u!=null&&u.render){const d=lr(u.render);if(d)return d}return u!=null&&u.displayName?u.displayName:lr(i)}if(n===Wn.MemoComponent||n===Wn.SimpleMemoComponent){const u=a;if(u!=null&&u.type){const d=lr(u.type);if(d)return d}return u!=null&&u.displayName?u.displayName:lr(i)}if(n===Wn.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Wn.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Wn.LazyComponent){const u=a;return(u==null?void 0:u._status)===1&&u._result?lr(u._result):null}return n===Wn.SuspenseComponent||n===Wn.SuspenseListComponent?null:n===Wn.IncompleteClassComponent||n===Wn.IncompleteFunctionComponent||n===Wn.FunctionComponent||n===Wn.ClassComponent||n===Wn.IndeterminateComponent?lr(i):null}function d6(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function f6(t,n){const i=t6(n),a=i.mode==="all";if(a){const p=tc.map.get(t);if(p!==void 0)return p}if(!r6()){const p={path:null,components:[]};return a&&tc.map.set(t,p),p}const c=i.mode==="smart"?s6(t):void 0,u=[];try{let p=c6(t),g=0;for(;p&&g<i.maxDepth&&u.length<i.maxComponents;){const _=u6(p);_&&!d6(_)&&i6(_,g,i,c)&&u.push(_),p=p.return,g++}}catch{const p={path:null,components:[]};return a&&tc.map.set(t,p),p}if(u.length===0){const p={path:null,components:[]};return a&&tc.map.set(t,p),p}const h={path:u.slice().reverse().map(p=>`<${p}>`).join(" "),components:u};return a&&tc.map.set(t,h),h}var nc={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function h6(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return t[i]||null;const a=n.find(u=>u.startsWith("__reactInternalInstance$"));if(a)return t[a]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const d=t[u];return d&&typeof d=="object"&&"_debugSource"in d});return c&&t[c]||null}function gc(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function m6(t,n=50){var c;let i=t,a=0;for(;i&&a<n;){if(i._debugSource)return{source:i._debugSource,componentName:gc(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:gc(i._debugOwner)};i=i.return,a++}return null}function p6(t){let n=t,i=0;const a=50;for(;n&&i<a;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const d of u){const h=c[d];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:gc(n)}}if(n.memoizedProps){const d=n.memoizedProps;if(d.__source&&typeof d.__source=="object"){const h=d.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:gc(n)}}}n=n.return,i++}return null}var Ju=new Map;function _6(t){var c;const n=t.tag,i=t.type,a=t.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===nc.FunctionComponent||n===nc.IndeterminateComponent)&&typeof i=="function")return i;if(n===nc.ForwardRef&&a){const u=a.render;if(typeof u=="function")return u}if((n===nc.MemoComponent||n===nc.SimpleMemoComponent)&&a){const u=a.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function g6(){const t=vv,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:a=>{n.H=a}};const i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const a=i.ReactCurrentDispatcher;if(a&&"current"in a)return{get:()=>a.current,set:c=>{a.current=c}}}return null}function y6(t){const n=t.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],a=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const d=u.trim();if(!d||i.some(p=>p.test(d)))continue;const h=a.exec(d)||c.exec(d);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function x6(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function b6(t){const n=_6(t);if(!n)return null;if(Ju.has(n))return Ju.get(n);const i=g6();if(!i)return Ju.set(n,null),null;const a=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){const h=y6(d.stack);h&&(c={fileName:x6(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:gc(t)||void 0})}}}finally{i.set(a)}return Ju.set(n,c),c}function v6(t,n=15){let i=t,a=0;for(;i&&a<n;){const c=b6(i);if(c)return c;i=i.return,a++}return null}function Rm(t){const n=h6(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=m6(n);if(i||(i=p6(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const a=v6(n);return a?{found:!0,source:a,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function w6(t,n="path"){const{fileName:i,lineNumber:a,columnNumber:c}=t;let u=`${i}:${a}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function S6(t,n=10){let i=t,a=0;for(;i&&a<n;){const c=Rm(i);if(c.found)return c;i=i.parentElement,a++}return Rm(t)}var k6=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,C6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=k6}var Ue=C6,sc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Uy(t,n,i="standard"){if(t.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var j6=`@keyframes styles-module__markerIn___x4G8D {
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
}`,M6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=j6}var Is=M6;function Wy({annotation:t,globalIndex:n,layerIndex:i,layerSize:a,isExiting:c,isClearing:u,isAnimated:d,isHovered:h,isDeleting:p,isEditingAny:g,renumberFrom:_,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:w,onHoverLeave:S,onClick:C,onContextMenu:k}){const M=(h||p)&&!g,R=M&&x==="delete",A=t.isMultiSelect,T=A?"var(--agentation-color-green)":"var(--agentation-color-accent)",$=c?Is.exit:u?Is.clearing:d?"":Is.enter,F=c?`${(a-1-i)*20}ms`:`${i*20}ms`;return r.jsxs("div",{className:`${Is.marker} ${A?Is.multiSelect:""} ${$} ${R?Is.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:R?void 0:T,animationDelay:F},onMouseEnter:()=>w(t),onMouseLeave:S,onClick:U=>{U.stopPropagation(),c||C(t)},onContextMenu:k?U=>{x==="delete"&&(U.preventDefault(),U.stopPropagation(),c||k(t))}:void 0,children:[M?R?r.jsx(Ax,{size:A?18:16}):r.jsx(Pw,{size:16}):r.jsx("span",{className:_!==null&&n>=_?Is.renumber:void 0,children:n+1}),h&&!g&&r.jsxs("div",{className:`${Is.markerTooltip} ${Is.enter}`,style:b,children:[r.jsxs("span",{className:Is.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:Is.markerNote,children:t.comment})]})]})}function T6({x:t,y:n,isMultiSelect:i,isExiting:a}){return r.jsx("div",{className:`${Is.marker} ${Is.pending} ${i?Is.multiSelect:""} ${a?Is.exit:Is.enter}`,style:{left:`${t}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(Tw,{size:12})})}function Yy({annotation:t,fixed:n}){const i=t.isMultiSelect;return r.jsx("div",{className:`${Is.marker} ${n?Is.fixed:""} ${Is.hovered} ${i?Is.multiSelect:""} ${Is.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:r.jsx(Ax,{size:i?12:10})})}var E6=`.styles-module__switchContainer___Ka-AB {
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
}`,D6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=E6}var Jh=D6,em=({className:t="",...n})=>r.jsxs("div",{className:`${Jh.switchContainer} ${t}`,children:[r.jsx("input",{className:Jh.switchInput,type:"checkbox",...n}),r.jsx("div",{className:Jh.switchThumb})]}),A6=`.styles-module__checkboxContainer___joqZk {
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
}`,N6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=A6}var ed=N6,R6=({className:t="",...n})=>r.jsxs("div",{className:`${ed.checkboxContainer} ${t}`,children:[r.jsx("input",{className:ed.checkboxInput,type:"checkbox",...n}),r.jsx("svg",{className:ed.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:ed.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),B6=`.styles-module__container___w8eAF {
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
}`,L6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=B6}var Fy=L6,Xy=({className:t="",label:n,tooltip:i,checked:a,onChange:c,...u})=>{const d=y.useId();return r.jsxs("div",{className:`${Fy.container} ${t}`,...u,children:[r.jsx(R6,{id:d,onChange:c,checked:a}),r.jsx("label",{className:Fy.label,htmlFor:d,children:n}),i&&r.jsx(hr,{content:i})]})},O6=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,z6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=O6}var St=z6;function $6({settings:t,onSettingsChange:n,isDarkMode:i,onToggleTheme:a,isDevMode:c,connectionStatus:u,endpoint:d,isVisible:h,toolbarNearBottom:p,settingsPage:g,onSettingsPageChange:_,onHideToolbar:x}){var b;return r.jsx("div",{className:`${St.settingsPanel} ${h?St.enter:St.exit}`,style:p?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:St.settingsPanelContainer,children:[r.jsxs("div",{className:`${St.settingsPage} ${g==="automations"?St.slideLeft:""}`,children:[r.jsxs("div",{className:St.settingsHeader,children:[r.jsx("a",{className:St.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:St.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:St.themeToggle,onClick:a,title:i?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:St.themeIconWrapper,children:r.jsx("span",{className:St.themeIcon,children:i?r.jsx($w,{size:20}):r.jsx(Iw,{size:20})},i?"sun":"moon")})})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("div",{className:St.settingsLabel,children:["Output Detail",r.jsx(hr,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:St.cycleButton,onClick:()=>{const S=(sc.findIndex(C=>C.value===t.outputDetail)+1)%sc.length;n({outputDetail:sc[S].value})},children:[r.jsx("span",{className:St.cycleButtonText,children:(b=sc.find(w=>w.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),r.jsx("span",{className:St.cycleDots,children:sc.map(w=>r.jsx("span",{className:`${St.cycleDot} ${t.outputDetail===w.value?St.active:""}`},w.value))})]})]}),r.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop} ${c?"":St.settingsRowDisabled}`,children:[r.jsxs("div",{className:St.settingsLabel,children:["React Components",r.jsx(hr,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(em,{checked:c&&t.reactEnabled,onChange:w=>n({reactEnabled:w.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${St.settingsRow} ${St.settingsRowMarginTop}`,children:[r.jsxs("div",{className:St.settingsLabel,children:["Hide Until Restart",r.jsx(hr,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(em,{checked:!1,onChange:w=>{w.target.checked&&x()}})]})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsx("div",{className:`${St.settingsLabel} ${St.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:St.colorOptions,children:dc.map(w=>r.jsx("button",{className:`${St.colorOption} ${t.annotationColorId===w.id?St.selected:""}`,style:{"--swatch":w.srgb,"--swatch-p3":w.p3},onClick:()=>n({annotationColorId:w.id}),title:w.label,type:"button"},w.id))})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsx(Xy,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:w=>n({autoClearAfterCopy:w.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(Xy,{className:St.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:w=>n({blockInteractions:w.target.checked})})]}),r.jsx("div",{className:St.divider}),r.jsxs("button",{className:St.settingsNavLink,onClick:()=>_("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:St.settingsNavLinkRight,children:[d&&u!=="disconnected"&&r.jsx("span",{className:`${St.mcpNavIndicator} ${St[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${St.settingsPage} ${St.automationsPage} ${g==="automations"?St.slideIn:""}`,children:[r.jsxs("button",{className:St.settingsBackButton,onClick:()=>_("main"),children:[r.jsx(Vw,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:St.settingsSection,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("span",{className:St.automationHeader,children:["MCP Connection",r.jsx(hr,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&r.jsx("div",{className:`${St.mcpStatusDot} ${St[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:St.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:St.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:St.divider}),r.jsxs("div",{className:`${St.settingsSection} ${St.settingsSectionGrow}`,children:[r.jsxs("div",{className:St.settingsRow,children:[r.jsxs("span",{className:St.automationHeader,children:["Webhooks",r.jsx(hr,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:St.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${St.autoSendLabel} ${t.webhooksEnabled?St.active:""} ${t.webhookUrl?"":St.disabled}`,children:"Auto-Send"}),r.jsx(em,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:w=>n({webhooksEnabled:w.target.checked}),disabled:!t.webhookUrl})]})]}),r.jsx("p",{className:St.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:St.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:w=>w.stopPropagation(),onChange:w=>n({webhookUrl:w.target.value})})]})]})]})})}function tm(t,n="filtered"){const{name:i,path:a}=il(t);if(n==="off")return{name:i,elementName:i,path:a,reactComponents:null};const c=f6(t,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:a,reactComponents:c.path}}var qy=!1,nm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Hi=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},dc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],I6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...dc.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${dc.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${dc.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};I6();function cr(t,n){let i=document.elementFromPoint(t,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const a=i.shadowRoot.elementFromPoint(t,n);if(!a||a===i)break;i=a}return i}function sm(t){let n=t;for(;n&&n!==document.body;){const a=window.getComputedStyle(n).position;if(a==="fixed"||a==="sticky")return!0;n=n.parentElement}return!1}function ur(t){return t.status!=="resolved"&&t.status!=="dismissed"}function td(t){const n=Rm(t),i=n.found?n:S6(t);if(i.found&&i.source)return w6(i.source,"path")}function P6({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:a,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:d,onCopy:h,onSubmit:p,copyToClipboard:g=!0,endpoint:_,sessionId:x,onSessionCreated:b,webhookUrl:w,className:S}={}){var Nc,Rc,ml,pl,pa,_a,Bc;const[C,k]=y.useState(!1),[M,R]=y.useState([]),[A,T]=y.useState(!0),[$,F]=y.useState(()=>Z4()),[U,Q]=y.useState(!1),X=y.useRef(null);y.useEffect(()=>{const E=Y=>{const H=X.current;H&&H.contains(Y.target)&&Y.stopPropagation()},O=["mousedown","click","pointerdown"];return O.forEach(Y=>document.body.addEventListener(Y,E)),()=>{O.forEach(Y=>document.body.removeEventListener(Y,E))}},[]);const[ne,le]=y.useState(!1),[q,te]=y.useState(!1),[ue,ye]=y.useState(null),[z,me]=y.useState({x:0,y:0}),[G,ve]=y.useState(null),[Me,B]=y.useState(!1),[P,L]=y.useState("idle"),[ie,$e]=y.useState(!1),[Te,Re]=y.useState(!1),[Qe,Ze]=y.useState(null),[Ut,Ft]=y.useState(null),[Dt,zt]=y.useState([]),[sn,rn]=y.useState(null),[qe,Se]=y.useState(null),[K,Be]=y.useState(null),[Ye,De]=y.useState(null),[Je,at]=y.useState([]),[Xe,dt]=y.useState(0),[ht,Ie]=y.useState(!1),[Fe,I]=y.useState(!1),[J,pe]=y.useState(!1),[we,Ve]=y.useState(!1),[We,Ae]=y.useState(!1),[Rt,Mt]=y.useState("main"),[Ht,ft]=y.useState(!1),[et,Tt]=y.useState(!1),[At,pn]=y.useState(!1),[lt,Wt]=y.useState([]),[Zt,Bt]=y.useState(null),En=y.useRef(!1),[it,en]=y.useState(!1),[Dn,yn]=y.useState(!1),[Jn,Ms]=y.useState(1),[ms,ws]=y.useState("new-page"),[xn,es]=y.useState(""),[bn,Xn]=y.useState(!1),[nt,ps]=y.useState(null),ii=y.useRef(!1),bo=y.useRef({rearrange:null,placements:[]}),no=y.useRef({rearrange:null,placements:[]}),[An,ro]=y.useState(0),[lo,Ps]=y.useState(0),[Hs,Ts]=y.useState(0),[mn,ai]=y.useState(0),vo=y.useRef(new Set),Vs=y.useRef(new Set),ts=y.useRef(null),wo=y.useRef(),Xo=et&&C&&!At&&it;y.useEffect(()=>{if(Xo){yn(!1);const E=tl(()=>{yn(!0)});return()=>cancelAnimationFrame(E)}else yn(!1)},[Xo]);const Do=y.useRef(new Map),$o=y.useRef(new Map),co=y.useRef(),[Cs,Us]=y.useState(!1),[Bn,bi]=y.useState([]),Ni=y.useRef(Bn);Ni.current=Bn;const[qo,Zs]=y.useState(null),Ao=y.useRef(null);y.useRef(!1),y.useRef([]),y.useRef(0),y.useRef(null),y.useRef(null),y.useRef(1);const[No,js]=y.useState(!1),so=y.useRef(null),[Ln,uo]=y.useState([]),fs=y.useRef({cmd:!1,shift:!1}),In=()=>{ft(!0)},So=()=>{ft(!1)},fo=()=>{No||(so.current=Vt(()=>js(!0),850))},Go=()=>{so.current&&(clearTimeout(so.current),so.current=null),js(!1),So()};y.useEffect(()=>()=>{so.current&&clearTimeout(so.current)},[]);const[Kt,Ko]=y.useState(()=>{var E;try{const O=JSON.parse((E=localStorage.getItem("feedback-toolbar-settings"))!=null?E:"");return{...nm,...O,annotationColorId:dc.find(Y=>Y.id===O.annotationColorId)?O.annotationColorId:nm.annotationColorId}}catch{return nm}}),[Es,ri]=y.useState(!0),[oe,fe]=y.useState(!1),Ce=()=>{var E;(E=X.current)==null||E.classList.add(Ue.disableTransitions),ri(O=>!O),tl(()=>{var O;(O=X.current)==null||O.classList.remove(Ue.disableTransitions)})},Oe=!1,st="off",[tt,mt]=y.useState(x!=null?x:null),Jt=y.useRef(!1),[Xt,ns]=y.useState(_?"connecting":"disconnected"),[Lt,dn]=y.useState(null),[Pn,On]=y.useState(!1),[qn,$t]=y.useState(null),tn=y.useRef(!1),[D,W]=y.useState(new Set),[se,re]=y.useState(new Set),[be,Le]=y.useState(!1),[_t,kt]=y.useState(!1),[ct,ot]=y.useState(!1),xt=y.useRef(null),wt=y.useRef(null),_n=y.useRef(null),Nn=y.useRef(null),Hn=y.useRef(!1),Ws=y.useRef(0),Bs=y.useRef(null),ln=y.useRef(null),vn=8,ko=50,Ds=y.useRef(null),oo=y.useRef(null),io=y.useRef(null),Et=typeof window<"u"?window.location.pathname:"/";y.useEffect(()=>{if(we)Ae(!0);else{ft(!1),Mt("main");const E=Vt(()=>Ae(!1),0);return()=>clearTimeout(E)}},[we]);const Ri=C&&A&&!et;y.useEffect(()=>{if(Ri){te(!1),le(!0),W(new Set);const E=Vt(()=>{W(O=>{const Y=new Set(O);return M.forEach(H=>Y.add(H.id)),Y})},350);return()=>clearTimeout(E)}else if(ne){te(!0);const E=Vt(()=>{le(!1),te(!1)},250);return()=>clearTimeout(E)}},[Ri]),y.useEffect(()=>{I(!0),dt(window.scrollY);const E=Gh(Et);R(E.filter(ur)),qy||(fe(!0),qy=!0,Vt(()=>fe(!1),750));try{const O=localStorage.getItem("feedback-toolbar-theme");O!==null&&ri(O==="dark")}catch{}try{const O=localStorage.getItem("feedback-toolbar-position");if(O){const Y=JSON.parse(O);typeof Y.x=="number"&&typeof Y.y=="number"&&dn(Y)}}catch{}},[Et]),y.useEffect(()=>{Fe&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Kt))},[Kt,Fe]),y.useEffect(()=>{Fe&&localStorage.setItem("feedback-toolbar-theme",Es?"dark":"light")},[Es,Fe]);const Xi=y.useRef(!1);y.useEffect(()=>{const E=Xi.current;Xi.current=Pn,E&&!Pn&&Lt&&Fe&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Lt))},[Pn,Lt,Fe]),y.useEffect(()=>{if(!_||!Fe||Jt.current)return;Jt.current=!0,ns("connecting"),(async()=>{try{const O=K4(Et),Y=x||O;let H=!1;if(Y)try{const ee=await Iy(_,Y);mt(ee.id),ns("connected"),Kh(Et,ee.id),H=!0;const _e=Gh(Et),Ge=new Set(ee.annotations.map(rt=>rt.id)),Ke=_e.filter(rt=>!Ge.has(rt.id));if(Ke.length>0){const bt=`${typeof window<"u"?window.location.origin:""}${Et}`,on=(await Promise.allSettled(Ke.map(vt=>Qr(_,ee.id,{...vt,sessionId:ee.id,url:bt})))).map((vt,pt)=>vt.status==="fulfilled"?vt.value:(console.warn("[Agentation] Failed to sync annotation:",vt.reason),Ke[pt])),an=[...ee.annotations,...on];R(an.filter(ur)),ec(Et,an.filter(ur),ee.id)}else R(ee.annotations.filter(ur)),ec(Et,ee.annotations.filter(ur),ee.id)}catch(ee){console.warn("[Agentation] Could not join session, creating new:",ee),Q4(Et)}if(!H){const ee=typeof window<"u"?window.location.href:"/",_e=await Qh(_,ee);mt(_e.id),ns("connected"),Kh(Et,_e.id),b==null||b(_e.id);const Ge=V4(),Ke=typeof window<"u"?window.location.origin:"",rt=[];for(const[bt,Ot]of Ge){const on=Ot.filter(pt=>!pt._syncedTo);if(on.length===0)continue;const an=`${Ke}${bt}`,vt=bt===Et;rt.push((async()=>{try{const pt=vt?_e:await Qh(_,an),ys=(await Promise.allSettled(on.map(Tn=>Qr(_,pt.id,{...Tn,sessionId:pt.id,url:an})))).map((Tn,Fn)=>Tn.status==="fulfilled"?Tn.value:(console.warn("[Agentation] Failed to sync annotation:",Tn.reason),on[Fn])).filter(ur);if(ec(bt,ys,pt.id),vt){const Tn=new Set(on.map(Fn=>Fn.id));R(Fn=>{const Qt=Fn.filter(nn=>!Tn.has(nn.id));return[...ys,...Qt]})}}catch(pt){console.warn(`[Agentation] Failed to sync annotations for ${bt}:`,pt)}})())}await Promise.allSettled(rt)}}catch(O){ns("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",O)}})()},[_,x,Fe,b,Et]),y.useEffect(()=>{if(!_||!Fe)return;const E=async()=>{try{(await fetch(`${_}/health`)).ok?ns("connected"):ns("disconnected")}catch{ns("disconnected")}};E();const O=Yw(E,1e4);return()=>clearInterval(O)},[_,Fe]),y.useEffect(()=>{if(!_||!Fe||!tt)return;const E=new EventSource(`${_}/sessions/${tt}/events`),O=["resolved","dismissed"],Y=H=>{var ee;try{const _e=JSON.parse(H.data);if(O.includes((ee=_e.payload)==null?void 0:ee.status)){const Ge=_e.payload.id,Ke=_e.payload.kind;if(Ke==="placement"){for(const[rt,bt]of Do.current)if(bt===Ge){Do.current.delete(rt),Wt(Ot=>Ot.filter(on=>on.id!==rt));break}}else if(Ke==="rearrange"){for(const[rt,bt]of $o.current)if(bt===Ge){$o.current.delete(rt),ps(Ot=>{if(!Ot)return null;const on=Ot.sections.filter(an=>an.id!==rt);return on.length===0?null:{...Ot,sections:on}});break}}else re(rt=>new Set(rt).add(Ge)),Vt(()=>{R(rt=>rt.filter(bt=>bt.id!==Ge)),re(rt=>{const bt=new Set(rt);return bt.delete(Ge),bt})},150)}}catch{}};return E.addEventListener("annotation.updated",Y),()=>{E.removeEventListener("annotation.updated",Y),E.close()}},[_,Fe,tt]),y.useEffect(()=>{if(!_||!Fe)return;const E=ln.current==="disconnected",O=Xt==="connected";ln.current=Xt,E&&O&&(async()=>{try{const H=Gh(Et);if(H.length===0)return;const _e=`${typeof window<"u"?window.location.origin:""}${Et}`;let Ge=tt,Ke=[];if(Ge)try{Ke=(await Iy(_,Ge)).annotations}catch{Ge=null}Ge||(Ge=(await Qh(_,_e)).id,mt(Ge),Kh(Et,Ge));const rt=new Set(Ke.map(Ot=>Ot.id)),bt=H.filter(Ot=>!rt.has(Ot.id));if(bt.length>0){const on=(await Promise.allSettled(bt.map(pt=>Qr(_,Ge,{...pt,sessionId:Ge,url:_e})))).map((pt,_s)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",pt.reason),bt[_s])),vt=[...Ke,...on].filter(ur);R(vt),ec(Et,vt,Ge)}}catch(H){console.warn("[Agentation] Failed to sync on reconnect:",H)}})()},[Xt,_,Fe,tt,Et]);const Gn=y.useCallback(()=>{U||(Q(!0),Ve(!1),k(!1),Vt(()=>{J4(!0),F(!0),Q(!1)},400))},[U]);y.useEffect(()=>{if(!i||!Fe||!t||t.length===0||M.length>0)return;const E=[];return E.push(Vt(()=>{k(!0)},n-200)),t.forEach((O,Y)=>{const H=n+Y*300;E.push(Vt(()=>{const ee=document.querySelector(O.selector);if(!ee)return;const _e=ee.getBoundingClientRect(),{name:Ge,path:Ke}=il(ee),rt={id:`demo-${Date.now()}-${Y}`,x:(_e.left+_e.width/2)/window.innerWidth*100,y:_e.top+_e.height/2+window.scrollY,comment:O.comment,element:Ge,elementPath:Ke,timestamp:Date.now(),selectedText:O.selectedText,boundingBox:{x:_e.left,y:_e.top+window.scrollY,width:_e.width,height:_e.height},nearbyText:Zl(ee),cssClasses:Jl(ee)};R(bt=>[...bt,rt])},H))}),()=>{E.forEach(clearTimeout)}},[i,Fe,t,n]),y.useEffect(()=>{const E=()=>{dt(window.scrollY),Ie(!0),io.current&&clearTimeout(io.current),io.current=Vt(()=>{Ie(!1)},150)};return window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),io.current&&clearTimeout(io.current)}},[]),y.useEffect(()=>{Fe&&M.length>0?tt?ec(Et,M,tt):Wx(Et,M):Fe&&M.length===0&&localStorage.removeItem(Cd(Et))},[M,Et,Fe,tt]),y.useEffect(()=>{if(Fe&&!En.current){En.current=!0;const E=U4(Et);E.length>0&&Wt(E)}},[Fe,Et]),y.useEffect(()=>{Fe&&En.current&&!it&&(lt.length>0?W4(Et,lt):Y4(Et))},[lt,Et,Fe,it]),y.useEffect(()=>{if(Fe&&!ii.current){ii.current=!0;const E=F4(Et);if(E){const O={...E,sections:E.sections.map(Y=>{var H;return{...Y,currentRect:(H=Y.currentRect)!=null?H:{...Y.originalRect}}})};ps(O)}}},[Fe,Et]),y.useEffect(()=>{Fe&&ii.current&&!it&&(nt?X4(Et,nt):q4(Et))},[nt,Et,Fe,it]);const Ss=y.useRef(!1);y.useEffect(()=>{if(Fe&&!Ss.current){Ss.current=!0;const E=G4(Et);E&&(no.current={rearrange:E.rearrange,placements:E.placements||[]},E.purpose&&es(E.purpose))}},[Fe,Et]),y.useEffect(()=>{var O,Y,H,ee,_e;if(!Fe||!Ss.current)return;const E=no.current;it?((Y=(O=nt==null?void 0:nt.sections)==null?void 0:O.length)!=null?Y:0)>0||lt.length>0||xn?$y(Et,{rearrange:nt,placements:lt,purpose:xn}):Zu(Et):((_e=(ee=(H=E.rearrange)==null?void 0:H.sections)==null?void 0:ee.length)!=null?_e:0)>0||E.placements.length>0||xn?$y(Et,{rearrange:E.rearrange,placements:E.placements,purpose:xn}):Zu(Et)},[nt,lt,xn,it,Et,Fe]),y.useEffect(()=>{et&&!nt&&ps({sections:[],originalOrder:[],detectedAt:Date.now()})},[et,nt]),y.useEffect(()=>{if(!_||!tt)return;const E=Do.current,O=new Set(lt.map(Y=>Y.id));for(const Y of lt){if(E.has(Y.id))continue;E.set(Y.id,"");const H=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;Qr(_,tt,{id:Y.id,x:Y.x/window.innerWidth*100,y:Y.y,comment:`Place ${Y.type} at (${Math.round(Y.x)}, ${Math.round(Y.y)}), ${Y.width}×${Y.height}px${Y.text?` — "${Y.text}"`:""}`,element:`[design:${Y.type}]`,elementPath:"[placement]",timestamp:Y.timestamp,url:H,intent:"change",severity:"important",kind:"placement",placement:{componentType:Y.type,width:Y.width,height:Y.height,scrollY:Y.scrollY,text:Y.text}}).then(ee=>{E.has(Y.id)&&E.set(Y.id,ee.id)}).catch(ee=>{console.warn("[Agentation] Failed to sync placement annotation:",ee),E.delete(Y.id)})}for(const[Y,H]of E)O.has(Y)||(E.delete(Y),H&&Pa(_,H).catch(()=>{}))},[lt,_,tt,Et]),y.useEffect(()=>{if(!(!_||!tt))return co.current&&clearTimeout(co.current),co.current=Vt(()=>{const E=$o.current;if(!nt||nt.sections.length===0){for(const[,H]of E)H&&Pa(_,H).catch(()=>{});E.clear();return}const O=new Set(nt.sections.map(H=>H.id)),Y=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;for(const H of nt.sections){const ee=H.originalRect,_e=H.currentRect;if(!(Math.abs(ee.x-_e.x)>1||Math.abs(ee.y-_e.y)>1||Math.abs(ee.width-_e.width)>1||Math.abs(ee.height-_e.height)>1)){const rt=E.get(H.id);rt&&(E.delete(H.id),Pa(_,rt).catch(()=>{}));continue}const Ke=E.get(H.id);Ke?Py(_,Ke,{comment:`Move ${H.label} section (${H.tagName}) — from (${Math.round(ee.x)},${Math.round(ee.y)}) ${Math.round(ee.width)}×${Math.round(ee.height)} to (${Math.round(_e.x)},${Math.round(_e.y)}) ${Math.round(_e.width)}×${Math.round(_e.height)}`}).catch(rt=>{console.warn("[Agentation] Failed to update rearrange annotation:",rt)}):(E.set(H.id,""),Qr(_,tt,{id:H.id,x:_e.x/window.innerWidth*100,y:_e.y,comment:`Move ${H.label} section (${H.tagName}) — from (${Math.round(ee.x)},${Math.round(ee.y)}) ${Math.round(ee.width)}×${Math.round(ee.height)} to (${Math.round(_e.x)},${Math.round(_e.y)}) ${Math.round(_e.width)}×${Math.round(_e.height)}`,element:H.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:Y,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:H.selector,label:H.label,tagName:H.tagName,originalRect:ee,currentRect:_e}}).then(rt=>{E.has(H.id)&&E.set(H.id,rt.id)}).catch(rt=>{console.warn("[Agentation] Failed to sync rearrange annotation:",rt),E.delete(H.id)}))}for(const[H,ee]of E)O.has(H)||(E.delete(H),ee&&Pa(_,ee).catch(()=>{}))},300),()=>{co.current&&clearTimeout(co.current)}},[nt,_,tt,Et]);const Ls=y.useRef(new Map);y.useLayoutEffect(()=>{var Y;const E=(Y=nt==null?void 0:nt.sections)!=null?Y:[],O=new Set;if((et||At)&&C)for(const H of E){O.add(H.id);try{const ee=document.querySelector(H.selector);if(!ee)continue;if(!Ls.current.has(H.id)){const _e={transform:ee.style.transform,transformOrigin:ee.style.transformOrigin,opacity:ee.style.opacity,position:ee.style.position,zIndex:ee.style.zIndex,display:ee.style.display},Ge=[];let Ke=ee.parentElement;for(;Ke&&Ke!==document.body;){const bt=getComputedStyle(Ke);(bt.overflow!=="visible"||bt.overflowX!=="visible"||bt.overflowY!=="visible")&&(Ge.push({el:Ke,overflow:Ke.style.overflow}),Ke.style.overflow="visible"),Ke=Ke.parentElement}getComputedStyle(ee).display==="inline"&&(ee.style.display="inline-block"),Ls.current.set(H.id,{el:ee,origStyles:_e,ancestors:Ge}),ee.style.transformOrigin="top left",ee.style.zIndex="9999"}}catch{}}for(const[H,ee]of Ls.current)if(!O.has(H)){const{el:_e,origStyles:Ge,ancestors:Ke}=ee;_e.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",_e.style.transform=Ge.transform,_e.style.transformOrigin=Ge.transformOrigin,_e.style.opacity=Ge.opacity,_e.style.position=Ge.position,_e.style.zIndex=Ge.zIndex,Ls.current.delete(H),Vt(()=>{_e.style.transition="",_e.style.display=Ge.display;for(const rt of Ke)rt.el.style.overflow=rt.overflow},450)}},[nt,et,At,C]),y.useEffect(()=>()=>{for(const[,E]of Ls.current){const{el:O,origStyles:Y,ancestors:H}=E;O.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",O.style.transform=Y.transform,O.style.transformOrigin=Y.transformOrigin,O.style.opacity=Y.opacity,O.style.position=Y.position,O.style.zIndex=Y.zIndex,Vt(()=>{O.style.transition="",O.style.display=Y.display;for(const ee of H)ee.el.style.overflow=ee.overflow},450)}Ls.current.clear()},[]);const Co=y.useCallback(()=>{pn(!0),Tt(!1),Bt(null),clearTimeout(wo.current),wo.current=Vt(()=>{pn(!1)},300)},[]),Qo=y.useCallback(()=>{et&&(pn(!0),Tt(!1),Bt(null),clearTimeout(wo.current),wo.current=Vt(()=>{pn(!1)},300)),k(!1)},[et]),qi=y.useCallback(()=>{J||(Xw(),pe(!0))},[J]),Bi=y.useCallback(()=>{J&&(ky(),pe(!1))},[J]),ma=y.useCallback(()=>{J?Bi():qi()},[J,qi,Bi]),qa=y.useCallback(()=>{if(Ln.length===0)return;const E=Ln[0],O=E.element,Y=Ln.length>1,H=Ln.map(ee=>ee.element.getBoundingClientRect());if(Y){const ee={left:Math.min(...H.map(pt=>pt.left)),top:Math.min(...H.map(pt=>pt.top)),right:Math.max(...H.map(pt=>pt.right)),bottom:Math.max(...H.map(pt=>pt.bottom))},_e=Ln.slice(0,5).map(pt=>pt.name).join(", "),Ge=Ln.length>5?` +${Ln.length-5} more`:"",Ke=H.map(pt=>({x:pt.left,y:pt.top+window.scrollY,width:pt.width,height:pt.height})),bt=Ln[Ln.length-1].element,Ot=H[H.length-1],on=Ot.left+Ot.width/2,an=Ot.top+Ot.height/2,vt=sm(bt);ve({x:on/window.innerWidth*100,y:vt?an:an+window.scrollY,clientY:an,element:`${Ln.length} elements: ${_e}${Ge}`,elementPath:"multi-select",boundingBox:{x:ee.left,y:ee.top+window.scrollY,width:ee.right-ee.left,height:ee.bottom-ee.top},isMultiSelect:!0,isFixed:vt,elementBoundingBoxes:Ke,multiSelectElements:Ln.map(pt=>pt.element),targetElement:bt,fullPath:Gu(O),accessibility:qu(O),computedStyles:Xu(O),computedStylesObj:Fu(O),nearbyElements:Yu(O),cssClasses:Jl(O),nearbyText:Zl(O),sourceFile:td(O)})}else{const ee=H[0],_e=sm(O);ve({x:ee.left/window.innerWidth*100,y:_e?ee.top:ee.top+window.scrollY,clientY:ee.top,element:E.name,elementPath:E.path,boundingBox:{x:ee.left,y:_e?ee.top:ee.top+window.scrollY,width:ee.width,height:ee.height},isFixed:_e,fullPath:Gu(O),accessibility:qu(O),computedStyles:Xu(O),computedStylesObj:Fu(O),nearbyElements:Yu(O),cssClasses:Jl(O),nearbyText:Zl(O),reactComponents:E.reactComponents,sourceFile:td(O)})}uo([]),ye(null)},[Ln]);y.useEffect(()=>{C||(ve(null),Be(null),De(null),at([]),ye(null),Ve(!1),uo([]),fs.current={cmd:!1,shift:!1},J&&Bi())},[C,J,Bi]),y.useEffect(()=>()=>{ky()},[]),y.useEffect(()=>{if(!C)return;const E=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),O=":not([data-agentation-root]):not([data-agentation-root] *)",Y=document.createElement("style");return Y.id="feedback-cursor-styles",Y.textContent=`
      body ${O} {
        cursor: crosshair !important;
      }

      body :is(${E})${O} {
        cursor: text !important;
      }
    `,document.head.appendChild(Y),()=>{const H=document.getElementById("feedback-cursor-styles");H&&H.remove()}},[C]),y.useEffect(()=>{if(qo!==null&&C)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[qo,C]),y.useEffect(()=>{if(!C||G||Cs||et)return;const E=O=>{const Y=O.composedPath()[0]||O.target;if(Bo(Y,"[data-feedback-toolbar]")){ye(null);return}const H=cr(O.clientX,O.clientY);if(!H||Bo(H,"[data-feedback-toolbar]")){ye(null);return}const{name:ee,elementName:_e,path:Ge,reactComponents:Ke}=tm(H,st),rt=H.getBoundingClientRect();ye({element:ee,elementName:_e,elementPath:Ge,rect:rt,reactComponents:Ke}),me({x:O.clientX,y:O.clientY})};return document.addEventListener("mousemove",E),()=>document.removeEventListener("mousemove",E)},[C,G,Cs,et,st,Bn]);const He=y.useCallback(E=>{var O;if(Be(E),Ze(null),Ft(null),zt([]),(O=E.elementBoundingBoxes)!=null&&O.length){const Y=[];for(const H of E.elementBoundingBoxes){const ee=H.x+H.width/2,_e=H.y+H.height/2-window.scrollY,Ge=cr(ee,_e);Ge&&Y.push(Ge)}at(Y),De(null)}else if(E.boundingBox){const Y=E.boundingBox,H=Y.x+Y.width/2,ee=E.isFixed?Y.y+Y.height/2:Y.y+Y.height/2-window.scrollY,_e=cr(H,ee);if(_e){const Ge=_e.getBoundingClientRect(),Ke=Ge.width/Y.width,rt=Ge.height/Y.height;Ke<.5||rt<.5?De(null):De(_e)}else De(null);at([])}else De(null),at([])},[]);y.useEffect(()=>{if(!C||Cs||et)return;const E=O=>{var gs,ys;if(Hn.current){Hn.current=!1;return}const Y=O.composedPath()[0]||O.target;if(Bo(Y,"[data-feedback-toolbar]")||Bo(Y,"[data-annotation-popup]")||Bo(Y,"[data-annotation-marker]"))return;if(O.metaKey&&O.shiftKey&&!G&&!K){O.preventDefault(),O.stopPropagation();const Tn=cr(O.clientX,O.clientY);if(!Tn)return;const Fn=Tn.getBoundingClientRect(),{name:Qt,path:nn,reactComponents:xs}=tm(Tn,st),Rn=Ln.findIndex(Js=>Js.element===Tn);Rn>=0?uo(Js=>Js.filter((jo,cs)=>cs!==Rn)):uo(Js=>[...Js,{element:Tn,rect:Fn,name:Qt,path:nn,reactComponents:xs!=null?xs:void 0}]);return}const H=Bo(Y,"button, a, input, select, textarea, [role='button'], [onclick]");if(Kt.blockInteractions&&H&&(O.preventDefault(),O.stopPropagation()),G){if(H&&!Kt.blockInteractions)return;O.preventDefault(),(gs=Ds.current)==null||gs.shake();return}if(K){if(H&&!Kt.blockInteractions)return;O.preventDefault(),(ys=oo.current)==null||ys.shake();return}O.preventDefault();const ee=cr(O.clientX,O.clientY);if(!ee)return;const{name:_e,path:Ge,reactComponents:Ke}=tm(ee,st),rt=ee.getBoundingClientRect(),bt=O.clientX/window.innerWidth*100,Ot=sm(ee),on=Ot?O.clientY:O.clientY+window.scrollY,an=window.getSelection();let vt;an&&an.toString().trim().length>0&&(vt=an.toString().trim().slice(0,500));const pt=Fu(ee),_s=Xu(ee);ve({x:bt,y:on,clientY:O.clientY,element:_e,elementPath:Ge,selectedText:vt,boundingBox:{x:rt.left,y:Ot?rt.top:rt.top+window.scrollY,width:rt.width,height:rt.height},nearbyText:Zl(ee),cssClasses:Jl(ee),isFixed:Ot,fullPath:Gu(ee),accessibility:qu(ee),computedStyles:_s,computedStylesObj:pt,nearbyElements:Yu(ee),reactComponents:Ke!=null?Ke:void 0,sourceFile:td(ee),targetElement:ee}),ye(null)};return document.addEventListener("click",E,!0),()=>document.removeEventListener("click",E,!0)},[C,Cs,et,G,K,Kt.blockInteractions,st,Ln]),y.useEffect(()=>{if(!C)return;const E=H=>{H.key==="Meta"&&(fs.current.cmd=!0),H.key==="Shift"&&(fs.current.shift=!0)},O=H=>{const ee=fs.current.cmd&&fs.current.shift;H.key==="Meta"&&(fs.current.cmd=!1),H.key==="Shift"&&(fs.current.shift=!1);const _e=fs.current.cmd&&fs.current.shift;ee&&!_e&&Ln.length>0&&qa()},Y=()=>{fs.current={cmd:!1,shift:!1},uo([])};return document.addEventListener("keydown",E),document.addEventListener("keyup",O),window.addEventListener("blur",Y),()=>{document.removeEventListener("keydown",E),document.removeEventListener("keyup",O),window.removeEventListener("blur",Y)}},[C,Ln,qa]),y.useEffect(()=>{if(!C||G||Cs||et)return;const E=O=>{const Y=O.composedPath()[0]||O.target;Bo(Y,"[data-feedback-toolbar]")||Bo(Y,"[data-annotation-marker]")||Bo(Y,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(Y.tagName)||Y.isContentEditable||(O.preventDefault(),xt.current={x:O.clientX,y:O.clientY})};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[C,G,Cs,et]),y.useEffect(()=>{if(!C||G)return;const E=O=>{if(!xt.current)return;const Y=O.clientX-xt.current.x,H=O.clientY-xt.current.y,ee=Y*Y+H*H,_e=vn*vn;if(!ct&&ee>=_e&&(wt.current=xt.current,ot(!0),O.preventDefault()),(ct||ee>=_e)&&wt.current){if(_n.current){const Qt=Math.min(wt.current.x,O.clientX),nn=Math.min(wt.current.y,O.clientY),xs=Math.abs(O.clientX-wt.current.x),Rn=Math.abs(O.clientY-wt.current.y);_n.current.style.transform=`translate(${Qt}px, ${nn}px)`,_n.current.style.width=`${xs}px`,_n.current.style.height=`${Rn}px`}const Ge=Date.now();if(Ge-Ws.current<ko)return;Ws.current=Ge;const Ke=wt.current.x,rt=wt.current.y,bt=Math.min(Ke,O.clientX),Ot=Math.min(rt,O.clientY),on=Math.max(Ke,O.clientX),an=Math.max(rt,O.clientY),vt=(bt+on)/2,pt=(Ot+an)/2,_s=new Set,gs=[[bt,Ot],[on,Ot],[bt,an],[on,an],[vt,pt],[vt,Ot],[vt,an],[bt,pt],[on,pt]];for(const[Qt,nn]of gs){const xs=document.elementsFromPoint(Qt,nn);for(const Rn of xs)Rn instanceof HTMLElement&&_s.add(Rn)}const ys=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Qt of ys)if(Qt instanceof HTMLElement){const nn=Qt.getBoundingClientRect(),xs=nn.left+nn.width/2,Rn=nn.top+nn.height/2,Js=xs>=bt&&xs<=on&&Rn>=Ot&&Rn<=an,jo=Math.min(nn.right,on)-Math.max(nn.left,bt),cs=Math.min(nn.bottom,an)-Math.max(nn.top,Ot),li=jo>0&&cs>0?jo*cs:0,wi=nn.width*nn.height,Si=wi>0?li/wi:0;(Js||Si>.5)&&_s.add(Qt)}const Tn=[],Fn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Qt of _s){if(Bo(Qt,"[data-feedback-toolbar]")||Bo(Qt,"[data-annotation-marker]"))continue;const nn=Qt.getBoundingClientRect();if(!(nn.width>window.innerWidth*.8&&nn.height>window.innerHeight*.5)&&!(nn.width<10||nn.height<10)&&nn.left<on&&nn.right>bt&&nn.top<an&&nn.bottom>Ot){const xs=Qt.tagName;let Rn=Fn.has(xs);if(!Rn&&(xs==="DIV"||xs==="SPAN")){const Js=Qt.textContent&&Qt.textContent.trim().length>0,jo=Qt.onclick!==null||Qt.getAttribute("role")==="button"||Qt.getAttribute("role")==="link"||Qt.classList.contains("clickable")||Qt.hasAttribute("data-clickable");(Js||jo)&&!Qt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Rn=!0)}if(Rn){let Js=!1;for(const jo of Tn)if(jo.left<=nn.left&&jo.right>=nn.right&&jo.top<=nn.top&&jo.bottom>=nn.bottom){Js=!0;break}Js||Tn.push(nn)}}}if(Nn.current){const Qt=Nn.current;for(;Qt.children.length>Tn.length;)Qt.removeChild(Qt.lastChild);Tn.forEach((nn,xs)=>{let Rn=Qt.children[xs];Rn||(Rn=document.createElement("div"),Rn.className=Ue.selectedElementHighlight,Qt.appendChild(Rn)),Rn.style.transform=`translate(${nn.left}px, ${nn.top}px)`,Rn.style.width=`${nn.width}px`,Rn.style.height=`${nn.height}px`})}}};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[C,G,ct,vn]),y.useEffect(()=>{if(!C)return;const E=O=>{const Y=ct,H=wt.current;if(ct&&H){Hn.current=!0;const ee=Math.min(H.x,O.clientX),_e=Math.min(H.y,O.clientY),Ge=Math.max(H.x,O.clientX),Ke=Math.max(H.y,O.clientY),rt=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(vt=>{if(!(vt instanceof HTMLElement)||Bo(vt,"[data-feedback-toolbar]")||Bo(vt,"[data-annotation-marker]"))return;const pt=vt.getBoundingClientRect();pt.width>window.innerWidth*.8&&pt.height>window.innerHeight*.5||pt.width<10||pt.height<10||pt.left<Ge&&pt.right>ee&&pt.top<Ke&&pt.bottom>_e&&rt.push({element:vt,rect:pt})});const Ot=rt.filter(({element:vt})=>!rt.some(({element:pt})=>pt!==vt&&vt.contains(pt))),on=O.clientX/window.innerWidth*100,an=O.clientY+window.scrollY;if(Ot.length>0){const vt=Ot.reduce((Fn,{rect:Qt})=>({left:Math.min(Fn.left,Qt.left),top:Math.min(Fn.top,Qt.top),right:Math.max(Fn.right,Qt.right),bottom:Math.max(Fn.bottom,Qt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),pt=Ot.slice(0,5).map(({element:Fn})=>il(Fn).name).join(", "),_s=Ot.length>5?` +${Ot.length-5} more`:"",gs=Ot[0].element,ys=Fu(gs),Tn=Xu(gs);ve({x:on,y:an,clientY:O.clientY,element:`${Ot.length} elements: ${pt}${_s}`,elementPath:"multi-select",boundingBox:{x:vt.left,y:vt.top+window.scrollY,width:vt.right-vt.left,height:vt.bottom-vt.top},isMultiSelect:!0,fullPath:Gu(gs),accessibility:qu(gs),computedStyles:Tn,computedStylesObj:ys,nearbyElements:Yu(gs),cssClasses:Jl(gs),nearbyText:Zl(gs),sourceFile:td(gs)})}else{const vt=Math.abs(Ge-ee),pt=Math.abs(Ke-_e);vt>20&&pt>20&&ve({x:on,y:an,clientY:O.clientY,element:"Area selection",elementPath:`region at (${Math.round(ee)}, ${Math.round(_e)})`,boundingBox:{x:ee,y:_e+window.scrollY,width:vt,height:pt},isMultiSelect:!0})}ye(null)}else Y&&(Hn.current=!0);xt.current=null,wt.current=null,ot(!1),Nn.current&&(Nn.current.innerHTML="")};return document.addEventListener("mouseup",E),()=>document.removeEventListener("mouseup",E)},[C,ct]);const ut=y.useCallback(async(E,O,Y)=>{const H=Kt.webhookUrl||w;if(!H||!Kt.webhooksEnabled&&!Y)return!1;try{return(await fetch(H,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:E,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...O})})).ok}catch(ee){return console.warn("[Agentation] Webhook failed:",ee),!1}},[w,Kt.webhookUrl,Kt.webhooksEnabled]),It=y.useCallback(E=>{var Y;if(!G)return;const O={id:Date.now().toString(),x:G.x,y:G.y,comment:E,element:G.element,elementPath:G.elementPath,timestamp:Date.now(),selectedText:G.selectedText,boundingBox:G.boundingBox,nearbyText:G.nearbyText,cssClasses:G.cssClasses,isMultiSelect:G.isMultiSelect,isFixed:G.isFixed,fullPath:G.fullPath,accessibility:G.accessibility,computedStyles:G.computedStyles,nearbyElements:G.nearbyElements,reactComponents:G.reactComponents,sourceFile:G.sourceFile,elementBoundingBoxes:G.elementBoundingBoxes,..._&&tt?{sessionId:tt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};R(H=>[...H,O]),Bs.current=O.id,Vt(()=>{Bs.current=null},300),Vt(()=>{W(H=>new Set(H).add(O.id))},250),a==null||a(O),ut("annotation.add",{annotation:O}),Le(!0),Vt(()=>{ve(null),Le(!1)},150),(Y=window.getSelection())==null||Y.removeAllRanges(),_&&tt&&Qr(_,tt,O).then(H=>{H.id!==O.id&&(R(ee=>ee.map(_e=>_e.id===O.id?{..._e,id:H.id}:_e)),W(ee=>{const _e=new Set(ee);return _e.delete(O.id),_e.add(H.id),_e}))}).catch(H=>{console.warn("[Agentation] Failed to sync annotation:",H)})},[G,a,ut,_,tt]),gt=y.useCallback(()=>{Le(!0),Vt(()=>{ve(null),Le(!1)},150)},[]),Yt=y.useCallback(E=>{const O=M.findIndex(H=>H.id===E),Y=M[O];(K==null?void 0:K.id)===E&&(kt(!0),Vt(()=>{Be(null),De(null),at([]),kt(!1)},150)),rn(E),re(H=>new Set(H).add(E)),Y&&(c==null||c(Y),ut("annotation.delete",{annotation:Y})),_&&Pa(_,E).catch(H=>{console.warn("[Agentation] Failed to delete annotation from server:",H)}),Vt(()=>{R(H=>H.filter(ee=>ee.id!==E)),re(H=>{const ee=new Set(H);return ee.delete(E),ee}),rn(null),O<M.length-1&&(Se(O),Vt(()=>Se(null),200))},150)},[M,K,c,ut,_]),qt=y.useCallback(E=>{var O;if(!E){Ze(null),Ft(null),zt([]);return}if(Ze(E.id),(O=E.elementBoundingBoxes)!=null&&O.length){const Y=[];for(const H of E.elementBoundingBoxes){const ee=H.x+H.width/2,_e=H.y+H.height/2-window.scrollY,Ke=document.elementsFromPoint(ee,_e).find(rt=>!rt.closest("[data-annotation-marker]")&&!rt.closest("[data-agentation-root]"));Ke&&Y.push(Ke)}zt(Y),Ft(null)}else if(E.boundingBox){const Y=E.boundingBox,H=Y.x+Y.width/2,ee=E.isFixed?Y.y+Y.height/2:Y.y+Y.height/2-window.scrollY,_e=cr(H,ee);if(_e){const Ge=_e.getBoundingClientRect(),Ke=Ge.width/Y.width,rt=Ge.height/Y.height;Ke<.5||rt<.5?Ft(null):Ft(_e)}else Ft(null);zt([])}else Ft(null),zt([])},[]),Yn=y.useCallback(E=>{if(!K)return;const O={...K,comment:E};R(Y=>Y.map(H=>H.id===K.id?O:H)),u==null||u(O),ut("annotation.update",{annotation:O}),_&&Py(_,K.id,{comment:E}).catch(Y=>{console.warn("[Agentation] Failed to update annotation on server:",Y)}),kt(!0),Vt(()=>{Be(null),De(null),at([]),kt(!1)},150)},[K,u,ut,_]),wn=y.useCallback(()=>{kt(!0),Vt(()=>{Be(null),De(null),at([]),kt(!1)},150)},[]),Vn=y.useCallback(()=>{const E=M.length,O=lt.length>0||!!nt;if(E===0&&Bn.length===0&&!O)return;if(d==null||d(M),ut("annotations.clear",{annotations:M}),_){Promise.all(M.map(ee=>Pa(_,ee.id).catch(_e=>{console.warn("[Agentation] Failed to delete annotation from server:",_e)})));for(const[,ee]of Do.current)ee&&Pa(_,ee).catch(()=>{});Do.current.clear();for(const[,ee]of $o.current)ee&&Pa(_,ee).catch(()=>{});$o.current.clear()}Re(!0),$e(!0),bi([]);const Y=Ao.current;if(Y){const ee=Y.getContext("2d");ee&&ee.clearRect(0,0,Y.width,Y.height)}(lt.length>0||nt)&&(Ts(ee=>ee+1),ai(ee=>ee+1),Vt(()=>{Wt([]),ps(null)},200)),it&&en(!1),xn&&es(""),no.current={rearrange:null,placements:[]},Zu(Et);const H=E*30+200;Vt(()=>{R([]),W(new Set),localStorage.removeItem(Cd(Et)),Re(!1)},H),Vt(()=>$e(!1),1500)},[Et,M,Bn,lt,nt,it,xn,d,ut,_]),ho=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et,O=et&&it;let Y;if(O){if(lt.length===0&&!nt&&!xn)return;Y=""}else{if(Y=Uy(M,E,Kt.outputDetail),!Y&&Bn.length===0&&lt.length===0&&!nt)return;Y||(Y=`## Page Feedback: ${E}
`)}if(!O&&Bn.length>0){const H=new Set;for(const Ke of M)Ke.drawingIndex!=null&&H.add(Ke.drawingIndex);const ee=Ao.current;ee&&(ee.style.visibility="hidden");const _e=[],Ge=window.scrollY;for(let Ke=0;Ke<Bn.length;Ke++){if(H.has(Ke))continue;const rt=Bn[Ke];if(rt.points.length<2)continue;const bt=rt.fixed?rt.points:rt.points.map(ss=>({x:ss.x,y:ss.y-Ge}));let Ot=1/0,on=1/0,an=-1/0,vt=-1/0;for(const ss of bt)Ot=Math.min(Ot,ss.x),on=Math.min(on,ss.y),an=Math.max(an,ss.x),vt=Math.max(vt,ss.y);const pt=an-Ot,_s=vt-on,gs=Math.hypot(pt,_s),ys=bt[0],Tn=bt[bt.length-1],Fn=Math.hypot(Tn.x-ys.x,Tn.y-ys.y);let Qt;const nn=Fn<gs*.35,xs=pt/Math.max(_s,1);if(nn&&gs>20){const ss=Math.max(pt,_s)*.15;let ki=0;for(const Oi of bt){const Lc=Oi.x-Ot<ss,Vd=an-Oi.x<ss,Ud=Oi.y-on<ss,Wd=vt-Oi.y<ss;(Lc||Vd)&&(Ud||Wd)&&ki++}Qt=ki>bt.length*.15?"box":"circle"}else xs>3&&_s<40?Qt="underline":Fn>gs*.5?Qt="arrow":Qt="drawing";const Rn=Math.min(10,bt.length),Js=Math.max(1,Math.floor(bt.length/Rn)),jo=new Set,cs=[],li=[ys];for(let ss=Js;ss<bt.length-1;ss+=Js)li.push(bt[ss]);li.push(Tn);for(const ss of li){const ki=cr(ss.x,ss.y);if(!ki||jo.has(ki)||Bo(ki,"[data-feedback-toolbar]"))continue;jo.add(ki);const{name:Oi}=il(ki);cs.includes(Oi)||cs.push(Oi)}const wi=`${Math.round(Ot)},${Math.round(on)} → ${Math.round(an)},${Math.round(vt)}`;let Si;(Qt==="circle"||Qt==="box")&&cs.length>0?Si=`${Qt==="box"?"Boxed":"Circled"} **${cs[0]}**${cs.length>1?` (and ${cs.slice(1).join(", ")})`:""} (region: ${wi})`:Qt==="underline"&&cs.length>0?Si=`Underlined **${cs[0]}** (${wi})`:Qt==="arrow"&&cs.length>=2?Si=`Arrow from **${cs[0]}** to **${cs[cs.length-1]}** (${Math.round(ys.x)},${Math.round(ys.y)} → ${Math.round(Tn.x)},${Math.round(Tn.y)})`:cs.length>0?Si=`${Qt==="arrow"?"Arrow":"Drawing"} near **${cs.join("**, **")}** (region: ${wi})`:Si=`Drawing at ${wi}`,_e.push(Si)}ee&&(ee.style.visibility=""),_e.length>0&&(Y+=`
**Drawings:**
`,_e.forEach((Ke,rt)=>{Y+=`${rt+1}. ${Ke}
`}))}if((lt.length>0||O&&xn)&&(Y+=`
`+Oy(lt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:it,wireframePurpose:xn||void 0},Kt.outputDetail)),nt){const H=zy(nt,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});H&&(Y+=`
`+H)}if(g)try{await navigator.clipboard.writeText(Y)}catch{}h==null||h(Y),B(!0),Vt(()=>B(!1),2e3),Kt.autoClearAfterCopy&&Vt(()=>Vn(),500)},[M,Bn,lt,nt,it,et,ms,xn,Et,Kt.outputDetail,st,Kt.autoClearAfterCopy,Vn,g,h]),vi=y.useCallback(async()=>{const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Et;let O=Uy(M,E,Kt.outputDetail);if(!O&&lt.length===0&&!nt)return;if(O||(O=`## Page Feedback: ${E}
`),lt.length>0&&(O+=`
`+Oy(lt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:it,wireframePurpose:xn||void 0},Kt.outputDetail)),nt){const H=zy(nt,Kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});H&&(O+=`
`+H)}p&&p(O,M),L("sending"),await new Promise(H=>Vt(H,150));const Y=await ut("submit",{output:O,annotations:M},!0);L(Y?"sent":"failed"),Vt(()=>L("idle"),2500),Y&&Kt.autoClearAfterCopy&&Vt(()=>Vn(),500)},[p,ut,M,lt,nt,it,ms,Et,Kt.outputDetail,st,Kt.autoClearAfterCopy,Vn]);y.useEffect(()=>{if(!qn)return;const E=10,O=H=>{const ee=H.clientX-qn.x,_e=H.clientY-qn.y,Ge=Math.sqrt(ee*ee+_e*_e);if(!Pn&&Ge>E&&On(!0),Pn||Ge>E){let Ke=qn.toolbarX+ee,rt=qn.toolbarY+_e;const bt=20,Ot=337,on=44,vt=Ot-(C?Xt==="connected"?297:257:44),pt=bt-vt,_s=window.innerWidth-bt-Ot;Ke=Math.max(pt,Math.min(_s,Ke)),rt=Math.max(bt,Math.min(window.innerHeight-on-bt,rt)),dn({x:Ke,y:rt})}},Y=()=>{Pn&&(tn.current=!0),On(!1),$t(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",Y),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",Y)}},[qn,Pn,C,Xt]);const xr=y.useCallback(E=>{var _e,Ge;if(E.target.closest("button")||E.target.closest("[data-agentation-settings-panel]"))return;const O=E.currentTarget.parentElement;if(!O)return;const Y=O.getBoundingClientRect(),H=(_e=Lt==null?void 0:Lt.x)!=null?_e:Y.left,ee=(Ge=Lt==null?void 0:Lt.y)!=null?Ge:Y.top;$t({x:E.clientX,y:E.clientY,toolbarX:H,toolbarY:ee})},[Lt]);if(y.useEffect(()=>{if(!Lt)return;const E=()=>{let ee=Lt.x,_e=Lt.y;const rt=20-(337-(C?Xt==="connected"?297:257:44)),bt=window.innerWidth-20-337;ee=Math.max(rt,Math.min(bt,ee)),_e=Math.max(20,Math.min(window.innerHeight-44-20,_e)),(ee!==Lt.x||_e!==Lt.y)&&dn({x:ee,y:_e})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[Lt,C,Xt]),y.useEffect(()=>{const E=O=>{const Y=O.target,H=Y.tagName==="INPUT"||Y.tagName==="TEXTAREA"||Y.isContentEditable;if(O.key==="Escape"){if(et){Zt?Bt(null):Co();return}if(Cs){Us(!1);return}if(Ln.length>0){uo([]);return}G||C&&(In(),k(!1))}if((O.metaKey||O.ctrlKey)&&O.shiftKey&&(O.key==="f"||O.key==="F")){O.preventDefault(),In(),C?Qo():k(!0);return}if(!(H||O.metaKey||O.ctrlKey)&&((O.key==="p"||O.key==="P")&&(O.preventDefault(),In(),ma()),(O.key==="l"||O.key==="L")&&(O.preventDefault(),In(),Cs&&Us(!1),we&&Ve(!1),G&&gt(),et?Co():Tt(!0)),(O.key==="h"||O.key==="H")&&M.length>0&&(O.preventDefault(),In(),T(ee=>!ee)),(O.key==="c"||O.key==="C")&&(M.length>0||lt.length>0||nt)&&(O.preventDefault(),In(),ho()),(O.key==="x"||O.key==="X")&&(M.length>0||lt.length>0||nt)&&(O.preventDefault(),In(),Vn(),lt.length>0&&Wt([]),nt&&ps(null)),O.key==="s"||O.key==="S")){const ee=Hi(Kt.webhookUrl)||Hi(w||"");M.length>0&&ee&&P==="idle"&&(O.preventDefault(),In(),vi())}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[C,Cs,et,Zt,lt,nt,G,M.length,Kt.webhookUrl,w,P,vi,ma,ho,Vn,Ln]),!Fe||$)return null;const Io=M.length>0,Li=M.filter(E=>!se.has(E.id)&&E.kind!=="placement"&&E.kind!=="rearrange"),Dc=Li.length>0,Gi=M.filter(E=>se.has(E.id)),Ac=E=>{const _e=E.x/100*window.innerWidth,Ge=typeof E.y=="string"?parseFloat(E.y):E.y,Ke={};window.innerHeight-Ge-22-10<80&&(Ke.top="auto",Ke.bottom="calc(100% + 10px)");const bt=_e-200/2,Ot=10;if(bt<Ot){const on=Ot-bt;Ke.left=`calc(50% + ${on}px)`}else if(bt+200>window.innerWidth-Ot){const on=bt+200-(window.innerWidth-Ot);Ke.left=`calc(50% - ${on}px)`}return Ke};return kc.createPortal(r.jsxs("div",{ref:X,style:{display:"contents"},"data-agentation-theme":Es?"dark":"light","data-agentation-accent":Kt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${Ue.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Lt?{left:Lt.x,top:Lt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${Ue.toolbarContainer} ${C?Ue.expanded:Ue.collapsed} ${oe?Ue.entrance:""} ${U?Ue.hiding:""} ${!Kt.webhooksEnabled&&(Hi(Kt.webhookUrl)||Hi(w||""))?Ue.serverConnected:""}`,onClick:C?void 0:E=>{if(tn.current){tn.current=!1,E.preventDefault();return}k(!0)},onMouseDown:xr,role:C?void 0:"button",tabIndex:C?-1:0,title:C?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${Ue.toggleContent} ${C?Ue.hidden:Ue.visible}`,children:[r.jsx(Ew,{size:24}),Dc&&r.jsx("span",{className:`${Ue.badge} ${C?Ue.fadeOut:""} ${oe?Ue.entrance:""}`,children:Li.length})]}),r.jsxs("div",{className:`${Ue.controlsContent} ${C?Ue.visible:Ue.hidden} ${Lt&&Lt.y<100?Ue.tooltipBelow:""} ${Ht||we?Ue.tooltipsHidden:""} ${No?Ue.tooltipsInSession:""}`,onMouseEnter:fo,onMouseLeave:Go,children:[r.jsxs("div",{className:`${Ue.buttonWrapper} ${Lt&&Lt.x<120?Ue.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:Ue.controlButton,onClick:E=>{E.stopPropagation(),In(),ma()},"data-active":J,children:r.jsx(Bw,{size:24,isPaused:J})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[J?"Resume animations":"Pause animations",r.jsx("span",{className:Ue.shortcut,children:"P"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:`${Ue.controlButton} ${Es?"":Ue.light}`,onClick:E=>{E.stopPropagation(),In(),Cs&&Us(!1),we&&Ve(!1),G&&gt(),et?Co():Tt(!0)},"data-active":et,style:et&&it?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(Uw,{size:21})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[et?"Exit layout mode":"Layout mode",r.jsx("span",{className:Ue.shortcut,children:"L"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:Ue.controlButton,onClick:E=>{E.stopPropagation(),In(),T(!A)},disabled:!Io||et,children:r.jsx(Rw,{size:24,isOpen:A})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[A?"Hide markers":"Show markers",r.jsx("span",{className:Ue.shortcut,children:"H"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:`${Ue.controlButton} ${Me?Ue.statusShowing:""}`,onClick:E=>{E.stopPropagation(),In(),ho()},disabled:et&&it?lt.length===0&&!((Nc=nt==null?void 0:nt.sections)!=null&&Nc.length):!Io&&Bn.length===0&&lt.length===0&&!((Rc=nt==null?void 0:nt.sections)!=null&&Rc.length),"data-active":Me,children:r.jsx(Aw,{size:24,copied:Me,tint:et&&it&&(lt.length>0||(ml=nt==null?void 0:nt.sections)!=null&&ml.length)?"#f97316":void 0})}),r.jsxs("span",{className:Ue.buttonTooltip,children:[et&&it?"Copy layout":"Copy feedback",r.jsx("span",{className:Ue.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${Ue.buttonWrapper} ${Ue.sendButtonWrapper} ${C&&!Kt.webhooksEnabled&&(Hi(Kt.webhookUrl)||Hi(w||""))?Ue.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${Ue.controlButton} ${P==="sent"||P==="failed"?Ue.statusShowing:""}`,onClick:E=>{E.stopPropagation(),In(),vi()},disabled:!Io||!Hi(Kt.webhookUrl)&&!Hi(w||"")||P==="sending","data-no-hover":P==="sent"||P==="failed",tabIndex:Hi(Kt.webhookUrl)||Hi(w||"")?0:-1,children:[r.jsx(Nw,{size:24,state:P}),Io&&P==="idle"&&r.jsx("span",{className:Ue.buttonBadge,children:M.length})]}),r.jsxs("span",{className:Ue.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:Ue.shortcut,children:"S"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:Ue.controlButton,onClick:E=>{E.stopPropagation(),In(),Vn()},disabled:!Io&&Bn.length===0&&lt.length===0&&!((pl=nt==null?void 0:nt.sections)!=null&&pl.length),"data-danger":!0,children:r.jsx(Ow,{size:24})}),r.jsxs("span",{className:Ue.buttonTooltip,children:["Clear all",r.jsx("span",{className:Ue.shortcut,children:"X"})]})]}),r.jsxs("div",{className:Ue.buttonWrapper,children:[r.jsx("button",{className:Ue.controlButton,onClick:E=>{E.stopPropagation(),In(),et&&Co(),Ve(!we)},children:r.jsx(Lw,{size:24})}),_&&Xt!=="disconnected"&&r.jsx("span",{className:`${Ue.mcpIndicator} ${Ue[Xt]} ${we?Ue.hidden:""}`,title:Xt==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:Ue.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:Ue.divider}),r.jsxs("div",{className:`${Ue.buttonWrapper} ${Lt&&typeof window<"u"&&Lt.x>window.innerWidth-120?Ue.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:Ue.controlButton,onClick:E=>{E.stopPropagation(),In(),Qo()},children:r.jsx(zw,{size:24})}),r.jsxs("span",{className:Ue.buttonTooltip,children:["Exit",r.jsx("span",{className:Ue.shortcut,children:"Esc"})]})]})]}),r.jsx(y4,{visible:et&&C,activeType:Zt,onSelect:E=>{Bt(Zt===E?null:E)},isDarkMode:Es,sectionCount:(pa=nt==null?void 0:nt.sections.length)!=null?pa:0,onDetectSections:()=>{var Ge,Ke;const E=E4(),O=(Ge=nt==null?void 0:nt.sections)!=null?Ge:[],Y=new Set(O.map(rt=>rt.selector)),H=E.filter(rt=>!Y.has(rt.selector)),ee=[...O,...H],_e=[...(Ke=nt==null?void 0:nt.originalOrder)!=null?Ke:[],...H.map(rt=>rt.id)];ps({sections:ee,originalOrder:_e,detectedAt:Date.now()})},placementCount:lt.length,onClearPlacements:()=>{Ts(E=>E+1),ai(E=>E+1),Vt(()=>{ps({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:it,onBlankCanvasChange:E=>{const O={sections:[],originalOrder:[],detectedAt:Date.now()};E?(bo.current={rearrange:nt,placements:lt},ps(no.current.rearrange||O),Wt(no.current.placements),Bt(null)):(no.current={rearrange:nt,placements:lt},ps(bo.current.rearrange||O),Wt(bo.current.placements)),en(E)},wireframePurpose:xn,onWireframePurposeChange:es,Tooltip:hr,onDragStart:(E,O)=>{var on;O.preventDefault();const Y=yt[E];let H=null,ee=!1;const _e=O.clientX,Ge=O.clientY,Ke=O.target.closest("[data-feedback-toolbar]"),rt=(on=Ke==null?void 0:Ke.getBoundingClientRect().top)!=null?on:window.innerHeight,bt=an=>{const vt=an.clientX-_e,pt=an.clientY-Ge;if(!ee&&(Math.abs(vt)>4||Math.abs(pt)>4)&&(ee=!0,H=document.createElement("div"),H.className=`${Ee.dragPreview}${it?` ${Ee.dragPreviewWireframe}`:""}`,document.body.appendChild(H)),!H)return;const _s=Math.max(0,rt-an.clientY),gs=Math.min(1,_s/180),ys=1-Math.pow(1-gs,2),Tn=28,Fn=20,Qt=Math.min(140,Y.width*.18),nn=Math.min(90,Y.height*.18),xs=Tn+(Qt-Tn)*ys,Rn=Fn+(nn-Fn)*ys;H.style.width=`${xs}px`,H.style.height=`${Rn}px`,H.style.left=`${an.clientX-xs/2}px`,H.style.top=`${an.clientY-Rn/2}px`,H.style.opacity=`${.5+.5*ys}`,H.textContent=ys>.25?E:""},Ot=an=>{if(window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",Ot),H&&document.body.removeChild(H),ee){const vt=Y.width,pt=Y.height,_s=window.scrollY,gs=Math.max(0,an.clientX-vt/2),ys=Math.max(0,an.clientY+_s-pt/2),Tn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:E,x:gs,y:ys,width:vt,height:pt,scrollY:_s,timestamp:Date.now()};Wt(Fn=>[...Fn,Tn]),Bt(null),vo.current=new Set,ro(Fn=>Fn+1)}};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",Ot)}}),r.jsx($6,{settings:Kt,onSettingsChange:E=>Ko(O=>({...O,...E})),isDarkMode:Es,onToggleTheme:Ce,isDevMode:Oe,connectionStatus:Xt,endpoint:_,isVisible:We,toolbarNearBottom:!!Lt&&Lt.y<230,settingsPage:Rt,onSettingsPageChange:Mt,onHideToolbar:Gn})]})}),(et||At)&&r.jsx("div",{className:`${Ee.blankCanvas} ${Dn?Ee.visible:""} ${bn?Ee.gridActive:""}`,style:{"--canvas-opacity":Jn},"data-feedback-toolbar":!0}),et&&it&&Dn&&r.jsxs("div",{className:Ee.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:Ee.wireframeOpacityRow,children:[r.jsx("span",{className:Ee.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:Ee.wireframeOpacitySlider,min:0,max:1,step:.01,value:Jn,onChange:E=>Ms(Number(E.target.value))})]}),r.jsxs("div",{className:Ee.wireframeNoticeTitleRow,children:[r.jsx("span",{className:Ee.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:Ee.wireframeNoticeDivider}),r.jsx("button",{className:Ee.wireframeStartOver,onClick:()=>{Ts(E=>E+1),ps({sections:[],originalOrder:[],detectedAt:Date.now()}),no.current={rearrange:null,placements:[]},es(""),Zu(Et)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(et||At)&&r.jsx(h4,{placements:lt,onChange:Wt,activeComponent:At?null:Zt,onActiveComponentChange:Bt,isDarkMode:Es,exiting:At,onInteractionChange:Xn,passthrough:!Zt,extraSnapRects:nt==null?void 0:nt.sections.map(E=>E.currentRect),deselectSignal:An,clearSignal:Hs,wireframe:it,onSelectionChange:(E,O)=>{vo.current=E,O||(Vs.current=new Set,Ps(Y=>Y+1))},onDragMove:(E,O)=>{const Y=Vs.current;if(!(!Y.size||!nt)){if(!ts.current){ts.current=new Map;for(const H of nt.sections)Y.has(H.id)&&ts.current.set(H.id,{x:H.currentRect.x,y:H.currentRect.y})}for(const H of nt.sections){if(!Y.has(H.id)||!ts.current.get(H.id))continue;const _e=document.querySelector(`[data-rearrange-section="${H.id}"]`);_e&&(_e.style.transform=`translate(${E}px, ${O}px)`)}}},onDragEnd:(E,O,Y)=>{const H=Vs.current,ee=ts.current;if(ts.current=null,!(!H.size||!nt||!ee)){for(const _e of H){const Ge=document.querySelector(`[data-rearrange-section="${_e}"]`);Ge&&(Ge.style.transform="")}Y&&ps(_e=>_e&&{..._e,sections:_e.sections.map(Ge=>{const Ke=ee.get(Ge.id);return Ke?{...Ge,currentRect:{...Ge.currentRect,x:Math.max(0,Ke.x+E),y:Math.max(0,Ke.y+O)}}:Ge})})}}}),(et||At)&&nt&&r.jsx(N4,{rearrangeState:nt,onChange:ps,isDarkMode:Es,exiting:At,blankCanvas:it,extraSnapRects:lt.map(E=>({x:E.x,y:E.y,width:E.width,height:E.height})),clearSignal:mn,deselectSignal:lo,onSelectionChange:(E,O)=>{Vs.current=E,O||(vo.current=new Set,ro(Y=>Y+1))},onDragMove:(E,O)=>{const Y=vo.current;if(Y.size){if(!ts.current){ts.current=new Map;for(const H of lt)Y.has(H.id)&&ts.current.set(H.id,{x:H.x,y:H.y})}for(const H of Y){const ee=document.querySelector(`[data-design-placement="${H}"]`);ee&&(ee.style.transform=`translate(${E}px, ${O}px)`)}}},onDragEnd:(E,O,Y)=>{const H=vo.current,ee=ts.current;if(ts.current=null,!(!H.size||!ee)){for(const _e of H){const Ge=document.querySelector(`[data-design-placement="${_e}"]`);Ge&&(Ge.style.transform="")}Y&&Wt(_e=>_e.map(Ge=>{const Ke=ee.get(Ge.id);return Ke?{...Ge,x:Math.max(0,Ke.x+E),y:Math.max(0,Ke.y+O)}:Ge}))}}}),r.jsx("canvas",{ref:Ao,className:`${Ue.drawCanvas} ${Cs?Ue.active:""}`,style:{opacity:Ri?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:Ue.markersLayer,"data-feedback-toolbar":!0,children:[ne&&Li.filter(E=>!E.isFixed).map((E,O,Y)=>r.jsx(Wy,{annotation:E,globalIndex:Li.findIndex(H=>H.id===E.id),layerIndex:O,layerSize:Y.length,isExiting:q,isClearing:Te,isAnimated:D.has(E.id),isHovered:!q&&Qe===E.id,isDeleting:sn===E.id,isEditingAny:!!K,renumberFrom:qe,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:Ac(E),onHoverEnter:H=>!q&&H.id!==Bs.current&&qt(H),onHoverLeave:()=>qt(null),onClick:H=>Kt.markerClickBehavior==="delete"?Yt(H.id):He(H),onContextMenu:He},E.id)),ne&&!q&&Gi.filter(E=>!E.isFixed).map(E=>r.jsx(Yy,{annotation:E},E.id))]}),r.jsxs("div",{className:Ue.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ne&&Li.filter(E=>E.isFixed).map((E,O,Y)=>r.jsx(Wy,{annotation:E,globalIndex:Li.findIndex(H=>H.id===E.id),layerIndex:O,layerSize:Y.length,isExiting:q,isClearing:Te,isAnimated:D.has(E.id),isHovered:!q&&Qe===E.id,isDeleting:sn===E.id,isEditingAny:!!K,renumberFrom:qe,markerClickBehavior:Kt.markerClickBehavior,tooltipStyle:Ac(E),onHoverEnter:H=>!q&&H.id!==Bs.current&&qt(H),onHoverLeave:()=>qt(null),onClick:H=>Kt.markerClickBehavior==="delete"?Yt(H.id):He(H),onContextMenu:He},E.id)),ne&&!q&&Gi.filter(E=>E.isFixed).map(E=>r.jsx(Yy,{annotation:E,fixed:!0},E.id))]}),C&&r.jsxs("div",{className:Ue.overlay,"data-feedback-toolbar":!0,style:G||K?{zIndex:99999}:void 0,children:[(ue==null?void 0:ue.rect)&&!G&&!ht&&!ct&&r.jsx("div",{className:`${Ue.hoverHighlight} ${Ue.enter}`,style:{left:ue.rect.left,top:ue.rect.top,width:ue.rect.width,height:ue.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Ln.filter(E=>document.contains(E.element)).map((E,O)=>{const Y=E.element.getBoundingClientRect(),H=Ln.length>1;return r.jsx("div",{className:H?Ue.multiSelectOutline:Ue.singleSelectOutline,style:{position:"fixed",left:Y.left,top:Y.top,width:Y.width,height:Y.height,...H?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},O)}),Qe&&!G&&(()=>{var ee;const E=M.find(_e=>_e.id===Qe);if(!(E!=null&&E.boundingBox))return null;if((ee=E.elementBoundingBoxes)!=null&&ee.length)return Dt.length>0?Dt.filter(_e=>document.contains(_e)).map((_e,Ge)=>{const Ke=_e.getBoundingClientRect();return r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:Ke.left,top:Ke.top,width:Ke.width,height:Ke.height}},`hover-outline-live-${Ge}`)}):E.elementBoundingBoxes.map((_e,Ge)=>r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:_e.x,top:_e.y-Xe,width:_e.width,height:_e.height}},`hover-outline-${Ge}`));const O=Ut&&document.contains(Ut)?Ut.getBoundingClientRect():null,Y=O?{x:O.left,y:O.top,width:O.width,height:O.height}:{x:E.boundingBox.x,y:E.isFixed?E.boundingBox.y:E.boundingBox.y-Xe,width:E.boundingBox.width,height:E.boundingBox.height},H=E.isMultiSelect;return r.jsx("div",{className:`${H?Ue.multiSelectOutline:Ue.singleSelectOutline} ${Ue.enter}`,style:{left:Y.x,top:Y.y,width:Y.width,height:Y.height,...H?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ue&&!G&&!ht&&!ct&&r.jsxs("div",{className:`${Ue.hoverTooltip} ${Ue.enter}`,style:{left:Math.max(8,Math.min(z.x,window.innerWidth-100)),top:Math.max(z.y-(ue.reactComponents?48:32),8)},children:[ue.reactComponents&&r.jsx("div",{className:Ue.hoverReactPath,children:ue.reactComponents}),r.jsx("div",{className:Ue.hoverElementName,children:ue.elementName})]}),G&&r.jsxs(r.Fragment,{children:[(_a=G.multiSelectElements)!=null&&_a.length?G.multiSelectElements.filter(E=>document.contains(E)).map((E,O)=>{const Y=E.getBoundingClientRect();return r.jsx("div",{className:`${Ue.multiSelectOutline} ${be?Ue.exit:Ue.enter}`,style:{left:Y.left,top:Y.top,width:Y.width,height:Y.height}},`pending-multi-${O}`)}):G.targetElement&&document.contains(G.targetElement)?(()=>{const E=G.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${Ue.singleSelectOutline} ${be?Ue.exit:Ue.enter}`,style:{left:E.left,top:E.top,width:E.width,height:E.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():G.boundingBox&&r.jsx("div",{className:`${G.isMultiSelect?Ue.multiSelectOutline:Ue.singleSelectOutline} ${be?Ue.exit:Ue.enter}`,style:{left:G.boundingBox.x,top:G.boundingBox.y-Xe,width:G.boundingBox.width,height:G.boundingBox.height,...G.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const E=G.x,O=G.isFixed?G.y:G.y-Xe;return r.jsxs(r.Fragment,{children:[r.jsx(T6,{x:E,y:O,isMultiSelect:G.isMultiSelect,isExiting:be}),r.jsx(Sd,{ref:Ds,element:G.element,selectedText:G.selectedText,computedStyles:G.computedStylesObj,placeholder:G.element==="Area selection"?"What should change in this area?":G.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:It,onCancel:gt,isExiting:be,lightMode:!Es,accentColor:G.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,E/100*window.innerWidth)),...O>window.innerHeight-290?{bottom:window.innerHeight-O+20}:{top:O+20}}})]})})()]}),K&&r.jsxs(r.Fragment,{children:[(Bc=K.elementBoundingBoxes)!=null&&Bc.length?Je.length>0?Je.filter(E=>document.contains(E)).map((E,O)=>{const Y=E.getBoundingClientRect();return r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:Y.left,top:Y.top,width:Y.width,height:Y.height}},`edit-multi-live-${O}`)}):K.elementBoundingBoxes.map((E,O)=>r.jsx("div",{className:`${Ue.multiSelectOutline} ${Ue.enter}`,style:{left:E.x,top:E.y-Xe,width:E.width,height:E.height}},`edit-multi-${O}`)):(()=>{const E=Ye&&document.contains(Ye)?Ye.getBoundingClientRect():null,O=E?{x:E.left,y:E.top,width:E.width,height:E.height}:K.boundingBox?{x:K.boundingBox.x,y:K.isFixed?K.boundingBox.y:K.boundingBox.y-Xe,width:K.boundingBox.width,height:K.boundingBox.height}:null;return O?r.jsx("div",{className:`${K.isMultiSelect?Ue.multiSelectOutline:Ue.singleSelectOutline} ${Ue.enter}`,style:{left:O.x,top:O.y,width:O.width,height:O.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(Sd,{ref:oo,element:K.element,selectedText:K.selectedText,computedStyles:C4(K.computedStyles),placeholder:"Edit your feedback...",initialValue:K.comment,submitLabel:"Save",onSubmit:Yn,onCancel:wn,onDelete:()=>Yt(K.id),isExiting:_t,lightMode:!Es,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const E=K.isFixed?K.y:K.y-Xe;return{left:Math.max(160,Math.min(window.innerWidth-160,K.x/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})()})]}),ct&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:_n,className:Ue.dragSelection}),r.jsx("div",{ref:Nn,className:Ue.highlightsContainer})]})]})]}),document.body)}const hp=y.createContext({});function Cc(t){const n=y.useRef(null);return n.current===null&&(n.current=t()),n.current}const H6=typeof window<"u",mp=H6?y.useLayoutEffect:y.useEffect,Bd=y.createContext(null);function pp(t,n){t.indexOf(n)===-1&&t.push(n)}function rl(t,n){const i=t.indexOf(n);i>-1&&t.splice(i,1)}const Fi=(t,n,i)=>i>n?n:i<t?t:i;let _p=()=>{};const Ya={},Xx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function qx(t){return typeof t=="object"&&t!==null}const Gx=t=>/^0[^.\s]+$/u.test(t);function Kx(t){let n;return()=>(n===void 0&&(n=t()),n)}const yi=t=>t,V6=(t,n)=>i=>n(t(i)),jc=(...t)=>t.reduce(V6),ll=(t,n,i)=>{const a=n-t;return a===0?1:(i-t)/a};class gp{constructor(){this.subscriptions=[]}add(n){return pp(this.subscriptions,n),()=>rl(this.subscriptions,n)}notify(n,i,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,i,a);else for(let u=0;u<c;u++){const d=this.subscriptions[u];d&&d(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Fo=t=>t*1e3,gi=t=>t/1e3;function Qx(t,n){return n?t*(1e3/n):0}const U6=(t,n,i)=>{const a=n-t;return((i-t)%a+a)%a+t},Zx=(t,n,i)=>(((1-3*i+3*n)*t+(3*i-6*n))*t+3*n)*t,W6=1e-7,Y6=12;function F6(t,n,i,a,c){let u,d,h=0;do d=n+(i-n)/2,u=Zx(d,a,c)-t,u>0?i=d:n=d;while(Math.abs(u)>W6&&++h<Y6);return d}function Mc(t,n,i,a){if(t===n&&i===a)return yi;const c=u=>F6(u,0,1,t,i);return u=>u===0||u===1?u:Zx(c(u),n,a)}const Jx=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,eb=t=>n=>1-t(1-n),tb=Mc(.33,1.53,.69,.99),yp=eb(tb),nb=Jx(yp),sb=t=>t>=1?1:(t*=2)<1?.5*yp(t):.5*(2-Math.pow(2,-10*(t-1))),xp=t=>1-Math.sin(Math.acos(t)),ob=eb(xp),ib=Jx(xp),X6=Mc(.42,0,1,1),q6=Mc(0,0,.58,1),ab=Mc(.42,0,.58,1),rb=t=>Array.isArray(t)&&typeof t[0]!="number";function lb(t,n){return rb(t)?t[U6(0,t.length,n)]:t}const cb=t=>Array.isArray(t)&&typeof t[0]=="number",G6={linear:yi,easeIn:X6,easeInOut:ab,easeOut:q6,circIn:xp,circInOut:ib,circOut:ob,backIn:yp,backInOut:nb,backOut:tb,anticipate:sb},K6=t=>typeof t=="string",Gy=t=>{if(cb(t)){_p(t.length===4);const[n,i,a,c]=t;return Mc(n,i,a,c)}else if(K6(t))return G6[t];return t},nd=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Q6(t,n){let i=new Set,a=new Set,c=!1,u=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(_){d.has(_)&&(g.schedule(_),t()),_(h)}const g={schedule:(_,x=!1,b=!1)=>{const S=b&&c?i:a;return x&&d.add(_),S.add(_),_},cancel:_=>{a.delete(_),d.delete(_)},process:_=>{if(h=_,c){u=!0;return}c=!0;const x=i;i=a,a=x,i.forEach(p),i.clear(),c=!1,u&&(u=!1,g.process(_))}};return g}const Z6=40;function ub(t,n){let i=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,d=nd.reduce((A,T)=>(A[T]=Q6(u),A),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:_,update:x,preRender:b,render:w,postRender:S}=d,C=()=>{const A=Ya.useManualTiming,T=A?c.timestamp:performance.now();i=!1,A||(c.delta=a?1e3/60:Math.max(Math.min(T-c.timestamp,Z6),1)),c.timestamp=T,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),_.process(c),x.process(c),b.process(c),w.process(c),S.process(c),c.isProcessing=!1,i&&n&&(a=!1,t(C))},k=()=>{i=!0,a=!0,c.isProcessing||t(C)};return{schedule:nd.reduce((A,T)=>{const $=d[T];return A[T]=(F,U=!1,Q=!1)=>(i||k(),$.schedule(F,U,Q)),A},{}),cancel:A=>{for(let T=0;T<nd.length;T++)d[nd[T]].cancel(A)},state:c,steps:d}}const{schedule:ls,cancel:ha,state:yo,steps:om}=ub(typeof requestAnimationFrame<"u"?requestAnimationFrame:yi,!0);let dd;function J6(){dd=void 0}const Lo={now:()=>(dd===void 0&&Lo.set(yo.isProcessing||Ya.useManualTiming?yo.timestamp:performance.now()),dd),set:t=>{dd=t,queueMicrotask(J6)}},db=t=>n=>typeof n=="string"&&n.startsWith(t),fb=db("--"),ek=db("var(--"),bp=t=>ek(t)?tk.test(t.split("/*")[0].trim()):!1,tk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ky(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const ul={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},yc={...ul,transform:t=>Fi(0,1,t)},sd={...ul,default:1},fc=t=>Math.round(t*1e5)/1e5,vp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function nk(t){return t==null}const sk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,wp=(t,n)=>i=>!!(typeof i=="string"&&sk.test(i)&&i.startsWith(t)||n&&!nk(i)&&Object.prototype.hasOwnProperty.call(i,n)),hb=(t,n,i)=>a=>{if(typeof a!="string")return a;const[c,u,d,h]=a.match(vp);return{[t]:parseFloat(c),[n]:parseFloat(u),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},ok=t=>Fi(0,255,t),im={...ul,transform:t=>Math.round(ok(t))},mr={test:wp("rgb","red"),parse:hb("red","green","blue"),transform:({red:t,green:n,blue:i,alpha:a=1})=>"rgba("+im.transform(t)+", "+im.transform(n)+", "+im.transform(i)+", "+fc(yc.transform(a))+")"};function ik(t){let n="",i="",a="",c="";return t.length>5?(n=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),c=t.substring(7,9)):(n=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),c=t.substring(4,5),n+=n,i+=i,a+=a,c+=c),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const Bm={test:wp("#"),parse:ik,transform:mr.transform},Tc=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Ha=Tc("deg"),Yi=Tc("%"),jt=Tc("px"),ak=Tc("vh"),rk=Tc("vw"),Qy={...Yi,parse:t=>Yi.parse(t)/100,transform:t=>Yi.transform(t*100)},nl={test:wp("hsl","hue"),parse:hb("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+Yi.transform(fc(n))+", "+Yi.transform(fc(i))+", "+fc(yc.transform(a))+")"},Ks={test:t=>mr.test(t)||Bm.test(t)||nl.test(t),parse:t=>mr.test(t)?mr.parse(t):nl.test(t)?nl.parse(t):Bm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?mr.transform(t):nl.transform(t),getAnimatableNone:t=>{const n=Ks.parse(t);return n.alpha=0,Ks.transform(n)}},lk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ck(t){var n,i;return isNaN(t)&&typeof t=="string"&&(((n=t.match(vp))==null?void 0:n.length)||0)+(((i=t.match(lk))==null?void 0:i.length)||0)>0}const mb="number",pb="color",uk="var",dk="var(",Zy="${}",fk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cl(t){const n=t.toString(),i=[],a={color:[],number:[],var:[]},c=[];let u=0;const h=n.replace(fk,p=>(Ks.test(p)?(a.color.push(u),c.push(pb),i.push(Ks.parse(p))):p.startsWith(dk)?(a.var.push(u),c.push(uk),i.push(p)):(a.number.push(u),c.push(mb),i.push(parseFloat(p))),++u,Zy)).split(Zy);return{values:i,split:h,indexes:a,types:c}}function hk(t){return cl(t).values}function _b({split:t,types:n}){const i=t.length;return a=>{let c="";for(let u=0;u<i;u++)if(c+=t[u],a[u]!==void 0){const d=n[u];d===mb?c+=fc(a[u]):d===pb?c+=Ks.transform(a[u]):c+=a[u]}return c}}function mk(t){return _b(cl(t))}const pk=t=>typeof t=="number"?0:Ks.test(t)?Ks.getAnimatableNone(t):t,_k=(t,n)=>typeof t=="number"?n!=null&&n.trim().endsWith("/")?t:0:pk(t);function gk(t){const n=cl(t);return _b(n)(n.values.map((a,c)=>_k(a,n.split[c])))}const Ai={test:ck,parse:hk,createTransformer:mk,getAnimatableNone:gk};function am(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*(2/3-i)*6:t}function yk({hue:t,saturation:n,lightness:i,alpha:a}){t/=360,n/=100,i/=100;let c=0,u=0,d=0;if(!n)c=u=d=i;else{const h=i<.5?i*(1+n):i+n-i*n,p=2*i-h;c=am(p,h,t+1/3),u=am(p,h,t),d=am(p,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:a}}function jd(t,n){return i=>i>0?n:t}const hs=(t,n,i)=>t+(n-t)*i,rm=(t,n,i)=>{const a=t*t,c=i*(n*n-a)+a;return c<0?0:Math.sqrt(c)},xk=[Bm,mr,nl],bk=t=>xk.find(n=>n.test(t));function Jy(t){const n=bk(t);if(!n)return!1;let i=n.parse(t);return n===nl&&(i=yk(i)),i}const e1=(t,n)=>{const i=Jy(t),a=Jy(n);if(!i||!a)return jd(t,n);const c={...i};return u=>(c.red=rm(i.red,a.red,u),c.green=rm(i.green,a.green,u),c.blue=rm(i.blue,a.blue,u),c.alpha=hs(i.alpha,a.alpha,u),mr.transform(c))},Lm=new Set(["none","hidden"]);function vk(t,n){return Lm.has(t)?i=>i<=0?t:n:i=>i>=1?n:t}function wk(t,n){return i=>hs(t,n,i)}function Sp(t){return typeof t=="number"?wk:typeof t=="string"?bp(t)?jd:Ks.test(t)?e1:Ck:Array.isArray(t)?gb:typeof t=="object"?Ks.test(t)?e1:Sk:jd}function gb(t,n){const i=[...t],a=i.length,c=t.map((u,d)=>Sp(u)(u,n[d]));return u=>{for(let d=0;d<a;d++)i[d]=c[d](u);return i}}function Sk(t,n){const i={...t,...n},a={};for(const c in i)t[c]!==void 0&&n[c]!==void 0&&(a[c]=Sp(t[c])(t[c],n[c]));return c=>{for(const u in a)i[u]=a[u](c);return i}}function kk(t,n){var c;const i=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const d=n.types[u],h=t.indexes[d][a[d]],p=(c=t.values[h])!=null?c:0;i[u]=p,a[d]++}return i}const Ck=(t,n)=>{const i=Ai.createTransformer(n),a=cl(t),c=cl(n);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Lm.has(t)&&!c.values.length||Lm.has(n)&&!a.values.length?vk(t,n):jc(gb(kk(a,c),c.values),i):jd(t,n)};function yb(t,n,i){return typeof t=="number"&&typeof n=="number"&&typeof i=="number"?hs(t,n,i):Sp(t)(t,n)}const jk=t=>{const n=({timestamp:i})=>t(i);return{start:(i=!0)=>ls.update(n,i),stop:()=>ha(n),now:()=>yo.isProcessing?yo.timestamp:Lo.now()}},xb=(t,n,i=10)=>{let a="";const c=Math.max(Math.round(n/i),2);for(let u=0;u<c;u++)a+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Md=2e4;function kp(t){let n=0;const i=50;let a=t.next(n);for(;!a.done&&n<Md;)n+=i,a=t.next(n);return n>=Md?1/0:n}function bb(t,n=100,i){const a=i({...t,keyframes:[0,n]}),c=Math.min(kp(a),Md);return{type:"keyframes",ease:u=>a.next(c*u).value/n,duration:gi(c)}}const Rs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Om(t,n){return t*Math.sqrt(1-n*n)}const Mk=12;function Tk(t,n,i){let a=i;for(let c=1;c<Mk;c++)a=a-t(a)/n(a);return a}const lm=.001;function Ek({duration:t=Rs.duration,bounce:n=Rs.bounce,velocity:i=Rs.velocity,mass:a=Rs.mass}){let c,u,d=1-n;d=Fi(Rs.minDamping,Rs.maxDamping,d),t=Fi(Rs.minDuration,Rs.maxDuration,gi(t)),d<1?(c=g=>{const _=g*d,x=_*t,b=_-i,w=Om(g,d),S=Math.exp(-x);return lm-b/w*S},u=g=>{const x=g*d*t,b=x*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-x),C=Om(Math.pow(g,2),d);return(-c(g)+lm>0?-1:1)*((b-w)*S)/C}):(c=g=>{const _=Math.exp(-g*t),x=(g-i)*t+1;return-lm+_*x},u=g=>{const _=Math.exp(-g*t),x=(i-g)*(t*t);return _*x});const h=5/t,p=Tk(c,u,h);if(t=Fo(t),isNaN(p))return{stiffness:Rs.stiffness,damping:Rs.damping,duration:t};{const g=Math.pow(p,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const Dk=["duration","bounce"],Ak=["stiffness","damping","mass"];function t1(t,n){return n.some(i=>t[i]!==void 0)}function Nk(t){let n={velocity:Rs.velocity,stiffness:Rs.stiffness,damping:Rs.damping,mass:Rs.mass,isResolvedFromDuration:!1,...t};if(!t1(t,Ak)&&t1(t,Dk))if(n.velocity=0,t.visualDuration){const i=t.visualDuration,a=2*Math.PI/(i*1.2),c=a*a,u=2*Fi(.05,1,1-(t.bounce||0))*Math.sqrt(c);n={...n,mass:Rs.mass,stiffness:c,damping:u}}else{const i=Ek({...t,velocity:0});n={...n,...i,mass:Rs.mass},n.isResolvedFromDuration=!0}return n}function xc(t=Rs.visualDuration,n=Rs.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:c}=i;const u=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:_,duration:x,velocity:b,isResolvedFromDuration:w}=Nk({...i,velocity:-gi(i.velocity||0)}),S=b||0,C=g/(2*Math.sqrt(p*_)),k=d-u,M=gi(Math.sqrt(p/_)),R=Math.abs(k)<5;a||(a=R?Rs.restSpeed.granular:Rs.restSpeed.default),c||(c=R?Rs.restDelta.granular:Rs.restDelta.default);let A,T,$,F,U,Q;if(C<1)$=Om(M,C),F=(S+C*M*k)/$,A=ne=>{const le=Math.exp(-C*M*ne);return d-le*(F*Math.sin($*ne)+k*Math.cos($*ne))},U=C*M*F+k*$,Q=C*M*k-F*$,T=ne=>Math.exp(-C*M*ne)*(U*Math.sin($*ne)+Q*Math.cos($*ne));else if(C===1){A=le=>d-Math.exp(-M*le)*(k+(S+M*k)*le);const ne=S+M*k;T=le=>Math.exp(-M*le)*(M*ne*le-S)}else{const ne=M*Math.sqrt(C*C-1);A=ue=>{const ye=Math.exp(-C*M*ue),z=Math.min(ne*ue,300);return d-ye*((S+C*M*k)*Math.sinh(z)+ne*k*Math.cosh(z))/ne};const le=(S+C*M*k)/ne,q=C*M*le-k*ne,te=C*M*k-le*ne;T=ue=>{const ye=Math.exp(-C*M*ue),z=Math.min(ne*ue,300);return ye*(q*Math.sinh(z)+te*Math.cosh(z))}}const X={calculatedDuration:w&&x||null,velocity:ne=>Fo(T(ne)),next:ne=>{if(!w&&C<1){const q=Math.exp(-C*M*ne),te=Math.sin($*ne),ue=Math.cos($*ne),ye=d-q*(F*te+k*ue),z=Fo(q*(U*te+Q*ue));return h.done=Math.abs(z)<=a&&Math.abs(d-ye)<=c,h.value=h.done?d:ye,h}const le=A(ne);if(w)h.done=ne>=x;else{const q=Fo(T(ne));h.done=Math.abs(q)<=a&&Math.abs(d-le)<=c}return h.value=h.done?d:le,h},toString:()=>{const ne=Math.min(kp(X),Md),le=xb(q=>X.next(ne*q).value,ne,30);return ne+"ms "+le},toTransition:()=>{}};return X}xc.applyToOptions=t=>{const n=bb(t,100,xc);return t.ease=n.ease,t.duration=Fo(n.duration),t.type="keyframes",t};const Rk=5;function vb(t,n,i){const a=Math.max(n-Rk,0);return Qx(i-t(a),n-a)}function zm({keyframes:t,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:_}){const x=t[0],b={done:!1,value:x},w=Q=>h!==void 0&&Q<h||p!==void 0&&Q>p,S=Q=>h===void 0?p:p===void 0||Math.abs(h-Q)<Math.abs(p-Q)?h:p;let C=i*n;const k=x+C,M=d===void 0?k:d(k);M!==k&&(C=M-x);const R=Q=>-C*Math.exp(-Q/a),A=Q=>M+R(Q),T=Q=>{const X=R(Q),ne=A(Q);b.done=Math.abs(X)<=g,b.value=b.done?M:ne};let $,F;const U=Q=>{w(b.value)&&($=Q,F=xc({keyframes:[b.value,S(b.value)],velocity:vb(A,Q,b.value),damping:c,stiffness:u,restDelta:g,restSpeed:_}))};return U(0),{calculatedDuration:null,next:Q=>{let X=!1;return!F&&$===void 0&&(X=!0,T(Q),U(Q)),$!==void 0&&Q>=$?F.next(Q-$):(!X&&T(Q),b)}}}function Bk(t,n,i){const a=[],c=i||Ya.mix||yb,u=t.length-1;for(let d=0;d<u;d++){let h=c(t[d],t[d+1]);if(n){const p=Array.isArray(n)?n[d]||yi:n;h=jc(p,h)}a.push(h)}return a}function wb(t,n,{clamp:i=!0,ease:a,mixer:c}={}){const u=t.length;if(_p(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const d=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const h=Bk(n,a,c),p=h.length,g=_=>{if(d&&_<t[0])return n[0];let x=0;if(p>1)for(;x<t.length-2&&!(_<t[x+1]);x++);const b=ll(t[x],t[x+1],_);return h[x](b)};return i?_=>g(Fi(t[0],t[u-1],_)):g}function Sb(t,n){const i=t[t.length-1];for(let a=1;a<=n;a++){const c=ll(0,n,a);t.push(hs(i,1,c))}}function kb(t){const n=[0];return Sb(n,t.length-1),n}function Lk(t,n){return t.map(i=>i*n)}function Ok(t,n){return t.map(()=>n||ab).splice(0,t.length-1)}function hc({duration:t=300,keyframes:n,times:i,ease:a="easeInOut"}){const c=rb(a)?a.map(Gy):Gy(a),u={done:!1,value:n[0]},d=Lk(i&&i.length===n.length?i:kb(n),t),h=wb(d,n,{ease:Array.isArray(c)?c:Ok(n,c)});return{calculatedDuration:t,next:p=>(u.value=h(p),u.done=p>=t,u)}}const zk=t=>t!==null;function Ld(t,{repeat:n,repeatType:i="loop"},a,c=1){const u=t.filter(zk),h=c<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const $k={decay:zm,inertia:zm,tween:hc,keyframes:hc,spring:xc};function Cb(t){typeof t.type=="string"&&(t.type=$k[t.type])}class Cp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const Ik=t=>t/100;class Td extends Cp{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var a,c;const{motionValue:i}=this.options;i&&i.updatedAt!==Lo.now()&&this.tick(Lo.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Cb(n);const{type:i=hc,repeat:a=0,repeatDelay:c=0,repeatType:u,velocity:d=0}=n;let{keyframes:h}=n;const p=i||hc;p!==hc&&typeof h[0]!="number"&&(this.mixKeyframes=jc(Ik,yb(h[0],h[1])),h=[0,100]);const g=p({...n,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=kp(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:c,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:_,repeat:x,repeatType:b,repeatDelay:w,type:S,onUpdate:C,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-c/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let A=this.currentTime,T=a;if(x){const Q=Math.min(this.currentTime,c)/h;let X=Math.floor(Q),ne=Q%1;!ne&&Q>=1&&(ne=1),ne===1&&X--,X=Math.min(X,x+1),!!(X%2)&&(b==="reverse"?(ne=1-ne,w&&(ne-=w/h)):b==="mirror"&&(T=d)),A=Fi(0,1,ne)*h}let $;R?(this.delayState.value=_[0],$=this.delayState):$=T.next(A),u&&!R&&($.value=u($.value));let{done:F}=$;!R&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return U&&S!==zm&&($.value=Ld(_,this.options,k,this.speed)),C&&C($.value),U&&this.finish(),$}then(n,i){return this.finished.then(n,i)}get duration(){return gi(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+gi(n)}get time(){return gi(this.currentTime)}set time(n){n=Fo(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return vb(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Lo.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=gi(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:n=jk,startTime:i}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),(u=(c=this.options).onPlay)==null||u.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i!=null?i:a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Lo.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(n=this.options).onComplete)==null||i.call(n)}cancel(){var n,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(n=this.options).onCancel)==null||i.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),n.observe(this)}}function Pk(t){var n;for(let i=1;i<t.length;i++)(n=t[i])!=null||(t[i]=t[i-1])}const pr=t=>t*180/Math.PI,$m=t=>{const n=pr(Math.atan2(t[1],t[0]));return Im(n)},Hk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:$m,rotateZ:$m,skewX:t=>pr(Math.atan(t[1])),skewY:t=>pr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Im=t=>(t=t%360,t<0&&(t+=360),t),n1=$m,s1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),o1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Vk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:s1,scaleY:o1,scale:t=>(s1(t)+o1(t))/2,rotateX:t=>Im(pr(Math.atan2(t[6],t[5]))),rotateY:t=>Im(pr(Math.atan2(-t[2],t[0]))),rotateZ:n1,rotate:n1,skewX:t=>pr(Math.atan(t[4])),skewY:t=>pr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Pm(t){return t.includes("scale")?1:0}function Hm(t,n){if(!t||t==="none")return Pm(n);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(i)a=Vk,c=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=Hk,c=h}if(!c)return Pm(n);const u=a[n],d=c[1].split(",").map(Wk);return typeof u=="function"?u(d):d[u]}const Uk=(t,n)=>{const{transform:i="none"}=getComputedStyle(t);return Hm(i,n)};function Wk(t){return parseFloat(t.trim())}const dl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fl=new Set(dl),i1=t=>t===ul||t===jt,Yk=new Set(["x","y","z"]),Fk=dl.filter(t=>!Yk.has(t));function Xk(t){const n=[];return Fk.forEach(i=>{const a=t.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Wa={width:({x:t},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},height:({y:t},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const c=t.max-t.min;return a==="border-box"?c:c-parseFloat(n)-parseFloat(i)},top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:(t,{transform:n})=>Hm(n,"x"),y:(t,{transform:n})=>Hm(n,"y")};Wa.translateX=Wa.x;Wa.translateY=Wa.y;const _r=new Set;let Vm=!1,Um=!1,Wm=!1;function jb(){if(Um){const t=Array.from(_r).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),i=new Map;n.forEach(a=>{const c=Xk(a);c.length&&(i.set(a,c),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const c=i.get(a);c&&c.forEach(([u,d])=>{var h;(h=a.getValue(u))==null||h.set(d)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Um=!1,Vm=!1,_r.forEach(t=>t.complete(Wm)),_r.clear()}function Mb(){_r.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Um=!0)})}function qk(){Wm=!0,Mb(),jb(),Wm=!1}class jp{constructor(n,i,a,c,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=c,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(_r.add(this),Vm||(Vm=!0,ls.read(Mb),ls.resolveKeyframes(jb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:c}=this;if(n[0]===null){const u=c==null?void 0:c.get(),d=n[n.length-1];if(u!==void 0)n[0]=u;else if(a&&i){const h=a.readValue(i,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),c&&u===void 0&&c.set(n[0])}Pk(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),_r.delete(this)}cancel(){this.state==="scheduled"&&(_r.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Gk=t=>t.startsWith("--");function Tb(t,n,i){Gk(n)?t.style.setProperty(n,i):t.style[n]=i}const Kk={};function Eb(t,n){const i=Kx(t);return()=>{var a;return(a=Kk[n])!=null?a:i()}}const Qk=Eb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Db=Eb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),rc=([t,n,i,a])=>`cubic-bezier(${t}, ${n}, ${i}, ${a})`,a1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:rc([0,.65,.55,1]),circOut:rc([.55,0,1,.45]),backIn:rc([.31,.01,.66,-.59]),backOut:rc([.33,1.53,.69,.99])};function Ab(t,n){if(t)return typeof t=="function"?Db()?xb(t,n):"ease-out":cb(t)?rc(t):Array.isArray(t)?t.map(i=>Ab(i,n)||a1.easeOut):a1[t]}function Zk(t,n,i,{delay:a=0,duration:c=300,repeat:u=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const _={[n]:i};p&&(_.offset=p);const x=Ab(h,c);Array.isArray(x)&&(_.easing=x);const b={delay:a,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),t.animate(_,b)}function Mp(t){return typeof t=="function"&&"applyToOptions"in t}function Jk({type:t,...n}){var i,a;return Mp(t)&&Db()?t.applyToOptions(n):((i=n.duration)!=null||(n.duration=300),(a=n.ease)!=null||(n.ease="easeOut"),n)}class Nb extends Cp{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:c,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=n,_p(typeof n.type!="string");const g=Jk(n);this.animation=Zk(i,a,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const _=Ld(c,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),Tb(i,a,_),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a,c;const n=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(n!=null&&n.isConnected)&&((c=(a=this.animation).commitStyles)==null||c.call(a))}get duration(){var i,a;const n=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return gi(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+gi(n)}get time(){return gi(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Fo(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var n;return(n=this.manualStartTime)!=null?n:Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:c}){var u;return this.allowFlatten&&((u=this.animation.effect)==null||u.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&Qk()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),yi):c(this)}}const Rb={anticipate:sb,backInOut:nb,circInOut:ib};function e3(t){return t in Rb}function t3(t){typeof t.ease=="string"&&e3(t.ease)&&(t.ease=Rb[t.ease])}const cm=10;class n3 extends Nb{constructor(n){t3(n),Cb(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:c,element:u,...d}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const h=new Td({...d,autoplay:!1}),p=Math.max(cm,Lo.now()-this.startTime),g=Fi(0,cm,p-cm),_=h.sample(p).value,{name:x}=this.options;u&&x&&Tb(u,x,_),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,_,g),h.stop()}}const r1=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ai.test(t)||t==="0")&&!t.startsWith("url("));function s3(t){const n=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}function o3(t,n,i,a){const c=t[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],d=r1(c,n),h=r1(u,n);return!d||!h?!1:s3(t)||(i==="spring"||Mp(i))&&a}function Ym(t){t.duration=0,t.type="keyframes"}const Bb=new Set(["opacity","clipPath","filter","transform"]),i3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function a3(t){for(let n=0;n<t.length;n++)if(typeof t[n]=="string"&&i3.test(t[n]))return!0;return!1}const r3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),l3=Kx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function c3(t){var x;const{motionValue:n,name:i,repeatDelay:a,repeatType:c,damping:u,type:d,keyframes:h}=t;if(!(((x=n==null?void 0:n.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:_}=n.owner.getProps();return l3()&&i&&(Bb.has(i)||r3.has(i)&&a3(h))&&(i!=="transform"||!_)&&!g&&!a&&c!=="mirror"&&u!==0&&d!=="inertia"}const u3=40;class d3 extends Cp{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:_,...x}){var S;super(),this.stop=()=>{var C,k;this._animation&&(this._animation.stop(),(C=this.stopTimeline)==null||C.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=Lo.now();const b={autoplay:n,delay:i,type:a,repeat:c,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:_,...x},w=(_==null?void 0:_.KeyframeResolver)||jp;this.keyframeResolver=new w(h,(C,k,M)=>this.onKeyframesResolved(C,k,b,!M),p,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(n,i,a,c){var M,R;this.keyframeResolver=void 0;const{name:u,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:_}=a;this.resolvedAt=Lo.now();let x=!0;o3(n,u,d,h)||(x=!1,(Ya.instantAnimations||!p)&&(_==null||_(Ld(n,a,i))),n[0]=n[n.length-1],Ym(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>u3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},S=x&&!g&&c3(w),C=(R=(M=w.motionValue)==null?void 0:M.owner)==null?void 0:R.current;let k;if(S)try{k=new n3({...w,element:C})}catch{k=new Td(w)}else k=new Td(w);k.finished.then(()=>{this.notifyFinished()}).catch(yi),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),qk()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}class f3{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,c)=>{a&&a(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return l1(this.animations,"duration")}get iterationDuration(){return l1(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function l1(t,n){let i=0;for(let a=0;a<t.length;a++){const c=t[a][n];c!==null&&c>i&&(i=c)}return i}class h3 extends f3{then(n,i){return this.finished.finally(n).then(()=>{})}}function Lb(t,n,i,a=0,c=1){const u=Array.from(t).sort((g,_)=>g.sortNodePosition(_)).indexOf(n),d=t.size,h=(d-1)*a;return typeof i=="function"?i(u,d):c===1?u*a:h-u*a}const m3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function p3(t){const n=m3.exec(t);if(!n)return[,];const[,i,a,c]=n;return[`--${i!=null?i:a}`,c]}function Ob(t,n,i=1){const[a,c]=p3(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const d=u.trim();return Xx(d)?parseFloat(d):d}return bp(c)?Ob(c,n,i+1):c}const _3={type:"spring",stiffness:500,damping:25,restSpeed:10},g3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),y3={type:"keyframes",duration:.8},x3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},b3=(t,{keyframes:n})=>n.length>2?y3:fl.has(t)?t.startsWith("scale")?g3(n[1]):_3:x3;function zb(t,n){if(t!=null&&t.inherit&&n){const{inherit:i,...a}=t;return{...n,...a}}return t}function Tp(t,n){var a,c;const i=(c=(a=t==null?void 0:t[n])!=null?a:t==null?void 0:t.default)!=null?c:t;return i!==t?zb(i,t):i}const v3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function w3(t){for(const n in t)if(!v3.has(n))return!0;return!1}const Ep=(t,n,i,a={},c,u)=>d=>{const h=Tp(a,t)||{},p=h.delay||a.delay||0;let{elapsed:g=0}=a;g=g-Fo(p);const _={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...h,delay:-g,onUpdate:b=>{n.set(b),h.onUpdate&&h.onUpdate(b)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:n,element:u?void 0:c};w3(h)||Object.assign(_,b3(t,_)),_.duration&&(_.duration=Fo(_.duration)),_.repeatDelay&&(_.repeatDelay=Fo(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let x=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Ym(_),_.delay===0&&(x=!0)),(Ya.instantAnimations||Ya.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(x=!0,Ym(_),_.delay=0),_.allowFlatten=!h.type&&!h.ease,x&&!u&&n.get()!==void 0){const b=Ld(_.keyframes,h);if(b!==void 0){ls.update(()=>{_.onUpdate(b),_.onComplete()});return}}return h.isSync?new Td(_):new d3(_)};function c1(t){const n=[{},{}];return t==null||t.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Dp(t,n,i,a){if(typeof n=="function"){const[c,u]=c1(a);n=n(i!==void 0?i:t.custom,c,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[c,u]=c1(a);n=n(i!==void 0?i:t.custom,c,u)}return n}function gr(t,n,i){const a=t.getProps();return Dp(a,n,i!==void 0?i:a.custom,t)}const $b=new Set(["width","height","top","left","right","bottom",...dl]),u1=30,S3=t=>!isNaN(parseFloat(t)),mc={current:void 0};class k3{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var u;const c=Lo.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Lo.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=S3(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new gp);const a=this.events[n].add(i);return n==="change"?()=>{a(),ls.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return mc.current&&mc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=Lo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>u1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,u1);return Qx(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,i;(n=this.dependents)==null||n.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fa(t,n){return new k3(t,n)}const Fm=t=>Array.isArray(t);function C3(t,n,i){t.hasValue(n)?t.getValue(n).set(i):t.addValue(n,Fa(i))}function j3(t){return Fm(t)?t[t.length-1]||0:t}function M3(t,n){const i=gr(t,n);let{transitionEnd:a={},transition:c={},...u}=i||{};u={...u,...a};for(const d in u){const h=j3(u[d]);C3(t,d,h)}}const to=t=>!!(t&&t.getVelocity);function T3(t){return!!(to(t)&&t.add)}function Xm(t,n){const i=t.getValue("willChange");if(T3(i))return i.add(n);if(!i&&Ya.WillChange){const a=new Ya.WillChange("auto");t.addValue("willChange",a),a.add(n)}}function Ap(t){return t.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const E3="framerAppearId",Ib="data-"+Ap(E3);function Pb(t){return t.props[Ib]}function D3({protectedKeys:t,needsAnimating:n},i){const a=t.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Np(t,n,{delay:i=0,transitionOverride:a,type:c}={}){var b;let{transition:u,transitionEnd:d,...h}=n;const p=t.getDefaultTransition();u=u?zb(u,p):p;const g=u==null?void 0:u.reduceMotion;a&&(u=a);const _=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const w in h){const S=t.getValue(w,(b=t.latestValues[w])!=null?b:null),C=h[w];if(C===void 0||x&&D3(x,w))continue;const k={delay:i,...Tp(u||{},w)},M=S.get();if(M!==void 0&&!S.isAnimating()&&!Array.isArray(C)&&C===M&&!k.velocity){ls.update(()=>S.set(C));continue}let R=!1;if(window.MotionHandoffAnimation){const $=Pb(t);if($){const F=window.MotionHandoffAnimation($,w,ls);F!==null&&(k.startTime=F,R=!0)}}Xm(t,w);const A=g!=null?g:t.shouldReduceMotion;S.start(Ep(w,S,C,A&&$b.has(w)?{type:!1}:k,t,R));const T=S.animation;T&&_.push(T)}if(d){const w=()=>ls.update(()=>{d&&M3(t,d)});_.length?Promise.all(_).then(w):w()}return _}function qm(t,n,i={}){var p;const a=gr(t,n,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(c=i.transitionOverride);const u=a?()=>Promise.all(Np(t,a,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:x,staggerDirection:b}=c;return A3(t,n,g,_,x,b,i)}:()=>Promise.resolve(),{when:h}=c;if(h){const[g,_]=h==="beforeChildren"?[u,d]:[d,u];return g().then(()=>_())}else return Promise.all([u(),d(i.delay)])}function A3(t,n,i=0,a=0,c=0,u=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",n),h.push(qm(p,n,{...d,delay:i+(typeof a=="function"?0:a)+Lb(t.variantChildren,p,a,c,u)}).then(()=>p.notify("AnimationComplete",n)));return Promise.all(h)}function N3(t,n,i={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const c=n.map(u=>qm(t,u,i));a=Promise.all(c)}else if(typeof n=="string")a=qm(t,n,i);else{const c=typeof n=="function"?gr(t,n,i.custom):n;a=Promise.all(Np(t,c,i))}return a.then(()=>{t.notify("AnimationComplete",n)})}const R3={test:t=>t==="auto",parse:t=>t},Hb=t=>n=>n.test(t),Vb=[ul,jt,Yi,Ha,rk,ak,R3],d1=t=>Vb.find(Hb(t));function B3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Gx(t):!0}const L3=new Set(["brightness","contrast","saturate","opacity"]);function O3(t){const[n,i]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=i.match(vp)||[];if(!a)return t;const c=i.replace(a,"");let u=L3.has(n)?1:0;return a!==i&&(u*=100),n+"("+u+c+")"}const z3=/\b([a-z-]*)\(.*?\)/gu,Gm={...Ai,getAnimatableNone:t=>{const n=t.match(z3);return n?n.map(O3).join(" "):t}},Km={...Ai,getAnimatableNone:t=>{const n=Ai.parse(t);return Ai.createTransformer(t)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},f1={...ul,transform:Math.round},$3={rotate:Ha,rotateX:Ha,rotateY:Ha,rotateZ:Ha,scale:sd,scaleX:sd,scaleY:sd,scaleZ:sd,skew:Ha,skewX:Ha,skewY:Ha,distance:jt,translateX:jt,translateY:jt,translateZ:jt,x:jt,y:jt,z:jt,perspective:jt,transformPerspective:jt,opacity:yc,originX:Qy,originY:Qy,originZ:jt},Rp={borderWidth:jt,borderTopWidth:jt,borderRightWidth:jt,borderBottomWidth:jt,borderLeftWidth:jt,borderRadius:jt,borderTopLeftRadius:jt,borderTopRightRadius:jt,borderBottomRightRadius:jt,borderBottomLeftRadius:jt,width:jt,maxWidth:jt,height:jt,maxHeight:jt,top:jt,right:jt,bottom:jt,left:jt,inset:jt,insetBlock:jt,insetBlockStart:jt,insetBlockEnd:jt,insetInline:jt,insetInlineStart:jt,insetInlineEnd:jt,padding:jt,paddingTop:jt,paddingRight:jt,paddingBottom:jt,paddingLeft:jt,paddingBlock:jt,paddingBlockStart:jt,paddingBlockEnd:jt,paddingInline:jt,paddingInlineStart:jt,paddingInlineEnd:jt,margin:jt,marginTop:jt,marginRight:jt,marginBottom:jt,marginLeft:jt,marginBlock:jt,marginBlockStart:jt,marginBlockEnd:jt,marginInline:jt,marginInlineStart:jt,marginInlineEnd:jt,fontSize:jt,backgroundPositionX:jt,backgroundPositionY:jt,...$3,zIndex:f1,fillOpacity:yc,strokeOpacity:yc,numOctaves:f1},I3={...Rp,color:Ks,backgroundColor:Ks,outlineColor:Ks,fill:Ks,stroke:Ks,borderColor:Ks,borderTopColor:Ks,borderRightColor:Ks,borderBottomColor:Ks,borderLeftColor:Ks,filter:Gm,WebkitFilter:Gm,mask:Km,WebkitMask:Km},Ub=t=>I3[t],P3=new Set([Gm,Km]);function Wb(t,n){let i=Ub(t);return P3.has(i)||(i=Ai),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const H3=new Set(["auto","none","0"]);function V3(t,n,i){let a=0,c;for(;a<t.length&&!c;){const u=t[a];typeof u=="string"&&!H3.has(u)&&cl(u).values.length&&(c=t[a]),a++}if(c&&i)for(const u of n)t[u]=Wb(i,c)}class U3 extends jp{constructor(n,i,a,c,u){super(n,i,a,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let _=0;_<n.length;_++){let x=n[_];if(typeof x=="string"&&(x=x.trim(),bp(x))){const b=Ob(x,i.current);b!==void 0&&(n[_]=b),_===n.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!$b.has(a)||n.length!==2)return;const[c,u]=n,d=d1(c),h=d1(u),p=Ky(c),g=Ky(u);if(p!==g&&Wa[a]){this.needsMeasurement=!0;return}if(d!==h)if(i1(d)&&i1(h))for(let _=0;_<n.length;_++){const x=n[_];typeof x=="string"&&(n[_]=parseFloat(x))}else Wa[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let c=0;c<n.length;c++)(n[c]===null||B3(n[c]))&&a.push(c);a.length&&V3(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wa[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&n.getValue(a,c).jump(c,!1)}measureEndState(){var h;const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const c=n.getValue(i);c&&c.jump(this.measuredOrigin,!1);const u=a.length-1,d=a[u];a[u]=Wa[i](n.measureViewportBox(),window.getComputedStyle(n.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{n.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function Bp(t,n,i){var a;if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let c=document;n&&(c=n.current);const u=(a=i==null?void 0:i[t])!=null?a:c.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t).filter(c=>c!=null)}const Yb=(t,n)=>n&&typeof t=="number"?n.transform(t):t;function fd(t){return qx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Lp}=ub(queueMicrotask,!1),Ei={x:!1,y:!1};function Fb(){return Ei.x||Ei.y}function W3(t){return t==="x"||t==="y"?Ei[t]?null:(Ei[t]=!0,()=>{Ei[t]=!1}):Ei.x||Ei.y?null:(Ei.x=Ei.y=!0,()=>{Ei.x=Ei.y=!1})}function Xb(t,n){const i=Bp(t),a=new AbortController,c={passive:!0,...n,signal:a.signal};return[i,c,()=>a.abort()]}function Y3(t){return!(t.pointerType==="touch"||Fb())}function F3(t,n,i={}){const[a,c,u]=Xb(t,i);return a.forEach(d=>{let h=!1,p=!1,g;const _=()=>{d.removeEventListener("pointerleave",S)},x=k=>{g&&(g(k),g=void 0),_()},b=k=>{h=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),p&&(p=!1,x(k))},w=()=>{h=!0,window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",b,c)},S=k=>{if(k.pointerType!=="touch"){if(h){p=!0;return}x(k)}},C=k=>{if(!Y3(k))return;p=!1;const M=n(d,k);typeof M=="function"&&(g=M,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",C,c),d.addEventListener("pointerdown",w,c)}),u}const qb=(t,n)=>n?t===n?!0:qb(t,n.parentElement):!1,Op=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,X3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function q3(t){return X3.has(t.tagName)||t.isContentEditable===!0}const G3=new Set(["INPUT","SELECT","TEXTAREA"]);function K3(t){return G3.has(t.tagName)||t.isContentEditable===!0}const hd=new WeakSet;function h1(t){return n=>{n.key==="Enter"&&t(n)}}function um(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Q3=(t,n)=>{const i=t.currentTarget;if(!i)return;const a=h1(()=>{if(hd.has(i))return;um(i,"down");const c=h1(()=>{um(i,"up")}),u=()=>um(i,"cancel");i.addEventListener("keyup",c,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function m1(t){return Op(t)&&!Fb()}const p1=new WeakSet;function Z3(t,n,i={}){const[a,c,u]=Xb(t,i),d=h=>{const p=h.currentTarget;if(!m1(h)||p1.has(h))return;hd.add(p),i.stopPropagation&&p1.add(h);const g=n(p,h),_=(w,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",b),hd.has(p)&&hd.delete(p),m1(w)&&typeof g=="function"&&g(w,{success:S})},x=w=>{_(w,p===window||p===document||i.useGlobalTarget||qb(p,w.target))},b=w=>{_(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",b,c)};return a.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),fd(h)&&(h.addEventListener("focus",g=>Q3(g,c)),!q3(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function Od(t){return qx(t)&&"ownerSVGElement"in t}const md=new WeakMap;let Va;const Gb=(t,n,i)=>(a,c)=>c&&c[0]?c[0][t+"Size"]:Od(a)&&"getBBox"in a?a.getBBox()[n]:a[i],J3=Gb("inline","width","offsetWidth"),eC=Gb("block","height","offsetHeight");function tC({target:t,borderBoxSize:n}){var i;(i=md.get(t))==null||i.forEach(a=>{a(t,{get width(){return J3(t,n)},get height(){return eC(t,n)}})})}function nC(t){t.forEach(tC)}function sC(){typeof ResizeObserver>"u"||(Va=new ResizeObserver(nC))}function oC(t,n){Va||sC();const i=Bp(t);return i.forEach(a=>{let c=md.get(a);c||(c=new Set,md.set(a,c)),c.add(n),Va==null||Va.observe(a)}),()=>{i.forEach(a=>{const c=md.get(a);c==null||c.delete(n),c!=null&&c.size||Va==null||Va.unobserve(a)})}}const pd=new Set;let sl;function iC(){sl=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};pd.forEach(n=>n(t))},window.addEventListener("resize",sl)}function aC(t){return pd.add(t),sl||iC(),()=>{pd.delete(t),!pd.size&&typeof sl=="function"&&(window.removeEventListener("resize",sl),sl=void 0)}}function _1(t,n){return typeof t=="function"?aC(t):oC(t,n)}function Kb(t){return Od(t)&&t.tagName==="svg"}function rC(...t){const n=!Array.isArray(t[0]),i=n?0:-1,a=t[0+i],c=t[1+i],u=t[2+i],d=t[3+i],h=wb(c,u,d);return n?h(a):h}const lC=[...Vb,Ks,Ai],cC=t=>lC.find(Hb(t)),g1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ol=()=>({x:g1(),y:g1()}),y1=()=>({min:0,max:0}),Gs=()=>({x:y1(),y:y1()}),bc=new WeakMap;function zd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function vc(t){return typeof t=="string"||Array.isArray(t)}const zp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$p=["initial",...zp];function $d(t){return zd(t.animate)||$p.some(n=>vc(t[n]))}function Qb(t){return!!($d(t)||t.variants)}function uC(t,n,i){for(const a in n){const c=n[a],u=i[a];if(to(c))t.addValue(a,c);else if(to(u))t.addValue(a,Fa(c,{owner:t}));else if(u!==c)if(t.hasValue(a)){const d=t.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(a);t.addValue(a,Fa(d!==void 0?d:c,{owner:t}))}}for(const a in i)n[a]===void 0&&t.removeValue(a);return n}const Qm={current:null},Zb={current:!1},dC=typeof window<"u";function fC(){if(Zb.current=!0,!!dC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Qm.current=t.matches;t.addEventListener("change",n),n()}else Qm.current=!1}const x1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ed={};function Jb(t){Ed=t}function hC(){return Ed}class e5{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Lo.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ls.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=_,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=$d(i),this.isVariantNode=Qb(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in b){const S=b[w];g[w]!==void 0&&to(S)&&S.set(g[w])}}mount(n){var i,a,c;if(this.hasBeenMounted)for(const u in this.initialValues)(i=this.values.get(u))==null||i.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=n,bc.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Zb.current||fC(),this.shouldReduceMotion=Qm.current),this.shouldSkipAnimations=(a=this.skipAnimationsConfig)!=null?a:!1,(c=this.parent)==null||c.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var n;this.projection&&this.projection.unmount(),ha(this.notifyUpdate),ha(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(n){var i;this.children.add(n),(i=this.enteringChildren)!=null||(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&Bb.has(n)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:_}=i.accelerate,x=new Nb({element:this.current,name:n,keyframes:h,times:p,ease:g,duration:Fo(_)}),b=d(x);this.valueSubscriptions.set(n,()=>{b(),x.cancel()});return}const a=fl.has(n);a&&this.onBindTransform&&this.onBindTransform();const c=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&ls.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Ed){const i=Ed[n];if(!i)continue;const{isEnabled:a,Feature:c}=i;if(!this.features[n]&&c&&a(this.props)&&(this.features[n]=new c(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Gs()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<x1.length;a++){const c=x1[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,d=n[u];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=uC(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=Fa(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){var c;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(c=this.getBaseTargetFromProps(this.props,n))!=null?c:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(Xx(a)||Gx(a))?a=parseFloat(a):!cC(a)&&Ai.test(i)&&(a=Wb(n,i)),this.setBaseTarget(n,to(a)?a.get():a)),to(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const d=Dp(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);d&&(a=d[n])}if(i&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,n);return c!==void 0&&!to(c)?c:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new gp),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Lp.render(this.render)}}class t5 extends e5{constructor(){super(...arguments),this.KeyframeResolver=U3}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;to(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Xa{constructor(n){this.isMounted=!1,this.node=n}update(){}}function n5({top:t,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:t,max:a}}}function mC({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function pC(t,n){if(!n)return t;const i=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function dm(t){return t===void 0||t===1}function Zm({scale:t,scaleX:n,scaleY:i}){return!dm(t)||!dm(n)||!dm(i)}function fr(t){return Zm(t)||s5(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function s5(t){return b1(t.x)||b1(t.y)}function b1(t){return t&&t!=="0%"}function Dd(t,n,i){const a=t-i,c=n*a;return i+c}function v1(t,n,i,a,c){return c!==void 0&&(t=Dd(t,c,a)),Dd(t,i,a)+n}function Jm(t,n=0,i=1,a,c){t.min=v1(t.min,n,i,a,c),t.max=v1(t.max,n,i,a,c)}function o5(t,{x:n,y:i}){Jm(t.x,n.translate,n.scale,n.originPoint),Jm(t.y,i.translate,i.scale,i.originPoint)}const w1=.999999999999,S1=1.0000000000001;function _C(t,n,i,a=!1){var h;const c=i.length;if(!c)return;n.x=n.y=1;let u,d;for(let p=0;p<c;p++){u=i[p],d=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Ui(t.x,-u.scroll.offset.x),Ui(t.y,-u.scroll.offset.y)),d&&(n.x*=d.x.scale,n.y*=d.y.scale,o5(t,d)),a&&fr(u.latestValues)&&_d(t,u.latestValues,(h=u.layout)==null?void 0:h.layoutBox))}n.x<S1&&n.x>w1&&(n.x=1),n.y<S1&&n.y>w1&&(n.y=1)}function Ui(t,n){t.min+=n,t.max+=n}function k1(t,n,i,a,c=.5){const u=hs(t.min,t.max,c);Jm(t,n,i,u,a)}function C1(t,n){return typeof t=="string"?parseFloat(t)/100*(n.max-n.min):t}function _d(t,n,i){const a=i!=null?i:t;k1(t.x,C1(n.x,a.x),n.scaleX,n.scale,n.originX),k1(t.y,C1(n.y,a.y),n.scaleY,n.scale,n.originY)}function i5(t,n){return n5(pC(t.getBoundingClientRect(),n))}function gC(t,n,i){const a=i5(t,i),{scroll:c}=n;return c&&(Ui(a.x,c.offset.x),Ui(a.y,c.offset.y)),a}const yC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xC=dl.length;function bC(t,n,i){let a="",c=!0;for(let u=0;u<xC;u++){const d=dl[u],h=t[d];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);p=d.startsWith("scale")?g===1:g===0}if(!p||i){const g=Yb(h,Rp[d]);if(!p){c=!1;const _=yC[d]||d;a+=`${_}(${g}) `}i&&(n[d]=g)}}return a=a.trim(),i?a=i(n,c?"":a):c&&(a="none"),a}function Ip(t,n,i){const{style:a,vars:c,transformOrigin:u}=t;let d=!1,h=!1;for(const p in n){const g=n[p];if(fl.has(p)){d=!0;continue}else if(fb(p)){c[p]=g;continue}else{const _=Yb(g,Rp[p]);p.startsWith("origin")?(h=!0,u[p]=_):a[p]=_}}if(n.transform||(d||i?a.transform=bC(n,t.transform,i):a.transform&&(a.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:_=0}=u;a.transformOrigin=`${p} ${g} ${_}`}}function a5(t,{style:n,vars:i},a,c){const u=t.style;let d;for(d in n)u[d]=n[d];c==null||c.applyProjectionStyles(u,a);for(d in i)u.setProperty(d,i[d])}function j1(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const oc={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(jt.test(t))t=parseFloat(t);else return t;const i=j1(t,n.target.x),a=j1(t,n.target.y);return`${i}% ${a}%`}},vC={correct:(t,{treeScale:n,projectionDelta:i})=>{const a=t,c=Ai.parse(t);if(c.length>5)return a;const u=Ai.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*n.x,p=i.y.scale*n.y;c[0+d]/=h,c[1+d]/=p;const g=hs(h,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),u(c)}},ep={borderRadius:{...oc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oc,borderTopRightRadius:oc,borderBottomLeftRadius:oc,borderBottomRightRadius:oc,boxShadow:vC};function r5(t,{layout:n,layoutId:i}){return fl.has(t)||t.startsWith("origin")||(n||i!==void 0)&&(!!ep[t]||t==="opacity")}function Pp(t,n,i){var d;const a=t.style,c=n==null?void 0:n.style,u={};if(!a)return u;for(const h in a)(to(a[h])||c&&to(c[h])||r5(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(u[h]=a[h]);return u}function wC(t){return window.getComputedStyle(t)}class l5 extends t5{constructor(){super(...arguments),this.type="html",this.renderInstance=a5}readValueFromInstance(n,i){var a;if(fl.has(i))return(a=this.projection)!=null&&a.isProjecting?Pm(i):Uk(n,i);{const c=wC(n),u=(fb(i)?c.getPropertyValue(i):c[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:i}){return i5(n,i)}build(n,i,a){Ip(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Pp(n,i,a)}}function SC(t,n){return t in n}class kC extends e5{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(SC(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return Gs()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const CC={offset:"stroke-dashoffset",array:"stroke-dasharray"},jC={offset:"strokeDashoffset",array:"strokeDasharray"};function MC(t,n,i=1,a=0,c=!0){t.pathLength=1;const u=c?CC:jC;t[u.offset]=`${-a}`,t[u.array]=`${n} ${i}`}const TC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function c5(t,{attrX:n,attrY:i,attrScale:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,g,_){var w,S;if(Ip(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:b}=t;x.transform&&(b.transform=x.transform,delete x.transform),(b.transform||x.transformOrigin)&&(b.transformOrigin=(w=x.transformOrigin)!=null?w:"50% 50%",delete x.transformOrigin),b.transform&&(b.transformBox=(S=_==null?void 0:_.transformBox)!=null?S:"fill-box",delete x.transformBox);for(const C of TC)x[C]!==void 0&&(b[C]=x[C],delete x[C]);n!==void 0&&(x.x=n),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),c!==void 0&&MC(x,c,u,d,!1)}const u5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),d5=t=>typeof t=="string"&&t.toLowerCase()==="svg";function EC(t,n,i,a){a5(t,n,void 0,a);for(const c in n.attrs)t.setAttribute(u5.has(c)?c:Ap(c),n.attrs[c])}function f5(t,n,i){const a=Pp(t,n,i);for(const c in t)if(to(t[c])||to(n[c])){const u=dl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[u]=t[c]}return a}class h5 extends t5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Gs}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(fl.has(i)){const a=Ub(i);return a&&a.default||0}return i=u5.has(i)?i:Ap(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return f5(n,i,a)}build(n,i,a){c5(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,c){EC(n,i,a,c)}mount(n){this.isSVGTag=d5(n.tagName),super.mount(n)}}const DC=$p.length;function m5(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?m5(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const n={};for(let i=0;i<DC;i++){const a=$p[i],c=t.props[a];(vc(c)||c===!1)&&(n[a]=c)}return n}function p5(t,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(n[a]!==t[a])return!1;return!0}const AC=[...zp].reverse(),NC=zp.length;function RC(t){return n=>Promise.all(n.map(({animation:i,options:a})=>N3(t,i,a)))}function BC(t){let n=RC(t),i=M1(),a=!0,c=!1;const u=g=>(_,x)=>{var w;const b=gr(t,x,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:C,...k}=b;_={..._,...k,...C}}return _};function d(g){n=g(t)}function h(g){const{props:_}=t,x=m5(t.parent)||{},b=[],w=new Set;let S={},C=1/0;for(let M=0;M<NC;M++){const R=AC[M],A=i[R],T=_[R]!==void 0?_[R]:x[R],$=vc(T),F=R===g?A.isActive:null;F===!1&&(C=M);let U=T===x[R]&&T!==_[R]&&$;if(U&&(a||c)&&t.manuallyAnimateOnMount&&(U=!1),A.protectedKeys={...S},!A.isActive&&F===null||!T&&!A.prevProp||zd(T)||typeof T=="boolean")continue;if(R==="exit"&&A.isActive&&F!==!0){A.prevResolvedValues&&(S={...S,...A.prevResolvedValues});continue}const Q=LC(A.prevProp,T);let X=Q||R===g&&A.isActive&&!U&&$||M>C&&$,ne=!1;const le=Array.isArray(T)?T:[T];let q=le.reduce(u(R),{});F===!1&&(q={});const{prevResolvedValues:te={}}=A,ue={...te,...q},ye=G=>{X=!0,w.has(G)&&(ne=!0,w.delete(G)),A.needsAnimating[G]=!0;const ve=t.getValue(G);ve&&(ve.liveStyle=!1)};for(const G in ue){const ve=q[G],Me=te[G];if(S.hasOwnProperty(G))continue;let B=!1;Fm(ve)&&Fm(Me)?B=!p5(ve,Me):B=ve!==Me,B?ve!=null?ye(G):w.add(G):ve!==void 0&&w.has(G)?ye(G):A.protectedKeys[G]=!0}A.prevProp=T,A.prevResolvedValues=q,A.isActive&&(S={...S,...q}),(a||c)&&t.blockInitialAnimation&&(X=!1);const z=U&&Q;X&&(!z||ne)&&b.push(...le.map(G=>{const ve={type:R};if(typeof G=="string"&&(a||c)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Me}=t,B=gr(Me,G);if(Me.enteringChildren&&B){const{delayChildren:P}=B.transition||{};ve.delay=Lb(Me.enteringChildren,t,P)}}return{animation:G,options:ve}}))}if(w.size){const M={};if(typeof _.initial!="boolean"){const R=gr(t,Array.isArray(_.initial)?_.initial[0]:_.initial);R&&R.transition&&(M.transition=R.transition)}w.forEach(R=>{const A=t.getBaseTarget(R),T=t.getValue(R);T&&(T.liveStyle=!0),M[R]=A!=null?A:null}),b.push({animation:M})}let k=!!b.length;return a&&(_.initial===!1||_.initial===_.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,c=!1,k?n(b):Promise.resolve()}function p(g,_){var b;if(i[g].isActive===_)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,_)}),i[g].isActive=_;const x=h(g);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=M1(),c=!0}}}function LC(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!p5(n,t):!1}function dr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function M1(){return{animate:dr(!0),whileInView:dr(),whileHover:dr(),whileTap:dr(),whileDrag:dr(),whileFocus:dr(),exit:dr()}}function tp(t,n){t.min=n.min,t.max=n.max}function Ti(t,n){tp(t.x,n.x),tp(t.y,n.y)}function T1(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}const _5=1e-4,OC=1-_5,zC=1+_5,g5=.01,$C=0-g5,IC=0+g5;function Oo(t){return t.max-t.min}function PC(t,n,i){return Math.abs(t-n)<=i}function E1(t,n,i,a=.5){t.origin=a,t.originPoint=hs(n.min,n.max,t.origin),t.scale=Oo(i)/Oo(n),t.translate=hs(i.min,i.max,t.origin)-t.originPoint,(t.scale>=OC&&t.scale<=zC||isNaN(t.scale))&&(t.scale=1),(t.translate>=$C&&t.translate<=IC||isNaN(t.translate))&&(t.translate=0)}function pc(t,n,i,a){E1(t.x,n.x,i.x,a?a.originX:void 0),E1(t.y,n.y,i.y,a?a.originY:void 0)}function D1(t,n,i,a=0){const c=a?hs(i.min,i.max,a):i.min;t.min=c+n.min,t.max=t.min+Oo(n)}function HC(t,n,i,a){D1(t.x,n.x,i.x,a==null?void 0:a.x),D1(t.y,n.y,i.y,a==null?void 0:a.y)}function A1(t,n,i,a=0){const c=a?hs(i.min,i.max,a):i.min;t.min=n.min-c,t.max=t.min+Oo(n)}function Ad(t,n,i,a){A1(t.x,n.x,i.x,a==null?void 0:a.x),A1(t.y,n.y,i.y,a==null?void 0:a.y)}function N1(t,n,i,a,c){return t-=n,t=Dd(t,1/i,a),c!==void 0&&(t=Dd(t,1/c,a)),t}function VC(t,n=0,i=1,a=.5,c,u=t,d=t){if(Yi.test(n)&&(n=parseFloat(n),n=hs(d.min,d.max,n/100)-d.min),typeof n!="number")return;let h=hs(u.min,u.max,a);t===u&&(h-=n),t.min=N1(t.min,n,i,h,c),t.max=N1(t.max,n,i,h,c)}function R1(t,n,[i,a,c],u,d){VC(t,n[i],n[a],n[c],n.scale,u,d)}const UC=["x","scaleX","originX"],WC=["y","scaleY","originY"];function B1(t,n,i,a){R1(t.x,n,UC,i?i.x:void 0,a?a.x:void 0),R1(t.y,n,WC,i?i.y:void 0,a?a.y:void 0)}function L1(t){return t.translate===0&&t.scale===1}function y5(t){return L1(t.x)&&L1(t.y)}function O1(t,n){return t.min===n.min&&t.max===n.max}function YC(t,n){return O1(t.x,n.x)&&O1(t.y,n.y)}function z1(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function x5(t,n){return z1(t.x,n.x)&&z1(t.y,n.y)}function $1(t){return Oo(t.x)/Oo(t.y)}function I1(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}function Vi(t){return[t("x"),t("y")]}function FC(t,n,i){let a="";const c=t.x.translate/n.x,u=t.y.translate/n.y,d=(i==null?void 0:i.z)||0;if((c||u||d)&&(a=`translate3d(${c}px, ${u}px, ${d}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:g,rotate:_,rotateX:x,rotateY:b,skewX:w,skewY:S}=i;g&&(a=`perspective(${g}px) ${a}`),_&&(a+=`rotate(${_}deg) `),x&&(a+=`rotateX(${x}deg) `),b&&(a+=`rotateY(${b}deg) `),w&&(a+=`skewX(${w}deg) `),S&&(a+=`skewY(${S}deg) `)}const h=t.x.scale*n.x,p=t.y.scale*n.y;return(h!==1||p!==1)&&(a+=`scale(${h}, ${p})`),a||"none"}const b5=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],XC=b5.length,P1=t=>typeof t=="string"?parseFloat(t):t,H1=t=>typeof t=="number"||jt.test(t);function qC(t,n,i,a,c,u){var d,h,p,g;c?(t.opacity=hs(0,(d=i.opacity)!=null?d:1,GC(a)),t.opacityExit=hs((h=n.opacity)!=null?h:1,0,KC(a))):u&&(t.opacity=hs((p=n.opacity)!=null?p:1,(g=i.opacity)!=null?g:1,a));for(let _=0;_<XC;_++){const x=b5[_];let b=V1(n,x),w=V1(i,x);if(b===void 0&&w===void 0)continue;b||(b=0),w||(w=0),b===0||w===0||H1(b)===H1(w)?(t[x]=Math.max(hs(P1(b),P1(w),a),0),(Yi.test(w)||Yi.test(b))&&(t[x]+="%")):t[x]=w}(n.rotate||i.rotate)&&(t.rotate=hs(n.rotate||0,i.rotate||0,a))}function V1(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const GC=v5(0,.5,ob),KC=v5(.5,.95,yi);function v5(t,n,i){return a=>a<t?0:a>n?1:i(ll(t,n,a))}function w5(t,n,i){const a=to(t)?t:Fa(t);return a.start(Ep("",a,n,i)),a.animation}function wc(t,n,i,a={passive:!0}){return t.addEventListener(n,i,a),()=>t.removeEventListener(n,i)}const QC=(t,n)=>t.depth-n.depth;class ZC{constructor(){this.children=[],this.isDirty=!1}add(n){pp(this.children,n),this.isDirty=!0}remove(n){rl(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(QC),this.isDirty=!1,this.children.forEach(n)}}function JC(t,n){const i=Lo.now(),a=({timestamp:c})=>{const u=c-i;u>=n&&(ha(a),t(u-n))};return ls.setup(a,!0),()=>ha(a)}function gd(t){return to(t)?t.get():t}class ej{constructor(){this.members=[]}add(n){pp(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const c=a.instance;(!c||c.isConnected===!1)&&!a.snapshot&&(rl(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(rl(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){var i;for(let a=this.members.indexOf(n)-1;a>=0;a--){const c=this.members[a];if(c.isPresent!==!1&&((i=c.instance)==null?void 0:i.isConnected)!==!1)return this.promote(c),!0}return!1}promote(n,i){var c;const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:u}=a.options,{layoutDependency:d}=n.options;(u===void 0||u!==d)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),(c=n.root)!=null&&c.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{var i,a,c,u,d;(a=(i=n.options).onExitComplete)==null||a.call(i),(d=(c=n.resumingFrom)==null?void 0:(u=c.options).onExitComplete)==null||d.call(u)})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){var n;(n=this.lead)!=null&&n.snapshot&&(this.lead.snapshot=void 0)}}const yd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},fm=["","X","Y","Z"],tj=1e3;let nj=0;function hm(t,n,i,a){const{latestValues:c}=n;c[t]&&(i[t]=c[t],n.setStaticValue(t,0),a&&(a[t]=0))}function S5(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const i=Pb(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",ls,!(c||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&S5(a)}function k5({attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},h=n==null?void 0:n()){this.id=nj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ij),this.nodes.forEach(dj),this.nodes.forEach(fj),this.nodes.forEach(aj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new ZC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new gp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Od(d)&&!Kb(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let _,x=0;const b=()=>this.root.updateBlockedByResize=!1;ls.read(()=>{x=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,_&&_(),_=JC(b,250),yd.hasAnimatedSinceResize&&(yd.hasAnimatedSinceResize=!1,this.nodes.forEach(Y1)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:x,hasRelativeLayoutChanged:b,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||gj,{onLayoutAnimationStart:C,onLayoutAnimationComplete:k}=g.getProps(),M=!this.targetLayout||!x5(this.targetLayout,w),R=!x&&b;if(this.options.layoutRoot||this.resumeFrom||R||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...Tp(S,"layout"),onPlay:C,onComplete:k};(g.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(_,R)}else x||Y1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ha(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&S5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const x=this.path[_];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(lj),this.nodes.forEach(U1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(W1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(cj),this.nodes.forEach(uj),this.nodes.forEach(sj),this.nodes.forEach(oj)):this.nodes.forEach(W1),this.clearAllSnapshots();const h=Lo.now();yo.delta=Fi(0,1e3/60,h-yo.timestamp),yo.timestamp=h,yo.isProcessing=!0,om.update.process(yo),om.preRender.process(yo),om.render.process(yo),yo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rj),this.sharedNodes.forEach(mj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ls.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ls.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Oo(this.snapshot.measuredBox.x)&&!Oo(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Gs()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!y5(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||fr(this.latestValues)||_)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),yj(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return Gs();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(xj))){const{scroll:_}=this.root;_&&(Ui(h.x,_.offset.x),Ui(h.y,_.offset.y))}return h}removeElementScroll(d){var p;const h=Gs();if(Ti(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:x,options:b}=_;_!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ti(h,d),Ui(h.x,x.offset.x),Ui(h.y,x.offset.y))}return h}applyTransform(d,h=!1,p){var _,x;const g=p||Gs();Ti(g,d);for(let b=0;b<this.path.length;b++){const w=this.path[b];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Ui(g.x,-w.scroll.offset.x),Ui(g.y,-w.scroll.offset.y)),fr(w.latestValues)&&_d(g,w.latestValues,(_=w.layout)==null?void 0:_.layoutBox)}return fr(this.latestValues)&&_d(g,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),g}removeTransform(d){var p;const h=Gs();Ti(h,d);for(let g=0;g<this.path.length;g++){const _=this.path[g];if(!fr(_.latestValues))continue;let x;_.instance&&(Zm(_.latestValues)&&_.updateSnapshot(),x=Gs(),Ti(x,_.measurePageBox())),B1(h,_.latestValues,(p=_.snapshot)==null?void 0:p.layoutBox,x)}return fr(this.latestValues)&&B1(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:x}=this.options;if(!this.layout||!(_||x))return;this.resolvedRelativeTargetAt=yo.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Gs(),this.targetWithTransforms=Gs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ti(this.target,this.layout.layoutBox),o5(this.target,this.targetDelta)):Ti(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zm(this.parent.latestValues)||s5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Gs(),this.relativeTargetOrigin=Gs(),Ad(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Ti(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===yo.timestamp&&(p=!1),p)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Ti(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;_C(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Gs());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(T1(this.prevProjectionDelta.x,this.projectionDelta.x),T1(this.prevProjectionDelta.y,this.projectionDelta.y)),pc(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==b||!I1(this.projectionDelta.x,this.prevProjectionDelta.x)||!I1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ol(),this.projectionDelta=ol(),this.projectionDeltaWithTransform=ol()}setAnimationOrigin(d,h=!1){const p=this.snapshot,g=p?p.latestValues:{},_={...this.latestValues},x=ol();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=Gs(),w=p?p.source:void 0,S=this.layout?this.layout.source:void 0,C=w!==S,k=this.getStack(),M=!k||k.members.length<=1,R=!!(C&&!M&&this.options.crossfade===!0&&!this.path.some(_j));this.animationProgress=0;let A;this.mixTargetDelta=T=>{const $=T/1e3;F1(x.x,d.x,$),F1(x.y,d.y,$),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ad(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),pj(this.relativeTarget,this.relativeTargetOrigin,b,$),A&&YC(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=Gs()),Ti(A,this.relativeTarget)),C&&(this.animationValues=_,qC(_,g,this.latestValues,$,R,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(ha(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ls.update(()=>{yd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fa(0)),this.motionValue.jump(0,!1),this.currentAnimation=w5(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),d.onUpdate&&d.onUpdate(_)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:_}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&C5(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Gs();const x=Oo(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+x;const b=Oo(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Ti(h,p),_d(h,_),pc(this.projectionDeltaWithTransform,this.layoutCorrected,h,_)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new ej),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&hm("z",d,g,this.animationValues);for(let _=0;_<fm.length;_++)hm(`rotate${fm[_]}`,d,g,this.animationValues),hm(`skew${fm[_]}`,d,g,this.animationValues);d.render();for(const _ in g)d.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);d.scheduleRender()}applyProjectionStyles(d,h){var S,C;if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=gd(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=gd(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!fr(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=FC(this.projectionDeltaWithTransform,this.treeScale,_);p&&(x=p(_,x)),d.transform=x;const{x:b,y:w}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?(C=(S=_.opacity)!=null?S:this.latestValues.opacity)!=null?C:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:d.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in ep){if(_[k]===void 0)continue;const{correct:M,applyTo:R,isCSSVariable:A}=ep[k],T=x==="none"?_[k]:M(_[k],g);if(R){const $=R.length;for(let F=0;F<$;F++)d[R[F]]=T}else A?this.options.visualElement.renderState.vars[k]=T:d[k]=T}this.options.layoutId&&(d.pointerEvents=g===this?gd(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(U1),this.root.sharedNodes.clear()}}}function sj(t){t.updateLayout()}function oj(t){var i;const n=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=t.layout,{animationType:u}=t.options,d=n.source!==t.layout.source;if(u==="size")Vi(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Oo(b);b.min=a[x].min,b.max=b.min+w});else if(u==="x"||u==="y"){const x=u==="x"?"y":"x";tp(d?n.measuredBox[x]:n.layoutBox[x],a[x])}else C5(u,n.layoutBox,a)&&Vi(x=>{const b=d?n.measuredBox[x]:n.layoutBox[x],w=Oo(a[x]);b.max=b.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=ol();pc(h,a,n.layoutBox);const p=ol();d?pc(p,t.applyTransform(c,!0),n.measuredBox):pc(p,a,n.layoutBox);const g=!y5(h);let _=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:w}=x;if(b&&w){const S=t.options.layoutAnchor||void 0,C=Gs();Ad(C,n.layoutBox,b.layoutBox,S);const k=Gs();Ad(k,a,w.layoutBox,S),x5(C,k)||(_=!0),x.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=C,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:n,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function ij(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function aj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function rj(t){t.clearSnapshot()}function U1(t){t.clearMeasurements()}function lj(t){t.isLayoutDirty=!0,t.updateLayout()}function W1(t){t.isLayoutDirty=!1}function cj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function uj(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function Y1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function dj(t){t.resolveTargetDelta()}function fj(t){t.calcProjection()}function hj(t){t.resetSkewAndRotation()}function mj(t){t.removeLeadSnapshot()}function F1(t,n,i){t.translate=hs(n.translate,0,i),t.scale=hs(n.scale,1,i),t.origin=n.origin,t.originPoint=n.originPoint}function X1(t,n,i,a){t.min=hs(n.min,i.min,a),t.max=hs(n.max,i.max,a)}function pj(t,n,i,a){X1(t.x,n.x,i.x,a),X1(t.y,n.y,i.y,a)}function _j(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const gj={duration:.45,ease:[.4,0,.1,1]},q1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),G1=q1("applewebkit/")&&!q1("chrome/")?Math.round:yi;function K1(t){t.min=G1(t.min),t.max=G1(t.max)}function yj(t){K1(t.x),K1(t.y)}function C5(t,n,i){return t==="position"||t==="preserve-aspect"&&!PC($1(n),$1(i),.2)}function xj(t){var n;return t!==t.root&&((n=t.scroll)==null?void 0:n.wasRoot)}const bj=k5({attachResizeListener:(t,n)=>wc(t,"resize",n),measureScroll:()=>{var t,n;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((n=document.body)==null?void 0:n.scrollTop)||0}},checkIsScrollRoot:()=>!0}),mm={current:void 0},j5=k5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!mm.current){const t=new bj({});t.mount(window),t.setOptions({layoutScroll:!0}),mm.current=t}return mm.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Id=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Q1(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function vj(...t){return n=>{let i=!1;const a=t.map(c=>{const u=Q1(c,n);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let c=0;c<a.length;c++){const u=a[c];typeof u=="function"?u():Q1(t[c],null)}}}}function wj(...t){return y.useCallback(vj(...t),t)}class Sj extends y.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(fd(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,c=fd(a)&&a.offsetWidth||0,u=fd(a)&&a.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=c-h.width-h.left,h.bottom=u-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function kj({children:t,isPresent:n,anchorX:i,anchorY:a,root:c,pop:u}){var b,w;const d=y.useId(),h=y.useRef(null),p=y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=y.useContext(Id),_=(w=(b=t.props)==null?void 0:b.ref)!=null?w:t==null?void 0:t.ref,x=wj(h,_);return y.useInsertionEffect(()=>{const{width:S,height:C,top:k,left:M,right:R,bottom:A}=p.current;if(n||u===!1||!h.current||!S||!C)return;const T=i==="left"?`left: ${M}`:`right: ${R}`,$=a==="bottom"?`bottom: ${A}`:`top: ${k}`;h.current.dataset.motionPopId=d;const F=document.createElement("style");g&&(F.nonce=g);const U=c!=null?c:document.head;return U.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${C}px !important;
            ${T}px !important;
            ${$}px !important;
          }
        `),()=>{var Q;(Q=h.current)==null||Q.removeAttribute("data-motion-pop-id"),U.contains(F)&&U.removeChild(F)}},[n]),r.jsx(Sj,{isPresent:n,childRef:h,sizeRef:p,pop:u,children:u===!1?t:y.cloneElement(t,{ref:x})})}const Cj=({children:t,initial:n,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:u,mode:d,anchorX:h,anchorY:p,root:g})=>{const _=Cc(jj),x=y.useId();let b=!0,w=y.useMemo(()=>(b=!1,{id:x,initial:n,isPresent:i,custom:c,onExitComplete:S=>{_.set(S,!0);for(const C of _.values())if(!C)return;a&&a()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[i,_,a]);return u&&b&&(w={...w}),y.useMemo(()=>{_.forEach((S,C)=>_.set(C,!1))},[i]),y.useEffect(()=>{!i&&!_.size&&a&&a()},[i]),t=r.jsx(kj,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),r.jsx(Bd.Provider,{value:w,children:t})};function jj(){return new Map}function M5(t=!0){const n=y.useContext(Bd);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:c}=n,u=y.useId();y.useEffect(()=>{if(t)return c(u)},[t]);const d=y.useCallback(()=>t&&a&&a(u),[u,a,t]);return!i&&a?[!1,d]:[!0]}const od=t=>t.key||"";function Z1(t){const n=[];return y.Children.forEach(t,i=>{y.isValidElement(i)&&n.push(i)}),n}const Pd=({children:t,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[_,x]=M5(d),b=y.useMemo(()=>Z1(t),[t]),w=d&&!_?[]:b.map(od),S=y.useRef(!0),C=y.useRef(b),k=Cc(()=>new Map),M=y.useRef(new Set),[R,A]=y.useState(b),[T,$]=y.useState(b);mp(()=>{S.current=!1,C.current=b;for(let Q=0;Q<T.length;Q++){const X=od(T[Q]);w.includes(X)?(k.delete(X),M.current.delete(X)):k.get(X)!==!0&&k.set(X,!1)}},[T,w.length,w.join("-")]);const F=[];if(b!==R){let Q=[...b];for(let X=0;X<T.length;X++){const ne=T[X],le=od(ne);w.includes(le)||(Q.splice(X,0,ne),F.push(ne))}return u==="wait"&&F.length&&(Q=F),$(Z1(Q)),A(b),null}const{forceRender:U}=y.useContext(hp);return r.jsx(r.Fragment,{children:T.map(Q=>{const X=od(Q),ne=d&&!_?!1:b===T||w.includes(X),le=()=>{if(M.current.has(X))return;if(k.has(X))M.current.add(X),k.set(X,!0);else return;let q=!0;k.forEach(te=>{te||(q=!1)}),q&&(U==null||U(),$(C.current),d&&(x==null||x()),a&&a())};return r.jsx(Cj,{isPresent:ne,initial:!S.current||i?void 0:!1,custom:n,presenceAffectsLayout:c,mode:u,root:g,onExitComplete:ne?void 0:le,anchorX:h,anchorY:p,children:Q},X)})})},T5=y.createContext({strict:!1}),J1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ex=!1;function Mj(){if(ex)return;const t={};for(const n in J1)t[n]={isEnabled:i=>J1[n].some(a=>!!i[a])};Jb(t),ex=!0}function E5(){return Mj(),hC()}function Tj(t){const n=E5();for(const i in t)n[i]={...n[i],...t[i]};Jb(n)}const Ej=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Nd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ej.has(t)}let D5=t=>!Nd(t);function Dj(t){typeof t=="function"&&(D5=n=>n.startsWith("on")?!Nd(n):t(n))}try{Dj(require("@emotion/is-prop-valid").default)}catch{}function Aj(t,n,i){const a={};for(const c in t)c==="values"&&typeof t.values=="object"||to(t[c])||(D5(c)||i===!0&&Nd(c)||!n&&!Nd(c)||t.draggable&&c.startsWith("onDrag"))&&(a[c]=t[c]);return a}const Hd=y.createContext({});function Nj(t,n){if($d(t)){const{initial:i,animate:a}=t;return{initial:i===!1||vc(i)?i:void 0,animate:vc(a)?a:void 0}}return t.inherit!==!1?n:{}}function Rj(t){const{initial:n,animate:i}=Nj(t,y.useContext(Hd));return y.useMemo(()=>({initial:n,animate:i}),[tx(n),tx(i)])}function tx(t){return Array.isArray(t)?t.join(" "):t}const Hp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function A5(t,n,i){for(const a in n)!to(n[a])&&!r5(a,i)&&(t[a]=n[a])}function Bj({transformTemplate:t},n){return y.useMemo(()=>{const i=Hp();return Ip(i,n,t),Object.assign({},i.vars,i.style)},[n])}function Lj(t,n){const i=t.style||{},a={};return A5(a,i,t),Object.assign(a,Bj(t,n)),a}function Oj(t,n){const i={},a=Lj(t,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=a,i}const N5=()=>({...Hp(),attrs:{}});function zj(t,n,i,a){const c=y.useMemo(()=>{const u=N5();return c5(u,n,d5(a),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};A5(u,t.style,t),c.style={...u,...c.style}}return c}const $j=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vp(t){return typeof t!="string"||t.includes("-")?!1:!!($j.indexOf(t)>-1||/[A-Z]/u.test(t))}function Ij(t,n,i,{latestValues:a},c,u=!1,d){const p=((d!=null?d:Vp(t))?zj:Oj)(n,a,c,t),g=Aj(n,typeof t=="string",u),_=t!==y.Fragment?{...g,...p,ref:i}:{},{children:x}=n,b=y.useMemo(()=>to(x)?x.get():x,[x]);return y.createElement(t,{..._,children:b})}function Pj({scrapeMotionValuesFromProps:t,createRenderState:n},i,a,c){return{latestValues:Hj(i,a,c,t),renderState:n()}}function Hj(t,n,i,a){const c={},u=a(t,{});for(const b in u)c[b]=gd(u[b]);let{initial:d,animate:h}=t;const p=$d(t),g=Qb(t);n&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=n.initial),h===void 0&&(h=n.animate));let _=i?i.initial===!1:!1;_=_||d===!1;const x=_?h:d;if(x&&typeof x!="boolean"&&!zd(x)){const b=Array.isArray(x)?x:[x];for(let w=0;w<b.length;w++){const S=Dp(t,b[w]);if(S){const{transitionEnd:C,transition:k,...M}=S;for(const R in M){let A=M[R];if(Array.isArray(A)){const T=_?A.length-1:0;A=A[T]}A!==null&&(c[R]=A)}for(const R in C)c[R]=C[R]}}}return c}const R5=t=>(n,i)=>{const a=y.useContext(Hd),c=y.useContext(Bd),u=()=>Pj(t,n,a,c);return i?u():Cc(u)},Vj=R5({scrapeMotionValuesFromProps:Pp,createRenderState:Hp}),Uj=R5({scrapeMotionValuesFromProps:f5,createRenderState:N5}),Wj=Symbol.for("motionComponentSymbol");function Yj(t,n,i){const a=y.useRef(i);y.useInsertionEffect(()=>{a.current=i});const c=y.useRef(null);return y.useCallback(u=>{var h;u&&((h=t.onMount)==null||h.call(t,u));const d=a.current;if(typeof d=="function")if(u){const p=d(u);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):d(u);else d&&(d.current=u);n&&(u?n.mount(u):n.unmount())},[n])}const B5=y.createContext({});function Jr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Fj(t,n,i,a,c,u){var A,T;const{visualElement:d}=y.useContext(Hd),h=y.useContext(T5),p=y.useContext(Bd),g=y.useContext(Id),_=g.reducedMotion,x=g.skipAnimations,b=y.useRef(null),w=y.useRef(!1);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:_,skipAnimations:x,isSVG:u}),w.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const S=b.current,C=y.useContext(B5);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&Xj(b.current,i,c,C);const k=y.useRef(!1);y.useInsertionEffect(()=>{S&&k.current&&S.update(i,p)});const M=i[Ib],R=y.useRef(!!M&&typeof window<"u"&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,M))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,M)));return mp(()=>{w.current=!0,S&&(k.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),R.current&&S.animationState&&S.animationState.animateChanges())}),y.useEffect(()=>{S&&(!R.current&&S.animationState&&S.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,M)}),R.current=!1),S.enteringChildren=void 0)}),S}function Xj(t,n,i,a){const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:_,layoutCrossfade:x}=n;t.projection=new i(t.latestValues,n["data-framer-portal-id"]?void 0:L5(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&Jr(h),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,crossfade:x,layoutScroll:p,layoutRoot:g,layoutAnchor:_})}function L5(t){if(t)return t.options.allowProjection!==!1?t.projection:L5(t.parent)}function pm(t,{forwardMotionProps:n=!1,type:i}={},a,c){var g,_;a&&Tj(a);const u=i?i==="svg":Vp(t),d=u?Uj:Vj;function h(x,b){let w;const S={...y.useContext(Id),...x,layoutId:qj(x)},{isStatic:C}=S,k=Rj(x),M=d(x,C);if(!C&&typeof window<"u"){Gj();const R=Kj(S);w=R.MeasureLayout,k.visualElement=Fj(t,M,S,c,R.ProjectionNode,u)}return r.jsxs(Hd.Provider,{value:k,children:[w&&k.visualElement?r.jsx(w,{visualElement:k.visualElement,...S}):null,Ij(t,x,Yj(M,k.visualElement,b),M,C,n,u)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${(_=(g=t.displayName)!=null?g:t.name)!=null?_:""})`}`;const p=y.forwardRef(h);return p[Wj]=t,p}function qj({layoutId:t}){const n=y.useContext(hp).id;return n&&t!==void 0?n+"-"+t:t}function Gj(t,n){y.useContext(T5).strict}function Kj(t){const n=E5(),{drag:i,layout:a}=n;if(!i&&!a)return{};const c={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(t)||a!=null&&a.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function Qj(t,n){if(typeof Proxy>"u")return pm;const i=new Map,a=(u,d)=>pm(u,d,t,n),c=(u,d)=>a(u,d);return new Proxy(c,{get:(u,d)=>d==="create"?a:(i.has(d)||i.set(d,pm(d,void 0,t,n)),i.get(d))})}const Zj=(t,n)=>{var a;return((a=n.isSVG)!=null?a:Vp(t))?new h5(n):new l5(n,{allowProjection:t!==y.Fragment})};class Jj extends Xa{constructor(n){super(n),n.animationState||(n.animationState=BC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();zd(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let e8=0;class t8 extends Xa{constructor(){super(...arguments),this.id=e8++,this.isExitComplete=!1}update(){var u;if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"){const p=gr(this.node,d,h);if(p){const{transition:g,transitionEnd:_,...x}=p;for(const b in x)(u=this.node.getValue(b))==null||u.jump(x[b])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!n);i&&!n&&c.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const n8={animation:{Feature:Jj},exit:{Feature:t8}};function Ec(t){return{point:{x:t.pageX,y:t.pageY}}}const s8=t=>n=>Op(n)&&t(n,Ec(n));function _c(t,n,i,a){return wc(t,n,s8(i),a)}const O5=({current:t})=>t?t.ownerDocument.defaultView:null,nx=(t,n)=>Math.abs(t-n);function o8(t,n){const i=nx(t.x,n.x),a=nx(t.y,n.y);return Math.sqrt(i**2+a**2)}const sx=new Set(["auto","scroll"]);class z5{constructor(n,i,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=id(this.lastRawMoveEventInfo,this.transformPagePoint));const w=_m(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,C=o8(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!C)return;const{point:k}=w,{timestamp:M}=yo;this.history.push({...k,timestamp:M});const{onStart:R,onMove:A}=this.handlers;S||(R&&R(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=id(S,this.transformPagePoint),ls.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:C,onSessionEnd:k,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=_m(w.type==="pointercancel"?this.lastMoveEventInfo:id(S,this.transformPagePoint),this.history);this.startEvent&&C&&C(w,R),k&&k(w,R)},!Op(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=Ec(n),g=id(p,this.transformPagePoint),{point:_}=g,{timestamp:x}=yo;this.history=[{..._,timestamp:x}];const{onSessionStart:b}=i;b&&b(n,_m(g,this.history)),this.removeListeners=jc(_c(this.contextWindow,"pointermove",this.handlePointerMove),_c(this.contextWindow,"pointerup",this.handlePointerUp),_c(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(sx.has(a.overflowX)||sx.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,c=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},u={x:c.x-i.x,y:c.y-i.y};u.x===0&&u.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(n,c),ls.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ha(this.updatePoint)}}function id(t,n){return n?{point:n(t.point)}:t}function ox(t,n){return{x:t.x-n.x,y:t.y-n.y}}function _m({point:t},n){return{point:t,delta:ox(t,$5(n)),offset:ox(t,i8(n)),velocity:a8(n,.1)}}function i8(t){return t[0]}function $5(t){return t[t.length-1]}function a8(t,n){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null;const c=$5(t);for(;i>=0&&(a=t[i],!(c.timestamp-a.timestamp>Fo(n)));)i--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&c.timestamp-a.timestamp>Fo(n)*2&&(a=t[1]);const u=gi(c.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const d={x:(c.x-a.x)/u,y:(c.y-a.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function r8(t,{min:n,max:i},a){return n!==void 0&&t<n?t=a?hs(n,t,a.min):Math.max(t,n):i!==void 0&&t>i&&(t=a?hs(i,t,a.max):Math.min(t,i)),t}function ix(t,n,i){return{min:n!==void 0?t.min+n:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function l8(t,{top:n,left:i,bottom:a,right:c}){return{x:ix(t.x,i,c),y:ix(t.y,n,a)}}function ax(t,n){let i=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function c8(t,n){return{x:ax(t.x,n.x),y:ax(t.y,n.y)}}function u8(t,n){let i=.5;const a=Oo(t),c=Oo(n);return c>a?i=ll(n.min,n.max-a,t.min):a>c&&(i=ll(t.min,t.max-c,n.min)),Fi(0,1,i)}function d8(t,n){const i={};return n.min!==void 0&&(i.min=n.min-t.min),n.max!==void 0&&(i.max=n.max-t.min),i}const np=.35;function f8(t=np){return t===!1?t=0:t===!0&&(t=np),{x:rx(t,"left","right"),y:rx(t,"top","bottom")}}function rx(t,n,i){return{min:lx(t,n),max:lx(t,i)}}function lx(t,n){return typeof t=="number"?t:t[n]||0}const h8=new WeakMap;class m8{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Gs(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=x=>{i&&this.snapToCursor(Ec(x).point),this.stopAnimation()},d=(x,b)=>{const{drag:w,dragPropagation:S,onDragStart:C}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=W3(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vi(M=>{let R=this.getAxisMotionValue(M).get()||0;if(Yi.test(R)){const{projection:A}=this.visualElement;if(A&&A.layout){const T=A.layout.layoutBox[M];T&&(R=Oo(T)*(parseFloat(R)/100))}}this.originPoint[M]=R}),C&&ls.update(()=>C(x,b),!1,!0),Xm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},h=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:C,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=_8(M),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),k&&ls.update(()=>k(x,b),!1,!0)},p=(x,b)=>{this.latestPointerEvent=x,this.latestPanInfo=b,this.stop(x,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new z5(n,{onSessionStart:u,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:a,contextWindow:O5(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,c=i||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&ls.postRender(()=>h(a,c))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:c}=this.getProps();if(!a||!ad(n,c,this.currentDirection))return;const u=this.getAxisMotionValue(n);let d=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(d=r8(d,this.constraints[n],this.elastic[n])),u.set(d)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;n&&Jr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=l8(a.layoutBox,n):this.constraints=!1,this.elastic=f8(i),c!==this.constraints&&!Jr(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Vi(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=d8(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!Jr(n))return!1;const a=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=gC(a,c.root,this.visualElement.getTransformPagePoint());let d=c8(c.layout.layoutBox,u);if(i){const h=i(mC(d));this.hasMutatedConstraints=!!h,h&&(d=n5(h))}return d}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:c,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Vi(_=>{if(!ad(_,i,this.currentDirection))return;let x=p&&p[_]||{};(d===!0||d===_)&&(x={min:0,max:0});const b=c?200:1e6,w=c?40:1e7,S={type:"inertia",velocity:a?n[_]:0,bounceStiffness:b,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(h)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Xm(this.visualElement,n),a.start(Ep(n,a,0,i,this.visualElement,!1))}stopAnimation(){Vi(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),c=a[i];return c||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Vi(i=>{const{drag:a}=this.getProps();if(!ad(i,a,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i],p=u.get()||0;u.set(n[i]-hs(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Jr(i)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Vi(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();c[d]=u8({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Vi(d=>{if(!ad(d,n,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(hs(p,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;h8.set(this.visualElement,this);const n=this.visualElement.current,i=_c(n,"pointerdown",g=>{const{drag:_,dragListener:x=!0}=this.getProps(),b=g.target,w=b!==n&&K3(b);_&&x&&!w&&this.start(g)});let a;const c=()=>{const{dragConstraints:g}=this.getProps();Jr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),a||(a=p8(n,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,d=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ls.read(c);const h=wc(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Vi(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:d=np,dragMomentum:h=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:c,dragConstraints:u,dragElastic:d,dragMomentum:h}}}function cx(t){let n=!0;return()=>{if(n){n=!1;return}t()}}function p8(t,n,i){const a=_1(t,cx(i)),c=_1(n,cx(i));return()=>{a(),c()}}function ad(t,n,i){return(n===!0||n===t)&&(i===null||i===t)}function _8(t,n=10){let i=null;return Math.abs(t.y)>n?i="y":Math.abs(t.x)>n&&(i="x"),i}class g8 extends Xa{constructor(n){super(n),this.removeGroupControls=yi,this.removeListeners=yi,this.controls=new m8(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yi}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gm=t=>(n,i)=>{t&&ls.update(()=>t(n,i),!1,!0)};class y8 extends Xa{constructor(){super(...arguments),this.removePointerDownListener=yi}onPointerDown(n){this.session=new z5(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:O5(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:gm(n),onStart:gm(i),onMove:gm(a),onEnd:(u,d)=>{delete this.session,c&&ls.postRender(()=>c(u,d))}}}mount(){this.removePointerDownListener=_c(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ym=!1;class x8 extends y.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:c}=this.props,{projection:u}=n;u&&(i.group&&i.group.add(u),a&&a.register&&c&&a.register(u),ym&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yd.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:c,isPresent:u}=this.props,{projection:d}=a;return d&&(d.isPresent=u,n.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),ym=!0,c||n.layoutDependency!==i||i===void 0||n.isPresent!==u?d.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?d.promote():d.relegate()||ls.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Lp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:c}=n;ym=!0,c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function I5(t){const[n,i]=M5(),a=y.useContext(hp);return r.jsx(x8,{...t,layoutGroup:a,switchLayoutGroup:y.useContext(B5),isPresent:n,safeToRemove:i})}const b8={pan:{Feature:y8},drag:{Feature:g8,ProjectionNode:j5,MeasureLayout:I5}};function ux(t,n,i){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,u=a[c];u&&ls.postRender(()=>u(n,Ec(n)))}class v8 extends Xa{mount(){const{current:n}=this.node;n&&(this.unmount=F3(n,(i,a)=>(ux(this.node,a,"Start"),c=>ux(this.node,c,"End"))))}unmount(){}}class w8 extends Xa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jc(wc(this.node.current,"focus",()=>this.onFocus()),wc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function dx(t,n,i){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),u=a[c];u&&ls.postRender(()=>u(n,Ec(n)))}class S8 extends Xa{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Z3(n,(c,u)=>(dx(this.node,u,"Start"),(d,{success:h})=>dx(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(a==null?void 0:a.tap)===!1})}unmount(){}}const sp=new WeakMap,xm=new WeakMap,k8=t=>{const n=sp.get(t.target);n&&n(t)},C8=t=>{t.forEach(k8)};function j8({root:t,...n}){const i=t||document;xm.has(i)||xm.set(i,{});const a=xm.get(i),c=JSON.stringify(n);return a[c]||(a[c]=new IntersectionObserver(C8,{root:t,...n})),a[c]}function M8(t,n,i){const a=j8(n);return sp.set(t,i),a.observe(t),()=>{sp.delete(t),a.unobserve(t)}}const T8={some:0,all:1};class E8 extends Xa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:c="some",once:u}=n,d={root:i?i.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:T8[c]},h=g=>{const{isIntersecting:_}=g;if(this.isInView===_||(this.isInView=_,u&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),w=_?x:b;w&&w(g)};this.stopObserver=M8(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(D8(n,i))&&this.startObserver()}unmount(){var n;(n=this.stopObserver)==null||n.call(this),this.hasEnteredView=!1,this.isInView=!1}}function D8({viewport:t={}},{viewport:n={}}={}){return i=>t[i]!==n[i]}const A8={inView:{Feature:E8},tap:{Feature:S8},focus:{Feature:w8},hover:{Feature:v8}},N8={layout:{ProjectionNode:j5,MeasureLayout:I5}},R8={...n8,...A8,...b8,...N8},Yo=Qj(R8,Zj);function op(t){const n=Cc(()=>Fa(t)),{isStatic:i}=y.useContext(Id);if(i){const[,a]=y.useState(t);y.useEffect(()=>n.on("change",a),[])}return n}function P5(t,n){const i=op(n()),a=()=>i.set(n());return a(),mp(()=>{const c=()=>ls.preRender(a,!1,!0),u=t.map(d=>d.on("change",c));return()=>{u.forEach(d=>d()),ha(a)}}),i}function B8(t){mc.current=[],t();const n=P5(mc.current,t);return mc.current=void 0,n}function rd(t,n,i,a){if(typeof t=="function")return B8(t);const u=typeof n=="function"?n:rC(n,i,a),d=Array.isArray(t)?fx(t,u):fx([t],([p])=>u(p)),h=Array.isArray(t)?void 0:t.accelerate;return h&&!h.isTransformed&&typeof n!="function"&&Array.isArray(i)&&(a==null?void 0:a.clamp)!==!1&&(d.accelerate={...h,times:n,keyframes:i,isTransformed:!0}),d}function fx(t,n){const i=Cc(()=>[]);return P5(t,()=>{i.length=0;const a=t.length;for(let c=0;c<a;c++)i[c]=t[c].get();return n(i)})}function Up(t){return typeof t=="object"&&!Array.isArray(t)}function H5(t,n,i,a){return t==null?[]:typeof t=="string"&&Up(n)?Bp(t,i,a):t instanceof NodeList?Array.from(t):Array.isArray(t)?t.filter(c=>c!=null):[t]}function L8(t,n,i){return t*(n+1)}function hx(t,n,i,a){var c;return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,t+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):(c=a.get(n))!=null?c:t}function O8(t,n,i){for(let a=0;a<t.length;a++){const c=t[a];c.at>n&&c.at<i&&(rl(t,c),a--)}}function z8(t,n,i,a,c,u){O8(t,c,u);for(let d=0;d<n.length;d++)t.push({value:n[d],at:hs(c,u,a[d]),easing:lb(i,d)})}function $8(t,n){for(let i=0;i<t.length;i++)t[i]=t[i]/(n+1)}function I8(t,n){return t.at===n.at?t.value===null?1:n.value===null?-1:0:t.at-n.at}const P8="easeInOut";function H8(t,{defaultTransition:n={},...i}={},a,c){const u=n.duration||.3,d=new Map,h=new Map,p={},g=new Map;let _=0,x=0,b=0;for(let w=0;w<t.length;w++){const S=t[w];if(typeof S=="string"){g.set(S,x);continue}else if(!Array.isArray(S)){g.set(S.name,hx(x,S.at,_,g));continue}let[C,k,M={}]=S;M.at!==void 0&&(x=hx(x,M.at,_,g));let R=0;const A=(T,$,F,U=0,Q=0)=>{const X=V8(T),{delay:ne=0,times:le=kb(X),type:q=n.type||"keyframes",repeat:te,repeatType:ue,repeatDelay:ye=0,...z}=$;let{ease:me=n.ease||"easeOut",duration:G}=$;const ve=typeof ne=="function"?ne(U,Q):ne,Me=X.length,B=Mp(q)?q:c==null?void 0:c[q||"keyframes"];if(Me<=2&&B){let $e=100;if(Me===2&&Y8(X)){const Qe=X[1]-X[0];$e=Math.abs(Qe)}const Te={...n,...z};G!==void 0&&(Te.duration=Fo(G));const Re=bb(Te,$e,B);me=Re.ease,G=Re.duration}G!=null||(G=u);const P=x+ve;le.length===1&&le[0]===0&&(le[1]=1);const L=le.length-X.length;if(L>0&&Sb(le,L),X.length===1&&X.unshift(null),te){G=L8(G,te);const $e=[...X],Te=[...le];me=Array.isArray(me)?[...me]:[me];const Re=[...me];for(let Qe=0;Qe<te;Qe++){X.push(...$e);for(let Ze=0;Ze<$e.length;Ze++)le.push(Te[Ze]+(Qe+1)),me.push(Ze===0?"linear":lb(Re,Ze-1))}$8(le,te)}const ie=P+G;z8(F,X,me,le,P,ie),R=Math.max(ve+G,R),b=Math.max(ie,b)};if(to(C)){const T=mx(C,h);A(k,M,px("default",T))}else{const T=H5(C,k,a,p),$=T.length;for(let F=0;F<$;F++){k=k,M=M;const U=T[F],Q=mx(U,h);for(const X in k)A(k[X],U8(M,X),px(X,Q),F,$)}}_=x,x+=R}return h.forEach((w,S)=>{for(const C in w){const k=w[C];k.sort(I8);const M=[],R=[],A=[];for(let U=0;U<k.length;U++){const{at:Q,value:X,easing:ne}=k[U];M.push(X),R.push(ll(0,b,Q)),A.push(ne||"easeOut")}R[0]!==0&&(R.unshift(0),M.unshift(M[0]),A.unshift(P8)),R[R.length-1]!==1&&(R.push(1),M.push(null)),d.has(S)||d.set(S,{keyframes:{},transition:{}});const T=d.get(S);T.keyframes[C]=M;const{type:$,...F}=n;T.transition[C]={...F,duration:b,ease:A,times:R,...i}}}),d}function mx(t,n){return!n.has(t)&&n.set(t,{}),n.get(t)}function px(t,n){return n[t]||(n[t]=[]),n[t]}function V8(t){return Array.isArray(t)?t:[t]}function U8(t,n){return t&&t[n]?{...t,...t[n]}:{...t}}const W8=t=>typeof t=="number",Y8=t=>t.every(W8);function F8(t){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Od(t)&&!Kb(t)?new h5(n):new l5(n);i.mount(t),bc.set(t,i)}function X8(t){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new kC(n);i.mount(t),bc.set(t,i)}function q8(t,n){return to(t)||typeof t=="number"||typeof t=="string"&&!Up(n)}function V5(t,n,i,a){const c=[];if(q8(t,n))c.push(w5(t,Up(n)&&n.default||n,i&&(i.default||i)));else{if(t==null)return c;const u=H5(t,n,a),d=u.length;for(let h=0;h<d;h++){const p=u[h],g=p instanceof Element?F8:X8;bc.has(p)||g(p);const _=bc.get(p),x={...i};"delay"in x&&typeof x.delay=="function"&&(x.delay=x.delay(h,d)),c.push(...Np(_,{...n,transition:x},{}))}}return c}function G8(t,n,i){const a=[],c=t.map(d=>{if(Array.isArray(d)&&typeof d[0]=="function"){const h=d[0],p=Fa(0);return p.on("change",h),d.length===1?[p,[0,1]]:d.length===2?[p,[0,1],d[1]]:[p,d[1],d[2]]}return d});return H8(c,n,i,{spring:xc}).forEach(({keyframes:d,transition:h},p)=>{a.push(...V5(p,d,h))}),a}function K8(t){return Array.isArray(t)&&t.some(Array.isArray)}function Q8(t={}){const{scope:n,reduceMotion:i}=t;function a(c,u,d){let h=[],p;if(K8(c)){const{onComplete:_,...x}=u||{};typeof _=="function"&&(p=_),h=G8(c,i!==void 0?{reduceMotion:i,...x}:x,n)}else{const{onComplete:_,...x}=d||{};typeof _=="function"&&(p=_),h=V5(c,u,i!==void 0?{reduceMotion:i,...x}:x,n)}const g=new h3(h);return p&&g.finished.then(p),n&&(n.animations.push(g),g.finished.then(()=>{rl(n.animations,g)})),g}return a}const _x=Q8();var Z8=Object.freeze({}),J8=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(t,n,i,a){const c=this.parseConfig(i,"",a),u=this.flattenValues(i,"");this.initTransitionModes(i,"",u),this.panels.set(t,{id:t,name:n,controls:c,values:u,shortcuts:a!=null?a:{}}),this.snapshots.set(t,{...u}),this.baseValues.set(t,{...u}),this.notifyGlobal()}updatePanel(t,n,i,a){var b;const c=this.panels.get(t);if(!c){this.registerPanel(t,n,i,a);return}const u=this.parseConfig(i,"",a),d=this.mapControlsByPath(u),h=this.flattenValues(i,""),p={};for(const[w,S]of Object.entries(h))p[w]=this.normalizePreservedValue(c.values[w],S,d.get(w));this.initTransitionModes(i,"",p);for(const[w,S]of Object.entries(c.values)){if(!w.endsWith(".__mode"))continue;const C=w.slice(0,-7),k=d.get(C);(k==null?void 0:k.type)==="transition"&&(p[w]=S)}const g={id:t,name:n,controls:u,values:p,shortcuts:a!=null?a:c.shortcuts};this.panels.set(t,g),this.snapshots.set(t,{...p});const _=(b=this.baseValues.get(t))!=null?b:{},x={};for(const[w,S]of Object.entries(h))x[w]=this.normalizePreservedValue(_[w],S,d.get(w));for(const[w,S]of Object.entries(p))w.endsWith(".__mode")&&(x[w]=S);this.baseValues.set(t,x),this.notify(t),this.notifyGlobal()}unregisterPanel(t){this.panels.delete(t),this.listeners.delete(t),this.snapshots.delete(t),this.actionListeners.delete(t),this.baseValues.delete(t),this.notifyGlobal()}updateValue(t,n,i){var u;const a=this.panels.get(t);if(!a)return;a.values[n]=i;const c=this.activePreset.get(t);if(c){const h=((u=this.presets.get(t))!=null?u:[]).find(p=>p.id===c);h&&(h.values[n]=i)}else{const d=this.baseValues.get(t);d&&(d[n]=i)}this.snapshots.set(t,{...a.values}),this.notify(t)}updateSpringMode(t,n,i){this.updateTransitionMode(t,n,i)}getSpringMode(t,n){const i=this.getTransitionMode(t,n);return i==="easing"?"simple":i}updateTransitionMode(t,n,i){const a=this.panels.get(t);a&&(a.values[`${n}.__mode`]=i,this.snapshots.set(t,{...a.values}),this.notify(t))}getTransitionMode(t,n){const i=this.panels.get(t);return i&&i.values[`${n}.__mode`]||"simple"}getValue(t,n){const i=this.panels.get(t);return i==null?void 0:i.values[n]}getValues(t){var n;return(n=this.snapshots.get(t))!=null?n:Z8}getPanels(){return Array.from(this.panels.values())}getPanel(t){return this.panels.get(t)}subscribe(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>{var i;(i=this.listeners.get(t))==null||i.delete(n)}}subscribeGlobal(t){return this.globalListeners.add(t),()=>this.globalListeners.delete(t)}subscribeActions(t,n){return this.actionListeners.has(t)||this.actionListeners.set(t,new Set),this.actionListeners.get(t).add(n),()=>{var i;(i=this.actionListeners.get(t))==null||i.delete(n)}}triggerAction(t,n){var i;(i=this.actionListeners.get(t))==null||i.forEach(a=>a(n))}savePreset(t,n){var d;const i=this.panels.get(t);if(!i)throw new Error(`Panel ${t} not found`);const a=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,c={id:a,name:n,values:{...i.values}},u=(d=this.presets.get(t))!=null?d:[];return this.presets.set(t,[...u,c]),this.activePreset.set(t,a),this.snapshots.set(t,{...i.values}),this.notify(t),a}loadPreset(t,n){var u;const i=this.panels.get(t);if(!i)return;const c=((u=this.presets.get(t))!=null?u:[]).find(d=>d.id===n);c&&(i.values={...c.values},this.snapshots.set(t,{...i.values}),this.activePreset.set(t,n),this.notify(t))}deletePreset(t,n){var c;const i=(c=this.presets.get(t))!=null?c:[];this.presets.set(t,i.filter(u=>u.id!==n)),this.activePreset.get(t)===n&&this.activePreset.set(t,null);const a=this.panels.get(t);a&&this.snapshots.set(t,{...a.values}),this.notify(t)}getPresets(t){var n;return(n=this.presets.get(t))!=null?n:[]}getActivePresetId(t){var n;return(n=this.activePreset.get(t))!=null?n:null}clearActivePreset(t){const n=this.panels.get(t),i=this.baseValues.get(t);n&&i&&(n.values={...i},this.snapshots.set(t,{...n.values})),this.activePreset.set(t,null),this.notify(t)}resolveShortcutTarget(t,n){var i;for(const a of this.panels.values())for(const[c,u]of Object.entries(a.shortcuts)){if(!u.key||u.key.toLowerCase()!==t.toLowerCase()||((i=u.modifier)!=null?i:void 0)!==n)continue;const h=this.findControlByPath(a.controls,c);if(h)return{panelId:a.id,path:c,control:h}}return null}resolveScrollOnlyTargets(){var n;const t=[];for(const i of this.panels.values())for(const[a,c]of Object.entries(i.shortcuts)){if(((n=c.interaction)!=null?n:"scroll")!=="scroll-only")continue;const u=this.findControlByPath(i.controls,a);u&&t.push({panelId:i.id,path:a,control:u,shortcut:c})}return t}findControlByPath(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=this.findControlByPath(i.children,n);if(a)return a}}return null}notify(t){var n;(n=this.listeners.get(t))==null||n.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(t=>t())}initTransitionModes(t,n,i){for(const[a,c]of Object.entries(t)){if(a==="_collapsed")continue;const u=n?`${n}.${a}`:a;if(this.isEasingConfig(c))i[`${u}.__mode`]="easing";else if(this.isSpringConfig(c)){const d=c.stiffness!==void 0||c.damping!==void 0||c.mass!==void 0,h=c.visualDuration!==void 0||c.bounce!==void 0;i[`${u}.__mode`]=d&&!h?"advanced":"simple"}else typeof c=="object"&&c!==null&&!Array.isArray(c)&&!this.isActionConfig(c)&&!this.isSelectConfig(c)&&!this.isColorConfig(c)&&!this.isTextConfig(c)&&this.initTransitionModes(c,u,i)}}parseConfig(t,n,i){var c;const a=[];for(const[u,d]of Object.entries(t)){if(u==="_collapsed")continue;const h=n?`${n}.${u}`:u,p=this.formatLabel(u),g=i==null?void 0:i[h];if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")a.push({type:"slider",path:h,label:p,min:d[1],max:d[2],step:(c=d[3])!=null?c:this.inferStep(d[1],d[2]),shortcut:g});else if(typeof d=="number"){const{min:_,max:x,step:b}=this.inferRange(d);a.push({type:"slider",path:h,label:p,min:_,max:x,step:b,shortcut:g})}else if(typeof d=="boolean")a.push({type:"toggle",path:h,label:p,shortcut:g});else if(this.isSpringConfig(d)||this.isEasingConfig(d))a.push({type:"transition",path:h,label:p});else if(this.isActionConfig(d))a.push({type:"action",path:h,label:d.label||p});else if(this.isSelectConfig(d))a.push({type:"select",path:h,label:p,options:d.options});else if(this.isColorConfig(d))a.push({type:"color",path:h,label:p});else if(this.isTextConfig(d))a.push({type:"text",path:h,label:p,placeholder:d.placeholder});else if(typeof d=="string")this.isHexColor(d)?a.push({type:"color",path:h,label:p}):a.push({type:"text",path:h,label:p});else if(typeof d=="object"&&d!==null){const _=d,x="_collapsed"in _?!_._collapsed:!0;a.push({type:"folder",path:h,label:p,defaultOpen:x,children:this.parseConfig(_,h,i)})}}return a}flattenValues(t,n){var a,c,u;const i={};for(const[d,h]of Object.entries(t)){if(d==="_collapsed")continue;const p=n?`${n}.${d}`:d;if(Array.isArray(h)&&h.length<=4&&typeof h[0]=="number")i[p]=h[0];else if(typeof h=="number"||typeof h=="boolean"||typeof h=="string")i[p]=h;else if(this.isSpringConfig(h)||this.isEasingConfig(h))i[p]=h;else if(this.isActionConfig(h))i[p]=h;else if(this.isSelectConfig(h)){const g=h.options[0],_=typeof g=="string"?g:g.value;i[p]=(a=h.default)!=null?a:_}else this.isColorConfig(h)?i[p]=(c=h.default)!=null?c:"#000000":this.isTextConfig(h)?i[p]=(u=h.default)!=null?u:"":typeof h=="object"&&h!==null&&Object.assign(i,this.flattenValues(h,p))}return i}isSpringConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="spring"}isEasingConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="easing"}isActionConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="action"}isSelectConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="select"&&"options"in t&&Array.isArray(t.options)}isColorConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="color"}isTextConfig(t){return typeof t=="object"&&t!==null&&"type"in t&&t.type==="text"}isHexColor(t){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(t)}formatLabel(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}inferRange(t){return t>=0&&t<=1?{min:0,max:1,step:.01}:t>=0&&t<=10?{min:0,max:t*3||10,step:.1}:t>=0&&t<=100?{min:0,max:t*3||100,step:1}:t>=0?{min:0,max:t*3||1e3,step:10}:{min:t*3,max:-t*3,step:1}}inferStep(t,n){const i=n-t;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(t,n,i){var a,c,u;if(t===void 0||!i)return n;switch(i.type){case"slider":{if(typeof t!="number"||typeof n!="number")return n;const d=(a=i.min)!=null?a:Number.NEGATIVE_INFINITY,h=(c=i.max)!=null?c:Number.POSITIVE_INFINITY,p=Math.min(h,Math.max(d,t));return typeof i.step!="number"||i.step<=0?p:this.roundToStep(p,d,h,i.step)}case"toggle":return typeof t=="boolean"?t:n;case"select":{if(typeof t!="string")return n;const d=(u=i.options)!=null?u:[];return new Set(d.map(p=>typeof p=="string"?p:p.value)).has(t)?t:n}case"color":case"text":return typeof t=="string"?t:n;case"transition":return this.isSpringConfig(n)?this.isSpringConfig(t)?t:n:this.isEasingConfig(n)&&this.isEasingConfig(t)?t:n;case"action":return n;default:return n}}roundToStep(t,n,i,a){const c=n+Math.round((t-n)/a)*a,u=Math.min(i,Math.max(n,c)),d=this.stepPrecision(a);return Number(u.toFixed(d))}stepPrecision(t){const n=String(t),i=n.indexOf(".");return i===-1?0:n.length-i-1}mapControlsByPath(t){const n=new Map,i=a=>{for(const c of a){if(c.type==="folder"&&c.children){i(c.children);continue}n.set(c.path,c)}};return i(t),n}},un=new J8;function e7(t,n,i){const a=y.useId(),c=`${t}-${a}`,u=y.useRef(n),d=JSON.stringify(n);u.current=n;const h=y.useRef(i==null?void 0:i.onAction);h.current=i==null?void 0:i.onAction;const p=y.useRef(i==null?void 0:i.shortcuts);p.current=i==null?void 0:i.shortcuts;const g=JSON.stringify(i==null?void 0:i.shortcuts);y.useEffect(()=>(un.registerPanel(c,t,u.current,p.current),()=>un.unregisterPanel(c)),[c,t]);const _=y.useRef(!1);y.useEffect(()=>{if(!_.current){_.current=!0;return}un.updatePanel(c,t,u.current,p.current)},[c,t,d,g]),y.useEffect(()=>un.subscribeActions(c,b=>{var w;(w=h.current)==null||w.call(h,b)}),[c]);const x=y.useSyncExternalStore(b=>un.subscribe(c,b),()=>un.getValues(c),()=>un.getValues(c));return U5(n,x,"")}function U5(t,n,i){var c,u,d,h,p,g,_,x,b,w;const a={};for(const[S,C]of Object.entries(t)){if(S==="_collapsed")continue;const k=i?`${i}.${S}`:S;if(Array.isArray(C)&&C.length<=4&&typeof C[0]=="number")a[S]=(c=n[k])!=null?c:C[0];else if(typeof C=="number"||typeof C=="boolean"||typeof C=="string")a[S]=(u=n[k])!=null?u:C;else if(t7(C)||n7(C))a[S]=(d=n[k])!=null?d:C;else if(s7(C))a[S]=(h=n[k])!=null?h:C;else if(o7(C)){const M=(p=C.default)!=null?p:r7(C.options);a[S]=(g=n[k])!=null?g:M}else i7(C)?a[S]=(x=(_=n[k])!=null?_:C.default)!=null?x:"#000000":a7(C)?a[S]=(w=(b=n[k])!=null?b:C.default)!=null?w:"":typeof C=="object"&&C!==null&&(a[S]=U5(C,n,k))}return a}function hl(t,n){return typeof t=="object"&&t!==null&&"type"in t&&t.type===n}function t7(t){return hl(t,"spring")}function n7(t){return hl(t,"easing")}function s7(t){return hl(t,"action")}function o7(t){return hl(t,"select")&&"options"in t&&Array.isArray(t.options)}function i7(t){return hl(t,"color")}function a7(t){return hl(t,"text")}function r7(t){const n=t[0];return typeof n=="string"?n:n.value}function ip(t){const n=t.toString(),i=n.indexOf(".");return i===-1?0:n.length-i-1}function xd(t,n){const i=Math.round(t/n)*n;return parseFloat(i.toFixed(ip(n)))}function ic(t,n){var d,h,p,g;const i=(d=t.min)!=null?d:0,c=((h=t.max)!=null?h:1)-i,u=(p=n.mode)!=null?p:"normal";return u==="fine"?c*.01:u==="coarse"?c*.1:(g=t.step)!=null?g:1}function ac(t,n,i,a,c){var g,_;const u=un.getValue(t,n),d=(g=i.min)!=null?g:0,h=(_=i.max)!=null?_:1,p=Math.max(d,Math.min(h,u+c*a));un.updateValue(t,n,xd(p,a))}function l7(t,n,i){const a=(t-n)/(i-n),c=Math.round(a*10)/10;return Math.abs(a-c)<=.03125?n+c*(i-n):t}function ld(){const t=document.activeElement;if(!t)return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||t.contentEditable==="true"}function bm(t){if(t.altKey)return"alt";if(t.shiftKey)return"shift";if(t.metaKey)return"meta"}function W5(t,n){for(const i of t){if(i.path===n)return i;if(i.type==="folder"&&i.children){const a=W5(i.children,n);if(a)return a}}return null}var cd=4;function c7(t){switch(t){case"drag":return"Drag";case"move":return"Move";case"scroll-only":return"Scroll";default:return"Scroll"}}function u7(t){var c;const n=(c=t.interaction)!=null?c:"scroll",i=c7(n);return t.key?`${Y5(t.modifier)}${t.key.toUpperCase()}+${i}`:i}function d7(t){return t.key?`${Y5(t.modifier)}${t.key.toUpperCase()}`:"Press"}function Y5(t){return t==="alt"?"⌥":t==="shift"?"⇧":t==="meta"?"⌘":""}var F5=y.createContext({activePanelId:null,activePath:null});function f7({children:t}){const[n,i]=y.useState({activePanelId:null,activePath:null}),a=y.useRef(new Set),c=y.useRef(!1),u=y.useRef(null),d=y.useRef(0),h=y.useCallback(p=>{var g;for(const _ of a.current){const x=un.getPanels();for(const b of x)for(const[w,S]of Object.entries(b.shortcuts)){if(!S.key||S.key.toLowerCase()!==_||((g=S.interaction)!=null?g:"scroll")!==p)continue;const C=W5(b.controls,w);if(C&&C.type==="slider")return{panelId:b.id,path:w,control:C,shortcut:S}}}return null},[]);return y.useEffect(()=>{const p=C=>{if(ld())return;const k=C.key.toLowerCase();if((k==="arrowleft"||k==="arrowright"||k==="arrowup"||k==="arrowdown")&&a.current.size>0){const T=h("scroll")||h("drag")||h("move");if(T&&T.control.type==="slider"){C.preventDefault();const $=k==="arrowright"||k==="arrowup"?1:-1,F=ic(T.control,T.shortcut);ac(T.panelId,T.path,T.control,F,$);return}}const M=a.current.has(k);a.current.add(k);const R=bm(C),A=un.resolveShortcutTarget(k,R);if(A&&(i({activePanelId:A.panelId,activePath:A.path}),!M&&A.control.type==="toggle")){const T=un.getValue(A.panelId,A.path);un.updateValue(A.panelId,A.path,!T)}M||(u.current=null,d.current=0)},g=C=>{const k=C.key.toLowerCase();if(a.current.delete(k),c.current=!1,u.current=null,d.current=0,a.current.size===0)i({activePanelId:null,activePath:null});else{let M=!1;for(const R of a.current){const A=bm(C),T=un.resolveShortcutTarget(R,A);if(T){i({activePanelId:T.panelId,activePath:T.path}),M=!0;break}}M||i({activePanelId:null,activePath:null})}},_=C=>{var R,A;if(ld())return;const k=bm(C);if(a.current.size>0)for(const T of a.current){const $=un.resolveShortcutTarget(T,k);if(!$)continue;const{panelId:F,path:U,control:Q}=$;if(((A=(R=Q.shortcut)==null?void 0:R.interaction)!=null?A:"scroll")!=="scroll"||Q.type!=="slider")continue;C.preventDefault();const ne=ic(Q,Q.shortcut),le=C.deltaY>0?-1:1;ac(F,U,Q,ne,le);return}const M=un.resolveScrollOnlyTargets();for(const{panelId:T,path:$,control:F,shortcut:U}of M){if(F.type!=="slider")continue;C.preventDefault();const Q=ic(F,U),X=C.deltaY>0?-1:1;ac(T,$,F,Q,X);return}},x=C=>{if(ld()||a.current.size===0)return;h("drag")&&(c.current=!0,u.current=C.clientX,d.current=0,C.preventDefault())},b=()=>{c.current=!1,u.current=null,d.current=0},w=C=>{if(ld()||a.current.size===0)return;if(c.current){const M=h("drag");if(M&&u.current!==null){const R=C.clientX-u.current;u.current=C.clientX,d.current+=R;const A=ic(M.control,M.shortcut),T=Math.trunc(d.current/cd);T!==0&&(d.current-=T*cd,ac(M.panelId,M.path,M.control,A,T))}return}const k=h("move");if(k){if(u.current===null){u.current=C.clientX;return}const M=C.clientX-u.current;u.current=C.clientX,d.current+=M;const R=ic(k.control,k.shortcut),A=Math.trunc(d.current/cd);A!==0&&(d.current-=A*cd,ac(k.panelId,k.path,k.control,R,A))}},S=()=>{a.current.clear(),c.current=!1,u.current=null,d.current=0,i({activePanelId:null,activePath:null})};return window.addEventListener("keydown",p),window.addEventListener("keyup",g),window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",b),window.addEventListener("mousemove",w),window.addEventListener("blur",S),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g),window.removeEventListener("wheel",_),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",b),window.removeEventListener("mousemove",w),window.removeEventListener("blur",S)}},[h]),r.jsx(F5.Provider,{value:n,children:t})}var Wp="M6 9.5L12 15.5L18 9.5",h7="M5 12.75L10 19L19 5",vm={board:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",sparkle:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",body:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12"},m7=["M4 6H20","M4 12H10","M15 15L21 15","M18 12V18","M4 18H10"],p7=["M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5","M10 11V16","M14 11V16","M3.5 6H20.5","M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"],gx={path:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",circles:[{cx:"6",cy:"8",r:"0.998596"},{cx:"10.4999",cy:"3.5",r:"0.998657"},{cx:"9.75015",cy:"12.5",r:"0.997986"}]};function Rd({title:t,children:n,defaultOpen:i=!0,isRoot:a=!1,inline:c=!1,onOpenChange:u,toolbar:d}){const[h,p]=y.useState(i),[g,_]=y.useState(!i),x=y.useRef(null),[b,w]=y.useState(void 0),[S,C]=y.useState(typeof window<"u"?window.innerHeight:800);y.useEffect(()=>{if(!a)return;const R=()=>C(window.innerHeight);return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[a]),y.useEffect(()=>{const R=x.current;if(!R)return;const A=new ResizeObserver(()=>{if(h){const T=R.offsetHeight;w($=>$===T?$:T)}});return A.observe(R),()=>A.disconnect()},[h]);const k=()=>{if(c&&a)return;const R=!h;p(R),_(!R),u==null||u(R)},M=r.jsxs("div",{ref:a?x:void 0,className:`dialkit-folder ${a?"dialkit-folder-root":""}`,children:[r.jsxs("div",{className:`dialkit-folder-header ${a?"dialkit-panel-header":""}`,onClick:k,children:[r.jsxs("div",{className:"dialkit-folder-header-top",children:[a?h&&r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:t})}):r.jsx("div",{className:"dialkit-folder-title-row",children:r.jsx("span",{className:"dialkit-folder-title",children:t})}),a&&!c&&r.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("path",{opacity:"0.5",d:gx.path,fill:"currentColor"}),gx.circles.map((R,A)=>r.jsx("circle",{cx:R.cx,cy:R.cy,r:R.r,fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"},A))]}),!a&&r.jsx(Yo.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:h?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:r.jsx("path",{d:Wp})})]}),a&&d&&h&&r.jsx("div",{className:"dialkit-panel-toolbar",onClick:R=>R.stopPropagation(),children:d})]}),r.jsx(Pd,{initial:!1,children:h&&r.jsx(Yo.div,{className:"dialkit-folder-content",initial:a?void 0:{height:0,opacity:0},animate:a?void 0:{height:"auto",opacity:1},exit:a?void 0:{height:0,opacity:0},transition:a?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:a?void 0:{clipPath:"inset(0 -20px)"},children:r.jsx("div",{className:"dialkit-folder-inner",children:n})})})]});if(a){if(c)return r.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:M});const R=h?{width:280,height:b!==void 0?Math.min(b+10,S-32):"auto",borderRadius:14,boxShadow:"var(--dial-shadow)",cursor:void 0,overflowY:"auto"}:{width:42,height:42,borderRadius:"50%",boxSizing:"border-box",boxShadow:"var(--dial-shadow-collapsed)",overflow:"hidden",cursor:"pointer"};return r.jsx(Yo.div,{className:"dialkit-panel-inner",style:R,onClick:h?void 0:k,"data-collapsed":g,whileTap:h?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:M})}return M}var _7=3,g7=32,y7=200,x7=8;function Eo({label:t,value:n,onChange:i,min:a=0,max:c=1,step:u=.01,unit:d,shortcut:h,shortcutActive:p}){var Fe;const g=y.useRef(null),_=y.useRef(null),x=y.useRef(null),b=y.useRef(null),w=y.useRef(null),[S,C]=y.useState(!1),[k,M]=y.useState(!1),[R,A]=y.useState(!1),[T,$]=y.useState(!1),[F,U]=y.useState(!1),[Q,X]=y.useState(!1),[ne,le]=y.useState(""),q=y.useRef(null),te=y.useRef(null),ue=y.useRef(!0),ye=y.useRef(null),z=y.useRef(null),me=y.useRef(1),G=(n-a)/(c-a)*100,ve=S||R,Me=op(G),B=rd(Me,I=>`${I}%`),P=rd(Me,I=>`max(5px, calc(${I}% - 9px))`),L=op(0),ie=rd(L,I=>`calc(100% + ${Math.abs(I)}px)`),$e=rd(L,I=>I<0?I:0);y.useEffect(()=>{!S&&!ye.current&&Me.jump(G)},[G,S,Me]);const Te=y.useCallback(I=>{const J=z.current;if(!J)return n;const we=(I-J.left)/me.current,Ve=g.current?g.current.offsetWidth:J.width,We=Math.max(0,Math.min(1,we/Ve)),Ae=a+We*(c-a);return Math.max(a,Math.min(c,Ae))},[a,c,n]),Re=y.useCallback(I=>(I-a)/(c-a)*100,[a,c]),Qe=y.useCallback((I,J)=>{const pe=z.current;if(!pe)return 0;const we=J<0?pe.left-I:I-pe.right,Ve=Math.max(0,we-g7);return J*x7*Math.sqrt(Math.min(Ve/y7,1))},[]),Ze=y.useCallback(I=>{if(!Q&&(I.preventDefault(),I.target.setPointerCapture(I.pointerId),te.current={x:I.clientX,y:I.clientY},ue.current=!0,C(!0),g.current)){z.current=g.current.getBoundingClientRect();const J=g.current.offsetWidth;me.current=z.current.width/J}},[Q]),Ut=y.useCallback(I=>{if(!S||!te.current)return;const J=I.clientX-te.current.x,pe=I.clientY-te.current.y,we=Math.sqrt(J*J+pe*pe);if(ue.current&&we>_7&&(ue.current=!1,M(!0)),!ue.current){const Ve=z.current;Ve&&(I.clientX<Ve.left?L.jump(Qe(I.clientX,-1)):I.clientX>Ve.right?L.jump(Qe(I.clientX,1)):L.jump(0));const We=Te(I.clientX),Ae=Re(We);ye.current&&(ye.current.stop(),ye.current=null),Me.jump(Ae),i(xd(We,u))}},[S,Te,Re,i,Me,L,Qe]),Ft=y.useCallback(I=>{if(S){if(ue.current){const J=Te(I.clientX),we=(c-a)/u<=10?Math.max(a,Math.min(c,a+Math.round((J-a)/u)*u)):l7(J,a,c),Ve=Re(we);ye.current&&ye.current.stop(),ye.current=_x(Me,Ve,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{ye.current=null}}),i(xd(we,u))}L.get()!==0&&_x(L,0,{type:"spring",visualDuration:.35,bounce:.15}),C(!1),M(!1),te.current=null}},[S,Te,Re,i,a,c,Me,L]);y.useEffect(()=>(T&&!Q&&!F?q.current=setTimeout(()=>{U(!0)},800):!T&&!Q&&(q.current&&(clearTimeout(q.current),q.current=null),U(!1)),()=>{q.current&&clearTimeout(q.current)}),[T,Q,F]),y.useEffect(()=>{Q&&x.current&&(x.current.focus(),x.current.select())},[Q]);const Dt=I=>{le(I.target.value)},zt=()=>{const I=parseFloat(ne);if(!isNaN(I)){const J=Math.max(a,Math.min(c,I));i(xd(J,u))}X(!1),$(!1),U(!1)},sn=I=>{F&&(I.stopPropagation(),I.preventDefault(),X(!0),le(n.toFixed(ip(u))))},rn=I=>{I.key==="Enter"?zt():I.key==="Escape"&&(X(!1),$(!1))},qe=()=>{zt()},Se=n.toFixed(ip(u)),K=8,Be=10,Ye=10;let De=30,Je=78;const at=(Fe=g.current)==null?void 0:Fe.offsetWidth;at&&at>0&&(b.current&&(De=(Be+b.current.offsetWidth+K)/at*100),w.current&&(Je=(at-Ye-w.current.offsetWidth-K)/at*100));const Xe=G<De||G>Je,dt=ve?Xe?.1:k?.9:.5:0,ht=(c-a)/u,Ie=ht<=10?Array.from({length:ht-1},(I,J)=>{const pe=(J+1)*u/(c-a)*100;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${pe}%`}},J)}):Array.from({length:9},(I,J)=>{const pe=(J+1)*10;return r.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${pe}%`}},J)});return r.jsx("div",{ref:g,className:"dialkit-slider-wrapper",children:r.jsxs(Yo.div,{ref:_,className:`dialkit-slider ${ve?"dialkit-slider-active":""}`,onPointerDown:Ze,onPointerMove:Ut,onPointerUp:Ft,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{width:ie,x:$e},children:[r.jsx("div",{className:"dialkit-slider-hashmarks",children:Ie}),r.jsx(Yo.div,{className:"dialkit-slider-fill",style:{width:B}}),r.jsx(Yo.div,{className:"dialkit-slider-handle",style:{left:P,y:"-50%"},animate:{opacity:dt,scaleX:ve?1:.25,scaleY:ve&&Xe?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),r.jsxs("span",{ref:b,className:"dialkit-slider-label",children:[t,h&&r.jsx("span",{className:`dialkit-shortcut-pill${p?" dialkit-shortcut-pill-active":""}`,children:u7(h)})]}),Q?r.jsx("input",{ref:x,type:"text",className:"dialkit-slider-input",value:ne,onChange:Dt,onKeyDown:rn,onBlur:qe,onClick:I=>I.stopPropagation(),onMouseDown:I=>I.stopPropagation()}):r.jsx("span",{ref:w,className:`dialkit-slider-value ${F?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),onClick:sn,onMouseDown:I=>F&&I.stopPropagation(),style:{cursor:F?"text":"default"},children:Se})]})})}function Yp({options:t,value:n,onChange:i}){const a=y.useRef(null),c=y.useRef(!1),[u,d]=y.useState(null),h=y.useCallback(()=>{const g=a.current;if(!g)return;const _=g.querySelector('[data-active="true"]');_&&d({left:_.offsetLeft,width:_.offsetWidth})},[]);y.useLayoutEffect(()=>{h()},[n,t.length,h]);const p=c.current;return c.current=!0,r.jsxs("div",{className:"dialkit-segmented",ref:a,children:[u&&r.jsx("div",{className:"dialkit-segmented-pill",style:{left:u.left,width:u.width,transition:p?"left 0.2s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s cubic-bezier(0.25, 1, 0.5, 1)":"none"}}),t.map(g=>{const _=n===g.value;return r.jsx("button",{onClick:()=>i(g.value),className:"dialkit-segmented-button","data-active":String(_),children:g.label},g.value)})]})}function b7({label:t,checked:n,onChange:i,shortcut:a,shortcutActive:c}){return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsxs("span",{className:"dialkit-labeled-control-label",children:[t,a&&r.jsx("span",{className:`dialkit-shortcut-pill${c?" dialkit-shortcut-pill-active":""}`,children:d7(a)})]}),r.jsx(Yp,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:n?"on":"off",onChange:u=>i(u==="on")})]})}function v7(t,n,i,a){const c=[],d=a/100;let h=0,p=0;const g=1;for(let _=0;_<=100;_++){const x=_*d;c.push([x,h]);const b=-t*(h-g),w=-n*p,S=(b+w)/i;p+=S*d,h+=p*d}return c}function X5({spring:t,isSimpleMode:n}){var C,k,M,R,A;let c,u,d;if(n){const T=(C=t.visualDuration)!=null?C:.3,$=(k=t.bounce)!=null?k:.2;d=1,c=2*Math.PI/T,c=Math.pow(c,2),u=2*(1-$)*Math.sqrt(c*d)}else c=(M=t.stiffness)!=null?M:400,u=(R=t.damping)!=null?R:17,d=(A=t.mass)!=null?A:1;const h=2,p=v7(c,u,d,h),g=p.map(([,T])=>T),_=Math.min(...g),b=Math.max(...g)-_,w=p.map(([T,$],F)=>{const U=T/h*256,X=140-(($-_)/(b||1)*140*.6+140*.2);return`${F===0?"M":"L"} ${U} ${X}`}).join(" "),S=[];for(let T=1;T<4;T++){const $=64*T,F=140/4*T;S.push(r.jsx("line",{x1:$,y1:0,x2:$,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${T}`),r.jsx("line",{x1:0,y1:F,x2:256,y2:F,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${T}`))}return r.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[S,r.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:w,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function w7({panelId:t,path:n,label:i,spring:a,onChange:c}){var _,x,b,w,S;const u=y.useSyncExternalStore(C=>un.subscribe(t,C),()=>un.getSpringMode(t,n),()=>un.getSpringMode(t,n)),d=u==="simple",h=y.useRef({simple:a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d?h.current.simple=a:h.current.advanced=a;const p=C=>{un.updateSpringMode(t,n,C),c(C==="simple"?h.current.simple:h.current.advanced)},g=(C,k)=>{if(d){const{stiffness:M,damping:R,mass:A,...T}=a;c({...T,[C]:k})}else{const{visualDuration:M,bounce:R,...A}=a;c({...A,[C]:k})}};return r.jsx(Rd,{title:i,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx(X5,{spring:a,isSimpleMode:d}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Yp,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:p})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(Eo,{label:"Duration",value:(_=a.visualDuration)!=null?_:.3,onChange:C=>g("visualDuration",C),min:.1,max:1,step:.05,unit:"s"}),r.jsx(Eo,{label:"Bounce",value:(x=a.bounce)!=null?x:.2,onChange:C=>g("bounce",C),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(Eo,{label:"Stiffness",value:(b=a.stiffness)!=null?b:400,onChange:C=>g("stiffness",C),min:1,max:1e3,step:10}),r.jsx(Eo,{label:"Damping",value:(w=a.damping)!=null?w:17,onChange:C=>g("damping",C),min:1,max:100,step:1}),r.jsx(Eo,{label:"Mass",value:(S=a.mass)!=null?S:1,onChange:C=>g("mass",C),min:.1,max:10,step:.1})]})]})})}function S7({easing:t}){const n=t.ease,i=200,a=10,u=(i-a*2)/2,d=(b,w)=>({x:a+(b+.5)*u,y:a+(1.5-w)*u}),h=d(0,0),p=d(1,1),g=d(n[0],n[1]),_=d(n[2],n[3]),x=`M ${h.x} ${h.y} C ${g.x} ${g.y}, ${_.x} ${_.y}, ${p.x} ${p.y}`;return r.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[r.jsx("line",{x1:h.x,y1:h.y,x2:p.x,y2:p.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),r.jsx("path",{d:x,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function k7({panelId:t,path:n,label:i,value:a,onChange:c}){var S,C,k,M,R;const u=y.useSyncExternalStore(A=>un.subscribe(t,A),()=>un.getTransitionMode(t,n),()=>un.getTransitionMode(t,n)),d=u==="easing",h=u==="simple",p=y.useRef({easing:a.type==="easing"?a:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},simple:a.type==="spring"&&a.visualDuration!==void 0?a:{type:"spring",visualDuration:.3,bounce:.2},advanced:a.type==="spring"&&a.stiffness!==void 0?a:{type:"spring",stiffness:200,damping:25,mass:1}});d&&a.type==="easing"?p.current.easing=a:h&&a.type==="spring"?p.current.simple=a:u==="advanced"&&a.type==="spring"&&(p.current.advanced=a);const g=a.type==="spring"?a:p.current.simple,_=a.type==="easing"?a:p.current.easing,x=A=>{un.updateTransitionMode(t,n,A),c(A==="easing"?p.current.easing:A==="simple"?p.current.simple:p.current.advanced)},b=(A,T)=>{if(h){const{stiffness:$,damping:F,mass:U,...Q}=g;c({...Q,[A]:T})}else{const{visualDuration:$,bounce:F,...U}=g;c({...U,[A]:T})}},w=(A,T)=>{const $=[..._.ease];$[A]=T,c({..._,ease:$})};return r.jsx(Rd,{title:i,defaultOpen:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d?r.jsx(S7,{easing:_}):r.jsx(X5,{spring:g,isSimpleMode:h}),r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),r.jsx(Yp,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:u,onChange:x})]}),d?r.jsxs(r.Fragment,{children:[r.jsx(Eo,{label:"x1",value:_.ease[0],onChange:A=>w(0,A),min:0,max:1,step:.01}),r.jsx(Eo,{label:"y1",value:_.ease[1],onChange:A=>w(1,A),min:-1,max:2,step:.01}),r.jsx(Eo,{label:"x2",value:_.ease[2],onChange:A=>w(2,A),min:0,max:1,step:.01}),r.jsx(Eo,{label:"y2",value:_.ease[3],onChange:A=>w(3,A),min:-1,max:2,step:.01}),r.jsx(Eo,{label:"Duration",value:_.duration,onChange:A=>c({..._,duration:A}),min:.1,max:2,step:.05,unit:"s"}),r.jsx(j7,{ease:_.ease,onChange:A=>c({..._,ease:A})})]}):h?r.jsxs(r.Fragment,{children:[r.jsx(Eo,{label:"Duration",value:(S=g.visualDuration)!=null?S:.3,onChange:A=>b("visualDuration",A),min:.1,max:1,step:.05,unit:"s"}),r.jsx(Eo,{label:"Bounce",value:(C=g.bounce)!=null?C:.2,onChange:A=>b("bounce",A),min:0,max:1,step:.05})]}):r.jsxs(r.Fragment,{children:[r.jsx(Eo,{label:"Stiffness",value:(k=g.stiffness)!=null?k:400,onChange:A=>b("stiffness",A),min:1,max:1e3,step:10}),r.jsx(Eo,{label:"Damping",value:(M=g.damping)!=null?M:17,onChange:A=>b("damping",A),min:1,max:100,step:1}),r.jsx(Eo,{label:"Mass",value:(R=g.mass)!=null?R:1,onChange:A=>b("mass",A),min:.1,max:10,step:.1})]})]})})}function yx(t){return t.map(n=>parseFloat(n.toFixed(2))).join(", ")}function C7(t){const n=t.split(",").map(i=>parseFloat(i.trim()));return n.length===4&&n.every(i=>!isNaN(i))?n:null}function j7({ease:t,onChange:n}){const[i,a]=y.useState(!1),[c,u]=y.useState(""),d=()=>{u(yx(t)),a(!0)},h=()=>{const g=C7(c);g&&n(g),a(!1)},p=g=>{g.key==="Enter"&&g.target.blur()};return r.jsxs("div",{className:"dialkit-labeled-control",children:[r.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:i?c:yx(t),onChange:g=>u(g.target.value),onFocus:d,onBlur:h,onKeyDown:p,spellCheck:!1})]})}function M7({label:t,value:n,onChange:i,placeholder:a}){return r.jsxs("div",{className:"dialkit-text-control",children:[r.jsx("label",{className:"dialkit-text-label",children:t}),r.jsx("input",{type:"text",className:"dialkit-text-input",value:n,onChange:c=>i(c.target.value),placeholder:a})]})}function T7(t){return t.replace(/\b\w/g,n=>n.toUpperCase())}function E7(t){return t.map(n=>typeof n=="string"?{value:n,label:T7(n)}:n)}function D7({label:t,value:n,options:i,onChange:a}){var C;const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState(null),[_,x]=y.useState(null),b=E7(i),w=b.find(k=>k.value===n),S=y.useCallback(()=>{const k=d.current;if(!k)return;const M=k.getBoundingClientRect(),R=8+b.length*36,A=window.innerHeight-M.bottom-4,T=A<R&&M.top>A;x({top:T?M.top-4:M.bottom+4,left:M.left,width:M.width,above:T})},[b.length]);return y.useEffect(()=>{var M;const k=(M=d.current)==null?void 0:M.closest(".dialkit-root");g(k!=null?k:document.body)},[]),y.useEffect(()=>{c&&S()},[c,S]),y.useEffect(()=>{if(!c)return;const k=M=>{const R=M.target;d.current&&!d.current.contains(R)&&h.current&&!h.current.contains(R)&&u(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[c]),r.jsxs("div",{className:"dialkit-select-row",children:[r.jsxs("button",{ref:d,className:"dialkit-select-trigger",onClick:()=>u(!c),"data-open":String(c),children:[r.jsx("span",{className:"dialkit-select-label",children:t}),r.jsxs("div",{className:"dialkit-select-right",children:[r.jsx("span",{className:"dialkit-select-value",children:(C=w==null?void 0:w.label)!=null?C:n}),r.jsx(Yo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:Wp})})]})]}),p&&kc.createPortal(r.jsx(Pd,{children:c&&_&&r.jsx(Yo.div,{ref:h,className:"dialkit-select-dropdown",initial:{opacity:0,y:_.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:_.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:_.left,width:_.width,..._.above?{bottom:window.innerHeight-_.top,transformOrigin:"bottom"}:{top:_.top,transformOrigin:"top"}},children:b.map(k=>r.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===n),onClick:()=>{a(k.value),u(!1)},children:k.label},k.value))})}),p)]})}var A7=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function N7({label:t,value:n,onChange:i}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useRef(null);y.useEffect(()=>{a||d(n)},[n,a]);function p(){c(!1),A7.test(u)?i(u):d(n)}function g(_){_.key==="Enter"?p():_.key==="Escape"&&(c(!1),d(n))}return r.jsxs("div",{className:"dialkit-color-control",children:[r.jsx("span",{className:"dialkit-color-label",children:t}),r.jsxs("div",{className:"dialkit-color-inputs",children:[a?r.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:u,onChange:_=>d(_.target.value),onBlur:p,onKeyDown:g,autoFocus:!0}):r.jsx("span",{className:"dialkit-color-hex",onClick:()=>c(!0),children:(n!=null?n:"").toUpperCase()}),r.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:n},onClick:()=>{var _;return(_=h.current)==null?void 0:_.click()},title:"Pick color"}),r.jsx("input",{ref:h,type:"color",className:"dialkit-color-picker-native",value:n.length===4?R7(n):n.slice(0,7),onChange:_=>i(_.target.value)})]})]})}function R7(t){return t.length!==4?t:`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`}function B7({panelId:t,presets:n,activePresetId:i,onAdd:a}){const[c,u]=y.useState(!1),d=y.useRef(null),h=y.useRef(null),[p,g]=y.useState({top:0,left:0,width:0}),_=n.length>0,x=n.find(M=>M.id===i),b=y.useCallback(()=>{var R;if(!_)return;const M=(R=d.current)==null?void 0:R.getBoundingClientRect();M&&g({top:M.bottom+4,left:M.left,width:M.width}),u(!0)},[_]),w=y.useCallback(()=>u(!1),[]),S=y.useCallback(()=>{c?w():b()},[c,b,w]);y.useEffect(()=>{if(!c)return;const M=R=>{var T,$;const A=R.target;(T=d.current)!=null&&T.contains(A)||($=h.current)!=null&&$.contains(A)||w()};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[c,w]);const C=M=>{M?un.loadPreset(t,M):un.clearActivePreset(t),w()},k=(M,R)=>{M.stopPropagation(),un.deletePreset(t,R)};return r.jsxs("div",{className:"dialkit-preset-manager",children:[r.jsxs("button",{ref:d,className:"dialkit-preset-trigger",onClick:S,"data-open":String(c),"data-has-preset":String(!!x),"data-disabled":String(!_),children:[r.jsx("span",{className:"dialkit-preset-label",children:x?x.name:"Version 1"}),r.jsx(Yo.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:c?180:0,opacity:_?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:r.jsx("path",{d:Wp})})]}),kc.createPortal(r.jsx(Pd,{children:c&&r.jsxs(Yo.div,{ref:h,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:p.top,left:p.left,minWidth:p.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[r.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>C(null),children:r.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),n.map(M=>r.jsxs("div",{className:"dialkit-preset-item","data-active":String(M.id===i),onClick:()=>C(M.id),children:[r.jsx("span",{className:"dialkit-preset-name",children:M.name}),r.jsx("button",{className:"dialkit-preset-delete",onClick:R=>k(R,M.id),title:"Delete preset",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p7.map((R,A)=>r.jsx("path",{d:R},A))})})]},M.id))]})}),document.body)]})}function L7({panel:t,defaultOpen:n=!0,inline:i=!1}){const[a,c]=y.useState(!1),[u,d]=y.useState(n),h=y.useContext(F5);Object.keys(t.shortcuts).length>0;const p=y.useSyncExternalStore(k=>un.subscribe(t.id,k),()=>un.getValues(t.id),()=>un.getValues(t.id)),g=un.getPresets(t.id),_=un.getActivePresetId(t.id),x=()=>{const k=g.length+2;un.savePreset(t.id,`Version ${k}`)},b=()=>{const k=JSON.stringify(p,null,2),M=`Update the useDialKit configuration for "${t.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(M),c(!0),setTimeout(()=>c(!1),1500)},w=k=>{var R,A,T;const M=p[k.path];switch(k.type){case"slider":return r.jsx(Eo,{label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$),min:k.min,max:k.max,step:k.step,shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"toggle":return r.jsx(b7,{label:k.label,checked:M,onChange:$=>un.updateValue(t.id,k.path,$),shortcut:k.shortcut,shortcutActive:h.activePanelId===t.id&&h.activePath===k.path},k.path);case"spring":return r.jsx(w7,{panelId:t.id,path:k.path,label:k.label,spring:M,onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"transition":return r.jsx(k7,{panelId:t.id,path:k.path,label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"folder":return r.jsx(Rd,{title:k.label,defaultOpen:(R=k.defaultOpen)!=null?R:!0,children:(A=k.children)==null?void 0:A.map(w)},k.path);case"text":return r.jsx(M7,{label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$),placeholder:k.placeholder},k.path);case"select":return r.jsx(D7,{label:k.label,value:M,options:(T=k.options)!=null?T:[],onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"color":return r.jsx(N7,{label:k.label,value:M,onChange:$=>un.updateValue(t.id,k.path,$)},k.path);case"action":return r.jsx("button",{className:"dialkit-button",onClick:()=>un.triggerAction(t.id,k.path),children:k.label},k.path);default:return null}},S=()=>t.controls.map(w),C=r.jsxs(r.Fragment,{children:[r.jsx(Yo.button,{className:"dialkit-toolbar-add",onClick:x,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:m7.map((k,M)=>r.jsx("path",{d:k},M))})}),r.jsx(B7,{panelId:t.id,presets:g,activePresetId:_,onAdd:x}),r.jsx(Yo.button,{className:"dialkit-toolbar-add",onClick:b,title:"Copy parameters",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:r.jsx("span",{style:{position:"relative",width:16,height:16},children:r.jsx(Pd,{initial:!1,mode:"wait",children:a?r.jsx(Yo.svg,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:r.jsx("path",{d:h7})},"check"):r.jsxs(Yo.svg,{viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",inset:0,width:16,height:16,color:"var(--dial-text-label)"},initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.08},children:[r.jsx("path",{d:vm.board,stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),r.jsx("path",{d:vm.sparkle,fill:"currentColor"}),r.jsx("path",{d:vm.body,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})})})]});return r.jsx("div",{className:"dialkit-panel-wrapper",children:r.jsx(Rd,{title:t.name,defaultOpen:n,isRoot:!0,inline:i,onOpenChange:d,toolbar:C,children:S()})})}var O7=typeof process<"u"?!1:!(typeof import.meta<"u");function z7({position:t="top-right",defaultOpen:n=!0,mode:i="popover",theme:a="system",productionEnabled:c=O7}){if(!c)return null;const[u,d]=y.useState([]),[h,p]=y.useState(!1),g=i==="inline",_=y.useRef(null),[x,b]=y.useState(null),[w,S]=y.useState(t),C=y.useRef(null),k=y.useRef(!1),M=y.useRef(null),R=y.useRef(!1);y.useEffect(()=>(p(!0),d(un.getPanels()),un.subscribeGlobal(()=>{d(un.getPanels())})),[]),y.useEffect(()=>{if(!_.current||g)return;const Q=new MutationObserver(()=>{var le;const X=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!X)return;if(X.getAttribute("data-collapsed")==="true")C.current&&b(C.current);else{if(x){C.current=x;const q=x.x+21,te=window.innerWidth/2;S(q<te?"top-left":"top-right")}else S(t);b(null)}});return Q.observe(_.current,{subtree:!0,attributes:!0,attributeFilter:["data-collapsed"]}),()=>Q.disconnect()},[g,x,t]);const A=y.useCallback(Q=>{var le;const X=(le=_.current)==null?void 0:le.querySelector(".dialkit-panel-inner");if(!X||X.getAttribute("data-collapsed")!=="true")return;const ne=_.current.getBoundingClientRect();M.current={pointerX:Q.clientX,pointerY:Q.clientY,elX:ne.left,elY:ne.top},R.current=!1,k.current=!0,Q.target.setPointerCapture(Q.pointerId)},[]),T=y.useCallback(Q=>{if(!k.current||!M.current)return;const X=Q.clientX-M.current.pointerX,ne=Q.clientY-M.current.pointerY;!R.current&&Math.abs(X)+Math.abs(ne)<4||(R.current=!0,b({x:M.current.elX+X,y:M.current.elY+ne}))},[]),$=y.useCallback(Q=>{var X;if(k.current&&(k.current=!1,M.current=null,R.current)){Q.stopPropagation();const ne=(X=_.current)==null?void 0:X.querySelector(".dialkit-panel-inner");if(ne){const le=q=>{q.stopPropagation()};ne.addEventListener("click",le,{capture:!0,once:!0})}}},[]);if(!h||typeof window>"u"||u.length===0)return null;const F=x?{top:x.y,left:x.x,right:"auto",bottom:"auto"}:void 0,U=r.jsx(f7,{children:r.jsx("div",{className:"dialkit-root","data-mode":i,"data-theme":a,children:r.jsx("div",{ref:_,className:"dialkit-panel","data-position":g||x?void 0:w,"data-mode":i,style:F,onPointerDown:g?void 0:A,onPointerMove:g?void 0:T,onPointerUp:g?void 0:$,children:u.map(Q=>r.jsx(L7,{panel:Q,defaultOpen:g||n,inline:g},Q.id))})})});return g?U:kc.createPortal(U,document.body)}const $7=()=>(e7("Git Visualizer",{preview:[1,0,1]}),null),I7=({children:t})=>r.jsxs(r.Fragment,{children:[t,r.jsx($7,{}),r.jsx(z7,{productionEnabled:!0,defaultOpen:!1,theme:"system"}),r.jsx(P6,{})]});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="r"&&(t.preventDefault(),location.reload())});bv.createRoot(document.getElementById("root")).render(r.jsx(I7,{children:r.jsx(ww,{})}));
